# CP-00 · Bootstrap — full-canon plain-language completion (plan v2.0)

Checkpoint: CP-00 (once, Stage 0). Date: 2026-09-17. Operator: Bonga Ndlovu (theology owner).
Plan under execution: `THREADS_BIBLE_FULL_CANON_PLAIN_LANGUAGE_COMPLETION_PLAN_v2.0.md` (one-pass protocol).
Prior record: `docs/CP-00_BOOTSTRAP.md` is the v1.4 bootstrap. It is **left unchanged as history**; this file is the v2.0 record.

---

## 1 · Branch, HEAD, sync (verbatim)

```
$ git rev-parse --abbrev-ref HEAD
cursor/plain-lang-cp01-cp02-genesis-ebb9

$ git fetch origin
(no output — already up to date)

$ git rev-parse HEAD
44cf8e950cffc9d09646439467f17bd98ba6a3dd

$ git status -sb
## cursor/plain-lang-cp01-cp02-genesis-ebb9...origin/cursor/plain-lang-cp01-cp02-genesis-ebb9
 M docs/CP-02_EXODUS_DRAFT.md
 M docs/CP-02_EXODUS_SUMMARY.md
 M docs/CP-02_GENESIS_DRAFT.md
 M scripts/cp02LeviticusAppendix.ts
?? scripts/cp02BookAppendix.ts

$ git rev-list --left-right --count origin/cursor/plain-lang-cp01-cp02-genesis-ebb9...HEAD
0	0
```

Branch rule satisfied: work continues on the open plain-language branch. No fork, no rebase, nothing merged
into `main`, and the UI-polish branch (`cursor/ui-polish-v1.5-v2`) is untouched by this plan.

**The five working-tree entries are the operator's own in-progress work and are preserved as found.** No
sweep commit may sweep them up as a side effect — see §5 for how they are handled.

---

## 2 · Gate baseline at HEAD (verbatim)

```
$ npm run lint          (tsc --noEmit)
scripts/cp02BookAppendix.ts(282,10): error TS2304: Cannot find name 'writeDocs'.
scripts/cp02LeviticusAppendix.ts(29,30): error TS2304: Cannot find name 'BookField'.
scripts/cp02LeviticusAppendix.ts(35,10): error TS2304: Cannot find name 'collectBookFields'.
LINT_EXIT=2

$ npm test              (vitest run)
Test Files  13 passed (13)
Tests       146 passed (146)
Duration    2.48s

$ npm run audit:data    (tsx scripts/auditAllTiers.ts)
Tier 1 · TSK     66/66 books, 63,668 groups
Tier 2 · Citations  108
Tier 3 · Messianic   78
Tier 4 · Chains       42 chains / 277 steps / 1,035 milestone keys
Genesis shadow map: exact 1:1 — 173 details ↔ 173 Genesis anchors.
Book details: all 1183 keys are valid canonical verse ids.
Detail coverage: 1342/1342 anchors (100%) have hand-written titles/explanations.
Tier 3 anchors missing HAND-written details: 0
SUCCESS: All 4 Tiers audited and 100% validated!
AUDIT_EXIT=0
```

| Gate | Baseline | Verdict |
|---|---|---|
| `npm test` (vitest, includes the clarity gate over golden samples + runtime templates) | 13 files / 146 tests pass | **GREEN** |
| `npm run audit:data` | all 4 tiers, 1,342/1,342 anchors | **GREEN** |
| `npm run lint` (tsc --noEmit) | 3 errors, all in two appendix generator scripts | **RED — pre-existing** |

### 2.1 · CHK-01 (blocking finding): the TypeScript gate is red before any sweep work

`npm run lint` cannot pass on this branch as found. Diagnosed, not guessed:

