import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const revs: Array<[string, string]> = [
  ['9b6b2a8^', 'before the chain pass'],
  ['9b6b2a8', 'after the chain pass'],
  ['a83d656^', 'before my ordinal "repair"'],
  ['HEAD', 'now'],
];

const read = (rev: string) => execFileSync('git', ['show', `${rev}:src/data/threadDetails.ts`], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

for (const [rev, label] of revs) {
  const src = read(rev);
  const chainStart = src.indexOf('export const threadChains');
  const masterStart = src.indexOf('export const MASTER_PILLAR_CHAINS');
  const chainRegion = src.slice(chainStart, masterStart > 0 ? masterStart : undefined);
  const masterRegion = masterStart > 0 ? src.slice(masterStart) : '';
  const names = (t: string) => [...t.matchAll(/name:\s*'((?:[^'\\]|\\.)*)'/g)].map(m => m[1].replace(/\\'/g, "'"));
  const c = names(chainRegion), m = names(masterRegion);
  console.log(`\n=== ${rev} (${label}) ===`);
  console.log(`threadChains names: ${c.length} · with an ordinal: ${c.filter(n => /^\d+\.\s/.test(n)).length}`);
  console.log(`MASTER_PILLAR names: ${m.length} · with an ordinal: ${m.filter(n => /^\d+\.\s/.test(n)).length}`);
  const show = (arr: string[]) => arr.filter(n => /Sabbath: Creation|2,300 Days|70 Weeks|Three Angels/.test(n));
  console.log('  threadChains sample: ' + JSON.stringify(show(c)));
  console.log('  MASTER sample:       ' + JSON.stringify(show(m)));
}
