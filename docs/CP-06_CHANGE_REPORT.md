# CP-06 · Change Report — Phase A complete, Phase B (CP-01) evidence

Scope: WP-1 brand unification items; golden sample verification; evidence-first logs for type-check, tests, and audits. No PWA/hash/IndexedDB/schema/keyspace changes.

What changed (Phase A)
- VerseText: Removed dashed underline for thread verses; applied solid blue highlight using shared tokens (`--accent`). No border-dashed remains.
- Map palettes: Eliminated inline `gold` hex fields from ThreadMap, ThreadMapFallbackCard, ThreadMapPage, HistoricalContextPage. Accents now bind to `--accent`/`--ring` from `src/index.css` at runtime. Strand name `gold` in data/types remains by design.

What did not change
- PWA, hash deep-link format, IndexedDB schema; generated prophecy-map content keyspaces; no invented links; no SDA/EGW branding in Life Thread copy.
- Out-of-scope helpers retained: `src/hooks/useKeyboardShortcuts.ts` (threads-first UX affordances) and `scripts/verifyAuditImprovements.ts` (legacy regression harness).

Pasteable proof

1) Type-check

```bash
npm run lint
```

Result: OK (no output; exit code 0).

2) Tests

```bash
npm test --silent
```

```
 Test Files  13 passed (13)
      Tests  146 passed (146)
   Duration  ~1.6s
```

3) OT-first audit

```bash
npx tsx scripts/auditOtFirstOrder.ts
```

```
OT anchors audited:            756
NT-only OT anchors:            175 (undocumented: 0)
OT-after-NT ordering breaches: 0
SUCCESS: OT-first ordering invariant holds; all NT-only anchors documented.
```

4) Golden gate (isa-7-14, gen-2-3) — passes via Vitest clarity gate

Covered by `src/data/checkReadability.test.ts` golden list. Full suite green (see Tests).

5) Phase B · CP-01 Investigate — counts, field stats, golden verify

```bash
npx tsx scripts/cp01_investigate.ts
```

```
=== CP-01 · Per-Book Entry Counts (threadDetails) ===
{ "gen": 173 }

=== CP-01 · Per-Book Entry Counts (bookThreadDetails) ===
{ … "isa": 111, "mat": 60, "rom": 67, "psa": 87, "rev": 84, … }

=== CP-01 · Field Occurrence Counts (threadDetails) ===
{ "withWhoByRef": 1, "withCumulativePrinciples": 1, "withTerms": 173 }

=== CP-01 · Golden-List Verify + Clarity Gate ===
[
  { "key": "zec-9-9",  "exists": true, "clarityGate": true, "violations": [] },
  { "key": "gen-2-2",  "exists": true, "clarityGate": true, "violations": [] },
  { "key": "gen-2-3",  "exists": true, "clarityGate": true, "violations": [] },
  { "key": "exo-12-46","exists": true, "clarityGate": true, "violations": [] },
  { "key": "isa-7-14","exists": true, "clarityGate": true, "violations": [] }
]
```

6) Data integrity audit (tiers)

```bash
npm run audit:data --silent
```

```
Tier 1–4: 100% validated; detail coverage 1342/1342; success.
```

Notes
- Token source of truth remains `src/index.css` (light/dark). Components consume Tailwind token classes or derive runtime `--accent`/`--ring` hex for SVG/inline styles. No duplicated hex values for the blue accent remain in palettes.
- Dashed underline treatment is fully removed from `VerseText`.

Next (Phase B)
- CP-02 Genesis-only draft rewrites (threadDetails.ts) + before/after appendix + clarity-gate output + THEOLOGY-REVIEW flags. Draft will be added to this PR as a docs artifact; not applied to code per plan.

