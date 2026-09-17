# CP-02 · Calibration Sample — the Stage 0 voice-lock gate

**Plan:** `THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v2.0.md` (one-pass protocol)
**Branch:** `cursor/plain-lang-cp01-cp02-genesis-ebb9` · **Commits:** `8ec30bb` (NUM) → `765dccd` (ROM) → `c24cb66` (PSA)
**Date:** 2026-09-17 · **Status:** ✅ **VOICE LOCK APPROVED — Stage A open**

---

## 0 · Voice-lock verdict and the rulings taken with it

The operator approved the calibration and directed that the recommended options be taken. Rulings,
recorded here so every remaining book is judged by the same standard:

| # | Question | Ruling | Consequence for the remaining 60 books |
|---|---|---|---|
| 1 | Voice lock | **APPROVED** — Stage A proceeds with the frozen glossary, invariant I1, and the §1.11 verify-only rule unchanged | No re-litigation of voice; the calibration books are not repeated |
| 2 | §5 the 46 punctuation-only drafts | **Kept as applied, reported as their own class.** They change no word and convert a 20+ word em-dash/colon clause into its own sentence, which is §1.7's first rule; the metric and the writers disagreed, so the class is surfaced in every book's summary rather than silently kept or dropped | Writers may continue to split long clauses, but a draft carrying no new words must say so in its `reason`; `cp02RewriteQuality.ts` classifies and counts them per book |
| 3 | §6 quotation fidelity | **Unchanged in this sweep.** Every quotation and every unquoted Scripture-style rendering is carried byte-identical; nothing is modernised and nothing is silently "restored" to canon | The census findings (2 not-in-canon, 4 loose, 23 uncited, 7 unquoted renderings differing from KJV) are queued for the closeout report as a separate Scripture-integrity decision — **not** fixed here |
| 4 | CHK-01 (the lint gate blocked by two broken files) | Recommended option (a): **exclude the operator's two pre-existing broken appendix scripts from this plan's type gate**, leaving them untouched | A plan-scoped type gate verifies the sweep's own code; the strict repo `npm run lint` stays red until the operator repairs or retires those files |

Everything below is machine-verified on committed code. Nothing is claimed that a command did not print.

The single failure mode of a one-pass rewrite is a *systematic* voice error: one wrong rendering
repeated ~1,350 times. Three books spanning the canon's three hardest registers expose it while the
cost of fixing it is three books, not sixty-three:

- **Numbers** — OT law/narrative, small (60 strings)
- **Psalms** — OT poetry, the largest single book, 87 entries (291 strings)
- **Romans** — NT doctrine, the densest prose in the corpus (179 strings)

Everything below is machine-verified on committed code. Nothing is claimed that a command did not print.

---

## 2 · What was applied (measured, per book)

| Book | In-scope strings | Rewritten | VERIFY-ONLY | EQUIVALENT | Gate | Structural verifier |
|---|---:|---:|---:|---:|---|---|
| Numbers | 60 | 19 | 40 | 1 | PASS (0 violations) | PASS exit 0 |
| Romans | 179 | 86 | 93 | 0 | PASS (0 violations) | PASS exit 0 |
| Psalms | 291 | 118 | 171 | 2 | PASS (0 violations) | PASS exit 0 |
| **Total** | **530** | **223** | **304** | **3** | **0 violations** | **3/3 exit 0** |

**Rewritten 42% · VERIFY-ONLY 57% · EQUIVALENT 0.6%.**

The VERIFY-ONLY majority is the honest outcome, not a shortfall: 304 of 530 strings already met the
§1.7 standard and passed the gate, so rewriting them would have been noise (§1.11). The one exception
is a class the operator should rule on — see §5.

### 2.1 Rewrite magnitude (scripts/cp02RewriteQuality.ts)

| Book | Carry new words | Resegment a long sentence | Move only punctuation |
|---|---:|---:|---:|
| Numbers | 18 | 0 | 1 |
| Romans | 80 | 0 | 6 |
| Psalms | 76 | 3 | 39 |
| **Total** | **174** | **3** | **46** |

