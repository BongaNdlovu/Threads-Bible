import { describe, expect, it } from 'vitest';
import { LIFE_THREADS, LIFE_THREAD_DOMAINS } from './lifeThreads';
import { parseRef } from './refParser';
import { checkProse } from '../../scripts/checkReadability';

describe('Life Threads catalogue (master plan WP-6)', () => {
  it('contains all 200 themes with unique ids and sequential numbers', () => {
    expect(LIFE_THREADS).toHaveLength(200);
    const ids = new Set(LIFE_THREADS.map(t => t.id));
    expect(ids.size).toBe(200);
    const numbers = LIFE_THREADS.map(t => t.number).sort((a, b) => a - b);
    expect(numbers).toEqual(Array.from({ length: 200 }, (_, i) => i + 1));
  });

  it('uses all 18 locked domains', () => {
    expect(LIFE_THREAD_DOMAINS).toHaveLength(18);
    const used = new Set(LIFE_THREADS.map(t => t.domain));
    for (const d of LIFE_THREAD_DOMAINS) {
      expect(used.has(d.id), `domain ${d.id} (${d.name}) has no themes`).toBe(true);
    }
    expect(used.size).toBe(18);
  });

  it('gives every theme a valid priority, title, and plain-voice first principle', () => {
    for (const t of LIFE_THREADS) {
      expect(['P0', 'P1', 'P2']).toContain(t.priority);
      expect(t.title.length, `${t.id} title`).toBeGreaterThan(0);
      expect(t.firstPrinciple.length, `${t.id} firstPrinciple`).toBeGreaterThan(0);
      const violations = checkProse(t.firstPrinciple);
      expect(violations, `${t.id}: ${JSON.stringify(violations)}`).toHaveLength(0);
    }
    // The operator's everyday-life P0 list must be present and substantial.
    const p0 = LIFE_THREADS.filter(t => t.priority === 'P0');
    expect(p0.length).toBeGreaterThanOrEqual(40);
  });

  it('gives every theme 3-8 anchors that all resolve canonically', () => {
    for (const t of LIFE_THREADS) {
      expect(
        t.anchors.length,
        `${t.id} has ${t.anchors.length} anchors (need 3-8)`
      ).toBeGreaterThanOrEqual(3);
      expect(t.anchors.length).toBeLessThanOrEqual(8);
      for (const ref of t.anchors) {
        const parsed = parseRef(ref);
        expect(parsed, `${t.id} anchor "${ref}" unresolvable`).toBeTruthy();
      }
    }
  });
});
