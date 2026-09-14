import { describe, expect, it } from 'vitest';
import { expandVerseRange, parseRef, normalizeBookName } from './refParser';

describe('parseRef', () => {
  it('parses standard chapter:verse references', () => {
    expect(parseRef('John 3:16')).toMatchObject({ book: 'John', chapter: 3, startVerse: 16, endVerse: 16 });
    expect(parseRef('Exodus 20:8-11')).toMatchObject({ book: 'Exodus', chapter: 20, startVerse: 8, endVerse: 11 });
  });

  it('parses cross-chapter ranges', () => {
    expect(parseRef('Isaiah 52:13-53:12')).toMatchObject({
      book: 'Isaiah', chapter: 52, startVerse: 13, endChapter: 53, endVerse: 12,
    });
  });

  it('parses whole chapters and chapter ranges', () => {
    expect(parseRef('Psalm 104')).toMatchObject({ book: 'Psalms', chapter: 104, startVerse: 1, endVerse: 1 });
    expect(parseRef('Matthew 5-7')).toMatchObject({ book: 'Matthew', chapter: 5, startVerse: 1, endChapter: 7 });
  });

  it('treats single-chapter books without colon as verse numbers', () => {
    expect(parseRef('Jude 7')).toMatchObject({ book: 'Jude', chapter: 1, startVerse: 7, endVerse: 7 });
    expect(parseRef('3 John 2')).toMatchObject({ book: '3 John', chapter: 1, startVerse: 2 });
  });

  it('normalizes ordinal and abbreviation prefixes', () => {
    expect(parseRef('1 Cor 13:4')?.book).toBe('1 Corinthians');
    expect(parseRef('Ps. 23:1')?.book).toBe('Psalms');
    expect(normalizeBookName('I Kgs')).toBe('1 Kings');
  });

  it('returns null for garbage and descriptive refs', () => {
    expect(parseRef('')).toBeNull();
    expect(parseRef('Genesis to Malachi (Law, Prophets, Psalms)')).toBeNull();
  });
});

describe('expandVerseRange', () => {
  it('expands verse ranges', () => {
    expect(expandVerseRange('Exodus 20:8-11')).toEqual(['exo-20-8', 'exo-20-9', 'exo-20-10', 'exo-20-11']);
  });

  it('expands cross-chapter ranges', () => {
    const ids = expandVerseRange('Isaiah 52:13-53:12');
    expect(ids[0]).toBe('isa-52-13');
    expect(ids.at(-1)).toBe('isa-53-12');
    expect(ids).toContain('isa-53-1');
  });

  it('inherits book and chapter across semicolons and commas', () => {
    expect(expandVerseRange('Genesis 12:3; 22:18')).toEqual(['gen-12-3', 'gen-22-18']);
    expect(expandVerseRange('Galatians 3:8, 16')).toEqual(['gal-3-8', 'gal-3-16']);
  });

  it('expands whole chapters fully', () => {
    const ids = expandVerseRange('Psalm 104');
    expect(ids.length).toBeGreaterThan(30);
    expect(ids[0]).toBe('psa-104-1');
  });

  it('clips to the canonical verse count', () => {
    // Malachi 4 has 6 verses; asking for 99 must not invent ids.
    expect(expandVerseRange('Malachi 4:99')).toEqual([]);
  });
});
