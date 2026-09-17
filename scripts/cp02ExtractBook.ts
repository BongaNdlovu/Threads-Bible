/* Extract one book's in-scope prose for the plain-language sweep (plan v2.0 §1.5).
 *
 * Usage:  npx tsx scripts/cp02ExtractBook.ts <slug> [--json <path>]
 * Example: npx tsx scripts/cp02ExtractBook.ts psa --json docs/_work/psa.json
 *
 * Emits every in-scope string with its exact field path, current text, and gate
 * verdict, plus the neighbouring context a writer needs (term original/translit/
 * strongs, sibling fields). Read-only: never writes to src/.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { threadDetails, threadChains } from '../src/data/threadDetails';
import { checkProse } from './checkReadability';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../src/data/bookRegistry';
import { normalizeBookName } from '../src/data/refParser';
import { ABBREVIATIONS as CITATION_ABBREVIATIONS } from './citationTokens';

type AnyRecord = Record<string, any>;

const ABSTRACT_MARKERS = [
  'framework', 'motif', 'paradigm', 'continuum', 'dynamic', 'principle of', 'theology',
  'theological', 'conceptual', 'schema', 'synthesis', 'economy of', 'mechanism',
  'trajectory', 'typological', 'hermeneutic', 'teleolog', 'soteriological',
  'eschatological', 'christological', 'covenantalism',
];

export function densityOf(text: string): { density: number; words: number; sentences: number; maxSentenceWords: number } {
  const t = (text ?? '').trim();
  if (!t) return { density: 0, words: 0, sentences: 0, maxSentenceWords: 0 };
  const stripped = t.replace(/\u201C[^\u201D]*\u201D/g, '. ').replace(/"[^"]*"/g, '. ');
  const sentences = stripped.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
  const counts = sentences.map(s => s.split(/\s+/).filter(Boolean).length);
  const maxSentenceWords = counts.length ? Math.max(...counts) : 0;
  const words = t.split(/\s+/).filter(Boolean).length;
  const lower = t.toLowerCase();
  let markers = 0;
  for (const m of ABSTRACT_MARKERS) {
    const re = new RegExp(`\\b${m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'gi');
    markers += (lower.match(re) ?? []).length;
  }
  const density = (maxSentenceWords / 35) * 2 + words / 40 + 0.15 * markers;
  return { density: Number(density.toFixed(4)), words, sentences: sentences.length, maxSentenceWords };
}

export interface FieldRecord {
  entryId: string;
  file: 'threadDetails' | 'bookThreadDetails';
  field: string;
  text: string;
  density: number;
  words: number;
  sentences: number;
  maxSentenceWords: number;
  gate: 'PASS' | 'FAIL';
  violations: string[];
  context?: Record<string, unknown>;
}

function termContext(term: AnyRecord) {
  return {
    term: term.term,
    original: term.original,
    translit: term.translit,
    strongs: term.strongs ?? null,
    gloss: term.gloss,
    note: term.note ?? null,
    exposition: term.exposition ?? null,
  };
}

/** Every in-scope prose field for one book slug, including chains carrying that book. */
export function collectBook(slug: string): { entries: FieldRecord[]; chains: FieldRecord[]; entryIds: string[] } {
  const entries: FieldRecord[] = [];
  const chains: FieldRecord[] = [];
  const entryIds: string[] = [];

  const push = (
    entryId: string,
    file: FieldRecord['file'],
    field: string,
    text: string,
    context?: Record<string, unknown>
  ) => {
    if (typeof text !== 'string' || !text.trim()) return;
    const d = densityOf(text);
    const v = checkProse(text);
    entries.push({
      entryId, file, field, text,
      density: d.density, words: d.words, sentences: d.sentences, maxSentenceWords: d.maxSentenceWords,
      gate: v.length === 0 ? 'PASS' : 'FAIL',
      violations: v.map(x => x.detail),
      ...(context ? { context } : {}),
    });
  };

  for (const [file, map] of [
    ['threadDetails', threadDetails as AnyRecord],
    ['bookThreadDetails', bookThreadDetails as AnyRecord],
  ] as const) {
    for (const [id, entry] of Object.entries(map)) {
      if (!id.startsWith(`${slug}-`)) continue;
      entryIds.push(id);
      push(id, file, 'title', entry.title);
      push(id, file, 'principle', entry.principle, { citations: extractCitations(entry.principle ?? '') });
      if (entry.who) push(id, file, 'who', entry.who);
      for (const [ref, text] of Object.entries(entry.whoByRef ?? {})) {
        push(id, file, `whoByRef[${JSON.stringify(ref)}]`, text as string);
      }
      (entry.cumulativePrinciples ?? []).forEach((p: string, i: number) => {
        push(id, file, `cumulativePrinciples[${i}]`, p);
      });
      (entry.terms ?? []).forEach((t: AnyRecord, i: number) => {
        const ctx = termContext(t);
        push(id, file, `terms[${i}].gloss`, t.gloss, ctx);
        if (t.note) push(id, file, `terms[${i}].note`, t.note, ctx);
        if (t.exposition) push(id, file, `terms[${i}].exposition`, t.exposition, ctx);
      });
      (entry.sameTestamentLinks ?? []).forEach((l: AnyRecord, i: number) => {
        if (l.connection) push(id, file, `sameTestamentLinks[${i}].connection`, l.connection);
      });
    }
  }

  for (const chain of (threadChains ?? []) as AnyRecord[]) {
    const touches = (chain.steps ?? []).some((s: AnyRecord) => String(s.verseId ?? '').startsWith(`${slug}-`));
    if (!touches) continue;
    if (chain.name) {
      const d = densityOf(chain.name);
      const v = checkProse(chain.name);
      chains.push({
        entryId: `chain:${chain.id}`, file: 'threadDetails', field: 'name', text: chain.name,
        density: d.density, words: d.words, sentences: d.sentences, maxSentenceWords: d.maxSentenceWords,
        gate: v.length === 0 ? 'PASS' : 'FAIL', violations: v.map(x => x.detail),
      });
    }
    (chain.steps ?? []).forEach((s: AnyRecord, i: number) => {
      for (const f of ['title', 'connection'] as const) {
        const text = s[f];
        if (typeof text !== 'string' || !text.trim()) continue;
        const d = densityOf(text);
        const v = checkProse(text);
        chains.push({
          entryId: `chain:${chain.id}`, file: 'threadDetails', field: `steps[${i}].${f}`, text,
          density: d.density, words: d.words, sentences: d.sentences, maxSentenceWords: d.maxSentenceWords,
          gate: v.length === 0 ? 'PASS' : 'FAIL', violations: v.map(x => x.detail),
          context: { ref: s.ref ?? null, verseId: s.verseId ?? null, chainName: chain.name ?? null },
        });
      }
    });
  }

  entries.sort((a, b) => b.density - a.density);
  chains.sort((a, b) => b.density - a.density);
  return { entries, chains, entryIds: [...new Set(entryIds)].sort() };
}

