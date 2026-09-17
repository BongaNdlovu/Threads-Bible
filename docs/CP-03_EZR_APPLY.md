# CP-03 · Ezra — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 31
- rewritten: 17 · VERIFY-ONLY: 14 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/ezr_rewrites.json --worklist docs/_work/ezr.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/ezr_rewrites.json --worklist docs/_work/ezr.json --apply
  §1.12: chain prose excluded from this per-book apply — 8 chain draft(s), 9 chain verify-only.
         They belong to the dedicated chain pass (plan 1.12).
  verse entries named by drafts:  6   verse entries git reports:  6   RESULT: APPLIED.
$ npx tsx scripts/cp03StructuralVerify.ts --book ezr  -> OVERALL: PASS (exit 0)
$ npx tsx scripts/cp02RewriteQuality.ts ...           -> REWRITTEN 17 · PUNCTUATION-ONLY 0
$ npm test 146/146 · audit:data 1342/1342 · cp05Consistency 0 never-write hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

