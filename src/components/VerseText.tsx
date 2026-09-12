import { Verse } from '../data/mockData';
import { useStore } from '../store/useStore';
import { cn } from '@/lib/utils';
import React, { useState, useRef, useEffect } from 'react';
import { Bookmark, Link as LinkIcon, Copy, Check, Palette, BookOpen, Quote, Sparkles, Network } from 'lucide-react';
import { getCitationsForVerse } from '../data/tier2NtCitations';
import { getMessianicPropheciesForVerse } from '../data/tier3Messianic';
import { getMasterChainsForVerse } from '../data/crossRefService';

const HL_COLORS = {
  yellow: 'bg-yellow-200/60 dark:bg-yellow-400/20',
  green: 'bg-emerald-200/60 dark:bg-emerald-400/20',
  blue: 'bg-sky-200/60 dark:bg-sky-400/20',
  rose: 'bg-rose-200/60 dark:bg-rose-400/20',
} as const;

/** Cache compiled keyword regexes — avoids rebuilding RegExp on every verse render. */
const regexCache = new Map<string, RegExp>();
const MAX_REGEX_CACHE = 48;

function keywordRegex(cleaned: string[]): RegExp | null {
  if (cleaned.length === 0) return null;
  const cacheKey = cleaned.join('|');
  let re = regexCache.get(cacheKey);
  if (re) return re;
  const escaped = cleaned.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  re = new RegExp('(' + escaped.join('|') + ')', 'gi');
  if (regexCache.size >= MAX_REGEX_CACHE) {
    const first = regexCache.keys().next().value;
    if (first !== undefined) regexCache.delete(first);
  }
  regexCache.set(cacheKey, re);
  return re;
}

/** Split text into segments, marking keyword matches (case-insensitive). */
export function highlightText(text: string, keywords: string[]): React.ReactNode {
  if (!keywords || keywords.length === 0) return text;

  const cleaned = keywords
    .filter(Boolean)
    .map(k => k.trim())
    .filter(k => k.length >= 2)
    .sort((a, b) => b.length - a.length);

  const pattern = keywordRegex(cleaned);
  if (!pattern) return text;

  pattern.lastIndex = 0;
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    if (!part) return null;
    const isHit = cleaned.some(k => k.toLowerCase() === part.toLowerCase());
    if (!isHit) return part;
    return (
      <mark
        key={i}
        className="bg-amber-200/70 dark:bg-amber-400/25 text-inherit px-[1px] rounded-sm"
        style={{ WebkitBoxShadow: '0 0 0 1px rgba(245, 158, 11, 0.35)' }}
      >
        {part}
      </mark>
    );
  });
}

