/**
 * Generate full KJV verse arrays for all remaining OT books.
 * Run: npx tsx scripts/generateOtBooks.ts
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
  Leviticus: 'lev', Numbers: 'num', Deuteronomy: 'deu', Joshua: 'jos', Judges: 'jdg',
  Ruth: 'rut', '1 Samuel': '1sa', '2 Samuel': '2sa', '1 Kings': '1ki', '2 Kings': '2ki',
  '1 Chronicles': '1ch', '2 Chronicles': '2ch', Ezra: 'ezr', Nehemiah: 'neh', Esther: 'est',
  Job: 'job', Psalms: 'psa', Proverbs: 'pro', Ecclesiastes: 'ecc', 'Song of Solomon': 'sng',
  Isaiah: 'isa', Jeremiah: 'jer', Lamentations: 'lam', Ezekiel: 'ezk', Hosea: 'hos',
  Joel: 'jol', Amos: 'amo', Obadiah: 'oba', Jonah: 'jon', Micah: 'mic', Nahum: 'nam',
  Habakkuk: 'hab', Zephaniah: 'zep', Haggai: 'hag', Zechariah: 'zec', Malachi: 'mal',
};

/** file / export naming — avoid reserved words and collisions */
const books = [
  { name: 'Leviticus', file: 'leviticusData.ts', exportName: 'leviticusVerses' },
  { name: 'Numbers', file: 'numbersData.ts', exportName: 'numbersVerses' },
  { name: 'Deuteronomy', file: 'deuteronomyData.ts', exportName: 'deuteronomyVerses' },
  { name: 'Joshua', file: 'joshuaData.ts', exportName: 'joshuaVerses' },
  { name: 'Judges', file: 'judgesData.ts', exportName: 'judgesVerses' },
  { name: 'Ruth', file: 'ruthData.ts', exportName: 'ruthVerses' },
  { name: '1 Samuel', file: 'samuel1Data.ts', exportName: 'samuel1Verses' },
  { name: '2 Samuel', file: 'samuel2Data.ts', exportName: 'samuel2Verses' },
  { name: '1 Kings', file: 'kings1Data.ts', exportName: 'kings1Verses' },
  { name: '2 Kings', file: 'kings2Data.ts', exportName: 'kings2Verses' },
  { name: '1 Chronicles', file: 'chronicles1Data.ts', exportName: 'chronicles1Verses' },
  { name: '2 Chronicles', file: 'chronicles2Data.ts', exportName: 'chronicles2Verses' },
  { name: 'Ezra', file: 'ezraData.ts', exportName: 'ezraVerses' },
  { name: 'Nehemiah', file: 'nehemiahData.ts', exportName: 'nehemiahVerses' },
  { name: 'Esther', file: 'estherData.ts', exportName: 'estherVerses' },
  { name: 'Job', file: 'jobData.ts', exportName: 'jobVerses' },
  { name: 'Psalms', file: 'psalmsData.ts', exportName: 'psalmsVerses' },
  { name: 'Proverbs', file: 'proverbsData.ts', exportName: 'proverbsVerses' },
  { name: 'Ecclesiastes', file: 'ecclesiastesData.ts', exportName: 'ecclesiastesVerses' },
  { name: 'Song of Solomon', file: 'songData.ts', exportName: 'songVerses' },
  { name: 'Isaiah', file: 'isaiahData.ts', exportName: 'isaiahVerses' },
  { name: 'Jeremiah', file: 'jeremiahData.ts', exportName: 'jeremiahVerses' },
  { name: 'Lamentations', file: 'lamentationsData.ts', exportName: 'lamentationsVerses' },
  { name: 'Ezekiel', file: 'ezekielData.ts', exportName: 'ezekielVerses' },
  { name: 'Hosea', file: 'hoseaData.ts', exportName: 'hoseaVerses' },
  { name: 'Joel', file: 'joelData.ts', exportName: 'joelVerses' },
  { name: 'Amos', file: 'amosData.ts', exportName: 'amosVerses' },
  { name: 'Obadiah', file: 'obadiahData.ts', exportName: 'obadiahVerses' },
  { name: 'Jonah', file: 'jonahData.ts', exportName: 'jonahVerses' },
  { name: 'Micah', file: 'micahFullData.ts', exportName: 'micahFullVerses' },
  { name: 'Nahum', file: 'nahumData.ts', exportName: 'nahumVerses' },
  { name: 'Habakkuk', file: 'habakkukData.ts', exportName: 'habakkukVerses' },
  { name: 'Zephaniah', file: 'zephaniahData.ts', exportName: 'zephaniahVerses' },
  { name: 'Haggai', file: 'haggaiData.ts', exportName: 'haggaiVerses' },
  { name: 'Zechariah', file: 'zechariahData.ts', exportName: 'zechariahVerses' },
  { name: 'Malachi', file: 'malachiData.ts', exportName: 'malachiVerses' },
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
