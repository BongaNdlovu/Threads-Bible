/* Glossary-drift audit — plan v2.0 §1.4 / CP-05.
 *
 * Usage: npx tsx scripts/cp05Consistency.ts [--book <slug>]... [--json <path>]
 *
 * Why: one agent (or several) rewriting 60 books can render the same special term two
 * different ways. The frozen glossary names the approved rendering for each term; this
 * tool finds prose that uses the term WITHOUT the approved rendering beside it, which is
 * where drift shows up.
 *
 * It is a FLAGGER, not a gate. Plenty of legitimate prose mentions "covenant" as part of
 * a list, a chain label, or a quotation where a gloss would be wrong or redundant. The
 * output is a ranked worklist for the operator and for the CP-05 consistency read — the
 * verdict stays human, exactly as the master plan says of the clarity gate.
 *
 * Two signals per (term, scope):
 *   - GLOSSED: prose that contains the term AND its approved rendering words.
 *   - BARE:    prose that contains the term with no rendering words anywhere in the string.
 * A book with many BARE hits and almost no GLOSSED hits is the drift risk.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { bookThreadDetails } from '../src/data/bookThreadDetails';
import { threadDetails, threadChains } from '../src/data/threadDetails';
import { BOOK_REGISTRY } from '../src/data/bookRegistry';

type AnyRecord = Record<string, any>;

/** Frozen glossary: term -> the words that must appear when it is explained prose. */
export const GLOSSARY: Record<string, string[]> = {
  covenant: ['binding promise'],
  propitiation: ['turns', 'wrath away'],
  remnant: ['faithful few', 'who are left'],
  sanctuary: ['dwelling place', 'temple service'],
  typology: ['points forward', 'earlier event'],
  antitype: ['pointed to', 'the earlier picture'],
  soteriology: ['how god saves'],
  eschatology: ['last days', 'end of the story'],
  christology: ['shows about jesus'],
  messianic: ['promised king'],
  atonement: ['price paid', 'sin can be forgiven'],
  intercession: ['pleads for us'],
  justification: ['declares a guilty person', 'in the right'],
  // Operator ruling 2026-09-18: the single literal "makes a person holy" could never be satisfied when
  // the object is plural or non-human ("the LORD who makes THEM holy", ezk-20-12), so the row read
  // 0 glossed against 12 bare no matter how good the prose was. The inflected forms are now accepted.
  sanctification: ['makes a person holy', 'makes them holy', 'makes us holy', 'makes you holy', 'makes people holy', 'makes his people holy'],
  redemption: ['buys', 'buying a person back', 'buy people back'],
  forensic: ['courtroom', 'legal'],
  efficacy: ['it works', 'does what it says'],
  mediation: ['stands between god and us'],
  patriarch: ['founding father'],
  theophany: ['god appearing'],
  dispensational: ['period of god'],
  'catena': ['chain of scripture'],
  investiture: ['installing', 'publicly install'],
  imprecation: ['prayer for judgment', 'prayer for judgement'],
  doxology: ['word of praise', 'praise'],
  prerogative: ['god alone', 'belongs to god'],
  'federal': ['act of a head', 'head over'],
  headship: ['head over', 'head of'],
};

/** Words on the glossary's never-write list: their presence is an outright defect. */
export const NEVER_WRITE = [
  'covenantal framework', 'propitiatory efficacy', 'propitiation efficacy',
  'typological correspondence', 'antitypical fulfillment', 'redemptive economy',
  'forensic justification', 'dispensational', 'hermeneutical', 'soteriological',
  'eschatological', 'christological', 'teleological', 'redemptive synthesis',
  'theological necessity', 'doctrinal and prophetic continuum', 'teleological goal',
  'hermeneutical keystone', 'progressive culmination', 'canonical climax', 'sensus plenior',
  'imitatio dei', 'verses in common', 'expanding the foundational principle',
];

interface Field { entryId: string; field: string; text: string }
function collectBook(slug: string): Field[] {
  const out: Field[] = [];
  const push = (entryId: string, field: string, text: unknown) => {
    if (typeof text === 'string' && text.trim()) out.push({ entryId, field, text });
  };
  for (const map of [threadDetails as AnyRecord, bookThreadDetails as AnyRecord]) {
    for (const [id, entry] of Object.entries(map)) {
      if (!id.startsWith(`${slug}-`)) continue;
      push(id, 'title', entry.title);
      push(id, 'principle', entry.principle);
      if (entry.who) push(id, 'who', entry.who);
      for (const [ref, t] of Object.entries(entry.whoByRef ?? {})) push(id, `whoByRef[${ref}]`, t);
      (entry.cumulativePrinciples ?? []).forEach((p: string, i: number) => push(id, `cumulativePrinciples[${i}]`, p));
      (entry.terms ?? []).forEach((t: AnyRecord, i: number) => {
        push(id, `terms[${i}].gloss`, t.gloss);
        if (t.note) push(id, `terms[${i}].note`, t.note);
        if (t.exposition) push(id, `terms[${i}].exposition`, t.exposition);
      });
      (entry.sameTestamentLinks ?? []).forEach((l: AnyRecord, i: number) => {
        if (l.connection) push(id, `sameTestamentLinks[${i}].connection`, l.connection);
      });
    }
  }
  for (const chain of (threadChains ?? []) as AnyRecord[]) {
    const touches = (chain.steps ?? []).some((s: AnyRecord) => String(s.verseId ?? '').startsWith(`${slug}-`));
    if (!touches) continue;
    push(`chain:${chain.id}`, 'name', chain.name);
    (chain.steps ?? []).forEach((s: AnyRecord, i: number) => {
      push(`chain:${chain.id}`, `steps[${i}].title`, s.title);
      push(`chain:${chain.id}`, `steps[${i}].connection`, s.connection);
    });
  }
  return out;
}

