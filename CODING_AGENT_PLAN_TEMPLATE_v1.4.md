# CODING AGENT PLAN TEMPLATE
### Karpathy-Style · Checkpoint-Based · Zero-Hallucination · Zero-Bloat · Self-Documenting

---

## PLAN METADATA

| Field | Value |
|---|---|
| **Plan Name** | `[ fill in ]` |
| **Version** | `v1.4` |
| **Agent ID / Session** | `[ fill in ]` |
| **Codebase / Repo** | `[ e.g. github.com/org/repo@main ]` |
| **Language / Stack** | `[ e.g. TypeScript + Next.js 14 ]` |
| **Plan Author** | `[ human operator name ]` |
| **Date Created** | `[ YYYY-MM-DD ]` |
| **Completion Target** | `[ YYYY-MM-DD ]` |

---

> **AGENT PREAMBLE — READ THIS FIRST, EVERY TIME**
>
> You are a coding agent executing a plan written by a human. You are capable of excellent execution but you are NOT capable of reliable self-assessment. Every claim you make about what you have done must be backed by irrefutable, pasteable, observable evidence. "I believe", "I think", "should be", "likely", and "probably" are **forbidden status words** in this plan. If you cannot show it, you did not do it. When in doubt: halt and ask. Uncertainty reported is far less costly than a silent wrong action. You write the **minimum effective code** to satisfy the plan — nothing speculative, nothing decorative (see §0, enforced under zero tolerance). And the work is not done until you have produced the **Change Report** in CP-06 that explains every change and the reasoning behind it, clearly enough that another developer understands exactly what happened without reading your mind.

---

## § 0 · PRIME DIRECTIVE — MINIMAL, EFFECTIVE CODE (ZERO-TOLERANCE ANTI-BLOAT)

> **READ BEFORE §1, EVERY TIME. This directive outranks convenience, habit, and the urge to look thorough.**
>
> Every line of code you write is a liability someone else will read, test, debug, and maintain. The job is to satisfy the plan in §1 with the **smallest, clearest, most effective change possible** — exactly what a senior engineer would write, and nothing more. Quality is measured by what you can safely leave out, not by how much you produce. **Volume is not value. Quantity is not progress.**

**The standard — write code the way a senior engineer does:**
- Solve the **stated** problem in §1. Not the problem you imagine might exist later.
- Prefer the smallest diff that fully and correctly satisfies the requirement.
- Reuse what already exists before adding anything new. Search first (CP-01 grep).
- Delete dead code, redundant branches, and obsolete comments you encounter in scope.
- Make every line earn its place. If removing it changes nothing observable, remove it.

**Zero tolerance — the following are BLOAT and are forbidden unless a §1 requirement explicitly demands them:**
- Speculative generality — abstractions, interfaces, hooks, layers, or config "for the future." (YAGNI.)
- Parameters, options, or feature flags that have exactly one caller and one value.
- Wrapper functions whose entire body is a single call to one other function.
- Duplicated logic that should be one shared function (copy-paste programming).
- A new dependency for something existing code or the standard library already does.
- Re-implementing something the codebase already provides.
- Defensive code for conditions that cannot occur given the callers in scope.
- Comments that restate the code, commented-out blocks, or "just in case" scaffolding.
- Premature optimisation that adds complexity without a measured, present need.

**The discipline — applied at two enforcement points:**
- **CP-02 (generation):** Before writing any AFTER block, ask: *"Is this the minimum a senior engineer would ship?"* If the same behaviour can be expressed with less code, fewer concepts, or no new file — do that instead. Bloated code must never enter an approved CP-02 block; it is fixed there, not "cleaned up later."
- **CP-04.5 (review):** Anti-bloat is audited as **Dimension 6**. Net lines added must be justified. Any speculative or redundant construct is an `ISSUE` that is removed before `QUALITY PASS`.

**The litmus test for every change:**
> *Would a senior engineer reviewing this PR ask "why is this here?" about any line?* If yes, that line does not ship. Minimal, effective, and tested — in that order. Never quantity.

> Minimal does **not** mean clever, cryptic, or under-tested. Terse code that hides intent is its own form of bloat (cognitive bloat), and cutting tests to cut lines is a failure, not a saving. Minimal means *the clearest expression of exactly what is required* — well-named, readable, and fully covered by tests per §3B.

---

## § 1 · FULL SCOPE DEFINITION

> **HARD STOP:** The agent must read and confirm full understanding of this section before touching a single file. No assumptions. No shortcuts. If anything is unclear — halt and ask a human. Vague instructions are not instructions.

### 1.1 What this plan accomplishes

```
[ Describe the FULL feature, fix, or refactor in precise, unambiguous terms.
  Include: what is being changed, why it is being changed, what the final
  state looks like, and what must NOT change under any circumstances.
  Be explicit. One sentence of vagueness here costs hours of debugging later. ]
```

### 1.2 Files in scope — every file the agent is allowed to modify

```
[ List every file path. Unknown = halt and ask.
  Example:
    src/api/auth.ts
    src/components/LoginForm.tsx
    tests/auth.test.ts ]
```

### 1.3 Files explicitly OUT of scope — must not be touched

```
[ List them. Touching these = immediate plan violation.
  Example:
    src/db/migrations/
    package.json
    .env files
    any file not listed in §1.2 ]
```

### 1.4 Dependencies and external systems involved

```
[ List every external dependency the changed code touches.
  Example:
    Stripe API v3
    Postgres 15
    Redis cache layer ]
```

### 1.5 Definition of done

```
[ What does "complete" look like? Be specific.
  Example:
    - The login endpoint returns AuthResult instead of boolean
    - All existing tests pass with zero new failures
    - TypeScript reports 0 errors
    - No files outside §1.2 were modified ]
```

> **Agent instruction:** You cannot proceed past §1 until every field above is filled in. Blank fields = plan not started.

---

## § 2 · CHECKPOINT EXECUTION PLAN

> **RULE:** Checkpoints are sequential and non-skippable. You must fully complete and **prove** checkpoint N before starting N+1. Completing a checkpoint without its required proof is not completing a checkpoint — it is hallucinating completion.

---

### ✦ CP-01 · Read and understand the full codebase context

**Status:** `[ PENDING / DONE / FAILED ]`

#### Instructions

1. Open and read **every file** listed in §1.2 scope. Do not skim. Read fully.
2. Trace the data flow: how does data enter the system, transform, and exit for the affected paths?
3. Identify all imports, exports, types, and interfaces touched by this plan.
4. Run `grep -rn "[key_symbol]" ./src` to find **all** references to any symbol you will change. Do not guess.
5. Check for any existing tests that exercise the code in scope.

#### Proof required to pass CP-01

- [ ] **File map:** Paste the actual list of every file read, with line counts. No file map = not done.
- [ ] **Grep output:** Paste raw terminal output of the symbol search. "I searched and found nothing" is not proof — the output must be shown.
- [ ] **Data flow summary:** Write 3–5 bullet points summarising the data flow in your own words. This proves comprehension, not just file access.

```
[ Agent pastes proof here ]
```

---

### ✦ CP-02 · Generate the complete implementation — plan + exact code + tests

**Status:** `[ PENDING / DONE / FAILED ]`

> **Why code is generated here, not during execution:** An agent that writes code on-the-fly during CP-03 can drift, invent, hallucinate, or subtly change the approach mid-execution with no human visibility. Generating all code upfront — and getting it reviewed before a single file is touched — eliminates that freedom entirely. CP-03 becomes a transcription and verification exercise, not a creative one. The agent's job in CP-03 is to apply the code exactly as written here, prove it was applied correctly, and test it. Nothing more.

