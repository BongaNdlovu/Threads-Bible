# CP-03 · Daniel — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 44
- rewritten: 20 · VERIFY-ONLY: 24 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/dan_p2_rewrites.json --worklist docs/_work/dan_p2.json --apply`

## Proofs (verbatim command output)

```text
node.exe : npm warn Unknown env config "devdir". This will stop working in the next major version of npm.
At line:1 char:1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (npm warn Unknow...version of npm.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
=== apply Daniel · docs/_work/dan_p2_rewrites.json ===
drafts: 20 · verify-only: 24 · equivalent: 0
worklist strings: 44 · mode: DRY RUN

--- writes by file ---
     0  src/data/threadDetails.ts
     0  src/data/bookThreadDetails.ts

--- accounting ---
  worklist strings:      44
  rewritten:             20
  verify-only:           24
  equivalent:            0
  unaccounted (missing): 0
  unknown keys:          0
  in two verdicts:       0

--- verify mode: auditing the working tree against this draft set ---

--- post-flight (git diff) ---
  verse entries named by drafts:  33
  verse entries git reports:      33
  chain drafts:                   0
  changed lines inside threadChains: 0
  every changed verse entry was named by a draft; chain changes are confined to threadChains — OK

RESULT: APPLIED.
```

## Sweep findings — part 2

**Gate.** The one in-scope pre-existing failure is resolved. `dan-9-24` principle was a 69-word
string; the structural verifier reports `NO_BANNED … 1 base failure(s) resolved` with 0 new failures.
The seventy weeks passage keeps its KJV wording byte-identical.

**Under-share drafts (2), inspected by added words:**

| Draft | Share | Words added |
|---|---:|---|
| `dan-10-21` principle | 5.4% | `and act` |
| `dan-12-3` principle | 4.5% | `leads` |

Both add a real verb for the actor the old sentence left implicit, and both pass the gate. Kept as
drafts under the CP-02 §5 class. No draft in this chunk is punctuation-only.

**QUOTE-REVIEW (1).** `dan-12-4` principle — the source's rendering of Daniel 12:4 does not match the
KJV wording at that verse. Under invariant I1 the quotation is left byte-identical and the divergence
is recorded here rather than "restored".

**Glossary drift delta on this chunk's 44 entry strings:**

| Term | BARE before | BARE after | GLOSSED after |
|---|---:|---:|---:|
| covenant | 4 | 1 | 3 |
| efficacy | 1 | 0 | 0 |
| messianic | 1 | 0 | 0 |
| theophany | 1 | 0 | 0 |
| sanctuary | 1 | 1 | 0 |

Drift fell by six bare uses and none was introduced. The one surviving bare `covenant` hit is
`dan-9-27` title, a heading left byte-identical.

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

