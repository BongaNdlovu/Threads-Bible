import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const file = `${repo}/src/data/threadDetails.ts`;

const read = (rev: string) => execFileSync('git', ['show', `${rev}:src/data/threadDetails.ts`], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const regionOf = (src: string) => src.indexOf('export const MASTER_PILLAR_CHAINS');
const names = (t: string) => [...t.matchAll(/name:\s*'((?:[^'\\]|\\.)*)'/g)].map(m => m[1]);

const original = names(read('9b6b2a8^').slice(regionOf(read('9b6b2a8^'))));
const current = names(read('HEAD').slice(regionOf(read('HEAD'))));
if (original.length !== current.length || original.length !== 8) throw new Error(`region mismatch ${original.length}/${current.length}`);

let src = fs.readFileSync(file, 'utf8');
const start = regionOf(src);
if (start < 0) throw new Error('MASTER_PILLAR_CHAINS not found');

let region = src.slice(start);
let changed = 0;
for (let i = 0; i < current.length; i++) {
  if (original[i] === current[i]) continue;
  const from = `name: '${current[i].replace(/'/g, "\\'")}'`;
  const to = `name: '${original[i].replace(/'/g, "\\'")}'`;
  const n = region.split(from).length - 1;
  if (n < 1) { console.log(`NOT FOUND in region: ${from}`); continue; }
  region = region.replace(from, to);   // replaces the first occurrence, which is in this region
  changed++;
  console.log(`reverted: ${current[i]}\n      ->  ${original[i]}`);
}
if (changed) {
  fs.writeFileSync(file, src.slice(0, start) + region);
  console.log(`\n${changed} master-pillar name(s) reverted (region-scoped)`);
} else console.log('nothing to revert');
