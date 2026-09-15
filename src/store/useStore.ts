import { create } from 'zustand';
import {
  loadBook,
  getLoadedBook,
  getAvailableChapters,
  getMaxChapter,
  getChapterVersesFromLoaded,
  threadFor,
  ensureFulfillmentsLoaded,
  nextChapterLocation,
  prevChapterLocation,
  type Verse,
} from '../data/library';
import { BOOK_REGISTRY } from '../data/bookRegistry';
import { getMessianicPropheciesForVerse } from '../data/tier3Messianic';
import { ensureThreadDetails, getThreadDetail } from '../data/threadDetailService';
import { db } from '../db/database';

function bookNameForSlug(slug: string): string {
  const s = slug.toLowerCase();
  return BOOK_REGISTRY.find(b => b.slug.toLowerCase() === s)?.name ?? '';
}

export type Theme = 'light' | 'dark';
export type TextAlign = 'left' | 'center';

const THEME_KEY = 'threads-bible-theme';
const FONT_SIZE_KEY = 'threads-bible-font-size';
const TEXT_ALIGN_KEY = 'threads-bible-text-align';
export const FONT_SIZE_MIN = 14;
export const FONT_SIZE_MAX = 32;
export const FONT_SIZE_STEP = 2;
export const FONT_SIZE_DEFAULT = 20;

function readStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(THEME_KEY);
  return stored === 'dark' ? 'dark' : 'light';
}

function applyThemeClass(theme: Theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
}

function readStoredFontSize(): number {
  if (typeof window === 'undefined') return FONT_SIZE_DEFAULT;
  const n = parseInt(window.localStorage.getItem(FONT_SIZE_KEY) || '', 10);
  if (Number.isNaN(n)) return FONT_SIZE_DEFAULT;
  return Math.min(FONT_SIZE_MAX, Math.max(FONT_SIZE_MIN, n));
}

function applyFontSize(px: number) {
  if (typeof document === 'undefined') return;
  document.documentElement.style.setProperty('--reading-font-size', `${px}px`);
}

function readStoredTextAlign(): TextAlign {
  if (typeof window === 'undefined') return 'center';
  const v = window.localStorage.getItem(TEXT_ALIGN_KEY);
  // Default to centered narrow measure; explicit 'left' opts into full-width
  return v === 'left' ? 'left' : 'center';
}

const RECENT_KEY = 'threads-bible-recent';
const HIGHLIGHT_KEY = 'threads-bible-highlights';
const READ_DAYS_KEY = 'threads-bible-read-days';
const WEEK_KEY = 'threads-bible-week-chapters';

