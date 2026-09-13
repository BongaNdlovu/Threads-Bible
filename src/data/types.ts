/**
 * Shared verse shape. Text lives in lazy-loaded book JSON (public/books/) and
 * in the in-memory fulfillment index (fulfillments.ts).
 *
 * Vocabulary: a "thread" is a curated scripture-to-scripture connection. A
 * verse with isThread=true is the source verse of at least one thread, and
 * fulfillmentRefs lists the connected passages (human-readable refs).
 */
export interface Verse {
  id: string;
  book: string;
  chapter: number;
  verseNumber: number;
  text: string;
  isThread: boolean;
  fulfillmentRefs?: string[];
}

/** Entry of a verse→thread map (the five generated thread map files). */
export interface ThreadMapEntry {
  fulfillmentRefs: string[];
}
