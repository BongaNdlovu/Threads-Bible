/**
 * Five stress tests against the Threads Bible library + live HTTP endpoints.
 * Run: npx tsx scripts/stressTest.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import { parseRef } from '../src/data/library';
import { fulfillmentVerses } from '../src/data/fulfillments';
import { genesisProphecies } from '../src/data/prophecies';
import { exodusProphecies, danielProphecies, revelationProphecies } from '../src/data/bookProphecies';
import { paulineProphecies } from '../src/data/paulineProphecies';
import { ntProphecies } from '../src/data/ntProphecies';
import { otProphecies } from '../src/data/otProphecies';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const booksDir = path.join(__dirname, '..', 'public', 'books');
const BASE = process.env.APP_URL ?? 'http://localhost:3000';

function hr(label: string, ms: number) {
  console.log(`  ${label}: ${ms.toFixed(1)}ms`);
}

function fail(msg: string): never {
  console.error(`  FAIL: ${msg}`);
  process.exitCode = 1;
  throw new Error(msg);
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('=== STRESS TEST 1: Fetch all 66 book JSONs (size + latency) ===');
{
  const sizes: number[] = [];
  const times: number[] = [];
  let totalBytes = 0;
  let failures = 0;

  for (const book of BOOK_REGISTRY) {
    const t0 = performance.now();
    try {
      const res = await fetch(`${BASE}/books/${book.slug}.json`);
      if (!res.ok) {
        failures++;
        console.log(`  ${book.slug}: HTTP ${res.status}`);
        continue;
      }
      const text = await res.text();
      const ms = performance.now() - t0;
      const json = JSON.parse(text);
      if (json.data?.length !== book.verses) {
        fail(`${book.name}: registry says ${book.verses}, JSON has ${json.data?.length}`);
      }
      sizes.push(text.length);
      times.push(ms);
      totalBytes += text.length;
    } catch (e) {
      failures++;
      console.log(`  ${book.slug}: ${e}`);
    }
  }

  const avg = (a: number[]) => (a.length ? a.reduce((s, n) => s + n, 0) / a.length : 0);
  const maxT = Math.max(...times);
  const minT = Math.min(...times);
  console.log(`  Books OK: ${66 - failures}/66`);
  console.log(`  Total payload: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Avg size: ${(avg(sizes) / 1024).toFixed(1)} KB · Max: ${(Math.max(...sizes) / 1024).toFixed(1)} KB`);
  console.log(`  Latency avg ${avg(times).toFixed(1)}ms · min ${minT.toFixed(1)} · max ${maxT.toFixed(1)}`);
  if (failures > 0) fail(`${failures} book fetches failed`);
  if (maxT > 5000) fail(`Slowest book fetch ${maxT.toFixed(0)}ms exceeds 5s`);
  console.log('  PASS');
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('\n=== STRESS TEST 2: Parse + ID integrity on full corpus ===');
{
  const t0 = performance.now();
  const allIds = new Set<string>();
  let verseCount = 0;
  let dupes = 0;
  let emptyText = 0;
  let badChapter = 0;

  for (const book of BOOK_REGISTRY) {
    const raw = fs.readFileSync(path.join(booksDir, `${book.slug}.json`), 'utf8');
    const json = JSON.parse(raw);
    for (const v of json.data as { id: string; chapter: number; verse: number; text: string }[]) {
      verseCount++;
      if (allIds.has(v.id)) {
        dupes++;
        if (dupes < 5) console.log(`  duplicate id ${v.id}`);
      }
      allIds.add(v.id);
      if (!v.text || v.text.length < 2) emptyText++;
      if (v.chapter < 1 || v.chapter > book.chapters) badChapter++;
    }
  }
  hr('parse all books', performance.now() - t0);
  console.log(`  verses: ${verseCount} · unique ids: ${allIds.size}`);
  console.log(`  duplicates: ${dupes} · empty text: ${emptyText} · bad chapter: ${badChapter}`);
  if (dupes || emptyText || badChapter || verseCount !== allIds.size) fail('integrity check failed');
  if (verseCount < 30000) fail(`expected ~31k verses, got ${verseCount}`);
  console.log('  PASS');
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('\n=== STRESS TEST 3: Resolve all thread refs ×20 (hot path) ===');
{
  const allThreads = {
    ...genesisProphecies,
    ...exodusProphecies,
    ...danielProphecies,
    ...revelationProphecies,
    ...paulineProphecies,
    ...ntProphecies,
    ...otProphecies,
  };
  const refs: string[] = [];
  for (const t of Object.values(allThreads)) refs.push(...t.fulfillmentRefs);

  const fulfillIds = new Map(fulfillmentVerses.map(v => [v.id, v]));
  const bookIds = new Set<string>();
  for (const book of BOOK_REGISTRY) {
    const json = JSON.parse(fs.readFileSync(path.join(booksDir, `${book.slug}.json`), 'utf8'));
    for (const v of json.data) bookIds.add(v.id);
  }

  function resolveOne(ref: string): number {
    const parsed = parseRef(ref);
    if (!parsed) return 0;
    const meta = BOOK_REGISTRY.find(b => b.name === parsed.book);
    if (!meta) return 0;
    let n = 0;
    for (let v = parsed.startVerse; v <= parsed.endVerse; v++) {
      const id = `${meta.slug}-${parsed.chapter}-${v}`;
      if (fulfillIds.has(id) || bookIds.has(id)) n++;
    }
    return n;
  }

  const t0 = performance.now();
  let hits = 0;
  let misses = 0;
  const iterations = 20;
  for (let i = 0; i < iterations; i++) {
    for (const ref of refs) {
      const n = resolveOne(ref);
      if (n > 0) hits++;
      else misses++;
    }
  }
  const total = performance.now() - t0;
  hr(`${iterations}× ${refs.length} refs`, total);
  console.log(`  hits: ${hits} · misses: ${misses}`);
  console.log(`  per-ref: ${(total / (iterations * refs.length)).toFixed(4)}ms`);
  if (misses > 0) fail(`${misses} unresolved refs`);
  if (total / (iterations * refs.length) > 0.5) fail('resolve slower than 0.5ms/ref');
  console.log('  PASS');
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('\n=== STRESS TEST 4: Rapid chapter switches (100 random jumps) ===');
{
  // Simulate what setReadingLocation does: load (cached after first) + filter chapter
  const cache = new Map<string, { chapter: number; verse: number }[]>();
  function loadBookSync(slug: string) {
    if (cache.has(slug)) return cache.get(slug)!;
    const json = JSON.parse(fs.readFileSync(path.join(booksDir, `${slug}.json`), 'utf8'));
    const data = json.data.map((v: any) => ({ chapter: v.chapter, verse: v.verse }));
    cache.set(slug, data);
    return data;
  }

  const t0 = performance.now();
  let coldLoads = 0;
  let filters = 0;
  const jumps: { slug: string; ch: number }[] = [];
  for (let i = 0; i < 100; i++) {
    const book = BOOK_REGISTRY[Math.floor(Math.random() * BOOK_REGISTRY.length)];
    const ch = 1 + Math.floor(Math.random() * book.chapters);
    jumps.push({ slug: book.slug, ch });
  }

  const coldT0 = performance.now();
  for (const j of jumps) {
    if (!cache.has(j.slug)) coldLoads++;
    const verses = loadBookSync(j.slug);
    const chapter = verses.filter(v => v.chapter === j.ch);
    if (chapter.length === 0) fail(`empty chapter ${j.slug} ${j.ch}`);
    filters++;
  }
  hr(`100 jumps (cold ${coldLoads} books + filter)`, performance.now() - t0);
  console.log(`  cold book loads: ${coldLoads} · chapter filters: ${filters}`);
  // Second pass all cached
  const t1 = performance.now();
  for (const j of jumps) {
    const verses = loadBookSync(j.slug);
    verses.filter(v => v.chapter === j.ch);
  }
  hr('100 jumps (warm cache)', performance.now() - t1);
  if (performance.now() - t1 > 100) fail('warm cache navigation too slow');
  console.log('  PASS');
}

// ─────────────────────────────────────────────────────────────────────────────
console.log('\n=== STRESS TEST 5: HTTP app shell + concurrent JSON fetches ===');
{
  const t0 = performance.now();
  const home = await fetch(BASE);
  if (!home.ok) fail(`app shell HTTP ${home.status}`);
  const html = await home.text();
  hr('GET /', performance.now() - t0);
  if (!html.includes('root')) fail('app shell missing #root');
  console.log(`  shell bytes: ${html.length}`);

  // 20 concurrent fetches of heavy books
  const heavy = ['gen', 'psa', 'isa', 'jer', 'ezk', 'mat', 'luk', 'joh', 'act', 'rom'];
  const t1 = performance.now();
  const results = await Promise.all(
    [...heavy, ...heavy].map(async slug => {
      const res = await fetch(`${BASE}/books/${slug}.json`);
      const text = await res.text();
      JSON.parse(text);
      return { slug, ok: res.ok, bytes: text.length };
    })
  );
  hr(`20 concurrent JSON (10 heavy ×2)`, performance.now() - t1);
  const bad = results.filter(r => !r.ok);
  if (bad.length) fail(`${bad.length} concurrent fetches failed`);
  console.log(`  all ${results.length} concurrent parses OK`);

  // Thread explanation files still load (module graph)
  const t2 = performance.now();
  const main = await fetch(`${BASE}/src/main.tsx`);
  hr('GET /src/main.tsx', performance.now() - t2);
  if (!main.ok) fail(`main.tsx ${main.status}`);
  console.log('  PASS');
}

console.log('\n=== ALL 5 STRESS TESTS PASSED ===');
console.log('OK');
