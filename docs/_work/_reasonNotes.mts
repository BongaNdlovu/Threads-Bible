import fs from 'node:fs';
import path from 'node:path';
const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const targets: Array<[string, string, string]> = [
  ['heb_rewrites.json', 'heb-8-8', 'principle'],
  ['heb_rewrites.json', 'heb-8-5', 'principle'],
  ['heb_rewrites.json', 'heb-4-4', 'principle'],
  ['heb_rewrites.json', 'heb-10-30', 'principle'],
  ['1pe_rewrites.json', '1pe-2-6', 'principle'],
  ['1pe_rewrites.json', '1pe-2-24', 'principle'],
];
const NOTE = ' REPAIR NOTE: this string\u2019s structural label was restored after the first pass, and in heb-4-4 and 1pe-2-6 a dropped citation token was restored with it; the reason text above describes the pre-repair draft. See docs/CP-03_LABEL_REPAIR.md.';
let n = 0;
for (const [file, entryId, field] of targets) {
  const p = path.join(dir, file);
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  const d = (j.drafts || []).find(x => x.entryId === entryId && x.field === field);
  if (!d) { console.log(`MISSING ${file} ${entryId}|${field}`); continue; }
  if (d.reason.includes('REPAIR NOTE')) { console.log(`already noted ${entryId}`); continue; }
  d.reason = (d.reason ?? '') + NOTE;
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
  n++;
  console.log(`noted ${file} ${entryId}|${field}`);
}
console.log(`reasons annotated: ${n}`);
