# CP-02 · UI Polish Draft (minimal design decisions)

**Plan:** v1.5 · **Branch:** `cursor/ui-polish-v1.5-v2` · **Inputs:** `docs/CP-01_UI_DEFECT_INVENTORY.md`

Every decision below is the smallest change that closes the CP-01 defect. No new dependency, no new UI framework, no second chrome tree.

---

## 1 · Control fix approach (A / A′ / A2 / B0)

### 1.1 Pan pointer capture (`ThreadMap.tsx`)

CP-01 proved the click never reaches the button because `setPointerCapture` retargets `pointerup` to the pan layer on **every** press (`ThreadMap.tsx:850`). Chosen fix (three lines of state, no handler re-wiring):

1. **Skip the pan gesture entirely when the press starts on an interactive element** — `closest('button, a, input, textarea, select, label, [role="button"], [data-ordo-interactive]')`. Card buttons, edge labels and the SVG edge hit-paths stay natively clickable.
2. **Do not call `setPointerCapture` at press time.** Arm a pending drag with the press coordinates and only capture once the pointer has travelled ≥ **5 px**. A press-release without travel therefore produces a normal `click` on the original target.
3. **While a drag is armed but below threshold, keep the view still** — the current code pans on a 1 px move, which slides the card out from under the cursor.
4. `pointercancel` is handled like `pointerup` so a captured drag cannot leak state.
5. `touch-action` stays `none` on the pan layer, but the press handler now says `preventDefault()` **only for non-interactive presses**, so a button press is never swallowed.

**Explicitly not doing:** re-wiring `turnToVerse`, `handleOpenPassageReader`, or the store. CP-01 showed the handler is correct and the event never arrives (plan §CP-02.1).

### 1.2 Reset Map View (`ThreadMapPage.tsx` + `ThreadMap.tsx`)

- Export the live key from the map: `export const ORDO_KEY = 'threads-bible-ordo-v2'` and a small `clearOrdoSettings()` that removes it.
- `ThreadMapPage.handleResetMapView` calls `clearOrdoSettings()` (and keeps the one-line legacy `ordo-viewer-settings-v1` removal as cleanup), then bumps `mapKey` — which remounts `ThreadMap`, whose `useOrdoSettings` initialiser re-reads the now-empty key and returns `ORDO_DEFAULTS`. Result: layout `column`, spacing `normal`, camera/narration defaults restored, and the reset survives a reload.
- Fallback **Turn to Verse** (`ThreadMapFallbackCard.tsx:177`) currently passes a display ref (`"Genesis 1:1"`). Harden by normalising to a verse id (`gen-1-1`) in `ThreadMapPage` before calling `turnToVerse`. Behaviour-preserving; removes a parser dependency.

### 1.3 Controls verified healthy — untouched

Card body click (`handleCardClick`), dossier tabs, transport bar, search, close, header Split View, theme toggle, Historical Context. No change.

---

## 2 · Fulfillment rendering contract (E)

**Grouping rule (pure, unit-tested):** group resolved fulfillment verses by `book + chapter`, preserving the reference order the thread already declares.

```
groupVersesByBookChapter(verses) -> [{ key: 'genesis-12', book: 'Genesis', chapter: 12, verses: [...] }, ...]
```

- Key is `slug(book)-chapter`; consecutive verses of the same book+chapter collapse into one group even when they came from different thread refs (e.g. `Isaiah 56:6-8` + a later `Isaiah 56` ref).
- Verse order inside a group follows the order handed in (already canonical: `resolveRefs` walks `fulfillmentRefs` in order).
- **No verse is dropped and no ref is invented** — the helper is a view-layer partition of `useFulfillmentVerses` output (plan risk R2). Range expansion stays in `useFulfillmentVerses` / `resolveRefs`; untouched.

**Rendering contract (`ZenReader` + `TheThread`):**

- `ZenReader` gains an optional `groups` prop. In grouped mode it renders, per group: a heading `Book Chapter` (e.g. `Genesis 12`), a vertical gap, then that chapter's verses in their own block.
- The pane eyebrow becomes **“Fulfillment references”** (plural). `fulfillmentRefs[0]` is **never** used as if every verse belonged to that chapter (operator decision 8).
- Source pane (`Thread Source`, `Genesis 1`) and the main reading pane are unchanged: no groups passed.
- Empty state keeps the existing copy.

---

## 3 · Spacing (F)

Named constants replace the magic numbers in `computeThreadLayout`:

| mode | vGap (before → after) | hGap (before → after) |
|---|---|---|
| `compact` | 24 → **32** | 85 → **96** |
| `normal` (default) | 38 → **56** | 120 → **140** |
| `relaxed` | 64 → **76** | 160 → **180** |

