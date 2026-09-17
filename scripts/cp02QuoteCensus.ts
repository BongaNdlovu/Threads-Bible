/* Quotation-fidelity census — do the app's quoted words match the served KJV canon?
 *
 * Usage: npx tsx scripts/cp02QuoteCensus.ts [--book <slug>] [--json <path>]
 *
 * Why this exists: calibration surfaced a third category the plan did not expect
 * (docs/CP-01_FULL_CANON_BASELINE_V2.md §6). App prose sometimes quotes KJV
 * loosely — e.g. "that whoever believes in Him should not perish but have eternal
 * life" where the canon (John 3:15) reads "That whosoever believeth in him should
 * not perish, but have eternal life". The plain-language sweep must NOT fix these
 * (that changes words presented as Scripture) and must NOT copy them into new
 * text. The operator decides at HALT 1; this tool sizes the problem first.
 *
 * Method: every double-quoted span in prose that is long enough to be a quotation
 * is normalised to its word sequence, then searched (case- and punctuation-
 * insensitive) in the served canon for the verse the sentence cites, and failing
 * that in the whole book. Reports: MATCH (verbatim), LOOSE (words differ), and
 * NO-CITATION (quoted, but no reference in the same string to check against).
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { threadDetails } from '../src/data/threadDetails';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../src/data/bookRegistry';
import { normalizeBookName } from '../src/data/refParser';
import { ABBREVIATIONS as CITATION_ABBREVIATIONS } from './citationTokens';

type AnyRecord = Record<string, any>;

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
const words = (s: string) => norm(s).split(' ').filter(Boolean);

/** Quoted spans of 4+ words — short ones ("the Word") are labels, not quotations. */
function quotedSpans(text: string): string[] {
  const out: string[] = [];
  for (const re of [/\u201C([^\u201D]+)\u201D/g, /"([^"]+)"/g]) {
    for (const m of text.matchAll(re)) {
      const span = m[1].trim();
      if (words(span).length >= 4) out.push(span);
    }
  }
  return out;
}

/** Citations inside a string, canonicalised: "Book ch:v".
 * Includes the verifier's abbreviation table — the corpus cites "Heb 11:3",
 * "Rom 8:3", "Isa 11:10" far more often than full names, and an abbreviation-blind
 * check reports almost every quotation as uncited. */
function citations(text: string): string[] {
  const alt = [...BOOK_REGISTRY.map(b => b.name), ...CITATION_ABBREVIATIONS]
    .sort((a, b) => b.length - a.length)
    .map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const re = new RegExp(`(?:^|[^\\p{L}\\p{N}])([1-3]?\\s?(?:${alt}))\\.?\\s+(\\d{1,3}):(\\d{1,3})`, 'gu');
  const out: string[] = [];
  for (const m of text.matchAll(re)) {
    const canonical = normalizeBookName(m[1].trim());
    if (BOOK_BY_NAME[canonical]) out.push(`${canonical} ${m[2]}:${m[3]}`);
  }
  return out;
}

const canonCache = new Map<string, Map<number, string>>();
function canonVerses(slug: string): Map<number, string> {
  const cached = canonCache.get(slug);
  if (cached) return cached;
  const path = `public/books/${slug}.json`;
  const out = new Map<number, string>();
  if (existsSync(path)) {
    const json = JSON.parse(readFileSync(path, 'utf8')) as { data: Array<{ chapter: number; verse: number; text: string }> };
    for (const v of json.data) out.set(v.chapter * 1000 + v.verse, v.text);
  }
  canonCache.set(slug, out);
  return out;
}

function verseText(bookName: string, chapter: number, verse: number): string | null {
  const meta = BOOK_BY_NAME[bookName];
  if (!meta) return null;
  return canonVerses(meta.slug).get(chapter * 1000 + verse) ?? null;
}

/** Whole-book normalised text, for "quoted but cited elsewhere" cases. */
const bookTextCache = new Map<string, string>();
function bookText(bookName: string): string {
  const meta = BOOK_BY_NAME[bookName];
  if (!meta) return '';
  const cached = bookTextCache.get(meta.slug);
  if (cached !== undefined) return cached;
  const text = norm([...canonVerses(meta.slug).values()].join(' '));
  bookTextCache.set(meta.slug, text);
  return text;
}

type Verdict = 'MATCH' | 'LOOSE' | 'NO-CITATION' | 'NOT-IN-CANON';

interface Finding {
  book: string;
  entryId: string;
  field: string;
  quote: string;
  citations: string[];
  verdict: Verdict;
  detail: string;
}

