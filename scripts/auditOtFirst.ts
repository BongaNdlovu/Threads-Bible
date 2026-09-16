/**
 * Phase 1B audit: OT anchors whose first fulfillmentRef is NT.
 * Multiline-aware: reads assembled thread maps, not regex-on-source.
 * Does not invent links. Prints counts + samples.
 *
 * Run: npx tsx scripts/auditOtFirst.ts
 */
import { allThreadMaps } from '../src/data/threadMap';
import { isNewTestament, isOldTestament } from '../src/data/connectionInterrogation';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';

const OT_SLUGS = new Set(BOOK_REGISTRY.slice(0, 39).map(b => b.slug));

function isOtAnchorId(id: string): boolean {
  const slug = id.split('-')[0] ?? '';
  return OT_SLUGS.has(slug);
}

type Row = { id: string; first: string; refs: string[]; hasLaterOt: boolean };

const ntFirst: Row[] = [];
const mixedNtFirst: Row[] = [];
const otFirst: string[] = [];
let otAnchorCount = 0;

for (const map of allThreadMaps) {
  for (const [id, entry] of Object.entries(map)) {
    if (!isOtAnchorId(id)) continue;
    otAnchorCount++;
    const refs = entry.fulfillmentRefs;
    const first = refs[0] ?? '';
    if (isOldTestament(first) && !isNewTestament(first)) {
      otFirst.push(id);
      continue;
    }
    if (!isNewTestament(first)) continue;
    const hasLaterOt = refs.slice(1).some(r => isOldTestament(r) && !isNewTestament(r));
    const row = { id, first, refs, hasLaterOt };
    ntFirst.push(row);
    if (hasLaterOt) mixedNtFirst.push(row);
  }
}

const ntOnly = ntFirst.filter(r => !r.hasLaterOt);

console.log('=== Phase 1B OT-first audit ===');
console.log(`OT anchors: ${otAnchorCount}`);
console.log(`OT anchors whose FIRST fulfillmentRef is OT: ${otFirst.length}`);
console.log(`OT anchors whose FIRST fulfillmentRef is NT: ${ntFirst.length}`);
console.log(`  of which mixed (later OT exists in the list): ${mixedNtFirst.length}`);
console.log(`  of which NT-only (no OT ref in list): ${ntOnly.length}`);
console.log(`(NT anchors skipped: this audit is OT-anchor only)`);
console.log('');
console.log('Sabbath / golden keys:');
for (const id of ['gen-2-2', 'gen-2-3', 'exo-20-8', 'exo-20-11', 'exo-12-46', 'zec-9-9', 'gen-1-1']) {
  const entry = allThreadMaps.map(m => m[id]).find(Boolean);
  console.log(`  ${id}: ${entry ? JSON.stringify(entry.fulfillmentRefs) : 'MISSING'}`);
}
console.log('');
console.log(`Sample NT-first OT anchors (first 25):`);
for (const row of ntFirst.slice(0, 25)) {
  console.log(`  ${row.id} → first="${row.first}" laterOt=${row.hasLaterOt} refs=${JSON.stringify(row.refs)}`);
}
console.log('');
console.log(`Mixed NT-first with later OT present (all ${mixedNtFirst.length}):`);
for (const row of mixedNtFirst) {
  console.log(`  ${row.id} → ${JSON.stringify(row.refs)}`);
}

console.log('');
console.log('Remaining NT-first OT anchors are NT-only exceptions (see EXCEPTIONS.md).');
console.log('Mixed NT-first with later OT present must be 0 after the broader OT-first pass.');
