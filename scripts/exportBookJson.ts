/**
 * Export each Bible book as JSON under public/books/ for lazy loading.
 * Also repairs known KJV dump gaps (Matthew 2:16).
 * Run: npx tsx scripts/exportBookJson.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'public', 'books');

type BibleBook = { name: string; chapters: string[][] };

const bible: BibleBook[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'kjv.json'), 'utf8').trim().replace(/^﻿/, '')
);

function cleanText(raw: string): string {
  let t = raw;
  t = t.replace(/\{([^}]*)\}/g, (_m, inner: string) => {
    if (/^[\w\s'.,;:!?-]+$/.test(inner) && !/:/.test(inner) && !/\b(?:Heb|Gr|Chaldee|or)\b/i.test(inner)) {
      return inner;
    }
    return '';
  });
  t = t.replace(/\s+[A-Za-z][\w'...]*:\s*(?:Heb|Gr|Chaldee|or)\b[^.]*\.?/gi, '');
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t;
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

/** Standard KJV Matt 2:16 — missing from the source dump (chapter had only 22 verses). */
const MATT_2_16 =
  'Then Herod, when he saw that he was mocked of the wise men, was exceeding wroth, and sent forth, and slew all the children that were in Bethlehem, and in all the coasts thereof, from two years old and under, according to the time which he had diligently enquired of the wise men.';

/** Standard KJV Matt 22:40 — omitted by the source dump (chapter 22 has 45 verses; tail shifted by one). */
const MATT_22_40 = 'On these two commandments hang all the law and the prophets.';

/** Standard KJV Matt 26:68 — omitted by the source dump (chapter 26 has 74 verses; tail shifted by one). */
const MATT_26_68 = 'Saying, Prophesy unto us, thou Christ, Who is he that smote thee?';

type JsonVerse = { id: string; chapter: number; verse: number; text: string };

function repairMatthew(chapters: string[][]): string[][] {
  const fixed = chapters.map(c => [...c]);
  const ch2 = fixed[1];
  if (ch2 && ch2.length === 22) {
    // Dump is missing the slaughter of the innocents between v15 and current v16.
    ch2.splice(15, 0, MATT_2_16);
  }
  const ch22 = fixed[21];
  if (ch22 && ch22.length === 45 && ch22[39].startsWith('While the Pharisees')) {
    // Dump is missing Matt 22:40 — from here to the end of the chapter the
    // numbering is shifted one verse early.
    ch22.splice(39, 0, MATT_22_40);
  }
  const ch26 = fixed[25];
  if (ch26 && ch26.length === 74 && ch26[67].startsWith('Now Peter sat')) {
    // Dump is missing Matt 26:68 — same one-verse shift to the end of the chapter.
    ch26.splice(67, 0, MATT_26_68);
  }
  return fixed;
}

function repairRevelation(chapters: string[][]): string[][] {
  const fixed = chapters.map(c => [...c]);
  const ch12 = fixed[11];
  const ch13 = fixed[12];
  if (
    ch12 && ch13 &&
    ch12.length === 18 &&
    ch12[17] === 'And I stood upon the sand of the sea.' &&
    ch13[0].startsWith('And saw a beast')
  ) {
    // The dump splits the phrase critical-text style (12:18 + "And saw…" in 13:1).
    // The KJV reads it as the opening of 13:1: "And I stood upon the sand of the
    // sea, and saw a beast rise up out of the sea…" — merge and drop the extra verse.
    ch13[0] = ch13[0].replace(/^And saw/, 'And I stood upon the sand of the sea, and saw');
    ch12.pop();
  }
  return fixed;
}

fs.mkdirSync(outDir, { recursive: true });

const registry: {
  slug: string;
  name: string;
  chapters: number;
  verses: number;
}[] = [];

for (const src of bible) {
  const slug = SLUG[src.name];
  if (!slug) {
    console.error('No slug for', src.name);
    process.exit(1);
  }
  let chapters = src.chapters.map(c => [...c]);
  if (src.name === 'Matthew') chapters = repairMatthew(chapters);
  if (src.name === 'Revelation') chapters = repairRevelation(chapters);

  const verses: JsonVerse[] = [];
  chapters.forEach((chapter, cIdx) => {
    const ch = cIdx + 1;
    chapter.forEach((raw, vIdx) => {
      verses.push({
        id: `${slug}-${ch}-${vIdx + 1}`,
        chapter: ch,
        verse: vIdx + 1,
        text: cleanText(raw),
      });
    });
  });

  const payload = {
    slug,
    name: src.name,
    chapters: chapters.length,
    verses: verses.length,
    data: verses,
  };

  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(payload));
  registry.push({
    slug,
    name: src.name,
    chapters: chapters.length,
    verses: verses.length,
  });
  console.log(`${src.name} (${slug}): ${chapters.length} ch, ${verses.length} verses`);
}

// Compact registry for the app (no verse text)
const registryTs = `/** Generated by scripts/exportBookJson.ts — do not edit by hand. */
export interface BookMeta {
  slug: string;
  name: string;
  chapters: number;
  verses: number;
}

export const BOOK_REGISTRY: BookMeta[] = ${JSON.stringify(registry, null, 2)};

export const BOOK_BY_NAME: Record<string, BookMeta> = Object.fromEntries(
  BOOK_REGISTRY.map(b => [b.name, b])
);

`;

fs.writeFileSync(path.join(root, 'src', 'data', 'bookRegistry.ts'), registryTs);
console.log('\nWrote public/books/*.json and src/data/bookRegistry.ts');
console.log('Total books:', registry.length, 'Total verses:', registry.reduce((n, b) => n + b.verses, 0));
