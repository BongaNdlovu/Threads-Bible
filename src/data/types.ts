/** Shared verse shape (text lives in lazy-loaded book JSON + fulfillments). */
export interface Verse {
  id: string;
  book: string;
  chapter: number;
  verseNumber: number;
  text: string;
  isProphecy: boolean;
  fulfillmentRefs?: string[];
}
