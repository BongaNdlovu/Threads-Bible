# CP-03 · Apply — Leviticus

Scope: apply the operator-approved Leviticus CP-02 AFTER strings to
`src/data/bookThreadDetails.ts` (10 `lev-*` entries) and `src/data/threadDetails.ts` (the three
pillar-chain steps carrying a Leviticus verse id). VERIFY-ONLY fields yield no change. Keys, types,
keyword arrays, Strong's numbers, Hebrew/Greek script, transliterations and citations are preserved.

## Operator theology sign-off

- Decision text: “Theology sign-off: accept Leviticus CP-02 draft and apply CP-03”
- Signer: Bonga Ndlovu (operator)
- Date: 2026-09-17 (Africa/Johannesburg)
- PR: #4 — branch `cursor/plain-lang-cp01-cp02-genesis-ebb9`
- Draft under apply: `docs/CP-02_LEVITICUS_DRAFT.md` (SIGNED-OFF header, same decision text)

## What was applied

- Mechanism: `scripts/cp03LeviticusApply.ts` (dry-run first, then apply). Each edit is scoped to the
  entry's or chain's own brace-matched block and must match its BEFORE literal exactly once.
- Fields applied: **23** of 41 considered. VERIFY-ONLY left untouched: **18**.
  - `src/data/bookThreadDetails.ts` — 17 fields (10 Leviticus entries)
  - `src/data/threadDetails.ts` — 6 fields (3 chain steps: kinsman-redeemer[0],
    sanctuary-2300-days[1], millennium-earth-made-new[0])
- Diff size: exactly 20 source lines changed (20 insertions / 20 deletions); no other file touched.

Applied field list (identical to the signed draft's THEOLOGY-REVIEW list):

```
lev-16-15  title, principle
lev-16-16  title, principle, terms[1].note (uncleanness)
lev-16-22  principle
lev-16-30  principle
lev-17-11  principle
lev-19-18  principle
lev-24-16  principle
lev-25-10  title, principle, terms[0].note (jubilee), terms[1].note (proclaim liberty)
lev-25-25  principle, terms[0].note (kinsman / redeemer)
lev-26-12  principle
chain:kinsman-redeemer            steps[0].title, steps[0].connection (Leviticus 25:25, 47-49)
chain:sanctuary-2300-days         steps[1].title, steps[1].connection (Leviticus 16:16-19)
chain:millennium-earth-made-new   steps[0].title, steps[0].connection (Leviticus 25:10)
```

## Proofs (real command output, no placeholders)

1) Apply run (dry run first, then apply — both exit 0)

```bash
npx tsx scripts/cp03LeviticusApply.ts --dry-run   # writes nothing
npx tsx scripts/cp03LeviticusApply.ts
```

```
=== CP-03 · LEVITICUS APPLY ===
{
  "mode": "applied",
  "approvedFields": 23,
  "appliedFields": 23,
  "proseOnlyProof": "skeleton identical",
  "perFile": [
    { "file": "src/data/bookThreadDetails.ts", "fields": 17 },
    { "file": "src/data/threadDetails.ts", "fields": 6 }
  ]
}
APPLY_EXIT=0
```

The prose-only proof strips every approved BEFORE literal from the pre-apply text and every AFTER
literal from the post-apply text; the two skeletons must then be byte-identical. A changed key, type,
keyword array, Strong's number, Hebrew/Greek script or comment fails the run and writes nothing.

2) Applied text equals the signed draft exactly

```bash
npx tsx scripts/cp02LeviticusAppendix.ts --check-applied    # no files written
```

```
=== CP-03 · VERIFY APPLIED LEVITICUS REWRITES (no files written) ===
{
  "approvedRewrites": 23,
  "dataMatchesApprovedAfter": 23,
  "mismatches": 0
}
CHECK_EXIT=0
```

3) Type-check (tsc/lint)

```bash
npm run lint
```

```
> threads-bible@1.0.0 lint
> tsc --noEmit

LINT_EXIT=0
```

4) Tests (vitest, includes the clarity-gate suite)

```bash
npm test
```

```
 Test Files  13 passed (13)
      Tests  146 passed (146)
   Duration  1.93s
TEST_EXIT=0
```

5) Clarity gate (Leviticus prose scan after apply)

```bash
npx tsx scripts/scanBookProse.ts lev
```

```
=== LEV PROSE CLARITY-GATE SCAN ===
{
  "book": "lev",
  "entryCount": 10,
  "failingEntries": 0,
  "failingChains": 0
}

--- Failing LEV Entries (by field) ---
{}

--- Failing Pillar Chains carrying lev steps (by field) ---
{}
SCAN_EXIT=0
```

6) Data audit (audited after apply)

```bash
npm run audit:data
```

```
Loaded KJV canon: 31102 verses indexed.
Tier 1 Status: 66/66 books present.
Tier 2 Status: 100% of 108 citations resolve to valid canonical verses.
Tier 3 Status: 100% of 78 prophecies resolve to valid canonical verses.
Tier 4 Status: 100% of 42 chains and all 277 timeline steps resolve perfectly.
Genesis shadow map: exact 1:1 — 173 details ↔ 173 Genesis anchors.
Book details: all 1183 keys are valid canonical verse ids.
Detail coverage: 1342/1342 anchors (100%) have hand-written titles/explanations.
SUCCESS: All 4 Tiers audited and 100% validated!
AUDIT_EXIT=0
```

7) Diff excerpt (prose-only; the keyword array line is untouched)

```
-    title: 'The Jubilee — Proclaiming Universal Liberty and Restitution',
+    title: 'The Jubilee — Liberty for All and the Return of Lost Inheritance',
 sourceKeywords: ['hallow the fiftieth year', 'proclaim liberty', 'jubilee', 'return every man unto his possession'],
-      { term: 'jubilee', original: 'יוֹבֵל', translit: 'yovel', gloss: 'ram's horn / jubilee season of release', note: 'Trumpet sounding freedom and restoration of lost ancestral lands.' },
+      { term: 'jubilee', original: 'יוֹבֵל', translit: 'yovel', gloss: 'ram's horn / jubilee season of release', note: 'The trumpet announced freedom and the return of land that had belonged to a family.' },
```

```
git diff --stat -- src/data
 src/data/bookThreadDetails.ts | 34 +++++++++++++++++-----------------
 src/data/threadDetails.ts     |  6 +++---
```

## Sweep log

Row appended to `docs/COMPLETION_PLAN.md` (Book | Entries | Batch date | Gate | THEOLOGY-REVIEW |
Operator review | Status).

## CP-04 spot render

Not due for this batch. Applied books are now Genesis (1), Exodus (2), **Leviticus (3)**; the plan
calls for a production build plus a screenshot of one rewritten thread card/split every **4th**
applied book — i.e. after **Numbers**.

## Status

APPLIED (Leviticus). HARD STOP before Numbers or any other book until the operator says continue.
