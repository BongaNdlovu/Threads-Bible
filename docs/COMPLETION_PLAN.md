# Threads Bible — Completion Plan

Master plan for completing all information layers of the platform and
assimilating the "Ordo Propheticus" cinematic mindmap as the explanation
vehicle for every thread and every connection.

**Status legend:** ✅ delivered · 🔄 in progress · 🕓 planned (optional future)

---

## 1 · Content inventory (all layers)

| Layer | Content | Status |
|---|---|---|
| Thread anchors | 1,342 curated verse→fulfillment connections across 5 generated maps | ✅ |
| Thread details | 1,342/1,342 hand-written titles, principles, keywords (bookThreadDetails + threadDetails) | ✅ |
| Tier 1 · TSK | Phrase-anchored cross-references, 66/66 books, 63,668 groups | ✅ |
| Tier 2 · Citations | 108 NT citations/allusions | ✅ |
| Tier 3 · Messianic | 78 prophecies (Jesus Christ threads), light-red marked | ✅ |
| Tier 4 · Chains | 42 master chains · 277 steps | ✅ |
| Symbols | 91 prophetic symbols with Scripture-defined meanings | ✅ |
| Types | 48 types/antitypes (persons, sanctuary, feasts, objects) | ✅ |
| Beliefs | 28 fundamental beliefs with scripture proofs | ✅ |
| LDE | 19 last-day-event phases across 6 eras | ✅ |
| **Edge whys (NEW)** | **Per-connection explanations for every thread edge, composed from each thread's hand-written principle plus both verse ends — 1,342/1,342 threads covered** | ✅ (Phase B) |
| **Life Threads** | 200-theme Jesus-centred topical catalogue in 18 domains (`lifeThreads.ts`, lazy chunk; browsed in the Threads panel's Life tab) | ✅ |
| **Lexicon page** | Every original-language term across thread details, searchable, deep-linked to verses | ✅ |
| **Prophecy page** | LDE timeline + symbols + types folded into one header-reachable page | ✅ |
| **Threads-first UI** | Verse click → scripture-only split + "Study on the Map"; explanation pane retired; single Study affordance per verse; blue brand everywhere (gold removed) | ✅ |
| **Plain-language gate** | `scripts/checkReadability.ts` + Vitest gate over runtime prose templates, golden details, and Life Threads firstPrinciples | ✅ |
| **Plain-language sweep** | Rewrite the remaining hand-written detail entries per book (`THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v1.4.md`); 3 of 66 books APPLIED (Genesis, Exodus, Leviticus) — see the sweep log below | 🔄 |

## 2 · Phase A — Ordo mindmap viewer (assimilation of the design)

Source design: "Ordo Propheticus" (cinematic node-graph: starfield, grid
nodes, gradient edges with animated reveal, step playback, edge `why` fields).

- **A1 · Plan document** — this file. ✅
- **A2 · Graph model** — `src/components/threadMapModel.ts`: pure builder that
  turns `selectedThread` + its hand-written detail + resolved fulfillment
  verses into a graph: 1 source node + 1 node per fulfillment reference, and
  one edge per connection. Every edge's `why` is composed from the thread's
  hand-written principle plus the anchor and fulfillment verse snippets —
  the "why a thread is a thread," derived from hand-written content.
  ✅
- **A3 · Ordo viewer** — `src/components/ThreadMap.tsx`: React port of the
  design language (ink/bone/gold, starfield canvas, pan/zoom viewport,
  gradient SVG edges with animated dash reveal and traveling dots, cinematic
  node cards with step watermarks, filmstrip dots, step counter,
  play/pause/prev/next) plus a dossier panel that displays the **active
  edge's why** — the space to explain not only the thread but the connection.
  ✅
- **A4 · Integration** — The Ordo mindmap opens as **its own page**
  (`ThreadMapPage`, full-screen with its own chrome: theme toggle, Split
  View, close). The workflow is one click: tapping a thread verse in the
  reading view opens the map page directly and auto-plays the walkthrough;
  Esc closes it. The classic split view (source & fulfillment side by side)
  opens only from the map page's Split View button — never automatically.
  The map carries **light and dark palettes** (defaults to the app theme,
  switchable from the page header). ✅
- **A5 · Tests** — `threadMapModel.test.ts`: node/edge counts, per-ref
  grouping of resolved verses, why composition, anchor/fulfillment snippets,
  sequential steps. ✅

## 3 · Phase B — Edge whys for all connections

- **B1 · Complete coverage** — every edge of every thread carries a why
  composed from that thread's hand-written principle (all 1,342 are
  hand-written) joined with the anchor and fulfillment verse snippets. No
  blank edges. ✅
