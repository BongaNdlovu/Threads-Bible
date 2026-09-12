/**
 * Compatibility shim — the app now lazy-loads book text via library.ts.
 * Thread maps and fulfillments stay in the initial bundle (small).
 */
export type { Verse } from './types';
export {
  parseRef,
  resolveRefs,
  getChapterVersesFromLoaded as getChapterVerses,
  loadBook,
  loadBookBySlug,
  getLoadedBook,
  isBookLoaded,
  getAvailableChapters,
  getMaxChapter,
  getChapterCount,
  totalThreadCount,
  BOOK_REGISTRY,
  BOOK_BY_NAME,
} from './library';

/** Legacy export name used by Footer. */
export { totalThreadCount as bookProphecyTotal } from './library';
export { fulfillmentVerses } from './fulfillments';
