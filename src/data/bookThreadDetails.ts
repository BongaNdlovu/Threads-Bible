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
      'God names Himself to Moses: I AM WHO I AM. Jesus applies the divine name: before Abraham was, I AM. First principle: covenant identity is grounded in self-existent being, not tribal history alone.',
    sourceKeywords: ['I AM', 'THAT I AM', 'God', 'fathers', 'Abraham', 'Isaac', 'Jacob'],
    fulfillmentKeywords: ['Before Abraham was', 'I am', 'I AM', 'Alpha', 'Omega'],
    terms: [
      { term: 'I AM WHO I AM', original: 'אֶהְיֶה אֲשֶׁר אֶהְיֶה', translit: 'ʾehyeh ʾasher ʾehyeh', gloss: 'I will be what I will be / I am who I am', note: 'LXX ἐγώ εἰμι ὁ ὤν — John 8:58 claims this name.' },
    ],
  },
  'exo-12-3': {
    title: 'Lamb Without Blemish',
    principle:
      'Each household takes a lamb without blemish for Passover. John names Jesus the Lamb of God; Paul: Christ our Passover is sacrificed. First principle: substitutionary death of an unblemished substitute delivers from judgment.',
    sourceKeywords: ['lamb', 'house', 'lamb for an house', 'without blemish', 'male', 'first year'],
    fulfillmentKeywords: ['Lamb of God', 'sin', 'world', 'Christ our passover', 'sacrificed', 'lamb without blemish', 'precious blood'],
    terms: [
      { term: 'lamb', original: 'שֶׂה', translit: 'seh', gloss: 'head of small cattle (lamb / kid)', note: 'Greek ἀμνός / ἀρνίον — John and Revelation.' },
      { term: 'without blemish', original: 'תָּמִים', translit: 'tamim', gloss: 'complete, sound, without defect', note: '1 Pet 1:19 — lamb without blemish and spot.' },
    ],
  },
  'exo-12-13': {
    title: 'Blood on the Doorposts',
    principle:
      'The LORD sees the blood and passes over. Hebrews: without shedding of blood no remission; 1 Peter: redeemed with precious blood. First principle: atonement is by applied blood, not mere intention.',
    sourceKeywords: ['blood', 'token', 'house', 'see the blood', 'pass over', 'plague', 'destroy'],
    fulfillmentKeywords: ['blood', 'remission', 'redeemed', 'precious blood', 'passover', 'plague'],
    terms: [
      { term: 'pass over', original: 'פָּסַח', translit: 'pasach', gloss: 'to pass over, spare', note: 'Root of Pesach / Passover; sparing judgment.' },
    ],
  },
  'exo-12-46': {
    title: 'Not a Bone Broken',
    principle:
      'Passover lamb\'s bones are not broken. John cites this at the cross. First principle: the type specifies integrity of the sacrifice even in death.',
    sourceKeywords: ['break', 'bone', 'thereof'],
    fulfillmentKeywords: ['break', 'bone', 'not one', 'fulfilled'],
    terms: [
      { term: 'bone', original: 'עֶצֶם', translit: 'etsem', gloss: 'bone, substance, selfsame', note: 'John 19:36 — Scripture fulfilled.' },
    ],
  },
  'exo-16-4': {
    title: 'Bread from Heaven',
    principle:
      'God rains bread from heaven for Israel. Jesus: I am the bread of life; the true bread is My flesh. First principle: divine provision is personal and sufficient for eternal life.',
    sourceKeywords: ['rain bread from heaven', 'people', 'gather', 'day by day'],
    fulfillmentKeywords: ['bread of God', 'bread of life', 'came down from heaven', 'flesh', 'world', 'living'],
    terms: [
      { term: 'bread', original: 'לֶחֶם', translit: 'lechem', gloss: 'bread, food', note: 'Greek ἄρτος — John 6 manna discourse.' },
    ],
  },
  'exo-17-6': {
    title: 'Water from the Rock',
    principle:
      'Moses strikes the rock and water comes out. Paul: they drank from the spiritual Rock that followed them, and the Rock was Christ. First principle: God quenches thirst; Christ is the source.',
    sourceKeywords: ['rock', 'Horeb', 'smite', 'water', 'people drink'],
    fulfillmentKeywords: ['Rock', 'Christ', 'water', 'living water', 'thirst', 'drink'],
    terms: [
      { term: 'rock', original: 'הַצּוּר', translit: 'ha-tsur', gloss: 'the rock, crag', note: 'Greek πέτρα (petra) in 1 Cor 10:4 — typological Christ.' },
    ],
  },
  'exo-19-6': {
    title: 'Kingdom of Priests',
    principle:
      'Israel is to be a kingdom of priests and holy nation. 1 Peter applies this to the church; Revelation: made priests to God. First principle: the covenant people exist for priestly access and witness.',
    sourceKeywords: ['kingdom of priests', 'holy nation'],
    fulfillmentKeywords: ['holy priesthood', 'royal priesthood', 'holy nation', 'kings and priests', 'priests unto God'],
    terms: [
      { term: 'kingdom of priests', original: 'מַמְלֶכֶת כֹּהֲנִים', translit: 'mamlekhet kohanim', gloss: 'a kingdom of priests', note: 'LXX βασίλειον ἱεράτευμα — 1 Pet 2:9.' },
    ],
  },
  'exo-25-40': {
    title: 'Pattern of the Tabernacle',
    principle:
      'God shows Moses the pattern to build after. Hebrews: earthly tabernacle is a copy and shadow of the heavenly things. First principle: worship order is revealed, not invented; Christ is the true meeting-place.',
    sourceKeywords: ['pattern', 'tabernacle', 'furniture', 'according to all', 'shewed'],
    fulfillmentKeywords: ['example', 'shadow', 'heavenly', 'greater', 'true tabernacle', 'minister'],
    terms: [
      { term: 'pattern', original: 'תַּבְנִית', translit: 'tavnit', gloss: 'pattern, model, form', note: 'Heb 8:5 — ὑπόδειγμα / σκιά — copy and shadow.' },
    ],
  },
  'exo-30-10': {
    title: 'Day of Atonement',
    principle:
      'The high priest makes atonement once a year with blood. Hebrews: Christ enters the greater holy place once for all. First principle: access to God is blood-bought and priestly.',
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
    title: 'Remember the Sabbath Day',
    principle:
      'The fourth commandment: Remember the Sabbath day, to keep it holy. Jesus treats Sabbath as belonging to God and to humanity\'s good (Mark 2:27-28). Luke\'s Jesus customarily keeps Sabbath (Luke 4:16). Hebrews still speaks of a Sabbath rest remaining for the people of God (Heb 4:9). Textual proof: the commandment is moral and perpetual in the Decalogue; NT practice continues it; the "rest" language carries into eschatology.',
    sourceKeywords: ['Remember', 'sabbath day', 'keep it holy', 'seventh day', 'rest'],
    fulfillmentKeywords: ['sabbath', 'Lord of the sabbath', 'custom', 'synagogue', 'rest remaineth', 'people of God'],
    terms: [
      { term: 'Sabbath', original: 'שַׁבָּת', translit: 'shabbat', gloss: 'rest, sabbath (from shavat — cease)', note: 'Greek σάββατον in NT; same seventh-day institution from creation (Exod 20:11) through the prophets (Isa 58:13-14) to Hebrews 4.' },
      { term: 'keep it holy', original: 'לְקַדְּשׁוֹ', translit: 'le-qaddesho', gloss: 'to sanctify / set it apart', note: 'Same qadash root as God sanctifying the seventh day in Gen 2:3.' },
    ],
  },
  'exo-20-11': {
    title: 'Seventh Day — Pattern from Creation',
    principle:
      'The Sabbath command is grounded in creation itself: in six days the LORD made heaven and earth and rested the seventh day. Ezekiel calls it also a sign between God and Israel (Ezek 20:12, 20). Hebrews 4:4 quotes Genesis 2:2 for the same rest. Textual proof: Sinai cites creation, not a later Israelite invention; the seventh day is named as the day God rested.',
    sourceKeywords: ['six days', 'made', 'heaven', 'earth', 'sea', 'seventh day', 'rested', 'blessed', 'sabbath', 'hallowed'],
    fulfillmentKeywords: ['rested', 'seventh day', 'works were finished', 'God did rest'],
    terms: [
      { term: 'seventh day', original: 'הַשְּׁבִיעִי', translit: 'ha-sheviʿi', gloss: 'the seventh', note: 'Ordinal is explicit — not "a" day but "the" seventh. Heb 4:4 preserves this creation logic.' },
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
      'Moses makes a bronze serpent and sets it on a pole; whoever is bitten and looks upon it lives. Jesus directly applies this to His own crucifixion: as Moses lifted up the serpent, so must the Son of Man be lifted up, that whoever believes in Him should not perish but have eternal life. First principle: God turns the emblem of the curse into the instrument of life when looked upon in faith.',
    sourceKeywords: ['serpent of brass', 'pole', 'bitten', 'beheld', 'lived'],
    fulfillmentKeywords: ['lifted up', 'serpent', 'wilderness', 'Son of man', 'believe', 'eternal life', 'cross'],
    terms: [
      { term: 'serpent of brass', original: 'נְחַשׁ נְחֹשֶׁת', translit: 'nechash nechoshet', gloss: 'serpent of bronze / copper', note: 'Wordplay in Hebrew (nachash / nechoshet); type of sin judged in the likeness of sinful flesh (Rom 8:3).' },
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
      'The Torah establishes the right of redemption: if a brother becomes impoverished, his near kinsman (go\'el) has the duty to redeem the sold inheritance. Jesus became our near kinsman in the flesh to buy back our alienated inheritance and redeem us from the slavery of sin. First principle: redemption requires near kinship, willingness, and the full payment of the price.',
    sourceKeywords: ['waxen poor', 'sold away', 'kin', 'redeem', 'brother'],
    fulfillmentKeywords: ['redeem', 'brethren', 'flesh and blood', 'inheritance', 'purchased'],
    terms: [
      { term: 'kinsman / redeemer', original: 'גֹּאֵל', translit: 'goʾel', gloss: 'redeemer, near kinsman, vindicator', note: 'From ga\'al (to redeem/buy back). Boaz in Ruth 3-4; Christ in Gal 4:4-5 and Heb 2:14-15.' },
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
    title: 'Cleansing the Holy Place — Day of Atonement (Yom Kippur)',
    principle:
      'The high priest makes atonement for the holy place because of the uncleanness of the children of Israel and their transgressions. Hebrews 9:23 declares that the patterns of things in the heavens were purified with these, but the heavenly things themselves with better sacrifices. Daniel 8:14 points to this very sanctuary cleansing at the end of 2,300 days. First principle: sin confessed throughout the year is typologically removed on the Day of Atonement, pointing to Christ\'s pre-advent investigative judgment.',
    sourceKeywords: ['atonement for the holy place', 'uncleanness', 'transgressions', 'tabernacle of the congregation'],
    fulfillmentKeywords: ['heavenly things', 'cleansed', 'purified', 'better sacrifices', 'true tabernacle', 'sanctuary'],
    terms: [
      { term: 'atonement', original: 'וְכִפֶּר', translit: 've-khipper', gloss: 'and he shall make atonement / purge / cleanse', note: 'The ultimate cleansing of the sanctuary from all recorded sin.' },
      { term: 'uncleanness', original: 'טֻמְאֹת', translit: 'tumʾot', gloss: 'impurities / defilements', note: 'The transferred sin contaminating the sanctuary removed by blood.' },
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
      'The LORD declares the biblical criteria for the prophetic gift: "If there be a prophet among you, I the LORD will make myself known unto him in a vision, and will speak unto him in a dream." Together with Isaiah 8:20 (harmony with the law) and Matthew 7:20 ("by their fruits ye shall know them"), Scripture establishes objective, empirical tests for true spiritual gifts. First principle: genuine prophetic manifestations operate under strict biblical boundaries, never overriding or contradicting the written canon.',
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
    title: 'The Jubilee — Proclaiming Universal Liberty and Restitution',
    principle:
      'And ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof: it shall be a jubilee unto you; and ye shall return every man unto his possession. The Jubilee is the grand Old Testament type of the final redemption: lost inheritance (Eden) is restored, all debts are forgiven, and captive slaves are set free at the blast of the trumpet. First principle: redemption is full restitution of all that was lost in Adam.',
    sourceKeywords: ['hallow the fiftieth year', 'proclaim liberty', 'jubilee', 'return every man unto his possession'],
    fulfillmentKeywords: ['liberty to the captives', 'acceptable year of the Lord', 'inheritance of the saints', 'earth made new'],
    terms: [
      { term: 'jubilee', original: 'יוֹבֵל', translit: 'yovel', gloss: 'ram\'s horn / jubilee season of release', note: 'Trumpet sounding freedom and restoration of lost ancestral lands.' },
      { term: 'proclaim liberty', original: 'קְרָאתֶם דְּרוֹר', translit: 'qerathem deror', gloss: 'proclaim emancipation / freedom', note: 'Quoted by Jesus in Luke 4:18-19 for messianic deliverance.' },
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
      'Balaam, hired to curse Israel, can only bless: I shall see him, but not now... there shall come a Star out of Jacob, and a Sceptre shall rise out of Israel. First principle: God turns every curse of the enemy into messianic blessing; the promised Ruler appears at God\'s appointed time, not nigh but certain.',
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
      'Make thee a fiery serpent, and set it upon a pole: and it shall come to pass, that every one that is bitten, when he looketh upon it, shall live. Remedy mirrors plague: what killed becomes the instrument of life when lifted up. First principle: salvation is by looking — faith fastened on the God-provided object.',
    sourceKeywords: ['fiery serpent', 'set it upon a pole', 'when he looketh upon it, shall live', 'much people of Israel died'],
    fulfillmentKeywords: ['as Moses lifted up the serpent', 'even so must the Son of man be lifted up', 'whosoever believeth', 'I, if I be lifted up'],
    terms: [
      { term: 'pole', original: 'נֵס', translit: 'nes', gloss: 'banner, standard, elevated signal', note: 'The same word for the ensign to which nations gather (Isa 11:10); Jesus uses hupsothen — lifted up — of His cross (John 3:14).' },
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
      'Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass. First principle: the world-conquering King arrives unarmed and humble — justice and salvation, not cavalry.',
    sourceKeywords: ['Rejoice greatly, O daughter of Zion', 'thy King cometh unto thee', 'just, and having salvation', 'riding upon an ass'],
    fulfillmentKeywords: ['All this was done', 'Daughter of Sion', 'sitting upon an ass', 'Hosanna to the Son of David'],
    terms: [
      { term: 'lowly', original: 'עָנִי', translit: '\'ani', gloss: 'afflicted, humble, poor', note: 'The same word describes the Suffering Servant led as a lamb to slaughter — humility is the King\'s uniform.' },
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
};


export function getBookThreadDetail(verseId: string): ThreadDetail | null {
  return bookThreadDetails[verseId] ?? null;
}

