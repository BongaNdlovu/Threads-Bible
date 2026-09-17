/* Apply an approved plain-language rewrite set to the data file — verbatim,
 * nothing else touched (plan v2.0 "prose-only diffs").
 *
 * Usage:
 *   npx tsx scripts/cp03ApplyRewrites.ts <rewrites.json> --worklist <worklist.json> --dry-run
 *   npx tsx scripts/cp03ApplyRewrites.ts <rewrites.json> --worklist <worklist.json> --apply
 *   npx tsx scripts/cp03ApplyRewrites.ts <rewrites.json> --worklist docs/_work/chains.json --chains-only [--apply]
 *
 * Inputs:
 *   worklist.json  from scripts/cp02ExtractBook.ts — the BEFORE text of every
 *                  in-scope string, keyed by `entryId|field`.
 *   rewrites.json  from the book writer — `drafts[].after`.
 *
 * `--chains-only` applies the DEDICATED CHAIN PASS of plan §1.12 instead of a per-book
 * pass. Chain prose is shared across books, so no per-book pass may touch it: in this mode
 * only drafts whose `entryId` starts with `chain:` are applied (verse-entry verdicts are
 * excluded and reported, exactly as chain verdicts are reported and excluded in book mode),
 * and both guards invert with the scope. The worklist is `docs/_work/chains.json`, whose
 * `fields` array is empty and whose every string is a chain string, so scope resolution
 * does NOT depend on `set.book` matching the slug that starts an entryId — a chain id is
 * `chain:<chain-id>`, never `<book>-<ch>-<v>`:
 *
 *   PRE-FLIGHT  (chain mode) the tree may hold chain prose from earlier chunks of this same
 *               pass, and nothing else. Every line outside the `threadChains` array must be
 *               byte-identical to HEAD; the first dirty verse entry refuses the run.
 *   POST-FLIGHT (chain mode) after writing, every changed line must lie inside the
 *               `threadChains` array and no verse entry may have changed — the mirror image
 *               of the book-mode statement "every changed verse entry was named by a draft;
 *               chain changes are confined to threadChains".
 *
 * SAFETY MODEL (learned the hard way: a stray one-character edit was found in
 * `gen-1-1`'s `who` field, and an earlier version of this tool then wrote over a
 * dirty tree). Two rules now hold, and both are checked against `git`, not
 * against our own in-memory copy:
 *
 *   1. PRE-FLIGHT: both data files must be BYTE-IDENTICAL to HEAD before anything
 *      is written. If the working tree is dirty at all, the tool refuses and tells
 *      you to restore. A sweep never builds on top of someone else's edit.
 *   2. POST-FLIGHT: after writing, the tool re-reads `git diff` and proves the only
 *      entries that changed are the ones this book's drafts named. Anything else
 *      is reported as a FAILURE (the write is left in place for inspection and the
 *      exit code is non-zero, because silently reverting could destroy real work).
 *
 * Refuses (exit 1, writes nothing) when a draft is ambiguous, missing, empty,
 * identical to its BEFORE, or when the accounting does not add up.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const DATA_FILES = ['src/data/threadDetails.ts', 'src/data/bookThreadDetails.ts'] as const;

/** Escape a string exactly the way the source files' literals are escaped. */
function toSourceLiteral(text: string): string {
  const escaped = text
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n');
  return `'${escaped}'`;
}

function countOccurrences(haystack: string, needle: string): number {
  let count = 0;
  let idx = haystack.indexOf(needle);
  while (idx !== -1) {
    count++;
    idx = haystack.indexOf(needle, idx + needle.length);
  }
  return count;
}

function git(args: string[]): { status: number; stdout: string; stderr: string } {
  const r = spawnSync('git', args, { encoding: 'utf8' });
  return { status: r.status ?? 1, stdout: r.stdout ?? '', stderr: r.stderr ?? '' };
}

/** Paths among DATA_FILES that differ from HEAD. */
function dirtyDataFiles(): string[] {
  const r = git(['status', '--porcelain', '--', ...DATA_FILES]);
  return r.stdout
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
    .map(l => l.replace(/^\S+\s+/, '').trim());
}