New-word share of surviving AFTERs: **median 21.6% (psa) · 28.6% (rom) · 34.1% (num)**, max 81%.
Every AFTER also **grew** in every book (num +117 words, rom +532, psa +390): the rewrites add
explanatory words rather than deleting content.

---

## 3 · The two unshippable strings in the calibration set are now clean

Romans held 2 of the 22 pre-existing clarity-gate failures. The verifier reports them as resolved:

```
NOTE rom-3-21 · principle · clarity-gate failure at base is gone in the working tree (improvement)
NOTE rom-6-3  · principle · clarity-gate failure at base is gone in the working tree (improvement)
gate reading: NEW clarity-gate failures 0 · strict reading ("no prose string violates the clarity gate") PASS
```

**How**, because the mechanism matters for the other 20: both had KJV sitting **unquoted**, so a
36-word and a 39-word Scripture sentence counted against the app's own prose. The gate exempts direct
quotations (`stripQuotes`). Quoting the Scripture — **not one word inside changed** — cleared both, and
the app sentence that followed was rewritten into plain sentences. This is the repeatable fix pattern
for the remaining 20 failures (deu, isa×2, jer, ezk, dan, hos, jol×2, mic, nam, joh, 1co, 1th, 1ti, rev×5).

---

## 4 · Meaning preservation — the evidence, not the promise

