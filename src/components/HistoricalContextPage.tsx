import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  X,
  Search,
  Landmark,
  Calendar,
  BookOpen,
  ArrowRight,
  Sparkles,
  Heart,
  Sun,
  Moon,
  Compass,
  MapPin,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { useStore } from '../store/useStore';
import {
  BIBLICAL_ERAS,
  findEraForBook,
  getAllHistoricalConnections,
  ANCHOR_TEXTS,
  type BiblicalEra,
  type HistoricalConnectionItem,
} from '../data/historicalContextData';
import { threadFor, parseRef, BOOK_REGISTRY, getChapterVersesFromLoaded } from '../data/library';
import { generateConnectionInterrogation, getAuthorForRef } from '../data/connectionInterrogation';
import { getThreadDetail } from '../data/threadDetailService';

export function parsePersonalRelevance(text: string): { why: string; what: string; relationship: string } | null {
  if (!text) return null;
  const whyMatch = text.match(/Why you need to know this:\s*([^]*?)(?=What it does for you:|$)/i);
  const whatMatch = text.match(/What it does for you:\s*([^]*?)(?=Relationship with Jesus:|$)/i);
  const relMatch = text.match(/Relationship with Jesus:\s*([^]*)$/i);

  if (whyMatch && whatMatch && relMatch) {
    return {
      why: whyMatch[1].trim(),
      what: whatMatch[1].trim(),
      relationship: relMatch[1].trim(),
    };
  }
  return null;
}

