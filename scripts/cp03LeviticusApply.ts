/* CP-03 · Apply — Leviticus (operator sign-off 2026-09-17).
 *
 * Applies the operator-approved AFTER strings from
 * `scripts/cp02LeviticusAppendix.ts` (LEVITICUS_REWRITES) to:
 *   - src/data/bookThreadDetails.ts   (the 10 `lev-*` entries)
 *   - src/data/threadDetails.ts       (the pillar-chain steps carrying a Leviticus verse id)
 *
 * Safety rails (all must pass or nothing is written):
 *  1. Every replacement is scoped: `lev-*` edits happen inside that entry's own
 *     brace-matched block; chain edits happen inside that chain's own block.
 *  2. Each BEFORE literal must occur exactly once inside its block.
 *  3. Every AFTER string passes the clarity gate.
 *  4. Prose-only proof: strip every approved BEFORE literal from the pre-apply
 *     text and every AFTER literal from the post-apply text; the two skeletons
 *     must be byte-identical. If a key, type, keyword array, Strong's number,
 *     Hebrew/Greek script or comment changed, this fails and nothing is written.
 *
 * VERIFY-ONLY fields are never touched (they are not in the rewrite map).
 * Usage: npx tsx scripts/cp03LeviticusApply.ts [--dry-run]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { LEVITICUS_REWRITES, collectLeviticusFields } from './cp02LeviticusAppendix';
import { checkProse } from './checkReadability';

const BOOK_FILE = 'src/data/bookThreadDetails.ts';
const CHAIN_FILE = 'src/data/threadDetails.ts';
const SENTINEL = '<<PROSE>>';

type Change = { id: string; fieldPath: string; before: string; after: string; file: string };

function tsEscapeSingle(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

/** Text from the opening brace after `marker` through its matching close. */
function bracedBlock(text: string, markerIndex: number, markerLength: number): { start: number; end: number } | null {
  const open = text.indexOf('{', markerIndex + markerLength);
  if (open < 0) return null;
  let depth = 0;
  for (let i = open; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return { start: open, end: i + 1 };
    }
  }
  return null;
}

/** Block for an entry id (`'lev-16-15': {`) or a chain id (`id: 'kinsman-redeemer',`). */
function blockFor(text: string, id: string): { start: number; end: number } | null {
  if (id.startsWith('chain:')) {
    const marker = `id: '${id.replace('chain:', '')}',`;
    const at = text.indexOf(marker);
    if (at < 0) return null;
    const openBrace = text.lastIndexOf('{', at);
    if (openBrace < 0) return null;
    return bracedBlock(text, openBrace, 0);
  }
  const marker = `'${id}':`;
  const at = text.indexOf(marker);
  if (at < 0) return null;
  return bracedBlock(text, at, marker.length);
}

function main() {
  const dryRun = process.argv.includes('--dry-run');
  const live = new Map(collectLeviticusFields().map(f => [`${f.id}|${f.fieldPath}`, f.before]));
  const planned: Change[] = [];
  for (const [id, map] of Object.entries(LEVITICUS_REWRITES)) {
    for (const [fieldPath, after] of Object.entries(map)) {
      planned.push({
        id,
        fieldPath,
        before: live.get(`${id}|${fieldPath}`) ?? '',
        after,
        file: id.startsWith('chain:') ? CHAIN_FILE : BOOK_FILE,
      });
    }
  }

  const files = new Map<string, string>([
    [BOOK_FILE, readFileSync(BOOK_FILE, 'utf8')],
    [CHAIN_FILE, readFileSync(CHAIN_FILE, 'utf8')],
  ]);
  const original = new Map(files);
  const applied: Change[] = [];
  const problems: string[] = [];

  for (const c of planned) {
    if (!c.before) {
      problems.push(`MISSING FIELD: ${c.id} → ${c.fieldPath}`);
      continue;
    }
    if (checkProse(c.after).length > 0) {
      problems.push(`GATE FAIL on approved AFTER: ${c.id} → ${c.fieldPath}`);
      continue;
    }
    if (c.before.trim() === c.after.trim()) {
      problems.push(`NO-OP (AFTER equals BEFORE): ${c.id} → ${c.fieldPath}`);
      continue;
    }
    const text = files.get(c.file)!;
    const block = blockFor(text, c.id);
    if (!block) {
      problems.push(`BLOCK NOT FOUND in ${c.file}: ${c.id}`);
      continue;
    }
    const blockText = text.slice(block.start, block.end);
    const escapedBefore = `'${tsEscapeSingle(c.before)}'`;
    const escapedAfter = `'${tsEscapeSingle(c.after)}'`;
    const hits = blockText.split(escapedBefore).length - 1;
    if (hits !== 1) {
      problems.push(`EXPECTED exactly 1 occurrence of BEFORE in ${c.id} block of ${c.file}, found ${hits}`);
      continue;
    }
    files.set(
      c.file,
      text.slice(0, block.start) + blockText.replace(escapedBefore, escapedAfter) + text.slice(block.end),
    );
    applied.push(c);
  }

  if (problems.length > 0) {
    console.error('FATAL — nothing written:\n' + problems.join('\n'));
    process.exit(1);
  }

  // Prose-only proof: with the in-scope literals replaced by one sentinel, the
  // pre-apply and post-apply text must be byte-identical.
  const skeletonProblems: string[] = [];
  for (const file of [BOOK_FILE, CHAIN_FILE]) {
    const strip = (text: string, side: 'before' | 'after') => {
      let out = text;
      for (const c of applied.filter(x => x.file === file)) {
        const literal = `'${tsEscapeSingle(side === 'before' ? c.before : c.after)}'`;
        out = out.split(literal).join(SENTINEL);
      }
      return out;
    };
    if (strip(original.get(file)!, 'before') !== strip(files.get(file)!, 'after')) {
      skeletonProblems.push(`${file}: non-prose text changed (key, type, keyword array, Strong's, script or comment)`);
    }
  }
  if (skeletonProblems.length > 0) {
    console.error('FATAL — prose-only proof failed, nothing written:\n' + skeletonProblems.join('\n'));
    process.exit(1);
  }

  if (!dryRun) {
    for (const [file, text] of files) {
      if (text !== original.get(file)) writeFileSync(file, text, 'utf8');
    }
  }

  console.log('=== CP-03 · LEVITICUS APPLY ===');
  console.log(
    JSON.stringify(
      {
        mode: dryRun ? 'dry-run (no writes)' : 'applied',
        approvedFields: planned.length,
        appliedFields: applied.length,
        proseOnlyProof: 'skeleton identical',
        perFile: [BOOK_FILE, CHAIN_FILE].map(f => ({ file: f, fields: applied.filter(c => c.file === f).length })),
      },
      null,
      2,
    ),
  );
}

main();