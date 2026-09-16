/**
 * Broader OT-first pass: reorder mixed lists; propose/apply evidence-based
 * NT-only first hops from curated chains and reciprocal map links.
 *
 *   npx tsx scripts/applyOtFirst.ts            # report only
 *   npx tsx scripts/applyOtFirst.ts --apply    # write source files
 */
import fs from 'node:fs';
import path from 'node:path';
import { allThreadMaps } from '../src/data/threadMap';
import { isNewTestament, isOldTestament } from '../src/data/connectionInterrogation';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import { expandVerseRange } from '../src/data/refParser';
import { threadChains } from '../src/data/threadDetails';
import { MASTER_CHAINS } from '../src/data/tier4MasterChains';

const APPLY = process.argv.includes('--apply');
const ROOT = path.resolve(import.meta.dirname, '..');

const OT_SLUGS = new Set(BOOK_REGISTRY.slice(0, 39).map(b => b.slug));
const SLUG_TO_NAME = new Map(BOOK_REGISTRY.map(b => [b.slug, b.name]));

const SOURCE_FILES = [
  'src/data/prophecies.ts',
  'src/data/bookProphecies.ts',
  'src/data/otProphecies.ts',
];

/** Golden samples with stored NT-path cumulativePrinciples — do not scramble. */
const GOLDEN_NT_ONLY = new Set(['gen-1-1', 'zec-9-9']);

function isOtAnchorId(id: string): boolean {
  return OT_SLUGS.has(id.split('-')[0] ?? '');
}

function isOtRef(ref: string): boolean {
  return isOldTestament(ref) && !isNewTestament(ref);
}

function partitionOtBeforeNt(refs: string[]): string[] {
  const ot: string[] = [];
  const nt: string[] = [];
  const other: string[] = [];
  for (const r of refs) {
    if (isOtRef(r)) ot.push(r);
    else if (isNewTestament(r)) nt.push(r);
    else other.push(r);
  }
  return [...ot, ...other, ...nt];
}

function sameRefs(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((x, i) => x === b[i]);
}

function verseIdToRef(id: string): string | null {
  const m = id.match(/^([a-z0-9]+)-(\d+)-(\d+)$/);
  if (!m) return null;
  const name = SLUG_TO_NAME.get(m[1]);
  if (!name) return null;
  return `${name} ${m[2]}:${m[3]}`;
}

type MapEntry = { id: string; refs: string[] };

function loadOtAnchors(): MapEntry[] {
  const out: MapEntry[] = [];
  for (const map of allThreadMaps) {
    for (const [id, entry] of Object.entries(map)) {
      if (!isOtAnchorId(id)) continue;
      out.push({ id, refs: entry.fulfillmentRefs });
    }
  }
  return out;
}

type ChainHit = { chainId: string; chainName: string; nextOtRef: string };

function collectChainNextOt(): Map<string, ChainHit> {
  const hits = new Map<string, ChainHit>();

  const compactRef = (ref: string, verseId?: string): string | null => {
    if (verseId) {
      const named = verseIdToRef(verseId);
      if (named && isOtRef(named) && expandVerseRange(named).length > 0) return named;
    }
    if (!isOtRef(ref)) return null;
    const ids = expandVerseRange(ref);
    if (ids.length === 0) return null;
    if (ids.length <= 8) return ref;
    return verseIdToRef(ids[0]!) ?? null;
  };

  const consider = (
    chainId: string,
    chainName: string,
    steps: { ref: string; verseId?: string; testament: string }[]
  ) => {
    const resolved = steps.map(s => {
      const expanded = expandVerseRange(s.ref);
      let ids: string[];
      if (expanded.length > 0 && expanded.length <= 8) {
        ids = [...expanded];
        if (s.verseId && !ids.includes(s.verseId)) ids.unshift(s.verseId);
      } else if (s.verseId) {
        ids = [s.verseId];
      } else {
        ids = expanded.slice(0, 1);
      }
      return { ...s, ids };
    });
    for (let i = 0; i < resolved.length; i++) {
      const step = resolved[i];
      if (step.testament !== 'OT') continue;
      let nextOt: string | null = null;
      for (let j = i + 1; j < resolved.length; j++) {
        if (resolved[j].testament === 'OT') {
          nextOt = compactRef(resolved[j].ref, resolved[j].verseId);
          break;
        }
      }
      if (!nextOt) continue;
      const nextIds = expandVerseRange(nextOt);
      for (const id of new Set(step.ids)) {
        if (!isOtAnchorId(id)) continue;
        if (nextIds.includes(id)) continue;
        if (!hits.has(id)) hits.set(id, { chainId, chainName, nextOtRef: nextOt });
      }
    }
  };

  for (const c of threadChains) {
    consider(c.id, c.name, c.steps);
  }
  for (const c of MASTER_CHAINS) {
    consider(c.id, c.name, c.steps);
  }
  return hits;
}

