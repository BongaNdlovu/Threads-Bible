# CP-03 · Ezekiel — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 38
- rewritten: 16 · VERIFY-ONLY: 22 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/ezk_p1_rewrites.json --worklist docs/_work/ezk_p1.json --apply`

## Proofs (verbatim command output)

```text
node.exe : npm warn Unknown env config "devdir". This will stop working in the next major version of npm.
At line:1 char:1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (npm warn Unknow...version of npm.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
=== apply Ezekiel · docs/_work/ezk_p1_rewrites.json ===
drafts: 16 · verify-only: 22 · equivalent: 0
worklist strings: 38 · mode: DRY RUN

--- writes by file ---
     0  src/data/threadDetails.ts
     0  src/data/bookThreadDetails.ts

--- accounting ---
  worklist strings:      38
  rewritten:             16
  verify-only:           22
  equivalent:            0
  unaccounted (missing): 0
  unknown keys:          0
  in two verdicts:       0

--- verify mode: auditing the working tree against this draft set ---

--- post-flight (git diff) ---
  verse entries named by drafts:  30
  verse entries git reports:      30
  chain drafts:                   0
  changed lines inside threadChains: 0
  every changed verse entry was named by a draft; chain changes are confined to threadChains — OK

RESULT: APPLIED.
```

## Sweep findings — part 1

**Gate.** No clarity-gate failure was in scope for this chunk. The one Ezekiel failure,
`ezk-36-26`, is in part 2.

**Under-share drafts (2).** `scripts/cp02RewriteQuality.ts` flags a draft whose new text shares
under 10% of its words with the old text and is not a clean resegmentation. On short, already-mostly-plain
strings that threshold catches real decodes, so each flag was inspected by reading the added words:

| Draft | New-word share | Words added | Why it is a rewrite, not punctuation theatre |
|---|---:|---|---|
| `ezk-28-2` principle | 3.0% | `makes` | `self-deifies` (a coined word) becomes `makes himself a god`; the semicolon join becomes two sentences |
| `ezk-1-26` principle | 3.3% | `looks` | `the glory has a human appearance` becomes `the glory looks like a man`; the em-dash join becomes two sentences |

Both also reduce mid-sentence separators (3→2 and 2→1). Both are kept as drafts. This is the
punctuation-only class of CP-02 §5: kept and reported rather than silently reclassified. No draft in
this chunk is punctuation theatre.

**QUOTE-REVIEW (1).** `ezk-28-12` principle — the source quotation reads
`Thou hast been in Eden the garden of God... Thou art the anointed cherub that covereth... Thou wast
perfect in thy ways from the day that thou wast created, till iniquity was found in thee`, against
Ezekiel 28:13-15 KJV, where the canon has semicolons (`... covereth; and I have set thee so: ...`).
Every word matches the KJV; only the source's ellipses stand where the canon has semicolons. Under
invariant I1 the quotation is left byte-identical and the divergence is recorded here rather than
"restored".

**Glossary drift delta, measured before-apply against after-apply on this chunk's 38 entry strings**
(cp05 glossary rule, `scripts/cp05Consistency.ts` §1.4):

| Term | BARE before | BARE after | GLOSSED after |
|---|---:|---:|---:|
| covenant | 5 | 2 | 2 |
| sanctuary | 1 | 0 | 1 |
| sanctification | 2 | 2 | 0 |

Drift went down, not up: five bare uses became glossed. The two surviving bare `covenant` hits are
`ezk-20-12` title and `ezk-20-12` terms[0].gloss, both pre-existing and both unchanged by this pass.

**Open finding for CP-05 — the `sanctification` glossary row cannot be satisfied in the plural.**
`scripts/cp05Consistency.ts` accepts exactly one rendering for `sanctification`: the literal string
`makes a person holy`. `ezk-20-12` principle speaks of God making *them* holy, so the only literal
match would be ungrammatical. The pass kept the app-owned structural clause byte-identical and wrote
`the LORD who makes them holy`, which is the same sense with the pronoun the sentence needs. The two
bare `sanctification` hits in this chunk are therefore unchanged, not newly introduced — the delta
above is zero. This is a defect in the glossary row's rendering list (one rigid literal for an
inflected term), not in the prose, and it will recur in every book that uses the term with a plural
or non-`person` object. Carried to CP-05 and CP-06.

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

