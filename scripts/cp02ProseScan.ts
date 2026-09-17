/**
 * CP-02 · Plain-language sweep — PROSE CENSUS + DENSITY RANKING (tool 1 of 3).
 *
 * Usage:
 *   npx tsx scripts/cp02ProseScan.ts [--book <slug>]... [--json <path>] [--limit N] [--all]
 *
 *   --book <slug>   restrict to entries whose id starts with `<slug>-`
 *                   (repeatable; `--all` scans every book and is the default)
 *   --json <path>   write a machine-readable report
 *   --limit N       how many densest strings to list per book in the console
 *                   detail block (default 25). It does NOT truncate the census:
 *                   every total and the JSON report always cover every string.
 *   --all           explicit "every book" (default)
 *
 * IN-SCOPE PROSE (the sweep contract; structural data is never reported as prose):
 *   title · principle · who · whoByRef["<ref>"] · cumulativePrinciples[<i>]
 *   terms[<i>].gloss|note|exposition · sameTestamentLinks[<i>].connection
 *   plus the pillar chains exported from threadDetails.ts:
 *   chain `name` · steps[<i>].title · steps[<i>].connection
 * NOT in scope: entry keys, sourceKeywords, fulfillmentKeywords, terms[<i>].term,
 *   .original, .translit, .strongs, ref, verseId, testament, chainId, origin, id, draft.
 *
 * DENSITY (ranks rewrite effort; higher = denser/more abstract):
 *   (maxSentenceWords / MAX_SENTENCE_WORDS) * 2 + (words / 40) + 0.15 * <abstract markers>
 * `words` / `sentences` / `maxSentenceWords` use the clarity gate's own helpers
 * (sentenceWordCount + stripQuotes), so the ranking agrees with the gate.
 * `chars` is the JS string length (UTF-16 code units) of the raw field text.
 * Empty / whitespace-only in-scope strings are skipped; the skipped count is printed.
 *
 * Chains are attributed to books by the book of each step's `verseId` (falling back
 * to parseRef(step.ref) for steps that carry no verseId; the chain `name` follows the
 * chain's first resolvable step). With --book X a chain contributes only its steps
 * whose verseId starts with `X-`, plus the chain name once.
 *
 * Exit code is always 0 — this is a census tool, not a gate.
 */
import { writeFileSync } from 'node:fs';
import { threadDetails, threadChains } from '../src/data/threadDetails';
import type { ThreadDetail } from '../src/data/threadDetails';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../src/data/bookRegistry';
import { parseRef } from '../src/data/refParser';
import { checkProse, sentenceWordCount, stripQuotes, MAX_SENTENCE_WORDS } from './checkReadability';
import type { ProseViolation } from './checkReadability';

/* ------------------------------------------------------------------ config */

/** Abstract-noun markers counted for density. Case-insensitive, word-boundary,
 *  every occurrence. The list below is the spec list verbatim; "theological"
 *  appears twice in that list and is one distinct marker when counted. */
export const ABSTRACT_MARKERS = [
  'framework',
  'motif',
  'paradigm',
  'continuum',
  'dynamic',
  'principle of',
  'theology',
  'theological',
  'theological',
  'conceptual',
  'schema',
  'synthesis',
  'economy of',
  'mechanism',
  'trajectory',
  'typological',
  'hermeneutic',
  'teleolog',
  'soteriological',
  'eschatological',
  'christological',
  'covenantalism',
] as const;

const DISTINCT_MARKERS = Array.from(new Set<string>(ABSTRACT_MARKERS));

/** Glossary terms whose occurrences are counted across every scanned prose string. */
export const GLOSSARY_TERMS = [
  'covenant',
  'propitiation',
  'remnant',
  'sanctuary',
  'typology',
  'antitype',
  'soteriology',
  'eschatology',
  'christology',
  'messianic',
  'atonement',
  'intercession',
  'justification',
  'sanctification',
  'redemption',
  'dispensational',
  'forensic',
  'efficacy',
  'mediation',
  'patriarch',
  'theophany',
  'eschatological',
] as const;

const GLOSSARY_EXAMPLES = 5;
const EXAMPLE_MAX_CHARS = 200;
const DETAIL_DEFAULT = 25;

/* ------------------------------------------------------------------- types */

export type DataFile = 'threadDetails' | 'bookThreadDetails';

