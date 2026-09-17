# CP-03 · Lamentations — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 12
- rewritten: 5 · VERIFY-ONLY: 7 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/lam_rewrites.json --worklist docs/_work/lam.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/lam_rewrites.json --worklist docs/_work/lam.json --apply
  verse entries named by drafts:  5   verse entries git reports:  23 (5 lam + 18 jer already applied)
  RESULT: APPLIED.
$ npx tsx scripts/cp03StructuralVerify.ts --book lam  -> OVERALL: PASS (exit 0)
$ npx tsx scripts/cp02RewriteQuality.ts ...           -> REWRITTEN 5 · PUNCTUATION-ONLY 0
$ npm test 146/146 · audit:data 1342/1342 · cp05Consistency 0 never-write hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

