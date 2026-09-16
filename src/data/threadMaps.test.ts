import { describe, expect, it } from 'vitest';
import { expandVerseRange } from './refParser';
import { getVerseCount } from './verseCounts';
import { allThreadMaps, threadMaps, type ThreadMap } from './threadMap';
import { threadFor, totalThreadCount } from './library';
import { getThreadDetail } from './threadDetailService';
import { isNewTestament, isOldTestament } from './connectionInterrogation';
import { BOOK_REGISTRY } from './bookRegistry';

const OT_SLUGS = new Set(BOOK_REGISTRY.slice(0, 39).map(b => b.slug));

/** A verse id is canonical when the verse count for its chapter covers it. */
function isValidVerseId(id: string): boolean {
  const m = id.match(/^([a-z0-9]+)-(\d+)-(\d+)$/);
  if (!m) return false;
  return getVerseCount(m[1], parseInt(m[2], 10)) >= parseInt(m[3], 10);
}

describe('thread maps (the 1,342 curated anchors)', () => {
  it('partitions anchors disjointly across the five generated maps', () => {
    const seen = new Set<string>();
    for (const map of allThreadMaps) {
      for (const key of Object.keys(map)) {
        expect(seen.has(key), `verse ${key} appears in two thread maps`).toBe(false);
        seen.add(key);
      }
    }
    expect(seen.size).toBe(totalThreadCount);
  });

  it('keeps the hub aligned with the generated files', () => {
    expect(Object.keys(threadMaps).sort()).toEqual(
      ['daniel', 'exodus', 'genesis', 'nt', 'ot', 'pauline', 'revelation'].sort()
    );
  });

  it('only anchors real canonical verses', () => {
    let checked = 0;
    for (const map of allThreadMaps as ThreadMap[]) {
      for (const key of Object.keys(map)) {
        expect(isValidVerseId(key), `invalid anchor id: ${key}`).toBe(true);
        checked++;
      }
    }
    expect(checked).toBeGreaterThan(1000);
  });

  it('gives every anchor at least one resolvable fulfillment reference', () => {
    for (const map of allThreadMaps as ThreadMap[]) {
      for (const [key, entry] of Object.entries(map)) {
        expect(entry.fulfillmentRefs.length, `anchor ${key} has no fulfillments`).toBeGreaterThan(0);
        for (const ref of entry.fulfillmentRefs) {
          expect(expandVerseRange(ref).length, `anchor ${key} ref "${ref}" expands to nothing`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('resolves lookup for the flagship thread', () => {
    expect(threadFor('gen-3-15')?.fulfillmentRefs.length).toBeGreaterThan(0);
    // zec-14-4 is a known detail-only Tier 3 anchor: it has a hand-written
    // detail but no entry in any thread map (see audit:data detail section).
    expect(threadFor('zec-14-4')).toBeUndefined();
  });
});

describe('thread detail service (lazy)', () => {
  it('loads the detail chunk on demand and resolves details', async () => {
    expect(getThreadDetail('gen-3-15')).toBeNull();
    const api = await import('./threadDetailService').then(m => m.ensureThreadDetails());
    expect(api.getThreadDetail('gen-3-15')?.title).toBeTruthy();
    expect(getThreadDetail('gen-3-15')).not.toBeNull();
  });

  it('gives every thread anchor a detail (hand-written or draft)', async () => {
    await import('./threadDetailService').then(m => m.ensureThreadDetails());
    const { allThreadMaps } = await import('./threadMap');
    let hand = 0;
    let draft = 0;
    for (const map of allThreadMaps) {
      for (const key of Object.keys(map)) {
        const detail = getThreadDetail(key);
        expect(detail, `anchor ${key} has no detail`).not.toBeNull();
        expect(detail!.title.length).toBeGreaterThan(0);
        if (detail!.draft) draft++;
        else hand++;
      }
    }
    expect(hand).toBeGreaterThan(300);
    expect(hand + draft).toBe(1342);
  });
});

function firstNtIndex(refs: string[]): number {
  const idx = refs.findIndex(r => isNewTestament(r));
  return idx === -1 ? refs.length : idx;
}

describe('Phase 1B OT-first Sabbath spine', () => {
  it('puts Exodus 20:8 and/or 20:11 on gen-2-2 before any NT', () => {
    const refs = threadFor('gen-2-2')!.fulfillmentRefs;
    expect(refs.length).toBeGreaterThan(0);
    expect(isOldTestament(refs[0])).toBe(true);
    expect(isNewTestament(refs[0])).toBe(false);
    const exoIdx = refs.findIndex(r => /Exodus 20:(8|11|8-11)\b/.test(r));
    expect(exoIdx).toBeGreaterThanOrEqual(0);
    expect(exoIdx).toBeLessThan(firstNtIndex(refs));
    expect(refs.some(r => r.includes('Hebrews 4'))).toBe(true);
  });

  it('walks creation → Sinai → prophets → Hebrews on the Sabbath spine', () => {
    const gen22 = threadFor('gen-2-2')!.fulfillmentRefs;
    const gen23 = threadFor('gen-2-3')!.fulfillmentRefs;
    const exo8 = threadFor('exo-20-8')!.fulfillmentRefs;
    const exo11 = threadFor('exo-20-11')!.fulfillmentRefs;

    expect(gen23[0]).toMatch(/Exodus 20:11/);
    expect(isNewTestament(gen23[0])).toBe(false);
    expect(gen23.some(r => r.includes('Hebrews 4'))).toBe(true);

    expect(gen22[0]).toMatch(/Exodus 20/);
    expect(gen22.some(r => r.includes('Hebrews 4'))).toBe(true);

    expect(isOldTestament(exo8[0])).toBe(true);
    expect(exo8[0]).toMatch(/Genesis 2:2/);
    const exo8Isa = exo8.findIndex(r => r.includes('Isaiah 58'));
    expect(exo8Isa).toBeGreaterThanOrEqual(0);
    expect(exo8Isa).toBeLessThan(firstNtIndex(exo8));
    expect(exo8.some(r => r.includes('Hebrews 4'))).toBe(true);

    expect(exo11[0]).toMatch(/Genesis 2:2/);
    for (let i = 0; i < firstNtIndex(exo11); i++) {
      expect(isNewTestament(exo11[i]), `exo-20-11[${i}] = ${exo11[i]} is NT before later OT`).toBe(false);
    }
    expect(exo11.some(r => r.includes('Ezekiel 20:12'))).toBe(true);
    expect(exo11.some(r => r.includes('Ezekiel 20:20'))).toBe(true);
    expect(exo11.some(r => r.includes('Hebrews 4'))).toBe(true);
  });

  it('orders exo-12-46 Numbers 9:12 before John 19:36', () => {
    const refs = threadFor('exo-12-46')!.fulfillmentRefs;
    expect(refs[0]).toBe('Numbers 9:12');
    expect(refs).toContain('John 19:36');
    expect(refs.indexOf('Numbers 9:12')).toBeLessThan(refs.indexOf('John 19:36'));
  });

  it('documents gen-1-1 and zec-9-9 as intentional NT-only goldens (no invented OT)', () => {
    for (const id of ['gen-1-1', 'zec-9-9'] as const) {
      const refs = threadFor(id)!.fulfillmentRefs;
      expect(refs.length).toBeGreaterThan(0);
      expect(refs.every(r => isNewTestament(r)), `${id} unexpectedly has an OT fulfillmentRef`).toBe(true);
    }
  });
});

describe('Phase 1B broader OT-first', () => {
  it('never leaves OT refs after NT refs on an OT anchor', () => {
    let mixedNtFirst = 0;
    let interleaved = 0;
    for (const map of allThreadMaps as ThreadMap[]) {
      for (const [key, entry] of Object.entries(map)) {
        const slug = key.split('-')[0] ?? '';
        if (!OT_SLUGS.has(slug)) continue;
        const refs = entry.fulfillmentRefs;
        const hasOt = refs.some(r => isOldTestament(r) && !isNewTestament(r));
        const hasNt = refs.some(r => isNewTestament(r));
        if (!hasOt || !hasNt) continue;
        if (isNewTestament(refs[0] ?? '')) mixedNtFirst++;
        let seenNt = false;
        for (const r of refs) {
          if (isNewTestament(r)) seenNt = true;
          else if (isOldTestament(r) && seenNt) interleaved++;
        }
      }
    }
    expect(mixedNtFirst).toBe(0);
    expect(interleaved).toBe(0);
  });

  it('reorders previously mixed samples so OT precedes NT', () => {
    expect(threadFor('gen-5-22')!.fulfillmentRefs[0]).toBe('Micah 6:8');
    expect(threadFor('gen-14-18')!.fulfillmentRefs[0]).toBe('Psalm 110:4');
    expect(threadFor('num-9-12')!.fulfillmentRefs[0]).toBe('Exodus 12:46');
    expect(threadFor('lev-25-10')!.fulfillmentRefs[0]).toMatch(/Isaiah 61/);
    expect(threadFor('psa-34-20')!.fulfillmentRefs[0]).toBe('Exodus 12:46');
  });

  it('prepends curated-chain OT first-hops on former NT-only samples', () => {
    const proto = threadFor('gen-3-15')!.fulfillmentRefs;
    expect(proto[0]).toBe('Genesis 12:3');
    expect(proto.some(r => r.includes('Galatians 4'))).toBe(true);

    expect(threadFor('gen-1-3')!.fulfillmentRefs[0]).toBe('Genesis 1:14');
    expect(threadFor('gen-2-24')!.fulfillmentRefs[0]).toBe('Genesis 24:7');
    expect(isOldTestament(threadFor('gen-2-9')!.fulfillmentRefs[0]!)).toBe(true);
  });
});

describe('OT-first exceptions coverage (master plan WP-5)', () => {
  it('documents every NT-only OT anchor in EXCEPTIONS.md', async () => {
    const { readFileSync, existsSync } = await import('fs');
    const { join } = await import('path');
    const p = join(process.cwd(), 'EXCEPTIONS.md');
    expect(existsSync(p)).toBe(true);
    const documented = new Set<string>();
    for (const m of readFileSync(p, 'utf8').matchAll(/`([a-z0-9]+-\d+-\d+)[^`]*`/g)) {
      documented.add(m[1]);
    }
    const ntSlugs = new Set(BOOK_REGISTRY.slice(39).map(b => b.slug));
    let ntOnly = 0;
    for (const map of allThreadMaps) {
      for (const [id, entry] of Object.entries(map as Record<string, { fulfillmentRefs: string[] }>)) {
        if (ntSlugs.has(id.split('-')[0])) continue; // rule governs OT anchors
        const refs = entry.fulfillmentRefs ?? [];
        if (refs.length === 0 || refs.some(r => isOldTestament(r))) continue;
        ntOnly += 1;
        expect(documented.has(id), `NT-only OT anchor ${id} is not documented in EXCEPTIONS.md`).toBe(true);
      }
    }
    expect(ntOnly).toBe(175);
  });
});
