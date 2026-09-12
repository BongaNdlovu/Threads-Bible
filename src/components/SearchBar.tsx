import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search } from 'lucide-react';
import { BOOK_REGISTRY, BOOK_BY_NAME } from '../data/bookRegistry';
import { fulfillmentVerses } from '../data/fulfillments';
import { getLoadedBooks, type Verse } from '../data/library';
import { useStore } from '../store/useStore';

/** Parse "Genesis 1", "gen 1:5", "Matthew 5" style queries against the registry. */
function parseBookChapter(q: string): { book: string; chapter?: number; verse?: number } | null {
  const trimmed = q.trim();
  if (!trimmed) return null;
  const m = trimmed.match(/^(\d?\s?[A-Za-z]+(?:\s+[A-Za-z]+){0,2})\s*(\d+)?(?::(\d+))?$/);
  if (!m) return null;
  const rawBook = m[1].trim().toLowerCase();
  const match = BOOK_REGISTRY.find(
    b =>
      b.name.toLowerCase() === rawBook ||
      b.slug === rawBook ||
      b.name.toLowerCase().startsWith(rawBook)
  );
  if (!match) return null;
  return {
    book: match.name,
    chapter: m[2] ? parseInt(m[2], 10) : undefined,
    verse: m[3] ? parseInt(m[3], 10) : undefined,
  };
}

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { setReadingLocation, navigateToVerse } = useStore();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Debounce keystrokes so we do not scan the pool on every character
  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(query), 150);
    return () => window.clearTimeout(t);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = useMemo(() => {
    if (!debounced.trim()) {
      return [] as { kind: 'nav' | 'verse'; label: string; book?: string; chapter?: number; verse?: Verse }[];
    }

    const q = debounced.toLowerCase();
    const out: { kind: 'nav' | 'verse'; label: string; book?: string; chapter?: number; verse?: Verse }[] = [];

    const parsed = parseBookChapter(debounced);
    if (parsed && parsed.chapter) {
      const meta = BOOK_BY_NAME[parsed.book];
      if (meta && parsed.chapter >= 1 && parsed.chapter <= meta.chapters) {
        out.push({
          kind: 'nav',
          label: `Go to ${parsed.book} ${parsed.chapter}${parsed.verse ? ':' + parsed.verse : ''}`,
          book: parsed.book,
          chapter: parsed.chapter,
        });
      }
    } else if (parsed) {
      out.push({
        kind: 'nav',
        label: `Open ${parsed.book}`,
        book: parsed.book,
        chapter: 1,
      });
    }

    // Only fulfillments + books currently in the LRU cache (not the whole Bible)
    const pool: Verse[] = [...fulfillmentVerses, ...getLoadedBooks()];

    const seen = new Set<string>();
    for (const v of pool) {
      if (out.length >= 40) break;
      if (seen.has(v.id)) continue;
      const hay = `${v.book} ${v.chapter}:${v.verseNumber} ${v.text}`.toLowerCase();
      if (hay.includes(q)) {
        seen.add(v.id);
        out.push({
          kind: 'verse',
          label: `${v.book} ${v.chapter}:${v.verseNumber} — ${v.text.slice(0, 80)}…`,
          verse: v,
        });
      }
    }

    return out.slice(0, 40);
  }, [debounced]);

  const handleSelect = (item: (typeof results)[number]) => {
    if (item.kind === 'nav' && item.book) {
      setReadingLocation(item.book, item.chapter ?? 1);
    } else if (item.verse) {
      setReadingLocation(item.verse.book, item.verse.chapter);
      void navigateToVerse(item.verse.id);
    }
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex items-center w-full max-w-sm mr-2 md:mr-6">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-foreground/40" />
        </div>
        <input
          type="text"
          className="w-full py-1.5 pl-9 pr-4 text-sm bg-foreground/5 border border-transparent rounded-full focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent transition-all placeholder:text-foreground/40"
          placeholder="Book, chapter, or text…"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && query.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-foreground/10 rounded-lg shadow-xl overflow-hidden z-[100] max-h-[60vh] flex flex-col">
          <div className="overflow-y-auto w-full p-2">
            {results.length === 0 ? (
              <div className="p-4 text-sm text-foreground/50 text-center">
                No results for “{query}”. Try <em>John 3</em> or open a book first for full-text search.
              </div>
            ) : (
              <ul className="space-y-1">
                {results.map((item, i) => (
                  <li
                    key={item.verse?.id ?? `nav-${i}`}
                    className="p-3 text-sm hover:bg-foreground/5 rounded-md cursor-pointer transition-colors"
                    onClick={() => handleSelect(item)}
                  >
                    <div className={item.kind === 'nav' ? 'font-medium text-accent' : ''}>{item.label}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
