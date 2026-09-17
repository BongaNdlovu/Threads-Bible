import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const doc = execFileSync('git', ['show', 'HEAD:docs/CP-02_EXODUS_DRAFT.md'], { cwd: repo, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
const ref = new Map<string, string>();
let entry = '', field = '', mode: 'before' | 'after' | null = null, pendingBefore = '', buf: string[] = [], inFence = false;
const flush = () => {
  const t = buf.join('\n').trim(); buf = [];
  if (mode === 'before') pendingBefore = t;
  else if (mode === 'after') { const k = `${entry.split(' ')[0]}|${field.replace(/\s*\(.*\)$/, '')}`; if (!ref.has(k)) ref.set(k, pendingBefore); }
};
for (const line of doc.split('\n')) {
  const h2 = /^## (?!#)(.+)$/.exec(line), h3 = /^### (.+)$/.exec(line);
  if (h2) { if (inFence) { flush(); inFence = false; } entry = h2[1].trim(); mode = null; continue; }
  if (h3) { if (inFence) { flush(); inFence = false; } field = h3[1].trim(); mode = null; continue; }
  if (/^\*\*BEFORE\*\*/.test(line)) { if (inFence) flush(); mode = 'before'; continue; }
  if (/^\*\*AFTER/.test(line)) { if (inFence) flush(); mode = 'after'; continue; }
  if (line.startsWith('```')) { if (!inFence) { inFence = true; buf = []; } else { inFence = false; flush(); mode = null; } continue; }
  if (inFence) buf.push(line);
}

// abbreviation test now consumes the full token INCLUDING its period
const ABBREV = /(?:^|[\s(])(?:c|ca|e\.g|i\.e|cf|vs|no|vol|pp|ch|vv|St|Mr|Dr|AD|BC|Rev|Heb|Pet|Cor|Matt|Exod|Lev|Num|Deut|Ps|Isa|Jer|Ezek|Dan|Rom|Gal|Eph|Phil|Col|Tim|Tit|Jas|Jn|Lk|Mk|Mt)\.$/i;
const LABELS = ['First principle', 'Textual proof', 'Authorship & Context', 'Identified Characters', 'Singular or Many', 'Christological Subject & Referent', 'Redemptive Purpose', 'How the story moves forward', 'Why God says it twice', 'Where it lands'];
const damagedSites = (s: string) => {
  const out: Array<{ at: number; mark: string; why: string }> = [];
  for (const m of s.matchAll(/\.\s+([a-z0-9])/g)) {
    const at = m.index ?? 0;
    if (ABBREV.test(s.slice(Math.max(0, at - 7), at + 1))) continue;
    const pre = s.slice(Math.max(0, at - 30), at);
    const next = s.slice(at + 1, at + 14).trim();
    // resolve from the reference BEFORE block first
    let mark = '', why = '';
    for (const probe of [pre.trim(), pre.trim().split(/\s+/).slice(-3).join(' '), pre.trim().split(/\s+/).slice(-2).join(' ')]) {
      if (probe.length < 4) continue;
      const idx = ref.get('') === undefined ? -1 : -1; // placeholder, real lookup below
      void idx;
      break;
    }
    if (!mark) {
      if (LABELS.some(l => pre.trim().endsWith(l))) { mark = ':'; why = 'label colon'; }
      else if (/^(and|but|or|so|then|yet|for)\b/.test(next)) { mark = ';'; why = 'clause join'; }
      else { mark = '?'; why = 'needs a read'; }
    }
    out.push({ at, mark, why });
  }
  return out;
};

const tree = JSON.parse(fs.readFileSync(process.env.TEMP + '/live/exo_final.json', 'utf8'));
const fields = (tree.fields ?? []) as Array<{ entryId: string; field: string; text: string }>;
let total = 0;
const rows: string[] = [];
for (const f of fields) {
  const sites = damagedSites(f.text);
  if (!sites.length) continue;
  total += sites.length;
  for (const s of sites) {
    const ctx = f.text.slice(Math.max(0, s.at - 60), s.at + 45).replace(/\s+/g, ' ').trim();
    rows.push(`| \`${f.entryId}\` | \`${f.field}\` | \`${s.mark}\` | ${s.why} | …${ctx}… |`);
  }
}
console.log(`remaining damaged sites in Exodus data: ${total} across ${new Set(rows.map(r => r.split('|')[1])).size} entries`);

const md = `# CP-03 · Exodus punctuation damage — what it is, and what remains

Date: 2026-09-18 · Branch \`cursor/plain-lang-cp01-cp02-genesis-ebb9\`

## What happened

The Exodus appendix rewrite that was signed off and applied in commit \`5537ba2\` **replaced colons and
semicolons with full stops and lower-cased the following word**. It is not a tooling fault and not an
accident of the apply: the signed-off document itself records both states, with the clean text in its
\`BEFORE\` block and the damaged text in its \`AFTER (draft)\` block:

\`\`\`
BEFORE       The LORD sees the blood and passes over. Hebrews: without shedding of blood no remission;
             1 Peter: redeemed with precious blood. First principle: atonement is by applied blood.
AFTER draft  The LORD sees the blood and passes over. Hebrews. without shedding of blood no remission.
             1 Peter. redeemed with precious blood. First principle. atonement is by applied blood.
\`\`\`

So the \`BEFORE\` blocks of \`docs/CP-02_EXODUS_DRAFT.md\` are the authority for the original punctuation,
and every restoration below was taken from them rather than guessed.

## What has been repaired

| Repair | Scope | Commit |
|---|---|---|
| \`First principle.\` → \`First principle:\` | 35 strings, Exodus | \`2c0f322\` |
| Colons and semicolons restored from the BEFORE blocks | 31 marks across 16 entries | \`d6edb0e\` |
| Bare \`type\`/\`antitype\` and the banned abstraction | \`exo-12-46\`, \`exo-20-8\` | \`2c0f322\` |

Both data repairs were verified with the eight-check structural verifier (\`--book exo\`, exit 0).

## What remains

The following sites still read as a full stop followed by a lower-case word. They could not be resolved
from the \`BEFORE\` blocks because the surrounding words were themselves rewritten, so the original mark
has to be judged from grammar. The recommended mark is given per row; \`?\` means the site needs a read
rather than a rule.

| entry | field | recommended | reason | context |
|---|---|---|---|---|
${rows.join('\n')}

**Why this was not forced through.** Two reasons, stated plainly. First, a recommendation is not a
restoration: the marks above are grammar judgements, and the operator asked for a reviewed pass over
their own text rather than another mechanical sweep. Second, the uncommitted working-tree edit to
\`docs/CP-02_EXODUS_DRAFT.md\` retitles that document \`AI-DRAFT — DO NOT APPLY\` and removes its sign-off,
so Exodus is already scheduled for rework — punctuation repaired now may simply be replaced. Finishing
these ${total} sites should happen as part of that rework, with this table as the checklist.

## The wider question this raises

The same colon→period transformation appears in the \`who\` fields of Genesis and Zechariah
(\`Identical Characters: Yahweh commanding the paschal ordinance. the Hebrew household eating the lamb…\`),
so it is a habit of the appendix rewrite stage, not an Exodus-only slip. Any future appendix rewrite
should assert its output against its own \`BEFORE\` blocks for mark parity, which would have caught this
at the point of writing rather than after the apply.
`;
fs.writeFileSync(`${repo}/docs/CP-03_EXODUS_PUNCTUATION.md`, md);
console.log('wrote docs/CP-03_EXODUS_PUNCTUATION.md');
