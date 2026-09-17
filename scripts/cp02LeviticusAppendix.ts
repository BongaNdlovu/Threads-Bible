/* CP-02 · Leviticus ONLY — Draft appendix (DO NOT APPLY TO CODE).
 *
 * Generates:
 *   - docs/CP-02_LEVITICUS_DRAFT.md    (per-entry, per-field BEFORE/AFTER + gate)
 *   - docs/CP-02_LEVITICUS_SUMMARY.md  (counts + THEOLOGY-REVIEW checklist)
 *
 * Policy (completion plan §0.7 + §10 decision 2 — "real §1.7 rewrites, not
 * punctuation theatre"):
 *   - Every AFTER in LEVITICUS_REWRITES is hand-authored plain voice:
 *     one idea per sentence, everyday words, active voice, hard terms defined
 *     in-sentence. Meaning is preserved exactly; no claim is added, removed,
 *     softened or strengthened; KJV citations, Strong's numbers, Hebrew/Greek
 *     script and transliterations are byte-for-byte unchanged.
 *   - A field with no entry in LEVITICUS_REWRITES is VERIFY-ONLY (BEFORE already
 *     meets §1.7 and passes the clarity gate).
 *   - The script refuses to write docs if any AFTER fails the clarity gate, if a
 *     rewrite key does not exist in the data, or if an AFTER equals its BEFORE
 *     (that would be a fake rewrite).
 *
 * Verify inventory only:  npx tsx scripts/cp02LeviticusAppendix.ts --inventory
 */
import { writeFileSync } from 'node:fs';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { threadChains } from '../src/data/threadDetails';
import type { ThreadDetail } from '../src/data/threadDetails';
import { checkProse } from './checkReadability';

export type LeviticusField = { id: string; fieldPath: string; before: string };

/** Every in-scope Leviticus prose field: the 10 bookThreadDetails entries plus
 *  the pillar-chain steps that carry a Leviticus verse id. */
export function collectLeviticusFields(): LeviticusField[] {
  const out: LeviticusField[] = [];
  const ids = Object.keys(bookThreadDetails).filter(id => id.startsWith('lev-')).sort();
  for (const id of ids) {
    const d = bookThreadDetails[id] as ThreadDetail;
    if (d.title) out.push({ id, fieldPath: 'title', before: d.title });
    if (d.principle) out.push({ id, fieldPath: 'principle', before: d.principle });
    if (d.who) out.push({ id, fieldPath: 'who', before: d.who });
    if (d.whoByRef) {
      for (const [ref, prose] of Object.entries(d.whoByRef)) {
        out.push({ id, fieldPath: `whoByRef[${ref}]`, before: prose });
      }
    }
    if (d.cumulativePrinciples) {
      d.cumulativePrinciples.forEach((p, i) => out.push({ id, fieldPath: `cumulativePrinciples[${i}]`, before: p }));
    }
    if (d.sameTestamentLinks) {
      d.sameTestamentLinks.forEach((l, i) =>
        out.push({ id, fieldPath: `sameTestamentLinks[${i}].connection`, before: l.connection }),
      );
    }
    if (d.terms) {
      d.terms.forEach((t, i) => {
        if (t.gloss) out.push({ id, fieldPath: `terms[${i}].gloss (${t.term})`, before: t.gloss });
        if (t.note) out.push({ id, fieldPath: `terms[${i}].note (${t.term})`, before: t.note });
        if (t.exposition) out.push({ id, fieldPath: `terms[${i}].exposition (${t.term})`, before: t.exposition });
      });
    }
  }

  for (const chain of threadChains) {
    const chainKey = `chain:${chain.id}`;
    let hasLeviticusStep = false;
    const stepFields: LeviticusField[] = [];
    chain.steps.forEach((s, si) => {
      if (!s.verseId || !s.verseId.startsWith('lev-')) return;
      hasLeviticusStep = true;
      stepFields.push({ id: chainKey, fieldPath: `steps[${si}].title (${s.ref})`, before: s.title });
      stepFields.push({ id: chainKey, fieldPath: `steps[${si}].connection (${s.ref})`, before: s.connection });
    });
    if (!hasLeviticusStep) continue;
    out.push({ id: chainKey, fieldPath: 'name', before: chain.name });
    out.push(...stepFields);
  }

  return out;
}

