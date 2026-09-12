import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const booksDir = path.join(root, 'public', 'books');

const counts: Record<string, number[]> = {};

for (const b of BOOK_REGISTRY) {
  const p = path.join(booksDir, `${b.slug}.json`);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  const chCounts: number[] = new Array(b.chapters).fill(0);
  for (const v of data.data) {
    chCounts[v.chapter - 1] = Math.max(chCounts[v.chapter - 1], v.verse);
  }
  counts[b.slug] = chCounts;
}

const outContent = `/**
 * Canonical verse counts per chapter for all 66 books.
 * Generated from canonical public/books/*.json.
 */
export const CHAPTER_VERSE_COUNTS: Record<string, number[]> = ${JSON.stringify(counts, null, 2)};

export function getVerseCount(slug: string, chapter: number): number {
  const list = CHAPTER_VERSE_COUNTS[slug];
  if (!list || chapter < 1 || chapter > list.length) return 0;
  return list[chapter - 1] || 0;
}
`;

fs.writeFileSync(path.join(root, 'src', 'data', 'verseCounts.ts'), outContent, 'utf8');
console.log('Successfully generated src/data/verseCounts.ts');
