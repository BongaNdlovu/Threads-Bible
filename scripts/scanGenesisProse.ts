/* Scan Genesis prose fields and pillar chains for clarity-gate violations.
 * Prints a JSON report keyed by entry id / chain step, listing failing fields.
 */
import { threadDetails, threadChains, ThreadDetail, ThreadChain } from '../src/data/threadDetails';
import { checkProse, checkProseFields, ProseViolation } from './checkReadability';

type Failures = Record<string, Record<string, ProseViolation[]>>;

function scanDetail(id: string, d: ThreadDetail): Record<string, ProseViolation[]> {
  const fields: Record<string, string> = {
    title: d.title,
    principle: d.principle,
  };

  // Who prose
  if (d.who) fields['who'] = d.who;
  if (d.whoByRef) {
    for (const [ref, prose] of Object.entries(d.whoByRef)) {
      fields[`whoByRef[${ref}]`] = prose;
    }
  }

  // Cumulative principles
  if (d.cumulativePrinciples && d.cumulativePrinciples.length > 0) {
    d.cumulativePrinciples.forEach((p, i) => (fields[`cumulativePrinciples[${i}]`] = p));
  }

  // Same-testament links
  if (d.sameTestamentLinks) {
    d.sameTestamentLinks.forEach((l, i) => (fields[`sameTestamentLinks[${i}].connection`] = l.connection));
  }

  // Terms: gloss, note, exposition
  if (d.terms) {
    d.terms.forEach((t, i) => {
      if (t.gloss) fields[`terms[${i}].gloss`] = t.gloss;
      if (t.note) fields[`terms[${i}].note`] = t.note;
      // @ts-expect-error exposition not in base type everywhere but present in data
      if ((t as any).exposition) fields[`terms[${i}].exposition`] = (t as any).exposition;
    });
  }

  return checkProseFields(fields);
}

function main() {
  const genesisIds = Object.keys(threadDetails).filter(id => id.startsWith('gen-')).sort();
  const failures: Failures = {};

  for (const id of genesisIds) {
    const d = threadDetails[id]!;
    const f = scanDetail(id, d);
    if (Object.keys(f).length > 0) failures[id] = f;
  }

  // Scan pillar chains (all, since they live in threadDetails.ts)
  const chainFailures: Record<string, Record<string, ProseViolation[]>> = {};
  threadChains.forEach((chain, ci) => {
    const chainFields: Record<string, string> = { name: chain.name };
    chain.steps.forEach((s, si) => {
      if (s.title) chainFields[`steps[${si}].title (${s.ref})`] = s.title;
      if (s.connection) chainFields[`steps[${si}].connection (${s.ref})`] = s.connection;
    });
    const f = checkProseFields(chainFields);
    if (Object.keys(f).length > 0) chainFailures[chain.id] = f;
  });

  const summary = {
    genesisEntryCount: genesisIds.length,
    failingGenesisEntries: Object.keys(failures).length,
    failingChains: Object.keys(chainFailures).length,
  };

  console.log('=== GENESIS PROSE CLARITY-GATE SCAN ===');
  console.log(JSON.stringify(summary, null, 2));
  console.log('\n--- Failing Genesis Entries (by field) ---');
  console.log(JSON.stringify(failures, null, 2));
  console.log('\n--- Failing Pillar Chains (by field) ---');
  console.log(JSON.stringify(chainFailures, null, 2));
}

main();

