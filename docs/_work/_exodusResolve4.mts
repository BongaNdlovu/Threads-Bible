import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const doc = execFileSync('git', ['show', 'HEAD:docs/CP-02_EXODUS_DRAFT.md'], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

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
  if (line.startsWith('```')) { if (!inFence) { inFence = true; buf = []; } else { inFence = false; flush(); mode = null; } continue; }
  if (inFence) buf.push(line);
}

const ABBREV = /\b(?:c|ca|e\.g|i\.e|cf|vs|no|vol|p|pp|ch|v|vv|St|Mr|Dr|AD|BC|Rev|Heb|Pet|Cor|Matt|Exod|Lev|Num|Deut|Ps|Isa|Jer|Ezek|Dan|Rom|Gal|Eph|Phil|Col|Tim|Tit|Jas|Jn|Lk|Mk|Mt)\s*$/i;
const sitesIn = (s: string) => {
  const out: number[] = [];
  for (const m of s.matchAll(/\.\s+[a-z0-9]/g)) {
    const at = m.index ?? 0;
    if (ABBREV.test(s.slice(Math.max(0, at - 6), at + 1))) continue;
    out.push(at);
  }
  return out;
};

const fixes: Array<{ entry: string; field: string; before: string; after: string; marks: number }> = [];
const unresolved: Array<{ entry: string; field: string; context: string }> = [];
let resolvedMarks = 0;

for (const p of pairs) {
  const sites = sitesIn(p.after);
  if (!sites.length) continue;
  const out: string[] = [];
  let cursor = 0, applied = 0, failed = 0;
  for (const at of sites) {
    // the words before the mark, which a rewrite usually preserves
    const pre = p.after.slice(Math.max(0, at - 26), at).trim();
    let mark = '.';
    for (const probe of [pre, pre.split(/\s+/).slice(-3).join(' '), pre.split(/\s+/).slice(-2).join(' ')]) {
      if (probe.length < 4) continue;
      const idx = p.before.indexOf(probe);
      if (idx >= 0) {
        const afterProbe = p.before.slice(idx + probe.length);
        const m2 = /^\s*([:;.,])/.exec(afterProbe);
        if (m2) { mark = m2[1]; break; }
      }
    }
    if (mark === ':' || mark === ';') { applied++; resolvedMarks++; }
    else failed++;
    out.push(p.after.slice(cursor, at) + mark);
    cursor = at + 1;
  }
  out.push(p.after.slice(cursor));
  const after = out.join('');
  if (applied) fixes.push({ entry: p.entry, field: p.field, before: p.after, after, marks: applied });
  if (failed) {
    for (const at of sites) {
      const pre = p.after.slice(Math.max(0, at - 26), at).trim();
      const idx = p.before.indexOf(pre);
      const got = idx >= 0 ? (p.before.slice(idx + pre.length).match(/^\s*([:;.,])/)?.[1] ?? '?') : null;
      if (got === ':' || got === ';') continue;
      unresolved.push({ entry: p.entry, field: p.field, context: `…${p.after.slice(Math.max(0, at - 55), at + 40).trim()}…` });
    }
  }
}
console.log(`blocks with a fix:   ${fixes.length}`);
console.log(`marks resolved:      ${resolvedMarks}`);
console.log(`sites still open:    ${unresolved.length}`);
if (unresolved.length) { console.log('\nopen sites:'); console.log(unresolved.slice(0, 14).map(u => `  ${u.entry.split(' ')[0]} · ${u.field}\n     ${u.context}`).join('\n')); }
fs.writeFileSync(process.env.TEMP + '/exodus-fixes.json', JSON.stringify(fixes, null, 2));
console.log(`\nwrote ${fixes.length} blocks to $TEMP/exodus-fixes.json`);
