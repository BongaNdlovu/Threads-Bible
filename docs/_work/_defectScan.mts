import fs from 'node:fs';
import path from 'node:path';

const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const NEEDLES = ['christological', 'Christological', 'eschatological', 'Eschatological', 'soteriological', 'dispensational', 'teleological', 'hermeneutical'];
const books = ['gen', 'exo', 'lev', 'zec'];

for (const slug of books) {
  const files = fs.readdirSync(dir).filter(n => n === `${slug}.json` || new RegExp(`^${slug}_p\\d+\\.json$`).test(n));
  let hits = 0;
  for (const f of files) {
    const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    for (const x of j.fields ?? []) {
      const found = NEEDLES.filter(n => x.text.includes(n));
      if (found.length) {
        hits++;
        console.log(`--- ${slug} · ${x.entryId} · ${x.field}   [${found.join(',')}]`);
        console.log(x.text);
        console.log('');
      }
    }
  }
  console.log(`### ${slug}: ${hits} field(s) with a never-write abstraction\n`);
}

// Exodus label punctuation
const exo = JSON.parse(fs.readFileSync(path.join(dir, 'exo.json'), 'utf8'));
const bad = (exo.fields ?? []).filter((x: any) => /First principle\./.test(x.text));
console.log(`### exo: ${bad.length} field(s) reading "First principle." with a period`);
for (const b of bad.slice(0, 4)) console.log(`   ${b.entryId} · ${b.field}: ${b.text.slice(0, 130)}`);

// chain hits across the chain worklist
const chains = JSON.parse(fs.readFileSync(path.join(dir, 'chains.json'), 'utf8'));
const chits = (chains.chains as any[]).filter(c => NEEDLES.some(n => c.text.includes(n)));
console.log(`\n### chains: ${chits.length} string(s) with a never-write abstraction`);
for (const c of chits) console.log(`   ${c.entryId} · ${c.field}: ${c.text.slice(0, 150)}`);
