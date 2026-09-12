/**
 * Strip {hebrew notes} from genesisData.ts verse text for cleaner reading.
 * Run: npx tsx scripts/cleanGenesisText.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, '../src/data/genesisData.ts');
let src = fs.readFileSync(file, 'utf8');

// Replace text field values: "text": "...."
src = src.replace(/"text": "((?:\\"|[^"])*)"/g, (full, text: string) => {
  const cleaned = text
    .replace(/\\\{/g, '{') // shouldn't appear
    .replace(/\{([^}]+)\}/g, '$1')
    .replace(/\\+/g, '\\')
    .replace(/\s+/g, ' ')
    .trim();
  return `"text": ${JSON.stringify(cleaned)}`;
});

fs.writeFileSync(file, src);
console.log('Cleaned genesisData.ts text braces');
