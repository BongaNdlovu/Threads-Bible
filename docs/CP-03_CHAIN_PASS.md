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
chain drafts, reports them, and never writes them. All chain prose therefore reached the end of Stage A
at its pre-sweep wording.

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
