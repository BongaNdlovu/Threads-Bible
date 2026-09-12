import { BOOK_REGISTRY } from '../src/data/bookRegistry';
import fs from 'fs';
import path from 'path';

const slugSet = new Set(BOOK_REGISTRY.map(b => b.slug));

function walk(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

const allFiles = walk(path.resolve('src'));
let totalErrors = 0;

for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /['"]([a-z0-9]+)-(\d+)-(\d+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const slug = match[1];
    if (!slugSet.has(slug)) {
      console.log(`[INVALID SLUG] in ${path.relative(process.cwd(), filePath)}: "${match[0]}" -> unknown slug "${slug}"`);
      totalErrors++;
    }
  }
}

console.log(`Total invalid slug references across ${allFiles.length} files: ${totalErrors}`);
