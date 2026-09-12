/**
 * Ensure every ref in all book prophecies has complete fulfillment verses.
 * Run: npx tsx scripts/fillMissingVerses.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { genesisProphecies } from '../src/data/prophecies';
import {
  exodusProphecies,
  danielProphecies,
  revelationProphecies,
} from '../src/data/bookProphecies';
import { paulineProphecies } from '../src/data/paulineProphecies';
import { MESSIANIC_PROPHECIES } from '../src/data/tier3Messianic';
import { MASTER_CHAINS } from '../src/data/tier4MasterChains';
import { fulfillmentVerses } from '../src/data/fulfillments';
import { genesisVersesAndFulfillments } from '../src/data/genesisData';
import { exodusVerses } from '../src/data/exodusData';
import { danielVerses } from '../src/data/danielData';
import { revelationVerses } from '../src/data/revelationData';
import { romansVerses } from '../src/data/romansData';
import { corinthians1Verses } from '../src/data/corinthians1Data';
import { corinthians2Verses } from '../src/data/corinthians2Data';
import { galatiansVerses } from '../src/data/galatiansData';
import { ephesiansVerses } from '../src/data/ephesiansData';
import { philippiansVerses } from '../src/data/philippiansData';
import { colossiansVerses } from '../src/data/colossiansData';
import { thessalonians1Verses } from '../src/data/thessalonians1Data';
import { thessalonians2Verses } from '../src/data/thessalonians2Data';
import { timothy1Verses } from '../src/data/timothy1Data';
import { timothy2Verses } from '../src/data/timothy2Data';
import { titusVerses } from '../src/data/titusData';
import { philemonVerses } from '../src/data/philemonData';
import { matthewFullVerses } from '../src/data/matthewData';
import { markVerses } from '../src/data/markData';
import { lukeVerses } from '../src/data/lukeData';
import { johnVerses } from '../src/data/johnData';
import { actsVerses } from '../src/data/actsData';
import { hebrewsVerses } from '../src/data/hebrewsData';
import { jamesVerses } from '../src/data/jamesData';
import { peter1Verses } from '../src/data/peter1Data';
import { peter2Verses } from '../src/data/peter2Data';
import { john1Verses } from '../src/data/john1Data';
import { john2Verses } from '../src/data/john2Data';
import { john3Verses } from '../src/data/john3Data';
import { judeVerses } from '../src/data/judeData';
import { ntProphecies } from '../src/data/ntProphecies';
import { otProphecies } from '../src/data/otProphecies';
import { leviticusVerses } from '../src/data/leviticusData';
import { numbersVerses } from '../src/data/numbersData';
import { deuteronomyVerses } from '../src/data/deuteronomyData';
import { joshuaVerses } from '../src/data/joshuaData';
import { judgesVerses } from '../src/data/judgesData';
import { ruthVerses } from '../src/data/ruthData';
import { samuel1Verses } from '../src/data/samuel1Data';
import { samuel2Verses } from '../src/data/samuel2Data';
import { kings1Verses } from '../src/data/kings1Data';
import { kings2Verses } from '../src/data/kings2Data';
import { chronicles1Verses } from '../src/data/chronicles1Data';
import { chronicles2Verses } from '../src/data/chronicles2Data';
import { ezraVerses } from '../src/data/ezraData';
import { nehemiahVerses } from '../src/data/nehemiahData';
import { estherVerses } from '../src/data/estherData';
import { jobVerses } from '../src/data/jobData';
import { psalmsVerses } from '../src/data/psalmsData';
import { proverbsVerses } from '../src/data/proverbsData';
import { ecclesiastesVerses } from '../src/data/ecclesiastesData';
import { songVerses } from '../src/data/songData';
import { isaiahVerses } from '../src/data/isaiahData';
import { jeremiahVerses } from '../src/data/jeremiahData';
import { lamentationsVerses } from '../src/data/lamentationsData';
import { ezekielVerses } from '../src/data/ezekielData';
import { hoseaVerses } from '../src/data/hoseaData';
import { joelVerses } from '../src/data/joelData';
import { amosVerses } from '../src/data/amosData';
import { obadiahVerses } from '../src/data/obadiahData';
import { jonahVerses } from '../src/data/jonahData';
import { micahFullVerses } from '../src/data/micahFullData';
import { nahumVerses } from '../src/data/nahumData';
import { habakkukVerses } from '../src/data/habakkukData';
import { zephaniahVerses } from '../src/data/zephaniahData';
import { haggaiVerses } from '../src/data/haggaiData';
import { zechariahVerses } from '../src/data/zechariahData';
import { malachiVerses } from '../src/data/malachiData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type BibleBook = { name: string; chapters: string[][] };

const bible: BibleBook[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'kjv.json'), 'utf8').trim().replace(/^﻿/, '')
);

const BOOK_ALIASES: Record<string, string> = {
  psalm: 'Psalms',
  psalms: 'Psalms',
  song: 'Song of Solomon',
  songs: 'Song of Solomon',
  'song of songs': 'Song of Solomon',
  'song of solomon': 'Song of Solomon',
};

function normalizeBook(input: string): string {
  const key = input.trim().toLowerCase();
  return BOOK_ALIASES[key] || input.trim();
}

function parseRef(ref: string) {
  const match = ref
    .trim()
    .match(/^(\d?\s?[A-Za-z]+(?:\s+[A-Za-z]+){0,2})\s+(\d+):(\d+)(?:\s*-\s*(\d+))?/);
  if (!match) return null;
  return {
    book: normalizeBook(match[1]),
    chapter: parseInt(match[2], 10),
    startVerse: parseInt(match[3], 10),
    endVerse: match[4] ? parseInt(match[4], 10) : parseInt(match[3], 10),
  };
}

const SLUG: Record<string, string> = {
  Genesis: 'gen', Exodus: 'exo', Leviticus: 'lev', Numbers: 'num', Deuteronomy: 'deu',
  Joshua: 'jos', Judges: 'jdg', Ruth: 'rut', '1 Samuel': '1sa', '2 Samuel': '2sa',
  '1 Kings': '1ki', '2 Kings': '2ki', '1 Chronicles': '1ch', '2 Chronicles': '2ch',
  Ezra: 'ezr', Nehemiah: 'neh', Esther: 'est', Job: 'job', Psalms: 'psa', Proverbs: 'pro',
  Ecclesiastes: 'ecc', 'Song of Solomon': 'sng', Isaiah: 'isa', Jeremiah: 'jer',
  Lamentations: 'lam', Ezekiel: 'ezk', Daniel: 'dan', Hosea: 'hos', Joel: 'jol',
  Amos: 'amo', Obadiah: 'oba', Jonah: 'jon', Micah: 'mic', Nahum: 'nam',
  Habakkuk: 'hab', Zephaniah: 'zep', Haggai: 'hag', Zechariah: 'zec', Malachi: 'mal',
  Matthew: 'mat', Mark: 'mrk', Luke: 'luk', John: 'joh', Acts: 'act', Romans: 'rom',
  '1 Corinthians': '1co', '2 Corinthians': '2co', Galatians: 'gal', Ephesians: 'eph',
  Philippians: 'php', Colossians: 'col', '1 Thessalonians': '1th', '2 Thessalonians': '2th',
  '1 Timothy': '1ti', '2 Timothy': '2ti', Titus: 'tit', Philemon: 'phm', Hebrews: 'heb',
  James: 'jam', '1 Peter': '1pe', '2 Peter': '2pe', '1 John': '1jn', '2 John': '2jn',
  '3 John': '3jn', Jude: 'jud', Revelation: 'rev',
};

function verseId(book: string, chapter: number, verse: number) {
  return `${SLUG[book] || book.toLowerCase()}-${chapter}-${verse}`;
}

function getKjv(book: string, chapter: number, verse: number): string | null {
  const b = bible.find(x => x.name === book);
  const ch = b?.chapters[chapter - 1];
  return ch?.[verse - 1] ?? null;
}

function cleanText(t: string) {
  let s = t.replace(/\{([^}]*)\}/g, (_m, inner: string) => {
    if (
      /^[\w\s'.,;:!?-]+$/.test(inner) &&
      !/:/.test(inner) &&
      !/\b(?:Heb|Gr|Chaldee|or)\b/i.test(inner)
    ) {
      return inner;
    }
    return '';
  });
  s = s.replace(/\s+[A-Za-z][\w'...]*:\s*(?:Heb|Gr|Chaldee|or)\b[^.]*\.?/gi, '');
  return s.replace(/\s{2,}/g, ' ').trim();
}

const known = new Set<string>([
  ...genesisVersesAndFulfillments.map(v => v.id),
  ...exodusVerses.map(v => v.id),
  ...danielVerses.map(v => v.id),
  ...revelationVerses.map(v => v.id),
  ...romansVerses.map(v => v.id),
  ...corinthians1Verses.map(v => v.id),
  ...corinthians2Verses.map(v => v.id),
  ...galatiansVerses.map(v => v.id),
  ...ephesiansVerses.map(v => v.id),
  ...philippiansVerses.map(v => v.id),
  ...colossiansVerses.map(v => v.id),
  ...thessalonians1Verses.map(v => v.id),
  ...thessalonians2Verses.map(v => v.id),
  ...timothy1Verses.map(v => v.id),
  ...timothy2Verses.map(v => v.id),
  ...titusVerses.map(v => v.id),
  ...philemonVerses.map(v => v.id),
  ...matthewFullVerses.map(v => v.id),
  ...markVerses.map(v => v.id),
  ...lukeVerses.map(v => v.id),
  ...johnVerses.map(v => v.id),
  ...actsVerses.map(v => v.id),
  ...hebrewsVerses.map(v => v.id),
  ...jamesVerses.map(v => v.id),
  ...peter1Verses.map(v => v.id),
  ...peter2Verses.map(v => v.id),
  ...john1Verses.map(v => v.id),
  ...john2Verses.map(v => v.id),
  ...john3Verses.map(v => v.id),
  ...judeVerses.map(v => v.id),
  ...leviticusVerses.map(v => v.id),
  ...numbersVerses.map(v => v.id),
  ...deuteronomyVerses.map(v => v.id),
  ...joshuaVerses.map(v => v.id),
  ...judgesVerses.map(v => v.id),
  ...ruthVerses.map(v => v.id),
  ...samuel1Verses.map(v => v.id),
  ...samuel2Verses.map(v => v.id),
  ...kings1Verses.map(v => v.id),
  ...kings2Verses.map(v => v.id),
  ...chronicles1Verses.map(v => v.id),
  ...chronicles2Verses.map(v => v.id),
  ...ezraVerses.map(v => v.id),
  ...nehemiahVerses.map(v => v.id),
  ...estherVerses.map(v => v.id),
  ...jobVerses.map(v => v.id),
  ...psalmsVerses.map(v => v.id),
  ...proverbsVerses.map(v => v.id),
  ...ecclesiastesVerses.map(v => v.id),
  ...songVerses.map(v => v.id),
  ...isaiahVerses.map(v => v.id),
  ...jeremiahVerses.map(v => v.id),
  ...lamentationsVerses.map(v => v.id),
  ...ezekielVerses.map(v => v.id),
  ...hoseaVerses.map(v => v.id),
  ...joelVerses.map(v => v.id),
  ...amosVerses.map(v => v.id),
  ...obadiahVerses.map(v => v.id),
  ...jonahVerses.map(v => v.id),
  ...micahFullVerses.map(v => v.id),
  ...nahumVerses.map(v => v.id),
  ...habakkukVerses.map(v => v.id),
  ...zephaniahVerses.map(v => v.id),
  ...haggaiVerses.map(v => v.id),
  ...zechariahVerses.map(v => v.id),
  ...malachiVerses.map(v => v.id),
  ...fulfillmentVerses.map(v => v.id),
]);

const allThreads = [
  ...Object.values(genesisProphecies),
  ...Object.values(exodusProphecies),
  ...Object.values(danielProphecies),
  ...Object.values(revelationProphecies),
  ...Object.values(paulineProphecies),
  ...Object.values(ntProphecies),
  ...Object.values(otProphecies),
  ...MESSIANIC_PROPHECIES.map(m => ({ fulfillmentRefs: m.fulfillmentRefs })),
  ...MASTER_CHAINS.flatMap(c => c.steps.map(s => ({ fulfillmentRefs: [s.ref] }))),
];

const needed: {
  id: string;
  book: string;
  chapter: number;
  verseNumber: number;
  text: string;
}[] = [];
const missingRefs: string[] = [];

for (const thread of allThreads) {
  for (const ref of thread.fulfillmentRefs) {
    const parsed = parseRef(ref);
    if (!parsed) {
      missingRefs.push(ref);
      continue;
    }
    for (let v = parsed.startVerse; v <= parsed.endVerse; v++) {
      const id = verseId(parsed.book, parsed.chapter, v);
      if (known.has(id)) continue;
      const kjv = getKjv(parsed.book, parsed.chapter, v);
      if (!kjv) {
        missingRefs.push(`${ref} (${parsed.book} ${parsed.chapter}:${v})`);
        continue;
      }
      needed.push({
        id,
        book: parsed.book,
        chapter: parsed.chapter,
        verseNumber: v,
        text: cleanText(kjv),
      });
      known.add(id);
    }
  }
}

console.log('New fulfillment verses:', needed.length);
if (missingRefs.length) console.log('Unresolvable:', [...new Set(missingRefs)].join(' | '));

if (needed.length === 0) process.exit(0);

const byBook = new Map<string, typeof needed>();
for (const v of needed) {
  const list = byBook.get(v.book) || [];
  list.push(v);
  byBook.set(v.book, list);
}

const order = [
  'Genesis','Exodus','Leviticus','Numbers','Deuteronomy','Joshua','Judges','Ruth',
  '1 Samuel','2 Samuel','1 Kings','2 Kings','1 Chronicles','2 Chronicles','Ezra','Nehemiah',
  'Esther','Job','Psalms','Proverbs','Ecclesiastes','Song of Solomon','Isaiah','Jeremiah',
  'Lamentations','Ezekiel','Daniel','Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum',
  'Habakkuk','Zephaniah','Haggai','Zechariah','Malachi','Matthew','Mark','Luke','John','Acts',
  'Romans','1 Corinthians','2 Corinthians','Galatians','Ephesians','Philippians','Colossians',
  '1 Thessalonians','2 Thessalonians','1 Timothy','2 Timothy','Titus','Philemon','Hebrews',
  'James','1 Peter','2 Peter','1 John','2 John','3 John','Jude','Revelation',
];

const lines: string[] = [];
for (const book of order) {
  const list = byBook.get(book);
  if (!list) continue;
  list.sort((a, b) => a.chapter - b.chapter || a.verseNumber - b.verseNumber);
  lines.push(`  // ${book}`);
  for (const v of list) {
    const textEscaped = v.text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    lines.push(
      `  { id: '${v.id}', book: '${v.book.replace(/'/g, "\\'")}', chapter: ${v.chapter}, verseNumber: ${v.verseNumber}, text: '${textEscaped}', isProphecy: false },`
    );
  }
}

const fulfillPath = path.join(__dirname, '../src/data/fulfillments.ts');
let src = fs.readFileSync(fulfillPath, 'utf8');
const marker = '\n];\n\n/** Quick lookup by verse id */';
if (src.includes(marker)) {
  src = src.replace(marker, `\n\n${lines.join('\n')}\n];\n\n/** Quick lookup by verse id */`);
} else {
  const lastIdx = src.lastIndexOf('\n];');
  src = src.slice(0, lastIdx) + `\n\n${lines.join('\n')}\n` + src.slice(lastIdx);
}
fs.writeFileSync(fulfillPath, src);
console.log('Appended', needed.length, 'verses');
