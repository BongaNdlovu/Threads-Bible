/**
 * CP-03 · STRUCTURAL VERIFY (tool 2 of 3).
 *
 * One question: "compared with <base>, did ONLY in-scope prose strings change?"
 *
 * Usage:
 *   npx tsx scripts/cp03StructuralVerify.ts [--book <slug>]... [--base <git-ref>] [--json <path>] [--strict-gate]
 *
 *   --book <slug>   check only entries whose id starts with `<slug>-` (repeatable /
 *                   comma-separated; omitted = every book present on either side).
 *                   A pillar chain is checked when one of its steps carries a
 *                   `verseId` from a selected book.
 *   --base <ref>    git ref to compare against (default: HEAD)
 *   --json <path>   write a machine-readable report
 *   --strict-gate   treat PRE-EXISTING clarity-gate failures (present at <base>) as
 *                   run failures too. Default: they are listed as PRE-EXISTING notes
 *                   and do not fail the run, because check 6 then answers "did this
 *                   change introduce a gate failure?" — see NO_BANNED below.
 *
 * PARSING APPROACH (documented, as required — it is a real TypeScript parse, not a
 * regex sweep of the file):
 *   Each side of each file (base = `git show <base>:src/data/<file>`, after = the
 *   working tree on disk) is parsed with the TypeScript compiler API
 *   (`ts.createSourceFile(..., ScriptKind.TS)`, i.e. the same parser `tsc` uses).
 *   The AST is walked to the exported initialiser of `threadDetails` / `threadChains`
 *   (src/data/threadDetails.ts) and `bookThreadDetails` (src/data/bookThreadDetails.ts).
 *   Object literals become path-addressable leaves keyed exactly like the sweep
 *   contract: `title`, `principle`, `who`, `whoByRef["John 1:1-3"]`,
 *   `cumulativePrinciples[0]`, `terms[2].exposition`, `sameTestamentLinks[0].connection`,
 *   plus `sourceKeywords[1]`, `terms.length`, `steps[3].connection`, `ref`, `id`, ...
 *   Every leaf value is stored as canonical JSON, so comparison is by VALUE (a
 *   reformat that leaves a string or an array's order untouched is not a change —
 *   that is the only relaxation vs. raw byte spans; raw-byte comparison of the two
 *   source files is implicitly covered because every leaf of every entry is compared).
 *   The parse is proven by the step-4 self-test: a mutated `sourceKeywords` and a
 *   dropped citation are both detected, and a zero-unit parse is a hard ERROR
 *   (never a silent PASS).
 *
 * CHECKS (per book group; chains are reported as their own group):
 *   1 KEYSET              entry-id sets identical, per file
 *   2 NONPROSE_FIXITY     sourceKeywords / fulfillmentKeywords (values AND order),
 *                         terms[].term|original|translit|strongs, terms.length,
 *                         ref, verseId, testament, chainId, id, origin, draft
 *   3 PROSE_ONLY_WRITES   every difference sits on an in-scope prose path
 *   4 CITATION_FIXITY     <Book> <ch>:<v> and <Book> <ch>:<v>-<v> multisets equal;
 *                         no bare <ch>:<v> newly introduced without a book name
 *   5 SCRIPT_FIXITY       Hebrew / Greek run multisets, transliteration fields and
 *                         /[HG]\d{1,4}/ Strong's tokens unchanged. The corpus is EVERY
 *                         string leaf of the unit — in-scope prose AND the structural
 *                         leaves that carry the original languages
 *                         (terms[].original, terms[].translit, terms[].strongs,
 *                         sourceKeywords, fulfillmentKeywords, ref/verseId). No
 *                         original-language text rests on NONPROSE_FIXITY alone.
 *   6 NO_BANNED           no prose string in the working tree introduces a checkProse()
 *                         violation that <base> did not already have. Violations that
 *                         already exist at <base> are printed as PRE-EXISTING notes
 *                         with the entry/path/detail (never hidden) and are counted in
 *                         the "strict reading" line; pass --strict-gate to make them
 *                         fail the run. Measured on the canon at HEAD there are 22 such
 *                         pre-existing violations (in books with no CP-02 rewrite), so
 *                         the literal "no prose string at HEAD violates the gate"
 *                         reading is FAIL canon-wide and PASS for e.g. --book num.
 *
 * Exit code: 0 when every check passes, 1 when any check fails (or the parse fails).
 */
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import ts from 'typescript';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../src/data/bookRegistry';
import { normalizeBookName } from '../src/data/refParser';
import { checkProse, MAX_SENTENCE_WORDS } from './checkReadability';
import type { ProseViolation } from './checkReadability';

/* ------------------------------------------------------------------- types */

type DataFile = 'threadDetails' | 'bookThreadDetails';

const FILES: { file: DataFile; relPath: string; constName: string; shape: 'entries' | 'chains' }[] = [
  { file: 'threadDetails', relPath: 'src/data/threadDetails.ts', constName: 'threadDetails', shape: 'entries' },
  { file: 'threadDetails', relPath: 'src/data/threadDetails.ts', constName: 'threadChains', shape: 'chains' },
  { file: 'bookThreadDetails', relPath: 'src/data/bookThreadDetails.ts', constName: 'bookThreadDetails', shape: 'entries' },
];

type Val =
  | { k: 'str'; v: string }
  | { k: 'bool'; v: boolean }
  | { k: 'num'; v: string }
  | { k: 'arr'; items: Val[] }
  | { k: 'obj'; props: { name: string; val: Val }[] }
  | { k: 'raw'; v: string };

