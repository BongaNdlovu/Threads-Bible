# Threads Bible — Architecture & Glossary

This document is the single source of truth for how the app is put together and
what its vocabulary means. If code and this document disagree, fix the code.

---

## 1. Canonical vocabulary

The app's brand is **Threads**: a thread is a curated, Sola-Scriptura-tethered
connection between verses. All naming follows this vocabulary:

| Term | Meaning | Canonical identifiers |
|---|---|---|
| **Thread** | A connection from a source verse to one or more fulfillment passages | `selectedThread`, `threadFor()`, `TheThread`, `isThread` (Verse flag) |
| **Thread map** | `verseId → fulfillmentRefs` lookup that marks which verses carry threads | `allThreadMaps` in `threadMap.ts` (over the five generated files) |
| **Thread detail** | Hand-written explanation of a thread: title, principle, original-language terms, keywords | `ThreadDetail`, `getThreadDetail()` |
| **Cross-references (TSK)** | Treasury of Scripture Knowledge phrase-anchored references (data layer: "Tier 1") | `getTskForVerse()`, `public/data/tsk/` |
| **Citation** | NT apostolic quotation/allusion of an OT passage (data layer: "Tier 2") | `NT_CITATIONS`, `getCitationsForVerse()` |
| **Messianic prophecy** | Specific OT→Christ prophecy with canonical fulfillments (data layer: "Tier 3") | `MESSIANIC_PROPHECIES`, `prophecyRef` field |
| **(Master) chain** | Multi-step redemptive timeline across the canon (data layer: "Tier 4") | `MASTER_CHAINS`, `MasterChain` |
| **Margin** | The per-verse side panel (Sheet on desktop, Drawer on mobile) | `TheMargin`, `selectedMarginVerse` |
| **Threads panel** | The browse panel: chapter threads / chains / Messianic / beliefs / LDE tabs | `ThreadPanel`, `threadsPanelOpen` |
| **Link** | A user-created verse-to-verse connection (stored in IndexedDB) | `links`, `startLinking` |
| **Verse id** | Canonical verse identifier everywhere: `<slug>-<chapter>-<verse>`, e.g. `gen-3-15`, `1sa-2-10`, `3jn-1-6` | — |
| **Book slug** | 3-letter OSIS-like id from `bookRegistry.ts` (`gen exo … 1sa 2sa … joh … rev`) | `BOOK_REGISTRY` |

Legacy names that were **retired** in the 2026-09 unification:
`selectedProphecy` → `selectedThread`, `Verse.isProphecy` → `isThread`,
`mockData.ts` shim (deleted), "Stick to Bible" → "Reading only",
"Prophecies Identified" → "Threads Mapped".

**Naming rules going forward**

1. User-facing features are *threads*; never introduce a fourth synonym.
2. The words "Tier 1–4" are data-layer audit vocabulary (mirrored in
   `scripts/auditAllTiers.ts` and the dev server). UI copy may use them only as
   the layer badges (`Tier 1…4`), always paired with the canonical name.
3. One concept, one identifier: the pinned split pane is `threadPaneOpen`, the
   browse panel is `threadsPanelOpen`. Pane ≠ Panel.
4. Never hand-edit files listed as *generated* below — change the generator.

---

## 2. Runtime architecture

