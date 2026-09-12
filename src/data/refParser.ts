import { BOOK_REGISTRY, BOOK_BY_NAME } from './bookRegistry';
import { getVerseCount } from './verseCounts';

export const SINGLE_CHAPTER_BOOKS = new Set([
  'Obadiah',
  'Philemon',
  '2 John',
  '3 John',
  'Jude',
]);

const BOOK_ALIASES: Record<string, string> = {
  psalm: 'Psalms',
  psalms: 'Psalms',
  ps: 'Psalms',
  psa: 'Psalms',
  gen: 'Genesis',
  ex: 'Exodus',
  exo: 'Exodus',
  exod: 'Exodus',
  lev: 'Leviticus',
  num: 'Numbers',
  deut: 'Deuteronomy',
  deu: 'Deuteronomy',
  dt: 'Deuteronomy',
  josh: 'Joshua',
  jos: 'Joshua',
  judg: 'Judges',
  jdg: 'Judges',
  rut: 'Ruth',
  '1 sam': '1 Samuel',
  '1sam': '1 Samuel',
  '1sa': '1 Samuel',
  '2 sam': '2 Samuel',
  '2sam': '2 Samuel',
  '2sa': '2 Samuel',
  '1 kgs': '1 Kings',
  '1ki': '1 Kings',
  '2 kgs': '2 Kings',
  '2ki': '2 Kings',
  '1 chron': '1 Chronicles',
  '1ch': '1 Chronicles',
  '2 chron': '2 Chronicles',
  '2ch': '2 Chronicles',
  ezr: 'Ezra',
  neh: 'Nehemiah',
  est: 'Esther',
  esth: 'Esther',
  job: 'Job',
  prov: 'Proverbs',
  pro: 'Proverbs',
  eccl: 'Ecclesiastes',
  ecc: 'Ecclesiastes',
  song: 'Song of Solomon',
  songs: 'Song of Solomon',
  'song of songs': 'Song of Solomon',
  'song of solomon': 'Song of Solomon',
  canticles: 'Song of Solomon',
  sng: 'Song of Solomon',
  isa: 'Isaiah',
  jer: 'Jeremiah',
  lam: 'Lamentations',
  ezek: 'Ezekiel',
  ezk: 'Ezekiel',
  dan: 'Daniel',
  hos: 'Hosea',
  joel: 'Joel',
  jol: 'Joel',
  amos: 'Amos',
  amo: 'Amos',
  obad: 'Obadiah',
  oba: 'Obadiah',
  jonah: 'Jonah',
  jon: 'Jonah',
  mic: 'Micah',
  micah: 'Micah',
  nah: 'Nahum',
  nam: 'Nahum',
  hab: 'Habakkuk',
  zeph: 'Zephaniah',
  zep: 'Zephaniah',
  hag: 'Haggai',
  zech: 'Zechariah',
  zec: 'Zechariah',
  mal: 'Malachi',
  matt: 'Matthew',
  mat: 'Matthew',
  mark: 'Mark',
  mrk: 'Mark',
  luke: 'Luke',
  luk: 'Luke',
  john: 'John',
  joh: 'John',
  jn: 'John',
  acts: 'Acts',
  act: 'Acts',
  rom: 'Romans',
  '1 cor': '1 Corinthians',
  '1cor': '1 Corinthians',
  '1co': '1 Corinthians',
  '2 cor': '2 Corinthians',
  '2cor': '2 Corinthians',
  '2co': '2 Corinthians',
  gal: 'Galatians',
  gala: 'Galatians',
  eph: 'Ephesians',
  ephe: 'Ephesians',
  phil: 'Philippians',
  phili: 'Philippians',
  php: 'Philippians',
  col: 'Colossians',
  colo: 'Colossians',
  '1 thess': '1 Thessalonians',
  '1thess': '1 Thessalonians',
  '1th': '1 Thessalonians',
  '2 thess': '2 Thessalonians',
  '2thess': '2 Thessalonians',
  '2th': '2 Thessalonians',
  '1 tim': '1 Timothy',
  '1tim': '1 Timothy',
  '1ti': '1 Timothy',
  '2 tim': '2 Timothy',
  '2tim': '2 Timothy',
  '2ti': '2 Timothy',
  tit: 'Titus',
  titu: 'Titus',
  phlm: 'Philemon',
  phm: 'Philemon',
  heb: 'Hebrews',
  hebr: 'Hebrews',
  jas: 'James',
  jam: 'James',
  '1 pet': '1 Peter',
  '1pet': '1 Peter',
  '1pe': '1 Peter',
  '2 pet': '2 Peter',
  '2pet': '2 Peter',
  '2pe': '2 Peter',
  '1 jn': '1 John',
  '1jn': '1 John',
  '1 john': '1 John',
  '2 jn': '2 John',
  '2jn': '2 John',
  '2 john': '2 John',
  '3 jn': '3 John',
  '3jn': '3 John',
  '3 john': '3 John',
  jude: 'Jude',
  jud: 'Jude',
  rev: 'Revelation',
  revelation: 'Revelation',
  revelations: 'Revelation',
  // Roman numeral aliases
  'i sam': '1 Samuel',
  'ii sam': '2 Samuel',
  'i kgs': '1 Kings',
  'ii kgs': '2 Kings',
  'i chron': '1 Chronicles',
  'ii chron': '2 Chronicles',
  'i cor': '1 Corinthians',
  'ii cor': '2 Corinthians',
  'i thess': '1 Thessalonians',
  'ii thess': '2 Thessalonians',
  'i tim': '1 Timothy',
  'ii tim': '2 Timothy',
  'i pet': '1 Peter',
  'ii pet': '2 Peter',
  'i jn': '1 John',
  'ii jn': '2 John',
  'iii jn': '3 John',
  'i john': '1 John',
  'ii john': '2 John',
  'iii john': '3 John',
};

