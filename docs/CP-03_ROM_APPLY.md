# CP-03 · Romans — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 179
- rewritten: 86 · VERIFY-ONLY: 93 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/rom_rewrites.json --worklist docs/_work/rom.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/rom_rewrites.json --worklist docs/_work/rom.json --apply
drafts: 86 · verify-only: 93 · equivalent: 0
worklist strings: 179
--- writes by file ---
     5  src/data/threadDetails.ts
    81  src/data/bookThreadDetails.ts
--- accounting ---
  rewritten: 86 · verify-only: 93 · equivalent: 0
  unaccounted (missing): 0 · unknown keys: 0 · in two verdicts: 0
--- post-flight (git diff) ---
  verse entries named by drafts:  66
  verse entries git reports:      66
  chain drafts:                   5
  changed lines inside threadChains: 5
  every changed verse entry was named by a draft; chain changes are confined to threadChains - OK
RESULT: APPLIED.

$ npx tsx scripts/cp02RewriteQuality.ts docs/_work/rom_rewrites.json --worklist docs/_work/rom.json
drafts: 86 · REWRITTEN 80 · RESEGMENTED 0 · PUNCTUATION-ONLY 6
rewritten share distribution: min 10.8% · median 28.6% · mean 30.7% · max 80.0%

Writer's own gate self-check (all 86 draft AFTERs, quotations stripped):
  global max sentence = 24 words (rom-15-12) · 0 of 86 exceed 35 · 0 banned phrases · 0 glossary never-write terms
The 2 gate-FAIL strings fixed: rom-6-3 (36-word KJV sentence was unquoted -> now quoted, words unchanged)
                               rom-3-21 (39-word KJV sentence was unquoted -> now quoted, words unchanged)
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

