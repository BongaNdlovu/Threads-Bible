/* Phase B · CP-01 Investigate
 * - Per-book entry counts (threadDetails + bookThreadDetails)
 * - Golden-list verify (presence + clarity gate on principles)
 * - Field occurrence counts (whoByRef, cumulativePrinciples, terms)
 * - Baseline gate/audit pointers (run separately)
 */
import { threadDetails } from '../src/data/threadDetails';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { checkProse } from './checkReadability';

type Detail = (typeof threadDetails)[string];

function groupByBook(ids: string[]): Record<string, number> {
  const out: Record<string, number> = {};
  for (const id of ids) {
    const book = id.split('-')[0] || 'unknown';
    out[book] = (out[book] ?? 0) + 1;
  }
  return Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
}

function countFields(map: Record<string, Detail>) {
  let withWhoByRef = 0;
  let withCumPrin = 0;
  let withTerms = 0;
  for (const d of Object.values(map)) {
    if (d.whoByRef && Object.keys(d.whoByRef).length > 0) withWhoByRef++;
    if (d.cumulativePrinciples && d.cumulativePrinciples.length > 0) withCumPrin++;
    if (d.terms && d.terms.length > 0) withTerms++;
  }
  return { withWhoByRef, withCumulativePrinciples: withCumPrin, withTerms };
}

function verifyGolden(keys: string[]) {
  const results = [];
  for (const k of keys) {
    const d = threadDetails[k] ?? bookThreadDetails[k];
    const exists = !!d;
    const violations = d ? checkProse(d.principle) : [];
    results.push({ key: k, exists, clarityGate: violations.length === 0, violations });
  }
  return results;
}

function main() {
  const tdIds = Object.keys(threadDetails);
  const bdIds = Object.keys(bookThreadDetails);

  console.log('=== CP-01 · Per-Book Entry Counts (threadDetails) ===');
  console.log(JSON.stringify(groupByBook(tdIds), null, 2));
  console.log('\n=== CP-01 · Per-Book Entry Counts (bookThreadDetails) ===');
  console.log(JSON.stringify(groupByBook(bdIds), null, 2));

  console.log('\n=== CP-01 · Field Occurrence Counts (threadDetails) ===');
  console.log(JSON.stringify(countFields(threadDetails as Record<string, Detail>), null, 2));

  console.log('\n=== CP-01 · Golden-List Verify + Clarity Gate ===');
  const golden = ['zec-9-9', 'gen-2-2', 'gen-2-3', 'exo-12-46', 'isa-7-14'];
  const results = verifyGolden(golden);
  console.log(JSON.stringify(results, null, 2));

  console.log('\nHINT: Also run —');
  console.log('  npm run lint');
  console.log('  npm test');
  console.log('  npx tsx scripts/auditOtFirstOrder.ts');
}

main();

