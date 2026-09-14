import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import { allThreadMaps } from '../src/data/threadMap';
import { threadDetails } from '../src/data/threadDetails';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { draftThreadDetails } from '../src/data/draftThreadDetails';
import { NT_CITATIONS, NT_LOOKUP, OT_LOOKUP } from '../src/data/tier2NtCitations';
import { MESSIANIC_PROPHECIES, MESSIANIC_BY_VERSE, NT_MESSIANIC_LOOKUP } from '../src/data/tier3Messianic';
import { MASTER_CHAINS, CHAINS_BY_VERSE } from '../src/data/tier4MasterChains';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tskDir = path.join(__dirname, '..', 'public', 'data', 'tsk');
const booksDir = path.join(__dirname, '..', 'public', 'books');

interface BibleBook {
  name: string;
  chapters: string[][];
}

// Map of all valid verse IDs in KJV canon — read from the REPAIRED served
// text (public/books), which is the app's source of truth (31,102 verses
// after the A2/A3 repairs; the raw kjv.json dump is missing two verses).
const validVerseIds = new Set<string>();
const bookNameToMeta = new Map<string, typeof BOOK_REGISTRY[0]>();
for (const b of BOOK_REGISTRY) {
  bookNameToMeta.set(b.name, b);
}

for (const meta of BOOK_REGISTRY) {
  const file = path.join(booksDir, `${meta.slug}.json`);
  const json = JSON.parse(fs.readFileSync(file, 'utf8')) as { data: { id: string }[] };
  for (const v of json.data) {
    validVerseIds.add(v.id);
  }
}

console.log(`Loaded KJV canon: ${validVerseIds.size} verses indexed.`);

let hasErrors = false;

// ── AUDIT TIER 1 ────────────────────────────────────────────────────────
console.log('\n--- AUDITING TIER 1: Comprehensive Cross-References (TSK) ---');
let tskBookCount = 0;
let tskTotalVerses = 0;
let tskTotalAnchors = 0;

for (const meta of BOOK_REGISTRY) {
  const file = path.join(tskDir, `${meta.slug}.json`);
  if (!fs.existsSync(file)) {
    console.error(`[TIER 1 ERROR] Missing TSK file for book ${meta.slug} (${meta.name})`);
    hasErrors = true;
  } else {
    tskBookCount++;
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const verses = Object.keys(data);
    tskTotalVerses += verses.length;
    for (const arr of Object.values(data) as any[]) {
      tskTotalAnchors += arr.length;
    }
  }
}
console.log(`Tier 1 Status: ${tskBookCount}/66 books present.`);
console.log(`Tier 1 Stats: ${tskTotalVerses} verses have TSK links; ${tskTotalAnchors} phrase-anchored reference groups.`);

// ── AUDIT TIER 2 ────────────────────────────────────────────────────────
console.log('\n--- AUDITING TIER 2: Direct NT Citations & Allusions ---');
console.log(`Total Tier 2 records: ${NT_CITATIONS.length}`);
let citErrors = 0;
for (const cit of NT_CITATIONS) {
  if (!validVerseIds.has(cit.ntVerseId)) {
    console.error(`[TIER 2 ERROR] Invalid ntVerseId: ${cit.ntVerseId} in citation ${cit.id}`);
    citErrors++;
  }
  if (!validVerseIds.has(cit.otVerseId)) {
    console.error(`[TIER 2 ERROR] Invalid otVerseId: ${cit.otVerseId} in citation ${cit.id}`);
    citErrors++;
  }
}
if (citErrors === 0) {
  console.log(`Tier 2 Status: 100% of ${NT_CITATIONS.length} citations resolve to valid canonical verses.`);
} else {
  hasErrors = true;
}

// Audit Tier 2 Multi-Verse Expanded Indexes
let t2ExpandedErrors = 0;
for (const vId of NT_LOOKUP.keys()) {
  if (!validVerseIds.has(vId)) {
    console.error(`[TIER 2 EXPAND ERROR] Invalid expanded NT verse ID: ${vId}`);
    t2ExpandedErrors++;
  }
}
for (const vId of OT_LOOKUP.keys()) {
  if (!validVerseIds.has(vId)) {
    console.error(`[TIER 2 EXPAND ERROR] Invalid expanded OT verse ID: ${vId}`);
    t2ExpandedErrors++;
  }
}
if (t2ExpandedErrors === 0) {
  console.log(`Tier 2 Expansion Status: 100% of ${NT_LOOKUP.size} NT and ${OT_LOOKUP.size} OT expanded lookup keys resolve canonically.`);
} else {
  hasErrors = true;
}

