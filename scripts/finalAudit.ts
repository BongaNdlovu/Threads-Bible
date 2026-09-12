/**
 * Post-refactor integrity audit (lazy book JSON + thread maps).
 * Run: npx tsx scripts/finalAudit.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import { genesisProphecies } from '../src/data/prophecies';
import { exodusProphecies, danielProphecies, revelationProphecies } from '../src/data/bookProphecies';
import { paulineProphecies } from '../src/data/paulineProphecies';
import { ntProphecies } from '../src/data/ntProphecies';
import { otProphecies } from '../src/data/otProphecies';
import { fulfillmentVerses } from '../src/data/fulfillments';
import { parseRef } from '../src/data/library';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const booksDir = path.join(__dirname, '..', 'public', 'books');

const allThreads = {
  ...genesisProphecies,
  ...exodusProphecies,
  ...danielProphecies,
  ...revelationProphecies,
  ...paulineProphecies,
  ...ntProphecies,
  ...otProphecies,
};

const canon = [
  'Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth',
  '1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah',
  'Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Solomon','Isaiah','Jeremiah',
  'Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum',
  'Habakkuk','Zephaniah','Haggai','Zechariah','Malachi',
  'Matthew','Mark','Luke','John','Acts','Romans','1 Corinthians','2 Corinthians','Galatians',
  'Ephesians','Philippians','Colossians','1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy',
  'Titus','Philemon','Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation',
];

console.log('=== Registry ===');
console.log('Books:', BOOK_REGISTRY.length, 'Verses:', BOOK_REGISTRY.reduce((n, b) => n + b.verses, 0));

const missingCanon = canon.filter(name => !BOOK_REGISTRY.some(b => b.name === name));
console.log('Missing canon:', missingCanon.length ? missingCanon.join(', ') : 'none');

// JSON files exist
let missingJson = 0;
for (const b of BOOK_REGISTRY) {
  const p = path.join(booksDir, `${b.slug}.json`);
  if (!fs.existsSync(p)) {
    missingJson++;
    console.log('Missing JSON:', b.slug);
  }
}
console.log('Missing book JSON files:', missingJson);

// Matthew 2:16 check
const mat = JSON.parse(fs.readFileSync(path.join(booksDir, 'mat.json'), 'utf8'));
const mat2 = mat.data.filter((v: any) => v.chapter === 2);
console.log('Matthew 2 verses:', mat2.length);
const v16 = mat2.find((v: any) => v.verse === 16);
console.log('Matt 2:16 starts:', v16?.text?.slice(0, 70));

// Threads
console.log('Threads:', Object.keys(allThreads).length);

const fulfillmentIds = new Set(fulfillmentVerses.map(v => v.id));
const bookIds = new Set<string>();
for (const b of BOOK_REGISTRY) {
  const json = JSON.parse(fs.readFileSync(path.join(booksDir, `${b.slug}.json`), 'utf8'));
  for (const v of json.data) bookIds.add(v.id);
}

function verseIdFor(ref: string): string[] {
  const parsed = parseRef(ref);
  if (!parsed) return [];
  const meta = BOOK_REGISTRY.find(b => b.name === parsed.book);
  if (!meta) return [];
  const ids: string[] = [];
  for (let v = parsed.startVerse; v <= parsed.endVerse; v++) {
    ids.push(`${meta.slug}-${parsed.chapter}-${v}`);
  }
  return ids;
}

let resolved = 0;
let unresolved = 0;
const bad: string[] = [];
for (const [tid, t] of Object.entries(allThreads)) {
  for (const ref of t.fulfillmentRefs) {
    const ids = verseIdFor(ref);
    const ok = ids.length > 0 && ids.every(id => fulfillmentIds.has(id) || bookIds.has(id));
    if (ok) resolved++;
    else {
      unresolved++;
      bad.push(`${tid} → ${ref}`);
    }
  }
}
console.log('Refs resolved:', resolved, 'Unresolved:', unresolved);
if (bad.length) console.log(bad.slice(0, 15).join('\n'));

console.log('Fulfillment index size:', fulfillmentVerses.length);
