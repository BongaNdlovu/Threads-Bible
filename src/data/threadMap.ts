/**
 * Single import surface for the five generated thread-map files (see
 * ARCHITECTURE.md §3). The maps are disjoint partitions of the 1,342 thread
 * anchors by book — never hand-edit them; regenerate via scripts/ instead.
 * Consumers must import from here (or from library.ts), never from the
 * individual generated files, so a future consolidation into one file only
 * touches this module.
 */
import { genesisProphecies } from './prophecies';
import { exodusProphecies, danielProphecies, revelationProphecies } from './bookProphecies';
import { paulineProphecies } from './paulineProphecies';
import { ntProphecies } from './ntProphecies';
import { otProphecies } from './otProphecies';
import { compareCanonicalRefs } from './connectionInterrogation';

export type ThreadMap = Record<string, { fulfillmentRefs: string[] }>;

function canonicalizeMap(map: ThreadMap): ThreadMap {
  const result: ThreadMap = {};
  for (const [id, entry] of Object.entries(map)) {
    result[id] = {
      fulfillmentRefs: [...entry.fulfillmentRefs].sort(compareCanonicalRefs),
    };
  }
  return result;
}

export const threadMaps = {
  genesis: canonicalizeMap(genesisProphecies),
  exodus: canonicalizeMap(exodusProphecies),
  daniel: canonicalizeMap(danielProphecies),
  revelation: canonicalizeMap(revelationProphecies),
  pauline: canonicalizeMap(paulineProphecies),
  nt: canonicalizeMap(ntProphecies),
  ot: canonicalizeMap(otProphecies),
} as const satisfies Record<string, ThreadMap>;

export const allThreadMaps = Object.values(threadMaps) as ThreadMap[];

