/**
 * One-off accuracy verification (temp script):
 *  A. Canon integrity: verse totals, KJV sanity anchors, duplicate ids
 *  B. Thread integrity: anchors exist as real verses, no cross-map dupes,
 *     threadDetails keyset == genesis map keyset, all refs resolve
 *  C. Tier 2/3/4 + beliefs + LDE: verseId <-> human ref internal consistency
 *  D. Spot-check printing of high-profile connections for manual review
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import { expandVerseRange, parseRef } from '../src/data/refParser';
import { NT_CITATIONS } from '../src/data/tier2NtCitations';
import { MESSIANIC_PROPHECIES } from '../src/data/tier3Messianic';
import { MASTER_CHAINS } from '../src/data/tier4MasterChains';
import { FUNDAMENTAL_BELIEFS } from '../src/data/fundamentalBeliefs';
import { LAST_DAY_EVENTS } from '../src/data/lastDayEvents';
import { threadDetails } from '../src/data/threadDetails';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { genesisProphecies } from '../src/data/prophecies';
import { exodusProphecies, danielProphecies, revelationProphecies } from '../src/data/bookProphecies';
import { otProphecies } from '../src/data/otProphecies';
import { ntProphecies } from '../src/data/ntProphecies';
import { paulineProphecies } from '../src/data/paulineProphecies';
import { fulfillmentVerses } from '../src/data/fulfillments';

// id -> text, from public/books + fulfillments fallback
const textById = new Map<string, string>();
const verseIdSets = new Map<string, Set<string>>();
for (const b of BOOK_REGISTRY) {
  const j = JSON.parse(fs.readFileSync(path.join(__dirname, `../public/books/${b.slug}.json`), 'utf8'));
  const set = new Set<string>();
  for (const v of j.data) {
    textById.set(v.id, v.text);
    set.add(v.id);
  }
  verseIdSets.set(b.slug, set);
}
for (const v of fulfillmentVerses) {
  if (!textById.has(v.id)) textById.set(v.id, v.text);
}

const maps: [string, Record<string, { fulfillmentRefs: string[] }>][] = [
  ['genesis', genesisProphecies], ['exodus+dan+rev', exodusProphecies],
  ['ot', otProphecies], ['nt', ntProphecies], ['pauline', paulineProphecies],
  ['extra-dan', danielProphecies], ['extra-rev', revelationProphecies],
];

const slugOf = (id: string) => id.split('-')[0];
const resolveRef = (ref: string): string[] => {
  const e = expandVerseRange(ref);
  if (e.length) return e;
  const p = parseRef(ref);
  if (!p) return [];
  const meta = BOOK_REGISTRY.find(b => b.name === p.book);
  if (!meta) return [];
  const out: string[] = [];
  for (let v = p.startVerse; v <= p.endVerse; v++) out.push(`${meta.slug}-${p.chapter}-${v}`);
  return out;
};
const allResolve = (refs: string[]) => refs.every(r => resolveRef(r).length > 0);
const text = (id: string) => textById.get(id) ?? '(NOT FOUND)';

console.log('== A. CANON INTEGRITY ==');
let total = 0;
for (const b of BOOK_REGISTRY) total += verseIdSets.get(b.slug)!.size;
console.log(`total verses across 66 books: ${total} (KJV standard: 31102)`);
for (const [slug, expect] of [['psa', 176], ['mat', 1071], ['gen', 1533], ['rev', 404]] as const) {
  const n = [...verseIdSets.get(slug)!].filter(id => slugOf(id) === slug).length;
  console.log(`${slug}: ${n} verses in book`);
}
const byId = (id: string) => textById.has(id);
console.log('anchor sanity:', ['gen-1-1', 'rev-22-21', 'mal-4-6', 'jol-2-28', 'jol-2-32', 'psa-119-176', 'psa-117-2', 'joh-3-16', 'mat-2-23', 'mal-3-1', 'psa-22-16', 'psa-22-18'].map(id => `${id}:${byId(id) ? 'ok' : 'MISSING'}`).join(' '));

console.log('\n== B. THREAD MAP INTEGRITY ==');
const merged = new Map<string, string>();
let dupes = 0;
for (const [name, m] of maps) {
  for (const k of Object.keys(m)) {
    if (merged.has(k)) { console.log(`DUP KEY across maps: ${k} (${name} + ${merged.get(k)})`); dupes++; }
    else merged.set(k, name);
  }
}
console.log(`total anchors: ${merged.size}, cross-map duplicates: ${dupes}`);
let badAnchor = 0, badRef = 0;
for (const [id, m] of maps) {
  for (const [k, v] of Object.entries(m)) {
    if (!byId(k)) { console.log(`ANCHOR NOT A REAL VERSE: ${k} (${id})`); badAnchor++; }
    if (!allResolve(v.fulfillmentRefs)) { console.log(`UNRESOLVABLE REFS: ${k} -> ${v.fulfillmentRefs}`); badRef++; }
  }
}
console.log(`anchor-not-found: ${badAnchor}, unresolvable-ref anchors: ${badRef}`);
const gdKeys = Object.keys(genesisProphecies).sort();
const tdKeys = Object.keys(threadDetails).sort();
console.log(`threadDetails keys == genesis map keys: ${gdKeys.length === tdKeys.length && gdKeys.every((k, i) => k === tdKeys[i])} (${gdKeys.length})`);
let badBTD = 0;
for (const k of Object.keys(bookThreadDetails)) if (!byId(k)) { console.log(`bookThreadDetails anchor not real verse: ${k}`); badBTD++; }
console.log(`bookThreadDetails anchors not found: ${badBTD} / ${Object.keys(bookThreadDetails).length}`);

console.log('\n== C. TIER ID<->REF CONSISTENCY ==');
let t2bad = 0;
for (const c of NT_CITATIONS) {
  const otOk = expandVerseRange(c.otRef).includes(c.otVerseId);
  const ntOk = expandVerseRange(c.ntRef).includes(c.ntVerseId);
  const realOk = byId(c.otVerseId) && byId(c.ntVerseId);
  // cit-luk-24-44 is a documented special case: its otRef is the descriptive
  // phrase "Genesis to Malachi (Law, Prophets, Psalms)", with psa-22-1 as the
  // representative anchor verse.
  const special = c.id === 'cit-luk-24-44';
  if (!special && (!otOk || !ntOk || !realOk)) { t2bad++; console.log(`T2 ${c.id}: otRef->otVerseId:${otOk} ntRef->ntVerseId:${ntOk} verses-real:${realOk} | ${c.otRef} -> ${c.otVerseId} | ${c.ntRef} -> ${c.ntVerseId}`); }
}
console.log(`tier2: ${NT_CITATIONS.length} entries, inconsistencies: ${t2bad}`);
let t3bad = 0;
for (const m of MESSIANIC_PROPHECIES) {
  const otOk = expandVerseRange(m.prophecyRef).includes(m.otVerseId);
  const refsOk = allResolve(m.fulfillmentRefs);
  if (!otOk || !refsOk || !byId(m.otVerseId)) { t3bad++; console.log(`T3 ${m.id}: prophecyRef->otVerseId:${otOk} fulfillments-resolve:${refsOk} anchor-real:${byId(m.otVerseId)} | ${m.prophecyRef} -> ${m.otVerseId}`); }
}
console.log(`tier3: ${MESSIANIC_PROPHECIES.length} entries, inconsistencies: ${t3bad}`);
let t4bad = 0;
for (const c of MASTER_CHAINS) {
  // Display anchors may be composite ("Ref A; Ref B") with book-less
  // continuation segments and en-dashes. The authoritative navigation target
  // is primaryAnchorVerseId, which must be a real verse anchored to a book the
  // anchor string actually names (or directly produced by expanding a segment).
  const segments = c.primaryAnchor.split(';').map(s => s.trim().replace(/–/g, '-'));
  const direct = segments.some(seg => expandVerseRange(seg).includes(c.primaryAnchorVerseId));
  const namedBooks = BOOK_REGISTRY.filter(b => c.primaryAnchor.includes(b.name)).map(b => b.slug);
  const anchorOk = byId(c.primaryAnchorVerseId) &&
    (direct || namedBooks.includes(slugOf(c.primaryAnchorVerseId)));
  const sBad = c.steps.filter(s => (s.verseId ? !(expandVerseRange(s.ref).includes(s.verseId) && byId(s.verseId)) : !byId(s.ref))).map(s => s.ref);
  if (!anchorOk || sBad.length) { t4bad++; console.log(`T4 ${c.id} "${c.name}": anchor-ok:${anchorOk} bad-steps: ${sBad.join(', ')}`); }
}
console.log(`tier4: ${MASTER_CHAINS.length} chains, inconsistencies: ${t4bad}`);
let blBad = 0;
for (const b of FUNDAMENTAL_BELIEFS) if (!(expandVerseRange(b.primaryAnchor).includes(b.primaryAnchorVerseId) && byId(b.primaryAnchorVerseId))) { blBad++; console.log(`BELIEF ${b.number}: ${b.primaryAnchor} -> ${b.primaryAnchorVerseId}`); }
for (const e of LAST_DAY_EVENTS) if (!(expandVerseRange(e.primaryAnchor).includes(e.primaryAnchorVerseId) && byId(e.primaryAnchorVerseId))) { blBad++; console.log(`LDE ${e.id}: ${e.primaryAnchor} -> ${e.primaryAnchorVerseId}`); }
console.log(`beliefs+LDE inconsistencies: ${blBad} (${FUNDAMENTAL_BELIEFS.length} + ${LAST_DAY_EVENTS.length} entries)`);

console.log('\n== D. CONNECTION SPOT-CHECKS (manual review) ==');
const show = (label: string, id: string) => console.log(`[${label}] ${id}: "${text(id).slice(0, 110)}"`);
const showThread = (id: string) => {
  const m = merged.has(id) ? maps.find(([n]) => n === merged.get(id))![1][id] : undefined;
  console.log(`THREAD ${id}:`);
  show('source', id);
  if (m) for (const r of m.fulfillmentRefs) console.log(`   -> ${r} : ${resolveRef(r).slice(0, 3).map(x => `"${text(x).slice(0, 90)}"`).join(' | ')}`);
  else console.log('   (no thread map entry)');
};
[
  'gen-3-15', 'gen-12-3', 'gen-22-18', 'num-21-8', 'deu-18-15',
  'psa-22-16', 'psa-22-18', 'psa-41-9', 'psa-34-20', 'psa-16-10',
  'isa-7-14', 'isa-9-6', 'isa-53-5', 'isa-53-7', 'isa-53-9', 'isa-61-1',
  'jer-31-31', 'dan-9-26', 'hos-11-1', 'jol-2-28', 'amo-9-11', 'jon-1-17',
  'mic-5-2', 'zec-9-9', 'zec-11-12', 'zec-12-10', 'mal-3-1', 'mal-4-5',
].forEach(showThread);

console.log('\n-- TIER 2 NT citations (ntRef <- otRef, type) --');
for (const c of NT_CITATIONS) console.log(`${c.ntRef} <- ${c.otRef} [${c.type}]`);

console.log('\n-- TIER 4 chains --');
for (const c of MASTER_CHAINS) console.log(`#${c.number} ${c.name} | anchor ${c.primaryAnchor} | ${c.steps.length} steps: ${c.steps.map(s => s.ref).join(' -> ')}`);
