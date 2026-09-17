# CP-03 · 2 Samuel — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 49
- rewritten: 26 · VERIFY-ONLY: 23 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/2sa_rewrites.json --worklist docs/_work/2sa.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/2sa_rewrites.json --worklist docs/_work/2sa.json --apply
drafts: 26 · verify-only: 23 · equivalent: 0 · worklist strings: 49
--- writes by file ---
    15  src/data/threadDetails.ts
    11  src/data/bookThreadDetails.ts
--- accounting ---
  unaccounted (missing): 0 · unknown keys: 0 · in two verdicts: 0
--- post-flight (git diff) ---
  verse entries named by drafts:  9
  verse entries git reports:      9
  chain drafts:                   15
  changed lines inside threadChains: 11
  every changed verse entry was named by a draft; chain changes are confined to threadChains - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book 2sa
KEYSET / NONPROSE_FIXITY / PROSE_ONLY_WRITES / CITATION_FIXITY / SCRIPT_FIXITY / NO_BANNED - ALL PASS
OVERALL: PASS (exit 0)

$ npx tsx scripts/cp02RewriteQuality.ts docs/_work/2sa_rewrites.json --worklist docs/_work/2sa.json
drafts: 26 · REWRITTEN 26 · RESEGMENTED 0 · PUNCTUATION-ONLY 0
VERDICT: PASS - no punctuation-only drafts.

$ npm test -> 13 files / 146 tests pass
$ npm run audit:data -> 1342/1342 anchors, SUCCESS all 4 tiers
$ npx tsx scripts/cp05Consistency.ts --book 2sa -> never-write phrases: 0 hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

