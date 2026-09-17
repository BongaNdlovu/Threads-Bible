# CP-03 · Isaiah — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 86
- rewritten: 42 · VERIFY-ONLY: 44 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/isa_p2_rewrites.json --worklist docs/_work/isa_p2.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/isa_p{1,2,3}_rewrites.json --worklist docs/_work/isa_p{1,2,3}.json --apply
  isa_p1: 37 verse entries named == 37 reported    RESULT: APPLIED.
  isa_p2: 74 == 74 (37 + 37)                       RESULT: APPLIED.  (split-book post-flight)
  isa_p3: 111 == 111 (37 + 37 + 37)                RESULT: APPLIED.
$ npx tsx scripts/cp03StructuralVerify.ts --book isa
  NO_BANNED PASS - 272 working-tree prose strings gated, 0 NEW failures, 2 base failures RESOLVED
  gate reading: NEW clarity-gate failures 0 - strict reading PASS
  OVERALL: PASS (exit 0)
  the two resolved failures are isa-9-6 (38-word KJV sentence, now quoted) and
  isa-42-6 (45-word KJV sentence, now quoted) - words unchanged in both.
$ npm test 146/146 · audit:data 1342/1342 · cp05Consistency 0 never-write hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