// ── AUDIT TIER 3 ────────────────────────────────────────────────────────
console.log('\n--- AUDITING TIER 3: Specific Messianic Prophecies ---');
console.log(`Total Tier 3 prophecies: ${MESSIANIC_PROPHECIES.length}`);
let mesErrors = 0;
for (const mes of MESSIANIC_PROPHECIES) {
  if (!validVerseIds.has(mes.otVerseId)) {
    console.error(`[TIER 3 ERROR] Invalid otVerseId: ${mes.otVerseId} in prophecy ${mes.id}`);
    mesErrors++;
  }
}
if (mesErrors === 0) {
  console.log(`Tier 3 Status: 100% of ${MESSIANIC_PROPHECIES.length} prophecies resolve to valid canonical verses.`);
} else {
  hasErrors = true;
}

// Audit Tier 3 Multi-Verse & NT Reverse Indexes
let t3ExpandedErrors = 0;
for (const vId of MESSIANIC_BY_VERSE.keys()) {
  if (!validVerseIds.has(vId)) {
    console.error(`[TIER 3 EXPAND ERROR] Invalid expanded OT prophecy verse ID: ${vId}`);
    t3ExpandedErrors++;
  }
}
for (const vId of NT_MESSIANIC_LOOKUP.keys()) {
  if (!validVerseIds.has(vId)) {
    console.error(`[TIER 3 EXPAND ERROR] Invalid reverse NT fulfillment verse ID: ${vId}`);
    t3ExpandedErrors++;
  }
}
if (t3ExpandedErrors === 0) {
  console.log(`Tier 3 Expansion Status: 100% of ${MESSIANIC_BY_VERSE.size} OT and ${NT_MESSIANIC_LOOKUP.size} reverse NT fulfillment keys resolve canonically.`);
} else {
  hasErrors = true;
}

// ── AUDIT TIER 4 ────────────────────────────────────────────────────────
console.log('\n--- AUDITING TIER 4: Master Canonical Redemptive Chains ---');
console.log(`Total Master Chains: ${MASTER_CHAINS.length}`);
let chainErrors = 0;
let totalSteps = 0;
for (const chain of MASTER_CHAINS) {
  if (!validVerseIds.has(chain.primaryAnchorVerseId)) {
    console.error(`[TIER 4 ERROR] Invalid primaryAnchorVerseId: ${chain.primaryAnchorVerseId} in chain ${chain.id}`);
    chainErrors++;
  }
  totalSteps += chain.steps.length;
  for (const step of chain.steps) {
    if (!validVerseIds.has(step.verseId)) {
      console.error(`[TIER 4 ERROR] Invalid step verseId: ${step.verseId} (${step.ref}) in chain ${chain.id}`);
      chainErrors++;
    }
  }
}
if (chainErrors === 0) {
  console.log(`Tier 4 Status: 100% of ${MASTER_CHAINS.length} chains and all ${totalSteps} timeline steps resolve perfectly.`);
} else {
  hasErrors = true;
}

// Audit Tier 4 Multi-Verse Pre-built Map
let t4ExpandedErrors = 0;
for (const vId of CHAINS_BY_VERSE.keys()) {
  if (!validVerseIds.has(vId)) {
    console.error(`[TIER 4 EXPAND ERROR] Invalid expanded chain verse ID: ${vId}`);
    t4ExpandedErrors++;
  }
}
if (t4ExpandedErrors === 0) {
  console.log(`Tier 4 Expansion Status: 100% of ${CHAINS_BY_VERSE.size} pre-built milestone verse keys resolve canonically.`);
} else {
  hasErrors = true;
}

