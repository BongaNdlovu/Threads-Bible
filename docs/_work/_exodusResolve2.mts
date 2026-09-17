import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const doc = execFileSync('git', ['show', 'HEAD:docs/CP-02_EXODUS_DRAFT.md'], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
console.log(`doc loaded: ${doc.length} chars · first line: ${JSON.stringify(doc.split('\n')[0].slice(0, 60))}`);

type Pair = { entry: string; field: string; before: string; after: string };
const pairs: Pair[] = [];
let entry = '', field = '', mode: 'before' | 'after' | null = null, pendingBefore = '', buf: string[] = [], inFence = false;
const flush = () => {
  const text = buf.join('\n').trim();
  buf = [];
  if (mode === 'before') pendingBefore = text;
  else if (mode === 'after') pairs.push({ entry, field, before: pendingBefore, after: text });
};
for (const line of doc.split('\n')) {
  const h2 = /^## (?!#)(.+)$/.exec(line);
  const h3 = /^### (.+)$/.exec(line);
  if (h2) { if (inFence) { flush(); inFence = false; } entry = h2[1].trim(); mode = null; continue; }
  if (h3) { if (inFence) { flush(); inFence = false; } field = h3[1].trim(); mode = null; continue; }
  if (/^\*\*BEFORE\*\*/.test(line)) { if (inFence) flush(); mode = 'before'; continue; }
  if (/^\*\*AFTER/.test(line)) { if (inFence) flush(); mode = 'after'; continue; }
  if (line.startsWith('```')) {
    if (!inFence) { inFence = true; buf = []; } else { inFence = false; flush(); mode = null; }
    continue;
  }
  if (inFence) buf.push(line);
}
console.log(`pairs parsed: ${pairs.length} · entries: ${new Set(pairs.map(p => p.entry)).size}`);

const MARK = /([A-Za-z0-9])([.:;])(\s+)([a-z])/g;
type Fix = { entry: string; field: string; before: string; after: string; mark: string };
const fixes: Fix[] = [];
const unresolved: string[] = [];
for (const p of pairs) {
  let out = p.after;
  let changed = false;
  for (const m of [...p.after.matchAll(MARK)]) {
    if (m[2] !== '.') continue;                       // only damaged periods
    const tail = p.after.slice((m.index ?? 0) + 1, (m.index ?? 0) + 34);
    const idx = p.before.indexOf(tail);
    if (idx > 0) {
      const bm = p.before[idx - 1];
      if (bm === ':' || bm === ';') {
        // restore the mark and the case the BEFORE used
        const beforeChar = p.before[idx] ?? m[4];
        out = out.replace(`${m[1]}.${m[3]}${m[4]}`, `${m[1]}${bm}${m[3]}${beforeChar}`);
        changed = true;
        continue;
      }
      if (bm === '.') continue;                       // BEFORE had a full stop too — legitimate
    }
    unresolved.push(`${p.entry} · ${p.field} :: …${p.after.slice(Math.max(0, (m.index ?? 0) - 45), (m.index ?? 0) + 34).trim()}…`);
  }
  if (changed) fixes.push({ entry: p.entry, field: p.field, before: p.after, after: out, mark: 'punctuation restored from the BEFORE block' });
}
console.log(`\nAFTER blocks needing a punctuation fix: ${fixes.length}`);
console.log(`sites still needing judgement:          ${unresolved.length}`);
if (unresolved.length) console.log('\n' + unresolved.slice(0, 20).join('\n'));
fs.writeFileSync(process.env.TEMP + '/exodus-fixes.json', JSON.stringify(fixes, null, 2));
console.log(`\nwrote ${fixes.length} candidate fixes to $TEMP/exodus-fixes.json`);