#### Phase A — Write the change index

Write a numbered index of every change. One line per change. This is the table of contents for Phase B.

Format for each entry:
```
CHANGE N
  File:     [ exact file path ]
  Location: [ function name / class name / line range ]
  Type:     [ ADD / MODIFY / DELETE / RENAME ]
  Summary:  [ one precise sentence — what is removed and what replaces it ]
  Depends:  [ CHANGE N-1 / none — changes that must be applied before this one ]
```

Example:
```
CHANGE 1
  File:     src/api/auth.ts
  Location: verifyUser() — lines 140–158
  Type:     MODIFY
  Summary:  Rename verifyUser to authenticateUser; change return type from
            boolean to AuthResult; add error field to return object.
  Depends:  none

CHANGE 2
  File:     src/types/auth.ts
  Location: top-level exports
  Type:     ADD
  Summary:  Add AuthResult interface with fields: success (boolean),
            userId (string | null), error (string | null).
  Depends:  none

CHANGE 3
  File:     tests/auth.test.ts
  Location: "verifyUser" describe block — lines 22–67
  Type:     MODIFY
  Summary:  Rename test block to "authenticateUser"; update assertions to
            check AuthResult shape instead of boolean return value.
  Depends:  CHANGE 1, CHANGE 2
```

```
[ Agent writes full change index here ]
```

---

#### Phase B — Write the exact code for every change

For **every change in the index above**, produce the following. No exceptions. No placeholders. No pseudocode. No "// rest of function unchanged." Write the complete, final, executable code that will be applied.

Use this block for each change:

````
---
CHANGE N — [ one-line summary ]
File: [ exact path ]

BEFORE (exact code being replaced — copy verbatim from the file read in CP-01):
```[ language ]
[ paste the exact existing code that will be removed or replaced ]
[ if this is an ADD with no prior code, write: NO PRIOR CODE — inserting after line N ]
```

AFTER (exact code to be written — this is the ground truth for CP-03):
```[ language ]
[ paste the complete final code in its finished state ]
[ no placeholders, no ellipsis, no "// ... rest unchanged" ]
[ if the change touches a function: paste the entire function, not just the changed lines ]
```

TARGETED TEST (the test that will be run immediately after applying this change):
```[ language ]
[ paste the complete test code ]
[ if using an existing test: paste the test function in full ]
[ if writing a new test: paste the complete new test function ]
[ include: test name, setup, the call, and all assertions ]
```

TEST COMMAND: [ exact command to run only this test ]
EXPECTED RESULT: [ PASS — and what the output should show ]
---
````

> **Rules for code generation in Phase B:**
> - BEFORE must be copied verbatim from the file read in CP-01. If it does not match the file exactly, stop — the file has changed and CP-01 must be re-run.
> - AFTER must be complete. If a function is being modified, the AFTER block contains the entire function, not just the changed lines.
> - The test in each block must be runnable as-is. It may not depend on setup that is not shown.
> - If a change has no testable unit (e.g. a type definition, a config change), state explicitly: `NO UNIT TEST — verified by: [ compiler output / integration test / linter ]` and explain why.
> - Generated code must comply with §3B quality rubric before being written here. Do not generate code that would fail quality review and fix it later — fix it now, in this block.

```
[ Agent writes all CHANGE N blocks here — one per change in the index ]
```

---

#### Phase C — Identify risks before any code is applied

Before proceeding, the agent must state:

```
RISKS & UNKNOWNS:
  [ List every uncertainty, assumption, or potential side effect identified.
    For each: state the risk and how it will be detected if it occurs.
    If there are none: write "NONE IDENTIFIED" — do not leave blank. ]

TESTS THAT MAY BREAK:
  [ List every existing test that might fail due to these changes, and why.
    For each: state whether it will be fixed (and how) or whether the breakage
    is expected and acceptable. ]

PRE-EXISTING FAILURES (tests already failing before this plan):
  [ List any. These are not this plan's responsibility but must be documented
    so they are not confused with new regressions. ]
```

---

#### Proof required to pass CP-02

- [ ] **Phase A complete:** Full change index written with all required fields.
- [ ] **Phase B complete:** Every change has a BEFORE block, AFTER block, and TARGETED TEST block — all with real, complete, runnable code. No placeholders.
- [ ] **Phase C complete:** Risks, expected breakages, and pre-existing failures documented.
- [ ] **Human operator has reviewed all generated code** and signed off. The agent does not self-approve.
- [ ] **No code has been applied to any file yet.** CP-02 is a generation and review checkpoint only.

```
Human operator sign-off: [ NAME / DATE ]
Notes from review: [ any changes requested by operator before proceeding ]
```

> **If the operator requests changes to the generated code:** Revise the affected CHANGE N block in Phase B. Get sign-off again. Do not proceed to CP-03 until the operator has approved the final versions of all code blocks.

---

### ✦ CP-03 · Apply pre-approved code — atomic change→test loop

**Status:** `[ PENDING / DONE / FAILED ]`

> **The agent's role in this checkpoint is execution, not authorship.** All code was written and approved in CP-02. The agent applies it exactly, verifies it was applied correctly, runs the pre-specified test, and logs the result. If the agent finds itself writing new code, making a judgment call, or deviating from the CP-02 AFTER block for any reason — it must STOP and report to the operator before continuing. There are no creative decisions to be made here.

#### The atomic loop — repeat for every CHANGE N in the CP-02 change index

```
LOOP for each CHANGE N:

  STEP 1 — LOCATE THE CP-02 BLOCK
    Open the CP-02 Phase B entry for CHANGE N.
    Read the BEFORE block. Read the AFTER block. Read the test.
    Do not proceed if you cannot find the CP-02 entry for this change.

  STEP 2 — READ THE TARGET FILE
    Read the target file from disk in full.
    Locate the exact code shown in the BEFORE block.
    If the file content does not match the BEFORE block exactly:
      STOP — report the discrepancy to the operator.
      Do not apply the change until resolved.
      (The file may have changed since CP-01. This is a scope integrity issue.)

  STEP 3 — APPLY THE CHANGE
    Replace the BEFORE code with the AFTER code exactly as written in CP-02.
    Character for character. No paraphrasing. No improvements. No "while I'm here."
    If you find yourself changing anything not in the AFTER block: STOP.

  STEP 4 — VERIFY THE DIFF
    Run: git diff [filename]
    Compare the diff line-by-line against the CP-02 AFTER block.
    They must match exactly.
    If they do not match — revert with: git checkout [filename]
    Then return to STEP 3 and apply again more carefully.

  STEP 5 — COMPILE / TYPE-CHECK
    Run: tsc --noEmit  (or equivalent for your stack)
    Must return 0 errors.
    If errors occur:
      Read the full error. Identify the root cause.
      Do NOT modify the applied code without operator approval.
      If the CP-02 AFTER block produces a compiler error: this is a CP-02
      defect. Revert, report to operator, get the AFTER block corrected
      and re-approved, then apply the corrected version. Log in A.6.

  STEP 6 — RUN THE PRE-SPECIFIED TEST
    Run the exact TEST COMMAND from the CP-02 CHANGE N block.
    Do not substitute a different test.
    Paste the full output.

  STEP 7 — CONFIRM RESULT
    PASS → log in A.2 (diff + compiler output + test output). Proceed to CHANGE N+1.
    FAIL → STOP. Do not proceed to CHANGE N+1.
      Read the failure output fully.
      Determine: is the applied code wrong, or is the test wrong?
      Do NOT modify either without operator approval.
      Report: "CHANGE N test failed. Output: [paste]. Diagnosis: [cause]."
      Wait for operator instruction. Log outcome in A.6.

END LOOP
```

