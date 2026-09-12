import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface TskBook {
  id: number;
  name_eng: string;
}

interface TskVerse {
  id: number;
  book_id: number;
  kjv_ch: number;
  kjv_vs: number;
  kjv_text: string;
}

interface TskXref {
  verse_id: number;
  sort: number;
  kjv: string;
  refs: number[][];
}

export interface VerseAnchorRef {
  anchor: string;
  refs: string[];
}

export type BookTskMap = Record<string, VerseAnchorRef[]>;

async function main() {
  const tskDir = path.join(__dirname, 'temp_tsk');
  const outDir = path.join(__dirname, '..', 'public', 'data', 'tsk');
  fs.mkdirSync(outDir, { recursive: true });

  console.log('Loading TSK source files...');
  const books: TskBook[] = JSON.parse(fs.readFileSync(path.join(tskDir, 'bible_books.json'), 'utf8'));
  const verses: TskVerse[] = JSON.parse(fs.readFileSync(path.join(tskDir, 'bible_verses.json'), 'utf8'));
  const xrefs: TskXref[] = JSON.parse(fs.readFileSync(path.join(tskDir, 'cross_references.json'), 'utf8'));

  console.log(`Loaded ${books.length} books, ${verses.length} verses, ${xrefs.length} xref entries.`);

  // Map book_id (1..66) -> BookMeta in BOOK_REGISTRY
  const bookMap = new Map<number, typeof BOOK_REGISTRY[0]>();
  for (const b of books) {
    const meta = BOOK_REGISTRY[b.id - 1];
    if (!meta) throw new Error(`Missing registry entry for book_id ${b.id} (${b.name_eng})`);
    bookMap.set(b.id, meta);
  }

  // Map verse integer ID -> { verseId: string, ref: string, bookSlug: string, ch: number, vs: number }
  interface VerseInfo {
    verseId: string;
    bookName: string;
    bookSlug: string;
    ch: number;
    vs: number;
  }
  const verseLookup = new Map<number, VerseInfo>();
  for (const v of verses) {
    const meta = bookMap.get(v.book_id);
    if (!meta) continue;
    verseLookup.set(v.id, {
      verseId: `${meta.slug}-${v.kjv_ch}-${v.kjv_vs}`,
      bookName: meta.name,
      bookSlug: meta.slug,
      ch: v.kjv_ch,
      vs: v.kjv_vs,
    });
  }

  // Convert array of verse IDs to formatted human readable ref string (e.g. John 1:1-3)
  function formatRefGroup(group: number[]): string | null {
    if (!group.length) return null;
    const infos = group.map(id => verseLookup.get(id)).filter((info): info is VerseInfo => !!info);
    if (!infos.length) return null;

    const first = infos[0];
    const sameBookAndCh = infos.every(i => i.bookName === first.bookName && i.ch === first.ch);
    if (sameBookAndCh && infos.length > 1) {
      const minV = Math.min(...infos.map(i => i.vs));
      const maxV = Math.max(...infos.map(i => i.vs));
      if (maxV === minV) return `${first.bookName} ${first.ch}:${minV}`;
      return `${first.bookName} ${first.ch}:${minV}-${maxV}`;
    }
    // If not contiguous in same chapter, format individually
    return infos.map(i => `${i.bookName} ${i.ch}:${i.vs}`).join(', ');
  }

  // Group cross references by book slug -> verseId -> VerseAnchorRef[]
  const bookChunks = new Map<string, BookTskMap>();
  for (const meta of BOOK_REGISTRY) {
    bookChunks.set(meta.slug, {});
  }

  let totalLinks = 0;

  for (const item of xrefs) {
    const sourceInfo = verseLookup.get(item.verse_id);
    if (!sourceInfo) continue;

    const chunk = bookChunks.get(sourceInfo.bookSlug)!;
    if (!chunk[sourceInfo.verseId]) {
      chunk[sourceInfo.verseId] = [];
    }

    const formattedRefs: string[] = [];
    for (const group of item.refs) {
      const refStr = formatRefGroup(group);
      if (refStr) {
        formattedRefs.push(refStr);
        totalLinks += group.length;
      }
    }

    if (formattedRefs.length > 0) {
      chunk[sourceInfo.verseId].push({
        anchor: item.kjv || '',
        refs: formattedRefs,
      });
    }
  }

  console.log(`Writing 66 book chunks to ${outDir}... Total compiled individual links: ${totalLinks}`);

  const manifest: Record<string, { totalVersesWithRefs: number; totalAnchors: number }> = {};

  for (const [slug, map] of bookChunks.entries()) {
    const versesWithRefs = Object.keys(map).length;
    let anchors = 0;
    for (const arr of Object.values(map)) {
      anchors += arr.length;
    }
    manifest[slug] = { totalVersesWithRefs: versesWithRefs, totalAnchors: anchors };

    const filePath = path.join(outDir, `${slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(map));
  }

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));

  console.log('TSK build complete! Manifest saved to public/data/tsk/manifest.json');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
