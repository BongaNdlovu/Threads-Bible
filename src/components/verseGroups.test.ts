import { describe, expect, it } from 'vitest';
import { countGroupedVerses, groupVersesByBookChapter, headingFor } from './verseGroups';

const v = (id: string, book: string, chapter: number, verseNumber: number) => ({
  id,
  book,
  chapter,
  verseNumber,
  text: `${id} text`,
});

describe('groupVersesByBookChapter', () => {
  it('groups the rev-7-9 fulfillment set into four book+chapter sections', () => {
    // Exactly the ids resolved for the rev-7-9 thread (defect E repro).
    const verses = [
      v('gen-12-3', 'Genesis', 12, 3),
      v('gen-22-18', 'Genesis', 22, 18),
      v('isa-49-6', 'Isaiah', 49, 6),
      v('isa-56-6', 'Isaiah', 56, 6),
      v('isa-56-7', 'Isaiah', 56, 7),
      v('isa-56-8', 'Isaiah', 56, 8),
      v('gal-3-8', 'Galatians', 3, 8),
    ];

    const groups = groupVersesByBookChapter(verses);

    expect(groups.map(g => g.heading)).toEqual([
      'Genesis 12',
      'Genesis 22',
      'Isaiah 49',
      'Isaiah 56',
      'Galatians 3',
    ]);
    expect(countGroupedVerses(groups)).toBe(7);
    // No verse invented, none dropped.
    expect(groups.flatMap(g => g.verses.map(x => x.id))).toEqual(verses.map(x => x.id));
  });

  it('collapses adjacent verses of one chapter into a single group', () => {
    const groups = groupVersesByBookChapter([
      v('isa-56-6', 'Isaiah', 56, 6),
      v('isa-56-7', 'Isaiah', 56, 7),
      v('isa-56-8', 'Isaiah', 56, 8),
    ]);
    expect(groups).toHaveLength(1);
    expect(groups[0].key).toBe('isaiah-56');
    expect(groups[0].verses).toHaveLength(3);
  });

  it('keeps first-seen group order and in-group input order', () => {
    const groups = groupVersesByBookChapter([
      v('joh-1-2', 'John', 1, 2),
      v('gen-1-1', 'Genesis', 1, 1),
      v('joh-1-1', 'John', 1, 1),
    ]);
    expect(groups.map(g => g.heading)).toEqual(['John 1', 'Genesis 1']);
    expect(groups[0].verses.map(x => x.verseNumber)).toEqual([2, 1]);
  });

  it('returns nothing for an empty list', () => {
    expect(groupVersesByBookChapter([])).toEqual([]);
    expect(countGroupedVerses([])).toBe(0);
  });

  it('falls back safely when a verse carries no book/chapter metadata', () => {
    const groups = groupVersesByBookChapter([
      { id: 'x-0-0', book: '', chapter: Number.NaN, verseNumber: 0 },
    ]);
    expect(groups).toHaveLength(1);
    expect(groups[0].heading).toBe('Unassigned verses');
    expect(groups[0].verses).toHaveLength(1);
  });

  it('labels single-chapter and bare-book groups readably', () => {
    expect(headingFor('Genesis', 12)).toBe('Genesis 12');
    expect(headingFor('Jude', 0)).toBe('Jude');
    expect(headingFor('', 1)).toBe('Unassigned verses');
  });
});