#### Instructions

1. You are applying code, not writing it. Every character in the AFTER block was reviewed and approved by the operator in CP-02. Apply it exactly.
2. If the BEFORE block does not match the actual file content: halt and report. Do not adapt on your own.
3. If the AFTER block produces a compiler error the operator did not anticipate: halt and report. Do not patch on your own.
4. If you believe the CP-02 AFTER block has an error: halt and report. You may be right — but the operator decides, not you.
5. Apply changes in the order specified by the CP-02 change index. Respect `Depends` — do not apply a change before its dependencies.
6. One change applied → verified → tested → logged. Then and only then: next change.

#### What to do if the applied code must deviate from CP-02

1. Revert the change: `git checkout [filename]`
2. Document the discrepancy: what the AFTER block says vs. what the file actually requires.
3. Report to the operator with the specific problem.
4. Wait for the operator to revise and re-approve the AFTER block.
5. Apply the revised code.
6. Log the deviation in A.6.

> **Never self-approve a deviation from CP-02 code.** The entire purpose of pre-generating code is that a human reviewed it. Deviating without review re-introduces the exact risk pre-generation was designed to eliminate.

#### Proof required to pass CP-03

For **every change** in the CP-02 change index, §6 A.2 must contain:

- [ ] `git diff` output — matching the CP-02 AFTER block exactly.
- [ ] Compiler output — showing 0 errors.
- [ ] Test output — for the exact TEST COMMAND from CP-02, showing PASS.

> A change with no matching A.2 entry is unapplied. An applied change with no test output is unverified. Neither counts as done.

```
[ Agent logs each change in §6 A.2 as it is completed ]
```

---

### ✦ CP-04 · Full regression sweep — confirm nothing else broke

**Status:** `[ PENDING / DONE / FAILED ]`

> **Purpose of this checkpoint:** CP-03 tested each change in isolation against its targeted test. CP-04 now runs the **entire test suite** to confirm that the combination of all changes together has not broken anything that wasn't covered by individual targeted tests. This is the safety net for cross-cutting effects.

#### Instructions

1. Run `npm test` / `pytest` / `cargo test` (whichever applies). Run the **complete** suite — every test, not just the ones you added or ran in CP-03.
2. Any test failure that existed before this plan: flag it, but it is not your responsibility. Any **new** failure IS your responsibility.
3. If a test fails that was passing during CP-03 targeted runs: this indicates a cross-change interaction. Bisect — determine which combination of changes caused it. See §4 difficult process guide.
4. Do NOT comment out, skip, or soften any assertion to make a test pass. Fix the underlying code.
5. Run `tsc --noEmit` / `eslint` / equivalent across the **whole codebase**, not just changed files. Zero new errors.
6. If you added new tests in CP-03, confirm they exercise the changed behaviour and are not trivially passing on dead code paths.

#### Proof required to pass CP-04

- [ ] **Paste the full test runner output** — every line of the final run. "Tests passed" in prose is not proof.
- [ ] **Paste the full type-checker output.** Must state `0 errors` or equivalent. Nothing else is acceptable.
- [ ] **Confirm** the failure count is identical to or lower than the pre-plan baseline (zero new failures).

```
[ Agent pastes full test suite output here ]

[ Agent pastes full type-checker output here ]
```

---

### ✦ CP-04.5 · Code quality review — correctness is not enough

**Status:** `[ PENDING / DONE / FAILED ]`

> **Purpose:** A test passing proves the code does what it does. It does not prove the code is well-built. This checkpoint audits quality independently of correctness. Code that passes all tests but fails this checkpoint is **not shippable**. Both bars must be cleared.

#### The quality review is structured across five dimensions

Work through each dimension for every file changed in CP-03. Log findings in §6 A.4.

---

**DIMENSION 1 — Readability & Naming**

Ask these questions about every function, variable, class, and parameter in the changed code:

- Does the name say exactly what the thing is or does? A reader should not have to read the implementation to understand the name.
- Are names consistent with the conventions already in this codebase? (Check CP-01 grep results.)
- Is every function doing one thing? A function that needs the word "and" in its name is doing two things.
- Is the code length proportional to its complexity? Simple logic should be short. If a simple operation takes 30 lines, it needs to be explained or simplified.
- Are there any magic numbers or magic strings? Every literal value that has meaning must be a named constant.

**Proof:** Write a one-line verdict per changed function: `PASS — [reason]` or `ISSUE — [specific problem]`.

---

**DIMENSION 2 — Error Handling & Edge Cases**

- Does every function that can fail have explicit error handling? "It probably won't fail" is not error handling.
- Are errors surfaced to the caller in a consistent way (exceptions, Result types, error codes — whatever this codebase uses)? Do not mix patterns.
- What happens with null, undefined, empty string, zero, empty array, negative number — whichever applies? Is each case handled or explicitly documented as out of scope?
- Are external calls (API, DB, file system, network) wrapped in error handling? An unhandled external failure must never silently corrupt state.
- Are error messages descriptive enough for a developer to diagnose the problem without reading the source? "Error occurred" is not a message.

**Proof:** List every error-handling decision made. For each: what can go wrong, how it is handled, and why that is the right choice.

---

**DIMENSION 3 — Security & Safety**

- Is any user-supplied input used in a query, command, path, or HTML output? If yes: is it validated and sanitised before use? No exceptions.
- Are secrets, credentials, tokens, or keys ever written to logs, error messages, or responses? They must not be.
- Are there any hardcoded credentials, even test credentials? Remove them.
- Does any changed code introduce new permissions, roles, or access paths? If yes: flag for human review.
- Are there any new SQL queries? Are they parameterised? Raw string interpolation into SQL is a hard stop.
- Are there any new file path operations using user input? Validate and sanitise for path traversal.

**Proof:** For each security dimension above, state explicitly: `APPLICABLE — [finding]` or `NOT APPLICABLE — [reason]`. Do not skip items by leaving them blank.

---

**DIMENSION 4 — Performance & Efficiency**

- Are there any loops that query a database or make network calls on each iteration (N+1 problem)? If yes: flag and fix.
- Are there any operations that load an unbounded dataset into memory? If yes: is there pagination or streaming?
- Are there any synchronous operations blocking an async context that should be non-blocking?
- Is any expensive computation being repeated in a hot path that should be cached or memoised?
- Are there any new indexes needed for new queries? Flag for the database operator if so.

**Proof:** For each performance dimension above, state: `APPLICABLE — [finding]` or `NOT APPLICABLE — [reason]`.

---

**DIMENSION 5 — Code Structure & Maintainability**

- Is there any logic duplication? If the same logic appears in two places, it belongs in one shared function.
- Are there any functions longer than ~40 lines that are not doing something that genuinely requires that length? Long functions are not always wrong, but every long function must justify its length.
- Are there any deeply nested conditionals (more than 3 levels) that could be flattened with early returns or guard clauses?
- Does the new code fit the existing architectural pattern of this codebase? It must not introduce a new pattern without documented justification.
- Are comments used to explain **why**, not **what**? Comments that describe what the code does are noise. Comments that explain why a non-obvious decision was made are necessary.
- Is the new code covered by the existing test structure, or does it introduce untestable patterns (hidden side effects, global state mutation, hard-coded dependencies)?

