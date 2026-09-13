<div align="center">

# Threads Bible

**Scripture cross-references and prophecy, woven into threads.**

A minimalist, distraction-free Bible reader built for studying how Scripture
interprets Scripture — every thread tethered to the Word of God (Sola Scriptura).

</div>

## What it does

- **Read** the full KJV Bible (66 books) in a clean, focused reading view
- **Open threads** — verses marked with a dashed underline carry curated
  scripture-to-scripture connections: source passage, fulfillment passages,
  original-language terms, and the connecting principle
- **Study Margin** — per-verse panel with four layers of reference data:
  | Layer | What it shows |
  |---|---|
  | TSK | Treasury of Scripture Knowledge cross-references |
  | Citations (Tier 2) | Direct NT apostolic quotations & allusions of OT passages |
  | Messianic (Tier 3) | Specific Messianic prophecies and their fulfillments |
  | Chains (Tier 4) | 42 master canonical redemptive chains, Genesis to Revelation |
- **Threads panel** — browse chapter threads, master chains, the 28 Fundamental
  Beliefs with scripture proofs, and a Last-Day-Events timeline
- **Your own study layer** — bookmarks, notes, highlights, and verse-to-verse
  links, stored locally in your browser (IndexedDB / localStorage)

## Run locally

Prerequisites: Node.js 20+

```bash
npm install
npm run dev        # http://localhost:3000
```

No API keys are needed — the app is fully static and all data ships with the
repository.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Vite dev server (localhost:3000) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | TypeScript typecheck (`tsc --noEmit`) |
| `npm test` | Store/data verification script |
| `npm run audit:data` | Validate all four reference tiers resolve canonically |
| `npm run server` | Optional local dev/test server with diagnostic endpoints |

## Deployment

Production is the **static build on GitHub Pages** (`.github/workflows/deploy.yml`,
base path `/Threads-Bible/`). The Express `server.ts` is a **local dev/test tool
only** — it is not part of the production deployment.

## Documentation

- [Architecture & Glossary](docs/ARCHITECTURE.md) — how the app fits together,
  the canonical vocabulary, and which data files are generated
- [Audit 2026-09-13](docs/AUDIT.md) — bug/security scan results and fixes
