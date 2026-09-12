import { MASTER_PILLAR_CHAINS, getThreadDetail, getChainById } from '../src/data/threadDetails';
import { FUNDAMENTAL_BELIEFS, BELIEF_CATEGORIES, getBeliefByNumber, getBeliefsByCategory } from '../src/data/fundamentalBeliefs';
import { LAST_DAY_EVENTS, LDE_ERAS, getEventByPhase, getEventsByEra } from '../src/data/lastDayEvents';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../src/data/bookRegistry';
import { threadFor, resolveRefs } from '../src/data/library';
import fs from 'fs';
import path from 'path';

console.log('=== RUNNING DEEP VERIFICATION SUITE ===\n');

let passCount = 0;
let failCount = 0;

function assert(cond: boolean, msg: string) {
  if (cond) {
    passCount++;
    console.log(`  ✓ PASS: ${msg}`);
  } else {
    failCount++;
    console.error(`  ✗ FAIL: ${msg}`);
  }
}

// 1. MASTER PILLARS
console.log('--- 1. Historic Adventist Master Pillars ---');
assert(MASTER_PILLAR_CHAINS.length === 8, 'Exactly 8 Master Pillars registered');
const pillarNumbers = MASTER_PILLAR_CHAINS.map(p => p.number);
assert(JSON.stringify(pillarNumbers) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8]), 'Pillars are numbered 1 through 8 sequentially');

let totalPillarSteps = 0;
MASTER_PILLAR_CHAINS.forEach(p => {
  totalPillarSteps += p.chain.steps.length;
  assert(p.chain.steps.length >= 7, `Pillar ${p.number} (${p.name}) has ${p.chain.steps.length} steps (>= 7)`);
  assert(!!p.primaryAnchor && !!p.primaryAnchorVerseId, `Pillar ${p.number} has valid primary anchor (${p.primaryAnchorVerseId})`);
});
console.log(`  Total scriptural links across 8 pillars: ${totalPillarSteps}`);

// Check Isaiah 8:20 safeguard detail
const isaiahSafeguard = getThreadDetail('isa-8-20');
assert(isaiahSafeguard !== null, 'Isaiah 8:20 "No Strange Doctrines" safeguard detail is present in getThreadDetail');

// 2. 28 FUNDAMENTAL BELIEFS
console.log('\n--- 2. 28 Fundamental Beliefs ---');
assert(FUNDAMENTAL_BELIEFS.length === 28, 'Exactly 28 Fundamental Beliefs registered');
assert(BELIEF_CATEGORIES.length === 6, 'Exactly 6 categories registered');

const beliefNumbers = FUNDAMENTAL_BELIEFS.map(b => b.number);
assert(JSON.stringify(beliefNumbers) === JSON.stringify(Array.from({ length: 28 }, (_, i) => i + 1)), 'Beliefs numbered 1 to 28 sequentially');

BELIEF_CATEGORIES.forEach(cat => {
  const inCat = getBeliefsByCategory(cat);
  assert(inCat.length > 0, `Category "${cat}" contains ${inCat.length} beliefs`);
});

let totalBeliefAnchors = 0;
FUNDAMENTAL_BELIEFS.forEach(b => {
  totalBeliefAnchors += b.scriptureAnchors.length;
  assert(b.scriptureAnchors.length >= 2, `Belief ${b.number} (${b.title}) has ${b.scriptureAnchors.length} scripture proof anchors`);
  assert(b.keyConcepts.length >= 2, `Belief ${b.number} has ${b.keyConcepts.length} key concepts`);
});
console.log(`  Total scripture anchor proof points across 28 beliefs: ${totalBeliefAnchors}`);

// 3. GREAT CONTROVERSY & LAST DAY EVENTS
console.log('\n--- 3. Great Controversy & Last Day Events (GC & LDE) ---');
assert(LAST_DAY_EVENTS.length === 19, 'Exactly 19 LDE phases registered');
assert(LDE_ERAS.length === 6, 'Exactly 6 LDE Eras registered');

const ldePhases = LAST_DAY_EVENTS.map(e => e.phase);
assert(JSON.stringify(ldePhases) === JSON.stringify(Array.from({ length: 19 }, (_, i) => i + 1)), 'LDE phases numbered 1 to 19 sequentially');

LDE_ERAS.forEach(era => {
  const inEra = getEventsByEra(era);
  assert(inEra.length > 0, `Era "${era}" contains ${inEra.length} phases`);
});

let totalLdeSteps = 0;
LAST_DAY_EVENTS.forEach(e => {
  totalLdeSteps += e.scriptureSequence.length;
  assert(e.scriptureSequence.length >= 3, `Phase ${e.phase} (${e.title}) has ${e.scriptureSequence.length} scripture sequence steps`);
  assert(e.biblicalSummary.length > 50, `Phase ${e.phase} has substantive biblical summary`);
  assert(e.theologicalSignificance.length > 30, `Phase ${e.phase} has theological significance`);
  assert(e.historicistFulfillment.length > 20, `Phase ${e.phase} has historicist fulfillment explanation`);
});
console.log(`  Total chronological scripture sequence steps: ${totalLdeSteps}`);

// 4. CANONICAL VERSE ID VERIFICATION (Against actual public/books/<slug>.json payloads)
console.log('\n--- 4. Verse ID Existence in JSON Scripture Files ---');

// Cache book files
const bookDataCache = new Map<string, Set<string>>();
function getBookVerseIds(slug: string): Set<string> {
  if (bookDataCache.has(slug)) return bookDataCache.get(slug)!;
  const filePath = path.resolve('public', 'books', `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`Book JSON missing: ${filePath}`);
    return new Set();
  }
  const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const set = new Set<string>(json.data.map((v: any) => v.id));
  bookDataCache.set(slug, set);
  return set;
}

// Check all primary anchor verse IDs
const allPrimaryAnchorIds = [
  ...MASTER_PILLAR_CHAINS.map(p => ({ label: `Pillar ${p.number}`, id: p.primaryAnchorVerseId })),
  ...FUNDAMENTAL_BELIEFS.map(b => ({ label: `Belief ${b.number}`, id: b.primaryAnchorVerseId })),
  ...LAST_DAY_EVENTS.map(e => ({ label: `LDE Phase ${e.phase}`, id: e.primaryAnchorVerseId })),
];

let validAnchorCount = 0;
allPrimaryAnchorIds.forEach(({ label, id }) => {
  const m = id.match(/^([a-z0-9]+)-(\d+)-(\d+)$/);
  if (!m) {
    assert(false, `${label}: invalid ID format ${id}`);
    return;
  }
  const slug = m[1];
  const verseIds = getBookVerseIds(slug);
  const exists = verseIds.has(id);
  assert(exists, `${label}: anchor ${id} exists in public/books/${slug}.json`);
  if (exists) validAnchorCount++;
});
console.log(`  Total verified primary anchor verses in canonical JSON: ${validAnchorCount} / ${allPrimaryAnchorIds.length}`);

console.log('\n========================================');
console.log(`DEEP VERIFICATION COMPLETED: ${passCount} Passed, ${failCount} Failed.`);
if (failCount > 0) {
  process.exit(1);
} else {
  console.log('ALL VERIFICATION CHECKS PASSED PERFECTLY!\n');
}
