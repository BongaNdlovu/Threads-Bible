import { useStore, getMaxChapter } from '../store/useStore';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ChapterGrid() {
  const {
    chapterGridOpen,
    setChapterGridOpen,
    currentReadingBook,
    currentReadingChapter,
    setReadingLocation,
  } = useStore();

  if (!chapterGridOpen) return null;

  const max = getMaxChapter(currentReadingBook);
  const chapters = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="fixed inset-0 z-[80] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-lg max-h-[80vh] rounded-2xl border border-foreground/10 bg-card shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10">
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-accent">Jump to chapter</div>
            <h2 className="text-lg font-serif mt-0.5">{currentReadingBook}</h2>
          </div>
          <button
            onClick={() => setChapterGridOpen(false)}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-foreground/10 cursor-pointer"
            aria-label="Close chapter grid"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
            {chapters.map(ch => (
              <button
                key={ch}
                onClick={() => {
                  setReadingLocation(currentReadingBook, ch);
                  setChapterGridOpen(false);
                }}
                className={cn(
                  'aspect-square rounded-lg text-sm font-medium tabular-nums cursor-pointer transition-colors',
                  ch === currentReadingChapter
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-foreground/5 hover:bg-foreground/10'
                )}
              >
                {ch}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
