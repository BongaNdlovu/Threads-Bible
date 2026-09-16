import { describe, expect, it, beforeEach } from 'vitest';
import { useStore } from './useStore';

describe('useStore turnToVerse navigation', () => {
  beforeEach(() => {
    // Reset store state prior to each test
    useStore.setState({
      threadMapOpen: true,
      threadPaneOpen: false,
      focusPane: null,
      selectedThread: {
        id: 'gen-2-2',
        book: 'Genesis',
        chapter: 2,
        verseNumber: 2,
        text: 'And on the seventh day God ended his work...',
        isThread: true,
      },
      selectedMarginVerse: null,
      currentReadingBook: 'Genesis',
      currentReadingChapter: 1,
    });
  });

  it('navigates directly to the actual verse in reader mode (clearing selectedThread & threadPaneOpen)', async () => {
    // Simulate user clicking "READ PASSAGE" on Exodus 20:8-11
    await useStore.getState().turnToVerse('Exodus 20:8-11');

    const state = useStore.getState();
    // 1. Map is closed
    expect(state.threadMapOpen).toBe(false);
    // 2. Thread pane is closed, and selectedThread is null so App renders readingPane
    expect(state.threadPaneOpen).toBe(false);
    expect(state.selectedThread).toBeNull();
    expect(state.focusPane).toBeNull();

    // 3. Reader location is turned to the exact book and chapter
    expect(state.currentReadingBook).toBe('Exodus');
    expect(state.currentReadingChapter).toBe(20);

    // 4. Target verse is active / selected
    expect(state.selectedMarginVerse).not.toBeNull();
    expect(state.selectedMarginVerse?.id).toBe('exo-20-8');
    expect(state.selectedMarginVerse?.book).toBe('Exodus');
    expect(state.selectedMarginVerse?.chapter).toBe(20);
    expect(state.selectedMarginVerse?.verseNumber).toBe(8);
  });

  it('turns to multi-segment and comma references (e.g. Hebrews 4:4, 9-11)', async () => {
    await useStore.getState().turnToVerse('Hebrews 4:4, 9-11');

    const state = useStore.getState();
    expect(state.threadMapOpen).toBe(false);
    expect(state.threadPaneOpen).toBe(false);
    expect(state.selectedThread).toBeNull();

    expect(state.currentReadingBook).toBe('Hebrews');
    expect(state.currentReadingChapter).toBe(4);
    expect(state.selectedMarginVerse?.id).toBe('heb-4-4');
    expect(state.selectedMarginVerse?.verseNumber).toBe(4);
  });

  it('turns to verse given a direct verse ID (e.g. gen-2-2)', async () => {
    await useStore.getState().turnToVerse('gen-2-2');

    const state = useStore.getState();
    expect(state.threadMapOpen).toBe(false);
    expect(state.selectedThread).toBeNull();
    expect(state.currentReadingBook).toBe('Genesis');
    expect(state.currentReadingChapter).toBe(2);
    expect(state.selectedMarginVerse?.id).toBe('gen-2-2');
  });

  it('supports split view mode (maintains or sets selectedThread and opens threadPane)', async () => {
    // In split view, user wants both readingPane and threadPane
    await useStore.getState().turnToVerse('Exodus 31:16-17', { inSplit: true });

    const state = useStore.getState();
    expect(state.threadMapOpen).toBe(false);
    expect(state.threadPaneOpen).toBe(true);
    expect(state.selectedThread).not.toBeNull();
    expect(state.focusPane).toBeNull();

    expect(state.currentReadingBook).toBe('Exodus');
    expect(state.currentReadingChapter).toBe(31);
    expect(state.selectedMarginVerse?.id).toBe('exo-31-16');
  });

  it('initializes selectedThread when opening split view if none was set', async () => {
    useStore.setState({ selectedThread: null });

    await useStore.getState().turnToVerse('Hebrews 4:4', { inSplit: true });

    const state = useStore.getState();
    expect(state.threadMapOpen).toBe(false);
    expect(state.threadPaneOpen).toBe(true);
    expect(state.selectedThread).not.toBeNull();
    expect(state.selectedThread?.id).toBe('heb-4-4');
  });
});
