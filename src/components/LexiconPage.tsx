import { useEffect, useMemo, useState } from 'react';
import { BookMarked, Search, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getAllThreadDetails, useThreadDetailsReady } from '../data/threadDetailService';
import { BOOK_BY_NAME } from '../data/library';

/**
 * The Lexicon — every original-language term across all thread details,
 * grouped and searchable (master plan study page 4b). Built purely on the app
 * tokens (bg-foreground/accent classes), so light/dark follow the app theme.
 */
interface LexiconEntry {
  key: string;
  term: string;
  original: string;
  translit: string;
  strongs?: string;
  gloss: string;
  exposition?: string;
  note?: string;
  language: 'hebrew' | 'greek' | 'other';
  verseIds: string[];
}

function languageOf(original: string): LexiconEntry['language'] {
  if (/[\u0590-\u05FF]/.test(original)) return 'hebrew';
  if (/[\u0370-\u03FF\u1F00-\u1FFF]/.test(original)) return 'greek';
  return 'other';
}

function refLabel(verseId: string): string {
  const m = verseId.match(/^([a-z0-9]+)-(\d+)-(\d+)$/i);
  if (!m) return verseId;
  const meta = Object.values(BOOK_BY_NAME).find(b => b.slug === m[1].toLowerCase());
  return meta ? `${meta.name} ${m[2]}:${m[3]}` : verseId;
}

