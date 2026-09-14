import { describe, expect, it } from 'vitest';
import { expandVerseRange } from './refParser';
import { getVerseCount } from './verseCounts';
import { allThreadMaps, threadMaps, type ThreadMap } from './threadMap';
import { threadFor, totalThreadCount } from './library';
import { getThreadDetail } from './threadDetailService';

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
});