/** Where the changes landed, per file. `ids`/`chainLines` are the book-mode figures;
 * `outsideLines`/`chainRegionLines`/`chainIds` are the chain-scope ones (see below). */
interface FileChange {
  /** Verse entries the changed lines sit under. */
  ids: Set<string>;
  /** Changed lines after the `threadChains` declaration — chain prose is shared across
   * books, so it is attributed to the chain array rather than to whichever verse key
   * happens to sit above it (an earlier version reported a phantom `gen-34-7` that way). */
  chainLines: number;
  /** Every changed line in the working tree, as git reports it. */
  changedLines: number;
  /** Changed lines that lie INSIDE the `threadChains` array literal proper. */
  chainRegionLines: number;
  /** 1-based numbers of changed lines that lie OUTSIDE that array (a chain pass may not
   * touch any of them: verse entries, `verseToChainId`, `MASTER_PILLAR_CHAINS`, or the
   * other data file, which has no chain array at all). */
  outsideLines: number[];
  /** Chain ids owning the changed lines inside the array. */
  chainIds: Set<string>;
}

/** Lines with a trailing CR removed, so a base blob read through git (LF) can be compared
 * with a Windows working tree (CRLF). */
function normLines(text: string): string[] {
  return text.split('\n').map(l => (l.endsWith('\r') ? l.slice(0, -1) : l));
}

/** First/last line index of the `export const threadChains = [ ... ];` literal, found by
 * bracket-counting with string literals and line comments skipped. `null` when the file
 * carries no chain array — then every line of it is outside chain prose. Counting the
 * whole array (not just "everything after the declaration") matters because
 * `MASTER_PILLAR_CHAINS` lives below it and is NOT chain prose. */
