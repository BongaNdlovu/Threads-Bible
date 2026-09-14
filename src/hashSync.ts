/**
 * Two-way sync between app state and the URL hash.
 *
 * store → hash: a Zustand subscriber rewrites the hash via history.pushState
 * (no hashchange event, so no feedback loop) whenever the reading position,
 * selected verse, or pane flags change. Every change adds a history entry, so
 * browser back/forward walks through study positions.
 *
 * hash → store: a hashchange listener applies hashes it did not just write —
 * this covers back/forward navigation and manually pasted/edited links.
 */
import { BOOK_BY_NAME, BOOK_REGISTRY } from './data/library';
import { serializeHash, parseHash, type HashState } from './hash';
import { useStore } from './store/useStore';

let lastAppliedHash: string | null = null;

function bookNameForSlug(slug: string): string | null {
  return BOOK_REGISTRY.find(b => b.slug === slug)?.name ?? null;
}

function buildHashFromState(): string {
  const s = useStore.getState();
  const verseId = s.selectedMarginVerse?.id ?? s.selectedThread?.id;
  if (verseId) {
    const parts = verseId.split('-');
    return serializeHash({
      slug: parts[0],
      chapter: Number.parseInt(parts[1], 10),
      verse: Number.parseInt(parts[2], 10),
      threadPane: s.threadPaneOpen,
      explanation: s.explanationOpen,
    });
  }
  const meta = BOOK_BY_NAME[s.currentReadingBook];
  return serializeHash({
    slug: meta?.slug ?? 'gen',
    chapter: s.currentReadingChapter,
  });
}

/** Push the current state into the URL (skips when it is already in sync). */
function syncHash(): void {
  const hash = `#${buildHashFromState()}`;
  if (hash === window.location.hash || hash === lastAppliedHash) return;
  window.history.pushState(null, '', hash);
}

/** Apply a location.hash to the store (deep links, back/forward). */
export async function applyHashToStore(hash: string): Promise<boolean> {
  const parsed = parseHash(hash);
  if (!parsed) return false;
  const bookName = bookNameForSlug(parsed.slug);
  if (!bookName) return false;
  lastAppliedHash = hash;

  if (parsed.verse) {
    const verseId = `${parsed.slug}-${parsed.chapter}-${parsed.verse}`;
    await useStore.getState().navigateToVerse(verseId);
    const after = useStore.getState();
    if (after.selectedMarginVerse?.id !== verseId && after.selectedThread?.id !== verseId) {
      after.showNotice(`Verse "${verseId}" is not in the Bible canon.`);
      return false;
    }
    if (parsed.threadPane) after.setThreadPaneOpen(true);
    if (parsed.explanation) after.setExplanationOpen(true);
  } else {
    useStore.getState().setReadingLocation(bookName, parsed.chapter);
    // A bare chapter position means "just reading" — clear study overlays so
    // back/forward out of a thread returns to a clean reading view.
    useStore.getState().closeAllStudyPanes();
  }
  return true;
}

/**
 * Start hash sync. Applies the current hash on boot (falling back to the
 * default reading position), then keeps URL and store in step.
 * Returns a cleanup function.
 */
export function initHashSync(): () => void {
  const initial = window.location.hash;
  const parsed = parseHash(initial);
  if (parsed && bookNameForSlug(parsed.slug)) {
    void applyHashToStore(initial);
  } else {
    useStore.getState().setReadingLocation('Genesis', 1);
  }

  const unsubscribe = useStore.subscribe(() => syncHash());
  const onHashChange = () => {
    const hash = window.location.hash;
    if (hash === `#${buildHashFromState()}`) {
      // Hash matches state already (e.g. our own navigation round-trip).
      lastAppliedHash = hash;
      return;
    }
    void applyHashToStore(hash);
  };
  window.addEventListener('hashchange', onHashChange);

  return () => {
    unsubscribe();
    window.removeEventListener('hashchange', onHashChange);
  };
}
