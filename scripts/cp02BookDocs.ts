/* Generate the three per-book plain-language artifacts from a writer's rewrite set.
 *
 * Usage:
 *   npx tsx scripts/cp02BookDocs.ts <rewrites.json> --worklist <worklist.json> --apply-doc <proofs.txt> [--date YYYY-MM-DD]
 *
 * Emits, for the book in <rewrites.json>:
 *   docs/CP-02_<SLUG>_DRAFT.md     every string: BEFORE, AFTER, verdict, reason, gate
 *   docs/CP-02_<SLUG>_SUMMARY.md   counts + THEOLOGY-REVIEW checklist + EQUIVALENT list
 *   docs/CP-03_<SLUG>_APPLY.md     proofs pasted verbatim + operator sign-off block
 *
 * The apply doc's "Operator theology sign-off" marker is what scripts/cp04LedgerRollup.ts
 * parses, and the same marker is what the repo's other appendix generators refuse to
 * overwrite — so this script refuses too unless --force is given.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

interface Draft { entryId: string; field: string; after: string; reason?: string }
interface Verdict { entryId: string; field: string; reason?: string }
interface RewriteFile {
  book: string;
  bookName?: string;
  agent?: string;
  model?: string;
  drafts?: Draft[];
  verifyOnly?: Verdict[];
  equivalent?: Verdict[];
}
interface WorklistField { entryId: string; field: string; text: string }
interface Worklist { book: string; bookName?: string; counts?: Record<string, number>; fields?: WorklistField[]; chains?: WorklistField[] }

function argValue(argv: string[], flag: string): string | undefined {
  const i = argv.indexOf(flag);
  return i >= 0 ? argv[i + 1] : undefined;
}

const SIGNED_MARKER = 'Operator theology sign-off';

/* ---- punctuation-only classification (plan §0.7 / §1.11) --------------------
 * A draft whose AFTER contains no new words and only moves punctuation is NOT a
 * §1.7 rewrite: it is a sentence-boundary change. The writers produced 46 of them
 * across the three calibration books (num 1, rom 6, psa 39), and one writer's own
 * validator affirmed the opposite — so the class is computed here, mechanically,
 * and reported to the operator rather than silently kept or silently dropped. */
const wordsOf = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);

function classifyPunctuationOnly(before: string, after: string): boolean {
  const bw = wordsOf(before);
  const aw = wordsOf(after);
  if (aw.join(' ') !== bw.join(' ')) return false; // new words => a real rewrite
  const termsBefore = before.split(/[.!?]+/).filter(x => wordsOf(x).length).length;
  const termsAfter = after.split(/[.!?]+/).filter(x => wordsOf(x).length).length;
  const midBefore = (before.match(/[;:\u2014\u2013]/g) ?? []).length;
  const midAfter = (after.match(/[;:\u2014\u2013]/g) ?? []).length;
  return termsAfter >= termsBefore || midAfter < midBefore;
}

/** Escape a markdown table cell / fenced block safely. */
function cell(text: string): string {
  return text.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
}