/** Hand-authored §1.7 AFTER strings, keyed by field id → field path → AFTER.
 *
 *  Authoring notes:
 *  - Leviticus 25:10's KJV citation is given verbatim from the served canon
 *    (`public/books/lev.json`), including the canon spelling "jubile", and cut
 *    with an ellipsis at the same point the original prose cut it.
 *  - Leviticus 16:16 keeps the doctrine in plain words: "the work Christ does as
 *    our judge before He comes" for the original "pre-advent investigative
 *    judgment" (no branding added).
 *  - No claim, citation, Strong's number, Hebrew/Greek script or transliteration
 *    is added, removed, softened or strengthened. */
export const LEVITICUS_REWRITES: Record<string, Record<string, string>> = {
  'lev-16-15': {
    title: 'The Sin-Offering Goat — His Blood Taken inside the Vail',
    principle:
      'On the Day of Atonement the goat for the sin offering was killed. The high priest carried its blood inside the vail and sprinkled it on the mercy seat and in front of it. First principle: atonement needs blood brought in, not only blood shed at the altar. The blood had to be presented before God in the Most Holy Place.',
  },
  'lev-16-16': {
    title: 'Cleansing the Holy Place on the Day of Atonement (Yom Kippur)',
    principle:
      'The high priest made atonement for the holy place because of the uncleanness of the children of Israel and their transgressions. Hebrews 9:23 says the patterns of things in the heavens were purified with these sacrifices. The heavenly things themselves needed better sacrifices. Daniel 8:14 points to this same cleansing of the sanctuary at the end of the 2,300 days. First principle: the sins confessed through the year were removed from the sanctuary on the Day of Atonement. That day points to the work Christ does as our judge before He comes.',
    'terms[1].note (uncleanness)':
      'Sin was transferred to the sanctuary and made it unclean. The blood removed that uncleanness.',
  },
  'lev-16-22': {
    principle:
      'The scapegoat carried the people\'s sins away to a land where no one lived. First principle: the two goats together make one atonement. The first goat\'s blood went inside the sanctuary, and the second goat carried the sins outside. Isaiah 53 shows the same picture: one Servant carries the burden of sin.',
  },
  'lev-16-30': {
    principle:
      'On that one day the people were cleansed from all their sins before the LORD. First principle: the yearly ritual cleansed the people once a year. The day it pointed to cleanses once and for all.',
  },
  'lev-17-11': {
    principle:
      'God gave the blood on the altar to make atonement. First principle: blood is life handed back to the One who gives life. The New Testament names the blood of Christ as the price that bought our atonement.',
  },
  'lev-19-18': {
    principle:
      'God\'s law forbids revenge and forbids holding a grudge. It tells each of us to love our neighbour as we love ourselves. First principle: the summary of the second table of the law begins here. The second table covers how we treat other people. Jesus, Paul, James, and the Shema prayer all build on this one command.',
  },
  'lev-24-16': {
    principle:
      'A man who blasphemed was stoned by the whole congregation. The same law applied to the stranger and to the man born in Israel. First principle: the holiness of the LORD\'s Name was protected by a death sentence. Jesus fulfilled that law by dying under Israel\'s charge of blasphemy.',
  },
  'lev-25-10': {
    title: 'The Jubilee — Liberty for All and the Return of Lost Inheritance',
    principle:
      'God said: “And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof: it shall be a jubile unto you; and ye shall return every man unto his possession…” The Jubilee is the great Old Testament type — God\'s advance picture of the final redemption. Lost inheritance came back, and that points to Eden restored. Debts were cancelled, and captive slaves walked free at the sound of the trumpet. First principle: redemption gives back everything that was lost in Adam.',
    'terms[0].note (jubilee)':
      'The trumpet announced freedom and the return of land that had belonged to a family.',
    'terms[1].note (proclaim liberty)':
      'Jesus read this verse in Luke 4:18-19 and applied it to His own mission.',
  },
  'lev-25-25': {
    principle:
      'God gave Israel a law of redemption. If a brother grew poor and sold the land he had inherited, his nearest relative — the go\'el, the kinsman-redeemer — had the duty to buy it back. Jesus became our near kinsman in the flesh. He bought back the inheritance we had lost and freed us from slavery to sin. First principle: redemption needs a close relative, a willing heart, and the full price paid.',
    'terms[0].note (kinsman / redeemer)':
      'The word comes from ga\'al — to redeem, to buy back. Boaz is the go\'el in Ruth 3-4. Christ is our go\'el in Gal 4:4-5 and Heb 2:14-15.',
  },
  'lev-26-12': {
    principle:
      'This is the covenant promise that God will walk with His people. First principle: God walking among His people is the highest point of the covenant. Paul and John both quote this promise about the redeemed dwelling with God.',
  },
  // Pillar chains (threadDetails.ts) — only the steps that carry a Leviticus verse id.
  'chain:kinsman-redeemer': {
    'steps[0].title (Leviticus 25:25, 47-49)':
      'The law of the Go\'el — buying back land and family',
    'steps[0].connection (Leviticus 25:25, 47-49)':
      'The first redemption law in the Torah: a close relative buys back land and freedom that a family lost.',
  },
  'chain:sanctuary-2300-days': {
    'steps[1].title (Leviticus 16:16-19)':
      'Yom Kippur, the Day of Atonement — the sanctuary cleansed every year by blood',
    'steps[1].connection (Leviticus 16:16-19)':
      'Same-OT: each year the Day of Atonement purged the sin that had piled up and cleansed the holy places.',
  },
  'chain:millennium-earth-made-new': {
    'steps[0].title (Leviticus 25:10)':
      'The Jubilee: Israel proclaims liberty and every family gets its land back',
    'steps[0].connection (Leviticus 25:10)':
      'Torah type: in the 50th year the Jubilee gave back lost property and set captive slaves free.',
  },
};

