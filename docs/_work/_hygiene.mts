import fs from 'node:fs';
import path from 'node:path';

const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const load = (f: string) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const save = (f: string, j: unknown) => fs.writeFileSync(path.join(dir, f), JSON.stringify(j, null, 2) + '\n');
const draftIn = (j: any, entryId: string, field: string) => (j.drafts ?? []).find((d: any) => d.entryId === entryId && d.field === field);
const verifyIn = (j: any, entryId: string, field: string) => (j.verifyOnly ?? []).find((v: any) => v.entryId === entryId && v.field === field);
const must = (cond: unknown, msg: string) => { if (!cond) throw new Error(msg); };
const log: string[] = [];

// 1 · 1ti-6-16 — give each of the two findings its class so each can be ruled on its own
{
  const f = '1ti_rewrites.json';
  const j = load(f);
  const d = draftIn(j, '1ti-6-16', 'principle');
  must(d, '1ti-6-16 draft missing');
  must((d.reason.match(/QUOTE-REVIEW/g) ?? []).length === 2, '1ti-6-16 should carry two QUOTE-REVIEW markers');
  d.reason = d.reason
    .replace('QUOTE-REVIEW: the quoted span carries', 'QUOTE-REVIEW (pronoun-capitalisation; also closes the verse semicolon with a full stop, which is punctuation): the quoted span carries')
    .replace('QUOTE-REVIEW: the unquoted rendering', 'QUOTE-REVIEW (compressed-rendering): the unquoted rendering');
  save(f, j);
  log.push(`${f}: 1ti-6-16 — both findings now carry their class (pronoun-capitalisation + punctuation; compressed-rendering)`);
}

// 2 · ezk-37-12 — one note describing three differences, split so each class can dispose of its own
{
  const f = 'ezk_p2_rewrites.json';
  const j = load(f);
  const d = draftIn(j, 'ezk-37-12', 'principle');
  must(d, 'ezk-37-12 draft missing');
  const from = 'QUOTE-REVIEW: source reading';
  must(d.reason.includes(from), 'ezk-37-12 note not found');
  d.reason = d.reason.replace(from,
    'QUOTE-REVIEW, three differences in one span, each separately rulable: (a) pronoun-capitalisation — the source reads "My Spirit", canon "my spirit"; '
    + '(b) archaic-modernised — the source reads "you shall live", canon "ye shall live"; (c) punctuation — the source marks the omitted clause with an ellipsis where canon has the clause. '
    + 'Source reading');
  save(f, j);
  log.push(`${f}: ezk-37-12 — the single note is split into (a) pronoun case, (b) ye→you, (c) ellipsis trim`);
}

// 3 · the two chain findings that annotate another field: move the finding to the title it is about
{
  const moves: Array<[string, string, string, string]> = [
    ['chains_gD_rewrites.json', 'chain:day-of-the-lord', 'steps[5].connection', 'steps[5].title'],
    ['chains_gE_rewrites.json', 'chain:shepherd-provision', 'steps[0].connection', 'steps[0].title'],
  ];
  for (const [f, entryId, fromField, toField] of moves) {
    const j = load(f);
    const d = draftIn(j, entryId, fromField);
    must(d, `${entryId}|${fromField} draft missing`);
    const m = /QUOTE-REVIEW[^]*?(?=(?:One sentence|17 words|$))/.exec(d.reason);
    must(m, `${entryId}: could not isolate the QUOTE-REVIEW text`);
    const finding = m[0].trim();
    const v = verifyIn(j, entryId, toField);
    if (v) {
      if (!String(v.reason).includes('QUOTE-REVIEW')) v.reason = `${v.reason} QUOTE-REVIEW (moved here from ${fromField}, whose note was annotating this field): ${finding.replace(/^QUOTE-REVIEW[^:]*:\s*/, '')}`;
      log.push(`${f}: ${entryId} — finding moved onto ${toField} (which already had a verify-only record)`);
    } else {
      (j.verifyOnly ?? []).push({ entryId, field: toField, reason: `QUOTE-REVIEW (moved here from ${fromField}, whose note was annotating this field): ${finding.replace(/^QUOTE-REVIEW[^:]*:\s*/, '')}` });
      log.push(`${f}: ${entryId} — finding re-pointed to ${toField} (new verify-only record)`);
    }
    d.reason = d.reason.replace(finding, `NOTE: the QUOTE-REVIEW for this step concerns ${toField}, not this connection string, and is recorded there.`);
    save(f, j);
  }
}