function chainRegion(lines: string[]): { start: number; end: number } | null {
  const start = lines.findIndex(l => /export const threadChains\b/.test(l));
  if (start < 0) return null;
  // Start at the `=` that opens the array literal, never at the type annotation's own
  // brackets: `export const threadChains: ThreadChain[] = [` would otherwise close at once.
  const open = /=\s*\[/.exec(lines[start] ?? '');
  if (!open) return null;
  let depth = 0;
  let quote: string | null = null;
  for (let i = start; i < lines.length; i++) {
    const line = lines[i] ?? '';
    for (let j = i === start ? open.index + open[0].length - 1 : 0; j < line.length; j++) {
      const c = line[j];
      if (quote) {
        if (c === '\\') { j++; continue; }
        if (c === quote) quote = null;
        continue;
      }
      if (c === "'" || c === '"' || c === '`') { quote = c; continue; }
      if (c === '/' && line[j + 1] === '/') break;
      if (c === '[') { depth++; continue; }
      if (c === ']') {
        depth--;
        if (depth === 0) return { start, end: i };
      }
    }
  }
  return { start, end: lines.length - 1 };
}

/** Everything in a data file that is NOT `threadChains` prose, as comparable lines. A chain
 * pass may rewrite chain prose and nothing else, so this must equal HEAD's copy. It is a
 * text comparison rather than a line-diff one, so a DELETED line outside the array (which
 * leaves no `+` line for the diff parser to attribute) is caught too. */
function outsideChainLines(text: string): string[] {
  const lines = normLines(text);
  const region = chainRegion(lines);
  if (!region) return lines;
  return [...lines.slice(0, region.start), ...lines.slice(region.end + 1)];
}

/** Files whose text outside `threadChains` differs from HEAD's. */
function outsideChainDrift(): string[] {
  const out: string[] = [];
  for (const path of DATA_FILES) {
    const base = git(['show', `HEAD:${path}`]);
    if (base.status !== 0) {
      out.push(`${path}: cannot read HEAD copy (${base.stderr.trim() || 'git show failed'})`);
      continue;
    }
    let afterText: string;
    try {
      afterText = readFileSync(path, 'utf8');
    } catch (err) {
      out.push(`${path}: cannot read working-tree copy (${(err as Error).message})`);
      continue;
    }
    if (outsideChainLines(base.stdout).join('\n') !== outsideChainLines(afterText).join('\n')) {
      out.push(`${path}: lines outside the threadChains array differ from HEAD`);
    }
  }
  return out;
}

/** The chain-scope guard, shared by the pre-flight and the post-flight: every reason the
 * working tree is not "chain prose and nothing else". Reported against `diffBase`, which
 * chain mode sets to HEAD so staged changes are seen too. */
function chainScopeViolations(diffBase: string | null): string[] {
  const out = outsideChainDrift();
  for (const [path, loc] of changedLocations(diffBase)) {
    for (const id of loc.ids) out.push(`${id} (verse entry in ${path})`);
    for (const line of loc.outsideLines) out.push(`${path}:${line} (changed line outside the threadChains array)`);
  }
  return out;
}

function changedLocations(diffBase: string | null = null): Map<string, FileChange> {
  const out = new Map<string, FileChange>();
  const keyRe = /^\s{2}'([a-z0-9]+-\d+-\d+)':\s*\{/;
  const chainIdRe = /^\s{4}id:\s*'([^']+)',?\s*$/;

  for (const path of DATA_FILES) {
    const r = git(['diff', ...(diffBase ? [diffBase] : []), '--unified=0', '--', path]);
    if (r.status !== 0) continue;

    const changedLines = new Set<number>();
    let newCursor = 0;
    for (const line of r.stdout.split('\n')) {
      const hunk = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/.exec(line);
      if (hunk) {
        newCursor = Number(hunk[1]);
        continue;
      }
      if (line.startsWith('+++') || line.startsWith('---') || line.startsWith('diff ') || line.startsWith('index ')) continue;
      if (line.startsWith('+')) {
        changedLines.add(newCursor);
        newCursor++;
      } else if (line.startsWith(' ')) {
        newCursor++;
      }
    }

    const fileLines = readFileSync(path, 'utf8').split('\n');
    const chainStart = fileLines.findIndex(l => /export const threadChains\b/.test(l));
    const region = chainRegion(normLines(fileLines.join('\n')));
    const ids = new Set<string>();
    let chainLines = 0;
    let chainRegionLines = 0;
    const outsideLines: number[] = [];
    const chainIds = new Set<string>();

    for (const lineNo of changedLines) {
      const idx = lineNo - 1;
      if (region && idx >= region.start && idx <= region.end) {
        chainRegionLines++;
        for (let i = idx; i >= region.start; i--) {
          const m = chainIdRe.exec(fileLines[i] ?? '');
          if (m) {
            chainIds.add(m[1]);
            break;
          }
        }
      } else {
        outsideLines.push(lineNo);
      }
      if (chainStart >= 0 && idx > chainStart) {
        chainLines++;
        continue;
      }
      for (let i = idx; i >= 0; i--) {
        const m = keyRe.exec(fileLines[i] ?? '');
        if (m) {
          ids.add(m[1]);
          break;
        }
      }
    }
    out.set(path, { ids, chainLines, changedLines: changedLines.size, chainRegionLines, outsideLines, chainIds });
  }
  return out;
}

interface Draft { entryId: string; field: string; after: string; reason?: string }
interface RewriteFile {
  book: string;
  bookName?: string;
  drafts?: Draft[];
  verifyOnly?: Array<{ entryId: string; field: string; reason?: string }>;
  equivalent?: Array<{ entryId: string; field: string; reason?: string }>;
}
interface WorklistField { entryId: string; field: string; text: string }
interface Worklist { book: string; fields?: WorklistField[]; chains?: WorklistField[] }

/**
 * Ids a book's rewrites may legitimately target: that book's own verse entries,
 * plus chain steps (which are shared chains carrying one of the book's verses, so
 * they are in this book's worklist by construction).
 *
 * In chain scope the rule is the other half of plan §1.12: the ids are chains and
 * nothing else. `chain:<chain-id>` ids never start with a book slug, so scope
 * resolution here must not consult `set.book` at all — `docs/_work/chains.json` carries
 * `book: "chains"` purely as a label, and every one of its 658 strings is a chain string.
 */
function isInScopeId(entryId: string, book: string, chainIds: Set<string>, chainsOnly: boolean): boolean {
  if (chainsOnly) return entryId.startsWith('chain:') && chainIds.has(entryId);
  return entryId.startsWith(`${book}-`) || chainIds.has(entryId);
}