function collect(slug: string) {
  const findings: Finding[] = [];
  const push = (entryId: string, field: string, text: string) => {
    if (typeof text !== 'string' || !text) return;
    const spans = quotedSpans(text);
    if (spans.length === 0) return;
    const cites = citations(text);
    for (const span of spans) {
      const target = words(span).join(' ');
      if (cites.length === 0) {
        findings.push({ book: slug, entryId, field, quote: span, citations: [], verdict: 'NO-CITATION', detail: 'quoted, but the string cites no reference to check against' });
        continue;
      }
      let matchedVerse: string | null = null;
      let looseVerse: string | null = null;
      for (const cite of cites) {
        const m = /^(.+) (\d+):(\d+)$/.exec(cite);
        if (!m) continue;
        const verse = verseText(m[1], Number(m[2]), Number(m[3]));
        if (!verse) continue;
        const vn = norm(verse);
        if (vn.includes(target)) matchedVerse = cite;
        else {
          // loose = the quoted words are mostly present in that verse
          const vw = new Set(words(verse));
          const qw = words(span);
          const hit = qw.filter(w => vw.has(w)).length / qw.length;
          if (hit >= 0.6) looseVerse = `${cite} (~${Math.round(hit * 100)}% of quoted words present)`;
        }
      }
      if (matchedVerse) {
        findings.push({ book: slug, entryId, field, quote: span, citations: cites, verdict: 'MATCH', detail: matchedVerse });
        continue;
      }
      if (looseVerse) {
        findings.push({ book: slug, entryId, field, quote: span, citations: cites, verdict: 'LOOSE', detail: looseVerse });
        continue;
      }

      // Not found in the citations the sentence names. That is expected whenever the
      // quoted verse is the ENTRY'S OWN verse (e.g. a Numbers 12:6 quote inside the
      // num-12-6 entry, whose sentence happens to cite Isaiah 8:20 / Matthew 7:20).
      // Check the source book first, then the whole canon, before crying mismatch.
      const sourceBook = BOOK_REGISTRY.find(b => b.slug === slug)?.name;
      if (sourceBook && bookText(sourceBook).includes(target)) {
        findings.push({
          book: slug, entryId, field, quote: span, citations: cites, verdict: 'MATCH',
          detail: `${sourceBook} (the entry's own book — quoted verse not named in the sentence)`,
        });
        continue;
      }
      const inAnyCanon = BOOK_REGISTRY.some(b => bookText(b.name).includes(target));
      findings.push({
        book: slug, entryId, field, quote: span, citations: cites,
        verdict: inAnyCanon ? 'MATCH' : 'NOT-IN-CANON',
        detail: inAnyCanon
          ? 'verbatim somewhere in the canon (reference not named in this string)'
          : 'NOT FOUND anywhere in the served canon — likely a loose rendering',
      });
    }
  };

  for (const map of [threadDetails as AnyRecord, bookThreadDetails as AnyRecord]) {
    for (const [id, entry] of Object.entries(map)) {
      if (!id.startsWith(`${slug}-`)) continue;
      push(id, 'title', entry.title);
      push(id, 'principle', entry.principle);
      if (entry.who) push(id, 'who', entry.who);
      for (const [ref, t] of Object.entries(entry.whoByRef ?? {})) push(id, `whoByRef[${ref}]`, t as string);
      (entry.cumulativePrinciples ?? []).forEach((p: string, i: number) => push(id, `cumulativePrinciples[${i}]`, p));
      (entry.terms ?? []).forEach((t: AnyRecord, i: number) => {
        push(id, `terms[${i}].gloss`, t.gloss);
        if (t.note) push(id, `terms[${i}].note`, t.note);
        if (t.exposition) push(id, `terms[${i}].exposition`, t.exposition);
      });
    }
  }
  return findings;
}

function main() {
  const argv = process.argv.slice(2);
  const bookIdx = argv.indexOf('--book');
  const jsonIdx = argv.indexOf('--json');
  const slugs = bookIdx >= 0
    ? [argv[bookIdx + 1]]
    : BOOK_REGISTRY.map(b => b.slug).filter(s => collect(s).length > 0);

  const all: Finding[] = [];
  for (const slug of slugs) all.push(...collect(slug));

  const byVerdict = { MATCH: 0, LOOSE: 0, 'NO-CITATION': 0, 'NOT-IN-CANON': 0 } as Record<Verdict, number>;
  for (const f of all) byVerdict[f.verdict]++;

  console.log('=== QUOTATION-FIDELITY CENSUS (app prose vs served KJV canon) ===');
  console.log(`scope: ${bookIdx >= 0 ? slugs.join(',') : `all ${slugs.length} books`}`);
  console.log(`quoted spans checked (4+ words): ${all.length}`);
  console.log(`MATCH ${byVerdict.MATCH} · LOOSE ${byVerdict.LOOSE} · NO-CITATION ${byVerdict['NO-CITATION']} · NOT-IN-CANON ${byVerdict['NOT-IN-CANON']}`);
  console.log('');
  for (const verdict of ['NOT-IN-CANON', 'LOOSE'] as const) {
    const rows = all.filter(f => f.verdict === verdict);
    if (!rows.length) continue;
    console.log(`--- ${verdict} (${rows.length}) ---`);
    for (const r of rows) {
      console.log(`  ${r.entryId} · ${r.field} · cites ${r.citations.join(', ') || '(none)'} · ${r.detail}`);
      console.log(`      "${r.quote.slice(0, 150)}"`);
    }
    console.log('');
  }
  const counts = new Map<string, number>();
  for (const f of all.filter(x => x.verdict === 'NOT-IN-CANON' || x.verdict === 'LOOSE')) {
    counts.set(f.book, (counts.get(f.book) ?? 0) + 1);
  }
  console.log('--- by book (LOOSE + NOT-IN-CANON) ---');
  for (const [b, n] of [...counts.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${b}: ${n}`);
  console.log('');

  if (jsonIdx >= 0) {
    const out = argv[jsonIdx + 1];
    if (out) {
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), totals: byVerdict, findings: all }, null, 2));
      console.log(`wrote ${out}`);
    }
  }
}

main();
