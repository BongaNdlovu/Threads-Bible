# CP-05 · Cross-book consistency read (plain-language sweep)

Plan v2.0 §CP-05 · Branch as delivered · Date: 2026-09-18 · Read-only checkpoint.
Scope read: the 63 delivered rewrite drafts (`docs/_work/*_rewrites.json`, whose `after` strings are
byte-identical to the `**AFTER**` blocks of the 74 `docs/CP-02_*_DRAFT.md` appendices — see §6) plus
the live strings of the three verify-only books (`gen`, `exo`, `lev`) taken from their worklists.
Standard tested against: `docs/CP-01_FULL_CANON_BASELINE_V2.md` §3 (the frozen glossary) and plan
v2.0 §1.4 / §1.7 / §1.10 / §1.11.

---

## 1 · Sample size actually read, per book

Counts are strings read, not strings in the book. Every book was read at least 8 strings, spread
across its densest entries and, where the book has them, across `principle`, `title`,
`terms[].note` and `terms[].gloss`. Chunked books (`isa`, `rev`, `dan`, `ezk`, `jer`, `mat`) are
reported as one book. `gen`/`exo`/`lev` were read from their live (verify-only) text.

"of" is the book's in-scope draft count as the delivered `_rewrites.json` states it (drafts +
verifyOnly): e.g. `psa` 118 + 171 = 289, `rom` 86 + 93 = 179, `rev` 112 + 124 = 236. For the three
verify-only books it is the worklist field count: `gen` 745, `exo` 118, `lev` 32. "read" is my true
sample.

| Book | read | of | Book | read | of | Book | read | of |
|---|---:|---:|---|---:|---:|---|---:|---:|
| gen | 60 | 745 | 2ch | 8 | 16 | dan | 47 | 96 |
| exo | 49 | 118 | ezr | 17 | 31 | hos | 10 | 39 |
| lev | 20 | 32 | neh | 5 | 6 | jol | 6 | 75 |
| num | 19 | 59 | est | 2 | 4 | amo | 9 | 37 |
| deu | 59 | 129 | job | 20 | 68 | oba | 1 | 2 |
| jos | 9 | 18 | psa | 118 | 289 | jon | 5 | 12 |
| jdg | 3 | 6 | pro | 15 | 48 | mic | 10 | 20 |
| rut | 4 | 29 | ecc | 23 | 37 | nam | 4 | 29 |
| 1sa | 9 | 20 | sng | 7 | 14 | hab | 7 | 14 |
| 2sa | 26 | 49 | isa | 139 | 272 | zep | 8 | 16 |
| 1ki | 21 | 22 | jer | 23 | 52 | hag | 6 | 12 |
| 2ki | 13 | 14 | lam | 5 | 12 | zec | 39 | 148 |
| 1ch | 7 | 14 | ezk | 31 | 74 | mal | 19 | 70 |
| mat | 66 | 132 | mrk | 16 | 32 | luk | 25 | 50 |
| joh | 14 | 70 | act | 9 | 56 | rom | 86 | 179 |
| 1co | 44 | 90 | 2co | 17 | 34 | gal | 18 | 44 |
| eph | 23 | 52 | php | 15 | 36 | col | 23 | 48 |
| 1th | 14 | 28 | 2th | 10 | 20 | 1ti | 14 | 28 |
| 2ti | 16 | 32 | tit | 9 | 18 | phm | 6 | 12 |
| heb | 43 | 104 | jam | 12 | 22 | 1pe | 15 | 32 |
| 2pe | 8 | 14 | 1jn | 10 | 22 | 2jn | 2 | 4 |
| 3jn | 1 | 2 | jud | 7 | 16 | rev | 112 | 236 |

**Total read: 1,518 strings across 66 books** (target ≥528; 66 unique books — the sum of the "read"
column). Every book is at or above its 8-string floor except the three whose whole delivered set is
smaller than 8: `oba` 1 of 2, `3jn` 1 of 2, `est` 2 of 4, `2jn` 2 of 4 — for those, the entire
delivered set was read.