| Check | Result |
|---|---|
| Entry keysets | identical, all three books (563 structural-leaf paths compared) |
| Non-prose fields (keywords + order, terms, refs, Strong's, draft flags) | byte-identical |
| Book-qualified citations (abbreviations resolved) | 53 in scope, **0 added, 0 dropped, 0 renumbered** |
| Hebrew/Greek script runs | 38 Hebrew + 32 Greek + 1 LXX run intact, byte-identical |
| Transliterations | 43 intact (`go'el`, `kapporet`, `Lo-ammi`, `ruach`, `hoshiah na`, `nephesh chayah`, `Sheol`, `Mashiach`) |
| Quotations | 0 losses; 5 new quotation marks, each around a span already verbatim in the source |
| POST-APPLY whole-canon verifier | PASS — 1,356 entries, 68/68 groups, all six checks |

The structural verifier was **falsification-tested by hand**, not trusted: deleting one Hebrew
character inside `num-21-9`'s `terms[].original` produced `NONPROSE_FIXITY` + `SCRIPT_FIXITY` FAILs and
exit 1; restoring returned exit 0. A dropped `(John 3:14)` produced `CITATION_FIXITY: citation DROPPED`.
An earlier scope-blind version of the tool **missed** an out-of-scope mutation and was corrected — the
sequence is recorded in CP-00 §2.1 rather than tidied away.

---

## 5 · ⚠ The one judgement call for the operator: 46 punctuation-only drafts

My theatre detector (§0.7: "swapping `;` or `:` for `.` is not a rewrite") classifies **46 of 223**
drafts as moving only punctuation — no new words. Example (psa-91-11):

```
BEFORE: …Satan quoted this at the temptation — the promise is for the path of obedience…
AFTER : …Satan quoted this at the temptation. The promise is for the path of obedience…
```

Two honest notes:

1. **The writers disagree with the metric.** The Psalms writer's own validator asserted "no `after`
   differs from its BEFORE by punctuation only"; the detector finds 39. The disagreement is real and
   the operator should break it.
2. **These edits are not meaningless.** Each converts an em-dash/colon clause into its own sentence —
   §1.7's first rule is *one idea per sentence*, and the affected sentences ran 20+ words. But they add
   no vocabulary, so a reader comparing BEFORE/AFTER sees only marks move.

**Decision requested:** should this class (a) stay as applied, (b) be reclassified as VERIFY-ONLY so the
rewrite counts reflect real rewrites only, or (c) be strengthened with genuine rewrites before Stage A?
Under (b) the calibration totals become **177 rewritten / 350 verify-only**.

---

## 6 · ⚠ Quotation fidelity vs the served canon — sizing the decision

Calibration surfaced a third category the plan did not anticipate: **app prose sometimes quotes KJV
loosely, and sometimes renders Scripture without quotation marks at all.** A canonical rule was adopted
mid-flight and honoured by all three writers: *carry every existing quotation byte-identical; never
modernise it, never silently "restore" it to canon.* A census (`scripts/cp02QuoteCensus.ts`, whole
canon) now sizes the problem for the operator:

```
quoted spans checked (4+ words): 46
MATCH 18 · LOOSE 4 · NO-CITATION 23 · NOT-IN-CANON 1

NOT-IN-CANON:
  gen-1-1     · terms[1].exposition · cites Hebrews 11:3 · quoted words not found anywhere in the canon
  gen-49-10   · terms[0].note       · cites Ezekiel 21:27 · quoted words not found anywhere in the canon

LOOSE (quoted words mostly, not exactly, in the cited verse):
  gen-1-1 · cumulativePrinciples[1] (John 1:1 ~100%) · gen-4-1 terms note (1 John 3:12 ~75%)
  gen-17-19 terms note (Heb 11:18 ~86%) · exo-12-46 terms exposition (Exod 12:46 ~78%)
  dan-9-26 terms note (Isa 53:8 ~100%) · rev-19-10 principle (Rev 22:9 ~71%, Rev 12:17 ~63%)

NO-CITATION 23: quoted text with no reference in the same string to check it against.
```

Separately, writers flagged **7 unquoted source renderings that differ from canon KJV**, e.g.
Rom 8:32 "He who did not spare His own Son" (canon: "He that spared not his own son"), Rom 5:12
"entered the world" (canon: "entered into the world"), Rom 1:17 "the just shall live by faith"
(canon capitalises "The"). All were carried byte-identical and left unquoted.

**Decision requested (defer to CP-06 if preferred):** (a) leave all of it as-is, (b) correct the
NOT-IN-CANON and LOOSE spans to canon in a **separate Scripture-integrity pass** (not this sweep —
it changes words presented as Scripture), or (c) drop the quotation marks and present the loose spans
as plain prose. Note option (b) would touch golden-sample strings (`gen-1-1`), which are VERIFY-ONLY
by plan.

### 6.1 · The ellipsis rule, settled 2026-09-18

A quotation that omits material marks the omission with an ellipsis, and **the mark is not an I1
breach**. I1 protects the *words* of Scripture: it forbids paraphrasing inside quotation marks, fixing
KJV grammar, modernising a form, expanding an abbreviation and silently "restoring" a reading to canon.
An ellipsis is not a word. It marks an omission the app is already making, and §1.10 C3 requires that
omission to be marked rather than hidden.

The corpus settles the convention, so this is not a new rule:

```
quoted spans in the two data files:      246
  carrying an ellipsis:                   27
    mid-span (non-contiguous quote):      25
    trailing (quote stops before verse end): 1
    leading:                               0
```

The one pre-existing trailing case is `lev-25-10`, in Leviticus — part of the work signed off before
this plan:

```
  "…and ye shall return every man unto his possession…"
  where Leviticus 25:10 continues "and ye shall return every man unto his family."
```

`isa-42-6` was the only string the sweep rewrote that stopped before the end of its verse without
marking it; the mark was added in `d98dd1d`, conforming to that precedent. What stays forbidden inside
quotation marks is unchanged and absolute: **no word is ever added, removed, reordered, modernised,
expanded or "restored".**

---

## 7 · What the operator is asked to approve

```
Voice lock verdict — reply with exactly one of:

  "Voice lock approved: continue full sweep"
      → Stage A starts: 60 remaining books, Numbers/Psalms/Romans not repeated.

  "Voice lock rejected: <what to change>"
      → the three books and the glossary are revised, and this halt repeats.
```

Please also rule on the two open items in §5 (punctuation-only class) and §6 (quotation fidelity), since
both affect every remaining book. If you want to see the prose before deciding, the full BEFORE/AFTER for
all 223 rewrites is in `docs/CP-02_{NUM,ROM,PSA}_DRAFT.md` (per string, with the writer's reason), and the
counts per book are in the matching `_SUMMARY.md` files.

---

## 8 · Evidence index

```
docs/CP-02_NUM_DRAFT.md / _SUMMARY.md    60 strings, 19 rewrites, full BEFORE/AFTER + reasons
docs/CP-02_ROM_DRAFT.md / _SUMMARY.md   179 strings, 86 rewrites
docs/CP-02_PSA_DRAFT.md / _SUMMARY.md   291 strings, 118 rewrites, 2 EQUIVALENT
docs/CP-03_{NUM,ROM,PSA}_APPLY.md       apply records + verbatim gate output + sign-off block
docs/COMPLETION_PLAN.md                 sweep-log rows for the three books
docs/CP-00_BOOTSTRAP_V2.md              branch/HEAD, gate baseline, CHK-01, model-pin deviation
docs/CP-01_FULL_CANON_BASELINE_V2.md    inventory, the 22 gate failures, frozen 28-row glossary

Rebuild any proof with:
  npx tsx scripts/cp03StructuralVerify.ts --book <slug>        structural fixity vs HEAD
  npx tsx scripts/cp02RewriteQuality.ts docs/_work/<b>_rewrites.json --worklist docs/_work/<b>.json
  npx tsx scripts/cp02QuoteCensus.ts --json <path>             quotation fidelity census
  npx tsx scripts/cp02ApplyRewrites.ts <rewrites> --worklist <wl> --verify
```

---

## 10 · Glossary drift census (CP-05 input, taken at the voice-lock commit)

`scripts/cp05Consistency.ts` scans every in-scope string for the 28 frozen glossary terms and the 24
never-write phrases. Result:

```
glossary terms: 28 · never-write phrases: 24
NEVER-WRITE PHRASES PRESENT: 28 hits
  christological   gen-1-1 (who + 2 whoByRef) · exo-12-46 (who + 2 whoByRef) · zec-9-9 (who + 3 whoByRef)
                   isa chain:no-strange-doctrines · heb chain:no-strange-doctrines
                   luk-24-27 · 1co-10-4 · eph-2-20 · php-2-10
  eschatological   gen-2-3 · gen-49-1 · 3 gen chains · exo-20-8 · 2 exo chains
                   jol-2-23 · zec-12-10 · 1th-4-16 · tit-2-13 · jam-5-7 · rev-22-20
  soteriological   dan-9-24 terms note
  dispensational   eph-1-10
```

**These are pre-existing, not introduced by this sweep** — every one sits in a book that is either
already signed off (Genesis, Exodus, Zechariah) or still ahead in the queue. No calibration string
added a never-write phrase.

The term table is deliberately a flagger, and its headline number needs reading carefully: `covenant`
shows 279 "BARE" uses and `sanctuary` 76, but a bare use is normal and correct — the word appears in
chain labels, KJV quotations and titles where a gloss would be redundant or wrong to insert. What the
census establishes is the opposite of what a naive reading suggests:

```
Most term occurrences in this corpus are already correct as written. The measurable defect is
narrow: 28 strings containing a never-write abstraction, plus a handful of technical words used
without explanation (imprecation 2, doxology 5, catena 1, efficacy 1, investiture 2,
prerogative 2, typology 2, headship 2).
```

That vindicates the calibration's conservative 57% VERIFY-ONLY rate: aggressively re-glossing terms
that already read correctly would have been the punctuation-theatre failure in a more expensive form.

**Ruling taken:** the 28 are **queued for CP-06**, not rewritten here, because most sit inside
already-signed-off prose and several are in `who` / `whoByRef` fields on golden-sample entries
(`gen-1-1`, `zec-9-9`, `exo-12-46`). Rewording signed-off theology to remove one adjective is the
operator's call, not a sweep side effect. For the remaining books the writers are already bound to the
never-write list, and every book's `cp05Consistency` run is part of its gate stack.

---

## 9 · Carried risks the operator should weigh before Stage A

```
R2 (from the plan) Silent meaning drift the gate cannot see. Calibration reduced it but did not
   remove it: 174 of 223 rewrites are verified only by the writer's checklist, the token-fixity
   verifier (which proves nothing MOVED, not that nothing CHANGED), and the operator's read.
R3 Volume truncation. 530 strings took one session at this depth. 4,324 strings remain canon-wide
   (about 3,800 after calibration), so Stage A is ~7x this sample. The per-book commit/log/resume
   protocol exists for exactly that; expect it to be used.
R-new The 46 punctuation-only drafts (§5) and the quote-fidelity class (§6) are both decisions that
   get 60x more expensive if deferred until after Stage A.
```
