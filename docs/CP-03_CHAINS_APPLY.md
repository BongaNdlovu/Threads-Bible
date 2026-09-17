# CP-03 · Pillar chains — apply record

Plan v2.0 · Date: 2026-09-17 · Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`

Scope: apply the CP-02 AFTER strings for this book verbatim. Keys, types, keyword arrays,
Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.
VERIFY-ONLY and EQUIVALENT fields yield no change.

## Applied set

- in-scope strings: 658
- rewritten: 175 · VERIFY-ONLY: 483 · EQUIVALENT: 0
- applier: `npx tsx scripts/cp03ApplyRewrites.ts docs/_work/chains_rewrites.json --worklist docs/_work/chains.json --apply`

## Proofs (verbatim command output)

```text
node.exe : npm warn Unknown env config "devdir". This will stop working in the next major version of npm.
At line:1 char:1
+ & "C:\Program Files\nodejs/node.exe" "C:\Program Files\nodejs/node_mo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (npm warn Unknow...version of npm.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
--- pre-flight ---
  chain scope: the tree may hold chain prose from earlier chunks of this pass — nothing else
  data files byte-identical to HEAD — no verse entry dirty. OK
=== apply Pillar chains · docs/_work/chains_rewrites.json ===
scope: CHAINS ONLY — threadChains prose (worklist docs/_work/chains.json; verse-entry verdicts are excluded, not applied)
drafts: 175 · verify-only: 483 · equivalent: 0
worklist strings: 658 · mode: DRY RUN

--- writes by file ---
     0  src/data/threadDetails.ts
     0  src/data/bookThreadDetails.ts

--- accounting ---
  worklist strings:      658
  rewritten:             175
  verify-only:           483
  equivalent:            0
  unaccounted (missing): 0
  unknown keys:          0
  in two verdicts:       0

--- verify mode: auditing the working tree against this draft set ---

--- post-flight (git diff HEAD) ---
  chain drafts named:                30
  chain entries git reports:         30 (abrahamic-blessing, bread-from-heaven, bronze-serpent, covenant-grace, day-of-the-lord, elijah-forerunner, former-latter-rain, great-controversy-arc, image-dominion, judah-royal-scepter, melchizedek-priesthood, new-covenant-heart, no-strange-doctrines, one-flesh-bride, prophet-like-moses, provided-lamb, rest-sabbath, sabbath-creation-new-earth, sanctuary-2300-days, sanctuary-judgment, seed-of-woman, serpent-dragon, seventy-weeks-messiah, shepherd-provision, smitten-rock-water, spirit-of-prophecy-remnant, state-of-dead-immortality, suffering-servant-pierced, three-angels-seal-mark, tree-life-access)
  verse entries git reports:         0
  changed lines:                     168 · inside threadChains: 168 · outside: 0
  every changed line lies inside threadChains and no verse entry changed — OK

RESULT: APPLIED.
```

## Operator theology sign-off

- Decision text: _awaiting operator_
- Signer: _awaiting operator_
- Date: _awaiting operator_

