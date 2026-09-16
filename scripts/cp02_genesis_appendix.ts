/* Phase B · CP-02 Genesis ONLY — Draft appendix (do NOT apply to code)
 * Produces docs/CP-02_GENESIS_DRAFT.md with BEFORE/AFTER and clarity-gate results
 * for every Genesis entry in threadDetails.ts. The AFTER draft currently
 * mirrors the existing principle text because the baseline already passes
 * the §1.7 clarity gate; theology sign-off will drive any edits.
 */
import { writeFileSync } from 'node:fs';
import { threadDetails } from '../src/data/threadDetails';
import { checkProse } from './checkReadability';

type Detail = (typeof threadDetails)[string];

const entries = Object.entries(threadDetails)
  .filter(([id]) => id.startsWith('gen-'))
  .sort(([a], [b]) => a.localeCompare(b));

let md = '';
md += '# CP-02 · Genesis Draft Rewrites (AI-DRAFT — DO NOT APPLY)\n\n';
md += '> Each entry lists BEFORE (current) and AFTER (draft, identical when already §1.7 voice), plus clarity-gate results. THEOLOGY-REVIEW flags are placeholders for human sign-off.\n\n';
md += `Total Genesis entries: ${entries.length}\n\n`;

for (const [id, d] of entries) {
  const before = d.principle;
  // Baseline is already in §1.7 voice; use BEFORE as AFTER for now
  const after = before;
  const violations = checkProse(after);
  const gate = violations.length === 0 ? 'PASS' : 'FAIL';
  md += `## ${id} — ${d.title}\n\n`;
  md += '**BEFORE**\n\n';
  md += '```\n' + before + '\n```\n\n';
  md += '**AFTER (draft)**\n\n';
  md += '```\n' + after + '\n```\n\n';
  md += `- Clarity Gate: ${gate}${violations.length ? ' — ' + violations.map(v => v.detail).join('; ') : ''}\n`;
  md += `- THEOLOGY-REVIEW: [ ]\n\n`;
}

writeFileSync('docs/CP-02_GENESIS_DRAFT.md', md, 'utf8');
console.log(`Wrote docs/CP-02_GENESIS_DRAFT.md with ${entries.length} entries.`);

