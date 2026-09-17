import fs from 'node:fs';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const bookPath = `${repo}/scripts/cp02BookAppendix.ts`;
const levPath = `${repo}/scripts/cp02LeviticusAppendix.ts`;

// ---------- 1 · cp02BookAppendix.ts — de-interleave the two spliced versions ----------
const raw = fs.readFileSync(bookPath, 'utf8');
const lines = raw.split('\n');            // 0-based; line N (1-based) is lines[N-1]
const at = (n: number) => lines[n - 1];

const assert = (cond: unknown, msg: string) => { if (!cond) throw new Error('ABORT: ' + msg); };
assert(/console\.error\(`REFUSING TO OVERWRITE/.test(at(179)), `line 179 should be the REFUSING console.error, found: ${at(179)?.trim()}`);
assert(/^type DocsInput = \{/.test(at(180)), `line 180 should open type DocsInput, found: ${at(180)?.trim()}`);
assert(/^function writeDocs\(input: DocsInput\): number \{/.test(at(193)), `line 193 should open writeDocs, found: ${at(193)?.trim()}`);
assert(at(272) === '}', `line 272 should close writeDocs, found: ${at(272)}`);
assert(at(273).trim() === 'return 1;', `line 273 should be the orphaned return 1;, found: ${at(273)}`);
assert(at(274).trim() === '}' && at(275).trim() === '}', 'lines 274-275 should be the orphaned closers');
assert(/return writeDocs\(\{ label, slug, prefix/.test(at(282)), 'line 282 should call writeDocs');
assert(at(283) === '}', 'line 283 should close runAppendix');
assert(/^function fence/.test(at(285)), 'line 285 should open fence');

const head = lines.slice(0, 179);                 // 1..179
const decls = lines.slice(179, 272);              // 180..272  (DocsInput + writeDocs)
const body = lines.slice(275, 283);               // 276..283  (runAppendix's remaining body + close)
const rest = lines.slice(283);                    // 284..end

const fixed = [
  ...head,
  '      return 1;',                              // restore the guard that the merge dropped
  '    }',
  '  }',
  '',
  ...body,
  '',
  ...decls,
  ...rest,
];

fs.writeFileSync(bookPath, fixed.join('\n'));
console.log('cp02BookAppendix.ts: repaired');
console.log(`  moved type DocsInput + writeDocs (${decls.length} lines) out of runAppendix to module scope`);
console.log('  restored the missing `return 1;` and the two closing braces of the sign-off guard');

// ---------- 2 · cp02LeviticusAppendix.ts — import the shared engine ----------
let lev = fs.readFileSync(levPath, 'utf8');
if (lev.includes("from './cp02BookAppendix'")) {
  console.log('cp02LeviticusAppendix.ts: import already present');
} else {
  const anchor = "import { checkProse } from './checkReadability';";
  assert(lev.includes(anchor), 'Leviticus: checkReadability import not found');
  lev = lev.replace(anchor, `${anchor}\nimport { collectBookFields } from './cp02BookAppendix';\nimport type { BookField } from './cp02BookAppendix';`);
  fs.writeFileSync(levPath, lev);
  console.log('cp02LeviticusAppendix.ts: added the two imports the refactor assumed');
}
