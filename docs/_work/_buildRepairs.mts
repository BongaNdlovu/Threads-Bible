import fs from 'node:fs';
import path from 'node:path';

const live = process.env.TEMP + '/live';
const out = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';

type Field = { entryId: string; field: string; text: string };
const load = (slug: string) => JSON.parse(fs.readFileSync(path.join(live, `${slug}.json`), 'utf8'));

const sub = (text: string, from: string, to: string, key: string): string => {
  const n = text.split(from).length - 1;
  if (n !== 1) throw new Error(`${key}: expected 1 occurrence of ${JSON.stringify(from)}, found ${n}`);
  return text.replace(from, to);
};

const REASON = 'OPERATOR-RULED REPAIR (2026-09-18): the frozen glossary bans this abstraction and prescribes the rendering now used. Nothing else in the string changed.';
const LABEL_REASON = 'OPERATOR-RULED REPAIR (2026-09-18): the app structural label reads "First principle." with a period here; every other book writes "First principle:" and the label is protected verbatim, so the colon is restored. No other character changed.';

// ---- Genesis
{
  const j = load('gen');
  const fields: Field[] = j.fields ?? [];
  const chains: Field[] = j.chains ?? [];
  const edits: Array<[string, string, string, string, string]> = [
    ['gen-49-1', 'principle', 'to an eschatological climax', 'to the end of the story', REASON],
    ['gen-2-3', 'terms[0].note', 'as eschatological rest', 'as the rest at the end of the story', REASON],
  ];
  const drafts = [];
  for (const [entryId, field, from, to, reason] of edits) {
    const f = fields.find(x => x.entryId === entryId && x.field === field);
    if (!f) throw new Error(`gen: ${entryId}|${field} not found`);
    drafts.push({ entryId, field, after: sub(f.text, from, to, `${entryId}|${field}`), reason });
  }
  const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
  const verifyOnly = [...fields, ...chains].filter(f => !keys.has(`${f.entryId}|${f.field}`)).map(f => ({ entryId: f.entryId, field: f.field, reason: 'unchanged by the ruled repair' }));
  fs.writeFileSync(path.join(out, 'gen_repair.json'), JSON.stringify({ book: 'gen', bookName: 'Genesis', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
  console.log(`gen: ${drafts.length} draft(s), ${verifyOnly.length} verify-only`);
}

// ---- Exodus
{
  const j = load('exo');
  const fields: Field[] = j.fields ?? [];
  const chains: Field[] = j.chains ?? [];
  const drafts: Array<{ entryId: string; field: string; after: string; reason: string }> = [];
  // the two semantic repairs
  const p208 = fields.find(x => x.entryId === 'exo-20-8' && x.field === 'principle')!;
  {
    // The gate caps a sentence at 35 words, and this sentence is already long, so the banned word is
    // replaced by the frozen rendering in the shortest form that keeps the sentence legal (33 words).
    let t = sub(p208.text, 'an eschatological Sabbath-rest', 'a Sabbath-rest at the end of the story', 'exo-20-8');
    t = sub(t, 'First principle.', 'First principle:', 'exo-20-8c');
    drafts.push({ entryId: 'exo-20-8', field: 'principle', after: t, reason: REASON + ' ' + LABEL_REASON });
  }
  const w1246 = fields.find(x => x.entryId === 'exo-12-46' && x.field === 'who')!;
  {
    let t = sub(w1246.text, 'The type specifies the integrity', 'The earlier picture specifies the integrity', 'exo-12-46');
    t = sub(t, 'so the antitype is recognizable', 'so the person it pointed to is recognizable', 'exo-12-46b');
    drafts.push({ entryId: 'exo-12-46', field: 'who', after: t, reason: REASON });
  }
  // the 35 label punctuation repairs
  const labelFields = fields.filter(f => /First principle\./.test(f.text));
  for (const f of labelFields) {
    if (drafts.some(d => d.entryId === f.entryId && d.field === f.field)) continue;
    drafts.push({ entryId: f.entryId, field: f.field, after: sub(f.text, 'First principle.', 'First principle:', `${f.entryId}|${f.field}`), reason: LABEL_REASON });
  }
  const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
  const verifyOnly = [...fields, ...chains].filter(f => !keys.has(`${f.entryId}|${f.field}`)).map(f => ({ entryId: f.entryId, field: f.field, reason: 'unchanged by the ruled repair' }));
  fs.writeFileSync(path.join(out, 'exo_repair.json'), JSON.stringify({ book: 'exo', bookName: 'Exodus', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
  console.log(`exo: ${drafts.length} draft(s) (${labelFields.length} label repairs + 2 semantic), ${verifyOnly.length} verify-only`);
}

// ---- Zechariah
{
  const j = load('zec');
  const fields: Field[] = j.fields ?? [];
  const chains: Field[] = j.chains ?? [];
  const f = fields.find(x => x.entryId === 'zec-14-4' && x.field === 'terms[0].note')!;
  const drafts = [{ entryId: 'zec-14-4', field: 'terms[0].note', after: sub(f.text, 'geography pinned to eschatology', 'geography pinned to the end of the story', 'zec-14-4'), reason: REASON }];
  const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
  const verifyOnly = [...fields, ...chains].filter(x => !keys.has(`${x.entryId}|${x.field}`)).map(x => ({ entryId: x.entryId, field: x.field, reason: 'unchanged by the ruled repair' }));
  fs.writeFileSync(path.join(out, 'zec_repair.json'), JSON.stringify({ book: 'zec', bookName: 'Zechariah', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
  console.log(`zec: ${drafts.length} draft(s), ${verifyOnly.length} verify-only`);
}

// ---- the shared chain string
{
  const wl = JSON.parse(fs.readFileSync(path.join(out, 'chains.json'), 'utf8'));
  const target = (wl.chains as Field[]).find(c => c.entryId === 'chain:rest-sabbath' && c.field === 'steps[5].connection')!;
  const drafts = [{
    entryId: 'chain:rest-sabbath',
    field: 'steps[5].connection',
    after: sub(target.text, 'as eschatological rest in Christ', 'as rest in Christ at the end of the story', 'chain:rest-sabbath'),
    reason: REASON,
  }];
  const keys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
  const verifyOnly = (wl.chains as Field[]).filter(c => !keys.has(`${c.entryId}|${c.field}`)).map(c => ({ entryId: c.entryId, field: c.field, reason: 'unchanged by the ruled repair' }));
  fs.writeFileSync(path.join(out, 'chains_repair.json'), JSON.stringify({ book: 'chains', bookName: 'Pillar chains', drafts, verifyOnly, equivalent: [] }, null, 2) + '\n');
  console.log(`chains: ${drafts.length} draft(s), ${verifyOnly.length} verify-only`);
}
