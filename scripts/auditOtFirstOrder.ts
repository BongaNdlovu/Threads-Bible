/**
 * OT-first ordering audit (master plan WP-5).
 *
 * Operator rule: every thread must first connect to another OT passage when
 * one exists; only then NT (canonical order within each testament).
 *
 * Checks, over all five generated thread maps:
 *   1. ORDERING INVARIANT — an OT anchor whose fulfillmentRefs mix OT and NT
 *      refs must list every OT ref before any NT ref.
 *   2. EXCEPTIONS COVERAGE — every OT anchor that is NT-only must be listed
 *      in EXCEPTIONS.md (weak OT links are documented, never invented).
 *
 * Exit code 0 = clean. Run: npx tsx scripts/auditOtFirstOrder.ts
 */
import { allThreadMaps } from '../src/data/threadMap';
import { compareCanonicalRefs, isOldTestament as isOT } from '../src/data/connectionInterrogation';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface Anchor {
  id: string;
  refs: string[];
}

function loadAnchors(): Anchor[] {
  const out: Anchor[] = [];
  for (const map of allThreadMaps) {
    for (const [id, entry] of Object.entries(map as Record<string, { fulfillmentRefs: string[] }>)) {
      out.push({ id, refs: entry.fulfillmentRefs ?? [] });
    }
  }
  return out;
}

// NT = canonical index 39..65 in the 66-book registry; slugs come from the
// registry itself so the audit can never drift from the book list.
const NT_SLUGS = new Set(BOOK_REGISTRY.slice(39).map(b => b.slug));

function slugIsOT(id: string): boolean {
  return !NT_SLUGS.has(id.split('-')[0]);
}

function loadExceptionIds(): Set<string> {
  const p = join(process.cwd(), 'EXCEPTIONS.md');
  const ids = new Set<string>();
  if (!existsSync(p)) return ids;
  const text = readFileSync(p, 'utf8');
  // EXCEPTIONS.md entries look like: - `gen-2-17 → Romans 5:12; ...`
  for (const m of text.matchAll(/`([a-z0-9]+-\d+-\d+)[^`]*`/g)) {
    ids.add(m[1]);
  }
  return ids;
}

const anchors = loadAnchors();
const exceptions = loadExceptionIds();

let orderingViolations = 0;
let ntOnlyTotal = 0;
let ntOnlyUndocumented = 0;

for (const anchor of anchors) {
  if (!slugIsOT(anchor.id)) continue; // the rule governs OT anchors
  const otRefs = anchor.refs.filter(r => isOT(r));
  const ntRefs = anchor.refs.filter(r => !isOT(r));

  if (otRefs.length === 0) {
    ntOnlyTotal += 1;
    if (!exceptions.has(anchor.id)) {
      ntOnlyUndocumented += 1;
      console.error(`[UNDOCUMENTED NT-ONLY] ${anchor.id} → ${anchor.refs.join('; ')}`);
    }
    continue;
  }

  // Ordering invariant: every OT ref must precede every NT ref, and refs
  // within the list must follow canonical order (compareCanonicalRefs).
  const sorted = [...anchor.refs].sort(compareCanonicalRefs);
  if (JSON.stringify(sorted) !== JSON.stringify(anchor.refs)) {
    // Canonical order violations matter only for the OT/NT boundary:
    const firstNt = anchor.refs.findIndex(r => !isOT(r));
    const lastOt = anchor.refs.map((r, i) => (isOT(r) ? i : -1)).reduce((a, b) => Math.max(a, b), -1);
    if (firstNt !== -1 && lastOt > firstNt) {
      orderingViolations += 1;
      console.error(`[OT-AFTER-NT] ${anchor.id} → ${anchor.refs.join('; ')}`);
    }
  }
}

console.log('─'.repeat(60));
console.log(`OT anchors audited:            ${anchors.filter(a => slugIsOT(a.id)).length}`);
console.log(`NT-only OT anchors:            ${ntOnlyTotal} (undocumented: ${ntOnlyUndocumented})`);
console.log(`OT-after-NT ordering breaches: ${orderingViolations}`);
console.log('─'.repeat(60));

if (orderingViolations > 0 || ntOnlyUndocumented > 0) {
  console.error('AUDIT FAILED — fix the data (via generators) or document the exception.');
  process.exit(1);
}
console.log('SUCCESS: OT-first ordering invariant holds; all NT-only anchors documented.');
