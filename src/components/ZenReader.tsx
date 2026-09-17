import React from 'react';
import { VerseText } from './VerseText';
import { Verse } from '../data/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useStore, getAvailableChapters, getMaxChapter } from '../store/useStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { VerseGroup } from './verseGroups';

/** Comfortable book measure when centered — shorter lines, column sits in the middle of the pane. */
const CENTER_MEASURE = 'max-w-[38rem] md:max-w-[42rem]';

/**
 * Grouped mode: verses that span several books/chapters render as separate
 * headed sections with their own vertical gap, so a fulfillment pane can never
 * present mixed books as one continuous chapter under a single title.
 */
function GroupedVerses({ groups }: { groups: VerseGroup<Verse>[] }) {
  return (
    <div className="space-y-8">
      {groups.map((group, i) => (
        <section key={group.key} className="space-y-3">
          <h2 className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-accent">
            <span className="h-[1px] w-5 bg-accent/50" aria-hidden="true" />
            {group.heading}
            <span className="text-foreground/35 font-medium tracking-normal normal-case">
              {group.verses.length === 1 ? '1 verse' : `${group.verses.length} verses`}
            </span>
          </h2>
          <p className="text-left" data-verse-group={i}>
            {group.verses.map((verse, idx) => (
              <VerseText key={verse?.id ?? idx} verse={verse} />
            ))}
          </p>
        </section>
      ))}
    </div>
  );
}

export function ZenReader({
  verses,
  title,
  label,
  indicator,
  showChapterNav = false,
  groups,
}: {
  verses: Verse[];
  title?: string;
  label?: string;
  indicator?: React.ReactNode;
  showChapterNav?: boolean;
  /** When present, verses render as one headed section per book + chapter. */
  groups?: VerseGroup<Verse>[];
}) {
  const {
    currentReadingBook,
    currentReadingChapter,
    nextChapter,
    prevChapter,
    fontSize,
    textAlign,
  } = useStore();

  const chapters = getAvailableChapters(currentReadingBook);
  const idx = chapters.indexOf(currentReadingChapter);
  const canPrev = idx > 0;
  const canNext = idx >= 0 && idx < chapters.length - 1;
  const maxChapter = getMaxChapter(currentReadingBook);
  const centered = textAlign === 'center';

  return (
    <ScrollArea className="flex-1 h-full w-full relative">
      <div
        className={cn(
          'min-h-full p-6 md:p-10 flex flex-col w-full',
          centered ? 'items-center' : 'items-stretch'
        )}
      >
        <div
          className={cn(
            'flex flex-col min-h-full w-full',
            centered ? `${CENTER_MEASURE} text-left` : 'text-left'
          )}
        >
          {title ? (
            <div className="mb-8">
              <span
                className={cn(
                  'text-[10px] uppercase tracking-[0.2em] font-bold',
                  label === 'Fulfillment Reference' ? 'opacity-40' : 'text-accent'
                )}
              >
                {label || 'Source'}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif mt-2">{title}</h1>
            </div>
          ) : groups && groups.length > 0 ? (
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
                {label || 'Fulfillment references'}
              </span>
              <p className="mt-2 text-sm text-foreground/60">
                {groups.length} {groups.length === 1 ? 'chapter' : 'chapters'} across{' '}
                {new Set(groups.map(g => g.book)).size}{' '}
                {new Set(groups.map(g => g.book)).size === 1 ? 'book' : 'books'}
              </p>
            </div>
          ) : null}
          <div
            className="flex-1 font-serif leading-relaxed tracking-tight text-foreground/90 space-y-5"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.75 }}
          >
            {verses.length === 0 ? (
              <div className="py-12 px-6 rounded-2xl border border-dashed border-foreground/15 text-center space-y-2 my-6">
                <p className="text-base font-serif font-medium text-foreground/80">
                  No verses available for this selection
                </p>
                <p className="text-xs text-foreground/50 max-w-sm mx-auto">
                  The requested passage range could not be resolved or contains no indexed text.
                </p>
              </div>
            ) : groups && groups.length > 0 ? (
              <GroupedVerses groups={groups} />
            ) : (
              <p className="text-left">
                {verses.map((verse, idx) => (
                  <VerseText key={verse?.id ?? idx} verse={verse} />
                ))}
              </p>
            )}
          </div>

          {indicator && <div className="mt-auto pt-16">{indicator}</div>}

          {showChapterNav && (
            <div className="mt-auto pt-12 border-t border-foreground/10 flex items-center justify-between gap-4 text-left">
              <button
                onClick={prevChapter}
                disabled={!canPrev}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-foreground/10 hover:border-accent/40 hover:bg-accent/5 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer min-w-0"
              >
                <ChevronLeft className="h-4 w-4 text-accent shrink-0" />
                <div className="text-left min-w-0">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">
                    Previous
                  </div>
                  <div className="text-sm font-medium truncate">
                    {canPrev ? `${currentReadingBook} ${chapters[idx - 1]}` : '—'}
                  </div>
                </div>
              </button>

              <div className="hidden sm:flex flex-col items-center px-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">
                  Chapter
                </span>
                <span className="text-lg font-semibold text-accent tabular-nums">
                  {currentReadingChapter}
                </span>
                {maxChapter > 0 && (
                  <span className="text-[10px] text-foreground/40 tabular-nums">of {maxChapter}</span>
                )}
              </div>

              <button
                onClick={nextChapter}
                disabled={!canNext}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-foreground/10 hover:border-accent/40 hover:bg-accent/5 transition-colors disabled:opacity-30 disabled:pointer-events-none cursor-pointer min-w-0"
              >
                <div className="text-right min-w-0">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-foreground/40">
                    Next
                  </div>
                  <div className="text-sm font-medium truncate">
                    {canNext ? `${currentReadingBook} ${chapters[idx + 1]}` : '—'}
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-accent shrink-0" />
              </button>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
