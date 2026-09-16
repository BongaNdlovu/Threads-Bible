import { useEffect, useMemo, useState } from 'react';
import { Columns2, Landmark, Moon, Sun, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import {
  expandVerseRange,
  getChapterVersesFromLoaded,
  isBookLoaded,
  loadBook,
  resolveRefs,
  BOOK_BY_NAME,
  type Verse,
} from '../data/library';
import { parseRef } from '../data/refParser';
import { getThreadDetail, useThreadDetailsReady } from '../data/threadDetailService';
import { useFulfillmentVerses } from '../hooks/useFulfillmentVerses';
import { buildThreadGraph } from './threadMapModel';
import { ThreadMap, type MapTheme } from './ThreadMap';
import { ThreadMapFallbackCard } from './ThreadMapFallbackCard';
import { ErrorBoundary } from './ErrorBoundary';

/**
 * The Ordo mindmap as its own page. Opens for a thread verse (map is the
 * thread workflow); carries its own chrome — theme toggle, Split View, and
 * close — and fills the whole screen while open.
 */
export function ThreadMapPage() {
  const {
    selectedThread,
    theme: appTheme,
    setThreadMapOpen,
    setThreadPaneOpen,
    setHistoricalContextOpen,
    setChapterGridOpen,
    setFocusPane,
    setReadingLocation,
    turnToVerse,
  } = useStore();

  const [mapTheme, setMapTheme] = useState<MapTheme>(appTheme);
  useEffect(() => setMapTheme(appTheme), [appTheme]);
  const [mapKey, setMapKey] = useState(0);

  const { verses: fulfillmentVerses } = useFulfillmentVerses(selectedThread);
  useThreadDetailsReady();

  const detail = selectedThread ? getThreadDetail(selectedThread.id) : null;

  // Check canonical validity of the selected thread reference
  const isInvalidReference = useMemo(() => {
    if (!selectedThread || !selectedThread.id || !selectedThread.book) return true;
    if (typeof selectedThread.chapter !== 'number' || typeof selectedThread.verseNumber !== 'number') return true;
    if (selectedThread.chapter < 1 || selectedThread.verseNumber < 1) return true;
    const meta = BOOK_BY_NAME[selectedThread.book];
    if (!meta) return true;
    if (selectedThread.chapter > meta.chapters) return true;
    return false;
  }, [selectedThread]);

  const [sourceVerses, setSourceVerses] = useState<Verse[]>(() => {
    if (selectedThread?.book && selectedThread?.chapter) {
      return getChapterVersesFromLoaded(selectedThread.book, selectedThread.chapter);
    }
    return [];
  });

  // Ensure the source book is loaded if the thread originates in an unloaded book
  useEffect(() => {
    if (!selectedThread?.book || !selectedThread?.chapter || isInvalidReference) {
      setSourceVerses([]);
      return;
    }
    if (isBookLoaded(selectedThread.book)) {
      setSourceVerses(getChapterVersesFromLoaded(selectedThread.book, selectedThread.chapter));
      return;
    }
    let cancelled = false;
    loadBook(selectedThread.book)
      .then(() => {
        if (!cancelled && selectedThread?.book && selectedThread?.chapter) {
          setSourceVerses(getChapterVersesFromLoaded(selectedThread.book, selectedThread.chapter));
        }
      })
      .catch(() => {
        /* Fallback uses selectedThread.text */
      });
    return () => {
      cancelled = true;
    };
  }, [selectedThread?.book, selectedThread?.chapter, isInvalidReference]);

  const threadGraph = useMemo(() => {
    if (isInvalidReference || !selectedThread) return null;
    const anchorVerse = sourceVerses.find(v => v.id === selectedThread.id);
    let resolvedAnchorText = anchorVerse?.text ?? selectedThread.text ?? '';
    if (!resolvedAnchorText) {
      const anchorRef = `${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`;
      const found = resolveRefs([anchorRef]);
      if (found.length > 0) {
        resolvedAnchorText = found[0].text;
      }
    }
    const effectiveFulfillments =
      fulfillmentVerses.length > 0
        ? fulfillmentVerses
        : resolveRefs(selectedThread.fulfillmentRefs ?? []);

    return buildThreadGraph({
      anchorId: selectedThread.id,
      anchorRef: `${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`,
      anchorTitle:
        detail?.title ?? `${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`,
      anchorVerseText: resolvedAnchorText,
      principle: detail?.principle ?? snippetOf(selectedThread.text ?? ''),
      fulfillmentRefs: selectedThread.fulfillmentRefs ?? [],
      fulfillmentVerses: effectiveFulfillments.map(v => ({ id: v.id, text: v.text })),
      expand: expandVerseRange,
      who: detail?.who,
      whoByRef: detail?.whoByRef,
      cumulativePrinciples: detail?.cumulativePrinciples,
      terms: detail?.terms,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rebuild when thread, detail, or resolved verses change
  }, [isInvalidReference, selectedThread?.id, detail, fulfillmentVerses, sourceVerses]);

  const openSplit = () => {
    setThreadMapOpen(false);
    setThreadPaneOpen(true);
  };

  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleSelectAnotherVerse = () => {
    setChapterGridOpen(true);
    setThreadMapOpen(false);
  };

  const handleResetMapView = () => {
    try {
      localStorage.removeItem('ordo-viewer-settings-v1');
    } catch {
      // storage unavailable
    }
    setMapKey(k => k + 1);
  };

  const handleOpenPassageReader = (ref?: string) => {
    if (ref) {
      void turnToVerse(ref);
    } else if (selectedThread && selectedThread.book && selectedThread.chapter) {
      void turnToVerse(`${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`);
    }
  };

  const handleOpenSplit = (ref?: string) => {
    if (ref) {
      void turnToVerse(ref, { inSplit: true });
    } else if (selectedThread && selectedThread.book && selectedThread.chapter) {
      void turnToVerse(`${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`, { inSplit: true });
    }
  };

  const P = mapTheme === 'dark' ? DARK_PAGE : LIGHT_PAGE;

  const headerRefText = selectedThread && !isInvalidReference
    ? `${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`
    : 'Verse Reference';

  // Determine if we need to show a fallback card
  let fallbackReason: 'zero-connections' | 'empty-graph' | 'invalid-reference' | null = null;
  let fallbackTitle = '';

  if (isInvalidReference || !selectedThread) {
    fallbackReason = 'invalid-reference';
    fallbackTitle = 'Invalid Scripture Reference';
  } else if (!threadGraph || threadGraph.nodes.length === 0) {
    fallbackReason = 'empty-graph';
    fallbackTitle = 'Empty Mindmap Graph';
  } else if (threadGraph.edges.length === 0) {
    fallbackReason = 'zero-connections';
    fallbackTitle = 'No Cross-Book Connections Found';
  }

  return (
    <div className="fixed inset-0 z-[90] flex flex-col" style={{ background: P.bg }}>
      {/* Page header */}
      <header
        className="flex items-center justify-between gap-3 px-5 py-2.5 border-b shrink-0"
        style={{ borderColor: P.border, background: P.headerBg }}
      >
        <div className="min-w-0 flex items-center gap-3">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: P.gold }}>
              Ordo · {headerRefText}
            </div>
            <div className="font-serif text-sm font-medium truncate max-w-[280px] sm:max-w-md" style={{ color: P.text }}>
              {detail?.title ?? (fallbackReason ? 'Thread Error' : 'Thread')}
            </div>
          </div>
          {threadGraph && threadGraph.edges.length > 0 && (
            <span
              className="hidden sm:inline-block px-2 py-0.5 rounded-full border text-[10px] font-mono font-semibold shrink-0"
              style={{ borderColor: P.border, color: P.gold }}
            >
              {threadGraph.edges.length} connection{threadGraph.edges.length === 1 ? '' : 's'}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setMapTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={mapTheme === 'dark' ? 'Switch map to light mode' : 'Switch map to dark mode'}
            title={mapTheme === 'dark' ? 'Light map' : 'Dark map'}
            className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            {mapTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          {selectedThread && !isInvalidReference && (
            <button
              onClick={() => setHistoricalContextOpen(true, selectedThread.id)}
              aria-label="Historical Context"
              className="h-8 px-3 rounded-full flex items-center gap-1.5 border text-xs font-medium cursor-pointer transition-colors"
              style={{ borderColor: P.ctrlBorder, color: P.text }}
              title="Open historical context for this connection and all biblical threads"
            >
              <Landmark className="h-3.5 w-3.5" style={{ color: P.gold }} />
              <span className="hidden sm:inline">Historical Context</span>
            </button>
          )}
          {threadGraph && threadGraph.edges.length > 0 && (
            <button
              onClick={openSplit}
              aria-label="Split View"
              className="h-8 px-3 rounded-full flex items-center gap-1.5 border text-xs font-medium cursor-pointer transition-colors"
              style={{ borderColor: P.ctrlBorder, color: P.text }}
              title="Open the classic split view (source & fulfillment side by side)"
            >
              <Columns2 className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Split View</span>
            </button>
          )}
          <button
            onClick={() => setThreadMapOpen(false)}
            aria-label="Close map"
            className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* The map fills the rest of the page, or the fallback card if an error state was reached */}
      <div className="flex-1 min-h-0">
        {fallbackReason ? (
          <ThreadMapFallbackCard
            theme={mapTheme}
            title={fallbackTitle}
            reason={fallbackReason}
            reference={selectedThread ? `${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}` : undefined}
            onSelectAnotherVerse={handleSelectAnotherVerse}
            onResetMapView={handleResetMapView}
            onOpenPassageReader={handleOpenPassageReader}
          />
        ) : threadGraph ? (
          <ErrorBoundary
            key={mapKey}
            label="thread-map"
            fallback={(error, reset) => (
              <ThreadMapFallbackCard
                theme={mapTheme}
                title="Graph Display Error"
                reason="layout-failure"
                description={error.message}
                reference={`${selectedThread!.book} ${selectedThread!.chapter}:${selectedThread!.verseNumber}`}
                onSelectAnotherVerse={handleSelectAnotherVerse}
                onResetMapView={() => {
                  handleResetMapView();
                  reset();
                }}
                onOpenPassageReader={handleOpenPassageReader}
              />
            )}
          >
            <ThreadMap
              key={mapKey}
              graph={threadGraph}
              theme={mapTheme}
              isFullscreen={isFullscreen}
              onToggleFullscreen={toggleFullscreen}
              onOpenPassageReader={handleOpenPassageReader}
              onOpenSplit={handleOpenSplit}
            />
          </ErrorBoundary>
        ) : null}
      </div>
    </div>
  );
}


function snippetOf(text: string): string {
  const clean = text.replace(/\[[^\]]*\]/g, ' ').replace(/\s+/g, ' ').trim();
  return clean.length > 220 ? clean.slice(0, 220).replace(/\s+\S*$/, '') + '…' : clean;
}

const DARK_PAGE = {
  bg: '#0B0B0D',
  border: 'rgba(234,230,218,.14)',
  headerBg: 'rgba(16,16,19,.95)',
  gold: '#60A5FA',
  text: '#EAE6DA',
  ctrlBorder: 'rgba(255,255,255,.15)',
};

const LIGHT_PAGE = {
  bg: '#FAF9F6',
  border: 'rgba(44,44,44,.16)',
  headerBg: 'rgba(255,255,255,.95)',
  gold: '#3B82F6',
  text: '#2C2C2C',
  ctrlBorder: 'rgba(44,44,44,.22)',
};
