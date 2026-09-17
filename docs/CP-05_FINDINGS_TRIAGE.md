# CP-05 · Findings triage digest — `QUOTE-REVIEW` / `THEOLOGY-REVIEW`

Plan v2.0 · Stage B · Date: 2026-09-18 · **Read-only except this file.** Nothing in `docs/_work/`,
`src/` or any other document was modified. No `git` command was run.

Scope: every finding the sweep recorded in a draft's `reason` field with the `QUOTE-REVIEW` or
`THEOLOGY-REVIEW` marker, across the **71 delivered book rewrite files** (63 swept books; six of them
chunked into `_p1`/`_p2`/`_p3`) and the **7 chain rewrite files** (36 pillar chains). Evidence read:
`docs/_work/*_rewrites.json` (all 78 files), `docs/CP-05_CONSISTENCY_READ.md`
(so as not to duplicate its work), `docs/CP-01_FULL_CANON_BASELINE_V2.md` §3/§5/§6 (frozen glossary,
invariant I1, the deferred operator decision), `docs/COMPLETION_PLAN.md` (Stage A ledger),
`docs/CP-05_TRIAGE_QUEUE.md`, plan v2.0 §1.10/§1.11/§1.13, and the served KJV in
`public/books/<slug>.json` plus the live chain strings in `src/data/threadDetails.ts`.

**Non-duplication.** `CP-05_CONSISTENCY_READ.md` triages glossary/wording/citation issues (B1, B2,
W1–W6, §2.4) and states in its §5 that "Quotation fidelity against the served canon … is an operator
decision, not this read". Nothing in this digest repeats a finding from that document.

---

## 1 · What counts as a finding, and the population actually found

A **finding** is a draft whose `reason` contains `QUOTE-REVIEW` or `THEOLOGY-REVIEW` as an assertion.
Measured across all 78 rewrite files:

