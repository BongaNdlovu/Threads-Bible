# Threads Bible — scripts

## Canonical pipeline

| Script | Purpose |
|--------|---------|
| `exportBookJson.ts` | **Main export.** Reads `kjv.json`, cleans text, writes `public/books/*.json` + `src/data/bookRegistry.ts`. Repairs Matthew 2:16 if the dump is short. |
| `fillMissingVerses.ts` | After editing thread maps, appends any missing fulfillment verses from `kjv.json` into `fulfillments.ts`. |
| `finalAudit.ts` | Integrity check: 66 books, JSON present, Matt 2:16, all refs resolve. |

```bash
npx tsx scripts/exportBookJson.ts
npx tsx scripts/fillMissingVerses.ts   # if you changed prophecies / nt / ot maps
npx tsx scripts/finalAudit.ts
```

## Source data

- `kjv.json` — full KJV dump used for regeneration (~4.5MB). Keep it.
- Do **not** hand-edit `public/books/*.json` or `bookRegistry.ts` — regenerate instead.

## App architecture (performance)

Book **text** is not in the JS bundle. The app loads `/books/<slug>.json` on first open of that book and caches it in memory.

Always in the initial bundle (small):
- Thread maps (`prophecies`, `bookProphecies`, `paulineProphecies`, `ntProphecies`, `otProphecies`)
- `fulfillments.ts` (referential verse index for resolveRefs)
- Thread explanations (`threadDetails`, `bookThreadDetails`)
- UI / store

## Legacy note

Older `src/data/*Data.ts` verse dumps are unused by the app. They remain only so some historical scripts can import them. Prefer `exportBookJson.ts` + `fillMissingVerses.ts`.
