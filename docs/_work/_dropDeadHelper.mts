import fs from 'node:fs';
const p = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/components/HistoricalContextPage.tsx';
const raw = fs.readFileSync(p, 'utf8');
const eol = raw.includes('\r\n') ? '\r\n' : '\n';
const lines = raw.split(/\r?\n/);
const start = lines.findIndex(l => l.startsWith('function readCssVarHex('));
if (start < 0) throw new Error('helper not found');
let end = start;
while (end < lines.length && lines[end] !== '}') end++;
if (end >= lines.length) throw new Error('helper close not found');
// also drop a single blank line after the helper
let stop = end + 1;
if (lines[stop] === '') stop++;
const removed = stop - start;
const out = [...lines.slice(0, start), ...lines.slice(stop)];
// keep exactly one trailing blank line at EOF
while (out.length > 1 && out[out.length - 1] === '' && out[out.length - 2] === '') out.pop();
fs.writeFileSync(p, out.join(eol));
console.log(`removed the dead readCssVarHex helper (${removed} lines) from HistoricalContextPage.tsx`);
console.log(`file now ${out.length} lines`);