Reading method: `after` strings were dumped per book and read in density order; every glossary term
occurrence in the whole corpus (all 1,389 drafts) was additionally extracted with ±95 characters of
context (`covenant` 67 occurrences, name groups 432) so that cross-book divergence was judged on all
occurrences, not only on the sampled ones. The mechanical census (`scripts/cp05Consistency.ts`,
canon-wide) was used as raw material only. Genesis is the one book where "read" is a small fraction of
"of"; see §5, and see B1 for what the unread remainder still contains.

---

## 2 · Findings

Severity vocabulary is the plan's: `blocking-claim` (a claim changed, or a claim that two books now
state incompatibly) · `wording` (a rendering diverges from the frozen one; fix is wording-only) ·
`citation` (a reference, quoted span, label or original-language token moved or changed).

### 2.1 `blocking-claim`

**B1 · `gen` and `exo`/`zec` · live text vs the whole sweep — two voices ship in one app.**
The three verify-only books were never swept (§1.11), so they still carry the pre-sweep register,
including glossary never-write words and, in `gen`, abstract noun stacks the sweep removed everywhere
else. This is not one term drifting; it is a whole register discontinuity that the glossary's
never-write column now formally forbids.

| where | entryId · field | verbatim |
|---|---|---|
| gen | `gen-1-1` · `who`, `whoByRef[John 1:1-3]`, `whoByRef[Hebrews 11:3]` | "**Christological** Subject & Referent: Jesus Christ Himself is the uncreated, personal divine Word…" |
| gen | `gen-2-3` · `terms[0].note` | "…points to an **eschatological** rest…" |
| gen | `gen-49-1` · `principle` | "First principle: patriarchal prophecy points forward to an **eschatological** climax." |
| gen | `chain:rest-sabbath`, `chain:tree-life-access`, `chain:one-flesh-bride` · `steps[].connection` | "**eschatological** …" |
| exo | `exo-12-46` · `who`, `whoByRef[John 19:36]`, `whoByRef[Numbers 9:12]` | "**Christological** Subject & Referent: …" and "The **type** specifies the integrity of the sacrifice… so the **antitype** is recognizable." (both bare) |
| exo | `exo-20-8` · `principle` | "…Hebrews affirms an **eschatological** Sabbath-rest (sabbatismos)…" |
| exo | `chain:smitten-rock-water`, `chain:bread-from-heaven` · `steps[].connection` | "**eschatological** …" |
| zec | `zec-9-9` · `who` + 4 `whoByRef` | "**Christological** Subject & Referent: …" |
| isa, heb | `chain:no-strange-doctrines` · `steps[2].connection` | "**Christological** focus…" |

These are exactly the 28 never-write hits the calibration §10 recorded as pre-existing and queued for
CP-06. **Recommendation: no edit here** (plan §1.11 forbids re-writing these books; the golden
samples `gen-1-1`, `exo-12-46`, `zec-9-9` are verify-only). Triage: either the never-write column
gets a scoped exemption for already-signed-off prose, or the three books get a follow-up pass.

**B2 · `exo` vs the swept canon · the structural label `First principle:` carries a period in Exodus.**
35 of Exodus's 118 live strings read "First principle**.** the Sabbath is…" where every swept book
reads "First principle**:**". `LABEL_FIXITY` passes because the count is unchanged from base, so no
check can see it. Not a wording fix (I1 protects the label; a punctuation change to a label is an
operator call). Triage only.

### 2.2 `wording` — frozen rendering, one rendering prescribed, divergent usage

