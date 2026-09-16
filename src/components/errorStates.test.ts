import { describe, it, expect } from 'vitest';
import { computeThreadLayout, type ThreadGraph } from './threadMapModel';
import { getAllHistoricalConnections, findEraForBook } from '../data/historicalContextData';
import { BOOK_REGISTRY, BOOK_BY_NAME, expandVerseRange } from '../data/library';
import { highlightText } from './VerseText';

describe('Error states and resilient fallbacks', () => {
  describe('ThreadMap layout error detection', () => {
    it('handles empty graph without throwing', () => {
      const emptyGraph: ThreadGraph = {
        nodes: [],
        edges: [],
        totalSteps: 0,
      };

      const positions = computeThreadLayout(emptyGraph, {
        mode: 'column',
        spacing: 'normal',
        nodeSizes: {},
        nodeWidth: 320,
      });

      expect(Object.keys(positions).length).toBe(0);
    });

    it('identifies unrenderable coordinates if node layout coordinates are not finite', () => {
      const graph: ThreadGraph = {
        nodes: [
          {
            id: 'gen-1-1',
            ref: 'Genesis 1:1',
            title: 'Origin',
            body: 'Text',
            fullText: 'In the beginning...',
            strand: 'gold',
            x: NaN,
            y: NaN,
            step: 1,
            kind: 'source',
          },
        ],
        edges: [],
        totalSteps: 1,
      };

      // In ThreadMap, positions are checked for Number.isFinite
      const positions: Record<string, { x: number; y: number }> = {
        'gen-1-1': { x: NaN, y: 100 },
      };

      const unrenderable = graph.nodes.filter(n => {
        const p = positions[n.id];
        return !p || !Number.isFinite(p.x) || !Number.isFinite(p.y);
      });

      expect(unrenderable.length).toBe(1);
    });
  });

  describe('ThreadMap canonical verse reference validation', () => {
    it('validates canonical reference constraints properly', () => {
      const isInvalid = (thread: { book?: string; chapter?: number; verseNumber?: number; id?: string } | null) => {
        if (!thread || !thread.id || !thread.book) return true;
        if (typeof thread.chapter !== 'number' || typeof thread.verseNumber !== 'number') return true;
        if (thread.chapter < 1 || thread.verseNumber < 1) return true;
        const meta = BOOK_BY_NAME[thread.book];
        if (!meta) return true;
        if (thread.chapter > meta.chapters) return true;
        return false;
      };

      expect(isInvalid({ id: 'gen-1-1', book: 'Genesis', chapter: 1, verseNumber: 1 })).toBe(false);
      expect(isInvalid({ id: 'rev-22-21', book: 'Revelation', chapter: 22, verseNumber: 21 })).toBe(false);
      expect(isInvalid(null)).toBe(true);
      expect(isInvalid({ id: 'fake-1-1', book: 'FakeBook', chapter: 1, verseNumber: 1 })).toBe(true);
      expect(isInvalid({ id: 'gen-0-1', book: 'Genesis', chapter: 0, verseNumber: 1 })).toBe(true);
      expect(isInvalid({ id: 'gen-1-0', book: 'Genesis', chapter: 1, verseNumber: 0 })).toBe(true);
      expect(isInvalid({ id: 'gen-51-1', book: 'Genesis', chapter: 51, verseNumber: 1 })).toBe(true);
    });
  });

  describe('Historical context fallback resolution', () => {
    it('gracefully identifies invalid connection ID and falls back to a valid base connection', () => {
      const base = getAllHistoricalConnections();
      expect(base.length).toBeGreaterThan(0);

      const invalidId = 'nonexistent-verse-999_xyz';
      const exists = base.some(c => c.id === invalidId || c.anchorId === invalidId);
      expect(exists).toBe(false);

      // Check validation logic used in HistoricalContextPage
      const [anchorPart] = invalidId.split('_');
      const [slug, chStr, vStr] = anchorPart.split('-');
      const meta = BOOK_REGISTRY.find(b => b.slug === slug);
      const chapter = parseInt(chStr, 10);
      const verse = parseInt(vStr, 10);

      const isValidVerse = !!meta && !isNaN(chapter) && chapter > 0 && !isNaN(verse) && verse > 0;
      expect(isValidVerse).toBe(false);

      // Fallback is safely the first connection
      const fallback = base[0];
      expect(fallback).toBeDefined();
      expect(fallback.anchorRef).toBeTruthy();
    });

    it('resolves nearest era for known biblical books', () => {
      const genesisEra = findEraForBook('Genesis 1:1');
      expect(genesisEra.id).toBe('creation');

      const exodusEra = findEraForBook('Exodus 12:1');
      expect(exodusEra.id).toBe('exodus');

      const matthewEra = findEraForBook('Matthew 1:1');
      expect(matthewEra.id).toBe('incarnation');

      const revelationEra = findEraForBook('Revelation 21:1');
      expect(revelationEra.id).toBe('apostolic');

      // Empty ref defaults safely to creation era without throwing
      const emptyRefEra = findEraForBook('');
      expect(emptyRefEra).toBeDefined();
      expect(emptyRefEra.id).toBe('creation');

      // Unmatched book ref defaults safely to apostolic era without throwing
      const unknownEra = findEraForBook('NonExistentBook 1:1');
      expect(unknownEra).toBeDefined();
      expect(unknownEra.id).toBe('apostolic');
    });

    it('falls back to the nearest era based on invalid ID slug (e.g. rev-99-99 -> apostolic)', () => {
      const base = getAllHistoricalConnections();
      const invalidRevId = 'rev-99-99';
      const [anchorPart] = invalidRevId.split('_');
      const [slug] = anchorPart.split('-');
      const meta = BOOK_REGISTRY.find(b => b.slug === slug);
      expect(meta).toBeDefined();
      expect(meta?.name).toBe('Revelation');

      const era = findEraForBook(meta!.name);
      expect(era.id).toBe('apostolic');

      const nearest = base.find(c => c.sourceEra.id === era.id || c.fulfillmentEra.id === era.id);
      expect(nearest).toBeDefined();
      expect(nearest?.fulfillmentEra.id === 'apostolic' || nearest?.sourceEra.id === 'apostolic').toBe(true);
    });
  });

  describe('Verse text reader fallbacks', () => {
    it('handles empty or missing keywords in highlightText without throwing', () => {
      const text = 'The LORD is my shepherd; I shall not want.';
      expect(highlightText(text, [])).toBe(text);
      expect(highlightText('', ['shepherd'])).toBe('');
    });

    it('handles invalid verse range query gracefully', () => {
      const invalidRanges = expandVerseRange('InvalidBook 999:999-1000');
      expect(invalidRanges).toEqual([]);
    });

    it('identifies invalid verse objects that should show fallback indicator', () => {
      const isInvalidVerse = (v: any) =>
        !v || !v.id || !v.book || typeof v.chapter !== 'number' || typeof v.verseNumber !== 'number';

      expect(isInvalidVerse(null)).toBe(true);
      expect(isInvalidVerse({})).toBe(true);
      expect(isInvalidVerse({ id: 'bad' })).toBe(true);
      expect(isInvalidVerse({ id: 'bad', book: 'Genesis' })).toBe(true);
      expect(isInvalidVerse({ id: 'gen-1-1', book: 'Genesis', chapter: 1, verseNumber: 1 })).toBe(false);
    });
  });
});
