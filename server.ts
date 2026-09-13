import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { BOOK_REGISTRY } from './src/data/bookRegistry';
import { parseRef, expandVerseRange } from './src/data/refParser';
import { getCitationsForVerse, NT_CITATIONS } from './src/data/tier2NtCitations';
import { getMessianicPropheciesForVerse, MESSIANIC_PROPHECIES } from './src/data/tier3Messianic';
import { getMasterChainsForVerse, MASTER_CHAINS } from './src/data/tier4MasterChains';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const distDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');
const tskDir = fs.existsSync(path.join(distDir, 'data', 'tsk'))
  ? path.join(distDir, 'data', 'tsk')
  : path.join(publicDir, 'data', 'tsk');

app.use(express.json());

// Request logger for diagnostic visibility
app.use((req: Request, res: Response, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (!req.url.startsWith('/assets/')) {
      console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url} - ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// Cache for TSK book files in memory on the server
const serverTskCache = new Map<string, Record<string, { anchor: string; refs: string[] }[]>>();

function getServerTskForBook(slug: string) {
  if (serverTskCache.has(slug)) return serverTskCache.get(slug)!;
  const filePath = path.join(tskDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return {};
  try {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    serverTskCache.set(slug, content);
    return content;
  } catch (err) {
    console.error(`Failed to read TSK for ${slug}:`, err);
    return {};
  }
}

// ── DIAGNOSTIC & TESTING API ENDPOINTS ──────────────────────────────────────

/** Health check endpoint */
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    service: 'Threads Bible Test Server',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    nodeVersion: process.version,
    memory: {
      rssMB: (process.memoryUsage().rss / 1024 / 1024).toFixed(2),
      heapUsedMB: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
    },
    buildStatus: {
      distExists: fs.existsSync(distDir),
      tskDirFound: fs.existsSync(tskDir),
    },
  });
});

/** Tier summary statistics */
app.get('/api/test/tiers', (_req: Request, res: Response) => {
  let manifest = null;
  const manifestPath = path.join(tskDir, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch {
      // ignore
    }
  }

  res.json({
    tier1_TSK: {
      description: 'Treasury of Scripture Knowledge Comprehensive Cross-References',
      partitionedFilesCount: fs.existsSync(tskDir) ? fs.readdirSync(tskDir).filter(f => f.endsWith('.json')).length : 0,
      manifestSummary: manifest ? {
        indexedVersesCount: Object.keys(manifest).length,
      } : null,
    },
    tier2_Citations: {
      description: 'Direct NT Apostolic Citations & Allusions',
      totalCount: NT_CITATIONS.length,
      sample: NT_CITATIONS.slice(0, 3).map(c => ({
        id: c.id,
        ntRef: c.ntRef,
        otRef: c.otRef,
        formula: c.formula,
        greekFormula: c.greekFormula,
      })),
    },
    tier3_Messianic: {
      description: 'Canonical Messianic Prophecies (Edersheim Harmonized)',
      totalCount: MESSIANIC_PROPHECIES.length,
      categories: ['Birth & Incarnation', 'Mission & Anointing', 'Betrayal & Passion', 'Resurrection & Ascension', 'Priesthood & Heavenly Reign', 'Second Coming & Kingdom'],
      sample: MESSIANIC_PROPHECIES.slice(0, 3).map(m => ({
        id: m.id,
        title: m.title,
        otPassage: m.prophecyRef,
        category: m.category,
        fulfillmentRefsCount: m.fulfillmentRefs.length,
      })),
    },
    tier4_Chains: {
      description: 'Master Canonical Redemptive Chains',
      totalChains: MASTER_CHAINS.length,
      totalStepsAcrossAllChains: MASTER_CHAINS.reduce((acc, c) => acc + c.steps.length, 0),
      sample: MASTER_CHAINS.slice(0, 3).map(c => ({
        id: c.id,
        name: c.name,
        category: c.category,
        stepsCount: c.steps.length,
      })),
    },
  });
});

/** Unified tier data query for any verse ID (e.g. gen-3-15, isa-53-5, exo-20-8) */
app.get('/api/test/verse/:verseId', (req: Request, res: Response) => {
  const { verseId } = req.params;
  const parts = verseId.split('-');
  if (parts.length < 3) {
    res.status(400).json({ error: 'Invalid verse ID format. Expected slug-chapter-verse (e.g. gen-3-15)' });
    return;
  }

  const slug = parts[0].toLowerCase();
  const bookTsk = getServerTskForBook(slug);
  const tskRefs = bookTsk[verseId] || [];
  const citations = getCitationsForVerse(verseId);
  const messianic = getMessianicPropheciesForVerse(verseId);
  const chains = getMasterChainsForVerse(verseId);

  const totalTskCount = tskRefs.reduce((acc, a) => acc + a.refs.length, 0);

  res.json({
    verseId,
    tier1_tsk: {
      anchorsCount: tskRefs.length,
      totalLinksCount: totalTskCount,
      anchors: tskRefs,
    },
    tier2_citations: citations,
    tier3_messianic: messianic,
    tier4_chains: chains,
    totalLinksAcrossAllTiers: totalTskCount + citations.length + messianic.length + chains.length,
  });
});

/** Scripture Reference Parser test endpoint */
app.get('/api/test/parse', (req: Request, res: Response) => {
  const query = req.query.ref as string;
  if (!query) {
    res.status(400).json({ error: 'Missing ?ref= query parameter. (e.g. /api/test/parse?ref=Psalm+104)' });
    return;
  }

  const parsed = parseRef(query);
  const expanded = expandVerseRange(query);

  res.json({
    raw: query,
    parsed,
    expandedVerseIdsCount: expanded.length,
    expandedVerseIds: expanded,
  });
});

/** Canonical Book Registry */
app.get('/api/test/books', (_req: Request, res: Response) => {
  res.json({
    count: BOOK_REGISTRY.length,
    books: BOOK_REGISTRY,
  });
});

// ── STATIC ASSETS & CLIENT SERVING ─────────────────────────────────────────

// Serve static assets from dist (production build) if available
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
}

// Fallback to public folder for static assets (books, data, etc.)
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));
}

// Single Page Application (SPA) catch-all route
app.get('*', (_req: Request, res: Response) => {
  const distIndex = path.join(distDir, 'index.html');
  const rootIndex = path.join(__dirname, 'index.html');

  if (fs.existsSync(distIndex)) {
    res.sendFile(distIndex);
  } else if (fs.existsSync(rootIndex)) {
    res.sendFile(rootIndex);
  } else {
    res.status(404).send('index.html not found. Run "npm run build" first.');
  }
});

// ── SERVER INITIALIZATION ──────────────────────────────────────────────────

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(` Threads Bible Test Server listening on:`);
  console.log(` -> http://localhost:${PORT}`);
  console.log(` -> http://127.0.0.1:${PORT}`);
  console.log(` Mode: ${fs.existsSync(distDir) ? 'Production (serving dist)' : 'Public fallback'}`);
  console.log(` Diagnostic Endpoints:`);
  console.log(` -> http://localhost:${PORT}/api/health`);
  console.log(` -> http://localhost:${PORT}/api/test/tiers`);
  console.log(` -> http://localhost:${PORT}/api/test/verse/gen-3-15`);
  console.log(` -> http://localhost:${PORT}/api/test/parse?ref=Exodus+20:8-11`);
  console.log(`======================================================\n`);
});

export default app;
