# CP-03 · Stage A.5 — the pillar-chain pass

Plan v2.0 §1.12 · Branch `cursor/plain-lang-cp01-cp02-genesis-ebb9`.

## Why this pass exists

The 36 pillar chains in `src/data/threadDetails.ts` under `export const threadChains` carry prose that
is **shared**: a chain carrying an Isaiah verse also appears in the worklist of every other book with a
verse on that chain. Sweeping chain strings inside a per-book pass is unsafe twice over — two books'
passes would rewrite the same string with different wording (last apply wins, silently), and one
book's apply would change prose belonging to other books, which is what the applier's post-flight scope
guard exists to catch.

So per-book passes handled **entry strings only**, and the applier enforced that: in book mode it counts
chain drafts, reports them, and never writes them. That exclusion was not in place from the first
commit, though. Between the pre-Stage-A base and the end of Stage A, `src/data/threadDetails.ts` shows
20 changed lines — chain prose that the earliest book passes did write, in the chains those books carry
(the Prophet-like-Moses and New-Covenant-Heart chains among them). The rule settled quickly, and every
later book pass reports `chain drafts: 0` and `changed lines inside threadChains: 0`, but the fact
matters twice:

- the chain pass must **re-baseline from the working tree**, not from the pre-sweep text, because for a
  few chains the "before" is already a rewritten string. §1.12 says exactly this, and it is why the
  inventory below was re-derived from a fresh extraction rather than from stored worklists;
- the seven chain drafts still sitting in `docs/_work/mal_rewrites.json`
  (`chain:elijah-forerunner` steps[0], [2], [3], [4], [5], [7] connections and its `name`) are
  **superseded** by the chain pass. They were never applied — `threadDetails.ts` holds the baseline text
  — and the chain pass owns those strings now. Nothing re-applies a book file, and the correction tool
  used for the label repair deliberately ignores chain rows, so the conflict is latent rather than live;
  it is recorded here so that no future re-apply of Malachi can silently overwrite the chain pass.

## Inventory, re-derived from the tree

The plan's §1.12 figure is "622 prose strings in 36 pillar chains". Re-derived from a fresh extraction
of all 66 books after the last Stage A book:

```
  unique chains:  36
  unique strings: 658   = 36 names + 311 step titles + 311 step connections
  per-book occurrences collapsed: 1,776
```

The plan's 622 is exactly the titles plus the connections (311 + 311); the 36 `name` strings are
additional, so the true total is 658. The earlier attempt to derive this inventory from the per-book
worklists on hand produced 20 chains and 368 strings, because three books' worklists (Genesis, Exodus,
Leviticus) were missing from that set and because some worklists had been extracted before the early
books' applies — a chain's text differed between two books' copies of it. Both problems disappear when
the inventory is re-derived from the tree, which is why §1.12 says to re-baseline after the last book.

## Two constraints found before writing

1. **Duplicated literals cannot be drafted.** The applier refuses a BEFORE literal that occurs more than
   once, because it cannot know which occurrence to rewrite. Across the whole corpus, 5 of the 658
   chain strings are not unique — their text also appears in another chain or in an entry:
   `chain:righteous-branch` steps[10].title ("Root and Offspring of David"),
   `chain:elijah-forerunner` steps[0].title ("Voice crying in the wilderness"),
   `chain:kinsman-redeemer` name ("The Kinsman-Redeemer (Go'el)"),
   `chain:provided-lamb` steps[6].title ("Behold the Lamb of God"), and one that occurs three times
   (`chain:resurrection-remnant` steps[5].title, "O death, I will be thy plagues"). Those five are
   verify-only by force, not by judgement. The same constraint already applied during Stage A: 62 entry
   strings share a literal with something else, which is why `mat-21-16` and `mat-22-44` titles could
   only be recorded as verify-only.
2. **The gate is not the driver here.** A gate census over all 658 chain strings found **0 failures**
   at `MAX_SENTENCE_WORDS = 35`. Every chain string already passes `checkProse()`; chain prose is
   dense, not ungrammatical. So this pass is quality-driven from end to end, and a high verify-only
   share is the correct outcome, not a shortfall. §1.11 governs: a string that already meets the
   standard is recorded, not rewritten.

