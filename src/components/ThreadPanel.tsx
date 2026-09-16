import { useMemo, useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { getChapterVersesFromLoaded, parseRef, BOOK_BY_NAME } from '../data/library';
import {
  getThreadDetail,
  useThreadDetailsReady,
} from '../data/threadDetailService';
import { createDeferredDataset, useDatasetState } from '../data/deferred';
import {
  LIFE_THREADS,
  LIFE_THREAD_DOMAINS,
  type LifeThread,
} from '../data/lifeThreads';
import {
  X,
  ListTree,
  ChevronRight,
  ChevronDown,
  Heart,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ActiveTab = 'chapter' | 'life';

/** Life Threads ships in its own lazy chunk, fetched the first time the
 *  threads panel opens — the same pattern as beliefs and LDE. */
const lifeThreadsDataset = createDeferredDataset(() =>
  import('../data/lifeThreads').then(m => ({
    themes: m.LIFE_THREADS,
    domains: m.LIFE_THREAD_DOMAINS,
  }))
);

function useLifeThreadsState() {
  return useDatasetState(lifeThreadsDataset);
}

/** Readable fallback title for anchors without a hand-written ThreadDetail:
 * the verse's own opening words instead of a bare "Book C:V" repeat. */
function verseSnippet(text: string): string {
  const clean = text.trim().replace(/\s+/g, ' ');
  const cut = clean.slice(0, 56);
  if (cut.length < clean.length) {
    return cut.slice(0, cut.lastIndexOf(' ')) + '…';
  }
  return clean;
}

export function ThreadPanel() {
  const {
    threadsPanelOpen,
    setThreadsPanelOpen,
    threadPanelTab,
    setThreadPanelTab,
    currentReadingBook,
    currentReadingChapter,
    isBookLoading,
    setSelectedThread,
    setThreadPaneOpen,
    setProphecyOpen,
    navigateToVerse,
  } = useStore();

  const [activeTab, setActiveTab] = useState<ActiveTab>('chapter');

  const detailsReady = useThreadDetailsReady();
  const { data: lifeData, error: lifeError, retry: retryLife } = useLifeThreadsState();
  const lifeThemes = lifeData?.themes ?? LIFE_THREADS;
  const lifeDomains = lifeData?.domains ?? LIFE_THREAD_DOMAINS;
  const [selectedLifeDomain, setSelectedLifeDomain] = useState<string>('All');
  const [expandedLife, setExpandedLife] = useState<Record<string, boolean>>({});

  // Panel-open preloads (chapter threads need details; Life tab needs its chunk).
  useEffect(() => {
    if (threadsPanelOpen) lifeThreadsDataset.preload();
  }, [threadsPanelOpen]);

  const handleLifeNavigate = (verseId: string) => {
    void navigateToVerse(verseId);
    setThreadsPanelOpen(false);
  };

  // P0 first, then catalogue order — the operator's everyday-life list leads.
  const filteredLife = useMemo(() => {
    return lifeThemes
      .filter(t => selectedLifeDomain === 'All' || t.domain === selectedLifeDomain)
      .sort((a, b) => {
        const rank = (p: LifeThread['priority']) => (p === 'P0' ? 0 : p === 'P1' ? 1 : 2);
        return rank(a.priority) - rank(b.priority) || a.number - b.number;
      });
  }, [lifeThemes, selectedLifeDomain]);

  useEffect(() => {
    if (threadPanelTab) {
      setActiveTab(threadPanelTab);
    }
  }, [threadPanelTab, threadsPanelOpen]);

  // Chapter threads. isBookLoading is a dependency on purpose: the book cache
  // is read non-reactively, so the memo must re-run once the current book has
  // finished loading (e.g. panel opened via `T` before the fetch completed).
  // detailsReady re-runs the memo when the lazy detail titles arrive.
  const chapterThreads = useMemo(() => {
    const verses = getChapterVersesFromLoaded(currentReadingBook, currentReadingChapter);
    return verses
      .filter(v => v.isThread && v.fulfillmentRefs?.length)
      .map(v => {
        const detail = getThreadDetail(v.id);
        return { verse: v, title: detail?.title ?? verseSnippet(v.text) };
      });
  }, [currentReadingBook, currentReadingChapter, isBookLoading, threadsPanelOpen, detailsReady]);

  if (!threadsPanelOpen) return null;

  return (
    <aside className="absolute inset-y-0 left-0 w-full sm:w-[28rem] md:w-[32rem] z-40 bg-background border-r border-foreground/10 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-foreground/10 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <ListTree className="h-4 w-4 text-accent shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">
              Threads — the main attraction
            </div>
            <div className="text-sm font-medium truncate">
              {activeTab === 'chapter' && `${currentReadingBook} ${currentReadingChapter}`}
              {activeTab === 'life' && 'Life Threads'}
            </div>
          </div>
        </div>
        <button
          onClick={() => setThreadsPanelOpen(false)}
          className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-foreground/10 cursor-pointer text-foreground/70 hover:text-foreground"
          aria-label="Close threads panel"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-foreground/10 px-2 pt-2 gap-1 bg-foreground/[0.02] shrink-0 text-center overflow-x-auto scrollbar-none">
        <button
          onClick={() => setActiveTab('chapter')}
          className={cn(
            'py-2 px-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap',
            activeTab === 'chapter'
              ? 'border-accent text-accent bg-background'
              : 'border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5'
          )}
        >
          <ListTree className="h-3.5 w-3.5" />
          <span>Chapter ({chapterThreads.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('life')}
          className={cn(
            'py-2 px-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap',
            activeTab === 'life'
              ? 'border-accent text-accent bg-background'
              : 'border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5'
          )}
        >
          <span>Life Threads</span>
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {/* CHAPTER TAB */}
        {activeTab === 'chapter' && (
          chapterThreads.length === 0 ? (
            <div className="p-6 text-center text-foreground/50 text-sm space-y-3">
              <p>
                {isBookLoading
                  ? `Loading ${currentReadingBook} ${currentReadingChapter}…`
                  : `No threads in ${currentReadingBook} ${currentReadingChapter}.`}
              </p>
              {!isBookLoading && (
                <div className="flex flex-col gap-2 items-center">
                  <button
                    onClick={() => {
                      setProphecyOpen(true);
                      setThreadsPanelOpen(false);
                    }}
                    className="text-xs text-accent font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open Prophecy &amp; Last-Day Events</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <ul className="space-y-2">
              {chapterThreads.map(({ verse, title }) => (
                <li key={verse.id}>
                  <button
                    onClick={() => {
                      setSelectedThread(verse);
                      setThreadPaneOpen(true);
                      setThreadsPanelOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-xl border border-foreground/10 hover:border-accent/40 hover:bg-accent/5 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-accent tabular-nums">
                        {verse.book} {verse.chapter}:{verse.verseNumber}
                      </span>
                      <span className="text-[10px] font-medium text-foreground/40 group-hover:text-accent transition-colors">
                        Open Thread →
                      </span>
                    </div>
                    <div className="text-sm font-medium mt-0.5 line-clamp-2">{title}</div>
                    <div className="text-xs text-foreground/50 mt-1 line-clamp-1">
                      → {verse.fulfillmentRefs?.[0]}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )
        )}

        {/* LIFE THREADS TAB — 200 Jesus-centred themes in 18 domains */}
        {activeTab === 'life' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/25 text-foreground/80 text-xs space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-accent">
                <Heart className="h-4 w-4 shrink-0" />
                <span>Life Threads — the Bible for your everyday life</span>
              </div>
              <p className="italic text-foreground/80 text-[11px] leading-relaxed">
                200 themes in 18 domains, with Jesus at the centre of each one. Pick a theme, read its first principle, and open the verses.
              </p>
            </div>

            {/* Domain pills */}
            <div className="flex gap-1 overflow-x-auto pb-1 text-[11px] scrollbar-none">
              <button
                onClick={() => setSelectedLifeDomain('All')}
                className={cn(
                  'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                  selectedLifeDomain === 'All'
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                )}
              >
                All ({lifeThemes.length})
              </button>
              {lifeDomains.map(d => (
                <button
                  key={d.id}
                  onClick={() => setSelectedLifeDomain(d.id)}
                  className={cn(
                    'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                    selectedLifeDomain === d.id
                      ? 'bg-accent text-accent-foreground font-semibold'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                  )}
                >
                  {d.name}
                </button>
              ))}
            </div>

            {lifeError ? (
              <div className="p-4 text-center text-xs text-foreground/50">
                Life Threads failed to load.{' '}
                <button onClick={retryLife} className="text-accent underline cursor-pointer">
                  Retry
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredLife.map(t => {
                  const isExpanded = !!expandedLife[t.id];
                  return (
                    <div
                      key={t.id}
                      className="p-3.5 rounded-xl border border-foreground/10 bg-background hover:border-accent/40 transition-colors shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                          #{t.number} · {t.priority}
                          {t.priority === 'P0' ? ' · everyday life' : ''}
                        </span>
                      </div>
                      <div className="text-sm font-bold mt-1.5 text-foreground">{t.title}</div>
                      <p className="text-xs text-foreground/70 mt-1 leading-relaxed">{t.firstPrinciple}</p>
                      {isExpanded && (
                        <div className="mt-2.5 pt-2.5 border-t border-foreground/10">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-1.5">
                            Primary anchors
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {t.anchors.map((ref, i) => {
                              const parsed = parseRef(ref);
                              const meta = parsed ? BOOK_BY_NAME[parsed.book] : undefined;
                              const verseId = parsed && meta ? `${meta.slug}-${parsed.chapter}-${parsed.startVerse}` : null;
                              return (
                                <button
                                  key={i}
                                  onClick={() => {
                                    if (verseId) {
                                      handleLifeNavigate(verseId);
                                    }
                                  }}
                                  className="px-2 py-0.5 rounded bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent font-mono text-[10px] transition-colors cursor-pointer"
                                >
                                  {ref}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                      <div className="mt-2.5 pt-2 border-t border-foreground/5">
                        <button
                          onClick={() => setExpandedLife(prev => ({ ...prev, [t.id]: !prev[t.id] }))}
                          className="text-[11px] text-foreground/60 hover:text-foreground flex items-center gap-1 cursor-pointer"
                        >
                          {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                          <span>{isExpanded ? 'Hide verses' : 'Open the verses'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