// Register all canonical names and slugs
for (const b of BOOK_REGISTRY) {
  BOOK_ALIASES[b.name.toLowerCase()] = b.name;
  BOOK_ALIASES[b.slug.toLowerCase()] = b.name;
}

/** Normalize book-name variants and abbreviations to the canonical Bible name. */
export function normalizeBookName(book: string): string {
  const clean = book.trim().toLowerCase().replace(/\.+$/, '');
  return BOOK_ALIASES[clean] || BOOK_BY_NAME[book]?.name || book.trim();
}

export interface ParsedRef {
  book: string;
  chapter: number;
  startVerse: number;
  endVerse: number;
  endChapter?: number;
}

/**
 * Enhanced parseRef supporting:
 * 1. Standard: "John 3:16", "Exodus 20:8-11"
 * 2. Cross-chapter: "Isaiah 52:13-53:12"
 * 3. Whole chapter: "Psalm 104", "Leviticus 16" -> maps to startVerse: 1, endVerse: 1
 * 4. Single-chapter books without colon: "3 John 2", "Jude 7", "Obadiah 4" -> chapter: 1
 */
export function parseRef(ref: string): ParsedRef | null {
  if (!ref || typeof ref !== 'string') return null;

  let clean = ref.trim().replace(/\s*\([^)]*\)/g, '').replace(/[\u2013\u2014]/g, '-').trim();
  if (!clean) return null;

  // Normalize Roman numeral or ordinal prefixes (e.g. "I Cor", "I. John", "1st John", "II Kings", "III John")
  clean = clean
    .replace(/^(?:First|1st|I)\.?\s+/i, '1 ')
    .replace(/^(?:Second|2nd|II)\.?\s+/i, '2 ')
    .replace(/^(?:Third|3rd|III)\.?\s+/i, '3 ');

  // Strip trailing period from book abbreviations (e.g. "Ps. 104" -> "Ps 104", "Matt. 1:1" -> "Matt 1:1")
  clean = clean.replace(/([A-Za-z]+)\.(?=\s*\d)/g, '$1 ');

  // 1. Cross-chapter range: e.g. "Isaiah 52:13-53:12" or "Isaiah 52.13-53.12"
  const crossMatch = clean.match(/^(\d?\s?[A-Za-z]+(?:\s+[A-Za-z]+){0,2})\s+(\d+)[:.](\d+)\s*-\s*(\d+)[:.](\d+)$/);
  if (crossMatch) {
    const book = normalizeBookName(crossMatch[1]);
    return {
      book,
      chapter: parseInt(crossMatch[2], 10),
      startVerse: parseInt(crossMatch[3], 10),
      endChapter: parseInt(crossMatch[4], 10),
      endVerse: parseInt(crossMatch[5], 10),
    };
  }

  // 2. Standard chapter:verse(-verse)?: e.g. "Exodus 20:8-11", "John 3:16", "John 3.16"
  const standardMatch = clean.match(/^(\d?\s?[A-Za-z]+(?:\s+[A-Za-z]+){0,2})\s+(\d+)[:.](\d+)(?:\s*-\s*(\d+))?/);
  if (standardMatch) {
    const book = normalizeBookName(standardMatch[1]);
    const chapter = parseInt(standardMatch[2], 10);
    const startVerse = parseInt(standardMatch[3], 10);
    const endVerse = standardMatch[4] ? parseInt(standardMatch[4], 10) : startVerse;
    return { book, chapter, startVerse, endVerse };
  }

  // 3. Single-chapter books cited without colon: e.g. "3 John 2", "Jude 7", "Obadiah 4", "Jude 5-7"
  const singleChMatch = clean.match(/^(\d?\s?[A-Za-z]+(?:\s+[A-Za-z]+){0,2})\s+(\d+)(?:\s*-\s*(\d+))?$/);
  if (singleChMatch) {
    const rawBook = singleChMatch[1];
    const book = normalizeBookName(rawBook);
    if (SINGLE_CHAPTER_BOOKS.has(book)) {
      const startVerse = parseInt(singleChMatch[2], 10);
      const endVerse = singleChMatch[3] ? parseInt(singleChMatch[3], 10) : startVerse;
      return {
        book,
        chapter: 1,
        startVerse,
        endVerse,
      };
    }

    // 4. Multi-chapter whole chapter citation or chapter range: e.g. "Psalm 104", "Leviticus 16", "Matthew 5-7"
    const meta = BOOK_BY_NAME[book];
    if (meta) {
      const chapter = parseInt(singleChMatch[2], 10);
      const endChapter = singleChMatch[3] ? parseInt(singleChMatch[3], 10) : undefined;
      if (endChapter !== undefined && endChapter !== chapter) {
        return {
          book,
          chapter,
          startVerse: 1,
          endChapter,
          endVerse: getVerseCount(meta.slug, endChapter),
        };
      }
      return {
        book,
        chapter,
        startVerse: 1,
        endVerse: 1,
      };
    }
  }

  // 5. Bare book name (e.g. "Jude", "Obadiah", "Philemon", "Genesis")
  const bareBook = normalizeBookName(clean);
  const bareMeta = BOOK_BY_NAME[bareBook];
  if (bareMeta) {
    if (SINGLE_CHAPTER_BOOKS.has(bareBook)) {
      const maxV = getVerseCount(bareMeta.slug, 1);
      return {
        book: bareBook,
        chapter: 1,
        startVerse: 1,
        endVerse: maxV,
      };
    }
    return {
      book: bareBook,
      chapter: 1,
      startVerse: 1,
      endVerse: 1,
    };
  }

  return null;
}

