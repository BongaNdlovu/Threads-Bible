# Threads Bible — Bug & Security Audit (2026-09-13)

Scope: full repository scan — client (`src/`, `components/`), data layer
(`src/data/`), dev server (`server.ts`), build pipeline (`scripts/`, vite
config), deployment workflow, dependencies, and git history.

Verdict legend: **FIXED** (applied in this pass) · **VERIFIED** (checked, clean)
· **OPEN** (documented recommendation, intentionally not changed).

---

## 1. Security

| # | Severity | Finding | Status |
|---|---|---|---|
| S1 | High | `vite.config.ts` inlined `process.env.GEMINI_API_KEY` into the public JS bundle via `define`. Any build with the key set would publish it to GitHub Pages. No key was ever committed (git history scanned), and the bundle contained none at audit time — but the mechanism was live. | **FIXED** — define removed with an explanatory comment; `@google/genai` dependency and AI-Studio `.env.example` removed; `.env.example` now documents only PORT/HOST/BASE_PATH |
| S2 | Medium | Path traversal in `server.ts` `GET /api/test/verse/:verseId`: the book slug taken from the URL was joined into a filesystem path (`tskDir/<slug>.json`). A percent-encoded slug could escape the data directory and return arbitrary `.json` file contents. | **FIXED** — slug is whitelisted against `BOOK_REGISTRY` before use |
| S3 | Medium | Dev/test server bound to `0.0.0.0` (LAN-exposed by default), as did `npm run dev`. | **FIXED** — both default to localhost; `HOST` env override documented; server banner marks it "dev/test, NOT for production" |
| S4 | Medium | 20 npm-audit vulnerabilities (11 high) in the dependency tree (vite/ws/qs chains). | **FIXED** — down to **1 low**: `esbuild` under `tsx` (dev-only script runner, no network exposure; accepted). `qs` pinned via package `overrides` |
| S5 | — | XSS surface: `dangerouslySetInnerHTML`, `innerHTML`, `eval`, `window.open`, `target="_blank"` — none present anywhere in `src/`. | **VERIFIED** |
| S6 | — | Secrets in git history (API-key patterns, `.env` files): none found; `.env.example` was the only env file ever committed. | **VERIFIED** |
| S7 | — | Client-side fetch hardening in `library.ts`: slug validated against registry (path traversal), payload bounded at 50k verses. Correct. | **VERIFIED** |
| S8 | — | GitHub Pages workflow: least-privilege permissions, no secret exposure. | **VERIFIED** |

---

## 2. Bugs — critical & high impact

| # | Severity | Finding | Status |
|---|---|---|---|
| B1 | Critical | `TheMargin` defined its entire panel as a React component *inside* the render body. Every store change (e.g. one keystroke in Notes) recreated the component type → full unmount/remount → **the notes textarea lost focus after every character**. | **FIXED** — panel is plain JSX now (no component boundary) |
| B2 | High | Margin badge→tab routing defeated itself: routing a tab also nulled `marginActiveTab`, re-ran the effect, and the default-tab branch overrode the explicit route (e.g. clicking the TSK button on a verse with citations flipped to "Citations"). | **FIXED** — verse-initialization ref separates first-open defaults from badge routing |
| B3 | High | Stale async TSK responses could overwrite the margin with cross-references for the *previous* verse when navigating quickly. | **FIXED** — cancellation flag per load |
| B4 | High | Navigating from the margin (`preserveMargin`) silently **closed any open/pinned thread**, because `setReadingLocation` unconditionally reset the selected thread. | **FIXED** — margin navigation preserves the thread |
| B5 | High | Notes were written to IndexedDB **on every keystroke** (write amplification, out-of-order puts). | **FIXED** — 500 ms debounce, flushed on close, verse switch, and unmount |
| B6 | High | Threads panel chapter list read the book cache non-reactively: opening the panel before the book JSON finished loading showed "No threads" forever. | **FIXED** — `isBookLoading` added to the memo dependencies |
| B7 | Medium | `selectedChainId` was never consumed, so re-selecting the same chain from the margin couldn't re-scroll the panel to it. | **FIXED** — consumed after scroll |
| B8 | Medium | Clicking a thread verse while Reading was fullscreen did nothing (the thread opened invisibly). | **FIXED** — fullscreen reading exits first |
| B9 | Medium | `loadBook` failure handler checked only the book, not the chapter — a late failure could blank the chapter the user had since moved to. | **FIXED** |
| B10 | Medium | Un-bookmarking set `bookmarks[id] = false` and clearing a note stored `""` — the maps grew forever and diverged from the DB-backed map. | **FIXED** — keys deleted, matching the DB state |
| B11 | Medium | All Dexie (IndexedDB) operations had no error handling — private-mode/quota failures became unhandled rejections with silent UI no-ops. | **FIXED** — try/catch with console errors |
| B12 | Medium | `closeAllStudyPanes` (R key / "Reading only") left an in-progress verse-linking session running. | **FIXED** — linking state reset |
| B13 | Medium | Escape didn't close the margin or cancel an active link session — inconsistent with every other overlay. | **FIXED** — Esc closes topmost layer: link session → margin → fullscreen → overlays |
| B14 | Low | Reading streak used UTC day boundaries ("today" rolled over at the wrong time for users). | **FIXED** — local calendar day |
| B15 | Low | Multiple verses could show the highlight palette at once; palettes never closed. | **FIXED** — opening another verse closes the previous palette |
| B16 | Low | `P` (split) / `E` (explanation) shortcuts mutated invisible state with no thread open, surprising users later. | **FIXED** — guarded on an open thread |
| B17 | Low | Footer had conflicting `flex` + `hidden md:flex` classes; "of 0" chapter counter rendered for unknown books; `B` shortcut doc-comment didn't match behavior; `/` search shortcut used a fragile placeholder-text selector. | **FIXED** — all corrected (stable `#global-search-input`) |

