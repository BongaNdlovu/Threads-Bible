/* Phase B · CP-02 Genesis ONLY — Draft appendix (DO NOT APPLY TO CODE)
 * Produces docs/CP-02_GENESIS_DRAFT.md with BEFORE/AFTER and clarity-gate results
 * for every Genesis entry in threadDetails.ts, plus pillar ThreadChains.
 * AFTER strings are VERIFY-ONLY (identical) when they already pass the gate;
 * when a field fails the gate, this script proposes a meaning-preserving
 * rewrite that splits long sentences without changing claims or citations.
 */
import { writeFileSync } from 'node:fs';
import { threadDetails, threadChains, ThreadDetail } from '../src/data/threadDetails';
import { checkProse, ProseViolation } from './checkReadability';

type Detail = (typeof threadDetails)[string];

const GENESIS_IDS = Object.keys(threadDetails).filter(id => id.startsWith('gen-')).sort();
const GOLDEN_VERIFY_ONLY = new Set(['gen-1-1', 'gen-2-2', 'gen-2-3']);

function proposeRewrite(id: string, fieldPath: string, before: string): string {
  // Targeted hand rewrites for the only known failing fields (scanGenesisProse.ts)
  if (id === 'gen-1-1' && fieldPath === 'terms[0].exposition') {
    return 'In Genesis 1:1 בָּרָא (baraʾ, Qal perfect 3ms) takes God alone as subject and names the origin of “the heaven and the earth” without a pre‑existing substrate. The verse is not a generic “making” (עָשָׂה, ʿasah) of already‑present stuff, nor a craftsman’s forming (יָצַר, yatsar); it is the absolute beginning of the created order by a personal Speaker. John 1:3 then interprets that act through the Word. All things ἐγένετο (came into being) through Him, and χωρὶς αὐτοῦ not even one thing that has come into being came to be. Thus the Genesis verb’s God‑only subject is identified as the Son, without making the Son a creature.';
  }
  if (id === 'gen-1-1' && fieldPath === 'terms[2].exposition') {
    return 'Hebrews 11:3 says τοὺς αἰῶνας κατηρτίσθαι ῥήματι Θεοῦ — the ages/worlds were framed (perfect passive of καταρτίζω: fitted, ordered, put in working order) by God’s spoken utterance. It adds: εἰς τὸ μὴ ἐκ φαινομένων τὰ βλεπόμενα γεγονέναι (so that what is seen has not come from things that appear). In this thread the phrase is not a philosophical footnote on “ages” in the abstract; it is the Genesis 1 cosmos and its successive ages viewed from the side of faith. The same Word John names as ὁ Λόγος is here the ῥῆμα that frames all that Moses said God created. Visible empires are less substantial than the unseen word that made them.';
  }
  // Default: return original (VERIFY-ONLY) — this function only handles known fails
  return before;
}

function gateLabel(violations: ProseViolation[]): string {
  return violations.length === 0
    ? 'PASS'
    : `FAIL — ${violations.map(v => v.detail).join('; ')}`;
}

function fence(text: string): string {
  return '```\n' + (text ?? '').trim() + '\n```';
}

