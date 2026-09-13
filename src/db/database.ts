import Dexie, { type EntityTable } from 'dexie';

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
  id?: number;
  verse1Id: string;
  verse2Id: string;
  createdAt: number;
}

export const db = new Dexie('ThreadsBibleDatabase') as Dexie & {
  bookmarks: EntityTable<BookmarkRecord, 'verseId'>;
  notes: EntityTable<NoteRecord, 'verseId'>;
  links: EntityTable<LinkRecord, 'id'>;
};

db.version(2).stores({
  bookmarks: 'verseId, createdAt',
  notes: 'verseId, updatedAt',
  links: '++id, verse1Id, verse2Id'
});

