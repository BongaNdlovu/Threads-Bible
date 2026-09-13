import { parseRef, expandVerseRange, normalizeBookName } from '../src/data/library';
import { getCitationsForVerse, NT_LOOKUP, OT_LOOKUP } from '../src/data/tier2NtCitations';
import {
  getMessianicPropheciesForVerse,
  getOtMessianicPropheciesForVerse,
  getNtMessianicFulfillmentsForVerse,
  MESSIANIC_BY_VERSE,
  NT_MESSIANIC_LOOKUP,
} from '../src/data/tier3Messianic';
import { getMasterChainsForVerse, CHAINS_BY_VERSE } from '../src/data/tier4MasterChains';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    console.error(`FAIL: ${msg}`);
    process.exit(1);
  }
  console.log(`PASS: ${msg}`);
}

console.log('=== 1. Testing parseRef & Single-Chapter Books & Whole Chapters ===');
const p1 = parseRef('Psalm 104');
assert(p1 !== null && p1.book === 'Psalms' && p1.chapter === 104 && p1.startVerse === 1, 'parseRef("Psalm 104") resolves to Psalms 104:1');

const p2 = parseRef('3 John 2');
assert(p2 !== null && p2.book === '3 John' && p2.chapter === 1 && p2.startVerse === 2, 'parseRef("3 John 2") resolves to 3 John 1:2');

const p3 = parseRef('Jude 7');
assert(p3 !== null && p3.book === 'Jude' && p3.chapter === 1 && p3.startVerse === 7, 'parseRef("Jude 7") resolves to Jude 1:7');

const p4 = parseRef('Obadiah 4');
assert(p4 !== null && p4.book === 'Obadiah' && p4.chapter === 1 && p4.startVerse === 4, 'parseRef("Obadiah 4") resolves to Obadiah 1:4');

const p5 = parseRef('Isaiah 52:13–53:12');
assert(p5 !== null && p5.book === 'Isaiah' && p5.chapter === 52 && p5.startVerse === 13 && p5.endChapter === 53 && p5.endVerse === 12, 'parseRef("Isaiah 52:13–53:12") parses cross-chapter with en-dash');

const p6 = parseRef('Matthew 5-7');
assert(p6 !== null && p6.book === 'Matthew' && p6.chapter === 5 && p6.startVerse === 1 && p6.endChapter === 7 && p6.endVerse === 29, 'parseRef("Matthew 5-7") parses multi-chapter range');

const p7 = parseRef('I. John 1:1');
assert(p7 !== null && p7.book === '1 John' && p7.chapter === 1 && p7.startVerse === 1, 'parseRef("I. John 1:1") parses Roman numeral with period');

const p8 = parseRef('Jude');
assert(p8 !== null && p8.book === 'Jude' && p8.chapter === 1 && p8.startVerse === 1 && p8.endVerse === 25, 'parseRef("Jude") parses bare single-chapter book');

console.log('\n=== 2. Testing expandVerseRange Multi-Verse Expansion ===');
const rIsa = expandVerseRange('Isaiah 52:13–53:12');
assert(rIsa.length === 15, `Isaiah 52:13–53:12 expands to 15 verses (got ${rIsa.length})`);
assert(rIsa.includes('isa-52-13') && rIsa.includes('isa-52-15') && rIsa.includes('isa-53-1') && rIsa.includes('isa-53-12'), 'Isaiah 52:13-53:12 contains boundary verses');

const rMatt = expandVerseRange('Matthew 5-7');
assert(rMatt.length === 111, `Matthew 5-7 expands to all 111 verses (got ${rMatt.length})`);
assert(rMatt[0] === 'mat-5-1' && rMatt[rMatt.length - 1] === 'mat-7-29', 'Matthew 5-7 boundary verses');

const rJude = expandVerseRange('Jude');
assert(rJude.length === 25, `Jude bare book expands to all 25 verses (got ${rJude.length})`);

const rOba = expandVerseRange('Obadiah');
assert(rOba.length === 21, `Obadiah bare book expands to all 21 verses (got ${rOba.length})`);

const rExo = expandVerseRange('Exodus 20:8-11');
assert(rExo.length === 4, `Exodus 20:8-11 expands to 4 verses (got ${rExo.length})`);
assert(rExo.every((v, i) => v === `exo-20-${8 + i}`), 'Exodus 20:8-11 has exo-20-8 through exo-20-11');

