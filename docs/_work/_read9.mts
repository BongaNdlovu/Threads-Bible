import fs from 'node:fs';
import path from 'node:path';
const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';

const targets: Array<[string, string, string]> = [
  ['1ti_rewrites.json', '1ti-6-16', 'principle'],
  ['ezk_p2_rewrites.json', 'ezk-37-12', 'principle'],
  ['chains_gD_rewrites.json', 'chain:day-of-the-lord', 'steps[5].connection'],
  ['chains_gE_rewrites.json', 'chain:shepherd-provision', 'steps[0].connection'],
  ['1pe_rewrites.json', '1pe-2-6', 'principle'],
  ['1pe_rewrites.json', '1pe-2-22', 'principle'],
  ['gal_rewrites.json', 'gal-3-28', 'principle'],
  ['deu_rewrites.json', 'deu-18-15', 'principle'],
];
for (const [file, entryId, field] of targets) {
  const p = path.join(dir, file);
  if (!fs.existsSync(p)) { console.log(`MISSING FILE ${file}`); continue; }
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  const d = (j.drafts ?? []).find((x: any) => x.entryId === entryId && x.field === field);
  console.log(`\n===== ${file} · ${entryId} · ${field} =====`);
  if (!d) { console.log('(not a draft)'); continue; }
  console.log('REASON: ' + d.reason);
  console.log('AFTER (first 300): ' + d.after.slice(0, 300));
}
console.log('\n===== zec_rewrites.json · chain:righteous-branch drafts =====');
const z = JSON.parse(fs.readFileSync(path.join(dir, 'zec_rewrites.json'), 'utf8'));
for (const d of (z.drafts ?? []).filter((x: any) => x.entryId.startsWith('chain:'))) {
  console.log(`--- ${d.field}`);
  console.log('AFTER: ' + d.after.slice(0, 200));
  console.log('REASON: ' + (d.reason ?? '').slice(0, 260));
}
