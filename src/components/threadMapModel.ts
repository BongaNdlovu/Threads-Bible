/**
 * Pure model for the Ordo mindmap view of a single thread.
 *
 * buildThreadGraph turns a thread (anchor verse + hand-written detail +
 * resolved fulfillment verses) into a cinematic node graph:
 *   node 0        = the anchor verse (source of the thread)
 *   nodes 1..n    = one node per fulfillment reference
 *   edge i        = anchor → fulfillment i, carrying the edge's WHY —
 *                   composed from the thread's hand-written principle plus
 *                   both verse ends, so every connection is explained.
 *
 * No DOM, no React — testable in node.
 */

export interface MapNode {
  id: string;
  kind: 'source' | 'fulfillment';
  /** 1-based playback step at which this node appears. */
  step: number;
  ref: string;
  title: string;
  body: string;
  /** The full, untruncated verse text for the node's inline reader. */
  fullText: string;
  strand: 'gold' | 'steel';
  x: number;
  y: number;
}

import {
  getConnectionInterrogation,
  type ConnectionInterrogation,
} from '../data/connectionInterrogation';
import { expandVerseRange } from '../data/refParser';

export interface MapEdge {
  id: string;
  from: string;
  to: string;
  /** 1-based playback step at which this edge is revealed. */
  step: number;
  label: string;
  why: string;
  /** Complete 5-part biblical interrogation (What, When, How, Why, Ultimate Point). */
  interrogation: ConnectionInterrogation;
}

export interface ThreadGraph {
  nodes: MapNode[];
  edges: MapEdge[];
  /** Total playback steps: 1 (source) + number of fulfillment edges. */
  totalSteps: number;
}

export interface ThreadMapInput {
  anchorId: string;
  anchorRef: string;
  anchorTitle: string;
  anchorVerseText: string;
  /** The thread's hand-written principle (why the thread is a thread). */
  principle: string;
  fulfillmentRefs: string[];
  /** Resolved verses for the fulfillment refs, in reference order. */
  fulfillmentVerses: { id: string; text: string }[];
  /** Reference expander (caller supplies expandVerseRange from refParser). */
  expand?: (ref: string) => string[];
}

const NODE_W = 250;
const NODE_GAP_X = 330;
const NODE_GAP_Y = 250;

/** First clause of a text, word-bounded — used for titles and quotes. */
export function snippet(text: string, max = 120): string {
  const clean = text.replace(/\[[^\]]*\]/g, ' ').replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

/** Group resolved verses by the reference they belong to. */
export function chunkVersesByRefs(
  refs: string[],
  expand: (ref: string) => string[],
  verses: { id: string; text: string }[]
): { ref: string; verses: { id: string; text: string }[] }[] {
  const byId = new Map(verses.map(v => [v.id, v] as const));
  const used = new Set<string>();
  const groups: { ref: string; verses: { id: string; text: string }[] }[] = [];
  for (const ref of refs) {
    const ids = expand(ref);
    const group: { id: string; text: string }[] = [];
    for (const id of ids) {
      const v = byId.get(id);
      if (v && !used.has(id)) {
        group.push(v);
        used.add(id);
      }
    }
    if (group.length > 0) groups.push({ ref, verses: group });
  }
  return groups;
}

export function buildThreadGraph(input: ThreadMapInput): ThreadGraph {
  const nodes: MapNode[] = [];
  const edges: MapEdge[] = [];
  const expand = input.expand ?? expandVerseRange;

  const anchorSnippet = snippet(input.anchorVerseText, 110);
  const principle = input.principle.trim();

  // Node 0 — the anchor (source of the thread).
  nodes.push({
    id: input.anchorId,
    kind: 'source',
    step: 1,
    ref: input.anchorRef,
    title: input.anchorTitle,
    body: anchorSnippet,
    fullText: input.anchorVerseText,
    strand: 'gold',
    x: 40,
    y: 40,
  });

  // Fulfillment nodes — stacked in a column to the right of the anchor.
  const groups = chunkVersesByRefs(input.fulfillmentRefs, expand, input.fulfillmentVerses);
  groups.forEach((group, i) => {
    const step = i + 2;
    const first = group.verses[0];
    const body = first ? snippet(group.verses.map(v => v.text).join(' '), 190) : '';
    const fulfillmentSnippet = first ? snippet(first.text, 90) : '';
    nodes.push({
      id: `${input.anchorId}-f${i}`,
      kind: 'fulfillment',
      step,
      ref: group.ref,
      title: snippet(group.ref, 40),
      body,
      fullText: group.verses.map(v => v.text).join(' '),
      strand: 'steel',
      x: 40 + NODE_GAP_X,
      y: 40 + i * NODE_GAP_Y,
    });
    const targetVerseText = group.verses.map(v => v.text).join(' ');
    const interrogation = getConnectionInterrogation(
      input.anchorId,
      group.ref,
      input.anchorRef,
      input.anchorVerseText,
      targetVerseText,
      input.principle
    );

    edges.push({
      id: `${input.anchorId}-e${i}`,
      from: input.anchorId,
      to: `${input.anchorId}-f${i}`,
      step,
      label: `Thread → ${group.ref}`,
      why:
        `${principle} ` +
        `This connection joins the anchor — “${anchorSnippet}” (${input.anchorRef}) — ` +
        `to ${group.ref}: “${fulfillmentSnippet}.”`,
      interrogation,
    });
  });

  return { nodes, edges, totalSteps: 1 + groups.length };
}

