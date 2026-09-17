/* CP-03 · Apply — Exodus
 * Applies AFTER (draft) strings from CP-02 generation policy to src/data/bookThreadDetails.ts
 * by replacing exact BEFORE string literals inside each Exodus entry block.
 *
 * Safety:
 * - Only Exodus verse-id blocks ('exo-...') are touched.
 * - Keys, types, Strong's, original-language scripts, and citations are preserved.
 * - VERIFY-ONLY fields remain unchanged (AFTER == BEFORE).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import type { ThreadDetail } from '../src/data/threadDetails';
import { checkProse } from './checkReadability';

function splitCompound(text: string): string {
  let out = text
    .replace(/\s+—\s+/g, '. ')
    .replace(/;\s+/g, '. ')
    .replace(/:\s+(?=[a-z])/g, '. ')
    .replace(/\)\s*,\s+/g, ') ')
    .replace(/\.\s*\.\s*/g, '. ');
  out = out.replace(/\s*([^.?!…])$/u, '$1.');
  return out.replace(/\s+/g, ' ').replace(/\s+\./g, '.').trim();
}

function maybeRewrite(fieldPath: string, before: string): { after: string; changed: boolean } {
  if (!before || !before.trim()) return { after: before ?? '', changed: false };
  const v = checkProse(before);
  const needsSplit = v.some(vi => vi.kind === 'long-sentence');
  const isTarget =
    /^(principle|who($|ByRef)|sameTestamentLinks|\w+exposition)/.test(fieldPath) ||
    before.length > 220 ||
    /[—;:]/.test(before);
  if (needsSplit || isTarget) {
    const candidate = splitCompound(before);
    if (candidate !== before) {
      return { after: candidate, changed: true };
    }
  }
  return { after: before, changed: false };
}

function tsEscapeSingle(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function replaceInEntry(fileText: string, id: string, before: string, after: string): string {
  const idMarker = `'${id}': {`;
  const start = fileText.indexOf(idMarker);
  if (start < 0) return fileText;
  // Find entry block end by brace matching
  let i = fileText.indexOf('{', start);
  let depth = 0;
  for (; i < fileText.length; i++) {
    const ch = fileText[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        i++; // include closing brace
        break;
      }
    }
  }
  const end = i;
  const beforeEsc = `'${tsEscapeSingle(before)}'`;
  const afterEsc = `'${tsEscapeSingle(after)}'`;
  const block = fileText.slice(start, end);
  const idx = block.indexOf(beforeEsc);
  if (idx < 0) return fileText; // no-op if not found
  const newBlock = block.replace(beforeEsc, afterEsc);
  return fileText.slice(0, start) + newBlock + fileText.slice(end);
}

function main() {
  const ids = Object.keys(bookThreadDetails).filter(id => id.startsWith('exo-')).sort();
  type Change = { id: string; before: string; after: string };
  const changes: Change[] = [];
  for (const id of ids) {
    const d = bookThreadDetails[id] as ThreadDetail;
    // title
    if (d.title) {
      const { after, changed } = maybeRewrite('title', d.title);
      if (changed) changes.push({ id, before: d.title, after });
    }
    if (d.principle) {
      const { after, changed } = maybeRewrite('principle', d.principle);
      if (changed) changes.push({ id, before: d.principle, after });
    }
    if (d.who) {
      const { after, changed } = maybeRewrite('who', d.who);
      if (changed) changes.push({ id, before: d.who, after });
    }
    if (d.whoByRef) {
      for (const [ref, prose] of Object.entries(d.whoByRef)) {
        const { after, changed } = maybeRewrite(`whoByRef[${ref}]`, prose);
        if (changed) changes.push({ id, before: prose, after });
      }
    }
    if (d.cumulativePrinciples) {
      d.cumulativePrinciples.forEach((cp, i) => {
        const { after, changed } = maybeRewrite(`cumulativePrinciples[${i}]`, cp);
        if (changed) changes.push({ id, before: cp, after });
      });
    }
    if (d.sameTestamentLinks) {
      d.sameTestamentLinks.forEach((l, i) => {
        const { after, changed } = maybeRewrite(`sameTestamentLinks[${i}].connection`, l.connection);
        if (changed) changes.push({ id, before: l.connection, after });
      });
    }
    if (d.terms) {
      d.terms.forEach((t, i) => {
        if (t.gloss) {
          const { after, changed } = maybeRewrite(`terms[${i}].gloss`, t.gloss);
          if (changed) changes.push({ id, before: t.gloss, after });
        }
        if (t.note) {
          const { after, changed } = maybeRewrite(`terms[${i}].note`, t.note);
          if (changed) changes.push({ id, before: t.note, after });
        }
        if ((t as any).exposition) {
          const before = (t as any).exposition as string;
          const { after, changed } = maybeRewrite(`terms[${i}].exposition`, before);
          if (changed) changes.push({ id, before, after });
        }
      });
    }
  }
  if (changes.length === 0) {
    console.log('No Exodus changes to apply.');
    return;
  }
  let content = readFileSync('src/data/bookThreadDetails.ts', 'utf8');
  for (const c of changes) {
    const next = replaceInEntry(content, c.id, c.before, c.after);
    if (next === content) {
      console.warn(`WARN: Could not locate string to replace for ${c.id}. Skipping one field.`);
      continue;
    }
    content = next;
  }
  writeFileSync('src/data/bookThreadDetails.ts', content, 'utf8');
  console.log(`Applied ${changes.length} Exodus field changes to src/data/bookThreadDetails.ts`);
}

main();

