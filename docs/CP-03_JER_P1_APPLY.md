# CP-03 · Jeremiah — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 28
- rewritten: 13 · VERIFY-ONLY: 15 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/jer_p1_rewrites.json --worklist docs/_work/jer_p1.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/jer_p1_rewrites.json --worklist docs/_work/jer_p1.json --apply
  verse entries named by drafts:  8   verse entries git reports:  8   RESULT: APPLIED.
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/jer_p2_rewrites.json --worklist docs/_work/jer_p2.json --apply
  verse entries named by drafts:  10  verse entries git reports:  18 (8 from p1 + 10 from p2)
  RESULT: APPLIED.
$ npx tsx scripts/cp03StructuralVerify.ts --book jer  -> OVERALL: PASS (exit 0)
gate reading: NEW clarity-gate failures 0 · strict reading PASS
$ npx tsx scripts/cp02RewriteQuality.ts  -> p1 REWRITTEN 13 · PUNCTUATION-ONLY 0
                                        -> p2 REWRITTEN 10 · PUNCTUATION-ONLY 0
$ npm test 146/146 · audit:data 1342/1342 · cp05Consistency 0 never-write hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

