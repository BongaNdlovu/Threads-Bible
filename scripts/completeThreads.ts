/**
 * Expand Genesis prophecy threads and ensure every fulfillmentRef resolves
 * with complete KJV verse ranges.
 * Run: npx tsx scripts/completeThreads.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { genesisProphecies, type ProphecyThread } from '../src/data/prophecies';
import { fulfillmentVerses } from '../src/data/fulfillments';
import { genesisVersesAndFulfillments } from '../src/data/genesisData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type BibleBook = { name: string; chapters: string[][] };
type VerseLike = {
  id: string;
  book: string;
  chapter: number;
  verseNumber: number;
  text: string;
  isProphecy: boolean;
  fulfillmentRefs?: string[];
};

const bible: BibleBook[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'kjv.json'), 'utf8').trim().replace(/^﻿/, '')
);

/** Map common book-name variants → KJV JSON book name */
const BOOK_ALIASES: Record<string, string> = {
  psalm: 'Psalms',
  psalms: 'Psalms',
  song: 'Song of Solomon',
  songs: 'Song of Solomon',
  'song of songs': 'Song of Solomon',
  canticles: 'Song of Solomon',
  genesis: 'Genesis',
  exodus: 'Exodus',
  leviticus: 'Leviticus',
  numbers: 'Numbers',
  deuteronomy: 'Deuteronomy',
  joshua: 'Joshua',
  judges: 'Judges',
  ruth: 'Ruth',
  '1 samuel': '1 Samuel',
  '2 samuel': '2 Samuel',
  '1 kings': '1 Kings',
  '2 kings': '2 Kings',
  '1 chronicles': '1 Chronicles',
  '2 chronicles': '2 Chronicles',
  ezra: 'Ezra',
  nehemiah: 'Nehemiah',
  esther: 'Esther',
  job: 'Job',
  proverbs: 'Proverbs',
  ecclesiastes: 'Ecclesiastes',
  isaiah: 'Isaiah',
  jeremiah: 'Jeremiah',
  lamentations: 'Lamentations',
  ezekiel: 'Ezekiel',
  daniel: 'Daniel',
  hosea: 'Hosea',
  joel: 'Joel',
  amos: 'Amos',
  obadiah: 'Obadiah',
  jonah: 'Jonah',
  micah: 'Micah',
  nahum: 'Nahum',
  habakkuk: 'Habakkuk',
  zephaniah: 'Zephaniah',
  haggai: 'Haggai',
  zechariah: 'Zechariah',
  malachi: 'Malachi',
  matthew: 'Matthew',
  mark: 'Mark',
  luke: 'Luke',
  john: 'John',
  acts: 'Acts',
  romans: 'Romans',
  '1 corinthians': '1 Corinthians',
  '2 corinthians': '2 Corinthians',
  galatians: 'Galatians',
  ephesians: 'Ephesians',
  philippians: 'Philippians',
  colossians: 'Colossians',
  '1 thessalonians': '1 Thessalonians',
  '2 thessalonians': '2 Thessalonians',
  '1 timothy': '1 Timothy',
  '2 timothy': '2 Timothy',
  titus: 'Titus',
  philemon: 'Philemon',
  hebrews: 'Hebrews',
  james: 'James',
  '1 peter': '1 Peter',
  '2 peter': '2 Peter',
  '1 john': '1 John',
  '2 john': '2 John',
  '3 john': '3 John',
  jude: 'Jude',
  revelation: 'Revelation',
};

function resolveBookName(input: string): string {
  const key = input.trim().toLowerCase();
  return BOOK_ALIASES[key] || input.trim();
}

function parseRef(ref: string): { book: string; chapter: number; startVerse: number; endVerse: number } | null {
  // Book may include optional leading numeral and spaces, e.g. "1 John 3:8", "2 Samuel 7:12-16"
  const match = ref.trim().match(/^(\d?\s?[A-Za-z]+(?:\s+[A-Za-z]+)?)\s+(\d+):(\d+)(?:\s*-\s*(\d+))?/);
  if (!match) return null;
  return {
    book: resolveBookName(match[1]),
    chapter: parseInt(match[2], 10),
    startVerse: parseInt(match[3], 10),
    endVerse: match[4] ? parseInt(match[4], 10) : parseInt(match[3], 10),
  };
}