interface Unit {
  id: string;
  kind: 'entry' | 'chain';
  file: DataFile;
  paths: Map<string, string>; // contract path -> canonical JSON value
  tree: Val;
}

interface ParsedFile {
  file: DataFile;
  constName: string;
  units: Map<string, Unit>;
  warnings: string[];
}

type CheckName =
  | 'KEYSET'
  | 'NONPROSE_FIXITY'
  | 'PROSE_ONLY_WRITES'
  | 'CITATION_FIXITY'
  | 'SCRIPT_FIXITY'
  | 'NO_BANNED';

const CHECK_ORDER: CheckName[] = [
  'KEYSET',
  'NONPROSE_FIXITY',
  'PROSE_ONLY_WRITES',
  'CITATION_FIXITY',
  'SCRIPT_FIXITY',
  'NO_BANNED',
];

interface Issue {
  id: string;
  path: string;
  message: string;
  base?: string;
  after?: string;
  /** 'note' issues are printed but never fail the run. */
  severity?: 'note';
}

interface GroupStats {
  keyset: { base: number; after: number };
  nonProseLeaves: number;
  proseLeaves: number;
  citations: number;
  addedCitations: number;
  droppedCitations: number;
  newBareCitations: number;
  droppedBareCitations: number;
  hebrew: number;
  greek: number;
  translit: number;
  strongs: number;
  scriptLeaves: number;
  bannedChecked: number;
  bannedBase: number;
  bannedNew: number;
  bannedPreexisting: number;
  bannedResolved: number;
}

const CHAIN_GROUP = 'CHAINS';

/* --------------------------------------------------------------- utilities */

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function displayVal(canonical: string | undefined, max = 120): string {
  if (canonical === undefined) return '(absent)';
  let text = canonical;
  try {
    const parsed = JSON.parse(canonical);
    text = typeof parsed === 'string' ? parsed : JSON.stringify(parsed);
  } catch {
    /* raw leaf: use as-is */
  }
  const flat = text.replace(/\s+/g, ' ').trim();
  return flat.length > max ? `${flat.slice(0, max)}…` : flat;
}

function multisetDiff(before: string[], after: string[]): { added: string[]; dropped: string[] } {
  const count = (xs: string[]): Map<string, number> => {
    const m = new Map<string, number>();
    for (const x of xs) m.set(x, (m.get(x) ?? 0) + 1);
    return m;
  };
  const b = count(before);
  const a = count(after);
  const added: string[] = [];
  const dropped: string[] = [];
  for (const [k, n] of a) {
    const d = n - (b.get(k) ?? 0);
    for (let i = 0; i < d; i++) added.push(k);
  }
  for (const [k, n] of b) {
    const d = n - (a.get(k) ?? 0);
    for (let i = 0; i < d; i++) dropped.push(k);
  }
  added.sort();
  dropped.sort();
  return { added, dropped };
}

/* ------------------------------------------------------------ TS AST parse */

function pathJoin(prefix: string, name: string): string {
  const safe = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
  if (!prefix) return safe ? name : `["${name}"]`;
  return safe ? `${prefix}.${name}` : `${prefix}["${name}"]`;
}

function nodeToVal(node: ts.Node, sf: ts.SourceFile): Val {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return { k: 'str', v: node.text };
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword) return { k: 'bool', v: true };
  if (node.kind === ts.SyntaxKind.FalseKeyword) return { k: 'bool', v: false };
  if (ts.isNumericLiteral(node)) return { k: 'num', v: node.getText(sf) };
  if (ts.isArrayLiteralExpression(node)) {
    return { k: 'arr', items: node.elements.map(e => nodeToVal(e, sf)) };
  }
  if (ts.isObjectLiteralExpression(node)) {
    const props: { name: string; val: Val }[] = [];
    for (const p of node.properties) {
      if (ts.isPropertyAssignment(p)) {
        const name = ts.isIdentifier(p.name) || ts.isStringLiteral(p.name) || ts.isNumericLiteral(p.name)
          ? p.name.text
          : p.name.getText(sf);
        props.push({ name, val: nodeToVal(p.initializer, sf) });
      } else if (ts.isShorthandPropertyAssignment(p)) {
        props.push({ name: p.name.text, val: { k: 'raw', v: p.name.text } });
      } else {
        props.push({ name: p.getText(sf).slice(0, 40), val: { k: 'raw', v: p.getText(sf) } });
      }
    }
    return { k: 'obj', props };
  }
  return { k: 'raw', v: node.getText(sf).replace(/\s+/g, ' ').trim() };
}

function flatten(prefix: string, val: Val, out: Map<string, string>): void {
  switch (val.k) {
    case 'str':
      out.set(prefix, JSON.stringify(val.v));
      return;
    case 'bool':
      out.set(prefix, val.v ? 'true' : 'false');
      return;
    case 'num':
      out.set(prefix, val.v);
      return;
    case 'raw':
      out.set(prefix, JSON.stringify(val.v));
      return;
    case 'arr':
      out.set(`${prefix}.length`, String(val.items.length));
      val.items.forEach((item, i) => flatten(`${prefix}[${i}]`, item, out));
      return;
    case 'obj':
      for (const p of val.props) flatten(pathJoin(prefix, p.name), p.val, out);
      return;
  }
}

