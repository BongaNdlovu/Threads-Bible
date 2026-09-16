import { useEffect, useMemo, useState } from 'react';
import { Clock, ScrollText, Search, X, ArrowUpRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { createDeferredDataset, useDatasetState } from '../data/deferred';
import { DataChunkErrorCard } from './DataChunkErrorCard';
import { parseRef, BOOK_BY_NAME } from '../data/library';
import { cn } from '@/lib/utils';

/**
 * Prophecy & Last-Day Events (master plan study page 4c): the prophetic
 * timeline with plain definitions and scripture sequences, plus the symbols
 * and types Scripture itself defines. Absorbs the former Threads-panel LDE
 * and Symbols tabs (operator decision D4). Token-branded; follows app theme.
 */

const ldeDataset = createDeferredDataset(() =>
  import('../data/lastDayEvents').then(m => ({ events: m.LAST_DAY_EVENTS, eras: m.LDE_ERAS }))
);

const symbolsDataset = createDeferredDataset(() =>
  import('../data/symbolsTypes').then(m => ({
    symbols: m.SYMBOLS,
    types: m.TYPES,
    symbolCategories: m.SYMBOL_CATEGORIES,
    typeCategories: m.TYPE_CATEGORIES,
  }))
);

function useLdeState() {
  return useDatasetState(ldeDataset);
}

function useSymbolsState() {
  return useDatasetState(symbolsDataset);
}

export function ProphecyPage() {
  const { prophecyOpen, setProphecyOpen, navigateToVerse, showNotice } = useStore();
  const { data: ldeData, error: ldeError, retry: retryLde } = useLdeState();
  const { data: symbolsData, error: symbolsError, retry: retrySymbols } = useSymbolsState();

  const [era, setEra] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const ldeEvents = ldeData?.events ?? [];
  const ldeEras = ldeData?.eras ?? [];
  const symbols = symbolsData?.symbols ?? [];
  const types = symbolsData?.types ?? [];
  const symbolCategories = symbolsData?.symbolCategories ?? [];
  const typeCategories = symbolsData?.typeCategories ?? [];

  // Preload both chunks on first open (they no longer ship with the panel).
  useEffect(() => {
    if (prophecyOpen) {
      ldeDataset.preload();
      symbolsDataset.preload();
    }
  }, [prophecyOpen]);

  // Reset the view state whenever the page closes so the next open starts clean.
  useEffect(() => {
    if (!prophecyOpen) {
      setEra('All');
      setQuery('');
      setCategory('All');
    }
  }, [prophecyOpen]);

  const filteredEvents = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ldeEvents.filter(e => {
      if (era !== 'All' && e.era !== era) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.subtitle.toLowerCase().includes(q) ||
        e.biblicalSummary.toLowerCase().includes(q) ||
        e.theologicalSignificance.toLowerCase().includes(q) ||
        e.scriptureSequence.some(s => s.title.toLowerCase().includes(q) || s.ref.toLowerCase().includes(q))
      );
    });
  }, [ldeEvents, query, era]);

  const filteredSymbols = useMemo(() => {
    const q = query.trim().toLowerCase();
    return symbols.filter(m => {
      if (category !== 'All' && m.category !== category) return false;
      if (!q) return true;
      return (
        m.symbol.toLowerCase().includes(q) ||
        m.meaning.toLowerCase().includes(q) ||
        (m.scriptureInterpretation ?? '').toLowerCase().includes(q) ||
        m.proofRefs.some(r => r.toLowerCase().includes(q))
      );
    });
  }, [symbols, query, category]);

  const filteredTypes = useMemo(() => {
    const q = query.trim().toLowerCase();
    return types.filter(t => {
      if (category !== 'All' && t.category !== category) return false;
      if (!q) return true;
      return (
        t.type.toLowerCase().includes(q) ||
        t.antitype.toLowerCase().includes(q) ||
        t.meaning.toLowerCase().includes(q) ||
        t.typeRefs.some(r => r.toLowerCase().includes(q)) ||
        t.fulfillmentRefs.some(r => r.toLowerCase().includes(q))
      );
    });
  }, [types, query, category]);

  const navigateRef = (refStr: string) => {
    const parsed = parseRef(refStr);
    const meta = parsed ? BOOK_BY_NAME[parsed.book] : undefined;
    if (!parsed || !meta) {
      showNotice(`Couldn't navigate to "${refStr}" — no single target verse.`);
      return;
    }
    void navigateToVerse(`${meta.slug}-${parsed.chapter}-${parsed.startVerse}`);
    setProphecyOpen(false);
  };

  if (!prophecyOpen) return null;

  return (
    <div className="fixed inset-0 z-[95] flex flex-col overflow-hidden select-text bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 px-6 py-3.5 border-b border-foreground/10 shrink-0 bg-background/95 backdrop-blur">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-9 w-9 rounded-xl flex items-center justify-center border border-accent/30 bg-accent/10 text-accent shrink-0">
            <Clock className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg font-bold truncate">Prophecy &amp; Last-Day Events</h1>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold bg-accent/10 text-accent">
                Timeline · Symbols · Types
              </span>
            </div>
            <p className="text-xs truncate text-foreground/60">
              The prophetic thread from the Shaking to the Earth Made New — with the symbols Scripture itself defines
            </p>
          </div>
        </div>
        <button
          onClick={() => setProphecyOpen(false)}
          aria-label="Close prophecy page"
          className="h-8 px-3 rounded-full flex items-center gap-1.5 border border-foreground/15 text-xs font-semibold cursor-pointer transition-colors hover:bg-foreground/5 shrink-0"
        >
          <X className="h-4 w-4" />
          <span className="hidden sm:inline">Close</span>
        </button>
      </header>

      {/* Search & filters */}
      <div className="px-4 sm:px-8 pt-5 pb-3 max-w-5xl mx-auto w-full space-y-3 shrink-0">
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-foreground/15 bg-card text-sm">
          <Search className="h-4 w-4 shrink-0 text-foreground/40" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search events, symbols, types, or references…"
            className="w-full bg-transparent outline-none placeholder:text-foreground/40"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs px-2 py-0.5 rounded cursor-pointer text-foreground/50 hover:text-foreground"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
          <button
            onClick={() => setEra('All')}
            className={cn(
              'px-3 py-1 rounded-full transition-colors cursor-pointer whitespace-nowrap',
              era === 'All'
                ? 'bg-accent text-accent-foreground font-semibold'
                : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
            )}
          >
            All Eras ({ldeEras.length})
          </button>
          {ldeEras.map(e => (
            <button
              key={e}
              onClick={() => setEra(e)}
              className={cn(
                'px-3 py-1 rounded-full transition-colors cursor-pointer whitespace-nowrap',
                era === e
                  ? 'bg-accent text-accent-foreground font-semibold'
                  : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
              )}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
          <button
            onClick={() => setCategory('All')}
            className={cn(
              'px-3 py-1 rounded-full transition-colors cursor-pointer whitespace-nowrap',
              category === 'All'
                ? 'bg-accent text-accent-foreground font-semibold'
                : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
            )}
          >
            All Symbols &amp; Types ({symbols.length + types.length})
          </button>
          {symbolCategories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                'px-3 py-1 rounded-full transition-colors cursor-pointer whitespace-nowrap',
                category === c
                  ? 'bg-accent text-accent-foreground font-semibold'
                  : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
              )}
            >
              {c}
            </button>
          ))}
          {typeCategories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                'px-3 py-1 rounded-full transition-colors cursor-pointer whitespace-nowrap',
                category === c
                  ? 'bg-accent text-accent-foreground font-semibold'
                  : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10'
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-8 pb-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Timeline */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 border-b border-foreground/10 pb-2">
              <Clock className="h-4 w-4 text-accent" />
              <h2 className="font-serif text-base font-bold">The Great Controversy Timeline</h2>
              <span className="text-[11px] text-foreground/50">{filteredEvents.length} phases</span>
            </div>

            {ldeError ? (
              <DataChunkErrorCard
                title="Unable to Load Timeline Events"
                chunkName="Last Day Events Timeline"
                error={ldeError}
                onRetry={retryLde}
              />
            ) : !ldeData ? (
              <div className="py-8 text-center text-xs text-foreground/50 animate-pulse">Loading timeline…</div>
            ) : filteredEvents.length === 0 ? (
              <p className="py-8 text-center text-xs text-foreground/50">No phases match this search or era.</p>
            ) : (
              filteredEvents.map(ev => (
                <article
                  key={ev.id}
                  className="p-5 rounded-2xl border border-foreground/10 bg-card shadow-sm space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                      Phase {ev.phase} · {ev.era}
                    </span>
                    <button
                      onClick={() => {
                        void navigateToVerse(ev.primaryAnchorVerseId);
                        setProphecyOpen(false);
                      }}
                      className="text-[11px] text-accent hover:underline inline-flex items-center gap-1 font-mono cursor-pointer"
                    >
                      <span>{ev.primaryAnchorVerseId}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                  <h3 className="font-serif text-lg font-bold">{ev.title}</h3>
                  <p className="text-xs font-medium text-foreground/60">{ev.subtitle}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{ev.biblicalSummary}</p>
                  <div className="p-3 rounded-xl bg-accent/[0.06] border border-accent/20 text-sm text-foreground/80 leading-relaxed">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-accent block mb-1">
                      What it means
                    </span>
                    {ev.theologicalSignificance}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/40 mb-1.5">
                      Scripture sequence
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {ev.scriptureSequence.map((seq, i) => (
                        <button
                          key={i}
                          onClick={() => (seq.verseId ? navigateRef(seq.ref) : navigateRef(seq.ref))}
                          title={seq.title}
                          className="px-2 py-0.5 rounded bg-foreground/5 hover:bg-accent hover:text-accent-foreground font-mono text-[10px] transition-colors cursor-pointer"
                        >
                          {seq.ref}
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              ))
            )}
          </section>

          {/* Symbols & Types */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 border-b border-foreground/10 pb-2">
              <ScrollText className="h-4 w-4 text-accent" />
              <h2 className="font-serif text-base font-bold">Prophetic Symbols &amp; Types</h2>
              <span className="text-[11px] text-foreground/50">
                {filteredSymbols.length} symbols · {filteredTypes.length} types
              </span>
            </div>

            {symbolsError ? (
              <DataChunkErrorCard
                title="Unable to Load Symbols & Types"
                chunkName="Symbols & Types Dataset"
                error={symbolsError}
                onRetry={retrySymbols}
              />
            ) : !symbolsData ? (
              <div className="py-8 text-center text-xs text-foreground/50 animate-pulse">Loading symbols &amp; types…</div>
            ) : null}

            {filteredSymbols.map(s => (
              <article
                key={s.id}
                className="p-5 rounded-2xl border border-foreground/10 bg-card shadow-sm space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                    {s.category}
                  </span>
                  {s.scriptureInterpretation && (
                    <span className="text-[9px] uppercase tracking-wider text-foreground/40">Scripture-defined</span>
                  )}
                </div>
                <h3 className="font-serif text-base font-bold">{s.symbol}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{s.meaning}</p>
                {s.scriptureInterpretation && (
                  <div className="text-xs text-accent/90 italic">Defined: {s.scriptureInterpretation}</div>
                )}
                <div className="flex flex-wrap gap-1">
                  {s.proofRefs.map((ref, i) => (
                    <button
                      key={i}
                      onClick={() => navigateRef(ref)}
                      className="px-2 py-0.5 rounded bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent font-mono text-[10px] transition-colors cursor-pointer"
                    >
                      {ref}
                    </button>
                  ))}
                </div>
              </article>
            ))}

            {filteredTypes.map(t => (
              <article
                key={t.id}
                className="p-5 rounded-2xl border border-foreground/10 bg-card shadow-sm space-y-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent">
                  {t.category}
                </span>
                <h3 className="font-serif text-base font-bold">
                  {t.type} <span className="text-accent">→</span> <span className="text-accent/90">{t.antitype}</span>
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{t.meaning}</p>
                <div className="flex flex-wrap gap-1">
                  {t.typeRefs.map((ref, i) => (
                    <button
                      key={`t-${i}`}
                      onClick={() => navigateRef(ref)}
                      className="px-2 py-0.5 rounded bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent font-mono text-[10px] transition-colors cursor-pointer"
                    >
                      {ref}
                    </button>
                  ))}
                  {t.fulfillmentRefs.map((ref, i) => (
                    <button
                      key={`f-${i}`}
                      onClick={() => navigateRef(ref)}
                      className="px-2 py-0.5 rounded bg-foreground/5 hover:bg-accent hover:text-accent-foreground font-mono text-[10px] transition-colors cursor-pointer"
                    >
                      {ref}
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