function verseId(book: string, chapter: number, verse: number): string {
  // Compact id like gen-3-15, 1jn-3-8, 2sa-7-12
  const bookSlug: Record<string, string> = {
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
  const slug = bookSlug[book] || book.toLowerCase().replace(/\s+/g, '-');
  return `${slug}-${chapter}-${verse}`;
}

function getKjvVerse(book: string, chapter: number, verse: number): string | null {
  const b = bible.find(x => x.name === book);
  if (!b) return null;
  const ch = b.chapters[chapter - 1];
  if (!ch) return null;
  return ch[verse - 1] ?? null;
}

/** Normalize text: strip curly braces that marked heb notes (keep as plain KJV) */
function cleanText(t: string): string {
  return t.replace(/\{([^}]+)\}/g, '$1').replace(/\s+/g, ' ').trim();
}

// ─── Expanded Genesis prophecy threads ───────────────────────────────────────
// Keep existing 72, add more messianic / typological / covenant threads
// covering major sections of all 50 chapters.

const ADDITIONAL_THREADS: Record<string, ProphecyThread> = {
  // Creation & Fall (extra)
  'gen-1-1': { fulfillmentRefs: ['John 1:1-3', 'Hebrews 11:3'] },
  'gen-1-14': { fulfillmentRefs: ['Psalm 19:1-4', 'Romans 1:20'] },
  'gen-1-27': { fulfillmentRefs: ['Colossians 3:10', 'James 3:9'] },
  'gen-2-2': { fulfillmentRefs: ['Hebrews 4:3-11'] },
  'gen-2-3': { fulfillmentRefs: ['Exodus 20:11', 'Hebrews 4:4'] },
  'gen-2-9': { fulfillmentRefs: ['Revelation 2:7', 'Revelation 22:2'] },
  'gen-3-1': { fulfillmentRefs: ['Revelation 12:9', 'Revelation 20:2'] },
  'gen-3-8': { fulfillmentRefs: ['Genesis 3:9', 'Psalm 139:7-12'] },
  'gen-3-19': { fulfillmentRefs: ['1 Corinthians 15:21-22', 'Romans 6:23'] },
  'gen-3-22': { fulfillmentRefs: ['Revelation 22:2', 'Revelation 22:14'] },

  // Cain to Noah
  'gen-4-1': { fulfillmentRefs: ['Luke 3:38', '1 John 3:12'] },
  'gen-4-7': { fulfillmentRefs: ['Romans 7:8-9', 'James 1:14-15'] },
  'gen-4-8': { fulfillmentRefs: ['Hebrews 12:24', '1 John 3:12'] },
  'gen-4-26': { fulfillmentRefs: ['Genesis 12:8', 'Acts 11:26'] },
  'gen-5-1': { fulfillmentRefs: ['Colossians 3:10', 'James 3:9'] },
  'gen-5-22': { fulfillmentRefs: ['Hebrews 11:5', 'Micah 6:8'] },
  'gen-5-29': { fulfillmentRefs: ['2 Corinthians 1:3-5', 'Revelation 21:4'] },
  'gen-6-5': { fulfillmentRefs: ['Romans 3:23', 'Matthew 15:19'] },
  'gen-6-14': { fulfillmentRefs: ['1 Peter 3:20-21', 'Hebrews 11:7'] },
  'gen-6-22': { fulfillmentRefs: ['Hebrews 11:7', 'John 6:38'] },
  'gen-8-4': { fulfillmentRefs: ['1 Peter 3:20', '2 Peter 2:5'] },
  'gen-8-8': { fulfillmentRefs: ['Luke 3:22', 'Matthew 3:16'] },
  'gen-8-11': { fulfillmentRefs: ['Luke 3:22', 'Matthew 3:16'] },
  'gen-8-21': { fulfillmentRefs: ['Romans 8:20-21', 'Revelation 21:5'] },
  'gen-8-22': { fulfillmentRefs: ['Genesis 9:13', 'Jeremiah 33:20'] },
  'gen-9-1': { fulfillmentRefs: ['Genesis 9:2', 'Psalm 8:6-8'] },
  'gen-9-13': { fulfillmentRefs: ['Genesis 9:16', 'Isaiah 54:9'] },
  'gen-9-16': { fulfillmentRefs: ['Isaiah 54:9-10', 'Hebrews 13:20'] },
  'gen-11-1': { fulfillmentRefs: ['Acts 2:6', 'Acts 17:26'] },
  'gen-11-4': { fulfillmentRefs: ['Luke 14:11', '2 Corinthians 10:5'] },
  'gen-11-9': { fulfillmentRefs: ['Acts 17:26', 'Luke 1:51'] },
  'gen-11-10': { fulfillmentRefs: ['Luke 3:36', 'Matthew 1:2'] },
  'gen-11-27': { fulfillmentRefs: ['Luke 3:34', 'Matthew 1:2'] },

  // Abraham
  'gen-12-1': { fulfillmentRefs: ['Hebrews 11:8', 'Acts 7:2-4'] },
  'gen-12-2': { fulfillmentRefs: ['Galatians 3:16', 'Matthew 1:1', 'Romans 4:16-17'] },
  'gen-12-3': { fulfillmentRefs: ['Galatians 3:8', 'Acts 3:25', 'Revelation 7:9'] },
  'gen-12-7': { fulfillmentRefs: ['Acts 7:5', 'Hebrews 11:9', 'Romans 4:13'] },
  'gen-12-8': { fulfillmentRefs: ['Genesis 22:5', 'Hebrews 11:10'] },
  'gen-14-18': { fulfillmentRefs: ['Hebrews 5:6', 'Hebrews 7:1-3', 'Psalm 110:4'] },
  'gen-14-19': { fulfillmentRefs: ['Hebrews 7:1', 'Matthew 28:18'] },
  'gen-14-20': { fulfillmentRefs: ['Hebrews 7:2-10', 'Luke 22:19-20'] },
  'gen-15-1': { fulfillmentRefs: ['Hebrews 13:5-6', 'Psalm 3:3'] },
  'gen-15-5': { fulfillmentRefs: ['Romans 4:18', 'Hebrews 11:12', 'Galatians 3:6'] },
  'gen-15-6': { fulfillmentRefs: ['Romans 4:3', 'Galatians 3:6', 'James 2:23'] },
  'gen-15-13': { fulfillmentRefs: ['Acts 7:6-7', 'Galatians 3:17', 'Exodus 12:40-41'] },
  'gen-15-18': { fulfillmentRefs: ['Acts 7:8', 'Genesis 17:19', 'Galatians 3:16'] },
  'gen-16-11': { fulfillmentRefs: ['Luke 1:13', 'Luke 1:31'] },
  'gen-16-13': { fulfillmentRefs: ['Genesis 17:1', 'Hebrews 11:6'] },
  'gen-17-1': { fulfillmentRefs: ['Genesis 17:1', 'Revelation 1:8'] },
  'gen-17-5': { fulfillmentRefs: ['Romans 4:17', 'Matthew 1:1', 'Luke 3:23-34'] },
  'gen-17-6': { fulfillmentRefs: ['Romans 4:17', 'Matthew 1:1-16', 'Revelation 1:6'] },
  'gen-17-7': { fulfillmentRefs: ['Hebrews 13:20', 'Luke 1:72-73'] },
  'gen-17-8': { fulfillmentRefs: ['Hebrews 11:16', '2 Peter 3:13', 'Revelation 21:10'] },
  'gen-17-16': { fulfillmentRefs: ['Romans 9:6-8', 'Galatians 4:28', 'Luke 1:32-33'] },
  'gen-17-19': { fulfillmentRefs: ['Galatians 4:22-28', 'Hebrews 11:18', 'Romans 9:7-9'] },
  'gen-17-22': { fulfillmentRefs: ['Acts 7:8', 'Luke 2:21'] },
  'gen-18-10': { fulfillmentRefs: ['Romans 9:9', 'Hebrews 11:11', 'Luke 1:13'] },
  'gen-18-14': { fulfillmentRefs: ['Luke 1:37', 'Matthew 19:26'] },
  'gen-18-18': { fulfillmentRefs: ['Galatians 3:8', 'Acts 3:25', 'John 12:32'] },
  'gen-18-19': { fulfillmentRefs: ['Deuteronomy 4:9', 'Ephesians 6:4'] },
  'gen-18-25': { fulfillmentRefs: ['2 Peter 3:9', 'Romans 9:27'] },
  'gen-19-24': { fulfillmentRefs: ['2 Peter 2:6', 'Jude 1:7'] },
  'gen-19-26': { fulfillmentRefs: ['Luke 17:32', 'Matthew 10:38'] },

  // Isaac
  'gen-21-12': { fulfillmentRefs: ['Romans 9:7', 'Hebrews 11:18', 'Galatians 4:22-23'] },
  'gen-21-13': { fulfillmentRefs: ['Galatians 4:29-30', 'Romans 9:8'] },
  'gen-22-1': { fulfillmentRefs: ['Hebrews 11:17', 'James 1:12'] },
  'gen-22-2': { fulfillmentRefs: ['Hebrews 11:17', 'John 3:16', 'Romans 8:32'] },
  'gen-22-5': { fulfillmentRefs: ['Hebrews 11:17', 'John 1:29'] },
  'gen-22-8': { fulfillmentRefs: ['John 1:29', 'Romans 8:32', '1 Peter 1:19-20'] },
  'gen-22-14': { fulfillmentRefs: ['Romans 8:32', 'John 1:29', 'Revelation 5:6'] },
  'gen-22-16': { fulfillmentRefs: ['Hebrews 6:13-14', 'Luke 1:73'] },
  'gen-22-17': { fulfillmentRefs: ['Hebrews 11:12', 'Romans 4:18', 'Galatians 3:29'] },
  'gen-22-18': { fulfillmentRefs: ['Galatians 3:16', 'Acts 3:25', 'Acts 3:26'] },
  'gen-23-4': { fulfillmentRefs: ['Hebrews 11:13', '1 Peter 2:11'] },
  'gen-24-7': { fulfillmentRefs: ['Hebrews 11:8', 'John 14:2-3', 'Hebrews 11:13-14'] },
  'gen-24-40': { fulfillmentRefs: ['Hebrews 13:5', 'Genesis 24:27'] },
  'gen-24-67': { fulfillmentRefs: ['Isaiah 54:5', 'Revelation 21:9'] },
  'gen-25-23': { fulfillmentRefs: ['Romans 9:10-13', 'Malachi 1:2-3'] },
  'gen-26-3': { fulfillmentRefs: ['Acts 3:25', 'Galatians 3:8'] },
  'gen-26-4': { fulfillmentRefs: ['Galatians 3:8', 'Acts 3:25', 'Hebrews 11:12'] },
  'gen-26-5': { fulfillmentRefs: ['Hebrews 11:8', 'Romans 4:16'] },
  'gen-27-29': { fulfillmentRefs: ['Numbers 24:9', 'Revelation 5:5'] },
  'gen-27-33': { fulfillmentRefs: ['Hebrews 12:17', 'Isaiah 48:8'] },
  'gen-28-12': { fulfillmentRefs: ['John 1:51', 'Hebrews 1:14'] },
  'gen-28-13': { fulfillmentRefs: ['Genesis 26:24', 'Hebrews 11:13'] },
  'gen-28-14': { fulfillmentRefs: ['Luke 3:23-38', 'Galatians 3:16', 'Ephesians 3:6'] },
  'gen-28-15': { fulfillmentRefs: ['Hebrews 13:5', 'Matthew 28:20'] },
  'gen-28-17': { fulfillmentRefs: ['Hebrews 12:22', 'Revelation 21:10'] },

  // Jacob / Israel
  'gen-31-13': { fulfillmentRefs: ['Hebrews 11:13', 'John 1:51'] },
  'gen-31-42': { fulfillmentRefs: ['Genesis 28:13', 'Hebrews 11:6'] },
  'gen-32-24': { fulfillmentRefs: ['Hosea 12:4', 'Luke 13:24'] },
  'gen-32-28': { fulfillmentRefs: ['Isaiah 49:26', 'Hebrews 11:21', 'Philippians 2:10-11'] },
  'gen-32-30': { fulfillmentRefs: ['John 1:18', 'John 14:9'] },
  'gen-33-20': { fulfillmentRefs: ['Hebrews 11:9', 'Genesis 28:19'] },
  'gen-35-9': { fulfillmentRefs: ['Genesis 35:11', 'Genesis 17:1'] },
  'gen-35-10': { fulfillmentRefs: ['Genesis 17:5', 'Genesis 32:28'] },
  'gen-35-11': { fulfillmentRefs: ['2 Samuel 7:12-16', 'Luke 1:32-33', 'Matthew 1:1'] },
  'gen-35-12': { fulfillmentRefs: ['Romans 9:4-5', 'Acts 3:25', 'Galatians 3:16'] },
  'gen-35-22': { fulfillmentRefs: ['Genesis 49:3-4', '1 Chronicles 5:1-2'] },
  'gen-36-31': { fulfillmentRefs: ['Genesis 36:1', 'Numbers 24:18'] },

  // Joseph (type of Christ)
  'gen-37-2': { fulfillmentRefs: ['Acts 7:9', 'Genesis 45:5'] },
  'gen-37-5': { fulfillmentRefs: ['Genesis 45:5-8', 'Genesis 50:20', 'Romans 8:28'] },
  'gen-37-7': { fulfillmentRefs: ['Philippians 2:9-11', 'Revelation 5:5', 'Isaiah 45:23'] },
  'gen-37-9': { fulfillmentRefs: ['Revelation 12:1', 'Genesis 49:8-10'] },
  'gen-37-11': { fulfillmentRefs: ['Luke 2:51', 'Acts 7:9'] },
  'gen-37-23': { fulfillmentRefs: ['Genesis 37:28', 'Matthew 27:35'] },
  'gen-37-28': { fulfillmentRefs: ['Zechariah 11:12-13', 'Matthew 27:3-5', 'Acts 2:23'] },
  'gen-37-34': { fulfillmentRefs: ['Genesis 42:38', 'Genesis 37:35'] },
  'gen-37-35': { fulfillmentRefs: ['Matthew 2:18', 'Revelation 21:4'] },
  'gen-38-26': { fulfillmentRefs: ['Matthew 1:3', 'Luke 3:33'] },
  'gen-39-2': { fulfillmentRefs: ['Acts 7:9', 'Psalm 105:17-19'] },
  'gen-39-21': { fulfillmentRefs: ['Acts 7:9-10', '2 Timothy 2:9', 'Psalm 105:17-19'] },
  'gen-39-23': { fulfillmentRefs: ['Acts 7:9', '2 Timothy 2:9'] },
  'gen-40-15': { fulfillmentRefs: ['Acts 7:9', 'Genesis 41:14'] },
  'gen-41-41': { fulfillmentRefs: ['Acts 7:10', 'Philippians 2:9-10', 'Daniel 7:14'] },
  'gen-41-45': { fulfillmentRefs: ['Acts 7:10', 'Genesis 41:50'] },
  'gen-41-46': { fulfillmentRefs: ['Luke 3:23', 'Genesis 41:46'] },
  'gen-41-57': { fulfillmentRefs: ['John 12:32', 'Acts 17:30', 'Revelation 22:17'] },
  'gen-42-21': { fulfillmentRefs: ['Zechariah 12:10', 'Luke 23:34', 'John 1:11'] },
  'gen-42-36': { fulfillmentRefs: ['Genesis 43:14', 'Jeremiah 31:20'] },
  'gen-43-14': { fulfillmentRefs: ['Genesis 43:29', 'Hebrews 11:6'] },
  'gen-44-34': { fulfillmentRefs: ['Genesis 45:5', 'John 10:11'] },
  'gen-45-3': { fulfillmentRefs: ['Acts 7:13', 'John 1:11'] },
  'gen-45-5': { fulfillmentRefs: ['Romans 8:28', 'Genesis 50:20', 'Acts 2:23'] },
  'gen-45-7': { fulfillmentRefs: ['Genesis 45:5', 'Romans 8:28'] },
  'gen-45-8': { fulfillmentRefs: ['Acts 2:36', 'Philippians 2:9-11', 'Genesis 41:41-44'] },
  'gen-45-15': { fulfillmentRefs: ['Genesis 45:5', 'Acts 7:13'] },
  'gen-46-4': { fulfillmentRefs: ['Genesis 50:24', 'Exodus 3:8'] },
  'gen-47-9': { fulfillmentRefs: ['Hebrews 11:13', '1 Peter 2:11'] },
  'gen-48-15': { fulfillmentRefs: ['Genesis 48:16', 'Psalm 121:7-8'] },
  'gen-48-16': { fulfillmentRefs: ['Exodus 23:20-21', 'Isaiah 63:9', 'John 1:1'] },
  'gen-48-19': { fulfillmentRefs: ['Galatians 3:29', 'Ephesians 2:12-13', 'Romans 9:24-26'] },

  // Final blessings
  'gen-49-1': { fulfillmentRefs: ['Hebrews 1:1-2', 'Numbers 24:14', 'Deuteronomy 4:30'] },
  'gen-49-8': { fulfillmentRefs: ['Psalm 60:7', 'Revelation 5:5', 'Matthew 1:2'] },
  'gen-49-10': {
    fulfillmentRefs: [
      '2 Samuel 7:12-16',
      'Psalm 89:3-4',
      'Isaiah 9:6-7',
      'Luke 1:32-33',
      'Revelation 5:5',
    ],
  },
  'gen-49-12': { fulfillmentRefs: ['Proverbs 31:28', 'Isaiah 53:12'] },
  'gen-49-18': { fulfillmentRefs: ['Genesis 49:10', 'Psalm 118:22'] },
  'gen-49-22': { fulfillmentRefs: ['Psalm 1:3', 'John 15:5'] },
  'gen-49-24': { fulfillmentRefs: ['Isaiah 49:26', 'Isaiah 60:16', 'Psalm 118:22'] },
  'gen-49-26': { fulfillmentRefs: ['Deuteronomy 33:16', 'Habakkuk 3:3'] },
  'gen-50-20': { fulfillmentRefs: ['Romans 8:28', 'Acts 2:23', 'Acts 4:27-28'] },
  'gen-50-24': { fulfillmentRefs: ['Exodus 13:19', 'Hebrews 11:22'] },
  'gen-50-25': { fulfillmentRefs: ['Exodus 13:19', 'Joshua 24:32'] },
};