const rHeb = expandVerseRange('Hebrews 9:11-24');
assert(rHeb.length === 14, `Hebrews 9:11-24 expands to 14 verses (got ${rHeb.length})`);
assert(rHeb.includes('heb-9-11') && rHeb.includes('heb-9-24'), 'Hebrews 9:11-24 boundaries');

const rRev = expandVerseRange('Revelation 12:1-17');
assert(rRev.length === 17, `Revelation 12:1-17 expands to 17 verses (got ${rRev.length})`);

console.log('\n=== 3. Testing Tier 2 NT Citations Multi-Verse Expansion ===');
// Matthew 1:22-23 quotes Isaiah 7:14
const cit22 = getCitationsForVerse('mat-1-22');
const cit23 = getCitationsForVerse('mat-1-23');
assert(cit22.length > 0 && cit22.some(c => c.id === 'cit-mat-1-23'), 'Matthew 1:22 is indexed for cit-mat-1-23');
assert(cit23.length > 0 && cit23.some(c => c.id === 'cit-mat-1-23'), 'Matthew 1:23 is indexed for cit-mat-1-23');

console.log('\n=== 4. Testing Tier 3 Reverse NT Fulfillment Index ===');
// Genesis 3:15 has fulfillmentRefs: ['Galatians 4:4', 'Romans 16:20', 'Hebrews 2:14', 'Revelation 12:7-10']
const mesRev7 = getMessianicPropheciesForVerse('rev-12-7');
const mesRev8 = getMessianicPropheciesForVerse('rev-12-8');
const mesRev9 = getMessianicPropheciesForVerse('rev-12-9');
const mesRev10 = getMessianicPropheciesForVerse('rev-12-10');
assert(mesRev7.some(p => p.id === 'mes-gen-3-15'), 'rev-12-7 links to Gen 3:15 Protoevangelium');
assert(mesRev8.some(p => p.id === 'mes-gen-3-15'), 'rev-12-8 links to Gen 3:15 Protoevangelium');
assert(mesRev9.some(p => p.id === 'mes-gen-3-15'), 'rev-12-9 links to Gen 3:15 Protoevangelium');
assert(mesRev10.some(p => p.id === 'mes-gen-3-15'), 'rev-12-10 links to Gen 3:15 Protoevangelium');

const mesGal4 = getMessianicPropheciesForVerse('gal-4-4');
assert(mesGal4.some(p => p.id === 'mes-gen-3-15'), 'gal-4-4 links to Gen 3:15 Protoevangelium');

// OT source verse
const mesGen315 = getMessianicPropheciesForVerse('gen-3-15');
assert(mesGen315.some(p => p.id === 'mes-gen-3-15'), 'gen-3-15 is found via OT prophecy lookup');

console.log('\n=== 5. Testing Tier 4 O(1) Map Indexing & Multi-Verse Steps ===');
// Exodus 20:8-11 is in chain #4 "The Sabbath: Creation to the New Earth"
const chainsExo8 = getMasterChainsForVerse('exo-20-8');
const chainsExo9 = getMasterChainsForVerse('exo-20-9');
const chainsExo10 = getMasterChainsForVerse('exo-20-10');
const chainsExo11 = getMasterChainsForVerse('exo-20-11');
assert(chainsExo8.some(c => c.id === 'sabbath-creation-to-new-earth'), 'exo-20-8 indexed in Sabbath chain');
assert(chainsExo9.some(c => c.id === 'sabbath-creation-to-new-earth'), 'exo-20-9 indexed in Sabbath chain');
assert(chainsExo10.some(c => c.id === 'sabbath-creation-to-new-earth'), 'exo-20-10 indexed in Sabbath chain');
assert(chainsExo11.some(c => c.id === 'sabbath-creation-to-new-earth'), 'exo-20-11 indexed in Sabbath chain');

// Hebrews 9:11-24 is in chain #2 "The Heavenly Sanctuary & True Tabernacle"
const chainsHeb15 = getMasterChainsForVerse('heb-9-15');
assert(chainsHeb15.some(c => c.id === 'heavenly-sanctuary'), 'heb-9-15 indexed in Heavenly Sanctuary chain');

