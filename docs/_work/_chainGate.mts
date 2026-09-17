import fs from 'node:fs';
import { checkProse, MAX_SENTENCE_WORDS } from '../../scripts/checkReadability';

const j = JSON.parse(fs.readFileSync(new URL('./chains.json', import.meta.url), 'utf8'));
let fails = 0;
const byChain = new Map<string, number>();
for (const c of j.chains as Array<{ entryId: string; field: string; text: string }>) {
  const v = checkProse(c.text);
  if (v.length) {
    fails++;
    byChain.set(c.entryId, (byChain.get(c.entryId) ?? 0) + 1);
    console.log(`${c.entryId}|${c.field}`);
    console.log(`    ${JSON.stringify(v).slice(0, 160)}`);
  }
}
console.log(`\nchain gate baseline (MAX_SENTENCE_WORDS=${MAX_SENTENCE_WORDS}): ${fails} failing string(s) of ${j.chains.length}`);
console.log('by chain: ' + [...byChain.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k.replace('chain:', '')}=${v}`).join(' '));
