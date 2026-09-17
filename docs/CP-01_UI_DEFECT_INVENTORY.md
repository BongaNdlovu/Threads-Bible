# CP-01 · UI Defect Inventory (Ordo Map + Study Pages)

**Plan:** `THREADS_BIBLE_UI_REPAIR_AND_PAGE_IDENTITY_PLAN_v1.5.md`
**Branch:** `cursor/ui-polish-v1.5-v2` (worktree `.kilo/worktrees/ui-polish`, forked from `main` @ `43feead`)
**Date:** 2026-09-17
**Evidence:** headless Chrome (CDP) against the live dev server (`vite` on `127.0.0.1:3000`, build of this worktree).
Raw probe records: `docs/spot/ui-polish/before/results.json`. Screenshots: `docs/spot/ui-polish/before/*.png`.

---

## 0 · CP-00 bootstrap record (branch isolation, operator decision 4)

```
$ git -C Threads-Bible-main rev-parse --abbrev-ref HEAD
cursor/plain-lang-cp01-cp02-genesis-ebb9        <- plain-language branch, HAS uncommitted work
$ git -C Threads-Bible-main status -sb
## cursor/plain-lang-cp01-cp02-genesis-ebb9...origin/cursor/plain-lang-cp01-cp02-genesis-ebb9
 M scripts/cp02LeviticusAppendix.ts
?? scripts/cp02BookAppendix.ts

$ git branch -a
  cursor/plain-lang-cp01-cp02-genesis-ebb9   44cf8e9   <- content sweep tip (NOT used)
* main                                       43feead   <- UI tip: "threads-first UI v2 — unified blue brand…"
  remotes/origin/main                        43feead
  remotes/origin/cursor/phase-a-master-plan-6b89 / threads-bible-phase1-b0a5  (older, phase plans)
```

**Action taken:** no UI work was committed on `cursor/plain-lang-*`. A dedicated worktree/branch was created from the UI tip:

```
$ git worktree add -b cursor/ui-polish-v1.5-v2 .kilo/worktrees/ui-polish main
HEAD is now at 43feead feat: threads-first UI v2 — unified blue brand, split-first flow, plain-language gate, Life Threads
$ git worktree list
C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main        44cf8e9 [cursor/plain-lang-cp01-cp02-genesis-ebb9]
C:/Users/fanel/Downloads/Threads-Bible-main/.kilo/worktrees/ui-polish 43feead [cursor/ui-polish-v1.5-v2]
```

Only one UI tip exists (`main` @ `43feead`), so no operator round-trip was needed (plan CP-00 allows proceeding when the tip is unambiguous).

**Model pin:** this session ran on the DeepSeek Harness agent, not Cursor cloud `grok-4.6` / `effort: xhigh` as the plan's metadata requests. Recorded as a deviation for the operator; every CP gate in this document is satisfied with reproduced evidence rather than assertion.


---

## 2 · Reproduction environment (verified, pasteable)

```
$ node -v                                        -> v24.5.0
$ npm run lint                                   -> tsc --noEmit, exit 0
$ npm test                                       -> Test Files 13 passed (13) | Tests 146 passed (146)
$ npm run dev -- --host 127.0.0.1                -> VITE v6.4.3 ready in 566 ms, Local: http://localhost:3000/
```

Thread used for A/B/F/G: **Genesis 1:1** (`gen-1-1` — "In the Beginning — the Word Creates").
Thread-map data confirms three cards in playback order:

```
$ Select-String src/data/prophecies.ts -Pattern "^  'gen-1-1':" -Context 0,4
  'gen-1-1': {
    fulfillmentRefs: [
      'John 1:1-3',
      'Hebrews 11:3',
    ],
  },
```

Thread used for E: **Revelation 7:9** (`rev-7-9`), whose *first* fulfillment ref is `Genesis 12:3`
(matches the operator screenshot exactly):

```
$ Select-String src/data/bookProphecies.ts -Pattern "fulfillmentRefs: \['Genesis 12:3'"
bookProphecies.ts:122 :: 'rev-7-9': { fulfillmentRefs: ['Genesis 12:3', 'Genesis 22:18', 'Isaiah 49:6', 'Isaiah 56:6-8', 'Galatians 3:8'] },
```

---

## 3 · Defect table

