/**
 * Generate full KJV verse arrays for Exodus, Daniel, Revelation.
 * Run: npx tsx scripts/generateBooks.ts
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
  Exodus: 'exo',
  Daniel: 'dan',
  Revelation: 'rev',
};

const books = [
  { name: 'Exodus', file: 'exodusData.ts', exportName: 'exodusVerses' },
  { name: 'Daniel', file: 'danielData.ts', exportName: 'danielVerses' },
  { name: 'Revelation', file: 'revelationData.ts', exportName: 'revelationVerses' },
];

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
  const total = src.chapters.reduce((n, c) => n + c.length, 0);
  console.log(`${book.name}: ${src.chapters.length} chapters, ${total} verses`);
  fs.writeFileSync(path.join(__dirname, '../src/data/', book.file), lines.join('\n'));
}

console.log('Wrote exodusData.ts, danielData.ts, revelationData.ts');
