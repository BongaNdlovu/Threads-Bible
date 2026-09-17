/* Punctuation-theatre detector — plan v2.0 §0.7 enforcement.
 *
 * Usage: npx tsx scripts/cp02RewriteQuality.ts <rewrites.json> --worklist <worklist.json> [--min-share 0.10]
 *
 * §0.7: "Swapping `;` or `:` for `.` is not a rewrite." A proposed AFTER can look
 * changed while merely redistributing punctuation. This tool asks three questions
 * per draft and prints a verdict:
 *
 *   1. IDENTICAL   — AFTER equals BEFORE once ALL punctuation is normalised to spaces.
 *                    Nothing was rewritten at all. REJECT.
 *   2. RESEGMENTED — the words are the same, but the AFTER carries MORE sentences once
 *                    every sentence-ish mark (`;` `:` `—` `–` and the terminator) is
 *                    treated as a stop. That is a real structural change (one idea per
 *                    sentence), so it PASSES — but it is reported separately because it
 *                    is the weakest acceptable rewrite.
 *   3. REWRITTEN   — new words carry >= --min-share of the AFTER. PASS.
 *
 * Rationale for treating RESEGMENTED as a pass: master-plan §1.7's first rule is
 * "one idea per sentence", and a dash-joined pair of independent clauses is one
 * sentence that should have been two. Measuring it keeps the judgement visible
 * instead of collapsing it into "changed / unchanged".
 */
import { readFileSync } from 'node:fs';

interface Draft { entryId: string; field: string; after: string; reason?: string }
interface RewriteFile { book: string; bookName?: string; drafts?: Draft[] }
interface WorklistField { entryId: string; field: string; text: string }
interface Worklist { fields?: WorklistField[]; chains?: WorklistField[] }

const argValue = (argv: string[], flag: string) => {
  const i = argv.indexOf(flag);
  return i >= 0 ? argv[i + 1] : undefined;
};

/** Words only — every punctuation mark becomes a space. */
const wordsOf = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);

/** True sentence terminators only: `.` `!` `?`. */
const sentencesByTerminator = (s: string) =>
  s.split(/[.!?]+/).map(x => x.trim()).filter(x => wordsOf(x).length > 0).length;

/** Mid-sentence separators that §1.7 wants converted into sentence breaks. */
const midSeparators = (s: string) => (s.match(/[;:\u2014\u2013]/g) ?? []).length;

/** Longest sentence (terminators only), in words — the readability pressure a
 *  resegmentation is supposed to relieve. */
const longestSentence = (s: string) => {
  const parts = s.split(/[.!?]+/).map(x => wordsOf(x).length).filter(Boolean);
  return parts.length ? Math.max(...parts) : 0;
};

function classify(before: string, after: string, resegmentMaxWords = 18) {
  const bw = wordsOf(before);
  const aw = wordsOf(after);
  const bset = new Set(bw);
  const newWords = aw.length ? aw.filter(w => !bset.has(w)).length / aw.length : 0;
  const sameWords = aw.join(' ') === bw.join(' ');
  const termBefore = sentencesByTerminator(before);
  const termAfter = sentencesByTerminator(after);
  const midBefore = midSeparators(before);
  const midAfter = midSeparators(after);
  const longest = longestSentence(before);
  return {
    share: newWords,
    /** The words in AFTER that do not appear in BEFORE. A low share is not proof of
     *  theatre: the densest strings are short, so one decoded word can be under the
     *  threshold. Printing the actual new words lets a reader judge the change instead
     *  of trusting the label. */
    added: [...new Set(aw.filter(w => !bset.has(w)))],
    sameWords,
    termBefore,
    termAfter,
    midBefore,
    midAfter,
    longest,
    /** Real resegmentation: no new words, MORE sentence terminators, a separator was
     *  consumed, AND the original sentence was long enough to need splitting. A
     *  punctuation-only change to an already-short sentence relieves no pressure and
     *  is exactly the theatre §0.7 forbids. */
    resegmented:
      sameWords &&
      termAfter > termBefore &&
      midAfter < midBefore &&
      longest > resegmentMaxWords,
    /** Punctuation moved, no pressure relieved. */
    theatre: sameWords && !(termAfter > termBefore && midAfter < midBefore && longest > resegmentMaxWords),
  };
}

