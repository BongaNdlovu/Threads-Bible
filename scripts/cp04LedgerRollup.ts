/**
 * CP-04 · LEDGER ROLLUP — CP-05 triage queue (tool 3 of 3).
 *
 * Usage:
 *   npx tsx scripts/cp04LedgerRollup.ts [--out docs/CP-05_TRIAGE_QUEUE.md] [--json <path>]
 *
 * Reads every docs/CP-02_<BOOK>_DRAFT.md and docs/CP-02_<BOOK>_SUMMARY.md that
 * exists and emits one markdown document:
 *   1. a per-book scoreboard table
 *      (book, entries, strings changed, strings EQUIVALENT/VERIFY-ONLY,
 *       THEOLOGY-REVIEW count, gate status)
 *   2. the THEOLOGY-REVIEW queue grouped by severity
 *   3. a totals block
 *   4. "unaccounted entries" — hand-written entries that appear in no draft doc
 * Without --out nothing is written to disk (stdout only). Exit code is always 0.
 *
 * PARSER (tolerant by design — it never crashes on a doc it cannot read):
 *   · BEFORE / AFTER blocks: a marker line (`**BEFORE**` + `**AFTER (VERIFY-ONLY)**`,
 *     or `**Name — BEFORE**` / `- Title — BEFORE`, or `- AFTER (…)`) followed by a
 *     fenced ``` block. The AFTER parenthesis supplies the variant
 *     (VERIFY-ONLY vs a draft rewrite).
 *   · BEFORE / AFTER markdown tables: a table whose header row contains both a
 *     BEFORE and an AFTER column is read row by row (field/entry/heading columns
 *     are picked up when present).
 *   · THEOLOGY-REVIEW markers: a bullet (`- THEOLOGY-REVIEW: [ ] …`), a bare or
 *     bolded `**THEOLOGY-REVIEW**` line, or a markdown table row containing the
 *     token. Summary docs' `## THEOLOGY-REVIEW items` bullets are counted
 *     separately as "summary ledger items" so nothing is double counted.
 *   · `- Clarity Gate: PASS|FAIL` lines are attributed to the field above them.
 *
 * ACCOUNTING (section 4): an entry counts as accounted when a doc gives it its own
 *   `## <id>` section (drafted) or lists it as a `- <id> — <field>` ledger row in a
 *   summary (ledgered). An id that merely appears in a doc's text — typically a
 *   pillar-chain step id such as `(id: num-12-6)` inside a Genesis chain group — is
 *   NOT drafted; those are reported separately under "mentioned but not drafted".
 *   Truly unaccounted = neither accounted nor mentioned anywhere.
 *
 * SEVERITY (spec: derived from keywords in the row text). The marker line in this
 * repo is boilerplate ("confirm the claim is unchanged (wording only)"), so the
 * "row text" used for classification is the reviewed row itself:
 *   `<entry> :: <field path> :: <AFTER prose (or BEFORE when the row has no AFTER)>`.
 *   The marker text is deliberately excluded — including it would classify every row
 *   as blocking-claim on the word "claim".
 *   · citation        — the row text carries a verse reference (`<Book> <ch>:<v>`,
 *                       `<Book> <ch>`, bare `<ch>:<v>`) or a direct quotation
 *   · blocking-claim  — else, it mentions doctrine / claim / means / salvation /
 *                       sav- / law / Sabbath / prophecy / prophet / prophetic
 *   · wording         — otherwise
 *   Precedence is citation > blocking-claim > wording; the matched evidence is
 *   printed in the queue table so every classification is auditable.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { threadDetails } from '../src/data/threadDetails';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../src/data/bookRegistry';

/* ------------------------------------------------------------------- types */

interface ReviewMarker {
  text: string;
  line: number;
  doc: string;
  sectionId: string;
  fieldPath: string;
  rowText: string;
}

interface FieldRec {
  doc: string;
  sectionId: string;
  sectionKind: 'entry' | 'chain' | 'unknown';
  heading: string;
  label: string;
  path: string;
  before: string;
  after: string;
  afterVariant: string;
  verifyOnly: boolean;
  gate: 'PASS' | 'FAIL' | '';
  line: number;
}

interface DocParse {
  file: string;
  bookToken: string;
  kind: 'DRAFT' | 'SUMMARY';
  fields: FieldRec[];
  markers: ReviewMarker[];
  sectionIds: string[];
  chainGroups: number;
  summaryLedgerItems: number;
  ledgerIds: string[];
  sawReviewHeading: boolean;
  gatePass: number;
  gateFail: number;
  warnings: string[];
  raw: string;
}

type Severity = 'citation' | 'blocking-claim' | 'wording';

/* ----------------------------------------------------------------- helpers */

function mdCell(s: string, max = 0): string {
  let t = s.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();
  if (max > 0 && t.length > max) t = `${t.slice(0, max)}…`;
  return t;
}

