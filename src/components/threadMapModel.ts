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

export interface MapEdge {
  id: string;
  from: string;
  to: string;
  /** 1-based playback step at which this edge is revealed. */
  step: number;
  label: string;
  why: string;
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
  const expand = input.expand ?? (() => []);

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
    });
  });

  return { nodes, edges, totalSteps: 1 + groups.length };
}
