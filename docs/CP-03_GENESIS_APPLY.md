# CP-03 · Apply — Genesis

Scope: Apply operator‑approved Genesis CP‑02 appendix to `src/data/threadDetails.ts` (and pillar chains if needed). VERIFY‑ONLY fields yield no change; real AFTER diffs are applied exactly.

Operator theology sign-off
- Decision: “Theology sign-off: accept Genesis VERIFY-ONLY appendix”
- Signer: Bonga Ndlovu (operator)
- Date: 2026-09-17 (Africa/Johannesburg)
- PR: #4 (`cursor/plain-lang-cp01-cp02-genesis-ebb9`)

Applied changes
- Entry: `gen-1-1`
  - Term exposition updates (sentence split; meaning preserved, citations unchanged):

    BEFORE (excerpt)
    ```
    In Genesis 1:1 ... without a pre-existing substrate. ... John 1:3 then interprets that act through the Word: all things ἐγένετο ... — so the Genesis verb’s God-only subject is identified as the Son without making the Son a creature.
    ```

    AFTER (applied)
    ```
    In Genesis 1:1 בָּרָא (baraʾ, Qal perfect 3ms) takes God alone as subject and names the origin of “the heaven and the earth” without a pre‑existing substrate. The verse is not a generic “making” (עָשָׂה, ʿasah) of already‑present stuff, nor a craftsman’s forming (יָצַר, yatsar); it is the absolute beginning of the created order by a personal Speaker. John 1:3 then interprets that act through the Word. All things ἐγένετο (came into being) through Him, and χωρὶς αὐτοῦ not even one thing that has come into being came to be. Thus the Genesis verb’s God‑only subject is identified as the Son, without making the Son a creature.
    ```

    BEFORE (excerpt)
    ```
    Hebrews 11:3 says τοὺς αἰῶνας κατηρτίσθαι ῥήματι Θεοῦ ... , εἰς τὸ μὴ ἐκ φαινομένων τὰ βλεπόμενα γεγονέναι ... — so visible empires are less substantial than the unseen word that made them.
    ```

    AFTER (applied)
    ```
    Hebrews 11:3 says τοὺς αἰῶνας κατηρτίσθαι ῥήματι Θεοῦ — the ages/worlds were framed (perfect passive of καταρτίζω: fitted, ordered, put in working order) by God’s spoken utterance. It adds: εἰς τὸ μὴ ἐκ φαινομένων τὰ βλεπόμενα γεγονέναι (so that what is seen has not come from things that appear). In this thread the phrase is not a philosophical footnote on “ages” in the abstract; it is the Genesis 1 cosmos and its successive ages viewed from the side of faith. The same Word John names as ὁ Λόγος is here the ῥῆμα that frames all that Moses said God created. Visible empires are less substantial than the unseen word that made them.
    ```

No other Genesis fields required change (VERIFY‑ONLY).

Proofs

1) Type-check (tsc/lint)
```
$(cat /tmp/cp03_lint_after.txt)
```

2) Tests (vitest)
```
$(cat /tmp/cp03_test.txt)
```

3) Clarity gate (Genesis prose scan)
```
$(cat /tmp/cp03_clarity.txt)
```

4) Data audit
```
$(cat /tmp/cp03_audit.txt)
```

Status: APPLIED (Genesis). HARD STOP before Exodus or any other book.

