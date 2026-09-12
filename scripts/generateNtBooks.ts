/**
 * Generate full KJV verse arrays for remaining NT books.
 * Run: npx tsx scripts/generateNtBooks.ts
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
  Matthew: 'mat',
  Mark: 'mrk',
  Luke: 'luk',
  John: 'joh',
  Acts: 'act',
  Hebrews: 'heb',
  James: 'jam',
  '1 Peter': '1pe',
  '2 Peter': '2pe',
  '1 John': '1jn',
  '2 John': '2jn',
  '3 John': '3jn',
  Jude: 'jud',
};

const books = [
  { name: 'Matthew', file: 'matthewData.ts', exportName: 'matthewFullVerses' },
  { name: 'Mark', file: 'markData.ts', exportName: 'markVerses' },
  { name: 'Luke', file: 'lukeData.ts', exportName: 'lukeVerses' },
  { name: 'John', file: 'johnData.ts', exportName: 'johnVerses' },
  { name: 'Acts', file: 'actsData.ts', exportName: 'actsVerses' },
  { name: 'Hebrews', file: 'hebrewsData.ts', exportName: 'hebrewsVerses' },
  { name: 'James', file: 'jamesData.ts', exportName: 'jamesVerses' },
  { name: '1 Peter', file: 'peter1Data.ts', exportName: 'peter1Verses' },
  { name: '2 Peter', file: 'peter2Data.ts', exportName: 'peter2Verses' },
  { name: '1 John', file: 'john1Data.ts', exportName: 'john1Verses' },
  { name: '2 John', file: 'john2Data.ts', exportName: 'john2Verses' },
  { name: '3 John', file: 'john3Data.ts', exportName: 'john3Verses' },
  { name: 'Jude', file: 'judeData.ts', exportName: 'judeVerses' },
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
  lines.push(`import { Verse } from './mockData';`);
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
        `  { id: '${slug}-${ch}-${v}', book: '${book.name}', chapter: ${ch}, verseNumber: ${v}, text: '${text}', isProphecy: false },`
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
