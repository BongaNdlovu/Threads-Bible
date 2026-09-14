/**
 * URL hash codec for deep links (pure — no store or DOM access).
 *
 * Format:  #<slug>-<chapter>[-<verse>][;<flags>]
 * Examples:
 *   #gen-3            → reading Genesis 3
 *   #zec-9-9          → verse Zech 9:9 selected (thread or margin)
 *   #zec-9-9;tx       → same, with the thread pane pinned and explanation open
 *
 * Slugs never contain dashes (see bookRegistry), so the dash-separated fields
 * are unambiguous. Slugs match BOOK_REGISTRY exactly; chapter/verse are
 * validated by the caller against the registry/verse counts.
 */

export interface HashState {
  slug: string;
  chapter: number;
  verse?: number;
  threadPane: boolean;
  explanation: boolean;
}

export function serializeHash(state: {
  slug: string;
  chapter: number;
  verse?: number | null;
  threadPane?: boolean;
  explanation?: boolean;
}): string {
  let ref = `${state.slug}-${state.chapter}`;
  if (state.verse) ref += `-${state.verse}`;
  const flags: string[] = [];
  if (state.threadPane) flags.push('t');
  if (state.explanation) flags.push('x');
  return flags.length ? `${ref};${flags.join('')}` : ref;
}

export function parseHash(hash: string): HashState | null {
  if (!hash) return null;
  let clean = hash.trim();
  if (clean.startsWith('#')) clean = clean.slice(1);
  clean = clean.trim();
  if (!clean) return null;

  const [refPart] = clean.split(';');
  const parts = refPart.split('-').filter(p => p.length > 0);
  if (parts.length < 2) return null;

  const slug = parts[0].toLowerCase();
  if (!/^[a-z0-9]+$/.test(slug)) return null;

  const chapter = Number.parseInt(parts[1], 10);
  if (!Number.isInteger(chapter) || chapter < 1) return null;

  let verse: number | undefined;
  if (parts.length >= 3) {
    verse = Number.parseInt(parts[2], 10);
    if (!Number.isInteger(verse) || verse < 1) return null;
  }

  const flags = clean.includes(';') ? clean.slice(clean.indexOf(';') + 1) : '';
  return {
    slug,
    chapter,
    verse,
    threadPane: flags.includes('t'),
    explanation: flags.includes('x'),
  };
}
