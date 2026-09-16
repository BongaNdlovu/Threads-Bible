# Threads Bible — Completion Plan

Master plan for completing all information layers of the platform and
assimilating the "Ordo Propheticus" cinematic mindmap as the explanation
vehicle for every thread and every connection.

**Status legend:** ✅ delivered · 🔄 in progress · 🕓 planned (optional future)

---

## 1 · Content inventory (all layers)

| Layer | Content | Status |
|---|---|---|
| Thread anchors | 1,342 curated verse→fulfillment connections across 5 generated maps | ✅ |
| Thread details | 1,342/1,342 hand-written titles, principles, keywords (bookThreadDetails + threadDetails) | ✅ |
| Tier 1 · TSK | Phrase-anchored cross-references, 66/66 books, 63,668 groups | ✅ |
| Tier 2 · Citations | 108 NT citations/allusions | ✅ |
| Tier 3 · Messianic | 78 prophecies (Jesus Christ threads), light-red marked | ✅ |
| Tier 4 · Chains | 42 master chains · 277 steps | ✅ |
| Symbols | 91 prophetic symbols with Scripture-defined meanings | ✅ |
| Types | 48 types/antitypes (persons, sanctuary, feasts, objects) | ✅ |
| Beliefs | 28 fundamental beliefs with scripture proofs | ✅ |
| LDE | 19 last-day-event phases across 6 eras | ✅ |
| **Edge whys (NEW)** | **Per-connection explanations for every thread edge, composed from each thread's hand-written principle plus both verse ends — 1,342/1,342 threads covered** | ✅ (Phase B) |
| **Life Threads** | 200-theme Jesus-centred topical catalogue in 18 domains (`lifeThreads.ts`, lazy chunk; browsed in the Threads panel's Life tab) | ✅ |
| **Lexicon page** | Every original-language term across thread details, searchable, deep-linked to verses | ✅ |
| **Prophecy page** | LDE timeline + symbols + types folded into one header-reachable page | ✅ |
| **Threads-first UI** | Verse click → scripture-only split + "Study on the Map"; explanation pane retired; single Study affordance per verse; blue brand everywhere (gold removed) | ✅ |
| **Plain-language gate** | `scripts/checkReadability.ts` + Vitest gate over runtime prose templates, golden details, and Life Threads firstPrinciples | ✅ |
| **Plain-language sweep** | Rewrite remaining ~1,180 hand-written detail entries per book (THREADS_BIBLE_PLAIN_LANGUAGE_SWEEP_PLAN_v1.4.md) | 🕓 |

## 2 · Phase A — Ordo mindmap viewer (assimilation of the design)

Source design: "Ordo Propheticus" (cinematic node-graph: starfield, grid
nodes, gradient edges with animated reveal, step playback, edge `why` fields).

- **A1 · Plan document** — this file. ✅
- **A2 · Graph model** — `src/components/threadMapModel.ts`: pure builder that
  turns `selectedThread` + its hand-written detail + resolved fulfillment
  verses into a graph: 1 source node + 1 node per fulfillment reference, and
  one edge per connection. Every edge's `why` is composed from the thread's
  hand-written principle plus the anchor and fulfillment verse snippets —
  the "why a thread is a thread," derived from hand-written content.
  ✅
- **A3 · Ordo viewer** — `src/components/ThreadMap.tsx`: React port of the
  design language (ink/bone/gold, starfield canvas, pan/zoom viewport,
  gradient SVG edges with animated dash reveal and traveling dots, cinematic
  node cards with step watermarks, filmstrip dots, step counter,
  play/pause/prev/next) plus a dossier panel that displays the **active
  edge's why** — the space to explain not only the thread but the connection.
  ✅
- **A4 · Integration** — The Ordo mindmap opens as **its own page**
  (`ThreadMapPage`, full-screen with its own chrome: theme toggle, Split
  View, close). The workflow is one click: tapping a thread verse in the
  reading view opens the map page directly and auto-plays the walkthrough;
  Esc closes it. The classic split view (source & fulfillment side by side)
  opens only from the map page's Split View button — never automatically.
  The map carries **light and dark palettes** (defaults to the app theme,
  switchable from the page header). ✅
- **A5 · Tests** — `threadMapModel.test.ts`: node/edge counts, per-ref
  grouping of resolved verses, why composition, anchor/fulfillment snippets,
  sequential steps. ✅

## 3 · Phase B — Edge whys for all connections

- **B1 · Complete coverage** — every edge of every thread carries a why
  composed from that thread's hand-written principle (all 1,342 are
  hand-written) joined with the anchor and fulfillment verse snippets. No
  blank edges. ✅
- **B2 · Progressive hand-polish** — 🕓 optional future: per-edge
  hand-authored whys (differentiating multi-fulfillment threads) book by
  book, following the same draft→hand pattern as the detail pass.

## 4 · Phase C — Grand Tour (optional future)

- 🕓 Whole-canon Ordo built from the 42 Tier 4 master chains (already
  sequential node-graphs), reusing the same viewer with epochs and strands.
- 🕓 Hand-polished edge whys; reader-contributed notes stored in IndexedDB.

## 5 · Verification gates

`npm test` (model invariants) · `npm run audit:data` (content integrity) ·
`npm run lint` · `npm run build` · CI gates on every push.

---

## Plain-language sweep log (per §1.6 of the plan)

| Book | Entries | Batch date | Gate | THEOLOGY-REVIEW | Operator review | Status |
|---|---:|---|---|---|---|---|
| Genesis | 173 | 2026-09-17 | PASS (AFTER) | 2 sentence-splits under gen-1-1; approved | Bonga Ndlovu (SIGNED-OFF) | APPLIED |
