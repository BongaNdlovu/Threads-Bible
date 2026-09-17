import fs from 'node:fs';

const files = [
  'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/threadDetails.ts',
  'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/bookThreadDetails.ts',
];
const text = files.map(f => fs.readFileSync(f, 'utf8')).join('\n');

// quoted spans, curly or straight double quotes
const SPAN = /[\u201c"]([^\u201d"]{8,})[\u201d"]/g;
let total = 0, midEllipsis = 0, trailingEllipsis = 0, leadingEllipsis = 0;
const trailing: string[] = [];
const leading: string[] = [];
for (const m of text.matchAll(SPAN)) {
  const span = m[1];
  if (!/[A-Za-z]/.test(span)) continue;          // skip non-text spans
  total++;
  const hasEllipsis = /\.\.\.|\u2026/.test(span);
  if (!hasEllipsis) continue;
  const trimmed = span.trim();
  const endsWith = /(\.\.\.|\u2026)$/.test(trimmed);
  const startsWith = /^(\.\.\.|\u2026)/.test(trimmed);
  if (endsWith) { trailingEllipsis++; if (trailing.length < 6) trailing.push(trimmed.slice(-90)); }
  else if (startsWith) { leadingEllipsis++; if (leading.length < 6) leading.push(trimmed.slice(0, 90)); }
  else midEllipsis++;
}
console.log(`quoted spans examined:                ${total}`);
console.log(`  with an ellipsis somewhere:         ${midEllipsis + trailingEllipsis + leadingEllipsis}`);
console.log(`    mid-span ellipsis (A… B):         ${midEllipsis}`);
console.log(`    TRAILING ellipsis (… before "):   ${trailingEllipsis}`);
console.log(`    leading ellipsis ("… at start):   ${leadingEllipsis}`);
if (trailing.length) { console.log('\ntrailing examples:'); for (const t of trailing) console.log('   …' + t); }
if (leading.length) { console.log('\nleading examples:'); for (const t of leading) console.log('   ' + t + '…'); }
