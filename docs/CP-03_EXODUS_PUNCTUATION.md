# CP-03 · Exodus punctuation damage — what it is, and what remains

Date: 2026-09-18 · Branch `cursor/plain-lang-cp01-cp02-genesis-ebb9`

## What happened

The Exodus appendix rewrite that was signed off and applied in commit `5537ba2` **replaced colons and
semicolons with full stops and lower-cased the following word**. It is not a tooling fault and not an
accident of the apply: the signed-off document itself records both states, with the clean text in its
`BEFORE` block and the damaged text in its `AFTER (draft)` block:

```
BEFORE       The LORD sees the blood and passes over. Hebrews: without shedding of blood no remission;
             1 Peter: redeemed with precious blood. First principle: atonement is by applied blood.
AFTER draft  The LORD sees the blood and passes over. Hebrews. without shedding of blood no remission.
             1 Peter. redeemed with precious blood. First principle. atonement is by applied blood.
```

So the `BEFORE` blocks of `docs/CP-02_EXODUS_DRAFT.md` are the authority for the original punctuation,
and every restoration below was taken from them rather than guessed.

## What has been repaired

| Repair | Scope | Commit |
|---|---|---|
| `First principle.` → `First principle:` | 35 strings, Exodus | `2c0f322` |
| Colons and semicolons restored from the BEFORE blocks | 31 marks across 16 entries | `d6edb0e` |
| Bare `type`/`antitype` and the banned abstraction | `exo-12-46`, `exo-20-8` | `2c0f322` |

Both data repairs were verified with the eight-check structural verifier (`--book exo`, exit 0).

## What remains

The following sites still read as a full stop followed by a lower-case word. They could not be resolved
from the `BEFORE` blocks because the surrounding words were themselves rewritten, so the original mark
has to be judged from grammar. The recommended mark is given per row; `?` means the site needs a read
rather than a rule.

