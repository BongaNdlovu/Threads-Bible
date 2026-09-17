# CP-01 · Full-Canon Baseline — plan v2.0 (Stage 0)

Checkpoint: CP-01 (once). Date: 2026-09-17. Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9` @ `44cf8e9`.
Companion: `docs/CP-00_BOOTSTRAP_V2.md` (branch, gates, CHK-01, model-pin deviation).

---

## 1 · Live inventory (measured from HEAD, not inherited)

Measurement method: imported both detail maps through `tsx` and counted object keys; separately scanned
the source text with `/^  '([^']+)':\s*\{/gm` to prove the runtime count equals the literal count.

```
$ npx tsx (inline counter, temp script deleted)
threadDetails.ts       keyLiterals: 173   runtime keys: 173   duplicates: 0
bookThreadDetails.ts   keyLiterals: 1183  runtime keys: 1183  duplicates: 0
TOTAL                  1,356 entries
distinct book slugs    66
gen: 173 (threadDetails) + 1 (bookThreadDetails) = 174
exo:  0 (threadDetails) + 39 (bookThreadDetails) =  39
```

### 1.1 Reconciliation with the audit's "1,342 anchors" (why both numbers are right)

```
docs/COMPLETION_PLAN.md / audit:data   ->  1,342 THREAD ANCHORS (verse->fulfillment connections)
this census                           ->  1,356 DETAIL ENTRIES (hand-written title/principle/…)
difference                            ->      14

The audit names them explicitly:
  "Detail-only thread verses (non-anchor, intentional): heb-9-23, psa-146-4, rev-19-10, jer-4-23,
   rev-20-14, isa-35-4, num-21-8, gen-49-11, psa-35-11, psa-109-25, psa-24-7, hos-6-2, psa-8-4, zec-14-4"
  = 14 verse ids that carry a hand-written detail but are not thread anchors.
  1,342 + 14 = 1,356  ✓ exact.

The superseded v1.4 plan treated 1,342 as the detail count and its per-book figures summed to
neither total; this census replaces both. CP-01 exit: counts reconciled exactly.
```

### 1.2 Per-book queue with measured counts

```
ALREADY APPLIED (verify-only, never re-rewritten):
  gen 174 · exo 39 · lev 10                        = 222 entries

REMAINING SCOPE FOR THIS PASS: 63 books, 1,134 entries
  num:10  deu:27  jos:9   jdg:3   rut:4
  1sa:9   2sa:9   1ki:11  2ki:7   1ch:7   2ch:8
  ezr:6   neh:3   est:2   job:12  psa:87  pro:24  ecc:7   sng:7
  isa:111 jer:21  lam:6   ezk:30  dan:33
  hos:8   jol:6   amo:6   oba:1   jon:5   mic:9   nam:4   hab:7   zep:8   hag:5   zec:23  mal:9
  mat:60  mrk:16  luk:25  joh:27  act:26
  rom:67  1co:35  2co:15  gal:20  eph:23  php:15  col:19
  1th:11  2th:10  1ti:11  2ti:14  tit:8   phm:6   heb:46
  jam:10  1pe:14  2pe:7   1jn:10  2jn:2   3jn:1   jud:7   rev:84

CHECKSUM: 222 + 1,134 = 1,356  ✓ equals the live census exactly.
Weighting: the ten largest remaining books (isa 111, psa 87, rev 84, rom 67, mat 60, heb 46,
1co 35, dan 33, ezk 30, deu 27) hold 580 entries — 51% of the remaining scope.
```

### 1.3 Draft entries

```
src/data/draftThreadDetails.ts   -> 12 lines, 0 live entries
audit:data                       -> "Draft details: 0 drafts cover all remaining anchors"
entries flagged draft: true      -> 0 (no entry in either map carries the flag)
Conclusion: §1.2.1 is vacuous for this run — nothing to promote, nothing to exclude.
```

### 1.4 The real prose surface (measured per field — this is what actually gets swept)

```
$ npx tsx (inline field counter, temp script deleted)
{
 "entries": 1356,
 "withWho": 3,          "withWhoByRef": 3,     "withCumulativePrinciples": 3,
 "withTerms": 1356,     "termCount": 462,
 "termGloss": 462,      "termNote": 462,       "termExposition": 8,
 "withSameTestamentLinks": 0,
 "withDraft": 0
}
threadChains: 36 chains · 311 steps · 311 step titles · 311 step connections
```

