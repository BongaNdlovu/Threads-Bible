import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import { expandVerseRange } from './refParser';
import { getVerseCount } from './verseCounts';
import { NT_CITATIONS } from './tier2NtCitations';
import { MESSIANIC_PROPHECIES } from './tier3Messianic';
import { MASTER_CHAINS } from './tier4MasterChains';
import { ensureFulfillmentsLoaded, loadBook, resolveRefs, threadFor } from './library';

// In the node test environment there is no dev server: serve the real book
// JSONs from public/ so loadBook() exercises the true parsing path.
vi.stubGlobal('fetch', vi.fn(async (input: string | URL | Request) => {
  const url = input instanceof Request ? input.url : String(input);
  const m = url.match(/books\/([a-z0-9]+)\.json/);
  if (!m) return new Response('not found', { status: 404 });
  const file = path.join(process.cwd(), 'public', 'books', `${m[1]}.json`);
  return new Response(readFileSync(file, 'utf8'), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}));

const CATEGORIES = [
  'Birth & Incarnation',
  'Mission & Anointing',
  'Betrayal & Passion',
  'Resurrection & Ascension',
  'Priesthood & Heavenly Reign',
  'Second Coming & Kingdom',
] as const;

function isValidVerseId(id: string): boolean {
  const m = id.match(/^([a-z0-9]+)-(\d+)-(\d+)$/);
  if (!m) return false;
  return getVerseCount(m[1], parseInt(m[2], 10)) >= parseInt(m[3], 10);
}

describe('tier 2: NT citations', () => {
  it('keeps both ends canonical', () => {
    expect(NT_CITATIONS.length).toBeGreaterThan(100);
    for (const cit of NT_CITATIONS) {
      expect(isValidVerseId(cit.ntVerseId), `bad ntVerseId ${cit.ntVerseId}`).toBe(true);
      expect(isValidVerseId(cit.otVerseId), `bad otVerseId ${cit.otVerseId}`).toBe(true);
    }
  });
});

describe('tier 3: Messianic prophecies (Jesus Christ threads)', () => {
  it('catalogues 78 prophecies with unique ids and valid categories', () => {
    expect(MESSIANIC_PROPHECIES.length).toBe(78);
    const ids = new Set(MESSIANIC_PROPHECIES.map(p => p.id));
    expect(ids.size).toBe(78);
    for (const p of MESSIANIC_PROPHECIES) {
      expect(CATEGORIES).toContain(p.category);
    }
  });

  it('anchors and fulfills only canonical verses', () => {
    for (const p of MESSIANIC_PROPHECIES) {
      expect(isValidVerseId(p.otVerseId), `bad anchor ${p.otVerseId}`).toBe(true);
      for (const ref of p.fulfillmentRefs) {
        expect(expandVerseRange(ref).length, `${p.id} ref "${ref}" expands to nothing`).toBeGreaterThan(0);
      }
    }
  });

  it('covers the flagship prophecies (triumphal entry, new covenant, out of Egypt)', () => {
    const ids = new Set(MESSIANIC_PROPHECIES.map(p => p.otVerseId));
    for (const anchor of ['zec-9-9', 'jer-31-31', 'hos-11-1', 'psa-2-1', 'exo-12-3', 'num-21-8']) {
      expect(ids.has(anchor), `missing flagship anchor ${anchor}`).toBe(true);
    }
  });
});

describe('tier 4: master chains', () => {
  it('keeps 42 chains with canonical anchor and step verses', () => {
    expect(MASTER_CHAINS.length).toBe(42);
    for (const chain of MASTER_CHAINS) {
      expect(isValidVerseId(chain.primaryAnchorVerseId), `bad chain anchor ${chain.primaryAnchorVerseId}`).toBe(true);
      expect(chain.steps.length).toBeGreaterThan(0);
      for (const step of chain.steps) {
        if (step.verseId) {
          expect(isValidVerseId(step.verseId), `bad step ${step.verseId} in ${chain.id}`).toBe(true);
        }
      }
    }
  });
});

describe('fulfillment index and ref resolution (lazy)', () => {
  it('resolves thread fulfillments from the lazy index when it covers them', async () => {
    const verses = await ensureFulfillmentsLoaded();
    expect(verses.length).toBeGreaterThan(1000);

    // gen-3-15's fulfillments (Galatians 4:4, …) ship in the index itself.
    const resolved = resolveRefs(threadFor('gen-3-15')!.fulfillmentRefs);
    expect(resolved.length).toBeGreaterThan(0);
    expect(resolved.some(v => v.text.length > 0)).toBe(true);
  });

  it('resolves non-indexed fulfillments once the referenced book loads', async () => {
    // zec-9-9's map refs point into Matthew/John/Mark/Luke, which are not in
    // the partial fulfillment index — TheThread loads those books on demand.
    await ensureFulfillmentsLoaded();
    await loadBook('Matthew');
    const resolved = resolveRefs(['Matthew 21:5']);
    expect(resolved.length).toBe(1);
    expect(resolved[0].text).toContain('daughter of Sion');
  });
});
