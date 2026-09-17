# CP-06 · Whole-canon plain-language Change Report

Plan: `THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v2.0.md`
Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`
Date: 2026-09-17
Status: Stage A complete, Stage A.5 in progress, Stage B closeout in progress. Two sections at the end
of this document are appended when their passes finish.

## 1 · What was asked, and what was delivered

The plan's target was a single execution pass — Stage 0 → Stage A (every remaining book) → Stage B
closeout — that rewrites the app's own prose into plain language without touching Scripture, without
bloating the data, and without stopping to ask. The unit of work was one book: rewrite, verify, commit,
log, next.

| Deliverable | Result |
|---|---|
| Stage 0 calibration (CP-00, CP-01, CP-02) | Complete — `CP-00_BOOTSTRAP_V2.md`, `CP-01_FULL_CANON_BASELINE_V2.md`, `CP-02_CALIBRATION_SAMPLE.md` |
| Voice lock | Approved by the operator; the punctuation-only class is kept and reported, quotation fidelity is unchanged in this sweep with findings queued here |
| Stage A books | **60 of 60** (Deuteronomy → Revelation), one commit per book |
| Stage A entry strings | **2,357 rewritten or verified**: 1,071 rewritten, 1,286 verify-only, 0 EQUIVALENT |
| Stage A.5 pillar chains | 36 chains, 658 strings — see §7 |
| CHK-01 (type gate) | Resolved: `npm run lint:sweep` type-checks the sweep's own code via an explicit `files` allowlist, without the operator's two pre-existing broken appendix scripts |
| Stage B regression (CP-04) | Complete — `CP-04_FULL_REGRESSION.md` |
| Stage B triage (CP-05) | Rollup complete — `CP-05_TRIAGE_QUEUE.md`; consistency read in progress, see §8 |
| Model-pin deviation | Recorded in CP-00 and repeated in §6 below |
| Operator's pre-existing uncommitted changes | Untouched — see §5 |

## 2 · Books completed

Sixty Stage A books, plus three calibration books rewrote under the same rules during Stage 0
(Numbers, Psalms, Romans), plus Genesis, Exodus and Leviticus which were completed before this plan and
which this sweep did not modify.

Every Stage A book ran the same loop: extract the book's in-scope strings → a writer agent produces a
draft set → the applier pre-flights and applies → the structural verifier proves only in-scope prose
moved → the quality classifier reports the rewrite share → gate, tests and audit → the book's CP-02
draft/summary and CP-03 apply record → a sweep-log row → one commit. The per-book rows, in application
order, are the table in `docs/COMPLETION_PLAN.md`.

Deviations from canonical order, all recorded in the log rather than hidden:

- Zechariah was applied 41st although canonically it sits between Haggai and Malachi, because its draft
  set was the last Old Testament set delivered and the pass never applies a book from an incomplete
  writer file.
- James was applied before the Pastoral Epistles for the same reason.

## 3 · Entries touched, and what was deliberately not touched

| Measure | Value |
|---|---:|
| Stage A entries | 969 |
| Stage A entries whose prose was in scope | 969 (2,357 strings) |
| Strings rewritten | 1,071 |
| Strings verify-only | 1,286 |
| EQUIVALENT | 0 |
| Verify-only share of in-scope strings | 54.6% |

**The EQUIVALENT inventory is empty, and that is a finding, not an omission.** The plan's ledger had a
bucket for strings a reviewer judged already at standard but wanted recorded separately. Every writer
used `verifyOnly` for that purpose instead, with a per-string reason naming the word count, the
sentence count and what is carried byte-identical. The effect is the same and the trail is arguably
better — 1,286 individual reasons instead of one bucket — but the operator should know that the
`EQUIVALENT` count of 0 does not mean nothing was left alone; it means 1,286 things were, each with its
reason on the record.

The 54.6% verify-only share is the intended shape of the sweep. §1.11 requires a string that already
meets the standard to be recorded rather than rewritten, and the density ranking aimed effort at the
densest strings first. A sweep whose rewrite share approached 100% would be punctuation theatre, which
is the failure mode the plan's §0.7 exists to prevent.

## 4 · Review queue

Two kinds of finding came out of the sweep and they must not be confused with each other.

**Findings the sweep produced — 77 in total, all in Stage A scope:**

| Kind | Count | Meaning |
|---|---:|---|
| `QUOTE-REVIEW` | 76 | the existing text's quotation does not match the served KJV at that verse |
| `THEOLOGY-REVIEW` | 1 | wording the operator should confirm (`mat-4-6`, the devil's quotation of Psalm 91) |

Each `QUOTE-REVIEW` records the source reading and the canon reading in the draft's `reason` and leaves
the quotation **byte-identical**. Nothing was "restored", because restoring a quotation to canon is
exactly the modernisation invariant I1 forbids. The classes that recur: the Septuagint or mixed text
form behind a New Testament quotation (Matthew, Hebrews), compressed or loosely-paraphrased renderings
in a title, divine-pronoun capitalisation where the canon prints lower case, and the app's own house
style of closing a verse's semicolon with a full stop.

Findings per book, so the operator can go straight to the books that need a read. Books not listed
produced none:

| Book | rewritten | verify-only | QUOTE-REVIEW | THEOLOGY-REVIEW |
|---|---:|---:|---:|---:|
| Romans | 81 | 81 | 2 | 0 |
| Deuteronomy | 37 | 37 | 1 | 0 |
| 1 Kings | 21 | 1 | 1 | 0 |
| Nehemiah | 5 | 1 | 1 | 0 |
| Job | 11 | 15 | 1 | 0 |
| Ecclesiastes | 8 | 8 | 1 | 0 |
| Isaiah | 139 | 133 | 2 | 0 |
| Ezekiel | 31 | 43 | 2 | 0 |
| Daniel | 47 | 49 | 1 | 0 |
| Amos | 9 | 13 | 1 | 0 |
| Jonah | 5 | 7 | 2 | 0 |
| Micah | 10 | 10 | 1 | 0 |
| Nahum | 4 | 8 | 1 | 0 |
| Haggai | 6 | 6 | 1 | 0 |
| Malachi | 10 | 22 | 1 | 0 |
| Matthew | 66 | 66 | 6 | 1 |
| Mark | 16 | 16 | 8 | 0 |
| Luke | 25 | 25 | 9 | 0 |
| John | 14 | 56 | 1 | 0 |
| Acts | 9 | 47 | 1 | 0 |
| 1 Corinthians | 44 | 46 | 1 | 0 |
| Galatians | 18 | 26 | 4 | 0 |
| Ephesians | 23 | 29 | 1 | 0 |
| Philippians | 15 | 21 | 1 | 0 |
| Colossians | 23 | 25 | 7 | 0 |
| 1 Thessalonians | 14 | 14 | 2 | 0 |
| 1 Timothy | 14 | 14 | 1 | 0 |
| Hebrews | 43 | 61 | 2 | 0 |
| James | 12 | 10 | 2 | 0 |
| 1 Peter | 15 | 17 | 2 | 0 |
| 2 Peter | 8 | 6 | 1 | 0 |
| 1 John | 10 | 12 | 1 | 0 |
| Revelation | 112 | 124 | 7 | 0 |

The density is not uniform and the reason is structural: Mark, Luke, Colossians and Revelation are the
books whose existing text paraphrases Scripture most loosely, and Matthew's six findings plus its one
THEOLOGY-REVIEW reflect a Gospel that quotes the Septuagint and a mixed text form rather than the KJV.
The single THEOLOGY-REVIEW is `mat-4-6`, where the devil's quotation of Psalm 91 is compressed in a way
the operator should confirm.

**Findings already in the repository — 27 markers in `docs/CP-05_TRIAGE_QUEUE.md`**, concentrated in
Genesis and Leviticus, which are the operator's own pre-plan appendix documents. They are in the triage
queue because the rollup reads every `CP-02_*` doc in the repo; they are not products of this sweep.
Section 2 of the triage queue groups them by severity (8 citation, 5 blocking-claim, 14 wording). One
entry in that list is not a string at all: it is the parser reading a MAT P1 front-matter row.

The rollup also reports 1,133 entries "mentioned in a doc but never drafted" and 1 "unaccounted". Both
are artefacts of the rollup's counting basis: it reads the appendix documents, and those documents cover
the strings a pass had in scope, while the canon's hand-written entry count is 1,356 (173 in
`threadDetails.ts` + 1,183 in `bookThreadDetails.ts`) and the whole-canon prose scan counts 1,580
entries once thread nodes and detail-only entries are included. The authoritative accounting is §3
above, which closes exactly.

## 5 · What the sweep did not touch

- **Scripture.** Invariant I1 held: every quotation inside quotation marks is byte-identical to the text
  already in the data, and 76 divergences were logged rather than corrected. Where a draft put quotation
  marks around a KJV clause that was previously running as app prose, the words inside are unchanged —
  that is the plan's own sanctioned fix pattern, and it is how several gate failures were cleared.
- **Everything structural.** The per-book verifier proves, against each book's own pre-apply commit, that
  the entry key set is identical, every non-prose field is byte-identical (keyword arrays and their
  order, `terms[].original`/`translit`/`strongs`, refs, verseId, testament, chainId, draft flag), only
  in-scope prose strings changed, every citation token survives, every Hebrew/Greek run, transliteration
  and Strong's number survives, no new clarity-gate failure appears, and no structural label was added,
  dropped or renamed.
- **Files outside the scope.** Between the pre-Stage-A base and the end of Stage A, exactly two files
  changed under `src/`: `src/data/threadDetails.ts` (40 lines) and `src/data/bookThreadDetails.ts`
  (2,072 lines). No file outside `src/data/`, `docs/` and `scripts/` changed at all.
- **The operator's five pre-existing uncommitted changes.** `docs/CP-02_EXODUS_DRAFT.md`,
  `docs/CP-02_EXODUS_SUMMARY.md`, `docs/CP-02_GENESIS_DRAFT.md`, `scripts/cp02LeviticusAppendix.ts` and
  the untracked `scripts/cp02BookAppendix.ts` are still exactly as they were found: still uncommitted,
  still unstaged, their last commits being the operator's own earlier work. Every commit in this sweep
  was path-scoped to the files it owned.

## 6 · Model-pin deviation

The plan pins Cursor `grok-4.6` at `effort: xhigh` for the executing agent. This run executed on
DeepSeek Harness with subagent writers (one writer agent per book or per small book group, one per
pillar-chain group, plus dedicated agents for tooling and for the consistency read). Recorded first in
`CP-00_BOOTSTRAP_V2.md`, repeated here as the plan requires. The verification stack is
model-independent — it is deterministic Node/tsx code reading the data through the TypeScript compiler
API, so the shape guarantees hold regardless of which model wrote the prose. What the deviation does
affect is style: voice consistency across 60 books rests on the frozen glossary, the calibration sample
and the CP-05 read, not on one model's memory of an earlier book.

## 7 · Stage A.5 — the pillar-chain pass

See `docs/CP-03_CHAIN_PASS.md` for the inventory derivation, the two constraints found before writing
(5 chain strings whose literal is duplicated and therefore unaddressable, and 0 baseline gate failures
so the pass is quality-driven throughout), and the six writer groups. Result appended below when the
last group lands.

## 8 · Stage B — CP-04 and CP-05

CP-04 is complete: `docs/CP-04_FULL_REGRESSION.md` records all four gates green (type, 146 tests, data
audit, production build), the whole-canon clarity gate at **4,324 strings and 0 failures** against 22 at
baseline, and **63 of 63 books** passing seven structural checks against their own pre-apply commits.

CP-05's rollup is complete (`docs/CP-05_TRIAGE_QUEUE.md`). The consistency read — at least 8 strings per
book across all 66 books, checking glossary compliance and cross-book rendering consistency — is the
last analytical step. Its result is appended below.

## 9 · Operator sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_
