/* Generic per-book prose clarity-gate scanner (plan §1.2 helper).
 *
 * Usage:  npx tsx scripts/scanBookProse.ts <bookPrefix>
 * Example: npx tsx scripts/scanBookProse.ts lev
 *
 * Scans every in-scope prose field of that book's thread details (title,
 * principle, who, whoByRef, cumulativePrinciples, sameTestamentLinks,
 * terms gloss/note/exposition) plus pillar-chain steps that carry a verse id
 * from that book. Prints a JSON summary and exits 1 if anything fails.
 */
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { threadDetails, threadChains } from '../src/data/threadDetails';
import type { ThreadDetail } from '../src/data/threadDetails';
import { checkProseFields, ProseViolation } from './checkReadability';

type Failures = Record<string, Record<string, ProseViolation[]>>;

function detailFields(d: ThreadDetail): Record<string, string> {
  const fields: Record<string, string> = {};
  if (d.title) fields['title'] = d.title;
  if (d.principle) fields['principle'] = d.principle;
  if (d.who) fields['who'] = d.who;
  if (d.whoByRef) {
    for (const [ref, prose] of Object.entries(d.whoByRef)) fields[`whoByRef[${ref}]`] = prose;
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
      if (t.exposition) fields[`terms[${i}].exposition`] = t.exposition;
    });
  }
  return fields;
}

function main() {
  const book = (process.argv[2] ?? '').trim().toLowerCase();
  if (!book) {
    console.error('usage: npx tsx scripts/scanBookProse.ts <bookPrefix>  (e.g. lev)');
    process.exit(2);
  }
  const prefix = `${book}-`;
  const all: Record<string, ThreadDetail> = { ...bookThreadDetails, ...threadDetails };
  const ids = Object.keys(all).filter(id => id.startsWith(prefix)).sort();

  const failures: Failures = {};
  for (const id of ids) {
    const f = checkProseFields(detailFields(all[id]!));
    if (Object.keys(f).length > 0) failures[id] = f;
  }

  const chainFailures: Failures = {};
  for (const chain of threadChains) {
    const chainFields: Record<string, string> = {};
    chain.steps.forEach((s, si) => {
      if (!s.verseId || !s.verseId.startsWith(prefix)) return;
      chainFields[`steps[${si}].title (${s.ref})`] = s.title;
      chainFields[`steps[${si}].connection (${s.ref})`] = s.connection;
    });
    if (Object.keys(chainFields).length === 0) continue;
    const f = checkProseFields(chainFields);
    if (Object.keys(f).length > 0) chainFailures[chain.id] = f;
  }

  const summary = {
    book,
    entryCount: ids.length,
    failingEntries: Object.keys(failures).length,
    failingChains: Object.keys(chainFailures).length,
  };

  console.log(`=== ${book.toUpperCase()} PROSE CLARITY-GATE SCAN ===`);
  console.log(JSON.stringify(summary, null, 2));
  console.log(`\n--- Failing ${book.toUpperCase()} Entries (by field) ---`);
  console.log(JSON.stringify(failures, null, 2));
  console.log(`\n--- Failing Pillar Chains carrying ${book} steps (by field) ---`);
  console.log(JSON.stringify(chainFailures, null, 2));

  process.exit(summary.failingEntries + summary.failingChains > 0 ? 1 : 0);
}

main();