**W1 · `rev` · `rev-14-6` · `principle`.**
Frozen row: `covenant → God's binding promise`. The writer's own `reason` says it used that rendering.
The string reads: "It is **God's eternal binding promise of grace**, and it stands on the sacrifice
and righteousness of Christ." The locked noun is turned into a modifier of "grace", so no noun
"promise" survives to be identified with the covenant. Compare `rom-11-27` ("In both, **God's binding
promise** means one thing"), `sng-5-1` ("the meal of **God's binding promise**").
**Recommended fix (wording-only, not applied — see §4):** "It is God's eternal binding promise, the
promise of his grace, and it stands on…".

**W2 · `1pe`, `gal`, `jos`, `mal`, `php`, `psa`, `rev`, `neh`, `mat`, `heb`, `2sa`, `jer` — 34 strings use `covenant` with no gloss.**
`covenant` is the glossary's headline row (60 strings do carry the frozen rendering — see §3 for the
per-book count, e.g. `isa-42-6`, `jer-31-31`, `dan-9-27`, `2co-3-3`, `hos-2-23`, `amo-3-7`,
`ezk-20-20`, `sng-5-1`, `rom-11-26`, `rom-11-27`, `2sa-7-12`, `deu-18-15`). Against that, these render
the term as a bare modifier or noun inside explanatory prose (`rev-14-6` produces the phrase but in the
deviant construction of W1):

| Book | entryId · field | verbatim | note |
|---|---|---|---|
| 1pe | `1pe-1-16` · `principle` | "unchanged from one **covenant** to the next" | plural; locked rendering is singular |
| gal | `gal-3-17` · `principle` | "The confirmed **covenant** outranks the later law." | bare; central to the argument |
| gal | `gal-3-28` · `principle` | "that oneness is baptismal and **covenantal**" | the only occurrence in the whole swept corpus, and it is the never-write word (`covenantal framework`) in adjective form |
| jos | `jos-24-2` · `principle` | "The story of God's **covenant** starts with Terah" | bare |
| jos | `jos-8-34` · `principle` | "**covenant** renewal is public reading" | bare |
| mal | `mal-3-6` · `principle` | "God made the **covenant**, and he stays the same, so the **covenant** still stands." | bare, twice |
| php | `php-2-11` · `principle` | "Lord is the **covenant** name, and it is confessed in the **covenant** oath." | **FIXED — see §4** |
| psa | `psa-105-15` · `principle` | "God guards the **covenant** line" | bare |
| psa | `psa-89-27` · `principle` | "My **covenant** will I not break, nor alter the thing that is gone out of my lips." | KJV from Ps 89:34 carried **unquoted** (line 1 of the string quotes v. 27, line 2 is bare KJV), so the gate and the reader meet it as app prose and the term is never glossed |
| psa | `psa-95-11` · `principle` | "The rest-forfeiting oath." | opening sentence is a verbless noun pile, not a sentence a reader can follow |
| psa | `psa-22-8`, `psa-95-7`, `psa-110-1`, `psa-78-24` · `principle` | "He trusted in God; let Him deliver Him now", "To day if ye will hear his voice", "The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool.", "Moses gave not the bread; my Father gives the true bread" | KJV spans carried unquoted inside the app sentence, in the same book that quotes its other KJV at length (`psa-45-7`, `psa-22-1`, `psa-2-1`, `psa-2-7`, `psa-40-6`, `psa-24-7`, `psa-16-10`, `psa-89-27` line 1). Not a glossary row and not my mandate to change; flagged because a reader cannot tell the KJV from the app's own words, and because it is the same exposure that produced the 22 gate failures at baseline |
| rev | `rev-15-3` · `principle` | "the two **covenants** sing one song of praise" | plural |
| neh | `neh-1-5` · `principle` | "The God who keeps his **covenant**…" + "**covenant** mercy" | bare, twice in one string |
| mat | `mat-26-28` · `principle` | "The **covenant** is sealed with blood" | bare; "the new **covenant**" later in the same string |
| heb | `heb-9-20` · `principle` | "Every **covenant** runs on blood" + `heb-10-16` "the **covenant**'s present reality" | bare |
| heb | `heb-10-30`, `heb-8-12`, `heb-8-8` | "**covenant**-breakers", "the new **covenant**" | bare |
| 2sa | `2sa-23-5` · `principle` | "an everlasting **covenant** … That **covenant** does not rest on how well David did" | quote + bare |
| jer | `jer-31-15`, `jer-31-33`, `jer-31-34`, `jer-32-40` | "a new **covenant**", "the better **covenant**", "in this **covenant**", "the everlasting **covenant**" | bare, though `jer-31-31`/`jer-32-38` in the same book do gloss it |
| 1ch | `1ch-16-22` · `principle` | "the **covenant** family and the men who speak for God" | **FIXED — see §4** |
| isa | `isa-49-22` · `principle` | "The nations carry the **covenant** family home." | same phrase, same book as the fix in §4 — left for the operator so the two move together |
| deu, heb, neh, hos | `deu-4-24`, `deu-6-4`, `heb-10-30`, `neh-1-5`, `hos-6-6` | "**covenant** love", "**covenant**-breakers", "**covenant** mercy", "**covenant** love" | this is *ḥesed*, not the glossary's `covenant` row; needs an operator ruling, not a sweep edit |

