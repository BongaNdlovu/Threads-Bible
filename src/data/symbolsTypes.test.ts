import { describe, expect, it } from 'vitest';
import { expandVerseRange } from './refParser';
import { getVerseCount } from './verseCounts';
import {
  SYMBOLS,
  TYPES,
  SYMBOL_CATEGORIES,
  TYPE_CATEGORIES,
  getSymbolsForVerse,
  getTypesForVerse,
  getSymbolKeywordsForVerse,
  isSymbolVerse,
} from './symbolsTypes';

/** A ref is navigable when it parses to at least one canonical verse id. */
function refsResolve(refs: string[]): boolean {
  return refs.every(r => expandVerseRange(r).length > 0);
}

describe('Symbols & Types reference', () => {
  it('has a full reference set with unique ids', () => {
    expect(SYMBOLS.length).toBeGreaterThanOrEqual(85);
    expect(TYPES.length).toBeGreaterThanOrEqual(45);
    for (const list of [SYMBOLS, TYPES]) {
      const ids = new Set(list.map(e => e.id));
      expect(ids.size).toBe(list.length);
    }
  });

  it('uses only defined categories', () => {
    for (const s of SYMBOLS) expect(SYMBOL_CATEGORIES).toContain(s.category);
    for (const t of TYPES) expect(TYPE_CATEGORIES).toContain(t.category);
  });

  it('resolves every proof, type, and fulfillment ref canonically', () => {
    for (const s of SYMBOLS) {
      expect(refsResolve(s.proofRefs), `symbol ${s.id} has an unresolvable ref`).toBe(true);
    }
    for (const t of TYPES) {
      expect(refsResolve(t.typeRefs), `type ${t.id} has an unresolvable type ref`).toBe(true);
      expect(refsResolve(t.fulfillmentRefs), `type ${t.id} has an unresolvable fulfillment ref`).toBe(true);
    }
  });

  it('covers the flagship symbols from the request (beast of the sea, sea, winds)', () => {
    const ids = SYMBOLS.map(s => s.id);
    for (const id of ['sym-beast', 'sym-beast-sea', 'sym-sea', 'sym-wind', 'sym-woman']) {
      expect(ids).toContain(id);
    }
    const beast = SYMBOLS.find(s => s.id === 'sym-beast-sea')!;
    expect(beast.meaning).toContain('kingdom');
    expect(beast.scriptureInterpretation).toContain('Revelation 17:15');
  });

  it('maps types to canonical antitypes (passover, atonement, rock)', () => {
    const byId = new Map(TYPES.map(t => [t.id, t]));
    expect(byId.get('typ-passover')?.fulfillmentRefs).toContain('1 Corinthians 5:7');
    expect(byId.get('typ-atonement')?.fulfillmentRefs).toContain('Daniel 8:14');
    expect(byId.get('typ-rock')?.fulfillmentRefs).toContain('1 Corinthians 10:4');
    for (const t of TYPES) {
      expect(t.antitype.length).toBeGreaterThan(0);
    }
  });

  it('indexes symbols and types by canonical verse id and extracts keywords', () => {
    // Dan 7:23 has sym-beast
    expect(isSymbolVerse('dan-7-23')).toBe(true);
    const danSymbols = getSymbolsForVerse('dan-7-23');
    expect(danSymbols.some(s => s.id === 'sym-beast')).toBe(true);
    const danKeywords = getSymbolKeywordsForVerse('dan-7-23');
    expect(danKeywords).toContain('beast');

    // Rev 13:1 has sea, beast, horns, crowns
    expect(isSymbolVerse('rev-13-1')).toBe(true);
    const revSymbols = getSymbolsForVerse('rev-13-1');
    expect(revSymbols.some(s => s.id === 'sym-beast' || s.id === 'sym-beast-sea')).toBe(true);
    const revKeywords = getSymbolKeywordsForVerse('rev-13-1');
    expect(revKeywords).toContain('beast');
    expect(revKeywords).toContain('sea');

    // Passover type on Exo 12:5 and 1 Cor 5:7
    expect(isSymbolVerse('exo-12-5')).toBe(true);
    expect(getTypesForVerse('exo-12-5').some(t => t.id === 'typ-passover')).toBe(true);
    expect(isSymbolVerse('1co-5-7')).toBe(true);
    expect(getTypesForVerse('1co-5-7').some(t => t.id === 'typ-passover')).toBe(true);
  });
});

