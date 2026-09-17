import fs from 'node:fs';
import path from 'node:path';
const dir = 'C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/docs/_work';
const NOTE = ' ABBREV FIXED: the draft had expanded the app abbreviation, which invariant I1 forbids; the abbreviation is restored verbatim and nothing else changed.';

const edits: Array<[string, string, string, string, string]> = [
  ['joh_rewrites.json', 'joh-1-14', 'principle', 'the same root as the Old Testament tabernacle', 'the same root as OT tabernacle'],
  ['heb_rewrites.json', 'heb-4-4', 'terms[0].note', 'This word appears only here in the New Testament.', 'This word appears only here in the NT.'],
];
for (const [file, entryId, field, from, to] of edits) {
  const p = path.join(dir, file);
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  const d = (j.drafts || []).find(x => x.entryId === entryId && x.field === field);
  if (!d) { console.log(`MISSING ${file} ${entryId}|${field}`); continue; }
  if (!d.after.includes(from)) { console.log(`anchor not found in ${entryId}: ${from}`); continue; }
  d.after = d.after.replace(from, to);
  d.reason = (d.reason ?? '') + NOTE;
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
  console.log(`fixed ${file} ${entryId}|${field}`);
  console.log('   now: ' + d.after.slice(0, 220));
}
