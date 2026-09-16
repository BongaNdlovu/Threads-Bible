import { useCallback, useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
import {
  getChapterVersesFromLoaded,
  isBookLoaded,
  loadBook,
  useFulfillmentsReady,
} from '../data/library';
import type { Verse } from '../data/types';
import { getThreadDetail, useThreadDetailsReady } from '../data/threadDetailService';
import { useFulfillmentVerses } from '../hooks/useFulfillmentVerses';
import { ZenReader } from './ZenReader';
import { ThreadExplanation } from './ThreadExplanation';
import { DataChunkErrorCard } from './DataChunkErrorCard';
import { PaneChrome, RESIZE_HANDLE_CLASS } from './PaneChrome';
import { X, BookOpen, Columns2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';

export function TheThread({
  embedded = false,
  explanationOnly = false,
}: {
  /** Rendered inside a parent split (no outer chrome / full layout) */
  embedded?: boolean;
  /** Only the explanation scroll area */
  explanationOnly?: boolean;
}) {
  const {
    selectedThread,
    setSelectedThread,
    setHighlightFromThread,
    setReadingLocation,
    setThreadPaneOpen,
    setThreadMapOpen,
    setFocusPane,
    explanationOpen,
    closeAllStudyPanes,
  } = useStore();

  // Clicking a thread verse opens the map page; the split view is the
  // classic side-by-side reading, reachable from the map's chrome.
  const [subPaneMode, setSubPaneMode] = useState<'both' | 'source' | 'fulfillment'>('both');

  // Re-render when the lazily imported fulfillment / detail chunks arrive.
  const {
    verses: fulfillmentVerses,
    ready: fulfillmentsReady,
    isLoading: fulfillmentsLoading,
    error: fulfillmentsError,
    retry: retryFulfillments,
  } = useFulfillmentVerses(selectedThread);
  const detailsReady = useThreadDetailsReady();

  const [sourceLoading, setSourceLoading] = useState(false);
  const [sourceError, setSourceError] = useState<Error | null>(null);
  const [sourceVerses, setSourceVerses] = useState<Verse[]>(() => {
    if (selectedThread?.book && selectedThread?.chapter) {
      return getChapterVersesFromLoaded(selectedThread.book, selectedThread.chapter);
    }
    return [];
  });

  const loadSourceBook = useCallback(async () => {
    if (!selectedThread?.book || !selectedThread?.chapter) {
      setSourceVerses([]);
      setSourceError(null);
      setSourceLoading(false);
      return;
    }
    if (isBookLoaded(selectedThread.book)) {
      setSourceVerses(getChapterVersesFromLoaded(selectedThread.book, selectedThread.chapter));
      setSourceError(null);
      setSourceLoading(false);
      return;
    }
    setSourceLoading(true);
    setSourceError(null);
    try {
      await loadBook(selectedThread.book);
      setSourceVerses(getChapterVersesFromLoaded(selectedThread.book, selectedThread.chapter));
    } catch (err) {
      setSourceError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setSourceLoading(false);
    }
  }, [selectedThread?.book, selectedThread?.chapter]);

  useEffect(() => {
    void loadSourceBook();
  }, [loadSourceBook]);

  const primaryRef = selectedThread?.fulfillmentRefs?.[0] || 'Fulfillment';
  const detail = selectedThread ? getThreadDetail(selectedThread.id) : null;

  useEffect(() => {
    if (!selectedThread || !detail) {
      setHighlightFromThread({});
      return;
    }
    const map: Record<string, string[]> = {};
    sourceVerses.forEach((v: Verse) => {
      if (v.id === selectedThread.id) map[v.id] = detail.sourceKeywords;
    });
    fulfillmentVerses.forEach((v: Verse) => {
      map[v.id] = detail.fulfillmentKeywords;
    });
    setHighlightFromThread(map);
    return () => setHighlightFromThread({});
    // eslint-disable-next-line react-hooks/exhaustive-deps -- recompute when the thread changes, its detail arrives, or fulfillments finish loading
  }, [selectedThread?.id, detail, setHighlightFromThread, fulfillmentsReady, detailsReady, fulfillmentVerses, sourceVerses]);

  if (!selectedThread) return null;

  const closeThread = () => {
    setSelectedThread(null);
    setThreadPaneOpen(false);
  };

  if (explanationOnly) {
    return (
      <div className="h-full overflow-y-auto bg-foreground/[0.02] px-6 md:px-8 py-6">
        <ThreadExplanation verseId={selectedThread.id} detail={detail} />
      </div>
    );
  }

  const sourceTitle = selectedThread?.book && selectedThread?.chapter
    ? `${selectedThread.book} ${selectedThread.chapter}`
    : 'Passage';

  const SourcePane = sourceError ? (
    <div className="h-full flex items-center justify-center p-6">
      <DataChunkErrorCard
        title={`Unable to Load ${selectedThread?.book ?? 'Passage'}`}
        chunkName={`${selectedThread?.book ?? 'Scripture'} Text`}
        error={sourceError}
        onRetry={loadSourceBook}
      />
    </div>
  ) : sourceLoading ? (
    <div className="h-full flex items-center justify-center p-6 text-center space-y-2">
      <div className="text-sm font-medium text-foreground/70 animate-pulse">
        Loading {selectedThread?.book} {selectedThread?.chapter}…
      </div>
    </div>
  ) : (
    <ZenReader
      verses={sourceVerses}
      title={sourceTitle}
      label="Thread Source"
      indicator={
        <div className="flex items-center gap-4 py-6 border-t border-foreground/5">
          <div className="w-10 h-[1px] bg-accent"></div>
          <span className="text-xs font-medium tracking-wide italic text-accent">
            Thread connected to {primaryRef}
          </span>
        </div>
      }
    />
  );

  const FulfillmentPane = fulfillmentsError ? (
    <div className="h-full flex items-center justify-center p-6">
      <DataChunkErrorCard
        title="Unable to Load Fulfillment Verses"
        chunkName="Fulfillments Index"
        error={fulfillmentsError}
        onRetry={retryFulfillments}
      />
    </div>
  ) : fulfillmentsLoading || !fulfillmentsReady ? (
    <div className="h-full flex items-center justify-center p-6 text-center space-y-2">
      <div className="text-sm font-medium text-foreground/70 animate-pulse">
        Loading fulfillment passage…
      </div>
    </div>
  ) : (
    <ZenReader verses={fulfillmentVerses} title={primaryRef} label="Fulfillment Reference" />
  );

  const renderSubPanes = () => {
    if (subPaneMode === 'source') {
      return (
        <div className="h-full w-full relative flex flex-col">
          <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
            <button
              onClick={() => setSubPaneMode('both')}
              className="h-7 px-2.5 rounded-full bg-background/80 backdrop-blur border border-foreground/10 text-xs font-medium text-foreground/70 hover:text-foreground flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Split view (Show both source & fulfillment)"
            >
              <Columns2 className="h-3.5 w-3.5" />
              <span>Split Fulfillment</span>
            </button>
          </div>
          <div className="flex-1 min-h-0 text-foreground relative flex flex-col">{SourcePane}</div>
        </div>
      );
    }

    if (subPaneMode === 'fulfillment') {
      return (
        <div className="h-full w-full relative flex flex-col bg-foreground/[0.04]">
          <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
            <button
              onClick={() => setSubPaneMode('both')}
              className="h-7 px-2.5 rounded-full bg-background/80 backdrop-blur border border-foreground/10 text-xs font-medium text-foreground/70 hover:text-foreground flex items-center gap-1.5 shadow-sm cursor-pointer"
              title="Split view (Show both source & fulfillment)"
            >
              <Columns2 className="h-3.5 w-3.5" />
              <span>Split Source</span>
            </button>
          </div>
          <div className="flex-1 min-h-0">{FulfillmentPane}</div>
        </div>
      );
    }

    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50} minSize={25}>
          <div className="h-full text-foreground relative flex flex-col">
            <div className="absolute top-3 right-3 z-20">
              <button
                onClick={() => setSubPaneMode('fulfillment')}
                aria-label="Close source sub-pane"
                title="Close source page (view fulfillment only)"
                className="h-6 w-6 rounded-full bg-background/80 backdrop-blur border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 text-foreground/60 hover:text-foreground cursor-pointer transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            {SourcePane}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className={RESIZE_HANDLE_CLASS} />
        <ResizablePanel defaultSize={50} minSize={25}>
          <div className="h-full bg-foreground/[0.04] relative flex flex-col">
            <div className="absolute top-3 right-3 z-20">
              <button
                onClick={() => setSubPaneMode('source')}
                aria-label="Close fulfillment sub-pane"
                title="Close fulfillment page (view source only)"
                className="h-6 w-6 rounded-full bg-background/80 backdrop-blur border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 text-foreground/60 hover:text-foreground cursor-pointer transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            {FulfillmentPane}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    );
  };

  // Embedded: source + fulfillment only (explanation is a sibling pane in App)
  if (embedded) {
    return (
      <div className="h-full w-full relative flex flex-col bg-background">
        <PaneChrome paneId="thread" title="Thread" onClose={closeThread} />
        <div className="flex-1 min-h-0">
          {renderSubPanes()}
        </div>
      </div>
    );
  }

  // Standalone full thread (mobile / unpinned): readers + explanation
  return (
    <div className="flex-1 w-full h-full relative bg-background flex flex-col">
      <div className="absolute top-3 right-3 z-50 flex items-center gap-1.5">
        <Button
          variant="outline"
          size="sm"
          onClick={closeAllStudyPanes}
          className="rounded-full bg-accent/10 border border-accent/25 text-accent hover:bg-accent hover:text-accent-foreground text-xs font-semibold gap-1.5 h-8 px-3 shadow-sm cursor-pointer"
          title="Reading only — close all study panes"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reading only</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={closeThread}
          className="rounded-full bg-background/80 backdrop-blur h-8 w-8 hover:bg-foreground/10 hover:text-destructive cursor-pointer"
          title="Close Thread"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex-1 min-h-0 flex flex-col">
        <div className={cn('flex-1 min-h-0', !explanationOpen && 'flex')}>
          <ResizablePanelGroup direction="vertical" className="h-full">
            <ResizablePanel defaultSize={explanationOpen ? 55 : 100} minSize={30}>
              {renderSubPanes()}
            </ResizablePanel>
            {explanationOpen && (
              <>
                <ResizableHandle withHandle className={RESIZE_HANDLE_CLASS} />
                <ResizablePanel defaultSize={45} minSize={15}>
                  <div className="relative h-full min-h-0">
                    <PaneChrome
                      paneId="explanation"
                      title="Explanation"
                      onClose={() => useStore.getState().setExplanationOpen(false)}
                    />
                    <div className="h-full overflow-y-auto bg-foreground/[0.02] px-6 md:px-8 py-6">
                      <ThreadExplanation verseId={selectedThread.id} detail={detail} />
                    </div>
                  </div>
                </ResizablePanel>
              </>
            )}
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}
