import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
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

const bible: BibleBook[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'kjv.json'), 'utf8').trim().replace(/^\uFEFF/, '')
);

// Map of all valid verse IDs in KJV canon
const validVerseIds = new Set<string>();
const bookNameToMeta = new Map<string, typeof BOOK_REGISTRY[0]>();
for (const b of BOOK_REGISTRY) {
  bookNameToMeta.set(b.name, b);
}

for (const book of bible) {
  const meta = bookNameToMeta.get(book.name);
  if (!meta) continue;
  book.chapters.forEach((chapter, chIdx) => {
    chapter.forEach((_, vIdx) => {
      validVerseIds.add(`${meta.slug}-${chIdx + 1}-${vIdx + 1}`);
    });
  });
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

console.log('\n========================================');
if (hasErrors) {
  console.error('FAILED: Audit found reference errors.');
  process.exit(1);
} else {
  console.log('SUCCESS: All 4 Tiers audited and 100% validated!');
}