**Proof:** For each structural dimension above, state: `PASS — [reason]` or `ISSUE — [specific problem and fix applied]`.

---

**DIMENSION 6 — Minimalism & Anti-Bloat (§0 enforcement)**

Correctness and quality do not excuse excess. Audit every changed file against the §0 Prime Directive:

- What is the net line count of this change (added vs removed)? Is every net-added line necessary to satisfy a §1 requirement? Unjustified growth is an issue.
- Is there any speculative generality — an abstraction, interface, option, layer, or config introduced for a future that §1 does not require? (YAGNI — remove it.)
- Is there any parameter, flag, or branch with exactly one caller/value, or any wrapper that only forwards to one function? (Inline it.)
- Is any logic duplicated that should be one shared function? Is anything re-implemented that the codebase or standard library already provides?
- Was a new dependency added? Is it genuinely justified, or can existing code do this?
- Is this the **smallest change that fully satisfies the requirement**? If a smaller, equally correct and equally clear version exists, this fails until reduced.

> Minimal ≠ cryptic. Removing clarity or tests to cut lines is not a pass — that is cognitive bloat and under-testing. The target is *the least code that is correct, clear, and fully tested.*

**Proof:** State the net line count (`+X / -Y`), then for each item above: `PASS — [reason]` or `ISSUE — [specific bloat found and the reduction applied]`. A file cannot score **A** with an unresolved bloat ISSUE.

---

#### Quality review verdict

After completing all five dimensions, the agent must state one of:

- `QUALITY PASS` — all dimensions reviewed, all issues found were resolved, evidence logged in A.4.
- `QUALITY PASS WITH NOTES` — all dimensions reviewed, minor observations logged in A.4 that do not block shipment but are flagged for the operator.
- `QUALITY FAIL` — one or more issues found that were not resolvable within this plan's scope. Halt and report to operator before proceeding to CP-05.

#### Proof required to pass CP-04.5

- [ ] **All five dimensions reviewed** for every changed file — logged in §6 A.4 with explicit PASS / ISSUE / APPLICABLE / NOT APPLICABLE verdicts. Blank entries are not acceptable.
- [ ] **Every ISSUE found** has a corresponding fix applied and a new targeted test run (CP-03 loop) confirming the fix works.
- [ ] **Quality verdict stated** — one of the three options above, with the full log in A.4 as backing evidence.

```
[ Agent states quality verdict here ]
[ Full per-dimension log is in §6 A.4 ]
```

---

### ✦ CP-05 · Final review — read the whole diff, confirm scope, summarise

**Status:** `[ PENDING / DONE / FAILED ]`

#### Instructions

1. Run `git diff main` (or base branch). Read **every line** of the diff. Not skim — read.
2. Confirm: no files outside §1.2 scope were modified. If yes — explain why and get approval, or revert.
3. Confirm: no debug code, `console.log`, `TODO`, `FIXME`, or commented-out blocks left in the diff.
4. Write a plain-English summary of every change made, for a human reviewer who has not seen the code.
5. Verify the definition of done in §1.5 is fully satisfied.

#### Proof required to pass CP-05

- [ ] **Paste the full `git diff main` output.** This is the final deliverable. It is the truth. Everything else is commentary.
- [ ] **List every file changed** with one sentence per file explaining the change.

```
[ Agent pastes final git diff here ]

Files changed:
- src/auth.ts — [ one sentence ]
- src/components/LoginForm.tsx — [ one sentence ]
```

---

### ✦ CP-06 · Change report — explain every change for the next developer

**Status:** `[ PENDING / DONE / FAILED ]`

> **Purpose:** The Code Appendix (§6) is the raw, append-only machine record — diffs, test output, logs. It proves *what happened*; it does not *explain* it. CP-06 produces a single, human-readable **Change Report**: a curated narrative that lets another developer who has never seen this work understand exactly **what changed, why each change was made, what was deliberately left alone, and what they need to know next** — without reading the diff line by line or asking you a single question. If the report cannot stand alone as that explanation, it is not done.

> This is the document a reviewer reads before approving the PR, and the document the next maintainer reads in six months. Write it for them, in plain English. Tie every change back to its reason in §1. The §5 anti-hallucination rules still apply — no hedging, every claim backed by §6 evidence.

#### Instructions

1. Write the Change Report using the structure below and store the finished report in §6 **A.7**.
2. Ground every entry in evidence already captured: reference the relevant §6 A.2 / A.3 / A.4 entries and the CP-02 change numbers. Do not restate raw logs — *explain* them.
3. For every change, state the **reason** (the "why"), not just the "what". A change with no documented reason is incomplete.
4. Be explicit about what you did **not** change and why — scope discipline is part of the explanation.
5. Record alternatives that were considered and **why they were rejected**, so the next developer does not re-litigate settled decisions.
6. Keep it lean (§0 applies to prose too): high signal, no filler, no duplication of the appendix.

#### Change Report structure

```
CHANGE REPORT — [ Plan Name ] — [ date ]

1. SUMMARY (for a reader with zero context)
   - What this change set does, in 2-4 plain sentences.
   - The problem it solves and the §1 requirement it satisfies.
   - Net size of the change: [ files changed ] · [ +X / -Y lines ].

2. WHY THIS WAS DONE (rationale)
   - The motivation / trigger (bug, feature, refactor, requirement ref).
   - The intended outcome and how it is now achieved.

3. CHANGES, EXPLAINED (one entry per change — the "what" AND the "why")
   For each CHANGE N from CP-02:
     - What changed: [ file + plain-English description, not the diff ]
     - Why:          [ the reason this specific change was necessary ]
     - How it works now: [ brief behavioural description ]
     - Evidence:     [ §6 A.2.N (diff + test), A.4.N (quality) ]

4. WHAT DID NOT CHANGE — AND WHY (scope discipline)
   - Things a reader might expect to change but didn't, with the reason.
   - Anything explicitly out of scope per §1.3 that is relevant context.

5. ALTERNATIVES CONSIDERED & REJECTED (so decisions are not re-litigated)
   - Option considered -> why it was not chosen.
   - State "NONE — approach was unambiguous" if genuinely none.

6. RISKS, TRADE-OFFS & SIDE EFFECTS
   - Known trade-offs accepted, and why they are acceptable.
   - Anything downstream this could affect (carried from CP-02 Phase C).

7. HOW IT WAS TESTED (basis for confidence)
   - What the tests cover (targeted + full suite), referencing §6 A.2/A.3.
   - Edge cases covered. Anything deliberately not tested, and why.

8. FOR THE NEXT DEVELOPER (handoff notes)
   - Non-obvious gotchas, assumptions, or constraints to be aware of.
   - Suggested follow-ups / known limitations (with ticket refs if any).
   - Anything that would surprise someone editing this code next.
```

#### Proof required to pass CP-06

- [ ] **The complete Change Report is written into §6 A.7**, following the structure above, with no section left blank ("NONE — [reason]" where a section genuinely does not apply).
- [ ] **Every change in the CP-02 index appears in section 3** with both a *what* and a documented *why*.
- [ ] **Sections 4 and 5 are filled** — what was not changed (and why) and alternatives rejected (or an explicit "NONE").
- [ ] **Every claim references its evidence** in §6 (A.2 / A.3 / A.4) or a CP-02 change number — no unbacked assertions.
- [ ] **A non-author can read it standalone** and understand the change set without the diff. If it needs you present to make sense, revise it.