function collectReciprocalOt(): Map<string, string> {
  const hits = new Map<string, string>();
  const anchors = loadOtAnchors();
  for (const from of anchors) {
    const fromRef = verseIdToRef(from.id);
    if (!fromRef) continue;
    for (const ref of from.refs) {
      if (!isOtRef(ref)) continue;
      for (const id of expandVerseRange(ref)) {
        if (!isOtAnchorId(id) || id === from.id) continue;
        if (!hits.has(id)) hits.set(id, fromRef);
      }
    }
  }
  return hits;
}

function formatRefs(refs: string[], originalInner: string): string {
  const multiline = originalInner.includes('\n');
  if (!multiline) return refs.map(r => `'${r}'`).join(', ');
  const indentMatch = originalInner.match(/\n([ \t]*)\]/);
  const closeIndent = indentMatch?.[1] ?? '    ';
  const itemIndent = closeIndent + '  ';
  return `\n${itemIndent}` + refs.map(r => `'${r}'`).join(`,\n${itemIndent}`) + `,\n${closeIndent}`;
}

function applyEditsToFile(
  relPath: string,
  edits: Map<string, string[]>
): { replaced: number; missing: string[] } {
  const abs = path.join(ROOT, relPath);
  let src = fs.readFileSync(abs, 'utf8');
  const missing: string[] = [];
  let replaced = 0;

  for (const [id, newRefs] of edits) {
    const re = new RegExp(
      `('${id.replace(/-/g, '\\-')}':\\s*\\{\\s*fulfillmentRefs:\\s*\\[)([\\s\\S]*?)(\\])`,
      'm'
    );
    const m = src.match(re);
    if (!m || m.index === undefined) {
      missing.push(`${relPath}:${id}`);
      continue;
    }
    const inner = m[2];
    const formatted = formatRefs(newRefs, inner);
    if (inner === formatted) continue;
    src = src.slice(0, m.index) + m[1] + formatted + m[3] + src.slice(m.index + m[0].length);
    replaced++;
  }

  if (replaced > 0 && APPLY) fs.writeFileSync(abs, src);
  return { replaced, missing };
}

function fileForId(id: string): string | null {
  const slug = id.split('-')[0] ?? '';
  if (slug === 'gen') return 'src/data/prophecies.ts';
  if (slug === 'exo' || slug === 'dan') return 'src/data/bookProphecies.ts';
  if (OT_SLUGS.has(slug) && slug !== 'rev') return 'src/data/otProphecies.ts';
  return null;
}

const anchors = loadOtAnchors();
const mixed: { id: string; before: string[]; after: string[] }[] = [];
const interleaved: { id: string; before: string[]; after: string[] }[] = [];
const ntOnly: MapEntry[] = [];

for (const a of anchors) {
  const hasOt = a.refs.some(isOtRef);
  const hasNt = a.refs.some(r => isNewTestament(r));
  const firstNt = a.refs[0] !== undefined && isNewTestament(a.refs[0]);
  if (hasOt && hasNt) {
    const after = partitionOtBeforeNt(a.refs);
    if (!sameRefs(a.refs, after)) {
      const row = { id: a.id, before: a.refs, after };
      if (firstNt) mixed.push(row);
      else interleaved.push(row);
    }
  } else if (!hasOt && hasNt) {
    ntOnly.push(a);
  }
}

const chainNext = collectChainNextOt();
const reciprocal = collectReciprocalOt();

type Addition = { id: string; hop: string; reason: string; before: string[] };
const additions: Addition[] = [];
const exceptions: { id: string; refs: string[]; reason: string }[] = [];