function fenceLine(line: string): boolean {
  return /^\s*```/.test(line);
}

function readFence(lines: string[], start: number): { text: string; next: number } {
  // lines[start] opens the fence; returns the block body and the index after the closer
  const body: string[] = [];
  let i = start + 1;
  while (i < lines.length && !fenceLine(lines[i])) {
    body.push(lines[i]);
    i++;
  }
  return { text: body.join('\n').trim(), next: i + 1 };
}

function markerOf(raw: string): { kind: 'BEFORE' | 'AFTER'; label: string; variant: string } | null {
  let t = raw.trim();
  if (!t || t.length > 160) return null;
  t = t.replace(/^[-*+]\s+/, '');
  if (/^\*\*[\s\S]*\*\*$/.test(t)) t = t.slice(2, -2).trim();
  if (!/^(.*?)(\bBEFORE\b|\bAFTER\b)/.test(t)) return null;
  let variant = '';
  const pm = t.match(/\((.*)\)\s*$/);
  if (pm && pm.index !== undefined) {
    variant = pm[1].trim();
    t = t.slice(0, pm.index).trim();
  }
  const m = t.match(/^(.*?)\s*(?:—|–|-|:)?\s*\b(BEFORE|AFTER)\b\s*$/i);
  if (!m) return null;
  return { kind: m[2].toUpperCase() as 'BEFORE' | 'AFTER', label: m[1].trim(), variant };
}

function isReviewMarker(line: string): boolean {
  const t = line.trim();
  if (!t.includes('THEOLOGY-REVIEW')) return false;
  if (/^#{1,6}\s/.test(t)) return false; // a heading, not a marker
  if (t.includes('THEOLOGY-REVIEW items') && !/[:[]/.test(t)) return false;
  return /^[-*+]?\s*\**\s*THEOLOGY-REVIEW/i.test(t) || /^\|/.test(t);
}

function isReviewHeading(line: string): boolean {
  return /^#{1,6}\s/.test(line.trim()) && line.includes('THEOLOGY-REVIEW');
}

function isLedgerBullet(line: string): boolean {
  const t = line.trim();
  if (!/^[-*+]\s+/.test(t)) return false;
  if (isReviewMarker(line)) return false;
  return /^[-*+]\s+[a-z0-9]{2,5}-\d+-\d+\s+—\s+/.test(t) || /^[-*+]\s+chain:[a-z0-9-]+\s+—\s+/.test(t);
}

function gateLine(line: string): 'PASS' | 'FAIL' | null {
  const m = line.match(/^\s*[-*+]?\s*\**\s*Clarity Gate:\s*(PASS|FAIL)/i);
  return m ? (m[1].toUpperCase() as 'PASS' | 'FAIL') : null;
}

/* --------------------------------------------------- section / path mapping */

interface SectionInfo {
  id: string;
  kind: 'entry' | 'chain' | 'unknown';
  chainName?: string;
}

function sectionOf(headingText: string): SectionInfo {
  const t = headingText.trim();
  let m = t.match(/^([a-z0-9]{2,5}-\d+-\d+)\b/i);
  if (m) return { id: m[1].toLowerCase(), kind: 'entry' };
  m = t.match(/^Chain:\s*(.*?)\s*\(id:\s*([^)]+)\)/i);
  if (m) return { id: `chain:${m[2].trim()}`, kind: 'chain', chainName: m[1].trim() };
  m = t.match(/^(?:Pillar chain)\s*—\s*(.+)$/i);
  if (m) return { id: `chain:${m[1].trim()}`, kind: 'chain', chainName: m[1].trim() };
  return { id: t, kind: 'unknown' };
}

function headingPath(heading: string): string {
  const h = heading.trim();
  if (!h) return '';
  let m = h.match(/^Who by Ref\s*—\s*(.+)$/i);
  if (m) return `whoByRef["${m[1].trim()}"]`;
  m = h.match(/^Cumulative Principle\s*\[(\d+)\]/i);
  if (m) return `cumulativePrinciples[${m[1]}]`;
  m = h.match(/^Term\s*\[(\d+)\]/i);
  if (m) return `terms[${m[1]}]`;
  m = h.match(/^Step\s+(\d+)\s*[:.]/i);
  if (m) return `steps[${Number(m[1]) - 1}]`;
  m = h.match(/^(terms\[\d+\]\.(?:gloss|note|exposition))/i);
  if (m) return m[1].toLowerCase();
  m = h.match(/^(steps\[\d+\]\.(?:title|connection))/i);
  if (m) return m[1].toLowerCase();
  if (/^Title$/i.test(h)) return 'title';
  if (/^Principle$/i.test(h)) return 'principle';
  if (/^Who$/i.test(h)) return 'who';
  if (/^Name$/i.test(h)) return 'name';
  if (/^(Gloss|Note|Exposition)$/i.test(h)) return h.toLowerCase();
  return h.toLowerCase().replace(/\s+/g, '_');
}

/** `terms[2]` / `steps[1]` — a container whose sub-heading (Gloss/Note/…) names the leaf. */
function containerOf(heading: string): string {
  const p = headingPath(heading);
  return /^(terms\[\d+\]|steps\[\d+\])$/.test(p) ? p : '';
}

function combinePath(heading: string, label: string, container?: string): string {
  const base = headingPath(heading);
  const lab = label.trim().toLowerCase();
  const sub = /^(title|connection|gloss|note|exposition)$/.test(lab) ? lab : '';
  if (base && sub) {
    if (/^(terms\[\d+\]|steps\[\d+\])$/.test(base)) return `${base}.${sub}`;
    return base;
  }
  if (!base && sub) return container ? `${container}.${sub}` : sub;
  if (!base && /^name$/i.test(label.trim())) return 'name';
  if (base && /^steps\[\d+\]\.[a-z]+$/.test(base)) return base;
  if (base) return base;
  return label.trim().toLowerCase() || '(unnamed field)';
}

/* ------------------------------------------------------------------ parser */

export function parseDoc(file: string, kind: 'DRAFT' | 'SUMMARY', bookToken: string): DocParse {
  const raw = readFileSync(file, 'utf8');
  const lines = raw.split(/\r?\n/);
  const out: DocParse = {
    file,
    bookToken,
    kind,
    fields: [],
    markers: [],
    sectionIds: [],
    chainGroups: 0,
    summaryLedgerItems: 0,
    ledgerIds: [],
    sawReviewHeading: false,
    gatePass: 0,
    gateFail: 0,
    warnings: [],
    raw,
  };

  let section: SectionInfo = { id: '(front matter)', kind: 'unknown' };
  let heading = '';
  let container = '';
  let lastField: FieldRec | null = null;
  let pendingBefore: { label: string; text: string } | null = null;
  let inReviewList = false;
  let sawReviewHeading = false;
  let tableHeader: string[] | null = null;

  const pushField = (rec: FieldRec): void => {
    out.fields.push(rec);
    lastField = rec;
    if (rec.gate === 'PASS') out.gatePass++;
    if (rec.gate === 'FAIL') out.gateFail++;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // headings
    const h = trimmed.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      if (isReviewHeading(line)) {
        inReviewList = true;
        sawReviewHeading = true;
      } else if (level === 2) {
        section = sectionOf(h[2]);
        if (section.kind === 'entry') out.sectionIds.push(section.id);
        if (section.kind === 'chain') out.chainGroups++;
        heading = '';
        container = '';
        inReviewList = false;
      } else {
        heading = h[2].trim();
        const c = containerOf(heading);
        if (c) container = c;
        else if (headingPath(heading) && !/^(gloss|note|exposition)$/.test(headingPath(heading))) container = '';
        inReviewList = false;
      }
      lastField = null;
      tableHeader = null;
      continue;
    }

    // markdown tables (BEFORE/AFTER tables and THEOLOGY-REVIEW rows)
    if (trimmed.startsWith('|')) {
      const cells = trimmed.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
      if (/^\|?[\s:|-]+\|/.test(trimmed) && cells.every(c => /^:?-{2,}:?$/.test(c))) {
        continue; // separator row
      }
      if (tableHeader === null) {
        tableHeader = cells.map(c => c.toUpperCase());
        continue;
      }
      const hasBeforeAfter = tableHeader.some(c => c.includes('BEFORE')) && tableHeader.some(c => c.includes('AFTER'));
      if (hasBeforeAfter) {
        const idx = (needle: string): number => tableHeader!.findIndex(c => c.includes(needle));
        const before = cells[idx('BEFORE')] ?? '';
        const after = cells[idx('AFTER')] ?? '';
        const entryCell = cells[idx('ENTRY')] ?? cells[idx('SECTION')] ?? section.id;
        const fieldCell = cells[idx('FIELD')] ?? cells[idx('HEADING')] ?? heading;
        const variant = cells[idx('VARIANT')] ?? cells[idx('STATUS')] ?? '';
        pushField({
          doc: file,
          sectionId: entryCell || section.id,
          sectionKind: section.kind,
          heading,
          label: fieldCell,
          path: combinePath(heading, fieldCell || heading, container),
          before,
          after,
          afterVariant: variant,
          verifyOnly: /VERIFY-ONLY/i.test(variant),
          gate: (cells[idx('GATE')] ?? '').toUpperCase().startsWith('FAIL') ? 'FAIL' : '',
          line: i + 1,
        });
      }
      if (isReviewMarker(line)) {
        const text = cells.find(c => c.includes('THEOLOGY-REVIEW')) ?? trimmed;
        const rowTail = cells.filter(c => !c.includes('THEOLOGY-REVIEW')).join(' :: ');
        out.markers.push({
          text,
          line: i + 1,
          doc: file,
          sectionId: lastField?.sectionId ?? section.id,
          fieldPath: lastField?.path ?? headingPath(heading),
          rowText: `${lastField?.sectionId ?? section.id} :: ${lastField?.path ?? headingPath(heading)} :: ${rowTextOf(lastField)}${rowTail ? ` :: ${rowTail}` : ''}`,
        });
      }
      continue;
    }
    tableHeader = null;

    // fenced prose blocks
    if (fenceLine(line)) {
      const { text, next } = readFence(lines, i);
      if (pendingBefore) {
        pendingBefore = { ...pendingBefore, text };
      } else if (lastField && !lastField.after) {
        lastField.after = text;
      } else if (heading || section.kind !== 'unknown') {
        out.warnings.push(`line ${i + 1}: fenced block with no BEFORE/AFTER marker (ignored)`);
      }
      i = next - 1;
      continue;
    }

    const marker = markerOf(line);
    if (marker) {
      if (marker.kind === 'BEFORE') {
        pendingBefore = { label: marker.label, text: '' };
      } else {
        const rec: FieldRec = {
          doc: file,
          sectionId: section.id,
          sectionKind: section.kind,
          heading,
          label: pendingBefore?.label || marker.label || heading,
          path: combinePath(heading, pendingBefore?.label || marker.label || heading, container),
          before: pendingBefore?.text ?? '',
          after: '',
          afterVariant: marker.variant,
          verifyOnly: /VERIFY-ONLY/i.test(marker.variant),
          gate: '',
          line: i + 1,
        };
        pendingBefore = null;
        lastField = rec;
        out.fields.push(rec);
      }
      continue;
    }

    const gate = gateLine(line);
    if (gate) {
      if (lastField) {
        lastField.gate = gate;
        if (gate === 'PASS') out.gatePass++;
        else out.gateFail++;
      }
      continue;
    }

    if (isReviewMarker(line)) {
      out.markers.push({
        text: trimmed,
        line: i + 1,
        doc: file,
        sectionId: lastField?.sectionId ?? section.id,
        fieldPath: lastField?.path ?? headingPath(heading),
        // NOTE: the marker line itself is boilerplate in this repo ("confirm the claim
        // is unchanged (wording only)") and is deliberately NOT part of rowText —
        // otherwise every row would classify as blocking-claim on the word "claim".
        rowText: `${lastField?.sectionId ?? section.id} :: ${lastField?.path ?? headingPath(heading)} :: ${rowTextOf(lastField)}`,
      });
      continue;
    }

    if (inReviewList && isLedgerBullet(line)) {
      out.summaryLedgerItems++;
      out.ledgerIds.push(line.trim().replace(/^[-*+]\s+/, '').split(/\s+—\s+/)[0].trim());
      continue;
    }
  }

  out.sawReviewHeading = sawReviewHeading;
  return out;
}

function rowTextOf(f: FieldRec | null): string {
  if (!f) return '';
  const reviewed = f.after && f.after.trim() ? f.after : f.before;
  return `${f.before ? '' : ''}${reviewed}`;
}

/* --------------------------------------------------------------- severity */

const BOOK_CANDIDATES = (() => {
  const names = BOOK_REGISTRY.map(b => b.name);
  const abbrevs = ['Gen', 'Ex', 'Exod', 'Lev', 'Num', 'Deut', 'Josh', 'Judg', 'Ruth', '1 Sam', '2 Sam', '1 Kgs', '2 Kgs', '1 Chr', '2 Chr', 'Ezra', 'Neh', 'Esth', 'Job', 'Ps', 'Prov', 'Eccl', 'Song', 'Isa', 'Jer', 'Lam', 'Ezek', 'Dan', 'Hos', 'Joel', 'Amos', 'Obad', 'Jonah', 'Mic', 'Nah', 'Hab', 'Zeph', 'Hag', 'Zech', 'Mal', 'Matt', 'Mark', 'Luke', 'John', 'Acts', 'Rom', '1 Cor', '2 Cor', 'Gal', 'Eph', 'Phil', 'Col', '1 Thess', '2 Thess', '1 Tim', '2 Tim', 'Titus', 'Heb', 'Jas', '1 Pet', '2 Pet', '1 John', '2 John', '3 John', 'Jude', 'Rev'];
  return Array.from(new Set([...names, ...abbrevs])).sort((a, b) => b.length - a.length);
})();

const BOOK_ALT = BOOK_CANDIDATES.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
const VERSE_REF_RE = new RegExp(`(?:^|[^\\p{L}\\p{N}])(?:[1-3]\\s?)?(?:${BOOK_ALT})\\.?\\s+\\d{1,3}(?::\\d{1,3})?`, 'u');
const BARE_REF_RE = /(?<![\d:])\d{1,3}:\d{1,3}/;
const QUOTE_RE = /[\u201C\u201D"]/;
const BLOCKING_RE = /\b(doctrin\w*|claim\w*|means|salvation|sav\w*|law|laws|Sabbath|prophec\w*|prophet\w*)\b/i;

function classify(rowText: string): { severity: Severity; evidence: string } {
  const book = rowText.match(VERSE_REF_RE);
  if (book) return { severity: 'citation', evidence: book[0].trim() };
  const bare = rowText.match(BARE_REF_RE);
  if (bare) return { severity: 'citation', evidence: `${bare[0]} (bare verse reference)` };
  if (QUOTE_RE.test(rowText)) return { severity: 'citation', evidence: 'direct quotation' };
  const blocking = rowText.match(BLOCKING_RE);
  if (blocking) return { severity: 'blocking-claim', evidence: blocking[0] };
  return { severity: 'wording', evidence: '(no citation and no doctrinal/claim keyword)' };
}

/* -------------------------------------------------------------- book lookup */

function canonicalBook(token: string): { name: string; slug: string } {
  const spaced = token.replace(/_/g, ' ').trim();
  const direct = BOOK_BY_NAME[spaced];
  if (direct) return { name: direct.name, slug: direct.slug };
  const titled = spaced
    .toLowerCase()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  if (BOOK_BY_NAME[titled]) return { name: BOOK_BY_NAME[titled].name, slug: BOOK_BY_NAME[titled].slug };
  const ci = BOOK_REGISTRY.find(b => b.name.toLowerCase() === spaced.toLowerCase());
  if (ci) return { name: ci.name, slug: ci.slug };
  return { name: spaced, slug: '' };
}

/* --------------------------------------------------------------------- main */

function buildReport(): { markdown: string; json: unknown; warnings: string[] } {
  const warnings: string[] = [];
  const docs: DocParse[] = [];
  let entriesInDocs: string[] = [];

  try {
    entriesInDocs = readdirSync('docs');
  } catch (err) {
    warnings.push(`could not list docs/: ${(err as Error).message}`);
  }

  const docFiles = entriesInDocs
    .filter(f => /^CP-02_.+_(DRAFT|SUMMARY)\.md$/.test(f))
    .sort();

  for (const f of docFiles) {
    const m = f.match(/^CP-02_(.+)_(DRAFT|SUMMARY)\.md$/);
    if (!m) continue;
    const full = `docs/${f}`;
    try {
      const parsed = parseDoc(full, m[2] as 'DRAFT' | 'SUMMARY', m[1]);
      const recognized =
        parsed.fields.length > 0 ||
        parsed.sectionIds.length > 0 ||
        parsed.markers.length > 0 ||
        parsed.summaryLedgerItems > 0 ||
        parsed.sawReviewHeading;
      if (!recognized) {
        warnings.push(`${full}: unparseable — no entry sections, no BEFORE/AFTER blocks, no THEOLOGY-REVIEW markers and no review list found; skipped`);
      } else {
        if (parsed.fields.length === 0 && parsed.sectionIds.length === 0 && parsed.markers.length === 0 && parsed.summaryLedgerItems === 0) {
          parsed.warnings.push('parsed OK but records nothing: no BEFORE/AFTER fields, no entry sections, no review markers and an empty review list (nothing to roll up from this doc)');
        }
        docs.push(parsed);
      }
      for (const w of parsed.warnings) warnings.push(`${full}: ${w}`);
    } catch (err) {
      warnings.push(`${full}: unparseable (${(err as Error).message}) — skipped`);
    }
  }

  // group by book token
  const bookTokens = Array.from(new Set(docs.map(d => d.bookToken))).sort();
  const bookRows = bookTokens.map(token => {
    const meta = canonicalBook(token);
    const bookDocs = docs.filter(d => d.bookToken === token);
    const draftDocs = bookDocs.filter(d => d.kind === 'DRAFT');
    const fields = draftDocs.flatMap(d => d.fields);
    const changed = fields.filter(f => f.after !== f.before);
    const verifyOnly = fields.filter(f => f.after === f.before);
    const markers = draftDocs.flatMap(d => d.markers);
    const gatePass = draftDocs.reduce((n, d) => n + d.gatePass, 0);
    const gateFail = draftDocs.reduce((n, d) => n + d.gateFail, 0);
    const summaryItems = bookDocs.filter(d => d.kind === 'SUMMARY').reduce((n, d) => n + d.summaryLedgerItems, 0);
    const chainGroups = draftDocs.reduce((n, d) => n + d.chainGroups, 0);
    const entryIds = Array.from(new Set(draftDocs.flatMap(d => d.sectionIds)));
    const fakeRewrites = fields.filter(f => !f.verifyOnly && f.after === f.before).length;
    const verifyOnlyMarked = fields.filter(f => f.verifyOnly).length;
    return {
      token,
      book: meta.name,
      slug: meta.slug,
      docs: bookDocs.map(d => d.file),
      entries: entryIds.length,
      chainGroups,
      fields: fields.length,
      changed: changed.length,
      verifyOnly: verifyOnly.length,
      verifyOnlyMarked,
      fakeRewrites,
      markers: markers.length,
      summaryItems,
      gatePass,
      gateFail,
      entryIds,
    };
  });

  // THEOLOGY-REVIEW queue
  const queue = docs
    .flatMap(d => d.markers)
    .map(m => {
      const { severity, evidence } = classify(m.rowText);
      const meta = canonicalBook(docs.find(d => d.file === m.doc)?.bookToken ?? '');
      const field = docs
        .find(d => d.file === m.doc)
        ?.fields.find(f => f.sectionId === m.sectionId && f.path === m.fieldPath);
      return {
        severity,
        evidence,
        doc: m.doc,
        book: meta.name,
        sectionId: m.sectionId,
        fieldPath: m.fieldPath,
        line: m.line,
        markerText: m.text.replace(/\s+/g, ' ').trim(),
        afterExcerpt: (field?.after || field?.before || '').replace(/\s+/g, ' ').trim(),
      };
    });
  const severityOrder: Severity[] = ['citation', 'blocking-claim', 'wording'];
  queue.sort(
    (a, b) =>
      severityOrder.indexOf(a.severity) - severityOrder.indexOf(b.severity) ||
      a.book.localeCompare(b.book) ||
      a.sectionId.localeCompare(b.sectionId) ||
      a.fieldPath.localeCompare(b.fieldPath)
  );
  const severityCounts = Object.fromEntries(
    severityOrder.map(s => [s, queue.filter(q => q.severity === s).length])
  ) as Record<Severity, number>;

  // unaccounted entries: hand-written entries with no CP-02 draft coverage.
  // Accounted = the entry has its own `## <id>` section in a doc, OR it appears as a
  // `- <id> — <field>` ledger bullet in a summary doc. An id that merely appears in a
  // doc's text (e.g. as a chain-step id inside a Genesis chain group) is NOT drafted —
  // it is reported separately so the distinction stays visible.
  const allIds = [...Object.keys(threadDetails), ...Object.keys(bookThreadDetails)];
  const drafted = new Set<string>();
  const ledgered = new Set<string>();
  const mentioned = new Set<string>();
  for (const d of docs) {
    for (const id of d.sectionIds) drafted.add(id);
    for (const id of d.ledgerIds) if (/^[a-z0-9]{2,5}-\d+-\d+$/.test(id)) ledgered.add(id);
    for (const m of d.raw.matchAll(/[a-z0-9]{2,5}-\d+-\d+/g)) mentioned.add(m[0]);
  }
  const accounted = new Set<string>([...drafted, ...ledgered]);
  const unaccounted = allIds.filter(id => !accounted.has(id) && !mentioned.has(id));
  const mentionedOnly = allIds.filter(id => !accounted.has(id) && mentioned.has(id));
  const unaccountedByBook = new Map<string, string[]>();
  for (const id of unaccounted) {
    const slug = id.split('-')[0];
    const list = unaccountedByBook.get(slug) ?? [];
    list.push(id);
    unaccountedByBook.set(slug, list);
  }
  const mentionedOnlyByBook = new Map<string, string[]>();
  for (const id of mentionedOnly) {
    const slug = id.split('-')[0];
    const list = mentionedOnlyByBook.get(slug) ?? [];
    list.push(id);
    mentionedOnlyByBook.set(slug, list);
  }
  const unaccountedOrder = Array.from(unaccountedByBook.keys()).sort((a, b) => {
    const ia = BOOK_REGISTRY.findIndex(x => x.slug === a);
    const ib = BOOK_REGISTRY.findIndex(x => x.slug === b);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.localeCompare(b);
  });

  /* ------------------------------------------------------------ markdown */

  const L: string[] = [];
  const generatedAt = new Date().toISOString();
  L.push('# CP-05 · Triage queue — plain-language sweep ledger rollup');
  L.push('');
  L.push(`Generated: ${generatedAt}`);
  L.push('');
  L.push('Source: every `docs/CP-02_<BOOK>_DRAFT.md` and `docs/CP-02_<BOOK>_SUMMARY.md` in the repo (read-only).');
  L.push('Producer: `npx tsx scripts/cp04LedgerRollup.ts`. Nothing under `src/` is read-modified; no data file is written.');
  L.push('');
  L.push(`Docs parsed: ${docs.length} of ${docFiles.length} candidates${warnings.length ? ` · warnings: ${warnings.length}` : ''}`);
  for (const w of warnings) L.push(`- WARNING: ${w}`);
  L.push('');
  L.push('## 1 · Per-book scoreboard');
  L.push('');
  L.push('| book | entries | strings changed | strings EQUIVALENT/VERIFY-ONLY | THEOLOGY-REVIEW | gate status |');
  L.push('| --- | --- | --- | --- | --- | --- |');
  if (bookRows.length === 0) {
    L.push('| (no CP-02 docs found) | 0 | 0 | 0 | 0 | n/a |');
  }
  for (const r of bookRows) {
    L.push(
      `| ${mdCell(r.book)} | ${r.entries} | ${r.changed} | ${r.verifyOnly} | ${r.markers} | ${r.gatePass} PASS / ${r.gateFail} FAIL |`
    );
  }
  L.push('');
  L.push('Notes:');
  for (const r of bookRows) {
    L.push(
      `- ${r.book}: ${r.fields} fields considered in ${r.docs.length} doc(s) (${r.docs.map(d => d.replace('docs/', '')).join(', ')}); ` +
        `${r.chainGroups} pillar-chain group(s); ${r.verifyOnlyMarked} field(s) marked VERIFY-ONLY; ` +
        `${r.fakeRewrites} rewrite(s) whose AFTER equals BEFORE; summary-doc ledger items: ${r.summaryItems}.`
    );
  }
  L.push('');
  L.push('## 2 · THEOLOGY-REVIEW queue (grouped by severity)');
  L.push('');
  L.push(
    `Severity rule: row text = \`<entry> :: <field path> :: <AFTER prose>\`; citation > blocking-claim > wording; ` +
      `counts — citation ${severityCounts.citation}, blocking-claim ${severityCounts['blocking-claim']}, wording ${severityCounts.wording}.`
  );
  L.push('');
  for (const sev of severityOrder) {
    const rows = queue.filter(q => q.severity === sev);
    L.push(`### ${sev} (${rows.length})`);
    L.push('');
    if (rows.length === 0) {
      L.push('_None._');
      L.push('');
      continue;
    }
    L.push('| # | book | entry | field | evidence | AFTER (excerpt) |');
    L.push('| --- | --- | --- | --- | --- | --- |');
    rows.forEach((q, i) => {
      L.push(
        `| ${i + 1} | ${mdCell(q.book)} | ${mdCell(q.sectionId)} | ${mdCell(q.fieldPath)} | ${mdCell(q.evidence, 60)} | ${mdCell(q.afterExcerpt, 110) || '_(no AFTER text parsed)_'} |`
      );
    });
    L.push('');
  }
  L.push('## 3 · Totals');
  L.push('');
  const totalEntries = bookRows.reduce((n, r) => n + r.entries, 0);
  const totalFields = bookRows.reduce((n, r) => n + r.fields, 0);
  const totalChanged = bookRows.reduce((n, r) => n + r.changed, 0);
  const totalVerify = bookRows.reduce((n, r) => n + r.verifyOnly, 0);
  const totalFake = bookRows.reduce((n, r) => n + r.fakeRewrites, 0);
  const totalChainGroups = bookRows.reduce((n, r) => n + r.chainGroups, 0);
  const totalGatePass = bookRows.reduce((n, r) => n + r.gatePass, 0);
  const totalGateFail = bookRows.reduce((n, r) => n + r.gateFail, 0);
  L.push(`- Books with a CP-02 doc: ${bookRows.length}`);
  L.push(`- Entries covered by a draft doc: ${totalEntries}`);
  L.push(`- Pillar-chain groups covered: ${totalChainGroups}`);
  L.push(`- Fields considered: ${totalFields}`);
  L.push(`- Strings changed: ${totalChanged}`);
  L.push(`- Strings EQUIVALENT/VERIFY-ONLY: ${totalVerify}`);
  L.push(`- Rewrites whose AFTER equals BEFORE (fake rewrites): ${totalFake}`);
  L.push(`- THEOLOGY-REVIEW markers: ${queue.length} (citation ${severityCounts.citation} · blocking-claim ${severityCounts['blocking-claim']} · wording ${severityCounts.wording})`);
  L.push(`- Clarity gate lines: ${totalGatePass} PASS · ${totalGateFail} FAIL`);
  L.push(`- Hand-written entries in src/data: ${allIds.length} (threadDetails ${Object.keys(threadDetails).length} + bookThreadDetails ${Object.keys(bookThreadDetails).length})`);
  L.push(`- Unaccounted entries (in no CP-02 draft doc, not even mentioned): ${unaccounted.length}`);
  L.push(`- Mentioned in a doc but never drafted (no section, no ledger row): ${mentionedOnly.length}`);
  L.push(`- Rejection decisions recorded: 0 (no CP-02 doc in this repo records one)`);
  L.push('');
  L.push('## 4 · Unaccounted entries (present in src/data, absent from every CP-02 draft doc)');
  L.push('');
  L.push('Accounted = the entry has its own `## <id>` section in a doc, or appears as a `- <id> — <field>` ledger row in a summary doc.');
  L.push('');
  if (unaccounted.length === 0) {
    L.push('_Every hand-written entry appears in a draft doc._');
  } else {
    L.push(`${unaccounted.length} entries across ${unaccountedOrder.length} books have no CP-02 draft doc:`);
    L.push('');
    L.push('| book | count | entry ids |');
    L.push('| --- | --- | --- |');
    for (const slug of unaccountedOrder) {
      const ids = unaccountedByBook.get(slug)!;
      const name = BOOK_REGISTRY.find(b => b.slug === slug)?.name ?? slug;
      L.push(`| ${mdCell(`${name} (${slug})`)} | ${ids.length} | ${mdCell(ids.join(', '), 4000)} |`);
    }
  }
  L.push('');
  L.push(`### Mentioned but not drafted (${mentionedOnly.length})`);
  L.push('');
  if (mentionedOnly.length === 0) {
    L.push('_None._');
  } else {
    L.push('These ids appear somewhere in a CP-02 doc (typically as a pillar-chain step id such as `(id: num-12-6)` inside a Genesis chain group) but have no `## <id>` section and no ledger row, so their own prose has never been drafted:');
    L.push('');
    L.push('| book | count | entry ids |');
    L.push('| --- | --- | --- |');
    for (const slug of Array.from(mentionedOnlyByBook.keys()).sort()) {
      const ids = mentionedOnlyByBook.get(slug)!;
      const name = BOOK_REGISTRY.find(b => b.slug === slug)?.name ?? slug;
      L.push(`| ${mdCell(`${name} (${slug})`)} | ${ids.length} | ${mdCell(ids.join(', '), 4000)} |`);
    }
  }
  L.push('');

  const json = {
    generatedAt,
    docsParsed: docs.map(d => ({
      file: d.file,
      book: d.bookToken,
      kind: d.kind,
      fields: d.fields.length,
      markers: d.markers.length,
      sectionIds: d.sectionIds.length,
      chainGroups: d.chainGroups,
      summaryLedgerItems: d.summaryLedgerItems,
      ledgerIds: d.ledgerIds,
      gatePass: d.gatePass,
      gateFail: d.gateFail,
      warnings: d.warnings,
    })),
    warnings,
    scoreboard: bookRows,
    theologyReview: queue,
    severityCounts,
    totals: {
      books: bookRows.length,
      entries: totalEntries,
      chainGroups: totalChainGroups,
      fields: totalFields,
      changed: totalChanged,
      verifyOnly: totalVerify,
      fakeRewrites: totalFake,
      theologyReview: queue.length,
      gatePass: totalGatePass,
      gateFail: totalGateFail,
      dataEntries: allIds.length,
      unaccounted: unaccounted.length,
      mentionedOnly: mentionedOnly.length,
      drafted: drafted.size,
      ledgered: ledgered.size,
    },
    unaccountedByBook: Object.fromEntries(unaccountedOrder.map(slug => [slug, unaccountedByBook.get(slug)!])),
    mentionedOnlyByBook: Object.fromEntries(Array.from(mentionedOnlyByBook.keys()).sort().map(slug => [slug, mentionedOnlyByBook.get(slug)!])),
  };

  return { markdown: L.join('\n'), json, warnings };
}

