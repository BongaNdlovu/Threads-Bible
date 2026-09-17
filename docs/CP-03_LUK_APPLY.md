# CP-03 · Luke — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 50
- rewritten: 25 · VERIFY-ONLY: 25 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/luk_rewrites.json --worklist docs/_work/luk_p1.json --apply`

## Proofs (verbatim command output)

```text
node.exe : npm warn Unknown env config "devdir". This will stop working in the next major version of npm.
At line:1 char:1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (npm warn Unknow...version of npm.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
=== apply Luke · docs/_work/luk_rewrites.json ===
drafts: 25 · verify-only: 25 · equivalent: 0
worklist strings: 50 · mode: DRY RUN

--- writes by file ---
     0  src/data/threadDetails.ts
     0  src/data/bookThreadDetails.ts

--- accounting ---
  worklist strings:      50
  rewritten:             25
  verify-only:           25
  equivalent:            0
  unaccounted (missing): 0
  unknown keys:          0
  in two verdicts:       0

--- verify mode: auditing the working tree against this draft set ---

--- post-flight (git diff) ---
  verse entries named by drafts:  25
  verse entries git reports:      25
  chain drafts:                   0
  changed lines inside threadChains: 0
  every changed verse entry was named by a draft; chain changes are confined to threadChains — OK

RESULT: APPLIED.
```

## Sweep findings — part 1

Drafts 25 across the book; measured on the entry strings only, chain prose excluded per §1.12.

**Under-share drafts: 0.** Every draft adds new words above the threshold.

**QUOTE-REVIEW (9)** — where the existing text's quotation does not match the KJV. Under invariant I1 each is left byte-identical and recorded rather than "restored":

- `luk-18-31|principle`
- `luk-4-12|principle`
- `luk-18-8|principle`
- `luk-22-37|principle`
- `luk-1-76|principle`
- `luk-24-46|principle`
- `luk-1-69|principle`
- `luk-20-17|principle`
- `luk-4-4|principle`

**Glossary drift delta**, before-apply against after-apply:

| Term | BARE before | BARE after | GLOSSED after |
|---|---:|---:|---:|
| covenant | 2 | 0 | 0 |
| redemption | 1 | 1 | 0 |

**Punctuation-only audit.** Truly punctuation-only drafts: 0. Capitalisation-only: 0.

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

