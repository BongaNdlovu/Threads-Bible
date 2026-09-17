# CP-00 · Bootstrap — full-canon plain-language completion (plan v1.4)

Checkpoint: CP-00 (once). Date: 2026-09-17. Operator: Bonga Ndlovu (theology owner).

## 1 · Model pin — DEVIATION, operator decision required

Plan requirement (PLAN METADATA, §8, §10): Cursor Cloud Agent model **`grok-4.6`** with
`model_params = { "effort": "xhigh" }`, described as non-negotiable.

Actual execution: the work below was executed by **Cline** (local agent harness) against the local
checkout at `C:\Users\fanel\Downloads\Threads-Bible-main\Threads-Bible-main`. No Cursor cloud launch
occurred, so there is no `originalModelName` string or launch artifact to paste, and the
`grok-4.6` + `effort: xhigh` pin is **not satisfied**.

```
MODEL-PIN-DEVIATION   status: unsatisfied
evidence: no launch artifact exists for this session; agent identity is Cline, not Cursor Cloud grok-4.6
```

Consequence for review (why the batch is still reviewable): CP-02 is AI-drafted prose that the
operator reviews field by field, and nothing is written to `src/data/**` until the operator's exact
accept line authorises CP-03. The deviation therefore changes nothing about the review gate — it
changes who drafted the prose.

Operator options: (a) accept this CP-02 draft for review as-is; (b) re-run CP-02 on a `grok-4.6`
`effort: xhigh` cloud session before sign-off; (c) reject. This plan does not decide it.

## 2 · Branch / sync bootstrap

Locked strategy (§10.1): continue the open plain-language PR branch; do not wait for PR #3/#4 merges.

```bash
git fetch origin
```

```
FETCH_EXIT=0
```

```bash
git status -sb
```

```
## cursor/plain-lang-cp01-cp02-genesis-ebb9...origin/cursor/plain-lang-cp01-cp02-genesis-ebb9
?? docs/CP-02_LEVITICUS_DRAFT.md
?? docs/CP-02_LEVITICUS_SUMMARY.md
?? scripts/cp02LeviticusAppendix.ts
?? scripts/scanBookProse.ts
```

(Local branch is level with its remote tip; the four `??` entries are this session's CP-02 artifacts —
see §6 for the post-commit state.)

```bash
git rev-parse HEAD
```

```
5537ba2faf294a2ae6492bd6b21aa1635671e1a2
```

```bash
git log --oneline -3
```

```
5537ba2 CP-03: Apply Exodus appendix per operator sign-off; add proofs and sweep log; clarity + audit green
7ce2625 CP-02: Exodus draft appendix and summary (no data mutations); prefer real sentence-split rewrites; gate results included
4404cfc CP-03: Replace proof placeholders with real outputs and exit codes
```

```bash
git log -1 --format='%H%n%an%n%ad' --date=iso
```

```
5537ba2faf294a2ae6492bd6b21aa1635671e1a2
Cursor Agent
2026-09-16 23:27:32 +0000
```

Environment: `node v24.5.0`, `npm 11.5.1`. `git remote -v` → `origin  https://github.com/BongaNdlovu/Threads-Bible.git`.

## 3 · Genesis + Exodus APPLIED verification (required before any new book)

Source of truth: `docs/COMPLETION_PLAN.md` sweep log.

```
| Genesis | 173 | 2026-09-17 | PASS (AFTER) | 2 sentence-splits under gen-1-1; approved | Bonga Ndlovu (SIGNED-OFF) | APPLIED |
| Exodus | 39 | 2026-09-17 | PASS (AFTER) | Sentence-split rewrites across 63 fields; approved | Bonga Ndlovu (SIGNED-OFF) | APPLIED |
```

Apply artifacts present on this branch:
`docs/CP-03_GENESIS_APPLY.md`, `docs/CP-03_EXODUS_APPLY.md`, `docs/CP-02_EXODUS_DRAFT.md`,
`docs/CP-02_EXODUS_SUMMARY.md`.

Result: Genesis and Exodus are APPLIED on this branch; the queue starts at **Leviticus**. No
Genesis/Exodus work is duplicated in this session.

## 4 · CP-00 checklist status

| Item | Status |
|---|---|
| Launch as `grok-4.6` + `effort: xhigh`, paste identity proof | **NOT SATISFIED** — deviation logged in §1 |
| `git fetch` + identify merge base; continue open PR branch | Done (§2) |
| Confirm Genesis + Exodus rows APPLIED | Done (§3) |
| Print `git rev-parse HEAD` and `git status -sb` | Done (§2) |

## 5 · Halt / handoff

CP-00 complete with one open deviation (§1). Proceeding to CP-01 (baseline) and CP-02 (Leviticus
draft) is permitted by the plan; CP-03 (apply) is not, and is not performed.

## 6 · Post-checkpoint branch state (bookkeeping)

Two commits this session, both pushed to the open sweep PR branch
(`origin/cursor/plain-lang-cp01-cp02-genesis-ebb9` — the tip that PR #4 follows):

```
f9caae9  CP-00/CP-01: Bootstrap evidence + full-canon baseline (live per-book counts 173+1183=1356 keys;
         golden verify; lint/vitest/audit green); add reusable per-book clarity scan helper
75039ae  CP-02: Leviticus draft appendix (hand-authored 1.7 rewrites: 23 changed / 18 VERIFY-ONLY of 41
         fields, 0 gate failures, no data mutations); theology watchlist + scope notes
```

Verification after push:

```bash
git rev-parse HEAD
# 75039ae009f95c9fca2f46c53ee12df40ee9b779

git ls-remote origin refs/heads/cursor/plain-lang-cp01-cp02-genesis-ebb9
# 75039ae009f95c9fca2f46c53ee12df40ee9b779	refs/heads/cursor/plain-lang-cp01-cp02-genesis-ebb9

git status -sb
# ## cursor/plain-lang-cp01-cp02-genesis-ebb9...origin/cursor/plain-lang-cp01-cp02-genesis-ebb9

git diff --stat 5537ba2 HEAD -- src/data
# (empty output: no file under src/data changed by CP-00, CP-01 or CP-02)
```

The `docs/COMPLETION_PLAN.md` sweep log is deliberately NOT updated yet: per plan §2 CP-03 step 4 the
Leviticus row is appended with status APPLIED only after the operator's sign-off line.