```
[ Agent writes the Change Report into §6 A.7, then notes its location here ]
```

---

### ✦ CP-07 · [ Custom checkpoint — add as needed ]

**Status:** `[ PENDING / DONE / FAILED ]`

#### Instructions

```
[ Copy this block and fill in for any additional checkpoint specific to this plan.
  Instructions must be numbered, specific, and unambiguous.
  Do not write "update the code" — write exactly what file, what line, what changes. ]
```

#### Proof required to pass CP-07

- [ ] `[ Define what irrefutable evidence must be provided. ]`

```
[ Agent pastes proof here ]
```

---

## § 3 · TOOL CALLING PROTOCOL

> **Golden rule:** Every tool call must have a declared purpose **before** it runs. "I'll just try it and see" is not a purpose. If a tool call returns unexpected output — STOP, read the full output, then decide the next action. Never chain tool calls without reading the output of the previous one.

### Allowed tool calls and conditions

| Tool | When to call it | Required verification after call |
|---|---|---|
| `read_file` | Before modifying ANY file. No exceptions. You may not write to a file you have not read in this session. | Confirm file structure matches expectation before writing. |
| `write_file` / `edit` | Only after CP-02 is approved AND you have read the target file. One file per call. | Immediate `git diff` after write. Paste output. |
| `bash` / `terminal` | For: running tests, grep/search, build, lint, git commands. NOT for exploration without a declared goal. | Paste full stdout + exit code. |
| `grep` / `search` | Before renaming any symbol, before adding any import, before assuming something does not exist. | Paste raw output. "No results" is acceptable but must be shown. |
| `git diff` | After every file write. After all writes. Before CP handoff. | Diff must match planned changes exactly. |
| `web search` | When a library API or error message is genuinely unknown. NOT to confirm things you already know. | Cite the exact URL and the specific information used. |

### Forbidden tool use patterns

- **✕** Writing a file without reading it first in this session.
- **✕** Running bash commands speculatively ("let me just see what happens").
- **✕** Calling a tool and not reading its full output before taking the next action.
- **✕** Making multiple file edits in a single bash heredoc to "save time."
- **✕** Using `sed -i` or `awk` rewrites on files without a post-write full read-back.
- **✕** Calling a tool with a vague goal — every call must have a declared, specific purpose.

---

## § 3A · MICRO-TEST PROTOCOL (targeted testing inside CP-03)

> **Updated for pre-generated code flow:** In v1.3+, all targeted tests are specified in CP-02 Phase B as part of each CHANGE N block. The agent does not discover or write tests during CP-03 — it runs the exact TEST COMMAND already specified and approved. This section governs how to correctly run those pre-specified tests, how to handle failures, and what to do in the edge case where CP-02 did not produce a test for a change.

### The source of truth for every targeted test

The test for CHANGE N lives in the CP-02 Phase B block for that change:

```
TARGETED TEST: [ the complete test code, pre-written in CP-02 ]
TEST COMMAND:  [ the exact command to run — copy this verbatim ]
EXPECTED RESULT: [ what a passing run should output ]
```

The agent runs the TEST COMMAND exactly as written. It does not substitute, adapt, or simplify it.

### How to run a targeted test (not the full suite)

```bash
# Jest / Vitest — run a single file
npx jest src/auth.test.ts --no-coverage

# Jest — run a single test by name
npx jest --testNamePattern="authenticateUser returns AuthResult"

# Pytest — run a single file
pytest tests/test_auth.py -v

# Pytest — run a single test
pytest tests/test_auth.py::test_authenticate_user_returns_result -v

# Go
go test ./pkg/auth/... -run TestAuthenticateUser -v

# Cargo
cargo test auth::tests::authenticate_user_returns_result
```

### Red→green confirmation for new tests

If the CP-02 Phase B block added a **new** test file or new test function (not updating an existing one), the agent must:

1. Run the test **before** applying the code change. It must **FAIL** (red). Paste the output.
2. Apply the code change (STEP 3 of the CP-03 loop).
3. Run the test again. It must **PASS** (green). Paste the output.

The red→green sequence is the proof that the test is actually exercising the changed code. A test that passes before the change was written is not testing the right thing. If this occurs: halt, report to operator — the CP-02 test block may be defective.

### If CP-02 does not have a test for a change

This should not happen if CP-02 was completed correctly. If it does:

1. STOP. Do not apply the change.
2. Report: "CHANGE N in CP-02 has no TARGETED TEST block. CP-02 is incomplete."
3. Return to CP-02. Write the test block for the missing change. Get operator sign-off.
4. Only then apply the change in CP-03.

> Never apply a code change that has no pre-approved targeted test. The test is not optional — it is part of the approved change specification.

### When a targeted test fails after applying the change

1. Do not proceed to the next change. The loop stops here.
2. Read the full failure output. Identify the exact assertion that failed.
3. Determine: is the **applied code** wrong, or is the **pre-specified test** wrong?
   - If the **code** is wrong: the CP-02 AFTER block has a defect. Revert. Report to operator. Get the AFTER block corrected and re-approved. Apply the corrected code.
   - If the **test** is wrong: the CP-02 test block has a defect. Report to operator. Get the test block corrected and re-approved. Apply the corrected test.
4. Do NOT fix either on your own. Both were approved in CP-02. Changing them without approval is a plan violation.
5. Log the failure and resolution in A.6.

### Targeted test result template (one per change — logged in A.2)

```
CHANGE N — [ brief description ]
File modified:  [ path ]
Test source:    CP-02 Phase B, CHANGE N test block
Test command:   [ exact command from CP-02 — copy verbatim ]
Pre-change run: [ FAIL (as expected) / N/A (existing test) ]
Post-change:    [ PASS / FAIL ]
Output:
[ paste full test runner output ]
Compiler:       [ 0 errors / paste errors ]
```

---

## § 3B · CODE QUALITY RUBRIC

> This section defines the quality standard all code must meet. It applies in two places: **during CP-02 Phase B** (when code is being generated — this is where quality is built in, not retrofitted), and **during CP-04.5** (where it is audited against the shipped code). The agent must check every item in this rubric before writing a CHANGE N AFTER block in CP-02. Code that fails this rubric should not be written into CP-02 — it should be corrected before it ever becomes an approved change.

### The distinction between correctness and quality

| Correctness (CP-03 & CP-04) | Quality (CP-04.5) |
|---|---|
| Does the code do what was specified? | Is the code well-built? |
| Do the tests pass? | Would a senior engineer be comfortable owning this? |
| Does the compiler accept it? | Could a new team member understand it in 10 minutes? |
| Does it handle the happy path? | Does it handle failure gracefully, safely, and consistently? |

**Both must pass. Neither substitutes for the other.**

---

### Quality standards by category

#### Naming standards

```
PASS criteria:
  - Function names are verbs: getUser(), validateToken(), sendEmail()
  - Boolean names state what true means: isAuthenticated, hasPermission, isEmpty
  - Variables name the domain concept, not the type: userId not str, userList not arr
  - No single-letter variables outside of loop counters and well-understood math
  - No abbreviations that are not universally known in this domain

FAIL examples:
  - data, result, response, obj, temp, val (too generic)
  - processStuff(), handleThing(), doLogic() (meaningless verbs)
  - flag, check, status (as booleans — what does true mean?)
  - getUserAndValidateAndSendEmail() (doing multiple things)
```