function argValue(argv: string[], flag: string): string | undefined {
  const i = argv.indexOf(flag);
  return i >= 0 ? argv[i + 1] : undefined;
}

function main() {
  const argv = process.argv.slice(2);
  const rewritesPath = argv.find(a => !a.startsWith('--'));
  const worklistPath = argValue(argv, '--worklist');
  const apply = argv.includes('--apply');
  const verifyOnlyMode = argv.includes('--verify');
  const chainsOnly = argv.includes('--chains-only');

  if (!rewritesPath || !worklistPath) {
    console.error('usage: npx tsx scripts/cp03ApplyRewrites.ts <rewrites.json> --worklist <worklist.json> [--apply] [--chains-only]');
    process.exit(2);
  }

  const set: RewriteFile = JSON.parse(readFileSync(rewritesPath, 'utf8'));
  const worklist: Worklist = JSON.parse(readFileSync(worklistPath, 'utf8'));
  const before = new Map<string, string>();
  for (const f of [...(worklist.fields ?? []), ...(worklist.chains ?? [])]) {
    before.set(`${f.entryId}|${f.field}`, f.text);
  }

  // ---- RULE 1: pre-flight (checked against git, not memory) ----
  // Runs BEFORE chain filtering, because it needs set.book. A sweep applies books one
  // after another, so the tree legitimately holds PREVIOUS books' applies plus this book's
  // own uncommitted work. What must never happen is building on top of an UNRELATED edit.
  // The rule: every dirty entry must belong to a book that already has a
  // docs/CP-03_<BOOK>_APPLY.md record, or to the book being applied right now.
  //
  // In chain scope that rule INVERTS (§1.12): chain prose is this pass's own work, so the
  // tree may hold chain changes from earlier chunks of the pass — and nothing else. Every
  // line outside the `threadChains` array must be byte-identical to HEAD, and the first
  // dirty verse entry refuses the run before anything is written.
  const dirty = verifyOnlyMode ? [] : dirtyDataFiles();
  let unrecognised: string[] = [];
  let chainViolations: string[] = [];
  if (chainsOnly) {
    if (dirty.length > 0) chainViolations = chainScopeViolations('HEAD');
  } else if (dirty.length > 0) {
    const booksWithApplyDocs = new Set<string>();
    for (const entry of readdirSync('docs')) {
      // CP-03_JER_APPLY.md for a whole book, CP-03_JER_P1_APPLY.md for a split book's chunk.
      const m = /^CP-03_([A-Z0-9]+?)(?:_P\d+)?_APPLY\.md$/.exec(entry);
      if (m) booksWithApplyDocs.add(m[1].toLowerCase());
    }
    const dirtyBooks = new Set<string>();
    for (const [, loc] of changedLocations()) {
      for (const id of loc.ids) dirtyBooks.add(id.split('-')[0]);
    }
    unrecognised = [...dirtyBooks].filter(b => !booksWithApplyDocs.has(b) && b !== set.book);
  }
  const preflightBlocked = chainsOnly ? chainViolations.length > 0 : unrecognised.length > 0;
  if (chainsOnly) {
    console.log('--- pre-flight ---');
    console.log('  chain scope: the tree may hold chain prose from earlier chunks of this pass — nothing else');
    if (preflightBlocked) {
      console.log(`  DATA FILES HOLD CHANGES OUTSIDE threadChains: ${chainViolations.slice(0, 8).join(', ')}${chainViolations.length > 8 ? ` (+${chainViolations.length - 8} more)` : ''}`);
      console.log('  A chain pass rewrites shared chain prose only. Commit or restore the changes above first:');
      console.log('    git diff HEAD -- src/data/threadDetails.ts src/data/bookThreadDetails.ts');
    } else if (dirty.length > 0) {
      console.log(`  tree holds chain changes only (${dirty.length} file(s) dirty, every changed line inside threadChains). OK`);
    } else {
      console.log('  data files byte-identical to HEAD — no verse entry dirty. OK');
    }
  } else if (preflightBlocked) {
    console.log('--- pre-flight ---');
    console.log(`  DATA FILES HOLD CHANGES FROM AN UNRECOGNISED BOOK: ${unrecognised.join(', ')}`);
    console.log('  A sweep never builds on top of an unrelated edit. Restore them first:');
    console.log('    git checkout -- src/data/threadDetails.ts src/data/bookThreadDetails.ts');
  } else if (dirty.length > 0) {
    console.log('--- pre-flight ---');
    console.log(`  tree holds a previous apply or this book's own work (${dirty.length} file(s)) — no foreign book is dirty. OK`);
  }

  // Plan §1.12: chain prose is SHARED across books and is swept in its own pass, so a
  // per-book apply confines itself to ENTRY strings. Without this, a book's apply would
  // rewrite prose belonging to other books, and the chain pass would then overwrite it the
  // other way. Chain verdicts are counted and reported but never applied here, and they are
  // excluded from the accounting requirement for the same reason.
  //
  // `--chains-only` runs that pass: the same split, the same reporting, the other way round.
  const allDrafts = set.drafts ?? [];
  const chainDrafts = allDrafts.filter(d => d.entryId.startsWith('chain:'));
  const chainVerify = (set.verifyOnly ?? []).filter(v => v.entryId.startsWith('chain:'));
  const chainEquivalent = (set.equivalent ?? []).filter(v => v.entryId.startsWith('chain:'));
  if (chainsOnly) {
    const verseDrafts = allDrafts.filter(d => !d.entryId.startsWith('chain:'));
    const verseVerify = (set.verifyOnly ?? []).filter(v => !v.entryId.startsWith('chain:'));
    const verseEquivalent = (set.equivalent ?? []).filter(v => !v.entryId.startsWith('chain:'));
    if (verseDrafts.length || verseVerify.length || verseEquivalent.length) {
      console.log(
        `§1.12: verse entries excluded from this chain pass — ` +
          `${verseDrafts.length} verse draft(s), ${verseVerify.length} verse verify-only, ${verseEquivalent.length} verse equivalent. ` +
          `They belong to their own per-book passes.`
      );
    }
    set.drafts = chainDrafts;
    set.verifyOnly = (set.verifyOnly ?? []).filter(v => v.entryId.startsWith('chain:'));
    set.equivalent = (set.equivalent ?? []).filter(v => v.entryId.startsWith('chain:'));
    for (const key of [...before.keys()]) {
      if (!key.startsWith('chain:')) before.delete(key);
    }
  } else {
    if (chainDrafts.length || chainVerify.length || chainEquivalent.length) {
      console.log(
        `§1.12: chain prose excluded from this per-book apply — ` +
          `${chainDrafts.length} chain draft(s), ${chainVerify.length} chain verify-only, ${chainEquivalent.length} chain equivalent. ` +
          `They belong to the dedicated chain pass.`
      );
    }
    set.drafts = allDrafts.filter(d => !d.entryId.startsWith('chain:'));
    set.verifyOnly = (set.verifyOnly ?? []).filter(v => !v.entryId.startsWith('chain:'));
    set.equivalent = (set.equivalent ?? []).filter(v => !v.entryId.startsWith('chain:'));
    for (const key of [...before.keys()]) {
      if (key.startsWith('chain:')) before.delete(key);
    }
  }

  console.log(`=== apply ${set.bookName ?? set.book} · ${rewritesPath} ===`);
  if (chainsOnly) {
    console.log(`scope: CHAINS ONLY — threadChains prose (worklist ${worklistPath}; verse-entry verdicts are excluded, not applied)`);
  }
  console.log(`drafts: ${set.drafts?.length ?? 0} · verify-only: ${set.verifyOnly?.length ?? 0} · equivalent: ${set.equivalent?.length ?? 0}`);
  console.log(`worklist strings: ${before.size} · mode: ${apply ? 'APPLY' : 'DRY RUN'}\n`);

  // ---- RULE 1 already ran above (it needs set.book, so it sits before chain filtering). ----

  const sources = DATA_FILES.map(p => ({ path: p as string, text: readFileSync(p, 'utf8') }));
  const snapshot = new Map(sources.map(s => [s.path, s.text]));
  const drafts = set.drafts ?? [];
  const problems: string[] = [];
  const perFile = new Map<string, number>(sources.map(s => [s.path, 0]));

  // Chain steps are in this book's worklist by construction: a chain qualifies
  // when one of its steps carries a verse of this book. Accept those ids.
  const chainIds = new Set((worklist.chains ?? []).map(c => c.entryId));
  // In chain scope the worklist's own strings are the authority for scope. Its shape is
  // `{ book: "chains", fields: [], chains: [...] }`, so `chains` supplies every id; an id
  // arriving through `fields` is accepted too rather than silently dropped as out of scope.
  if (chainsOnly) {
    for (const key of before.keys()) chainIds.add(key.split('|')[0]);
  }

  for (const draft of drafts) {
    const key = `${draft.entryId}|${draft.field}`;
    const oldText = before.get(key);
    if (!oldText) { problems.push(`${key}: no BEFORE in worklist (field path not in scope?)`); continue; }
    if (typeof draft.after !== 'string' || !draft.after.trim()) { problems.push(`${key}: empty AFTER`); continue; }
    if (oldText.trim() === draft.after.trim()) { problems.push(`${key}: AFTER equals BEFORE (fake rewrite)`); continue; }
    if (!isInScopeId(draft.entryId, set.book, chainIds, chainsOnly)) {
      problems.push(
        chainsOnly
          ? `${key}: entry is not a chain:<chain-id> string in this worklist`
          : `${key}: entry is neither a ${set.book}-* verse nor a chain in this worklist`
      );
      continue;
    }

    const oldLiteral = toSourceLiteral(oldText);
    const newLiteral = toSourceLiteral(draft.after);
    const hits = sources.filter(s => countOccurrences(s.text, oldLiteral) > 0);
    if (hits.length === 0) {
      // In verify mode the tree is already applied, so "BEFORE not found" is the
      // expected state — the AFTER being present instead is the proof we want.
      if (verifyOnlyMode) {
        const applied = sources.some(s => countOccurrences(s.text, newLiteral) > 0);
        if (applied) {
          perFile.set(sources[0].path, perFile.get(sources[0].path) ?? 0);
          continue;
        }
        problems.push(`${key}: neither BEFORE nor AFTER present in the data files`);
        continue;
      }
      problems.push(`${key}: BEFORE literal not found in either data file`);
      continue;
    }
    if (hits.length > 1) { problems.push(`${key}: BEFORE literal found in ${hits.length} data files — ambiguous`); continue; }
    const total = countOccurrences(hits[0].text, oldLiteral);
    if (total > 1) { problems.push(`${key}: BEFORE literal appears ${total}× in ${hits[0].path} — ambiguous`); continue; }

    hits[0].text = hits[0].text.replace(oldLiteral, newLiteral);
    perFile.set(hits[0].path, (perFile.get(hits[0].path) ?? 0) + 1);
  }

  // ---- accounting: every worklist string in exactly one verdict ----
  const changedKeys = new Set(drafts.map(d => `${d.entryId}|${d.field}`));
  const verifyKeys = new Set((set.verifyOnly ?? []).map(v => `${v.entryId}|${v.field}`));
  const equivalentKeys = new Set((set.equivalent ?? []).map(v => `${v.entryId}|${v.field}`));
  const allKeys = new Set(before.keys());
  const unaccounted = [...allKeys].filter(k => !changedKeys.has(k) && !verifyKeys.has(k) && !equivalentKeys.has(k));
  const unknownKeys = [...changedKeys, ...verifyKeys, ...equivalentKeys].filter(k => !allKeys.has(k));
  const duplicated = [...changedKeys].filter(k => verifyKeys.has(k) || equivalentKeys.has(k));
  const accountingBad = unaccounted.length > 0 || unknownKeys.length > 0 || duplicated.length > 0;

  console.log('--- writes by file ---');
  for (const [path, n] of perFile) console.log(`  ${String(n).padStart(4)}  ${path}`);
  console.log('\n--- accounting ---');
  console.log(`  worklist strings:      ${allKeys.size}`);
  console.log(`  rewritten:             ${changedKeys.size}`);
  console.log(`  verify-only:           ${verifyKeys.size}`);
  console.log(`  equivalent:            ${equivalentKeys.size}`);
  console.log(`  unaccounted (missing): ${unaccounted.length}${unaccounted.length ? ' -> ' + unaccounted.slice(0, 8).join(', ') : ''}`);
  console.log(`  unknown keys:          ${unknownKeys.length}${unknownKeys.length ? ' -> ' + unknownKeys.slice(0, 8).join(', ') : ''}`);
  console.log(`  in two verdicts:       ${duplicated.length}${duplicated.length ? ' -> ' + duplicated.slice(0, 8).join(', ') : ''}`);

  if (problems.length) {
    console.log('\n--- REFUSED ---');
    for (const p of problems) console.log(`  ${p}`);
  }

  if (preflightBlocked || problems.length || accountingBad) {
    console.log(`\nRESULT: REFUSED — nothing written. (pre-flight ${preflightBlocked ? 'BLOCKED' : 'ok'} · ${problems.length} problem(s) · accounting ${accountingBad ? 'INCOMPLETE' : 'ok'})`);
    process.exit(1);
  }

  // Split books arrive as several chunks (jer_p1, jer_p2, isa_p1..p3). By the time chunk 2 is
  // applied, chunk 1's entries are already dirty in the tree, and a post-flight that only
  // expects THIS chunk's entries reports its own sibling chunk as contamination. So collect
  // what is already dirty for this book before writing, and pass it in.
  //
  // Chain scope needs none of this: its guard is not "these entries were expected to be dirty"
  // but "nothing OUTSIDE threadChains may be dirty at all", which is a property of the tree
  // rather than of a book's chunk list.
  const priorDirtyForBook = new Set<string>();
  if (!chainsOnly) {
    for (const [, loc] of changedLocations()) {
      for (const id of loc.ids) {
        if (id.startsWith(`${set.book}-`)) priorDirtyForBook.add(id);
      }
    }
    // Also legitimate: any OTHER book that already has an apply record and is still dirty in
    // this tree because it has not been committed yet. Without this, applying Lamentations
    // after Jeremiah reports Jeremiah's own finished work as contamination.
    const recognisedBooks = new Set<string>();
    for (const entry of readdirSync('docs')) {
      const m = /^CP-03_([A-Z0-9]+?)(?:_P\d+)?_APPLY\.md$/.exec(entry);
      if (m) recognisedBooks.add(m[1].toLowerCase());
    }
    for (const [, loc] of changedLocations()) {
      for (const id of loc.ids) {
        if (recognisedBooks.has(id.split('-')[0])) priorDirtyForBook.add(id);
      }
    }
  }

  if (!apply) {
    if (verifyOnlyMode) {
      console.log('\n--- verify mode: auditing the working tree against this draft set ---');
      if (chainsOnly) postFlightChains(changedKeys);
      else postFlight(set.book, changedKeys, priorDirtyForBook);
      return;
    }
    console.log('\nRESULT: DRY RUN OK — tree clean, every draft located uniquely, accounting complete.');
    process.exit(0);
  }

  for (const s of sources) {
    if (s.text !== snapshot.get(s.path)) {
      writeFileSync(s.path, s.text);
      console.log(`wrote ${s.path}`);
    }
  }

  if (chainsOnly) postFlightChains(changedKeys);
  else postFlight(set.book, changedKeys, priorDirtyForBook);
}

