import fs from 'node:fs';
import path from 'node:path';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const base = JSON.parse(fs.readFileSync(path.join(repo, 'docs/_work/chains.json'), 'utf8'));
const src = fs.readFileSync(path.join(repo, 'src/data/threadDetails.ts'), 'utf8');
const chainSrc = src.slice(src.indexOf('export const threadChains'));
const idRe = /id:\s*'([^']+)'/g;
let m: RegExpExecArray | null;
const ids: Array<{ id: string; at: number }> = [];
while ((m = idRe.exec(chainSrc))) ids.push({ id: m[1], at: m.index });
const live = new Map<string, string>();
for (let i = 0; i < ids.length; i++) {
  const chunk = chainSrc.slice(ids[i].at, i + 1 < ids.length ? ids[i + 1].at : chainSrc.length);
  const nm = /name:\s*'((?:[^'\\]|\\.)*)'/.exec(chunk);
  if (nm) live.set(`chain:${ids[i].id}|name`, nm[1].replace(/\\'/g, "'"));
}
const names = (base.chains as Array<{ entryId: string; field: string; text: string }>).filter(c => c.field === 'name');
let changed = 0;
for (const n of names) {
  const now = live.get(`${n.entryId}|name`);
  if (now !== n.text) {
    changed++;
    console.log(`NAME CHANGED ${n.entryId}`);
    console.log(`   was: ${n.text}`);
    console.log(`   now: ${now}`);
  }
}
console.log(`\nchain names compared: ${names.length} · changed: ${changed}`);

// apply the ordinal restoration
if (process.argv.includes('--fix')) {
  let out = src;
  const fixes: Array<[string, string]> = [
    ["name: 'The 70 Weeks: Dating the Messiah'", "name: '2. The 70 Weeks: Dating the Messiah'"],
    ["name: 'The Three Angels\\' Messages & The Seal vs. Mark'", "name: '5. The Three Angels\\' Messages & The Seal vs. Mark'"],
  ];
  for (const [from, to] of fixes) {
    const n = out.split(from).length - 1;
    if (n !== 1) { console.log(`SKIP (${n} occurrences): ${from}`); continue; }
    out = out.replace(from, to);
    console.log(`restored: ${to}`);
  }
  if (out !== src) {
    fs.writeFileSync(path.join(repo, 'src/data/threadDetails.ts'), out);
    console.log('written');
  } else console.log('nothing written');
}