- **B2 · Progressive hand-polish** — 🕓 optional future: per-edge
  hand-authored whys (differentiating multi-fulfillment threads) book by
  book, following the same draft→hand pattern as the detail pass.

## 4 · Phase C — Grand Tour (optional future)

- 🕓 Whole-canon Ordo built from the 42 Tier 4 master chains (already
  sequential node-graphs), reusing the same viewer with epochs and strands.
- 🕓 Hand-polished edge whys; reader-contributed notes stored in IndexedDB.

## 5 · Verification gates

`npm test` (model invariants) · `npm run audit:data` (content integrity) ·
`npm run lint` · `npm run build` · CI gates on every push.

---

## Plain-language sweep log (per §1.6 of the plan)

| Book | Entries | Batch date | Gate | THEOLOGY-REVIEW | Operator review | Status |
|---|---:|---|---|---|---|---|
| Genesis | 173 | 2026-09-17 | PASS (AFTER) | 2 sentence-splits under gen-1-1; approved | Bonga Ndlovu (SIGNED-OFF) | APPLIED |
| Exodus | 39 | 2026-09-17 | PASS (AFTER) | Sentence-split rewrites across 63 fields; approved | Bonga Ndlovu (SIGNED-OFF) | APPLIED |
| Leviticus | 10 (+ 3 pillar-chain steps) | 2026-09-17 | PASS (AFTER) | 23 hand-authored §1.7 rewrites across 20 source lines (17 fields in bookThreadDetails, 6 chain fields in threadDetails); doctrinal paraphrase watchlist reviewed; approved | Bonga Ndlovu (SIGNED-OFF) | APPLIED |
| Numbers | 10 (+ 7 chain fields) | 2026-09-17 | PASS (AFTER) | 19 rewrites / 40 VERIFY-ONLY / 1 EQUIVALENT of 60 in-scope strings; QUOTE-REVIEW: `num-11-31` "two cubits high" → "two cubits deep on the ground" (same measurement, flagged for the operator); 0 clarity-gate failures before and after | _awaiting voice-lock verdict_ | APPLIED (CP-03 NUM · plan v2.0 calibration) |

### Plan v2.0 runs (one-pass protocol)

The rows above are the v1.4 per-book protocol. From 2026-09-17 the sweep continues under
`THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v2.0.md`, which keeps this same log as the
single source of truth for progress and resumption.