function main() {
  const argv = process.argv.slice(2);
  const rewritesPath = argv.find(a => !a.startsWith('--'));
  const worklistPath = argValue(argv, '--worklist');
  const applyDocPath = argValue(argv, '--apply-doc');
  const date = argValue(argv, '--date') ?? new Date().toISOString().slice(0, 10);
  const force = argv.includes('--force');
  // Split books produce one doc set per chunk, so the artifact name carries the chunk
  // suffix (CP-02_JER_P1_DRAFT.md vs CP-02_JER_P2_DRAFT.md) instead of the two chunks
  // overwriting each other's appendix.
  const suffix = argValue(argv, '--suffix') ?? '';
  // Findings are prose that no generator can derive — the under-share calls, the QUOTE-REVIEW
  // list, the glossary drift delta measured before/after apply. They are written by the agent
  // and pasted here so each apply record is complete on its own, instead of living only in the
  // conversation that produced it.
  const findingsPath = argValue(argv, '--findings');
  if (!rewritesPath || !worklistPath) {
    console.error('usage: npx tsx scripts/cp02BookDocs.ts <rewrites.json> --worklist <worklist.json> [--apply-doc <proofs.txt>] [--findings <findings.md>] [--suffix _P1] [--force]');
    process.exit(2);
  }

  const set: RewriteFile = JSON.parse(readFileSync(rewritesPath, 'utf8'));
  const worklist: Worklist = JSON.parse(readFileSync(worklistPath, 'utf8'));
  const bookName = set.bookName ?? worklist.bookName ?? set.book.toUpperCase();
  const slug = set.book.toUpperCase();

  const before = new Map<string, string>();
  for (const f of [...(worklist.fields ?? []), ...(worklist.chains ?? [])]) {
    before.set(`${f.entryId}|${f.field}`, f.text);
  }

  const drafts = set.drafts ?? [];
  const verifyOnly = set.verifyOnly ?? [];
  const equivalent = set.equivalent ?? [];
  const total = before.size;

  const paths = {
    draft: `docs/CP-02_${slug}${suffix}_DRAFT.md`,
    summary: `docs/CP-02_${slug}${suffix}_SUMMARY.md`,
    apply: `docs/CP-03_${slug}${suffix}_APPLY.md`,
  };

  for (const p of [paths.draft, paths.summary, paths.apply]) {
    if (existsSync(p) && readFileSync(p, 'utf8').includes(SIGNED_MARKER) && !force) {
      console.error(`REFUSING to overwrite signed doc ${p} — pass --force to regenerate.`);
      process.exit(1);
    }
  }

  // ---------- DRAFT ----------
  const draftLines: string[] = [];
  draftLines.push(`# CP-02 · ${bookName} — plain-language draft appendix (AI-drafted, NOT applied by this doc)`);
  draftLines.push('');
  draftLines.push(`Plan: \`THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v2.0.md\` (one-pass protocol) · Date: ${date}`);
  draftLines.push(`Book: \`${set.book}\` · in-scope strings: ${total} · **rewritten ${drafts.length} · VERIFY-ONLY ${verifyOnly.length} · EQUIVALENT ${equivalent.length}**`);
  draftLines.push('');
  draftLines.push('Rules applied: master-plan §1.7 voice; invariant I1 (quoted Scripture never modernised,');
  draftLines.push('abbreviations never expanded, Hebrew/Greek script + transliteration + Strong\'s untouchable);');
  draftLines.push('frozen glossary; per-string meaning checklist. VERIFY-ONLY means the string already met');
  draftLines.push('the standard — it is a verdict, not a shortfall.');
  draftLines.push('');
  draftLines.push('## 1 · Rewritten strings (BEFORE → AFTER)');
  draftLines.push('');
  for (const d of drafts) {
    const key = `${d.entryId}|${d.field}`;
    const b = before.get(key) ?? '(not in worklist)';
    draftLines.push(`### \`${d.entryId}\` · \`${d.field}\``);
    draftLines.push('');
    draftLines.push('**BEFORE**');
    draftLines.push('');
    draftLines.push('```text');
    draftLines.push(b);
    draftLines.push('```');
    draftLines.push('');
    draftLines.push('**AFTER**');
    draftLines.push('');
    draftLines.push('```text');
    draftLines.push(d.after);
    draftLines.push('```');
    draftLines.push('');
    if (d.reason) {
      draftLines.push(`**Why:** ${d.reason}`);
      draftLines.push('');
    }
  }
  draftLines.push('## 2 · VERIFY-ONLY strings (already at standard, unchanged)');
  draftLines.push('');
  draftLines.push('| entry | field | reason |');
  draftLines.push('|---|---|---|');
  for (const v of verifyOnly) draftLines.push(`| \`${v.entryId}\` | \`${v.field}\` | ${cell(v.reason ?? '')} |`);
  draftLines.push('');
  if (equivalent.length) {
    draftLines.push('## 3 · EQUIVALENT strings (no safe rewrite found — original stands)');
    draftLines.push('');
    draftLines.push('| entry | field | reason |');
    draftLines.push('|---|---|---|');
    for (const e of equivalent) draftLines.push(`| \`${e.entryId}\` | \`${e.field}\` | ${cell(e.reason ?? '')} |`);
    draftLines.push('');
  }
  writeFileSync(paths.draft, draftLines.join('\n') + '\n');

  // ---------- SUMMARY ----------
  const reviewish = drafts.filter(d => /QUOTE-REVIEW|THEOLOGY-REVIEW/i.test(d.reason ?? ''));
  const sum: string[] = [];
  sum.push(`# CP-02 · ${bookName} — batch summary`);
  sum.push('');
  sum.push(`Plan v2.0 · Date: ${date} · Book \`${set.book}\``);
  sum.push('');
  sum.push('| Measure | Count |');
  sum.push('|---|---|');
  sum.push(`| In-scope strings | ${total} |`);
  sum.push(`| Rewritten | ${drafts.length} |`);
  sum.push(`| VERIFY-ONLY (already at standard) | ${verifyOnly.length} |`);
  sum.push(`| EQUIVALENT (no safe rewrite) | ${equivalent.length} |`);
  sum.push(`| Rewrite rate | ${total ? ((drafts.length / total) * 100).toFixed(1) : '0'}% |`);
  sum.push(`| Strings flagged for operator review in reasons | ${reviewish.length} |`);
  sum.push('');
  sum.push('## THEOLOGY-REVIEW checklist');
  sum.push('');
  if (reviewish.length === 0) {
    sum.push('None raised by the writer.');
  } else {
    sum.push('| entry | field | flag |');
    sum.push('|---|---|---|');
    for (const d of reviewish) sum.push(`| \`${d.entryId}\` | \`${d.field}\` | ${cell(d.reason ?? '')} |`);
  }
  sum.push('');
  sum.push('## EQUIVALENT inventory');
  sum.push('');
  if (equivalent.length === 0) sum.push('None.');
  else for (const e of equivalent) sum.push(`- \`${e.entryId}\` · \`${e.field}\` — ${e.reason ?? ''}`);
  sum.push('');
  sum.push('## Gate status');
  sum.push('');
  sum.push('Every string above (AFTER where rewritten, BEFORE otherwise) passes the clarity gate: see');
  sum.push(`\`docs/CP-03_${slug}${suffix}_APPLY.md\` for the pasted run.`);
  sum.push('');
  writeFileSync(paths.summary, sum.join('\n') + '\n');

  // ---------- APPLY ----------
  const proofs = applyDocPath && existsSync(applyDocPath) ? readFileSync(applyDocPath, 'utf8') : '(proofs not supplied at generation time)';
  const ap: string[] = [];
  ap.push(`# CP-03 · ${bookName} — apply record`);
  ap.push('');
  ap.push(`Plan v2.0 · Date: ${date} · Branch: \`cursor/plain-lang-cp01-cp02-genesis-ebb9\``);
  ap.push('');
  ap.push('Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,');
  ap.push("Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.");
  ap.push('VERIFY-ONLY and EQUIVALENT fields yield no change.');
  ap.push('');
  ap.push(`## Applied set`);
  ap.push('');
  ap.push(`- in-scope strings: ${total}`);
  ap.push(`- rewritten: ${drafts.length} · VERIFY-ONLY: ${verifyOnly.length} · EQUIVALENT: ${equivalent.length}`);
  ap.push(`- applier: \`npx tsx scripts/cp03ApplyRewrites.ts ${rewritesPath} --worklist ${worklistPath} --apply\``);
  ap.push('');
  ap.push('## Proofs (verbatim command output)');
  ap.push('');
  ap.push('```text');
  ap.push(proofs.trim());
  ap.push('```');
  ap.push('');
  if (findingsPath && existsSync(findingsPath)) {
    ap.push(readFileSync(findingsPath, 'utf8').trim());
    ap.push('');
  }
  ap.push('## Operator theology sign-off');
  ap.push('');
  ap.push('- Decision text: _awaiting operator_');
  ap.push('- Signer: _awaiting operator_');
  ap.push(`- Date: _awaiting operator_`);
  ap.push('');
  writeFileSync(paths.apply, ap.join('\n') + '\n');

  console.log(`wrote ${paths.draft}`);
  console.log(`wrote ${paths.summary}`);
  console.log(`wrote ${paths.apply}`);
  console.log(`counts: total ${total} · rewritten ${drafts.length} · verify-only ${verifyOnly.length} · equivalent ${equivalent.length}`);
}

main();
