# CP-03 · Galatians — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 44
- rewritten: 18 · VERIFY-ONLY: 26 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/gal_rewrites.json --worklist docs/_work/gal_p1.json --apply`

## Proofs (verbatim command output)

```text
node.exe : npm warn Unknown env config "devdir". This will stop working in the next major version of npm.
At line:1 char:1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (npm warn Unknow...version of npm.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
=== apply Galatians · docs/_work/gal_rewrites.json ===
drafts: 18 · verify-only: 26 · equivalent: 0
worklist strings: 44 · mode: DRY RUN

--- writes by file ---
     0  src/data/threadDetails.ts
     0  src/data/bookThreadDetails.ts

--- accounting ---
  worklist strings:      44
  rewritten:             18
  verify-only:           26
  equivalent:            0
  unaccounted (missing): 0
  unknown keys:          0
  in two verdicts:       0

--- verify mode: auditing the working tree against this draft set ---

--- post-flight (git diff) ---
  verse entries named by drafts:  18
  verse entries git reports:      18
  chain drafts:                   0
  changed lines inside threadChains: 0
  every changed verse entry was named by a draft; chain changes are confined to threadChains — OK

RESULT: APPLIED.
```

## Sweep findings — part 1

Drafts 18 across the book; measured on the entry strings only, chain prose excluded per §1.12.

**Under-share drafts: 0.** Every draft adds new words above the threshold.

**QUOTE-REVIEW (4)** — where the existing text's quotation does not match the KJV. Under invariant I1 each is left byte-identical and recorded rather than "restored":

- `gal-1-8|principle`
- `gal-3-28|principle`
- `gal-4-4|principle`
- `gal-4-30|principle`

**Glossary drift delta**, before-apply against after-apply:

| Term | BARE before | BARE after | GLOSSED after |
|---|---:|---:|---:|
| covenant | 5 | 4 | 0 |
| justification | 1 | 0 | 0 |
| redemption | 2 | 0 | 0 |

**Punctuation-only audit.** Truly punctuation-only drafts: 0. Capitalisation-only: 0.

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