/**
 * Expand any scripture reference into all constituent canonical verse IDs.
 * Handles:
 * - "Exodus 20:8-11" -> ["exo-20-8", "exo-20-9", "exo-20-10", "exo-20-11"]
 * - "Isaiah 52:13-53:12" -> ["isa-52-13", "isa-52-14", "isa-52-15", "isa-53-1", ..., "isa-53-12"]
 * - "Genesis 12:3; 22:18" -> ["gen-12-3", "gen-22-18"]
 * - "Galatians 3:8, 16" -> ["gal-3-8", "gal-3-16"]
 * - "Jude 7" -> ["jud-1-7"]
 * - "Psalm 104" -> ["psa-104-1", ..., "psa-104-35"]
 */
export function expandVerseRange(refStr: string): string[] {
  if (!refStr || typeof refStr !== 'string') return [];

  const clean = refStr.trim().replace(/[\u2013\u2014]/g, '-').replace(/\s*\([^)]*\)/g, '');
  if (!clean) return [];

  const results: string[] = [];
  const seen = new Set<string>();

  const addVerse = (slug: string, ch: number, v: number) => {
    const maxV = getVerseCount(slug, ch);
    if (maxV <= 0 || v < 1 || v > maxV) return;
    const id = `${slug}-${ch}-${v}`;
    if (!seen.has(id)) {
      seen.add(id);
      results.push(id);
    }
  };

  const segments = clean.split(/\s*;\s*/);

  let lastBook = '';
  let lastChapter = 1;

  for (const seg of segments) {
    if (!seg.trim()) continue;

    const subParts = seg.split(/\s*,\s*/);
    for (let pIdx = 0; pIdx < subParts.length; pIdx++) {
      const part = subParts[pIdx].trim();
      if (!part) continue;

      let partRef = part;
      // Inherit book and chapter if part is just a verse or verse range like "16" or "36-39"
      if (/^\d+(?:-\d+)?$/.test(part) && lastBook) {
        partRef = `${lastBook} ${lastChapter}:${part}`;
      } else if (/^\d+[:.]\d+(?:-\d+)?$/.test(part) && lastBook) {
        partRef = `${lastBook} ${part}`;
      }

      const cleanPart = partRef
        .replace(/^(?:First|1st|I)\.?\s+/i, '1 ')
        .replace(/^(?:Second|2nd|II)\.?\s+/i, '2 ')
        .replace(/^(?:Third|3rd|III)\.?\s+/i, '3 ')
        .replace(/([A-Za-z]+)\.(?=\s*\d)/g, '$1 ');

      const parsed = parseRef(partRef);
      if (parsed) {
        lastBook = parsed.book;
        lastChapter = parsed.chapter;
        const meta = BOOK_BY_NAME[parsed.book];
        if (!meta) continue;
        const slug = meta.slug;

        if (parsed.endChapter !== undefined && parsed.endChapter !== parsed.chapter) {
          // Cross-chapter range: e.g. Isa 52:13 - 53:12
          for (let ch = parsed.chapter; ch <= parsed.endChapter; ch++) {
            const startV = ch === parsed.chapter ? parsed.startVerse : 1;
            const endV = ch === parsed.endChapter ? parsed.endVerse : getVerseCount(slug, ch);
            for (let v = startV; v <= endV; v++) {
              addVerse(slug, ch, v);
            }
          }
        } else if (
          !cleanPart.includes(':') &&
          !cleanPart.includes('.') &&
          !SINGLE_CHAPTER_BOOKS.has(parsed.book) &&
          /^[A-Za-z0-9\s]+$/.test(cleanPart)
        ) {
          // Whole chapter reference like "Psalm 104": expand all verses in chapter
          const maxV = getVerseCount(slug, parsed.chapter);
          for (let v = 1; v <= maxV; v++) {
            addVerse(slug, parsed.chapter, v);
          }
        } else {
          // Single-chapter verse range
          for (let v = parsed.startVerse; v <= parsed.endVerse; v++) {
            addVerse(slug, parsed.chapter, v);
          }
        }
      }
    }
  }

  return results;
}
