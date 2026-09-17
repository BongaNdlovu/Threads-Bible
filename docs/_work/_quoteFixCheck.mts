import fs from 'node:fs';
import path from 'node:path';

const dir = import.meta.dirname;
// Quoted spans of 4+ words, in either curly or straight double quotes.
const SPAN = /[\u201c"]([^\u201d"]{12,})[\u201d"]/g;
const spans = (t: string) => {
  const out = new Set<string>();
  for (const m of t.matchAll(SPAN)) {
    const s = m[1].trim();
    if (s.split(/\s+/).length >= 4) out.add(s);
  }
  return out;
};

let problems = 0, draftsWithQuote = 0, checked = 0;
const files = fs.readdirSync(dir).filter(f => /_rewrites\.json$/.test(f)).sort();
for (const f of files) {
  const rw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  if (!rw.drafts?.length) continue;
  const book = rw.book;
  const wls = fs.readdirSync(dir).filter(n => n === `${book}.json` || new RegExp(`^${book}_p\\d+\\.json$`).test(n));
  const before = new Map<string, string>();
  for (const w of wls) {
    const j = JSON.parse(fs.readFileSync(path.join(dir, w), 'utf8'));
    for (const x of [...(j.fields || []), ...(j.chains || [])]) before.set(`${x.entryId}|${x.field}`, x.text);
  }
  for (const d of rw.drafts) {
    const b = before.get(`${d.entryId}|${d.field}`);
    if (b === undefined) continue;
    checked++;
    const sb = spans(b);
    if (!sb.size) continue;
    draftsWithQuote++;
    const sa = spans(d.after);
    for (const s of sb) {
      if (!sa.has(s)) {
        problems++;
        console.log(`QUOTE-LOST ${f} ${d.entryId}|${d.field}`);
        console.log(`    was: ${s}`);
        const near = [...sa].find(x => x.slice(0, 25) === s.slice(0, 25));
        console.log(`    now: ${near ?? '(no similar span)'}`);
      }
    }
  }
}
console.log(`\nquote-fixity scan: ${checked} drafts, ${draftsWithQuote} carrying a 4+ word quotation, ${problems} lost or altered span(s)`);
