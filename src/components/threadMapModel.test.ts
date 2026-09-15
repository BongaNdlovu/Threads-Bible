import { describe, expect, it } from 'vitest';
import { buildThreadGraph, chunkVersesByRefs, snippet } from './threadMapModel';

const EXPAND: Record<string, string[]> = {
  'Matthew 21:5': ['mat-21-5'],
  'John 12:15': ['joh-12-15'],
  'Isaiah 9:1-2': ['isa-9-1', 'isa-9-2'],
};

const expand = (ref: string) => EXPAND[ref] ?? [];

const VERSES = [
  { id: 'mat-21-5', text: 'Tell ye the daughter of Sion, Behold, thy King cometh unto thee, meek, and sitting upon an ass.' },
  { id: 'joh-12-15', text: 'Fear not, daughter of Sion: behold, thy King cometh, sitting on an ass\'s colt.' },
  { id: 'isa-9-1', text: 'Nevertheless the dimness shall not be such as was in her vexation.' },
  { id: 'isa-9-2', text: 'The people that walked in darkness have seen a great light.' },
];

const BASE = {
  anchorId: 'zec-9-9',
  anchorRef: 'Zechariah 9:9',
  anchorTitle: 'Thy King Cometh, Lowly, Riding upon an Ass',
  anchorVerseText: 'Rejoice greatly, O daughter of Zion; behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass.',
  principle: 'The world-conquering King arrives unarmed and humble — justice and salvation, not cavalry.',
  fulfillmentRefs: ['Matthew 21:5', 'John 12:15', 'Isaiah 9:1-2'],
  fulfillmentVerses: VERSES,
  expand,
};

describe('buildThreadGraph', () => {
  it('builds one source node, one node per fulfillment ref, and matching edges', () => {
    const g = buildThreadGraph(BASE);
    expect(g.nodes).toHaveLength(4); // 1 source + 3 fulfillment refs
    expect(g.edges).toHaveLength(3);
    expect(g.totalSteps).toBe(4);
    expect(g.nodes[0]).toMatchObject({ kind: 'source', step: 1, strand: 'gold', ref: 'Zechariah 9:9' });
    expect(g.nodes[1]).toMatchObject({ kind: 'fulfillment', step: 2, ref: 'Matthew 21:5', strand: 'steel' });
  });

  it('groups multi-verse refs into a single node', () => {
    const g = buildThreadGraph(BASE);
    // Isaiah 9:1-2 is one ref → one node containing both verses' text.
    const isaNode = g.nodes.find(n => n.ref === 'Isaiah 9:1-2');
    expect(isaNode).toBeDefined();
    expect(isaNode!.body).toContain('walked in darkness');
    expect(isaNode!.body).toContain('great light');
    expect(g.edges.find(e => e.to === isaNode!.id)).toBeDefined();
  });

  it('composes every edge why from the hand-written principle plus both verse ends', () => {
    const g = buildThreadGraph(BASE);
    for (const e of g.edges) {
      expect(e.why).toContain(BASE.principle);
      expect(e.why).toContain('Rejoice greatly');
      expect(e.why).toContain(e.label.replace('Thread → ', ''));
    }
    const first = g.edges[0];
    expect(first.why).toContain('Tell ye the daughter of Sion');
  });

  it('keeps steps sequential: source 1, fulfillments 2..n, edges in lockstep', () => {
    const g = buildThreadGraph(BASE);
    g.nodes.forEach((n, i) => expect(n.step).toBe(i + 1));
    g.edges.forEach((e, i) => expect(e.step).toBe(i + 2));
  });

  it('handles a thread with no resolvable fulfillment verses', () => {
    const g = buildThreadGraph({ ...BASE, fulfillmentVerses: [] });
    expect(g.nodes).toHaveLength(1);
    expect(g.edges).toHaveLength(0);
    expect(g.totalSteps).toBe(1);
  });
});

describe('chunkVersesByRefs', () => {
  it('does not reuse a verse across two refs', () => {
    const groups = chunkVersesByRefs(['John 12:15', 'John 12:15'], expand, VERSES);
    expect(groups).toHaveLength(1); // second ref's verse already consumed
  });

  it('returns only groups that have verses', () => {
    const groups = chunkVersesByRefs(['Matthew 21:5', 'Revelation 20:12'], expand, VERSES);
    expect(groups).toHaveLength(1);
    expect(groups[0].ref).toBe('Matthew 21:5');
  });
});

describe('snippet', () => {
  it('strips bracketed superscriptions and collapses whitespace', () => {
    expect(snippet('[A Psalm of David.]  The   LORD is my shepherd.')).toBe('The LORD is my shepherd.');
  });

  it('truncates on a word boundary with an ellipsis', () => {
    const out = snippet('Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem.', 30);
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBeLessThanOrEqual(31);
    expect(out).not.toMatch(/\s$/);
  });
});
