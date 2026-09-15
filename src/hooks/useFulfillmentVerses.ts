import { useEffect, useState } from 'react';
import {
  ensureFulfillmentsLoaded,
  expandVerseRange,
  isBookLoaded,
  loadBook,
  resolveRefs,
  useFulfillmentsReady,
  BOOK_REGISTRY,
  type Verse,
} from '../data/library';

/**
 * Resolves the fulfillment verses for the open thread: waits for the lazy
 * fulfillment index, loads every book a fulfillment reference points into,
 * then resolves. Shared by TheThread (split view) and the Ordo map page.
 */
export function useFulfillmentVerses(selectedThread: Verse | null): {
  verses: Verse[];
  ready: boolean;
} {
  const fulfillmentsReady = useFulfillmentsReady();
  const [verses, setVerses] = useState<Verse[]>([]);

  useEffect(() => {
    if (!selectedThread) {
      setVerses([]);
      return;
    }
    let cancelled = false;
    void (async () => {
      await ensureFulfillmentsLoaded();
      const refs = selectedThread.fulfillmentRefs ?? [];
      const slugs = new Set<string>();
      for (const ref of refs) {
        for (const id of expandVerseRange(ref)) {
          const m = id.match(/^([a-z0-9]+)-(\d+)-(\d+)$/);
          if (m) slugs.add(m[1].toLowerCase());
        }
      }
      for (const slug of slugs) {
        const meta = BOOK_REGISTRY.find(b => b.slug === slug);
        if (meta && !isBookLoaded(meta.name)) {
          try {
            await loadBook(meta.name);
          } catch {
            // A failed book load just means those verses won't render.
          }
        }
      }
      if (!cancelled) setVerses(resolveRefs(refs));
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- keyed on the thread identity; fulfillmentRefs is stable per thread
  }, [selectedThread?.id, fulfillmentsReady]);

  return { verses, ready: fulfillmentsReady };
}