Expected Gen 1:1 effect: adjacent fulfilment cards 38 px → **56 px** apart; column X gap 120 px → **140 px**; the Hebrews 11:3 edge stub 22 px → **40 px** (14 px thicker than the measured run because the anchor card's edge stub is computed from real node anchors — no cosmetic fake path). Edges keep using measured node boxes and real anchors (plan §CP-03.4).

Tests: replace the hardcoded `38` asserts with the exported `NORMAL_GAPS` constant, add a non-overlap invariant test, and keep the card-expansion shift test.

---

## 4 · Explanation spacing (G)

Display-only, inside `ThreadMap.tsx`’s dossier — `ThreadExplanation.tsx` is **not touched** (it is not mounted on the map; plan risk R6).

- New pure helper `paragraphBlocks(text, maxSentences = 2)`: splits at sentence boundaries, greedily packs 1–2 sentences per block, never splits inside a sentence, never alters a character of wording (whitespace only). Short texts collapse to a single block, so the DOM shape only changes where there is genuinely more than one idea.
- The dossier body (`principle`, `ultimate`, `how`, `what`, `when`, `why`, and the source fallback) renders one `<p>` per block inside a `space-y-2` stack. The typewriter still types the same string; blocks fill progressively.
- No theological wording changes anywhere (plan §0.3).

---

## 5 · Page identity skins (D) — CSS tokens, one shared chrome

**Constraint honoured:** `PaneChrome.tsx` is reused as-is; **no `PageChrome.tsx` is created** (plan §0.2, risk R7).

**Mechanism:** `src/index.css` gains a small `[data-page=…]` token block exposing `--page-bg`, `--page-surface`, `--page-ink`, `--page-dim`, `--page-accent`, `--page-accent-soft`, `--page-border`, `--page-rail`. Both light and dark values are defined, so identity holds in either theme (risk R3). Pages opt in with `data-page="…"` plus a thin `page-*` class for the background treatment; **no TS file is added** (the optional `pageSkins.ts` is unnecessary — net new files = 0 instead of 2).

| Page | Shared | Distinct identity | Change size |
|---|---|---|---|
| Reading | header/close/search/toggle, fonts, radii | calm paper/ink — the reference surface | **none** (stays the baseline) |
| Ordo Map | same | blueprint/diagram — existing palette refined only | **none** (already distinct; F spacing/contrast work only) |
| **Prophecy** | same | **cinematic** — deep ink surface, ember→gold accents, radial vignette, starfield-free CSS ambience | root + header + search/card surfaces re-pointed at tokens |
| Lexicon | same | scholarly — parchment tint, serif-forward lemma cards, warm rule lines | root + lemma card surfaces re-pointed at tokens |
| Historical Context | same | archive/earth — muted earth rail, stronger date rail | existing custom palette **refined**, nothing thrown away |

Rules: identity is expressed in background treatment, accent token, hero icon tile and ambient CSS only. Layout trees, controls, spacing and a11y affordances are unchanged. Reduced-motion is respected for any ambient animation.

**HALT condition check:** the operator locked “cinematic” for Prophecy (decision 2); the app already ships a dark cinematic Ordo palette and a dark theme, so a cinematic Prophecy skin conflicts with nothing. No halt needed.

---

## 6 · Tests planned (CP-03/04)

```
src/components/verseGroups.test.ts        (new, pure)  — grouping: mixed books, ranges, empty, order
src/components/dossierText.test.ts        (new, pure)  — paragraph blocks: single idea, many ideas, no wording change
src/components/threadMapModel.test.ts     (edit)       — gap constants replaced, non-overlap invariant
src/components/threadMapInteraction.test.ts (new, pure) — interactive-target detection helper used by the pan fix
```

Net new files: 3 test files + 1 pure helper module (`verseGroups.ts`) — within the ≤2 *non-test* budget (0 product-page files added).

---

## 7 · Files to be touched

```
src/components/ThreadMap.tsx               pan/pointer fix, dossier blocks, ORDO_KEY export, reset helper
src/components/ThreadMapPage.tsx           reset key wiring, ref normalisation
src/components/TheThread.tsx               fulfillment groups + “Fulfillment references”
src/components/ZenReader.tsx               grouped rendering
src/components/verseGroups.ts              NEW pure helper (group by book+chapter)
src/components/dossierText.ts              NEW pure helper (paragraph blocks)
src/components/threadMapModel.ts           exported gap constants + new defaults
src/components/ProphecyPage.tsx            cinematic skin
src/components/LexiconPage.tsx             scholarly skin
src/components/HistoricalContextPage.tsx   archive refinement (tokens only)
src/index.css                              page-skin tokens + ambient classes
+ matching *.test.ts files
```

Out of scope and untouched: `ThreadExplanation.tsx`, `src/data/**` content, `package.json`, PWA/IndexedDB, `useFulfillmentVerses` resolution logic.
