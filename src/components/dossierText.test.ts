import { describe, expect, it } from 'vitest';
import { paragraphBlocks, splitSentences } from './dossierText';

describe('paragraphBlocks (dossier idea separation, display only)', () => {
  it('keeps a short single-idea explanation as one block', () => {
    const text = 'The visible universe was framed by the sovereign Word of God.';
    expect(paragraphBlocks(text)).toEqual([text]);
  });

  it('splits the Gen 1:1 "Jesus" dossier text into separate idea blocks without changing wording', () => {
    const text =
      'Jesus Christ was the active, personal Creative Agent in creating the world: all things were made through Him, and without Him was not anything made that was made. The God who spoke the universe into being at Genesis 1:1 is the very Lord who entered human history to redeem what He had formed.';

    // Default packing keeps two sentences together; asking for one sentence per
    // block separates them, and either way not a word of the authoring changes.
    expect(paragraphBlocks(text, 1)).toEqual([
      'Jesus Christ was the active, personal Creative Agent in creating the world: all things were made through Him, and without Him was not anything made that was made.',
      'The God who spoke the universe into being at Genesis 1:1 is the very Lord who entered human history to redeem what He had formed.',
    ]);
    expect(paragraphBlocks(text)).toEqual([text]);
    expect(paragraphBlocks(text, 1).join(' ')).toBe(text);
  });

  it('separates a three-idea explanation into two blocks at the default packing', () => {
    const text =
      'The universe was framed by the Word. Matter is not eternal. Faith begins with the Originator.';
    const blocks = paragraphBlocks(text);
    expect(blocks).toHaveLength(2);
    expect(blocks[0]).toBe('The universe was framed by the Word. Matter is not eternal.');
    expect(blocks[1]).toBe('Faith begins with the Originator.');
  });

  it('packs at most two sentences per block and never splits a sentence', () => {
    const text = 'One. Two. Three. Four. Five.';
    expect(paragraphBlocks(text)).toEqual(['One. Two.', 'Three. Four.', 'Five.']);
    expect(paragraphBlocks(text, 1)).toEqual(['One.', 'Two.', 'Three.', 'Four.', 'Five.']);
    for (const block of paragraphBlocks(text)) {
      expect(block.endsWith('.') || block === 'Five.').toBe(true);
    }
  });

  it('treats semicolons as idea boundaries', () => {
    const text =
      'Matter is not eternal; the Word framed it into order; faith begins with the Originator.';
    const blocks = paragraphBlocks(text, 1);
    expect(blocks).toHaveLength(3);
    expect(blocks.map(b => b.endsWith(';') || b.endsWith('.'))).toEqual([true, true, true]);
  });

  it('does not create a break from an in-flight typewriter sentence', () => {
    // Mid-typing the first sentence has no terminator yet.
    expect(paragraphBlocks('Jesus Christ was the active, personal Creative')).toEqual([
      'Jesus Christ was the active, personal Creative',
    ]);
    // One complete sentence plus an in-flight second stays a single block too:
    // only a second *complete* sentence justifies an idea break.
    expect(paragraphBlocks('First idea stands. Second idea is still bei')).toEqual([
      'First idea stands. Second idea is still bei',
    ]);
  });

  it('handles empty and whitespace-only input', () => {
    expect(paragraphBlocks('')).toEqual([]);
    expect(paragraphBlocks('   ')).toEqual([]);
    expect(splitSentences('')).toEqual([]);
  });

  it('keeps sentence text verbatim apart from boundary whitespace', () => {
    const text = 'God said, “Let there be light.” And there was light.';
    const sentences = splitSentences(text);
    expect(sentences.join(' ')).toBe(text);
    expect(sentences).toHaveLength(2);
  });
});