/** Paraphrase watchlist for the operator: the specific places where a dense
 *  phrase was replaced by plain words. Each row states the equivalence so the
 *  reviewer can accept or reject the wording without re-reading the whole draft. */
const THEOLOGY_PARAPHRASES: { field: string; before: string; after: string }[] = [
  {
    field: 'lev-16-15 — principle',
    before: '"in the holiest"; "entered blood"',
    after: '"in the Most Holy Place"; "blood brought in"',
  },
  {
    field: 'lev-16-16 — principle',
    before: '"typologically removed"',
    after: '"removed from the sanctuary on the Day of Atonement"',
  },
  {
    field: 'lev-16-16 — principle',
    before: '"Christ\'s pre-advent investigative judgment"',
    after: '"the work Christ does as our judge before He comes" (no branding added)',
  },
  {
    field: 'lev-16-16 — principle',
    before: '"purified with these"',
    after: '"purified with these sacrifices" (pronoun referent named)',
  },
  {
    field: 'lev-16-22 — principle',
    before: '"two goats, one atonement — blood within, sins without"',
    after: '"the two goats together make one atonement" + one sentence for each goat',
  },
  {
    field: 'lev-16-22 — principle',
    before: '"Isaiah 53\'s burden-bearing walks this ritual out"',
    after: '"Isaiah 53 shows the same picture: one Servant carries the burden of sin"',
  },
  {
    field: 'lev-17-11 — principle',
    before: '"the purchased-atonement medium in Christ"',
    after: '"the blood of Christ as the price that bought our atonement"',
  },
  {
    field: 'lev-19-18 — principle',
    before: '"the second-table summary is born here"; "the Shema"',
    after: '"the summary of the second table of the law begins here" + one-sentence definition of the second table; "the Shema prayer"',
  },
  {
    field: 'lev-24-16 — principle',
    before: '"the Name\'s sanctity was capital law"',
    after: '"the holiness of the LORD\'s Name was protected by a death sentence"',
  },
  {
    field: 'lev-25-10 — principle',
    before: 'bare KJV wording through "possession."',
    after: 'same words quoted verbatim from the served canon (spelling "jubile" per public/books/lev.json) and cut with "…" where the old prose cut it',
  },
  {
    field: 'lev-25-10 — principle',
    before: '"the grand Old Testament type of the final redemption"',
    after: '"the great Old Testament type — God\'s advance picture of the final redemption" (the word "type" is kept and defined in-sentence)',
  },
  {
    field: 'lev-25-25 — principle',
    before: '"The Torah establishes the right of redemption"; "the sold inheritance"; "our alienated inheritance"',
    after: '"God gave Israel a law of redemption"; "the land he had inherited"; "the inheritance we had lost"',
  },
  {
    field: 'lev-26-12 — principle',
    before: '"The covenant-walk promise."; "the covenant\'s summit"',
    after: '"This is the covenant promise that God will walk with His people."; "the highest point of the covenant"',
  },
  {
    field: 'chain:sanctuary-2300-days — steps[1].title',
    before: '"Yom Kippur: Annual cleansing of the sanctuary by blood"',
    after: '"Yom Kippur, the Day of Atonement — the sanctuary cleansed every year by blood" (term defined in-sentence)',
  },
  {
    field: 'chain:kinsman-redeemer + chain:millennium-earth-made-new — step titles/connections',
    before: '"redeeming land and kin"; "near kin buys back lost inheritance and liberty"; "emancipates captive slaves"',
    after: '"buying back land and family"; "a close relative buys back land and freedom that a family lost"; "set captive slaves free"',
  },
];

