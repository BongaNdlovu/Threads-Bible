/**
 * Display-only paragraph partitioning for the Ordo dossier.
 *
 * The dossier shows long authored explanations. Rendering them as one <p>
 * crams several ideas into a single block (defect G). This helper splits the
 * text into 1–2 sentence blocks so the renderer can add vertical separation at
 * idea boundaries — without changing a single character of the authored
 * wording (plan §0.3: no theology edits, display spacing only).
 *
 * Pure: no DOM, no React.
 */

/** Sentence-ending punctuation followed by whitespace or end of string. */
const SENTENCE_END = /[.!?;]["'”’)\]]?$/;
const SENTENCE_BOUNDARY = /([.!?;]["'”’)\]]?)(\s+|$)/g;

/**
 * Splits `text` into sentences, keeping their terminating punctuation (and any
 * closing quote or bracket). Semicolons count as soft boundaries because the
 * authored prose uses them to separate parallel ideas. Whitespace inside a
 * sentence is preserved verbatim; only boundary whitespace is normalised.
 */
export function splitSentences(text: string): string[] {
  const trimmed = (text ?? '').trim();
  if (!trimmed) return [];

  const out: string[] = [];
  let cursor = 0;
  SENTENCE_BOUNDARY.lastIndex = 0;

  let match: RegExpExecArray | null;
  while ((match = SENTENCE_BOUNDARY.exec(trimmed)) !== null) {
    const end = match.index + match[1].length;
    const sentence = trimmed.slice(cursor, end).trim();
    if (sentence) out.push(sentence);
    cursor = end;
    SENTENCE_BOUNDARY.lastIndex = end;
  }

  const tail = trimmed.slice(cursor).trim();
  if (tail) out.push(tail);
  return out;
}

/**
 * Packs sentences into blocks of at most `maxSentences` sentences.
 *
 * Two invariants that keep the typewriter effect calm:
 *  - a text with fewer than two *complete* sentences yields exactly one block,
 *    so short copy and in-flight narration never gain a spurious break;
 *  - whitespace is normalised between sentences, but no word is ever altered.
 */
export function paragraphBlocks(text: string, maxSentences = 2): string[] {
  const perBlock = Math.max(1, Math.floor(maxSentences) || 1);
  const trimmed = (text ?? '').trim();
  if (!trimmed) return [];

  const sentences = splitSentences(trimmed);
  const complete = sentences.filter(s => SENTENCE_END.test(s));
  if (complete.length < 2) return [trimmed];

  const blocks: string[] = [];
  for (let i = 0; i < sentences.length; i += perBlock) {
    blocks.push(sentences.slice(i, i + perBlock).join(' '));
  }
  return blocks;
}