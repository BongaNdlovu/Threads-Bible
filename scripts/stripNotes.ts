/**
 * Strip remaining translator notes (Heb./or,/Gr. etc.) from verse text fields.
 * Run: npx tsx scripts/stripNotes.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function stripNotes(raw: string): string {
  let t = raw;
  // Braced notes: {word}, {phrase: Heb. ...}, etc. Drop note-like braces, keep plain words.
  t = t.replace(/\{([^}]*)\}/g, (_m, inner: string) => {
    // Keep simple elided words like {is}, {it was}, {was}
    if (/^[\w\s'.,;:!?-]+$/.test(inner) && !/:/.test(inner) && !/\b(?:Heb|Gr|Chaldee|or)\b/i.test(inner)) {
      return inner;
    }
    return '';
  });
  // Trailing note fragments after the verse: "wither: Heb. fade", "line: or, rule"
  t = t.replace(/\s+[A-Za-z][\w'...]*:\s*(?:Heb|Gr|Chaldee|or)\b[^.]*\.?/gi, '');
  // Mid-text orphan notes already stripped via braces
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t;
}

const files = [
  path.join(__dirname, '../src/data/fulfillments.ts'),
  path.join(__dirname, '../src/data/genesisData.ts'),
];

for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  // Handle both "text": "..." and text: '...'
  src = src.replace(/"text": "((?:\\"|[^"])*)"/g, (full, text: string) => {
    const cleaned = stripNotes(text.replace(/\\"/g, '"').replace(/\\'/g, "'"));
    return `"text": ${JSON.stringify(cleaned)}`;
  });
  src = src.replace(/text: '((?:\\'|[^'])*)'/g, (full, text: string) => {
    const cleaned = stripNotes(text.replace(/\\'/g, "'"));
    return `text: '${cleaned.replace(/'/g, "\\'")}'`;
  });
  fs.writeFileSync(file, src);
  console.log('Stripped notes:', path.basename(file));
}
