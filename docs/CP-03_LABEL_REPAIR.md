# CP-03 · Structural-label repair, and the seventh verification check

Plan v2.0 · Branch `cursor/plain-lang-cp01-cp02-genesis-ebb9` · Recorded after Stage A book 60.

## What went wrong

Invariant I1 requires the app's own structural labels to stay verbatim in rewritten prose:

```
  "First principle:", "Textual proof:", "WHAT", "WHEN", "HOW", "WHY", "JESUS", "WHO", "YOUR LIFE"
```

(plan §1.13, line 373; CP-01 line 242 — "**keep the label verbatim** — it is the app's own structural
marker, used across all books").

The structural verifier had six checks. None of them looked at labels. `NO_BANNED` asks whether a
string violates the clarity gate, `CITATION_FIXITY` whether a reference moved, `SCRIPT_FIXITY` whether
Hebrew, Greek, transliteration or a Strong's number moved, `PROSE_ONLY_WRITES` whether anything
outside prose moved, `KEYSET` whether an entry appeared or vanished, `NONPROSE_FIXITY` whether a
non-prose field changed. A rewrite could therefore delete `First principle:` from a string and pass
every check, the gate, the test suite and `audit:data`.

It did. A census of all 1,389 delivered drafts against their worklists found **61 label problems in
57 drafts across 9 books**: 55 labels dropped and 6 invented. Four drafts renamed `Textual proof:`
into `First principle:`, which registers as one drop and one invention each.

| Book | Problems | Kind |
|---|---:|---|
| Zechariah | 22 | 22 dropped `First principle:` |
| Malachi | 8 | 8 dropped `First principle:` |
| Zephaniah | 8 | 8 dropped `First principle:` |
| Hebrews | 7 | 7 dropped (`First principle:` and `Textual proof:`) |
| Haggai | 5 | 5 dropped `First principle:` |
| John | 5 | 2 dropped `Textual proof:` + 3 invented `First principle:` across 3 strings |
| 1 Peter | 4 | 2 dropped `Textual proof:` + 2 invented `First principle:` |
| Colossians | 1 | 1 invented `First principle:` |
| Jeremiah | 1 | 1 dropped `First principle:` |

Fifty of the 61 — every one except Hebrews' 7 and 1 Peter's 4, whose books had not been applied yet —
were already **applied and committed** in seven books before anything noticed, because a check that
does not exist cannot fail.

A second, smaller class came out of the same census: ten books were applied from a draft revision the
writer later replaced — the mid-flight hazard first recorded for 1 Kings. Daniel's ten are the largest
group (the writer strengthened ten under-share drafts after the first apply); Joshua, Judges, Ruth,
Colossians, 1 Thessalonians and 2 Thessalonians contribute one each, and Jeremiah one.

## The three-part remedy

1. **A seventh check.** `scripts/cp03StructuralVerify.ts` now runs `LABEL_FIXITY` on every in-scope
   prose string: the count of each label in the working tree must equal the count at the base commit.
   A fall is a dropped marker, a rise is an invented one, and either fails the book with exit 1. Colon
   labels match as substrings; the bare uppercase labels match on word boundaries so `WHO` does not
   match `WHOSE` and `YOUR LIFE` does not match `YOUR LIFELINE`. The check was falsification-tested
   before use: deleting exactly `First principle:` from `num-21-9` produced
   `LABEL_FIXITY FAIL … 1 dropped` and `OVERALL: FAIL (exit 1)`, and the same tree passed against a
   base that already contained the deletion, so the verdict flips purely on the label.
2. **The drafts repaired.** Fifty-seven drafts across the nine affected files. A dropped label is
   inserted at a sentence boundary in front of the clause that carries it, so the label's own sentence
   parses and no other word moves; an invented label is removed and, where the rename had swallowed
   the original, the original `Textual proof:` is restored in its place. Two repairs required a word
   beyond the label, both to restore something the same draft had dropped: `heb-4-4` regained the bare
   citation token `4:9` (it had been qualified to `Hebrews 4:9`, which `CITATION_FIXITY` had already
   caught), and `1pe-2-6` regained the token `Isaiah 28:16` in place of a vague "the scripture".
3. **The committed books corrected.** For each applied book the correction pass re-extracts the
   worklist from the current tree, diffs it against the delivered drafts, and applies only the strings
   that differ — so a repair cannot disturb a string that is already correct. Every corrected book was
   then re-verified with all seven checks and committed separately.

## Result

```
  label census after repair:   1,389 drafts across 71 rewrite files · 0 label problems
  corrections applied:         65 strings across 13 books
                                 label restorations 48  (zec 22 · mal 8 · zep 8 · hag 5 · joh 3 ·
                                                        col 1 · jer 1)
                                 draft revisions    17  (dan 10 · rut 2 · jos 1 · jdg 1 ·
                                                        col 1 · 1th 1 · 2th 1)
                               the other 11 label problems (heb 7 · 1pe 4) were repaired in drafts
                               those two books had not yet been applied, so no correction was needed
  per-book structural verify:  60 of 60 books PASS against each book's own pre-apply commit
  canon-wide clarity gate:     4,324 strings across 66 books · 0 failures (22 at baseline)
```

## One piece of collateral damage, and its repair

While the seventh check was being falsification-tested, a concurrent apply staged
`src/data/bookThreadDetails.ts` for an unrelated book's commit and swept the test's 16-character
deletion of `First principle:` from `num-21-9` into commit `4e50993`. The contamination is mine: I
staged whole data files while another agent was editing one for a test. It was repaired in commit
`ba1ad5f` by restoring the label, which `LABEL_FIXITY` then confirmed against the new base. The lesson
is recorded rather than hidden: **never stage a shared data file while another agent may be holding an
edit in it**, and run the falsification test on a book that no concurrent apply can touch.

## What this says about the verification model

The plan is explicit that the structural verifier proves shape, not meaning, and that meaning
preservation rests on the glossary, the per-string checklist, the CP-05 read and the operator's
triage. This incident sharpens that: three of the four defects this sweep has caught were **shape**
defects that no prose check could see — Proverbs' introduced gate failure (`NO_BANNED`), Matthew's
qualified citation (`CITATION_FIXITY`), and now 49 committed label changes (`LABEL_FIXITY`, which had
to be written because nothing looked). The verifier is not a formality; it is the only part of the
pipeline that has ever caught anything. Every new invariant should arrive with a check that can fail
on it, and that check should be falsified before it is trusted.
