import React from 'react';
import { VerseText } from './VerseText';
import { Verse } from '../data/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useStore, getAvailableChapters, getMaxChapter } from '../store/useStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Comfortable book measure when centered — shorter lines, column sits in the middle of the pane. */
const CENTER_MEASURE = 'max-w-[38rem] md:max-w-[42rem]';

export function ZenReader({
  verses,
  title,
  label,
  indicator,
  showChapterNav = false,
}: {
  verses: Verse[];
  title?: string;
  label?: string;
  indicator?: React.ReactNode;
  showChapterNav?: boolean;
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
          {title && (
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
          )}
          <div
            className="flex-1 font-serif leading-relaxed tracking-tight text-foreground/90 space-y-5"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.75 }}
          >
            <p className="text-left">
              {verses.map(verse => (
                <VerseText key={verse.id} verse={verse} />
              ))}
            </p>
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
