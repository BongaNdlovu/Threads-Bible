import { totalThreadCount } from '../data/library';
import { ProgressRing } from './ProgressRing';

export function Footer() {
  return (
    <footer className="h-10 px-4 md:px-8 border-t border-foreground/5 flex items-center justify-between bg-background z-40 hidden md:flex">
      <div className="flex items-center gap-4">
        <span className="text-[9px] uppercase tracking-widest font-bold opacity-30">Translation: KJV</span>
        <span className="text-[9px] uppercase tracking-widest font-bold opacity-30">Full Bible · 66 Books</span>
        <span className="text-[9px] uppercase tracking-widest font-bold opacity-30 hidden lg:inline">
          J/K chapters · T threads · P split · R reading-only · C grid · 1/2/3 fullscreen · Esc exit
        </span>
      </div>
      <div className="flex items-center gap-4">
        <ProgressRing />
        <span className="text-[9px] uppercase tracking-widest font-bold text-accent">
          Prophecies Identified: {totalThreadCount}
        </span>
      </div>
    </footer>
  );
}
