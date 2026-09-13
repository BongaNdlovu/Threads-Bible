import type { Verse } from './types';
import { BOOK_REGISTRY, BOOK_BY_NAME, type BookMeta } from './bookRegistry';
import { fulfillmentVerses } from './fulfillments';
import { genesisProphecies } from './prophecies';
import { exodusProphecies, danielProphecies, revelationProphecies } from './bookProphecies';
import { paulineProphecies } from './paulineProphecies';
import { ntProphecies } from './ntProphecies';
import { otProphecies } from './otProphecies';

export type { Verse } from './types';

type JsonVerse = { id: string; chapter: number; verse: number; text: string };
type BookJson = { slug: string; name: string; chapters: number; verses: number; data: JsonVerse[] };

/** All curated thread maps (verse id → fulfillment refs), partitioned by book. */
export const allThreadMaps = [
  genesisProphecies,
  exodusProphecies,
  danielProphecies,
  revelationProphecies,
  paulineProphecies,
  ntProphecies,
  otProphecies,
] as const;

export const totalThreadCount = allThreadMaps.reduce((n, map) => n + Object.keys(map).length, 0);

export function threadFor(verseId: string): { fulfillmentRefs: string[] } | undefined {
  for (const map of allThreadMaps) {
    const t = (map as Record<string, { fulfillmentRefs: string[] }>)[verseId];
    if (t) return t;
  }
  return undefined;
}

/** In-memory cache of loaded book JSON. Capped so a long session cannot grow without bound. */
const MAX_CACHED_BOOKS = 8;
const bookCache = new Map<string, Verse[]>();
const inflight = new Map<string, Promise<Verse[]>>();
/** LRU order: most recently used at the end */
const lru: string[] = [];

function touchLru(slug: string) {
  const i = lru.indexOf(slug);
  if (i >= 0) lru.splice(i, 1);
  lru.push(slug);
  while (lru.length > MAX_CACHED_BOOKS) {
    const evict = lru.shift();
    if (evict) bookCache.delete(evict);
  }
}

/** Allow tests / devtools to drop cached books (does not affect thread/fulfillment index). */
export function clearBookCache() {
  bookCache.clear();
  lru.length = 0;
  inflight.clear();
}

export function getBookCacheStats() {
  let verses = 0;
  for (const v of bookCache.values()) verses += v.length;
  return { books: bookCache.size, verses, lru: [...lru] };
}

function applyThreadsTo(verses: Verse[]): Verse[] {
  return verses.map(v => {
    const t = threadFor(v.id);
    if (!t) return v;
    return { ...v, isThread: true, fulfillmentRefs: t.fulfillmentRefs };
  });
}

/** Load a book by display name (lazy fetch from /books/<slug>.json). */
export async function loadBook(bookName: string): Promise<Verse[]> {
  const meta = BOOK_BY_NAME[bookName];
  if (!meta) throw new Error(`Unknown book: ${bookName}`);
  return loadBookBySlug(meta.slug);
}

export async function loadBookBySlug(slug: string): Promise<Verse[]> {
  // Only allow registry slugs — prevents path traversal if slug were ever user-controlled
  const meta = BOOK_REGISTRY.find(b => b.slug === slug);
  if (!meta) throw new Error(`Unknown slug: ${slug}`);

  const cached = bookCache.get(slug);
  if (cached) {
    touchLru(slug);
    return cached;
  }

  const pending = inflight.get(slug);
  if (pending) return pending;

  const basePath = (import.meta.env?.BASE_URL ?? '/').replace(/\/+$/, '') + '/';
  const p = fetch(`${basePath}books/${meta.slug}.json`)
    .then(async r => {
      if (!r.ok) throw new Error(`Failed to load ${slug}: ${r.status}`);
      const json = (await r.json()) as BookJson;
      // Bound parse: reject absurd payloads
      if (!Array.isArray(json.data) || json.data.length > 50000) {
        throw new Error(`Invalid book payload for ${slug}`);
      }
      const verses: Verse[] = json.data.map(v => ({
        id: v.id,
        book: meta.name,
        chapter: v.chapter,
        verseNumber: v.verse,
        text: v.text,
        isThread: false,
      }));
      const withThreads = applyThreadsTo(verses);
      bookCache.set(slug, withThreads);
      touchLru(slug);
      inflight.delete(slug);
      return withThreads;
    })
    .catch(err => {
      inflight.delete(slug);
      throw err;
    });

  inflight.set(slug, p);
  return p;
}

