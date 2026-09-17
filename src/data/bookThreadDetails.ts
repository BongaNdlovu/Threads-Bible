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
      'A stone cut without hands smashes the statue and becomes a great mountain. First principle: God\'s kingdom is not a human empire. God himself sets it up, and it fills the earth.',
    sourceKeywords: ['stone', 'cut out', 'without hands', 'mountain', 'great'],
    fulfillmentKeywords: ['stone', 'builders', 'refused', 'head', 'corner', 'church', 'gates of hell'],
    terms: [
      { term: 'without hands', original: 'דִּי לָא בִידַיִן', translit: 'di la bi-dayin', gloss: 'which is not by hands (Aramaic)', note: 'This is not human craftsmanship. It is God\'s kingdom (cf. Col 2:11).' },
    ],
  },
  'dan-2-44': {
    title: 'Everlasting Kingdom',
    principle:
      'In the days of those kings God sets up a kingdom that shall never be destroyed. Luke says of His kingdom there shall be no end. First principle: Christ\'s kingdom outlasts all earthly thrones and absorbs them.',
    sourceKeywords: ['days', 'kings', 'set up', 'kingdom', 'never be destroyed', 'people'],
    fulfillmentKeywords: ['throne of his father David', 'kingdom', 'no end', 'kingdoms of this world', 'Lord', 'Christ', 'reign'],
    terms: [
      { term: 'never be destroyed', original: 'לְעָלְמִין לָא תִתְחַבַּל', translit: 'le-ʿalmin la titchabbal', gloss: 'forever it shall not be destroyed (Aramaic)', note: 'Luke 1:33 — His kingdom has no end.' },
    ],
  },
  'dan-7-13': {
    title: 'Son of Man Coming with Clouds',
    principle:
      'One like a Son of Man comes with the clouds of heaven to the Ancient of Days. Jesus claims this title and this coming, and Revelation repeats the cloud-coming. First principle: the authority of the promised King, Jesus, is given to Him and then shown in glory.',
    sourceKeywords: ['night visions', 'one like the Son of man', 'clouds of heaven', 'Ancient of days', 'came'],
    fulfillmentKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'coming', 'clouds', 'every eye'],
    terms: [
      { term: 'Son of Man', original: 'כְּבַר אֱנָשׁ', translit: 'ke-var enash', gloss: 'like a son of man (Aramaic)', note: 'This is the title Jesus used for Himself more than any other. It is also the title Ezekiel is given in his visions.' },
    ],
  },
  'dan-7-14': {
    title: 'Dominion Given Forever',
    principle:
      'The Son of Man receives dominion, glory, and a kingdom. All peoples should serve Him. Matthew says He has all authority in heaven and earth. First principle: the Messiah is worshiped by all and rules over all.',
    sourceKeywords: ['dominion', 'glory', 'kingdom', 'all people', 'nations', 'languages', 'serve', 'everlasting dominion'],
    fulfillmentKeywords: ['All power', 'authority', 'heaven', 'earth', 'name above every name', 'knee', 'bow', 'Lord'],
    terms: [
      { term: 'dominion', original: 'שָׁלְטָן', translit: 'sholtan', gloss: 'dominion, rule (Aramaic)', note: 'The Greek words ἐξουσία and δόξα are used for this in the NT.' },
    ],
  },
  'dan-9-25': {
    title: 'Messiah the Prince',
    principle:
      'Daniel counts from the decree to restore Jerusalem to the coming of Messiah the Prince. First principle: Daniel gives the coming of the Anointed One a window you can calculate.',
    sourceKeywords: ['Messiah', 'Prince', 'seven weeks', 'threescore and two weeks', 'street', 'wall', 'troublous'],
    fulfillmentKeywords: ['Jesus Christ', 'Christ', 'Messiah', 'anointed', 'Prince'],
    terms: [
      { term: 'Messiah', original: 'מָשִׁיחַ', translit: 'mashiach', gloss: 'anointed one', note: 'Greek Χριστός (Christos) — Christ.' },
    ],
  },
  'dan-9-26': {
    title: 'Messiah Cut Off',
    principle:
      'After sixty-two weeks Messiah is cut off, but not for Himself. First principle: the Anointed One does not die for His own sin. He dies for others, and Isaiah 53 confirms it.',
    sourceKeywords: ['Messiah', 'cut off', 'not for himself', 'people of the prince', 'city', 'sanctuary', 'flood', 'end'],
    fulfillmentKeywords: ['crucified', 'slain', 'cut off', 'not for himself', 'for us', 'ransom'],
    terms: [
      { term: 'cut off', original: 'יִכָּרֵת', translit: 'yikkaret', gloss: 'shall be cut off / destroyed', note: 'Execution language; same as "cut off from his people" in Isa 53:8 LXX.' },
    ],
  },
  'dan-9-27': {
    title: 'He Shall Confirm the Covenant',
    principle:
      'He shall confirm a covenant — God\'s binding promise — with many for one week. In the middle of the week he causes sacrifice and oblation, the temple offerings, to cease. First principle: Messiah\'s death ends the old system of sacrifices, and it no longer does what it was meant to do (Heb 10).',
    sourceKeywords: ['confirm', 'covenant', 'many', 'one week', 'midst', 'cause the sacrifice', 'oblation to cease', 'overspreading', 'abominations', 'desolate'],
    fulfillmentKeywords: ['new testament', 'blood', 'offered', 'once', 'end of the law', 'abolished', 'abomination', 'desolation'],
    terms: [
      { term: 'confirm a covenant', original: 'הִגְבִּיר בְּרִית', translit: 'higbir berit', gloss: 'he shall strengthen/confirm a covenant — God\'s binding promise', note: 'Heb 9:15 — the new covenant, God\'s binding promise, in Christ\'s blood.' },
    ],
  },
  'dan-12-2': {
    title: 'Many Shall Awake',
    principle:
      'Many who sleep in the dust shall awake. Some wake to everlasting life, and some to shame. Jesus and Paul and Revelation all cite a bodily resurrection. First principle: death is not the end. Everyone rises, and that rising settles everything.',
    sourceKeywords: ['sleep', 'dust of the earth', 'awake', 'everlasting life', 'shame', 'contempt'],
    fulfillmentKeywords: ['resurrection of the dead', 'grave', 'come forth', 'life', 'damnation', 'raised incorruptible'],
    terms: [
      { term: 'awake', original: 'יָקִיצוּ', translit: 'yaqitsu', gloss: 'they shall awake / arise', note: 'This is the first place in Scripture that clearly says people rise to two different destinies.' },
    ],
  },
  'dan-12-3': {
    title: 'Wise Shall Shine',
    principle:
      'Those who turn many to righteousness shall shine as the stars. First principle: faithful witness leads to glory in the resurrection life.',
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
      'Behold, He comes with clouds. Every eye shall see Him. This echoes Daniel 7 and the promise the angels gave at the ascension. First principle: the second coming is public, visible, and witnessed by everyone.',
    sourceKeywords: ['clouds', 'every eye', 'see him', 'pierced', 'kindreds', 'earth', 'wail'],
    fulfillmentKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'coming', 'see the Son of man'],
    terms: [
      { term: 'pierced', original: 'ἐξεκέντησαν', translit: 'exekentēsan', gloss: 'they pierced / thrust through', note: 'Zech 12:10 — they shall look on me whom they have pierced.' },
    ],
  },
  'rev-1-18': {
    title: 'Keys of Death and Hell',
    principle:
      'The risen Christ holds the keys of death and of Hades. First principle: resurrection is not escape. It is conquest, and Jesus is the one who governs death itself.',
    sourceKeywords: ['dead', 'alive', 'keys of hell', 'death', 'for evermore'],
    fulfillmentKeywords: ['All power', 'given', 'heaven', 'earth', 'destroy', 'death', 'swallowed up'],
    terms: [
      { term: 'Hades', original: 'ᾅδης', translit: 'hadēs', gloss: 'realm of the dead', note: 'This is Sheol in the OT. The risen Lord conquered it.' },
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
      { term: 'Root and Offspring', original: 'ἡ ῥίζα καὶ τὸ γένος', translit: 'hē riza kai to genos', gloss: 'the root and the descendant', note: 'Isa 11:1, 10 and Num 24:17 both speak of this. He is at both ends of David\'s line.' },
    ],
  },
  'rev-21-3': {
    title: 'Behold, the Tabernacle of God',
    principle:
      'The tabernacle of God is with men; He will dwell with them. First principle: the exile from Eden ends. God Himself pitches His tent among the people he has bought back.',
    sourceKeywords: ['tabernacle of God', 'men', 'dwell', 'they shall be his people', 'God himself', 'with them'],
    fulfillmentKeywords: ['tabernacle', 'dwell', 'God with us', 'Emmanuel', 'I will be their God'],
    terms: [
      { term: 'tabernacle', original: 'σκηνή', translit: 'skēnē', gloss: 'tent, dwelling, tabernacle', note: 'Exod 25:8 / John 1:14 ἐσκήνωσεν — literally, He pitched his tent among us.' },
    ],
  },
  'rev-22-20': {
    title: 'Surely I Come Quickly',
    principle:
      'The Spirit and the bride say Come. Jesus says: surely I come quickly. First principle: the church\'s last prayer is a hope set on the end of the story. The promise is personal, and it is near.',
    sourceKeywords: ['surely', 'come quickly', 'Amen', 'Even so', 'come', 'Lord Jesus'],
    fulfillmentKeywords: ['come', 'receive you', 'appear', 'second time', 'looking for', 'Lord'],
    terms: [
      { term: 'Come', original: 'ἔρχου', translit: 'erchou', gloss: 'come! (imperative)', note: 'The Aramaic word Maranatha stands behind 1 Cor 16:22. It means, Our Lord, come.' },
    ],
  },

  // ── Pauline epistles ────────────────────────────────────────────────────
  'rom-1-3': {
    title: 'Seed of David According to the Flesh',
    principle:
      'The gospel is about God\'s Son, born of the seed of David. First principle: Jesus is the promised King. That claim is rooted in history, in God\'s binding promise to David. No one invented it in the apostles\' day.',
    sourceKeywords: ['Son', 'seed', 'David', 'flesh'],
    fulfillmentKeywords: ['seed', 'David', 'Christ', 'throne', 'son of David'],
    terms: [
      { term: 'seed', original: 'σπέρμα', translit: 'sperma', gloss: 'seed, descendant', note: 'Same thread as Gen 3:15 / 22:18 / 2 Sam 7.' },
    ],
  },
  'rom-1-17': {
    title: 'God Declares the Guilty in the Right by Faith — from Habakkuk',
    principle:
      'The righteousness of God is revealed from faith to faith: the just shall live by faith. First principle: Habakkuk\'s word becomes the key that gives Romans its shape.',
    sourceKeywords: ['righteousness of God', 'revealed', 'faith', 'faith', 'just', 'live'],
    fulfillmentKeywords: ['just shall live', 'faith', 'Habakkuk'],
    terms: [
      { term: 'just shall live by faith', original: 'ὁ δίκαιος ἐκ πίστεως ζήσεται', translit: 'ho dikaios ek pisteōs zēsetai', gloss: 'the righteous by faith shall live', note: 'The NT quotes Hab 2:4 three times (Rom 1:17; Gal 3:11; Heb 10:38).' },
    ],
  },
  'rom-3-25': {
    title: 'Mercy Seat — the Sacrifice That Turns God\'s Wrath Away',
    principle:
      'God set forth Christ Jesus as the propitiation — the sacrifice that turns His wrath away — through faith in His blood. First principle: the cross is the new mercy seat, the place where God\'s justice and mercy meet.',
    sourceKeywords: ['propitiation', 'faith', 'blood', 'remission', 'sins'],
    fulfillmentKeywords: ['mercy seat', 'atonement', 'blood', 'hilasmos', 'hilasterion'],
    terms: [
      { term: 'propitiation', original: 'ἱλαστήριον', translit: 'hilastērion', gloss: 'mercy seat / the sacrifice that turns God\'s wrath away', note: 'This is the LXX word for the kapporet of Exod 25:17 — the ark\'s cover.' },
    ],
  },
  'rom-4-3': {
    title: 'Abraham Believed God',
    principle:
      'Abraham believed God and it was counted to him for righteousness. First principle: God declared Abraham to be in the right before circumcision, before the law, and before any works. It is by faith.',
    sourceKeywords: ['Abraham believed', 'God', 'counted', 'righteousness'],
    fulfillmentKeywords: ['believed', 'counted', 'righteousness'],
    terms: [
      { term: 'counted', original: 'ἐλογίσθη', translit: 'elogisthē', gloss: 'it was credited / reckoned', note: 'LXX Gen 15:6 — Paul uses the same verb as Genesis.' },
    ],
  },
  'rom-5-12': {
    title: 'Sin Entered Through One Man',
    principle:
      'By one man sin entered the world, and death by sin. First principle: Adam\'s fall was the act of a head over the whole human race. Death passes to all. Christ\'s obedience was the act of a head for the many.',
    sourceKeywords: ['one man', 'sin', 'entered', 'world', 'death', 'sin', 'death passed', 'all', 'sinned'],
    fulfillmentKeywords: ['one man', 'death', 'resurrection', 'Adam', 'Christ', 'made alive'],
    terms: [
      { term: 'entered', original: 'εἰσῆλθεν', translit: 'eisēlthen', gloss: 'entered / came in', note: 'This is parallel to 1 Cor 15:21-22 — the Adam/Christ contrast.' },
    ],
  },
  'rom-8-3': {
    title: 'God Sent His Son in the Likeness of Sinful Flesh',
    principle:
      'The law could not do it. God did. He sent His own Son in the likeness of sinful flesh. First principle: the law points out the sickness but cannot cure it. The Son who became man condemns sin in the flesh.',
    sourceKeywords: ['law', 'weak', 'flesh', 'God sending', 'his own Son', 'likeness', 'sinful flesh', 'condemned sin', 'flesh'],
    fulfillmentKeywords: ['Word', 'flesh', 'dwelt', 'likeness', 'sinful flesh'],
    terms: [
      { term: 'likeness of sinful flesh', original: 'ἐν ὁμοιώματι σαρκὸς ἁμαρτίας', translit: 'en homoiōmati sarkos hamartias', gloss: 'in the likeness of flesh of sin', note: 'He was truly human. Sin did not master him (cf. Phil 2:7).' },
    ],
  },
  'rom-8-32': {
    title: 'He Did Not Spare His Own Son',
    principle:
      'He who did not spare His own Son, but delivered Him up for us all. First principle: the cross shows how generous God is. If He gave the Son, He will freely give all things.',
    sourceKeywords: ['spared not', 'own Son', 'delivered him up', 'us all'],
    fulfillmentKeywords: ['only begotten', 'gave', 'world', 'offered', 'himself'],
    terms: [
      { term: 'did not spare', original: 'οὐκ ἐφείσατο', translit: 'ouk epheisato', gloss: 'he did not spare', note: 'Paul deliberately echoes Gen 22:12 LXX. There, Abraham did not spare his son.' },
    ],
  },
  'rom-9-33': {
    title: 'Stone of Stumbling',
    principle:
      'Whoever believes on Him shall not be ashamed. But He is also the stone of stumbling. First principle: Christ is either foundation or crusher. There is no neutral response.',
    sourceKeywords: ['stone of stumbling', 'rock of offence', 'believeth', 'ashamed'],
    fulfillmentKeywords: ['stone', 'builders', 'refused', 'head', 'corner', 'stumbling'],
    terms: [
      { term: 'stumbling stone', original: 'λίθος προσκόμματος', translit: 'lithos proskommatos', gloss: 'stone of stumbling', note: 'Isa 8:14 and 28:16 are combined here. See also 1 Pet 2:6-8.' },
    ],
  },
  'rom-10-13': {
    title: 'Whoever Calls on the Name',
    principle:
      'Whoever shall call on the name of the Lord shall be saved. First principle: Joel\'s promise about the last days comes true when the gospel is preached.',
    sourceKeywords: ['call upon', 'name of the Lord', 'saved'],
    fulfillmentKeywords: ['call', 'name of the LORD', 'saved'],
    terms: [
      { term: 'name of the Lord', original: 'ὄνομα κυρίου', translit: 'onoma kyriou', gloss: 'the name of the Lord (YHWH)', note: 'The NT applies Joel 2:32 to Jesus in Acts 2:21, 16:31.' },
    ],
  },
  'rom-15-12': {
    title: 'Root of Jesse — In Him Gentiles Trust',
    principle:
      'Isaiah: there shall be a root of Jesse, and He that shall rise to reign over the Gentiles; in Him shall the Gentiles trust. First principle: Gentile hope comes from David\'s line. That hope is about the promised King, Jesus.',
    sourceKeywords: ['root', 'Jesse', 'rise', 'reign', 'Gentiles', 'trust'],
    fulfillmentKeywords: ['Root', 'Jesse', 'Branch', 'Gentiles', 'trust'],
    terms: [
      { term: 'root of Jesse', original: 'ἡ ῥίζα τοῦ Ἰεσσαί', translit: 'hē riza tou Iessai', gloss: 'the root of Jesse', note: 'Isa 11:1, 10 — same as Rev 22:16.' },
    ],
  },
  '1co-5-7': {
    title: 'Christ Our Passover',
    principle:
      'Christ our Passover is sacrificed for us. Therefore keep the feast. First principle: the death of the Passover lamb is fulfilled in Christ. That truth changes how Christians worship and how they live every day.',
    sourceKeywords: ['Christ our passover', 'sacrificed', 'feast'],
    fulfillmentKeywords: ['lamb', 'without blemish', 'passover', 'blood', 'sacrificed'],
    terms: [
      { term: 'Passover', original: 'τὸ πάσχα', translit: 'to pascha', gloss: 'the Passover (lamb)', note: 'Exod 12 is a real earlier event that points forward to a later one. Paul makes the link explicit.' },
    ],
  },
  '1co-10-4': {
    title: 'The Rock Was Christ',
    principle:
      '“They drank of that spiritual Rock that followed them, and that Rock was Christ.” First principle: the water in the wilderness is a real earlier event that points forward to a later one. That event shows us Jesus.',
    sourceKeywords: ['spiritual', 'Rock', 'followed', 'Christ'],
    fulfillmentKeywords: ['rock', 'Horeb', 'smite', 'water', 'drink'],
    terms: [
      { term: 'Rock', original: 'πέτρα', translit: 'petra', gloss: 'rock, crag', note: 'The apostle makes the earlier picture explicit. The rock of Exod 17:6 points forward.' },
    ],
  },
  '1co-15-3': {
    title: 'Christ Died for Our Sins',
    principle:
      'I delivered this: Christ died for our sins according to the Scriptures. First principle: the price paid so sin can be forgiven was paid by a substitute. The Scriptures said it would happen. His death was not just a bare example.',
    sourceKeywords: ['Christ died', 'our sins', 'according to the scriptures', 'buried', 'rose again', 'third day'],
    fulfillmentKeywords: ['wounded', 'transgressions', 'bruised', 'iniquity', 'chastisement', 'peace'],
    terms: [
      { term: 'for our sins', original: 'ὑπὲρ τῶν ἁμαρτιῶν ἡμῶν', translit: 'hyper tōn hamartiōn hēmōn', gloss: 'on behalf of / for our sins', note: 'Isa 53:5-6 shows the earlier picture: He bears what is ours.' },
    ],
  },
  '1co-15-20': {
    title: 'Christ the Firstfruits',
    principle:
      'Christ is risen from the dead and become the firstfruits of those who slept. First principle: his resurrection is not the only one of its kind. It is the first harvest. Many more will follow, because God will raise them too.',
    sourceKeywords: ['risen', 'dead', 'firstfruits', 'slept'],
    fulfillmentKeywords: ['firstfruits', 'slept', 'risen', 'firstborn'],
    terms: [
      { term: 'firstfruits', original: 'ἀπαρχή', translit: 'aparchē', gloss: 'first portion offered to God', note: 'An earlier picture from farming: the first share guarantees the full harvest (1 Cor 15:23).' },
    ],
  },
  '1co-15-45': {
    title: 'Last Adam Quickening Spirit',
    principle:
      'The first man Adam became a living soul; the last Adam a life-giving spirit. First principle: the resurrection life God gives is greater than the creation life he gave. That life is in Christ.',
    sourceKeywords: ['first man Adam', 'living soul', 'last Adam', 'quickening spirit'],
    fulfillmentKeywords: ['formed', 'dust', 'breath of life', 'living soul'],
    terms: [
      { term: 'last Adam', original: 'ἔσχατος Ἀδάμ', translit: 'eschatos Adam', gloss: 'the last Adam', note: 'He is not just a second Adam. He is the last head of the new human family, and he represents them all.' },
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
      'You are an epistle of Christ, written not with ink but with the Spirit of the living God, not in tables of stone but in fleshy tables of the heart. First principle: God\'s binding promise is written inside a person. It is not merely an outward law.',
    sourceKeywords: ['epistle of Christ', 'ministered', 'written', 'Spirit of the living God', 'tables of stone', 'fleshy tables', 'heart'],
    fulfillmentKeywords: ['law', 'heart', 'mind', 'write', 'new covenant'],
    terms: [
      { term: 'fleshy tables of the heart', original: 'πλαξὶν καρδίας σαρκίναις', translit: 'plaxin kardias sarkinais', gloss: 'tablets of hearts of flesh', note: 'Jer 31:33 / Ezek 36:26 find their fulfillment here. The Spirit makes people obey.' },
    ],
  },
  '2co-5-21': {
    title: 'Made Sin for Us',
    principle:
      'God made Him who knew no sin to be sin for us, that we might become the righteousness of God in Him. First principle: God put our sin on Christ, and he put Christ\'s righteousness on us.',
    sourceKeywords: ['knew no sin', 'made him', 'sin for us', 'righteousness of God', 'in him'],
    fulfillmentKeywords: ['healed', 'iniquities', 'righteousness', 'justified'],
    terms: [
      { term: 'sin / righteousness', original: 'ἁμαρτίαν / δικαιοσύνη', translit: 'hamartian / dikaiosynē', gloss: 'sin / righteousness', note: 'Isaiah 53 uses legal words for an exchange in God\'s binding promise.' },
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
      'When the fullness of time came, God sent forth His Son, made of a woman, made under the law. First principle: God timed the incarnation, gave it a mother, and placed it under the law. He did it to redeem those under the law.',
    sourceKeywords: ['fulness of the time', 'God sent forth', 'his Son', 'made of a woman', 'under the law'],
    fulfillmentKeywords: ['seed', 'woman', 'bruise', 'son', 'born', 'virgin'],
    terms: [
      { term: 'made of a woman', original: 'γενόμενον ἐκ γυναικός', translit: 'genomenon ek gynaikos', gloss: 'born of a woman', note: 'Echo of Gen 3:15 — seed of the woman.' },
    ],
  },
  'eph-1-20': {
    title: 'Seated at God\'s Right Hand',
    principle:
      'God raised Christ and seated him at his right hand in heavenly places. First principle: God enthroned him after he raised him, and that throne is above every name.',
    sourceKeywords: ['raised', 'seated', 'right hand', 'heavenly places', 'far above'],
    fulfillmentKeywords: ['sit', 'right hand', 'until', 'enemies', 'footstool'],
    terms: [
      { term: 'right hand', original: 'δεξιᾷ', translit: 'dexia', gloss: 'right hand (place of honor/power)', note: 'Ps 110:1 — the messianic enthronement text most quoted in the NT.' },
    ],
  },
  'eph-2-20': {
    title: 'Built on Apostles and Prophets',
    principle:
      'The church is built "on the foundation of the apostles and prophets," with Christ Jesus Himself as the chief corner stone. First principle: the church rests on Christ at the centre, and not on an institution. That cornerstone is what holds the whole building together.',
    sourceKeywords: ['foundation', 'apostles', 'prophets', 'Christ Jesus', 'chief corner stone'],
    fulfillmentKeywords: ['stone', 'builders', 'refused', 'head', 'corner'],
    terms: [
      { term: 'corner stone', original: 'ἀκρογωνιαίου', translit: 'akrogōniaiou', gloss: 'cornerstone / capstone', note: 'Ps 118:22 / Isa 28:16 applied to Christ.' },
    ],
  },
  'eph-5-25': {
    title: 'Christ Loved the Church and Gave Himself',
    principle:
      'Husbands, love your wives as Christ loved the church and gave himself for it. First principle: marriage follows the pattern of self-giving atonement, and that is more than mutual usefulness.',
    sourceKeywords: ['loved the church', 'gave himself', 'sanctify', 'cleanse', 'washing', 'water', 'word'],
    fulfillmentKeywords: ['love one another', 'laid down', 'life', 'friends'],
    terms: [
      { term: 'gave Himself', original: 'ἑαυτὸν παρέδωκεν', translit: 'heauton paredōken', gloss: 'He handed over / gave Himself', note: 'Same verb as Judas\' betrayal and God\'s delivering of the Son (Rom 8:32).' },
    ],
  },
  'php-2-6': {
    title: 'Emptied Himself',
    principle:
      'Who being in the form of God, emptied Himself, taking the form of a servant. First principle: when Christ emptied himself he did not lose his deity. He chose to limit himself in order to take flesh and go to the cross.',
    sourceKeywords: ['being', 'form of God', 'thought it not robbery', 'equal with God', 'made himself of no reputation', 'form of a servant'],
    fulfillmentKeywords: ['Word', 'God', 'flesh', 'dwelt', 'servant'],
    terms: [
      { term: 'emptied', original: 'ἐκένωσεν', translit: 'ekenōsen', gloss: 'He emptied / made void', note: 'Not "emptied Himself of Godhood" — He took servant form while remaining God.' },
    ],
  },
  'php-2-8': {
    title: 'Obedient to Death, Even the Cross',
    principle:
      'He humbled Himself and became obedient to death, even the death of the cross. First principle: the lowest point of his humiliation is the highest act of his love. It is also the road to his exaltation.',
    sourceKeywords: ['humbled', 'obedient', 'death', 'cross'],
    fulfillmentKeywords: ['obedient', 'death', 'cross', 'crucified'],
    terms: [
      { term: 'cross', original: 'σταυρός', translit: 'stauros', gloss: 'cross — instrument of Roman execution', note: 'Scandal and glory in one word (1 Cor 1:18).' },
    ],
  },
  'php-2-10': {
    title: 'Every Knee Shall Bow',
    principle:
      'At the name of Jesus every knee should bow. First principle: Paul takes Isaiah\'s claim about the LORD and applies it to Jesus. It is the strongest thing Paul ever says about who Jesus is.',
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
      { term: 'image', original: 'εἰκών', translit: 'eikōn', gloss: 'image, likeness, representation', note: 'Gen 1:26 is fulfilled in the Son. He is the exact image of the Father.' },
    ],
  },
  'col-1-16': {
    title: 'All Things Created by Him',
    principle:
      'By Him all things were created — visible and invisible. First principle: the Son made everything. He is not the first thing God created.',
    sourceKeywords: ['by him', 'created', 'all things', 'heaven', 'earth', 'visible', 'invisible', 'thrones', 'dominions'],
    fulfillmentKeywords: ['made', 'worlds', 'all things', 'by him'],
    terms: [
      { term: 'by Him', original: 'ἐν αὐτῷ', translit: 'en autō', gloss: 'in Him / by Him', note: 'John 1:3 makes the same point. All things were made through Him.' },
    ],
  },
  'col-2-15': {
    title: 'Principalities Spoiled',
    principle:
      'He spoiled principalities and powers, making a show of them openly, triumphing over them in it. First principle: the cross is a public victory parade over demonic powers. Christ stripped those rulers of their authority and put them on open display as defeated.',
    sourceKeywords: ['principalities', 'powers', 'spoiled', 'open show', 'triumphing', 'cross'],
    fulfillmentKeywords: ['bruise', 'head', 'destroy', 'works', 'devil', 'cast out'],
    terms: [
      { term: 'triumphing', original: 'θριαμβεύσας', translit: 'thriambeusas', gloss: 'leading in triumphal procession', note: 'The picture is a Roman victory parade. The cross is that conquest.' },
    ],
  },
  '1th-4-16': {
    title: 'The Lord Descends with a Shout',
    principle:
      'The Lord Himself shall descend from heaven with a shout, with the voice of the archangel, with the trumpet of God; the dead in Christ shall rise first. First principle: this is the second coming of Christ, and everyone will see him come. He comes in a real body. It is also the resurrection of the dead. Jesus and Paul teach the same event elsewhere. It is not a secret removal of the church before judgment.',
    sourceKeywords: ['Lord himself', 'descend', 'heaven', 'shout', 'voice', 'archangel', 'trumpet', 'God', 'dead in Christ', 'rise first'],
    fulfillmentKeywords: ['trumpet', 'dead', 'raise', 'incorruptible', 'angel', 'descend', 'Son of man', 'coming'],
    terms: [
      { term: 'trumpet of God', original: 'σάλπιγγι θεοῦ', translit: 'salpingi theou', gloss: 'trumpet of God', note: 'Isa 27:13 / Matt 24:31 / 1 Cor 15:52 all describe one public coming at the end of the story. It is not a separate secret event.' },
      { term: 'the dead in Christ shall rise', original: 'οἱ νεκροὶ ἐν Χριστῷ ἀναστήσονται πρῶτον', translit: 'hoi nekroi en Christō anastēsontai prōton', gloss: 'the dead in Christ will rise first', note: 'The resurrection happens on the last day (John 6:39-40). It happens at the same time as Christ\'s visible return.' },
    ],
  },
  '1th-4-17': {
    title: 'Together to Meet the Lord',
    principle:
      'Then we who are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air, and so shall we ever be with the Lord. First principle: believers who are still alive join the believers God has raised, and together they greet the returning King. This is one public second coming. It is not a secret removal of the church, and it does not happen in two stages. Comfort one another with these words. Christ comes, the dead rise, and we are with Him forever.',
    sourceKeywords: ['caught up', 'together', 'clouds', 'meet the Lord', 'air', 'ever be with the Lord'],
    fulfillmentKeywords: ['Son of man', 'coming', 'clouds', 'gather', 'elect', 'angels', 'trumpet'],
    terms: [
      { term: 'caught up together', original: 'ἁρπαγησόμεθα ἅμα', translit: 'harpagēsometha hama', gloss: 'we shall be caught/snatched together', note: 'Greek ἅρπαζω means seize or catch (cf. Acts 8:39). It does not mean a separate secret coming. The context is resurrection (v16) and lasting fellowship with the Lord (v17). That matches Matt 24:30-31.' },
    ],
  },
  '1ti-2-5': {
    title: 'One Mediator Between God and Men',
    principle:
      'There is one God and one Mediator between God and men, the man Christ Jesus. First principle: Jesus is the only one who stands between God and us. He is a real man. He is enough.',
    sourceKeywords: ['one God', 'one Mediator', 'God', 'men', 'man', 'Christ Jesus'],
    fulfillmentKeywords: ['no man cometh', 'Father', 'by me', 'mediator', 'new testament'],
    terms: [
      { term: 'Mediator', original: 'μεσίτης', translit: 'mesitēs', gloss: 'mediator, go-between, arbitrator', note: 'Heb 8:6; 9:15 — Christ stands between God and us in God\'s new binding promise.' },
    ],
  },
  '1ti-3-16': {
    title: 'God Manifest in the Flesh',
    principle:
      'God was manifest in the flesh, justified in the Spirit, seen of angels, preached to the Gentiles. First principle: the mystery of godliness is one story. God came in human flesh. The Spirit proved Him right. Angels saw Him. The Gentiles heard Him preached.',
    sourceKeywords: ['mystery of godliness', 'God', 'manifest', 'flesh', 'justified', 'Spirit', 'seen', 'angels', 'preached', 'Gentiles', 'believed', 'world', 'received up', 'glory'],
    fulfillmentKeywords: ['Word', 'flesh', 'dwelt', 'glory', 'only begotten'],
    terms: [
      { term: 'manifest in the flesh', original: 'ἐφανερώθη ἐν σαρκί', translit: 'ephanerōthē en sarki', gloss: 'He was revealed in flesh', note: 'John 1:14 says the same thing: the Word made His dwelling among us.' },
    ],
  },
  '2ti-3-16': {
    title: 'All Scripture God-Breathed',
    principle:
      'All Scripture is given by inspiration of God and is profitable. First principle: the written Word is the Spirit\'s breath. That makes it authoritative, enough, and able to equip.',
    sourceKeywords: ['All scripture', 'given by inspiration of God', 'profitable', 'doctrine', 'reproof', 'correction', 'instruction', 'righteousness'],
    fulfillmentKeywords: ['holy men', 'God', 'spake', 'moved', 'Holy Ghost'],
    terms: [
      { term: 'inspiration', original: 'θεόπνευστος', translit: 'theopneustos', gloss: 'God-breathed / breathed out by God', note: 'This word is used only once in the NT. Its root is pneuma — Spirit.' },
    ],
  },
  '2ti-4-1': {
    title: 'Judge the Quick and the Dead',
    principle:
      'I charge you before God and Christ Jesus who shall judge the quick and the dead at His appearing. First principle: the returning Judge will ask His servants to give an account of their work.',
    sourceKeywords: ['charge', 'God', 'Christ Jesus', 'judge', 'quick', 'dead', 'appearing', 'kingdom'],
    fulfillmentKeywords: ['judge', 'quick', 'dead', 'appearing', 'kingdom'],
    terms: [
      { term: 'quick and the dead', original: 'ζώντων καὶ νεκρῶν', translit: 'zōntōn kai nekrōn', gloss: 'the living and the dead', note: 'Acts 10:42; 1 Pet 4:5 — Christ will judge every person.' },
    ],
  },
  'tit-2-13': {
    title: 'Looking for That Blessed Hope',
    principle:
      'Looking for that blessed hope and the glorious appearing of the great God and our Saviour Jesus Christ. First principle: waiting for that blessed hope is what keeps a Christian living rightly.',
    sourceKeywords: ['blessed hope', 'glorious appearing', 'great God', 'Saviour', 'Jesus Christ'],
    fulfillmentKeywords: ['appear', 'second time', 'looking', 'Lord', 'come'],
    terms: [
      { term: 'appearing', original: 'ἐπιφάνειαν', translit: 'epiphaneian', gloss: 'appearing, manifestation', note: 'The same word describes the first coming (2 Tim 1:10) and the second coming.' },
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
      'Daniel sees thrones set in place. The Ancient of Days takes His seat. The court sits in judgment, and the books are opened. Jesus, Paul, and Revelation all put judgment in God\'s court before the final kingdom. Textual proof: Dan 7:9-10 is a heavenly judgment scene. Dan 7:22 says judgment was given to the saints of the Most High. The verdict comes before the saints possess the kingdom.',
    sourceKeywords: ['thrones', 'cast down', 'Ancient of days', 'did sit', 'judgment', 'set', 'books', 'opened'],
    fulfillmentKeywords: ['judgment', 'set', 'thrones', 'books', 'opened', 'judged'],
    terms: [
      { term: 'judgment', original: 'דִּין', translit: 'din', gloss: 'judgment, legal case', note: 'The Aramaic word din means a court proceeding, not just destruction. Dan 7:22 links this judgment to the saints receiving the kingdom (cf. 1 Cor 6:2-3).' },
      { term: 'books were opened', original: 'סִפְרִין פְּתִיחוּ', translit: 'sifrin peticḥu', gloss: 'books were opened', note: 'The same picture of books appears in Rev 20:12 at the final judgment. It also appears in Exod 32:32-33 and Ps 139:16.' },
    ],
  },
  'dan-7-22': {
    title: 'Judgment Given to the Saints',
    principle:
      'The judgment came, and the saints of the Most High possessed the kingdom. Textual proof: the heavenly court in v9-10 gives its verdict, and then the saints receive dominion. Paul writes that the saints shall judge the world and even angels (1 Cor 6:2-3). Revelation 20:4 shows thrones and judgment given to those who reign with Christ.',
    sourceKeywords: ['judgment came', 'saints of the most High', 'possessed', 'kingdom'],
    fulfillmentKeywords: ['judge', 'world', 'angels', 'thrones', 'judgment'],
    terms: [
      { term: 'the judgment came', original: 'וּדְיָנָא יְהִיבַת', translit: 'u-deyana yehivat', gloss: 'and the judgment was given', note: 'The verb is passive, so God takes the initiative. The court\'s decision comes before the saints possess the kingdom.' },
    ],
  },
  'dan-8-14': {
    title: 'Unto 2,300 Days — Then the Sanctuary Cleansed',
    principle:
      'An holy one answers: unto two thousand and three hundred days; then shall the sanctuary be made right. Hebrews shows the earthly sanctuary as a pattern of the heavenly sanctuary (Heb 8:1-2; 9:23-24). Leviticus 16 describes the annual cleansing of the sanctuary by blood. Textual proof: Daniel\'s time prophecy ends at a sanctuary event. Hebrews puts Christ\'s ministry in the true tabernacle. Leviticus defines what "cleansed/right" means in the priestly setting — the sin that piled up is removed from the sanctuary.',
    sourceKeywords: ['two thousand and three hundred', 'days', 'sanctuary', 'cleansed'],
    fulfillmentKeywords: ['true tabernacle', 'greater', 'more perfect', 'heaven itself', 'purged', 'sanctuary'],
    terms: [
      { term: '2,300 evenings and mornings', original: 'עֶרֶב בֹּקֶר', translit: 'erev voqer', gloss: 'evening morning (≈ days)', note: 'This Hebrew idiom matches Gen 1, and it is a day-count. The count ends at an event that cleanses the sanctuary (cf. Lev 16:16-19; Heb 9:22-24).' },
      { term: 'made right / cleansed', original: 'וְנִצְדַּק', translit: 've-nitsdaq', gloss: 'and it shall be declared to be in the right / cleared / made righteous', note: 'Cadaq is the same root as "righteous." In the sanctuary setting, it means the sanctuary is purged and stands right before God.' },
    ],
  },
  'dan-9-24': {
    title: 'Seventy Weeks — Finish Transgression, Make Reconciliation',
    principle:
      'Seventy weeks are determined upon your people and your holy city. These weeks are counted in prophetic time, not on an ordinary calendar. The transgression is finished. Sins are ended. Reconciliation is made for iniquity. Everlasting righteousness is brought in. Vision and prophecy are sealed up. The Most Holy is anointed. Textual proof: the window includes Messiah\'s mission (v25-27). Hebrews 9:26 speaks of Christ appearing at the end of the ages to put away sin by Himself.',
    sourceKeywords: ['seventy weeks', 'determined', 'people', 'holy city', 'finish transgression', 'end of sins', 'reconciliation', 'iniquity', 'everlasting righteousness', 'seal up', 'vision', 'prophecy', 'anoint'],
    fulfillmentKeywords: ['put away sin', 'end of the world', 'appeared', 'once', 'reconciliation'],
    terms: [
      { term: 'seventy weeks', original: 'שָׁבֻעִים שִׁבְעִים', translit: 'shavuʿim shivʿim', gloss: 'seventy sevens / weeks', note: 'The weeks here are prophetic day-units. The six purposes are about the promised King, Jesus, and about how God saves people. They match the NT work of Christ.' },
    ],
  },
  'rev-12-17': {
    title: 'Remnant Who Keep God\'s Commandments',
    principle:
      'The dragon is wroth with the woman and goes to make war with the remnant of her seed, who keep the commandments of God and have the testimony of Jesus. Rev 14:12 defines the saints of the end time in the same way. It points to the patience of the saints, to those who keep the commandments of God, and to the faith of Jesus. Jesus said: if you love me, keep my commandments (John 14:15). Textual proof: what marks the remnant is obedience to God\'s commandments joined to faith in Christ. It is not a person\'s ethnic origin, and it is not a bare claim to belong to him.',
    sourceKeywords: ['remnant', 'seed', 'keep', 'commandments of God', 'testimony', 'Jesus'],
    fulfillmentKeywords: ['patience', 'saints', 'commandments of God', 'faith of Jesus', 'keep', 'commandments'],
    terms: [
      { term: 'remnant', original: 'λοιπόν', translit: 'loipon', gloss: 'the rest / remnant', note: 'The same idea of a remnant appears in Isa 10:20-22 and Rom 9:27. It means the faithful few who are left after a falling away.' },
      { term: 'keep the commandments', original: 'τηρούντων τὰς ἐντολὰς τοῦ θεοῦ', translit: 'tērountōn tas entolas tou theou', gloss: 'keeping the commandments of God', note: 'τηρέω — to guard and to keep, as a disciple keeps on obeying (John 14:15; 15:10).' },
    ],
  },
  'rev-14-7': {
    title: 'Fear God — The Hour of His Judgment',
    principle:
      'The first angel proclaims with a loud voice. Fear God, and give glory to Him; for the hour of His judgment is come; worship Him that made heaven, and earth, and the sea, and the fountains of waters. Textual proof: (1) this message announces a judgment that takes place before Jesus returns. "the hour of His judgment is come" precedes Christ\'s second coming in ch. 19. (2) The angel calls people to worship the Creator, and that echoes the Sabbath commandment (Exod 20:11). (3) Ecclesiastes closes with these words: Fear God, and keep his commandments (Eccl 12:13). (4) Acts 17:30-31: God commands all men to repent because he has fixed a day on which he will judge the world by the man Christ Jesus.',
    sourceKeywords: ['Fear God', 'give glory', 'hour of his judgment', 'is come', 'worship', 'made', 'heaven', 'earth', 'sea', 'fountains of waters'],
    fulfillmentKeywords: ['judge', 'quick', 'dead', 'appearing', 'day', 'judgment', 'Creator'],
    terms: [
      { term: 'the hour of His judgment', original: 'ἡ ὥρα τῆς κρίσεως αὐτοῦ', translit: 'hē hōra tēs kriseōs autou', gloss: 'the hour of His judgment', note: 'This is a fixed, appointed time of judgment. The same wording appears in John 5:22-27, where the Son is given judgment, and in Acts 17:31, where God appoints a day.' },
      { term: 'made heaven and earth', original: 'τὸν ποιήσαντα τὸν οὐρανὸν καὶ τὴν γῆν', translit: 'ton poiēsanta ton ouranon kai tēn gēn', gloss: 'the One who made heaven and earth', note: 'These words echo Exod 20:11 and Ps 146:6. The Creator is worshiped, not the creature.' },
    ],
  },
  'rev-14-12': {
    title: 'Patience, Commandments, and Faith of Jesus',
    principle:
      '"Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus." Textual proof: these words describe God\'s own people at the hour of judgment (v7) and when Babylon falls (v8). They obey God\'s commandments and rest in the faith of Christ. Those are the same marks that appear again in Rev 12:17. Jesus himself said: if you love me, keep my commandments (John 14:15).',
    sourceKeywords: ['patience', 'saints', 'keep', 'commandments of God', 'faith of Jesus'],
    fulfillmentKeywords: ['keep', 'commandments', 'faith', 'Jesus', 'love me'],
    terms: [
      { term: 'faith of Jesus', original: 'πίστιν Ἰησοῦ', translit: 'pistin Iēsou', gloss: 'faith / faithfulness of Jesus (Heb. genitive)', note: 'This can mean His faithfulness or faith in Him. Both readings are biblical. Either way, a person must trust Christ and obey him.' },
    ],
  },
  'rev-20-4': {
    title: 'Thrones, Judgment, and the First Resurrection',
    principle:
      'John sees thrones, and judgment is given to those who sit on them. The souls of the beheaded live and reign with Christ a thousand years. Textual proof: (1) judgment is given to saints (Dan 7:22; 1 Cor 6:2-3). (2) They live, and that means they are raised. They are not living on without a body. (3) The rest of the dead live not again until the thousand years are finished (v5). Therefore the dead are dead until Christ raises them (Dan 12:2; John 5:28-29; 1 Thess 4:16). The righteous dead receive life at Christ\'s return. The wicked stay dead until the second resurrection, after the thousand years.',
    sourceKeywords: ['thrones', 'judgment', 'souls', 'beheaded', 'witness of Jesus', 'word of God', 'live', 'reign', 'Christ', 'thousand years'],
    fulfillmentKeywords: ['dead in Christ', 'rise', 'resurrection', 'first', 'judgment'],
    terms: [
      { term: 'first resurrection', original: 'ἡ ἀνάστασις ἡ πρώτη', translit: 'hē anastasis hē prōtē', gloss: 'the resurrection, the first', note: 'The righteous are raised bodily when Christ comes (John 5:28-29; 1 Cor 15:23). Rev 20:5-6 shows the rest of the dead stay dead until later. So the dead do not go to heaven or hell at death.' },
      { term: 'souls', original: 'τὰς ψυχάς', translit: 'tas psychas', gloss: 'the souls / lives / persons', note: 'The word often means "persons" (Acts 2:41; 7:14). Here it means the martyrs themselves. They live by resurrection, not by already being in heaven.' },
    ],
  },
  'rev-20-5': {
    title: 'The Rest of the Dead Live Not Again',
    principle:
      'This is the first resurrection. Blessed and holy is he that has part in the first resurrection; the second death has no power over him. But the rest of the dead lived not again until the thousand years were finished. Textual proof: the dead are unconscious until they are raised (Eccl 9:5; Ps 6:5; 146:4; Dan 12:2). There are two resurrections. The just rise at Christ\'s return, and the unjust rise later (John 5:28-29; Acts 24:15). Immortality is a gift God gives at the resurrection. It is not something the soul has by nature (1 Cor 15:51-54).',
    sourceKeywords: ['first resurrection', 'rest of the dead', 'lived not again', 'thousand years', 'finished', 'blessed', 'holy', 'second death'],
    fulfillmentKeywords: ['resurrection of the dead', 'just', 'unjust', 'sleep', 'dust', 'awake'],
    terms: [
      { term: 'lived not again', original: 'οὐκ ἔζησαν', translit: 'ouk ezēsan', gloss: 'they did not live again', note: 'This plainly denies that the wicked dead live on in some conscious state before the later resurrection.' },
    ],
  },
  'rev-14-14': {
    title: 'One Like the Son of Man — Public Harvest',
    principle:
      '"A white cloud, and upon the cloud one sat like unto the Son of man, having on his head a golden crown." Textual proof: Daniel 7:13-14 shows the Son of Man coming with clouds, and dominion is given to him. Matthew 24:30-31 says they shall see the Son of man coming in the clouds with power and great glory. He gathers His elect with a great sound of a trumpet. This is the second coming, and it is visible and glorious. It is one event that the whole world will see, not a secret removal.',
    sourceKeywords: ['white cloud', 'sat', 'like unto the Son of man', 'golden crown', 'sharp sickle', 'thrust in'],
    fulfillmentKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'coming', 'gather', 'elect', 'trumpet'],
    terms: [
      { term: 'one like the Son of man', original: 'ὅμοιον υἱὸν ἀνθρώπου', translit: 'homoion huion anthrōpou', gloss: 'one like a son of man', note: 'The wording links Dan 7:13, Matt 24:30, and Rev 14:14. All three describe the same glorious coming.' },
    ],
  },

  // ── Gospels / Acts / Hebrews / General Epistles ─────────────────────────
  'mat-1-23': {
    title: 'Emmanuel — God With Us',
    principle:
      'Matthew quotes Isaiah 7:14: a virgin shall bear a son, and they shall call his name Emmanuel. Textual proof: this is a direct quotation of the OT, and Isaiah 8:8, 10 also use the name. Matthew is the one who tells us that Jesus is that child.',
    sourceKeywords: ['virgin', 'shall bring forth', 'son', 'call his name', 'Emmanuel', 'God with us'],
    fulfillmentKeywords: ['virgin', 'Emmanuel', 'God with us'],
    terms: [
      { term: 'Emmanuel', original: 'עִמָּנוּ אֵל', translit: 'Immanuʾel', gloss: 'with-us God', note: 'Isa 7:14 in the LXX has παρθένος. Matthew applies the same text to the birth of Jesus.' },
    ],
  },
  'mat-2-6': {
    title: 'Out of Bethlehem Shall Come a Governor',
    principle:
      'The chief priests cite Micah 5:2 to answer where the Messiah would be born. Textual proof: Matthew 2:5-6 quotes Micah. Micah 5:2 itself promises a ruler from Bethlehem whose goings forth are from everlasting.',
    sourceKeywords: ['Bethlehem', 'land of Juda', 'not the least', 'governor', 'rule', 'people Israel'],
    fulfillmentKeywords: ['Bethlehem', 'Ephratah', 'ruler', 'Israel', 'everlasting'],
    terms: [
      { term: 'Bethlehem Ephratah', original: 'בֵּית לֶחֶם אֶפְרָתָה', translit: 'Beit Lechem Ephratah', gloss: 'house of bread, Ephrathah', note: 'Mic 5:2 calls it little among the thousands of Judah. It is still the source of a ruler.' },
    ],
  },
  'mat-4-4': {
    title: 'It Is Written',
    principle:
      'Jesus answers temptation with Deuteronomy 8:3. Textual proof: each answer in the wilderness quotes Torah (Deut 8:3; 6:16; 6:13). Scripture has all the authority needed to answer the tempter.',
    sourceKeywords: ['It is written', 'Man shall not live', 'bread alone', 'every word', 'proceedeth', 'mouth of God'],
    fulfillmentKeywords: ['Deuteronomy', 'word of God', 'bread'],
    terms: [
      { term: 'It is written', original: 'γέγραπται', translit: 'gegraptai', gloss: 'it has been written (perfect)', note: 'This phrase is settled OT text that still stands. Jesus used it as His pattern of proof.' },
    ],
  },
  'mat-24-30': {
    title: 'Son of Man Coming in the Clouds',
    principle:
      '"They shall see the Son of man coming in the clouds of heaven with power and great glory." Textual proof: Jesus takes Daniel 7:13-14 as His own words. Mark 13:26, Luke 21:27, Rev 1:7, 14:14 echo it. The coming is public, visible and glorious. It is one coming.',
    sourceKeywords: ['Son of man', 'clouds of heaven', 'power', 'great glory', 'tribes of the earth', 'mourn'],
    fulfillmentKeywords: ['one like the Son of man', 'clouds of heaven', 'Ancient of days', 'dominion'],
    terms: [
      { term: 'coming in the clouds', original: 'ἐρχόμενον ἐπὶ τῶν νεφελῶν', translit: 'erchomenon epi tōn nephelōn', gloss: 'coming upon the clouds', note: 'Dan 7:13 LXX — the same coming on the clouds, and everyone will see it (Matt 24:27).' },
    ],
  },
  'joh-1-14': {
    title: 'The Word Became Flesh',
    principle:
      '"The Word was made flesh and dwelt among us." First principle: John 1:1 identifies the Word with God and as the agent of creation (1:3). Verse 14 says the Word dwelt among us. John uses the Greek word σκηνόω, the same root as the Old Testament tabernacle. Col 2:9 says that in Him all the fullness of the Godhead dwells bodily.',
    sourceKeywords: ['Word', 'was made flesh', 'dwelt', 'among us', 'glory', 'only begotten', 'Father', 'grace', 'truth'],
    fulfillmentKeywords: ['tabernacle', 'dwell', 'among them', 'glory'],
    terms: [
      { term: 'dwelt', original: 'ἐσκήνωσεν', translit: 'eskēnōsen', gloss: 'tabernacled / pitched His tent', note: 'Exod 25:8 / 40:34 — God dwelling among His people; fulfilled in incarnate Christ.' },
    ],
  },
  'joh-3-14': {
    title: 'As Moses Lifted Up the Serpent',
    principle:
      '"As Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up." First principle: Jesus points to the bronze serpent of Numbers 21:9 to explain His own death on the cross. The raised sign became the means of life for everyone who looks in faith.',
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
      '"For this purpose the Son of God was manifested, that he might destroy the works of the devil." Textual proof: Genesis 3:15 shows the seed of the woman crushing the serpent. Col 2:15 and Heb 2:14 show Christ destroying him that had the power of death.',
    sourceKeywords: ['Son of God', 'manifested', 'destroy', 'works', 'devil'],
    fulfillmentKeywords: ['bruise', 'head', 'serpent', 'destroy', 'power of death'],
    terms: [
      { term: 'destroy', original: 'λύσῃ', translit: 'lysē', gloss: 'he might loose / dissolve / destroy', note: 'Undoing the serpent\'s works — Gen 3:15 fulfilled in Christ\'s mission.' },
    ],
  },
  'jud-1-14': {
    title: 'Behold, the Lord Cometh',
    principle:
      '"Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints." Textual proof: Genesis 5:18-24 shows Enoch walking with God and being translated, and Hebrews 11:5 says the same. This prophetic word speaks of the second coming, and it agrees with Zech 14:5 and 2 Thess 1:7.',
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
      'Moses says the LORD will raise up a Prophet like him from among their brethren. Israel must hear that Prophet. Peter, Stephen, and John all say plainly that Jesus is this Prophet. At the Transfiguration the Father confirms it by saying "Hear Him!". First principle: Christ is the final Lawgiver. He stands between God and us. He speaks for the Father.',
    sourceKeywords: ['Prophet', 'raise up', 'unto me', 'brethren', 'hearken'],
    fulfillmentKeywords: ['Prophet', 'Moses', 'hearken', 'spake', 'hear', 'Beloved Son'],
    terms: [
      { term: 'Prophet', original: 'נָבִיא', translit: 'navi', gloss: 'prophet, spokesman of God', note: 'Deut 18:15 — one prophet, like Moses.' },
      { term: 'like unto me', original: 'כָּמֹנִי', translit: 'kamoni', gloss: 'like me', note: 'He stands between God and the people as mediator of a covenant, God\'s binding promise. He has face-to-face access to God (Deut 34:10; Heb 3:1-6).' },
      { term: 'Hear Him', original: 'ἀκούετε αὐτοῦ', translit: 'akouete autou', gloss: 'listen to Him!', note: 'Matt 17:5 — the Father gives the same command found at Deut 18:15 LXX, the Greek Old Testament.' },
    ],
  },
  'deu-18-18': {
    title: 'Words Put in His Mouth',
    principle:
      'God promises to put His words in the Prophet\'s mouth. That Prophet will speak everything God commands. Jesus says again and again that his teaching and his words are not his own. They belong to the Father who sent him. First principle: Christ is God\'s Word. He is never wrong, and he speaks last.',
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
      'God makes a covenant — a binding promise — with David. David\'s own son will come from him, and God will set up his kingdom. Luke tells how the angel Gabriel announced to Mary that Jesus will receive the throne of His father David. First principle: God\'s binding promise to David has no conditions attached. Nothing David does can cancel it.',
    sourceKeywords: ['seed', 'proceed', 'bowels', 'establish', 'kingdom', 'forever'],
    fulfillmentKeywords: ['throne', 'David', 'father', 'reign', 'kingdom', 'no end'],
    terms: [
      { term: 'seed', original: 'זַרְעֲךָ', translit: 'zarʿakha', gloss: 'your seed / offspring', note: 'Acts 2:30 and Rom 1:3 both take up this promise. Paul says Christ was made of the seed of David according to the flesh.' },
      { term: 'forever', original: 'עַד־עוֹלָם', translit: 'ʿad-ʿolam', gloss: 'unto eternity', note: 'Luke 1:33 — "and of his kingdom there shall be no end."' },
    ],
  },
  '2sa-23-5': {
    title: 'Everlasting Covenant — Branching Forth',
    principle:
      'David\'s last words are prophecy. He says God has made with him an everlasting covenant, "ordered in all things, and sure." That covenant does not rest on how well David did. It keeps working after every earthly failure, and it blossoms in Christ. First principle: the promise God gave David is stronger than the man who received it.',
    sourceKeywords: ['everlasting covenant', 'ordered', 'sure', 'salvation', 'grow', 'branch'],
    fulfillmentKeywords: ['everlasting covenant', 'blood', 'Branch', 'salvation', 'David'],
    terms: [
      { term: 'everlasting covenant', original: 'בְּרִית עוֹלָם', translit: 'berit ʿolam', gloss: 'covenant of eternity', note: 'Heb 13:20 — blood of the everlasting covenant.' },
      { term: 'make it grow', original: 'יַצְמִיחַ', translit: 'yatsmiach', gloss: 'He will cause to sprout / branch forth', note: 'This word comes from the same root as Tsemach, the Branch, in Jer 23:5 and Zech 6:12.' },
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
      'The women blessed the LORD, because he had not left Naomi without a redeemer. That redeemer would give her life back. Then Boaz redeemed Ruth, and she bore Obed, the grandfather of David. First principle: God brings Gentiles into the family line of the promised King, Jesus Christ, the Redeemer of the world.',
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
      'David opens Psalm 22 with the cry of a righteous sufferer who has been handed over to judgment. Jesus quotes this exact line from the cross. The psalm moves from that agony to the worship of all nations. First principle: on the cross Christ bore the curse of being forsaken, and he bore it in our place, so that the nations may be gathered to God.',
    sourceKeywords: ['My God', 'why hast thou forsaken me', 'roaring', 'cry in the daytime'],
    fulfillmentKeywords: ['forsaken', 'Eli', 'lama sabachthani', 'cried with a loud voice', 'yielded up the ghost'],
    terms: [
      { term: 'why hast thou forsaken me', original: 'לָמָה עֲזַבְתָּנִי', translit: 'lamah ʿazavtani', gloss: 'why have you forsaken / left me?', note: 'Aramaic in Matt 27:46: Eli, Eli, lama sabachthani — Christ\'s loud cry at the ninth hour. He cried it out aloud.' },
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
      'The Servant is wounded for our transgressions and bruised for our iniquities; the chastisement of our peace is upon Him, and by His stripes we are healed. Peter quotes this very verse. He says Christ bore our sins in His own body on the tree. First principle: the atonement — the price paid so sin can be forgiven — is a swap. The Servant suffers in our place. That is how our peace is secured.',
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
      '"And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son." John shows this verse coming true at the cross. Revelation shows every eye seeing him when he comes. The One they pierced is God himself. His piercing brings salvation, and it will also be seen by all at the end of the story.',
    sourceKeywords: ['pour', 'spirit of grace', 'supplications', 'look upon me whom they have pierced', 'mourn', 'only son'],
    fulfillmentKeywords: ['pierced', 'see him', 'mourn', 'clouds', 'side'],
    terms: [
      { term: 'they pierced', original: 'דָּקָרוּ', translit: 'daqaru', gloss: 'they pierced through / thrust through', note: 'John 19:37; Rev 1:7 ἐξεκέντησαν — same Hebrew and Greek verb.' },
    ],
  },
  'zec-13-7': {
    title: 'Smite the Shepherd',
    principle:
      'The LORD tells the sword to wake up and strike "My Shepherd, against the Man who is My Companion," and the sheep will be scattered. Jesus applied this prophecy to himself on the night of Gethsemane. He also applied it to his disciples, who ran away. The Shepherd is God\'s equal and companion, and he was struck because God willed it.',
    sourceKeywords: ['sword', 'shepherd', 'man that is my fellow', 'smite the shepherd', 'sheep scattered'],
    fulfillmentKeywords: ['smite the shepherd', 'sheep', 'scattered', 'all ye shall be offended'],
    terms: [
      { term: 'My Companion', original: 'עֲמִיתִי', translit: 'ʿamiti', gloss: 'my associate, equal, near fellow', note: 'Strong term for kinship/equality with YHWH; Matt 26:31.' },
    ],
  },
  'deu-30-6': {
    title: 'Circumcision of the Heart',
    principle:
      'God promises that after the exile and after his people turn back to him, the LORD will circumcise their hearts. Then they will love him with all their heart and soul. Paul explains that the circumcision that counts is not the outward mark in the flesh. It is the work of the Spirit in the heart. First principle: real obedience to the covenant, God\'s binding promise, requires God to work inside a person and make the heart new.',
    sourceKeywords: ['circumcise', 'heart', 'seed', 'love the LORD thy God', 'all thine heart', 'live'],
    fulfillmentKeywords: ['circumcision', 'heart', 'spirit', 'new creature', 'put off'],
    terms: [
      { term: 'circumcise the heart', original: 'וּמָל יְהוָה אֶת־לְבָבְךָ', translit: 'umāl YHWH ʾet-levavekha', gloss: 'and YHWH will circumcise your heart', note: 'Rom 2:29; Col 2:11 — circumcision made without hands in putting off the body of sins.' },
    ],
  },
  'jer-31-31': {
    title: 'The New Covenant',
    principle:
      '"Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah." This is God\'s binding promise, and it is a new one. It is not like the covenant He made with their fathers at Sinai. That one they broke. He will put His law in their inward parts. He will write it on their hearts. He will be their God, and they shall be my people. He will forgive their iniquity. He will remember their sin no more. Jesus begins this covenant in His blood. Hebrews quotes this entire text as the foundation of the Christian faith. First principle: the new covenant writes God\'s law on hearts. It gives everyone a direct knowledge of God. It secures a forgiveness that is complete.',
    sourceKeywords: ['new covenant', 'house of Israel', 'write it in their hearts', 'their God', 'forgive their iniquity', 'remember their sin no more'],
    fulfillmentKeywords: ['new covenant', 'blood', 'cup', 'law in hearts', 'sins remembered no more', 'better covenant'],
    terms: [
      { term: 'new covenant', original: 'בְּרִית חֲדָשָׁה', translit: 'berit chadashah', gloss: 'a new covenant', note: 'Greek διαθήκη καινή (diathēkē kainē) in Luke 22:20; Heb 8:8; 9:15.' },
    ],
  },
  'ezk-36-26': {
    title: 'A New Heart and a Heart of Flesh',
    principle:
      'God promises to sprinkle clean water on His people and wash them from all their idols. He takes away the stony heart and gives them a heart of flesh. He puts His Spirit within them, and the Spirit causes them to walk in His statutes. First principle: God\'s Spirit gives life where the spirit was dead, and that life shows up as willing obedience.',
    sourceKeywords: ['new heart', 'new spirit', 'take away the stony heart', 'heart of flesh', 'put my spirit within you'],
    fulfillmentKeywords: ['born of water and spirit', 'Spirit', 'fleshy tables of the heart', 'walk in the Spirit'],
    terms: [
      { term: 'heart of flesh', original: 'לֵב בָּשָׂר', translit: 'lev basar', gloss: 'heart of flesh (tender, responsive)', note: '2 Cor 3:3 — fleshy tables of the heart (πλαξὶν καρδίας σαρκίναις).' },
    ],
  },
  'job-19-25': {
    title: 'I Know That My Redeemer Liveth',
    principle:
      'Job is in agony, and his friends have all turned away. Still he makes this monumental confession: "I know that my Redeemer lives, and He shall stand at the last upon the earth; and after my skin is destroyed, yet in my flesh I shall see God." First principle: bodily resurrection and personal vindication through an eternal Kinsman-Redeemer are anchored in the oldest poetry of Scripture.',
    sourceKeywords: ['know', 'Redeemer liveth', 'stand at the latter day', 'earth', 'in my flesh', 'see God'],
    fulfillmentKeywords: ['Redeemer', 'resurrection', 'flesh', 'see him as he is', 'raised incorruptible'],
    terms: [
      { term: 'my Redeemer lives', original: 'גֹּאֲלִי חָי', translit: 'goʾali chay', gloss: 'my living redeemer / vindicator', note: 'Personal Go\'el who avenges and restores; 1 Cor 15:20.' },
    ],
  },
  'ezk-37-12': {
    title: 'Graves Opened — Dry Bones Revived',
    principle:
      'The LORD commands Ezekiel to prophesy to the dry bones in the valley: "Behold, O My people, I will open your graves, and cause you to come up out of your graves... and put My Spirit in you, and you shall live." Jesus echoes this in John 5: all who are in the graves shall hear His voice and come forth. First principle: God\'s Spirit has power over physical death and over the exile of a whole nation.',
    sourceKeywords: ['open your graves', 'cause you to come up', 'my people', 'land of Israel', 'spirit', 'live'],
    fulfillmentKeywords: ['graves', 'hear his voice', 'come forth', 'resurrection of life', 'raised'],
    terms: [
      { term: 'open your graves', original: 'פֹּתֵחַ אֶת־קִבְרוֹתֵיכֶם', translit: 'poteach ʾet-qivrotekhem', gloss: 'I will open your graves', note: 'John 5:28 — "all that are in the graves shall hear his voice."' },
    ],
  },
  'jol-2-28': {
    title: 'Pour Out My Spirit on All Flesh',
    principle:
      'The LORD promises that in the last days He will pour out His Spirit on all people. Sons and daughters will prophesy, old men will dream dreams, and young men will see visions. Peter quotes this at Pentecost and says it came true. The risen and exalted Christ poured out the Holy Spirit. First principle: the Spirit is no longer limited to prophets, priests, or kings. He now lives inside the whole community that God has joined to Himself.',
    sourceKeywords: ['pour out my spirit', 'all flesh', 'sons and daughters prophesy', 'dreams', 'visions', 'servants and handmaids'],
    fulfillmentKeywords: ['poured forth', 'Holy Ghost', 'prophesy', 'tongues', 'last days'],
    terms: [
      { term: 'pour out my spirit', original: 'אֶשְׁפּוֹךְ אֶת־רוּחִי', translit: 'ʾeshpokh ʾet-ruchi', gloss: 'I will pour out my Spirit', note: 'Acts 2:17-18 ἐκχεῶ ἀπὸ τοῦ πνεύματός μου — Peter\'s Pentecost text.' },
    ],
  },
  'jol-2-32': {
    title: 'Whosoever Calls on the Name of the LORD',
    principle:
      'Joel says that everyone who calls on the name of the LORD will be saved. He says deliverance will be in Mount Zion and in Jerusalem. Peter in Acts 2 and Paul in Romans 10 both quote this verse. They use it to proclaim salvation through calling on Jesus as Lord. First principle: God saves everyone who calls on Him in faith.',
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
      'God promises to send his messenger to prepare the way ahead of him. Then the Lord they are looking for will come suddenly to his temple. He is the Messenger of the Covenant. Jesus names John the Baptist as that messenger. He names himself as the Lord who visits his temple. God does not arrive unannounced.',
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
      '"Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD." God sends Elijah to turn the hearts of fathers to their children, and the hearts of children to their fathers. The angel Gabriel announced that John the Baptist would minister "in the spirit and power of Elijah." Jesus himself said plainly that John was the Elijah of the first coming. God\'s messengers turn hearts back to him before judgment falls.',
    sourceKeywords: ['Elijah the prophet', 'great and dreadful day of the LORD', 'turn the heart', 'fathers to children'],
    fulfillmentKeywords: ['spirit and power of Elias', 'Elias is come already', 'restore all things', 'John the Baptist'],
    terms: [
      { term: 'Elijah the prophet', original: 'אֵלִיָּה הַנָּבִיא', translit: 'Eliyyah ha-navi', gloss: 'Elijah the prophet (Yah is my God)', note: 'Luke 1:17 and Matt 17:11-13 show John confronting false worship and calling people back to the true God.' },
      { term: 'turn the heart', original: 'וְהֵשִׁיב לֵב', translit: 've-heshiv lev', gloss: 'and he will turn back / restore the heart', note: 'LXX ἐπιστρέψαι καρδίας — repentance and moral turning.' },
    ],
  },
  'isa-40-3': {
    title: 'Voice Crying in the Wilderness',
    principle:
      'A herald cries in the barren desert. His job is to prepare the way of the LORD. He is to level a highway for our God. All four Gospels apply this prophecy to John the Baptist. John preached in the wilderness and baptized at the Jordan. First principle: the road for God\'s arrival is not built by worldly power. It is built by repentance in the desert. Repentance means people turn from their sin. It means they bow low before God.',
    sourceKeywords: ['voice of him that crieth', 'wilderness', 'Prepare ye the way of the LORD', 'highway for our God'],
    fulfillmentKeywords: ['voice of one crying in the wilderness', 'repent', 'kingdom of heaven', 'make his paths straight'],
    terms: [
      { term: 'prepare the way of the LORD', original: 'פַּנּוּ דֶּרֶךְ יְהוָה', translit: 'pannu derekh YHWH', gloss: 'clear / prepare the way of YHWH', note: 'Matt 3:3; Mark 1:3; John 1:23 all point to Jesus. He is YHWH, and the highway is prepared for him.' },
    ],
  },
  'deu-11-14': {
    title: 'The Early and Latter Rain',
    principle:
      'God promises rain for the land at the right season. He sends the first rain, also called the former rain (yoreh), to start the seed growing. He sends the latter rain (malqosh) to bring the harvest to full ripeness. This farm rhythm shows how the Holy Spirit works in two outpourings. The early rain came at Pentecost and started the Christian church growing. The latter rain comes at the end of time to ripen the harvest of the earth for Christ\'s return. First principle: a spiritual harvest depends entirely on God pouring out his grace at the times he has set.',
    sourceKeywords: ['rain of your land', 'due season', 'first rain', 'latter rain', 'gather in thy corn'],
    fulfillmentKeywords: ['early and latter rain', 'husbandman', 'patience', 'precious fruit', 'coming of the Lord'],
    terms: [
      { term: 'first / early rain', original: 'יוֹרֶה', translit: 'yoreh', gloss: 'early rain (autumn rain for sowing)', note: 'A real earlier event that points forward to the early outpouring of the Spirit (Acts 2).' },
      { term: 'latter rain', original: 'מַלְקוֹשׁ', translit: 'malqosh', gloss: 'latter rain (spring rain for ripening)', note: 'In James 5:7 the Greek reads ὑετὸν ὄψιμον (hyeton opsimon). This is the last rain that ripens the crop before harvest.' },
    ],
  },
  'hos-6-3': {
    title: 'He Shall Come as the Rain',
    principle:
      'Hosea tells Israel to keep seeking the LORD. God will come back to His people as surely as the sunrise. He will come like the rain that waters the dry ground. First principle: God\'s presence brings new life to the person who turns back to Him.',
    sourceKeywords: ['follow on to know the LORD', 'going forth', 'morning', 'come unto us as the rain', 'latter and former rain'],
    fulfillmentKeywords: ['rain', 'revive', 'third day', 'live in his sight', 'Spirit'],
    terms: [
      { term: 'as the rain', original: 'כַּגֶּשֶׁם', translit: 'ka-geshem', gloss: 'like the pouring rain / shower', note: 'Abundant downpour of spiritual life.' },
    ],
  },
  'jol-2-23': {
    title: 'The Former and Latter Rain for Zion',
    principle:
      'Zion is commanded to rejoice in the LORD. He gives the former rain faithfully, and He sends both the former and the latter rain. This leads straight into the promise that God pours out His Spirit on all flesh (Joel 2:28). First principle: the restored harvest on earth pictures the last-days outpouring of the Holy Spirit.',
    sourceKeywords: ['children of Zion', 'rejoice in the LORD', 'former rain moderately', 'former rain and the latter rain', 'first month'],
    fulfillmentKeywords: ['pour out my spirit', 'harvest', 'rain', 'Pentecost', 'glory'],
    terms: [
      { term: 'former rain faithfully', original: 'הַמּוֹרֶה לִצְדָקָה', translit: 'ham-moreh litsdaqah', gloss: 'the teacher of righteousness / the rain in measure of righteousness', note: 'Dual Hebrew meaning: both teacher of righteousness and early rain, linking truth-teaching with the Spirit\'s power.' },
    ],
  },
  'zec-10-1': {
    title: 'Ask Rain in the Time of the Latter Rain',
    principle:
      'God\'s people must ask him for rain in the season of the latter rain. He answers with bright storm clouds and showers that fall on every field. Jesus and the apostles teach that the church must ask for the Holy Spirit in the same persistent way. That prayer prepares the church for the final harvest. God\'s promise of power does not remove the need to pray; it creates it.',
    sourceKeywords: ['Ask ye of the LORD rain', 'time of the latter rain', 'bright clouds', 'showers of rain'],
    fulfillmentKeywords: ['ask', 'Holy Spirit', 'Father in heaven', 'latter rain', 'fruit'],
    terms: [
      { term: 'in the time of the latter rain', original: 'בְּעֵת מַלְקוֹשׁ', translit: 'be-ʿet malqosh', gloss: 'in the season of the latter rain', note: 'Prophetic imperative to pray for the Spirit\'s final ripening power.' },
    ],
  },
  'jam-5-7': {
    title: 'James Tells Believers to Wait Patiently for the Lord\'s Coming',
    principle:
      'James tells believers to be patient until the coming of the Lord. Watch how the farmer waits for the precious fruit of the earth. The farmer waits until it receives the early and latter rain. Christian character must ripen, and the gospel mission must be finished, and both need the final spiritual rain. That rain comes before the harvest of the earth (Rev 14:14-16). First principle: endurance in the last days is sustained by the promise of the Spirit\'s harvest rain.',
    sourceKeywords: ['patient', 'coming of the Lord', 'husbandman', 'precious fruit', 'early and latter rain'],
    fulfillmentKeywords: ['harvest of the earth', 'ripe', 'thrust in thy sickle', 'Son of man'],
    terms: [
      { term: 'early and latter rain', original: 'πρόϊμον καὶ ὄψιμον', translit: 'proïmon kai opsimon', gloss: 'early and late rain', note: 'James 5:7 directly preserves the Hebrew agricultural type (yoreh and malqosh) for the second advent.' },
    ],
  },

  // ── Historic Master Pillars & Safeguards Against Strange Doctrines ──────────
  'isa-8-20': {
    title: 'To the Law and to the Testimony — the Standard That Tests All Teaching',
    principle:
      'Isaiah gives the test that settles every teaching and every prophecy. Here is the test: “To the law and to the testimony: if they speak not according to this word, it is because there is no light in them.” Any teaching that contradicts the moral law, the Torah, is rejected as a strange doctrine. The same is true of teaching that contradicts the prophets and the apostles. First principle: God\'s revealed law is the highest standard of spiritual truth. So is the agreement of the whole Bible with itself.',
    sourceKeywords: ['To the law', 'testimony', 'speak not according to this word', 'no light in them'],
    fulfillmentKeywords: ['search the scriptures', 'commandments of God', 'faith of Jesus', 'sound doctrine'],
    terms: [
      { term: 'law', original: 'תּוֹרָה', translit: 'torah', gloss: 'instruction, direction, moral law of God', note: 'The law is the foundation of what is right. It shows how righteous God is.' },
      { term: 'testimony', original: 'תְּעוּדָה', translit: 'teʿudah', gloss: 'testimony, witness, attested prophetic message', note: 'The word is echoed in Rev 12:17 and 19:10. There it names the testimony of Jesus, the spirit of prophecy.' },
      { term: 'no light', original: 'אֵין שַׁחַר', translit: 'ʾein shachar', gloss: 'no dawn / no morning light', note: 'There is no divine truth here at all. It is total spiritual darkness.' },
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
    title: 'Decree of Artaxerxes (457 BC). This decree gives the starting date for the Messiah and for the 2,300 days.',
    principle:
      'King Artaxerxes gave Ezra a long decree. It gave Ezra full authority to restore Jerusalem and to rebuild it. It let him appoint judges and magistrates. It put the laws of God back in force. The decree is dated 457 BC, in the autumn of Artaxerxes\' 7th year. That date is the firm starting point for the 70 weeks of Daniel 9:25 and for the 2,300 days of Daniel 8:14. First principle: prophecy stands on history you can check. The exact date of the Messiah\'s first coming confirms the timeline for the cleansing of the heavenly sanctuary.',
    sourceKeywords: ['decree', 'Artaxerxes', 'Ezra the priest', 'commandments of the LORD', 'statutes to Israel'],
    fulfillmentKeywords: ['commandment to restore and to build Jerusalem', 'Messiah the Prince', 'seventy weeks', 'two thousand and three hundred days'],
    terms: [
      { term: 'decree / letter', original: 'פַּתְשֶׁגֶן הַנִּשְׁתְּוָן', translit: 'patshegen han-nishtevan', gloss: 'copy of the letter, a royal decree (Aramaic/Persian)', note: 'Ezra 7:11-26 gives the full legal text that let the Jewish people run their own courts again in 457 BC.' },
    ],
  },
  'ezk-20-12': {
    title: 'The Sabbath — Sign of Sanctification and Creator-Covenant',
    principle:
      'God gives His Sabbaths as a lasting sign between Him and His people. The sign marks them as His own, so they know that He is the LORD who makes them holy. Genesis 2:1-3 and Exodus 20:8-11 stand behind this, and the Sabbath still marks out those who worship the Creator. First principle: sanctification is not self-righteous works; the Sabbath signifies resting from our own works in the finished work of the Creator and Redeemer, who makes them holy.',
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
      'As the new heavens and the new earth shall remain before the LORD, so from one new moon to another, and from one Sabbath to another, all flesh shall come to worship before Me. The seventh-day Sabbath runs all the way through the story. It begins in Eden before sin (Gen 2:1-3). It is commanded at Sinai (Exod 20:8-11). Jesus kept it as his own custom (Luke 4:16). It carries on into the world to come. First principle: the Sabbath was never a temporary shadow that ended with Levi. It is the lasting rhythm of worship. It honours the Creator of everything.',
    sourceKeywords: ['new heavens', 'new earth', 'remain before me', 'from one sabbath to another', 'all flesh shall come to worship'],
    fulfillmentKeywords: ['new heavens and new earth', 'worship', 'sabbath', 'reign for ever and ever'],
    terms: [
      { term: 'from one Sabbath to another', original: 'מִדֵּי שַׁבָּת בְּשַׁבַּתּוֹ', translit: 'mid-dei shabbat be-shabbatto', gloss: 'from sabbath to its sabbath / weekly cycle', note: 'Affirms seventh-day worship in the restored cosmos.' },
    ],
  },
  'ecc-9-5': {
    title: 'The State of the Dead — The Dead Know Not Anything',
    principle:
      'First principle: conditional immortality. The endless life is a gift God gives. We do not have it by ourselves. The living know that they shall die. The dead know not anything. They have no more a portion in anything done under the sun. Psalm 146:4 agrees: "his breath goeth forth... in that very day his thoughts perish". So death is an unconscious sleep. The word nephesh means the whole living person. That person comes apart at death. The dead wait asleep for the physical resurrection at Christ\'s return. The serpent said, "Ye shall not surely die". The whole Bible proves that lie false.',
    sourceKeywords: ['living know that they shall die', 'dead know not anything', 'neither have they any more a reward', 'memory of them is forgotten'],
    fulfillmentKeywords: ['sleep', 'resurrection of the dead', 'awake', 'mortal put on immortality', 'second death'],
    terms: [
      { term: 'know not anything', original: 'אֵינָם יוֹדְעִים מְאוּמָה', translit: 'ʾeinam yodeʿim meʾumah', gloss: 'they do not know anything at all', note: 'A dead person knows nothing at all. Every thought stops until the resurrection.' },
    ],
  },
  'psa-146-4': {
    title: 'His Breath Goeth Forth — Thoughts Perish in That Day',
    principle:
      'When man dies, his breath (ruach) departs, he returns to his earth, and in that very day his thoughts perish. Immortality belongs to God alone (1 Tim 6:16). He gives it to the righteous only as a gift at the second coming of Christ (1 Cor 15:51-54). First principle: a person is one whole being, body and breath together (Gen 2:7). When the breath of life leaves, no soul drifts on somewhere else, either in bliss or in torment.',
    sourceKeywords: ['breath goeth forth', 'returneth to his earth', 'very day his thoughts perish'],
    fulfillmentKeywords: ['God alone hath immortality', 'sleep in Jesus', 'last trump', 'raised incorruptible'],
    terms: [
      { term: 'breath / spirit', original: 'רוּחוֹ', translit: 'rucho', gloss: 'his breath / life-animating power from God', note: 'Eccl 12:7 — spirit returns to God who gave it. It is the life-giving power, not an independent ghost.' },
      { term: 'his thoughts', original: 'עֶשְׁתֹּנֹתָיו', translit: 'ʿeshtonotav', gloss: 'his thoughts, plans, mental operations', note: 'Total cessation of cognitive consciousness.' },
    ],
  },
  '1ti-6-16': {
    title: 'God Alone Hath Immortality — Conditional Gift in Christ',
    principle:
      'The King of kings and Lord of lords "who only hath immortality, dwelling in the light which no man can approach unto." Scripture never speaks of an immortal human soul. God made the first man able to live for ever, but only on a condition (Gen 2:16-17). He lost access to the tree of life when he sinned (Gen 3:22-24). He receives immortality only through the gospel and the resurrection of his body at the last trumpet (2 Tim 1:10; 1 Cor 15:53-54). First principle: life is in the Son; he that hath not the Son hath not life (1 John 5:12).',
    sourceKeywords: ['only hath immortality', 'dwelling in the light', 'King of kings', 'Lord of lords'],
    fulfillmentKeywords: ['this mortal must put on immortality', 'resurrection of life', 'gift of God is eternal life', 'tree of life'],
    terms: [
      { term: 'immortality', original: 'ἀθανασίαν', translit: 'athanasian', gloss: 'deathlessness, immortality', note: 'Scripture uses this word only of God himself, who has life in himself. It is used again of God\'s redeemed people after the resurrection (1 Cor 15:53).' },
    ],
  },
  'rev-14-6': {
    title: 'The First Angel\'s Message — The Everlasting Gospel to All Nations',
    principle:
      'John sees an angel fly in the midst of heaven. The angel has the everlasting gospel to preach unto them that dwell on the earth, and to every nation, kindred, tongue, and people. This gospel is not a new doctrine. It is God\'s eternal binding promise of grace, and it stands on the sacrifice and righteousness of Christ. It is proclaimed with urgency across the whole sky, right before the harvest of the earth. First principle: the truth for the end time restores the everlasting gospel to its first purity.',
    sourceKeywords: ['angel fly in the midst of heaven', 'everlasting gospel', 'preach unto them that dwell on the earth', 'every nation', 'kindred', 'tongue', 'people'],
    fulfillmentKeywords: ['gospel of the kingdom', 'all nations', 'then shall the end come', 'righteousness of faith'],
    terms: [
      { term: 'everlasting gospel', original: 'εὐαγγέλιον αἰώνιον', translit: 'euangelion aiōnion', gloss: 'eternal good news', note: 'The message never changes. God buys people back through Christ, from Genesis to Revelation.' },
      { term: 'midst of heaven', original: 'μεσουρανήματι', translit: 'mesouranēmati', gloss: 'mid-heaven, zenith', note: 'The whole world can see the angel, and the message carries great authority.' },
    ],
  },
  'rev-14-8': {
    title: 'The Second Angel\'s Message — Babylon is Fallen',
    principle:
      'Another angel follows, saying: "Babylon is fallen, is fallen, that great city, because she made all nations drink of the wine of the wrath of her fornication." Babylon stands for religious systems that have fallen away. They no longer hold that Scripture alone is the authority, they join church and state, and they put human teaching in the place of the Word of God. Those teachings include Sunday sacredness, the immortal soul, and works-righteousness. First principle: God calls His people to see spiritual apostasy for what it is and to separate from corrupt religious alliances.',
    sourceKeywords: ['Babylon is fallen', 'great city', 'wine of the wrath of her fornication', 'all nations'],
    fulfillmentKeywords: ['Come out of her my people', 'fall of Babylon', 'mother of harlots', 'abominations of the earth'],
    terms: [
      { term: 'is fallen, is fallen', original: 'ἔπεσεν, ἔπεσεν', translit: 'epesen, epesen', gloss: 'fell, fell (prophetic aorist / certainty)', note: 'These words echo Isaiah 21:9 and Jeremiah 51:8. The falling away from God is moral, and it happens step by step.' },
      { term: 'wine of her fornication', original: 'τοῦ οἴνου τοῦ θυמוῦ τῆς πορνείας', translit: 'tou oinou tou thymou tēs porneias', gloss: 'the wine of the passion/wrath of her unfaithfulness', note: 'False doctrines intoxicating the nations.' },
    ],
  },
  'rev-14-9': {
    title: 'The Third Angel\'s Message — Warning Against the Beast and His Mark',
    principle:
      'The third angel sounds with a loud voice. He warns against worshiping the beast and his image and against receiving his mark in forehead or hand. This is the most terrible warning in the whole of Scripture. The mark of the beast is a false seal of authority. It is set against the seal of God, and that seal is the Sabbath of the Creator. First principle: the last conflict is over worship. It is obedience to God\'s commandments against submission to human religious laws.',
    sourceKeywords: ['If any man worship the beast', 'his image', 'receive his mark in his forehead', 'in his hand', 'wine of the wrath of God'],
    fulfillmentKeywords: ['seal of God', 'mark of the beast', 'commandments of God', 'patience of the saints'],
    terms: [
      { term: 'mark', original: 'χάραγμα', translit: 'charagma', gloss: 'stamp, mark, impress, badge of servitude', note: 'A false sign of loyalty, set against the seal (sphragis) of the living God.' },
      { term: 'wrath of God', original: 'τοῦ θυμοῦ τοῦ θεοῦ', translit: 'tou thymou tou theou', gloss: 'the unmingled indignation of God', note: 'The seven last plagues are poured out with no mercy mixed in. They fall on people who refuse to repent.' },
    ],
  },
  'rev-18-1': {
    title: 'The Loud Cry — Earth Lightened with His Glory',
    principle:
      'John sees another angel come down from heaven having great power, and the earth was lightened with his glory. This is the last great outpouring of the Holy Spirit, the Latter Rain. It gives the Three Angels\' Messages their "Loud Cry", and that cry calls every honest person: "Come out of her, My people, that ye be not partakers of her sins" (Rev 18:4). First principle: God never brings judgment without first showing his character and his truth as fully as they can be shown.',
    sourceKeywords: ['angel come down from heaven', 'great power', 'earth was lightened with his glory', 'Loud Cry', 'Come out of her my people'],
    fulfillmentKeywords: ['latter rain', 'Habakkuk 2:14', 'glory of the Lord', 'harvest of the earth'],
    terms: [
      { term: 'lightened with his glory', original: 'ἐφωτίσθη ἐκ τῆς δόξης αὐτοῦ', translit: 'ephōtisthē ek tēs doxēs autou', gloss: 'was illuminated from His glory', note: 'The last worldwide display of God\'s loving and righteous character.' },
    ],
  },
  'isa-14-12': {
    title: 'Lucifer\'s Fall — Origin of the Great Controversy',
    principle:
      'How art thou fallen from heaven, O Lucifer, son of the morning! For thou hast said in thine heart: "I will ascend into heaven, I will exalt my throne above the stars of God... I will be like the most High." Isaiah shows how sin began in heaven. The first sin was pride. The sinner lifted himself above God. He rebelled against the good law of his Maker. First principle: sin did not come from any flaw in God\'s creation. It came from a created being. His pride made no sense. He wanted to be supreme without being righteous.',
    sourceKeywords: ['fallen from heaven', 'Lucifer', 'son of the morning', 'exalt my throne', 'I will be like the most High'],
    fulfillmentKeywords: ['war in heaven', 'dragon cast out', 'pride', 'lake of fire', 'bruise Satan'],
    terms: [
      { term: 'Lucifer / Shining One', original: 'הֵילֵל בֶּן־שָׁחַר', translit: 'heilel ben-shachar', gloss: 'shining one, son of the dawn', note: 'He was the highest of the cherubs. He chose to exalt himself instead of worshipping humbly.' },
      { term: 'I will be like the Most High', original: 'אֶדַּמֶּה לְעֶלְיוֹן', translit: 'ʾeddammeh le-ʿelyon', gloss: 'I will make myself like the Supreme God', note: 'This is the ambition at the root of Satan\'s sin. It lies under all false worship.' },
    ],
  },
  'ezk-28-12': {
    title: 'The Covering Cherub — Perfection Corrupted by Iniquity',
    principle:
      'The lament over the prince of Tyre shows what lies behind the visible world: "Thou sealest up the sum, full of wisdom, and perfect in beauty. Thou hast been in Eden the garden of God... Thou art the anointed cherub that covereth... Thou wast perfect in thy ways from the day that thou wast created, till iniquity was found in thee." First principle: God created Lucifer holy and free. That freedom made love possible, and it also let the mystery of iniquity arise.',
    sourceKeywords: ['sealest up the sum', 'full of wisdom', 'perfect in beauty', 'Eden the garden of God', 'anointed cherub that covereth', 'till iniquity was found in thee'],
    fulfillmentKeywords: ['war in heaven', 'cast down to the ground', 'destruction of Satan', 'affliction shall not rise again'],
    terms: [
      { term: 'anointed cherub that covereth', original: 'כְּרוּב מִמְשַׁח הַסּוֹכֵךְ', translit: 'keruv mimshach has-sokhekh', gloss: 'the anointed guardian cherub', note: 'This cherub stood beside the very throne and mercy seat of God in the heavenly sanctuary — God\'s dwelling place.' },
      { term: 'iniquity was found in thee', original: 'נִמְצָא עַוְלָתָה בָּךְ', translit: 'nimtsa ʿavlah bakh', gloss: 'unrighteousness / perversity was found in you', note: 'Unprovoked, inexplicable rebellion against infinite divine love.' },
    ],
  },
  'nam-1-9': {
    title: 'Affliction Shall Not Rise Up the Second Time — Final Vindication',
    principle:
      'What do ye imagine against the LORD? He will make an utter end: affliction shall not rise up the second time. At the end of the Great Controversy, sin and sinners are completely consumed in the lake of fire (Mal 4:1-3; Rev 20:14). Then the universe will be eternally secured. God does not secure it by force. He secures it because He has shown His justice, His mercy, and His law to every created intelligence. First principle: eternal security. Sin will never again arise, because its true character has been exposed forever.',
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
      '"Surely the Lord GOD will do nothing, but He revealeth His secret unto His servants the prophets." God warns and protects His people through the prophets at every turning point: the Flood, the Exodus, the First Advent, and the End Times. First principle: prophecy is God\'s chosen way to warn and instruct His people under His binding promise.',
    sourceKeywords: ['Lord GOD will do nothing', 'revealeth his secret', 'unto his servants the prophets'],
    fulfillmentKeywords: ['spirit of prophecy', 'testimony of Jesus', 'gift of prophecy', 'Joel 2:28', 'Revelation 19:10'],
    terms: [
      { term: 'His secret / counsel', original: 'סוֹדוֹ', translit: 'sodo', gloss: 'His secret counsel, intimate circle, divine decree', note: 'God shares His plans for saving people with the prophets who serve Him.' },
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
      'John falls down to worship the angel, and the angel commands: "See thou do it not: I am thy fellowservant, and of thy brethren that have the testimony of Jesus: worship God: for the testimony of Jesus is the spirit of prophecy." In Revelation 22:9, the angel sets "thy brethren that have the testimony of Jesus" beside "thy brethren the prophets." First principle: this marks the church of the last days, the faithful few who are left (Rev 12:17). The prophetic voice speaks among them by the Holy Spirit, and that voice is alive.',
    sourceKeywords: ['worship God', 'testimony of Jesus', 'spirit of prophecy', 'fellowservant'],
    fulfillmentKeywords: ['remnant church', 'Revelation 12:17', 'Revelation 22:9', 'Amos 3:7', 'commandments of God'],
    terms: [
      { term: 'the testimony of Jesus', original: 'ἡ μαρτυρία Ἰησοῦ', translit: 'hē martyria Iēsou', gloss: 'the testimony of Jesus / the witness Jesus bears', note: 'The phrase means the message comes from Jesus. He gives it to His people through prophets.' },
      { term: 'spirit of prophecy', original: 'τὸ πνεῦμα τῆς προφητείας', translit: 'to pneuma tēs prophēteias', gloss: 'the Holy Spirit inspiring the prophetic gift', note: 'This shows the prophetic gift is still at work among the faithful few who are left.' },
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
    title: 'The Earth Desolated and Chaotic During the Millennial Prison',
    principle:
      'Jeremiah sees the earth in a vision: "I beheld the earth, and, lo, it was without form, and void; and the heavens, and they had no light... I beheld, and, lo, there was no man, and all the birds of the heavens were fled... the fruitful place was a wilderness, and all the cities thereof were broken down at the presence of the LORD." The Hebrew words are tohu va-vohu. That same pair of words stands in the very first chapter of the Bible. So the vision pictures the earth empty and shapeless for the 1,000 years. That is the thousand-year period of Revelation 20. First principle: during that time Satan lies bound in the bottomless pit, the abyss, and the earth is as it was before it was formed.',
    sourceKeywords: ['without form and void', 'no light', 'no man', 'cities broken down', 'presence of the LORD'],
    fulfillmentKeywords: ['thousand years', 'bottomless pit', 'Satan bound', 'resurrection of the dead'],
    terms: [
      { term: 'without form and void', original: 'תֹּהוּ וָבֹהוּ', translit: 'tohu va-vohu', gloss: 'unformed and empty / chaotic desolation', note: 'These are the exact words of Genesis 1:2. The earth goes back to that empty, shapeless state during the 1,000 years.' },
    ],
  },
  'isa-24-21': {
    title: 'Kings Gathered in the Pit — Called to Account After Many Days',
    principle:
      'And it shall come to pass in that day, that the LORD shall punish the host of the high ones that are on high, and the kings of the earth upon the earth. And they shall be gathered together, as prisoners are gathered in the pit, and shall be shut up in the prison, and after many days shall they be visited. Revelation 20 shows the same scene. Wicked rulers and Satan are bound for the 1,000 years. Then they are visited in the final judgment at the close of the 1,000 years. First principle: God\'s judgment is orderly. It is open for all to see. Nothing is left out.',
    sourceKeywords: ['punish the host of the high ones', 'kings of the earth', 'gathered together as prisoners in the pit', 'shut up in the prison', 'after many days shall they be visited'],
    fulfillmentKeywords: ['thousand years', 'lake of fire', 'second resurrection', 'great white throne'],
    terms: [
      { term: 'shut up in the prison', original: 'וְסֻגְּרוּ עַל־מַסְגֵּר', translit: 've-suggeru ʿal-masger', gloss: 'and they shall be shut up in confinement', note: 'This verse matches the binding of Satan in the bottomless pit (Rev 20:2-3).' },
      { term: 'after many days visited', original: 'וּמֵרֹב יָמִים יִפָּקֵדוּ', translit: 'u-merov yamim yippaqedu', gloss: 'and after a multitude of days they shall be visited/summoned to account', note: 'The 1,000 years that pass before the final judgment is carried out.' },
    ],
  },
  'rev-20-14': {
    title: 'The Lake of Fire — The Second Death and End of Sin',
    principle:
      'And death and hell (hades/grave) were cast into the lake of fire. This is the second death. The fire that comes down from God out of heaven devours the wicked (Rev 20:9). It burns them to ashes (Mal 4:1-3). Sin, Satan, death, and the grave are taken out of God\'s creation for good. First principle: God is a consuming fire to sin. The second death wipes evil out completely, and the universe stays pure forever.',
    sourceKeywords: ['death and hell were cast into the lake of fire', 'second death', 'lake of fire'],
    fulfillmentKeywords: ['Malachi 4:1-3', 'ashes under the soles of feet', 'affliction shall not rise again', 'all things new'],
    terms: [
      { term: 'second death', original: 'ὁ δεύτερος θάνατος', translit: 'ho deuteros thanatos', gloss: 'the second / final death', note: 'The end is final and cannot be undone. The first death is different. It is an unconscious sleep that waits for the resurrection.' },
      { term: 'lake of fire', original: 'λίמνην τοῦ πυρός', translit: 'limnēn tou pyros', gloss: 'lake of fire / divine purifying flame', note: 'Consumes everything contrary to God\'s holiness.' },
    ],
  },
  'rev-21-1': {
    title: 'New Heavens and New Earth — All Things Made New',
    principle:
      '"And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea." The Holy City, New Jerusalem, descends from God out of heaven. God Himself will dwell with His people and wipe away all tears. Then there shall be no more death, sorrow, crying, nor pain. First principle: God finishes what he began at creation. The earth is made beautiful again, like Eden, and it stays that way forever.',
    sourceKeywords: ['new heaven and a new earth', 'first heaven and the first earth were passed away', 'no more sea', 'New Jerusalem', 'God shall wipe away all tears'],
    fulfillmentKeywords: ['Isaiah 65:17', '2 Peter 3:13', 'tabernacle of God is with men', 'no more death'],
    terms: [
      { term: 'new heaven and earth', original: 'οὐρανὸν καινὸν καὶ γῆν καινήν', translit: 'ouranon kainon kai gēn kainēn', gloss: 'new / fresh / renewed heaven and earth', note: 'Kainos — fresh and new in what it is, washed clean of every curse and every trace of sin.' },
      { term: 'no more sea', original: 'ἡ θάλασσα οὐκ ἔστιν ἔτι', translit: 'hē thalassa ouk estin eti', gloss: 'the sea exists no longer', note: 'The sea stands for division, chaos, and restless storms. It is gone forever.' },
    ],
  },
  'deu-6-4': {
    title: 'The Shema — The One True Triune God (Elohim Echad)',
    principle:
      'Hear, O Israel: The LORD our God is one LORD. This is the foundation confession that there is only one God. It holds together the plural title Elohim and the one word echad, which speaks of a unity of more than one. Genesis 2:24 uses that same word for husband and wife becoming "one flesh". So the one God is Father, Son, and Holy Spirit. They are one forever and never divided. They are joined in covenant love, the love of God\'s binding promise, and in his one purpose to save.',
    sourceKeywords: ['Hear O Israel', 'the LORD our God is one LORD', 'love the LORD thy God'],
    fulfillmentKeywords: ['one God and Father', 'in the name of the Father Son and Holy Ghost', 'grace of the Lord Jesus Christ and love of God'],
    terms: [
      { term: 'one / compound unity', original: 'אֶחָד', translit: 'ʾechad', gloss: 'one, united, a unity made of more than one', note: 'It is not the word yachid, which means a solitary one. It points to a unity of more than one person, living in harmony.' },
      { term: 'God / plural majesty', original: 'אֱלֹהֵינוּ', translit: 'Eloheinu', gloss: 'our God (a plural noun, with our added on the end)', note: 'It shows the fullness of God, all that God is, acting as one.' },
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
      '“But now the righteousness of God without the law is manifested, being witnessed by the law and the prophets; even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe.” God declares a guilty person to be in the right. That verdict is a free gift of his grace. He gives it through the redemption that is in Christ Jesus — the price paid to buy people back. The believer receives it by faith. God credits it to him.',
    sourceKeywords: ['righteousness of God', 'without the law', 'witnessed by the law and the prophets', 'by faith of Jesus Christ'],
    fulfillmentKeywords: ['justified freely by his grace', 'redemption in Christ Jesus', 'propitiation through faith in his blood'],
    terms: [
      { term: 'righteousness of God', original: 'δικαιοσύνη θεοῦ', translit: 'dikaiosynē theou', gloss: 'righteousness from God / divine vindication', note: 'This right standing before God is credited to us. God also works it into us.' },
      { term: 'justified freely', original: 'δικαιούμενοι δωρεάν', translit: 'dikaioumenoi dōrean', gloss: 'being declared righteous as a free gift / without cost', note: 'This shows grace that no human work can earn.' },
    ],
  },
  'col-2-6': {
    title: 'Rooted and Built Up in Christ — Walking in Spiritual Maturity',
    principle:
      'As ye have therefore received Christ Jesus the Lord, so walk ye in Him: rooted and built up in Him, and stablished in the faith. First principle: following Christ begins when a person receives Him by faith. It grows as that person lives in unbroken dependence on Him. Prayer, the Word, and active service are how that dependence works out. The whole armor of God guards him against demonic deception.',
    sourceKeywords: ['received Christ Jesus', 'walk ye in Him', 'rooted and built up in Him', 'stablished in the faith'],
    fulfillmentKeywords: ['grow in grace', 'armor of God', 'fruit of the Spirit', 'abide in Me'],
    terms: [
      { term: 'rooted', original: 'ἐρριζωμένοι', translit: 'errizōmenoi', gloss: 'having been firmly rooted / anchored', note: 'The verb is passive and describes an act already finished, with results that continue. The person has been rooted in Christ by faith, and he keeps drawing life.' },
      { term: 'built up', original: 'ἐποικοδομούμενοι', translit: 'epoikodomoumenoi', gloss: 'being progressively constructed upon', note: 'The verb is passive and describes work still going on. This person is being built up in Christ, stage by stage.' },
    ],
  },
  'mat-16-18': {
    title: 'Upon This Rock I Will Build My Church (Petra & Ekklēsia)',
    principle:
      'Jesus said to Peter, "Thou art Peter (petros, a loose stone), and upon this rock (petra, the massive bedrock of Peter\'s confession: "Thou art the Christ, the Son of the living God") I will build My church; and the gates of hell shall not prevail against it." Jesus Christ Himself is the only Foundation and Cornerstone. He builds His church on Himself, not on the man. God calls His people out of the world\'s service. He makes them His royal priests.',
    sourceKeywords: ['upon this rock', 'build my church', 'gates of hell shall not prevail'],
    fulfillmentKeywords: ['chief cornerstone', 'spiritual house', 'royal priesthood', 'body of Christ'],
    terms: [
      { term: 'bedrock / rock', original: 'πέτρᾳ', translit: 'petra', gloss: 'massive living bedrock / foundation cliff', note: 'Distinct from petros (a movable pebble/fragment). Christ is the rock, and He is divine.' },
      { term: 'church / called-out assembly', original: 'ἐκκλησία', translit: 'ekklēsia', gloss: 'called out citizens / covenant assembly', note: 'It carries on the Qahal, the assembly of Israel in the Old Testament.' },
    ],
  },
  'joh-17-21': {
    title: 'Unity in Christ — The High-Priestly Prayer of Jesus',
    principle:
      '"That they all may be one; as Thou, Father, art in Me, and I in Thee, that they also may be one in Us". First principle: the unity of believers is the proof Christ\'s mission came from God. That unity crosses every racial, national, social, and gender boundary. It rests on shared truth and on unselfish agape love.',
    sourceKeywords: ['that they all may be one', 'as Thou Father art in Me', 'that the world may believe'],
    fulfillmentKeywords: ['one body and one Spirit', 'neither Jew nor Greek', 'perfected into one'],
    terms: [
      { term: 'one', original: 'ἕν', translit: 'hen', gloss: 'one (neuter) / single organic entity', note: 'Unity of essence, purpose, mind, and love like the Godhead.' },
    ],
  },
  'rom-6-3': {
    title: 'Buried in Baptism — United with Christ in Resurrection',
    principle:
      '“Know ye not, that so many of us as were baptized into Jesus Christ were baptized into His death? Therefore we are buried with Him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.” Baptism in the Bible means going all the way under the water. It pictures death to the old life and rising again in spiritual power.',
    sourceKeywords: ['baptized into Jesus Christ', 'buried with Him by baptism into death', 'walk in newness of life'],
    fulfillmentKeywords: ['repent and be baptized', 'buried with him in baptism', 'put on Christ'],
    terms: [
      { term: 'baptized / immersed', original: 'ἐβαπτίσθημεν', translit: 'ebaptisthēmen', gloss: 'we were submerged / immersed / plunged under', note: 'Baptism requires full immersion in water. That immersion pictures burial and resurrection.' },
      { term: 'newness of life', original: 'καινότητι ζωῆς', translit: 'kainotēti zōēs', gloss: 'fresh quality of divine life', note: 'The Holy Spirit gives power to this risen life.' },
    ],
  },
  '1co-11-23': {
    title: 'The Lord\'s Supper — Remembrance Till He Come (Anamnēsis)',
    principle:
      '“For I have received of the Lord that which also I delivered unto you, that the Lord Jesus the same night in which He was betrayed took bread: and when He had given thanks, He brake it, and said, Take, eat: this is My body, which is broken for you: this do in remembrance of Me.” The Lord\'s Supper and the ordinance of humility (foot washing) are both a memorial meal that shows the Lord\'s death. They announce it until He comes back in glory.',
    sourceKeywords: ['this is my body', 'this do in remembrance of me', 'new testament in my blood', 'shew the Lord\'s death till He come'],
    fulfillmentKeywords: ['blood of the new covenant', 'foot washing', 'fellowship of Christ\'s sufferings', 'eat bread in the kingdom'],
    terms: [
      { term: 'in remembrance / memorial', original: 'εἰς τὴν ἐμὴν ἀνάμνησιν', translit: 'eis tēn emēn anamnēsin', gloss: 'unto My remembrance / living memorial', note: 'The bread is not sacrificed again, as if it became Christ\'s body (transubstantiation). It is a living memorial that faith lays hold of.' },
    ],
  },
  '1co-12-28': {
    title: 'Spiritual Gifts in the Church — the Holy Spirit Gives Them as He Chooses',
    principle:
      '“And God hath set some in the church, first apostles, secondarily prophets, thirdly teachers, after that miracles, then gifts of healings, helps, governments, diversities of tongues.” The Holy Spirit gives believers spiritual abilities, and he decides who receives what. He does this to equip God\'s people and to build up the body of Christ. That work continues until all are united in the faith and complete in character.',
    sourceKeywords: ['God hath set some in the church', 'prophets', 'teachers', 'spiritual gifts'],
    fulfillmentKeywords: ['edifying of the body of Christ', 'unity of the faith', 'measure of the stature of Christ'],
    terms: [
      { term: 'spiritual gifts', original: 'χαρίσματα', translit: 'charismata', gloss: 'grace-endowments / spiritual gifts', note: 'God gives these gifts for free. He gives them to build up the whole church, not to make one person look good.' },
    ],
  },
  'mal-3-8': {
    title: 'Stewardship & The Tithe — Acknowledging Divine Sovereignty',
    principle:
      '"Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings." God claims the tithe, a tenth of what a person\'s work produces, as holy to himself. Bringing tithes and offerings into the storehouse honours God as the true owner of everything he made. It also pays for the gospel to be preached everywhere without turning the work into a business.',
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
      '“What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God\'s.” God makes a person holy over time, and that work covers the whole life. It includes physical health, self-control, modesty, and staying away from unclean meats (Lev 11) and harmful stimulants.',
    sourceKeywords: ['body is the temple of the Holy Ghost', 'ye are not your own', 'bought with a price', 'glorify God in your body'],
    fulfillmentKeywords: ['living sacrifice', 'holy acceptable unto God', 'sanctify you wholly', 'whether ye eat or drink'],
    terms: [
      { term: 'inner sanctuary / temple', original: 'ναὸς', translit: 'naos', gloss: 'holy sanctuary / shrine / Most Holy Place', note: 'Paul does not use hieron (the general temple precincts). He uses naos: the holy dwelling place of God\'s glory.' },
      { term: 'bought with a price', original: 'ἠγοράσθητε τιμῆς', translit: 'ēgorasthēte timēs', gloss: 'ye were purchased with a price', note: 'Christ bought us at Calvary. So he owns our bodies and our minds completely.' },
    ],
  },
  'rev-7-2': {
    title: 'The Seal of the Living God — Settling Into Truth (Sphragis)',
    principle:
      '"And I saw another angel ascending from the east, having the seal of the living God: and he cried with a loud voice to the four angels, to whom it was given to hurt the earth and the sea, Saying, Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads." The seal of God shows that a person has grown into settled character. It also marks loyalty to the Creator honored in the Fourth Commandment.',
    sourceKeywords: ['seal of the living God', 'four winds held', 'sealed in their foreheads', 'servants of our God'],
    fulfillmentKeywords: ['144,000', 'Father\'s name in foreheads', 'mark on the foreheads', 'commandments of God'],
    terms: [
      { term: 'seal / signet', original: 'σφραγῖδα', translit: 'sphragida', gloss: 'seal, a stamp that shows who owns it and that it is genuine', note: 'The seal carries the divine name, the office of Creator, and the territory of heaven and earth. All three are found in the Fourth Commandment.' },
    ],
  },
  'rev-13-11': {
    title: 'The Two-Horned Beast & The Coercive Mark (Charagma)',
    principle:
      '"And I beheld another beast coming up out of the earth; and he had two horns like a lamb, and he spake as a dragon." "And he exerciseth all the power of the first beast before him, and causeth the earth and them which dwell therein to worship the first beast, whose deadly wound was healed." He forces everyone to receive a mark in the right hand or on the forehead. Those who refuse face a trade boycott and death.',
    sourceKeywords: ['two horns like a lamb', 'spake as a dragon', 'mark of the beast', 'buy or sell', 'image to the beast'],
    fulfillmentKeywords: ['third angel warning', 'wrath of God', 'commandments of God and faith of Jesus'],
    terms: [
      { term: 'mark / stamp', original: 'χάραγμα', translit: 'charagma', gloss: 'imprint, stamp, mark of servitude / counterfeit seal', note: 'Sunday worship is enforced as homage to the papal church\'s authority over Scripture.' },
    ],
  },
  'rev-16-1': {
    title: 'The Seven Last Plagues — Unmingled Divine Wrath',
    principle:
      '"And I heard a great voice out of the temple saying to the seven angels, Go your ways, and pour out the vials of the wrath of God upon the earth." The plagues have no mercy mixed in. They fall only on those who have settled their choice for the beast\'s mark after probation closes. In that, God\'s justice is shown to be right, and the faithful few who are left are delivered.',
    sourceKeywords: ['pour out the vials of the wrath of God', 'grievous sore', 'sea became as blood', 'Euphrates dried up', 'It is done'],
    fulfillmentKeywords: ['time of trouble', 'deliverance of saints', 'plagues shall not come nigh thy dwelling'],
    terms: [
      { term: 'vials / golden bowls', original: 'φιάλας', translit: 'phialas', gloss: 'broad shallow bowls / censers of judgment', note: 'These match the temple censers. They are poured out when Jesus finishes pleading for us before the Father.' },
    ],
  },
  'rev-20-9': {
    title: 'The Final Siege & Devouring Fire — The Second Death',
    principle:
      '"And they went up on the breadth of the earth, and compassed the camp of the saints about, and the beloved city: and fire came down from God out of heaven, and devoured them." At the close of the 1,000 years, the wicked are raised, and Satan leads them to attack New Jerusalem. The Great White Throne appears. Every knee bows. God\'s purifying fire burns up sin and sinners, and they are gone forever.',
    sourceKeywords: ['compassed the camp of the saints', 'the beloved city', 'fire came down from God', 'devoured them'],
    fulfillmentKeywords: ['Malachi 4:1-3', 'ashes under feet', 'lake of fire', 'second death'],
    terms: [
      { term: 'devoured them', original: 'κατέφαγεν αὐτούς', translit: 'katephagen autous', gloss: 'consumed / devoured them completely', note: 'This is total destruction: neither root nor branch is left. That rules out the teaching that the lost are tormented forever while conscious.' },
    ],
  },
  'rev-22-11': {
    title: 'The Close of Probation — The Final Irrevocable Decree',
    principle:
      '"He that is unjust, let him be unjust still: and he which is filthy, let him be filthy still: and he that is righteous, let him be righteous still: and he that is holy, let him be holy still." "And, behold, I come quickly; and My reward is with Me, to give every man according as his work shall be." Christ lays aside His priestly robes, and his work of standing between God and us in the heavenly sanctuary now comes to an end.',
    sourceKeywords: ['unjust let him be unjust still', 'holy let him be holy still', 'behold I come quickly', 'my reward is with Me'],
    fulfillmentKeywords: ['Michael stands up', 'temple filled with smoke', 'door was shut'],
    terms: [
      { term: 'still / permanently fixed', original: 'ἔτι', translit: 'eti', gloss: 'still, further, yet (denoting permanent moral state)', note: 'Each person\'s character is fixed for good. Probation has closed and will not open again.' },
    ],
  },
  'amo-9-9': {
    title: 'The Sifting of the House of Israel — Not the Least Grain Lost',
    principle:
      'God will sift the house of Israel among all nations, like as corn is sifted in a sieve. Yet not one true grain will be lost. The shaking tests every believer with trial, persecution, and false teaching. Only the real wheat stays in the sieve. The chaff blows away.',
    sourceKeywords: ['sift the house of Israel', 'like as corn is sifted in a sieve', 'not the least grain fall upon the earth'],
    fulfillmentKeywords: ['shaking in the church', 'straight testimony', 'Laodicean message', 'gold tried in fire'],
    terms: [
      { term: 'I will sift', original: 'הֲנִיעוֹתִי', translit: 'hanīʿoti', gloss: 'I will shake / agitate violently / sift', note: 'God does the shaking, and it separates real faith from a faith that is only on the lips.' },
      { term: 'least grain / pebble', original: 'צְרוֹר', translit: 'tseror', gloss: 'kernel, grain, pebble', note: 'Every sincere believer is precious and preserved by God.' },
    ],
  },
  'jer-30-7': {
    title: 'The Time of Jacob\'s Trouble, and He Is Saved Out of It',
    principle:
      'Alas! for that day is great, so that none is like it: it is even the time of Jacob\'s trouble; but he shall be saved out of it. Jacob wrestled all night at Jabbok. In the same way, God\'s people pass through intense mental anguish under the death decree after probation closes. They hold fast to God\'s promises, and they will not let go. Their deliverance is sealed.',
    sourceKeywords: ['time of Jacob\'s trouble', 'none is like it', 'he shall be saved out of it'],
    fulfillmentKeywords: ['wrestling with angel', 'Daniel 12:1', 'time of trouble', 'deliverance of God\'s people'],
    terms: [
      { term: 'trouble / distress', original: 'צָרָה', translit: 'tsarah', gloss: 'dire distress, anguish, extremity', note: 'The hardest test of faith, right before the clouds part. This is the trouble named after Jacob.' },
    ],
  },
  'jol-3-16': {
    title: 'The Lord Roars Out of Zion — The Voice of God Delivers',
    principle:
      '"The LORD also shall roar out of Zion, and utter His voice from Jerusalem; and the heavens and the earth shall shake: but the LORD will be the hope of His people, and the strength of the children of Israel." That promise comes true. From the darkness of the death decree God speaks, and His voice shakes the planet. He announces the day and the hour Jesus comes.',
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
      'Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel. The sign belongs to God. The child\'s name means God with us. First principle: the Messiah came into our humanity because God acted. No human father produced him. He is God and man in one Person.',
    sourceKeywords: ['a virgin shall conceive', 'bear a son', 'Immanuel', 'butter and honey shall he eat'],
    fulfillmentKeywords: ['virgin', 'bring forth a son', 'call his name JESUS', 'God with us'],
    terms: [
      { term: 'virgin', original: 'עַלְמָה', translit: 'almah', gloss: 'maiden of marriageable age, virgin', note: 'The LXX, the Greek Old Testament, renders it ἡ παρθένος, that is, the virgin. Matthew quotes it of Mary (Matt 1:23).' },
    ],
  },
  'isa-9-6': {
    title: 'Unto Us a Child Is Born — The Mighty God',
    principle:
      '“Unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.” First principle: the Child born to us is the Son God gave us. He is truly a man. He is truly God. The government rests on his shoulder because it belongs to him by right.',
    sourceKeywords: ['child is born', 'son is given', 'government upon his shoulder', 'Prince of Peace', 'of the increase of his government'],
    fulfillmentKeywords: ['Saviour', 'Christ the Lord', 'Word was God', 'in him dwelleth all the fulness'],
    terms: [
      { term: 'Wonderful', original: 'פֶּלֶא', translit: 'pele', gloss: 'wonder, miracle, beyond comprehension', note: 'The same root names the Angel called Wonderful in Judges 13:18. The word is a title for God.' },
    ],
  },
  'isa-11-1': {
    title: 'A Rod out of the Stem of Jesse',
    principle:
      'And there shall come forth a rod out of the stem of Jesse, and a Branch shall grow out of his roots. David\'s royal house was cut down like a tree. God raises new life out of the stump. First principle: the line of the promised King survives every cutting. God\'s grace keeps it alive. The Branch rules by the sevenfold Spirit. He does not rule by human might.',
    sourceKeywords: ['rod out of the stem of Jesse', 'Branch grow out of his roots', 'spirit of the LORD shall rest upon him', 'righteousness shall be the girdle of his loins'],
    fulfillmentKeywords: ['son of David', 'root of Jesse', 'Root and Offspring of David', 'reign'],
    terms: [
      { term: 'Branch', original: 'נֵצֶר', translit: 'netser', gloss: 'sprout, shoot from a stump', note: 'The Hebrew word is echoed in Nazaret, which is Nazareth. Revelation joins the root and the offspring of David in one Person (Rev 22:16).' },
    ],
  },
  'jer-23-5': {
    title: 'A Righteous Branch — The LORD Our Righteousness',
    principle:
      'The LORD said, "Behold, the days come, saith the LORD, that I will raise unto David a righteous Branch, and a King shall reign and prosper, and shall execute judgment and justice in the earth... and this is his name whereby he shall be called, THE LORD OUR RIGHTEOUSNESS." First principle: the King Himself is our righteousness. God declares a guilty person to be in the right because of who Jesus is, not because of anything that person does.',
    sourceKeywords: ['righteous Branch', 'King shall reign and prosper', 'judgment and justice in the earth', 'THE LORD OUR RIGHTEOUSNESS'],
    fulfillmentKeywords: ['made unto us righteousness', 'wisdom, and righteousness', 'sanctification, and redemption'],
    terms: [
      { term: 'Branch', original: 'צֶמַח', translit: 'tsemach', gloss: 'sprout, growth of a plant', note: 'The same title comes back in Zechariah 3:8 and 6:12. One Branch, one Name. The Hebrew word behind it is tsemach.' },
    ],
  },
  'mic-5-2': {
    title: 'Bethlehem — Goings Forth from Everlasting',
    principle:
      '"But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting." First principle: the Ruler has a birthplace in time. He also has an origin in eternity. No one created Him. Yet a woman gave birth to Him.',
    sourceKeywords: ['Bethlehem Ephratah', 'little among the thousands of Judah', 'ruler in Israel', 'from everlasting'],
    fulfillmentKeywords: ['Bethlehem of Judaea', 'shepherds', 'born in Bethlehem', 'not least among the princes of Judah'],
    terms: [
      { term: 'goings forth', original: 'מוֹצָאוֹת', translit: 'motza\'ot', gloss: 'origins, outgoings, springs', note: 'The Hebrew word is plural, so it speaks of outgoings that keep going out. The One who appeared in Bethlehem already existed. That birth was one going-forth among many.' },
    ],
  },
  'hos-11-1': {
    title: 'Called My Son out of Egypt',
    principle:
      '"When Israel was a child, then I loved him, and called my son out of Egypt." Israel lived out that sonship badly. The true Son lives it out perfectly. God calls His Son up out of Egypt after Herod\'s anger. First principle: Israel\'s history is a prophetic pattern. Christ walks the same road and fulfills it.',
    sourceKeywords: ['Israel was a child', 'I loved him', 'called my son out of Egypt', 'they sacrificed unto Baalim'],
    fulfillmentKeywords: ['arise, and take the young child', 'out of Egypt', 'that it might be fulfilled'],
    terms: [
      { term: 'my son', original: 'בְּנִי', translit: 'veni', gloss: 'my son', note: 'Exodus 4:22 calls Israel "my son, my firstborn". Hosea 11:1 says it again, and Matthew hears the greater Son in the words (Matt 2:15).' },
    ],
  },
  'jer-31-15': {
    title: 'Rachel Weeping for Her Children',
    principle:
      '"A voice was heard in Ramah, lamentation, and bitter weeping; Rahel weeping for her children refused to be comforted for her children, because they were not." First principle: sorrow in God\'s plan is never the last word. Matthew ties this to the Bethlehem massacre, and that is no reason to give up hope. The same chapter promises a new covenant, and it promises that Rachel shall return.',
    sourceKeywords: ['voice was heard in Ramah', 'bitter weeping', 'Rahel weeping for her children', 'refused to be comforted'],
    fulfillmentKeywords: ['Herod', 'slew all the children', 'lamentation', 'weeping, and great mourning'],
    terms: [
      { term: 'lamentation', original: 'בְּכִי תַמְרוּרִים', translit: 'vekhi tamrurim', gloss: 'weeping of bitternesses', note: 'The plural intensity matches Matthew\'s great mourning in the region of Rachel\'s tomb.' },
    ],
  },
  'zec-2-10': {
    title: 'Lo, I Come, and I Will Dwell in the Midst of Thee',
    principle:
      '"Sing and rejoice, O daughter of Zion: for, lo, I come, and I will dwell in the midst of thee, saith the LORD." The One who speaks here is Yahweh himself, and he says he is coming. That is the incarnation announced ahead of time. God living with people is not a picture of speech; it is a person who came and lived among us.',
    sourceKeywords: ['Sing and rejoice', 'daughter of Zion', 'I come, and I will dwell in the midst of thee', 'many nations shall be joined to the LORD'],
    fulfillmentKeywords: ['Word was made flesh', 'dwelt among us', 'tabernacle of God is with men'],
    terms: [
      { term: 'dwell', original: 'שָׁכַנְתִּי', translit: 'shakhanti', gloss: 'I have tabernacled, taken up residence', note: 'Root of mishkan (tabernacle); John 1:14 uses eskēnōsen — tabernacled — of the Word made flesh.' },
    ],
  },
  'psa-40-6': {
    title: 'Mine Ears Hast Thou Opened — Lo, I Come',
    principle:
      'Sacrifice and offering thou didst not desire; mine ears hast thou opened: burnt offering and sin offering hast thou not required. Then said I, Lo, I come: in the volume of the book it is written of me, I delight to do thy will, O my God. First principle: God looks for obedience that comes from a heart he has made ready, not for the whole system of sacrifices. Hebrews puts these words in the mouth of the Son as he enters the world.',
    sourceKeywords: ['Sacrifice and offering thou didst not desire', 'mine ears hast thou opened', 'Lo, I come', 'I delight to do thy will'],
    fulfillmentKeywords: ['a body hast thou prepared me', 'by the which will we are sanctified', 'taketh away the first'],
    terms: [
      { term: 'opened', original: 'כָּרִיתָ', translit: 'karita', gloss: 'you have dug out, bored open', note: 'It speaks of an ear dug open, which marked willing servanthood (Exod 21:6). Hebrews reads it as a body prepared for the will of God (Heb 10:5).' },
    ],
  },
  'psa-45-7': {
    title: 'Anointed with the Oil of Gladness Above Thy Fellows',
    principle:
      'Thou lovest righteousness, and hatest wickedness: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows. The Psalm speaks of the King as God, and then speaks of God His God. First principle: the anointed One is himself God, and he is also anointed. The Spirit rests on the Son, and he is glad beyond all his companions.',
    sourceKeywords: ['lovest righteousness', 'hatest wickedness', 'oil of gladness above thy fellows', 'thy throne, O God'],
    fulfillmentKeywords: ['anointed with the Holy Ghost', 'without measure', 'God, even thy God, hath anointed thee'],
    terms: [
      { term: 'anointed', original: 'מָשַׁחְתָּ', translit: 'mashakhta', gloss: 'you have smeared with oil, consecrated', note: 'Root of Mashiach/Messiah; Hebrews 1:9 applies the verse directly to the Son.' },
    ],
  },
  'isa-42-1': {
    title: 'Behold My Servant — My Soul Delighteth in Him',
    principle:
      'Behold my servant, whom I uphold; mine elect, in whom my soul delighteth; I have put my spirit upon him: he shall bring forth judgment to the Gentiles. Here is strength without harshness. A bruised reed shall he not break. First principle: God himself chose this servant. That choice shows itself in gentle justice. His kind of justice mends the world instead of crushing it.',
    sourceKeywords: ['Behold my servant', 'mine elect, in whom my soul delighteth', 'I have put my spirit upon him', 'bruised reed shall he not break'],
    fulfillmentKeywords: ['This is my beloved Son, in whom I am well pleased', 'not quench', 'judgment unto victory'],
    terms: [
      { term: 'my servant', original: 'עַבְדִּי', translit: '\'avdi', gloss: 'my servant, bondservant', note: 'Targum Jonathan is an old Aramaic paraphrase. There it reads, Behold, My Servant, the Messiah. The Baptism voice in Matt 3:17 takes up that title.' },
    ],
  },
  'isa-61-1': {
    title: 'The Spirit of the Lord GOD Is upon Me',
    principle:
      'The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek... to bind up the brokenhearted, to proclaim liberty to the captives... to comfort all that mourn. First principle: the anointing comes with a job to do. It means good news for the meek. It means bandages for broken hearts. It means freedom for captives. It means comfort for those who mourn. These are the people least able to help themselves.',
    sourceKeywords: ['Spirit of the Lord GOD is upon me', 'anointed me to preach good tidings unto the meek', 'liberty to the captives', 'the acceptable year of the LORD'],
    fulfillmentKeywords: ['This day is this scripture fulfilled', 'anointed with the Holy Ghost', 'preach the gospel to the poor'],
    terms: [
      { term: 'anointed me', original: 'מָשַׁח', translit: 'mashakh', gloss: 'to smear with oil, to set apart for God\'s use', note: 'Jesus applies this exact verse to himself in Nazareth (Luke 4:18-21). Nowhere else in the Gospels does he say so clearly that a Scripture is fulfilled in him.' },
    ],
  },
  'isa-9-1': {
    title: 'Galilee of the Nations Sees a Great Light',
    principle:
      'Nevertheless the dimness shall not be such as was in her vexation... The land of Zebulun, and the land of Naphtali... Galilee of the nations. The people that walked in darkness have seen a great light. First principle: God\'s light dawns first where contempt is thickest. Galilee was exactly that kind of place. People looked down on it. They called it the Gentile frontier. And that is where the light came first.',
    sourceKeywords: ['Galilee of the nations', 'people that walked in darkness', 'great light', 'they that dwell in the land of the shadow of death'],
    fulfillmentKeywords: ['Galilee of the Gentiles', 'light is sprung up', 'from that time Jesus began to preach'],
    terms: [
      { term: 'light', original: 'אוֹר', translit: 'or', gloss: 'light, illumination', note: 'Matthew quotes the verse verbatim of Jesus settling in Capernaum (Matt 4:14-16).' },
    ],
  },
  'isa-35-4': {
    title: 'Your God Will Come — Then the Blind See',
    principle:
      'Behold, your God will come with vengeance, even God with a recompence; he will come and save you. Then the eyes of the blind shall be opened, and the ears of the deaf shall be unstopped... the lame man shall leap as an hart, and the tongue of the dumb sing. First principle: when God comes, he mends creation itself. Blind eyes open. Deaf ears hear again. Lame legs leap. Tongues that could not speak sing. Those healings are his proof. They show that God himself has come to save his people.',
    sourceKeywords: ['your God will come', 'eyes of the blind shall be opened', 'ears of the deaf unstopped', 'lame man shall leap'],
    fulfillmentKeywords: ['the blind receive their sight', 'the lame walk', 'the dead are raised up', 'shewed them of all his miracles'],
    terms: [
      { term: 'shall be opened', original: 'תִּפָּקַחְנָה', translit: 'tipaqakhnah', gloss: 'shall be opened (God himself opens them)', note: 'Jesus answers John\'s doubt with these very works (Matt 11:4-5). The list in Isaiah is the proof that he is the promised King.' },
    ],
  },
  'isa-42-6': {
    title: 'A Covenant of the People, a Light of the Gentiles',
    principle:
      '“I the LORD have called thee in righteousness, and will hold thine hand, and will keep thee, and give thee for a covenant of the people, for a light of the Gentiles; To open the blind eyes, to bring out the prisoners from the prison.” First principle: the Servant does more than carry light. He is himself the covenant — God\'s binding promise in a person.',
    sourceKeywords: ['called thee in righteousness', 'a covenant of the people', 'a light of the Gentiles', 'open the blind eyes'],
    fulfillmentKeywords: ['A light to lighten the Gentiles', 'glory of thy people Israel', 'turn them from darkness to light'],
    terms: [
      { term: 'covenant', original: 'בְּרִית', translit: 'berit', gloss: 'covenant — God\'s binding promise', note: 'The Messiah is given as the covenant itself — God\'s binding promise in a person. Simeon blesses the infant as God\'s light for the nations (Luke 2:32).' },
    ],
  },
  'isa-49-6': {
    title: 'My Salvation unto the End of the Earth',
    principle:
      'It is a light thing that thou shouldest be my servant to raise up the tribes of Jacob... I will also give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth. First principle: restoring Israel and raising up the tribes of Jacob is too small a mission for the Servant. God had something bigger in mind. The gospel was meant for the whole world from the very start. It was never an afterthought.',
    sourceKeywords: ['a light thing', 'raise up the tribes of Jacob', 'a light to the Gentiles', 'my salvation unto the end of the earth'],
    fulfillmentKeywords: ['we turn to the Gentiles', 'ordained for eternal life', 'light of the world'],
    terms: [
      { term: 'light thing', original: 'קָל', translit: 'qal', gloss: 'light, slight, too small a thing', note: 'Paul and Barnabas quote this verse in Antioch. It gives them the right to turn to the Gentiles (Acts 13:47).' },
    ],
  },
  'hag-2-7': {
    title: 'The Desire of All Nations Shall Come',
    principle:
      '“Yet once, it is a little while, and I will shake the heavens, and the earth... and the desire of all nations shall come: and I will fill this house with glory.” God filled this later house with greater glory than the temple Solomon built. The promised King walked its courts himself. God\'s greatest glory in a place arrives quietly, in a person.',
    sourceKeywords: ['I will shake all nations', 'the desire of all nations shall come', 'fill this house with glory', 'peace in this place'],
    fulfillmentKeywords: ['mine eyes have seen thy salvation', 'cast out them that sold', 'the Word was made flesh'],
    terms: [
      { term: 'desire', original: 'חֶמְדָּה', translit: 'chemdah', gloss: 'desire, delight, precious thing', note: 'Simeon held the infant Jesus in the temple courts, so he shows the promise kept (Luke 2:29-32).' },
    ],
  },
  'zec-3-8': {
    title: 'I Will Bring Forth My Servant the BRANCH',
    principle:
      '"Hear now, O Joshua the high priest, thou, and thy fellows that sit before thee: for they are men wondered at: for, behold, I will bring forth my servant the BRANCH." The vision shows Joshua\'s filthy garments being taken away. That pictures ahead of time what the Branch will do. God meets guilt with a person, a Servant-King who takes sin away in one day.',
    sourceKeywords: ['Joshua the high priest', 'men wondered at', 'my servant the BRANCH', 'I will remove the iniquity of that land in one day'],
    fulfillmentKeywords: ['took upon him the form of a servant', 'obedient unto death', 'minister unto you'],
    terms: [
      { term: 'the BRANCH', original: 'צֶמַח', translit: 'tsemach', gloss: 'sprout, growth', note: 'Targum Jonathan inserts the name directly: I will bring forth My servant the Messiah.' },
    ],
  },
  'psa-34-20': {
    title: 'He Keepeth All His Bones: Not One Is Broken',
    principle:
      'Many are the afflictions of the righteous: but the LORD delivereth him out of them all. He keepeth all his bones: not one of them is broken. The righteous sufferer goes through affliction with an unbroken body, which is the Passover-lamb pattern. First principle: God keeps His sacrifice whole even in death.',
    sourceKeywords: ['afflictions of the righteous', 'keepeth all his bones', 'not one of them is broken', 'evildoers shall be cut off'],
    fulfillmentKeywords: ['brake not his legs', 'a bone of him shall not be broken', 'already dead'],
    terms: [
      { term: 'keepeth', original: 'שֹׁמֵר', translit: 'shomer', gloss: 'one keeping, guarding', note: 'John 19:36 joins this verse with Exodus 12:46 at the cross: that the scripture should be fulfilled.' },
    ],
  },
  'psa-41-9': {
    title: 'Mine Own Familiar Friend Hath Lifted Up His Heel',
    principle:
      'Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me. The betrayal does not come from a stranger. It comes from a man who shared his table. First principle: the deepest hurt of the righteous sufferer is treachery at the table, and Jesus applies the verse to Judas Himself.',
    sourceKeywords: ['mine own familiar friend', 'in whom I trusted', 'did eat of my bread', 'lifted up his heel against me'],
    fulfillmentKeywords: ['he that eateth bread with me', 'hath lifted up his heel', 'Judas Iscariot', 'dipped his hand with me'],
    terms: [
      { term: 'hath lifted up his heel', original: 'הִגְדִּיל עָקֵב', translit: 'higdil aqev', gloss: 'has made great the heel against me', note: 'Jesus quotes the verse in the upper room: that the scripture may be fulfilled (John 13:18).' },
    ],
  },
  'psa-69-21': {
    title: 'Gall for Meat; Vinegar for Thirst',
    principle:
      'Reproach hath broken my heart; and I am full of heaviness... They gave me also gall for my meat; and in my thirst they gave me vinegar to drink. Every kindness refused to the righteous sufferer was written down as a detail of the Passion. First principle: the cross fulfilled scripture down to the drink offered and refused.',
    sourceKeywords: ['gall for my meat', 'vinegar to drink', 'reproach hath broken my heart', 'I looked for some to take pity'],
    fulfillmentKeywords: ['vinegar to drink mingled with gall', 'I thirst', 'filled a sponge with vinegar'],
    terms: [
      { term: 'gall', original: 'רֹאשׁ', translit: 'rosh', gloss: 'gall, poison, bitter herb', note: 'Here it is bitterness pressed to the lips of the Sufferer (Matt 27:34). John records the vinegar carried on hyssop.' },
    ],
  },
  'isa-50-6': {
    title: 'I Gave My Back to the Smiters',
    principle:
      'I gave my back to the smiters, and my cheeks to them that plucked off the hair: I hid not my face from shame and spitting. This is no victim dragged to suffering. This is a Servant who sets his face like a flint and walks into it. First principle: he suffered because he chose to obey. Nobody forced him. Each humiliation was accepted on purpose.',
    sourceKeywords: ['I gave my back to the smiters', 'cheeks to them that plucked off the hair', 'hid not my face from shame and spitting', 'set my face like a flint'],
    fulfillmentKeywords: ['did spit in his face', 'buffeted him', 'scourged him', 'smote him with their hands'],
    terms: [
      { term: 'I gave', original: 'נָתַתִּי', translit: 'natatti', gloss: 'I gave, handed over', note: 'The Servant speaks in the first person: I gave. He is not a victim taken by force. That same willingness was already there in Gethsemane, in the words not my will.' },
    ],
  },
  'zec-11-12': {
    title: 'Thirty Pieces of Silver Cast to the Potter',
    principle:
      'So they weighed for my price thirty pieces of silver... a goodly price that I was prised at of them! And I took the thirty pieces of silver, and cast them to the potter in the house of the LORD. Israel priced its Shepherd at what a slave was worth. The money he was paid ended up buying ground for burials.',
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
      'His body shall not remain all night upon the tree... for he that is hanged is accursed of God. That is the law about the tree. Paul reads it as good news. He says, "Christ hath redeemed us from the curse of the law, being made a curse for us". First principle: the Messiah, the promised King, takes the curse of the covenant, God\'s binding promise, onto himself. Then the blessing of Abraham can flow out to all nations.',
    sourceKeywords: ['his body shall not remain all night', 'he that is hanged is accursed of God', 'thy land which the LORD thy God giveth thee'],
    fulfillmentKeywords: ['being made a curse for us', 'hanged on a tree', 'the blessing of Abraham', 'receive the promise of the Spirit'],
    terms: [
      { term: 'accursed', original: 'קִלְלַת', translit: 'qilllat', gloss: 'curse of God', note: 'Galatians 3:13 quotes the verse word for word. The pillars of Galatians rest on this law about the gallows in Deuteronomy.' },
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
      'Save now, I beseech thee: O LORD, I beseech thee, send now prosperity. Blessed be he that cometh in the name of the LORD. The Hallel psalm that Israel sang at every feast became the street shout when the King rode into Jerusalem. First principle: Israel\'s psalms put the words of welcome on the people\'s lips before the King appears.',
    sourceKeywords: ['Save now, I beseech thee', 'Blessed be he that cometh in the name of the LORD', 'the stone which the builders refused', 'bind the sacrifice with cords'],
    fulfillmentKeywords: ['Hosanna', 'Blessed is he that cometh', 'in the name of the Lord', 'the whole multitude of the disciples'],
    terms: [
      { term: 'Save now', original: 'הוֹשִׁיעָה נָּא', translit: 'hoshi\'ah na', gloss: 'save, we pray, now!', note: 'Hebrew hoshi\'ah na is exactly what the crowds shouted — Hosanna (Matt 21:9; John 12:13).' },
    ],
  },
  'psa-31-5': {
    title: 'Into Thine Hand I Commend My Spirit',
    principle:
      'Into thine hand I commend my spirit: thou hast redeemed me, O LORD God of truth. This evening prayer of trusting surrender became the dying words of the Christ. First principle: the righteous hand over their spirit, their times, and their enemies into God\'s hand, and they confess redemption at the moment they let go.',
    sourceKeywords: ['Into thine hand I commend my spirit', 'thou hast redeemed me', 'O LORD God of truth', 'I have hated them that regard lying vanities'],
    fulfillmentKeywords: ['Father, into thy hands I commend my spirit', 'gave up the ghost', 'Lord Jesus, receive my spirit'],
    terms: [
      { term: 'I commend', original: 'פָּקַדְתִּי', translit: 'paqadti', gloss: 'I entrust, commit for safekeeping', note: 'Stephen dies with the same entrusting on his lips (Acts 7:59) — the prayer became a Christian death-song.' },
    ],
  },
  'psa-35-11': {
    title: 'False Witnesses Did Rise Up',
    principle:
      'False witnesses did rise up; they laid to my charge things that I knew not. They rewarded me evil for good to the spoiling of my soul. The righteous sufferer is tried by perjury. First principle: when truth is on trial, God Himself is the advocate. The charge against the Sufferer was false, and that is exactly what shows he was innocent.',
    sourceKeywords: ['False witnesses did rise up', 'laid to my charge things that I knew not', 'rewarded me evil for good', 'Lord, how long wilt thou look on'],
    fulfillmentKeywords: ['sought false witness', 'found none', 'two false witnesses', 'This fellow said, I am able'],
    terms: [
      { term: 'false witnesses', original: 'עֵדֵי חָמָס', translit: '\'edei khamas', gloss: 'witnesses of violence, malicious testimony', note: 'The Sanhedrin sought such testimony against Jesus. The law required two witnesses who agreed (Matt 26:59-61).' },
    ],
  },
  'psa-69-4': {
    title: 'They Hate Me Without a Cause; Zeal Eats Me Up',
    principle:
      'They that hate me without a cause are more than the hairs of mine head... For the zeal of thine house hath eaten me up; and the reproaches of them that reproached thee are fallen upon me. First principle: the Sufferer is hated, and he does nothing to deserve it. He is also eaten up by devotion to God\'s house. Christ fulfilled both halves, in the temple courts and at the cross.',
    sourceKeywords: ['hate me without a cause', 'more than the hairs of mine head', 'zeal of thine house hath eaten me up', 'reproaches of them that reproached thee'],
    fulfillmentKeywords: ['without a cause', 'that the scripture might be fulfilled', 'The zeal of thine house hath eaten me up', 'reproaches of them fell on me'],
    terms: [
      { term: 'without a cause', original: 'חִנָּם', translit: 'khinnam', gloss: 'gratis, for nothing, causelessly', note: 'Jesus uses the identical word of the world\'s hatred of Himself and the Father (John 15:24-25).' },
    ],
  },
  'psa-109-25': {
    title: 'They Shake Their Heads at Me',
    principle:
      'I became also a reproach unto them: when they looked upon me they shaked their heads. The scorned sufferer becomes a byword among mockers. First principle: ridicule was part of what the Passion was foretold to include. Even the gesture of the head was written down before Golgotha.',
    sourceKeywords: ['I became also a reproach', 'when they looked upon me', 'shaked their heads', 'I am poor and needy'],
    fulfillmentKeywords: ['they that passed by reviled him', 'wagging their heads', 'He saved others; himself he cannot save'],
    terms: [
      { term: 'shaked their heads', original: 'יְנִידוּ רֹאשׁ', translit: 'yenidu rosh', gloss: 'wagged, moved to and fro the head', note: 'Matthew uses the same gesture of the passers-by at the cross (Matt 27:39). It is mockery in a Hebrew posture.' },
    ],
  },
  'zec-13-1': {
    title: 'A Fountain Opened for Sin and Uncleanness',
    principle:
      '"In that day there shall be a fountain opened to the house of David and to the inhabitants of Jerusalem for sin and for uncleanness." The same prophecy that names the pierced Shepherd also names this fountain. The fountain washes sin away, and it comes from a wound that was opened. Blood and water both speak of it.',
    sourceKeywords: ['a fountain opened', 'house of David', 'for sin and for uncleanness', 'the idols shall utterly pass away'],
    fulfillmentKeywords: ['blood and water came out', 'cleanse us from all sin', 'washed their robes', 'fountain of the water of life'],
    terms: [
      { term: 'fountain', original: 'מָקוֹר', translit: 'maqor', gloss: 'spring, fountain, source', note: 'John 19:34 places the opening at the pierced side; 1 John 1:7 names the blood that keeps cleansing.' },
    ],
  },
  'psa-16-10': {
    title: 'Thou Wilt Not Leave My Soul in Hell',
    principle:
      'I have set the LORD always before me... Therefore my heart is glad, and my glory rejoiceth: my flesh also shall rest in hope. For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption. First principle: the Holy One goes through the grave and his body does not decay. Peter and Paul both preach the resurrection from this verse.',
    sourceKeywords: ['my flesh also shall rest in hope', 'not leave my soul in hell', 'neither wilt thou suffer', 'thine Holy One to see corruption'],
    fulfillmentKeywords: ['his soul was not left in hell', 'his flesh did see corruption', 'This Jesus hath God raised up', 'he whom God raised again saw no corruption'],
    terms: [
      { term: 'hell', original: 'שְׁאוֹל', translit: 'she\'ol', gloss: 'the grave, realm of the dead', note: 'Acts 2:31 renders it hades, and it insists that David\'s tomb still holds him while Christ\'s does not.' },
    ],
  },
  'psa-24-7': {
    title: 'Lift Up Your Heads, O Ye Gates',
    principle:
      'Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in. Who is this King of glory? The LORD strong and mighty. A warrior-King comes home to his citadel in triumph. First principle: the battle is over, and the King comes home in triumph. Heaven\'s gates open for the victorious Christ.',
    sourceKeywords: ['Lift up your heads, O ye gates', 'everlasting doors', 'King of glory shall come in', 'LORD strong and mighty'],
    fulfillmentKeywords: ['ascended up on high', 'led captivity captive', 'sat down on the right hand', 'Worthy is the Lamb'],
    terms: [
      { term: 'King of glory', original: 'מֶלֶךְ הַכָּבוֹד', translit: 'melekh hakavod', gloss: 'King of glory, weightiness of splendor', note: 'Rabbinic sources (Shemoth Rabba) apply the psalm to Messiah. The entry is His heavenly welcome, not an earthly parade.' },
    ],
  },
  'psa-68-18': {
    title: 'Thou Hast Ascended on High, Led Captivity Captive',
    principle:
      'Thou hast ascended on high, thou hast led captivity captive: thou hast received gifts for men; yea, for the rebellious also, that the LORD God might dwell among them. His victory parade climbs to the sanctuary and showers the conquered with gifts. First principle: Christ\'s ascension is a victory march. The spoils he wins, the Spirit and the offices of the church, go to rebels he has made his friends.',
    sourceKeywords: ['ascended on high', 'led captivity captive', 'received gifts for men', 'that the LORD God might dwell among them'],
    fulfillmentKeywords: ['when he ascended up on high', 'gave gifts unto men', 'having received of the Father', 'shed forth this, which ye now see'],
    terms: [
      { term: 'ascended on high', original: 'עָלִיתָ מָרוֹם', translit: '\'alita marom', gloss: 'you have gone up to the height', note: 'Ephesians 4:8-11 quotes the verse and names the gifts: apostles, prophets, evangelists, pastors, teachers.' },
    ],
  },
  'psa-118-22': {
    title: 'The Stone the Builders Refused Is Head of the Corner',
    principle:
      'The stone which the builders refused is become the head stone of the corner. This is the LORD\'s doing; it is marvellous in our eyes. Rejection by the builders becomes God\'s appointment. First principle: exaltation follows rejection. The crucified One is the foundation of all God\'s building.',
    sourceKeywords: ['stone which the builders refused', 'head stone of the corner', 'This is the LORD\'s doing', 'marvellous in our eyes'],
    fulfillmentKeywords: ['the stone which the builders rejected', 'is become the head of the corner', 'marvellous in our eyes', 'no other name'],
    terms: [
      { term: 'head of the corner', original: 'רֹאשׁ פִּנָּה', translit: 'rosh pinnah', gloss: 'head of the corner, capstone/cornerstone', note: 'Jesus quotes it against the chief priests (Matt 21:42); Peter preaches it before the Sanhedrin (Acts 4:11).' },
    ],
  },
  'jon-1-17': {
    title: 'Three Days and Three Nights in the Fish\'s Belly',
    principle:
      'Now the LORD had prepared a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights. God appointed both the descent into the fish and the rescue out of it. Jonah himself prays about it: "thou hadst cast me into the deep... yet hast thou brought up my life from corruption." First principle: God gave the resurrection a sign before He performed it. The earlier picture was Jonah. His Son was the fulfillment.',
    sourceKeywords: ['prepared a great fish', 'swallow up Jonah', 'three days and three nights', 'brought up my life from corruption'],
    fulfillmentKeywords: ['as Jonas was three days', 'in the whale\'s belly', 'so shall the Son of man be', 'the sign of the prophet Jonas'],
    terms: [
      { term: 'three days and three nights', original: 'שְׁלֹשָׁה יָמִים וּשְׁלֹשָׁה לֵילוֹת', translit: 'sheloshah yamim usheloshah lelot', gloss: 'three days and three nights — a complete entombment', note: 'Jesus names this the only sign given to an evil generation (Matt 12:39-40).' },
    ],
  },
  'hos-6-2': {
    title: 'In the Third Day He Will Raise Us Up',
    principle:
      '"After two days will he revive us: in the third day he will raise us up, and we shall live in his sight." Hosea pictures Israel\'s national revival with the rhythm of a resurrection. First principle: God appointed the third day as His turning point. The early church confessed the same words as "according to the scriptures", exactly as they are written in Hosea.',
    sourceKeywords: ['After two days will he revive us', 'in the third day he will raise us up', 'we shall live in his sight', 'as the latter and former rain'],
    fulfillmentKeywords: ['rose again the third day', 'according to the scriptures', 'be killed, and after three days rise again', 'the third day rise again'],
    terms: [
      { term: 'revive', original: 'יְחַיֵּנוּ', translit: 'yehayyenu', gloss: 'he will make us alive', note: 'The intensive form of khayah means "to give life". Hosea used that verb to speak of resurrection hope, long before the empty tomb.' },
    ],
  },
  'psa-110-1': {
    title: 'The LORD Said unto My Lord, Sit Thou at My Right Hand',
    principle:
      'The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool. David calls his own descendant my Lord, so this Son is greater than David. First principle: the Messiah is enthroned at God\'s right hand as both King and Priest (after Melchizedek). His enemies become his footstool in the end.',
    sourceKeywords: ['The LORD said unto my Lord', 'Sit thou at my right hand', 'enemies thy footstool', 'a priest for ever after the order of Melchizedek'],
    fulfillmentKeywords: ['David himself saith... The LORD said', 'sat down on the right hand of God', 'from henceforth expecting', 'sat down at his own right hand'],
    terms: [
      { term: 'my Lord', original: 'לַאדֹנִי', translit: 'la\'adhoni', gloss: 'to my Lord (Adonai)', note: 'Jesus builds His whole argument on this single word (Matt 22:44-45): How then is he his son?' },
    ],
  },
  'zec-6-12': {
    title: 'The Man Whose Name Is the BRANCH — Priest on His Throne',
    principle:
      '"Behold the man whose name is The BRANCH; and he shall grow up out of his place, and he shall build the temple of the LORD... and he shall bear the glory, and shall sit and rule upon his throne; and he shall be a priest upon his throne." The crown is set on Joshua\'s head, yet the promise is about a man named the Branch. He is the one who will build the LORD\'s temple.',
    sourceKeywords: ['Behold the man whose name is The BRANCH', 'build the temple of the LORD', 'bear the glory', 'a priest upon his throne'],
    fulfillmentKeywords: ['Apostle and High Priest', 'builded the house', 'sat down on the right hand of the Majesty', 'we have such an high priest'],
    terms: [
      { term: 'the counsel of peace', original: 'עֲצַת שָׁלוֹם', translit: '\'atzat shalom', gloss: 'counsel of peace, harmonious design', note: 'Hebrews crowns the two offices in one: our High Priest sits — a Priest upon a throne (Heb 8:1).' },
    ],
  },
  '1sa-2-10': {
    title: 'He Shall Exalt the Horn of His Anointed',
    principle:
      'The adversaries of the LORD shall be broken to pieces; out of heaven shall he thunder upon them... and he shall give strength unto his king, and exalt the horn of his anointed. Hannah\'s song closes with the first occurrence of Mashiach in Scripture — hundreds of years before a king exists in Israel. First principle: God promises his anointed King long before any man sits on a throne. Broken adversaries and exalted strength converge on Christ.',
    sourceKeywords: ['adversaries of the LORD broken to pieces', 'thunder upon them', 'give strength unto his king', 'horn of his anointed'],
    fulfillmentKeywords: ['horn of his salvation', 'raised up an horn of salvation', 'of the house of David', 'a Saviour, Jesus'],
    terms: [
      { term: 'his anointed', original: 'מְשִׁיחוֹ', translit: 'meshikho', gloss: 'his anointed one (Mashiach)', note: 'The first time Scripture calls anyone the Messiah; Mary and Zacharias echo Hannah\'s song in almost the same words (Luke 1-2).' },
    ],
  },
  'psa-2-1': {
    title: 'Why Do the Heathen Rage Against the Anointed?',
    principle:
      'Why do the heathen rage, and the people imagine a vain thing? The kings of the earth set themselves, and the rulers take counsel together, against the LORD, and against his anointed... Yet have I set my king upon my holy hill of Zion. First principle: people really do plot against God, and those plots really do fail. God\'s decree stands: Thou art my Son; this day have I begotten thee.',
    sourceKeywords: ['heathen rage', 'people imagine a vain thing', 'against his anointed', 'Thou art my Son; this day have I begotten thee'],
    fulfillmentKeywords: ['with one accord', 'against his holy child Jesus', 'Thou art my Son', 'this day have I begotten thee'],
    terms: [
      { term: 'rage', original: 'רָגַשׁ', translit: 'ragash', gloss: 'to throng, assemble tumultuously', note: 'The Jerusalem church quotes the psalm as fulfilled in Herod, Pilate, and the nations against Jesus (Acts 4:25-27).' },
    ],
  },
  'psa-8-4': {
    title: 'Made a Little Lower Than the Angels, Crowned with Glory',
    principle:
      'What is man, that thou art mindful of him? and the son of man, that thou visitest him? For thou hast made him a little lower than the angels, and hast crowned him with glory and honour. First principle: God meant humanity to rule the earth. Adam lost that rule. We see it fulfilled in Jesus. He was made a little lower for a little while, and now he is crowned, with all things under His feet.',
    sourceKeywords: ['What is man, that thou art mindful of him', 'son of man', 'a little lower than the angels', 'crowned him with glory and honour'],
    fulfillmentKeywords: ['we see Jesus', 'made a little lower than the angels', 'crowned with glory and honour', 'hast put all things in subjection'],
    terms: [
      { term: 'a little lower', original: 'מְעַט', translit: 'me\'at', gloss: 'a little, briefly, for a little while', note: 'Hebrews 2:9 reads both dimensions: lacking-by-a-little in rank and for-a-little-while in time — the incarnation and the cross in one word.' },
    ],
  },
  'psa-89-27': {
    title: 'My Firstborn, Higher Than the Kings of the Earth',
    principle:
      'Also I will make him my firstborn, higher than the kings of the earth. My covenant will I not break, nor alter the thing that is gone out of my lips. God adopts David\'s seed into the rank of firstborn. First principle: the oath to David cannot be broken, and the firstborn holds first place. He is heir of everything, King above every king.',
    sourceKeywords: ['I will make him my firstborn', 'higher than the kings of the earth', 'my covenant will I not break', 'his seed also will I make to endure'],
    fulfillmentKeywords: ['firstborn of every creature', 'firstborn from the dead', 'prince of the kings of the earth', 'faithful and true witness'],
    terms: [
      { term: 'firstborn', original: 'בְּכוֹר', translit: 'bekhor', gloss: 'firstborn — rank and heirship, not origin', note: 'Paul and John apply the rank to Christ (Col 1:18; Rev 1:5): preeminence, not a beginning.' },
    ],
  },
  'psa-132-11': {
    title: 'Of the Fruit of Thy Body Will I Set upon Thy Throne',
    principle:
      'The LORD hath sworn in truth unto David; he will not turn from it; Of the fruit of thy body will I set upon thy throne. The ark\'s journey to Zion recalls the oath that outlives the exile. First principle: God swears an oath and does not take it back. One of David\'s own descendants reigns, and Peter preached that God kept the oath in the resurrection (Acts 2:30-31).',
    sourceKeywords: ['The LORD hath sworn in truth unto David', 'he will not turn from it', 'fruit of thy body', 'set upon thy throne'],
    fulfillmentKeywords: ['he being a prophet', 'God had sworn with an oath', 'of the fruit of his loins', 'raise up unto Israel a Saviour'],
    terms: [
      { term: 'hath sworn', original: 'נִשְׁבַּע', translit: 'nishba\'', gloss: 'has sworn an oath', note: 'Paul\'s word in Acts 13:23: of this man\'s seed hath God according to his promise raised unto Israel a Saviour, Jesus.' },
    ],
  },
  'isa-28-16': {
    title: 'I Lay in Zion a Tried, Precious Corner Stone',
    principle:
      'Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste. God lays the stone. He sets it in place. Unbelief stumbles over it. First principle: the same Stone saves the person who believes. It shatters the person who refuses him. There is no neutral ground with Christ.',
    sourceKeywords: ['I lay in Zion for a foundation', 'a tried stone', 'a precious corner stone', 'he that believeth shall not make haste'],
    fulfillmentKeywords: ['living stone', 'disallowed of men', 'chosen of God and precious', 'a rock of offence'],
    terms: [
      { term: 'shall not make haste', original: 'לֹא יָחִישׁ', translit: 'lo\' yakhish', gloss: 'shall not hasten, panic, flee', note: 'Paul joins this verse to Isaiah 8:14 and quotes the two together. This is what he writes: “whosoever believeth on him shall not be ashamed” (Rom 9:33).' },
    ],
  },
  'ezk-34-23': {
    title: 'One Shepherd: My Servant David over the Flock',
    principle:
      'And I will set up one shepherd over them, and he shall feed them, even my servant David; he shall feed them, and he shall be their shepherd. God spoke these words against the failed shepherds of Israel who fed themselves. First principle: God answers bad leaders with one faithful Shepherd from David\'s line. That Shepherd knows His flock by name.',
    sourceKeywords: ['set up one shepherd', 'my servant David', 'he shall feed them', 'I the LORD will be their God'],
    fulfillmentKeywords: ['I am the good shepherd', 'lay down my life for the sheep', 'other sheep I have', 'great shepherd of the sheep'],
    terms: [
      { term: 'feed', original: 'וּרְעָם', translit: 'ur\'am', gloss: 'and he shall shepherd them', note: 'The verb ra\'ah means both to shepherd and to associate with; Jesus claims the verse in John 10:11-16 and Hebrews 13:20 crowns it.' },
    ],
  },
  'isa-25-8': {
    title: 'He Will Swallow Up Death in Victory',
    principle:
      'He will swallow up death in victory; and the Lord GOD will wipe away tears from off all faces; and the rebuke of his people shall he take away from off all the earth. First principle: death is not managed. It is not put off to another day. Death is swallowed up whole. A stronger destiny devours it. The Lord himself stops the weeping. He wipes every tear away.',
    sourceKeywords: ['swallow up death in victory', 'wipe away tears from off all faces', 'rebuke of his people', 'Lo, this is our God'],
    fulfillmentKeywords: ['Death is swallowed up in victory', 'O death, where is thy sting', 'no more death', 'God shall wipe away all tears'],
    terms: [
      { term: 'swallow up', original: 'בִּלַּע', translit: 'billa\'', gloss: 'to swallow, engulf completely', note: 'Paul quotes this verse when he speaks of the mystery at the last trump (1 Cor 15:54). John shows the same tear-wiping in the New Jerusalem (Rev 21:4).' },
    ],
  },
  'mal-4-2': {
    title: 'The Sun of Righteousness with Healing in His Wings',
    principle:
      '"But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall." That same day burns like an oven for the wicked. For those who fear God\'s name it dawns like sunrise. What divides the two is the fear of his name.',
    sourceKeywords: ['unto you that fear my name', 'Sun of righteousness', 'healing in his wings', 'go forth, and grow up as calves of the stall'],
    fulfillmentKeywords: ['dayspring from on high', 'the day so cometh', 'morning star', 'healing to all'],
    terms: [
      { term: 'wings', original: 'כְּנָפַיִם', translit: 'kenafayim', gloss: 'wings, extremities, corners of a garment', note: 'The woman who touched the border (kenaf) of His garment was healed — the sunrise ray from the hem of the Sun (Luke 8:43-48).' },
    ],
  },
  'isa-59-20': {
    title: 'The Redeemer Shall Come to Zion',
    principle:
      'And the Redeemer shall come to Zion, and unto them that turn from transgression in Jacob, saith the LORD. The scene around this promise is dark. There is no one to plead the people\'s case. Truth has fallen down in the street. So God\'s own arm brings salvation. First principle: deliverance comes when no human mediator can be found. The Kinsman-Redeemer — the family member who buys his people back — comes to those who turn from their sin.',
    sourceKeywords: ['the Redeemer shall come to Zion', 'turn from transgression in Jacob', 'my spirit that is upon thee', 'my words which I have put in thy mouth'],
    fulfillmentKeywords: ['all Israel shall be saved', 'shall come out of Sion the Deliverer', 'fulness of the Gentiles', 'fullness of time'],
    terms: [
      { term: 'Redeemer', original: 'גּוֹאֵל', translit: 'go\'el', gloss: 'the family member who buys a person back, the one who restores an inheritance', note: 'Paul quotes this verse about the Deliverer out of Zion (Rom 11:26). The go\'el — the family member who buys his people back — has a duty to rescue them. He carries it out for Israel\'s salvation.' },
    ],
  },
  'isa-63-1': {
    title: 'Treading the Winepress Alone — Mighty to Save',
    principle:
      'Who is this that cometh from Edom, with dyed garments from Bozrah? this that is glorious in his apparel, travelling in the greatness of his strength? I that speak in righteousness, mighty to save... I have trodden the winepress alone; and of the people there was none with me. First principle: God treads the winepress alone. Nobody stands beside him to help. His clothes are dyed because he treads the press himself. The day of vengeance is his own work. No one shares it with him.',
    sourceKeywords: ['cometh from Edom', 'dyed garments from Bozrah', 'mighty to save', 'I have trodden the winepress alone'],
    fulfillmentKeywords: ['clothed with a vesture dipped in blood', 'his name is called The Word of God', 'treadeth the winepress', 'KING OF KINGS, AND LORD OF LORDS'],
    terms: [
      { term: 'winepress', original: 'פּוּרָה', translit: 'purah', gloss: 'wine-vat, press where grapes are trodden', note: 'Revelation 19:15 takes up this same image, word for word, for the Word of God as he returns. The figure who treads the winepress in Isa 63 appears again in the clouds of Rev 19.' },
    ],
  },
  'amo-9-11': {
    title: 'I Will Raise Up the Tabernacle of David That Is Fallen',
    principle:
      '"In that day will I raise up the tabernacle of David that is fallen, and close up the breaches thereof... that they may possess the remnant of Edom, and of all the heathen, which are called by my name." First principle: God rebuilds the dynasty of David, which had fallen into a collapsed shelter. The rebuilt house is wide enough for the nations to seek the LORD.',
    sourceKeywords: ['raise up the tabernacle of David', 'close up the breaches', 'remnant of Edom', 'all the heathen, which are called by my name'],
    fulfillmentKeywords: ['James answered', 'to this agree the words of the prophets', 'God at the first did visit the Gentiles', 'known unto God are all his works'],
    terms: [
      { term: 'tabernacle', original: 'סֻכַּת', translit: 'sukkat', gloss: 'booth, hut, shelter of branches', note: 'At the Jerusalem council James quotes Amos to show that God had always planned to include the Gentiles (Acts 15:16-17).' },
    ],
  },
  'zec-14-4': {
    title: 'His Feet Shall Stand upon the Mount of Olives',
    principle:
      '"And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east... and the mount of Olives shall cleave in the midst thereof." God will be King over all the earth, and his name will be one. The place where Jesus went up is the place where he will come back down. Acts 1 shows the angels pointing the disciples to that same mountain.',
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
      '"The Word was with God, and the Word was God"; "without him was not any thing made that was made." First principle: at the center of every thread stands the Christ who made everything. Every promise and every fulfillment runs from the Creator at the start of Genesis to the flesh He took on in Bethlehem.',
    sourceKeywords: ['the Word was God', 'with God', 'was made by him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-1-3': {
    title: 'All Things Were Made by Him',
    principle:
      '"Without Him was not any thing made that was made." First principle: the very One who made all things is also the Son who paid to set us free. Colossians teaches the very same thing: "by Him were all things created, and by His blood we have redemption."',
    sourceKeywords: ['All things were made by him', 'not any thing made'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-1-29': {
    title: 'Behold the Lamb of God',
    principle:
      'John calls Jesus "the Lamb of God" and "which taketh away the sin of the world." First principle: the whole sacrificial system converges on this one Man. That includes the Passover lamb, the daily lamb, and Isaiah 53\'s silent lamb.',
    sourceKeywords: ['Lamb of God', 'taketh away the sin', 'the world'],
    fulfillmentKeywords: ['lamb without blemish', 'Christ our passover'],
    terms: [],
  },
  'joh-1-45': {
    title: 'We Have Found Him of Whom Moses Wrote',
    principle:
      'Philip tells Nathanael that Jesus of Nazareth is the One Moses in the law and the prophets did write about. First principle: the Old Testament is a written looking forward. The apostles say that one Person answers it.',
    sourceKeywords: ['found him', 'Moses in the law', 'Jesus of Nazareth'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-2-17': {
    title: 'The Zeal of Thine House Hath Eaten Me Up',
    principle:
      'At the temple cleansing the disciples remember Psalm 69:9. First principle: Christ\'s consuming devotion to His Father\'s house was already written prophecy. The insults aimed at God fell on Him.',
    sourceKeywords: ['zeal of thine house', 'hath eaten me up', 'it was written'],
    fulfillmentKeywords: ['zeal of thine house', 'reproaches of them'],
    terms: [],
  },
  'joh-3-16': {
    title: 'For God So Loved the World',
    principle:
      '"God gave His only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." First principle: this one verse holds the whole gospel. God\'s love gives a gift. Faith is the hand that receives it. Eternal life is the result.',
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
      'Jesus defends His unity with the Father from Psalm 82\'s "Ye are gods", where the law calls lesser judges gods. First principle: if Scripture could name men that way, the Sent One cannot be guilty of blasphemy for saying "I am the Son of God".',
    sourceKeywords: ['Is it not written in your law', 'Ye are gods', 'scripture cannot be broken'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'joh-12-15': {
    title: 'Thy King Cometh, Sitting on an Ass\'s Colt',
    principle:
      'John quotes Zechariah 9:9 at the triumphal entry: "Fear not, daughter of Sion." First principle: the King comes in humility, exactly as the prophet wrote it. The colt is the proof that this is the King.',
    sourceKeywords: ['daughter of Sion', 'thy King cometh', 'ass\'s colt'],
    fulfillmentKeywords: ['riding upon an ass', 'lowly', 'having salvation'],
    terms: [],
  },
  'joh-12-38': {
    title: 'Who Hath Believed Our Report?',
    principle:
      'John ties Israel\'s unbelief to Isaiah 53:1: "Lord, who hath believed our report?" First principle: God announced the rejection of Christ ahead of time. Even unbelief fulfils what the prophet said about the arm of the LORD.',
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
      'The soldiers gamble for the seamless coat. First principle: Psalm 22:18 is fulfilled down to the last detail. Prophecy reaches even to a dice game at the foot of the cross.',
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
      'The empty tomb stuns the disciples, because they did not yet understand the scripture that He must rise. First principle: the third day stood written in Scripture before anyone believed it. Psalm 16, Hosea 6 and Jonah all said it.',
    sourceKeywords: ['knew not the scripture', 'must rise again from the dead'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Luke ────────────────────────────────────────
  'luk-1-32': {
    title: 'The Throne of His Father David',
    principle:
      'Gabriel announced that the Son of the Highest would receive David\'s throne. First principle: Gabriel joined 2 Samuel 7 and Isaiah 9 in one announcement. The Son of God\'s binding promise is both God\'s Son and David\'s heir.',
    sourceKeywords: ['Son of the Highest', 'throne of his father David'],
    fulfillmentKeywords: ['thy throne shall be established', 'unto us a child is born'],
    terms: [],
  },
  'luk-1-33': {
    title: 'Of His Kingdom There Shall Be No End',
    principle:
      '“He shall reign over the house of Jacob for ever.” First principle: David\'s kingdom was cut down like a stump. In the Son of Mary it grows into a kingdom that never ends.',
    sourceKeywords: ['reign over the house of Jacob', 'no end'],
    fulfillmentKeywords: ['he shall reign for ever', 'increase of his government'],
    terms: [],
  },
  'luk-1-69': {
    title: 'An Horn of Salvation in the House of David',
    principle:
      'Zacharias blessed God for raising up an horn of salvation in the house of his servant David. First principle: Hannah\'s words about the horn of His anointed and God\'s binding promise to David came together in the newborn Christ.',
    sourceKeywords: ['horn of salvation', 'house of his servant David'],
    fulfillmentKeywords: ['exalt the horn of his anointed', 'strength unto his king'],
    terms: [],
  },
  'luk-1-76': {
    title: 'The Prophet of the Highest Preparing His Ways',
    principle:
      'Zacharias named his son the prophet of the Highest, the one going before the Lord to prepare His ways. First principle: Malachi\'s messenger stands in the birth story itself. John is written prophecy that became a crying infant.',
    sourceKeywords: ['prophet of the Highest', 'go before the face of the Lord', 'prepare his ways'],
    fulfillmentKeywords: ['I send my messenger', 'before thee'],
    terms: [],
  },
  'luk-2-23': {
    title: 'Every Male That Openeth the Womb',
    principle:
      'The presentation obeyed the law of the LORD: “Every male that openeth the womb shall be called holy.” First principle: the Redeemer lived under the law he himself gave. Exodus 13 claims every firstborn, and that claim was kept to the letter when Jesus was presented.',
    sourceKeywords: ['As it is written in the law', 'openeth the womb', 'holy to the Lord'],
    fulfillmentKeywords: ['Sanctify unto me all the firstborn'],
    terms: [],
  },
  'luk-2-32': {
    title: 'A Light to Lighten the Gentiles',
    principle:
      'Simeon held the infant and quoted Isaiah: “a light to lighten the Gentiles, and the glory of thy people Israel.” First principle: God had prepared this salvation before the face of all people. Simeon now carried it in his two arms.',
    sourceKeywords: ['A light to lighten the Gentiles', 'glory of thy people Israel'],
    fulfillmentKeywords: ['a light of the Gentiles', 'my salvation'],
    terms: [],
  },
  'luk-3-4': {
    title: 'The Voice Crying in the Wilderness',
    principle:
      'Luke applied Isaiah 40:3 to John\'s ministry: “make his paths straight.” First principle: John the forerunner was written about before he was born. The wilderness voice was on the page seven centuries earlier.',
    sourceKeywords: ['Esaias the prophet', 'voice of one crying in the wilderness', 'make his paths straight'],
    fulfillmentKeywords: ['prepare ye the way of the LORD', 'every valley shall be exalted'],
    terms: [],
  },
  'luk-4-4': {
    title: 'Man Shall Not Live by Bread Alone',
    principle:
      'Christ answered the tempter from Deuteronomy: man lives by every word of God. First principle: Israel failed in the wilderness. Jesus, the true Israel, won there by the word that was written.',
    sourceKeywords: ['It is written', 'not live by bread alone', 'every word of God'],
    fulfillmentKeywords: ['by every word that proceedeth out of the mouth'],
    terms: [],
  },
  'luk-4-8': {
    title: 'Thou Shalt Worship the Lord Thy God Only',
    principle:
      'Jesus refused the kingdoms of the world with Deuteronomy 6:13. First principle: worship belongs to God alone. Christ will take the kingdoms, but he will take them by the cross, never by the devil\'s shortcut.',
    sourceKeywords: ['Get thee behind me, Satan', 'worship the Lord thy God', 'him only shalt thou serve'],
    fulfillmentKeywords: ['thou shalt fear the LORD thy God', 'serve him'],
    terms: [],
  },
  'luk-4-12': {
    title: 'Thou Shalt Not Tempt the Lord Thy God',
    principle:
      'The third wilderness test — throw Yourself down — was refused with Deuteronomy 6:16. First principle: the Messiah would not force proof that he was the Son. Israel tested God at Massah. The true Israel would not do that.',
    sourceKeywords: ['It is said', 'Thou shalt not tempt the Lord thy God'],
    fulfillmentKeywords: ['Ye shall not tempt the LORD your God', 'as ye tempted him in Massah'],
    terms: [],
  },
  'luk-4-18': {
    title: 'The Spirit of the Lord Is upon Me',
    principle:
      'In Nazareth Jesus read Isaiah 61 and sat down: “This day is this scripture fulfilled.” First principle: no other place in Scripture shows Jesus declaring his own fulfillment so clearly. Anointing, gospel, healing, and liberty all appear in one sentence.',
    sourceKeywords: ['The Spirit of the Lord is upon me', 'anointed me to preach the gospel', 'liberty them that are bruised'],
    fulfillmentKeywords: ['anointed me to preach good tidings', 'proclaim liberty to the captives'],
    terms: [],
  },
  'luk-4-21': {
    title: 'This Day Is This Scripture Fulfilled',
    principle:
      'Everyone in the synagogue watched Jesus as he closed the book. First principle: the fulfillment was not merely on its way. It stood in the room that day.',
    sourceKeywords: ['This day is this scripture fulfilled', 'in your ears'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-7-27': {
    title: 'I Send My Messenger Before Thy Face',
    principle:
      'Jesus told John\'s disciples who he was by what he did. Then he told the crowd who John was: Malachi 3:1\'s messenger. First principle: the man who goes first identifies the one who comes after him.',
    sourceKeywords: ['of whom it is written', 'I send my messenger', 'prepare thy way before thee'],
    fulfillmentKeywords: ['the messenger of the covenant', 'suddenly come to his temple'],
    terms: [],
  },
  'luk-8-10': {
    title: 'Unto You It Is Given to Know the Mysteries',
    principle:
      'Parables both reveal and conceal. That is the blindness Isaiah 6 described, and here it comes true. First principle: the same word softens the willing and hardens the unwilling. The difference is the heart that hears.',
    sourceKeywords: ['mysteries of the kingdom of God', 'seeing they might not see'],
    fulfillmentKeywords: ['hear indeed, but understand not', 'make the heart fat'],
    terms: [],
  },
  'luk-18-8': {
    title: 'Shall He Find Faith on the Earth?',
    principle:
      'God will avenge His elect speedily. Yet the Son of man asks whether faith will remain. First principle: the question for the last days is not whether God will act. It is whether anyone is still praying when he comes.',
    sourceKeywords: ['avenge them speedily', 'the Son of man cometh', 'find faith'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-18-31': {
    title: 'All Things Written Concerning the Son of Man',
    principle:
      'Going up to Jerusalem, Jesus said that everything written by the prophets concerning the Son of man shall be accomplished. He named what would happen: betrayal, mocking, scourging, death, and resurrection. First principle: the week of his suffering is the most predicted week in history.',
    sourceKeywords: ['written by the prophets', 'shall be accomplished', 'Son of man'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-20-17': {
    title: 'The Stone Which the Builders Rejected',
    principle:
      'Jesus used Psalm 118 to answer the chief priests. First principle: the rejected Stone becomes the head of the corner, the stone the whole building rests on. Rejection was the road that led to exaltation.',
    sourceKeywords: ['that is written', 'the builders rejected', 'head of the corner'],
    fulfillmentKeywords: ['the stone which the builders refused'],
    terms: [],
  },
  'luk-20-42': {
    title: 'The LORD Said unto My Lord',
    principle:
      'David in the Psalms calls his own descendant Lord. First principle: Psalm 110 left the scribes with nothing to say. The Christ is greater than David: David\'s Son, and David\'s Lord.',
    sourceKeywords: ['David himself saith', 'The LORD said unto my Lord', 'Sit thou on my right hand'],
    fulfillmentKeywords: ['The LORD said unto my Lord', 'Sit thou at my right hand'],
    terms: [],
  },
  'luk-21-24': {
    title: 'Jerusalem Trodden Down Until the Times of the Gentiles',
    principle:
      'Jesus foretold destruction and captivity, and he set a limit on how long it would last: “until the times of the Gentiles be fulfilled.” First principle: even Jerusalem\'s humiliation has a date when it ends.',
    sourceKeywords: ['led away captive', 'trodden down of the Gentiles', 'times of the Gentiles'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-21-27': {
    title: 'The Son of Man Coming in a Cloud with Power',
    principle:
      'Nations will be in distress. Then the sign appears: “the Son of man coming in a cloud with power and great glory.” First principle: at the end, Daniel 7\'s Son of man receives his kingdom in full public view. Then “redemption draweth nigh.”',
    sourceKeywords: ['Son of man coming in a cloud', 'power and great glory', 'redemption draweth nigh'],
    fulfillmentKeywords: ['one like the Son of man came with the clouds'],
    terms: [],
  },
  'luk-22-37': {
    title: 'He Was Reckoned Among the Transgressors',
    principle:
      'Jesus said that Isaiah 53:12 must be accomplished in him. He was numbered with criminals, yet he brought the law\'s rule to its end. First principle: Christ died among the guilty, just as Scripture said. “The things concerning me have an end.”',
    sourceKeywords: ['this that is written', 'reckoned among the transgressors', 'have an end'],
    fulfillmentKeywords: ['numbered with the transgressors', 'bare the sin of many'],
    terms: [],
  },
  'luk-24-26': {
    title: 'Ought Not Christ to Have Suffered These Things?',
    principle:
      'The risen Christ taught that he had to suffer before he could enter his glory. First principle: the cross was not an accident of politics. Scripture said it ought to happen.',
    sourceKeywords: ['Ought not Christ to have suffered', 'enter into his glory'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-24-27': {
    title: 'Beginning at Moses He Expounded Concerning Himself',
    principle:
      'From Moses through all the prophets, Christ explained the things concerning Himself. First principle: the whole Old Testament is about Jesus. He is its subject, not an appendix to it.',
    sourceKeywords: ['beginning at Moses', 'all the prophets', 'the things concerning himself'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-24-44': {
    title: 'Law, Prophets, and Psalms Concerning Me',
    principle:
      'The risen Lord divided the whole of Scripture into three parts: the law of Moses, the prophets, and the psalms. All of it, he said, was written concerning Him. First principle: every section of the Old Testament is about Christ.',
    sourceKeywords: ['all things must be fulfilled', 'law of Moses', 'psalms, concerning me'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'luk-24-46': {
    title: 'Thus It Behoved Christ to Suffer and to Rise',
    principle:
      '“Thus it is written,” Jesus said: he would suffer, he would rise the third day, and repentance and remission would be preached among all nations. First principle: the gospel pattern itself fulfills Scripture. Death, resurrection, and worldwide preaching were all written ahead of time.',
    sourceKeywords: ['Thus it is written', 'to suffer, and to rise', 'the third day'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Mark ────────────────────────────────────────
  'mrk-1-2': {
    title: 'As It Is Written in the Prophets',
    principle:
      'Mark opens his gospel with a promise about the messenger: “Behold, I send my messenger before thy face.” First principle: the good news begins with a prophecy that came true.',
    sourceKeywords: ['As it is written in the prophets', 'my messenger', 'prepare thy way'],
    fulfillmentKeywords: ['Behold, I will send my messenger'],
    terms: [],
  },
  'mrk-1-3': {
    title: 'Prepare Ye the Way of the Lord',
    principle:
      'Isaiah 40:3 gives John his work in the wilderness. First principle: the road John prepares is the LORD\'s own road. John baptizes the God whose way he makes straight.',
    sourceKeywords: ['voice of one crying in the wilderness', 'Prepare ye the way of the Lord'],
    fulfillmentKeywords: ['prepare ye the way of the LORD'],
    terms: [],
  },
  'mrk-1-11': {
    title: 'Thou Art My Beloved Son',
    principle:
      'At the Jordan the voice from heaven joined Psalm 2 and Isaiah 42: “Thou art my beloved Son, in whom I am well pleased.” First principle: the baptism is a crowning. There the Father spoke, and he presented his anointed Son.',
    sourceKeywords: ['a voice from heaven', 'Thou art my beloved Son', 'well pleased'],
    fulfillmentKeywords: ['Thou art my Son', 'Behold my servant'],
    terms: [],
  },
  'mrk-1-15': {
    title: 'The Time Is Fulfilled',
    principle:
      'Jesus preached: “The time is fulfilled, and the kingdom of God is at hand.” First principle: Daniel\'s clock has run out. The prophecy is not just written down any more. It has arrived. The answer is to repent and believe.',
    sourceKeywords: ['The time is fulfilled', 'kingdom of God is at hand', 'repent ye, and believe'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mrk-2-7': {
    title: 'Who Can Forgive Sins but God Only?',
    principle:
      'The scribes asked the right question about the wrong Man. First principle: only God has the right to forgive sins. The healing proved that Jesus really has that authority.',
    sourceKeywords: ['speak blasphemies', 'forgive sins but God only'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mrk-2-27': {
    title: 'The Sabbath Was Made for Man',
    principle:
      'Jesus said, “The Sabbath was made for man, and not man for the sabbath,” and therefore the Son of man is Lord also of it. First principle: the Sabbath day is a gift that goes back to creation week. Its Lord was there when it was made.',
    sourceKeywords: ['The sabbath was made for man', 'Lord also of the sabbath'],
    fulfillmentKeywords: ['he rested on the seventh day', 'blessed the sabbath day'],
    terms: [],
  },
  'mrk-7-6': {
    title: 'This People Honoureth Me with Their Lips',
    principle:
      'Jesus applied Isaiah 29 to the men who kept the tradition: lips near, heart far. First principle: God sees worship that keeps the rules while the heart stays away. Isaiah\'s prophecy of empty religion comes true in every generation.',
    sourceKeywords: ['Well hath Esaias prophesied', 'honoureth me with their lips', 'heart is far from me'],
    fulfillmentKeywords: ['draw near with their mouth', 'their fear toward me is taught'],
    terms: [],
  },
  'mrk-7-10': {
    title: 'Moses Said, Honour Thy Father and Mother',
    principle:
      'Tradition was cancelling the fifth commandment, and Jesus answered with the written law. First principle: God\'s word stands above custom. A gift called corban cannot cancel the duty to honour and care for your parents.',
    sourceKeywords: ['For Moses said', 'Honour thy father and thy mother', 'let him die the death'],
    fulfillmentKeywords: ['Honour thy father and thy mother'],
    terms: [],
  },
  'mrk-9-12': {
    title: 'Elias Cometh First — and the Son of Man Must Suffer',
    principle:
      'Jesus held two Scriptures together: Elijah restores first, and the Son of man suffers and is set at nought. First principle: the prophets wrote about glory, and they wrote about suffering too. The disciples had kept only the glory part.',
    sourceKeywords: ['Elias verily cometh first', 'restoreth all things', 'he must suffer many things'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mrk-12-10': {
    title: 'Have Ye Not Read This Scripture?',
    principle:
      'In the temple courts Jesus quoted Psalm 118\'s words about the rejected Stone. First principle: the men who held the building threw out the cornerstone. God builds on the Stone they refuse.',
    sourceKeywords: ['Have ye not read this scripture', 'rejected is become the head of the corner'],
    fulfillmentKeywords: ['the stone which the builders refused'],
    terms: [],
  },
  'mrk-12-29': {
    title: 'Hear, O Israel; The Lord Our God Is One Lord',
    principle:
      'Asked for the first commandment, Jesus recited the Shema, Israel\'s confession that the LORD is one. First principle: the whole law is summed up in loving the one God with heart, soul, mind, strength. Jesus kept that command perfectly.',
    sourceKeywords: ['The first of all the commandments', 'The Lord our God is one Lord'],
    fulfillmentKeywords: ['Hear, O Israel'],
    terms: [],
  },
  'mrk-12-36': {
    title: 'David Said by the Holy Ghost',
    principle:
      'David wrote Psalm 110 by the Spirit. In it his Lord is enthroned till enemies become a footstool. First principle: the Spirit spoke through David, and he named David\'s Son as David\'s Lord.',
    sourceKeywords: ['David himself said by the Holy Ghost', 'The LORD said to my Lord', 'footstool'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'until I make thine enemies'],
    terms: [],
  },
  'mrk-13-14': {
    title: 'The Abomination of Desolation Spoken by Daniel',
    principle:
      'Jesus pointed his readers back to Daniel for the standing desecration in the holy place. Then he told them to run. First principle: Daniel 8–12 was Jesus\' own reference library for the end. Read it before you need it.',
    sourceKeywords: ['abomination of desolation', 'spoken of by Daniel', 'flee to the mountains'],
    fulfillmentKeywords: ['take away the daily sacrifice', 'abomination that maketh desolate'],
    terms: [],
  },
  'mrk-13-26': {
    title: 'Coming in the Clouds with Great Power and Glory',
    principle:
      'Jesus will come just as Daniel 7 saw him: in the clouds with power and great glory, and gathering His elect. First principle: the second coming is Daniel 7 come true. The sky will be torn open.',
    sourceKeywords: ['see the Son of man coming in the clouds', 'great power and glory'],
    fulfillmentKeywords: ['one like the Son of man', 'came with the clouds of heaven'],
    terms: [],
  },
  'mrk-14-27': {
    title: 'I Will Smite the Shepherd',
    principle:
      'On the way to Gethsemane Jesus quoted Zechariah 13:7: smite the shepherd, and the sheep scatter. First principle: even the disciples\' panic was written down ahead of time. The Shepherd who was struck is the LORD\'s own Fellow.',
    sourceKeywords: ['All ye shall be offended', 'it is written', 'smite the shepherd', 'sheep shall be scattered'],
    fulfillmentKeywords: ['smite the shepherd', 'the sheep shall be scattered'],
    terms: [],
  },
  'mrk-15-34': {
    title: 'My God, My God, Why Hast Thou Forsaken Me?',
    principle:
      'At the ninth hour Jesus cried out on the cross, and his words open Psalm 22. First principle: he really was forsaken, and Scripture had said it would happen. The righteous Sufferer bore that abandonment so that no one who feels forsaken has to be alone.',
    sourceKeywords: ['ninth hour', 'Eloi, Eloi, lama sabachthani', 'why hast thou forsaken me'],
    fulfillmentKeywords: ['My God, my God, why hast thou forsaken me'],
    terms: [],
  },

  // ── Hand-written expansion: Acts ────────────────────────────────────────
  'act-1-8': {
    title: 'Witnesses unto the Uttermost Part of the Earth',
    principle:
      'Power from the Holy Ghost sends witnesses from Jerusalem to the ends of the earth. First principle: Isaiah 49\'s salvation-to-the-ends becomes the church\'s marching order. The Spirit is the engine of prophecy.',
    sourceKeywords: ['receive power', 'the Holy Ghost is come upon you', 'uttermost part of the earth'],
    fulfillmentKeywords: ['my salvation unto the end of the earth'],
    terms: [],
  },
  'act-1-11': {
    title: 'This Same Jesus Shall So Come',
    principle:
      '"this same Jesus shall so come in like manner." The angels make the ascension the pattern of His return. First principle: the clouds that received Him are the clouds that will bring Him again. Zechariah\'s writings say clearly that the Lord Himself will stand on the Mount of Olives.',
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
      'The prophets showed beforehand that Christ would suffer, and God has fulfilled what they said. First principle: the cross was God\'s plan, told in advance. He carried it out on schedule, and guilty hands did the deed.',
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
      'The church prays Psalm 2 over the threats of rulers: "kings stood up, rulers gathered — against the Lord and His Christ." First principle: Scripture foretold that kings would rage against the gospel. Such rage meets the throne of God in heaven. The heavens answer with boldness, and they never retreat.',
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
      'At the bush, God names Himself the God of Abraham, Isaac, and Jacob, and Moses trembles. First principle: the God of the covenant binds Himself to those generations. The hope of resurrection is built into the way He names Himself.',
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
      'The Maker of all needs no house of stone. First principle: creation came before the temple. God\'s own hand made everything, so nothing His hand made can contain Him.',
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
      'Peter\'s message to Cornelius: all the prophets witness that through Christ\'s name "whosoever believeth" receives the remission of sins. First principle: the prophets have one subject and one offer. That offer is forgiveness through the Name. God gladly forgives the person who believes.',
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
      'Paul and Barnabas quote Isaiah 49 as their commission to turn to the Gentiles. First principle: the Servant\'s salvation for the whole world is carried on by His witnesses. Those who believe are ordained for eternal life. This was no afterthought.',
    sourceKeywords: ['the Lord hath commanded us', 'a light of the Gentiles', 'salvation unto the ends of the earth'],
    fulfillmentKeywords: ['a light to the Gentiles', 'end of the earth'],
    terms: [],
  },
  'act-15-16': {
    title: 'I Will Build Again the Tabernacle of David',
    principle:
      'James settles the Gentile question with Amos: God returns and rebuilds David\'s fallen booth. Then the residue of men may seek the Lord. First principle: Gentile inclusion is no plan B. It is the rebuilt tabernacle, and Amos foretold it. God is gathering the Gentiles now, exactly as He promised. So the matter was settled by Scripture. The Gentiles are in the church because God said they would be.',
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
      'Matthew\'s first line points to the whole book. Jesus Christ is David\'s royal heir and Abraham\'s promised Seed. First principle: two great threads of God\'s binding promise open the genealogy. They are kingship and worldwide blessing.',
    sourceKeywords: ['generation of Jesus Christ', 'son of David', 'son of Abraham'],
    fulfillmentKeywords: ['thy seed', 'I will establish the throne'],
    terms: [],
  },
  'mat-2-2': {
    title: 'Where Is He That Is Born King of the Jews?',
    principle:
      'Wise men from the east follow His star to worship the newborn King. First principle: Balaam\'s Star out of Jacob and Isaiah\'s nations coming to His light begin to come true here. Gentile pilgrims and a sign in the sky are the first part of that fulfillment.',
    sourceKeywords: ['born King of the Jews', 'seen his star in the east', 'worship him'],
    fulfillmentKeywords: ['a Star out of Jacob', 'nations shall come to thy light'],
    terms: [],
  },
  'mat-2-15': {
    title: 'Out of Egypt Have I Called My Son',
    principle:
      'The flight and the return fulfill Hosea 11:1. First principle: Israel\'s history is a pattern that points forward. The Son lives through the nation\'s exodus and becomes what Israel could only picture in advance.',
    sourceKeywords: ['that it might be fulfilled', 'Out of Egypt have I called my son'],
    fulfillmentKeywords: ['called my son out of Egypt'],
    terms: [],
  },
  'mat-2-18': {
    title: 'Rachel Weeping for Her Children',
    principle:
      'Herod\'s massacre fulfills Jeremiah 31:15 at Ramah\'s border. First principle: even the grief of Bethlehem was written down. The same chapter that weeps also holds out God\'s new binding promise.',
    sourceKeywords: ['lamentation, and weeping', 'Rachel weeping for her children', 'would not be comforted'],
    fulfillmentKeywords: ['Rahel weeping for her children', 'refused to be comforted'],
    terms: [],
  },
  'mat-2-23': {
    title: 'He Shall Be Called a Nazarene',
    principle:
      'Settling in Nazareth fulfills the pattern the prophets gave of the despised Branch (netser) from humble places. First principle: the Messiah comes from the rejected corner. Even the contempt for Nazareth fits what the prophets said.',
    sourceKeywords: ['dwelt in a city called Nazareth', 'spoken by the prophets', 'a Nazarene'],
    fulfillmentKeywords: ['a Branch grow out of his roots'],
    terms: [],
  },
  'mat-3-3': {
    title: 'The Voice of One Crying in the Wilderness',
    principle:
      'John is Isaiah 40:3 in person, the one who prepares the Lord\'s way. First principle: the forerunner preaches the road before the King comes. Repentance levels the valleys.',
    sourceKeywords: ['spoken of by the prophet Esaias', 'voice of one crying in the wilderness', 'make his paths straight'],
    fulfillmentKeywords: ['prepare ye the way of the LORD'],
    terms: [],
  },
  'mat-3-17': {
    title: 'This Is My Beloved Son',
    principle:
      'The Father\'s voice joins Psalm 2\'s decree to Isaiah 42\'s delight in the Servant. First principle: the Son and the Servant are one Person. God crowns Him King and makes Him the gentle Redeemer. He says it all in one sentence from heaven.',
    sourceKeywords: ['a voice from heaven', 'This is my beloved Son', 'in whom I am well pleased'],
    fulfillmentKeywords: ['Thou art my Son', 'Behold my servant'],
    terms: [],
  },
  'mat-4-6': {
    title: 'He Shall Give His Angels Charge Concerning Thee',
    principle:
      'Satan quotes Psalm 91 to provoke a leap from the temple. First principle: the devil can quote Scripture, but he leaves out the words Thou shalt not tempt the Lord thy God. A promise twisted becomes presumption.',
    sourceKeywords: ['If thou be the Son of God', 'He shall give his angels charge', 'bear thee up'],
    fulfillmentKeywords: ['he shall give his angels charge over thee'],
    terms: [],
  },
  'mat-4-7': {
    title: 'Thou Shalt Not Tempt the Lord Thy God',
    principle:
      'Jesus answers the second temptation with Deuteronomy 6:16, saying, It is written again. First principle: one Scripture answers another. Faith trusts God and does not demand that He prove Himself.',
    sourceKeywords: ['It is written again', 'Thou shalt not tempt the Lord thy God'],
    fulfillmentKeywords: ['Ye shall not tempt the LORD your God'],
    terms: [],
  },
  'mat-4-10': {
    title: 'Thou Shalt Worship the Lord Thy God Only',
    principle:
      'Jesus turns down the offer of the kingdoms in exchange for worship, and answers with Deuteronomy 6:13. First principle: God alone receives worship. Christ wins the kingdoms legally at Calvary, not illegally at the mountain.',
    sourceKeywords: ['Get thee hence, Satan', 'worship the Lord thy God', 'him only shalt thou serve'],
    fulfillmentKeywords: ['him shalt thou serve'],
    terms: [],
  },
  'mat-4-14': {
    title: 'That It Might Be Fulfilled by Esaias',
    principle:
      'Matthew marks the move to Capernaum, where Isaiah 9 begins to come true. First principle: even the geography was prophesied. Where the Light would shine was written down before the move.',
    sourceKeywords: ['that it might be fulfilled', 'Esaias the prophet', 'Galilee'],
    fulfillmentKeywords: ['the land of Zebulun', 'way of the sea'],
    terms: [],
  },
  'mat-4-16': {
    title: 'The People Which Sat in Darkness Saw Great Light',
    principle:
      'Isaiah 9:2 is fulfilled over Galilee, where light sprung up in death\'s shadow. First principle: the dawn starts where darkness sat longest. Jesus preaches the kingdom from that light onward.',
    sourceKeywords: ['sat in darkness', 'saw great light', 'light is sprung up'],
    fulfillmentKeywords: ['the people that walked in darkness', 'seen a great light'],
    terms: [],
  },
  'mat-5-3': {
    title: 'Blessed Are the Poor in Spirit',
    principle:
      'The kingdom of heaven belongs to the spiritually poor. First principle: the Beatitudes restate Isaiah 61\'s good news to the meek. They are blessings of God\'s binding promise. The anointed One now preaches His own charter.',
    sourceKeywords: ['Blessed are the poor in spirit', 'kingdom of heaven'],
    fulfillmentKeywords: ['preach good tidings unto the meek', 'bind up the brokenhearted'],
    terms: [],
  },
  'mat-5-5': {
    title: 'Blessed Are the Meek, for They Inherit the Earth',
    principle:
      'Jesus folds Psalm 37:11 into the Beatitudes word for word. First principle: meekness, not force, inherits the earth. That is the order of the kingdom in the psalm. The meek King keeps it.',
    sourceKeywords: ['Blessed are the meek', 'inherit the earth'],
    fulfillmentKeywords: ['the meek shall inherit the earth', 'delight thyself in the LORD'],
    terms: [],
  },
  'mat-5-8': {
    title: 'Blessed Are the Pure in Heart, for They Shall See God',
    principle:
      'Psalm 24\'s ascent question — who shall ascend into the hill of the LORD? — Jesus answers it in the form of a beatitude. First principle: God gives the clean hands and pure heart that see God. No one earns that sight. Christ is the open vision.',
    sourceKeywords: ['Blessed are the pure in heart', 'they shall see God'],
    fulfillmentKeywords: ['pure heart', 'who shall ascend into the hill'],
    terms: [],
  },
  'mat-5-17': {
    title: 'I Am Not Come to Destroy, but to Fulfil',
    principle:
      'The law and the prophets stand until everything is fulfilled in Christ. First principle: Christ is the goal of the law, not its enemy. Every jot and tittle — the smallest letter and stroke — finds its meaning in what He did and taught.',
    sourceKeywords: ['destroy the law, or the prophets', 'but to fulfil', 'one jot or one tittle'],
    fulfillmentKeywords: ['I delight to do thy will', 'the law is in his heart'],
    terms: [],
  },
  'mat-5-21': {
    title: 'Ye Have Heard... Thou Shalt Not Kill',
    principle:
      'Jesus deepens the sixth commandment to cover anger without a cause. First principle: Christ writes the law on the heart. He first wrote that law on stone. Obedience now reaches the temper, not only the act.',
    sourceKeywords: ['said of them of old time', 'Thou shalt not kill', 'without a cause'],
    fulfillmentKeywords: ['Thou shalt not kill'],
    terms: [],
  },
  'mat-5-27': {
    title: 'Thou Shalt Not Commit Adultery',
    principle:
      'The seventh commandment reaches as far as a lustful look. First principle: God\'s binding promise governs the inner man. Purity of heart is the truest chastity.',
    sourceKeywords: ['Thou shalt not commit adultery', 'looketh on a woman'],
    fulfillmentKeywords: ['Thou shalt not commit adultery'],
    terms: [],
  },
  'mat-5-33': {
    title: 'Thou Shalt Not Forswear Thyself',
    principle:
      'Jesus brings the law about oaths in Leviticus and Numbers back to plain yes and no. First principle: truthfulness needs no sworn scaffolding. The law\'s aim is a heart whose word is always true.',
    sourceKeywords: ['Thou shalt not forswear thyself', 'perform unto the Lord thine oaths'],
    fulfillmentKeywords: ['thou shalt not take the name of the LORD in vain'],
    terms: [],
  },
  'mat-5-38': {
    title: 'An Eye for an Eye, and a Tooth for a Tooth',
    principle:
      'The lex talionis, the law of an eye for an eye, set a judge\'s limit on vengeance. Jesus tells the disciple to turn the other cheek. First principle: the courts restrain evil, but the disciple\'s own rule is grace that absorbs wrong.',
    sourceKeywords: ['An eye for an eye', 'a tooth for a tooth'],
    fulfillmentKeywords: ['eye for an eye', 'life for life'],
    terms: [],
  },
  'mat-5-43': {
    title: 'Love Thy Neighbour — and Hate Thine Enemy',
    principle:
      'Leviticus 19:18 stands. No one ever wrote the added words about hatred. First principle: the law\'s love was always meant to reach the enemy. God decides who counts as your neighbour, not how near that person lives.',
    sourceKeywords: ['Thou shalt love thy neighbour', 'hate thine enemy'],
    fulfillmentKeywords: ['thou shalt love thy neighbour as thyself'],
    terms: [],
  },
  'mat-8-17': {
    title: 'Himself Took Our Infirmities',
    principle:
      'Healing the sick fulfills Isaiah 53:4 — He bore our sicknesses. First principle: the price paid so sin can be forgiven shows compassion that reaches the body as well as the soul. The Sin-Bearer carries the whole burden of the fall.',
    sourceKeywords: ['that it might be fulfilled', 'took our infirmities', 'bare our sicknesses'],
    fulfillmentKeywords: ['bare our sicknesses', 'carried our sorrows'],
    terms: [],
  },
  'mat-9-13': {
    title: 'I Will Have Mercy, and Not Sacrifice',
    principle:
      'Jesus sends the critics to school with Hosea 6:6. First principle: ritual without mercy misses the heart of the law. God\'s first concern is His binding promise of love. He extends that love to sinners at His table.',
    sourceKeywords: ['go ye and learn what that meaneth', 'I will have mercy, and not sacrifice'],
    fulfillmentKeywords: ['I desired mercy, and not sacrifice', 'knowledge of God more than burnt offerings'],
    terms: [],
  },
  'mat-11-10': {
    title: 'Behold, I Send My Messenger Before Thy Face',
    principle:
      'John is Malachi 3:1\'s messenger, and Jesus Himself says so. First principle: the prophecy about the forerunner puts the Messiah\'s arrival in history. Two figures, one written plan.',
    sourceKeywords: ['of whom it is written', 'I send my messenger before thy face', 'prepare thy way'],
    fulfillmentKeywords: ['Behold, I will send my messenger'],
    terms: [],
  },
  'mat-12-7': {
    title: 'If Ye Had Known What This Meaneth',
    principle:
      'Mercy over sacrifice, again from Hosea. The guiltless are condemned by men who love ritual. First principle: the Sabbath and sacrament serve mercy. The Lord of the Sabbath shows which matter weighs more.',
    sourceKeywords: ['if ye had known what this meaneth', 'I will have mercy, and not sacrifice', 'the guiltless'],
    fulfillmentKeywords: ['I desired mercy, and not sacrifice'],
    terms: [],
  },
  'mat-12-17': {
    title: 'That It Might Be Fulfilled by Esaias the Prophet',
    principle:
      'Matthew quotes the Servant Song as the key that unlocks Christ\'s quiet, gentle ministry. First principle: the promised King\'s manner was as prophesied as His miracles. He did not strive, and He did not break bruised reeds.',
    sourceKeywords: ['that it might be fulfilled', 'Esaias the prophet'],
    fulfillmentKeywords: ['Behold my servant', 'a bruised reed shall he not break'],
    terms: [],
  },
  'mat-12-18': {
    title: 'Behold My Servant, Whom I Have Chosen',
    principle:
      'Isaiah 42:1 is quoted here almost word for word: My beloved, in whom My soul is well pleased; He shall shew judgment to the Gentiles. First principle: the voice at the Baptism and the Servant Song appoint the same Servant.',
    sourceKeywords: ['Behold my servant, whom I have chosen', 'judgment to the Gentiles', 'well pleased'],
    fulfillmentKeywords: ['Behold my servant, whom I uphold', 'mine elect'],
    terms: [],
  },
  'mat-12-40': {
    title: 'As Jonas Was Three Days and Three Nights',
    principle:
      'The sign of Jonah: three days in the tomb, then coming out alive. First principle: the resurrection was the sign Jesus gave to a generation that kept asking for one. It is still the only sign that matters.',
    sourceKeywords: ['as Jonas was three days', 'in the whale\'s belly', 'so shall the Son of man be'],
    fulfillmentKeywords: ['in the belly of the fish', 'three days and three nights'],
    terms: [],
  },
  'mat-13-14': {
    title: 'In Them Is Fulfilled the Prophecy of Esaias',
    principle:
      'Isaiah 6 foretold a people who would hear the parables and stay hard. First principle: when a person keeps refusing the light God gives, that refusal becomes a judgment. Hearing without understanding is not an accident.',
    sourceKeywords: ['in them is fulfilled', 'By hearing ye shall hear', 'shall not understand'],
    fulfillmentKeywords: ['Go, and tell this people', 'hear ye indeed'],
    terms: [],
  },
  'mat-13-35': {
    title: 'I Will Open My Mouth in Parables',
    principle:
      'Jesus\' teaching in parables quotes Psalm 78. First principle: the parables are prophecy fulfilled. Secrets hidden from the world\'s foundation are now told in stories, and ancient words find their final voice.',
    sourceKeywords: ['that it might be fulfilled', 'I will open my mouth in parables', 'kept secret from the foundation'],
    fulfillmentKeywords: ['I will open my mouth in a parable', 'dark sayings of old'],
    terms: [],
  },
  'mat-15-4': {
    title: 'For God Commanded, Honour Thy Father and Mother',
    principle:
      'Jesus sets the fifth commandment against the corban tradition. First principle: God\'s commandment defines honor, not human tradition. Any tradition that cancels the commandment is worthless.',
    sourceKeywords: ['For God commanded', 'Honour thy father and mother', 'let him die the death'],
    fulfillmentKeywords: ['Honour thy father and thy mother'],
    terms: [],
  },
  'mat-15-8': {
    title: 'This People Draweth Nigh unto Me with Their Mouth',
    principle:
      'Isaiah 29:13 is quoted again here: lips come close while the heart stays far. Men teach their own rules as if they were God\'s commandments. First principle: lips that say the right words prove nothing about the heart. Worship that is empty can quote Scripture well.',
    sourceKeywords: ['draweth nigh unto me with their mouth', 'honoureth me with their lips', 'heart is far from me'],
    fulfillmentKeywords: ['draw near with their mouth', 'removed their heart far from me'],
    terms: [],
  },
  'mat-17-5': {
    title: 'Hear Ye Him',
    principle:
      'On the mount of transfiguration the Father repeats the words from the Baptism. He adds the command Moses gave: "hear ye Him." First principle: the Prophet like Moses is here. Hear Him above Moses and Elijah themselves.',
    sourceKeywords: ['a voice out of the cloud', 'This is my beloved Son', 'hear ye him'],
    fulfillmentKeywords: ['Unto him ye shall hearken', 'Thou art my Son'],
    terms: [],
  },
  'mat-19-4': {
    title: 'He Which Made Them at the Beginning',
    principle:
      'Jesus answers the question about divorce by going back to creation. He points to male and female from the beginning. First principle: Genesis settles what marriage is. The way the Creator first made us settles the question.',
    sourceKeywords: ['Have ye not read', 'made them at the beginning', 'male and female'],
    fulfillmentKeywords: ['male and female created he them'],
    terms: [],
  },
  'mat-19-5': {
    title: 'They Twain Shall Be One Flesh',
    principle:
      'Matthew quotes Genesis 2:24 as God\'s own words about marriage. First principle: the one-flesh bond goes back to creation. God joined the two, and no council or custom of men may put them apart.',
    sourceKeywords: ['leave father and mother', 'one flesh'],
    fulfillmentKeywords: ['they shall be one flesh'],
    terms: [],
  },
  'mat-19-18': {
    title: 'Thou Shalt Do No Murder',
    principle:
      'Jesus repeats the commandments to the rich young ruler. First principle: the law was never a stairway into heaven. It was a mirror held up to the neighbor. Its whole weight is love.',
    sourceKeywords: ['Thou shalt do no murder', 'Thou shalt not steal', 'bear false witness'],
    fulfillmentKeywords: ['Thou shalt not kill', 'Thou shalt not steal'],
    terms: [],
  },
  'mat-21-5': {
    title: 'Thy King Cometh unto Thee, Meek',
    principle:
      'Zechariah 9:9 and Isaiah 62:11 meet at the triumphal entry. First principle: salvation comes riding on a donkey. Meekness is not the absence of majesty. It is the way majesty shows itself.',
    sourceKeywords: ['Tell ye the daughter of Sion', 'thy King cometh unto thee', 'sitting upon an ass'],
    fulfillmentKeywords: ['riding upon an ass', 'thy salvation cometh'],
    terms: [],
  },
  'mat-21-13': {
    title: 'My House Shall Be Called the House of Prayer',
    principle:
      'Isaiah 56 opens the temple to all nations. Jeremiah 7 calls it a den of thieves. First principle: God\'s house is meant to be a house of prayer for the nations. Trade that shuts them out turns it into a robbers\' cave.',
    sourceKeywords: ['It is written', 'house of prayer', 'den of thieves'],
    fulfillmentKeywords: ['house of prayer for all people', 'den of robbers'],
    terms: [],
  },
  'mat-21-16': {
    title: 'Out of the Mouth of Babes and Sucklings',
    principle:
      'The children\'s Hosannas answer Psalm 8:2, and that psalm calls their praise perfected. First principle: God appoints praise from the least likely mouths. When the critics object, the psalm answers them.',
    sourceKeywords: ['Out of the mouth of babes', 'thou hast perfected praise'],
    fulfillmentKeywords: ['out of the mouth of babes', 'hast thou ordained strength'],
    terms: [],
  },
  'mat-21-42': {
    title: 'Did Ye Never Read in the Scriptures?',
    principle:
      'Psalm 118 and Isaiah 28 meet at the rejected Stone. First principle: God takes the kingdom away from those who refuse to build on His Stone. He gives it to a people who bring Him fruit.',
    sourceKeywords: ['Did ye never read in the scriptures', 'the builders rejected', 'head of the corner'],
    fulfillmentKeywords: ['the stone which the builders refused', 'a sure foundation'],
    terms: [],
  },
  'mat-22-32': {
    title: 'God Is Not the God of the Dead, but of the Living',
    principle:
      '"I AM the God of Abraham" carries a promise that outlives the grave. First principle: God\'s promise to be the God of His people cannot end at a tomb. The patriarchs are alive to Him.',
    sourceKeywords: ['I am the God of Abraham', 'not the God of the dead', 'but of the living'],
    fulfillmentKeywords: ['I am the God of thy father', 'I AM THAT I AM'],
    terms: [],
  },
  'mat-22-37': {
    title: 'Thou Shalt Love the Lord Thy God',
    principle:
      'The Shema and Leviticus 19:18 hold up the whole law and the prophets. First principle: love for God and love for neighbor is the law in one word. It is not a replacement for the commandments. It is their heart.',
    sourceKeywords: ['love the Lord thy God', 'all thy heart', 'all the law and the prophets'],
    fulfillmentKeywords: ['thou shalt love the LORD thy God', 'with all thine heart'],
    terms: [],
  },
  'mat-22-44': {
    title: 'The LORD Said unto My Lord',
    principle:
      'Psalm 110 stops the mouths of the Sadducees and the scribes. David calls the Messiah his Lord, and that Lord sits at God\'s right hand. First principle: Christ is David\'s Lord, and that is who He is. He is Son by birth and Lord by throne.',
    sourceKeywords: ['The LORD said unto my Lord', 'Sit thou on my right hand', 'footstool'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'until I make thine enemies'],
    terms: [],
  },
  'mat-24-15': {
    title: 'The Abomination of Desolation, Spoken of by Daniel',
    principle:
      'Jesus names Daniel as the prophet to read ahead of time for the desolation of the temple. First principle: "whoso readeth, let him understand." Reading the prophets was part of Jesus\' own preparation for His disciples.',
    sourceKeywords: ['abomination of desolation', 'spoken of by Daniel the prophet', 'stand in the holy place'],
    fulfillmentKeywords: ['abomination that maketh desolate', 'take away the daily sacrifice'],
    terms: [],
  },
  'mat-24-21': {
    title: 'Great Tribulation, Such as Was Not Since the Beginning',
    principle:
      'Daniel 12 is quoted for the worst time of trouble there has ever been. First principle: that trouble has a stated intensity and a stated limit. God shortens those days for the sake of His chosen people.',
    sourceKeywords: ['great tribulation', 'such as was not since the beginning', 'should be shortened'],
    fulfillmentKeywords: ['a time of trouble', 'such as never was since there was a nation'],
    terms: [],
  },
  'mat-24-31': {
    title: 'His Angels with a Great Sound of a Trumpet',
    principle:
      'The chosen are gathered from the four winds. The trumpet comes from Isaiah 27, and the regathering comes from Deuteronomy 30. First principle: God once scattered Israel with a trumpet, and He gathers Christ\'s chosen with the same trumpet. No one He has chosen is left out.',
    sourceKeywords: ['great sound of a trumpet', 'gather together his elect', 'from the four winds'],
    fulfillmentKeywords: ['shall be gathered', 'from the uttermost part of the earth'],
    terms: [],
  },
  'mat-26-28': {
    title: 'This Is My Blood of the New Testament',
    principle:
      'The cup quotes Jeremiah 31 and applies Exodus 24. The covenant is sealed with blood, and sins are forgiven. First principle: the new covenant is not written in ink but paid in blood. The Supper is the meal that keeps its memory.',
    sourceKeywords: ['my blood of the new testament', 'shed for many', 'remission of sins'],
    fulfillmentKeywords: ['I will make a new covenant', 'I will forgive their iniquity'],
    terms: [],
  },
  'mat-26-31': {
    title: 'I Will Smite the Shepherd, and the Sheep Scatter',
    principle:
      'Zechariah 13:7 is quoted over the night in Gethsemane. First principle: the sword of the LORD wakes against the Shepherd who is God\'s equal. The scattering itself shows who He is, even while it wounds them.',
    sourceKeywords: ['All ye shall be offended', 'it is written', 'I will smite the shepherd'],
    fulfillmentKeywords: ['smite the shepherd', 'sheep shall be scattered'],
    terms: [],
  },
  'mat-26-56': {
    title: 'All This Was Done, That the Scriptures Might Be Fulfilled',
    principle:
      'They arrested Him, they left Him, they ran. Every part of it stands inside the writings of the prophets. First principle: the disciples\' desertion does not push God\'s plan off its course. Even their desertion carries it out.',
    sourceKeywords: ['all this was done', 'the scriptures of the prophets might be fulfilled', 'forsook him, and fled'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mat-27-9': {
    title: 'They Took the Thirty Pieces of Silver',
    principle:
      'Zechariah 11 and Jeremiah 32-33 meet at the price of the potter\'s field. First principle: the quotation is exact in what it claims. The money from the betrayal buys a burial ground for strangers.',
    sourceKeywords: ['Then was fulfilled', 'thirty pieces of silver', 'potter'],
    fulfillmentKeywords: ['thirty pieces of silver', 'cast them to the potter'],
    terms: [],
  },
  'mat-27-35': {
    title: 'They Parted His Garments, Casting Lots',
    principle:
      'The soldiers carry out the crucifixion just as Psalm 22:18 had written it. First principle: at the cross the soldiers fulfilled Scripture without knowing it. God\'s plan needed no willing help from them.',
    sourceKeywords: ['parted his garments', 'casting lots', 'that it might be fulfilled'],
    fulfillmentKeywords: ['parted my raiment', 'did cast lots'],
    terms: [],
  },
  'mat-27-46': {
    title: 'Eli, Eli, Lama Sabachthani?',
    principle:
      'At the ninth hour Jesus cries the words of Psalm 22:1. He cries them in Hebrew. First principle: the crucified One prays the psalm that traces His own agony. He was forsaken so that we might be received.',
    sourceKeywords: ['ninth hour', 'My God, my God', 'why hast thou forsaken me'],
    fulfillmentKeywords: ['My God, my God, why hast thou forsaken me'],
    terms: [],
  },
  'mat-27-48': {
    title: 'Vinegar on a Reed',
    principle:
      'The sponge of vinegar answers Psalm 69:21. First principle: the last act of the Passion was kindness turned into mockery. It had been written down long before.',
    sourceKeywords: ['took a spunge', 'filled it with vinegar', 'gave him to drink'],
    fulfillmentKeywords: ['in my thirst', 'gave me vinegar to drink'],
    terms: [],
  },
  'mat-28-18': {
    title: 'All Power Is Given unto Me',
    principle:
      'The risen Christ receives the dominion of Daniel 7 and the possession of Psalm 2. First principle: the Great Commission rests on all authority. The mission announces a throne. It does not ask a favor.',
    sourceKeywords: ['All power is given unto me', 'in heaven and in earth', 'Go ye therefore'],
    fulfillmentKeywords: ['dominion and glory, and a kingdom', 'I shall give thee the uttermost parts'],
    terms: [],
  },
  'mat-28-20': {
    title: 'Lo, I Am with You Alway',
    principle:
      'The promise runs to the end of the world. The Immanuel of chapter 1 is still with His people. First principle: the book that opens with God with us closes with God with you always. That promise outlasts every generation.',
    sourceKeywords: ['I am with you alway', 'even unto the end of the world'],
    fulfillmentKeywords: ['I will strengthen thee', 'I will help thee'],
    terms: [],
  },

  // ── Hand-written expansion: Romans ──────────────────────────────────────
  'rom-1-2': {
    title: 'Promised Afore by His Prophets',
    principle:
      'The gospel was promised before through the prophets in the holy scriptures. First principle: the good news is not a new invention. It is an old promise about the Son, announced in David\'s line and in David\'s throne.',
    sourceKeywords: ['promised afore', 'his prophets', 'holy scriptures'],
    fulfillmentKeywords: ['Thou art my Son', 'unto us a son is given'],
    terms: [],
  },
  'rom-1-4': {
    title: 'Declared the Son of God by the Resurrection',
    principle:
      'God raised Jesus from the dead. He marked him out as Son with power. That enacted Psalm 2\'s decree. First principle: the resurrection is God publicly installing the Son. The seed of David is shown to be Lord.',
    sourceKeywords: ['declared to be the Son of God', 'by the resurrection from the dead', 'spirit of holiness'],
    fulfillmentKeywords: ['Thou art my Son', 'wilt not leave my soul in hell'],
    terms: [],
  },
  'rom-1-16': {
    title: 'The Power of God unto Salvation',
    principle:
      'The gospel saves every believer, Jew first and also Greek. First principle: Isaiah 49 spoke of a light to the nations. That light shows how far the gospel reaches. It is power for anyone who believes. No one who preaches it needs to be ashamed.',
    sourceKeywords: ['not ashamed of the gospel', 'power of God unto salvation', 'Jew first, and also to the Greek'],
    fulfillmentKeywords: ['my salvation unto the end of the earth'],
    terms: [],
  },
  'rom-1-20': {
    title: 'His Eternal Power and Godhead Are Clearly Seen',
    principle:
      'Creation reveals the invisible God. That leaves unbelief without excuse. First principle: the heavens declare. Creation itself speaks to every person. No atheist is safe. The written law leaves no conscience clean apart from Christ either.',
    sourceKeywords: ['clearly seen', 'things that are made', 'without excuse'],
    fulfillmentKeywords: ['the heavens declare the glory of God'],
    terms: [],
  },
  'rom-3-10': {
    title: 'There Is None Righteous, No, Not One',
    principle:
      'The psalmist\'s verdict covers everyone: none righteous, none seeketh after God. First principle: the teaching that all people sin is not Paul\'s opinion. It is a chain of Scripture passages gathered against the whole world.',
    sourceKeywords: ['As it is written', 'none righteous', 'none that understandeth'],
    fulfillmentKeywords: ['there is none that doeth good', 'the fool hath said in his heart'],
    terms: [],
  },
  'rom-3-13': {
    title: 'Their Throat Is an Open Sepulchre',
    principle:
      'The Psalms list the ways we sin with our speech: deceitful tongues, asp poison, cursing lips. First principle: sin is heard most clearly in the mouth. The picture of our guilt comes from Israel\'s own songbook.',
    sourceKeywords: ['open sepulchre', 'used deceit', 'poison of asps'],
    fulfillmentKeywords: ['the poison of asps', 'speaketh lies'],
    terms: [],
  },
  'rom-3-15': {
    title: 'Swift to Shed Blood',
    principle:
      'Paul applies Isaiah 59 to everyone. The charge there is feet that run to evil. First principle: violence shows what is ruined inside. The feet are swift because the heart is far away.',
    sourceKeywords: ['swift to shed blood', 'destruction and misery'],
    fulfillmentKeywords: ['their feet run to evil', 'they are swift to shed innocent blood'],
    terms: [],
  },
  'rom-3-18': {
    title: 'No Fear of God Before Their Eyes',
    principle:
      'Psalm 36 gives the final diagnosis: unbelief is not a failure of the mind. It is moral rebellion. First principle: the root of sin is the absence of reverent fear. Every other sin grows from this soil.',
    sourceKeywords: ['no fear of God', 'before their eyes'],
    fulfillmentKeywords: ['there is no fear of God before his eyes'],
    terms: [],
  },
  'rom-3-20': {
    title: 'By the Law Is the Knowledge of Sin',
    principle:
      'No flesh is justified by deeds of the law — no one is declared in the right by keeping the law. The law points out the disease. It does not cure it. First principle: the law is a mirror, not a cleaner. It shows you the stain, but it cannot wash it away. Right standing must come from somewhere else entirely.',
    sourceKeywords: ['deeds of the law', 'no flesh be justified', 'knowledge of sin'],
    fulfillmentKeywords: ['in thy sight shall no man living be justified'],
    terms: [],
  },
  'rom-4-13': {
    title: 'Heir of the World Through the Righteousness of Faith',
    principle:
      'Abraham\'s promise to inherit the world did not come through the law. It came through faith. First principle: the land promise was always a down payment on a worldwide inheritance. Abraham received it by believing, not by keeping the law.',
    sourceKeywords: ['heir of the world', 'through the righteousness of faith', 'not through the law'],
    fulfillmentKeywords: ['unto thy seed will I give this land'],
    terms: [],
  },
  'rom-4-17': {
    title: 'A Father of Many Nations Have I Made Thee',
    principle:
      'God calls things that are not as though they were. Abraham believed the God who gives life. First principle: faith trusts what God has already spoken. God gave Abraham the title father of nations before he had a single child.',
    sourceKeywords: ['father of many nations', 'quickeneth the dead', 'calleth those things which be not'],
    fulfillmentKeywords: ['a father of many nations have I made thee'],
    terms: [],
  },
  'rom-4-18': {
    title: 'Against Hope Believed in Hope',
    principle:
      'A hundred-year-old man embraces “So shall thy seed be.” First principle: hoping against hope is still hope. It rests on God\'s word. The stars of Genesis 15 still measure the promise.',
    sourceKeywords: ['against hope believed in hope', 'So shall thy seed be'],
    fulfillmentKeywords: ['tell the stars', 'so shall thy seed be'],
    terms: [],
  },
  'rom-4-25': {
    title: 'Delivered for Our Offences, Raised for Our Justification',
    principle:
      'Isaiah 53\'s two clauses sum it up: delivered and raised. First principle: the cross pays the debt. The resurrection announces the receipt. God declares a guilty person to be in the right. The empty tomb is the proof.',
    sourceKeywords: ['delivered for our offences', 'raised again for our justification'],
    fulfillmentKeywords: ['was wounded for our transgressions', 'shall justify many'],
    terms: [],
  },
  'rom-5-14': {
    title: 'Adam Is the Figure of Him That Was to Come',
    principle:
      'Death ruled from Adam\'s time onward. That was a pattern pointing forward to Christ. First principle: history divides under two heads. In Adam all die. The second Adam heads a race of life.',
    sourceKeywords: ['death reigned', 'the figure of him that was to come', 'Adam\'s transgression'],
    fulfillmentKeywords: ['in Adam all die', 'a living soul'],
    terms: [],
  },
  'rom-5-15': {
    title: 'Much More the Grace of God Hath Abounded',
    principle:
      'One offense brought death. One Man\'s gift abounds to many. First principle: grace is not a matching amount. It overflows. What the fall lost, the gift outweighs.',
    sourceKeywords: ['the free gift', 'abounded unto many', 'grace of God'],
    fulfillmentKeywords: ['shall justify many', 'he shall see of the travail of his soul'],
    terms: [],
  },
  'rom-5-19': {
    title: 'By the Obedience of One Shall Many Be Made Righteous',
    principle:
      'Adam disobeyed. Christ obeyed, all the way to death. First principle: salvation is a swap of heads. The many are counted righteous because the One obeyed in their place.',
    sourceKeywords: ['by one man\'s disobedience', 'the obedience of one', 'made righteous'],
    fulfillmentKeywords: ['by his knowledge shall my righteous servant justify many', 'obedient unto death'],
    terms: [],
  },
  'rom-6-23': {
    title: 'The Wages of Sin Is Death',
    principle:
      'Sin pays a wage. That wage is death. God gives eternal life through Christ. First principle: there are two ways to be paid. You earn wages. You do not earn a gift. Another earned the gift for us. That is why the gift wins.',
    sourceKeywords: ['wages of sin is death', 'the gift of God is eternal life'],
    fulfillmentKeywords: ['thou shalt surely die', 'the soul that sinneth, it shall die'],
    terms: [],
  },
  'rom-8-11': {
    title: 'He That Raised Up Christ Shall Quicken Your Mortal Bodies',
    principle:
      'The Spirit who raised Jesus will raise believers. First principle: the Spirit who lives inside you answers Ezekiel\'s dry-bones question. The same power that raised Christ will raise you.',
    sourceKeywords: ['raised up Jesus from the dead', 'quicken your mortal bodies', 'his Spirit that dwelleth in you'],
    fulfillmentKeywords: ['I will cause breath to enter into you', 'ye shall live'],
    terms: [],
  },
  'rom-8-29': {
    title: 'Firstborn Among Many Brethren',
    principle:
      'God chose his people ahead of time. He shapes them to look like his Son. First principle: Psalm 89\'s firstborn title belongs to Christ. Salvation\'s goal is family resemblance to Him.',
    sourceKeywords: ['conformed to the image of his Son', 'firstborn among many brethren'],
    fulfillmentKeywords: ['I will make him my firstborn', 'higher than the kings'],
    terms: [],
  },
  'rom-8-34': {
    title: 'Christ That Died, Yea Rather, That Is Risen Again',
    principle:
      'The risen Christ pleads for us at God\'s right hand. No condemnation stands. First principle: the defense in heaven\'s courtroom is the Lamb who died. Psalm 110 shows him enthroned. Isaiah 53 shows him pleading for us.',
    sourceKeywords: ['It is Christ that died', 'risen again', 'maketh intercession for us'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'made intercession for the transgressors'],
    terms: [],
  },
  'rom-9-7': {
    title: 'In Isaac Shall Thy Seed Be Called',
    principle:
      'God counts Abraham\'s children through the promise, not merely through flesh. First principle: the line of God\'s binding promise runs by God\'s choice and by faith. Isaac carries the seed of the world-blessing, not Ishmael.',
    sourceKeywords: ['the seed of Abraham', 'In Isaac shall thy seed be called'],
    fulfillmentKeywords: ['in Isaac shall thy seed be called'],
    terms: [],
  },
  'rom-9-9': {
    title: 'At This Time Will I Come, and Sara Shall Have a Son',
    principle:
      'The word of promise came with a date God had set. First principle: God\'s promises come with God\'s seasons. The impossible birth at the appointed time is the pattern of the Incarnation itself — God becoming man.',
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
      'Paul cites Malachi\'s later words as God\'s settled choice across the generations. First principle: election means God\'s love comes before anything a person deserves. Jacob\'s line carries the Messiah, whatever prosperity Esau had.',
    sourceKeywords: ['Jacob have I loved', 'Esau have I hated', 'As it is written'],
    fulfillmentKeywords: ['Jacob have I loved', 'Esau have I hated'],
    terms: [],
  },
  'rom-9-15': {
    title: 'I Will Have Mercy on Whom I Will Have Mercy',
    principle:
      'Moses stands in the cleft of the rock and learns that God\'s mercy is his own to give. First principle: mercy cannot be owed. Mercy is God freely showing who he is. He showed that glory to Moses. He shows it in Christ too.',
    sourceKeywords: ['I will have mercy on whom I will have mercy', 'compassion on whom I will have compassion'],
    fulfillmentKeywords: ['I will make all my goodness pass before thee', 'shew mercy'],
    terms: [],
  },
  'rom-9-17': {
    title: 'Even for This Same Purpose Have I Raised Thee Up',
    principle:
      'God declared his name in all the earth through Pharaoh\'s hardened throne. First principle: God even turns opposition to his own use. He displays his power through rulers who refuse Him.',
    sourceKeywords: ['the scripture saith unto Pharaoh', 'I might shew my power in thee', 'declared throughout all the earth'],
    fulfillmentKeywords: ['for to shew in thee my power', 'my name may be declared'],
    terms: [],
  },
  'rom-9-25': {
    title: 'I Will Call Them My People, Which Were Not My People',
    principle:
      'Paul quotes Hosea\'s Lo-ammi reversal — the name means not my people — to make his point about Gentile grace. First principle: God renamed the unloved. He is still renaming. Not-my-people become sons of the living God.',
    sourceKeywords: ['in Osee', 'my people, which were not my people', 'beloved, which was not beloved'],
    fulfillmentKeywords: ['I will say to them which were not my people', 'Thou art my people'],
    terms: [],
  },
  'rom-9-26': {
    title: 'Children of the Living God',
    principle:
      'God proclaims adoption in the very place where rejection happened. First principle: Hosea shows where grace does its work. The same ground of unbelief becomes the ground of belonging.',
    sourceKeywords: ['in the place where it was said', 'not my people', 'children of the living God'],
    fulfillmentKeywords: ['Ye are the sons of the living God'],
    terms: [],
  },
  'rom-9-27': {
    title: 'A Remnant Shall Be Saved',
    principle:
      'Isaiah cried out: though Israel be as the sand, only a remnant returns. First principle: salvation is never a matter of numbers. The promise survives in the remnant, the faithful few God keeps for Himself.',
    sourceKeywords: ['Esaias also crieth', 'a remnant shall be saved', 'as the sand of the sea'],
    fulfillmentKeywords: ['a remnant shall return', 'the remnant according to the election of grace'],
    terms: [],
  },
  'rom-9-29': {
    title: 'Except the Lord of Sabaoth Had Left Us a Seed',
    principle:
      'If God had not held back a few, Israel would have been as Sodom. First principle: the saved seed is the evidence of mercy. What remains is what grace left behind, not what man kept safe.',
    sourceKeywords: ['Lord of Sabaoth', 'left us a seed', 'as Sodoma'],
    fulfillmentKeywords: ['except the LORD of hosts had left'],
    terms: [],
  },
  'rom-10-5': {
    title: 'The Man Which Doeth Those Things Shall Live by Them',
    principle:
      'Moses describes the righteousness that comes by the law: do these things and live. First principle: the law offers life to perfect performance. That standard condemns everyone, because no one has done it.',
    sourceKeywords: ['Moses describeth', 'the righteousness which is of the law', 'shall live by them'],
    fulfillmentKeywords: ['Ye shall therefore keep my statutes', 'which if a man do, he shall live'],
    terms: [],
  },
  'rom-10-6': {
    title: 'Say Not in Thine Heart, Who Shall Ascend into Heaven?',
    principle:
      'Paul reads Deuteronomy 30\'s near word as being about Christ. No one has to climb up or go down. First principle: righteousness by faith is near, not a pilgrimage. The Word is near, in mouth and heart.',
    sourceKeywords: ['the righteousness which is of faith', 'Who shall ascend into heaven', 'bring Christ down'],
    fulfillmentKeywords: ['it is not in heaven', 'very nigh unto thee'],
    terms: [],
  },
  'rom-10-11': {
    title: 'Whosoever Believeth on Him Shall Not Be Ashamed',
    principle:
      'Isaiah 28 lays a foundation Stone and ties a promise to it: the believer will not be put to shame. First principle: the Stone laid in Zion keeps the believer steady. As the prophet wrote, “he that believeth shall not make haste.” That person does not panic or run away.',
    sourceKeywords: ['the scripture saith', 'Whosoever believeth on him', 'shall not be ashamed'],
    fulfillmentKeywords: ['he that believeth shall not make haste', 'a tried stone'],
    terms: [],
  },
  'rom-10-15': {
    title: 'How Beautiful Are the Feet of Them That Preach',
    principle:
      'Isaiah 52 pictures a messenger running over the mountains. That messenger is the gospel preacher. First principle: good news needs a messenger who is sent. The beauty is in the message carried, not in the messenger\'s merit.',
    sourceKeywords: ['except they be sent', 'beautiful are the feet', 'glad tidings of good things'],
    fulfillmentKeywords: ['How beautiful upon the mountains', 'that bringeth good tidings'],
    terms: [],
  },
  'rom-10-16': {
    title: 'Lord, Who Hath Believed Our Report?',
    principle:
      'Isaiah 53 opens with a lament. Paul quotes it of Israel\'s unbelief. First principle: the report has gone out in every generation. Yet “the arm of the LORD” is revealed only to those who believe.',
    sourceKeywords: ['they have not all obeyed the gospel', 'Esaias saith', 'who hath believed our report'],
    fulfillmentKeywords: ['Who hath believed our report'],
    terms: [],
  },
  'rom-10-18': {
    title: 'Their Sound Went into All the Earth',
    principle:
      'Paul applies Psalm 19 to the reach of the gospel. First principle: the heavens needed no interpreter. The voice of the gospel travels the same way. The question is not whether people hear. It is whether they listen.',
    sourceKeywords: ['Have they not heard', 'their sound went into all the earth', 'ends of the world'],
    fulfillmentKeywords: ['their line is gone out through all the earth'],
    terms: [],
  },
  'rom-10-19': {
    title: 'I Will Provoke You to Jealousy by Them That Are No People',
    principle:
      'Moses\' song warns Israel about the favor shown to a foolish nation. First principle: grace that makes his people jealous is an old covenant tool. Gentile blessing is the sermon Israel was told to expect.',
    sourceKeywords: ['First Moses saith', 'provoke you to jealousy', 'a foolish nation'],
    fulfillmentKeywords: ['I will provoke them to jealousy', 'a foolish nation'],
    terms: [],
  },
  'rom-10-20': {
    title: 'I Was Found of Them That Sought Me Not',
    principle:
      'Isaiah 65 states a bold paradox: God was found by people who were not looking for him. He showed himself to people who never asked. First principle: grace makes the first move. Gentiles who never sought Him found God. That is the scandal and the glory of the gospel.',
    sourceKeywords: ['Esaias is very bold', 'found of them that sought me not', 'asked not after me'],
    fulfillmentKeywords: ['I am sought of them that asked not for me', 'I am found of them'],
    terms: [],
  },
  'rom-10-21': {
    title: 'All Day Long I Have Stretched Forth My Hands',
    principle:
      'God stretched out his hands to Israel all day long. Israel answered with disobedience and arguing back. First principle: their refusal did not mean God\'s patience failed. It meant they abused his patience. His hands stayed open all day.',
    sourceKeywords: ['to Israel he saith', 'stretched forth my hands', 'disobedient and gainsaying people'],
    fulfillmentKeywords: ['I have spread out my hands all the day'],
    terms: [],
  },
  'rom-11-3': {
    title: 'They Have Killed Thy Prophets; I Am Left Alone',
    principle:
      'In Romans, Paul quotes Elijah\'s complaint in his argument about the remnant — the faithful few who are left. First principle: even when faith feels extinct, God keeps seven thousand in reserve. Despair gets the count wrong.',
    sourceKeywords: ['killed thy prophets', 'digged down thine altars', 'I am left alone'],
    fulfillmentKeywords: ['I, even I only, am left', 'seven thousand that have not bowed'],
    terms: [],
  },
  'rom-11-8': {
    title: 'God Hath Given Them the Spirit of Slumber',
    principle:
      'Paul joins two passages: Isaiah\'s sleep sent in judgment and David\'s table that becomes a snare. First principle: refusing God again and again invites the blindness he gives. Eyes that close themselves are finally closed for them.',
    sourceKeywords: ['the spirit of slumber', 'eyes that they should not see', 'unto this day'],
    fulfillmentKeywords: ['the spirit of deep sleep', 'poured out upon you'],
    terms: [],
  },
  'rom-11-9': {
    title: 'Let Their Table Be Made a Snare',
    principle:
      'Psalm 69\'s imprecation — its prayer for judgment — lands on those who rejected the Messiah. First principle: prosperity without faith becomes a trap. The table itself can catch the ungrateful.',
    sourceKeywords: ['David saith', 'their table be made a snare', 'a recompence unto them'],
    fulfillmentKeywords: ['let their table become a snare', 'a trap'],
    terms: [],
  },
  'rom-11-10': {
    title: 'Let Their Eyes Be Darkened',
    principle:
      'Psalm 69:23 continues the picture: backs bent low and eyes gone dark. First principle: this prayer for judgment shows what it costs to reject the suffering King. When you refuse Him, you lose your spiritual sight.',
    sourceKeywords: ['Let their eyes be darkened', 'that they may not see', 'bow down their back'],
    fulfillmentKeywords: ['their eyes are darkened', 'that they see not'],
    terms: [],
  },
  'rom-11-26': {
    title: 'There Shall Come out of Sion the Deliverer',
    principle:
      'The salvation of all Israel rests on the coming Redeemer. He turns away ungodliness. First principle: the climax of the covenant — God\'s binding promise — is not a family line. It is Deliverance in person. Isaiah wrote of the go\'el from Zion, the family redeemer who buys his people back.',
    sourceKeywords: ['all Israel shall be saved', 'out of Sion the Deliverer', 'turn away ungodliness from Jacob'],
    fulfillmentKeywords: ['the Redeemer shall come to Zion', 'turn from transgression in Jacob'],
    terms: [],
  },
  'rom-11-27': {
    title: 'This Is My Covenant, When I Shall Take Away Their Sins',
    principle:
      'Paul brings Isaiah 59 and Jeremiah 31 together. In both, God\'s binding promise means one thing: sin taken away. First principle: the new covenant is defined by forgiveness written in hearts. That is the one thing the Deliverer accomplished.',
    sourceKeywords: ['this is my covenant unto them', 'take away their sins'],
    fulfillmentKeywords: ['this is my covenant with them', 'I will forgive their iniquity'],
    terms: [],
  },
  'rom-12-19': {
    title: 'Vengeance Is Mine; I Will Repay',
    principle:
      'Believers give up taking revenge. They leave revenge to God, as Scripture says. First principle: when we hand justice over to God, justice is certain to be done. The Song of Moses gives repayment to God alone.',
    sourceKeywords: ['avenge not yourselves', 'give place unto wrath', 'Vengeance is mine; I will repay'],
    fulfillmentKeywords: ['To me belongeth vengeance and recompence'],
    terms: [],
  },
  'rom-14-11': {
    title: 'Every Knee Shall Bow, Every Tongue Shall Confess',
    principle:
      'Isaiah 45\'s universal oath is the reason we put up with one another. We will all stand before God. First principle: one day everyone will confess. That makes judging one another unnecessary. The Judge is certain.',
    sourceKeywords: ['As I live, saith the Lord', 'every knee shall bow to me', 'confess to God'],
    fulfillmentKeywords: ['unto me every knee shall bow', 'every tongue shall swear'],
    terms: [],
  },
  'rom-15-3': {
    title: 'The Reproaches of Them That Reproached Thee Fell on Me',
    principle:
      'Christ pleased not Himself. Psalm 69\'s insults land on the Servant. First principle: the One who did not please Himself took the reproach meant for others. Strong believers bear with the weak in the same way.',
    sourceKeywords: ['Christ pleased not himself', 'as it is written', 'fell on me'],
    fulfillmentKeywords: ['the reproaches of them that reproached thee', 'fallen upon me'],
    terms: [],
  },
  'rom-15-9': {
    title: 'I Will Confess to Thee among the Gentiles',
    principle:
      'Paul cites Psalm 18 as Gentile praise foretold. First principle: the mercy God showed Israel was always meant to become Gentile song. David\'s victory psalm becomes the praise of the nations.',
    sourceKeywords: ['the Gentiles might glorify God for his mercy', 'I will confess to thee among the Gentiles'],
    fulfillmentKeywords: ['I will confess thee among the nations', 'sing unto thy name'],
    terms: [],
  },
  'rom-15-10': {
    title: 'Rejoice, Ye Gentiles, with His People',
    principle:
      'Moses\' final song commands the Gentiles to rejoice together with Israel. First principle: the Song of Moses already pictured Jew and Gentile rejoicing together. The church is that reunion.',
    sourceKeywords: ['Rejoice, ye Gentiles, with his people'],
    fulfillmentKeywords: ['Rejoice, O ye nations, with his people'],
    terms: [],
  },
  'rom-15-11': {
    title: 'Praise the Lord, All Ye Gentiles',
    principle:
      'Psalm 117 is the shortest psalm. It also gives the widest invitation. First principle: two verses call the whole world to praise. God\'s mercy toward us is great. It reaches everyone.',
    sourceKeywords: ['Praise the Lord, all ye Gentiles', 'laud him, all ye people'],
    fulfillmentKeywords: ['O praise the LORD, all ye nations'],
    terms: [],
  },
  'rom-15-21': {
    title: 'To Whom He Was Not Spoken of, They Shall See',
    principle:
      'Isaiah 52:15 explains why Paul preached where no one had gone before. First principle: Paul\'s mission followed prophecy. The message moves toward people who have never heard His name.',
    sourceKeywords: ['To whom he was not spoken of', 'they shall see', 'shall understand'],
    fulfillmentKeywords: ['so shall he sprinkle many nations', 'kings shall shut their mouths'],
    terms: [],
  },
  'rom-16-20': {
    title: 'The God of Peace Shall Bruise Satan Under Your Feet',
    principle:
      'Genesis 3:15 closes the letter. The promise that crushes the serpent now turns to the feet of believers, and soon. First principle: the church shares in the Seed\'s victory. Peace with God ends with Satan underfoot.',
    sourceKeywords: ['God of peace', 'bruise Satan under your feet', 'shortly'],
    fulfillmentKeywords: ['it shall bruise thy head'],
    terms: [],
  },
  'rom-16-25': {
    title: 'The Revelation of the Mystery Kept Secret Since the World Began',
    principle:
      'This doxology — a word of praise — reveals a mystery long hidden. The mystery is the preaching of Jesus Christ. First principle: the gospel is a secret now unsealed. What earlier generations whispered in pictures is now announced plainly.',
    sourceKeywords: ['the revelation of the mystery', 'kept secret since the world began', 'my gospel'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'rom-16-26': {
    title: 'Made Known to All Nations for the Obedience of Faith',
    principle:
      'God makes the mystery known through the prophetic scriptures. That message goes out to all nations. First principle: the promise to Abraham, the light of Isaiah, and the command of the everlasting God all meet here. The result is one obedience of faith, worldwide.',
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
      'The image of empires falls to chaff while the stone fills the earth. First principle: human kingdoms are one statue. God\'s kingdom is a mountain that grows. It was cut without hands, and nothing can stop it.',
    sourceKeywords: ['broken to pieces together', 'became like the chaff', 'filled the whole earth'],
    fulfillmentKeywords: ['shall the God of heaven set up a kingdom'],
    terms: [],
  },
  'dan-2-45': {
    title: 'A Stone Cut Out Without Hands',
    principle:
      'The interpretation is certain. God makes known what shall come hereafter. First principle: the kingdom is God\'s work, and it comes without hands. The dream is certain, so faith has something solid to stand on when empires boast.',
    sourceKeywords: ['cut out of the mountain without hands', 'the dream is certain', 'the interpretation thereof sure'],
    fulfillmentKeywords: ['a stone cut out without hands'],
    terms: [],
  },
  'dan-7-10': {
    title: 'The Judgment Was Set, and the Books Were Opened',
    principle:
      'The Ancient of Days sits. Thousand thousands serve Him, and the books open. First principle: the courtroom in heaven comes before the kingdom. The record is read before the verdict, and dominion is given to the Son.',
    sourceKeywords: ['thousand thousands ministered', 'ten thousand times ten thousand', 'the books were opened'],
    fulfillmentKeywords: ['the judgment was set', 'the books were opened'],
    terms: [],
  },
  'dan-7-18': {
    title: 'The Saints Shall Take the Kingdom',
    principle:
      'The saints of the Most High possess the kingdom for ever. First principle: the persecution runs its course and ends in possession. The little horn loses, and the saints inherit.',
    sourceKeywords: ['saints of the most High', 'take the kingdom', 'for ever and ever'],
    fulfillmentKeywords: ['the saints of the most High shall take'],
    terms: [],
  },
  'dan-7-21': {
    title: 'The Horn Made War with the Saints',
    principle:
      'The boastful horn wins against the saints, but only for a time. First principle: the war against the saints is real and violent, and it will end. It is written down so the suffering will not surprise us.',
    sourceKeywords: ['the same horn made war', 'prevailed against them'],
    fulfillmentKeywords: ['to make war with the saints', 'prevailed against them'],
    terms: [],
  },
  'dan-7-25': {
    title: 'He Shall Think to Change Times and Laws',
    principle:
      'The little power speaks against the Most High. It wears out the saints, and it rules for a time, times, and a dividing of time. First principle: that time has a limit. The wearing out of the saints comes to an end.',
    sourceKeywords: ['speak great words', 'wear out the saints', 'a time and times and the dividing of time'],
    fulfillmentKeywords: ['time, times, and an half'],
    terms: [],
  },
  'dan-7-26': {
    title: 'The Judgment Shall Sit, and They Shall Take Away His Dominion',
    principle:
      'The court sits, and the persecutor\'s dominion is consumed unto the end. First principle: every power that speaks against God has an end set for it. The same judgment that rules in favor of the saints removes the beasts.',
    sourceKeywords: ['the judgment shall sit', 'take away his dominion', 'consume and destroy it unto the end'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-7-27': {
    title: 'The Kingdom Given to the People of the Saints',
    principle:
      'Dominion under the whole heaven passes to the saints of the Most High. It is an everlasting kingdom, and all dominions serve Him. First principle: the end is not the beast\'s empire. It is the saints\' inheritance under the Son of man.',
    sourceKeywords: ['kingdom and dominion', 'people of the saints of the most High', 'everlasting kingdom'],
    fulfillmentKeywords: ['given to the saints', 'everlasting kingdom'],
    terms: [],
  },
  'dan-8-11': {
    title: 'He Magnified Himself to the Prince of the Host',
    principle:
      'The self-exalting power takes away the daily sacrifice and casts down the sanctuary. First principle: the war against God wears a religious face. The desecration of worship is the center of the prophecy.',
    sourceKeywords: ['magnified himself', 'the prince of the host', 'the place of his sanctuary was cast down'],
    fulfillmentKeywords: ['stand in the holy place'],
    terms: [],
  },
  'dan-8-17': {
    title: 'Understand, O Son of Man: at the Time of the End',
    principle:
      'Gabriel lifts the fallen Daniel. The vision belongs to the time of the end. First principle: visions like this are given so we understand, not to entertain us. The appointed time makes sense of the symbols.',
    sourceKeywords: ['Understand, O son of man', 'at the time of the end shall be the vision'],
    fulfillmentKeywords: ['the vision is for an appointed time'],
    terms: [],
  },
  'dan-10-6': {
    title: 'His Face as the Appearance of Lightning',
    principle:
      'The glorious man stands by the river. His body is like beryl, his eyes are fire, his feet are like brass, and his voice is like a multitude. First principle: God appears to someone here, before the visions begin. The glory of the messenger shows how much the message weighs.',
    sourceKeywords: ['appearance of lightning', 'eyes as lamps of fire', 'voice of his words like the voice of a multitude'],
    fulfillmentKeywords: ['countenance like lightning', 'eyes as lamps of fire'],
    terms: [],
  },
  'dan-10-13': {
    title: 'The Prince of Persia Withstood Me One and Twenty Days',
    principle:
      'Behind the empires you see, other princes are fighting, and Michael comes to help. First principle: prayer on earth touches a war in heaven. When an answer is delayed, that does not mean the angels are gone.',
    sourceKeywords: ['the prince of the kingdom of Persia', 'withstood me', 'Michael came to help me'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-10-21': {
    title: 'That Which Is Noted in the Scripture of Truth',
    principle:
      'Gabriel will show what is written in the true record. Michael stands as your prince. First principle: history is written down before it happens. The scripture of truth is the record, and empires must act it out.',
    sourceKeywords: ['the scripture of truth', 'none that holdeth with me', 'Michael your prince'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-11-31': {
    title: 'They Shall Place the Abomination That Maketh Desolate',
    principle:
      'Armed forces pollute the sanctuary and end the daily sacrifice. This is the desecration Jesus tells readers to watch for. First principle: Daniel 11 is Matthew 24\'s source text. The abomination — the thing that makes the holy place desolate — is scheduled, and flight is commanded.',
    sourceKeywords: ['pollute the sanctuary of strength', 'take away the daily sacrifice', 'abomination that maketh desolate'],
    fulfillmentKeywords: ['abomination of desolation'],
    terms: [],
  },
  'dan-12-1': {
    title: 'A Time of Trouble Such as Never Was',
    principle:
      'Michael stands up. Trouble comes like nothing before it. Everyone written in the book is delivered. First principle: the worst time in history has a list of names. Deliverance is written down, not left to chance.',
    sourceKeywords: ['Michael stand up', 'a time of trouble', 'found written in the book'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-12-4': {
    title: 'Shut Up the Words and Seal the Book',
    principle:
      'The book is sealed until the time of the end, when knowledge runs to and fro. First principle: prophecy can stay sealed and unclear for a long time. The seal opens when the world is ready to run with it.',
    sourceKeywords: ['shut up the words', 'seal the book', 'knowledge shall be increased'],
    fulfillmentKeywords: ['seal the book, even to the time of the end'],
    terms: [],
  },
  'dan-12-7': {
    title: 'A Time, Times, and an Half',
    principle:
      'The man in linen swears an oath about how long it lasts. When the scattering of the holy people\'s power is complete, all is finished. First principle: he swears to the end of the persecution. It runs three-and-a-half times, and then it is over.',
    sourceKeywords: ['sware by him that liveth for ever', 'a time, times, and an half', 'all these things shall be finished'],
    fulfillmentKeywords: ['time, and times, and an half'],
    terms: [],
  },
  'dan-12-11': {
    title: 'From the Daily Sacrifice Taken Away — a Thousand Two Hundred and Ninety Days',
    principle:
      'The abomination — the thing that makes the holy place desolate — is set up, and a counted span begins. First principle: God numbers the desolation. The day counts mean the horror has limits you can measure.',
    sourceKeywords: ['the daily sacrifice shall be taken away', 'abomination that maketh desolate', 'thousand two hundred and ninety days'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-12-12': {
    title: 'Blessed Is He That Waiteth',
    principle:
      'A blessing is promised to those who endure to the thousand three hundred and five and thirty days. First principle: waiting is blessed when the timeline belongs to God. The waiting has a set number of days.',
    sourceKeywords: ['Blessed is he that waiteth', 'thousand three hundred and five and thirty days'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'dan-12-13': {
    title: 'Thou Shalt Rest, and Stand in Thy Lot',
    principle:
      'Daniel is told to go his way and rest. He will rise for his portion at the end of days. First principle: the faithful die with a place kept for them. They rest now, and they stand at the end.',
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
      'Jesus is named faithful witness, first-begotten from the dead, prince of earth\'s kings. He is the One who loves us and washes us in His own blood. First principle: three titles name one Person. He is prophet, risen firstfruits, and sovereign heir.',
    sourceKeywords: ['faithful witness', 'first begotten of the dead', 'prince of the kings', 'washed us from our sins'],
    fulfillmentKeywords: ['firstborn of every creature', 'the firstfruits of them that slept'],
    terms: [],
  },
  'rev-1-6': {
    title: 'Hath Made Us Kings and Priests',
    principle:
      'The Lamb washes us and makes us a kingdom of priests to His God and Father. First principle: at Exodus 19 God made a binding promise and gave Israel a calling. That calling now belongs to the church. Jesus bought this people with his own blood, and he gives them both a throne and an altar.',
    sourceKeywords: ['kings and priests unto God', 'to him be glory and dominion'],
    fulfillmentKeywords: ['a kingdom of priests, and an holy nation'],
    terms: [],
  },
  'rev-1-8': {
    title: 'I Am Alpha and Omega, the Almighty',
    principle:
      'The Lord who is, was, and is to come names Himself the alphabet and the end of all things. First principle: this is the God whose titles Isaiah wrote down. Beginning and ending belong to him alone.',
    sourceKeywords: ['Alpha and Omega', 'the beginning and the ending', 'the Almighty'],
    fulfillmentKeywords: ['I the LORD, the first, and with the last'],
    terms: [],
  },
  'rev-1-11': {
    title: 'What Thou Seest, Write in a Book',
    principle:
      'The voice commands the writing and names the seven churches of Asia. First principle: God entrusts this revelation to a written book and to churches. The collection of Scripture begins with a book and ends with a book.',
    sourceKeywords: ['I am Alpha and Omega', 'write in a book', 'the seven churches'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'rev-1-13': {
    title: 'One Like unto the Son of Man',
    principle:
      'A figure like the Son of man walks among the candlesticks. He wears a priestly garment and a golden girdle. Daniel 7 and Ezekiel 1 are woven together in this picture. First principle: the glorified Christ is both the Priest who tends the lamps and the Judge who walks among His churches.',
    sourceKeywords: ['one like unto the Son of man', 'garment down to the foot', 'a golden girdle'],
    fulfillmentKeywords: ['one like the Son of man came with the clouds', 'his body also was like the beryl'],
    terms: [],
  },
  'rev-1-17': {
    title: 'Fear Not; I Am the First and the Last',
    principle:
      'John falls down as dead. The glorified Christ lays a right hand on him and speaks the title Isaiah used of God. First principle: the same hand that touched Daniel and the disciples touches John. The hand shows that he is God, and it shows kindness to one man.',
    sourceKeywords: ['I fell at his feet as dead', 'Fear not', 'I am the first and the last'],
    fulfillmentKeywords: ['Fear not, Daniel', 'I the LORD, the first'],
    terms: [],
  },
  'rev-2-7': {
    title: 'To Him That Overcometh Will I Give the Tree of Life',
    principle:
      'The tree in Eden, guarded since the fall, is promised to overcomers. First principle: the promises given to the church are the promises of Genesis. The Conqueror wins Paradise back for those who conquer.',
    sourceKeywords: ['he that hath an ear', 'to him that overcometh', 'the tree of life'],
    fulfillmentKeywords: ['the tree of life also in the midst of the garden', 'lest he put forth his hand'],
    terms: [],
  },
  'rev-2-17': {
    title: 'The Hidden Manna and a White Stone with a New Name',
    principle:
      'Overcomers eat from the hidden store and receive a private name. First principle: this is wilderness bread kept safe in heaven. It is also a name that only God and the one who receives it know.',
    sourceKeywords: ['the hidden manna', 'a white stone', 'a new name written'],
    fulfillmentKeywords: ['I will rain bread from heaven'],
    terms: [],
  },
  'rev-2-23': {
    title: 'I Am He Which Searcheth the Reins and Hearts',
    principle:
      'The Son claims the title of the One who searches hearts, and he repays each person according to works. First principle: the knowledge of hearts that belongs to God alone belongs to Jesus. He searches the churches. He does not merely look them over.',
    sourceKeywords: ['searcheth the reins and hearts', 'give unto every one of you according to your works'],
    fulfillmentKeywords: ['I the LORD search the heart'],
    terms: [],
  },
  'rev-2-27': {
    title: 'He Shall Rule Them with a Rod of Iron',
    principle:
      'Psalm 2\'s iron scepter is handed to the overcomer: "even as I received of my Father". First principle: the Messiah shares his rule with the faithful. The Son\'s inheritance includes people who rule with him.',
    sourceKeywords: ['rule them with a rod of iron', 'vessels of a potter', 'even as I received of my Father'],
    fulfillmentKeywords: ['thou shalt break them with a rod of iron'],
    terms: [],
  },
  'rev-2-28': {
    title: 'And I Will Give Him the Morning Star',
    principle:
      'The star Balaam saw coming out of Jacob is Christ\'s gift to those who conquer. First principle: the Star promised over Israel becomes the gift of the morning star, given to every overcomer. He gives Himself.',
    sourceKeywords: ['I will give him the morning star'],
    fulfillmentKeywords: ['there shall come a Star out of Jacob', 'a light that shineth'],
    terms: [],
  },
  'rev-3-5': {
    title: 'I Will Not Blot Out His Name out of the Book of Life',
    principle:
      'White raiment, an unblotted name, and confession before the Father. First principle: the Lamb keeps a book in heaven, and he reads the names aloud. That book is not a cold list. Every name in it matters, and every name stays.',
    sourceKeywords: ['clothed in white raiment', 'the book of life', 'I will confess his name'],
    fulfillmentKeywords: ['whosoever was not found written in the book of life'],
    terms: [],
  },
  'rev-3-7': {
    title: 'He That Hath the Key of David',
    principle:
      'The holy and true One holds the key Eliakim was given. He opens, and no one shuts. First principle: this key belongs to David\'s throne. Christ opens what no opposition can close.',
    sourceKeywords: ['he that is holy, he that is true', 'the key of David', 'openeth, and no man shutteth'],
    fulfillmentKeywords: ['the key of the house of David'],
    terms: [],
  },
  'rev-3-18': {
    title: 'Buy of Me Gold Tried in the Fire',
    principle:
      'Laodicea is counselled to buy real wealth, white raiment, and eyesalve. First principle: the church that thinks it is rich needs grace that was bought for it. Christ offers garments for its shame, sight for its blindness, and gold for its poverty.',
    sourceKeywords: ['gold tried in the fire', 'white raiment', 'anoint thine eyes with eyesalve'],
    fulfillmentKeywords: ['he hath clothed me with the garments of salvation'],
    terms: [],
  },
  'rev-3-21': {
    title: 'I Will Grant to Sit with Me in My Throne',
    principle:
      'Christ overcame and sat down with the Father, and overcomers sit with Him. First principle: the throne is shared the way the suffering was shared. The Overcomer bought the seat, and he gives it to those who overcome.',
    sourceKeywords: ['to him that overcometh', 'sit with me in my throne', 'as I also overcame'],
    fulfillmentKeywords: ['Sit thou at my right hand'],
    terms: [],
  },
  'rev-4-8': {
    title: 'Holy, Holy, Holy, Lord God Almighty',
    principle:
      'The four living creatures rest not day and night, singing "Holy, holy, holy". First principle: heaven\'s worship never stops, and it calls God holy three times. He is the "which was, and is, and is to come" God of Exodus and Isaiah.',
    sourceKeywords: ['Holy, holy, holy', 'rest not day and night', 'which was, and is, and is to come'],
    fulfillmentKeywords: ['Holy, holy, holy, is the LORD of hosts'],
    terms: [],
  },
  'rev-5-6': {
    title: 'A Lamb as It Had Been Slain',
    principle:
      'In the throne\'s midst stands a Lamb, slain, with seven horns and seven eyes. First principle: the center of the throne is a sacrifice. All power and a slain Lamb meet in one sight there.',
    sourceKeywords: ['a Lamb as it had been slain', 'seven horns', 'seven eyes'],
    fulfillmentKeywords: ['he is brought as a lamb to the slaughter'],
    terms: [],
  },
  'rev-5-9': {
    title: 'Thou Hast Redeemed Us to God by Thy Blood',
    principle:
      'The new song names what was bought: slain, redeeming out of every kindred, tongue, people, and nation. First principle: the Lamb\'s worth is sung in a song about buying people back. The list of the bought reaches the whole world.',
    sourceKeywords: ['Thou art worthy', 'hast redeemed us to God by thy blood', 'every kindred, and tongue'],
    fulfillmentKeywords: ['he shall see of the travail', 'purchased with his own blood'],
    terms: [],
  },
  'rev-5-10': {
    title: 'Kings and Priests, and We Shall Reign on the Earth',
    principle:
      'The redeemed are made a reigning priesthood. First principle: the work God gave Adam in Eden and the calling he gave Israel at Sinai end in a reign on earth. The redeemed do not escape the world. They rule in it again.',
    sourceKeywords: ['made us unto our God kings and priests', 'we shall reign on the earth'],
    fulfillmentKeywords: ['a kingdom of priests, and an holy nation'],
    terms: [],
  },
  'rev-5-12': {
    title: 'Worthy Is the Lamb That Was Slain',
    principle:
      'Seven-fold praise is given to the slain Lamb: power, riches, wisdom, strength, honour, glory, blessing. First principle: heaven counts differently from us. The Lamb who lost everything receives everything.',
    sourceKeywords: ['Worthy is the Lamb that was slain', 'power, and riches, and wisdom'],
    fulfillmentKeywords: ['Judah is a lion\'s whelp', 'he shall have dominion'],
    terms: [],
  },
  'rev-5-13': {
    title: 'Every Creature... Blessing, and Honour, and Glory',
    principle:
      'All creation joins the song of praise to the Enthroned One and the Lamb. First principle: prophecy ends in worship from every creature. Philippians 2\'s confession of every tongue is shown here in a vision of the last days.',
    sourceKeywords: ['every creature', 'Blessing, and honour, and glory, and power', 'unto the Lamb for ever'],
    fulfillmentKeywords: ['every thing that hath breath praise the LORD'],
    terms: [],
  },
  'rev-7-9': {
    title: 'A Great Multitude of All Nations',
    principle:
      'The uncountable multitude stands before the throne with palms. They come from every nation, kindred, people, and tongue. First principle: the promise of stars and sand made to Abraham fills a throne room. God\'s binding promise reached the whole world.',
    sourceKeywords: ['a great multitude, which no man could number', 'all nations, and kindreds', 'clothed with white robes'],
    fulfillmentKeywords: ['in thy seed shall all the nations', 'look toward heaven and tell the stars'],
    terms: [],
  },
  'rev-7-14': {
    title: 'Washed Their Robes in the Blood of the Lamb',
    principle:
      'The great-tribulation multitude comes out with white robes. First principle: stain removal is by blood, not by suffering. Tribulation marks the path, the Lamb\'s blood does the washing.',
    sourceKeywords: ['came out of great tribulation', 'washed their robes', 'made them white in the blood'],
    fulfillmentKeywords: ['though your sins be as scarlet', 'they shall be white as snow'],
    terms: [],
  },
  'rev-7-17': {
    title: 'The Lamb Shall Feed Them',
    principle:
      'The Lamb on the throne leads his people to living fountains, and God wipes away tears. First principle: the Shepherd of Psalm 23 is the same person as the Lamb on the throne. Every tear has an appointed end.',
    sourceKeywords: ['the Lamb... shall feed them', 'living fountains of waters', 'wipe away all tears'],
    fulfillmentKeywords: ['He maketh me to lie down in green pastures', 'He will swallow up death in victory'],
    terms: [],
  },
  'rev-11-15': {
    title: 'The Kingdoms of This World Are Become His',
    principle:
      'The seventh trumpet announces the transfer of rule. The kingdom now belongs to our Lord and to His Christ, and he reigns for ever. First principle: the direction of history is announced, not negotiated. Daniel 2 and 7 arrive on schedule.',
    sourceKeywords: ['the seventh angel sounded', 'kingdoms of this world are become', 'he shall reign for ever and ever'],
    fulfillmentKeywords: ['shall the God of heaven set up a kingdom', 'dominion... was given him'],
    terms: [],
  },
  'rev-12-5': {
    title: 'She Brought Forth a Man Child',
    principle:
      'The woman\'s child rules all nations with a rod of iron, and he is caught up to God\'s throne. First principle: the Seed promised in Genesis 3:15 and the Son promised in Psalm 2 are the same Man. He is born, he is caught up, and he is destined to rule.',
    sourceKeywords: ['a man child', 'to rule all nations with a rod of iron', 'caught up unto God, and to his throne'],
    fulfillmentKeywords: ['it shall bruise thy head', 'thou shalt break them with a rod of iron'],
    terms: [],
  },
  'rev-12-9': {
    title: 'That Old Serpent, Called the Devil',
    principle:
      'The dragon is named for what he is: the ancient serpent of Genesis, the deceiver of the whole world, and he is cast out with his angels. First principle: Revelation names the snake behind every deception. It also announces that he is thrown out.',
    sourceKeywords: ['that old serpent', 'the Devil, and Satan', 'deceiveth the whole world', 'cast out'],
    fulfillmentKeywords: ['the serpent was more subtil', 'It shall bruise thy head'],
    terms: [],
  },
  'rev-12-10': {
    title: 'Now Is Come Salvation — the Accuser Is Cast Down',
    principle:
      'Heaven announces the verdict: salvation, strength, kingdom, and the power of His Christ. First principle: when the accuser falls, the believer is assured. The courtroom is won before the battle ends.',
    sourceKeywords: ['Now is come salvation', 'the power of his Christ', 'the accuser of our brethren is cast down'],
    fulfillmentKeywords: ['Satan also came among them', 'The LORD rebuke thee, O Satan'],
    terms: [],
  },
  'rev-12-11': {
    title: 'They Overcame Him by the Blood of the Lamb',
    principle:
      'They overcome the dragon by the blood, by the testimony, and by lives not loved unto death. First principle: this victory comes through the cross. The blood is applied, the word is spoken, and the life is surrendered.',
    sourceKeywords: ['overcame him by the blood of the Lamb', 'the word of their testimony', 'loved not their lives'],
    fulfillmentKeywords: ['in all these things we are more than conquerors'],
    terms: [],
  },
  'rev-14-1': {
    title: 'The Lamb on Mount Sion, 144,000 with His Name',
    principle:
      'The sealed stand with the Lamb on Zion, and His Father\'s name is in their foreheads. First principle: this is the anti-mark. God\'s name is written where the beast writes his, and that marks the faithful few who are left as his own possession.',
    sourceKeywords: ['a Lamb stood on the mount Sion', 'an hundred forty and four thousand', 'his Father\'s name written in their foreheads'],
    fulfillmentKeywords: ['set a mark upon their foreheads'],
    terms: [],
  },
  'rev-14-4': {
    title: 'These Follow the Lamb Whithersoever He Goeth',
    principle:
      'The redeemed are undefiled, firstfruits to God and the Lamb. First principle: those who are sealed are marked by movement and by being set apart. They follow the Lamb anywhere, and they are firstfruits for God.',
    sourceKeywords: ['not defiled', 'follow the Lamb whithersoever he goeth', 'the firstfruits unto God'],
    fulfillmentKeywords: ['a chaste virgin unto Christ'],
    terms: [],
  },
  'rev-14-11': {
    title: 'The Smoke of Their Torment Ascendeth for Ever',
    principle:
      'Worship of the beast has an unending consequence. First principle: the warning never ends, and that is part of its mercy. Isaiah and Daniel point to the worm and the fire. That makes the choice final.',
    sourceKeywords: ['the smoke of their torment', 'for ever and ever', 'the mark of his name'],
    fulfillmentKeywords: ['their worm shall not die', 'some to shame and everlasting contempt'],
    terms: [],
  },
  'rev-14-13': {
    title: 'Blessed Are the Dead Which Die in the Lord',
    principle:
      'The Spirit blesses the dead who rest, and their works follow them. First principle: death in the Lord is not loss. It is rest with memory: the labor has ended, and the works go with them.',
    sourceKeywords: ['Write, Blessed are the dead', 'die in the Lord', 'their works do follow them'],
    fulfillmentKeywords: ['thou shalt rest, and stand in thy lot'],
    terms: [],
  },
  'rev-15-3': {
    title: 'The Song of Moses and the Song of the Lamb',
    principle:
      'The victors who stand on the sea of glass sing both songs: "great and marvellous are thy works". First principle: the two covenants sing one song of praise. The song of Moses and the song of the Lamb are finally one hymn.',
    sourceKeywords: ['the song of Moses the servant of God', 'the song of the Lamb', 'King of saints'],
    fulfillmentKeywords: ['Then sang Moses and the children of Israel'],
    terms: [],
  },
  'rev-15-4': {
    title: 'All Nations Shall Come and Worship Before Thee',
    principle:
      'Who shall not fear? The holiness of the Lord draws the nations to worship. First principle: God\'s judgments bring people in. When they are seen, they gather worshipers from every nation.',
    sourceKeywords: ['Who shall not fear thee', 'thou only art holy', 'all nations shall come and worship'],
    fulfillmentKeywords: ['all nations shall flow unto it'],
    terms: [],
  },
  'rev-19-7': {
    title: 'The Marriage of the Lamb Is Come',
    principle:
      'Heaven rejoices: the Wife has made herself ready. First principle: God\'s work of buying his people back ends in a wedding. The bride is given fine linen, and that linen is the righteousness of saints.',
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
      'The vesture dipped in blood bears the oldest name of the Son. First principle: John\'s Gospel and John\'s apocalypse agree. The Rider is the Word who existed before all things, and now he is seen in the clothes of war.',
    sourceKeywords: ['vesture dipped in blood', 'his name is called The Word of God'],
    fulfillmentKeywords: ['In the beginning was the Word'],
    terms: [],
  },
  'rev-19-15': {
    title: 'He Shall Rule Them with a Rod of Iron',
    principle:
      'A sword comes from His mouth and strikes the nations. The winepress of God\'s wrath is trodden. First principle: Psalm 2 and Isaiah 63 meet on the day of the Lord. The same scepter both shepherds and treads.',
    sourceKeywords: ['a sharp sword', 'smite the nations', 'rod of iron', 'treadeth the winepress'],
    fulfillmentKeywords: ['thou shalt break them with a rod of iron', 'I have trodden the winepress alone'],
    terms: [],
  },
  'rev-19-16': {
    title: 'KING OF KINGS, AND LORD OF LORDS',
    principle:
      'The name is written on the vesture and on the thigh. First principle: every other crown in history ranks below this one. The title is a verdict on every rival claim to rule.',
    sourceKeywords: ['KING OF KINGS, AND LORD OF LORDS', 'on his vesture and on his thigh'],
    fulfillmentKeywords: ['THE LORD OUR RIGHTEOUSNESS', 'the blessed and only Potentate'],
    terms: [],
  },
  'rev-20-2': {
    title: 'He Laid Hold on the Dragon and Bound Him',
    principle:
      'The old serpent is chained a thousand years. First principle: the crushing of the serpent\'s head promised in Genesis now becomes a binding. An angel\'s key and chain stop him from deceiving the nations.',
    sourceKeywords: ['laid hold on the dragon', 'that old serpent', 'bound him a thousand years'],
    fulfillmentKeywords: ['it shall bruise thy head'],
    terms: [],
  },
  'rev-20-6': {
    title: 'Blessed and Holy Is He That Hath Part in the First Resurrection',
    principle:
      'The saints of the first resurrection escape the second death and reign a thousand years as priests. First principle: the order of the resurrections decides the outcome. The first is a reign as priests, and the second is a death sentence.',
    sourceKeywords: ['the first resurrection', 'the second death hath no power', 'reign with him a thousand years'],
    fulfillmentKeywords: ['many of them that sleep in the dust shall awake'],
    terms: [],
  },
  'rev-20-11': {
    title: 'A Great White Throne, and Him That Sat on It',
    principle:
      'Earth and heaven flee from the Judge\'s face. No place remains for them. First principle: the last judgment is a throne before it is a sentence. Purity itself is in charge there.',
    sourceKeywords: ['a great white throne', 'him that sat on it', 'the earth and the heaven fled away'],
    fulfillmentKeywords: ['the judgment was set, and the books were opened'],
    terms: [],
  },
  'rev-20-12': {
    title: 'The Books Were Opened, and Another Book, the Book of Life',
    principle:
      'The dead are judged by the books, and the saved are judged by the book of life. First principle: there are two records. The works are written down, and the names are written down. The book of life settles the case.',
    sourceKeywords: ['the books were opened', 'the book of life', 'judged out of those things written'],
    fulfillmentKeywords: ['the books were opened'],
    terms: [],
  },
  'rev-21-2': {
    title: 'New Jerusalem Prepared as a Bride',
    principle:
      'The holy city descends from God, adorned for her husband. First principle: the end is not heaven going quiet. It is a city coming down. God\'s binding promise joins him to his people in a city.',
    sourceKeywords: ['the holy city, new Jerusalem', 'coming down from God out of heaven', 'a bride adorned for her husband'],
    fulfillmentKeywords: ['as the bridegroom rejoiceth over the bride', 'thou shalt be called Hephzibah'],
    terms: [],
  },
  'rev-21-4': {
    title: 'God Shall Wipe Away All Tears',
    principle:
      'No death, sorrow, crying, or pain. The former things passed away. First principle: the promise Isaiah gave of death being swallowed up comes true for each person. God\'s own hand wipes the tears, one grief at a time.',
    sourceKeywords: ['God shall wipe away all tears', 'no more death', 'former things are passed away'],
    fulfillmentKeywords: ['He will swallow up death in victory'],
    terms: [],
  },
  'rev-21-9': {
    title: 'Come Hither, I Will Shew Thee the Bride, the Lamb\'s Wife',
    principle:
      'The angel offers to show a bride, and what he shows is a city. First principle: in the end the church is a building. People become a place, and God\'s binding promise becomes a city.',
    sourceKeywords: ['I will shew thee the bride', 'the Lamb\'s wife'],
    fulfillmentKeywords: ['thy Maker is thine husband'],
    terms: [],
  },
  'rev-21-14': {
    title: 'Twelve Foundations, the Apostles of the Lamb',
    principle:
      'The city wall rests on the names of the apostles. First principle: the foundation of the church is a matter of history. Named men, once weak, now carry the load forever.',
    sourceKeywords: ['twelve foundations', 'the names of the twelve apostles of the Lamb'],
    fulfillmentKeywords: ['built upon the foundation of the apostles and prophets'],
    terms: [],
  },
  'rev-21-23': {
    title: 'The Lamb Is the Light Thereof',
    principle:
      'No sun or moon is needed. God\'s glory lights the city. First principle: the lamps of creation are put away. Isaiah 60 is fulfilled in a city lit by the Lamb, a city that never stops shining.',
    sourceKeywords: ['no need of the sun', 'the glory of God did lighten it', 'the Lamb is the light thereof'],
    fulfillmentKeywords: ['the sun shall be no more thy light by day', 'the LORD shall be unto thee an everlasting light'],
    terms: [],
  },
  'rev-21-27': {
    title: 'There Shall in No Wise Enter Any Thing That Defileth',
    principle:
      'Only those written in the Lamb\'s book of life enter. First principle: the gate of the city works like a register. Purity has to be there, purity is given, and every name is checked.',
    sourceKeywords: ['in no wise enter', 'whatsoever worketh abomination', 'the Lamb\'s book of life'],
    fulfillmentKeywords: ['there shall no more come into thee the uncircumcised'],
    terms: [],
  },
  'rev-22-1': {
    title: 'A Pure River of Water of Life',
    principle:
      'A crystal river flows out from the throne of God and the Lamb. First principle: the rivers of Eden and the temple stream of Ezekiel come together in this picture. Life now flows from a throne. It no longer flows from a garden.',
    sourceKeywords: ['a pure river of water of life', 'clear as crystal', 'out of the throne of God and of the Lamb'],
    fulfillmentKeywords: ['a river went out of Eden', 'waters of life'],
    terms: [],
  },
  'rev-22-2': {
    title: 'The Tree of Life, Yielding Fruit Every Month',
    principle:
      'The tree returns, with twelve fruits and leaves for the healing of nations. First principle: what was guarded is now granted. The forbidden tree becomes the free tree, and its leaves are for healing.',
    sourceKeywords: ['the tree of life', 'twelve manner of fruits', 'leaves... for the healing of the nations'],
    fulfillmentKeywords: ['the tree of life also in the midst of the garden'],
    terms: [],
  },
  'rev-22-3': {
    title: 'There Shall Be No More Curse',
    principle:
      'The curse of Eden is gone, and the throne of God and the Lamb is in it. First principle: the Bible ends where it began, only now there is no curse. God\'s servants serve him, and they see his face.',
    sourceKeywords: ['no more curse', 'the throne of God and of the Lamb', 'his servants shall serve him'],
    fulfillmentKeywords: ['cursed is the ground for thy sake'],
    terms: [],
  },
  'rev-22-4': {
    title: 'They Shall See His Face',
    principle:
      'His name is in their foreheads. First principle: Moses was told that no man can see My face. That limit is lifted for the redeemed. The blessing promised to the pure in heart now comes true. They see God.',
    sourceKeywords: ['they shall see his face', 'his name shall be in their foreheads'],
    fulfillmentKeywords: ['Thou canst not see my face', 'there shall no man see me and live'],
    terms: [],
  },
  'rev-22-5': {
    title: 'No Night There; They Reign for Ever and Ever',
    principle:
      'No candle is needed, and no sun. The Lord God gives the light, and they reign. First principle: the light that shone in the first creation week never needed a sunset. Now it never goes out again.',
    sourceKeywords: ['no night there', 'the Lord God giveth them light', 'reign for ever and ever'],
    fulfillmentKeywords: ['the LORD shall be unto thee an everlasting light'],
    terms: [],
  },
  'rev-22-12': {
    title: 'I Come Quickly; and My Reward Is with Me',
    principle:
      'The coming One brings a reward for what each person has done. First principle: the return is a payday. The Returning One carries the reward himself, as Isaiah promised.',
    sourceKeywords: ['I come quickly', 'my reward is with me', 'according as his work shall be'],
    fulfillmentKeywords: ['behold, his reward is with him', 'his work before him'],
    terms: [],
  },
  'rev-22-13': {
    title: 'I Am Alpha and Omega, the First and the Last',
    principle:
      'The titles at the start of the book and at the end are the same. The Lord who made all things is also the Lord who ends them. First principle: the Lord of Isaiah 44 and 48 speaks in Revelation\'s last chapter. What the book claims for him are claims only God can make.',
    sourceKeywords: ['Alpha and Omega', 'the beginning and the end', 'the first and the last'],
    fulfillmentKeywords: ['I am the first, I also am the last'],
    terms: [],
  },
  'rev-22-14': {
    title: 'Blessed Are They That Do His Commandments',
    principle:
      'They have the right to the tree of life and entry through the gates. First principle: obedience is what unlocks the new Eden. It means doing His commandments and living by His tree.',
    sourceKeywords: ['do his commandments', 'right to the tree of life', 'enter in through the gates'],
    fulfillmentKeywords: ['to him that overcometh will I give to eat'],
    terms: [],
  },
  'rev-22-17': {
    title: 'The Spirit and the Bride Say, Come',
    principle:
      'Whosoever will may take the water of life freely. First principle: the prophecy ends with an invitation, not a threat. Anyone who is thirsty may come and drink freely.',
    sourceKeywords: ['the Spirit and the bride say, Come', 'whosoever will', 'the water of life freely'],
    fulfillmentKeywords: ['Ho, every one that thirsteth, come ye to the waters'],
    terms: [],
  },
  'rev-22-18': {
    title: 'If Any Man Shall Add unto These Things',
    principle:
      'The prophecy closes with a guard over the whole book: add nothing, take nothing away. First principle: the warning Moses gave in Deuteronomy is given again over the finished Scriptures. The book is complete, and its words carry weight.',
    sourceKeywords: ['If any man shall add', 'the plagues that are written in this book'],
    fulfillmentKeywords: ['Ye shall not add unto the word which I command you'],
    terms: [],
  },
  // ── Hand-written expansion: Psalms ──────────────────────────────────────
  'psa-2-2': {
    title: 'Kings Set Themselves Against His Anointed',
    principle:
      'The rulers take counsel against the LORD and against His anointed. First principle: the conspiracy of Psalm 2 met at Calvary. Herod, Pilate, and the nations did exactly this, exactly as it was foretold.',
    sourceKeywords: ['kings of the earth', 'take counsel together', 'against his anointed'],
    fulfillmentKeywords: ['against thy holy child Jesus', 'gathered together'],
    terms: [],
  },
  'psa-2-6': {
    title: 'Yet Have I Set My King upon My Holy Hill',
    principle:
      'Man\'s rage does not cancel God\'s decree: My King is installed on Zion. First principle: God\'s decree stands over the conspiracy. The cross that men meant as rejection, God meant as enthronement.',
    sourceKeywords: ['Yet have I set my king', 'holy hill of Zion'],
    fulfillmentKeywords: ['Thou art my Son', 'whereof he hath given assurance'],
    terms: [],
  },
  'psa-2-7': {
    title: 'Thou Art My Son; This Day Have I Begotten Thee',
    principle:
      'The decree is declared to the Son Himself. First principle: begotten is a status decree, not a birthday. Paul and Hebrews apply it to the resurrection and to the eternal generation alike.',
    sourceKeywords: ['I will declare the decree', 'Thou art my Son', 'this day have I begotten thee'],
    fulfillmentKeywords: ['God hath fulfilled the same', 'raised up Jesus again'],
    terms: [],
  },
  'psa-2-9': {
    title: 'Thou Shalt Break Them with a Rod of Iron',
    principle:
      'The Son\'s inheritance includes shattering rebel powers like pottery. First principle: the same rod promised to Messiah is handed to those who overcome. Iron rule belongs to the faithful, not to the faithless.',
    sourceKeywords: ['break them with a rod of iron', 'like a potter\'s vessel'],
    fulfillmentKeywords: ['he shall rule them with a rod of iron'],
    terms: [],
  },
  'psa-2-12': {
    title: 'Kiss the Son, Lest He Be Angry',
    principle:
      'Homage or wrath — Blessed are all they that put their trust in him. First principle: the psalm ends with an invitation. The Lamb who is angry is also the refuge of the soul that trusts him.',
    sourceKeywords: ['Kiss the Son', 'perish from the way', 'put their trust in him'],
    fulfillmentKeywords: ['no other name', 'shall be saved'],
    terms: [],
  },
  'psa-8-2': {
    title: 'Out of the Mouth of Babes and Sucklings',
    principle:
      'God ordains strength from infant lips to still the enemy. First principle: perfect praise comes from the least likely people. The children shouting Hosanna quoted this psalm back at the establishment.',
    sourceKeywords: ['mouth of babes and sucklings', 'ordained strength', 'still the enemy'],
    fulfillmentKeywords: ['perfected praise', 'Hosanna to the Son of David'],
    terms: [],
  },
  'psa-8-6': {
    title: 'Thou Hast Put All Things under His Feet',
    principle:
      'Adamic dominion is the psalm\'s theme; Hebrews finds it exhausted in Christ. First principle: the dominion Adam lost is visible again in the crowned Son. All things are under his feet, though we do not yet see them all.',
    sourceKeywords: ['dominion over the works of thy hands', 'all things under his feet'],
    fulfillmentKeywords: ['hast put all things in subjection under his feet'],
    terms: [],
  },
  'psa-16-8': {
    title: 'I Have Set the LORD Always Before Me',
    principle:
      'The psalm of the Holy One\'s confidence: at my right hand, I shall not be moved. First principle: Peter preaches this as Christ\'s own settled trust. It is the resurrection certainty of the One at God\'s right hand.',
    sourceKeywords: ['set the LORD always before me', 'at my right hand', 'I shall not be moved'],
    fulfillmentKeywords: ['I foresaw the Lord always before my face'],
    terms: [],
  },
  'psa-18-2': {
    title: 'The LORD Is My Rock and My Fortress',
    principle:
      'David\'s deliverance song stacks the titles: rock, fortress, deliverer, horn of salvation. First principle: every rescue title David used is fulfilled in the greater Son. He is the horn lifted up for us.',
    sourceKeywords: ['my rock, and my fortress', 'my deliverer', 'horn of my salvation'],
    fulfillmentKeywords: ['horn of salvation', 'raised up in the house of David'],
    terms: [],
  },
  'psa-18-49': {
    title: 'I Will Give Thanks unto Thee among the Heathen',
    principle:
      'David confesses God among the nations. First principle: Paul quotes this to prove the plan always included Gentile praise. The victory song of David was prophecy about mission.',
    sourceKeywords: ['give thanks unto thee, O LORD, among the heathen', 'sing praises unto thy name'],
    fulfillmentKeywords: ['confess to thee among the Gentiles'],
    terms: [],
  },
  'psa-19-4': {
    title: 'Their Line Is Gone Out through All the Earth',
    principle:
      'The sun-pavilion preaches day and night to the ends of the world. First principle: creation\'s voice reaches everyone and uses no words. Paul takes it as the pattern for how far the gospel\'s sound goes.',
    sourceKeywords: ['gone out through all the earth', 'to the end of the world', 'a tabernacle for the sun'],
    fulfillmentKeywords: ['Have they not heard? Yes verily'],
    terms: [],
  },
  'psa-22-7': {
    title: 'They That See Me Laugh Me to Scorn',
    principle:
      'The mocked Sufferer foresees the crowd at Golgotha shooting out the lip. First principle: mockery is part of the Passion script. Rulers sneering is prophecy being performed.',
    sourceKeywords: ['laugh me to scorn', 'shoot out the lip', 'shake the head'],
    fulfillmentKeywords: ['reviled him, wagging their heads', 'derided him also'],
    terms: [],
  },
  'psa-22-8': {
    title: 'Let Him Deliver Him, Seeing He Delighted in Him',
    principle:
      'The mockers quote the Sufferer\'s own faith back at Him. First principle: at the cross the taunt He trusted in God; let Him deliver Him now was fulfilled line for line.',
    sourceKeywords: ['He trusted on the LORD', 'let him deliver him', 'he delighted in him'],
    fulfillmentKeywords: ['He trusted in God; let him deliver him now'],
    terms: [],
  },
  'psa-22-18': {
    title: 'They Part My Garments Among Them',
    principle:
      'Clothes divided, lots cast — written a millennium before the soldiers. First principle: the soldiers gambling at the cross did not know they were acting out Psalm 22.',
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
      'Green pastures, still waters, the valley, the table — the Shepherd psalm. First principle: the LORD who shepherds his people is the Lamb who feeds them. Christ claims the psalm, and heaven fulfills it.',
    sourceKeywords: ['The LORD is my shepherd', 'I shall not want', 'valley of the shadow of death'],
    fulfillmentKeywords: ['I am the good shepherd', 'the Lamb shall feed them'],
    terms: [],
  },
  'psa-24-1': {
    title: 'The Earth Is the LORD\'S, and the Fulness Thereof',
    principle:
      'The world and its dwellers belong to God. First principle: because God owns it all, worship and right living both rest on that. Paul quotes it against the fear of idol-food. The earth is the Father\'s, and the Son governs it.',
    sourceKeywords: ['The earth is the LORD\'S', 'the fulness thereof', 'they that dwell therein'],
    fulfillmentKeywords: ['the earth is the Lord\'s, and the fulness thereof'],
    terms: [],
  },
  'psa-24-3': {
    title: 'Who Shall Ascend into the Hill of the LORD?',
    principle:
      'The ascent question demands clean hands and a pure heart. First principle: only purity sees God. The beatitude and the epistle both answer the question with Christ\'s own holiness.',
    sourceKeywords: ['Who shall ascend', 'hill of the LORD', 'stand in his holy place'],
    fulfillmentKeywords: ['Blessed are the pure in heart', 'holiness, without which no man shall see the Lord'],
    terms: [],
  },
  'psa-32-1': {
    title: 'Blessed Is He Whose Transgression Is Forgiven',
    principle:
      'The covered-sin psalm of forgiven David. First principle: this is Paul\'s proof-text for righteousness credited to a person. Blessedness comes not from works but from the Lord not imputing iniquity.',
    sourceKeywords: ['Blessed is he whose transgression is forgiven', 'whose sin is covered'],
    fulfillmentKeywords: ['righteousness imputed without works', 'not impute sin'],
    terms: [],
  },
  'psa-34-8': {
    title: 'O Taste and See That the LORD Is Good',
    principle:
      'Experience is invited: taste and see; blessed is the trusting man. First principle: Peter applies the tasting to the Lord Himself. Newborn babes long for the milk because they have tasted it.',
    sourceKeywords: ['O taste and see', 'the LORD is good', 'blessed is the man that trusteth'],
    fulfillmentKeywords: ['If so be ye have tasted that the Lord is gracious'],
    terms: [],
  },
  'psa-35-19': {
    title: 'Let Not Them That Hate Me Without a Cause Rejoice',
    principle:
      'Wrongful enemies must not win the day. First principle: John ties the phrase to the world\'s hatred of Christ. The causeless hatred of the Righteous One was prophesied twice over.',
    sourceKeywords: ['mine enemies wrongfully', 'hate me without a cause'],
    fulfillmentKeywords: ['hated me without a cause'],
    terms: [],
  },
  'psa-37-11': {
    title: 'The Meek Shall Inherit the Earth',
    principle:
      'Delight in the LORD ends in abundance of peace. First principle: this is where the second beatitude comes from. The meek inherit, and those who grab lose. Christ blesses the very people the world overlooks.',
    sourceKeywords: ['the meek shall inherit the earth', 'abundance of peace'],
    fulfillmentKeywords: ['Blessed are the meek'],
    terms: [],
  },
  'psa-45-6': {
    title: 'Thy Throne, O God, Is for Ever and Ever',
    principle:
      'The King is addressed as God with an eternal right sceptre. First principle: the Father Himself speaks to the Son as God. Hebrews reads the psalm as God speaking directly about the Son\'s throne.',
    sourceKeywords: ['Thy throne, O God', 'for ever and ever', 'a right sceptre'],
    fulfillmentKeywords: ['But unto the Son he saith, Thy throne, O God'],
    terms: [],
  },
  'psa-50-12': {
    title: 'If I Were Hungry, I Would Not Tell Thee',
    principle:
      'God needs nothing from sacrificial hands — the world is already His. First principle: God wants thanksgiving, not people feeding heaven. The animals on a thousand hills are already His.',
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
      'Devouring zeal and fallen reproaches — both quoted of Christ. First principle: the cleansing of the temple and the insults of the cross come from the same psalm, and they belong to the same man.',
    sourceKeywords: ['zeal of thine house', 'hath eaten me up', 'reproaches of them that reproached thee'],
    fulfillmentKeywords: ['The zeal of thine house hath eaten me up', 'reproaches fell on me'],
    terms: [],
  },
  'psa-69-22': {
    title: 'Let Their Table Become a Snare',
    principle:
      'The imprecation of the Sufferer: welfare turned trap. First principle: Paul applies the table-snare to unbelieving Israel. Safety itself becomes judgment where Messiah is refused.',
    sourceKeywords: ['their table become a snare', 'a trap'],
    fulfillmentKeywords: ['their table be made a snare'],
    terms: [],
  },
  'psa-69-25': {
    title: 'Let Their Habitation Be Desolate',
    principle:
      'The deserted dwelling and another taking office. First principle: Peter joins this psalm to Judas. The field and the office he forfeited both fulfill this psalm of imprecation.',
    sourceKeywords: ['Let their habitation be desolate', 'let none dwell in their tents'],
    fulfillmentKeywords: ['his habitation be desolate', 'his bishoprick let another take'],
    terms: [],
  },
  'psa-72-8': {
    title: 'Dominion from Sea to Sea',
    principle:
      'Solomon\'s greater Son rules to the ends of the earth. First principle: this royal psalm reaches past every Israelite king. The kingdom that fills the earth belongs to the Son, and it lasts forever.',
    sourceKeywords: ['dominion also from sea to sea', 'unto the ends of the earth'],
    fulfillmentKeywords: ['he shall reign for ever and ever', 'dominion from sea to sea'],
    terms: [],
  },
  'psa-78-2': {
    title: 'I Will Open My Mouth in a Parable',
    principle:
      'Asaph\'s dark sayings of old are Jesus\' teaching method. First principle: the parables are not a backup plan. They are the psalm\'s own program for revealing and for concealing.',
    sourceKeywords: ['open my mouth in a parable', 'dark sayings of old'],
    fulfillmentKeywords: ['I will open my mouth in parables'],
    terms: [],
  },
  'psa-78-24': {
    title: 'Had Rained Down Manna upon Them to Eat',
    principle:
      'Corn of heaven in the wilderness. First principle: this psalm supplies the question the crowd later puts to Jesus, and this is His answer: Moses gave not the bread; my Father gives the true bread.',
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
      'Earthly judges are called gods as children of the Most High. First principle: Jesus reasons from the psalm. If Scripture gave even failing judges that dignity, then the One God set apart and sent cannot be a blasphemer for saying He is the Son.',
    sourceKeywords: ['Ye are gods', 'children of the most High'],
    fulfillmentKeywords: ['Is it not written in your law, I said, Ye are gods'],
    terms: [],
  },
  'psa-89-3': {
    title: 'I Have Sworn unto David My Servant',
    principle:
      'The chosen-covenant oath is struck with David. First principle: every throne promise in the New Testament rests on this sworn covenant. Sworn mercy is unbreakable mercy.',
    sourceKeywords: ['a covenant with my chosen', 'sworn unto David my servant'],
    fulfillmentKeywords: ['The Lord God shall give unto him the throne'],
    terms: [],
  },
  'psa-89-4': {
    title: 'Thy Seed Will I Establish for Ever',
    principle:
      'The throne is built to all generations. First principle: this seed is one person, and the blessing through him is many. Gabriel tells Mary what that means: of His kingdom there shall be no end.',
    sourceKeywords: ['Thy seed will I establish for ever', 'build up thy throne to all generations'],
    fulfillmentKeywords: ['he shall reign over the house of Jacob for ever'],
    terms: [],
  },
  'psa-89-34': {
    title: 'My Covenant Will I Not Break',
    principle:
      'The oath out of God\'s lips is unalterable. First principle: even when David\'s line broke faith, it could not void the word. The promise survives, and Christ is where it is fulfilled.',
    sourceKeywords: ['My covenant will I not break', 'alter the thing that is gone out of my lips'],
    fulfillmentKeywords: ['wherein God... confirmed it by an oath'],
    terms: [],
  },
  'psa-89-36': {
    title: 'His Seed Shall Endure for Ever',
    principle:
      'The throne lasting as the sun before God. First principle: the people asked whether Christ is David\'s son. The psalm answers that the throne outlasts the sun, and Hebrews gives that throne to the Son.',
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
      'Guardian angels bear up the trusting one in all his ways. First principle: Satan quoted this at the temptation. The promise is for the path of obedience, never for testing God.',
    sourceKeywords: ['give his angels charge over thee', 'to keep thee in all thy ways'],
    fulfillmentKeywords: ['angels came and ministered unto him'],
    terms: [],
  },
  'psa-95-7': {
    title: 'We Are the People of His Pasture',
    principle:
      'Sheep of His hand are summoned: To day if ye will hear his voice. First principle: the flock has a Shepherd and a Today. When hearing is put off, the heart grows hard.',
    sourceKeywords: ['the people of his pasture', 'the sheep of his hand', 'To day if ye will hear his voice'],
    fulfillmentKeywords: ['the Holy Ghost saith, To day'],
    terms: [],
  },
  'psa-95-11': {
    title: 'I Sware in My Wrath, They Shall Not Enter',
    principle:
      'The rest-forfeiting oath. First principle: this oath cuts both ways. The promise stands for believers, and the exclusion stands for unbelief. The rest remains for the people of God.',
    sourceKeywords: ['I sware in my wrath', 'they should not enter into my rest'],
    fulfillmentKeywords: ['they shall not enter into my rest'],
    terms: [],
  },
  'psa-97-7': {
    title: 'Worship Him, All Ye Gods',
    principle:
      'Idol-boasters are confounded while heaven\'s order worships the true One. First principle: Hebrews quotes it of the Son\'s advent. The first-begotten receives what idol-worshipers lose.',
    sourceKeywords: ['serve graven images', 'boast themselves of idols', 'worship him, all ye gods'],
    fulfillmentKeywords: ['let all the angels of God worship him'],
    terms: [],
  },
  'psa-102-25': {
    title: 'Of Old Hast Thou Laid the Foundation of the Earth',
    principle:
      'The perishing heavens versus the enduring Creator. First principle: Hebrews addresses the Son with this psalm. The Maker of creation is the unchanging Person whose years have no end.',
    sourceKeywords: ['laid the foundation of the earth', 'the work of thy hands', 'they shall perish'],
    fulfillmentKeywords: ['Thou, Lord, in the beginning hast laid the foundation'],
    terms: [],
  },
  'psa-103-8': {
    title: 'The LORD Is Merciful and Gracious, Slow to Anger',
    principle:
      'The character-proclamation of Exodus 34 in psalm form. First principle: mercy in abundance is how God describes himself. Scripture says it again and again, and Christ shows it in person.',
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
      'The patriarchs are God-protected sojourners. First principle: God guards the covenant line all through danger. The anointed ones and the prophets carry a promise that taught the nations to be afraid.',
    sourceKeywords: ['Touch not mine anointed', 'do my prophets no harm'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-105-17': {
    title: 'He Sent a Man Before Them, Even Joseph',
    principle:
      'Joseph sold as a servant, positioned ahead of famine. First principle: providence goes first. God sends the savior into Egypt before the family knows it needs one.',
    sourceKeywords: ['He sent a man before them', 'Joseph', 'sold for a servant'],
    fulfillmentKeywords: ['God did send me before you to preserve life'],
    terms: [],
  },
  'psa-105-19': {
    title: 'Until the Time That His Word Came',
    principle:
      'The word of the LORD tried Joseph until it proved him out. First principle: tested promises have an appointed release. The dream was fulfilled at the exact moment the prison door opened.',
    sourceKeywords: ['Until the time that his word came', 'the word of the LORD tried him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-106-6': {
    title: 'We Have Sinned with Our Fathers',
    principle:
      'The confession joins generations in guilt. First principle: shared history means shared accountability. The prayer that names ancestral sin honestly is the prayer that finds mercy.',
    sourceKeywords: ['We have sinned with our fathers', 'committed iniquity', 'done wickedly'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-109-8': {
    title: 'Let Another Take His Office',
    principle:
      'The betrayer\'s days are few and his office forfeited. First principle: Peter quotes it when the twelfth witness is chosen. Prophecy governs even the apostolic succession after a betrayal.',
    sourceKeywords: ['Let his days be few', 'let another take his office'],
    fulfillmentKeywords: ['his bishoprick let another take'],
    terms: [],
  },
  'psa-110-4': {
    title: 'A Priest for Ever After the Order of Melchizedek',
    principle:
      'The LORD\'s unrepented oath installs the eternal priest. First principle: the oath outlasts Aaron. Hebrews builds its whole argument for the priesthood on this single unchangeable line.',
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
      'Glory refused to self, assigned to mercy and truth. First principle: this is the engine behind all witness. The name gets the credit. Jesus refused glory that belonged to the Father, and he did it in the same spirit.',
    sourceKeywords: ['Not unto us, O LORD', 'unto thy name give glory', 'for thy mercy, and for thy truth\'s sake'],
    fulfillmentKeywords: ['I receive not honour from men'],
    terms: [],
  },
  'psa-117-1': {
    title: 'O Praise the LORD, All Ye Nations',
    principle:
      'The Bible\'s shortest psalm is its widest invitation. First principle: two verses make the Gentiles a choir. Paul strings it into the Romans 15 chain and proves that Gentile praise was always the plan.',
    sourceKeywords: ['O praise the LORD, all ye nations', 'praise him, all ye people'],
    fulfillmentKeywords: ['Praise the Lord, all ye Gentiles'],
    terms: [],
  },
  'psa-118-6': {
    title: 'The LORD Is on My Side; I Will Not Fear',
    principle:
      'Man can do nothing ultimate against the LORD-sided soul. First principle: courage is arithmetic. The greater Helper outweighs every human threat. Hebrews makes this the cure for loving money.',
    sourceKeywords: ['The LORD is on my side', 'I will not fear', 'what can man do unto me'],
    fulfillmentKeywords: ['The Lord is my helper, and I will not fear'],
    terms: [],
  },
  'psa-118-25': {
    title: 'Save Now, I Beseech Thee, O LORD',
    principle:
      'The Hallel cry for salvation and prosperity. First principle: on Palm Sunday, Hosanna was this verse on people\'s lips. The request had become a shout of welcome for the coming King.',
    sourceKeywords: ['Save now, I beseech thee', 'send now prosperity'],
    fulfillmentKeywords: ['Hosanna; Blessed is he that cometh'],
    terms: [],
  },
  'psa-119-105': {
    title: 'Thy Word Is a Lamp unto My Feet',
    principle:
      'The Word lights each next step on a dark road. First principle: guidance comes a step at a time, like a lamp and not a floodlight. Peter uses the same image and calls prophecy the surer light.',
    sourceKeywords: ['a lamp unto my feet', 'a light unto my path'],
    fulfillmentKeywords: ['a light that shineth in a dark place'],
    terms: [],
  },
  'psa-119-160': {
    title: 'Thy Word Is True from the Beginning',
    principle:
      'Every righteous judgment endures forever. First principle: the whole collection of God\'s words can be trusted at once. Jesus prays Thy word is truth over the entire witness.',
    sourceKeywords: ['Thy word is true from the beginning', 'righteous judgments endureth for ever'],
    fulfillmentKeywords: ['thy word is truth'],
    terms: [],
  },
  'psa-132-17': {
    title: 'I Will Make the Horn of David to Bud',
    principle:
      'A lamp ordained for the anointed; David\'s horn sprouts. First principle: the resting-place God chose grows a light. Zacharias\' horn of salvation and the dawn of David\'s house both sprout from here.',
    sourceKeywords: ['the horn of David to bud', 'a lamp for mine anointed'],
    fulfillmentKeywords: ['raised up an horn of salvation'],
    terms: [],
  },
  'psa-135-13': {
    title: 'Thy Name, O LORD, Endureth for Ever',
    principle:
      'The memorial-name spans all generations. First principle: the name God revealed at the bush is the name his people remember at every altar. He stays the same, and that is part of what he promised.',
    sourceKeywords: ['Thy name, O LORD, endureth for ever', 'thy memorial throughout all generations'],
    fulfillmentKeywords: ['this is my name for ever', 'this is my memorial'],
    terms: [],
  },
  'psa-139-7': {
    title: 'Whither Shall I Flee from Thy Presence?',
    principle:
      'Heaven, hell, the dawn, the sea — the Spirit is there. First principle: God is present everywhere, and that is both comfort and inescapability. Nowhere is God absent, and for the believer who is being chased that is good news.',
    sourceKeywords: ['Whither shall I go from thy spirit', 'flee from thy presence'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'psa-140-3': {
    title: 'They Have Sharpened Their Tongues Like a Serpent',
    principle:
      'Adder-poison under the lips. First principle: the way the psalms describe evil speech becomes the evidence Paul presents in court. The mouth is what convicts the human race.',
    sourceKeywords: ['sharpened their tongues like a serpent', 'adders\' poison is under their lips'],
    fulfillmentKeywords: ['the poison of asps is under their lips'],
    terms: [],
  },
  'psa-146-6': {
    title: 'Which Made Heaven, and Earth, and the Sea',
    principle:
      'The Maker keeps truth forever. First principle: trust belongs to the Creator, not to princes. The psalm grounds hope in the same making power Paul preaches to idolaters.',
    sourceKeywords: ['made heaven, and earth', 'the sea, and all that therein is', 'keepeth truth for ever'],
    fulfillmentKeywords: ['the living God, which made heaven, and earth'],
    terms: [],
  },
  'psa-147-4': {
    title: 'He Telleth the Number of the Stars',
    principle:
      'He names every star — great power, understanding infinite. First principle: the one who counts the stars is the one who heals the brokenhearted. The same power that orders the skies binds up wounds.',
    sourceKeywords: ['telleth the number of the stars', 'calleth them all by their names'],
    fulfillmentKeywords: ['he calleth them all by names'],
    terms: [],
  },
  'psa-148-13': {
    title: 'His Name Alone Is Excellent',
    principle:
      'Earth and heaven are summoned to a name above the terrain. First principle: the praise of all creation in Psalm 148 rehearses the final doxology to the enthroned Lamb.',
    sourceKeywords: ['Let them praise the name of the LORD', 'his name alone is excellent', 'above the earth and heaven'],
    fulfillmentKeywords: ['Blessing, and honour, and glory, and power'],
    terms: [],
  },
  // ── Hand-written expansion: Isaiah ──────────────────────────────────────
  'isa-1-18': {
    title: 'Come Now, and Let Us Reason Together',
    principle:
      'Sins that are scarlet can become as white as snow. God invites us to come and reason with him. First principle: pardon is God\'s own offer, and he gives his own reasons for it. His grace deals with sin through blood. It turns the deepest stain as white as wool.',
    sourceKeywords: ['let us reason together', 'sins be as scarlet', 'white as snow'],
    fulfillmentKeywords: ['washed their robes, and made them white'],
    terms: [],
  },
  'isa-2-2': {
    title: 'The Mountain of the LORD\'S House Established in the Top',
    principle:
      'In the last days God lifts Zion up. All nations flow to it. First principle: Micah shares this vision. The lifted mountain is a picture of the gospel age. In that age the nations gather to worship one God.',
    sourceKeywords: ['in the last days', 'mountain of the LORD\'S house', 'all nations shall flow unto it'],
    fulfillmentKeywords: ['the mountain of the house of the LORD'],
    terms: [],
  },
  'isa-2-4': {
    title: 'They Shall Beat Their Swords into Plowshares',
    principle:
      'The Judge of the nations settles their disputes. Then they stop learning how to fight. First principle: peace grows out of righteous judgment. The kingdom takes away weapons that no empire could take away.',
    sourceKeywords: ['judge among the nations', 'swords into plowshares', 'learn war any more'],
    fulfillmentKeywords: ['they shall beat their swords into plowshares'],
    terms: [],
  },
  'isa-5-1': {
    title: 'My Wellbeloved Hath a Vineyard',
    principle:
      'This is a love-song about a vineyard. The vineyard was planted on a fruitful hill. First principle: the vineyard is Israel. Jesus takes this song and turns it on the leaders. They were the men who would cast out the Heir.',
    sourceKeywords: ['my wellbeloved', 'a song of my beloved touching his vineyard', 'very fruitful hill'],
    fulfillmentKeywords: ['A certain man planted a vineyard'],
    terms: [],
  },
  'isa-6-1': {
    title: 'I Saw Also the Lord Sitting upon a Throne',
    principle:
      'Uzziah dies. The true King fills the temple. First principle: John says Isaiah saw the glory of Christ. So the throne Isaiah saw in chapter 6 was the throne of Jesus. Jesus was high and lifted up. That is the glory John wrote about.',
    sourceKeywords: ['I saw also the Lord', 'sitting upon a throne', 'his train filled the temple'],
    fulfillmentKeywords: ['These things said Esaias, when he saw his glory'],
    terms: [],
  },
  'isa-6-9': {
    title: 'Go, and Tell This People, Hear Ye Indeed',
    principle:
      'The commission is a hearing that judges. The people will hear and not understand. First principle: what God reveals can harden as easily as it can heal. Jesus, Mark, John, and Paul all quote this commission. They quote it where people refuse to believe.',
    sourceKeywords: ['Go, and tell this people', 'Hear ye indeed, but understand not', 'see ye indeed, but perceive not'],
    fulfillmentKeywords: ['By hearing ye shall hear, and shall not understand'],
    terms: [],
  },
  'isa-8-14': {
    title: 'A Sanctuary — and a Stone of Stumbling',
    principle:
      'The LORD becomes a sanctuary to those who trust him. He is the holy place where they are safe. To the two houses he becomes a rock of offence. First principle: one stone has two outcomes. Faith finds holiness in him. Refusal finds ruin. Peter and Paul both build their teaching on this verse.',
    sourceKeywords: ['for a sanctuary', 'a stone of stumbling', 'rock of offence'],
    fulfillmentKeywords: ['a rock of offence', 'a stone of stumbling'],
    terms: [],
  },
  'isa-9-2': {
    title: 'The People That Walked in Darkness Have Seen a Great Light',
    principle:
      'Light dawns on Galilee, the land of shadows. First principle: the light of the promised King shines first where contempt was thickest. People there were looked down on. The land of Zebulun and Naphtali saw that light first.',
    sourceKeywords: ['walked in darkness', 'a great light', 'the shadow of death'],
    fulfillmentKeywords: ['The people which sat in darkness saw great light'],
    terms: [],
  },
  'isa-9-7': {
    title: 'Of the Increase of His Government There Shall Be No End',
    principle:
      'He will sit on David\'s throne. He will rule with judgment and with justice. His kingdom will never end. As the prophet wrote, “the zeal of the LORD will perform it.” First principle: the kingdom keeps growing. It never stops growing. God\'s own zeal keeps it firm. No human vote holds it up.',
    sourceKeywords: ['the increase of his government', 'throne of David', 'the zeal of the LORD of hosts'],
    fulfillmentKeywords: ['he shall reign over the house of Jacob for ever'],
    terms: [],
  },
  'isa-11-2': {
    title: 'The Spirit of the LORD Shall Rest upon Him',
    principle:
      'The seven-fold Spirit rests on him. He has the Spirit of wisdom and understanding. He has the Spirit of counsel and might. He has the Spirit of knowledge, and he fears the LORD. First principle: the Branch is the King who is full of the Spirit. The dove that came down at the Jordan is this verse made visible.',
    sourceKeywords: ['the spirit of the LORD shall rest upon him', 'wisdom and understanding', 'fear of the LORD'],
    fulfillmentKeywords: ['the Holy Ghost descended in a bodily shape like a dove'],
    terms: [],
  },
  'isa-11-4': {
    title: 'With Righteousness Shall He Judge the Poor',
    principle:
      'The King judges fairly for the humble. He kills the wicked with the breath of his lips. First principle: the Messiah rules with his mouth, not with a rod. Paul calls that breath a sword. It will consume the lawless one when the Messiah comes.',
    sourceKeywords: ['judge the poor', 'the rod of his mouth', 'the breath of his lips'],
    fulfillmentKeywords: ['consume with the spirit of his mouth'],
    terms: [],
  },
  'isa-11-10': {
    title: 'A Root of Jesse, an Ensign of the People',
    principle:
      'The Gentiles seek the Root. His resting place is glorious. First principle: the root of the cut stump becomes a banner. The nations gather to it. Paul quotes this verse as the promise behind Gentile hope.',
    sourceKeywords: ['a root of Jesse', 'an ensign of the people', 'the Gentiles shall seek'],
    fulfillmentKeywords: ['Esaias also confesseth the Gentile hope'],
    terms: [],
  },
  'isa-11-12': {
    title: 'He Shall Assemble the Outcasts of Israel',
    principle:
      'God raises a banner for the nations. It gathers his scattered people from the four corners of the earth. First principle: the Root does the gathering. The scattered of Judah and the far-off Gentiles meet at one banner.',
    sourceKeywords: ['an ensign for the nations', 'assemble the outcasts of Israel', 'four corners of the earth'],
    fulfillmentKeywords: ['gather together his elect from the four winds'],
    terms: [],
  },
  'isa-26-19': {
    title: 'Thy Dead Men Shall Live',
    principle:
      'Those who dwell in the dust awake. They sing for joy. The earth casts out its dead. First principle: Isaiah plainly hoped that the body would rise again. Dew from heaven wakes the sleepers in the ground.',
    sourceKeywords: ['Thy dead men shall live', 'ye that dwell in dust', 'the earth shall cast out the dead'],
    fulfillmentKeywords: ['all that are in the graves shall hear his voice'],
    terms: [],
  },
  'isa-27-9': {
    title: 'By This Shall the Iniquity of Jacob Be Purged',
    principle:
      'The purge removes the altar stones. It removes the idol groves too. The sin is taken away at its source. First principle: Paul pairs this verse with the Deliverer who comes from Zion. Israel\'s pardon comes with idolatry torn down.',
    sourceKeywords: ['the iniquity of Jacob be purged', 'to take away his sin', 'the groves and images'],
    fulfillmentKeywords: ['when I shall take away their sins'],
    terms: [],
  },
  'isa-27-13': {
    title: 'The Great Trumpet Shall Be Blown',
    principle:
      'The outcasts come home. They worship the LORD at the holy mountain. First principle: one trumpet does two things. It gathers the scattered home. It raises the dead. Jesus and Paul both speak of that sound.',
    sourceKeywords: ['the great trumpet shall be blown', 'the outcasts in the land of Egypt', 'worship the LORD'],
    fulfillmentKeywords: ['they shall gather together his elect with a great sound of a trumpet'],
    terms: [],
  },
  'isa-28-11': {
    title: 'With Stammering Lips and Another Tongue',
    principle:
      'God speaks to this people through foreign lips. First principle: the Assyrian warning becomes the pattern for Pentecost. Other tongues are God\'s own sign. They carry both judgment and mercy.',
    sourceKeywords: ['stammering lips and another tongue', 'will he speak to this people'],
    fulfillmentKeywords: ['they were all filled with the Holy Ghost, and began to speak with other tongues'],
    terms: [],
  },
  'isa-29-10': {
    title: 'The Spirit of Deep Sleep Poured Out',
    principle:
      'The men who see visions are covered. The LORD himself closes their eyes. First principle: when a leader cannot see, that is not an accident. It is God\'s judgment poured out on him. Paul quotes this verse about Israel. The nation was hardened. That hardening lasts until the fullness comes in.',
    sourceKeywords: ['the spirit of deep sleep', 'hath closed your eyes', 'the seers hath he covered'],
    fulfillmentKeywords: ['God hath given them the spirit of slumber'],
    terms: [],
  },
  'isa-29-13': {
    title: 'Their Fear Toward Me Is Taught by the Precept of Men',
    principle:
      'These people honour God with their lips. Their hearts are far from him. Their teaching is only a rule made by men. First principle: taught religion can teach distance from God. Jesus quotes this verse against tradition. That tradition sets aside the Word of God.',
    sourceKeywords: ['draw near me with their mouth', 'removed their heart far from me', 'the precept of men'],
    fulfillmentKeywords: ['in vain they do worship me'],
    terms: [],
  },
  'isa-29-14': {
    title: 'I Will Proceed to Do a Marvellous Work',
    principle:
      'The wisdom of the wise dies when God does his wonderful work. First principle: God\'s wonder puts human cleverness to shame. Paul quotes this verse about the cross. There the wise meet a crucified Messiah. He leaves them with nothing to say.',
    sourceKeywords: ['a marvellous work and a wonder', 'the wisdom of their wise men shall perish'],
    fulfillmentKeywords: ['I will destroy the wisdom of the wise'],
    terms: [],
  },
  'isa-35-5': {
    title: 'Then the Eyes of the Blind Shall Be Opened',
    principle:
      'Blind eyes are opened. Deaf ears are unstopped. First principle: this list answers John the Baptist\'s doubt. The Messiah is proved by opened eyes and unstopped ears.',
    sourceKeywords: ['the eyes of the blind shall be opened', 'the ears of the deaf shall be unstopped'],
    fulfillmentKeywords: ['the blind receive their sight', 'the deaf hear'],
    terms: [],
  },
  'isa-35-6': {
    title: 'Then Shall the Lame Man Leap Like a Deer',
    principle:
      'Lame legs leap. Tongues that could not speak sing. Deserts break into streams. First principle: a lame man was healed in the temple. He stood up and leaped. His leaping was this verse walking. Peter and John had no silver to give him. They had the prophecy.',
    sourceKeywords: ['the lame man leap as an hart', 'the tongue of the dumb sing', 'streams in the desert'],
    fulfillmentKeywords: ['the lame walk', 'the dumb speak'],
    terms: [],
  },
  'isa-35-8': {
    title: 'An Highway Shall Be There, the Way of Holiness',
    principle:
      'The road is clean. The unclean cannot pass over it. Even a foolish traveler will not get lost on it. First principle: the highway is named the Way of Holiness. Simple people do not go wrong there. The Way is a Person.',
    sourceKeywords: ['an highway shall be there', 'The way of holiness', 'the unclean shall not pass over it'],
    fulfillmentKeywords: ['I am the way, the truth, and the life'],
    terms: [],
  },
  'isa-35-10': {
    title: 'The Ransomed of the LORD Shall Return with Songs',
    principle:
      'Everlasting joy rests on their heads. Sorrow and sighing flee away. First principle: the ransomed return home. Joy meets them when they arrive. Revelation takes its tears-wiped ending straight from this verse.',
    sourceKeywords: ['the ransomed of the LORD shall return', 'everlasting joy upon their heads', 'sorrow and sighing shall flee'],
    fulfillmentKeywords: ['God shall wipe away all tears'],
    terms: [],
  },
  'isa-40-5': {
    title: 'The Glory of the LORD Shall Be Revealed',
    principle:
      'All flesh shall see it together. The mouth of the LORD has spoken. First principle: the road ends in glory that everyone can see. All people will see it. The Word became flesh. We beheld it.',
    sourceKeywords: ['the glory of the LORD shall be revealed', 'all flesh shall see it together'],
    fulfillmentKeywords: ['all flesh shall see the salvation of God'],
    terms: [],
  },
  'isa-40-6': {
    title: 'All Flesh Is Grass',
    principle:
      'The voice asks what it should cry out. The answer is that people are frail. First principle: the preacher\'s message starts with how quickly we die. All our beauty is like a flower that is here today.',
    sourceKeywords: ['What shall I cry', 'All flesh is grass', 'the flower of the field'],
    fulfillmentKeywords: ['all flesh is as grass'],
    terms: [],
  },
  'isa-40-8': {
    title: 'The Word of Our God Shall Stand for Ever',
    principle:
      'The grass withers. The flowers fade. The Word abides forever. First principle: this contrast holds the whole gospel up. Peter anchors the preached word that endures on this verse. Jesus grounds heaven and earth on it too. Grass and flowers are here for a season. The Word of God lasts.',
    sourceKeywords: ['The grass withereth', 'the flower fadeth', 'the word of our God shall stand for ever'],
    fulfillmentKeywords: ['the word of the Lord endureth for ever'],
    terms: [],
  },
  'isa-40-11': {
    title: 'He Shall Feed His Flock Like a Shepherd',
    principle:
      'He gathers the lambs in his arm. He carries them in his bosom, held close. He leads them gently along. First principle: the LORD who comes is a gentle Shepherd. Tenderness is not the absence of glory. It is how glory treats lambs.',
    sourceKeywords: ['feed his flock like a shepherd', 'gather the lambs with his arm', 'gently lead'],
    fulfillmentKeywords: ['I am the good shepherd', 'the Lamb shall feed them'],
    terms: [],
  },
  'isa-40-13': {
    title: 'Who Hath Directed the Spirit of the LORD?',
    principle:
      'No counselor ever instructed the Spirit. First principle: Paul quotes this verse to flatten human wisdom. Nobody gave God advice. The mind of Christ is given to us. No human counsel could ever reach that far.',
    sourceKeywords: ['Who hath directed the Spirit of the LORD', 'being his counsellor hath taught him'],
    fulfillmentKeywords: ['who hath known the mind of the Lord'],
    terms: [],
  },
  'isa-40-26': {
    title: 'Lift Up Your Eyes on High, and Behold Who Hath Created',
    principle:
      'God numbers the host of stars. He calls each one by name. Not one of them is missing. First principle: the stars he calls are his answer to fainting hearts. The Creator can name every star. So he can hold Israel up to the end.',
    sourceKeywords: ['behold who hath created these things', 'he calleth them all by names', 'not one faileth'],
    fulfillmentKeywords: ['he calleth them all by names'],
    terms: [],
  },
  'isa-41-4': {
    title: 'I the LORD, the First, and with the Last; I Am He',
    principle:
      'The one who calls generations from the beginning is the first and the last. First principle: Exodus records the title God gives himself. Here that same title stretches to cover all of history. Revelation puts it on the lips of the glorified Jesus. He is the first and the last.',
    sourceKeywords: ['calling the generations from the beginning', 'I the LORD, the first, and with the last', 'I am he'],
    fulfillmentKeywords: ['I am Alpha and Omega, the first and the last'],
    terms: [],
  },
  'isa-41-10': {
    title: 'Fear Thou Not; for I Am with Thee',
    principle:
      'God strengthens his people. He helps them. He upholds them with his righteous right hand. First principle: this is the refrain that answers fear. It rests on God\'s binding promise. The risen Christ signs the Great Commission with its echo, lo, I am with you.',
    sourceKeywords: ['Fear thou not; for I am with thee', 'I will strengthen thee', 'uphold thee with the right hand'],
    fulfillmentKeywords: ['lo, I am with you alway'],
    terms: [],
  },
  'isa-42-7': {
    title: 'To Open the Blind Eyes, to Bring Out the Prisoners',
    principle:
      'This is the Servant\'s commission. He gives sight to the blind. He sets prisoners free. He brings light into dark cells. First principle: he sets people free in body and in spirit. Blind eyes see. Prison doors open. Simeon sang about this work. Paul preached it to Gentile kings.',
    sourceKeywords: ['open the blind eyes', 'bring out the prisoners', 'them that sit in darkness'],
    fulfillmentKeywords: ['To give light to them that sit in darkness'],
    terms: [],
  },
  'isa-43-10': {
    title: 'Ye Are My Witnesses, and My Servant Whom I Have Chosen',
    principle:
      'Know me. Believe me. Understand that I AM. There was no God before me, and there will be none after. First principle: God chose a people in order to have witnesses. Israel\'s calling is the same job as the church\'s commission.',
    sourceKeywords: ['Ye are my witnesses', 'my servant whom I have chosen', 'no God formed, neither shall there be'],
    fulfillmentKeywords: ['ye shall be witnesses unto me'],
    terms: [],
  },
  'isa-43-20': {
    title: 'I Give Waters in the Wilderness, Rivers in the Desert',
    principle:
      'Even the wild beasts honour God. He gives his chosen people drink in barren places. First principle: when God provides in the desert, that is his signature. It marks his binding promise to his people. The chosen ones receive rivers where nothing grows.',
    sourceKeywords: ['waters in the wilderness', 'rivers in the desert', 'to give drink to my people, my chosen'],
    fulfillmentKeywords: ['a peculiar people'],
    terms: [],
  },
  'isa-43-25': {
    title: 'I, Even I, Am He That Blotteth Out Thy Transgressions',
    principle:
      'God blots out sins for his own sake. He remembers them no more. First principle: forgiveness is God\'s own act. He does it because he chooses to do it. Nobody talks him into it. What moves him is his own name. It is not our score.',
    sourceKeywords: ['blotteth out thy transgressions', 'for mine own sake', 'will not remember thy sins'],
    fulfillmentKeywords: ['their sins and iniquities will I remember no more'],
    terms: [],
  },
  'isa-44-3': {
    title: 'I Will Pour My Spirit upon Thy Seed',
    principle:
      'God pours water on dry ground. He pours his Spirit on your children. First principle: the promise is poured out from one generation to the next. There is water for the thirsty now. There is Spirit for the children later. It was fulfilled at Pentecost, for the children of those who heard it there.',
    sourceKeywords: ['pour water upon him that is thirsty', 'pour my spirit upon thy seed', 'my blessing upon thine offspring'],
    fulfillmentKeywords: ['this is that which was spoken by the prophet Joel'],
    terms: [],
  },
  'isa-44-6': {
    title: 'I Am the First, and I Am the Last; Beside Me There Is No God',
    principle:
      'The King of Israel and his Redeemer, the LORD of hosts, both speak the title that brackets the book. First principle: the claim is spoken with two voices, yet it belongs to one Person. Revelation gives that same title to Jesus. He is the Alpha and Omega.',
    sourceKeywords: ['the King of Israel', 'his redeemer the LORD of hosts', 'the first, and I am the last'],
    fulfillmentKeywords: ['I am Alpha and Omega', 'the first and the last'],
    terms: [],
  },
  'isa-45-1': {
    title: 'Thus Saith the LORD to His Anointed, to Cyrus',
    principle:
      'God names a pagan king. He anoints him to open gates. First principle: God anoints whom he wills. He does it to rescue his people. That king was not circumcised. Even so, his office was a shadow. It pointed forward to the promised King.',
    sourceKeywords: ['to his anointed, to Cyrus', 'to subdue nations before him', 'the gates shall not be shut'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'isa-45-21': {
    title: 'A Just God and a Saviour; There Is None Beside Me',
    principle:
      'God puts the idols on trial. Who among them declared it from ancient time? Not one of them did. First principle: prophecy is God\'s own identity test. A god who cannot tell the future is no god at all. Only the real God can tell the end from the beginning. He is just. He is also the Savior.',
    sourceKeywords: ['who hath declared this from ancient time', 'a just God and a Saviour', 'none beside me'],
    fulfillmentKeywords: ['he will judge the world in righteousness'],
    terms: [],
  },
  'isa-45-22': {
    title: 'Look unto Me, and Be Ye Saved, All the Ends of the Earth',
    principle:
      'God invites the whole world to come to him. That invitation rests on one fact: there is no other God. First principle: salvation comes by looking to him. That is the lesson of the serpent on the pole. The offer reaches the ends of the earth. No other God exists to make it.',
    sourceKeywords: ['Look unto me, and be ye saved', 'all the ends of the earth', 'there is none else'],
    fulfillmentKeywords: ['whosoever will, let him take the water of life freely'],
    terms: [],
  },
  'isa-45-23': {
    title: 'Unto Me Every Knee Shall Bow, Every Tongue Shall Swear',
    principle:
      'God swears the oath himself. It says every knee will bow to him. First principle: Paul applies that oath to Jesus. At the name of Jesus every knee bows. The oath God swore belongs to the Son. He is divine.',
    sourceKeywords: ['I have sworn by myself', 'every knee shall bow', 'every tongue shall swear'],
    fulfillmentKeywords: ['every knee should bow... and that every tongue should confess'],
    terms: [],
  },
  'isa-48-12': {
    title: 'Hearken unto Me, O Jacob; I Am He; I Am the First, I Also Am the Last',
    principle:
      'The called nation hears the title that brackets the book, once again. First principle: God says he is the first and the last. He says it to a chosen people. The glorified Christ repeats it to John. There he claims the name of the God who makes the binding promise as his own.',
    sourceKeywords: ['O Jacob and Israel, my called', 'I am he', 'I also am the last'],
    fulfillmentKeywords: ['Fear not; I am the first and the last'],
    terms: [],
  },
  'isa-49-1': {
    title: 'The LORD Hath Called Me from the Womb',
    principle:
      'The isles are called from far away. The Servant is named before he is born. First principle: the Servant\'s calling came before his birth. He did not earn it later. Luke 1 and Matthew 3 both echo this. God appointed him before he was born.',
    sourceKeywords: ['Listen, O isles', 'called me from the womb', 'made mention of my name'],
    fulfillmentKeywords: ['thou shalt call his name JESUS', 'in whom I am well pleased'],
    terms: [],
  },
  'isa-49-8': {
    title: 'In an Acceptable Time Have I Heard Thee',
    principle:
      'God preserves the Servant. He gives him as a covenant — God\'s binding promise — for the people. First principle: the accepted time is now. Paul quotes this verse as the day of salvation. That day stands open to everyone who hears.',
    sourceKeywords: ['In an acceptable time have I heard thee', 'a day of salvation', 'give thee for a covenant of the people'],
    fulfillmentKeywords: ['behold, now is the accepted time'],
    terms: [],
  },
  'isa-49-22': {
    title: 'I Will Lift Up Mine Hand to the Gentiles',
    principle:
      'God raises a standard for the peoples. The nations bring sons in their arms. They bring daughters on their shoulders. First principle: the Gentile standard does the gathering. The nations carry the covenant family home. That covenant is God\'s binding promise. He gathers his family from every land.',
    sourceKeywords: ['lift up mine hand to the Gentiles', 'set up my standard', 'bring thy sons in their arms'],
    fulfillmentKeywords: ['a great multitude of all nations'],
    terms: [],
  },
  'isa-49-26': {
    title: 'All Flesh Shall Know That I the LORD Am Thy Saviour',
    principle:
      'The oppressors destroy each other. Then the knowledge of the LORD as Savior and Redeemer will reach everyone. First principle: the mighty One of Jacob defends his people. In the end, people know God through the way he delivers them.',
    sourceKeywords: ['I the LORD am thy Saviour and thy Redeemer', 'the mighty One of Jacob'],
    fulfillmentKeywords: ['he hath judged the great whore'],
    terms: [],
  },
  'isa-51-4': {
    title: 'A Law Shall Proceed from Me',
    principle:
      'God makes his judgment rest among the peoples as a light. First principle: the law goes out from Zion. That law is justice that gives light. Matthew applies this Servant passage to Jesus. His ministry was quiet. The whole world\'s hope rested on it.',
    sourceKeywords: ['a law shall proceed from me', 'my judgment to rest for a light of the people'],
    fulfillmentKeywords: ['until he send forth judgment unto victory'],
    terms: [],
  },
  'isa-51-11': {
    title: 'The Redeemed of the LORD Shall Return with Singing',
    principle:
      'Everlasting joy rests on their heads. Mourning flees away. First principle: the ransomed return is described twice in Isaiah. The same promise is given in two places. Revelation hands the same sentence to the multitude the Lamb feeds. Their joy will never end. Their mourning is over.',
    sourceKeywords: ['the redeemed of the LORD shall return', 'come with singing unto Zion', 'sorrow and mourning shall flee away'],
    fulfillmentKeywords: ['God shall wipe away all tears from their eyes'],
    terms: [],
  },
  'isa-52-7': {
    title: 'How Beautiful upon the Mountains Are the Feet',
    principle:
      'The messenger publishes peace. He publishes salvation. He announces, Thy God reigneth. First principle: the messenger\'s feet are beautiful. The message he carries is a coronation. The king has taken his throne. Paul names this messenger the model for preachers who are sent out.',
    sourceKeywords: ['beautiful upon the mountains', 'bringeth good tidings', 'publisheth salvation', 'Thy God reigneth'],
    fulfillmentKeywords: ['How beautiful are the feet of them that preach the gospel of peace'],
    terms: [],
  },
  'isa-52-11': {
    title: 'Depart Ye, Depart Ye; Touch No Unclean Thing',
    principle:
      'The men who carry the vessels of the LORD leave Babylon. They leave clean. First principle: God\'s call to separate is how he makes a people holy. Revelation repeats that call when Babylon falls again.',
    sourceKeywords: ['Depart ye, depart ye', 'touch no unclean thing', 'be ye clean, that bear the vessels of the LORD'],
    fulfillmentKeywords: ['come out of her, my people'],
    terms: [],
  },
  'isa-52-13': {
    title: 'Behold, My Servant Shall Deal Prudently',
    principle:
      'This is where the song of the Servant begins. He deals prudently. He is exalted. He is extolled. He is very high. First principle: the song starts high. Then it drops into wounds. Then it comes back to exaltation. Paul reads the whole song as a picture of the mind of Christ.',
    sourceKeywords: ['my servant shall deal prudently', 'exalted and extolled, and be very high'],
    fulfillmentKeywords: ['God also hath highly exalted him'],
    terms: [],
  },
  'isa-52-15': {
    title: 'So Shall He Sprinkle Many Nations',
    principle:
      'Kings shut their mouths at what they had never been told. First principle: the sprinkling reaches beyond Israel. Even kings are left with nothing to say. They see something no one had ever described to them. Paul quotes this verse for the work of taking the gospel to new places.',
    sourceKeywords: ['sprinkle many nations', 'kings shall shut their mouths', 'that which had not been told them'],
    fulfillmentKeywords: ['To whom he was not spoken of, they shall see'],
    terms: [],
  },
  'isa-53-1': {
    title: 'Who Hath Believed Our Report?',
    principle:
      'The song of the Servant opens with a question. It is the question of unbelief. The arm of the LORD is revealed to few. First principle: this chapter promises healing for all. Yet it begins with disbelief from all. Nobody expected it. Hardly anyone believed the message. Both belong to the same report.',
    sourceKeywords: ['Who hath believed our report', 'to whom is the arm of the LORD revealed'],
    fulfillmentKeywords: ['Lord, who hath believed our report'],
    terms: [],
  },
  'isa-53-3': {
    title: 'Despised and Rejected of Men',
    principle:
      'He is a man of sorrows. He is acquainted with grief. He knew grief personally. People looked down on him. First principle: rejection was not a detour in the Servant\'s story. It was the surface of the story. He is known by the sorrow he carries.',
    sourceKeywords: ['despised and rejected of men', 'a man of sorrows', 'we esteemed him not'],
    fulfillmentKeywords: ['He came unto his own, and his own received him not'],
    terms: [],
  },
  'isa-53-4': {
    title: 'Surely He Hath Borne Our Griefs',
    principle:
      'We misread his wounds. We thought God was punishing him. Those wounds were really our load. First principle: he took our place in two ways. He bore our griefs. He carried our sorrows. The crowd judged him stricken. He was stricken for them.',
    sourceKeywords: ['borne our griefs', 'carried our sorrows', 'smitten of God'],
    fulfillmentKeywords: ['Himself took our infirmities', 'his own self bare our sins'],
    terms: [],
  },
  'isa-53-6': {
    title: 'The LORD Hath Laid on Him the Iniquity of Us All',
    principle:
      'We are all like sheep that have gone astray. Each of us has turned to his own way. The iniquity of us all was gathered onto One. First principle: this verse holds two halves of the gospel. Everyone strayed. Everyone\'s load was laid on one Person. The two meet in the middle of the verse.',
    sourceKeywords: ['like sheep have gone astray', 'turned every one to his own way', 'the iniquity of us all'],
    fulfillmentKeywords: ['who his own self bare our sins', 'made him to be sin for us'],
    terms: [],
  },
  'isa-53-7': {
    title: 'He Was Oppressed, Yet He Opened Not His Mouth',
    principle:
      'He is led like a lamb to the slaughter. He is silent like a sheep before its shearers. He stays silent under both. First principle: he chose to be silent before his accusers. That silence marks him. Philip preached from this verse. Matthew heard the same silence at the trial.',
    sourceKeywords: ['he opened not his mouth', 'as a lamb to the slaughter', 'a sheep before her shearers'],
    fulfillmentKeywords: ['he was led as a sheep to the slaughter', 'as a lamb dumb before his shearer'],
    terms: [],
  },
  'isa-53-8': {
    title: 'He Was Cut Off out of the Land of the Living',
    principle:
      'He was taken from prison and from judgment. He was stricken for the transgression of my people. First principle: his death was a legal act. He was cut off. No man could declare His generation. The stroke that fell was ours, not his.',
    sourceKeywords: ['taken from prison and from judgment', 'cut off out of the land of the living', 'for the transgression of my people'],
    fulfillmentKeywords: ['he was cut off, but not for himself'],
    terms: [],
  },
  'isa-53-9': {
    title: 'He Made His Grave with the Rich in His Death',
    principle:
      'He made his grave with the wicked. He made his tomb with the rich. There was no violence in him. There was no deceit in his mouth. First principle: the burial was fixed before the death. Joseph\'s garden tomb fulfils the rich man\'s part of the verse. Every detail was settled in advance.',
    sourceKeywords: ['his grave with the wicked', 'with the rich in his death', 'no deceit in his mouth'],
    fulfillmentKeywords: ['a rich man of Arimathaea... laid it in his own new tomb'],
    terms: [],
  },
  'isa-53-10': {
    title: 'Yet It Pleased the LORD to Bruise Him',
    principle:
      'His crushing is an offering for sin. The Servant sees his seed and prolonged days. First principle: the wound is the Father\'s design. It is also the guarantee of resurrection. The Servant will not stay in the grave. God takes pleasure in the bruise. That pleasure is not in the pain. It is in the saving outcome.',
    sourceKeywords: ['It pleased the LORD to bruise him', 'an offering for sin', 'he shall prolong his days'],
    fulfillmentKeywords: ['whom God hath raised up, having loosed the pains of death'],
    terms: [],
  },
  'isa-53-11': {
    title: 'By His Knowledge Shall My Righteous Servant Justify Many',
    principle:
      'The travail of his soul satisfies him. Many are justified. He bears their iniquities. First principle: God declares guilty people to be in the right, and that is the Servant\'s reward. The Servant bears their sin. His knowledge is what makes it work. The cross shows a satisfied Servant. That is how sin is laid on him and how the many are declared right with God.',
    sourceKeywords: ['he shall see of the travail of his soul', 'shall be satisfied', 'shall my righteous servant justify many'],
    fulfillmentKeywords: ['being justified by his blood', 'shall be made righteous'],
    terms: [],
  },
  'isa-53-12': {
    title: 'He Bare the Sin of Many, and Made Intercession for the Transgressors',
    principle:
      'He is given a portion with the great. He is numbered with the transgressors. He pleads before the Father in his death. First principle: the last verse of the chapter holds the whole plan together. He was counted below. He pleads above. He shares out the plunder forever.',
    sourceKeywords: ['poured out his soul unto death', 'numbered with the transgressors', 'bare the sin of many', 'made intercession'],
    fulfillmentKeywords: ['he was numbered with the transgressors', 'he ever liveth to make intercession'],
    terms: [],
  },
  'isa-54-1': {
    title: 'Sing, O Barren, Thou That Didst Not Bear',
    principle:
      'The desolate woman has more children than the married wife. First principle: Paul reads the barren woman as the heavenly Jerusalem. The church\'s children outnumber the children of the old covenant. That covenant is God\'s binding promise. The command is to sing.',
    sourceKeywords: ['Sing, O barren', 'more are the children of the desolate', 'saith the LORD'],
    fulfillmentKeywords: ['rejoice, thou barren that bearest not'],
    terms: [],
  },
  'isa-54-5': {
    title: 'Thy Maker Is Thine Husband',
    principle:
      'He is the Redeemer. He is the Holy One of Israel. He is the God of the whole earth. He is her Husband. First principle: God\'s binding promise is a marriage promise. Paul reads Genesis that way. Revelation ends in a wedding city.',
    sourceKeywords: ['Thy Maker is thine husband', 'the LORD of hosts is his name', 'God of the whole earth'],
    fulfillmentKeywords: ['I have espoused you to one husband'],
    terms: [],
  },
  'isa-54-9': {
    title: 'As I Have Sworn That the Waters of Noah Should No More',
    principle:
      'God uses the oath from Noah\'s flood again. There will be no more wrath. There will be no more rebuke. First principle: God swears his peace with the same force that promised no more flood. His mercy rests on a binding promise. That promise is the oath he swore about the flood.',
    sourceKeywords: ['the waters of Noah', 'should no more go over the earth', 'nor rebuke thee'],
    fulfillmentKeywords: ['neither shall there be a flood to destroy the earth'],
    terms: [],
  },
  'isa-54-13': {
    title: 'All Thy Children Shall Be Taught of the LORD',
    principle:
      'Your children are taught by the LORD. Great peace is theirs. First principle: Jesus quotes this verse to explain who comes to him. The ones the Father teaches are the ones who are drawn to him. The peace of God\'s binding promise comes through that teaching. Nobody talks himself into coming.',
    sourceKeywords: ['all thy children shall be taught of the LORD', 'great shall be the peace of thy children'],
    fulfillmentKeywords: ['Every man therefore that hath heard, and hath learned of the Father, cometh unto me'],
    terms: [],
  },
  'isa-55-1': {
    title: 'Ho, Every One That Thirsteth, Come Ye to the Waters',
    principle:
      'Wine and milk are offered without money and without price. First principle: the gospel turns the market upside down. You do not pay. You come thirsty. Grace is the currency. Revelation\'s last invitation quotes this verse.',
    sourceKeywords: ['every one that thirsteth', 'come ye to the waters', 'without money and without price'],
    fulfillmentKeywords: ['whosoever will, let him take the water of life freely'],
    terms: [],
  },
  'isa-55-3': {
    title: 'I Will Make an Everlasting Covenant with You',
    principle:
      'Incline your ear. Your soul will live. The sure mercies of David are given to you. First principle: hearing is the door into the life of the covenant. That covenant is God\'s binding promise. Paul preaches the sure mercies as the promise of resurrection. Listening comes before living. You hear first. Then you live.',
    sourceKeywords: ['Incline your ear, and come unto me', 'your soul shall live', 'the sure mercies of David'],
    fulfillmentKeywords: ['I will give you the sure mercies of David'],
    terms: [],
  },
  'isa-55-10': {
    title: 'As the Rain Cometh Down from Heaven',
    principle:
      'Rain waters the earth. It gives seed to the sower and bread to the eater. It does not return empty. First principle: God\'s word works like that rain. It comes down. It does its work. It never comes back with nothing. That is the anchor that holds up the hope of everyone who preaches.',
    sourceKeywords: ['the rain cometh down', 'watereth the earth', 'seed to the sower, and bread to the eater'],
    fulfillmentKeywords: ['my word... shall not return unto me void'],
    terms: [],
  },
  'isa-56-7': {
    title: 'Mine House Shall Be Called an House of Prayer for All People',
    principle:
      'Foreigners who are joined to the LORD are made joyful on His holy mountain. First principle: the temple was always meant for the nations. Outsiders were never meant to be kept out. Jesus quotes this verse when he cleanses the temple. Isaiah wrote it for the eunuchs and the strangers.',
    sourceKeywords: ['bring to my holy mountain', 'joyful in my house of prayer', 'house of prayer for all people'],
    fulfillmentKeywords: ['My house shall be called the house of prayer'],
    terms: [],
  },
  'isa-57-1': {
    title: 'The Righteous Perisheth, and No Man Layeth It to Heart',
    principle:
      'Merciful men are taken away before the evil comes. First principle: when the righteous disappear from the earth, that is mercy in disguise. They are gathered up before the storm breaks. Nobody stops to think about it. Heaven does.',
    sourceKeywords: ['The righteous perisheth', 'no man layeth it to heart', 'taken away from the evil to come'],
    fulfillmentKeywords: ['Blessed are the dead which die in the Lord'],
    terms: [],
  },
  'isa-58-6': {
    title: 'Is Not This the Fast That I Have Chosen?',
    principle:
      'Loose the bands. Undo the burdens. Let the oppressed go free. Break every yoke. First principle: true fasting means mercy to people. It is not only going without food. The Spirit-anointed Servant preaches the same list at Nazareth. He sets the oppressed free there too.',
    sourceKeywords: ['the fast that I have chosen', 'undo the heavy burdens', 'let the oppressed go free'],
    fulfillmentKeywords: ['preach deliverance to the captives', 'set at liberty them that are bruised'],
    terms: [],
  },
  'isa-58-13': {
    title: 'Call the Sabbath a Delight',
    principle:
      'Turn away from your own pleasure on the holy day. Honour what the LORD delights in. First principle: the Sabbath is a delight, not a debt. When your foot turns away from pleasing yourself, it turns toward honouring the LORD. That turn is what makes the day a delight.',
    sourceKeywords: ['turn away thy foot from the sabbath', 'call the sabbath a delight', 'the holy of the LORD'],
    fulfillmentKeywords: ['The sabbath was made for man'],
    terms: [],
  },
  'isa-58-14': {
    title: 'Then Shalt Thou Delight Thyself in the LORD',
    principle:
      'You will ride on the high places. You will be fed with Jacob\'s heritage. The mouth of the LORD has spoken it. First principle: honouring the Sabbath ends in delight. It ends in a heritage. The promise is spoken. Spoken promises do not fail. That is why it is certain.',
    sourceKeywords: ['delight thyself in the LORD', 'ride upon the high places of the earth', 'the heritage of Jacob thy father'],
    fulfillmentKeywords: ['there remaineth therefore a rest to the people of God'],
    terms: [],
  },
  'isa-59-7': {
    title: 'Their Feet Run to Evil',
    principle:
      'Their feet run to shed blood. Their thoughts are wicked. Their paths are wasteful and destructive. First principle: Paul\'s courtroom takes its evidence of violence from this verse. The feet are swift. The thoughts are wicked first. That is why the feet run.',
    sourceKeywords: ['their feet run to evil', 'haste to shed innocent blood', 'wasting and destruction'],
    fulfillmentKeywords: ['Their feet are swift to shed blood'],
    terms: [],
  },
  'isa-59-21': {
    title: 'My Spirit That Is upon Thee, and My Words in Thy Mouth',
    principle:
      'God\'s binding promise will never leave them. It stays in the mouth, in the seed, and in the seed\'s seed, forever. First principle: God\'s new binding promise is made of words. It is handed down through families. The Spirit rests on the Person. The words stay in the family line.',
    sourceKeywords: ['my covenant with them', 'my words which I have put in thy mouth', 'from henceforth and for ever'],
    fulfillmentKeywords: ['I will put my laws into their hearts'],
    terms: [],
  },
  'isa-60-1': {
    title: 'Arise, Shine; for Thy Light Is Come',
    principle:
      'The glory of the LORD rises upon Zion like dawn. First principle: the command to arise is given to the one who has been shone upon. Light that is received becomes light that shines out. The city\'s darkness is overcome by glory. It is not overcome by lamps. She does not make her own light.',
    sourceKeywords: ['Arise, shine', 'thy light is come', 'the glory of the LORD is risen upon thee'],
    fulfillmentKeywords: ['In him was life; and the life was the light of men'],
    terms: [],
  },
  'isa-60-3': {
    title: 'The Gentiles Shall Come to Thy Light',
    principle:
      'Kings travel toward the brightness of Zion as she rises. First principle: the star over Bethlehem and the nations in New Jerusalem both quote this verse. Wise kings came once. Kings will come again. The light draws them every time.',
    sourceKeywords: ['the Gentiles shall come to thy light', 'kings to the brightness of thy rising'],
    fulfillmentKeywords: ['we have seen his star in the east'],
    terms: [],
  },
  'isa-60-19': {
    title: 'The LORD Shall Be unto Thee an Everlasting Light',
    principle:
      'You will not need the sun to light your day. You will not need the moon at night. The LORD himself will be your light. He will be your glory. First principle: the sun and moon were only stand-ins. They were never meant to last forever. New Jerusalem has no need of them. The Lamb lights that city.',
    sourceKeywords: ['The sun shall be no more thy light by day', 'an everlasting light', 'thy God thy glory'],
    fulfillmentKeywords: ['the city had no need of the sun... for the glory of God did lighten it'],
    terms: [],
  },
  'isa-61-2': {
    title: 'To Proclaim the Acceptable Year, and the Day of Vengeance',
    principle:
      'This verse brings comfort to mourners. In the same breath it speaks of vengeance. First principle: Jesus stopped reading in the middle of the verse at Nazareth. He closed the book before the last line. The acceptable year opened then. The day of vengeance still waits for his return.',
    sourceKeywords: ['the acceptable year of the LORD', 'the day of vengeance of our God', 'to comfort all that mourn'],
    fulfillmentKeywords: ['To preach the acceptable year of the Lord'],
    terms: [],
  },
  'isa-61-10': {
    title: 'He Hath Clothed Me with the Garments of Salvation',
    principle:
      'The robe of righteousness is like a bridegroom\'s ornament. It is like a bride\'s jewels. First principle: salvation is a wedding dress. The robe is given to you. You do not weave it yourself. Revelation\'s bride wears the fine linen of the saints.',
    sourceKeywords: ['garments of salvation', 'robe of righteousness', 'as a bride adorneth herself'],
    fulfillmentKeywords: ['to her was granted... fine linen, clean and white'],
    terms: [],
  },
  'isa-62-11': {
    title: 'Behold, Thy Salvation Cometh; His Reward Is with Him',
    principle:
      'The proclamation reaches the world\'s end: say to the daughter of Zion. First principle: the words quoted on Palm Sunday come from two prophets, not one. Zechariah gives the donkey. Isaiah gives the reward. Salvation rides into the city on that animal. The two books are quoted together.',
    sourceKeywords: ['unto the end of the world', 'Behold, thy salvation cometh', 'his reward is with him, and his work before him'],
    fulfillmentKeywords: ['Behold, thy King cometh unto thee', 'I come quickly; and my reward is with me'],
    terms: [],
  },
  'isa-63-9': {
    title: 'In All Their Affliction He Was Afflicted',
    principle:
      'The Angel of His presence saved them. In love and pity he redeemed them. He carried them along. First principle: God does not watch their affliction from outside. He is not a distant observer. The Redeemer feels the burden he lifts. He has felt it all through the days of old.',
    sourceKeywords: ['In all their affliction he was afflicted', 'the angel of his presence saved them', 'he bare them, and carried them'],
    fulfillmentKeywords: ['the angel which redeemed me from all evil'],
    terms: [],
  },
  'isa-64-4': {
    title: 'What He Hath Prepared for Him That Waiteth for Him',
    principle:
      'No eye has seen it. No ear has heard it. No human heart has imagined what God has prepared. First principle: God has more ready than we can take in. What he waits to give is beyond what we perceive. He has kept it ready for those who wait for him. Paul quotes this verse for the things the Spirit reveals. No eye had seen them.',
    sourceKeywords: ['since the beginning of the world men have not heard', 'what he hath prepared for him that waiteth'],
    fulfillmentKeywords: ['Eye hath not seen, nor ear heard'],
    terms: [],
  },
  'isa-65-1': {
    title: 'I Am Found of Them That Sought Me Not',
    principle:
      'A nation that was not called by God\'s name finds him. First principle: people who were not looking for God find him. Paul quotes this verse as the Gentile paradox. They did not ask. They did not search. Grace searches for us before we pray. God finds them first.',
    sourceKeywords: ['I am sought of them that asked not for me', 'found of them that sought me not', 'a nation that was not called by my name'],
    fulfillmentKeywords: ['I was made manifest unto them that asked not after me'],
    terms: [],
  },
  'isa-65-2': {
    title: 'I Have Spread Out My Hands All the Day',
    principle:
      'God stretches out his hands to a rebellious people. They walk in their own way. First principle: God\'s posture toward rebels is open arms all day long. The people turn away from him. That is their answer. It is not his posture toward them.',
    sourceKeywords: ['spread out my hands all the day', 'a rebellious people', 'after their own thoughts'],
    fulfillmentKeywords: ['to Israel he saith, All day long I have stretched forth my hands'],
    terms: [],
  },
  'isa-65-17': {
    title: 'I Create New Heavens and a New Earth',
    principle:
      'The former things are not remembered. They do not come into mind. First principle: the end of the story is not only a rescue. It is a whole new creation. Peter carries this promise forward. Revelation carries it forward too. Both point to the world made new. God starts over.',
    sourceKeywords: ['I create new heavens and a new earth', 'the former shall not be remembered'],
    fulfillmentKeywords: ['a new heaven and a new earth'],
    terms: [],
  },
  'isa-66-1': {
    title: 'The Heaven Is My Throne, and the Earth Is My Footstool',
    principle:
      'God asks a question about building him a house. Where is the place of My rest? First principle: Stephen\'s defense reaches its high point here. God cannot be housed in a building. No walls can hold him. The temple argument dies on this verse.',
    sourceKeywords: ['The heaven is my throne', 'the earth is my footstool', 'where is the house that ye build'],
    fulfillmentKeywords: ['Heaven is my throne, and earth is my footstool'],
    terms: [],
  },
  'isa-66-2': {
    title: 'To This Man Will I Look, Poor and of a Contrite Spirit',
    principle:
      'God\'s own hand made all things. Yet he looks at the person with a trembling heart. First principle: what draws God\'s gaze is not a building. It is the heart of a person. He looks for the poor. He looks for the contrite. He looks for the one who trembles at his word.',
    sourceKeywords: ['mine hand made', 'to this man will I look', 'trembleth at my word'],
    fulfillmentKeywords: ['Blessed are the poor in spirit'],
    terms: [],
  },
  'isa-66-24': {
    title: 'Their Worm Shall Not Die, Neither Shall Their Fire Be Quenched',
    principle:
      'The prophecy ends with the corpses of the transgressors and a fire that is not quenched. First principle: Jesus quotes this verse three times. He uses it as the definition of Gehenna. The final loathing lasts as long as the new heavens are new.',
    sourceKeywords: ['their worm shall not die', 'their fire shall be quenched', 'an abhorring unto all flesh'],
    fulfillmentKeywords: ['where their worm dieth not, and the fire is not quenched'],
    terms: [],
  },
  // ── Hand-written expansion: 1 Corinthians ───────────────────────────────
  '1co-1-19': {
    title: 'I Will Destroy the Wisdom of the Wise',
    principle:
      'Isaiah\'s marvellous work brings down the pride of the clever. First principle: the cross is God\'s answer to those who worship human wisdom. The understanding of the prudent is brought to nothing. A crucified Messiah saves.',
    sourceKeywords: ['destroy the wisdom of the wise', 'bring to nothing the understanding'],
    fulfillmentKeywords: ['a marvellous work and a wonder'],
    terms: [],
  },
  '1co-1-30': {
    title: 'Made unto Us Wisdom, Righteousness, Sanctification, Redemption',
    principle:
      'These gifts come from God and are in Christ Jesus. Four gifts, one Person. First principle: “THE LORD OUR RIGHTEOUSNESS” from Jeremiah now points to a person. Christ himself is every gift of God\'s binding promise. He does not merely hand the gifts out.',
    sourceKeywords: ['of him are ye in Christ Jesus', 'wisdom, and righteousness', 'sanctification, and redemption'],
    fulfillmentKeywords: ['THE LORD OUR RIGHTEOUSNESS', 'by his knowledge shall my righteous servant justify many'],
    terms: [],
  },
  '1co-2-8': {
    title: 'Had They Known It, They Would Not Have Crucified the Lord of Glory',
    principle:
      'The rulers of this world did not know who He was. First principle: the men who crucified Him truly did not understand. Even so, they did what God had planned in secret. They acted against the Lord of glory.',
    sourceKeywords: ['none of the princes of this world knew', 'crucified the Lord of glory'],
    fulfillmentKeywords: ['against his anointed', 'God before had shewed by the mouth of all his prophets'],
    terms: [],
  },
  '1co-2-9': {
    title: 'Eye Hath Not Seen, Nor Ear Heard',
    principle:
      'The things God has prepared for those who love him are beyond anything a person can perceive. First principle: the Spirit reveals the wonders of Isaiah 64 that no one perceived. He does not reveal them to spectators. He reveals them to people who love God.',
    sourceKeywords: ['Eye hath not seen', 'nor ear heard', 'which God hath prepared for them that love him'],
    fulfillmentKeywords: ['what he hath prepared for him that waiteth for him'],
    terms: [],
  },
  '1co-3-19': {
    title: 'The Wisdom of This World Is Foolishness with God',
    principle:
      '“He taketh the wise in their own craftiness.” First principle: cleverness traps the clever person. Job\'s friend knew this proverb long before Paul used it against the quarrelling groups in Corinth.',
    sourceKeywords: ['foolishness with God', 'He taketh the wise in their own craftiness'],
    fulfillmentKeywords: ['he taketh the wise in their own craftiness'],
    terms: [],
  },
  '1co-3-20': {
    title: 'The Lord Knoweth the Thoughts of the Wise',
    principle:
      'The thoughts of the wise are vain before Him who searches. First principle: only God can know what a person is thinking. That is his right. The psalm of judgment brings down every proud scheme.',
    sourceKeywords: ['The Lord knoweth the thoughts of the wise', 'that they are vain'],
    fulfillmentKeywords: ['the LORD knoweth the thoughts of man'],
    terms: [],
  },
  '1co-6-16': {
    title: 'Two, Saith He, Shall Be One Flesh',
    principle:
      'When a man joins himself to a harlot, the two become one body. Genesis 2 is the rule for the body. First principle: the one-flesh bond is real. To misuse it is to defile something holy. A member of Christ cannot be joined to a harlot.',
    sourceKeywords: ['joined to an harlot is one body', 'shall be one flesh'],
    fulfillmentKeywords: ['they twain shall be one flesh'],
    terms: [],
  },
  '1co-9-9': {
    title: 'Thou Shalt Not Muzzle the Mouth of the Ox',
    principle:
      'The ox that treads out the grain lives from its work, and the law was written for us. First principle: God\'s care for animals teaches us how to treat people. Those who sow spiritual things may reap material support.',
    sourceKeywords: ['Thou shalt not muzzle the mouth of the ox', 'Doth God take care for oxen'],
    fulfillmentKeywords: ['thou shalt not muzzle the ox'],
    terms: [],
  },
  '1co-10-1': {
    title: 'All Our Fathers Were under the Cloud',
    principle:
      'The wilderness generation passed through the sea under the cloud. First principle: the exodus belongs to the church too. Paul reads Israel\'s story as the story of Gentile believers, and he reads it as a warning.',
    sourceKeywords: ['all our fathers were under the cloud', 'all passed through the sea'],
    fulfillmentKeywords: ['the LORD went before them... in the pillar of a cloud'],
    terms: [],
  },
  '1co-10-2': {
    title: 'All Were Baptized unto Moses in the Cloud and in the Sea',
    principle:
      'This was a baptism without water. The cloud was above them, and the sea stood as walls on either side. First principle: at the crossing, Israel was joined to a deliverer. Christian baptism into Christ joins a believer to him in the same way.',
    sourceKeywords: ['all baptized unto Moses', 'in the cloud and in the sea'],
    fulfillmentKeywords: ['the waters were a wall unto them on their right hand'],
    terms: [],
  },
  '1co-10-7': {
    title: 'The People Sat Down to Eat and Drink, and Rose Up to Play',
    principle:
      'Paul quotes the golden-calf orgy as the worship that goes with idolatry. First principle: an idol is a substitute for God, and people feast before it. Paul applies that Exodus scene to the Lord\'s table.',
    sourceKeywords: ['Neither be ye idolaters', 'sat down to eat and drink', 'rose up to play'],
    fulfillmentKeywords: ['they rose up early... and offered burnt offerings', 'rose up to play'],
    terms: [],
  },
  '1co-10-8': {
    title: 'Twenty-Three Thousand Fell in One Day',
    principle:
      'The people committed fornication at Peor, and a plague struck them at once. First principle: God can judge sin right away, and he can judge it by number. The count recorded in Numbers 25 stands as a memorial of what sin costs.',
    sourceKeywords: ['commit fornication', 'fell in one day three and twenty thousand'],
    fulfillmentKeywords: ['twenty and four thousand died'],
    terms: [],
  },
  '1co-10-9': {
    title: 'Neither Let Us Tempt Christ',
    principle:
      'The wilderness grumblers tempted someone, and Paul names that one: Christ. First principle: the Rock followed them, and that Rock was Christ. When they tested God\'s patience with serpents, they were testing Christ himself.',
    sourceKeywords: ['tempt Christ', 'destroyed of serpents'],
    fulfillmentKeywords: ['the people spake against God', 'fiery serpents'],
    terms: [],
  },
  '1co-10-26': {
    title: 'The Earth Is the Lord\'s, and the Fulness Thereof',
    principle:
      'Psalm 24 settles the question about meat sold in the market. First principle: the whole earth belongs to the Lord. So meat bought in the meat market has no idol inside it. Because the Lord owns it all, the believer does not need to ask where it came from.',
    sourceKeywords: ['the earth is the Lord\'s', 'and the fulness thereof'],
    fulfillmentKeywords: ['The earth is the LORD\'S'],
    terms: [],
  },
  '1co-11-25': {
    title: 'This Cup Is the New Testament in My Blood',
    principle:
      'The cup at the supper points to Jeremiah 31 and speaks of blood. First principle: every Communion announces the terms of God\'s new binding promise. Forgiveness comes by blood. Remembrance is a command.',
    sourceKeywords: ['the new testament in my blood', 'in remembrance of me'],
    fulfillmentKeywords: ['I will make a new covenant', 'forgive their iniquity'],
    terms: [],
  },
  '1co-12-27': {
    title: 'Ye Are the Body of Christ, and Members in Particular',
    principle:
      'Many members make one body, and each member has a part to play. First principle: the church is not merely like a body. It really is one. Each member being different is the design of the Head.',
    sourceKeywords: ['the body of Christ', 'members in particular'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1co-15-4': {
    title: 'He Rose Again the Third Day According to the Scriptures',
    principle:
      'Buried, risen on the third day, according to the Scriptures. First principle: the resurrection is not a small addition to the gospel. It is a prediction the Scriptures made in advance, and it came true. Jonah, Psalm 16, and Hosea 6 all said so.',
    sourceKeywords: ['he was buried', 'rose again the third day', 'according to the scriptures'],
    fulfillmentKeywords: ['in the belly of the fish three days', 'wilt not leave my soul in hell'],
    terms: [],
  },
  '1co-15-15': {
    title: 'We Are Found False Witnesses of God',
    principle:
      'If Christ is not raised, the apostles are lying about God. First principle: the resurrection is the fact every apostolic witness stands or falls on. It is a claim about what happened, not a metaphor.',
    sourceKeywords: ['false witnesses of God', 'he raised up Christ', 'the dead rise not'],
    fulfillmentKeywords: ['This Jesus hath God raised up'],
    terms: [],
  },
  '1co-15-21': {
    title: 'Since by Man Came Death, by Man Came the Resurrection',
    principle:
      'Death entered by a man, and resurrection enters by a Man. First principle: God worked this way on purpose. The problem came through a human being, so the answer came through a human being too. The second Adam is that answer.',
    sourceKeywords: ['by man came death', 'by man came also the resurrection'],
    fulfillmentKeywords: ['dust thou art, and unto dust shalt thou return'],
    terms: [],
  },
  '1co-15-22': {
    title: 'As in Adam All Die, Even So in Christ Shall All Be Made Alive',
    principle:
      'Two unions lead to two destinies. First principle: everyone in Christ will live, as surely as everyone in Adam died. Being in Christ decides that, not your family line. The resurrection is in Him.',
    sourceKeywords: ['in Adam all die', 'in Christ shall all be made alive'],
    fulfillmentKeywords: ['the hour is coming, in the which all that are in the graves'],
    terms: [],
  },
  '1co-15-25': {
    title: 'He Must Reign, Till He Hath Put All Enemies under His Feet',
    principle:
      'The Son is on the throne, and he reigns until every enemy lies under his feet. First principle: Christ rules now, and he will finish the work later. Psalm 110 describes that process, not just the throne.',
    sourceKeywords: ['he must reign', 'till he hath put all enemies under his feet'],
    fulfillmentKeywords: ['Sit thou at my right hand', 'until I make thine enemies'],
    terms: [],
  },
  '1co-15-26': {
    title: 'The Last Enemy That Shall Be Destroyed Is Death',
    principle:
      'Death is the last enemy that Christ\'s reign destroys. First principle: Isaiah says death is swallowed up, and Revelation says death ends in the lake of fire. Those two passages frame the whole campaign. The ending is already written.',
    sourceKeywords: ['The last enemy', 'shall be destroyed is death'],
    fulfillmentKeywords: ['He will swallow up death in victory'],
    terms: [],
  },
  '1co-15-27': {
    title: 'He Hath Put All Things under His Feet',
    principle:
      'Paul quotes Psalm 8 and notes one exception: the Father who puts all things under him. First principle: the psalm puts everything under the Son. Paul adds one exception, and that exception guards the Trinity. Everything is under the Son, and the Son is under no one but the Father.',
    sourceKeywords: ['hath put all things under his feet', 'it is manifest that he is excepted'],
    fulfillmentKeywords: ['thou hast put all things under his feet'],
    terms: [],
  },
  '1co-15-32': {
    title: 'Let Us Eat and Drink; for to Morrow We Die',
    principle:
      'Paul fought wild beasts at Ephesus. If the dead are not raised, that was pointless. First principle: the feast of Isaiah 22 is how unbelief reasons. If this life is all there is, eat and drink. The hope of the resurrection is what makes it worth enduring.',
    sourceKeywords: ['fought with beasts at Ephesus', 'let us eat and drink', 'to morrow we die'],
    fulfillmentKeywords: ['let us eat and drink; for to morrow we shall die'],
    terms: [],
  },
  '1co-15-51': {
    title: 'We Shall Not All Sleep, but We Shall All Be Changed',
    principle:
      'God has revealed a mystery. Believers who are still alive will be changed, and the dead will be raised. First principle: the last generation is exempt from death. God changes them instead, in the twinkling of an eye, at the last trump.',
    sourceKeywords: ['I shew you a mystery', 'We shall not all sleep', 'we shall all be changed'],
    fulfillmentKeywords: ['they that sleep in the dust of the earth shall awake'],
    terms: [],
  },
  '1co-15-55': {
    title: 'O Death, Where Is Thy Sting?',
    principle:
      'Hosea\'s taunt becomes the resurrection\'s victory cry. First principle: the sting was sin and the law gave it power. The cross removes the venom. And the grave loses its victory.',
    sourceKeywords: ['O death, where is thy sting', 'O grave, where is thy victory'],
    fulfillmentKeywords: ['I will ransom them from the power of the grave', 'O death, I will be thy plagues'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Corinthians ───────────────────────────────
  '2co-3-7': {
    title: 'The Ministration of Death, Written and Engraven in Stones',
    principle:
      'Moses\' face shone so brightly that the Israelites could not look at it. That glory was passing away. First principle: even a fading glory made them afraid. The greater glory of the Spirit outlasts the stone.',
    sourceKeywords: ['ministration of death', 'engraven in stones', 'could not stedfastly behold the face of Moses'],
    fulfillmentKeywords: ['shone from his face'],
    terms: [],
  },
  '2co-3-13': {
    title: 'Not as Moses, Which Put a Vail over His Face',
    principle:
      'Moses put a veil over the fading glory so Israel could not see the end of what was being taken away. First principle: that veil was mercy. It covered something that was passing away. The glory of God\'s old binding promise had an end, and Paul is not afraid to name it.',
    sourceKeywords: ['put a vail over his face', 'could not stedfastly look to the end', 'which is abolished'],
    fulfillmentKeywords: ['he took the vail off', 'spake unto the children of Israel'],
    terms: [],
  },
  '2co-3-16': {
    title: 'When It Shall Turn to the Lord, the Vail Shall Be Taken Away',
    principle:
      'When a heart turns to the Lord, the covering lifts. First principle: the veil no longer sits on Moses\' face. It lies on the hearts of the readers. When a person turns to the Lord, Christ takes it away.',
    sourceKeywords: ['when it shall turn to the Lord', 'the vail shall be taken away'],
    fulfillmentKeywords: ['he took the vail off until he came out'],
    terms: [],
  },
  '2co-3-18': {
    title: 'Beholding as in a Glass the Glory of the Lord',
    principle:
      'With an open face, we reflect the Lord\'s glory. The Spirit changes the beholder from glory to glory. First principle: God makes a person holy over time. We become what we behold. The Spirit uses the unveiled mirror to do it.',
    sourceKeywords: ['with open face beholding as in a glass', 'changed into the same image', 'from glory to glory'],
    fulfillmentKeywords: ['I shall behold thy face in righteousness', 'I shall be satisfied'],
    terms: [],
  },
  '2co-4-6': {
    title: 'God Hath Shined in Our Hearts',
    principle:
      'The command that made light out of darkness repeats when God saves a person. First principle: making a person new is a creation miracle in miniature. The new light shines in the face of Jesus Christ.',
    sourceKeywords: ['commanded the light to shine out of darkness', 'hath shined in our hearts', 'in the face of Jesus Christ'],
    fulfillmentKeywords: ['Let there be light: and there was light'],
    terms: [],
  },
  '2co-6-2': {
    title: 'Behold, Now Is the Accepted Time',
    principle:
      'Paul says the accepted day of Isaiah 49 is here. First principle: God saves people in a season. That season is now. God heard and helped his Servant. That is the open window.',
    sourceKeywords: ['I have heard thee in a time accepted', 'now is the accepted time', 'now is the day of salvation'],
    fulfillmentKeywords: ['In an acceptable time have I heard thee'],
    terms: [],
  },
  '2co-6-16': {
    title: 'Ye Are the Temple of the Living God',
    principle:
      'Exodus and Ezekiel promised that God would dwell with his people. That promise now applies to believers. First principle: God said, “I will dwell in them.” He moved from a tent to people. His dwelling place is now a people, and no idol has a place there.',
    sourceKeywords: ['ye are the temple of the living God', 'I will dwell in them, and walk in them', 'they shall be my people'],
    fulfillmentKeywords: ['let them make me a sanctuary; that I may dwell among them'],
    terms: [],
  },
  '2co-6-17': {
    title: 'Come Out from Among Them, and Be Ye Separate',
    principle:
      'God calls his people out, and he promises, “I will receive you.” First principle: holiness that refuses to touch what is unclean is not isolation. It is the mark of God\'s binding promise. Separation opens the door to God as Father.',
    sourceKeywords: ['come out from among them', 'be ye separate', 'touch not the unclean thing'],
    fulfillmentKeywords: ['Depart ye, depart ye; touch no unclean thing'],
    terms: [],
  },
  '2co-6-18': {
    title: 'Ye Shall Be My Sons and Daughters',
    principle:
      'The Almighty adopts. First principle: God spoke through Nathan to David. He promised: I will be to him a Father. That promise stretched from the royal Son to everyone in Christ. God\'s sonship is promised, and he makes it real. He never takes it back.',
    sourceKeywords: ['a Father unto you', 'my sons and daughters', 'saith the Lord Almighty'],
    fulfillmentKeywords: ['I will be to him a Father', 'he shall be to me a Son'],
    terms: [],
  },
  '2co-8-9': {
    title: 'Though He Was Rich, Yet for Your Sakes He Became Poor',
    principle:
      'God became man — the incarnation — and grace works this way. Jesus became poor. First principle: Christ\'s poverty is how his riches reach us. He gave up what he had so that we could be rich forever. Our giving follows the same pattern.',
    sourceKeywords: ['though he was rich', 'he became poor', 'through his poverty might be rich'],
    fulfillmentKeywords: ['he hath not where to lay his head', 'made himself of no reputation'],
    terms: [],
  },
  '2co-9-9': {
    title: 'He Hath Dispersed Abroad; He Hath Given to the Poor',
    principle:
      'Paul quotes Psalm 112\'s giver for the collection. First principle: the one who scatters to the poor keeps a righteousness that lasts. The hoarder loses what he holds. Giving is seed, not subtraction.',
    sourceKeywords: ['He hath dispersed abroad', 'given to the poor', 'his righteousness remaineth for ever'],
    fulfillmentKeywords: ['his righteousness endureth for ever'],
    terms: [],
  },
  '2co-10-17': {
    title: 'He That Glorieth, Let Him Glory in the Lord',
    principle:
      'Jeremiah gave the rule for boasting. First principle: a person may boast in one thing only, and that is the Lord Himself. It means knowing and understanding Him that exercises lovingkindness, judgment, and righteousness.',
    sourceKeywords: ['he that glorieth', 'let him glory in the Lord'],
    fulfillmentKeywords: ['let not the wise man glory in his wisdom', 'glorieth in this, that he understandeth and knoweth me'],
    terms: [],
  },
  '2co-13-4': {
    title: 'He Was Crucified Through Weakness, Yet He Liveth',
    principle:
      'Crucified in weakness, living by God\'s power: that is the pattern for Paul and the Corinthians. First principle: weakness does not prove that God\'s life is absent. God usually works through it.',
    sourceKeywords: ['crucified through weakness', 'yet he liveth by the power of God', 'we shall live with him'],
    fulfillmentKeywords: ['despised and rejected of men'],
    terms: [],
  },

  // ── Hand-written expansion: Galatians ───────────────────────────────────
  'gal-1-8': {
    title: 'Though We, or an Angel from Heaven, Preach Any Other Gospel',
    principle:
      'The curse guards the gospel even from heaven\'s own messengers. First principle: God delivered the gospel once, so no later angel can change it. Both Moses and John warn against adding to God\'s word or taking from it.',
    sourceKeywords: ['an angel from heaven', 'preach any other gospel', 'let him be accursed'],
    fulfillmentKeywords: ['If any man shall add unto these things'],
    terms: [],
  },
  'gal-3-6': {
    title: 'Abraham Believed God, and It Was Accounted for Righteousness',
    principle:
      'Genesis 15:6 is the foundation stone of Paul\'s argument here. First principle: God credited righteousness to Abraham because Abraham believed. That came before the law, before circumcision and before works. This is the oldest gospel text.',
    sourceKeywords: ['Abraham believed God', 'accounted to him for righteousness'],
    fulfillmentKeywords: ['he believed in the LORD; and he counted it to him for righteousness'],
    terms: [],
  },
  'gal-3-8': {
    title: 'The Scripture Preached Before the Gospel unto Abraham',
    principle:
      'Scripture announced the gospel to Abraham in advance: In thee shall all nations be blessed. First principle: Scripture both saw ahead and preached. It told Abraham himself that God would justify the Gentiles by faith.',
    sourceKeywords: ['the scripture, foreseeing', 'preached before the gospel unto Abraham', 'In thee shall all nations be blessed'],
    fulfillmentKeywords: ['in thy seed shall all the nations of the earth be blessed'],
    terms: [],
  },
  'gal-3-10': {
    title: 'Cursed Is Every One That Continueth Not in All Things',
    principle:
      'Law-keepers fall under the law\'s curse for a single lapse. First principle: the law demands everything and its curse reaches everyone. Deuteronomy\'s curse falls on all who have ever stopped keeping the whole law.',
    sourceKeywords: ['under the curse', 'Cursed is every one', 'continueth not in all things'],
    fulfillmentKeywords: ['Cursed be he that confirmeth not all the words of this law'],
    terms: [],
  },
  'gal-3-11': {
    title: 'The Just Shall Live by Faith',
    principle:
      'Habakkuk 2:4 is the verse that divides law from life. First principle: three apostles quote it. Romans uses it to teach, Galatians uses it to argue, Hebrews uses it to comfort. Life comes by faith, never by performance.',
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
      'The promise to Abraham comes down to one Seed, who is Christ. First principle: Paul argues from a singular noun. God made those promises to one Person, and that Person is the Seed.',
    sourceKeywords: ['to Abraham and his seed were the promises', 'as of one, And to thy seed, which is Christ'],
    fulfillmentKeywords: ['in thy seed shall all the nations of the earth be blessed'],
    terms: [],
  },
  'gal-3-17': {
    title: 'The Law, Which Was Four Hundred and Thirty Years After, Cannot Disannul',
    principle:
      'The confirmed covenant outranks the later law. First principle: chronology carries the argument here — the promise is older, confirmed in Christ, and no later administration can cancel it.',
    sourceKeywords: ['the covenant... confirmed before of God in Christ', 'four hundred and thirty years after', 'cannot disannul'],
    fulfillmentKeywords: ['in the same day the LORD made a covenant with Abram'],
    terms: [],
  },
  'gal-3-19': {
    title: 'Wherefore Then Serveth the Law?',
    principle:
      'Added because of transgressions, till the Seed should come, ordained by angels through a mediator. First principle: the law was a temporary tutor with a fixed end. When the Seed arrived, its guardianship ended.',
    sourceKeywords: ['Wherefore then serveth the law', 'added because of transgressions', 'till the seed should come'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'gal-3-22': {
    title: 'The Scripture Hath Concluded All under Sin',
    principle:
      'Scripture shut everything up under sin for one purpose: the promise given to believers. First principle: the conclusion is custody, not condemnation alone. All are under sin so that the promise by faith has no rival door.',
    sourceKeywords: ['concluded all under sin', 'the promise by faith of Jesus Christ', 'given to them that believe'],
    fulfillmentKeywords: ['there is none righteous, no, not one'],
    terms: [],
  },
  'gal-3-28': {
    title: 'Neither Jew nor Greek, Bond nor Free, Male nor Female',
    principle:
      'All one in Christ Jesus. First principle: that oneness is baptismal and covenantal. Every believer is one heir, and the old walls came down in the water.',
    sourceKeywords: ['neither Jew nor Greek', 'bond nor free', 'all one in Christ Jesus'],
    fulfillmentKeywords: ['whosoever shall call on the name of the LORD'],
    terms: [],
  },
  'gal-3-29': {
    title: 'If Ye Be Christ\'s, Then Are Ye Abraham\'s Seed',
    principle:
      'Being Christ\'s makes a person an heir of the promise. First principle: the promise about the seed runs through the Seed. To be in Him is to be inside God\'s binding promise to Abraham. The land promised to Abraham is the world the heirs receive.',
    sourceKeywords: ['if ye be Christ\'s', 'Abraham\'s seed', 'heirs according to the promise'],
    fulfillmentKeywords: ['in thy seed shall all nations be blessed'],
    terms: [],
  },
  'gal-4-5': {
    title: 'To Redeem Them That Were under the Law',
    principle:
      'God sent His Son in the fullness of time to buy freedom for those under the law. First principle: adoption is the purchase. To be bought out of the law\'s reach is the door to crying, Abba, Father.',
    sourceKeywords: ['To redeem them that were under the law', 'that we might receive the adoption of sons'],
    fulfillmentKeywords: ['he shall justify many', 'I have called thee by thy name; thou art mine'],
    terms: [],
  },
  'gal-4-22': {
    title: 'Abraham Had Two Sons',
    principle:
      'One by a bondmaid and one by a freewoman: here the two-covenant picture begins. First principle: the two sons stand for two covenants, and the birth of each son decides which household he belongs to.',
    sourceKeywords: ['Abraham had two sons', 'one by a bondmaid', 'the other by a freewoman'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'gal-4-27': {
    title: 'Rejoice, Thou Barren That Bearest Not',
    principle:
      'Isaiah 54 is quoted here for the freewoman\'s many children. First principle: Jerusalem above is desolate and has more children than the enslaved city. Grace\'s family outgrows the family of the flesh.',
    sourceKeywords: ['Rejoice, thou barren that bearest not', 'the desolate hath many more children'],
    fulfillmentKeywords: ['Sing, O barren, thou that didst not bear'],
    terms: [],
  },
  'gal-4-30': {
    title: 'Cast Out the Bondwoman and Her Son',
    principle:
      'Sarah\'s demand becomes Scripture\'s verdict: the bondman shall not inherit. First principle: the son born of law and the son born of promise cannot inherit together. God\'s word fences the household of faith, not sentiment.',
    sourceKeywords: ['Cast out the bondwoman and her son', 'shall not be heir with the son of the freewoman'],
    fulfillmentKeywords: ['cast out this bondwoman and her son'],
    terms: [],
  },
  'gal-6-2': {
    title: 'Bear Ye One Another\'s Burdens',
    principle:
      'Christians who carry each other\'s loads fulfil the law of Christ. First principle: the new law has a new verb, and that verb is bear. When the strong carry the fallen, Christ\'s own love keeps carrying its load.',
    sourceKeywords: ['Bear ye one another\'s burdens', 'fulfil the law of Christ'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'gal-6-16': {
    title: 'Peace on Them, and upon the Israel of God',
    principle:
      'The rule of the new creation carries peace and mercy to the true Israel. First principle: the Israel of God are those who walk in the new creation. Mercy is asked for a people the cross defines, not the flesh.',
    sourceKeywords: ['walk according to this rule', 'peace be on them', 'upon the Israel of God'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Ephesians ───────────────────────────────────
  'eph-1-4': {
    title: 'Chosen in Him Before the Foundation of the World',
    principle:
      'God chose us in Christ, and he chose us to be holy in love. First principle: God made that choice before he made the world. Its purpose is character, not selection. He means us to stand holy and blameless before him.',
    sourceKeywords: ['chosen us in him', 'before the foundation of the world', 'holy and without blame'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'eph-1-7': {
    title: 'In Whom We Have Redemption Through His Blood',
    principle:
      'God forgives us according to the riches of his grace. First principle: redemption is something we hold now. The blood-price was paid once, and the forgiveness it bought is ours today rather than a hope for later.',
    sourceKeywords: ['redemption through his blood', 'the forgiveness of sins', 'riches of his grace'],
    fulfillmentKeywords: ['he was wounded for our transgressions', 'every one that thirsteth, come'],
    terms: [],
  },
  'eph-1-10': {
    title: 'He Might Gather Together in One All Things in Christ',
    principle:
      'The fullness of times gathers heaven and earth under one Head. First principle: history has a plan to unite everything, and God\'s plan is not an idea. All things, in heaven and on earth, are gathered up in Christ.',
    sourceKeywords: ['dispensation of the fulness of times', 'gather together in one all things in Christ', 'which are in heaven, and which are on earth'],
    fulfillmentKeywords: ['the government shall be upon his shoulder', 'shall never be destroyed'],
    terms: [],
  },
  'eph-1-21': {
    title: 'Far above All Principality, and Power',
    principle:
      'Every power that has a name, in this age and the next, sits beneath the seated Christ. First principle: that list of powers leaves nothing out. The name above every name outranks every throne that rulers and spirits can produce.',
    sourceKeywords: ['Far above all principality', 'every name that is named', 'in that which is to come'],
    fulfillmentKeywords: ['I will make him my firstborn, higher than the kings'],
    terms: [],
  },
  'eph-1-22': {
    title: 'Hath Put All Things under His Feet, Head over All to the Church',
    principle:
      'Psalm 8\'s footstool is given as authority over the body. First principle: the subjection of the universe has a home address. The Head who fills all things uses that authority first for his church.',
    sourceKeywords: ['all things under his feet', 'the head over all things to the church'],
    fulfillmentKeywords: ['madest him to have dominion', 'all things under his feet'],
    terms: [],
  },
  'eph-2-8': {
    title: 'By Grace Are Ye Saved Through Faith',
    principle:
      'Salvation is a gift and not a wage. God does not save anyone by works. First principle: grace works through faith and shuts boasting out at the root. The chain runs from God\'s mercy, to faith\'s open hand, to God\'s gift. Jonah\'s fish-story agrees: salvation is of the LORD.',
    sourceKeywords: ['by grace are ye saved through faith', 'not of yourselves', 'the gift of God'],
    fulfillmentKeywords: ['Salvation is of the LORD'],
    terms: [],
  },
  'eph-2-13': {
    title: 'Ye Who Sometimes Were Far Off Are Made Nigh by the Blood',
    principle:
      'The blood of Christ closes the distance, and geography never could. First principle: the Gentiles who were far off are brought near. Isaiah\'s peace for those far off and those near is preached by the Peacemaker himself.',
    sourceKeywords: ['sometimes were far off', 'made nigh by the blood of Christ'],
    fulfillmentKeywords: ['Peace, peace to him that is far off, and to him that is near'],
    terms: [],
  },
  'eph-2-14': {
    title: 'He Is Our Peace, Who Hath Made Both One',
    principle:
      'The middle wall of partition is broken down. First principle: Christ does not merely make peace between Jew and Gentile. He himself is our peace. He broke down the dividing wall in his own body.',
    sourceKeywords: ['He is our peace', 'made both one', 'broken down the middle wall of partition'],
    fulfillmentKeywords: ['The Prince of Peace'],
    terms: [],
  },
  'eph-2-17': {
    title: 'Came and Preached Peace to You Which Were Far Off',
    principle:
      'The exalted Christ preaches through the men he sends, and he reaches the far and the near in one sentence. First principle: Isaiah\'s messengers ran with peace. The Lord of those messengers delivers it himself through them.',
    sourceKeywords: ['preached peace', 'far off', 'them that were nigh'],
    fulfillmentKeywords: ['How beautiful... the feet of him that bringeth good tidings'],
    terms: [],
  },
  'eph-4-8': {
    title: 'When He Ascended up on High, He Led Captivity Captive',
    principle:
      'Psalm 68\'s victory parade becomes the ascension that gives gifts. First principle: the Conqueror shares what he took. Apostles, prophets, evangelists, pastors and teachers are the gifts he gave.',
    sourceKeywords: ['ascended up on high', 'led captivity captive', 'gave gifts unto men'],
    fulfillmentKeywords: ['thou hast ascended on high', 'received gifts for men'],
    terms: [],
  },
  'eph-4-9': {
    title: 'That He Also Descended First into the Lower Parts',
    principle:
      'Ascension implies a prior descent. First principle: the ascent to the throne required the descent to the lower earth. With that argument the psalm holds the incarnation and the grave together in one picture.',
    sourceKeywords: ['Now that he ascended', 'he also descended first', 'the lower parts of the earth'],
    fulfillmentKeywords: ['thou hast ascended on high'],
    terms: [],
  },
  'eph-4-25': {
    title: 'Speak Every Man Truth with His Neighbour',
    principle:
      'Lying is put off because members belong to one another. First principle: Zechariah\'s peace through true speaking is shared life, and truth is what holds the body\'s joints together.',
    sourceKeywords: ['putting away lying', 'speak every man truth with his neighbour', 'members one of another'],
    fulfillmentKeywords: ['speak ye every man the truth to his neighbour'],
    terms: [],
  },
  'eph-4-26': {
    title: 'Be Ye Angry, and Sin Not',
    principle:
      'Psalm 4\'s evening rule for anger: felt, limited, sun-set. First principle: anger itself is permitted, but it may not stay overnight. Do not give the devil a furnished room.',
    sourceKeywords: ['Be ye angry, and sin not', 'let not the sun go down upon your wrath'],
    fulfillmentKeywords: ['stand in awe, and sin not', 'commune with your own heart upon your bed'],
    terms: [],
  },
  'eph-5-2': {
    title: 'An Offering and a Sacrifice to God for a Sweetsmelling Savour',
    principle:
      'Walk in love, as Christ gave himself for us. First principle: Paul applies the Levitical sweet-savour vocabulary to the cross. Self-giving love is the smell God loves.',
    sourceKeywords: ['walk in love', 'given himself for us', 'a sweetsmelling savour'],
    fulfillmentKeywords: ['a sweet savour unto the LORD'],
    terms: [],
  },
  'eph-5-27': {
    title: 'A Glorious Church, Not Having Spot or Wrinkle',
    principle:
      'The goal set before Christ is a church that is holy and without blemish. First principle: the church\'s final form is ceremonial perfection. Psalm 45\'s bridal radiance is granted, not grown.',
    sourceKeywords: ['a glorious church', 'not having spot, or wrinkle', 'holy and without blemish'],
    fulfillmentKeywords: ['the king\'s daughter is all glorious within'],
    terms: [],
  },
  'eph-5-31': {
    title: 'They Two Shall Be One Flesh',
    principle:
      'Genesis 2:24 is quoted in the marriage section. First principle: God made marriage a living picture. He made it his chosen picture of Christ and the church, and he means every husband and wife to show it.',
    sourceKeywords: ['leave his father and mother', 'joined unto his wife', 'one flesh'],
    fulfillmentKeywords: ['they shall be one flesh'],
    terms: [],
  },
  'eph-5-32': {
    title: 'I Speak Concerning Christ and the Church',
    principle:
      'The mystery is named here: marriage was prophecy. First principle: Hosea\'s God who betroths his bride, Isaiah\'s Maker-Husband, and Genesis\'s one flesh all aimed at this. They all pointed to Christ and his church.',
    sourceKeywords: ['This is a great mystery', 'concerning Christ and the church'],
    fulfillmentKeywords: ['I will betroth thee unto me for ever'],
    terms: [],
  },
  'eph-6-10': {
    title: 'Be Strong in the Lord, and in the Power of His Might',
    principle:
      'The armor section opens with borrowed strength. First principle: the church\'s strength is received from the Lord, not mustered. God\'s own strength is what we put on, and our own is not enough.',
    sourceKeywords: ['be strong in the Lord', 'the power of his might'],
    fulfillmentKeywords: ['be ye strong', 'the strength of the LORD'],
    terms: [],
  },
  'eph-6-14': {
    title: 'Having Your Loins Girt about with Truth',
    principle:
      'The first piece of armor is a belt of truth, with the breastplate of righteousness over it. First principle: Isaiah 59 shows the divine Warrior dressing for war. The church borrows his wardrobe, and truth and righteousness are its defensive gear.',
    sourceKeywords: ['loins girt about with truth', 'breastplate of righteousness'],
    fulfillmentKeywords: ['righteousness as the breastplate', 'faithfulness the girdle of his loins'],
    terms: [],
  },
  'eph-6-17': {
    title: 'The Sword of the Spirit, Which Is the Word of God',
    principle:
      'Helmet of salvation, sword of the Spirit. First principle: the Spirit\'s sword is the spoken Word. Isaiah\'s mouth-sword and Isaiah\'s helmet are handed to the believer.',
    sourceKeywords: ['helmet of salvation', 'the sword of the Spirit', 'the word of God'],
    fulfillmentKeywords: ['the word of the LORD is quick, and powerful', 'salvation for an helmet'],
    terms: [],
  },

  // ── Hand-written expansion: Philippians ─────────────────────────────────
  'php-1-19': {
    title: 'The Supply of the Spirit of Jesus Christ',
    principle:
      'Paul\'s imprisonment turns out for salvation through prayer and the Spirit\'s supply. First principle: Job\'s hope was this, I know I shall be justified, and it is Paul\'s hope in prison too. The Spirit\'s supply is how the deliverance comes.',
    sourceKeywords: ['this shall turn to my salvation', 'through your prayer', 'the supply of the Spirit'],
    fulfillmentKeywords: ['he also shall be my salvation', 'I shall not be moved'],
    terms: [],
  },
  'php-2-7': {
    title: 'Made Himself of No Reputation',
    principle:
      'He took the form of a servant and the likeness of men. First principle: he emptied himself by choice and went down. Isaiah\'s Servant had no form nor comeliness, and the Servant had nowhere to lay his head. Both are pressed into this one self-emptying.',
    sourceKeywords: ['made himself of no reputation', 'the form of a servant', 'the likeness of men'],
    fulfillmentKeywords: ['he hath no form nor comeliness', 'the foxes have holes'],
    terms: [],
  },
  'php-2-9': {
    title: 'Wherefore God Also Hath Highly Exalted Him',
    principle:
      'The name above every name is given after the obedience unto death. First principle: Isaiah 52 promises that the Servant will be exalted, and Psalm 2 gives the decree. Both meet in Paul\'s word wherefore. Exaltation is the Father\'s verdict on the cross.',
    sourceKeywords: ['God also hath highly exalted him', 'a name which is above every name'],
    fulfillmentKeywords: ['he shall be exalted and extolled, and be very high'],
    terms: [],
  },
  'php-2-11': {
    title: 'Every Tongue Should Confess That Jesus Christ Is Lord',
    principle:
      'Every tongue will confess to the glory of the Father. First principle: Isaiah 45\'s oath, that every tongue will swear, is handed to Jesus. Lord is the covenant name, and it is confessed in the covenant oath.',
    sourceKeywords: ['every tongue should confess', 'Jesus Christ is Lord', 'to the glory of God the Father'],
    fulfillmentKeywords: ['unto me every knee shall bow, every tongue shall swear'],
    terms: [],
  },
  'php-2-15': {
    title: 'Ye Shine as Lights in the World',
    principle:
      'Blameless sons of God in a crooked nation. First principle: Deuteronomy 32\'s crooked generation and Daniel 12\'s shining wise meet in this verse. The church is the faithful few who carry light in the middle of the perversity.',
    sourceKeywords: ['blameless and harmless', 'a crooked and perverse nation', 'shine as lights in the world'],
    fulfillmentKeywords: ['they that be wise shall shine as the brightness'],
    terms: [],
  },
  'php-3-3': {
    title: 'We Are the Circumcision, Which Worship God in the Spirit',
    principle:
      'True circumcision is worship in the Spirit, rejoicing in Christ, and no confidence in the flesh. First principle: Deuteronomy\'s call to circumcise the heart describes the true cut. Worship in the spirit is the real mark of God\'s binding promise.',
    sourceKeywords: ['we are the circumcision', 'worship God in the spirit', 'no confidence in the flesh'],
    fulfillmentKeywords: ['circumcise the foreskin of your heart'],
    terms: [],
  },
  'php-3-9': {
    title: 'Not Having Mine Own Righteousness, Which Is of the Law',
    principle:
      'Righteousness through the faith of Christ, by God. First principle: a person cannot hold both kinds of righteousness at once. Isaiah\'s robe is given where law-currency is refused, and Paul counts his whole pedigree as loss so that he may have the robe.',
    sourceKeywords: ['mine own righteousness', 'of the law', 'the righteousness which is of God by faith'],
    fulfillmentKeywords: ['he hath clothed me with the garments of salvation'],
    terms: [],
  },
  'php-3-20': {
    title: 'Our Conversation Is in Heaven; from Whence We Look for the Saviour',
    principle:
      'Our citizenship is in heaven, and we await a Savior. First principle: the colony waits for the Emperor. The Savior from heaven is the coming Lord, and that waiting is part of who we are.',
    sourceKeywords: ['our conversation is in heaven', 'from whence also we look for the Saviour'],
    fulfillmentKeywords: ['This same Jesus shall so come in like manner'],
    terms: [],
  },
  'php-3-21': {
    title: 'Who Shall Change Our Vile Body, Like unto His Glorious Body',
    principle:
      'The power that raises us is the power that rules all things. First principle: God shapes our resurrection bodies like Christ\'s own. The power that enthroned him is aimed at our dust.',
    sourceKeywords: ['change our vile body', 'fashioned like unto his glorious body', 'subdue all things unto himself'],
    fulfillmentKeywords: ['fashioned like unto him'],
    terms: [],
  },
  'php-4-7': {
    title: 'The Peace of God, Which Passeth All Understanding',
    principle:
      'Prayer and the peace of God stand guard over heart and mind in Christ. First principle: that guard is peace on sentry duty. Isaiah\'s mind kept in perfect peace stands armed at the door of anxiety.',
    sourceKeywords: ['the peace of God', 'passeth all understanding', 'keep your hearts and minds'],
    fulfillmentKeywords: ['thou wilt keep him in perfect peace, whose mind is stayed on thee'],
    terms: [],
  },
  'php-4-18': {
    title: 'An Odour of a Sweet Smell, a Sacrifice Acceptable',
    principle:
      'The Philippians\' gift is incense on the altar. First principle: giving is sacrifice. At the altar the smell of a gift mattered, and the same words apply to the wallet. Gifts that please God smell like the altar.',
    sourceKeywords: ['an odour of a sweet smell', 'a sacrifice acceptable', 'wellpleasing to God'],
    fulfillmentKeywords: ['a sweet savour unto the LORD'],
    terms: [],
  },
  'php-4-19': {
    title: 'My God Shall Supply All Your Need',
    principle:
      'God will meet all the needs of the givers out of his riches in glory in Christ Jesus. First principle: the supply follows the sacrifice. The Shepherd-psalm\'s I shall not want becomes the apostolic promise to a generous church.',
    sourceKeywords: ['my God shall supply all your need', 'according to his riches in glory by Christ Jesus'],
    fulfillmentKeywords: ['I shall not want'],
    terms: [],
  },

  // ── Hand-written expansion: Colossians ──────────────────────────────────
  'col-1-13': {
    title: 'Delivered from the Power of Darkness, Translated into the Kingdom',
    principle:
      'God rescued us and carried us into the kingdom of the dear Son. First principle: when a person turns to Christ, he changes kingdoms. The authority of darkness ends where the Son\'s kingdom begins.',
    sourceKeywords: ['delivered us from the power of darkness', 'translated us into the kingdom of his dear Son'],
    fulfillmentKeywords: ['delivered thee from the power of darkness', 'to open their eyes'],
    terms: [],
  },
  'col-1-17': {
    title: 'He Is Before All Things, and by Him All Things Consist',
    principle:
      'The Son existed before everything, and he holds everything together. First principle: what keeps the universe steady is a person, not a force. Every atom stays in place because the Word keeps working. This is the Wisdom that Proverbs 8 names.',
    sourceKeywords: ['He is before all things', 'by him all things consist'],
    fulfillmentKeywords: ['The LORD possessed me in the beginning of his way'],
    terms: [],
  },
  'col-1-18': {
    title: 'He Is the Head of the Body, the Firstborn from the Dead',
    principle:
      'Beginning and firstborn, so that in all things He has preeminence. That means Christ holds first place in everything. First principle: headship and the first resurrection meet in him. The church\'s Head is death\'s Firstborn. Preeminence is his in everything.',
    sourceKeywords: ['the head of the body, the church', 'the firstborn from the dead', 'the preeminence'],
    fulfillmentKeywords: ['the firstborn of every creature', 'the first that should rise from the dead'],
    terms: [],
  },
  'col-1-20': {
    title: 'Having Made Peace Through the Blood of His Cross',
    principle:
      'God brings everything back to himself, both in heaven and on earth. First principle: the peace Jesus bought on the cross reaches the whole universe. It also reaches one person at a time. The Prince of Peace paid for the reconciliation his name promised.',
    sourceKeywords: ['made peace through the blood of his cross', 'reconcile all things unto himself', 'things in earth, or things in heaven'],
    fulfillmentKeywords: ['Prince of Peace', 'He is our peace'],
    terms: [],
  },
  'col-1-26': {
    title: 'The Mystery Hid from Ages, Now Made Manifest',
    principle:
      'What was hidden is now shown to God\'s people. First principle: Romans 16 and Colossians 1 open the same sealed book. The mystery is God\'s plan to live inside Christ\'s people, and God timed its revealing for the age of the apostles.',
    sourceKeywords: ['the mystery which hath been hid from ages', 'made manifest to his saints'],
    fulfillmentKeywords: ['the revelation of the mystery, which was kept secret'],
    terms: [],
  },
  'col-1-27': {
    title: 'Christ in You, the Hope of Glory',
    principle:
      'This rich and glorious mystery is for the Gentiles. First principle: the hope is not only that Christ will come back. It is that Christ now lives inside a person. Immanuel — God with us — is at work among the nations.',
    sourceKeywords: ['the riches of the glory of this mystery', 'among the Gentiles', 'Christ in you, the hope of glory'],
    fulfillmentKeywords: ['they shall call his name Immanuel... God with us'],
    terms: [],
  },
  'col-2-3': {
    title: 'In Whom Are Hid All the Treasures of Wisdom and Knowledge',
    principle:
      'The treasure vault is a person, not a place. First principle: Proverbs\' cry for wisdom and Isaiah\'s Spirit of wisdom both find their treasure in Christ. Real knowledge is hidden in him, not in human systems.',
    sourceKeywords: ['hid all the treasures', 'wisdom and knowledge'],
    fulfillmentKeywords: ['the spirit of wisdom and understanding', 'the LORD giveth wisdom'],
    terms: [],
  },
  'col-2-9': {
    title: 'In Him Dwelleth All the Fulness of the Godhead Bodily',
    principle:
      'The whole fullness of God lives in a body. First principle: Isaiah\'s Mighty God and John\'s Word-made-flesh meet here. Christ is fully God in a real human body, not a picture or a symbol. The incarnation — God coming in human flesh — answers the charge that God is unjust and shows us who God is.',
    sourceKeywords: ['all the fulness of the Godhead', 'bodily'],
    fulfillmentKeywords: ['Unto us a child is born... The mighty God', 'the Word was made flesh'],
    terms: [],
  },
  'col-2-11': {
    title: 'Circumcised with the Circumcision Made Without Hands',
    principle:
      'The putting off of the body of sins by Christ\'s circumcision. Christ\'s circumcision strips the body of sins away. First principle: Deuteronomy told Israel to circumcise their hearts. God does that work without hands. Cutting away flesh pictures the removal of sin.',
    sourceKeywords: ['circumcision made without hands', 'putting off the body of the sins', 'the circumcision of Christ'],
    fulfillmentKeywords: ['circumcise the foreskin of thy heart'],
    terms: [],
  },
  'col-2-12': {
    title: 'Buried with Him in Baptism, Wherein Also Ye Are Risen',
    principle:
      'Baptism joins a believer to the burial and the rising. That joining happens through faith in God\'s operation, which is God raising Jesus from the dead. First principle: baptism acts out the gospel in order. We are buried with Christ, and we are raised with Christ. The power is God\'s, and the faith is ours.',
    sourceKeywords: ['buried with him in baptism', 'ye are risen with him', 'the operation of God, who hath raised him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'col-2-14': {
    title: 'Blotting Out the Handwriting of Ordinances, Nailing It to His Cross',
    principle:
      'The record that stood against us is wiped out and nailed to the cross as cancelled. First principle: the debt document was destroyed where the payment was made. Isaiah\'s blotting out and David\'s blessed covering both happened at Golgotha.',
    sourceKeywords: ['Blotting out the handwriting of ordinances', 'which was contrary to us', 'nailing it to his cross'],
    fulfillmentKeywords: ['blotteth out thy transgressions', 'Blessed is he whose transgression is covered'],
    terms: [],
  },
  'col-2-17': {
    title: 'Which Are a Shadow of Things to Come; the Body Is of Christ',
    principle:
      'Shadows precede substance. First principle: the temple service that pointed to him was a silhouette. Hebrews uses the same shadow language, and the tabernacle pattern finds its body in Christ.',
    sourceKeywords: ['a shadow of things to come', 'the body is of Christ'],
    fulfillmentKeywords: ['who serve unto the example and shadow of heavenly things'],
    terms: [],
  },
  'col-3-1': {
    title: 'If Ye Then Be Risen with Christ, Seek Those Things Which Are Above',
    principle:
      'The life raised with Christ looks for Christ where he sits. First principle: Jesus\' return to heaven sets the church\'s direction. Psalm 110 puts Christ at God\'s right hand. That is where a believer\'s heart belongs.',
    sourceKeywords: ['risen with Christ', 'seek those things which are above', 'where Christ sitteth on the right hand of God'],
    fulfillmentKeywords: ['Sit thou at my right hand'],
    terms: [],
  },
  'col-3-4': {
    title: 'When Christ, Who Is Our Life, Shall Appear',
    principle:
      'When Christ appears, the hidden life is revealed. The saints appear with Him in glory. First principle: because Christ is our life, his appearing is ours too. What was hidden with Christ then becomes visible glory.',
    sourceKeywords: ['Christ, who is our life', 'shall appear', 'appear with him in glory'],
    fulfillmentKeywords: ['we shall be like him; for we shall see him as he is'],
    terms: [],
  },
  'col-3-11': {
    title: 'Neither Greek nor Jew... but Christ Is All, and in All',
    principle:
      'Barbarian and Scythian disappear in the new man. First principle: the oneness Galatians describes reaches the farthest edges of the empire. Christ is the all in all. A person\'s ethnic group does not set his rank.',
    sourceKeywords: ['neither Greek nor Jew', 'Barbarian, Scythian', 'Christ is all, and in all'],
    fulfillmentKeywords: ['there is neither Jew nor Greek'],
    terms: [],
  },
  // ── Hand-written expansion: 1 Thessalonians ─────────────────────────────
  '1th-1-10': {
    title: 'To Wait for His Son from Heaven',
    principle:
      'Those God has delivered wait for the Deliverer from the wrath to come. First principle: waiting is what a person who has turned to God does. The risen Jesus in heaven is both the rescuer and the one they are waiting for.',
    sourceKeywords: ['wait for his Son from heaven', 'delivered us from the wrath to come'],
    fulfillmentKeywords: ['one like the Son of man came with the clouds'],
    terms: [],
  },
  '1th-2-19': {
    title: 'What Is Our Hope, or Joy, or Crown of Rejoicing?',
    principle:
      'The people Paul brought to Christ are his crown at the coming. First principle: the reward of ministry is people standing before the Lord. Paul\'s crown is the soul-winners Daniel described as shining.',
    sourceKeywords: ['hope, or joy, or crown of rejoicing', 'in the presence of our Lord Jesus Christ at his coming'],
    fulfillmentKeywords: ['they that turn many to righteousness as the stars'],
    terms: [],
  },
  '1th-3-13': {
    title: 'At the Coming of Our Lord with All His Saints',
    principle:
      'Hearts established unblameable in holiness for the day of saints\' company. God makes a heart steady and blameless. He does this so it is ready for the day when all his saints gather. First principle: holiness has a deadline and a procession. Christ comes with all his saints, and hearts are readied now.',
    sourceKeywords: ['stablish your hearts unblameable in holiness', 'the coming of our Lord Jesus Christ', 'with all his saints'],
    fulfillmentKeywords: ['the LORD my God shall come, and all the saints with thee'],
    terms: [],
  },
  '1th-4-13': {
    title: 'That Ye Sorrow Not, Even as Others Which Have No Hope',
    principle:
      'Believers who have fallen asleep in death are not lost. First principle: the resurrection puts a limit on Christian grief. Not knowing is what makes the sorrow sharp, and the word of the Lord is the cure.',
    sourceKeywords: ['concerning them which are asleep', 'sorrow not', 'others which have no hope'],
    fulfillmentKeywords: ['I am the resurrection, and the life'],
    terms: [],
  },
  '1th-4-14': {
    title: 'Them Also Which Sleep in Jesus Will God Bring with Him',
    principle:
      'Jesus died and rose again. That fact guarantees that God will bring with him those who sleep in Jesus. First principle: the sleeping saints are with Jesus now, and they return with him. The same belief that saved them escorts them back.',
    sourceKeywords: ['Jesus died and rose again', 'them also which sleep in Jesus', 'God bring with him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1th-4-15': {
    title: 'We Which Are Alive... Shall Not Prevent Them Which Are Asleep',
    principle:
      'By the word of the Lord: the living do not arrive ahead of the dead. Here \'prevent\' means come before, not stop. First principle: the resurrection keeps an order. The dead rise first. Then the living are caught up.',
    sourceKeywords: ['by the word of the Lord', 'alive and remain', 'shall not prevent them which are asleep'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1th-5-2': {
    title: 'The Day of the Lord Cometh as a Thief in the Night',
    principle:
      'The apostles all say it will be sudden. First principle: the day comes like a thief to those who are not watching. The world is caught by surprise. The sons of light know the schedule.',
    sourceKeywords: ['the day of the Lord so cometh as a thief in the night'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1th-5-3': {
    title: 'When They Shall Say, Peace and Safety',
    principle:
      'The cry of peace comes first. Then the labor pains arrive, and no one escapes them. First principle: the world\'s slogan is the signal. Destruction arrives in the vocabulary of security. Isaiah\'s picture of birth pains warned of this.',
    sourceKeywords: ['Peace and safety', 'sudden destruction cometh', 'as travail upon a woman with child'],
    fulfillmentKeywords: ['they shall be afraid: pangs and sorrows shall take hold of them'],
    terms: [],
  },
  '1th-5-23': {
    title: 'Your Whole Spirit and Soul and Body Preserved',
    principle:
      'Wholly sanctified, preserved blameless unto the coming. God makes the whole person holy, and he keeps that person blameless until Christ comes. First principle: this work covers spirit, soul, and body. It is tied to a date. The faithful God who called his people keeps them until the coming.',
    sourceKeywords: ['sanctify you wholly', 'spirit and soul and body', 'blameless unto the coming'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 2 Thessalonians ─────────────────────────────
  '2th-1-7': {
    title: 'Rest with Us, When the Lord Jesus Shall Be Revealed',
    principle:
      'Believers who are troubled receive rest when the Lord Jesus is revealed from heaven. First principle: the rest is timed to that revealing. Relief for the troubled arrives with the display of mighty angels.',
    sourceKeywords: ['rest with us', 'the Lord Jesus shall be revealed', 'with his mighty angels'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2th-1-8': {
    title: 'In Flaming Fire Taking Vengeance',
    principle:
      'When the Lord is revealed, he brings fiery vengeance on those who do not know God and do not obey the gospel. First principle: the sword from the mouth in Isaiah 11 and the flaming judgment belong to the same returning Lord who saved.',
    sourceKeywords: ['In flaming fire', 'taking vengeance', 'obey not the gospel'],
    fulfillmentKeywords: ['with the breath of his lips shall he slay the wicked'],
    terms: [],
  },
  '2th-1-10': {
    title: 'When He Shall Come to Be Glorified in His Saints',
    principle:
      'This is the day when Christ is admired in those who believe. First principle: at the coming, Christ\'s glory is displayed in the saints he has glorified. The testimony they believed becomes visible admiration.',
    sourceKeywords: ['glorified in his saints', 'admired in all them that believe', 'in that day'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2th-2-3': {
    title: 'That Day Shall Not Come, Except There Come a Falling Away First',
    principle:
      'The falling away and the man of sin come before the Day of the Lord. First principle: the end follows an order. The falling away comes first, and then the lawless one is revealed. Daniel 7\'s little power and Jesus\' warnings about deception meet here.',
    sourceKeywords: ['a falling away first', 'that man of sin be revealed', 'the son of perdition'],
    fulfillmentKeywords: ['he shall speak great words against the most High'],
    terms: [],
  },
  '2th-2-4': {
    title: 'He as God Sitteth in the Temple of God',
    principle:
      'The man of sin puts himself on display in the temple and claims to be God. First principle: Daniel 11\'s exalting king and Ezekiel\'s prince-tyrant are the family line of this seated blasphemy. The abomination takes a chair.',
    sourceKeywords: ['opposeth and exalteth himself', 'sitteth in the temple of God', 'shewing himself that he is God'],
    fulfillmentKeywords: ['he shall exalt himself, and magnify himself above every god'],
    terms: [],
  },
  '2th-2-8': {
    title: 'The Lord Shall Consume Him with the Spirit of His Mouth',
    principle:
      'The Wicked is revealed. The breath of His coming destroys him. First principle: Isaiah 11\'s slaying by the breath of his lips is how the anti-christ meets his end. A word kills the warrior.',
    sourceKeywords: ['that Wicked be revealed', 'consume with the spirit of his mouth', 'the brightness of his coming'],
    fulfillmentKeywords: ['with the breath of his lips shall he slay the wicked'],
    terms: [],
  },
  '2th-2-9': {
    title: 'Whose Coming Is After the Working of Satan',
    principle:
      'The lawless one comes with counterfeit power, signs, and lying wonders. First principle: he makes a copy of Pentecost. He shows power and signs, but he has no truth. Jesus warned that great signs would deceive even the elect.',
    sourceKeywords: ['after the working of Satan', 'all power and signs', 'lying wonders'],
    fulfillmentKeywords: ['shall shew great signs and wonders'],
    terms: [],
  },
  '2th-2-11': {
    title: 'God Shall Send Them Strong Delusion',
    principle:
      'God sends a lie as judgment on those who refused the truth. First principle: the delusion is itself the sentence. When a person resists the truth, a lie he believes becomes God\'s judgment on him. Ahab\'s lying spirit was the earlier picture of this.',
    sourceKeywords: ['God shall send them strong delusion', 'that they should believe a lie'],
    fulfillmentKeywords: ['the LORD hath put a lying spirit in the mouth of all these thy prophets'],
    terms: [],
  },
  '2th-3-3': {
    title: 'The Lord Is Faithful, Who Shall Stablish You',
    principle:
      'God establishes you and keeps you from evil, and he does it because he is faithful. First principle: a believer\'s stability does not come from himself. The Faithful One makes him stand and guards him against the evil one.',
    sourceKeywords: ['the Lord is faithful', 'stablish you', 'keep you from evil'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2th-3-17': {
    title: 'The Salutation of Paul with Mine Own Hand',
    principle:
      'Paul writes the greeting with his own hand, and that proves the letter is genuine. First principle: forged letters were a real danger in that age. Proof of the letter\'s authenticity came down to a person. The apostle\'s signature was the church\'s security feature.',
    sourceKeywords: ['The salutation of Paul with mine own hand', 'the token in every epistle'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 1 Timothy ───────────────────────────────────
  '1ti-1-15': {
    title: 'Christ Jesus Came into the World to Save Sinners',
    principle:
      'The faithful saying comes with the chief of sinners as its example. First principle: the mission statement is personal. Christ came to save sinners. The worst sinner saved becomes the pattern for everyone who believes.',
    sourceKeywords: ['Christ Jesus came into the world to save sinners', 'of whom I am chief'],
    fulfillmentKeywords: ['he was numbered with the transgressors', 'the Son of man is come to seek and to save'],
    terms: [],
  },
  '1ti-1-17': {
    title: 'The King Eternal, Immortal, Invisible',
    principle:
      'Paul gives praise to the only wise God. First principle: the King who is invisible and immortal receives honor. The God no man has seen or can see makes Himself known in the visible Son.',
    sourceKeywords: ['King eternal, immortal, invisible', 'the only wise God', 'honour and glory for ever'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ti-2-6': {
    title: 'Who Gave Himself a Ransom for All',
    principle:
      'The ransom testified in due time. First principle: the giving of His life was the price. Isaiah\'s poured-out soul and Mark\'s many are the same ransom. God offers it to everyone. He testified of it at the right time.',
    sourceKeywords: ['gave himself a ransom for all', 'to be testified in due time'],
    fulfillmentKeywords: ['poured out his soul unto death', 'the Son of man came... to give his life a ransom for many'],
    terms: [],
  },
  '1ti-2-7': {
    title: 'I Am Ordained a Preacher, an Apostle, a Teacher of the Gentiles',
    principle:
      'Paul holds a triple office in faith and verity. He is a preacher, an apostle, and a teacher of the Gentiles. First principle: Paul\'s commission is sworn and specific. The Gentile thread runs through the office of apostle itself.',
    sourceKeywords: ['ordained a preacher, and an apostle', 'a teacher of the Gentiles in faith and verity'],
    fulfillmentKeywords: ['he is a chosen vessel unto me, to bear my name before the Gentiles'],
    terms: [],
  },
  '1ti-4-1': {
    title: 'In the Latter Times Some Shall Depart from the Faith',
    principle:
      'The Spirit gives an explicit forecast: seducing spirits and doctrines of devils. First principle: the Spirit told us in advance that people would depart from the faith. He did not cause those departures. The departures were scheduled, and the ways they happen are named.',
    sourceKeywords: ['the Spirit speaketh expressly', 'in the latter times some shall depart', 'doctrines of devils'],
    fulfillmentKeywords: ['many false prophets shall rise, and shall deceive many'],
    terms: [],
  },
  '1ti-4-10': {
    title: 'We Trust in the Living God, Who Is the Saviour of All Men',
    principle:
      'Paul labors and takes reproach because he trusts the living Savior, who is specially the Savior of believers. First principle: the claim that He is the Savior of all men has two sides. He keeps every person alive. He saves those who believe.',
    sourceKeywords: ['we trust in the living God', 'the Saviour of all men', 'specially of those that believe'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ti-6-13': {
    title: 'Before Pontius Pilate Witnessed a Good Confession',
    principle:
      'Paul gives the charge in the sight of the God who gives life and the Christ who confessed. First principle: Christ\'s confession at His trial is the model for this charge. Witness is expected before power, not after God proves His servant right.',
    sourceKeywords: ['who quickeneth all things', 'before Pontius Pilate', 'witnessed a good confession'],
    fulfillmentKeywords: ['To this end was I born... that I should bear witness unto the truth'],
    terms: [],
  },
  '1ti-6-15': {
    title: 'The Blessed and Only Potentate, the King of Kings',
    principle:
      'He shall show the title in His times. First principle: God has set a time to show the title King of kings. Daniel\'s God of gods and Revelation\'s Rider meet on the same throne.',
    sourceKeywords: ['in his times he shall shew', 'the blessed and only Potentate', 'King of kings, and Lord of lords'],
    fulfillmentKeywords: ['KING OF KINGS, AND LORD OF LORDS'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Timothy ───────────────────────────────────
  '2ti-1-9': {
    title: 'Called with an Holy Calling, Given Us in Christ Before the World Began',
    principle:
      'God saved us by His own purpose and grace, not by our works. That grace was given before time began. First principle: God gave us grace in Christ Jesus before the world was made. That grace is the basis of the holy calling we have now. Ephesians 1 and 2 Timothy 1 say the same thing.',
    sourceKeywords: ['called us with an holy calling', 'not according to our works', 'before the world began'],
    fulfillmentKeywords: ['chosen us in him before the foundation of the world'],
    terms: [],
  },
  '2ti-1-10': {
    title: 'Who Hath Abolished Death, and Brought Life and Immortality to Light',
    principle:
      'When the Savior appeared, He showed that death is abolished. First principle: the gospel turns the light on immortality. Isaiah said death would be swallowed up. That death is now abolished. The gospel makes it known.',
    sourceKeywords: ['made manifest by the appearing', 'hath abolished death', 'life and immortality to light through the gospel'],
    fulfillmentKeywords: ['He will swallow up death in victory'],
    terms: [],
  },
  '2ti-1-12': {
    title: 'I Know Whom I Have Believed',
    principle:
      'Paul is persuaded that He can keep the deposit, all that Paul has committed to Him, against that day. First principle: assurance is personal. It rests not on what I believe, but on whom I believe. The Keeper keeps the deposit safe until that Day.',
    sourceKeywords: ['I am not ashamed', 'I know whom I have believed', 'he is able to keep that which I have committed'],
    fulfillmentKeywords: ['I know that my Redeemer liveth'],
    terms: [],
  },
  '2ti-2-8': {
    title: 'Jesus Christ of the Seed of David Was Raised from the Dead',
    principle:
      'Paul\'s gospel in one line: Jesus Christ came from David\'s family line and rose from the dead. First principle: the resurrection proves that the royal line kept its promise. Paul compresses the whole argument of Romans 1 into one line for a suffering missionary.',
    sourceKeywords: ['Jesus Christ of the seed of David', 'was raised from the dead', 'according to my gospel'],
    fulfillmentKeywords: ['I will raise up thy seed after thee', 'Thy seed will I establish for ever'],
    terms: [],
  },
  '2ti-2-12': {
    title: 'If We Suffer, We Shall Also Reign with Him',
    principle:
      'If we suffer with Him, we shall also reign with Him. If we deny Him, He will deny us. First principle: these twin laws match each other. Endurance is the test that opens the way to the throne. Denial comes back on the one who denies, but the faithful Lord stays faithful.',
    sourceKeywords: ['If we suffer, we shall also reign with him', 'if we deny him', 'he also will deny us'],
    fulfillmentKeywords: ['To him that overcometh will I grant to sit with me in my throne'],
    terms: [],
  },
  '2ti-2-19': {
    title: 'The Foundation of God Standeth Sure, Having This Seal',
    principle:
      'God\'s foundation carries a double seal. The Lord knows His own. Everyone who names the name departs from iniquity. First principle: being chosen by God and living a holy life are sealed together. God knows His people, and they turn away from sin. Numbers\' rebellion is the backdrop.',
    sourceKeywords: ['the foundation of God standeth sure', 'The Lord knoweth them that are his', 'depart from iniquity'],
    fulfillmentKeywords: ['Declare them apart... that they may be consumed'],
    terms: [],
  },
  '2ti-3-1': {
    title: 'In the Last Days Perilous Times Shall Come',
    principle:
      'The Spirit forecast savage seasons. First principle: Paul lists these perilous times. He does not lament them. Nineteen traits follow. The forecast itself is a comfort: none of this takes God by surprise.',
    sourceKeywords: ['in the last days perilous times shall come'],
    fulfillmentKeywords: ['many false prophets shall rise'],
    terms: [],
  },
  '2ti-3-8': {
    title: 'Now as Jannes and Jambres Withstood Moses',
    principle:
      'The Egyptian magicians were unnamed until Paul named them here. They were counterfeit workers who resisted the truth. First principle: Moses had his magicians, and the last days have theirs. Men with corrupt minds oppose the truth in the same way.',
    sourceKeywords: ['Jannes and Jambres withstood Moses', 'resist the truth', 'reprobate concerning the faith'],
    fulfillmentKeywords: ['the magicians of Egypt did so with their enchantments'],
    terms: [],
  },
  '2ti-3-12': {
    title: 'All That Will Live Godly Shall Suffer Persecution',
    principle:
      'Everyone who wants to live a godly life in Christ Jesus will be persecuted. First principle: persecution is not an exception. It is the promised climate. Jesus told His own that the world hated Him first.',
    sourceKeywords: ['all that will live godly in Christ Jesus', 'shall suffer persecution'],
    fulfillmentKeywords: ['If they have persecuted me, they will also persecute you'],
    terms: [],
  },
  '2ti-3-15': {
    title: 'The Holy Scriptures, Which Are Able to Make Thee Wise unto Salvation',
    principle:
      'Timothy knew the holy Scriptures from childhood. Those Scriptures can lead a person to salvation through faith in Christ Jesus. First principle: the Scriptures are enough to bring you to Christ. The sacred letters point to the faith that saves.',
    sourceKeywords: ['from a child thou hast known the holy scriptures', 'wise unto salvation', 'faith which is in Christ Jesus'],
    fulfillmentKeywords: ['Search the scriptures... they are they which testify of me'],
    terms: [],
  },
  '2ti-4-8': {
    title: 'A Crown of Righteousness Laid Up for Me',
    principle:
      'The righteous Judge gives the crown to all who love His appearing. First principle: the crown is stored up for you. You do not win it. He gives it at that day to everyone who loves His appearing, everywhere.',
    sourceKeywords: ['a crown of righteousness', 'the righteous judge', 'unto all them also that love his appearing'],
    fulfillmentKeywords: ['be thou faithful unto death, and I will give thee a crown of life'],
    terms: [],
  },
  '2ti-4-18': {
    title: 'The Lord Shall Preserve Me unto His Heavenly Kingdom',
    principle:
      'The Lord delivers me from every evil work and brings me safe into His heavenly kingdom. Glory belongs to Him forever. First principle: the final rescue carries us through trouble. It does not take us out of it. The heavenly kingdom is where the delivered arrive.',
    sourceKeywords: ['deliver me from every evil work', 'preserve me unto his heavenly kingdom', 'to whom be glory for ever'],
    fulfillmentKeywords: ['the LORD shall preserve thee from all evil'],
    terms: [],
  },

  // ── Hand-written expansion: Titus ───────────────────────────────────────
  'tit-1-2': {
    title: 'In Hope of Eternal Life, Which God... Promised Before the World Began',
    principle:
      'God, who cannot lie, promised eternal life before time began. First principle: the hope we have is older than the world. The One who made the promise cannot lie. Those two facts never change. The Christian life stands on them.',
    sourceKeywords: ['In hope of eternal life', 'God, that cannot lie', 'promised before the world began'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'tit-1-3': {
    title: 'Hath in Due Times Manifested His Word Through Preaching',
    principle:
      'God promised eternal life before time began. At the right time He showed that word through preaching. First principle: God keeps to His own timetable. The word that was hidden for ages appeared when God commanded it to be preached.',
    sourceKeywords: ['in due times manifested his word through preaching', 'committed unto me', 'the commandment of God our Saviour'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'tit-2-11': {
    title: 'The Grace of God That Bringeth Salvation Hath Appeared',
    principle:
      'Grace appeared to all men, and it teaches. First principle: grace is a teacher. The One who appeared trains us to say no to sin, to live soberly, and to do right. He trains us this way while we wait for the blessed hope.',
    sourceKeywords: ['the grace of God that bringeth salvation', 'hath appeared to all men'],
    fulfillmentKeywords: ['the glory of the LORD shall be revealed, and all flesh shall see it'],
    terms: [],
  },
  'tit-2-14': {
    title: 'Who Gave Himself for Us... a Peculiar People',
    principle:
      'Christ gave Himself to buy us back from all iniquity and to purify a people who are eager to do good. First principle: Jesus\' gift of Himself makes His people clean and makes them His own. Exodus 19 calls Israel God\'s peculiar treasure — His own treasured people — and Isaiah 53 shows the bleeding Servant who bought them back.',
    sourceKeywords: ['gave himself for us', 'redeem us from all iniquity', 'a peculiar people, zealous of good works'],
    fulfillmentKeywords: ['ye shall be a peculiar treasure unto me above all people'],
    terms: [],
  },
  'tit-3-4': {
    title: 'The Kindness and Love of God Our Saviour Toward Man Appeared',
    principle:
      'God\'s kindness appeared. That was the turning point for those who are saved. First principle: salvation begins with God\'s kindness, not with human goodness going first. God saves people not by works, but according to mercy.',
    sourceKeywords: ['the kindness and love of God our Saviour', 'toward man appeared'],
    fulfillmentKeywords: ['God so loved the world, that he gave his only begotten Son'],
    terms: [],
  },
  'tit-3-5': {
    title: 'By the Washing of Regeneration, and Renewing of the Holy Ghost',
    principle:
      'God saved us because of His mercy, not because of works we had done. He saved us through the washing that gives new birth and through the Spirit making us new. First principle: Ezekiel\'s promise of clean water is what drives the new birth. The Spirit washes us, makes us new, and is poured out on us richly.',
    sourceKeywords: ['not by works of righteousness', 'according to his mercy he saved us', 'the washing of regeneration', 'renewing of the Holy Ghost'],
    fulfillmentKeywords: ['Then will I sprinkle clean water upon you', 'a new heart also will I give you'],
    terms: [],
  },
  'tit-3-7': {
    title: 'Being Justified by His Grace, We Should Be Made Heirs',
    principle:
      'God declares guilty people to be in the right by His grace. He makes them heirs. The inheritance we hope for is eternal life. First principle: being put right with God goes with being adopted into His family. The verdict in God\'s court ends in an inheritance.',
    sourceKeywords: ['being justified by his grace', 'made heirs according to the hope of eternal life'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Philemon ────────────────────────────────────
  'phm-1-6': {
    title: 'The Communication of Thy Faith May Become Effectual',
    principle:
      'Your faith becomes effective when you acknowledge every good thing that is in us in Christ. First principle: faith is shared when a person names what is in Christ. That is what gives the sharing its power.',
    sourceKeywords: ['the communication of thy faith', 'effectual', 'every good thing which is in you in Christ Jesus'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-9': {
    title: 'Paul the Aged, and Now Also a Prisoner of Jesus Christ',
    principle:
      'Paul appeals out of love. He writes as an old prisoner. First principle: for love\'s sake he sets his authority aside. The apostle pleads rather than commands, and his chains as a prisoner are the claim he brings.',
    sourceKeywords: ['for love\'s sake I rather beseech thee', 'Paul the aged', 'a prisoner of Jesus Christ'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-10': {
    title: 'I Beseech Thee for My Son Onesimus',
    principle:
      'Paul led the runaway to new birth while he himself was in chains. First principle: God writes conversion stories in prison cells. The man who was useless became useful through the chained apostle.',
    sourceKeywords: ['my son Onesimus', 'whom I have begotten in my bonds'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-15': {
    title: 'He Therefore Departed for a Season',
    principle:
      'Perhaps he departed for a season so that thou shouldest receive him for ever. First principle: God looks at a departure and sees a return. Receiving him for ever changes how you see the season you lost.',
    sourceKeywords: ['perhaps he therefore departed for a season', 'that thou shouldest receive him for ever'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'phm-1-18': {
    title: 'If He Hath Wronged Thee, Put That on Mine Account',
    principle:
      'This is the sentence where Paul puts the debt on his own account. First principle: the whole gospel in one line. The debt is moved to the one who pleads for the debtor. Christ\'s account covers ours. Paul does the same thing here.',
    sourceKeywords: ['If he hath wronged thee', 'put that on mine account'],
    fulfillmentKeywords: ['the LORD hath laid on him the iniquity of us all'],
    terms: [],
  },
  'phm-1-25': {
    title: 'The Grace of Our Lord Jesus Christ Be with Your Spirit',
    principle:
      'The shortest letter closes with a blessing of grace. First principle: what the spirit needs most is grace. Every wrong that is put right begins and ends with grace for the inner person.',
    sourceKeywords: ['The grace of our Lord Jesus Christ', 'be with your spirit'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: James ───────────────────────────────────────
  'jam-1-10': {
    title: 'The Rich Man Passes Away as the Flower of the Grass',
    principle:
      'The brother of low degree glories in exaltation; the rich in humiliation. First principle: Isaiah 40\'s grass-logic levels economics — both brothers glory, but in opposite directions.',
    sourceKeywords: ['the rich, in that he is made low', 'as the flower of the grass he shall pass away'],
    fulfillmentKeywords: ['all flesh is grass, and all the goodliness thereof'],
    terms: [],
  },
  'jam-1-12': {
    title: 'Blessed Is the Man That Endureth Temptation',
    principle:
      'The tried receive the crown of life, promised to lovers of God. First principle: God appointed endurance as the outcome of the trial. Love for God is what moves a person to endure. God has promised the crown, and he will give it.',
    sourceKeywords: ['Blessed is the man that endureth temptation', 'he shall receive the crown of life', 'promised to them that love him'],
    fulfillmentKeywords: ['be thou faithful unto death, and I will give thee a crown of life'],
    terms: [],
  },
  'jam-2-8': {
    title: 'Keep the Royal Law: Love Your Neighbour as Yourself',
    principle:
      'The law from Leviticus is royal in this reading. First principle: the law carries a king\'s command. Loving your neighbour is royal behaviour. Showing partiality breaks the crown-law.',
    sourceKeywords: ['the royal law according to the scripture', 'love thy neighbour as thyself'],
    fulfillmentKeywords: ['thou shalt love thy neighbour as thyself: I am the LORD'],
    terms: [],
  },
  'jam-2-11': {
    title: 'He That Said, Do Not Commit Adultery, Said Also, Do Not Kill',
    principle:
      'The same Speaker spoke both commands, so the law cannot be torn apart. First principle: God gave the whole law, so the law is one piece. Break one point of it, and you have offended the God who gave all of it.',
    sourceKeywords: ['He that said, Do not commit adultery, said also, Do not kill', 'a transgressor of the law'],
    fulfillmentKeywords: ['Thou shalt not kill', 'Thou shalt not commit adultery'],
    terms: [],
  },
  'jam-2-23': {
    title: 'Abraham Believed God... and He Was Called the Friend of God',
    principle:
      'Genesis 15:6 was fulfilled, and the title Friend of God was given. First principle: God counts a person righteous and calls that person a friend, and both happen together. Faith works because it knows God.',
    sourceKeywords: ['the scripture was fulfilled', 'Abraham believed God', 'imputed unto him for righteousness', 'the Friend of God'],
    fulfillmentKeywords: ['he believed in the LORD', 'seest thou how faith wrought with his works'],
    terms: [],
  },
  'jam-4-6': {
    title: 'God Resisteth the Proud, but Giveth Grace unto the Humble',
    principle:
      '"God resisteth the proud, but giveth grace unto the humble." That is grace running downhill — pride pushes it away, and humility receives it. First principle: Proverbs 3 and 1 Peter 5 follow the same pattern.',
    sourceKeywords: ['he giveth more grace', 'God resisteth the proud', 'grace unto the humble'],
    fulfillmentKeywords: ['surely he scorneth the scorners: but he giveth grace unto the lowly'],
    terms: [],
  },
  'jam-5-3': {
    title: 'Your Gold and Silver Is Cankered',
    principle:
      'Wealth heaped up will testify against its owner in the last days. First principle: hoarded treasure is evidence stored up for the prosecution. Rust eats the flesh like fire, and the last days hold their own audit.',
    sourceKeywords: ['gold and silver is cankered', 'the rust... a witness against you', 'heaped treasure for the last days'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jam-5-11': {
    title: 'Ye Have Heard of the Patience of Job',
    principle:
      '"The end of the Lord" was mercy. First principle: we read endurance backward. Job\'s end doubled what he owned, and the Lord\'s tender mercy shows in how the story finished.',
    sourceKeywords: ['the patience of Job', 'the end of the Lord', 'very pitiful, and of tender mercy'],
    fulfillmentKeywords: ['the LORD gave, and the LORD hath taken away'],
    terms: [],
  },
  'jam-5-17': {
    title: 'Elias Was a Man Subject to Like Passions as We Are',
    principle:
      'Elijah prayed, and the sky closed for three and a half years. Then he prayed again, and rain fell on the earth. He was a man of like passions as we are. He was not different from us by nature. He was different in his praying. First principle: passionate men pray powerful prayers.',
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
    title: 'We Have the Word of Prophecy Made More Sure',
    principle:
      'The word of prophecy is the lamp that burns in the dark place until the Day dawns. First principle: the glory on the mount confirms the written word. The day-star is the goal, and the lamp serves until morning comes.',
    sourceKeywords: ['a more sure word of prophecy', 'a light that shineth in a dark place', 'until the day dawn'],
    fulfillmentKeywords: ['there shall come a Star out of Jacob'],
    terms: [],
  },
  '2pe-1-21': {
    title: 'Holy Men of God Spake as They Were Moved by the Holy Ghost',
    principle:
      '"holy men of God spake as they were moved by the Holy Ghost." First principle: God\'s Spirit moved the writers, so what they spoke came from God and not from a man\'s own will. The wind of God filled the sails of the writers.',
    sourceKeywords: ['the prophecy came not in old time by the will of man', 'holy men of God spake', 'moved by the Holy Ghost'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2pe-2-6': {
    title: 'Turning the Cities of Sodom and Gomorrha into Ashes',
    principle:
      '"And turning the cities of Sodom and Gomorrha into ashes condemned them with an overthrow, making them an ensample unto those that after should live ungodly." First principle: God made Sodom the standing example of the judgment that is coming. The burnt cities still warn every later generation. They show that the Lord knows how to rescue his people and how to hold the wicked for judgment.',
    sourceKeywords: ['Sodom and Gomorrha into ashes', 'condemned them with an overthrow', 'an ensample'],
    fulfillmentKeywords: ['the LORD rained upon Sodom and upon Gomorrah brimstone and fire'],
    terms: [],
  },
  '2pe-2-22': {
    title: 'The Dog Is Turned to His Own Vomit Again',
    principle:
      'The true proverb shows how the false teachers fell back into their old ways. First principle: a nature that has not changed will go back to what it was. Washing the outside of a sow does not make it a new creature.',
    sourceKeywords: ['The dog is turned to his own vomit', 'the sow that was washed to her wallowing'],
    fulfillmentKeywords: ['As a dog returneth to his vomit'],
    terms: [],
  },
  '2pe-3-8': {
    title: 'One Day Is with the Lord as a Thousand Years',
    principle:
      'Peter corrects the people he loves about how God counts time. First principle: God does not keep time the way we do. One day with the Lord can be a thousand years, and a thousand years can be one day, so no clock can measure whether he is late.',
    sourceKeywords: ['one day is with the Lord as a thousand years', 'a thousand years as one day'],
    fulfillmentKeywords: ['a thousand years in thy sight are but as yesterday'],
    terms: [],
  },
  '2pe-3-10': {
    title: 'The Day of the Lord Will Come as a Thief',
    principle:
      '"But the day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat, the earth also and the works that are therein shall be burned up." First principle: the Day of the Lord comes suddenly, like a thief, and God remakes the whole creation. Fire burns up everything in it, and God\'s promise is a new earth.',
    sourceKeywords: ['the day of the Lord will come as a thief', 'the heavens shall pass away with a great noise', 'burned up'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2pe-3-13': {
    title: 'We Look for New Heavens and a New Earth, Wherein Dwelleth Righteousness',
    principle:
      'We wait for what God has promised. First principle: looking for it is the discipline. Isaiah 65\'s promise of a new creation is the horizon ahead of us, and righteousness is the citizen of that new world.',
    sourceKeywords: ['we, according to his promise, look for', 'new heavens and a new earth', 'wherein dwelleth righteousness'],
    fulfillmentKeywords: ['I create new heavens and a new earth'],
    terms: [],
  },

  // ── Hand-written expansion: 1 John ──────────────────────────────────────
  '1jn-1-1': {
    title: 'That Which Was from the Beginning... Which We Have Handled',
    principle:
      'The Word of life was heard, seen, looked upon and handled. First principle: the apostles are the witnesses. They testify that the eternal Word became touchable.',
    sourceKeywords: ['that which was from the beginning', 'our hands have handled', 'the Word of life'],
    fulfillmentKeywords: ['the Word was made flesh, and dwelt among us'],
    terms: [],
  },
  '1jn-2-1': {
    title: 'We Have an Advocate with the Father, Jesus Christ the Righteous',
    principle:
      '"Sin not" is the instruction. Writing it does not leave sin unanswered. First principle: Jesus Christ the Righteous One pleads for us before the Father. He is our defense attorney, and His own righteousness is His argument.',
    sourceKeywords: ['that ye sin not', 'we have an advocate with the Father', 'Jesus Christ the righteous'],
    fulfillmentKeywords: ['by his knowledge shall my righteous servant justify many'],
    terms: [],
  },
  '1jn-2-2': {
    title: 'He Is the Propitiation for Our Sins, and for the Whole World',
    principle:
      'This sacrifice reaches further than the letter\'s first readers. First principle: the sacrifice that turns God\'s wrath away is enough for the whole world. That word for the mercy seat comes from Leviticus 16, and here it is applied to the cross.',
    sourceKeywords: ['the propitiation for our sins', 'not for ours only', 'the sins of the whole world'],
    fulfillmentKeywords: ['he shall make an atonement for the holy place', 'bare the sin of many'],
    terms: [],
  },
  '1jn-3-2': {
    title: 'We Shall Be Like Him; for We Shall See Him as He Is',
    principle:
      'Scripture says, "now are we the sons of God." One day we will be like Christ, because we will see Him as He is. First principle: seeing Him is what makes us like Him. Until then, hope makes us pure.',
    sourceKeywords: ['now are we the sons of God', 'when he shall appear', 'we shall be like him'],
    fulfillmentKeywords: ['I shall behold thy face in righteousness', 'I shall be satisfied'],
    terms: [],
  },
  '1jn-3-12': {
    title: 'Not as Cain, Who Was of That Wicked One',
    principle:
      'Cain murdered his brother because Cain\'s own works were evil and his brother\'s were righteous. First principle: the first murder grew out of worship-envy. The children of the wicked one still hate it when righteousness is present.',
    sourceKeywords: ['Not as Cain', 'of that wicked one', 'slew his brother'],
    fulfillmentKeywords: ['Cain rose up against Abel his brother, and slew him'],
    terms: [],
  },
  '1jn-4-9': {
    title: 'God Sent His Only Begotten Son into the World',
    principle:
      'God showed His love among us when He sent His only begotten Son into the world, "that we might live through him." First principle: the cost of the gift shows how great God\'s love is. The Son was sent, and the receivers were dead and now live.',
    sourceKeywords: ['manifested the love of God toward us', 'God sent his only begotten Son', 'that we might live through him'],
    fulfillmentKeywords: ['For God so loved the world'],
    terms: [],
  },
  '1jn-4-10': {
    title: 'He Loved Us, and Sent His Son to Be the Propitiation for Our Sins',
    principle:
      'Here is love as God defines it. First principle: loving God was not our idea. God took the first step and sent His Son. That sacrifice was not an afterthought; it is what God\'s love is.',
    sourceKeywords: ['Herein is love', 'not that we loved God', 'he loved us, and sent his Son'],
    fulfillmentKeywords: ['For God so loved the world', 'he was wounded for our transgressions'],
    terms: [],
  },
  '1jn-5-6': {
    title: 'This Is He That Came by Water and Blood',
    principle:
      'He came not by water only, but by water and blood, and the Spirit also bears witness. First principle: this double testimony answers the claim that Jesus only seemed to have a body. The Son came through a real baptism and real blood.',
    sourceKeywords: ['came by water and blood', 'not by water only', 'the Spirit that beareth witness'],
    fulfillmentKeywords: ['one of the soldiers with a spear pierced his side'],
    terms: [],
  },
  '1jn-5-8': {
    title: 'There Are Three That Bear Witness in Earth',
    principle:
      'The Spirit, the water and the blood all agree. First principle: the law required two or three witnesses, and here three testify. That agreement settles heaven\'s case here on earth.',
    sourceKeywords: ['three that bear witness in earth', 'the Spirit, and the water, and the blood', 'these three agree in one'],
    fulfillmentKeywords: ['at the mouth of two witnesses, or at the mouth of three witnesses'],
    terms: [],
  },

  // ── Hand-written expansion: 2 John / 3 John ─────────────────────────────
  '2jn-1-6': {
    title: 'This Is Love, That We Walk After His Commandments',
    principle:
      'Love is defined here as walking in His commandments. That definition has been there from the beginning. First principle: love and commandment are not rivals. The message we heard at the start was about this walk itself.',
    sourceKeywords: ['this is love', 'walk after his commandments', 'as ye have heard from the beginning'],
    fulfillmentKeywords: ['If ye love me, keep my commandments'],
    terms: [],
  },
  '2jn-1-7': {
    title: 'Many Deceivers... Who Confess Not That Jesus Christ Is Come in the Flesh',
    principle:
      'Anyone who denies that Jesus Christ is come in the flesh is a deceiver, and that denial marks him out as the antichrist. First principle: the incarnation is the test of right belief. A Christ without flesh is the spirit of antichrist, and that spirit is already in the world.',
    sourceKeywords: ['many deceivers are entered into the world', 'confess not that Jesus Christ is come in the flesh', 'a deceiver and an antichrist'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '3jn-1-11': {
    title: 'He That Doeth Good Is of God',
    principle:
      'The command is, "follow not that which is evil, but that which is good." The person who does good is of God. The person who does evil has not seen Him. First principle: we copy what we have seen. Seeing God is the root of doing good, and Diotrephes had not seen.',
    sourceKeywords: ['follow not that which is evil', 'he that doeth good is of God', 'hath not seen God'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Jude ────────────────────────────────────────
  'jud-1-5': {
    title: 'The Lord, Having Saved the People out of Egypt, Destroyed the Unbelieving',
    principle:
      'The people the Lord brought out of Egypt died in the wilderness because they did not believe. First principle: being saved in the past is no protection from judgment later. The exodus journey ended at Kadesh for the faithless.',
    sourceKeywords: ['having saved the people out of the land of Egypt', 'afterward destroyed them that believed not'],
    fulfillmentKeywords: ['they shall not enter into my rest'],
    terms: [],
  },
  'jud-1-6': {
    title: 'The Angels Which Kept Not Their First Estate',
    principle:
      'God has reserved the fallen angels in "everlasting chains" for the great day. First principle: when an angel abandons the place God gave him, that abandonment carries a sentence. The chains of darkness hold until judgment comes, and the false teachers are warned of the same fate.',
    sourceKeywords: ['kept not their first estate', 'left their own habitation', 'everlasting chains under darkness'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jud-1-7': {
    title: 'Sodom and Gomorrha... Suffering the Vengeance of Eternal Fire',
    principle:
      'They went after strange flesh, and eternal fire punished them. First principle: the burnt cities are a standing example. Eternal fire already burned visibly once, as a preview.',
    sourceKeywords: ['Sodom and Gomorrha', 'going after strange flesh', 'the vengeance of eternal fire'],
    fulfillmentKeywords: ['the LORD rained upon Sodom and upon Gomorrah brimstone and fire'],
    terms: [],
  },
  'jud-1-9': {
    title: 'Michael... Durst Not Bring a Railing Accusation',
    principle:
      'The archangel Michael disputed with the devil, yet he said only, "The Lord rebuke thee." First principle: even a conflict between angels is carried on with deference. The rebuke belongs to the Lord, and Zechariah 3 shows the same scene over Joshua.',
    sourceKeywords: ['Michael the archangel', 'disputed about the body of Moses', 'The Lord rebuke thee'],
    fulfillmentKeywords: ['The LORD rebuke thee, O Satan'],
    terms: [],
  },
  'jud-1-11': {
    title: 'The Way of Cain, the Error of Balaam, the Gainsaying of Core',
    principle:
      'Three rebels from the Old Testament show us three ways people sin now. First principle: each one is an earlier picture. Envy, greed, and the grabbing of what God has not given all have their case studies, and one Woe is pronounced over them.',
    sourceKeywords: ['the way of Cain', 'the error of Balaam for reward', 'the gainsaying of Core'],
    fulfillmentKeywords: ['And Core... gathered themselves together against Moses'],
    terms: [],
  },
  'jud-1-24': {
    title: 'Unto Him That Is Able to Keep You from Falling',
    principle:
      'The God who keeps us will present us faultless before His glory with joy. First principle: this closing praise is about how God saves people. He keeps them, presents them, and rejoices. The One who saves is the One who finishes.',
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
      'God\'s jealousy is a fire. First principle: his jealousy is the flame of covenant love, the burning love that belongs to God\'s binding promise. Hebrews closes its warning section with this verse, unchanged.',
    sourceKeywords: ['a consuming fire', 'even a jealous God'],
    fulfillmentKeywords: ['our God is a consuming fire'],
    terms: [],
  },
  'deu-5-12': {
    title: 'Keep the Sabbath Day to Sanctify It',
    principle:
      'Deuteronomy\'s Sabbath command adds the memory of being bought back to the rest that began at creation. First principle: God sets the day apart by a command. He also sets it apart by the memory of how he rescued his people. That rest still waits for the people of God.',
    sourceKeywords: ['Keep the sabbath day to sanctify it', 'as the LORD thy God hath commanded thee'],
    fulfillmentKeywords: ['The sabbath was made for man', 'there remaineth therefore a rest'],
    terms: [],
  },
  'deu-6-5': {
    title: 'Thou Shalt Love the LORD Thy God with All Thine Heart',
    principle:
      'Love God with your heart, your soul, and your might. That is total love. First principle: the love command in the Shema, Israel\'s daily confession of faith, is the greatest commandment, by Jesus\' own ruling. Everything in the law hangs on it.',
    sourceKeywords: ['love the LORD thy God', 'with all thine heart', 'with all thy might'],
    fulfillmentKeywords: ['Thou shalt love the Lord thy God with all thy heart'],
    terms: [],
  },
  'deu-6-13': {
    title: 'Thou Shalt Fear the LORD Thy God, and Serve Him',
    principle:
      'Fear the LORD, serve him, and swear by his name. First principle: this is the verse Jesus used when Satan tempted him. Christ answers Satan three times from verses near this one.',
    sourceKeywords: ['fear the LORD thy God', 'serve him', 'swear by his name'],
    fulfillmentKeywords: ['him only shalt thou serve'],
    terms: [],
  },
  'deu-6-16': {
    title: 'Ye Shall Not Tempt the LORD Your God',
    principle:
      'At Massah the people tested God, and God turned it into a standing command. First principle: God forbids us to test him. The reason is that the rock which gave water at Massah was Christ. When you test God, you are testing a Person.',
    sourceKeywords: ['Ye shall not tempt the LORD your God', 'as ye tempted him in Massah'],
    fulfillmentKeywords: ['Thou shalt not tempt the Lord thy God'],
    terms: [],
  },
  'deu-8-3': {
    title: 'Man Doth Not Live by Bread Only',
    principle:
      'God let his people go hungry to teach them something. Life comes by every word of the LORD\'s mouth. First principle: the manna lesson is armor for times of temptation. Jesus used it when he refused the bread.',
    sourceKeywords: ['fed thee with manna', 'not live by bread only', 'every word that proceedeth out of the mouth of the LORD'],
    fulfillmentKeywords: ['Man shall not live by bread alone, but by every word of God'],
    terms: [],
  },
  'deu-10-20': {
    title: 'Thou Shalt Fear the LORD... Him Shalt Thou Cleave',
    principle:
      'Fear, serve, cleave, swear. These four verbs describe a life committed to God. First principle: "cleave" is marriage language. It means you hold on to God and stay faithful to him in his binding promise.',
    sourceKeywords: ['fear the LORD thy God', 'him shalt thou serve', 'to him shalt thou cleave'],
    fulfillmentKeywords: ['him only shalt thou serve'],
    terms: [],
  },
  'deu-13-1': {
    title: 'If There Arise Among You a Prophet... and Giveth Thee a Sign',
    principle:
      'A sign from a would-be prophet does not prove his message is true. First principle: miracles are easy to fake. The test is whether the message is faithful, not whether the miracle is fiery.',
    sourceKeywords: ['a prophet, or a dreamer of dreams', 'giveth thee a sign or a wonder'],
    fulfillmentKeywords: ['shall shew great signs and wonders... deceive many'],
    terms: [],
  },
  'deu-16-16': {
    title: 'Three Times in a Year Shall All Thy Males Appear',
    principle:
      'Israel kept three feasts each year: unleavened bread, weeks, and tabernacles. No one was to appear before the LORD empty. First principle: these pilgrimage feasts give shape to Israel\'s year. When the time was full, Jesus\' family kept this law, as Luke 2 records.',
    sourceKeywords: ['Three times in a year', 'feast of unleavened bread', 'they shall not appear before the LORD empty'],
    fulfillmentKeywords: ['they went up to Jerusalem after the custom of the feast'],
    terms: [],
  },
  'deu-19-15': {
    title: 'At the Mouth of Two Witnesses Shall the Matter Be Established',
    principle:
      'One witness cannot convict a person. First principle: this law of fair process becomes the rule for church discipline. It also becomes the threefold testimony of the Spirit, the water, and the blood. To establish a matter, you need more than one witness.',
    sourceKeywords: ['One witness shall not rise up', 'two witnesses, or at the mouth of three witnesses', 'established'],
    fulfillmentKeywords: ['in the mouth of two or three witnesses every word may be established'],
    terms: [],
  },
  'deu-24-1': {
    title: 'Then Let Him Write Her a Bill of Divorcement',
    principle:
      'Moses allowed divorce, but he put limits on it. He never praised it. First principle: Jesus explains the clause by pointing to hard hearts. Then he goes back to Genesis. The bill was a fence, never a license.',
    sourceKeywords: ['a bill of divorcement', 'give it in her hand', 'send her out of his house'],
    fulfillmentKeywords: ['Moses because of the hardness of your hearts suffered you'],
    terms: [],
  },
  'deu-25-4': {
    title: 'Thou Shalt Not Muzzle the Ox When He Treadeth',
    principle:
      'The ox that treads the grain eats from the threshing floor as it works. First principle: God\'s law cares for the worker. Paul and Timothy both insist the principle is about us, not about oxen.',
    sourceKeywords: ['not muzzle the ox', 'when he treadeth out the corn'],
    fulfillmentKeywords: ['Doth God take care for oxen?'],
    terms: [],
  },
  'deu-27-26': {
    title: 'Cursed Be He That Confirmeth Not All the Words of This Law',
    principle:
      'The twelve curses end with the one that covers everything. All the people say Amen. First principle: if you keep only part of the law, you are still under the curse. Paul quotes this Amen-line to show that every person is guilty.',
    sourceKeywords: ['Cursed be he that confirmeth not all the words of this law', 'all the people shall say, Amen'],
    fulfillmentKeywords: ['Cursed is every one that continueth not in all things'],
    terms: [],
  },
  'deu-29-4': {
    title: 'The LORD Hath Not Given You an Heart to Perceive',
    principle:
      'Moses said that, unto this day, the LORD had not given his people a heart to perceive, eyes to see, or ears to hear. First principle: understanding is a gift from God, not something you simply have. Paul quotes this word about the heart not yet given, over the veil that lies on the synagogue.',
    sourceKeywords: ['hath not given you an heart to perceive', 'eyes to see, and ears to hear', 'unto this day'],
    fulfillmentKeywords: ['the vail is upon their heart in the reading of the old testament'],
    terms: [],
  },
  'deu-30-4': {
    title: 'From Thence Will the LORD Thy God Gather Thee',
    principle:
      'God\'s people may be scattered to the far parts of heaven, but God comes to bring them home. First principle: even the farthest place of exile is where God gathers his people back. Jesus cites this verse for the gathering of his chosen people with the trumpet.',
    sourceKeywords: ['driven out unto the outmost parts of heaven', 'from thence will the LORD thy God gather thee'],
    fulfillmentKeywords: ['gather together his elect from the four winds'],
    terms: [],
  },
  'deu-30-12': {
    title: 'It Is Not in Heaven, That Thou Shouldest Say, Who Shall Go Up?',
    principle:
      'The commandment is not out of reach. First principle: the law says the commandment is not in heaven. Paul reads it again as the word of faith. Faith does not bring Christ down. The Word is near.',
    sourceKeywords: ['It is not in heaven', 'Who shall go up for us to heaven'],
    fulfillmentKeywords: ['Who shall ascend into heaven? that is, to bring Christ down'],
    terms: [],
  },
  'deu-30-14': {
    title: 'But the Word Is Very Nigh unto Thee',
    principle:
      'In mouth and heart, that thou mayest do it. The word is near enough for you to speak and to do. First principle: the near word is the word of faith Paul preaches. It is the confession of mouth and heart that saves.',
    sourceKeywords: ['the word is very nigh unto thee', 'in thy mouth, and in thy heart'],
    fulfillmentKeywords: ['The word is nigh thee, even in thy mouth, and in thy heart'],
    terms: [],
  },
  'deu-31-6': {
    title: 'He Will Not Fail Thee, Nor Forsake Thee',
    principle:
      'God commands courage. He grounds that command in his promise to be with his people. First principle: in this farewell sermon Moses hands his role to Joshua. Joshua receives what Moses received. Hebrews hands the same promise to every believer, as a weapon against greed.',
    sourceKeywords: ['Be strong and of a good courage', 'he doth go with thee', 'he will not fail thee, nor forsake thee'],
    fulfillmentKeywords: ['I will never leave thee, nor forsake thee'],
    terms: [],
  },
  'deu-32-35': {
    title: 'To Me Belongeth Vengeance and Recompence',
    principle:
      'In the Song of Moses, God keeps repayment in his own hands. Feet that slip have a day set for them. First principle: vengeance left in God\'s hands is vengeance you can be sure of. Hebrews quotes this verse to warn those who turn away from God. Romans quotes it to set forgivers free.',
    sourceKeywords: ['To me belongeth vengeance, and recompence', 'their foot shall slide in due time'],
    fulfillmentKeywords: ['Vengeance belongeth unto me, I will recompense'],
    terms: [],
  },
  'deu-32-43': {
    title: 'Rejoice, O Ye Nations, with His People',
    principle:
      'The Song of Moses ends with joy for the Gentiles. God avenges blood. He shows mercy to his land. First principle: God calls the nations into Israel\'s joy. Hebrews quotes this verse about the worship of the first-begotten, that is, Jesus. Romans quotes it about shared gladness.',
    sourceKeywords: ['Rejoice, O ye nations, with his people', 'avenge the blood of his servants', 'merciful unto his land'],
    fulfillmentKeywords: ['Rejoice, ye Gentiles, with his people'],
    terms: [],
  },
  'deu-33-2': {
    title: 'The LORD Came from Sinai... with Ten Thousands of Saints',
    principle:
      'This poem shows God appearing: Sinai, Seir, Paran. A fiery law comes from His right hand. First principle: the poetry of the LORD\'s coming stands behind Jude and behind the teaching that angels gave the law. The LORD comes with holy myriads.',
    sourceKeywords: ['The LORD came from Sinai', 'he came with ten thousands of saints', 'a fiery law for them'],
    fulfillmentKeywords: ['the Lord cometh with ten thousands of his saints'],
    terms: [],
  },

  // ── Hand-written expansion: Joshua ──────────────────────────────────────
  'jos-1-5': {
    title: 'As I Was with Moses, So I Will Be with Thee',
    principle:
      'No man shall be able to stand before thee all the days of thy life; God will not fail Joshua and will not leave him. First principle: the promise of God\'s presence carries Joshua into his new place as leader. Hebrews hands the same promise to every believer.',
    sourceKeywords: ['As I was with Moses, so I will be with thee', 'I will not fail thee, nor forsake thee'],
    fulfillmentKeywords: ['I will never leave thee, nor forsake thee'],
    terms: [],
  },
  'jos-1-9': {
    title: 'Be Strong and of a Good Courage',
    principle:
      'God commanded Joshua to be strong and brave. He gave one reason: the LORD your God is with you. First principle: courage does not come from inside you. It comes from God being with you. He promises to be with you wherever you go.',
    sourceKeywords: ['Be strong and of a good courage', 'be not afraid, neither be thou dismayed', 'with thee whithersoever thou goest'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-8-34': {
    title: 'He Read All the Words of the Law',
    principle:
      'Joshua read the blessings and the curses to the whole assembly, and the women and the little ones were there too. First principle: covenant renewal is public reading. Every person hears the blessing and the curse.',
    sourceKeywords: ['he read all the words of the law', 'the blessings and cursings', 'all that is written in the book of the law'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-10-13': {
    title: 'The Sun Stood Still in the Midst of Heaven',
    principle:
      'God held the sun still for a whole day so Israel could win the battle. The book of Jasher wrote the day down. First principle: the Creator can stop time for his people to win. Time serves him.',
    sourceKeywords: ['the sun stood still', 'the moon stayed', 'hasted not to go down about a whole day'],
    fulfillmentKeywords: ['So the sun returned ten degrees'],
    terms: [],
  },
  'jos-21-45': {
    title: 'There Failed Not Ought of Any Good Thing',
    principle:
      'Everything the LORD spoke to Israel came to pass. First principle: Joshua 21 ends by checking God\'s promises one by one. Not one of them failed. Solomon and Hebrews both take up the same sentence later.',
    sourceKeywords: ['There failed not ought', 'any good thing which the LORD had spoken', 'all came to pass'],
    fulfillmentKeywords: ['there hath not failed one word of all his good promise'],
    terms: [],
  },
  'jos-24-2': {
    title: 'Your Fathers Dwelt on the Other Side of the Flood',
    principle:
      'The story of God\'s covenant starts with Terah, a man who worshipped other gods. First principle: Israel\'s family story opens in a house full of other gods. God\'s grace chose a family that worshipped the wrong way.',
    sourceKeywords: ['dwelt on the other side of the flood', 'Terah, the father of Abraham', 'they served other gods'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-24-15': {
    title: 'Choose You This Day Whom Ye Will Serve',
    principle:
      'Joshua put the choice in front of the people and settled it for himself: as for me and my house. First principle: you cannot stay neutral. You serve the gods your fathers served, or you serve the LORD. Joshua\'s own household decides first.',
    sourceKeywords: ['choose you this day whom ye will serve', 'as for me and my house', 'we will serve the LORD'],
    fulfillmentKeywords: ['No man can serve two masters'],
    terms: [],
  },
  'jos-24-19': {
    title: 'Ye Cannot Serve the LORD: for He Is an Holy God',
    principle:
      'Joshua stops anyone who would promise cheaply. He says a jealous God will not forgive a promise made lightly. First principle: the LORD wants you to know what you are agreeing to. He does not want a vow made on a wave of feeling. His holiness makes service impossible for the person who trusts himself.',
    sourceKeywords: ['Ye cannot serve the LORD', 'he is an holy God', 'he is a jealous God'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jos-24-32': {
    title: 'The Bones of Joseph, Which the Children of Israel Brought Up',
    principle:
      'Israel buried Joseph\'s coffin in the field at Shechem that Jacob had bought. The bones had set out with Israel in Exodus 13. First principle: God had made the promise four hundred years earlier. Because of that promise, Israel carried Joseph\'s bones all the way through the wilderness to the funeral.',
    sourceKeywords: ['the bones of Joseph', 'brought up out of Egypt', 'buried they in Shechem'],
    fulfillmentKeywords: ['And Joseph took an oath of the children of Israel'],
    terms: [],
  },

  // ── Hand-written expansion: Judges ──────────────────────────────────────
  'jdg-2-16': {
    title: 'Nevertheless the LORD Raised Up Judges',
    principle:
      'The pattern keeps repeating: Israel is plundered, then rescued. First principle: Israel turned away from God again and again. God answered with grace every time. He raised up deliverers for them. The people never chose a king to save them.',
    sourceKeywords: ['the LORD raised up judges', 'delivered them out of the hand'],
    fulfillmentKeywords: ['raised up unto them deliverers'],
    terms: [],
  },
  'jdg-13-5': {
    title: 'The Child Shall Be a Nazarite unto God from the Womb',
    principle:
      'Samson was promised before he was born: he would be a Nazarite, no razor was to touch his head, and he would begin to deliver Israel. First principle: a deliverer set apart to God from the womb is the pattern of the one who comes first and prepares the way. John the Baptist was set apart the same way in Luke 1. The word Nazarene then echoes on to Matthew 2.',
    sourceKeywords: ['shalt conceive, and bear a son', 'no razor shall come on his head', 'a Nazarite unto God from the womb'],
    fulfillmentKeywords: ['he shall be called a Nazarene', 'he shall be great unto the Lord'],
    terms: [],
  },
  'jdg-21-25': {
    title: 'In Those Days There Was No King in Israel',
    principle:
      'In those days there was no king in Israel, and every man did what was right in his own eyes. First principle: the last verse of Judges tells you why the whole book fell apart. Israel had no king and no vision from God. So each man became a law to himself. Isaiah says people like that are sheep that have gone astray.',
    sourceKeywords: ['there was no king in Israel', 'every man did that which was right in his own eyes'],
    fulfillmentKeywords: ['All we like sheep have gone astray'],
    terms: [],
  },

  // ── Hand-written expansion: Ruth ────────────────────────────────────────
  'rut-1-16': {
    title: 'Whither Thou Goest, I Will Go',
    principle:
      'Ruth\'s words were a promise: thy people, thy God. First principle: the Moabite widow joined Israel\'s people and Israel\'s God. Her promise of love on the road was how God grafted a Gentile into his people.',
    sourceKeywords: ['Intreat me not to leave thee', 'thy people shall be my people', 'thy God my God'],
    fulfillmentKeywords: ['Ruth the Moabitess... of whom came Boaz'],
    terms: [],
  },
  'rut-4-17': {
    title: 'There Is a Son Born to Naomi... the Father of Jesse, the Father of David',
    principle:
      'Obed was born into Naomi\'s family. Obed became the father of Jesse, and Jesse was the father of David. First principle: Ruth was a Moabite, and her grandson was David. The promised King, Jesus Christ, is the Messiah, and the family line that runs to him names Ruth.',
    sourceKeywords: ['a son born to Naomi', 'he is the father of Jesse, the father of David'],
    fulfillmentKeywords: ['Salmon begat Booz of Rachab; and Booz begat Obed of Ruth'],
    terms: [],
  },
  'rut-4-18': {
    title: 'Now These Are the Generations of Pharez',
    principle:
      'Pharez to Hezron: the family record opens the line of the promised King. First principle: the book of Ruth ends where Matthew begins. Both give the family record of the royal line. That line runs from Perez through Obed to David to Jesus Christ.',
    sourceKeywords: ['the generations of Pharez', 'Pharez begat Hezron'],
    fulfillmentKeywords: ['and Phares and Zara of Thamar; and Phares begat Esrom'],
    terms: [],
  },

  // ── Hand-written expansion: 1 Samuel ────────────────────────────────────
  '1sa-2-1': {
    title: 'My Heart Rejoiceth in the LORD; Mine Horn Is Exalted',
    principle:
      'Hannah\'s prayer of praise for the salvation God gives. First principle: the barren woman\'s song becomes the pattern Mary follows in her Magnificat. Hannah\'s horn is exalted, her mouth is enlarged, and she rejoices in the salvation God gives.',
    sourceKeywords: ['My heart rejoiceth in the LORD', 'mine horn is exalted', 'I rejoice in thy salvation'],
    fulfillmentKeywords: ['My soul doth magnify the Lord'],
    terms: [],
  },
  '1sa-2-35': {
    title: 'I Will Raise Me Up a Faithful Priest',
    principle:
      'A priest after God\'s own heart, a sure house, walking before the anointed forever. First principle: Eli\'s house falls, and God\'s promise to raise up a faithful priest stands. God kept that promise in Zadok, and at last in his Son.',
    sourceKeywords: ['I will raise me up a faithful priest', 'according to that which is in mine heart', 'a sure house'],
    fulfillmentKeywords: ['consider the Apostle and High Priest of our profession, Christ Jesus'],
    terms: [],
  },
  '1sa-8-7': {
    title: 'They Have Not Rejected Thee, but They Have Rejected Me',
    principle:
      'The throne-rejection read as theocracy-rejection. First principle: when Israel asks for a king like other nations, they are rejecting God as their king. Hosea repeats the charge when Israel asks a king again.',
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
      'Mourning ends; the horn fills; Jesse of Bethlehem is named. First principle: God chose Bethlehem for his king long before David was born there. The town is already named as the place the promised King comes from.',
    sourceKeywords: ['How long wilt thou mourn for Saul', 'fill thine horn with oil', 'I have provided me a king'],
    fulfillmentKeywords: ['he raised up unto them David to be their king'],
    terms: [],
  },
  '1sa-16-13': {
    title: 'The Spirit of the LORD Came upon David from That Day Forward',
    principle:
      'The anointing oil and the abiding Spirit. First principle: the anointing is real, and God keeps his word to the tribe of Judah. The Spirit comes on David and stays with him. Scripture never records the Spirit leaving him until his sin with Bathsheba — when he prays that God not take the Holy Spirit from him.',
    sourceKeywords: ['the horn of oil, and anointed him', 'the Spirit of the LORD came upon David', 'from that day forward'],
    fulfillmentKeywords: ['I have found David... a man after mine own heart'],
    terms: [],
  },
  '1sa-17-45': {
    title: 'I Come to Thee in the Name of the LORD of Hosts',
    principle:
      'Sword and spear versus the Name. First principle: David\'s weapon is the Name of the LORD of hosts — not the giant\'s sword and spear. The battle belongs to God, and David says so out loud before he fights.',
    sourceKeywords: ['in the name of the LORD of hosts', 'whom thou hast defied'],
    fulfillmentKeywords: ['the weapons of our warfare are not carnal'],
    terms: [],
  },
  '1sa-17-47': {
    title: 'The Battle Is the LORD\'S',
    principle:
      'The assembly learns salvation without sword or spear. First principle: whoever owns the battle decides how it ends. The LORD gives into hands, and the assembly knows it.',
    sourceKeywords: ['the LORD saveth not with sword and spear', 'the battle is the LORD\'S', 'he will give you into our hands'],
    fulfillmentKeywords: ['the battle is not yours, but God\'s'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Samuel ────────────────────────────────────
  '2sa-7-13': {
    title: 'He Shall Build an House for My Name',
    principle:
      'David\'s descendant builds the house, and God establishes that throne forever. First principle: Solomon builds the temple, but the promise reaches past him. The throne that is established forever belongs to David\'s greater Son.',
    sourceKeywords: ['He shall build an house for my name', 'stablish the throne of his kingdom for ever'],
    fulfillmentKeywords: ['But unto the Son he saith... Thy throne'],
    terms: [],
  },
  '2sa-7-14': {
    title: 'I Will Be His Father, and He Shall Be My Son',
    principle:
      'God promises to be a Father to David\'s son, and the promise carries a rod for correction. First principle: Hebrews gives the promise "I will be his father, and he shall be my son" to Jesus, and he joins it to Psalm 2. Both are one promise, not two. That same verse adds the rod of correction, and that correction points to the cross.',
    sourceKeywords: ['I will be his father', 'he shall be my son', 'chasten him with the rod of men'],
    fulfillmentKeywords: ['For unto which of the angels said he... Thou art my Son'],
    terms: [],
  },
  '2sa-7-16': {
    title: 'Thy Throne Shall Be Established for Ever',
    principle:
      'The promise names a house, a kingdom and a throne, and it stands established before God forever. First principle: God swore this oath to David, and it outlives the exile. Gabriel repeats it to Mary over the child in her womb.',
    sourceKeywords: ['thine house and thy kingdom', 'established for ever before thee', 'thy throne shall be established for ever'],
    fulfillmentKeywords: ['the Lord God shall give unto him the throne of his father David'],
    terms: [],
  },
  '2sa-12-13': {
    title: 'The LORD Also Hath Put Away Thy Sin; Thou Shalt Not Die',
    principle:
      'David\'s whole confession is this: "I have sinned against the LORD." Nathan answers at once that God has put the sin away. First principle: Psalm 32 and Psalm 51 grow out of this moment. God puts the sin away and lifts the death sentence, but the consequences stay.',
    sourceKeywords: ['I have sinned against the LORD', 'The LORD also hath put away thy sin', 'thou shalt not die'],
    fulfillmentKeywords: ['Blessed is he whose transgression is forgiven'],
    terms: [],
  },
  '2sa-22-2': {
    title: 'The LORD Is My Rock, and My Fortress',
    principle:
      'David sings this song after the LORD rescued him out of the hand of all his enemies. First principle: this psalm in chapter 22 is Psalm 18. It is the rescue words of a king who trusted God.',
    sourceKeywords: ['The LORD is my rock, and my fortress', 'my deliverer'],
    fulfillmentKeywords: ['The LORD is my rock, and my fortress'],
    terms: [],
  },
  '2sa-22-50': {
    title: 'I Will Give Thanks unto Thee among the Heathen',
    principle:
      'David vows to thank God among the Gentiles. First principle: Paul quotes that vow in Romans 15 as proof that God planned all along to bring the Gentiles in. The king\'s own promise to praise God among the nations was God\'s plan in the making.',
    sourceKeywords: ['give thanks unto thee, O LORD, among the heathen', 'sing praises unto thy name'],
    fulfillmentKeywords: ['confess to thee among the Gentiles'],
    terms: [],
  },
  '2sa-24-17': {
    title: 'Let Thine Hand Be Against Me, and Against My Father\'s House',
    principle:
      'David sees the angel who brings the plague, and he speaks to God for the people. The shepherd offers himself in place of the sheep. First principle: the king\'s wish to take the punishment himself points to the greater Shepherd-King. That Shepherd does not pray this prayer; he answers it.',
    sourceKeywords: ['I have sinned, and I have done wickedly', 'these sheep, what have they done', 'be against me'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 1 Kings ─────────────────────────────────────
  '1ki-2-2': {
    title: '"I go the way of all the earth" — David\'s dying words to Solomon.',
    principle:
      'David gave his dying charge to Solomon. First principle: "I go the way of all the earth" is David\'s way of saying that he is going to die. Death is the way of all the earth for everyone, right up to the One who rose. The charge to show manhood continues in Acts, where he fulfilled his course.',
    sourceKeywords: ['I go the way of all the earth', 'be thou strong therefore', 'shew thyself a man'],
    fulfillmentKeywords: ['for David... fell on sleep, and was laid unto his fathers'],
    terms: [],
  },
  '1ki-2-10': {
    title: '"So David slept with his fathers" — the KJV words for his death and burial.',
    principle:
      'David was buried in the city of David. First principle: the ancestor of the promised King dies and stays dead. The grave kept David, and it did not keep Christ. Peter and Paul both press that point.',
    sourceKeywords: ['David slept with his fathers', 'buried in the city of David'],
    fulfillmentKeywords: ['he is both dead and buried, and his sepulchre is with us unto this day'],
    terms: [],
  },
  '1ki-8-27': {
    title: '"Will God indeed dwell on the earth?" — Solomon asks it at the dedication.',
    principle:
      '"The heaven and heaven of heavens cannot contain thee," and this house is far too small. First principle: the temple-dedication prayer knows its own limit. The Incarnation is the surprising answer to that impossible question.',
    sourceKeywords: ['Will God indeed dwell on the earth', 'cannot contain thee', 'this house that I have builded'],
    fulfillmentKeywords: ['the Word was made flesh, and dwelt among us'],
    terms: [],
  },
  '1ki-8-46': {
    title: '"There is no man that sinneth not" — Solomon\'s own words in this prayer.',
    principle:
      'This prayer expects sin, exile, and a people who pray back toward the temple. First principle: Solomon\'s temple-prayer is a confession for future failures. It hopes for forgiveness toward one place.',
    sourceKeywords: ['If they sin against thee', 'there is no man that sinneth not', 'carry them away captives'],
    fulfillmentKeywords: ['there is not a just man upon earth'],
    terms: [],
  },
  '1ki-8-56': {
    title: '"There hath not failed one word of all his good promise" — Solomon\'s report at the dedication.',
    principle:
      'God gave rest to his people, just as he had promised by Moses. First principle: at the temple\'s dedication Solomon held an audit of God\'s word, and not one word failed. Hebrews makes that same audit the ground for entering rest.',
    sourceKeywords: ['hath given rest unto his people Israel', 'there hath not failed one word', 'all his good promise'],
    fulfillmentKeywords: ['There failed not ought of any good thing'],
    terms: [],
  },
  '1ki-17-1': {
    title: '"There shall not be dew nor rain these years" — Elijah\'s word to Ahab.',
    principle:
      'Elijah the Tishbite announced the drought to Ahab before it came. First principle: the prophet\'s word controlled the sky. James lifts Elijah up as proof that men who pray, men like us, can move the weather.',
    sourceKeywords: ['As the LORD God of Israel liveth', 'there shall not be dew nor rain', 'but according to my word'],
    fulfillmentKeywords: ['he prayed earnestly that it might not rain'],
    terms: [],
  },
  '1ki-17-9': {
    title: '"Arise, get thee to Zarephath" — the town where God sent Elijah to a widow.',
    principle:
      'God commanded a widow of Zidon to take care of the prophet. First principle: God sends the needy to those who are needier still. The Gentile widow\'s barrel became the stage for resurrection faith.',
    sourceKeywords: ['get thee to Zarephath', 'I have commanded a widow woman there', 'to sustain thee'],
    fulfillmentKeywords: ['unto a widow of Sarepta, a city of Sidon'],
    terms: [],
  },
  '1ki-18-21': {
    title: '"How long halt ye between two opinions?" — Elijah\'s question to a silent crowd.',
    principle:
      'The people limped between the LORD and Baal, and they did not answer a word. First principle: worship that is divided is worship that limps. Elijah posed the choice, and silence was the worst answer he could get.',
    sourceKeywords: ['How long halt ye between two opinions', 'if the LORD be God, follow him', 'the people answered him not a word'],
    fulfillmentKeywords: ['No man can serve two masters'],
    terms: [],
  },
  '1ki-19-10': {
    title: 'I, Even I Only, Am Left; and They Seek My Life',
    principle:
      'Elijah complained under the juniper that he was jealous for the LORD. First principle: the prophet counted the faithful and got the number wrong by seven thousand. Despair always counts the faithful few too low.',
    sourceKeywords: ['I have been very jealous for the LORD', 'slain thy prophets', 'I, even I only, am left'],
    fulfillmentKeywords: ['Lord, they have killed thy prophets'],
    terms: [],
  },
  '1ki-19-18': {
    title: '"Yet I have left me seven thousand in Israel" — God\'s own count of the faithful few.',
    principle:
      'Their knees were not bowed, and their mouths did not kiss Baal. First principle: God counted the faithful few who were left, and his count overruled the prophet\'s count. Faithful people exist outside the crowds you can see.',
    sourceKeywords: ['I have left me seven thousand', 'all the knees which have not bowed', 'which hath not kissed him'],
    fulfillmentKeywords: ['I have reserved to myself seven thousand men'],
    terms: [],
  },
  '1ki-19-21': {
    title: '"He arose, and went after Elijah, and ministered unto him" — that is how Elisha left his farm.',
    principle:
      'Elisha burned his plowing gear and followed Elijah. First principle: when you answer this call, you cannot go back. He cooked the oxen on their own yoke, so the old life became the farewell feast.',
    sourceKeywords: ['took a yoke of oxen', 'boiled their flesh with the instruments', 'went after Elijah, and ministered unto him'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 2 Kings ─────────────────────────────────────
  '2ki-2-11': {
    title: '"A chariot of fire... and Elijah went up" — the whirlwind carried him to heaven.',
    principle:
      'The fire-horses separated the two men. Then the whirlwind carried the prophet up, and Elijah was gone. First principle: one man in Scripture skipped death. Elijah shares that translation with Enoch\'s hope. John the Baptist came before Christ in the same spirit that Elijah had.',
    sourceKeywords: ['a chariot of fire, and horses of fire', 'parted them both asunder', 'Elijah went up by a whirlwind'],
    fulfillmentKeywords: ['They also which saw him... shall so come in like manner'],
    terms: [],
  },
  '2ki-4-42': {
    title: '"Bread of the firstfruits: twenty loaves of barley" — what the man brought to Elisha.',
    principle:
      'A hundred men ate, and they had food left over, just as the word of the LORD had said. First principle: the man of God fed a hundred men with the firstfruits, and the food multiplied in his hands. Elisha\'s loaves pointed forward to the Lord\'s feeding of the five thousand.',
    sourceKeywords: ['bread of the firstfruits', 'twenty loaves of barley', 'Give unto the people, that they may eat'],
    fulfillmentKeywords: ['There is a lad here, which hath five barley loaves'],
    terms: [],
  },
  '2ki-13-21': {
    title: '"When the man touched the bones of Elisha, he revived" — the dead man came back to life.',
    principle:
      'Workers were burying a man when they saw a band of raiders. They threw the body into Elisha\'s tomb. The dead man touched Elisha\'s bones, and he came back to life. First principle: the God of resurrection can use a tomb. Even the buried saints carry life in their remains.',
    sourceKeywords: ['touched the bones of Elisha'],
    fulfillmentKeywords: ['many bodies of the saints which slept arose'],
    terms: [],
  },
  '2ki-17-13': {
    title: '"The LORD testified against Israel by all the prophets" — and Israel would not turn back.',
    principle:
      '"Turn ye from your evil ways," the prophets said to Israel. First principle: the LORD testified against Israel by every prophet and every seer, and they all said the same thing. Israel refused to turn back. Judgment came only after that refusal.',
    sourceKeywords: ['testified against Israel, and against Judah', 'by all the prophets, and by all the seers', 'Turn ye from your evil ways'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ki-18-4': {
    title: '"He brake in pieces the brasen serpent" — Hezekiah smashed the idol it had become.',
    principle:
      'Hezekiah destroyed a good thing that had become an idol. He called it Nehushtan. First principle: even a symbol God gives can become an idol once people trust it. The bronze serpent had to be shattered, the same serpent that John 3 lifts up.',
    sourceKeywords: ['brake in pieces the brasen serpent', 'burn incense to it', 'called it Nehushtan'],
    fulfillmentKeywords: ['as Moses lifted up the serpent'],
    terms: [],
  },
  '2ki-20-5': {
    title: 'I Have Heard Thy Prayer, I Have Seen Thy Tears',
    principle:
      'God healed Hezekiah on the third day. First principle: God answered a prayer that came with tears, and he gave a date for it. Hezekiah went up to the house of the LORD on the third day. That third day carries the rhythm of the resurrection.',
    sourceKeywords: ['I have heard thy prayer', 'I have seen thy tears', 'on the third day thou shalt go up'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ki-25-27': {
    title: '"Evilmerodach did lift up the head of Jehoiachin out of prison" — the KJV words for his release.',
    principle:
      'Jehoiachin\'s captivity lasted thirty-seven years. Then he changed his prison clothes for new ones and sat down at the king\'s table. First principle: the line of David survived the fall of Jerusalem in one prisoner who was pardoned. That prisoner ate at the table of a foreign king.',
    sourceKeywords: ['lift up the head of Jehoiachin', 'out of prison', 'seven and thirtieth year'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: 1 Chronicles ────────────────────────────────
  '1ch-16-22': {
    title: 'Touch Not Mine Anointed, and Do My Prophets No Harm',
    principle:
      'These words stand in the psalm of thanks that David gave the people. First principle: the covenant family and the men who speak for God rest under God\'s own protection. What God said to the patriarchs is a treasure Israel passed down.',
    sourceKeywords: ['Touch not mine anointed', 'do my prophets no harm'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ch-17-11': {
    title: 'I Will Raise Up Thy Seed after Thee',
    principle:
      'God gave Nathan the prophet a promise about David\'s son. God would raise up that son after David and establish his kingdom. First principle: Chronicles repeats 2 Samuel 7 to the people who came back from exile. The promise of a lasting throne was still alive after the fall of Jerusalem.',
    sourceKeywords: ['I will raise up thy seed after thee', 'which shall be of thy sons', 'I will establish his kingdom'],
    fulfillmentKeywords: ['the Lord God shall give unto him the throne of his father David'],
    terms: [],
  },
  '1ch-17-13': {
    title: 'I Will Be His Father, and He Shall Be My Son',
    principle:
      'God would not take his mercy away from this son, as he had taken it from Saul. First principle: the father-and-son decree carries a clause that mercy stays. Hebrews leans on this promise to the Son when it compares Jesus with the angels.',
    sourceKeywords: ['I will be his father, and he shall be my son', 'I will not take my mercy away from him'],
    fulfillmentKeywords: ['For unto which of the angels said he... Thou art my Son'],
    terms: [],
  },
  '1ch-21-17': {
    title: 'Let Thine Hand Be on Me, and on My Father\'s House',
    principle:
      'David spoke to God at the plague: the sheep are innocent. First principle: David asked God to punish him instead of his people. God\'s angel stood over Jerusalem with a sword in his hand ready to strike. The plague stopped at the threshingfloor, where David made his offering.',
    sourceKeywords: ['I it is that have sinned', 'these sheep, what have they done', 'be on me, and on my father\'s house'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ch-22-10': {
    title: 'He Shall Build an House for My Name',
    principle:
      'God named Solomon as the son whose throne he would establish over Israel forever. First principle: the same man builds the temple and establishes the throne. That joins the two tasks, and both point beyond Solomon to the Son who builds God\'s house.',
    sourceKeywords: ['He shall build an house for my name', 'he shall be my son, and I will be his father', 'establish the throne of his kingdom for ever'],
    fulfillmentKeywords: ['I will build my church'],
    terms: [],
  },
  '1ch-28-6': {
    title: 'Solomon Thy Son, He Shall Build My House; I Have Chosen Him',
    principle:
      'God announced in public which son would build the temple. First principle: God told David his choice before any building started. "I will be his father" is the reason the son may build.',
    sourceKeywords: ['Solomon thy son', 'he shall build my house and my courts', 'I have chosen him to be my son'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '1ch-29-11': {
    title: 'Thine, O LORD, Is the Greatness, and the Power',
    principle:
      'The whole assembly gave this praise: the kingdom is the LORD\'s and he is head above all. First principle: David prayed this way over the gifts for the temple, and he said that everything belongs to God. The kingdom and glory words of the Lord\'s prayer echo this prayer.',
    sourceKeywords: ['Thine, O LORD, is the greatness', 'thine is the kingdom, O LORD', 'exalted as head above all'],
    fulfillmentKeywords: ['Thine is the kingdom, and the power, and the glory'],
    terms: [],
  },

  // ── Hand-written expansion: 2 Chronicles ────────────────────────────────
  '2ch-6-2': {
    title: 'I Have Built an House of Habitation for Thee',
    principle:
      'Solomon claimed the finished house as his own gift to God. First principle: a man makes the claim, and God gives the answer. The cloud fills the house, and 1 Kings 8:27 asks the question that follows the claim at once.',
    sourceKeywords: ['an house of habitation for thee'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-6-18': {
    title: 'Will God in Very Deed Dwell with Men on the Earth?',
    principle:
      'This is the Chronicler\'s version of the temple-dedication question. First principle: the question of wonder stands until the Word came and lived among us. That is the true answer to Solomon\'s astonishment.',
    sourceKeywords: ['Will God in very deed dwell with men on the earth', 'heaven and the heaven of heavens cannot contain thee'],
    fulfillmentKeywords: ['and dwelt among us (and we beheld his glory)'],
    terms: [],
  },
  '2ch-7-14': {
    title: 'If My People... Shall Humble Themselves, and Pray',
    principle:
      'Humble, pray, seek, turn: God hears from heaven, forgives, and heals. First principle: four steps bring the people back to God, and the promise of healing goes with them. God gave this answer to Solomon for the temple, the place where the people would come to be made whole.',
    sourceKeywords: ['called by my name, shall humble themselves', 'seek my face', 'will forgive their sin, and will heal their land'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-7-16': {
    title: 'I Have Chosen and Sanctified This House',
    principle:
      '"My name may be there for ever": God\'s name, his eyes, and his heart stay in that house. First principle: God chose the temple and set it apart. He promised to watch over it always. The Gospels then tell how Jesus honored that promise by clearing out what men had made unclean.',
    sourceKeywords: ['I have chosen and sanctified this house', 'my name may be there for ever', 'mine eyes and mine heart shall be there'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-16-9': {
    title: 'The Eyes of the LORD Run to and Fro throughout the Whole Earth',
    principle:
      'God looks to show himself strong for the whole-hearted. First principle: God\'s searching eyes take a side. He shows his strength to those who are fully committed to him. Hanani\'s rebuke to Asa still stands as a check on every later king.',
    sourceKeywords: ['the eyes of the LORD run to and fro', 'shew himself strong', 'heart is perfect toward him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-20-15': {
    title: 'The Battle Is Not Yours, but God\'s',
    principle:
      'A huge enemy army came, and the people were told not to be afraid. First principle: the battle belongs to the LORD. So the people stood still and trusted him, and the singers walked in front of the army.',
    sourceKeywords: ['Be not afraid nor dismayed', 'this great multitude', 'the battle is not yours, but God\'s'],
    fulfillmentKeywords: ['the battle is the LORD\'S'],
    terms: [],
  },
  '2ch-20-20': {
    title: 'Believe in the LORD Your God, So Shall Ye Be Established',
    principle:
      'Jehoshaphat told the people in the morning to trust the LORD and to trust his prophets. First principle: believing is what makes you stand firm, and trusting the prophet\'s word is what makes you prosper. The singers go ahead of the spoil.',
    sourceKeywords: ['Believe in the LORD your God, so shall ye be established', 'believe his prophets, so shall ye prosper'],
    fulfillmentKeywords: [],
    terms: [],
  },
  '2ch-36-23': {
    title: 'Who Is There among You of All His People? Let Him Go Up',
    principle:
      'Cyrus\'s decree ends the Chronicler\'s book and leaves the invitation open. First principle: what the Persian king commanded was the fulfillment of Jeremiah and Isaiah. His call to go up is the trumpet for the remnant, the faithful few who are left.',
    sourceKeywords: ['Cyrus king of Persia', 'charged me to build him an house in Jerusalem', 'let him go up'],
    fulfillmentKeywords: ['that saith of Cyrus, He is my shepherd'],
    terms: [],
  },

  // ── Hand-written expansion: Ezra ────────────────────────────────────────
  'ezr-1-2': {
    title: 'The LORD God of Heaven Hath Charged Me to Build Him an House',
    principle:
      'Cyrus himself said out loud that God had charged him. First principle: the God of heaven directs the decree of the greatest empire. Isaiah had named Cyrus long before he was born.',
    sourceKeywords: ['The LORD God of heaven', 'given me all the kingdoms of the earth', 'build him an house at Jerusalem'],
    fulfillmentKeywords: ['that saith of Cyrus, He is my shepherd'],
    terms: [],
  },
  'ezr-1-3': {
    title: 'His God Be with Him, and Let Him Go Up',
    principle:
      'The decree let anyone who was willing go up. First principle: the return is voluntary, paid for, and foretold by a prophet.',
    sourceKeywords: ['Who is there among you of all his people', 'let him go up to Jerusalem', 'build the house of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezr-6-14': {
    title: 'They Builded and Finished It, According to the Commandment',
    principle:
      'The work prospered through the preaching of Haggai and Zechariah, and three kings paid for it. First principle: the building is finished by the word and by the decree. Prophets preach, kings pay, and the elders build.',
    sourceKeywords: ['they prospered through the prophesying', 'finished it', 'according to the commandment of Cyrus, and Darius, and Artaxerxes'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezr-7-10': {
    title: 'Ezra Had Prepared His Heart to Seek the Law',
    principle:
      'Ezra sought the law, did it, and taught it: that is the order of a prepared heart. First principle: this is the order of the ministry too. Seeking comes before doing, and doing comes before teaching.',
    sourceKeywords: ['prepared his heart', 'to seek the law of the LORD, and to do it', 'to teach in Israel'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezr-9-9': {
    title: 'Our God Hath Not Forsaken Us in Our Bondage',
    principle:
      'God showed mercy in front of the kings of Persia. He gave the people new life, a house to raise up, and a wall in Judah. First principle: grace brings life back and repairs what was broken. The people had been left alone, and they rebuilt a wall and a worship.',
    sourceKeywords: ['our God hath not forsaken us in our bondage', 'extended mercy', 'to repair the desolations thereof'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Nehemiah ────────────────────────────────────
  'neh-1-5': {
    title: 'O LORD God of Heaven, the Great and Terrible God',
    principle:
      'The God who keeps his covenant and shows mercy was addressed about the ruins of Jerusalem. First principle: Nehemiah\'s prayer begins where all intercession, that is praying for others, begins. It begins with God\'s greatness and the fear of him, and with covenant mercy for those who love God and keep his commandments.',
    sourceKeywords: ['O LORD God of heaven', 'keepeth covenant and mercy', 'for them that love him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'neh-9-17': {
    title: '"Thou art a God ready to pardon" — the Levites\' own confession.',
    principle:
      'The Levites confessed that the people had hardened their necks against God. First principle: Nehemiah 9 is one long chapter of history, and it proves one thing. God is always more ready to pardon than his people are to rebel.',
    sourceKeywords: ['a God ready to pardon', 'gracious and merciful, slow to anger', 'and forsookest them not'],
    fulfillmentKeywords: ['The LORD is longsuffering, and of great mercy'],
    terms: [],
  },
  'neh-9-33': {
    title: '"Thou art just in all that is brought upon us" — the people admit that God was right.',
    principle:
      'God was right, and the people were wicked. First principle: the confession gives up the case. It agrees that God\'s justice was right, and the people own their wickedness. Daniel prays in the same way.',
    sourceKeywords: ['thou art just in all that is brought upon us', 'thou hast done right', 'we have done wickedly'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Esther ──────────────────────────────────────
  'est-4-14': {
    title: 'Who Knoweth Whether Thou Art Come to the Kingdom for Such a Time as This?',
    principle:
      'If Esther kept silent, she and her father\'s house would be destroyed. But rescue would rise for the Jews from another place. First principle: God\'s care had put her in that place. Mordecai\'s question turns her fasting into courage. Perhaps the throne room is the very reason you exist.',
    sourceKeywords: ['if thou altogether holdest thy peace', 'enlargement and deliverance arise to the Jews from another place', 'for such a time as this'],
    fulfillmentKeywords: ['God did send me before you to preserve life'],
    terms: [],
  },
  'est-8-17': {
    title: 'Many of the People of the Land Became Jews',
    principle:
      'The Jews had joy and gladness, a feast and a good day across the empire. First principle: the day of doom turned into a day of reversal. Many people became Jews because fear of the Jews fell on them, and the Jewish feast drew the nations in.',
    sourceKeywords: ['joy and gladness, a feast and a good day', 'many of the people of the land became Jews', 'the fear of the Jews fell upon them'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Job ─────────────────────────────────────────
  'job-1-21': {
    title: 'The LORD Gave, and the LORD Hath Taken Away',
    principle:
      'Job lost everything, and he still said, "the LORD gave, and the LORD hath taken away;". First principle: Job came into the world with nothing and would leave with nothing. So he owned that the Giver has the right to take back what he gave, and he would not let sin onto his lips.',
    sourceKeywords: ['Naked came I out of my mother\'s womb', 'the LORD gave, and the LORD hath taken away', 'blessed be the name of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-2-10': {
    title: 'Shall We Receive Good at the Hand of God, and Not Evil?',
    principle:
      'Job answers the second trial, and he does not sin with his lips. First principle: Job refuses to treat God as a deal. He takes both good and trouble from God\'s hand, and he does not charge God with folly.',
    sourceKeywords: ['Thou speakest as one of the foolish women', 'shall we receive good... and shall we not receive evil', 'did not Job sin with his lips'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-5-13': {
    title: 'He Taketh the Wise in Their Own Craftiness',
    principle:
      'Eliphaz says God catches the crafty in their own cunning. First principle: that saying is true even coming from a wrong friend, and Scripture uses it twice — Paul quotes it against the wisdom of this world.',
    sourceKeywords: ['He taketh the wise in their own craftiness', 'the counsel of the froward is carried headlong'],
    fulfillmentKeywords: ['He taketh the wise in their own craftiness'],
    terms: [],
  },
  'job-9-8': {
    title: 'Which Alone Spreadeth Out the Heavens',
    principle:
      'And treadeth upon the waves of the sea. First principle: God alone stretched out the heavens, and the One who later walked on the water of Galilee is the same Person.',
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
      'Not one — from the man of Uz. First principle: Job asks who can bring a clean thing out of an unclean, and the new birth gives the answer: that which is born of flesh is flesh.',
    sourceKeywords: ['Who can bring a clean thing out of an unclean', 'not one'],
    fulfillmentKeywords: ['That which is born of the flesh is flesh'],
    terms: [],
  },
  'job-16-19': {
    title: 'My Witness Is in Heaven, and My Record Is on High',
    principle:
      'Job\'s friends are accusing him, and he appeals to a witness in heaven. First principle: the court on earth has ruled against him, but heaven keeps the record — a first hint of the Advocate doctrine, long before the Incarnation.',
    sourceKeywords: ['my witness is in heaven', 'my record is on high'],
    fulfillmentKeywords: ['we have an advocate with the Father'],
    terms: [],
  },
  'job-19-26': {
    title: 'Yet in My Flesh Shall I See God',
    principle:
      'Worms destroy the body, and yet the eyes see God in flesh. First principle: Job speaks this hope right from the floor of his suffering, and what he expects is not a ghost. He expects a body made new.',
    sourceKeywords: ['though after my skin worms destroy this body', 'yet in my flesh shall I see God'],
    fulfillmentKeywords: ['this mortal must put on immortality'],
    terms: [],
  },
  'job-33-23': {
    title: 'If There Be a Messenger with Him, an Interpreter, One among a Thousand',
    principle:
      'Elihu describes an interpreter who shows a man what is right. First principle: Elihu names the need — a mediator who is one among a thousand, and that rare find is supplied by the one Mediator.',
    sourceKeywords: ['a messenger with him', 'an interpreter, one among a thousand', 'to shew unto man his uprightness'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-38-1': {
    title: 'Then the LORD Answered Job out of the Whirlwind',
    principle:
      'The answer comes from the storm, not from the argument. First principle: after thirty-one chapters of human speech, God speaks from the whirlwind — and he asks about creation instead of answering the complaints of the creature.',
    sourceKeywords: ['the LORD answered Job out of the whirlwind'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'job-42-5': {
    title: 'I Have Heard of Thee by the Hearing of the Ear',
    principle:
      'But now mine eye seeth Thee — and Job repents in dust. First principle: hearing about God turns into seeing him, and the meeting turns head knowledge into humility.',
    sourceKeywords: ['I have heard of thee by the hearing of the ear', 'but now mine eye seeth thee'],
    fulfillmentKeywords: ['we beheld his glory'],
    terms: [],
  },
  // ── Hand-written expansion: Proverbs ────────────────────────────────────
  'pro-3-5': {
    title: 'Trust in the LORD with All Thine Heart',
    principle:
      'Do not lean on your own understanding. First principle: the lean of your heart is the whole matter — you trust God with all your weight or you do not trust him at all. Your own understanding is the other crutch you want to lean on.',
    sourceKeywords: ['Trust in the LORD with all thine heart', 'lean not unto thine own understanding'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'pro-3-11': {
    title: 'My Son, Despise Not the Chastening of the LORD',
    principle:
      'Correction proves that you are a son, and giving up in weariness is forbidden. First principle: Hebrews quotes this proverb twice to change how we see suffering, and the child who is corrected is the child who truly belongs.',
    sourceKeywords: ['despise not the chastening of the LORD', 'neither be weary of his correction'],
    fulfillmentKeywords: ['For whom the Lord loveth he chasteneth'],
    terms: [],
  },
  'pro-3-34': {
    title: 'He Giveth Grace unto the Lowly',
    principle:
      'God scorns the scorners, and he gives grace to the lowly. First principle: James and Peter both quote this proverb word for word to show that the humble are the ones who receive grace.',
    sourceKeywords: ['he scorneth the scorners', 'giveth grace unto the lowly'],
    fulfillmentKeywords: ['God resisteth the proud, but giveth grace unto the humble'],
    terms: [],
  },
  'pro-8-22': {
    title: 'The LORD Possessed Me in the Beginning of His Way',
    principle:
      'Wisdom speaks as one who already existed before creation. First principle: Proverbs 8 pictures Wisdom as a person, and John 1 and Colossians 1 are the background music of that chapter — the Son is the Wisdom by whom God made everything.',
    sourceKeywords: ['possessed me in the beginning', 'before his works of old'],
    fulfillmentKeywords: ['All things were made by him', 'by him all things consist'],
    terms: [],
  },
  'pro-8-23': {
    title: 'I Was Set Up from Everlasting',
    principle:
      'Wisdom already existed before the earth did. First principle: living forever belongs to God alone, yet here Wisdom says it about herself. The early teachers of the church read this as the Son\'s eternal generation, which means the Son has always existed with the Father.',
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
      'If God repays the righteous here on earth, what will he do to the wicked? First principle: God\'s judgment starts with his own people, and Peter quotes this same argument when he speaks of where the sinner will end up.',
    sourceKeywords: ['the righteous shall be recompensed in the earth', 'much more the wicked and the sinner'],
    fulfillmentKeywords: ['if the righteous scarcely be saved, where shall the ungodly appear'],
    terms: [],
  },
  'pro-15-3': {
    title: 'The Eyes of the LORD Are in Every Place',
    principle:
      'God sees evil and good alike. First principle: God sees everything — no deed escapes the eyes that Hebrews says are open before the One with whom we have to do, the God we must answer to.',
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
      'No one can say he has made his own heart clean. First principle: this question has only one answer, because cleaning a heart takes the One who made the heart. John names the man who claims he has done it as the one who deceives himself.',
    sourceKeywords: ['I have made my heart clean', 'I am pure from my sin'],
    fulfillmentKeywords: ['If we say that we have no sin, we deceive ourselves'],
    terms: [],
  },
  'pro-20-20': {
    title: 'Whoso Curseth His Father or His Mother',
    principle:
      'The lamp of the man who curses his parents goes out in thick darkness. First principle: when a child despises his father or mother, his light is put out. Exodus commands death for that sin, and this proverb turns the command into the picture of a snuffed lamp.',
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
      'Doing justice matters more to God than the offerings you bring to his altar. First principle: Samuel, Isaiah, Hosea and Jesus all teach that mercy pleases God more than sacrifice.',
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
      'The people curse the judge who calls the wicked righteous. First principle: a court that calls wickedness righteous brings a curse on the nation, and this proverb is the people\'s own verdict on judges who bend the law.',
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
      'The fool repeats his folly. First principle: the warning here is a man who goes back to his old sin and is never made new. Peter quotes the dog, and he adds the washed sow, so the problem is the nature and not the habit.',
    sourceKeywords: ['a dog returneth to his vomit', 'a fool returneth to his folly'],
    fulfillmentKeywords: ['The dog is turned to his own vomit again'],
    terms: [],
  },
  'pro-27-19': {
    title: 'As in Water Face Answereth to Face',
    principle:
      'Your heart shows itself in how you see others. First principle: you come to know your own heart by looking at how you see other people, and this proverb keeps testing you.',
    sourceKeywords: ['as in water face answereth to face', 'so the heart of man to man'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'pro-29-18': {
    title: 'Where There Is No Vision, the People Perish',
    principle:
      'The person who keeps God\'s law is happy, and that is the other road, the one that leads away from chaos. First principle: without a vision God has given, a people who rule themselves fall apart, and the book of Judges and Isaiah\'s straying sheep give the same diagnosis.',
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
      'Wine is for the person who is dying and for the one whose heart is heavy; it is a mercy, not a way of life. First principle: this proverb gives strong drink only to the perishing, so it quietly forbids it for judges and kings.',
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
      'God shall judge the righteous and the wicked. First principle: there is a time for every purpose and for every work. The Preacher saw injustice all around him. He held on to this promise. God\'s courtroom is still coming.',
    sourceKeywords: ['God shall judge the righteous and the wicked', 'a time there for every purpose'],
    fulfillmentKeywords: ['he hath appointed a day, in the which he will judge the world'],
    terms: [],
  },
  'ecc-7-20': {
    title: 'There Is Not a Just Man upon Earth',
    principle:
      'There is not a just man upon earth, that doeth good, and sinneth not. First principle: nobody on earth does good all the time. That is the wisdom book\'s plain word on sin. Romans 3 builds a chain of verses that say no one is righteous. This line is part of that chain.',
    sourceKeywords: ['not a just man upon earth', 'that doeth good, and sinneth not'],
    fulfillmentKeywords: ['There is none righteous, no, not one'],
    terms: [],
  },
  'ecc-9-10': {
    title: 'Whatsoever Thy Hand Findeth to Do, Do It with Thy Might',
    principle:
      'You are going to the grave. In that place there is no work and no knowledge. First principle: the grave is silent. Do your work while you are alive. Work belongs to the daylight. It does not belong to the dark place after death.',
    sourceKeywords: ['Whatsoever thy hand findeth to do', 'do it with thy might', 'in the grave, whither thou goest'],
    fulfillmentKeywords: ['I must work the works of him that sent me, while it is day'],
    terms: [],
  },
  'ecc-12-7': {
    title: 'Then Shall the Dust Return to the Earth',
    principle:
      'Dust to dust. First principle: at death a man goes two ways. His body goes back to the soil. His spirit goes back to God who gave it. This is Genesis 2:7 in reverse.',
    sourceKeywords: ['the dust return to the earth', 'the spirit shall return unto God who gave it'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ecc-12-13': {
    title: 'Fear God, and Keep His Commandments',
    principle:
      'Fear God, and keep his commandments. First principle: this is the whole duty of man. Everything here passes like a breath. Two things still stand. We are to fear God. We are to obey him.',
    sourceKeywords: ['the conclusion of the whole matter', 'Fear God, and keep his commandments', 'the whole duty of man'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ecc-12-14': {
    title: 'God Shall Bring Every Work into Judgment',
    principle:
      'God will bring every work into judgment, including every secret thing, good or evil. First principle: nothing hidden escapes that day. Paul and John both say the same thing about it.',
    sourceKeywords: ['every work into judgment', 'with every secret thing', 'whether it be good, or whether it be evil'],
    fulfillmentKeywords: ['God shall bring every work into judgment'],
    terms: [],
  },

  // ── Hand-written expansion: Song of Solomon ─────────────────────────────
  'sng-1-3': {
    title: 'Thy Name Is as Ointment Poured Forth',
    principle:
      'Thy name is as ointment poured forth. The virgins love the beloved for that name. First principle: the name that smells like ointment points forward to the anointed One, the promised King, Jesus. The costly nard poured out at Bethany says the same thing.',
    sourceKeywords: ['the savour of thy good ointments', 'thy name is as ointment poured forth'],
    fulfillmentKeywords: ['the house was filled with the odour of the ointment'],
    terms: [],
  },
  'sng-2-16': {
    title: 'My Beloved Is Mine, and I Am His',
    principle:
      'My beloved is mine, and I am his. He feeds his flock among the lilies. First principle: these two belong to each other. That is the language of God\'s binding promise. It is also the center of this song.',
    sourceKeywords: ['My beloved is mine, and I am his', 'he feedeth among the lilies'],
    fulfillmentKeywords: ['I am the good shepherd, and know my sheep'],
    terms: [],
  },
  'sng-4-10': {
    title: 'How Much Better Is Thy Love than Wine',
    principle:
      'Your love is better than wine. The smell of your ointments is better than all spices. First principle: this love is the measure of the marriage song. It is also the measure of the Messiah\'s joy. The Messiah is the promised King, Jesus. His joy is better wine still.',
    sourceKeywords: ['How fair is thy love, my sister, my spouse', 'better is thy love than wine', 'the smell of thine ointments'],
    fulfillmentKeywords: ['and the smell of thine ointments than all spices'],
    terms: [],
  },
  'sng-5-1': {
    title: 'I Am Come into My Garden, My Sister, My Spouse',
    principle:
      'I have gathered my myrrh with my spice. Friends are invited to drink abundantly. First principle: he comes into his garden. He opens the feast to his friends. This is the supper language of the covenant meal — the meal of God\'s binding promise.',
    sourceKeywords: ['I am come into my garden', 'my sister, my spouse', 'eat, O friends; drink abundantly'],
    fulfillmentKeywords: ['this is my body... this cup is the new testament'],
    terms: [],
  },
  'sng-5-16': {
    title: 'His Mouth Is Most Sweet: Yea, He Is Altogether Lovely',
    principle:
      'He is my beloved and my friend. He is altogether lovely. First principle: no one can be praised higher than that. That one phrase, altogether lovely, is the whole description. The Friend of sinners is the friend this song is about.',
    sourceKeywords: ['His mouth is most sweet', 'he is altogether lovely', 'this is my beloved, and this is my friend'],
    fulfillmentKeywords: ['Ye are my friends, if ye do whatsoever I command you'],
    terms: [],
  },
  'sng-8-6': {
    title: 'Set Me as a Seal upon Thine Heart',
    principle:
      'Love is strong as death. Jealousy is cruel as the grave. Its coals are coals of fire, a blazing flame. First principle: this love is as strong as death and the grave. The seal on the heart and on the arm marks God\'s binding promise, kept for one person alone.',
    sourceKeywords: ['a seal upon thine heart', 'love is strong as death', 'the coals thereof are coals of fire'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'sng-8-7': {
    title: 'Many Waters Cannot Quench Love',
    principle:
      'Many waters cannot quench love. A man can give everything in his house. It still cannot buy love. First principle: nothing can put love out. No money can buy it. The flood fails. The fortune fails. Revelation shows the marriage that follows this love.',
    sourceKeywords: ['Many waters cannot quench love', 'neither can the floods drown it', 'it would utterly be contemned'],
    fulfillmentKeywords: ['the marriage of the Lamb is come'],
    terms: [],
  },

  // ── Hand-written expansion: Jeremiah ────────────────────────────────────
  'jer-1-5': {
    title: 'Before I Formed Thee in the Belly I Knew Thee',
    principle:
      'God set Jeremiah apart and appointed him a prophet before he was born. First principle: God gives the call before birth. Jeremiah, John the Baptist, and the Servant were each called before they were born.',
    sourceKeywords: ['Before I formed thee in the belly I knew thee', 'I sanctified thee', 'ordained thee a prophet unto the nations'],
    fulfillmentKeywords: ['he shall be filled with the Holy Ghost, even from his mother\'s womb'],
    terms: [],
  },
  'jer-7-11': {
    title: 'Is This House... Become a Den of Robbers?',
    principle:
      'The house that carries the LORD\'s name has become a robbers\' cave, and the LORD sees it. First principle: Jeremiah\'s temple sermon is the text Jesus used when He cleansed the temple. The people trusted in the building while they practiced robbery.',
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
      'In His days Judah is saved and Israel dwells safely under the Branch\'s new name. First principle: the name tells us how God saves people. The King Himself is the righteousness His people do not have.',
    sourceKeywords: ['Judah shall be saved', 'Israel shall dwell safely', 'THE LORD OUR RIGHTEOUSNESS'],
    fulfillmentKeywords: ['who of God is made unto us... righteousness'],
    terms: [],
  },
  'jer-25-12': {
    title: 'When Seventy Years Are Accomplished',
    principle:
      'Babylon is punished after the numbered years. First principle: the exile has an end date. God wrote that date before the exile began. Daniel reads this very letter, and then he prays.',
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
      'They come home weeping, and God leads them on straight ways beside rivers. First principle: the father\'s heart leads those who weep. The title of firstborn over Ephraim gives the lost son back his place.',
    sourceKeywords: ['with weeping, and with supplications', 'walk by the rivers of waters', 'Ephraim is my firstborn'],
    fulfillmentKeywords: ['Out of Egypt have I called my son'],
    terms: [],
  },
  'jer-31-33': {
    title: 'I Will Put My Law in Their Inward Parts',
    principle:
      'The law of the new covenant is written on hearts. God is theirs, and they are His. First principle: the law is written on the hearts of God\'s people. Hebrews quotes this as the charter of the better covenant.',
    sourceKeywords: ['the covenant that I will make', 'I will put my law in their inward parts', 'write it in their hearts'],
    fulfillmentKeywords: ['I will put my laws into their hearts'],
    terms: [],
  },
  'jer-31-34': {
    title: 'They Shall All Know Me... I Will Remember Their Sin No More',
    principle:
      'No more neighbor-teaching; universal knowledge, forgiven sin. First principle: in this covenant the knowledge of God is direct, and the forgiveness is total. It reaches from the least to the greatest, and their sin is remembered never.',
    sourceKeywords: ['they shall all know me', 'from the least of them unto the greatest', 'I will remember their sin no more'],
    fulfillmentKeywords: ['All shall know me', 'their sins and their iniquities will I remember no more'],
    terms: [],
  },
  'jer-32-38': {
    title: 'They Shall Be My People, and I Will Be Their God',
    principle:
      'God\'s binding promise is for the land when the people are brought back together. First principle: this promise stands at the heart of the chapters about the return. Paul quotes it of the temple, which is the church, and John quotes it of the new earth.',
    sourceKeywords: ['they shall be my people', 'I will be their God'],
    fulfillmentKeywords: ['and they shall be my people'],
    terms: [],
  },
  'jer-32-40': {
    title: 'I Will Make an Everlasting Covenant with Them',
    principle:
      'God will never turn away from doing them good, and He puts His fear in their hearts so that they will never depart from Him. First principle: in the everlasting covenant God does the keeping. The fear He places in them keeps the people He keeps.',
    sourceKeywords: ['an everlasting covenant', 'that I will not turn away from them, to do them good', 'they shall not depart from me'],
    fulfillmentKeywords: ['he shall... have made with them an everlasting covenant'],
    terms: [],
  },
  'jer-33-14': {
    title: 'I Will Perform That Good Thing Which I Have Promised',
    principle:
      'The days come when the promise is performed for Israel and Judah. First principle: the good thing has a date on it. The Branch-ruler of the verses just before is the one who brings it about.',
    sourceKeywords: ['the days come', 'I will perform that good thing', 'promised unto the house of Israel and to the house of Judah'],
    fulfillmentKeywords: ['Behold, the days come, saith the LORD, that I will raise unto David a righteous Branch'],
    terms: [],
  },
  'jer-44-4': {
    title: 'Oh, Do Not This Abominable Thing That I Hate',
    principle:
      'The LORD sent the prophets, rising early to send them, and they pleaded against the abomination. First principle: idolatry is the abomination the LORD hates. He pleaded against it again and again, and the people ignored the ones He sent until they were carried into exile.',
    sourceKeywords: ['I sent unto you all my servants the prophets', 'rising early and sending them', 'do not this abominable thing that I hate'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jer-50-20': {
    title: 'The Iniquity of Israel Shall Be Sought for, and There Shall Be None',
    principle:
      'Their sins are not found, and the ones kept safe are pardoned. First principle: the search finds nothing. The pardon is so complete that the search for the remnant\'s sin comes up empty.',
    sourceKeywords: ['the iniquity of Israel shall be sought for, and there shall be none', 'they shall not be found', 'I will pardon them whom I reserve'],
    fulfillmentKeywords: ['their sins and their iniquities will I remember no more'],
    terms: [],
  },
  'jer-51-7': {
    title: 'Babylon Hath Been a Golden Cup in the LORD\'S Hand',
    principle:
      'The nations are drunk and mad on her wine. First principle: Babylon is God\'s instrument. Babylon is also the drink that makes the world drunk. Revelation 14 and 18 take up the cup for the final fall.',
    sourceKeywords: ['a golden cup in the LORD\'S hand', 'made all the earth drunken', 'the nations are mad'],
    fulfillmentKeywords: ['Babylon the great is fallen... the wine of the wrath of her fornication'],
    terms: [],
  },

  // ── Hand-written expansion: Lamentations ────────────────────────────────
  'lam-1-12': {
    title: 'Behold, and See If There Be Any Sorrow Like unto My Sorrow',
    principle:
      'The crowd walking past is called to stop and look. First principle: the daughter of Zion grieves on the day of God\'s anger. No other sorrow is like hers. Jesus, Jerusalem\'s greater Son, walked through that same sorrow when He suffered.',
    sourceKeywords: ['any sorrow like unto my sorrow'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-2-11': {
    title: 'Mine Eyes Do Fail with Tears',
    principle:
      'The weeping prophet pours out his heart for the children who were destroyed. First principle: his grief shows itself in his body. Jeremiah wept over the city, and the Man of sorrows wept over Jerusalem in the same way.',
    sourceKeywords: ['Mine eyes do fail with tears', 'my liver is poured upon the earth', 'the sucklings swoon in the streets'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-3-22': {
    title: 'It Is of the LORD\'S Mercies That We Are Not Consumed',
    principle:
      'His compassions fail not; they are new every morning. First principle: we are not consumed because God is merciful. His mercy is fresh every day, and Israel did nothing to earn it.',
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
      'They turn back to the LORD. First principle: first we search our ways, and then we turn. We lift our hearts up with our hands.',
    sourceKeywords: ['Let us search and try our ways', 'turn again to the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'lam-5-19': {
    title: 'Thou, O LORD, Remainest for Ever',
    principle:
      'The throne stands from generation to generation. First principle: God\'s throne stays the same while everything else falls apart. So the lament ends on what lasts, not on what was lost.',
    sourceKeywords: ['Thou, O LORD, remainest for ever', 'thy throne from generation to generation'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Ezekiel ─────────────────────────────────────
  'ezk-1-1': {
    title: 'The Heavens Were Opened, and I Saw Visions of God',
    principle:
      'A captive by Chebar sees open heavens. First principle: God speaks to His people in exile. He gives the visions to a prisoner beside a river, not to a priest in the temple.',
    sourceKeywords: ['among the captives by the river of Chebar', 'the heavens were opened', 'I saw visions of God'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-1-26': {
    title: 'The Likeness of a Throne... the Appearance of a Man above upon It',
    principle:
      'Sapphire throne, man-like figure above it. First principle: the glory looks like a man. Ezekiel\'s throne-man is Daniel\'s Son of man and Revelation\'s glorified Jesus.',
    sourceKeywords: ['the likeness of a throne', 'as the appearance of a sapphire stone', 'the appearance of a man above upon it'],
    fulfillmentKeywords: ['one like unto the Son of man'],
    terms: [],
  },
  'ezk-3-17': {
    title: 'Son of Man, I Have Made Thee a Watchman',
    principle:
      'Hear the word at my mouth; warn them from me. First principle: the watchman hears first, then warns. If he stays silent, the blood is on his head.',
    sourceKeywords: ['I have made thee a watchman', 'hear the word at my mouth', 'give them warning from me'],
    fulfillmentKeywords: ['I have not shunned to declare unto you all the counsel of God'],
    terms: [],
  },
  'ezk-11-19': {
    title: 'I Will Give Them One Heart, and a New Spirit',
    principle:
      'Stony heart removed, heart of flesh given. First principle: God promises a new heart under the new covenant — God\'s binding promise. He gives one heart and a new spirit, and He trades flesh for stone.',
    sourceKeywords: ['I will give them one heart', 'a new spirit within you', 'give them an heart of flesh'],
    fulfillmentKeywords: ['I will put my laws into their hearts'],
    terms: [],
  },
  'ezk-12-22': {
    title: 'The Days Are Prolonged, and Every Vision Faileth',
    principle:
      'The scoffing proverb quoted for demolition. First principle: when the vision is slow to come, mockers rise. Peter\'s latter-day mockers quote the same proverb until the flood-logic answers them.',
    sourceKeywords: ['what is that proverb', 'The days are prolonged', 'every vision faileth'],
    fulfillmentKeywords: ['Where is the promise of his coming?'],
    terms: [],
  },
  'ezk-18-4': {
    title: 'The Soul That Sinneth, It Shall Die',
    principle:
      'All souls are mine — father and son each their own. First principle: God owns every soul, and each one answers for itself. A soul dies for its own sin.',
    sourceKeywords: ['all souls are mine', 'the soul that sinneth, it shall die'],
    fulfillmentKeywords: ['the wages of sin is death'],
    terms: [],
  },
  'ezk-18-20': {
    title: 'The Son Shall Not Bear the Iniquity of the Father',
    principle:
      'Righteousness on the righteous, wickedness on the wicked. First principle: God is fair. Guilt does not pass to the son, and innocence is not inherited. Each soul answers for itself.',
    sourceKeywords: ['The son shall not bear the iniquity of the father', 'the righteousness of the righteous shall be upon him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-18-32': {
    title: 'I Have No Pleasure in the Death of Him That Dieth',
    principle:
      'Turn yourselves, and live ye. First principle: God takes pleasure in a life that turns to Him, not in a death carried out. His reluctance is why He invites.',
    sourceKeywords: ['I have no pleasure in the death of him that dieth', 'wherefore turn yourselves, and live ye'],
    fulfillmentKeywords: ['who will have all men to be saved'],
    terms: [],
  },
  'ezk-20-20': {
    title: 'Hallow My Sabbaths; They Shall Be a Sign',
    principle:
      'The sign that answers I am the LORD your God. First principle: the Sabbath is the sign of the covenant — God\'s binding promise. God set apart a day of time, and by it His people know Him.',
    sourceKeywords: ['hallow my sabbaths'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-21-27': {
    title: 'I Will Overturn, Overturn, Overturn, Until He Come',
    principle:
      'The throne overturned until the Rightful One arrives, and it is given Him. First principle: God overturns the crown three times. That is how Judah is governed in the meantime, and the crown waits for Shiloh.',
    sourceKeywords: ['until he come whose right it is'],
    fulfillmentKeywords: ['The sceptre shall not depart from Judah... until Shiloh come'],
    terms: [],
  },
  'ezk-22-26': {
    title: 'Her Priests Have Put No Difference between the Holy and Profane',
    principle:
      'Law violated, sabbaths hidden from eyes, God profaned. First principle: the priest\'s first duty is to tell holy from profane and clean from unclean. When those lines are erased, the Name is profaned.',
    sourceKeywords: ['violated my law', 'no difference between the holy and profane', 'hid their eyes from my sabbaths'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-28-2': {
    title: 'Thou Hast Said, I Am a God, I Sit in the Seat of God',
    principle:
      'The prince of Tyrus makes himself a god; yet "thou art a man." First principle: the man-god delusion is the oldest boast. Paul\'s man of sin seats himself the same way.',
    sourceKeywords: ['thine heart is lifted up', 'I am a God, I sit in the seat of God', 'yet thou art a man, and not God'],
    fulfillmentKeywords: ['so that he as God sitteth in the temple of God'],
    terms: [],
  },
  'ezk-33-11': {
    title: 'I Have No Pleasure in the Death of the Wicked',
    principle:
      'As I live — turn ye, turn ye; why will ye die? First principle: God swears an oath that He takes no pleasure in death, and He pleads with the sinner to turn. That question why is the invitation.',
    sourceKeywords: ['I have no pleasure in the death of the wicked'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-34-11': {
    title: 'Behold, I, Even I, Will Both Search My Sheep',
    principle:
      'The doubled I — God Himself does the seeking the shepherds failed at. First principle: God steps in where the leaders failed. He says I, even I, and He searches for His sheep Himself.',
    sourceKeywords: ['I, even I, will both search my sheep'],
    fulfillmentKeywords: ['the Son of man is come to save that which was lost'],
    terms: [],
  },
  'ezk-34-24': {
    title: 'I the LORD Will Be Their God, and My Servant David a Prince',
    principle:
      'God with them, David-prince among them — I the LORD have spoken it. First principle: God the shepherd and David the prince rule together, and the two do not contradict. One flock has God as its shepherd and David as its prince.',
    sourceKeywords: ['I the LORD will be their God', 'my servant David a prince among them', 'I the LORD have spoken it'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-36-25': {
    title: 'Then Will I Sprinkle Clean Water upon You',
    principle:
      'Cleansed from filthiness and idols. First principle: the sprinkling is a real cleansing, not a ceremony. God names idols and filthiness as the two things the water washes away.',
    sourceKeywords: ['sprinkle clean water upon you, and ye shall be clean', 'from all your filthiness, and from all your idols'],
    fulfillmentKeywords: ['let us draw near... our bodies washed with pure water'],
    terms: [],
  },
  'ezk-36-27': {
    title: 'I Will Put My Spirit Within You, and Cause You to Walk',
    principle:
      'Statutes kept because the Spirit indwells. First principle: obedience has a power inside it. The Spirit lives in a person, and His presence is what causes that person to walk in God\'s statutes.',
    sourceKeywords: ['I will put my spirit within you', 'cause you to walk in my statutes', 'ye shall keep my judgments, and do them'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-37-5': {
    title: 'Behold, I Will Cause Breath to Enter into You',
    principle:
      'Dry bones hear the word and live. First principle: this answers the question asked in the valley. God gives breath by the word of His command, and He preaches resurrection to an army of bones.',
    sourceKeywords: ['I will cause breath to enter into you'],
    fulfillmentKeywords: ['all that are in the graves shall hear his voice, and shall come forth'],
    terms: [],
  },
  'ezk-37-24': {
    title: 'David My Servant Shall Be King over Them',
    principle:
      'One shepherd, judgments walked, statutes done. First principle: one Shepherd-King rules the reunited kingdom. David\'s title is the reason the people walk in God\'s statutes.',
    sourceKeywords: ['David my servant shall be king over them', 'they all shall have one shepherd', 'walk in my judgments'],
    fulfillmentKeywords: ['other sheep I have... there shall be one fold, and one shepherd'],
    terms: [],
  },
  'ezk-37-27': {
    title: 'My Tabernacle Also Shall Be with Them',
    principle:
      'The dwelling-promise renewed to resurrected Israel. First principle: God\'s dwelling place stands with them, and the same promise carries past the valley of dry bones. Revelation quotes it for the redeemed.',
    sourceKeywords: ['My tabernacle also shall be with them', 'I will be their God, and they shall be my people'],
    fulfillmentKeywords: ['Behold, the tabernacle of God is with men'],
    terms: [],
  },
  'ezk-40-1': {
    title: 'In the Visions of God Brought He Me into the Land of Israel',
    principle:
      'Twenty-five years after captivity, the hand brings him to the city that had been struck down. First principle: God dates this vision. The tour that measures the temple answers the vision of the glory leaving the temple in chapters 10-11.',
    sourceKeywords: ['the visions of God'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-43-2': {
    title: 'The Glory of the God of Israel Came from the Way of the East',
    principle:
      'Many-waters voice; the earth shined with His glory. First principle: the glory comes back by the east gate. That is the same way it left, and it is the way it returns.',
    sourceKeywords: ['the glory of the God of Israel came from the way of the east', 'his voice was like a noise of many waters', 'the earth shined with his glory'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-43-7': {
    title: 'The Place of My Throne, and the Place of the Soles of My Feet',
    principle:
      'Dwelling in the midst forever; the house no more defiled. First principle: God\'s throne shows He rules, and the soles of His feet show He is near. He ends the years of defilement by coming to live there Himself.',
    sourceKeywords: ['the place of my throne', 'the place of the soles of my feet', 'I will dwell in the midst'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'ezk-47-1': {
    title: 'Waters Issued Out from under the Threshold of the House',
    principle:
      'East-flowing water from the altar side. First principle: life flows out of the temple. The trickle at the threshold becomes the knee-deep, hip-deep river of the vision.',
    sourceKeywords: ['waters issued out from under the threshold of the house'],
    fulfillmentKeywords: ['a pure river of water of life... proceeding out of the throne'],
    terms: [],
  },
  'ezk-47-12': {
    title: 'All Trees for Meat, Whose Leaf Shall Not Fade',
    principle:
      'New fruit by his months; leaf for medicine. First principle: the trees fed by God\'s dwelling place never fade. Revelation\'s tree of life borrows the months and the healing leaves.',
    sourceKeywords: ['whose leaf shall not fade'],
    fulfillmentKeywords: ['the leaves of the tree were for the healing of the nations'],
    terms: [],
  },
  // ── Hand-written expansion: Hosea / Joel / Amos / Obadiah / Jonah / Micah ─
  'hos-1-10': {
    title: 'Ye Are the Sons of the Living God',
    principle:
      'Israel will become as many as the sand. In the same place where God said "Ye are not my people", He now calls them "the sons of the living God". First principle: God reverses the rejection in the exact place where it happened. The place of rejection becomes the place of adoption. Paul applies this to Jew and Gentile alike.',
    sourceKeywords: ['as the sand of the sea', 'Ye are not my people', 'the sons of the living God'],
    fulfillmentKeywords: ['there shall they be called the children of the living God'],
    terms: [],
  },
  'hos-2-1': {
    title: 'Say Ye unto Your Brethren, Ammi; and to Your Sisters, Ruhamah',
    principle:
      'God renamed Hosea\'s children My-people and Having-obtained-mercy. First principle: Hosea\'s children are walking prophecies. God Himself says the word, and Lo-ammi becomes Ammi. The names preach the sermon.',
    sourceKeywords: ['Ammi', 'Ruhamah'],
    fulfillmentKeywords: ['which were not my people'],
    terms: [],
  },
  'hos-2-23': {
    title: 'I Will Sow Her unto Me in the Earth',
    principle:
      'God shows mercy on people who had never received mercy. He renames not-my-people as My-people. First principle: Hosea\'s sowing picture belongs to God\'s binding promise. The judgment-name Jezreel becomes the name of a planted inheritance.',
    sourceKeywords: ['I will sow her unto me in the earth', 'mercy upon her that had not obtained mercy', 'Thou art my people'],
    fulfillmentKeywords: ['I will call them my people, which were not my people'],
    terms: [],
  },
  'hos-6-6': {
    title: 'I Desired Mercy, and Not Sacrifice',
    principle:
      'God wants people to know Him, not to bring Him burnt offerings. First principle: this verse holds the two sides of prophetic religion together. Jesus quoted it twice against worship that kept the ritual but lost covenant love.',
    sourceKeywords: ['I desired mercy, and not sacrifice', 'the knowledge of God more than burnt offerings'],
    fulfillmentKeywords: ['I will have mercy, and not sacrifice'],
    terms: [],
  },
  'hos-13-14': {
    title: 'O Death, I Will Be Thy Plagues',
    principle:
      'God announces the ransom that buys His people back from the grave\'s power. Death becomes plague, and the grave becomes destruction. First principle: Paul drew his victory cry from this taunt against death. The plagues turn on death itself.',
    sourceKeywords: ['ransom them from the power of the grave', 'O death, I will be thy plagues', 'O grave, I will be thy destruction'],
    fulfillmentKeywords: ['O death, where is thy sting? O grave, where is thy victory?'],
    terms: [],
  },

  // ── Hand-written expansion: Joel ────────────────────────────────────────
  'jol-2-2': {
    title: 'A Day of Darkness and of Gloominess',
    principle:
      '"A day of darkness and of gloominess, a day of clouds and of thick darkness, as the morning spread upon the mountains: a great people and a strong; there hath not been ever the like, neither shall be any more after it, even to the years of many generations." First principle: that locust day is the pattern for the great and terrible day of the LORD. Jesus draws on the same words for the tribulation in Matthew 24. He says nothing like it has ever happened.',
    sourceKeywords: ['a day of darkness and of gloominess', 'a great people and a strong', 'there hath not been ever the like'],
    fulfillmentKeywords: ['then shall be great tribulation, such as was not'],
    terms: [],
  },
  'jol-3-10': {
    title: 'Beat Your Plowshares into Swords',
    principle:
      '"Let the weak say, I am strong." God turns the tools of farming into weapons of war, and He tells the weakest person to speak with courage. First principle: Joel and Isaiah run in opposite directions. Isaiah pictures nations beating swords into plowshares for peace. Joel calls the nations to beat plowshares into swords for battle. The same prophet era holds both endings, the harvest and the war.',
    sourceKeywords: ['Beat your plowshares into swords', 'your pruninghooks into spears', 'let the weak say, I am strong'],
    fulfillmentKeywords: ['they shall beat their swords into plowshares'],
    terms: [],
  },

  // ── Hand-written expansion: Amos ────────────────────────────────────────
  'amo-4-13': {
    title: 'He That Formeth the Mountains, and Createth the Wind',
    principle:
      'God declares to a person what he is thinking, and He walks on the high places of the earth. First principle: the hymns in Amos carry the judgment. The God who forms and reveals is the God who comes to punish.',
    sourceKeywords: ['he that formeth the mountains', 'createth the wind', 'declareth unto man what is his thought'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'amo-5-8': {
    title: 'Seek Him That Maketh the Seven Stars and Orion',
    principle:
      'God made the Pleiades and Orion. He turns the shadow of death into the morning. First principle: the One who named the constellations is the God you can seek. His power over the sky can turn your darkness into morning.',
    sourceKeywords: ['maketh the seven stars and Orion', 'turneth the shadow of death into the morning', 'The LORD is his name'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'amo-8-9': {
    title: 'I Will Cause the Sun to Go Down at Noon',
    principle:
      'In that day the sun went down at noon, and the clear day turned dark. First principle: that sign came true at the cross. Darkness covered the land from the sixth hour to the ninth.',
    sourceKeywords: ['the sun to go down at noon'],
    fulfillmentKeywords: ['there was darkness over all the land unto the ninth hour'],
    terms: [],
  },

  // ── Hand-written expansion: Obadiah ─────────────────────────────────────
  'oba-1-15': {
    title: 'The Day of the LORD Is near upon All the Heathen',
    principle:
      '"As thou hast done, it shall be done unto thee." First principle: this is how God repays people. Edom betrayed his brother, and that betrayal is the case in point. The day is near upon all the heathen, and the reward falls on their own head.',
    sourceKeywords: ['the day of the LORD is near upon all the heathen', 'as thou hast done, it shall be done unto thee', 'upon thine own head'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Jonah ───────────────────────────────────────
  'jon-2-1': {
    title: 'Then Jonah Prayed unto the LORD His God out of the Fish\'s Belly',
    principle:
      'Jonah prayed from inside the fish. Nobody would call that an address for prayer. First principle: the belly of the fish was a temple. The prophet prayed toward the holy place from the deep. God heard him.',
    sourceKeywords: ['out of the fish\'s belly'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jon-3-4': {
    title: 'Yet Forty Days, and Nineveh Shall Be Overthrown',
    principle:
      'Jonah walked one day. His sermon was five words long. First principle: no sermon was shorter. None reached farther. A Gentile capital repented at forty days\' notice.',
    sourceKeywords: ['Yet forty days, and Nineveh shall be overthrown'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jon-4-2': {
    title: 'I Knew That Thou Art a Gracious God',
    principle:
      'In his complaint Jonah repeats God\'s own description of Himself: gracious, merciful, slow to anger, repenting of evil. First principle: the runaway ran because he believed that mercy was real. Exodus 34 paints the same portrait. That portrait was the missionary\'s problem.',
    sourceKeywords: ['thou art a gracious God', 'merciful, slow to anger', 'repentest thee of the evil'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'jon-4-11': {
    title: 'Should Not I Spare Nineveh... and Also Much Cattle?',
    principle:
      'The city held Sixscore thousand people who cannot discern their right hand. It held much cattle too. First principle: the book ends on God\'s pity-question. God\'s compassion reaches people who do not know better. It reaches even the animals.',
    sourceKeywords: ['Should not I spare Nineveh', 'sixscore thousand persons', 'cannot discern between their right hand and their left hand'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Micah ───────────────────────────────────────
  'mic-4-1': {
    title: 'The Mountain of the House of the LORD Established',
    principle:
      'In the last days, people flow to the LORD\'s exalted mountain. First principle: this is the twin verse of Isaiah 2. The same pilgrimage mountain fills the vision of two prophets. One Spirit gave both men that vision.',
    sourceKeywords: ['in the last days', 'the mountain of the house of the LORD', 'people shall flow unto it'],
    fulfillmentKeywords: ['it shall come to pass in the last days'],
    terms: [],
  },
  'mic-4-3': {
    title: 'Nation Shall Not Lift Up a Sword against Nation',
    principle:
      'God rebukes strong nations far away. Their swords become plowshares. First principle: God\'s judgment starts the peace industry. Under the word from Jerusalem, nations stop learning war.',
    sourceKeywords: ['he shall judge among many people', 'beat their swords into plowshares', 'neither shall they learn war any more'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mic-5-1': {
    title: 'They Shall Smite the Judge of Israel with a Rod upon the Cheek',
    principle:
      'Israel is besieged. The Judge of Israel is struck on the cheek. First principle: the smitten Judge stands at the center of the siege. The ruler whose origin is everlasting is the first to be struck in humiliation.',
    sourceKeywords: ['he hath laid siege against us', 'smite the judge of Israel', 'with a rod upon the cheek'],
    fulfillmentKeywords: ['and when they had platted a crown of thorns... smote him on the head'],
    terms: [],
  },
  'mic-6-6': {
    title: 'Wherewith Shall I Come before the LORD?',
    principle:
      'This question asks how a man may come before the LORD. It brings a list of offerings. First principle: the question is right, but the currency he suggests is wrong. Calves and rivers of oil cannot pay. The answer follows in verse 8.',
    sourceKeywords: ['Wherewith shall I come before the LORD', 'burnt offerings, with calves of a year old'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mic-6-8': {
    title: 'What Doth the LORD Require of Thee?',
    principle:
      'Do justly, love mercy, walk humbly with thy God. First principle: here is true religion in three verbs. The person who follows God does what is just, loves mercy, and walks humbly. That is the answer to every ritual economy.',
    sourceKeywords: ['what doth the LORD require of thee', 'to do justly, and to love mercy', 'walk humbly with thy God'],
    fulfillmentKeywords: ['I will have mercy, and not sacrifice'],
    terms: [],
  },
  'mic-7-6': {
    title: 'A Man\'s Enemies Are the Men of His Own House',
    principle:
      'In God\'s judgment era, family turns against family. First principle: Jesus quotes this household-enmity saying for the sword He brings. The division cuts inside the closest circles.',
    sourceKeywords: ['the son dishonoureth the father', 'a man\'s enemies are the men of his own house'],
    fulfillmentKeywords: ['the father shall be divided against the son'],
    terms: [],
  },
  'mic-7-7': {
    title: 'Therefore I Will Look unto the LORD',
    principle:
      'The faithful few who are left watch and wait for the God of salvation. He will hear them. First principle: looking and waiting is their posture while families collapse. God promises to hear.',
    sourceKeywords: ['I will look unto the LORD', 'I will wait for the God of my salvation', 'my God will hear me'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mic-7-19': {
    title: 'Thou Wilt Cast All Their Sins into the Depths of the Sea',
    principle:
      'God shows compassion again. He subdues our iniquities. He casts their sins into the depths of the sea. First principle: God pictures pardon in a place on the map. The depths of the sea are His landfill for sin. Nobody ever dredges it.',
    sourceKeywords: ['he will have compassion upon us', 'subdue our iniquities', 'cast all their sins into the depths of the sea'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Nahum ───────────────────────────────────────
  'nam-1-3': {
    title: 'The LORD Is Slow to Anger, and Great in Power',
    principle:
      'The LORD will not at all acquit the wicked. He makes the whirlwind His way. The clouds are the dust of His feet. First principle: the LORD is excellent in two ways at once. He is patient with sinners. He still will not acquit the wicked. His majesty walks in the storm.',
    sourceKeywords: ['slow to anger, and great in power', 'will not at all acquit the wicked', 'the clouds are the dust of his feet'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'nam-1-7': {
    title: 'The LORD Is Good, a Strong Hold in the Day of Trouble',
    principle:
      'He knoweth them that trust in Him. First principle: this is the refuge promise inside a book of judgment. God knows the people who trust Him. They know Him too. In the day of trouble there is a strong hold.',
    sourceKeywords: ['The LORD is good', 'a strong hold in the day of trouble', 'he knoweth them that trust in him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'nam-1-15': {
    title: 'Behold upon the Mountains the Feet of Him That Bringeth Good Tidings',
    principle:
      'The messenger publishes peace. Judah keeps her feasts. The wicked are cut off. First principle: this is the twin of Isaiah 52:7. A runner comes over the mountains with news that Nineveh has fallen. Paul quotes that runner as the picture of the gospel preacher.',
    sourceKeywords: ['the feet of him that bringeth good tidings', 'that publisheth peace', 'the wicked shall no more pass through thee'],
    fulfillmentKeywords: ['How beautiful are the feet of them that preach the gospel of peace'],
    terms: [],
  },

  // ── Hand-written expansion: Habakkuk ────────────────────────────────────
  'hab-2-3': {
    title: 'The Vision Is Yet for an Appointed Time',
    principle:
      'The vision speaks at the end and will not lie. Though it tarry, wait. First principle: prophecy keeps a schedule. Prophecy also commands patience. The vision will surely come. The tarrying is part of the coming.',
    sourceKeywords: ['for an appointed time'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-2-4': {
    title: 'The Just Shall Live by His Faith',
    principle:
      'The soul that lifts itself up is not upright. The soul that has faith lives. First principle: this is the Reformation verse. Romans, Galatians, and Hebrews each take one clause of it. Life is lived by faith. It is not earned by pride.',
    sourceKeywords: ['his soul which is lifted up is not upright', 'the just shall live by his faith'],
    fulfillmentKeywords: ['the just shall live by faith'],
    terms: [],
  },
  'hab-2-14': {
    title: 'The Earth Shall Be Filled with the Knowledge of the Glory of the LORD',
    principle:
      'The waters cover the sea. First principle: that sets the standard for covering. Water covers the whole sea. History is moving toward one goal. Everywhere, people will know the glory of the LORD.',
    sourceKeywords: ['filled with the knowledge of the glory of the LORD', 'as the waters cover the sea'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-2-20': {
    title: 'The LORD Is in His Holy Temple: Let All the Earth Keep Silence',
    principle:
      'God commands silence before the One who sits enthroned. First principle: idols make noise. The answer to that noise is a hush over all the earth. The LORD is present in His holy temple. He ends all chatter.',
    sourceKeywords: ['The LORD is in his holy temple', 'let all the earth keep silence before him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-3-2': {
    title: 'O LORD, Revive Thy Work in the Midst of the Years',
    principle:
      'Habakkuk heard God\'s speech and was afraid. He prayed for revival. His plea was this: in wrath remember mercy. First principle: this revival-prayer stands between fear and faith. He asks God to remember mercy when He remembers wrath.',
    sourceKeywords: ['revive thy work in the midst of the years', 'in wrath remember mercy'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-3-17': {
    title: 'Although the Fig Tree Shall Not Blossom',
    principle:
      'Habakkuk lists a total collapse of the farm. The fig tree fails. So do the vine, the olive, the field, the flock, and the herd. First principle: the worst-case inventory comes before the joy. The list exists to be survived.',
    sourceKeywords: ['the fig tree shall not blossom', 'no fruit be in the vines', 'the fields shall yield no meat'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hab-3-18': {
    title: 'Yet I Will Rejoice in the LORD',
    principle:
      'Habakkuk rejoices in the God of salvation when nothing else gives him joy. First principle: he rejoices with no produce in the field. When every field fails, the God of my salvation is his joy. Paul\'s call to rejoice always inherits this.',
    sourceKeywords: ['Yet I will rejoice in the LORD', 'I will joy in the God of my salvation'],
    fulfillmentKeywords: ['Rejoice in the Lord alway: and again I say, Rejoice'],
    terms: [],
  },

  // ── Hand-written expansion: Zephaniah ───────────────────────────────────
  'zep-1-7': {
    title: 'Hold Thy Peace at the Presence of the Lord GOD',
    principle:
      'Zephaniah pictures the day of the LORD as a sacrifice already prepared and guests already invited. God invites the guests, yet they are the ones killed. So the only fitting response is to be silent before the Lord GOD.',
    sourceKeywords: ['Hold thy peace at the presence of the Lord GOD', 'the day of the LORD is at hand', 'he hath bid his guests'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-1-14': {
    title: 'The Great Day of the LORD Is Near, It Hasteth Greatly',
    principle:
      'The great day of the LORD is near, and it comes fast. That day has a voice of its own that goes ahead of it. Even strong men cry out in pain.',
    sourceKeywords: ['The great day of the LORD is near', 'it hasteth greatly', 'the mighty man shall cry there bitterly'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-2-3': {
    title: 'Seek Ye the LORD, All Ye Meek of the Earth',
    principle:
      'The meek of the earth will seek the LORD, and they will seek righteousness and meekness. God may hide them on the day his anger comes. So judgment has a refuge for the humble.',
    sourceKeywords: ['Seek ye the LORD, all ye meek of the earth', 'seek righteousness, seek meekness', 'hid in the day of the LORD\'S anger'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-8': {
    title: 'Wait Ye upon Me, until the Day That I Rise Up to the Prey',
    principle:
      'Wait for me, God says, until the day I rise up to the prey. He has determined to gather the nations and assemble the kingdoms. He will pour out his indignation, all his fierce anger. Then the fire of his jealousy will devour the whole earth.',
    sourceKeywords: ['until the day that I rise up to the prey'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-9': {
    title: 'Then Will I Turn to the People a Pure Language',
    principle:
      'Everyone will call on the name of the LORD with pure speech. God\'s scattered peoples will serve him shoulder to shoulder. That undoes Babel, where the one language was scattered.',
    sourceKeywords: ['turn to the people a pure language', 'call upon the name of the LORD', 'serve him with one consent'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-12': {
    title: 'I Will Leave in the Midst of Thee an Afflicted and Poor People',
    principle:
      'The people left in Jerusalem will be afflicted and poor, and they will trust in the name of the LORD. They come out of trouble, and they depend on God. They are not powerful, and they are not proud.',
    sourceKeywords: ['an afflicted and poor people', 'they shall trust in the name of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-17': {
    title: 'The LORD Thy God in the Midst of Thee Is Mighty',
    principle:
      'God is in the middle of his people, and he is mighty. He will save them. He will rest in his love. He will rejoice over them with joy, and he will sing over them out loud.',
    sourceKeywords: ['in the midst of thee is mighty', 'he will rejoice over thee with joy', 'he will joy over thee with singing'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zep-3-20': {
    title: 'I Will Make You a Name and a Praise among All People',
    principle:
      'At that time God will gather his people and turn back their captivity before their eyes. He will make them a name and a praise among all the peoples of the earth.',
    sourceKeywords: ['a name and a praise among all people', 'when I turn back your captivity before your eyes'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Haggai ──────────────────────────────────────
  'hag-1-1': {
    title: 'Came the Word of the LORD by Haggai',
    principle:
      'God sent his word through the prophet Haggai on a named day to Zerubbabel the governor and Joshua the high priest. The civil ruler and the high priest heard it together. The work of rebuilding needed both the throne and the altar standing under that one word.',
    sourceKeywords: ['came the word of the LORD by Haggai'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'hag-2-6': {
    title: 'Yet Once, It Is a Little While, and I Will Shake',
    principle:
      'God will shake the heavens, the earth, the sea, and the dry land one more time. God has already set the time for that shaking. Hebrews takes the promise further and applies it to heaven itself, so that only what cannot be shaken will remain.',
    sourceKeywords: ['Yet once, it is a little while', 'I will shake the heavens, and the earth'],
    fulfillmentKeywords: ['Yet once more I shake not the earth only, but also heaven'],
    terms: [],
  },
  'hag-2-9': {
    title: 'The Glory of This Latter House Shall Be Greater',
    principle:
      'God promises peace in this place. The greater glory of the second temple was a person visiting it. In that same place God promised peace by name.',
    sourceKeywords: ['The glory of this latter house', 'greater than of the former', 'in this place will I give peace'],
    fulfillmentKeywords: ['mine eyes have seen thy salvation'],
    terms: [],
  },
  'hag-2-23': {
    title: 'I Will Make Thee as a Signet',
    principle:
      'God chose Zerubbabel and made him like a signet ring, the seal pressed into God\'s own hand. That signet reverses the curse that had fallen on Jeconiah. It is the official seal of authority for the line of David.',
    sourceKeywords: ['I will take thee, O Zerubbabel, my servant', 'make thee as a signet', 'I have chosen thee'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Zechariah (added anchors) ───────────────────
  'zec-3-1': {
    title: 'Joshua the High Priest and Satan at His Right Hand',
    principle:
      'The vision opens with a courtroom. Satan stands at Joshua\'s right hand to oppose him, while the priest stands there to serve. The LORD\'s rebuke is stronger than the accuser\'s resistance.',
    sourceKeywords: ['Joshua the high priest', 'Satan standing at his right hand to resist him'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-3-9': {
    title: 'The Stone Laid before Joshua, Seven Eyes',
    principle:
      'God showed Joshua one stone, and it has seven eyes carved on it. In one day God will remove the guilt of that land. So the stone is God\'s foundation, the seven eyes are his knowledge of all things, and the pardon he gives is not delayed.',
    sourceKeywords: ['the stone that I have laid before Joshua', 'upon one stone shall be seven eyes', 'remove the iniquity of that land in one day'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-4-6': {
    title: 'Not by Might, nor by Power, but by My Spirit',
    principle:
      'This is the word the LORD gave Zerubbabel at the lampstand. God\'s Spirit does the work of rebuilding, and human muscle does not. The mountain in the way becomes a plain in front of the builder God supplies with grace.',
    sourceKeywords: ['Not by might, nor by power', 'but by my spirit, saith the LORD of hosts'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-4-10': {
    title: 'Who Hath Despised the Day of Small Things?',
    principle:
      'The vision shows the plummet in Zerubbabel\'s hand. It also shows the seven eyes of the LORD. People may look down on small beginnings, but heaven rejoices in them, because the LORD keeps watch over the whole earth.',
    sourceKeywords: ['Who hath despised the day of small things', 'the plummet in the hand of Zerubbabel', 'the eyes of the LORD'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-6-13': {
    title: 'He Shall Bear the Glory, and Shall Sit and Rule upon His Throne',
    principle:
      'The Branch builds the temple and receives the glory. He sits and rules on his throne, and he serves as priest on that same throne. God\'s purpose of peace joins the two offices together.',
    sourceKeywords: ['build the temple of the LORD', 'bear the glory', 'a priest upon his throne'],
    fulfillmentKeywords: ['We have such an high priest, who is set on the right hand of the throne'],
    terms: [],
  },
  'zec-8-16': {
    title: 'Speak Ye Every Man the Truth to His Neighbour',
    principle:
      '"Speak ye every man the truth to his neighbour; execute the judgment of truth and peace in your gates." That is the way God\'s restored city is meant to live. Truthful speech and fair judgments at the gate are what God tells his people to do.',
    sourceKeywords: ['Speak ye every man the truth to his neighbour', 'execute the judgment of truth and peace in your gates'],
    fulfillmentKeywords: ['putting away lying, speak every man truth'],
    terms: [],
  },
  'zec-9-10': {
    title: 'He Shall Speak Peace unto the Heathen',
    principle:
      '"And I will cut off the chariot from Ephraim, and the horse from Jerusalem, and the battle bow shall be cut off: and he shall speak peace unto the heathen." The King\'s rule reaches from the city where he entered all the way to the ends of the earth. He governs the nations, and he does it without war-horses.',
    sourceKeywords: ['cut off the chariot from Ephraim', 'speak peace unto the heathen', 'his dominion shall be from sea even to sea'],
    fulfillmentKeywords: ['He shall have dominion also from sea to sea'],
    terms: [],
  },
  'zec-11-13': {
    title: 'Cast It unto the Potter: a Goodly Price',
    principle:
      'The prophet throws the thirty silver pieces into the LORD\'s house, and they go to the potter. Zechariah speaks these words in God\'s own voice about his own price. The chief priests made that price real when they decided what to pay for Jesus.',
    sourceKeywords: ['Cast it unto the potter', 'a goodly price that I was prised at of them', 'in the house of the LORD'],
    fulfillmentKeywords: ['And the chief priests took the silver pieces, and said'],
    terms: [],
  },
  'zec-12-11': {
    title: 'A Great Mourning in Jerusalem, as the Mourning of Hadadrimmon',
    principle:
      'God says that day will bring a great mourning in Jerusalem. It will be as deep as the mourning for King Josiah, who died at Megiddo. So the grief over the pierced Shepherd becomes the grief of the whole city.',
    sourceKeywords: ['a great mourning in Jerusalem', 'the mourning of Hadadrimmon', 'the valley of Megiddon'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'zec-14-5': {
    title: 'The LORD My God Shall Come, and All the Saints with Thee',
    principle:
      'The people will run for the valley as the LORD arrives with all his saints. The saints come with him, so the valley they run through is the road he comes by. His holy ones arrive with him.',
    sourceKeywords: ['the LORD my God shall come', 'all the saints with thee', 'the valley of the mountains'],
    fulfillmentKeywords: ['the Lord cometh with ten thousands of his saints'],
    terms: [],
  },
  'zec-14-8': {
    title: 'Living Waters Shall Go Out from Jerusalem',
    principle:
      'Living waters will flow out from Jerusalem. Half of them run toward the eastern sea, and half run toward the western sea. The water flows in summer and in winter, so nothing interrupts it. The city becomes the place the water comes from, and it never stops.',
    sourceKeywords: ['living waters shall go out from Jerusalem'],
    fulfillmentKeywords: ['He that believeth on me... out of his belly shall flow rivers of living water'],
    terms: [],
  },
  'zec-14-9': {
    title: 'The LORD Shall Be King over All the Earth',
    principle:
      'In that day there will be one LORD and one name over the whole earth. The many idols and the divided loyalties come to an end, and one King rules alone.',
    sourceKeywords: ['the LORD shall be king over all the earth', 'one LORD, and his name one'],
    fulfillmentKeywords: ['The kingdoms of this world are become the kingdoms of our Lord'],
    terms: [],
  },
  'zec-14-16': {
    title: 'Every One That Is Left... Shall Go Up to Worship the King',
    principle:
      'The nations that attacked Jerusalem and survived will still be there. Every year they will go up to worship the King, the LORD of hosts, and to keep the feast of tabernacles. Even the attackers who live through it will come and worship.',
    sourceKeywords: ['go up from year to year to worship the King'],
    fulfillmentKeywords: [],
    terms: [],
  },

  // ── Hand-written expansion: Malachi (added anchors) ─────────────────────
  'mal-1-2': {
    title: 'I Have Loved You, Saith the LORD',
    principle:
      'Malachi opens with a people who doubt that God loves them. God answers the doubt with one proof: he chose Jacob and not Esau. God\'s choice, and not their circumstances, settles the question of his love.',
    sourceKeywords: ['I have loved you', 'Wherein hast thou loved us', 'yet I loved Jacob'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mal-1-3': {
    title: 'And I Hated Esau, and Laid His Mountains Waste',
    principle:
      'God hated Esau\'s line and left its land a waste for the wild animals of the desert. That ruin is what being the line God did not choose looks like. So the ruins of Edom preach that God chose Jacob.',
    sourceKeywords: ['I hated Esau', 'laid his mountains and his heritage waste', 'dragons of the wilderness'],
    fulfillmentKeywords: ['Jacob have I loved, but Esau have I hated'],
    terms: [],
  },
  'mal-3-6': {
    title: 'For I Am the LORD, I Change Not',
    principle:
      'God does not change. That is why the sons of Jacob are not destroyed. If God could change, Israel would have ended long ago. God made the covenant, and he stays the same, so the covenant still stands.',
    sourceKeywords: ['I am the LORD, I change not', 'therefore ye sons of Jacob are not consumed'],
    fulfillmentKeywords: ['Jesus Christ the same yesterday, and to day, and for ever'],
    terms: [],
  },
  'mal-3-17': {
    title: 'They Shall Be Mine, Saith the LORD of Hosts',
    principle:
      'God will make up his jewels, and he will spare them as a father spares a son who serves him. That day is the day he does it. The people he spares are the ones he calls his own.',
    sourceKeywords: ['they shall be mine', 'when I make up my jewels', 'spare them, as a man spareth his own son'],
    fulfillmentKeywords: [],
    terms: [],
  },
  'mal-4-6': {
    title: 'He Shall Turn the Heart of the Fathers to the Children',
    principle:
      'Malachi\'s last promise turns on one hinge: hearts turn back to God and to each other, or the land is struck with a curse. God works that turning through the messenger he sends ahead of the day. Moses had already set the same choice of blessing or curse in front of Israel.',
    sourceKeywords: ['turn the heart of the fathers to the children', 'lest I come and smite the earth with a curse'],
    fulfillmentKeywords: ['to turn the hearts of the fathers to the children'],
    terms: [],
  },
};


export function getBookThreadDetail(verseId: string): ThreadDetail | null {
  return bookThreadDetails[verseId] ?? null;
}

