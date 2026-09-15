import { useEffect, useMemo, useState } from 'react';
import { Columns2, Landmark, Moon, Sun, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { expandVerseRange, getChapterVersesFromLoaded } from '../data/library';
import { getThreadDetail, useThreadDetailsReady } from '../data/threadDetailService';
import { useFulfillmentVerses } from '../hooks/useFulfillmentVerses';
import { buildThreadGraph } from './threadMapModel';
import { ThreadMap, type MapTheme } from './ThreadMap';

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
  } = useStore();

  const [mapTheme, setMapTheme] = useState<MapTheme>(appTheme);
  useEffect(() => setMapTheme(appTheme), [appTheme]);

  const { verses: fulfillmentVerses } = useFulfillmentVerses(selectedThread);
  useThreadDetailsReady();

  const detail = selectedThread ? getThreadDetail(selectedThread.id) : null;
  const sourceVerses = selectedThread
    ? getChapterVersesFromLoaded(selectedThread.book, selectedThread.chapter)
    : [];

  const threadGraph = useMemo(() => {
    if (!selectedThread) return null;
    const anchorVerse = sourceVerses.find(v => v.id === selectedThread.id);
    return buildThreadGraph({
      anchorId: selectedThread.id,
      anchorRef: `${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`,
      anchorTitle:
        detail?.title ?? `${selectedThread.book} ${selectedThread.chapter}:${selectedThread.verseNumber}`,
      anchorVerseText: anchorVerse?.text ?? selectedThread.text ?? '',
      principle: detail?.principle ?? snippetOf(selectedThread.text ?? ''),
      fulfillmentRefs: selectedThread.fulfillmentRefs ?? [],
      fulfillmentVerses: fulfillmentVerses.map(v => ({ id: v.id, text: v.text })),
      expand: expandVerseRange,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- rebuild when thread, detail, or resolved verses change
  }, [selectedThread?.id, detail, fulfillmentVerses]);

  if (!selectedThread || !threadGraph) return null;

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

  const P = mapTheme === 'dark' ? DARK_PAGE : LIGHT_PAGE;

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
              Ordo · {selectedThread.book} {selectedThread.chapter}:{selectedThread.verseNumber}
            </div>
            <div className="font-serif text-sm font-medium truncate max-w-[280px] sm:max-w-md" style={{ color: P.text }}>
              {detail?.title ?? 'Thread'}
            </div>
          </div>
          <span
            className="hidden sm:inline-block px-2 py-0.5 rounded-full border text-[10px] font-mono font-semibold shrink-0"
            style={{ borderColor: P.border, color: P.gold }}
          >
            {threadGraph.edges.length} connection{threadGraph.edges.length === 1 ? '' : 's'}
          </span>
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

      {/* The map fills the rest of the page */}
      <div className="flex-1 min-h-0">
        <ThreadMap
          graph={threadGraph}
          theme={mapTheme}
          isFullscreen={isFullscreen}
          onToggleFullscreen={toggleFullscreen}
        />
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
  gold: '#C8A24B',
  text: '#EAE6DA',
  ctrlBorder: 'rgba(255,255,255,.15)',
};

const LIGHT_PAGE = {
  bg: '#FAF9F6',
  border: 'rgba(44,44,44,.16)',
  headerBg: 'rgba(255,255,255,.95)',
  gold: '#A67C2E',
  text: '#2C2C2C',
  ctrlBorder: 'rgba(44,44,44,.22)',
};
