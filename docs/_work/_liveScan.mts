import fs from 'node:fs';
import path from 'node:path';

const dir = process.env.TEMP + '/live';
const targets: Array<[string, RegExp]> = [
  ['gen', /eschatolog/i],
  ['exo', /eschatolog|antitype|\btype\b/i],
  ['zec', /eschatolog/i],
];
for (const [slug, re] of targets) {
  const p = path.join(dir, `${slug}.json`);
  if (!fs.existsSync(p)) { console.log(`MISSING ${p}`); continue; }
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  const all = [...(j.fields ?? []), ...(j.chains ?? [])];
  for (const f of all) {
    if (re.test(f.text)) {
      console.log(`### ${slug} · ${f.entryId} · ${f.field}`);
      console.log(f.text.length > 700 ? f.text.slice(0, 700) + ' …' : f.text);
      console.log('');
    }
  }
}
