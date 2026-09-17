import fs from 'node:fs';
import path from 'node:path';

const out = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const tree = JSON.parse(fs.readFileSync(process.env.TEMP + '/live/gal2.json', 'utf8'));
const fields = (tree.fields ?? []) as Array<{ entryId: string; field: string; text: string }>;
const chains = (tree.chains ?? []) as Array<{ entryId: string; field: string; text: string }>;
const cur = fields.find(f => f.entryId === 'gal-3-28' && f.field === 'principle');
if (!cur) throw new Error('gal-3-28 principle not found');

const CURLY = 'rests on God\u2019s binding promise';
const STRAIGHT = "rests on God's binding promise";
if (!cur.text.includes(CURLY)) throw new Error('the curly form is not present: ' + cur.text);
if (cur.text.split(CURLY).length - 1 !== 1) throw new Error('not unique');

const after = cur.text.replace(CURLY, STRAIGHT);
const drafts = [{
  entryId: 'gal-3-28',
  field: 'principle',
  after,
  reason: 'STYLE REPAIR: the glossary rendering was inserted with a typographic apostrophe (U+2019), which was the only such occurrence in 57 uses of "God\'s binding promise" across both data files. Normalised to the straight apostrophe every other occurrence uses. One character, no wording change.',
}];
const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
const verifyOnly = [...fields, ...chains].filter(f => !keys.has(`${f.entryId}|${f.field}`)).map(f => ({ entryId: f.entryId, field: f.field, reason: 'unchanged by the style repair' }));
fs.writeFileSync(path.join(out, 'gal_repair2.json'), JSON.stringify({ book: 'gal', bookName: 'Galatians', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
console.log('wrote gal_repair2.json — normalising U+2019 to the straight apostrophe');
