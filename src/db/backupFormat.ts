/**
 * Backup file format + validation (pure — no Dexie import, so it is testable
 * in node and usable in the browser without opening the database).
 *
 * A backup is a self-describing JSON document:
 *   { app: 'threads-bible', version: 1, exportedAt, bookmarks, notes, links }
 * Import merges records into IndexedDB; nothing is deleted.
 */
import { BOOK_REGISTRY } from '../data/bookRegistry';
import { getVerseCount } from '../data/verseCounts';

export interface BookmarkRecord {
  verseId: string;
  createdAt: number;
}

export interface NoteRecord {
  verseId: string;
  text: string;
  updatedAt: number;
}

export interface LinkRecord {
  verse1Id: string;
  verse2Id: string;
  createdAt: number;
}

export interface BackupPayload {
  app: 'threads-bible';
  version: 1;
  exportedAt: string;
  bookmarks: BookmarkRecord[];
  notes: NoteRecord[];
  links: LinkRecord[];
}

const VERSE_ID_RE = /^([a-z0-9]+)-(\d+)-(\d+)$/i;

/** Canonical check: slug in the book registry, chapter/verse within bounds. */
function isCanonicalVerseId(id: string): boolean {
  const m = id.match(VERSE_ID_RE);
  if (!m) return false;
  const meta = BOOK_REGISTRY.find(b => b.slug === m[1].toLowerCase());
  if (!meta) return false;
  const chapter = Number.parseInt(m[2], 10);
  const verse = Number.parseInt(m[3], 10);
  return chapter >= 1 && chapter <= meta.chapters && getVerseCount(meta.slug, chapter) >= verse;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
}

function pushRow<T>(list: T[], row: unknown, build: (r: Record<string, unknown>) => T | null): void {
  const rec = asRecord(row);
  if (!rec) return;
  const built = build(rec);
  if (built) list.push(built);
}

/**
 * Validate and normalize untrusted JSON into a BackupPayload.
 * Unknown fields are dropped, bad rows are skipped, and the result only
 * contains well-formed records (verse ids shape-checked). Returns either a
 * payload or a human-readable error.
 */
export function validateBackup(data: unknown): { payload?: BackupPayload; error?: string } {
  const root = asRecord(data);
  if (!root) return { error: 'Not a JSON object.' };
  if (root.app !== 'threads-bible') return { error: 'This file was not exported from Threads Bible.' };
  if (root.version !== 1) return { error: 'Unsupported backup version.' };

  const bookmarks: BookmarkRecord[] = [];
  const notes: NoteRecord[] = [];
  const links: LinkRecord[] = [];

  for (const row of Array.isArray(root.bookmarks) ? root.bookmarks : []) {
    pushRow(bookmarks, row, r =>
      typeof r.verseId === 'string' && isCanonicalVerseId(r.verseId)
        ? { verseId: r.verseId, createdAt: typeof r.createdAt === 'number' ? r.createdAt : Date.now() }
        : null
    );
  }

  for (const row of Array.isArray(root.notes) ? root.notes : []) {
    pushRow(notes, row, r =>
      typeof r.verseId === 'string' && isCanonicalVerseId(r.verseId) && typeof r.text === 'string'
        ? { verseId: r.verseId, text: r.text.slice(0, 20000), updatedAt: typeof r.updatedAt === 'number' ? r.updatedAt : Date.now() }
        : null
    );
  }

  for (const row of Array.isArray(root.links) ? root.links : []) {
    pushRow(links, row, r =>
      typeof r.verse1Id === 'string' &&
      typeof r.verse2Id === 'string' &&
      isCanonicalVerseId(r.verse1Id) &&
      isCanonicalVerseId(r.verse2Id) &&
      r.verse1Id !== r.verse2Id
        ? {
            verse1Id: r.verse1Id,
            verse2Id: r.verse2Id,
            createdAt: typeof r.createdAt === 'number' ? r.createdAt : Date.now(),
          }
        : null
    );
  }

  const total = bookmarks.length + notes.length + links.length;
  if (total === 0) return { error: 'The backup contains no bookmarks, notes, or links.' };
  return {
    payload: {
      app: 'threads-bible',
      version: 1,
      exportedAt: typeof root.exportedAt === 'string' ? root.exportedAt : new Date().toISOString(),
      bookmarks,
      notes,
      links,
    },
  };
}
