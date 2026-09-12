import { useEffect } from 'react';
import { useStore } from '../store/useStore';

/** Global keyboard shortcuts: J/K chapters, B books, T threads, C grid, / search, +/- font, Esc fullscreen. */
export function useKeyboardShortcuts() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      const s = useStore.getState();
      const mod = e.metaKey || e.ctrlKey;

      if (e.key === 'Escape') {
        if (s.focusPane) {
          s.setFocusPane(null);
          e.preventDefault();
          return;
        }
        if (s.chapterGridOpen) s.setChapterGridOpen(false);
        if (s.threadsPanelOpen) s.setThreadsPanelOpen(false);
        if (s.mobileControlsOpen) s.setMobileControlsOpen(false);
        return;
      }

      if (mod) return;

      switch (e.key) {
        case 'j':
        case 'J':
          if (!s.selectedProphecy) s.nextChapter();
          e.preventDefault();
          break;
        case 'k':
        case 'K':
          if (!s.selectedProphecy) s.prevChapter();
          e.preventDefault();
          break;
        case 'b':
        case 'B':
          // Focus is in header book menu via click; open chapter grid as keyboard stand-in for book jump
          s.setChapterGridOpen(true);
          e.preventDefault();
          break;
        case 'c':
        case 'C':
          s.setChapterGridOpen(!s.chapterGridOpen);
          e.preventDefault();
          break;
        case 't':
        case 'T':
          s.setThreadsPanelOpen(!s.threadsPanelOpen);
          e.preventDefault();
          break;
        case 'p':
        case 'P':
          s.toggleThreadPane();
          e.preventDefault();
          break;
        case 'e':
        case 'E':
          s.toggleExplanation();
          e.preventDefault();
          break;
        case 'r':
        case 'R':
          s.closeAllStudyPanes();
          e.preventDefault();
          break;
        case '1':
          s.toggleFullscreen('reading');
          e.preventDefault();
          break;
        case '2':
          s.toggleFullscreen('thread');
          e.preventDefault();
          break;
        case '3':
          s.toggleFullscreen('explanation');
          e.preventDefault();
          break;
        case '+':
        case '=':
          s.increaseFontSize();
          e.preventDefault();
          break;
        case '-':
        case '_':
          s.decreaseFontSize();
          e.preventDefault();
          break;
        case '/':
          document.querySelector<HTMLInputElement>('input[placeholder*="Book"]')?.focus();
          e.preventDefault();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}