#### Function size and responsibility

```
PASS criteria:
  - One function = one responsibility. Can be described in one sentence without "and".
  - Under ~40 lines for most functions. Over 40 lines requires justification.
  - Functions at the same abstraction level. Do not mix high-level orchestration
    with low-level implementation in the same function.

FAIL examples:
  - A 100-line function that fetches data, transforms it, validates it, and saves it.
  - A function where some lines operate on raw SQL and others call business logic methods.
```

#### Error handling standards

```
PASS criteria:
  - Every external call has explicit error handling (try/catch, Result type, etc.)
  - Errors carry enough context to diagnose: throw new Error(`Failed to fetch user ${userId}: ${err.message}`)
  - Error handling is consistent — the same pattern used throughout the codebase.
  - Failures fail loudly and early. Silent failures that corrupt state later are worse than crashes.

FAIL examples:
  - try { ... } catch (e) {}  — swallowing errors silently
  - catch (e) { console.log(e) }  — logging but not surfacing
  - Missing error handling on database calls, API calls, or file operations
  - throw new Error("Something went wrong")  — no context
```

#### Security standards

```
HARD REQUIREMENTS (any violation = Quality FAIL, not just a note):
  - No raw string interpolation into SQL queries. Parameterised queries only.
  - No user input used in file paths without sanitisation.
  - No secrets in source code, logs, or error messages.
  - All user input validated at the boundary before use.
  - No new admin/elevated permissions introduced without explicit human review.
```

#### Test quality (the tests themselves must also be quality)

```
PASS criteria:
  - Test names describe the scenario and expected outcome:
    "authenticateUser returns AuthResult with valid credentials"
    NOT "test1" or "it works"
  - One assertion per test where possible. Multiple assertions make failure diagnosis harder.
  - Tests are independent — no test relies on state set by another test.
  - Tests test behaviour, not implementation. If renaming a private function breaks
    a test, that test is testing the wrong thing.
  - Edge cases are tested: null input, empty input, boundary values, error paths.

FAIL examples:
  - A test that passes because it never actually calls the changed code.
  - A test with no assertion (just checking it does not throw).
  - A test that depends on execution order.
  - A test that directly accesses private/internal state.
```

#### Comments and documentation

```
PASS criteria:
  - Public API functions have a brief doc comment stating: what it does, params, return, throws.
  - Non-obvious decisions have a WHY comment: // Using setTimeout(0) here to defer
    execution until after the current call stack clears — see issue #412
  - Complex algorithms have a brief explanation of the approach before the code.

FAIL examples:
  - // increment i by 1
    i++   — comments that describe what the code already says
  - Missing doc comments on all exported/public functions
  - TODO/FIXME comments left in shipped code without an issue ticket reference
```

#### Minimalism & anti-bloat standards (§0 enforcement)

```
PASS criteria:
  - The change is the smallest, clearest code that fully satisfies the §1 requirement.
  - Every added line is necessary. Net additions are justified by the requirement.
  - Existing code/utilities are reused instead of duplicated or re-implemented.
  - No abstraction, interface, parameter, or config exists without a present, real caller.
  - No new dependency unless existing code genuinely cannot do the job.
  - Dead code, redundant branches, and obsolete comments in scope are removed.

FAIL examples (any of these = a bloat ISSUE; resolve before Quality PASS):
  - A new interface/base class/strategy with exactly one implementation "for flexibility".
  - A parameter, option, or feature flag with a single caller and a single value.
  - A wrapper function whose entire body is one call to another function.
  - The same logic pasted in two places instead of one shared function.
  - Adding a library to do what a few lines of existing code already do.
  - Defensive handling for inputs that cannot occur given the callers in scope.
  - Commented-out code, "just in case" branches, or scaffolding left in the diff.
  - Clever one-liners that sacrifice readability to shave lines (cognitive bloat).
```

---

### Quality scoring guide

After CP-04.5, the agent assigns a score to each changed file:

| Score | Meaning |
|---|---|
| **A** | Passes all five dimensions. No issues found or all issues resolved. |
| **B** | Passes with minor notes — non-blocking observations logged for the operator. |
| **C** | Issues found and fixed during review — evidence of the fix logged. |
| **D** | Issues found that could not be fully resolved — operator review required before shipping. |
| **F** | Hard security, correctness, or structural failure — do not ship. Halt and report. |

> D or F on any file = `QUALITY FAIL` verdict. The plan does not proceed to CP-05 without operator sign-off.

---

## § 4 · FAILURE MODES & COUNTERMEASURES

> These failure modes are anticipated. When one occurs, execute its countermeasure exactly. Do not improvise. Do not downplay. Report the failure explicitly.

---

**FAILURE:** Compiler or type error after implementing a change.

**COUNTERMEASURE:** Read the full error (all lines, including stack trace). Identify the root cause — do NOT guess-and-patch. If the error message is unclear, search for it using the exact text. Make the targeted fix. Re-run the compiler. Repeat until zero errors. Do not proceed to the next checkpoint with a lingering error.

---

**FAILURE:** A test breaks that was passing before this plan.

**COUNTERMEASURE:** This is a regression. Stop all forward progress. Read the test. Understand what contract it asserts. Fix the implementation to satisfy it — do NOT change the test to make it pass. Exception: the test was testing behaviour explicitly in scope to change — in that case, update the test AND document why in the Code Appendix (§6).

---

**FAILURE:** Scope creep — a change requires modifying a file not listed in §1.2.

**COUNTERMEASURE:** HALT. Do not touch the out-of-scope file. Report to the human operator: "To complete this plan I must also modify `[file]`. This was not in scope. Please confirm or deny." Wait for written confirmation. Update §1.2 if confirmed. Never silently expand scope.

---

**FAILURE:** Ambiguous instruction — the plan or the codebase is unclear about what to do.

**COUNTERMEASURE:** HALT. Do not make an assumption and proceed. Ask a specific question: "In `[file]`, the function `[name]` has two possible interpretations: [A] or [B]. Which is correct?" One specific question. Do not write any code until clarified.

---

**FAILURE:** Code passes all tests but fails the quality review (CP-04.5).

**COUNTERMEASURE:** Quality failures are not optional to resolve — they are real failures. Identify the specific dimension and file that failed. Apply the fix. Re-run the targeted test for that change (CP-03 loop) to confirm the fix did not break correctness. Log the issue and fix in A.4. Do not mark CP-04.5 as PASS until every ISSUE entry in A.4 has a corresponding resolved fix. "It works, quality is just a nice-to-have" is not acceptable reasoning.

---

**FAILURE:** Agent cannot determine the quality verdict because the review criteria feel subjective.

**COUNTERMEASURE:** Quality is not subjective in this plan. Every dimension in §3B has explicit PASS/FAIL criteria with examples. Apply them literally. If a specific criterion is genuinely unclear for the current codebase context, flag the specific criterion with the specific code in question, and ask the operator. Do not skip the dimension.

---

**FAILURE:** A dependency or library behaves unexpectedly / documentation appears wrong.

**COUNTERMEASURE:** Write an isolated minimal reproduction in a scratch file. Confirm the actual behaviour. Cite the exact documentation URL or GitHub issue. Do not assume the docs are right if the runtime disagrees. Report the finding with evidence before adapting the plan.

---

**FAILURE:** Git conflict or file was modified by another process mid-plan.