**Why I did not mass-fix this.** The glossary's `covenant` row renders the *institution* ("God's
binding promise"). "covenant love" (= steadfast love, ḥesed), "covenant family", "covenant line",
"covenant-breakers" and the plurals "two covenants" / "one covenant to the next" are different senses
that the locked singular phrase does not fit verbatim; substituting it there would change wording and
read badly. §4 records the two cases where the substitution is both prescribed and clean.

**W3 · `exo`, `ezk`, `col`, `2co` — `sanctuary`/`temple` glossed three ways.**
Glossary: `sanctuary → God's dwelling place / the temple service that pointed to him`.
- `ezk-28-12` · `terms[0].note`: "…in the heavenly **sanctuary** — **God's dwelling place**." ✔ exact.
- `ezk-37-27`, `ezk-47-12`: "God's **dwelling place**". ✔
- `2co-6-16`: "His **dwelling place** is now a people". ✔ (not the sanctuary sense)
- `col-2-17`: "the **temple service that pointed to him** was a silhouette". ✔ exact.
- `exo-12-46` (verify-only), `dan-8-14`, `heb-9-23`, `psa-68-18`, `isa-8-14`, `rev-22-11`: bare
  "sanctuary"/"holy place"/"temple".

The two exact renderings are used in `ezk` and `col`; the bare uses are mostly inside already-plain
sentences or KJV. Flagged, not fixed: no single book "deviates" in the item-1 sense.

**W4 · `php` · `php-2-15` · `principle`.** "The church is the **faithful few who carry light** in the
middle of the perversity." The book's own `reason` says it used the frozen rendering "in the form
'the faithful few'". Everywhere else the full rendering appears (`2ch-36-23`, `rev-19-10`,
`rev-12-17`, `rev-14-1`, `rev-16-1`, `rom-11-3`, `mic-7-7`, `1ki-19-18`, `1ki-19-10`). **Recommend
inserting "who are left"**, but not applied: `--min-share` rejects a 6-word insertion on a 20-word
string (2.2% new-word share), so `cp02RewriteQuality` cannot return PASS on it. Operator decision.

