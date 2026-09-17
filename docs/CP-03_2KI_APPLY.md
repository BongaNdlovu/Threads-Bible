# CP-03 · 2 Kings — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 14
- rewritten: 13 · VERIFY-ONLY: 1 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/2ki_rewrites.json --worklist docs/_work/2ki.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/2ki_rewrites.json --worklist docs/_work/2ki.json --apply
--- post-flight (git diff) ---
  verse entries named by drafts:  7
  verse entries git reports:      7
  every changed verse entry was named by a draft - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book 2ki   -> OVERALL: PASS (exit 0)
$ npx tsx scripts/cp02RewriteQuality.ts ...            -> REWRITTEN 13 · PUNCTUATION-ONLY 0
$ npm test                                             -> 13 files / 146 tests pass
$ npm run audit:data                                   -> 1342/1342 anchors, SUCCESS all 4 tiers
$ npx tsx scripts/cp05Consistency.ts --book 2ki         -> never-write phrases: 0 hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