**COUNTERMEASURE:** Do not auto-resolve. Run `git status` and `git diff`. Report the conflict state fully. Ask the operator for a resolution strategy. Never force-push or run `git checkout --theirs` without explicit written approval.

---

**FAILURE:** The agent loses track of state mid-plan (context window overflow, session restart, etc.).

**COUNTERMEASURE:** Run `git diff main` and `git status` immediately to re-establish ground truth. Re-read §1 scope. Identify the last completed checkpoint by its **proof** (not memory). Resume from there. Never assume progress that cannot be verified by git state.

---

### Difficult process guide — when stuck for more than 2 attempts

If you have attempted the same fix more than twice and it is still failing, follow this procedure exactly:

1. Write down what you tried and what happened. Exact commands, exact output.
2. Re-read the failing code from scratch. Do not rely on your mental model of it.
3. Binary-search the problem: revert half the change, see if the error disappears. Narrow down to the exact line causing the failure.
4. If still stuck after 3 attempts: write a minimal reproduction case and show it to the operator with a clear description of what you have tried. Do not attempt a 4th guess without new information.
5. Never describe a failed attempt as "almost working" or "nearly there." Either it works (with proof) or it does not.

---

## § 5 · PROOF & ANTI-HALLUCINATION PROTOCOL

> **ZERO-TOLERANCE POLICY:** This plan operates under zero tolerance for stated facts that are not verifiable. If you cannot show it, you did not do it. The words "I believe," "I think," "likely," "should be," and "probably" are **forbidden** in status reports. These words trigger an automatic rollback to the last verified checkpoint.

### What counts as valid proof (irrefutable evidence)

- ✓ Raw terminal output pasted verbatim — including timestamps, exit codes, and error counts.
- ✓ `git diff` output — exact added and removed lines, no paraphrasing.
- ✓ Full file content read-back after write — the agent reads the file and reproduces key sections verbatim.
- ✓ Test runner summary with pass/fail count and zero new failures.
- ✓ Compiler output stating exactly `0 errors` or equivalent.
- ✓ A URL + the specific sentence cited from it (for library/API claims).

### What does NOT count as proof

- ✕ "I have updated the file." — Show the diff.
- ✕ "The tests should pass now." — Run them. Paste the output.
- ✕ "I believe this is correct." — Belief is not proof.
- ✕ "Based on the pattern I see, this should work." — Patterns are not execution results.
- ✕ Summarising what a tool output said instead of pasting it.
- ✕ "I checked and there are no other references." — Paste the grep output.

### Hallucination tripwires — automatic halt conditions

If ANY of the following occur, the agent must immediately stop, declare `HALT: [condition name]`, and wait for human instruction before continuing.

| # | Tripwire |
|---|---|
| H.1 | Agent claims a file was modified but cannot produce a `git diff` showing the change. |
| H.2 | Agent claims tests pass but cannot show the test runner output. |
| H.3 | Agent references a function, type, or variable that did not appear in the CP-01 grep results. |
| H.4 | Agent states a library has a particular API without citing the official documentation URL. |
| H.5 | Agent marks a checkpoint complete without providing the required proofs listed in §2. |
| H.6 | Agent proceeds past a scope boundary without documented human approval. |
| H.7 | Agent states "no errors" without pasting compiler output. |
| H.8 | Agent applies code in CP-03 that differs from the approved CP-02 AFTER block without operator sign-off on the deviation. |
| H.9 | Agent writes new code during CP-03 that does not exist in any CP-02 AFTER block. |
| H.10 | Agent adds a function, parameter, dependency, config flag, layer, or abstraction that does not trace to a §1 requirement or an approved CP-02 change (speculative generality / bloat). |

---

## § 6 · CODE APPENDIX

> **Rule:** The appendix is populated **during** execution, not before. Every code snippet, error message, diff, and command output is logged here as the plan progresses. This is the **unedited record** of what happened. Entries are **append-only** — do not edit an entry after it has been pasted. This is the audit trail.

---

### A.1 · Pre-generated code register (populated during CP-02 Phase B)

This section is the authoritative store of all CHANGE N blocks produced in CP-02. It is filled in during CP-02, not during execution. It is the single source of truth that CP-03 executes from. Once signed off by the operator, entries here are locked — they may only be revised through the CP-02 revision and re-approval process.

**Structure:** One sub-entry per change. Each entry contains the BEFORE code, the AFTER code, and the targeted test — all exactly as approved.

````
A.1.1 — CHANGE 1 — [ filename ] — [ one-line summary ]

BEFORE:
```[ language ]
[ exact code being replaced, copied verbatim from the file ]
```

AFTER (approved, locked):
```[ language ]
[ complete final code as approved by operator ]
```

TARGETED TEST (approved, locked):
```[ language ]
[ complete test code ]
```
TEST COMMAND: [ exact command ]
OPERATOR SIGN-OFF: [ NAME / DATE ]
````

````
A.1.2 — CHANGE 2 — [ filename ] — [ one-line summary ]
[ repeat structure above ]
````

---

### A.2 · Per-change test results (CP-03 atomic loop log)

One entry per change. Filled in during CP-03 execution.

```
A.2.1 — Change 1 — [ filename ] — [ timestamp ]
DIFF:
[ paste git diff output ]

COMPILER: [ 0 errors / paste errors ]

TARGETED TEST: [ exact command run ]
OUTPUT:
[ paste test runner output ]
RESULT: [ PASS / FAIL ]
```

```
A.2.2 — Change 2 — [ filename ] — [ timestamp ]
DIFF:
[ paste git diff output ]

COMPILER: [ 0 errors / paste errors ]

TARGETED TEST: [ exact command run ]
OUTPUT:
[ paste test runner output ]
RESULT: [ PASS / FAIL ]
```

---

### A.3 · Full suite test output log (CP-04 regression sweep)

Paste full test suite output from CP-04 runs here. Include the complete summary line.

```
A.3.1 — [ timestamp ]
[ paste full test runner output here ]
```

```
A.3.2 — [ timestamp — post-fix run ]
[ paste full test runner output here ]
```

---

### A.4 · Quality review log (CP-04.5)

One entry per changed file. Each entry covers all five quality dimensions. Filled in during CP-04.5.

```
A.4.1 — [ filename ] — [ timestamp ]

DIMENSION 1 — Readability & Naming
  [ function name ]: PASS — [ reason ]   /   ISSUE — [ problem + fix applied ]

DIMENSION 2 — Error Handling & Edge Cases
  [ function name ]: PASS — [ what can fail and how it's handled ]   /   ISSUE — [ problem + fix applied ]

DIMENSION 3 — Security & Safety
  SQL injection: NOT APPLICABLE — [ no SQL in this file ]   /   APPLICABLE — [ finding + fix ]
  User input sanitisation: NOT APPLICABLE / APPLICABLE — [ finding ]
  Secrets in logs: NOT APPLICABLE / APPLICABLE — [ finding ]
  Path traversal: NOT APPLICABLE / APPLICABLE — [ finding ]
  New permissions: NOT APPLICABLE / APPLICABLE — [ finding ]

DIMENSION 4 — Performance & Efficiency
  N+1 queries: NOT APPLICABLE / APPLICABLE — [ finding ]
  Unbounded datasets: NOT APPLICABLE / APPLICABLE — [ finding ]
  Blocking async: NOT APPLICABLE / APPLICABLE — [ finding ]
  Repeated expensive computation: NOT APPLICABLE / APPLICABLE — [ finding ]

DIMENSION 5 — Code Structure & Maintainability
  Logic duplication: PASS / ISSUE — [ finding ]
  Function length: PASS / ISSUE — [ finding ]
  Nesting depth: PASS / ISSUE — [ finding ]
  Architectural fit: PASS / ISSUE — [ finding ]
  Comment quality: PASS / ISSUE — [ finding ]
  Testability: PASS / ISSUE — [ finding ]

DIMENSION 6 — Minimalism & Anti-Bloat
  Net lines (added vs removed): [ +X / -Y / net Z ]
  Speculative / unused code: PASS / ISSUE — [ finding ]
  Unnecessary abstraction or indirection: PASS / ISSUE — [ finding ]
  Duplication that should be reused: PASS / ISSUE — [ finding ]
  New dependency justified: NOT APPLICABLE / JUSTIFIED — [ reason ] / ISSUE — [ finding ]
  Smallest change that satisfies the requirement: PASS / ISSUE — [ finding ]

FILE SCORE: [ A / B / C / D / F ]
ISSUES RESOLVED: [ list each fix applied, or NONE ]
```

