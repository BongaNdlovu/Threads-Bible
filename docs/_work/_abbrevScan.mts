import fs from 'node:fs';
import path from 'node:path';

const dir = import.meta.dirname;

// (1) fix the melchizedek draft: keep the app's bare "NT" abbreviation verbatim, reword only after it
{
  const p = path.join(dir, 'chains_gB_rewrites.json');
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  const d = (j.drafts || []).find(x => x.entryId === 'chain:melchizedek-priesthood' && x.field === 'steps[3].connection');
  if (!d) console.log('melchizedek steps[3].connection not a draft');
  else {
    console.log('was: ' + d.after);
    d.after = 'NT shows Melchizedek as greater, as never dying, and as one who makes people perfect.';
    d.reason = (d.reason ?? '').replace(/ LABEL RESTORED:[\s\S]*$/, '') +
      ' OPENER FIXED: the source string opens with the app\'s bare "NT" abbreviation, which invariant I1 forbids expanding, so the rewrite keeps "NT" verbatim and changes only what follows it.';
    fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
    console.log('now: ' + d.after);
  }
}

// (2) scan every delivered draft for an abbreviation token that disappeared or was expanded
const TOKENS = ['NT', 'OT', 'LXX', 'KJV', 'YHWH', 'cf.', 'i.e.'];
const count = (t: string, tok: string) =>
  tok === 'NT' || tok === 'OT' ? (t.match(new RegExp(`(?<![A-Za-z])${tok}(?![A-Za-z])`, 'g')) ?? []).length
    : (t.split(tok).length - 1);

const files = fs.readdirSync(dir).filter(f => /_rewrites\.json$/.test(f)).sort();
let flagged = 0, scanned = 0;
for (const f of files) {
  const rw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  if (!rw.drafts?.length) continue;
  const book = rw.book;
  let before = new Map<string, string>();
  const wls = fs.readdirSync(dir).filter(n => n === `${book}.json` || new RegExp(`^${book}_p\\d+\\.json$`).test(n));
  for (const w of wls) {
    const j = JSON.parse(fs.readFileSync(path.join(dir, w), 'utf8'));
    for (const x of [...(j.fields ?? []), ...(j.chains ?? [])]) before.set(`${x.entryId}|${x.field}`, x.text);
  }
  for (const d of rw.drafts) {
    const b = before.get(`${d.entryId}|${d.field}`);
    if (b === undefined) continue;
    scanned++;
    for (const tok of TOKENS) {
      const cb = count(b, tok), ca = count(d.after, tok);
      if (cb > ca) {
        flagged++;
        console.log(`ABBREV-DROP ${f} ${d.entryId}|${d.field} ${tok} ${cb}->${ca}`);
        break;
      }
    }
  }
}
console.log(`\nabbreviation scan: ${scanned} drafts scanned · ${flagged} draft(s) where a token count fell`);
