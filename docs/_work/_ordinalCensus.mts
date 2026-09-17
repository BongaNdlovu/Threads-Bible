import fs from 'node:fs';
const src = fs.readFileSync('src/data/threadDetails.ts', 'utf8');
const bases = [
  'The 2,300 Days & Cleansing of the Sanctuary',
  'The 70 Weeks: Dating the Messiah',
  'The Sabbath: Creation to the New Earth',
  'The State of the Dead (Conditional Immortality)',
  "The Three Angels\\' Messages & The Seal vs. Mark",
  'The Great Controversy Cosmic Arc',
  'The Spirit of Prophecy & The Remnant',
  'The Millennium & The Earth Made New',
];
const count = (s: string) => src.split(s).length - 1;
let bad = 0;
bases.forEach((b, i) => {
  const ord = `${i + 1}. ${b}`;
  const withOrd = count(`name: '${ord}'`);
  const without = count(`name: '${b}'`);
  const bare = without - withOrd;
  if (withOrd !== 2 || bare !== 0) bad++;
  console.log(`${i + 1}. ${b.slice(0, 42).padEnd(44)} with ordinal: ${withOrd}  without: ${bare}`);
});
console.log(bad ? `\n${bad} name(s) not consistently ordinaled` : '\nall eight names consistent (two occurrences each, none bare)');
