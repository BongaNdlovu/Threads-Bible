import fs from 'node:fs';
import path from 'node:path';
import { findCitations } from '../../scripts/citationTokens';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../../src/data/bookRegistry';

const ALIAS = new Map<string, string>();
for (const b of BOOK_REGISTRY as Array<{ name: string; slug: string }>) {
  ALIAS.set(b.name.toLowerCase(), b.name);
  ALIAS.set(b.slug.toLowerCase(), b.name);
}
const normalize = (book: string) => ALIAS.get(book.trim().toLowerCase()) ?? book.trim();
const isKnown = (name: string) => [...ALIAS.values()].includes(name);

const dir = import.meta.dirname;
const slug = process.argv[2];
const parts = process.argv.slice(3);
if (!parts.length) parts.push('');
const rwName = process.env.RW_FILE ? path.basename(process.env.RW_FILE) : parts[0] ? `${slug}_${parts[0]}_rewrites.json` : `${slug}_rewrites.json`;
const wlName = parts[0] ? `${slug}_${parts[0]}.json` : `${slug}.json`;

const wl = JSON.parse(fs.readFileSync(path.join(dir, wlName), 'utf8'));
const before = new Map<string, string>();
for (const f of [...(wl.fields || []), ...(wl.chains || [])]) before.set(`${f.entryId}|${f.field}`, f.text);
const rw = JSON.parse(fs.readFileSync(path.join(dir, rwName), 'utf8'));

let n = 0;
for (const d of rw.drafts || []) {
  const b = before.get(`${d.entryId}|${d.field}`);
  if (b === undefined) continue;
  const cb = findCitations(b, normalize, isKnown).sort();
  const ca = findCitations(d.after, normalize, isKnown).sort();
  const dropped = cb.filter(x => !ca.includes(x));
  const added = ca.filter(x => !cb.includes(x));
  if (dropped.length || added.length) {
    n++;
    console.log(`### ${d.entryId}|${d.field}  dropped=[${dropped}] added=[${added}]`);
    console.log('BEFORE: ' + b);
    console.log('AFTER : ' + d.after);
    console.log('');
  }
}
console.log(`${slug}: ${n} draft(s) with a citation difference`);