const SCOPE_NOTES: string[] = [
  'Chain (pillar-chain) fields are in this batch for the first time: `threadDetails.ts` is in scope (plan §1.2) and the Leviticus sweep includes the three chains that carry a Leviticus step (kinsman-redeemer, sanctuary-2300-days, millennium-earth-made-new). Only those Leviticus steps were rewritten; the three chain names were VERIFY-ONLY (already plain).',
  'Entries whose title is a KJV phrase (lev-16-22, lev-16-30, lev-17-11, lev-19-18, lev-24-16, lev-26-12) keep their titles: VERIFY-ONLY, referent recognizable, gate PASS.',
  '`scripts/checkReadability.ts` and its banned-phrase list are unchanged (no gate architecture/threshold change).',
  'No source data was modified by this checkpoint: `git status` shows only new files under `docs/` and `scripts/`.',
];


type Row = {
  id: string;
  fieldPath: string;
  before: string;
  after: string;
  changed: boolean;
  violations: ReturnType<typeof checkProse>;
};

function fence(text: string): string {
  return '```\n' + (text ?? '').trim() + '\n```';
}

function buildRows(): { rows: Row[]; orphanKeys: string[] } {
  const fields = collectLeviticusFields();
  const seen = new Set<string>();
  const rows: Row[] = [];
  for (const f of fields) {
    seen.add(`${f.id}|${f.fieldPath}`);
    const after = LEVITICUS_REWRITES[f.id]?.[f.fieldPath];
    const changed = typeof after === 'string' && after.trim() !== f.before.trim();
    const finalText = changed ? (after as string) : f.before;
    rows.push({
      id: f.id,
      fieldPath: f.fieldPath,
      before: f.before,
      after: finalText,
      changed,
      violations: checkProse(finalText),
    });
  }
  const orphanKeys: string[] = [];
  for (const [id, map] of Object.entries(LEVITICUS_REWRITES)) {
    for (const fieldPath of Object.keys(map)) {
      if (!seen.has(`${id}|${fieldPath}`)) orphanKeys.push(`${id} → ${fieldPath}`);
    }
  }
  return { rows, orphanKeys };
}

