import fs from 'node:fs';

const doc = fs.readFileSync(process.env.TEMP + '/exodus-doc-clean.md', 'utf8');
const lines = doc.split(/\r?\n/);

type Pair = { entry: string; field: string; before: string; after: string };
const pairs: Pair[] = [];
let entry = '';
let field = '';
let mode: 'before' | 'after' | null = null;
let buf: string[] = [];
let inFence = false;
const flush = () => {
  const text = buf.join('\n');
  buf = [];
  if (!mode) return;
  if (mode === 'before') pendingBefore = text;
  else pairs.push({ entry, field, before: pendingBefore, after: text });
};
let pendingBefore = '';

for (const line of lines) {
  const h2 = /^##\s+(.*)$/.exec(line);
  const h3 = /^###\s+(.*)$/.exec(line);
  if (h2) { entry = h2[1].trim(); if (inFence) { flush(); inFence = false; } continue; }
  if (h3) { field = h3[1].trim(); mode = null; if (inFence) { flush(); inFence = false; } continue; }
  if (/^\*\*BEFORE\*\*/.test(line)) { if (inFence) flush(); mode = 'before'; continue; }
  if (/^\*\*AFTER/.test(line)) { if (inFence) flush(); mode = 'after'; continue; }
  if (/^```/.test(line)) {
    if (!inFence) { inFence = true; buf = []; }
    else { inFence = false; flush(); mode = null; }
    continue;
  }
  if (inFence) buf.push(line);
}
console.log(`parsed pairs: ${pairs.length}`);
console.log('sample entry ids: ' + [...new Set(pairs.map(p => p.entry))].slice(0, 4).join(' | '));

// how many damaged sites in AFTER can be resolved from BEFORE?
const MARK = /([A-Za-z0-9])([.:;])\s+([a-z])/g;
let sites = 0, resolved = 0, unresolved: string[] = [];
for (const p of pairs) {
  for (const m of p.after.matchAll(MARK)) {
    const mark = m[2];
    if (mark !== '.') continue;                       // only the damaged periods
    sites++;
    const prefix = p.after.slice(Math.max(0, (m.index ?? 0) - 40), m.index! + 1);
    const tail = p.after.slice(m.index! + 1, m.index! + 30);
    // find the same tail in BEFORE and read the mark before it
    const idx = p.before.indexOf(tail);
    if (idx > 0) {
      const beforeMark = p.before[idx - 1];
      if (beforeMark === ':' || beforeMark === ';' || beforeMark === '.') {
        resolved++;
        continue;
      }
    }
    unresolved.push(`${p.entry} · ${p.field}\n      after : …${prefix.trim()}…${tail.trim()}…`);
  }
}
console.log(`\ndamaged periods in AFTER blocks: ${sites}`);
console.log(`  resolvable from the BEFORE block: ${resolved}`);
console.log(`  needing judgement:               ${unresolved.length}`);
console.log('\n' + unresolved.slice(0, 24).join('\n'));