function todayKey(): string {
  // Local calendar day (not UTC) so "read today" matches the user's day.
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

function weekKey(): string {
  const d = new Date();
  const onejan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${week}`;
}

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export { getAvailableChapters, getMaxChapter };

let noticeTimer: number | null = null;

interface AppState {
  showVerseNumbers: boolean;
  toggleVerseNumbers: () => void;

  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  fontSize: number;
  setFontSize: (px: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;

  textAlign: TextAlign;
  setTextAlign: (align: TextAlign) => void;
  toggleTextAlign: () => void;

  currentReadingBook: string;
  currentReadingChapter: number;
  currentReadingVerses: Verse[];
  isBookLoading: boolean;
  setReadingLocation: (book: string, chapter: number, options?: { preserveMargin?: boolean }) => void;
  nextChapter: () => void;
  prevChapter: () => void;

  /** Transient user-facing notice (e.g. an unresolvable reference), auto-cleared. */
  notice: string | null;
  showNotice: (message: string) => void;
  clearNotice: () => void;

  /** The Ordo mindmap page — opens for a thread verse instead of the split. */
  threadMapOpen: boolean;
  setThreadMapOpen: (open: boolean) => void;

  /** The verse whose thread is open (source verse of the thread). */
  selectedThread: Verse | null;
  setSelectedThread: (verse: Verse | null) => void;

  highlightFromThread: Record<string, string[]>;
  setHighlightFromThread: (map: Record<string, string[]>) => void;

  selectedMarginVerse: Verse | null;
  marginActiveTab: string | null;
  setSelectedMarginVerse: (verse: Verse | null, initialTab?: string) => void;
  setMarginActiveTab: (tab: string | null) => void;

  bookmarks: Record<string, boolean>;
  toggleBookmark: (verseId: string) => Promise<void>;
  loadBookmarks: () => Promise<void>;

  notes: Record<string, string>;
  setNote: (verseId: string, note: string) => Promise<void>;
  loadNotes: () => Promise<void>;

  links: Record<string, string[]>;
  linkingState: { mode: 'idle' | 'linking'; sourceVerseId?: string };
  startLinking: (verseId: string) => void;
  finishLinking: (targetVerseId: string) => Promise<void>;
  cancelLinking: () => void;
  loadLinks: () => Promise<void>;
  removeLink: (verse1Id: string, verse2Id: string) => Promise<void>;

  navigateToVerse: (verseId: string, options?: { preserveMargin?: boolean; targetTab?: string }) => Promise<void>;

  // ── Layout: split view, open/close, fullscreen ──────────────────────────
  /** Which pane is maximized, if any */
  focusPane: 'reading' | 'thread' | 'explanation' | null;
  setFocusPane: (pane: 'reading' | 'thread' | 'explanation' | null) => void;
  toggleFullscreen: (pane: 'reading' | 'thread' | 'explanation') => void;

  /** Side-by-side: thread pinned open next to reading */
  threadPaneOpen: boolean;
  setThreadPaneOpen: (open: boolean) => void;
  toggleThreadPane: () => void;

  explanationOpen: boolean;
  setExplanationOpen: (open: boolean) => void;
  toggleExplanation: () => void;
  /** Close every study pane (thread, explanation, split, fullscreen) — reading only */
  closeAllStudyPanes: () => void;
  /** True when any non-reading pane is visible */
  hasStudyPanes: () => boolean;

  // ── Panels ──────────────────────────────────────────────────────────────
  chapterGridOpen: boolean;
  setChapterGridOpen: (open: boolean) => void;
  threadsPanelOpen: boolean;
  setThreadsPanelOpen: (open: boolean) => void;
  threadPanelTab: 'chapter' | 'chains' | 'messianic' | 'beliefs' | 'lde';
  setThreadPanelTab: (tab: 'chapter' | 'chains' | 'messianic' | 'beliefs' | 'lde') => void;
  selectedChainId: string | null;
  setSelectedChainId: (id: string | null) => void;
  openThreadPanelWithTab: (tab: 'chapter' | 'chains' | 'messianic' | 'beliefs' | 'lde', chainId?: string) => void;
  mobileControlsOpen: boolean;
  setMobileControlsOpen: (open: boolean) => void;

  // ── Recents & progress ──────────────────────────────────────────────────
  recentReadings: { book: string; chapter: number; at: number }[];
  pushRecentReading: (book: string, chapter: number) => void;
  readDays: string[];
  markTodayRead: () => void;
  chaptersReadThisWeek: number;
  bumpChaptersRead: () => void;

  // ── User highlights ─────────────────────────────────────────────────────
  userHighlights: Record<string, 'yellow' | 'green' | 'blue' | 'rose'>;
  toggleUserHighlight: (verseId: string, color?: 'yellow' | 'green' | 'blue' | 'rose') => void;
}

function chapterFromBook(book: Verse[] | null, chapter: number): Verse[] {
  if (!book) return [];
  return book.filter(v => v.chapter === chapter);
}

let scrollTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleScrollToVerse(verseId: string) {
  if (typeof document === 'undefined') return;
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer);
    scrollTimer = null;
  }
  const attemptScroll = (retries = 4) => {
    const el = document.getElementById(`verse-${verseId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (retries > 0) {
      scrollTimer = setTimeout(() => attemptScroll(retries - 1), 80);
    }
  };
  scrollTimer = setTimeout(() => attemptScroll(), 100);
}

export const useStore = create<AppState>((set, get) => ({
  showVerseNumbers: true,
  toggleVerseNumbers: () => set(state => ({ showVerseNumbers: !state.showVerseNumbers })),

  theme: readStoredTheme(),
  setTheme: theme => {
    window.localStorage.setItem(THEME_KEY, theme);
    applyThemeClass(theme);
    set({ theme });
  },
  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark';
    get().setTheme(next);
  },

  fontSize: readStoredFontSize(),
  setFontSize: px => {
    const clamped = Math.min(FONT_SIZE_MAX, Math.max(FONT_SIZE_MIN, Math.round(px)));
    window.localStorage.setItem(FONT_SIZE_KEY, String(clamped));
    applyFontSize(clamped);
    set({ fontSize: clamped });
  },
  increaseFontSize: () => get().setFontSize(get().fontSize + FONT_SIZE_STEP),
  decreaseFontSize: () => get().setFontSize(get().fontSize - FONT_SIZE_STEP),
  resetFontSize: () => get().setFontSize(FONT_SIZE_DEFAULT),

  textAlign: readStoredTextAlign(),
  setTextAlign: align => {
    window.localStorage.setItem(TEXT_ALIGN_KEY, align);
    set({ textAlign: align });
  },
  toggleTextAlign: () => {
    get().setTextAlign(get().textAlign === 'center' ? 'left' : 'center');
  },

  currentReadingBook: 'Genesis',
  currentReadingChapter: 1,
  currentReadingVerses: [],
  isBookLoading: true,

  setReadingLocation: (book, chapter, options) => {
    const loaded = getLoadedBook(book);
    const base: Partial<AppState> = {
      currentReadingBook: book,
      currentReadingChapter: chapter,
      highlightFromThread: {},
    };
    // Navigating from the margin (preserveMargin) must not close an open
    // thread or the margin itself — only plain navigation resets those.
    if (!options?.preserveMargin) {
      base.selectedThread = null;
      base.selectedMarginVerse = null;
      base.marginActiveTab = null;
    }

    // Recents + progress (skip if same location already open)
    const { currentReadingBook, currentReadingChapter } = get();
    if (currentReadingBook !== book || currentReadingChapter !== chapter) {
      get().pushRecentReading(book, chapter);
    }

    if (loaded) {
      set({ ...base, currentReadingVerses: chapterFromBook(loaded, chapter), isBookLoading: false });
      return;
    }

    set({ ...base, currentReadingVerses: [], isBookLoading: true });
    void loadBook(book)
      .then(verses => {
        if (get().currentReadingBook !== book || get().currentReadingChapter !== chapter) return;
        set({
          currentReadingVerses: chapterFromBook(verses, chapter),
          isBookLoading: false,
        });
      })
      .catch(() => {
        // Guard the chapter too: the user may have moved to another chapter of
        // the same book while this fetch was in flight.
        if (get().currentReadingBook === book && get().currentReadingChapter === chapter) {
          set({ isBookLoading: false, currentReadingVerses: [] });
        }
      });
  },

  nextChapter: () => {
    const { currentReadingBook, currentReadingChapter, setReadingLocation } = get();
    const next = nextChapterLocation(currentReadingBook, currentReadingChapter);
    if (next) setReadingLocation(next.book, next.chapter);
  },
  prevChapter: () => {
    const { currentReadingBook, currentReadingChapter, setReadingLocation } = get();
    const prev = prevChapterLocation(currentReadingBook, currentReadingChapter);
    if (prev) setReadingLocation(prev.book, prev.chapter);
  },

  threadMapOpen: false,
  setThreadMapOpen: open => set({ threadMapOpen: open }),

  notice: null,
  showNotice: message => {
    set({ notice: message });
    if (noticeTimer !== null) window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => set({ notice: null }), 3500);
  },
  clearNotice: () => {
    if (noticeTimer !== null) {
      window.clearTimeout(noticeTimer);
      noticeTimer = null;
    }
    set({ notice: null });
  },

  selectedThread: null,
  setSelectedThread: verse => set({ selectedThread: verse, highlightFromThread: {} }),

  highlightFromThread: {},
  setHighlightFromThread: map => set({ highlightFromThread: map }),

  selectedMarginVerse: null,
  marginActiveTab: null,
  setSelectedMarginVerse: (verse, initialTab) =>
    set({
      selectedMarginVerse: verse,
      marginActiveTab: initialTab !== undefined ? initialTab : null,
    }),
  setMarginActiveTab: tab => set({ marginActiveTab: tab }),

  bookmarks: {},
  toggleBookmark: async verseId => {
    const isBookmarked = !!get().bookmarks[verseId];
    try {
      if (isBookmarked) {
        await db.bookmarks.delete(verseId);
      } else {
        await db.bookmarks.put({ verseId, createdAt: Date.now() });
      }
    } catch (err) {
      console.error('Failed to toggle bookmark:', err);
      return;
    }
    set(state => {
      const bookmarks = { ...state.bookmarks };
      if (isBookmarked) {
        delete bookmarks[verseId];
      } else {
        bookmarks[verseId] = true;
      }
      return { bookmarks };
    });
  },
  loadBookmarks: async () => {
    let map: Record<string, boolean> = {};
    try {
      const all = await db.bookmarks.toArray();
      map = {};
      all.forEach(b => {
        map[b.verseId] = true;
      });
    } catch (err) {
      console.error('Failed to load bookmarks:', err);
    }
    set({ bookmarks: map });
  },

  notes: {},
  setNote: async (verseId, note) => {
    try {
      if (!note) {
        await db.notes.delete(verseId);
      } else {
        await db.notes.put({ verseId, text: note, updatedAt: Date.now() });
      }
    } catch (err) {
      console.error('Failed to save note:', err);
      return;
    }
    set(state => {
      const notes = { ...state.notes };
      if (!note) {
        delete notes[verseId];
      } else {
        notes[verseId] = note;
      }
      return { notes };
    });
  },
  loadNotes: async () => {
    let map: Record<string, string> = {};
    try {
      const all = await db.notes.toArray();
      map = {};
      all.forEach(n => {
        map[n.verseId] = n.text;
      });
    } catch (err) {
      console.error('Failed to load notes:', err);
    }
    set({ notes: map });
  },

  links: {},
  linkingState: { mode: 'idle' },
  startLinking: verseId => set({ linkingState: { mode: 'linking', sourceVerseId: verseId } }),
  finishLinking: async targetVerseId => {
    const { sourceVerseId } = get().linkingState;
    if (!sourceVerseId || sourceVerseId === targetVerseId) {
      set({ linkingState: { mode: 'idle' } });
      return;
    }

    try {
      const existing = await db.links
        .filter(
          l =>
            (l.verse1Id === sourceVerseId && l.verse2Id === targetVerseId) ||
            (l.verse1Id === targetVerseId && l.verse2Id === sourceVerseId)
        )
        .first();

      if (!existing) {
        await db.links.put({ verse1Id: sourceVerseId, verse2Id: targetVerseId, createdAt: Date.now() });
      }
    } catch (err) {
      console.error('Failed to save link:', err);
    }

    set({ linkingState: { mode: 'idle' } });
    await get().loadLinks();
  },
  cancelLinking: () => set({ linkingState: { mode: 'idle' } }),
  loadLinks: async () => {
    let map: Record<string, string[]> = {};
    try {
      const all = await db.links.toArray();
      map = {};
      all.forEach(l => {
        if (!map[l.verse1Id]) map[l.verse1Id] = [];
        if (!map[l.verse2Id]) map[l.verse2Id] = [];
        if (!map[l.verse1Id].includes(l.verse2Id)) map[l.verse1Id].push(l.verse2Id);
        if (!map[l.verse2Id].includes(l.verse1Id)) map[l.verse2Id].push(l.verse1Id);
      });
    } catch (err) {
      console.error('Failed to load links:', err);
    }
    set({ links: map });
  },
  removeLink: async (v1, v2) => {
    try {
      const links = await db.links
        .filter(
          l =>
            (l.verse1Id === v1 && l.verse2Id === v2) || (l.verse1Id === v2 && l.verse2Id === v1)
        )
        .toArray();
      for (const l of links) {
        if (l.id) await db.links.delete(l.id);
      }
    } catch (err) {
      console.error('Failed to remove link:', err);
    }
    await get().loadLinks();
  },

  navigateToVerse: async (verseId, options) => {
    // Parse book slug from id prefix (e.g. gen-3-15)
    const m = verseId.match(/^([a-z0-9]+)-(\d+)-(\d+)$/i);
    if (!m) return;
    const slug = m[1].toLowerCase();
    const chapter = parseInt(m[2], 10);
    const name = bookNameForSlug(slug);
    if (!name) return;

    // Ensure the book JSON is loaded so setReadingLocation has synchronous data
    if (!getLoadedBook(name)) {
      try {
        await loadBook(name);
      } catch {
        // ignore
      }
    }

    const verse =
      getChapterVersesFromLoaded(name, chapter).find(v => v.id === verseId) ??
      (await ensureFulfillmentsLoaded()).find(v => v.id === verseId);

    if (!verse) return;

    const { currentReadingBook, currentReadingChapter, setReadingLocation } = get();
    if (currentReadingBook !== verse.book || currentReadingChapter !== verse.chapter) {
      setReadingLocation(verse.book, verse.chapter, { preserveMargin: options?.preserveMargin });
    }

    if (options?.preserveMargin) {
      set({
        selectedMarginVerse: verse,
        marginActiveTab: options.targetTab ?? null,
      });
      scheduleScrollToVerse(verse.id);
      return;
    }

    const thread = threadFor(verse.id);
    // Awaiting the lazy detail chunk keeps verse→thread routing correct even
    // if navigation happens before the background load finishes.
    await ensureThreadDetails();
    const detail = getThreadDetail(verse.id);
    // Detail-only verses (thread map has no anchor) still carry a thread when
    // their detail supplies fulfillments — Tier 3 anchors in particular.
    const messianicRefs = getMessianicPropheciesForVerse(verse.id).flatMap(p => p.fulfillmentRefs);
    const refs =
      verse.fulfillmentRefs && verse.fulfillmentRefs.length > 0
        ? verse.fulfillmentRefs
        : thread?.fulfillmentRefs && thread.fulfillmentRefs.length > 0
          ? thread.fulfillmentRefs
          : messianicRefs;
    const hasThread = verse.isThread || !!thread || !!detail || messianicRefs.length > 0;

    if (hasThread && refs.length > 0) {
      const enrichedVerse: Verse = {
        ...verse,
        isThread: true,
        fulfillmentRefs: refs,
      };
      set({ selectedThread: enrichedVerse, selectedMarginVerse: null, threadMapOpen: true });
    } else {
      set({ selectedMarginVerse: verse });
    }

    scheduleScrollToVerse(verse.id);
  },

  focusPane: null,
  setFocusPane: pane => set({ focusPane: pane }),
  toggleFullscreen: pane => set(s => ({ focusPane: s.focusPane === pane ? null : pane })),

  threadPaneOpen: false,
  setThreadPaneOpen: open => set({ threadPaneOpen: open }),
  // Toggling the pinned pane keeps selectedThread so the pane content is
  // still there when the user reopens the split.
  toggleThreadPane: () => set(s => ({ threadPaneOpen: !s.threadPaneOpen })),

  explanationOpen: true,
  setExplanationOpen: open => set({ explanationOpen: open }),
  toggleExplanation: () => set(s => ({ explanationOpen: !s.explanationOpen })),
  closeAllStudyPanes: () =>
    set({
      selectedThread: null,
      selectedMarginVerse: null,
      highlightFromThread: {},
      threadPaneOpen: false,
      threadMapOpen: false,
      explanationOpen: false,
      focusPane: null,
      threadsPanelOpen: false,
      mobileControlsOpen: false,
      chapterGridOpen: false,
      linkingState: { mode: 'idle' },
    }),
  hasStudyPanes: () => {
    const s = get();
    return !!(s.selectedThread || s.threadPaneOpen || s.threadMapOpen || s.focusPane || s.threadsPanelOpen);
  },

  chapterGridOpen: false,
  setChapterGridOpen: open => set({ chapterGridOpen: open }),
  threadsPanelOpen: false,
  setThreadsPanelOpen: open => set({ threadsPanelOpen: open }),
  threadPanelTab: 'chapter',
  setThreadPanelTab: tab => set({ threadPanelTab: tab }),
  selectedChainId: null,
  setSelectedChainId: id => set({ selectedChainId: id }),
  openThreadPanelWithTab: (tab, chainId) =>
    set({
      threadsPanelOpen: true,
      threadPanelTab: tab,
      selectedChainId: chainId ?? null,
    }),
  mobileControlsOpen: false,
  setMobileControlsOpen: open => set({ mobileControlsOpen: open }),

  recentReadings: readJson(RECENT_KEY, []),
  pushRecentReading: (book, chapter) => {
    const filtered = get().recentReadings.filter(r => !(r.book === book && r.chapter === chapter));
    const list = [{ book, chapter, at: Date.now() }, ...filtered].slice(0, 8);
    writeJson(RECENT_KEY, list);
    set({ recentReadings: list });
    get().markTodayRead();
    get().bumpChaptersRead();
  },

  readDays: readJson(READ_DAYS_KEY, []),
  markTodayRead: () => {
    const t = todayKey();
    if (get().readDays.includes(t)) return;
    const days = [...get().readDays, t].slice(-60);
    writeJson(READ_DAYS_KEY, days);
    set({ readDays: days });
  },
  chaptersReadThisWeek: (() => {
    const stored = readJson<{ key: string; n: number }>(WEEK_KEY, { key: weekKey(), n: 0 });
    return stored.key === weekKey() ? stored.n : 0;
  })(),
  bumpChaptersRead: () => {
    const key = weekKey();
    const stored = readJson<{ key: string; n: number }>(WEEK_KEY, { key, n: 0 });
    const n = stored.key === key ? stored.n + 1 : 1;
    writeJson(WEEK_KEY, { key, n });
    set({ chaptersReadThisWeek: n });
  },

  userHighlights: readJson(HIGHLIGHT_KEY, {}),
  toggleUserHighlight: (verseId, color = 'yellow') => {
    const MAX_HIGHLIGHTS = 500;
    const map = { ...get().userHighlights };
    if (map[verseId] === color) {
      delete map[verseId];
    } else {
      map[verseId] = color;
      const keys = Object.keys(map);
      if (keys.length > MAX_HIGHLIGHTS) {
        for (const k of keys.slice(0, keys.length - MAX_HIGHLIGHTS)) {
          delete map[k];
        }
      }
    }
    writeJson(HIGHLIGHT_KEY, map);
    set({ userHighlights: map });
  },
}));
