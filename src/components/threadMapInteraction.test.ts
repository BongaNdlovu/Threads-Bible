import { describe, expect, it } from 'vitest';
import { DRAG_THRESHOLD_PX, isInteractiveTarget } from './pointerGuards';
import { normalizeReaderRef } from './threadMapModel';

/**
 * Guards the defect-A fix: a press on a card control must not be turned into a
 * pan, and a pan must not start until the pointer has clearly travelled.
 */
describe('isInteractiveTarget', () => {
  /** Minimal Element stand-in: `closest` answers for the selector it can match. */
  const el = (...matches: string[]): EventTarget =>
    ({
      closest(selector: string) {
        return matches.some(m => selector.includes(m)) ? ({} as Element) : null;
      },
    }) as unknown as EventTarget;

  it('protects card action buttons and links', () => {
    expect(isInteractiveTarget(el('button'))).toBe(true);
    expect(isInteractiveTarget(el('a'))).toBe(true);
    expect(isInteractiveTarget(el('[role="button"]'))).toBe(true);
  });

  it('protects explicit opt-in surfaces such as SVG edge hit paths', () => {
    expect(isInteractiveTarget(el('[data-ordo-interactive]'))).toBe(true);
  });

  it('leaves the map background, cards and SVG edges draggable', () => {
    expect(isInteractiveTarget(el('div'))).toBe(false);
    expect(isInteractiveTarget(el('svg', 'path'))).toBe(false);
  });

  it('is safe for null and non-element targets', () => {
    expect(isInteractiveTarget(null)).toBe(false);
    expect(isInteractiveTarget({} as EventTarget)).toBe(false);
    expect(isInteractiveTarget('text' as unknown as EventTarget)).toBe(false);
  });

  it('keeps the drag threshold small enough to feel immediate but bigger than hand jitter', () => {
    expect(DRAG_THRESHOLD_PX).toBeGreaterThanOrEqual(4);
    expect(DRAG_THRESHOLD_PX).toBeLessThanOrEqual(6);
  });
});

describe('normalizeReaderRef', () => {
  it('passes verse ids straight through', () => {
    expect(normalizeReaderRef('gen-1-1')).toBe('gen-1-1');
    expect(normalizeReaderRef('1co-13-4')).toBe('1co-13-4');
  });

  it('converts the fallback card display reference into a verse id', () => {
    expect(normalizeReaderRef('Genesis 1:1')).toBe('gen-1-1');
    expect(normalizeReaderRef('John 1:1-3')).toBe('joh-1-1');
    expect(normalizeReaderRef('Hebrews 11:3')).toBe('heb-11-3');
  });

  it('trims input and returns undefined for nothing to navigate to', () => {
    expect(normalizeReaderRef('  Genesis 1:1  ')).toBe('gen-1-1');
    expect(normalizeReaderRef('')).toBeUndefined();
    expect(normalizeReaderRef(undefined)).toBeUndefined();
  });
});
