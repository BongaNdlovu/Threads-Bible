import fs from 'node:fs';
import path from 'node:path';

const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const load = (f: string) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
const save = (f: string, j: unknown) => fs.writeFileSync(path.join(dir, f), JSON.stringify(j, null, 2) + '\n');
const log: string[] = [];

// ---- (b) the one wording-adjacent change: mark the isa-42-6 trim with an ellipsis
{
  const tree = JSON.parse(fs.readFileSync(process.env.TEMP + '/live/isa_now.json', 'utf8'));
  const fields = (tree.fields ?? []) as Array<{ entryId: string; field: string; text: string }>;
  const chains = (tree.chains ?? []) as Array<{ entryId: string; field: string; text: string }>;
  const cur = fields.find(f => f.entryId === 'isa-42-6' && f.field === 'principle');
  if (!cur) throw new Error('isa-42-6 principle not found in the live tree');
  const FROM = 'from the prison.\u201d';
  const TO = 'from the prison\u2026\u201d';
  if (!cur.text.includes(FROM)) throw new Error('anchor not found: ' + JSON.stringify(cur.text.slice(-160)));
  if (cur.text.split(FROM).length - 1 !== 1) throw new Error('anchor not unique');
  const drafts = [{
    entryId: 'isa-42-6',
    field: 'principle',
    after: cur.text.replace(FROM, TO),
    reason: 'OPERATOR-RULED (CP-05 triage, punctuation class, ruling (b)): the quotation stops at "from the prison" where the canon continues "and them that sit in darkness out of the prison house", and the trim was not marked. An ellipsis now marks it. No word inside the quotation changed — only the omission is marked, which is what §1.10 C3 requires. This is the only string where that gap could be closed by punctuation alone.',
  }];
  const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
  const verifyOnly = [...fields, ...chains].filter(f => !keys.has(`${f.entryId}|${f.field}`)).map(f => ({ entryId: f.entryId, field: f.field, reason: 'unchanged by this repair' }));
  fs.writeFileSync(path.join(dir, 'isa_repair.json'), JSON.stringify({ book: 'isa', bookName: 'Isaiah', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
  log.push('isa_repair.json written: isa-42-6 trim marked with an ellipsis');
}

// ---- close the three findings that need no text change
{
  const closes: Array<[string, string, string, string]> = [
    ['mat_p1_rewrites.json', 'mat-4-6', 'principle',
      'THEOLOGY-REVIEW CLOSED (operator ruling 2026-09-18, recommended option: keep). The delivered wording is accurate: at Matthew 4:6 the tempter quotes Psalm 91 and omits the Scripture that forbids testing God, which is exactly what Jesus answers with at Matthew 4:7. The original clause "but omits to tempt the Lord thy God" read as though he omitted the act of tempting, so the applied clarification stands. No further change.'],
    ['ecc_rewrites.json', 'ecc-9-5', 'principle',
      'QUOTE-REVIEW CLOSED (operator ruling 2026-09-18, recommended option: leave). The difference is a capital letter plus an ellipsis-marked trim, and the quotation is the proof text for conditional immortality. I1 forbids modernising or "restoring" it, and §1.10 C3 is satisfied because the trim is marked. No change.'],
    ['rom_rewrites.json', 'rom-3-21', 'principle',
      'QUOTE-REVIEW CLOSED (operator ruling 2026-09-18, recommended option: leave). Convention set: when two verses are run together, the second verse\'s opening word keeps its canonical lower case and is not capitalised mid-quotation. No change, and this applies canon-wide so the case is not raised again.'],
  ];
  for (const [file, entryId, field, note] of closes) {
    const p = path.join(dir, file);
    if (!fs.existsSync(p)) { log.push(`SKIPPED ${file} (absent)`); continue; }
    const j = load(file);
    const d = (j.drafts ?? []).find((x: any) => x.entryId === entryId && x.field === field);
    if (!d) { log.push(`SKIPPED ${entryId} (not a draft in ${file})`); continue; }
    d.reason = `${d.reason} ${note}`;
    save(file, j);
    log.push(`${file}: ${entryId} — finding closed, no text change`);
  }
}
console.log(log.map(l => '  • ' + l).join('\n'));