function findExportedConst(sf: ts.SourceFile, name: string): ts.Expression | null {
  for (const stmt of sf.statements) {
    if (!ts.isVariableStatement(stmt)) continue;
    const exported = stmt.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword) ?? false;
    if (!exported) continue;
    for (const decl of stmt.declarationList.declarations) {
      if (ts.isIdentifier(decl.name) && decl.name.text === name && decl.initializer) return decl.initializer;
    }
  }
  return null;
}

function parseSide(text: string, spec: (typeof FILES)[number], warnings: string[]): ParsedFile {
  const sf = ts.createSourceFile(spec.relPath, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const units = new Map<string, Unit>();
  const init = findExportedConst(sf, spec.constName);
  if (!init) {
    warnings.push(`could not find exported const ${spec.constName} in ${spec.relPath}`);
    return { file: spec.file, constName: spec.constName, units, warnings };
  }
  if (spec.shape === 'entries') {
    if (!ts.isObjectLiteralExpression(init)) {
      warnings.push(`${spec.constName} initialiser is not an object literal`);
      return { file: spec.file, constName: spec.constName, units, warnings };
    }
    for (const p of init.properties) {
      if (!ts.isPropertyAssignment(p)) continue;
      const key = ts.isIdentifier(p.name) || ts.isStringLiteral(p.name) || ts.isNumericLiteral(p.name)
        ? p.name.text
        : p.name.getText(sf);
      const tree = nodeToVal(p.initializer, sf);
      const paths = new Map<string, string>();
      flatten('', tree, paths);
      units.set(key, { id: key, kind: 'entry', file: spec.file, paths, tree });
    }
  } else {
    if (!ts.isArrayLiteralExpression(init)) {
      warnings.push(`${spec.constName} initialiser is not an array literal`);
      return { file: spec.file, constName: spec.constName, units, warnings };
    }
    init.elements.forEach((el, idx) => {
      const tree = nodeToVal(el, sf);
      const paths = new Map<string, string>();
      flatten('', tree, paths);
      const rawId = paths.get('id');
      let id = `chain[${idx}]`;
      if (rawId) {
        try {
          const parsed = JSON.parse(rawId);
          if (typeof parsed === 'string' && parsed) id = parsed;
        } catch {
          /* keep fallback */
        }
      } else {
        warnings.push(`chain at index ${idx} has no string id; keyed as ${id}`);
      }
      units.set(id, { id, kind: 'chain', file: spec.file, paths, tree });
    });
  }
  return { file: spec.file, constName: spec.constName, units, warnings };
}

/* ---------------------------------------------------- contract path predicates */

const PROSE_PATH_RES: RegExp[] = [
  /^(title|principle|who)$/,
  /^whoByRef\[".*"\]$/,
  /^cumulativePrinciples\[\d+\]$/,
  /^terms\[\d+\]\.(gloss|note|exposition)$/,
  /^sameTestamentLinks\[\d+\]\.connection$/,
  /^name$/,
  /^steps\[\d+\]\.(title|connection)$/,
];

const NONPROSE_PATH_RES: RegExp[] = [
  /^(sourceKeywords|fulfillmentKeywords)$/,
  /^(sourceKeywords|fulfillmentKeywords)\[\d+\]$/,
  /^(sourceKeywords|fulfillmentKeywords)\.length$/,
  /^terms\.length$/,
  /^terms\[\d+\]\.(term|original|translit|strongs)$/,
  /^(ref|verseId|testament|chainId|id|origin|draft)$/,
  /^steps\[\d+\]\.(ref|verseId|testament)$/,
];

function isProsePath(p: string): boolean {
  return PROSE_PATH_RES.some(re => re.test(p));
}

function isNonProseFixityPath(p: string): boolean {
  return NONPROSE_PATH_RES.some(re => re.test(p));
}

function proseEntries(u: Unit): { path: string; text: string }[] {
  const out: { path: string; text: string }[] = [];
  for (const [p, canonical] of u.paths) {
    if (!isProsePath(p)) continue;
    if (p === 'terms.length' || p.endsWith('.length')) continue;
    try {
      const parsed = JSON.parse(canonical);
      if (typeof parsed === 'string') out.push({ path: p, text: parsed });
    } catch {
      /* non-string leaf on a prose path: ignore */
    }
  }
  out.sort((a, b) => a.path.localeCompare(b.path));
  return out;
}

/** Every string leaf of a unit — in-scope prose plus the structural leaves that
 *  carry the original languages (terms[].original / .translit / .strongs, keywords,
 *  refs). This is the corpus SCRIPT_FIXITY compares, so no original-language text
 *  depends on NONPROSE_FIXITY alone. */
function allStringLeaves(u: Unit): string[] {
  const out: string[] = [];
  for (const [p, canonical] of u.paths) {
    if (p.endsWith('.length')) continue;
    try {
      const parsed = JSON.parse(canonical);
      if (typeof parsed === 'string') {
        out.push(parsed);
        continue;
      }
      if (Array.isArray(parsed)) {
        for (const item of parsed) if (typeof item === 'string') out.push(item);
      }
    } catch {
      /* raw (non-literal) leaf: not text */
    }
  }
  out.sort();
  return out;
}

/* --------------------------------------------------------- citation tokens */

export const ABBREVIATIONS = [
  'Gen', 'Ex', 'Exod', 'Lev', 'Num', 'Deut', 'Josh', 'Judg', 'Ruth', '1 Sam', '2 Sam',
  '1 Kgs', '2 Kgs', '1 Chr', '2 Chr', 'Ezra', 'Neh', 'Esth', 'Job', 'Ps', 'Pss', 'Prov',
  'Eccl', 'Song', 'Isa', 'Jer', 'Lam', 'Ezek', 'Dan', 'Hos', 'Joel', 'Amos', 'Obad',
  'Jonah', 'Mic', 'Nah', 'Hab', 'Zeph', 'Hag', 'Zech', 'Mal', 'Matt', 'Mark', 'Luke',
  'John', 'Acts', 'Rom', '1 Cor', '2 Cor', 'Gal', 'Eph', 'Phil', 'Col', '1 Thess',
  '2 Thess', '1 Tim', '2 Tim', 'Titus', 'Phlm', 'Heb', 'Jas', '1 Pet', '2 Pet',
  '1 John', '2 John', '3 John', 'Jude', 'Rev',
];

const BOOK_ALT = (() => {
  const all = [...BOOK_REGISTRY.map(b => b.name), ...ABBREVIATIONS];
  const uniq = Array.from(new Set(all)).sort((a, b) => b.length - a.length || a.localeCompare(b));
  return uniq.map(escapeRe).join('|');
})();

const CITATION_RE = new RegExp(
  `(?:^|[^\\p{L}\\p{N}])` + // boundary before the book name
    `([1-3]?\\s?(?:${BOOK_ALT}))\\.?` + // book name (captured)
    `\\s+(\\d{1,3}):(\\d{1,3})` + // chapter:verse
    `(?:\\s*-\\s*(\\d{1,3})(?::(\\d{1,3}))?)?`, // optional -verse or -chapter:verse
  'gu'
);

const BARE_RE = /(?<![\d:])(\d{1,3}):(\d{1,3})(?:\s*-\s*(\d{1,3}))?/g;

interface CitationScan {
  citations: string[];
  bare: string[];
}

function scanCitations(text: string): CitationScan {
  const citations: string[] = [];
  const spans: [number, number][] = [];
  const prefixLen = (m: RegExpExecArray): number => {
    const first = m[0].length;
    const rest = m[0].replace(/^[^\p{L}\p{N}]/u, '').length;
    return first - rest;
  };
  for (const m of text.matchAll(CITATION_RE)) {
    const rawBook = m[1];
    const canonical = normalizeBookName(rawBook);
    if (!BOOK_BY_NAME[canonical]) continue; // candidate was not a book name
    const ch = m[2];
    const v = m[3];
    const endV = m[4];
    const endCh = m[5];
    const token = endCh
      ? `${canonical} ${ch}:${v}-${endCh}:${endV}`
      : endV
        ? `${canonical} ${ch}:${v}-${endV}`
        : `${canonical} ${ch}:${v}`;
    citations.push(token);
    const start = (m.index ?? 0) + prefixLen(m);
    spans.push([start, (m.index ?? 0) + m[0].length]);
  }

  const bare: string[] = [];
  for (const m of text.matchAll(BARE_RE)) {
    const start = m.index ?? 0;
    const end = start + m[0].length;
    if (spans.some(([s, e]) => start < e && end > s)) continue; // already part of a book-qualified citation
    bare.push(m[3] ? `${m[1]}:${m[2]}-${m[3]}` : `${m[1]}:${m[2]}`);
  }
  return { citations, bare };
}

/* ------------------------------------------------------------ script tokens */

const HEBREW_RE = /[\u0590-\u05FF]+/g;
const GREEK_RE = /[\u0370-\u03FF\u1F00-\u1FFF]+/g;
const STRONGS_RE = /[HG]\d{1,4}/g;

function matches(text: string, re: RegExp): string[] {
  const out: string[] = [];
  for (const m of text.matchAll(re)) out.push(m[0]);
  return out;
}

/* -------------------------------------------------------------- CLI options */

interface Options {
  books: string[];
  base: string;
  jsonPath: string | null;
  strictGate: boolean;
  warnings: string[];
}

function parseArgs(argv: string[]): Options {
  const opts: Options = { books: [], base: 'HEAD', jsonPath: null, strictGate: false, warnings: [] };
  const addBooks = (v: string): void => {
    for (const part of v.split(',')) {
      const slug = part.trim().toLowerCase();
      if (!slug) continue;
      if (!BOOK_REGISTRY.some(b => b.slug === slug)) opts.warnings.push(`unknown book slug "${slug}" (not in BOOK_REGISTRY)`);
      opts.books.push(slug);
    }
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--book') {
      const v = argv[++i];
      if (!v) opts.warnings.push('--book needs a slug; ignored');
      else addBooks(v);
    } else if (arg.startsWith('--book=')) {
      addBooks(arg.slice('--book='.length));
    } else if (arg === '--base') {
      const v = argv[++i];
      if (!v) opts.warnings.push('--base needs a git ref; keeping HEAD');
      else opts.base = v;
    } else if (arg.startsWith('--base=')) {
      opts.base = arg.slice('--base='.length);
    } else if (arg === '--json') {
      const v = argv[++i];
      if (!v) opts.warnings.push('--json needs a path; ignored');
      else opts.jsonPath = v;
    } else if (arg.startsWith('--json=')) {
      opts.jsonPath = arg.slice('--json='.length);
    } else if (arg === '--strict-gate') {
      opts.strictGate = true;
    } else {
      opts.warnings.push(`unrecognised argument "${arg}" ignored`);
    }
  }
  opts.books = Array.from(new Set(opts.books));
  return opts;
}

