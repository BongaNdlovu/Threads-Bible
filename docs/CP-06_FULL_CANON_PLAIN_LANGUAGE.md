# CP-06 · Whole-canon plain-language Change Report

Plan: `THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v2.0.md`
Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`
Date: 2026-09-17
Status: **Stage A complete (60 books + the Stage A.5 chain pass), Stage B closeout complete except the
operator's sign-off.** CP-04 regression, CP-05 triage and consistency read, and this report are all
delivered; §9 lists what remains for the operator.

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

### Glossary census, canon-wide

`npx tsx scripts/cp05Consistency.ts` over the whole canon:

```
never-write phrases present: 0        <- the outright-defect class is clean
glossary terms: 28 · terms with at least one bare use: 17
bare uses 423 · glossed uses 51
```

**Zero never-write phrases** is the headline: not one of the 24 banned forms appears anywhere in the
canon's prose. The bare-use figure needs its context before it reads as a problem, because the census
counts any string that contains the term without its rendering, and four kinds of string are meant to
be bare:

- **titles** — KJV headings and app section labels, which I1 forbids rewriting;
- **quotations** — Scripture itself uses the words;
- **lexical glosses** — `terms[].gloss` and `terms[].note` are definitions of the original word, not
  prose to be decoded;
- **chain prose** — Stage A.5's territory, still at its pre-sweep wording where that pass has not yet
  run.

Split by book, the bare-use book occurrences are 27 in Genesis, Exodus and Leviticus — the three books
this plan never touched — and 88 across the books the sweep did touch. The largest counts are
`covenant` (180 bare / 37 glossed), `sanctuary` (71 / 1), `remnant` (39 / 4), `atonement` (34 / 1) and
`messianic` (23 / 0).

One of those rows is a known defect in the glossary itself rather than in the prose.
`sanctification` has a single accepted rendering, the literal string `makes a person holy`. When the
object is plural — "the LORD who makes **them** holy" in `ezk-20-12` — the literal match is impossible
without writing ungrammatical English, so that row reads 0 glossed against 12 bare no matter how good
the prose is. Recommended operator action: widen that row's rendering list to accept the inflected
forms (`makes them holy`, `makes us holy`) or restate the row as a rule rather than a literal. The same
pattern will affect any future term whose rendering is a clause with a pronoun in it.

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

See `docs/CP-03_CHAIN_PASS.md` for the inventory derivation, the constraints found before writing, and
the six writer groups. Result:

| Measure | Value |
|---|---:|
| Chains | 36 |
| Strings re-derived from the tree | 658 (36 names + 311 titles + 311 connections) |
| Rewritten | 175 |
| Verify-only | 483 |
| EQUIVALENT | 0 |
| Chains carrying at least one rewrite | 30 of 36 |
| Files written | `src/data/threadDetails.ts` only — 0 verse entries changed |
| Verifier (`--chains-only`, 7 checks) | PASS (exit 0): 4,324 prose leaves compared, 658 chain strings gated, 0 new gate failures, 12 citations unchanged |

The plan's §1.12 figure of 622 is the titles plus the connections; the 36 `name` strings are additional,
so the true inventory is 658. Three facts about this pass are worth the operator's attention:

1. **It re-baselined from the tree, and that mattered.** Twenty lines of chain prose had already been
   written by the earliest book passes before the per-book exclusion was enforced, so for a few chains
   the "before" was itself a rewritten string. Re-deriving the worklist from a fresh extraction — rather
   than trusting stored worklists — is what made the pass correct; the first attempt, built from stored
   worklists, saw only 20 chains and 368 strings and reported conflicting text for shared strings.
2. **483 of 658 strings were left alone, deliberately.** No chain string failed the clarity gate at
   baseline, so nothing forced a rewrite, and §1.11 forbids rewriting what already meets the standard.
   Chain titles are 4–10 word KJV-derived thumbnails; resegmenting a six-word thumbnail is exactly the
   theatre the quality metric exists to catch, and several writers proved that by running the metric
   rather than assuming it.
3. **Seven under-share drafts are disclosed rather than hidden.** Five are punctuation-only
   resegmentations with a 0.0% new-word share (em-dash or semicolon joins becoming full stops on 9–16
   word clauses); the other two add a real word each. The five are kept and reported as the CP-02 §5
   class the operator ruled on.

Five chain strings have a literal that appears twice in the corpus, so the applier cannot address them
unambiguously; they are verify-only by force, not by judgement. The same constraint had already applied
to 62 entry strings during Stage A.

**One false alarm, recorded rather than deleted.** I reported that the chain pass had stripped the eight
leading ordinals from the numbered chain names and "repaired" them. That was wrong. The file holds two
name-bearing structures — `threadChains` and, lower down, `MASTER_PILLAR_CHAINS` — and my audit script
sliced from `threadChains` to end-of-file, so the master-pillar names overwrote the chain names in the
comparison. The eight ordinals belong to `threadChains` and were present before the chain pass, after
it, and now; my "repair" instead added ordinals to the eight master-pillar names, which had never had
them. Reverted in `a059d30`, with both structures now byte-identical to their pre-chain-pass text and
`docs/CP-02_CHAINS_DRAFT.md` regenerated afterwards. The failure mode is worth naming: a false positive
that fits a known defect pattern is more dangerous than no check, because it produces confident action.
Full account in `docs/CP-03_CHAIN_PASS.md`.

## 8 · Stage B — CP-04 and CP-05

CP-04 is complete: `docs/CP-04_FULL_REGRESSION.md` records all four gates green (type, 146 tests, data
audit, production build), the whole-canon clarity gate at **4,324 strings and 0 failures** against 22 at
baseline, and **63 of 63 books** passing seven structural checks against their own pre-apply commits.
The four gates were re-run after the chain pass and are green again, with the chain scope verified
separately.

CP-05 is complete. The rollup is `docs/CP-05_TRIAGE_QUEUE.md`; the cross-book consistency read is
`docs/CP-05_CONSISTENCY_READ.md`.

**Sample.** 1,518 strings read across all 66 books — nearly three times the plan's floor of 528, with
every book read at least eight strings and the densest books read in full (Genesis 60, Deuteronomy 59,
Psalms 118, Isaiah 139, Revelation 112). The read also verified that the delivered draft JSON and the
generated `CP-02_*_DRAFT.md` appendices are the same artifact, so the sample size stands for both.

**What it found, and what was done.**

| Severity | Found | Action |
|---|---:|---|
| `citation` | 0 | nothing moved: no citation token, quoted span, Hebrew/Greek run, transliteration, Strong's token or structural label was changed by the sweep in the sample |
| `wording` — frozen-rendering divergence | 2 fixable | fixed: `1ch-16-22` ("covenant family" → the frozen rendering) and `php-2-11` ("covenant name/oath"), both re-applied to the data and re-verified (commits `a95eb64`, `1dc4591`) |
| `wording` — needing an operator ruling | 6 classes | listed in the read's §2 and §4; the most substantial is 31 bare-`covenant` strings |
| `blocking-claim` | 2 | neither is a sweep defect — see below |

**The two blocking-claim findings are both pre-existing, and both are the operator's call.**

`B1` is the register discontinuity the calibration predicted: the three books this plan never swept
(Genesis, Exodus, Leviticus) still carry the pre-sweep voice, including the glossary's never-write
words — "Christological", "eschatological", bare "type" and "antitype" — in `gen-1-1`, `gen-2-3`,
`gen-49-1`, `exo-12-46`, `exo-20-8` and several chains. These are the same 28 hits the calibration's
drift census recorded and queued for this report. The read recommends no edit, and this report agrees:
§1.11 forbids rewriting those strings in this sweep, and the golden samples `gen-1-1`, `exo-12-46` and
`zec-9-9` are verify-only by design. The operator's choice is between a scoped exemption in the
never-write column for already-signed-off prose and a follow-up pass over the three books.

`B2` is a punctuation defect in Exodus that no check can see: 35 of Exodus's 118 live strings read
`First principle.` with a period where every swept book reads `First principle:` with a colon.
`LABEL_FIXITY` passes it because the label count is unchanged from base, and invariant I1 protects the
label from a unilateral fix, so it is triage rather than repair. If the operator confirms the colon is
intended, it is a 35-string correction in one book.

## 9 · What remains for the operator

1. **Sign off** the sweep in §10 below, or return it with what to change.
2. **Triage the review queue** — 76 `QUOTE-REVIEW` and 1 `THEOLOGY-REVIEW` findings in the swept books
   (per-book table in §4), plus the 27 pre-existing markers in `docs/CP-05_TRIAGE_QUEUE.md`.
3. **Rule on the six wording classes** the consistency read flagged but did not fix.
4. **Decide the two blocking-claim items**: the never-write words in Genesis, Exodus and Leviticus, and
   Exodus's `First principle.` punctuation.
5. **Widen the `sanctification` glossary row** so an inflected rendering (`makes them holy`) counts —
   otherwise that row reads 0 glossed against 12 bare no matter how good the prose is.
6. **Decide whether the abbreviation census becomes a check.** It is not one today; 45 drafts change an
   abbreviation token count and all but two are mandated by the glossary or the voice rules.

## 10 · Operator sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_
