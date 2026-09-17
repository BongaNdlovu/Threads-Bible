# CP-03 · Numbers — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 60
- rewritten: 19 · VERIFY-ONLY: 40 · EQUIVALENT: 1
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/num_rewrites.json --worklist docs/_work/num.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/num_rewrites.json --worklist docs/_work/num.json --apply
drafts: 19 · verify-only: 40 · equivalent: 1
worklist strings: 60 · mode: APPLY
--- writes by file ---
     7  src/data/threadDetails.ts
    12  src/data/bookThreadDetails.ts
--- accounting ---
  worklist strings: 60 · rewritten: 19 · verify-only: 40 · equivalent: 1
  unaccounted (missing): 0 · unknown keys: 0 · in two verdicts: 0
wrote src/data/threadDetails.ts
wrote src/data/bookThreadDetails.ts
--- post-flight (git diff) ---
  verse entries named by drafts:  10
  verse entries git reports:      10
  chain drafts:                   7
  changed lines inside threadChains: 7
  every changed verse entry was named by a draft; chain changes are confined to threadChains - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book num
KEYSET PASS · NONPROSE_FIXITY PASS · PROSE_ONLY_WRITES PASS
CITATION_FIXITY PASS (9 citations, 0 added / 0 dropped)
SCRIPT_FIXITY PASS (6 Hebrew runs, 1 Greek run, 6 transliterations)
NO_BANNED PASS (32 strings gated · 0 NEW failures)
gate reading: NEW clarity-gate failures 0
OVERALL: PASS (exit 0)

$ npm run lint
scripts/cp02BookAppendix.ts(282,10): error TS2304: Cannot find name 'writeDocs'.
scripts/cp02LeviticusAppendix.ts(29,30): error TS2304: Cannot find name 'BookField'.
scripts/cp02LeviticusAppendix.ts(35,10): error TS2304: Cannot find name 'collectBookFields'.
(3 errors, all pre-existing CHK-01 in the operator's broken appendix scripts; 0 in sweep code or data)

$ npm test
Test Files 13 passed (13) | Tests 146 passed (146)

$ npm run audit:data
Genesis shadow map: exact 1:1 - 173 details <-> 173 Genesis anchors.
Book details: all 1183 keys are valid canonical verse ids.
Detail coverage: 1342/1342 anchors (100%).
SUCCESS: All 4 Tiers audited and 100% validated!
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

