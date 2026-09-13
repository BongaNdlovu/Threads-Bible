import { useEffect } from 'react';
import { useStore } from '../store/useStore';

/**
 * Global keyboard shortcuts:
 *   J/K next/prev chapter · B book+chapter jump (opens the chapter grid)
 *   T threads panel · P split view · E explanation · R reading only
 *   C chapter grid · 1/2/3 fullscreen panes · +/- font size · / search · Esc close
 */
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
        // Close the topmost layer: pending link session, then the margin,
        // then fullscreen, then any open overlay.
        if (s.linkingState.mode === 'linking') {
          s.cancelLinking();
          e.preventDefault();
          return;
        }
        if (s.selectedMarginVerse) {
          s.setSelectedMarginVerse(null);
          e.preventDefault();
          return;
        }
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
          if (!s.selectedThread) s.nextChapter();
          e.preventDefault();
          break;
        case 'k':
        case 'K':
          if (!s.selectedThread) s.prevChapter();
          e.preventDefault();
          break;
        case 'b':
        case 'B':
          // Book jump: the chapter grid doubles as the keyboard path (the book
          // dropdown in the header is click-only).
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
          // Split view only makes sense with a thread open; don't mutate
          // invisible state that would surprise the user later.
          if (s.selectedThread) s.toggleThreadPane();
          e.preventDefault();
          break;
        case 'e':
        case 'E':
          if (s.selectedThread) s.toggleExplanation();
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
        case '/': {
          document.getElementById('global-search-input')?.focus();
          e.preventDefault();
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
}
