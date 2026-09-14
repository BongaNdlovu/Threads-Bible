import { useRef } from 'react';
import { useStore, FONT_SIZE_MIN, FONT_SIZE_MAX } from '../store/useStore';
import {
  X,
  Minus,
  Plus,
  Moon,
  Sun,
  Hash,
  ListTree,
  AlignLeft,
  AlignCenter,
  BookOpen,
  Download,
  Upload,
} from 'lucide-react';
import {
  downloadBackupFile,
  exportBackup,
  importBackup,
  readBackupFile,
} from '../db/backup';
import type React from 'react';

export function MobileControls() {
  const {
    mobileControlsOpen,
    setMobileControlsOpen,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    theme,
    toggleTheme,
    showVerseNumbers,
    toggleVerseNumbers,
    setThreadsPanelOpen,
    setChapterGridOpen,
    recentReadings,
    setReadingLocation,
    textAlign,
    toggleTextAlign,
    closeAllStudyPanes,
    hasStudyPanes,
    showNotice,
    loadBookmarks,
    loadNotes,
    loadLinks,
  } = useStore();

  const backupInputRef = useRef<HTMLInputElement>(null);

  const handleExportBackup = async () => {
    try {
      const payload = await exportBackup();
      downloadBackupFile(payload);
      showNotice(
        `Backup downloaded — ${payload.bookmarks.length} bookmarks, ${payload.notes.length} notes, ${payload.links.length} links.`
      );
    } catch (err) {
      console.error('Backup export failed:', err);
      showNotice('Backup failed — could not read your data.');
    }
  };

  const handleImportBackup = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const parsed = await readBackupFile(file);
      if (!parsed.payload) {
        showNotice(parsed.error ?? 'That file is not a valid Threads Bible backup.');
        return;
      }
      const counts = await importBackup(parsed.payload);
      loadBookmarks();
      loadNotes();
      loadLinks();
      showNotice(
        `Restored ${counts.bookmarks} bookmarks, ${counts.notes} notes, ${counts.links} new links.`
      );
    } catch (err) {
      console.error('Backup import failed:', err);
      showNotice('Import failed — could not read that backup file.');
    }
  };

  if (!mobileControlsOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-[70]"
        onClick={() => setMobileControlsOpen(false)}
      />
      <div className="fixed inset-x-0 bottom-0 z-[71] rounded-t-2xl border-t border-foreground/10 bg-card shadow-2xl p-4 pb-6 max-h-[70vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-widest font-bold text-accent">Controls</div>
          <button
            onClick={() => setMobileControlsOpen(false)}
            className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-foreground/10"
            aria-label="Close controls"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-xs font-bold text-foreground/50 mb-2">Font size</div>
            <div className="flex items-center gap-2">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize <= FONT_SIZE_MIN}
                className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center disabled:opacity-30"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex-1 text-center text-sm tabular-nums font-medium">{fontSize}px</div>
              <button
                onClick={increaseFontSize}
                disabled={fontSize >= FONT_SIZE_MAX}
                className="h-10 w-10 rounded-full bg-foreground/5 flex items-center justify-center disabled:opacity-30"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={resetFontSize}
              className="mt-2 w-full text-xs text-foreground/50 hover:text-foreground py-1"
            >
              Reset
            </button>
          </div>

          {hasStudyPanes() && (
            <button
              onClick={() => {
                closeAllStudyPanes();
                setMobileControlsOpen(false);
              }}
              className="w-full h-11 rounded-xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center gap-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
            >
              <BookOpen className="h-4 w-4" />
              <span>Reading only</span>
            </button>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={toggleTheme}
              className="h-11 rounded-xl bg-foreground/5 flex items-center justify-center gap-2 text-sm font-medium"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button
              onClick={toggleTextAlign}
              className="h-11 rounded-xl bg-foreground/5 flex items-center justify-center gap-2 text-sm font-medium"
            >
              {textAlign === 'center' ? <AlignCenter className="h-4 w-4" /> : <AlignLeft className="h-4 w-4" />}
              {textAlign === 'center' ? 'Centered' : 'Left align'}
            </button>
            <button
              onClick={toggleVerseNumbers}
              className="h-11 rounded-xl bg-foreground/5 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Hash className="h-4 w-4" />
              Numbers {showVerseNumbers ? 'on' : 'off'}
            </button>
            <button
              onClick={() => {
                setThreadsPanelOpen(true);
                setMobileControlsOpen(false);
              }}
              className="h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center gap-2 text-sm font-medium"
            >
              <ListTree className="h-4 w-4" />
              Threads
            </button>
            <button
              onClick={() => {
                setChapterGridOpen(true);
                setMobileControlsOpen(false);
              }}
              className="h-11 rounded-xl bg-foreground/5 flex items-center justify-center text-sm font-medium"
            >
              Chapters
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExportBackup}
              className="h-11 rounded-xl bg-foreground/5 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              Export backup
            </button>
            <button
              onClick={() => backupInputRef.current?.click()}
              className="h-11 rounded-xl bg-foreground/5 flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Upload className="h-4 w-4" />
              Import backup
            </button>
          </div>
          <input
            ref={backupInputRef}
            type="file"
            accept="application/json,.json"
            onChange={handleImportBackup}
            className="hidden"
            aria-hidden="true"
          />

          {recentReadings.length > 0 && (
            <div>
              <div className="text-xs font-bold text-foreground/50 mb-2">Continue</div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {recentReadings.map(r => (
                  <button
                    key={`${r.book}-${r.chapter}`}
                    onClick={() => {
                      setReadingLocation(r.book, r.chapter);
                      setMobileControlsOpen(false);
                    }}
                    className="shrink-0 px-3 py-1.5 rounded-full bg-foreground/5 text-xs font-medium"
                  >
                    {r.book} {r.chapter}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
