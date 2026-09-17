import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const file = `${repo}/src/data/threadDetails.ts`;

const read = (rev: string) => execFileSync('git', ['show', `${rev}:src/data/threadDetails.ts`], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const masterRegion = (src: string) => src.slice(src.indexOf('export const MASTER_PILLAR_CHAINS'));
const names = (t: string) => [...t.matchAll(/name:\s*'((?:[^'\\]|\\.)*)'/g)].map(m => m[1]);

const before = names(masterRegion(read('9b6b2a8^')));   // the original master-pillar names
const now = names(masterRegion(read('HEAD')));          // what my repair turned them into

if (before.length !== now.length) throw new Error(`region length mismatch: ${before.length} vs ${now.length}`);
if (before.length !== 8) throw new Error(`expected 8 master names, found ${before.length}`);

let src = fs.readFileSync(file, 'utf8');
let changed = 0;
for (let i = 0; i < now.length; i++) {
  if (before[i] === now[i]) continue;
  const from = `name: '${now[i].replace(/'/g, "\\'")}'`;
  const to = `name: '${before[i].replace(/'/g, "\\'")}'`;
  const n = src.split(from).length - 1;
  if (n !== 1) { console.log(`SKIP (${n} occurrences): ${from}`); continue; }
  src = src.replace(from, to);
  changed++;
  console.log(`reverted: ${now[i]}\n      ->  ${before[i]}`);
}
if (changed) { fs.writeFileSync(file, src); console.log(`\n${changed} master-pillar name(s) reverted`); }
else console.log('nothing to revert');
