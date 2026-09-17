import fs from 'node:fs';
import path from 'node:path';

const out = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const tree = JSON.parse(fs.readFileSync(process.env.TEMP + '/live/gal.json', 'utf8'));
const fields = (tree.fields ?? []) as Array<{ entryId: string; field: string; text: string }>;
const chains = (tree.chains ?? []) as Array<{ entryId: string; field: string; text: string }>;
const cur = fields.find(f => f.entryId === 'gal-3-28' && f.field === 'principle');
if (!cur) throw new Error('gal-3-28 principle not found');

const FROM = 'that oneness is baptismal and covenantal';
const TO = 'that oneness is baptismal and rests on God\u2019s binding promise';
if (!cur.text.includes(FROM)) throw new Error(`anchor not found in the live text: ${cur.text}`);
if (cur.text.split(FROM).length - 1 !== 1) throw new Error('anchor is not unique');

const after = cur.text.replace(FROM, TO);
const drafts = [{
  entryId: 'gal-3-28',
  field: 'principle',
  after,
  reason: 'OPERATOR-RULED REPAIR follow-up: the never-write adjective "covenantal" survived here although this draft\'s own reason claimed the frozen glossary rendering had replaced it. The rendering is now used ("God\'s binding promise"), the claim is unchanged, and the sentence passes the gate. Found by the CP-05 cross-book consistency read (finding W2) and confirmed live by the findings triage.',
}];
const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
const verifyOnly = [...fields, ...chains].filter(f => !keys.has(`${f.entryId}|${f.field}`)).map(f => ({ entryId: f.entryId, field: f.field, reason: 'unchanged by this repair' }));
fs.writeFileSync(path.join(out, 'gal_repair.json'), JSON.stringify({ book: 'gal', bookName: 'Galatians', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
console.log('wrote gal_repair.json');
console.log('  before: ' + cur.text);
console.log('  after:  ' + after);
console.log(`  drafts ${drafts.length} · verify-only ${verifyOnly.length}`);
