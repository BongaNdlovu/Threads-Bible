import fs from 'node:fs';
import path from 'node:path';

// For an ALREADY-APPLIED book, emit a corrections rewrites-file containing exactly the drafts whose
// delivered text differs from what is in the tree — i.e. entries a later draft revision changed.
// BEFORE is taken from a fresh extraction of the current tree, AFTER from the delivered draft.
// Everything else in the extraction goes to verifyOnly so the applier's accounting closes.
const dir = import.meta.dirname;
const slug = process.argv[2];
const worklistPath = process.argv[3];
const outPath = process.argv[4];

const rwFiles = fs.readdirSync(dir).filter(f => new RegExp(`^${slug}(_p\\d+)?_rewrites\\.json$`).test(f)).sort();
if (!rwFiles.length) throw new Error('no rewrite file for ' + slug);

const tree = JSON.parse(fs.readFileSync(worklistPath, 'utf8'));
const fields = tree.fields ?? [];
const chains = tree.chains ?? [];
// Chain strings are shared across books and are deferred to the Stage A.5 chain pass (§1.12), so a
// per-book apply never wrote them; they must not appear as corrections here.
const textOf = new Map<string, string>();
for (const f of fields) textOf.set(`${f.entryId}|${f.field}`, f.text);

const drafts: Array<{ entryId: string; field: string; after: string; reason: string }> = [];
for (const rf of rwFiles) {
  const now = JSON.parse(fs.readFileSync(path.join(dir, rf), 'utf8'));
  for (const d of now.drafts ?? []) {
    const key = `${d.entryId}|${d.field}`;
    const treeText = textOf.get(key);
    if (treeText === undefined) { console.log(`MISSING IN TREE ${key}`); continue; }
    if (treeText === d.after) continue;
    drafts.push({
      entryId: d.entryId,
      field: d.field,
      after: d.after,
      reason: 'REVISION: bring the tree up to the delivered draft. Either the app structural label was restored (LABEL_FIXITY), or the writer revised this string after the first apply.',
    });
  }
}

const draftKeys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
const verifyOnly = [...fields, ...chains]
  .filter(f => !draftKeys.has(`${f.entryId}|${f.field}`))
  .map(f => ({ entryId: f.entryId, field: f.field, reason: 'already matches the delivered draft' }));

fs.writeFileSync(outPath, JSON.stringify({ book: tree.book, bookName: tree.bookName, drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
console.log(`${slug}: ${drafts.length} correction(s) from ${rwFiles.join(', ')}`);
for (const d of drafts) console.log(`  ${d.entryId}|${d.field}`);
