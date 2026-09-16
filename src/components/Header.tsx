import { useStore, getAvailableChapters, getMaxChapter } from '../store/useStore';
import {
  BookOpen,
  BookMarked,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Type,
  Grid3x3,
  ListTree,
  Columns2,
  Clock,
  Landmark,
  SlidersHorizontal,
  History,
  AlignLeft,
  AlignCenter,
  Download,
  Upload,
} from 'lucide-react';
import { SearchBar } from './SearchBar';
import React, { useEffect, useRef, useState } from 'react';
import { BOOK_REGISTRY } from '../data/bookRegistry';
import {
  downloadBackupFile,
  exportBackup,
  importBackup,
  readBackupFile,
} from '../db/backup';

const READING_BOOKS = BOOK_REGISTRY.map(b => b.name);

export function Header() {
  const {
    showVerseNumbers,
    toggleVerseNumbers,
    selectedThread,
    currentReadingBook,
    currentReadingChapter,
    nextChapter,
    prevChapter,
    setReadingLocation,
    theme,
    toggleTheme,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    setChapterGridOpen,
    setThreadsPanelOpen,
    setMobileControlsOpen,
    toggleThreadPane,
    threadPaneOpen,
    historicalContextOpen,
    setHistoricalContextOpen,
    lexiconOpen,
    setLexiconOpen,
    prophecyOpen,
    setProphecyOpen,
    recentReadings,
    textAlign,
    toggleTextAlign,
    closeAllStudyPanes,
    hasStudyPanes,
    showNotice,
    loadBookmarks,
    loadNotes,
    loadLinks,
  } = useStore();

  const [bookOpen, setBookOpen] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);
  const backupInputRef = useRef<HTMLInputElement>(null);

  const handleExportBackup = async () => {
    try {
      const payload = await exportBackup();
      downloadBackupFile(payload);
      showNotice(
        `Backup downloaded — ${payload.bookmarks.length} bookmarks, ${payload.notes.length} notes, ${payload.links.length} links.`
      );
    } catch (err) {
      console.error('Backup export failed:', err);
      showNotice('Backup failed — could not read your data.');
    }
  };

  const handleImportBackup = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ''; // allow re-selecting the same file later
    if (!file) return;
    try {
      const parsed = await readBackupFile(file);
      if (!parsed.payload) {
        showNotice(parsed.error ?? 'That file is not a valid Threads Bible backup.');
        return;
      }
      const counts = await importBackup(parsed.payload);
      loadBookmarks();
      loadNotes();
      loadLinks();
      showNotice(
        `Restored ${counts.bookmarks} bookmarks, ${counts.notes} notes, ${counts.links} new links.`
      );
    } catch (err) {
      console.error('Backup import failed:', err);
      showNotice('Import failed — could not read that backup file.');
    }
  };

  // Scroll the current book into view when the list opens
  useEffect(() => {
    if (!bookOpen) return;
    const el = bookRef.current?.querySelector<HTMLElement>(`[data-book="${currentReadingBook}"]`);
    el?.scrollIntoView({ block: 'center' });
  }, [bookOpen, currentReadingBook]);

  useEffect(() => {
    if (!bookOpen) return;
    const onDown = (e: MouseEvent) => {
      if (bookRef.current && !bookRef.current.contains(e.target as Node)) setBookOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [bookOpen]);

  const chapters = getAvailableChapters(currentReadingBook);
  const idx = chapters.indexOf(currentReadingChapter);
  const canPrev = idx > 0;
  const canNext = idx >= 0 && idx < chapters.length - 1;
  const maxChapter = getMaxChapter(currentReadingBook);

  return (
    <header className="h-16 border-b border-foreground/10 flex items-center justify-between px-4 md:px-8 bg-background z-20">
      <div className="flex items-center gap-3 md:gap-8 min-w-0">
        <div className="flex items-center gap-2 shrink-0">
          <BookOpen className="h-4 w-4 text-accent" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent hidden md:inline">Threads Bible</span>
        </div>

        {!selectedThread && (
          <div className="flex items-center gap-1 shrink-0">
            <div className="relative" ref={bookRef}>
              <button
                onClick={() => setBookOpen(o => !o)}
                className="flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium hover:bg-foreground/5 transition-colors cursor-pointer"
                aria-haspopup="listbox"
                aria-expanded={bookOpen}
              >
                <span className="text-foreground max-w-[7rem] truncate">{currentReadingBook}</span>
                <ChevronDown className="h-3.5 w-3.5 text-foreground/50" />
              </button>
              {bookOpen && (
                <ul
                  role="listbox"
                  className="absolute top-full left-0 mt-1 min-w-[11rem] max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain rounded-lg border border-foreground/10 bg-popover text-popover-foreground shadow-xl py-1 z-50"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {READING_BOOKS.map(book => {
                    const max = getMaxChapter(book);
                    const active = book === currentReadingBook;
                    const showHeader = book === 'Genesis' || book === 'Matthew';
                    return (
                      <React.Fragment key={book}>
                        {showHeader && (
                          <li className="sticky top-0 z-10 bg-popover px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold text-foreground/40 border-b border-foreground/5">
                            {book === 'Genesis' ? 'Old Testament' : 'New Testament'}
                          </li>
                        )}
                        <li>
                          <button
                            role="option"
                            aria-selected={active}
                            data-book={book}
                            onClick={() => {
                              setReadingLocation(book, book === currentReadingBook ? currentReadingChapter : 1);
                              setBookOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-sm hover:bg-foreground/5 cursor-pointer flex justify-between gap-3 ${
                              active ? 'text-accent font-semibold bg-accent/10' : ''
                            }`}
                          >
                            <span className="truncate">{book}</span>
                            <span className="text-foreground/40 tabular-nums text-xs shrink-0">{max} ch</span>
                          </button>
                        </li>
                      </React.Fragment>
                    );
                  })}
                </ul>
              )}
            </div>

            <button
              onClick={prevChapter}
              disabled={!canPrev}
              aria-label="Previous chapter"
              className="h-8 w-8 rounded-full flex items-center justify-center text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="text-sm font-medium tabular-nums px-0.5 select-none">
              <span className="text-accent font-semibold">{currentReadingChapter}</span>
              <span className="text-foreground/40">/{maxChapter}</span>
            </div>
            <button
              onClick={() => setChapterGridOpen(true)}
              aria-label="Chapter grid"
              title="Chapter grid (C)"
              className="h-8 w-8 rounded-full flex items-center justify-center text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors cursor-pointer"
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
            <button
              onClick={nextChapter}
              disabled={!canNext}
              aria-label="Next chapter"
              className="h-8 w-8 rounded-full flex items-center justify-center text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {recentReadings.length > 1 && (
              <button
                onClick={() => {
                  const r = recentReadings[1];
                  if (r) setReadingLocation(r.book, r.chapter);
                }}
                title={`Continue: ${recentReadings[1]?.book} ${recentReadings[1]?.chapter}`}
                className="hidden lg:flex items-center gap-1.5 h-8 px-2.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-xs font-medium text-foreground/70 cursor-pointer shrink-0"
              >
                <History className="h-3.5 w-3.5" />
                {recentReadings[1]?.book} {recentReadings[1]?.chapter}
              </button>
            )}
          </div>
        )}

        {selectedThread && (
           <nav className="hidden lg:flex items-center gap-4 text-sm font-medium text-foreground/60 min-w-0">
             <span className="text-foreground truncate">{selectedThread.book} {selectedThread.chapter}:{selectedThread.verseNumber}</span>
             <span className="opacity-30">/</span>
             <span className="truncate">{selectedThread.fulfillmentRefs?.[0]}</span>
           </nav>
        )}
      </div>

      <div className="flex items-center gap-2 md:gap-3 justify-end flex-1 min-w-0">
        <SearchBar />

        <button
          onClick={() => setThreadsPanelOpen(true)}
          aria-label="Open the Threads panel"
          title="Threads (T)"
          className="h-8 w-8 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer shrink-0 text-foreground/70 hover:text-foreground"
        >
          <ListTree className="h-4 w-4" />
        </button>
        <button
          onClick={() => setHistoricalContextOpen(!historicalContextOpen)}
          aria-label={historicalContextOpen ? 'Close Historical Context' : 'Open Historical Context'}
          title="Historical Context (H) — chronological eras & geopolitical backdrops"
          className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
            historicalContextOpen
              ? 'bg-accent/15 text-accent'
              : 'bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground'
          }`}
        >
          <Landmark className="h-4 w-4" />
        </button>
        <button
          onClick={() => setLexiconOpen(!lexiconOpen)}
          aria-label={lexiconOpen ? 'Close Lexicon' : 'Open the Hebrew & Greek Lexicon'}
          title="Hebrew & Greek Lexicon — every original word behind the threads"
          className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
            lexiconOpen
              ? 'bg-accent/15 text-accent'
              : 'bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground'
          }`}
        >
          <BookMarked className="h-4 w-4" />
        </button>
        <button
          onClick={() => setProphecyOpen(!prophecyOpen)}
          aria-label={prophecyOpen ? 'Close Prophecy page' : 'Open Prophecy & Last-Day Events'}
          title="Prophecy & Last-Day Events — timeline, symbols, and types"
          className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
            prophecyOpen
              ? 'bg-accent/15 text-accent'
              : 'bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground'
          }`}
        >
          <Clock className="h-4 w-4" />
        </button>
        <button
          onClick={toggleThreadPane}
          aria-label={threadPaneOpen ? 'Close split thread pane' : 'Open split thread pane'}
          title="Split view (P) — pin thread beside reading"
          className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
            threadPaneOpen
              ? 'bg-accent/15 text-accent'
              : 'bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground'
          }`}
        >
          <Columns2 className="h-4 w-4" />
        </button>
        {hasStudyPanes() && (
          <button
            onClick={closeAllStudyPanes}
            aria-label="Reading only — close all study panes"
            title="Reading only — close thread, explanation, and split"
            className="h-8 px-2.5 rounded-full flex items-center gap-1.5 bg-accent/10 text-accent hover:bg-accent/20 transition-colors cursor-pointer shrink-0 text-xs font-medium"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Reading only</span>
          </button>
        )}

        <div className="hidden md:flex items-center gap-0.5 bg-foreground/5 rounded-full px-1 py-0.5 shrink-0" title={`Font size ${fontSize}px`}>
          <Type className="h-3 w-3 text-foreground/40 ml-1.5 mr-0.5" />
          <button
            onClick={decreaseFontSize}
            aria-label="Decrease font size"
            className="h-7 w-7 rounded-full flex items-center justify-center text-foreground/70 hover:bg-foreground/10 hover:text-foreground transition-colors cursor-pointer disabled:opacity-25"
            disabled={fontSize <= 14}
          >
            <span className="text-sm font-bold leading-none">A−</span>
          </button>
          <button
            onClick={resetFontSize}
            aria-label="Reset font size"
            className="h-7 px-1 rounded-full flex items-center justify-center text-foreground/60 hover:bg-foreground/10 hover:text-foreground transition-colors cursor-pointer"
            title="Reset font size"
          >
            <span className="text-[10px] font-bold tabular-nums">{fontSize}</span>
          </button>
          <button
            onClick={increaseFontSize}
            aria-label="Increase font size"
            className="h-7 w-7 rounded-full flex items-center justify-center text-foreground/70 hover:bg-foreground/10 hover:text-foreground transition-colors cursor-pointer disabled:opacity-25"
            disabled={fontSize >= 32}
          >
            <span className="text-sm font-bold leading-none">A+</span>
          </button>
        </div>

        <button
          onClick={handleExportBackup}
          aria-label="Export backup"
          title="Export backup — download your bookmarks, notes, and links as JSON"
          className="hidden md:flex h-8 w-8 rounded-full items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer shrink-0 text-foreground/70 hover:text-foreground"
        >
          <Download className="h-4 w-4" />
        </button>
        <button
          onClick={() => backupInputRef.current?.click()}
          aria-label="Import backup"
          title="Import backup — restore bookmarks, notes, and links from a JSON file"
          className="hidden md:flex h-8 w-8 rounded-full items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer shrink-0 text-foreground/70 hover:text-foreground"
        >
          <Upload className="h-4 w-4" />
        </button>
        <input
          ref={backupInputRef}
          type="file"
          accept="application/json,.json"
          onChange={handleImportBackup}
          className="hidden"
          aria-hidden="true"
        />
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="hidden md:flex h-8 w-8 rounded-full items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-pointer shrink-0 text-foreground/70 hover:text-foreground"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          onClick={toggleTextAlign}
          aria-label={textAlign === 'center' ? 'Full width (stretch to screen)' : 'Center column (comfortable reading measure)'}
          title={textAlign === 'center' ? 'Full width (widescreen)' : 'Center column (shorter readable lines)'}
          className={`hidden md:flex h-8 w-8 rounded-full items-center justify-center transition-colors cursor-pointer shrink-0 ${
            textAlign === 'center'
              ? 'bg-accent/15 text-accent'
              : 'bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground'
          }`}
        >
          {textAlign === 'center' ? <AlignCenter className="h-4 w-4" /> : <AlignLeft className="h-4 w-4" />}
        </button>
        <button onClick={toggleVerseNumbers} className="hidden md:flex items-center gap-2 bg-foreground/5 px-3 py-1.5 rounded-full hover:bg-foreground/10 transition-colors cursor-pointer shrink-0">
          <span className="text-[10px] uppercase tracking-wider font-bold opacity-50 hidden sm:inline">Numbers</span>
          <div className={`w-8 h-4 rounded-full flex items-center px-0.5 transition-colors ${showVerseNumbers ? 'bg-accent' : 'bg-foreground/20'}`}>
            <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform ${showVerseNumbers ? 'translate-x-4' : 'translate-x-0'}`}></div>
          </div>
        </button>
        <button
          onClick={() => setMobileControlsOpen(true)}
          aria-label="Open controls"
          className="md:hidden h-8 w-8 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 cursor-pointer shrink-0 text-foreground/70"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