```
A.4.2 — [ filename ] — [ timestamp ]
[ repeat structure above for each changed file ]
```

---

### A.5 · Errors encountered & resolutions

Paste each error message followed by the exact fix applied. This is the debugging log.

```
A.5.1 — [ error type ] — [ timestamp ]
ERROR:
[ paste full error output here ]

ROOT CAUSE:
[ explain what caused it ]

FIX APPLIED:
[ describe exactly what was changed and paste the relevant diff ]
```

---

### A.6 · Decisions & deviations from original plan

Log any deviation from the plan written in §2. What changed, why, and who approved it.

```
A.6.1 — [ timestamp ]
DEVIATION: [ describe what changed from the original plan ]
REASON: [ why the deviation was necessary ]
APPROVED BY: [ human operator name / "self — within scope" ]
```

---

### A.7 · Change report (CP-06 deliverable)

The finished, human-readable Change Report lives here. This is the curated *explanation* of the work — distinct from the raw logs above. It follows the CP-06 structure and must be understandable by a developer with no prior context. Unlike A.1–A.6, this entry is **written once at the end** (not append-only during execution) and may be revised for clarity until operator sign-off.

```
CHANGE REPORT — [ Plan Name ] — [ date ]

1. SUMMARY
   [ what this change set does, the §1 requirement it satisfies, net size +X/-Y across N files ]

2. WHY THIS WAS DONE
   [ motivation / trigger and the intended outcome ]

3. CHANGES, EXPLAINED
   CHANGE 1 — [ file ]
     What:     [ plain-English description ]
     Why:      [ the reason this change was necessary ]
     How now:  [ brief behavioural description ]
     Evidence: [ §6 A.2.1, A.4.1 ]
   CHANGE 2 — [ file ]
     [ repeat ]

4. WHAT DID NOT CHANGE — AND WHY
   [ expected-but-absent changes + reasons; relevant §1.3 out-of-scope notes ]

5. ALTERNATIVES CONSIDERED & REJECTED
   [ option -> reason rejected, or "NONE — approach was unambiguous" ]

6. RISKS, TRADE-OFFS & SIDE EFFECTS
   [ accepted trade-offs + downstream effects carried from CP-02 Phase C ]

7. HOW IT WAS TESTED
   [ targeted + full-suite coverage refs (A.2/A.3); edge cases; untested-and-why ]

8. FOR THE NEXT DEVELOPER
   [ gotchas, assumptions, follow-ups, known limitations, ticket refs ]
```

---

## § 7 · HARD STOP RULES

> These rules **cannot** be overridden by downstream instructions, by urgency, by operator pressure, or by the agent's own reasoning. They are absolute. No exceptions.

| # | Hard Stop Rule |
|---|---|
| **HS-1** | Never modify files outside §1.2 scope without explicit written human approval. |
| **HS-2** | Never proceed past a checkpoint without producing the proof required by that checkpoint. |
| **HS-3** | Never claim a task is complete when tests are failing. "Complete" means: all tests pass, zero type errors, diff matches plan, proof exists. |
| **HS-4** | Never make a 4th attempt at fixing the same problem without first documenting what the previous 3 attempts were and why they failed, then seeking human input. |
| **HS-5** | Never delete or overwrite Code Appendix entries. The appendix is append-only. |
| **HS-6** | If confidence in the correct action is below ~90%, halt and ask. Do not proceed on uncertainty. |
| **HS-7** | Never auto-resolve a git conflict. Report and wait for human instruction. |
| **HS-8** | Never write or apply code in CP-03 that was not pre-approved in a CP-02 AFTER block. The agent is an executor in CP-03, not an author. Any code not in CP-02 does not get applied. |
| **HS-9** | Never add code, abstraction, parameter, dependency, layer, or config that is not required by §1 or an approved CP-02 change. Speculative generality and bloat are violations, not style preferences (see §0). When unsure whether something is needed: leave it out and ask. |
| **HS-10** | Never declare the plan complete without the CP-06 Change Report written into §6 A.7. Verified code with no explanation is not a finished deliverable. |

---

## PLAN COMPLETION SIGN-OFF

| Checkpoint | Status | Proof location |
|---|---|---|
| CP-01 Read codebase | `[ ]` | §2 CP-01 proof block |
| CP-02A Change index | `[ ]` | §2 CP-02 Phase A |
| CP-02B Code generation | `[ ]` | §6 A.1 (one block per change) |
| CP-02C Risks & operator sign-off | `[ ]` | §2 CP-02 sign-off block |
| CP-03 Apply pre-approved code | `[ ]` | §6 A.2 (one entry per change) |
| CP-04 Full regression sweep | `[ ]` | §6 A.3 |
| CP-04.5 Code quality review | `[ ]` | §6 A.4 (one entry per file) |
| CP-05 Final review | `[ ]` | §2 CP-05 proof block |
| CP-06 Change report | `[ ]` | §6 A.7 (developer handoff report) |
| CP-07 Custom (optional) | `[ ]` | §2 CP-07 proof block |

**Quality verdict:** `[ QUALITY PASS / QUALITY PASS WITH NOTES / QUALITY FAIL ]`

**Anti-bloat verdict (§0):** `[ LEAN PASS / PASS WITH NOTES / BLOAT FAIL ]`

**Change report attached (CP-06):** `[ YES / NO ]`

**Final git diff attached:** `[ YES / NO ]`

**Human operator final sign-off:** `[ NAME ]` · `[ DATE ]`

**Definition of done verified (§1.5):** `[ YES / NO ]`

---

*Template version 1.4 · Based on Karpathy coding principles · Pre-generated human-approved code · Atomic change→test loop · Qualitative code review · Zero-hallucination policy enforced · Zero-tolerance anti-bloat doctrine (§0) · Mandatory change report (CP-06)*

*Changelog v1.3 → v1.4: added §0 Prime Directive (minimal, effective, senior-grade code; zero tolerance for bloat); added CP-04.5 Dimension 6 (Minimalism & Anti-Bloat) and a §3B anti-bloat rubric category; added CP-06 Change Report — a human-readable developer handoff explaining every change and its rationale, stored in §6 A.7; added hard stops HS-9/HS-10 and tripwire H.10. Defects fixed: removed a duplicated CP-03 section, restored the missing CP-05 section header, and restored the missing §4 section header.*