| ID | Symptom | Repro (exact) | Evidence | Suspected file:line | Status |
|---|---|---|---|---|---|
| **A** | `READ PASSAGE →` on an Ordo card does nothing (map stays open, reader never turns) | Open Ordo for Gen 1:1 → click card 01 `READ PASSAGE →` without moving the pointer | Probe: `pointerdown` target `SPAN.truncate` ("READ PASSAGE →") → `pointerup`/`click` target `DIV.absolute.inset-0.cursor-grab` (the pan layer). Store outcome: `mapStillOpen: true`, hash unchanged `#gen-1-1;t` | `ThreadMap.tsx:850` `setPointerCapture` on the pan layer in `onPointerDown` | **FIXED** (CP-03 §1) |
| **A′** | Same for card 02, and with a 3 px pointer wobble | Same as A on card 02 (`Turn to John 1:1-3 in Bible reader`), `jitter: 3px` mid-press | Same probe signature; `mapStillOpen: true` | as A (+ no drag threshold: any 1 px move pans) | **FIXED** (CP-03 §1) |
| **A2** | Card-footer **Split** button is equally dead | Click the `⧉` button (`Open John 1:1-3 in Split View`) on card 02 | Probe: `pointerdown` target `path` (SVG icon) → `pointerup`/`click` target pan layer div | as A | **FIXED** (CP-03 §1) |
| **B0** | ****Reset Map View** cannot reset the map** (wrong localStorage key) | Seed `threads-bible-ordo-v2 = {"layoutMode":"grid","spacingMode":"compact","camera":false,"narration":false}` and `ordo-viewer-settings-v1 = {"legacy":true}` → open fallback card → click **Reset Map View** | Before: `{"ordo":"{grid,compact,…}","legacy":"{\"legacy\":true}"}` → After: `{"ordoAfterReset":"{grid,compact,…}","legacyAfterReset":null}` — the live key is untouched, the non-existent key is deleted | `ThreadMapPage.tsx:152` removes `'ordo-viewer-settings-v1'`; live key `ORDO_KEY = 'threads-bible-ordo-v2'` at `ThreadMap.tsx:151` | **FIXED** (CP-03 §2) |
| **B1** | Fallback **Turn to Verse** passes the display reference (`"Genesis 1:1"`) into a reader call that prefers verse-id format | Fallback card → `Turn to Verse` | `ThreadMapFallbackCard.tsx:177` `onOpenPassageReader(reference)` → `turnToVerse('Genesis 1:1')`; parses, but only because `refParser` accepts names. Not reproduced as a *failure*, kept as hardening only | `ThreadMapFallbackCard.tsx:177` | **WONTFIX-as-is → hardened** (CP-03 §2, low-risk normalization) |
| **E** | Fulfillment pane shows many books' verses as one continuous block under the **first** ref's title | Open `rev-7-9` thread split (first ref `Genesis 12:3`) | `h1s: ["Revelation 7","Revelation 7","Genesis 12:3"]`; `paragraphCount: 1`; verse ids in that single `<p>`: `gen-12-3, gen-22-18, isa-49-6, isa-56-6, isa-56-7, isa-56-8, gal-3-8` → **3 books / 4 chapters, one paragraph, one heading**. Screenshot `07-fulfillment-multibook-before.png` | `TheThread.tsx:92,170` `title={fulfillmentRefs[0]}`; `ZenReader.tsx:82-86` all verses inside a single `<p>` | **FIXED** (CP-03 §3) |
| **F** | Arrows between Ordo cards are very short; cards sit too close | Gen 1:1 Ordo, default settings (`layoutMode: column`, `spacingMode: normal`, no stored `threads-bible-ordo-v2`) | Card rects: `Genesis 1:1 (50,221,250×191)`, `John 1:1-3 (420,118,250×191)`, `Hebrews 11:3 (420,347,250×191)`; adjacent fulfilment card gap **38 px**; column X gap **120 px**; SVG edge lengths **163 px** and **22 px** (the 22 px stub is the Heb 11:3 arrow) | `threadMapModel.ts:334-342` (`vGap 38 / hGap 120`, relaxed 64/160) | **FIXED** (CP-03 §4) |
| **G** | Dossier copy runs ideas together with no vertical separation | Ordo Gen 1:1 → dossier tabs `The thread begins` / `Principle` / `how` | Dossier body is a single text block: `childCount: 2`, `blocks: 1`, `newlines: 0`, 276–292 chars in one `<p>` | `ThreadMap.tsx:2199-2202, 2216-2219, 2309-2312, 2350-2353` (`<p>{typed}</p>`, no blocks) | **FIXED** (CP-03 §5) |
| **H** | `#gen-1-1;t` deep link never reopens the thread pane on boot | Load `/#gen-1-1;t` on a cold profile | Boot ends at `#gen-1`, `studyOnMap: false`; direct `navigateToVerse('gen-1-1')` from the console *does* set `selectedThread` + `threadPaneOpen: true` | `hashSync.ts:57-66` — `navigateToVerse` sets `selectedMarginVerse: null`, so the store subscriber immediately rewrites the hash to `#gen-1` (flag dropped) before `setThreadMapOpen(true)` runs | **WONTFIX in this plan** (bookmark/deep-link behaviour is outside the v1.5 scope table; recorded for the operator — nothing in A–G depends on it) |
| **D** | Duplicate/blank page identity (see CP-02 §5) | Compare Prophecy / Lexicon / Reading / Ordo / Historical roots | Screenshots in `docs/spot/ui-polish/before/` | `ProphecyPage.tsx`, `LexiconPage.tsx` both `fixed inset-0 z-[95] bg-background` | **FIXED** (CP-04) |

