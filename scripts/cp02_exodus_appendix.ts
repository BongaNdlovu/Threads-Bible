/* CP-02 · Exodus ONLY — Draft appendix (DO NOT APPLY TO CODE)
 * Generates:
 *   - docs/CP-02_EXODUS_DRAFT.md  (per-entry, per-field BEFORE/AFTER + gate)
 *   - docs/CP-02_EXODUS_SUMMARY.md (counts and review checklist)
 *
 * Policy:
 * - Prefer real §1.7 plain-language AFTER where prose is dense/academic by
 *   splitting long/compound sentences (no new claims, no citation changes).
 * - VERIFY-ONLY only when BEFORE already meets §1.7 and passes the clarity gate.
 */
import { writeFileSync } from 'node:fs';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import type { ThreadDetail } from '../src/data/threadDetails';
import { checkProse, ProseViolation } from './checkReadability';

type FieldResult = {
  fieldPath: string;
  before: string;
  after: string;
  violations: ProseViolation[];
  changed: boolean;
};

const exodusEntries = Object.entries(bookThreadDetails)
  .filter(([id]) => id.startsWith('exo-'))
  .sort(([a], [b]) => a.localeCompare(b));

function fence(text: string): string {
  return '```\n' + (text ?? '').trim() + '\n```';
}

function cleanSpaces(s: string): string {
  return s.replace(/\s+/g, ' ').replace(/\s+\./g, '.').trim();
}

function splitCompound(text: string): string {
  // Split em dashes and semicolons into sentence boundaries.
  let out = text
    .replace(/\s+—\s+/g, '. ')
    .replace(/;\s+/g, '. ')
    .replace(/:\s+(?=[a-z])/g, '. ') // soft colon split when followed by lowercase prose
    .replace(/\)\s*,\s+/g, ') ') // avoid comma-clause chains after parens
    .replace(/\.\s*\.\s*/g, '. '); // normalize stray dots
  // Ensure trailing period for non-empty text without terminal punctuation.
  out = out.replace(/\s*([^.?!…])$/u, '$1.');
  return cleanSpaces(out);
}

function maybeRewrite(fieldPath: string, before: string): { after: string; changed: boolean } {
  if (!before || !before.trim()) return { after: before ?? '', changed: false };
  const v = checkProse(before);
  const needsSplit = v.some(vi => vi.kind === 'long-sentence');
  const isTarget =
    /^(principle|who($|ByRef)|sameTestamentLinks|\w+exposition)/.test(fieldPath) ||
    before.length > 220 ||
    /[—;:]/.test(before);

  if (needsSplit || isTarget) {
    const candidate = splitCompound(before);
    if (candidate !== before) {
      return { after: candidate, changed: true };
    }
  }
  return { after: before, changed: false };
}

function processDetail(id: string, d: ThreadDetail): FieldResult[] {
  const out: FieldResult[] = [];

  // Title
  if (d.title) {
    const before = d.title;
    const { after, changed } = maybeRewrite('title', before);
    out.push({ fieldPath: 'title', before, after, violations: checkProse(after), changed });
  }

  // Principle
  if (d.principle) {
    const before = d.principle;
    const { after, changed } = maybeRewrite('principle', before);
    out.push({ fieldPath: 'principle', before, after, violations: checkProse(after), changed });
  }

  // Who
  if (d.who) {
    const before = d.who;
    const { after, changed } = maybeRewrite('who', before);
    out.push({ fieldPath: 'who', before, after, violations: checkProse(after), changed });
  }

  // Who by ref
  if (d.whoByRef) {
    for (const [ref, prose] of Object.entries(d.whoByRef)) {
      const before = prose;
      const { after, changed } = maybeRewrite(`whoByRef[${ref}]`, before);
      out.push({
        fieldPath: `whoByRef[${ref}]`,
        before,
        after,
        violations: checkProse(after),
        changed,
      });
    }
  }

  // Cumulative principles
  if (d.cumulativePrinciples && d.cumulativePrinciples.length > 0) {
    d.cumulativePrinciples.forEach((cp, i) => {
      const before = cp;
      const { after, changed } = maybeRewrite(`cumulativePrinciples[${i}]`, before);
      out.push({
        fieldPath: `cumulativePrinciples[${i}]`,
        before,
        after,
        violations: checkProse(after),
        changed,
      });
    });
  }

  // Same-testament links
  if (d.sameTestamentLinks && d.sameTestamentLinks.length > 0) {
    d.sameTestamentLinks.forEach((link, i) => {
      const before = link.connection ?? '';
      const { after, changed } = maybeRewrite(`sameTestamentLinks[${i}].connection`, before);
      out.push({
        fieldPath: `sameTestamentLinks[${i}].connection (${link.ref})`,
        before,
        after,
        violations: checkProse(after),
        changed,
      });
    });
  }

  // Terms: gloss, note, exposition
  if (d.terms) {
    d.terms.forEach((t, i) => {
      if (t.gloss) {
        const before = t.gloss;
        const { after, changed } = maybeRewrite(`terms[${i}].gloss`, before);
        out.push({
          fieldPath: `terms[${i}].gloss (${t.term})`,
          before,
          after,
          violations: checkProse(after),
          changed,
        });
      }
      if (t.note) {
        const before = t.note;
        const { after, changed } = maybeRewrite(`terms[${i}].note`, before);
        out.push({
          fieldPath: `terms[${i}].note (${t.term})`,
          before,
          after,
          violations: checkProse(after),
          changed,
        });
      }
      if ((t as any).exposition) {
        const before = (t as any).exposition as string;
        const { after, changed } = maybeRewrite(`terms[${i}].exposition`, before);
        out.push({
          fieldPath: `terms[${i}].exposition (${t.term})`,
          before,
          after,
          violations: checkProse(after),
          changed,
        });
      }
    });
  }

  return out;
}

