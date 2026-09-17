import fs from 'node:fs';

const file = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/threadDetails.ts';
let src = fs.readFileSync(file, 'utf8');
const start = src.indexOf('export const MASTER_PILLAR_CHAINS');
if (start < 0) throw new Error('MASTER_PILLAR_CHAINS not found');

let region = src.slice(start);
const before = `name: '5. The Three Angels`;
if (region.includes(before)) {
  const idx = region.indexOf(before);
  const lineEnd = region.indexOf('\n', idx);
  const line = region.slice(idx, lineEnd);
  const fixed = line.replace("name: '5. ", "name: '");
  region = region.slice(0, idx) + fixed + region.slice(lineEnd);
  src = src.slice(0, start) + region;
  fs.writeFileSync(file, src);
  console.log(`reverted #5:\n   ${line.trim()}\n-> ${fixed.trim()}`);
} else {
  console.log('#5 already reverted or not found');
}

// verify against the working tree
const src2 = fs.readFileSync(file, 'utf8');
const s2 = src2.indexOf('export const MASTER_PILLAR_CHAINS');
const names = (t: string) => [...t.matchAll(/name:\s*'((?:[^'\\]|\\.)*)'/g)].map(m => m[1].replace(/\\'/g, "'"));
const chainNames = names(src2.slice(src2.indexOf('export const threadChains'), s2));
const masterNames = names(src2.slice(s2));
console.log(`\nworking tree: threadChains names ${chainNames.length} (ordinaled ${chainNames.filter(n => /^\d+\.\s/.test(n)).length})`);
console.log(`              MASTER_PILLAR names ${masterNames.length} (ordinaled ${masterNames.filter(n => /^\d+\.\s/.test(n)).length})`);
console.log('master names now:');
for (const n of masterNames) console.log('   ' + n);