```
┌───────────────────────────── Browser (static, GitHub Pages) ─────────────────────────────┐
│                                                                                          │
│  App.tsx ── layout: Header / ZenReader (reading) / TheThread (study) / TheMargin         │
│    │                 │                       │                  │                        │
│    │            SearchBar, Header      ThreadPanel,           per-verse tabs:           │
│    │            MobileControls,        ThreadExplanation      TSK · Citations ·          │
│    │            ChapterGrid, Footer                           Messianic · Chains ·       │
│    │                                                          Context · Links · Notes    │
│  useStore.ts (Zustand) — all UI state; persists prefs/recents to localStorage             │
│    │                                                                                      │
│    ├── library.ts — loadBookBySlug(): fetch /books/<slug>.json (LRU-8) → applyThreadsTo() │
    │                     resolveRefs(): fulfillment index + loaded books                   │
    ├── crossRefService.ts — fetch /data/tsk/<slug>.json (LRU-10)                          │
    ├── db/database.ts (Dexie/IndexedDB) — bookmarks, notes, links (user data only)          │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

**Data flow for a chapter open**

1. `setReadingLocation(book, chapter)` → `loadBook(name)`.
2. `library.loadBookBySlug(slug)` fetches `public/books/<slug>.json`
   (KJV text; slug is validated against `BOOK_REGISTRY`), maps to `Verse[]`,
   then `applyThreadsTo()` overlays `isThread: true` + `fulfillmentRefs` from
   the in-memory thread maps.
3. The reading pane renders; thread verses get a dashed underline.
4. Clicking a thread verse → `selectedThread` → `TheThread` shows source and
   fulfillment side by side plus the `ThreadDetail` explanation.
5. Clicking any verse's margin icon → `selectedMarginVerse` → `TheMargin`
   loads TSK (async fetch), citations, Messianic, chains (synchronous maps).

**Bundling**: the app shell + thread maps + tier 2/3/4 ship in the initial
bundle (~920 KB / ~273 KB gzip). Four heavy datasets are code-split into
deferred chunks via `src/data/deferred.ts` (loaded in the background at boot or
on first panel open — never blocking first paint):

| Chunk | Size (gzip) | Loaded when |
|---|---|---|
| `fulfillments.ts` (1,203 verses) | 70 KB | boot (`preloadFulfillments`) |
| `threadDetails.ts` + `bookThreadDetails.ts` | 114 KB | boot (`preloadThreadDetails`) |
| `fundamentalBeliefs.ts` | 12 KB | first Threads-panel open |
| `lastDayEvents.ts` | 11 KB | first Threads-panel open |

Book text and TSK data are lazily fetched from `public/`. TheThread additionally
loads any book referenced by a thread's fulfillment refs on demand, so
fulfillment panes are complete even when the partial fulfillment index misses
them.

**Deep links & offline.** `hashSync.ts` mirrors reading position, the selected
verse, and pane flags into the URL hash (`#zec-9-9;tx`), giving every study
position a shareable URL and native back/forward behavior. The production build
is an installable PWA (`vite-plugin-pwa`, `registerType: 'autoUpdate'`): the
service worker precaches the app shell and all data chunks, and caches book/TSK
JSONs CacheFirst on first use — after visiting a chapter once, it reads
offline. User data (bookmarks, notes, links) lives in IndexedDB and can be
exported/imported as a versioned JSON backup from the header (desktop) or the
controls sheet (mobile).

---

## 3. Source map

