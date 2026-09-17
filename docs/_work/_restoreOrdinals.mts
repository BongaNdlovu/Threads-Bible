import fs from 'node:fs';
import path from 'node:path';

const p = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/threadDetails.ts';
let src = fs.readFileSync(p, 'utf8');

const fixes: Array<[string, string, string]> = [
  ['sanctuary-2300-days', "name: 'The 2,300 Days & Cleansing of the Sanctuary'", "name: '1. The 2,300 Days & Cleansing of the Sanctuary'"],
  ['seventy-weeks-messiah', "name: 'The 70 Weeks: Dating the Messiah'", "name: '2. The 70 Weeks: Dating the Messiah'"],
  ['sabbath-creation-new-earth', "name: 'The Sabbath: Creation to New Earth'", "name: '3. The Sabbath: Creation to the New Earth'"],
  ['state-of-dead-immortality', "name: 'The State of the Dead (Conditional Immortality)'", "name: '4. The State of the Dead (Conditional Immortality)'"],
  ['three-angels-seal-mark', "name: 'The Three Angels\\' Messages & The Seal vs. Mark'", "name: '5. The Three Angels\\' Messages & The Seal vs. Mark'"],
  ['great-controversy-arc', "name: 'The Great Controversy Cosmic Arc'", "name: '6. The Great Controversy Cosmic Arc'"],
  ['spirit-of-prophecy-remnant', "name: 'The Spirit of Prophecy & The Remnant'", "name: '7. The Spirit of Prophecy & The Remnant'"],
  ['millennium-earth-made-new', "name: 'The Millennium & The Earth Made New'", "name: '8. The Millennium & The Earth Made New'"],
];

let ok = 0;
for (const [id, from, to] of fixes) {
  const n = src.split(from).length - 1;
  if (n !== 1) { console.log(`SKIP ${id}: ${n} occurrences of the anchor`); continue; }
  src = src.replace(from, to);
  ok++;
  console.log(`restored ${id}: ${to}`);
}
if (ok) { fs.writeFileSync(p, src); console.log(`\n${ok} of ${fixes.length} restored and written`); }
else console.log('nothing written');
