/* Scan Exodus prose fields for clarity-gate violations (CP-03 proof helper). */
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import type { ThreadDetail } from '../src/data/threadDetails';
import { checkProse, checkProseFields, ProseViolation } from './checkReadability';

type Failures = Record<string, Record<string, ProseViolation[]>>;

function scanDetail(id: string, d: ThreadDetail): Record<string, ProseViolation[]> {
  const fields: Record<string, string> = {
    title: d.title,
    principle: d.principle,
  };
  if (d.who) fields['who'] = d.who;
  if (d.whoByRef) {
    for (const [ref, prose] of Object.entries(d.whoByRef)) {
      fields[`whoByRef[${ref}]`] = prose;
    }
  }
  if (d.cumulativePrinciples) {
    d.cumulativePrinciples.forEach((p, i) => (fields[`cumulativePrinciples[${i}]`] = p));
  }
  if (d.sameTestamentLinks) {
    d.sameTestamentLinks.forEach((l, i) => (fields[`sameTestamentLinks[${i}].connection`] = l.connection));
  }
  if (d.terms) {
    d.terms.forEach((t, i) => {
      if (t.gloss) fields[`terms[${i}].gloss`] = t.gloss;
      if (t.note) fields[`terms[${i}].note`] = t.note;
      if ((t as any).exposition) fields[`terms[${i}].exposition`] = (t as any).exposition as string;
    });
  }
  return checkProseFields(fields);
}

function main() {
  const ids = Object.keys(bookThreadDetails).filter(id => id.startsWith('exo-')).sort();
  const failures: Failures = {};
  for (const id of ids) {
    const d = bookThreadDetails[id] as ThreadDetail;
    const f = scanDetail(id, d);
    if (Object.keys(f).length > 0) failures[id] = f;
  }
  const summary = {
    exodusEntryCount: ids.length,
    failingExodusEntries: Object.keys(failures).length,
  };
  console.log('=== EXODUS PROSE CLARITY-GATE SCAN ===');
  console.log(JSON.stringify(summary, null, 2));
  console.log('\n--- Failing Exodus Entries (by field) ---');
  console.log(JSON.stringify(failures, null, 2));
}

main();

