import { describe, it, expect } from 'vitest';
import {
  checkProse,
  checkProseFields,
  stripQuotes,
  MAX_SENTENCE_WORDS,
} from '../../scripts/checkReadability';
import { buildThreadGraph, buildCumulativePrinciple } from '../../src/components/threadMapModel';
import { generateConnectionInterrogation } from '../../src/data/connectionInterrogation';
import { getAllThreadDetails } from '../../src/data/threadDetails';

const GOLDEN = ['gen-1-1', 'gen-2-2', 'gen-2-3', 'zec-9-9', 'isa-7-14', 'exo-12-46'];

describe('checkReadability primitives', () => {
  it('flags a banned abstraction phrase', () => {
    const v = checkProse('This thread shows the redemptive synthesis of both passages.');
    expect(v.some(x => x.kind === 'banned-phrase')).toBe(true);
  });

  it('flags a sentence over the word floor', () => {
    const long = Array.from({ length: MAX_SENTENCE_WORDS + 5 }, (_, i) => `word${i}`).join(' ') + '.';
    const v = checkProse(long);
    expect(v.some(x => x.kind === 'long-sentence')).toBe(true);
  });

  it('exempts direct quotations from the sentence-word count', () => {
    const kjvQuote = '"Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass."';
    expect(checkProse(`Zechariah announces the King. ${kjvQuote} He comes unarmed.`)).toHaveLength(0);
    expect(stripQuotes('a “quoted phrase inside” b').includes('quoted phrase inside')).toBe(false);
  });

  it('passes plain copy with no violations', () => {
    expect(checkProse('God promised a King. Jesus is that King. The thread makes it easy to see.')).toHaveLength(0);
  });

  it('checkProseFields reports only the failing fields', () => {
    const failures = checkProseFields({
      good: 'Short sentence. Another short one.',
      bad: 'This is the theological necessity of it all.',
    });
    expect(Object.keys(failures)).toEqual(['bad']);
  });
});

describe('clarity gate over runtime prose templates', () => {
  // Anchor deliberately NOT in CURATED_INTERROGATIONS: the gate must judge the
  // runtime fallback templates themselves, not hand-written curated entries.
  const BASE = {
    anchorId: 'dan-2-34',
    anchorRef: 'Daniel 2:34',
    anchorTitle: 'A Stone Cut Without Hands',
    anchorVerseText:
      'Thou sawest till that a stone was cut out without hands, which smote the image upon his feet.',
    principle: 'God’s kingdom arrives like a small stone, then fills the whole earth. The stone is Jesus.',
    fulfillmentRefs: ['Isaiah 8:14', 'Matthew 21:44', 'Luke 20:17-18'],
    fulfillmentVerses: [
      { id: 'isa-8-14', text: 'And he shall be for a sanctuary; but for a stone of stumbling and for a rock of offence.' },
      {
        id: 'mat-21-44',
        text: 'And whosoever shall fall on this stone shall be broken: but on whomsoever it shall fall, it will grind him to powder.',
      },
      {
        id: 'luk-20-17',
        text: 'And he beheld them, and said, What is this then that is written, The stone which the builders rejected, the same is become the head of the corner?',
      },
    ],
  };

  it('every node threadPrinciple and edge why in a built graph passes the gate', () => {
    const g = buildThreadGraph(BASE);
    for (const node of g.nodes) {
      const failures = checkProse(node.threadPrinciple);
      expect(failures, `node ${node.id}: ${JSON.stringify(failures)}`).toHaveLength(0);
    }
    for (const edge of g.edges) {
      const failures = checkProse(edge.why);
      expect(failures, `edge ${edge.id}: ${JSON.stringify(failures)}`).toHaveLength(0);
    }
  });

  it('buildCumulativePrinciple passes the gate for steps 1 through 6', () => {
    for (let step = 1; step <= 6; step++) {
      const out = buildCumulativePrinciple({
        step,
        chainRefs: ['Daniel 2:34', 'Isaiah 8:14', 'Matthew 21:44', 'Luke 20:17', 'Daniel 2:44', 'Revelation 11:15'].slice(0, step),
        basePrinciple: 'God’s kingdom arrives like a small stone, then fills the whole earth.',
        anchorRef: 'Daniel 2:34',
        anchorSnippet: 'a stone was cut out without hands',
        currentRef: 'Matthew 21:44',
        currentSnippet: 'whosoever shall fall on this stone shall be broken',
      });
      expect(checkProse(out), `step ${step}: ${JSON.stringify(checkProse(out))}`).toHaveLength(0);
    }
  });

  it('all four interrogation fallback modes pass the gate', () => {
    const cases: Array<[string, string, string]> = [
      ['dan-2-34', 'Daniel 2:34', 'Matthew 21:44'], // OT → NT
      ['heb-4-4', 'Hebrews 4:4', 'Genesis 2:2'], // NT → OT
      ['rom-6-3', 'Romans 6:3', 'Galatians 3:27'], // NT → NT
      ['exo-20-11', 'Exodus 20:11', 'Genesis 2:2'], // OT → OT
    ];
    for (const [anchorId, anchorRef, targetRef] of cases) {
      const inter = generateConnectionInterrogation({
        anchorId,
        anchorRef,
        targetRef,
        anchorVerseText: 'A short verse text for the test.',
        targetVerseText: 'A short fulfillment text for the test.',
        principle: 'One promise, carried forward.',
      });
      const failures = checkProseFields({
        who: inter.who,
        what: inter.what,
        when: inter.when,
        how: inter.how,
        why: inter.why,
        ultimatePoint: inter.ultimatePoint,
        personalRelevance: inter.personalRelevance,
      });
      expect(failures, `${anchorRef} → ${targetRef}: ${JSON.stringify(failures)}`).toEqual({});
    }
  });
});

describe('clarity gate over golden-sample details', () => {
  it('titles, principles, and stored cumulative principles pass the gate', () => {
    const all = getAllThreadDetails();
    for (const id of GOLDEN) {
      const detail = all[id];
      expect(detail, `golden detail ${id} exists`).toBeTruthy();
      const fields: Record<string, string> = {
        [`${id}.title`]: detail!.title,
        [`${id}.principle`]: detail!.principle,
      };
      (detail!.cumulativePrinciples ?? []).forEach((p, i) => {
        fields[`${id}.cumulativePrinciples[${i}]`] = p;
      });
      const failures = checkProseFields(fields);
      expect(failures, `${id}: ${JSON.stringify(failures)}`).toEqual({});
    }
  });
});