## How it was run

Six writer groups, balanced by chain size so no writer carries more than 114 strings:

| Group | Chains | Strings |
|---|---|---:|
| A | resurrection-remnant · joseph-type · millennium-earth-made-new · kinsman-redeemer · light-word · no-strange-doctrines | 104 |
| B | suffering-servant-pierced · tree-life-access · new-covenant-heart · image-dominion · one-flesh-bride · melchizedek-priesthood | 108 |
| C | abrahamic-blessing · state-of-dead-immortality · prophet-like-moses · great-controversy-arc · sabbath-creation-new-earth · rest-sabbath | 110 |
| D | day-of-the-lord · sanctuary-judgment · provided-lamb · former-latter-rain · sanctuary-2300-days · bronze-serpent | 110 |
| E | judah-royal-scepter · covenant-grace · shepherd-provision · elijah-forerunner · seed-of-woman · spirit-of-prophecy-remnant | 112 |
| F | righteous-branch · smitten-rock-water · three-angels-seal-mark · bread-from-heaven · seventy-weeks-messiah · serpent-dragon | 114 |

Each writer received one group worklist, the frozen glossary, the gate rules and invariant I1, and was
told that chain `name` strings are navigation labels to be left alone unless genuinely unclear. Every
string in a group had to be classified exactly once, as `draft` or `verifyOnly`.

Applying the pass uses the applier's dedicated chain mode, which inverts its per-book discipline: chain
drafts are the ones written, verse-entry drafts are excluded, and the post-flight requires every changed
line to lie inside the `threadChains` array. The companion verification mode scopes the structural
verifier to the whole chain group and skips the per-book groups, so the same seven checks prove that the
chain pass touched chain prose and nothing else.

## Result

```
  worklist strings:      658
  rewritten:             175
  verify-only:           483
  equivalent:            0
  unaccounted:           0     unknown keys: 0     in two verdicts: 0
  chains carrying at least one rewrite: 30 of 36
  files written:         src/data/threadDetails.ts (175 strings)
                         src/data/bookThreadDetails.ts (0 — no verse entry changed)
  verifier (--chains-only): OVERALL PASS (exit 0)
        36 pillar chains · 13,755 structural leaves + 4,324 prose leaves compared
        658 prose strings gated · 0 new clarity-gate failures
        12 book-qualified citations, 0 added, 0 dropped
  quality classifier:    168 rewritten · 0 resegmented · 7 under-share
  gates:                 npm test 146/146 · audit:data SUCCESS · lint:sweep exit 0
```

Artifacts: `docs/CP-02_CHAINS_DRAFT.md`, `docs/CP-02_CHAINS_SUMMARY.md`,
`docs/CP-03_CHAINS_APPLY.md` (the applier's pre-flight, accounting and post-flight output pasted
verbatim).

**Read the verify-only share as the result, not as a shortfall.** 483 of 658 strings were left
byte-identical with a per-string reason. Two forces drive that number and both are deliberate: no chain
string failed the clarity gate at baseline, so nothing forced a rewrite, and §1.11 forbids rewriting a
string that already meets the standard. Chain titles in particular are 4–10 word KJV-derived
thumbnails — "The Passover lamb without blemish", "humiliation → enthronement" — and the writers
correctly refused to resegment a six-word thumbnail, because the system's own quality metric classifies
a punctuation-only split of a short string as theatre. Several writers proved that by running the metric
rather than assuming it.

**The seven under-share drafts, disclosed in full.** Five are punctuation-only resegmentations with a
0.0% new-word share: `chain:sanctuary-judgment` steps[4].title and steps[7].title,
`chain:sanctuary-2300-days` steps[3].title and steps[7].title, and `chain:bronze-serpent`
steps[1].connection. The quality classifier calls them theatre because its resegmentation test only
fires when the original sentence exceeded 18 words, and these clauses run 9–16. They are kept and
reported rather than silently dropped, which is exactly the CP-02 §5 class the operator ruled on: an
em-dash or semicolon join becomes a full stop, no wording changes. The remaining two add real words —
`chain:former-latter-rain` steps[6].connection adds "takes" and `chain:bronze-serpent`
steps[2].connection adds "which" — and are ordinary decodes on short strings.