// Merge: additional overrides/extends existing (keep original if both define, union of refs)
const mergedThreads: Record<string, ProphecyThread> = { ...genesisProphecies };
for (const [id, thread] of Object.entries(ADDITIONAL_THREADS)) {
  const existing = mergedThreads[id];
  if (!existing) {
    mergedThreads[id] = thread;
  } else {
    const union = [...existing.fulfillmentRefs];
    for (const r of thread.fulfillmentRefs) {
      if (!union.includes(r)) union.push(r);
    }
    mergedThreads[id] = { fulfillmentRefs: union };
  }
}

// ─── Collect all refs and build complete fulfillment verse set ────────────────

const existingFulfillmentIds = new Set(fulfillmentVerses.map(v => v.id));
const existingGenesisIds = new Set(genesisVersesAndFulfillments.map(v => v.id));

// Also index by id from both for text reuse
const textById = new Map<string, string>();
for (const v of fulfillmentVerses) textById.set(v.id, v.text);
for (const v of genesisVersesAndFulfillments) textById.set(v.id, v.text);

const needed: VerseLike[] = [];
const seenIds = new Set<string>([...existingFulfillmentIds, ...existingGenesisIds]);
const allRefs = new Set<string>();
const unresolved: string[] = [];

for (const thread of Object.values(mergedThreads)) {
  for (const ref of thread.fulfillmentRefs) {
    allRefs.add(ref);
    const parsed = parseRef(ref);
    if (!parsed) {
      unresolved.push(ref);
      continue;
    }
    for (let v = parsed.startVerse; v <= parsed.endVerse; v++) {
      const id = verseId(parsed.book, parsed.chapter, v);
      if (seenIds.has(id)) continue;

      // Prefer existing clean text from fulfillments, else KJV raw
      let text = textById.get(id);
      if (!text) {
        const kjv = getKjvVerse(parsed.book, parsed.chapter, v);
        if (!kjv) {
          unresolved.push(`${ref} (verse ${parsed.book} ${parsed.chapter}:${v} not in KJV)`);
          continue;
        }
        text = cleanText(kjv);
      }

      // Genesis internal refs stay in genesisData; only add non-Genesis or missing to fulfillments
      // If it's Genesis and already in genesisData, skip (handled above by seenIds)
      needed.push({
        id,
        book: parsed.book,
        chapter: parsed.chapter,
        verseNumber: v,
        text: cleanText(text),
        isProphecy: false,
      });
      seenIds.add(id);
    }
  }
}