export const VerseText: React.FC<{
  verse: Verse;
  highlightKeywords?: string[];
}> = ({ verse, highlightKeywords }) => {
  const {
    showVerseNumbers,
    setSelectedProphecy,
    setSelectedMarginVerse,
    selectedMarginVerse,
    bookmarks,
    toggleBookmark,
    linkingState,
    finishLinking,
    links,
    highlightFromThread,
    userHighlights,
    toggleUserHighlight,
    setThreadPaneOpen,
  } = useStore();

  const [showActions, setShowActions] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    };
  }, []);

  const isBookmarked = !!bookmarks[verse.id];
  const verseLinks = links[verse.id] || [];
  const isLinkingSource = linkingState.sourceVerseId === verse.id;
  const userHl = userHighlights[verse.id];

  const citations = getCitationsForVerse(verse.id);
  const messianicProphecies = getMessianicPropheciesForVerse(verse.id);
  const masterChains = getMasterChainsForVerse(verse.id);

  const keywords =
    highlightKeywords ??
    (highlightFromThread ? highlightFromThread[verse.id] : undefined);

  const handleClick = (e: React.MouseEvent) => {
    if (linkingState.mode === 'linking') {
      e.stopPropagation();
      finishLinking(verse.id);
      return;
    }

    if (verse.isProphecy) {
      setSelectedProphecy(verse);
      setThreadPaneOpen(true);
    } else {
      setSelectedMarginVerse(verse);
      setShowActions(a => !a);
    }
  };

  const handleOpenMargin = (e: React.MouseEvent, tab?: string) => {
    e.stopPropagation();
    setSelectedMarginVerse(verse, tab);
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(verse.id);
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const line = `${verse.book} ${verse.chapter}:${verse.verseNumber} (KJV) — ${verse.text}`;
    try {
      await navigator.clipboard.writeText(line);
      setCopied(true);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 1200);
    } catch {
      /* ignore */
    }
  };

  const isSelectedMargin = selectedMarginVerse?.id === verse.id;

  return (
    <span
      id={`verse-${verse.id}`}
      onClick={handleClick}
      className={cn(
        'cursor-pointer transition-colors duration-200 group/verse',
        verse.isProphecy
          ? 'border-b-2 border-dashed border-accent/40 bg-accent/5 py-1 px-1'
          : 'hover:bg-foreground/5 opacity-80 hover:opacity-100',
        isSelectedMargin && 'ring-2 ring-accent/70 bg-accent/15 rounded-sm',
        isLinkingSource && 'ring-2 ring-accent ring-offset-2 ring-offset-background rounded-sm',
        userHl && HL_COLORS[userHl]
      )}
    >
      {verseLinks.length > 0 && (
        <span className="inline-flex items-center align-middle mr-1 text-accent">
          <LinkIcon className="w-[14px] h-[14px]" />
        </span>
      )}
      <span
        onClick={handleBookmarkClick}
        className={cn(
          'inline-flex items-center align-middle mr-1 cursor-pointer transition-all',
          isBookmarked ? 'text-accent' : 'opacity-20 hover:opacity-60 text-foreground'
        )}
      >
        <Bookmark className={cn('w-[14px] h-[14px]', isBookmarked && 'fill-accent')} />
      </span>
      <span
        onClick={handleCopy}
        title="Copy verse"
        className="inline-flex items-center align-middle mr-1 cursor-pointer opacity-20 hover:opacity-70 text-foreground"
      >
        {copied ? (
          <Check className="w-[13px] h-[13px] text-emerald-500" />
        ) : (
          <Copy className="w-[13px] h-[13px]" />
        )}
      </span>

      {/* Margin / TSK Cross Reference Button */}
      <span
        onClick={e => handleOpenMargin(e, 'tsk')}
        title="Open TSK Cross-References & Study Margin"
        className="inline-flex items-center align-middle mr-1 cursor-pointer opacity-20 hover:opacity-100 hover:text-accent text-foreground transition-opacity"
      >
        <BookOpen className="w-[13px] h-[13px]" />
      </span>

      {/* Tier 2: Apostolic Citation Badge */}
      {citations.length > 0 && (
        <span
          onClick={e => handleOpenMargin(e, 'citations')}
          title={`Tier 2: ${citations.length} Apostolic NT Citation/Allusion`}
          className="inline-flex items-center align-middle mr-1 cursor-pointer text-amber-500 hover:text-amber-600 dark:text-amber-400"
        >
          <Quote className="w-[13px] h-[13px]" />
        </span>
      )}

      {/* Tier 3: Messianic Prophecy Badge */}
      {messianicProphecies.length > 0 && (
        <span
          onClick={e => handleOpenMargin(e, 'messianic')}
          title={`Tier 3: Messianic Prophecy - ${messianicProphecies[0].title}`}
          className="inline-flex items-center align-middle mr-1 cursor-pointer text-accent hover:opacity-80"
        >
          <Sparkles className="w-[13px] h-[13px]" />
        </span>
      )}

      {/* Tier 4: Master Canonical Chain Badge */}
      {masterChains.length > 0 && (
        <span
          onClick={e => handleOpenMargin(e, 'chains')}
          title={`Tier 4: Part of ${masterChains.length} Master Redemptive Chains`}
          className="inline-flex items-center align-middle mr-1 cursor-pointer text-indigo-500 hover:text-indigo-600 dark:text-indigo-400"
        >
          <Network className="w-[13px] h-[13px]" />
        </span>
      )}

      {showVerseNumbers && (
        <sup
          className={cn(
            'font-sans font-bold pr-1 text-[10px] select-none',
            verse.isProphecy ? 'text-accent' : 'opacity-50'
          )}
        >
          {verse.verseNumber}
        </sup>
      )}
      <span className={cn(!verse.isProphecy && 'opacity-90')}>
        {keywords && keywords.length > 0 ? highlightText(verse.text, keywords) : verse.text}
      </span>{' '}
      {showActions && (
        <span
          className="inline-flex items-center gap-1 align-middle ml-1"
          onClick={e => e.stopPropagation()}
        >
          <Palette className="w-3 h-3 text-foreground/40" />
          {(Object.keys(HL_COLORS) as Array<keyof typeof HL_COLORS>).map(c => (
            <button
              key={c}
              onClick={() => toggleUserHighlight(verse.id, c)}
              aria-label={`Highlight ${c}`}
              className={cn(
                'h-3.5 w-3.5 rounded-full border border-foreground/20 cursor-pointer',
                HL_COLORS[c],
                userHl === c && 'ring-2 ring-accent ring-offset-1'
              )}
            />
          ))}
        </span>
      )}
    </span>
  );
};