export type MapLayoutMode = 'column' | 'radial' | 'grid';
export type MapSpacingMode = 'compact' | 'normal' | 'relaxed';

export interface NodePosition {
  x: number;
  y: number;
}

export interface LayoutOptions {
  mode?: MapLayoutMode;
  spacing?: MapSpacingMode;
  nodeSizes?: Record<string, { w: number; h: number }>;
  nodeWidth?: number;
  defaultNodeHeight?: number;
}

/**
 * Computes collision-free positions for all nodes in the thread graph.
 * Dynamically accounts for measured node dimensions and card expansion.
 */
export function computeThreadLayout(
  graph: ThreadGraph,
  options?: LayoutOptions
): Record<string, NodePosition> {
  const positions: Record<string, NodePosition> = {};
  if (graph.nodes.length === 0) return positions;

  const mode = options?.mode ?? 'column';
  const spacing = options?.spacing ?? 'normal';
  const nodeSizes = options?.nodeSizes ?? {};
  const nodeW = options?.nodeWidth ?? NODE_W;
  const defaultH = options?.defaultNodeHeight ?? 180;

  // Spacing gaps based on mode
  let vGap = 38;
  let hGap = 120;
  if (spacing === 'compact') {
    vGap = 24;
    hGap = 85;
  } else if (spacing === 'relaxed') {
    vGap = 64;
    hGap = 160;
  }

  const sourceNode = graph.nodes[0];
  const fulfillmentNodes = graph.nodes.slice(1);

  const getH = (id: string) => nodeSizes[id]?.h ?? defaultH;

  if (fulfillmentNodes.length === 0) {
    positions[sourceNode.id] = { x: 50, y: 50 };
    return positions;
  }

  if (mode === 'radial') {
    const count = fulfillmentNodes.length;
    const totalNeededArc = fulfillmentNodes.reduce((sum, n) => sum + getH(n.id) + vGap, 0);
    const arcAngle = Math.min(Math.PI * 0.75, Math.max(Math.PI * 0.42, (count - 1) * 0.28));
    const radius = Math.max(380, totalNeededArc / arcAngle);

    const allHalfHeights = [getH(sourceNode.id) / 2, ...fulfillmentNodes.map(n => getH(n.id) / 2)];
    const maxHalfH = Math.max(...allHalfHeights);
    const anchorX = 50;
    const centerY = radius * Math.sin(arcAngle / 2) + maxHalfH + 50;
    positions[sourceNode.id] = { x: anchorX, y: Math.round(centerY - getH(sourceNode.id) / 2) };

    const startAngle = -arcAngle / 2;
    const angleStep = count > 1 ? arcAngle / (count - 1) : 0;

    let prevBottomY = -Infinity;

    fulfillmentNodes.forEach((node, i) => {
      const theta = count === 1 ? 0 : startAngle + i * angleStep;
      const h = getH(node.id);
      let nx = anchorX + nodeW + hGap + radius * Math.cos(theta);
      let ny = centerY + radius * Math.sin(theta) - h / 2;

      // Absolute collision avoidance: enforce disjoint Y-spans between adjacent fulfillment cards
      if (ny < prevBottomY + vGap) {
        ny = prevBottomY + vGap;
      }
      prevBottomY = ny + h;

      positions[node.id] = { x: Math.round(nx), y: Math.round(ny) };
    });

    return positions;
  }

  if (mode === 'grid' && fulfillmentNodes.length >= 2) {
    // Split Bilateral Layout: Anchor in center, Left Column (odd/alt) and Right Column (even/alt)
    // Guarantees edges never cross through other cards
    const colLeftX = 50;
    const anchorX = colLeftX + nodeW + hGap;
    const colRightX = anchorX + nodeW + hGap;

    let curYLeft = 50;
    let curYRight = 50;

    fulfillmentNodes.forEach((node, idx) => {
      const h = getH(node.id);
      // Alternate between Left and Right columns (or balance heights)
      const isLeft = idx % 2 === 0;
      if (isLeft) {
        positions[node.id] = { x: colLeftX, y: curYLeft };
        curYLeft += h + vGap;
      } else {
        positions[node.id] = { x: colRightX, y: curYRight };
        curYRight += h + vGap;
      }
    });

    const maxColH = Math.max(curYLeft - 50 - vGap, curYRight - 50 - vGap);
    const sourceH = getH(sourceNode.id);
    const anchorY = Math.max(50, 50 + (maxColH - sourceH) / 2);
    positions[sourceNode.id] = { x: anchorX, y: Math.round(anchorY) };

    return positions;
  }

  // Default: Column Layout with Dynamic Collision-Free Spacing
  const colX = 50 + nodeW + hGap;
  let curY = 50;

  fulfillmentNodes.forEach((node) => {
    const h = getH(node.id);
    positions[node.id] = { x: colX, y: curY };
    curY += h + vGap;
  });

  const totalColH = curY - 50 - vGap;
  const sourceH = getH(sourceNode.id);
  const anchorY = Math.max(50, 50 + (totalColH - sourceH) / 2);
  positions[sourceNode.id] = { x: 50, y: Math.round(anchorY) };

  return positions;
}
