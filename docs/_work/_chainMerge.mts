import fs from 'node:fs';
import path from 'node:path';

const dir = import.meta.dirname;
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
const wantF = process.argv.includes('--include-f');
const drafts = [];
const verifyOnly = [];
const equivalent = [];
const seen = new Map();
const missing = [];
for (const g of letters) {
  const p = path.join(dir, `chains_g${g}_rewrites.json`);
  if (!fs.existsSync(p)) {
    if (g === 'F' && !wantF) { missing.push(g); continue; }
    missing.push(g); continue;
  }
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const d of j.drafts ?? []) { seen.set(`${d.entryId}|${d.field}`, g); drafts.push(d); }
  for (const v of j.verifyOnly ?? []) { seen.set(`${v.entryId}|${v.field}`, g); verifyOnly.push(v); }
  for (const e of j.equivalent ?? []) { seen.set(`${e.entryId}|${e.field}`, g); equivalent.push(e); }
}
// every unique chain string must be classified exactly once across the merged set
const wl = JSON.parse(fs.readFileSync(path.join(dir, 'chains.json'), 'utf8'));
const keys = new Set(wl.chains.map((c: { entryId: string; field: string }) => `${c.entryId}|${c.field}`));
const covered = new Set(seen.keys());
const uncovered = [...keys].filter(k => !covered.has(k));
const extra = [...covered].filter(k => !keys.has(k));

const out = { book: 'chains', bookName: 'Pillar chains', drafts, verifyOnly, equivalent };
fs.writeFileSync(path.join(dir, 'chains_rewrites.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`merged groups: ${letters.filter(g => !missing.includes(g)).join(', ')}${missing.length ? ' (missing ' + missing.join(',') + ')' : ''}`);
console.log(`drafts ${drafts.length} · verifyOnly ${verifyOnly.length} · equivalent ${equivalent.length} = ${drafts.length + verifyOnly.length + equivalent.length}`);
console.log(`worklist strings ${keys.size} · covered ${covered.size} · uncovered ${uncovered.length} · not in worklist ${extra.length}`);
if (uncovered.length) console.log('  uncovered: ' + uncovered.slice(0, 12).join(', ') + (uncovered.length > 12 ? ` … +${uncovered.length - 12}` : ''));
if (extra.length) console.log('  not in worklist: ' + extra.slice(0, 12).join(', '));
