import fs from 'node:fs';
import path from 'node:path';

const out = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const tree = JSON.parse(fs.readFileSync(process.env.TEMP + '/live/exo_now.json', 'utf8'));
const target = JSON.parse(fs.readFileSync(path.join(out, 'exo_repair.json'), 'utf8'));
const wanted = target.drafts.find((d: any) => d.entryId === 'exo-20-8' && d.field === 'principle');
if (!wanted) throw new Error('exo-20-8 draft missing from the repair file');

const fields = (tree.fields ?? []) as Array<{ entryId: string; field: string; text: string }>;
const chains = (tree.chains ?? []) as Array<{ entryId: string; field: string; text: string }>;
const cur = fields.find(f => f.entryId === 'exo-20-8' && f.field === 'principle');
if (!cur) throw new Error('exo-20-8 principle not in the current tree');
console.log('tree version sentence:');
const i = cur.text.indexOf('Jesus declares');
console.log('   ' + cur.text.slice(i, cur.text.indexOf('.', i) + 1));
console.log('draft version sentence:');
const j = wanted.after.indexOf('Jesus declares');
console.log('   ' + wanted.after.slice(j, wanted.after.indexOf('.', j) + 1));
if (cur.text === wanted.after) { console.log('already identical — nothing to correct'); process.exit(0); }

const drafts = [{
  entryId: 'exo-20-8',
  field: 'principle',
  after: wanted.after,
  reason: 'OPERATOR-RULED REPAIR follow-up: the first attempt pushed this sentence to 36 words; this version keeps the frozen rendering and stays under the 35-word gate.',
}];
const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
const verifyOnly = [...fields, ...chains].filter(f => !keys.has(`${f.entryId}|${f.field}`)).map(f => ({ entryId: f.entryId, field: f.field, reason: 'already matches the current tree' }));
fs.writeFileSync(path.join(out, 'exo_repair2.json'), JSON.stringify({ book: 'exo', bookName: 'Exodus', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
console.log(`wrote exo_repair2.json: 1 draft, ${verifyOnly.length} verify-only`);