function parseArgs(argv: string[]): { out: string | null; json: string | null; warnings: string[] } {
  const res: { out: string | null; json: string | null; warnings: string[] } = { out: null, json: null, warnings: [] };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--out') {
      const v = argv[++i];
      if (!v) res.warnings.push('--out needs a path; ignored');
      else res.out = v;
    } else if (arg.startsWith('--out=')) {
      res.out = arg.slice('--out='.length);
    } else if (arg === '--json') {
      const v = argv[++i];
      if (!v) res.warnings.push('--json needs a path; ignored');
      else res.json = v;
    } else if (arg.startsWith('--json=')) {
      res.json = arg.slice('--json='.length);
    } else {
      res.warnings.push(`unrecognised argument "${arg}" ignored`);
    }
  }
  return res;
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  try {
    const { markdown, json, warnings } = buildReport();
    process.stdout.write(`${markdown}\n`);
    for (const w of opts.warnings) console.log(`WARNING: ${w}`);
    if (opts.out) {
      try {
        writeFileSync(opts.out, `${markdown}\n`, 'utf8');
        console.log(`markdown ledger written: ${opts.out}`);
      } catch (err) {
        console.log(`ERROR: could not write ${opts.out}: ${(err as Error).message}`);
      }
    } else {
      console.log('(no --out given: nothing written to disk)');
    }
    if (opts.json) {
      try {
        writeFileSync(opts.json, `${JSON.stringify(json, null, 2)}\n`, 'utf8');
        console.log(`JSON ledger written: ${opts.json}`);
      } catch (err) {
        console.log(`ERROR: could not write ${opts.json}: ${(err as Error).message}`);
      }
    }
    if (warnings.length > 0) {
      console.log(`\n${warnings.length} parse warning(s):`);
      for (const w of warnings) console.log(`  - ${w}`);
    }
  } catch (err) {
    console.log(`ERROR: ledger rollup failed (${(err as Error).message}) — exiting 0 by contract.`);
    console.log((err as Error).stack ?? '');
  }
  process.exit(0);
}

main();
