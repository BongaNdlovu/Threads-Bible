/**
 * Generate full KJV verse arrays for Pauline epistles.
 * Run: npx tsx scripts/generatePaulineBooks.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  Romans: 'rom',
  '1 Corinthians': '1co',
  '2 Corinthians': '2co',
  Galatians: 'gal',
  Ephesians: 'eph',
  Philippians: 'php',
  Colossians: 'col',
  '1 Thessalonians': '1th',
  '2 Thessalonians': '2th',
  '1 Timothy': '1ti',
  '2 Timothy': '2ti',
  Titus: 'tit',
  Philemon: 'phm',
};

/** file slug + TS export name per book */
const books = [
  { name: 'Romans', file: 'romansData.ts', exportName: 'romansVerses' },
  { name: '1 Corinthians', file: 'corinthians1Data.ts', exportName: 'corinthians1Verses' },
  { name: '2 Corinthians', file: 'corinthians2Data.ts', exportName: 'corinthians2Verses' },
  { name: 'Galatians', file: 'galatiansData.ts', exportName: 'galatiansVerses' },
  { name: 'Ephesians', file: 'ephesiansData.ts', exportName: 'ephesiansVerses' },
  { name: 'Philippians', file: 'philippiansData.ts', exportName: 'philippiansVerses' },
  { name: 'Colossians', file: 'colossiansData.ts', exportName: 'colossiansVerses' },
  { name: '1 Thessalonians', file: 'thessalonians1Data.ts', exportName: 'thessalonians1Verses' },
  { name: '2 Thessalonians', file: 'thessalonians2Data.ts', exportName: 'thessalonians2Verses' },
  { name: '1 Timothy', file: 'timothy1Data.ts', exportName: 'timothy1Verses' },
  { name: '2 Timothy', file: 'timothy2Data.ts', exportName: 'timothy2Verses' },
  { name: 'Titus', file: 'titusData.ts', exportName: 'titusVerses' },
  { name: 'Philemon', file: 'philemonData.ts', exportName: 'philemonVerses' },
];

let totalVerses = 0;
let totalChapters = 0;

for (const book of books) {
  const src = bible.find(b => b.name === book.name);
  if (!src) {
    console.error('Missing book in KJV JSON:', book.name);
    process.exit(1);
  }
  const slug = SLUG[book.name];
  const lines: string[] = [];
  lines.push(`import { Verse } from './types';`);
  lines.push('');
  lines.push(`/** Full KJV text of ${book.name} (${src.chapters.length} chapters). */`);
  lines.push(`export const ${book.exportName}: Verse[] = [`);

  src.chapters.forEach((chapter, cIdx) => {
    const ch = cIdx + 1;
    lines.push(`  // Chapter ${ch}`);
    chapter.forEach((verseText, vIdx) => {
      const v = vIdx + 1;
      const text = cleanText(verseText).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      lines.push(
        `  { id: '${slug}-${ch}-${v}', book: '${book.name}', chapter: ${ch}, verseNumber: ${v}, text: '${text}', isThread: false },`
      );
    });
  });

  lines.push('];');
  lines.push('');
  const verseCount = src.chapters.reduce((n, c) => n + c.length, 0);
  totalVerses += verseCount;
  totalChapters += src.chapters.length;
  console.log(`${book.name}: ${src.chapters.length} ch, ${verseCount} verses`);
  fs.writeFileSync(path.join(__dirname, '../src/data/', book.file), lines.join('\n'));
}

console.log(`\nTotal: ${books.length} books, ${totalChapters} chapters, ${totalVerses} verses`);
