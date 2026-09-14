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

export type ThreadMap = Record<string, { fulfillmentRefs: string[] }>;

export const threadMaps = {
  genesis: genesisProphecies,
  exodus: exodusProphecies,
  daniel: danielProphecies,
  revelation: revelationProphecies,
  pauline: paulineProphecies,
  nt: ntProphecies,
  ot: otProphecies,
} as const satisfies Record<string, ThreadMap>;

export const allThreadMaps = Object.values(threadMaps) as ThreadMap[];