/* --------------------------------------------------------------------- main */

interface CheckResult {
  group: string;
  check: CheckName;
  pass: boolean;
  summary: string;
  issues: Issue[];
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  const selected = new Set(opts.books);
  const bookSelected = (slug: string): boolean => selected.size === 0 || selected.has(slug);

  let baseSha = '';
  try {
    baseSha = execFileSync('git', ['rev-parse', '--short', opts.base], { encoding: 'utf8' }).trim();
  } catch {
    baseSha = '(unknown)';
  }

  const baseTexts = new Map<string, string>();
  for (const rel of Array.from(new Set(FILES.map(f => f.relPath)))) {
    try {
      baseTexts.set(
        rel,
        execFileSync('git', ['show', `${opts.base}:${rel}`], {
          encoding: 'utf8',
          maxBuffer: 128 * 1024 * 1024,
        })
      );
    } catch (err) {
      console.log(`ERROR: could not read ${rel} at ${opts.base}: ${(err as Error).message}`);
      process.exit(1);
    }
  }

  console.log('=== CP-03 STRUCTURAL VERIFY — "compared with ' + opts.base + ', did ONLY in-scope prose strings change?" ===');
  console.log(`base: ${opts.base} = ${baseSha}`);
  console.log(`scope: ${selected.size === 0 ? 'ALL BOOKS' : Array.from(selected).join(', ')} | chains: ${selected.size === 0 ? 'all' : 'those carrying a selected-book step'}`);
  console.log('parse: TypeScript compiler API (ts.createSourceFile) over the exported threadDetails / threadChains / bookThreadDetails ASTs;');
  console.log('       leaves flattened to contract paths and compared as canonical JSON values, base vs working tree.');
  console.log(`gate: checkProse() from scripts/checkReadability.ts (MAX_SENTENCE_WORDS=${MAX_SENTENCE_WORDS})`);
  for (const w of opts.warnings) console.log(`WARNING: ${w}`);

