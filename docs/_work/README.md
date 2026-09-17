# `docs/_work/` — the sweep's machine-readable working set

This directory is the plain-language sweep's working data: the worklists the writers were given, the
draft sets they delivered, the merged chain set, the ruled repairs, and the ad-hoc audit scripts used to
check them. It is committed so the draft-level audit trail lives in git rather than only in the
generated appendices.

**The human-readable record is elsewhere.** `docs/CP-02_<BOOK>_DRAFT.md` (BEFORE/AFTER per string) and
`docs/CP-03_<BOOK>_APPLY.md` (the applier's pre-flight, accounting and post-flight proofs) are the
documents to read. This directory holds the inputs and outputs those documents were generated from.

## Naming

| Pattern | What it is |
|---|---|
| `<slug>.json` | a book's worklist, produced by `npx tsx scripts/cp02ExtractBook.ts <slug>`: every in-scope prose string with its gate verdict, word/sentence counts and density score, plus the pillar chains carrying that book's verses |
| `<slug>_p1.json`, `_p2`, `_p3` | chunked worklists for the large books (Isaiah, Jeremiah, Ezekiel, Daniel, Matthew, Revelation), split with `cp02SplitWorklist.ts --fields-only` |
| `<slug>_rewrites.json`, `<slug>_pN_rewrites.json` | the delivered draft set for that chunk: `drafts` (the writer changed it), `verifyOnly` (left byte-identical, with a reason), `equivalent` (unused in this sweep) |
| `chains_gA.json` … `chains_gF.json` | the six Stage A.5 chain-group worklists (36 chains, 658 strings, balanced by size) |
| `chains_gA_rewrites.json` … `_gF_rewrites.json` | the six chain-group draft sets |
| `chains.json` | the merged, de-duplicated chain worklist re-derived from the tree after the last book |
| `chains_rewrites.json` | the merged chain draft set that was actually applied |
| `<slug>_repair.json`, `chains_repair.json` | the operator-ruled repairs (never-write register, Exodus label punctuation) |
| `_*.mts` | throwaway audit scripts, described below |

## Caveats worth knowing before trusting a file

1. **A worklist is a snapshot, not living state.** `<slug>.json` records the text at extraction time. For
   books extracted before their own apply, it is the *pre-apply* text; for the repair files it is the
   post-apply text. The apply records in `docs/CP-03_*_APPLY.md` state which worklist each apply used.
2. **`chains_gF_rewrites.json` is a post-apply revision.** Its writer rewrote it after the chain pass had
   already applied the earlier revision, so it records all 114 of its strings as `verifyOnly` with the
   ~20 already-committed rewrites marked "ALREADY-COMMITTED REWRITE". Accurate as a post-apply
   statement, misleading as a pre-apply one. See `docs/CP-03_CHAIN_PASS.md`.
3. **Stage A chain rows in book files were never applied.** Twelve book passes classified chain strings
   (382 rows). The applier excludes chain prose from a per-book apply by design (§1.12), so those rows
   are inputs to Stage A.5, not records of changes.
4. **Some drafts were superseded before the apply.** Where a writer revised a set after it was applied,
   the tree is older than the file; the correction pass that reconciled those is recorded per book in the
   sweep log (`docs/COMPLETION_PLAN.md`) and in `docs/CP-03_LABEL_REPAIR.md`.

## The audit scripts

These were written to answer one question each and are kept because they document how the checks were
made. They are not part of the pipeline and nothing imports them.

| Script | What it answers |
|---|---|
| `_labelCheck.mts` | does any draft add, drop or rename a structural label (`First principle:`, `Textual proof:`, `WHAT`, …)? |
| `_citeDiff.mts` | does any draft add, drop or renumber a citation token? |
| `_quoteFixCheck.mts` | does any draft alter a 4+ word quoted span? (heuristic: it pairs quote marks, so nested and trailing-punctuation hits need eyeballing — all 5 hits it reports were inspected and cleared) |
| `_abbrevScan.mts` | does any draft expand an abbreviation (`NT`, `OT`, `LXX`, `KJV`, `YHWH`, …)? It also carries the one-off fix for `chain:melchizedek-priesthood` |
| `_chainWorklist.mts` | rebuild the global chain worklist by unioning the per-book worklists |
| `_chainGroups.mts` | split the chain worklist into six balanced writer groups |
| `_chainMerge.mts` | merge the six group draft sets and prove every chain string is classified exactly once |
| `_chainGate.mts` | gate census over the chain corpus |
| `_labelRepair.mts` | for an applied book, emit the correction set: the drafts whose delivered text differs from the tree |
| `_reasonNotes.mts` | annotate the six draft reasons that describe a pre-repair text |
| `_defectScan.mts`, `_liveScan.mts`, `_lastTwo.mts` | enumerate the never-write and bare-term defects in the live tree |
| `_buildRepairs.mts`, `_buildExoFix.mts` | author the ruled repair sets |
| `_nameTruth.mts`, `_nameOrdinals.mts`, `_gFCheck.mts`, `_revertPhantom.mts`, `_revertPhantom2.mts`, `_fixFifth.mts` | the chain-name investigation — including the mis-scoped audit that produced a false alarm and its revert; see `docs/CP-03_CHAIN_PASS.md` |
| `_deuGloss.mts` | pinpointed the test string that a concurrent commit swept into HEAD |
| `_syncChainNames.mts` | a no-op kept for the record: it looked for chain-name drafts that did not exist |
| `_ordinalCensus.mts`, `_rev181.mts` | one-off inspections |

## Reproducing the pipeline

```
npx tsx scripts/cp02ExtractBook.ts <slug> --json docs/_work/<slug>.json
npx tsx scripts/cp02SplitWorklist.ts <slug> <parts> --fields-only
npx tsx scripts/cp02RewriteQuality.ts docs/_work/<slug>_rewrites.json --worklist docs/_work/<slug>.json
npx tsx scripts/cp03ApplyRewrites.ts docs/_work/<slug>_rewrites.json --worklist docs/_work/<slug>.json --dry-run
npx tsx scripts/cp03ApplyRewrites.ts docs/_work/<slug>_rewrites.json --worklist docs/_work/<slug>.json --apply
npx tsx scripts/cp03StructuralVerify.ts --book <slug>          # eight checks, exit 0 required
npx tsx scripts/cp05Consistency.ts [--book <slug>]             # glossary and never-write census
```
