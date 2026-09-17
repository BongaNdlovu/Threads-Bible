# CP-03 · Proverbs — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 48
- rewritten: 15 · VERIFY-ONLY: 33 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/pro_rewrites.json --worklist docs/_work/pro.json --apply`

## Proofs (verbatim command output)

```text
ATTEMPT 1 (reverted): the apply produced a NEW clarity-gate failure and was reverted.
  pro-26-11 principle -> long-sentence: 37 words (max 35)
  structural verifier: OVERALL: FAIL (exit 1) - NO_BANNED 1 NEW failure
ATTEMPT 2 (this commit): fixed at source, then applied.
  pro-26-11 principle now 5/20/20 words (max 20)
  pro-20-20 principle also hardened: was exactly 35 words (passing with zero margin) -> 14/15/19
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/pro_rewrites.json --worklist docs/_work/pro.json --apply
  verse entries named by drafts:  15   verse entries git reports:  15   RESULT: APPLIED.
$ npx tsx scripts/cp03StructuralVerify.ts --book pro
  NO_BANNED PASS - 48 strings gated, 0 NEW failures
  gate reading: NEW clarity-gate failures 0 - strict reading PASS
  OVERALL: PASS (exit 0)
$ npx tsx scripts/cp02RewriteQuality.ts ...  -> REWRITTEN 15 · PUNCTUATION-ONLY 0
$ npm test 146/146 · audit:data 1342/1342 · cp05Consistency 0 never-write hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

