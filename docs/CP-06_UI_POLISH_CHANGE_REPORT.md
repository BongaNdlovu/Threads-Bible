# CP-06 · UI Polish Change Report

**Plan:** `THREADS_BIBLE_UI_REPAIR_AND_PAGE_IDENTITY_PLAN_v1.5.md`
**Branch:** `cursor/ui-polish-v1.5-v2` — worktree `C:\Users\fanel\Downloads\Threads-Bible-main\.kilo\worktrees\ui-polish`, forked from `main` @ `43feead`
**Not** the plain-language branch (binding rule CP-00 / operator decision 4).
**Date:** 2026-09-17

---

## 1 · What changed (one line per file)

| File | Change | Defect |
|---|---|---|
| `src/components/pointerGuards.ts` **(NEW)** | `DRAG_THRESHOLD_PX` + `isInteractiveTarget()` — the two rules that stop a pan from eating a control click | A |
| `src/components/ThreadMap.tsx` | capture-phase guard on the pan layer; pan armed lazily and pointer-captured only past 5 px; `pointercancel` handled; `ORDO_KEY` / `ORDO_DEFAULTS` / `clearOrdoSettings()` exported; dossier renders one block per idea; `data-ordo-interactive` on SVG edge hit-paths | A, A2, B0, G |
| `src/components/dossierText.ts` **(NEW)** | pure `splitSentences` / `paragraphBlocks` (display-only idea separation) | G |
| `src/components/ThreadMapPage.tsx` | reset now clears the live `threads-bible-ordo-v2` key; reader refs normalised; `data-page="ordo"` token root | B0, D |
| `src/components/verseGroups.ts` **(NEW)** | pure `groupVersesByBookChapter` (+ labels/counts) | E |
| `src/components/ZenReader.tsx` | optional `groups` prop → one headed section per book+chapter; grouped eyebrow says “Fulfillment references” | E |
| `src/components/TheThread.tsx` | fulfillment pane passes groups instead of `title={fulfillmentRefs[0]}` | E |
| `src/components/threadMapModel.ts` | exported `MAP_GAPS`; new defaults `normal 56/140`, `compact 32/96`, `relaxed 76/180`; `normalizeReaderRef` for display refs | F, B1 |
| `src/index.css` | `[data-page=…]` token blocks (reading / prophecy / lexicon / historical / ordo), `.page*` helpers, motion-safe ember ambience | D |
| `src/components/ProphecyPage.tsx` | cinematic skin via tokens (deep ink, ember/gold, vignette gradient) | D |
| `src/components/LexiconPage.tsx` | scholarly skin (parchment surface, ink rules, serif-forward lemma cards) | D |
| `src/components/HistoricalContextPage.tsx` | archive refinement of the palette it already had (earth + stronger rail) | D |
| `src/App.tsx` | reading pane opts into `data-page="reading"` (calm paper surface) | D |
| `src/components/threadMapModel.test.ts` | replaced the hardcoded `38` asserts with `MAP_GAPS`, added non-overlap + wider-than-before guards | R8 |
| `src/components/verseGroups.test.ts` **(NEW)** | grouping: mixed books, ranges, order, empty, missing metadata | E |
| `src/components/dossierText.test.ts` **(NEW)** | idea blocks: single idea, packing, semicolons, typewriter mid-sentence, verbatim wording | G |
| `src/components/threadMapInteraction.test.ts` **(NEW)** | interactive-target guard + `normalizeReaderRef` | A, B1 |
| `docs/CP-01_UI_DEFECT_INVENTORY.md` **(NEW)** | defect table + click proof | — |
| `docs/CP-02_UI_POLISH_DRAFT.md` **(NEW)** | design decisions | — |
| `docs/spot/ui-polish/before|after/**.png` **(NEW)** | before/after evidence + raw `results.json` | — |

**Not touched (deliberately):** `ThreadExplanation.tsx`, `src/data/**` (no theology/content edit), `useFulfillmentVerses.ts` (range expansion intact), `package.json` (no new dependency), PWA/IndexedDB, `MobileControls`/`Header` layout.

---

## 2 · v1.4 → v1.5 diagnosis corrections that changed the patch

| # | Earlier diagnosis | What the code actually does (CP-01) | How the patch differs |
|---|---|---|---|
| 1 | “READ PASSAGE is probably not wired / missing handler” | The handler is complete and correct. `setPointerCapture` on the pan layer at press time retargets `pointerup`, so no `click` is ever dispatched on the button | Fixed pointer handling only. **`turnToVerse` / navigation was not re-wired** |
| 2 | “Fulfillment pane shows the wrong chapter title” | It showed the *first* fulfillment ref as the title **and** rendered every verse inside a single `<p>` (`ZenReader.tsx:82`) | Added per-book+chapter grouping *and* per-group headings; the single-ref title is gone |
| 3 | “Fix explanation spacing in `ThreadExplanation.tsx`” | That component is not mounted on the Ordo map; the live surface is the ThreadMap dossier | Dossier-only change; `ThreadExplanation.tsx` untouched (0 bytes changed) |
| 4 | “Add `PageChrome.tsx` for shared page chrome” | `PaneChrome.tsx` already carries the shared chrome and is reused as-is | **No `PageChrome.tsx` created.** Identity shipped as CSS tokens + one `data-page` attribute per page root |
| 5 | Reset Map View “may need a new reset API” | It deleted `ordo-viewer-settings-v1` while the map reads `threads-bible-ordo-v2` | Exported the live key + `clearOrdoSettings()` from the map and reused it |
| 6 | (New in v1.5) keep the branch off plain-language | — | Work happened in a dedicated worktree on `cursor/ui-polish-v1.5-v2`, forked from `main` @ `43feead`; the plain-language worktree and its uncommitted files were left untouched |

