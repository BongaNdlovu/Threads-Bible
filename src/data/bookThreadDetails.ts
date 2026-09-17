/**
 * Hand-written thread details for books NOT covered by threadDetails.ts
 * (Genesis has its own 1:1 map there). Merged into the unified lookup via
 * getThreadDetail.
 */
import type { ThreadDetail } from './threadDetails';

export const bookThreadDetails: Record<string, ThreadDetail> = {
  // ── Exodus ──────────────────────────────────────────────────────────────
  'exo-3-14': {
    title: 'I AM THAT I AM',
    principle:
      'God names Himself to Moses: I AM WHO I AM. Jesus applies the divine name. before Abraham was, I AM. First principle. covenant identity is grounded in self-existent being, not tribal history alone.',
    sourceKeywords: ['I AM', 'THAT I AM', 'God', 'fathers', 'Abraham', 'Isaac', 'Jacob'],
    fulfillmentKeywords: ['Before Abraham was', 'I am', 'I AM', 'Alpha', 'Omega'],
    terms: [
      { term: 'I AM WHO I AM', original: 'אֶהְיֶה אֲשֶׁר אֶהְיֶה', translit: 'ʾehyeh ʾasher ʾehyeh', gloss: 'I will be what I will be / I am who I am', note: 'LXX ἐγώ εἰμι ὁ ὤν. John 8:58 claims this name.' },
    ],
  },
  'exo-12-3': {
    title: 'Lamb Without Blemish',
    principle:
      'Each household takes a lamb without blemish for Passover. John names Jesus the Lamb of God. Paul: Christ our Passover is sacrificed. First principle. substitutionary death of an unblemished substitute delivers from judgment.',
    sourceKeywords: ['lamb', 'house', 'lamb for an house', 'without blemish', 'male', 'first year'],
    fulfillmentKeywords: ['Lamb of God', 'sin', 'world', 'Christ our passover', 'sacrificed', 'lamb without blemish', 'precious blood'],
    terms: [
      { term: 'lamb', original: 'שֶׂה', translit: 'seh', gloss: 'head of small cattle (lamb / kid)', note: 'Greek ἀμνός / ἀρνίον. John and Revelation.' },
      { term: 'without blemish', original: 'תָּמִים', translit: 'tamim', gloss: 'complete, sound, without defect', note: '1 Pet 1:19. lamb without blemish and spot.' },
    ],
  },
  'exo-12-13': {
    title: 'Blood on the Doorposts',
    principle:
      'The LORD sees the blood and passes over. Hebrews. without shedding of blood no remission. 1 Peter. redeemed with precious blood. First principle. atonement is by applied blood, not mere intention.',
    sourceKeywords: ['blood', 'token', 'house', 'see the blood', 'pass over', 'plague', 'destroy'],
    fulfillmentKeywords: ['blood', 'remission', 'redeemed', 'precious blood', 'passover', 'plague'],
    terms: [
      { term: 'pass over', original: 'פָּסַח', translit: 'pasach', gloss: 'to pass over, spare', note: 'Root of Pesach / Passover. sparing judgment.' },
    ],
  },
  'exo-12-46': {
    title: 'Not a Bone Broken',
    principle:
      'Passover lamb\'s bones are not broken. Numbers restates the same statute for later Passovers. John cites this at the cross. First principle. the type specifies integrity of the sacrifice even in death.',
    who: 'Authorship & Context: Moses recorded the Passover statute on the eve of the tenth plague in Egypt (c. 1446 BC) for Israel about to leave bondage. Identified Characters: Yahweh commanding the paschal ordinance. the Hebrew household eating the lamb in one house. the lamb whose bones must not be broken. Singular or Many: Singular lamb, many households. Each house eats one lamb. the statute concerns that one body remaining whole while many firstborn are sheltered. Christological Subject & Referent: Jesus Christ, the true Passover Lamb (τὸ πάσχα ἡμῶν ἐτύθη Χριστός, 1 Cor 5:7) whose body was kept unbroken at the cross. Redemptive Purpose: The type specifies the integrity of the sacrifice. John shows the Father preserved that integrity in the Son so the antitype is recognizable.',
    whoByRef: {
      'John 19:36': 'Authorship & Context: Moses wrote the Passover bone-law in Exodus 12. The Apostle John, eyewitness at the cross (John 19:35) wrote from Ephesus (c. AD 85–95). Identified Characters: Yahweh. the paschal lamb. Roman soldiers performing crurifragium. the two thieves whose legs were broken. Jesus already dead. Singular or Many: Singular body, many executioners. One Lamb is kept whole. the soldiers and the two other crucified men are the many around that one body. Christological Subject & Referent: Jesus of Nazareth, whose legs were not broken in order that Scripture be fulfilled. Redemptive Purpose: To prove His death was not chaotic Roman procedure but the governed Passover antitype whose unbroken body shields from wrath.',
      'Numbers 9:12': 'Authorship & Context: Moses restates the Passover ordinance for those keeping it in the second month in the wilderness. Identified Characters: Israel on the march. those unclean or on a journey who still must keep the feast. the lamb of the delayed Passover. Singular or Many: Singular lamb, many later keepers. The same one-body statute binds every subsequent generation. Christological Subject & Referent: The same paschal body later identified as Christ. the wilderness restatement is not a different lamb-theology but the standing Torah of the unbroken sacrifice. Redemptive Purpose: To show the bone-law is not a one-night Egyptian custom. it remains in force until the true Lamb\'s body is preserved at Golgotha.',
    },
    cumulativePrinciples: [
      'The thread begins at Exodus 12:46: The Passover lamb’s bones must not be broken. One house, one lamb, one whole body. the sacrifice stays intact even in death.',
      'Step 2 of the thread (Exodus 12:46 → Numbers 9:12): Both verses repeat the same bone-law for later Passovers. The link: “nor break any bone of it” is standing law for every generation on the march, not just the night in Egypt. Why God says it twice. the lamb’s body must stay whole until the true Lamb is offered.',
      'Step 3 (Exodus 12:46 → Numbers 9:12 → John 19:36): John watches the soldiers break the thieves’ legs and stop at Jesus. All three verses agree. the lamb stays whole in Egypt, in the wilderness, and on the cross. How the story moves forward. law, repeated law, then the moment it comes true. Where it leads: Jesus is the true Passover Lamb, and His unbroken body says His offering is complete.',
    ],
    sourceKeywords: ['break', 'bone', 'thereof'],
    fulfillmentKeywords: ['break', 'bone', 'not one', 'fulfilled'],
    terms: [
      {
        term: 'bone',
        original: 'עֶצֶם',
        translit: 'etsem',
        gloss: 'bone, substance, selfsame',
        note: 'John 19:36. Scripture fulfilled.',
        strongs: 'H6106',
        exposition:
          'Exodus 12:46 commands וְעֶצֶם לֹא־תִשְׁבְּרוּ־בוֹ. “and a bone you shall not break in it.” עֶצֶם is the lamb’s physical frame, not a metaphor for “strength” in this statute. the sacrificial body must remain intact in the house. Numbers 9:12 repeats the prohibition for the second-month Passover, so the bone-law is standing Torah, not a one-night Egyptian custom. John 19:36 then cites the fulfillment when Roman crurifragium is withheld: Ὀστοῦν οὐ συντριβήσεται αὐτοῦ. a bone of Him shall not be shattered. The Hebrew etsem and the Greek ostoun name the same unfractured body, now the body of Jesus, so the type’s integrity is historically kept.',
      },
      {
        term: 'shall not be broken',
        original: 'συντριβήσεται',
        translit: 'syntribēsetai',
        gloss: 'shall be shattered / crushed',
        note: 'John 19:36 passive. the Father withholds the fracture.',
        strongs: 'G4937',
        exposition:
          'John’s citation uses the future passive συντριβήσεται (from συντρίβω, to shatter or crush to pieces). The soldiers had legal reason to break legs before sundown. they did so to the two others. The passive in the Scripture-formula marks divine agency. the Son’s bones are not “luckily” intact. they shall not be shattered, because the Exodus/Numbers statute must stand. In the thread this verb is the Greek counterpart of לֹא־תִשְׁבְּרוּ. what Israel was forbidden to do to the lamb, history is forbidden to do to Jesus, even by pagan executioners.',
      },
    ],
  },
  'exo-16-4': {
    title: 'Bread from Heaven',
    principle:
      'God rains bread from heaven for Israel. Jesus: I am the bread of life. the true bread is My flesh. First principle. divine provision is personal and sufficient for eternal life.',
    sourceKeywords: ['rain bread from heaven', 'people', 'gather', 'day by day'],
    fulfillmentKeywords: ['bread of God', 'bread of life', 'came down from heaven', 'flesh', 'world', 'living'],
    terms: [
      { term: 'bread', original: 'לֶחֶם', translit: 'lechem', gloss: 'bread, food', note: 'Greek ἄρτος. John 6 manna discourse.' },
    ],
  },
  'exo-17-6': {
    title: 'Water from the Rock',
    principle:
      'Moses strikes the rock and water comes out. Paul. they drank from the spiritual Rock that followed them, and the Rock was Christ. First principle: God quenches thirst. Christ is the source.',
    sourceKeywords: ['rock', 'Horeb', 'smite', 'water', 'people drink'],
    fulfillmentKeywords: ['Rock', 'Christ', 'water', 'living water', 'thirst', 'drink'],
    terms: [
      { term: 'rock', original: 'הַצּוּר', translit: 'ha-tsur', gloss: 'the rock, crag', note: 'Greek πέτρα (petra) in 1 Cor 10:4. typological Christ.' },
    ],
  },
  'exo-19-6': {
    title: 'Kingdom of Priests',
    principle:
      'Israel is to be a kingdom of priests and holy nation. 1 Peter applies this to the church. Revelation. made priests to God. First principle. the covenant people exist for priestly access and witness.',
    sourceKeywords: ['kingdom of priests', 'holy nation'],
    fulfillmentKeywords: ['holy priesthood', 'royal priesthood', 'holy nation', 'kings and priests', 'priests unto God'],
    terms: [
      { term: 'kingdom of priests', original: 'מַמְלֶכֶת כֹּהֲנִים', translit: 'mamlekhet kohanim', gloss: 'a kingdom of priests', note: 'LXX βασίλειον ἱεράτευμα. 1 Pet 2:9.' },
    ],
  },
  'exo-25-40': {
    title: 'Pattern of the Tabernacle',
    principle:
      'God shows Moses the pattern to build after. Hebrews. earthly tabernacle is a copy and shadow of the heavenly things. First principle. worship order is revealed, not invented. Christ is the true meeting-place.',
    sourceKeywords: ['pattern', 'tabernacle', 'furniture', 'according to all', 'shewed'],
    fulfillmentKeywords: ['example', 'shadow', 'heavenly', 'greater', 'true tabernacle', 'minister'],
    terms: [
      { term: 'pattern', original: 'תַּבְנִית', translit: 'tavnit', gloss: 'pattern, model, form', note: 'Heb 8:5. ὑπόδειγμα / σκιά. copy and shadow.' },
    ],
  },
  'exo-30-10': {
    title: 'Day of Atonement',
    principle:
      'The high priest makes atonement once a year with blood. Hebrews: Christ enters the greater holy place once for all. First principle. access to God is blood-bought and priestly.',
    sourceKeywords: ['atonement', 'horns', 'year', 'once', 'blood', 'sin offering'],
    fulfillmentKeywords: ['once', 'year', 'holiest', 'blood', 'enter', 'atonement', 'offered himself'],
    terms: [
      { term: 'atonement', original: 'כַּפֶּר', translit: 'kapper', gloss: 'to cover, purge, make atonement', note: 'Greek καταλλάσσω / ἱλασμός in NT for reconciliation/propitiation.' },
    ],
  },

  // ── Daniel ──────────────────────────────────────────────────────────────
  'dan-2-34': {
    title: 'Stone Cut Without Hands',
    principle:
      'A stone cut without hands smashes the statue and becomes a great mountain. First principle: God\'s kingdom is not a human empire; it arrives by divine act and fills the earth.',
    sourceKeywords: ['stone', 'cut out', 'without hands', 'mountain', 'great'],
    fulfillmentKeywords: ['stone', 'builders', 'refused', 'head', 'corner', 'church', 'gates of hell'],
    terms: [
      { term: 'without hands', original: 'דִּי לָא בִידַיִן', translit: 'di la bi-dayin', gloss: 'that not by hands (Aramaic)', note: 'Not human craftsmanship — divine kingdom (cf. Col 2:11).' },
    ],
  },
  'dan-2-44': {
    title: 'Everlasting Kingdom',
    principle:
      'In the days of those kings God sets up a kingdom that shall never be destroyed. Luke: of His kingdom there shall be no end. First principle: Christ\'s kingdom outlasts and absorbs all earthly thrones.',
    sourceKeywords: ['days', 'kings', 'set up', 'kingdom', 'never be destroyed', 'people'],
    fulfillmentKeywords: ['throne of his father David', 'kingdom', 'no end', 'kingdoms of this world', 'Lord', 'Christ', 'reign'],
    terms: [
      { term: 'never be destroyed', original: 'לְעָלְמִין לָא תִתְחַבַּל', translit: 'le-ʿalmin la titchabbal', gloss: 'forever it shall not be destroyed (Aramaic)', note: 'Luke 1:33 — His kingdom has no end.' },
    ],
  },
  'dan-7-13': {
    title: 'Son of Man Coming with Clouds',
    principle:
      'One like a Son of Man comes with the clouds of heaven to the Ancient of Days. Jesus claims this title and this coming; Revelation repeats the cloud-coming. First principle: messianic authority is given and then revealed in glory.',
    sourceKeywords: ['night visions', 'one like the Son of man', 'clouds of heaven', 'Ancient of days', 'came'],
    fulfillmentKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'coming', 'clouds', 'every eye'],
    terms: [
      { term: 'Son of Man', original: 'כְּבַר אֱנָשׁ', translit: 'ke-var enash', gloss: 'like a son of man (Aramaic)', note: 'Jesus\' favorite self-title; also Ezekiel\'s visionary title.' },
    ],
  },
  'dan-7-14': {
    title: 'Dominion Given Forever',
    principle:
      'The Son of Man receives dominion, glory, and a kingdom that all peoples should serve Him. Matthew: all authority in heaven and earth. First principle: universal worship and rule belong to the Messiah.',
    sourceKeywords: ['dominion', 'glory', 'kingdom', 'all people', 'nations', 'languages', 'serve', 'everlasting dominion'],
    fulfillmentKeywords: ['All power', 'authority', 'heaven', 'earth', 'name above every name', 'knee', 'bow', 'Lord'],
    terms: [
      { term: 'dominion', original: 'שָׁלְטָן', translit: 'sholtan', gloss: 'dominion, rule (Aramaic)', note: 'Greek ἐξουσία / δόξα in NT applications.' },
    ],
  },
  'dan-9-25': {
    title: 'Messiah the Prince',
    principle:
      'From the decree to restore Jerusalem until Messiah the Prince. First principle: Daniel dates the coming of the Anointed One within a calculable window.',
    sourceKeywords: ['Messiah', 'Prince', 'seven weeks', 'threescore and two weeks', 'street', 'wall', 'troublous'],
    fulfillmentKeywords: ['Jesus Christ', 'Christ', 'Messiah', 'anointed', 'Prince'],
    terms: [
      { term: 'Messiah', original: 'מָשִׁיחַ', translit: 'mashiach', gloss: 'anointed one', note: 'Greek Χριστός (Christos) — Christ.' },
    ],
  },
  'dan-9-26': {
    title: 'Messiah Cut Off',
    principle:
      'After sixty-two weeks Messiah is cut off, but not for Himself. First principle: the Anointed One dies not for His own sin but for others — Isaiah 53 confirmed.',
    sourceKeywords: ['Messiah', 'cut off', 'not for himself', 'people of the prince', 'city', 'sanctuary', 'flood', 'end'],
    fulfillmentKeywords: ['crucified', 'slain', 'cut off', 'not for himself', 'for us', 'ransom'],
    terms: [
      { term: 'cut off', original: 'יִכָּרֵת', translit: 'yikkaret', gloss: 'shall be cut off / destroyed', note: 'Execution language; same as "cut off from his people" in Isa 53:8 LXX.' },
    ],
  },
  'dan-9-27': {
    title: 'He Shall Confirm the Covenant',
    principle:
      'He shall confirm a covenant with many for one week; in the midst he causes sacrifice and oblation to cease. First principle: Messiah\'s death ends the efficacy of the old sacrificial system (Heb 10).',
    sourceKeywords: ['confirm', 'covenant', 'many', 'one week', 'midst', 'cause the sacrifice', 'oblation to cease', 'overspreading', 'abominations', 'desolate'],
    fulfillmentKeywords: ['new testament', 'blood', 'offered', 'once', 'end of the law', 'abolished', 'abomination', 'desolation'],
    terms: [
      { term: 'confirm a covenant', original: 'הִגְבִּיר בְּרִית', translit: 'higbir berit', gloss: 'he shall strengthen/confirm a covenant', note: 'Heb 9:15 — new covenant in Christ\'s blood.' },
    ],
  },
  'dan-12-2': {
    title: 'Many Shall Awake',
    principle:
      'Many who sleep in the dust shall awake: some to everlasting life, some to shame. Jesus and Paul and Revelation all cite bodily resurrection. First principle: death is not final; resurrection is universal and decisive.',
    sourceKeywords: ['sleep', 'dust of the earth', 'awake', 'everlasting life', 'shame', 'contempt'],
    fulfillmentKeywords: ['resurrection of the dead', 'grave', 'come forth', 'life', 'damnation', 'raised incorruptible'],
    terms: [
      { term: 'awake', original: 'יָקִיצוּ', translit: 'yaqitsu', gloss: 'they shall awake / arise', note: 'First clear two-destiny resurrection statement in Scripture.' },
    ],
  },
  'dan-12-3': {
    title: 'Wise Shall Shine',
    principle:
      'Those who turn many to righteousness shall shine as the stars. First principle: faithful witness yields glory in the resurrection life.',
    sourceKeywords: ['wise', 'shine', 'brightness of the firmament', 'turn many to righteousness', 'stars', 'ever and ever'],
    fulfillmentKeywords: ['shine', 'as the sun', 'kingdom of their Father', 'glory', 'star differeth'],
    terms: [
      { term: 'shine', original: 'יַזְהִרוּ', translit: 'yazhiru', gloss: 'they shall shine / cause to shine', note: 'Matt 13:43 — righteous shine as the sun.' },
    ],
  },

  // ── Revelation ──────────────────────────────────────────────────────────
  'rev-1-7': {
    title: 'He Comes with Clouds',
    principle:
      'Behold, He comes with clouds; every eye shall see Him. This echoes Daniel 7 and the ascension-angel promise. First principle: the second coming is public, visible, and universally witnessed.',
    sourceKeywords: ['clouds', 'every eye', 'see him', 'pierced', 'kindreds', 'earth', 'wail'],
    fulfillmentKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'coming', 'see the Son of man'],
    terms: [
      { term: 'pierced', original: 'ἐξεκέντησαν', translit: 'exekentēsan', gloss: 'they pierced / thrust through', note: 'Zech 12:10 — they shall look on me whom they have pierced.' },
    ],
  },
  'rev-1-18': {
    title: 'Keys of Death and Hell',
    principle:
      'The risen Christ holds the keys of death and of Hades. First principle: resurrection is not escape but conquest — Jesus administers death itself.',
    sourceKeywords: ['dead', 'alive', 'keys of hell', 'death', 'for evermore'],
    fulfillmentKeywords: ['All power', 'given', 'heaven', 'earth', 'destroy', 'death', 'swallowed up'],
    terms: [
      { term: 'Hades', original: 'ᾅδης', translit: 'hadēs', gloss: 'realm of the dead', note: 'OT Sheol; conquered by the risen Lord.' },
    ],
  },
  'rev-5-5': {
    title: 'Lion of the Tribe of Judah',
    principle:
      'The Lion of Judah, Root of David, has prevailed to open the scroll. First principle: only the conquering Messiah unlocks God\'s plan for the end.',
    sourceKeywords: ['Lion', 'tribe of Juda', 'Root of David', 'prevailed', 'open the book', 'seals'],
    fulfillmentKeywords: ['Judah', 'lions whelp', 'sceptre', 'Shiloh', 'root', 'offspring', 'David'],
    terms: [
      { term: 'Lion', original: 'λέων', translit: 'leōn', gloss: 'lion', note: 'Gen 49:9 — Judah is a lion\'s whelp.' },
      { term: 'prevailed', original: 'ἐνίκησεν', translit: 'enikēsen', gloss: 'he conquered / overcame', note: 'Nikao — victory theme of Revelation.' },
    ],
  },
  'rev-22-16': {
    title: 'Root and Offspring of David',
    principle:
      'Jesus identifies Himself as the Root and Offspring of David and the bright Morning Star. First principle: He is both the source of David\'s line and its final heir.',
    sourceKeywords: ['root', 'offspring', 'David', 'bright', 'morning star'],
    fulfillmentKeywords: ['Root', 'Branch', 'Jesse', 'David', 'star', 'sceptre', 'Jacob'],
    terms: [
      { term: 'Root and Offspring', original: 'ἡ ῥίζα καὶ τὸ γένος', translit: 'hē riza kai to genos', gloss: 'the root and the descendant', note: 'Isa 11:1, 10 + Num 24:17 — both ends of the Davidic line.' },
    ],
  },
  'rev-21-3': {
    title: 'Behold, the Tabernacle of God',
    principle:
      'The tabernacle of God is with men; He will dwell with them. First principle: exile from Eden ends — God Himself pitches His tent among redeemed humanity.',
    sourceKeywords: ['tabernacle of God', 'men', 'dwell', 'they shall be his people', 'God himself', 'with them'],
    fulfillmentKeywords: ['tabernacle', 'dwell', 'God with us', 'Emmanuel', 'I will be their God'],
    terms: [
      { term: 'tabernacle', original: 'σκηνή', translit: 'skēnē', gloss: 'tent, dwelling, tabernacle', note: 'Exod 25:8 / John 1:14 ἐσκήνωσεν — He tabernacled among us.' },
    ],
  },
  'rev-22-20': {
    title: 'Surely I Come Quickly',
    principle:
      'The Spirit and the bride say Come; Jesus: surely I come quickly. First principle: the church\'s final prayer is eschatological hope, and the promise is personal and near.',
    sourceKeywords: ['surely', 'come quickly', 'Amen', 'Even so', 'come', 'Lord Jesus'],
    fulfillmentKeywords: ['come', 'receive you', 'appear', 'second time', 'looking for', 'Lord'],
    terms: [
      { term: 'Come', original: 'ἔρχου', translit: 'erchou', gloss: 'come! (imperative)', note: 'Aramaic Maranatha behind 1 Cor 16:22 — Our Lord, come.' },
    ],
  },

  // ── Pauline epistles ────────────────────────────────────────────────────
  'rom-1-3': {
    title: 'Seed of David According to the Flesh',
    principle:
      'The gospel concerns God\'s Son, born of the seed of David. First principle: messiahship is historically rooted in the Davidic covenant, not invented in the apostolic age.',
    sourceKeywords: ['Son', 'seed', 'David', 'flesh'],
    fulfillmentKeywords: ['seed', 'David', 'Christ', 'throne', 'son of David'],
    terms: [
      { term: 'seed', original: 'σπέρμα', translit: 'sperma', gloss: 'seed, descendant', note: 'Same thread as Gen 3:15 / 22:18 / 2 Sam 7.' },
    ],
  },
  'rom-1-17': {
    title: 'Justification by Faith from Habakkuk',
    principle:
      'The righteousness of God is revealed from faith to faith: the just shall live by faith. First principle: Habakkuk\'s word becomes the structural key of Romans.',
    sourceKeywords: ['righteousness of God', 'revealed', 'faith', 'faith', 'just', 'live'],
    fulfillmentKeywords: ['just shall live', 'faith', 'Habakkuk'],
    terms: [
      { term: 'just shall live by faith', original: 'ὁ δίκαιος ἐκ πίστεως ζήσεται', translit: 'ho dikaios ek pisteōs zēsetai', gloss: 'the righteous by faith shall live', note: 'Hab 2:4 quoted three times in the NT (Rom 1:17; Gal 3:11; Heb 10:38).' },
    ],
  },
  'rom-3-25': {
    title: 'Propitiation / Mercy Seat',
    principle:
      'Christ Jesus, whom God set forth as a propitiation through faith in His blood. First principle: the cross is the new mercy seat where God\'s justice and mercy meet.',
    sourceKeywords: ['propitiation', 'faith', 'blood', 'remission', 'sins'],
    fulfillmentKeywords: ['mercy seat', 'atonement', 'blood', 'hilasmos', 'hilasterion'],
    terms: [
      { term: 'propitiation', original: 'ἱλαστήριον', translit: 'hilastērion', gloss: 'mercy seat / means of propitiation', note: 'LXX for the kapporet of Exod 25:17 — the ark\'s cover.' },
    ],
  },
  'rom-4-3': {
    title: 'Abraham Believed God',
    principle:
      'Abraham believed God and it was counted to him for righteousness. First principle: justification precedes circumcision, law, and works — it is by faith.',
    sourceKeywords: ['Abraham believed', 'God', 'counted', 'righteousness'],
    fulfillmentKeywords: ['believed', 'counted', 'righteousness'],
    terms: [
      { term: 'counted', original: 'ἐλογίσθη', translit: 'elogisthē', gloss: 'it was credited / reckoned', note: 'LXX Gen 15:6 — same verb as Genesis.' },
    ],
  },
  'rom-5-12': {
    title: 'Sin Entered Through One Man',
    principle:
      'By one man sin entered the world, and death by sin. First principle: Adam\'s fall is federal — death passes to all; Christ\'s obedience is likewise federal for the many.',
    sourceKeywords: ['one man', 'sin', 'entered', 'world', 'death', 'sin', 'death passed', 'all', 'sinned'],
    fulfillmentKeywords: ['one man', 'death', 'resurrection', 'Adam', 'Christ', 'made alive'],
    terms: [
      { term: 'entered', original: 'εἰσῆλθεν', translit: 'eisēlthen', gloss: 'entered / came in', note: 'Parallel to 1 Cor 15:21-22 — Adam/Christ contrast.' },
    ],
  },
  'rom-8-3': {
    title: 'God Sent His Son in the Likeness of Sinful Flesh',
    principle:
      'What the law could not do, God did by sending His own Son in the likeness of sinful flesh. First principle: the law diagnoses but cannot cure; the incarnate Son condemns sin in the flesh.',
    sourceKeywords: ['law', 'weak', 'flesh', 'God sending', 'his own Son', 'likeness', 'sinful flesh', 'condemned sin', 'flesh'],
    fulfillmentKeywords: ['Word', 'flesh', 'dwelt', 'likeness', 'sinful flesh'],
    terms: [
      { term: 'likeness of sinful flesh', original: 'ἐν ὁμοιώματι σαρκὸς ἁμαρτίας', translit: 'en homoiōmati sarkos hamartias', gloss: 'in the likeness of flesh of sin', note: 'Real humanity without being under sin\'s mastery (cf. Phil 2:7).' },
    ],
  },
  'rom-8-32': {
    title: 'He Did Not Spare His Own Son',
    principle:
      'He who did not spare His own Son, but delivered Him up for us all. First principle: the cross is the measure of God\'s generosity — if He gave the Son, He will freely give all things.',
    sourceKeywords: ['spared not', 'own Son', 'delivered him up', 'us all'],
    fulfillmentKeywords: ['only begotten', 'gave', 'world', 'offered', 'himself'],
    terms: [
      { term: 'did not spare', original: 'οὐκ ἐφείσατο', translit: 'ouk epheisato', gloss: 'he did not spare', note: 'Deliberate echo of Gen 22:12 LXX — Abraham did not spare his son.' },
    ],
  },
  'rom-9-33': {
    title: 'Stone of Stumbling',
    principle:
      'Whoever believes on Him shall not be ashamed — but the stone of stumbling. First principle: Christ is either foundation or crusher; there is no neutral response.',
    sourceKeywords: ['stone of stumbling', 'rock of offence', 'believeth', 'ashamed'],
    fulfillmentKeywords: ['stone', 'builders', 'refused', 'head', 'corner', 'stumbling'],
    terms: [
      { term: 'stumbling stone', original: 'λίθος προσκόμματος', translit: 'lithos proskommatos', gloss: 'stone of stumbling', note: 'Isa 8:14; 28:16 combined; 1 Pet 2:6-8.' },
    ],
  },
  'rom-10-13': {
    title: 'Whoever Calls on the Name',
    principle:
      'Whoever shall call on the name of the Lord shall be saved. First principle: Joel\'s last-days promise is fulfilled in gospel proclamation.',
    sourceKeywords: ['call upon', 'name of the Lord', 'saved'],
    fulfillmentKeywords: ['call', 'name of the LORD', 'saved'],
    terms: [
      { term: 'name of the Lord', original: 'ὄνομα κυρίου', translit: 'onoma kyriou', gloss: 'the name of the Lord (YHWH)', note: 'Joel 2:32 applied to Jesus in Acts 2:21, 16:31.' },
    ],
  },
  'rom-15-12': {
    title: 'Root of Jesse — In Him Gentiles Trust',
    principle:
      'Isaiah: there shall be a root of Jesse, and He that shall rise to reign over the Gentiles; in Him shall the Gentiles trust. First principle: Gentile hope is Davidic and messianic.',
    sourceKeywords: ['root', 'Jesse', 'rise', 'reign', 'Gentiles', 'trust'],
    fulfillmentKeywords: ['Root', 'Jesse', 'Branch', 'Gentiles', 'trust'],
    terms: [
      { term: 'root of Jesse', original: 'ἡ ῥίζα τοῦ Ἰεσσαί', translit: 'hē riza tou Iessai', gloss: 'the root of Jesse', note: 'Isa 11:1, 10 — same as Rev 22:16.' },
    ],
  },
  '1co-5-7': {
    title: 'Christ Our Passover',
    principle:
      'Christ our Passover is sacrificed for us; therefore keep the feast. First principle: the Passover lamb\'s death is fulfilled in Christ, reshaping Christian worship and ethics.',
    sourceKeywords: ['Christ our passover', 'sacrificed', 'feast'],
    fulfillmentKeywords: ['lamb', 'without blemish', 'passover', 'blood', 'sacrificed'],
    terms: [
      { term: 'Passover', original: 'τὸ πάσχα', translit: 'to pascha', gloss: 'the Passover (lamb)', note: 'Exod 12 typology made explicit.' },
    ],
  },
  '1co-10-4': {
    title: 'The Rock Was Christ',
    principle:
      'They drank of that spiritual Rock that followed them, and that Rock was Christ. First principle: the wilderness provision is typologically Christological.',
    sourceKeywords: ['spiritual', 'Rock', 'followed', 'Christ'],
    fulfillmentKeywords: ['rock', 'Horeb', 'smite', 'water', 'drink'],
    terms: [
      { term: 'Rock', original: 'πέτρα', translit: 'petra', gloss: 'rock, crag', note: 'Explicit apostolic typology on Exod 17:6.' },
    ],
  },
  '1co-15-3': {
    title: 'Christ Died for Our Sins',
    principle:
      'I delivered: Christ died for our sins according to the Scriptures. First principle: atonement is substitutionary and scriptural — not a bare example.',
    sourceKeywords: ['Christ died', 'our sins', 'according to the scriptures', 'buried', 'rose again', 'third day'],
    fulfillmentKeywords: ['wounded', 'transgressions', 'bruised', 'iniquity', 'chastisement', 'peace'],
    terms: [
      { term: 'for our sins', original: 'ὑπὲρ τῶν ἁμαρτιῶν ἡμῶν', translit: 'hyper tōn hamartiōn hēmōn', gloss: 'on behalf of / for our sins', note: 'Isa 53:5-6 pattern — He bears what is ours.' },
    ],
  },
  '1co-15-20': {
    title: 'Christ the Firstfruits',
    principle:
      'Christ is risen from the dead and become the firstfruits of those who slept. First principle: resurrection is not unique to Jesus in kind — it is the first harvest of many.',
    sourceKeywords: ['risen', 'dead', 'firstfruits', 'slept'],
    fulfillmentKeywords: ['firstfruits', 'slept', 'risen', 'firstborn'],
    terms: [
      { term: 'firstfruits', original: 'ἀπαρχή', translit: 'aparchē', gloss: 'first portion offered to God', note: 'Agricultural type: guarantee of the full harvest (1 Cor 15:23).' },
    ],
  },
  '1co-15-45': {
    title: 'Last Adam Quickening Spirit',
    principle:
      'The first man Adam became a living soul; the last Adam a life-giving spirit. First principle: resurrection life is greater than creation life — and it is in Christ.',
    sourceKeywords: ['first man Adam', 'living soul', 'last Adam', 'quickening spirit'],
    fulfillmentKeywords: ['formed', 'dust', 'breath of life', 'living soul'],
    terms: [
      { term: 'last Adam', original: 'ἔσχατος Ἀδάμ', translit: 'eschatos Adam', gloss: 'the last Adam', note: 'Not merely a second Adam — the final representative head of the new humanity.' },
    ],
  },
  '1co-15-54': {
    title: 'Death Swallowed Up in Victory',
    principle:
      'Death is swallowed up in victory. First principle: Isaiah 25 and Hosea 13 are fulfilled in the bodily resurrection of believers.',
    sourceKeywords: ['death', 'swallowed up', 'victory'],
    fulfillmentKeywords: ['swallow up', 'death', 'wipe away', 'tears'],
    terms: [
      { term: 'swallowed up', original: 'κατεπόθη', translit: 'katepothē', gloss: 'was swallowed down / destroyed', note: 'Isa 25:8 LXX — God swallows death forever.' },
    ],
  },
  '2co-3-3': {
    title: 'Written on Hearts, Not Tables of Stone',
    principle:
      'You are an epistle of Christ, written not with ink but with the Spirit of the living God, not in tables of stone but in fleshy tables of the heart. First principle: the new covenant is internal, not merely external law.',
    sourceKeywords: ['epistle of Christ', 'ministered', 'written', 'Spirit of the living God', 'tables of stone', 'fleshy tables', 'heart'],
    fulfillmentKeywords: ['law', 'heart', 'mind', 'write', 'new covenant'],
    terms: [
      { term: 'fleshy tables of the heart', original: 'πλαξὶν καρδίας σαρκίναις', translit: 'plaxin kardias sarkinais', gloss: 'tablets of hearts of flesh', note: 'Jer 31:33 / Ezek 36:26 fulfilled in Spirit-wrought obedience.' },
    ],
  },
  '2co-5-21': {
    title: 'Made Sin for Us',
    principle:
      'God made Him who knew no sin to be sin for us, that we might become the righteousness of God in Him. First principle: double imputation — our sin to Christ, His righteousness to us.',
    sourceKeywords: ['knew no sin', 'made him', 'sin for us', 'righteousness of God', 'in him'],
    fulfillmentKeywords: ['healed', 'iniquities', 'righteousness', 'justified'],
    terms: [
      { term: 'sin / righteousness', original: 'ἁμαρτίαν / δικαιοσύνη', translit: 'hamartian / dikaiosynē', gloss: 'sin / righteousness', note: 'Legal and covenantal exchange language of Isaiah 53.' },
    ],
  },
  'gal-3-13': {
    title: 'Made a Curse for Us',
    principle:
      'Christ has redeemed us from the curse of the law, being made a curse for us. First principle: the cross absorbs covenant curse so blessing can reach the nations.',
    sourceKeywords: ['redeemed', 'curse of the law', 'made a curse', 'for us', 'written', 'Cursed', 'hangeth on a tree'],
    fulfillmentKeywords: ['hanged', 'accursed', 'tree', 'cursed', 'redeemed'],
    terms: [
      { term: 'curse', original: 'κατάρα', translit: 'katara', gloss: 'curse, execration', note: 'Deut 21:23 — hanged on a tree is under God\'s curse.' },
    ],
  },
  'gal-4-4': {
    title: 'Born of a Woman, Under the Law',
    principle:
      'When the fullness of time came, God sent forth His Son, made of a woman, made under the law. First principle: incarnation is timed, gendered, and legal — for redemption of those under law.',
    sourceKeywords: ['fulness of the time', 'God sent forth', 'his Son', 'made of a woman', 'under the law'],
    fulfillmentKeywords: ['seed', 'woman', 'bruise', 'son', 'born', 'virgin'],
    terms: [
      { term: 'made of a woman', original: 'γενόμενον ἐκ γυναικός', translit: 'genomenon ek gynaikos', gloss: 'born of a woman', note: 'Echo of Gen 3:15 — seed of the woman.' },
    ],
  },
  'eph-1-20': {
    title: 'Seated at God\'s Right Hand',
    principle:
      'God raised Christ and seated Him at His right hand in heavenly places. First principle: resurrection is followed by enthronement above every name.',
    sourceKeywords: ['raised', 'seated', 'right hand', 'heavenly places', 'far above'],
    fulfillmentKeywords: ['sit', 'right hand', 'until', 'enemies', 'footstool'],
    terms: [
      { term: 'right hand', original: 'δεξιᾷ', translit: 'dexia', gloss: 'right hand (place of honor/power)', note: 'Ps 110:1 — the messianic enthronement text most quoted in the NT.' },
    ],
  },
  'eph-2-20': {
    title: 'Built on Apostles and Prophets',
    principle:
      'Built on the foundation of the apostles and prophets, Christ Jesus Himself being the chief corner stone. First principle: church structure is christologically centered, not merely institutional.',
    sourceKeywords: ['foundation', 'apostles', 'prophets', 'Christ Jesus', 'chief corner stone'],
    fulfillmentKeywords: ['stone', 'builders', 'refused', 'head', 'corner'],
    terms: [
      { term: 'corner stone', original: 'ἀκρογωνιαίου', translit: 'akrogōniaiou', gloss: 'cornerstone / capstone', note: 'Ps 118:22 / Isa 28:16 applied to Christ.' },
    ],
  },
  'eph-5-25': {
    title: 'Christ Loved the Church and Gave Himself',
    principle:
      'Husbands love your wives as Christ loved the church and gave Himself for it. First principle: marriage is patterned on self-giving atonement, not mutual utility alone.',
    sourceKeywords: ['loved the church', 'gave himself', 'sanctify', 'cleanse', 'washing', 'water', 'word'],
    fulfillmentKeywords: ['love one another', 'laid down', 'life', 'friends'],
    terms: [
      { term: 'gave Himself', original: 'ἑαυτὸν παρέδωκεν', translit: 'heauton paredōken', gloss: 'He handed over / gave Himself', note: 'Same verb as Judas\' betrayal and God\'s delivering of the Son (Rom 8:32).' },
    ],
  },
  'php-2-6': {
    title: 'Emptied Himself',
    principle:
      'Who being in the form of God, emptied Himself, taking the form of a servant. First principle: kenosis is not loss of deity but voluntary self-limitation for incarnation and cross.',
    sourceKeywords: ['being', 'form of God', 'thought it not robbery', 'equal with God', 'made himself of no reputation', 'form of a servant'],
    fulfillmentKeywords: ['Word', 'God', 'flesh', 'dwelt', 'servant'],
    terms: [
      { term: 'emptied', original: 'ἐκένωσεν', translit: 'ekenōsen', gloss: 'He emptied / made void', note: 'Not "emptied Himself of Godhood" — He took servant form while remaining God.' },
    ],
  },
  'php-2-8': {
    title: 'Obedient to Death, Even the Cross',
    principle:
      'He humbled Himself and became obedient to death, even the death of the cross. First principle: the lowest point of humiliation is the highest act of love — and the path to exaltation.',
    sourceKeywords: ['humbled', 'obedient', 'death', 'cross'],
    fulfillmentKeywords: ['obedient', 'death', 'cross', 'crucified'],
    terms: [
      { term: 'cross', original: 'σταυρός', translit: 'stauros', gloss: 'cross — instrument of Roman execution', note: 'Scandal and glory in one word (1 Cor 1:18).' },
    ],
  },
  'php-2-10': {
    title: 'Every Knee Shall Bow',
    principle:
      'At the name of Jesus every knee should bow. First principle: Isaiah\'s YHWH-claim is applied to Jesus — the most concentrated christological quotation in Paul.',
    sourceKeywords: ['name', 'Jesus', 'every knee', 'bow', 'things in heaven', 'earth', 'under the earth'],
    fulfillmentKeywords: ['every knee', 'bow', 'every tongue', 'swear', 'Lord', 'God'],
    terms: [
      { term: 'every knee', original: 'πᾶν γόνυ', translit: 'pan gony', gloss: 'every knee', note: 'Isa 45:23 — YHWH\'s exclusive claim given to Christ.' },
    ],
  },
  'col-1-15': {
    title: 'Image of the Invisible God',
    principle:
      'He is the image of the invisible God, the firstborn of every creature. First principle: Christ reveals the invisible God and has priority over all creation.',
    sourceKeywords: ['image', 'invisible God', 'firstborn', 'every creature'],
    fulfillmentKeywords: ['image', 'God', 'likeness', 'brightness', 'express image'],
    terms: [
      { term: 'image', original: 'εἰκών', translit: 'eikōn', gloss: 'image, likeness, representation', note: 'Gen 1:26 fulfilled in the Son who images the Father perfectly.' },
    ],
  },
  'col-1-16': {
    title: 'All Things Created by Him',
    principle:
      'By Him all things were created — visible and invisible. First principle: the Son is agent of creation, not its first creature.',
    sourceKeywords: ['by him', 'created', 'all things', 'heaven', 'earth', 'visible', 'invisible', 'thrones', 'dominions'],
    fulfillmentKeywords: ['made', 'worlds', 'all things', 'by him'],
    terms: [
      { term: 'by Him', original: 'ἐν αὐτῷ', translit: 'en autō', gloss: 'in Him / by Him', note: 'John 1:3 — all things were made through Him.' },
    ],
  },
  'col-2-15': {
    title: 'Principalities Spoiled',
    principle:
      'He spoiled principalities and powers, making a show of them openly, triumphing over them in it. First principle: the cross is a public victory parade over demonic powers.',
    sourceKeywords: ['principalities', 'powers', 'spoiled', 'open show', 'triumphing', 'cross'],
    fulfillmentKeywords: ['bruise', 'head', 'destroy', 'works', 'devil', 'cast out'],
    terms: [
      { term: 'triumphing', original: 'θριαμβεύσας', translit: 'thriambeusas', gloss: 'leading in triumphal procession', note: 'Roman victory parade imagery — the cross as conquest.' },
    ],
  },
  '1th-4-16': {
    title: 'The Lord Descends with a Shout',
    principle:
      'The Lord Himself shall descend from heaven with a shout, with the voice of the archangel, with the trumpet of God; the dead in Christ shall rise first. First principle: this is the public, bodily second coming of Christ and the resurrection of the dead — the same event Jesus and Paul teach elsewhere — not a secret removal of the church before judgment.',
    sourceKeywords: ['Lord himself', 'descend', 'heaven', 'shout', 'voice', 'archangel', 'trumpet', 'God', 'dead in Christ', 'rise first'],
    fulfillmentKeywords: ['trumpet', 'dead', 'raise', 'incorruptible', 'angel', 'descend', 'Son of man', 'coming'],
    terms: [
      { term: 'trumpet of God', original: 'σάλπιγγι θεοῦ', translit: 'salpingi theou', gloss: 'trumpet of God', note: 'Isa 27:13 / Matt 24:31 / 1 Cor 15:52 — one public eschatological coming, not a separate secret event.' },
      { term: 'the dead in Christ shall rise', original: 'οἱ νεκροὶ ἐν Χριστῷ ἀναστήσονται πρῶτον', translit: 'hoi nekroi en Christō anastēsontai prōton', gloss: 'the dead in Christ will rise first', note: 'Resurrection at the last day (John 6:39-40), simultaneous with Christ\'s visible return.' },
    ],
  },
  '1th-4-17': {
    title: 'Together to Meet the Lord',
    principle:
      'Then we who are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air, and so shall we ever be with the Lord. First principle: living believers join the resurrected dead to greet the returning King — the one public second advent, not a secret or two-stage removal of the church. Comfort one another with these words: Christ comes, the dead rise, and we are with Him forever.',
    sourceKeywords: ['caught up', 'together', 'clouds', 'meet the Lord', 'air', 'ever be with the Lord'],
    fulfillmentKeywords: ['Son of man', 'coming', 'clouds', 'gather', 'elect', 'angels', 'trumpet'],
    terms: [
      { term: 'caught up together', original: 'ἁρπαγησόμεθα ἅμα', translit: 'harpagēsometha hama', gloss: 'we shall be caught/snatched together', note: 'Greek ἅρπαζω — seize/catch (cf. Acts 8:39); not a separate secret coming. The context is resurrection (v16) and permanent fellowship with the Lord (v17), paralleling Matt 24:30-31.' },
    ],
  },
  '1ti-2-5': {
    title: 'One Mediator Between God and Men',
    principle:
      'There is one God and one Mediator between God and men, the man Christ Jesus. First principle: mediation is exclusive, incarnate, and sufficient.',
    sourceKeywords: ['one God', 'one Mediator', 'God', 'men', 'man', 'Christ Jesus'],
    fulfillmentKeywords: ['no man cometh', 'Father', 'by me', 'mediator', 'new testament'],
    terms: [
      { term: 'Mediator', original: 'μεσίτης', translit: 'mesitēs', gloss: 'mediator, go-between, arbitrator', note: 'Heb 8:6; 9:15 — Christ as mediator of the new covenant.' },
    ],
  },
  '1ti-3-16': {
    title: 'God Manifest in the Flesh',
    principle:
      'God was manifest in the flesh, justified in the Spirit, seen of angels, preached to the Gentiles. First principle: incarnation, vindication, and mission are one mystery of godliness.',
    sourceKeywords: ['mystery of godliness', 'God', 'manifest', 'flesh', 'justified', 'Spirit', 'seen', 'angels', 'preached', 'Gentiles', 'believed', 'world', 'received up', 'glory'],
    fulfillmentKeywords: ['Word', 'flesh', 'dwelt', 'glory', 'only begotten'],
    terms: [
      { term: 'manifest in the flesh', original: 'ἐφανερώθη ἐν σαρκί', translit: 'ephanerōthē en sarki', gloss: 'He was revealed in flesh', note: 'John 1:14 parallel — the Word tabernacled among us.' },
    ],
  },
  '2ti-3-16': {
    title: 'All Scripture God-Breathed',
    principle:
      'All Scripture is given by inspiration of God and is profitable. First principle: the written Word is the Spirit\'s breath — authoritative, sufficient, and equipping.',
    sourceKeywords: ['All scripture', 'given by inspiration of God', 'profitable', 'doctrine', 'reproof', 'correction', 'instruction', 'righteousness'],
    fulfillmentKeywords: ['holy men', 'God', 'spake', 'moved', 'Holy Ghost'],
    terms: [
      { term: 'inspiration', original: 'θεόπνευστος', translit: 'theopneustos', gloss: 'God-breathed / breathed out by God', note: 'Unique NT word; root pneuma — Spirit.' },
    ],
  },
  '2ti-4-1': {
    title: 'Judge the Quick and the Dead',
    principle:
      'I charge you before God and Christ Jesus who shall judge the quick and the dead at His appearing. First principle: ministry is accountable to the returning Judge.',
    sourceKeywords: ['charge', 'God', 'Christ Jesus', 'judge', 'quick', 'dead', 'appearing', 'kingdom'],
    fulfillmentKeywords: ['judge', 'quick', 'dead', 'appearing', 'kingdom'],
    terms: [
      { term: 'quick and the dead', original: 'ζώντων καὶ νεκρῶν', translit: 'zōntōn kai nekrōn', gloss: 'the living and the dead', note: 'Acts 10:42; 1 Pet 4:5 — universal judicial authority of Christ.' },
    ],
  },
  'tit-2-13': {
    title: 'Looking for That Blessed Hope',
    principle:
      'Looking for that blessed hope and the glorious appearing of the great God and our Saviour Jesus Christ. First principle: Christian ethics are sustained by eschatological hope.',
    sourceKeywords: ['blessed hope', 'glorious appearing', 'great God', 'Saviour', 'Jesus Christ'],
    fulfillmentKeywords: ['appear', 'second time', 'looking', 'Lord', 'come'],
    terms: [
      { term: 'appearing', original: 'ἐπιφάνειαν', translit: 'epiphaneian', gloss: 'appearing, manifestation', note: 'Same word for first (2 Tim 1:10) and second coming.' },
    ],
  },

  // ── Scripture-grounded: Sabbath, sanctuary, judgment, remnant, state of dead ──
  'exo-20-8': {
    title: 'Remember the Sabbath Day. Grounded in Creation and Fulfilled in Christ.',
    principle:
      'The Fourth Commandment: Remember the Sabbath day, to keep it holy. Grounded explicitly in the Creation Sabbath of Genesis 2:2-3 and sealed as a perpetual covenant sign in Exodus 31:16-17, the Sabbath is proclaimed as a holy delight by Isaiah (Isa 58:13-14). Jesus declares Himself Lord of the Sabbath (Mark 2:27-28) customarily observes it (Luke 4:16) and Hebrews affirms an eschatological Sabbath-rest (sabbatismos) remaining for the people of God (Heb 4:9). First principle. the Sabbath is a moral, perpetual creation ordinance memorializing the Creator\'s rest and pointing forward to the finished rest of redemption.',
    sourceKeywords: ['Remember', 'sabbath day', 'keep it holy', 'seventh day', 'rest', 'labour', 'hallowed'],
    fulfillmentKeywords: ['creation', 'blessed', 'sanctified', 'perpetual covenant', 'sign', 'delight', 'Lord of the sabbath', 'custom', 'synagogue', 'rest remaineth', 'people of God', 'sabbatismos'],
    terms: [
      { term: 'Sabbath', original: 'שַׁבָּת', translit: 'shabbat', gloss: 'rest, sabbath (from shavat. cease).', note: 'Greek σάββατον in NT. same seventh-day institution from creation (Gen 2:2-3. Exod 20:11) through the covenant sign (Exod 31:16-17) and prophets (Isa 58:13-14) to Hebrews 4.' },
      { term: 'keep it holy', original: 'לְקַדְּשׁוֹ', translit: 'le-qaddesho', gloss: 'to sanctify / set it apart', note: 'Same qadash root as God sanctifying the seventh day in Gen 2:3.' },
      { term: 'perpetual covenant', original: 'בְּרִית עוֹלָם', translit: 'berit ʿolam', gloss: 'everlasting covenant / sign', note: 'Exod 31:16-17 seals the Sabbath as a perpetual covenant memorial of Creation.' },
      { term: 'Sabbath-rest', original: 'σαββατισμός', translit: 'sabbatismos', gloss: 'sabbath-rest / sabbath-keeping', note: 'Heb 4:9. there remains therefore a rest (sabbatismos) to the people of God.' },
    ],
  },
  'exo-20-11': {
    title: 'Seventh Day. Pattern from Creation.',
    principle:
      'The Sabbath command is grounded in creation itself. in six days the LORD made heaven and earth and rested the seventh day. Ezekiel calls it also a sign between God and Israel (Ezek 20:12, 20). Hebrews 4:4 quotes Genesis 2:2 for the same rest. Textual proof: Sinai cites creation, not a later Israelite invention. the seventh day is named as the day God rested.',
    sourceKeywords: ['six days', 'made', 'heaven', 'earth', 'sea', 'seventh day', 'rested', 'blessed', 'sabbath', 'hallowed'],
    fulfillmentKeywords: ['rested', 'seventh day', 'works were finished', 'God did rest'],
    terms: [
      { term: 'seventh day', original: 'הַשְּׁבִיעִי', translit: 'ha-sheviʿi', gloss: 'the seventh', note: 'Ordinal is explicit. not "a" day but "the" seventh. Heb 4:4 preserves this creation logic.' },
    ],
  },
  'dan-7-9': {
    title: 'Thrones Set — Judgment Court',
    principle:
      'Daniel sees thrones set in place; the Ancient of Days takes His seat; the court sits in judgment and books are opened. Jesus, Paul, and Revelation all place judgment in God\'s court before the final kingdom. Textual proof: Dan 7:9-10 is a heavenly judgment scene; Dan 7:22 says judgment was given to the saints of the Most High — i.e., a judicial verdict precedes their possession of the kingdom.',
    sourceKeywords: ['thrones', 'cast down', 'Ancient of days', 'did sit', 'judgment', 'set', 'books', 'opened'],
    fulfillmentKeywords: ['judgment', 'set', 'thrones', 'books', 'opened', 'judged'],
    terms: [
      { term: 'judgment', original: 'דִּין', translit: 'din', gloss: 'judgment, legal case', note: 'Aramaic din — court proceeding, not mere destruction. Dan 7:22 links this judgment to the saints receiving the kingdom (cf. 1 Cor 6:2-3).' },
      { term: 'books were opened', original: 'סִפְרִין פְּתִיחוּ', translit: 'sifrin peticḥu', gloss: 'books were opened', note: 'Same book-image in Rev 20:12 at the final judgment; also Exod 32:32-33; Ps 139:16.' },
    ],
  },
  'dan-7-22': {
    title: 'Judgment Given to the Saints',
    principle:
      'The judgment came, and the saints of the Most High possessed the kingdom. Textual proof: heavenly court (v9-10) issues a verdict, then the saints receive dominion. Paul writes that the saints shall judge the world and even angels (1 Cor 6:2-3). Revelation 20:4 shows thrones and judgment given to those who reign with Christ.',
    sourceKeywords: ['judgment came', 'saints of the most High', 'possessed', 'kingdom'],
    fulfillmentKeywords: ['judge', 'world', 'angels', 'thrones', 'judgment'],
    terms: [
      { term: 'the judgment came', original: 'וּדְיָנָא יְהִיבַת', translit: 'u-deyana yehivat', gloss: 'and the judgment was given', note: 'Passive — divine initiative; the court\'s decision precedes possession of the kingdom.' },
    ],
  },
  'dan-8-14': {
    title: 'Unto 2,300 Days — Then the Sanctuary Cleansed',
    principle:
      'An holy one answers: unto two thousand and three hundred days; then shall the sanctuary be made right. Hebrews shows the earthly sanctuary as pattern of the heavenly (Heb 8:1-2; 9:23-24). Leviticus 16 describes the annual cleansing of the sanctuary by blood. Textual proof: Daniel\'s time prophecy ends at a sanctuary event; Hebrews locates Christ\'s ministry in the true tabernacle; Leviticus defines what "cleansed/right" means in priestly context — removal of accumulated sin from the sanctuary.',
    sourceKeywords: ['two thousand and three hundred', 'days', 'sanctuary', 'cleansed'],
    fulfillmentKeywords: ['true tabernacle', 'greater', 'more perfect', 'heaven itself', 'purged', 'sanctuary'],
    terms: [
      { term: '2,300 evenings and mornings', original: 'עֶרֶב בֹּקֶר', translit: 'erev voqer', gloss: 'evening morning (≈ days)', note: 'Hebrew idiom matching Gen 1 — a day-count. Ends at a sanctuary-cleansing event (cf. Lev 16:16-19; Heb 9:22-24).' },
      { term: 'made right / cleansed', original: 'וְנִצְדַּק', translit: 've-nitsdaq', gloss: 'and it shall be justified / vindicated / made righteous', note: 'Cadaq — same root as "righteous." In sanctuary context: purged so it stands right before God.' },
    ],
  },
  'dan-9-24': {
    title: 'Seventy Weeks — Finish Transgression, Make Reconciliation',
    principle:
      'Seventy weeks are determined upon your people and your holy city, to finish the transgression, to make an end of sins, to make reconciliation for iniquity, to bring in everlasting righteousness, to seal up vision and prophecy, and to anoint the Most Holy. Textual proof: the window includes Messiah\'s mission (v25-27); Hebrews 9:26 speaks of Christ appearing at the end of the ages to put away sin by Himself.',
    sourceKeywords: ['seventy weeks', 'determined', 'people', 'holy city', 'finish transgression', 'end of sins', 'reconciliation', 'iniquity', 'everlasting righteousness', 'seal up', 'vision', 'prophecy', 'anoint'],
    fulfillmentKeywords: ['put away sin', 'end of the world', 'appeared', 'once', 'reconciliation'],
    terms: [
      { term: 'seventy weeks', original: 'שָׁבֻעִים שִׁבְעִים', translit: 'shavuʿim shivʿim', gloss: 'seventy sevens / weeks', note: 'Prophetic day-units; the six purposes are messianic and soteriological, matching NT work of Christ.' },
    ],
  },
  'rev-12-17': {
    title: 'Remnant Who Keep God\'s Commandments',
    principle:
      'The dragon is wroth with the woman and goes to make war with the remnant of her seed, who keep the commandments of God and have the testimony of Jesus. Rev 14:12 defines the end-time saints the same way: patience of the saints, keep the commandments of God, and the faith of Jesus. Jesus: if you love me, keep my commandments (John 14:15). Textual proof: the remnant is identified by obedience to God\'s commandments joined to faith in Christ — not by ethnicity or mere profession.',
    sourceKeywords: ['remnant', 'seed', 'keep', 'commandments of God', 'testimony', 'Jesus'],
    fulfillmentKeywords: ['patience', 'saints', 'commandments of God', 'faith of Jesus', 'keep', 'commandments'],
    terms: [
      { term: 'remnant', original: 'λοιπόν', translit: 'loipon', gloss: 'the rest / remnant', note: 'Same remnant idea as Isa 10:20-22; Rom 9:27 — a remaining people of God after apostasy.' },
      { term: 'keep the commandments', original: 'τηρούντων τὰς ἐντολὰς τοῦ θεοῦ', translit: 'tērountōn tas entolas tou theou', gloss: 'keeping the commandments of God', note: 'τηρέω — guard/keep as ongoing discipleship (John 14:15; 15:10).' },
    ],
  },
  'rev-14-7': {
    title: 'Fear God — The Hour of His Judgment',
    principle:
      'The first angel proclaims with a loud voice: Fear God, and give glory to Him; for the hour of His judgment is come; worship Him that made heaven, and earth, and the sea, and the fountains of waters. Textual proof: (1) this is a pre-advent judgment message — "the hour of His judgment is come" precedes Christ\'s second coming in ch. 19; (2) the call to worship the Creator echoes the Sabbath commandment (Exod 20:11); (3) Ecclesiastes ends with: Fear God, and keep his commandments (Eccl 12:13); (4) Acts 17:30-31: God commands all men to repent because He has appointed a day of judgment by the man Christ Jesus.',
    sourceKeywords: ['Fear God', 'give glory', 'hour of his judgment', 'is come', 'worship', 'made', 'heaven', 'earth', 'sea', 'fountains of waters'],
    fulfillmentKeywords: ['judge', 'quick', 'dead', 'appearing', 'day', 'judgment', 'Creator'],
    terms: [
      { term: 'the hour of His judgment', original: 'ἡ ὥρα τῆς κρίσεως αὐτοῦ', translit: 'hē hōra tēs kriseōs autou', gloss: 'the hour of His judgment', note: 'Fixed, appointed judgment-time — same language family as John 5:22-27 (Son given judgment) and Acts 17:31 (appointed day).' },
      { term: 'made heaven and earth', original: 'τὸν ποιήσαντα τὸν οὐρανὸν καὶ τὴν γῆν', translit: 'ton poiēsanta ton ouranon kai tēn gēn', gloss: 'the One who made heaven and earth', note: 'Direct verbal echo of Exod 20:11 / Ps 146:6 — Creator-worship, not creature-worship.' },
    ],
  },
  'rev-14-12': {
    title: 'Patience, Commandments, and Faith of Jesus',
    principle:
      'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus. Textual proof: this defines the people of God in the hour of judgment (v7) and Babylon\'s fall (v8). They obey God\'s commandments and rest in Christ\'s faith/faithfulness — the same combination as Rev 12:17. Jesus: if you love me, keep my commandments (John 14:15).',
    sourceKeywords: ['patience', 'saints', 'keep', 'commandments of God', 'faith of Jesus'],
    fulfillmentKeywords: ['keep', 'commandments', 'faith', 'Jesus', 'love me'],
    terms: [
      { term: 'faith of Jesus', original: 'πίστιν Ἰησοῦ', translit: 'pistin Iēsou', gloss: 'faith / faithfulness of Jesus (Heb. genitive)', note: 'Either His faithfulness or faith in Him — both biblical; either way, allegiance to Christ is required together with obedience.' },
    ],
  },
  'rev-20-4': {
    title: 'Thrones, Judgment, and the First Resurrection',
    principle:
      'John sees thrones; judgment is given to them; souls of the beheaded live and reign with Christ a thousand years. Textual proof: (1) judgment is given to saints (Dan 7:22; 1 Cor 6:2-3); (2) they live — resurrection, not disembodied bliss; (3) the rest of the dead live not again until the thousand years are finished (v5). Therefore the dead are dead until Christ raises them (Dan 12:2; John 5:28-29; 1 Thess 4:16). The righteous dead receive life at Christ\'s return; the wicked remain dead until the second resurrection after the thousand years.',
    sourceKeywords: ['thrones', 'judgment', 'souls', 'beheaded', 'witness of Jesus', 'word of God', 'live', 'reign', 'Christ', 'thousand years'],
    fulfillmentKeywords: ['dead in Christ', 'rise', 'resurrection', 'first', 'judgment'],
    terms: [
      { term: 'first resurrection', original: 'ἡ ἀνάστασις ἡ πρώτη', translit: 'hē anastasis hē prōtē', gloss: 'the resurrection, the first', note: 'Bodily raising of the righteous at Christ\'s coming (John 5:28-29; 1 Cor 15:23). Rev 20:5-6: the rest of the dead live not until later — the dead do not go to heaven/hell at death.' },
      { term: 'souls', original: 'τὰς ψυχάς', translit: 'tas psychas', gloss: 'the souls / lives / persons', note: 'Often "persons" (Acts 2:41; 7:14) — here the martyrs themselves, who live by resurrection, not by already being in heaven.' },
    ],
  },
  'rev-20-5': {
    title: 'The Rest of the Dead Live Not Again',
    principle:
      'This is the first resurrection. Blessed and holy is he that has part in the first resurrection; the second death has no power. But the rest of the dead lived not again until the thousand years were finished. Textual proof: the dead are unconscious until raised (Eccl 9:5; Ps 6:5; 146:4; Dan 12:2). There are two resurrections: of the just at Christ\'s return, of the unjust later (John 5:28-29; Acts 24:15). Immortality is a gift given at the resurrection, not an inherent property of the soul (1 Cor 15:51-54).',
    sourceKeywords: ['first resurrection', 'rest of the dead', 'lived not again', 'thousand years', 'finished', 'blessed', 'holy', 'second death'],
    fulfillmentKeywords: ['resurrection of the dead', 'just', 'unjust', 'sleep', 'dust', 'awake'],
    terms: [
      { term: 'lived not again', original: 'οὐκ ἔζησαν', translit: 'ouk ezēsan', gloss: 'they did not live again', note: 'Explicit denial of intermediate conscious life for the wicked dead until the later resurrection.' },
    ],
  },
  'rev-14-14': {
    title: 'One Like the Son of Man — Public Harvest',
    principle:
      'A white cloud, and upon the cloud one sat like unto the Son of man, having on his head a golden crown. Textual proof: Daniel 7:13-14 — Son of Man coming with clouds to receive dominion; Matthew 24:30-31 — they shall see the Son of man coming in the clouds with power and great glory, and He gathers His elect with a great sound of a trumpet. This is the visible, glorious second coming — one public event, not a secret removal.',
    sourceKeywords: ['white cloud', 'sat', 'like unto the Son of man', 'golden crown', 'sharp sickle', 'thrust in'],
    fulfillmentKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'coming', 'gather', 'elect', 'trumpet'],
    terms: [
      { term: 'one like the Son of man', original: 'ὅμοιον υἱὸν ἀνθρώπου', translit: 'homoion huion anthrōpou', gloss: 'one like a son of man', note: 'Verbal chain: Dan 7:13 → Matt 24:30 → Rev 14:14 — the same glorious coming.' },
    ],
  },

  // ── Gospels / Acts / Hebrews / General Epistles ─────────────────────────
  'mat-1-23': {
    title: 'Emmanuel — God With Us',
    principle:
      'Matthew quotes Isaiah 7:14: a virgin shall bear a son, and they shall call his name Emmanuel. Textual proof: direct OT quotation; Isaiah 8:8, 10 also use the name. The evangelist identifies Jesus as that child.',
    sourceKeywords: ['virgin', 'shall bring forth', 'son', 'call his name', 'Emmanuel', 'God with us'],
    fulfillmentKeywords: ['virgin', 'Emmanuel', 'God with us'],
    terms: [
      { term: 'Emmanuel', original: 'עִמָּנוּ אֵל', translit: 'Immanuʾel', gloss: 'with-us God', note: 'Isa 7:14 LXX παρθένος — Matthew applies the same text to Jesus\' birth.' },
    ],
  },
  'mat-2-6': {
    title: 'Out of Bethlehem Shall Come a Governor',
    principle:
      'The chief priests cite Micah 5:2 for the Messiah\'s birthplace. Textual proof: Matthew 2:5-6 quotes Micah; Micah 5:2 itself promises a ruler from Bethlehem whose goings forth are from everlasting.',
    sourceKeywords: ['Bethlehem', 'land of Juda', 'not the least', 'governor', 'rule', 'people Israel'],
    fulfillmentKeywords: ['Bethlehem', 'Ephratah', 'ruler', 'Israel', 'everlasting'],
    terms: [
      { term: 'Bethlehem Ephratah', original: 'בֵּית לֶחֶם אֶפְרָתָה', translit: 'Beit Lechem Ephratah', gloss: 'house of bread, Ephrathah', note: 'Mic 5:2 — little among the thousands of Judah, yet source of ruler.' },
    ],
  },
  'mat-4-4': {
    title: 'It Is Written',
    principle:
      'Jesus answers temptation with Deuteronomy 8:3. Textual proof: each wilderness answer quotes Torah (Deut 8:3; 6:16; 6:13). Scripture is the sufficient authority against the tempter.',
    sourceKeywords: ['It is written', 'Man shall not live', 'bread alone', 'every word', 'proceedeth', 'mouth of God'],
    fulfillmentKeywords: ['Deuteronomy', 'word of God', 'bread'],
    terms: [
      { term: 'It is written', original: 'γέγραπται', translit: 'gegraptai', gloss: 'it has been written (perfect)', note: 'Settled, standing OT text — Jesus\' pattern of proof.' },
    ],
  },
  'mat-24-30': {
    title: 'Son of Man Coming in the Clouds',
    principle:
      'They shall see the Son of man coming in the clouds of heaven with power and great glory. Textual proof: direct use of Daniel 7:13-14; echoed in Mark 13:26, Luke 21:27, Rev 1:7, 14:14. Public, visible, glorious — one coming.',
    sourceKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'tribes of the earth', 'mourn'],
    fulfillmentKeywords: ['one like the Son of man', 'clouds of heaven', 'Ancient of days', 'dominion'],
    terms: [
      { term: 'coming in the clouds', original: 'ἐρχόμενον ἐπὶ τῶν νεφελῶν', translit: 'erchomenon epi tōn nephelōn', gloss: 'coming upon the clouds', note: 'Dan 7:13 LXX — same cloud-coming; universal visibility (Matt 24:27).' },
    ],
  },
  'joh-1-14': {
    title: 'The Word Became Flesh',
    principle:
      'The Word was made flesh and dwelt among us. Textual proof: John 1:1 identifies the Word with God and as agent of creation (1:3); 1:14 tabernacles among us (σκηνόω, same root as OT tabernacle); Col 2:9 — in Him dwells all the fullness of the Godhead bodily.',
    sourceKeywords: ['Word', 'was made flesh', 'dwelt', 'among us', 'glory', 'only begotten', 'Father', 'grace', 'truth'],
    fulfillmentKeywords: ['tabernacle', 'dwell', 'among them', 'glory'],
    terms: [
      { term: 'dwelt', original: 'ἐσκήνωσεν', translit: 'eskēnōsen', gloss: 'tabernacled / pitched His tent', note: 'Exod 25:8 / 40:34 — God dwelling among His people; fulfilled in incarnate Christ.' },
    ],
  },
  'joh-3-14': {
    title: 'As Moses Lifted Up the Serpent',
    principle:
      'As Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up. Textual proof: Jesus explicitly types Numbers 21:9 to His cross — looking at the raised sign is the means of life.',
    sourceKeywords: ['Moses lifted up', 'serpent', 'wilderness', 'Son of man', 'lifted up', 'whosoever believeth'],
    fulfillmentKeywords: ['serpent', 'brass', 'look', 'live'],
    terms: [
      { term: 'lifted up', original: 'ὑψωθῆναι', translit: 'hypsōthēnai', gloss: 'to be lifted up / exalted', note: 'John uses this for crucifixion (3:14; 8:28; 12:32-34) — cross as the raised serpent.' },
    ],
  },
  'joh-5-39': {
    title: 'The Scriptures Testify of Me',
    principle:
      'Search the scriptures… they are they which testify of me. Textual proof: Jesus claims the entire OT as witness to Himself; Luke 24:27, 44 — He expounded Moses, prophets, and Psalms concerning Himself.',
    sourceKeywords: ['Search the scriptures', 'testify of me', 'ye might have life'],
    fulfillmentKeywords: ['Moses', 'prophets', 'Psalms', 'written', 'concerning me'],
    terms: [
      { term: 'testify', original: 'μαρτυροῦσαι', translit: 'marturousai', gloss: 'they bear witness (present)', note: 'Ongoing witness of the written word to Christ.' },
    ],
  },
  'joh-6-31': {
    title: 'Bread from Heaven',
    principle:
      'Our fathers did eat manna in the desert; as it is written, He gave them bread from heaven to eat. Textual proof: Jesus cites the Exodus 16 manna narrative and applies it to Himself as the true bread (John 6:32-35, 48-51).',
    sourceKeywords: ['manna', 'desert', 'written', 'bread from heaven', 'eat'],
    fulfillmentKeywords: ['bread of God', 'came down from heaven', 'bread of life', 'flesh'],
    terms: [
      { term: 'bread from heaven', original: 'ἄρτον ἐκ τοῦ οὐρανοῦ', translit: 'arton ek tou ouranou', gloss: 'bread out of heaven', note: 'Exod 16:4, 15 — manna as type; Jesus is the greater gift.' },
    ],
  },
  'joh-8-58': {
    title: 'Before Abraham Was, I AM',
    principle:
      'Jesus answers: Before Abraham was, I AM. Textual proof: Exodus 3:14 — I AM THAT I AM; Isaiah 43:10 — I am He. The present claim outranks Abraham\'s past existence; the hearers take it as blasphemy (v59).',
    sourceKeywords: ['Before Abraham was', 'I AM'],
    fulfillmentKeywords: ['I AM', 'THAT I AM', 'self-existent'],
    terms: [
      { term: 'I AM', original: 'ἐγώ εἰμι', translit: 'egō eimi', gloss: 'I am / I am He', note: 'Divine self-identification; same as Exod 3:14 LXX ἐγώ εἰμι ὁ ὤν.' },
    ],
  },
  'act-2-25': {
    title: 'David Speaks of Christ\'s Resurrection',
    principle:
      'Peter quotes Psalm 16:8-11 for Jesus\' resurrection. Textual proof: Acts 2:25-36 argues David did not rise; his Son did. Paul makes the same argument in Acts 13:35-37.',
    sourceKeywords: ['David speaketh', 'I foresaw the Lord', 'right hand', 'not suffer', 'Holy One', 'see corruption'],
    fulfillmentKeywords: ['rose', 'dead', 'raised up', 'Christ'],
    terms: [
      { term: 'see corruption', original: 'διαφθοράν', translit: 'diaphthoran', gloss: 'decay / corruption', note: 'Ps 16:10 LXX — applied to bodily resurrection of Jesus (Acts 2:31).' },
    ],
  },
  'act-3-22': {
    title: 'A Prophet Like Moses',
    principle:
      'Moses said: A prophet shall the Lord your God raise up… like unto me. Textual proof: Deuteronomy 18:15-19 quoted as fulfilled in Jesus; same text as John 1:45.',
    sourceKeywords: ['Moses truly said', 'prophet', 'raise up', 'like unto me', 'hearken'],
    fulfillmentKeywords: ['Moses', 'prophet', 'like unto me'],
    terms: [
      { term: 'like unto me', original: 'כָּמֹנִי', translit: 'kamoni', gloss: 'like me', note: 'Deut 18:15 — prophet of God\'s word from among the brethren.' },
    ],
  },
  'heb-1-2': {
    title: 'By Whom Also He Made the Worlds',
    principle:
      'God has spoken by His Son, by whom also He made the worlds. Textual proof: John 1:3 — all things made by Him; Col 1:16 — by Him all things created. Son as agent of creation and final revealer.',
    sourceKeywords: ['spoken', 'Son', 'appointed', 'heir of all things', 'by whom', 'made', 'worlds'],
    fulfillmentKeywords: ['made', 'worlds', 'by him', 'created', 'all things'],
    terms: [
      { term: 'worlds', original: 'αἰῶνας', translit: 'aiōnas', gloss: 'ages / worlds', note: 'Heb 11:3 — worlds framed by the word of God.' },
    ],
  },
  'heb-4-4': {
    title: 'God Rested the Seventh Day',
    principle:
      'He spake in a certain place of the seventh day on this wise: And God did rest the seventh day from all his works. Textual proof: Hebrews 4:4 quotes Genesis 2:2; 4:9 — there remains a Sabbath rest (σαββατισμός) to the people of God.',
    sourceKeywords: ['seventh day', 'God did rest', 'works'],
    fulfillmentKeywords: ['rested', 'seventh day', 'finished'],
    terms: [
      { term: 'a Sabbath rest', original: 'σαββατισμὸς', translit: 'sabbatismos', gloss: 'a sabbath-keeping / sabbath rest', note: 'Unique NT word — points to the people of God\'s remaining rest (Heb 4:9), grounded in creation rest (4:4).' },
    ],
  },
  'heb-8-5': {
    title: 'Pattern and Shadow of Heavenly Things',
    principle:
      'Who serve unto the example and shadow of heavenly things, as Moses was admonished… See that thou make all things according to the pattern. Textual proof: Exodus 25:40 quoted; Hebrews 9:11-12, 23-24 — Christ ministers in the greater, more perfect tabernacle, not made with hands.',
    sourceKeywords: ['example', 'shadow', 'heavenly things', 'pattern', 'shewed', 'mount'],
    fulfillmentKeywords: ['pattern', 'tabernacle', 'heavenly', 'greater', 'true tabernacle'],
    terms: [
      { term: 'shadow / pattern', original: 'σκιᾷ / τύπος', translit: 'skia / typos', gloss: 'shadow / pattern, model', note: 'Exod 25:40 — earthly system as copy of heavenly reality fulfilled in Christ.' },
    ],
  },
  'heb-8-8': {
    title: 'A New Covenant',
    principle:
      'Behold, the days come, saith the Lord, when I will make a new covenant with the house of Israel. Textual proof: Jeremiah 31:31-34 quoted at length in Hebrews 8:8-12 and 10:16-17; Jesus names the new covenant in His blood (Luke 22:20; 1 Cor 11:25).',
    sourceKeywords: ['new covenant', 'house of Israel', 'house of Judah', 'laws', 'mind', 'hearts', 'merciful', 'unrighteousness', 'remember no more'],
    fulfillmentKeywords: ['new testament', 'blood', 'write', 'heart', 'mind'],
    terms: [
      { term: 'new covenant', original: 'בְּרִית חֲדָשָׁה', translit: 'berit chadashah', gloss: 'new covenant', note: 'Jer 31:31 — internalized law, forgiveness, knowledge of God; inaugurated at the cross.' },
    ],
  },
  'heb-9-23': {
    title: 'Purged with Blood — Heavenly Things',
    principle:
      'It was necessary that the patterns of things in the heavens should be purified with these; but the heavenly things themselves with better sacrifices. Textual proof: Leviticus 16 blood-rite as pattern; Christ\'s once-for-all offering in the true sanctuary (Heb 9:11-12, 24-26).',
    sourceKeywords: ['patterns', 'things in the heavens', 'purified', 'blood', 'heavenly things', 'better sacrifices'],
    fulfillmentKeywords: ['blood', 'purged', 'sanctuary', 'once', 'offer'],
    terms: [
      { term: 'better sacrifices', original: 'κρείττοσιν θυσίαις', translit: 'kreittosin thysiais', gloss: 'better sacrifices', note: 'Singular substance in plural excellence — Christ\'s one offering exceeds the Levitical system.' },
    ],
  },
  'heb-10-37': {
    title: 'He That Shall Come Will Come',
    principle:
      'Yet a little while, and he that shall come will come, and will not tarry. Textual proof: Habakkuk 2:3-4 quoted; same just-shall-live-by-faith chain as Rom 1:17 and Gal 3:11. Patient waiting on the coming One.',
    sourceKeywords: ['little while', 'he that shall come', 'will come', 'not tarry'],
    fulfillmentKeywords: ['come', 'not tarry', 'just', 'live', 'faith'],
    terms: [
      { term: 'will come', original: 'ἥξει', translit: 'hēxei', gloss: 'he will come', note: 'Hab 2:3 LXX — vision appointed for the end and will not lie; wait for it.' },
    ],
  },
  '1pe-2-6': {
    title: 'Chief Corner Stone, Elect, Precious',
    principle:
      'Behold, I lay in Sion a chief corner stone, elect, precious. Textual proof: Isaiah 28:16 quoted; Psalm 118:22 in 1 Pet 2:7; same as Matt 21:42, Acts 4:11, Eph 2:20.',
    sourceKeywords: ['Sion', 'chief corner stone', 'elect', 'precious', 'believeth', 'confounded'],
    fulfillmentKeywords: ['stone', 'corner', 'elect', 'precious'],
    terms: [
      { term: 'corner stone', original: 'ἀκρογωνιαῖος', translit: 'akrogōnaios', gloss: 'cornerstone', note: 'Isa 28:16 — foundation stone in Zion; Christ as the tried stone.' },
    ],
  },
  '1pe-2-24': {
    title: 'His Own Self Bare Our Sins',
    principle:
      'Who his own self bare our sins in his own body on the tree. Textual proof: Isaiah 53:4-6, 12 quoted and applied; 1 Pet 1:19 — precious blood of Christ as of a lamb without blemish (Exod 12:5).',
    sourceKeywords: ['his own self', 'bare', 'our sins', 'body', 'tree', 'dead to sins', 'stripes', 'healed'],
    fulfillmentKeywords: ['borne', 'griefs', 'carried', 'sorrows', 'wounded', 'iniquities', 'bruised'],
    terms: [
      { term: 'bare our sins', original: 'ἀνήνεγκεν', translit: 'anēnegken', gloss: 'He bore up / carried', note: 'Isa 53:4, 12 — the Servant bears what is not His own.' },
    ],
  },
  '1jn-3-8': {
    title: 'Destroy the Works of the Devil',
    principle:
      'For this purpose the Son of God was manifested, that he might destroy the works of the devil. Textual proof: Genesis 3:15 — seed of the woman crushes the serpent; Col 2:15; Heb 2:14 — destroy him that had the power of death.',
    sourceKeywords: ['Son of God', 'manifested', 'destroy', 'works', 'devil'],
    fulfillmentKeywords: ['bruise', 'head', 'serpent', 'destroy', 'power of death'],
    terms: [
      { term: 'destroy', original: 'λύσῃ', translit: 'lysē', gloss: 'he might loose / dissolve / destroy', note: 'Undoing the serpent\'s works — Gen 3:15 fulfilled in Christ\'s mission.' },
    ],
  },
  'jud-1-14': {
    title: 'Behold, the Lord Cometh',
    principle:
      'Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints. Textual proof: Genesis 5:18-24 — Enoch walked with God and was translated; Hebrews 11:5; the prophetic word is second-coming language consistent with Zech 14:5 and 2 Thess 1:7.',
    sourceKeywords: ['Enoch', 'seventh from Adam', 'prophesied', 'Lord cometh', 'ten thousands', 'saints'],
    fulfillmentKeywords: ['Enoch', 'translated', 'pleased God', 'come'],
    terms: [
      { term: 'the Lord cometh', original: 'ἦλθεν κύριος', translit: 'ēlthen kyrios', gloss: 'the Lord came / is come (prophetic aorist)', note: 'Prophetic certainty of the second advent, linked to Enoch of the seventh generation (Gen 5).' },
    ],
  },

  // ── Canonical Threads Across the Whole Bible ─────────────────────────────
  'deu-18-15': {
    title: 'A Prophet Like Unto Moses',
    principle:
      'Moses foretells that the LORD will raise up a Prophet like him from among their brethren, whom Israel must hear. Peter, Stephen, and John explicitly identify Jesus as this Prophet. The Father at the Transfiguration confirms this by saying "Hear Him!" First principle: Christ is the ultimate Lawgiver, Mediator, and Spokesman of the Father.',
    sourceKeywords: ['Prophet', 'raise up', 'unto me', 'brethren', 'hearken'],
    fulfillmentKeywords: ['Prophet', 'Moses', 'hearken', 'spake', 'hear', 'Beloved Son'],
    terms: [
      { term: 'Prophet', original: 'נָבִיא', translit: 'navi', gloss: 'prophet, spokesman of God', note: 'Deut 18:15 — singular prophet like Moses.' },
      { term: 'like unto me', original: 'כָּמֹנִי', translit: 'kamoni', gloss: 'like me', note: 'Mediator of a covenant, face-to-face access (Deut 34:10; Heb 3:1-6).' },
      { term: 'Hear Him', original: 'ἀκούετε αὐτοῦ', translit: 'akouete autou', gloss: 'listen to Him!', note: 'Matt 17:5 — the Father commands the exact imperative from Deut 18:15 LXX.' },
    ],
  },
  'deu-18-18': {
    title: 'Words Put in His Mouth',
    principle:
      'God promises to put His words in the Prophet\'s mouth, and He shall speak all that God commands. Jesus repeatedly declares that His doctrine and words are not His own, but the Father\'s who sent Him. First principle: Christ is the infallible, final Word of God.',
    sourceKeywords: ['raise them up a Prophet', 'put my words in his mouth', 'speak unto them', 'command'],
    fulfillmentKeywords: ['words', 'Father', 'commandment', 'speak', 'heard'],
    terms: [
      { term: 'put my words', original: 'נָתַתִּי דְבָרַי', translit: 'natatti devaray', gloss: 'I will put my words in his mouth', note: 'John 12:49-50 — "The Father which sent me, he gave me a commandment, what I should say."' },
    ],
  },
  'num-21-9': {
    title: 'The Bronze Serpent Lifted Up',
    principle:
      'Moses made a bronze serpent and set it on a pole. Anyone who was bitten looked at it and lived. Jesus applied this to His own death: as Moses lifted up the serpent, so must the Son of Man be lifted up, that whoever believes in Him should not perish but have eternal life. First principle: God turned the sign of the curse into the means of life for everyone who looks to it in faith.',
    sourceKeywords: ['serpent of brass', 'pole', 'bitten', 'beheld', 'lived'],
    fulfillmentKeywords: ['lifted up', 'serpent', 'wilderness', 'Son of man', 'believe', 'eternal life', 'cross'],
    terms: [
      { term: 'serpent of brass', original: 'נְחַשׁ נְחֹשֶׁת', translit: 'nechash nechoshet', gloss: 'serpent of bronze / copper', note: 'The Hebrew plays on two similar words: nachash, “serpent,” and nechoshet, “bronze.” The bronze serpent looked like the sin God judged, and Romans 8:3 says God sent his Son “in the likeness of sinful flesh.”' },
      { term: 'lifted up', original: 'ὑψωθῆναι', translit: 'hypsōthēnai', gloss: 'to be lifted up / exalted', note: 'John 3:14; 12:32 — double meaning of physical elevation on the cross and divine exaltation.' },
    ],
  },
  '2sa-7-12': {
    title: 'Davidic Seed — Everlasting Throne',
    principle:
      'God covenants with David that his seed will build a house and his throne will be established forever. Luke records the angel Gabriel announcing that Jesus will receive the throne of His father David and of His kingdom there will be no end. First principle: the kingdom is guaranteed by unconditional divine covenant sworn to David.',
    sourceKeywords: ['seed', 'proceed', 'bowels', 'establish', 'kingdom', 'forever'],
    fulfillmentKeywords: ['throne', 'David', 'father', 'reign', 'kingdom', 'no end'],
    terms: [
      { term: 'seed', original: 'זַרְעֲךָ', translit: 'zarʿakha', gloss: 'your seed / offspring', note: 'Acts 2:30; Rom 1:3 — Christ made of the seed of David according to the flesh.' },
      { term: 'forever', original: 'עַד־עוֹלָם', translit: 'ʿad-ʿolam', gloss: 'unto eternity', note: 'Luke 1:33 — "and of his kingdom there shall be no end."' },
    ],
  },
  '2sa-23-5': {
    title: 'Everlasting Covenant — Branching Forth',
    principle:
      'David\'s last prophetic words declare that God has made with him an everlasting covenant, ordered in all things and sure, and He will make all his salvation to branch forth. First principle: the messianic covenant outlives all earthly failure and blossoms in Christ.',
    sourceKeywords: ['everlasting covenant', 'ordered', 'sure', 'salvation', 'grow', 'branch'],
    fulfillmentKeywords: ['everlasting covenant', 'blood', 'Branch', 'salvation', 'David'],
    terms: [
      { term: 'everlasting covenant', original: 'בְּרִית עוֹלָם', translit: 'berit ʿolam', gloss: 'covenant of eternity', note: 'Heb 13:20 — blood of the everlasting covenant.' },
      { term: 'make it grow', original: 'יַצְמִיחַ', translit: 'yatsmiach', gloss: 'He will cause to sprout / branch forth', note: 'Same root as Tsemach (the Branch) in Jer 23:5 and Zech 6:12.' },
    ],
  },
  'lev-25-25': {
    title: 'The Kinsman-Redeemer (Go\'el)',
    principle:
      'God gave Israel a law of redemption. If a brother grew poor and sold the land he had inherited, his nearest relative — the go\'el, the kinsman-redeemer — had the duty to buy it back. Jesus became our near kinsman in the flesh. He bought back the inheritance we had lost and freed us from slavery to sin. First principle: redemption needs a close relative, a willing heart, and the full price paid.',
    sourceKeywords: ['waxen poor', 'sold away', 'kin', 'redeem', 'brother'],
    fulfillmentKeywords: ['redeem', 'brethren', 'flesh and blood', 'inheritance', 'purchased'],
    terms: [
      { term: 'kinsman / redeemer', original: 'גֹּאֵל', translit: 'goʾel', gloss: 'redeemer, near kinsman, vindicator', note: 'The word comes from ga\'al — to redeem, to buy back. Boaz is the go\'el in Ruth 3-4. Christ is our go\'el in Gal 4:4-5 and Heb 2:14-15.' },
      { term: 'redeem', original: 'גָּאַל', translit: 'gaʾal', gloss: 'to buy back, deliver, reclaim', note: 'Greek ἐξαγοράζω (exagorazō) in Gal 3:13; 4:5.' },
    ],
  },
  'rut-4-14': {
    title: 'A Redeemer to Restore Life',
    principle:
      'The women bless the LORD who has not left Naomi without a redeemer, who shall be a restorer of life. Boaz\'s redemption of Ruth brings forth Obed, the grandfather of David, pointing directly to Jesus Christ the Redeemer of the world. First principle: God uses redemption to graft Gentiles into the messianic line and bring life out of bereavement.',
    sourceKeywords: ['blessed be the LORD', 'kinsman', 'restorer of thy life', 'nourisher', 'famous in Israel'],
    fulfillmentKeywords: ['redeemer', 'redeemed', 'life', 'David', 'Jesus Christ'],
    terms: [
      { term: 'kinsman / redeemer', original: 'גֹּאֵל', translit: 'goʾel', gloss: 'redeemer / guardian', note: 'Boaz as type of the willing and able Redeemer.' },
      { term: 'restorer of life', original: 'מֵשִׁיב נֶפֶשׁ', translit: 'meshiv nefesh', gloss: 'one who brings back the soul / life', note: 'Luke 1:68 — He hath visited and redeemed His people.' },
    ],
  },
  'psa-22-1': {
    title: 'My God, My God, Why Hast Thou Forsaken Me',
    principle:
      'David opens Psalm 22 with the cry of the righteous sufferer abandoned to judgment. Jesus quotes this exact line from the cross. The psalm moves from excruciating suffering to universal worship of all nations. First principle: the cross is the substitutionary bearing of the curse of forsakenness so that the nations may be gathered to God.',
    sourceKeywords: ['My God', 'why hast thou forsaken me', 'roaring', 'cry in the daytime'],
    fulfillmentKeywords: ['forsaken', 'Eli', 'lama sabachthani', 'cried with a loud voice', 'yielded up the ghost'],
    terms: [
      { term: 'why hast thou forsaken me', original: 'לָמָה עֲזַבְתָּנִי', translit: 'lamah ʿazavtani', gloss: 'why have you forsaken / left me?', note: 'Aramaic in Matt 27:46: Eli, Eli, lama sabachthani — Christ\'s loud cry at the ninth hour.' },
    ],
  },
  'psa-22-16': {
    title: 'They Pierced My Hands and My Feet',
    principle:
      'The psalmist foresees dogs encircling the sufferer, the assembly of the wicked enclosing Him, and His hands and feet pierced. Written centuries before crucifixion was invented, this depicts the exact physical trauma of Roman execution. First principle: prophetic specificity establishes the divine plan of the crucifixion.',
    sourceKeywords: ['dogs', 'encompassed', 'wicked', 'pierced', 'hands', 'feet'],
    fulfillmentKeywords: ['pierced', 'hands', 'feet', 'crucified', 'nails', 'print'],
    terms: [
      { term: 'pierced', original: 'כָּאֲרוּ / כָּאֲרִי', translit: 'kaʾaru', gloss: 'they pierced / gouged', note: 'LXX ὤρυξαν (ōryxan — they pierced/dug through); John 20:25; Luke 24:39-40.' },
    ],
  },
  'isa-53-5': {
    title: 'Wounded for Our Transgressions',
    principle:
      'The Servant is wounded for our transgressions and bruised for our iniquities; the chastisement of our peace is upon Him, and by His stripes we are healed. Peter quotes this directly for Christ bearing our sins in His own body on the tree. First principle: the atonement is substitutionary — He suffers in our place to secure our peace.',
    sourceKeywords: ['wounded', 'transgressions', 'bruised', 'iniquities', 'chastisement', 'peace', 'stripes', 'healed'],
    fulfillmentKeywords: ['bare our sins', 'tree', 'stripes', 'healed', 'died for our sins'],
    terms: [
      { term: 'wounded', original: 'מְחֹלָל', translit: 'mecholal', gloss: 'pierced through / fatally wounded', note: 'From chalal (to bore/pierce); John 19:34.' },
      { term: 'stripes / wound', original: 'חַבּוּרָה', translit: 'chabburah', gloss: 'stripe, bruise, blow', note: '1 Pet 2:24 τῷ μώλωπι (tō mōlōpi) — by whose stripe you were healed.' },
    ],
  },
  'zec-12-10': {
    title: 'They Shall Look on Me Whom They Pierced',
    principle:
      'YHWH declares that He will pour out the Spirit of grace and supplication on Jerusalem, and they will look on Me whom they pierced, mourning as for an only son. John cites this at the cross and Revelation declares every eye shall see Him at His coming. First principle: the pierced One is divine, and His piercing leads both to salvation and to eschatological vindication.',
    sourceKeywords: ['pour', 'spirit of grace', 'supplications', 'look upon me whom they have pierced', 'mourn', 'only son'],
    fulfillmentKeywords: ['pierced', 'see him', 'mourn', 'clouds', 'side'],
    terms: [
      { term: 'they pierced', original: 'דָּקָרוּ', translit: 'daqaru', gloss: 'they pierced through / thrust through', note: 'John 19:37; Rev 1:7 ἐξεκέντησαν — same Hebrew and Greek verb.' },
    ],
  },
  'zec-13-7': {
    title: 'Smite the Shepherd',
    principle:
      'The LORD commands the sword to awake against "My Shepherd, against the Man who is My Companion" and smite the Shepherd so the sheep will be scattered. Jesus explicitly applies this prophecy to Himself and the dispersal of His disciples on the night of Gethsemane. First principle: the Shepherd is YHWH\'s equal/companion, struck in accordance with divine purpose.',
    sourceKeywords: ['sword', 'shepherd', 'man that is my fellow', 'smite the shepherd', 'sheep scattered'],
    fulfillmentKeywords: ['smite the shepherd', 'sheep', 'scattered', 'all ye shall be offended'],
    terms: [
      { term: 'My Companion', original: 'עֲמִיתִי', translit: 'ʿamiti', gloss: 'my associate, equal, near fellow', note: 'Strong term for kinship/equality with YHWH; Matt 26:31.' },
    ],
  },
  'deu-30-6': {
    title: 'Circumcision of the Heart',
    principle:
      'God promises that after the exile and repentance, the LORD will circumcise the heart of His people to love Him with all their heart and soul. Paul explains that true circumcision is not external in the flesh, but of the heart, in the Spirit. First principle: true covenant obedience requires an internal divine work of regeneration.',
    sourceKeywords: ['circumcise', 'heart', 'seed', 'love the LORD thy God', 'all thine heart', 'live'],
    fulfillmentKeywords: ['circumcision', 'heart', 'spirit', 'new creature', 'put off'],
    terms: [
      { term: 'circumcise the heart', original: 'וּמָל יְהוָה אֶת־לְבָבְךָ', translit: 'umāl YHWH ʾet-levavekha', gloss: 'and YHWH will circumcise your heart', note: 'Rom 2:29; Col 2:11 — circumcision made without hands in putting off the body of sins.' },
    ],
  },
  'jer-31-31': {
    title: 'The New Covenant',
    principle:
      'The LORD promises a new covenant, not like the covenant made at Sinai which was broken: He will put His law in their inward parts, write it on their hearts, be their God, and remember their sins no more. Jesus inaugurates this covenant in His blood, and Hebrews quotes this entire text as the foundation of the Christian dispensation. First principle: the new covenant internalizes God\'s law, grants universal intimate knowledge of God, and secures absolute forgiveness.',
    sourceKeywords: ['new covenant', 'house of Israel', 'write it in their hearts', 'their God', 'forgive their iniquity', 'remember their sin no more'],
    fulfillmentKeywords: ['new covenant', 'blood', 'cup', 'law in hearts', 'sins remembered no more', 'better covenant'],
    terms: [
      { term: 'new covenant', original: 'בְּרִית חֲדָשָׁה', translit: 'berit chadashah', gloss: 'a new covenant', note: 'Greek διαθήκη καινή (diathēkē kainē) in Luke 22:20; Heb 8:8; 9:15.' },
    ],
  },
  'ezk-36-26': {
    title: 'A New Heart and a Heart of Flesh',
    principle:
      'God promises to sprinkle clean water on His people, cleanse them from all idols, take away the stony heart, and give them a heart of flesh, putting His Spirit within them to cause them to walk in His statutes. First principle: regeneration by the Holy Spirit replaces spiritual deadness with responsive obedience.',
    sourceKeywords: ['new heart', 'new spirit', 'take away the stony heart', 'heart of flesh', 'put my spirit within you'],
    fulfillmentKeywords: ['born of water and spirit', 'Spirit', 'fleshy tables of the heart', 'walk in the Spirit'],
    terms: [
      { term: 'heart of flesh', original: 'לֵב בָּשָׂר', translit: 'lev basar', gloss: 'heart of flesh (tender, responsive)', note: '2 Cor 3:3 — fleshy tables of the heart (πλαξὶν καρδίας σαρκίναις).' },
    ],
  },
  'job-19-25': {
    title: 'I Know That My Redeemer Liveth',
    principle:
      'Amid intense agony and abandonment, Job makes the monumental confession: "I know that my Redeemer lives, and He shall stand at the last upon the earth; and after my skin is destroyed, yet in my flesh I shall see God." First principle: bodily resurrection and personal vindication through an eternal Kinsman-Redeemer are anchored in the oldest poetry of Scripture.',
    sourceKeywords: ['know', 'Redeemer liveth', 'stand at the latter day', 'earth', 'in my flesh', 'see God'],
    fulfillmentKeywords: ['Redeemer', 'resurrection', 'flesh', 'see him as he is', 'raised incorruptible'],
    terms: [
      { term: 'my Redeemer lives', original: 'גֹּאֲלִי חָי', translit: 'goʾali chay', gloss: 'my living redeemer / vindicator', note: 'Personal Go\'el who avenges and restores; 1 Cor 15:20.' },
    ],
  },
  'ezk-37-12': {
    title: 'Graves Opened — Dry Bones Revived',
    principle:
      'The LORD commands Ezekiel to prophesy to the dry bones in the valley: "Behold, O My people, I will open your graves, and cause you to come up out of your graves... and put My Spirit in you, and you shall live." Jesus echoes this in John 5: all who are in the graves shall hear His voice and come forth. First principle: God\'s Spirit possesses life-giving power over physical death and national exile.',
    sourceKeywords: ['open your graves', 'cause you to come up', 'my people', 'land of Israel', 'spirit', 'live'],
    fulfillmentKeywords: ['graves', 'hear his voice', 'come forth', 'resurrection of life', 'raised'],
    terms: [
      { term: 'open your graves', original: 'פֹּתֵחַ אֶת־קִבְרוֹתֵיכֶם', translit: 'poteach ʾet-qivrotekhem', gloss: 'I will open your graves', note: 'John 5:28 — "all that are in the graves shall hear his voice."' },
    ],
  },
  'jol-2-28': {
    title: 'Pour Out My Spirit on All Flesh',
    principle:
      'The LORD promises that in the last days He will pour out His Spirit upon all flesh: sons and daughters will prophesy, old men dream dreams, and young men see visions. Peter quotes this verbatim at Pentecost as fulfilled in the resurrected and exalted Christ pouring out the Holy Spirit. First principle: the Spirit is no longer limited to prophets, priests, or kings, but indwells the entire covenant community.',
    sourceKeywords: ['pour out my spirit', 'all flesh', 'sons and daughters prophesy', 'dreams', 'visions', 'servants and handmaids'],
    fulfillmentKeywords: ['poured forth', 'Holy Ghost', 'prophesy', 'tongues', 'last days'],
    terms: [
      { term: 'pour out my spirit', original: 'אֶשְׁפּוֹךְ אֶת־רוּחִי', translit: 'ʾeshpokh ʾet-ruchi', gloss: 'I will pour out my Spirit', note: 'Acts 2:17-18 ἐκχεῶ ἀπὸ τοῦ πνεύματός μου — Peter\'s Pentecost text.' },
    ],
  },
  'jol-2-32': {
    title: 'Whosoever Calls on the Name of the LORD',
    principle:
      'Joel proclaims that whoever calls on the name of the LORD shall be delivered/saved, for in Mount Zion and Jerusalem there shall be deliverance. Both Peter in Acts 2 and Paul in Romans 10 quote this exact verse to proclaim salvation through calling on Jesus as Lord. First principle: salvation is universal to all who invoke the Name in faith.',
    sourceKeywords: ['whosoever', 'call on the name of the LORD', 'delivered', 'mount Zion', 'Jerusalem', 'remnant'],
    fulfillmentKeywords: ['call upon the name of the Lord', 'saved', 'no difference', 'Jew nor Greek'],
    terms: [
      { term: 'call on the name', original: 'יִקְרָא בְּשֵׁם יְהוָה', translit: 'yiqra be-shem YHWH', gloss: 'calls in the name of YHWH', note: 'Rom 10:13; Acts 2:21 — apostolic application of the divine name to Jesus.' },
    ],
  },

  // ── The Elijah Forerunner & Former/Latter Rain Chains ────────────────────
  'mal-3-1': {
    title: 'The Messenger of the Covenant',
    principle:
      'God promises to send His messenger to prepare the way before Him, and the Lord whom they seek will suddenly come to His temple, even the Messenger of the Covenant. Jesus identifies John the Baptist as this messenger, and Himself as the Lord visiting His temple. First principle: divine visitation is preceded by a purifying prophetic message calling the covenant people to repentance.',
    sourceKeywords: ['messenger', 'prepare the way', 'Lord', 'seek', 'suddenly come to his temple', 'messenger of the covenant'],
    fulfillmentKeywords: ['messenger', 'face', 'prepare thy way', 'Elias', 'temple', 'John'],
    terms: [
      { term: 'my messenger', original: 'מַלְאָכִי', translit: 'malʾakhi', gloss: 'my messenger / angel (wordplay on Malachi)', note: 'Matt 11:10; Mark 1:2 — τὸν ἄγγελόν μου applied to John the Baptist.' },
      { term: 'Messenger of the Covenant', original: 'מַלְאַךְ הַבְּרִית', translit: 'malʾakh ha-berit', gloss: 'the angel / messenger of the covenant', note: 'Christ Himself, the divine Angel of YHWH who brings and establishes the new covenant.' },
    ],
  },
  'mal-4-5': {
    title: 'Elijah the Prophet Before the Great Day',
    principle:
      'God promises to send Elijah the prophet before the coming of the great and dreadful day of the LORD to turn the hearts of fathers to children and children to fathers. Gabriel announces that John the Baptist will minister "in the spirit and power of Elijah," and Jesus explicitly confirms John was the Elijah of the first advent. In biblical and historicist prophecy, an Elijah-message of reformation also precedes the second advent. First principle: reformational preaching must restore covenant fidelity and family order before divine judgment.',
    sourceKeywords: ['Elijah the prophet', 'great and dreadful day of the LORD', 'turn the heart', 'fathers to children'],
    fulfillmentKeywords: ['spirit and power of Elias', 'Elias is come already', 'restore all things', 'John the Baptist'],
    terms: [
      { term: 'Elijah the prophet', original: 'אֵלִיָּה הַנָּבִיא', translit: 'Eliyyah ha-navi', gloss: 'Elijah the prophet (Yah is my God)', note: 'Luke 1:17; Matt 17:11-13 — prophetic office characterized by confrontation of apostasy and calling to worship the true God.' },
      { term: 'turn the heart', original: 'וְהֵשִׁיב לֵב', translit: 've-heshiv lev', gloss: 'and he will turn back / restore the heart', note: 'LXX ἐπιστρέψαι καρδίας — repentance and moral turning.' },
    ],
  },
  'isa-40-3': {
    title: 'Voice Crying in the Wilderness',
    principle:
      'A herald cries in the barren desert to prepare the way of the LORD and level a highway for our God. All four Gospels quote this prophecy for John the Baptist\'s wilderness ministry baptizing at the Jordan. First principle: the highway for God\'s arrival is built not through worldly power, but through heart-humbling repentance in the desert.',
    sourceKeywords: ['voice of him that crieth', 'wilderness', 'Prepare ye the way of the LORD', 'highway for our God'],
    fulfillmentKeywords: ['voice of one crying in the wilderness', 'repent', 'kingdom of heaven', 'make his paths straight'],
    terms: [
      { term: 'prepare the way of the LORD', original: 'פַּנּוּ דֶּרֶךְ יְהוָה', translit: 'pannu derekh YHWH', gloss: 'clear / prepare the way of YHWH', note: 'Matt 3:3; Mark 1:3; John 1:23 — identifying Jesus as YHWH whose highway is prepared.' },
    ],
  },
  'deu-11-14': {
    title: 'The Early and Latter Rain',
    principle:
      'God promises the rain of the land in its due season: the first/former rain (yoreh) to germinate the seed and the latter rain (malqosh) to ripen the harvest. In salvation history, this agricultural rhythm models the twofold work of the Holy Spirit: the early rain at Pentecost to sprout the Christian church, and the latter rain at the end of time to ripen the harvest of the earth for Christ\'s return. First principle: spiritual harvest depends entirely on the timed outpourings of divine grace.',
    sourceKeywords: ['rain of your land', 'due season', 'first rain', 'latter rain', 'gather in thy corn'],
    fulfillmentKeywords: ['early and latter rain', 'husbandman', 'patience', 'precious fruit', 'coming of the Lord'],
    terms: [
      { term: 'first / early rain', original: 'יוֹרֶה', translit: 'yoreh', gloss: 'early rain (autumn rain for sowing)', note: 'Type of the early outpouring of the Spirit (Acts 2).' },
      { term: 'latter rain', original: 'מַלְקוֹשׁ', translit: 'malqosh', gloss: 'latter rain (spring rain for ripening)', note: 'Greek ὑετὸν ὄψιμον (hyeton opsimon) in James 5:7 — final ripening power before the harvest.' },
    ],
  },
  'hos-6-3': {
    title: 'He Shall Come as the Rain',
    principle:
      'The prophet urges Israel to pursue the knowledge of the LORD, whose going forth is as certain as the morning dawn, and who will come to His people like the rain—like the latter and former rain watering the dry earth. First principle: God\'s presence and revival come as life-restoring rain upon penitent hearts.',
    sourceKeywords: ['follow on to know the LORD', 'going forth', 'morning', 'come unto us as the rain', 'latter and former rain'],
    fulfillmentKeywords: ['rain', 'revive', 'third day', 'live in his sight', 'Spirit'],
    terms: [
      { term: 'as the rain', original: 'כַּגֶּשֶׁם', translit: 'ka-geshem', gloss: 'like the pouring rain / shower', note: 'Abundant downpour of spiritual life.' },
    ],
  },
  'jol-2-23': {
    title: 'The Former and Latter Rain for Zion',
    principle:
      'Zion is commanded to rejoice in the LORD who gives the former rain faithfully and causes both the former and latter rain to pour down, directly introducing the promise of the Spirit poured out upon all flesh (Joel 2:28). First principle: physical restoration of the harvest prefigures the eschatological outpouring of the Holy Spirit.',
    sourceKeywords: ['children of Zion', 'rejoice in the LORD', 'former rain moderately', 'former rain and the latter rain', 'first month'],
    fulfillmentKeywords: ['pour out my spirit', 'harvest', 'rain', 'Pentecost', 'glory'],
    terms: [
      { term: 'former rain faithfully', original: 'הַמּוֹרֶה לִצְדָקָה', translit: 'ham-moreh litsdaqah', gloss: 'the teacher of righteousness / the rain in measure of righteousness', note: 'Dual Hebrew meaning: both teacher of righteousness and early rain, linking truth-teaching with the Spirit\'s power.' },
    ],
  },
  'zec-10-1': {
    title: 'Ask Rain in the Time of the Latter Rain',
    principle:
      'The prophet commands the people of God to ask the LORD for rain in the time of the latter rain, promising that the LORD will make bright storm clouds and give showers of rain. Jesus and the apostles teach that the Holy Spirit must be sought through persistent prayer to prepare the church for the final harvest. First principle: promised divine power does not replace prayer; it demands it.',
    sourceKeywords: ['Ask ye of the LORD rain', 'time of the latter rain', 'bright clouds', 'showers of rain'],
    fulfillmentKeywords: ['ask', 'Holy Spirit', 'Father in heaven', 'latter rain', 'fruit'],
    terms: [
      { term: 'in the time of the latter rain', original: 'בְּעֵת מַלְקוֹשׁ', translit: 'be-ʿet malqosh', gloss: 'in the season of the latter rain', note: 'Prophetic imperative to pray for the Spirit\'s final ripening power.' },
    ],
  },
  'jam-5-7': {
    title: 'Patience Until the Early and Latter Rain',
    principle:
      'James instructs believers to be patient until the coming of the Lord, watching how the farmer waits for the precious fruit of the earth until it receives the early and latter rain. The ripening of Christian character and the completion of the gospel mission require the final spiritual rain before the harvest of the earth (Rev 14:14-16). First principle: eschatological endurance is sustained by the promise of the Spirit\'s harvest rain.',
    sourceKeywords: ['patient', 'coming of the Lord', 'husbandman', 'precious fruit', 'early and latter rain'],
    fulfillmentKeywords: ['harvest of the earth', 'ripe', 'thrust in thy sickle', 'Son of man'],
    terms: [
      { term: 'early and latter rain', original: 'πρόϊμον καὶ ὄψιμον', translit: 'proïmon kai opsimon', gloss: 'early and late rain', note: 'James 5:7 directly preserves the Hebrew agricultural type (yoreh and malqosh) for the second advent.' },
    ],
  },

  // ── Historic Master Pillars & Safeguards Against Strange Doctrines ──────────
  'isa-8-20': {
    title: 'To the Law and to the Testimony — The Touchstone of Truth',
    principle:
      'Isaiah establishes the foundational test for all doctrine and prophecy: "To the law and to the testimony: if they speak not according to this word, it is because there is no light in them." Any teaching that contradicts the moral law (Torah) or apostolic/prophetic testimony is rejected as a strange doctrine. First principle: canonical harmony (Analogia Scripturae) and God\'s revealed law are the supreme standard of spiritual truth.',
    sourceKeywords: ['To the law', 'testimony', 'speak not according to this word', 'no light in them'],
    fulfillmentKeywords: ['search the scriptures', 'commandments of God', 'faith of Jesus', 'sound doctrine'],
    terms: [
      { term: 'law', original: 'תּוֹרָה', translit: 'torah', gloss: 'instruction, direction, moral law of God', note: 'The foundational standard of divine righteousness.' },
      { term: 'testimony', original: 'תְּעוּדָה', translit: 'teʿudah', gloss: 'testimony, witness, attested prophetic message', note: 'Echoed in Rev 12:17 and 19:10 as the testimony of Jesus / spirit of prophecy.' },
      { term: 'no light', original: 'אֵין שַׁחַר', translit: 'ʾein shachar', gloss: 'no dawn / no morning light', note: 'Absence of divine truth; complete spiritual darkness.' },
    ],
  },
  'lev-16-16': {
    title: 'Cleansing the Holy Place on the Day of Atonement (Yom Kippur)',
    principle:
      'The high priest made atonement for the holy place because of the uncleanness of the children of Israel and their transgressions. Hebrews 9:23 says the patterns of things in the heavens were purified with these sacrifices. The heavenly things themselves needed better sacrifices. Daniel 8:14 points to this same cleansing of the sanctuary at the end of the 2,300 days. First principle: the sins confessed through the year were removed from the sanctuary on the Day of Atonement. That day points to the work Christ does as our judge before He comes.',
    sourceKeywords: ['atonement for the holy place', 'uncleanness', 'transgressions', 'tabernacle of the congregation'],
    fulfillmentKeywords: ['heavenly things', 'cleansed', 'purified', 'better sacrifices', 'true tabernacle', 'sanctuary'],
    terms: [
      { term: 'atonement', original: 'וְכִפֶּר', translit: 've-khipper', gloss: 'and he shall make atonement / purge / cleanse', note: 'The ultimate cleansing of the sanctuary from all recorded sin.' },
      { term: 'uncleanness', original: 'טֻמְאֹת', translit: 'tumʾot', gloss: 'impurities / defilements', note: 'Sin was transferred to the sanctuary and made it unclean. The blood removed that uncleanness.' },
    ],
  },
  'ezr-7-11': {
    title: 'Decree of Artaxerxes (457 BC) — Dating the Messiah and 2,300 Days',
    principle:
      'Artaxerxes I issues the comprehensive decree to Ezra granting full authority to restore and rebuild Jerusalem, appointing magistrates and restoring the laws of God. This decree in 457 BC (the autumn of Artaxerxes\' 7th regnal year) marks the undeniable chronological starting point for both the 70 weeks of Daniel 9:25 and the 2,300 days of Daniel 8:14. First principle: biblical prophecy is rooted in verifiable history; the exact dating of the Messiah\'s first advent confirms the timeline for the cleansing of the heavenly sanctuary.',
    sourceKeywords: ['decree', 'Artaxerxes', 'Ezra the priest', 'commandments of the LORD', 'statutes to Israel'],
    fulfillmentKeywords: ['commandment to restore and to build Jerusalem', 'Messiah the Prince', 'seventy weeks', 'two thousand and three hundred days'],
    terms: [
      { term: 'decree / letter', original: 'פַּתְשֶׁגֶן הַנִּשְׁתְּוָן', translit: 'patshegen han-nishtevan', gloss: 'copy of the letter / royal decree (Aramaic/Persian)', note: 'Ezra 7:11-26 contains the full legal text restoring Jewish judicial autonomy in 457 BC.' },
    ],
  },
  'ezk-20-12': {
    title: 'The Sabbath — Sign of Sanctification and Creator-Covenant',
    principle:
      'God gives His Sabbaths to be a perpetual sign between Him and His covenant people, that they might know that He is the LORD who sanctifies them. Grounded in Genesis 2:1-3 and Exodus 20:8-11, the Sabbath remains the permanent identity marker distinguishing true worshipers of the Creator. First principle: sanctification is not self-righteous works; the Sabbath signifies resting from our own works in the finished work of the Creator and Redeemer.',
    sourceKeywords: ['gave them my sabbaths', 'sign between me and them', 'know that I am the LORD that sanctify them'],
    fulfillmentKeywords: ['sabbath', 'sign', 'sanctify', 'Creator', 'worship him that made'],
    terms: [
      { term: 'sign', original: 'אוֹת', translit: 'ʾot', gloss: 'sign, pledge, covenant token', note: 'Parallel to the seal of God in Rev 7:2-3 and Rev 14:7.' },
      { term: 'sanctify them', original: 'מְקַדְּשָׁם', translit: 'meqaddesham', gloss: 'the One making them holy', note: 'Signifies divine ownership and transformative power.' },
    ],
  },
  'isa-66-22': {
    title: 'The Sabbath in the New Earth — Eternal Memorial of the Creator',
    principle:
      'As the new heavens and the new earth shall remain before the LORD, so from one new moon to another, and from one Sabbath to another, all flesh shall come to worship before Me. The seventh-day Sabbath spans from the unfallen Eden (Gen 2:1-3), through Sinai (Exod 20:8-11), through the life and custom of Jesus (Luke 4:16), into the eternal state. First principle: the Sabbath was never a temporary ceremonial shadow of Levi; it is the permanent rhythm of cosmic Creator-worship.',
    sourceKeywords: ['new heavens', 'new earth', 'remain before me', 'from one sabbath to another', 'all flesh shall come to worship'],
    fulfillmentKeywords: ['new heavens and new earth', 'worship', 'sabbath', 'reign for ever and ever'],
    terms: [
      { term: 'from one Sabbath to another', original: 'מִדֵּי שַׁבָּת בְּשַׁבַּתּוֹ', translit: 'mid-dei shabbat be-shabbatto', gloss: 'from sabbath to its sabbath / weekly cycle', note: 'Affirms seventh-day worship in the restored cosmos.' },
    ],
  },
  'ecc-9-5': {
    title: 'The State of the Dead — The Dead Know Not Anything',
    principle:
      'The living know that they shall die, but the dead know not anything, neither have they any more a portion in anything done under the sun. Together with Psalm 146:4 ("his breath goeth forth... in that very day his thoughts perish"), Scripture reveals that death is an unconscious sleep (nephesh dissolution) awaiting the physical resurrection at Christ\'s return. First principle: conditional immortality; the lie of the serpent ("Ye shall not surely die") is refuted by the harmonious testimony of the entire canon.',
    sourceKeywords: ['living know that they shall die', 'dead know not anything', 'neither have they any more a reward', 'memory of them is forgotten'],
    fulfillmentKeywords: ['sleep', 'resurrection of the dead', 'awake', 'mortal put on immortality', 'second death'],
    terms: [
      { term: 'know not anything', original: 'אֵינָם יוֹדְעִים מְאוּמָה', translit: 'ʾeinam yodeʿim meʾumah', gloss: 'they do not know anything at all', note: 'Absolute unconsciousness; complete cessation of mental existence until resurrection.' },
    ],
  },
  'psa-146-4': {
    title: 'His Breath Goeth Forth — Thoughts Perish in That Day',
    principle:
      'When man dies, his breath (ruach) departs, he returns to his earth, and in that very day his thoughts perish. Immortality belongs to God alone (1 Tim 6:16) and is bestowed on the righteous solely as a gift at the second coming of Christ (1 Cor 15:51-54). First principle: man is a psychosomatic unity (Gen 2:7); without the breath of life, there is no disembodied soul floating in conscious bliss or torment.',
    sourceKeywords: ['breath goeth forth', 'returneth to his earth', 'very day his thoughts perish'],
    fulfillmentKeywords: ['God alone hath immortality', 'sleep in Jesus', 'last trump', 'raised incorruptible'],
    terms: [
      { term: 'breath / spirit', original: 'רוּחוֹ', translit: 'rucho', gloss: 'his breath / life-animating power from God', note: 'Eccl 12:7 — spirit returns to God who gave it; the animating principle, not an independent ghost.' },
      { term: 'his thoughts', original: 'עֶשְׁתֹּנֹתָיו', translit: 'ʿeshtonotav', gloss: 'his thoughts, plans, mental operations', note: 'Total cessation of cognitive consciousness.' },
    ],
  },
  '1ti-6-16': {
    title: 'God Alone Hath Immortality — Conditional Gift in Christ',
    principle:
      'The King of kings and Lord of lords "who only hath immortality, dwelling in the light which no man can approach unto." Scripture never speaks of an immortal human soul. Man was created conditionally immortal (Gen 2:16-17), lost access to the tree of life through sin (Gen 3:22-24), and receives immortality only through the gospel and the bodily resurrection at the last trumpet (2 Tim 1:10; 1 Cor 15:53-54). First principle: life is in the Son; he that hath not the Son hath not life (1 John 5:12).',
    sourceKeywords: ['only hath immortality', 'dwelling in the light', 'King of kings', 'Lord of lords'],
    fulfillmentKeywords: ['this mortal must put on immortality', 'resurrection of life', 'gift of God is eternal life', 'tree of life'],
    terms: [
      { term: 'immortality', original: 'ἀθανασίαν', translit: 'athanasian', gloss: 'deathlessness, immortality', note: 'Used only of God inherently, and of redeemed saints after the resurrection (1 Cor 15:53).' },
    ],
  },
  'rev-14-6': {
    title: 'The First Angel\'s Message — The Everlasting Gospel to All Nations',
    principle:
      'John sees an angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth, and to every nation, kindred, tongue, and people. This gospel is not a new doctrine but the eternal covenant of grace centered on Christ\'s sacrifice and righteousness, proclaimed with urgent cosmic reach right before the harvest of the earth. First principle: end-time truth is the restoration of the everlasting gospel in its pristine purity.',
    sourceKeywords: ['angel fly in the midst of heaven', 'everlasting gospel', 'preach unto them that dwell on the earth', 'every nation', 'kindred', 'tongue', 'people'],
    fulfillmentKeywords: ['gospel of the kingdom', 'all nations', 'then shall the end come', 'righteousness of faith'],
    terms: [
      { term: 'everlasting gospel', original: 'εὐαγγέλιον αἰώνιον', translit: 'euangelion aiōnion', gloss: 'eternal good news', note: 'Unchanging message of redemption through Christ from Genesis to Revelation.' },
      { term: 'midst of heaven', original: 'μεσουρανήματι', translit: 'mesouranēmati', gloss: 'mid-heaven, zenith', note: 'Universal visibility and high authority of the proclamation.' },
    ],
  },
  'rev-14-8': {
    title: 'The Second Angel\'s Message — Babylon is Fallen',
    principle:
      'Another angel follows, saying: "Babylon is fallen, is fallen, that great city, because she made all nations drink of the wine of the wrath of her fornication." Babylon represents apostate religious systems that have departed from Sola Scriptura, uniting church and state and substituting human dogmas (Sunday sacredness, immortal soul, works-righteousness) for the Word of God. First principle: God calls His people to discern spiritual apostasy and separate from corrupt religious alliances.',
    sourceKeywords: ['Babylon is fallen', 'great city', 'wine of the wrath of her fornication', 'all nations'],
    fulfillmentKeywords: ['Come out of her my people', 'fall of Babylon', 'mother of harlots', 'abominations of the earth'],
    terms: [
      { term: 'is fallen, is fallen', original: 'ἔπεσεν, ἔπεσεν', translit: 'epesen, epesen', gloss: 'fell, fell (prophetic aorist / certainty)', note: 'Echoes Isaiah 21:9 and Jeremiah 51:8; progressive moral apostasy.' },
      { term: 'wine of her fornication', original: 'τοῦ οἴνου τοῦ θυמוῦ τῆς πορνείας', translit: 'tou oinou tou thymou tēs porneias', gloss: 'the wine of the passion/wrath of her unfaithfulness', note: 'False doctrines intoxicating the nations.' },
    ],
  },
  'rev-14-9': {
    title: 'The Third Angel\'s Message — Warning Against the Beast and His Mark',
    principle:
      'The third angel sounds with a loud voice, warning against worshiping the beast and his image and receiving his mark in forehead or hand. This is the most terrible warning in all of Scripture. The mark of the beast stands as the counterfeit seal of authority opposed to the seal of God (the Sabbath of the Creator). First principle: the final conflict is over worship—obedience to God\'s commandments versus submission to human religious legislation.',
    sourceKeywords: ['If any man worship the beast', 'his image', 'receive his mark in his forehead', 'in his hand', 'wine of the wrath of God'],
    fulfillmentKeywords: ['seal of God', 'mark of the beast', 'commandments of God', 'patience of the saints'],
    terms: [
      { term: 'mark', original: 'χάραγμα', translit: 'charagma', gloss: 'stamp, mark, impress, badge of servitude', note: 'Counterfeit sign of allegiance opposed to the seal (sphragis) of the living God.' },
      { term: 'wrath of God', original: 'τοῦ θυμοῦ τοῦ θεοῦ', translit: 'tou thymou tou theou', gloss: 'the unmingled indignation of God', note: 'The seven last plagues poured out without mixture of mercy upon unrepentant rebellion.' },
    ],
  },
  'rev-18-1': {
    title: 'The Loud Cry — Earth Lightened with His Glory',
    principle:
      'John sees another angel come down from heaven having great power, and the earth was lightened with his glory. This represents the final outpouring of the Holy Spirit (the Latter Rain), empowering the Three Angels\' Messages with a "Loud Cry" that summons every honest soul: "Come out of her, My people, that ye be not partakers of her sins" (Rev 18:4). First principle: God never brings judgment without first providing the fullest revelation of His character and truth.',
    sourceKeywords: ['angel come down from heaven', 'great power', 'earth was lightened with his glory', 'Loud Cry', 'Come out of her my people'],
    fulfillmentKeywords: ['latter rain', 'Habakkuk 2:14', 'glory of the Lord', 'harvest of the earth'],
    terms: [
      { term: 'lightened with his glory', original: 'ἐφωτίσθη ἐκ τῆς δόξης αὐτοῦ', translit: 'ephōtisthē ek tēs doxēs autou', gloss: 'was illuminated from His glory', note: 'The final, worldwide revelation of God\'s loving and righteous character.' },
    ],
  },
  'isa-14-12': {
    title: 'Lucifer\'s Fall — Origin of the Great Controversy',
    principle:
      'How art thou fallen from heaven, O Lucifer, son of the morning! For thou hast said in thine heart: "I will ascend into heaven, I will exalt my throne above the stars of God... I will be like the most High." Isaiah unmasks the cosmic origin of sin—pride, self-exaltation, and rebellion against the benevolent law of the Creator. First principle: sin did not originate from God\'s defect in creation, but from a created being\'s irrational pride and desire for supremacy without righteousness.',
    sourceKeywords: ['fallen from heaven', 'Lucifer', 'son of the morning', 'exalt my throne', 'I will be like the most High'],
    fulfillmentKeywords: ['war in heaven', 'dragon cast out', 'pride', 'lake of fire', 'bruise Satan'],
    terms: [
      { term: 'Lucifer / Shining One', original: 'הֵילֵל בֶּן־שָׁחַר', translit: 'heilel ben-shachar', gloss: 'shining one, son of the dawn', note: 'The highest exalted cherub who chose self-exaltation over humble worship.' },
      { term: 'I will be like the Most High', original: 'אֶדַּמֶּה לְעֶלְיוֹן', translit: 'ʾeddammeh le-ʿelyon', gloss: 'I will make myself like the Supreme God', note: 'The root ambition of Satan that underlies all false worship.' },
    ],
  },
  'ezk-28-12': {
    title: 'The Covering Cherub — Perfection Corrupted by Iniquity',
    principle:
      'The prophetic lamentation over the prince of Tyre pulls back the cosmic veil: "Thou sealest up the sum, full of wisdom, and perfect in beauty. Thou hast been in Eden the garden of God... Thou art the anointed cherub that covereth... Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee." First principle: God created Lucifer holy and free; moral freedom made love possible, but allowed the mystery of iniquity to arise.',
    sourceKeywords: ['sealest up the sum', 'full of wisdom', 'perfect in beauty', 'Eden the garden of God', 'anointed cherub that covereth', 'till iniquity was found in thee'],
    fulfillmentKeywords: ['war in heaven', 'cast down to the ground', 'destruction of Satan', 'affliction shall not rise again'],
    terms: [
      { term: 'anointed cherub that covereth', original: 'כְּרוּב מִמְשַׁח הַסּוֹכֵךְ', translit: 'keruv mimshach has-sokhekh', gloss: 'the anointed guardian cherub', note: 'Positioned beside the very throne and mercy seat of God in the heavenly sanctuary.' },
      { term: 'iniquity was found in thee', original: 'נִמְצָא עַוְלָתָה בָּךְ', translit: 'nimtsa ʿavlah bakh', gloss: 'unrighteousness / perversity was found in you', note: 'Unprovoked, inexplicable rebellion against infinite divine love.' },
    ],
  },
  'nam-1-9': {
    title: 'Affliction Shall Not Rise Up the Second Time — Final Vindication',
    principle:
      'What do ye imagine against the LORD? He will make an utter end: affliction shall not rise up the second time. At the end of the Great Controversy, when sin and sinners are completely consumed in the lake of fire (Mal 4:1-3; Rev 20:14), the universe will be eternally secured not by force, but because the justice, mercy, and law of God have been demonstrated before all created intelligences. First principle: eternal security; sin will never again arise because its true character has been exposed forever.',
    sourceKeywords: ['What do ye imagine against the LORD', 'utter end', 'affliction shall not rise up the second time'],
    fulfillmentKeywords: ['lake of fire', 'second death', 'new heavens and new earth', 'no more death neither sorrow', 'all things new'],
    terms: [
      { term: 'affliction shall not rise up', original: 'לֹא־תָקוּם פַּעֲמַיִם צָרָה', translit: 'lo-taqum paʿamayim tsarah', gloss: 'trouble / distress will not arise twice', note: 'The cosmic guarantee that evil will never again disrupt creation.' },
      { term: 'an utter end', original: 'כָּלָה', translit: 'kalah', gloss: 'complete consumption, full end, total destruction', note: 'Refutes eternal torment in favor of complete eradication of sin.' },
    ],
  },
  'amo-3-7': {
    title: 'The Lord GOD Revealeth His Secret Unto the Prophets',
    principle:
      'Surely the Lord GOD will do nothing, but He revealeth His secret unto His servants the prophets. In every critical transition of salvation history (the Flood, Exodus, First Advent, and the End Times), God guides and protects His covenant people through the prophetic gift. First principle: prophecy is God\'s chosen method of covenant warning and instruction.',
    sourceKeywords: ['Lord GOD will do nothing', 'revealeth his secret', 'unto his servants the prophets'],
    fulfillmentKeywords: ['spirit of prophecy', 'testimony of Jesus', 'gift of prophecy', 'Joel 2:28', 'Revelation 19:10'],
    terms: [
      { term: 'His secret / counsel', original: 'סוֹדוֹ', translit: 'sodo', gloss: 'His secret counsel, intimate circle, divine decree', note: 'God shares His redemptive purposes with faithful prophetic couriers.' },
      { term: 'prophets', original: 'נְבִיאִים', translit: 'neviʾim', gloss: 'spokespersons, prophets', note: 'Authorized channels of divine revelation.' },
    ],
  },
  'num-12-6': {
    title: 'Visions and Dreams — The Divine Protocol for True Prophets',
    principle:
      'The LORD himself set the test for true prophets: "If there be a prophet among you, I the LORD will make myself known unto him in a vision, and will speak unto him in a dream." Two other verses draw the boundary. Isaiah 8:20 says a prophet must agree with God\'s law. Matthew 7:20 says, "by their fruits ye shall know them." First principle: every true prophet stays inside the boundaries God set in Scripture. No prophet ever cancels what God has already written.',
    sourceKeywords: ['prophet among you', 'make myself known unto him in a vision', 'speak unto him in a dream'],
    fulfillmentKeywords: ['spirit of prophecy', 'testimony of Jesus', '1 Corinthians 12:28', 'Revelation 19:10'],
    terms: [
      { term: 'in a vision', original: 'בַּמַּרְאָה', translit: 'bam-marʾah', gloss: 'in a vision / supernatural appearance', note: 'Empirical prophetic state accompanied by biblical physical signs (Dan 10:8, 17).' },
      { term: 'in a dream', original: 'בַּחֲלוֹם', translit: 'ba-chalom', gloss: 'in an inspired prophetic dream', note: 'God\'s communication channel through spiritual impression.' },
    ],
  },
  'rev-19-10': {
    title: 'The Testimony of Jesus is the Spirit of Prophecy',
    principle:
      'When John falls down to worship the angel, the angel commands: "See thou do it not: I am thy fellowservant, and of thy brethren that have the testimony of Jesus: worship God: for the testimony of Jesus is the spirit of prophecy." In Revelation 22:9, the angel parallelizes "thy brethren that have the testimony of Jesus" with "thy brethren the prophets." First principle: the identifying hallmark of the end-time remnant church (Rev 12:17) is the living manifestation of the prophetic voice through the Holy Spirit.',
    sourceKeywords: ['worship God', 'testimony of Jesus', 'spirit of prophecy', 'fellowservant'],
    fulfillmentKeywords: ['remnant church', 'Revelation 12:17', 'Revelation 22:9', 'Amos 3:7', 'commandments of God'],
    terms: [
      { term: 'the testimony of Jesus', original: 'ἡ μαρτυρία Ἰησοῦ', translit: 'hē martyria Iēsou', gloss: 'the testimony of Jesus / witness born by Jesus', note: 'Genitive of source: the message Jesus Himself communicates to His people through prophets.' },
      { term: 'spirit of prophecy', original: 'τὸ πνεῦμα τῆς προφητείας', translit: 'to pneuma tēs prophēteias', gloss: 'the Holy Spirit inspiring the prophetic gift', note: 'Affirms the active continuation of the prophetic gift in the remnant.' },
    ],
  },
  'lev-25-10': {
    title: 'The Jubilee — Liberty for All and the Return of Lost Inheritance',
    principle:
      'God said: “And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof: it shall be a jubile unto you; and ye shall return every man unto his possession…” The Jubilee is the great Old Testament type — God\'s advance picture of the final redemption. Lost inheritance came back, and that points to Eden restored. Debts were cancelled, and captive slaves walked free at the sound of the trumpet. First principle: redemption gives back everything that was lost in Adam.',
    sourceKeywords: ['hallow the fiftieth year', 'proclaim liberty', 'jubilee', 'return every man unto his possession'],
    fulfillmentKeywords: ['liberty to the captives', 'acceptable year of the Lord', 'inheritance of the saints', 'earth made new'],
    terms: [
      { term: 'jubilee', original: 'יוֹבֵל', translit: 'yovel', gloss: 'ram\'s horn / jubilee season of release', note: 'The trumpet announced freedom and the return of land that had belonged to a family.' },
      { term: 'proclaim liberty', original: 'קְרָאתֶם דְּרוֹר', translit: 'qerathem deror', gloss: 'proclaim emancipation / freedom', note: 'Jesus read this verse in Luke 4:18-19 and applied it to His own mission.' },
    ],
  },
  'jer-4-23': {
    title: 'The Earth Desolated — Chaos During the Millennial Prison',
    principle:
      'Jeremiah beholds the earth in prophetic vision: "I beheld the earth, and, lo, it was without form, and void; and the heavens, and they had no light... I beheld, and, lo, there was no man, and all the birds of the heavens were fled... the fruitful place was a wilderness, and all the cities thereof were broken down at the presence of the LORD." This vision describes the desolation of the earth during the 1,000 years of Revelation 20, while Satan is bound in the bottomless pit (abyss/tohu va-bohu). First principle: the earth rests in desolate stillness while the saints reign and judge with Christ in heaven.',
    sourceKeywords: ['without form and void', 'no light', 'no man', 'cities broken down', 'presence of the LORD'],
    fulfillmentKeywords: ['thousand years', 'bottomless pit', 'Satan bound', 'resurrection of the dead'],
    terms: [
      { term: 'without form and void', original: 'תֹּהוּ וָבֹהוּ', translit: 'tohu va-vohu', gloss: 'unformed and empty / chaotic desolation', note: 'Exact phrase from Genesis 1:2; earth returned to chaotic emptiness during the 1,000 years.' },
    ],
  },
  'isa-24-21': {
    title: 'Kings Gathered in the Pit — Visited After Many Days',
    principle:
      'And it shall come to pass in that day, that the LORD shall punish the host of the high ones that are on high, and the kings of the earth upon the earth. And they shall be gathered together, as prisoners are gathered in the pit, and shall be shut up in the prison, and after many days shall they be visited. This matches Revelation 20: the wicked rulers and Satan bound during the 1,000 years, and visited in final judgment at the close of the millennium. First principle: judgment is orderly, transparent, and comprehensive.',
    sourceKeywords: ['punish the host of the high ones', 'kings of the earth', 'gathered together as prisoners in the pit', 'shut up in the prison', 'after many days shall they be visited'],
    fulfillmentKeywords: ['thousand years', 'lake of fire', 'second resurrection', 'great white throne'],
    terms: [
      { term: 'shut up in the prison', original: 'וְסֻגְּרוּ עַל־מַסְגֵּר', translit: 've-suggeru ʿal-masger', gloss: 'and they shall be shut up in confinement', note: 'Parallels the binding of Satan in the bottomless pit (Rev 20:2-3).' },
      { term: 'after many days visited', original: 'וּמֵרֹב יָמִים יִפָּקֵדוּ', translit: 'u-merov yamim yippaqedu', gloss: 'and after a multitude of days they shall be visited/summoned to account', note: 'The 1,000-year interval before final execution of judgment.' },
    ],
  },
  'rev-20-14': {
    title: 'The Lake of Fire — The Second Death and End of Sin',
    principle:
      'And death and hell (hades/grave) were cast into the lake of fire. This is the second death. The fire that comes down from God out of heaven devours the wicked (Rev 20:9) and consumes them into ashes (Mal 4:1-3). Sin, Satan, death, and the grave are permanently eliminated from God\'s creation. First principle: God is a consuming fire to sin; the second death is the total extinction of evil, preserving the universe pure forever.',
    sourceKeywords: ['death and hell were cast into the lake of fire', 'second death', 'lake of fire'],
    fulfillmentKeywords: ['Malachi 4:1-3', 'ashes under the soles of feet', 'affliction shall not rise again', 'all things new'],
    terms: [
      { term: 'second death', original: 'ὁ δεύτερος θάνατος', translit: 'ho deuteros thanatos', gloss: 'the second / final death', note: 'Irreversible extinction; contrast with the first death which is an unconscious sleep awaiting resurrection.' },
      { term: 'lake of fire', original: 'λίמνην τοῦ πυρός', translit: 'limnēn tou pyros', gloss: 'lake of fire / divine purifying flame', note: 'Consumes everything contrary to God\'s holiness.' },
    ],
  },
  'rev-21-1': {
    title: 'New Heavens and New Earth — All Things Made New',
    principle:
      'And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea. The Holy City, New Jerusalem, descends from God out of heaven; God Himself will dwell with His people, wipe away all tears, and there shall be no more death, sorrow, crying, nor pain. First principle: God\'s original creation purpose is completely fulfilled; the earth is restored to its Edenic beauty for eternity.',
    sourceKeywords: ['new heaven and a new earth', 'first heaven and the first earth were passed away', 'no more sea', 'New Jerusalem', 'God shall wipe away all tears'],
    fulfillmentKeywords: ['Isaiah 65:17', '2 Peter 3:13', 'tabernacle of God is with men', 'no more death'],
    terms: [
      { term: 'new heaven and earth', original: 'οὐρανὸν καινὸν καὶ γῆν καινήν', translit: 'ouranon kainon kai gēn kainēn', gloss: 'new / fresh / renewed heaven and earth', note: 'Kainos — renewed in quality and nature, cleansed from all curse and taint of sin.' },
      { term: 'no more sea', original: 'ἡ θάλασσα οὐκ ἔστιν ἔτι', translit: 'hē thalassa ouk estin eti', gloss: 'the sea exists no longer', note: 'Symbol of division, chaos, and restless storms removed forever.' },
    ],
  },
  'deu-6-4': {
    title: 'The Shema — The One True Triune God (Elohim Echad)',
    principle:
      'Hear, O Israel: The LORD our God is one LORD. The foundational confession of biblical monotheism unites the plural title Elohim with the compound unity echad (used of husband and wife becoming "one flesh" in Genesis 2:24). It reveals the eternal, unbroken unity of Father, Son, and Holy Spirit in covenant love and redemptive purpose.',
    sourceKeywords: ['Hear O Israel', 'the LORD our God is one LORD', 'love the LORD thy God'],
    fulfillmentKeywords: ['one God and Father', 'in the name of the Father Son and Holy Ghost', 'grace of the Lord Jesus Christ and love of God'],
    terms: [
      { term: 'one / compound unity', original: 'אֶחָד', translit: 'ʾechad', gloss: 'one, united, composite unity', note: 'Distinct from yachid (solitary one). Indicates harmonious multi-personal divine unity.' },
      { term: 'God / plural majesty', original: 'אֱלֹהֵינוּ', translit: 'Eloheinu', gloss: 'our God (plural noun with possessive suffix)', note: 'Reflects the fullness of the Godhead acting as one.' },
    ],
  },
  'joh-14-16': {
    title: 'The Comforter — The Holy Spirit as Personal Helper',
    principle:
      'And I will pray the Father, and He shall give you another Comforter, that He may abide with you for ever; even the Spirit of truth. Jesus promises "another" (allon — of the same kind) Comforter to represent Him in every believer across all space and time. The Holy Spirit is a distinct divine Person who convicts, regenerates, guides, and seals believers until redemption.',
    sourceKeywords: ['another Comforter', 'Spirit of truth', 'abide with you for ever', 'Father shall give you'],
    fulfillmentKeywords: ['Holy Ghost', 'teach you all things', 'bring all things to your remembrance', 'sealed with the Holy Spirit'],
    terms: [
      { term: 'another (of same kind)', original: 'ἄλλον', translit: 'allon', gloss: 'another of the same nature / equal', note: 'Not heteron (another of a different kind). The Spirit is fully co-equal and divine like Jesus.' },
      { term: 'Comforter / Advocate', original: 'παράκλητος', translit: 'paraklētos', gloss: 'called alongside to help / advocate / helper', note: 'Intercessor, comforter, legal counselor, and strengthener.' },
    ],
  },
  'rom-3-21': {
    title: 'The Righteousness of God Manifested Without the Law',
    principle:
      'But now the righteousness of God without the law is manifested, being witnessed by the law and the prophets; even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe. Justification is entirely a gift of divine grace through the redemption that is in Christ Jesus, received by faith and credited to the believer.',
    sourceKeywords: ['righteousness of God', 'without the law', 'witnessed by the law and the prophets', 'by faith of Jesus Christ'],
    fulfillmentKeywords: ['justified freely by his grace', 'redemption in Christ Jesus', 'propitiation through faith in his blood'],
    terms: [
      { term: 'righteousness of God', original: 'δικαιοσύνη θεοῦ', translit: 'dikaiosynē theou', gloss: 'righteousness from God / divine vindication', note: 'Imputed and imparted status of right standing before God.' },
      { term: 'justified freely', original: 'δικαιούμενοι δωρεάν', translit: 'dikaioumenoi dōrean', gloss: 'being declared righteous as a free gift / without cost', note: 'Reflects unmerited grace unearned by human works.' },
    ],
  },
  'col-2-6': {
    title: 'Rooted and Built Up in Christ — Walking in Spiritual Maturity',
    principle:
      'As ye have therefore received Christ Jesus the Lord, so walk ye in Him: rooted and built up in Him, and stablished in the faith. Christian discipleship begins with receiving Christ by faith and progresses by living in unbroken dependence upon Him through prayer, Word study, and active service, putting on the whole armor of God against demonic deception.',
    sourceKeywords: ['received Christ Jesus', 'walk ye in Him', 'rooted and built up in Him', 'stablished in the faith'],
    fulfillmentKeywords: ['grow in grace', 'armor of God', 'fruit of the Spirit', 'abide in Me'],
    terms: [
      { term: 'rooted', original: 'ἐρριζωμένοι', translit: 'errizōmenoi', gloss: 'having been firmly rooted / anchored', note: 'Perfect passive participle: once planted by faith in Christ, continually drawing life.' },
      { term: 'built up', original: 'ἐποικοδομούμενοι', translit: 'epoikodomoumenoi', gloss: 'being progressively constructed upon', note: 'Present passive participle: continuous spiritual architecture in Christ.' },
    ],
  },
  'mat-16-18': {
    title: 'Upon This Rock I Will Build My Church (Petra & Ekklēsia)',
    principle:
      'Thou art Peter (petros, a loose stone), and upon this rock (petra, the massive bedrock of Peter\'s confession: "Thou art the Christ, the Son of the living God") I will build My church; and the gates of hell shall not prevail against it. Christ Himself is the sole Foundation and Cornerstone of the church. The assembly of believers is called out from worldly allegiance to be His royal priesthood.',
    sourceKeywords: ['upon this rock', 'build my church', 'gates of hell shall not prevail'],
    fulfillmentKeywords: ['chief cornerstone', 'spiritual house', 'royal priesthood', 'body of Christ'],
    terms: [
      { term: 'bedrock / rock', original: 'πέτρᾳ', translit: 'petra', gloss: 'massive living bedrock / foundation cliff', note: 'Distinct from petros (a movable pebble/fragment). Christ and His divinity is the rock.' },
      { term: 'church / called-out assembly', original: 'ἐκκλησία', translit: 'ekklēsia', gloss: 'called out citizens / covenant assembly', note: 'Continuity with the Qahal of Israel in the Old Testament.' },
    ],
  },
  'joh-17-21': {
    title: 'Unity in Christ — The High-Priestly Prayer of Jesus',
    principle:
      'That they all may be one; as Thou, Father, art in Me, and I in Thee, that they also may be one in Us: that the world may believe that Thou hast sent Me. The spiritual and doctrinal unity of believers across all racial, national, social, and gender boundaries is the crowning proof of Christ\'s divine mission. It is grounded in shared truth and unselfish agape love.',
    sourceKeywords: ['that they all may be one', 'as Thou Father art in Me', 'that the world may believe'],
    fulfillmentKeywords: ['one body and one Spirit', 'neither Jew nor Greek', 'perfected into one'],
    terms: [
      { term: 'one', original: 'ἕν', translit: 'hen', gloss: 'one (neuter) / single organic entity', note: 'Unity of essence, purpose, mind, and love like the Godhead.' },
    ],
  },
  'rom-6-3': {
    title: 'Buried in Baptism — United with Christ in Resurrection',
    principle:
      'Know ye not, that so many of us as were baptized into Jesus Christ were baptized into His death? Therefore we are buried with Him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life. Biblical baptism requires immersion in water, symbolizing death to the old life and resurrection into spiritual power.',
    sourceKeywords: ['baptized into Jesus Christ', 'buried with Him by baptism into death', 'walk in newness of life'],
    fulfillmentKeywords: ['repent and be baptized', 'buried with him in baptism', 'put on Christ'],
    terms: [
      { term: 'baptized / immersed', original: 'ἐβαπτίσθημεν', translit: 'ebaptisthēmen', gloss: 'we were submerged / immersed / plunged under', note: 'Requires full immersion in water to signify burial and resurrection.' },
      { term: 'newness of life', original: 'καινότητι ζωῆς', translit: 'kainotēti zōēs', gloss: 'fresh quality of divine life', note: 'The resurrected life energized by the Holy Spirit.' },
    ],
  },
  '1co-11-23': {
    title: 'The Lord\'s Supper — Remembrance Till He Come (Anamnēsis)',
    principle:
      'For I have received of the Lord that which also I delivered unto you, that the Lord Jesus the same night in which He was betrayed took bread: and when He had given thanks, He brake it, and said, Take, eat: this is My body, which is broken for you: this do in remembrance of Me. The Lord\'s Supper and the ordinance of humility (foot washing) proclaim the Lord\'s death until He returns in glory.',
    sourceKeywords: ['this is my body', 'this do in remembrance of me', 'new testament in my blood', 'shew the Lord\'s death till He come'],
    fulfillmentKeywords: ['blood of the new covenant', 'foot washing', 'fellowship of Christ\'s sufferings', 'eat bread in the kingdom'],
    terms: [
      { term: 'in remembrance / memorial', original: 'εἰς τὴν ἐμὴν ἀνάμνησιν', translit: 'eis tēn emēn anamnēsin', gloss: 'unto My remembrance / living memorial', note: 'Not a repeated physical sacrifice (transubstantiation), but an active, faith-filled memorial.' },
    ],
  },
  '1co-12-28': {
    title: 'Spiritual Gifts in the Church — Sovereign Holy Spirit Endowments',
    principle:
      'And God hath set some in the church, first apostles, secondarily prophets, thirdly teachers, after that miracles, then gifts of healings, helps, governments, diversities of tongues. The Holy Spirit sovereignly endows believers with spiritual abilities to equip the saints and edify the body of Christ until unity in the faith and character perfection are achieved.',
    sourceKeywords: ['God hath set some in the church', 'prophets', 'teachers', 'spiritual gifts'],
    fulfillmentKeywords: ['edifying of the body of Christ', 'unity of the faith', 'measure of the stature of Christ'],
    terms: [
      { term: 'spiritual gifts', original: 'χαρίσματα', translit: 'charismata', gloss: 'grace-endowments / spiritual gifts', note: 'Free divine gifts given for corporate building, not personal vanity.' },
    ],
  },
  'mal-3-8': {
    title: 'Stewardship & The Tithe — Acknowledging Divine Sovereignty',
    principle:
      'Will a man rob God? Yet ye have robbed Me. But ye say, Wherein have we robbed Thee? In tithes and offerings. God claims the tithe (ten percent of increase) as holy unto Himself. Returning tithes and offerings into the storehouse acknowledges God as the true Owner of all creation and funds the worldwide proclamation of the gospel without worldly commercialism.',
    sourceKeywords: ['rob God', 'tithes and offerings', 'bring ye all the tithes into the storehouse', 'windows of heaven'],
    fulfillmentKeywords: ['Genesis 14:20', 'Leviticus 27:30', 'Matthew 23:23', 'Hebrews 7:8'],
    terms: [
      { term: 'the tithe / tenth', original: 'הַמַּעֲשֵׂר', translit: 'ham-maʿaser', gloss: 'the tenth part / tithe', note: 'Pre-dates the Levitical law (Abraham gave tithes to Melchizedek in Gen 14:20).' },
      { term: 'storehouse', original: 'בֵּית הָאוֹצָר', translit: 'beit ha-ʾotsar', gloss: 'treasury / central storehouse', note: 'The dedicated administrative fund for gospel ministry.' },
    ],
  },
  '1co-6-19': {
    title: 'The Body as the Temple of the Holy Spirit — Health & Sanctification',
    principle:
      'What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God\'s. Christian lifestyle involves holistic sanctification: physical health, temperance, modesty, and abstaining from unclean meats (Lev 11) and harmful stimulants.',
    sourceKeywords: ['body is the temple of the Holy Ghost', 'ye are not your own', 'bought with a price', 'glorify God in your body'],
    fulfillmentKeywords: ['living sacrifice', 'holy acceptable unto God', 'sanctify you wholly', 'whether ye eat or drink'],
    terms: [
      { term: 'inner sanctuary / temple', original: 'ναὸς', translit: 'naos', gloss: 'holy sanctuary / shrine / Most Holy Place', note: 'Not hieron (general temple precincts), but naos: the sacred dwelling place of God\'s glory.' },
      { term: 'bought with a price', original: 'ἠγοράσθητε τιμῆς', translit: 'ēgorasthēte timēs', gloss: 'ye were purchased with a price', note: 'Calvary purchase gives Christ complete ownership over our physical and mental faculties.' },
    ],
  },
  'rev-7-2': {
    title: 'The Seal of the Living God — Settling Into Truth (Sphragis)',
    principle:
      'And I saw another angel ascending from the east, having the seal of the living God: and he cried with a loud voice to the four angels, to whom it was given to hurt the earth and the sea, Saying, Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads. The seal of God designates character maturity and loyalty to the Fourth Commandment Creator-worship.',
    sourceKeywords: ['seal of the living God', 'four winds held', 'sealed in their foreheads', 'servants of our God'],
    fulfillmentKeywords: ['144,000', 'Father\'s name in foreheads', 'mark on the foreheads', 'commandments of God'],
    terms: [
      { term: 'seal / signet', original: 'σφραγῖδα', translit: 'sphragida', gloss: 'seal, stamp of ownership and authentication', note: 'Contains divine name, office (Creator), and territory (heaven and earth) found in Fourth Commandment.' },
    ],
  },
  'rev-13-11': {
    title: 'The Two-Horned Beast & The Coercive Mark (Charagma)',
    principle:
      'And I beheld another beast coming up out of the earth; and he had two horns like a lamb, and he spake as a dragon. And he exerciseth all the power of the first beast before him, and causeth the earth and them which dwell therein to worship the first beast, whose deadly wound was healed. He causes all to receive a mark in their right hand or foreheads on pain of economic boycott and death.',
    sourceKeywords: ['two horns like a lamb', 'spake as a dragon', 'mark of the beast', 'buy or sell', 'image to the beast'],
    fulfillmentKeywords: ['third angel warning', 'wrath of God', 'commandments of God and faith of Jesus'],
    terms: [
      { term: 'mark / stamp', original: 'χάραγμα', translit: 'charagma', gloss: 'imprint, stamp, mark of servitude / counterfeit seal', note: 'Enforced Sunday observance in homage to papal ecclesiastical authority over Scripture.' },
    ],
  },
  'rev-16-1': {
    title: 'The Seven Last Plagues — Unmingled Divine Wrath',
    principle:
      'And I heard a great voice out of the temple saying to the seven angels, Go your ways, and pour out the vials of the wrath of God upon the earth. The plagues are unmixed with mercy, falling exclusively upon those who have irrevocably chosen the beast\'s mark after probation closes, vindicating God\'s justice and delivering the remnant.',
    sourceKeywords: ['pour out the vials of the wrath of God', 'grievous sore', 'sea became as blood', 'Euphrates dried up', 'It is done'],
    fulfillmentKeywords: ['time of trouble', 'deliverance of saints', 'plagues shall not come nigh thy dwelling'],
    terms: [
      { term: 'vials / golden bowls', original: 'φιάλας', translit: 'phialas', gloss: 'broad shallow bowls / censers of judgment', note: 'Corresponds to temple censers poured out when intercession ends.' },
    ],
  },
  'rev-20-9': {
    title: 'The Final Siege & Devouring Fire — The Second Death',
    principle:
      'And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city: and fire came down from God out of heaven, and devoured them. At the close of the 1,000 years, the resurrected wicked under Satan attempt to conquer New Jerusalem. The Great White Throne appears; every knee bows, and divine purifying fire consumes sin and sinners into eternal non-existence.',
    sourceKeywords: ['compassed the camp of the saints', 'the beloved city', 'fire came down from God', 'devoured them'],
    fulfillmentKeywords: ['Malachi 4:1-3', 'ashes under feet', 'lake of fire', 'second death'],
    terms: [
      { term: 'devoured them', original: 'κατέφαγεν αὐτούς', translit: 'katephagen autous', gloss: 'consumed / devoured them completely', note: 'Total destruction leaving neither root nor branch; refutes eternal conscious torment.' },
    ],
  },
  'rev-22-11': {
    title: 'The Close of Probation — The Final Irrevocable Decree',
    principle:
      'He that is unjust, let him be unjust still: and he which is filthy, let him be filthy still: and he that is righteous, let him be righteous still: and he that is holy, let him be holy still. And, behold, I come quickly; and My reward is with Me, to give every man according as his work shall be. Christ lays aside His priestly robes, ending mediation in the heavenly sanctuary.',
    sourceKeywords: ['unjust let him be unjust still', 'holy let him be holy still', 'behold I come quickly', 'my reward is with Me'],
    fulfillmentKeywords: ['Michael stands up', 'temple filled with smoke', 'door was shut'],
    terms: [
      { term: 'still / permanently fixed', original: 'ἔτι', translit: 'eti', gloss: 'still, further, yet (denoting permanent moral state)', note: 'Characters are forever settled; probation has closed forever.' },
    ],
  },
  'amo-9-9': {
    title: 'The Sifting of the House of Israel — Not the Least Grain Lost',
    principle:
      'For, lo, I will command, and I will sift the house of Israel among all nations, like as corn is sifted in a sieve, yet shall not the least grain fall upon the earth. The shaking in the remnant church tests every believer with trial, persecution, and deceptive winds of doctrine. Only genuine wheat remains in the sieve; chaff is blown away.',
    sourceKeywords: ['sift the house of Israel', 'like as corn is sifted in a sieve', 'not the least grain fall upon the earth'],
    fulfillmentKeywords: ['shaking in the church', 'straight testimony', 'Laodicean message', 'gold tried in fire'],
    terms: [
      { term: 'I will sift', original: 'הֲנִיעוֹתִי', translit: 'hanīʿoti', gloss: 'I will shake / agitate violently / sift', note: 'Divine shaking separates real faith from formal profession.' },
      { term: 'least grain / pebble', original: 'צְרוֹר', translit: 'tseror', gloss: 'kernel, grain, pebble', note: 'Every sincere believer is precious and preserved by God.' },
    ],
  },
  'jer-30-7': {
    title: 'The Time of Jacob\'s Trouble — Saved Out of It',
    principle:
      'Alas! for that day is great, so that none is like it: it is even the time of Jacob\'s trouble; but he shall be saved out of it. Like Jacob wrestling at Jabbok in darkness, God\'s people undergo intense mental anguish under the death decree after probation closes. Holding fast to God\'s promises with unyielding faith, their deliverance is sealed.',
    sourceKeywords: ['time of Jacob\'s trouble', 'none is like it', 'he shall be saved out of it'],
    fulfillmentKeywords: ['wrestling with angel', 'Daniel 12:1', 'time of trouble', 'deliverance of God\'s people'],
    terms: [
      { term: 'trouble / distress', original: 'צָרָה', translit: 'tsarah', gloss: 'dire distress, anguish, extremity', note: 'The ultimate crucible of faith before the clouds part.' },
    ],
  },
  'jol-3-16': {
    title: 'The Lord Roars Out of Zion — The Voice of God Delivers',
    principle:
      'The LORD also shall roar out of Zion, and utter His voice from Jerusalem; and the heavens and the earth shall shake: but the LORD will be the hope of His people, and the strength of the children of Israel. At the darkest midnight hour of the death decree, God speaks with a voice that shakes the planet, proclaiming the day and hour of Jesus\' coming.',
    sourceKeywords: ['LORD shall roar out of Zion', 'utter His voice from Jerusalem', 'heavens and earth shall shake', 'LORD hope of His people'],
    fulfillmentKeywords: ['voice of God', 'deliverance', 'It is done', 'midnight deliverance'],
    terms: [
      { term: 'shall roar', original: 'יִשְׁאָג', translit: 'yishʾag', gloss: 'shall roar like a mighty lion', note: 'The sovereign majesty of God intervening on behalf of His saints.' },
    ],
  },
  // ── Messianic Prophecy Anchors (Tier 3 Jesus Christ threads) ──────────────
  // Hand-written details for every Tier 3 anchor not covered by the sections
  // above; kept in sync with tier3Messianic.ts by `npm run audit:data`.
  'num-24-17': {
    title: 'A Star out of Jacob, a Sceptre out of Israel',
    principle:
      'Balaam was hired to curse Israel, but he could only bless. He said: I shall see him, but not now… there shall come a Star out of Jacob, and a Sceptre shall rise out of Israel. First principle: God turns every curse of the enemy into a blessing. The King God promised comes at God\'s appointed time, and he is certain to come.',
    sourceKeywords: ['Star out of Jacob', 'Sceptre rise out of Israel', 'see him, but not now', 'smite the corners of Moab'],
    fulfillmentKeywords: ['star', 'worship', 'King of the Jews', 'bright and morning star'],
    terms: [
      { term: 'star', original: 'כּוֹכָב', translit: 'kokhab', gloss: 'star, blazing light', note: 'The Magi followed His star (Matt 2:2); Christ names Himself the bright and morning star (Rev 22:16).' },
    ],
  },
  'isa-7-14': {
    title: 'The Virgin Shall Conceive — Immanuel',
    principle:
      'Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel. The sign is God\'s own: a child whose very name is God with us. First principle: the Messiah enters humanity by divine initiative, not human generation, uniting deity and manhood in one Person.',
    sourceKeywords: ['a virgin shall conceive', 'bear a son', 'Immanuel', 'butter and honey shall he eat'],
    fulfillmentKeywords: ['virgin', 'bring forth a son', 'call his name JESUS', 'God with us'],
    terms: [
      { term: 'virgin', original: 'עַלְמָה', translit: 'almah', gloss: 'maiden of marriageable age, virgin', note: 'Rendered ἡ παρθένος (the virgin) in the LXX; Matthew quotes it of Mary (Matt 1:23).' },
    ],
  },
  'isa-9-6': {
    title: 'Unto Us a Child Is Born — The Mighty God',
    principle:
      'Unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace. First principle: the born Child is the given Son — truly human, truly divine, the rightful Bearer of government.',
    sourceKeywords: ['child is born', 'son is given', 'government upon his shoulder', 'Prince of Peace', 'of the increase of his government'],
    fulfillmentKeywords: ['Saviour', 'Christ the Lord', 'Word was God', 'in him dwelleth all the fulness'],
    terms: [
      { term: 'Wonderful', original: 'פֶּלֶא', translit: 'pele', gloss: 'wonder, miracle, beyond comprehension', note: 'The same root names the Angel called Wonderful in Judges 13:18 — a divine title.' },
    ],
  },
  'isa-11-1': {
    title: 'A Rod out of the Stem of Jesse',
    principle:
      'And there shall come forth a rod out of the stem of Jesse, and a Branch shall grow out of his roots. From the felled stump of David\'s house God raises living growth. First principle: the Messianic line survives every pruning by grace, and the Branch reigns by the sevenfold Spirit, not by human might.',
    sourceKeywords: ['rod out of the stem of Jesse', 'Branch grow out of his roots', 'spirit of the LORD shall rest upon him', 'righteousness shall be the girdle of his loins'],
    fulfillmentKeywords: ['son of David', 'root of Jesse', 'Root and Offspring of David', 'reign'],
    terms: [
      { term: 'Branch', original: 'נֵצֶר', translit: 'netser', gloss: 'sprout, shoot from a stump', note: 'Echoed in Nazaret (Nazareth); Revelation joins root and offspring of David in one Person (Rev 22:16).' },
    ],
  },
  'jer-23-5': {
    title: 'A Righteous Branch — The LORD Our Righteousness',
    principle:
      'Behold, the days come, saith the LORD, that I will raise unto David a righteous Branch, and a King shall reign and prosper, and shall execute judgment and justice in the earth... and this is his name whereby he shall be called, THE LORD OUR RIGHTEOUSNESS. First principle: the King Himself is our righteousness — justification by a Person, not a performance.',
    sourceKeywords: ['righteous Branch', 'King shall reign and prosper', 'judgment and justice in the earth', 'THE LORD OUR RIGHTEOUSNESS'],
    fulfillmentKeywords: ['made unto us righteousness', 'wisdom, and righteousness', 'sanctification, and redemption'],
    terms: [
      { term: 'Branch', original: 'צֶמַח', translit: 'tsemach', gloss: 'sprout, growth of a plant', note: 'The same title returns in Zechariah 3:8 and 6:12 — one Branch, one Name.' },
    ],
  },
  'mic-5-2': {
    title: 'Bethlehem — Goings Forth from Everlasting',
    principle:
      'But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting. First principle: the Ruler has a birthplace in time and an origin in eternity — uncreated, yet born of a woman.',
    sourceKeywords: ['Bethlehem Ephratah', 'little among the thousands of Judah', 'ruler in Israel', 'from everlasting'],
    fulfillmentKeywords: ['Bethlehem of Judaea', 'shepherds', 'born in Bethlehem', 'not least among the princes of Judah'],
    terms: [
      { term: 'goings forth', original: 'מוֹצָאוֹת', translit: 'motza\'ot', gloss: 'origins, outgoings, springs', note: 'Plural of ongoing emergence — the preexistent One whose Bethlehem appearing was one going-forth of many.' },
    ],
  },
  'hos-11-1': {
    title: 'Called My Son out of Egypt',
    principle:
      'When Israel was a child, then I loved him, and called my son out of Egypt. What Israel embodied poorly, the true Son embodies perfectly: God calls His Son up out of Egypt after Herod\'s wrath. First principle: Israel\'s history is prophetic pattern; Christ relives and fulfills it.',
    sourceKeywords: ['Israel was a child', 'I loved him', 'called my son out of Egypt', 'they sacrificed unto Baalim'],
    fulfillmentKeywords: ['arise, and take the young child', 'out of Egypt', 'that it might be fulfilled'],
    terms: [
      { term: 'my son', original: 'בְּנִי', translit: 'veni', gloss: 'my son', note: 'Exodus 4:22 names Israel my son, my firstborn; Hosea 11:1 renews the call, and Matthew hears the greater Son in it (Matt 2:15).' },
    ],
  },
  'jer-31-15': {
    title: 'Rachel Weeping for Her Children',
    principle:
      'A voice was heard in Ramah, lamentation, and bitter weeping; Rahel weeping for her children refused to be comforted for her children, because they were not. Matthew\'s link to the Bethlehem massacre is no license for despair: the same chapter promises a new covenant and that Rachel shall return. First principle: sorrow in God\'s plan is never the last word.',
    sourceKeywords: ['voice was heard in Ramah', 'bitter weeping', 'Rahel weeping for her children', 'refused to be comforted'],
    fulfillmentKeywords: ['Herod', 'slew all the children', 'lamentation', 'weeping, and great mourning'],
    terms: [
      { term: 'lamentation', original: 'בְּכִי תַמְרוּרִים', translit: 'vekhi tamrurim', gloss: 'weeping of bitternesses', note: 'The plural intensity matches Matthew\'s great mourning in the region of Rachel\'s tomb.' },
    ],
  },
  'zec-2-10': {
    title: 'Lo, I Come, and I Will Dwell in the Midst of Thee',
    principle:
      'Sing and rejoice, O daughter of Zion: for, lo, I come, and I will dwell in the midst of thee, saith the LORD. The One speaking is Yahweh Himself, yet He comes — incarnation foretold. First principle: God\'s dwelling with man is not a metaphor but a Person tabernacling among us.',
    sourceKeywords: ['Sing and rejoice', 'daughter of Zion', 'I come, and I will dwell in the midst of thee', 'many nations shall be joined to the LORD'],
    fulfillmentKeywords: ['Word was made flesh', 'dwelt among us', 'tabernacle of God is with men'],
    terms: [
      { term: 'dwell', original: 'שָׁכַנְתִּי', translit: 'shakhanti', gloss: 'I have tabernacled, taken up residence', note: 'Root of mishkan (tabernacle); John 1:14 uses eskēnōsen — tabernacled — of the Word made flesh.' },
    ],
  },
  'psa-40-6': {
    title: 'Mine Ears Hast Thou Opened — Lo, I Come',
    principle:
      'Sacrifice and offering thou didst not desire; mine ears hast thou opened: burnt offering and sin offering hast thou not required. Then said I, Lo, I come: in the volume of the book it is written of me, I delight to do thy will, O my God. First principle: obedience from a prepared heart outweighs the whole sacrificial system — and Hebrews puts the words in the mouth of the Son entering the world.',
    sourceKeywords: ['Sacrifice and offering thou didst not desire', 'mine ears hast thou opened', 'Lo, I come', 'I delight to do thy will'],
    fulfillmentKeywords: ['a body hast thou prepared me', 'by the which will we are sanctified', 'taketh away the first'],
    terms: [
      { term: 'opened', original: 'כָּרִיתָ', translit: 'karita', gloss: 'you have dug out, bored open', note: 'Of a bored-open ear marking willing servanthood (Exod 21:6); Hebrews reads it as a body prepared for the will of God (Heb 10:5).' },
    ],
  },
  'psa-45-7': {
    title: 'Anointed with the Oil of Gladness Above Thy Fellows',
    principle:
      'Thou lovest righteousness, and hatest wickedness: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows. The Psalm addresses the King as God (thy throne, O God, is for ever) and then distinguishes Him from God His God. First principle: the anointed One is divine yet anointed — the Spirit-rested Son, glad beyond all companions.',
    sourceKeywords: ['lovest righteousness', 'hatest wickedness', 'oil of gladness above thy fellows', 'thy throne, O God'],
    fulfillmentKeywords: ['anointed with the Holy Ghost', 'without measure', 'God, even thy God, hath anointed thee'],
    terms: [
      { term: 'anointed', original: 'מָשַׁחְתָּ', translit: 'mashakhta', gloss: 'you have smeared with oil, consecrated', note: 'Root of Mashiach/Messiah; Hebrews 1:9 applies the verse directly to the Son.' },
    ],
  },
  'isa-42-1': {
    title: 'Behold My Servant — My Soul Delighteth in Him',
    principle:
      'Behold my servant, whom I uphold; mine elect, in whom my soul delighteth; I have put my spirit upon him: he shall bring forth judgment to the Gentiles. Strength without harshness: a bruised reed shall he not break. First principle: divine election expresses itself in gentle, world-mending justice.',
    sourceKeywords: ['Behold my servant', 'mine elect, in whom my soul delighteth', 'I have put my spirit upon him', 'bruised reed shall he not break'],
    fulfillmentKeywords: ['This is my beloved Son, in whom I am well pleased', 'not quench', 'judgment unto victory'],
    terms: [
      { term: 'my servant', original: 'עַבְדִּי', translit: '\'avdi', gloss: 'my servant, bondservant', note: 'Targum Jonathan: Behold, My Servant, the Messiah — the title taken up in the Baptism voice of Matt 3:17.' },
    ],
  },
  'isa-61-1': {
    title: 'The Spirit of the Lord GOD Is upon Me',
    principle:
      'The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek... to bind up the brokenhearted, to proclaim liberty to the captives... to comfort all that mourn. First principle: the anointing has an agenda — good news, release, and comfort for the least able to help themselves.',
    sourceKeywords: ['Spirit of the Lord GOD is upon me', 'anointed me to preach good tidings unto the meek', 'liberty to the captives', 'the acceptable year of the LORD'],
    fulfillmentKeywords: ['This day is this scripture fulfilled', 'anointed with the Holy Ghost', 'preach the gospel to the poor'],
    terms: [
      { term: 'anointed me', original: 'מָשַׁח', translit: 'mashakh', gloss: 'to smear, consecrate with oil', note: 'Jesus applies this exact verse to Himself in Nazareth (Luke 4:18-21) — the clearest self-declared fulfillment in the Gospels.' },
    ],
  },
  'isa-9-1': {
    title: 'Galilee of the Nations Sees a Great Light',
    principle:
      'Nevertheless the dimness shall not be such as was in her vexation... The land of Zebulun, and the land of Naphtali... Galilee of the nations. The people that walked in darkness have seen a great light. First principle: God\'s light dawns first where contempt is thickest — Galilee, despised as the Gentile frontier.',
    sourceKeywords: ['Galilee of the nations', 'people that walked in darkness', 'great light', 'they that dwell in the land of the shadow of death'],
    fulfillmentKeywords: ['Galilee of the Gentiles', 'light is sprung up', 'from that time Jesus began to preach'],
    terms: [
      { term: 'light', original: 'אוֹר', translit: 'or', gloss: 'light, illumination', note: 'Matthew quotes the verse verbatim of Jesus settling in Capernaum (Matt 4:14-16).' },
    ],
  },
  'isa-35-4': {
    title: 'Your God Will Come — Then the Blind See',
    principle:
      'Behold, your God will come with vengeance, even God with a recompence; he will come and save you. Then the eyes of the blind shall be opened, and the ears of the deaf shall be unstopped... the lame man shall leap as an hart, and the tongue of the dumb sing. First principle: when God comes, creation itself is mended — the credentials of the Advent are healings.',
    sourceKeywords: ['your God will come', 'eyes of the blind shall be opened', 'ears of the deaf unstopped', 'lame man shall leap'],
    fulfillmentKeywords: ['the blind receive their sight', 'the lame walk', 'the dead are raised up', 'shewed them of all his miracles'],
    terms: [
      { term: 'shall be opened', original: 'תִּפָּקַחְנָה', translit: 'tipaqakhnah', gloss: 'shall be opened (divine passivity)', note: 'Jesus answers John\'s doubt with these very works (Matt 11:4-5) — the Isaiah checklist as messianic proof.' },
    ],
  },
  'isa-42-6': {
    title: 'A Covenant of the People, a Light of the Gentiles',
    principle:
      'I the LORD have called thee in righteousness, and will hold thine hand, and will keep thee, and give thee for a covenant of the people, for a light of the Gentiles; To open the blind eyes, to bring out the prisoners from the prison. First principle: the Servant is not only bearer of light — He is Himself the covenant, the divine commitment personified.',
    sourceKeywords: ['called thee in righteousness', 'a covenant of the people', 'a light of the Gentiles', 'open the blind eyes'],
    fulfillmentKeywords: ['A light to lighten the Gentiles', 'glory of thy people Israel', 'turn them from darkness to light'],
    terms: [
      { term: 'covenant', original: 'בְּרִית', translit: 'berit', gloss: 'covenant, binding pledge', note: 'The Messiah is given AS the covenant — Simeon blesses the infant as God\'s light for the nations (Luke 2:32).' },
    ],
  },
  'isa-49-6': {
    title: 'My Salvation unto the End of the Earth',
    principle:
      'It is a light thing that thou shouldest be my servant to raise up the tribes of Jacob... I will also give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth. First principle: restoring Israel is too small a mission for the Servant — the gospel is worldwide by divine design, not afterthought.',
    sourceKeywords: ['a light thing', 'raise up the tribes of Jacob', 'a light to the Gentiles', 'my salvation unto the end of the earth'],
    fulfillmentKeywords: ['we turn to the Gentiles', 'ordained for eternal life', 'light of the world'],
    terms: [
      { term: 'light thing', original: 'קָל', translit: 'qal', gloss: 'light, slight, too small a thing', note: 'Paul and Barnabas quote the verse in Antioch as warrant for turning to the Gentiles (Acts 13:47).' },
    ],
  },
  'hag-2-7': {
    title: 'The Desire of All Nations Shall Come',
    principle:
      'For thus saith the LORD of hosts; Yet once, it is a little while, and I will shake the heavens, and the earth... and the desire of all nations shall come: and I will fill this house with glory. The second temple\'s glory exceeded Solomon\'s because the Desire Himself walked its courts. First principle: God\'s greatest glory in a place arrives quietly, in a Person.',
    sourceKeywords: ['I will shake all nations', 'the desire of all nations shall come', 'fill this house with glory', 'peace in this place'],
    fulfillmentKeywords: ['mine eyes have seen thy salvation', 'cast out them that sold', 'the Word was made flesh'],
    terms: [
      { term: 'desire', original: 'חֶמְדָּה', translit: 'chemdah', gloss: 'desire, delight, precious thing', note: 'Simeon, holding the infant in the temple courts, embodies the promise fulfilled (Luke 2:29-32).' },
    ],
  },
  'zec-3-8': {
    title: 'I Will Bring Forth My Servant the BRANCH',
    principle:
      'Hear now, O Joshua the high priest, thou, and thy fellows that sit before thee: for they are men wondered at: for, behold, I will bring forth my servant the BRANCH. The cleansing of the high priest with filthy garments taken away previews what the Branch accomplishes. First principle: God answers iniquity with a Person — a Servant-King who removes sin in one day.',
    sourceKeywords: ['Joshua the high priest', 'men wondered at', 'my servant the BRANCH', 'I will remove the iniquity of that land in one day'],
    fulfillmentKeywords: ['took upon him the form of a servant', 'obedient unto death', 'minister unto you'],
    terms: [
      { term: 'the BRANCH', original: 'צֶמַח', translit: 'tsemach', gloss: 'sprout, growth', note: 'Targum Jonathan inserts the name directly: I will bring forth My servant the Messiah.' },
    ],
  },
  'psa-34-20': {
    title: 'He Keepeth All His Bones: Not One Is Broken',
    principle:
      'Many are the afflictions of the righteous: but the LORD delivereth him out of them all. He keepeth all his bones: not one of them is broken. The righteous sufferer passes through affliction with an unbroken body — the Passover-lamb pattern. First principle: God preserves His sacrifice whole even in death.',
    sourceKeywords: ['afflictions of the righteous', 'keepeth all his bones', 'not one of them is broken', 'evildoers shall be cut off'],
    fulfillmentKeywords: ['brake not his legs', 'a bone of him shall not be broken', 'already dead'],
    terms: [
      { term: 'keepeth', original: 'שֹׁמֵר', translit: 'shomer', gloss: 'one keeping, guarding', note: 'John 19:36 joins this verse with Exodus 12:46 at the cross: that the scripture should be fulfilled.' },
    ],
  },
  'psa-41-9': {
    title: 'Mine Own Familiar Friend Hath Lifted Up His Heel',
    principle:
      'Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me. Betrayal comes not from a stranger but from table fellowship. First principle: the deepest wound of the righteous sufferer is treachery at the table — and Jesus applies the verse to Judas Himself.',
    sourceKeywords: ['mine own familiar friend', 'in whom I trusted', 'did eat of my bread', 'lifted up his heel against me'],
    fulfillmentKeywords: ['he that eateth bread with me', 'hath lifted up his heel', 'Judas Iscariot', 'dipped his hand with me'],
    terms: [
      { term: 'hath lifted up his heel', original: 'הִגְדִּיל עָקֵב', translit: 'higdil aqev', gloss: 'has made great the heel against me', note: 'Jesus quotes the verse in the upper room: that the scripture may be fulfilled (John 13:18).' },
    ],
  },
  'psa-69-21': {
    title: 'Gall for Meat; Vinegar for Thirst',
    principle:
      'Reproach hath broken my heart; and I am full of heaviness... They gave me also gall for my meat; and in my thirst they gave me vinegar to drink. Every kindness refused to the righteous sufferer becomes a registered detail of the Passion. First principle: the cross fulfilled scripture down to the drink offered and refused.',
    sourceKeywords: ['gall for my meat', 'vinegar to drink', 'reproach hath broken my heart', 'I looked for some to take pity'],
    fulfillmentKeywords: ['vinegar to drink mingled with gall', 'I thirst', 'filled a sponge with vinegar'],
    terms: [
      { term: 'gall', original: 'רֹאשׁ', translit: 'rosh', gloss: 'gall, poison, bitter herb', note: 'Here it is bitterness pressed to the lips of the Sufferer (Matt 27:34); John records the hyssop-borne vinegar.' },
    ],
  },
  'isa-50-6': {
    title: 'I Gave My Back to the Smiters',
    principle:
      'I gave my back to the smiters, and my cheeks to them that plucked off the hair: I hid not my face from shame and spitting. This is not a victim dragged to suffering but a Servant who sets His face like a flint. First principle: the Passion is voluntary obedience — each humiliation accepted on purpose.',
    sourceKeywords: ['I gave my back to the smiters', 'cheeks to them that plucked off the hair', 'hid not my face from shame and spitting', 'set my face like a flint'],
    fulfillmentKeywords: ['did spit in his face', 'buffeted him', 'scourged him', 'smote him with their hands'],
    terms: [
      { term: 'I gave', original: 'נָתַתִּי', translit: 'natatti', gloss: 'I gave, handed over', note: 'First-person voluntariness: Gethsemane\'s not my will is already present in the Servant\'s grammar.' },
    ],
  },
  'zec-11-12': {
    title: 'Thirty Pieces of Silver Cast to the Potter',
    principle:
      'So they weighed for my price thirty pieces of silver... a goodly price that I was prised at of them! And I took the thirty pieces of silver, and cast them to the potter in the house of the LORD. The Shepherd of Israel is valued at a slave-price and the money ends in potter\'s-field soil. First principle: rejecting the Shepherd has a price tag — and it buys a graveyard.',
    sourceKeywords: ['weighed for my price thirty pieces of silver', 'cast them to the potter', 'in the house of the LORD', 'my shepherd'],
    fulfillmentKeywords: ['thirty pieces of silver', 'valued him whom I have prised', 'potter\'s field', 'the price of him that was valued'],
    terms: [
      { term: 'thirty pieces of silver', original: 'שְׁלֹשִׁים כָּסֶף', translit: 'sheloshim kesef', gloss: 'thirty of silver (shekels)', note: 'The legal price of a gored slave (Exod 21:32); Judas negotiated exactly this sum (Matt 26:15).' },
    ],
  },
  'num-21-8': {
    title: 'The Fiery Serpent upon a Pole',
    principle:
      '“Make thee a fiery serpent, and set it upon a pole: and it shall come to pass, that every one that is bitten, when he looketh upon it, shall live.” The cure matched the plague. What had killed them became the means of life once it was lifted up. First principle: God saves by looking — faith fastened on the object he provides.',
    sourceKeywords: ['fiery serpent', 'set it upon a pole', 'when he looketh upon it, shall live', 'much people of Israel died'],
    fulfillmentKeywords: ['as Moses lifted up the serpent', 'even so must the Son of man be lifted up', 'whosoever believeth', 'I, if I be lifted up'],
    terms: [
      { term: 'pole', original: 'נֵס', translit: 'nes', gloss: 'banner, standard, elevated signal', note: 'The Hebrew word nes is the same word for the pole God told Moses to set the serpent on. Nations gather to it as an ensign in Isa 11:10. Jesus uses hupsothen — lifted up — of His cross (John 3:14).' },
    ],
  },
  'deu-21-23': {
    title: 'Cursed Is Every One That Hangeth on a Tree',
    principle:
      'His body shall not remain all night upon the tree... for he that is hanged is accursed of God. Paul reads the gallows-law as gospel: Christ hath redeemed us from the curse of the law, being made a curse for us. First principle: the Messiah takes the covenant curse onto Himself so the blessing of Abraham can flow to all nations.',
    sourceKeywords: ['his body shall not remain all night', 'he that is hanged is accursed of God', 'thy land which the LORD thy God giveth thee'],
    fulfillmentKeywords: ['being made a curse for us', 'hanged on a tree', 'the blessing of Abraham', 'receive the promise of the Spirit'],
    terms: [
      { term: 'accursed', original: 'קִלְלַת', translit: 'qilllat', gloss: 'curse of God', note: 'Galatians 3:13 quotes the verse verbatim — the pillars of Galatians rest on a Deuteronomy gallows-law.' },
    ],
  },
  'gen-49-11': {
    title: 'Binding His Foal unto the Vine',
    principle:
      'Binding his foal unto the vine, and his ass\'s colt unto the choice vine; he washed his garments in wine, and his clothes in the blood of grapes. Judah\'s blessing pictures a King so prosperous that the vine serves as his hitching post — and a colt-led procession enters Jerusalem. First principle: the lowly mount and the overflowing wine belong to the same King.',
    sourceKeywords: ['Binding his foal unto the vine', 'ass\'s colt unto the choice vine', 'washed his garments in wine', 'blood of grapes'],
    fulfillmentKeywords: ['find an ass tied', 'loose them, and bring them', 'Hosanna', 'I am the true vine'],
    terms: [
      { term: 'foal', original: 'עִיר', translit: '\'ir', gloss: 'young donkey, colt', note: 'Targum Onkelos reads the passage of King Messiah; the colt of Bethany fulfills it to the letter (Mark 11:2-7).' },
    ],
  },
  'zec-9-9': {
    title: 'Thy King Cometh, Lowly, Riding upon an Ass',
    principle:
      '“Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass.” The world-conquering King arrives unarmed and humble — justice and salvation, not cavalry. First principle: the King wins by meekness.',
    who: 'Authorship & Context: The prophet Zechariah wrote in post-exilic Jerusalem (c. 520–480 BC) to a remnant rebuilding temple and hope under Persian rule. Identified Characters: Daughter of Zion / daughter of Jerusalem (the covenant people); the coming King who is just, having salvation, lowly, riding on a donkey. Singular or Many: Singular King, many hearers. The royal subject is one person — Zion\'s King — while the daughters of Zion and Jerusalem are the many commanded to rejoice. Christological Subject & Referent: Jesus of Nazareth, the lowly messianic King who entered Jerusalem on a colt in the week of His passion. Redemptive Purpose: To show that world-conquering justice arrives unarmed; salvation comes by the humble King, not by cavalry.',
    whoByRef: {
      'Matthew 21:5': 'Authorship & Context: Zechariah prophesied to the Persian-era remnant; Matthew wrote for Jewish-Christian readers (c. AD 60–68) to prove Jesus fulfills Israel\'s Scriptures. Identified Characters: Daughter of Zion; the King sitting on a donkey and a colt; the disciples fetching the animals; the Jerusalem crowds. Singular or Many: Singular King, many witnesses. One King comes; many in Zion are commanded to behold Him. Christological Subject & Referent: Jesus, the Son of David, entering Jerusalem as the prophesied meek King. Redemptive Purpose: Matthew cites the prophet so the church sees the triumphal entry as Scripture kept, not political accident.',
      'John 12:15': 'Authorship & Context: Zechariah wrote the Zion-oracle; John, eyewitness of the entry, wrote from Ephesus (c. AD 85–95). Identified Characters: Daughter of Sion; the King sitting on an ass\'s colt; the crowd that had been with Him from Lazarus\'s raising. Singular or Many: Singular King, many who need not fear. John\'s citation adds “Fear not” — one King, a people told not to be afraid. Christological Subject & Referent: Jesus, whose humble advent is comfort rather than terror. Redemptive Purpose: To interpret the donkey-entry as consolation for Zion, not as a failed revolt.',
      'Mark 11:7': 'Authorship & Context: Zechariah named the lowly mount; John Mark, writing in Rome (c. AD 55–65), records the acted detail without the citation formula. Identified Characters: Jesus; the colt; those who cast garments on it; the two disciples sent to loose it. Singular or Many: Singular rider, many who serve. One man sits on the colt; several hands prepare the mount. Christological Subject & Referent: Jesus Himself sitting on the colt — the prophecy\'s “riding” made visible. Redemptive Purpose: Mark shows the oracle happening in the street before any later interpretive caption, so the King\'s lowliness is historical, not literary.',
      'Luke 19:38': 'Authorship & Context: Zechariah promised Zion\'s King; Luke the Evangelist (c. AD 60–62) records the crowd\'s royal acclamation as Jesus descends the Mount of Olives. Identified Characters: The King; the multitude of disciples; peace in heaven and glory in the highest. Singular or Many: Singular King, many acclaiming. One is named King; the multitude blesses Him. Christological Subject & Referent: Jesus as ὁ βασιλεύς — the King who comes in the name of the Lord. Redemptive Purpose: Luke lets the people say out loud what Zechariah already wrote: this humble rider is Zion\'s King, and His coming is peace, not cavalry conquest.',
    },
    cumulativePrinciples: [
      'The thread begins at Zechariah 9:9: The world-conquering King arrives unarmed and humble — justice and salvation, not cavalry. Zion is told to rejoice because her King comes riding on a donkey.',
      'Step 2 of the thread (Zechariah 9:9 → Matthew 21:5): Both verses share the daughter of Zion, a King who comes, and a donkey. The link: Matthew’s own words — “this was done that it might be fulfilled” — tie the prophecy to the colt at Bethphage. Why God says it twice: the King’s greatness is His meekness, and the church must not rewrite Him as a war-horse Messiah.',
      'Step 3 (Zechariah 9:9 → Matthew 21:5 → John 12:15): Two Gospel writers quote the same oracle on their own. John adds “Fear not, daughter of Sion.” All three carry one King, one mount, and one city told to behold Him. How the story moves forward: from prophecy, to Matthew’s fulfillment citation, to John’s word of comfort. Where it leads: the humble King is good news for Zion, not a threat.',
      'Step 4 (Zechariah 9:9 → Matthew 21:5 → John 12:15 → Mark 11:7): Mark does not quote Zechariah — he simply shows the colt and sets Jesus on it. The whole chain makes one point: the King actually rides. Why this step matters: the citation and the street-level story agree. Where the thread ends: the lowly mount is the manner of His coming, not decoration.',
      'Step 5 (Zechariah 9:9 → Matthew 21:5 → John 12:15 → Mark 11:7 → Luke 19:38): Luke records the crowd’s cry, “Blessed be the King.” The whole chain makes one point: Zechariah’s King is just, saving, and lowly, and four Gospels show Him entering Jerusalem that way. Why this step matters: royal praise and donkey-lowliness are one event. Where the thread ends: the King of the passion week is already Zechariah’s King — salvation arrives without a war-horse.',
    ],
    sourceKeywords: ['Rejoice greatly, O daughter of Zion', 'thy King cometh unto thee', 'just, and having salvation', 'riding upon an ass'],
    fulfillmentKeywords: ['All this was done', 'Daughter of Sion', 'sitting upon an ass', 'Hosanna to the Son of David'],
    terms: [
      {
        term: 'lowly',
        original: 'עָנִי',
        translit: '\'ani',
        gloss: 'afflicted, humble, poor',
        note: 'The same word describes the Suffering Servant led as a lamb to slaughter — humility is the King\'s uniform.',
        strongs: 'H6041',
        exposition:
          'Zechariah 9:9 calls the coming King עָנִי — not merely “modest in personality” but poor, afflicted, and low in station. The same root describes those crushed under oppression and, in Isaiah, the Servant who is afflicted. Verse 10 immediately cuts off chariot, horse, and battle-bow, so עָנִי is the opposite of military pomp: Zion\'s King comes as a sufferer-savior. Matthew renders the term πραΰς (praus, meek) in 21:5, placing the oracle on Jesus\' lips-by-action as He sits on the donkey. In this thread עָנִי is why the Gospels insist on the colt: the King’s identity is lowliness unto salvation, not cavalry.',
      },
      {
        term: 'meek',
        original: 'πραΰς',
        translit: 'praus',
        gloss: 'meek, gentle',
        note: 'Matthew 21:5\'s Greek for Zechariah\'s ʿani.',
        strongs: 'G4239',
        exposition:
          'Matthew 21:5 quotes Zechariah with πραΰς καὶ ἐπιβεβηκὼς ἐπὶ ὄνον — meek and mounted on a donkey. πραΰς is Matthew\'s word for the same King who said “I am meek and lowly in heart” (Matt 11:29). In the entry narrative it is not a private temperament; it is the public manner of messianic arrival. John 12:15 cites the same oracle as consolation (“Fear not”); Mark 11:7 and Luke 19:38 show the mount and the royal cry. The Greek meekness and the Hebrew ʿani name one person: Jesus riding into Jerusalem to suffer, not to seize the city by force.',
      },
      {
        term: 'colt',
        original: 'πῶλος',
        translit: 'pōlos',
        gloss: 'colt, young animal',
        note: 'Mark 11:7: they set Jesus on the colt.',
        strongs: 'G4454',
        exposition:
          'Mark 11:7 records καὶ ἐκάθισεν ἐπ’ αὐτόν — they bring the πῶλος and He sits on it. Zechariah had specified עַיִר בֶּן־אֲתֹנוֹת (a colt, son of she-asses). Mark does not quote the prophet; he narrates the colt so the acted fulfillment is visible. Luke 19:38 then lets the crowd name the rider King. In this path πῶλος is the physical hinge between oracle and acclamation: without the colt, “lowly” stays an adjective; with it, the King of Zechariah 9:9 is in the street.',
      },
    ],
  },
  'psa-118-26': {
    title: 'Blessed Is He That Cometh in the Name of the LORD',
    principle:
      'Save now, I beseech thee: O LORD, I beseech thee, send now prosperity. Blessed be he that cometh in the name of the LORD. The Hallel psalm sung at every feast became the street acclamation when the King rode into Jerusalem. First principle: the psalms of Israel put the words of welcome on the lips of the people before the King appears.',
    sourceKeywords: ['Save now, I beseech thee', 'Blessed be he that cometh in the name of the LORD', 'the stone which the builders refused', 'bind the sacrifice with cords'],
    fulfillmentKeywords: ['Hosanna', 'Blessed is he that cometh', 'in the name of the Lord', 'the whole multitude of the disciples'],
    terms: [
      { term: 'Save now', original: 'הוֹשִׁיעָה נָּא', translit: 'hoshi\'ah na', gloss: 'save, we pray, now!', note: 'Hebrew hoshi\'ah na is exactly what the crowds shouted — Hosanna (Matt 21:9; John 12:13).' },
    ],
  },
  'psa-31-5': {
    title: 'Into Thine Hand I Commend My Spirit',
    principle:
      'Into thine hand I commend my spirit: thou hast redeemed me, O LORD God of truth. The evening prayer of trusting surrender becomes the dying word of the Christ. First principle: the righteous commit spirit, times, and enemies into God\'s hand — and redemption is confessed at the moment of release.',
    sourceKeywords: ['Into thine hand I commend my spirit', 'thou hast redeemed me', 'O LORD God of truth', 'I have hated them that regard lying vanities'],
    fulfillmentKeywords: ['Father, into thy hands I commend my spirit', 'gave up the ghost', 'Lord Jesus, receive my spirit'],
    terms: [
      { term: 'I commend', original: 'פָּקַדְתִּי', translit: 'paqadti', gloss: 'I entrust, commit for safekeeping', note: 'Stephen dies with the same entrusting on his lips (Acts 7:59) — the prayer became a Christian death-song.' },
    ],
  },
  'psa-35-11': {
    title: 'False Witnesses Did Rise Up',
    principle:
      'False witnesses did rise up; they laid to my charge things that I knew not. They rewarded me evil for good to the spoiling of my soul. The righteous sufferer is tried by perjury. First principle: when truth is on trial, God Himself is the advocate — and the innocence of the Sufferer is the point of the charge being false.',
    sourceKeywords: ['False witnesses did rise up', 'laid to my charge things that I knew not', 'rewarded me evil for good', 'Lord, how long wilt thou look on'],
    fulfillmentKeywords: ['sought false witness', 'found none', 'two false witnesses', 'This fellow said, I am able'],
    terms: [
      { term: 'false witnesses', original: 'עֵדֵי חָמָס', translit: '\'edei khamas', gloss: 'witnesses of violence, malicious testimony', note: 'The Sanhedrin sought such testimony against Jesus, and the law required two agreeing witnesses (Matt 26:59-61).' },
    ],
  },
  'psa-69-4': {
    title: 'They Hate Me Without a Cause; Zeal Eats Me Up',
    principle:
      'They that hate me without a cause are more than the hairs of mine head... For the zeal of thine house hath eaten me up; and the reproaches of them that reproached thee are fallen upon me. First principle: the Sufferer is hated innocently and consumed devotionally — both halves fulfilled by Christ, in the temple courts and at the cross.',
    sourceKeywords: ['hate me without a cause', 'more than the hairs of mine head', 'zeal of thine house hath eaten me up', 'reproaches of them that reproached thee'],
    fulfillmentKeywords: ['without a cause', 'that the scripture might be fulfilled', 'The zeal of thine house hath eaten me up', 'reproaches of them fell on me'],
    terms: [
      { term: 'without a cause', original: 'חִנָּם', translit: 'khinnam', gloss: 'gratis, for nothing, causelessly', note: 'Jesus uses the identical word of the world\'s hatred of Himself and the Father (John 15:24-25).' },
    ],
  },
  'psa-109-25': {
    title: 'They Shake Their Heads at Me',
    principle:
      'I became also a reproach unto them: when they looked upon me they shaked their heads. The scorned sufferer becomes a byword among mockers. First principle: ridicule is a predicted instrument of the Passion — even the gesture of the head is scripted before Golgotha.',
    sourceKeywords: ['I became also a reproach', 'when they looked upon me', 'shaked their heads', 'I am poor and needy'],
    fulfillmentKeywords: ['they that passed by reviled him', 'wagging their heads', 'He saved others; himself he cannot save'],
    terms: [
      { term: 'shaked their heads', original: 'יְנִידוּ רֹאשׁ', translit: 'yenidu rosh', gloss: 'wagged, moved to and fro the head', note: 'Matthew uses the same gesture of the passers-by at the cross (Matt 27:39) — mockery with a Hebrew posture.' },
    ],
  },
  'zec-13-1': {
    title: 'A Fountain Opened for Sin and Uncleanness',
    principle:
      'In that day there shall be a fountain opened to the house of David and to the inhabitants of Jerusalem for sin and for uncleanness. The same prophecy that names the pierced Shepherd names this fountain. First principle: cleansing comes from an opened wound — blood and water testify together.',
    sourceKeywords: ['a fountain opened', 'house of David', 'for sin and for uncleanness', 'the idols shall utterly pass away'],
    fulfillmentKeywords: ['blood and water came out', 'cleanse us from all sin', 'washed their robes', 'fountain of the water of life'],
    terms: [
      { term: 'fountain', original: 'מָקוֹר', translit: 'maqor', gloss: 'spring, fountain, source', note: 'John 19:34 places the opening at the pierced side; 1 John 1:7 names the blood that keeps cleansing.' },
    ],
  },
  'psa-16-10': {
    title: 'Thou Wilt Not Leave My Soul in Hell',
    principle:
      'I have set the LORD always before me... Therefore my heart is glad, and my glory rejoiceth: my flesh also shall rest in hope. For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption. First principle: the Holy One passes through the grave without decay — Peter and Paul both preach the resurrection from this verse.',
    sourceKeywords: ['my flesh also shall rest in hope', 'not leave my soul in hell', 'neither wilt thou suffer', 'thine Holy One to see corruption'],
    fulfillmentKeywords: ['his soul was not left in hell', 'his flesh did see corruption', 'This Jesus hath God raised up', 'he whom God raised again saw no corruption'],
    terms: [
      { term: 'hell', original: 'שְׁאוֹל', translit: 'she\'ol', gloss: 'the grave, realm of the dead', note: 'Acts 2:31 renders it hades and insists David\'s tomb still holds him while Christ\'s does not.' },
    ],
  },
  'psa-24-7': {
    title: 'Lift Up Your Heads, O Ye Gates',
    principle:
      'Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in. Who is this King of glory? The LORD strong and mighty. The victory procession of a warrior-King entering His citadel. First principle: after the battle comes the triumphal entry — heaven\'s gates open for the victorious Christ.',
    sourceKeywords: ['Lift up your heads, O ye gates', 'everlasting doors', 'King of glory shall come in', 'LORD strong and mighty'],
    fulfillmentKeywords: ['ascended up on high', 'led captivity captive', 'sat down on the right hand', 'Worthy is the Lamb'],
    terms: [
      { term: 'King of glory', original: 'מֶלֶךְ הַכָּבוֹד', translit: 'melekh hakavod', gloss: 'King of glory, weightiness of splendor', note: 'Rabbinic sources (Shemoth Rabba) apply the psalm to Messiah; the entry is His heavenly reception, not an earthly parade.' },
    ],
  },
  'psa-68-18': {
    title: 'Thou Hast Ascended on High, Led Captivity Captive',
    principle:
      'Thou hast ascended on high, thou hast led captivity captive: thou hast received gifts for men; yea, for the rebellious also, that the LORD God might dwell among them. The conquest parade climbs to the sanctuary and showers the conquered with gifts. First principle: Christ\'s ascension is a victory procession in which the spoils — the Spirit and offices — are given to rebels made friends.',
    sourceKeywords: ['ascended on high', 'led captivity captive', 'received gifts for men', 'that the LORD God might dwell among them'],
    fulfillmentKeywords: ['when he ascended up on high', 'gave gifts unto men', 'having received of the Father', 'shed forth this, which ye now see'],
    terms: [
      { term: 'ascended on high', original: 'עָלִיתָ מָרוֹם', translit: '\'alita marom', gloss: 'you have gone up to the height', note: 'Ephesians 4:8-11 quotes the verse and names the gifts: apostles, prophets, evangelists, pastors, teachers.' },
    ],
  },
  'psa-118-22': {
    title: 'The Stone the Builders Refused Is Head of the Corner',
    principle:
      'The stone which the builders refused is become the head stone of the corner. This is the LORD\'s doing; it is marvellous in our eyes. Rejection by the professionals becomes God\'s appointment. First principle: exaltation follows rejection — the crucified One is the foundation of all God\'s building.',
    sourceKeywords: ['stone which the builders refused', 'head stone of the corner', 'This is the LORD\'s doing', 'marvellous in our eyes'],
    fulfillmentKeywords: ['the stone which the builders rejected', 'is become the head of the corner', 'marvellous in our eyes', 'no other name'],
    terms: [
      { term: 'head of the corner', original: 'רֹאשׁ פִּנָּה', translit: 'rosh pinnah', gloss: 'head of the corner, capstone/cornerstone', note: 'Jesus quotes it against the chief priests (Matt 21:42); Peter preaches it before the Sanhedrin (Acts 4:11).' },
    ],
  },
  'jon-1-17': {
    title: 'Three Days and Three Nights in the Fish\'s Belly',
    principle:
      'Now the LORD had prepared a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights. A divinely appointed descent and rescue — Jonah himself prays it: thou hadst cast me into the deep... yet hast thou brought up my life from corruption. First principle: God signs the resurrection with a type before He performs it in His Son.',
    sourceKeywords: ['prepared a great fish', 'swallow up Jonah', 'three days and three nights', 'brought up my life from corruption'],
    fulfillmentKeywords: ['as Jonas was three days', 'in the whale\'s belly', 'so shall the Son of man be', 'the sign of the prophet Jonas'],
    terms: [
      { term: 'three days and three nights', original: 'שְׁלֹשָׁה יָמִים וּשְׁלֹשָׁה לֵילוֹת', translit: 'sheloshah yamim usheloshah lelot', gloss: 'three days and three nights — a complete entombment', note: 'Jesus names this the only sign given to an evil generation (Matt 12:39-40).' },
    ],
  },
  'hos-6-2': {
    title: 'In the Third Day He Will Raise Us Up',
    principle:
      'After two days will he revive us: in the third day he will raise us up, and we shall live in his sight. Israel\'s national revival is couched in resurrection rhythm. First principle: the third day is God\'s appointed turning point — and the early church confessed it as according to the scriptures.',
    sourceKeywords: ['After two days will he revive us', 'in the third day he will raise us up', 'we shall live in his sight', 'as the latter and former rain'],
    fulfillmentKeywords: ['rose again the third day', 'according to the scriptures', 'be killed, and after three days rise again', 'the third day rise again'],
    terms: [
      { term: 'revive', original: 'יְחַיֵּנוּ', translit: 'yehayyenu', gloss: 'he will make us alive', note: 'The intensive stem of khayah — to give life — the verb of resurrection hope long before the empty tomb.' },
    ],
  },
  'psa-110-1': {
    title: 'The LORD Said unto My Lord, Sit Thou at My Right Hand',
    principle:
      'The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool. David calls his descendant my Lord — a Son greater than David. First principle: the Messiah is enthroned at God\'s right hand as both King and Priest (after Melchizedek), while enemies become a footstool in time.',
    sourceKeywords: ['The LORD said unto my Lord', 'Sit thou at my right hand', 'enemies thy footstool', 'a priest for ever after the order of Melchizedek'],
    fulfillmentKeywords: ['David himself saith... The LORD said', 'sat down on the right hand of God', 'from henceforth expecting', 'sat down at his own right hand'],
    terms: [
      { term: 'my Lord', original: 'לַאדֹנִי', translit: 'la\'adhoni', gloss: 'to my Lord (Adonai)', note: 'Jesus builds His whole argument on this single word (Matt 22:44-45): How then is he his son?' },
    ],
  },
  'zec-6-12': {
    title: 'The Man Whose Name Is the BRANCH — Priest on His Throne',
    principle:
      'Behold the man whose name is The BRANCH; and he shall grow up out of his place, and he shall build the temple of the LORD... and he shall bear the glory, and shall sit and rule upon his throne; and he shall be a priest upon his throne. First principle: in one Person the offices split since Saul and Uzziah reunite — King and Priest crowned together, the counsel of peace between them both.',
    sourceKeywords: ['Behold the man whose name is The BRANCH', 'build the temple of the LORD', 'bear the glory', 'a priest upon his throne'],
    fulfillmentKeywords: ['Apostle and High Priest', 'builded the house', 'sat down on the right hand of the Majesty', 'we have such an high priest'],
    terms: [
      { term: 'the counsel of peace', original: 'עֲצַת שָׁלוֹם', translit: '\'atzat shalom', gloss: 'counsel of peace, harmonious design', note: 'Hebrews crowns the two offices in one: our High Priest sits — a Priest upon a throne (Heb 8:1).' },
    ],
  },
  '1sa-2-10': {
    title: 'He Shall Exalt the Horn of His Anointed',
    principle:
      'The adversaries of the LORD shall be broken to pieces; out of heaven shall he thunder upon them... and he shall give strength unto his king, and exalt the horn of his anointed. Hannah\'s song closes with the first occurrence of Mashiach in Scripture — centuries before a king exists in Israel. First principle: the anointed King is a promise before He is a person on a throne; broken adversaries and exalted strength converge on Christ.',
    sourceKeywords: ['adversaries of the LORD broken to pieces', 'thunder upon them', 'give strength unto his king', 'horn of his anointed'],
    fulfillmentKeywords: ['horn of his salvation', 'raised up an horn of salvation', 'of the house of David', 'a Saviour, Jesus'],
    terms: [
      { term: 'his anointed', original: 'מְשִׁיחוֹ', translit: 'meshikho', gloss: 'his anointed one (Mashiach)', note: 'First Scripture use of the title Messiah; Mary and Zacharias echo Hannah\'s song almost clause for clause (Luke 1-2).' },
    ],
  },
  'psa-2-1': {
    title: 'Why Do the Heathen Rage Against the Anointed?',
    principle:
      'Why do the heathen rage, and the people imagine a vain thing? The kings of the earth set themselves, and the rulers take counsel together, against the LORD, and against his anointed... Yet have I set my king upon my holy hill of Zion. First principle: human conspiracy against God is real but doomed; the decree stands — Thou art my Son; this day have I begotten thee.',
    sourceKeywords: ['heathen rage', 'people imagine a vain thing', 'against his anointed', 'Thou art my Son; this day have I begotten thee'],
    fulfillmentKeywords: ['with one accord', 'against his holy child Jesus', 'Thou art my Son', 'this day have I begotten thee'],
    terms: [
      { term: 'rage', original: 'רָגַשׁ', translit: 'ragash', gloss: 'to throng, assemble tumultuously', note: 'The Jerusalem church quotes the psalm as fulfilled in Herod, Pilate, and the nations against Jesus (Acts 4:25-27).' },
    ],
  },
  'psa-8-4': {
    title: 'Made a Little Lower Than the Angels, Crowned with Glory',
    principle:
      'What is man, that thou art mindful of him? and the son of man, that thou visitest him? For thou hast made him a little lower than the angels, and hast crowned him with glory and honour. First principle: humanity\'s intended dominion, lost by Adam, is seen fulfilled in Jesus — made lower for a little while, now crowned, all things under His feet.',
    sourceKeywords: ['What is man, that thou art mindful of him', 'son of man', 'a little lower than the angels', 'crowned him with glory and honour'],
    fulfillmentKeywords: ['we see Jesus', 'made a little lower than the angels', 'crowned with glory and honour', 'hast put all things in subjection'],
    terms: [
      { term: 'a little lower', original: 'מְעַט', translit: 'me\'at', gloss: 'a little, briefly, for a little while', note: 'Hebrews 2:9 reads both dimensions: lacking-by-a-little in rank and for-a-little-while in time — the incarnation and the cross in one word.' },
    ],
  },
  'psa-89-27': {
    title: 'My Firstborn, Higher Than the Kings of the Earth',
    principle:
      'Also I will make him my firstborn, higher than the kings of the earth. My covenant will I not break, nor alter the thing that is gone out of my lips. David\'s seed is divinely adopted into firstborn rank. First principle: the oath to David is unbreakable; the firstborn is preeminent — heir of everything, King above every king.',
    sourceKeywords: ['I will make him my firstborn', 'higher than the kings of the earth', 'my covenant will I not break', 'his seed also will I make to endure'],
    fulfillmentKeywords: ['firstborn of every creature', 'firstborn from the dead', 'prince of the kings of the earth', 'faithful and true witness'],
    terms: [
      { term: 'firstborn', original: 'בְּכוֹר', translit: 'bekhor', gloss: 'firstborn — rank and heirship, not origin', note: 'Paul and John apply the rank to Christ (Col 1:18; Rev 1:5): preeminence, not a beginning.' },
    ],
  },
  'psa-132-11': {
    title: 'Of the Fruit of Thy Body Will I Set upon Thy Throne',
    principle:
      'The LORD hath sworn in truth unto David; he will not turn from it; Of the fruit of thy body will I set upon thy throne. The ark\'s journey to Zion recalls the oath that outlives the exile. First principle: God swears what He will not revoke — a physical descendant reigns, and Peter preached the oath fulfilled in the resurrection (Acts 2:30-31).',
    sourceKeywords: ['The LORD hath sworn in truth unto David', 'he will not turn from it', 'fruit of thy body', 'set upon thy throne'],
    fulfillmentKeywords: ['he being a prophet', 'God had sworn with an oath', 'of the fruit of his loins', 'raise up unto Israel a Saviour'],
    terms: [
      { term: 'hath sworn', original: 'נִשְׁבַּע', translit: 'nishba\'', gloss: 'has sworn an oath', note: 'Paul\'s word in Acts 13:23: of this man\'s seed hath God according to his promise raised unto Israel a Saviour, Jesus.' },
    ],
  },
  'isa-28-16': {
    title: 'I Lay in Zion a Tried, Precious Corner Stone',
    principle:
      'Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste. God lays the stone; unbelief stumbles over it. First principle: the same Stone saves the believing and shatters the disbelieving — there is no neutral contact with Christ.',
    sourceKeywords: ['I lay in Zion for a foundation', 'a tried stone', 'a precious corner stone', 'he that believeth shall not make haste'],
    fulfillmentKeywords: ['living stone', 'disallowed of men', 'chosen of God and precious', 'a rock of offence'],
    terms: [
      { term: 'shall not make haste', original: 'לֹא יָחִישׁ', translit: 'lo\' yakhish', gloss: 'shall not hasten, panic, flee', note: 'Paul fuses this verse with Isaiah 8:14: whosoever believeth on him shall not be ashamed (Rom 9:33).' },
    ],
  },
  'ezk-34-23': {
    title: 'One Shepherd: My Servant David over the Flock',
    principle:
      'And I will set up one shepherd over them, and he shall feed them, even my servant David; he shall feed them, and he shall be their shepherd. Spoken against the failed shepherds of Israel who fed themselves. First principle: God answers negligent leadership with a single faithful Shepherd of David\'s line — and the flock is known by name.',
    sourceKeywords: ['set up one shepherd', 'my servant David', 'he shall feed them', 'I the LORD will be their God'],
    fulfillmentKeywords: ['I am the good shepherd', 'lay down my life for the sheep', 'other sheep I have', 'great shepherd of the sheep'],
    terms: [
      { term: 'feed', original: 'וּרְעָם', translit: 'ur\'am', gloss: 'and he shall shepherd them', note: 'The verb ra\'ah means both to shepherd and to associate with; Jesus claims the verse in John 10:11-16 and Hebrews 13:20 crowns it.' },
    ],
  },
  'isa-25-8': {
    title: 'He Will Swallow Up Death in Victory',
    principle:
      'He will swallow up death in victory; and the Lord GOD will wipe away tears from off all faces; and the rebuke of his people shall he take away from off all the earth. First principle: death is not managed or postponed but swallowed — devoured by a stronger destiny, and grief itself is ended by God\'s own hand.',
    sourceKeywords: ['swallow up death in victory', 'wipe away tears from off all faces', 'rebuke of his people', 'Lo, this is our God'],
    fulfillmentKeywords: ['Death is swallowed up in victory', 'O death, where is thy sting', 'no more death', 'God shall wipe away all tears'],
    terms: [
      { term: 'swallow up', original: 'בִּלַּע', translit: 'billa\'', gloss: 'to swallow, engulf completely', note: 'Paul quotes the verse at the mystery of the last trump (1 Cor 15:54); John shows the tear-wiping in the New Jerusalem (Rev 21:4).' },
    ],
  },
  'mal-4-2': {
    title: 'The Sun of Righteousness with Healing in His Wings',
    principle:
      'But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall. For the wicked the day burns; for the fearing it dawns. First principle: the same coming is noon-darkness to one and sunrise to the other — the dividing line is the fear of His name.',
    sourceKeywords: ['unto you that fear my name', 'Sun of righteousness', 'healing in his wings', 'go forth, and grow up as calves of the stall'],
    fulfillmentKeywords: ['dayspring from on high', 'the day so cometh', 'morning star', 'healing to all'],
    terms: [
      { term: 'wings', original: 'כְּנָפַיִם', translit: 'kenafayim', gloss: 'wings, extremities, corners of a garment', note: 'The woman who touched the border (kenaf) of His garment was healed — the sunrise ray from the hem of the Sun (Luke 8:43-48).' },
    ],
  },
  'isa-59-20': {
    title: 'The Redeemer Shall Come to Zion',
    principle:
      'And the Redeemer shall come to Zion, and unto them that turn from transgression in Jacob, saith the LORD. The context is dark — no intercessor, truth fallen in the street — so God\'s own arm brings salvation. First principle: deliverance arrives when human mediation fails; the Kinsman-Redeemer comes to those who turn from transgression.',
    sourceKeywords: ['the Redeemer shall come to Zion', 'turn from transgression in Jacob', 'my spirit that is upon thee', 'my words which I have put in thy mouth'],
    fulfillmentKeywords: ['all Israel shall be saved', 'shall come out of Sion the Deliverer', 'fulness of the Gentiles', 'fullness of time'],
    terms: [
      { term: 'Redeemer', original: 'גּוֹאֵל', translit: 'go\'el', gloss: 'kinsman-redeemer, restorer of inheritance', note: 'Paul quotes the verse of the Deliverer out of Zion (Rom 11:26) — the go\'el duty applied to Israel\'s salvation.' },
    ],
  },
  'isa-63-1': {
    title: 'Treading the Winepress Alone — Mighty to Save',
    principle:
      'Who is this that cometh from Edom, with dyed garments from Bozrah? this that is glorious in his apparel, travelling in the greatness of his strength? I that speak in righteousness, mighty to save... I have trodden the winepress alone; and of the people there was none with me. First principle: the day of vengeance is a work God performs unassisted — the Warrior\'s garments are dyed by treading, and none shares the press.',
    sourceKeywords: ['cometh from Edom', 'dyed garments from Bozrah', 'mighty to save', 'I have trodden the winepress alone'],
    fulfillmentKeywords: ['clothed with a vesture dipped in blood', 'his name is called The Word of God', 'treadeth the winepress', 'KING OF KINGS, AND LORD OF LORDS'],
    terms: [
      { term: 'winepress', original: 'פּוּרָה', translit: 'purah', gloss: 'wine-vat, press where grapes are trodden', note: 'Revelation 19:15 adopts the image verbatim for the returning Word of God — the treader of Isa 63 stands in the clouds of Rev 19.' },
    ],
  },
  'amo-9-11': {
    title: 'I Will Raise Up the Tabernacle of David That Is Fallen',
    principle:
      'In that day will I raise up the tabernacle of David that is fallen, and close up the breaches thereof... that they may possess the remnant of Edom, and of all the heathen, which are called by my name. First principle: the dynasty reduced to a collapsed hut is rebuilt by God — and the rebuilt house is wide enough for the heathen to seek the LORD.',
    sourceKeywords: ['raise up the tabernacle of David', 'close up the breaches', 'remnant of Edom', 'all the heathen, which are called by my name'],
    fulfillmentKeywords: ['James answered', 'to this agree the words of the prophets', 'God at the first did visit the Gentiles', 'known unto God are all his works'],
    terms: [
      { term: 'tabernacle', original: 'סֻכַּת', translit: 'sukkat', gloss: 'booth, hut, shelter of branches', note: 'James cites Amos at the Jerusalem council as the prophetic warrant for Gentile inclusion (Acts 15:16-17).' },
    ],
  },
  'zec-14-4': {
    title: 'His Feet Shall Stand upon the Mount of Olives',
    principle:
      'And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east... and the mount of Olives shall cleave in the midst thereof. The LORD becomes King over all the earth, and His name one. First principle: the place of the ascension is the place of return — the Olivet descent of Acts 1 completes the Zechariah schedule.',
    sourceKeywords: ['his feet shall stand', 'mount of Olives', 'the LORD my God shall come', 'the LORD shall be king over all the earth'],
    fulfillmentKeywords: ['this same Jesus', 'come in like manner', 'as ye have seen him go', 'behold, he cometh with clouds'],
    terms: [
      { term: 'shall cleave', original: 'וְנִבְקַע', translit: 'venivqa\'', gloss: 'shall be split, rift open', note: 'The angels point the disciples back to this very mount (Acts 1:11-12) — geography pinned to eschatology.' },
    ],
  },
  // ── Hand-written expansion: John ────────────────────────────────────────
  'joh-1-1': {
    title: 'In the Beginning Was the Word',
    principle:
      'The Word was with God, and the Word was God; without him was not any thing made that was made. First principle: the Christ at the center of every thread is the divine Creator, so promise-and-fulfillment runs from the Author of Genesis to the flesh He took on.',
    sourceKeywords: ['the Word was God', 'with God', 'was made by him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-1-3': {
    title: 'All Things Were Made by Him',
    principle:
      'Without Him was not any thing made that was made. First principle: the Agent of creation is the same Son who redeems — Colossians joins the two: by Him were all things created, and by His blood we have redemption.',
    sourceKeywords: ['All things were made by him', 'not any thing made'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-1-29': {
    title: 'Behold the Lamb of God',
    principle:
      'John names Jesus the Lamb of God, which taketh away the sin of the world. First principle: the whole sacrificial system — Passover lamb, daily lamb, Isaiah 53\'s silent lamb — converges on this one Man.',
    sourceKeywords: ['Lamb of God', 'taketh away the sin', 'the world'],
    fulfillmentKeywords: ['lamb without blemish', 'Christ our passover'],
    terms: [],
  },
  'joh-1-45': {
    title: 'We Have Found Him of Whom Moses Wrote',
    principle:
      'Philip tells Nathanael that Jesus of Nazareth is Him of whom Moses in the law and the prophets did write. First principle: the Old Testament is a written expectation that the apostles claim is met in one Person.',
    sourceKeywords: ['found him', 'Moses in the law', 'Jesus of Nazareth'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-2-17': {
    title: 'The Zeal of Thine House Hath Eaten Me Up',
    principle:
      'At the temple cleansing the disciples remember Psalm 69:9. First principle: Christ\'s consuming devotion to His Father\'s house was prophecy in motion — and the reproaches of God fell on Him.',
    sourceKeywords: ['zeal of thine house', 'hath eaten me up', 'it was written'],
    fulfillmentKeywords: ['zeal of thine house', 'reproaches of them'],
    terms: [],
  },
  'joh-3-16': {
    title: 'For God So Loved the World',
    principle:
      'God gave His only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. First principle: the gospel in one verse — divine love expressed as a gift, faith as the receiving hand, eternal life as the result.',
    sourceKeywords: ['God so loved the world', 'only begotten Son', 'everlasting life', 'believeth in him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-6-45': {
    title: 'They Shall Be All Taught of God',
    principle:
      'Jesus quotes Isaiah\'s promise that all shall be taught of God: every one that hath heard and learned of the Father cometh unto me. First principle: coming to Christ is the Father\'s own teaching fulfilled.',
    sourceKeywords: ['It is written in the prophets', 'taught of God', 'cometh unto me'],
    fulfillmentKeywords: ['all thy children shall be taught of the LORD'],
    terms: [],
  },
  'joh-10-11': {
    title: 'I Am the Good Shepherd',
    principle:
      'The good shepherd giveth his life for the sheep. First principle: Ezekiel 34\'s promise that God Himself would shepherd His scattered flock is answered by Christ laying down His life.',
    sourceKeywords: ['good shepherd', 'giveth his life', 'for the sheep'],
    fulfillmentKeywords: ['one shepherd', 'my servant David', 'feed them'],
    terms: [],
  },
  'joh-10-34': {
    title: 'I Said, Ye Are Gods',
    principle:
      'Jesus defends His unity with the Father from Psalm 82\'s Ye are gods — lesser judges called gods in the law. First principle: if Scripture could so name men, how could it be blasphemy for the Sent One to say I am the Son of God?',
    sourceKeywords: ['Is it not written in your law', 'Ye are gods', 'scripture cannot be broken'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-12-15': {
    title: 'Thy King Cometh, Sitting on an Ass\'s Colt',
    principle:
      'John quotes Zechariah 9:9 at the triumphal entry: Fear not, daughter of Sion. First principle: the King arrives in humility exactly as written — the colt is the credential.',
    sourceKeywords: ['daughter of Sion', 'thy King cometh', 'ass\'s colt'],
    fulfillmentKeywords: ['riding upon an ass', 'lowly', 'having salvation'],
    terms: [],
  },
  'joh-12-38': {
    title: 'Who Hath Believed Our Report?',
    principle:
      'John ties Israel\'s unbelief to Isaiah 53:1 — Lord, who hath believed our report? First principle: rejection of Christ was itself foretold; even unbelief fulfills the arm-of-the-LORD prophecy.',
    sourceKeywords: ['Esaias the prophet', 'who hath believed our report', 'the arm of the Lord'],
    fulfillmentKeywords: ['who hath believed our report', 'to whom is the arm revealed'],
    terms: [],
  },
  'joh-12-40': {
    title: 'He Hath Blinded Their Eyes',
    principle:
      'Judicial hardening: Isaiah 6 saw this day — eyes that will not see, hearts that will not be converted. First principle: persistent refusal becomes settled blindness; the rejected Light finally seals the choice.',
    sourceKeywords: ['blinded their eyes', 'hardened their heart', 'be converted', 'I should heal them'],
    fulfillmentKeywords: ['hear indeed, but understand not', 'make the heart fat'],
    terms: [],
  },
  'joh-13-18': {
    title: 'He That Eateth Bread with Me Hath Lifted Up His Heel',
    principle:
      'At the Last Supper Jesus applies Psalm 41:9 to His betrayer. First principle: treachery at the table was scripted centuries ahead — nothing in the Passion was improvised.',
    sourceKeywords: ['the scripture may be fulfilled', 'eateth bread with me', 'lifted up his heel'],
    fulfillmentKeywords: ['mine own familiar friend', 'in whom I trusted'],
    terms: [],
  },
  'joh-15-25': {
    title: 'They Hated Me Without a Cause',
    principle:
      'The world\'s causeless hatred of Christ fulfills Psalm 69:4. First principle: the sinlessness of the Sufferer is proved by the causelessness of the hatred — hatred without charge, foretold in their own law.',
    sourceKeywords: ['the word might be fulfilled', 'hated me without a cause', 'their law'],
    fulfillmentKeywords: ['hate me without a cause', 'more than the hairs'],
    terms: [],
  },
  'joh-17-12': {
    title: 'None of Them Is Lost, but the Son of Perdition',
    principle:
      'Christ kept all the Father gave Him except Judas — that the scripture might be fulfilled. First principle: preserving grace is personal and complete; even the apostasy inside the Twelve served written prophecy.',
    sourceKeywords: ['none of them is lost', 'son of perdition', 'the scripture might be fulfilled'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-19-24': {
    title: 'They Cast Lots for My Vesture',
    principle:
      'The soldiers gamble for the seamless coat — Psalm 22:18 to the letter. First principle: prophecy runs to the smallest detail of the cross, down to a dice game at the foot of it.',
    sourceKeywords: ['cast lots', 'that the scripture might be fulfilled', 'parted my raiment'],
    fulfillmentKeywords: ['parted my raiment', 'did cast lots'],
    terms: [],
  },
  'joh-19-28': {
    title: 'I Thirst',
    principle:
      'Knowing all things were now accomplished, Jesus says I thirst — that scripture might be fulfilled. First principle: even the thirst of the cross was written; He asks, receives vinegar, and finishes.',
    sourceKeywords: ['all things were now accomplished', 'the scripture might be fulfilled', 'I thirst'],
    fulfillmentKeywords: ['in my thirst', 'vinegar to drink'],
    terms: [],
  },
  'joh-19-36': {
    title: 'A Bone of Him Shall Not Be Broken',
    principle:
      'The soldiers break the thieves\' legs but not Christ\'s — Exodus 12:46 and Psalm 34:20 fulfilled. First principle: the Passover Lamb dies whole; God preserves the integrity of His sacrifice.',
    sourceKeywords: ['that the scripture should be fulfilled', 'A bone of him shall not be broken'],
    fulfillmentKeywords: ['not one of them is broken', 'neither shall ye break a bone'],
    terms: [],
  },
  'joh-19-37': {
    title: 'They Shall Look on Him Whom They Pierced',
    principle:
      'John cites Zechariah 12:10 of the spear-thrust. First principle: the pierced One is the LORD Himself in the prophecy — and one day every eye shall look on Him and mourn.',
    sourceKeywords: ['another scripture saith', 'look on him whom they pierced'],
    fulfillmentKeywords: ['they shall look upon me', 'whom they have pierced', 'mourn for him'],
    terms: [],
  },
  'joh-20-9': {
    title: 'He Must Rise Again from the Dead',
    principle:
      'The empty tomb stuns the disciples because as yet they knew not the scripture that He must rise. First principle: the third day was written — Psalm 16, Hosea 6, Jonah — before anyone believed it.',
    sourceKeywords: ['knew not the scripture', 'must rise again from the dead'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Luke ────────────────────────────────────────
  'luk-1-32': {
    title: 'The Throne of His Father David',
    principle:
      'Gabriel announces the Son of the Highest receiving David\'s throne. First principle: Gabriel fuses 2 Samuel 7 and Isaiah 9 into one announcement — the covenant Son is both God\'s Son and David\'s heir.',
    sourceKeywords: ['Son of the Highest', 'throne of his father David'],
    fulfillmentKeywords: ['thy throne shall be established', 'unto us a child is born'],
    terms: [],
  },
  'luk-1-33': {
    title: 'Of His Kingdom There Shall Be No End',
    principle:
      'He shall reign over the house of Jacob for ever. First principle: the Davidic kingdom, cut down like a stump, grows into an everlasting dominion in the Son of Mary.',
    sourceKeywords: ['reign over the house of Jacob', 'no end'],
    fulfillmentKeywords: ['he shall reign for ever', 'increase of his government'],
    terms: [],
  },
  'luk-1-69': {
    title: 'An Horn of Salvation in the House of David',
    principle:
      'Zacharias blesses God for raising up an horn of salvation in the house of his servant David. First principle: Hannah\'s horn of His anointed and the Davidic covenant meet in the newborn Christ.',
    sourceKeywords: ['horn of salvation', 'house of his servant David'],
    fulfillmentKeywords: ['exalt the horn of his anointed', 'strength unto his king'],
    terms: [],
  },
  'luk-1-76': {
    title: 'The Prophet of the Highest Preparing His Ways',
    principle:
      'Zacharias names his son the prophet of the Highest, going before the Lord to prepare His ways. First principle: Malachi\'s messenger stands in the birth narrative — John is written prophecy made a crying infant.',
    sourceKeywords: ['prophet of the Highest', 'go before the face of the Lord', 'prepare his ways'],
    fulfillmentKeywords: ['I send my messenger', 'before thee'],
    terms: [],
  },
  'luk-2-23': {
    title: 'Every Male That Openeth the Womb',
    principle:
      'The presentation obeys the law of the LORD: Every male that openeth the womb shall be called holy. First principle: the Redeemer lives under the law He gave — Exodus 13\'s claim on the firstborn kept to the letter in His own presentation.',
    sourceKeywords: ['As it is written in the law', 'openeth the womb', 'holy to the Lord'],
    fulfillmentKeywords: ['Sanctify unto me all the firstborn'],
    terms: [],
  },
  'luk-2-32': {
    title: 'A Light to Lighten the Gentiles',
    principle:
      'Simeon holds the infant and quotes Isaiah: a light to lighten the Gentiles, and the glory of thy people Israel. First principle: salvation prepared before the face of all people is now carried in two arms.',
    sourceKeywords: ['A light to lighten the Gentiles', 'glory of thy people Israel'],
    fulfillmentKeywords: ['a light of the Gentiles', 'my salvation'],
    terms: [],
  },
  'luk-3-4': {
    title: 'The Voice Crying in the Wilderness',
    principle:
      'Luke quotes Isaiah 40:3 over John\'s ministry: make his paths straight. First principle: the forerunner is literature before he is a man — the wilderness voice written seven centuries earlier.',
    sourceKeywords: ['Esaias the prophet', 'voice of one crying in the wilderness', 'make his paths straight'],
    fulfillmentKeywords: ['prepare ye the way of the LORD', 'every valley shall be exalted'],
    terms: [],
  },
  'luk-4-4': {
    title: 'Man Shall Not Live by Bread Alone',
    principle:
      'Christ answers the tempter from Deuteronomy: man lives by every word of God. First principle: Israel failed in the wilderness; the true Israel wins there by the written Word.',
    sourceKeywords: ['It is written', 'not live by bread alone', 'every word of God'],
    fulfillmentKeywords: ['by every word that proceedeth out of the mouth'],
    terms: [],
  },
  'luk-4-8': {
    title: 'Thou Shalt Worship the Lord Thy God Only',
    principle:
      'The kingdoms of the world are refused with Deuteronomy 6:13. First principle: worship is God\'s alone — Christ will take the kingdoms, but by the cross, never by the devil\'s shortcut.',
    sourceKeywords: ['Get thee behind me, Satan', 'worship the Lord thy God', 'him only shalt thou serve'],
    fulfillmentKeywords: ['thou shalt fear the LORD thy God', 'serve him'],
    terms: [],
  },
  'luk-4-12': {
    title: 'Thou Shalt Not Tempt the Lord Thy God',
    principle:
      'The third wilderness test — throw Yourself down — is refused with Deuteronomy 6:16. First principle: the Messiah will not manufacture proof of Sonship; Israel tested God at Massah, and the true Israel would not.',
    sourceKeywords: ['It is said', 'Thou shalt not tempt the Lord thy God'],
    fulfillmentKeywords: ['Ye shall not tempt the LORD your God', 'as ye tempted him in Massah'],
    terms: [],
  },
  'luk-4-18': {
    title: 'The Spirit of the Lord Is upon Me',
    principle:
      'In Nazareth Jesus reads Isaiah 61 and sits down: This day is this scripture fulfilled. First principle: the clearest self-declared fulfillment in Scripture — anointing, gospel, healing, liberty, all in one sentence.',
    sourceKeywords: ['The Spirit of the Lord is upon me', 'anointed me to preach the gospel', 'liberty them that are bruised'],
    fulfillmentKeywords: ['anointed me to preach good tidings', 'proclaim liberty to the captives'],
    terms: [],
  },
  'luk-4-21': {
    title: 'This Day Is This Scripture Fulfilled',
    principle:
      'The eyes of all in the synagogue are fastened on Him as He closes the book. First principle: fulfillment is not merely coming — it stands in the room, today.',
    sourceKeywords: ['This day is this scripture fulfilled', 'in your ears'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-7-27': {
    title: 'I Send My Messenger Before Thy Face',
    principle:
      'Jesus tells John\'s disciples who He is by deeds, then tells the crowd who John is — Malachi 3:1\'s messenger. First principle: the forerunner\'s identity certifies the identity of the One preceded.',
    sourceKeywords: ['of whom it is written', 'I send my messenger', 'prepare thy way before thee'],
    fulfillmentKeywords: ['the messenger of the covenant', 'suddenly come to his temple'],
    terms: [],
  },
  'luk-8-10': {
    title: 'Unto You It Is Given to Know the Mysteries',
    principle:
      'Parables both reveal and conceal — Isaiah 6\'s judicial blindness fulfilled. First principle: the same word softens the willing and hardens the unwilling; the difference is the heart that hears.',
    sourceKeywords: ['mysteries of the kingdom of God', 'seeing they might not see'],
    fulfillmentKeywords: ['hear indeed, but understand not', 'make the heart fat'],
    terms: [],
  },
  'luk-18-8': {
    title: 'Shall He Find Faith on the Earth?',
    principle:
      'God will avenge His elect speedily — yet the Son of man asks whether faith will remain. First principle: the end-time question is not whether God will act, but whether anyone is still praying when He does.',
    sourceKeywords: ['avenge them speedily', 'the Son of man cometh', 'find faith'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-18-31': {
    title: 'All Things Written Concerning the Son of Man',
    principle:
      'Going up to Jerusalem, Jesus says everything written by the prophets concerning the Son of man shall be accomplished — betrayal, mock, scourge, death, resurrection. First principle: the Passion week is the most predicted week in history.',
    sourceKeywords: ['written by the prophets', 'shall be accomplished', 'Son of man'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-20-17': {
    title: 'The Stone Which the Builders Rejected',
    principle:
      'Jesus quotes Psalm 118 against the chief priests. First principle: the rejected Stone becomes the head of the corner — rejection is the very road to exaltation.',
    sourceKeywords: ['that is written', 'the builders rejected', 'head of the corner'],
    fulfillmentKeywords: ['the stone which the builders refused'],
    terms: [],
  },
  'luk-20-42': {
    title: 'The LORD Said unto My Lord',
    principle:
      'David in the Psalms calls his descendant Lord. First principle: Psalm 110 leaves the scribes speechless — the Christ is greater than David, Son yet Sovereign.',
    sourceKeywords: ['David himself saith', 'The LORD said unto my Lord', 'Sit thou on my right hand'],
    fulfillmentKeywords: ['The LORD said unto my Lord', 'Sit thou at my right hand'],
    terms: [],
  },
  'luk-21-24': {
    title: 'Jerusalem Trodden Down Until the Times of the Gentiles',
    principle:
      'Destruction, captivity, and a bounded timespan: until the times of the Gentiles be fulfilled. First principle: prophecy gives even Jerusalem\'s humiliation an expiration date.',
    sourceKeywords: ['led away captive', 'trodden down of the Gentiles', 'times of the Gentiles'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-21-27': {
    title: 'The Son of Man Coming in a Cloud with Power',
    principle:
      'After distress of nations, the Sign appears: the Son of man coming in a cloud with power and great glory. First principle: Daniel 7\'s Son of man receives the kingdom publicly at the end — redemption draweth nigh.',
    sourceKeywords: ['Son of man coming in a cloud', 'power and great glory', 'redemption draweth nigh'],
    fulfillmentKeywords: ['one like the Son of man came with the clouds'],
    terms: [],
  },
  'luk-22-37': {
    title: 'He Was Reckoned Among the Transgressors',
    principle:
      'Isaiah 53:12 must be accomplished in Me, says Jesus — numbered with criminals, yet ending the law\'s regime. First principle: Christ dies among the guilty as Scripture said, and the things concerning me have an end.',
    sourceKeywords: ['this that is written', 'reckoned among the transgressors', 'have an end'],
    fulfillmentKeywords: ['numbered with the transgressors', 'bare the sin of many'],
    terms: [],
  },
  'luk-24-26': {
    title: 'Ought Not Christ to Have Suffered These Things?',
    principle:
      'The risen Christ teaches that suffering was the required road to glory. First principle: the cross was not an accident of politics but an ought of prophecy.',
    sourceKeywords: ['Ought not Christ to have suffered', 'enter into his glory'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-24-27': {
    title: 'Beginning at Moses He Expounded Concerning Himself',
    principle:
      'From Moses through all the prophets, Christ expounds the things concerning Himself. First principle: the whole Old Testament is Christological — He is its subject, not its appendix.',
    sourceKeywords: ['beginning at Moses', 'all the prophets', 'the things concerning himself'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-24-44': {
    title: 'Law, Prophets, and Psalms Concerning Me',
    principle:
      'The risen Lord divides the whole canon — the law of Moses, the prophets, and the psalms — as written concerning Him. First principle: every section of the Old Testament carries the thread of Christ.',
    sourceKeywords: ['all things must be fulfilled', 'law of Moses', 'psalms, concerning me'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-24-46': {
    title: 'Thus It Behoved Christ to Suffer and to Rise',
    principle:
      'Thus it is written: suffer, rise the third day, and repentance and remission preached among all nations. First principle: the gospel pattern — death, resurrection, worldwide preaching — is itself the fulfillment of Scripture.',
    sourceKeywords: ['Thus it is written', 'to suffer, and to rise', 'the third day'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Mark ────────────────────────────────────────
  'mrk-1-2': {
    title: 'As It Is Written in the Prophets',
    principle:
      'Mark opens his gospel by quoting the promise of the messenger — Behold, I send my messenger before thy face. First principle: the good news begins with a prophecy kept.',
    sourceKeywords: ['As it is written in the prophets', 'my messenger', 'prepare thy way'],
    fulfillmentKeywords: ['Behold, I will send my messenger'],
    terms: [],
  },
  'mrk-1-3': {
    title: 'Prepare Ye the Way of the Lord',
    principle:
      'Isaiah 40:3 is John\'s job description in the wilderness. First principle: the way prepared is the way of the LORD Himself — John baptizes the God whose road he levels.',
    sourceKeywords: ['voice of one crying in the wilderness', 'Prepare ye the way of the Lord'],
    fulfillmentKeywords: ['prepare ye the way of the LORD'],
    terms: [],
  },
  'mrk-1-11': {
    title: 'Thou Art My Beloved Son',
    principle:
      'The voice from heaven at the Jordan joins Psalm 2 and Isaiah 42: Thou art my beloved Son, in whom I am well pleased. First principle: the baptism is a coronation — the anointed Son presented by the Father\'s own word.',
    sourceKeywords: ['a voice from heaven', 'Thou art my beloved Son', 'well pleased'],
    fulfillmentKeywords: ['Thou art my Son', 'Behold my servant'],
    terms: [],
  },
  'mrk-1-15': {
    title: 'The Time Is Fulfilled',
    principle:
      'Jesus preaches: The time is fulfilled, and the kingdom of God is at hand. First principle: Daniel\'s clock has run out — prophecy is not merely written, it has arrived, and the answer is repent and believe.',
    sourceKeywords: ['The time is fulfilled', 'kingdom of God is at hand', 'repent ye, and believe'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mrk-2-7': {
    title: 'Who Can Forgive Sins but God Only?',
    principle:
      'The scribes ask the right question about the wrong Man. First principle: the forgiveness Christ speaks is a divine prerogative — the healing proves the authority is real.',
    sourceKeywords: ['speak blasphemies', 'forgive sins but God only'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mrk-2-27': {
    title: 'The Sabbath Was Made for Man',
    principle:
      'The Sabbath was made for man, and not man for the sabbath: therefore the Son of man is Lord also of it. First principle: the rest-day is a gift from creation week, and its Lord was there when it was made.',
    sourceKeywords: ['The sabbath was made for man', 'Lord also of the sabbath'],
    fulfillmentKeywords: ['he rested on the seventh day', 'blessed the sabbath day'],
    terms: [],
  },
  'mrk-7-6': {
    title: 'This People Honoureth Me with Their Lips',
    principle:
      'Jesus applies Isaiah 29 to the tradition-keepers: lips near, heart far. First principle: worship by ordinance while the heart is absent is the prophecy of vain religion, fulfilled in every generation.',
    sourceKeywords: ['Well hath Esaias prophesied', 'honoureth me with their lips', 'heart is far from me'],
    fulfillmentKeywords: ['draw near with their mouth', 'their fear toward me is taught'],
    terms: [],
  },
  'mrk-7-10': {
    title: 'Moses Said, Honour Thy Father and Mother',
    principle:
      'Tradition that voids the fifth commandment meets the written law. First principle: the Word of God stands over custom — honour and care for parents is not negotiable by corban.',
    sourceKeywords: ['For Moses said', 'Honour thy father and thy mother', 'let him die the death'],
    fulfillmentKeywords: ['Honour thy father and thy mother'],
    terms: [],
  },
  'mrk-9-12': {
    title: 'Elias Cometh First — and the Son of Man Must Suffer',
    principle:
      'Jesus holds two Scriptures together: Elijah restores first, and the Son of man suffers and is set at nought. First principle: glory and suffering are both written; the disciples kept only the glory part.',
    sourceKeywords: ['Elias verily cometh first', 'restoreth all things', 'he must suffer many things'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mrk-12-10': {
    title: 'Have Ye Not Read This Scripture?',
    principle:
      'Psalm 118\'s rejected Stone is quoted in the temple courts. First principle: the leaders holding the building reject the cornerstone — and God builds on the Stone they refuse.',
    sourceKeywords: ['Have ye not read this scripture', 'rejected is become the head of the corner'],
    fulfillmentKeywords: ['the stone which the builders refused'],
    terms: [],
  },
  'mrk-12-29': {
    title: 'Hear, O Israel; The Lord Our God Is One Lord',
    principle:
      'Asked for the first commandment, Jesus recites the Shema. First principle: undivided love for the one God — heart, soul, mind, strength — is the summary of all law, fulfilled in Christ\'s own devotion.',
    sourceKeywords: ['The first of all the commandments', 'The Lord our God is one Lord'],
    fulfillmentKeywords: ['Hear, O Israel'],
    terms: [],
  },
  'mrk-12-36': {
    title: 'David Said by the Holy Ghost',
    principle:
      'Psalm 110 is David\'s Spirit-inspired words about his Lord enthroned till enemies become a footstool. First principle: the Spirit authored prophecy — and it names David\'s Son as David\'s Lord.',
    sourceKeywords: ['David himself said by the Holy Ghost', 'The LORD said to my Lord', 'footstool'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'until I make thine enemies'],
    terms: [],
  },
  'mrk-13-14': {
    title: 'The Abomination of Desolation Spoken by Daniel',
    principle:
      'Jesus points readers back to Daniel for the standing desecration in the holy place — then commands flight. First principle: Daniel 8–12 is Jesus\' own reference library for the end; read it before you need it.',
    sourceKeywords: ['abomination of desolation', 'spoken of by Daniel', 'flee to the mountains'],
    fulfillmentKeywords: ['take away the daily sacrifice', 'abomination that maketh desolate'],
    terms: [],
  },
  'mrk-13-26': {
    title: 'Coming in the Clouds with Great Power and Glory',
    principle:
      'The Son of man appears as Daniel 7 saw Him — in the clouds with power and great glory, gathering His elect. First principle: the second coming is Daniel 7 with the sky torn open.',
    sourceKeywords: ['see the Son of man coming in the clouds', 'great power and glory'],
    fulfillmentKeywords: ['one like the Son of man', 'came with the clouds of heaven'],
    terms: [],
  },
  'mrk-14-27': {
    title: 'I Will Smite the Shepherd',
    principle:
      'On the way to Gethsemane Jesus quotes Zechariah 13:7 — smite the shepherd, and the sheep scatter. First principle: even the disciples\' panic was in the script; the smitten Shepherd is the LORD\'s own Fellow.',
    sourceKeywords: ['All ye shall be offended', 'it is written', 'smite the shepherd', 'sheep shall be scattered'],
    fulfillmentKeywords: ['smite the shepherd', 'the sheep shall be scattered'],
    terms: [],
  },
  'mrk-15-34': {
    title: 'My God, My God, Why Hast Thou Forsaken Me?',
    principle:
      'The ninth-hour cry opens Psalm 22 on the cross. First principle: the forsakenness is real and foretold — the righteous Sufferer bears abandonment so the forsaken need never be alone.',
    sourceKeywords: ['ninth hour', 'Eloi, Eloi, lama sabachthani', 'why hast thou forsaken me'],
    fulfillmentKeywords: ['My God, my God, why hast thou forsaken me'],
    terms: [],
  },

  // ── Hand-written expansion: Acts ────────────────────────────────────────
  'act-1-8': {
    title: 'Witnesses unto the Uttermost Part of the Earth',
    principle:
      'Power from the Holy Ghost sends witnesses from Jerusalem to the ends of the earth. First principle: Isaiah 49\'s salvation-to-the-ends becomes the church\'s marching order — the Spirit is the engine of prophecy.',
    sourceKeywords: ['receive power', 'the Holy Ghost is come upon you', 'uttermost part of the earth'],
    fulfillmentKeywords: ['my salvation unto the end of the earth'],
    terms: [],
  },
  'act-1-11': {
    title: 'This Same Jesus Shall So Come',
    principle:
      'The angels fix the ascension as the pattern of return: this same Jesus shall so come in like manner. First principle: the clouds that received Him are the clouds that will bring Him — Zechariah 14\'s Olivet schedule holds.',
    sourceKeywords: ['shall so come in like manner', 'taken up from you into heaven', 'men of Galilee'],
    fulfillmentKeywords: ['his feet shall stand', 'upon the mount of Olives'],
    terms: [],
  },
  'act-1-16': {
    title: 'This Scripture Must Needs Have Been Fulfilled',
    principle:
      'Peter reads Judas\'s betrayal from David\'s own words. First principle: even treachery inside the Twelve moved along rails Scripture had already laid.',
    sourceKeywords: ['this scripture must needs have been fulfilled', 'by the mouth of David', 'concerning Judas'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'act-1-20': {
    title: 'His Bishoprick Let Another Take',
    principle:
      'Psalm 69 and 109 govern the choice of a twelfth witness — habitation desolate, another takes his office. First principle: the apostles resolve even church order by written prophecy.',
    sourceKeywords: ['it is written in the book of Psalms', 'let his habitation be desolate', 'let another take'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'act-2-17': {
    title: 'I Will Pour Out of My Spirit in the Last Days',
    principle:
      'Peter opens Joel 2 at Pentecost: sons and daughters prophesy, young men see visions. First principle: the last days begin at the cross and the Spirit — the prophecy Peter quotes is still running.',
    sourceKeywords: ['in the last days', 'pour out of my Spirit upon all flesh', 'dream dreams'],
    fulfillmentKeywords: ['I will pour out my spirit upon all flesh', 'prophesy'],
    terms: [],
  },
  'act-2-34': {
    title: 'David Is Not Ascended — but He Said',
    principle:
      'Peter argues from Psalm 110: David did not ascend, yet spoke of enthronement — fulfilled in Jesus. First principle: the prophecy outruns its author; the Lord at God\'s right hand is David\'s Son.',
    sourceKeywords: ['David is not ascended', 'The LORD said unto my Lord', 'Sit thou on my right hand'],
    fulfillmentKeywords: ['Sit thou at my right hand'],
    terms: [],
  },
  'act-3-18': {
    title: 'What God Before Had Shewed by the Prophets',
    principle:
      'The sufferings of Christ were shewn by all the prophets beforehand — and God hath so fulfilled them. First principle: the cross is God\'s foretold plan, executed on schedule through guilty hands.',
    sourceKeywords: ['God before had shewed', 'that Christ should suffer', 'he hath so fulfilled'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'act-3-25': {
    title: 'In Thy Seed Shall All Kindreds Be Blessed',
    principle:
      'Peter preaches to Israel as children of the covenant — Abraham\'s seed blessing all kindreds. First principle: the gospel to Jerusalem is Genesis 12 arriving on schedule, first to the covenant family.',
    sourceKeywords: ['children of the prophets', 'covenant', 'in thy seed shall all the kindreds'],
    fulfillmentKeywords: ['in thy seed shall all the nations'],
    terms: [],
  },
  'act-4-11': {
    title: 'Set at Nought of You Builders',
    principle:
      'Peter, standing in the Sanhedrin, quotes the Stone psalm against the builders themselves. First principle: salvation is in no other name — the Stone you rejected is the only foundation God laid.',
    sourceKeywords: ['set at nought of you builders', 'head of the corner', 'no other name'],
    fulfillmentKeywords: ['the stone which the builders refused'],
    terms: [],
  },
  'act-4-26': {
    title: 'Against the Lord, and Against His Christ',
    principle:
      'The church prays Psalm 2 over the threats of rulers: kings stood up, rulers gathered — against the Lord and His Christ. First principle: opposition to the gospel is the prophesied rage of kings; the heavens answer with boldness, not retreat.',
    sourceKeywords: ['kings of the earth stood up', 'against his Christ', 'with one accord'],
    fulfillmentKeywords: ['Why do the heathen rage', 'kings of the earth set themselves'],
    terms: [],
  },
  'act-7-3': {
    title: 'Get Thee Out of Thy Country',
    principle:
      'Stephen recounts the call of Abraham: leave kindred, come into the land I shew thee. First principle: the covenant story begins with a departure on promise — faith walks before it sees.',
    sourceKeywords: ['Get thee out of thy country', 'the land which I shall shew thee'],
    fulfillmentKeywords: ['Get thee out of thy country'],
    terms: [],
  },
  'act-7-7': {
    title: 'The Nation Will I Judge — Then Come Forth',
    principle:
      'God tells Abraham of bondage, judgment, and a fourth-generation exodus. First principle: prophecy names the oppression and its end before either exists — and God keeps the calendar.',
    sourceKeywords: ['will I judge', 'after that shall they come forth', 'serve me in this place'],
    fulfillmentKeywords: ['I will judge', 'come out with great substance'],
    terms: [],
  },
  'act-7-32': {
    title: 'I Am the God of Abraham, Isaac, and Jacob',
    principle:
      'At the bush, God names Himself the God of the patriarchs — and Moses trembles. First principle: the covenant God binds Himself to generations; the resurrection hope is folded into His very self-identification.',
    sourceKeywords: ['I am the God of thy fathers', 'God of Abraham', 'Moses trembled'],
    fulfillmentKeywords: ['I am the God of thy father'],
    terms: [],
  },
  'act-7-37': {
    title: 'A Prophet Like unto Me, Him Shall Ye Hear',
    principle:
      'Stephen quotes Deuteronomy 18 and applies it: the Prophet God would raise up has come. First principle: Deuteronomy 18 is a messianic office, and refusing to hear Him is the judgment it warns of.',
    sourceKeywords: ['A prophet shall the Lord your God raise up', 'like unto me', 'him shall ye hear'],
    fulfillmentKeywords: ['I will raise them up a Prophet', 'like unto thee'],
    terms: [],
  },
  'act-7-49': {
    title: 'Heaven Is My Throne, Earth My Footstool',
    principle:
      'Stephen closes with Isaiah 66: the Most High dwells not in temples made with hands. First principle: God cannot be housed — the accusation against the temple is that its makers trusted the building, not the Presence.',
    sourceKeywords: ['Heaven is my throne', 'earth is my footstool', 'what house will ye build me'],
    fulfillmentKeywords: ['heaven is my throne', 'the earth is my footstool'],
    terms: [],
  },
  'act-7-50': {
    title: 'Hath Not My Hand Made All These Things?',
    principle:
      'The Maker of all needs no house of stone. First principle: creation precedes temple; the God whose hand made everything cannot be contained by anything His hand has made.',
    sourceKeywords: ['Hath not my hand made', 'all these things'],
    fulfillmentKeywords: ['my hand made all these things'],
    terms: [],
  },
  'act-8-32': {
    title: 'Led as a Sheep to the Slaughter',
    principle:
      'The Ethiopian eunuch reads Isaiah 53; Philip preaches Jesus from that very text. First principle: Isaiah 53 is the key that opens the Old Testament — and Philip uses it for personal evangelism.',
    sourceKeywords: ['The place of the scripture', 'led as a sheep to the slaughter', 'opened he not his mouth'],
    fulfillmentKeywords: ['he is brought as a lamb', 'dumb before his shearers'],
    terms: [],
  },
  'act-10-43': {
    title: 'To Him Give All the Prophets Witness',
    principle:
      'Peter\'s summary to Cornelius: all the prophets witness that through Christ\'s name whosoever believeth receives remission of sins. First principle: the prophetic corpus has one subject and one offer — forgiveness through the Name.',
    sourceKeywords: ['all the prophets witness', 'through his name', 'whosoever believeth'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'act-13-33': {
    title: 'Thou Art My Son; This Day Have I Begotten Thee',
    principle:
      'Paul reads Psalm 2 of the resurrection: God fulfilled the promise by raising Jesus. First principle: the resurrection is the enthronement decree — begotten again, as firstborn from the dead.',
    sourceKeywords: ['raised up Jesus again', 'in the second psalm', 'this day have I begotten thee'],
    fulfillmentKeywords: ['Thou art my Son', 'this day have I begotten thee'],
    terms: [],
  },
  'act-13-34': {
    title: 'The Sure Mercies of David',
    principle:
      'Isaiah 55\'s sure mercies are read of the Holy One who sees no corruption. First principle: the covenant mercies promised to David are delivered as an incorruptible, risen Savior.',
    sourceKeywords: ['raised him up from the dead', 'return to corruption', 'sure mercies of David'],
    fulfillmentKeywords: ['I will make an everlasting covenant', 'sure mercies of David'],
    terms: [],
  },
  'act-13-47': {
    title: 'I Have Set Thee to Be a Light of the Gentiles',
    principle:
      'Paul and Barnabas quote Isaiah 49 as their commission to turn to the Gentiles. First principle: the Servant\'s worldwide salvation is carried forward by His witnesses — ordained for eternal life, not an afterthought.',
    sourceKeywords: ['the Lord hath commanded us', 'a light of the Gentiles', 'salvation unto the ends of the earth'],
    fulfillmentKeywords: ['a light to the Gentiles', 'end of the earth'],
    terms: [],
  },
  'act-15-16': {
    title: 'I Will Build Again the Tabernacle of David',
    principle:
      'James settles the Gentile question with Amos: God returns and rebuilds David\'s fallen booth so the residue of men may seek the Lord. First principle: Gentile inclusion is not a plan B — it is the rebuilt tabernacle, prophesied.',
    sourceKeywords: ['After this I will return', 'tabernacle of David, which is fallen down', 'I will set it up'],
    fulfillmentKeywords: ['raise up the tabernacle of David'],
    terms: [],
  },
  'act-17-31': {
    title: 'He Will Judge the World by That Man Whom He Hath Ordained',
    principle:
      'God has fixed a day and a Judge, giving assurance to all by raising Him from the dead. First principle: the resurrection is the receipt of future judgment — the ordained Man will judge in righteousness.',
    sourceKeywords: ['appointed a day', 'judge the world in righteousness', 'he hath raised him from the dead'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'act-28-26': {
    title: 'Hearing Ye Shall Hear, and Shall Not Understand',
    principle:
      'Paul closes Acts with Isaiah 6 over the Jews in Rome: hearing, not perceiving — and turns to the Gentiles, who will hear. First principle: the book that opened with Israel ends with the light going to the nations, exactly as written.',
    sourceKeywords: ['Go unto this people', 'Hearing ye shall hear', 'not perceive'],
    fulfillmentKeywords: ['hear indeed, and understand not', 'see ye indeed, but perceive not'],
    terms: [],
  },
  // ── Hand-written expansion: Matthew ─────────────────────────────────────
  'mat-1-1': {
    title: 'The Son of David, the Son of Abraham',
    principle:
      'Matthew\'s first line indexes the whole book: Jesus Christ is David\'s royal heir and Abraham\'s promised Seed. First principle: the two great covenant threads — kingship and worldwide blessing — open the genealogy.',
    sourceKeywords: ['generation of Jesus Christ', 'son of David', 'son of Abraham'],
    fulfillmentKeywords: ['thy seed', 'I will establish the throne'],
    terms: [],
  },
  'mat-2-2': {
    title: 'Where Is He That Is Born King of the Jews?',
    principle:
      'Magi follow His star from the east to worship the newborn King. First principle: Balaam\'s Star out of Jacob and Isaiah\'s nations coming to His light begin their fulfillment with Gentile pilgrims and a celestial sign.',
    sourceKeywords: ['born King of the Jews', 'seen his star in the east', 'worship him'],
    fulfillmentKeywords: ['a Star out of Jacob', 'nations shall come to thy light'],
    terms: [],
  },
  'mat-2-15': {
    title: 'Out of Egypt Have I Called My Son',
    principle:
      'The flight and return fulfill Hosea 11:1. First principle: Israel\'s history is prophetic pattern — the Son relives the nation\'s exodus, embodying what Israel could only foreshadow.',
    sourceKeywords: ['that it might be fulfilled', 'Out of Egypt have I called my son'],
    fulfillmentKeywords: ['called my son out of Egypt'],
    terms: [],
  },
  'mat-2-18': {
    title: 'Rachel Weeping for Her Children',
    principle:
      'Herod\'s massacre fulfills Jeremiah 31:15 at Ramah\'s border. First principle: even the grief of Bethlehem was written — and the same chapter that weeps promises the new covenant.',
    sourceKeywords: ['lamentation, and weeping', 'Rachel weeping for her children', 'would not be comforted'],
    fulfillmentKeywords: ['Rahel weeping for her children', 'refused to be comforted'],
    terms: [],
  },
  'mat-2-23': {
    title: 'He Shall Be Called a Nazarene',
    principle:
      'Settling in Nazareth fulfills the prophets\' pattern of the despised Branch (netser) from humble places. First principle: the Messiah comes from the rejected corner — contempt of Nazareth is itself consonant with prophecy.',
    sourceKeywords: ['dwelt in a city called Nazareth', 'spoken by the prophets', 'a Nazarene'],
    fulfillmentKeywords: ['a Branch grow out of his roots'],
    terms: [],
  },
  'mat-3-3': {
    title: 'The Voice of One Crying in the Wilderness',
    principle:
      'John is Isaiah 40:3 in person — the preparer of the Lord\'s way. First principle: before the King comes, the road is preached; repentance is the leveling of valleys.',
    sourceKeywords: ['spoken of by the prophet Esaias', 'voice of one crying in the wilderness', 'make his paths straight'],
    fulfillmentKeywords: ['prepare ye the way of the LORD'],
    terms: [],
  },
  'mat-3-17': {
    title: 'This Is My Beloved Son',
    principle:
      'The Father\'s voice joins Psalm 2\'s decree to Isaiah 42\'s delight in the Servant. First principle: Son and Servant are one Person — crowned King and gentle Redeemer in a single sentence from heaven.',
    sourceKeywords: ['a voice from heaven', 'This is my beloved Son', 'in whom I am well pleased'],
    fulfillmentKeywords: ['Thou art my Son', 'Behold my servant'],
    terms: [],
  },
  'mat-4-6': {
    title: 'He Shall Give His Angels Charge Concerning Thee',
    principle:
      'Satan quotes Psalm 91 to provoke a leap from the temple. First principle: the devil can quote Scripture — but omits to tempt the Lord thy God; promise twisted becomes presumption.',
    sourceKeywords: ['If thou be the Son of God', 'He shall give his angels charge', 'bear thee up'],
    fulfillmentKeywords: ['he shall give his angels charge over thee'],
    terms: [],
  },
  'mat-4-7': {
    title: 'Thou Shalt Not Tempt the Lord Thy God',
    principle:
      'Jesus answers the second temptation with Deuteronomy 6:16 — It is written again. First principle: Scripture balances Scripture; faith trusts God without forcing Him to prove Himself.',
    sourceKeywords: ['It is written again', 'Thou shalt not tempt the Lord thy God'],
    fulfillmentKeywords: ['Ye shall not tempt the LORD your God'],
    terms: [],
  },
  'mat-4-10': {
    title: 'Thou Shalt Worship the Lord Thy God Only',
    principle:
      'The kingdoms-for-worship trade is refused with Deuteronomy 6:13. First principle: God alone receives worship — Christ wins the kingdoms legally at Calvary instead of illegally at the mountain.',
    sourceKeywords: ['Get thee hence, Satan', 'worship the Lord thy God', 'him only shalt thou serve'],
    fulfillmentKeywords: ['him shalt thou serve'],
    terms: [],
  },
  'mat-4-14': {
    title: 'That It Might Be Fulfilled by Esaias',
    principle:
      'Matthew marks the move to Capernaum as Isaiah 9 underway. First principle: geography is prophecy — where the Light chooses to shine was written before the move.',
    sourceKeywords: ['that it might be fulfilled', 'Esaias the prophet', 'Galilee'],
    fulfillmentKeywords: ['the land of Zebulun', 'way of the sea'],
    terms: [],
  },
  'mat-4-16': {
    title: 'The People Which Sat in Darkness Saw Great Light',
    principle:
      'Isaiah 9:2 fulfilled over Galilee: light sprung up in death\'s shadow. First principle: dawn begins where darkness sat longest — and from that light the kingdom is preached.',
    sourceKeywords: ['sat in darkness', 'saw great light', 'light is sprung up'],
    fulfillmentKeywords: ['the people that walked in darkness', 'seen a great light'],
    terms: [],
  },
  'mat-5-3': {
    title: 'Blessed Are the Poor in Spirit',
    principle:
      'The kingdom of heaven belongs to the spiritually poor. First principle: the Beatitudes are Isaiah 61\'s good-news-to-the-meek restated as covenant blessings — the anointed One now preaches His own charter.',
    sourceKeywords: ['Blessed are the poor in spirit', 'kingdom of heaven'],
    fulfillmentKeywords: ['preach good tidings unto the meek', 'bind up the brokenhearted'],
    terms: [],
  },
  'mat-5-5': {
    title: 'Blessed Are the Meek, for They Inherit the Earth',
    principle:
      'Psalm 37:11 is folded into the Beatitudes verbatim. First principle: the earth is inherited not by grasp but by meekness — the psalm\'s order of the kingdom, kept by the meek King.',
    sourceKeywords: ['Blessed are the meek', 'inherit the earth'],
    fulfillmentKeywords: ['the meek shall inherit the earth', 'delight thyself in the LORD'],
    terms: [],
  },
  'mat-5-8': {
    title: 'Blessed Are the Pure in Heart, for They Shall See God',
    principle:
      'Psalm 24\'s ascent question — who shall ascend into the hill of the LORD? — answered in beatitude form. First principle: the clean hands and pure heart that see God are given, not earned; Christ is the open vision.',
    sourceKeywords: ['Blessed are the pure in heart', 'they shall see God'],
    fulfillmentKeywords: ['pure heart', 'who shall ascend into the hill'],
    terms: [],
  },
  'mat-5-17': {
    title: 'I Am Not Come to Destroy, but to Fulfil',
    principle:
      'The law and prophets stand until all is fulfilled — in Him. First principle: Christ is the law\'s goal, not its opponent; every jot and tittle finds its meaning in His obedience and teaching.',
    sourceKeywords: ['destroy the law, or the prophets', 'but to fulfil', 'one jot or one tittle'],
    fulfillmentKeywords: ['I delight to do thy will', 'the law is in his heart'],
    terms: [],
  },
  'mat-5-21': {
    title: 'Ye Have Heard... Thou Shalt Not Kill',
    principle:
      'The sixth commandment is deepened to include causeless anger. First principle: the law written on stone Christ writes on the heart — obedience becomes a matter of the temper, not merely the act.',
    sourceKeywords: ['said of them of old time', 'Thou shalt not kill', 'without a cause'],
    fulfillmentKeywords: ['Thou shalt not kill'],
    terms: [],
  },
  'mat-5-27': {
    title: 'Thou Shalt Not Commit Adultery',
    principle:
      'The seventh commandment reaches the look of lust. First principle: the covenant law governs the inner man; purity of heart is the truest chastity.',
    sourceKeywords: ['Thou shalt not commit adultery', 'looketh on a woman'],
    fulfillmentKeywords: ['Thou shalt not commit adultery'],
    terms: [],
  },
  'mat-5-33': {
    title: 'Thou Shalt Not Forswear Thyself',
    principle:
      'Oath-law from Leviticus and Numbers is restored to simplicity: yes and no. First principle: truthfulness needs no sworn scaffolding — the law\'s aim is a heart whose word is always true.',
    sourceKeywords: ['Thou shalt not forswear thyself', 'perform unto the Lord thine oaths'],
    fulfillmentKeywords: ['thou shalt not take the name of the LORD in vain'],
    terms: [],
  },
  'mat-5-38': {
    title: 'An Eye for an Eye, and a Tooth for a Tooth',
    principle:
      'The lex talionis was a judge\'s limit on vengeance; Jesus turns the other cheek. First principle: civil justice restrains evil, but the disciple\'s personal rule is grace that absorbs wrong.',
    sourceKeywords: ['An eye for an eye', 'a tooth for a tooth'],
    fulfillmentKeywords: ['eye for an eye', 'life for life'],
    terms: [],
  },
  'mat-5-43': {
    title: 'Love Thy Neighbour — and Hate Thine Enemy',
    principle:
      'Leviticus 19:18 stands; the appended hatred was never written. First principle: the law\'s love was always meant to reach the enemy — love for neighbour is defined by God, not by proximity.',
    sourceKeywords: ['Thou shalt love thy neighbour', 'hate thine enemy'],
    fulfillmentKeywords: ['thou shalt love thy neighbour as thyself'],
    terms: [],
  },
  'mat-8-17': {
    title: 'Himself Took Our Infirmities',
    principle:
      'Healing the sick fulfills Isaiah 53:4 — He bore our sicknesses. First principle: the atonement\'s compassion touches body as well as soul; the Sin-Bearer carries the whole burden of the fall.',
    sourceKeywords: ['that it might be fulfilled', 'took our infirmities', 'bare our sicknesses'],
    fulfillmentKeywords: ['bare our sicknesses', 'carried our sorrows'],
    terms: [],
  },
  'mat-9-13': {
    title: 'I Will Have Mercy, and Not Sacrifice',
    principle:
      'Jesus sends the critics to school with Hosea 6:6. First principle: ritual without mercy misses the law\'s own heart — God\'s priority is covenant love, and He extends it to sinners at table.',
    sourceKeywords: ['go ye and learn what that meaneth', 'I will have mercy, and not sacrifice'],
    fulfillmentKeywords: ['I desired mercy, and not sacrifice', 'knowledge of God more than burnt offerings'],
    terms: [],
  },
  'mat-11-10': {
    title: 'Behold, I Send My Messenger Before Thy Face',
    principle:
      'John is Malachi 3:1\'s messenger, identified by Jesus Himself. First principle: the forerunner prophecy anchors the Messiah\'s arrival in history — two figures, one written plan.',
    sourceKeywords: ['of whom it is written', 'I send my messenger before thy face', 'prepare thy way'],
    fulfillmentKeywords: ['Behold, I will send my messenger'],
    terms: [],
  },
  'mat-12-7': {
    title: 'If Ye Had Known What This Meaneth',
    principle:
      'Mercy over sacrifice, again from Hosea — the guiltless are condemned by ritualists. First principle: Sabbath and sacrament serve mercy; the Lord of the Sabbath defines the weightier matter.',
    sourceKeywords: ['if ye had known what this meaneth', 'I will have mercy, and not sacrifice', 'the guiltless'],
    fulfillmentKeywords: ['I desired mercy, and not sacrifice'],
    terms: [],
  },
  'mat-12-17': {
    title: 'That It Might Be Fulfilled by Esaias the Prophet',
    principle:
      'Matthew quotes the Servant Song as the key to Christ\'s withdrawn, gentle ministry. First principle: Messiah\'s manner — no striving, no breaking bruised reeds — was as prophesied as His miracles.',
    sourceKeywords: ['that it might be fulfilled', 'Esaias the prophet'],
    fulfillmentKeywords: ['Behold my servant', 'a bruised reed shall he not break'],
    terms: [],
  },
  'mat-12-18': {
    title: 'Behold My Servant, Whom I Have Chosen',
    principle:
      'Isaiah 42:1 quoted nearly verbatim: My beloved, in whom My soul is well pleased; He shall shew judgment to the Gentiles. First principle: the Baptism voice and the Servant Song are the same appointment.',
    sourceKeywords: ['Behold my servant, whom I have chosen', 'judgment to the Gentiles', 'well pleased'],
    fulfillmentKeywords: ['Behold my servant, whom I uphold', 'mine elect'],
    terms: [],
  },
  'mat-12-40': {
    title: 'As Jonas Was Three Days and Three Nights',
    principle:
      'The sign of Jonah: entombment and emergence after three days. First principle: the resurrection was given as the standing sign to a doubting generation — and it is still the only sign that matters.',
    sourceKeywords: ['as Jonas was three days', 'in the whale\'s belly', 'so shall the Son of man be'],
    fulfillmentKeywords: ['in the belly of the fish', 'three days and three nights'],
    terms: [],
  },
  'mat-13-14': {
    title: 'In Them Is Fulfilled the Prophecy of Esaias',
    principle:
      'Isaiah 6\'s hardening is fulfilled in parable-hearing Israel. First principle: revelation resisted becomes judicial dullness — hearing without understanding is a judgment, not an accident.',
    sourceKeywords: ['in them is fulfilled', 'By hearing ye shall hear', 'shall not understand'],
    fulfillmentKeywords: ['Go, and tell this people', 'hear ye indeed'],
    terms: [],
  },
  'mat-13-35': {
    title: 'I Will Open My Mouth in Parables',
    principle:
      'Psalm 78\'s Asaph is quoted of Jesus\' parabolic teaching — secrets kept from the foundation of the world now uttered in stories. First principle: the parables are themselves prophecy fulfilled — old words finding final voice.',
    sourceKeywords: ['that it might be fulfilled', 'I will open my mouth in parables', 'kept secret from the foundation'],
    fulfillmentKeywords: ['I will open my mouth in a parable', 'dark sayings of old'],
    terms: [],
  },
  'mat-15-4': {
    title: 'For God Commanded, Honour Thy Father and Mother',
    principle:
      'The fifth commandment is set against corban tradition. First principle: God\'s commandment, not human convention, defines honor — and tradition that cancels it is null.',
    sourceKeywords: ['For God commanded', 'Honour thy father and mother', 'let him die the death'],
    fulfillmentKeywords: ['Honour thy father and thy mother'],
    terms: [],
  },
  'mat-15-8': {
    title: 'This People Draweth Nigh unto Me with Their Mouth',
    principle:
      'Isaiah 29:13 again: lips close, heart far; doctrine taught as the commandments of men. First principle: proximity of vocabulary is not nearness of heart — vain worship can quote Scripture fluently.',
    sourceKeywords: ['draweth nigh unto me with their mouth', 'honoureth me with their lips', 'heart is far from me'],
    fulfillmentKeywords: ['draw near with their mouth', 'removed their heart far from me'],
    terms: [],
  },
  'mat-17-5': {
    title: 'Hear Ye Him',
    principle:
      'On the mount of transfiguration the Father repeats the Baptism formula and adds the Deuteronomic command: hear ye Him. First principle: the Prophet like Moses is present — hear Him above Moses and Elijah themselves.',
    sourceKeywords: ['a voice out of the cloud', 'This is my beloved Son', 'hear ye him'],
    fulfillmentKeywords: ['Unto him ye shall hearken', 'Thou art my Son'],
    terms: [],
  },
  'mat-19-4': {
    title: 'He Which Made Them at the Beginning',
    principle:
      'On divorce, Jesus appeals to creation order — male and female from the beginning. First principle: Genesis is the standing authority for marriage; the Creator\'s original design settles the question.',
    sourceKeywords: ['Have ye not read', 'made them at the beginning', 'male and female'],
    fulfillmentKeywords: ['male and female created he them'],
    terms: [],
  },
  'mat-19-5': {
    title: 'They Twain Shall Be One Flesh',
    principle:
      'Genesis 2:24 is quoted as God\'s own speech about marriage. First principle: the one-flesh bond is a creation ordinance — what God joined, no committee or custom may sever.',
    sourceKeywords: ['leave father and mother', 'one flesh'],
    fulfillmentKeywords: ['they shall be one flesh'],
    terms: [],
  },
  'mat-19-18': {
    title: 'Thou Shalt Do No Murder',
    principle:
      'To the rich young ruler Jesus cites the Decalogue\'s table of love. First principle: the law was never a ladder to heaven but a mirror for the neighbor — and its full weight is love.',
    sourceKeywords: ['Thou shalt do no murder', 'Thou shalt not steal', 'bear false witness'],
    fulfillmentKeywords: ['Thou shalt not kill', 'Thou shalt not steal'],
    terms: [],
  },
  'mat-21-5': {
    title: 'Thy King Cometh unto Thee, Meek',
    principle:
      'Zechariah 9:9 and Isaiah 62:11 are joined at the triumphal entry. First principle: salvation comes riding a donkey — meekness is not the absence of majesty but its manner.',
    sourceKeywords: ['Tell ye the daughter of Sion', 'thy King cometh unto thee', 'sitting upon an ass'],
    fulfillmentKeywords: ['riding upon an ass', 'thy salvation cometh'],
    terms: [],
  },
  'mat-21-13': {
    title: 'My House Shall Be Called the House of Prayer',
    principle:
      'Isaiah 56 for all nations versus Jeremiah 7\'s den of thieves. First principle: the temple\'s purpose is prayer for the nations — commerce that excludes them makes it a robbers\' cave.',
    sourceKeywords: ['It is written', 'house of prayer', 'den of thieves'],
    fulfillmentKeywords: ['house of prayer for all people', 'den of robbers'],
    terms: [],
  },
  'mat-21-16': {
    title: 'Out of the Mouth of Babes and Sucklings',
    principle:
      'Children\'s Hosannas fulfill Psalm 8:2 — perfected praise. First principle: God ordains praise from the least; when critics object, the psalm answers.',
    sourceKeywords: ['Out of the mouth of babes', 'thou hast perfected praise'],
    fulfillmentKeywords: ['out of the mouth of babes', 'hast thou ordained strength'],
    terms: [],
  },
  'mat-21-42': {
    title: 'Did Ye Never Read in the Scriptures?',
    principle:
      'Psalm 118 and Isaiah 28 converge on the rejected Stone. First principle: the kingdom is taken from those who will not build on God\'s Stone and given to a nation bringing forth fruit.',
    sourceKeywords: ['Did ye never read in the scriptures', 'the builders rejected', 'head of the corner'],
    fulfillmentKeywords: ['the stone which the builders refused', 'a sure foundation'],
    terms: [],
  },
  'mat-22-32': {
    title: 'God Is Not the God of the Dead, but of the Living',
    principle:
      'I AM the God of Abraham — covenant grammar implies resurrection. First principle: God\'s relationship to His saints cannot terminate in the grave; the patriarchs live to Him.',
    sourceKeywords: ['I am the God of Abraham', 'not the God of the dead', 'but of the living'],
    fulfillmentKeywords: ['I am the God of thy father', 'I AM THAT I AM'],
    terms: [],
  },
  'mat-22-37': {
    title: 'Thou Shalt Love the Lord Thy God',
    principle:
      'The Shema plus Leviticus 19:18 hang all the law and prophets. First principle: love for God and neighbor is the law distilled — not a replacement of commandments but their heart.',
    sourceKeywords: ['love the Lord thy God', 'all thy heart', 'all the law and the prophets'],
    fulfillmentKeywords: ['thou shalt love the LORD thy God', 'with all thine heart'],
    terms: [],
  },
  'mat-22-44': {
    title: 'The LORD Said unto My Lord',
    principle:
      'Psalm 110 silences the Sadducees and scribes: David\'s Lord sits at God\'s right hand. First principle: Christ\'s lordship over David is the key to His person — Son by birth, Lord by throne.',
    sourceKeywords: ['The LORD said unto my Lord', 'Sit thou on my right hand', 'footstool'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'until I make thine enemies'],
    terms: [],
  },
  'mat-24-15': {
    title: 'The Abomination of Desolation, Spoken of by Daniel',
    principle:
      'Jesus names Daniel as the read-ahead for the temple\'s desolation. First principle: apocalyptic reading is Jesus\' own preparation plan — whoso readeth, let him understand.',
    sourceKeywords: ['abomination of desolation', 'spoken of by Daniel the prophet', 'stand in the holy place'],
    fulfillmentKeywords: ['abomination that maketh desolate', 'take away the daily sacrifice'],
    terms: [],
  },
  'mat-24-21': {
    title: 'Great Tribulation, Such as Was Not Since the Beginning',
    principle:
      'Daniel 12\'s unparalleled time of trouble is quoted for the coming climax. First principle: the tribulation has a named intensity and a named limit — for the elect\'s sake those days are shortened.',
    sourceKeywords: ['great tribulation', 'such as was not since the beginning', 'should be shortened'],
    fulfillmentKeywords: ['a time of trouble', 'such as never was since there was a nation'],
    terms: [],
  },
  'mat-24-31': {
    title: 'His Angels with a Great Sound of a Trumpet',
    principle:
      'The elect are gathered from the four winds — Isaiah 27\'s trumpet and Deuteronomy 30\'s regathering. First principle: the same trumpet that scattered Israel\'s promises gathers Christ\'s elect; no elect one is left behind.',
    sourceKeywords: ['great sound of a trumpet', 'gather together his elect', 'from the four winds'],
    fulfillmentKeywords: ['shall be gathered', 'from the uttermost part of the earth'],
    terms: [],
  },
  'mat-26-28': {
    title: 'This Is My Blood of the New Testament',
    principle:
      'The cup quotes Jeremiah 31 and applies Exodus 24: blood-sealed covenant, remission of sins. First principle: the new covenant is not inked but bled — and the Supper is its ongoing memorial.',
    sourceKeywords: ['my blood of the new testament', 'shed for many', 'remission of sins'],
    fulfillmentKeywords: ['I will make a new covenant', 'I will forgive their iniquity'],
    terms: [],
  },
  'mat-26-31': {
    title: 'I Will Smite the Shepherd, and the Sheep Scatter',
    principle:
      'Zechariah 13:7 quoted over Gethsemane\'s night. First principle: the sword of the LORD wakes against the Shepherd who is God\'s equal — the scattering proves who He is even as it wounds them.',
    sourceKeywords: ['All ye shall be offended', 'it is written', 'I will smite the shepherd'],
    fulfillmentKeywords: ['smite the shepherd', 'sheep shall be scattered'],
    terms: [],
  },
  'mat-26-56': {
    title: 'All This Was Done, That the Scriptures Might Be Fulfilled',
    principle:
      'Arrest, abandonment, flight — all within the writings of the prophets. First principle: the disciples\' desertion does not derail the plan; even desertion fulfills it.',
    sourceKeywords: ['all this was done', 'the scriptures of the prophets might be fulfilled', 'forsook him, and fled'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mat-27-9': {
    title: 'They Took the Thirty Pieces of Silver',
    principle:
      'Zechariah 11 and Jeremiah 32-33 converge on the potter\'s-field price. First principle: the composite quotation is exact in substance — betrayal money buys a burial ground for strangers.',
    sourceKeywords: ['Then was fulfilled', 'thirty pieces of silver', 'potter'],
    fulfillmentKeywords: ['thirty pieces of silver', 'cast them to the potter'],
    terms: [],
  },
  'mat-27-35': {
    title: 'They Parted His Garments, Casting Lots',
    principle:
      'The crucifixion proceeds as Psalm 22:18 wrote it. First principle: at the cross, the soldiers fulfill Scripture involuntarily — the plan needs no conscious cooperation.',
    sourceKeywords: ['parted his garments', 'casting lots', 'that it might be fulfilled'],
    fulfillmentKeywords: ['parted my raiment', 'did cast lots'],
    terms: [],
  },
  'mat-27-46': {
    title: 'Eli, Eli, Lama Sabachthani?',
    principle:
      'Psalm 22:1 cried at the ninth hour in Hebrew. First principle: the crucified One prays the psalm that maps His own agony — forsaken that we might be received.',
    sourceKeywords: ['ninth hour', 'My God, my God', 'why hast thou forsaken me'],
    fulfillmentKeywords: ['My God, my God, why hast thou forsaken me'],
    terms: [],
  },
  'mat-27-48': {
    title: 'Vinegar on a Reed',
    principle:
      'The sponge of vinegar answers Psalm 69:21. First principle: the last act of the Passion was hospitality twisted into mockery — and written beforehand.',
    sourceKeywords: ['took a spunge', 'filled it with vinegar', 'gave him to drink'],
    fulfillmentKeywords: ['in my thirst', 'gave me vinegar to drink'],
    terms: [],
  },
  'mat-28-18': {
    title: 'All Power Is Given unto Me',
    principle:
      'The risen Christ receives Daniel 7\'s dominion and Psalm 2\'s possession. First principle: the Great Commission rests on universal authority — mission is the announcement of a throne, not a request.',
    sourceKeywords: ['All power is given unto me', 'in heaven and in earth', 'Go ye therefore'],
    fulfillmentKeywords: ['dominion and glory, and a kingdom', 'I shall give thee the uttermost parts'],
    terms: [],
  },
  'mat-28-20': {
    title: 'Lo, I Am with You Alway',
    principle:
      'To the end of the world, the Immanuel of chapter 1 remains. First principle: the book that opened with God-with-us closes with God-with-always — the promise that outlasts every generation.',
    sourceKeywords: ['I am with you alway', 'even unto the end of the world'],
    fulfillmentKeywords: ['I will strengthen thee', 'I will help thee'],
    terms: [],
  },

  // ── Hand-written expansion: Romans ──────────────────────────────────────
  'rom-1-2': {
    title: 'Promised Afore by His Prophets',
    principle:
      'The gospel was promised before through the prophets in holy scriptures. First principle: the good news is not a new invention but an old promise — the Son announced in David\'s line and David\'s throne.',
    sourceKeywords: ['promised afore', 'his prophets', 'holy scriptures'],
    fulfillmentKeywords: ['Thou art my Son', 'unto us a son is given'],
    terms: [],
  },
  'rom-1-4': {
    title: 'Declared the Son of God by the Resurrection',
    principle:
      'Raised from the dead, Jesus is marked out as Son with power — Psalm 2\'s decree enacted. First principle: the resurrection is the public investiture of the Son; the seed of David is demonstrated Lord.',
    sourceKeywords: ['declared to be the Son of God', 'by the resurrection from the dead', 'spirit of holiness'],
    fulfillmentKeywords: ['Thou art my Son', 'wilt not leave my soul in hell'],
    terms: [],
  },
  'rom-1-16': {
    title: 'The Power of God unto Salvation',
    principle:
      'The gospel saves every believer, Jew first and also Greek. First principle: Isaiah 49\'s light to the nations is the gospel\'s scope — power for anyone who believes, shame for no one who preaches it.',
    sourceKeywords: ['not ashamed of the gospel', 'power of God unto salvation', 'Jew first, and also to the Greek'],
    fulfillmentKeywords: ['my salvation unto the end of the earth'],
    terms: [],
  },
  'rom-1-20': {
    title: 'His Eternal Power and Godhead Are Clearly Seen',
    principle:
      'Creation reveals the invisible God so that unbelief is without excuse. First principle: the heavens declare — general revelation leaves no atheist safe, and the written law leaves no conscience clean apart from Christ.',
    sourceKeywords: ['clearly seen', 'things that are made', 'without excuse'],
    fulfillmentKeywords: ['the heavens declare the glory of God'],
    terms: [],
  },
  'rom-3-10': {
    title: 'There Is None Righteous, No, Not One',
    principle:
      'The psalmist\'s verdict is universalized: none righteous, none seeketh after God. First principle: the doctrine of universal sin is not Paul\'s opinion — it is a catena of Scripture gathered against the whole world.',
    sourceKeywords: ['As it is written', 'none righteous', 'none that understandeth'],
    fulfillmentKeywords: ['there is none that doeth good', 'the fool hath said in his heart'],
    terms: [],
  },
  'rom-3-13': {
    title: 'Their Throat Is an Open Sepulchre',
    principle:
      'The Psalms catalogue sinful speech: deceitful tongues, asp poison, cursing lips. First principle: sin is most audible in the mouth — the anatomy of guilt is drawn from Israel\'s own hymnbook.',
    sourceKeywords: ['open sepulchre', 'used deceit', 'poison of asps'],
    fulfillmentKeywords: ['the poison of asps', 'speaketh lies'],
    terms: [],
  },
  'rom-3-15': {
    title: 'Swift to Shed Blood',
    principle:
      'Isaiah 59\'s indictment of feet running to evil is applied to all. First principle: violence is the visible fruit of inner ruin — the feet are swift because the heart is far.',
    sourceKeywords: ['swift to shed blood', 'destruction and misery'],
    fulfillmentKeywords: ['their feet run to evil', 'they are swift to shed innocent blood'],
    terms: [],
  },
  'rom-3-18': {
    title: 'No Fear of God Before Their Eyes',
    principle:
      'Psalm 36\'s final diagnosis: unbelief is not intellectual failure but moral rebellion. First principle: the root of sin is the absence of reverent fear — every other sin grows from this soil.',
    sourceKeywords: ['no fear of God', 'before their eyes'],
    fulfillmentKeywords: ['there is no fear of God before his eyes'],
    terms: [],
  },
  'rom-3-20': {
    title: 'By the Law Is the Knowledge of Sin',
    principle:
      'No flesh is justified by deeds of the law — the law diagnoses, it does not cure. First principle: the law is a mirror, not a launderer; righteousness must come from another quarter entirely.',
    sourceKeywords: ['deeds of the law', 'no flesh be justified', 'knowledge of sin'],
    fulfillmentKeywords: ['in thy sight shall no man living be justified'],
    terms: [],
  },
  'rom-4-13': {
    title: 'Heir of the World Through the Righteousness of Faith',
    principle:
      'Abraham\'s promise of world-inheritance came apart from law, through faith. First principle: the land promise was always a down payment on a worldwide inheritance — received by believing, not by lawkeeping.',
    sourceKeywords: ['heir of the world', 'through the righteousness of faith', 'not through the law'],
    fulfillmentKeywords: ['unto thy seed will I give this land'],
    terms: [],
  },
  'rom-4-17': {
    title: 'A Father of Many Nations Have I Made Thee',
    principle:
      'God calls things that are not as though they were — Abraham believed the Life-giver. First principle: faith trusts the finished speech of God; the title father of nations was given before the first child existed.',
    sourceKeywords: ['father of many nations', 'quickeneth the dead', 'calleth those things which be not'],
    fulfillmentKeywords: ['a father of many nations have I made thee'],
    terms: [],
  },
  'rom-4-18': {
    title: 'Against Hope Believed in Hope',
    principle:
      'A hundred-year-old man embraces So shall thy seed be. First principle: hope against hope is still hope on the Word — the stars of Genesis 15 remain the measure of the promise.',
    sourceKeywords: ['against hope believed in hope', 'So shall thy seed be'],
    fulfillmentKeywords: ['tell the stars', 'so shall thy seed be'],
    terms: [],
  },
  'rom-4-25': {
    title: 'Delivered for Our Offences, Raised for Our Justification',
    principle:
      'Isaiah 53\'s transactions are summarized in two clauses: delivered and raised. First principle: the cross pays the debt; the resurrection announces the receipt — justification is certified by an empty tomb.',
    sourceKeywords: ['delivered for our offences', 'raised again for our justification'],
    fulfillmentKeywords: ['was wounded for our transgressions', 'shall justify many'],
    terms: [],
  },
  'rom-5-14': {
    title: 'Adam Is the Figure of Him That Was to Come',
    principle:
      'Death reigned from Adam, a pattern pointing forward to Christ. First principle: history splits into two headships — in Adam all die; the second Adam headships a race of life.',
    sourceKeywords: ['death reigned', 'the figure of him that was to come', 'Adam\'s transgression'],
    fulfillmentKeywords: ['in Adam all die', 'a living soul'],
    terms: [],
  },
  'rom-5-15': {
    title: 'Much More the Grace of God Hath Abounded',
    principle:
      'One offense brought death; one Man\'s gift abounds to many. First principle: grace is not symmetry but superabundance — what the fall lost, the gift outweighs.',
    sourceKeywords: ['the free gift', 'abounded unto many', 'grace of God'],
    fulfillmentKeywords: ['shall justify many', 'he shall see of the travail of his soul'],
    terms: [],
  },
  'rom-5-19': {
    title: 'By the Obedience of One Shall Many Be Made Righteous',
    principle:
      'Adam\'s disobedience versus Christ\'s obedience unto death. First principle: salvation is headship exchange — the many are counted righteous because the One was obedient in their place.',
    sourceKeywords: ['by one man\'s disobedience', 'the obedience of one', 'made righteous'],
    fulfillmentKeywords: ['by his knowledge shall my righteous servant justify many', 'obedient unto death'],
    terms: [],
  },
  'rom-6-23': {
    title: 'The Wages of Sin Is Death',
    principle:
      'Sin pays death; God gives eternal life through Christ. First principle: two economies — earned wages versus unearned gift — and the gift wins because another earned it for us.',
    sourceKeywords: ['wages of sin is death', 'the gift of God is eternal life'],
    fulfillmentKeywords: ['thou shalt surely die', 'the soul that sinneth, it shall die'],
    terms: [],
  },
  'rom-8-11': {
    title: 'He That Raised Up Christ Shall Quicken Your Mortal Bodies',
    principle:
      'The Spirit who raised Jesus will resurrect believers. First principle: Ezekiel\'s dry-bones question is answered by the indwelling Spirit — the same power that raised Christ will raise you.',
    sourceKeywords: ['raised up Jesus from the dead', 'quicken your mortal bodies', 'his Spirit that dwelleth in you'],
    fulfillmentKeywords: ['I will cause breath to enter into you', 'ye shall live'],
    terms: [],
  },
  'rom-8-29': {
    title: 'Firstborn Among Many Brethren',
    principle:
      'The predestined are conformed to the image of God\'s Son. First principle: Psalm 89\'s firstborn title belongs to Christ, and salvation\'s goal is family resemblance to Him.',
    sourceKeywords: ['conformed to the image of his Son', 'firstborn among many brethren'],
    fulfillmentKeywords: ['I will make him my firstborn', 'higher than the kings'],
    terms: [],
  },
  'rom-8-34': {
    title: 'Christ That Died, Yea Rather, That Is Risen Again',
    principle:
      'No condemnation stands while the risen Christ intercedes at God\'s right hand. First principle: the defense in the courtroom of heaven is the Lamb who died — Psalm 110 enthroned, Isaiah 53 interceding.',
    sourceKeywords: ['It is Christ that died', 'risen again', 'maketh intercession for us'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'made intercession for the transgressors'],
    terms: [],
  },
  'rom-9-7': {
    title: 'In Isaac Shall Thy Seed Be Called',
    principle:
      'Abraham\'s children are counted through promise, not merely flesh. First principle: the covenant line runs by election and faith — Isaac, not Ishmael, carries the seed of the world-blessing.',
    sourceKeywords: ['the seed of Abraham', 'In Isaac shall thy seed be called'],
    fulfillmentKeywords: ['in Isaac shall thy seed be called'],
    terms: [],
  },
  'rom-9-9': {
    title: 'At This Time Will I Come, and Sara Shall Have a Son',
    principle:
      'The word of promise came with a divine timetable. First principle: God\'s promises come with God\'s seasons — the impossible birth at the appointed time is the pattern of the Incarnation itself.',
    sourceKeywords: ['the word of promise', 'At this time will I come', 'Sara shall have a son'],
    fulfillmentKeywords: ['At the time appointed', 'Sarah thy wife shall have a son'],
    terms: [],
  },
  'rom-9-12': {
    title: 'The Elder Shall Serve the Younger',
    principle:
      'Rebekah\'s twins carry the election pattern. First principle: God\'s choice runs against birth order and human expectation — grace is sovereign over seniority.',
    sourceKeywords: ['The elder shall serve the younger', 'Rebekah'],
    fulfillmentKeywords: ['the elder shall serve the younger'],
    terms: [],
  },
  'rom-9-13': {
    title: 'Jacob Have I Loved, but Esau Have I Hated',
    principle:
      'Malachi\'s later words are cited as God\'s settled choice across generations. First principle: election is God\'s love set before desert — Jacob\'s line carries the Messiah, whatever Esau\'s prosperity.',
    sourceKeywords: ['Jacob have I loved', 'Esau have I hated', 'As it is written'],
    fulfillmentKeywords: ['Jacob have I loved', 'Esau have I hated'],
    terms: [],
  },
  'rom-9-15': {
    title: 'I Will Have Mercy on Whom I Will Have Mercy',
    principle:
      'Moses at the cleft learns God\'s sovereign compassion. First principle: mercy by definition cannot be owed — it is God\'s free self-disclosure, the glory He showed Moses and shows in Christ.',
    sourceKeywords: ['I will have mercy on whom I will have mercy', 'compassion on whom I will have compassion'],
    fulfillmentKeywords: ['I will make all my goodness pass before thee', 'shew mercy'],
    terms: [],
  },
  'rom-9-17': {
    title: 'Even for This Same Purpose Have I Raised Thee Up',
    principle:
      'Pharaoh\'s hardened throne served the declaration of God\'s name in all the earth. First principle: even opposition is harnessed — God\'s power is displayed through the rulers who refuse Him.',
    sourceKeywords: ['the scripture saith unto Pharaoh', 'I might shew my power in thee', 'declared throughout all the earth'],
    fulfillmentKeywords: ['for to shew in thee my power', 'my name may be declared'],
    terms: [],
  },
  'rom-9-25': {
    title: 'I Will Call Them My People, Which Were Not My People',
    principle:
      'Hosea\'s Lo-ammi reversal is quoted for Gentile grace. First principle: the God who renames the unloved is still renaming — not-my-people become sons of the living God.',
    sourceKeywords: ['in Osee', 'my people, which were not my people', 'beloved, which was not beloved'],
    fulfillmentKeywords: ['I will say to them which were not my people', 'Thou art my people'],
    terms: [],
  },
  'rom-9-26': {
    title: 'Children of the Living God',
    principle:
      'In the very place of rejection, adoption is proclaimed. First principle: Hosea\'s geography of grace — the same ground of unbelief becomes the ground of belonging.',
    sourceKeywords: ['in the place where it was said', 'not my people', 'children of the living God'],
    fulfillmentKeywords: ['Ye are the sons of the living God'],
    terms: [],
  },
  'rom-9-27': {
    title: 'A Remnant Shall Be Saved',
    principle:
      'Isaiah\'s cry: though Israel be as the sand, only a remnant returns. First principle: salvation is never statistical — the promise survives in the remnant God keeps for Himself.',
    sourceKeywords: ['Esaias also crieth', 'a remnant shall be saved', 'as the sand of the sea'],
    fulfillmentKeywords: ['a remnant shall return', 'the remnant according to the election of grace'],
    terms: [],
  },
  'rom-9-29': {
    title: 'Except the Lord of Sabaoth Had Left Us a Seed',
    principle:
      'Without divine reserve, Israel would be as Sodom. First principle: a saved seed is mercy\'s evidence — what remains is what grace left, not what man preserved.',
    sourceKeywords: ['Lord of Sabaoth', 'left us a seed', 'as Sodoma'],
    fulfillmentKeywords: ['except the LORD of hosts had left'],
    terms: [],
  },
  'rom-10-5': {
    title: 'The Man Which Doeth Those Things Shall Live by Them',
    principle:
      'Moses describes law-righteousness: do and live. First principle: the law offers life to perfect performance — a standard that indicts, because none has performed.',
    sourceKeywords: ['Moses describeth', 'the righteousness which is of the law', 'shall live by them'],
    fulfillmentKeywords: ['Ye shall therefore keep my statutes', 'which if a man do, he shall live'],
    terms: [],
  },
  'rom-10-6': {
    title: 'Say Not in Thine Heart, Who Shall Ascend into Heaven?',
    principle:
      'Deuteronomy 30\'s near word is read of Christ — no climb, no descent required. First principle: righteousness by faith is proximity, not pilgrimage; the Word is near, in mouth and heart.',
    sourceKeywords: ['the righteousness which is of faith', 'Who shall ascend into heaven', 'bring Christ down'],
    fulfillmentKeywords: ['it is not in heaven', 'very nigh unto thee'],
    terms: [],
  },
  'rom-10-11': {
    title: 'Whosoever Believeth on Him Shall Not Be Ashamed',
    principle:
      'Isaiah 28\'s foundation Stone carries a promise: no shame for the believer. First principle: the Stone laid in Zion secures the unhurried — he that believeth shall not make haste, nor be put to flight.',
    sourceKeywords: ['the scripture saith', 'Whosoever believeth on him', 'shall not be ashamed'],
    fulfillmentKeywords: ['he that believeth shall not make haste', 'a tried stone'],
    terms: [],
  },
  'rom-10-15': {
    title: 'How Beautiful Are the Feet of Them That Preach',
    principle:
      'Isaiah 52\'s mountain-runner is the gospel preacher. First principle: glad tidings require sent feet — the beauty is in the message carried, not the messenger\'s merit.',
    sourceKeywords: ['except they be sent', 'beautiful are the feet', 'glad tidings of good things'],
    fulfillmentKeywords: ['How beautiful upon the mountains', 'that bringeth good tidings'],
    terms: [],
  },
  'rom-10-16': {
    title: 'Lord, Who Hath Believed Our Report?',
    principle:
      'Isaiah 53\'s opening lament is quoted of Israel\'s unbelief. First principle: the report has been published in every generation — and the arm of the LORD is revealed only to faith.',
    sourceKeywords: ['they have not all obeyed the gospel', 'Esaias saith', 'who hath believed our report'],
    fulfillmentKeywords: ['Who hath believed our report'],
    terms: [],
  },
  'rom-10-18': {
    title: 'Their Sound Went into All the Earth',
    principle:
      'Psalm 19\'s creation-sermon is applied to the gospel\'s reach. First principle: as the heavens needed no interpreter, so the gospel voice travels — the question is not hearing but heeding.',
    sourceKeywords: ['Have they not heard', 'their sound went into all the earth', 'ends of the world'],
    fulfillmentKeywords: ['their line is gone out through all the earth'],
    terms: [],
  },
  'rom-10-19': {
    title: 'I Will Provoke You to Jealousy by Them That Are No People',
    principle:
      'Moses\' song warns Israel with a foolish nation\'s favor. First principle: jealousy-provoking grace is an old covenant tool — Gentile blessing is the sermon Israel was told to expect.',
    sourceKeywords: ['First Moses saith', 'provoke you to jealousy', 'a foolish nation'],
    fulfillmentKeywords: ['I will provoke them to jealousy', 'a foolish nation'],
    terms: [],
  },
  'rom-10-20': {
    title: 'I Was Found of Them That Sought Me Not',
    principle:
      'Isaiah 65\'s bold paradox: found by non-seekers, manifest to the unasking. First principle: grace initiates — the God found by Gentiles who never sought Him is the scandal and glory of the gospel.',
    sourceKeywords: ['Esaias is very bold', 'found of them that sought me not', 'asked not after me'],
    fulfillmentKeywords: ['I am sought of them that asked not for me', 'I am found of them'],
    terms: [],
  },
  'rom-10-21': {
    title: 'All Day Long I Have Stretched Forth My Hands',
    principle:
      'To Israel: outstretched hands met disobedience and contradiction. First principle: rejection is not the failure of God\'s patience but the abuse of it — the hands stayed open all day.',
    sourceKeywords: ['to Israel he saith', 'stretched forth my hands', 'disobedient and gainsaying people'],
    fulfillmentKeywords: ['I have spread out my hands all the day'],
    terms: [],
  },
  'rom-11-3': {
    title: 'They Have Killed Thy Prophets; I Am Left Alone',
    principle:
      'Elijah\'s complaint is quoted in Romans\' remnant argument. First principle: even when faith feels extinct, God keeps a reserve of seven thousand — despondency misreads the census.',
    sourceKeywords: ['killed thy prophets', 'digged down thine altars', 'I am left alone'],
    fulfillmentKeywords: ['I, even I only, am left', 'seven thousand that have not bowed'],
    terms: [],
  },
  'rom-11-8': {
    title: 'God Hath Given Them the Spirit of Slumber',
    principle:
      'Isaiah\'s judicial sleep and David\'s table-snare are joined. First principle: continued refusal invites given blindness — eyes that close themselves are finally closed for them.',
    sourceKeywords: ['the spirit of slumber', 'eyes that they should not see', 'unto this day'],
    fulfillmentKeywords: ['the spirit of deep sleep', 'poured out upon you'],
    terms: [],
  },
  'rom-11-9': {
    title: 'Let Their Table Be Made a Snare',
    principle:
      'Psalm 69\'s imprecation lands on the rejectors of the Messiah. First principle: prosperity without faith becomes a trap — the table itself can catch the ungrateful.',
    sourceKeywords: ['David saith', 'their table be made a snare', 'a recompence unto them'],
    fulfillmentKeywords: ['let their table become a snare', 'a trap'],
    terms: [],
  },
  'rom-11-10': {
    title: 'Let Their Eyes Be Darkened',
    principle:
      'Psalm 69:23 continues: bowing backs and darkened eyes. First principle: the imprecation shows the cost of spurning the suffering King — spiritual sight is forfeited where He is refused.',
    sourceKeywords: ['Let their eyes be darkened', 'that they may not see', 'bow down their back'],
    fulfillmentKeywords: ['their eyes are darkened', 'that they see not'],
    terms: [],
  },
  'rom-11-26': {
    title: 'There Shall Come out of Sion the Deliverer',
    principle:
      'All Israel\'s salvation is anchored in the coming Redeemer who turns away ungodliness. First principle: the covenant\'s climax is not ethnicity but Deliverance personified — the go\'el from Zion, as Isaiah wrote.',
    sourceKeywords: ['all Israel shall be saved', 'out of Sion the Deliverer', 'turn away ungodliness from Jacob'],
    fulfillmentKeywords: ['the Redeemer shall come to Zion', 'turn from transgression in Jacob'],
    terms: [],
  },
  'rom-11-27': {
    title: 'This Is My Covenant, When I Shall Take Away Their Sins',
    principle:
      'Isaiah 59 and Jeremiah 31 are fused: covenant equals sin removed. First principle: the new covenant\'s charter is forgiveness written in hearts — the Deliverer\'s one achievement.',
    sourceKeywords: ['this is my covenant unto them', 'take away their sins'],
    fulfillmentKeywords: ['this is my covenant with them', 'I will forgive their iniquity'],
    terms: [],
  },
  'rom-12-19': {
    title: 'Vengeance Is Mine; I Will Repay',
    principle:
      'Believers renounce self-vengeance and yield to God\'s written prerogative. First principle: justice delegated is justice secured — the Song of Moses assigns repayment to God alone.',
    sourceKeywords: ['avenge not yourselves', 'give place unto wrath', 'Vengeance is mine; I will repay'],
    fulfillmentKeywords: ['To me belongeth vengeance and recompence'],
    terms: [],
  },
  'rom-14-11': {
    title: 'Every Knee Shall Bow, Every Tongue Shall Confess',
    principle:
      'Isaiah 45\'s universal oath grounds mutual forbearance — we will all stand before God. First principle: the coming universal confession makes judging one another unnecessary; the Judge is certain.',
    sourceKeywords: ['As I live, saith the Lord', 'every knee shall bow to me', 'confess to God'],
    fulfillmentKeywords: ['unto me every knee shall bow', 'every tongue shall swear'],
    terms: [],
  },
  'rom-15-3': {
    title: 'The Reproaches of Them That Reproached Thee Fell on Me',
    principle:
      'Christ pleased not Himself — Psalm 69\'s insults land on the Servant. First principle: the self-pleasing One absorbed reproach for others; strong believers bear with the weak in the same pattern.',
    sourceKeywords: ['Christ pleased not himself', 'as it is written', 'fell on me'],
    fulfillmentKeywords: ['the reproaches of them that reproached thee', 'fallen upon me'],
    terms: [],
  },
  'rom-15-9': {
    title: 'I Will Confess to Thee among the Gentiles',
    principle:
      'Psalm 18 is cited as Gentile praise foretold. First principle: the mercy shown to Israel was always designed for Gentile song — David\'s victory psalm becomes the nations\' doxology.',
    sourceKeywords: ['the Gentiles might glorify God for his mercy', 'I will confess to thee among the Gentiles'],
    fulfillmentKeywords: ['I will confess thee among the nations', 'sing unto thy name'],
    terms: [],
  },
  'rom-15-10': {
    title: 'Rejoice, Ye Gentiles, with His People',
    principle:
      'Moses\' final song commands Gentile joy alongside Israel. First principle: the Song of Moses already imagined Jew and Gentile rejoicing together — the church is that reunion.',
    sourceKeywords: ['Rejoice, ye Gentiles, with his people'],
    fulfillmentKeywords: ['Rejoice, O ye nations, with his people'],
    terms: [],
  },
  'rom-15-11': {
    title: 'Praise the Lord, All Ye Gentiles',
    principle:
      'Psalm 117 — the shortest psalm, the widest invitation. First principle: two verses summon the whole world to praise; the mercy toward us is great, and it is universal in reach.',
    sourceKeywords: ['Praise the Lord, all ye Gentiles', 'laud him, all ye people'],
    fulfillmentKeywords: ['O praise the LORD, all ye nations'],
    terms: [],
  },
  'rom-15-21': {
    title: 'To Whom He Was Not Spoken of, They Shall See',
    principle:
      'Isaiah 52:15 justifies Paul\'s pioneer preaching to unreached regions. First principle: mission strategy follows prophecy — the message moves toward those who have never heard His name.',
    sourceKeywords: ['To whom he was not spoken of', 'they shall see', 'shall understand'],
    fulfillmentKeywords: ['so shall he sprinkle many nations', 'kings shall shut their mouths'],
    terms: [],
  },
  'rom-16-20': {
    title: 'The God of Peace Shall Bruise Satan Under Your Feet',
    principle:
      'Genesis 3:15 closes the epistle: the serpent-crushing promise turns to believers\' feet, shortly. First principle: the Seed\'s victory becomes the church\'s participation — peace with God ends in Satan underfoot.',
    sourceKeywords: ['God of peace', 'bruise Satan under your feet', 'shortly'],
    fulfillmentKeywords: ['it shall bruise thy head'],
    terms: [],
  },
  'rom-16-25': {
    title: 'The Revelation of the Mystery Kept Secret Since the World Began',
    principle:
      'The doxology reveals a mystery long hidden — the preaching of Jesus Christ. First principle: the gospel is the unsealed secret; what the ages whispered in types is now announced plainly.',
    sourceKeywords: ['the revelation of the mystery', 'kept secret since the world began', 'my gospel'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'rom-16-26': {
    title: 'Made Known to All Nations for the Obedience of Faith',
    principle:
      'By prophetic scriptures the mystery goes to all nations. First principle: the promise to Abraham, the light of Isaiah, and the command of the everlasting God converge — one obedience of faith, worldwide.',
    sourceKeywords: ['by the scriptures of the prophets', 'made known to all nations', 'obedience of faith'],
    fulfillmentKeywords: ['in thy seed shall all nations', 'my salvation unto the end'],
    terms: [],
  },
  // ── Hand-written expansion: Hebrews ─────────────────────────────────────
  'heb-1-1': {
    title: 'God Who Spake at Sundry Times by the Prophets',
    principle:
      'The God who spoke in fragments to the fathers has spoken finally in His Son. First principle: the prophets are real revelation in portions; the Son is the whole — every thread converges on His speech.',
    sourceKeywords: ['sundry times and in divers manners', 'spake in time past', 'by the prophets'],
    fulfillmentKeywords: ['hath in these last days spoken unto us by his Son'],
    terms: [],
  },
  'heb-1-3': {
    title: 'The Express Image of His Person',
    principle:
      'The brightness of God\'s glory, upholding all things, purged our sins by Himself and sat down on the right hand of the Majesty on high. First principle: priest, sacrifice, and throne unite in one Person — purification finished, session begun.',
    sourceKeywords: ['brightness of his glory', 'purged our sins', 'sat down on the right hand'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'he shall not fail'],
    terms: [],
  },
  'heb-1-5': {
    title: 'Unto Which of the Angels Said He, Thou Art My Son?',
    principle:
      'Psalm 2 and Nathan\'s word to David are quoted to rank the Son above angels. First principle: sonship by decree and dynasty — I will be to him a Father — is higher than any angelic office.',
    sourceKeywords: ['Thou art my Son', 'this day have I begotten thee', 'a Father, and he shall be to me a Son'],
    fulfillmentKeywords: ['Thou art my Son', 'he shall build an house for my name'],
    terms: [],
  },
  'heb-1-6': {
    title: 'Let All the Angels of God Worship Him',
    principle:
      'When the First-begotten comes into the world, heaven\'s order commands angels to worship. First principle: the Son receives the worship Deuteronomy 32 reserves for God — His deity is the letter\'s first argument.',
    sourceKeywords: ['when he bringeth in the firstbegotten', 'let all the angels of God worship him'],
    fulfillmentKeywords: ['Rejoice, O ye nations, with his people', 'worship him, all ye gods'],
    terms: [],
  },
  'heb-1-8': {
    title: 'Thy Throne, O God, Is for Ever and Ever',
    principle:
      'The Father addresses the Son as God, enthroned with a sceptre of righteousness. First principle: Psalm 45\'s wedding hymn is God\'s own testimony to the Son\'s deity and just reign.',
    sourceKeywords: ['Thy throne, O God', 'for ever and ever', 'sceptre of righteousness'],
    fulfillmentKeywords: ['thy throne, O God, is for ever', 'God, thy God, hath anointed thee'],
    terms: [],
  },
  'heb-1-10': {
    title: 'Thou, Lord, in the Beginning Hast Laid the Foundation',
    principle:
      'Psalm 102 — a prayer to the unchanging Creator — is addressed to the Son. First principle: the One who laid earth\'s foundations is the same yesterday, today, and forever; creation names Him Lord.',
    sourceKeywords: ['laid the foundation of the earth', 'the works of thine hands', 'shall perish'],
    fulfillmentKeywords: ['Of old hast thou laid the foundation of the earth'],
    terms: [],
  },
  'heb-1-13': {
    title: 'Sit on My Right Hand Until Thine Enemies',
    principle:
      'No angel ever heard Psalm 110\'s invitation. First principle: the enthroned Man waits in majesty — the footstool promise belongs to the Son alone.',
    sourceKeywords: ['Sit on my right hand', 'thine enemies thy footstool', 'to which of the angels'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'until I make thine enemies'],
    terms: [],
  },
  'heb-2-6': {
    title: 'What Is Man, That Thou Art Mindful of Him?',
    principle:
      'Psalm 8 is expounded of Jesus — made a little lower than the angels for suffering, now crowned. First principle: the son-of-man question finds its answer in the One now crowned with glory, all things under His feet.',
    sourceKeywords: ['What is man', 'the son of man', 'visitest him'],
    fulfillmentKeywords: ['made him a little lower than the angels', 'crownedst him with glory'],
    terms: [],
  },
  'heb-2-12': {
    title: 'In the Midst of the Church Will I Sing Praise',
    principle:
      'The crucified Psalm 22 ends in congregation-song: I will declare thy name unto my brethren. First principle: the Sufferer of Psalm 22 becomes the worship leader of His brothers — the cross births the church\'s praise.',
    sourceKeywords: ['I will declare thy name', 'unto my brethren', 'in the midst of the church'],
    fulfillmentKeywords: ['I will declare thy name unto my brethren'],
    terms: [],
  },
  'heb-2-13': {
    title: 'I Will Put My Trust in Him',
    principle:
      'Isaiah\'s trusting remnant becomes the Son\'s own confession, with the children God gave Him. First principle: the Messiah lived by faith among His own — sanctified companionship with the children of promise.',
    sourceKeywords: ['I will put my trust in him', 'Behold I and the children', 'which God hath given me'],
    fulfillmentKeywords: ['I will wait upon the LORD', 'the children whom the LORD hath given me'],
    terms: [],
  },
  'heb-3-7': {
    title: 'To Day If Ye Will Hear His Voice',
    principle:
      'Psalm 95 is quoted as the Holy Ghost\'s present warning: harden not your hearts. First principle: the gospel has a Today attached — Israel\'s Kadesh failure is the standing caution for every generation.',
    sourceKeywords: ['the Holy Ghost saith', 'To day if ye will hear his voice', 'harden not your hearts'],
    fulfillmentKeywords: ['To day if ye will hear his voice'],
    terms: [],
  },
  'heb-3-11': {
    title: 'They Shall Not Enter into My Rest',
    principle:
      'God\'s oath barred that generation from Canaan-rest. First principle: unbelief forfeits the promised rest — the oath is as real as the promise it vetoed.',
    sourceKeywords: ['So I sware in my wrath', 'They shall not enter into my rest'],
    fulfillmentKeywords: ['unto whom I sware in my wrath', 'they shall not enter'],
    terms: [],
  },
  'heb-4-7': {
    title: 'He Limiteth a Certain Day, Saying in David',
    principle:
      'A rest remains because David, long after Joshua, still says Today. First principle: the psalm reopens the offer — the Sabbath-rest of God outlasts Canaan and stands open now.',
    sourceKeywords: ['he limiteth a certain day', 'saying in David', 'harden not your hearts'],
    fulfillmentKeywords: ['To day if ye will hear his voice'],
    terms: [],
  },
  'heb-5-5': {
    title: 'Christ Glorified Not Himself to Be Made High Priest',
    principle:
      'Priesthood came by the Father\'s decree: Thou art my Son. First principle: every office of Christ is conferred, not seized — glory by appointment, in God\'s time and voice.',
    sourceKeywords: ['glorified not himself', 'made an high priest', 'Thou art my Son'],
    fulfillmentKeywords: ['Thou art my Son', 'this day have I begotten thee'],
    terms: [],
  },
  'heb-5-6': {
    title: 'A Priest for Ever After the Order of Melchisedec',
    principle:
      'Psalm 110:4 gives the Son a priesthood older than Aaron\'s. First principle: royal priesthood — king on the throne and priest at the altar — is Christ\'s by oath, not genealogy.',
    sourceKeywords: ['a priest for ever', 'order of Melchisedec'],
    fulfillmentKeywords: ['Thou art a priest for ever', 'after the order of Melchizedek'],
    terms: [],
  },
  'heb-6-14': {
    title: 'Surely Blessing I Will Bless Thee',
    principle:
      'The doubled oath to Abraham makes God\'s promise immutable. First principle: God swore by Himself because none was greater — the multiplied seed rests on an unchangeable oath.',
    sourceKeywords: ['Surely blessing I will bless thee', 'multiplying I will multiply thee'],
    fulfillmentKeywords: ['by myself have I sworn', 'I will multiply thy seed'],
    terms: [],
  },
  'heb-7-1': {
    title: 'Melchisedec, Priest of the Most High God',
    principle:
      'Genesis 14\'s king of Salem blessed Abraham returning from war. First principle: the type appears suddenly — no lineage, no ending — because it pictures an endless priesthood.',
    sourceKeywords: ['king of Salem', 'priest of the most high God', 'blessed him'],
    fulfillmentKeywords: ['Melchizedek king of Salem', 'priest of the most high God'],
    terms: [],
  },
  'heb-7-17': {
    title: 'Thou Art a Priest for Ever',
    principle:
      'The oath of Psalm 110:4 is repeated to nail down the eternal priesthood. First principle: another priest arises after the similitude of Melchisedec — the law\'s Aaronic line was never the end of the story.',
    sourceKeywords: ['he testifieth', 'a priest for ever', 'order of Melchisedec'],
    fulfillmentKeywords: ['the LORD hath sworn', 'thou art a priest for ever'],
    terms: [],
  },
  'heb-8-12': {
    title: 'Their Sins and Iniquities Will I Remember No More',
    principle:
      'The new covenant\'s climax is divine forgetting. First principle: forgiveness under the new covenant is not amnesia\'s accident but mercy\'s decision — sins remembered no more.',
    sourceKeywords: ['merciful to their unrighteousness', 'sins and their iniquities', 'remember no more'],
    fulfillmentKeywords: ['I will forgive their iniquity', 'remember their sin no more'],
    terms: [],
  },
  'heb-9-20': {
    title: 'This Is the Blood of the Testament',
    principle:
      'Exodus 24\'s Sinai sprinkling is quoted to explain a better blood. First principle: every covenant runs on blood — the old with animals, the new with the Testator Himself.',
    sourceKeywords: ['the blood of the testament', 'which God hath enjoined unto you'],
    fulfillmentKeywords: ['the blood of the covenant', 'sprinkled on the people'],
    terms: [],
  },
  'heb-10-5': {
    title: 'A Body Hast Thou Prepared Me',
    principle:
      'Psalm 40 is placed in the mouth of the incarnate Son: Lo, I come to do thy will. First principle: the Incarnation is the answer to sacrifice\'s insufficiency — a body prepared for total obedience.',
    sourceKeywords: ['when he cometh into the world', 'a body hast thou prepared me', 'Sacrifice and offering thou wouldest not'],
    fulfillmentKeywords: ['mine ears hast thou opened', 'I delight to do thy will'],
    terms: [],
  },
  'heb-10-16': {
    title: 'I Will Put My Laws into Their Hearts',
    principle:
      'Jeremiah 31\'s internal law is quoted as the covenant\'s present reality. First principle: the law moves from stone to heart — obedience becomes the Spirit\'s work inside us.',
    sourceKeywords: ['the covenant that I will make', 'my laws into their hearts', 'in their minds will I write them'],
    fulfillmentKeywords: ['I will put my law in their inward parts', 'write it in their hearts'],
    terms: [],
  },
  'heb-10-30': {
    title: 'Vengeance Belongeth unto Me',
    principle:
      'The Song of Moses warns apostates: the Lord shall judge His people. First principle: the same covenant God who avenges His people judges those who trample His Son — fear and comfort are two sides of one oath.',
    sourceKeywords: ['Vengeance belongeth unto me', 'I will recompense', 'The Lord shall judge his people'],
    fulfillmentKeywords: ['To me belongeth vengeance', 'the LORD shall judge his people'],
    terms: [],
  },
  'heb-10-38': {
    title: 'The Just Shall Live by Faith',
    principle:
      'Habakkuk\'s line becomes the letter\'s watchword: if any draw back, my soul shall have no pleasure. First principle: life is by believing endurance — the vision tarries, but the just keep trusting.',
    sourceKeywords: ['the just shall live by faith', 'if any man draw back', 'no pleasure in him'],
    fulfillmentKeywords: ['the just shall live by his faith'],
    terms: [],
  },
  'heb-11-5': {
    title: 'Enoch Was Translated That He Should Not See Death',
    principle:
      'Enoch walked with God and was not, for God took him. First principle: before the law, a man pleased God and skipped death — the firstfruits of translation hope.',
    sourceKeywords: ['By faith Enoch was translated', 'should not see death', 'he pleased God'],
    fulfillmentKeywords: ['Enoch walked with God', 'he was not; for God took him'],
    terms: [],
  },
  'heb-11-7': {
    title: 'Noah Prepared an Ark to the Saving of His House',
    principle:
      'Noah acted on things not seen as yet and condemned the world. First principle: faith builds before the rain — obedience to warning is righteousness inherited.',
    sourceKeywords: ['warned of God of things not seen as yet', 'prepared an ark', 'saving of his house'],
    fulfillmentKeywords: ['Noah found grace', 'thus did Noah'],
    terms: [],
  },
  'heb-11-8': {
    title: 'He Went Out, Not Knowing Whither He Went',
    principle:
      'Abraham obeyed the call to an unseen inheritance. First principle: faith is obedience without a map — the promise is the destination enough.',
    sourceKeywords: ['when he was called', 'a place which he should after receive', 'not knowing whither he went'],
    fulfillmentKeywords: ['Get thee out of thy country', 'unto a land that I will shew thee'],
    terms: [],
  },
  'heb-11-11': {
    title: 'Sara Received Strength to Conceive Seed',
    principle:
      'The barren mother judged Him faithful who had promised. First principle: faith laughs at impossibility after it judges the Promiser — strength came because the Word was believed.',
    sourceKeywords: ['received strength to conceive seed', 'past age', 'judged him faithful who had promised'],
    fulfillmentKeywords: ['At the time appointed will I return', 'Is any thing too hard for the LORD?'],
    terms: [],
  },
  'heb-11-12': {
    title: 'As the Stars of the Sky in Multitude',
    principle:
      'From one as good as dead sprang the star-and-sand multitude. First principle: the promises of Genesis 15 and 22 outgrew their hearer — life from the dead is the seed\'s origin story.',
    sourceKeywords: ['him as good as dead', 'stars of the sky in multitude', 'sand which is by the sea shore'],
    fulfillmentKeywords: ['look now toward heaven', 'so shall thy seed be'],
    terms: [],
  },
  'heb-11-17': {
    title: 'He That Had Received the Promises Offered Up Isaac',
    principle:
      'The trial of Moriah: the only begotten offered, the promises believed. First principle: Abraham reasoned that God could raise the dead — promise and sacrifice met on one altar.',
    sourceKeywords: ['when he was tried', 'offered up Isaac', 'his only begotten son'],
    fulfillmentKeywords: ['Take now thy son, thine only son Isaac'],
    terms: [],
  },
  'heb-11-18': {
    title: 'In Isaac Shall Thy Seed Be Called',
    principle:
      'The offering contradicted the covenant word — yet Abraham accounted God faithful. First principle: when sacrifice seems to erase the promise, faith holds both: God keeps His word through the knife.',
    sourceKeywords: ['Of whom it was said', 'In Isaac shall thy seed be called'],
    fulfillmentKeywords: ['for in Isaac shall thy seed be called'],
    terms: [],
  },
  'heb-12-2': {
    title: 'The Author and Finisher of Our Faith',
    principle:
      'For the joy set before Him, Jesus endured the cross, despised the shame, and sat down at the throne. First principle: Psalm 22\'s suffering and Psalm 110\'s session are one arc — endure by looking at the end from the beginning.',
    sourceKeywords: ['author and finisher', 'endured the cross', 'despising the shame', 'right hand of the throne of God'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'he shall see of the travail'],
    terms: [],
  },
  'heb-12-5': {
    title: 'Despise Not Thou the Chastening of the Lord',
    principle:
      'Proverbs 3 is quoted to reframe suffering as sonship. First principle: chastening is proof of love, not evidence of rejection — scourging marks every legitimate child.',
    sourceKeywords: ['My son, despise not thou the chastening', 'nor faint when thou art rebuked'],
    fulfillmentKeywords: ['despise not the chastening of the LORD', 'delight in him'],
    terms: [],
  },
  'heb-12-20': {
    title: 'If So Much as a Beast Touch the Mountain',
    principle:
      'Sinai\'s boundary of death is recalled before Zion\'s open invitation. First principle: the old mountain\'s terror measures the new mountain\'s grace — both are real; approach God His way.',
    sourceKeywords: ['they could not endure', 'a beast touch the mountain', 'stoned, or thrust through'],
    fulfillmentKeywords: ['whosoever toucheth the mount', 'surely be put to death'],
    terms: [],
  },
  'heb-12-26': {
    title: 'Yet Once More I Shake Not the Earth Only, but Also Heaven',
    principle:
      'Haggai\'s shaking is escalated: the final quake removes what is shakeable. First principle: created things tremble so the unshakeable kingdom may stand — Haggai\'s promise reaches past Sinai to the end.',
    sourceKeywords: ['Whose voice then shook the earth', 'Yet once more I shake', 'not the earth only, but also heaven'],
    fulfillmentKeywords: ['I will shake all nations', 'the desire of all nations'],
    terms: [],
  },
  'heb-12-29': {
    title: 'Our God Is a Consuming Fire',
    principle:
      'The flame on Sinai and over Egypt is our God. First principle: the fire that consumes sacrifice consumes refusal — worship acceptably, with reverence and godly fear.',
    sourceKeywords: ['our God is a consuming fire'],
    fulfillmentKeywords: ['the LORD thy God is a consuming fire'],
    terms: [],
  },
  'heb-13-5': {
    title: 'I Will Never Leave Thee, nor Forsake Thee',
    principle:
      'Contentment leans on God\'s presence-promise from Moses and Joshua. First principle: the antidote to covetousness is a promise of company — He is with us, so He is enough.',
    sourceKeywords: ['without covetousness', 'be content', 'I will never leave thee, nor forsake thee'],
    fulfillmentKeywords: ['he will not fail thee, nor forsake thee'],
    terms: [],
  },
  'heb-13-6': {
    title: 'The Lord Is My Helper; I Will Not Fear',
    principle:
      'Psalm 118 becomes bold speech against the fear of man. First principle: confidence against man rests on the Lord as helper — the Stone-casting psalm frees us from dread.',
    sourceKeywords: ['we may boldly say', 'The Lord is my helper', 'what man shall do unto me'],
    fulfillmentKeywords: ['The LORD is on my side', 'I will not fear'],
    terms: [],
  },
  'heb-13-11': {
    title: 'The Bodies of Those Beasts Are Burned Without the Camp',
    principle:
      'Day-of-atonement carcasses were carried outside. First principle: sin-bearing blood required removal from the holy — preparing the geography for the cross.',
    sourceKeywords: ['bodies of those beasts', 'brought into the sanctuary', 'burned without the camp'],
    fulfillmentKeywords: ['burn them without the camp'],
    terms: [],
  },
  'heb-13-12': {
    title: 'Jesus Suffered Without the Gate',
    principle:
      'The atonement pattern lands on Golgotha: sanctifying blood shed outside Jerusalem. First principle: the exile of the sin-offering is the address of the cross — let us go forth to Him without the camp.',
    sourceKeywords: ['sanctify the people with his own blood', 'suffered without the gate'],
    fulfillmentKeywords: ['burn them without the camp'],
    terms: [],
  },

  // ── Hand-written expansion: Daniel ──────────────────────────────────────
  'dan-2-35': {
    title: 'The Stone That Smote the Image Became a Great Mountain',
    principle:
      'The image of empires falls to chaff while the stone fills the earth. First principle: human kingdoms are one statue; God\'s kingdom is a growing mountain — cut without hands, unstoppable in growth.',
    sourceKeywords: ['broken to pieces together', 'became like the chaff', 'filled the whole earth'],
    fulfillmentKeywords: ['shall the God of heaven set up a kingdom'],
    terms: [],
  },
  'dan-2-45': {
    title: 'A Stone Cut Out Without Hands',
    principle:
      'The interpretation is certain: God makes known what shall come hereafter. First principle: the kingdom is divine work — without hands — and the dream\'s certainty anchors faith against empire\'s confidence.',
    sourceKeywords: ['cut out of the mountain without hands', 'the dream is certain', 'the interpretation thereof sure'],
    fulfillmentKeywords: ['a stone cut out without hands'],
    terms: [],
  },
  'dan-7-10': {
    title: 'The Judgment Was Set, and the Books Were Opened',
    principle:
      'The Ancient of Days sits: thousand thousands minister, and the books open. First principle: heaven\'s courtroom precedes the kingdom — the record is read before the verdict and dominion are given to the Son.',
    sourceKeywords: ['thousand thousands ministered', 'ten thousand times ten thousand', 'the books were opened'],
    fulfillmentKeywords: ['the judgment was set', 'the books were opened'],
    terms: [],
  },
  'dan-7-18': {
    title: 'The Saints Shall Take the Kingdom',
    principle:
      'The saints of the Most High possess the kingdom for ever. First principle: persecution\'s arc ends in possession — the little horn loses, the saints inherit.',
    sourceKeywords: ['saints of the most High', 'take the kingdom', 'for ever and ever'],
    fulfillmentKeywords: ['the saints of the most High shall take'],
    terms: [],
  },
  'dan-7-21': {
    title: 'The Horn Made War with the Saints',
    principle:
      'The boastful horn prevails against the saints — for a time. First principle: the war against the saints is real, violent, and temporary; it is written so the suffering will not surprise us.',
    sourceKeywords: ['the same horn made war', 'prevailed against them'],
    fulfillmentKeywords: ['to make war with the saints', 'prevailed against them'],
    terms: [],
  },
  'dan-7-25': {
    title: 'He Shall Think to Change Times and Laws',
    principle:
      'The little power speaks against the Most High, wears out the saints, and holds sway for a time, times, and a dividing of time. First principle: prophetic time is bounded — the wear-out has a stopwatch on it.',
    sourceKeywords: ['speak great words', 'wear out the saints', 'a time and times and the dividing of time'],
    fulfillmentKeywords: ['time, times, and an half'],
    terms: [],
  },
  'dan-7-26': {
    title: 'The Judgment Shall Sit, and They Shall Take Away His Dominion',
    principle:
      'The court sits; the persecutor\'s dominion is consumed unto the end. First principle: every blasphemous power has a scheduled end — the same judgment that vindicates saints removes beasts.',
    sourceKeywords: ['the judgment shall sit', 'take away his dominion', 'consume and destroy it unto the end'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-7-27': {
    title: 'The Kingdom Given to the People of the Saints',
    principle:
      'Dominion under the whole heaven passes to the saints of the Most High — an everlasting kingdom, all dominions serving Him. First principle: the end is not the beast\'s empire but the saints\' inheritance under the Son of man.',
    sourceKeywords: ['kingdom and dominion', 'people of the saints of the most High', 'everlasting kingdom'],
    fulfillmentKeywords: ['given to the saints', 'everlasting kingdom'],
    terms: [],
  },
  'dan-8-11': {
    title: 'He Magnified Himself to the Prince of the Host',
    principle:
      'The daily sacrifice is taken away and the sanctuary cast down by the self-exalting power. First principle: the war against God wears a religious face — the desecration of worship is prophecy\'s center stage.',
    sourceKeywords: ['magnified himself', 'the prince of the host', 'the place of his sanctuary was cast down'],
    fulfillmentKeywords: ['stand in the holy place'],
    terms: [],
  },
  'dan-8-17': {
    title: 'Understand, O Son of Man: at the Time of the End',
    principle:
      'Gabriel lifts the fallen Daniel: the vision belongs to the time of the end. First principle: apocalyptic vision is for understanding, not entertainment — the appointed time makes sense of the symbols.',
    sourceKeywords: ['Understand, O son of man', 'at the time of the end shall be the vision'],
    fulfillmentKeywords: ['the vision is for an appointed time'],
    terms: [],
  },
  'dan-10-6': {
    title: 'His Face as the Appearance of Lightning',
    principle:
      'The glorious man by the river — beryl body, fiery eyes, brass feet, multitude voice. First principle: theophany before the apocalypse: the messenger\'s glory certifies the message\'s weight.',
    sourceKeywords: ['appearance of lightning', 'eyes as lamps of fire', 'voice of his words like the voice of a multitude'],
    fulfillmentKeywords: ['countenance like lightning', 'eyes as lamps of fire'],
    terms: [],
  },
  'dan-10-13': {
    title: 'The Prince of Persia Withstood Me One and Twenty Days',
    principle:
      'Behind the curtain of empires, princes contend — Michael comes to help. First principle: prayer on earth touches war in heaven; the delay of answers is not the absence of angels.',
    sourceKeywords: ['the prince of the kingdom of Persia', 'withstood me', 'Michael came to help me'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-10-21': {
    title: 'That Which Is Noted in the Scripture of Truth',
    principle:
      'Gabriel will show what is written in the true record; Michael stands as your prince. First principle: history is written down before it happens — the scripture of truth is the script empires must play out.',
    sourceKeywords: ['the scripture of truth', 'none that holdeth with me', 'Michael your prince'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-11-31': {
    title: 'They Shall Place the Abomination That Maketh Desolate',
    principle:
      'Arms pollute the sanctuary and end the daily sacrifice — the desecration Jesus tells readers to watch for. First principle: Daniel 11 is Matthew 24\'s source text; the abomination is scheduled, and flight is commanded.',
    sourceKeywords: ['pollute the sanctuary of strength', 'take away the daily sacrifice', 'abomination that maketh desolate'],
    fulfillmentKeywords: ['abomination of desolation'],
    terms: [],
  },
  'dan-12-1': {
    title: 'A Time of Trouble Such as Never Was',
    principle:
      'Michael stands up; unparalleled trouble comes; everyone written in the book is delivered. First principle: the worst time in history has a register of names — deliverance is written, not random.',
    sourceKeywords: ['Michael stand up', 'a time of trouble', 'found written in the book'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-12-4': {
    title: 'Shut Up the Words and Seal the Book',
    principle:
      'The book is sealed until the time of the end, when knowledge runs to and fro. First principle: prophecy has a shelf-life of obscurity — the seal opens when the world is ready to run with it.',
    sourceKeywords: ['shut up the words', 'seal the book', 'knowledge shall be increased'],
    fulfillmentKeywords: ['seal the book, even to the time of the end'],
    terms: [],
  },
  'dan-12-7': {
    title: 'A Time, Times, and an Half',
    principle:
      'The oath-sworn duration: when the scattering of the holy people\'s power is accomplished, all is finished. First principle: the man in linen swears the end of persecution — three-and-a-half times, then done.',
    sourceKeywords: ['sware by him that liveth for ever', 'a time, times, and an half', 'all these things shall be finished'],
    fulfillmentKeywords: ['time, and times, and an half'],
    terms: [],
  },
  'dan-12-11': {
    title: 'From the Daily Sacrifice Taken Away — a Thousand Two Hundred and Ninety Days',
    principle:
      'The abomination\'s setup begins a counted span. First principle: God numbers the desolation — day counts mean the horror has measurable, curfew-able bounds.',
    sourceKeywords: ['the daily sacrifice shall be taken away', 'abomination that maketh desolate', 'thousand two hundred and ninety days'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-12-12': {
    title: 'Blessed Is He That Waiteth',
    principle:
      'A beatitude attaches to those who endure to the thousand three hundred and five and thirty days. First principle: waiting is blessedness when the timeline is God\'s — endurance has a numbered horizon.',
    sourceKeywords: ['Blessed is he that waiteth', 'thousand three hundred and five and thirty days'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-12-13': {
    title: 'Thou Shalt Rest, and Stand in Thy Lot',
    principle:
      'Daniel is dismissed to rest and to rise for his portion at the end of days. First principle: the faithful die with a reserved lot — rest now, standing at the end.',
    sourceKeywords: ['go thou thy way till the end be', 'thou shalt rest', 'stand in thy lot'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Exodus (added anchors) ──────────────────────
  'exo-3-2': {
    title: 'The Bush Burned with Fire, and Was Not Consumed',
    principle:
      'The Angel of the LORD appears in flame that does not devour. First principle: God dwells with the afflicted without being burned by their fire. the church\'s bush and the covenant\'s endurance are one picture.',
    sourceKeywords: ['angel of the LORD', 'flame of fire', 'the bush was not consumed'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'exo-3-6': {
    title: 'I Am the God of Abraham, Isaac, and Jacob',
    principle:
      'God names Himself by covenant generations. Moses hides his face. First principle. the God of the living patriarchs binds Himself to a family line that runs to Christ. and reverence is the first response.',
    sourceKeywords: ['the God of thy father', 'God of Abraham', 'hid his face'],
    fulfillmentKeywords: ['I am the God of Abraham'],
    terms: [],
  },
  'exo-3-13': {
    title: 'What Is His Name? What Shall I Say?',
    principle:
      'Moses asks for the Name. the answer is I AM THAT I AM. First principle. the self-existent God gives a name that outlasts every crisis. and Jesus claims it. before Abraham was, I AM.',
    sourceKeywords: ['What is his name', 'what shall I say unto them'],
    fulfillmentKeywords: ['I AM THAT I AM', 'before Abraham was, I am'],
    terms: [],
  },
  'exo-3-15': {
    title: 'This Is My Name for Ever, My Memorial to All Generations',
    principle:
      'The LORD of the fathers is the perpetual memorial-name. First principle. deliverance comes in the name that never changes. the memorial every generation must remember.',
    sourceKeywords: ['this is my name for ever', 'my memorial unto all generations'],
    fulfillmentKeywords: ['this is my name for ever'],
    terms: [],
  },
  'exo-4-22': {
    title: 'Israel Is My Son, Even My Firstborn',
    principle:
      'God names the nation His firstborn before Pharaoh. First principle. sonship is the ground of exodus demands. and the title, kept in Israel, finds its fullness in the only-begotten Son called out of Egypt.',
    sourceKeywords: ['Israel is my son', 'my firstborn', 'let my son go'],
    fulfillmentKeywords: ['Out of Egypt have I called my son'],
    terms: [],
  },
  'exo-12-5': {
    title: 'Your Lamb Shall Be Without Blemish',
    principle:
      'The Passover lamb must be perfect, male, first-year. First principle. substitution requires spotlessness. the blood that saves is the blood of the unblemished.',
    sourceKeywords: ['without blemish', 'a male of the first year', 'from the sheep, or from the goats'],
    fulfillmentKeywords: ['lamb without blemish and without spot'],
    terms: [],
  },
  'exo-12-6': {
    title: 'The Whole Assembly Shall Kill It in the Evening',
    principle:
      'Kept until the fourteenth day, slain by all Israel at evening. First principle. the lamb is examined, then slain by the congregation. and the hours match the cross to the minute.',
    sourceKeywords: ['until the fourteenth day', 'the whole assembly', 'kill it in the evening'],
    fulfillmentKeywords: ['the preparation of the passover'],
    terms: [],
  },
  'exo-12-21': {
    title: 'Draw Out and Take You a Lamb',
    principle:
      'Moses commands each household to take the Passover lamb. First principle. deliverance is by applied sacrifice. a lamb taken, killed, and trusted in every home of faith.',
    sourceKeywords: ['Draw out and take you a lamb', 'kill the passover'],
    fulfillmentKeywords: ['Christ our passover is sacrificed for us'],
    terms: [],
  },
  'exo-12-27': {
    title: 'It Is the Sacrifice of the LORD\'S Passover',
    principle:
      'The memorial speech: He passed over the houses and delivered us. and the people bowed and worshipped. First principle. the passover is teaching by rehearsal. every generation tells the story of the blood that spared them.',
    sourceKeywords: ['the sacrifice of the LORD\'S passover', 'he passed over the houses', 'bowed the head and worshipped'],
    fulfillmentKeywords: ['Christ our passover'],
    terms: [],
  },
  'exo-14-21': {
    title: 'The Waters Were Divided',
    principle:
      'Moses stretches out his hand. the east wind parts the sea all night. First principle. salvation\'s impossible moments are wind-and-obedience moments. God makes a road where there is no road.',
    sourceKeywords: ['stretched out his hand over the sea', 'a strong east wind', 'the waters were divided'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'exo-14-22': {
    title: 'The Waters Were a Wall unto Them',
    principle:
      'Israel walks through the sea on dry ground, walls of water on either side. First principle. baptism into the deliverer. Paul says they were baptized in the cloud and sea. is passage between held-back judgments.',
    sourceKeywords: ['went into the midst of the sea', 'upon the dry ground', 'a wall unto them'],
    fulfillmentKeywords: ['baptized unto Moses in the cloud and in the sea'],
    terms: [],
  },
  'exo-15-25': {
    title: 'The LORD Shewed Him a Tree',
    principle:
      'Bitter waters made sweet by a cast-in tree. a statute proved there. First principle. the tree turns Marah sweet. the first wilderness test answered by wood, the pattern of the cross\'s remedy.',
    sourceKeywords: ['shewed him a tree', 'the waters were made sweet', 'there he proved them'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'exo-16-14': {
    title: 'A Small Round Thing, as Small as the Hoar Frost',
    principle:
      'Bread from heaven lies on the wilderness floor each morning. First principle. daily bread is heaven\'s humility. small, round, sufficient. Jesus calls Himself the true manna.',
    sourceKeywords: ['upon the face of the wilderness', 'a small round thing', 'hoar frost'],
    fulfillmentKeywords: ['He gave them bread from heaven'],
    terms: [],
  },
  'exo-16-35': {
    title: 'They Did Eat Manna Forty Years',
    principle:
      'The supply held until the borders of Canaan. First principle. grace is tested by duration. the bread never failed for four decades, until the promised land replaced it.',
    sourceKeywords: ['did eat manna forty years', 'until they came unto the borders'],
    fulfillmentKeywords: ['and did eat manna', 'the true bread from heaven'],
    terms: [],
  },
  'exo-17-12': {
    title: 'Aaron and Hur Stayed Up His Hands',
    principle:
      'Moses\' lifted hands are supported until sunset, and the battle is won. First principle. intercession is corporate. the war is carried by held-up hands, not solo heroics.',
    sourceKeywords: ['Moses\' hands were heavy', 'stayed up his hands', 'steady until the going down of the sun'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'exo-19-5': {
    title: 'Ye Shall Be a Peculiar Treasure unto Me',
    principle:
      'Obedience to the covenant voice makes Israel God\'s treasure above all people. First principle. the covenant formula. obey, belong. is transferred in Christ to a people bought with blood.',
    sourceKeywords: ['if ye will obey my voice', 'keep my covenant', 'a peculiar treasure unto me'],
    fulfillmentKeywords: ['a peculiar people'],
    terms: [],
  },
  'exo-20-3': {
    title: 'Thou Shalt Have No Other Gods Before Me',
    principle:
      'The first commandment stakes exclusive worship. First principle: God begins the law where idolatry begins. with rival trust. Christ answers Satan with this very word.',
    sourceKeywords: ['no other gods before me'],
    fulfillmentKeywords: ['him only shalt thou serve'],
    terms: [],
  },
  'exo-25-8': {
    title: 'Let Them Make Me a Sanctuary, That I May Dwell Among Them',
    principle:
      'The tabernacle is God\'s invitation to neighborhood. First principle. the sanctuary is not for God\'s benefit but for nearness. the type of the Word tabernacling among us.',
    sourceKeywords: ['make me a sanctuary', 'that I may dwell among them'],
    fulfillmentKeywords: ['the Word was made flesh, and dwelt among us'],
    terms: [],
  },
  'exo-28-36': {
    title: 'HOLINESS TO THE LORD Engraved on Gold',
    principle:
      'The high priest wears the engraved plate on his forehead. First principle. the priest carries holiness visibly for the people. Christ the High Priest bears the name perfectly.',
    sourceKeywords: ['a plate of pure gold', 'like the engravings of a signet', 'HOLINESS TO THE LORD'],
    fulfillmentKeywords: ['holy, harmless, undefiled'],
    terms: [],
  },
  'exo-29-45': {
    title: 'I Will Dwell Among the Children of Israel',
    principle:
      'The covenant summit: God dwelling with His redeemed. First principle. all the sacrifices and furnishings aim at one sentence. I will be their God. the tabernacle is friendship in architecture.',
    sourceKeywords: ['I will dwell among', 'and will be their God'],
    fulfillmentKeywords: ['God with them'],
    terms: [],
  },
  'exo-30-30': {
    title: 'Anoint Aaron and His Sons for the Priest\'s Office',
    principle:
      'Oil consecrates the priesthood. First principle. ministry is by anointing, not appointment alone. the Spirit sets apart, as Christ was anointed to preach and to priest.',
    sourceKeywords: ['anoint Aaron and his sons', 'consecrate them', 'the priest\'s office'],
    fulfillmentKeywords: ['The Spirit of the Lord is upon me'],
    terms: [],
  },
  'exo-31-18': {
    title: 'Tables of Stone, Written with the Finger of God',
    principle:
      'The law comes from God\'s own finger on stone. First principle. the writing would move from stone to flesh. tablets of the heart by the Spirit, promised through the prophets.',
    sourceKeywords: ['two tables of testimony', 'tables of stone', 'written with the finger of God'],
    fulfillmentKeywords: ['written not with ink, but with the Spirit'],
    terms: [],
  },
  'exo-33-18': {
    title: 'I Beseech Thee, Shew Me Thy Glory',
    principle:
      'Moses asks for more than mission. he asks for God. First principle. the greatest request a believer can make is to see glory. the answer is goodness proclaimed and a cleft-rock hiding.',
    sourceKeywords: ['I beseech thee', 'shew me thy glory'],
    fulfillmentKeywords: ['we beheld his glory', 'the glory as of the only begotten'],
    terms: [],
  },
  'exo-33-19': {
    title: 'I Will Proclaim the Name of the LORD Before Thee',
    principle:
      'Goodness passes by. grace and mercy are declared as God\'s sovereign character. First principle. the Name is preached before it is seen. and Paul quotes it to defend God\'s freedom in election.',
    sourceKeywords: ['all my goodness pass before thee', 'proclaim the name of the LORD', 'shew mercy on whom I will shew mercy'],
    fulfillmentKeywords: ['I will have mercy on whom I will have mercy'],
    terms: [],
  },
  'exo-34-6': {
    title: 'The LORD God, Merciful and Gracious',
    principle:
      'The thirteen-attribute proclamation. compassionate, longsuffering, abundant in goodness and truth. First principle. this is the Bible\'s central self-portrait of God. repeated across Scripture and fulfilled in Christ\'s face.',
    sourceKeywords: ['The LORD, The LORD God', 'merciful and gracious', 'abundant in goodness and truth'],
    fulfillmentKeywords: ['the fullness of the Godhead bodily'],
    terms: [],
  },
  'exo-34-28': {
    title: 'Forty Days and Forty Nights Without Bread',
    principle:
      'Moses fasts with the LORD and receives the covenant words. First principle. the lawgiver\'s fast foreshadows the greater Lawgiver\'s forty days. both sustained by the Word of the covenant.',
    sourceKeywords: ['forty days and forty nights', 'neither eat bread', 'the ten commandments'],
    fulfillmentKeywords: ['fasted forty days and forty nights'],
    terms: [],
  },
  'exo-34-34': {
    title: 'He Took the Vail Off Until He Came Out',
    principle:
      'Moses unveils before the LORD, veils before the people. First principle. the ministry of the fading glory gives way to the Spirit\'s lasting glory. in Christ the vail is done away.',
    sourceKeywords: ['he took the vail off', 'spake unto the children of Israel', 'which he was commanded'],
    fulfillmentKeywords: ['the vail is done away in Christ'],
    terms: [],
  },
  'exo-40-34': {
    title: 'The Glory of the LORD Filled the Tabernacle',
    principle:
      'The cloud covers the finished tent. the glory fills it. First principle. when the dwelling is done as directed, the Presence moves in. obedience completes into Shekinah.',
    sourceKeywords: ['a cloud covered the tent', 'the glory of the LORD filled the tabernacle'],
    fulfillmentKeywords: ['the Word was made flesh, and dwelt among us'],
    terms: [],
  },
  // ── Hand-written expansion: Revelation ──────────────────────────────────
  'rev-1-5': {
    title: 'The Faithful Witness, First Begotten of the Dead',
    principle:
      'Jesus is named faithful witness, first-begotten from the dead, prince of earth\'s kings — loving us and washing us in His own blood. First principle: three titles, one Person — prophet, risen firstfruits, sovereign heir.',
    sourceKeywords: ['faithful witness', 'first begotten of the dead', 'prince of the kings', 'washed us from our sins'],
    fulfillmentKeywords: ['firstborn of every creature', 'the firstfruits of them that slept'],
    terms: [],
  },
  'rev-1-6': {
    title: 'Hath Made Us Kings and Priests',
    principle:
      'The washing Lamb makes a kingdom of priests to His God and Father. First principle: Exodus 19\'s covenant vocation transfers to the church — a blood-bought people given both throne and altar roles.',
    sourceKeywords: ['kings and priests unto God', 'to him be glory and dominion'],
    fulfillmentKeywords: ['a kingdom of priests, and an holy nation'],
    terms: [],
  },
  'rev-1-8': {
    title: 'I Am Alpha and Omega, the Almighty',
    principle:
      'The Lord who is, was, and is to come names Himself the alphabet and the end of all things. First principle: the God of Isaiah\'s titles is the speaker here — beginning and ending are His alone.',
    sourceKeywords: ['Alpha and Omega', 'the beginning and the ending', 'the Almighty'],
    fulfillmentKeywords: ['I the LORD, the first, and with the last'],
    terms: [],
  },
  'rev-1-11': {
    title: 'What Thou Seest, Write in a Book',
    principle:
      'The voice commands the writing and names the seven churches of Asia. First principle: revelation is entrusted to writing and to churches — the canon cycle begins and ends with a book.',
    sourceKeywords: ['I am Alpha and Omega', 'write in a book', 'the seven churches'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'rev-1-13': {
    title: 'One Like unto the Son of Man',
    principle:
      'Among the candlesticks walks a Son-of-man figure in priestly garment and golden girdle — Daniel 7 and Ezekiel 1 fused. First principle: the glorified Christ is both Priest tending lamps and Judge walking among His churches.',
    sourceKeywords: ['one like unto the Son of man', 'garment down to the foot', 'a golden girdle'],
    fulfillmentKeywords: ['one like the Son of man came with the clouds', 'his body also was like the beryl'],
    terms: [],
  },
  'rev-1-17': {
    title: 'Fear Not; I Am the First and the Last',
    principle:
      'John falls as dead; the glorified Christ lays a right hand on him and speaks Isaiah\'s self-title. First principle: the same hand that touched Daniel and the disciples touches the seer — divine identity plus personal tenderness.',
    sourceKeywords: ['I fell at his feet as dead', 'Fear not', 'I am the first and the last'],
    fulfillmentKeywords: ['Fear not, Daniel', 'I the LORD, the first'],
    terms: [],
  },
  'rev-2-7': {
    title: 'To Him That Overcometh Will I Give the Tree of Life',
    principle:
      'The Eden tree, guarded since the fall, is promised to overcomers. First principle: the church\'s promises are Genesis promises — paradise regained by the Conqueror for the conquering.',
    sourceKeywords: ['he that hath an ear', 'to him that overcometh', 'the tree of life'],
    fulfillmentKeywords: ['the tree of life also in the midst of the garden', 'lest he put forth his hand'],
    terms: [],
  },
  'rev-2-17': {
    title: 'The Hidden Manna and a White Stone with a New Name',
    principle:
      'Overcomers eat from the hidden store and receive a private name. First principle: wilderness bread preserved in heaven, and an identity known between God and the receiver.',
    sourceKeywords: ['the hidden manna', 'a white stone', 'a new name written'],
    fulfillmentKeywords: ['I will rain bread from heaven'],
    terms: [],
  },
  'rev-2-23': {
    title: 'I Am He Which Searcheth the Reins and Hearts',
    principle:
      'The Son claims the searcher-of-hearts title and repays according to works. First principle: God\'s incommunicable knowledge of hearts belongs to Jesus — the churches are searched, not surveyed.',
    sourceKeywords: ['searcheth the reins and hearts', 'give unto every one of you according to your works'],
    fulfillmentKeywords: ['I the LORD search the heart'],
    terms: [],
  },
  'rev-2-27': {
    title: 'He Shall Rule Them with a Rod of Iron',
    principle:
      'Psalm 2\'s iron scepter is delegated to the overcomer — even as I received of my Father. First principle: messianic dominion is shared with the faithful; the Son\'s inheritance includes co-regents.',
    sourceKeywords: ['rule them with a rod of iron', 'vessels of a potter', 'even as I received of my Father'],
    fulfillmentKeywords: ['thou shalt break them with a rod of iron'],
    terms: [],
  },
  'rev-2-28': {
    title: 'And I Will Give Him the Morning Star',
    principle:
      'Balaam\'s star out of Jacob is Christ\'s gift to victors. First principle: the Star promised over Israel becomes the dawn-pledge given to every overcomer — He gives Himself.',
    sourceKeywords: ['I will give him the morning star'],
    fulfillmentKeywords: ['there shall come a Star out of Jacob', 'a light that shineth'],
    terms: [],
  },
  'rev-3-5': {
    title: 'I Will Not Blot Out His Name out of the Book of Life',
    principle:
      'White raiment, an unblotted name, and confession before the Father. First principle: the Lamb keeps a book and speaks names aloud in heaven — the register is as personal as it is permanent.',
    sourceKeywords: ['clothed in white raiment', 'the book of life', 'I will confess his name'],
    fulfillmentKeywords: ['whosoever was not found written in the book of life'],
    terms: [],
  },
  'rev-3-7': {
    title: 'He That Hath the Key of David',
    principle:
      'The holy and true One holds Eliakim\'s key — open, and none shut. First principle: the door of the kingdom answers to David\'s throne; Christ opens what no opposition can close.',
    sourceKeywords: ['he that is holy, he that is true', 'the key of David', 'openeth, and no man shutteth'],
    fulfillmentKeywords: ['the key of the house of David'],
    terms: [],
  },
  'rev-3-18': {
    title: 'Buy of Me Gold Tried in the Fire',
    principle:
      'Laodicea is counselled to real wealth, white raiment, and eyesalve. First principle: the self-rich church needs purchased grace — garments for shame, sight for blindness, gold for poverty.',
    sourceKeywords: ['gold tried in the fire', 'white raiment', 'anoint thine eyes with eyesalve'],
    fulfillmentKeywords: ['he hath clothed me with the garments of salvation'],
    terms: [],
  },
  'rev-3-21': {
    title: 'I Will Grant to Sit with Me in My Throne',
    principle:
      'As Christ overcame and sat with the Father, overcomers sit with Him. First principle: the throne is shared the way the suffering was shared — the overcomer\'s seat is purchased by the Overcomer.',
    sourceKeywords: ['to him that overcometh', 'sit with me in my throne', 'as I also overcame'],
    fulfillmentKeywords: ['Sit thou at my right hand'],
    terms: [],
  },
  'rev-4-8': {
    title: 'Holy, Holy, Holy, Lord God Almighty',
    principle:
      'The four living creatures rest not day and night, chanting Isaiah\'s trisagion. First principle: heaven\'s liturgy is timeless and triple-holy — the which-was-and-is-and-is-to-come God of Exodus and Isaiah.',
    sourceKeywords: ['Holy, holy, holy', 'rest not day and night', 'which was, and is, and is to come'],
    fulfillmentKeywords: ['Holy, holy, holy, is the LORD of hosts'],
    terms: [],
  },
  'rev-5-6': {
    title: 'A Lamb as It Had Been Slain',
    principle:
      'In the throne\'s midst stands a slain Lamb with seven horns and seven eyes. First principle: the throne\'s center is a sacrifice — omnipotence and offering are one sight.',
    sourceKeywords: ['a Lamb as it had been slain', 'seven horns', 'seven eyes'],
    fulfillmentKeywords: ['he is brought as a lamb to the slaughter'],
    terms: [],
  },
  'rev-5-9': {
    title: 'Thou Hast Redeemed Us to God by Thy Blood',
    principle:
      'The new song names the purchase: slain, redeeming out of every kindred, tongue, people, and nation. First principle: the worthiness of the Lamb is a redemption song with a global roster.',
    sourceKeywords: ['Thou art worthy', 'hast redeemed us to God by thy blood', 'every kindred, and tongue'],
    fulfillmentKeywords: ['he shall see of the travail', 'purchased with his own blood'],
    terms: [],
  },
  'rev-5-10': {
    title: 'Kings and Priests, and We Shall Reign on the Earth',
    principle:
      'The redeemed are made a reigning priesthood. First principle: Eden\'s commission and Sinai\'s calling conclude in earth-reign — not escape from the world but lordship restored in it.',
    sourceKeywords: ['made us unto our God kings and priests', 'we shall reign on the earth'],
    fulfillmentKeywords: ['a kingdom of priests, and an holy nation'],
    terms: [],
  },
  'rev-5-12': {
    title: 'Worthy Is the Lamb That Was Slain',
    principle:
      'Seven-fold praise answers the slain Lamb: power, riches, wisdom, strength, honour, glory, blessing. First principle: heaven\'s arithmetic — the Lamb who lost everything receives everything.',
    sourceKeywords: ['Worthy is the Lamb that was slain', 'power, and riches, and wisdom'],
    fulfillmentKeywords: ['Judah is a lion\'s whelp', 'he shall have dominion'],
    terms: [],
  },
  'rev-5-13': {
    title: 'Every Creature... Blessing, and Honour, and Glory',
    principle:
      'All creation joins the doxology to the Enthroned and the Lamb. First principle: the end of prophecy is universal worship — Philippians 2\'s every-tongue confession in apocalyptic panorama.',
    sourceKeywords: ['every creature', 'Blessing, and honour, and glory, and power', 'unto the Lamb for ever'],
    fulfillmentKeywords: ['every thing that hath breath praise the LORD'],
    terms: [],
  },
  'rev-7-9': {
    title: 'A Great Multitude of All Nations',
    principle:
      'The uncountable multitude — every nation, kindred, people, tongue — stands before the throne with palms. First principle: Abraham\'s stars-and-sand promise fills a throne room; the covenant reached the whole world.',
    sourceKeywords: ['a great multitude, which no man could number', 'all nations, and kindreds', 'clothed with white robes'],
    fulfillmentKeywords: ['in thy seed shall all the nations', 'look toward heaven and tell the stars'],
    terms: [],
  },
  'rev-7-14': {
    title: 'Washed Their Robes in the Blood of the Lamb',
    principle:
      'The great-tribulation multitude comes out with white robes. First principle: stain removal is by blood, not by suffering — tribulation marks the path, the Lamb\'s blood does the washing.',
    sourceKeywords: ['came out of great tribulation', 'washed their robes', 'made them white in the blood'],
    fulfillmentKeywords: ['though your sins be as scarlet', 'they shall be white as snow'],
    terms: [],
  },
  'rev-7-17': {
    title: 'The Lamb Shall Feed Them',
    principle:
      'The throne-Lamb shepherds to living fountains, and God wipes away tears. First principle: the Shepherd of Psalm 23 is the Lamb on the throne — every tear has an appointed end.',
    sourceKeywords: ['the Lamb... shall feed them', 'living fountains of waters', 'wipe away all tears'],
    fulfillmentKeywords: ['He maketh me to lie down in green pastures', 'He will swallow up death in victory'],
    terms: [],
  },
  'rev-11-15': {
    title: 'The Kingdoms of This World Are Become His',
    principle:
      'The seventh trumpet announces the transfer: our Lord\'s and His Christ\'s, reigning for ever. First principle: the direction of history is announced, not negotiated — Daniel 2 and 7 arrive on schedule.',
    sourceKeywords: ['the seventh angel sounded', 'kingdoms of this world are become', 'he shall reign for ever and ever'],
    fulfillmentKeywords: ['shall the God of heaven set up a kingdom', 'dominion... was given him'],
    terms: [],
  },
  'rev-12-5': {
    title: 'She Brought Forth a Man Child',
    principle:
      'The woman\'s child rules all nations with a rod of iron and is caught up to God\'s throne. First principle: Genesis 3:15\'s Seed and Psalm 2\'s Son are the same Man — born, caught up, destined to rule.',
    sourceKeywords: ['a man child', 'to rule all nations with a rod of iron', 'caught up unto God, and to his throne'],
    fulfillmentKeywords: ['it shall bruise thy head', 'thou shalt break them with a rod of iron'],
    terms: [],
  },
  'rev-12-9': {
    title: 'That Old Serpent, Called the Devil',
    principle:
      'The dragon is unmasked: the ancient serpent of Genesis, the deceiver of the whole world, cast out with his angels. First principle: Revelation names the snake behind every deception — and announces his eviction.',
    sourceKeywords: ['that old serpent', 'the Devil, and Satan', 'deceiveth the whole world', 'cast out'],
    fulfillmentKeywords: ['the serpent was more subtil', 'It shall bruise thy head'],
    terms: [],
  },
  'rev-12-10': {
    title: 'Now Is Come Salvation — the Accuser Is Cast Down',
    principle:
      'Heaven voices the verdict: salvation, strength, kingdom, and the power of His Christ. First principle: the accuser\'s fall is the believer\'s assurance — the courtroom is won before the battle ends.',
    sourceKeywords: ['Now is come salvation', 'the power of his Christ', 'the accuser of our brethren is cast down'],
    fulfillmentKeywords: ['Satan also came among them', 'The LORD rebuke thee, O Satan'],
    terms: [],
  },
  'rev-12-11': {
    title: 'They Overcame Him by the Blood of the Lamb',
    principle:
      'Victory over the dragon: the blood, the testimony, and lives not loved unto death. First principle: conquest is cruciform — blood applied, word spoken, life surrendered.',
    sourceKeywords: ['overcame him by the blood of the Lamb', 'the word of their testimony', 'loved not their lives'],
    fulfillmentKeywords: ['in all these things we are more than conquerors'],
    terms: [],
  },
  'rev-14-1': {
    title: 'The Lamb on Mount Sion, 144,000 with His Name',
    principle:
      'The sealed stand with the Lamb on Zion, His Father\'s name in their foreheads. First principle: the anti-mark — God\'s name where the beast writes his — marks the remnant as possession.',
    sourceKeywords: ['a Lamb stood on the mount Sion', 'an hundred forty and four thousand', 'his Father\'s name written in their foreheads'],
    fulfillmentKeywords: ['set a mark upon their foreheads'],
    terms: [],
  },
  'rev-14-4': {
    title: 'These Follow the Lamb Whithersoever He Goeth',
    principle:
      'The redeemed are undefiled, firstfruits to God and the Lamb. First principle: the mark of the sealed is mobility — following the Lamb anywhere — and consecration, firstfruits for God.',
    sourceKeywords: ['not defiled', 'follow the Lamb whithersoever he goeth', 'the firstfruits unto God'],
    fulfillmentKeywords: ['a chaste virgin unto Christ'],
    terms: [],
  },
  'rev-14-11': {
    title: 'The Smoke of Their Torment Ascendeth for Ever',
    principle:
      'Worship of the beast has unending consequence. First principle: the eternity of the warning is part of its mercy — Isaiah and Daniel\'s worm and fire frame the choice as ultimate.',
    sourceKeywords: ['the smoke of their torment', 'for ever and ever', 'the mark of his name'],
    fulfillmentKeywords: ['their worm shall not die', 'some to shame and everlasting contempt'],
    terms: [],
  },
  'rev-14-13': {
    title: 'Blessed Are the Dead Which Die in the Lord',
    principle:
      'The Spirit blesses the resting dead whose works follow. First principle: death in the Lord is not loss but rest with memory — labor ended, works accompanying.',
    sourceKeywords: ['Write, Blessed are the dead', 'die in the Lord', 'their works do follow them'],
    fulfillmentKeywords: ['thou shalt rest, and stand in thy lot'],
    terms: [],
  },
  'rev-15-3': {
    title: 'The Song of Moses and the Song of the Lamb',
    principle:
      'Sea-of-glass victors sing both songs: great and marvellous are thy works. First principle: the two covenants sing one doxology — the exodus song and the redemption song are finally one hymn.',
    sourceKeywords: ['the song of Moses the servant of God', 'the song of the Lamb', 'King of saints'],
    fulfillmentKeywords: ['Then sang Moses and the children of Israel'],
    terms: [],
  },
  'rev-15-4': {
    title: 'All Nations Shall Come and Worship Before Thee',
    principle:
      'Who shall not fear? The holiness of the Lord draws the nations\' worship. First principle: judgments are evangelistic — made manifest, they gather worshipers from every nation.',
    sourceKeywords: ['Who shall not fear thee', 'thou only art holy', 'all nations shall come and worship'],
    fulfillmentKeywords: ['all nations shall flow unto it'],
    terms: [],
  },
  'rev-19-7': {
    title: 'The Marriage of the Lamb Is Come',
    principle:
      'Heaven rejoices: the Wife has made herself ready. First principle: redemption\'s finale is a wedding — the betrothed, granted fine linen, the righteousness of saints.',
    sourceKeywords: ['the marriage of the Lamb is come', 'his wife hath made herself ready'],
    fulfillmentKeywords: ['as the bridegroom rejoiceth over the bride'],
    terms: [],
  },
  'rev-19-11': {
    title: 'Heaven Opened: a White Horse, Called Faithful and True',
    principle:
      'The Rider judges and makes war in righteousness. First principle: the Second Coming is not a repeat of Bethlehem — the faithful Witness returns as the righteous Warrior.',
    sourceKeywords: ['heaven opened', 'a white horse', 'Faithful and True', 'in righteousness he doth judge'],
    fulfillmentKeywords: ['he shall smite the earth with the rod of his mouth'],
    terms: [],
  },
  'rev-19-13': {
    title: 'His Name Is Called The Word of God',
    principle:
      'The vesture dipped in blood bears the oldest name of the Son. First principle: John\'s Gospel and John\'s apocalypse agree — the Rider is the preexistent Word, now revealed in war garb.',
    sourceKeywords: ['vesture dipped in blood', 'his name is called The Word of God'],
    fulfillmentKeywords: ['In the beginning was the Word'],
    terms: [],
  },
  'rev-19-15': {
    title: 'He Shall Rule Them with a Rod of Iron',
    principle:
      'A sword from His mouth smites nations; the winepress of God\'s wrath is trodden. First principle: Psalm 2 and Isaiah 63 converge on the day of the Lord — Shepherding and treading are the same scepter.',
    sourceKeywords: ['a sharp sword', 'smite the nations', 'rod of iron', 'treadeth the winepress'],
    fulfillmentKeywords: ['thou shalt break them with a rod of iron', 'I have trodden the winepress alone'],
    terms: [],
  },
  'rev-19-16': {
    title: 'KING OF KINGS, AND LORD OF LORDS',
    principle:
      'The name is written on vesture and thigh. First principle: every other crown in history is subordinate — the title is a verdict on all rival sovereignties.',
    sourceKeywords: ['KING OF KINGS, AND LORD OF LORDS', 'on his vesture and on his thigh'],
    fulfillmentKeywords: ['THE LORD OUR RIGHTEOUSNESS', 'the blessed and only Potentate'],
    terms: [],
  },
  'rev-20-2': {
    title: 'He Laid Hold on the Dragon and Bound Him',
    principle:
      'The old serpent is chained a thousand years. First principle: Genesis\'s head-crushing advances to a binding — deception of the nations suspended by an angelic key and chain.',
    sourceKeywords: ['laid hold on the dragon', 'that old serpent', 'bound him a thousand years'],
    fulfillmentKeywords: ['it shall bruise thy head'],
    terms: [],
  },
  'rev-20-6': {
    title: 'Blessed and Holy Is He That Hath Part in the First Resurrection',
    principle:
      'First-resurrection saints escape the second death and reign a thousand years as priests. First principle: resurrection order decides destiny — the first is priestly reign; the second is judicial death.',
    sourceKeywords: ['the first resurrection', 'the second death hath no power', 'reign with him a thousand years'],
    fulfillmentKeywords: ['many of them that sleep in the dust shall awake'],
    terms: [],
  },
  'rev-20-11': {
    title: 'A Great White Throne, and Him That Sat on It',
    principle:
      'Earth and heaven flee from the Judge\'s face; no place remains for them. First principle: the final judgment is a throne before it is a sentence — purity itself presides.',
    sourceKeywords: ['a great white throne', 'him that sat on it', 'the earth and the heaven fled away'],
    fulfillmentKeywords: ['the judgment was set, and the books were opened'],
    terms: [],
  },
  'rev-20-12': {
    title: 'The Books Were Opened, and Another Book, the Book of Life',
    principle:
      'The dead are judged by the books; the saved by the book of life. First principle: two registries — works recorded, names written — and the second decides the first.',
    sourceKeywords: ['the books were opened', 'the book of life', 'judged out of those things written'],
    fulfillmentKeywords: ['the books were opened'],
    terms: [],
  },
  'rev-21-2': {
    title: 'New Jerusalem Prepared as a Bride',
    principle:
      'The holy city descends from God, adorned for her husband. First principle: the end is not heaven going quiet but a city coming down — covenant union made municipal.',
    sourceKeywords: ['the holy city, new Jerusalem', 'coming down from God out of heaven', 'a bride adorned for her husband'],
    fulfillmentKeywords: ['as the bridegroom rejoiceth over the bride', 'thou shalt be called Hephzibah'],
    terms: [],
  },
  'rev-21-4': {
    title: 'God Shall Wipe Away All Tears',
    principle:
      'No death, sorrow, crying, or pain — former things passed away. First principle: Isaiah\'s swallow-up promise is personalized: tears are wiped by God\'s own hand, one grief at a time.',
    sourceKeywords: ['God shall wipe away all tears', 'no more death', 'former things are passed away'],
    fulfillmentKeywords: ['He will swallow up death in victory'],
    terms: [],
  },
  'rev-21-9': {
    title: 'Come Hither, I Will Shew Thee the Bride, the Lamb\'s Wife',
    principle:
      'The angel offers to show a bride and shows a city. First principle: the church is architecture in the end — people made place, covenant made city.',
    sourceKeywords: ['I will shew thee the bride', 'the Lamb\'s wife'],
    fulfillmentKeywords: ['thy Maker is thine husband'],
    terms: [],
  },
  'rev-21-14': {
    title: 'Twelve Foundations, the Apostles of the Lamb',
    principle:
      'The city wall rests on apostolic names. First principle: the church\'s foundation is historical — named men, once weak, now load-bearing forever.',
    sourceKeywords: ['twelve foundations', 'the names of the twelve apostles of the Lamb'],
    fulfillmentKeywords: ['built upon the foundation of the apostles and prophets'],
    terms: [],
  },
  'rev-21-23': {
    title: 'The Lamb Is the Light Thereof',
    principle:
      'No sun or moon is needed; God\'s glory lights the city. First principle: creation\'s lamps are retired — Isaiah 60 fulfilled in a Lamb-lit, ever-shining city.',
    sourceKeywords: ['no need of the sun', 'the glory of God did lighten it', 'the Lamb is the light thereof'],
    fulfillmentKeywords: ['the sun shall be no more thy light by day', 'the LORD shall be unto thee an everlasting light'],
    terms: [],
  },
  'rev-21-27': {
    title: 'There Shall in No Wise Enter Any Thing That Defileth',
    principle:
      'Only those written in the Lamb\'s book of life enter. First principle: the city\'s gate is a register — purity required, purity provided, names checked.',
    sourceKeywords: ['in no wise enter', 'whatsoever worketh abomination', 'the Lamb\'s book of life'],
    fulfillmentKeywords: ['there shall no more come into thee the uncircumcised'],
    terms: [],
  },
  'rev-22-1': {
    title: 'A Pure River of Water of Life',
    principle:
      'From the throne of God and the Lamb flows a crystal river. First principle: Eden\'s rivers and Ezekiel\'s temple stream converge — life now flows from a throne, not a garden.',
    sourceKeywords: ['a pure river of water of life', 'clear as crystal', 'out of the throne of God and of the Lamb'],
    fulfillmentKeywords: ['a river went out of Eden', 'waters of life'],
    terms: [],
  },
  'rev-22-2': {
    title: 'The Tree of Life, Yielding Fruit Every Month',
    principle:
      'The tree returns, twelve fruits, leaves for the healing of nations. First principle: what was guarded is granted — the forbidden tree becomes the free tree, its leaves for healing.',
    sourceKeywords: ['the tree of life', 'twelve manner of fruits', 'leaves... for the healing of the nations'],
    fulfillmentKeywords: ['the tree of life also in the midst of the garden'],
    terms: [],
  },
  'rev-22-3': {
    title: 'There Shall Be No More Curse',
    principle:
      'The curse of Eden is gone; the throne of God and the Lamb is in it. First principle: the Bible ends where it began, minus the curse — servants serve, faces are seen.',
    sourceKeywords: ['no more curse', 'the throne of God and of the Lamb', 'his servants shall serve him'],
    fulfillmentKeywords: ['cursed is the ground for thy sake'],
    terms: [],
  },
  'rev-22-4': {
    title: 'They Shall See His Face',
    principle:
      'His name is in their foreheads. First principle: the Moses-limit — no man can see My face — is lifted for the redeemed; the beatitude of purity becomes sight.',
    sourceKeywords: ['they shall see his face', 'his name shall be in their foreheads'],
    fulfillmentKeywords: ['Thou canst not see my face', 'there shall no man see me and live'],
    terms: [],
  },
  'rev-22-5': {
    title: 'No Night There; They Reign for Ever and Ever',
    principle:
      'No candle, no sun — the Lord God gives light, and they reign. First principle: the light of the first creation week never needed a sunset; now it never sets again.',
    sourceKeywords: ['no night there', 'the Lord God giveth them light', 'reign for ever and ever'],
    fulfillmentKeywords: ['the LORD shall be unto thee an everlasting light'],
    terms: [],
  },
  'rev-22-12': {
    title: 'I Come Quickly; and My Reward Is with Me',
    principle:
      'The coming One brings recompense according to work. First principle: the return is a payroll event — reward carried personally by the Returning One, as Isaiah promised.',
    sourceKeywords: ['I come quickly', 'my reward is with me', 'according as his work shall be'],
    fulfillmentKeywords: ['behold, his reward is with him', 'his work before him'],
    terms: [],
  },
  'rev-22-13': {
    title: 'I Am Alpha and Omega, the First and the Last',
    principle:
      'The title-bookends meet: the alphabet of creation is the punctuation of the end. First principle: the Lord of Isaiah 44 and 48 speaks in Revelation\'s last chapter — the book\'s claims are divine claims.',
    sourceKeywords: ['Alpha and Omega', 'the beginning and the end', 'the first and the last'],
    fulfillmentKeywords: ['I am the first, I also am the last'],
    terms: [],
  },
  'rev-22-14': {
    title: 'Blessed Are They That Do His Commandments',
    principle:
      'Right to the tree of life and entry through the gates. First principle: obedience is the key-ring of the new Eden — doing His commandments and living by His tree.',
    sourceKeywords: ['do his commandments', 'right to the tree of life', 'enter in through the gates'],
    fulfillmentKeywords: ['to him that overcometh will I give to eat'],
    terms: [],
  },
  'rev-22-17': {
    title: 'The Spirit and the Bride Say, Come',
    principle:
      'Whosoever will may take the water of life freely. First principle: the prophecy ends with an invitation, not a threat — thirst, come, drink, freely.',
    sourceKeywords: ['the Spirit and the bride say, Come', 'whosoever will', 'the water of life freely'],
    fulfillmentKeywords: ['Ho, every one that thirsteth, come ye to the waters'],
    terms: [],
  },
  'rev-22-18': {
    title: 'If Any Man Shall Add unto These Things',
    principle:
      'The prophecy closes with a plenary guard: no adding, no subtracting. First principle: Deuteronomy\'s warning is renewed over the completed canon — the book is whole, and its words are weighty.',
    sourceKeywords: ['If any man shall add', 'the plagues that are written in this book'],
    fulfillmentKeywords: ['Ye shall not add unto the word which I command you'],
    terms: [],
  },
  // ── Hand-written expansion: Psalms ──────────────────────────────────────
  'psa-2-2': {
    title: 'Kings Set Themselves Against His Anointed',
    principle:
      'The rulers take counsel against the LORD and against His anointed. First principle: the conspiracy of Psalm 2 convened at Calvary — Herod, Pilate, and the nations did exactly this, exactly as foretold.',
    sourceKeywords: ['kings of the earth', 'take counsel together', 'against his anointed'],
    fulfillmentKeywords: ['against thy holy child Jesus', 'gathered together'],
    terms: [],
  },
  'psa-2-6': {
    title: 'Yet Have I Set My King upon My Holy Hill',
    principle:
      'Man\'s rage does not cancel God\'s decree: My King is installed on Zion. First principle: the decree stands over the conspiracy — the cross that men meant as rejection God meant as enthronement.',
    sourceKeywords: ['Yet have I set my king', 'holy hill of Zion'],
    fulfillmentKeywords: ['Thou art my Son', 'whereof he hath given assurance'],
    terms: [],
  },
  'psa-2-7': {
    title: 'Thou Art My Son; This Day Have I Begotten Thee',
    principle:
      'The decree is declared to the Son Himself. First principle: begotten is a status decree, not a birthday — Paul and Hebrews apply it to the resurrection and the eternal generation alike.',
    sourceKeywords: ['I will declare the decree', 'Thou art my Son', 'this day have I begotten thee'],
    fulfillmentKeywords: ['God hath fulfilled the same', 'raised up Jesus again'],
    terms: [],
  },
  'psa-2-9': {
    title: 'Thou Shalt Break Them with a Rod of Iron',
    principle:
      'The Son\'s inheritance includes shattering rebel powers like pottery. First principle: the same rod promised to Messiah is delegated to overcomers — iron rule belongs to the faithful, not the faithless.',
    sourceKeywords: ['break them with a rod of iron', 'like a potter\'s vessel'],
    fulfillmentKeywords: ['he shall rule them with a rod of iron'],
    terms: [],
  },
  'psa-2-12': {
    title: 'Kiss the Son, Lest He Be Angry',
    principle:
      'Homage or wrath — Blessed are all they that put their trust in him. First principle: the psalm ends in gospel invitation; the angry Lamb is also the trusting soul\'s refuge.',
    sourceKeywords: ['Kiss the Son', 'perish from the way', 'put their trust in him'],
    fulfillmentKeywords: ['no other name', 'shall be saved'],
    terms: [],
  },
  'psa-8-2': {
    title: 'Out of the Mouth of Babes and Sucklings',
    principle:
      'God ordains strength from infant lips to still the enemy. First principle: perfected praise comes from the least — the children shouting Hosanna quoted this psalm back at the establishment.',
    sourceKeywords: ['mouth of babes and sucklings', 'ordained strength', 'still the enemy'],
    fulfillmentKeywords: ['perfected praise', 'Hosanna to the Son of David'],
    terms: [],
  },
  'psa-8-6': {
    title: 'Thou Hast Put All Things under His Feet',
    principle:
      'Adamic dominion is the psalm\'s theme; Hebrews finds it exhausted in Christ. First principle: the dominion Adam lost is visible again in the crowned Son — all things under feet, not yet all seen.',
    sourceKeywords: ['dominion over the works of thy hands', 'all things under his feet'],
    fulfillmentKeywords: ['hast put all things in subjection under his feet'],
    terms: [],
  },
  'psa-16-8': {
    title: 'I Have Set the LORD Always Before Me',
    principle:
      'The psalm of the Holy One\'s confidence: at my right hand, I shall not be moved. First principle: Peter preaches this as Christ\'s own settled trust — the resurrection certainty of the One at God\'s right hand.',
    sourceKeywords: ['set the LORD always before me', 'at my right hand', 'I shall not be moved'],
    fulfillmentKeywords: ['I foresaw the Lord always before my face'],
    terms: [],
  },
  'psa-18-2': {
    title: 'The LORD Is My Rock and My Fortress',
    principle:
      'David\'s deliverance song stacks the titles: rock, fortress, deliverer, horn of salvation. First principle: every rescue-name David used is fulfilled in the greater Son — the horn exalted for us.',
    sourceKeywords: ['my rock, and my fortress', 'my deliverer', 'horn of my salvation'],
    fulfillmentKeywords: ['horn of salvation', 'raised up in the house of David'],
    terms: [],
  },
  'psa-18-49': {
    title: 'I Will Give Thanks unto Thee among the Heathen',
    principle:
      'David confesses God among the nations. First principle: Paul quotes this to prove the plan always included Gentile praise — the Davidic victory song was mission prophecy.',
    sourceKeywords: ['give thanks unto thee, O LORD, among the heathen', 'sing praises unto thy name'],
    fulfillmentKeywords: ['confess to thee among the Gentiles'],
    terms: [],
  },
  'psa-19-4': {
    title: 'Their Line Is Gone Out through All the Earth',
    principle:
      'The sun-pavilion preaches day and night to the ends of the world. First principle: creation\'s voice is universal and wordless — Paul adopts it as the pattern of the gospel\'s worldwide sound.',
    sourceKeywords: ['gone out through all the earth', 'to the end of the world', 'a tabernacle for the sun'],
    fulfillmentKeywords: ['Have they not heard? Yes verily'],
    terms: [],
  },
  'psa-22-7': {
    title: 'They That See Me Laugh Me to Scorn',
    principle:
      'The mocked Sufferer foresees the lip-shooting crowd at Golgotha. First principle: mockery is part of the Passion script — rulers sneering is prophecy performed.',
    sourceKeywords: ['laugh me to scorn', 'shoot out the lip', 'shake the head'],
    fulfillmentKeywords: ['reviled him, wagging their heads', 'derided him also'],
    terms: [],
  },
  'psa-22-8': {
    title: 'Let Him Deliver Him, Seeing He Delighted in Him',
    principle:
      'The mockers quote the Sufferer\'s own faith back at Him. First principle: the taunt at the cross — He trusted in God; let Him deliver Him now — is a line-for-line fulfillment.',
    sourceKeywords: ['He trusted on the LORD', 'let him deliver him', 'he delighted in him'],
    fulfillmentKeywords: ['He trusted in God; let him deliver him now'],
    terms: [],
  },
  'psa-22-18': {
    title: 'They Part My Garments Among Them',
    principle:
      'Clothes divided, lots cast — written a millennium before the soldiers. First principle: the gambling squad at the cross did not know they were actors in Psalm 22.',
    sourceKeywords: ['part my garments', 'cast lots upon my vesture'],
    fulfillmentKeywords: ['parted his garments, casting lots'],
    terms: [],
  },
  'psa-22-22': {
    title: 'I Will Declare Thy Name unto My Brethren',
    principle:
      'The psalm of forsakenness pivots to congregation praise among brethren. First principle: the cross flows into family — the forsaken One becomes the confessing Brother in the midst of the church.',
    sourceKeywords: ['declare thy name unto my brethren', 'in the midst of the congregation'],
    fulfillmentKeywords: ['in the midst of the church will I sing praise', 'go to my brethren'],
    terms: [],
  },
  'psa-23-1': {
    title: 'The LORD Is My Shepherd; I Shall Not Want',
    principle:
      'Green pastures, still waters, the valley, the table — the Shepherd psalm. First principle: the LORD who shepherds is the Lamb who feeds — Christ claims the psalm and heaven fulfills it.',
    sourceKeywords: ['The LORD is my shepherd', 'I shall not want', 'valley of the shadow of death'],
    fulfillmentKeywords: ['I am the good shepherd', 'the Lamb shall feed them'],
    terms: [],
  },
  'psa-24-1': {
    title: 'The Earth Is the LORD\'S, and the Fulness Thereof',
    principle:
      'The world and its dwellers belong to God. First principle: ownership grounds worship and ethics alike — Paul quotes it against idol-food fears; the earth is the Father\'s, governed by the Son.',
    sourceKeywords: ['The earth is the LORD\'S', 'the fulness thereof', 'they that dwell therein'],
    fulfillmentKeywords: ['the earth is the Lord\'s, and the fulness thereof'],
    terms: [],
  },
  'psa-24-3': {
    title: 'Who Shall Ascend into the Hill of the LORD?',
    principle:
      'The ascent question demands clean hands and a pure heart. First principle: only purity sees God — the beatitude and the epistle both answer the question with Christ\'s own holiness.',
    sourceKeywords: ['Who shall ascend', 'hill of the LORD', 'stand in his holy place'],
    fulfillmentKeywords: ['Blessed are the pure in heart', 'holiness, without which no man shall see the Lord'],
    terms: [],
  },
  'psa-32-1': {
    title: 'Blessed Is He Whose Transgression Is Forgiven',
    principle:
      'The covered-sin psalm of forgiven David. First principle: Paul\'s proof-text for imputed righteousness — blessedness comes not from works but from the Lord not imputing iniquity.',
    sourceKeywords: ['Blessed is he whose transgression is forgiven', 'whose sin is covered'],
    fulfillmentKeywords: ['righteousness imputed without works', 'not impute sin'],
    terms: [],
  },
  'psa-34-8': {
    title: 'O Taste and See That the LORD Is Good',
    principle:
      'Experience is invited: taste and see; blessed is the trusting man. First principle: Peter applies the tasting to the Lord Himself — newborn babes desire the milk because they have tasted.',
    sourceKeywords: ['O taste and see', 'the LORD is good', 'blessed is the man that trusteth'],
    fulfillmentKeywords: ['If so be ye have tasted that the Lord is gracious'],
    terms: [],
  },
  'psa-35-19': {
    title: 'Let Not Them That Hate Me Without a Cause Rejoice',
    principle:
      'Wrongful enemies must not win the day. First principle: John binds the phrase to the world\'s hatred of Christ — the causeless hatred of the Righteous One was prophesied twice over.',
    sourceKeywords: ['mine enemies wrongfully', 'hate me without a cause'],
    fulfillmentKeywords: ['hated me without a cause'],
    terms: [],
  },
  'psa-37-11': {
    title: 'The Meek Shall Inherit the Earth',
    principle:
      'Delight in the LORD ends in abundance of peace. First principle: the second-beatitude source — meekness inherits; grasping loses. Christ blesses the very people the world overlooks.',
    sourceKeywords: ['the meek shall inherit the earth', 'abundance of peace'],
    fulfillmentKeywords: ['Blessed are the meek'],
    terms: [],
  },
  'psa-45-6': {
    title: 'Thy Throne, O God, Is for Ever and Ever',
    principle:
      'The King is addressed as God with an eternal right sceptre. First principle: the Father Himself addresses the Son as God — Hebrews reads the psalm as direct divine speech about the Son\'s throne.',
    sourceKeywords: ['Thy throne, O God', 'for ever and ever', 'a right sceptre'],
    fulfillmentKeywords: ['But unto the Son he saith, Thy throne, O God'],
    terms: [],
  },
  'psa-50-12': {
    title: 'If I Were Hungry, I Would Not Tell Thee',
    principle:
      'God needs nothing from sacrificial hands — the world is already His. First principle: thanksgiving, not feeding heaven, is the sacrifice God wants; the animals on a thousand hills are His.',
    sourceKeywords: ['If I were hungry', 'the world is mine', 'the fulness thereof'],
    fulfillmentKeywords: ['the earth is the Lord\'s'],
    terms: [],
  },
  'psa-53-1': {
    title: 'The Fool Hath Said in His Heart, There Is No God',
    principle:
      'The psalm twin of Psalm 14: corruption and none that doeth good. First principle: practical atheism is the universal diagnosis Paul cites — the denial is in the heart before it is in words.',
    sourceKeywords: ['The fool hath said', 'There is no God', 'none that doeth good'],
    fulfillmentKeywords: ['There is none righteous, no, not one'],
    terms: [],
  },
  'psa-69-9': {
    title: 'The Zeal of Thine House Hath Eaten Me Up',
    principle:
      'Devouring zeal and fallen reproaches — both quoted of Christ. First principle: the cleansing of the temple and the insults of the cross are the same psalm, the same Man.',
    sourceKeywords: ['zeal of thine house', 'hath eaten me up', 'reproaches of them that reproached thee'],
    fulfillmentKeywords: ['The zeal of thine house hath eaten me up', 'reproaches fell on me'],
    terms: [],
  },
  'psa-69-22': {
    title: 'Let Their Table Become a Snare',
    principle:
      'The imprecation of the Sufferer: welfare turned trap. First principle: Paul applies the table-snare to unbelieving Israel — safety itself becomes judgment where Messiah is refused.',
    sourceKeywords: ['their table become a snare', 'a trap'],
    fulfillmentKeywords: ['their table be made a snare'],
    terms: [],
  },
  'psa-69-25': {
    title: 'Let Their Habitation Be Desolate',
    principle:
      'The deserted dwelling and another taking office. First principle: Peter joins this to Judas — the field and the forfeited office both fulfill the imprecation psalm.',
    sourceKeywords: ['Let their habitation be desolate', 'let none dwell in their tents'],
    fulfillmentKeywords: ['his habitation be desolate', 'his bishoprick let another take'],
    terms: [],
  },
  'psa-72-8': {
    title: 'Dominion from Sea to Sea',
    principle:
      'Solomon\'s greater Son rules to the ends of the earth. First principle: the royal psalm reaches past any Israelite king — the kingdom that fills the earth is the Son\'s, forever.',
    sourceKeywords: ['dominion also from sea to sea', 'unto the ends of the earth'],
    fulfillmentKeywords: ['he shall reign for ever and ever', 'dominion from sea to sea'],
    terms: [],
  },
  'psa-78-2': {
    title: 'I Will Open My Mouth in a Parable',
    principle:
      'Asaph\'s dark sayings of old are Jesus\' teaching method. First principle: the parables are not a plan B — they are the psalm\'s own program for revealing and concealing.',
    sourceKeywords: ['open my mouth in a parable', 'dark sayings of old'],
    fulfillmentKeywords: ['I will open my mouth in parables'],
    terms: [],
  },
  'psa-78-24': {
    title: 'Had Rained Down Manna upon Them to Eat',
    principle:
      'Corn of heaven in the wilderness. First principle: the psalm feeds the crowd\'s question to Jesus — and His answer: Moses gave not the bread; my Father gives the true bread.',
    sourceKeywords: ['rained down manna', 'the corn of heaven'],
    fulfillmentKeywords: ['He gave them bread from heaven to eat'],
    terms: [],
  },
  'psa-79-9': {
    title: 'Help Us, O God of Our Salvation',
    principle:
      'Deliverance sought for the glory of the name — purge away our sins. First principle: the psalm binds rescue and pardon: for thy name\'s sake is the ground of both.',
    sourceKeywords: ['God of our salvation', 'the glory of thy name', 'purge away our sins'],
    fulfillmentKeywords: ['your sins are forgiven you for his name\'s sake'],
    terms: [],
  },
  'psa-82-6': {
    title: 'I Have Said, Ye Are Gods',
    principle:
      'Earthly judges are called gods as children of the Most High. First principle: Jesus uses the psalm\'s logic — if Scripture dignified failing judges, the Sanctified and Sent One cannot be a blasphemer for saying He is the Son.',
    sourceKeywords: ['Ye are gods', 'children of the most High'],
    fulfillmentKeywords: ['Is it not written in your law, I said, Ye are gods'],
    terms: [],
  },
  'psa-89-3': {
    title: 'I Have Sworn unto David My Servant',
    principle:
      'The chosen-covenant oath is struck with David. First principle: every throne promise in the New Testament leans on this sworn covenant — sworn mercy is unbreakable mercy.',
    sourceKeywords: ['a covenant with my chosen', 'sworn unto David my servant'],
    fulfillmentKeywords: ['The Lord God shall give unto him the throne'],
    terms: [],
  },
  'psa-89-4': {
    title: 'Thy Seed Will I Establish for Ever',
    principle:
      'The throne is built to all generations. First principle: the seed here is singular in destination and plural in blessing — Gabriel quotes the effect to Mary: of His kingdom there shall be no end.',
    sourceKeywords: ['Thy seed will I establish for ever', 'build up thy throne to all generations'],
    fulfillmentKeywords: ['he shall reign over the house of Jacob for ever'],
    terms: [],
  },
  'psa-89-34': {
    title: 'My Covenant Will I Not Break',
    principle:
      'The oath out of God\'s lips is unalterable. First principle: even covenant failure in David\'s line cannot void the word — the promise survives to be fulfilled in Christ.',
    sourceKeywords: ['My covenant will I not break', 'alter the thing that is gone out of my lips'],
    fulfillmentKeywords: ['wherein God... confirmed it by an oath'],
    terms: [],
  },
  'psa-89-36': {
    title: 'His Seed Shall Endure for Ever',
    principle:
      'The throne lasting as the sun before God. First principle: the people asked whether Christ is David\'s son — the psalm answers that the throne outlasts the sun, and Hebrews hands it to the Son.',
    sourceKeywords: ['His seed shall endure for ever', 'his throne as the sun'],
    fulfillmentKeywords: ['he shall be great... and the Lord God shall give'],
    terms: [],
  },
  'psa-90-2': {
    title: 'From Everlasting to Everlasting, Thou Art God',
    principle:
      'Before mountains were born, God was God. First principle: eternity precedes creation — Hebrews applies the unchanging-Creator psalm to the Son, the same yesterday and today.',
    sourceKeywords: ['Before the mountains were brought forth', 'from everlasting to everlasting', 'thou art God'],
    fulfillmentKeywords: ['thou art the same', 'thy years shall not fail'],
    terms: [],
  },
  'psa-91-11': {
    title: 'He Shall Give His Angels Charge over Thee',
    principle:
      'Guardian angels bear up the trusting one in all his ways. First principle: Satan quoted this at the temptation — the promise is for the path of obedience, never for testing God.',
    sourceKeywords: ['give his angels charge over thee', 'to keep thee in all thy ways'],
    fulfillmentKeywords: ['angels came and ministered unto him'],
    terms: [],
  },
  'psa-95-7': {
    title: 'We Are the People of His Pasture',
    principle:
      'Sheep of His hand are summoned: To day if ye will hear his voice. First principle: the flock has a Shepherd and a Today — hearing delayed is heart hardened.',
    sourceKeywords: ['the people of his pasture', 'the sheep of his hand', 'To day if ye will hear his voice'],
    fulfillmentKeywords: ['the Holy Ghost saith, To day'],
    terms: [],
  },
  'psa-95-11': {
    title: 'I Sware in My Wrath, They Shall Not Enter',
    principle:
      'The rest-forfeiting oath. First principle: the oath cuts both ways — the promise stands for believers, and the exclusion stands for unbelief; the rest remains for the people of God.',
    sourceKeywords: ['I sware in my wrath', 'they should not enter into my rest'],
    fulfillmentKeywords: ['they shall not enter into my rest'],
    terms: [],
  },
  'psa-97-7': {
    title: 'Worship Him, All Ye Gods',
    principle:
      'Idol-boasters are confounded while heaven\'s order worships the true One. First principle: Hebrews quotes it of the Son\'s advent — the first-begotten receives what idol-worshipers lose.',
    sourceKeywords: ['serve graven images', 'boast themselves of idols', 'worship him, all ye gods'],
    fulfillmentKeywords: ['let all the angels of God worship him'],
    terms: [],
  },
  'psa-102-25': {
    title: 'Of Old Hast Thou Laid the Foundation of the Earth',
    principle:
      'The perishing heavens versus the enduring Creator. First principle: Hebrews addresses the Son with this psalm — creation\'s Maker is the unchanging Person whose years have no end.',
    sourceKeywords: ['laid the foundation of the earth', 'the work of thy hands', 'they shall perish'],
    fulfillmentKeywords: ['Thou, Lord, in the beginning hast laid the foundation'],
    terms: [],
  },
  'psa-103-8': {
    title: 'The LORD Is Merciful and Gracious, Slow to Anger',
    principle:
      'The character-proclamation of Exodus 34 in psalm form. First principle: plenteous mercy is God\'s self-description — repeated across Scripture and embodied in Christ.',
    sourceKeywords: ['merciful and gracious', 'slow to anger', 'plenteous in mercy'],
    fulfillmentKeywords: ['The LORD, The LORD God, merciful and gracious'],
    terms: [],
  },
  'psa-104-4': {
    title: 'Who Maketh His Angels Spirits',
    principle:
      'Angels are winds and flaming fire — servants by nature. First principle: Hebrews uses the psalm to rank angels as ministering spirits under the Son, the worshipped Lord.',
    sourceKeywords: ['maketh his angels spirits', 'his ministers a flaming fire'],
    fulfillmentKeywords: ['Who maketh his angels spirits'],
    terms: [],
  },
  'psa-105-15': {
    title: 'Touch Not Mine Anointed, and Do My Prophets No Harm',
    principle:
      'The patriarchs are God-protected sojourners. First principle: the covenant line is guarded through danger — the anointed and the prophets carry a promise the nations learned to fear.',
    sourceKeywords: ['Touch not mine anointed', 'do my prophets no harm'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-105-17': {
    title: 'He Sent a Man Before Them, Even Joseph',
    principle:
      'Joseph sold as a servant, positioned ahead of famine. First principle: providence precedes — God sends the savior into Egypt before the family knows it needs one.',
    sourceKeywords: ['He sent a man before them', 'Joseph', 'sold for a servant'],
    fulfillmentKeywords: ['God did send me before you to preserve life'],
    terms: [],
  },
  'psa-105-19': {
    title: 'Until the Time That His Word Came',
    principle:
      'The word of the LORD tried Joseph until it proved him out. First principle: tested promises have an appointed release — the dream fulfilled at the exact prison-door moment.',
    sourceKeywords: ['Until the time that his word came', 'the word of the LORD tried him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-106-6': {
    title: 'We Have Sinned with Our Fathers',
    principle:
      'The confession joins generations in guilt. First principle: shared history means shared accountability — the prayer that names ancestral sin honestly is the prayer that finds mercy.',
    sourceKeywords: ['We have sinned with our fathers', 'committed iniquity', 'done wickedly'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-109-8': {
    title: 'Let Another Take His Office',
    principle:
      'The betrayer\'s days are few and his office forfeited. First principle: Peter quotes it for the twelfth witness — prophecy governs even the apostolic succession after betrayal.',
    sourceKeywords: ['Let his days be few', 'let another take his office'],
    fulfillmentKeywords: ['his bishoprick let another take'],
    terms: [],
  },
  'psa-110-4': {
    title: 'A Priest for Ever After the Order of Melchizedek',
    principle:
      'The LORD\'s unrepented oath installs the eternal priest. First principle: the oath outlasts Aaron — Hebrews builds its entire priesthood argument on this single unchangeable line.',
    sourceKeywords: ['The LORD hath sworn', 'will not repent', 'a priest for ever'],
    fulfillmentKeywords: ['Thou art a priest for ever'],
    terms: [],
  },
  'psa-112-9': {
    title: 'He Hath Dispersed, He Hath Given to the Poor',
    principle:
      'The righteous giver\'s righteousness endures; his horn is exalted. First principle: Paul quotes it for cheerful giving — scattered seed is righteousness enduring forever.',
    sourceKeywords: ['dispersed, he hath given to the poor', 'righteousness endureth for ever', 'horn exalted'],
    fulfillmentKeywords: ['God loveth a cheerful giver'],
    terms: [],
  },
  'psa-115-1': {
    title: 'Not unto Us, but unto Thy Name Give Glory',
    principle:
      'Glory refused to self, assigned to mercy and truth. First principle: the engine of all witness — the name gets the credit; Jesus refused glory that belonged to the Father in the same spirit.',
    sourceKeywords: ['Not unto us, O LORD', 'unto thy name give glory', 'for thy mercy, and for thy truth\'s sake'],
    fulfillmentKeywords: ['I receive not honour from men'],
    terms: [],
  },
  'psa-117-1': {
    title: 'O Praise the LORD, All Ye Nations',
    principle:
      'The Bible\'s shortest psalm is its widest invitation. First principle: two verses make the Gentiles a choir — Paul strings it into the Romans 15 chain proving Gentile praise was always the plan.',
    sourceKeywords: ['O praise the LORD, all ye nations', 'praise him, all ye people'],
    fulfillmentKeywords: ['Praise the Lord, all ye Gentiles'],
    terms: [],
  },
  'psa-118-6': {
    title: 'The LORD Is on My Side; I Will Not Fear',
    principle:
      'Man can do nothing ultimate against the LORD-sided soul. First principle: courage is arithmetic — the greater Helper outweighs every human threat; Hebrews makes it the antidote to covetousness.',
    sourceKeywords: ['The LORD is on my side', 'I will not fear', 'what can man do unto me'],
    fulfillmentKeywords: ['The Lord is my helper, and I will not fear'],
    terms: [],
  },
  'psa-118-25': {
    title: 'Save Now, I Beseech Thee, O LORD',
    principle:
      'The Hallel cry for salvation and prosperity. First principle: Hosanna on Palm Sunday is this verse on people\'s lips — the request became an acclamation of the coming King.',
    sourceKeywords: ['Save now, I beseech thee', 'send now prosperity'],
    fulfillmentKeywords: ['Hosanna; Blessed is he that cometh'],
    terms: [],
  },
  'psa-119-105': {
    title: 'Thy Word Is a Lamp unto My Feet',
    principle:
      'The Word lights each next step on a dark road. First principle: guidance is incremental — a lamp, not a floodlight; Peter anchors prophecy as the surer light in the same image.',
    sourceKeywords: ['a lamp unto my feet', 'a light unto my path'],
    fulfillmentKeywords: ['a light that shineth in a dark place'],
    terms: [],
  },
  'psa-119-160': {
    title: 'Thy Word Is True from the Beginning',
    principle:
      'Every righteous judgment endures forever. First principle: the whole corpus is trustworthy at once — Jesus prays Thy word is truth over the entire witness.',
    sourceKeywords: ['Thy word is true from the beginning', 'righteous judgments endureth for ever'],
    fulfillmentKeywords: ['thy word is truth'],
    terms: [],
  },
  'psa-132-17': {
    title: 'I Will Make the Horn of David to Bud',
    principle:
      'A lamp ordained for the anointed; David\'s horn sprouts. First principle: the chosen resting-place grows a light — Zacharias\' horn of salvation and the house-of-David dawn both sprout here.',
    sourceKeywords: ['the horn of David to bud', 'a lamp for mine anointed'],
    fulfillmentKeywords: ['raised up an horn of salvation'],
    terms: [],
  },
  'psa-135-13': {
    title: 'Thy Name, O LORD, Endureth for Ever',
    principle:
      'The memorial-name spans all generations. First principle: the name revealed at the bush is the name remembered at every altar — permanence is part of the promise.',
    sourceKeywords: ['Thy name, O LORD, endureth for ever', 'thy memorial throughout all generations'],
    fulfillmentKeywords: ['this is my name for ever', 'this is my memorial'],
    terms: [],
  },
  'psa-139-7': {
    title: 'Whither Shall I Flee from Thy Presence?',
    principle:
      'Heaven, hell, the dawn, the sea — the Spirit is there. First principle: omnipresence is both comfort and inescapability — nowhere is God absent, and that is good news for the pursued believer.',
    sourceKeywords: ['Whither shall I go from thy spirit', 'flee from thy presence'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-140-3': {
    title: 'They Have Sharpened Their Tongues Like a Serpent',
    principle:
      'Adder-poison under the lips. First principle: the anatomy of evil speech in the psalms becomes Paul\'s courtroom exhibit — the mouth convicts the race.',
    sourceKeywords: ['sharpened their tongues like a serpent', 'adders\' poison is under their lips'],
    fulfillmentKeywords: ['the poison of asps is under their lips'],
    terms: [],
  },
  'psa-146-6': {
    title: 'Which Made Heaven, and Earth, and the Sea',
    principle:
      'The Maker keeps truth forever. First principle: trust belongs to the Creator, not princes — the psalm grounds hope in the making power Paul preaches to idolaters.',
    sourceKeywords: ['made heaven, and earth', 'the sea, and all that therein is', 'keepeth truth for ever'],
    fulfillmentKeywords: ['the living God, which made heaven, and earth'],
    terms: [],
  },
  'psa-147-4': {
    title: 'He Telleth the Number of the Stars',
    principle:
      'He names every star — great power, understanding infinite. First principle: the counter of stars is the healer of the brokenhearted — the same power that orders skies binds wounds.',
    sourceKeywords: ['telleth the number of the stars', 'calleth them all by their names'],
    fulfillmentKeywords: ['he calleth them all by names'],
    terms: [],
  },
  'psa-148-13': {
    title: 'His Name Alone Is Excellent',
    principle:
      'Earth and heaven are summoned to a name above the terrain. First principle: the universal praise of Psalm 148 is the rehearsal of the final doxology to the enthroned Lamb.',
    sourceKeywords: ['Let them praise the name of the LORD', 'his name alone is excellent', 'above the earth and heaven'],
    fulfillmentKeywords: ['Blessing, and honour, and glory, and power'],
    terms: [],
  },
  // ── Hand-written expansion: Isaiah ──────────────────────────────────────
  'isa-1-18': {
    title: 'Come Now, and Let Us Reason Together',
    principle:
      'Scarlet sins become white as snow at God\'s invitation. First principle: pardon is God\'s own reasoned offer — the blood-logic of grace turns the deepest stain to wool-white.',
    sourceKeywords: ['let us reason together', 'sins be as scarlet', 'white as snow'],
    fulfillmentKeywords: ['washed their robes, and made them white'],
    terms: [],
  },
  'isa-2-2': {
    title: 'The Mountain of the LORD\'S House Established in the Top',
    principle:
      'In the last days Zion is exalted and all nations flow to it. First principle: Micah shares this vision — the exalted mountain is the gospel age\'s gathering of the nations to one worship.',
    sourceKeywords: ['in the last days', 'mountain of the LORD\'S house', 'all nations shall flow unto it'],
    fulfillmentKeywords: ['the mountain of the house of the LORD'],
    terms: [],
  },
  'isa-2-4': {
    title: 'They Shall Beat Their Swords into Plowshares',
    principle:
      'The Judge of nations ends the learning of war. First principle: peace is the fruit of righteous judgment — the kingdom disarms what empires could not.',
    sourceKeywords: ['judge among the nations', 'swords into plowshares', 'learn war any more'],
    fulfillmentKeywords: ['they shall beat their swords into plowshares'],
    terms: [],
  },
  'isa-5-1': {
    title: 'My Wellbeloved Hath a Vineyard',
    principle:
      'The love-song of the vineyard planted on a fruitful hill. First principle: Israel is God\'s planted vineyard — Jesus takes the song and turns it on the leaders who would cast out the Heir.',
    sourceKeywords: ['my wellbeloved', 'a song of my beloved touching his vineyard', 'very fruitful hill'],
    fulfillmentKeywords: ['A certain man planted a vineyard'],
    terms: [],
  },
  'isa-6-1': {
    title: 'I Saw Also the Lord Sitting upon a Throne',
    principle:
      'Uzziah dies; the true King fills the temple. First principle: John says Isaiah saw Christ\'s glory — the throne vision of chapter 6 is a vision of Jesus high and lifted up.',
    sourceKeywords: ['I saw also the Lord', 'sitting upon a throne', 'his train filled the temple'],
    fulfillmentKeywords: ['These things said Esaias, when he saw his glory'],
    terms: [],
  },
  'isa-6-9': {
    title: 'Go, and Tell This People, Hear Ye Indeed',
    principle:
      'The commission of judicial hearing: they will hear and not understand. First principle: revelation can harden as easily as heal — Jesus, Mark, John, and Paul all quote this commission over unbelief.',
    sourceKeywords: ['Go, and tell this people', 'Hear ye indeed, but understand not', 'see ye indeed, but perceive not'],
    fulfillmentKeywords: ['By hearing ye shall hear, and shall not understand'],
    terms: [],
  },
  'isa-8-14': {
    title: 'A Sanctuary — and a Stone of Stumbling',
    principle:
      'The LORD becomes sanctuary to the trusting and a rock of offence to the two houses. First principle: one stone, two outcomes — holiness for faith, ruin for refusal; Peter and Paul build on this hinge.',
    sourceKeywords: ['for a sanctuary', 'a stone of stumbling', 'rock of offence'],
    fulfillmentKeywords: ['a rock of offence', 'a stone of stumbling'],
    terms: [],
  },
  'isa-9-2': {
    title: 'The People That Walked in Darkness Have Seen a Great Light',
    principle:
      'Light dawns on Galilee\'s shadow-land. First principle: the messianic light shines first where contempt dwelt thickest — the land of Zebulun and Naphtali saw it first.',
    sourceKeywords: ['walked in darkness', 'a great light', 'the shadow of death'],
    fulfillmentKeywords: ['The people which sat in darkness saw great light'],
    terms: [],
  },
  'isa-9-7': {
    title: 'Of the Increase of His Government There Shall Be No End',
    principle:
      'On David\'s throne, with judgment and justice, forever — the zeal of the LORD will perform it. First principle: the kingdom grows and never stops growing; its stability is God\'s own zeal, not man\'s vote.',
    sourceKeywords: ['the increase of his government', 'throne of David', 'the zeal of the LORD of hosts'],
    fulfillmentKeywords: ['he shall reign over the house of Jacob for ever'],
    terms: [],
  },
  'isa-11-2': {
    title: 'The Spirit of the LORD Shall Rest upon Him',
    principle:
      'Seven-fold Spirit — wisdom, understanding, counsel, might, knowledge, fear of the LORD. First principle: the Branch is the Spirit-endowed King; the dove at the Jordan is this verse made visible.',
    sourceKeywords: ['the spirit of the LORD shall rest upon him', 'wisdom and understanding', 'fear of the LORD'],
    fulfillmentKeywords: ['the Holy Ghost descended in a bodily shape like a dove'],
    terms: [],
  },
  'isa-11-4': {
    title: 'With Righteousness Shall He Judge the Poor',
    principle:
      'Equity for the meek — and the wicked slain by the breath of His lips. First principle: the Messiah\'s mouth is His sceptre; Paul calls it the sword that consumes the lawless one at His coming.',
    sourceKeywords: ['judge the poor', 'the rod of his mouth', 'the breath of his lips'],
    fulfillmentKeywords: ['consume with the spirit of his mouth'],
    terms: [],
  },
  'isa-11-10': {
    title: 'A Root of Jesse, an Ensign of the People',
    principle:
      'To the Root the Gentiles seek; His rest is glorious. First principle: the stump\'s root becomes the nations\' banner — Paul quotes it as the promise behind Gentile hope.',
    sourceKeywords: ['a root of Jesse', 'an ensign of the people', 'the Gentiles shall seek'],
    fulfillmentKeywords: ['Esaias also confesseth the Gentile hope'],
    terms: [],
  },
  'isa-11-12': {
    title: 'He Shall Assemble the Outcasts of Israel',
    principle:
      'An ensign for the nations gathers the dispersed from the four corners. First principle: the Root does the regathering — the dispersed of Judah and the far-off Gentiles meet at one banner.',
    sourceKeywords: ['an ensign for the nations', 'assemble the outcasts of Israel', 'four corners of the earth'],
    fulfillmentKeywords: ['gather together his elect from the four winds'],
    terms: [],
  },
  'isa-26-19': {
    title: 'Thy Dead Men Shall Live',
    principle:
      'Dwellers in dust awake and sing; the earth casts out the dead. First principle: bodily resurrection is Isaiah\'s explicit hope — dew from heaven revives the ground\'s sleepers.',
    sourceKeywords: ['Thy dead men shall live', 'ye that dwell in dust', 'the earth shall cast out the dead'],
    fulfillmentKeywords: ['all that are in the graves shall hear his voice'],
    terms: [],
  },
  'isa-27-9': {
    title: 'By This Shall the Iniquity of Jacob Be Purged',
    principle:
      'The purge removes altar stones and groves — sin taken away at its sources. First principle: Paul pairs this with the Deliverer from Zion: Israel\'s pardon comes with demolished idolatry.',
    sourceKeywords: ['the iniquity of Jacob be purged', 'to take away his sin', 'the groves and images'],
    fulfillmentKeywords: ['when I shall take away their sins'],
    terms: [],
  },
  'isa-27-13': {
    title: 'The Great Trumpet Shall Be Blown',
    principle:
      'Outcasts come home to worship at the holy mount. First principle: the trumpet of regathering is the trumpet of resurrection — Jesus and Paul both cite the gathering sound.',
    sourceKeywords: ['the great trumpet shall be blown', 'the outcasts in the land of Egypt', 'worship the LORD'],
    fulfillmentKeywords: ['they shall gather together his elect with a great sound of a trumpet'],
    terms: [],
  },
  'isa-28-11': {
    title: 'With Stammering Lips and Another Tongue',
    principle:
      'God speaks to this people through foreign lips. First principle: the Assyrian warning becomes Pentecost\'s pattern — other tongues are God\'s signature judgment-and-mercy sign.',
    sourceKeywords: ['stammering lips and another tongue', 'will he speak to this people'],
    fulfillmentKeywords: ['they were all filled with the Holy Ghost, and began to speak with other tongues'],
    terms: [],
  },
  'isa-29-10': {
    title: 'The Spirit of Deep Sleep Poured Out',
    principle:
      'Seers are covered; eyes are closed by the LORD Himself. First principle: leadership blindness is a poured-out judgment — Paul quotes it for the hardening over Israel until the fullness.',
    sourceKeywords: ['the spirit of deep sleep', 'hath closed your eyes', 'the seers hath he covered'],
    fulfillmentKeywords: ['God hath given them the spirit of slumber'],
    terms: [],
  },
  'isa-29-13': {
    title: 'Their Fear Toward Me Is Taught by the Precept of Men',
    principle:
      'Lips honour, hearts removed; doctrine becomes human precept. First principle: the danger of taught religion is taught distance — Jesus quotes this against tradition that voids the Word.',
    sourceKeywords: ['draw near me with their mouth', 'removed their heart far from me', 'the precept of men'],
    fulfillmentKeywords: ['in vain they do worship me'],
    terms: [],
  },
  'isa-29-14': {
    title: 'I Will Proceed to Do a Marvellous Work',
    principle:
      'The wisdom of the wise perishes in the marvellous work. First principle: God\'s wonder shames intellect — Paul quotes it for the cross, where the wise are confounded by a crucified Messiah.',
    sourceKeywords: ['a marvellous work and a wonder', 'the wisdom of their wise men shall perish'],
    fulfillmentKeywords: ['I will destroy the wisdom of the wise'],
    terms: [],
  },
  'isa-35-5': {
    title: 'Then the Eyes of the Blind Shall Be Opened',
    principle:
      'Blind eyes, deaf ears — the Advent\'s medical charter. First principle: John the Baptist\'s doubt is answered by this checklist; the Messiah is certified by opened eyes.',
    sourceKeywords: ['the eyes of the blind shall be opened', 'the ears of the deaf shall be unstopped'],
    fulfillmentKeywords: ['the blind receive their sight', 'the deaf hear'],
    terms: [],
  },
  'isa-35-6': {
    title: 'Then Shall the Lame Man Leap as an Hart',
    principle:
      'Lame legs leap; dumb tongues sing; deserts break into streams. First principle: the healed lame man leaping in the temple was this verse walking — Peter and John had no silver, but they had the prophecy.',
    sourceKeywords: ['the lame man leap as an hart', 'the tongue of the dumb sing', 'streams in the desert'],
    fulfillmentKeywords: ['the lame walk', 'the dumb speak'],
    terms: [],
  },
  'isa-35-8': {
    title: 'An Highway Shall Be There, the Way of Holiness',
    principle:
      'A clean road for wayfaring fools — the unclean cannot pass. First principle: holiness is the highway\'s name; simple travelers do not err on it, because the Way is a Person.',
    sourceKeywords: ['an highway shall be there', 'The way of holiness', 'the unclean shall not pass over it'],
    fulfillmentKeywords: ['I am the way, the truth, and the life'],
    terms: [],
  },
  'isa-35-10': {
    title: 'The Ransomed of the LORD Shall Return with Songs',
    principle:
      'Everlasting joy on their heads; sorrow and sighing flee. First principle: the ransomed return is joy on arrival — Revelation borrows the tears-wiped ending straight from this verse.',
    sourceKeywords: ['the ransomed of the LORD shall return', 'everlasting joy upon their heads', 'sorrow and sighing shall flee'],
    fulfillmentKeywords: ['God shall wipe away all tears'],
    terms: [],
  },
  'isa-40-5': {
    title: 'The Glory of the LORD Shall Be Revealed',
    principle:
      'All flesh shall see it together — the mouth of the LORD has spoken. First principle: the highway\'s end is revealed glory, visible to all flesh; the Word became flesh and we beheld it.',
    sourceKeywords: ['the glory of the LORD shall be revealed', 'all flesh shall see it together'],
    fulfillmentKeywords: ['all flesh shall see the salvation of God'],
    terms: [],
  },
  'isa-40-6': {
    title: 'All Flesh Is Grass',
    principle:
      'The voice asks what to cry; the answer is human frailty. First principle: the preacher\'s message begins with mortality — goodliness is flower-goodliness, here today.',
    sourceKeywords: ['What shall I cry', 'All flesh is grass', 'the flower of the field'],
    fulfillmentKeywords: ['all flesh is as grass'],
    terms: [],
  },
  'isa-40-8': {
    title: 'The Word of Our God Shall Stand for Ever',
    principle:
      'Grass withers, flowers fade; the Word abides. First principle: the contrast is the gospel\'s backbone — Peter anchors the enduring preached word, Jesus grounds heaven and earth, on this verse.',
    sourceKeywords: ['The grass withereth', 'the flower fadeth', 'the word of our God shall stand for ever'],
    fulfillmentKeywords: ['the word of the Lord endureth for ever'],
    terms: [],
  },
  'isa-40-11': {
    title: 'He Shall Feed His Flock Like a Shepherd',
    principle:
      'Lambs gathered in His arm, carried in His bosom, gently led. First principle: the coming LORD is a gentle Shepherd — tenderness is not the absence of glory but its manner with lambs.',
    sourceKeywords: ['feed his flock like a shepherd', 'gather the lambs with his arm', 'gently lead'],
    fulfillmentKeywords: ['I am the good shepherd', 'the Lamb shall feed them'],
    terms: [],
  },
  'isa-40-13': {
    title: 'Who Hath Directed the Spirit of the LORD?',
    principle:
      'No counselor taught the Spirit. First principle: Paul quotes this to shatter human wisdom\'s pretension — the mind of Christ is offered where no counsel could ever go.',
    sourceKeywords: ['Who hath directed the Spirit of the LORD', 'being his counsellor hath taught him'],
    fulfillmentKeywords: ['who hath known the mind of the Lord'],
    terms: [],
  },
  'isa-40-26': {
    title: 'Lift Up Your Eyes on High, and Behold Who Hath Created',
    principle:
      'The star-host is numbered and named; not one fails. First principle: called stars are the argument against fainting — the Creator\'s naming power underwrites Israel\'s endurance.',
    sourceKeywords: ['behold who hath created these things', 'he calleth them all by names', 'not one faileth'],
    fulfillmentKeywords: ['he calleth them all by names'],
    terms: [],
  },
  'isa-41-4': {
    title: 'I the LORD, the First, and with the Last; I Am He',
    principle:
      'The one who calls generations from the beginning is the first and the last. First principle: the self-title of Exodus is expanded into history\'s bookends — and Revelation puts it on the lips of the glorified Jesus.',
    sourceKeywords: ['calling the generations from the beginning', 'I the LORD, the first, and with the last', 'I am he'],
    fulfillmentKeywords: ['I am Alpha and Omega, the first and the last'],
    terms: [],
  },
  'isa-41-10': {
    title: 'Fear Thou Not; for I Am with Thee',
    principle:
      'Strengthened, helped, upheld by the right hand of righteousness. First principle: the anti-fear covenant refrain — and the risen Christ signs the Great Commission with its echo, lo, I am with you.',
    sourceKeywords: ['Fear thou not; for I am with thee', 'I will strengthen thee', 'uphold thee with the right hand'],
    fulfillmentKeywords: ['lo, I am with you alway'],
    terms: [],
  },
  'isa-42-7': {
    title: 'To Open the Blind Eyes, to Bring Out the Prisoners',
    principle:
      'The Servant\'s charter: sight for the blind, exit for prisoners, light for dark cells. First principle: liberation is literal and spiritual — Simeon sang it, Paul preached it to Gentile kings.',
    sourceKeywords: ['open the blind eyes', 'bring out the prisoners', 'them that sit in darkness'],
    fulfillmentKeywords: ['To give light to them that sit in darkness'],
    terms: [],
  },
  'isa-43-10': {
    title: 'Ye Are My Witnesses, and My Servant Whom I Have Chosen',
    principle:
      'Know, believe, understand that I AM — no God before, none after. First principle: witness is the purpose of chosenness — Israel\'s calling and the church\'s commission are the same job description.',
    sourceKeywords: ['Ye are my witnesses', 'my servant whom I have chosen', 'no God formed, neither shall there be'],
    fulfillmentKeywords: ['ye shall be witnesses unto me'],
    terms: [],
  },
  'isa-43-20': {
    title: 'I Give Waters in the Wilderness, Rivers in the Desert',
    principle:
      'Even beasts honour the God who drinks His chosen in barren places. First principle: provision in the desert is the covenant signature — the chosen receive rivers where nothing grows.',
    sourceKeywords: ['waters in the wilderness', 'rivers in the desert', 'to give drink to my people, my chosen'],
    fulfillmentKeywords: ['a peculiar people'],
    terms: [],
  },
  'isa-43-25': {
    title: 'I, Even I, Am He That Blotteth Out Thy Transgressions',
    principle:
      'For mine own sake — sins remembered no more. First principle: forgiveness is God\'s self-motivated act; the ground of blotting is His name, not our score.',
    sourceKeywords: ['blotteth out thy transgressions', 'for mine own sake', 'will not remember thy sins'],
    fulfillmentKeywords: ['their sins and iniquities will I remember no more'],
    terms: [],
  },
  'isa-44-3': {
    title: 'I Will Pour My Spirit upon Thy Seed',
    principle:
      'Floods on dry ground, Spirit on offspring. First principle: the pouring promise is generational — water for thirst now, Spirit for seed later, fulfilled at Pentecost for the descendants of Pentecost\'s hearers.',
    sourceKeywords: ['pour water upon him that is thirsty', 'pour my spirit upon thy seed', 'my blessing upon thine offspring'],
    fulfillmentKeywords: ['this is that which was spoken by the prophet Joel'],
    terms: [],
  },
  'isa-44-6': {
    title: 'I Am the First, and I Am the Last; Beside Me There Is No God',
    principle:
      'The King of Israel and His Redeemer, the LORD of hosts, speak the bookend title. First principle: the exclusive claim is dual in grammar, one in Person — Revelation gives the title to the Alpha and Omega Jesus.',
    sourceKeywords: ['the King of Israel', 'his redeemer the LORD of hosts', 'the first, and I am the last'],
    fulfillmentKeywords: ['I am Alpha and Omega', 'the first and the last'],
    terms: [],
  },
  'isa-45-1': {
    title: 'Thus Saith the LORD to His Anointed, to Cyrus',
    principle:
      'A pagan king is named and anointed to open gates. First principle: God anoints whom He wills for His people\'s rescue — even the uncircumcised liberator carries a messianic office-shadow.',
    sourceKeywords: ['to his anointed, to Cyrus', 'to subdue nations before him', 'the gates shall not be shut'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'isa-45-21': {
    title: 'A Just God and a Saviour; There Is None Beside Me',
    principle:
      'The challenge to idols: who declared it from ancient time? First principle: prophecy is God\'s identity test — only the real God tells the end from the beginning, and He is both just and Savior.',
    sourceKeywords: ['who hath declared this from ancient time', 'a just God and a Saviour', 'none beside me'],
    fulfillmentKeywords: ['he will judge the world in righteousness'],
    terms: [],
  },
  'isa-45-22': {
    title: 'Look unto Me, and Be Ye Saved, All the Ends of the Earth',
    principle:
      'A global invitation grounded in exclusive deity. First principle: salvation is by look — the serpent-pole logic — offered to every end of the earth because there is no other God to offer it.',
    sourceKeywords: ['Look unto me, and be ye saved', 'all the ends of the earth', 'there is none else'],
    fulfillmentKeywords: ['whosoever will, let him take the water of life freely'],
    terms: [],
  },
  'isa-45-23': {
    title: 'Unto Me Every Knee Shall Bow, Every Tongue Shall Swear',
    principle:
      'The self-sworn oath of universal homage. First principle: Paul applies the oath to Jesus — at the name of Jesus every knee bows; the divine oath transfers to the divine Son.',
    sourceKeywords: ['I have sworn by myself', 'every knee shall bow', 'every tongue shall swear'],
    fulfillmentKeywords: ['every knee should bow... and that every tongue should confess'],
    terms: [],
  },
  'isa-48-12': {
    title: 'Hearken unto Me, O Jacob; I Am He; I Am the First, I Also Am the Last',
    principle:
      'The called nation hears the bookend title again. First principle: the first-and-last claim is made to a chosen people — and the glorified Christ repeats it to John, claiming the covenant God\'s name as His own.',
    sourceKeywords: ['O Jacob and Israel, my called', 'I am he', 'I also am the last'],
    fulfillmentKeywords: ['Fear not; I am the first and the last'],
    terms: [],
  },
  'isa-49-1': {
    title: 'The LORD Hath Called Me from the Womb',
    principle:
      'The isles are addressed from far; the Servant is named from the mother\'s womb. First principle: the Servant\'s calling precedes His birth — Luke 1 and Matthew 3 both echo the prenatal appointment.',
    sourceKeywords: ['Listen, O isles', 'called me from the womb', 'made mention of my name'],
    fulfillmentKeywords: ['thou shalt call his name JESUS', 'in whom I am well pleased'],
    terms: [],
  },
  'isa-49-8': {
    title: 'In an Acceptable Time Have I Heard Thee',
    principle:
      'The Servant is preserved and given as a covenant of the people. First principle: the accepted time is now — Paul quotes it as the day of salvation presently open to every hearer.',
    sourceKeywords: ['In an acceptable time have I heard thee', 'a day of salvation', 'give thee for a covenant of the people'],
    fulfillmentKeywords: ['behold, now is the accepted time'],
    terms: [],
  },
  'isa-49-22': {
    title: 'I Will Lift Up Mine Hand to the Gentiles',
    principle:
      'The standard raised brings sons in arms and daughters on shoulders. First principle: the Gentile standard does the gathering — the nations carry the covenant family home.',
    sourceKeywords: ['lift up mine hand to the Gentiles', 'set up my standard', 'bring thy sons in their arms'],
    fulfillmentKeywords: ['a great multitude of all nations'],
    terms: [],
  },
  'isa-49-26': {
    title: 'All Flesh Shall Know That I the LORD Am Thy Saviour',
    principle:
      'Oppressors consume themselves; the knowledge of the LORD as Savior and Redeemer goes universal. First principle: the mighty One of Jacob defends — the final knowledge of God comes through His deliverance.',
    sourceKeywords: ['I the LORD am thy Saviour and thy Redeemer', 'the mighty One of Jacob'],
    fulfillmentKeywords: ['he hath judged the great whore'],
    terms: [],
  },
  'isa-51-4': {
    title: 'A Law Shall Proceed from Me',
    principle:
      'Judgment rests for a light of the people. First principle: the law that proceeds from Zion is a light-bearing justice — Matthew applies the Servant passage to Jesus\' quiet, world-hoping ministry.',
    sourceKeywords: ['a law shall proceed from me', 'my judgment to rest for a light of the people'],
    fulfillmentKeywords: ['until he send forth judgment unto victory'],
    terms: [],
  },
  'isa-51-11': {
    title: 'The Redeemed of the LORD Shall Return with Singing',
    principle:
      'Everlasting joy on their heads; mourning flees. First principle: the ransomed return is doubled across Isaiah — and Revelation hands the sentence to the Lamb-fed multitude.',
    sourceKeywords: ['the redeemed of the LORD shall return', 'come with singing unto Zion', 'sorrow and mourning shall flee away'],
    fulfillmentKeywords: ['God shall wipe away all tears from their eyes'],
    terms: [],
  },
  'isa-52-7': {
    title: 'How Beautiful upon the Mountains Are the Feet',
    principle:
      'The publisher of peace, salvation, and Thy God reigneth. First principle: the messenger\'s feet are beautiful because the message is a coronation — Paul names it the model of sent gospel preachers.',
    sourceKeywords: ['beautiful upon the mountains', 'bringeth good tidings', 'publisheth salvation', 'Thy God reigneth'],
    fulfillmentKeywords: ['How beautiful are the feet of them that preach the gospel of peace'],
    terms: [],
  },
  'isa-52-11': {
    title: 'Depart Ye, Depart Ye; Touch No Unclean Thing',
    principle:
      'The vessel-bearers exit Babylon clean. First principle: separation is sanctification\'s address — and Revelation replays the call as Babylon falls again.',
    sourceKeywords: ['Depart ye, depart ye', 'touch no unclean thing', 'be ye clean, that bear the vessels of the LORD'],
    fulfillmentKeywords: ['come out of her, my people'],
    terms: [],
  },
  'isa-52-13': {
    title: 'Behold, My Servant Shall Deal Prudently',
    principle:
      'The Servant Song\'s overture: prudent, exalted, extolled, very high. First principle: the song that begins high, dives into wounds, and returns to exaltation — Paul reads it as the mind of Christ.',
    sourceKeywords: ['my servant shall deal prudently', 'exalted and extolled, and be very high'],
    fulfillmentKeywords: ['God also hath highly exalted him'],
    terms: [],
  },
  'isa-52-15': {
    title: 'So Shall He Sprinkle Many Nations',
    principle:
      'Kings shut their mouths at what they had never been told. First principle: the sprinkling reaches beyond Israel — the speechless kings see the unheard; Paul quotes it for pioneer mission.',
    sourceKeywords: ['sprinkle many nations', 'kings shall shut their mouths', 'that which had not been told them'],
    fulfillmentKeywords: ['To whom he was not spoken of, they shall see'],
    terms: [],
  },
  'isa-53-1': {
    title: 'Who Hath Believed Our Report?',
    principle:
      'The Servant Song opens in unbelief\'s question; the arm of the LORD is revealed to few. First principle: the chapter about universal healing begins with universal disbelief — both are the report.',
    sourceKeywords: ['Who hath believed our report', 'to whom is the arm of the LORD revealed'],
    fulfillmentKeywords: ['Lord, who hath believed our report'],
    terms: [],
  },
  'isa-53-3': {
    title: 'Despised and Rejected of Men',
    principle:
      'A man of sorrows, acquainted with grief, unesteemed. First principle: rejection is not a detour in the Servant\'s story but its surface — He is known by the sorrow He carries.',
    sourceKeywords: ['despised and rejected of men', 'a man of sorrows', 'we esteemed him not'],
    fulfillmentKeywords: ['He came unto his own, and his own received him not'],
    terms: [],
  },
  'isa-53-4': {
    title: 'Surely He Hath Borne Our Griefs',
    principle:
      'We misread His wounds as God\'s judgment; they were our load. First principle: the substitution is double — griefs borne, sorrows carried — and the crowd judged Him stricken when He was stricken for them.',
    sourceKeywords: ['borne our griefs', 'carried our sorrows', 'smitten of God'],
    fulfillmentKeywords: ['Himself took our infirmities', 'his own self bare our sins'],
    terms: [],
  },
  'isa-53-6': {
    title: 'The LORD Hath Laid on Him the Iniquity of Us All',
    principle:
      'Sheep astray, each to his own way; the iniquity of all gathered on One. First principle: the two clauses of the gospel — universal straying, universal load transferred — meet in the middle of the verse.',
    sourceKeywords: ['like sheep have gone astray', 'turned every one to his own way', 'the iniquity of us all'],
    fulfillmentKeywords: ['who his own self bare our sins', 'made him to be sin for us'],
    terms: [],
  },
  'isa-53-7': {
    title: 'He Was Oppressed, Yet He Opened Not His Mouth',
    principle:
      'Lamb to the slaughter, sheep before shearers — silence under both. First principle: the voluntary silence before accusers is the signature mark Philip preached from, and Matthew heard at the trial.',
    sourceKeywords: ['he opened not his mouth', 'as a lamb to the slaughter', 'a sheep before her shearers'],
    fulfillmentKeywords: ['he was led as a sheep to the slaughter', 'as a lamb dumb before his shearer'],
    terms: [],
  },
  'isa-53-8': {
    title: 'He Was Cut Off out of the Land of the Living',
    principle:
      'Taken from prison and judgment; stricken for my people\'s transgression. First principle: the death is judicial and vicarious — cut off, and no man could declare His generation because the stroke was ours.',
    sourceKeywords: ['taken from prison and from judgment', 'cut off out of the land of the living', 'for the transgression of my people'],
    fulfillmentKeywords: ['he was cut off, but not for himself'],
    terms: [],
  },
  'isa-53-9': {
    title: 'He Made His Grave with the Rich in His Death',
    principle:
      'Grave with the wicked, tomb with the rich — no violence, no deceit in His mouth. First principle: the burial detail was fixed before the death: Joseph\'s garden tomb fulfills the rich-man clause.',
    sourceKeywords: ['his grave with the wicked', 'with the rich in his death', 'no deceit in his mouth'],
    fulfillmentKeywords: ['a rich man of Arimathaea... laid it in his own new tomb'],
    terms: [],
  },
  'isa-53-10': {
    title: 'Yet It Pleased the LORD to Bruise Him',
    principle:
      'The crushing is an offering for sin — and the Servant sees seed and prolonged days. First principle: the wound is the Father\'s design and the resurrection\'s guarantee; pleasure in the bruise is pleasure in the saving outcome.',
    sourceKeywords: ['It pleased the LORD to bruise him', 'an offering for sin', 'he shall prolong his days'],
    fulfillmentKeywords: ['whom God hath raised up, having loosed the pains of death'],
    terms: [],
  },
  'isa-53-11': {
    title: 'By His Knowledge Shall My Righteous Servant Justify Many',
    principle:
      'The travail satisfies; the many are justified; iniquities borne. First principle: justification is the Servant\'s wages for knowledge-borne sin — the satisfied look of the cross is the doctrine of imputation.',
    sourceKeywords: ['he shall see of the travail of his soul', 'shall be satisfied', 'shall my righteous servant justify many'],
    fulfillmentKeywords: ['being justified by his blood', 'shall be made righteous'],
    terms: [],
  },
  'isa-53-12': {
    title: 'He Bare the Sin of Many, and Made Intercession for the Transgressors',
    principle:
      'The portion divided with the great; numbered with transgressors; intercession poured out in death. First principle: the chapter\'s last verse holds the whole economy — numbered below, interceding above, dividing spoil forever.',
    sourceKeywords: ['poured out his soul unto death', 'numbered with the transgressors', 'bare the sin of many', 'made intercession'],
    fulfillmentKeywords: ['he was numbered with the transgressors', 'he ever liveth to make intercession'],
    terms: [],
  },
  'isa-54-1': {
    title: 'Sing, O Barren, Thou That Didst Not Bear',
    principle:
      'The desolate outnumbers the married wife. First principle: Paul reads the barren woman as the heavenly Jerusalem — the church\'s children outnumber the old covenant\'s, and the command is to sing.',
    sourceKeywords: ['Sing, O barren', 'more are the children of the desolate', 'saith the LORD'],
    fulfillmentKeywords: ['rejoice, thou barren that bearest not'],
    terms: [],
  },
  'isa-54-5': {
    title: 'Thy Maker Is Thine Husband',
    principle:
      'The Redeemer, the Holy One of Israel, the God of the whole earth — Husband. First principle: covenant theology is marriage theology; Paul quotes Genesis through this lens, and Revelation ends in a wedding city.',
    sourceKeywords: ['Thy Maker is thine husband', 'the LORD of hosts is his name', 'God of the whole earth'],
    fulfillmentKeywords: ['I have espoused you to one husband'],
    terms: [],
  },
  'isa-54-9': {
    title: 'As I Have Sworn That the Waters of Noah Should No More',
    principle:
      'The Noah-flood oath is reused: no more wrath, no more rebuke. First principle: God swears His peace with the same force that promised no more flood — covenant mercy has a flood-oath behind it.',
    sourceKeywords: ['the waters of Noah', 'should no more go over the earth', 'nor rebuke thee'],
    fulfillmentKeywords: ['neither shall there be a flood to destroy the earth'],
    terms: [],
  },
  'isa-54-13': {
    title: 'All Thy Children Shall Be Taught of the LORD',
    principle:
      'Taught children, great peace. First principle: Jesus quotes this to explain who comes to Him — the Father-taught are the drawn; the covenant\'s peace is its pedagogy.',
    sourceKeywords: ['all thy children shall be taught of the LORD', 'great shall be the peace of thy children'],
    fulfillmentKeywords: ['Every man therefore that hath heard, and hath learned of the Father, cometh unto me'],
    terms: [],
  },
  'isa-55-1': {
    title: 'Ho, Every One That Thirsteth, Come Ye to the Waters',
    principle:
      'Wine and milk without money and without price. First principle: the gospel market inverts all commerce — the purchase is by thirst, the currency is grace; Revelation\'s last invitation quotes it.',
    sourceKeywords: ['every one that thirsteth', 'come ye to the waters', 'without money and without price'],
    fulfillmentKeywords: ['whosoever will, let him take the water of life freely'],
    terms: [],
  },
  'isa-55-3': {
    title: 'I Will Make an Everlasting Covenant with You',
    principle:
      'Incline the ear; the soul lives; the sure mercies of David are given. First principle: hearing is the door to covenant life — Paul preaches the sure mercies as the resurrection promise.',
    sourceKeywords: ['Incline your ear, and come unto me', 'your soul shall live', 'the sure mercies of David'],
    fulfillmentKeywords: ['I will give you the sure mercies of David'],
    terms: [],
  },
  'isa-55-10': {
    title: 'As the Rain Cometh Down from Heaven',
    principle:
      'Rain waters earth, seed, and eater — and returns not empty. First principle: the Word is hydropowered — it descends, does its work, and never comes back void; the fixed anchor of preaching hope.',
    sourceKeywords: ['the rain cometh down', 'watereth the earth', 'seed to the sower, and bread to the eater'],
    fulfillmentKeywords: ['my word... shall not return unto me void'],
    terms: [],
  },
  'isa-56-7': {
    title: 'Mine House Shall Be Called an House of Prayer for All People',
    principle:
      'Foreigners joined to the LORD are made joyful on His holy mountain. First principle: the temple was always meant for the nations — Jesus quotes it in the cleansing and Isaiah wrote it for the eunuchs and strangers.',
    sourceKeywords: ['bring to my holy mountain', 'joyful in my house of prayer', 'house of prayer for all people'],
    fulfillmentKeywords: ['My house shall be called the house of prayer'],
    terms: [],
  },
  'isa-57-1': {
    title: 'The Righteous Perisheth, and No Man Layeth It to Heart',
    principle:
      'Merciful men are taken away from the evil to come. First principle: the righteous\'s disappearance is mercy in disguise — they are gathered before the storm; none consider it, but heaven does.',
    sourceKeywords: ['The righteous perisheth', 'no man layeth it to heart', 'taken away from the evil to come'],
    fulfillmentKeywords: ['Blessed are the dead which die in the Lord'],
    terms: [],
  },
  'isa-58-6': {
    title: 'Is Not This the Fast That I Have Chosen?',
    principle:
      'Loosed bands, undone burdens, freed oppressed, broken yokes. First principle: true fasting is social mercy — the Spirit-anointed Servant preaches the same deliverance list in Nazareth.',
    sourceKeywords: ['the fast that I have chosen', 'undo the heavy burdens', 'let the oppressed go free'],
    fulfillmentKeywords: ['preach deliverance to the captives', 'set at liberty them that are bruised'],
    terms: [],
  },
  'isa-58-13': {
    title: 'Call the Sabbath a Delight',
    principle:
      'Turn from your own pleasure on the holy day; honour the LORD\'s delight. First principle: Sabbath is a delight, not a debt — the foot turned away from self-honour turns toward the LORD\'s honour.',
    sourceKeywords: ['turn away thy foot from the sabbath', 'call the sabbath a delight', 'the holy of the LORD'],
    fulfillmentKeywords: ['The sabbath was made for man'],
    terms: [],
  },
  'isa-58-14': {
    title: 'Then Shalt Thou Delight Thyself in the LORD',
    principle:
      'Riding the high places, fed with Jacob\'s heritage — by the mouth of the LORD. First principle: sabbath-honour ends in delight and heritage — the promise is spoken, and therefore certain.',
    sourceKeywords: ['delight thyself in the LORD', 'ride upon the high places of the earth', 'the heritage of Jacob thy father'],
    fulfillmentKeywords: ['there remaineth therefore a rest to the people of God'],
    terms: [],
  },
  'isa-59-7': {
    title: 'Their Feet Run to Evil',
    principle:
      'Hasty bloodshed, iniquitous thoughts, wasteful paths. First principle: Paul\'s courtroom takes its violence evidence here — feet are swift because thoughts are iniquitous.',
    sourceKeywords: ['their feet run to evil', 'haste to shed innocent blood', 'wasting and destruction'],
    fulfillmentKeywords: ['Their feet are swift to shed blood'],
    terms: [],
  },
  'isa-59-21': {
    title: 'My Spirit That Is upon Thee, and My Words in Thy Mouth',
    principle:
      'The covenant word never departs — from the mouth, the seed, and the seed\'s seed, forever. First principle: the new covenant is verbal and generational — Spirit on the Person, words in the family line.',
    sourceKeywords: ['my covenant with them', 'my words which I have put in thy mouth', 'from henceforth and for ever'],
    fulfillmentKeywords: ['I will put my laws into their hearts'],
    terms: [],
  },
  'isa-60-1': {
    title: 'Arise, Shine; for Thy Light Is Come',
    principle:
      'The glory of the LORD rises upon Zion like dawn. First principle: arise is addressed to the shined-upon — light received becomes light radiated; the city\'s darkness is overcome by glory, not by lamps.',
    sourceKeywords: ['Arise, shine', 'thy light is come', 'the glory of the LORD is risen upon thee'],
    fulfillmentKeywords: ['In him was life; and the life was the light of men'],
    terms: [],
  },
  'isa-60-3': {
    title: 'The Gentiles Shall Come to Thy Light',
    principle:
      'Kings travel to the brightness of Zion\'s rising. First principle: the star over Bethlehem and the nations in New Jerusalem both quote this verse — kings came once, and kings will come again.',
    sourceKeywords: ['the Gentiles shall come to thy light', 'kings to the brightness of thy rising'],
    fulfillmentKeywords: ['we have seen his star in the east'],
    terms: [],
  },
  'isa-60-19': {
    title: 'The LORD Shall Be unto Thee an Everlasting Light',
    principle:
      'No sun by day, no moon by night — the LORD is the light and the glory. First principle: creation\'s lights are placeholders; New Jerusalem needs none because the Lamb lights it.',
    sourceKeywords: ['The sun shall be no more thy light by day', 'an everlasting light', 'thy God thy glory'],
    fulfillmentKeywords: ['the city had no need of the sun... for the glory of God did lighten it'],
    terms: [],
  },
  'isa-61-2': {
    title: 'To Proclaim the Acceptable Year, and the Day of Vengeance',
    principle:
      'Comfort for mourners within the same breath as vengeance. First principle: Jesus stopped reading mid-verse at Nazareth — the acceptable year opened then; the day of vengeance awaits His return.',
    sourceKeywords: ['the acceptable year of the LORD', 'the day of vengeance of our God', 'to comfort all that mourn'],
    fulfillmentKeywords: ['To preach the acceptable year of the Lord'],
    terms: [],
  },
  'isa-61-10': {
    title: 'He Hath Clothed Me with the Garments of Salvation',
    principle:
      'Robe of righteousness like a bridegroom\'s ornament and a bride\'s jewels. First principle: salvation is wedding-dress — the robe is given, and Revelation\'s bride wears the fine linen of the saints.',
    sourceKeywords: ['garments of salvation', 'robe of righteousness', 'as a bride adorneth herself'],
    fulfillmentKeywords: ['to her was granted... fine linen, clean and white'],
    terms: [],
  },
  'isa-62-11': {
    title: 'Behold, Thy Salvation Cometh; His Reward Is with Him',
    principle:
      'The proclamation reaches the world\'s end: say to the daughter of Zion. First principle: the Palm Sunday quotation is composite — Zechariah\'s donkey and Isaiah\'s reward — salvation riding into the city.',
    sourceKeywords: ['unto the end of the world', 'Behold, thy salvation cometh', 'his reward is with him, and his work before him'],
    fulfillmentKeywords: ['Behold, thy King cometh unto thee', 'I come quickly; and my reward is with me'],
    terms: [],
  },
  'isa-63-9': {
    title: 'In All Their Affliction He Was Afflicted',
    principle:
      'The Angel of His presence saved them; in love and pity He redeemed and carried them. First principle: God does not watch affliction from outside — the Redeemer feels the burden He lifts, all the days of old.',
    sourceKeywords: ['In all their affliction he was afflicted', 'the angel of his presence saved them', 'he bare them, and carried them'],
    fulfillmentKeywords: ['the angel which redeemed me from all evil'],
    terms: [],
  },
  'isa-64-4': {
    title: 'What He Hath Prepared for Him That Waiteth for Him',
    principle:
      'Eye, ear, and heart have never perceived the prepared things. First principle: the waiting God outpaces the perceiving man — Paul quotes it for the Spirit-revealed things no eye had seen.',
    sourceKeywords: ['since the beginning of the world men have not heard', 'what he hath prepared for him that waiteth'],
    fulfillmentKeywords: ['Eye hath not seen, nor ear heard'],
    terms: [],
  },
  'isa-65-1': {
    title: 'I Am Found of Them That Sought Me Not',
    principle:
      'A nation not called by God\'s name finds Him. First principle: the sought-by-none find God — Paul quotes it as the Gentile paradox; grace searches before we pray.',
    sourceKeywords: ['I am sought of them that asked not for me', 'found of them that sought me not', 'a nation that was not called by my name'],
    fulfillmentKeywords: ['I was made manifest unto them that asked not after me'],
    terms: [],
  },
  'isa-65-2': {
    title: 'I Have Spread Out My Hands All the Day',
    principle:
      'Outstretched hands to a rebellious, self-walking people. First principle: the posture of God toward rebellion is open arms all day — rejection is the people\'s answer, not His posture.',
    sourceKeywords: ['spread out my hands all the day', 'a rebellious people', 'after their own thoughts'],
    fulfillmentKeywords: ['to Israel he saith, All day long I have stretched forth my hands'],
    terms: [],
  },
  'isa-65-17': {
    title: 'I Create New Heavens and a New Earth',
    principle:
      'The former things are not remembered nor come into mind. First principle: the eschaton is creation, not just rescue — Peter and Revelation both carry this promise forward to the made-new world.',
    sourceKeywords: ['I create new heavens and a new earth', 'the former shall not be remembered'],
    fulfillmentKeywords: ['a new heaven and a new earth'],
    terms: [],
  },
  'isa-66-1': {
    title: 'The Heaven Is My Throne, and the Earth Is My Footstool',
    principle:
      'The house-builder question: where is the place of My rest? First principle: Stephen\'s defense climaxes here — God cannot be housed; the temple argument dies on this verse.',
    sourceKeywords: ['The heaven is my throne', 'the earth is my footstool', 'where is the house that ye build'],
    fulfillmentKeywords: ['Heaven is my throne, and earth is my footstool'],
    terms: [],
  },
  'isa-66-2': {
    title: 'To This Man Will I Look, Poor and of a Contrite Spirit',
    principle:
      'The Hand-made all things — yet God looks at the trembling-hearted. First principle: the address of God\'s gaze is not architecture but attitude — poor, contrite, trembling at the word.',
    sourceKeywords: ['mine hand made', 'to this man will I look', 'trembleth at my word'],
    fulfillmentKeywords: ['Blessed are the poor in spirit'],
    terms: [],
  },
  'isa-66-24': {
    title: 'Their Worm Shall Not Die, Neither Shall Their Fire Be Quenched',
    principle:
      'The transgressors\' corpse-field and unquenched fire end the prophecy. First principle: Jesus quotes this three times as Gehenna\'s definition — the final abhorring is as lasting as the new heavens are new.',
    sourceKeywords: ['their worm shall not die', 'their fire shall be quenched', 'an abhorring unto all flesh'],
    fulfillmentKeywords: ['where their worm dieth not, and the fire is not quenched'],
    terms: [],
  },
  // ── Hand-written expansion: 1 Corinthians ───────────────────────────────
  '1co-1-19': {
    title: 'I Will Destroy the Wisdom of the Wise',
    principle:
      'Isaiah\'s marvellous work levels intellectual pride. First principle: the cross is God\'s answer to wisdom-worship — understanding of the prudent is brought to nothing where a crucified Messiah saves.',
    sourceKeywords: ['destroy the wisdom of the wise', 'bring to nothing the understanding'],
    fulfillmentKeywords: ['a marvellous work and a wonder'],
    terms: [],
  },
  '1co-1-30': {
    title: 'Made unto Us Wisdom, Righteousness, Sanctification, Redemption',
    principle:
      'Of God, in Christ Jesus — four gifts in one Person. First principle: THE LORD OUR RIGHTEOUSNESS of Jeremiah is personalized: Christ Himself is each covenant gift, not merely its delivery system.',
    sourceKeywords: ['of him are ye in Christ Jesus', 'wisdom, and righteousness', 'sanctification, and redemption'],
    fulfillmentKeywords: ['THE LORD OUR RIGHTEOUSNESS', 'by his knowledge shall my righteous servant justify many'],
    terms: [],
  },
  '1co-2-8': {
    title: 'Had They Known It, They Would Not Have Crucified the Lord of Glory',
    principle:
      'The princes of this world missed who He was. First principle: the ignorance of the crucifiers was real — and their unwitting act fulfilled the hidden counsel of God against the Lord of glory.',
    sourceKeywords: ['none of the princes of this world knew', 'crucified the Lord of glory'],
    fulfillmentKeywords: ['against his anointed', 'God before had shewed by the mouth of all his prophets'],
    terms: [],
  },
  '1co-2-9': {
    title: 'Eye Hath Not Seen, Nor Ear Heard',
    principle:
      'The prepared things for those who love God outrun every sense. First principle: Isaiah 64\'s unperceived wonders are revealed by the Spirit — not to spectators, but to lovers.',
    sourceKeywords: ['Eye hath not seen', 'nor ear heard', 'which God hath prepared for them that love him'],
    fulfillmentKeywords: ['what he hath prepared for him that waiteth for him'],
    terms: [],
  },
  '1co-3-19': {
    title: 'The Wisdom of This World Is Foolishness with God',
    principle:
      'He taketh the wise in their own craftiness. First principle: the snare of cleverness is itself — Job\'s friend knew the proverb before Paul weaponized it against Corinthian factions.',
    sourceKeywords: ['foolishness with God', 'He taketh the wise in their own craftiness'],
    fulfillmentKeywords: ['he taketh the wise in their own craftiness'],
    terms: [],
  },
  '1co-3-20': {
    title: 'The Lord Knoweth the Thoughts of the Wise',
    principle:
      'The thoughts of the wise are vain before Him who searches. First principle: knowing thoughts is God\'s prerogative — the psalm of judgment levels every boastful system.',
    sourceKeywords: ['The Lord knoweth the thoughts of the wise', 'that they are vain'],
    fulfillmentKeywords: ['the LORD knoweth the thoughts of man'],
    terms: [],
  },
  '1co-6-16': {
    title: 'Two, Saith He, Shall Be One Flesh',
    principle:
      'Union with a harlot makes one body — Genesis 2 governs the body\'s theology. First principle: the one-flesh bond is so real that its misuse is desecration; the member of Christ cannot be joined to a harlot.',
    sourceKeywords: ['joined to an harlot is one body', 'shall be one flesh'],
    fulfillmentKeywords: ['they twain shall be one flesh'],
    terms: [],
  },
  '1co-9-9': {
    title: 'Thou Shalt Not Muzzle the Mouth of the Ox',
    principle:
      'The treading ox lives from its labor — and the law was written for us. First principle: God\'s care for animals carries a human ethic; those who sow spiritual things may reap material support.',
    sourceKeywords: ['Thou shalt not muzzle the mouth of the ox', 'Doth God take care for oxen'],
    fulfillmentKeywords: ['thou shalt not muzzle the ox'],
    terms: [],
  },
  '1co-10-1': {
    title: 'All Our Fathers Were under the Cloud',
    principle:
      'The wilderness generation passed through the sea under the cloud. First principle: the exodus is the church\'s family album — Paul reads Israel\'s history as the Gentile church\'s own lineage of warning.',
    sourceKeywords: ['all our fathers were under the cloud', 'all passed through the sea'],
    fulfillmentKeywords: ['the LORD went before them... in the pillar of a cloud'],
    terms: [],
  },
  '1co-10-2': {
    title: 'All Were Baptized unto Moses in the Cloud and in the Sea',
    principle:
      'A baptism without water — cloud above, walls on either side. First principle: the crossing was an initiation into a deliverer; Christian baptism into Christ follows the same identification pattern.',
    sourceKeywords: ['all baptized unto Moses', 'in the cloud and in the sea'],
    fulfillmentKeywords: ['the waters were a wall unto them on their right hand'],
    terms: [],
  },
  '1co-10-7': {
    title: 'The People Sat Down to Eat and Drink, and Rose Up to Play',
    principle:
      'The golden-calf orgy is quoted as idolatry\'s liturgy. First principle: idolatry is feasting before a substitute god — Paul applies the Exodus scene to the Lord\'s-table context.',
    sourceKeywords: ['Neither be ye idolaters', 'sat down to eat and drink', 'rose up to play'],
    fulfillmentKeywords: ['they rose up early... and offered burnt offerings', 'rose up to play'],
    terms: [],
  },
  '1co-10-8': {
    title: 'Twenty-Three Thousand Fell in One Day',
    principle:
      'Fornication at Peor brought sudden plague. First principle: sin\'s judgment can be immediate and numerical — the register of Numbers 25 stands as a memorial of consequence.',
    sourceKeywords: ['commit fornication', 'fell in one day three and twenty thousand'],
    fulfillmentKeywords: ['twenty and four thousand died'],
    terms: [],
  },
  '1co-10-9': {
    title: 'Neither Let Us Tempt Christ',
    principle:
      'The wilderness grumblers tempted — and Paul names the tempted one Christ. First principle: the Rock followed them, and that Rock was Christ; testing God\'s patience with serpents has an eternal Addressee.',
    sourceKeywords: ['tempt Christ', 'destroyed of serpents'],
    fulfillmentKeywords: ['the people spake against God', 'fiery serpents'],
    terms: [],
  },
  '1co-10-26': {
    title: 'The Earth Is the Lord\'s, and the Fulness Thereof',
    principle:
      'Psalm 24 settles the marketplace question. First principle: the whole earth belongs to the Lord — meat bought in the shambles carries no intrinsic idolatry; ownership sanctifies inquiry.',
    sourceKeywords: ['the earth is the Lord\'s', 'and the fulness thereof'],
    fulfillmentKeywords: ['The earth is the LORD\'S'],
    terms: [],
  },
  '1co-11-25': {
    title: 'This Cup Is the New Testament in My Blood',
    principle:
      'The supper cup quotes Jeremiah 31 in blood. First principle: every Communion re-proclaims the new covenant\'s terms — remission by blood, remembrance by command.',
    sourceKeywords: ['the new testament in my blood', 'in remembrance of me'],
    fulfillmentKeywords: ['I will make a new covenant', 'forgive their iniquity'],
    terms: [],
  },
  '1co-12-27': {
    title: 'Ye Are the Body of Christ, and Members in Particular',
    principle:
      'Many members, one body — each with an office. First principle: the church is not like a body but is one; particularity of members is the design of the Head.',
    sourceKeywords: ['the body of Christ', 'members in particular'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1co-15-4': {
    title: 'He Rose Again the Third Day According to the Scriptures',
    principle:
      'Buried, risen on the third day — according to the Scriptures. First principle: the resurrection is not an appendix to the gospel but a fulfilled prediction — Jonah, Psalm 16, and Hosea 6 all said so.',
    sourceKeywords: ['he was buried', 'rose again the third day', 'according to the scriptures'],
    fulfillmentKeywords: ['in the belly of the fish three days', 'wilt not leave my soul in hell'],
    terms: [],
  },
  '1co-15-15': {
    title: 'We Are Found False Witnesses of God',
    principle:
      'If Christ is not raised, the apostolic testimony collapses into perjury. First principle: the resurrection is the fact on which every apostolic witness stands or falls — a truth-claim, not a metaphor.',
    sourceKeywords: ['false witnesses of God', 'he raised up Christ', 'the dead rise not'],
    fulfillmentKeywords: ['This Jesus hath God raised up'],
    terms: [],
  },
  '1co-15-21': {
    title: 'Since by Man Came Death, by Man Came the Resurrection',
    principle:
      'Death entered by a man; resurrection enters by a Man. First principle: the parallelism is incarnational — the problem needed a human solution, and the second Adam is it.',
    sourceKeywords: ['by man came death', 'by man came also the resurrection'],
    fulfillmentKeywords: ['dust thou art, and unto dust shalt thou return'],
    terms: [],
  },
  '1co-15-22': {
    title: 'As in Adam All Die, Even So in Christ Shall All Be Made Alive',
    principle:
      'Two unions, two destinies. First principle: the all in Christ is as definite as the all in Adam — location, not lineage, decides life; in Him is the resurrection.',
    sourceKeywords: ['in Adam all die', 'in Christ shall all be made alive'],
    fulfillmentKeywords: ['the hour is coming, in the which all that are in the graves'],
    terms: [],
  },
  '1co-15-25': {
    title: 'He Must Reign, Till He Hath Put All Enemies under His Feet',
    principle:
      'The enthroned Son reigns until the last enemy is footstooled. First principle: the kingdom is present in reign and future in completion — Psalm 110 describes the process, not just the seat.',
    sourceKeywords: ['he must reign', 'till he hath put all enemies under his feet'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'until I make thine enemies'],
    terms: [],
  },
  '1co-15-26': {
    title: 'The Last Enemy That Shall Be Destroyed Is Death',
    principle:
      'Death is the final casualty of Christ\'s reign. First principle: Isaiah\'s swallowed-up death and Revelation\'s lake of fire bracket the campaign — the ending is already written.',
    sourceKeywords: ['The last enemy', 'shall be destroyed is death'],
    fulfillmentKeywords: ['He will swallow up death in victory'],
    terms: [],
  },
  '1co-15-27': {
    title: 'He Hath Put All Things under His Feet',
    principle:
      'Psalm 8 quoted with one exception noted — the Father who subjects all. First principle: the psalm\'s universal subjection has a grammatical exception that guards the Trinity — all under the Son, the Son under none but the Father.',
    sourceKeywords: ['hath put all things under his feet', 'it is manifest that he is excepted'],
    fulfillmentKeywords: ['thou hast put all things under his feet'],
    terms: [],
  },
  '1co-15-32': {
    title: 'Let Us Eat and Drink; for to Morrow We Die',
    principle:
      'Paul fights beasts at Ephesus — pointless if there is no resurrection. First principle: Isaiah 22\'s fatalistic feast is the logical life of unbelief; resurrection hope is what makes endurance rational.',
    sourceKeywords: ['fought with beasts at Ephesus', 'let us eat and drink', 'to morrow we die'],
    fulfillmentKeywords: ['let us eat and drink; for to morrow we shall die'],
    terms: [],
  },
  '1co-15-51': {
    title: 'We Shall Not All Sleep, but We Shall All Be Changed',
    principle:
      'The mystery revealed: living saints changed with the sleeping raised. First principle: the last generation has an exemption — not sleep but change, in the twinkling of an eye, at the last trump.',
    sourceKeywords: ['I shew you a mystery', 'We shall not all sleep', 'we shall all be changed'],
    fulfillmentKeywords: ['they that sleep in the dust of the earth shall awake'],
    terms: [],
  },
  '1co-15-55': {
    title: 'O Death, Where Is Thy Sting?',
    principle:
      'Hosea\'s taunt becomes the resurrection\'s victory cry. First principle: the sting was sin and the law gave it power — the cross removes the venom, and the grave loses its victory.',
    sourceKeywords: ['O death, where is thy sting', 'O grave, where is thy victory'],
    fulfillmentKeywords: ['I will ransom them from the power of the grave', 'O death, I will be thy plagues'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Corinthians ───────────────────────────────
  '2co-3-7': {
    title: 'The Ministration of Death, Written and Engraven in Stones',
    principle:
      'Moses\' face shone so bright the children could not behold it — and that glory was to be done away. First principle: even a fading glory terrified; the surpassing glory of the Spirit outlasts stone.',
    sourceKeywords: ['ministration of death', 'engraven in stones', 'could not stedfastly behold the face of Moses'],
    fulfillmentKeywords: ['shone from his face'],
    terms: [],
  },
  '2co-3-13': {
    title: 'Not as Moses, Which Put a Vail over His Face',
    principle:
      'Moses veiled the fading so Israel could not see the end of what was abolished. First principle: the vail was mercy over obsolescence — the old covenant\'s glory had an expiration Paul is not afraid to name.',
    sourceKeywords: ['put a vail over his face', 'could not stedfastly look to the end', 'which is abolished'],
    fulfillmentKeywords: ['he took the vail off', 'spake unto the children of Israel'],
    terms: [],
  },
  '2co-3-16': {
    title: 'When It Shall Turn to the Lord, the Vail Shall Be Taken Away',
    principle:
      'The heart\'s turning lifts the covering. First principle: the vail is not on Moses\' face anymore but on the readers\' hearts — conversion to the Lord removes it in Christ.',
    sourceKeywords: ['when it shall turn to the Lord', 'the vail shall be taken away'],
    fulfillmentKeywords: ['he took the vail off until he came out'],
    terms: [],
  },
  '2co-3-18': {
    title: 'Beholding as in a Glass the Glory of the Lord',
    principle:
      'Open-faced reflection changes the beholder from glory to glory by the Spirit. First principle: sanctification is specular — we become what we behold; the unveiled mirror is the Spirit\'s instrument.',
    sourceKeywords: ['with open face beholding as in a glass', 'changed into the same image', 'from glory to glory'],
    fulfillmentKeywords: ['I shall behold thy face in righteousness', 'I shall be satisfied'],
    terms: [],
  },
  '2co-4-6': {
    title: 'God Hath Shined in Our Hearts',
    principle:
      'The creation command — light out of darkness — repeats in conversion. First principle: regeneration is a creation miracle in miniature; the face of Jesus Christ is the new light\'s location.',
    sourceKeywords: ['commanded the light to shine out of darkness', 'hath shined in our hearts', 'in the face of Jesus Christ'],
    fulfillmentKeywords: ['Let there be light: and there was light'],
    terms: [],
  },
  '2co-6-2': {
    title: 'Behold, Now Is the Accepted Time',
    principle:
      'Isaiah 49\'s accepted day is declared present. First principle: salvation has a season, and the season is now — the heard-and-helped Servant defines the open window.',
    sourceKeywords: ['I have heard thee in a time accepted', 'now is the accepted time', 'now is the day of salvation'],
    fulfillmentKeywords: ['In an acceptable time have I heard thee'],
    terms: [],
  },
  '2co-6-16': {
    title: 'Ye Are the Temple of the Living God',
    principle:
      'The dwelling promises of Exodus and Ezekiel are applied to believers. First principle: I will dwell in them moves from tent to persons — the sanctuary is a people, and idols have no lease there.',
    sourceKeywords: ['ye are the temple of the living God', 'I will dwell in them, and walk in them', 'they shall be my people'],
    fulfillmentKeywords: ['let them make me a sanctuary; that I may dwell among them'],
    terms: [],
  },
  '2co-6-17': {
    title: 'Come Out from Among Them, and Be Ye Separate',
    principle:
      'The separation call with a reception promise: I will receive you. First principle: touch-not holiness is not isolationism but covenant identity — separation is the door to fatherhood.',
    sourceKeywords: ['come out from among them', 'be ye separate', 'touch not the unclean thing'],
    fulfillmentKeywords: ['Depart ye, depart ye; touch no unclean thing'],
    terms: [],
  },
  '2co-6-18': {
    title: 'Ye Shall Be My Sons and Daughters',
    principle:
      'The Almighty adopts. First principle: Nathan\'s word to David — I will be to him a Father — expands from the royal Son to all who are in Him; sonship is promised, performed, and permanent.',
    sourceKeywords: ['a Father unto you', 'my sons and daughters', 'saith the Lord Almighty'],
    fulfillmentKeywords: ['I will be to him a Father', 'he shall be to me a Son'],
    terms: [],
  },
  '2co-8-9': {
    title: 'Though He Was Rich, Yet for Your Sakes He Became Poor',
    principle:
      'The incarnational economics of grace. First principle: Christ\'s poverty is the transfer mechanism — His emptied riches fund our funded eternity; giving follows the same pattern.',
    sourceKeywords: ['though he was rich', 'he became poor', 'through his poverty might be rich'],
    fulfillmentKeywords: ['he hath not where to lay his head', 'made himself of no reputation'],
    terms: [],
  },
  '2co-9-9': {
    title: 'He Hath Dispersed Abroad; He Hath Given to the Poor',
    principle:
      'Psalm 112\'s giver quoted for the collection. First principle: dispersed charity is enduring righteousness — the scatterer keeps, the hoarder loses; giving is seed, not subtraction.',
    sourceKeywords: ['He hath dispersed abroad', 'given to the poor', 'his righteousness remaineth for ever'],
    fulfillmentKeywords: ['his righteousness endureth for ever'],
    terms: [],
  },
  '2co-10-17': {
    title: 'He That Glorieth, Let Him Glory in the Lord',
    principle:
      'Jeremiah\'s rule for boasting. First principle: the only permissible boast is the Lord — knowing, understanding, and knowing Him that exercises lovingkindness, judgment, and righteousness.',
    sourceKeywords: ['he that glorieth', 'let him glory in the Lord'],
    fulfillmentKeywords: ['let not the wise man glory in his wisdom', 'glorieth in this, that he understandeth and knoweth me'],
    terms: [],
  },
  '2co-13-4': {
    title: 'He Was Crucified Through Weakness, Yet He Liveth',
    principle:
      'Crucified in weakness, living by God\'s power — the pattern for Paul and the Corinthians. First principle: apparent weakness is not the refutation of divine life but its usual container.',
    sourceKeywords: ['crucified through weakness', 'yet he liveth by the power of God', 'we shall live with him'],
    fulfillmentKeywords: ['despised and rejected of men'],
    terms: [],
  },

  // ── Hand-written expansion: Galatians ───────────────────────────────────
  'gal-1-8': {
    title: 'Though We, or an Angel from Heaven, Preach Any Other Gospel',
    principle:
      'The anathema guards the gospel from heaven\'s own messengers. First principle: the gospel is fixed once delivered — revelation\'s closed core outranks any later angelic revision, as Moses and John both warn.',
    sourceKeywords: ['an angel from heaven', 'preach any other gospel', 'let him be accursed'],
    fulfillmentKeywords: ['If any man shall add unto these things'],
    terms: [],
  },
  'gal-3-6': {
    title: 'Abraham Believed God, and It Was Accounted for Righteousness',
    principle:
      'Genesis 15:6 is the Galatian argument\'s foundation stone. First principle: righteousness by believing precedes law, circumcision, and works — the counting of faith as righteousness is the oldest gospel text.',
    sourceKeywords: ['Abraham believed God', 'accounted to him for righteousness'],
    fulfillmentKeywords: ['he believed in the LORD; and he counted it to him for righteousness'],
    terms: [],
  },
  'gal-3-8': {
    title: 'The Scripture Preached Before the Gospel unto Abraham',
    principle:
      'In thee shall all nations be blessed — the gospel four hundred years early. First principle: Scripture foresaw; Scripture preached — the justification of the heathen by faith was announced to the father of the faithful himself.',
    sourceKeywords: ['the scripture, foreseeing', 'preached before the gospel unto Abraham', 'In thee shall all nations be blessed'],
    fulfillmentKeywords: ['in thy seed shall all the nations of the earth be blessed'],
    terms: [],
  },
  'gal-3-10': {
    title: 'Cursed Is Every One That Continueth Not in All Things',
    principle:
      'Law-keepers are under the law\'s curse for one lapse. First principle: the curse is total in demand and universal in reach — Deuteronomy\'s amen-line indicts every continuant who has ever stopped.',
    sourceKeywords: ['under the curse', 'Cursed is every one', 'continueth not in all things'],
    fulfillmentKeywords: ['Cursed be he that confirmeth not all the words of this law'],
    terms: [],
  },
  'gal-3-11': {
    title: 'The Just Shall Live by Faith',
    principle:
      'Habakkuk 2:4 is the verse that splits law from life. First principle: three apostles quote it — Romans doctrinally, Galatians polemically, Hebrews pastorally — life by faith, never by performance.',
    sourceKeywords: ['no man is justified by the law', 'The just shall live by faith'],
    fulfillmentKeywords: ['the just shall live by his faith'],
    terms: [],
  },
  'gal-3-12': {
    title: 'The Man That Doeth Them Shall Live in Them',
    principle:
      'Leviticus 18:5 states the law\'s own terms — doing, not believing. First principle: the law is not of faith by design; its engine is doing. Mixing the engines wrecks both.',
    sourceKeywords: ['The law is not of faith', 'The man that doeth them shall live in them'],
    fulfillmentKeywords: ['which if a man do, he shall even live in them'],
    terms: [],
  },
  'gal-3-16': {
    title: 'He Saith Not, And to Seeds, as of Many; but as of One, Thy Seed',
    principle:
      'The promise to Abraham culminates in one Seed — Christ. First principle: Paul argues from a singular noun; the promises made to Abraham\'s seed were made to the Person who is the Seed.',
    sourceKeywords: ['to Abraham and his seed were the promises', 'as of one, And to thy seed, which is Christ'],
    fulfillmentKeywords: ['in thy seed shall all the nations of the earth be blessed'],
    terms: [],
  },
  'gal-3-17': {
    title: 'The Law, Which Was Four Hundred and Thirty Years After, Cannot Disannul',
    principle:
      'The confirmed covenant outranks the later law. First principle: chronology is theology — the promise is older, confirmed in Christ, and no later administration can cancel it.',
    sourceKeywords: ['the covenant... confirmed before of God in Christ', 'four hundred and thirty years after', 'cannot disannul'],
    fulfillmentKeywords: ['in the same day the LORD made a covenant with Abram'],
    terms: [],
  },
  'gal-3-19': {
    title: 'Wherefore Then Serveth the Law?',
    principle:
      'Added because of transgressions, till the Seed should come, ordained by angels through a mediator. First principle: the law was a temporary tutor with a retirement date — the Seed\'s arrival ended its custodianship.',
    sourceKeywords: ['Wherefore then serveth the law', 'added because of transgressions', 'till the seed should come'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'gal-3-22': {
    title: 'The Scripture Hath Concluded All under Sin',
    principle:
      'The universal shut-up has one purpose: the promise given to believers. First principle: the conclusion is custody, not condemnation alone — all under sin so the faith-promise has no rival door.',
    sourceKeywords: ['concluded all under sin', 'the promise by faith of Jesus Christ', 'given to them that believe'],
    fulfillmentKeywords: ['there is none righteous, no, not one'],
    terms: [],
  },
  'gal-3-28': {
    title: 'Neither Jew nor Greek, Bond nor Free, Male nor Female',
    principle:
      'All one in Christ Jesus. First principle: the oneness is baptismal and covenantal — everyone who calls on the name of the Lord is one heir; the walls fell in the water.',
    sourceKeywords: ['neither Jew nor Greek', 'bond nor free', 'all one in Christ Jesus'],
    fulfillmentKeywords: ['whosoever shall call on the name of the LORD'],
    terms: [],
  },
  'gal-3-29': {
    title: 'If Ye Be Christ\'s, Then Are Ye Abraham\'s Seed',
    principle:
      'Belonging to Christ makes heirs of the promise. First principle: the seed promise funnels through the Seed — being in Him is being in Abraham\'s covenant; the land of the promise is the world to inherit.',
    sourceKeywords: ['if ye be Christ\'s', 'Abraham\'s seed', 'heirs according to the promise'],
    fulfillmentKeywords: ['in thy seed shall all nations be blessed'],
    terms: [],
  },
  'gal-4-5': {
    title: 'To Redeem Them That Were under the Law',
    principle:
      'The fullness-of-time Son redeems law-dwellers into sonship. First principle: adoption is the purchase — redemption from under the law is the door to crying, Abba, Father.',
    sourceKeywords: ['To redeem them that were under the law', 'that we might receive the adoption of sons'],
    fulfillmentKeywords: ['he shall justify many', 'I have called thee by thy name; thou art mine'],
    terms: [],
  },
  'gal-4-22': {
    title: 'Abraham Had Two Sons',
    principle:
      'One by a bondmaid, one by a freewoman — the two-covenant allegory begins. First principle: the two sons map two covenants; the birth of each decides its household.',
    sourceKeywords: ['Abraham had two sons', 'one by a bondmaid', 'the other by a freewoman'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'gal-4-27': {
    title: 'Rejoice, Thou Barren That Bearest Not',
    principle:
      'Isaiah 54 quoted for the freewoman\'s many children. First principle: the desolate Jerusalem-above has more children than the enslaved — grace\'s family outgrows the flesh\'s.',
    sourceKeywords: ['Rejoice, thou barren that bearest not', 'the desolate hath many more children'],
    fulfillmentKeywords: ['Sing, O barren, thou that didst not bear'],
    terms: [],
  },
  'gal-4-30': {
    title: 'Cast Out the Bondwoman and Her Son',
    principle:
      'Sarah\'s demand becomes Scripture\'s verdict: the bondman shall not inherit. First principle: law-born and promise-born cannot co-inherit; the household of faith is fenced by the Word, not by sentiment.',
    sourceKeywords: ['Cast out the bondwoman and her son', 'shall not be heir with the son of the freewoman'],
    fulfillmentKeywords: ['cast out this bondwoman and her son'],
    terms: [],
  },
  'gal-6-2': {
    title: 'Bear Ye One Another\'s Burdens',
    principle:
      'Mutual bearing fulfills the law of Christ. First principle: the new law has a new verb — bear; the strong carrying the fallen is Christ\'s own load-bearing love continued.',
    sourceKeywords: ['Bear ye one another\'s burdens', 'fulfil the law of Christ'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'gal-6-16': {
    title: 'Peace on Them, and upon the Israel of God',
    principle:
      'The rule of new creation carries peace and mercy to the true Israel. First principle: the Israel of God are the crested new-creation walkers — mercy sought for a people defined by the cross, not the flesh.',
    sourceKeywords: ['walk according to this rule', 'peace be on them', 'upon the Israel of God'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Ephesians ───────────────────────────────────
  'eph-1-4': {
    title: 'Chosen in Him Before the Foundation of the World',
    principle:
      'Election is in Christ and aims at holiness in love. First principle: the choice predates creation and its purpose is character — holy and blameless before Him, not merely selected by Him.',
    sourceKeywords: ['chosen us in him', 'before the foundation of the world', 'holy and without blame'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'eph-1-7': {
    title: 'In Whom We Have Redemption Through His Blood',
    principle:
      'Forgiveness according to the riches of His grace. First principle: redemption is present possession — the blood-price was paid once, and the forgiveness it bought is held, not hoped for.',
    sourceKeywords: ['redemption through his blood', 'the forgiveness of sins', 'riches of his grace'],
    fulfillmentKeywords: ['he was wounded for our transgressions', 'every one that thirsteth, come'],
    terms: [],
  },
  'eph-1-10': {
    title: 'He Might Gather Together in One All Things in Christ',
    principle:
      'The fullness of times gathers heaven and earth into one Head. First principle: history has a unification plan — dispensational fullness, cosmic regathering, all things in Christ.',
    sourceKeywords: ['dispensation of the fulness of times', 'gather together in one all things in Christ', 'which are in heaven, and which are on earth'],
    fulfillmentKeywords: ['the government shall be upon his shoulder', 'shall never be destroyed'],
    terms: [],
  },
  'eph-1-21': {
    title: 'Far above All Principality, and Power',
    principle:
      'Every named power in this age and the next is beneath the seated Christ. First principle: the ranking list is exhaustive — the name above every name outranks every throne the cosmic or political orders can produce.',
    sourceKeywords: ['Far above all principality', 'every name that is named', 'in that which is to come'],
    fulfillmentKeywords: ['I will make him my firstborn, higher than the kings'],
    terms: [],
  },
  'eph-1-22': {
    title: 'Hath Put All Things under His Feet, Head over All to the Church',
    principle:
      'Psalm 8\'s footstool is given as headship over the body. First principle: the universe\'s subjection has a home address — the Head who fills all things exercises it first for the church.',
    sourceKeywords: ['all things under his feet', 'the head over all things to the church'],
    fulfillmentKeywords: ['madest him to have dominion', 'all things under his feet'],
    terms: [],
  },
  'eph-2-8': {
    title: 'By Grace Are Ye Saved Through Faith',
    principle:
      'Salvation is gift, not wage — not of works. First principle: grace through faith excludes boasting at the root — the chain is God\'s mercy, faith\'s hand, God\'s gift; Jonah\'s fish-story agrees: salvation is of the LORD.',
    sourceKeywords: ['by grace are ye saved through faith', 'not of yourselves', 'the gift of God'],
    fulfillmentKeywords: ['Salvation is of the LORD'],
    terms: [],
  },
  'eph-2-13': {
    title: 'Ye Who Sometimes Were Far Off Are Made Nigh by the Blood',
    principle:
      'Distance is overcome by blood, not by geography. First principle: the far-off Gentiles are brought near — Isaiah\'s peace to far and near is preached by the Peacemaker Himself.',
    sourceKeywords: ['sometimes were far off', 'made nigh by the blood of Christ'],
    fulfillmentKeywords: ['Peace, peace to him that is far off, and to him that is near'],
    terms: [],
  },
  'eph-2-14': {
    title: 'He Is Our Peace, Who Hath Made Both One',
    principle:
      'The middle wall of partition is broken down. First principle: Christ does not make peace between Jew and Gentile — He is it; the dividing wall is demolished in His own body.',
    sourceKeywords: ['He is our peace', 'made both one', 'broken down the middle wall of partition'],
    fulfillmentKeywords: ['The Prince of Peace'],
    terms: [],
  },
  'eph-2-17': {
    title: 'Came and Preached Peace to You Which Were Far Off',
    principle:
      'The exalted Christ preaches through the preachers — far and near in one sentence. First principle: Isaiah\'s messengers ran with peace; the Lord of the messengers delivers it Himself through them.',
    sourceKeywords: ['preached peace', 'far off', 'them that were nigh'],
    fulfillmentKeywords: ['How beautiful... the feet of him that bringeth good tidings'],
    terms: [],
  },
  'eph-4-8': {
    title: 'When He Ascended up on High, He Led Captivity Captive',
    principle:
      'Psalm 68\'s victory parade becomes the gift-dispensing ascension. First principle: the Conqueror shares the spoils — apostles, prophets, evangelists, pastors, teachers are the gifts He gave.',
    sourceKeywords: ['ascended up on high', 'led captivity captive', 'gave gifts unto men'],
    fulfillmentKeywords: ['thou hast ascended on high', 'received gifts for men'],
    terms: [],
  },
  'eph-4-9': {
    title: 'That He Also Descended First into the Lower Parts',
    principle:
      'Ascension implies a prior descent. First principle: the ascent to the throne required the descent to the lower earth — the psalm\'s logic holds the incarnation and the grave together.',
    sourceKeywords: ['Now that he ascended', 'he also descended first', 'the lower parts of the earth'],
    fulfillmentKeywords: ['thou hast ascended on high'],
    terms: [],
  },
  'eph-4-25': {
    title: 'Speak Every Man Truth with His Neighbour',
    principle:
      'Lying is put off because members belong to one another. First principle: Zechariah\'s true-speaking peace is communal — truth is the joint-fluid of the body.',
    sourceKeywords: ['putting away lying', 'speak every man truth with his neighbour', 'members one of another'],
    fulfillmentKeywords: ['speak ye every man the truth to his neighbour'],
    terms: [],
  },
  'eph-4-26': {
    title: 'Be Ye Angry, and Sin Not',
    principle:
      'Psalm 4\'s evening rule for anger: felt, limited, sun-set. First principle: anger itself is permitted; its lodging overnight is not — do not give the devil a furnished room.',
    sourceKeywords: ['Be ye angry, and sin not', 'let not the sun go down upon your wrath'],
    fulfillmentKeywords: ['stand in awe, and sin not', 'commune with your own heart upon your bed'],
    terms: [],
  },
  'eph-5-2': {
    title: 'An Offering and a Sacrifice to God for a Sweetsmelling Savour',
    principle:
      'Walk in love as Christ gave Himself. First principle: the Levitical sweet-savour vocabulary is applied to the cross — self-giving love is the smell God loves.',
    sourceKeywords: ['walk in love', 'given himself for us', 'a sweetsmelling savour'],
    fulfillmentKeywords: ['a sweet savour unto the LORD'],
    terms: [],
  },
  'eph-5-27': {
    title: 'A Glorious Church, Not Having Spot or Wrinkle',
    principle:
      'The presenting goal: holy, unblemished. First principle: the church\'s final form is ceremonial perfection — Psalm 45\'s bridal radiance granted, not grown.',
    sourceKeywords: ['a glorious church', 'not having spot, or wrinkle', 'holy and without blemish'],
    fulfillmentKeywords: ['the king\'s daughter is all glorious within'],
    terms: [],
  },
  'eph-5-31': {
    title: 'They Two Shall Be One Flesh',
    principle:
      'Genesis 2:24 quoted in the marriage section. First principle: marriage is the standing parable; the union of husband and wife preaches Christ and the church every day.',
    sourceKeywords: ['leave his father and mother', 'joined unto his wife', 'one flesh'],
    fulfillmentKeywords: ['they shall be one flesh'],
    terms: [],
  },
  'eph-5-32': {
    title: 'I Speak Concerning Christ and the Church',
    principle:
      'The mystery named: marriage was prophecy. First principle: Hosea\'s bridegroom God, Isaiah\'s Maker-Husband, and Genesis\'s one flesh all aimed here — Christ and His church.',
    sourceKeywords: ['This is a great mystery', 'concerning Christ and the church'],
    fulfillmentKeywords: ['I will betroth thee unto me for ever'],
    terms: [],
  },
  'eph-6-10': {
    title: 'Be Strong in the Lord, and in the Power of His Might',
    principle:
      'The armor section opens with borrowed strength. First principle: Joel\'s beat-swords-into-armies call is inverted for the church — strength is received from the Lord, not mustered.',
    sourceKeywords: ['be strong in the Lord', 'the power of his might'],
    fulfillmentKeywords: ['be ye strong', 'the strength of the LORD'],
    terms: [],
  },
  'eph-6-14': {
    title: 'Having Your Loins Girt about with Truth',
    principle:
      'The first armor piece is truth-girt loins, breastplate of righteousness. First principle: Isaiah 59\'s divine Warrior dresses; the church borrows His wardrobe — truth and righteousness as defensive gear.',
    sourceKeywords: ['loins girt about with truth', 'breastplate of righteousness'],
    fulfillmentKeywords: ['righteousness as the breastplate', 'faithfulness the girdle of his loins'],
    terms: [],
  },
  'eph-6-17': {
    title: 'The Sword of the Spirit, Which Is the Word of God',
    principle:
      'Helmet of salvation, sword of the Spirit. First principle: the Spirit\'s sword is the spoken Word — Isaiah\'s mouth-sword and Isaiah\'s helmet are handed to the believer.',
    sourceKeywords: ['helmet of salvation', 'the sword of the Spirit', 'the word of God'],
    fulfillmentKeywords: ['the word of the LORD is quick, and powerful', 'salvation for an helmet'],
    terms: [],
  },

  // ── Hand-written expansion: Philippians ─────────────────────────────────
  'php-1-19': {
    title: 'The Supply of the Spirit of Jesus Christ',
    principle:
      'Imprisonment turns to salvation through prayer and Spirit-supply. First principle: Job\'s hope — I know I shall be justified — is Paul\'s prison-hope; the Spirit\'s supply is the deliverance mechanism.',
    sourceKeywords: ['this shall turn to my salvation', 'through your prayer', 'the supply of the Spirit'],
    fulfillmentKeywords: ['he also shall be my salvation', 'I shall not be moved'],
    terms: [],
  },
  'php-2-7': {
    title: 'Made Himself of No Reputation',
    principle:
      'The form of a servant, the likeness of men. First principle: kenosis is voluntary descent — the Servant Song\'s no-form-nor-comeliness and no-place-to-lay-head compressed into one self-emptying.',
    sourceKeywords: ['made himself of no reputation', 'the form of a servant', 'the likeness of men'],
    fulfillmentKeywords: ['he hath no form nor comeliness', 'the foxes have holes'],
    terms: [],
  },
  'php-2-9': {
    title: 'Wherefore God Also Hath Highly Exalted Him',
    principle:
      'The name above every name is given after the obedience unto death. First principle: Isaiah 52\'s very high and Psalm 2\'s decree meet in the wherefore — exaltation is the Father\'s verdict on the cross.',
    sourceKeywords: ['God also hath highly exalted him', 'a name which is above every name'],
    fulfillmentKeywords: ['he shall be exalted and extolled, and be very high'],
    terms: [],
  },
  'php-2-11': {
    title: 'Every Tongue Should Confess That Jesus Christ Is Lord',
    principle:
      'The universal confession to the glory of the Father. First principle: Isaiah 45\'s every-tongue oath is transferred to Jesus — Lord is the covenant name confessed in the covenant oath.',
    sourceKeywords: ['every tongue should confess', 'Jesus Christ is Lord', 'to the glory of God the Father'],
    fulfillmentKeywords: ['unto me every knee shall bow, every tongue shall swear'],
    terms: [],
  },
  'php-2-15': {
    title: 'Ye Shine as Lights in the World',
    principle:
      'Blameless sons of God in a crooked nation. First principle: Deuteronomy 32\'s crooked generation and Daniel 12\'s shining wise converge — the church is the light-bearing remnant in the perversity.',
    sourceKeywords: ['blameless and harmless', 'a crooked and perverse nation', 'shine as lights in the world'],
    fulfillmentKeywords: ['they that be wise shall shine as the brightness'],
    terms: [],
  },
  'php-3-3': {
    title: 'We Are the Circumcision, Which Worship God in the Spirit',
    principle:
      'True circumcision is Spirit-worship, Christ-rejoicing, no flesh-confidence. First principle: the uncircumcised heart of Deuteronomy is the true cut — worship in spirit is the covenant\'s real mark.',
    sourceKeywords: ['we are the circumcision', 'worship God in the spirit', 'no confidence in the flesh'],
    fulfillmentKeywords: ['circumcise the foreskin of your heart'],
    terms: [],
  },
  'php-3-9': {
    title: 'Not Having Mine Own Righteousness, Which Is of the Law',
    principle:
      'Righteousness through the faith of Christ, by God. First principle: the two righteousnesses are exclusive — Isaiah\'s robe is given where law-currency is refused; Paul counts his pedigree as loss for the robe.',
    sourceKeywords: ['mine own righteousness', 'of the law', 'the righteousness which is of God by faith'],
    fulfillmentKeywords: ['he hath clothed me with the garments of salvation'],
    terms: [],
  },
  'php-3-20': {
    title: 'Our Conversation Is in Heaven; from Whence We Look for the Saviour',
    principle:
      'Citizenship in heaven; a Savior awaited. First principle: the colony waits for the Emperor — the Savior from heaven is the coming Lord, and the waiting is civic identity.',
    sourceKeywords: ['our conversation is in heaven', 'from whence also we look for the Saviour'],
    fulfillmentKeywords: ['This same Jesus shall so come in like manner'],
    terms: [],
  },
  'php-3-21': {
    title: 'Who Shall Change Our Vile Body, Like unto His Glorious Body',
    principle:
      'The subduing power that raises is the power that rules all things. First principle: resurrection bodies are fashioned like His — the working of enthronement power is aimed at our dust.',
    sourceKeywords: ['change our vile body', 'fashioned like unto his glorious body', 'subdue all things unto himself'],
    fulfillmentKeywords: ['fashioned like unto him'],
    terms: [],
  },
  'php-4-7': {
    title: 'The Peace of God, Which Passeth All Understanding',
    principle:
      'Prayer-peace garrisons hearts and minds in Christ. First principle: the garrison is a sentry of peace — Isaiah\'s kept-in-perfect-peace mind stands armed at the door of anxiety.',
    sourceKeywords: ['the peace of God', 'passeth all understanding', 'keep your hearts and minds'],
    fulfillmentKeywords: ['thou wilt keep him in perfect peace, whose mind is stayed on thee'],
    terms: [],
  },
  'php-4-18': {
    title: 'An Odour of a Sweet Smell, a Sacrifice Acceptable',
    principle:
      'The Philippians\' gift is levitical incense. First principle: giving is sacrifice — the aroma vocabulary of the altar applies to the wallet; well-pleasing gifts smell like the altar.',
    sourceKeywords: ['an odour of a sweet smell', 'a sacrifice acceptable', 'wellpleasing to God'],
    fulfillmentKeywords: ['a sweet savour unto the LORD'],
    terms: [],
  },
  'php-4-19': {
    title: 'My God Shall Supply All Your Need',
    principle:
      'Glory-riches in Christ Jesus fund the givers. First principle: the supply follows the sacrifice — the Shepherd-psalm\'s I shall not want becomes the apostolic promise to a generous church.',
    sourceKeywords: ['my God shall supply all your need', 'according to his riches in glory by Christ Jesus'],
    fulfillmentKeywords: ['I shall not want'],
    terms: [],
  },

  // ── Hand-written expansion: Colossians ──────────────────────────────────
  'col-1-13': {
    title: 'Delivered from the Power of Darkness, Translated into the Kingdom',
    principle:
      'Rescue and relocation — the kingdom of the dear Son. First principle: conversion is a transfer of jurisdictions; darkness\'s authority ends where the Son\'s kingdom begins.',
    sourceKeywords: ['delivered us from the power of darkness', 'translated us into the kingdom of his dear Son'],
    fulfillmentKeywords: ['delivered thee from the power of darkness', 'to open their eyes'],
    terms: [],
  },
  'col-1-17': {
    title: 'He Is Before All Things, and by Him All Things Consist',
    principle:
      'Preexistence and coherence — the Son holds the cosmos together. First principle: consistency is personal; every atom\'s persistence is the Word\'s ongoing work — the Wisdom of Proverbs 8 named.',
    sourceKeywords: ['He is before all things', 'by him all things consist'],
    fulfillmentKeywords: ['The LORD possessed me in the beginning of his way'],
    terms: [],
  },
  'col-1-18': {
    title: 'He Is the Head of the Body, the Firstborn from the Dead',
    principle:
      'Beginning and firstborn, so that in all things He has preeminence. First principle: headship and resurrection-prime join — the church\'s Head is death\'s Firstborn, and preeminence is His in everything.',
    sourceKeywords: ['the head of the body, the church', 'the firstborn from the dead', 'the preeminence'],
    fulfillmentKeywords: ['the firstborn of every creature', 'the first that should rise from the dead'],
    terms: [],
  },
  'col-1-20': {
    title: 'Having Made Peace Through the Blood of His Cross',
    principle:
      'Reconciliation spans earth and heaven. First principle: the cross\'s peace is cosmic in scale and personal in application — the Prince of Peace purchased the reconciliation His name promised.',
    sourceKeywords: ['made peace through the blood of his cross', 'reconcile all things unto himself', 'things in earth, or things in heaven'],
    fulfillmentKeywords: ['Prince of Peace', 'He is our peace'],
    terms: [],
  },
  'col-1-26': {
    title: 'The Mystery Hid from Ages, Now Made Manifest',
    principle:
      'The hidden mystery is revealed to saints. First principle: Romans 16 and Colossians 1 open the same sealed book — the mystery is Christ\'s indwelling plan, timed for the apostolic age.',
    sourceKeywords: ['the mystery which hath been hid from ages', 'made manifest to his saints'],
    fulfillmentKeywords: ['the revelation of the mystery, which was kept secret'],
    terms: [],
  },
  'col-1-27': {
    title: 'Christ in You, the Hope of Glory',
    principle:
      'The glory-riches mystery is Gentile-located. First principle: the hope is not Christ coming back alone but Christ dwelling within — Immanuel internalized among the nations.',
    sourceKeywords: ['the riches of the glory of this mystery', 'among the Gentiles', 'Christ in you, the hope of glory'],
    fulfillmentKeywords: ['they shall call his name Immanuel... God with us'],
    terms: [],
  },
  'col-2-3': {
    title: 'In Whom Are Hid All the Treasures of Wisdom and Knowledge',
    principle:
      'The treasure vault is a Person. First principle: Proverbs\' wisdom-cry and Isaiah\'s Spirit-of-wisdom find their treasury in Christ — knowledge is hidden in Him, not in systems.',
    sourceKeywords: ['hid all the treasures', 'wisdom and knowledge'],
    fulfillmentKeywords: ['the spirit of wisdom and understanding', 'the LORD giveth wisdom'],
    terms: [],
  },
  'col-2-9': {
    title: 'In Him Dwelleth All the Fulness of the Godhead Bodily',
    principle:
      'The totality of deity in a body. First principle: Isaiah\'s Mighty God and John\'s Word-made-flesh conclude here — fullness bodily, not metaphorically; the incarnation is theodicy and theology at once.',
    sourceKeywords: ['all the fulness of the Godhead', 'bodily'],
    fulfillmentKeywords: ['Unto us a child is born... The mighty God', 'the Word was made flesh'],
    terms: [],
  },
  'col-2-11': {
    title: 'Circumcised with the Circumcision Made Without Hands',
    principle:
      'The putting off of the body of sins by Christ\'s circumcision. First principle: the heart-circumcision of Deuteronomy is performed without hands — the flesh-cutting is flesh-removal.',
    sourceKeywords: ['circumcision made without hands', 'putting off the body of the sins', 'the circumcision of Christ'],
    fulfillmentKeywords: ['circumcise the foreskin of thy heart'],
    terms: [],
  },
  'col-2-12': {
    title: 'Buried with Him in Baptism, Wherein Also Ye Are Risen',
    principle:
      'Baptism joins the burial and the rising through faith in God\'s operation. First principle: the ordinance reenacts the gospel sequence — buried with, raised with; the power is God\'s, the faith is ours.',
    sourceKeywords: ['buried with him in baptism', 'ye are risen with him', 'the operation of God, who hath raised him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'col-2-14': {
    title: 'Blotting Out the Handwriting of Ordinances, Nailing It to His Cross',
    principle:
      'The contrary record is erased and nailed up as cancelled. First principle: the debt-document is killed at the scene of the payment — Isaiah\'s blotting and David\'s blessed covering happened at Golgotha.',
    sourceKeywords: ['Blotting out the handwriting of ordinances', 'which was contrary to us', 'nailing it to his cross'],
    fulfillmentKeywords: ['blotteth out thy transgressions', 'Blessed is he whose transgression is covered'],
    terms: [],
  },
  'col-2-17': {
    title: 'Which Are a Shadow of Things to Come; the Body Is of Christ',
    principle:
      'Shadows precede substance. First principle: the sanctuary system was a silhouette — Hebrews\' shadow-language and the tabernacle pattern find their casting body in Christ.',
    sourceKeywords: ['a shadow of things to come', 'the body is of Christ'],
    fulfillmentKeywords: ['who serve unto the example and shadow of heavenly things'],
    terms: [],
  },
  'col-3-1': {
    title: 'If Ye Then Be Risen with Christ, Seek Those Things Which Are Above',
    principle:
      'The risen life seeks the seated Christ. First principle: ascension is the church\'s orientation — the right-hand session of Psalm 110 is where the affections live.',
    sourceKeywords: ['risen with Christ', 'seek those things which are above', 'where Christ sitteth on the right hand of God'],
    fulfillmentKeywords: ['Sit thou at my right hand'],
    terms: [],
  },
  'col-3-4': {
    title: 'When Christ, Who Is Our Life, Shall Appear',
    principle:
      'The appearing reveals the hidden life — saints appear with Him in glory. First principle: Christ as life makes His appearing ours; the hidden-with-Christ reality becomes visible glory.',
    sourceKeywords: ['Christ, who is our life', 'shall appear', 'appear with him in glory'],
    fulfillmentKeywords: ['we shall be like him; for we shall see him as he is'],
    terms: [],
  },
  'col-3-11': {
    title: 'Neither Greek nor Jew... but Christ Is All, and in All',
    principle:
      'Barbarian and Scythian dissolve in the new man. First principle: Galatians\' oneness is extended to the empire\'s extremes — Christ is the all in all, so ethnicity is not a rank.',
    sourceKeywords: ['neither Greek nor Jew', 'Barbarian, Scythian', 'Christ is all, and in all'],
    fulfillmentKeywords: ['there is neither Jew nor Greek'],
    terms: [],
  },
  // ── Hand-written expansion: 1 Thessalonians ─────────────────────────────
  '1th-1-10': {
    title: 'To Wait for His Son from Heaven',
    principle:
      'The delivered wait for the Deliverer from the wrath to come. First principle: waiting is the converted posture — the risen Jesus from heaven is both rescuer and expectation.',
    sourceKeywords: ['wait for his Son from heaven', 'delivered us from the wrath to come'],
    fulfillmentKeywords: ['one like the Son of man came with the clouds'],
    terms: [],
  },
  '1th-2-19': {
    title: 'What Is Our Hope, or Joy, or Crown of Rejoicing?',
    principle:
      'The converts themselves are the crown at His coming. First principle: ministry\'s reward is people standing before the Lord — Daniel\'s soul-winners shining is Paul\'s crown.',
    sourceKeywords: ['hope, or joy, or crown of rejoicing', 'in the presence of our Lord Jesus Christ at his coming'],
    fulfillmentKeywords: ['they that turn many to righteousness as the stars'],
    terms: [],
  },
  '1th-3-13': {
    title: 'At the Coming of Our Lord with All His Saints',
    principle:
      'Hearts established unblameable in holiness for the day of saints\' company. First principle: holiness has a deadline and a procession — He comes with all His saints, and hearts are readied now.',
    sourceKeywords: ['stablish your hearts unblameable in holiness', 'the coming of our Lord Jesus Christ', 'with all his saints'],
    fulfillmentKeywords: ['the LORD my God shall come, and all the saints with thee'],
    terms: [],
  },
  '1th-4-13': {
    title: 'That Ye Sorrow Not, Even as Others Which Have No Hope',
    principle:
      'Sleeping believers are not lost to ignorance-grief. First principle: Christian grief is bounded by resurrection fact — ignorance is the sorrow\'s source, and the word of the Lord is its cure.',
    sourceKeywords: ['concerning them which are asleep', 'sorrow not', 'others which have no hope'],
    fulfillmentKeywords: ['I am the resurrection, and the life'],
    terms: [],
  },
  '1th-4-14': {
    title: 'Them Also Which Sleep in Jesus Will God Bring with Him',
    principle:
      'The died-and-rose fact guarantees the brought-with. First principle: the sleeping saints are with Jesus now and return with Him — the same belief that saved them escorts them back.',
    sourceKeywords: ['Jesus died and rose again', 'them also which sleep in Jesus', 'God bring with him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1th-4-15': {
    title: 'We Which Are Alive... Shall Not Prevent Them Which Are Asleep',
    principle:
      'By the word of the Lord: the living do not arrive ahead of the dead. First principle: the resurrection order protects the sleeping saints\' priority — the dead rise first, then the caught-up living.',
    sourceKeywords: ['by the word of the Lord', 'alive and remain', 'shall not prevent them which are asleep'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1th-5-2': {
    title: 'The Day of the Lord Cometh as a Thief in the Night',
    principle:
      'The suddenness is proverbial among the apostles. First principle: the thief-timing is for the unwatching — suddenness to the world is schedule to the sons of light.',
    sourceKeywords: ['the day of the Lord so cometh as a thief in the night'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1th-5-3': {
    title: 'When They Shall Say, Peace and Safety',
    principle:
      'The peace-cry precedes inescapable labor pains. First principle: the world\'s slogan is the signal — destruction arrives in the vocabulary of security, as Isaiah\'s birth-pang image warned.',
    sourceKeywords: ['Peace and safety', 'sudden destruction cometh', 'as travail upon a woman with child'],
    fulfillmentKeywords: ['they shall be afraid: pangs and sorrows shall take hold of them'],
    terms: [],
  },
  '1th-5-23': {
    title: 'Your Whole Spirit and Soul and Body Preserved',
    principle:
      'Wholly sanctified, preserved blameless unto the coming. First principle: sanctification is total (spirit, soul, body) and dated — preserved unto the coming by the faithful God who called.',
    sourceKeywords: ['sanctify you wholly', 'spirit and soul and body', 'blameless unto the coming'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 2 Thessalonians ─────────────────────────────
  '2th-1-7': {
    title: 'Rest with Us, When the Lord Jesus Shall Be Revealed',
    principle:
      'Tribulated believers receive rest at the revealed-from-heaven appearing. First principle: rest is timed to revelation — the relief of the troubled arrives with the mighty-angel display.',
    sourceKeywords: ['rest with us', 'the Lord Jesus shall be revealed', 'with his mighty angels'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2th-1-8': {
    title: 'In Flaming Fire Taking Vengeance',
    principle:
      'Revelation includes fiery vengeance on the ignorant and the disobedient. First principle: the Isaiah 11 mouth-sword and the flaming judgment belong to the same returning Lord who saved.',
    sourceKeywords: ['In flaming fire', 'taking vengeance', 'obey not the gospel'],
    fulfillmentKeywords: ['with the breath of his lips shall he slay the wicked'],
    terms: [],
  },
  '2th-1-10': {
    title: 'When He Shall Come to Be Glorified in His Saints',
    principle:
      'The admired-in-believers day. First principle: Christ\'s glory at the coming is displayed in the saints He glorified — the believed testimony becomes visible admiration.',
    sourceKeywords: ['glorified in his saints', 'admired in all them that believe', 'in that day'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2th-2-3': {
    title: 'That Day Shall Not Come, Except There Come a Falling Away First',
    principle:
      'The apostasy and the man of sin precede the Day. First principle: the end has asequence — falling away first, lawless one revealed; Daniel 7\'s little power and Jesus\' deception warnings converge.',
    sourceKeywords: ['a falling away first', 'that man of sin be revealed', 'the son of perdition'],
    fulfillmentKeywords: ['he shall speak great words against the most High'],
    terms: [],
  },
  '2th-2-4': {
    title: 'He as God Sitteth in the Temple of God',
    principle:
      'The self-deifying exhibition in the temple. First principle: Daniel 11\'s exalting king and Ezekiel\'s prince-tyrant are the lineage of this seated blasphemy — the abomination takes a chair.',
    sourceKeywords: ['opposeth and exalteth himself', 'sitteth in the temple of God', 'shewing himself that he is God'],
    fulfillmentKeywords: ['he shall exalt himself, and magnify himself above every god'],
    terms: [],
  },
  '2th-2-8': {
    title: 'The Lord Shall Consume Him with the Spirit of His Mouth',
    principle:
      'The Wicked is revealed — and destroyed by the breath of His coming. First principle: Isaiah 11\'s breath-of-lips slaying is the mechanism of the anti-christ\'s end; a word kills the warrior.',
    sourceKeywords: ['that Wicked be revealed', 'consume with the spirit of his mouth', 'the brightness of his coming'],
    fulfillmentKeywords: ['with the breath of his lips shall he slay the wicked'],
    terms: [],
  },
  '2th-2-9': {
    title: 'Whose Coming Is After the Working of Satan',
    principle:
      'Counterfeit power, signs, and lying wonders. First principle: the lawless one photocopies Pentecost — power and signs without truth; Jesus warned of great signs that deceive the very elect.',
    sourceKeywords: ['after the working of Satan', 'all power and signs', 'lying wonders'],
    fulfillmentKeywords: ['shall shew great signs and wonders'],
    terms: [],
  },
  '2th-2-11': {
    title: 'God Shall Send Them Strong Delusion',
    principle:
      'The judicial lie for those who refused the truth. First principle: delusion is judgment — when truth is resisted, a believed lie becomes God\'s sentence, as Ahab\'s lying spirit prefigured.',
    sourceKeywords: ['God shall send them strong delusion', 'that they should believe a lie'],
    fulfillmentKeywords: ['the LORD hath put a lying spirit in the mouth of all these thy prophets'],
    terms: [],
  },
  '2th-3-3': {
    title: 'The Lord Is Faithful, Who Shall Stablish You',
    principle:
      'Establishment and keeping from evil rest on His faithfulness. First principle: the believer\'s stability is not self-generated — the Faithful One establishes and guards against the evil one.',
    sourceKeywords: ['the Lord is faithful', 'stablish you', 'keep you from evil'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2th-3-17': {
    title: 'The Salutation of Paul with Mine Own Hand',
    principle:
      'The handwritten token authenticates every epistle. First principle: in an age of forged letters, authenticity is personal — the apostle\'s signature is the church\'s security feature.',
    sourceKeywords: ['The salutation of Paul with mine own hand', 'the token in every epistle'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 1 Timothy ───────────────────────────────────
  '1ti-1-15': {
    title: 'Christ Jesus Came into the World to Save Sinners',
    principle:
      'The faithful saying with the chief of sinners as exhibit A. First principle: the mission statement is personal — came, save, sinners; and the worst sinner saved is the pattern for all who believe.',
    sourceKeywords: ['Christ Jesus came into the world to save sinners', 'of whom I am chief'],
    fulfillmentKeywords: ['he was numbered with the transgressors', 'the Son of man is come to seek and to save'],
    terms: [],
  },
  '1ti-1-17': {
    title: 'The King Eternal, Immortal, Invisible',
    principle:
      'The doxology to the only wise God. First principle: the invisible immortal King receives honor — the God no man has seen or can see is made known in the visible Son.',
    sourceKeywords: ['King eternal, immortal, invisible', 'the only wise God', 'honour and glory for ever'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ti-2-6': {
    title: 'Who Gave Himself a Ransom for All',
    principle:
      'The ransom testified in due time. First principle: the giving was the price — Isaiah\'s poured-out soul and Mark\'s many are the same ransom, universal in offer, testified in time.',
    sourceKeywords: ['gave himself a ransom for all', 'to be testified in due time'],
    fulfillmentKeywords: ['poured out his soul unto death', 'the Son of man came... to give his life a ransom for many'],
    terms: [],
  },
  '1ti-2-7': {
    title: 'I Am Ordained a Preacher, an Apostle, a Teacher of the Gentiles',
    principle:
      'The triple office in faith and verity. First principle: Paul\'s commission is sworn and specific — a teacher of the Gentiles; the Gentile thread runs through apostolic identity itself.',
    sourceKeywords: ['ordained a preacher, and an apostle', 'a teacher of the Gentiles in faith and verity'],
    fulfillmentKeywords: ['he is a chosen vessel unto me, to bear my name before the Gentiles'],
    terms: [],
  },
  '1ti-4-1': {
    title: 'In the Latter Times Some Shall Depart from the Faith',
    principle:
      'The Spirit\'s explicit forecast: seducing spirits, doctrines of devils. First principle: apostasy is Spirit-foretold, not Spirit-caused — the departures are scheduled with named mechanisms.',
    sourceKeywords: ['the Spirit speaketh expressly', 'in the latter times some shall depart', 'doctrines of devils'],
    fulfillmentKeywords: ['many false prophets shall rise, and shall deceive many'],
    terms: [],
  },
  '1ti-4-10': {
    title: 'We Trust in the Living God, Who Is the Saviour of All Men',
    principle:
      'Labor and reproach rest on the living Savior — specially of believers. First principle: the Savior-of-all claim is distributionally qualified — universal preservation, special salvation.',
    sourceKeywords: ['we trust in the living God', 'the Saviour of all men', 'specially of those that believe'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ti-6-13': {
    title: 'Before Pontius Pilate Witnessed a Good Confession',
    principle:
      'The charge is given in the sight of the quickening God and the confessing Christ. First principle: Christ\'s trial confession is the model charge — witness is expected before power, not after vindication.',
    sourceKeywords: ['who quickeneth all things', 'before Pontius Pilate', 'witnessed a good confession'],
    fulfillmentKeywords: ['To this end was I born... that I should bear witness unto the truth'],
    terms: [],
  },
  '1ti-6-15': {
    title: 'The Blessed and Only Potentate, the King of Kings',
    principle:
      'He shall show the title in His times. First principle: the King of kings title is scheduled for display — Daniel\'s God of gods and Revelation\'s Rider converge on the same throne.',
    sourceKeywords: ['in his times he shall shew', 'the blessed and only Potentate', 'King of kings, and Lord of lords'],
    fulfillmentKeywords: ['KING OF KINGS, AND LORD OF LORDS'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Timothy ───────────────────────────────────
  '2ti-1-9': {
    title: 'Called with an Holy Calling, Given Us in Christ Before the World Began',
    principle:
      'Saved by purpose and grace, not works — the grace predates time. First principle: pre-creation grace in Christ Jesus is the ground of the present holy calling; Ephesians 1 and 2 Timothy 1 handshake across the canon.',
    sourceKeywords: ['called us with an holy calling', 'not according to our works', 'before the world began'],
    fulfillmentKeywords: ['chosen us in him before the foundation of the world'],
    terms: [],
  },
  '2ti-1-10': {
    title: 'Who Hath Abolished Death, and Brought Life and Immortality to Light',
    principle:
      'The appearing of the Savior illuminated the abolished death. First principle: the gospel switches the light on immortality — Isaiah\'s swallowed-up death is now an abolished one, revealed.',
    sourceKeywords: ['made manifest by the appearing', 'hath abolished death', 'life and immortality to light through the gospel'],
    fulfillmentKeywords: ['He will swallow up death in victory'],
    terms: [],
  },
  '2ti-1-12': {
    title: 'I Know Whom I Have Believed',
    principle:
      'Persuaded He can keep the deposit against that day. First principle: assurance is personal — not what I believe but whom; the deposit is kept by the Keeper against the Day.',
    sourceKeywords: ['I am not ashamed', 'I know whom I have believed', 'he is able to keep that which I have committed'],
    fulfillmentKeywords: ['I know that my Redeemer liveth'],
    terms: [],
  },
  '2ti-2-8': {
    title: 'Jesus Christ of the Seed of David Was Raised from the Dead',
    principle:
      'The gospel in one line: Davidic Seed, risen. First principle: the resurrection proves the royal line kept its promise — Romans 1\'s thesis compressed for a suffering missionary.',
    sourceKeywords: ['Jesus Christ of the seed of David', 'was raised from the dead', 'according to my gospel'],
    fulfillmentKeywords: ['I will raise up thy seed after thee', 'Thy seed will I establish for ever'],
    terms: [],
  },
  '2ti-2-12': {
    title: 'If We Suffer, We Shall Also Reign with Him',
    principle:
      'Suffering-reign and denial-denial are twin laws. First principle: the throne has an entry exam written in endurance; denial has its own symmetry, but the faithful Lord is faithful still.',
    sourceKeywords: ['If we suffer, we shall also reign with him', 'if we deny him', 'he also will deny us'],
    fulfillmentKeywords: ['To him that overcometh will I grant to sit with me in my throne'],
    terms: [],
  },
  '2ti-2-19': {
    title: 'The Foundation of God Standeth Sure, Having This Seal',
    principle:
      'The double seal: the Lord knows His own; namers of the name depart from iniquity. First principle: election and ethics are sealed together — known by God, departing from sin; Numbers\' rebellion is the backdrop.',
    sourceKeywords: ['the foundation of God standeth sure', 'The Lord knoweth them that are his', 'depart from iniquity'],
    fulfillmentKeywords: ['Declare them apart... that they may be consumed'],
    terms: [],
  },
  '2ti-3-1': {
    title: 'In the Last Days Perilous Times Shall Come',
    principle:
      'The Spirit\'s forecast of savage seasons. First principle: perilous times are listed, not lamented — nineteen traits follow, and the forecast is itself the comfort that none of it is off-script.',
    sourceKeywords: ['in the last days perilous times shall come'],
    fulfillmentKeywords: ['many false prophets shall rise'],
    terms: [],
  },
  '2ti-3-8': {
    title: 'Now as Jannes and Jambres Withstood Moses',
    principle:
      'The unnamed Egyptian magicians are named here — counterfeit workers resist truth. First principle: Moses had his magicians; the last days have theirs — corrupt minds replicate the opposition pattern.',
    sourceKeywords: ['Jannes and Jambres withstood Moses', 'resist the truth', 'reprobate concerning the faith'],
    fulfillmentKeywords: ['the magicians of Egypt did so with their enchantments'],
    terms: [],
  },
  '2ti-3-12': {
    title: 'All That Will Live Godly Shall Suffer Persecution',
    principle:
      'The universal suffering law of godliness. First principle: persecution is not an exception clause — it is the promised climate; Jesus told His own the world hated Him first.',
    sourceKeywords: ['all that will live godly in Christ Jesus', 'shall suffer persecution'],
    fulfillmentKeywords: ['If they have persecuted me, they will also persecute you'],
    terms: [],
  },
  '2ti-3-15': {
    title: 'The Holy Scriptures, Which Are Able to Make Thee Wise unto Salvation',
    principle:
      'Childhood scripture knowledge aims at salvation through faith. First principle: the Scriptures are salvifically sufficient as far as Christ — the sacred letters point to the faith that saves.',
    sourceKeywords: ['from a child thou hast known the holy scriptures', 'wise unto salvation', 'faith which is in Christ Jesus'],
    fulfillmentKeywords: ['Search the scriptures... they are they which testify of me'],
    terms: [],
  },
  '2ti-4-8': {
    title: 'A Crown of Righteousness Laid Up for Me',
    principle:
      'The righteous Judge gives the crown to all who love His appearing. First principle: the crown is laid up, not won — given at that day by the righteous Judge to appearing-lovers everywhere.',
    sourceKeywords: ['a crown of righteousness', 'the righteous judge', 'unto all them also that love his appearing'],
    fulfillmentKeywords: ['be thou faithful unto death, and I will give thee a crown of life'],
    terms: [],
  },
  '2ti-4-18': {
    title: 'The Lord Shall Preserve Me unto His Heavenly Kingdom',
    principle:
      'Deliverance from every evil work, preservation to the kingdom, glory forever. First principle: the final rescue is preservation through, not exemption from — unto the heavenly kingdom is the destination of the delivered.',
    sourceKeywords: ['deliver me from every evil work', 'preserve me unto his heavenly kingdom', 'to whom be glory for ever'],
    fulfillmentKeywords: ['the LORD shall preserve thee from all evil'],
    terms: [],
  },

  // ── Hand-written expansion: Titus ───────────────────────────────────────
  'tit-1-2': {
    title: 'In Hope of Eternal Life, Which God... Promised Before the World Began',
    principle:
      'The unlying God promised eternal life before time. First principle: hope has an antiquity older than the world and a Promise-maker who cannot lie — the two stable facts of the Christian life.',
    sourceKeywords: ['In hope of eternal life', 'God, that cannot lie', 'promised before the world began'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'tit-1-3': {
    title: 'Hath in Due Times Manifested His Word Through Preaching',
    principle:
      'The pre-time promise meets the due-time preaching. First principle: manifestation is scheduled — the word hidden in ages is unveiled through the commanded commission.',
    sourceKeywords: ['in due times manifested his word through preaching', 'committed unto me', 'the commandment of God our Saviour'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'tit-2-11': {
    title: 'The Grace of God That Bringeth Salvation Hath Appeared',
    principle:
      'Grace appeared to all men, and it teaches. First principle: grace is pedagogical — the appearing One trains denial, sobriety, and righteousness while we await the blessed hope.',
    sourceKeywords: ['the grace of God that bringeth salvation', 'hath appeared to all men'],
    fulfillmentKeywords: ['the glory of the LORD shall be revealed, and all flesh shall see it'],
    terms: [],
  },
  'tit-2-14': {
    title: 'Who Gave Himself for Us... a Peculiar People',
    principle:
      'Redemption from iniquity into a zealous purified people. First principle: the self-gift purifies and possesses — Exodus 19\'s peculiar treasure is bought back by Isaiah 53\'s bleeding Servant.',
    sourceKeywords: ['gave himself for us', 'redeem us from all iniquity', 'a peculiar people, zealous of good works'],
    fulfillmentKeywords: ['ye shall be a peculiar treasure unto me above all people'],
    terms: [],
  },
  'tit-3-4': {
    title: 'The Kindness and Love of God Our Saviour Toward Man Appeared',
    principle:
      'The appearing of kindness is the turning point of the saved. First principle: salvation\'s origin is God\'s kindness appearing, not human goodness preceding — not by works, according to mercy.',
    sourceKeywords: ['the kindness and love of God our Saviour', 'toward man appeared'],
    fulfillmentKeywords: ['God so loved the world, that he gave his only begotten Son'],
    terms: [],
  },
  'tit-3-5': {
    title: 'By the Washing of Regeneration, and Renewing of the Holy Ghost',
    principle:
      'Saved by mercy through washing and renewal — not works. First principle: Ezekiel\'s clean-water promise is the engine of rebirth — the Spirit washes, renews, and is poured out richly.',
    sourceKeywords: ['not by works of righteousness', 'according to his mercy he saved us', 'the washing of regeneration', 'renewing of the Holy Ghost'],
    fulfillmentKeywords: ['Then will I sprinkle clean water upon you', 'a new heart also will I give you'],
    terms: [],
  },
  'tit-3-7': {
    title: 'Being Justified by His Grace, We Should Be Made Heirs',
    principle:
      'Justified grace-people are made heirs of eternal-life hope. First principle: justification is adoption-adjacent — heirs according to hope; the courtroom verdict ends in an inheritance.',
    sourceKeywords: ['being justified by his grace', 'made heirs according to the hope of eternal life'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Philemon ────────────────────────────────────
  'phm-1-6': {
    title: 'The Communication of Thy Faith May Become Effectual',
    principle:
      'Effective faith acknowledges every good thing in us in Christ. First principle: faith communicates by acknowledging — the recognition of what is in Christ energizes the sharing.',
    sourceKeywords: ['the communication of thy faith', 'effectual', 'every good thing which is in you in Christ Jesus'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-9': {
    title: 'Paul the Aged, and Now Also a Prisoner of Jesus Christ',
    principle:
      'Love\'s appeal from an old prisoner. First principle: authority is laid down for love\'s sake — the apostle beseeches rather than commands, and the prisoner\'s chains are his credential.',
    sourceKeywords: ['for love\'s sake I rather beseech thee', 'Paul the aged', 'a prisoner of Jesus Christ'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-10': {
    title: 'I Beseech Thee for My Son Onesimus',
    principle:
      'The runaway begotten in bonds. First principle: providence writes conversion stories in prison cells — the useless made useful by the chained apostle.',
    sourceKeywords: ['my son Onesimus', 'whom I have begotten in my bonds'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-15': {
    title: 'He Therefore Departed for a Season',
    principle:
      'Perhaps — that thou shouldest receive him for ever. First principle: providence reads departures as returns — the forever-reception reframes the season of loss.',
    sourceKeywords: ['perhaps he therefore departed for a season', 'that thou shouldest receive him for ever'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-18': {
    title: 'If He Hath Wronged Thee, Put That on Mine Account',
    principle:
      'The imputation sentence in a postcard. First principle: the gospel in miniature — debts transferred to the intercessor; Christ\'s account absorbs ours, and Paul practices it.',
    sourceKeywords: ['If he hath wronged thee', 'put that on mine account'],
    fulfillmentKeywords: ['the LORD hath laid on him the iniquity of us all'],
    terms: [],
  },
  'phm-1-25': {
    title: 'The Grace of Our Lord Jesus Christ Be with Your Spirit',
    principle:
      'The grace-benediction closes the shortest letter. First principle: grace with the spirit is the lasting need — every wrong righted begins and ends in grace to the inner man.',
    sourceKeywords: ['The grace of our Lord Jesus Christ', 'be with your spirit'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: James ───────────────────────────────────────
  'jam-1-10': {
    title: 'The Rich... as the Flower of the Grass He Shall Pass Away',
    principle:
      'The brother of low degree glories in exaltation; the rich in humiliation. First principle: Isaiah 40\'s grass-logic levels economics — both brothers glory, but in opposite directions.',
    sourceKeywords: ['the rich, in that he is made low', 'as the flower of the grass he shall pass away'],
    fulfillmentKeywords: ['all flesh is grass, and all the goodliness thereof'],
    terms: [],
  },
  'jam-1-12': {
    title: 'Blessed Is the Man That Endureth Temptation',
    principle:
      'The tried receive the crown of life, promised to lovers of God. First principle: endurance is the trial\'s appointed outcome — love of God is the motive, the crown the promised award.',
    sourceKeywords: ['Blessed is the man that endureth temptation', 'he shall receive the crown of life', 'promised to them that love him'],
    fulfillmentKeywords: ['be thou faithful unto death, and I will give thee a crown of life'],
    terms: [],
  },
  'jam-2-8': {
    title: 'If Ye Fulfil the Royal Law... Thou Shalt Love Thy Neighbour as Thyself',
    principle:
      'The Leviticus law is royal in this reading. First principle: the law has a king-command — loving the neighbor is royalty behavior; partiality breaks the crown-law.',
    sourceKeywords: ['the royal law according to the scripture', 'love thy neighbour as thyself'],
    fulfillmentKeywords: ['thou shalt love thy neighbour as thyself: I am the LORD'],
    terms: [],
  },
  'jam-2-11': {
    title: 'He That Said, Do Not Commit Adultery, Said Also, Do Not Kill',
    principle:
      'The same Speaker wrote both commands — so the law is seamless. First principle: the Giver unifies the law; break one point and the whole Speaker is offended — the law is a single fabric.',
    sourceKeywords: ['He that said, Do not commit adultery, said also, Do not kill', 'a transgressor of the law'],
    fulfillmentKeywords: ['Thou shalt not kill', 'Thou shalt not commit adultery'],
    terms: [],
  },
  'jam-2-23': {
    title: 'Abraham Believed God... and He Was Called the Friend of God',
    principle:
      'Genesis 15:6 fulfilled, and the friend-title conferred. First principle: imputation and intimacy arrive together — righteousness counted, friendship named; faith works because it knows.',
    sourceKeywords: ['the scripture was fulfilled', 'Abraham believed God', 'imputed unto him for righteousness', 'the Friend of God'],
    fulfillmentKeywords: ['he believed in the LORD', 'seest thou how faith wrought with his works'],
    terms: [],
  },
  'jam-4-6': {
    title: 'God Resisteth the Proud, but Giveth Grace unto the Humble',
    principle:
      'More grace — but only downhill. First principle: the grace-gradient is vertical: pride resists it, humility receives it; Proverbs 3 and 1 Peter 5 bracket the same slope.',
    sourceKeywords: ['he giveth more grace', 'God resisteth the proud', 'grace unto the humble'],
    fulfillmentKeywords: ['surely he scorneth the scorners: but he giveth grace unto the lowly'],
    terms: [],
  },
  'jam-5-3': {
    title: 'Your Gold and Silver Is Cankered',
    principle:
      'Heaped treasure testifies in the last days. First principle: hoarded wealth is stored prosecution — rust eats flesh like fire; the last days have their own audit.',
    sourceKeywords: ['gold and silver is cankered', 'the rust... a witness against you', 'heaped treasure for the last days'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jam-5-11': {
    title: 'Ye Have Heard of the Patience of Job',
    principle:
      'The end of the Lord shows pitifulness and mercy. First principle: endurance is read backward — Job\'s end doubled his estate; the Lord\'s tender mercy is seen in the outcome.',
    sourceKeywords: ['the patience of Job', 'the end of the Lord', 'very pitiful, and of tender mercy'],
    fulfillmentKeywords: ['the LORD gave, and the LORD hath taken away'],
    terms: [],
  },
  'jam-5-17': {
    title: 'Elias Was a Man Subject to Like Passions as We Are',
    principle:
      'Elijah prayed, and the sky closed three and a half years. First principle: passionate men pray powerful prayers — the prophet\'s nature was ours; the difference was the praying.',
    sourceKeywords: ['a man subject to like passions as we are', 'prayed earnestly', 'it rained not... three years and six months'],
    fulfillmentKeywords: ['as the LORD God of Israel liveth... there shall not be dew nor rain'],
    terms: [],
  },

  // ── Hand-written expansion: 1 Peter ─────────────────────────────────────
  '1pe-1-16': {
    title: 'Be Ye Holy; for I Am Holy',
    principle:
      'The holiness command quoted from Leviticus to the exiled church. First principle: holiness is imitative — the command\'s ground is God\'s own character, unchanged across covenants.',
    sourceKeywords: ['it is written, Be ye holy', 'for I am holy'],
    fulfillmentKeywords: ['ye shall be holy: for I the LORD your God am holy'],
    terms: [],
  },
  '1pe-1-19': {
    title: 'With the Precious Blood of Christ, as of a Lamb Without Blemish',
    principle:
      'Redemption priced in lamb-blood. First principle: the exodus lamb\'s inspection rules are applied to Christ — without blemish, without spot, precious beyond silver and gold.',
    sourceKeywords: ['the precious blood of Christ', 'a lamb without blemish and without spot'],
    fulfillmentKeywords: ['Your lamb shall be without blemish'],
    terms: [],
  },
  '1pe-1-24': {
    title: 'All Flesh Is as Grass',
    principle:
      'The withering grass and the enduring word. First principle: Isaiah 40 is quoted whole into the apostolic age — the word preached is the word that stands forever.',
    sourceKeywords: ['all flesh is as grass', 'the flower of grass', 'the word of the Lord endureth for ever'],
    fulfillmentKeywords: ['the grass withereth, the flower fadeth'],
    terms: [],
  },
  '1pe-2-4': {
    title: 'To Whom Coming, as unto a Living Stone',
    principle:
      'The disallowed, chosen, precious Stone. First principle: the Stone is alive — rejected by builders, chosen by God; coming to Him is the church\'s building activity.',
    sourceKeywords: ['a living stone', 'disallowed indeed of men', 'chosen of God, and precious'],
    fulfillmentKeywords: ['the stone which the builders refused', 'a tried stone, a precious corner stone'],
    terms: [],
  },
  '1pe-2-7': {
    title: 'Unto You Which Believe He Is Precious',
    principle:
      'The Stone divides: precious to believers, the builders\' disallowance to the disobedient. First principle: the same stone generates opposite fates — honor for the believing, stumbling for the refusing.',
    sourceKeywords: ['unto you which believe he is precious', 'the stone which the builders disallowed', 'head of the corner'],
    fulfillmentKeywords: ['the stone which the builders refused is become the head stone'],
    terms: [],
  },
  '1pe-2-9': {
    title: 'A Chosen Generation, a Royal Priesthood, an Holy Nation',
    principle:
      'Exodus 19\'s titles are granted to the called-out. First principle: the covenant vocation transfers to the church — darkness-exit into marvellous light for showing forth praises.',
    sourceKeywords: ['a chosen generation', 'a royal priesthood, an holy nation', 'a peculiar people', 'out of darkness into his marvellous light'],
    fulfillmentKeywords: ['ye shall be unto me a kingdom of priests, and an holy nation'],
    terms: [],
  },
  '1pe-2-22': {
    title: 'Who Did No Sin, Neither Was Guile Found in His Mouth',
    principle:
      'The Servant\'s sinlessness quoted in the suffering-context. First principle: Isaiah 53:9 is Peter\'s own credential-check on Christ — the sinless mouth is the basis of the substitution that follows.',
    sourceKeywords: ['Who did no sin', 'neither was guile found in his mouth'],
    fulfillmentKeywords: ['because he had done no violence, neither was any deceit in his mouth'],
    terms: [],
  },
  '1pe-3-10': {
    title: 'He That Will Love Life... Refrain His Tongue from Evil',
    principle:
      'Psalm 34\'s life-loving recipe. First principle: loving life begins with the tongue — refrained lips and departing-from-evil lips are the good-days precondition.',
    sourceKeywords: ['love life, and see good days', 'refrain his tongue from evil', 'lips that they speak no guile'],
    fulfillmentKeywords: ['keep thy tongue from evil, and thy lips from speaking guile'],
    terms: [],
  },
  '1pe-3-12': {
    title: 'The Eyes of the Lord Are over the Righteous',
    principle:
      'Ears open to prayers; the face against evildoers. First principle: the watching face is dual — over the righteous, against the evil; the same eyes, two directions.',
    sourceKeywords: ['the eyes of the Lord are over the righteous', 'his ears are open unto their prayers', 'against them that do evil'],
    fulfillmentKeywords: ['The eyes of the LORD are upon the righteous'],
    terms: [],
  },
  '1pe-3-14': {
    title: 'If Ye Suffer for Righteousness\' Sake, Happy Are Ye',
    principle:
      'Fearlessness commanded with Isaiah\'s sanctuary logic: sanctify the LORD in hearts. First principle: suffering for right is happiness\'s address — fear not their fear; the LORD of hosts is the sanctified dread.',
    sourceKeywords: ['suffer for righteousness\' sake', 'happy are ye', 'be not afraid of their terror'],
    fulfillmentKeywords: ['Sanctify the LORD of hosts himself', 'let him be your fear'],
    terms: [],
  },
  '1pe-4-18': {
    title: 'If the Righteous Scarcely Be Saved, Where Shall the Ungodly Appear?',
    principle:
      'Proverbs 11:31 quoted as judgment\'s starting-point logic. First principle: the judgment begins at God\'s house — if the righteous are saved through fire, the ungodly\'s appearing is hopeless.',
    sourceKeywords: ['if the righteous scarcely be saved', 'where shall the ungodly and the sinner appear'],
    fulfillmentKeywords: ['Behold, the righteous shall be recompensed in the earth'],
    terms: [],
  },
  '1pe-5-5': {
    title: 'Be Clothed with Humility: God Resisteth the Proud',
    principle:
      'Submission clothed in humility, grace to the lowly. First principle: humility is a garment and grace is the wage — the apron of the lowly is where God\'s favor lands.',
    sourceKeywords: ['be clothed with humility', 'God resisteth the proud', 'giveth grace to the humble'],
    fulfillmentKeywords: ['surely he scorneth the scorners: but he giveth grace unto the lowly'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Peter ─────────────────────────────────────
  '2pe-1-19': {
    title: 'We Have Also a More Sure Word of Prophecy',
    principle:
      'Prophecy is the lamp in the dark place until the Day dawns. First principle: the transfigured Mount certifies the written word — the shining day-star is the goal the lamp serves until morning.',
    sourceKeywords: ['a more sure word of prophecy', 'a light that shineth in a dark place', 'until the day dawn'],
    fulfillmentKeywords: ['there shall come a Star out of Jacob'],
    terms: [],
  },
  '2pe-1-21': {
    title: 'Holy Men of God Spake as They Were Moved by the Holy Ghost',
    principle:
      'Prophecy\'s origin is divine motion, not human will. First principle: the authorship doctrine in one sentence — carried men spoke; the wind of God moved the sails of the writers.',
    sourceKeywords: ['the prophecy came not in old time by the will of man', 'holy men of God spake', 'moved by the Holy Ghost'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2pe-2-6': {
    title: 'Turning the Cities of Sodom and Gomorrha into Ashes',
    principle:
      'The overthrow is an ensample for the ungodly-to-come. First principle: Sodom is exhibit A of coming judgment — ash-cities preach to later generations that the Lord knows how to rescue and to reserve.',
    sourceKeywords: ['Sodom and Gomorrha into ashes', 'condemned them with an overthrow', 'an ensample'],
    fulfillmentKeywords: ['the LORD rained upon Sodom and upon Gomorrah brimstone and fire'],
    terms: [],
  },
  '2pe-2-22': {
    title: 'The Dog Is Turned to His Own Vomit Again',
    principle:
      'The true proverb judges false teachers\' relapse. First principle: nature reverts where nature is unchanged — washing the outside of the sow does not re-create the sow.',
    sourceKeywords: ['The dog is turned to his own vomit', 'the sow that was washed to her wallowing'],
    fulfillmentKeywords: ['As a dog returneth to his vomit'],
    terms: [],
  },
  '2pe-3-8': {
    title: 'One Day Is with the Lord as a Thousand Years',
    principle:
      'The beloved are corrected on chronology. First principle: divine timekeeping dilutes impatience — the thousand-years/day symmetry makes delay impossible to measure by clocks.',
    sourceKeywords: ['one day is with the Lord as a thousand years', 'a thousand years as one day'],
    fulfillmentKeywords: ['a thousand years in thy sight are but as yesterday'],
    terms: [],
  },
  '2pe-3-10': {
    title: 'The Day of the Lord Will Come as a Thief',
    principle:
      'Heavens pass with noise; elements melt; earth burned. First principle: the thief-day ends in cosmic renovation — the works in it are the fuel, the promise is the new earth.',
    sourceKeywords: ['the day of the Lord will come as a thief', 'the heavens shall pass away with a great noise', 'burned up'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2pe-3-13': {
    title: 'We Look for New Heavens and a New Earth, Wherein Dwelleth Righteousness',
    principle:
      'The promise-anchored expectation. First principle: looking is the discipline — Isaiah 65\'s creation promise is the horizon; righteousness is the resident of the new world.',
    sourceKeywords: ['we, according to his promise, look for', 'new heavens and a new earth', 'wherein dwelleth righteousness'],
    fulfillmentKeywords: ['I create new heavens and a new earth'],
    terms: [],
  },

  // ── Hand-written expansion: 1 John ──────────────────────────────────────
  '1jn-1-1': {
    title: 'That Which Was from the Beginning... Which We Have Handled',
    principle:
      'The Word of life — heard, seen, looked upon, handled. First principle: the incarnation is forensic — apostolic senses are the witnesses; the eternal Word became touchable.',
    sourceKeywords: ['that which was from the beginning', 'our hands have handled', 'the Word of life'],
    fulfillmentKeywords: ['the Word was made flesh, and dwelt among us'],
    terms: [],
  },
  '1jn-2-1': {
    title: 'We Have an Advocate with the Father, Jesus Christ the Righteous',
    principle:
      'Sin-not writing with a sin-answer. First principle: the Advocate is the Righteous One pleading — the courtroom of heaven has a defense attorney whose argument is His own righteousness.',
    sourceKeywords: ['that ye sin not', 'we have an advocate with the Father', 'Jesus Christ the righteous'],
    fulfillmentKeywords: ['by his knowledge shall my righteous servant justify many'],
    terms: [],
  },
  '1jn-2-2': {
    title: 'He Is the Propitiation for Our Sins, and for the Whole World',
    principle:
      'Propitiation beyond the letter\'s readers. First principle: the wrath-removing sacrifice is sufficient for the world — the mercy-seat term (hilasmos) from Leviticus 16 applied to the cross.',
    sourceKeywords: ['the propitiation for our sins', 'not for ours only', 'the sins of the whole world'],
    fulfillmentKeywords: ['he shall make an atonement for the holy place', 'bare the sin of many'],
    terms: [],
  },
  '1jn-3-2': {
    title: 'We Shall Be Like Him; for We Shall See Him as He Is',
    principle:
      'Now sons; then like Him at the appearing. First principle: vision transforms — the sight of Him as He is is the mechanism of likeness; hope purifies in the meantime.',
    sourceKeywords: ['now are we the sons of God', 'when he shall appear', 'we shall be like him'],
    fulfillmentKeywords: ['I shall behold thy face in righteousness', 'I shall be satisfied'],
    terms: [],
  },
  '1jn-3-12': {
    title: 'Not as Cain, Who Was of That Wicked One',
    principle:
      'Cain\'s murder explained: evil works, righteous brother. First principle: the first murder was worship-envy — the wicked one\'s children still hate righteousness\'s presence.',
    sourceKeywords: ['Not as Cain', 'of that wicked one', 'slew his brother'],
    fulfillmentKeywords: ['Cain rose up against Abel his brother, and slew him'],
    terms: [],
  },
  '1jn-4-9': {
    title: 'God Sent His Only Begotten Son into the World',
    principle:
      'Manifested love so we might live through Him. First principle: love is measured by the gift\'s cost and the recipient\'s death — sent Son, living receivers.',
    sourceKeywords: ['manifested the love of God toward us', 'God sent his only begotten Son', 'that we might live through him'],
    fulfillmentKeywords: ['For God so loved the world'],
    terms: [],
  },
  '1jn-4-10': {
    title: 'He Loved Us, and Sent His Son to Be the Propitiation for Our Sins',
    principle:
      'Love defined from God\'s side. First principle: love is not our initiative but His sending — propitiation is the definition of divine love, not an aftermath of it.',
    sourceKeywords: ['Herein is love', 'not that we loved God', 'he loved us, and sent his Son'],
    fulfillmentKeywords: ['For God so loved the world', 'he was wounded for our transgressions'],
    terms: [],
  },
  '1jn-5-6': {
    title: 'This Is He That Came by Water and Blood',
    principle:
      'Not water only — water and blood, with the Spirit witnessing. First principle: the double testimony answers the docetic denial — the Son came through real baptism and real blood.',
    sourceKeywords: ['came by water and blood', 'not by water only', 'the Spirit that beareth witness'],
    fulfillmentKeywords: ['one of the soldiers with a spear pierced his side'],
    terms: [],
  },
  '1jn-5-8': {
    title: 'There Are Three That Bear Witness in Earth',
    principle:
      'Spirit, water, blood — agreeing in one. First principle: the legal standard of two-or-three witnesses is met by a triple testimony; heaven\'s case is established on earth.',
    sourceKeywords: ['three that bear witness in earth', 'the Spirit, and the water, and the blood', 'these three agree in one'],
    fulfillmentKeywords: ['at the mouth of two witnesses, or at the mouth of three witnesses'],
    terms: [],
  },

  // ── Hand-written expansion: 2 John / 3 John ─────────────────────────────
  '2jn-1-6': {
    title: 'This Is Love, That We Walk After His Commandments',
    principle:
      'Love defined as commandment-walking, from the beginning. First principle: love and commandment are not rivals — the original message is the walk itself.',
    sourceKeywords: ['this is love', 'walk after his commandments', 'as ye have heard from the beginning'],
    fulfillmentKeywords: ['If ye love me, keep my commandments'],
    terms: [],
  },
  '2jn-1-7': {
    title: 'Many Deceivers... Who Confess Not That Jesus Christ Is Come in the Flesh',
    principle:
      'The flesh-denial marks the deceiver and the antichrist. First principle: the incarnation is the test of orthodoxy — a Christ without flesh is the spirit of antichrist already in the world.',
    sourceKeywords: ['many deceivers are entered into the world', 'confess not that Jesus Christ is come in the flesh', 'a deceiver and an antichrist'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '3jn-1-11': {
    title: 'He That Doeth Good Is of God',
    principle:
      'Follow not evil; the doer of good is of God, the evildoer has not seen Him. First principle: imitation follows vision — seeing God is the root of doing good; Diotrephes had not seen.',
    sourceKeywords: ['follow not that which is evil', 'he that doeth good is of God', 'hath not seen God'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Jude ────────────────────────────────────────
  'jud-1-5': {
    title: 'The Lord, Having Saved the People out of Egypt, Destroyed the Unbelieving',
    principle:
      'The saved-out generation died in the wilderness for unbelief. First principle: past salvation does not immunize against future judgment — the exodus ended at Kadesh for the faithless.',
    sourceKeywords: ['having saved the people out of the land of Egypt', 'afterward destroyed them that believed not'],
    fulfillmentKeywords: ['they shall not enter into my rest'],
    terms: [],
  },
  'jud-1-6': {
    title: 'The Angels Which Kept Not Their First Estate',
    principle:
      'Fallen angels reserved in everlasting chains to the great day. First principle: abandonment of station has a reservation — the darkness-chains hold until judgment; the same fate is warned against the false teachers.',
    sourceKeywords: ['kept not their first estate', 'left their own habitation', 'everlasting chains under darkness'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jud-1-7': {
    title: 'Sodom and Gomorrha... Suffering the Vengeance of Eternal Fire',
    principle:
      'Strange flesh and eternal fire — an example set forth. First principle: the ash-cities are a standing exhibition — eternal fire already visibly burned once as a preview.',
    sourceKeywords: ['Sodom and Gomorrha', 'going after strange flesh', 'the vengeance of eternal fire'],
    fulfillmentKeywords: ['the LORD rained upon Sodom and upon Gomorrah brimstone and fire'],
    terms: [],
  },
  'jud-1-9': {
    title: 'Michael... Durst Not Bring a Railing Accusation',
    principle:
      'The archangel disputes with the devil but says only, The Lord rebuke thee. First principle: even angelic conflict is conducted in deference — the rebuke belongs to the LORD; Zechariah 3 shows the same scene over Joshua.',
    sourceKeywords: ['Michael the archangel', 'disputed about the body of Moses', 'The Lord rebuke thee'],
    fulfillmentKeywords: ['The LORD rebuke thee, O Satan'],
    terms: [],
  },
  'jud-1-11': {
    title: 'The Way of Cain, the Error of Balaam, the Gainsaying of Core',
    principle:
      'Three Old Testament rebels map three New Testament sins. First principle: the old rebels are type-men — envy, greed, and usurpation have canonical case studies and one Woe.',
    sourceKeywords: ['the way of Cain', 'the error of Balaam for reward', 'the gainsaying of Core'],
    fulfillmentKeywords: ['And Core... gathered themselves together against Moses'],
    terms: [],
  },
  'jud-1-24': {
    title: 'Unto Him That Is Able to Keep You from Falling',
    principle:
      'The keeping God presents the faultless before glory with joy. First principle: the doxology is soteriology — kept, presented, joyous; the One who saves is the One who finishes.',
    sourceKeywords: ['able to keep you from falling', 'present you faultless', 'before the presence of his glory'],
    fulfillmentKeywords: [],
    terms: [],
  },
  // ── Hand-written expansion: Leviticus ───────────────────────────────────
  'lev-16-15': {
    title: 'The Sin-Offering Goat — His Blood Taken inside the Vail',
    principle:
      'On the Day of Atonement the goat for the sin offering was killed. The high priest carried its blood inside the vail and sprinkled it on the mercy seat and in front of it. First principle: atonement needs blood brought in, not only blood shed at the altar. The blood had to be presented before God in the Most Holy Place.',
    sourceKeywords: ['the goat of the sin offering', 'bring his blood within the vail', 'sprinkle it upon the mercy seat'],
    fulfillmentKeywords: ['not without blood', 'by his own blood he entered in once'],
    terms: [],
  },
  'lev-16-22': {
    title: 'The Goat Shall Bear upon Him All Their Iniquities',
    principle:
      'The scapegoat carried the people\'s sins away to a land where no one lived. First principle: the two goats together make one atonement. The first goat\'s blood went inside the sanctuary, and the second goat carried the sins outside. Isaiah 53 shows the same picture: one Servant carries the burden of sin.',
    sourceKeywords: ['the goat shall bear upon him', 'all their iniquities', 'a land not inhabited'],
    fulfillmentKeywords: ['the LORD hath laid on him the iniquity of us all'],
    terms: [],
  },
  'lev-16-30': {
    title: 'On That Day Shall the Priest Make Atonement for You',
    principle:
      'On that one day the people were cleansed from all their sins before the LORD. First principle: the yearly ritual cleansed the people once a year. The day it pointed to cleanses once and for all.',
    sourceKeywords: ['on that day shall the priest make an atonement'],
    fulfillmentKeywords: ['once in the end of the world'],
    terms: [],
  },
  'lev-17-11': {
    title: 'The Life of the Flesh Is in the Blood',
    principle:
      'God gave the blood on the altar to make atonement. First principle: blood is life handed back to the One who gives life. The New Testament names the blood of Christ as the price that bought our atonement.',
    sourceKeywords: ['the life of the flesh is in the blood', 'given it to you upon the altar', 'maketh an atonement for the soul'],
    fulfillmentKeywords: ['without shedding of blood is no remission', 'this is my blood of the new testament'],
    terms: [],
  },
  'lev-19-18': {
    title: 'Thou Shalt Love Thy Neighbour as Thyself',
    principle:
      'God\'s law forbids revenge and forbids holding a grudge. It tells each of us to love our neighbour as we love ourselves. First principle: the summary of the second table of the law begins here. The second table covers how we treat other people. Jesus, Paul, James, and the Shema prayer all build on this one command.',
    sourceKeywords: ['not avenge', 'bear any grudge', 'love thy neighbour as thyself'],
    fulfillmentKeywords: ['the second is like unto it'],
    terms: [],
  },
  'lev-24-16': {
    title: 'He That Blasphemeth the Name of the LORD Shall Surely Die',
    principle:
      'A man who blasphemed was stoned by the whole congregation. The same law applied to the stranger and to the man born in Israel. First principle: the holiness of the LORD\'s Name was protected by a death sentence. Jesus fulfilled that law by dying under Israel\'s charge of blasphemy.',
    sourceKeywords: ['blasphemeth the name of the LORD', 'surely be put to death', 'stone him'],
    fulfillmentKeywords: ['we have a law, and by our law he ought to die', 'because he made himself the Son of God'],
    terms: [],
  },
  'lev-26-12': {
    title: 'I Will Walk Among You, and Will Be Your God',
    principle:
      'This is the covenant promise that God will walk with His people. First principle: God walking among His people is the highest point of the covenant. Paul and John both quote this promise about the redeemed dwelling with God.',
    sourceKeywords: ['I will walk among you', 'will be your God', 'ye shall be my people'],
    fulfillmentKeywords: ['the tabernacle of God is with men'],
    terms: [],
  },

  // ── Hand-written expansion: Numbers ─────────────────────────────────────
  'num-6-24': {
    title: 'The LORD Bless Thee, and Keep Thee',
    principle:
      'The blessing Aaron spoke begins with keeping. First principle: the blessing speaks three times, and it ends with the Name placed on the people. Paul echoes that blessing in the grace that names the Father, the Son and the Holy Spirit.',
    sourceKeywords: ['The LORD bless thee, and keep thee', 'the LORD make his face shine', 'peace'],
    fulfillmentKeywords: ['the grace of the Lord Jesus Christ, and the love of God'],
    terms: [],
  },
  'num-9-12': {
    title: 'They Shall Leave None of It unto the Morning',
    principle:
      'God repeated the Passover law here: no bone broken, nothing left over. First principle: the second-chance Passover keeps the lamb-laws intact. The rules for the sacrifice never change.',
    sourceKeywords: ['leave none of it unto the morning', 'nor break any bone', 'the ordinances of the passover'],
    fulfillmentKeywords: ['A bone of him shall not be broken'],
    terms: [],
  },
  'num-11-31': {
    title: 'There Went Forth a Wind from the LORD',
    principle:
      'The quails lay all around the camp, two cubits deep on the ground. First principle: the people craved meat, and God answered them. That same quail story is the backdrop of what Jesus said about the true bread in John 6.',
    sourceKeywords: ['a wind from the LORD', 'brought quails from the sea', 'round about the camp'],
    fulfillmentKeywords: ['He gave them bread from heaven to eat'],
    terms: [],
  },
  'num-14-18': {
    title: 'The LORD Is Longsuffering, of Great Mercy',
    principle:
      'The LORD forgives iniquity, and by no means clears the guilty. He visits iniquity to the fourth generation. First principle: this verse holds God\'s mercy and his justice in one proclamation. Scripture quotes it again and again.',
    sourceKeywords: ['longsuffering, and of great mercy', 'forgiving iniquity and transgression', 'by no means clearing the guilty'],
    fulfillmentKeywords: ['The LORD, The LORD God, merciful and gracious'],
    terms: [],
  },
  'num-21-11': {
    title: 'They Journeyed from Oboth, and Pitched at Ije-abarim',
    principle:
      'The journey went on toward Moab, toward the sunrising. First principle: God had even Israel\'s marching orders written down. The itinerary ahead is the road-map the Lord Jesus walked in type.',
    sourceKeywords: ['journeyed from Oboth', 'pitched at Ije-abarim', 'toward the sunrising'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'num-35-30': {
    title: 'The Murderer Shall Be Put to Death by the Mouth of Witnesses',
    principle:
      'One witness cannot put a man to death. Two or three witnesses establish the matter. First principle: fair trial law is God\'s law. Jesus and Paul both used the rule of two or three witnesses, for the church and for judgment alike.',
    sourceKeywords: ['put to death by the mouth of witnesses', 'one witness shall not testify'],
    fulfillmentKeywords: ['in the mouth of two or three witnesses'],
    terms: [],
  },

  // ── Hand-written expansion: Deuteronomy ─────────────────────────────────
  'deu-4-24': {
    title: 'The LORD Thy God Is a Consuming Fire',
    principle:
      'Jealousy as fire. First principle: God\'s jealousy is covenant-love\'s flame — Hebrews ends its warning section with this verse unaltered.',
    sourceKeywords: ['a consuming fire', 'even a jealous God'],
    fulfillmentKeywords: ['our God is a consuming fire'],
    terms: [],
  },
  'deu-5-12': {
    title: 'Keep the Sabbath Day to Sanctify It',
    principle:
      'The Deuteronomic Sabbath command adds redemption-memory to creation-rest. First principle: the day is sanctified by command and by memory of deliverance — the rest remains for the people of God.',
    sourceKeywords: ['Keep the sabbath day to sanctify it', 'as the LORD thy God hath commanded thee'],
    fulfillmentKeywords: ['The sabbath was made for man', 'there remaineth therefore a rest'],
    terms: [],
  },
  'deu-6-5': {
    title: 'Thou Shalt Love the LORD Thy God with All Thine Heart',
    principle:
      'Heart, soul, might — total love. First principle: the Shema\'s love command is the greatest commandment by Jesus\' own ruling; all the law hangs on it.',
    sourceKeywords: ['love the LORD thy God', 'with all thine heart', 'with all thy might'],
    fulfillmentKeywords: ['Thou shalt love the Lord thy God with all thy heart'],
    terms: [],
  },
  'deu-6-13': {
    title: 'Thou Shalt Fear the LORD Thy God, and Serve Him',
    principle:
      'Fear, serve, swear by His name. First principle: the temptation-response verse — Christ answers Satan three times from this chapter\'s neighborhood.',
    sourceKeywords: ['fear the LORD thy God', 'serve him', 'swear by his name'],
    fulfillmentKeywords: ['him only shalt thou serve'],
    terms: [],
  },
  'deu-6-16': {
    title: 'Ye Shall Not Tempt the LORD Your God',
    principle:
      'Massah remembered as prohibition. First principle: testing God is forbidden because Massah\'s water-rock is Christ — the tempting is aimed at a Person.',
    sourceKeywords: ['Ye shall not tempt the LORD your God', 'as ye tempted him in Massah'],
    fulfillmentKeywords: ['Thou shalt not tempt the Lord thy God'],
    terms: [],
  },
  'deu-8-3': {
    title: 'Man Doth Not Live by Bread Only',
    principle:
      'Hungered to learn: life is by every word of the LORD\'s mouth. First principle: the manna lesson is the temptation armor — Jesus wields it as the bread-refusal word.',
    sourceKeywords: ['fed thee with manna', 'not live by bread only', 'every word that proceedeth out of the mouth of the LORD'],
    fulfillmentKeywords: ['Man shall not live by bread alone, but by every word of God'],
    terms: [],
  },
  'deu-10-20': {
    title: 'Thou Shalt Fear the LORD... Him Shalt Thou Cleave',
    principle:
      'Fear, serve, cleave, swear. First principle: cleaving to God is marriage language for covenant loyalty — the four verbs of the committed life.',
    sourceKeywords: ['fear the LORD thy God', 'him shalt thou serve', 'to him shalt thou cleave'],
    fulfillmentKeywords: ['him only shalt thou serve'],
    terms: [],
  },
  'deu-13-1': {
    title: 'If There Arise Among You a Prophet... and Giveth Thee a Sign',
    principle:
      'Signs from would-be prophets do not authenticate messages. First principle: wonder-working is the easy counterfeit — the test is the message\'s faithfulness, not the miracle\'s fire.',
    sourceKeywords: ['a prophet, or a dreamer of dreams', 'giveth thee a sign or a wonder'],
    fulfillmentKeywords: ['shall shew great signs and wonders... deceive many'],
    terms: [],
  },
  'deu-16-16': {
    title: 'Three Times in a Year Shall All Thy Males Appear',
    principle:
      'Unleavened bread, weeks, tabernacles — and none empty. First principle: the pilgrimage feasts structure Israel\'s year; the fullness of time finds Jesus\' family keeping this law in Luke 2.',
    sourceKeywords: ['Three times in a year', 'feast of unleavened bread', 'they shall not appear before the LORD empty'],
    fulfillmentKeywords: ['they went up to Jerusalem after the custom of the feast'],
    terms: [],
  },
  'deu-19-15': {
    title: 'At the Mouth of Two Witnesses Shall the Matter Be Established',
    principle:
      'One witness cannot convict. First principle: due-process law becomes church discipline and the Spirit-water-blood triple testimony — establishment requires plurality.',
    sourceKeywords: ['One witness shall not rise up', 'two witnesses, or at the mouth of three witnesses', 'established'],
    fulfillmentKeywords: ['in the mouth of two or three witnesses every word may be established'],
    terms: [],
  },
  'deu-24-1': {
    title: 'Then Let Him Write Her a Bill of Divorcement',
    principle:
      'The divorce concession regulated, not celebrated. First principle: Jesus reads the clause through hardness of heart and returns to Genesis — the bill was a fence, never a license.',
    sourceKeywords: ['a bill of divorcement', 'give it in her hand', 'send her out of his house'],
    fulfillmentKeywords: ['Moses because of the hardness of your hearts suffered you'],
    terms: [],
  },
  'deu-25-4': {
    title: 'Thou Shalt Not Muzzle the Ox When He Treadeth',
    principle:
      'The treading ox eats from the threshing floor. First principle: laborer-care is divine law — Paul and Timothy both insist the principle is about us, not oxen.',
    sourceKeywords: ['not muzzle the ox', 'when he treadeth out the corn'],
    fulfillmentKeywords: ['Doth God take care for oxen?'],
    terms: [],
  },
  'deu-27-26': {
    title: 'Cursed Be He That Confirmeth Not All the Words of This Law',
    principle:
      'The twelve-fold curse ends with the totalizing one — and all the people say Amen. First principle: partial law-keeping is cursed law-keeping; the Amen-line is the indictment Paul quotes for universal guilt.',
    sourceKeywords: ['Cursed be he that confirmeth not all the words of this law', 'all the people shall say, Amen'],
    fulfillmentKeywords: ['Cursed is every one that continueth not in all things'],
    terms: [],
  },
  'deu-29-4': {
    title: 'The LORD Hath Not Given You an Heart to Perceive',
    principle:
      'Unto this day — no perceiving heart, seeing eyes, hearing ears. First principle: perception is a gift, not a given — Paul quotes the not-yet-given heart over the synagogue\'s vail.',
    sourceKeywords: ['hath not given you an heart to perceive', 'eyes to see, and ears to hear', 'unto this day'],
    fulfillmentKeywords: ['the vail is upon their heart in the reading of the old testament'],
    terms: [],
  },
  'deu-30-4': {
    title: 'From Thence Will the LORD Thy God Gather Thee',
    principle:
      'Scattering to the far parts of heaven meets a fetching God. First principle: the extremity of exile is the address of regathering — Jesus cites it for the elect-gathering with the trumpet.',
    sourceKeywords: ['driven out unto the outmost parts of heaven', 'from thence will the LORD thy God gather thee'],
    fulfillmentKeywords: ['gather together his elect from the four winds'],
    terms: [],
  },
  'deu-30-12': {
    title: 'It Is Not in Heaven, That Thou Shouldest Say, Who Shall Go Up?',
    principle:
      'The commandment is not beyond reach. First principle: Paul re-reads the not-in-heaven of the law as the not-to-bring-Christ-down of faith — the Word is near.',
    sourceKeywords: ['It is not in heaven', 'Who shall go up for us to heaven'],
    fulfillmentKeywords: ['Who shall ascend into heaven? that is, to bring Christ down'],
    terms: [],
  },
  'deu-30-14': {
    title: 'But the Word Is Very Nigh unto Thee',
    principle:
      'In mouth and heart, that thou mayest do it. First principle: the near-word is the faith-word Paul preaches — the confession of mouth and heart that saves.',
    sourceKeywords: ['the word is very nigh unto thee', 'in thy mouth, and in thy heart'],
    fulfillmentKeywords: ['The word is nigh thee, even in thy mouth, and in thy heart'],
    terms: [],
  },
  'deu-31-6': {
    title: 'He Will Not Fail Thee, Nor Forsake Thee',
    principle:
      'Courage commanded on presence-promise. First principle: the succession sermon — Joshua receives what Moses received; Hebrews hands it to every believer against covetousness.',
    sourceKeywords: ['Be strong and of a good courage', 'he doth go with thee', 'he will not fail thee, nor forsake thee'],
    fulfillmentKeywords: ['I will never leave thee, nor forsake thee'],
    terms: [],
  },
  'deu-32-35': {
    title: 'To Me Belongeth Vengeance and Recompence',
    principle:
      'The Song of Moses assigns repayment to God; sliding feet have a due time. First principle: vengeance delegated is vengeance certain — Hebrews quotes it to warn apostates, Romans to free forgivers.',
    sourceKeywords: ['To me belongeth vengeance, and recompence', 'their foot shall slide in due time'],
    fulfillmentKeywords: ['Vengeance belongeth unto me, I will recompense'],
    terms: [],
  },
  'deu-32-43': {
    title: 'Rejoice, O Ye Nations, with His People',
    principle:
      'The Song\'s Gentile-joy coda, avenging blood and mercying land. First principle: the nations are summoned into Israel\'s joy — Hebrews quotes it of the first-begotten\'s worship, Romans of shared gladness.',
    sourceKeywords: ['Rejoice, O ye nations, with his people', 'avenge the blood of his servants', 'merciful unto his land'],
    fulfillmentKeywords: ['Rejoice, ye Gentiles, with his people'],
    terms: [],
  },
  'deu-33-2': {
    title: 'The LORD Came from Sinai... with Ten Thousands of Saints',
    principle:
      'The theophany poem: Sinai, Seir, Paran, fiery law from His right hand. First principle: the coming-Lord poetry underlies Jude and the angelic-law tradition — the LORD comes with holy myriads.',
    sourceKeywords: ['The LORD came from Sinai', 'he came with ten thousands of saints', 'a fiery law for them'],
    fulfillmentKeywords: ['the Lord cometh with ten thousands of his saints'],
    terms: [],
  },

  // ── Hand-written expansion: Joshua ──────────────────────────────────────
  'jos-1-5': {
    title: 'As I Was with Moses, So I Will Be with Thee',
    principle:
      'No man stands before Joshua; no failing, no forsaking. First principle: leadership succession rides on presence-promise — Hebrews passes the same promise to every believer.',
    sourceKeywords: ['As I was with Moses, so I will be with thee', 'I will not fail thee, nor forsake thee'],
    fulfillmentKeywords: ['I will never leave thee, nor forsake thee'],
    terms: [],
  },
  'jos-1-9': {
    title: 'Be Strong and of a Good Courage',
    principle:
      'The commanded courage grounded on whithersoever-thou-goest presence. First principle: courage is not self-generated but presence-derived — the LORD thy God is with thee whithersoever.',
    sourceKeywords: ['Be strong and of a good courage', 'be not afraid, neither be thou dismayed', 'with thee whithersoever thou goest'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-8-34': {
    title: 'He Read All the Words of the Law',
    principle:
      'Blessings and cursings read to all the assembly, women and little ones included. First principle: covenant renewal is public reading — every soul hears both the blessing and the curse.',
    sourceKeywords: ['he read all the words of the law', 'the blessings and cursings', 'all that is written in the book of the law'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-10-13': {
    title: 'The Sun Stood Still in the Midst of Heaven',
    principle:
      'A whole day of held light for a won battle, written in the book of Jasher. First principle: the Creator can pause His clock for His people\'s victory — time is His servant.',
    sourceKeywords: ['the sun stood still', 'the moon stayed', 'hasted not to go down about a whole day'],
    fulfillmentKeywords: ['So the sun returned ten degrees'],
    terms: [],
  },
  'jos-21-45': {
    title: 'There Failed Not Ought of Any Good Thing',
    principle:
      'All came to pass of what the LORD spoke to Israel. First principle: the promise-audit at chapter\'s end — nothing failed; Solomon and Hebrews both inherit the sentence.',
    sourceKeywords: ['There failed not ought', 'any good thing which the LORD had spoken', 'all came to pass'],
    fulfillmentKeywords: ['there hath not failed one word of all his good promise'],
    terms: [],
  },
  'jos-24-2': {
    title: 'Your Fathers Dwelt on the Other Side of the Flood',
    principle:
      'The covenant history begins with idolatrous Terah. First principle: the nation\'s story opens in a house of other gods — grace chose a family that worshipped wrong.',
    sourceKeywords: ['dwelt on the other side of the flood', 'Terah, the father of Abraham', 'they served other gods'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-24-15': {
    title: 'Choose You This Day Whom Ye Will Serve',
    principle:
      'The choice framed and decided personally: as for me and my house. First principle: neutrality is impossibility — serve the fathers\' gods or the LORD; Joshua\'s household decides first.',
    sourceKeywords: ['choose you this day whom ye will serve', 'as for me and my house', 'we will serve the LORD'],
    fulfillmentKeywords: ['No man can serve two masters'],
    terms: [],
  },
  'jos-24-19': {
    title: 'Ye Cannot Serve the LORD: for He Is an Holy God',
    principle:
      'Joshua blocks cheap commitment — a jealous God will not forgive presumptive covenant. First principle: the LORD wants informed covenant, not enthusiast vows; holiness makes service impossible to the self-confident.',
    sourceKeywords: ['Ye cannot serve the LORD', 'he is an holy God', 'he is a jealous God'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-24-32': {
    title: 'The Bones of Joseph, Which the Children of Israel Brought Up',
    principle:
      'Joseph\'s coffin from Exodus 13 is buried in Shechem\'s purchased field. First principle: a four-hundred-year-old promise made the pilgrimage carry bones — faith in resurrection-land down to the funeral.',
    sourceKeywords: ['the bones of Joseph', 'brought up out of Egypt', 'buried they in Shechem'],
    fulfillmentKeywords: ['And Joseph took an oath of the children of Israel'],
    terms: [],
  },

  // ── Hand-written expansion: Judges ──────────────────────────────────────
  'jdg-2-16': {
    title: 'Nevertheless the LORD Raised Up Judges',
    principle:
      'The rescue-cycle: spoiled, then delivered. First principle: the judges are grace\'s repeated answer to repeated apostasy — deliverers raised, not kings elected.',
    sourceKeywords: ['the LORD raised up judges', 'delivered them out of the hand'],
    fulfillmentKeywords: ['raised up unto them deliverers'],
    terms: [],
  },
  'jdg-13-5': {
    title: 'The Child Shall Be a Nazarite unto God from the Womb',
    principle:
      'Samson\'s prenatal vow: no razor, begun-to-deliver. First principle: the Nazarite-from-womb pattern is the forerunner pattern — John the Baptist inherits it in Luke 1, and the Nazarene word echoes to Matthew 2.',
    sourceKeywords: ['shalt conceive, and bear a son', 'no razor shall come on his head', 'a Nazarite unto God from the womb'],
    fulfillmentKeywords: ['he shall be called a Nazarene', 'he shall be great unto the Lord'],
    terms: [],
  },
  'jdg-21-25': {
    title: 'In Those Days There Was No King in Israel',
    principle:
      'Every man right in his own eyes. First principle: the book\'s last verse diagnoses its own chaos — the absence of king and vision makes each man his own law, straight into Isaiah\'s sheep-stray.',
    sourceKeywords: ['there was no king in Israel', 'every man did that which was right in his own eyes'],
    fulfillmentKeywords: ['All we like sheep have gone astray'],
    terms: [],
  },

  // ── Hand-written expansion: Ruth ────────────────────────────────────────
  'rut-1-16': {
    title: 'Whither Thou Goest, I Will Go',
    principle:
      'Ruth\'s covenant speech: thy people, thy God. First principle: the Moabite widow\'s cleaving is conversion — the Gentile graft into Israel begins with a love-oath on a road.',
    sourceKeywords: ['Intreat me not to leave thee', 'thy people shall be my people', 'thy God my God'],
    fulfillmentKeywords: ['Ruth the Moabitess... of whom came Boaz'],
    terms: [],
  },
  'rut-4-17': {
    title: 'There Is a Son Born to Naomi... the Father of Jesse, the Father of David',
    principle:
      'Obed born to Naomi — Jesse and David in the lineage. First principle: the Moabite convert\'s grandson is David — the genealogy that runs to the Messiah includes Ruth by name.',
    sourceKeywords: ['a son born to Naomi', 'he is the father of Jesse, the father of David'],
    fulfillmentKeywords: ['Salmon begat Booz of Rachab; and Booz begat Obed of Ruth'],
    terms: [],
  },
  'rut-4-18': {
    title: 'Now These Are the Generations of Pharez',
    principle:
      'Pharez to Hezron — the messianic genealogy line opened. First principle: the book ends where Matthew begins — the toledoth of the royal line from Perez through Obed to David to Christ.',
    sourceKeywords: ['the generations of Pharez', 'Pharez begat Hezron'],
    fulfillmentKeywords: ['and Phares and Zara of Thamar; and Phares begat Esrom'],
    terms: [],
  },

  // ── Hand-written expansion: 1 Samuel ────────────────────────────────────
  '1sa-2-1': {
    title: 'My Heart Rejoiceth in the LORD; Mine Horn Is Exalted',
    principle:
      'Hannah\'s prayer of exultation in salvation. First principle: the barren woman\'s song becomes Mary\'s Magnificat template — horn exalted, mouth enlarged, rejoicing in salvation.',
    sourceKeywords: ['My heart rejoiceth in the LORD', 'mine horn is exalted', 'I rejoice in thy salvation'],
    fulfillmentKeywords: ['My soul doth magnify the Lord'],
    terms: [],
  },
  '1sa-2-35': {
    title: 'I Will Raise Me Up a Faithful Priest',
    principle:
      'A priest after God\'s own heart, a sure house, walking before the anointed forever. First principle: Eli\'s house falls so the faithful-priest promise stands — fulfilled in Zadok and ultimately in the Son.',
    sourceKeywords: ['I will raise me up a faithful priest', 'according to that which is in mine heart', 'a sure house'],
    fulfillmentKeywords: ['consider the Apostle and High Priest of our profession, Christ Jesus'],
    terms: [],
  },
  '1sa-8-7': {
    title: 'They Have Not Rejected Thee, but They Have Rejected Me',
    principle:
      'The throne-rejection read as theocracy-rejection. First principle: asking for a king like the nations is a verdict on God\'s reign — and Hosea repeats the charge when Israel asks a king again.',
    sourceKeywords: ['they have not rejected thee', 'they have rejected me', 'that I should not reign over them'],
    fulfillmentKeywords: ['I gave thee a king in mine anger'],
    terms: [],
  },
  '1sa-15-22': {
    title: 'To Obey Is Better than Sacrifice',
    principle:
      'Samuel\'s rebuke of Saul\'s spared-sheep religion. First principle: obedience outranks ritual — the verse Jesus quotes twice when mercy outruns sacrifice.',
    sourceKeywords: ['Hath the LORD as great delight in burnt offerings', 'to obey is better than sacrifice', 'the fat of rams'],
    fulfillmentKeywords: ['I will have mercy, and not sacrifice'],
    terms: [],
  },
  '1sa-16-1': {
    title: 'I Have Provided Me a King Among His Sons',
    principle:
      'Mourning ends; the horn fills; Jesse of Bethlehem is named. First principle: God\'s provided king comes from Bethlehem before David is born there — the town is already messianic address.',
    sourceKeywords: ['How long wilt thou mourn for Saul', 'fill thine horn with oil', 'I have provided me a king'],
    fulfillmentKeywords: ['he raised up unto them David to be their king'],
    terms: [],
  },
  '1sa-16-13': {
    title: 'The Spirit of the LORD Came upon David from That Day Forward',
    principle:
      'The anointing oil and the abiding Spirit. First principle: the anointing is real and retroactive to the tribe of Judah — the Spirit comes upon David and never recorded as departing till the sin with Bathsheba\'s prayer.',
    sourceKeywords: ['the horn of oil, and anointed him', 'the Spirit of the LORD came upon David', 'from that day forward'],
    fulfillmentKeywords: ['I have found David... a man after mine own heart'],
    terms: [],
  },
  '1sa-17-45': {
    title: 'I Come to Thee in the Name of the LORD of Hosts',
    principle:
      'Sword and spear versus the Name. First principle: the shepherd-boy\'s theology defeats the giant\'s arsenal — the battle is fought in a name, not in hardware.',
    sourceKeywords: ['in the name of the LORD of hosts', 'whom thou hast defied'],
    fulfillmentKeywords: ['the weapons of our warfare are not carnal'],
    terms: [],
  },
  '1sa-17-47': {
    title: 'The Battle Is the LORD\'S',
    principle:
      'The assembly learns salvation without sword or spear. First principle: ownership of the battle decides the outcome — the LORD gives into hands, and the assembly knows.',
    sourceKeywords: ['the LORD saveth not with sword and spear', 'the battle is the LORD\'S', 'he will give you into our hands'],
    fulfillmentKeywords: ['the battle is not yours, but God\'s'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Samuel ────────────────────────────────────
  '2sa-7-13': {
    title: 'He Shall Build an House for My Name',
    principle:
      'The seed builds; the throne is established forever. First principle: Solomon builds the temple, but the verse outruns him — the forever-establishment is David\'s greater Son.',
    sourceKeywords: ['He shall build an house for my name', 'stablish the throne of his kingdom for ever'],
    fulfillmentKeywords: ['But unto the Son he saith... Thy throne'],
    terms: [],
  },
  '2sa-7-14': {
    title: 'I Will Be His Father, and He Shall Be My Son',
    principle:
      'Father-son covenant with chastening rod included. First principle: the decree-sonship of Psalm 2 and the Davidic covenant are the same verse to Hebrews — and the chastening clause points to the cross.',
    sourceKeywords: ['I will be his father', 'he shall be my son', 'chasten him with the rod of men'],
    fulfillmentKeywords: ['For unto which of the angels said he... Thou art my Son'],
    terms: [],
  },
  '2sa-7-16': {
    title: 'Thy Throne Shall Be Established for Ever',
    principle:
      'House, kingdom, throne — forever before thee. First principle: the oath that outruns exile — Gabriel repeats it to Mary over the child in her womb.',
    sourceKeywords: ['thine house and thy kingdom', 'established for ever before thee', 'thy throne shall be established for ever'],
    fulfillmentKeywords: ['the Lord God shall give unto him the throne of his father David'],
    terms: [],
  },
  '2sa-12-13': {
    title: 'The LORD Also Hath Put Away Thy Sin; Thou Shalt Not Die',
    principle:
      'Confession one word long; pardon immediate. First principle: the psalms of forgiveness (32, 51) come out of this sentence — sin put away, death sentence lifted, consequences remaining.',
    sourceKeywords: ['I have sinned against the LORD', 'The LORD also hath put away thy sin', 'thou shalt not die'],
    fulfillmentKeywords: ['Blessed is he whose transgression is forgiven'],
    terms: [],
  },
  '2sa-22-2': {
    title: 'The LORD Is My Rock, and My Fortress',
    principle:
      'The deliverance song David sings when the LORD delivered him from all enemies. First principle: the psalm of chapter 22 is Psalm 18 in place — the rescue-vocabulary of the king who trusted.',
    sourceKeywords: ['The LORD is my rock, and my fortress', 'my deliverer'],
    fulfillmentKeywords: ['The LORD is my rock, and my fortress'],
    terms: [],
  },
  '2sa-22-50': {
    title: 'I Will Give Thanks unto Thee among the Heathen',
    principle:
      'The thanksgiving goes international. First principle: Romans 15 quotes David\'s resolve as proof of the Gentile plan — praise among the nations was the king\'s own mission statement.',
    sourceKeywords: ['give thanks unto thee, O LORD, among the heathen', 'sing praises unto thy name'],
    fulfillmentKeywords: ['confess to thee among the Gentiles'],
    terms: [],
  },
  '2sa-24-17': {
    title: 'Let Thine Hand Be Against Me, and Against My Father\'s House',
    principle:
      'David intercedes at the plague-angel\'s sight: the shepherd offers himself for the sheep. First principle: the king\'s substitution instinct points to the greater Shepherd-King who does not pray it but performs it.',
    sourceKeywords: ['I have sinned, and I have done wickedly', 'these sheep, what have they done', 'be against me'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 1 Kings ─────────────────────────────────────
  '1ki-2-2': {
    title: 'I Go the Way of All the Earth: Be Thou Strong',
    principle:
      'David\'s dying charge to Solomon. First principle: death is the way of all the earth until the One who rose — and the charge to show manhood continues inActs\' he fulfilled his course.',
    sourceKeywords: ['I go the way of all the earth', 'be thou strong therefore', 'shew thyself a man'],
    fulfillmentKeywords: ['for David... fell on sleep, and was laid unto his fathers'],
    terms: [],
  },
  '1ki-2-10': {
    title: 'So David Slept with His Fathers',
    principle:
      'Buried in the city of David. First principle: the promised throne-Seed\'s ancestor dies and stays dead — Peter and Paul both press the point: the grave kept David, not so the Christ.',
    sourceKeywords: ['David slept with his fathers', 'buried in the city of David'],
    fulfillmentKeywords: ['he is both dead and buried, and his sepulchre is with us unto this day'],
    terms: [],
  },
  '1ki-8-27': {
    title: 'Will God Indeed Dwell on the Earth?',
    principle:
      'Heaven of heavens cannot contain Him — how much less this house. First principle: the temple-dedication knows its own limit; the Incarnation is the surprising answer to the impossible question.',
    sourceKeywords: ['Will God indeed dwell on the earth', 'cannot contain thee', 'this house that I have builded'],
    fulfillmentKeywords: ['the Word was made flesh, and dwelt among us'],
    terms: [],
  },
  '1ki-8-46': {
    title: 'There Is No Man That Sinneth Not',
    principle:
      'The dedication prayer presumes sin, exile, and return-prayer toward the house. First principle: Solomon\'s temple-prayer is a confession-machine for future failures — forgiveness hoped toward one place.',
    sourceKeywords: ['If they sin against thee', 'there is no man that sinneth not', 'carry them away captives'],
    fulfillmentKeywords: ['there is not a just man upon earth'],
    terms: [],
  },
  '1ki-8-56': {
    title: 'There Hath Not Failed One Word of All His Good Promise',
    principle:
      'Rest given according to all He promised by Moses. First principle: the word-audit at the temple\'s dedication — not one word failed; Hebrews makes the same audit the ground of entering rest.',
    sourceKeywords: ['hath given rest unto his people Israel', 'there hath not failed one word', 'all his good promise'],
    fulfillmentKeywords: ['There failed not ought of any good thing'],
    terms: [],
  },
  '1ki-17-1': {
    title: 'There Shall Not Be Dew Nor Rain These Years',
    principle:
      'Elijah the Tishbite announces the drought before Ahab. First principle: the prophet\'s word controls the sky — James lifts Elijah as the proof that praying men like us move weather.',
    sourceKeywords: ['As the LORD God of Israel liveth', 'there shall not be dew nor rain', 'but according to my word'],
    fulfillmentKeywords: ['he prayed earnestly that it might not rain'],
    terms: [],
  },
  '1ki-17-9': {
    title: 'Arise, Get Thee to Zarephath',
    principle:
      'A widow of Zidon commanded to sustain the prophet. First principle: God sends the needy to the needier — the Gentile widow\'s barrel becomes the stage for resurrection faith.',
    sourceKeywords: ['get thee to Zarephath', 'I have commanded a widow woman there', 'to sustain thee'],
    fulfillmentKeywords: ['unto a widow of Sarepta, a city of Sidon'],
    terms: [],
  },
  '1ki-18-21': {
    title: 'How Long Halt Ye between Two Opinions?',
    principle:
      'Limping between LORD and Baal, and the people answer not a word. First principle: divided worship is limping worship — the choice is posed with silence as the worst answer.',
    sourceKeywords: ['How long halt ye between two opinions', 'if the LORD be God, follow him', 'the people answered him not a word'],
    fulfillmentKeywords: ['No man can serve two masters'],
    terms: [],
  },
  '1ki-19-10': {
    title: 'I, Even I Only, Am Left; and They Seek My Life',
    principle:
      'Elijah\'s jealous complaint under the juniper. First principle: the prophet\'s census of faithfulness is wrong by seven thousand — despair always undercounts the faithful remnant.',
    sourceKeywords: ['I have been very jealous for the LORD', 'slain thy prophets', 'I, even I only, am left'],
    fulfillmentKeywords: ['Lord, they have killed thy prophets'],
    terms: [],
  },
  '1ki-19-18': {
    title: 'Yet I Have Left Me Seven Thousand in Israel',
    principle:
      'Knees unbowed, mouths unkissed. First principle: God\'s remnant census overrules the prophet\'s — hidden faithfulness exists beyond visible crowds.',
    sourceKeywords: ['I have left me seven thousand', 'all the knees which have not bowed', 'which hath not kissed him'],
    fulfillmentKeywords: ['I have reserved to myself seven thousand men'],
    terms: [],
  },
  '1ki-19-21': {
    title: 'He Arose, and Went after Elijah, and Ministered unto Him',
    principle:
      'Elisha burns the plowing gear and follows. First principle: the call answered is irreversible — oxen cooked on their own yoke; the old life becomes the farewell feast.',
    sourceKeywords: ['took a yoke of oxen', 'boiled their flesh with the instruments', 'went after Elijah, and ministered unto him'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 2 Kings ─────────────────────────────────────
  '2ki-2-11': {
    title: 'A Chariot of Fire... and Elijah Went Up',
    principle:
      'Fire-horses part the two; a whirlwind receives the prophet. First principle: one man in Scripture skipped death — the translation that John the Baptist\'s spirit- predecessor shares with Enoch\'s hope.',
    sourceKeywords: ['a chariot of fire, and horses of fire', 'parted them both asunder', 'Elijah went up by a whirlwind'],
    fulfillmentKeywords: ['They also which saw him... shall so come in like manner'],
    terms: [],
  },
  '2ki-4-42': {
    title: 'Bread of the Firstfruits: Twenty Loaves of Barley',
    principle:
      'A hundred men eat and leave over, per the word of the LORD. First principle: the multiplying man of God feeds a hundred with firstfruits — Elisha\'s loaves prefigure the Lord\'s five-loaves feeding.',
    sourceKeywords: ['bread of the firstfruits', 'twenty loaves of barley', 'Give unto the people, that they may eat'],
    fulfillmentKeywords: ['There is a lad here, which hath five barley loaves'],
    terms: [],
  },
  '2ki-13-21': {
    title: 'When the Man Touched the Bones of Elisha, He Revived',
    principle:
      'A dead man revived by contact with a dead prophet\'s bones. First principle: the God of resurrection can use a sepulchre — even the buried saints carry life in their remains.',
    sourceKeywords: ['touched the bones of Elisha'],
    fulfillmentKeywords: ['many bodies of the saints which slept arose'],
    terms: [],
  },
  '2ki-17-13': {
    title: 'The LORD Testified against Israel by All the Prophets',
    principle:
      'Turn ye from your evil ways — testimony by every seer, refused. First principle: the prophets\' refrain was long and patient; judgment arrives only after the testified return was refused.',
    sourceKeywords: ['testified against Israel, and against Judah', 'by all the prophets, and by all the seers', 'Turn ye from your evil ways'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ki-18-4': {
    title: 'He Brake in Pieces the Brasen Serpent',
    principle:
      'Hezekiah destroys the good thing become an idol, calling it Nehushtan. First principle: even God-given symbols become idols when trusted — the bronze serpent of John 3 had to be shattered.',
    sourceKeywords: ['brake in pieces the brasen serpent', 'burn incense to it', 'called it Nehushtan'],
    fulfillmentKeywords: ['as Moses lifted up the serpent'],
    terms: [],
  },
  '2ki-20-5': {
    title: 'I Have Heard Thy Prayer, I Have Seen Thy Tears',
    principle:
      'Hezekiah healed on the third day. First principle: prayer-plus-tears gets a dated answer — the third-day rising to the house of the LORD preaches resurrection rhythm.',
    sourceKeywords: ['I have heard thy prayer', 'I have seen thy tears', 'on the third day thou shalt go up'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ki-25-27': {
    title: 'Evilmerodach Did Lift Up the Head of Jehoiachin out of Prison',
    principle:
      'Thirty-seven years of captivity end in a change of garments and a seat at the king\'s table. First principle: the line of David survives the fall of Jerusalem in a pardoned prisoner eating at a foreign king\'s table.',
    sourceKeywords: ['lift up the head of Jehoiachin', 'out of prison', 'seven and thirtieth year'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 1 Chronicles ────────────────────────────────
  '1ch-16-22': {
    title: 'Touch Not Mine Anointed, and Do My Prophets No Harm',
    principle:
      'The psalm-verse in David\'s psalm of thanks. First principle: the covenant family and its spokesmen are under God\'s personal protection — the patriarchs\' testimony is Israel\'s inheritance.',
    sourceKeywords: ['Touch not mine anointed', 'do my prophets no harm'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ch-17-11': {
    title: 'I Will Raise Up Thy Seed after Thee',
    principle:
      'The Nathan-prophecy\'s seed raised after David, kingdom established. First principle: Chronicles re-preaches 2 Samuel 7 to the returned exiles — the throne-promise was still alive after the fall.',
    sourceKeywords: ['I will raise up thy seed after thee', 'which shall be of thy sons', 'I will establish his kingdom'],
    fulfillmentKeywords: ['the Lord God shall give unto him the throne of his father David'],
    terms: [],
  },
  '1ch-17-13': {
    title: 'I Will Be His Father, and He Shall Be My Son',
    principle:
      'Mercy not taken away as from Saul. First principle: the father-son decree with mercy\'s permanence clause — Hebrews\' angel-comparison rests on this promise to the Son.',
    sourceKeywords: ['I will be his father, and he shall be my son', 'I will not take my mercy away from him'],
    fulfillmentKeywords: ['For unto which of the angels said he... Thou art my Son'],
    terms: [],
  },
  '1ch-21-17': {
    title: 'Let Thine Hand Be on Me, and on My Father\'s House',
    principle:
      'David\'s intercession at the plague: the sheep are innocent. First principle: the shepherd-king pleads substitution — the angel with the drawn sword stops at the threshingfloor where mercy meets the offering.',
    sourceKeywords: ['I it is that have sinned', 'these sheep, what have they done', 'be on me, and on my father\'s house'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ch-22-10': {
    title: 'He Shall Build an House for My Name',
    principle:
      'Solomon named son, throne established over Israel forever. First principle: the temple-builder and the throne-establisher are fused — pointing beyond Solomon to the Son who builds God\'s house.',
    sourceKeywords: ['He shall build an house for my name', 'he shall be my son, and I will be his father', 'establish the throne of his kingdom for ever'],
    fulfillmentKeywords: ['I will build my church'],
    terms: [],
  },
  '1ch-28-6': {
    title: 'Solomon Thy Son, He Shall Build My House; I Have Chosen Him',
    principle:
      'The public announcement of the chosen builder-son. First principle: choice is announced before work begins — I will be his father is the warrant for the building.',
    sourceKeywords: ['Solomon thy son', 'he shall build my house and my courts', 'I have chosen him to be my son'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ch-29-11': {
    title: 'Thine, O LORD, Is the Greatness, and the Power',
    principle:
      'The assembly doxology: kingdom, head above all. First principle: David\'s prayer-model for the temple gifts — everything is Thine; the Lord\'s prayer\'s kingdom-glory line echoes this.',
    sourceKeywords: ['Thine, O LORD, is the greatness', 'thine is the kingdom, O LORD', 'exalted as head above all'],
    fulfillmentKeywords: ['Thine is the kingdom, and the power, and the glory'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Chronicles ────────────────────────────────
  '2ch-6-2': {
    title: 'I Have Built an House of Habitation for Thee',
    principle:
      'Solomon\'s claim over the finished house. First principle: the claim is human, the answer divine — the cloud fills, and the question of 1 Kings 8:27 immediately follows the claim.',
    sourceKeywords: ['an house of habitation for thee'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-6-18': {
    title: 'Will God in Very Deed Dwell with Men on the Earth?',
    principle:
      'The Chronicler\'s version of the temple-dedication question. First principle: the wonder-question stands until the Word dwelt among us — the true answer to Solomon\'s astonishment.',
    sourceKeywords: ['Will God in very deed dwell with men on the earth', 'heaven and the heaven of heavens cannot contain thee'],
    fulfillmentKeywords: ['and dwelt among us (and we beheld his glory)'],
    terms: [],
  },
  '2ch-7-14': {
    title: 'If My People... Shall Humble Themselves, and Pray',
    principle:
      'Humble, pray, seek, turn — heard from heaven, forgiven, healed. First principle: the four-step revival formula with a healing promise — given to Solomon for the temple\'s remedy role.',
    sourceKeywords: ['called by my name, shall humble themselves', 'seek my face', 'will forgive their sin, and will heal their land'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-7-16': {
    title: 'I Have Chosen and Sanctified This House',
    principle:
      'Name, eyes, and heart perpetually there. First principle: the temple is chosen, sanctified, and watched — eyes and heart of God resident; a promise Jesus honors by cleansing what was profaned.',
    sourceKeywords: ['I have chosen and sanctified this house', 'my name may be there for ever', 'mine eyes and mine heart shall be there'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-16-9': {
    title: 'The Eyes of the LORD Run to and Fro throughout the Whole Earth',
    principle:
      'Seeking the perfect-hearted to show Himself strong. First principle: the searching eyes are partisan — strength shown to the fully-committed; Hanani\'s rebuke to Asa is a standing audit.',
    sourceKeywords: ['the eyes of the LORD run to and fro', 'shew himself strong', 'heart is perfect toward him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-20-15': {
    title: 'The Battle Is Not Yours, but God\'s',
    principle:
      'The vast multitude meets a preached non-fear. First principle: the war is the LORD\'s, so the posture is standing-still trust with singers in front of the army.',
    sourceKeywords: ['Be not afraid nor dismayed', 'this great multitude', 'the battle is not yours, but God\'s'],
    fulfillmentKeywords: ['the battle is the LORD\'S'],
    terms: [],
  },
  '2ch-20-20': {
    title: 'Believe in the LORD Your God, So Shall Ye Be Established',
    principle:
      'Jehoshaphat\'s morning command: believe the LORD, believe His prophets. First principle: establishment by believing, prosperity by prophetic trust — the singers go before the spoil.',
    sourceKeywords: ['Believe in the LORD your God, so shall ye be established', 'believe his prophets, so shall ye prosper'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-36-23': {
    title: 'Who Is There among You of All His People? Let Him Go Up',
    principle:
      'Cyrus\'s decree closes the Chronicler\'s book with an open invitation. First principle: the Persian king\'s charge fulfills Jeremiah and Isaiah — the go-up call is the remnant\'s trumpet.',
    sourceKeywords: ['Cyrus king of Persia', 'charged me to build him an house in Jerusalem', 'let him go up'],
    fulfillmentKeywords: ['that saith of Cyrus, He is my shepherd'],
    terms: [],
  },

  // ── Hand-written expansion: Ezra ────────────────────────────────────────
  'ezr-1-2': {
    title: 'The LORD God of Heaven Hath Charged Me to Build Him an House',
    principle:
      'Cyrus\'s own confession of the charge. First principle: the God of heaven steers the greatest empire\'s decree — Isaiah had named Cyrus generations earlier.',
    sourceKeywords: ['The LORD God of heaven', 'given me all the kingdoms of the earth', 'build him an house at Jerusalem'],
    fulfillmentKeywords: ['that saith of Cyrus, He is my shepherd'],
    terms: [],
  },
  'ezr-1-3': {
    title: 'His God Be with Him, and Let Him Go Up',
    principle:
      'The go-up license for all His people. First principle: the decree frees whoever wills — the return is voluntary, funded, and prophesied.',
    sourceKeywords: ['Who is there among you of all his people', 'let him go up to Jerusalem', 'build the house of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezr-6-14': {
    title: 'They Builded and Finished It, According to the Commandment',
    principle:
      'Prospering through Haggai and Zechariah\'s prophesying; three kings funding. First principle: the building finishes by Word plus decree — prophets preach, kings pay, elders build.',
    sourceKeywords: ['they prospered through the prophesying', 'finished it', 'according to the commandment of Cyrus, and Darius, and Artaxerxes'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezr-7-10': {
    title: 'Ezra Had Prepared His Heart to Seek the Law',
    principle:
      'Seek, do, teach — the prepared-heart sequence. First principle: the scribe\'s triad is the ministry\'s order — seeking precedes doing, doing precedes teaching.',
    sourceKeywords: ['prepared his heart', 'to seek the law of the LORD, and to do it', 'to teach in Israel'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezr-9-9': {
    title: 'Our God Hath Not Forsaken Us in Our Bondage',
    principle:
      'Mercy before Persian kings: reviving, house-raising, a wall in Judah. First principle: grace gives reviving and repair — the forsaken people rebuilt with a wall and a worship.',
    sourceKeywords: ['our God hath not forsaken us in our bondage', 'extended mercy', 'to repair the desolations thereof'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Nehemiah ────────────────────────────────────
  'neh-1-5': {
    title: 'O LORD God of Heaven, the Great and Terrible God',
    principle:
      'The covenant-keeping, mercy-showing God addressed for Jerusalem\'s ruins. First principle: Nehemiah\'s prayer begins where all intercession begins — greatness, terror, and covenant-mercy for lovers and keepers.',
    sourceKeywords: ['O LORD God of heaven', 'keepeth covenant and mercy', 'for them that love him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'neh-9-17': {
    title: 'Thou Art a God Ready to Pardon',
    principle:
      'The Levites\' confession: hardened necks, yet a pardoning God who forsook not. First principle: the history-chapter of Nehemiah 9 is one long proof that God\'s readiness to pardon outruns rebellion.',
    sourceKeywords: ['a God ready to pardon', 'gracious and merciful, slow to anger', 'and forsookest them not'],
    fulfillmentKeywords: ['The LORD is longsuffering, and of great mercy'],
    terms: [],
  },
  'neh-9-33': {
    title: 'Thou Art Just in All That Is Brought upon Us',
    principle:
      'God right, people wicked — the covenant-lawsuit settled. First principle: the confession concedes the case: justice vindicated, wickedness owned; Daniel prays the same way.',
    sourceKeywords: ['thou art just in all that is brought upon us', 'thou hast done right', 'we have done wickedly'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Esther ──────────────────────────────────────
  'est-4-14': {
    title: 'Who Knoweth Whether Thou Art Come to the Kingdom for Such a Time as This?',
    principle:
      'Silence would destroy; deliverance would arise from another place. First principle: providence positions — Mordecai\'s question makes fasting courage: perhaps the throne room is why you exist.',
    sourceKeywords: ['if thou altogether holdest thy peace', 'enlargement and deliverance arise to the Jews from another place', 'for such a time as this'],
    fulfillmentKeywords: ['God did send me before you to preserve life'],
    terms: [],
  },
  'est-8-17': {
    title: 'Many of the People of the Land Became Jews',
    principle:
      'Joy, gladness, feast, and conversions across the empire. First principle: reversal day — the decree of doom became a day of fear-falling conversions; the Jewish feast drew the nations in.',
    sourceKeywords: ['joy and gladness, a feast and a good day', 'many of the people of the land became Jews', 'the fear of the Jews fell upon them'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Job ─────────────────────────────────────────
  'job-1-21': {
    title: 'The LORD Gave, and the LORD Hath Taken Away',
    principle:
      'Naked in, naked out; the name of the LORD blessed anyway. First principle: stewardship of loss — the Giver\'s rights are acknowledged at the moment of the taking; sin stayed away from the lips.',
    sourceKeywords: ['Naked came I out of my mother\'s womb', 'the LORD gave, and the LORD hath taken away', 'blessed be the name of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-2-10': {
    title: 'Shall We Receive Good at the Hand of God, and Not Evil?',
    principle:
      'The second trial answered without lip-sin. First principle: Job refuses the transactional God — receiving both hands from heaven without charging Him foolishly.',
    sourceKeywords: ['Thou speakest as one of the foolish women', 'shall we receive good... and shall we not receive evil', 'did not Job sin with his lips'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-5-13': {
    title: 'He Taketh the Wise in Their Own Craftiness',
    principle:
      'The froward counsel carried headlong. First principle: Eliphaz\'s true saying — even from a wrong friend — is Scripture twice over: Paul quotes it against worldly wisdom.',
    sourceKeywords: ['He taketh the wise in their own craftiness', 'the counsel of the froward is carried headlong'],
    fulfillmentKeywords: ['He taketh the wise in their own craftiness'],
    terms: [],
  },
  'job-9-8': {
    title: 'Which Alone Spreadeth Out the Heavens',
    principle:
      'And treadeth upon the waves of the sea. First principle: the Creator alone stretches skies — and the One walking on waves later wears this title in person on Galilee.',
    sourceKeywords: ['Which alone spreadeth out the heavens', 'treadeth upon the waves of the sea'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-9-33': {
    title: 'Neither Is There Any Daysman Betwixt Us',
    principle:
      'Job wishes for an umpire laying a hand on both. First principle: the deepest Old Testament ache — a mediator who can touch God and man; the wish is answered at Calvary.',
    sourceKeywords: ['any daysman betwixt us', 'lay his hand upon us both'],
    fulfillmentKeywords: ['For there is one God, and one mediator between God and men'],
    terms: [],
  },
  'job-14-4': {
    title: 'Who Can Bring a Clean Thing out of an Unclean?',
    principle:
      'Not one — from the man of Uz. First principle: the inherited-uncleanness question is asked so the new birth can answer it: that which is born of flesh is flesh.',
    sourceKeywords: ['Who can bring a clean thing out of an unclean', 'not one'],
    fulfillmentKeywords: ['That which is born of the flesh is flesh'],
    terms: [],
  },
  'job-16-19': {
    title: 'My Witness Is in Heaven, and My Record Is on High',
    principle:
      'Job\'s heaven-side witness while friends accuse. First principle: the earth\'s court is lost; heaven\'s record stands — the scintilla of the Advocate doctrine before the Incarnation.',
    sourceKeywords: ['my witness is in heaven', 'my record is on high'],
    fulfillmentKeywords: ['we have an advocate with the Father'],
    terms: [],
  },
  'job-19-26': {
    title: 'Yet in My Flesh Shall I See God',
    principle:
      'Worms destroy the body; the eyes see God in flesh. First principle: the resurrection hope is declared from suffering\'s floor — in my flesh, not as a ghost; Job foresees the renewed body.',
    sourceKeywords: ['though after my skin worms destroy this body', 'yet in my flesh shall I see God'],
    fulfillmentKeywords: ['this mortal must put on immortality'],
    terms: [],
  },
  'job-33-23': {
    title: 'If There Be a Messenger with Him, an Interpreter, One among a Thousand',
    principle:
      'The interpreter to show man his uprightness. First principle: Elihu names the need — one among a thousand to mediate and interpret; the rarity finds its supply in the one Mediator.',
    sourceKeywords: ['a messenger with him', 'an interpreter, one among a thousand', 'to shew unto man his uprightness'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-38-1': {
    title: 'Then the LORD Answered Job out of the Whirlwind',
    principle:
      'The answer comes from the storm, not the argument. First principle: after thirty-one chapters of human speech, God speaks from whirlwind — creation-questions replace creature-complaints.',
    sourceKeywords: ['the LORD answered Job out of the whirlwind'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-42-5': {
    title: 'I Have Heard of Thee by the Hearing of the Ear',
    principle:
      'But now mine eye seeth Thee — and Job repents in dust. First principle: hearing-of becomes seeing — the encounter with God converts theology into humility; the second-hand God becomes first-hand.',
    sourceKeywords: ['I have heard of thee by the hearing of the ear', 'but now mine eye seeth thee'],
    fulfillmentKeywords: ['we beheld his glory'],
    terms: [],
  },
  // ── Hand-written expansion: Proverbs ────────────────────────────────────
  'pro-3-5': {
    title: 'Trust in the LORD with All Thine Heart',
    principle:
      'Lean not on your own understanding. First principle: the heart-lean is the whole matter — trust is total or it is not trust; self-understanding is the rival crutch.',
    sourceKeywords: ['Trust in the LORD with all thine heart', 'lean not unto thine own understanding'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'pro-3-11': {
    title: 'My Son, Despise Not the Chastening of the LORD',
    principle:
      'Correction is sonship-proof; weariness is forbidden. First principle: Hebrews quotes this twice to reframe suffering — the chastened child is the legitimate child.',
    sourceKeywords: ['despise not the chastening of the LORD', 'neither be weary of his correction'],
    fulfillmentKeywords: ['For whom the Lord loveth he chasteneth'],
    terms: [],
  },
  'pro-3-34': {
    title: 'He Giveth Grace unto the Lowly',
    principle:
      'Scorners scorned; lowly graced. First principle: the grace-gradient proverb — James and Peter both quote it verbatim to install humility as the grace-receiver.',
    sourceKeywords: ['he scorneth the scorners', 'giveth grace unto the lowly'],
    fulfillmentKeywords: ['God resisteth the proud, but giveth grace unto the humble'],
    terms: [],
  },
  'pro-8-22': {
    title: 'The LORD Possessed Me in the Beginning of His Way',
    principle:
      'Wisdom speaks as preexistent to creation. First principle: the personified Wisdom of Proverbs 8 is the background music of John 1 and Colossians 1 — the Son is the wisdom by whom all was made.',
    sourceKeywords: ['possessed me in the beginning', 'before his works of old'],
    fulfillmentKeywords: ['All things were made by him', 'by him all things consist'],
    terms: [],
  },
  'pro-8-23': {
    title: 'I Was Set Up from Everlasting',
    principle:
      'Wisdom antedates the earth. First principle: from everlasting — the attribute of God alone, here the speech of Wisdom; the fathers read it of the Son\'s eternal generation.',
    sourceKeywords: ['set up from everlasting', 'or ever the earth was'],
    fulfillmentKeywords: ['In the beginning was the Word'],
    terms: [],
  },
  'pro-10-12': {
    title: 'Love Covereth All Sins',
    principle:
      'Hatred stirs; love covers. First principle: the covering verb returns in the New Testament — Peter and James both quote it; charity is the sin-hiding blanket, judgment the stirrer.',
    sourceKeywords: ['Hatred stirreth up strifes', 'love covereth all sins'],
    fulfillmentKeywords: ['charity shall cover the multitude of sins'],
    terms: [],
  },
  'pro-11-31': {
    title: 'The Righteous Shall Be Recompensed in the Earth',
    principle:
      'If the righteous are recompensed here, how much more the wicked. First principle: judgment begins with the house — Peter quotes the much-more logic of the sinner\'s fate.',
    sourceKeywords: ['the righteous shall be recompensed in the earth', 'much more the wicked and the sinner'],
    fulfillmentKeywords: ['if the righteous scarcely be saved, where shall the ungodly appear'],
    terms: [],
  },
  'pro-15-3': {
    title: 'The Eyes of the LORD Are in Every Place',
    principle:
      'Beholding evil and good alike. First principle: total surveillance is God\'s attribute — no deed escapes the watching eyes that Hebrews says are open before Him with whom we have to do.',
    sourceKeywords: ['The eyes of the LORD are in every place', 'beholding the evil and the good'],
    fulfillmentKeywords: ['all things are naked and opened unto the eyes of him'],
    terms: [],
  },
  'pro-17-15': {
    title: 'He That Justifieth the Wicked... Is Abomination to the LORD',
    principle:
      'Both verdict-errors are abomination. First principle: the courtroom abomination makes the gospel startling — God justifies the ungodly while remaining just, through the propitiation.',
    sourceKeywords: ['justifieth the wicked', 'condemneth the just', 'abomination to the LORD'],
    fulfillmentKeywords: ['that he might be just, and the justifier of him which believeth'],
    terms: [],
  },
  'pro-17-17': {
    title: 'A Friend Loveth at All Times',
    principle:
      'A brother born for adversity. First principle: friendship\'s test is timing — all times and adversities; the greater-than-Solomon laid down His life for His friends.',
    sourceKeywords: ['A friend loveth at all times', 'a brother is born for adversity'],
    fulfillmentKeywords: ['greater love hath no man than this'],
    terms: [],
  },
  'pro-20-9': {
    title: 'Who Can Say, I Have Made My Heart Clean?',
    principle:
      'The rhetorical impossibility of self-purification. First principle: no one can say it — the heart-cleaning requires a Heart-maker; 1 John names the self-deceiver.',
    sourceKeywords: ['I have made my heart clean', 'I am pure from my sin'],
    fulfillmentKeywords: ['If we say that we have no sin, we deceive ourselves'],
    terms: [],
  },
  'pro-20-20': {
    title: 'Whoso Curseth His Father or His Mother',
    principle:
      'The lamp extinguished in obscure darkness. First principle: parental contempt extinguishes light — Exodus\' death-penalty command becomes the lamp-out image.',
    sourceKeywords: ['Whoso curseth his father or his mother', 'his lamp shall be put out in obscure darkness'],
    fulfillmentKeywords: ['Honour thy father and mother'],
    terms: [],
  },
  'pro-21-1': {
    title: 'The King\'s Heart Is in the Hand of the LORD',
    principle:
      'Turned like rivers of water whithersoever He will. First principle: rulers are reroutable — Ezra, Daniel, and Cyrus all prove the redirecting hand over imperial decisions.',
    sourceKeywords: ['The king\'s heart is in the hand of the LORD', 'as the rivers of water', 'he turneth it whithersoever he will'],
    fulfillmentKeywords: ['the LORD made the heaven and the earth... and hath given me all the kingdoms'],
    terms: [],
  },
  'pro-21-3': {
    title: 'To Do Justice and Judgment Is More Acceptable than Sacrifice',
    principle:
      'Justice outweighs altar-traffic. First principle: the mercy-over-sacrifice proverb — Samuel, Isaiah, Hosea, and Jesus all carry the same scale.',
    sourceKeywords: ['To do justice and judgment', 'more acceptable to the LORD than sacrifice'],
    fulfillmentKeywords: ['I will have mercy, and not sacrifice'],
    terms: [],
  },
  'pro-22-6': {
    title: 'Train Up a Child in the Way He Should Go',
    principle:
      'Old-age constancy promised to early training. First principle: formation is directional — the shaped path shapes the walker; Ephesians charges fathers with the same nurture.',
    sourceKeywords: ['Train up a child in the way he should go', 'when he is old, he will not depart from it'],
    fulfillmentKeywords: ['bring them up in the nurture and admonition of the Lord'],
    terms: [],
  },
  'pro-24-24': {
    title: 'He That Saith unto the Wicked, Thou Art Righteous',
    principle:
      'The people curse the moral flip. First principle: calling wickedness righteous draws national curse — the proverb is the public\'s own verdict on verdict-benders.',
    sourceKeywords: ['He that saith unto the wicked, Thou art righteous', 'him shall the people curse'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'pro-25-21': {
    title: 'If Thine Enemy Be Hungry, Give Him Bread',
    principle:
      'Feed the enemy; give the thirsty water. First principle: the enemy-feeding command is the Old Testament root of love-your-enemies — Paul quotes it to make coals-of-fire kindness.',
    sourceKeywords: ['If thine enemy be hungry, give him bread', 'give him water to drink'],
    fulfillmentKeywords: ['If thine enemy hunger, feed him'],
    terms: [],
  },
  'pro-26-11': {
    title: 'As a Dog Returneth to His Vomit',
    principle:
      'The fool\'s folly-repeat. First principle: relapse without re-creation is the warning — Peter quotes the dog and adds the washed sow; nature, not habit, is the problem.',
    sourceKeywords: ['a dog returneth to his vomit', 'a fool returneth to his folly'],
    fulfillmentKeywords: ['The dog is turned to his own vomit again'],
    terms: [],
  },
  'pro-27-19': {
    title: 'As in Water Face Answereth to Face',
    principle:
      'The heart reflects the heart. First principle: self-knowledge is mirror-knowledge — what you see in others is your own heart\'s reflection; the proverb is a standing audit.',
    sourceKeywords: ['as in water face answereth to face', 'so the heart of man to man'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'pro-29-18': {
    title: 'Where There Is No Vision, the People Perish',
    principle:
      'Law-keeping is the happy alternative to unrestraint. First principle: without revealed vision, self-rule kills — Judges\' refrain and Isaiah\'s sheep-stray are the same diagnosis.',
    sourceKeywords: ['Where there is no vision, the people perish', 'he that keepeth the law, happy is he'],
    fulfillmentKeywords: ['All we like sheep have gone astray'],
    terms: [],
  },
  'pro-30-5': {
    title: 'Every Word of God Is Pure',
    principle:
      'A shield to all who trust; add not to His words. First principle: purity of the Word and prohibition of addition bracket the verse — Revelation\'s ending and Deuteronomy\'s warning agree.',
    sourceKeywords: ['Every word of God is pure', 'a shield unto them that put their trust in him'],
    fulfillmentKeywords: ['If any man shall add unto these things'],
    terms: [],
  },
  'pro-30-8': {
    title: 'Give Me Neither Poverty nor Riches',
    principle:
      'Agur\'s proportioned bread prayer. First principle: the middle-way petition — full self-sufficiency denies God, destitution denies His name; convenient food is the requested mean.',
    sourceKeywords: ['Remove far from me vanity and lies', 'neither poverty nor riches', 'food convenient for me'],
    fulfillmentKeywords: ['Give us this day our daily bread'],
    terms: [],
  },
  'pro-31-6': {
    title: 'Give Strong Drink unto Him That Is Ready to Perish',
    principle:
      'Wine for the heavy-hearted dying — a mercy-analgesic, not a lifestyle. First principle: the proverb prescribes numbness only for the perishing, implicitly forbidding it for judges and kings.',
    sourceKeywords: ['Give strong drink unto him that is ready to perish', 'wine unto those that be of heavy hearts'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'pro-31-28': {
    title: 'Her Children Arise Up, and Call Her Blessed',
    principle:
      'The virtuous woman praised by children and husband. First principle: the crowning praise is spoken by family — the fear-of-the-LORD woman outlasts charm and beauty in her children\'s mouths.',
    sourceKeywords: ['Her children arise up, and call her blessed', 'her husband also, and he praiseth her'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Ecclesiastes ────────────────────────────────
  'ecc-3-17': {
    title: 'God Shall Judge the Righteous and the Wicked',
    principle:
      'A time for every purpose — including judgment. First principle: the Preacher\'s consolation under injustice: the schedule includes a courtroom; every work has its time there.',
    sourceKeywords: ['God shall judge the righteous and the wicked', 'a time there for every purpose'],
    fulfillmentKeywords: ['he hath appointed a day, in the which he will judge the world'],
    terms: [],
  },
  'ecc-7-20': {
    title: 'There Is Not a Just Man upon Earth',
    principle:
      'Who doeth good and sinneth not. First principle: the universal-sin text of the wisdom canon — Romans 3 builds its none-righteous catena partly on this line.',
    sourceKeywords: ['not a just man upon earth', 'that doeth good, and sinneth not'],
    fulfillmentKeywords: ['There is none righteous, no, not one'],
    terms: [],
  },
  'ecc-9-10': {
    title: 'Whatsoever Thy Hand Findeth to Do, Do It with Thy Might',
    principle:
      'No work or knowledge in the grave whither thou goest. First principle: the grave\'s silence is the urgency of diligence — work is for the living day, not the dark hereafter.',
    sourceKeywords: ['Whatsoever thy hand findeth to do', 'do it with thy might', 'in the grave, whither thou goest'],
    fulfillmentKeywords: ['I must work the works of him that sent me, while it is day'],
    terms: [],
  },
  'ecc-12-7': {
    title: 'Then Shall the Dust Return to the Earth',
    principle:
      'Dust to dust; the spirit to God who gave it. First principle: the twofold destiny of man at death — body to soil, spirit to the Giver; Genesis 2:7 in reverse.',
    sourceKeywords: ['the dust return to the earth', 'the spirit shall return unto God who gave it'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ecc-12-13': {
    title: 'Fear God, and Keep His Commandments',
    principle:
      'The whole duty of man — the conclusion of the whole matter. First principle: after all is vanity, two things remain standing: reverent fear and obedient keeping.',
    sourceKeywords: ['the conclusion of the whole matter', 'Fear God, and keep his commandments', 'the whole duty of man'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ecc-12-14': {
    title: 'God Shall Bring Every Work into Judgment',
    principle:
      'Every secret thing, good or evil. First principle: the judgment includes the secret — no classified compartment escapes; Paul and John quote the same audit.',
    sourceKeywords: ['every work into judgment', 'with every secret thing', 'whether it be good, or whether it be evil'],
    fulfillmentKeywords: ['God shall bring every work into judgment'],
    terms: [],
  },

  // ── Hand-written expansion: Song of Solomon ─────────────────────────────
  'sng-1-3': {
    title: 'Thy Name Is as Ointment Poured Forth',
    principle:
      'The virgins love the beloved for his name\'s fragrance. First principle: the love-song\'s ointment-name anticipates the anointed One — the costly nard poured at Bethany agrees.',
    sourceKeywords: ['the savour of thy good ointments', 'thy name is as ointment poured forth'],
    fulfillmentKeywords: ['the house was filled with the odour of the ointment'],
    terms: [],
  },
  'sng-2-16': {
    title: 'My Beloved Is Mine, and I Am His',
    principle:
      'Mutual possession among the lilies. First principle: the covenant formula in love-song grammar — He feedeth His flock, and the mutual belonging is the song\'s center.',
    sourceKeywords: ['My beloved is mine, and I am his', 'he feedeth among the lilies'],
    fulfillmentKeywords: ['I am the good shepherd, and know my sheep'],
    terms: [],
  },
  'sng-4-10': {
    title: 'How Much Better Is Thy Love than Wine',
    principle:
      'The spouse\'s love outsmells all spices. First principle: love over wine — the measure of the marriage-song and of the Messiah\'s own better-wine joy.',
    sourceKeywords: ['How fair is thy love, my sister, my spouse', 'better is thy love than wine', 'the smell of thine ointments'],
    fulfillmentKeywords: ['and the smell of thine ointments than all spices'],
    terms: [],
  },
  'sng-5-1': {
    title: 'I Am Come into My Garden, My Sister, My Spouse',
    principle:
      'The gathered myrrh and spice; friends invited to drink abundantly. First principle: the garden entered, the feast opened to friends — the supper language of the covenant meal.',
    sourceKeywords: ['I am come into my garden', 'my sister, my spouse', 'eat, O friends; drink abundantly'],
    fulfillmentKeywords: ['this is my body... this cup is the new testament'],
    terms: [],
  },
  'sng-5-16': {
    title: 'His Mouth Is Most Sweet: Yea, He Is Altogether Lovely',
    principle:
      'Beloved and friend, altogether lovely. First principle: the superlative without comparison — altogether lovely is the whole description; the Friend of sinners is the Friend here sung.',
    sourceKeywords: ['His mouth is most sweet', 'he is altogether lovely', 'this is my beloved, and this is my friend'],
    fulfillmentKeywords: ['Ye are my friends, if ye do whatsoever I command you'],
    terms: [],
  },
  'sng-8-6': {
    title: 'Set Me as a Seal upon Thine Heart',
    principle:
      'Love strong as death, jealousy cruel as the grave, coals of vehement flame. First principle: love\'s intensity is death-and-grave scaled — the seal on heart and arm is exclusive covenant possession.',
    sourceKeywords: ['a seal upon thine heart', 'love is strong as death', 'the coals thereof are coals of fire'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'sng-8-7': {
    title: 'Many Waters Cannot Quench Love',
    principle:
      'All substance cannot buy it. First principle: love is unquenchable and unpurchasable — the flood fails, the fortune fails; Revelation\'s marriage follows the unquenched.',
    sourceKeywords: ['Many waters cannot quench love', 'neither can the floods drown it', 'it would utterly be contemned'],
    fulfillmentKeywords: ['the marriage of the Lamb is come'],
    terms: [],
  },

  // ── Hand-written expansion: Jeremiah ────────────────────────────────────
  'jer-1-5': {
    title: 'Before I Formed Thee in the Belly I Knew Thee',
    principle:
      'Sanctified and ordained a prophet before birth. First principle: the prenatal call — Jeremiah, John the Baptist, and the Servant all carry womb-appointed commissions.',
    sourceKeywords: ['Before I formed thee in the belly I knew thee', 'I sanctified thee', 'ordained thee a prophet unto the nations'],
    fulfillmentKeywords: ['he shall be filled with the Holy Ghost, even from his mother\'s womb'],
    terms: [],
  },
  'jer-7-11': {
    title: 'Is This House... Become a Den of Robbers?',
    principle:
      'The named-house turned robbers\' cave, seen by the LORD. First principle: Jeremiah\'s temple sermon is Jesus\' cleansing text — trust in the building while practicing robbery.',
    sourceKeywords: ['Is this house, which is called by my name', 'a den of robbers in your eyes', 'even I have seen it'],
    fulfillmentKeywords: ['Ye have made it a den of thieves'],
    terms: [],
  },
  'jer-9-24': {
    title: 'Let Him That Glorieth Glory in This',
    principle:
      'Understanding and knowing the LORD who exercises lovingkindness, judgment, righteousness. First principle: the only permitted boast is knowing God\'s exercised character — Paul quotes it twice and grounds it in Christ.',
    sourceKeywords: ['let him that glorieth glory in this', 'that he understandeth and knoweth me', 'lovingkindness, judgment, and righteousness'],
    fulfillmentKeywords: ['he that glorieth, let him glory in the Lord'],
    terms: [],
  },
  'jer-17-9': {
    title: 'The Heart Is Deceitful Above All Things',
    principle:
      'Desperately wicked; who can know it? First principle: the heart deceives its own owner — only the searching LORD can know it; Jesus traces defilement from the same source.',
    sourceKeywords: ['deceitful above all things', 'desperately wicked', 'who can know it'],
    fulfillmentKeywords: ['from within, out of the heart of men, proceed evil thoughts'],
    terms: [],
  },
  'jer-23-6': {
    title: 'THE LORD OUR RIGHTEOUSNESS',
    principle:
      'In His days Judah is saved and Israel dwells safely under the Branch\'s new name. First principle: the name is the gospel — the King Himself is the righteousness His people lack.',
    sourceKeywords: ['Judah shall be saved', 'Israel shall dwell safely', 'THE LORD OUR RIGHTEOUSNESS'],
    fulfillmentKeywords: ['who of God is made unto us... righteousness'],
    terms: [],
  },
  'jer-25-12': {
    title: 'When Seventy Years Are Accomplished',
    principle:
      'Babylon punished after the numbered years. First principle: exile has an expiration date written before it begins — Daniel reads this very letter and prays.',
    sourceKeywords: ['when seventy years are accomplished', 'I will punish the king of Babylon', 'perpetual desolations'],
    fulfillmentKeywords: ['I Daniel understood by books the number of the years'],
    terms: [],
  },
  'jer-29-10': {
    title: 'After Seventy Years Be Accomplished at Babylon',
    principle:
      'I will visit you and perform my good word, causing your return. First principle: the good word performs itself — the visitation promise is dated, and the return is its performance.',
    sourceKeywords: ['after seventy years be accomplished at Babylon', 'I will visit you', 'perform my good word toward you'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jer-31-9': {
    title: 'I Am a Father to Israel, and Ephraim Is My Firstborn',
    principle:
      'Weeping led home by straight ways and rivers. First principle: the father-heart leads weepers; the firstborn title over Ephraim reverses the lost son\'s status.',
    sourceKeywords: ['with weeping, and with supplications', 'walk by the rivers of waters', 'Ephraim is my firstborn'],
    fulfillmentKeywords: ['Out of Egypt have I called my son'],
    terms: [],
  },
  'jer-31-33': {
    title: 'I Will Put My Law in Their Inward Parts',
    principle:
      'The new covenant written in hearts; God theirs, they His. First principle: the covenant moves inside — Hebrews quotes this as the better covenant\'s very charter.',
    sourceKeywords: ['the covenant that I will make', 'I will put my law in their inward parts', 'write it in their hearts'],
    fulfillmentKeywords: ['I will put my laws into their hearts'],
    terms: [],
  },
  'jer-31-34': {
    title: 'They Shall All Know Me... I Will Remember Their Sin No More',
    principle:
      'No more neighbor-teaching; universal knowledge, forgiven sin. First principle: the covenant\'s knowledge is direct and its forgiveness total — the least to the greatest, remembered never.',
    sourceKeywords: ['they shall all know me', 'from the least of them unto the greatest', 'I will remember their sin no more'],
    fulfillmentKeywords: ['All shall know me', 'their sins and their iniquities will I remember no more'],
    terms: [],
  },
  'jer-32-38': {
    title: 'They Shall Be My People, and I Will Be Their God',
    principle:
      'The covenant formula for the reunited land. First principle: the promise formula stands at the heart of the redemption chapters — quoted by Paul of the temple-church and by John of the new earth.',
    sourceKeywords: ['they shall be my people', 'I will be their God'],
    fulfillmentKeywords: ['and they shall be my people'],
    terms: [],
  },
  'jer-32-40': {
    title: 'I Will Make an Everlasting Covenant with Them',
    principle:
      'Never turned away to do them good; fear placed in hearts so they never depart. First principle: the everlasting covenant is God-sided perseverance — the fear He puts keeps the people He keeps.',
    sourceKeywords: ['an everlasting covenant', 'that I will not turn away from them, to do them good', 'they shall not depart from me'],
    fulfillmentKeywords: ['he shall... have made with them an everlasting covenant'],
    terms: [],
  },
  'jer-33-14': {
    title: 'I Will Perform That Good Thing Which I Have Promised',
    principle:
      'The days come for the promised performance to Israel and Judah. First principle: the good thing is dated — the Branch-ruler of the preceding verses is the performance.',
    sourceKeywords: ['the days come', 'I will perform that good thing', 'promised unto the house of Israel and to the house of Judah'],
    fulfillmentKeywords: ['Behold, the days come, saith the LORD, that I will raise unto David a righteous Branch'],
    terms: [],
  },
  'jer-44-4': {
    title: 'Oh, Do Not This Abominable Thing That I Hate',
    principle:
      'The prophets sent rising early, pleading against the abomination. First principle: idolatry is the hated abomination, pleaded against persistently — and the pleaders were ignored to exile.',
    sourceKeywords: ['I sent unto you all my servants the prophets', 'rising early and sending them', 'do not this abominable thing that I hate'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jer-50-20': {
    title: 'The Iniquity of Israel Shall Be Sought for, and There Shall Be None',
    principle:
      'Sins unfound; the reserved pardoned. First principle: the search that finds nothing — pardon so total the investigation comes up empty for the preserved remnant.',
    sourceKeywords: ['the iniquity of Israel shall be sought for, and there shall be none', 'they shall not be found', 'I will pardon them whom I reserve'],
    fulfillmentKeywords: ['their sins and their iniquities will I remember no more'],
    terms: [],
  },
  'jer-51-7': {
    title: 'Babylon Hath Been a Golden Cup in the LORD\'S Hand',
    principle:
      'The nations drunk mad on her wine. First principle: Babylon is both God\'s instrument and the world\'s intoxication — Revelation 14 and 18 pick up the cup for the final fall.',
    sourceKeywords: ['a golden cup in the LORD\'S hand', 'made all the earth drunken', 'the nations are mad'],
    fulfillmentKeywords: ['Babylon the great is fallen... the wine of the wrath of her fornication'],
    terms: [],
  },

  // ── Hand-written expansion: Lamentations ────────────────────────────────
  'lam-1-12': {
    title: 'Behold, and See If There Be Any Sorrow Like unto My Sorrow',
    principle:
      'The passing crowd summoned to behold. First principle: the daughter of Zion\'s day-of-anger sorrow is the portrait Jerusalem\'s greater Son reenacted — a sorrow without equal.',
    sourceKeywords: ['any sorrow like unto my sorrow'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-2-11': {
    title: 'Mine Eyes Do Fail with Tears',
    principle:
      'The weeping prophet\'s insides poured out for destroyed children. First principle: prophetic grief bodily — Jeremiah\'s tears over the city prefigure the Man of sorrows weeping over Jerusalem.',
    sourceKeywords: ['Mine eyes do fail with tears', 'my liver is poured upon the earth', 'the sucklings swoon in the streets'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-3-22': {
    title: 'It Is of the LORD\'S Mercies That We Are Not Consumed',
    principle:
      'Compassions that fail not; new every morning. First principle: the survival-theology verse — non-consumption is mercy\'s daily freshness, not Israel\'s merit.',
    sourceKeywords: ['It is of the LORD\'S mercies that we are not consumed', 'his compassions fail not'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-3-31': {
    title: 'For the Lord Will Not Cast Off for Ever',
    principle:
      'Though He cause grief, He will have compassion. First principle: grief has a boundary in His character — the cast-off is temporary by His own nature.',
    sourceKeywords: ['the Lord will not cast off for ever'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-3-40': {
    title: 'Let Us Search and Try Our Ways',
    principle:
      'Turning again to the LORD. First principle: the examined life is the returned life — searching ways precedes the turn; hearts lifted with hands.',
    sourceKeywords: ['Let us search and try our ways', 'turn again to the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-5-19': {
    title: 'Thou, O LORD, Remainest for Ever',
    principle:
      'The throne from generation to generation. First principle: the unchanging throne amid the changing ruins — the lament ends on permanence, not loss.',
    sourceKeywords: ['Thou, O LORD, remainest for ever', 'thy throne from generation to generation'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Ezekiel ─────────────────────────────────────
  'ezk-1-1': {
    title: 'The Heavens Were Opened, and I Saw Visions of God',
    principle:
      'A captive by Chebar sees open heavens. First principle: revelation to the exiled — the visions come to a prisoner by a river, not to a priest in a temple.',
    sourceKeywords: ['among the captives by the river of Chebar', 'the heavens were opened', 'I saw visions of God'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-1-26': {
    title: 'The Likeness of a Throne... the Appearance of a Man above upon It',
    principle:
      'Sapphire throne, man-like figure above it. First principle: the glory has a human appearance — Ezekiel\'s throne-man is Daniel\'s Son of man and Revelation\'s glorified Jesus.',
    sourceKeywords: ['the likeness of a throne', 'as the appearance of a sapphire stone', 'the appearance of a man above upon it'],
    fulfillmentKeywords: ['one like unto the Son of man'],
    terms: [],
  },
  'ezk-3-17': {
    title: 'Son of Man, I Have Made Thee a Watchman',
    principle:
      'Hear the word at my mouth; warn them from me. First principle: the watchman office — hearing first, warning second; blood-responsibility attached to silence.',
    sourceKeywords: ['I have made thee a watchman', 'hear the word at my mouth', 'give them warning from me'],
    fulfillmentKeywords: ['I have not shunned to declare unto you all the counsel of God'],
    terms: [],
  },
  'ezk-11-19': {
    title: 'I Will Give Them One Heart, and a New Spirit',
    principle:
      'Stony heart removed, heart of flesh given. First principle: the transplant surgery of the new covenant — one heart, new spirit, flesh for stone.',
    sourceKeywords: ['I will give them one heart', 'a new spirit within you', 'give them an heart of flesh'],
    fulfillmentKeywords: ['I will put my laws into their hearts'],
    terms: [],
  },
  'ezk-12-22': {
    title: 'The Days Are Prolonged, and Every Vision Faileth',
    principle:
      'The scoffing proverb quoted for demolition. First principle: delayed vision tempts scoffers — Peter\'s latter-day mockers quote the same proverb until the flood-logic answers.',
    sourceKeywords: ['what is that proverb', 'The days are prolonged', 'every vision faileth'],
    fulfillmentKeywords: ['Where is the promise of his coming?'],
    terms: [],
  },
  'ezk-18-4': {
    title: 'The Soul That Sinneth, It Shall Die',
    principle:
      'All souls are mine — father and son each their own. First principle: individual accountability under universal ownership — the soul\'s death is the soul\'s own sin.',
    sourceKeywords: ['all souls are mine', 'the soul that sinneth, it shall die'],
    fulfillmentKeywords: ['the wages of sin is death'],
    terms: [],
  },
  'ezk-18-20': {
    title: 'The Son Shall Not Bear the Iniquity of the Father',
    principle:
      'Righteousness on the righteous, wickedness on the wicked. First principle: the fairness charter — no transferred guilt, no inherited innocence; each soul answers for itself.',
    sourceKeywords: ['The son shall not bear the iniquity of the father', 'the righteousness of the righteous shall be upon him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-18-32': {
    title: 'I Have No Pleasure in the Death of Him That Dieth',
    principle:
      'Turn yourselves, and live ye. First principle: God\'s pleasure is repentance-lived, not death-executed — the divine reluctance is the invitation\'s ground.',
    sourceKeywords: ['I have no pleasure in the death of him that dieth', 'wherefore turn yourselves, and live ye'],
    fulfillmentKeywords: ['who will have all men to be saved'],
    terms: [],
  },
  'ezk-20-20': {
    title: 'Hallow My Sabbaths; They Shall Be a Sign',
    principle:
      'The sign that answers I am the LORD your God. First principle: the Sabbath is a covenant-sign — sanctified time as the knowing-marker between God and people.',
    sourceKeywords: ['hallow my sabbaths'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-21-27': {
    title: 'I Will Overturn, Overturn, Overturn, Until He Come',
    principle:
      'The throne overturned until the Rightful One arrives, and it is given Him. First principle: triple overturning is the interim government of Judah — the crown lies in wait for Shiloh.',
    sourceKeywords: ['until he come whose right it is'],
    fulfillmentKeywords: ['The sceptre shall not depart from Judah... until Shiloh come'],
    terms: [],
  },
  'ezk-22-26': {
    title: 'Her Priests Have Put No Difference between the Holy and Profane',
    principle:
      'Law violated, sabbaths hidden from eyes, God profaned. First principle: the priest\'s first duty is distinction — holy/profane, clean/unclean; erased distinctions profane the Name.',
    sourceKeywords: ['violated my law', 'no difference between the holy and profane', 'hid their eyes from my sabbaths'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-28-2': {
    title: 'Thou Hast Said, I Am a God, I Sit in the Seat of God',
    principle:
      'The prince of Tyrus self-deifies; yet thou art a man. First principle: the man-god delusion is the oldest boast — Paul\'s man of sin seats himself the same way.',
    sourceKeywords: ['thine heart is lifted up', 'I am a God, I sit in the seat of God', 'yet thou art a man, and not God'],
    fulfillmentKeywords: ['so that he as God sitteth in the temple of God'],
    terms: [],
  },
  'ezk-33-11': {
    title: 'I Have No Pleasure in the Death of the Wicked',
    principle:
      'As I live — turn ye, turn ye; why will ye die? First principle: the oath-backed reluctance — God swears His non-pleasure in death and pleads the turn; the why is the invitation.',
    sourceKeywords: ['I have no pleasure in the death of the wicked'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-34-11': {
    title: 'Behold, I, Even I, Will Both Search My Sheep',
    principle:
      'The doubled I — God Himself does the seeking the shepherds failed at. First principle: divine intervention replaces negligent leadership — the search is personal, pronoun-emphatic.',
    sourceKeywords: ['I, even I, will both search my sheep'],
    fulfillmentKeywords: ['the Son of man is come to save that which was lost'],
    terms: [],
  },
  'ezk-34-24': {
    title: 'I the LORD Will Be Their God, and My Servant David a Prince',
    principle:
      'God with them, David-prince among them — I the LORD have spoken it. First principle: the divine-shepherd and the David-prince co-reign without contradiction — one flock, both Sheep and Shepherd.',
    sourceKeywords: ['I the LORD will be their God', 'my servant David a prince among them', 'I the LORD have spoken it'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-36-25': {
    title: 'Then Will I Sprinkle Clean Water upon You',
    principle:
      'Cleansed from filthiness and idols. First principle: the sprinkling is cleansing, not ceremony — idols and filthiness named as what the water washes.',
    sourceKeywords: ['sprinkle clean water upon you, and ye shall be clean', 'from all your filthiness, and from all your idols'],
    fulfillmentKeywords: ['let us draw near... our bodies washed with pure water'],
    terms: [],
  },
  'ezk-36-27': {
    title: 'I Will Put My Spirit Within You, and Cause You to Walk',
    principle:
      'Statutes kept because the Spirit indwells. First principle: obedience has an internal engine — the cause-you-to-walk is the Spirit\'s causal presence in the new covenant.',
    sourceKeywords: ['I will put my spirit within you', 'cause you to walk in my statutes', 'ye shall keep my judgments, and do them'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-37-5': {
    title: 'Behold, I Will Cause Breath to Enter into You',
    principle:
      'Dry bones hear the word and live. First principle: the valley-question answered — breath by word of command; the resurrection preached to an army of bones.',
    sourceKeywords: ['I will cause breath to enter into you'],
    fulfillmentKeywords: ['all that are in the graves shall hear his voice, and shall come forth'],
    terms: [],
  },
  'ezk-37-24': {
    title: 'David My Servant Shall Be King over Them',
    principle:
      'One shepherd, judgments walked, statutes done. First principle: the reunited kingdom under the one Shepherd-King — the David-title is the walking-statutes cause.',
    sourceKeywords: ['David my servant shall be king over them', 'they all shall have one shepherd', 'walk in my judgments'],
    fulfillmentKeywords: ['other sheep I have... there shall be one fold, and one shepherd'],
    terms: [],
  },
  'ezk-37-27': {
    title: 'My Tabernacle Also Shall Be with Them',
    principle:
      'The dwelling-promise renewed to resurrected Israel. First principle: tabernacle with them — the covenant formula carried into the valley\'s aftermath; Revelation quotes it for the redeemed.',
    sourceKeywords: ['My tabernacle also shall be with them', 'I will be their God, and they shall be my people'],
    fulfillmentKeywords: ['Behold, the tabernacle of God is with men'],
    terms: [],
  },
  'ezk-40-1': {
    title: 'In the Visions of God Brought He Me into the Land of Israel',
    principle:
      'Twenty-five years after captivity, the hand brings him to the city-smitten land. First principle: the vision-dated tour — the temple-measuring vision answers the glory-departing vision of chapters 10-11.',
    sourceKeywords: ['the visions of God'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-43-2': {
    title: 'The Glory of the God of Israel Came from the Way of the East',
    principle:
      'Many-waters voice; the earth shined with His glory. First principle: the glory returns by the east gate it left — the same way of departure is the way of return.',
    sourceKeywords: ['the glory of the God of Israel came from the way of the east', 'his voice was like a noise of many waters', 'the earth shined with his glory'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-43-7': {
    title: 'The Place of My Throne, and the Place of the Soles of My Feet',
    principle:
      'Dwelling in the midst forever; the house no more defiled. First principle: throne and soles — sovereignty and nearness in one sentence; the defilement era ends by divine residence.',
    sourceKeywords: ['the place of my throne', 'the place of the soles of my feet', 'I will dwell in the midst'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-47-1': {
    title: 'Waters Issued Out from under the Threshold of the House',
    principle:
      'East-flowing water from the altar side. First principle: the temple leaks life — the trickle at the threshold becomes the knee-deep, hip-deep river of the vision.',
    sourceKeywords: ['waters issued out from under the threshold of the house'],
    fulfillmentKeywords: ['a pure river of water of life... proceeding out of the throne'],
    terms: [],
  },
  'ezk-47-12': {
    title: 'All Trees for Meat, Whose Leaf Shall Not Fade',
    principle:
      'New fruit by his months; leaf for medicine. First principle: the sanctuary-fed trees never fade — Revelation\'s tree of life borrows the months and the medicinal leaves.',
    sourceKeywords: ['whose leaf shall not fade'],
    fulfillmentKeywords: ['the leaves of the tree were for the healing of the nations'],
    terms: [],
  },
  // ── Hand-written expansion: Hosea / Joel / Amos / Obadiah / Jonah / Micah ─
  'hos-1-10': {
    title: 'Ye Are the Sons of the Living God',
    principle:
      'Sand-numbered Israel, and in the place of not-my-people, sons of the living God. First principle: the reversal is place-exact — rejection\'s ground becomes adoption\'s ground, quoted by Paul for Jew and Gentile.',
    sourceKeywords: ['as the sand of the sea', 'Ye are not my people', 'the sons of the living God'],
    fulfillmentKeywords: ['there shall they be called the children of the living God'],
    terms: [],
  },
  'hos-2-1': {
    title: 'Say Ye unto Your Brethren, Ammi; and to Your Sisters, Ruhamah',
    principle:
      'The renamed children: My-people and Having-obtained-mercy. First principle: Hosea\'s children are walking prophecies — Lo-ammi becomes Ammi on God\'s say-so, the sermon preached by name.',
    sourceKeywords: ['Ammi', 'Ruhamah'],
    fulfillmentKeywords: ['which were not my people'],
    terms: [],
  },
  'hos-2-23': {
    title: 'I Will Sow Her unto Me in the Earth',
    principle:
      'Mercy on the unmercied; not-my-people renamed My-people. First principle: the sowing verb is the covenant\'s agriculture — Jezreel\'s judgment-name becomes planted-inheritance.',
    sourceKeywords: ['I will sow her unto me in the earth', 'mercy upon her that had not obtained mercy', 'Thou art my people'],
    fulfillmentKeywords: ['I will call them my people, which were not my people'],
    terms: [],
  },
  'hos-6-6': {
    title: 'I Desired Mercy, and Not Sacrifice',
    principle:
      'Knowledge of God over burnt offerings. First principle: the scale-verse of prophetic religion — quoted twice by Jesus against ritual without covenant love.',
    sourceKeywords: ['I desired mercy, and not sacrifice', 'the knowledge of God more than burnt offerings'],
    fulfillmentKeywords: ['I will have mercy, and not sacrifice'],
    terms: [],
  },
  'hos-13-14': {
    title: 'O Death, I Will Be Thy Plagues',
    principle:
      'Ransom from the grave\'s power; death becomes plague, grave becomes destruction. First principle: the redemption-from-death taunt is Paul\'s victory cry source — the plagues turn on death itself.',
    sourceKeywords: ['ransom them from the power of the grave', 'O death, I will be thy plagues', 'O grave, I will be thy destruction'],
    fulfillmentKeywords: ['O death, where is thy sting? O grave, where is thy victory?'],
    terms: [],
  },

  // ── Hand-written expansion: Joel ────────────────────────────────────────
  'jol-2-2': {
    title: 'A Day of Darkness and of Gloominess',
    principle:
      'The unprecedented army-day, morning spread on mountains. First principle: Joel\'s locust-day is template for the great and terrible day — Matthew 24\'s tribulation echoes the like-never-never language.',
    sourceKeywords: ['a day of darkness and of gloominess', 'a great people and a strong', 'there hath not been ever the like'],
    fulfillmentKeywords: ['then shall be great tribulation, such as was not'],
    terms: [],
  },
  'jol-3-10': {
    title: 'Beat Your Plowshares into Swords',
    principle:
      'The reverse-industry of holy war: the weak commanded to say, I am strong. First principle: Isaiah\'s peace-visions run one way, Joel\'s war-call the other — the same prophet-era holds both harvest and battle endings.',
    sourceKeywords: ['Beat your plowshares into swords', 'your pruninghooks into spears', 'let the weak say, I am strong'],
    fulfillmentKeywords: ['they shall beat their swords into plowshares'],
    terms: [],
  },

  // ── Hand-written expansion: Amos ────────────────────────────────────────
  'amo-4-13': {
    title: 'He That Formeth the Mountains, and Createth the Wind',
    principle:
      'The Creator declares man\'s thought, treads earth\'s high places. First principle: the doxological refrains of Amos arm the judgment — the God who forms and reveals is the God who punishing comes.',
    sourceKeywords: ['he that formeth the mountains', 'createth the wind', 'declareth unto man what is his thought'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'amo-5-8': {
    title: 'Seek Him That Maketh the Seven Stars and Orion',
    principle:
      'The Pleiades-and-Orion Maker turns death-shadow to morning. First principle: the constellation-namer is the seekable God — cosmic power offered for turning darkness into morning.',
    sourceKeywords: ['maketh the seven stars and Orion', 'turneth the shadow of death into the morning', 'The LORD is his name'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'amo-8-9': {
    title: 'I Will Cause the Sun to Go Down at Noon',
    principle:
      'Noon-darkness on a clear day, in that day. First principle: the judgment-sign of a darkened noon was fulfilled at the sixth-to-ninth hour of the cross.',
    sourceKeywords: ['the sun to go down at noon'],
    fulfillmentKeywords: ['there was darkness over all the land unto the ninth hour'],
    terms: [],
  },

  // ── Hand-written expansion: Obadiah ─────────────────────────────────────
  'oba-1-15': {
    title: 'The Day of the LORD Is near upon All the Heathen',
    principle:
      'As thou hast done, it shall be done unto thee. First principle: the retribution measure — Edom\'s betrayal is the case study; the day is near upon all the heathen, reward on their own head.',
    sourceKeywords: ['the day of the LORD is near upon all the heathen', 'as thou hast done, it shall be done unto thee', 'upon thine own head'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Jonah ───────────────────────────────────────
  'jon-2-1': {
    title: 'Then Jonah Prayed unto the LORD His God out of the Fish\'s Belly',
    principle:
      'Prayer from the impossible address. First principle: the belly of the fish is a temple — the prophet prays toward the holy place from the deep, and is heard.',
    sourceKeywords: ['out of the fish\'s belly'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jon-3-4': {
    title: 'Yet Forty Days, and Nineveh Shall Be Overthrown',
    principle:
      'The one-day walk, the five-word sermon. First principle: the shortest sermon with the longest reach — a Gentile capital repents at forty-days\' notice.',
    sourceKeywords: ['Yet forty days, and Nineveh shall be overthrown'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jon-4-2': {
    title: 'I Knew That Thou Art a Gracious God',
    principle:
      'Jonah\'s complaint is God\'s character-statement: gracious, merciful, slow to anger, repenting of evil. First principle: the runaway ran because he believed the mercy — Exodus 34\'s portrait is the missionary\'s problem.',
    sourceKeywords: ['thou art a gracious God', 'merciful, slow to anger', 'repentest thee of the evil'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jon-4-11': {
    title: 'Should Not I Spare Nineveh... and Also Much Cattle?',
    principle:
      'Sixscore thousand who cannot discern their right hand — plus cattle. First principle: the book ends on God\'s pity-question; compassion scales to the ignorant and even to the animals.',
    sourceKeywords: ['Should not I spare Nineveh', 'sixscore thousand persons', 'cannot discern between their right hand and their left hand'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Micah ───────────────────────────────────────
  'mic-4-1': {
    title: 'The Mountain of the House of the LORD Established',
    principle:
      'People flow to the exalted mountain in the last days. First principle: the twin-verse of Isaiah 2 — the pilgrimage mountain is the shared vision of two prophets of one Spirit.',
    sourceKeywords: ['in the last days', 'the mountain of the house of the LORD', 'people shall flow unto it'],
    fulfillmentKeywords: ['it shall come to pass in the last days'],
    terms: [],
  },
  'mic-4-3': {
    title: 'Nation Shall Not Lift Up a Sword against Nation',
    principle:
      'Strong nations rebuked afar off; swords to plowshares. First principle: judgment is the peace-industry\'s founder — war unlearned under the word from Jerusalem.',
    sourceKeywords: ['he shall judge among many people', 'beat their swords into plowshares', 'neither shall they learn war any more'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mic-5-1': {
    title: 'They Shall Smite the Judge of Israel with a Rod upon the Cheek',
    principle:
      'Besieged, the Judge of Israel struck on the cheek. First principle: the smitten Judge is the siege\'s center — the ruler whose origin is everlasting is first struck in humiliation.',
    sourceKeywords: ['he hath laid siege against us', 'smite the judge of Israel', 'with a rod upon the cheek'],
    fulfillmentKeywords: ['and when they had platted a crown of thorns... smote him on the head'],
    terms: [],
  },
  'mic-6-6': {
    title: 'Wherewith Shall I Come before the LORD?',
    principle:
      'The approach-question asks for offerings. First principle: the question is right, the suggested currency wrong — calves and rivers of oil cannot pay; the answer follows in verse 8.',
    sourceKeywords: ['Wherewith shall I come before the LORD', 'burnt offerings, with calves of a year old'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mic-6-8': {
    title: 'What Doth the LORD Require of Thee?',
    principle:
      'Do justly, love mercy, walk humbly with thy God. First principle: the three-verb religion — justice done, mercy loved, humility walked; the answer to every ritual economy.',
    sourceKeywords: ['what doth the LORD require of thee', 'to do justly, and to love mercy', 'walk humbly with thy God'],
    fulfillmentKeywords: ['I will have mercy, and not sacrifice'],
    terms: [],
  },
  'mic-7-6': {
    title: 'A Man\'s Enemies Are the Men of His Own House',
    principle:
      'Family dissolved against family in God\'sjudgment-era. First principle: the household-enmity saying is quoted by Jesus for the sword He brings — division inside the closest circles.',
    sourceKeywords: ['the son dishonoureth the father', 'a man\'s enemies are the men of his own house'],
    fulfillmentKeywords: ['the father shall be divided against the son'],
    terms: [],
  },
  'mic-7-7': {
    title: 'Therefore I Will Look unto the LORD',
    principle:
      'Watch and wait for the God of salvation, who will hear. First principle: the remnant\'s posture amid family-collapse — looking, waiting, hearing promised.',
    sourceKeywords: ['I will look unto the LORD', 'I will wait for the God of my salvation', 'my God will hear me'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mic-7-19': {
    title: 'Thou Wilt Cast All Their Sins into the Depths of the Sea',
    principle:
      'Compassion returns; iniquities subdued; sins sea-dumped. First principle: pardon pictured in geography — the depths of the sea as God\'s sin-landfill, never dredged.',
    sourceKeywords: ['he will have compassion upon us', 'subdue our iniquities', 'cast all their sins into the depths of the sea'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Nahum ───────────────────────────────────────
  'nam-1-3': {
    title: 'The LORD Is Slow to Anger, and Great in Power',
    principle:
      'Will not at all acquit the wicked; whirlwind His way, clouds His dust. First principle: the two-sided excellency — patience and non-acquittal held together; storm-walked majesty.',
    sourceKeywords: ['slow to anger, and great in power', 'will not at all acquit the wicked', 'the clouds are the dust of his feet'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'nam-1-7': {
    title: 'The LORD Is Good, a Strong Hold in the Day of Trouble',
    principle:
      'He knoweth them that trust in Him. First principle: the refuge promise inside the judgment book — knowing is mutual knowledge; the day of trouble has a strong hold.',
    sourceKeywords: ['The LORD is good', 'a strong hold in the day of trouble', 'he knoweth them that trust in him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'nam-1-15': {
    title: 'Behold upon the Mountains the Feet of Him That Bringeth Good Tidings',
    principle:
      'Peace published, feasts kept, wicked cut off. First principle: the twin of Isaiah 52:7 — the runner over the mountains announcing Nineveh\'s fall is the gospel-preacher figure Paul quotes.',
    sourceKeywords: ['the feet of him that bringeth good tidings', 'that publisheth peace', 'the wicked shall no more pass through thee'],
    fulfillmentKeywords: ['How beautiful are the feet of them that preach the gospel of peace'],
    terms: [],
  },

  // ── Hand-written expansion: Habakkuk ────────────────────────────────────
  'hab-2-3': {
    title: 'The Vision Is Yet for an Appointed Time',
    principle:
      'It speaks at the end and will not lie; though it tarry, wait. First principle: prophecy has a schedule and a patience-command — it will surely come, and the tarrying is part of the coming.',
    sourceKeywords: ['for an appointed time'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-2-4': {
    title: 'The Just Shall Live by His Faith',
    principle:
      'The lifted-up soul is not upright; the faith-soul lives. First principle: the Reformation verse — Romans, Galatians, and Hebrews each take a clause; life is faith-lived, not pride-earned.',
    sourceKeywords: ['his soul which is lifted up is not upright', 'the just shall live by his faith'],
    fulfillmentKeywords: ['the just shall live by faith'],
    terms: [],
  },
  'hab-2-14': {
    title: 'The Earth Shall Be Filled with the Knowledge of the Glory of the LORD',
    principle:
      'As waters cover the sea. First principle: the covering standard — sea-coverage is total; the knowledge-goal of history is glory-knowledge everywhere.',
    sourceKeywords: ['filled with the knowledge of the glory of the LORD', 'as the waters cover the sea'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-2-20': {
    title: 'The LORD Is in His Holy Temple: Let All the Earth Keep Silence',
    principle:
      'Silence commanded before the enthroned One. First principle: the answer to idol-noise is universal hush — the LORD present in His holy temple ends all chatter.',
    sourceKeywords: ['The LORD is in his holy temple', 'let all the earth keep silence before him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-3-2': {
    title: 'O LORD, Revive Thy Work in the Midst of the Years',
    principle:
      'Speech heard, fear felt, revival prayed; in wrath remember mercy. First principle: the revival-prayer between fear and faith — wrath remembered-with-mercy is the requested lens.',
    sourceKeywords: ['revive thy work in the midst of the years', 'in wrath remember mercy'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-3-17': {
    title: 'Although the Fig Tree Shall Not Blossom',
    principle:
      'Total agricultural collapse listed: fig, vine, olive, field, flock, herd. First principle: the worst-case inventory is the prelude to joy — the list exists to be survived.',
    sourceKeywords: ['the fig tree shall not blossom', 'no fruit be in the vines', 'the fields shall yield no meat'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-3-18': {
    title: 'Yet I Will Rejoice in the LORD',
    principle:
      'Joy in the God of salvation with nothing else joying. First principle: rejoicing without produce — the God of my salvation is the joy when every field fails; Paul\'s rejoice-always inherits it.',
    sourceKeywords: ['Yet I will rejoice in the LORD', 'I will joy in the God of my salvation'],
    fulfillmentKeywords: ['Rejoice in the Lord alway: and again I say, Rejoice'],
    terms: [],
  },

  // ── Hand-written expansion: Zephaniah ───────────────────────────────────
  'zep-1-7': {
    title: 'Hold Thy Peace at the Presence of the Lord GOD',
    principle:
      'The day near; sacrifice prepared; guests bidden. First principle: the day is a sacrificial feast where the invited are the victims — hush is the only fitting liturgy.',
    sourceKeywords: ['Hold thy peace at the presence of the Lord GOD', 'the day of the LORD is at hand', 'he hath bid his guests'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-1-14': {
    title: 'The Great Day of the LORD Is Near, It Hasteth Greatly',
    principle:
      'The voice of the day; the mighty man cries bitterly. First principle: nearness hastening — even the mighty cry; the day has its own voice preceding it.',
    sourceKeywords: ['The great day of the LORD is near', 'it hasteth greatly', 'the mighty man shall cry there bitterly'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-2-3': {
    title: 'Seek Ye the LORD, All Ye Meek of the Earth',
    principle:
      'Righteousness and meekness sought, hidden in the anger-day. First principle: the hiding option — meek-seekers may be hid when the day pours; judgment has a refuge class.',
    sourceKeywords: ['Seek ye the LORD, all ye meek of the earth', 'seek righteousness, seek meekness', 'hid in the day of the LORD\'S anger'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-8': {
    title: 'Wait Ye upon Me, until the Day That I Rise Up to the Prey',
    principle:
      'The determination to gather kingdoms and pour indignation; earth devoured by jealous fire. First principle: waiting is commanded against a determined gathering — the jealous-fire day is fixed by God\'s resolve.',
    sourceKeywords: ['until the day that I rise up to the prey'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-9': {
    title: 'Then Will I Turn to the People a Pure Language',
    principle:
      'One call on the name of the LORD, one-shoulder service. First principle: Babel reversed — the pure lip restores the united calling the tower scattered.',
    sourceKeywords: ['turn to the people a pure language', 'call upon the name of the LORD', 'serve him with one consent'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-12': {
    title: 'I Will Leave in the Midst of Thee an Afflicted and Poor People',
    principle:
      'The leftover remnant trusts in the name of the LORD. First principle: what remains is poor and trusting — the remnant\'s profile is affliction plus faith, not power plus pride.',
    sourceKeywords: ['an afflicted and poor people', 'they shall trust in the name of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-17': {
    title: 'The LORD Thy God in the Midst of Thee Is Mighty',
    principle:
      'Saving, rejoicing over thee, resting in His love, joying with singing. First principle: the mighty-in-midst God is a singing God — He rests in love and joys over His people out loud.',
    sourceKeywords: ['in the midst of thee is mighty', 'he will rejoice over thee with joy', 'he will joy over thee with singing'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-20': {
    title: 'I Will Make You a Name and a Praise among All People',
    principle:
      'Captivity turned before their eyes at the gathering time. First principle: the restored are renamed — from curse to praise among all peoples, at the visible turning-back.',
    sourceKeywords: ['a name and a praise among all people', 'when I turn back your captivity before your eyes'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Haggai ──────────────────────────────────────
  'hag-1-1': {
    title: 'Came the Word of the LORD by Haggai',
    principle:
      'The dated word to Zerubbabel and Joshua. First principle: civil governor and high priest hear together — rebuilding requires both throne and altar under one word.',
    sourceKeywords: ['came the word of the LORD by Haggai'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hag-2-6': {
    title: 'Yet Once, It Is a Little While, and I Will Shake',
    principle:
      'Heavens, earth, sea, dry land shaken once more. First principle: the once-more shaking is scheduled — Hebrews escalates it to heaven itself so the unshakeable remains.',
    sourceKeywords: ['Yet once, it is a little while', 'I will shake the heavens, and the earth'],
    fulfillmentKeywords: ['Yet once more I shake not the earth only, but also heaven'],
    terms: [],
  },
  'hag-2-9': {
    title: 'The Glory of This Latter House Shall Be Greater',
    principle:
      'Peace given in this place. First principle: the second temple\'s greater glory is a Person visiting it — and in this place, peace is promised by name.',
    sourceKeywords: ['The glory of this latter house', 'greater than of the former', 'in this place will I give peace'],
    fulfillmentKeywords: ['mine eyes have seen thy salvation'],
    terms: [],
  },
  'hag-2-23': {
    title: 'I Will Make Thee as a Signet',
    principle:
      'Zerubbabel chosen as the sealed signet on God\'s hand. First principle: the signet restores the reversed curse of Jeconiah — the Davidic line\'s official seal of authority.',
    sourceKeywords: ['I will take thee, O Zerubbabel, my servant', 'make thee as a signet', 'I have chosen thee'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Zechariah (added anchors) ───────────────────
  'zec-3-1': {
    title: 'Joshua the High Priest and Satan at His Right Hand',
    principle:
      'The resistant accuser stands beside the serving priest. First principle: the courtroom scene opens the cleansing chapter — the accuser\'s place is at the hand, the LORD\'s rebuke is stronger.',
    sourceKeywords: ['Joshua the high priest', 'Satan standing at his right hand to resist him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-3-9': {
    title: 'The Stone Laid before Joshua, Seven Eyes',
    principle:
      'One stone, engraved, iniquity removed in one day. First principle: the Branch-stone has seven eyes and a one-day removal — foundation, omniscience, and instant pardon engraved together.',
    sourceKeywords: ['the stone that I have laid before Joshua', 'upon one stone shall be seven eyes', 'remove the iniquity of that land in one day'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-4-6': {
    title: 'Not by Might, nor by Power, but by My Spirit',
    principle:
      'The word to Zerubbabel at the lampstand. First principle: rebuilding runs on Spirit-oil, not muscle — the mountain becomes a plain before the grace-supplied builder.',
    sourceKeywords: ['Not by might, nor by power', 'but by my spirit, saith the LORD of hosts'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-4-10': {
    title: 'Who Hath Despised the Day of Small Things?',
    principle:
      'The plummet in Zerubbabel\'s hand with the seven eyes of the LORD. First principle: small beginnings are despised by sight and rejoiced in by heaven — the LORD\'s eyes run the whole earth over plumb-lines.',
    sourceKeywords: ['Who hath despised the day of small things', 'the plummet in the hand of Zerubbabel', 'the eyes of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-6-13': {
    title: 'He Shall Bear the Glory, and Shall Sit and Rule upon His Throne',
    principle:
      'The Branch builds, bears glory, and is priest on His throne — counsel of peace between both offices. First principle: throne-priest union is the Branch\'s distinct glory; the counsel of peace is between them both.',
    sourceKeywords: ['build the temple of the LORD', 'bear the glory', 'a priest upon his throne'],
    fulfillmentKeywords: ['We have such an high priest, who is set on the right hand of the throne'],
    terms: [],
  },
  'zec-8-16': {
    title: 'Speak Ye Every Man the Truth to His Neighbour',
    principle:
      'Judgment of truth and peace executed in the gates. First principle: the restored-city ethic — truth-speech and gate-judgment of peace are the things to do.',
    sourceKeywords: ['Speak ye every man the truth to his neighbour', 'execute the judgment of truth and peace in your gates'],
    fulfillmentKeywords: ['putting away lying, speak every man truth'],
    terms: [],
  },
  'zec-9-10': {
    title: 'He Shall Speak Peace unto the Heathen',
    principle:
      'Chariots cut off; dominion sea-to-sea, river to earth\'s ends. First principle: the peace-speaking King\'s dominion measurement — from the entry-city to the ends, war-horses removed.',
    sourceKeywords: ['cut off the chariot from Ephraim', 'speak peace unto the heathen', 'his dominion shall be from sea even to sea'],
    fulfillmentKeywords: ['He shall have dominion also from sea to sea'],
    terms: [],
  },
  'zec-11-13': {
    title: 'Cast It unto the Potter: a Goodly Price',
    principle:
      'Thirty silver pieces thrown in the LORD\'s house to the potter. First principle: the first-person prophecy — the Shepherds\' own words about His price, fulfilled at the chief priests\' decision.',
    sourceKeywords: ['Cast it unto the potter', 'a goodly price that I was prised at of them', 'in the house of the LORD'],
    fulfillmentKeywords: ['And the chief priests took the silver pieces, and said'],
    terms: [],
  },
  'zec-12-11': {
    title: 'A Great Mourning in Jerusalem, as the Mourning of Hadadrimmon',
    principle:
      'The Megiddon-scale mourning in that day. First principle: the mourning is as deep as Josiah\'s death-lament — pierced-Shepherd grief becomes the city\'s great mourning.',
    sourceKeywords: ['a great mourning in Jerusalem', 'the mourning of Hadadrimmon', 'the valley of Megiddon'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-14-5': {
    title: 'The LORD My God Shall Come, and All the Saints with Thee',
    principle:
      'Flight to the valley as the LORD comes with His saints. First principle: the coming includes the saints — the fled-through valley is the arrival route of the coming One and His holy company.',
    sourceKeywords: ['the LORD my God shall come', 'all the saints with thee', 'the valley of the mountains'],
    fulfillmentKeywords: ['the Lord cometh with ten thousands of his saints'],
    terms: [],
  },
  'zec-14-8': {
    title: 'Living Waters Shall Go Out from Jerusalem',
    principle:
      'Half toward the former sea, half toward the hinder — summer and winter. First principle: the city becomes the spring-head — seasonal interruption abolished in the living waters.',
    sourceKeywords: ['living waters shall go out from Jerusalem'],
    fulfillmentKeywords: ['He that believeth on me... out of his belly shall flow rivers of living water'],
    terms: [],
  },
  'zec-14-9': {
    title: 'The LORD Shall Be King over All the Earth',
    principle:
      'One LORD, His name one, in that day. First principle: the unity climax — one King, one name, all the earth; the plural idols and divided loyalties end in the singular reign.',
    sourceKeywords: ['the LORD shall be king over all the earth', 'one LORD, and his name one'],
    fulfillmentKeywords: ['The kingdoms of this world are become the kingdoms of our Lord'],
    terms: [],
  },
  'zec-14-16': {
    title: 'Every One That Is Left... Shall Go Up to Worship the King',
    principle:
      'Year-by-year feast-of-tabernacles worship by the surviving nations. First principle: even the surviving attackers worship annually — the feast of tabernacles becomes the nations\' required pilgrimage.',
    sourceKeywords: ['go up from year to year to worship the King'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Malachi (added anchors) ─────────────────────
  'mal-1-2': {
    title: 'I Have Loved You, Saith the LORD',
    principle:
      'The love-question answered by Jacob-over-Esau election. First principle: the book opens with doubted love and an election proof — the controversy is settled by covenant choice, not circumstance.',
    sourceKeywords: ['I have loved you', 'Wherein hast thou loved us', 'yet I loved Jacob'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mal-1-3': {
    title: 'And I Hated Esau, and Laid His Mountains Waste',
    principle:
      'Esau\'s heritage dragon-wilderness. First principle: the hated line\'s wasteland is the visible underside of chosen love — Edom\'s ruins preach the election of Jacob.',
    sourceKeywords: ['I hated Esau', 'laid his mountains and his heritage waste', 'dragons of the wilderness'],
    fulfillmentKeywords: ['Jacob have I loved, but Esau have I hated'],
    terms: [],
  },
  'mal-3-6': {
    title: 'For I Am the LORD, I Change Not',
    principle:
      'The unchanging God is why Jacob\'s sons are not consumed. First principle: non-immutability would end Israel — the covenant survives on the immutability of the Covenant-maker.',
    sourceKeywords: ['I am the LORD, I change not', 'therefore ye sons of Jacob are not consumed'],
    fulfillmentKeywords: ['Jesus Christ the same yesterday, and to day, and for ever'],
    terms: [],
  },
  'mal-3-17': {
    title: 'They Shall Be Mine, Saith the LORD of Hosts',
    principle:
      'Jewels made up; spared as a father spares a serving son. First principle: the making-up of jewels is a day-event — the spared are named as a father spares his serving son.',
    sourceKeywords: ['they shall be mine', 'when I make up my jewels', 'spare them, as a man spareth his own son'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mal-4-6': {
    title: 'He Shall Turn the Heart of the Fathers to the Children',
    principle:
      'The turning hearts, lest the earth be smitten with a curse. First principle: the book\'s last promise is family-turning or curse — the forerunner\'s ministry is the choice-point of the ages.',
    sourceKeywords: ['turn the heart of the fathers to the children', 'lest I come and smite the earth with a curse'],
    fulfillmentKeywords: ['to turn the hearts of the fathers to the children'],
    terms: [],
  },
};


export function getBookThreadDetail(verseId: string): ThreadDetail | null {
  return bookThreadDetails[verseId] ?? null;
}