| Book | In-scope strings | Rewritten | VERIFY-ONLY | EQUIVALENT | Gate | Structural verifier | Status |
|---|---:|---:|---:|---:|---|---|---|
| Numbers | 60 | 19 | 40 | 1 | PASS (0 violations) | PASS (exit 0) | APPLIED — calibration, voice lock approved |
| Romans | 179 | 86 | 93 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — calibration, voice lock approved |
| Psalms | 291 | 118 | 171 | 2 | PASS (0 violations) | PASS (exit 0) | APPLIED — calibration, voice lock approved |
| Deuteronomy | 129 | 59 | 70 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 1 |
| Joshua | 18 | 9 | 9 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 2 |
| Judges | 6 | 3 | 3 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 3 |
| Ruth | 29 | 4 | 25 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 4 |
| 1 Samuel | 20 | 9 | 11 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 5 |
| 2 Samuel | 49 | 26 | 23 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 6 |
| 1 Kings | 22 | 21 | 1 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 7 |
| 2 Kings | 14 | 13 | 1 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 8 |
| 1 Chronicles | 14 | 7 | 7 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 9 |
| Nehemiah | 6 | 5 | 1 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 10 |
| 2 Chronicles | 16 | 8 | 8 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 11 |
| Ezra | 31 | 17 | 14 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 12 (8 chain drafts deferred to the chain pass) |
| Esther | 4 | 2 | 2 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 13 |
| Job | 68 | 20 | 48 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 14 (9 chain drafts + 33 chain verify-only deferred to the chain pass) |
| Jeremiah | 52 | 23 | 29 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 15 (2 chunks; chain strings deferred) |
| Lamentations | 12 | 5 | 7 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 16 |
| Ecclesiastes | 37 | 23 | 14 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 17 (15 chain drafts + 6 chain verify-only deferred) |
| Song of Solomon | 14 | 7 | 7 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 18 |
| Proverbs | 48 | 15 | 33 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 19 (after one revert; see below) |
| Isaiah | 272 | 139 | 133 | 0 | PASS (0 violations, **2 pre-existing failures resolved**) | PASS (exit 0) | APPLIED — Stage A 20 (3 chunks; 125 chain strings deferred to the chain pass) |
| Ezekiel | 74 | 31 | 43 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 21 (2 chunks; 78 chain strings deferred; 4 under-share drafts inspected and kept; 2 QUOTE-REVIEW) |
| Daniel | 96 | 47 | 49 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 22 (2 chunks; 99 chain strings deferred; 10 under-share drafts inspected and kept; 1 QUOTE-REVIEW) |
| Hosea | 39 | 10 | 29 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 23 (17 chain strings deferred) |
| Joel | 75 | 6 | 69 | 0 | PASS (0 violations, **2 pre-existing failures resolved**) | PASS (exit 0) | APPLIED — Stage A 24 (55 chain strings deferred) |
| Amos | 37 | 9 | 28 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 25 (15 chain strings deferred; 1 under-share draft; 1 QUOTE-REVIEW) |
| Obadiah | 2 | 1 | 1 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 26 |
| Jonah | 12 | 5 | 7 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 27 (2 QUOTE-REVIEW) |
| Micah | 20 | 10 | 10 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 28 (1 QUOTE-REVIEW) |
| Nahum | 29 | 4 | 25 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 29 (17 chain strings deferred; 1 QUOTE-REVIEW) |
| Habakkuk | 14 | 7 | 7 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 30 |
| Zephaniah | 16 | 8 | 8 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 31 |
| Haggai | 12 | 6 | 6 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 32 (1 QUOTE-REVIEW) |
| Malachi | 70 | 19 | 51 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 33 (38 chain strings deferred; 1 QUOTE-REVIEW) |
| Matthew | 132 | 66 | 66 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 34 (2 chunks; 34 chain strings deferred; 6 QUOTE-REVIEW; 1 THEOLOGY-REVIEW) |
| Mark | 32 | 16 | 16 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 35 (8 QUOTE-REVIEW) |
| Luke | 50 | 25 | 25 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 36 (34 chain strings deferred; 9 QUOTE-REVIEW) |
| John | 70 | 14 | 56 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 37 (21 chain strings deferred; 1 QUOTE-REVIEW) |
| Acts | 56 | 9 | 47 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 38 (17 chain strings deferred; 1 QUOTE-REVIEW; 1 resegmentation kept) |
| 1 Corinthians | 90 | 44 | 46 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 39 (55 chain strings deferred; 1 QUOTE-REVIEW) |
| 2 Corinthians | 34 | 17 | 17 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 40 |
| Zechariah | 148 | 39 | 109 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 41 (83 entry + 65 chain strings; 2 chain QUOTE-REVIEW deferred to the chain pass) |
| Galatians | 44 | 18 | 26 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 42 (4 QUOTE-REVIEW) |
| Ephesians | 52 | 23 | 29 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 43 (1 QUOTE-REVIEW; 1 resegmentation kept) |
| Philippians | 36 | 15 | 21 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 44 (1 QUOTE-REVIEW) |
| Colossians | 48 | 23 | 25 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 45 (7 QUOTE-REVIEW) |
| 1 Thessalonians | 28 | 14 | 14 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 46 (2 QUOTE-REVIEW) |
| 2 Thessalonians | 20 | 10 | 10 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 47 |
| James | 22 | 12 | 10 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 48 (2 QUOTE-REVIEW) |
| 1 Timothy | 28 | 14 | 14 | 0 | PASS (0 violations, **1 pre-existing failure resolved**) | PASS (exit 0) | APPLIED — Stage A 49 (1 QUOTE-REVIEW) |
| 2 Timothy | 32 | 16 | 16 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 50 |
| Titus | 18 | 9 | 9 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 51 |
| Philemon | 12 | 6 | 6 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 52 |
| 2 Peter | 14 | 8 | 6 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 53 (1 QUOTE-REVIEW) |
| 1 John | 22 | 10 | 12 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 54 (1 QUOTE-REVIEW) |
| 2 John | 4 | 2 | 2 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 55 |
| 3 John | 2 | 1 | 1 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 56 |
| Jude | 16 | 7 | 9 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 57 (1 QUOTE-REVIEW) |
| Revelation | 236 | 112 | 124 | 0 | PASS (0 violations, **5 pre-existing failures resolved**) | PASS (exit 0) | APPLIED — Stage A 58 (3 chunks; 146 chain strings deferred) |
| Hebrews | 104 | 43 | 61 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 59 (41 chain strings deferred; 2 QUOTE-REVIEW) |
| 1 Peter | 32 | 15 | 17 | 0 | PASS (0 violations) | PASS (exit 0) | APPLIED — Stage A 60 (1 QUOTE-REVIEW) |