Per-string scope for the whole canon:

| Field | Count | Note |
|---|---|---|
| `title` | 1,356 | one per entry |
| `principle` | 1,356 | one per entry |
| `terms[].gloss` | 462 | present on every term |
| `terms[].note` | 462 | present on every term |
| `terms[].exposition` | 8 | rare, golden-sample only |
| `who` | 3 | golden samples only |
| `whoByRef[…]` | 3 entries (unknown key count, tiny) | golden samples only |
| `cumulativePrinciples[]` | 3 entries | golden samples only |
| `sameTestamentLinks[].connection` | 0 | not used in live data |
| chain step `title` + `connection` | 311 + 311 | `threadChains` in `threadDetails.ts` |
| **TOTAL in-scope strings** | **≈ 4,278** | sum of the above |

Two corrections to the plan's assumptions, both from measurement rather than reading:

1. **`threadChains` prose was missing from the §1.5 field contract.** 36 chains carry 622 prose
   strings (`name` + per-step `title` and `connection`). They are in scope and the structural
   verifier must cover them; the plan's tool contract is amended accordingly.
2. **The heavy fields are `title` + `principle` + `terms[].gloss` + `terms[].note`**, which together
   are 3,636 of ~4,278 strings. `who`, `whoByRef`, `cumulativePrinciples` and `terms[].exposition`
   exist only on the golden samples — those are VERIFY-ONLY per §1.5.6 and are effectively already
   out of the work queue.

### 1.5 Word workload

```
src/data/threadDetails.ts        173 entries ·  26,119 words ·  2,524 lines
src/data/bookThreadDetails.ts  1,183 entries ·  98,394 words · 10,106 lines
TOTAL                          1,356 entries · ~124,500 words   (whole canon, all fields)

Remaining 63 books ≈ ~104,000 words, but the sweep cost tracks STRINGS, not raw words:
the calibration samples show most titles are 6-12 words and most principles 23-35 words.
Sampled: num principles 29-81 words · psa principles 23-28 · rom principles 26-35
```

### 1.6 Gate census — the 22 strings that are unshippable at HEAD

Computed twice by two independent implementations (`scripts/cp02ProseScan.ts` / `cp02ExtractBook.ts`
collection vs `scripts/cp03StructuralVerify.ts` AST walk). Both return **22**, and both name the same
strings, so the number is confirmed rather than asserted. Output of the independent pass:

```
extractor gate failures by book: {"deu":1,"isa":2,"jer":1,"ezk":1,"dan":1,"hos":1,"jol":2,"mic":1,
                                  "nam":1,"joh":1,"rom":2,"1co":1,"1th":1,"1ti":1,"rev":5}
extractor total: 22
```

