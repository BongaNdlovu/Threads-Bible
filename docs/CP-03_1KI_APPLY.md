# CP-03 · 1 Kings — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 22
- rewritten: 21 · VERIFY-ONLY: 1 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/1ki_rewrites.json --worklist docs/_work/1ki.json --apply`

## Proofs (verbatim command output)

```text
$ git checkout -- src/data/threadDetails.ts src/data/bookThreadDetails.ts   (discard a mid-session apply)
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/1ki_rewrites.json --worklist docs/_work/1ki.json --apply
--- post-flight (git diff) ---
  verse entries named by drafts:  11
  verse entries git reports:      11
  every changed verse entry was named by a draft - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book 1ki
KEYSET / NONPROSE_FIXITY / PROSE_ONLY_WRITES / CITATION_FIXITY / SCRIPT_FIXITY / NO_BANNED - ALL PASS
OVERALL: PASS (exit 0)

$ npx tsx scripts/cp02RewriteQuality.ts docs/_work/1ki_rewrites.json --worklist docs/_work/1ki.json
drafts: 21 · REWRITTEN 21 · RESEGMENTED 0 · PUNCTUATION-ONLY 0
VERDICT: PASS - no punctuation-only drafts.

$ npm test -> 13 files / 146 tests pass
$ npm run audit:data -> 1342/1342 anchors, SUCCESS all 4 tiers
$ npx tsx scripts/cp05Consistency.ts --book 1ki -> never-write phrases: 0 hits
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

