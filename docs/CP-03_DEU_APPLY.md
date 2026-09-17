# CP-03 · Deuteronomy — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 129
- rewritten: 59 · VERIFY-ONLY: 70 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/deu_rewrites.json --worklist docs/_work/deu.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/deu_rewrites.json --worklist docs/_work/deu.json --apply
drafts: 59 · verify-only: 70 · equivalent: 0 · worklist strings: 129
--- writes by file ---
    22  src/data/threadDetails.ts
    37  src/data/bookThreadDetails.ts
--- accounting ---
  unaccounted (missing): 0 · unknown keys: 0 · in two verdicts: 0
--- post-flight (git diff) ---
  verse entries named by drafts:  27
  verse entries git reports:      27
  chain drafts:                   22
  every changed verse entry was named by a draft; chain changes are confined to threadChains - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book deu
NO_BANNED PASS - 74 working-tree prose strings gated, 0 NEW failures, 1 base failure RESOLVED
gate reading: NEW clarity-gate failures 0 · strict reading PASS
OVERALL: PASS (exit 0)
(the resolved failure is deu-11-14: an 84-word principle whose 43-word sentence failed the gate now
runs 7 sentences with a maximum of 19 words)

$ npx tsx scripts/cp02RewriteQuality.ts docs/_work/deu_rewrites.json --worklist docs/_work/deu.json
drafts: 59 · REWRITTEN 59 · RESEGMENTED 0 · PUNCTUATION-ONLY 0
VERDICT: PASS - no punctuation-only drafts.

$ npm test -> 13 files / 146 tests pass
$ npm run audit:data -> 1342/1342 anchors, SUCCESS all 4 tiers
$ npx tsx scripts/cp05Consistency.ts --book deu -> never-write phrases: 0 hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

