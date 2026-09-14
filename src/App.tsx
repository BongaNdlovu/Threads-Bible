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
import { PaneChrome, RESIZE_HANDLE_CLASS } from './components/PaneChrome';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { initHashSync } from './hashSync';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';

export default function App() {
  const {
    selectedThread,
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
    focusPane,
    setFocusPane,
    threadPaneOpen,
    setThreadPaneOpen,
    explanationOpen,
    setExplanationOpen,
    notice,
    clearNotice,
  } = useStore();

  useKeyboardShortcuts();

  useEffect(() => {
    loadBookmarks();
    loadNotes();
    loadLinks();
    // Applies a deep-link hash when present (otherwise Genesis 1) and keeps
    // the URL hash in step with app state from then on. Cleanup on unmount.
    return initHashSync();
  }, [loadBookmarks, loadNotes, loadLinks]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  // Transient toast for non-blocking feedback (e.g. unresolvable references).
  const noticeBanner = notice ? (
    <div
      className="fixed bottom-16 left-1/2 -translate-x-1/2 z-[200] max-w-[90vw] px-4 py-2 rounded-full bg-foreground text-background text-xs shadow-lg flex items-center gap-2"
      role="status"
    >
      <span className="truncate">{notice}</span>
      <button
        onClick={clearNotice}
        aria-label="Dismiss notice"
        className="opacity-60 hover:opacity-100 cursor-pointer font-bold"
      >
        ×
      </button>
    </div>
  ) : null;

  const paneCrash = (error: Error, reset: () => void) => (
    <div className="h-full w-full flex items-center justify-center p-6">
      <div className="max-w-sm space-y-2 text-center">
        <p className="text-sm font-semibold text-foreground">Pane crashed</p>
        <p className="text-xs text-foreground/60 break-words">{error.message}</p>
        <button
          onClick={reset}
          className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );

  const readingPane = (
    <div className="relative h-full min-h-0 flex flex-col bg-background">
      <PaneChrome
        paneId="reading"
        title="Reading"
        onClose={
          focusPane === 'reading'
            ? () => setFocusPane(null)
            : selectedThread && threadPaneOpen
            ? () => setFocusPane('thread')
            : undefined
        }
      />
      <ErrorBoundary label="reading" fallback={paneCrash}>
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
      </ErrorBoundary>
    </div>
  );

  const threadPane = selectedThread ? (
    <div className="relative h-full min-h-0 flex flex-col">
      <ErrorBoundary label="thread" fallback={paneCrash}>
        <TheThread embedded />
      </ErrorBoundary>
    </div>
  ) : (
    <div className="hidden md:flex flex-1 items-center justify-center text-sm text-foreground/40 border-l border-foreground/10">
      Select a verse to open a thread
    </div>
  );

  // Fullscreen single pane
  const appCrash = (error: Error, reset: () => void) => (
    <div className="h-screen flex items-center justify-center p-6 bg-background font-sans">
      <div className="max-w-md space-y-3 text-center">
        <div className="text-3xl">⚠️</div>
        <h1 className="font-serif text-xl font-bold text-foreground">Something went wrong</h1>
        <p className="text-sm text-foreground/60 break-words">{error.message}</p>
        <p className="text-[11px] text-foreground/40">
          Your bookmarks, notes, and links are safe. Error details were saved to
          localStorage (threads-bible-last-crash).
        </p>
        <div className="flex items-center justify-center gap-2 pt-1">
          <button
            onClick={reset}
            className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium cursor-pointer hover:opacity-90"
          >
            Try again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-3 py-1.5 rounded-full border border-foreground/15 text-sm text-foreground/70 cursor-pointer hover:bg-foreground/5"
          >
            Reload page
          </button>
        </div>
      </div>
    </div>
  );

  if (focusPane) {
    return (
      <ErrorBoundary label="app" fallback={appCrash}>
        <div className="flex flex-col h-screen overflow-hidden bg-background font-sans text-foreground">
          <Header />
        <main className="flex-1 w-full flex overflow-hidden relative">
          {focusPane === 'reading' && readingPane}
          {focusPane === 'thread' && selectedThread && threadPane}
          {focusPane === 'explanation' && selectedThread && (
            <div className="relative h-full min-h-0 flex flex-col w-full">
              <PaneChrome
                paneId="explanation"
                title="Explanation"
                onClose={() => setFocusPane(null)}
              />
              <TheThread explanationOnly />
            </div>
          )}
          {focusPane !== 'reading' && !selectedThread && (
            <div className="flex-1 flex items-center justify-center text-sm text-foreground/50">
              Open a thread first, or press Esc to return.
            </div>
          )}
        </main>
        <Footer />
        <ErrorBoundary label="margin" fallback={paneCrash}>
          <TheMargin />
        </ErrorBoundary>
        <ChapterGrid />
        <ErrorBoundary label="threads-panel" fallback={paneCrash}>
          <ThreadPanel />
        </ErrorBoundary>
        <MobileControls />
        {noticeBanner}
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary label="app" fallback={appCrash}>
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
          {selectedThread && threadPaneOpen ? (
            <ResizablePanelGroup direction="horizontal" className="h-full w-full">
              <ResizablePanel defaultSize={50} minSize={25}>
                {readingPane}
              </ResizablePanel>
              <ResizableHandle withHandle className={RESIZE_HANDLE_CLASS} />
              <ResizablePanel defaultSize={50} minSize={25}>
                {explanationOpen ? (
                  <ResizablePanelGroup direction="vertical" className="h-full w-full">
                    <ResizablePanel defaultSize={55} minSize={25}>
                      {threadPane}
                    </ResizablePanel>
                    <ResizableHandle withHandle className={RESIZE_HANDLE_CLASS} />
                    <ResizablePanel defaultSize={45} minSize={15}>
                      <div className="relative h-full min-h-0 overflow-hidden border-t border-foreground/10">
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
          ) : selectedThread ? (
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
        <ErrorBoundary label="margin" fallback={paneCrash}>
          <TheMargin />
        </ErrorBoundary>
        <ChapterGrid />
        <ErrorBoundary label="threads-panel" fallback={paneCrash}>
          <ThreadPanel />
        </ErrorBoundary>
        <MobileControls />
        {noticeBanner}
      </div>
    </ErrorBoundary>
  );
}