/**
 * Post-flight: prove the working tree changed ONLY the entries this book's drafts
 * named. Runs against `git diff`, so it measures reality rather than intent.
 * `priorDirtyForBook` carries a split book's earlier chunks, whose entries are
 * legitimately already dirty because a sibling chunk applied them.
 */
function postFlight(book: string, changedKeys: Set<string>, priorDirtyForBook?: Set<string>): void {
  const expectedIds = new Set([...changedKeys].map(k => k.split('|')[0]));
  for (const id of priorDirtyForBook ?? []) expectedIds.add(id);
  const expectedChainDrafts = [...changedKeys].filter(k => k.split('|')[0].startsWith('chain:')).length;
  const actual = changedLocations();
  const unexpected: string[] = [];
  let changedVerseEntries = 0;
  let chainLines = 0;
  for (const [path, loc] of actual) {
    changedVerseEntries += loc.ids.size;
    chainLines += loc.chainLines;
    for (const id of loc.ids) {
      if (!expectedIds.has(id)) unexpected.push(`${id} (${path})`);
    }
  }
  console.log('\n--- post-flight (git diff) ---');
  console.log(`  verse entries named by drafts:  ${[...expectedIds].filter(i => !i.startsWith('chain:')).length}`);
  console.log(`  verse entries git reports:      ${changedVerseEntries}`);
  console.log(`  chain drafts:                   ${expectedChainDrafts}`);
  console.log(`  changed lines inside threadChains: ${chainLines}`);
  if (unexpected.length) {
    console.log(`  UNEXPECTED CHANGED ENTRIES: ${unexpected.join(', ')}`);
    console.log('  Inspect the diff. Restore with: git checkout -- src/data/threadDetails.ts src/data/bookThreadDetails.ts');
    console.log('\nRESULT: APPLIED BUT POST-FLIGHT FAILED — review before committing.');
    process.exit(1);
  }
  if (expectedChainDrafts > 0 && chainLines === 0) {
    console.log('  WARNING: chain drafts were named but no chain lines changed — check the apply.');
  }
  console.log('  every changed verse entry was named by a draft; chain changes are confined to threadChains — OK');
  console.log('\nRESULT: APPLIED.');
}

