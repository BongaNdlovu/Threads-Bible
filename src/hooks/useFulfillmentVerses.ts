import { useEffect, useState } from 'react';
import {
  ensureFulfillmentsLoaded,
  expandVerseRange,
  isBookLoaded,
  loadBook,
  resolveRefs,
  useFulfillmentsState,
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
  isLoading: boolean;
  error: Error | null;
  retry: () => Promise<Verse[]>;
} {
  const { isReady, isLoading: isFulfillmentsLoading, error, retry } = useFulfillmentsState();
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loadError, setLoadError] = useState<Error | null>(null);
  const [resolving, setResolving] = useState(false);

  useEffect(() => {
    if (!selectedThread) {
      setVerses([]);
      setLoadError(null);
      setResolving(false);
      return;
    }
    let cancelled = false;
    setResolving(true);
    void (async () => {
      try {
        setLoadError(null);
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
        if (!cancelled) {
          setVerses(resolveRefs(refs));
          setResolving(false);
        }
      } catch (err) {
        if (!cancelled) {
          setLoadError(err instanceof Error ? err : new Error(String(err)));
          setResolving(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [selectedThread?.id, isReady]);

  const isLoading = isFulfillmentsLoading || (!!selectedThread && resolving);

  return {
    verses,
    ready: isReady && !resolving,
    isLoading,
    error: error || loadError,
    retry,
  };
}
