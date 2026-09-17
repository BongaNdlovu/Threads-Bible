# CP-03 · Joshua — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 18
- rewritten: 9 · VERIFY-ONLY: 9 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/jos_rewrites.json --worklist docs/_work/jos.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/jos_rewrites.json --worklist docs/_work/jos.json --apply
drafts: 9 · verify-only: 9 · equivalent: 0 · worklist strings: 18
--- writes by file ---
     9  src/data/bookThreadDetails.ts
--- accounting ---
  unaccounted (missing): 0 · unknown keys: 0 · in two verdicts: 0
--- post-flight (git diff) ---
  verse entries named by drafts:  9
  verse entries git reports:      9
  every changed verse entry was named by a draft - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book jos
KEYSET / NONPROSE_FIXITY / PROSE_ONLY_WRITES / CITATION_FIXITY / SCRIPT_FIXITY / NO_BANNED - ALL PASS
OVERALL: PASS (exit 0)

$ npx tsx scripts/cp02RewriteQuality.ts docs/_work/jos_rewrites.json --worklist docs/_work/jos.json
drafts: 9 · REWRITTEN 9 · RESEGMENTED 0 · PUNCTUATION-ONLY 0

$ npm test
Test Files 13 passed (13) | Tests 146 passed (146)

$ npm run audit:data
Detail coverage: 1342/1342 anchors (100%). SUCCESS: All 4 Tiers audited and 100% validated!

$ npm run lint:sweep
exit 0 (sweep code type-clean)

$ npx tsx scripts/cp05Consistency.ts --book jos
NEVER-WRITE PHRASES PRESENT: none - 0 hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