console.log('=== Audit ===');
console.log('Merged prophecy threads:', Object.keys(mergedThreads).length);
console.log('Unique refs:', allRefs.size);
console.log('New fulfillment verses to add:', needed.length);
if (unresolved.length) {
  console.log('Unresolved:', unresolved);
}

// ─── Write prophecies.ts ─────────────────────────────────────────────────────

function formatThreads(record: Record<string, ProphecyThread>): string {
  const ids = Object.keys(record).sort((a, b) => {
    const pa = a.match(/^gen-(\d+)-(\d+)$/);
    const pb = b.match(/^gen-(\d+)-(\d+)$/);
    if (pa && pb) {
      const ca = +pa[1]; const cb = +pb[1];
      if (ca !== cb) return ca - cb;
      return +pa[2] - +pb[2];
    }
    return a.localeCompare(b);
  });

  const lines: string[] = [];
  let lastChapter = 0;
  for (const id of ids) {
    const m = id.match(/^gen-(\d+)-(\d+)$/);
    if (m) {
      const ch = +m[1];
      if (ch !== lastChapter) {
        if (lastChapter !== 0) lines.push('');
        lines.push(`  // Chapter ${ch}`);
        lastChapter = ch;
      }
    }
    const refs = record[id].fulfillmentRefs;
    const refStr =
      refs.length === 1
        ? `['${refs[0]}']`
        : `[\n${refs.map(r => `      '${r}'`).join(',\n')},\n    ]`;
    lines.push(`  '${id}': {`);
    lines.push(`    fulfillmentRefs: ${refStr},`);
    lines.push(`  },`);
  }
  return lines.join('\n');
}

