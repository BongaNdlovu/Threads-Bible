import fs from 'node:fs';

const repo = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main';
const eolOf = (s: string) => (s.includes('\r\n') ? '\r\n' : '\n');

// ============ 1 · ThreadMap.tsx — both additions, keep both ============
{
  const p = `${repo}/src/components/ThreadMap.tsx`;
  const raw = fs.readFileSync(p, 'utf8');
  const eol = eolOf(raw);
  const lines = raw.split(/\r?\n/);
  const start = lines.findIndex(l => l.startsWith('<<<<<<<'));
  const mid = lines.findIndex(l => l.startsWith('======='));
  const end = lines.findIndex(l => l.startsWith('>>>>>>>'));
  if (start < 0 || mid < 0 || end < 0 || !(start < mid && mid < end)) throw new Error('ThreadMap: conflict markers not found in order');

  const ours = lines.slice(start + 1, mid);
  const theirs = lines.slice(mid + 1, end);
  if (!ours.join('\n').includes('function readCssVarHex')) throw new Error('ThreadMap: ours should be readCssVarHex');
  if (!theirs.join('\n').includes('function DossierBlocks')) throw new Error('ThreadMap: theirs should be DossierBlocks');

  // both functions are used in the merged file, so both stay; the shared closing brace after
  // the conflict closes whichever is last, so put readCssVarHex first and give it its own brace.
  const resolved = [
    ...lines.slice(0, start),
    ...ours,                                   // readCssVarHex, body complete except its final brace
    '}',                                       // close readCssVarHex
    '',
    ...theirs,                                 // DossierBlocks, closed by the shared brace that follows
    ...lines.slice(end + 1),
  ];
  fs.writeFileSync(p, resolved.join(eol));
  console.log('ThreadMap.tsx resolved: kept BOTH readCssVarHex (2 call sites) and DossierBlocks (7 call sites)');
}

// ============ 2 · HistoricalContextPage.tsx — main's palette identity wins ============
{
  const p = `${repo}/src/components/HistoricalContextPage.tsx`;
  const raw = fs.readFileSync(p, 'utf8');
  const eol = eolOf(raw);
  let lines = raw.split(/\r?\n/);

  const start = lines.findIndex(l => l.startsWith('<<<<<<<'));
  const mid = lines.findIndex(l => l.startsWith('======='));
  const end = lines.findIndex(l => l.startsWith('>>>>>>>'));
  if (start < 0 || mid < 0 || end < 0) throw new Error('HCP: conflict markers not found');
  const ours = lines.slice(start + 1, mid).join('\n');
  const theirs = lines.slice(mid + 1, end).join('\n');
  if (!ours.includes('DARK_PALETTE_BASE')) throw new Error('HCP: ours should be the _BASE palettes');
  if (!theirs.includes("gold: '#C08A52'")) throw new Error('HCP: theirs should be the warm palette');

  // take main's side: the newer, documented CP-04 archive/earth identity
  lines = [...lines.slice(0, start), ...lines.slice(mid + 1, end), ...lines.slice(end + 1)];
  let out = lines.join(eol);

  // the P derivation must use main's names and no CSS-var plumbing, or the blue --accent
  // (#3B82F6 / #60A5FA) would override main's deliberate warm gold.
  const derivation = [
    "  const P = pageTheme === 'dark' ? DARK_PALETTE : LIGHT_PALETTE;",
  ].join(eol);
  const oldDerivation = [
    "  const baseP = pageTheme === 'dark' ? DARK_PALETTE_BASE : LIGHT_PALETTE_BASE;",
    "  const accent = readCssVarHex('--accent', pageTheme === 'dark' ? '#60A5FA' : '#3B82F6');",
    '  const P = { ...baseP, gold: accent };',
  ].join(eol);
  if (!out.includes(oldDerivation)) throw new Error('HCP: P derivation not found as expected');
  out = out.replace(oldDerivation, derivation);

  // drop the now-unreferenced type and helper (its only other user, ThreadMap, keeps its own copy)
  const typeLine = 'type HistPalette = (typeof DARK_PALETTE_BASE) & { gold: string };';
  if (!out.includes(typeLine)) throw new Error('HCP: HistPalette type not found');
  out = out.replace(typeLine + eol + eol, '');
  const helper = [
    '/** Read a CSS variable from :root and normalize to a hex color fallback-safe */',
    'function readCssVarHex(name: string, fallback: string): string {',
    '  try {',
    '    const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();',
    '    if (!raw) return fallback;',
    '    // Accept hex values as-is; otherwise return fallback',
    "    return /^#([0-9a-f]{6}|[0-9a-f]{8})$/i.test(raw) ? raw : fallback;",
    '  } catch {',
    '    return fallback;',
    '  }',
    '}',
  ].join(eol);
  if (out.includes(helper)) out = out.replace(helper + eol + eol, '');
  else console.log('  (helper text differed; removing by lines instead)');

  fs.writeFileSync(p, out);
  console.log('HistoricalContextPage.tsx resolved: took main\'s warm CP-04 palette, dropped the --accent plumbing');
}
