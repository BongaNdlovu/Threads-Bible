/**
 * Clarity gate (master plan §1.7 enforcement — a floor, not the standard).
 *
 * Fails a string only for the worst clarity failures:
 *   1. a phrase on the banned-abstraction list, or
 *   2. a sentence longer than MAX_SENTENCE_WORDS (direct quotations inside
 *      “...” / "..." / ‘...’ / '...' are exempt — Scripture is preserved
 *      verbatim and is never rewritten).
 *
 * Everything else (word choice, sentence structure, concreteness) is judged
 * by a human at CP-02 sign-off and CP-07 review. Passing this gate does not
 * make copy good; failing it makes copy unshippable.
 */

export const BANNED_PHRASES = [
  'redemptive synthesis',
  'theological necessity',
  'doctrinal and prophetic continuum',
  'teleological goal',
  'hermeneutical keystone',
  'progressive culmination',
  'canonical climax',
  'sensus plenior',
  'imitatio dei',
  'expanding the foundational principle',
  'verses in common',
] as const;

export const MAX_SENTENCE_WORDS = 35;

/** Remove direct quotations so KJV wording is never counted against the
 *  prose. Each quoted span is replaced by a sentence boundary so that a
 *  quotation ending in a period still splits the sentence correctly.
 *  Single quotes are NOT stripped: English apostrophes (crowd's) would
 *  create false spans. */
export function stripQuotes(text: string): string {
  return text
    .replace(/\u201C[^\u201D]*\u201D/g, '. ') // “ ”
    .replace(/"[^"]*"/g, '. ') // " "
    .replace(/\u2026/g, ' ... ');
}

export function sentenceWordCount(sentence: string): number {
  return sentence.split(/\s+/).filter(Boolean).length;
}

export interface ProseViolation {
  kind: 'banned-phrase' | 'long-sentence';
  detail: string;
}

/** Check one prose string; returns every violation (empty array = pass). */
export function checkProse(text: string): ProseViolation[] {
  if (!text || !text.trim()) return [];
  const violations: ProseViolation[] = [];
  const lower = text.toLowerCase();

  for (const phrase of BANNED_PHRASES) {
    if (lower.includes(phrase)) {
      violations.push({ kind: 'banned-phrase', detail: `contains banned phrase "${phrase}"` });
    }
  }

  const prose = stripQuotes(text);
  const sentences = prose.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
  for (const sentence of sentences) {
    const words = sentenceWordCount(sentence);
    if (words > MAX_SENTENCE_WORDS) {
      violations.push({
        kind: 'long-sentence',
        detail: `${words} words (max ${MAX_SENTENCE_WORDS}): "${sentence.slice(0, 90)}…"`,
      });
    }
  }

  return violations;
}

/** Check many strings at once; returns a map of failing fields. */
export function checkProseFields(
  fields: Record<string, string>
): Record<string, ProseViolation[]> {
  const failures: Record<string, ProseViolation[]> = {};
  for (const [name, text] of Object.entries(fields)) {
    const v = checkProse(text);
    if (v.length > 0) failures[name] = v;
  }
  return failures;
}
