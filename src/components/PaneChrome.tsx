import { useStore } from '../store/useStore';
import { Maximize2, Minimize2, X, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

export type PaneId = 'reading' | 'thread' | 'explanation';

/** Shared styling for ResizableHandle grips (used by App and TheThread). */
export const RESIZE_HANDLE_CLASS =
  'w-3 shrink-0 bg-transparent hover:bg-accent/10 data-[resize-handle-active]:bg-accent/20 ' +
  'after:w-px after:bg-foreground/20 hover:after:bg-accent ' +
  'aria-[orientation=horizontal]:h-3 aria-[orientation=horizontal]:w-full ' +
  'aria-[orientation=horizontal]:after:h-px aria-[orientation=horizontal]:after:w-full ' +
  'aria-[orientation=horizontal]:after:left-0 aria-[orientation=horizontal]:after:top-1/2';

export function PaneChrome({
  paneId,
  title,
  onClose,
  className,
}: {
  paneId: PaneId;
  title: string;
  onClose?: () => void;
  className?: string;
}) {
  const { focusPane, toggleFullscreen, closeAllStudyPanes, hasStudyPanes } = useStore();
  const isFull = focusPane === paneId;

  return (
    <div
      className={cn(
        'absolute top-3 right-3 z-30 flex items-center gap-1.5',
        className
      )}
    >
      <span className="text-[10px] uppercase tracking-wider font-bold text-foreground/35 mr-1 hidden sm:inline">
        {title}
      </span>
      {hasStudyPanes() && (
        <button
          onClick={closeAllStudyPanes}
          aria-label="Reading only — close all study panes"
          title="Reading only — close all study panes"
          className="h-7 px-2 sm:px-2.5 rounded-full bg-accent/10 border border-accent/25 flex items-center gap-1 text-[11px] font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer shadow-sm"
        >
          <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="hidden sm:inline">Reading only</span>
        </button>
      )}
      <button
        onClick={() => toggleFullscreen(paneId)}
        aria-label={isFull ? 'Exit fullscreen' : `Fullscreen ${title}`}
        title={isFull ? 'Exit fullscreen (Esc)' : `Fullscreen ${title}`}
        className="h-7 w-7 rounded-full bg-background/80 backdrop-blur border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 cursor-pointer text-foreground/70"
      >
        {isFull ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
      </button>
      {onClose && (
        <button
          onClick={onClose}
          aria-label={`Close ${title}`}
          title={`Close this page (${title})`}
          className="h-7 w-7 rounded-full bg-background/80 backdrop-blur border border-foreground/10 flex items-center justify-center hover:bg-foreground/10 hover:text-destructive cursor-pointer text-foreground/70 transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