  const allResults: CheckResult[] = [];
  const parseWarnings: string[] = [];
  const coverage = {
    books: 0,
    entries: 0,
    chains: 0,
    nonProseLeaves: 0,
    proseLeaves: 0,
    proseStrings: 0,
    scriptLeaves: 0,
    hebrew: 0,
    greek: 0,
    translit: 0,
    strongs: 0,
    citations: 0,
    bannedNew: 0,
    bannedPreexisting: 0,
  };

  for (const spec of FILES) {
    const baseParsed = parseSide(baseTexts.get(spec.relPath)!, spec, parseWarnings);
    let afterText = '';
    try {
      afterText = readFileSync(spec.relPath, 'utf8');
    } catch (err) {
      console.log(`ERROR: could not read ${spec.relPath} from the working tree: ${(err as Error).message}`);
      process.exit(1);
    }
    const afterParsed = parseSide(afterText, spec, parseWarnings);

    // Hard safety: a parse that finds nothing must never look like a PASS.
    if (baseParsed.units.size === 0 || afterParsed.units.size === 0) {
      console.log(`ERROR: ${spec.constName} parsed to ${baseParsed.units.size} base / ${afterParsed.units.size} working-tree units — refusing to report a verdict.`);
      process.exit(1);
    }

    const groupOf = (u: Unit): string => (u.kind === 'chain' ? CHAIN_GROUP : u.id.split('-')[0]);

    const chainTouchesSelection = (u: Unit): boolean => {
      if (selected.size === 0) return true;
      for (const [p, canonical] of u.paths) {
        if (!/^steps\[\d+\]\.verseId$/.test(p)) continue;
        try {
          const verseId = JSON.parse(canonical);
          if (typeof verseId === 'string') {
            const slug = verseId.split('-')[0];
            if (selected.has(slug)) return true;
          }
        } catch {
          /* ignore */
        }
      }
      return false;
    };

    const inScope = (u: Unit): boolean =>
      u.kind === 'chain' ? chainTouchesSelection(u) : bookSelected(u.id.split('-')[0]);

    // ---- group accumulators ----
    const groups = new Map<string, GroupStats>();
    const issues = new Map<string, Map<CheckName, Issue[]>>();
    const statsFor = (g: string): GroupStats => {
      const s = groups.get(g);
      if (s) return s;
      const fresh: GroupStats = {
        keyset: { base: 0, after: 0 },
        nonProseLeaves: 0,
        proseLeaves: 0,
        citations: 0,
        addedCitations: 0,
        droppedCitations: 0,
        newBareCitations: 0,
        droppedBareCitations: 0,
        hebrew: 0,
        greek: 0,
        translit: 0,
        strongs: 0,
        scriptLeaves: 0,
        bannedChecked: 0,
        bannedBase: 0,
        bannedNew: 0,
        bannedPreexisting: 0,
        bannedResolved: 0,
      };
      groups.set(g, fresh);
      return fresh;
    };
    const addIssue = (g: string, check: CheckName, issue: Issue): void => {
      const byGroup = issues.get(g) ?? new Map<CheckName, Issue[]>();
      const list = byGroup.get(check) ?? [];
      list.push(issue);
      byGroup.set(check, list);
      issues.set(g, byGroup);
    };

    // ---- 1. KEYSET (scoped to the selected books; chains when they carry a selected step) ----
    for (const [id, afterUnit] of afterParsed.units) {
      if (!inScope(afterUnit)) continue;
      const g = groupOf(afterUnit);
      const s = statsFor(g);
      s.keyset.after++;
      const baseUnit = baseParsed.units.get(id);
      if (baseUnit) s.keyset.base++;
      else addIssue(g, 'KEYSET', { id, path: '(entry id)', message: `added in the working tree (not present at ${opts.base})` });
    }
    for (const [id, baseUnit] of baseParsed.units) {
      if (!inScope(baseUnit)) continue;
      if (!afterParsed.units.has(id)) {
        addIssue(groupOf(baseUnit), 'KEYSET', { id, path: '(entry id)', message: `removed in the working tree (present at ${opts.base})` });
      }
    }

    // ---- per-unit checks ----
    for (const [id, afterUnit] of afterParsed.units) {
      if (!inScope(afterUnit)) continue;
      const g = groupOf(afterUnit);
      const s = statsFor(g);
      const baseUnit = baseParsed.units.get(id);
      if (!baseUnit) continue;

      // 2 + 3: structural fixity and prose-only writes
      const allPaths = new Set<string>([...baseUnit.paths.keys(), ...afterUnit.paths.keys()]);
      for (const p of allPaths) {
        const b = baseUnit.paths.get(p);
        const a = afterUnit.paths.get(p);
        if (isProsePath(p)) s.proseLeaves++;
        else s.nonProseLeaves++;
        if (b === a) continue;
        if (isNonProseFixityPath(p)) {
          addIssue(g, 'NONPROSE_FIXITY', {
            id,
            path: p,
            message: b === undefined ? 'added (absent at base)' : a === undefined ? 'removed (present at base)' : 'value changed',
            base: displayVal(b),
            after: displayVal(a),
          });
        }
        if (!isProsePath(p)) {
          addIssue(g, 'PROSE_ONLY_WRITES', {
            id,
            path: p,
            message: b === undefined ? 'added outside the prose contract' : a === undefined ? 'removed outside the prose contract' : 'changed outside the prose contract',
            base: displayVal(b),
            after: displayVal(a),
          });
        }
      }

      // 4: citations
      const baseProse = proseEntries(baseUnit);
      const afterProse = proseEntries(afterUnit);
      const baseScan = scanCitations(baseProse.map(p => p.text).join('\n'));
      const afterScan = scanCitations(afterProse.map(p => p.text).join('\n'));
      s.citations += afterScan.citations.length;
      const citeDiff = multisetDiff(baseScan.citations, afterScan.citations);
      s.addedCitations += citeDiff.added.length;
      s.droppedCitations += citeDiff.dropped.length;
      for (const c of citeDiff.added) {
        addIssue(g, 'CITATION_FIXITY', { id, path: '(citation)', message: 'citation ADDED', after: c });
      }
      for (const c of citeDiff.dropped) {
        addIssue(g, 'CITATION_FIXITY', { id, path: '(citation)', message: 'citation DROPPED', base: c });
      }
      const bareDiff = multisetDiff(baseScan.bare, afterScan.bare);
      s.newBareCitations += bareDiff.added.length;
      s.droppedBareCitations += bareDiff.dropped.length;
      for (const c of bareDiff.added) {
        addIssue(g, 'CITATION_FIXITY', {
          id,
          path: '(bare citation)',
          message: 'bare chapter:verse newly introduced with no book name in the same string',
          after: c,
        });
      }
      for (const c of bareDiff.dropped) {
        addIssue(g, 'CITATION_FIXITY', {
          id,
          path: '(bare citation)',
          message: 'bare chapter:verse dropped (informational, not a failure)',
          base: c,
          severity: 'note',
        });
      }

      // 5: script / transliteration / Strong's
      // The script corpus is EVERY string leaf of the unit — in-scope prose AND the
      // structural leaves that carry the original languages (terms[].original,
      // terms[].translit, terms[].strongs, keywords, refs). Nothing is left to
      // NONPROSE_FIXITY alone.
      const baseLeaves = allStringLeaves(baseUnit);
      const afterLeaves = allStringLeaves(afterUnit);
      const baseBlob = baseLeaves.join('\n');
      const afterBlob = afterLeaves.join('\n');
      s.scriptLeaves += afterLeaves.length;
      const hebrewDiff = multisetDiff(matches(baseBlob, HEBREW_RE), matches(afterBlob, HEBREW_RE));
      const greekDiff = multisetDiff(matches(baseBlob, GREEK_RE), matches(afterBlob, GREEK_RE));
      s.hebrew += matches(afterBlob, HEBREW_RE).length;
      s.greek += matches(afterBlob, GREEK_RE).length;
      for (const run of hebrewDiff.added) addIssue(g, 'SCRIPT_FIXITY', { id, path: '(Hebrew run)', message: 'Hebrew run ADDED', after: run });
      for (const run of hebrewDiff.dropped) addIssue(g, 'SCRIPT_FIXITY', { id, path: '(Hebrew run)', message: 'Hebrew run DROPPED', base: run });
      for (const run of greekDiff.added) addIssue(g, 'SCRIPT_FIXITY', { id, path: '(Greek run)', message: 'Greek run ADDED', after: run });
      for (const run of greekDiff.dropped) addIssue(g, 'SCRIPT_FIXITY', { id, path: '(Greek run)', message: 'Greek run DROPPED', base: run });

      const translitPaths = allPaths.has('terms.length') || [...afterUnit.paths.keys()].some(p => /^terms\[\d+\]\.translit$/.test(p));
      if (translitPaths) {
        const tPaths = Array.from(new Set([...baseUnit.paths.keys(), ...afterUnit.paths.keys()])).filter(p => /^terms\[\d+\]\.translit$/.test(p)).sort();
        const bT = tPaths.map(p => displayVal(baseUnit.paths.get(p))).filter(x => x !== '(absent)');
        const aT = tPaths.map(p => displayVal(afterUnit.paths.get(p))).filter(x => x !== '(absent)');
        s.translit += aT.length;
        const d = multisetDiff(bT, aT);
        for (const t of d.added) addIssue(g, 'SCRIPT_FIXITY', { id, path: 'terms[].translit', message: 'transliteration ADDED', after: t });
        for (const t of d.dropped) addIssue(g, 'SCRIPT_FIXITY', { id, path: 'terms[].translit', message: 'transliteration DROPPED', base: t });
      }

      const sDiff = multisetDiff(matches(baseBlob, STRONGS_RE), matches(afterBlob, STRONGS_RE));
      s.strongs += matches(afterBlob, STRONGS_RE).length;
      for (const t of sDiff.added) addIssue(g, 'SCRIPT_FIXITY', { id, path: '(Strong\'s token)', message: "Strong's token ADDED", after: t });
      for (const t of sDiff.dropped) addIssue(g, 'SCRIPT_FIXITY', { id, path: "(Strong's token)", message: "Strong's token DROPPED", base: t });

      // 6: clarity gate on the working-tree prose.
      // A violation that ALREADY exists at base is CP-02 backlog, not a regression:
      // it is reported as a PRE-EXISTING note (visible, never hidden) and only fails
      // the run under --strict-gate. A violation that is NEW in the working tree is a
      // hard FAIL. The strict literal reading of the check ("no prose string at HEAD
      // violates the gate") is always printed as an explicit strict-verdict line.
      const baseFailing = new Map<string, string>();
      for (const p of baseProse) {
        const v = checkProse(p.text);
        if (v.length > 0) baseFailing.set(p.path, v.map(x => `${x.kind}: ${x.detail}`).join(' | '));
      }
      s.bannedBase += baseFailing.size;
      const afterFailing = new Map<string, string>();
      for (const p of afterProse) {
        s.bannedChecked++;
        const v: ProseViolation[] = checkProse(p.text);
        if (v.length > 0) afterFailing.set(p.path, v.map(x => `${x.kind}: ${x.detail}`).join(' | '));
      }
      for (const [path, detail] of afterFailing) {
        const preexisting = baseFailing.has(path);
        if (preexisting) {
          s.bannedPreexisting++;
          addIssue(g, 'NO_BANNED', {
            id,
            path,
            message: `PRE-EXISTING clarity-gate failure at ${opts.base} (CP-02 backlog, not introduced by this change)`,
            after: detail,
            severity: opts.strictGate ? undefined : 'note',
          });
        } else {
          s.bannedNew++;
          addIssue(g, 'NO_BANNED', {
            id,
            path,
            message: `clarity gate FAIL — NEW in the working tree (clean at ${opts.base})`,
            after: detail,
          });
        }
      }
      for (const [path] of baseFailing) {
        if (!afterFailing.has(path)) {
          s.bannedResolved++;
          addIssue(g, 'NO_BANNED', {
            id,
            path,
            message: 'clarity-gate failure at base is gone in the working tree (improvement)',
            severity: 'note',
          });
        }
      }
    }

    // ---- roll the group results up ----
    const groupNames = Array.from(groups.keys()).sort((a, b) => {
      if (a === CHAIN_GROUP) return 1;
      if (b === CHAIN_GROUP) return -1;
      const ia = BOOK_REGISTRY.findIndex(x => x.slug === a);
      const ib = BOOK_REGISTRY.findIndex(x => x.slug === b);
      return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.localeCompare(b);
    });

    for (const g of groupNames) {
      const s = statsFor(g);
      if (g === CHAIN_GROUP) coverage.chains += s.keyset.after;
      else {
        coverage.books += 1;
        coverage.entries += s.keyset.after;
      }
      coverage.nonProseLeaves += s.nonProseLeaves;
      coverage.proseLeaves += s.proseLeaves;
      coverage.proseStrings += s.bannedChecked;
      coverage.scriptLeaves += s.scriptLeaves;
      coverage.hebrew += s.hebrew;
      coverage.greek += s.greek;
      coverage.translit += s.translit;
      coverage.strongs += s.strongs;
      coverage.citations += s.citations;
      coverage.bannedNew += s.bannedNew;
      coverage.bannedPreexisting += s.bannedPreexisting;
      const byCheck = issues.get(g) ?? new Map<CheckName, Issue[]>();
      const mk = (check: CheckName, summary: string): void => {
        const list = byCheck.get(check) ?? [];
        const failing = list.filter(i => i.severity !== 'note');
        allResults.push({ group: g, check, pass: failing.length === 0, summary, issues: list });
      };
      mk('KEYSET', `${s.keyset.after} ids in the working tree, ${s.keyset.base} of them at ${opts.base}`);
      mk('NONPROSE_FIXITY', `${s.nonProseLeaves} structural leaf paths compared`);
      mk('PROSE_ONLY_WRITES', `${s.proseLeaves} prose leaf paths compared`);
      mk(
        'CITATION_FIXITY',
        `${s.citations} book-qualified citations, ${s.addedCitations} added, ${s.droppedCitations} dropped, ${s.newBareCitations} new bare, ${s.droppedBareCitations} dropped bare`
      );
      mk('SCRIPT_FIXITY', `${s.hebrew} Hebrew runs, ${s.greek} Greek runs, ${s.translit} transliterations, ${s.strongs} Strong's tokens (corpus: ${s.scriptLeaves} string leaves = prose + terms[].original/.translit/.strongs + keywords)`);
      mk(
        'NO_BANNED',
        `${s.bannedChecked} working-tree prose strings gated · ${s.bannedNew} NEW failure(s) · ${s.bannedPreexisting} pre-existing failure(s) at ${opts.base} · ${s.bannedResolved} base failure(s) resolved` +
          (opts.strictGate ? ' [--strict-gate: pre-existing failures also fail the run]' : ' [pre-existing failures are notes; --strict-gate fails on them]')
      );
    }
  }

