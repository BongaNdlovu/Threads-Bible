import fs from 'node:fs';
import path from 'node:path';

const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const p = path.join(dir, 'chains_rewrites.json');
const j = JSON.parse(fs.readFileSync(p, 'utf8'));

const ORDINALS: Record<string, string> = {
  'chain:sanctuary-2300-days': '1.',
  'chain:seventy-weeks-messiah': '2.',
  'chain:sabbath-creation-new-earth': '3.',
  'chain:state-of-dead-immortality': '4.',
  'chain:three-angels-seal-mark': '5.',
  'chain:great-controversy-arc': '6.',
  'chain:spirit-of-prophecy-remnant': '7.',
  'chain:millennium-earth-made-new': '8.',
};

const moved: string[] = [];
const kept: any[] = [];
for (const d of j.drafts as any[]) {
  if (d.field === 'name' && ORDINALS[d.entryId]) {
    moved.push(d.entryId);
    (j.verifyOnly as any[]).push({
      entryId: d.entryId,
      field: 'name',
      reason: 'RESTORED AFTER THE APPLY: this chain name carries one of the eight leading ordinals that form the app\'s 1.-8. numbered series. The applied draft had stripped it; the name was restored to its pre-pass text in commit a83d656 and then verified (chain-scope PASS, 0 changes outside the pillar chains), so the name now matches the baseline and is recorded here as verify-only. See docs/CP-03_CHAIN_PASS.md.',
    });
  } else kept.push(d);
}
j.drafts = kept;
fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
console.log(`moved ${moved.length} chain-name draft(s) to verify-only: ${moved.join(', ')}`);
console.log(`now drafts ${j.drafts.length} · verifyOnly ${j.verifyOnly.length} = ${j.drafts.length + j.verifyOnly.length}`);
