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
    <div
      data-page="prophecy"
      className="page fixed inset-0 z-[95] flex flex-col overflow-hidden select-text"
    >
      {/* Header — same chrome as every study page, cinematic surface */}
      <header
        className="flex items-center justify-between gap-4 px-6 py-3.5 border-b shrink-0 backdrop-blur"
        style={{ borderColor: 'var(--page-border)', background: 'var(--page-header-bg)' }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="page-ember h-9 w-9 rounded-xl flex items-center justify-center border shrink-0"
            style={{ borderColor: 'var(--page-border)', background: 'var(--page-accent-soft)', color: 'var(--page-accent)' }}
          >
            <Clock className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg font-bold truncate">Prophecy &amp; Last-Day Events</h1>
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold"
                style={{ background: 'var(--page-chip)', color: 'var(--page-accent-ink)' }}
              >
                Timeline · Symbols · Types
              </span>
            </div>
            <p className="text-xs truncate" style={{ color: 'var(--page-dim)' }}>
              The prophetic thread from the Shaking to the Earth Made New — with the symbols Scripture itself defines
            </p>
          </div>
        </div>
        <button
          onClick={() => setProphecyOpen(false)}
          aria-label="Close prophecy page"
          className="h-8 px-3 rounded-full flex items-center gap-1.5 border text-xs font-semibold cursor-pointer transition-colors hover:opacity-80 shrink-0"
          style={{ borderColor: 'var(--page-border)', color: 'var(--page-ink)' }}
        >
          <X className="h-4 w-4" />
          <span className="hidden sm:inline">Close</span>
        </button>
      </header>

      {/* Search & filters */}
      <div className="px-4 sm:px-8 pt-5 pb-3 max-w-5xl mx-auto w-full space-y-3 shrink-0">
        <div
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm"
          style={{ borderColor: 'var(--page-border)', background: 'var(--page-surface)' }}
        >
          <Search className="h-4 w-4 shrink-0" style={{ color: 'var(--page-accent)' }} />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search events, symbols, types, or references…"
            className="w-full bg-transparent outline-none"
            style={{ color: 'var(--page-ink)' }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs px-2 py-0.5 rounded cursor-pointer hover:opacity-80"
              style={{ color: 'var(--page-dim)' }}
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px] scrollbar-none">
          <button
            onClick={() => setEra('All')}
            className={cn(
              'page-pill px-3 py-1 rounded-full cursor-pointer whitespace-nowrap text-[11px]',
              era === 'All'
                ? 'page-pill-active'
                : 'page-pill'
            )}
          >
            All Eras ({ldeEras.length})
          </button>
          {ldeEras.map(e => (
            <button
              key={e}
              onClick={() => setEra(e)}
              className={cn(
                'page-pill px-3 py-1 rounded-full cursor-pointer whitespace-nowrap text-[11px]',
                era === e
                  ? 'page-pill-active'
                  : 'page-pill'
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
              'page-pill px-3 py-1 rounded-full cursor-pointer whitespace-nowrap text-[11px]',
              category === 'All'
                ? 'page-pill-active'
                : 'page-pill'
            )}
          >
            All Symbols &amp; Types ({symbols.length + types.length})
          </button>
          {symbolCategories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cn(
                'page-pill px-3 py-1 rounded-full cursor-pointer whitespace-nowrap text-[11px]',
                category === c
                  ? 'page-pill-active'
                  : 'page-pill'
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
                'page-pill px-3 py-1 rounded-full cursor-pointer whitespace-nowrap text-[11px]',
                category === c
                  ? 'page-pill-active'
                  : 'page-pill'
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
            <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--page-border)' }}>
              <Clock className="h-4 w-4 page-accent" />
              <h2 className="font-serif text-base font-bold">The Great Controversy Timeline</h2>
              <span className="page-muted text-[11px]">{filteredEvents.length} phases</span>
            </div>

            {ldeError ? (
              <DataChunkErrorCard
                title="Unable to Load Timeline Events"
                chunkName="Last Day Events Timeline"
                error={ldeError}
                onRetry={retryLde}
              />
            ) : !ldeData ? (
              <div className="page-muted py-8 text-center text-xs animate-pulse">Loading timeline…</div>
            ) : filteredEvents.length === 0 ? (
              <p className="page-muted py-8 text-center text-xs">No phases match this search or era.</p>
            ) : (
              filteredEvents.map(ev => (
                <article
                  key={ev.id}
                  className="page-card p-5 rounded-2xl space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider page-chip px-2 py-0.5">
                      Phase {ev.phase} · {ev.era}
                    </span>
                    <button
                      onClick={() => {
                        void navigateToVerse(ev.primaryAnchorVerseId);
                        setProphecyOpen(false);
                      }}
                      className="page-accent text-[11px] hover:underline inline-flex items-center gap-1 font-mono cursor-pointer"
                    >
                      <span>{ev.primaryAnchorVerseId}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </button>
                  </div>
                  <h3 className="font-serif text-lg font-bold">{ev.title}</h3>
                  <p className="page-muted text-xs font-medium">{ev.subtitle}</p>
                  <p className="text-sm leading-relaxed opacity-90">{ev.biblicalSummary}</p>
                  <div
                    className="p-3 rounded-xl border text-sm leading-relaxed opacity-90"
                    style={{ borderColor: 'var(--page-border)', background: 'var(--page-accent-soft)' }}
                  >
                    <span className="page-accent text-[10px] uppercase tracking-widest font-bold block mb-1">
                      What it means
                    </span>
                    {ev.theologicalSignificance}
                  </div>
                  <div>
                    <div className="page-muted text-[10px] uppercase tracking-widest font-bold mb-1.5">
                      Scripture sequence
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {ev.scriptureSequence.map((seq, i) => (
                        <button
                          key={i}
                          onClick={() => (seq.verseId ? navigateRef(seq.ref) : navigateRef(seq.ref))}
                          title={seq.title}
                          className="page-pill px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer"
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
            <div className="flex items-center gap-2 border-b pb-2" style={{ borderColor: 'var(--page-border)' }}>
              <ScrollText className="h-4 w-4 page-accent" />
              <h2 className="font-serif text-base font-bold">Prophetic Symbols &amp; Types</h2>
              <span className="page-muted text-[11px]">
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
              <div className="page-muted py-8 text-center text-xs animate-pulse">Loading symbols &amp; types…</div>
            ) : null}

            {filteredSymbols.map(s => (
              <article
                key={s.id}
                className="page-card p-5 rounded-2xl space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider page-chip px-2 py-0.5">
                    {s.category}
                  </span>
                  {s.scriptureInterpretation && (
                    <span className="page-muted text-[9px] uppercase tracking-wider">Scripture-defined</span>
                  )}
                </div>
                <h3 className="font-serif text-base font-bold">{s.symbol}</h3>
                <p className="text-sm leading-relaxed opacity-90">{s.meaning}</p>
                {s.scriptureInterpretation && (
                  <div className="text-xs page-accent/90 italic">Defined: {s.scriptureInterpretation}</div>
                )}
                <div className="flex flex-wrap gap-1">
                  {s.proofRefs.map((ref, i) => (
                    <button
                      key={i}
                      onClick={() => navigateRef(ref)}
                      className="page-pill px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer"
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
                className="page-card p-5 rounded-2xl space-y-2"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider page-chip px-2 py-0.5">
                  {t.category}
                </span>
                <h3 className="font-serif text-base font-bold">
                  {t.type} <span className="page-accent">→</span> <span className="page-accent/90">{t.antitype}</span>
                </h3>
                <p className="text-sm leading-relaxed opacity-90">{t.meaning}</p>
                <div className="flex flex-wrap gap-1">
                  {t.typeRefs.map((ref, i) => (
                    <button
                      key={`t-${i}`}
                      onClick={() => navigateRef(ref)}
                      className="page-pill px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer"
                    >
                      {ref}
                    </button>
                  ))}
                  {t.fulfillmentRefs.map((ref, i) => (
                    <button
                      key={`f-${i}`}
                      onClick={() => navigateRef(ref)}
                      className="page-pill px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer"
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
