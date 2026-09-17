/**
 * View-layer partition of resolved fulfillment verses into book + chapter
 * groups, so the split pane can never present several books' verses as one
 * continuous chapter under a single first-reference title (defect E).
 *
 * Pure: no DOM, no store, no fetching. Input order is authoritative — this
 * helper only groups, never reorders, drops, or invents verses.
 */
export interface VerseGroupInput {
  id: string;
  book: string;
  chapter: number;
  verseNumber: number;
}

export interface VerseGroup<V extends VerseGroupInput = VerseGroupInput> {
  /** Stable key, e.g. "genesis-12". */
  key: string;
  book: string;
  chapter: number;
  /** Heading label, e.g. "Genesis 12". */
  heading: string;
  verses: V[];
}

/** Minimal fallback when a verse lacks book/chapter metadata. */
const UNKNOWN_BOOK = 'Unassigned verses';
const UNKNOWN_HEADING = 'Unassigned verses';

function keyFor(book: string, chapter: number): string {
  return `${book.toLowerCase()}-${chapter}`;
}

/**
 * Groups verses by book + chapter, preserving first-seen order for groups and
 * input order inside each group. Verses of the same book+chapter that arrive
 * from different references collapse into one group.
 */
export function groupVersesByBookChapter<V extends VerseGroupInput>(verses: V[]): VerseGroup<V>[] {
  const groups: VerseGroup<V>[] = [];
  const byKey = new Map<string, VerseGroup<V>>();

  for (const verse of verses) {
    if (!verse) continue;
    const book = verse.book || UNKNOWN_BOOK;
    const chapter = Number.isFinite(verse.chapter) ? verse.chapter : 0;
    const key = keyFor(book, chapter);

    let group = byKey.get(key);
    if (!group) {
      group = { key, book, chapter, heading: headingFor(book, chapter), verses: [] };
      byKey.set(key, group);
      groups.push(group);
    }
    group.verses.push(verse);
  }

  return groups;
}

/** `Book Chapter` label — the fulfillment pane's per-group heading. */
export function headingFor(book: string, chapter: number): string {
  if (!book) return UNKNOWN_HEADING;
  return chapter > 0 ? `${book} ${chapter}` : book;
}

/** Total verse count across groups — used by tests and empty-state copy. */
export function countGroupedVerses<V extends VerseGroupInput>(groups: VerseGroup<V>[]): number {
  return groups.reduce((n, g) => n + g.verses.length, 0);
}