export function getLoadedBook(bookName: string): Verse[] | null {
  const meta = BOOK_BY_NAME[bookName];
  return meta ? bookCache.get(meta.slug) ?? null : null;
}

export function isBookLoaded(bookName: string): boolean {
  return getLoadedBook(bookName) !== null;
}

/** Snapshot of currently cached books (for search). Avoids scanning the full 31k corpus. */
export function getLoadedBooks(): Verse[] {
  const out: Verse[] = [];
  for (const verses of bookCache.values()) out.push(...verses);
  return out;
}

/** Chapter count from registry (no load required). */
export function getChapterCount(bookName: string): number {
  return BOOK_BY_NAME[bookName]?.chapters ?? 0;
}

export function getMaxChapter(bookName: string): number {
  return getChapterCount(bookName);
}

/** Sorted chapter numbers 1..N for a book. */
export function getAvailableChapters(bookName: string): number[] {
  const n = getChapterCount(bookName);
  return Array.from({ length: n }, (_, i) => i + 1);
}

export function getChapterVersesFromLoaded(bookName: string, chapter: number): Verse[] {
  const book = getLoadedBook(bookName);
  if (!book) return [];
  return book.filter(v => v.chapter === chapter);
}

/** Index of fulfillment verses for resolveRefs (always in memory). */
const fulfillmentById = new Map(fulfillmentVerses.map(v => [v.id, v]));

import { parseRef, expandVerseRange, normalizeBookName, type ParsedRef } from './refParser';
export { parseRef, expandVerseRange, normalizeBookName, type ParsedRef };


/**
 * Resolve refs using:
 * 1) fulfillment index (always available)
 * 2) any already-loaded books
 */
export function resolveRefs(refs: string[] | undefined | null): Verse[] {
  if (!refs || refs.length === 0) return [];
  const result: Verse[] = [];
  const seen = new Set<string>();

  for (const ref of refs) {
    const verseIds = expandVerseRange(ref);
    if (verseIds.length > 0) {
      for (const id of verseIds) {
        if (seen.has(id)) continue;
        const m = id.match(/^([a-z0-9]+)-(\d+)-(\d+)$/i);
        if (!m) continue;
        const slug = m[1].toLowerCase();
        const meta = BOOK_REGISTRY.find(b => b.slug === slug);
        let verse: Verse | undefined;
        if (meta) {
          const loaded = getLoadedBook(meta.name);
          verse = loaded?.find(x => x.id === id);
        }
        if (!verse) {
          verse = fulfillmentById.get(id);
        }
        if (verse) {
          seen.add(id);
          result.push(verse);
        }
      }
    } else {
      const parsed = parseRef(ref);
      if (!parsed) continue;
      const meta = BOOK_BY_NAME[parsed.book];
      const slug = meta?.slug;
      if (!slug) continue;

      for (let v = parsed.startVerse; v <= parsed.endVerse; v++) {
        const id = `${slug}-${parsed.chapter}-${v}`;
        if (seen.has(id)) continue;
        const loaded = getLoadedBook(parsed.book);
        const verse = loaded?.find(x => x.id === id) ?? fulfillmentById.get(id);
        if (verse) {
          seen.add(id);
          result.push(verse);
        }
      }
    }
  }

  return result;
}

export { BOOK_REGISTRY, BOOK_BY_NAME } from './bookRegistry';
export type { BookMeta } from './bookRegistry';