// Revelation 12:1-17 is in chain #1 "The Seed of the Woman (Protoevangelium)"
const chainsRev3 = getMasterChainsForVerse('rev-12-3');
assert(chainsRev3.some(c => c.id === 'seed-of-the-woman'), 'rev-12-3 indexed in Seed of the Woman chain');

console.log('\n=== 6. Testing TSK Bounded LRU Cache (Max 10 Books) ===');
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { loadTskForBook, clearTskCache, getTskCacheStats } from '../src/data/crossRefService';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const tskDir = path.join(root, 'public', 'data', 'tsk');
const booksDir = path.join(root, 'public', 'books');

// Node fetch mock for /data/tsk and /books
const originalFetch = globalThis.fetch;
globalThis.fetch = (async (input: unknown) => {
  const url = String(input);
  if (url.startsWith('/data/tsk/')) {
    const slug = url.replace('/data/tsk/', '').replace(/\.json$/, '');
    const f = path.join(tskDir, `${slug}.json`);
    if (!fs.existsSync(f)) return { ok: false, status: 404, json: async () => ({}) } as Response;
    return { ok: true, status: 200, json: async () => JSON.parse(fs.readFileSync(f, 'utf8')) } as Response;
  }
  if (url.startsWith('/books/')) {
    const slug = url.replace('/books/', '').replace(/\.json$/, '');
    const f = path.join(booksDir, `${slug}.json`);
    if (!fs.existsSync(f)) return { ok: false, status: 404, json: async () => ({}) } as Response;
    return { ok: true, status: 200, json: async () => JSON.parse(fs.readFileSync(f, 'utf8')) } as Response;
  }
  if (originalFetch) return originalFetch(input as RequestInfo);
  throw new Error(`Unexpected fetch: ${url}`);
}) as typeof globalThis.fetch;

clearTskCache();
assert(getTskCacheStats().size === 0, 'clearTskCache resets cache');

const testSlugs = ['gen', 'exo', 'lev', 'num', 'deu', 'jos', 'jdg', 'rut', '1sa', '2sa', '1ki', '2ki'];
for (const slug of testSlugs) {
  await loadTskForBook(slug);
}

const statsAfter12 = getTskCacheStats();
assert(statsAfter12.size === 10, `TSK cache bounded at exactly 10 books (got ${statsAfter12.size})`);
assert(!statsAfter12.lru.includes('gen') && !statsAfter12.lru.includes('exo'), 'Oldest books (gen, exo) evicted in LRU order');
assert(statsAfter12.lru[statsAfter12.lru.length - 1] === '2ki', 'Most recently loaded book (2ki) is at the end of LRU');

// Touch a cached book ('lev') and ensure it moves to the end
await loadTskForBook('lev');
const statsAfterTouch = getTskCacheStats();
assert(statsAfterTouch.lru[statsAfterTouch.lru.length - 1] === 'lev', 'Touching cached book moves it to most recent position in LRU');
assert(statsAfterTouch.size === 10, 'Cache size remains 10 after touching existing book');

console.log('\n=== 7. Testing Store State Integrity & Margin-Preserving Navigation ===');
import { useStore } from '../src/store/useStore';

// Test openThreadPanelWithTab integrity
const store = useStore.getState();
store.openThreadPanelWithTab('chains', 'heavenly-sanctuary');
const afterOpen = useStore.getState();
assert(afterOpen.threadsPanelOpen === true, 'Thread panel is open');
assert(afterOpen.threadPanelTab === 'chains', 'Thread panel tab is "chains"');
assert(afterOpen.selectedChainId === 'heavenly-sanctuary', 'selectedChainId is "heavenly-sanctuary"');
assert(afterOpen.selectedThread === null, 'selectedThread is untouched (not corrupted)');

// Test navigateToVerse with preserveMargin
await useStore.getState().navigateToVerse('gen-3-15', { preserveMargin: true, targetTab: 'chains' });
const afterNav = useStore.getState();
assert(afterNav.selectedMarginVerse !== null && afterNav.selectedMarginVerse.id === 'gen-3-15', 'selectedMarginVerse set to gen-3-15');
assert(afterNav.marginActiveTab === 'chains', 'marginActiveTab set to "chains"');
assert(afterNav.threadPaneOpen === false, 'threadPaneOpen is false (did not trigger split view)');

console.log('\n=== ALL TARGETED TESTS PASSED PERFECTLY! ===');
