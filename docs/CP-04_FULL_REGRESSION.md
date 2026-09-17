# CP-04 · Full regression at HEAD

Plan v2.0 · Branch `cursor/plain-lang-cp01-cp02-genesis-ebb9` · Executed after Stage A book 60 and the
structural-label repair, on the commit that closed Stage A plus its repair commits.

Every command below was run from the repository root. Output is pasted verbatim.

## 1 · Type gate (`npm run lint:sweep`)

```
> threads-bible@1.0.0 lint:sweep
> tsc --noEmit -p tsconfig.sweep.json

exit=0
```

This is the CHK-01 resolution: `tsconfig.sweep.json` is an explicit `files` allowlist covering the
sweep's own scripts, so the sweep's code is type-checked without the operator's two pre-existing broken
appendix scripts (`scripts/cp02BookAppendix.ts`, `scripts/cp02LeviticusAppendix.ts`), which are left
untouched and uncommitted.

## 2 · Test suite (`npm test`)

```
Test Files  13 passed (13)
Tests  146 passed (146)
Duration  2.37s
exit=0
```

Includes `src/data/checkReadability.test.ts` (the clarity-gate primitives) and
`src/data/lifeThreads.test.ts`, which gates every first-principle string in the life-threads data.

## 3 · Data audit (`npm run audit:data`)

```
Tier 1 Status: 66/66 books present.
Tier 1 Stats: 29056 verses have TSK links; 63668 phrase-anchored reference groups.
Tier 2 Status: 100% of 108 citations resolve to valid canonical verses.
Tier 3 Status: 100% of 78 prophecies resolve to valid canonical verses.
Tier 4 Status: 100% of 42 chains and all 277 timeline steps resolve perfectly.
Genesis shadow map: exact 1:1 — 173 details ↔ 173 Genesis anchors.
Book details: all 1183 keys are valid canonical verse ids.
Detail coverage: 1342/1342 anchors (100%) have hand-written titles/explanations.
Tier 3 (Jesus Christ thread) anchors missing HAND-written details: 0
SUCCESS: All 4 Tiers audited and 100% validated!
exit=0
```

Note for CP-06: the audit's "42 chains" are the Tier 4 milestone chains, a different structure from the
36 pillar chains in `threadChains` that the sweep's Stage A.5 pass owns. The two counts must not be
conflated in the final report.

## 4 · Production build (`npm run build`)

```
✓ built in 7.73s
exit=0
```

## 5 · Whole-canon clarity gate

`npx tsx scripts/cp02ProseScan.ts --all --limit 0 --json <temp>` — every prose string in the canon,
gated with `checkProse()` from `scripts/checkReadability.ts`:

```
totals: {"entries":1580,"strings":4324,"words":83663,"gateFails":0}
books scanned: 66
books with failures: 0
```

**4,324 strings across 66 books, 0 failures.** The CP-01 baseline recorded 22 pre-existing failures in
the canon; 20 were in the Stage A scope and all 20 are resolved, and the whole canon now reads clean,
which also clears the two failures that sat outside the sweep's scope.

## 6 · Per-book structural verification

`npx tsx scripts/cp03StructuralVerify.ts --book <slug> --base <that book's pre-apply commit>^` for every
book the sweep touched, with all seven checks (the six shape checks plus `LABEL_FIXITY`):

```
FINAL per-book regression (7 checks): 62 PASS of 63 checked · FAIL: (none) · no base: lam
```

Lamentations shares its apply commit with Jeremiah (`CP-03 JER + LAM: …`), so it has no commit of its
own to derive a base from; run against that shared commit's parent it also passes:

```
npx tsx scripts/cp03StructuralVerify.ts --book lam --base 984751e^
OVERALL: PASS (exit 0)
```

So **63 of 63 books pass**: the 60 Stage A books plus the three calibration books (Numbers, Psalms,
Romans). Each run proves, against that book's own pre-apply state, that the entry key set is
unchanged, every non-prose field is byte-identical, only in-scope prose strings changed, no citation
token was added or dropped, every Hebrew/Greek run, transliteration and Strong's number survived, no
new clarity-gate failure appeared, and no structural label was added, dropped or renamed.

## Verdict

All four gates green (type, tests, audit, build), the whole canon passes the clarity gate for the first
time, and every book passes seven structural checks against its own pre-apply commit. No book is
reverted, none is blocked, and nothing outside `src/data/threadDetails.ts` and
`src/data/bookThreadDetails.ts` was changed by the sweep.

## Addendum — re-run after the Stage A.5 chain pass

The chain pass wrote `src/data/threadDetails.ts` (175 strings across 30 of the 36 chains), so the four
gates were run again on the final tree:

```
canon-wide gate:  totals {"entries":1580,"strings":4324,"words":84337,"gateFails":0}
                  books with failures: 0
npm test:         Test Files 13 passed (13) · Tests 146 passed (146)
npm run audit:data: SUCCESS: All 4 Tiers audited and 100% validated!
npm run build:    ✓ built in 7.78s
npm run lint:sweep: exit 0
```

The chain scope was verified separately with `npx tsx scripts/cp03StructuralVerify.ts --chains-only`,
which compares the entire prose corpus of both data files against HEAD and scopes its checks to the
chain group:

```
coverage: 0 entries across 0 book group(s) + 36 pillar chain(s) ·
          13,755 structural leaves + 4,324 prose leaves compared ·
          658 prose strings gated · 12 book-qualified citations
OVERALL: PASS (exit 0)
```

and the applier's post-flight reported `verse entries git reports: 0` — the chain pass changed 30 chain
entries and no verse entry at all. Since the only file it wrote was `threadDetails.ts` and the verifier
compared every prose leaf in both files, the earlier 63-of-63 per-book result still stands unchanged.
