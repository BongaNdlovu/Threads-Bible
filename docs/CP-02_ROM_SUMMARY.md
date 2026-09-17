# CP-02 · Romans — batch summary

Plan v2.0 · Date: 2026-09-17 · Book `rom`

| Measure | Count |
|---|---|
| In-scope strings | 179 |
| Rewritten | 86 |
| VERIFY-ONLY (already at standard) | 93 |
| EQUIVALENT (no safe rewrite) | 0 |
| Rewrite rate | 48.0% |
| Strings flagged for operator review in reasons | 2 |

## THEOLOGY-REVIEW checklist

| entry | field | flag |
|---|---|---|
| `rom-6-3` | `principle` | GATE FAIL fixed: the two KJV sentences were sitting unquoted, so the 36-word Scripture sentence counted against the prose. They are now in quotation marks, which the gate exempts, and not one word inside them changed. The app sentence is split in two and 'immersion' is stated as going all the way under the water. QUOTE-REVIEW: the source capitalises the divine pronouns — 'baptized into His death', 'buried with Him' — vs canon Rom 6:3-4 'baptized into his death? Therefore we are buried with him by baptism into death'; left byte-identical rather than restored to canon. |
| `rom-3-21` | `principle` | GATE FAIL fixed: the 39-word KJV sentence is now quoted (the words unchanged), so the gate exempts it; the app sentence that followed is now five plain sentences. 'Justification' and 'redemption' carry the frozen glossary renderings, with the Scriptural phrase 'the redemption that is in Christ Jesus' kept as it stood. QUOTE-REVIEW: the source runs Rom 3:21-22 together across the verse break, so 'even' is lowercase there vs canon Rom 3:22 'Even the righteousness of God which is by faith of Jesus Christ'; left byte-identical rather than restored to canon. |

## EQUIVALENT inventory

None.

## Gate status

Every string above (AFTER where rewritten, BEFORE otherwise) passes the clarity gate: see
`docs/CP-03_ROM_APPLY.md` for the pasted run.

