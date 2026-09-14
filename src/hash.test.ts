import { describe, expect, it } from 'vitest';
import { parseHash, serializeHash } from './hash';

describe('parseHash', () => {
  it('parses book-chapter hashes', () => {
    expect(parseHash('#gen-3')).toEqual({
      slug: 'gen',
      chapter: 3,
      verse: undefined,
      threadPane: false,
      explanation: false,
    });
  });

  it('parses verse hashes including multi-letter book prefixes', () => {
    expect(parseHash('#zec-9-9')).toMatchObject({ slug: 'zec', chapter: 9, verse: 9 });
    expect(parseHash('#1sa-2-10')).toMatchObject({ slug: '1sa', chapter: 2, verse: 10 });
  });

  it('parses pane flags', () => {
    expect(parseHash('#zec-9-9;tx')).toMatchObject({ threadPane: true, explanation: true });
    expect(parseHash('#gen-1;t')).toMatchObject({ threadPane: true, explanation: false });
  });

  it('returns null for empty, malformed, or foreign hashes', () => {
    expect(parseHash('')).toBeNull();
    expect(parseHash('#')).toBeNull();
    expect(parseHash('#gen')).toBeNull();
    expect(parseHash('#gen-x')).toBeNull();
    expect(parseHash('#gen-0')).toBeNull();
    expect(parseHash('#gen-3-0')).toBeNull();
    expect(parseHash('#not a hash!')).toBeNull();
  });
});

describe('serializeHash', () => {
  it('round-trips with parseHash', () => {
    const cases = [
      { slug: 'gen', chapter: 3 },
      { slug: 'zec', chapter: 9, verse: 9 },
      { slug: 'zec', chapter: 9, verse: 9, threadPane: true, explanation: true },
      { slug: 'joh', chapter: 3, verse: 16, threadPane: true },
    ];
    for (const c of cases) {
      expect(parseHash(`#${serializeHash(c)}`)).toEqual({
        slug: c.slug,
        chapter: c.chapter,
        verse: c.verse ?? undefined,
        threadPane: !!c.threadPane,
        explanation: !!c.explanation,
      });
    }
  });

  it('omits the flag separator when no flags are set', () => {
    expect(serializeHash({ slug: 'gen', chapter: 1 })).toBe('gen-1');
    expect(serializeHash({ slug: 'gen', chapter: 1, threadPane: false })).toBe('gen-1');
  });
});