**QUOTE-REVIEW.** The chain writers recorded their own findings in the drafts' reasons and changed no
quotation: the most consequential is `chain:resurrection-remnant` steps[0].title, "In my flesh I shall
see God", against Job 19:26 KJV "yet in my flesh shall I see God" — a one-word reorder that a reader
could mistake for verbatim. Others include Ps 16:10 ("in Sheol" where KJV reads "in hell"), 2 Cor 4:6,
and a family of unquoted renderings that differ from the served canon by capitalising divine pronouns
or modernising an archaic form. All are carried byte-identical, per invariant I1, and none is described
as "restored". The operator should read them in `docs/CP-02_CHAINS_DRAFT.md`.

**One draft was corrected before the apply.** `chain:melchizedek-priesthood` steps[3].connection
originally opened on the app's bare `NT` abbreviation, and the draft had expanded it to "The New
Testament writers". Invariant I1 says abbreviations stay abbreviations, so the string was corrected to
`NT shows Melchizedek as greater, as never dying, and as one who makes people perfect.` — the
abbreviation verbatim, the rest plain. A census across all six groups then confirmed that no chain draft
adds, drops or renames a colon-terminated opener.

## Repair after the fact: the numbered chain names

Every one of the eight chains whose name carries a leading ordinal lost it in the applied pass, and one
also lost a definite article:

```
  was                                         now (as applied)                         restored to
  1. The 2,300 Days & Cleansing of the …      The 2,300 Days & Cleansing of the …      1. …
  2. The 70 Weeks: Dating the Messiah         The 70 Weeks: Dating the Messiah         2. …
  3. The Sabbath: Creation to the New Earth   The Sabbath: Creation to New Earth       3. … to the New Earth
  4. The State of the Dead (…)                The State of the Dead (…)                4. …
  5. The Three Angels' Messages & The Seal…   The Three Angels' Messages & The Seal…   5. …
  6. The Great Controversy Cosmic Arc         The Great Controversy Cosmic Arc         6. …
  7. The Spirit of Prophecy & The Remnant     The Spirit of Prophecy & The Remnant     7. …
  8. The Millennium & The Earth Made New      The Millennium & The Earth Made New      8. …
```

Those eight names are a deliberate `1.`–`8.` numbered series — they are the only eight of the 36 chain
names that carry an ordinal, and they number consecutively — so stripping them breaks the series and
changes what the app shows in chain navigation. Two writers drafted `name` fields despite being told
that a chain's name is a navigation label to be left alone unless it is genuinely unclear, and the
apply took them.

Repaired by restoring all eight names to their pre-pass text, including `the` before `New Earth` in the
Sabbath chain, which the applied draft had also dropped. Verified with
`npx tsx scripts/cp03StructuralVerify.ts --chains-only` against HEAD: `OVERALL: PASS (exit 0)`,
`658 prose strings gated`, `1356 verse entries … 0 change(s) outside the pillar chains`, so the repair
is confined to chain prose. `docs/CP-02_CHAINS_DRAFT.md` was generated before the repair and still shows
the ordinal-less names in its eight `name` rows.

**Reconciliation note on the group files.** `docs/_work/chains_gF_rewrites.json` was rewritten by its
writer *after* the apply, so it now records all 114 of its strings as `verifyOnly` with the ~20 that the
apply had already rewritten marked "ALREADY-COMMITTED REWRITE". That is accurate as a post-apply
statement and misleading as a pre-apply one: those strings *were* drafted and applied from the earlier
revision of the same file. The writer independently re-derived its rewrites from the pre-pass text and
reported them byte-identical to what is committed, which is a useful corroboration; the committed
`docs/CP-02_CHAINS_DRAFT.md` and `docs/CP-03_CHAINS_APPLY.md` remain the record of what was actually
applied.
