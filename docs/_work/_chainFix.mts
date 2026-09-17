import fs from 'node:fs';
import path from 'node:path';

const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';

// (a) restore the dropped structural opener in group B's melchizedek draft
{
  const p = path.join(dir, 'chains_gB_rewrites.json');
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  const d = (j.drafts || []).find(x => x.entryId === 'chain:melchizedek-priesthood' && x.field === 'steps[3].connection');
  if (!d) console.log('melchizedek steps[3].connection: not a draft');
  else if (d.after.startsWith('NT:')) console.log('melchizedek steps[3].connection: already has NT:');
  else {
    console.log('BEFORE FIX: ' + d.after);
    d.after = 'NT: ' + d.after.charAt(0).toLowerCase() + d.after.slice(1);
    d.reason = (d.reason ?? '') + ' LABEL RESTORED: the first draft dropped the leading "NT:" structural opener; it is restored verbatim because the app\'s own markers stay verbatim under invariant I1, and the rewrite keeps the same claim after it.';
    fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
    console.log('AFTER FIX:  ' + d.after);
  }
}

// (b) count how many unique corpus keys share each chain string's literal
const chains = JSON.parse(fs.readFileSync(path.join(dir, 'chains.json'), 'utf8')).chains;
const counts = new Map();
const add = (t: string, k: string) => { const a = counts.get(t) ?? []; a.push(k); counts.set(t, a); };
const tree = process.env.TEMP + '/tree66';
for (const f of fs.readdirSync(tree).filter(n => /^[a-z0-9]+\.json$/.test(n))) {
  const j = JSON.parse(fs.readFileSync(path.join(tree, f), 'utf8'));
  const slug = f.replace('.json', '');
  for (const x of j.fields ?? []) add(x.text, `${slug}:${x.entryId}|${x.field}`);
}
for (const c of chains) add(c.text, `CHAIN:${c.entryId}|${c.field}`);

const dupes = [];
for (const c of chains) {
  const keys = counts.get(c.text) ?? [];
  const others = keys.filter(k => k !== `CHAIN:${c.entryId}|${c.field}`);
  if (others.length) dupes.push({ key: `${c.entryId}|${c.field}`, n: keys.length, others: others.slice(0, 3), text: c.text });
}
console.log(`\nchain strings whose literal appears more than once: ${dupes.length}`);
for (const d of dupes) console.log(`  ${d.key}  ×${d.n}  also: ${d.others.join(', ')}  "${d.text.slice(0, 48)}"`);
