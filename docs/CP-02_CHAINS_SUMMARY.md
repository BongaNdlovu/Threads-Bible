# CP-02 · Pillar chains — batch summary

Plan v2.0 · Date: 2026-09-17 · Book `chains`

| Measure | Count |
|---|---|
| In-scope strings | 658 |
| Rewritten | 175 |
| VERIFY-ONLY (already at standard) | 483 |
| EQUIVALENT (no safe rewrite) | 0 |
| Rewrite rate | 26.6% |
| Strings flagged for operator review in reasons | 4 |

## THEOLOGY-REVIEW checklist

| entry | field | flag |
|---|---|---|
| `chain:state-of-dead-immortality` | `steps[5].connection` | QUOTE-REVIEW: the quoted span is byte-identical to the BEFORE and is left untouched, but it is a loose rendering of the served KJV. John 11:11 reads "Our friend Lazarus sleepeth; but I go, that I may awake him out of sleep" and John 11:14 reads "Lazarus is dead"; the joined form "Our friend Lazarus sleepeth... Lazarus is dead" is not one continuous KJV text. Recorded for the operator, not changed - I1 forbids modernising, and it equally forbids silently restoring. The prose around the quotation was rewritten: the abstract label "Christ's teaching:" became two sentences that name Jesus as the actor and keep the order of the account (sleep named first, the plain statement second). |
| `chain:great-controversy-arc` | `steps[0].connection` | QUOTE-REVIEW: the quotation is carried byte-identical and untouched, but it is a loose rendering of the served KJV. Isaiah 14:14 reads "I will ascend above the heights of the clouds; I will be like the most High", and "I will ascend above the stars" is not KJV text - Isaiah 14:13 reads "I will exalt my throne above the stars of God". The two-word ellipsis joins clauses from two different verses. Recorded for the operator, not changed. The prose around it was rewritten: the label "Origin of evil:" became a plain sentence naming Lucifer as the actor, so the claim - he wanted to be like God - is stated before the words are quoted. Two sentences, 6 and 15 words (the quotation is stripped by the gate). |
| `chain:day-of-the-lord` | `steps[5].connection` | "explicitly identified as Joel's prophecy" is a nominal stack with no verb for Peter. The rewrite uses "says" and names what was identified — the Spirit poured out at Pentecost. QUOTE-REVIEW (do not fix here): step 5's own title quotes "This is that spoken by Joel"; the served KJV at Acts 2:16 reads "But this is that which was spoken by the prophet Joel". Carried byte-identical per the CP-02 §6 ruling. One sentence, 14 words (was 7). |
| `chain:shepherd-provision` | `steps[0].connection` | V2/V3: the verbless 'Earliest shepherding vocation in the fallen world' had no actor and used the abstract word 'vocation'. Abel is now the subject, and 'the fallen world' becomes 'a world broken by sin'. 17 words, one sentence, gate clean; the Genesis 4:2, 20 claim is unchanged and no second name is added to this string. QUOTE-REVIEW: this step's title, 'Abel keeper of sheep; Jabal father of herdsmen', is an unquoted KJV-style rendering, and the served canon has Genesis 4:2 as 'Abel was a keeper of sheep' and Genesis 4:20 as Jabal being 'the father of such as dwell in tents, and of such as have cattle'. The title is carried byte-identical and is not 'restored' here; recorded for the separate Scripture-integrity decision. |

## EQUIVALENT inventory

None.

## Gate status

Every string above (AFTER where rewritten, BEFORE otherwise) passes the clarity gate: see
`docs/CP-03_CHAINS_APPLY.md` for the pasted run.

