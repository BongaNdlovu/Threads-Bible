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
  const out: Array<{ at: number; next: string }> = [];
  for (const m of s.matchAll(/\.\s+([a-z0-9])/g)) {
    const at = m.index ?? 0;
    if (ABBREV.test(s.slice(Math.max(0, at - 6), at + 1))) continue;
    out.push({ at, next: m[1] });
  }
  return out;
};
const marksIn = (s: string) => [...s.matchAll(/[:;]/g)].map(m => m[0]);

let matched = 0, mismatched = 0, noSites = 0, marks = 0;
const fixes: Array<{ entry: string; field: string; before: string; after: string }> = [];
const skipped: string[] = [];
for (const p of pairs) {
  const sites = sitesIn(p.after);
  if (!sites.length) { noSites++; continue; }
  const marksB = marksIn(p.before);
  if (marksB.length !== sites.length) {
    mismatched++;
    skipped.push(`${p.entry} · ${p.field} — ${sites.length} damaged period(s) vs ${marksB.length} colon/semicolon in BEFORE`);
    continue;
  }
  let out = '';
  let cursor = 0;
  sites.forEach((s, i) => {
    out += p.after.slice(cursor, s.at) + marksB[i];
    cursor = s.at + 1;
  });
  out += p.after.slice(cursor);
  if (out !== p.after) { fixes.push({ entry: p.entry, field: p.field, before: p.after, after: out }); matched++; marks += sites.length; }
}
console.log(`pairs: ${pairs.length}`);
console.log(`  blocks with no damaged period:      ${noSites}`);
console.log(`  RESOLVED in order (counts agree):   ${matched} blocks · ${marks} marks`);
console.log(`  counts disagree (need judgement):   ${mismatched} blocks`);
if (skipped.length) { console.log('\nskipped:'); console.log(skipped.slice(0, 18).map(s => '   ' + s).join('\n')); }
fs.writeFileSync(process.env.TEMP + '/exodus-fixes.json', JSON.stringify(fixes, null, 2));
console.log(`\nwrote ${fixes.length} resolved blocks to $TEMP/exodus-fixes.json`);
if (fixes.length) {
  const f = fixes[0];
  console.log('\nfirst example:\n  BEFORE-FIX: ' + f.before.slice(0, 220) + '\n  AFTER-FIX : ' + f.after.slice(0, 220));
}
