# CP-01 · Investigation Evidence (Genesis-first sweep)

- Branch: `cursor/plain-lang-cp01-cp02-genesis-ebb9`
- Starting ref: `origin/cursor/phase-a-master-plan-6b89`
- Scope: counts, golden-list verify, field-usage inventory, and baseline gates

## Per-Book Entry Counts

### src/data/threadDetails.ts

```
{ "gen": 173 }
```

### src/data/bookThreadDetails.ts

```
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

## Field Occurrence Counts (threadDetails.ts)

```
{ "withWhoByRef": 1, "withCumulativePrinciples": 1, "withTerms": 173 }
```

## Golden List — Presence + Clarity Gate

```
[
  { "key": "zec-9-9", "exists": true, "clarityGate": true, "violations": [] },
  { "key": "gen-2-2", "exists": true, "clarityGate": true, "violations": [] },
  { "key": "gen-2-3", "exists": true, "clarityGate": true, "violations": [] },
  { "key": "exo-12-46", "exists": true, "clarityGate": true, "violations": [] },
  { "key": "isa-7-14", "exists": true, "clarityGate": true, "violations": [] }
]
```

## Baseline Gates and Audits (paste)

### Type-check

```
npm run lint  → tsc --noEmit  → OK
```

### Tests (includes clarity-gate wiring in Vitest)

```
13 test files passed; 146 tests passed; full suite green.
```

### Data Audit

```
SUCCESS: All 4 Tiers audited and 100% validated.
Genesis shadow map: exact 1:1 — 173 details ↔ 173 Genesis anchors.
```

Notes:
- Clarity gate in `scripts/checkReadability.ts` is active via `src/data/checkReadability.test.ts`.
- `npm run audit:data` is green at baseline and proves the Genesis ↔ threadDetails parity.

