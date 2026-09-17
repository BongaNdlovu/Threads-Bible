# CP-03 · Daniel — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 52
- rewritten: 27 · VERIFY-ONLY: 25 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/dan_p1_rewrites.json --worklist docs/_work/dan_p1.json --apply`

## Proofs (verbatim command output)

```text
node.exe : npm warn Unknown env config "devdir". This will stop working in the next major version of npm.
At line:1 char:1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (npm warn Unknow...version of npm.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
=== apply Daniel · docs/_work/dan_p1_rewrites.json ===
drafts: 27 · verify-only: 25 · equivalent: 0
worklist strings: 52 · mode: DRY RUN

--- writes by file ---
     0  src/data/threadDetails.ts
     0  src/data/bookThreadDetails.ts

--- accounting ---
  worklist strings:      52
  rewritten:             27
  verify-only:           25
  equivalent:            0
  unaccounted (missing): 0
  unknown keys:          0
  in two verdicts:       0

--- verify mode: auditing the working tree against this draft set ---

--- post-flight (git diff) ---
  verse entries named by drafts:  17
  verse entries git reports:      17
  chain drafts:                   0
  changed lines inside threadChains: 0
  every changed verse entry was named by a draft; chain changes are confined to threadChains — OK

RESULT: APPLIED.
```

## Sweep findings — part 1

**Gate.** No clarity-gate failure was in scope for this chunk. The one Daniel failure, `dan-9-24`,
is in part 2.

**Under-share drafts (8), each inspected by the words it actually adds.** `cp02RewriteQuality.ts`
flags a draft whose new text shares under 10% of its words with the old text and is not a clean
resegmentation. Daniel's principles are short and quotation-dense, so a real decode can sit under the
threshold:

| Draft | Share | Words added |
|---|---:|---|
| `dan-7-9` principle | 4.2% | `put comes possess` |
| `dan-8-14` principle | 8.0% | `puts setting that piled up is removed` |
| `dan-7-22` principle | 4.9% | `in gives its` |
| `dan-7-27` principle | 9.3% | `it and serve` |
| `dan-7-13` principle | 8.3% | `promised king him shown` |
| `dan-8-11` principle | 5.9% | `takes casts` |
| `dan-2-34` principle | 9.1% | `himself sets up` |
| `dan-2-44` principle | 5.3% | `says them` |

Three were then read in full. `dan-7-9` turns three semicolon-joined clauses into three sentences and
replaces the closing `i.e.` legalese with a plain sentence. `dan-2-34` replaces the abstract
`it arrives by divine act` with `God himself sets it up`. `dan-7-9` terms[0].note turns the em-dash
fragment `Aramaic din — court proceeding, not mere destruction` into `The Aramaic word din means a
court proceeding, not just destruction`, with the transliteration `din` and the citations byte-identical.
All eight are kept as drafts under the CP-02 §5 punctuation-only class. An independent check across all
47 Daniel drafts confirms **zero are punctuation-only or capitalisation-only** — every draft changes
words.

**Glossary drift delta, before-apply against after-apply on this chunk's 52 entry strings:**

| Term | BARE before | BARE after | GLOSSED after |
|---|---:|---:|---:|
| messianic | 1 | 0 | 0 |
| sanctuary | 5 | 5 | 0 |

No term became bare that was not bare before. The five surviving bare `sanctuary` hits are a single
pre-existing cluster around Daniel 8 — `dan-8-11` principle, `dan-8-14` principle, `dan-8-14`
terms[0].note, `dan-8-14` terms[1].note and `dan-8-14` title — all unchanged by this pass.

**Open finding for CP-05 — Daniel is the canon's largest `sanctuary` drift cluster.** A whole-book
cp05 run reports 0 glossed against 18 bare uses of `sanctuary` in Daniel. Most of those sit in the
seven pillar chains that carry a Daniel step, and chain prose is deferred to the Stage A.5 pass under
§1.12, so the chain share of that number is expected to move then. The five entry-prose hits listed
above are this pass's residue and are carried to CP-05 with the rest.

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