---

## 3 · Evidence (pasteable)

### 3.1 Defect A — the click arrives now

```
BEFORE (pointer probe, card 01):
  pointerdown -> span.truncate "READ PASSAGE →"
  pointerup   -> div.absolute.inset-0.cursor-grab.active:cursor-grabbing.touch-none   <- pan layer
  click       -> div.absolute.inset-0.cursor-grab...                                  <- pan layer
  outcome     -> { hash: "#gen-1-1;t", mapStillOpen: true }

AFTER (same card, same probe, 2 px jitter):
  pointerdown -> span.truncate "READ PASSAGE →"
  pointerup   -> span.truncate "READ PASSAGE →"
  click       -> span.truncate "READ PASSAGE →"
  outcome     -> { hash: "#gen-1-1", mapStillOpen: false, readerVerse: { top: 209, bottom: 244, inView: true } }
```

Card 02 (`John 1:1-3`, 3 px jitter) → `hash: "#joh-1-1"`, `inView: true`.
Card 03 (`Hebrews 11:3`, 3 px jitter) → `hash: "#heb-11-3"`, verse visible.
Card footer **Split** (`Open John 1:1-3 in Split View`) → `pointerup`/`click` land on the button; `mapStillOpen: false`, `;t` flag set (split view open).

### 3.2 Map panning still works (no regression) and now ignores sub-threshold wobble

```
transform before pan:            translate(0px, 0px) scale(1)
real drag -150,-50 on canvas:    translate(-150px, -50px) scale(1)     <- pans
3 px drag (below threshold):     translate(0px, 0px) scale(1)          <- view stays still
```

### 3.3 Defect F — measured geometry, Gen 1:1

| Metric | Before | After |
|---|---|---|
| Adjacent fulfilment-card gap | **38 px** | **56 px** |
| Anchor → column X gap | **120 px** | **140 px** |
| Gen 1:1 → John 1:1-3 edge length | **163 px** | **184 px** |
| John 1:1-3 → Hebrews 11:3 edge length | **22 px** | **40 px** (real anchors, no fake path) |

Screenshots: `docs/spot/ui-polish/before/01-ordo-map-gen1-1.png` → `after/01-ordo-map-gen1-1.png`.

### 3.4 Defect E — fulfillment pane for `rev-7-9` (first ref `Genesis 12:3`)

```
BEFORE: h1 = "Genesis 12:3"
        paragraphCount = 1
        verse ids in that one <p>: gen-12-3, gen-22-18, isa-49-6, isa-56-6, isa-56-7, isa-56-8, gal-3-8

AFTER:  eyebrow = "Fulfillment references"
        groupCount = 5
        Genesis 12 (1 verse) | Genesis 22 (1) | Isaiah 49 (1) | Isaiah 56 (3) | Galatians 3 (1)
        no verse dropped, none invented
```

### 3.5 Defect B0 — Reset Map View

```
seeded:  threads-bible-ordo-v2 = {"layoutMode":"grid","spacingMode":"compact","camera":false,…}
BEFORE:  after click -> ordo key unchanged, only 'ordo-viewer-settings-v1' deleted (a key nothing reads)
AFTER:   after click -> ordoKeyAfterReset: null, legacyKeyAfterReset: null
         reopening the map -> ORDO_DEFAULTS in effect (column / normal / camera on / dossier expanded)
```

### 3.6 Defect G — dossier idea separation

```
BEFORE: dossier body = 1 <p>, 0 rendered newlines, 276–292 chars in one block
AFTER:  "How they connect" -> 2 blocks:
        "The thread begins at Genesis 1:1: Creation did not make itself. Genesis opens with a speaking God."
        "The New Testament names that Speaker as the eternal Word, who is God. Everything that exists depends on a personal Maker."
        (same words, same order — only block boundaries and vertical rhythm changed)
```

### 3.7 Defect D — page identity (computed styles, light theme)

| Page | Background | Ink | Accent |
|---|---|---|---|
| Reading | `rgb(250,249,246)` paper | `rgb(44,44,44)` | `#3B82F6` |
| Ordo Map | `rgb(250,249,246)` canvas (own blueprint palette) | — | `#3B82F6` |
| Prophecy | `rgb(11,10,18)` deep ink + ember vignette | `rgb(244,237,225)` | `#F59E0B` |
| Lexicon | `rgb(244,238,224)` parchment | `rgb(43,33,24)` | `#8C5A22` |
| Historical | `rgb(242,237,227)` archive | `rgb(42,38,34)` | `#9A6A3A` |