export interface ScanRecord {
  book: string;
  bookName: string;
  entryId: string;
  file: DataFile;
  field: string;
  text: string;
  chars: number;
  words: number;
  sentences: number;
  maxSentenceWords: number;
  gate: 'PASS' | 'FAIL';
  violations: ProseViolation[];
  density: number;
}

interface ProseField {
  field: string;
  text: string;
}

interface BookMetaLite {
  slug: string;
  name: string;
}

/* --------------------------------------------------------------- utilities */

const META_BY_SLUG = new Map<string, BookMetaLite>(
  BOOK_REGISTRY.map(b => [b.slug, { slug: b.slug, name: b.name }])
);
const ORDER_BY_SLUG = new Map<string, number>(BOOK_REGISTRY.map((b, i) => [b.slug, i]));

function slugOfVerseId(verseId: string | undefined): string | null {
  if (!verseId) return null;
  const slug = verseId.split('-')[0];
  return slug && META_BY_SLUG.has(slug) ? slug : null;
}

function slugOfRef(ref: string | undefined): string | null {
  if (!ref) return null;
  const parsed = parseRef(ref);
  if (!parsed) return null;
  const meta = BOOK_BY_NAME[parsed.book];
  return meta ? meta.slug : null;
}

function bookName(slug: string): string {
  return META_BY_SLUG.get(slug)?.name ?? slug;
}

function bookOrder(slug: string): number {
  const i = ORDER_BY_SLUG.get(slug);
  return i === undefined ? Number.MAX_SAFE_INTEGER : i;
}

/** Every occurrence of every distinct abstract marker (case-insensitive, \b at the start). */
export function countAbstractMarkers(text: string): number {
  let n = 0;
  for (const marker of DISTINCT_MARKERS) {
    const re = new RegExp(`\\b${escapeRe(marker)}`, 'gi');
    const m = text.match(re);
    if (m) n += m.length;
  }
  return n;
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Sentence list exactly as the clarity gate sees it (quotations stripped). */
export function gateSentences(text: string): string[] {
  return stripQuotes(text)
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(Boolean);
}

function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}

/* -------------------------------------------------------- prose extraction */

/** Every in-scope prose string of one thread detail, addressed by its exact path. */
export function detailProseFields(d: ThreadDetail, onEmpty: () => void): ProseField[] {
  const out: ProseField[] = [];
  const push = (field: string, text: unknown): void => {
    if (typeof text !== 'string') return;
    if (text.trim().length === 0) {
      onEmpty();
      return;
    }
    out.push({ field, text });
  };

  push('title', d.title);
  push('principle', d.principle);
  push('who', d.who);
  if (d.whoByRef) {
    for (const [ref, prose] of Object.entries(d.whoByRef)) push(`whoByRef["${ref}"]`, prose);
  }
  if (d.cumulativePrinciples) {
    d.cumulativePrinciples.forEach((p, i) => push(`cumulativePrinciples[${i}]`, p));
  }
  if (d.terms) {
    d.terms.forEach((t, i) => {
      push(`terms[${i}].gloss`, t.gloss);
      push(`terms[${i}].note`, t.note);
      push(`terms[${i}].exposition`, t.exposition);
    });
  }
  if (d.sameTestamentLinks) {
    d.sameTestamentLinks.forEach((l, i) => push(`sameTestamentLinks[${i}].connection`, l.connection));
  }
  return out;
}

/* --------------------------------------------------------------------- main */

interface Options {
  books: string[];
  all: boolean;
  jsonPath: string | null;
  limit: number;
  warnings: string[];
}

