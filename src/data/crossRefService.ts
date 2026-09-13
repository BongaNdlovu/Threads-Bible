import { NT_CITATIONS, type NtCitation, getCitationsForVerse } from './tier2NtCitations';
import {
  MESSIANIC_PROPHECIES,
  type MessianicProphecy,
  getMessianicPropheciesForVerse,
  getOtMessianicPropheciesForVerse,
  getNtMessianicFulfillmentsForVerse,
  NT_MESSIANIC_LOOKUP,
} from './tier3Messianic';
import {
  MASTER_CHAINS,
  type MasterChain,
  getMasterChainsForVerse,
  CHAINS_BY_VERSE,
} from './tier4MasterChains';

export interface VerseAnchorRef {
  anchor: string;
  refs: string[];
}

export type BookTskMap = Record<string, VerseAnchorRef[]>;

/** In-memory bounded LRU cache for lazy-loaded TSK book JSON files (max 10 books) */
const MAX_CACHED_TSK_BOOKS = 10;
const tskBookCache = new Map<string, BookTskMap>();
const tskLru: string[] = [];
const tskInflight = new Map<string, Promise<BookTskMap>>();

function touchTskLru(slug: string) {
  const i = tskLru.indexOf(slug);
  if (i >= 0) tskLru.splice(i, 1);
  tskLru.push(slug);
  while (tskLru.length > MAX_CACHED_TSK_BOOKS) {
    const evict = tskLru.shift();
    if (evict) tskBookCache.delete(evict);
  }
}

/** Clear TSK cache (useful for testing) */
export function clearTskCache() {
  tskBookCache.clear();
  tskLru.length = 0;
  tskInflight.clear();
}

/** Get TSK cache stats (size & LRU order) for testing */
export function getTskCacheStats() {
  return { size: tskBookCache.size, lru: [...tskLru] };
}

export async function loadTskForBook(slug: string): Promise<BookTskMap> {
  const cached = tskBookCache.get(slug);
  if (cached) {
    touchTskLru(slug);
    return cached;
  }

  const inflight = tskInflight.get(slug);
  if (inflight) return inflight;

  const basePath = (import.meta.env?.BASE_URL ?? '/').replace(/\/+$/, '') + '/';
  const p = fetch(`${basePath}data/tsk/${slug}.json`)
    .then(async r => {
      if (!r.ok) return {};
      const data = (await r.json()) as BookTskMap;
      tskBookCache.set(slug, data);
      touchTskLru(slug);
      return data;
    })
    .catch(err => {
      console.warn(`Error loading TSK for ${slug}:`, err);
      return {};
    })
    .finally(() => {
      tskInflight.delete(slug);
    });

  tskInflight.set(slug, p);
  return p;
}

/** Get all TSK cross references for a single verse ID (e.g. "gen-1-1") */
export async function getTskForVerse(verseId: string): Promise<VerseAnchorRef[]> {
  const parts = verseId.split('-');
  if (parts.length < 3) return [];
  const slug = parts[0];
  const bookMap = await loadTskForBook(slug);
  return bookMap[verseId] || [];
}

export {
  NT_CITATIONS,
  type NtCitation,
  getCitationsForVerse,
  MESSIANIC_PROPHECIES,
  type MessianicProphecy,
  getMessianicPropheciesForVerse,
  getOtMessianicPropheciesForVerse,
  getNtMessianicFulfillmentsForVerse,
  NT_MESSIANIC_LOOKUP,
  MASTER_CHAINS,
  type MasterChain,
  getMasterChainsForVerse,
  CHAINS_BY_VERSE,
};