const propheciesTs = `/**
 * Messianic / typological prophecy threads in Genesis.
 * Maps Genesis verse IDs to fulfillment references (NT / later OT).
 */
export interface ProphecyThread {
  fulfillmentRefs: string[];
}

export const genesisProphecies: Record<string, ProphecyThread> = {
${formatThreads(mergedThreads)}
};

export const genesisProphecyCount = Object.keys(genesisProphecies).length;
`;

fs.writeFileSync(path.join(__dirname, '../src/data/prophecies.ts'), propheciesTs);
console.log('Wrote prophecies.ts');

// ─── Append new fulfillments ─────────────────────────────────────────────────

// Group new verses by book for readability
const byBook = new Map<string, VerseLike[]>();
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

// Read current fulfillments file and insert new verses before the closing ];
const fulfillPath = path.join(__dirname, '../src/data/fulfillments.ts');
let fulfillSrc = fs.readFileSync(fulfillPath, 'utf8');

const newLines: string[] = [];
for (const book of order) {
  const list = byBook.get(book);
  if (!list || list.length === 0) continue;
  list.sort((a, b) => a.chapter - b.chapter || a.verseNumber - b.verseNumber);
  newLines.push(`  // ${book} (added)`);
  for (const v of list) {
    const textEscaped = v.text.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    newLines.push(
      `  { id: '${v.id}', book: '${v.book.replace(/'/g, "\\'")}', chapter: ${v.chapter}, verseNumber: ${v.verseNumber}, text: '${textEscaped}', isProphecy: false },`
    );
  }
}

if (newLines.length > 0) {
  // Insert before the final "];"
  const insertMarker = '\n];\n\n/** Quick lookup by verse id */';
  if (fulfillSrc.includes(insertMarker)) {
    fulfillSrc = fulfillSrc.replace(
      insertMarker,
      `\n\n${newLines.join('\n')}\n];\n\n/** Quick lookup by verse id */`
    );
  } else {
    // Fallback: insert before last ];
    const lastIdx = fulfillSrc.lastIndexOf('\n];');
    fulfillSrc =
      fulfillSrc.slice(0, lastIdx) +
      `\n\n${newLines.join('\n')}\n` +
      fulfillSrc.slice(lastIdx);
  }
  fs.writeFileSync(fulfillPath, fulfillSrc);
  console.log('Wrote fulfillments.ts (+', needed.length, 'verses)');
} else {
  console.log('No new fulfillment verses needed');
}

// Also clean curly-brace heb notes from genesisData? User asked for referential verses complete.
// Leave genesisData text as-is (matches original fetch style).

console.log('Done.');