export function LexiconPage() {
  const { lexiconOpen, setLexiconOpen, navigateToVerse } = useStore();
  const detailsReady = useThreadDetailsReady();

  const [query, setQuery] = useState('');
  const [languageFilter, setLanguageFilter] = useState<'all' | 'hebrew' | 'greek'>('all');

  // Re-index once per open of the page (the details chunk is stable afterwards).
  const [index, setIndex] = useState<LexiconEntry[]>([]);
  useEffect(() => {
    if (!lexiconOpen || !detailsReady) return;
    const all = getAllThreadDetails();
    const byKey = new Map<string, LexiconEntry>();
    for (const [verseId, detail] of Object.entries(all)) {
      for (const t of detail.terms ?? []) {
        const key = `${t.term}|${t.original}`;
        const existing = byKey.get(key);
        if (existing) {
          if (!existing.verseIds.includes(verseId)) existing.verseIds.push(verseId);
          if (!existing.exposition && t.exposition) existing.exposition = t.exposition;
          continue;
        }
        byKey.set(key, {
          key,
          term: t.term,
          original: t.original,
          translit: t.translit,
          strongs: t.strongs,
          gloss: t.gloss,
          exposition: t.exposition,
          note: t.note,
          language: languageOf(t.original),
          verseIds: [verseId],
        });
      }
    }
    setIndex(Array.from(byKey.values()).sort((a, b) => a.term.localeCompare(b.term)));
  }, [lexiconOpen, detailsReady]);

  // Reset the view state whenever the page closes so the next open starts clean.
  useEffect(() => {
    if (!lexiconOpen) {
      setQuery('');
      setLanguageFilter('all');
    }
  }, [lexiconOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return index.filter(e => {
      if (languageFilter === 'hebrew' && e.language !== 'hebrew') return false;
      if (languageFilter === 'greek' && e.language !== 'greek') return false;
      if (!q) return true;
      return (
        e.term.toLowerCase().includes(q) ||
        e.original.toLowerCase().includes(q) ||
        e.translit.toLowerCase().includes(q) ||
        e.gloss.toLowerCase().includes(q) ||
        (e.exposition ?? '').toLowerCase().includes(q)
      );
    });
  }, [index, query, languageFilter]);

  if (!lexiconOpen) return null;

  const hebrewCount = index.filter(e => e.language === 'hebrew').length;
  const greekCount = index.filter(e => e.language === 'greek').length;

  return (
    <div data-page="lexicon" className="page fixed inset-0 z-[95] flex flex-col overflow-hidden select-text">
      {/* Header */}
      <header className="flex items-center justify-between gap-4 px-6 py-3.5 border-b shrink-0 backdrop-blur" style={{ borderColor: 'var(--page-border)', background: 'var(--page-header-bg)' }}>
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-9 w-9 rounded-xl flex items-center justify-center border shrink-0" style={{ borderColor: 'var(--page-border)', background: 'var(--page-accent-soft)', color: 'var(--page-accent)' }}>
            <BookMarked className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg font-bold truncate">Hebrew &amp; Greek Lexicon</h1>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold page-chip">
                {index.length} terms
              </span>
            </div>
            <p className="page-muted text-xs truncate">
              Every original word behind the threads — with its meaning in this Bible's own context
            </p>
          </div>
        </div>
        <button
          onClick={() => setLexiconOpen(false)}
          aria-label="Close lexicon"
          className="h-8 px-3 rounded-full flex items-center gap-1.5 border text-xs font-semibold cursor-pointer transition-colors hover:opacity-80 shrink-0" style={{ borderColor: 'var(--page-border)', color: 'var(--page-ink)' }}
        >
          <X className="h-4 w-4" />
          <span className="hidden sm:inline">Close</span>
        </button>
      </header>

      {/* Search & filters */}
      <div className="px-4 sm:px-8 pt-5 pb-3 max-w-5xl mx-auto w-full space-y-3 shrink-0">
        <div className="page-search flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm">
          <Search className="h-4 w-4 shrink-0" style={{ color: 'var(--page-accent)' }} />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search a word, transliteration, Strong's number, or meaning…"
            className="page-input w-full outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="page-muted text-xs px-2 py-0.5 rounded cursor-pointer hover:opacity-80"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex gap-1.5 text-[11px]">
          {([
            ['all', `All (${index.length})`],
            ['hebrew', `Hebrew (${hebrewCount})`],
            ['greek', `Greek (${greekCount})`],
          ] as const).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setLanguageFilter(value)}
              className={`page-pill px-3 py-1 rounded-full cursor-pointer ${
                languageFilter === value
                  ? 'page-pill-active'
                  : 'page-pill'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Entries */}
      <div className="flex-1 overflow-y-auto min-h-0 px-4 sm:px-8 pb-10">
        <div className="max-w-5xl mx-auto space-y-3">
          {!detailsReady ? (
            <div className="page-muted py-16 text-center text-sm animate-pulse">
              Loading the lexicon…
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-16 text-center space-y-2">
              <h3 className="font-serif text-base font-bold">No matching words</h3>
              <p className="page-muted text-xs">
                Try a shorter search, or clear the Hebrew/Greek filter.
              </p>
            </div>
          ) : (
            filtered.map(e => (
              <article
                key={e.key}
                className="page-card p-5 rounded-2xl space-y-3"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="page-eyebrow text-[10px] uppercase font-bold">
                    {e.language === 'greek' ? 'Greek' : e.language === 'hebrew' ? 'Hebrew' : 'Term'}
                  </span>
                  <h3 className="font-serif text-lg font-bold">{e.term}</h3>
                  <span className="page-accent font-serif text-xl">{e.original}</span>
                  <span className="page-muted text-sm italic">({e.translit})</span>
                  {e.strongs && (
                    <span className="page-muted font-mono text-[10px] uppercase tracking-wider">
                      Strong's {e.strongs}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed">{e.gloss}</p>
                {e.exposition && (
                  <p className="text-sm leading-relaxed border-l-2 pl-3 opacity-85" style={{ borderColor: 'var(--page-rail)' }}>
                    {e.exposition}
                  </p>
                )}
                {e.note && <p className="page-muted text-xs leading-relaxed">{e.note}</p>}
                <div className="pt-1 border-t" style={{ borderColor: 'var(--page-border)' }}>
                  <div className="page-muted text-[10px] uppercase tracking-widest font-bold mb-1.5">
                    Where this word carries the thread
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {e.verseIds.map(id => (
                      <button
                        key={id}
                        onClick={() => {
                          void navigateToVerse(id);
                          setLexiconOpen(false);
                        }}
                        className="page-pill px-2 py-0.5 rounded font-mono text-[10px] cursor-pointer"
                      >
                        {refLabel(id)}
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