| entry | field | recommended | reason | context |
|---|---|---|---|---|
| `exo-12-46` | `whoByRef["John 19:36"]` | `?` | needs a read | …te from Ephesus (c. AD 85–95). Identified Characters: Yahweh. the paschal lamb. Roman soldiers performing… |
| `exo-12-46` | `whoByRef["John 19:36"]` | `?` | needs a read | …eh. the paschal lamb. Roman soldiers performing crurifragium. the two thieves whose legs were broken. Jes… |
| `exo-12-46` | `whoByRef["John 19:36"]` | `?` | needs a read | …ny: Singular body, many executioners. One Lamb is kept whole. the soldiers and the two other crucified me… |
| `exo-12-46` | `whoByRef["Numbers 9:12"]` | `?` | needs a read | …n the wilderness. Identified Characters: Israel on the march. those unclean or on a journey who still mus… |
| `exo-12-46` | `whoByRef["Numbers 9:12"]` | `?` | needs a read | …those unclean or on a journey who still must keep the feast. the lamb of the delayed Passover. Singular… |
| `exo-12-46` | `whoByRef["Numbers 9:12"]` | `?` | needs a read | …& Referent: The same paschal body later identified as Christ. the wilderness restatement is not a differe… |
| `exo-12-46` | `whoByRef["Numbers 9:12"]` | `?` | needs a read | …ose: To show the bone-law is not a one-night Egyptian custom. it remains in force until the true Lamb's b… |
| `exo-12-46` | `terms[1].exposition` | `?` | needs a read | …arks divine agency: the Son’s bones are not “luckily” intact. they shall not be shattered, because the Ex… |
| `exo-12-46` | `terms[0].exposition` | `?` | needs a read | …oman crurifragium is withheld: Ὀστοῦν οὐ συντριβήσεται αὐτοῦ. a bone of Him shall not be shattered. The H… |
| `exo-33-18` | `principle` | `?` | needs a read | …Moses asks for more than mission. he asks for God. First principle: the great… |
| `exo-3-6` | `principle` | `;` | clause join | …atriarchs binds Himself to a family line that runs to Christ. and reverence is the first response.… |
| `exo-4-22` | `principle` | `;` | clause join | …oh. First principle: sonship is the ground of exodus demands. and the title, kept in Israel, finds its fu… |
| `exo-14-22` | `principle` | `?` | needs a read | …deliverer. Paul says they were baptized in the cloud and sea. is passage between held-back judgments.… |
| `exo-34-34` | `principle` | `?` | needs a read | …of the fading glory gives way to the Spirit's lasting glory. in Christ the vail is done away.… |
| `exo-3-2` | `principle` | `?` | needs a read | …dwells with the afflicted without being burned by their fire. the church's bush and the covenant's endura… |
| `exo-3-13` | `principle` | `;` | clause join | …he self-existent God gives a name that outlasts every crisis. and Jesus claims it: before Abraham was, I… |
| `exo-15-25` | `principle` | `?` | needs a read | …te proved there. First principle: the tree turns Marah sweet. the first wilderness test answered by wood,… |
| `exo-12-27` | `principle` | `;` | clause join | …memorial speech: He passed over the houses and delivered us. and the people bowed and worshipped. First… |
| `exo-12-27` | `principle` | `?` | needs a read | …pped. First principle: the passover is teaching by rehearsal. every generation tells the story of the blo… |
| `exo-12-46` | `cumulativePrinciples[0]` | `?` | needs a read | …ones must not be broken. One house, one lamb, one whole body. the sacrifice stays intact even in death.… |
| `exo-33-19` | `principle` | `;` | clause join | …ter. First principle: the Name is preached before it is seen. and Paul quotes it to defend God's freedom… |
| `exo-19-6` | `principle` | `?` | needs a read | …Israel is to be a kingdom of priests and holy nation. 1 Peter applies this to the church. Revelat… |
| `exo-19-6` | `principle` | `?` | needs a read | …holy nation. 1 Peter applies this to the church. Revelation. made priests to God. First principle: the c… |
| `exo-16-35` | `principle` | `?` | needs a read | …ders of Canaan. First principle: grace is tested by duration. the bread never failed for four decades, un… |
| `exo-40-34` | `principle` | `?` | needs a read | …when the dwelling is done as directed, the Presence moves in. obedience completes into Shekinah.… |
| `exo-19-5` | `principle` | `?` | needs a read | …sure above all people. First principle: the covenant formula. obey, belong. is transferred in Christ to a… |
| `exo-19-5` | `principle` | `?` | needs a read | …people. First principle: the covenant formula. obey, belong. is transferred in Christ to a people bought… |
| `exo-12-6` | `principle` | `;` | clause join | …nciple: the lamb is examined, then slain by the congregation. and the hours match the cross to the minute… |
| `exo-30-30` | `principle` | `?` | needs a read | …t principle: ministry is by anointing, not appointment alone. the Spirit sets apart, as Christ was anoint… |
| `exo-31-18` | `principle` | `?` | needs a read | …First principle: the writing would move from stone to flesh. tablets of the heart by the Spirit, promise… |
| `exo-17-12` | `principle` | `?` | needs a read | …he battle is won. First principle: intercession is corporate. the war is carried by held-up hands, not so… |
| `exo-25-8` | `principle` | `?` | needs a read | …ple: the sanctuary is not for God's benefit but for nearness. the type of the Word tabernacling among us.… |
| `exo-34-28` | `principle` | `?` | needs a read | …awgiver's fast foreshadows the greater Lawgiver's forty days. both sustained by the Word of the covenant.… |
| `exo-12-21` | `principle` | `?` | needs a read | …r lamb. First principle: deliverance is by applied sacrifice. a lamb taken, killed, and trusted in every… |
| `exo-34-6` | `principle` | `?` | needs a read | …principle: this is the Bible's central self-portrait of God. repeated across Scripture and fulfilled in… |
| `exo-16-14` | `principle` | `?` | needs a read | …h morning. First principle: daily bread is heaven's humility. small, round, sufficient. Jesus calls Himse… |
| `exo-3-15` | `principle` | `?` | needs a read | …principle: deliverance comes in the name that never changes. the memorial every generation must remember… |
| `exo-12-5` | `principle` | `?` | needs a read | …st-year. First principle: substitution requires spotlessness. the blood that saves is the blood of the un… |
| `exo-20-3` | `principle` | `?` | needs a read | …p. First principle: God begins the law where idolatry begins. with rival trust. Christ answers Satan with… |
| `exo-20-8` | `terms[3].note` | `?` | needs a read | …Heb 4:9. there remains therefore a rest (sabbatismos… |
| `exo-17-6` | `terms[0].note` | `?` | needs a read | …Greek πέτρα (petra) in 1 Cor 10:4. typological Christ.… |
| `exo-20-11` | `terms[0].note` | `?` | needs a read | …Ordinal is explicit. not "a" day but "the" seventh. Heb 4:4 pres… |
| `exo-12-3` | `terms[1].note` | `?` | needs a read | …1 Pet 1:19. lamb without blemish and spot.… |
| `exo-25-40` | `terms[0].note` | `?` | needs a read | …Heb 8:5. ὑπόδειγμα / σκιά. copy and shadow.… |
| `exo-20-8` | `terms[0].gloss` | `?` | needs a read | …rest, sabbath (from shavat. cease).… |
| `exo-19-6` | `terms[0].note` | `?` | needs a read | …LXX βασίλειον ἱεράτευμα. 1 Pet 2:9.… |

**Why this was not forced through.** Two reasons, stated plainly. First, a recommendation is not a
restoration: the marks above are grammar judgements, and the operator asked for a reviewed pass over
their own text rather than another mechanical sweep. Second, the uncommitted working-tree edit to
`docs/CP-02_EXODUS_DRAFT.md` retitles that document `AI-DRAFT — DO NOT APPLY` and removes its sign-off,
so Exodus is already scheduled for rework — punctuation repaired now may simply be replaced. Finishing
these 46 sites should happen as part of that rework, with this table as the checklist.

## The wider question this raises

The same colon→period transformation appears in the `who` fields of Genesis and Zechariah
(`Identical Characters: Yahweh commanding the paschal ordinance. the Hebrew household eating the lamb…`),
so it is a habit of the appendix rewrite stage, not an Exodus-only slip. Any future appendix rewrite
should assert its output against its own `BEFORE` blocks for mark parity, which would have caught this
at the point of writing rather than after the apply.
