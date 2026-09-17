# CP-03 · Operator-ruled repairs — the never-write register, Exodus punctuation, the glossary row

Date: 2026-09-18 · Branch `cursor/plain-lang-cp01-cp02-genesis-ebb9`

The operator reviewed `CP-06_FULL_CANON_PLAIN_LANGUAGE.md` §9 and authorised all four open rulings, plus
five follow-up items. This is the record of executing them.

---

## Ruling 1 — the pre-sweep register in Genesis, Exodus and Zechariah

**What was actually there.** The calibration census (`CP-02` §10) had recorded "28 never-write hits"
across those books and the shared chains. Re-derived against the live tree, the residue was much
smaller and narrower than the headline: the never-write *phrases* were present in **four** strings, all
of them the single word `eschatological`, plus two glossary terms used bare in one Exodus `who` field.

| Book | entryId · field | before | after |
|---|---|---|---|
| Genesis | `gen-49-1` · principle | "points forward to an **eschatological** climax" | "points forward to **the end of the story**" |
| Genesis | `gen-2-3` · terms[0].note | "re-reads this as **eschatological** rest" | "re-reads this as **the rest at the end of the story**" |
| Exodus | `exo-20-8` · principle | "affirms an **eschatological** Sabbath-rest" | "affirms **a Sabbath-rest at the end of the story**" |
| Exodus | `exo-12-46` · who | "The **type** specifies … so the **antitype** is recognizable" | "The **earlier picture** specifies … so **the person it pointed to** is recognizable" |
| Zechariah | `zec-14-4` · terms[0].note | "geography pinned to **eschatology**" | "geography pinned to **the end of the story**" |
| chain | `chain:rest-sabbath` · steps[5].connection | "as **eschatological** rest in Christ" | "as **rest in Christ at the end of the story**" |

Every replacement uses the frozen glossary's own rendering for the row (`eschatology → "last days" /
"the end of the story"`, `antitype → "pointed to"`, `"the earlier picture"`). The Exodus sentence in
`exo-20-8` is 1,500 characters long and the renderings are longer than the words they replace, so the
first attempt pushed one sentence to 36 words and the verifier's `NO_BANNED` check caught it — the
wording was shortened until the sentence sits at 34 words and the check passes.

**The label that could not be fixed, and why that is the right call.** The consistency read reported
"Christological Subject & Referent:" as a never-write hit in the `who` fields of `gen-1-1`,
`exo-12-46` and `zec-9-9`. It is not prose: `src/components/HistoricalContextPage.tsx` splits the `who`
field on five anchored regexes — `Authorship & Context:`, `Identified Characters:`, `Singular or Many:`,
`Christological Subject & Referent:`, `Redemptive Purpose:` — to build the UI, and
`connectionInterrogation.test.ts` and `threadMapModel.test.ts` assert that the headings are present.
Renaming that heading would stop a section rendering. The defect is therefore in the census rule, not in
the data, and **the five headings are now stripped before the banned-phrase scan** in
`scripts/cp05Consistency.ts`, with that reasoning in a comment. The body of each heading is still
scanned normally. This is the same shape of finding as the `sanctification` row below: a rule that
cannot be satisfied by correct prose.

**Result:** `npx tsx scripts/cp05Consistency.ts` now reports

```
NEVER-WRITE PHRASES PRESENT (each is an outright defect):
none — 0 hits
```

Zero never-write phrases in the canon, down from 28 at calibration.

---

## Ruling 2 — Exodus's `First principle.` punctuation

35 of Exodus's 118 live strings read `First principle.` with a period where the other 1,269 occurrences
canon-wide read `First principle:` with a colon. All 35 were corrected to the colon. No other character
changed.

**What was deliberately not fixed.** The same 35 strings show a wider punctuation injury: a period where
a colon, semicolon or comma belongs, followed by a lower-case word — for example
`exo-4-22`: "First principle. sonship is the ground of exodus demands. and the title, kept in Israel,
finds its fullness…". Restoring those requires deciding, per site, whether the original mark was a
colon, a semicolon or a comma, and that is a judgement about the operator's own signed-off text, not a
mechanical repair. It is reported here rather than guessed at. The `who` fields of all three books show
the same injury. If the operator wants it repaired, the pre-injury text is in the Exodus appendix
history and the repair is best done as its own reviewed pass.

---

## Ruling 3 — the `sanctification` glossary row

`scripts/cp05Consistency.ts` accepted exactly one literal for `sanctification`: `makes a person holy`.
When the object is plural the literal match is impossible without ungrammatical English, so the row read
0 glossed against 12 bare however good the prose was. The row now accepts the inflected forms:
`makes a person holy`, `makes them holy`, `makes us holy`, `makes you holy`, `makes people holy`,
`makes his people holy`. The row moved from **0 glossed / 12 bare** to **1 glossed / 11 bare** on the
existing text, and a future pass can now satisfy it.

---

## Ruling 4 — the 77 review findings

Delegated to this agent to rule on. A class-level triage digest is being produced as
`docs/CP-05_FINDINGS_TRIAGE.md`, which groups every finding into `mixed-text-form`,
`pronoun-capitalisation`, `compressed-rendering`, `archaic-modernised`, `punctuation` and `other`, and
recommends a ruling per class with its string cost. The digest is written separately so it can be read on
its own; no finding is applied from it without a class ruling behind it.

---

## Two corrections to the record, one of them mine

**The chain-name ordinal "regression" was a false alarm.** `src/data/threadDetails.ts` contains two
name-bearing structures: `threadChains` (36, of which 8 carry a `1.`–`8.` ordinal) and, lower down,
`MASTER_PILLAR_CHAINS` (8, none ordinaled). My audit script sliced from `threadChains` to end-of-file,
so the master-pillar names overwrote the chain names in the comparison and eight "NAME CHANGED" rows
appeared that were never true. I then "repaired" them by adding ordinals to the **master-pillar** names,
which had never had them. Reverted in `a059d30`; both structures are byte-identical to their
pre-chain-pass text and `docs/CP-02_CHAINS_DRAFT.md` was regenerated afterwards. Recorded in
`docs/CP-03_CHAIN_PASS.md` and corrected in `CP-06` §7.

**A verification test string reached HEAD, and it was my commit that took it.** While the eighth check
was being falsification-tested on the working tree, my Zechariah repair commit staged
`src/data/bookThreadDetails.ts` wholesale and captured a live test edit in `deu-30-6` terms[0].gloss
("and YHWH will circumcise your heart, as the KJV has it (NTS, ot)"). Restored to the correct text in
`1e690b6`. The rule this breaks is already written in `CP-03_LABEL_REPAIR.md` — never stage a shared data
file while another agent may be holding an edit in it — and I broke it a second time.

---

## Evidence

```
  never-write census (canon-wide):        0 hits (was 28 at calibration)
  gen  structural verify (8 checks):      PASS (exit 0)
  exo  structural verify (8 checks):      PASS (exit 0)
  zec  structural verify (8 checks):      PASS (exit 0)
  chains structural verify (8 checks):    PASS (exit 0)
  npm test:                               146 passed (146)
  npm run lint:sweep:                     exit 0
```

Commits: `2a27009` (gen), `2c0f322` (exo), `4b90d3b` (zec), `ea8467e` (chain), `a059d30` (phantom
revert), `1e690b6` (gloss restore), `17ac328` (tooling).
