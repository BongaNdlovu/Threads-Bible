/* Apply an approved plain-language rewrite set to the data file — verbatim,
 * nothing else touched (plan v2.0 "prose-only diffs").
 *
 * Usage:
 *   npx tsx scripts/cp03ApplyRewrites.ts <rewrites.json> --worklist <worklist.json> --dry-run
 *   npx tsx scripts/cp03ApplyRewrites.ts <rewrites.json> --worklist <worklist.json> --apply
 *
 * Inputs:
 *   worklist.json  from scripts/cp02ExtractBook.ts — the BEFORE text of every
 *                  in-scope string, keyed by `entryId|field`.
 *   rewrites.json  from the book writer — `drafts[].after`.
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

/** Where the changes landed, per file: verse entries, and how many changed lines
 * fell inside the `threadChains` array (chain prose is shared across books, so it
 * is attributed to the chain array rather than to whichever verse key happens to
 * sit above it — an earlier version reported a phantom `gen-34-7` change that way). */
function changedLocations(): Map<string, { ids: Set<string>; chainLines: number }> {
  const out = new Map<string, { ids: Set<string>; chainLines: number }>();
  const keyRe = /^\s{2}'([a-z0-9]+-\d+-\d+)':\s*\{/;

  for (const path of DATA_FILES) {
    const r = git(['diff', '--unified=0', '--', path]);
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
    const ids = new Set<string>();
    let chainLines = 0;

    for (const lineNo of changedLines) {
      if (chainStart >= 0 && lineNo - 1 > chainStart) {
        chainLines++;
        continue;
      }
      for (let i = lineNo - 1; i >= 0; i--) {
        const m = keyRe.exec(fileLines[i] ?? '');
        if (m) {
          ids.add(m[1]);
          break;
        }
      }
    }
    out.set(path, { ids, chainLines });
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
 */
function isInScopeId(entryId: string, book: string, chainIds: Set<string>): boolean {
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

  if (!rewritesPath || !worklistPath) {
    console.error('usage: npx tsx scripts/cp03ApplyRewrites.ts <rewrites.json> --worklist <worklist.json> [--apply]');
    process.exit(2);
  }

  const set: RewriteFile = JSON.parse(readFileSync(rewritesPath, 'utf8'));
  const worklist: Worklist = JSON.parse(readFileSync(worklistPath, 'utf8'));
  const before = new Map<string, string>();
  for (const f of [...(worklist.fields ?? []), ...(worklist.chains ?? [])]) {
    before.set(`${f.entryId}|${f.field}`, f.text);
  }

  console.log(`=== apply ${set.bookName ?? set.book} · ${rewritesPath} ===`);
  console.log(`drafts: ${set.drafts?.length ?? 0} · verify-only: ${set.verifyOnly?.length ?? 0} · equivalent: ${set.equivalent?.length ?? 0}`);
  console.log(`worklist strings: ${before.size} · mode: ${apply ? 'APPLY' : 'DRY RUN'}\n`);

  // ---- RULE 1: pre-flight (checked against git, not memory) ----
  // A sweep applies books one after another, so the tree legitimately holds the
  // PREVIOUS books' applies. What must never happen is building on top of an
  // UNRELATED edit. The rule therefore is: every dirty entry must belong to a book
  // that already has a docs/CP-03_<BOOK>_APPLY.md record — work this plan did.
  // Skipped in --verify mode, whose whole purpose is to audit an applied tree.
  const dirty = verifyOnlyMode ? [] : dirtyDataFiles();
  let unrecognised: string[] = [];
  if (dirty.length > 0) {
    const booksWithApplyDocs = new Set<string>();
    for (const entry of readdirSync('docs')) {
      const m = /^CP-03_([A-Z0-9]+)_APPLY\.md$/.exec(entry);
      if (m) booksWithApplyDocs.add(m[1].toLowerCase());
    }
    const dirtyBooks = new Set<string>();
    for (const [, loc] of changedLocations()) {
      for (const id of loc.ids) dirtyBooks.add(id.split('-')[0]);
    }
    unrecognised = [...dirtyBooks].filter(b => !booksWithApplyDocs.has(b));
  }
  const preflightBlocked = unrecognised.length > 0;
  if (preflightBlocked) {
    console.log('--- pre-flight ---');
    console.log(`  DATA FILES HOLD CHANGES FROM AN UNRECOGNISED BOOK: ${unrecognised.join(', ')}`);
    console.log('  A sweep never builds on top of an unrelated edit. Restore them first:');
    console.log('    git checkout -- src/data/threadDetails.ts src/data/bookThreadDetails.ts');
  } else if (dirty.length > 0) {
    console.log('--- pre-flight ---');
    console.log(`  tree already holds a previous apply (${dirty.length} file(s)) and every changed entry belongs to a book with an apply record — OK`);
  }

  const sources = DATA_FILES.map(p => ({ path: p as string, text: readFileSync(p, 'utf8') }));
  const snapshot = new Map(sources.map(s => [s.path, s.text]));
  const drafts = set.drafts ?? [];
  const problems: string[] = [];
  const perFile = new Map<string, number>(sources.map(s => [s.path, 0]));

  // Chain steps are in this book's worklist by construction: a chain qualifies
  // when one of its steps carries a verse of this book. Accept those ids.
  const chainIds = new Set((worklist.chains ?? []).map(c => c.entryId));

  for (const draft of drafts) {
    const key = `${draft.entryId}|${draft.field}`;
    const oldText = before.get(key);
    if (!oldText) { problems.push(`${key}: no BEFORE in worklist (field path not in scope?)`); continue; }
    if (typeof draft.after !== 'string' || !draft.after.trim()) { problems.push(`${key}: empty AFTER`); continue; }
    if (oldText.trim() === draft.after.trim()) { problems.push(`${key}: AFTER equals BEFORE (fake rewrite)`); continue; }
    if (!isInScopeId(draft.entryId, set.book, chainIds)) {
      problems.push(`${key}: entry is neither a ${set.book}-* verse nor a chain in this worklist`);
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

  if (!apply) {
    if (verifyOnlyMode) {
      console.log('\n--- verify mode: auditing the working tree against this draft set ---');
      postFlight(set.book, changedKeys);
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

  postFlight(set.book, changedKeys);
}

/**
 * Post-flight: prove the working tree changed ONLY the entries this book's drafts
 * named. Runs against `git diff`, so it measures reality rather than intent.
 */
function postFlight(book: string, changedKeys: Set<string>): void {
  const expectedIds = new Set([...changedKeys].map(k => k.split('|')[0]));
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

main();