  /* ------------------------------------------------------------- console */

  const groups = Array.from(new Set(allResults.map(r => r.group)));
  for (const g of groups) {
    const rows = allResults.filter(r => r.group === g);
    const meta = BOOK_REGISTRY.find(b => b.slug === g);
    const label = g === CHAIN_GROUP ? 'PILLAR CHAINS' : `${g} (${meta?.name ?? g})`;
    const keysetRow = rows.find(r => r.check === 'KEYSET');
    console.log(`\n--- ${label} — entries ${keysetRow?.summary ?? ''} ---`);
    for (const check of CHECK_ORDER) {
      const row = rows.find(r => r.check === check);
      if (!row) continue;
      const failing = row.issues.filter(i => i.severity !== 'note');
      const notes = row.issues.filter(i => i.severity === 'note');
      console.log(`  ${check.padEnd(19)} ${row.pass ? 'PASS' : 'FAIL'}  ${row.summary}`);
      const shown = failing.slice(0, 12);
      for (const i of shown) {
        console.log(`      ${i.id} · ${i.path} · ${i.message}${i.base ? ` | base: ${i.base}` : ''}${i.after ? ` | after: ${i.after}` : ''}`);
      }
      if (failing.length > shown.length) console.log(`      … ${failing.length - shown.length} more ${check} issue(s)`);
      for (const n of notes) {
        console.log(`      NOTE ${n.id} · ${n.path} · ${n.message}${n.base ? ` | base: ${n.base}` : ''}`);
      }
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`base ${opts.base} (${baseSha}) · scope ${selected.size === 0 ? 'ALL BOOKS' : Array.from(selected).join(',')} · groups ${groups.length}`);
  console.log(
    `coverage: ${coverage.entries} entries across ${coverage.books} book group(s) + ${coverage.chains} pillar chain(s) · ` +
      `${coverage.nonProseLeaves} structural leaves + ${coverage.proseLeaves} prose leaves compared · ${coverage.proseStrings} prose strings gated · ` +
      `${coverage.scriptLeaves} script-corpus leaves (${coverage.hebrew} Hebrew runs, ${coverage.greek} Greek runs, ${coverage.translit} transliterations, ${coverage.strongs} Strong's tokens) · ` +
      `${coverage.citations} book-qualified citations`
  );
  console.log(
    `gate reading: NEW clarity-gate failures ${coverage.bannedNew} · PRE-EXISTING at ${opts.base} ${coverage.bannedPreexisting} · ` +
      `strict reading ("no prose string violates the clarity gate") ${coverage.bannedNew + coverage.bannedPreexisting === 0 ? 'PASS' : 'FAIL'}` +
      (opts.strictGate ? ' [--strict-gate ON: pre-existing failures fail this run]' : ' [default: pre-existing failures are notes; --strict-gate fails on them]')
  );
  let allPass = true;
  for (const check of CHECK_ORDER) {
    const rows = allResults.filter(r => r.check === check);
    const failing = rows.filter(r => !r.pass);
    if (failing.length > 0) allPass = false;
    const issueCount = rows.reduce((n, r) => n + r.issues.filter(i => i.severity !== 'note').length, 0);
    console.log(
      `${check.padEnd(19)} ${failing.length === 0 ? 'PASS' : 'FAIL'}  ${rows.length - failing.length}/${rows.length} groups pass · ${issueCount} issue(s)${failing.length ? ` · failing: ${failing.map(r => r.group).join(', ')}` : ''}`
    );
  }
  console.log(`OVERALL: ${allPass ? 'PASS' : 'FAIL'} (exit ${allPass ? 0 : 1})`);
  console.log('verdict: ' + (allPass
    ? `compared with ${opts.base}, ONLY in-scope prose strings changed for the checked scope.`
    : `compared with ${opts.base}, something outside the in-scope prose contract changed for the checked scope.`));
  if (parseWarnings.length > 0) {
    console.log('\nPARSE WARNINGS:');
    for (const w of parseWarnings) console.log(`  - ${w}`);
  }

  if (opts.jsonPath) {
    const report = {
      generatedAt: new Date().toISOString(),
      base: opts.base,
      baseSha,
      scope: selected.size === 0 ? 'ALL' : Array.from(selected),
      coverage,
      overall: allPass ? 'PASS' : 'FAIL',
      checks: CHECK_ORDER.map(check => ({
        check,
        pass: allResults.filter(r => r.check === check).every(r => r.pass),
        groups: allResults
          .filter(r => r.check === check)
          .map(r => ({ group: r.group, pass: r.pass, summary: r.summary, issues: r.issues })),
      })),
    };
    try {
      writeFileSync(opts.jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
      console.log(`\nJSON report written: ${opts.jsonPath}`);
    } catch (err) {
      console.log(`\nERROR: could not write JSON report to ${opts.jsonPath}: ${(err as Error).message}`);
    }
  }

  process.exit(allPass ? 0 : 1);
}

main();
