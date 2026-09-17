# CP-03 · Job — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 68
- rewritten: 20 · VERIFY-ONLY: 48 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/job_rewrites.json --worklist docs/_work/job.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/job_rewrites.json --worklist docs/_work/job.json --apply
  §1.12: chain prose excluded — 9 chain draft(s), 33 chain verify-only. They belong to the chain pass.
  verse entries named by drafts:  11   verse entries git reports:  11   RESULT: APPLIED.
$ npx tsx scripts/cp03StructuralVerify.ts --book job  -> OVERALL: PASS (exit 0)
$ npx tsx scripts/cp02RewriteQuality.ts ...           -> REWRITTEN 19 · RESEGMENTED 0 · PUNCTUATION-ONLY 1
     the single punctuation-only draft is a CHAIN string (chain:kinsman-redeemer steps[3].connection,
     +1 word), excluded from this apply by plan 1.12 and recorded for the chain pass.
$ npm test 146/146 · audit:data 1342/1342 · cp05Consistency 0 never-write hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

