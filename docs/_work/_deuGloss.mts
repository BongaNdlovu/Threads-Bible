import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const grab = (rev: string) => {
  const src = execFileSync('git', ['show', `${rev}:src/data/bookThreadDetails.ts`], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const line = src.split('\n').find(l => l.includes('circumcise the heart'));
  return line ?? '(not found)';
};
const find = (t: string) => {
  const m = /gloss: '([^']*)'/.exec(t);
  return m ? m[1] : '(no gloss)';
};
for (const rev of ['e7f6d82', '4b90d3b', 'HEAD']) {
  console.log(`${rev.padEnd(9)} gloss = ${JSON.stringify(find(grab(rev)))}`);
}
const tree = fs.readFileSync(`${repo}/src/data/bookThreadDetails.ts`, 'utf8').split('\n').find(l => l.includes('circumcise the heart')) ?? '';
console.log(`worktree  gloss = ${JSON.stringify(find(tree))}`);
console.log('');
console.log('worktree matches e7f6d82: ' + (tree === grab('e7f6d82')));
