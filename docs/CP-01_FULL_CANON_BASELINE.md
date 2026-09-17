# CP-01 · Full-canon baseline (live counts + baseline gates)

Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9` · HEAD at checkpoint: `5537ba2faf294a2ae6492bd6b21aa1635671e1a2`
Environment: `node v24.5.0` · `npm 11.5.1` · Date: 2026-09-17.

## 1 · Live per-book counts (re-counted from HEAD, not copied from the plan)

```bash
npx tsx scripts/cp01_investigate.ts
```

```
=== CP-01 · Per-Book Entry Counts (threadDetails) ===
{
  "gen": 173
}

=== CP-01 · Per-Book Entry Counts (bookThreadDetails) ===
{
  "1ch": 7, "1co": 35, "1jn": 10, "1ki": 11, "1pe": 14, "1sa": 9, "1th": 11, "1ti": 11,
  "2ch": 8, "2co": 15, "2jn": 2, "2ki": 7, "2pe": 7, "2sa": 9, "2th": 10, "2ti": 14,
  "3jn": 1, "act": 26, "amo": 6, "col": 19, "dan": 33, "deu": 27, "ecc": 7, "eph": 23,
  "est": 2, "exo": 39, "ezk": 30, "ezr": 6, "gal": 20, "gen": 1, "hab": 7, "hag": 5,
  "heb": 46, "hos": 8, "isa": 111, "jam": 10, "jdg": 3, "jer": 21, "job": 12, "joh": 27,
  "jol": 6, "jon": 5, "jos": 9, "jud": 7, "lam": 6, "lev": 10, "luk": 25, "mal": 9,
  "mat": 60, "mic": 9, "mrk": 16, "nam": 4, "neh": 3, "num": 10, "oba": 1, "phm": 6,
  "php": 15, "pro": 24, "psa": 87, "rev": 84, "rom": 67, "rut": 4, "sng": 7, "tit": 8,
  "zec": 23, "zep": 8
}
```

(JSON is one key per line in the raw output; only the line wrapping above is changed. The raw
capture was written to a temp file and read back — every number is unchanged.)

Live totals: `1,356` unique detail keys = `173` (threadDetails) + `1,183` (bookThreadDetails), no id
overlap between the two files. The data audit accounts for `1,342` anchors carrying hand-written
details plus `14` "detail-only thread verses (non-anchor, intentional)": 1,342 + 14 = 1,356 ✓.

Reconciliation for the queue (plan §1.5 lists 64 remaining books):

```
1,356  total detail keys
-  173  Genesis batch (threadDetails.ts gen-* — sweep log row "Genesis | 173")
-   39  Exodus batch (bookThreadDetails.ts exo-* — sweep log row "Exodus | 39")
= 1,144  remaining keys
```

**OPEN ITEM (operator decision):** `gen-49-11` is Genesis-prefixed but lives in
`bookThreadDetails.ts`, so the Genesis batch (`threadDetails.ts` gen-* only) never covered it. It is
therefore inside the remaining 1,144 but outside the queue's 64 books (1,143 keys). It is not
silently folded into Leviticus.

## 2 · Field occurrence counts (threadDetails)

```
=== CP-01 · Field Occurrence Counts (threadDetails) ===
{
  "withWhoByRef": 1,
  "withCumulativePrinciples": 1,
  "withTerms": 173
}
```

## 3 · Golden keys — presence + clarity gate

```
=== CP-01 · Golden-List Verify + Clarity Gate ===
[
  { "key": "zec-9-9",   "exists": true, "clarityGate": true, "violations": [] },
  { "key": "gen-2-2",   "exists": true, "clarityGate": true, "violations": [] },
  { "key": "gen-2-3",   "exists": true, "clarityGate": true, "violations": [] },
  { "key": "exo-12-46", "exists": true, "clarityGate": true, "violations": [] },
  { "key": "isa-7-14",  "exists": true, "clarityGate": true, "violations": [] }
]
```

All five golden keys exist and pass the clarity gate (gate = `scripts/checkReadability.ts`, wired
into Vitest by `src/data/checkReadability.test.ts`).

## 4 · Baseline gates (pasteable)

1) Type-check

```bash
npm run lint        # tsc --noEmit
```

```
LINT_EXIT=0
```

2) Tests

```bash
npm test
```

```
 Test Files  13 passed (13)
      Tests  146 passed (146)
   Duration  2.06s
TEST_EXIT=0
```

3) Data audit

```bash
npm run audit:data
```

```
Loaded KJV canon: 31102 verses indexed.
Tier 1 Status: 66/66 books present.
Tier 1 Stats: 29056 verses have TSK links; 63668 phrase-anchored reference groups.
Tier 2 Status: 100% of 108 citations resolve to valid canonical verses.
Tier 3 Status: 100% of 78 prophecies resolve to valid canonical verses.
Tier 4 Status: 100% of 42 chains and all 277 timeline steps resolve perfectly.
Genesis shadow map: exact 1:1 — 173 details ↔ 173 Genesis anchors.
Book details: all 1183 keys are valid canonical verse ids.
Detail coverage: 1342/1342 anchors (100%) have hand-written titles/explanations.
SUCCESS: All 4 Tiers audited and 100% validated!
AUDIT_EXIT=0
```

4) Clarity-gate scan smoke test (new reusable helper, plan §1.2)

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

`scripts/scanBookProse.ts <prefix>` is the per-book gate proof for every remaining batch: it scans
title/principle/who/whoByRef/cumulativePrinciples/sameTestamentLinks/terms(gloss, note, exposition)
for that book's entries plus the pillar-chain steps carrying that book's verse ids, prints the JSON
summary, and exits non-zero on any violation. It replaces the book-specific scan scripts so no new
per-book tooling is added.

## 5 · Baseline caveat (recorded, not fixed)

The clarity gate is a floor: it fails only on the banned-abstraction list and sentences over 35
words. All 41 Leviticus fields pass it at BEFORE, yet 23 of them are dense/telegraphic by the §1.7
standard (one idea per sentence, everyday words, active voice). Per §10 decision 2 the Leviticus
batch therefore uses real rewrites, not a gate-pass-only VERIFY-ONLY sweep.
