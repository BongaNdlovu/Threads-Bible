import fs from 'node:fs';

const p = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/bookThreadDetails.ts';
const lines = fs.readFileSync(p, 'utf8').split('\n');
// find the entry id (a quoted key on its own line) above the hit
lines.forEach((l, i) => {
  if (/his possession\u2026/.test(l)) {
    let id = '(unknown)';
    for (let k = i; k >= 0 && k > i - 40; k--) {
      const m = /^\s*'([a-z0-9]+-\d+-\d+)':\s*\{/.exec(lines[k]);
      if (m) { id = m[1]; break; }
    }
    console.log(`entry: ${id}  (line ${i + 1})`);
    console.log(l.trim().slice(0, 700));
  }
});
