# CP-03 · Psalms — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 291
- rewritten: 118 · VERIFY-ONLY: 171 · EQUIVALENT: 2
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/psa_rewrites.json --worklist docs/_work/psa.json --apply`

## Proofs (verbatim command output)

```text
$ npx tsx scripts/cp03ApplyRewrites.ts docs/_work/psa_rewrites.json --worklist docs/_work/psa.json --apply
drafts: 118 · verify-only: 171 · equivalent: 2
worklist strings: 291
--- writes by file ---
    30  src/data/threadDetails.ts
    88  src/data/bookThreadDetails.ts
--- accounting ---
  rewritten: 118 · verify-only: 171 · equivalent: 2
  unaccounted (missing): 0 · unknown keys: 0 · in two verdicts: 0
wrote src/data/threadDetails.ts
wrote src/data/bookThreadDetails.ts
--- post-flight (git diff) ---
  verse entries named by drafts:  80
  verse entries git reports:      80
  chain drafts:                   30
  changed lines inside threadChains: 28
  every changed verse entry was named by a draft; chain changes are confined to threadChains - OK
RESULT: APPLIED.

$ npx tsx scripts/cp03StructuralVerify.ts --book psa
entries group (87 ids): KEYSET / NONPROSE_FIXITY (742 leaves) / PROSE_ONLY_WRITES (220) /
  CITATION_FIXITY (31 citations, 0 added, 0 dropped) / SCRIPT_FIXITY (32 Hebrew runs,
  1 Greek run, 23 transliterations) / NO_BANNED (220 strings, 0 NEW failures) - ALL PASS
chain group (3 ids): all six checks PASS (71 prose leaves, 4 citations)
gate reading: NEW clarity-gate failures 0 · PRE-EXISTING at HEAD 0 · strict reading PASS
OVERALL: PASS (exit 0)

$ npx tsx scripts/cp02RewriteQuality.ts docs/_work/psa_rewrites.json --worklist docs/_work/psa.json
drafts: 118 · REWRITTEN 76 · RESEGMENTED 3 · PUNCTUATION-ONLY 39
rewritten share distribution: min 10.0% · median 21.6% · mean 28.2% · max 81.0%

Writer's own gate self-check (all 118 draft AFTERs, quotations stripped):
  global max sentence = 29 words · 0 exceed 35 · 0 banned phrases · 0 glossary never-write terms
  KJV cross-check: every Psalms quotation in the source matches public/books/psa.json
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