function processDetail(id: string, d: ThreadDetail) {
  const sections: string[] = [];
  // Title
  {
    const field = 'title';
    const before = d.title ?? '';
    const after = before;
    const v = checkProse(after);
    const verifyOnly = v.length === 0;
    sections.push(`### Title\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
  }
  // Principle
  {
    const field = 'principle';
    const before = d.principle ?? '';
    const after = before;
    const v = checkProse(after);
    const verifyOnly = v.length === 0;
    sections.push(`### Principle\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
  }
  // Who
  if (d.who) {
    const before = d.who;
    const after = before;
    const v = checkProse(after);
    const verifyOnly = v.length === 0;
    sections.push(`### Who\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
  }
  // Who by ref
  if (d.whoByRef) {
    for (const [ref, prose] of Object.entries(d.whoByRef)) {
      const before = prose;
      const after = before;
      const v = checkProse(after);
      const verifyOnly = v.length === 0;
      sections.push(`### Who by Ref — ${ref}\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
    }
  }
  // Cumulative principles
  if (d.cumulativePrinciples && d.cumulativePrinciples.length > 0) {
    d.cumulativePrinciples.forEach((cp, i) => {
      const before = cp;
      const after = before;
      const v = checkProse(after);
      const verifyOnly = v.length === 0;
      sections.push(`### Cumulative Principle [${i + 1}]\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
    });
  }
  // Same-testament links
  if (d.sameTestamentLinks && d.sameTestamentLinks.length > 0) {
    d.sameTestamentLinks.forEach((link, i) => {
      const before = link.connection ?? '';
      const after = before;
      const v = checkProse(after);
      const verifyOnly = v.length === 0;
      sections.push(`### Same-Testament Link [${i + 1}] — ${link.ref}\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
    });
  }
  // Terms
  if (d.terms && d.terms.length > 0) {
    d.terms.forEach((t, i) => {
      const termHeader = `### Term [${i + 1}] — ${t.term}`;
      const blocks: string[] = [];
      if (t.gloss) {
        const before = t.gloss;
        const after = before;
        const v = checkProse(after);
        const verifyOnly = v.length === 0;
        blocks.push(`#### Gloss\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
      }
      if (t.note) {
        const before = t.note;
        const after = before;
        const v = checkProse(after);
        const verifyOnly = v.length === 0;
        blocks.push(`#### Note\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n`);
      }
      // exposition is present on many term entries in data
      if ((t as any).exposition) {
        const before = (t as any).exposition as string;
        let after = before;
        let v = checkProse(after);
        if (v.length > 0) {
          const fieldPath = `terms[${i}].exposition`;
          after = proposeRewrite(id, fieldPath, before);
          v = checkProse(after);
        }
        const verifyOnly = v.length === 0 && before === after;
        const label = verifyOnly ? '(VERIFY-ONLY)' : '(draft)';
        const theologyFlag = before === after ? '- THEOLOGY-REVIEW: [ ]' : '- THEOLOGY-REVIEW: [ ] (sentence split for clarity; confirm meaning unchanged)';
        blocks.push(`#### Exposition\n\n**BEFORE**\n\n${fence(before)}\n\n**AFTER ${label}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n${theologyFlag}\n`);
      }
      if (blocks.length > 0) {
        sections.push(`${termHeader}\n\n${blocks.join('\n')}`);
      }
    });
  }
  return sections.join('\n');
}

let md = '';
md += '# CP-02 · Genesis Draft Rewrites (AI-DRAFT — DO NOT APPLY)\n\n';
md += '> For each Genesis entry: BEFORE (current) and AFTER (draft or VERIFY-ONLY) for every in-scope prose field, with clarity-gate results. Draft changes split long sentences only; no new claims or citations. Operator theology sign-off is required before CP-03 apply.\n\n';
md += `Total Genesis entries: ${GENESIS_IDS.length}\n\n`;

for (const id of GENESIS_IDS) {
  const d = threadDetails[id] as ThreadDetail;
  md += `## ${id} — ${d.title}\n\n`;
  md += processDetail(id, d);
  md += '\n';
}

// Pillar Chains
md += '\n# Pillar ThreadChains (VERIFY-ONLY unless a field fails the gate)\n\n';
for (const chain of threadChains) {
  md += `## Chain: ${chain.name} (id: ${chain.id})\n\n`;
  // Chain name
  {
    const before = chain.name;
    const after = before;
    const v = checkProse(after);
    const verifyOnly = v.length === 0;
    md += `**Name — BEFORE**\n\n${fence(before)}\n\n**AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}**\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n\n`;
  }
  chain.steps.forEach((s, i) => {
    md += `### Step ${i + 1}: ${s.ref}${s.verseId ? ` (id: ${s.verseId})` : ''}\n\n`;
    if (s.title) {
      const before = s.title;
      const after = before;
      const v = checkProse(after);
      const verifyOnly = v.length === 0;
      md += `- Title — BEFORE\n\n${fence(before)}\n\n- AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n\n`;
    }
    if (s.connection) {
      const before = s.connection;
      const after = before;
      const v = checkProse(after);
      const verifyOnly = v.length === 0;
      md += `- Connection — BEFORE\n\n${fence(before)}\n\n- AFTER ${verifyOnly ? '(VERIFY-ONLY)' : '(draft)'}\n\n${fence(after)}\n\n- Clarity Gate: ${gateLabel(v)}\n\n`;
    }
  });
}

writeFileSync('docs/CP-02_GENESIS_DRAFT.md', md, 'utf8');
console.log(`Wrote docs/CP-02_GENESIS_DRAFT.md with ${GENESIS_IDS.length} Genesis entries and ${threadChains.length} chains.`);