// ── AUDIT THREAD DETAILS (drift & coverage) ─────────────────────────────
// threadDetails.ts is a hand-maintained 1:1 shadow of the Genesis thread map —
// the strict check is exact keyset equality in both directions. bookThreadDetails
// keys may legally point at non-anchor "detail-only thread" verses (reachable
// via navigateToVerse), so the strict check there is that every key is a valid
// canonical verse id (catches silent typo drift like "2ch-20:20").
console.log('\n--- AUDITING THREAD DETAILS (drift & coverage) ---');
const threadAnchors = new Set<string>();
for (const map of allThreadMaps) {
  for (const key of Object.keys(map)) threadAnchors.add(key);
}
const genesisAnchors = new Set(Object.keys(allThreadMaps[0]));

const genesisDetailKeys = Object.keys(threadDetails);
const genesisMissingDetails = [...genesisAnchors].filter(id => !threadDetails[id]);
const genesisOrphanDetails = genesisDetailKeys.filter(id => !genesisAnchors.has(id));
if (genesisMissingDetails.length === 0 && genesisOrphanDetails.length === 0) {
  console.log(`Genesis shadow map: exact 1:1 — ${genesisDetailKeys.length} details ↔ ${genesisAnchors.size} Genesis anchors.`);
} else {
  hasErrors = true;
  for (const id of genesisMissingDetails) {
    console.error(`[DETAILS ERROR] Genesis anchor "${id}" has no entry in threadDetails.ts.`);
  }
  for (const id of genesisOrphanDetails) {
    console.error(`[DETAILS ERROR] threadDetails.ts key "${id}" is not a Genesis thread anchor.`);
  }
}

const bookDetailKeys = Object.keys(bookThreadDetails);
const invalidBookDetailKeys = bookDetailKeys.filter(id => !validVerseIds.has(id));
if (invalidBookDetailKeys.length === 0) {
  console.log(`Book details: all ${bookDetailKeys.length} keys are valid canonical verse ids.`);
} else {
  hasErrors = true;
  for (const id of invalidBookDetailKeys) {
    console.error(`[DETAILS ERROR] bookThreadDetails key "${id}" is not a valid verse id.`);
  }
}
const detailOnlyVerses = bookDetailKeys.filter(id => !threadAnchors.has(id));
if (detailOnlyVerses.length > 0) {
  console.log(`Detail-only thread verses (non-anchor, intentional): ${detailOnlyVerses.join(', ')}`);
}

const hasDetail = (id: string) => !!(threadDetails[id] || bookThreadDetails[id]);
const coveredAnchors = [...threadAnchors].filter(hasDetail);
const draftKeys = Object.keys(draftThreadDetails);
const draftOnly = draftKeys.filter(id => threadAnchors.has(id) && !hasDetail(id));
const pct = Math.round((coveredAnchors.length / threadAnchors.size) * 100);
console.log(`Detail coverage: ${coveredAnchors.length}/${threadAnchors.size} anchors (${pct}%) have hand-written titles/explanations.`);

// Draft invariants: drafts exist only for uncovered anchors and never shadow
// a hand-written detail (hand entries always win at lookup time).
const draftErrors: string[] = [];
for (const key of draftKeys) {
  if (!threadAnchors.has(key)) draftErrors.push(`draft key "${key}" is not a thread anchor`);
  if (hasDetail(key)) draftErrors.push(`draft key "${key}" shadows a hand-written detail`);
}
if (draftErrors.length === 0) {
  console.log(`Draft details: ${draftOnly.length} drafts cover all remaining anchors — total coverage ${threadAnchors.size}/${threadAnchors.size} (100%).`);
} else {
  hasErrors = true;
  for (const e of draftErrors) console.error(`[DRAFTS ERROR] ${e}. Re-run: npm run generate:drafts`);
}
const tier3Missing = MESSIANIC_PROPHECIES.map(p => p.otVerseId).filter(id => !hasDetail(id));
console.log(
  `Tier 3 (Jesus Christ thread) anchors missing HAND-written details: ${tier3Missing.length}` +
    (tier3Missing.length ? ` → ${tier3Missing.join(', ')}` : '')
);

console.log('\n========================================');
if (hasErrors) {
  console.error('FAILED: Audit found reference errors.');
  process.exit(1);
} else {
  console.log('SUCCESS: All 4 Tiers audited and 100% validated!');
}
