import fs from 'node:fs';
const p = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/bookThreadDetails.ts';
const t = fs.readFileSync(p, 'utf8');
console.log(`curly apostrophes U+2019 : ${(t.match(/\u2019/g) ?? []).length}`);
console.log(`backslash-escaped quotes: ${(t.match(/\\'/g) ?? []).length}`);
const line = t.split('\n').find(l => l.includes('rests on God'));
console.log('my line: ' + JSON.stringify(line?.trim().slice(0, 160)));
