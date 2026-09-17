# CP-02 · Leviticus Summary (AI-DRAFT — NOT APPLIED, awaiting theology sign-off)

Drafted by: Cline (local agent harness) — the plan pin `grok-4.6` + `effort: xhigh` is NOT satisfied for this session; see `docs/CP-00_BOOTSTRAP.md` §1. Operator theology review: pending.

- Entries: 10
- Pillar-chain groups carrying Leviticus steps: 3
- Fields (total considered): 41
- AFTER rewrites (changed): 23
- VERIFY-ONLY (unchanged, gate PASS): 18
- Gate PASS fields: 41
- Gate FAIL fields: 0
- Rewrites whose AFTER equals BEFORE (fake rewrites): 0

## THEOLOGY-REVIEW items (every changed field)

- lev-16-15 — title
- lev-16-15 — principle
- lev-16-16 — title
- lev-16-16 — principle
- lev-16-16 — terms[1].note (uncleanness)
- lev-16-22 — principle
- lev-16-30 — principle
- lev-17-11 — principle
- lev-19-18 — principle
- lev-24-16 — principle
- lev-25-10 — title
- lev-25-10 — principle
- lev-25-10 — terms[0].note (jubilee)
- lev-25-10 — terms[1].note (proclaim liberty)
- lev-25-25 — principle
- lev-25-25 — terms[0].note (kinsman / redeemer)
- lev-26-12 — principle
- chain:kinsman-redeemer — steps[0].title (Leviticus 25:25, 47-49)
- chain:kinsman-redeemer — steps[0].connection (Leviticus 25:25, 47-49)
- chain:sanctuary-2300-days — steps[1].title (Leviticus 16:16-19)
- chain:sanctuary-2300-days — steps[1].connection (Leviticus 16:16-19)
- chain:millennium-earth-made-new — steps[0].title (Leviticus 25:10)
- chain:millennium-earth-made-new — steps[0].connection (Leviticus 25:10)

## Doctrinal paraphrase watchlist (dense phrase → plain words)

- lev-16-15 — principle
  - BEFORE: "in the holiest"; "entered blood"
  - AFTER: "in the Most Holy Place"; "blood brought in"
- lev-16-16 — principle
  - BEFORE: "typologically removed"
  - AFTER: "removed from the sanctuary on the Day of Atonement"
- lev-16-16 — principle
  - BEFORE: "Christ's pre-advent investigative judgment"
  - AFTER: "the work Christ does as our judge before He comes" (no branding added)
- lev-16-16 — principle
  - BEFORE: "purified with these"
  - AFTER: "purified with these sacrifices" (pronoun referent named)
- lev-16-22 — principle
  - BEFORE: "two goats, one atonement — blood within, sins without"
  - AFTER: "the two goats together make one atonement" + one sentence for each goat
- lev-16-22 — principle
  - BEFORE: "Isaiah 53's burden-bearing walks this ritual out"
  - AFTER: "Isaiah 53 shows the same picture: one Servant carries the burden of sin"
- lev-17-11 — principle
  - BEFORE: "the purchased-atonement medium in Christ"
  - AFTER: "the blood of Christ as the price that bought our atonement"
- lev-19-18 — principle
  - BEFORE: "the second-table summary is born here"; "the Shema"
  - AFTER: "the summary of the second table of the law begins here" + one-sentence definition of the second table; "the Shema prayer"
- lev-24-16 — principle
  - BEFORE: "the Name's sanctity was capital law"
  - AFTER: "the holiness of the LORD's Name was protected by a death sentence"
- lev-25-10 — principle
  - BEFORE: bare KJV wording through "possession."
  - AFTER: same words quoted verbatim from the served canon (spelling "jubile" per public/books/lev.json) and cut with "…" where the old prose cut it
- lev-25-10 — principle
  - BEFORE: "the grand Old Testament type of the final redemption"
  - AFTER: "the great Old Testament type — God's advance picture of the final redemption" (the word "type" is kept and defined in-sentence)
- lev-25-25 — principle
  - BEFORE: "The Torah establishes the right of redemption"; "the sold inheritance"; "our alienated inheritance"
  - AFTER: "God gave Israel a law of redemption"; "the land he had inherited"; "the inheritance we had lost"
- lev-26-12 — principle
  - BEFORE: "The covenant-walk promise."; "the covenant's summit"
  - AFTER: "This is the covenant promise that God will walk with His people."; "the highest point of the covenant"
- chain:sanctuary-2300-days — steps[1].title
  - BEFORE: "Yom Kippur: Annual cleansing of the sanctuary by blood"
  - AFTER: "Yom Kippur, the Day of Atonement — the sanctuary cleansed every year by blood" (term defined in-sentence)
- chain:kinsman-redeemer + chain:millennium-earth-made-new — step titles/connections
  - BEFORE: "redeeming land and kin"; "near kin buys back lost inheritance and liberty"; "emancipates captive slaves"
  - AFTER: "buying back land and family"; "a close relative buys back land and freedom that a family lost"; "set captive slaves free"

## Scope notes

- Chain (pillar-chain) fields are in this batch for the first time: `threadDetails.ts` is in scope (plan §1.2) and the Leviticus sweep includes the three chains that carry a Leviticus step (kinsman-redeemer, sanctuary-2300-days, millennium-earth-made-new). Only those Leviticus steps were rewritten; the three chain names were VERIFY-ONLY (already plain).
- Entries whose title is a KJV phrase (lev-16-22, lev-16-30, lev-17-11, lev-19-18, lev-24-16, lev-26-12) keep their titles: VERIFY-ONLY, referent recognizable, gate PASS.
- `scripts/checkReadability.ts` and its banned-phrase list are unchanged (no gate architecture/threshold change).
- No source data was modified by this checkpoint: `git status` shows only new files under `docs/` and `scripts/`.

## Inventory (evidence)

- `npx tsx scripts/cp02LeviticusAppendix.ts --inventory` lists 41 fields
- Leviticus entries in bookThreadDetails.ts: 10
