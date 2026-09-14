/**
 * Generate draft ThreadDetail entries for every thread anchor that has no
 * hand-written detail. Output: src/data/draftThreadDetails.ts (generated —
 * never hand-edit; re-run via `npm run generate:drafts`).
 *
 * Drafts are grounded in real data, not invented theology:
 *  - title / sourceKeywords: the anchor verse's own KJV words
 *  - the connection note quotes the curated thread's first fulfillment
 *    passage (its actual KJV text from public/books)
 *  - fulfillmentKeywords: the fulfillment verse's own words
 * Hand-written entries always win — the generator skips any anchor already
 * covered by threadDetails.ts or bookThreadDetails.ts, and every draft is
 * flagged `draft: true` so future authoring passes can target them.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { allThreadMaps } from '../src/data/threadMap';
import { threadDetails } from '../src/data/threadDetails';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import { expandVerseRange } from '../src/data/refParser';
import type { ThreadDetail } from '../src/data/threadDetails';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const booksDir = path.join(__dirname, '..', 'public', 'books');
const outFile = path.join(__dirname, '..', 'src', 'data', 'draftThreadDetails.ts');

const STOPWORDS = new Set(
  ('a all also am an and any are as at be been before behold beseech both but by came can come ' +
    'day did do doth down even every for from had hast hath have he her here hers him his how i ' +
    'if in into is it its jest judgment king like unto lord man may me men might mine more most ' +
    'my nay no nor not now o of off oh on one only or our ours out over own said saith same shall ' +
    'she should so some such than that the their them then there these they this those though ' +
    'through thee thine things thou thus thy thyself to too under until unto up upon us very was ' +
    'we well were what when where whether which while who whom whose why will with within without ' +
    'would ye yet you your yours').split(' ')
);

interface VerseRow { id: string; chapter: number; verse: number; text: string; }
const bookNameBySlug = new Map(BOOK_REGISTRY.map(b => [b.slug, b.name] as const));

function loadVerseText(verseId: string): string | null {
  const slug = verseId.split('-')[0];
  const file = path.join(booksDir, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  const json = JSON.parse(fs.readFileSync(file, 'utf8')) as { data: VerseRow[] };
  return json.data.find(v => v.id === verseId)?.text ?? null;
}

/** First meaningful clause of a verse, word-bounded, for use as a title. */
function clause(text: string, max = 52): string {
  // Strip KJV superscriptions ("[To the chief Musician…]") before clipping.
  const clean = text.replace(/\[[^\]]*\]/g, ' ').replace(/\s+/g, ' ').trim();
  const parts = clean.split(/[,;:.]/).map(p => p.trim()).filter(Boolean);
  let t = parts[0] ?? clean;
  if (t.length < 14 && parts.length > 1) {
    t = `${parts[0]}, ${parts[1]}`.replace(/,+$/, '');
  }
  if (t.length > max) t = t.slice(0, max).replace(/\s+\S*$/, '') + '…';
  return t;
}

/** Distinct content words of a verse (lowercased), longest first, for keywords. */
function keywords(text: string, take = 5): string[] {
  const words = text
    .replace(/\[[^\]]*\]/g, ' ')
    .toLowerCase()
    .replace(/[^a-z\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 4 && !STOPWORDS.has(w));
  return [...new Set(words)].sort((a, b) => b.length - a.length).slice(0, take);
}

function refList(refs: string[], max = 3): string {
  if (refs.length <= max) return refs.join(', ');
  return `${refs.slice(0, max).join(', ')}, and ${refs.length - max} more`;
}

const drafts: Record<string, ThreadDetail> = {};
let generated = 0;
let skipped = 0;
let missingText = 0;

for (const map of allThreadMaps) {
  for (const [anchorId, entry] of Object.entries(map)) {
    if (threadDetails[anchorId] || bookThreadDetails[anchorId]) {
      skipped++;
      continue;
    }

    const anchorText = loadVerseText(anchorId) ?? '';
    if (!anchorText) missingText++;

    const refs = entry.fulfillmentRefs;
    const primaryRef = refs[0] ?? '';
    const primaryIds = expandVerseRange(primaryRef);
    let primaryText = '';
    for (const id of primaryIds) {
      primaryText = loadVerseText(id) ?? '';
      if (primaryText) break;
    }

    const slug = anchorId.split('-')[0];
    const bookName = bookNameBySlug.get(slug) ?? slug;
    const m = anchorId.match(/^([a-z0-9]+)-(\d+)-(\d+)$/);
    const chStr = m?.[2] ?? '0';
    const vStr = m?.[3] ?? '0';
    const anchorClause = anchorText ? clause(anchorText) : 'Thread anchor';

    const sentences = [
      `Thread anchor — “${anchorClause}” (${bookName} ${chStr}:${vStr}).`,
      `The curated thread runs to ${primaryRef}${primaryText ? `: “${clause(primaryText)}”` : ''}.`,
      refs.length > 1
        ? `The map joins ${refs.length - 1} further passage${refs.length > 2 ? 's' : ''}: ${refList(refs.slice(1))}.`
        : '',
      'Open the thread to read both ends together, and check the TSK cross-references for the wider web of connections.',
    ];

    drafts[anchorId] = {
      title: anchorClause,
      principle: sentences.filter(Boolean).join(' '),
      sourceKeywords: anchorText ? keywords(anchorText) : [],
      fulfillmentKeywords: primaryText ? keywords(primaryText) : [],
      terms: [],
      draft: true,
    };
    generated++;
  }
}

const banner = `/**
 * GENERATED FILE — do not hand-edit.
 * Source: scripts/generateDraftDetails.ts (npm run generate:drafts)
 *
 * Draft ThreadDetail entries for thread anchors without hand-written details
 * (threadDetails.ts / bookThreadDetails.ts always take precedence). Content is
 * derived from the anchor verse's own KJV words and the curated thread map's
 * fulfillment passages; every entry is flagged draft: true. ${generated} drafts
 * generated ${new Date().toISOString()}.
 */
import type { ThreadDetail } from './threadDetails';

export const draftThreadDetails: Record<string, ThreadDetail> = `;

const body = JSON.stringify(drafts, null, 2)
  .replace(/^(\s*)"(\w+)":/gm, '$1$2:') // unquote keys for readability
  .replace(/\n/g, '\n');
const file = `${banner}${body};\n`;

fs.writeFileSync(outFile, file);
console.log(`Draft details written: ${generated} generated, ${skipped} skipped (already hand-written), ${missingText} missing verse text.`);
console.log(`Total anchors covered after generation: ${Object.keys(threadDetails).length + Object.keys(bookThreadDetails).length + generated}`);
console.log(`Output: ${path.relative(process.cwd(), outFile)} (${(fs.statSync(outFile).size / 1024).toFixed(0)} KB)`);