function main() {
  const argv = process.argv.slice(2);
  const rewritesPath = argv.find(a => !a.startsWith('--'));
  const worklistPath = argValue(argv, '--worklist');
  const minShare = Number(argValue(argv, '--min-share') ?? '0.10');
  if (!rewritesPath || !worklistPath) {
    console.error('usage: npx tsx scripts/cp02RewriteQuality.ts <rewrites.json> --worklist <worklist.json> [--min-share 0.10]');
    process.exit(2);
  }

  const set: RewriteFile = JSON.parse(readFileSync(rewritesPath, 'utf8'));
  const worklist: Worklist = JSON.parse(readFileSync(worklistPath, 'utf8'));
  const before = new Map<string, string>();
  for (const f of [...(worklist.fields ?? []), ...(worklist.chains ?? [])]) {
    before.set(`${f.entryId}|${f.field}`, f.text);
  }

  const drafts = set.drafts ?? [];
  const punctuationOnly: Array<{ key: string; share: number; added: string[]; midBefore: number; midAfter: number; longest: number }> = [];
  const resegmented: Array<{ key: string; from: number; to: number; mid: number }> = [];
  const rewritten: Array<{ key: string; share: number }> = [];
  let missing = 0;

  for (const d of drafts) {
    const key = `${d.entryId}|${d.field}`;
    const b = before.get(key);
    if (b === undefined) {
      missing++;
      continue;
    }
    const c = classify(b, d.after);
    if (c.share >= minShare) {
      rewritten.push({ key, share: c.share });
      continue;
    }
    if (c.resegmented) {
      resegmented.push({ key, from: c.termBefore, to: c.termAfter, mid: c.midBefore - c.midAfter });
      continue;
    }
    punctuationOnly.push({ key, share: c.share, added: c.added, midBefore: c.midBefore, midAfter: c.midAfter, longest: c.longest });
  }

  const total = drafts.length;
  console.log(`=== REWRITE QUALITY — ${set.bookName ?? set.book} ===`);
  console.log(`drafts: ${total} · min new-word share for a "rewrite": ${(minShare * 100).toFixed(0)}%`);
  console.log(`REWRITTEN (new words carry the change — PASS):        ${rewritten.length}`);
  console.log(`RESEGMENTED (no new words, but a mid-sentence ";" ":" "—" became a sentence break — PASS): ${resegmented.length}`);
  console.log(`UNDER-SHARE (below the ${(minShare * 100).toFixed(0)}% new-word share, and no clean resegmentation — INSPECT): ${punctuationOnly.length}`);
  if (missing) console.log(`NOT LOCATED in worklist: ${missing}`);
  console.log('');

  if (punctuationOnly.length) {
    console.log('--- UNDER-SHARE — inspect: either punctuation theatre, or a real decode on a short string ---');
    for (const p of punctuationOnly) {
      console.log(`  ${p.key}   new-word share ${(p.share * 100).toFixed(1)}%   added: ${p.added.join(' ') || '(none — this IS theatre)'}`);
      console.log(`      separators ${p.midBefore} -> ${p.midAfter}   longest before-sentence ${p.longest}w`);
    }
    console.log('');
  }
  if (resegmented.length) {
    console.log('--- RESEGMENTED — weakest acceptable form; each converts a mid-sentence separator into a sentence break ---');
    for (const r of resegmented) {
      console.log(`  ${r.key}   sentences ${r.from} -> ${r.to}   separators removed ${r.mid}`);
    }
    console.log('');
  }
  const shares = rewritten.map(r => r.share).sort((a, b) => a - b);
  if (shares.length) {
    const mean = shares.reduce((n, s) => n + s, 0) / shares.length;
    console.log(`--- REWRITTEN share distribution: min ${(shares[0] * 100).toFixed(1)}% · median ${(shares[Math.floor(shares.length / 2)] * 100).toFixed(1)}% · mean ${(mean * 100).toFixed(1)}% · max ${(shares[shares.length - 1] * 100).toFixed(1)}% ---`);
  }
  console.log('');
  console.log(punctuationOnly.length
    ? `VERDICT: ${punctuationOnly.length} under-share draft(s) to inspect — each must add a real word (see "added") or move to verifyOnly.`
    : 'VERDICT: PASS — every draft adds new words.');
}

main();
