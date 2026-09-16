import { describe, expect, it } from 'vitest';
import { getThreadDetail } from '../data/threadDetails';
import { threadFor } from '../data/library';
import { expandVerseRange } from '../data/refParser';
import { isNewTestament, isOldTestament } from '../data/connectionInterrogation';
import { buildThreadGraph, chunkVersesByRefs, computeThreadLayout, snippet } from './threadMapModel';
import { parseWho } from './HistoricalContextPage';

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

  it('carries the full untruncated verse text for the inline reader', () => {
    const g = buildThreadGraph(BASE);
    const source = g.nodes[0];
    expect(source.fullText).toBe(
      'Rejoice greatly, O daughter of Zion; behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass.'
    );
    const isa = g.nodes.find(n => n.ref === 'Isaiah 9:1-2')!;
    expect(isa.fullText).toContain('Nevertheless the dimness');
    expect(isa.fullText).toContain('The people that walked in darkness');
    // fullText is never truncated — no ellipsis even when body is
    expect(isa.fullText).not.toContain('…');
  });

  it('composes every edge why from the hand-written principle plus both verse ends', () => {
    const g = buildThreadGraph(BASE);
    for (const e of g.edges) {
      expect(e.why).toContain(BASE.principle);
      expect(e.why).toContain(e.label.replace('Thread → ', ''));
    }
    const first = g.edges[0];
    expect(first.why).toContain('Rejoice greatly');
    expect(first.why).toContain('Tell ye the daughter of Sion');
    const second = g.edges[1];
    expect(second.why).toContain('Tell ye the daughter of Sion');
    expect(second.why).toContain('Fear not, daughter of Sion');
  });

  it('chains edges from the previous node so playback can walk OT→OT→NT', () => {
    const g = buildThreadGraph(BASE);
    expect(g.edges).toHaveLength(g.nodes.length - 1);
    g.edges.forEach((e, i) => {
      expect(e.from).toBe(g.nodes[i].id);
      expect(e.to).toBe(g.nodes[i + 1].id);
      expect(e.step).toBe(i + 2);
    });
    expect(g.edges[0].from).toBe(BASE.anchorId);
    expect(g.edges[1].from).not.toBe(BASE.anchorId);
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
    expect(g.nodes[0].threadPrinciple).toContain('Foundational Thread Principle');
  });

  it('populates cumulative thread principle for all cards starting from first card through step N', () => {
    const g = buildThreadGraph(BASE);
    expect(g.nodes).toHaveLength(4);

    // Card 1 (Step 1): Foundational Principle
    const n1 = g.nodes[0];
    expect(n1.step).toBe(1);
    expect(n1.threadPrinciple).toBeTruthy();
    expect(n1.threadPrinciple).toContain('Foundational Thread Principle (Zechariah 9:9)');
    expect(n1.threadPrinciple).toContain(BASE.principle);

    // Card 2 (Step 2): Explains first connection (2 verses in common)
    const n2 = g.nodes[1];
    expect(n2.step).toBe(2);
    expect(n2.threadPrinciple).toBeTruthy();
    expect(n2.threadPrinciple).toContain('Connection 1 (2 Verses in Common — Zechariah 9:9 & Matthew 21:5)');
    expect(n2.threadPrinciple).toContain('What these two verses share in common');
    expect(n2.threadPrinciple).toContain('How they connect');
    expect(n2.threadPrinciple).toContain('Why they connect');

    // Card 3 (Step 3): Explains 3 verses in common and unfolding redemptive arc
    const n3 = g.nodes[2];
    expect(n3.step).toBe(3);
    expect(n3.threadPrinciple).toBeTruthy();
    expect(n3.threadPrinciple).toContain('Connection 2 (3 Verses in Common — Zechariah 9:9, Matthew 21:5, & John 12:15)');
    expect(n3.threadPrinciple).toContain('What these 3 verses share in common');
    expect(n3.threadPrinciple).toContain('How the redemptive arc unfolds');
    expect(n3.threadPrinciple).toContain('Redemptive purpose');
    expect(n3.threadPrinciple).toContain('Canonical climax');

    // Card 4 (Step 4): Progressive culmination across all 4 verses
    const n4 = g.nodes[3];
    expect(n4.step).toBe(4);
    expect(n4.threadPrinciple).toBeTruthy();
    expect(n4.threadPrinciple).toContain('Connection 3 (4 Verses in Common — Zechariah 9:9 ➔ Matthew 21:5 ➔ John 12:15 ➔ Isaiah 9:1-2)');
    expect(n4.threadPrinciple).toContain('Progressive culmination across all 4 canonical links');
    expect(n4.threadPrinciple).toContain('What the entire chain shares in common');
    expect(n4.threadPrinciple).toContain('Redemptive synthesis');
    expect(n4.threadPrinciple).toContain('Theological necessity');
  });

  it('guarantees the who dimension exists on every card in the mindmap', () => {
    const g = buildThreadGraph(BASE);
    expect(g.nodes.length).toBe(4);

    // Anchor node
    const n1 = g.nodes[0];
    expect(n1.who).toBeTruthy();
    expect(n1.who).toContain('Authorship & Context:');
    expect(n1.who).toContain('Zechariah');
    expect(n1.who).toContain('Identified Characters:');
    expect(n1.who).toContain('Christological Subject & Referent:');
    expect(n1.who).toContain('Redemptive Purpose:');

    // Fulfillment nodes
    for (let i = 1; i < g.nodes.length; i++) {
      const node = g.nodes[i];
      expect(node.who, `Node ${node.id} missing who dimension`).toBeTruthy();
      expect(node.who).toContain('Authorship');
      expect(node.who).toContain('Characters');
    }
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

describe('computeThreadLayout', () => {
  it('positions nodes in column mode with guaranteed collision-free vertical gaps', () => {
    const g = buildThreadGraph(BASE);
    const sizes = {
      [g.nodes[1].id]: { w: 250, h: 180 },
      [g.nodes[2].id]: { w: 250, h: 220 },
      [g.nodes[3].id]: { w: 250, h: 160 },
    };
    const pos = computeThreadLayout(g, { mode: 'column', spacing: 'normal', nodeSizes: sizes });

    // Fulfillment nodes should be in the column
    expect(pos[g.nodes[1].id].x).toBe(pos[g.nodes[2].id].x);
    expect(pos[g.nodes[2].id].x).toBe(pos[g.nodes[3].id].x);

    // Node 2 must start strictly after Node 1 bottom + gap (38)
    const n1Bottom = pos[g.nodes[1].id].y + sizes[g.nodes[1].id].h;
    expect(pos[g.nodes[2].id].y).toBeGreaterThanOrEqual(n1Bottom + 38);

    // Node 3 must start strictly after Node 2 bottom + gap (38)
    const n2Bottom = pos[g.nodes[2].id].y + sizes[g.nodes[2].id].h;
    expect(pos[g.nodes[3].id].y).toBeGreaterThanOrEqual(n2Bottom + 38);
  });

  it('shifts subsequent nodes down dynamically when a card expands', () => {
    const g = buildThreadGraph(BASE);
    const unexpandedSizes = {
      [g.nodes[1].id]: { w: 250, h: 180 },
      [g.nodes[2].id]: { w: 250, h: 180 },
    };
    const posBefore = computeThreadLayout(g, { mode: 'column', nodeSizes: unexpandedSizes });

    // Expand node 1 (e.g. from 180 to 360)
    const expandedSizes = {
      [g.nodes[1].id]: { w: 250, h: 360 },
      [g.nodes[2].id]: { w: 250, h: 180 },
    };
    const posAfter = computeThreadLayout(g, { mode: 'column', nodeSizes: expandedSizes });

    // Node 2 should be pushed down by exactly 180px, avoiding any collision
    expect(posAfter[g.nodes[2].id].y - posBefore[g.nodes[2].id].y).toBe(180);
  });

  it('supports two-column grid layout for fulfillment nodes', () => {
    const g = buildThreadGraph(BASE);
    const pos = computeThreadLayout(g, { mode: 'grid', spacing: 'normal' });

    // Should have 2 distinct column X positions for fulfillments
    const fXPositions = new Set([
      pos[g.nodes[1].id].x,
      pos[g.nodes[2].id].x,
      pos[g.nodes[3].id].x,
    ]);
    expect(fXPositions.size).toBe(2);

    // Anchor node should be centered horizontally between the left and right fulfillment columns
    const leftX = Math.min(...fXPositions);
    const rightX = Math.max(...fXPositions);
    const anchorX = pos[g.nodes[0].id].x;
    expect(anchorX).toBeGreaterThan(leftX);
    expect(anchorX).toBeLessThan(rightX);

    // Verify all nodes in grid have zero bounding-box overlaps
    for (let i = 0; i < g.nodes.length; i++) {
      for (let j = i + 1; j < g.nodes.length; j++) {
        const p1 = pos[g.nodes[i].id];
        const p2 = pos[g.nodes[j].id];
        const overlapX = Math.max(0, Math.min(p1.x + 250, p2.x + 250) - Math.max(p1.x, p2.x));
        const overlapY = Math.max(0, Math.min(p1.y + 180, p2.y + 180) - Math.max(p1.y, p2.y));
        expect(overlapX > 0 && overlapY > 0, `Grid collision between ${g.nodes[i].id} and ${g.nodes[j].id}`).toBe(false);
      }
    }
  });

  it('supports radial arc layout and calculates non-zero positive coordinates', () => {
    const g = buildThreadGraph(BASE);
    const pos = computeThreadLayout(g, { mode: 'radial' });
    for (const node of g.nodes) {
      expect(pos[node.id].x).toBeGreaterThan(0);
      expect(pos[node.id].y).toBeGreaterThan(0);
    }
  });

  it('guarantees no node collisions in radial layout for multi-node graphs', () => {
    const multiVerseBase = {
      ...BASE,
      fulfillmentRefs: ['Matt 21:5', 'John 12:15', 'Isa 9:1', 'Isa 9:2', 'Micah 5:2', 'Psa 22:1', 'Psa 110:1', 'Isa 53:5'],
      fulfillmentVerses: [
        { id: '1', text: 'v1' },
        { id: '2', text: 'v2' },
        { id: '3', text: 'v3' },
        { id: '4', text: 'v4' },
        { id: '5', text: 'v5' },
        { id: '6', text: 'v6' },
        { id: '7', text: 'v7' },
        { id: '8', text: 'v8' },
      ],
      expand: () => [],
    };
    const g = buildThreadGraph(multiVerseBase);
    // Give some nodes expanded heights (e.g. 300px)
    const sizes: Record<string, { w: number; h: number }> = {};
    g.nodes.forEach((n, idx) => {
      sizes[n.id] = { w: 250, h: idx % 2 === 0 ? 300 : 180 };
    });

    const pos = computeThreadLayout(g, { mode: 'radial', nodeSizes: sizes });
    const nodes = g.nodes;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = pos[nodes[i].id];
        const p2 = pos[nodes[j].id];
        const h1 = sizes[nodes[i].id].h;
        const h2 = sizes[nodes[j].id].h;
        const overlapX = Math.max(0, Math.min(p1.x + 250, p2.x + 250) - Math.max(p1.x, p2.x));
        const overlapY = Math.max(0, Math.min(p1.y + h1, p2.y + h2) - Math.max(p1.y, p2.y));
        const collides = overlapX > 0 && overlapY > 0;
        expect(collides, `Collision between ${nodes[i].id} and ${nodes[j].id}: overlapX=${overlapX}, overlapY=${overlapY}`).toBe(false);
      }
    }
  });

  it('handles single-node graph gracefully', () => {
    const g = buildThreadGraph({ ...BASE, fulfillmentVerses: [] });
    const pos = computeThreadLayout(g);
    expect(pos[g.nodes[0].id]).toEqual({ x: 50, y: 50 });
  });
});

