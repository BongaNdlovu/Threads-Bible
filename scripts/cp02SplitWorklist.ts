/* Split one book's worklist into N chunk worklists for parallel writers.
 *
 * Usage: npx tsx scripts/cp02SplitWorklist.ts <slug> <parts> [--out-prefix docs/_work]
 *
 * Why this exists: Isaiah is 397 in-scope strings across 111 entries, which is too much for
 * one writer to do at the depth the calibration books were held to. A chunk must still be a
 * self-consistent unit, so chain strings are assigned by the BOOK VERSE they carry — a chain
 * belongs to whichever chunk owns that verse — rather than by the chain's own id, which is
 * shared across the whole chain and would otherwise let one chunk silently drop every chain
 * string (as the first attempt did: 125 of them).
 *
 * The split is deterministic and canonical: entries in chapter/verse order, divided by count.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const argv = process.argv.slice(2);
const slug = argv[0];
const parts = Number(argv[1] ?? '1');
const outPrefix = argv.includes('--out-prefix') ? argv[argv.indexOf('--out-prefix') + 1] : 'docs/_work';
if (!slug || !Number.isInteger(parts) || parts < 1) {
  console.error('usage: npx tsx scripts/cp02SplitWorklist.ts <slug> <parts> [--out-prefix dir]');
  process.exit(2);
}

interface Field { entryId: string; field: string; text: string; gate?: string }
interface ChainField extends Field { context?: { verseId?: string | null } }
interface Worklist {
  book: string;
  bookName?: string;
  counts?: Record<string, number>;
  entryIds?: string[];
  fields?: Field[];
  chains?: ChainField[];
}

const wl: Worklist = JSON.parse(readFileSync(`${outPrefix}/${slug}.json`, 'utf8'));
const fields = wl.fields ?? [];
const chains = wl.chains ?? [];
// --fields-only: exclude chain strings. Chain prose lives in the 36 shared pillar chains,
// whose strings appear in EVERY book that has a verse on that chain. Editing a chain string
// while sweeping one book therefore rewrites other books too — which is exactly the stray
// cross-book edit the applier's scope guard exists to prevent. Chains are swept once, in
// their own pass, so each chain string has exactly one writer and one owner.
const fieldsOnly = argv.includes('--fields-only');

/** Canonical order for verse ids like isa-40-6 (any slug may contain digits). */
const verseKey = (id: string): [number, number, string] => {
  const m = /^([a-z0-9]+)-(\d+)-(\d+)$/.exec(id);
  return m ? [Number(m[2]), Number(m[3]), id] : [0, 0, id];
};

const entryIds = [...new Set(fields.map(f => f.entryId))].sort((a, b) => {
  const [ac, av] = verseKey(a);
  const [bc, bv] = verseKey(b);
  return ac - bc || av - bv || a.localeCompare(b);
});

if (entryIds.length === 0) {
  console.error(`no fields found for ${slug} in ${outPrefix}/${slug}.json`);
  process.exit(1);
}

const per = Math.ceil(entryIds.length / parts);
const chunks: Array<{ ids: string[]; fields: Field[]; chains: ChainField[] }> = [];
for (let i = 0; i < parts; i++) {
  const ids = entryIds.slice(i * per, (i + 1) * per);
  if (ids.length === 0) continue;
  const set = new Set(ids);
  // A chain string belongs to the chunk that owns the verse it carries.
  const own = (c: ChainField) => {
    if (fieldsOnly) return false;
    const v = c.context?.verseId;
    return v ? set.has(String(v)) : false;
  };
  chunks.push({
    ids,
    fields: fields.filter(f => set.has(f.entryId)),
    chains: fieldsOnly ? [] : chains.filter(own),
  });
}

// Anything unassigned is a defect in the split, not something to hide.
const assignedChains = new Set(chunks.flatMap(c => c.chains.map(x => `${x.entryId}|${x.field}`)));
const orphans = fieldsOnly ? [] : chains.filter(c => !assignedChains.has(`${c.entryId}|${c.field}`));
const assignedFields = new Set(chunks.flatMap(c => c.fields.map(x => `${x.entryId}|${x.field}`)));
const orphanFields = fields.filter(f => !assignedFields.has(`${f.entryId}|${f.field}`));

console.log(`${slug}: ${entryIds.length} entries · ${fields.length} field strings · ${chains.length} chain strings → ${chunks.length} chunks`);
chunks.forEach((c, i) => {
  const fails = [...c.fields, ...c.chains].filter(x => x.gate === 'FAIL').length;
  console.log(
    `  ${slug}_p${i + 1}: ${c.ids.length} entries · ${c.fields.length} field + ${c.chains.length} chain = ${c.fields.length + c.chains.length} strings · ${fails} gate failures · ${c.ids[0]}..${c.ids[c.ids.length - 1]}`
  );
});
console.log(`  orphans: ${orphanFields.length} field, ${orphans.length} chain`);
if (orphanFields.length) console.log(`    field orphans: ${orphanFields.slice(0, 5).map(f => `${f.entryId}|${f.field}`).join(', ')}`);
if (orphans.length) console.log(`    chain orphans: ${orphans.slice(0, 5).map(f => `${f.entryId}|${f.field}`).join(', ')}`);

chunks.forEach((c, i) => {
  const out = {
    book: wl.book,
    bookName: wl.bookName,
    part: i + 1,
    parts: chunks.length,
    counts: {
      entries: c.ids.length,
      entryStrings: c.fields.length,
      chainStrings: c.chains.length,
      gateFails: [...c.fields, ...c.chains].filter(x => x.gate === 'FAIL').length,
    },
    entryIds: c.ids,
    fields: c.fields,
    chains: c.chains,
  };
  const path = `${outPrefix}/${slug}_p${i + 1}.json`;
  writeFileSync(path, JSON.stringify(out, null, 2));
  console.log(`wrote ${path}`);
});