/** Book-qualified citations present in a text, e.g. "John 3:14", "Rom 8:3", "1 Cor 5:7".
 *
 * Reuses the structural verifier's abbreviation table and citation regex so the
 * worklist annotation and the fixity gate agree by construction. An earlier
 * version matched BOOK_REGISTRY names only, which was blind to every abbreviated
 * citation (`Rom 8:3`, `Isa 11:10`, `Ps 22:1`) — the majority form in this data. */
export function extractCitations(text: string): string[] {
  const names = [...BOOK_REGISTRY.map(b => b.name), ...CITATION_ABBREVIATIONS].sort(
    (a, b) => b.length - a.length || a.localeCompare(b)
  );
  const alt = names.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const re = new RegExp(
    `(?:^|[^\\p{L}\\p{N}])([1-3]?\\s?(?:${alt}))\\.?\\s+(\\d{1,3}):(\\d{1,3})`,
    'gu'
  );
  const out: string[] = [];
  for (const m of text.matchAll(re)) {
    const canonical = normalizeBookName(m[1].trim());
    if (!BOOK_BY_NAME[canonical]) continue;
    out.push(`${canonical} ${m[2]}:${m[3]}`);
  }
  return out;
}

function main() {
  const argv = process.argv.slice(2);
  const slug = argv.find(a => !a.startsWith('--'));
  const jsonIdx = argv.indexOf('--json');
  if (!slug) {
    console.error('usage: npx tsx scripts/cp02ExtractBook.ts <slug> [--json <path>]');
    process.exit(2);
  }
  const meta = BOOK_REGISTRY.find(b => b.slug === slug);
  if (!meta) {
    console.error(`unknown slug: ${slug}`);
    process.exit(2);
  }
  const { entries, chains, entryIds } = collectBook(slug);
  const gateFails = [...entries, ...chains].filter(r => r.gate === 'FAIL');

  console.log(`=== ${meta.name} (${slug}) — in-scope prose ===`);
  console.log(`entries: ${entryIds.length} · entry strings: ${entries.length} · chain strings: ${chains.length} · total: ${entries.length + chains.length}`);
  console.log(`gate failures: ${gateFails.length}`);
  if (gateFails.length) {
    for (const f of gateFails) console.log(`  FAIL ${f.entryId} ${f.field}: ${f.violations.join('; ')}`);
  }
  console.log(`\n--- densest 12 ---`);
  for (const r of [...entries, ...chains].sort((a, b) => b.density - a.density).slice(0, 12)) {
    console.log(`  ${r.density.toFixed(3)}  ${r.entryId} · ${r.field}  [${r.words}w/${r.sentences}s/max ${r.maxSentenceWords}w]`);
    console.log(`      ${r.text.replace(/\s+/g, ' ').slice(0, 130)}`);
  }

  if (jsonIdx >= 0) {
    const out = argv[jsonIdx + 1];
    if (!out) {
      console.error('--json needs a path');
      process.exit(2);
    }
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, JSON.stringify({
      book: slug, bookName: meta.name, generatedFrom: 'HEAD working tree',
      counts: { entries: entryIds.length, entryStrings: entries.length, chainStrings: chains.length, gateFails: gateFails.length },
      entryIds, fields: entries, chains,
    }, null, 2));
    console.log(`\nwrote ${out}`);
  }
}

const invokedDirectly = process.argv[1] && /cp02ExtractBook\.(ts|js)$/.test(process.argv[1]);
if (invokedDirectly) main();
