/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { useStore } from './store/useStore';
import { Header } from './components/Header';
import { ZenReader } from './components/ZenReader';
import { TheThread } from './components/TheThread';
import { TheMargin } from './components/TheMargin';
import { Footer } from './components/Footer';
import { ChapterGrid } from './components/ChapterGrid';
import { ThreadPanel } from './components/ThreadPanel';
import { MobileControls } from './components/MobileControls';
import { PaneChrome } from './components/PaneChrome';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
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

export default function App() {
  const {
    selectedProphecy,
    loadBookmarks,
    loadNotes,
    loadLinks,
    linkingState,
    cancelLinking,
    currentReadingVerses,
    currentReadingBook,
    currentReadingChapter,
    isBookLoading,
    theme,
    setReadingLocation,
    focusPane,
    setFocusPane,
    threadPaneOpen,
    setThreadPaneOpen,
    explanationOpen,
    setExplanationOpen,
  } = useStore();

  useKeyboardShortcuts();

  useEffect(() => {
    loadBookmarks();
    loadNotes();
    loadLinks();
    setReadingLocation('Genesis', 1);
  }, [loadBookmarks, loadNotes, loadLinks, setReadingLocation]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const readingPane = (
    <div
      className={cn(
        'relative h-full min-h-0 flex flex-col bg-background',
        focusPane && focusPane !== 'reading' && 'hidden'
      )}
    >
      <PaneChrome
        paneId="reading"
        title="Reading"
        onClose={
          focusPane === 'reading'
            ? () => setFocusPane(null)
            : selectedProphecy && threadPaneOpen
            ? () => setFocusPane('thread')
            : undefined
        }
      />
      {isBookLoading && currentReadingVerses.length === 0 ? (
        <div className="flex-1 flex items-center justify-center text-sm text-foreground/50">
          Loading {currentReadingBook}…
        </div>
      ) : (
        <ZenReader
          verses={currentReadingVerses}
          title={`${currentReadingBook} ${currentReadingChapter}`}
          label="Reading View"
          showChapterNav
        />
      )}
    </div>
  );

  const threadPane = selectedProphecy ? (
    <div
      className={cn(
        'relative h-full min-h-0 flex flex-col',
        focusPane && focusPane !== 'thread' && focusPane !== 'explanation' && 'hidden'
      )}
    >
      <TheThread embedded />
    </div>
  ) : (
    <div className="hidden md:flex flex-1 items-center justify-center text-sm text-foreground/40 border-l border-foreground/10">
      Select a prophecy verse to open a thread
    </div>
  );

  // Fullscreen single pane
  if (focusPane) {
    return (
      <div className="flex flex-col h-screen overflow-hidden bg-background font-sans text-foreground">
        <Header />
        <main className="flex-1 w-full flex overflow-hidden relative">
          {focusPane === 'reading' && readingPane}
          {focusPane === 'thread' && selectedProphecy && threadPane}
          {focusPane === 'explanation' && selectedProphecy && (
            <div className="relative h-full min-h-0 flex flex-col w-full">
              <PaneChrome
                paneId="explanation"
                title="Explanation"
                onClose={() => setFocusPane(null)}
              />
              <TheThread explanationOnly />
            </div>
          )}
          {focusPane !== 'reading' && !selectedProphecy && (
            <div className="flex-1 flex items-center justify-center text-sm text-foreground/50">
              Open a thread first, or press Esc to return.
            </div>
          )}
        </main>
        <Footer />
        <TheMargin />
        <ChapterGrid />
        <ThreadPanel />
        <MobileControls />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background font-sans text-foreground">
      <Header />
      {linkingState.mode === 'linking' && (
        <div className="bg-accent text-accent-foreground py-2 px-4 shadow-md flex justify-between items-center z-50">
          <span className="text-sm font-medium">
            Select a verse to link with {linkingState.sourceVerseId}...
          </span>
          <button onClick={cancelLinking} className="text-sm underline cursor-pointer hover:text-white">
            Cancel
          </button>
        </div>
      )}
      <main className="flex-1 w-full flex overflow-hidden relative">
        {selectedProphecy && threadPaneOpen ? (
          <ResizablePanelGroup direction="horizontal" className="h-full w-full">
            <ResizablePanel defaultSize={50} minSize={25}>
              {readingPane}
            </ResizablePanel>
            <ResizableHandle withHandle className={handleClass} />
            <ResizablePanel defaultSize={50} minSize={25}>
              {focusPane === 'explanation' || explanationOpen ? (
                <ResizablePanelGroup direction="vertical" className="h-full w-full">
                  <ResizablePanel defaultSize={55} minSize={25}>
                    {threadPane}
                  </ResizablePanel>
                  <ResizableHandle withHandle className={handleClass} />
                  <ResizablePanel defaultSize={45} minSize={15}>
                    <div
                      className={cn(
                        'relative h-full min-h-0 overflow-hidden border-t border-foreground/10'
                      )}
                    >
                      <PaneChrome
                        paneId="explanation"
                        title="Explanation"
                        onClose={() => setExplanationOpen(false)}
                      />
                      <TheThread explanationOnly />
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              ) : (
                threadPane
              )}
            </ResizablePanel>
          </ResizablePanelGroup>
        ) : selectedProphecy ? (
          // Thread open but not pinned: full-width thread (previous behavior)
          <div className="relative flex-1 min-h-0">
            <PaneChrome
              paneId="thread"
              title="Thread"
              onClose={() => {
                setThreadPaneOpen(false);
              }}
            />
            <TheThread />
          </div>
        ) : (
          readingPane
        )}
      </main>
      <Footer />
      <TheMargin />
      <ChapterGrid />
      <ThreadPanel />
      <MobileControls />
    </div>
  );
}