**W5 · `2th` vs `2jn` — Antichrist: one app, two spellings.**
`2th-2-8` · `principle`: "…is how the **anti-christ** meets his end." `2jn-1-7` · `principle`: "…that
denial marks him out as the **antichrist**" and "the spirit of **antichrist**". `anti-christ` is the
only hyphenated occurrence in the swept corpus (census: `anti-christ` 1, `antichrist` 2). The
recommended wording fix is `anti-christ` → `antichrist`, **not applied**: the hyphen is inherited from
the BEFORE string (`2th-2-8`'s source text already reads "the anti-christ's end"), so removing it adds
no new word and the string's only new word ("meets") falls under the 10% floor that
`cp02RewriteQuality` enforces — the same tool conflict as W4. Operator call: accept the shared
spelling, or waive the share threshold for a one-token repair.

**W6 · `jam` (and `mat`) — `neighbour` / `neighbor` in the app's own prose.**
The app's own prose uses US spelling consistently: `mat-5-43` "who counts as your **neighbor**",
`mat-19-18` "a mirror held up to the **neighbor**", `mat-22-37` "love for God and love for **neighbor**",
`jer-31-34` "No more **neighbor**-teaching". The British form appears in three places: `jam-2-8`
`principle` "Loving your **neighbour** is royal **behaviour**" and `jam-2-8` `title` "Love Your
**Neighbour** as Yourself" — app prose, in a book whose own text is otherwise the app's — and
`zec-8-16`, where it is inside the KJV quotation of Zech 8:16 and therefore must stay (I1). So: two
`jam` strings deviate from the app's spelling, and one `zec` string is correct as it stands. Wording
fix if the operator wants it: `neighbour` → `neighbor`, `behaviour` → `behavior` in `jam-2-8` only.
Not applied, because `jam-2-8`'s title is a `verifyOnly`-class rewrite whose delivered `after` is a
one-word command and a spelling change is a house-style decision, not a glossary row.

### 2.3 `citation` — nothing found

No citation token, quoted span, Hebrew/Greek run, transliteration, Strong's token or structural label
was found changed *by this read* across the 1,518 strings read. Two label observations are recorded:
`blocking-claim` B2 (Exodus's `First principle.`), and the pre-existing, already-repaired appendix/JSON
deltas in §6 (`zec`, `zep`, `mal`, `hag`, `dan`, `joh`, `heb`, `jer`, `col`, `rut`, `jos`, `jdg`,
`1th`, `2th`).

### 2.4 Bare special terms that are not glossary rows (wording, operator triage)

| Book | entryId · field | bare term | why it needs a ruling |
|---|---|---|---|
| jdg | `jdg-13-5` · `principle` | "he would be a **Nazarite**" | the only occurrence in the corpus and never defined; the appendix draft omits the word, the JSON has it |
| ecc | `ecc-9-5` · `principle` | "First principle: **conditional immortality**" | the only occurrence of the phrase in the corpus; a two-word abstraction inside a label's own sentence, where `psa-146-4` and `1ti-6-16` say the same thing in whole sentences |
| psa | `psa-69-25` · `principle`, `psa-69-22` · `principle` | "this psalm of **imprecation**", "The **imprecation** of the Sufferer" | the census glossary carries a row for it (`imprecation → prayer for judgment`) and `rom-11-9` uses that rendering ("Psalm 69's **imprecation** — its **prayer for judgment** — lands…"); `psa` never glosses it |
| 2co | `2co-10-17` · `principle` | "**lovingkindness**, judgment, and righteousness" | only occurrence in the swept corpus; an archaic KJV word sitting in app prose with no gloss |
| jam | `jam-2-8` · `principle` | "royal **behaviour**", "the **crown-law**" | `crown-law` is the only occurrence in the corpus; a coined compound next to the command it names |
| mat | `mat-15-4` · `principle` | "the **corban** tradition" | Hebrew term unexplained here; `mrk-7-10` says "A gift called **corban** cannot cancel the duty…", which explains it by use — the two books treat the same term differently |
| 1co | `1co-11-23` · `principle` | "the **ordinance of humility** (foot washing)" | explained in parentheses — acceptable, listed for completeness |
| heb | `heb-7-1` · `principle` | "the **type** appears suddenly" | the glossary row `type` prescribes "the earlier picture"; here the word is the subject of its own explanation, so the reader meets the term before the explanation |
| hos | `hos-6-2` | "The **intensive form** of khayah" | grammar jargon in a `terms[].note` |
| 2th | `2th-2-8` | "**anti-christ**" | see W5 |

---

## 3 · What I checked and found clean

| Check | Result |
|---|---|
| Frozen rendering actually used, counted over all 1,389 delivered AFTERs | `God's binding promise` **60** (18 books: deu 11 · isa 11 · chains 4 · rom 4 · 2co 3 · 2sa 3 · dan 3 · mat 3 · rev 3 · sng 3 · ezk 2 · jer 2 · luk 2 · php 2 · 1co 1 · 1pe 1 · gal 1 · hos 1) · `the faithful few who are left` **11** (rev 5 · chains 4 · 2ch 1 · rom 1) plus `the faithful few` 5 more (1ki 3 · rom 2) · `the price paid so sin can be forgiven` **3** (1co, isa, mat) · `the sacrifice that turns God's wrath away` **2** (1jn, rom) · `God declares a guilty person to be in the right` **3** (rom 2, jer 1) and the same rendering in the plural `declares guilty people to be in the right` **2** (tit, isa) · `God makes a person holy over time` **2** (1co, 2co) · `a real earlier event that points forward to a later one` **4** (1co 2, chains 2) · `the earlier picture` **5** (1co 2, chains 2, 2th 1) · `stands between God and us` **4** (1ti 2, deu 2) · `pleads for us` **2** (1jn, rom) · `how God saves people` **3** (dan, jer, jud) · `the last days` / `the end of the story` **25** (15 books + chains) · `the promised King` **22** (10 books) · `the Messiah` **30** (14 books) · `the Anointed One` **5** (dan 2, ezr 1, chains 2) |
| Glossed terms where the census found **no** locked rendering | `buying a person back at a price` 0 (the sense is carried as `buy people back` rom 1, `buys His people back` hos 1, `God buys people back` rev 1, `bought back` rev 3) · `what the passage shows about Jesus` 0 in the texts (both writers state it in their `reason` for `1co-10-4` and `php-2-10`) · `God appearing to someone` 0 (`deu-33-2` says "This poem shows God appearing") · `the temple service that pointed to him` 1 (`col-2-17`) · `God's dwelling place` 3 (`ezk` ×2, `2co` ×1) |
| `Messiah` / `the Anointed One` / `the promised King` | all three used, all for the same Person, and all inside the glossary's `Messianic` row: `dan-9-25`, `dan-9-26` and `ezr`'s seventy-weeks chain say "the Anointed One"; `rut-4-17`, `psa-110-1`, `1co-1-19`, `rev-2-27` say "the Messiah"; `deu-21-23`, `rom-15-12`, `isa-11-1`, `rut-4-17`, `sng-4-10` say "the promised King". `1sa-2-10` names the Hebrew (`Mashiach`) and glosses it ("his anointed King"), which is the pattern the glossary wants. No book invents a fourth title |
| `Satan` / `the devil` / `the serpent` | consistent by context: `Satan` in app prose (`mat-4-6`, `psa-91-11`, `zec-3-1`, `rom-16-20`, `rev-20-9`, `jer-4-23`), `the devil` inside quotations (`1jn-3-8`, `jud-1-9`), `the serpent` only for Genesis 3 / the bronze-serpent type (`rev-12-9`, `rev-20-2`, `gen-3-15`, `num-21-9`) |
| `LORD` / `Lord` | `LORD` for the tetragrammaton in app prose and KJV spans; `Lord` for `Adonai`/Christ; `Lord GOD` kept where the KJV has it (`isa-25-8`, `amo-3-7`, `zep-1-7`); no `Jehovah` anywhere in the swept corpus |
| `Israel` / `house of Israel` | `house of Israel` only inside KJV spans (`heb-8-8`, `jer-31-31`, `amo-9-9`, `zec-12-10`); app prose consistently says `Israel` |
| Never-write phrases introduced by this sweep | **0** — the 28 canon-wide hits are all in `gen`, `exo`, `zec` (verify-only) or in the two shared `chain:no-strange-doctrines` step connections (B1) |
| Structural labels | `First principle:` present and verbatim in every swept `principle` that had one, except the pre-existing Exodus punctuation (B2); `Textual proof:`, `NT:`, `Same-OT:`, `Test N:` all intact in the read sample |
| Quoted Scripture | no quoted span in the read sample was modernised; `Mat 16:18`, `Isa 42:6`, `Isa 53:5`, `Rev 16:1`, `Rev 14:12`, `Rev 22:11`, `Mal 3:8`, `Jer 23:5`, `Exod 12:46`, `Num 21:8` spans are byte-identical to the source strings, including KJV archaisms and the source's own ellipses |
| Clarify-gate failures | the 22 baseline failures named in CP-01 §1.6 were re-run through `checkProse` on their delivered AFTERs (`1co-11-23`, `1th-4-16`, `1ti-6-16`, `dan-9-24`, `deu-11-14`, `ezk-36-26`, `hos-6-3`, `isa-42-6`, `isa-9-6`, `jer-31-31`, `joh-1-14`, `jol-2-23`, `jol-3-16`, `mic-5-2`, `nam-1-9`, `rev-14-14`, `rev-14-7`, `rev-20-4`, `rev-22-11`, `rev-7-2`, `rom-3-21`, `rom-6-3`): **0 still failing** |
| Books read × fields | every book in the table in §1 contributed at least one `title` or `terms[].note`/`gloss` alongside its `principle` strings, except `oba`, `3jn`, `est`, `jdg`, `neh`, `lam` and `nam`, whose delivered rewrite sets contain `principle` strings only |

---

## 4 · Edits applied (both `wording`, both wording-only)

Authorised by CP-05: "for every finding of severity `wording` where the glossary prescribes exactly
one rendering and one book deviates, fix it in `docs/_work/<slug>_rewrites.json` by editing only that
draft's `after`." Two cases met all three conditions — prescribed rendering, single-book deviation,
and a substitution that changes no claim.

**E1 · `docs/_work/1ch_rewrites.json` · `1ch-16-22` · `principle`**
```
BEFORE (after): … First principle: the covenant family and the men who speak for God rest under God's own protection. …
AFTER  (after): … First principle: the family joined to God by his binding promise. The men who speak for God rest under God's own protection. …
```
Why: the glossary locks `covenant → God's binding promise` and `1ch` is the only book that renders
"the family bound to God by his promise" as the bare compound "**covenant family**". This draft's own
`reason` field already states the claim as "the family bound to him by his promise", so the edit
matches the writer's stated intent. The em-dash pile becomes two sentences, which is §1.7 rule 1.

**E2 · `docs/_work/php_rewrites.json` · `php-2-11` · `principle`**
```
BEFORE (after): … Lord is the covenant name, and it is confessed in the covenant oath.
AFTER  (after): … Lord is the name of God's binding promise, and every tongue confesses the oath of that promise.
```
Why: `php` is the only book that renders the frozen term as "the **covenant** name"/"the **covenant**
oath". The draft's own `reason` says "'covenant' is kept, since the sentence is about the name
itself" — that is exactly the case the glossary says must be glossed. "every tongue" is the string's
own words from the sentence before, so no claim is added.

Both edited strings, verified after the edit:

| proof | E1 | E2 |
|---|---|---|
| quoted spans byte-identical | ✔ (0 spans) | ✔ (0 spans) |
| citations preserved | ✔ (none present) | ✔ (none present) |
| digit runs preserved | ✔ | ✔ |
| labels preserved (`First principle:`) | ✔ | ✔ |
| clarity gate `checkProse` | **PASS (0 violations)**, longest sentence 13w | **PASS (0 violations)**, longest sentence 17w |
| `cp02RewriteQuality … --worklist` | **VERDICT: PASS — every draft adds new words** (1 Chronicles: 7 rewritten, 0 under-share; min share 31.8%) | **VERDICT: PASS** (Philippians: 15 rewritten, 0 under-share; min share 16.2%) |

Both books' appendices (`docs/CP-02_1CH_DRAFT.md`, `docs/CP-02_PHP_DRAFT.md`) still show the pre-edit
`AFTER`; they were **not** touched (out of scope — read-only except the two files authorised above and
this report). If the operator wants the appendices and the JSON to stay in lockstep, these two
`AFTER` blocks need the same two sentences copied in.

**Findings deliberately NOT fixed** (all `wording`, all needing an operator ruling, each with a
recommended fix phrasing in §2): W1 `rev-14-6`; W2's 34 bare-`covenant` strings; W3 sanctuary/temple
glosses; W4 `php-2-15` (the quality tool rejects the insertion); W5 `2th-2-8` spelling; W6
`neighbour`/`neighbor`; every row in §2.4.

---

## 5 · Not checked

- **Chain prose as a sweep target.** The 36 pillar chains (622 strings) were swept once, canon-wide
  (`docs/_work/chains_g*_rewrites.json`, `chains_rewrites.json`). I read the chain strings that the
  per-book worklists pull in for the books I sampled, but I did **not** read all 622 chain strings as
  their own corpus, and no chain string was edited.
- **`who`, `whoByRef`, `cumulativePrinciples`, `terms[].exposition` outside `gen`/`exo`/`zec`.** These
  fields exist only on the handful of golden samples; I read them for `gen`/`exo` and did not sweep
  them for the other books.
- **`sameTestamentLinks[].connection`** — 0 live strings (CP-01 §1.4).
- **Scripture-integrity work.** Quotation fidelity against the served canon (the 2 NOT-IN-CANON,
  4 LOOSE, 23 NO-CITATION spans and the 7 unquoted renderings in calibration §6) is an operator
  decision, not this read; I only confirmed that no quotation was *modernised* in my sample.
- **Applied live data.** This read is of the delivered drafts. I did not re-apply anything to
  `src/data/*.ts`, and I did not run the structural verifier (out of scope; CP-03's records stand).
- **Token/ledger accounting.** The 100% rewritten + equivalent + flagged == live-entry accounting and
  the EQUIVALENT reason mix are `docs/CP-05_TRIAGE_QUEUE.md`'s job, not this read's.
- **`gen` in full.** Genesis has 745 in-scope strings; I read 60, chosen densest-first. The never-write
  census over all 745 was machine-run, but the other ~685 live Genesis strings were not human-read.
- **Non-English orthography beyond the two cases in W6**, and capitalisation house style generally
  (e.g. "judgment"/"judgement" outside the `neighbour` pair) — not censused.

---

## 6 · Cross-check: are the appendices and the drafts the same artifact?

Read requirement was "the delivered draft appendices … at least 8 rewritten strings per book". I read
the `after` strings from `docs/_work/<slug>_rewrites.json` and proved they are the same artifact:

```
appendices scanned: 74 files · AFTER blocks extracted: 1,389
byte-identical to the matching rewrite-JSON `after`: 1,323
differ: 57 · appendix-only (not in any JSON): 9
```

All 66 differing/appendix-only strings sit in 14 books — `zec` 22, `dan` 10, `mal` 8, `zep` 8,
`hag` 5, `joh` 3, `col` 2, `rut` 2, `1th` 1, `2th` 1, `heb` 1, `jer` 1, `jos` 1, `jdg` 1 — and almost
every one is a **label**, not a reading: the appendix carries the pre-repair text, the JSON carries the
repaired text (`First principle:` restored where `docs/CP-03_LABEL_REPAIR.md` records it dropped, or
`First principle:` replaced by `Textual proof:` where the label had been renamed). Five are content
deltas rather than labels and are listed so the operator can see them: `rut-4-17` (the JSON adds "He
became the father of Jesse…"), `jos-24-32` (the JSON adds "The bones had set out with Israel in Exodus
13."), `jdg-13-5` (the JSON adds "he would be a Nazarite"), `1th-5-2` (comma vs full stop), `col-1-16`
(that string's date is its `field` key rename — appendix `terms[1].note`, JSON `terms[0].note` — plus
"makes the same point**:**" vs "point**.**"). The
repair record and this census agree, so **the sample size in §1 stands for both artifacts**, and the
JSON is the later revision in every case (labels are present in the JSON exactly where CP-03 says they
were restored).
