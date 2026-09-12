import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';
import { getChapterVerses, resolveRefs, type Verse } from '../data/mockData';
import { getThreadDetail } from '../data/threadDetails';
import { ZenReader } from './ZenReader';
import { ThreadExplanation } from './ThreadExplanation';
import { PaneChrome } from './PaneChrome';
import { X, BookOpen, Columns2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';

const handleClass =
  'w-3 shrink-0 bg-transparent hover:bg-accent/10 data-[resize-handle-active]:bg-accent/20 ' +
  'after:w-px after:bg-foreground/20 hover:after:bg-accent ' +
  'aria-[orientation=horizontal]:h-3 aria-[orientation=horizontal]:w-full ' +
  'aria-[orientation=horizontal]:after:h-px aria-[orientation=horizontal]:after:w-full ' +
  'aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:top-1/2';

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
    selectedProphecy,
    setSelectedProphecy,
    setHighlightFromThread,
    setThreadPaneOpen,
    focusPane,
    explanationOpen,
    closeAllStudyPanes,
  } = useStore();

  const [subPaneMode, setSubPaneMode] = useState<'both' | 'source' | 'fulfillment'>('both');

  const fulfillmentVerses = selectedProphecy ? resolveRefs(selectedProphecy.fulfillmentRefs) : [];
  const sourceVerses = selectedProphecy
    ? getChapterVerses(selectedProphecy.book, selectedProphecy.chapter)
    : [];
  const primaryRef = selectedProphecy?.fulfillmentRefs?.[0] || 'Fulfillment';
  const detail = selectedProphecy ? getThreadDetail(selectedProphecy.id) : null;

  useEffect(() => {
    if (!selectedProphecy || !detail) {
      setHighlightFromThread({});
      return;
    }
    const map: Record<string, string[]> = {};
    sourceVerses.forEach((v: Verse) => {
      if (v.id === selectedProphecy.id) map[v.id] = detail.sourceKeywords;
    });
    fulfillmentVerses.forEach((v: Verse) => {
      map[v.id] = detail.fulfillmentKeywords;
    });
    setHighlightFromThread(map);
    return () => setHighlightFromThread({});
  }, [selectedProphecy?.id, detail, setHighlightFromThread]);

  if (!selectedProphecy) return null;

  const closeThread = () => {
    setSelectedProphecy(null);
    setThreadPaneOpen(false);
  };

  if (explanationOnly) {
    return (
      <div className="h-full overflow-y-auto bg-foreground/[0.02] px-6 md:px-8 py-6">
        <ThreadExplanation verseId={selectedProphecy.id} detail={detail} />
      </div>
    );
  }

  const SourcePane = (
    <ZenReader
      verses={sourceVerses}
      title={`${selectedProphecy.book} ${selectedProphecy.chapter}`}
      label="Prophecy Source"
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

  const FulfillmentPane = (
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
        <ResizableHandle withHandle className={handleClass} />
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
          title="Stick to Bible (close all study panes)"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Stick to Bible</span>
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
                <ResizableHandle withHandle className={handleClass} />
                <ResizablePanel defaultSize={45} minSize={15}>
                  <div className="relative h-full min-h-0">
                    <PaneChrome
                      paneId="explanation"
                      title="Explanation"
                      onClose={() => useStore.getState().setExplanationOpen(false)}
                    />
                    <div className="h-full overflow-y-auto bg-foreground/[0.02] px-6 md:px-8 py-6">
                      <ThreadExplanation verseId={selectedProphecy.id} detail={detail} />
                    </div>
                  </div>
                </ResizablePanel>
              </>
            )}
          </ResizablePanelGroup>
        </div>
      </div>

      {focusPane === null && null}
    </div>
  );
}
