import fs from 'node:fs';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const bookPath = `${repo}/scripts/cp02BookAppendix.ts`;
const levPath = `${repo}/scripts/cp02LeviticusAppendix.ts`;

const readLines = (p: string) => {
  const raw = fs.readFileSync(p, 'utf8');
  const eol = raw.includes('\r\n') ? '\r\n' : '\n';
  return { raw, eol, lines: raw.split(/\r?\n/) };
};
const assert = (cond: unknown, msg: string) => { if (!cond) throw new Error('ABORT: ' + msg); };

// ---------- 1 · cp02BookAppendix.ts ----------
{
  const { eol, lines } = readLines(bookPath);
  const at = (n: number) => lines[n - 1];
  assert(/console\.error\(`REFUSING TO OVERWRITE/.test(at(179)), `line 179: ${at(179)?.trim()}`);
  assert(/^type DocsInput = \{/.test(at(180)), `line 180: ${at(180)?.trim()}`);
  assert(/^function writeDocs\(input: DocsInput\): number \{/.test(at(193)), `line 193: ${at(193)?.trim()}`);
  assert(at(272).trim() === '}', `line 272: ${JSON.stringify(at(272))}`);
  assert(at(273).trim() === 'return 1;', `line 273: ${JSON.stringify(at(273))}`);
  assert(at(274).trim() === '}' && at(275).trim() === '}', 'lines 274-275');
  assert(/return writeDocs\(\{ label, slug, prefix/.test(at(282)), `line 282: ${at(282)?.trim()}`);
  assert(at(283).trim() === '}', `line 283: ${JSON.stringify(at(283))}`);
  assert(/^function fence/.test(at(285)), `line 285: ${at(285)?.trim()}`);

  const head = lines.slice(0, 179);      // 1..179
  const decls = lines.slice(179, 272);   // 180..272
  const body = lines.slice(275, 283);    // 276..283
  const rest = lines.slice(283);         // 284..end

  const fixed = [
    ...head,
    '      return 1;',
    '    }',
    '  }',
    '',
    ...body,
    '',
    ...decls,
    ...rest,
  ];
  fs.writeFileSync(bookPath, fixed.join(eol));
  console.log(`cp02BookAppendix.ts repaired (eol=${eol === '\r\n' ? 'CRLF' : 'LF'})`);
  console.log(`  moved ${decls.length} lines (type DocsInput + writeDocs) to module scope`);
  console.log('  restored the guard tail: return 1; } }');
}

// ---------- 2 · cp02LeviticusAppendix.ts ----------
{
  const { eol, raw } = readLines(levPath);
  if (raw.includes("from './cp02BookAppendix'")) console.log('cp02LeviticusAppendix.ts: import already present');
  else {
    const anchor = "import { checkProse } from './checkReadability';";
    assert(raw.includes(anchor), 'Leviticus: checkReadability import not found');
    const insert = [anchor, "import { collectBookFields } from './cp02BookAppendix';", "import type { BookField } from './cp02BookAppendix';"].join(eol);
    fs.writeFileSync(levPath, raw.replace(anchor, insert));
    console.log('cp02LeviticusAppendix.ts: added the two imports the refactor assumed');
  }
}
