import fs from 'node:fs';
import path from 'node:path';

const src = path.join(process.env.TEMP!, 'tree66', 'chains.json');
const j = JSON.parse(fs.readFileSync(src, 'utf8'));
const byChain = new Map<string, Array<{ entryId: string; field: string; text: string }>>();
for (const c of j.chains) {
  const arr = byChain.get(c.entryId) ?? [];
  arr.push(c);
  byChain.set(c.entryId, arr);
}
const rows = [...byChain.entries()].map(([id, arr]) => ({ id, arr, n: arr.length })).sort((a, b) => b.n - a.n);
const groups = 6;
const buckets: Array<typeof rows> = Array.from({ length: groups }, () => []);
// Snake draft by size so each writer gets a similar load.
rows.forEach((r, i) => {
  const round = Math.floor(i / groups);
  const pos = i % groups;
  const target = round % 2 === 0 ? pos : groups - 1 - pos;
  buckets[target].push(r);
});
const outDir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
buckets.forEach((bucket, i) => {
  const chains = bucket.flatMap(b => b.arr);
  const payload = {
    book: 'chains',
    bookName: `Pillar chains (group ${letters[i]})`,
    generatedFrom: 'fresh extraction of all 66 books from the working tree',
    counts: { chains: bucket.length, strings: chains.length },
    fields: [],
    chains,
  };
  const p = path.join(outDir, `chains_g${letters[i]}.json`);
  fs.writeFileSync(p, JSON.stringify(payload, null, 2) + '\n');
  console.log(`group ${letters[i]}: ${bucket.length} chains · ${chains.length} strings · ${bucket.map(b => b.id.replace('chain:', '')).join(', ')}`);
});
const total = buckets.reduce((n, b) => n + b.reduce((m, r) => m + r.n, 0), 0);
console.log(`total ${total} strings across ${buckets.reduce((n, b) => n + b.length, 0)} chains`);