## Stage A complete — 60 of 60 books

| Measure | Value |
|---|---:|
| Stage A books applied | 60 of 60 (Deuteronomy → Revelation) |
| Entries | 969 |
| Entry strings in scope | 2,357 |
| Entry strings rewritten | 1,071 |
| Entry strings verify-only | 1,286 |
| EQUIVALENT | 0 |
| QUOTE-REVIEW findings | 76 |
| THEOLOGY-REVIEW findings | 1 |
| Pre-existing clarity-gate failures resolved | 20 of 20 in scope |
| Pre-existing clarity-gate failures in the canon, after | 0 (was 22) |
| Per-book structural verify (7 checks) vs each book's pre-apply commit | 60 of 60 PASS |
| Books reverted mid-pass | 1 (Proverbs, one entry, re-applied) |
| Books corrected after commit | 13 (65 strings — see `docs/CP-03_LABEL_REPAIR.md`) |
| Commits | 1 per book, plus one repair commit for each corrected book and two tooling commits |
| Reverts of committed prose | 0 |

**Accounting closes exactly.** 2,357 in-scope entry strings = 1,071 rewritten + 1,286 verify-only + 0
equivalent. Twelve of the sixty books also classified chain strings, which a per-book apply never
writes: 382 chain rows (95 drafted, 287 verify-only). Those are inputs to the Stage A.5 chain pass, not
results of Stage A, and they are excluded from the figures above. Totals including them would read
1,166 rewritten and 1,668 verify-only, which is why the two sets are stated separately here.

The verify-only share is 54.6% of entry strings. That is the intended shape of the sweep, not a
shortfall: §1.11 requires a string that already meets the standard to be recorded rather than
rewritten, and the density ranking aimed the effort at the densest strings first. A sweep whose
rewrite share approached 100% would be punctuation theatre.

Three defects were caught by shape checks and none by a prose check: a clarity-gate failure introduced
in Proverbs (`NO_BANNED`), a bare citation qualified in Matthew (`CITATION_FIXITY`), and 50 committed
structural-label changes that required writing a seventh check (`LABEL_FIXITY`) before anything could
see them. `docs/CP-03_LABEL_REPAIR.md` records the third in full, including the collateral damage done
to `num-21-9` while that check was being falsification-tested and the fix for it. The lesson the sweep
leaves behind is that every invariant needs a check that can fail on it, and every check needs to be
falsified once before it is trusted.

Outstanding after Stage A: the Stage A.5 chain pass (§1.12 — 36 chains, 622 unique strings, all chain
prose still at its pre-sweep wording), then Stage B (CP-04 regression, CP-05 consistency read and
triage queue, CP-06 whole-canon report). The chain worklist derived from the 63 per-book worklists on
hand gives 20 chains and 368 unique strings rather than 36 and 622, and the same chain's text differs
between some books' worklists — both facts mean the plan's chain inventory needs re-deriving from the
tree after the last book rather than trusting the numbers in §1.12. That is the first task of Stage A.5.