| Path | Role | Generated? |
|---|---|---|
| `src/App.tsx` | Root layout, panes, fullscreen/split logic | no |
| `src/store/useStore.ts` | All app state (Zustand) | no |
| `src/components/*` | UI components (`components/ui/*` = shadcn/base-ui primitives) | no |
| `src/data/types.ts` | `Verse`, `ThreadMapEntry` | no |
| `src/data/library.ts` | Book loading, thread overlay, ref resolution (runtime hub) | no |
| `src/data/threadMap.ts` | Single import surface over the five generated thread maps | no |
| `src/data/deferred.ts` | Deferred-dataset primitive (code splitting) + React hook | no |
| `src/data/threadDetailService.ts` | Lazy facade over threadDetails/bookThreadDetails | no |
| `src/hash.ts` | URL-hash codec for deep links (pure) | no |
| `src/hashSync.ts` | Two-way store ↔ URL-hash sync (deep links, back/forward) | no |
| `src/db/database.ts` | Dexie/IndexedDB: bookmarks, notes, links | no |
| `src/db/backupFormat.ts` | Backup JSON format + canonical validation (pure) | no |
| `src/db/backup.ts` | Backup export/import I/O + file download | no |
| `src/components/ErrorBoundary.tsx` | Render-error containment (app + per-pane) | no |
| `src/data/bookRegistry.ts` | 66-book registry (name, slug, chapters, verses) | **yes** — `scripts/exportBookJson.ts` |
| `src/data/verseCounts.ts` | Per-chapter verse counts | **yes** — `scripts/generateVerseCounts.ts` |
| `src/data/prophecies.ts` | Thread map: Genesis (173 anchors) | **yes** — `scripts/completeThreads.ts`, `finalizeThreads.ts` |
| `src/data/bookProphecies.ts` | Thread map: Exodus, Daniel, Revelation (154) | **yes** — `scripts/generateBooks.ts` family |
| `src/data/otProphecies.ts` | Thread map: remaining 37 OT books (511) | **yes** — `scripts/generateOtBooks.ts` |
| `src/data/ntProphecies.ts` | Thread map: NT (non-Pauline) (250) | **yes** — `scripts/generateNtBooks.ts` |
| `src/data/paulineProphecies.ts` | Thread map: 13 Pauline epistles (254) | **yes** — `scripts/generatePaulineBooks.ts` |
| `src/data/fulfillments.ts` | 1,203 KJV fulfillment verses, always in memory | **yes** — `completeThreads.ts`, `fillMissingVerses.ts`, `finalizeThreads.ts` |
| `src/data/threadDetails.ts` | Genesis thread details + pillar chains (hand-written; lazy chunk) | no |
| `src/data/bookThreadDetails.ts` | Thread details for the other books incl. every Tier 3 anchor (hand-written; lazy chunk) | no |
| `src/data/draftThreadDetails.ts` | Generated draft details for every remaining anchor (`npm run generate:drafts`) | **yes** |
| `src/data/tier2NtCitations.ts` | 108 NT citations/allusions (hand-written) | no |
| `src/data/tier3Messianic.ts` | 78 Messianic prophecies (Jesus Christ threads), Edersheim-harmonized (hand-written) | no |
| `src/data/tier4MasterChains.ts` | 42 master chains, 277 steps (hand-written) | no |
| `src/data/fundamentalBeliefs.ts` | 28 beliefs with scripture anchors (hand-written) | no |
| `src/data/lastDayEvents.ts` | 19 LDE phases across 6 eras (hand-written) | no |
| `src/data/crossRefService.ts` | TSK fetch/cache + tier getters | no |
| `src/data/refParser.ts` | Human ref → verse ids (`parseRef`, `expandVerseRange`) | no |
| `src/data/*Data.ts` (66 files) | Full KJV text as TS (script inputs only; NOT bundled) | **yes** — generator scripts |
| `public/books/*.json` | KJV text served to the client (5.7 MB) | **yes** — `scripts/exportBookJson.ts` |
| `public/data/tsk/*.json` | TSK data per book (7.5 MB) | **yes** — `scripts/buildTskData.ts` |
| `scripts/kjv.json` | Source KJV text used by the generators | input |
| `server.ts` | Local dev/test server with `/api/test/*` diagnostics | no |

The thread-map keyspaces are **disjoint partitions by book** (no verse id
appears in two maps); together they hold 1,342 thread anchors. App code imports
them only through `threadMap.ts` — never from the generated files directly —
so consolidating the five files later touches one module.

---

## 4. Conventions

- **Verse ids**: `<slug>-<chapter>-<verse>`; slugs match `BOOK_REGISTRY`
  exactly; ref parsing must go through `refParser.ts`, never ad-hoc regex.
- **Verification**: after touching thread data, run `npm run audit:data`
  (validates every reference in every tier, checks threadDetails 1:1 drift
  against the Genesis map, and reports detail coverage) and `npm test`
  (Vitest data-layer suite: ref parsing, thread-map invariants, tier shapes).
  `npm run test:legacy` runs the store-behavior verification script. Before
  committing, run `npm run lint` and `npm run build`; CI gates the deploy on
  all four.
- **Generated files**: edit the generator script, re-run it, commit both.
- **State**: everything UI lives in `useStore`; localStorage keys are prefixed
  `threads-bible-`; the only IndexedDB is `ThreadsBibleDatabase`.
- **Secrets**: none needed anywhere. Never add `define` substitutions in
  `vite.config.ts` for secrets — they end up in the public bundle.
