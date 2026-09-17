import fs from 'node:fs';
import path from 'node:path';

// Stage A.5 (plan §1.12): chain prose is shared across books, so it gets one owner and one pass
// after the last book. The per-book worklists in docs/_work already carry the chains relevant to
// each book, so the global set is their union, deduplicated by chain id + field.
const dir = process.argv[2] ? process.argv[2] : import.meta.dirname;
const BOOK_SLUGS = ['gen','exo','lev','num','deu','jos','jdg','rut','1sa','2sa','1ki','2ki','1ch','2ch','ezr','neh','est','job','psa','pro','ecc','sng','isa','jer','lam','ezk','dan','hos','jol','amo','oba','jon','mic','nam','hab','zep','hag','zec','mal','mat','mrk','luk','joh','act','rom','1co','2co','gal','eph','php','col','1th','2th','1ti','2ti','tit','phm','heb','jam','1pe','2pe','1jn','2jn','3jn','jud','rev'];

const byKey = new Map<string, { entryId: string; field: string; text: string; books: Set<string> }>();
const missing: string[] = [];
for (const s of BOOK_SLUGS) {
  const p = path.join(dir, `${s}.json`);
  if (!fs.existsSync(p)) { missing.push(s); continue; }
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const c of j.chains ?? []) {
    const key = `${c.entryId}|${c.field}`;
    const rec = byKey.get(key) ?? { entryId: c.entryId, field: c.field, text: c.text, books: new Set<string>() };
    rec.books.add(s);
    if (rec.text !== c.text) console.log(`TEXT MISMATCH for ${key}: ${s} differs from an earlier book`);
    byKey.set(key, rec);
  }
}

const chains = new Map<string, Array<{ entryId: string; field: string; text: string }>>();
for (const rec of byKey.values()) {
  const id = rec.entryId;
  const arr = chains.get(id) ?? [];
  arr.push({ entryId: rec.entryId, field: rec.field, text: rec.text });
  chains.set(id, arr);
}
const order = ['name', 'title', 'connection'];
const flat: Array<{ entryId: string; field: string; text: string }> = [];
for (const [id, arr] of [...chains.entries()].sort()) {
  arr.sort((a, b) => {
    const sa = /steps\[(\d+)\]/.exec(a.field), sb = /steps\[(\d+)\]/.exec(b.field);
    if (sa && sb && sa[1] !== sb[1]) return Number(sa[1]) - Number(sb[1]);
    return order.indexOf(a.field.replace(/^steps\[\d+\]\./, '')) - order.indexOf(b.field.replace(/^steps\[\d+.\]\./, ''));
  });
  flat.push(...arr);
}

const out = {
  book: 'chains',
  bookName: 'Pillar chains',
  generatedFrom: 'union of the 66 per-book worklists, deduplicated',
  counts: { chains: chains.size, strings: flat.length, name: flat.filter(f => f.field === 'name').length, title: flat.filter(f => /\.title$/.test(f.field)).length, connection: flat.filter(f => /\.connection$/.test(f.field)).length },
  fields: [],
  chains: flat,
};
fs.writeFileSync(path.join(dir, 'chains.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`books read: ${BOOK_SLUGS.length - missing.length}/${BOOK_SLUGS.length}${missing.length ? ' (missing: ' + missing.join(',') + ')' : ''}`);
console.log(`unique chains: ${chains.size} · unique strings: ${flat.length} (name ${out.counts.name} · title ${out.counts.title} · connection ${out.counts.connection})`);
console.log(`per-book occurrences collapsed: ${[...byKey.values()].reduce((n, r) => n + r.books.size, 0)}`);
const perBook = new Map<string, number>();
for (const rec of byKey.values()) perBook.set([...rec.books][0], (perBook.get([...rec.books][0]) ?? 0) + 1);
console.log('chains by first-listed book: ' + [...perBook.entries()].sort().map(([k, v]) => `${k}=${v}`).join(' '));
