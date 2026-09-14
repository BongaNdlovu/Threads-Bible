/**
 * Backup I/O on top of Dexie: export all user data, import (merge) a
 * validated payload, and trigger a JSON file download. Import is additive —
 * existing records are overwritten by key (verseId), links are de-duplicated
 * against existing pairs, and nothing is ever deleted.
 */
import { db } from './database';
import { validateBackup, type BackupPayload } from './backupFormat';

export { validateBackup };
export type { BackupPayload } from './backupFormat';

export async function exportBackup(): Promise<BackupPayload> {
  const [bookmarks, notes, links] = await Promise.all([
    db.bookmarks.toArray(),
    db.notes.toArray(),
    db.links.toArray(),
  ]);
  return {
    app: 'threads-bible',
    version: 1,
    exportedAt: new Date().toISOString(),
    bookmarks: bookmarks.map(b => ({ verseId: b.verseId, createdAt: b.createdAt })),
    notes: notes.map(n => ({ verseId: n.verseId, text: n.text, updatedAt: n.updatedAt })),
    links: links.map(l => ({ verse1Id: l.verse1Id, verse2Id: l.verse2Id, createdAt: l.createdAt })),
  };
}

/** Merge a payload into IndexedDB; returns per-kind stored counts. */
export async function importBackup(payload: BackupPayload): Promise<{
  bookmarks: number;
  notes: number;
  links: number;
}> {
  const existingPairs = new Set(
    (await db.links.toArray()).map(l => [l.verse1Id, l.verse2Id].sort().join('|'))
  );
  const newLinks = payload.links.filter(
    l => !existingPairs.has([l.verse1Id, l.verse2Id].sort().join('|'))
  );

  await db.transaction('rw', db.bookmarks, db.notes, db.links, async () => {
    if (payload.bookmarks.length) await db.bookmarks.bulkPut(payload.bookmarks);
    if (payload.notes.length) await db.notes.bulkPut(payload.notes);
    if (newLinks.length) await db.links.bulkPut(newLinks.map(l => ({ ...l, id: undefined })));
  });

  return { bookmarks: payload.bookmarks.length, notes: payload.notes.length, links: newLinks.length };
}

/** Parse and validate backup file text; returns payload or error message. */
export async function readBackupFile(file: File): Promise<{ payload?: BackupPayload; error?: string }> {
  let data: unknown;
  try {
    data = JSON.parse(await file.text());
  } catch {
    return { error: 'Not a valid JSON file.' };
  }
  return validateBackup(data);
}

/** Browser download of a backup JSON file. */
export function downloadBackupFile(payload: BackupPayload): void {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `threads-bible-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
