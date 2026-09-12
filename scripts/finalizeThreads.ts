/**
 * Clean curly-brace notes from fulfillment verse text and add a few
 * remaining Genesis chapter threads.
 * Run: npx tsx scripts/finalizeThreads.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fulfillPath = path.join(__dirname, '../src/data/fulfillments.ts');
let src = fs.readFileSync(fulfillPath, 'utf8');

// Strip {word} notes inside text: '...' strings — only when braces wrap short notes
src = src.replace(
  /text: '((?:\\'|[^'])*)'/g,
  (full, text: string) => {
    const cleaned = text
      .replace(/\{([^}]+)\}/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
    return `text: '${cleaned}'`;
  }
);

fs.writeFileSync(fulfillPath, src);
console.log('Cleaned fulfillment text braces');

// Append remaining chapter threads if missing
const propheciesPath = path.join(__dirname, '../src/data/prophecies.ts');
let propSrc = fs.readFileSync(propheciesPath, 'utf8');

const extra = [
  // Ch 10 — nations spread
  { id: 'gen-10-5', refs: ['Acts 17:26', 'Acts 1:8'] },
  { id: 'gen-10-32', refs: ['Acts 17:26', 'Genesis 11:1'] },
  // Ch 20 — God protects the promise
  { id: 'gen-20-6', refs: ['Psalm 105:14-15', 'Proverbs 21:1'] },
  { id: 'gen-20-17', refs: ['James 5:16', 'Genesis 21:1'] },
  // Ch 29 — Leah/Judah line
  { id: 'gen-29-35', refs: ['Matthew 1:2', 'Hebrews 7:14', 'Genesis 49:8'] },
  // Ch 30 — Rachel/Joseph
  { id: 'gen-30-22', refs: ['Genesis 35:24', 'Genesis 49:22'] },
  { id: 'gen-30-24', refs: ['Genesis 35:24', 'Genesis 49:22'] },
  // Ch 34 — narrative; keep light
  { id: 'gen-34-7', refs: ['2 Samuel 13:21', 'Proverbs 6:32-33'] },
];

const toAdd = extra.filter(e => !propSrc.includes(`'${e.id}':`));
if (toAdd.length === 0) {
  console.log('No extra chapters needed');
} else {
  // Insert before closing brace of the object
  const insertAt = propSrc.lastIndexOf('};');
  const lines = toAdd.map(e => {
    const refStr =
      e.refs.length === 1
        ? `['${e.refs[0]}']`
        : `[\n${e.refs.map(r => `      '${r}'`).join(',\n')},\n    ]`;
    return `  '${e.id}': {\n    fulfillmentRefs: ${refStr},\n  },`;
  });
  propSrc = propSrc.slice(0, insertAt) + lines.join('\n') + '\n' + propSrc.slice(insertAt);
  fs.writeFileSync(propheciesPath, propSrc);
  console.log('Added extra threads:', toAdd.map(t => t.id).join(', '));
}