Rows 42–57 were applied in the order shown, which is canonical except in one stretch: James (48) was
applied before the Pastoral Epistles (49–52) because its rewrite set finished first. Two books are
still outstanding at the time of writing: 1 Peter and Hebrews, whose delivered drafts carry a defect
described below, and Revelation, whose last two chunks are still being written. Canonically 1 Peter
belongs between James and 2 Peter, and Hebrews between Philemon and James.

**A seventh defect class, found by a check that did not exist yet.** After row 48 a scan of every
delivered draft against its worklist showed 61 places across nine books where a draft had dropped or
renamed one of the app's own structural labels — `First principle:` and `Textual proof:`. Invariant I1
(plan §1.13, and CP-01 line 242) requires those labels to stay verbatim, and the structural verifier's
six checks did not look at them, so the defect passed the gate, the verifier and the test suite in
seven books that were already committed: Colossians, Haggai, Jeremiah, John, Malachi, Zechariah and
Zephaniah. Three further fields (Colossians, 1 Thessalonians, 2 Thessalonians) were applied from a
snapshot the writer later revised, which the same scan caught. The remedy is threefold and is in
progress: a seventh check, LABEL_FIXITY, added to `scripts/cp03StructuralVerify.ts` so no later book
can lose a label silently; the affected drafts repaired; and the committed books corrected by a
follow-up apply that re-extracts the worklist from the tree. This is the third defect a shape check
has caught that no prose check would have seen, and the first that had to be found by a new check
because nothing existing looked for it.

Three notes on rows 33–41.

**Order deviation.** Zechariah's row is numbered 41 although canonically the book sits between Haggai
(32) and Malachi (33). Its rewrite set was the last Old Testament set to be delivered, and the pass
applies a book only from a completed writer file, so Zechariah waited rather than blocking the queue.
Every other book in rows 23–41 was applied in canonical order.

**A citation defect the structural verifier caught, and what it cost.** The Matthew part 2 draft for
`mat-24-30` principle rewrote the citation list `Mark 13:26, Luke 21:27, Rev 1:7, 14:14` into
`… Rev 1:7 and Rev 14:14`. The reference is the same verse, but the change drops a bare citation token
and introduces a qualified one, which `CITATION_FIXITY` forbids: it reported `1 added, 0 dropped,
0 new bare, 1 dropped bare` and failed the book. The data files were reverted to HEAD, the draft was
corrected to keep `14:14` bare, and Matthew was re-applied and re-verified clean. This is the second
time the verifier has caught a real defect that no gate would have seen (the first was Proverbs'
`NO_BANNED` failure). Both times the rule that saved the commit was a shape check, not a prose check.

**Duplicate strings cannot be drafted.** `mat-21-16` title and `mat-22-44` title each occur twice in
the data corpus, so the applier would refuse them as ambiguous (`BEFORE` literal appears twice). Both
are recorded as verify-only with that reason. The corpus therefore contains at least two duplicated
prose strings whose twins live in other books; CP-05 should inventory them, because a single-string
rewrite cannot reach both copies.

Convention note on the "In-scope strings" column, because rows 1–33 are not all measuring the same
thing. The column counts the strings that book's pass actually classified. Books swept through
entry-only worklists (`--fields-only`, used for every split book from Jeremiah onward, and for the
New Testament) show entry strings only and list their chain strings as deferred. Six books swept
before that rule settled — Deuteronomy, Ruth, 2 Samuel, Ezra, Job, Jeremiah — plus the Minor Prophets
Hosea, Joel, Amos, Nahum and Malachi, carry their chain strings inside the count because the writer
classified them (as verify-only) rather than skipping them. Those chain figures are therefore
per-book occurrences of shared strings and must not be added up as if they were unique. Stage A.5
re-baselines chain prose from the working tree after the last book, which resolves the overlap; the
total in this log is a progress measure, not a unique-string count. Unique Stage A chain strings are
622 across 36 chains, against 1,188 per-book occurrences.