// Build appendix and summary
let appendix = '';
appendix += '# CP-02 · Exodus Draft Rewrites (AI-DRAFT — DO NOT APPLY)\n\n';
appendix += '> BEFORE (current) and AFTER (draft or VERIFY-ONLY) for every in-scope prose field of each Exodus entry in `bookThreadDetails`. AFTER prefers plain-language sentence splits; citations and original-language content are preserved. Operator theology sign-off is required before CP-03 apply.\n\n';
appendix += `Total Exodus entries: ${exodusEntries.length}\n\n`;

let totalFields = 0;
let changedFields = 0;
let verifyOnlyFields = 0;
let gatePass = 0;
let gateFail = 0;
const theologyFlags: { id: string; field: string }[] = [];

for (const [id, d] of exodusEntries) {
  appendix += `## ${id} — ${d.title}\n\n`;
  const results = processDetail(id, d as ThreadDetail);
  for (const r of results) {
    totalFields++;
    const pass = r.violations.length === 0;
    if (r.changed) changedFields++;
    else if (pass) verifyOnlyFields++;
    if (pass) gatePass++;
    else gateFail++;
    appendix += `### ${r.fieldPath}\n\n`;
    appendix += `**BEFORE**\n\n${fence(r.before)}\n\n`;
    appendix += `**AFTER ${r.changed ? '(draft)' : '(VERIFY-ONLY)'}**\n\n${fence(r.after)}\n\n`;
    appendix += `- Clarity Gate: ${pass ? 'PASS' : 'FAIL — ' + r.violations.map(v => v.detail).join('; ')}\n`;
    if (r.changed) {
      appendix += `- THEOLOGY-REVIEW: [ ] (sentence split for clarity; confirm meaning unchanged)\n`;
      theologyFlags.push({ id, field: r.fieldPath });
    }
    appendix += '\n';
  }
}

writeFileSync('docs/CP-02_EXODUS_DRAFT.md', appendix, 'utf8');

let summary = '';
summary += '# CP-02 · Exodus Summary (Draft — DO NOT APPLY)\n\n';
summary += `- Entries: ${exodusEntries.length}\n`;
summary += `- Fields (total considered): ${totalFields}\n`;
summary += `- AFTER rewrites (changed): ${changedFields}\n`;
summary += `- VERIFY-ONLY (unchanged, gate PASS): ${verifyOnlyFields}\n`;
summary += `- Gate PASS fields: ${gatePass}\n`;
summary += `- Gate FAIL fields: ${gateFail}\n\n`;
summary += '## THEOLOGY-REVIEW items (changed fields)\n\n';
if (theologyFlags.length === 0) {
  summary += '- None\n';
} else {
  for (const t of theologyFlags) {
    summary += `- ${t.id} — ${t.field}\n`;
  }
}

// Inventory evidence
summary += '\n## Inventory (evidence)\n\n';
summary += `- Exodus entries in bookThreadDetails.ts: ${exodusEntries.length}\n`;

writeFileSync('docs/CP-02_EXODUS_SUMMARY.md', summary, 'utf8');

console.log(`Wrote docs/CP-02_EXODUS_DRAFT.md and docs/CP-02_EXODUS_SUMMARY.md for ${exodusEntries.length} Exodus entries.`);