```
RED CAUSE 1 — scripts/cp02BookAppendix.ts   (untracked, 291 lines, never committed anywhere)
  The file contains THREE type declarations interleaved into function bodies, so the
  token stream is not valid TypeScript at all:

    line  88-94   type Row = { … changed: boolean;   ← body cut off; the missing
                                                     "violations" line + "};" sit at 281-282
    line 178-180  if (…) { console.error(…);        ← block cut off before its closing brace,
                                                     then `type DocsInput = {` starts at 180
    line 276-282  runAppendix() body … return writeDocs({…});   ← then "violations: …};" dangles

  Evidence:  git stash list                       -> empty
             git log --all -- scripts/cp02BookAppendix.ts  -> empty (never committed)
             Select-String across scripts/*.ts    -> BookField / collectBookFields / writeDocs
                                                     are DECLARED only here, and only
                                                     cp02LeviticusAppendix.ts references them
             Last write: 2026-09-17 13:08

RED CAUSE 2 — scripts/cp02LeviticusAppendix.ts  (committed; currently modified by the operator)
  Line 29  export type LeviticusField = BookField;          ← BookField does not exist
  Line 35  return collectBookFields('lev');                 ← collectBookFields does not exist
  Both names live in cp02BookAppendix.ts and are never imported or re-exported, so the
  shared engine the file's own header promises ("Delegates to the shared engine so
  Leviticus and every later book use one collector") was never wired up.
```

**Verified before acting:** the only references to `cp02BookAppendix` anywhere in the repo are the
five lines in `cp02LeviticusAppendix.ts` — and four of those five were introduced by my own probe
edit, which I have since reverted. Nothing else imports it. No other copy of the file exists on disk,
in a stash, or in git history, so there is no recoverable version to restore.

**What I did:** backed the broken file up to
`.kilo/backups/scripts-cp02BookAppendix.ts.broken-baseline.bak` (12,375 bytes, byte-identical), then
restored the working tree to the exact baseline above (same five `git status` lines, same three
`tsc` errors). I did **not** reconstruct the operator's missing logic, because the missing pieces are
authorial — the `writeDocs` signed-doc guard ends mid-statement, and re-inventing that guard is the
operator's call, not mine.

**Options (operator decision, not mine to take):**
- **(a) Exclude the two files from this plan's type gate** — this plan's sweeps touch `src/data/**` and
  its own three new tools only; neither broken file is imported by the app, by any test, or by the
  plan's tooling. Cleanest, and leaves the operator's in-progress work untouched.
- **(b) Deprecate `scripts/cp02BookAppendix.ts`** (move it out of `scripts/`, e.g. to
  `.kilo/backups/`), leaving `cp02LeviticusAppendix.ts` to need its own `BookField` +
  `collectBookFields` definitions. Removes the dead shared-engine idea entirely.
- **(c) Finish the refactor** — reconstruct the missing `writeDocs` guard, export
  `BookField`/`collectBookFields`/`writeDocs`, and wire the Leviticus file to import them. Largest
  change; authorial; only if the operator wants the generator kept.

Until one is chosen, **CP-03 cannot claim "lint green" per §1.9.6.** Every other gate is green, and the
plan's own tools are proven independently of the two broken files.

---

## 3 · Prior work verified (do not redo)

Three books are signed off and applied on this branch. Sign-off text quoted verbatim from the apply docs:

```
Genesis    docs/CP-03_GENESIS_APPLY.md:5-8
  "Theology sign-off: accept Genesis VERIFY-ONLY appendix" · Bonga Ndlovu (operator) · 2026-09-17 · PR #4
  (Genesis CP-02 was a VERIFY-ONLY-heavy appendix: the golden samples were already at standard.)

Exodus     docs/CP-03_EXODUS_APPLY.md:6
  "Theology sign-off: accept Exodus CP-02 draft and apply CP-03" · 2026-09-17 · PR #4
  39 entries scanned · 63 field edits applied (sentence-split plain-language rewrites)

Leviticus  docs/CP-02_LEVITICUS_DRAFT.md:3-4 and docs/CP-03_LEVITICUS_APPLY.md:10
  "Theology sign-off: accept Leviticus CP-02 draft and apply CP-03" · 2026-09-17 · PR #4
  Leviticus only: 23 of 41 fields rewritten, 18 VERIFY-ONLY untouched
```

Artifact inventory for those three books (complete; no other book has any artifact):

```
docs/CP-02_GENESIS_DRAFT.md      docs/CP-02_GENESIS_SUMMARY.md   (summary in the draft)
docs/CP-03_GENESIS_APPLY.md
docs/CP-02_EXODUS_DRAFT.md       docs/CP-02_EXODUS_SUMMARY.md
docs/CP-03_EXODUS_APPLY.md
docs/CP-02_LEVITICUS_DRAFT.md    docs/CP-02_LEVITICUS_SUMMARY.md
docs/CP-03_LEVITICUS_APPLY.md
```

Grep for `CP-02` / `CP-03` across `docs/` and `scripts/` returns **no** artifact for any other book, so
the §1.3 queue is complete and correct.

---

## 4 · Model pin — DEVIATION (recorded, not claimed)

Plan metadata pins **`grok-4.6` with `model_params.effort = "xhigh"`**. This session is a DeepSeek
Harness agent, not a Cursor Cloud launch. There is no launch artifact, and no `originalModelName`
containing `grok-4.6`, so the pin is **not satisfied**.

```
MODEL-PIN-DEVIATION   status: unsatisfied
agent:   DeepSeek Harness (local, workspace C:\Users\fanel\Downloads\Threads-Bible-main)
plan:    grok-4.6 + effort=xhigh (not available in this environment)
```

Per §0's anti-hallucination rule this is recorded rather than asserted away. It does not change what is
verified — every gate below is machine output — but it does change who drafted the prose, and the
operator may prefer to re-run the calibration drafts on a pinned session before accepting the voice lock.

---

## 5 · Working-tree handling rule (binding for this run)

The five pre-existing entries are **not mine to commit**. Therefore:

- every sweep commit is path-scoped: `git add src/data/<file> docs/<new artifacts> scripts/<new tools>`
  — never `git add -A`, never `git add .`;
- `scripts/cp02LeviticusAppendix.ts` is listed in `git status` as modified by the operator, so a
  path-scoped add of `scripts/` is forbidden; only this plan's three new tool files are staged;
- the four modified `docs/CP-0{2,3}_*` files are likewise never staged;
- before every commit, `git status --porcelain` is pasted into the book's apply doc to prove the
  operator's files were left alone.

---

## 6 · CP-00 exit checklist

```
[x] Branch confirmed and synced (0/0 vs origin); HEAD printed
[x] Three prior books verified signed-off + applied; sign-off text quoted
[x] Queue completeness proven (no other book has an artifact)
[x] Gates baselined with verbatim output: test GREEN, audit:data GREEN, lint RED (CHK-01, pre-existing)
[x] CHK-01 diagnosed with evidence, backup taken, baseline restored byte-for-byte
[x] Model-pin deviation recorded
[x] Working-tree handling rule written
[ ] Glossary frozen (blocks on CP-01 scan output)
[ ] Three §1.5 tools built and self-tested (in progress)
```