Rows are in the order the books were applied, which is also canonical order within Stage A.
Nehemiah was applied after 1 Chronicles in this run (the 1 Chronicles apply came first because
2 Kings and Nehemiah had to be finished to clear the applier's foreign-dirt guard).

## Mid-pass status block — after Isaiah

Required by `THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v2.0.md` §1.6 once the pass
reaches the plan's 21st remaining book. This run's Stage A is the 60 books from Deuteronomy to
Revelation (Genesis, Exodus, Leviticus were completed before the plan; Numbers, Psalms and Romans are
the Stage 0 calibration set), so the milestone falls at the end of Isaiah. This is a progress proof,
not a halt: the pass continues into Ezekiel.

| Measure | Value |
|---|---:|
| Stage A books complete | 20 of 60 (Deuteronomy → Isaiah, canonical order) |
| Stage A entries complete | 293 of 969 |
| Stage A entry strings complete | 686 of 2,357 (29%) |
| Calibration books complete | 3 of 3 (Numbers, Romans, Psalms) |
| Strings rewritten | 415 |
| Strings verify-only | 446 |
| EQUIVALENT | 0 |
| THEOLOGY-REVIEW (QUOTE-REVIEW findings) | 7 |
| Pre-existing gate failures resolved | 4 of 20 |
| Structural verifier | PASS (exit 0) on all 20 books |
| Reverts | 1 (Proverbs, one entry, re-applied) |

Drift notes — whole-sweep, not per book:

1. **Canon-divergence findings.** Seven `QUOTE-REVIEW:` findings across Deuteronomy (1), 1 Kings (1),
   Nehemiah (1), Job (1), Ecclesiastes (1) and Isaiah (2) mark places where the existing text's
   quotation does not match the KJV. Under invariant I1 the quotation was left byte-identical and the
   divergence logged rather than "restored". All seven carry forward to CP-06.
2. **Chain prose is still outstanding.** 361 chain strings were in scope across these 20 books and are
   deferred to the Stage A.5 chain pass (§1.12). Some early books' rewrite files did contain chain
   drafts; Stage A.5 will re-baseline from the working tree after the last book so that each of the 36
   chains has exactly one owner and one writer, and will record every already-plain chain string as
   verify-only. Across all 60 Stage A books, chain strings appear 1,188 times per book but collapse to
   622 unique strings over 36 chains.
3. **Gate failures.** Twenty pre-existing clarity-gate failures were in scope across Stage A; four are
   resolved — `deu-11-14`, `jer-31-31`, `isa-9-6`, `isa-42-6`. Sixteen remain, all in books not yet
   swept: `ezk-36-26`, `dan-9-24`, `hos-6-3`, `jol-2-23`, `jol-3-16`, `mic-5-2`, `nam-1-9`,
   `joh-1-14`, `1co-11-23`, `1th-4-16`, `1ti-6-16`, `rev-7-2`, `rev-14-7`, `rev-14-14`, `rev-20-4`,
   `rev-22-11`. No book was committed with a gate failure introduced by this sweep; the structural
   verifier's NO_BANNED check is what caught the one attempt (Proverbs).
4. **Verify-only share.** 446 of 861 accounted strings (51.8%) were already plain. That is the expected
   shape of a whole-canon sweep: the density score aims effort at the densest strings, and §1.11
   forbids rewriting prose that already meets the standard. A sweep whose rewrite share approached
   100% would be punctuation theatre.
5. **Punctuation-only class.** No draft in books 1–20 was punctuation-only; the one string where
   punctuation was the only available change (`1sa-15-22` principle) is recorded as verify-only with
   that reason stated. The class itself remains valid per CP-02 §5 and is reported per book wherever
   it occurs.
6. **Model pin deviation.** The plan pins Cursor `grok-4.6` at `effort: xhigh`. This run executes on
   DeepSeek Harness with subagent writers. Recorded in CP-00 and carried to CP-06.
7. **Commit messages.** Rows 1–20 use `CP-03 <BOOK>: plain-language rewrite (<drafts> rewrites /
   <verify-only> verify-only of <n> strings)`. This keeps the plan's `CP-03 · book · plain-language
   rewrite · counts` shape and adds the verify-only split, which the plan's template omits even though
   §1.11 makes it the sweep's central distinction. EQUIVALENT and THEOLOGY-REVIEW counts are appended
   when non-zero.

Remaining after this block: 40 books (Ezekiel → Revelation), 676 entries, 1,671 entry strings, 16 open
gate failures, then the Stage A.5 chain pass and Stage B closeout.