function main() {
  const argv = process.argv.slice(2);
  const jsonIdx = argv.indexOf('--json');
  const requested: string[] = [];
  argv.forEach((a, i) => {
    if (a === '--book' && argv[i + 1]) requested.push(argv[i + 1]);
  });
  const slugs = requested.length ? requested : BOOK_REGISTRY.map(b => b.slug);

  interface Hit { book: string; term: string; verdict: 'BARE' | 'GLOSSED'; entryId: string; field: string; text: string }
  const hits: Hit[] = [];
  const neverWriteHits: Array<{ book: string; phrase: string; entryId: string; field: string; text: string }> = [];

  /**
   * The `who` field is a machine-parsed contract, not free prose: `src/components/HistoricalContextPage.tsx`
   * splits it on these five section headings with anchored regexes, and `connectionInterrogation.test.ts`
   * plus `threadMapModel.test.ts` assert that the headings are present. One of them contains a word the
   * never-write column bans ("Christological Subject & Referent:"), and it still must not be reworded —
   * renaming it stops that section rendering. The headings are therefore stripped before the banned-phrase
   * scan so the census reports prose defects rather than the app's own structural template. The words
   * inside a heading's body are still scanned normally.
   */
  const WHO_SECTION_LABELS = [
    'Authorship & Context:',
    'Identified Characters:',
    'Singular or Many:',
    'Christological Subject & Referent:',
    'Redemptive Purpose:',
  ];
  const stripWhoLabels = (s: string) => {
    let out = s;
    for (const label of WHO_SECTION_LABELS) out = out.split(label).join(' ');
    return out;
  };

  for (const slug of slugs) {
    for (const f of collectBook(slug)) {
      const lower = stripWhoLabels(f.text).toLowerCase();
      for (const [term, renderings] of Object.entries(GLOSSARY)) {
        const termRe = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w{0,4}\\b`, 'i');
        if (!termRe.test(lower)) continue;
        const glossed = renderings.some(r => lower.includes(r));
        hits.push({ book: slug, term, verdict: glossed ? 'GLOSSED' : 'BARE', entryId: f.entryId, field: f.field, text: f.text });
      }
      for (const phrase of NEVER_WRITE) {
        if (lower.includes(phrase)) {
          neverWriteHits.push({ book: slug, phrase, entryId: f.entryId, field: f.field, text: f.text });
        }
      }
    }
  }

  const byTerm = new Map<string, { bare: number; glossed: number; bareBooks: Set<string> }>();
  for (const h of hits) {
    const rec = byTerm.get(h.term) ?? { bare: 0, glossed: 0, bareBooks: new Set<string>() };
    if (h.verdict === 'BARE') {
      rec.bare++;
      rec.bareBooks.add(h.book);
    } else rec.glossed++;
    byTerm.set(h.term, rec);
  }

  console.log('=== GLOSSARY DRIFT AUDIT (plan v2.0 section 1.4) ===');
  console.log(`scope: ${requested.length ? requested.join(',') : `all ${slugs.length} books`}`);
  console.log(`glossary terms: ${Object.keys(GLOSSARY).length} · never-write phrases: ${NEVER_WRITE.length}`);
  console.log('');
  console.log('NEVER-WRITE PHRASES PRESENT (each is an outright defect):');
  if (!neverWriteHits.length) console.log('  none — 0 hits');
  for (const n of neverWriteHits) console.log(`  ${n.book} · ${n.entryId} · ${n.field} · "${n.phrase}"`);
  console.log('');
  console.log('term                GLOSSED  BARE  books with a bare use');
  for (const [term, rec] of [...byTerm.entries()].sort((a, b) => b[1].bare - a[1].bare)) {
    const books = [...rec.bareBooks].slice(0, 8).join(',') + (rec.bareBooks.size > 8 ? `,+${rec.bareBooks.size - 8}` : '');
    console.log(`  ${term.padEnd(18)} ${String(rec.glossed).padStart(5)} ${String(rec.bare).padStart(6)}  ${books}`);
  }
  console.log('');
  const worst = [...byTerm.entries()].filter(([, r]) => r.bare > 0 && r.glossed / (r.bare + r.glossed) < 0.34);
  console.log(`DRIFT RISK (bare uses outnumber glossed 2:1 or worse): ${worst.length ? worst.map(([t]) => t).join(', ') : 'none'}`);
  console.log('reminder: BARE is a flag, not a failure — a term in a quoted line or a chain label may need no gloss.');

  if (jsonIdx >= 0 && argv[jsonIdx + 1]) {
    const out = argv[jsonIdx + 1];
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, JSON.stringify({
      generatedAt: new Date().toISOString(),
      scope: requested.length ? requested : 'all',
      neverWriteHits,
      terms: Object.fromEntries([...byTerm.entries()].map(([t, r]) => [t, { bare: r.bare, glossed: r.glossed, bareBooks: [...r.bareBooks] }])),
      hits,
    }, null, 2));
    console.log(`wrote ${out}`);
  }
}

main();
