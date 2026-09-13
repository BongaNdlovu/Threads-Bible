/**
 * Re-audit: every fulfillmentRef in prophecies.ts must resolve to at least one verse.
 * Run: npx tsx scripts/auditThreads.ts
 */
import { genesisProphecies } from '../src/data/prophecies';
import { fulfillmentVerses } from '../src/data/fulfillments';
import { genesisVersesAndFulfillments } from '../src/data/genesisData';

type Verse = {
  id: string;
  book: string;
  chapter: number;
  verseNumber: number;
  text: string;
  isThread: boolean;
  fulfillmentRefs?: string[];
};

function parseRef(ref: string): { book: string; chapter: number; startVerse: number; endVerse: number } | null {
  const BOOK_ALIASES: Record<string, string> = {
    psalm: 'Psalms', psalms: 'Psalms',
  };
  const match = ref.trim().match(/^(\d?\s?[A-Za-z]+(?:\s+[A-Za-z]+)?)\s+(\d+):(\d+)(?:\s*-\s*(\d+))?/);
  if (!match) return null;
  let book = match[1].trim();
  const key = book.toLowerCase();
  if (BOOK_ALIASES[key]) book = BOOK_ALIASES[key];
  return {
    book,
    chapter: parseInt(match[2], 10),
    startVerse: parseInt(match[3], 10),
    endVerse: match[4] ? parseInt(match[4], 10) : parseInt(match[3], 10),
  };
}

const allVerses: Verse[] = [...genesisVersesAndFulfillments, ...fulfillmentVerses];

const missingFromProphecy: Record<string, string[]> = {};
const partial: string[] = [];
const allRefs = new Set<string>();

for (const [verseId, thread] of Object.entries(genesisProphecies)) {
  for (const ref of thread.fulfillmentRefs) {
    allRefs.add(ref);
    const parsed = parseRef(ref);
    if (!parsed) {
      if (!missingFromProphecy[verseId]) missingFromProphecy[verseId] = [];
      missingFromProphecy[verseId].push(`${ref} (unparsable)`);
      continue;
    }
    const matched = allVerses.filter(
      v =>
        v.book.toLowerCase() === parsed.book.toLowerCase() &&
        v.chapter === parsed.chapter &&
        v.verseNumber >= parsed.startVerse &&
        v.verseNumber <= parsed.endVerse
    );
    if (matched.length === 0) {
      if (!missingFromProphecy[verseId]) missingFromProphecy[verseId] = [];
      missingFromProphecy[verseId].push(ref);
    } else if (parsed.startVerse !== parsed.endVerse) {
      const expected = parsed.endVerse - parsed.startVerse + 1;
      if (matched.length < expected) {
        partial.push(`${ref}: found ${matched.length}/${expected}`);
      }
    }
  }
}

console.log('Prophecy threads:', Object.keys(genesisProphecies).length);
console.log('Unique refs:', allRefs.size);
console.log('Fulfillment verses:', fulfillmentVerses.length);
console.log('Genesis verses:', genesisVersesAndFulfillments.length);

if (Object.keys(missingFromProphecy).length === 0) {
  console.log('\nAll refs resolve.');
} else {
  console.log('\nUNRESOLVED:');
  for (const [verseId, refs] of Object.entries(missingFromProphecy)) {
    console.log(`  ${verseId}: ${refs.join(', ')}`);
  }
}

if (partial.length) {
  console.log('\nPARTIAL RANGES:');
  partial.forEach(p => console.log('  ' + p));
} else {
  console.log('All ranges complete.');
}

// Sample a few prophecy verses from genesis
const withThreads = genesisVersesAndFulfillments.filter(v => genesisProphecies[v.id]);
console.log('\nGenesis verses with threads:', withThreads.length);
const chapters = [...new Set(withThreads.map(v => v.chapter))].sort((a,b)=>a-b);
console.log('Chapters covered:', chapters.join(', '));