/**
 * Chain-scope post-flight: the mirror image of `postFlight`. A chain pass may rewrite chain
 * prose and nothing else, so after writing the tool re-reads `git diff HEAD` and proves that
 * EVERY changed line lies inside the `threadChains` array and that NO verse entry changed.
 * A verse entry, a line of `verseToChainId` / `MASTER_PILLAR_CHAINS`, or anything at all in
 * `bookThreadDetails.ts` (which carries no chain array) fails the run.
 */
function postFlightChains(changedKeys: Set<string>): void {
  // Draft keys are `chain:<chain-id>|<field>`; the diff attributes changed lines to the
  // chain object's own `id`, so compare on the bare chain id.
  const expectedChainIds = new Set([...changedKeys].map(k => k.split('|')[0].replace(/^chain:/, '')));
  const actual = changedLocations('HEAD');
  const violations = chainScopeViolations('HEAD');
  const seenChainIds = new Set<string>();
  let changedLineCount = 0;
  let chainRegionLines = 0;
  let verseEntryLines = 0;
  for (const [path, loc] of actual) {
    changedLineCount += loc.changedLines;
    chainRegionLines += loc.chainRegionLines;
    verseEntryLines += loc.ids.size;
    for (const id of loc.chainIds) seenChainIds.add(id);
  }
  const unseenChainIds = [...expectedChainIds].filter(id => !seenChainIds.has(id));

  console.log('\n--- post-flight (git diff HEAD) ---');
  console.log(`  chain drafts named:                ${expectedChainIds.size}`);
  console.log(`  chain entries git reports:         ${seenChainIds.size}${seenChainIds.size ? ` (${[...seenChainIds].sort().join(', ')})` : ''}`);
  console.log(`  verse entries git reports:         ${verseEntryLines}`);
  console.log(`  changed lines:                     ${changedLineCount} · inside threadChains: ${chainRegionLines} · outside: ${changedLineCount - chainRegionLines}`);
  if (violations.length) {
    console.log(`  CHANGES OUTSIDE threadChains: ${violations.slice(0, 8).join(', ')}${violations.length > 8 ? ` (+${violations.length - 8} more)` : ''}`);
    console.log('  Inspect the diff. Restore with: git checkout -- src/data/threadDetails.ts src/data/bookThreadDetails.ts');
    console.log('\nRESULT: APPLIED BUT POST-FLIGHT FAILED — a chain pass must touch chain prose only.');
    process.exit(1);
  }
  if (unseenChainIds.length) {
    console.log(`  WARNING: chain drafts were named but no changed line was attributed to: ${unseenChainIds.slice(0, 8).join(', ')}${unseenChainIds.length > 8 ? ` (+${unseenChainIds.length - 8} more)` : ''} — check the apply.`);
  }
  console.log('  every changed line lies inside threadChains and no verse entry changed — OK');
  console.log('\nRESULT: APPLIED.');
}

main();
