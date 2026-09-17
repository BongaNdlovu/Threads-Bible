import fs from 'node:fs';

const t = fs.readFileSync('C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/bookThreadDetails.ts', 'utf8');
const idRe = /'((exo)-\d+-\d+)':\s*\{/g;
let m: RegExpExecArray | null;
const ids: Array<{ id: string; at: number }> = [];
while ((m = idRe.exec(t))) ids.push({ id: m[1], at: m.index });

// which field each site sits in: find the nearest "fieldName:" before the site
let total = 0;
const byField = new Map<string, number>();
for (let i = 0; i < ids.length; i++) {
  const chunk = t.slice(ids[i].at, i + 1 < ids.length ? ids[i + 1].at : t.length);
  const sites = [...chunk.matchAll(/[a-z0-9]\.\s+[a-z]/g)];
  if (!sites.length) continue;
  console.log(`\n===== ${ids[i].id} — ${sites.length} site(s) =====`);
  for (const s of sites) {
    const at = s.index ?? 0;
    const near = chunk.slice(Math.max(0, at - 90), at + 60).replace(/\s+/g, ' ');
    // field name = last `xxx:` or `'xxx':` before the site
    const before = chunk.slice(0, at);
    const fm = [...before.matchAll(/(?:^|[\s{,])(?:'([^']+)'|([A-Za-z_][A-Za-z0-9_]*))\s*:/g)].pop();
    const field = fm ? (fm[1] ?? fm[2] ?? '?') : '?';
    byField.set(field, (byField.get(field) ?? 0) + 1);
    total++;
    console.log(`  [${field}] …${near}…`);
  }
}
console.log(`\nTOTAL sites: ${total}`);
console.log('by field: ' + [...byField.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(' '));