const GENERIC_SOURCE_WHO = 'the recipients of divine revelation';

describe('Phase 1 golden live-ref cumulative principles and authored Who', () => {
  it('uses stored cumulative principles for zec-9-9 live fulfillmentRefs instead of the synthetic generator', () => {
    const detail = getThreadDetail('zec-9-9')!;
    const expand: Record<string, string[]> = {
      'Matthew 21:5': ['mat-21-5'],
      'John 12:15': ['joh-12-15'],
      'Mark 11:7': ['mar-11-7'],
      'Luke 19:38': ['luk-19-38'],
    };
    const g = buildThreadGraph({
      anchorId: 'zec-9-9',
      anchorRef: 'Zechariah 9:9',
      anchorTitle: detail.title,
      anchorVerseText:
        'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.',
      principle: detail.principle,
      fulfillmentRefs: ['Matthew 21:5', 'John 12:15', 'Mark 11:7', 'Luke 19:38'],
      fulfillmentVerses: [
        { id: 'mat-21-5', text: 'Tell ye the daughter of Sion, Behold, thy King cometh unto thee, meek, and sitting upon an ass.' },
        { id: 'joh-12-15', text: 'Fear not, daughter of Sion: behold, thy King cometh, sitting on an ass\'s colt.' },
        { id: 'mar-11-7', text: 'And they brought the colt to Jesus, and cast their garments on him; and he sat upon him.' },
        { id: 'luk-19-38', text: 'Saying, Blessed be the King that cometh in the name of the Lord: peace in heaven, and glory in the highest.' },
      ],
      expand: ref => expand[ref] ?? [],
      who: detail.who,
      whoByRef: detail.whoByRef,
      cumulativePrinciples: detail.cumulativePrinciples,
      terms: detail.terms,
    });

    expect(g.nodes).toHaveLength(5);
    expect(detail.cumulativePrinciples).toHaveLength(5);
    g.nodes.forEach((node, i) => {
      expect(node.threadPrinciple).toBe(detail.cumulativePrinciples![i]);
    });
    expect(g.nodes[4].threadPrinciple).toContain('Luke 19:38');
    expect(g.nodes[4].threadPrinciple).not.toContain('Isaiah 9:1-2');

    expect(g.nodes[0].who).toBe(detail.who);
    expect(g.nodes[0].who).not.toContain(GENERIC_SOURCE_WHO);
    expect(parseWho(g.nodes[0].who!)?.number).toMatch(/^(singular|many)$/);

    for (let i = 1; i < g.nodes.length; i++) {
      const ref = g.nodes[i].ref;
      expect(g.nodes[i].who).toBe(detail.whoByRef![ref]);
      expect(g.nodes[i].who).not.toContain(GENERIC_SOURCE_WHO);
      expect(parseWho(g.nodes[i].who!)?.number).toMatch(/^(singular|many)$/);
    }

    expect(g.terms?.some(t => t.exposition)).toBe(true);
  });

  it('uses stored cumulative principles for gen-1-1 and exo-12-46 live refs', () => {
    const gen = getThreadDetail('gen-1-1')!;
    const genGraph = buildThreadGraph({
      anchorId: 'gen-1-1',
      anchorRef: 'Genesis 1:1',
      anchorTitle: gen.title,
      anchorVerseText: 'In the beginning God created the heaven and the earth.',
      principle: gen.principle,
      fulfillmentRefs: ['John 1:1-3', 'Hebrews 11:3'],
      fulfillmentVerses: [
        { id: 'joh-1-1', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.' },
        { id: 'heb-11-3', text: 'Through faith we understand that the worlds were framed by the word of God.' },
      ],
      expand: ref =>
        ref === 'John 1:1-3' ? ['joh-1-1'] : ref === 'Hebrews 11:3' ? ['heb-11-3'] : [],
      who: gen.who,
      whoByRef: gen.whoByRef,
      cumulativePrinciples: gen.cumulativePrinciples,
    });
    expect(genGraph.nodes).toHaveLength(3);
    expect(genGraph.nodes[0].threadPrinciple).toBe(gen.cumulativePrinciples![0]);
    expect(genGraph.nodes[1].threadPrinciple).toContain('John 1:1-3');
    expect(genGraph.nodes[2].threadPrinciple).toContain('Hebrews 11:3');
    expect(genGraph.nodes[0].who).not.toContain(GENERIC_SOURCE_WHO);

    const exo = getThreadDetail('exo-12-46')!;
    const exoGraph = buildThreadGraph({
      anchorId: 'exo-12-46',
      anchorRef: 'Exodus 12:46',
      anchorTitle: exo.title,
      anchorVerseText: 'neither shall ye break a bone thereof.',
      principle: exo.principle,
      fulfillmentRefs: ['Numbers 9:12', 'John 19:36'],
      fulfillmentVerses: [
        { id: 'num-9-12', text: 'They shall leave none of it unto the morning, nor break any bone of it.' },
        { id: 'joh-19-36', text: 'For these things were done, that the scripture should be fulfilled, A bone of him shall not be broken.' },
      ],
      expand: ref =>
        ref === 'John 19:36' ? ['joh-19-36'] : ref === 'Numbers 9:12' ? ['num-9-12'] : [],
      who: exo.who,
      whoByRef: exo.whoByRef,
      cumulativePrinciples: exo.cumulativePrinciples,
    });
    expect(exoGraph.nodes).toHaveLength(3);
    expect(exoGraph.nodes[1].ref).toBe('Numbers 9:12');
    expect(exoGraph.nodes[1].threadPrinciple).toBe(exo.cumulativePrinciples![1]);
    expect(exoGraph.nodes[1].threadPrinciple).toContain('Numbers 9:12');
    expect(exoGraph.nodes[2].ref).toBe('John 19:36');
    expect(exoGraph.nodes[2].threadPrinciple).toContain('John 19:36');
    expect(parseWho(exoGraph.nodes[0].who!)?.number).toBe('singular');
    expect(exoGraph.edges[0].from).toBe('exo-12-46');
    expect(exoGraph.edges[1].from).toBe(exoGraph.nodes[1].id);
  });

  it('walks gen-2-2 as chained OT Sinai then NT Hebrews', () => {
    const refs = threadFor('gen-2-2')!.fulfillmentRefs;
    const detail = getThreadDetail('gen-2-2')!;
    const fulfillmentVerses = refs.flatMap(ref =>
      expandVerseRange(ref).map(id => ({ id, text: `stub ${id}` }))
    );
    const g = buildThreadGraph({
      anchorId: 'gen-2-2',
      anchorRef: 'Genesis 2:2',
      anchorTitle: detail.title,
      anchorVerseText:
        'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.',
      principle: detail.principle,
      fulfillmentRefs: refs,
      fulfillmentVerses,
      expand: expandVerseRange,
    });
    expect(g.nodes.length).toBeGreaterThanOrEqual(3);
    expect(isOldTestament(g.nodes[1].ref)).toBe(true);
    expect(isNewTestament(g.nodes[1].ref)).toBe(false);
    expect(g.nodes[1].ref).toMatch(/Exodus 20/);
    const last = g.nodes[g.nodes.length - 1];
    expect(last.ref).toMatch(/Hebrews 4/);
    expect(isNewTestament(last.ref)).toBe(true);
    g.edges.forEach((e, i) => {
      expect(e.from).toBe(g.nodes[i].id);
      expect(e.to).toBe(g.nodes[i + 1].id);
    });
  });
});

