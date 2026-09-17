import fs from 'node:fs';
import path from 'node:path';
const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';

// the applied draft vs its original, for mat-4-6
const wl = JSON.parse(fs.readFileSync(path.join(dir, 'mat_p1.json'), 'utf8'));
const rw = JSON.parse(fs.readFileSync(path.join(dir, 'mat_p1_rewrites.json'), 'utf8'));
const key = (t: string) => t.replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
for (const [entryId, field] of [['mat-4-6', 'principle'], ['isa-42-6', 'principle'], ['mat-12-18', 'principle']] as Array<[string, string]>) {
  const wlf = ((wl.fields ?? []) as any[]).find(x => x.entryId === entryId && x.field === field);
  const rwf = ((rw.drafts ?? []) as any[]).find(x => x.entryId === entryId && x.field === field);
  console.log(`\n########## ${entryId} · ${field} ##########`);
  if (wlf) console.log('BEFORE: ' + wlf.text);
  if (rwf) { console.log('AFTER : ' + rwf.after); console.log('REASON: ' + rwf.reason); }
  else console.log('(not a draft in mat_p1 / isa worklist)');
}

// 1pe-2-6 lives in the second chunk? find it wherever it is
for (const f of fs.readdirSync(dir).filter(n => /^(1pe|isa_p\d|mat_p\d)_rewrites\.json$/.test(n))) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const d of (j.drafts ?? []) as any[]) {
    if (['isa-42-6', '1pe-2-6', 'mat-12-18'].includes(d.entryId)) {
      console.log(`\n--- found ${d.entryId} in ${f}`);
      console.log('AFTER: ' + d.after);
    }
  }
}
