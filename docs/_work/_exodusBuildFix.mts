import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const out = `${repo}/docs/_work`;

// ---- reference: the BEFORE blocks of the signed-off doc
const doc = execFileSync('git', ['show', 'HEAD:docs/CP-02_EXODUS_DRAFT.md'], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const ref = new Map<string, string>();
let entry = '', field = '', mode: 'before' | 'after' | null = null, pendingBefore = '', buf: string[] = [], inFence = false;
const flush = () => {
  const text = buf.join('\n').trim();
  buf = [];
  if (mode === 'before') pendingBefore = text;
  else if (mode === 'after') {
    const key = `${entry.split(' ')[0]}|${field.replace(/\s*\(.*\)$/, '')}`;
    if (!ref.has(key)) ref.set(key, pendingBefore);
  }
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
console.log(`reference BEFORE blocks: ${ref.size}`);

// ---- live data
const tree = JSON.parse(fs.readFileSync(process.env.TEMP + '/live/exo_live.json', 'utf8'));
const fields = (tree.fields ?? []) as Array<{ entryId: string; field: string; text: string }>;
const chains = (tree.chains ?? []) as Array<{ entryId: string; field: string; text: string }>;

const ABBREV = /\b(?:c|ca|e\.g|i\.e|cf|vs|no|vol|p|pp|ch|v|vv|St|Mr|Dr|AD|BC|Rev|Heb|Pet|Cor|Matt|Exod|Lev|Num|Deut|Ps|Isa|Jer|Ezek|Dan|Rom|Gal|Eph|Phil|Col|Tim|Tit|Jas|Jn|Lk|Mk|Mt)\s*$/i;
const damaged = (s: string) => {
  const at: number[] = [];
  for (const m of s.matchAll(/\.\s+[a-z0-9]/g)) {
    const i = m.index ?? 0;
    if (ABBREV.test(s.slice(Math.max(0, i - 6), i + 1))) continue;
    at.push(i);
  }
  return at;
};

const drafts: Array<{ entryId: string; field: string; after: string; reason: string }> = [];
let resolved = 0, open = 0;
const openList: string[] = [];
for (const f of fields) {
  const sites = damaged(f.text);
  if (!sites.length) continue;
  const before = ref.get(`${f.entryId}|${f.field}`);
  if (!before) { open += sites.length; openList.push(`${f.entryId} · ${f.field} — no BEFORE reference`); continue; }
  let corrected = '', cursor = 0, applied = 0, failed = 0;
  for (const at of sites) {
    const pre = f.text.slice(Math.max(0, at - 26), at).trim();
    let mark = '.';
    for (const probe of [pre, pre.split(/\s+/).slice(-3).join(' '), pre.split(/\s+/).slice(-2).join(' ')]) {
      if (probe.length < 4) continue;
      const idx = before.indexOf(probe);
      if (idx >= 0) {
        const m2 = /^\s*([:;.,])/.exec(before.slice(idx + probe.length));
        if (m2) { mark = m2[1]; break; }
      }
    }
    if (mark === ':' || mark === ';') { applied++; resolved++; }
    else { failed++; open++; openList.push(`${f.entryId} · ${f.field} — …${f.text.slice(Math.max(0, at - 50), at + 35).trim()}…`); }
    corrected += f.text.slice(cursor, at) + mark;
    cursor = at + 1;
  }
  corrected += f.text.slice(cursor);
  if (applied) {
    drafts.push({
      entryId: f.entryId,
      field: f.field,
      after: corrected,
      reason: `OPERATOR-RULED REPAIR (2026-09-18, "sort out the colon-to-period damage"): the signed-off Exodus rewrite replaced colons and semicolons with full stops and lower-cased the next word. ${applied} mark(s) restored from the BEFORE block of the signed-off appendix (docs/CP-02_EXODUS_DRAFT.md at HEAD), which preserves the original punctuation. No word changed; only the marks.`,
    });
  }
}
console.log(`live field values with damaged periods: ${fields.filter(f => damaged(f.text).length).length}`);
console.log(`marks restored: ${resolved} · sites left open: ${open}`);
if (openList.length) { console.log('\nopen:'); console.log(openList.slice(0, 12).map(s => '  ' + s).join('\n')); }

const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
const verifyOnly = [...fields, ...chains].filter(f => !keys.has(`${f.entryId}|${f.field}`)).map(f => ({ entryId: f.entryId, field: f.field, reason: 'unchanged by the punctuation repair' }));
fs.writeFileSync(path.join(out, 'exo_punct_repair.json'), JSON.stringify({ book: 'exo', bookName: 'Exodus', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
console.log(`\nwrote exo_punct_repair.json — ${drafts.length} draft(s), ${verifyOnly.length} verify-only`);
