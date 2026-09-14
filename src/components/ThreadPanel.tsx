import { useMemo, useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { getChapterVersesFromLoaded, parseRef, BOOK_BY_NAME } from '../data/library';
import {
  getThreadDetail,
  useThreadDetailsReady,
  type ThreadDetail,
} from '../data/threadDetailService';
import { createDeferredDataset, useDatasetReady } from '../data/deferred';
import { MASTER_CHAINS, type MasterChain } from '../data/tier4MasterChains';
import { MESSIANIC_PROPHECIES, type MessianicProphecy } from '../data/tier3Messianic';
import type { FundamentalBelief, BeliefCategory } from '../data/fundamentalBeliefs';
import type { LastDayEventPhase, LdeEra } from '../data/lastDayEvents';
import {
  X,
  ListTree,
  BookOpen,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Search,
  Network,
  ArrowUpRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type ActiveTab = 'chapter' | 'chains' | 'messianic' | 'beliefs' | 'lde';

/** Beliefs and LDE datasets ship in their own lazy chunks, fetched the first
 * time the threads panel opens (they are used nowhere else in the app). */
const beliefsDataset = createDeferredDataset(() =>
  import('../data/fundamentalBeliefs').then(m => ({
    beliefs: m.FUNDAMENTAL_BELIEFS,
    categories: m.BELIEF_CATEGORIES,
  }))
);

const ldeDataset = createDeferredDataset(() =>
  import('../data/lastDayEvents').then(m => ({ events: m.LAST_DAY_EVENTS, eras: m.LDE_ERAS }))
);

function useBeliefsData(): { beliefs: FundamentalBelief[]; categories: readonly BeliefCategory[] } | null {
  useDatasetReady(beliefsDataset);
  return beliefsDataset.get();
}

function useLdeData(): { events: LastDayEventPhase[]; eras: readonly LdeEra[] } | null {
  useDatasetReady(ldeDataset);
  return ldeDataset.get();
}

const CHAIN_CATEGORIES = [
  'Sanctuary & Priesthood',
  'Covenant & Law',
  'Messianic Types',
  'Great Controversy',
  'Eschatology & End-Time',
] as const;

const MESSIANIC_CATEGORIES = [
  'Birth & Incarnation',
  'Mission & Anointing',
  'Betrayal & Passion',
  'Resurrection & Ascension',
  'Priesthood & Heavenly Reign',
  'Second Coming & Kingdom',
] as const;

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
    selectedChainId,
    setSelectedChainId,
    currentReadingBook,
    currentReadingChapter,
    isBookLoading,
    setSelectedThread,
    setThreadPaneOpen,
    navigateToVerse,
    showNotice,
  } = useStore();

  const [activeTab, setActiveTab] = useState<ActiveTab>('chapter');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChainCategory, setSelectedChainCategory] = useState<string>('All');
  const [selectedMessianicCategory, setSelectedMessianicCategory] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<BeliefCategory | 'All'>('All');
  const [selectedEra, setSelectedEra] = useState<LdeEra | 'All'>('All');

  const [expandedChains, setExpandedChains] = useState<Record<string, boolean>>({});
  const [expandedBeliefs, setExpandedBeliefs] = useState<Record<string, boolean>>({});
  const [expandedLde, setExpandedLde] = useState<Record<string, boolean>>({});

  const beliefsData = useBeliefsData();
  const ldeData = useLdeData();
  const beliefs = beliefsData?.beliefs ?? [];
  const beliefCategories = beliefsData?.categories ?? [];
  const ldeEvents = ldeData?.events ?? [];
  const ldeEras = ldeData?.eras ?? [];
  const detailsReady = useThreadDetailsReady();

  // Beliefs/LDE chunks load on first panel open (not at boot).
  useEffect(() => {
    if (threadsPanelOpen) {
      beliefsDataset.preload();
      ldeDataset.preload();
    }
  }, [threadsPanelOpen]);

  const toggleChainExpanded = (id: string) => {
    setExpandedChains(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBeliefExpanded = (id: string) => {
    setExpandedBeliefs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleLdeExpanded = (id: string) => {
    setExpandedLde(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (threadPanelTab) {
      setActiveTab(threadPanelTab);
    }
  }, [threadPanelTab, threadsPanelOpen]);

  useEffect(() => {
    if (selectedChainId) {
      setActiveTab('chains');
      setThreadPanelTab('chains');
      setSelectedChainCategory('All');
      setSearchQuery('');
      setExpandedChains(prev => ({ ...prev, [selectedChainId]: true }));
      const timer = setTimeout(() => {
        const el = document.getElementById(`chain-card-${selectedChainId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        // Consume the request so re-selecting the same chain can trigger again.
        setSelectedChainId(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedChainId, threadsPanelOpen, setThreadPanelTab, setSelectedChainId]);

  const handleNavigate = (verseId: string) => {
    void navigateToVerse(verseId);
    setThreadsPanelOpen(false);
  };

  const handleNavigateRef = (refStr: string) => {
    const parsed = parseRef(refStr);
    const meta = parsed ? BOOK_BY_NAME[parsed.book] : undefined;
    if (!parsed || !meta) {
      // Descriptive refs (e.g. tier-2 "Genesis to Malachi") have no single
      // target verse — surface that instead of failing silently.
      showNotice(`Couldn't navigate to "${refStr}" — no single target verse.`);
      return;
    }
    handleNavigate(`${meta.slug}-${parsed.chapter}-${parsed.startVerse}`);
  };

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

  // Filtered 42 Master Chains
  const filteredChains = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MASTER_CHAINS.filter(c => {
      if (selectedChainCategory !== 'All' && c.category !== selectedChainCategory) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.primaryAnchor.toLowerCase().includes(q) ||
        c.steps.some(s => s.title.toLowerCase().includes(q) || s.ref.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedChainCategory]);

  // Filtered Messianic Prophecies
  const filteredMessianic = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MESSIANIC_PROPHECIES.filter(m => {
      if (selectedMessianicCategory !== 'All' && m.category !== selectedMessianicCategory) return false;
      if (!q) return true;
      return (
        m.title.toLowerCase().includes(q) ||
        m.prophecyRef.toLowerCase().includes(q) ||
        m.solaScripturaNote.toLowerCase().includes(q) ||
        m.fulfillmentRefs.some(r => r.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedMessianicCategory]);

  // Filtered Beliefs
  const filteredBeliefs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return beliefs.filter(b => {
      if (selectedCategory !== 'All' && b.category !== selectedCategory) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.primaryAnchor.toLowerCase().includes(q) ||
        b.keyConcepts.some(k => k.toLowerCase().includes(q)) ||
        b.scriptureRefs.some(r => r.toLowerCase().includes(q))
      );
    });
  }, [beliefs, searchQuery, selectedCategory]);

  // Filtered Last Day Events
  const filteredEvents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return ldeEvents.filter(e => {
      if (selectedEra !== 'All' && e.era !== selectedEra) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q) ||
        e.biblicalSummary.toLowerCase().includes(q) ||
        e.theologicalSignificance.toLowerCase().includes(q) ||
        e.primaryAnchor.toLowerCase().includes(q) ||
        e.scriptureSequence.some(s => s.title.toLowerCase().includes(q) || s.ref.toLowerCase().includes(q))
      );
    });
  }, [ldeEvents, searchQuery, selectedEra]);

  if (!threadsPanelOpen) return null;

  return (
    <aside className="absolute inset-y-0 left-0 w-full sm:w-[28rem] md:w-[32rem] z-40 bg-background border-r border-foreground/10 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-foreground/10 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <ListTree className="h-4 w-4 text-accent shrink-0" />
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">
              Scripture Threads & Truth Safeguard
            </div>
            <div className="text-sm font-medium truncate">
              {activeTab === 'chapter' && `${currentReadingBook} ${currentReadingChapter}`}
              {activeTab === 'chains' && `${MASTER_CHAINS.length} Master Canonical Redemptive Chains (Tier 4)`}
              {activeTab === 'messianic' && `${MESSIANIC_PROPHECIES.length} Messianic Prophecies & Fulfillments (Tier 3)`}
              {activeTab === 'beliefs' && `${beliefs.length} Fundamental Beliefs (Scripture Proofs)`}
              {activeTab === 'lde' && 'Great Controversy & Last Day Events'}
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
          onClick={() => setActiveTab('chains')}
          className={cn(
            'py-2 px-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap',
            activeTab === 'chains'
              ? 'border-accent text-accent bg-background'
              : 'border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5'
          )}
        >
          <Network className="h-3.5 w-3.5" />
          <span>{MASTER_CHAINS.length} Chains</span>
        </button>
        <button
          onClick={() => setActiveTab('messianic')}
          className={cn(
            'py-2 px-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap',
            activeTab === 'messianic'
              ? 'border-accent text-accent bg-background'
              : 'border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5'
          )}
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Messianic ({MESSIANIC_PROPHECIES.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('beliefs')}
          className={cn(
            'py-2 px-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap',
            activeTab === 'beliefs'
              ? 'border-accent text-accent bg-background'
              : 'border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5'
          )}
        >
          <BookOpen className="h-3.5 w-3.5" />
          <span>Beliefs{beliefs.length > 0 ? ` (${beliefs.length})` : ''}</span>
        </button>
        <button
          onClick={() => setActiveTab('lde')}
          className={cn(
            'py-2 px-2.5 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap',
            activeTab === 'lde'
              ? 'border-accent text-accent bg-background'
              : 'border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5'
          )}
        >
          <Clock className="h-3.5 w-3.5" />
          <span>LDE Timeline</span>
        </button>
      </div>

      {/* Search & Category Filter Bar (when not in chapter tab) */}
      {activeTab !== 'chapter' && (
        <div className="p-3 border-b border-foreground/10 bg-foreground/[0.01] space-y-2 shrink-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-foreground/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={
                activeTab === 'chains'
                  ? `Search ${MASTER_CHAINS.length} master chains, texts, topics...`
                  : activeTab === 'messianic'
                  ? 'Search Messianic prophecies, fulfillments...'
                  : activeTab === 'beliefs'
                  ? `Search ${beliefs.length} beliefs, doctrines, verses...`
                  : 'Search Last Day Events, timeline, phases...'
              }
              className="w-full pl-8 pr-8 py-1.5 text-xs rounded-lg border border-foreground/15 bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-2 text-foreground/40 hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Chains category pills */}
          {activeTab === 'chains' && (
            <div className="flex gap-1 overflow-x-auto pb-1 text-[11px] scrollbar-none">
              <button
                onClick={() => setSelectedChainCategory('All')}
                className={cn(
                  'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                  selectedChainCategory === 'All'
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                )}
              >
                All ({MASTER_CHAINS.length})
              </button>
              {CHAIN_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedChainCategory(cat)}
                  className={cn(
                    'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                    selectedChainCategory === cat
                      ? 'bg-accent text-accent-foreground font-semibold'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Messianic category pills */}
          {activeTab === 'messianic' && (
            <div className="flex gap-1 overflow-x-auto pb-1 text-[11px] scrollbar-none">
              <button
                onClick={() => setSelectedMessianicCategory('All')}
                className={cn(
                  'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                  selectedMessianicCategory === 'All'
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                )}
              >
                All ({MESSIANIC_PROPHECIES.length})
              </button>
              {MESSIANIC_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedMessianicCategory(cat)}
                  className={cn(
                    'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                    selectedMessianicCategory === cat
                      ? 'bg-accent text-accent-foreground font-semibold'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Beliefs category pills */}
          {activeTab === 'beliefs' && (
            <div className="flex gap-1 overflow-x-auto pb-1 text-[11px] scrollbar-none">
              <button
                onClick={() => setSelectedCategory('All')}
                className={cn(
                  'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                  selectedCategory === 'All'
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                )}
              >
                All ({beliefs.length})
              </button>
              {beliefCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                    selectedCategory === cat
                      ? 'bg-accent text-accent-foreground font-semibold'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                  )}
                >
                  {cat.replace('The Doctrine of ', '')}
                </button>
              ))}
            </div>
          )}

          {/* LDE Era pills */}
          {activeTab === 'lde' && (
            <div className="flex gap-1 overflow-x-auto pb-1 text-[11px] scrollbar-none">
              <button
                onClick={() => setSelectedEra('All')}
                className={cn(
                  'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                  selectedEra === 'All'
                    ? 'bg-accent text-accent-foreground font-semibold'
                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                )}
              >
                All ({ldeEras.length} Eras)
              </button>
              {ldeEras.map(era => (
                <button
                  key={era}
                  onClick={() => setSelectedEra(era)}
                  className={cn(
                    'px-2 py-0.5 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                    selectedEra === era
                      ? 'bg-accent text-accent-foreground font-semibold'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
                  )}
                >
                  {era}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {/* CHAPTER TAB */}
        {activeTab === 'chapter' && (
          chapterThreads.length === 0 ? (
            <div className="p-6 text-center text-foreground/50 text-sm space-y-3">
              <p>No threads in {currentReadingBook} {currentReadingChapter}.</p>
              <div className="flex flex-col gap-2 items-center">
                <button
                  onClick={() => setActiveTab('chains')}
                  className="text-xs text-accent font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Browse {MASTER_CHAINS.length} Master Canonical Chains</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
                <button
                  onClick={() => setActiveTab('messianic')}
                  className="text-xs text-accent font-medium hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Messianic Prophecies</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
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

        {/* 42 MASTER CANONICAL CHAINS (TIER 4) */}
        {activeTab === 'chains' && (
          <div className="space-y-3">
            {/* Touchstone Safeguard banner */}
            <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/25 text-foreground/80 text-xs space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-accent">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>Tier 4: Master Canonical Redemptive Chains</span>
              </div>
              <p className="italic text-foreground/80 text-[11px] leading-relaxed">
                Overarching theological rivers running from Genesis to Revelation, grounded in Sola Scriptura, Sanctuary typology, and the Great Controversy.
              </p>
              <div className="text-[10px] uppercase font-bold tracking-wider text-accent/90 pt-1 border-t border-accent/15 flex items-center justify-between">
                <span>{MASTER_CHAINS.length} Master Chains • Genesis to Revelation</span>
                <span className="text-[9px] text-foreground/50 normal-case">Historicist Fulfillment</span>
              </div>
            </div>

            {/* Chain cards */}
            <div className="space-y-3">
              {filteredChains.map(chain => {
                const isExpanded = !!expandedChains[chain.id];
                const isSelected = selectedChainId === chain.id;
                return (
                  <div
                    key={chain.id}
                    id={`chain-card-${chain.id}`}
                    className={cn(
                      'p-3.5 rounded-xl border bg-background transition-all shadow-sm',
                      isSelected
                        ? 'border-accent ring-2 ring-accent/30 bg-accent/[0.04]'
                        : 'border-foreground/10 hover:border-accent/40'
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                        Chain #{chain.number} • {chain.category}
                      </span>
                      <button
                        onClick={() => handleNavigate(chain.primaryAnchorVerseId)}
                        className="text-[11px] text-accent hover:underline inline-flex items-center gap-1 font-mono cursor-pointer"
                        title={`Navigate to anchor verse ${chain.primaryAnchorVerseId}`}
                      >
                        <span>{chain.primaryAnchorVerseId}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="text-sm font-bold mt-1.5 text-foreground">
                      {chain.name}
                    </div>

                    <div className="text-xs text-accent/90 font-mono mt-1">
                      Anchor:{' '}
                      <button
                        onClick={() => handleNavigate(chain.primaryAnchorVerseId)}
                        className="font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
                        title={`Navigate to ${chain.primaryAnchor}`}
                      >
                        <span>{chain.primaryAnchor}</span>
                        <ArrowUpRight className="h-2.5 w-2.5" />
                      </button>
                    </div>

                    <p className="text-xs text-foreground/70 mt-1.5 leading-relaxed">
                      {chain.summary}
                    </p>

                    {/* Chain step details expandable */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-foreground/10 space-y-2">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                          Canonical Milestone Sequence ({chain.steps.length} Links):
                        </div>
                        <ul className="space-y-1.5">
                          {chain.steps.map((step, idx) => (
                            <li
                              key={idx}
                              className="p-2 rounded-lg bg-foreground/[0.02] border border-foreground/5 flex flex-col gap-0.5"
                            >
                              <div className="flex items-center justify-between">
                                {step.verseId ? (
                                  <button
                                    onClick={() => handleNavigate(step.verseId)}
                                    className="text-[11px] font-semibold text-accent hover:underline cursor-pointer inline-flex items-center gap-1"
                                    title={`Navigate to ${step.ref}`}
                                  >
                                    <span>{step.ref}</span>
                                    <ArrowUpRight className="h-2.5 w-2.5" />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleNavigateRef(step.ref)}
                                    className="text-[11px] font-semibold text-accent hover:underline cursor-pointer inline-flex items-center gap-1"
                                    title={`Navigate to ${step.ref}`}
                                  >
                                    <span>{step.ref}</span>
                                    <ArrowUpRight className="h-2.5 w-2.5" />
                                  </button>
                                )}
                                {step.verseId && (
                                  <button
                                    onClick={() => handleNavigate(step.verseId)}
                                    className="text-[10px] text-foreground/50 hover:text-accent flex items-center gap-0.5 cursor-pointer"
                                  >
                                    <span>Read</span>
                                    <ArrowUpRight className="h-2.5 w-2.5" />
                                  </button>
                                )}
                              </div>
                              <div className="text-xs font-medium text-foreground/90">
                                {step.title}
                              </div>
                              <div className="text-[11px] text-foreground/60 leading-snug">
                                {step.connection}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-3 pt-2 border-t border-foreground/5 flex items-center justify-between text-xs">
                      <button
                        onClick={() => toggleChainExpanded(chain.id)}
                        className="text-[11px] text-foreground/60 hover:text-foreground flex items-center gap-1 cursor-pointer"
                      >
                        {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                        <span>{isExpanded ? 'Hide Steps' : `View ${chain.steps.length} Canonical Milestones`}</span>
                      </button>
                      <button
                        onClick={() => handleNavigate(chain.primaryAnchorVerseId)}
                        className="text-[11px] font-semibold text-accent hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>Study Anchor</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MESSIANIC PROPHECIES (TIER 3) — Jesus Christ threads, light red */}
        {activeTab === 'messianic' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-red-100/60 dark:bg-red-500/10 border border-red-300/50 dark:border-red-500/25 text-foreground/80 text-xs space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-red-600 dark:text-red-300">
                <Sparkles className="h-4 w-4 shrink-0" />
                <span>Tier 3: Specific Messianic Prophecies</span>
              </div>
              <p className="italic text-foreground/80 text-[11px] leading-relaxed">
                Direct prophecies of the Messiah in the Old Testament fulfilled in Jesus Christ, harmonizing Alfred Edersheim\'s classical catalog with Sola Scriptura fulfillment.
              </p>
              <div className="text-[10px] uppercase font-bold tracking-wider text-red-600/90 dark:text-red-300/90 pt-1 border-t border-red-300/30 dark:border-red-500/20 flex items-center justify-between">
                <span>{MESSIANIC_PROPHECIES.length} Jesus Christ Threads • Genesis to Malachi</span>
                <span className="text-[9px] text-foreground/50 normal-case">Light-Red Marked</span>
              </div>
            </div>

            <div className="space-y-3">
              {filteredMessianic.map(m => (
                <div
                  key={m.id}
                  className="p-3.5 rounded-xl border border-red-200 dark:border-red-500/20 bg-red-50/50 dark:bg-red-500/[0.06] hover:border-red-300 dark:hover:border-red-500/40 transition-colors shadow-sm space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-500/15 text-red-600 dark:text-red-300">
                      {m.category}
                    </span>
                    <button
                      onClick={() => handleNavigate(m.otVerseId)}
                      className="text-[11px] text-red-500 dark:text-red-300 hover:underline inline-flex items-center gap-1 font-mono cursor-pointer"
                    >
                      <span>{m.prophecyRef}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>

                  <div className="text-sm font-bold text-foreground">
                    {m.title}
                  </div>

                  <div className="text-xs text-foreground/70">
                    <span className="text-foreground/40 uppercase text-[10px] font-bold block mb-1">
                      NT Fulfillments:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {m.fulfillmentRefs.map((ref, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigateRef(ref)}
                          className="px-2 py-0.5 rounded bg-red-100/80 dark:bg-red-500/15 hover:bg-red-400 hover:text-white dark:hover:bg-red-500 dark:hover:text-white text-red-600 dark:text-red-300 font-mono text-[10px] transition-colors cursor-pointer"
                        >
                          {ref}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-foreground/80 leading-relaxed pt-1">
                    {m.solaScripturaNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 28 FUNDAMENTAL BELIEFS TAB */}
        {activeTab === 'beliefs' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/25 text-foreground/80 text-xs space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-accent">
                <BookOpen className="h-4 w-4 shrink-0" />
                <span>{beliefs.length} Fundamental Beliefs • Sola Scriptura</span>
              </div>
              <p className="italic text-foreground/80 text-[11px] leading-relaxed">
                Seventh-day Adventists accept the Bible as their only creed and hold certain fundamental beliefs to be the teaching of the Holy Scriptures.
              </p>
            </div>

            <div className="space-y-3">
              {!beliefsData && (
                <div className="p-4 text-center text-xs text-foreground/50">Loading beliefs…</div>
              )}
              {filteredBeliefs.map(b => {
                const isExpanded = !!expandedBeliefs[b.id];
                return (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-xl border border-foreground/10 bg-background hover:border-accent/40 transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                        Belief {b.number} • {b.category.replace('The Doctrine of ', '')}
                      </span>
                      <button
                        onClick={() => handleNavigate(b.primaryAnchorVerseId)}
                        className="text-[11px] text-accent hover:underline inline-flex items-center gap-1 font-mono cursor-pointer"
                      >
                        <span>{b.primaryAnchorVerseId}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="text-sm font-bold mt-1.5 text-foreground">
                      {b.title}
                    </div>

                    <p className="text-xs text-foreground/70 mt-1.5 leading-relaxed">
                      {b.summary}
                    </p>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-foreground/10 space-y-2.5">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/40 mb-1">
                            Scripture References:
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {b.scriptureRefs.map((ref, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleNavigateRef(ref)}
                                className="px-2 py-0.5 rounded bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent font-mono text-[10px] transition-colors cursor-pointer"
                              >
                                {ref}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-3 pt-2 border-t border-foreground/5 flex items-center justify-between text-xs">
                      <button
                        onClick={() => toggleBeliefExpanded(b.id)}
                        className="text-[11px] text-foreground/60 hover:text-foreground flex items-center gap-1 cursor-pointer"
                      >
                        {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                        <span>{isExpanded ? 'Hide Details' : 'View Scripture Proofs'}</span>
                      </button>
                      <button
                        onClick={() => handleNavigate(b.primaryAnchorVerseId)}
                        className="text-[11px] font-semibold text-accent hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>Study Anchor</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* LAST DAY EVENTS TAB */}
        {activeTab === 'lde' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-accent/10 border border-accent/25 text-foreground/80 text-xs space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-accent">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Great Controversy & Last Day Events Timeline</span>
              </div>
              <p className="italic text-foreground/80 text-[11px] leading-relaxed">
                Prophetic timeline tracing from the Shaking to the Earth Made New.
              </p>
            </div>

            <div className="space-y-3">
              {!ldeData && (
                <div className="p-4 text-center text-xs text-foreground/50">Loading timeline…</div>
              )}
              {filteredEvents.map(ev => {
                const isExpanded = !!expandedLde[ev.id];
                return (
                  <div
                    key={ev.id}
                    className="p-3.5 rounded-xl border border-foreground/10 bg-background hover:border-accent/40 transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                        Phase {ev.phase} • {ev.era}
                      </span>
                      <button
                        onClick={() => handleNavigate(ev.primaryAnchorVerseId)}
                        className="text-[11px] text-accent hover:underline inline-flex items-center gap-1 font-mono cursor-pointer"
                      >
                        <span>{ev.primaryAnchorVerseId}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>

                    <div className="text-sm font-bold mt-1.5 text-foreground">
                      {ev.title}
                    </div>

                    <p className="text-xs text-foreground/70 mt-1.5 leading-relaxed">
                      {ev.biblicalSummary}
                    </p>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-foreground/10 space-y-2">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                          Scripture Sequence:
                        </div>
                        <ul className="space-y-1.5">
                          {ev.scriptureSequence.map((seq, sIdx) => (
                            <li key={sIdx} className="p-2 rounded bg-foreground/5 text-xs flex flex-col gap-0.5">
                              <div className="flex items-center justify-between">
                                {seq.verseId ? (
                                  <button
                                    onClick={() => handleNavigate(seq.verseId)}
                                    className="font-semibold text-accent text-[11px] hover:underline cursor-pointer inline-flex items-center gap-1"
                                    title={`Navigate to ${seq.ref}`}
                                  >
                                    <span>{seq.ref}</span>
                                    <ArrowUpRight className="h-2.5 w-2.5" />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleNavigateRef(seq.ref)}
                                    className="font-semibold text-accent text-[11px] hover:underline cursor-pointer inline-flex items-center gap-1"
                                    title={`Navigate to ${seq.ref}`}
                                  >
                                    <span>{seq.ref}</span>
                                    <ArrowUpRight className="h-2.5 w-2.5" />
                                  </button>
                                )}
                                {seq.verseId && (
                                  <button
                                    onClick={() => handleNavigate(seq.verseId)}
                                    className="text-[10px] text-foreground/50 hover:text-accent flex items-center gap-0.5 cursor-pointer"
                                  >
                                    <span>Read</span>
                                    <ArrowUpRight className="h-2.5 w-2.5" />
                                  </button>
                                )}
                              </div>
                              <div className="text-foreground/80">{seq.title}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-3 pt-2 border-t border-foreground/5 flex items-center justify-between text-xs">
                      <button
                        onClick={() => toggleLdeExpanded(ev.id)}
                        className="text-[11px] text-foreground/60 hover:text-foreground flex items-center gap-1 cursor-pointer"
                      >
                        {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                        <span>{isExpanded ? 'Hide Sequence' : 'View Scripture Sequence'}</span>
                      </button>
                      <button
                        onClick={() => handleNavigate(ev.primaryAnchorVerseId)}
                        className="text-[11px] font-semibold text-accent hover:underline flex items-center gap-0.5 cursor-pointer"
                      >
                        <span>Study Anchor</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
