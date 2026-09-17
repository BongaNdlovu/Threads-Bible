# CP-03 · Ezekiel — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 36
- rewritten: 15 · VERIFY-ONLY: 21 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/ezk_p2_rewrites.json --worklist docs/_work/ezk_p2.json --apply`

## Proofs (verbatim command output)

```text
node.exe : npm warn Unknown env config "devdir". This will stop working in the next major version of npm.
At line:1 char:1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (npm warn Unknow...version of npm.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
=== apply Ezekiel · docs/_work/ezk_p2_rewrites.json ===
drafts: 15 · verify-only: 21 · equivalent: 0
worklist strings: 36 · mode: DRY RUN

--- writes by file ---
     0  src/data/threadDetails.ts
     0  src/data/bookThreadDetails.ts

--- accounting ---
  worklist strings:      36
  rewritten:             15
  verify-only:           21
  equivalent:            0
  unaccounted (missing): 0
  unknown keys:          0
  in two verdicts:       0

--- verify mode: auditing the working tree against this draft set ---

--- post-flight (git diff) ---
  verse entries named by drafts:  30
  verse entries git reports:      30
  chain drafts:                   0
  changed lines inside threadChains: 0
  every changed verse entry was named by a draft; chain changes are confined to threadChains — OK

RESULT: APPLIED.
```

## Sweep findings — part 2

**Gate.** The one in-scope pre-existing failure is resolved. `ezk-36-26` principle was a 39-word
sentence chaining four promises; it is now four sentences of 16, 13, 16 and 19 words, and the
structural verifier reports `NO_BANNED … 1 base failure(s) resolved`. No new failure was introduced.

**Under-share drafts (2).** Both inspected by reading the added words:

| Draft | New-word share | Words added | Why it is a rewrite, not punctuation theatre |
|---|---:|---|---|
| `ezk-37-12` principle | 5.1% | `has a whole nation` | `possesses life-giving power over physical death and national exile` becomes `has power over physical death and over the exile of a whole nation` |
| `ezk-47-1` principle | 6.7% | `flows out` | `the temple leaks life` becomes `life flows out of the temple`; the em-dash join becomes two sentences |

Both keep their KJV quotations byte-identical. Both are kept as drafts under the CP-02 §5
punctuation-only class; neither is punctuation theatre.

**QUOTE-REVIEW (1).** `ezk-37-12` principle — the source reads `and put My Spirit in you, and you
shall live`, against Ezekiel 37:14 KJV `And shall put my spirit in you, and ye shall live`. The source
capitalises `My`, modernises `ye` to `you`, and marks an omitted clause with an ellipsis. Left
byte-identical under I1 and recorded here rather than "restored".

**Glossary drift delta on this chunk's 36 entry strings:**

| Term | BARE before | BARE after | GLOSSED after |
|---|---:|---:|---:|
| covenant | 2 | 0 | 0 |
| sanctuary | 1 | 0 | 0 |

Drift went down; no term became bare that was not bare before.

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