---

## 3. "One language" unification (Threads vocabulary)

The app mixed three vocabularies: **Threads** (brand/UI), **prophecy**
(store/data identifiers), and **tiers/chains/citations** (data layer with no UI
translation). Unification applied, per the approved direction:

- `selectedProphecy` → **`selectedThread`** (store + App, Header, TheThread,
  ThreadPanel, VerseText, keyboard hook, verification script).
- `Verse.isProphecy` → **`Verse.isThread`** — including the 66 generated book
  files and all 6 generator scripts, so the pipeline emits the new name.
- `mockData.ts` compatibility shim **deleted**; every importer now points at
  `types.ts` / `library.ts` directly (one import path per concept).
- User-visible copy unified: "Stick to Bible" → **"Reading only"** (4 renderings
  collapsed to 1); "Prophecies Identified" → **"Threads Mapped"**;
  "Prophecy Source" → "Thread Source"; "No prophecy threads in…" → "No threads
  in…"; "Thread chain · from" → "Chain · from".
- Hardcoded counts ("42 Chains", "28 Beliefs" — 9 occurrences) now render from
  `MASTER_CHAINS.length` / `FUNDAMENTAL_BELIEFS.length`, so they can't drift.
- Duplicated resize-handle class constant deduplicated into
  `PaneChrome.RESIZE_HANDLE_CLASS`.
- AI-Studio remnants removed: `metadata.json`, Gemini env docs, boilerplate
  README, `package.json` name `react-example` → `threads-bible`.
- Dead code deleted: `BOOK_BY_SLUG`, `genesisProphecyCount`,
  `fulfillmentVerseById`, `getMasterChainById`/`getAllMasterChains` +
  `MASTER_CHAIN_BY_ID`, `loadTskManifest`/`getUnifiedTierData`,
  `getFulfillmentVerses`, unused imports, dead JSX conditions, empty Dexie
  upgrade callback, stale comments.
- `npm run audit` → **`npm run audit:data`** (avoids confusion with `npm audit`).

The full glossary lives in [ARCHITECTURE.md](ARCHITECTURE.md).

---

## 4. Remaining recommendations (OPEN, by design)

Status update 2026-09-14: items 1, 4, 5, 6 (partly), 7 and the thread-map
consolidation/drift-check half of 3 were addressed in the code-splitting pass
(described below). Remaining OPEN: 2 (full detail authoring is ongoing
content work — Tier 3 anchors are now 100% covered, overall 28%), 3 (the
rename-by-generator option), and the ESLint suggestion from the follow-up
review.

1. **Code-split the bundle** — ✅ **DONE.** `src/data/deferred.ts` provides a
   deferred-dataset primitive; `fulfillments.ts`, `threadDetails.ts` +
   `bookThreadDetails.ts`, `fundamentalBeliefs.ts`, and `lastDayEvents.ts`
   now ship as lazy chunks (fulfillments + details fetched at boot, beliefs +
   LDE on first Threads-panel open). Initial bundle: 1,528 KB → 921 KB
   minified (458 → 273 KB gzip). TheThread also loads the books a thread's
   fulfillment refs point into, fixing empty fulfillment panes for
   non-Genesis threads.