for (const a of ntOnly) {
  if (GOLDEN_NT_ONLY.has(a.id)) {
    exceptions.push({
      id: a.id,
      refs: a.refs,
      reason:
        'Golden sample with stored NT-path cumulativePrinciples; NT identification/fulfillment cluster — not rewritten',
    });
    continue;
  }
  const chain = chainNext.get(a.id);
  if (chain) {
    additions.push({
      id: a.id,
      hop: chain.nextOtRef,
      reason: `curated chain “${chain.chainName}” (${chain.chainId}) next OT step`,
      before: a.refs,
    });
    continue;
  }
  const rec = reciprocal.get(a.id);
  if (rec) {
    additions.push({
      id: a.id,
      hop: rec,
      reason: `reciprocal OT map already lists this verse from ${rec}`,
      before: a.refs,
    });
    continue;
  }
  exceptions.push({
    id: a.id,
    refs: a.refs,
    reason: 'No curated chain next-OT step and no reciprocal OT-map pair; not invented',
  });
}

console.log('=== Broader OT-first pass ===');
console.log(`OT anchors: ${anchors.length}`);
console.log(`Mixed NT-first to reorder: ${mixed.length}`);
console.log(`OT-first but interleaved (NT then later OT): ${interleaved.length}`);
console.log(`NT-only: ${ntOnly.length}`);
console.log(`  evidence-based first-hop additions: ${additions.length}`);
console.log(`  remaining exceptions: ${exceptions.length}`);
console.log('');
console.log('Mixed samples (first 8):');
for (const row of mixed.slice(0, 8)) {
  console.log(`  ${row.id}`);
  console.log(`    before ${JSON.stringify(row.before)}`);
  console.log(`    after  ${JSON.stringify(row.after)}`);
}
console.log('');
console.log('NT-only additions samples (first 12):');
for (const row of additions.slice(0, 12)) {
  console.log(`  ${row.id} + ${row.hop}  (${row.reason})`);
}

const editsByFile = new Map<string, Map<string, string[]>>();
const queue = [...mixed, ...interleaved];
for (const row of queue) {
  const file = fileForId(row.id);
  if (!file) {
    console.warn(`No source file for ${row.id}`);
    continue;
  }
  if (!editsByFile.has(file)) editsByFile.set(file, new Map());
  editsByFile.get(file)!.set(row.id, row.after);
}
for (const row of additions) {
  const file = fileForId(row.id);
  if (!file) {
    console.warn(`No source file for ${row.id}`);
    continue;
  }
  if (!editsByFile.has(file)) editsByFile.set(file, new Map());
  const next = [row.hop, ...row.before.filter(r => r !== row.hop)];
  editsByFile.get(file)!.set(row.id, next);
}

if (APPLY) {
  let total = 0;
  const missing: string[] = [];
  for (const [file, edits] of editsByFile) {
    const r = applyEditsToFile(file, edits);
    total += r.replaced;
    missing.push(...r.missing);
    console.log(`Wrote ${r.replaced} keys in ${file}`);
  }
  console.log(`Applied ${total} fulfillmentRefs rewrites. Missing: ${missing.length}`);
  if (missing.length) console.log(missing.join('\n'));

  const byReason = new Map<string, string[]>();
  for (const e of exceptions) {
    const list = byReason.get(e.reason) ?? [];
    list.push(`${e.id} → ${e.refs.join('; ')}`);
    byReason.set(e.reason, list);
  }
  const lines: string[] = [
    '# OT-first NT-only exceptions',
    '',
    'Phase 1B broader pass. These OT anchors have **only NT** `fulfillmentRefs` and no',
    'credible OT first-hop in curated `threadChains`, `MASTER_CHAINS`, or reciprocal',
    'OT-map pairs. Weak OT links were **not** invented.',
    '',
    `Count: **${exceptions.length}** of ${ntOnly.length} NT-only OT anchors.`,
    '',
  ];
  for (const [reason, ids] of byReason) {
    lines.push(`## ${reason}`, '');
    lines.push(`Count: ${ids.length}`, '');
    for (const row of ids) lines.push(`- \`${row}\``);
    lines.push('');
  }
  fs.writeFileSync(path.join(ROOT, 'EXCEPTIONS.md'), lines.join('\n'));
  console.log(`Wrote EXCEPTIONS.md (${exceptions.length} ids)`);
} else {
  console.log('');
  console.log('Dry run. Re-run with --apply to write source files + EXCEPTIONS.md.');
}