Every one is a `principle`. Full list (the verifier's own notes):

```
1co-11-23  1th-4-16  1ti-6-16  dan-9-24  deu-11-14  ezk-36-26  hos-6-3   isa-42-6
isa-9-6    jer-31-31 joh-1-14  jol-2-23  jol-3-16   mic-5-2    nam-1-9   rev-14-14
rev-14-7   rev-20-4  rev-22-11 rev-7-2   rom-3-21   rom-6-3
```

Two consequences for the sweep:

1. **The gate is NOT vacuous.** An earlier CP-01 draft said "the data clears the gate, so rewrites
   must be judgment-driven". That was wrong — it generalised from `num`/`psa` (0 failures each).
   There are 22 genuinely unshippable strings, and clearing them is a hard, verifiable objective.
2. **They are concentrated and small in number** (22 of ~4,324 prose strings, 0.5%), spread over 15
   books with `rev` holding 5. Per §1.3, 13 of the 15 books are still ahead in the queue, and
   **`rom` holds 2 of them inside the calibration set** — which is exactly why calibration was worth
   doing first: the fix pattern for a `principle` that fails on a 35-word sentence or a banned
   abstraction gets settled on a book the operator reviews before it is applied 64 times.

### 1.7 Tooling status

```
scripts/cp02ProseScan.ts        BUILT   census + density ranking (22 abstract markers, gate verbatim)
scripts/cp02ExtractBook.ts      BUILT   per-book worklist for writers (BEFORE text + context)
scripts/cp03StructuralVerify.ts BUILT   AST-compare vs HEAD, 6 checks — falsification-tested by hand:
                                        deleting ONE Hebrew character inside `num-21-9` terms[].original
                                        -> NONPROSE_FIXITY + SCRIPT_FIXITY FAIL, exit 1; restore -> exit 0
scripts/cp03ApplyRewrites.ts    BUILT   joins worklist BEFORE with rewrites AFTER, splices exact
                                        literals, refuses ambiguity, enforces 100% accounting
scripts/cp04LedgerRollup.ts     BUILT   per-book scoreboard + THEOLOGY-REVIEW triage

Whole-canon verification at HEAD (clean tree), verbatim tail:
  coverage: 1356 entries across 67 book group(s) + 36 pillar chain(s)
            13755 structural leaves + 4324 prose leaves compared · 4324 prose strings gated
            13972 script-corpus leaves (496 Hebrew runs, 407 Greek runs, 462 transliterations, 8 Strong's tokens)
            564 book-qualified citations
  KEYSET / NONPROSE_FIXITY / PROSE_ONLY_WRITES / CITATION_FIXITY / SCRIPT_FIXITY / NO_BANNED
            -> PASS 68/68 groups each
  OVERALL: PASS (exit 0)
```

**4,324 prose strings** is the true in-scope total — measured by the verifier's AST walk, and 46 more
than §1.4's hand-summed ≈4,278 (the difference is chain `name` leaves and the 14 detail-only verses).
The measured number supersedes the estimate.

---

## 2 · Golden samples verified present

`src/data/checkReadability.test.ts:12` pins the golden set and the suite passes at HEAD:

```
const GOLDEN = ['gen-1-1', 'gen-2-2', 'gen-2-3', 'zec-9-9', 'isa-7-14', 'exo-12-46'];
$ npm test  ->  Test Files 13 passed (13) | Tests 146 passed (146)
```

The suite asserts (a) every golden `title` / `principle` / `cumulativePrinciples[]` passes the clarity
gate, and (b) the runtime prose templates in `threadMapModel.ts` and the four interrogation fallback
modes pass it. All six anchors exist and pass. These stay **VERIFY-ONLY** in their books.

Gate definition in force (read from `scripts/checkReadability.ts`, not assumed):

```
BANNED_PHRASES = 11 entries incl. 'redemptive synthesis', 'theological necessity',
                 'doctrinal and prophetic continuum', 'teleological goal',
                 'hermeneutical keystone', 'canonical climax', 'sensus plenior',
                 'expanding the foundational principle', 'verses in common'
MAX_SENTENCE_WORDS = 35      (direct quotations in “ ” / " " are stripped before counting)
checkProse(text) -> ProseViolation[]  (empty array = pass)
```

---

## 3 · Locked glossary (§1.4) — frozen at CP-01, binding for all 63 books

Grounding: the sampled prose in `num` / `psa` / `rom` uses these terms as *labels and quotes*, so the
rule is **replace when the term is explanatory prose; preserve byte-for-byte when it is a quoted KJV
term, a lemma, or a proper name.**

| Term | Plain rendering (locked) | Never write |
|---|---|---|
| covenant | God's binding promise | covenantal framework, covenant relationship |
| propitiation | the sacrifice that turns God's wrath away | propitiatory efficacy |
| remnant | the faithful few who are left | remnant community |
| sanctuary | God's dwelling place / the temple service that pointed to him | sanctuary motif |
| typology | a real earlier event that points forward to a later one | typological correspondence |
| antitype | the person or event the earlier picture pointed to | antitypical fulfillment |
| type (noun, Hebrews sense) | the earlier picture | typological precursor |
| soteriology | how God saves people | soteriological |
| eschatology | the last days / the end of the story | eschatological |
| Christology | what the passage shows about Jesus | christological |
| Messianic | about the promised King, Jesus | messianic figure |
| atonement | the price paid so sin can be forgiven | atoning work (unless quoting) |
| intercession | Jesus pleads for us before the Father | intercessory ministry |
| justification | God declares a guilty person to be in the right | forensic justification |
| sanctification | God makes a person holy over time | sanctifying work |
| redemption | buying a person back at a price | redemptive economy |
| dispensational | (avoid entirely; if the source means a period of God's dealing, name the period) | dispensational |
| forensic | legal / courtroom | forensic |
| efficacy | it works / it does what it says | efficacious |
| mediation | Jesus stands between God and us | mediatorial |
| patriarch | the founding father (Abraham, Isaac, Jacob) | patriarchal |
| theophany | God appearing to someone | theophanic |
| manifestation | showed itself / appeared | manifestation (as a noun stack) |
| empirical tests | tests you can check | empirical (outside this one use) |
| balance-verse | the verse that holds mercy and justice together | — keep: this is the source's own phrase |
| First principle: | **keep the label verbatim** — it is the app's own structural marker, used across all books | first-principle analysis |

---

## 5 · Invariant I1 worked examples — CORRECTED (a flaw in the first draft)

The first draft of the calibration briefs shipped a worked example whose "AFTER" rewrote a
quotation. The Numbers writer refused to copy it and flagged it instead, quoting the served canon:

```
BRIEF AS FIRST WRITTEN (WRONG):
  AFTER: "…so must the Son of Man be lifted up, so that whoever believes in him should not perish
          but have eternal life."
FLAW:   "whoever believes in him should not perish but have eternal life" is NOT KJV. The served
        canon (John 3:15) reads "That whosoever believeth in him should not perish, but have
        eternal life."
VERDICT: the example violated invariant I1 (quoted Scripture is never modernised). It is corrected
        below. This is recorded rather than quietly fixed because it is evidence about the process:
        a plausible-looking example is exactly how a systematic violation would have entered 63 books.
```

**Corrected example (use this one):**

```
BEFORE: "Moses makes a bronze serpent and sets it on a pole; whoever is bitten and looks upon it
         lives. Jesus directly applies this to His own crucifixion: as Moses lifted up the serpent,
         so must the Son of Man be lifted up, that whoever believes in Him should not perish but
         have eternal life. First principle: God turns the emblem of the curse into the instrument
         of life when looked upon in faith."

AFTER:  "Moses made a bronze serpent and set it on a pole. Anyone who was bitten looked at it and
         lived. Jesus applied this to His own death: as Moses lifted up the serpent, so must the Son
         of Man be lifted up, that whoever believes in Him should not perish but have eternal life.
         First principle: God turned the sign of the curse into the means of life for everyone who
         looks to it in faith."

WHY:    clauses separated; "emblem" → "sign"; "instrument … when looked upon in faith" →
        "means … for everyone who looks to it in faith".
        The existing span is carried over BYTE-IDENTICAL, exactly as the Numbers writer did, even
        though the span is itself a loose rendering of John 3:15. Fixing that is a Scripture-integrity
        decision for the operator, NOT a plain-language rewrite — see §6.
```

## 6 · Deferred operator decision: quotation fidelity vs the served canon

The Numbers calibration surfaced a third category the plan did not anticipate:

```
App prose sometimes quotes KJV loosely. Example found during calibration:
  prose says   "that whoever believes in Him should not perish but have eternal life"
  canon says   "That whosoever believeth in him should not perish, but have eternal life" (John 3:15)

This is NOT in scope for the plain-language sweep: I1 forbids the writer from modernising a
quotation, and it equally forbids silently "fixing" one back to KJV, because that changes the words
presented as Scripture. Sweep rule therefore:
  - carry every existing quotation byte-identical (what the Numbers writer did);
  - if a quotation does not match the served canon, log it as QUOTE-REVIEW with both readings;
  - the operator decides at HALT 1 whether to (a) leave as-is, (b) correct to canon — a separate
    Scripture-integrity pass, or (c) drop the quotation marks and present it as plain prose.
A canon-diff census for all quotations is produced at CP-02 so the operator sees the size of this
before deciding (see the calibration report).
```

---

## 7 · CP-01 exit

```
[x] Live counts measured; literal == runtime; 0 duplicates
[x] 1,342 anchors + 14 detail-only verses = 1,356 entries reconciled exactly
[x] Remaining scope: 63 books · 1,134 entries (checksum 222 + 1,134 = 1,356)
[x] Draft entries: 0 — §1.2.1 vacuous, proven by audit output
[x] Workload measured: ~124,500 words total, ~104,000 remaining
[x] Golden set present and passing at HEAD (vitest 146/146)
[x] Gate definition read from source and quoted
[x] Glossary frozen (28 rows)
[ ] Gate census / string counts (pending scripts/cp02ProseScan.ts --all)
[ ] Three §1.5 tools built + self-tested (in progress)
```
