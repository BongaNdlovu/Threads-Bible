# CP-03 · Judges — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 6
- rewritten: 3 · VERIFY-ONLY: 3 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/jdg_rewrites.json --worklist docs/_work/jdg.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/jdg_rewrites.json --worklist docs/_work/jdg.json --apply
drafts: 3 · verify-only: 3 · equivalent: 0 · worklist strings: 6
--- writes by file ---
     3  src/data/bookThreadDetails.ts
--- accounting ---
  unaccounted (missing): 0 · unknown keys: 0 · in two verdicts: 0
--- post-flight (git diff) ---
  verse entries named by drafts:  3
  verse entries git reports:      3
  every changed verse entry was named by a draft - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book jdg
KEYSET / NONPROSE_FIXITY / PROSE_ONLY_WRITES / CITATION_FIXITY / SCRIPT_FIXITY / NO_BANNED - ALL PASS
OVERALL: PASS (exit 0)

$ npx tsx scripts/cp02RewriteQuality.ts docs/_work/jdg_rewrites.json --worklist docs/_work/jdg.json
drafts: 3 · REWRITTEN 3 · RESEGMENTED 0 · PUNCTUATION-ONLY 0

$ npm test -> 13 files / 146 tests pass
$ npm run audit:data -> 1342/1342 anchors, SUCCESS all 4 tiers
$ npx tsx scripts/cp05Consistency.ts --book jdg -> never-write phrases: 0 hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