### Controls checked and found healthy (no fix needed)

- **Card body click** (`handleCardClick` → `goToStep`): verified — clicking the John 1:1-3 card body moved playback `02/03` → `03/03`. The pan layer does not swallow synthetic clicks; only *pointer-captured* clicks are lost.
- Dossier tab buttons, top-bar transport (play / prev / next / speed / camera), map search, close, Split View (header), theme toggle, Historical Context: all outside the pan layer, reachable by real pointer clicks.

---

## 4 · The READ PASSAGE click proof (A / H1)

Installed a capture-phase recorder on `pointerdown`, `pointerup`, `click` before app boot, then dispatched a real mouse press/release over the centre of card 01's `READ PASSAGE →`
(centre `(158, 387)` at 1440×900):

```json
"pointerdown": [{ "target": "span", "text": "READ PASSAGE →", "cls": "truncate", "x": 158, "y": 387.25 }],
"pointerup":   [{ "target": "div",  "text": "John 1:1-3Hebrews 11:301◆ 01Thread SourceGenesis 1:1…",
                  "cls": "absolute inset-0 cursor-grab active:cursor-grabbing touch-none", "x": 158, "y": 387.25 }],
"click":       [{ "target": "div",  "cls": "absolute inset-0 cursor-grab active:cursor-grabbing touch-none" }]
```

**Answer to the CP-01 question:** *the click never fires on the button.* `mousedown` lands on the button, but `setPointerCapture` on the pan layer (`ThreadMap.tsx:850`, called on **every** `pointerdown`, capture not conditional on a drag)
retargets `pointerup` to the pan `<div>`. A `click` event is only dispatched on the nearest common ancestor of the down/up targets — the pan layer — so the card's React `onClick` (and therefore `handleOpenPassageReader`) is never invoked. `turnToVerse` is never called, the map never closes, the reader never turns.

Consequences for the plan's R1 risk: because the click never arrives, **no `turnToVerse` / scroll change is warranted in CP-03**. `turnToVerse` itself was verified healthy from the console
(`await navigateToVerse('gen-1-1')` → `selectedThread: gen-1-1`, `threadPaneOpen: true`), and the reader's `#verse-<id>` scroll target is intact (`scheduleScrollToVerse`, `useStore.ts:239-254`).

---

## 5 · v1.4 → v1.5 diagnosis check (what the audit got right / wrong)

| v1.5 claim | CP-01 verdict |
|---|---|
| A: READ PASSAGE is wired; pan capture + no drag threshold is the cause | **CONFIRMED** by pointer-target probe (above) |
| B0: Reset Map View deletes a dead key | **CONFIRMED** by before/after localStorage dump |
| E: `title={fulfillmentRefs[0]}` + single `<p>` | **CONFIRMED** (`rev-7-9` → heading "Genesis 12:3" over 3 books / 4 chapters in one paragraph) |
| F: `vGap 38 / hGap 120` defaults | **CONFIRMED** (measured 38 px card gap, 120 px column gap, 22 px Heb 11:3 edge) |
| G: live surface is the ThreadMap dossier, not `ThreadExplanation.tsx` | **CONFIRMED** — dossier text identified in the map DOM; `ThreadExplanation.tsx` produces no map DOM (untouched) |
| D: Prophecy + Lexicon share one blank shell | **CONFIRMED** in source |

---

## 6 · Hard stops

None. Every defect in the operator's list A–G reproduced with a pasteable observation.