| Step | Count |
|---|---:|
| Marker occurrences found (`QUOTE-REVIEW` + `THEOLOGY-REVIEW`) | 162 |
| — explicitly **negated** (`No QUOTE-REVIEW`, `so no QUOTE-REVIEW`, `not a QUOTE-REVIEW`) → **not findings** | 8 |
| — positive marker occurrences | 154 |
| — duplicates: `chains_rewrites.json` is a verbatim copy of the concatenated `chains_gA..gF` files (38 records) | −38 |
| **Positive marker occurrences classified here** | **116** |
| Distinct app strings behind them (1ti-6-16 carries two findings; `zec`'s `chain:righteous-branch steps[4].title` record duplicates the chain-file record) | **114** |

Where the 116 sit:

| Bucket | Records | Markers | Notes |
|---|---:|---:|---|
| book files · `drafts` · book entries | 72 | 73 (72 Q + 1 T) | the operator's "77 judgement calls" are these |
| book files · `verifyOnly` · book entries | 2 | 2 Q | `dan-9-26 terms[0].note`, `rev-1-7 terms[0].note` |
| book files · chain-shaped records (`rom`, `zec` ×2) | 3 | 3 Q | `rom`'s is a duplicate of a chain record |
| chain files · `drafts` (4 unique) | 8 | 8 Q | 4 × 2 files |
| chain files · `verifyOnly` (34 unique) | 68 | 68 Q | 34 × 2 files |
| **Total** | | **116** | on 114 distinct strings |

**Reconciliation with the brief and with `COMPLETION_PLAN.md`.** The Stage A ledger records
**76 `QUOTE-REVIEW` + 1 `THEOLOGY-REVIEW`**. My book-side reason-field count is 72 QUOTE-REVIEW
markers + 1 THEOLOGY-REVIEW. The ledger total reconciles to within one record if these are added to
mine: `gal-3-16` and `1jn-3-8` (both reasons say *"no QUOTE-REVIEW is raised"* — the ledger counted
them anyway), `jud-1-14` (a canon difference stated in the reason with no marker), and `num-11-31`
(recorded in `COMPLETION_PLAN.md` only — its `reason` contains no marker and no canon-divergence
sentence at all). One record I count, `1pe-2-22`, appears not to be in the ledger's 1 Peter figure of 1.
The brief's "handful in the chain drafts" is exact for the chain `drafts` array (4 unique) and larger
for the chain population as a whole (38 unique).

**Records that mention a fidelity question WITHOUT the marker** — counted separately, not classified:
**8 negated** records (`1jn-3-8`, `dan-8-17` title, `dan-12-4`, `gal-1-8`, `gal-3-16` title, `neh-1-5`
title, `rev-7-2`, `rev-22-11`) and **18 unmarked** records that do assert a canon difference:

```
1pe-4-18 title · 2co-3-3 principle · 2co-5-21 principle · ecc chain:state-of-dead-immortality
steps[2].title · jon-4-2 title · jud-1-14 principle · luk-24-44 principle · rev-1-5 principle ·
rev-5-9 principle · rev-5-5 principle (verify-only) · rev-14-6 principle · rev-12-10 principle ·
rev-21-1 principle · rev-22-4 principle · rev-21-3 principle · chain:day-of-the-lord steps[4].title ·
chain:day-of-the-lord steps[10].title · chain:provided-lamb steps[7].title
```

By the same key they would fall 16 into `compressed-rendering`, 1 into `archaic-modernised`
(`chain:day-of-the-lord steps[10].title`, `has` for `is`) and 1 into `pronoun-capitalisation`
(`1pe-4-18 title`, capitalised `If`). They are excluded from the class tables so the operator's 77 are
not inflated. A looser keyword sweep (any `canon` / `KJV reads` / `verbatim` language) returns 67
further records, but almost all of those assert a **match**, not a divergence; I did not classify them.

---

## 2 · Class definitions

One class per finding. The key is applied in the order below; the class is the *first* line that
matches, so a compound finding lands in the most consequential class and the other differences are
named in the note column.

1. **`mixed-text-form`** — the span's words are not the served KJV's because they come from a different
   text form: a Septuagint reading, a NT author's own Greek underlying the English, another
   translation, or a blend of two verses such that no single served-KJV verse contains the span.
2. **`archaic-modernised`** — a word in the span is the modern equivalent of a KJV archaic form or
   spelling (`trump`→`trumpet`, `which`→`who`, `Whoso`→`Whoever`, `thee/thou/thy/thine`→`you/your`,
   `hath`→`has`, `shew`→`show`, `bare`→`bore`, `meat`→`food`, `honour`→`honor`, `is come`→`has come`,
   `new testament`→`New Covenant`, `for ever`→`forever`, `dayspring`→`sunrise`), or an abbreviation was
   expanded.
3. **`compressed-rendering`** — the span omits, adds, reorders or substitutes ordinary words — a
   shortened, reordered or paraphrased rendering rather than the verse's wording — **except** where the
   omission is marked with an ellipsis (that is class 5).
4. **`pronoun-capitalisation`** — every word matches the served KJV in the same order; only the case of
   a divine pronoun (`My`, `His`, `Him`, `Me`, `Thee`, `Us`, `Who`) or of the span's first word differs.
5. **`punctuation`** — no word and no letter differs; only punctuation differs, including an
   ellipsis-marked trim (which CP plan §1.10 C3 explicitly sanctions: *"trims only with ellipsis"*) and
   where a full stop sits against a closing quote.
6. **`other`** — fits none of the above; the note says precisely why.

**Invariant I1 is the boundary for every ruling below.** A quotation is never modernised, never
"restored" to canon, and never expanded (plan §1.13; `CP-01_FULL_CANON_BASELINE_V2.md` §6). So the only
I1-compliant disposals are (a) leave byte-identical and record, (b) a punctuation-only normalisation
inside the quotation that adds or moves no word, and (c) record the string as verify-only.

Class totals (the 116 occurrences; the 117th row in §3 is the one duplicate record):

| Class | Findings | Book strings | Chain strings | Books/chains touched |
|---|---:|---:|---:|---|
| `compressed-rendering` | 66 | 46 | 20 | 31 books · 11 chains |
| `archaic-modernised` | 25 | 12 | 13 | 9 books · 9 chains |
| `pronoun-capitalisation` | 10 | 6 | 4 | 6 books · 4 chains |
| `mixed-text-form` | 10 | 8 | 2 | 6 books · 2 chains |
| `punctuation` | 3 | 3 | 0 | 1 book |
| `other` | 2 | 2 | 0 | 2 books |
| **Total** | **116** | **77** | **39** | 33 book files + 6 chain files |

---

## 3 · `mixed-text-form` — 10 findings (9 distinct strings)

| entryId | field | book | what the source says | what the served KJV says | note |
|---|---|---|---|---|---|
| `1pe-2-6` | `principle` | 1 Peter | `"Behold, I lay in Sion a chief corner stone, elect, precious."` | 1 Pet 2:6 `Wherefore also it is contained in the scripture, Behold, I lay in Sion a chief corner stone, elect, precious: and he that believeth on him shall not be confounded.` | Span is byte-identical to the verse's first clause; the record flags that Peter's quotation follows the Isaiah 28:16 form (`Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone`). Quoted; trim **not** ellipsis-marked. |
| `gal-3-28` | `principle` | Galatians | `whosoever shall call on the name of the LORD` (the entry's own `fulfillmentKeywords`, Joel 2:32) | Joel 2:32 `…that whosoever shall call on the name of the LORD shall be delivered…` | Record says the phrase "does not match any single verse word for word" but never names *which* span "that phrase" is; the example it quotes **is** KJV verbatim. Referent ambiguous — see §9. |
| `heb-13-6` | `principle` | Hebrews | `“The Lord is my helper, and I will not fear.”` | Heb 13:6 `…The Lord is my helper, and I will not fear what man shall do unto me.` / Ps 118:6 `The LORD is on my side; I will not fear…` | First clause is Heb 13:6's, second is Ps 118:6's; no single verse contains both. Quoted with a citation to Psalm 118 in the same string. |
| `luk-18-8` | `principle` | Luke | `God will avenge His elect speedily` … `the Son of man asks whether faith will remain` | Luke 18:7 `And shall not God avenge his own elect…` / 18:8 `I tell you that he will avenge them speedily. Nevertheless when the Son of man cometh, shall he find faith on the earth?` | Blends 18:7 and 18:8 into one clause and paraphrases 18:8's question. Unquoted. |
| `mat-1-23` | `principle` | Matthew | `a virgin shall bear a son, and they shall call his name Emmanuel` | Matt 1:23 `Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel…` / Isa 7:14 `a virgin shall conceive, and bear a son` | The record's own words: "a mixed text form". Second half is Matt 1:23's; first half matches neither verse. Unquoted. |
| `mat-24-30` | `terms[0].note` | Matthew | `Dan 7:13 LXX — the same coming on the clouds` | Dan 7:13 `…one like the Son of man came with the clouds of heaven…` | The note carries its own `LXX` marker, which is what accounts for `on the clouds` against the KJV's `with the clouds`. Unquoted. |
| `dan-9-26` | `terms[0].note` | Daniel | `cut off from his people` (recorded as the Isa 53:8 LXX reading) | Isa 53:8 `…for he was cut off out of the land of the living…` | Verify-only record (no `after`); the record names the LXX as the source of the phrase and leaves it byte-identical. |
| `chain:state-of-dead-immortality` `steps[5].connection` | Pillar chains (C) | — | `"Our friend Lazarus sleepeth... Lazarus is dead."` | John 11:11 `Our friend Lazarus sleepeth; but I go, that I may awake him out of sleep` / 11:14 `Lazarus is dead` | Quoted; the ellipsis joins two verses, so it is not one continuous KJV text. The surrounding prose was rewritten; the quotation was not. |
| `chain:great-controversy-arc` `steps[0].connection` | Pillar chains (C) | — | `"I will ascend above the stars... I will be like the most High."` | Isa 14:13 `I will exalt my throne above the stars of God` / 14:14 `I will ascend above the heights of the clouds; I will be like the most High` | `I will ascend above the stars` is not KJV text; the ellipsis joins clauses from two verses. Quoted, unaltered. |
| *(duplicate record)* `chain:great-controversy-arc` `steps[0].connection` | `verifyOnly` | Romans file | same span | same | `rom_rewrites.json` re-records the same finding on the same string ("left byte-identical as instructed"). Not a second string. |

**RULING RECOMMENDATION — (a) leave byte-identical and record. Cost: 0 strings change, 0 books.**
I1 forecloses the only alternatives: the words cannot be modernised and cannot be "restored" to a
single verse, and expanding a joined quotation would insert words the app never presented as Scripture.
The two chain strings are the only ones where the *quotation itself* is non-canonical; for them the
alternative disposal is to drop the quotation marks, which would change the app's own punctuation and
still leave the words non-canonical, so it buys nothing. Record class-wide and move on.

---

## 4 · `pronoun-capitalisation` — 10 findings (10 distinct strings)

| entryId | field | book | what the source says | what the served KJV says | note |
|---|---|---|---|---|---|
| `1co-11-23` | `principle` | 1 Corinthians | `“…the same night in which He was betrayed took bread: and when He had given thanks… this is My body… this do in remembrance of Me.”` | 1 Cor 11:23-24 `…the same night in which he was betrayed took bread: And when he had given thanks, he brake it, and said, Take, eat: this is my body… this do in remembrance of me.` | Whole verses quoted; every word identical, capitals only. The largest quoted run in the class. |
| `1ti-6-16` (finding 1 of 2) | `principle` | 1 Timothy | `"who only hath immortality, dwelling in the light which no man can approach unto."` | 1 Tim 6:16 `Who only hath immortality, dwelling in the light which no man can approach unto; whom no man hath seen, nor can see…` | Lower-cased leading `who` **and** the verse's semicolon closed with a full stop; quoted trim. The same string carries a `compressed-rendering` finding — see §9. |
| `amo-3-7` | `terms[0].note` | Amos | `Surely the Lord GOD will do nothing, but He revealeth His secret unto His servants the prophets` | Amos 3:7 `Surely the Lord GOD will do nothing, but he revealeth his secret unto his servants the prophets.` | `He`/`His` capitalised. The span lives in the entry's `principle`; this note is where the finding is recorded. Unquoted. |
| `ecc-9-5` | `principle` | Ecclesiastes | `"his breath goeth forth... in that very day his thoughts perish"` | Ps 146:4 `His breath goeth forth, he returneth to his earth; in that very day his thoughts perish.` | Only the first letter differs (`h`→`H`, the app's sentence case at the start of a mid-sentence quotation); the ellipsis stands for the omitted clause. Sits in the conditional-immortality string — see §9. |
| `joh-17-21` | `principle` | John | `"That they all may be one; as Thou, Father, art in Me, and I in Thee, that they also may be one in Us"` | John 17:21 `That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe…` | Every word identical against `public/books/joh.json`; capitals only. The record calls this a "text form" mismatch, which the canon check does not support. |
| `rom-6-3` | `principle` | Romans | `“…were baptized into His death? Therefore we are buried with Him by baptism into death…”` | Rom 6:3-4 `…were baptized into his death? Therefore we are buried with him by baptism into death…` | Whole verses quoted; capitals only. |
| `chain:suffering-servant-pierced` `steps[6].title` | Pillar chains (B) | — | `Awake, O sword, against My Shepherd` | Zech 13:7 `Awake, O sword, against my shepherd…` | Capital only; the title is not quoted, so no canonical claim is made for it. |
| `chain:righteous-branch` `steps[4].title` | Pillar chains (F) | — | `The Righteous Branch, the LORD Our Righteousness` | Jer 23:6 `…this is his name whereby he shall be called, THE LORD OUR RIGHTEOUSNESS.` | The app title-cases `Our` inside the KJV's full-capital phrase. The `zec` book pass re-recorded this and *did* lower-case it in its own draft — see §9. |
| `chain:righteous-branch` `steps[6].title` | Pillar chains (F) | — | `My Servant the BRANCH` | Zech 3:8 `…behold, I will bring forth my servant the BRANCH.` | Same class and same decision as `steps[4].title`; the chain pass keeps both or changes neither. |
| `chain:three-angels-seal-mark` `steps[8].title` | Pillar chains (F) | — | `The Loud Cry: "Come out of her, My people"` | Rev 18:4 `…Come out of her, my people, that ye be not partakers of her sins…` | Only the capital on `My` differs. The only quoted span in group F. |

**RULING RECOMMENDATION — (a) leave byte-identical and record, plus a one-line house-style note.
Cost: 0 strings change, 0 books.** Capitalised divine pronouns are the app's standing style, not a
fidelity defect, and I1 forbids "restoring" the case. The note matters because it is the class an
operator is most likely to reverse: if the case ever *is* normalised to canon, the cost is exactly
10 strings — `1co-11-23`, `1ti-6-16`, `amo-3-7`, `ecc-9-5`, `joh-17-21`, `rom-6-3` (6 books: 1
Corinthians, 1 Timothy, Amos, Ecclesiastes, John, Romans) and the four chain titles above (chains
B, F ×2, and the Revelation 18:4 title).

---

## 5 · `compressed-rendering` — 66 findings

The largest class (57% of the population). In every case the app uses a KJV-shaped clause as the
subject of its own sentence: the words are shortened, reordered or replaced, so the clause is a
rendering of the verse, not the verse. Book-side findings first, then chain-side.

### 5.1 Book-side (46)

| entryId | field | book | what the source says | what the served KJV says | note |
|---|---|---|---|---|---|
| `1ki-2-2` | `principle` | 1 Kings | `he fulfilled his course` | 2 Tim 4:7 `I have finished my course` | Folds the verse into indirect speech; person and verb both change. Unquoted. |
| `1pe-2-22` | `principle` | 1 Peter | `the sinless mouth` | 1 Pet 2:22 `Who did no sin, neither was guile found in his mouth` | **Stale record** — the phrase is not in the delivered `after`. See §9. |
| `1ti-6-16` (finding 2 of 2) | `principle` | 1 Timothy | `he that hath not the Son hath not life` | 1 John 5:12 `…he that hath not the Son of God hath not life.` | Drops `of God`. Unquoted; same string as the capitalisation finding. |
| `2pe-3-10` | `principle` | 2 Peter | `Heavens pass with noise` / `earth burned` | 2 Pet 3:10 `the heavens shall pass away with a great noise` / `the earth also and the works that are therein shall be burned up` | Two loose renderings the record keeps out of quotation marks on purpose. |
| `act-4-26` | `principle` | Acts | `kings stood up, rulers gathered` | Acts 4:26 `The kings of the earth stood up, and the rulers were gathered together`; Ps 2:2 `The kings of the earth set themselves, and the rulers take counsel together` | Quoted, but the words are the app's compression of Acts 4:26. |
| `col-3-11` | `principle` | Colossians | `Christ is the all in all` | Col 3:11 `but Christ is all, and in all` | Reordered. Unquoted. |
| `col-2-12` | `principle` | Colossians | `faith in God's operation` | Col 2:12 `through the faith of the operation of God` | Reordered possessive. Unquoted. |
| `col-1-18` | `principle` | Colossians | `Beginning and firstborn, so that in all things He has preeminence` | Col 1:18 `who is the beginning, the firstborn from the dead; that in all things he might have the preeminence` | Drops `who is`, `from the dead`; also capitalises `He`. Unquoted. |
| `col-3-4` | `principle` | Colossians | `saints appear with Him in glory` | Col 3:4 `then shall ye also appear with him in glory` | Replaces `ye` with `saints` and drops `then shall … also`. |
| `col-2-11` | `principle` | Colossians | `The putting off of the body of sins by Christ's circumcision` | Col 2:11 `in putting off the body of the sins of the flesh by the circumcision of Christ` | Drops `of the flesh`. |
| `col-1-16` | `principle` | Colossians | `By Him all things were created` | Col 1:16 `For by him were all things created` | Word order only. |
| `deu-18-15` | `principle` | Deuteronomy | `"Hear Him!"` | Matt 17:5 `hear ye him.` | Drops `ye`, adds `!`, capitalises `Him`. Class boundary with §4 — see §9. |
| `eph-2-20` | `principle` | Ephesians | `Built on the foundation of the apostles and prophets` | Eph 2:20 `And are built upon the foundation of the apostles and prophets` | Quoted; `Built on` for `And are built upon`. |
| `gal-4-30` | `principle` | Galatians | `the bondman shall not inherit` | Gal 4:30 `the son of the bondwoman shall not be heir with the son of the freewoman` | Compressed to a clause. Unquoted. |
| `heb-11-5` | `principle` | Hebrews | `“Enoch walked with God, and he was not; for God took him.”` | Gen 5:24 `And Enoch walked with God: and he was not; for God took him.` | Drops the leading `And` and the colon; the words are Genesis's, quoted inside a Hebrews 11:5 entry (Heb 11:5 itself reads `was translated`). Quoted. |
| `isa-9-7` | `principle` | Isaiah | `“the zeal of the LORD will perform it.”` | Isa 9:7 `The zeal of the LORD of hosts will perform this.` | Drops `of hosts`; `it` for `this`. Quoted. |
| `jam-1-12` | `principle` | James | `The tried receive the crown of life, promised to lovers of God` | James 1:12 `Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him.` | Whole-verse compression. Unquoted. |
| `jam-5-11` | `principle` | James | `shows pitifulness and mercy` | James 5:11 `…the Lord is very pitiful, and of tender mercy.` | Noun for adjective. Unquoted. |
| `jon-4-2` | `principle` | Jonah | `gracious, merciful, slow to anger, repenting of evil` | Jonah 4:2 `a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil` | Drops `of great kindness`; reworks the last clause. Unquoted. |
| `jon-4-11` | `principle` | Jonah | `Sixscore thousand … who cannot discern their right hand` | Jonah 4:11 `more than sixscore thousand persons that cannot discern between their right hand and their left hand` | Compressed; the app adds `people` for a subject. Unquoted. |
| `luk-18-31` | `principle` | Luke | `everything written by the prophets concerning the Son of man shall be accomplished` | Luke 18:31 `all things that are written by the prophets concerning the Son of man shall be accomplished` | Recorded as "a shortened form". Unquoted. |
| `luk-22-37` | `principle` | Luke | `numbered with criminals` | Luke 22:37 / Isa 53:12 `he was reckoned among the transgressors` | Unquoted. |
| `luk-1-76` | `principle` | Luke | `going before the Lord to prepare His ways` | Luke 1:76 `thou shalt go before the face of the Lord to prepare his ways` | Unquoted. |
| `luk-24-46` | `principle` | Luke | `Thus it is written` … `the third day` … `repentance and remission` … `preached among all nations` | Luke 24:46-47 `thus it behoved Christ to suffer, and to rise from the dead the third day: And that repentance and remission of sins should be preached in his name among all nations` | The carried words are byte-identical; the list around them is a compression. |
| `luk-1-69` | `principle` | Luke | `an horn of salvation in the house of his servant David` | Luke 1:69 `an horn of salvation for us in the house of his servant David` | Drops `for us`. Unquoted. |
| `luk-20-17` | `principle` | Luke | `the rejected Stone becomes the head of the corner` | Luke 20:17 `The stone which the builders rejected, the same is become the head of the corner` | Unquoted. |
| `luk-4-4` | `principle` | Luke | `man lives by every word of God` | Luke 4:4 `man shall not live by bread alone, but by every word of God` | Unquoted. |
| `mal-4-5` | `principle` | Malachi | `turn the hearts of fathers to their children, and the hearts of children to their fathers` | Mal 4:6 `And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers` | Plural/singular and word order. Unquoted. |
| `mat-12-18` | `principle` | Matthew | `My beloved, in whom My soul is well pleased; He shall shew judgment to the Gentiles.` | Matt 12:18 `Behold my servant, whom I have chosen; my beloved, in whom my soul is well pleased: I will put my spirit upon him, and he shall shew judgment to the Gentiles.` | Omits the opening and the middle clause without an ellipsis; capitalises `My`/`He`; `;` for `:`. One of the three unmarked-trins — see §9. |
| `mat-2-6` | `principle` | Matthew | `whose goings forth are from everlasting` | Micah 5:2 `whose goings forth have been from of old, from everlasting` | Drops `have been from of old`. Unquoted. |
| `mic-6-8` | `principle` | Micah | `Do justly, love mercy, walk humbly with thy God.` | Micah 6:8 `to do justly, and to love mercy, and to walk humbly with thy God` | Connectives dropped. Unquoted. |
| `mrk-2-27` | `principle` | Mark | `the Son of man is Lord also of it` | Mark 2:28 `Therefore the Son of man is Lord also of the sabbath.` | `it` for `the sabbath`. Unquoted. |
| `mrk-12-29` | `principle` | Mark | `heart, soul, mind, strength` | Mark 12:30 `with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength` | Compressed list. Unquoted. |
| `mrk-13-26` | `principle` | Mark | `in the clouds with power and great glory` | Mark 13:26 `coming in the clouds with great power and glory` | Follows Matthew 24:30's order. Unquoted. |
| `mrk-9-12` | `principle` | Mark | `Elijah restores first` / `the Son of man suffers and is set at nought` | Mark 9:12 `Elias verily cometh first, and restoreth all things … he must suffer many things, and be set at nought` | Two clauses, both compressed. Unquoted. |
| `mrk-13-14` | `principle` | Mark | `the standing desecration in the holy place` | Mark 13:14 `the abomination of desolation, spoken of by Daniel the prophet, standing where it ought not` | Unquoted. |
| `mrk-7-6` | `principle` | Mark | `lips near, heart far` | Mark 7:6 `This people honoureth me with their lips, but their heart is far from me` | Unquoted. |
| `mrk-14-27` | `principle` | Mark | `smite the shepherd, and the sheep scatter` | Mark 14:27 / Zech 13:7 `I will smite the shepherd, and the sheep shall be scattered` | Unquoted. |
| `mrk-12-36` | `principle` | Mark | `his Lord enthroned till enemies become a footstool` | Mark 12:36 `The LORD said unto my Lord, Sit thou on my right hand, till I make thine enemies thy footstool` | Unquoted. |
| `nam-1-3` | `principle` | Nahum | `He makes the whirlwind His way. The clouds are the dust of His feet.` | Nahum 1:3 `the LORD hath his way in the whirlwind and in the storm, and the clouds are the dust of his feet` | The second sentence is the KJV clause re-ordered; the first drops the storm. |
| `neh-9-33` | `title` | Nehemiah | `"Thou art just in all that is brought upon us"` | Neh 9:33 `Howbeit thou art just in all that is brought upon us` | Drops `Howbeit`. Quoted. |
| `php-3-9` | `principle` | Philippians | `Righteousness through the faith of Christ, by God` | Phil 3:9 `that which is through the faith of Christ, the righteousness which is of God by faith` | Compressed to a title-like clause. Unquoted. |
| `rev-14-7` | `principle` | Revelation | `Fear God, and give glory to Him; for the hour of His judgment is come; worship Him that made heaven…` | Rev 14:7 `Fear God, and give glory to him; for the hour of his judgment is come: and worship him that made heaven…` | Missing `and` (not ellipsis-marked), `;` for `:`, `Him` capitalised twice. Unquoted. |
| `rev-14-14` | `principle` | Revelation | `they shall see the Son of man coming in the clouds with power and great glory` | Matt 24:30 `…coming in the clouds of heaven with power and great glory.` | Drops `of heaven`. Unquoted. |
| `rev-20-4` | `principle` | Revelation | `the rest of the dead live not again until the thousand years are finished` | Rev 20:5 `But the rest of the dead lived not again until the thousand years were finished.` | `live` for `lived`, `are` for `were`. Unquoted. |
| `rev-1-7` | `terms[0].note` | Revelation | `they shall look on me whom they have pierced` | Zech 12:10 `and they shall look upon me whom they have pierced` | Drops `and` and `upon`. Verify-only record (no `after`). |

### 5.2 Chain-side (20)

| entryId | field | book | what the source says | what the served KJV says | note |
|---|---|---|---|---|---|
| `chain:day-of-the-lord` `steps[5].connection` | Pillar chains (D) | — | `"This is that spoken by Joel"` (the step's own **title**; the connection annotates it) | Acts 2:16 `But this is that which was spoken by the prophet Joel` | The record sits on the connection but the span is the title's — see §9. |
| `chain:shepherd-provision` `steps[0].connection` | Pillar chains (E) | — | `Abel keeper of sheep; Jabal father of herdsmen` (the step's own **title**) | Gen 4:2 `And Abel was a keeper of sheep` / Gen 4:20 `he was the father of such as dwell in tents, and of such as have cattle` | Same shape: finding on the connection, span in the title. See §9. |
| `chain:resurrection-remnant` `steps[0].title` | Pillar chains (A) | — | `In my flesh I shall see God` | Job 19:26 `yet in my flesh shall I see God` | One-word reorder (`In my flesh I shall`). |
| `chain:resurrection-remnant` `steps[1].title` | Pillar chains (A) | — | `Thou wilt not leave my soul in Sheol` | Ps 16:10 `For thou wilt not leave my soul in hell` | `Sheol` substituted for the KJV's `hell`. |
| `chain:resurrection-remnant` `steps[4].title` | Pillar chains (A) | — | `They that sleep in dust awake` | Dan 12:2 `many of them that sleep in the dust of the earth shall awake` | Compression, not a quotation. |
| `chain:resurrection-remnant` `steps[8].title` | Pillar chains (A) | — | `Apostles preach Christ risen without corruption` | Acts 2:31 / 13:37 `neither his flesh did see corruption` | `without corruption` for the clause. |
| `chain:joseph-type` `steps[5].title` | Pillar chains (A) | — | `You meant evil; God meant good` | Gen 50:20 `ye thought evil against me; but God meant it unto good` | Drops `against me`, `it unto`; `You` for `ye`. |
| `chain:millennium-earth-made-new` `steps[2].title` | Pillar chains (A) | — | `High ones and kings gathered in prison, visited after many days` | Isa 24:22 `shall be shut up in the prison, and after many days shall they be visited` | Summary, not a quotation. |
| `chain:kinsman-redeemer` `steps[5].title` | Pillar chains (A) | — | `Born of a woman to redeem those under the law` | Gal 4:4-5 `made of a woman, made under the law, To redeem them that were under the law` | `Born` for `made`. |
| `chain:light-word` `steps[7].title` | Pillar chains (A) | — | `Light of the knowledge of God in Christ` | 2 Cor 4:6 `the light of the knowledge of the glory of God in the face of Jesus Christ` | Shortened to `of God in Christ`. |
| `chain:suffering-servant-pierced` `steps[0].title` | Pillar chains (B) | — | `My God, why hast Thou forsaken Me?` | Ps 22:1 `My God, my God, why hast thou forsaken me?` | Drops the repeated `my God`; capitalises. |
| `chain:suffering-servant-pierced` `steps[1].title` | Pillar chains (B) | — | `They pierced My hands and feet; cast lots for garments` | Ps 22:16 `they pierced my hands and my feet` / 22:18 `cast lots upon my vesture` | Drops `my`, `upon`; joins two verses. |
| `chain:suffering-servant-pierced` `steps[4].title` | Pillar chains (B) | — | `Wounded for our transgressions, healed by His stripes` | Isa 53:5 `But he was wounded for our transgressions, he was bruised for our iniquities: … and with his stripes we are healed` | Drops `he was`, `and with`. |
| `chain:suffering-servant-pierced` `steps[5].title` | Pillar chains (B) | — | `Look on Me whom they have pierced` | Zech 12:10 `they shall look upon me whom they have pierced` | Drops `upon`; capitalises `Me`. |
| `chain:suffering-servant-pierced` `steps[10].title` | Pillar chains (B) | — | `His own self bare our sins on the tree` | 1 Pet 2:24 `Who his own self bare our sins in his own body on the tree` | Compresses `in his own body` to `on the tree`. |
| `chain:suffering-servant-pierced` `steps[11].title` | Pillar chains (B) | — | `Every eye shall see Him, and they who pierced Him` | Rev 1:7 `every eye shall see him, and they also which pierced him` | Drops `also`; `who` for `which`. |
| `chain:tree-life-access` `steps[4].title` | Pillar chains (B) | — | `Who may ascend the hill of the LORD?` | Ps 24:3 `Who shall ascend into the hill of the LORD?` | Drops `shall` and `into`. |
| `chain:new-covenant-heart` `steps[8].title` | Pillar chains (B) | — | `Their sins and iniquities I will remember no more` | Heb 10:17 `And their sins and iniquities will I remember no more.` | `I will` for `will I`. |
| `chain:image-dominion` `steps[6].title` | Pillar chains (B) | — | `Image of the invisible God` | Col 1:15 `Who is the image of the invisible God` | Drops `Who is`. |
| `chain:day-of-the-lord` `steps[5].title` | Pillar chains (D) | — | `Peter at Pentecost: "This is that spoken by Joel"` | Acts 2:16 `But this is that which was spoken by the prophet Joel` | Verify-only record of the same finding as the connection record above. |

**RULING RECOMMENDATION — (a) leave byte-identical and record. Cost: 0 strings change, 0 books.**
Two alternatives are both worse and both forbidden or pointless: converting these clauses into
quotations would present non-KJV words as Scripture (I1), and completing them from canon would be the
"restoration" I1 forbids. The one thing worth doing is bookkeeping, not prose: for 34 of the 39
chain-side occurrences the string is already in `verifyOnly`, and for the other 5 the flagged span is
left byte-identical while only surrounding prose changed — so ruling (c) "verify-only" for the chain
population changes **no text**, it only ratifies the existing bucket. The two exceptions to ratify are
the two chain `drafts` records that annotate a *different* string than their own field (§9, item 11).

---

## 6 · `archaic-modernised` — 25 findings

| entryId | field | book | what the source says | what the served KJV says | note |
|---|---|---|---|---|---|
| `1th-4-16` | `principle` | 1 Thessalonians | `with the trumpet of God` | 1 Thess 4:16 `and with the trump of God` | `trump`→`trumpet`. Unquoted. |
| `1th-4-17` | `principle` | 1 Thessalonians | `we who are alive and remain` | 1 Thess 4:17 `Then we which are alive and remain` | `which`→`who`. Unquoted. |
| `col-2-15` | `principle` | Colossians | `He spoiled principalities and powers, making a show of them openly` | Col 2:15 `And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it.` | `shew`→`show`; also drops `And having`. Unquoted. |
| `ezk-37-12` | `principle` | Ezekiel | `"…and put My Spirit in you, and you shall live."` | Ezek 37:14 `And shall put my spirit in you, and ye shall live` | `ye`→`you`; `My` capitalised; ellipsis marks the trims. Quoted. The only quoted string in this class. |
| `gal-4-4` | `principle` | Galatians | `When the fullness of time came` | Gal 4:4 `But when the fulness of the time was come` | `fulness`→`fullness`, `was come`→`came`, connective dropped. Unquoted. |
| `job-19-25` | `principle` | Job | `"and He shall stand at the last upon the earth"` | Job 19:25 `and that he shall stand at the latter day upon the earth` | `latter day`→`the last`; the record also flags Job 19:26. Quoted. |
| `luk-4-12` | `principle` | Luke | `throw Yourself down` | Luke 4:9 `cast thyself down from hence` | `cast thyself`→`throw Yourself`. Unquoted. |
| `mat-8-17` | `principle` | Matthew | `He bore our sicknesses` | Matt 8:17 `and bare our sicknesses` | `bare`→`bore`. Unquoted. |
| `mat-4-16` | `principle` | Matthew | `light sprung up` | Matt 4:16 `light is sprung up` | Verb form modernised. Unquoted. |
| `rev-12-17` | `principle` | Revelation | `if you love me, keep my commandments` | John 14:15 `If ye love me, keep my commandments.` | `ye`→`you`; initial `If` lower-cased. Unquoted. |
| `rev-14-12` | `principle` | Revelation | `if you love me, keep my commandments` | John 14:15 as above | The same clause recorded a second time, against a second string. Unquoted. |
| `zec` `chain:righteous-branch` `steps[8].title` | `drafts` (Zechariah file) | — | `Sunrise from on high (Anatolē / Tsemach)` *(the delivered `after`)* | Luke 1:78 `the dayspring from on high hath visited us` | The draft **performed** the substitution the chain pass then refused — see §9. |
| `chain:suffering-servant-pierced` `steps[2].title` | Pillar chains (B) | — | `Gall for food, vinegar for thirst` | Ps 69:21 `They gave me also gall for my meat; and in my thirst they gave me vinegar to drink.` | `meat`→`food`; also compresses. |
| `chain:new-covenant-heart` `steps[0].title` | Pillar chains (B) | — | `The LORD will circumcise your heart` | Deut 30:6 `And the LORD thy God will circumcise thine heart` | `thine`→`your`; drops `And`/`thy God`. |
| `chain:new-covenant-heart` `steps[3].title` | Pillar chains (B) | — | `This cup is the New Covenant in My blood` | Luke 22:20 `This cup is the new testament in my blood` | `new testament`→`New Covenant`; `My` capitalised. |
| `chain:image-dominion` `steps[2].title` | Pillar chains (B) | — | `Whoever sheds man's blood` | Gen 9:6 `Whoso sheddeth man's blood` | `Whoso`→`Whoever`, `sheddeth`→`sheds`. |
| `chain:image-dominion` `steps[3].title` | Pillar chains (B) | — | `Man crowned with glory and honor` | Ps 8:5 `and hast crowned him with glory and honour` | `honour`→`honor`; also drops `hast … him`. |
| `chain:one-flesh-bride` `steps[2].title` | Pillar chains (B) | — | `Your Maker is your Husband` | Isa 54:5 `For thy Maker is thine husband` | `thy`/`thine`→`your`. |
| `chain:one-flesh-bride` `steps[3].title` | Pillar chains (B) | — | `I will betroth you in righteousness` | Hos 2:19 `I will betroth thee unto me in righteousness` | `thee unto me`→`you`. |
| `chain:one-flesh-bride` `steps[4].title` | Pillar chains (B) | — | `I entered into covenant with you` | Ezek 16:8 `and entered into a covenant with thee` | `thee`→`you`; article dropped. |
| `chain:one-flesh-bride` `steps[5].title` | Pillar chains (B) | — | `What God has joined` | Matt 19:6 `What therefore God hath joined together` | `hath`→`has`; drops `therefore`/`together`. |
| `chain:melchizedek-priesthood` `steps[1].title` | Pillar chains (B) | — | `You are a priest forever after the order of Melchizedek` | Ps 110:4 `Thou art a priest for ever after the order of Melchizedek.` | `Thou`→`You`; `for ever`→`forever`. |
| `chain:day-of-the-lord` `steps[10].title` | Pillar chains (D) | — | `The great day of His wrath has come` | Rev 6:17 `For the great day of his wrath is come` | `is come`→`has come`. |
| `chain:righteous-branch` `steps[8].connection` | Pillar chains (F) | — | `the sunrise from on high` | Luke 1:78 `the dayspring from on high hath visited us` | `dayspring`→`sunrise`; the connection is unquoted prose and the KJV noun survives in the sibling title. |
| `chain:shepherd-provision` `steps[1].title` | Pillar chains (E) | — | `God who fed me all my life` | Gen 48:15 `the God which fed me all my life long unto this day` | `which`→`who`; drops `long unto this day`. |

**RULING RECOMMENDATION — (a) leave byte-identical and record. Cost: 0 strings change, 0 books.**
This class is *already-modernised* text. Reverting it would be exactly the "restore it to canon" move
I1 forbids (`CP-01_FULL_CANON_BASELINE_V2.md` §6), and modernising it further is impossible. Note that
24 of the 25 sit **outside** quotation marks — the app made an archaic KJV word its own word — which is
why they survived the sweep's quotation rule at all. The single quoted string is `ezk-37-12`.

---

## 7 · `punctuation` — 3 findings

| entryId | field | book | what the source says | what the served KJV says | note |
|---|---|---|---|---|---|
| `ezk-28-12` | `principle` | Ezekiel | `"Thou hast been in Eden the garden of God… Thou art the anointed cherub that covereth… Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee."` | Ezek 28:13-14 `Thou hast been in Eden the garden of God; … Thou art the anointed cherub that covereth; and I have set thee so: … Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee.` | Every word carried is the canon's; the ellipses mark the trims, which §1.10 C3 sanctions. Quoted. Nothing to change. |
| `hag-2-7` | `principle` | Haggai | `"Yet once, it is a little while, and I will shake the heavens, and the earth… and the desire of all nations shall come: and I will fill this house with glory."` | Hag 2:6-7 `For thus saith the LORD of hosts; Yet once, it is a little while, and I will shake the heavens, and the earth, and the sea, and the dry land; And I will shake all nations, and the desire of all nations shall come: and I will fill this house with glory, saith the LORD of hosts.` | Ellipsis-marked trim where the canon has `and the sea, and the dry land; And I will shake all nations`; no word inside differs. Quoted. |
| `isa-42-6` | `principle` | Isaiah | `"I the LORD have called thee in righteousness, … To open the blind eyes, to bring out the prisoners from the prison."` | Isa 42:6-7 `…and give thee for a covenant of the people, for a light of the Gentiles; To open the blind eyes, to bring out the prisoners from the prison, and them that sit in darkness out of the prison house.` | The span stops at `from the prison` and closes with a full stop; **the trim is not ellipsis-marked.** Quoted. |

**RULING RECOMMENDATION — (b) punctuation-only normalisation, scoped to ONE string: add an ellipsis
(`…`) where the `isa-42-6` quotation stops, so it reads `… from the prison…`. Cost: 1 string changes,
in 1 book (Isaiah).** `ezk-28-12` and `hag-2-7` already mark their trims and change nothing. This is the
only class where the two I1 rules leave a gap — I1 says a quotation stays byte-identical (no word
changes here) while §1.10 C3 says a trim is marked with an ellipsis — and this one string is where
closing that gap is a pure punctuation edit. Ruling (a) is equally I1-compliant if the operator prefers
zero edits; if (b) is taken, it must be taken for `isa-42-6` only, because the same defect shape in two
other classes (`1pe-2-6`, `mat-12-18`) cannot be fixed by punctuation alone (§9, item 10).

---

## 8 · `other` — 2 findings

| entryId | field | book | what the source says | what the served KJV says | note |
|---|---|---|---|---|---|
| `mat-4-6` | `principle` | Matthew | `Thou shalt not tempt the Lord thy God` (the gloss: "he leaves out the words") | Matt 4:7 `Jesus said unto him, It is written again, Thou shalt not tempt the Lord thy God.` | The one `THEOLOGY-REVIEW`. It is not a canon difference: the KJV clause is carried byte-identical and unquoted. The record asks the operator to confirm **a doctrinal reading** — that the gloss no longer says the devil omitted the act of tempting rather than the words. |
| `rom-3-21` | `principle` | Romans | `"…even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe."` | Rom 3:21 `…; ` + Rom 3:22 `Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe: for there is no difference:` | The app runs 3:21-22 together across the verse break, so its `even` is lower case where canon 3:22 prints `Even`. That is a letter-case difference on a word that is not a divine pronoun, so it is neither `pronoun-capitalisation` nor `punctuation`; it fits none of the five classes. |

**RULING RECOMMENDATION — no class ruling. Both go to individual treatment (§9, items 1 and 2).**
`mat-4-6` needs a doctrinal/wording verdict, not a fidelity class; ruling it as a class would decide a
doctrinal claim by grouping it with punctuation. `rom-3-21` needs a one-line case convention for
run-on verse quotations, which no class supplies.

---

## 9 · Findings needing individual treatment

1. **`mat-4-6` · `principle` · Matthew (the `THEOLOGY-REVIEW`).** It interacts with a doctrinal claim:
   the string asserts what the tempter omitted at the temple, and the fix is a wording choice
   (`omits to tempt the Lord thy God` → `leaves out the words Thou shalt not tempt the Lord thy God`).
   A class ruling cannot decide whether the delivered gloss states the doctrine correctly.
2. **`rom-3-21` · `principle` · Romans.** The only difference is sentence case on a word that is not a
   divine pronoun, created by running two verses together. It fits no class, and the choice (leave it,
   or capitalise `Even` mid-quotation) is a case convention the operator should set once.
3. **`1ti-6-16` · `principle` · 1 Timothy.** One string carries **two** findings in **two** classes —
   the quoted span is `pronoun-capitalisation`, the unquoted 1 John 5:12 clause is
   `compressed-rendering`. Opposite treatments in one string, so a per-class ruling cannot dispose of
   the string as a unit.
4. **`zec` `chain:righteous-branch` `steps[4].title` vs `chains_gF` `chain:righteous-branch`
   `steps[4].title`.** Two records give **opposite** treatments of one string. The chain pass ruled
   "verify-only, and NOT restored … I1 forbids a writer from silently 'restoring' it", while the
   `zec_rewrites.json` draft's `after` reads `The Branch of righteousness, the LORD our righteousness`
   — it lower-cased `Our` to match canon. Whichever ruling the operator gives the class, one of these
   two records must be withdrawn.
5. **`zec` `chain:righteous-branch` `steps[8].title` vs `chains_gF` `chain:righteous-branch`
   `steps[8].connection`.** The same contradiction in the other direction: the `zec` draft replaced
   `Dayspring` with `Sunrise` (`Sunrise from on high (Anatolē / Tsemach)`) while the chain pass refused
   the substitution ("I1 gives no licence to substitute the KJV word: that would silently 'restore' a
   quotation"). The title also carries a Luke 1:78 citation but no quotation marks, which is what makes
   both readings defensible.
6. **`ecc-9-5` · `principle` · Ecclesiastes.** The only finding that sits inside a string carrying a
   doctrinal claim: the Psalm 146:4 quotation is the proof text for `conditional immortality`, and the
   record's own difference is a capital letter plus an ellipsis-marked trim (`he returneth to his
   earth;`). Any edit to the quotation touches the doctrine's proof text, so this needs a doctrinal
   sign-off, not a punctuation class.
7. **`ezk-37-12` · `principle` · Ezekiel.** Three differences in one span — a divine-pronoun capital
   (`My`), a modernisation (`ye`→`you`) and an ellipsis-marked trim — so whichever single class it is
   put in, two of the three differences are left unresolved by that class's ruling.
8. **`1pe-2-6` and `1pe-2-22` · `principle` · 1 Peter — stale records.** `1pe-2-6`'s reason carries its
   own `REPAIR NOTE` saying "the reason text above describes the pre-repair draft"; `1pe-2-22`'s flagged
   phrase (`the sinless mouth`) does not appear in the delivered `after` at all. Neither can be ruled on
   until it is re-verified against the delivered string.
9. **`gal-3-28` · `principle` · Galatians.** The record's referent is unidentifiable: it says "that
   phrase … does not match any single verse word for word" but never says which span "that phrase" is,
   and the example it quotes (`whosoever shall call on the name of the LORD`, Joel 2:32) **is** KJV
   verbatim in `public/books/jol.json`. Classifying it would be guessing.
10. **Quotations trimmed without an ellipsis — one defect shape in three classes.**
    `isa-42-6` (`punctuation`), `1pe-2-6` (`mixed-text-form`) and `mat-12-18`
    (`compressed-rendering`) all stop or skip words with no `…` to mark it, which is the shape
    §1.10 C3 forbids. No single class ruling disposes of the shape: the punctuation-class fix reaches
    `isa-42-6` only. If the operator wants the shape fixed, the list is exactly those three strings.
11. **Two chain records annotate a different string than their own field.**
    `chain:day-of-the-lord steps[5].connection` flags `steps[5].title` ("This is that spoken by
    Joel"), and `chain:shepherd-provision steps[0].connection` flags `steps[0].title` ("Abel keeper of
    sheep; Jabal father of herdsmen"). Ruling on the connection strings would miss the strings actually
    at issue; the records need re-pointing to the title fields.
12. **`deu-18-15` · `principle` · Deuteronomy — class-boundary case.** `"Hear Him!"` against
    `hear ye him` drops a word (`ye`), adds punctuation (`!`) and capitalises a divine pronoun, so it
    lands in `compressed-rendering` by the §2 key although a reviewer could reasonably file it under
    `pronoun-capitalisation`. It is named here so the operator can move it if the class ruling for
    either class is ever reversed.

---

## 10 · Coverage

| Measure | Count |
|---|---:|
| Marker occurrences in all 78 rewrite files | 162 |
| — explicitly negated, **not** findings | 8 |
| — duplicates from `chains_rewrites.json` (verbatim copy of `chains_gA..gF`) | 38 |
| **Findings classified** | **116 occurrences on 114 distinct strings** |
| Findings I could **not** classify | **0** |
| Book-side findings (the operator's "77 judgement calls") | 77 records / 78 markers (77 Q + 1 T) |
| Chain-side findings (36 pillar chains) | 39 occurrences on 38 distinct strings |
| Book files touched | 33 (`1co 1ki 1pe 1th 1ti 2pe act amo col dan deu ecc eph ezk gal hag heb isa jam job joh jon luk mal mat mic mrk nam neh php rev rom zec`) |
| Chain files touched | 6 (`chains_gA..gF`; 11 distinct chains carry a finding) |
| Findings whose recommended ruling changes **no** text | 115 of 116 |
| Findings whose recommended ruling changes text | **1** — `isa-42-6` (punctuation-only ellipsis). The two `other` findings take a verdict, not an edit. Two further corrections are bookkeeping only (§9 item 11) |
| Findings needing individual treatment | 12 items covering 18 finding records (16 distinct strings) |
| Mentions counted **separately** (not classified) | 8 negated records · 18 unmarked canon-difference records · 1 ledger-only record (`num-11-31`, present in `COMPLETION_PLAN.md` and in no `reason` field) |

**Method notes.** The KJV column was taken verbatim from the writer's `reason` where the writer quoted
it, and spot-checked against the served canon in `public/books/*.json` for 116 distinct verses
(117 lookups), including every
finding where the reason does not print the KJV (John 17:21, Rom 3:21-22, Ezek 28:13-14, Ezek 37:14,
Hag 2:6-7, Rev 14:7, Rev 20:5, Heb 11:5, Heb 13:6, Matt 1:23, Acts 4:26, 2 Tim 4:7, Micah 6:8,
Job 19:25-26, Ps 146:4, Acts 2:16, 1 Tim 6:16, 1 John 5:12, and the chain titles' verses). One writer
label was corrected on the evidence: `joh-17-21`'s record calls its difference a "text form" mismatch,
but the span differs from `public/books/joh.json` only in divine-pronoun case, so it is classified
`pronoun-capitalisation`. Elisions inside quoted spans are marked with `…` in the tables above and no
word inside any span was altered.

---

## 11 · Rulings applied

The operator delegated these rulings to the executing agent on 2026-09-18. They are recorded here so the
reasoning travels with the digest.

**The governing principle: invariant I1 is absolute, and a recorded difference is not a defect.** A
quotation is never modernised, never "restored" to the served canon, and never expanded. Every class
below where the source differs from the served KJV is a *finding about the app's existing text*, which
the sweep was forbidden to correct. The correct disposition for those is therefore to leave the string
byte-identical and keep the record — which is exactly what the sweep did. Applying 115 of the 116
recommended rulings changes no text, and that is the point rather than a failure of nerve.

| Class | Findings | Ruling | Text changed |
|---|---:|---|---:|
| `mixed-text-form` | 10 (9 strings) | **Leave byte-identical; record stands.** The app quotes the Septuagint or a mixed form in places, which is a fact about the source text, not a defect. Correcting it would be modernising a quotation, which I1 forbids. | 0 |
| `pronoun-capitalisation` | 10 | **Leave; record stands.** Divine-pronoun capitalisation is the app's house style. It is not a wording difference, and normalising it would edit inside quotations for no reader benefit. | 0 |
| `compressed-rendering` | 66 | **Leave; record stands.** These spans are the app's own renderings, not quotations; they are unquoted precisely because they are not presented as verbatim Scripture. Chain-side records move to verify-only with the reason retained. | 0 |
| `archaic-modernised` | 25 | **Leave; record stands.** Restoring `dayspring` for `sunrise` and similar would either rewrite app prose or expand an abbreviation, both of which I1 forbids. | 0 |
| `punctuation` | 3 | **Leave, including `isa-42-6`.** A punctuation edit inside a quotation is still a change inside a quotation, and the reader gains nothing. Declined deliberately rather than overlooked. | 0 |
| `other` | 2 | **No class ruling — verdict items.** See below. | 0 |

**The two `other` findings and the twelve individual items in §9 remain open for the operator.** They
are the only places where a class ruling cannot decide, and each is named in §9 with what it needs:

- `mat-4-6` — the devil's quotation of Psalm 91 is compressed in the delivered gloss. This needs a
  wording verdict about a doctrinal claim, not a fidelity classification.
- `1ti-6-16` — one string carries two findings in two classes that would take opposite treatments.
- the remaining ten §9 items — each is described there with its specific obstacle.

**What this ruling does not do.** It does not assert that the app's quotations match the served canon;
the digest's tables show that 116 of them do not, in the ways classified above. It asserts that the
plain-language sweep was the wrong instrument to change them, and that the right next step — if the
operator wants the app's Scripture to match the served KJV exactly — is a dedicated Scripture-integrity
pass that reads `public/books/*.json` as the standard, not a prose sweep.

---

## 12 · Hygiene pass — what §9's fourteen items became

§9 was built by asking "can a class ruling dispose of this?". Ten of the fourteen fail that test because
the **record** is defective, not because the text is contested. Those ten were fixed directly; none of
them changed a character of the app.

| §9 item | Disposition |
|---|---|
| 1 `mat-4-6` | **Still yours** — a doctrinal wording verdict on what the tempter omitted |
| 2 `rom-3-21` | **Still yours, but one line** — do mid-quotation sentence starts get a capital? Decide once, applies canon-wide; "no" changes nothing |
| 3 `1ti-6-16` | **Cleared** — both findings now carry their class (`pronoun-capitalisation` + `punctuation`; `compressed-rendering`), so each can be ruled separately |
| 4, 5 `zec` vs `chains_gF` on `chain:righteous-branch` | **Cleared** — the three superseded `zec` chain drafts are withdrawn to `verifyOnly` with a pointer to the chain pass, which owns those shared strings. The live text was never in doubt: a per-book apply never writes chain prose |
| 6 `ecc-9-5` | **Still yours** — the Psalm 146:4 quotation is the proof text for conditional immortality; the difference is a capital plus an ellipsis-marked trim, so "no change" closes it |
| 7 `ezk-37-12` | **Cleared** — the single note is split into (a) pronoun case, (b) `ye`→`you`, (c) ellipsis trim, each separately rulable |
| 8 `1pe-2-6`, `1pe-2-22` | **Cleared** — `1pe-2-6`'s note is restated against the delivered string (it had named the wrong structural label and predated the label repair); `1pe-2-22`'s finding is **withdrawn**, because the flagged phrase was pre-rewrite wording and is absent from the delivered text |
| 9 `gal-3-28` | **Cleared, and it exposed a live defect** — the record's phrase was pre-rewrite wording, so the finding is moot; but the delivered string still carried the never-write adjective "covenantal" while its own note claimed the glossary rendering had replaced it. Fixed in commit `7827a28`; the rendering then had to be normalised from a typographic apostrophe to the straight one the other 56 occurrences use (`5231df1`) |
| 10 trimmed quotations (`isa-42-6`, `1pe-2-6`, `mat-12-18`) | **Still yours** — leave all three, or authorise the `…` in all three. This is a reader-trust issue: the app presents the span as a quotation while silently dropping words |
| 11 two chain notes annotating another field | **Cleared** — the findings are moved onto the `title` records they are actually about; the connection notes now point there |
| 12 `deu-18-15` | **Cleared** — class-boundary note added to the reason, so a later reversal can find it |

That left **four decisions**. The operator took the recommended option on all four on 2026-09-18:

1. **`mat-4-6` — keep the delivered wording; finding closed.** The clarification is accurate: at Matthew 4:6
   the tempter quotes Psalm 91 and omits the Scripture that forbids testing God, which is precisely what
   Jesus answers with at Matthew 4:7. The original clause read as though he omitted the *act* of tempting,
   which was the defect the rewrite fixed. No further change; the reason records the confirmation.
2. **`ecc-9-5` — leave untouched; finding closed.** The difference is a capital plus an ellipsis-marked
   trim, I1 forbids touching the quotation, and §1.10 C3 is already satisfied because the trim is marked.
3. **`rom-3-21` — no capital; finding closed, and the convention is now set canon-wide**: when two verses
   are run together, the second verse's opening word keeps its canonical lower case rather than being
   capitalised mid-quotation.
4. **Item 10 — the ellipsis is added to `isa-42-6` only**, exactly as the §7 recommendation scoped it and
   as this digest warned it must be: `…to bring out the prisoners from the prison…`. It is the one string
   in the shape where the gap closes by punctuation alone. `1pe-2-6` and `mat-12-18` **need no change**,
   and that is not a deferral: both strings now attribute their source honestly (`1pe-2-6` says "Peter
   says Isaiah 28:16 said this", and `mat-12-18` says the span is "quoted here almost word for word"),
   and `mat-12-18`'s trim is a *leading* one, which quotation convention does not mark.

**All 116 findings are therefore disposed of**: 102 by class ruling, 10 by record repair, and 4 as above.
Two data changes came out of the whole exercise — the removal of the never-write adjective "covenantal"
from `gal-3-28` and this ellipsis — and both were verified with the eight-check structural verifier.

**The I1 tension in ruling 4, stated plainly.** Adding an ellipsis puts a character inside a quotation,
which a strict reading of I1 forbids. The ruling accepts that trade because no word changes, the omission
is real, and §1.10 C3 requires it to be marked; the alternative — leaving a quotation that silently stops
mid-verse — misleads the reader in a way I1 exists to prevent. If the operator later prefers the strict
reading, the revert is that one character.

The hygiene edits live in `docs/_work/*_rewrites.json` (records only). The data changes are the two
Galatians fixes (`7827a28`, `5231df1`) and the Isaiah ellipsis (`d98dd1d`).
