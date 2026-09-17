import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const dir = path.join(repo, 'docs/_work');

// pre-pass baseline (generated from the tree BEFORE the chain apply)
const base = JSON.parse(fs.readFileSync(path.join(dir, 'chains.json'), 'utf8'));
const gF = JSON.parse(fs.readFileSync(path.join(dir, 'chains_gF_rewrites.json'), 'utf8'));
const verdict = new Map<string, 'draft' | 'verifyOnly'>();
for (const d of gF.drafts ?? []) verdict.set(`${d.entryId}|${d.field}`, 'draft');
for (const v of gF.verifyOnly ?? []) verdict.set(`${v.entryId}|${v.field}`, 'verifyOnly');

// live tree text: read the current threadDetails.ts and pull chain prose by regex on the exported array
const src = fs.readFileSync(path.join(repo, 'src/data/threadDetails.ts'), 'utf8');
const chainStart = src.indexOf('export const threadChains');
const chainSrc = src.slice(chainStart);
const live = new Map<string, string>();
// walk chain objects: "id: 'x'" then their step fields
const idRe = /id:\s*'([^']+)'/g;
let m: RegExpExecArray | null;
const ids: Array<{ id: string; at: number }> = [];
while ((m = idRe.exec(chainSrc))) ids.push({ id: m[1], at: m.index });
for (let i = 0; i < ids.length; i++) {
  const chunk = chainSrc.slice(ids[i].at, i + 1 < ids.length ? ids[i + 1].at : chainSrc.length);
  const nameM = /name:\s*'((?:[^'\\]|\\.)*)'/.exec(chunk);
  if (nameM) live.set(`chain:${ids[i].id}|name`, nameM[1]);
  const stepRe = /steps:\s*\[([\s\S]*)\]/.exec(chunk);
  if (stepRe) {
    const steps = stepRe[1];
    // split on top-level objects
    const objs = steps.split(/\},\s*\{/);
    objs.forEach((o, idx) => {
      const t = /title:\s*'((?:[^'\\]|\\.)*)'/.exec(o);
      const c = /connection:\s*'((?:[^'\\]|\\.)*)'/.exec(o);
      if (t) live.set(`chain:${ids[i].id}|steps[${idx}].title`, t[1]);
      if (c) live.set(`chain:${ids[i].id}|steps[${idx}].connection`, c[1]);
    });
  }
}

const F = ['righteous-branch','smitten-rock-water','three-angels-seal-mark','bread-from-heaven','seventy-weeks-messiah','serpent-dragon'];
let changed = 0, unchanged = 0;
const changedRows: string[] = [];
for (const c of base.chains as Array<{ entryId: string; field: string; text: string }>) {
  const chainId = c.entryId.replace('chain:', '');
  if (!F.includes(chainId)) continue;
  const key = `${c.entryId}|${c.field}`;
  const now = live.get(key);
  if (now === undefined) { changedRows.push(`NOT-FOUND ${key}`); continue; }
  if (now !== c.text) {
    changed++; changedRows.push(`CHANGED  ${key}\n    was: ${c.text}\n    now: ${now}\n    file says: ${verdict.get(key) ?? 'not in group F file'}`);
  } else unchanged++;
}
console.log(`group F strings: ${changed + unchanged} matched · ${changed} changed by the applied pass · ${unchanged} byte-identical`);
console.log(changedRows.join('\n'));
console.log('\n--- the four strings the agent flagged ---');
for (const key of ['chain:righteous-branch|steps[4].title','chain:righteous-branch|steps[6].title','chain:righteous-branch|steps[8].connection','chain:righteous-branch|steps[10].title']) {
  const was = (base.chains as any[]).find(c => `${c.entryId}|${c.field}` === key)?.text;
  const now = live.get(key);
  console.log(`${key}\n    file says: ${verdict.get(key) ?? '?'}\n    was: ${was}\n    now: ${now}\n    ${was === now ? 'UNCHANGED' : 'CHANGED'}`);
}
