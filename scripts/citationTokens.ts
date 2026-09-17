/* Citation token vocabulary — shared by every sweep tool.
 *
 * Lives in its own module because importing it must never execute another tool's
 * main(): an earlier version imported this list from cp03StructuralVerify.ts, which
 * has an unguarded top-level `main()`, so the quote census silently ran the whole
 * verifier first.
 *
 * The corpus cites abbreviations far more often than full book names
 * (`Rom 8:3`, `Isa 11:10`, `1 Cor 5:7`, `Ps 22:1`, `Heb 9:23`), so any check that
 * only knows BOOK_REGISTRY names is blind to the majority form.
 */
import { BOOK_REGISTRY } from '../src/data/bookRegistry';

export const ABBREVIATIONS = [
  'Gen', 'Ex', 'Exod', 'Lev', 'Num', 'Deut', 'Josh', 'Judg', 'Ruth', '1 Sam', '2 Sam',
  '1 Kgs', '2 Kgs', '1 Chr', '2 Chr', 'Ezra', 'Neh', 'Esth', 'Job', 'Ps', 'Pss', 'Prov',
  'Eccl', 'Song', 'Isa', 'Jer', 'Lam', 'Ezek', 'Dan', 'Hos', 'Joel', 'Amos', 'Obad',
  'Jonah', 'Mic', 'Nah', 'Hab', 'Zeph', 'Hag', 'Zech', 'Mal', 'Matt', 'Mark', 'Luke',
  'John', 'Acts', 'Rom', '1 Cor', '2 Cor', 'Gal', 'Eph', 'Phil', 'Col', '1 Thess',
  '2 Thess', '1 Tim', '2 Tim', 'Titus', 'Phlm', 'Heb', 'Jas', '1 Pet', '2 Pet',
  '1 John', '2 John', '3 John', 'Jude', 'Rev',
] as const;

/** Every book token a citation may start with, longest first (regex alternation order). */
export function bookAlternation(extra: readonly string[] = []): string {
  const names = [...BOOK_REGISTRY.map(b => b.name), ...ABBREVIATIONS, ...extra];
  return Array.from(new Set(names))
    .sort((a, b) => b.length - a.length || a.localeCompare(b))
    .map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
}

/** Regex matching `<Book> <ch>:<v>` with the book token captured. */
export function citationRegex(extra: readonly string[] = []): RegExp {
  return new RegExp(
    `(?:^|[^\\p{L}\\p{N}])([1-3]?\\s?(?:${bookAlternation(extra)}))\\.?\\s+(\\d{1,3}):(\\d{1,3})`,
    'gu'
  );
}

/** Canonical `Book ch:v` citations found in a text (abbreviations resolved). */
export function findCitations(
  text: string,
  normalize: (book: string) => string,
  isKnownBook: (name: string) => boolean
): string[] {
  const out: string[] = [];
  for (const m of text.matchAll(citationRegex())) {
    const canonical = normalize(m[1].trim());
    if (isKnownBook(canonical)) out.push(`${canonical} ${m[2]}:${m[3]}`);
  }
  return out;
}