2. **Generate or drift-check `threadDetails.ts`** — ✅ **coverage complete;**
   hand-writing is ongoing in priority order. The Genesis 1:1 keyset check,
   canonical-id checks, and hand-vs-draft shadowing checks run in
   `npm run audit:data`. As of 2026-09-14: **719/1,342 anchors (54%) have
   hand-written details** — all 173 Genesis, all 78 Tier 3, the Gospels, Acts,
   Romans, Hebrews, Revelation, Daniel, and the expanded Exodus anchors. The
   remaining 623 anchors (Isaiah, Psalms, and the rest) carry generated drafts
   (`src/data/draftThreadDetails.ts`, `npm run generate:drafts` re-prunes
   shadowed drafts after every authoring pass). Hand entries always win at
   lookup; drafts are flagged `draft: true` and labelled in the UI.
3. **Retire or rename the five thread-map files** — partially: app code now
   imports maps only through `src/data/threadMap.ts`, so a future
   consolidation touches one module. The generated files themselves are
   unchanged.
4. **Real test framework** — ✅ **DONE.** Vitest (`npm test`, 24 data-layer
   tests in `src/data/*.test.ts`); the bespoke script moved to
   `npm run test:legacy`. The deploy workflow gates on `audit:data`, `test`,
   and `lint` before building.
5. **Cross-book chapter navigation** — ✅ **DONE.** `nextChapterLocation` /
   `prevChapterLocation` in `library.ts` cross book boundaries
   (Genesis 50 → Exodus 1 → …).
6. **Search UX** — ✅ bare book-name results no longer reset reading position
   when that book is already open; ✅ unresolvable margin/panel refs now show
   a transient notice (store `notice`/`showNotice`, toast in App) instead of
   failing silently.
7. **Minor**: weekly chapter counter staleness and the one-frame
   Drawer→Sheet flash remain open; `db.links` full-table filters unchanged.

---

## 5. Verification performed

- `tsc --noEmit` — clean
- `npm test` (store/data verification) — all assertions pass
- `npm run audit:data` — all 4 tiers validate 100% (108 citations, 40
  Messianic prophecies, 42 chains / 277 steps, TSK keys)
- `npm run build` — production build succeeds
- `npm audit` — 1 low-severity dev-only residual (accepted, documented above)
- Built bundle greps — no key patterns, no GEMINI references

---

## 6. Addendum — thread & connection accuracy pass (same day)

A second pass asked a different question: not "does everything resolve?" but
"is everything *right*?" — anchor validity, KJV text fidelity, and the
connections themselves. New permanent tool: `npm run verify:accuracy`
(`scripts/accuracyCheck.ts`).

### What was verified clean

- **All 1,342 thread anchors** are unique (zero cross-map duplicates), point at
  real verses, and every fulfillment reference resolves — 100%.
- **`threadDetails.ts` keyset is exactly identical** to the 173 Genesis thread
  anchors; all 162 `bookThreadDetails` entries are real verses.
- **Tier 2 (108 citations), Tier 3 (40 prophecies), Tier 4 (42 chains / 277
  steps), 28 Beliefs, 19 LDE phases**: every `verseId` matches its human-readable
  ref and exists in the canon — zero inconsistencies.
- **KJV text fidelity**: 31,102 verses (exact standard KJV total) after repairs
  below; all Textus-Receptus–distinctive passages present (1 John 5:7 Comma,
  Mark 16:9–20, John 7:53–8:11, Matt 17:21/18:11/23:14, Acts 8:37, Rom 16:24);
  KJV verse numbering used consistently (Joel 2:28–32, Malachi 4, Psalm 22:16).
- **Connection spot-checks**: ~30 of the highest-profile threads (Gen 3:15,
  12:3, 22:18; Deut 18:15; Ps 16:10, 22:16/18, 34:20, 41:9; Isa 7:14, 9:6,
  53:5/7/9, 61:1; Jer 31:31; Dan 9:26; Hos 11:1; Joel 2:28; Amos 9:11; Jonah
  1:17; Mic 5:2; Zech 9:9, 11:12, 12:10; Mal 3:1, 4:5) reviewed verse-by-verse —
  all accurate. The full Tier-2 citation list was reviewed: it is the standard
  scholarly catalog, including correct composite handling (Matt 21:4–5 =
  Zech 9:9 + Isa 62:11; Matt 27:9–10 = Zech 11:12–13 + Jer 32:6–9; the Rom 3
  and Heb 1 catenas).