function parseArgs(argv: string[]): Options {
  const opts: Options = { books: [], all: false, jsonPath: null, limit: DETAIL_DEFAULT, warnings: [] };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--all') {
      opts.all = true;
    } else if (arg === '--book') {
      const v = argv[++i];
      if (!v) opts.warnings.push('--book needs a slug; ignored');
      else {
        for (const part of v.split(',')) {
          const slug = part.trim().toLowerCase();
          if (!slug) continue;
          if (!META_BY_SLUG.has(slug)) opts.warnings.push(`unknown book slug "${slug}" (not in BOOK_REGISTRY); scanning anyway`);
          opts.books.push(slug);
        }
      }
    } else if (arg.startsWith('--book=')) {
      const slug = arg.slice('--book='.length).trim().toLowerCase();
      if (slug) {
        if (!META_BY_SLUG.has(slug)) opts.warnings.push(`unknown book slug "${slug}" (not in BOOK_REGISTRY); scanning anyway`);
        opts.books.push(slug);
      }
    } else if (arg === '--json') {
      const v = argv[++i];
      if (!v) opts.warnings.push('--json needs a path; ignored');
      else opts.jsonPath = v;
    } else if (arg.startsWith('--json=')) {
      opts.jsonPath = arg.slice('--json='.length);
    } else if (arg === '--limit') {
      const v = argv[++i];
      const n = Number.parseInt(v ?? '', 10);
      if (!Number.isFinite(n) || n <= 0) opts.warnings.push(`--limit needs a positive integer; got "${v ?? ''}" (keeping ${DETAIL_DEFAULT})`);
      else opts.limit = n;
    } else if (arg.startsWith('--limit=')) {
      const n = Number.parseInt(arg.slice('--limit='.length), 10);
      if (!Number.isFinite(n) || n <= 0) opts.warnings.push(`--limit needs a positive integer; got "${arg}" (keeping ${DETAIL_DEFAULT})`);
      else opts.limit = n;
    } else {
      opts.warnings.push(`unrecognised argument "${arg}" ignored`);
    }
  }
  opts.books = Array.from(new Set(opts.books));
  return opts;
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  const useAll = opts.all || opts.books.length === 0;
  const selected = new Set(opts.books.map(b => `${b}-`));
  const inScope = (id: string): boolean => useAll || Array.from(selected).some(p => id.startsWith(p));

  let emptySkipped = 0;
  const onEmpty = (): void => {
    emptySkipped++;
  };

  const records: ScanRecord[] = [];

  const emit = (book: string, entryId: string, file: DataFile, f: ProseField): void => {
    const text = f.text;
    const sentences = gateSentences(text);
    const maxSentenceWords = sentences.length
      ? sentences.reduce((m, s) => Math.max(m, sentenceWordCount(s)), 0)
      : 0;
    const words = sentenceWordCount(text);
    const violations = checkProse(text);
    const density = round4(
      (maxSentenceWords / MAX_SENTENCE_WORDS) * 2 + words / 40 + 0.15 * countAbstractMarkers(text)
    );
    records.push({
      book,
      bookName: bookName(book),
      entryId,
      file,
      field: f.field,
      text,
      chars: text.length,
      words,
      sentences: sentences.length,
      maxSentenceWords,
      gate: violations.length > 0 ? 'FAIL' : 'PASS',
      violations,
      density,
    });
  };

  // ---- threadDetails.ts entries (Genesis) ----
  for (const [entryId, detail] of Object.entries(threadDetails)) {
    if (!inScope(entryId)) continue;
    const book = entryId.split('-')[0];
    for (const f of detailProseFields(detail, onEmpty)) emit(book, entryId, 'threadDetails', f);
  }

  // ---- bookThreadDetails.ts entries ----
  for (const [entryId, detail] of Object.entries(bookThreadDetails)) {
    if (!inScope(entryId)) continue;
    const book = entryId.split('-')[0];
    for (const f of detailProseFields(detail, onEmpty)) emit(book, entryId, 'bookThreadDetails', f);
  }

  // ---- pillar chains (exported from threadDetails.ts) ----
  for (const chain of threadChains) {
    const stepBooks = chain.steps.map(s => slugOfVerseId(s.verseId) ?? slugOfRef(s.ref));
    const chainEntryId = `chain:${chain.id}`;

    if (useAll) {
      const fields: { book: string; field: string; text: string }[] = [];
      chain.steps.forEach((s, i) => {
        const book = stepBooks[i] ?? 'unknown';
        if (typeof s.title === 'string') fields.push({ book, field: `steps[${i}].title`, text: s.title });
        if (typeof s.connection === 'string') fields.push({ book, field: `steps[${i}].connection`, text: s.connection });
      });
      const nameBook = stepBooks.find(b => b !== null) ?? 'unknown';
      if (typeof chain.name === 'string') {
        fields.unshift({ book: nameBook, field: 'name', text: chain.name });
      }
      for (const f of fields) emit(f.book, chainEntryId, 'threadDetails', { field: f.field, text: f.text });
    } else {
      for (const prefix of selected) {
        if (!prefix.endsWith('-')) continue;
        const book = prefix.slice(0, -1);
        let touched = false;
        for (let i = 0; i < chain.steps.length; i++) {
          const s = chain.steps[i];
          if (!s.verseId || !s.verseId.startsWith(prefix)) continue;
          touched = true;
          if (typeof s.title === 'string') emit(book, chainEntryId, 'threadDetails', { field: `steps[${i}].title`, text: s.title });
          if (typeof s.connection === 'string') emit(book, chainEntryId, 'threadDetails', { field: `steps[${i}].connection`, text: s.connection });
        }
        if (touched && typeof chain.name === 'string') {
          emit(book, chainEntryId, 'threadDetails', { field: 'name', text: chain.name });
        }
      }
    }
  }

  // ---- aggregate per book (canonical book order, densest-first within a book) ----
  const byBook = new Map<string, ScanRecord[]>();
  for (const r of records) {
    const list = byBook.get(r.book);
    if (list) list.push(r);
    else byBook.set(r.book, [r]);
  }
  const books = Array.from(byBook.keys()).sort((a, b) => bookOrder(a) - bookOrder(b) || a.localeCompare(b));
  for (const b of books) {
    byBook.get(b)!.sort(
      (x, y) =>
        y.density - x.density ||
        x.entryId.localeCompare(y.entryId) ||
        x.field.localeCompare(y.field) ||
        x.file.localeCompare(y.file)
    );
  }

  const entriesPerBook = new Map<string, Set<string>>();
  for (const r of records) {
    const key = `${r.file}::${r.entryId}`;
    const set = entriesPerBook.get(r.book) ?? new Set<string>();
    set.add(key);
    entriesPerBook.set(r.book, set);
  }

  const bookRows = books.map(b => {
    const list = byBook.get(b)!;
    return {
      book: b,
      bookName: bookName(b),
      entries: entriesPerBook.get(b)?.size ?? 0,
      strings: list.length,
      words: list.reduce((n, r) => n + r.words, 0),
      gateFails: list.filter(r => r.gate === 'FAIL').length,
      worstDensity: list.length ? list[0].density : 0,
    };
  });

  const totals = {
    entries: Array.from(entriesPerBook.values()).reduce((n, s) => n + s.size, 0),
    strings: records.length,
    words: records.reduce((n, r) => n + r.words, 0),
    gateFails: records.filter(r => r.gate === 'FAIL').length,
  };

  // ---- glossary scan over every scanned prose string ----
  const glossary = GLOSSARY_TERMS.map(term => {
    const re = new RegExp(`\\b${escapeRe(term)}`, 'gi');
    let occurrences = 0;
    const sentenceHits: { sentence: string; words: number; entryId: string; field: string }[] = [];
    for (const r of records) {
      const m = r.text.match(re);
      if (m) occurrences += m.length;
      for (const s of gateSentences(r.text)) {
        if (new RegExp(`\\b${escapeRe(term)}`, 'i').test(s)) {
          sentenceHits.push({ sentence: s, words: sentenceWordCount(s), entryId: r.entryId, field: r.field });
        }
      }
    }
    sentenceHits.sort((a, b) => b.words - a.words || a.entryId.localeCompare(b.entryId) || a.field.localeCompare(b.field));
    return {
      term,
      occurrences,
      sentences: sentenceHits.length,
      examples: sentenceHits.slice(0, GLOSSARY_EXAMPLES).map(h => ({
        entryId: h.entryId,
        field: h.field,
        words: h.words,
        excerpt: h.sentence.length > EXAMPLE_MAX_CHARS ? `${h.sentence.slice(0, EXAMPLE_MAX_CHARS)}…` : h.sentence,
      })),
    };
  });

  /* ------------------------------------------------------------- console */

  const scopeLabel = useAll ? `ALL BOOKS (${books.length})` : opts.books.join(', ');
  console.log('=== CP-02 PROSE SCAN — plain-language sweep census ===');
  console.log(`scope: ${scopeLabel}`);
  console.log(`files: threadDetails.ts (${Object.keys(threadDetails).length} entries + ${threadChains.length} chains), bookThreadDetails.ts (${Object.keys(bookThreadDetails).length} entries)`);
  console.log(`density = (maxSentenceWords / ${MAX_SENTENCE_WORDS}) * 2 + (words / 40) + 0.15 * abstractMarkers`);
  console.log(`abstract markers counted (${DISTINCT_MARKERS.length} distinct of ${ABSTRACT_MARKERS.length} listed): ${DISTINCT_MARKERS.join(', ')}`);
  console.log(`in-scope strings found: ${totals.strings} · empty/whitespace in-scope strings skipped: ${emptySkipped}`);
  for (const w of opts.warnings) console.log(`WARNING: ${w}`);

  console.log('\n--- PER-BOOK SUMMARY (densest-first listing depth: ' + opts.limit + ') ---');
  const pad = (s: string, n: number): string => s.padEnd(n);
  console.log(
    `${pad('book', 6)}${pad('bookName', 20)}${pad('entries', 9)}${pad('strings', 9)}${pad('words', 8)}${pad('gateFAIL', 10)}worstDensity`
  );
  for (const r of bookRows) {
    console.log(
      `${pad(r.book, 6)}${pad(r.bookName, 20)}${pad(String(r.entries), 9)}${pad(String(r.strings), 9)}${pad(String(r.words), 8)}${pad(String(r.gateFails), 10)}${r.worstDensity.toFixed(4)}`
    );
  }
  console.log(
    `${pad('TOTAL', 6)}${pad('', 20)}${pad(String(totals.entries), 9)}${pad(String(totals.strings), 9)}${pad(String(totals.words), 8)}${pad(String(totals.gateFails), 10)}`
  );

  for (const b of books) {
    const list = byBook.get(b)!;
    const shown = list.slice(0, opts.limit);
    console.log(`\n--- ${b} (${bookName(b)}) · ${shown.length} densest of ${list.length} in-scope strings ---`);
    shown.forEach((r, i) => {
      console.log(
        `#${i + 1}  density ${r.density.toFixed(4)}  ${r.gate}  ${r.entryId} · ${r.file} · ${r.field}  [${r.words}w / ${r.sentences}s / max ${r.maxSentenceWords}w]`
      );
      if (r.violations.length === 0) {
        console.log('    violations: none');
      } else {
        console.log(`    violations (${r.violations.length}):`);
        for (const v of r.violations) console.log(`      - ${v.kind}: ${v.detail}`);
      }
    });
  }

  console.log('\n=== GLOSSARY SCAN (all scanned prose) ===');
  console.log('occurrence rule: case-insensitive, word-boundary match at the start of the term (plurals/inflections included)');
  console.log(`example rule: up to ${GLOSSARY_EXAMPLES} longest gate sentences (quotations stripped) per term, excerpt capped at ${EXAMPLE_MAX_CHARS} chars`);
  const termWidth = GLOSSARY_TERMS.reduce((n, t) => Math.max(n, t.length), 0);
  for (const g of glossary) {
    console.log(`${g.term.padEnd(termWidth)}  occurrences ${String(g.occurrences).padStart(5)}  sentences ${String(g.sentences).padStart(5)}`);
  }
  console.log('');
  for (const g of glossary) {
    console.log(`--- ${g.term} (${g.occurrences} occurrences, ${g.sentences} sentences) ---`);
    if (g.examples.length === 0) {
      console.log('    no example sentence (no unquoted sentence contains this term)');
      continue;
    }
    g.examples.forEach((e, i) => {
      console.log(`    ${i + 1}. [${e.words}w] ${e.entryId} · ${e.field}`);
      console.log(`       ${e.excerpt}`);
    });
  }

  /* ---------------------------------------------------------------- json */

  if (opts.jsonPath) {
    const report = {
      generatedAt: new Date().toISOString(),
      totals,
      books: books.map(b => {
        const row = bookRows.find(r => r.book === b)!;
        return {
          book: b,
          bookName: row.bookName,
          entries: row.entries,
          strings: row.strings,
          words: row.words,
          gateFails: row.gateFails,
          strings_detail: byBook.get(b)!,
        };
      }),
      glossary,
    };
    try {
      writeFileSync(opts.jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
      console.log(`\nJSON report written: ${opts.jsonPath}`);
    } catch (err) {
      console.log(`\nERROR: could not write JSON report to ${opts.jsonPath}: ${(err as Error).message}`);
    }
  }

  process.exit(0);
}

main();
