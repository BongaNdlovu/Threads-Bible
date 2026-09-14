import { describe, expect, it } from 'vitest';
import { validateBackup, type BackupPayload } from './backupFormat';

const VALID: BackupPayload = {
  app: 'threads-bible',
  version: 1,
  exportedAt: '2026-09-14T00:00:00.000Z',
  bookmarks: [{ verseId: 'gen-3-15', createdAt: 1000 }],
  notes: [{ verseId: 'joh-3-16', text: 'For God so loved…', updatedAt: 2000 }],
  links: [{ verse1Id: 'gen-3-15', verse2Id: 'gal-4-4', createdAt: 3000 }],
};

describe('validateBackup', () => {
  it('accepts a well-formed backup unchanged', () => {
    const result = validateBackup(VALID);
    expect(result.error).toBeUndefined();
    expect(result.payload).toEqual(VALID);
  });

  it('rejects non-objects, foreign exports, and unknown versions', () => {
    expect(validateBackup('nope')?.error).toBeTruthy();
    expect(validateBackup(null)?.error).toBeTruthy();
    expect(validateBackup([])?.error).toBeTruthy();
    expect(validateBackup({...VALID, app: 'other-app'})?.error).toBeTruthy();
    expect(validateBackup({...VALID, version: 2})?.error).toBeTruthy();
  });

  it('drops malformed rows but keeps good ones', () => {
    const result = validateBackup({
      ...VALID,
      bookmarks: [
        { verseId: 'gen-3-15', createdAt: 1 },
        { verseId: 'not a verse', createdAt: 2 },
        { verseId: 'mat-1-1' }, // missing createdAt is fine (defaults)
        null,
        'string',
      ],
      notes: [{ verseId: 'joh-3-16', text: 42 }], // non-string text dropped
    });
    expect(result.payload?.bookmarks).toHaveLength(2);
    expect(result.payload?.bookmarks[0]).toEqual({ verseId: 'gen-3-15', createdAt: 1 });
    expect(result.payload?.bookmarks[1]?.createdAt).toBeGreaterThan(0);
    expect(result.payload?.notes).toHaveLength(0);
  });

  it('rejects self-links and shapeless verse ids', () => {
    const result = validateBackup({
      ...VALID,
      links: [
        { verse1Id: 'gen-3-15', verse2Id: 'gen-3-15', createdAt: 1 },
        { verse1Id: 'gen-3-15', verse2Id: 'typo-1-1', createdAt: 2 },
        { verse1Id: 'gen-99-1', verse2Id: 'joh-1-1', createdAt: 2 }, // no chapter 99
        { verse1Id: 'psa-119-105', verse2Id: 'joh-1-1', createdAt: 3 },
      ],
    });
    expect(result.payload?.links).toEqual([
      { verse1Id: 'psa-119-105', verse2Id: 'joh-1-1', createdAt: 3 },
    ]);
  });

  it('reports an error when nothing usable remains', () => {
    const result = validateBackup({
      app: 'threads-bible',
      version: 1,
      bookmarks: [{ verseId: 'garbage' }],
      notes: [],
      links: [],
    });
    expect(result.error).toBeTruthy();
    expect(result.payload).toBeUndefined();
  });

  it('treats missing arrays as empty and errors when nothing usable remains', () => {
    const result = validateBackup({ app: 'threads-bible', version: 1, bookmarks: undefined });
    expect(result.error).toBeTruthy();
    expect(result.payload).toBeUndefined();
  });
});