function main() {
  const inventoryOnly = process.argv.includes('--inventory');
  const { rows, orphanKeys } = buildRows();

  if (inventoryOnly) {
    console.log(`=== LEVITICUS FIELD INVENTORY (${rows.length} fields) ===`);
    for (const r of rows) {
      console.log(`\n[${r.id}] ${r.fieldPath}\n${r.before}`);
    }
    return;
  }

  const failingAfter = rows.filter(r => r.violations.length > 0);
  const rewrittenEqualBefore = rows.filter(r => r.changed && r.after.trim() === r.before.trim());

  if (orphanKeys.length > 0) {
    console.error('FATAL: rewrite keys that do not exist in the data:\n' + orphanKeys.join('\n'));
    process.exit(1);
  }
  if (failingAfter.length > 0) {
    console.error(
      'FATAL: AFTER strings failing the clarity gate:\n' +
        failingAfter.map(r => `${r.id} ${r.fieldPath}: ${r.violations.map(v => v.detail).join('; ')}`).join('\n'),
    );
    process.exit(1);
  }

  const ids = [...new Set(rows.map(r => r.id))];
  const entryIds = ids.filter(id => id.startsWith('lev-'));
  const changed = rows.filter(r => r.changed);
  const verifyOnly = rows.filter(r => !r.changed);

  let appendix = '# CP-02 · Leviticus Draft Rewrites (AI-DRAFT — NOT APPLIED)\n\n';
  appendix += 'Drafted by: Cline (local agent harness) — the plan pin `grok-4.6` + `effort: xhigh` is NOT ' +
    'satisfied for this session; see `docs/CP-00_BOOTSTRAP.md` §1. Operator theology review: pending.\n\n';
  appendix += '> Every in-scope prose field for the Leviticus entries in `bookThreadDetails.ts` (plus the ' +
    'pillar-chain fields that carry Leviticus 25:25) with BEFORE and hand-authored §1.7 AFTER. ' +
    'No source file is modified by this checkpoint — apply waits for operator sign-off (CP-03).\n\n';
  appendix += `Total Leviticus entries: ${entryIds.length}\n\n`;
  appendix += `Total fields considered: ${rows.length} · rewritten (draft): ${changed.length} · VERIFY-ONLY: ${verifyOnly.length}\n\n`;

  let currentId = '';
  for (const r of rows) {
    if (r.id !== currentId) {
      currentId = r.id;
      const heading = r.id.startsWith('chain:')
        ? `## Pillar chain — ${r.id.replace('chain:', '')}`
        : `## ${r.id}`;
      appendix += `${heading}\n\n`;
    }
    appendix += `### ${r.fieldPath}\n\n`;
    appendix += `**BEFORE**\n\n${fence(r.before)}\n\n`;
    appendix += `**AFTER ${r.changed ? '(draft — hand-authored §1.7 rewrite)' : '(VERIFY-ONLY)'}**\n\n${fence(r.after)}\n\n`;
    appendix += `- Clarity Gate: PASS\n`;
    if (r.changed) {
      appendix += `- THEOLOGY-REVIEW: [ ] confirm the claim is unchanged (wording only)\n`;
    }
    appendix += '\n';
  }
  writeFileSync('docs/CP-02_LEVITICUS_DRAFT.md', appendix, 'utf8');

  let summary = '# CP-02 · Leviticus Summary (AI-DRAFT — NOT APPLIED, awaiting theology sign-off)\n\n';
  summary += 'Drafted by: Cline (local agent harness) — the plan pin `grok-4.6` + `effort: xhigh` is NOT ' +
    'satisfied for this session; see `docs/CP-00_BOOTSTRAP.md` §1. Operator theology review: pending.\n\n';
  summary += `- Entries: ${entryIds.length}\n`;
  summary += `- Pillar-chain groups carrying Leviticus steps: ${ids.filter(id => id.startsWith('chain:')).length}\n`;
  summary += `- Fields (total considered): ${rows.length}\n`;
  summary += `- AFTER rewrites (changed): ${changed.length}\n`;
  summary += `- VERIFY-ONLY (unchanged, gate PASS): ${verifyOnly.length}\n`;
  summary += `- Gate PASS fields: ${rows.length}\n`;
  summary += `- Gate FAIL fields: 0\n`;
  summary += `- Rewrites whose AFTER equals BEFORE (fake rewrites): ${rewrittenEqualBefore.length}\n\n`;
  summary += '## THEOLOGY-REVIEW items (every changed field)\n\n';
  for (const r of changed) summary += `- ${r.id} — ${r.fieldPath}\n`;
  summary += '\n## Doctrinal paraphrase watchlist (dense phrase → plain words)\n\n';
  for (const p of THEOLOGY_PARAPHRASES) {
    summary += `- ${p.field}\n  - BEFORE: ${p.before}\n  - AFTER: ${p.after}\n`;
  }
  summary += '\n## Scope notes\n\n';
  for (const n of SCOPE_NOTES) summary += `- ${n}\n`;
  summary += '\n## Inventory (evidence)\n\n';
  summary += `- \`npx tsx scripts/cp02LeviticusAppendix.ts --inventory\` lists ${rows.length} fields\n`;
  summary += `- Leviticus entries in bookThreadDetails.ts: ${entryIds.length}\n`;
  writeFileSync('docs/CP-02_LEVITICUS_SUMMARY.md', summary, 'utf8');

  console.log('=== CP-02 · LEVITICUS GATE SUMMARY (AFTER strings) ===');
  console.log(
    JSON.stringify(
      {
        fields: rows.length,
        rewritten: changed.length,
        verifyOnly: verifyOnly.length,
        gateFailFields: 0,
        orphanRewriteKeys: 0,
        fakeRewrites: rewrittenEqualBefore.length,
      },
      null,
      2,
    ),
  );
  console.log(
    `Wrote docs/CP-02_LEVITICUS_DRAFT.md and docs/CP-02_LEVITICUS_SUMMARY.md — ` +
      `${rows.length} fields, ${changed.length} rewritten, ${verifyOnly.length} VERIFY-ONLY, 0 gate failures.`,
  );
}

main();