export function HistoricalContextPage() {
  const {
    theme: appTheme,
    historicalContextOpen,
    focusedHistoricalConnectionId,
    selectedThread,
    setHistoricalContextOpen,
    setReadingLocation,
    setSelectedThread,
    setThreadMapOpen,
  } = useStore();

  const [pageTheme, setPageTheme] = useState<'light' | 'dark'>(appTheme);
  useEffect(() => setPageTheme(appTheme), [appTheme]);

  const [selectedEraId, setSelectedEraId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map());

  // When focusedHistoricalConnectionId is set, clear any era or search filters so the requested item is guaranteed visible
  useEffect(() => {
    if (focusedHistoricalConnectionId) {
      setSelectedEraId(null);
      setSearchQuery('');
    }
  }, [focusedHistoricalConnectionId]);

  const allConnections = useMemo(() => {
    const base = getAllHistoricalConnections();
    if (!focusedHistoricalConnectionId) return base;

    const exists = base.some(
      c =>
        c.id === focusedHistoricalConnectionId ||
        c.anchorId === focusedHistoricalConnectionId ||
        c.id.startsWith(`${focusedHistoricalConnectionId}_`)
    );
    if (exists) return base;

    // Dynamically synthesize a HistoricalConnectionItem using generateConnectionInterrogation
    const [anchorPart, targetPart] = focusedHistoricalConnectionId.includes('_')
      ? focusedHistoricalConnectionId.split('_')
      : [focusedHistoricalConnectionId, ''];

    const [slug, chStr, vStr] = anchorPart.split('-');
    const meta = BOOK_REGISTRY.find(b => b.slug === slug);
    const bookName = meta?.name || slug || 'Genesis';
    const chapter = parseInt(chStr, 10) || 1;
    const verse = parseInt(vStr, 10) || 1;
    const anchorRef = meta ? `${meta.name} ${chapter}:${verse}` : anchorPart;

    const thread = threadFor(anchorPart);
    const targetRef = targetPart || thread?.fulfillmentRefs[0] || 'Apostolic Culmination';
    const detail = getThreadDetail(anchorPart);

    const sourceVerses = getChapterVersesFromLoaded(bookName, chapter);
    const foundVerse = sourceVerses.find(v => v.id === anchorPart);
    const anchorVerseText =
      foundVerse?.text ||
      selectedThread?.text ||
      ANCHOR_TEXTS[anchorPart] ||
      '';

    const inter = generateConnectionInterrogation({
      anchorId: anchorPart,
      anchorRef,
      targetRef,
      anchorVerseText,
      targetVerseText: '',
      principle: detail?.principle,
    });

    const sourceEra = findEraForBook(anchorRef);
    const fulfillmentEra = findEraForBook(targetRef);
    const hc = inter.historicalContext;

    const dynamicItem: HistoricalConnectionItem = {
      id: focusedHistoricalConnectionId,
      anchorId: anchorPart,
      anchorRef,
      targetRef,
      anchorVerseText,
      sourceEra,
      fulfillmentEra,
      sourceAuthor: hc?.sourceAuthor || getAuthorForRef(anchorRef),
      sourceDate: hc?.sourceDate || sourceEra.dateRange,
      sourceSetting: hc?.sourceSetting || sourceEra.geopoliticalBackdrop,
      fulfillmentAuthor: hc?.fulfillmentAuthor || getAuthorForRef(targetRef),
      fulfillmentDate: hc?.fulfillmentDate || fulfillmentEra.dateRange,
      fulfillmentSetting: hc?.fulfillmentSetting || fulfillmentEra.geopoliticalBackdrop,
      redemptiveBridge: hc?.redemptiveBridge || 'Progressive redemptive revelation bridging the Old Testament foundation to its New Testament culmination.',
      ultimatePoint: inter.ultimatePoint,
      personalRelevance: inter.personalRelevance,
      what: inter.what,
      when: inter.when,
      how: inter.how,
      why: inter.why,
      scholarshipNotes: hc?.scholarshipNotes,
    };

    return [dynamicItem, ...base];
  }, [focusedHistoricalConnectionId, selectedThread]);

  // Filter connections by era and search query
  const filteredConnections = useMemo(() => {
    return allConnections.filter(c => {
      const matchesEra =
        !selectedEraId ||
        c.sourceEra.id === selectedEraId ||
        c.fulfillmentEra.id === selectedEraId;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesEra;

      const matchesSearch =
        c.anchorRef.toLowerCase().includes(q) ||
        c.targetRef.toLowerCase().includes(q) ||
        c.sourceAuthor.toLowerCase().includes(q) ||
        c.fulfillmentAuthor.toLowerCase().includes(q) ||
        c.ultimatePoint.toLowerCase().includes(q) ||
        c.personalRelevance.toLowerCase().includes(q) ||
        c.what.toLowerCase().includes(q) ||
        c.sourceEra.name.toLowerCase().includes(q) ||
        c.fulfillmentEra.name.toLowerCase().includes(q);

      return matchesEra && matchesSearch;
    });
  }, [allConnections, selectedEraId, searchQuery]);

  // Auto-scroll to focused connection if requested
  useEffect(() => {
    if (!focusedHistoricalConnectionId) return;
    const target =
      cardRefs.current.get(focusedHistoricalConnectionId) ||
      Array.from(cardRefs.current.entries()).find(([k]) =>
        k === focusedHistoricalConnectionId || k.startsWith(`${focusedHistoricalConnectionId}_`)
      )?.[1];

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [focusedHistoricalConnectionId]);

  if (!historicalContextOpen) return null;

  const P = pageTheme === 'dark' ? DARK_PALETTE : LIGHT_PALETTE;

  const handleOpenInMap = (conn: HistoricalConnectionItem) => {
    // Determine the source book and chapter
    const parsed = parseRef(conn.anchorRef);
    if (parsed) {
      const bookObj = BOOK_REGISTRY.find(
        b => b.slug.toLowerCase() === parsed.book.toLowerCase() || b.name.toLowerCase() === parsed.book.toLowerCase()
      );
      const bookName = bookObj?.name || parsed.book || conn.anchorRef.split(' ')[0] || '';
      setReadingLocation(bookName, parsed.chapter);

      const threadMap = threadFor(conn.anchorId);
      const sourceVerses = getChapterVersesFromLoaded(bookName, parsed.chapter);
      const foundVerse = sourceVerses.find(v => v.id === conn.anchorId);
      const scriptureText =
        conn.anchorVerseText ||
        foundVerse?.text ||
        ANCHOR_TEXTS[conn.anchorId] ||
        selectedThread?.text ||
        '';

      setSelectedThread({
        id: conn.anchorId,
        book: bookName,
        chapter: parsed.chapter,
        verseNumber: parsed.startVerse,
        text: scriptureText,
        isThread: true,
        fulfillmentRefs: threadMap?.fulfillmentRefs ?? [conn.targetRef],
      });
      setHistoricalContextOpen(false);
      setThreadMapOpen(true);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[95] flex flex-col overflow-hidden select-text"
      style={{ background: P.bg, color: P.text }}
    >
      {/* Top Navigation Bar */}
      <header
        className="flex items-center justify-between gap-4 px-6 py-3.5 border-b shrink-0 z-20"
        style={{ borderColor: P.border, background: P.headerBg }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="h-9 w-9 rounded-xl flex items-center justify-center border shrink-0"
            style={{ borderColor: P.gold, background: `${P.gold}1a`, color: P.gold }}
          >
            <Landmark className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg font-bold truncate">Historical Context & Chronology</h1>
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold"
                style={{ background: `${P.gold}22`, color: P.gold }}
              >
                All Connections
              </span>
            </div>
            <p className="text-xs truncate" style={{ color: P.dim }}>
              Redemptive history, geopolitical backdrops, and chronological horizons across the 66 canonical books
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setPageTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={pageTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="h-8 w-8 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            {pageTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setHistoricalContextOpen(false)}
            aria-label="Close historical context page"
            className="h-8 px-3 rounded-full flex items-center gap-1.5 border text-xs font-semibold cursor-pointer transition-colors"
            style={{ borderColor: P.ctrlBorder, color: P.text }}
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-8 py-6 space-y-8 max-w-7xl mx-auto w-full">
        {/* Search & Era Selector Controls */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div
              className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm"
              style={{ background: P.cardBg, borderColor: P.border }}
            >
              <Search className="h-4 w-4 shrink-0" style={{ color: P.dim }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by book, verse, author, keyword, or redemptive theme..."
                className="w-full bg-transparent outline-none placeholder:text-muted-foreground/60 text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs px-2 py-0.5 rounded cursor-pointer hover:opacity-75"
                  style={{ color: P.dim }}
                >
                  Clear
                </button>
              )}
            </div>

            {selectedEraId && (
              <button
                onClick={() => setSelectedEraId(null)}
                className="px-3.5 py-2 rounded-xl border text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 shrink-0"
                style={{ borderColor: P.gold, color: P.gold, background: `${P.gold}14` }}
              >
                <span>Filtered by: {BIBLICAL_ERAS.find(e => e.id === selectedEraId)?.name}</span>
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {/* Interactive Biblical Eras Timeline Strip */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] uppercase tracking-widest font-semibold" style={{ color: P.gold }}>
                Chronological Biblical Eras
              </span>
              <span className="text-[11px]" style={{ color: P.mute }}>
                Click an era to filter connections
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {BIBLICAL_ERAS.map((era, idx) => {
                const isSelected = selectedEraId === era.id;
                return (
                  <button
                    key={era.id}
                    onClick={() => setSelectedEraId(isSelected ? null : era.id)}
                    className="text-left p-2.5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between"
                    style={{
                      borderColor: isSelected ? P.gold : P.border,
                      background: isSelected ? `${P.gold}1a` : P.cardBg,
                      boxShadow: isSelected ? `0 0 12px ${P.gold}33` : 'none',
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 font-mono text-[9px] mb-1">
                        <span style={{ color: isSelected ? P.gold : P.mute }}>Era 0{idx + 1}</span>
                        <span className="truncate text-[9px]" style={{ color: P.dim }}>{era.dateRange}</span>
                      </div>
                      <div className="font-serif text-xs font-semibold leading-tight line-clamp-1">
                        {era.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Selected Era Highlight Card */}
        {selectedEraId && (() => {
          const era = BIBLICAL_ERAS.find(e => e.id === selectedEraId);
          if (!era) return null;
          return (
            <div
              className="p-5 rounded-xl border space-y-3"
              style={{ background: P.cardBg, borderColor: P.gold }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" style={{ color: P.gold }} />
                  <span className="font-serif text-base font-bold">{era.name}</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: P.border, color: P.dim }}>
                    {era.dateRange}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedEraId(null)}
                  className="text-xs cursor-pointer hover:underline"
                  style={{ color: P.gold }}
                >
                  Show All Eras
                </button>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: P.text }}>{era.summary}</p>
              <div className="text-xs leading-relaxed p-3 rounded-lg border" style={{ background: P.innerBg, borderColor: P.border }}>
                <span className="font-semibold" style={{ color: P.gold }}>Geopolitical & Cultural Setting: </span>
                <span style={{ color: P.dim }}>{era.geopoliticalBackdrop}</span>
              </div>
            </div>
          );
        })()}

        {/* Connection Dossiers */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: P.border }}>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold">
              <Compass className="h-4 w-4" style={{ color: P.gold }} />
              <span>Historical Connection Dossiers ({filteredConnections.length})</span>
            </div>
            <span className="text-xs" style={{ color: P.dim }}>
              Source Horizon ➔ Apostolic / Canonical Horizon
            </span>
          </div>

          {filteredConnections.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Landmark className="h-10 w-10 mx-auto opacity-30" />
              <p className="text-sm" style={{ color: P.dim }}>
                No historical connections found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedEraId(null);
                }}
                className="text-xs px-3 py-1.5 rounded-lg border cursor-pointer font-medium"
                style={{ borderColor: P.gold, color: P.gold }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredConnections.map(conn => {
                const isFocused =
                  focusedHistoricalConnectionId &&
                  (conn.id === focusedHistoricalConnectionId ||
                    conn.anchorId === focusedHistoricalConnectionId ||
                    conn.id.startsWith(`${focusedHistoricalConnectionId}_`));

                return (
                  <article
                    key={conn.id}
                    ref={el => {
                      if (el) cardRefs.current.set(conn.id, el);
                      else cardRefs.current.delete(conn.id);
                    }}
                    className="rounded-2xl border transition-all duration-500 overflow-hidden shadow-sm"
                    style={{
                      borderColor: isFocused ? P.gold : P.border,
                      background: P.cardBg,
                      boxShadow: isFocused ? `0 0 28px -4px ${P.gold}44` : 'none',
                    }}
                  >
                    {/* Header Bar */}
                    <div
                      className="px-6 py-4 border-b flex flex-wrap items-center justify-between gap-3"
                      style={{ borderColor: P.border, background: P.innerBg }}
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-serif text-lg font-bold">{conn.anchorRef}</span>
                        <ArrowRight className="h-4 w-4" style={{ color: P.gold }} />
                        <span className="font-serif text-lg font-bold" style={{ color: P.gold }}>{conn.targetRef}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenInMap(conn)}
                          className="h-8 px-3 rounded-full border text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
                          style={{ borderColor: P.gold, color: P.gold, background: `${P.gold}18` }}
                          title="Open this connection in the cinematic Mindmap"
                        >
                          <Compass className="h-3.5 w-3.5" />
                          <span>Study on Map</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      {/* Ultimate Point Highlight Banner */}
                      <div
                        className="p-4 rounded-xl border space-y-1.5"
                        style={{
                          borderColor: P.gold,
                          background: `linear-gradient(135deg, ${P.gold}1a, ${P.gold}08)`,
                        }}
                      >
                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-bold" style={{ color: P.gold }}>
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>The Ultimate Redemptive Climax</span>
                        </div>
                        <p className="font-serif text-base font-medium leading-relaxed" style={{ color: P.text }}>
                          {conn.ultimatePoint}
                        </p>
                      </div>

                      {/* Personal Relevance / Walk with Jesus Banner */}
                      {(() => {
                        const parsed = parsePersonalRelevance(conn.personalRelevance);
                        return (
                          <div
                            className="p-4 rounded-xl border space-y-3"
                            style={{
                              borderColor: `${P.gold}55`,
                              background: `linear-gradient(135deg, ${P.gold}14, transparent)`,
                            }}
                          >
                            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-bold" style={{ color: P.gold }}>
                              <Heart className="h-3.5 w-3.5" />
                              <span>Personal Relevance · Your Walk with Jesus</span>
                            </div>
                            {parsed ? (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-0.5">
                                <div className="p-3 rounded-lg border space-y-1" style={{ borderColor: `${P.gold}30`, background: `${P.gold}08` }}>
                                  <div className="font-mono text-[9px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                                    1. Why You Need to Know This
                                  </div>
                                  <p className="font-serif text-xs leading-relaxed" style={{ color: P.text }}>
                                    {parsed.why}
                                  </p>
                                </div>
                                <div className="p-3 rounded-lg border space-y-1" style={{ borderColor: `${P.gold}30`, background: `${P.gold}08` }}>
                                  <div className="font-mono text-[9px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                                    2. What It Does For You
                                  </div>
                                  <p className="font-serif text-xs leading-relaxed" style={{ color: P.text }}>
                                    {parsed.what}
                                  </p>
                                </div>
                                <div className="p-3 rounded-lg border space-y-1" style={{ borderColor: `${P.gold}30`, background: `${P.gold}08` }}>
                                  <div className="font-mono text-[9px] uppercase font-bold tracking-wider" style={{ color: P.gold }}>
                                    3. Your Relationship With Jesus
                                  </div>
                                  <p className="font-serif text-xs leading-relaxed" style={{ color: P.text }}>
                                    {parsed.relationship}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <p className="font-serif text-sm leading-relaxed" style={{ color: P.text }}>
                                {conn.personalRelevance}
                              </p>
                            )}
                          </div>
                        );
                      })()}

                      {/* Side-by-side Historical Settings */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Source Side */}
                        <div className="p-4 rounded-xl border space-y-2.5" style={{ borderColor: P.border, background: P.innerBg }}>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-wider font-bold" style={{ color: P.gold }}>
                              Source Horizon · {conn.anchorRef}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: P.border, color: P.dim }}>
                              {conn.sourceEra.name}
                            </span>
                          </div>
                          <div className="space-y-1 text-xs">
                            <div><strong style={{ color: P.text }}>Author:</strong> <span style={{ color: P.dim }}>{conn.sourceAuthor}</span></div>
                            <div><strong style={{ color: P.text }}>Date:</strong> <span style={{ color: P.dim }}>{conn.sourceDate}</span></div>
                          </div>
                          <p className="text-xs leading-relaxed pt-1" style={{ color: P.dim }}>
                            {conn.sourceSetting}
                          </p>
                        </div>

                        {/* Fulfillment Side */}
                        <div className="p-4 rounded-xl border space-y-2.5" style={{ borderColor: P.border, background: P.innerBg }}>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-wider font-bold" style={{ color: P.steel }}>
                              Fulfillment Horizon · {conn.targetRef}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ borderColor: P.border, color: P.dim }}>
                              {conn.fulfillmentEra.name}
                            </span>
                          </div>
                          <div className="space-y-1 text-xs">
                            <div><strong style={{ color: P.text }}>Author:</strong> <span style={{ color: P.dim }}>{conn.fulfillmentAuthor}</span></div>
                            <div><strong style={{ color: P.text }}>Date:</strong> <span style={{ color: P.dim }}>{conn.fulfillmentDate}</span></div>
                          </div>
                          <p className="text-xs leading-relaxed pt-1" style={{ color: P.dim }}>
                            {conn.fulfillmentSetting}
                          </p>
                        </div>
                      </div>

                      {/* Redemptive-Historical Bridge */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider font-semibold" style={{ color: P.gold }}>
                          <ArrowRight className="h-3.5 w-3.5" />
                          <span>The Redemptive-Historical Bridge</span>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: P.text }}>
                          {conn.redemptiveBridge}
                        </p>
                      </div>

                      {/* Biblical Scholarship Notes (if present) */}
                      {conn.scholarshipNotes && (
                        <div className="p-3.5 rounded-xl border text-xs leading-relaxed space-y-1" style={{ background: P.innerBg, borderColor: P.border }}>
                          <span className="font-semibold font-mono text-[10px] uppercase tracking-wider" style={{ color: P.gold }}>
                            Exegesis & Language Notes:
                          </span>
                          <p style={{ color: P.dim }}>{conn.scholarshipNotes}</p>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

const DARK_PALETTE = {
  bg: '#0B0B0D',
  cardBg: '#131317',
  innerBg: '#18181E',
  headerBg: 'rgba(16,16,19,.96)',
  border: 'rgba(234,230,218,.12)',
  gold: '#C8A24B',
  steel: '#7FA0C4',
  text: '#EAE6DA',
  dim: 'rgba(166,161,150,.85)',
  mute: '#6E695F',
  ctrlBorder: 'rgba(255,255,255,.16)',
};

const LIGHT_PALETTE = {
  bg: '#FAF9F6',
  cardBg: '#FFFFFF',
  innerBg: '#F5F3EC',
  headerBg: 'rgba(255,255,255,.96)',
  border: 'rgba(44,44,44,.12)',
  gold: '#A67C2E',
  steel: '#3C5168',
  text: '#2C2C2C',
  dim: '#5A564E',
  mute: '#8A857B',
  ctrlBorder: 'rgba(44,44,44,.22)',
};