// 4 · 1pe-2-6 — the note is stale in two ways; restate it against the delivered string
{
  const f = '1pe_rewrites.json';
  const j = load(f);
  const d = draftIn(j, '1pe-2-6', 'principle');
  must(d, '1pe-2-6 draft missing');
  d.reason = d.reason
    .replace("the structural label 'First principle:' is kept verbatim", "the structural label 'Textual proof:' is kept verbatim")
    .replace('QUOTE-REVIEW: the quoted words are the source\'s rendering.', 'QUOTE-REVIEW (verified against the delivered string, not the pre-repair draft): the quoted words are the source\'s rendering.');
  save(f, j);
  log.push(`${f}: 1pe-2-6 — note restated against the delivered text (it had claimed the wrong structural label, and it predated the label repair)`);
}

// 5 · 1pe-2-22 — the flagged phrase was pre-rewrite wording; withdraw the finding
{
  const f = '1pe_rewrites.json';
  const j = load(f);
  const d = draftIn(j, '1pe-2-22', 'principle');
  must(d, '1pe-2-22 draft missing');
  d.reason = d.reason.replace('QUOTE-REVIEW: the phrase',
    'QUOTE-REVIEW — WITHDRAWN after re-checking the delivered string: the flagged phrase');
  d.reason += ' WITHDRAWAL CONFIRMED: the delivered after reads "Christ\'s mouth was without sin, and that is what makes it possible for him to take our place", so the flagged phrase was pre-rewrite wording and no Scripture-style rendering survives in this string. Nothing for a class ruling to dispose of.';
  save(f, j);
  log.push(`${f}: 1pe-2-22 — finding withdrawn; the flagged phrase was pre-rewrite wording and is absent from the delivered string`);
}

// 6 · deu-18-15 — record the class boundary so a later reversal can find it
{
  const f = 'deu_rewrites.json';
  const j = load(f);
  const d = draftIn(j, 'deu-18-15', 'principle');
  must(d, 'deu-18-15 draft missing');
  d.reason += ' CLASS BOUNDARY: the span "Hear Him!" against "hear ye him" drops a word, adds punctuation and capitalises a divine pronoun, so it is filed under compressed-rendering although it could reasonably sit under pronoun-capitalisation. Named here so it can be moved if either class ruling is reversed.';
  save(f, j);
  log.push(`${f}: deu-18-15 — class-boundary note added`);
}

// 7 · zec — withdraw the three chain drafts the chain pass superseded
{
  const f = 'zec_rewrites.json';
  const j = load(f);
  const doomed = (j.drafts ?? []).filter((d: any) => d.entryId === 'chain:righteous-branch' && ['steps[4].title', 'steps[8].title', 'steps[8].connection'].includes(d.field));
  must(doomed.length === 3, `expected 3 superseded zec chain drafts, found ${doomed.length}`);
  j.drafts = (j.drafts ?? []).filter((d: any) => !doomed.includes(d));
  for (const d of doomed) {
    (j.verifyOnly ?? []).push({
      entryId: d.entryId,
      field: d.field,
      reason: 'WITHDRAWN — superseded by the Stage A.5 chain pass, which owns this shared string and ruled it verify-only: invariant I1 gives no licence to substitute the KJV word or "restore" the quotation. This book-side draft was never applied (a per-book apply never writes chain prose). The proposal is kept here only as history. See docs/CP-03_CHAIN_PASS.md and CP-05_FINDINGS_TRIAGE.md §9 items 4 and 5.',
    });
  }
  save(f, j);
  log.push(`${f}: 3 chain drafts withdrawn (righteous-branch steps[4].title, steps[8].title, steps[8].connection) — the chain pass owns those strings`);
}

console.log(log.map(l => '  • ' + l).join('\n'));
console.log(`\n${log.length} record edit(s) applied. No data file touched.`);
