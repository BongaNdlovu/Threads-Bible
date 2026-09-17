import fs from 'node:fs';
import path from 'node:path';

const dir = import.meta.dirname;
const LABELS = ['First principle:', 'Textual proof:', 'WHAT', 'WHEN', 'HOW', 'WHY', 'JESUS', 'WHO', 'YOUR LIFE'];
const has = (text: string, label: string) =>
  label.endsWith(':') ? text.includes(label) : new RegExp(`\\b${label}\\b`).test(text);
let problems = 0, checked = 0;
const perBook = new Map<string, number>();
const files = fs.readdirSync(dir).filter(f => /_rewrites\.json$/.test(f)).sort();
for (const f of files) {
  const rw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  if (!rw.drafts?.length) continue;
  const book = rw.book;
  // find every worklist for this book: <book>.json and <book>_p*.json
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
    for (const lab of LABELS) {
      const had = has(b, lab);
      const hasNow = has(d.after, lab);
      if (had && !hasNow) {
        console.log(`LOST    ${f} ${d.entryId}|${d.field}  ${lab}`);
        problems++;
        perBook.set(f, (perBook.get(f) ?? 0) + 1);
      } else if (!had && hasNow) {
        console.log(`ADDED   ${f} ${d.entryId}|${d.field}  ${lab}`);
        problems++;
        perBook.set(f, (perBook.get(f) ?? 0) + 1);
      }
    }
  }
}
console.log('\nper file: ' + [...perBook.entries()].map(([k, v]) => `${k}=${v}`).join(' · '));
console.log(`\nlabel check: ${checked} drafts scanned across ${files.length} rewrite files · ${problems} label problem(s)`);