Dark theme verified too (Lexicon `rgb(20,17,12)` / `#D9A05B`, Historical `rgb(16,14,12)` / `#C08A52`, Reading `rgb(11,11,13)`), so identity survives in both themes (risk R3).

Screenshots: `after/reading.png`, `after/ordo.png`, `after/prophecy.png`, `after/lexicon.png`, `after/historical.png`, plus `*-dark.png`.

---

## 4 · CP-05 regression results

```
[x] npm run lint (tsc --noEmit)      -> exit 0
[x] npm test (vitest run)            -> Test Files 16 passed (16) | Tests 170 passed (170)
                                        (baseline before this branch: 13 files / 146 tests)
[x] npm run build (vite build)       -> ✓ built in 12.02s (PWA generateSW, 9 precache entries)
[x] On dedicated UI-polish branch    -> cursor/ui-polish-v1.5-v2 (not cursor/plain-lang-*)
[x] Ordo Gen 1:1 READ PASSAGE card 01 / 02 / 03, with 2–3 px jitter -> lands on the verse, scrolled into view
[x] Ordo card Split button           -> opens split view on the card's verse
[x] Fallback Reset Map View          -> live key cleared, defaults restored on reopen
[x] Ordo play/pause, step, Home/End  -> 01/03 → 03/03 → 01/03 → 03/03 as pressed
[x] Ordo zoom (+), fit (0), focus (f), dossier (d), minimap (m), camera (c)
                                     -> all respond; settings persist to threads-bible-ordo-v2
[x] Ordo map background drag         -> pans (translate -150,-50 measured)
[x] Fulfillment for a multi-ref thread (Genesis 12:3-titled case) -> per book+chapter headings, readable spacing
[x] Prophecy page cinematic skin     -> visible, deep ink + ember, light & dark
[x] Lexicon + Historical open/close  -> skins visible, verse navigation buttons still work
[x] Ordo footer keyboard shortcuts   -> verified above
```

Zero console errors and zero uncaught page exceptions across every probe run.

---

## 5 · CP-04.5 anti-bloat scorecard

| Dimension-6 rule | Result |
|---|---|
| No duplicate page layout trees | **PASS** — identity is `data-page` + CSS tokens; no page markup was restructured |
| No new `PageChrome.tsx` cloning `PaneChrome` | **PASS** — `PaneChrome.tsx` unchanged and reused |
| Net new files ≤ 2 (non-test) | **PASS** — new product files: `pointerGuards.ts`, `dossierText.ts`, `verseGroups.ts`. The optional `pageSkins.ts` was **not** created; page identity is pure CSS, so **zero** new theme modules |
| No unused theme keys | **PASS** — all 12 `--page-*` tokens referenced (counts 10–43). No dead helper classes (`page-rule` was dropped rather than left unused) |
| `ThreadExplanation.tsx` untouched | **PASS** — not in `git status` |
| No dependency / data changes | **PASS** — `package.json` and `src/data/**` clean |
| Smallest clear change | Pan fix = 2 capture handlers + lazy arm; reset = 2 lines; grouping = 1 pure helper |

---

## 6 · Residual risks / carried forward

| Item | Status |
|---|---|
| R1 `turnToVerse` closes the map | Not reachable as a defect: the click now arrives and lands on the correct verse, scrolled into view (verified for cards 01–03) |
| R2 range expansion dropped by grouping | Guarded by unit tests; `useFulfillmentVerses` untouched — `Isaiah 56:6-8` renders as 3 verses in one section |
| R3 cinematic skin contrast in both themes | Verified in light and dark (computed tokens above); ember ambience is `prefers-reduced-motion`-safe |
| R4 wider gaps push nodes off-camera | Camera framing reserves dossier + top-bar height; fit-all (`0`) still frames all three Gen 1:1 cards |
| R5 wrong-branch landing | Worktree branch `cursor/ui-polish-v1.5-v2` off `main` |
| Pre-existing quirk (not introduced, not fixed) | A press that begins on the map and then moves over the dossier triggers the pan layer's `pointerleave` → `pointerup`, ending the drag. Unchanged behaviour; out of scope for A–G |
| `#gen-1-1;t` deep links never reopen the thread pane | Diagnosed (CP-01 §1 row H), deliberately **not** fixed: `navigateToVerse` nulls `selectedMarginVerse`, so the hash subscriber rewrites `#gen-1` before the pane flag applies. Outside the v1.5 scope table; flagged for the operator |
| Mobile pinch/pan | Behaviour preserved by construction (two-pointer branch untouched); only single-pointer arming changed. Not reproduced on a touch device in this session — recommend an operator check on a phone |

---

## 7 · Operator sign-off

Awaiting the operator click-through of the CP-05 smoke list on `cursor/ui-polish-v1.5-v2`.
Sign-off line: **“UI polish sign-off: accept CP-06 and merge when ready.”**
