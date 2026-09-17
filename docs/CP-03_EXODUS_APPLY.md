# CP-03 · Apply — Exodus

Scope: Apply operator‑approved Exodus CP‑02 appendix to `src/data/bookThreadDetails.ts`. VERIFY‑ONLY fields yield no change; draft AFTER fields are applied exactly. Keys, types, Strong’s numbers, original-language scripts, and citations are preserved.

Operator theology sign-off
- Decision: “Theology sign-off: accept Exodus CP-02 draft and apply CP-03”
- Signer: Bonga Ndlovu (operator)
- Date: 2026-09-17 (Africa/Johannesburg)
- PR: #4 (`cursor/plain-lang-cp01-cp02-genesis-ebb9`)

Applied changes
- Source file: `src/data/bookThreadDetails.ts`
- Exodus verse-ids updated: 39 entries scanned; 63 field edits applied (sentence-split plain-language rewrites). VERIFY‑ONLY fields unchanged.
- Change mechanism: `scripts/cp03_exodus_apply.ts` — targeted in-block string replacements for Exodus-only entries using the same rewrite policy as CP‑02.

Proofs

1) Type-check (tsc/lint)
```
EXIT_CODE=0
```

2) Tests (vitest)
```
 RUN  v5.0.0 /workspace/Threads-Bible


 Test Files  13 passed (13)
      Tests  146 passed (146)
   Start at  23:27:11
   Duration  1.47s (transform 42%, import 33%, tests 24%, worker 1%)

EXIT_CODE=0
```

3) Clarity gate (Exodus prose scan after apply)
```
=== EXODUS PROSE CLARITY-GATE SCAN ===
{
  "exodusEntryCount": 39,
  "failingExodusEntries": 0
}

--- Failing Exodus Entries (by field) ---
{}
EXIT_CODE=0
```

4) Data audit
```
Loaded KJV canon: 31102 verses indexed.

--- AUDITING TIER 1: Comprehensive Cross-References (TSK) ---
Tier 1 Status: 66/66 books present.
Tier 1 Stats: 29056 verses have TSK links; 63668 phrase-anchored reference groups.

--- AUDITING TIER 2: Direct NT Citations & Allusions ---
Total Tier 2 records: 108
Tier 2 Status: 100% of 108 citations resolve to valid canonical verses.
Tier 2 Expansion Status: 100% of 201 NT and 207 OT expanded lookup keys resolve canonically.

--- AUDITING TIER 3: Specific Messianic Prophecies ---
Total Tier 3 prophecies: 78
Tier 3 Status: 100% of 78 prophecies resolve to valid canonical verses.
Tier 3 Expansion Status: 100% of 257 OT and 577 reverse NT fulfillment keys resolve canonically.

--- AUDITING TIER 4: Master Canonical Redemptive Chains ---
Total Master Chains: 42
Tier 4 Status: 100% of 42 chains and all 277 timeline steps resolve perfectly.
Tier 4 Expansion Status: 100% of 1035 pre-built milestone verse keys resolve canonically.

--- AUDITING THREAD DETAILS (drift & coverage) ---
Genesis shadow map: exact 1:1 — 173 details ↔ 173 Genesis anchors.
Book details: all 1183 keys are valid canonical verse ids.
Detail-only thread verses (non-anchor, intentional): heb-9-23, psa-146-4, rev-19-10, jer-4-23, rev-20-14, isa-35-4, num-21-8, gen-49-11, psa-35-11, psa-109-25, psa-24-7, hos-6-2, psa-8-4, zec-14-4
Detail coverage: 1342/1342 anchors (100%) have hand-written titles/explanations.
Draft details: 0 drafts cover all remaining anchors — total coverage 1342/1342 (100%).
Tier 3 (Jesus Christ thread) anchors missing HAND-written details: 0

========================================
SUCCESS: All 4 Tiers audited and 100% validated!
EXIT_CODE=0
```

Status: APPLIED (Exodus). HARD STOP before Leviticus or any other book.