### Found and fixed

| # | Finding | Fix |
|---|---|---|
| A1 | **Two dead threads**: anchor keys `2ch-20:20` and `isa-55:10` in `otProphecies.ts` used colons instead of dashes — invalid verse ids, so `2 Chron 20:20` and `Isa 55:10` never carried their threads at runtime. | Keys corrected to `2ch-20-20` / `isa-55-10` (connections themselves were sound). |
| A2 | **Two KJV verses missing from the source dataset** (`scripts/kjv.json`, thiagobodruk dump): Matt 22:40 and Matt 26:68 were dropped upstream, shifting verse numbering for the tail of both chapters — which put thread/citation/TSK connections pointing into those ranges (e.g. Ps 110:1 → "Matt 22:44", TSK keys mat-22-40…46) one verse off. | Repair logic added to `scripts/exportBookJson.ts` (following the existing Matt 2:16 repair); books/registry/verse-counts regenerated; standard KJV text restored. |
| A3 | **Edition mixing in Revelation**: the dump carried "And I stood upon the sand of the sea." as a separate 12:18 (critical-text placement) instead of the KJV's opening of 13:1, inflating the canon by one verse (31,103). | `repairRevelation()` merges the phrase into Rev 13:1 per the KJV; canon now exactly 31,102 verses. |
| A4 | **Stale fallback text**: `fulfillments.ts` carried KJV Matt 22:45's text under the id `mat-22-44` (the in-memory fulfillment index used before a book loads). | Entry corrected to the true Matt 22:44 text. |

### Known, documented, intentional

- `cit-luk-24-44` ("Luke 24:44–46 ← Genesis to Malachi (Law, Prophets, Psalms)")
  is the one Tier-2 entry whose `otRef` is a descriptive phrase rather than a
  citation; `psa-22-1` serves as its representative anchor verse.
- Chain #18's display anchor ("Isaiah 42:1-4; 52:13–53:12") uses a composite,
  book-less continuation; navigation correctly uses its `primaryAnchorVerseId`
  (`isa-53-5`), which is valid.
- `src/data/matthewData.ts` / `revelationData.ts` (script-input copies, never
  bundled) predate the repairs; the generator scripts do not regenerate them
  with repairs. Not client-affecting.
- Honest scope note: every connection was validated *mechanically* (100%) and
  ~30 high-profile threads plus the full Tier-2 catalog were reviewed *by
  content*. A complete doctrinal review of all 1,342 threads remains scholarly
  work no script can do.

---

## 7. Addendum — resilience pass (2026-09-14)

Follow-up review items: user-data loss, shareable URLs, crash recovery, and
offline reading. All four were implemented.

1. **Backup/restore** — `src/db/backup.ts` + pure `backupFormat.ts`. Export
   downloads a versioned JSON of bookmarks/notes/links; import validates
   against the book registry (slug, chapter, verse bounds), de-duplicates
   links, and merges without deleting. UI: header buttons (desktop) and the
   controls sheet (mobile); results/confirmations surface via the app notice.
2. **Deep links** — `hashSync.ts` syncs reading position, selected verse, and
   pane flags to the URL hash (`#zec-9-9;tx`) with pushState per change, so
   every study position is shareable and back/forward walks through history.
   Boot applies a present hash instead of the Genesis default; a bare
   chapter hash clears study overlays.
3. **Error boundary** — `ErrorBoundary` wraps the app root (full-page
   fallback) plus the reading/thread/margin/panel panes (inline "Try again").
   Crashes are logged and persisted to localStorage `threads-bible-last-crash`
   (static site — no telemetry endpoint by design).
4. **Offline (PWA)** — `vite-plugin-pwa` with an auto-updating service worker:
   precaches the app shell + all data chunks (~1.6 MB), and caches the 66 book
   JSONs and 66 TSK files CacheFirst on first use (immutable per release).
   Installable via `manifest.webmanifest` (SVG icon, standalone display).

New tests cover the hash codec (round trips, malformed input) and backup
validation (foreign files, malformed rows, self-links, non-canonical ids).
CI (deploy workflow) runs `audit:data`, Vitest, and `tsc` before every deploy.

