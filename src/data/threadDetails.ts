/**
 * First-principles explanations, keyword sets, and original-language notes
 * for Genesis prophecy threads.
 */
import { bookThreadDetails } from './bookThreadDetails';
import { draftThreadDetails } from './draftThreadDetails';

export interface OriginalLanguageTerm {
  term: string;
  original: string;
  translit: string;
  gloss: string;
  note?: string;
  /** Full contextual meaning in the verse's literary setting — not gloss-only. */
  exposition?: string;
  /** Optional Strong's number (H#### / G####). */
  strongs?: string;
}

export interface ChainStep {
  ref: string;
  verseId?: string;
  testament: 'OT' | 'NT';
  title: string;
  connection: string;
}

export interface ThreadChain {
  id: string;
  name: string;
  /** Earliest reference that starts the chain */
  origin: string;
  steps: ChainStep[];
}

export interface ThreadDetail {
  title: string;
  principle: string;
  sourceKeywords: string[];
  fulfillmentKeywords: string[];
  terms: OriginalLanguageTerm[];
  /** Same-testament links from this Genesis verse (forward in OT) */
  sameTestamentLinks?: { ref: string; connection: string }[];
  /** Ordered chain starting at the earliest related thread */
  chainId?: string;
  /** True for generated draft details (draftThreadDetails.ts) awaiting hand-writing */
  draft?: boolean;
  /** Authored Who prose for the Ordo source-node dossier (golden samples). */
  who?: string;
  /** Authored Who prose keyed by live fulfillment ref (golden samples). */
  whoByRef?: Record<string, string>;
  /** Stored cumulative principle texts, index 0 = playback step 1. */
  cumulativePrinciples?: string[];
}

export const threadDetails: Record<string, ThreadDetail> = {
  'gen-1-1': {
    title: 'In the Beginning — the Word Creates',
    principle:
      'Creation is not self-originating. Genesis opens with a speaking God; John opens by identifying that Speaker as the eternal Word who is Himself God. First principle: everything that exists depends on a prior, personal source. The NT does not invent this — it names the Agent already present in the Hebrew account.',
    who: 'Authorship & Context: Moses wrote Genesis during Israel\'s wilderness wandering (c. 1446–1406 BC), grounding redeemed slaves in the absolute sovereignty of the one true God over pagan Egyptian polytheism. Identified Characters: God the Father (Creator of heaven and earth), God the Son (the eternal Logos through whom all things came into being), and the Holy Spirit (hovering over the waters). Singular or Many: Many. Three divine persons are identified in the creation-and-prologue witness, while the human author of Genesis is singular (Moses). Christological Subject & Referent: Jesus Christ Himself is the uncreated, personal divine Word (ὁ Λόγος, ho Logos). The passage is not talking about an abstract cosmic force, but the second Person of the Trinity who eternally communes with the Father. Redemptive Purpose: Moses establishes that creation is God\'s theater; John and Hebrews name the One who framed the universe as the Savior who stepped into it to redeem fallen humanity.',
    whoByRef: {
      'John 1:1-3': 'Authorship & Context: Moses wrote Genesis in the wilderness (c. 1446–1406 BC). The Apostle John, writing in Ephesus (c. AD 85–95), was the beloved disciple addressing nascent Gnostic denials of the Word\'s true deity and creative agency. Identified Characters: God the Father; the eternal Word who was with God and was God; all created things that came into being through Him. Singular or Many: Many. Father and Son are distinguished in the prologue (the Word was with God), yet they are one God; the created order is the many that came to be. Christological Subject & Referent: Jesus Christ, the uncreated Logos through whom all things were made. Redemptive Purpose: To prove that the Redeemer is not a creature but the Creator, so His incarnation and sacrifice carry infinite worth.',
      'Hebrews 11:3': 'Authorship & Context: Moses recorded primeval history for Israel at Sinai. The inspired author of Hebrews (c. AD 64–68) wrote to Jewish believers under pressure before Jerusalem\'s fall. Identified Characters: God whose spoken word frames the worlds; the witnesses of faith who understand this; 1st-century disciples tempted to trust what is seen. Singular or Many: Singular Speaker, many worlds. One God frames the ages by His word; the many visible things are not their own origin. Christological Subject & Referent: Jesus Christ, the Son through whom God made the worlds (Heb 1:2) and who upholds all things by the word of His power (Heb 1:3). Redemptive Purpose: To orient wavering faith upon the unseen word that created all that is seen — the same word that now promises an unshakeable kingdom.',
    },
    cumulativePrinciples: [
      'The thread begins at Genesis 1:1: Creation did not make itself. Genesis opens with a speaking God. The New Testament names that Speaker as the eternal Word, who is God. Everything that exists depends on a personal Maker.',
      'Step 2 of the thread (Genesis 1:1 → John 1:1-3): The Speaker of “In the beginning God created” is the Word who “was in the beginning with God.” Both verses share one beginning, one divine Maker, and one world that came from Him, not from itself. The link: John’s Greek names Moses’ “beginning” as a Person — the Word. Why it matters: only the Creator Himself can redeem the world He made.',
      'Step 3 (Genesis 1:1 → John 1:1-3 → Hebrews 11:3): All three verses say the same thing: God spoke, and the universe came into being. How the story moves forward: Genesis states it, John names the Speaker as the Word, and Hebrews calls believers to trust that same word today. Where it leads: the God who spoke the universe into being is the Lord who entered it to save us.',
    ],
    sourceKeywords: ['beginning', 'God', 'created', 'heaven', 'earth'],
    fulfillmentKeywords: ['beginning', 'Word', 'God', 'made', 'worlds'],
    terms: [
      {
        term: 'created',
        original: 'בָּרָא',
        translit: 'baraʾ',
        gloss: 'to create out of nothing (used only of God)',
        note: 'Distinct from yatsar (form) and asah (make). Absolute beginning.',
        strongs: 'H1254',
        exposition:
          'In Genesis 1:1 בָּרָא (baraʾ, Qal perfect 3ms) takes God alone as subject and names the origin of “the heaven and the earth” without a pre‑existing substrate. The verse is not a generic “making” (עָשָׂה, ʿasah) of already‑present stuff, nor a craftsman’s forming (יָצַר, yatsar); it is the absolute beginning of the created order by a personal Speaker. John 1:3 then interprets that act through the Word. All things ἐγένετο (came into being) through Him, and χωρὶς αὐτοῦ not even one thing that has come into being came to be. Thus the Genesis verb’s God‑only subject is identified as the Son, without making the Son a creature.',
      },
      {
        term: 'Word',
        original: 'λόγος',
        translit: 'logos',
        gloss: 'word, reason, divine expression',
        note: 'John 1:1 equates the creating speech of Gen 1 with a Person.',
        strongs: 'G3056',
        exposition:
          'John opens Ἐν ἀρχῇ ἦν ὁ Λόγος — “In the beginning the Word already was.” The imperfect ἦν (continuous existence) stands against ἐγένετο (came to be) used of creation. The Word was πρὸς τὸν Θεόν (face-to-face with God) and Θεὸς ἦν ὁ Λόγος (the Word was God). This is not the impersonal Stoic logos of cosmic reason, nor a mere uttered sound from Genesis 1; it is the personal divine Speech who was already there when Moses’ “beginning” occurred, and through whom (δι’ αὐτοῦ) the Genesis creation took place. Hebrews 11:3’s ῥήματι Θεοῦ (by the word of God) is the same creative utterance now named as this Person.',
      },
      {
        term: 'worlds',
        original: 'αἰῶνας',
        translit: 'aiōnas',
        gloss: 'ages / worlds',
        note: 'Heb 11:3: framed by the word of God — same creative speech.',
        strongs: 'G165',
        exposition:
          'Hebrews 11:3 says τοὺς αἰῶνας κατηρτίσθαι ῥήματι Θεοῦ — the ages/worlds were framed (perfect passive of καταρτίζω: fitted, ordered, put in working order) by God’s spoken utterance. It adds: εἰς τὸ μὴ ἐκ φαινομένων τὰ βλεπόμενα γεγονέναι (so that what is seen has not come from things that appear). In this thread the phrase is not a philosophical footnote on “ages” in the abstract; it is the Genesis 1 cosmos and its successive ages viewed from the side of faith. The same Word John names as ὁ Λόγος is here the ῥῆμα that frames all that Moses said God created. Visible empires are less substantial than the unseen word that made them.',
      },
    ],
  },
  'gen-1-3': {
    title: 'Let There Be Light — Light in Darkness',
    principle:
      'Physical light is the first creative act and a pattern for moral and spiritual light. Paul explicitly cites creation-light shining into darkness as the model for gospel light shining into the heart. First principle: God brings order and visibility out of chaos; He does so again in Christ.',
    sourceKeywords: ['said', 'Let there be', 'light'],
    fulfillmentKeywords: ['Word', 'life', 'light', 'men', 'shineth', 'darkness'],
    terms: [
      { term: 'light', original: 'אוֹר', translit: 'ʾor', gloss: 'light, illumination', note: 'Greek φῶς (phōs) in John/2 Cor — same conceptual thread.' },
      { term: 'shineth', original: 'φαίνω', translit: 'phainō', gloss: 'to shine, appear', note: '2 Cor 4:6 quotes creation-light for gospel illumination.' },
    ],
  },
  'gen-1-14': {
    title: 'Lights for Signs — Creation Testifies',
    principle:
      'God set lights in the firmament as signs for seasons and days. Paul argues that creation itself makes God\'s invisible attributes known, so that humanity is without excuse. First principle: the cosmos is not neutral matter — it is a designed witness.',
    sourceKeywords: ['lights', 'signs', 'seasons', 'heaven'],
    fulfillmentKeywords: ['heavens', 'glory', 'God', 'declare', 'handywork', 'invisible', 'eternal', 'power', 'Godhead'],
    terms: [
      { term: 'signs', original: 'אֹתֹת', translit: 'ʾotot', gloss: 'signs, signals, markers', note: 'Design implies a Designer; Paul uses this for natural revelation.' },
    ],
  },
  'gen-1-26': {
    title: 'Image of God — Man as Representational King',
    principle:
      'Humanity is made in God\'s image and given dominion. Paul and Hebrews locate ultimate image-bearing and agency in the Son: all things were made through Him. First principle: human dignity is derivative — we image the true Image-Bearer.',
    sourceKeywords: ['image', 'likeness', 'man', 'dominion'],
    fulfillmentKeywords: ['image', 'created', 'by', 'him', 'brightness', 'glory', 'express image'],
    terms: [
      { term: 'image', original: 'צֶלֶם', translit: 'tselem', gloss: 'image, idol, statue — representational form', note: 'Greek εἰκών (eikōn) in Col 1:15; Heb 1:3 χαρακτήρ (charaktēr) = exact imprint.' },
      { term: 'likeness', original: 'דְּמוּת', translit: 'demut', gloss: 'likeness, resemblance', note: 'Not mere physical shape — relational and moral resemblance.' },
    ],
  },
  'gen-1-27': {
    title: 'Male and Female — Image Restored in Christ',
    principle:
      'Creation of humanity as male and female establishes the ground of personhood and dignity. Paul writes that believers are being renewed in knowledge after the image of the Creator. First principle: the image marred by the fall is restored in the Messiah.',
    sourceKeywords: ['image', 'God', 'created', 'male', 'female'],
    fulfillmentKeywords: ['image', 'God', 'man', 'glory', 'God'],
    terms: [
      { term: 'image', original: 'צֶלֶם', translit: 'tselem', gloss: 'image — that which represents', note: 'Col 3:10 uses ἀνακαινόω (anakainoō) — renewing into that image.' },
    ],
  },
  'gen-1-28': {
    title: 'Be Fruitful — Dominion Given to the Son',
    principle:
      'God commands humanity to fill and rule the earth. Hebrews 2 shows this dominion not yet fully visible under fallen man, but fulfilled in Jesus, who is crowned with glory and honor. Revelation closes with the kingdoms of this world becoming Christ\'s. First principle: the cultural mandate finds its true King in the Messiah.',
    sourceKeywords: ['Be fruitful', 'multiply', 'replenish', 'subdue', 'dominion'],
    fulfillmentKeywords: ['man', 'mindful', 'son of man', 'visit', 'subjection', 'feet', 'kingdoms', 'Lord', 'Christ', 'reign'],
    terms: [
      { term: 'dominion', original: 'רָדָה', translit: 'radah', gloss: 'to rule, have dominion over', note: 'Ps 8 quoted in Heb 2:8 — all things under His feet (ὑποκάτω τῶν ποδῶν).' },
    ],
  },
  'gen-2-2': {
    title: 'God Rested — Creation Sabbath Codified at Sinai and Fulfilled in Christ',
    principle:
      'God’s rest on the seventh day is joyful completion, not fatigue. The Fourth Commandment (Exo 20:8-11) enshrines it, and Exodus 31:16-17 seals it as a covenant sign. Hebrews 4 shows where it ends: the eternal rest entered by faith in Christ. First principle: the Sabbath remembers the finished work of the Creator and points to the finished redemption of Christ.',
    sourceKeywords: ['seventh day', 'ended', 'rested', 'work', 'made'],
    fulfillmentKeywords: ['sabbath', 'holy', 'covenant', 'sign', 'perpetual', 'rest', 'hallowed', 'refreshed', 'remaineth', 'people of God', 'enter'],
    terms: [
      { term: 'rested', original: 'שָׁבַת', translit: 'shavat', gloss: 'to cease, desist, rest from labor', note: 'Root of Shabbat; cited at Sinai (Exo 20:11) and in Heb 4:4 (κατάπαυσις).' },
      { term: 'Sabbath', original: 'שַׁבָּת', translit: 'shabbat', gloss: 'day of rest / cessation', note: 'Exo 20:8-11 grounds the Decalogue directly in Gen 2:2-3.' },
      { term: 'perpetual covenant', original: 'בְּרִית עוֹלָם', translit: 'berit ʿolam', gloss: 'everlasting covenant / sign', note: 'Exo 31:16-17 designates the Sabbath as a perpetual sign between God and His people.' },
      { term: 'Sabbath rest', original: 'σαββατισμός', translit: 'sabbatismos', gloss: 'sabbath-rest / sabbath-keeping', note: 'Heb 4:9 — there remains a sabbatismos for the people of God.' },
    ],
  },
  'gen-2-3': {
    title: 'Sanctified Day — Pattern of Holy Time',
    principle:
      'God blesses and sanctifies the seventh day. Exodus and Hebrews root Sabbath theology in creation, not merely Sinai. First principle: holy time is established by God\'s act, and points forward to an eternal rest.',
    sourceKeywords: ['blessed', 'seventh day', 'sanctified', 'rested'],
    fulfillmentKeywords: ['seventh day', 'rest', 'sabbath'],
    terms: [
      { term: 'sanctified', original: 'קָדַשׁ', translit: 'qadash', gloss: 'to set apart as holy', note: 'Hebrews re-reads this as eschatological rest, not only weekly observance.' },
    ],
  },
  'gen-2-7': {
    title: 'Breath of Life — Last Adam Quickening Spirit',
    principle:
      'God forms man from dust and breathes life into him. Paul contrasts the first Adam, a living soul, with the last Adam, a life-giving Spirit. First principle: human life is a gift of divine breath; resurrection life is a greater gift from the risen Christ.',
    sourceKeywords: ['formed', 'dust', 'breath of life', 'living soul'],
    fulfillmentKeywords: ['Adam', 'living soul', 'quickening spirit', 'earth', 'heaven', 'breathed', 'Holy Ghost'],
    terms: [
      { term: 'breath of life', original: 'נִשְׁמַת חַיִּים', translit: 'nishmat chayyim', gloss: 'breath / spirit of lives', note: 'Same root as neshamah; Jesus breathes the Spirit in John 20:22.' },
      { term: 'quickening spirit', original: 'ζωοποιοῦν πνεῦμα', translit: 'zōopoioun pneuma', gloss: 'life-making spirit', note: 'Not merely revived flesh — life-giving power in Himself.' },
    ],
  },
  'gen-2-9': {
    title: 'Tree of Life — Access Restored',
    principle:
      'The tree of life stands in Eden\'s midst; after the fall, access is barred. Revelation shows the tree restored in the New Jerusalem, with leaves for the healing of the nations. First principle: eternal life was always God\'s gift; the gospel reopens the way.',
    sourceKeywords: ['tree of life', 'midst', 'garden'],
    fulfillmentKeywords: ['tree of life', 'paradise', 'God', 'water of life', 'leaves', 'healing'],
    terms: [
      { term: 'tree of life', original: 'עֵץ הַחַיִּים', translit: 'ʿets ha-chayyim', gloss: 'tree of the lives', note: 'Rev 22:2 τὸ ξύλον τῆς ζωῆς — same object, restored.' },
    ],
  },
  'gen-2-17': {
    title: 'You Shall Surely Die — Death Enters',
    principle:
      'A single prohibition with a single penalty: death. Paul and 1 Corinthians trace universal death to this transgression, and the gift of God as eternal life in Christ. First principle: sin is not abstract — it produces death; grace produces life.',
    sourceKeywords: ['tree of the knowledge', 'not eat', 'surely die'],
    fulfillmentKeywords: ['one man', 'sin', 'world', 'death', 'wages', 'gift', 'eternal life', 'Adam', 'Christ', 'made alive'],
    terms: [
      { term: 'surely die', original: 'מוֹת תָּמוּת', translit: 'mot tamut', gloss: 'dying you shall die', note: 'Infinitive absolute + imperfect — intensifying, certain death.' },
      { term: 'wages of sin', original: 'ὀψώνιον τῆς ἁμαρτίας', translit: 'opsōnion tēs hamartias', gloss: 'soldier\'s pay of sin = death', note: 'Rom 6:23 — earned result, not gift.' },
    ],
  },
  'gen-2-22': {
    title: 'Woman Built — Church from Christ\'s Side',
    principle:
      'God builds the woman from the man\'s side. Paul reads marriage as a pattern of Christ and the Church. First principle: the one-flesh union is not only social — it is a living parable of gospel union.',
    sourceKeywords: ['rib', 'woman', 'brought', 'man'],
    fulfillmentKeywords: ['head', 'wife', 'Christ', 'church', 'saviour', 'body'],
    terms: [
      { term: 'built', original: 'בָּנָה', translit: 'banah', gloss: 'to build', note: 'Unusual for forming a person — suggests intentional construction as pattern.' },
    ],
  },
  'gen-2-24': {
    title: 'One Flesh — Marriage and Gospel',
    principle:
      'Leaving and cleaving establishes the one-flesh bond. Jesus reaffirms this against easy divorce; Paul names it a great mystery concerning Christ and the Church. First principle: covenant faithfulness is the form of love; the gospel is that faithfulness embodied.',
    sourceKeywords: ['leave', 'father', 'mother', 'cleave', 'wife', 'one flesh'],
    fulfillmentKeywords: ['leave', 'father', 'mother', 'joined', 'wife', 'one flesh', 'mystery', 'Christ', 'church'],
    terms: [
      { term: 'cleave', original: 'דָּבַק', translit: 'davaq', gloss: 'to cling, adhere, stick fast', note: 'Greek προσκολλάω (proskollaō) — glue together; covenant permanence.' },
    ],
  },
  'gen-3-1': {
    title: 'The Serpent — Old Dragon Named',
    principle:
      'A subtle serpent questions God\'s word. Revelation identifies that serpent as the Devil and Satan. First principle: the fall begins with a distortion of God\'s speech; the same enemy still twists the word.',
    sourceKeywords: ['serpent', 'subtil', 'said', 'God'],
    fulfillmentKeywords: ['dragon', 'old serpent', 'Devil', 'Satan'],
    terms: [
      { term: 'serpent', original: 'נָחָשׁ', translit: 'nachash', gloss: 'serpent; also root of shine/divine/brass', note: 'Rev 12:9 ὄφις (ophis) — same creature re-identified.' },
    ],
  },
  'gen-3-8': {
    title: 'God Walks in the Garden — Seeking Presence',
    principle:
      'After sin, God comes walking in the garden and calls, "Where are you?" First principle: initiative with the sinner belongs to God; He seeks before we seek.',
    sourceKeywords: ['heard', 'voice', 'LORD God', 'walking', 'garden', 'hid'],
    fulfillmentKeywords: ['God', 'spirit', 'presence', 'flee'],
    terms: [
      { term: 'Where are you?', original: 'אַיֶּכָּה', translit: 'ʾayyekka', gloss: 'where are you?', note: 'Not ignorance — an invitation to come out of hiding.' },
    ],
  },
  'gen-3-15': {
    title: 'Protoevangelium — Seed of the Woman',
    principle:
      'God declares war between the serpent and the woman, and between their seeds. The woman\'s seed will crush the serpent\'s head while suffering a heel wound. This is the first promise of a Redeemer: a crushing, costly victory. Paul, Hebrews, 1 John, and Revelation all trace Christ\'s victory over Satan to this sentence.',
    sourceKeywords: ['enmity', 'woman', 'seed', 'bruise', 'head', 'heel'],
    fulfillmentKeywords: ['God', 'Son', 'woman', 'bruise', 'Satan', 'head', 'destroy', 'works', 'devil', 'dragon', 'bound'],
    terms: [
      { term: 'seed', original: 'זֶרַע', translit: 'zeraʿ', gloss: 'seed, offspring, descendant', note: 'Collective and singular — Paul reads singular in Gal 3:16 as Christ.' },
      { term: 'bruise head / heel', original: 'שׁוּף', translit: 'shuf', gloss: 'to crush, strike, bruise', note: 'Fatal wound to head vs. non-fatal heel wound — victory through suffering.' },
      { term: 'made of a woman', original: 'ἐκ γυναικός', translit: 'ek gynaikos', gloss: 'out of a woman', note: 'Gal 4:4 — virgin birth implied (no father named).' },
    ],
  },
  'gen-3-19': {
    title: 'Dust You Shall Return — Death\'s Sentence',
    principle:
      'Mortality becomes the human condition. Paul: as in Adam all die, so in Christ all will be made alive. First principle: death is the just consequence of sin; resurrection is the gracious reversal.',
    sourceKeywords: ['dust', 'return', 'dust'],
    fulfillmentKeywords: ['man', 'death', 'resurrection', 'Adam', 'Christ', 'made alive'],
    terms: [
      { term: 'return to dust', original: 'עָפָר תָּשׁוּב', translit: 'ʿafar tashuv', gloss: 'to dust you shall return', note: 'Eccl 3:20; Dan 12:2 later develops resurrection hope.' },
    ],
  },
  'gen-3-21': {
    title: 'Coats of Skins — Covered by Substitution',
    principle:
      'God clothes Adam and Eve with animal skins — blood must be shed for covering. Isaiah, Paul, and Revelation speak of garments of salvation and robes of righteousness. First principle: human covering is insufficient; God provides a covering at cost.',
    sourceKeywords: ['coats', 'skins', 'clothed'],
    fulfillmentKeywords: ['clothed', 'garments', 'salvation', 'robe', 'righteousness', 'put on', 'Christ', 'white raiment'],
    terms: [
      { term: 'clothed', original: 'לָבַשׁ', translit: 'lavash', gloss: 'to put on garments', note: 'Greek ἐνδύω (enduō) — "put on Christ" (Gal 3:27).' },
    ],
  },
  'gen-3-22': {
    title: 'Tree of Life Guarded — Life Hid for Later',
    principle:
      'Access to the tree of life is cut off lest fallen man live forever in sin. Revelation restores that tree to the redeemed. First principle: eternal life without redemption would be endless ruin; God delays access until the Lamb has opened the way.',
    sourceKeywords: ['tree of life', 'eat', 'live for ever'],
    fulfillmentKeywords: ['tree of life', 'water of life', 'live'],
    terms: [
      { term: 'live forever', original: 'לְעֹלָם', translit: 'le-ʿolam', gloss: 'forever, into the age', note: 'Rev 22:14 grants access after redemption is complete.' },
    ],
  },
  'gen-3-24': {
    title: 'Cherubim and Flaming Sword — Way Barred',
    principle:
      'Cherubim guard the way to the tree of life. Hebrews: the first tabernacle limited access to the holiest; Christ opens a new and living way through the veil. First principle: the barred way is real; the gospel opens it by blood.',
    sourceKeywords: ['drove out', 'Cherubims', 'flaming sword', 'keep the way', 'tree of life'],
    fulfillmentKeywords: ['way', 'holiest', 'manifest', 'boldness', 'enter', 'blood', 'veil', 'flesh', 'way', 'truth', 'life'],
    terms: [
      { term: 'way', original: 'דֶּרֶךְ', translit: 'derekh', gloss: 'road, path, way of life', note: 'Greek ὁδός (hodos) — "I am the way" (John 14:6).' },
      { term: 'veil', original: 'καταπέτασμα', translit: 'katapetasma', gloss: 'curtain of the sanctuary', note: 'His flesh is the torn veil — access restored.' },
    ],
  },
  'gen-4-1': {
    title: 'Cain and the Seed Line',
    principle:
      'Eve names Cain with hope of obtaining a man from the LORD. 1 John sets Cain\'s way against Abel\'s. First principle: two lines emerge — one of unbelief and violence, one of faith. The true Seed will not come through Cain.',
    sourceKeywords: ['Adam', 'Eve', 'Cain', 'gotten', 'man', 'LORD'],
    fulfillmentKeywords: ['Cain', 'devil', 'slew', 'righteous'],
    terms: [
      { term: 'Cain', original: 'קַיִן', translit: 'Qayin', gloss: 'acquired; also play on qanah (to get/forge)', note: '1 John 3:12 — "of the wicked one."' },
    ],
  },
  'gen-4-4': {
    title: 'Abel\'s Offering — Righteous by Faith',
    principle:
      'God regards Abel and his offering, not Cain\'s. Hebrews says Abel offered by faith a more excellent sacrifice. First principle: acceptable worship is faith-shaped and blood-aware, not mere labor.',
    sourceKeywords: ['Abel', 'firstlings', 'flock', 'fat', 'respect'],
    fulfillmentKeywords: ['Abel', 'excellent sacrifice', 'righteous', 'faith', 'dead', 'speaketh', 'righteous blood'],
    terms: [
      { term: 'respect', original: 'שָׁעָה', translit: 'shaʿah', gloss: 'to gaze at, look with favor', note: 'Heb 11:4 πίστις (pistis) — faith is the differentiator.' },
    ],
  },
  'gen-4-7': {
    title: 'Sin Crouching at the Door',
    principle:
      'God warns Cain that sin is a predatory force waiting at the entrance. Romans and James describe sin\'s desire and conception. First principle: temptation is not neutral appetite — it is a lethal power that must be ruled, not welcomed.',
    sourceKeywords: ['doest well', 'accepted', 'sin', 'lieth', 'door', 'desire', 'rule'],
    fulfillmentKeywords: ['sin', 'dead', 'commandment', 'lust', 'conceived', 'bringeth forth', 'death'],
    terms: [
      { term: 'lieth / desire', original: 'רֹבֵץ / תְּשׁוּקָה', translit: 'rovetz / teshuqah', gloss: 'crouching / craving', note: 'Same teshuqah as Gen 3:16 for woman\'s desire — sin as rival master.' },
    ],
  },
  'gen-4-8': {
    title: 'Cain Rises Against Abel — First Murder',
    principle:
      'Brother sheds brother\'s blood in a field. Hebrews says Abel\'s blood speaks better things than that of Abel\'s murderer — and points to Jesus\' sprinkled blood. First principle: innocent blood cries; the gospel answers with blood that speaks forgiveness.',
    sourceKeywords: ['Cain', 'Abel', 'slew'],
    fulfillmentKeywords: ['Abel', 'blood', 'sprinkling', 'better things'],
    terms: [
      { term: 'slew', original: 'הָרַג', translit: 'harag', gloss: 'to kill, slay', note: 'Heb 12:24 αἵμα ῥαντισμοῦ (haima rantismou) — blood of sprinkling.' },
    ],
  },
  'gen-4-10': {
    title: 'Brother\'s Blood Cries from the Ground',
    principle:
      'God hears Abel\'s blood crying from the ground. Matthew brackets righteous blood from Abel to Zechariah; Hebrews points to a better blood. First principle: God is not deaf to injustice; the cross both absorbs and answers that cry.',
    sourceKeywords: ['voice', 'brother\'s blood', 'crieth', 'ground'],
    fulfillmentKeywords: ['righteous blood', 'Abel', 'blood', 'sprinkling', 'better'],
    terms: [
      { term: 'crieth', original: 'צָעַק', translit: 'tsaʿaq', gloss: 'to cry out, shriek for justice', note: 'Same root as the cry of oppressed Israel in Exod 2:23.' },
    ],
  },
  'gen-4-25': {
    title: 'Seth — Appointed Seed Instead of Abel',
    principle:
      'God appoints another seed in place of murdered Abel. Luke\'s genealogy runs Jesus back through Seth to Adam and to God. First principle: the messianic line is preserved by divine appointment, not human continuity plans.',
    sourceKeywords: ['Seth', 'appointed', 'seed', 'instead', 'Abel'],
    fulfillmentKeywords: ['Seth', 'Adam', 'God'],
    terms: [
      { term: 'Seth', original: 'שֵׁת', translit: 'Shet', gloss: 'appointed / placed', note: 'Luke 3:38 — genealogical hinge to the first Adam.' },
    ],
  },
  'gen-4-26': {
    title: 'Enos — Calling on the Name of the LORD',
    principle:
      'In Enos\'s days people began to call on the name of the LORD. First principle: public, corporate worship of the true God appears early in the fallen world — a remnant response to grace.',
    sourceKeywords: ['Enos', 'began', 'call upon', 'name of the LORD'],
    fulfillmentKeywords: ['name', 'LORD', 'call'],
    terms: [
      { term: 'call upon the name', original: 'לִקְרֹא בְּשֵׁם', translit: 'liqro be-shem', gloss: 'to call out in / with the name', note: 'Prayer and worship formula continued in Psalms and Rom 10:13.' },
    ],
  },
  'gen-5-1': {
    title: 'Generations of Adam — Image Passed On',
    principle:
      'The book of the generations of Adam restates that man was made in God\'s likeness. Colossians locates the new creation in the image of the Creator. First principle: identity is theologically defined — image of God, then renewed in Christ.',
    sourceKeywords: ['generations', 'Adam', 'created', 'likeness', 'image'],
    fulfillmentKeywords: ['image', 'renewed', 'knowledge', 'Creator'],
    terms: [
      { term: 'likeness', original: 'דְּמוּת', translit: 'demut', gloss: 'resemblance', note: 'Retained even after the fall, though marred (Gen 9:6).' },
    ],
  },
  'gen-5-22': {
    title: 'Enoch Walked with God',
    principle:
      'Enoch walks with God after Methuselah\'s birth. Hebrews: by faith he was translated. Micah later defines the walk God requires. First principle: walking with God is relational faithfulness, not mere ritual.',
    sourceKeywords: ['Enoch', 'walked with God'],
    fulfillmentKeywords: ['Enoch', 'translated', 'pleased God', 'walk'],
    terms: [
      { term: 'walked with God', original: 'הִתְהַלֵּךְ אֶת־הָאֱלֹהִים', translit: 'hithallekh et-ha-Elohim', gloss: 'walked back and forth with God', note: 'Intimate covenant fellowship; only Enoch and Noah (6:9) get this phrase.' },
    ],
  },
  'gen-5-24': {
    title: 'Enoch Taken — Death Defeated by Faith',
    principle:
      'Enoch is not, for God took him. Hebrews 11 holds him up as faith that pleases God; Jude preserves his prophetic tradition. First principle: death is not ultimate; God can translate the faithful.',
    sourceKeywords: ['Enoch', 'walked with God', 'not', 'God took him'],
    fulfillmentKeywords: ['Enoch', 'translated', 'not see death', 'God', 'prophesied', 'Lord cometh'],
    terms: [
      { term: 'took', original: 'לָקַח', translit: 'laqach', gloss: 'to take, seize, receive', note: 'Same verb used for Elijah\'s ascent (2 Kgs 2:3, 5).' },
    ],
  },
  'gen-5-29': {
    title: 'Noah — Rest and Comfort from the Curse',
    principle:
      'Lamech names Noah for rest from the ground\'s curse. First principle: even before the flood, hope of relief from curse is named — foreshadowing Christ who reverses the curse (Rev 22:3).',
    sourceKeywords: ['Noah', 'comfort', 'work', 'toil', 'ground', 'cursed'],
    fulfillmentKeywords: ['comfort', 'trouble', 'rest', 'curse'],
    terms: [
      { term: 'Noah', original: 'נֹחַ', translit: 'Noach', gloss: 'rest / comfort (related to nuach)', note: 'Matt 11:28 — ultimate rest-giver is greater than Noah.' },
    ],
  },
  'gen-6-5': {
    title: 'Every Imagination Evil Continually',
    principle:
      'God sees that the heart\'s imagination is only evil continually. Jesus teaches that from within, out of the heart, proceed evil thoughts. First principle: the fall is total in the mind, not only in behavior.',
    sourceKeywords: ['wickedness', 'great', 'imagination', 'thoughts', 'heart', 'evil'],
    fulfillmentKeywords: ['within', 'heart', 'proceed', 'evil thoughts'],
    terms: [
      { term: 'imagination', original: 'יֵצֶר', translit: 'yetser', gloss: 'formation, purpose, device of the mind', note: 'Same yetser as "formed" man — now bent toward evil.' },
    ],
  },
  'gen-6-8': {
    title: 'Noah Found Grace',
    principle:
      'In a generation of judgment, Noah finds grace in the eyes of the LORD. Paul roots salvation in grace through faith; Hebrews commends Noah\'s obedient faith. First principle: grace is unearned favor that produces a different life.',
    sourceKeywords: ['Noah', 'found grace', 'eyes of the LORD'],
    fulfillmentKeywords: ['grace', 'saved', 'faith', 'gift of God', 'Noah', 'faith', 'ark'],
    terms: [
      { term: 'grace', original: 'חֵן', translit: 'chen', gloss: 'grace, favor, charm', note: 'Greek χάρις (charis) — same theological thread.' },
    ],
  },
  'gen-6-14': {
    title: 'The Ark — Salvation by Divine Design',
    principle:
      'God commands an ark with rooms, pitch, and one door. First principle: salvation is God-designed, sufficient for those who enter, and exclusive in access. 1 Peter reads the ark through baptismal type.',
    sourceKeywords: ['ark', 'gopher wood', 'rooms', 'pitch', 'within', 'without'],
    fulfillmentKeywords: ['ark', 'few', 'eight souls', 'saved', 'water', 'baptism'],
    terms: [
      { term: 'ark', original: 'תֵּבָה', translit: 'tevah', gloss: 'box, vessel (same word as Moses\' basket)', note: '1 Pet 3:20-21 — floodwaters as figure of baptismal rescue.' },
      { term: 'pitch', original: 'כֹּפֶר', translit: 'kopher', gloss: 'pitch / ransom / atonement-cover', note: 'Word-link: covering that makes the vessel sealed against judgment.' },
    ],
  },
  'gen-6-18': {
    title: 'Covenant with Noah',
    principle:
      'God establishes covenant with Noah before the flood. Hebrews and 1 Peter remember Noah as preacher/heir of righteousness. First principle: God binds Himself by promise before judgment falls.',
    sourceKeywords: ['covenant', 'thee', 'ark', 'sons', 'wife'],
    fulfillmentKeywords: ['Noah', 'covenant', 'ark', 'eight souls', 'righteousness'],
    terms: [
      { term: 'covenant', original: 'בְּרִית', translit: 'berit', gloss: 'covenant, pact, binding agreement', note: 'First explicit berit in Scripture — pattern of all later covenants.' },
    ],
  },
  'gen-7-16': {
    title: 'The LORD Shut Him In',
    principle:
      'God Himself shuts Noah in the ark. First principle: the secure are not those who hold the door but those the LORD shuts in. Preservation is divine action.',
    sourceKeywords: ['LORD', 'shut him in'],
    fulfillmentKeywords: ['eternal life', 'never perish', 'pluck', 'hand', 'Father\'s hand'],
    terms: [
      { term: 'shut him in', original: 'וַיִּסְגֹּר', translit: 'wayyisgor', gloss: 'and he shut / enclosed', note: 'Same root as God closing the womb (Gen 20:18) and sealing the deep.' },
    ],
  },
  'gen-8-4': {
    title: 'Ark Rests on Ararat — Judgment Ends',
    principle:
      'The ark rests as waters recede. First principle: judgment is real but not eternal; God remembers and makes a resting place for the remnant.',
    sourceKeywords: ['ark rested', 'mountains', 'Ararat'],
    fulfillmentKeywords: ['Noah', 'ark', 'saved', 'water'],
    terms: [
      { term: 'rested', original: 'וַתָּנַח', translit: 'wattanach', gloss: 'and it rested', note: 'Same root as Noah\'s name and God\'s Sabbath rest.' },
    ],
  },
  'gen-8-8': {
    title: 'Dove Sent — Peace and the Spirit',
    principle:
      'Noah sends a dove to test the earth. The Spirit descends like a dove at Jesus\' baptism. First principle: the dove signals end of wrath and a new beginning — the Spirit marks the beloved Son.',
    sourceKeywords: ['dove', 'sent forth', 'see', 'waters'],
    fulfillmentKeywords: ['Spirit', 'descending', 'dove', 'heaven', 'abode', 'him'],
    terms: [
      { term: 'dove', original: 'יוֹנָה', translit: 'yonah', gloss: 'dove / pigeon', note: 'Greek περιστερά (peristera) — Matt 3:16 sign of the Spirit.' },
    ],
  },
  'gen-8-11': {
    title: 'Olive Leaf — Peace Declared',
    principle:
      'The dove returns with a fresh olive leaf. First principle: God provides visible evidence that judgment has passed and life can resume.',
    sourceKeywords: ['dove', 'mouth', 'olive leaf', 'waters', 'abated'],
    fulfillmentKeywords: ['dove', 'Spirit', 'peace'],
    terms: [
      { term: 'olive leaf', original: 'עֲלֵה־זַיִת', translit: 'ʿaleh-zayit', gloss: 'leaf of olive', note: 'Later olive oil marks anointing and the Spirit\'s presence (Zech 4).' },
    ],
  },
  'gen-8-20': {
    title: 'Burnt Offering — Sweet Savour',
    principle:
      'Noah offers burnt offerings; the LORD smells a sweet savour and vows not to curse the ground again as before. Ephesians: Christ gave Himself an offering and a sacrifice to God for a sweetsmelling savour. First principle: acceptable sacrifice turns away wrath by pleasing God.',
    sourceKeywords: ['altar', 'burnt offerings', 'sweet savour'],
    fulfillmentKeywords: ['offering', 'sacrifice', 'God', 'sweetsmelling savour', 'blood', 'remission'],
    terms: [
      { term: 'sweet savour', original: 'רֵיחַ הַנִּיחֹחַ', translit: 'reiach ha-nichoach', gloss: 'aroma of rest / soothing fragrance', note: 'Greek εὐωδία (euōdia) in Eph 5:2 — Christ\'s self-offering.' },
    ],
  },
  'gen-8-21': {
    title: 'Heart\'s Imagination — Ongoing Evil',
    principle:
      'Even after flood, God knows the imagination of man\'s heart is evil from youth. Revelation announces all things made new. First principle: judgment does not fix the heart; new creation does.',
    sourceKeywords: ['imagination', 'man\'s heart', 'evil', 'youth'],
    fulfillmentKeywords: ['new heavens', 'new earth', 'righteousness', 'all things', 'new'],
    terms: [
      { term: 'imagination', original: 'יֵצֶר', translit: 'yetser', gloss: 'inclination, formation of mind', note: 'Jer 17:9 / Rom 3 deepen this diagnosis; only regeneration cures it.' },
    ],
  },
  'gen-8-22': {
    title: 'Day and Night Shall Not Cease',
    principle:
      'God promises continuity of seasons and day/night while earth remains. Jeremiah 33 echoes this as covenant faithfulness. First principle: nature\'s regularity is covenantal, not random.',
    sourceKeywords: ['seedtime', 'harvest', 'cold', 'heat', 'summer', 'winter', 'day', 'night'],
    fulfillmentKeywords: ['covenant', 'day', 'night', 'ordinance'],
    terms: [
      { term: 'shall not cease', original: 'לֹא יִשְׁבּוֹתוּ', translit: 'lo yishbotu', gloss: 'they shall not cease / rest', note: 'Jer 33:20-21 — God\'s covenant with day/night as sign of His faithfulness.' },
    ],
  },
  'gen-9-1': {
    title: 'Be Fruitful Again — Mandate Renewed',
    principle:
      'God blesses Noah and reissues the creation mandate. Psalm 8 and Hebrews 2 show dominion ultimately under Messiah\'s feet. First principle: after judgment, God restarts the world\'s purpose under blessing.',
    sourceKeywords: ['blessed', 'Be fruitful', 'multiply', 'replenish'],
    fulfillmentKeywords: ['man', 'son of man', 'dominion', 'feet', 'all things'],
    terms: [
      { term: 'replenish', original: 'מָלְאוּ', translit: 'malʾu', gloss: 'fill (the earth)', note: 'Not "refill after empty" only — fill / fulfill the earth\'s purpose.' },
    ],
  },
  'gen-9-13': {
    title: 'Bow in the Cloud — Covenant Sign',
    principle:
      'God sets His bow in the cloud as a token of covenant. First principle: God memorializes mercy in the sky; the sign is for Him to remember and for us to trust.',
    sourceKeywords: ['bow', 'cloud', 'token', 'covenant'],
    fulfillmentKeywords: ['covenant', 'remember', 'token'],
    terms: [
      { term: 'bow', original: 'קֶשֶׁת', translit: 'qeshet', gloss: 'bow (weapon turned into a sign)', note: 'War-bow hung up — God disarms Himself against the earth.' },
    ],
  },
  'gen-9-16': {
    title: 'Everlasting Covenant Remembered',
    principle:
      'The bow is the token of an everlasting covenant between God and all flesh. Isaiah 54 echoes never-forsaking mercy. First principle: covenant memory is grounded in God\'s character, not ours.',
    sourceKeywords: ['bow', 'cloud', 'everlasting covenant', 'God', 'all flesh'],
    fulfillmentKeywords: ['everlasting kindness', 'covenant of peace', 'never remove'],
    terms: [
      { term: 'everlasting covenant', original: 'בְּרִית עוֹלָם', translit: 'berit ʿolam', gloss: 'covenant of the age / eternal', note: 'Recurring formula for God\'s unilateral commitments.' },
    ],
  },
  'gen-9-26': {
    title: 'Blessed Be the LORD God of Shem',
    principle:
      'Noah blesses Shem — the LORD is identified as "God of Shem." Acts traces the God of glory to Abraham through Shem\'s line; Melchizedek points to an eternal priesthood. First principle: election runs through a chosen line to bless the world.',
    sourceKeywords: ['LORD God', 'Shem', 'blessed'],
    fulfillmentKeywords: ['God of glory', 'Abraham', 'God of our fathers', 'priest', 'Melchisedec'],
    terms: [
      { term: 'Shem', original: 'שֵׁם', translit: 'Shem', gloss: 'name', note: 'Israel\'s God is "the God of the Name" — personal covenant identity.' },
    ],
  },
  'gen-9-27': {
    title: 'Japheth Dwell in Tents of Shem',
    principle:
      'Japheth is enlarged and dwells in the tents of Shem. Acts 17: all nations from one blood; Ephesians: far ones brought near. First principle: Gentile inclusion is not an afterthought — it is prophesied early.',
    sourceKeywords: ['enlarge', 'Japheth', 'dwell', 'tents of Shem'],
    fulfillmentKeywords: ['one blood', 'all nations', 'Gentiles', 'far off', 'made nigh', 'no respecter of persons'],
    terms: [
      { term: 'enlarge', original: 'יַפְתְּ', translit: 'yaft', gloss: 'may he enlarge / persuade', note: 'Wordplay on Japheth; later fulfillment in wide Gentile mission.' },
    ],
  },
  'gen-10-5': {
    title: 'Isles of the Gentiles Divided',
    principle:
      'From Noah\'s sons the nations are divided by language and land. Paul: God made of one blood all nations to dwell on the earth. First principle: ethnic diversity is under one Creator\'s determination.',
    sourceKeywords: ['isles', 'Gentiles', 'divided', 'lands', 'tongue', 'nations'],
    fulfillmentKeywords: ['one blood', 'all nations', 'face of the earth', 'times', 'bounds'],
    terms: [
      { term: 'nations', original: 'גּוֹיִם', translit: 'goyim', gloss: 'nations, peoples', note: 'Greek ἔθνη (ethnē) — the Gentile peoples in the NT.' },
    ],
  },
  'gen-10-32': {
    title: 'Nations Divided After the Flood',
    principle:
      'The families of the sons of Noah are divided in their nations. First principle: human plurality after the flood is narrated as orderly descent, not chaos.',
    sourceKeywords: ['families', 'sons of Noah', 'nations', 'divided'],
    fulfillmentKeywords: ['nations', 'earth', 'one blood'],
    terms: [
      { term: 'divided', original: 'נִפְרְדוּ', translit: 'nifredu', gloss: 'were separated / dispersed', note: 'Sets up Gen 11\'s one language contrast.' },
    ],
  },
  'gen-11-1': {
    title: 'One Language — Before Babel',
    principle:
      'The whole earth had one language and one speech. Acts 2 reverses Babel: many languages hear one gospel. First principle: linguistic unity without God-centered humility breeds pride; gospel unity spans languages without erasing them.',
    sourceKeywords: ['one language', 'one speech'],
    fulfillmentKeywords: ['every man', 'own tongue', 'wonderful works', 'God'],
    terms: [
      { term: 'language', original: 'שָׂפָה', translit: 'safah', gloss: 'lip, language', note: 'Acts 2:11 γλῶσσα (glōssa) — tongues for proclamation, not confusion.' },
    ],
  },
  'gen-11-4': {
    title: 'Tower to Heaven — Name and Empire',
    principle:
      'Babel builds a tower to make a name and avoid scattering. Jesus and Paul warn against self-exalting pride. First principle: religion without God becomes technology of self-glory.',
    sourceKeywords: ['build', 'city', 'tower', 'top', 'heaven', 'make us a name', 'scattered'],
    fulfillmentKeywords: ['exalt', 'high thing', 'knowledge', 'God', 'humble'],
    terms: [
      { term: 'make a name', original: 'נַעֲשֶׂה־לָּנוּ שֵׁם', translit: 'naʿaseh-lanu shem', gloss: 'let us make for ourselves a name', note: 'Contrast: God makes Abraham\'s name great (Gen 12:2) as gift, not project.' },
    ],
  },
  'gen-11-9': {
    title: 'Babel — Confusion and Scatter',
    principle:
      'God confounds language and scatters humanity. First principle: God judges imperial pride and multiplies nations for His purposes.',
    sourceKeywords: ['Babel', 'confound', 'language', 'scattered'],
    fulfillmentKeywords: ['nations', 'times', 'habitation'],
    terms: [
      { term: 'Babel', original: 'בָּבֶל', translit: 'Bavel', gloss: 'confusion (cf. Akk. bab-ilu gate of God)', note: 'Babylon becomes later symbol of anti-God empire (Rev 17–18).' },
    ],
  },
  'gen-11-10': {
    title: 'Generations of Shem',
    principle:
      'Shem\'s line is preserved and dated. Luke traces Jesus through this line. First principle: messianic genealogy is historical, not mythic.',
    sourceKeywords: ['generations', 'Shem', 'begat'],
    fulfillmentKeywords: ['Shem', 'Arphaxad', 'generation'],
    terms: [
      { term: 'generations', original: 'תּוֹלְדֹת', translit: 'toledot', gloss: 'generations, family history', note: 'Structural marker of Genesis; anchors the seed-line narrative.' },
    ],
  },
  'gen-11-27': {
    title: 'Terah and Abram — Call Approaches',
    principle:
      'Terah fathers Abram, Nahor, and Haran. Luke includes Terah in Jesus\' genealogy. First principle: God works through named families and real history.',
    sourceKeywords: ['Terah', 'begat', 'Abram', 'Nahor', 'Haran'],
    fulfillmentKeywords: ['Thara', 'Nachor', 'Saruch'],
    terms: [
      { term: 'Abram', original: 'אַבְרָם', translit: 'Avram', gloss: 'exalted father', note: 'Later Abraham — father of a multitude (Gen 17:5).' },
    ],
  },
  'gen-12-1': {
    title: 'Get Thee Out — Call of Abraham',
    principle:
      'God commands Abram to leave country, kindred, and father\'s house. Hebrews: by faith he obeyed and went out. Stephen recounts this as gospel history. First principle: faith requires a costly departure ordered by God\'s word.',
    sourceKeywords: ['Get thee out', 'country', 'kindred', 'father\'s house', 'land', 'shew'],
    fulfillmentKeywords: ['faith', 'called', 'go out', 'inheritance', 'obeyed', 'glory', 'appeared', 'Mesopotamia'],
    terms: [
      { term: 'Get thee out', original: 'לֶךְ־לְךָ', translit: 'lekh-lekha', gloss: 'go for yourself / to yourself', note: 'Personal pilgrimage; Heb 11:8 πίστει (pistei) — by faith.' },
    ],
  },
  'gen-12-2': {
    title: 'Great Nation and Great Name',
    principle:
      'God promises to make Abram a great nation and a great name, and that he will be a blessing. Paul identifies the seed as Christ; Romans: father of many nations. First principle: blessing is promised before circumcision, law, or conquest — by promise.',
    sourceKeywords: ['great nation', 'bless thee', 'make thy name great', 'blessing'],
    fulfillmentKeywords: ['seed', 'Christ', 'father of many nations', 'promise', 'faith', 'grace'],
    terms: [
      { term: 'great nation', original: 'גּוֹי גָּדוֹל', translit: 'goy gadol', gloss: 'a great nation', note: 'Fulfilled in Israel; ultimate seed is Christ (Gal 3:16).' },
    ],
  },
  'gen-12-3': {
    title: 'In You All Families Blessed',
    principle:
      'In Abram all families of the earth will be blessed. Paul: scripture foresaw God justifying the Gentiles by faith and preached the gospel beforehand to Abraham. Acts 3: all kindreds blessed in the seed. First principle: the gospel is Abrahamic before it is Mosaic — blessing to the nations through faith.',
    sourceKeywords: ['bless them that bless thee', 'curse', 'all families', 'earth', 'blessed'],
    fulfillmentKeywords: ['heathen', 'faith', 'gospel', 'Abraham', 'nations', 'blessed', 'seed', 'kindreds', 'multitude'],
    terms: [
      { term: 'blessed', original: 'נִבְרְכוּ', translit: 'nivrekh', gloss: 'shall bless themselves / be blessed', note: 'Niphal: reflexive blessing in Abraham\'s seed — nations find their blessing in him.' },
      { term: 'in thee', original: 'בְּךָ', translit: 'bekha', gloss: 'in you', note: 'Gal 3:8 — gospel preached beforehand; Acts 3:25 — seed is Christ.' },
    ],
  },
  'gen-12-7': {
    title: 'Unto Thy Seed This Land',
    principle:
      'God appears promising the land to Abram\'s seed. Hebrews: he sojourns seeking a heavenly country; Romans: heir of the world through righteousness of faith. First principle: the land promise is real and expands — ultimately world-heirship in Christ.',
    sourceKeywords: ['seed', 'give this land', 'altar', 'appeared'],
    fulfillmentKeywords: ['inheritance', 'seed', 'sojourned', 'strange country', 'promise', 'heir', 'world', 'faith'],
    terms: [
      { term: 'seed', original: 'זַרְעֲךָ', translit: 'zarʿakha', gloss: 'your seed', note: 'Singular/collective tension resolved in Christ + those in Him (Gal 3:29).' },
    ],
  },
  'gen-12-8': {
    title: 'Called on the Name — Worship Pattern',
    principle:
      'Abram builds an altar and calls on the name of the LORD. First principle: the patriarchal life is altar-shaped — revelation produces worship.',
    sourceKeywords: ['altar', 'called upon', 'name of the LORD'],
    fulfillmentKeywords: ['altar', 'call', 'name'],
    terms: [
      { term: 'called upon the name', original: 'קָרָא בְּשֵׁם', translit: 'qara be-shem', gloss: 'proclaimed / invoked the name', note: 'Public confession of YHWH amid Canaanite cults.' },
    ],
  },
  'gen-13-15': {
    title: 'Land Forever — Looking for a City',
    principle:
      'God promises the land to Abram and his seed forever. Hebrews: he looked for a city whose builder is God; 2 Peter: new heavens and earth. First principle: the earthly grant points to an eternal inheritance.',
    sourceKeywords: ['land', 'thee', 'seed', 'for ever', 'dust'],
    fulfillmentKeywords: ['city', 'foundations', 'builder', 'maker', 'God', 'new heavens', 'new earth', 'righteousness'],
    terms: [
      { term: 'for ever', original: 'לְעֹלָם', translit: 'le-ʿolam', gloss: 'to the age / perpetually', note: 'Heb 11:10 polis (city) — ultimate polity under God.' },
    ],
  },
  'gen-13-16': {
    title: 'Seed Like the Dust',
    principle:
      'Abram\'s seed will be as the dust of the earth. Romans 4: he became father of many nations against hope, believing in hope. First principle: God\'s promise outruns natural possibility.',
    sourceKeywords: ['dust of the earth', 'seed', 'number'],
    fulfillmentKeywords: ['father of many nations', 'hope', 'seed', 'stars', 'sand', 'innumerable'],
    terms: [
      { term: 'as the dust', original: 'כַּעֲפַר הָאָרֶץ', translit: 'ka-ʿafar ha-arets', gloss: 'like the dust of the land', note: 'Later paired with stars (Gen 15:5) — earthly and heavenly multitudes.' },
    ],
  },
  'gen-14-18': {
    title: 'Melchizedek — Priest of the Most High',
    principle:
      'Melchizedek, king of Salem and priest of God Most High, blesses Abram. Hebrews 5 and 7 use him as pattern of Christ\'s eternal priesthood. First principle: priesthood precedes Levi and is not bound by genealogy.',
    sourceKeywords: ['Melchizedek', 'king of Salem', 'priest', 'most high God', 'blessed'],
    fulfillmentKeywords: ['priest', 'Melchisedec', 'order', 'Son of God', 'continually', 'most high God'],
    terms: [
      { term: 'Melchizedek', original: 'מַלְכִּי־צֶדֶק', translit: 'Malki-tsedeq', gloss: 'my king is righteousness', note: 'Greek Μελχισεδέκ — Heb 7:2 king of righteousness and peace.' },
      { term: 'priest', original: 'כֹּהֵן', translit: 'kohen', gloss: 'priest, one who serves', note: 'Not Aaronic line — order of Melchizedek (Ps 110:4).' },
    ],
  },
  'gen-14-19': {
    title: 'Possessor of Heaven and Earth',
    principle:
      'Melchizedek blesses Abram by God Most High, possessor of heaven and earth. Jesus claims all authority in heaven and earth. First principle: blessing flows from the true Owner of all.',
    sourceKeywords: ['most high God', 'possessor', 'heaven', 'earth'],
    fulfillmentKeywords: ['power', 'authority', 'heaven', 'earth'],
    terms: [
      { term: 'possessor', original: 'קֹנֵה', translit: 'qoneh', gloss: 'creator / possessor / buyer', note: 'Matt 28:18 — all authority given to the risen Christ.' },
    ],
  },
  'gen-14-20': {
    title: 'Tithes and Bread and Wine',
    principle:
      'Abram gives Melchizedek a tenth; the priest brings out bread and wine. Hebrews: Christ\'s priesthood validated; Luke: bread and wine of the new covenant. First principle: worship, provision, and covenant meal converge in this encounter.',
    sourceKeywords: ['tithes', 'bread and wine', 'gave him'],
    fulfillmentKeywords: ['tenth', 'bread', 'cup', 'new testament', 'blood', 'Melchisedec', 'loins'],
    terms: [
      { term: 'tithes', original: 'מַעֲשֵׂר', translit: 'maʿaser', gloss: 'tenth', note: 'Heb 7:4–10 — Abram\'s act as priestly acknowledgment.' },
    ],
  },
  'gen-15-1': {
    title: 'Fear Not — I Am Thy Shield',
    principle:
      'God comes as Abram\'s shield and exceeding great reward. First principle: divine presence is the believer\'s defense and portion.',
    sourceKeywords: ['Fear not', 'shield', 'exceeding great reward'],
    fulfillmentKeywords: ['shield', 'help', 'refuge', 'reward'],
    terms: [
      { term: 'shield', original: 'מָגֵן', translit: 'magen', gloss: 'shield, protector', note: 'Ps 3:3; Eph 6:16 — faith as shield.' },
    ],
  },
  'gen-15-5': {
    title: 'Count the Stars — Seed Promise',
    principle:
      'God shows Abram the stars: so shall your seed be. Romans 4 and Hebrews 11 invoke this against biological impossibility. First principle: God\'s multiplication is creative, not merely reproductive.',
    sourceKeywords: ['stars', 'number', 'seed'],
    fulfillmentKeywords: ['stars', 'sand', 'innumerable', 'father of many nations', 'seed'],
    terms: [
      { term: 'stars', original: 'הַכּוֹכָבִים', translit: 'ha-kokhavim', gloss: 'the stars', note: 'Heb 11:12 — as the stars of the sky in multitude.' },
    ],
  },
  'gen-15-6': {
    title: 'He Believed God — Righteousness by Faith',
    principle:
      'Abram believed the LORD and God counted it to him as righteousness. Paul makes this the charter of justification by faith; James shows faith perfected by action. First principle: righteousness is imputed on the basis of trust in God\'s word.',
    sourceKeywords: ['believed', 'LORD', 'counted', 'righteousness'],
    fulfillmentKeywords: ['Abraham believed', 'counted', 'righteousness', 'scripture fulfilled', 'Friend of God'],
    terms: [
      { term: 'believed', original: 'הֶאֱמִן', translit: 'heʾemin', gloss: 'he believed / trusted / stayed firm', note: 'Root ʾmn — same as amen. Greek ἐπίστευσεν (episteusen).' },
      { term: 'counted', original: 'חָשַׁב', translit: 'chashav', gloss: 'to count, credit, reckon', note: 'Greek λογίζομαι (logizomai) — legal accounting of righteousness.' },
    ],
  },
  'gen-15-13': {
    title: 'Stranger Four Hundred Years',
    principle:
      'Abram\'s seed will sojourn and be afflicted 400 years. Stephen and Paul preserve this chronology. First principle: promise includes delay and suffering before fulfillment.',
    sourceKeywords: ['stranger', 'land', 'not theirs', 'serve', 'afflict', 'four hundred'],
    fulfillmentKeywords: ['strange land', 'bondage', 'evil', 'four hundred years', 'sojourning', 'four hundred and thirty'],
    terms: [
      { term: 'afflict', original: 'עִנּוּ', translit: 'ʿinnu', gloss: 'they will oppress them', note: 'Root of "afflict" used for Passover night (Exod 12, Num 24).' },
    ],
  },
  'gen-15-18': {
    title: 'Covenant of the Land',
    principle:
      'God makes a covenant with Abram, giving the land from Egypt\'s river to Euphrates. Acts 7 and Galatians 3 remember this as promise-covenant. First principle: land covenant is unilateral gift confirmed by God.',
    sourceKeywords: ['covenant', 'seed', 'given this land', 'river of Egypt', 'Euphrates'],
    fulfillmentKeywords: ['covenant of circumcision', 'covenant', 'confirmed', 'promise', 'law'],
    terms: [
      { term: 'covenant', original: 'בְּרִית', translit: 'berit', gloss: 'covenant', note: 'Gal 3:17 — covenant confirmed by God cannot be annulled by later law.' },
    ],
  },
  'gen-16-11': {
    title: 'Ishmael — God Hears',
    principle:
      'The angel names Ishmael because the LORD heard Hagar\'s affliction. Luke: the angel hears Zacharias\' prayer. First principle: God hears the afflicted, including those outside the primary line — yet promise continues through Isaac.',
    sourceKeywords: ['Ishmael', 'LORD hath heard', 'affliction', 'son'],
    fulfillmentKeywords: ['prayer is heard', 'bear thee a son', 'call his name'],
    terms: [
      { term: 'Ishmael', original: 'יִשְׁמָעֵאל', translit: 'Yishmaʿel', gloss: 'God will hear', note: 'Gal 4 — contrast children of promise vs. flesh.' },
    ],
  },
  'gen-16-13': {
    title: 'Thou God Seest Me',
    principle:
      'Hagar names the LORD who spoke to her: You are a God who sees. First principle: divine omniscience is personal and merciful, not merely abstract.',
    sourceKeywords: ['Thou God seest me', 'looked after', 'seeth'],
    fulfillmentKeywords: ['seeth', 'presence', 'God'],
    terms: [
      { term: 'You are a God of seeing', original: 'אַתְּ אֵל רֳאִי', translit: 'ʾatt el roʾi', gloss: 'you are the God who sees me', note: 'Beer-lahai-roi: well of the Living One who sees me.' },
    ],
  },
  'gen-17-1': {
    title: 'Almighty God — Walk Before Me',
    principle:
      'God reveals Himself as El Shaddai and commands Abram to walk before Him and be perfect/upright. First principle: covenant relationship requires all-powerful grace and wholehearted walk.',
    sourceKeywords: ['Almighty God', 'walk before me', 'perfect'],
    fulfillmentKeywords: ['Almighty', 'walk', 'upright', 'perfect'],
    terms: [
      { term: 'Almighty', original: 'אֵל שַׁדַּי', translit: 'El Shaddai', gloss: 'God Almighty / All-Sufficient', note: 'LXX θεὸς ἱκανός / παντοκράτωρ — sufficient power for barrenness.' },
    ],
  },
  'gen-17-5': {
    title: 'Abraham — Father of a Multitude',
    principle:
      'Abram is renamed Abraham: father of many nations. Paul: against hope he believes he will be father of many nations. First principle: God renames people according to promise, not present fact.',
    sourceKeywords: ['Abram', 'Abraham', 'father of many nations', 'name'],
    fulfillmentKeywords: ['father of many nations', 'Abraham', 'generation of Jesus Christ'],
    terms: [
      { term: 'Abraham', original: 'אַבְרָהָם', translit: 'Avraham', gloss: 'father of a multitude', note: 'Rom 4:17 — God who gives life and calls the nonexistent as existent.' },
    ],
  },
  'gen-17-6': {
    title: 'Nations and Kings from Abraham',
    principle:
      'God will make Abraham exceedingly fruitful; nations and kings shall come from him. Matthew\'s genealogy ends in King Jesus. First principle: the royal line is promised in the patriarchal covenant.',
    sourceKeywords: ['exceeding fruitful', 'nations', 'kings'],
    fulfillmentKeywords: ['nations', 'kings', 'Christ', 'Lord'],
    terms: [
      { term: 'kings', original: 'מְלָכִים', translit: 'melakhim', gloss: 'kings', note: 'Matt 1:1 — Jesus Christ, son of David, son of Abraham.' },
    ],
  },
  'gen-17-7': {
    title: 'Everlasting Covenant — God to You and Seed',
    principle:
      'God establishes an everlasting covenant to be God to Abram and his seed. Luke: God remembered His holy covenant. First principle: covenant is relational ("I will be your God") before it is territorial.',
    sourceKeywords: ['everlasting covenant', 'God unto thee', 'seed'],
    fulfillmentKeywords: ['holy covenant', 'mercy', 'oath', 'God'],
    terms: [
      { term: 'I will be to you for a God', original: 'לִהְיוֹת לְךָ לֵאלֹהִים', translit: 'lihyot lekha le-Elohim', gloss: 'to be God to you', note: 'Formula of covenant intimacy (Jer 31:33; Heb 8:10).' },
    ],
  },
  'gen-17-8': {
    title: 'Everlasting Possession — Better Country',
    principle:
      'Canaan is given as everlasting possession. Hebrews: they desire a better, heavenly country; Revelation: holy Jerusalem. First principle: land is both historical grant and type of the city to come.',
    sourceKeywords: ['land', 'sojourn', 'Canaan', 'everlasting possession', 'their God'],
    fulfillmentKeywords: ['better', 'heavenly', 'city', 'holy Jerusalem', 'God'],
    terms: [
      { term: 'everlasting possession', original: 'אֲחֻזַּת עוֹלָם', translit: 'ʾachuzzat ʿolam', gloss: 'holding of the age / perpetual possession', note: 'Type fulfilled in new creation city.' },
    ],
  },
  'gen-17-16': {
    title: 'Sarah — Mother of Nations',
    principle:
      'God promises to bless Sarah so she shall be a mother of nations; kings of people shall be of her. Paul: through Isaac shall your seed be called; believers are children of promise like Isaac. First principle: the promise runs through the barren wife by divine power.',
    sourceKeywords: ['Sarah', 'bless her', 'mother of nations', 'kings'],
    fulfillmentKeywords: ['Isaac', 'seed', 'called', 'children of promise', 'throne', 'Son of the Highest'],
    terms: [
      { term: 'Sarah', original: 'שָׂרָה', translit: 'Sarah', gloss: 'princess', note: 'Gal 4:22–31 — Sarah/Hagar allegory: promise vs. flesh.' },
    ],
  },
  'gen-17-19': {
    title: 'Isaac — Covenant with Him',
    principle:
      'God will establish covenant with Isaac and his seed after him. Paul and Hebrews insist the promise is Isaac\'s, not Ishmael\'s. First principle: election of the child of promise is sovereign and specific.',
    sourceKeywords: ['Isaac', 'covenant', 'everlasting', 'seed'],
    fulfillmentKeywords: ['Isaac', 'seed', 'called', 'promise', 'only begotten'],
    terms: [
      { term: 'Isaac', original: 'יִצְחָק', translit: 'Yitzchaq', gloss: 'he laughs', note: 'Laughing promise child; Heb 11:18 — "in Isaac shall your seed be called."' },
    ],
  },
  'gen-17-22': {
    title: 'Circumcision Eighth Day',
    principle:
      'God finishes speaking and Abraham circumcises as commanded. Luke: Jesus circumcised on the eighth day. First principle: covenant sign marks identity; Christ fulfills the righteousness it signified.',
    sourceKeywords: ['circumcised', 'flesh of their foreskin', 'selfsame day'],
    fulfillmentKeywords: ['circumcised', 'eighth day', 'law'],
    terms: [
      { term: 'circumcised', original: 'מָל', translit: 'mal', gloss: 'to circumcise', note: 'Rom 2:29 — circumcision of the heart by the Spirit.' },
    ],
  },
  'gen-18-10': {
    title: 'Sarah Shall Have a Son',
    principle:
      'The LORD promises return according to the time of life and a son for Sarah. Romans and Hebrews celebrate faith against barrenness; Luke\'s birth announcements echo this pattern. First principle: God\'s timing is exact; His power overcomes barrenness.',
    sourceKeywords: ['return', 'Sarah', 'son', 'time of life'],
    fulfillmentKeywords: ['Isaac', 'promised', 'conceive', 'past age', 'prayer is heard', 'son'],
    terms: [
      { term: 'time of life', original: 'כָּעֵת חַיָּה', translit: 'ka-ʿet chayyah', gloss: 'at the living time / season of life', note: 'Rev 19:10; 22:6 echo appointed-time language — God keeps seasons.' },
    ],
  },
  'gen-18-14': {
    title: 'Too Hard for the LORD?',
    principle:
      'Is anything too hard for the LORD? First principle: omnipotence is not theoretical — it is pledged to fulfill specific promises.',
    sourceKeywords: ['too hard', 'LORD', 'appointed time', 'return', 'Sarah', 'son'],
    fulfillmentKeywords: ['with God', 'nothing', 'impossible', 'great things'],
    terms: [
      { term: 'too hard', original: 'הֲיִפָּלֵא', translit: 'hayyippaleʾ', gloss: 'too wonderful / miraculous / difficult', note: 'Jer 32:17, 27 reuses this question for restoration.' },
    ],
  },
  'gen-18-18': {
    title: 'All Nations Blessed in Abraham',
    principle:
      'Abraham shall become a mighty nation and all nations blessed in him. Paul and Acts ground Gentile blessing in this promise; John: Christ draws all to Himself. First principle: election of Abraham is for the world\'s blessing.',
    sourceKeywords: ['mighty nation', 'all the nations', 'earth', 'blessed'],
    fulfillmentKeywords: ['nations', 'blessed', 'all nations', 'draw', 'all men'],
    terms: [
      { term: 'all nations of the earth', original: 'כֹּל גּוֹיֵי הָאָרֶץ', translit: 'kol goyei ha-arets', gloss: 'all nations of the land/earth', note: 'Gal 3:8 — scripture preached gospel beforehand.' },
    ],
  },
  'gen-18-19': {
    title: 'Command Children and Household',
    principle:
      'God knows Abraham will command his children and household to keep the way of the LORD. First principle: covenant faithfulness is generational and domestic.',
    sourceKeywords: ['command', 'children', 'household', 'keep the way', 'LORD', 'justice', 'judgment'],
    fulfillmentKeywords: ['commandments', 'teach', 'children'],
    terms: [
      { term: 'keep the way', original: 'שָׁמְרִי דֶּרֶךְ', translit: 'shomrei derekh', gloss: 'keepers of the way', note: 'Way-of-the-LORD language continues into Prophets and NT "the Way."' },
    ],
  },
  'gen-18-25': {
    title: 'Shall Not the Judge Do Right?',
    principle:
      'Abraham intercedes: shall not the Judge of all the earth do right? 2 Peter: God is patient, not wishing any to perish. First principle: God\'s judgments are inseparable from perfect righteousness.',
    sourceKeywords: ['Judge', 'all the earth', 'do right'],
    fulfillmentKeywords: ['longsuffering', 'perish', 'judgment', 'righteousness'],
    terms: [
      { term: 'Judge', original: 'שֹׁפֵט', translit: 'shofet', gloss: 'judge, ruler who decides', note: 'Greek κριτής (kritēs) — God as ultimate just arbiter.' },
    ],
  },
  'gen-19-24': {
    title: 'Sodom and Gomorrah — Judgment Pattern',
    principle:
      'LORD rains fire and brimstone on the cities of the plain. 2 Peter and Jude hold Sodom as fixed example of judgment. First principle: God\'s patience has a terminus; sexual and social rebellion invite catastrophic judgment.',
    sourceKeywords: ['LORD', 'rained', 'fire', 'brimstone', 'Sodom', 'Gomorrah'],
    fulfillmentKeywords: ['Sodom', 'Gomorrha', 'ash', 'fire', 'judgment', 'example'],
    terms: [
      { term: 'brimstone', original: 'גָּפְרִית', translit: 'gofrit', gloss: 'sulphur, brimstone', note: 'Greek θεῖον (theion) — divine-fire motif in Rev 9; 14; 21.' },
    ],
  },
  'gen-19-26': {
    title: 'Lot\'s Wife — Looking Back',
    principle:
      'Lot\'s wife looks back and becomes a pillar of salt. Jesus holds her up as warning. First principle: half-hearted exit from judgment is deadly; covenant obedience is total.',
    sourceKeywords: ['Lot\'s wife', 'looked back', 'pillar', 'salt'],
    fulfillmentKeywords: ['Lot\'s wife', 'remember'],
    terms: [
      { term: 'looked back', original: 'תַּבִּיט', translit: 'tabbit', gloss: 'she looked back intently', note: 'Luke 17:32 — μνημονεύετε τὴν γυναῖκα Λώτ — remember Lot\'s wife.' },
    ],
  },
  'gen-20-6': {
    title: 'God withholds from Sinning',
    principle:
      'God tells Abimelech He withheld him from sinning against God. Proverbs: the king\'s heart is in the LORD\'s hand. First principle: God restrains evil providentially to protect His purposes.',
    sourceKeywords: ['withheld', 'sinning against', 'God', 'integrity', 'heart'],
    fulfillmentKeywords: ['suffered no man', 'reproved kings', 'anointed'],
    terms: [
      { term: 'withheld', original: 'מְנַעְתִּיךָ', translit: 'menaʿtikha', gloss: 'I restrained you', note: 'Common grace / restraining providence (2 Thess 2:6–7 in NT).' },
    ],
  },
  'gen-20-17': {
    title: 'Prayer Heals',
    principle:
      'Abraham prays and God heals Abimelech\'s household. James commends prayer for healing. First principle: intercession has real effects in the material world.',
    sourceKeywords: ['Abraham', 'prayed', 'God', 'healed'],
    fulfillmentKeywords: ['pray one for another', 'healed', 'effectual fervent'],
    terms: [
      { term: 'prayed', original: 'וַיִּתְפַּלֵּל', translit: 'wayyitpallel', gloss: 'and he prayed', note: 'Hithpael — reflexive, earnest intercession.' },
    ],
  },
  'gen-21-12': {
    title: 'In Isaac Shall Thy Seed Be Called',
    principle:
      'God tells Abraham not to grieve over Ishmael: in Isaac shall his seed be called. Romans and Hebrews make this election explicit. First principle: the line of promise is distinguished from the line of flesh.',
    sourceKeywords: ['Isaac', 'seed', 'called', 'Ishmael'],
    fulfillmentKeywords: ['Isaac', 'seed', 'called', 'promise', 'only begotten'],
    terms: [
      { term: 'called', original: 'יִקָּרֵא', translit: 'yiqqareʾ', gloss: 'shall be named / called', note: 'Rom 9:7 — not all Israel are Israel; children of promise.' },
    ],
  },
  'gen-21-13': {
    title: 'Bondwoman\'s Son — Not the Heir',
    principle:
      'The son of the bondwoman will not be heir with the son of the free. Paul: cast out the bondwoman and her son; we are children of promise. First principle: inheritance belongs to freedom, not flesh-effort.',
    sourceKeywords: ['bondwoman', 'son', 'heir', 'freewoman'],
    fulfillmentKeywords: ['bondwoman', 'freewoman', 'cast out', 'children of promise'],
    terms: [
      { term: 'heir', original: 'יָרָשׁ', translit: 'yarash', gloss: 'to inherit, possess', note: 'Gal 4:30 — inherit according to promise.' },
    ],
  },
  'gen-22-1': {
    title: 'God Tests Abraham',
    principle:
      'God tests Abraham. James: tested faith produces steadfastness; Hebrews commends the trial of offering Isaac. First principle: God proves faith to deepen it and display it — He does not tempt to evil.',
    sourceKeywords: ['God did tempt', 'Abraham', 'said', 'Behold'],
    fulfillmentKeywords: ['tried', 'offered', 'faith', 'tempted', 'endure'],
    terms: [
      { term: 'tempt/test', original: 'נִסָּה', translit: 'nissah', gloss: 'to test, prove, assay', note: 'Not moral temptation (cf. Jas 1:13) — proving trial.' },
    ],
  },
  'gen-22-2': {
    title: 'Take Your Son, Your Only Son',
    principle:
      'God commands Abraham to offer Isaac, his unique beloved son. John 3:16 and Romans 8:32 apply the pattern to the Father giving the Son. First principle: the gospel is rooted in divine self-gift of the only Son.',
    sourceKeywords: ['son', 'only son', 'Isaac', 'love', 'offer', 'burnt offering', 'Moriah'],
    fulfillmentKeywords: ['only begotten Son', 'gave', 'world', 'spared not', 'own Son', 'delivered him up'],
    terms: [
      { term: 'only son', original: 'יָחִיד', translit: 'yachid', gloss: 'only, unique, sole one', note: 'Greek μονογενής (monogenēs) — one of a kind / only-begotten.' },
      { term: 'Moriah', original: 'הַמֹּרִיָּה', translit: 'ha-Moriyyah', gloss: 'the Moriah (chosen by YHWH)', note: '2 Chr 3:1 — Temple mount tradition; near Calvary\'s region.' },
    ],
  },
  'gen-22-5': {
    title: 'I and the Lad Will Worship',
    principle:
      'Abraham says he and the lad will worship and return. Hebrews says Abraham accounted God able to raise Isaac. First principle: true worship can walk toward apparent loss because resurrection is possible with God.',
    sourceKeywords: ['I and the lad', 'go yonder', 'worship', 'come again'],
    fulfillmentKeywords: ['offered', 'only begotten', 'accounting', 'able to raise', 'dead', 'figure'],
    terms: [
      { term: 'worship', original: 'נִשְׁתַּחֲוֶה', translit: 'nishtachaveh', gloss: 'we will bow down / worship', note: 'Includes submission before sacrifice.' },
    ],
  },
  'gen-22-8': {
    title: 'God Will Provide Himself a Lamb',
    principle:
      'Abraham answers Isaac: God will provide Himself the lamb for a burnt offering. John names Jesus the Lamb of God. First principle: provision of substitution is God\'s own work, not man\'s invention.',
    sourceKeywords: ['God will provide', 'himself', 'lamb', 'burnt offering'],
    fulfillmentKeywords: ['Lamb of God', 'taketh away', 'sin', 'world', 'spared not', 'own Son', 'lamb without blemish'],
    terms: [
      { term: 'provide', original: 'יִרְאֶה', translit: 'yirʾeh', gloss: 'he will see / provide', note: 'Yahweh-Yireh — the LORD will see to it (v14).' },
      { term: 'Lamb', original: 'ἀμνός', translit: 'amnos', gloss: 'lamb', note: 'John 1:29 — behold the Lamb of God.' },
    ],
  },
  'gen-22-14': {
    title: 'Jehovah-Jireh — On the Mount',
    principle:
      'Abraham names the place: The LORD will provide; as it is said, On the mount of the LORD it shall be seen. Romans: God did not spare His own Son. First principle: the mount of provision becomes the pattern of atonement.',
    sourceKeywords: ['LORD will provide', 'mount', 'LORD', 'seen'],
    fulfillmentKeywords: ['spared not', 'own Son', 'Lamb', 'as it had been slain'],
    terms: [
      { term: 'Jehovah Jireh', original: 'יְהוָה יִרְאֶה', translit: 'YHWH yirʾeh', gloss: 'the LORD will see / provide', note: 'Theological pivot of the akedah (binding of Isaac).' },
    ],
  },
  'gen-22-16': {
    title: 'By Myself Have I Sworn',
    principle:
      'Because Abraham obeyed to the point of offering his son, God swears by Himself. Hebrews: God willing more abundantly to show the heirs the immutability of His counsel, confirmed it by oath. First principle: covenant certainty is double-secured — word and oath.',
    sourceKeywords: ['By myself have I sworn', 'LORD', 'done this thing', 'withheld', 'only son'],
    fulfillmentKeywords: ['promise', 'oath', 'immutable', 'counsel', 'sworn'],
    terms: [
      { term: 'sworn', original: 'נִשְׁבַּעְתִּי', translit: 'nishbati', gloss: 'I have sworn', note: 'Heb 6:13–18 — two unchangeable things: promise and oath.' },
    ],
  },
  'gen-22-17': {
    title: 'Multiplying Seed as Stars and Sand',
    principle:
      'God multiplies Abraham\'s seed as stars and sand; they possess the gate of enemies. Hebrews 11:12 and Gal 3:29 apply this to the many sons of Abraham by faith. First principle: numerical blessing is covenantal and conflictual.',
    sourceKeywords: ['multiplying', 'multiply', 'seed', 'stars', 'sand', 'gate', 'enemies'],
    fulfillmentKeywords: ['stars', 'sand', 'innumerable', 'Abraham\'s seed', 'heirs', 'enemies'],
    terms: [
      { term: 'gate of his enemies', original: 'שַׁעַר אֹיְבָיו', translit: 'shaʿar oyvav', gloss: 'gate of those hating him', note: 'Military/judicial control; ultimate: Christ\'s victory (1 Cor 15:25).' },
    ],
  },
  'gen-22-18': {
    title: 'In Thy Seed All Nations Blessed',
    principle:
      'In Abraham\'s seed all nations of the earth shall bless themselves. Paul: the seed is Christ; Acts: God raised Jesus to bless you in turning from iniquities. First principle: the global blessing is mediated by the Messiah and applied by repentance.',
    sourceKeywords: ['seed', 'nations', 'earth', 'blessed', 'obeyed'],
    fulfillmentKeywords: ['seed', 'Christ', 'bless', 'turning away', 'iniquities', 'nations'],
    terms: [
      { term: 'seed', original: 'זַרְעֲךָ', translit: 'zarʿakha', gloss: 'your seed', note: 'Gal 3:16 — not to seeds as of many, but to one seed: Christ.' },
    ],
  },
  'gen-23-4': {
    title: 'Stranger and Sojourner',
    principle:
      'Abraham confesses he is a stranger and sojourner among the Hittites. Hebrews and 1 Peter apply this pilgrim identity to believers. First principle: covenant people live as resident aliens awaiting a better city.',
    sourceKeywords: ['stranger', 'sojourner', 'with you'],
    fulfillmentKeywords: ['strangers', 'pilgrims', 'sojourned', 'strange country'],
    terms: [
      { term: 'sojourner', original: 'תּוֹשָׁב', translit: 'toshav', gloss: 'resident alien, temporary dweller', note: 'Greek πάροικος καὶ παρεπίδημος (1 Pet 2:11).' },
    ],
  },
  'gen-24-7': {
    title: 'God Who Took Me — Promise of a Bride',
    principle:
      'Abraham swears by the LORD God of heaven who took him from his father\'s house to give the land and send an angel for a wife for Isaac. John 14: Christ goes to prepare a place and receive His own. First principle: the Father sends to secure a bride for the Son.',
    sourceKeywords: ['LORD God of heaven', 'took me', 'father\'s house', 'land', 'angel', 'wife', 'Isaac'],
    fulfillmentKeywords: ['go', 'prepare a place', 'come again', 'receive you', 'sojourned', 'strange country'],
    terms: [
      { term: 'took me', original: 'לְקָחַנִי', translit: 'leqachani', gloss: 'who took me', note: 'Election as rescue-movement; type of gospel sending (John 14:2–3).' },
    ],
  },
  'gen-24-40': {
    title: 'LORD Before Whom I Walk',
    principle:
      'Abraham says the LORD before whom he walked will send His angel. First principle: divine mission is guaranteed by prior walk with God.',
    sourceKeywords: ['LORD', 'before whom I walk', 'send his angel', 'prosper'],
    fulfillmentKeywords: ['walk', 'way', 'angel'],
    terms: [
      { term: 'before whom I walked', original: 'הִתְהַלַּכְתִּי לְפָנָיו', translit: 'hithallakhti lefanav', gloss: 'I walked habitually before Him', note: 'Same walk-with-God root as Enoch and Noah.' },
    ],
  },
  'gen-24-67': {
    title: 'Isaac Takes Rebekah — Comfort After Sarah',
    principle:
      'Isaac brings Rebekah into his mother\'s tent and is comforted after Sarah\'s death. Isaiah: as the bridegroom rejoices over the bride. First principle: the promised seed is accompanied by a bride and comfort.',
    sourceKeywords: ['Isaac', 'Rebekah', 'wife', 'loved', 'comforted'],
    fulfillmentKeywords: ['bridegroom', 'bride', 'rejoice', 'married'],
    terms: [
      { term: 'comforted', original: 'וַיִּנָּחֵם', translit: 'wayyinnachem', gloss: 'and he was comforted', note: 'Emotional restoration after death — pattern of consolation (Isa 54).' },
    ],
  },
  'gen-25-23': {
    title: 'Two Nations — Elder Shall Serve Younger',
    principle:
      'Rebekah is told two nations are in her womb; the elder shall serve the younger. Romans 9: Jacob I loved. Malachi: Esau I hated. First principle: God\'s electing purpose is free, not based on works or birth order.',
    sourceKeywords: ['two nations', 'womb', 'two manner of people', 'elder', 'serve', 'younger'],
    fulfillmentKeywords: ['Rebecca', 'two sons', 'Jacob', 'loved', 'Esau', 'hated'],
    terms: [
      { term: 'elder serve younger', original: 'רַב יַעֲבֹד צָעִיר', translit: 'rav yaʿavod tsaʿir', gloss: 'the elder/many shall serve the younger/small', note: 'Rom 9:12 — not of works but of Him who calls.' },
    ],
  },
  'gen-26-3': {
    title: 'Sojourn and Bless — Abrahamic Continuity',
    principle:
      'God tells Isaac to sojourn and promises blessing through Abraham\'s covenant. Acts 3: children of the covenant with Abraham. First principle: covenant promise is transmitted generationally by God\'s oath.',
    sourceKeywords: ['sojourn', 'land', 'bless thee', 'covenant', 'Abraham'],
    fulfillmentKeywords: ['covenant', 'fathers', 'seed', 'blessed'],
    terms: [
      { term: 'sojourn', original: 'גּוּר', translit: 'gur', gloss: 'to sojourn as alien', note: 'Life of faith as temporary dwelling until inheritance.' },
    ],
  },
  'gen-26-4': {
    title: 'All Nations Blessed — Promise Repeated',
    principle:
      'God repeats the all-nations blessing to Isaac. Galatians and Acts restate it as gospel. First principle: the same promise is confirmed across generations — no re-negotiation.',
    sourceKeywords: ['seed', 'nations', 'earth', 'blessed', 'Abraham'],
    fulfillmentKeywords: ['nations', 'blessed', 'seed', 'kindreds', 'heir of the world'],
    terms: [
      { term: 'blessed in thy seed', original: 'הִתְבָּרֲכוּ בְזַרְעֶךָ', translit: 'hithbarekhu ve-zarekha', gloss: 'they shall bless themselves by your seed', note: 'Same reflexive blessing as Gen 12:3; 22:18.' },
    ],
  },
  'gen-26-5': {
    title: 'Abraham Obeyed My Voice',
    principle:
      'God blesses because Abraham obeyed His voice and kept charge. Romans: Abraham is father of all who believe; Hebrews lists obedience of faith. First principle: faith is evidenced by obedient hearing.',
    sourceKeywords: ['Abraham', 'obeyed', 'voice', 'kept', 'charge', 'commandments', 'statutes', 'laws'],
    fulfillmentKeywords: ['Abraham', 'believed', 'righteousness', 'obeyed', 'faith'],
    terms: [
      { term: 'obeyed my voice', original: 'שָׁמַע בְּקֹלִי', translit: 'shama be-qoli', gloss: 'he listened to / obeyed my voice', note: 'Shema — hearing that includes doing.' },
    ],
  },
  'gen-27-29': {
    title: 'Let Peoples Bow — Blessing of Nations',
    principle:
      'Isaac blesses Jacob: let people serve thee, and nations bow down. Revelation: every knee and the Lion of Judah. First principle: patriarchal blessing anticipates universal homage to the promised line.',
    sourceKeywords: ['people', 'nations', 'bow down', 'serve', 'brethren', 'mother\'s sons', 'curse', 'blessed'],
    fulfillmentKeywords: ['tribe of Juda', 'Root of David', 'prevailed', 'nations', 'kindreds'],
    terms: [
      { term: 'bow down', original: 'יִשְׁתַּחֲוּ', translit: 'yishtachavu', gloss: 'they shall bow down to you', note: 'Phil 2:10 — every knee bowing to Jesus as Lord.' },
    ],
  },
  'gen-27-33': {
    title: 'Isaac Trembles — Blessing Cannot Be Revoked',
    principle:
      'Isaac trembles exceedingly when he learns Esau was supplanted. Hebrews: Esau found no place for repentance though he sought the blessing with tears. First principle: covenant blessing, once given in the line of promise, stands.',
    sourceKeywords: ['trembled very exceedingly', 'who? where', 'hunted', 'blessing', 'blessed him'],
    fulfillmentKeywords: ['Esau', 'place of repentance', 'tears', 'blessing'],
    terms: [
      { term: 'trembled', original: 'וַיֶּחֱרַד', translit: 'wayyecharad', gloss: 'he trembled / was terrified', note: 'Recognition of irreversible divine choice.' },
    ],
  },
  'gen-28-12': {
    title: 'Ladder to Heaven — Angels Ascending',
    principle:
      'Jacob dreams of a ladder set up on earth with its top in heaven, angels ascending and descending. Jesus: you will see heaven opened and angels ascending and descending on the Son of Man. First principle: Christ is the true meeting-place of heaven and earth.',
    sourceKeywords: ['ladder', 'set up', 'earth', 'top', 'heaven', 'angels', 'ascending', 'descending'],
    fulfillmentKeywords: ['heaven open', 'angels', 'ascending', 'descending', 'Son of man'],
    terms: [
      { term: 'ladder', original: 'סֻלָּם', translit: 'sullam', gloss: 'ladder, stairway, ramp', note: 'Type fulfilled in the Son of Man as access (John 1:51).' },
    ],
  },
  'gen-28-13': {
    title: 'LORD Above the Ladder',
    principle:
      'The LORD stands above the ladder and repeats the Abraham promises. First principle: God Himself is above the means of access; the promise is personal YHWH\'s.',
    sourceKeywords: ['LORD', 'above it', 'I am the LORD God', 'Abraham', 'Isaac', 'land', 'seed', 'dust'],
    fulfillmentKeywords: ['God', 'seed', 'land', 'promise'],
    terms: [
      { term: 'I am the LORD', original: 'אֲנִי יְהוָה', translit: 'ani YHWH', gloss: 'I am YHWH', note: 'Self-identification anchoring covenant continuity.' },
    ],
  },
  'gen-28-14': {
    title: 'All Families Blessed — Again to Jacob',
    principle:
      'In Jacob and his seed all families of the earth shall be blessed. Luke\'s genealogy and Gal 3 connect Christ to this line; Ephesians: Gentiles fellowheirs. First principle: the Abrahamic blessing is restated to Jacob for the whole earth.',
    sourceKeywords: ['dust of the earth', 'spread abroad', 'west', 'east', 'north', 'south', 'seed', 'families', 'earth', 'blessed'],
    fulfillmentKeywords: ['Adam', 'God', 'seed', 'Christ', 'Gentiles', 'fellowheirs', 'same body', 'promise'],
    terms: [
      { term: 'all families', original: 'כֹּל מִשְׁפְּחֹת הָאֲדָמָה', translit: 'kol mishpechot ha-adamah', gloss: 'all families of the ground', note: 'Echoes Gen 12:3; 18:18; 22:18 — one gospel thread.' },
    ],
  },
  'gen-28-15': {
    title: 'I Am with You',
    principle:
      'God promises: I am with you, will keep you, and bring you back. Matthew closes with the same "I am with you always." First principle: covenant presence is the believer\'s guarantee of completion.',
    sourceKeywords: ['I am with thee', 'keep thee', 'bring thee again', 'not leave'],
    fulfillmentKeywords: ['I am with you', 'always', 'end of the world', 'never leave'],
    terms: [
      { term: 'I am with you', original: 'אָנֹכִי עִמָּךְ', translit: 'anokhi ʿimmakh', gloss: 'I myself am with you', note: 'Immanuel principle from Abraham to Christ (Matt 28:20).' },
    ],
  },
  'gen-28-17': {
    title: 'House of God, Gate of Heaven',
    principle:
      'Jacob names the place Bethel: house of God, gate of heaven. First principle: thin places of revelation become landmarks of worship and promise.',
    sourceKeywords: ['How dreadful', 'place', 'house of God', 'gate of heaven'],
    fulfillmentKeywords: ['city', 'foundations', 'gate', 'heaven'],
    terms: [
      { term: 'Bethel', original: 'בֵּית־אֵל', translit: 'Beit-El', gloss: 'house of God', note: 'Later becomes a warning against false worship — name without presence.' },
    ],
  },
  'gen-31-13': {
    title: 'Bethel Where You Anointed the Pillar',
    principle:
      'God identifies Himself to Jacob at Bethel. Hebrews: patriarchs confessed they were strangers; John echoes heaven open. First principle: God meets us at remembered places of prior grace.',
    sourceKeywords: ['Bethel', 'anointedst', 'pillar', 'vowedst', 'vow'],
    fulfillmentKeywords: ['died in faith', 'afar off', 'heaven open', 'angels'],
    terms: [
      { term: 'anointed', original: 'מָשַׁחְתָּ', translit: 'masachta', gloss: 'you anointed', note: 'Mashiach root — anointing marks sacred presence and later kingship/priesthood.' },
    ],
  },
  'gen-31-42': {
    title: 'God of Abraham, Fear of Isaac',
    principle:
      'Jacob swears by the fear of Isaac, the God of Abraham. First principle: covenant identity is confessed in the midst of family conflict.',
    sourceKeywords: ['God of Abraham', 'fear of Isaac', 'God of my father'],
    fulfillmentKeywords: ['God', 'fathers', 'faith'],
    terms: [
      { term: 'fear of Isaac', original: 'פַּחַד יִצְחָק', translit: 'pachad Yitzchaq', gloss: 'the Fear of Isaac', note: 'Rare divine title — reverent dread of the covenant God.' },
    ],
  },
  'gen-32-24': {
    title: 'Jacob Wrestles Until Daybreak',
    principle:
      'A man wrestles with Jacob until the breaking of the day. First principle: prevailing prayer may involve struggle and clinging until blessing is secured.',
    sourceKeywords: ['Jacob', 'left alone', 'man', 'wrestled', 'breaking of the day'],
    fulfillmentKeywords: ['strive', 'enter', 'strait gate'],
    terms: [
      { term: 'wrestled', original: 'וַיֵּאָבֵק', translit: 'wayyeʾaveq', gloss: 'and he wrestled / grappled in dust', note: 'Root ʾavaq — dust; Hosea 12:4 reads this as wrestling with God.' },
    ],
  },
  'gen-32-28': {
    title: 'Israel — You Have Striven with God',
    principle:
      'Jacob is renamed Israel: he has striven with God and men and prevailed. First principle: the covenant people are named by grace-through-struggle; every knee will bow to the God who names them.',
    sourceKeywords: ['name shall be called', 'Israel', 'prince', 'power', 'God', 'men', 'prevailed'],
    fulfillmentKeywords: ['redeemer', 'LORD', 'mighty One of Jacob', 'every knee', 'bow', 'tongue'],
    terms: [
      { term: 'Israel', original: 'יִשְׂרָאֵל', translit: 'Yisraʾel', gloss: 'he strives/ rules with God', note: 'Phil 2:10 — homage to the Lord who is greater than Jacob\'s struggle.' },
    ],
  },
  'gen-32-30': {
    title: 'I Have Seen God Face to Face',
    principle:
      'Jacob calls the place Peniel: I have seen God face to face, and my life is preserved. John: no one has seen God; the only-begotten declares Him. First principle: full vision of God is reserved; the Son reveals the Father.',
    sourceKeywords: ['seen God', 'face to face', 'life is preserved'],
    fulfillmentKeywords: ['seen God', 'only begotten', 'declared'],
    terms: [
      { term: 'face to face', original: 'פָּנִים אֶל־פָּנִים', translit: 'panim el-panim', gloss: 'faces to faces', note: 'Theophany limited under old covenant; fulfilled in Christ (John 1:18).' },
    ],
  },
  'gen-33-20': {
    title: 'El Elohe Israel — Altar at Shechem',
    principle:
      'Jacob erects an altar and calls it El Elohe Israel. First principle: reconciliation with Esau is followed by worship of the God of Israel.',
    sourceKeywords: ['altar', 'El-elohe-Israel'],
    fulfillmentKeywords: ['Israel', 'God'],
    terms: [
      { term: 'El Elohe Israel', original: 'אֵל אֱלֹהֵי יִשְׂרָאֵל', translit: 'El Elohe Yisraʾel', gloss: 'God, the God of Israel', note: 'Personal covenant God of the renamed patriarch.' },
    ],
  },
  'gen-35-9': {
    title: 'God Appears Again at Bethel',
    principle:
      'God appears to Jacob again and blesses him. First principle: God reconfirms promise after failure and return.',
    sourceKeywords: ['God', 'appeared', 'blessed'],
    fulfillmentKeywords: ['God', 'blessed'],
    terms: [
      { term: 'appeared', original: 'וַיֵּרָא', translit: 'wayyeraʾ', gloss: 'and he appeared', note: 'Revelation is progressive and repeated for the covenant line.' },
    ],
  },
  'gen-35-10': {
    title: 'Your Name Israel',
    principle:
      'God reaffirms: your name is Israel. First principle: covenant identity survives family history and personal failure.',
    sourceKeywords: ['name', 'Jacob', 'Israel', 'be called Israel'],
    fulfillmentKeywords: ['Israel', 'name'],
    terms: [
      { term: 'Israel', original: 'יִשְׂרָאֵל', translit: 'Yisraʾel', gloss: 'God strives / prince with God', note: 'Not Ishmael, not Esau — this name marks the promise people.' },
    ],
  },
  'gen-35-11': {
    title: 'Nation and Kings from You',
    principle:
      'God promises nation and kings from Jacob. Luke 1 and Matthew 1 culminate in King Jesus. First principle: royal messianic hope is patriarchal before it is Davidic.',
    sourceKeywords: ['nation', 'company of nations', 'kings', 'come out of thy loins', 'land'],
    fulfillmentKeywords: ['throne', 'David', 'kingdom', 'Jesus', 'Christ', 'son of David'],
    terms: [
      { term: 'kings', original: 'מְלָכִים', translit: 'melakhim', gloss: 'kings', note: '2 Sam 7:12–16 narrows to Davidic dynasty → Messiah.' },
    ],
  },
  'gen-35-12': {
    title: 'Land to Jacob\'s Seed',
    principle:
      'The land given to Abraham and Isaac is given to Jacob and his seed. Romans 9: Israelites have the covenants and promises; Gal 3:16: seed is Christ. First principle: land and blessing converge in the promised Seed.',
    sourceKeywords: ['land', 'Abraham', 'Isaac', 'give it', 'seed after thee'],
    fulfillmentKeywords: ['Israelites', 'covenants', 'giving of the law', 'service', 'promises', 'Christ', 'seed'],
    terms: [
      { term: 'seed after thee', original: 'זַרְעֲךָ אַחֲרֶיךָ', translit: 'zarʿakha achareykha', gloss: 'your seed after you', note: 'Generational transfer of covenant grant.' },
    ],
  },
  'gen-35-22': {
    title: 'Reuben\'s Sin — Line Continues Anyway',
    principle:
      'Israel\'s firstborn sins; the line continues by God\'s grace. 1 Chron preserves the genealogy; Christ comes through Judah, not Reuben. First principle: human failure does not cancel divine election.',
    sourceKeywords: ['Reuben', 'Israel', 'concubine', 'heard', 'sin'],
    fulfillmentKeywords: ['genealogy', 'Israel'],
    terms: [
      { term: 'firstborn', original: 'בְּכוֹר', translit: 'bekhor', gloss: 'firstborn', note: 'Birthright passes by divine choice, not automatic succession.' },
    ],
  },
  'gen-36-31': {
    title: 'Kings in Edom Before Israel\'s King',
    principle:
      'Edom had kings before Israel\'s kings. First principle: worldly thrones may precede God\'s kingdom historically, but do not replace it.',
    sourceKeywords: ['kings', 'reigned', 'Edom', 'before', 'Israel'],
    fulfillmentKeywords: ['kingdom', 'world', 'Lord', 'Christ'],
    terms: [
      { term: 'Edom', original: 'אֱדוֹם', translit: 'ʾEdom', gloss: 'red (Esau\'s line)', note: 'Typifies flesh-line rivalry with the promise-line.' },
    ],
  },
  'gen-37-2': {
    title: 'Joseph the Lad — Beloved Son',
    principle:
      'Joseph is a lad with the sons of Bilhah and Zilpah; Israel loves Joseph. Acts recounts the patriarchs\' envy. First principle: the beloved son becomes the rejected deliverer — pattern of Christ.',
    sourceKeywords: ['Joseph', 'lad', 'sons', 'Bilhah', 'Zilpah', 'Israel', 'loved', 'Joseph'],
    fulfillmentKeywords: ['patriarchs', 'envy', 'sold', 'Joseph', 'God was with him'],
    terms: [
      { term: 'lad', original: 'נַעַר', translit: 'naʿar', gloss: 'youth, young man', note: 'Same word for Joseph before his rise — vulnerability before glory.' },
    ],
  },
  'gen-37-5': {
    title: 'Joseph\'s Dream — Bowing Sheaf',
    principle:
      'Joseph dreams a sheaf rises and others bow. Romans 8: God works all things for good. First principle: God ordains suffering into exaltation for the saving of many.',
    sourceKeywords: ['dream', 'sheaf', 'arose', 'stood upright', 'sheaves', 'obeisance'],
    fulfillmentKeywords: ['all things work together', 'good', 'sold', 'preserve', 'life', 'determinate counsel'],
    terms: [
      { term: 'obeisance', original: 'תִּשְׁתַּחֲוֶיןָ', translit: 'tishtachaveynah', gloss: 'they bowed down', note: 'Phil 2:9–11 pattern: humility → exaltation → homage.' },
    ],
  },
  'gen-37-7': {
    title: 'Sun, Moon, Stars Bow to Joseph',
    principle:
      'The sun, moon, and stars bow to Joseph. Revelation 12 and Isaiah 45: universal homage. First principle: the exalted one receives cosmic honor — ultimately Christ.',
    sourceKeywords: ['sun', 'moon', 'stars', 'made obeisance'],
    fulfillmentKeywords: ['name above every name', 'knee', 'bow', 'tongue', 'confess', 'Lord'],
    terms: [
      { term: 'stars', original: 'הַכּוֹכָבִים', translit: 'ha-kokhavim', gloss: 'the stars', note: 'Rev 12:1 — woman crowned with twelve stars; royal/tribal imagery.' },
    ],
  },
  'gen-37-9': {
    title: 'Sun Moon Eleven Stars',
    principle:
      'Joseph dreams again with sun, moon, and eleven stars. First principle: family and even parents will bow to the chosen one — hard truth of election.',
    sourceKeywords: ['sun', 'moon', 'eleven stars', 'obeisance'],
    fulfillmentKeywords: ['woman', 'twelve stars', 'crown', 'Judah'],
    terms: [
      { term: 'eleven stars', original: 'אַחַד עָשָׂר כּוֹכָבִים', translit: 'achad ʿasar kokhavim', gloss: 'eleven stars', note: 'Brothers of Joseph — tribal symbolism.' },
    ],
  },
  'gen-37-23': {
    title: 'Joseph Stripped of His Coat',
    principle:
      'Brothers strip Joseph of his coat of many colors. First principle: the beloved is stripped before he is enthroned; shame precedes honor.',
    sourceKeywords: ['stripped', 'Joseph', 'coat', 'many colours'],
    fulfillmentKeywords: ['raiment', 'parted', 'lots'],
    terms: [
      { term: 'coat', original: 'כְּתֹנֶת פַּסִּים', translit: 'ketonet passim', gloss: 'tunic of pieces / sleeves', note: 'Royal/privileged garment; stripped before exaltation.' },
    ],
  },
  'gen-37-28': {
    title: 'Sold for Twenty Pieces of Silver',
    principle:
      'Joseph is sold to Ishmaelites for twenty pieces. Zechariah and Matthew: thirty pieces for the Messiah, cast to the potter. Acts: delivered by wicked hands. First principle: the deliverer is betrayed for a price — redemption is costly.',
    sourceKeywords: ['Midianites', 'merchantmen', 'silver', 'sold', 'Joseph', 'Egypt'],
    fulfillmentKeywords: ['thirty pieces', 'silver', 'potter', 'betrayed', 'crucified', 'slain'],
    terms: [
      { term: 'sold', original: 'וַיִּמְכְּרוּ', translit: 'wayyimkeru', gloss: 'they sold', note: 'Price motif intensified to thirty in Zech 11; fulfilled in Judas.' },
    ],
  },
  'gen-37-34': {
    title: 'Jacob Mourns — Many Days',
    principle:
      'Jacob refuses comfort over Joseph. First principle: grief over the lost son anticipates the mourning for the pierced one (Zech 12).',
    sourceKeywords: ['Jacob', 'rent', 'sackcloth', 'mourned', 'son', 'many days', 'refused', 'comforted'],
    fulfillmentKeywords: ['Rachel', 'weeping', 'refused', 'comforted'],
    terms: [
      { term: 'refused to be comforted', original: 'מֵאֵן לְהִתְנַחֵם', translit: 'meʾen le-hitnachem', gloss: 'he refused to be comforted', note: 'Matt 2:18 — Rachel weeping for her children, fulfillment language.' },
    ],
  },
  'gen-37-35': {
    title: 'I Will Go Down to Sheol',
    principle:
      'Jacob says he will go down to Sheol mourning for his son. First principle: death-love of the father for the son is real; resurrection hope comes later.',
    sourceKeywords: ['grave', 'mourning', 'son'],
    fulfillmentKeywords: ['weep', 'children', 'not'],
    terms: [
      { term: 'grave/Sheol', original: 'שְׁאוֹל', translit: 'sheʾol', gloss: 'realm of the dead', note: 'Descent into death language later applied typologically to Christ.' },
    ],
  },
  'gen-38-26': {
    title: 'Judah and Tamar — Messianic Line Preserved',
    principle:
      'Judah acknowledges Tamar is more righteous; Perez is born. Matthew includes Tamar in Jesus\' genealogy. First principle: God writes even scandalous stories into the Messiah\'s line by grace.',
    sourceKeywords: ['Tamar', 'righteous', 'I', 'give her to', 'Perez', 'Pharez'],
    fulfillmentKeywords: ['Phares', 'Zara', 'Thamar', 'generation of Jesus Christ'],
    terms: [
      { term: 'more righteous', original: 'צָדְקָה מִמֶּנִּי', translit: 'tsadqah mimmenni', gloss: 'she is more righteous than I', note: 'Judah\'s confession becomes the path of messianic descent.' },
    ],
  },
  'gen-39-2': {
    title: 'The LORD Was with Joseph',
    principle:
      'The LORD is with Joseph and he prospers. Psalm 105 recounts the same. First principle: covenant presence does not require comfort; it produces faithfulness in foreign soil.',
    sourceKeywords: ['LORD', 'was with Joseph', 'prosperous man'],
    fulfillmentKeywords: ['God was with him', 'favour', 'wisdom', 'sold for a servant'],
    terms: [
      { term: 'the LORD was with him', original: 'וַיהוָה אֶת־יוֹסֵף', translit: 'wa-YHWH et-Yosef', gloss: 'and YHWH was with Joseph', note: 'Repeated refrain of the Joseph cycle.' },
    ],
  },
  'gen-39-21': {
    title: 'God Gave Joseph Favor in Prison',
    principle:
      'Even in prison, the LORD shows mercy and gives favor. First principle: God\'s presence does not prevent pits; it governs them toward purpose.',
    sourceKeywords: ['LORD', 'was with Joseph', 'shewed him mercy', 'favour', 'keeper of the prison'],
    fulfillmentKeywords: ['delivered', 'afflictions', 'favour', 'wisdom', 'Pharaoh', 'word of the LORD', 'tried him'],
    terms: [
      { term: 'mercy', original: 'חֶסֶד', translit: 'chesed', gloss: 'steadfast love, covenant loyalty', note: 'Greek ἔλεος (eleos) — same loyal-love thread.' },
    ],
  },
  'gen-39-23': {
    title: 'Whatever He Did, the LORD Made It Prosper',
    principle:
      'The keeper looks not to anything in Joseph\'s hand because the LORD was with him. First principle: success attributed to God\'s presence, not Joseph\'s management alone.',
    sourceKeywords: ['LORD', 'made', 'prosper', 'he did'],
    fulfillmentKeywords: ['God', 'favour', 'wisdom'],
    terms: [
      { term: 'prosper', original: 'מַצְלִיחַ', translit: 'matsliach', gloss: 'causing to succeed', note: 'Divine causality behind human diligence.' },
    ],
  },
  'gen-40-15': {
    title: 'Stolen Out of the Hebrews\' Land',
    principle:
      'Joseph tells the cupbearer he was stolen from the Hebrews\' land. First principle: unjust exile is part of the deliverer\'s résumé, not his disqualification.',
    sourceKeywords: ['stolen', 'Hebrews\' land', 'here', 'done nothing', 'pit'],
    fulfillmentKeywords: ['delivered', 'afflictions', 'Joseph'],
    terms: [
      { term: 'stolen', original: 'גֹּנַבְתִּי', translit: 'gonavti', gloss: 'I was stolen', note: 'Innocent victim language — later intensified in the Righteous One.' },
    ],
  },
  'gen-41-41': {
    title: 'Joseph Over All Egypt',
    principle:
      'Pharaoh sets Joseph over all the land of Egypt. Acts: made governor over Egypt; Philippians/Daniel: all authority to the Son. First principle: the suffering servant is enthroned with universal rule.',
    sourceKeywords: ['Pharaoh', 'set thee over', 'land of Egypt'],
    fulfillmentKeywords: ['governor', 'Egypt', 'house', 'name above every name', 'dominion', 'glory', 'kingdom'],
    terms: [
      { term: 'set over', original: 'נְתַתִּיךָ עַל', translit: 'netatikha ʿal', gloss: 'I have set you over', note: 'Investiture formula — later universalized for Christ (Dan 7:14; Phil 2:9).' },
    ],
  },
  'gen-41-45': {
    title: 'Joseph Given a New Name and Wife',
    principle:
      'Pharaoh renames Joseph and gives him Asenath. First principle: exaltation includes identity transformation by the king\'s favor.',
    sourceKeywords: ['Pharaoh', 'called Joseph\'s name', 'Zaphnath-paaneah', 'wife', 'Asenath'],
    fulfillmentKeywords: ['name', 'new', 'exalted'],
    terms: [
      { term: 'called his name', original: 'וַיִּקְרָא', translit: 'wayyiqraʾ', gloss: 'and he called/named', note: 'Royal naming as adoption into Egyptian house.' },
    ],
  },
  'gen-41-46': {
    title: 'Joseph Thirty Years Old Before Pharaoh',
    principle:
      'Joseph is thirty when he stands before Pharaoh. Luke: Jesus about thirty when He begins ministry. First principle: public mission begins at full manhood under God\'s timing.',
    sourceKeywords: ['Joseph', 'thirty years old', 'stood', 'Pharaoh'],
    fulfillmentKeywords: ['thirty years of age', 'began'],
    terms: [
      { term: 'thirty years', original: 'בֶּן־שְׁלֹשִׁים שָׁנָה', translit: 'ben-sheloshim shanah', gloss: 'son of thirty years', note: 'Luke 3:23 — Jesus about thirty years old.' },
    ],
  },
  'gen-41-57': {
    title: 'All Countries Came to Egypt',
    principle:
      'All countries come to Joseph for grain. John: Christ draws all; Acts: all everywhere to repent; Rev: water of life freely. First principle: the enthroned one becomes the world\'s source of life.',
    sourceKeywords: ['all countries', 'Egypt', 'buy corn', 'famine', 'face of the earth'],
    fulfillmentKeywords: ['draw all men', 'repent', 'water of life', 'freely', 'athirst'],
    terms: [
      { term: 'came', original: 'בָּאוּ', translit: 'baʾu', gloss: 'they came', note: 'Necessity-driven pilgrimage to the bread-giver — type of Christ (John 6).' },
    ],
  },
  'gen-42-21': {
    title: 'His Blood Is Required of Us',
    principle:
      'The brothers say Joseph\'s blood is required of them. Luke: Father forgive them; John: own received Him not. First principle: guilt of shedding innocent blood is real; forgiveness is offered at the cross.',
    sourceKeywords: ['guilty', 'brother\'s blood', 'anguish', 'soul', 'required'],
    fulfillmentKeywords: ['pierced', 'mourn', 'forgive', 'received him not'],
    terms: [
      { term: 'blood is required', original: 'דָּמוֹ נִדְרָשׁ', translit: 'damo nidrash', gloss: 'his blood is sought / required', note: 'Accountability for innocent blood (cf. Gen 9:5).' },
    ],
  },
  'gen-42-36': {
    title: 'Joseph Is Not, Simeon Is Not',
    principle:
      'Jacob laments losing Joseph and Simeon. First principle: the father experiences successive losses; hope seems to fail — until return.',
    sourceKeywords: ['Joseph', 'is not', 'Simeon', 'is not', 'take', 'evil'],
    fulfillmentKeywords: ['Rachel', 'weeping', 'not'],
    terms: [
      { term: 'is not', original: 'אֵינֶנּוּ', translit: 'ʾeinnennu', gloss: 'he is no more / not here', note: 'Death-like language for one still alive — resurrection motif in reverse.' },
    ],
  },
  'gen-43-14': {
    title: 'God Almighty Give You Mercy',
    principle:
      'Jacob releases Benjamin with a blessing of El Shaddai\'s mercy. First principle: sending the beloved son requires entrusting him to God Almighty.',
    sourceKeywords: ['God Almighty', 'give you mercy', 'man', 'release', 'brother', 'Benjamin'],
    fulfillmentKeywords: ['mercy', 'God', 'delivered'],
    terms: [
      { term: 'God Almighty', original: 'אֵל שַׁדַּי', translit: 'El Shaddai', gloss: 'God Almighty', note: 'Same title as Gen 17:1 — sufficient power for impossible situations.' },
    ],
  },
  'gen-44-34': {
    title: 'Let Your Servant Die for the Lad',
    principle:
      'Judah offers to remain as substitute for Benjamin. First principle: substitutionary self-offer prepares for the true Substitute — the Lion of Judah.',
    sourceKeywords: ['let thy servant abide', 'lad\'s stead', 'bondman', 'lad', 'go up', 'father'],
    fulfillmentKeywords: ['Lion of the tribe of Juda', 'Root of David', 'prevailed'],
    terms: [
      { term: 'in the lad\'s place', original: 'תַּחַת הַנַּעַר', translit: 'tachat ha-naʿar', gloss: 'in place of the young man', note: 'Substitution (tachat) language — for him, instead of him.' },
    ],
  },
  'gen-45-3': {
    title: 'I Am Joseph',
    principle:
      'Joseph reveals himself to brothers who cannot answer. First principle: the rejected brother is the exalted savior; recognition requires grace.',
    sourceKeywords: ['I', 'Joseph', 'doth my father yet live', 'brethren', 'troubled'],
    fulfillmentKeywords: ['I am', 'Jesus', 'received him not'],
    terms: [
      { term: 'I am Joseph', original: 'אֲנִי יוֹסֵף', translit: 'ani Yosef', gloss: 'I am Joseph', note: 'Self-revelation climax — parallel to divine "I am" disclosures.' },
    ],
  },
  'gen-45-5': {
    title: 'God Sent Me Before You',
    principle:
      'Joseph: do not grieve; God sent me before you to preserve life. Romans 8: all things work together for good. Acts 2: determined plan delivered Jesus. First principle: human evil is real, yet God\'s saving purpose is sovereign.',
    sourceKeywords: ['be not grieved', 'sold me hither', 'God did send me', 'preserve life'],
    fulfillmentKeywords: ['all things work together', 'good', 'determinate counsel', 'foreknowledge', 'crucified', 'slain'],
    terms: [
      { term: 'God sent me', original: 'אֱלֹהִים שְׁלָחַנִי', translit: 'Elohim shelachani', gloss: 'God sent me', note: 'Theology of divine sending through human agency (Acts 2:23; 4:28).' },
    ],
  },
  'gen-45-7': {
    title: 'To Preserve You a Posterity',
    principle:
      'God sent Joseph to preserve a remnant and save lives. First principle: deliverance is for the many, not only the deliverer.',
    sourceKeywords: ['God did send me', 'preserve you', 'posterity', 'great deliverance'],
    fulfillmentKeywords: ['save', 'people', 'remnant'],
    terms: [
      { term: 'preserve', original: 'לְשִׂים לָכֶם שְׁאֵרִית', translit: 'lesim lakhem sheʾerit', gloss: 'to set for you a remnant', note: 'Remnant theology — survival of the promise people.' },
    ],
  },
  'gen-45-8': {
    title: 'Lord of All His House',
    principle:
      'God made Joseph father to Pharaoh and lord of all his house. Acts 2:36: God made Jesus both Lord and Christ. First principle: humiliation leads to investiture as universal lord.',
    sourceKeywords: ['not you', 'God', 'father to Pharaoh', 'lord of all his house', 'ruler', 'land of Egypt'],
    fulfillmentKeywords: ['Lord', 'Christ', 'exalted', 'name', 'dominion'],
    terms: [
      { term: 'lord', original: 'אָדוֹן', translit: 'adon', gloss: 'lord, master', note: 'Greek κύριος (kyrios) — confess Jesus Christ as Lord (Acts 2:36).' },
    ],
  },
  'gen-45-15': {
    title: 'Joseph Kissed and Wept',
    principle:
      'Joseph kisses all his brothers and weeps. First principle: reconciliation is emotional and physical, not merely legal.',
    sourceKeywords: ['Joseph', 'kissed', 'brethren', 'wept upon'],
    fulfillmentKeywords: ['kiss', 'Son', 'receive'],
    terms: [
      { term: 'wept', original: 'וַיֵּבְךְּ', translit: 'wayyevk', gloss: 'and he wept', note: 'Tears of restored relationship after years of separation.' },
    ],
  },
  'gen-46-4': {
    title: 'I Will Go Down with You to Egypt',
    principle:
      'God promises to go down with Jacob and surely bring him up again. First principle: covenant presence accompanies exile and guarantees return.',
    sourceKeywords: ['I will go down', 'Egypt', 'surely bring thee up', 'Joseph', 'put his hand', 'eyes'],
    fulfillmentKeywords: ['bones', 'carry up', 'visit', 'surely'],
    terms: [
      { term: 'I will go down with you', original: 'אָנֹכִי אֵרֵד עִמְּךָ', translit: 'anokhi ered ʿimmekha', gloss: 'I myself will go down with you', note: 'Presence-presence formula of covenant solidarity.' },
    ],
  },
  'gen-47-9': {
    title: 'Few and Evil Days',
    principle:
      'Jacob tells Pharaoh his days have been few and evil. Hebrews: patriarchs confessed they were strangers and pilgrims. First principle: honest pilgrimage admits hardship while awaiting a better country.',
    sourceKeywords: ['days of the years', 'few and evil', 'sojourning', 'fathers', 'days of my life'],
    fulfillmentKeywords: ['strangers', 'pilgrims', 'earth', 'country'],
    terms: [
      { term: 'few and evil', original: 'מְעַט וְרָעִים', translit: 'meʿat ve-raʿim', gloss: 'few and evil', note: 'Antithesis of eternal life fullness — sets hope beyond this life.' },
    ],
  },
  'gen-48-15': {
    title: 'God Who Fed Me All My Life',
    principle:
      'Jacob blesses: God who fed me all my life long. Psalm 121: the LORD preserves. First principle: providential care is remembered in blessing the next generation.',
    sourceKeywords: ['God', 'before whom my fathers', 'walked', 'fed me', 'all my life', 'angel', 'redeemed'],
    fulfillmentKeywords: ['preserve', 'going out', 'coming in', 'LORD', 'keep'],
    terms: [
      { term: 'fed', original: 'רֹעֶה', translit: 'roʿeh', gloss: 'shepherding / feeding', note: 'Shepherd-God language fulfilled in Jesus the Good Shepherd.' },
    ],
  },
  'gen-48-16': {
    title: 'Angel Who Redeems',
    principle:
      'Jacob blesses the lads by the Angel who redeems from all evil. Isaiah: angel of His presence saved them; John: the Word is God. First principle: the Redeeming Presence is angelic/theophanic and ultimately divine.',
    sourceKeywords: ['Angel', 'redeemed', 'all evil', 'bless', 'lads', 'name', 'Abraham', 'Isaac'],
    fulfillmentKeywords: ['Angel', 'keep', 'way', 'name', 'is in him', 'afflicted', 'saved', 'redeemed', 'Word', 'God'],
    terms: [
      { term: 'redeems', original: 'גֹּאֵל', translit: 'goʾel', gloss: 'redeemer, kinsman-redeemer', note: 'Greek λυτρόω (lutroō) — ransom/deliver; Isa 63:9 angel of presence.' },
    ],
  },
  'gen-48-19': {
    title: 'Ephraim Greater — Fullness to the Gentiles',
    principle:
      'Jacob crosses hands: the younger brother shall be greater. Paul: Gentiles brought near; Ephesians: strangers made nigh. First principle: God\'s order of blessing often reverses human expectation for wider grace.',
    sourceKeywords: ['younger brother', 'greater', 'seed', 'multitude of nations', 'Manasseh'],
    fulfillmentKeywords: ['Gentiles', 'fellowheirs', 'same body', 'partakers', 'far off', 'made nigh', 'blood of Christ'],
    terms: [
      { term: 'multitude of nations', original: 'מְלֹא הַגּוֹיִם', translit: 'melo ha-goyim', gloss: 'fullness of the nations', note: 'Rom 11:25 — fullness of the Gentiles enters salvation history.' },
    ],
  },
  'gen-49-1': {
    title: 'Last Days — Jacob Prophesies',
    principle:
      'Jacob calls his sons to hear what shall befall them in the last days. Hebrews: God speaks in these last days by His Son. First principle: patriarchal prophecy points forward to an eschatological climax.',
    sourceKeywords: ['gather yourselves', 'hear', 'sons of Jacob', 'hearken', 'Israel', 'last days'],
    fulfillmentKeywords: ['last days', 'Son', 'prophets', 'latter days'],
    terms: [
      { term: 'last days', original: 'בְּאַחֲרִית הַיָּמִים', translit: 'be-acharit ha-yamim', gloss: 'in the latter part of the days', note: 'LXX ἐπ\' ἐσχάτων τῶν ἡμερῶν — messianic-era technical phrase.' },
    ],
  },
  'gen-49-8': {
    title: 'Judah — Your Brothers Shall Praise',
    principle:
      'Judah is praised by brothers; rulership belongs to him. Revelation names the Lion of the tribe of Judah. First principle: royal messianic line is Judah\'s by blessing.',
    sourceKeywords: ['Judah', 'thou whom thy brethren', 'praise', 'hand', 'enemies', 'father\'s children', 'bow down'],
    fulfillmentKeywords: ['Lion of the tribe of Juda', 'Root of David', 'prevailed', 'Judas', 'Christ'],
    terms: [
      { term: 'Judah', original: 'יְהוּדָה', translit: 'Yehudah', gloss: 'praise', note: 'Matt 1:2 genealogy; Rev 5:5 — Lion of Judah conquers.' },
    ],
  },
  'gen-49-10': {
    title: 'Shiloh — Until He Comes to Whom It Belongs',
    principle:
      'The scepter shall not depart from Judah until Shiloh comes; to Him shall the gathering of peoples be. 2 Samuel, Isaiah, Luke, and Revelation fulfill this in the Davidic Messiah. First principle: kingship is promised, narrowed, and consummated in Christ.',
    sourceKeywords: ['sceptre', 'lawgiver', 'between his feet', 'Shiloh', 'gathering', 'people', 'obedience'],
    fulfillmentKeywords: ['throne', 'David', 'kingdom', 'government', 'increase', 'peace', 'Son of the Highest', 'throne of his father David', 'Lion of the tribe of Juda'],
    terms: [
      { term: 'Shiloh', original: 'שִׁילֹה', translit: 'Shiloh', gloss: 'he to whom it belongs / the one sent', note: 'Dead Sea Scrolls support: "until he to whom it belongs comes" (cf. Ezek 21:27).' },
      { term: 'scepter', original: 'שֵׁבֶט', translit: 'shevet', gloss: 'staff, scepter, tribe', note: 'Royal authority; Isa 9:6 government upon His shoulder.' },
      { term: 'lawgiver', original: 'מְחֹקֵק', translit: 'mechoqeq', gloss: 'engraver, lawgiver, ruler\'s staff', note: 'Not merely Moses — royal legislator from Judah.' },
    ],
  },
  'gen-49-12': {
    title: 'Washing in Wine and Milk',
    principle:
      'Judah\'s abundance is pictured as washing in wine and milk. Isaiah 53: He is high and lifted up; the Servant bears griefs. First principle: the royal line is also a suffering, fruitful line.',
    sourceKeywords: ['eyes red', 'wine', 'teeth white', 'milk'],
    fulfillmentKeywords: ['griefs', 'sorrows', 'high', 'lifted up'],
    terms: [
      { term: 'wine', original: 'יַיִן', translit: 'yayin', gloss: 'wine', note: 'Later: Messiah\'s blood as new-covenant wine (Luke 22).' },
    ],
  },
  'gen-49-18': {
    title: 'I Have Waited for Your Salvation',
    principle:
      'Jacob waits for the LORD\'s salvation. Psalm 118: rejected stone becomes cornerstone. First principle: patriarchal hope is explicitly messianic salvation, not only land.',
    sourceKeywords: ['waited for thy salvation', 'LORD'],
    fulfillmentKeywords: ['stone', 'builders', 'refused', 'head stone', 'corner'],
    terms: [
      { term: 'salvation', original: 'יְשׁוּעָתֶךָ', translit: 'yeshuʿatekha', gloss: 'your salvation', note: 'Root yasha — same as Yeshua/Jesus name meaning.' },
    ],
  },
  'gen-49-22': {
    title: 'Joseph — Fruitful Bough by the Well',
    principle:
      'Joseph is a fruitful bough whose branches run over the wall. Psalm 1: the blessed man is like a tree by streams of water; John 15: abiding bears fruit. First principle: blessing is fruitfulness rooted in living water.',
    sourceKeywords: ['fruitful bough', 'well', 'branches', 'run over the wall'],
    fulfillmentKeywords: ['tree', 'rivers of water', 'fruit', 'season', 'prosper', 'branches', 'abide', 'fruit'],
    terms: [
      { term: 'fruitful bough', original: 'בֵּן פֹּרָת', translit: 'ben porat', gloss: 'son of a fruitful one', note: 'Wordplay on Joseph/ Ephraim fruitfulness.' },
    ],
  },
  'gen-49-24': {
    title: 'Mighty One of Jacob — Shepherd and Stone',
    principle:
      'From the hands of the Mighty One of Jacob comes the Shepherd, the Stone of Israel. Isaiah 49:26 and Psalm 118 fulfill this. First principle: the same God is Shepherd-provide and Stone-secure, fulfilled in Christ.',
    sourceKeywords: ['Mighty One of Jacob', 'shepherd', 'stone of Israel', 'God of thy father', 'helped thee', 'Almighty', 'blessed'],
    fulfillmentKeywords: ['redeemer', 'mighty One of Jacob', 'Saviour', 'stone', 'builders', 'refused', 'corner', 'milk', 'Gentiles'],
    terms: [
      { term: 'Stone of Israel', original: 'אֶבֶן יִשְׂרָאֵל', translit: 'ʾeven Yisraʾel', gloss: 'Stone of Israel', note: 'Christ as cornerstone (1 Pet 2:6); Shepherd (John 10).' },
    ],
  },
  'gen-49-26': {
    title: 'Blessings of the Everlasting Hills',
    principle:
      'Jacob\'s blessings prevail above everlasting hills. Habakkuk: God\'s glory covers heavens; praise fills the earth. First principle: patriarchal blessing is cosmic and eternal in scope.',
    sourceKeywords: ['blessings', 'father', 'prevailed', 'everlasting hills', 'desired', 'Joseph', 'separate', 'brethren'],
    fulfillmentKeywords: ['glory', 'covered', 'heavens', 'earth', 'full of his praise'],
    terms: [
      { term: 'everlasting hills', original: 'גִּבְעֹת עוֹלָם', translit: 'givʿot ʿolam', gloss: 'hills of the age / eternal hills', note: 'Poetic eternity of mountains as measure of blessing.' },
    ],
  },
  'gen-50-20': {
    title: 'You Meant Evil — God Meant It for Good',
    principle:
      'Joseph tells brothers: you meant evil against me, but God meant it for good to save many people. Romans 8 and Acts 2–4 apply this theology to the cross. First principle: God\'s sovereign good does not erase human guilt; it overrules it.',
    sourceKeywords: ['ye thought evil', 'God meant it', 'good', 'save much people', 'alive'],
    fulfillmentKeywords: ['all things work together', 'good', 'determinate counsel', 'foreknowledge', 'wicked hands', 'whatsoever', 'hand', 'counsel determined'],
    terms: [
      { term: 'meant / intended', original: 'חֲשַׁבְתֶּם', translit: 'chashavtem', gloss: 'you devised / intended', note: 'Same root as "counted" in Gen 15:6 — accounting/ intention language.' },
    ],
  },
  'gen-50-24': {
    title: 'God Will Surely Visit You',
    principle:
      'Joseph dies with hope: God will surely visit you and bring you out of Egypt with my bones. Exodus and Hebrews preserve this faith. First principle: covenant hope outlives the patriarch; God keeps promises across generations.',
    sourceKeywords: ['God will surely visit you', 'bring you out', 'land', 'sworn', 'bones'],
    fulfillmentKeywords: ['bones', 'carried', 'surely visit', 'people'],
    terms: [
      { term: 'visit', original: 'פָּקֹד יִפְקֹד', translit: 'pakoq yifqod', gloss: 'visiting he will visit / surely attend to', note: 'Exod 3:16; 4:31 — divine remembrance leading to exodus.' },
    ],
  },
  'gen-50-25': {
    title: 'Oath and Bones of Joseph',
    principle:
      'Joseph makes the sons of Israel swear to carry his bones. Joshua 24 records burial at Shechem. First principle: embodied hope — the promise people bury their dead expecting land and resurrection.',
    sourceKeywords: ['took an oath', 'children of Israel', 'surely visit', 'carry up', 'bones'],
    fulfillmentKeywords: ['Joseph', 'bones', 'buried', 'oath'],
    terms: [
      { term: 'bones', original: 'עֲצָמַי', translit: 'ʿatsamai', gloss: 'my bones', note: 'Physical residue of the covenant person — hope of resurrection (Ezek 37).' },
    ],
  },
  'gen-6-22': {
    title: 'Thus Did Noah',
    principle:
      'Noah does according to all that God commanded him. Hebrews 11: moved with fear, he prepared an ark. First principle: faith hears God and builds — obedience is faith with a body.',
    sourceKeywords: ['Noah', 'according to all', 'God commanded', 'did'],
    fulfillmentKeywords: ['Noah', 'faith', 'ark', 'commanded'],
    terms: [
      { term: 'did / commanded', original: 'עָשָׂה / צִוָּה', translit: 'asah / tsivvah', gloss: 'he made / he commanded', note: 'Divine command and human action in covenant sequence.' },
    ],
  },
  'gen-37-11': {
    title: 'Brothers Envied — Father Kept the Saying',
    principle:
      'Brothers envy Joseph; Jacob keeps the saying in mind. Luke 2: Mary kept all these things. First principle: promise is often despised by peers and treasured by the faithful parent.',
    sourceKeywords: ['brethren', 'envied', 'father', 'observed', 'saying'],
    fulfillmentKeywords: ['envy', 'sold', 'kept'],
    terms: [
      { term: 'envied', original: 'קָנְאוּ', translit: 'qanʾu', gloss: 'they were jealous', note: 'Same moral poison as the brothers of Christ (Matt 27:18).' },
    ],
  },
  'gen-29-35': {
    title: 'Judah Named — Praise',
    principle:
      'Leah names Judah: now will I praise the LORD. Matthew 1 runs Jesus through Judah; Hebrews notes He comes from Judah. First principle: the royal line begins in a wife\'s praise after unloved years.',
    sourceKeywords: ['Judah', 'praise', 'LORD', 'bare'],
    fulfillmentKeywords: ['Judah', 'Christ', 'tribe of Juda'],
    terms: [
      { term: 'Judah', original: 'יְהוּדָה', translit: 'Yehudah', gloss: 'praise', note: 'Name of praise becomes name of kingship (Gen 49:8–10).' },
    ],
  },
  'gen-30-22': {
    title: 'Rachel Remembered — Joseph Born',
    principle:
      'God remembers Rachel and opens her womb. First principle: barrenness is not the last word; God opens wombs to continue the promise line.',
    sourceKeywords: ['God', 'remembered', 'Rachel', 'hearkened', 'opened', 'womb'],
    fulfillmentKeywords: ['remembered', 'son', 'promise'],
    terms: [
      { term: 'remembered', original: 'זָכַר', translit: 'zakhar', gloss: 'he remembered (covenant memory)', note: 'Not forgetfulness — active covenant attention (cf. Exod 2:24).' },
    ],
  },
  'gen-30-24': {
    title: 'Joseph — May He Add',
    principle:
      'Rachel names Joseph: may the LORD add another son. First principle: the beloved son of the promise is named with hope of further blessing.',
    sourceKeywords: ['Joseph', 'LORD', 'add', 'son'],
    fulfillmentKeywords: ['Joseph', 'added', 'son'],
    terms: [
      { term: 'Joseph', original: 'יוֹסֵף', translit: 'Yosef', gloss: 'may he add / he will add', note: 'Root yasaf — adding; foreshadows increase and fruitfulness.' },
    ],
  },
  'gen-34-7': {
    title: 'Wicked Thing in Israel',
    principle:
      'Jacob\'s sons hear of Shechem\'s deed and are grieved because he has wrought folly in Israel. David later calls adultery a great wickedness and folly in Israel. First principle: sexual sin against covenant people is called folly and evil — identity-bearing communities must grieve it.',
    sourceKeywords: ['sons', 'came out of the field', 'grieved', 'men were very wroth', 'wrought folly', 'Israel'],
    fulfillmentKeywords: ['folly', 'wickedness', 'Israel', 'grief'],
    terms: [
      { term: 'folly', original: 'נְבָלָה', translit: 'nevalah', gloss: 'folly, disgraceful wickedness', note: 'Same term in 2 Sam 13:12 — moral outrage language in Israel.' },
    ],
  },
};

/**
 * Ordered threads that form a single redemptive chain.
 * Each chain starts at the earliest Genesis source and includes
 * same-testament (OT→OT) development before NT fulfillment.
 */
export const threadChains: ThreadChain[] = [
  {
    id: 'seed-of-woman',
    name: 'Seed of the Woman',
    origin: 'Genesis 3:15',
    steps: [
      { ref: 'Genesis 3:15', verseId: 'gen-3-15', testament: 'OT', title: 'Protoevangelium — Seed crushes serpent\'s head', connection: 'Earliest gospel promise: war between seeds, victory through wound.' },
      { ref: 'Genesis 12:3', verseId: 'gen-12-3', testament: 'OT', title: 'All families blessed in Abram', connection: 'Same-OT: the seed is narrowed to one family line for the nations\' blessing.' },
      { ref: 'Genesis 22:18', verseId: 'gen-22-18', testament: 'OT', title: 'In your seed all nations bless themselves', connection: 'Same-OT: after Isaac\'s near-offering, seed = singular heir of promise.' },
      { ref: 'Genesis 49:10', verseId: 'gen-49-10', testament: 'OT', title: 'Shiloh / scepter of Judah', connection: 'Same-OT: seed-line becomes royal — Judah\'s scepter until Shiloh.' },
      { ref: '2 Samuel 7:12-16', testament: 'OT', title: 'Davidic throne forever', connection: 'Same-OT: royal seed given an eternal dynasty.' },
      { ref: 'Isaiah 11:1-10', testament: 'OT', title: 'Branch from Jesse', connection: 'Same-OT: Davidic seed as Spirit-anointed shoot.' },
      { ref: 'Galatians 3:16', testament: 'NT', title: 'The Seed is Christ', connection: 'NT names the singular Seed of the Abrahamic promise.' },
      { ref: 'Romans 16:20', testament: 'NT', title: 'God crushes Satan under your feet', connection: 'NT applies the head-crush to the church in Christ.' },
    ],
  },
  {
    id: 'abrahamic-blessing',
    name: 'Abrahamic Blessing to the Nations',
    origin: 'Genesis 12:1-3',
    steps: [
      { ref: 'Genesis 12:1-3', verseId: 'gen-12-1', testament: 'OT', title: 'Call of Abram — blessing to all families', connection: 'Earliest explicit nation-blessing promise.' },
      { ref: 'Genesis 13:15-16', verseId: 'gen-13-15', testament: 'OT', title: 'Land forever, dust-like seed', connection: 'Same-OT: land + multitude expands the blessing frame.' },
      { ref: 'Genesis 15:5-6', verseId: 'gen-15-5', testament: 'OT', title: 'Stars counted; believed → righteousness', connection: 'Same-OT: how the blessing is received — faith counted as righteousness.' },
      { ref: 'Genesis 17:5-8', verseId: 'gen-17-5', testament: 'OT', title: 'Abraham, many nations, everlasting covenant', connection: 'Same-OT: name change and covenant seal (circumcision).' },
      { ref: 'Genesis 18:18', verseId: 'gen-18-18', testament: 'OT', title: 'All nations blessed in him', connection: 'Same-OT: purpose restated — nations, not only Israel.' },
      { ref: 'Genesis 26:3-4', verseId: 'gen-26-4', testament: 'OT', title: 'Promise confirmed to Isaac', connection: 'Same-OT: covenant transmitted without renegotiation.' },
      { ref: 'Genesis 28:14', verseId: 'gen-28-14', testament: 'OT', title: 'All families of the earth blessed in Jacob', connection: 'Same-OT: third patriarchal restatement.' },
      { ref: 'Exodus 19:5-6', testament: 'OT', title: 'Kingdom of priests', connection: 'Same-OT: Israel as mediating people among nations.' },
      { ref: 'Psalm 67:1-4', testament: 'OT', title: 'Nations praise God', connection: 'Same-OT: worship goal of the blessing.' },
      { ref: 'Galatians 3:8-9, 29', testament: 'NT', title: 'Gospel preached to Abraham; heirs by faith', connection: 'NT: blessing arrives in Christ to those who believe.' },
      { ref: 'Acts 3:25-26', testament: 'NT', title: 'You are children of the covenant', connection: 'NT: apostolic preaching from this Abrahamic thread.' },
    ],
  },
  {
    id: 'melchizedek-priesthood',
    name: 'Melchizedek Priesthood',
    origin: 'Genesis 14:18-20',
    steps: [
      { ref: 'Genesis 14:18-20', verseId: 'gen-14-18', testament: 'OT', title: 'Melchizedek blesses Abram with bread and wine', connection: 'Earliest priest-king outside Levi; Abram pays tithe.' },
      { ref: 'Psalm 110:1-4', testament: 'OT', title: 'You are a priest forever after the order of Melchizedek', connection: 'Same-OT: Davidic Lord appointed eternal priest — not Aaronic.' },
      { ref: 'Hebrews 5:6-10', testament: 'NT', title: 'Christ called as High Priest', connection: 'NT applies Ps 110 to Jesus\' priesthood.' },
      { ref: 'Hebrews 7:1-28', testament: 'NT', title: 'Better priesthood, better covenant', connection: 'NT unfolds Melchizedek as superior, deathless, and perfecting.' },
    ],
  },
  {
    id: 'provided-lamb',
    name: 'Provided Lamb / Substitution',
    origin: 'Genesis 3:21',
    steps: [
      { ref: 'Genesis 3:21', verseId: 'gen-3-21', testament: 'OT', title: 'Coats of skins — God clothes by blood', connection: 'Earliest covering requires death of an animal.' },
      { ref: 'Genesis 4:4', verseId: 'gen-4-4', testament: 'OT', title: 'Abel\'s firstlings accepted', connection: 'Same-OT: acceptable sacrifice is firstborn/blood-shaped.' },
      { ref: 'Genesis 8:20', verseId: 'gen-8-20', testament: 'OT', title: 'Noah\'s burnt offering — sweet savour', connection: 'Same-OT: sacrifice turns judgment into covenant mercy.' },
      { ref: 'Genesis 22:2-14', verseId: 'gen-22-2', testament: 'OT', title: 'God will provide Himself the lamb', connection: 'Same-OT: substitutionary animal in place of the only son on Moriah.' },
      { ref: 'Exodus 12:3-13', testament: 'OT', title: 'Passover lamb', connection: 'Same-OT: blood on doorposts averts death.' },
      { ref: 'Isaiah 53:4-12', testament: 'OT', title: 'Servant as sacrificial lamb', connection: 'Same-OT: the servant bears sins; the LORD lays on Him iniquity.' },
      { ref: 'John 1:29', testament: 'NT', title: 'Behold the Lamb of God', connection: 'NT names Jesus as the provided Lamb who takes away sin.' },
      { ref: 'Romans 8:32', testament: 'NT', title: 'He did not spare His own Son', connection: 'NT: Father\'s gift echoes Isaac\'s near-offering.' },
      { ref: '1 Peter 1:19-20', testament: 'NT', title: 'Lamb without blemish, foreknown', connection: 'NT: unblemished sacrifice foreordained.' },
    ],
  },
  {
    id: 'judah-royal-scepter',
    name: 'Judah — Lion and Scepter',
    origin: 'Genesis 29:35',
    steps: [
      { ref: 'Genesis 29:35', verseId: 'gen-29-35', testament: 'OT', title: 'Judah named — praise', connection: 'Earliest naming of the royal tribe in praise.' },
      { ref: 'Genesis 38:26-30', verseId: 'gen-38-26', testament: 'OT', title: 'Tamar and Perez — line preserved', connection: 'Same-OT: messianic genealogy continues through scandal and grace.' },
      { ref: 'Genesis 49:8-12', verseId: 'gen-49-8', testament: 'OT', title: 'Lion of Judah; scepter to Shiloh', connection: 'Same-OT: tribal blessing becomes royal messianic prophecy.' },
      { ref: 'Ruth 4:18-22', testament: 'OT', title: 'David from Judah\'s line', connection: 'Same-OT: genealogy to King David.' },
      { ref: '2 Samuel 7:12-16', testament: 'OT', title: 'Throne established forever', connection: 'Same-OT: eternal dynasty promised to David.' },
      { ref: 'Psalm 89:3-4, 20-37', testament: 'OT', title: 'Covenant with David\'s seed', connection: 'Same-OT: steadfast love sworn to the anointed.' },
      { ref: 'Isaiah 9:6-7', verseId: 'gen-49-10', testament: 'OT', title: 'Child born; government on His shoulder', connection: 'Same-OT: Davidic son as everlasting ruler.' },
      { ref: 'Ezekiel 21:27', testament: 'OT', title: 'Until He comes whose right it is', connection: 'Same-OT: scepter withheld until the rightful one.' },
      { ref: 'Matthew 1:1-2, 16', testament: 'NT', title: 'Jesus Christ, son of David, son of Abraham', connection: 'NT genealogy ties Abraham → Judah → David → Jesus.' },
      { ref: 'Luke 1:32-33', testament: 'NT', title: 'Throne of his father David', connection: 'NT: annunciation fulfills the royal chain.' },
      { ref: 'Revelation 5:5', testament: 'NT', title: 'Lion of the tribe of Judah has prevailed', connection: 'NT: the conquering Lion opens the scroll.' },
    ],
  },
  {
    id: 'joseph-type',
    name: 'Joseph — Rejected Deliverer',
    origin: 'Genesis 37:2',
    steps: [
      { ref: 'Genesis 37:2-11', verseId: 'gen-37-5', testament: 'OT', title: 'Beloved son dreams; brothers envy', connection: 'Earliest Joseph cycle — chosen, envied, destined for honor.' },
      { ref: 'Genesis 37:23-28', verseId: 'gen-37-28', testament: 'OT', title: 'Stripped, pit, sold for silver', connection: 'Same-OT: betrayal and sale into Egypt.' },
      { ref: 'Genesis 39:20-23', verseId: 'gen-39-21', testament: 'OT', title: 'Favor in prison — God with him', connection: 'Same-OT: presence under suffering.' },
      { ref: 'Genesis 41:39-45', verseId: 'gen-41-41', testament: 'OT', title: 'Set over all Egypt', connection: 'Same-OT: humiliation → enthronement.' },
      { ref: 'Genesis 45:5-8', verseId: 'gen-45-5', testament: 'OT', title: 'God sent me to preserve life', connection: 'Same-OT: rejection ordered for salvation of many.' },
      { ref: 'Genesis 50:20', verseId: 'gen-50-20', testament: 'OT', title: 'You meant evil; God meant good', connection: 'Same-OT: sovereign good over human evil.' },
      { ref: 'Psalm 105:16-22', testament: 'OT', title: 'Joseph tried, then made lord', connection: 'Same-OT: inspired retelling of the cycle.' },
      { ref: 'Acts 7:9-10', testament: 'NT', title: 'Joseph made governor', connection: 'NT sermon retells the type in salvation history.' },
      { ref: 'Romans 8:28', testament: 'NT', title: 'All things work together for good', connection: 'NT: cross-shaped providence from Joseph\'s confession.' },
    ],
  },
  {
    id: 'image-dominion',
    name: 'Image of God and Dominion',
    origin: 'Genesis 1:26-28',
    steps: [
      { ref: 'Genesis 1:26-28', verseId: 'gen-1-26', testament: 'OT', title: 'Image, likeness, dominion', connection: 'Earliest human mandate and identity.' },
      { ref: 'Genesis 5:1-3', verseId: 'gen-5-1', testament: 'OT', title: 'Adam\'s line in God\'s likeness', connection: 'Same-OT: image transmitted after the fall (marred, not erased).' },
      { ref: 'Genesis 9:6', verseId: 'gen-9-1', testament: 'OT', title: 'Whoever sheds man\'s blood', connection: 'Same-OT: capital justice grounded in the image of God.' },
      { ref: 'Psalm 8:4-8', testament: 'OT', title: 'Man crowned with glory and honor', connection: 'Same-OT: dominion praised and questioned — "what is man?"' },
      { ref: 'Psalm 110:1', testament: 'OT', title: 'Sit at my right hand', connection: 'Same-OT: dominion enthroned in the Lord at YHWH\'s right.' },
      { ref: 'Hebrews 2:6-9', testament: 'NT', title: 'All things under His feet', connection: 'NT: Ps 8 fulfilled in Jesus, not yet fully visible in fallen man.' },
      { ref: 'Colossians 1:15-17', testament: 'NT', title: 'Image of the invisible God', connection: 'NT: the true Image is the Creator-Son.' },
      { ref: 'Colossians 3:10', testament: 'NT', title: 'Renewed in the image', connection: 'NT: believers re-imaged in the Messiah.' },
    ],
  },
  {
    id: 'light-word',
    name: 'Light and the Word',
    origin: 'Genesis 1:1-3',
    steps: [
      { ref: 'Genesis 1:1-3', verseId: 'gen-1-1', testament: 'OT', title: 'God said; light shines in darkness', connection: 'Earliest creative speech and light.' },
      { ref: 'Genesis 1:14-18', verseId: 'gen-1-14', testament: 'OT', title: 'Lights for signs; day/night ruled', connection: 'Same-OT: light ordered into the cosmos.' },
      { ref: 'Psalm 19:1-4', testament: 'OT', title: 'Heavens declare the glory of God', connection: 'Same-OT: creation as speech/witness.' },
      { ref: 'Psalm 119:105, 130', testament: 'OT', title: 'Word a lamp; entrance of words gives light', connection: 'Same-OT: Torah as light.' },
      { ref: 'Isaiah 9:2', testament: 'OT', title: 'People in darkness see a great light', connection: 'Same-OT: messianic light in Galilee.' },
      { ref: 'Isaiah 42:6; 49:6', testament: 'OT', title: 'Light to the nations', connection: 'Same-OT: servant as covenant light.' },
      { ref: 'John 1:1-5, 9', testament: 'NT', title: 'Word; true Light coming into the world', connection: 'NT: person of the Word and Light.' },
      { ref: '2 Corinthians 4:6', testament: 'NT', title: 'Light of the knowledge of God in Christ', connection: 'NT: Paul quotes creation-light for gospel illumination.' },
    ],
  },
  {
    id: 'rest-sabbath',
    name: 'Sabbath Rest Remaining',
    origin: 'Genesis 2:2-3',
    steps: [
      { ref: 'Genesis 2:2-3', verseId: 'gen-2-2', testament: 'OT', title: 'God rested and sanctified the seventh day', connection: 'Earliest rest — cessation and blessing.' },
      { ref: 'Exodus 20:8-11', testament: 'OT', title: 'Sabbath command grounded in creation', connection: 'Same-OT: Sinai rest-law cites Gen 2.' },
      { ref: 'Exodus 31:17', testament: 'OT', title: 'Sign of covenant forever', connection: 'Same-OT: Sabbath as covenant sign to Israel.' },
      { ref: 'Isaiah 58:13-14', testament: 'OT', title: 'Delight in the holy day', connection: 'Same-OT: rest becomes delight, not mere non-work.' },
      { ref: 'Psalm 95:11', testament: 'OT', title: 'They shall not enter my rest', connection: 'Same-OT: rest refused to unbelief in the wilderness.' },
      { ref: 'Hebrews 3:7-4:11', testament: 'NT', title: 'A Sabbath rest remains for the people of God', connection: 'NT reads creation + wilderness rest as eschatological rest in Christ.' },
    ],
  },
  {
    id: 'tree-life-access',
    name: 'Tree of Life and Access to God',
    origin: 'Genesis 2:9',
    steps: [
      { ref: 'Genesis 2:9', verseId: 'gen-2-9', testament: 'OT', title: 'Tree of life in Eden\'s midst', connection: 'Earliest gift of life-access.' },
      { ref: 'Genesis 3:22-24', verseId: 'gen-3-22', testament: 'OT', title: 'Way barred by cherubim and sword', connection: 'Same-OT: access cut off after sin.' },
      { ref: 'Exodus 25:17-22; 26:31-33', testament: 'OT', title: 'Cherubim on the mercy seat and veil', connection: 'Same-OT: holy place limited; veil keeps God\'s presence veiled.' },
      { ref: 'Leviticus 16:1-34', testament: 'OT', title: 'Day of Atonement access', connection: 'Same-OT: blood opens limited access once a year.' },
      { ref: 'Psalm 24:3-5; 15:1', testament: 'OT', title: 'Who may ascend the hill of the LORD?', connection: 'Same-OT: moral qualification for nearness.' },
      { ref: 'Isaiah 35:8-10', testament: 'OT', title: 'Highway of holiness; redeemed walk it', connection: 'Same-OT: eschatological access for the ransomed.' },
      { ref: 'Ezekiel 47:12', testament: 'OT', title: 'Trees for food, leaves for healing', connection: 'Same-OT: river-and-tree vision of renewed life.' },
      { ref: 'Hebrews 9:8; 10:19-20', testament: 'NT', title: 'New and living way through the veil', connection: 'NT: veil — His flesh — torn; access by blood.' },
      { ref: 'John 14:6', testament: 'NT', title: 'I am the way', connection: 'NT: the barred way is a Person.' },
      { ref: 'Revelation 22:2, 14', testament: 'NT', title: 'Tree of life in the city; right to the tree', connection: 'NT: Eden access restored to the washed.' },
    ],
  },
  {
    id: 'one-flesh-bride',
    name: 'One Flesh and the Bride',
    origin: 'Genesis 2:22-24',
    steps: [
      { ref: 'Genesis 2:22-24', verseId: 'gen-2-24', testament: 'OT', title: 'Woman from the man; one flesh', connection: 'Earliest marriage ordinance and type.' },
      { ref: 'Genesis 24:1-67', verseId: 'gen-24-7', testament: 'OT', title: 'Servant seeks a bride for Isaac', connection: 'Same-OT: bride secured by sending and willing heart.' },
      { ref: 'Isaiah 54:5; 62:4-5', testament: 'OT', title: 'Your Maker is your Husband', connection: 'Same-OT: YHWH as Husband of Israel.' },
      { ref: 'Hosea 2:19-20', testament: 'OT', title: 'I will betroth you in righteousness', connection: 'Same-OT: covenant marriage after unfaithfulness.' },
      { ref: 'Ezekiel 16:8-14', testament: 'OT', title: 'I entered into covenant with you', connection: 'Same-OT: marriage-covenant theology.' },
      { ref: 'Matthew 19:4-6', testament: 'NT', title: 'What God has joined', connection: 'NT: Jesus re-grounds marriage in creation.' },
      { ref: 'Ephesians 5:23-32', testament: 'NT', title: 'Christ and the church', connection: 'NT: the great mystery of one flesh.' },
      { ref: 'Revelation 19:7-9; 21:2, 9', testament: 'NT', title: 'Marriage of the Lamb; bride prepared', connection: 'NT: eschatological wedding of Messiah and people.' },
    ],
  },
  {
    id: 'covenant-grace',
    name: 'Covenant of Grace vs. Human Works',
    origin: 'Genesis 6:8',
    steps: [
      { ref: 'Genesis 6:8', verseId: 'gen-6-8', testament: 'OT', title: 'Noah found grace', connection: 'Earliest explicit grace before judgment.' },
      { ref: 'Genesis 15:6', verseId: 'gen-15-6', testament: 'OT', title: 'Believed → counted righteousness', connection: 'Same-OT: justification pattern before circumcision and law.' },
      { ref: 'Genesis 15:18', verseId: 'gen-15-18', testament: 'OT', title: 'Covenant made with Abram', connection: 'Same-OT: unilateral covenant of promise.' },
      { ref: 'Genesis 17:7-11', verseId: 'gen-17-7', testament: 'OT', title: 'Everlasting covenant + sign', connection: 'Same-OT: promise sealed with a sign, not earned by law.' },
      { ref: 'Exodus 19:5-6', testament: 'OT', title: 'Covenant at Sinai after grace from Egypt', connection: 'Same-OT: law given to a people already redeemed.' },
      { ref: 'Psalm 32:1-5; 51', testament: 'OT', title: 'Blessed whose transgression is forgiven', connection: 'Same-OT: David confesses imputed righteousness.' },
      { ref: 'Jeremiah 31:31-34', testament: 'OT', title: 'New covenant; law written on hearts', connection: 'Same-OT: promise of internalized forgiveness.' },
      { ref: 'Galatians 3:6-18', testament: 'NT', title: 'Faith vs. works of the law', connection: 'NT: Paul argues from Gen 15 against law-justification.' },
      { ref: 'Romans 4:1-25', testament: 'NT', title: 'Abraham justified by faith', connection: 'NT: same-OT foundation applied to Jew and Gentile.' },
      { ref: 'Hebrews 8:8-13', testament: 'NT', title: 'New covenant in Christ\'s blood', connection: 'NT: Jeremiah 31 fulfilled at the table and cross.' },
    ],
  },
  {
    id: 'serpent-dragon',
    name: 'Serpent to Dragon',
    origin: 'Genesis 3:1',
    steps: [
      { ref: 'Genesis 3:1', verseId: 'gen-3-1', testament: 'OT', title: 'The serpent questions God\'s word', connection: 'Earliest adversary character.' },
      { ref: 'Genesis 3:15', verseId: 'gen-3-15', testament: 'OT', title: 'Enmity and crushed head', connection: 'Same-OT: doom of the serpent announced.' },
      { ref: 'Leviticus 16:8-10', testament: 'OT', title: 'Scapegoat for Azazel', connection: 'Same-OT: sin banished to the wilderness adversary.' },
      { ref: 'Job 1-2', testament: 'OT', title: 'The Satan as accuser', connection: 'Same-OT: adversary in the divine council.' },
      { ref: 'Zechariah 3:1-2', testament: 'OT', title: 'Satan standing to accuse', connection: 'Same-OT: accusation countered by divine rebuke.' },
      { ref: 'Revelation 12:9-10', testament: 'NT', title: 'That old serpent, Devil and Satan', connection: 'NT identifies the serpent of Eden as the cosmic dragon.' },
      { ref: 'Revelation 20:2', testament: 'NT', title: 'Bound a thousand years', connection: 'NT: head-crush progressed to binding and lake of fire.' },
    ],
  },
  {
    id: 'shepherd-provision',
    name: 'Shepherd and Provision',
    origin: 'Genesis 48:15',
    steps: [
      { ref: 'Genesis 4:2; 4:20', verseId: 'gen-4-2', testament: 'OT', title: 'Abel keeper of sheep; Jabal father of herdsmen', connection: 'Earliest shepherding vocation in the fallen world.' },
      { ref: 'Genesis 48:15', verseId: 'gen-48-15', testament: 'OT', title: 'God who fed me all my life', connection: 'Same-OT: Jacob confesses God as personal Shepherd.' },
      { ref: 'Psalm 23:1-6', testament: 'OT', title: 'The LORD is my shepherd', connection: 'Same-OT: shepherd-psalm of covenant care.' },
      { ref: 'Psalm 80:1', testament: 'OT', title: 'You who lead Joseph like a flock', connection: 'Same-OT: shepherd-God of the tribes.' },
      { ref: 'Ezekiel 34:11-16, 23-24', testament: 'OT', title: 'I myself will be their shepherd; my servant David', connection: 'Same-OT: divine shepherd raising Davidic shepherd.' },
      { ref: 'Isaiah 40:11', testament: 'OT', title: 'He shall feed his flock like a shepherd', connection: 'Same-OT: arm of the LORD gathers lambs.' },
      { ref: 'John 10:11-16', testament: 'NT', title: 'I am the good shepherd', connection: 'NT: Jesus fulfills divine-shepherd prophecy.' },
      { ref: 'Hebrews 13:20', testament: 'NT', title: 'Great Shepherd of the sheep', connection: 'NT: raised Shepherd of the new covenant.' },
      { ref: '1 Peter 5:4', testament: 'NT', title: 'Chief Shepherd appears', connection: 'NT: shepherds under the Chief Shepherd.' },
    ],
  },
  {
    id: 'sanctuary-judgment',
    name: 'Sanctuary, Judgment, and Remnant',
    origin: 'Exodus 25:8, 40',
    steps: [
      { ref: 'Exodus 25:8, 40', verseId: 'exo-25-40', testament: 'OT', title: 'Tabernacle after the heavenly pattern', connection: 'Earliest sanctuary: God dwells among His people by a revealed pattern.' },
      { ref: 'Exodus 30:10', verseId: 'exo-30-10', testament: 'OT', title: 'Day of Atonement — sanctuary cleansed by blood', connection: 'Same-OT: annual purging of accumulated sin from the sanctuary.' },
      { ref: 'Exodus 20:8-11', verseId: 'exo-20-8', testament: 'OT', title: 'Sabbath as creation memorial', connection: 'Same-OT: covenant identity marked by Creator-rest.' },
      { ref: 'Daniel 7:9-10, 22', verseId: 'dan-7-9', testament: 'OT', title: 'Heavenly court; judgment given to the saints', connection: 'Same-OT: judgment scene before the kingdom is possessed.' },
      { ref: 'Daniel 8:14', verseId: 'dan-8-14', testament: 'OT', title: 'Unto 2,300 days — then the sanctuary is made right', connection: 'Same-OT: time prophecy ending in a sanctuary-cleansing event.' },
      { ref: 'Daniel 9:24-27', verseId: 'dan-9-24', testament: 'OT', title: 'Seventy weeks — Messiah, cutting off, end of sacrifice', connection: 'Same-OT: messianic mission within a fixed prophetic window.' },
      { ref: 'Hebrews 8:1-2; 9:11-24', testament: 'NT', title: 'Christ minister of the true tabernacle', connection: 'NT: earthly pattern fulfilled in Christ\'s high-priestly ministry in heaven.' },
      { ref: 'Revelation 14:6-7', verseId: 'rev-14-7', testament: 'NT', title: 'Fear God — the hour of His judgment is come', connection: 'NT: end-time call to Creator-worship in view of judgment (echoes Exod 20:11).', },
      { ref: 'Revelation 12:17; 14:12', verseId: 'rev-14-12', testament: 'NT', title: 'Remnant keep the commandments of God and the faith of Jesus', connection: 'NT: God\'s end-time people identified by obedience + faith in Christ.' },
      { ref: 'Revelation 20:4-6', verseId: 'rev-20-4', testament: 'NT', title: 'First resurrection — the rest of the dead live not again', connection: 'NT: bodily resurrection of the just at Christ\'s coming; the dead rest until raised.' },
    ],
  },
  {
    id: 'prophet-like-moses',
    name: 'The Prophet Like Unto Moses',
    origin: 'Deuteronomy 18:15',
    steps: [
      { ref: 'Deuteronomy 18:15', verseId: 'deu-18-15', testament: 'OT', title: 'The LORD will raise up a Prophet like me', connection: 'Earliest promise of an ultimate mediator and prophet from among Israel.' },
      { ref: 'Deuteronomy 18:18-19', verseId: 'deu-18-18', testament: 'OT', title: 'Words put in His mouth', connection: 'Same-OT: speaking divine commands with binding authority.' },
      { ref: 'Deuteronomy 34:10', testament: 'OT', title: 'No prophet since like Moses', connection: 'Same-OT: canonical marker showing Joshua and the prophets were not the promised One.' },
      { ref: 'John 1:45', testament: 'NT', title: 'Found Him of whom Moses wrote', connection: 'NT: disciples recognize Jesus as the Mosaic Prophet.' },
      { ref: 'John 5:46', testament: 'NT', title: 'Moses wrote of Me', connection: 'NT: Jesus testifies that Moses\' writings pointed to Him.' },
      { ref: 'Matthew 17:5', testament: 'NT', title: 'Hear Him — Transfiguration', connection: 'NT: the Father speaks from the cloud citing the command of Deut 18:15.' },
      { ref: 'Acts 3:22-23', testament: 'NT', title: 'Peter cites Deuteronomy 18', connection: 'NT: apostolic sermon proclaims Jesus as the Prophet to be obeyed.' },
      { ref: 'Acts 7:37', testament: 'NT', title: 'Stephen before the Sanhedrin', connection: 'NT: Stephen identifies Jesus as the Prophet like Moses.' },
      { ref: 'Hebrews 3:1-6', testament: 'NT', title: 'Jesus counted worthy of more glory than Moses', connection: 'NT: Moses faithful as servant, Christ as Son over the house.' },
    ],
  },
  {
    id: 'bronze-serpent',
    name: 'The Bronze Serpent and the Cross',
    origin: 'Numbers 21:8-9',
    steps: [
      { ref: 'Numbers 21:8-9', verseId: 'num-21-9', testament: 'OT', title: 'Bronze serpent set upon a pole', connection: 'Earliest type: looking upon the emblem of judgment brings healing.' },
      { ref: '2 Kings 18:4', testament: 'OT', title: 'Nehushtan broken in pieces', connection: 'Same-OT: the sign corrupted into an idol; the physical bronze has no saving power in itself.' },
      { ref: 'John 3:14-15', testament: 'NT', title: 'Even so must the Son of Man be lifted up', connection: 'NT: Jesus directly applies the serpent on the pole to His crucifixion for eternal life.' },
      { ref: 'John 8:28', testament: 'NT', title: 'When you lift up the Son of Man', connection: 'NT: lifting up on the cross reveals His divine identity.' },
      { ref: 'John 12:32-33', testament: 'NT', title: 'Lifted up from the earth to draw all', connection: 'NT: crucifixion draws all peoples to Himself.' },
      { ref: '2 Corinthians 5:21', testament: 'NT', title: 'Made sin for us', connection: 'NT: Christ took the form of the cursed serpent/sin that we might become righteousness.' },
    ],
  },
  {
    id: 'smitten-rock-water',
    name: 'The Smitten Rock and Living Water',
    origin: 'Exodus 17:6',
    steps: [
      { ref: 'Exodus 17:6', verseId: 'exo-17-6', testament: 'OT', title: 'Moses smites the rock at Horeb', connection: 'Earliest provision: water gushes from the struck rock in the desert.' },
      { ref: 'Numbers 20:8-11', testament: 'OT', title: 'Water from the rock at Meribah', connection: 'Same-OT: second rock event where water quenches thirst.' },
      { ref: 'Psalm 78:15-16', testament: 'OT', title: 'He split the rocks in the wilderness', connection: 'Same-OT: psalm commemorates abundant streams from the rock.' },
      { ref: 'Isaiah 48:21', testament: 'OT', title: 'Water flowed from the rock for them', connection: 'Same-OT: prophetic remembrance of divine sustenance.' },
      { ref: 'Isaiah 55:1', testament: 'OT', title: 'Come to the waters without money', connection: 'Same-OT: water becomes the universal invitation to grace.' },
      { ref: 'Ezekiel 47:1-12', testament: 'OT', title: 'River flowing from the sanctuary', connection: 'Same-OT: vision of healing waters bringing life everywhere.' },
      { ref: 'Zechariah 14:8', testament: 'OT', title: 'Living waters go out from Jerusalem', connection: 'Same-OT: eschatological living waters.' },
      { ref: '1 Corinthians 10:4', testament: 'NT', title: 'That Rock was Christ', connection: 'NT: Paul identifies the smitten wilderness rock as Christ Himself.' },
      { ref: 'John 4:13-14', testament: 'NT', title: 'Fountain of water springing into eternal life', connection: 'NT: Jesus offers the living water to the woman at the well.' },
      { ref: 'John 7:37-39', testament: 'NT', title: 'Rivers of living water — the Spirit', connection: 'NT: Jesus proclaims the living water at the Feast of Tabernacles.' },
      { ref: 'Revelation 22:1, 17', testament: 'NT', title: 'River of the water of life', connection: 'NT: crystal river from the throne of God and of the Lamb.' },
    ],
  },
  {
    id: 'bread-from-heaven',
    name: 'Manna and the True Bread of Life',
    origin: 'Exodus 16:4',
    steps: [
      { ref: 'Exodus 16:4', verseId: 'exo-16-4', testament: 'OT', title: 'Bread rained from heaven', connection: 'Earliest miraculous food in the wilderness.' },
      { ref: 'Deuteronomy 8:3', testament: 'OT', title: 'Man does not live by bread alone', connection: 'Same-OT: manna teaches reliance on every word from God\'s mouth.' },
      { ref: 'Psalm 78:24-25', testament: 'OT', title: 'Bread of heaven — angels\' food', connection: 'Same-OT: poetic celebration of divine provision.' },
      { ref: 'Matthew 4:4', testament: 'NT', title: 'Jesus quotes Deuteronomy 8', connection: 'NT: Jesus defeats Satan using the manna-principle in the wilderness.' },
      { ref: 'John 6:31-35', testament: 'NT', title: 'I am the Bread of Life', connection: 'NT: Jesus contrasts perishable manna with His living flesh for the world.' },
      { ref: 'John 6:48-51', testament: 'NT', title: 'Living bread that came down from heaven', connection: 'NT: whoever eats this bread shall live forever.' },
      { ref: '1 Corinthians 10:3, 16-17', testament: 'NT', title: 'One bread, one body', connection: 'NT: the church participates in Christ through the broken bread.' },
      { ref: 'Revelation 2:17', testament: 'NT', title: 'Hidden manna to the overcomer', connection: 'NT: eschatological feast promised to the faithful.' },
    ],
  },
  {
    id: 'righteous-branch',
    name: 'The Branch (Tsemach) and the Davidic Throne',
    origin: '2 Samuel 7:12',
    steps: [
      { ref: '2 Samuel 7:12-16', verseId: '2sa-7-12', testament: 'OT', title: 'Davidic covenant — house and throne forever', connection: 'Earliest royal dynasty promise: God will establish David\'s seed.' },
      { ref: '2 Samuel 23:5', verseId: '2sa-23-5', testament: 'OT', title: 'Everlasting covenant to branch forth', connection: 'Same-OT: David\'s dying words anticipate his salvation branching forth.' },
      { ref: 'Isaiah 4:2', testament: 'OT', title: 'Branch of the LORD beautiful and glorious', connection: 'Same-OT: the messianic Branch in the day of cleansing.' },
      { ref: 'Isaiah 11:1-2', verseId: 'isa-11-1', testament: 'OT', title: 'Shoot from the stem of Jesse, Branch from his roots', connection: 'Same-OT: Spirit-anointed ruler over nations.' },
      { ref: 'Jeremiah 23:5-6', verseId: 'jer-23-5', testament: 'OT', title: 'Righteous Branch — YHWH Our Righteousness', connection: 'Same-OT: King reigning wisely, executing justice and righteousness.' },
      { ref: 'Jeremiah 33:15', testament: 'OT', title: 'Branch of righteousness to grow up unto David', connection: 'Same-OT: irrevocable covenant with David.' },
      { ref: 'Zechariah 3:8', testament: 'OT', title: 'My Servant the BRANCH', connection: 'Same-OT: post-exilic reaffirmation of the Branch.' },
      { ref: 'Zechariah 6:12-13', verseId: 'zec-6-12', testament: 'OT', title: 'Priest-King on His throne', connection: 'Same-OT: the Branch builds the temple and unites priest and king.' },
      { ref: 'Luke 1:78', testament: 'NT', title: 'Dayspring from on high (Anatolē / Tsemach)', connection: 'NT: Zechariah praises the sunrise/branch visiting from on high.' },
      { ref: 'Romans 15:12', testament: 'NT', title: 'Root of Jesse reigning over Gentiles', connection: 'NT: Paul cites Isaiah 11:10 for Gentile hope.' },
      { ref: 'Revelation 5:5; 22:16', testament: 'NT', title: 'Root and Offspring of David', connection: 'NT: triumphant Lion and morning star.' },
    ],
  },
  {
    id: 'kinsman-redeemer',
    name: 'The Kinsman-Redeemer (Go\'el)',
    origin: 'Leviticus 25:25',
    steps: [
      { ref: 'Leviticus 25:25, 47-49', verseId: 'lev-25-25', testament: 'OT', title: 'Law of the Go\'el — redeeming land and kin', connection: 'Earliest Torah ordinance: near kin buys back lost inheritance and liberty.' },
      { ref: 'Ruth 3:9; 4:1-10', testament: 'OT', title: 'Boaz the faithful kinsman-redeemer', connection: 'Same-OT: Boaz redeems the field and takes Ruth into the covenant line.' },
      { ref: 'Ruth 4:14', verseId: 'rut-4-14', testament: 'OT', title: 'A redeemer to restore life', connection: 'Same-OT: women bless God for the redeemer who fathers Obed.' },
      { ref: 'Job 19:25', verseId: 'job-19-25', testament: 'OT', title: 'I know that my Redeemer lives', connection: 'Same-OT: Job confesses his living Go\'el will stand on the earth.' },
      { ref: 'Isaiah 59:20', testament: 'OT', title: 'The Redeemer shall come to Zion', connection: 'Same-OT: YHWH Himself comes as Israel\'s Redeemer.' },
      { ref: 'Galatians 4:4-5', testament: 'NT', title: 'Born of a woman to redeem those under the law', connection: 'NT: Christ becomes our near kin in the flesh to accomplish redemption.' },
      { ref: 'Hebrews 2:11-15', testament: 'NT', title: 'Not ashamed to call them brethren', connection: 'NT: by sharing our blood He breaks death and frees the enslaved.' },
      { ref: 'Revelation 5:1-9', testament: 'NT', title: 'Worthy is the Lamb to take the title deed', connection: 'NT: the slain Redeemer opens the seven-sealed scroll of redemption.' },
    ],
  },
  {
    id: 'suffering-servant-pierced',
    name: 'The Suffering Servant and Pierced Messiah',
    origin: 'Psalm 22:1',
    steps: [
      { ref: 'Psalm 22:1', verseId: 'psa-22-1', testament: 'OT', title: 'My God, why hast Thou forsaken Me?', connection: 'Earliest cry of the righteous sufferer quoted by Jesus on the cross.' },
      { ref: 'Psalm 22:16-18', verseId: 'psa-22-16', testament: 'OT', title: 'They pierced My hands and feet; cast lots for garments', connection: 'Same-OT: specific prophecy of physical piercing and garment division.' },
      { ref: 'Psalm 69:21', testament: 'OT', title: 'Gall for food, vinegar for thirst', connection: 'Same-OT: suffering of the righteous one offered bitter drink.' },
      { ref: 'Isaiah 50:6', testament: 'OT', title: 'Back to smiters, cheeks to those plucking beard', connection: 'Same-OT: voluntary submission to public shame and violence.' },
      { ref: 'Isaiah 53:4-6', verseId: 'isa-53-5', testament: 'OT', title: 'Wounded for our transgressions, healed by His stripes', connection: 'Same-OT: substitutionary sin-bearing Servant.' },
      { ref: 'Zechariah 12:10', verseId: 'zec-12-10', testament: 'OT', title: 'Look on Me whom they have pierced', connection: 'Same-OT: divine Speaker pierced; mourning as for an only son.' },
      { ref: 'Zechariah 13:7', verseId: 'zec-13-7', testament: 'OT', title: 'Awake, O sword, against My Shepherd', connection: 'Same-OT: the Shepherd who is YHWH\'s Companion struck.' },
      { ref: 'Matthew 27:34-46', testament: 'NT', title: 'The cross of Jesus Christ', connection: 'NT: crucifixion fulfills Ps 22, Ps 69, Isa 50, and Isa 53 in detail.' },
      { ref: 'John 19:34-37', testament: 'NT', title: 'Soldier pierces His side', connection: 'NT: John cites Zechariah 12:10 and Exodus 12:46.' },
      { ref: 'Acts 8:32-35', testament: 'NT', title: 'Philip preaches Jesus from Isaiah 53', connection: 'NT: apostolic proclamation centers on the sheep led to slaughter.' },
      { ref: '1 Peter 2:21-25', testament: 'NT', title: 'His own self bare our sins on the tree', connection: 'NT: Peter applies Isaiah 53 to Christ\'s substitutionary work.' },
      { ref: 'Revelation 1:7', testament: 'NT', title: 'Every eye shall see Him, and they who pierced Him', connection: 'NT: eschatological manifestation of the pierced King.' },
    ],
  },
  {
    id: 'new-covenant-heart',
    name: 'Circumcision of Heart and the New Covenant',
    origin: 'Deuteronomy 30:6',
    steps: [
      { ref: 'Deuteronomy 30:6', verseId: 'deu-30-6', testament: 'OT', title: 'The LORD will circumcise your heart', connection: 'Earliest promise that internal regeneration will replace external failure.' },
      { ref: 'Jeremiah 31:31-34', verseId: 'jer-31-31', testament: 'OT', title: 'The New Covenant — law written on the heart', connection: 'Same-OT: explicit promise of a new covenant with permanent remission of sins.' },
      { ref: 'Ezekiel 36:26-27', verseId: 'ezk-36-26', testament: 'OT', title: 'A new heart and the Spirit within', connection: 'Same-OT: removal of stone heart; heart of flesh given.' },
      { ref: 'Luke 22:20', testament: 'NT', title: 'This cup is the New Covenant in My blood', connection: 'NT: Jesus inaugurates the new covenant at the Last Supper.' },
      { ref: '1 Corinthians 11:25', testament: 'NT', title: 'New Covenant memorialized in communion', connection: 'NT: apostolic church continually remembers the new covenant.' },
      { ref: '2 Corinthians 3:3-6', testament: 'NT', title: 'Ministers of the New Covenant in the Spirit', connection: 'NT: written on fleshy tables of the heart, not stone.' },
      { ref: 'Romans 2:29', testament: 'NT', title: 'Circumcision is of the heart, in the spirit', connection: 'NT: inward identity defined by Spirit, fulfilling Deut 30:6.' },
      { ref: 'Hebrews 8:6-13', testament: 'NT', title: 'Christ mediator of a better covenant', connection: 'NT: full quotation and theological exposition of Jeremiah 31.' },
      { ref: 'Hebrews 10:15-18', testament: 'NT', title: 'Their sins and iniquities I will remember no more', connection: 'NT: finality of Christ\'s sacrifice completes the new covenant.' },
    ],
  },
  {
    id: 'resurrection-remnant',
    name: 'Bodily Resurrection: Awakening from the Dust',
    origin: 'Job 19:25',
    steps: [
      { ref: 'Job 19:25-27', verseId: 'job-19-25', testament: 'OT', title: 'In my flesh I shall see God', connection: 'Earliest explicit hope of bodily vision of God after physical dissolution.' },
      { ref: 'Psalm 16:9-11', verseId: 'psa-110-1', testament: 'OT', title: 'Thou wilt not leave my soul in Sheol', connection: 'Same-OT: David\'s prophecy of preservation from corruption.' },
      { ref: 'Isaiah 26:19', testament: 'OT', title: 'Awake and sing, ye that dwell in dust', connection: 'Same-OT: the earth casting forth its dead in resurrection.' },
      { ref: 'Ezekiel 37:1-14', verseId: 'ezk-37-12', testament: 'OT', title: 'I will open your graves — dry bones live', connection: 'Same-OT: vision of the Spirit raising graves.' },
      { ref: 'Daniel 12:2-3', verseId: 'dan-12-2', testament: 'OT', title: 'They that sleep in dust awake', connection: 'Same-OT: two-fold resurrection to everlasting life or shame.' },
      { ref: 'Hosea 13:14', testament: 'OT', title: 'O death, I will be thy plagues', connection: 'Same-OT: YHWH ransoming from the power of the grave.' },
      { ref: 'John 5:28-29', testament: 'NT', title: 'All that are in the graves shall hear His voice', connection: 'NT: Jesus declares His voice raises the dead to life or condemnation.' },
      { ref: 'John 11:25-26', testament: 'NT', title: 'I am the Resurrection and the Life', connection: 'NT: Jesus demonstrates resurrection authority in Lazarus.' },
      { ref: 'Acts 2:27-31; 13:35-37', testament: 'NT', title: 'Apostles preach Christ risen without corruption', connection: 'NT: Psalm 16 fulfilled in Christ\'s empty tomb.' },
      { ref: '1 Corinthians 15:20-23, 51-55', testament: 'NT', title: 'Christ the firstfruits; death swallowed up', connection: 'NT: Paul quotes Isaiah 25:8 and Hosea 13:14 for bodily resurrection.' },
      { ref: '1 Thessalonians 4:13-18', testament: 'NT', title: 'The dead in Christ shall rise first', connection: 'NT: public bodily resurrection at the Lord\'s descent.' },
      { ref: 'Revelation 20:4-6, 12-14', testament: 'NT', title: 'First resurrection; death cast into the lake of fire', connection: 'NT: final conquest of death and bodily vindication.' },
    ],
  },
  {
    id: 'day-of-the-lord',
    name: 'The Day of the LORD and the Outpouring of the Spirit',
    origin: 'Joel 2:28',
    steps: [
      { ref: 'Joel 2:28-29', verseId: 'jol-2-28', testament: 'OT', title: 'I will pour out My Spirit on all flesh', connection: 'Earliest universal promise of Spirit-outpouring in the last days.' },
      { ref: 'Joel 2:30-32', verseId: 'jol-2-32', testament: 'OT', title: 'Signs in heaven; whosoever calls on the LORD saved', connection: 'Same-OT: cosmic portents preceding the great and terrible day of the LORD.' },
      { ref: 'Amos 5:18-20', testament: 'OT', title: 'The day of the LORD is darkness, not light', connection: 'Same-OT: judgment upon hypocritical externalism.' },
      { ref: 'Zephaniah 1:14-18', testament: 'OT', title: 'The great day of the LORD is near and hastens', connection: 'Same-OT: universal urgency of divine reckoning.' },
      { ref: 'Malachi 4:1-5', testament: 'OT', title: 'Sun of Righteousness arises with healing in His wings', connection: 'Same-OT: oven of judgment for proud, healing dawn for faithful.' },
      { ref: 'Acts 2:16-21', testament: 'NT', title: 'Peter at Pentecost: "This is that spoken by Joel"', connection: 'NT: Spirit-outpouring explicitly identified as Joel\'s prophecy.' },
      { ref: 'Romans 10:13', testament: 'NT', title: 'Whosoever shall call upon the name of the Lord shall be saved', connection: 'NT: Paul applies Joel 2:32 to calling on Jesus.' },
      { ref: 'Matthew 24:29-31', testament: 'NT', title: 'Cosmic signs before the Son of Man arrives', connection: 'NT: Jesus uses Joel\'s darkened sun and moon for His second coming.' },
      { ref: '1 Thessalonians 5:1-4', testament: 'NT', title: 'The Day of the Lord as a thief in the night', connection: 'NT: unexpected advent for darkness, watchful hope for believers.' },
      { ref: '2 Peter 3:10-13', testament: 'NT', title: 'New heavens and new earth in which righteousness dwells', connection: 'NT: elements melt with fervent heat; eternal new creation.' },
      { ref: 'Revelation 6:16-17; 19:11-21', testament: 'NT', title: 'The great day of His wrath has come', connection: 'NT: the kings cry to mountains; the King of kings triumphs.' },
    ],
  },
  {
    id: 'elijah-forerunner',
    name: 'The Elijah Messenger and the Forerunner',
    origin: 'Isaiah 40:3',
    steps: [
      { ref: 'Isaiah 40:3', verseId: 'isa-40-3', testament: 'OT', title: 'Voice crying in the wilderness', connection: 'Earliest prophetic herald clearing a highway for YHWH.' },
      { ref: 'Malachi 3:1', verseId: 'mal-3-1', testament: 'OT', title: 'My messenger to prepare the way', connection: 'Same-OT: messenger prepares the way before the Lord visits His temple.' },
      { ref: 'Malachi 4:5-6', verseId: 'mal-4-5', testament: 'OT', title: 'Elijah sent before the great and dreadful day', connection: 'Same-OT: Elijah\'s spirit of reformation turning hearts before judgment.' },
      { ref: 'Luke 1:17', testament: 'NT', title: 'In the spirit and power of Elijah', connection: 'NT: angel Gabriel applies Malachi 4:6 to John the Baptist.' },
      { ref: 'Matthew 11:10, 14', testament: 'NT', title: 'If you will receive it, this is Elijah', connection: 'NT: Jesus declares John is the promised Elijah of the first advent.' },
      { ref: 'Matthew 17:10-13', testament: 'NT', title: 'Elijah truly shall come and restore all things', connection: 'NT: dual fulfillment — John came as forerunner; restoration precedes the second advent.' },
      { ref: 'John 1:23', testament: 'NT', title: 'Voice crying in the wilderness', connection: 'NT: John quotes Isaiah 40:3 for his mission.' },
      { ref: 'Revelation 14:6-12', testament: 'NT', title: 'Three Angels\' Messages: Final Elijah proclamation', connection: 'NT: the end-time message of reformation and judgment calling the world back to true Creator-worship.' },
    ],
  },
  {
    id: 'former-latter-rain',
    name: 'The Early and Latter Rain of the Spirit',
    origin: 'Deuteronomy 11:14',
    steps: [
      { ref: 'Deuteronomy 11:14', verseId: 'deu-11-14', testament: 'OT', title: 'First rain and latter rain promised', connection: 'Earliest covenant promise: timely rain for sowing and harvesting the grain.' },
      { ref: 'Hosea 6:3', verseId: 'hos-6-3', testament: 'OT', title: 'He shall come as the rain to the earth', connection: 'Same-OT: divine presence and revival promised under the figure of rain.' },
      { ref: 'Joel 2:23', verseId: 'jol-2-23', testament: 'OT', title: 'Former rain and latter rain in the first month', connection: 'Same-OT: physical downpour prefiguring the spiritual outpouring.' },
      { ref: 'Joel 2:28-29', verseId: 'jol-2-28', testament: 'OT', title: 'Pour out My Spirit on all flesh', connection: 'Same-OT: the promise of the Holy Spirit on young and old, servants and handmaids.' },
      { ref: 'Zechariah 10:1', verseId: 'zec-10-1', testament: 'OT', title: 'Ask rain in the time of the latter rain', connection: 'Same-OT: divine command to pray for the final ripening shower.' },
      { ref: 'Acts 2:1-4, 16-21', testament: 'NT', title: 'Pentecost: The Early Rain of the Spirit', connection: 'NT: Peter cites Joel 2; the early rain germinates and empowers the apostolic church.' },
      { ref: 'James 5:7', verseId: 'jam-5-7', testament: 'NT', title: 'Be patient until the early and latter rain', connection: 'NT: James uses the agricultural type for patient waiting until the coming of the Lord.' },
      { ref: 'Revelation 18:1', testament: 'NT', title: 'Earth lightened with His glory (Loud Cry)', connection: 'NT: the final outpouring of the Holy Spirit (latter rain) illuminating the earth before the harvest.' },
    ],
  },
  // ── Historic Adventist Master Pillar Chains ──────────────────────────────
  {
    id: 'sanctuary-2300-days',
    name: '1. The 2,300 Days & Cleansing of the Sanctuary',
    origin: 'Daniel 8:14',
    steps: [
      { ref: 'Exodus 25:8, 40', verseId: 'exo-25-40', testament: 'OT', title: 'Pattern of the Sanctuary: God dwells with His people', connection: 'Earliest blueprint: earthly tabernacle modeled after the heavenly reality shown to Moses.' },
      { ref: 'Leviticus 16:16-19', verseId: 'lev-16-16', testament: 'OT', title: 'Yom Kippur: Annual cleansing of the sanctuary by blood', connection: 'Same-OT: annual Day of Atonement purges accumulated sin and cleanses the holy places.' },
      { ref: 'Daniel 7:9-10, 22', verseId: 'dan-7-9', testament: 'OT', title: 'Heavenly court seated and books opened', connection: 'Same-OT: pre-advent judgment scene before the Ancient of Days vindicates the saints.' },
      { ref: 'Daniel 8:14', verseId: 'dan-8-14', testament: 'OT', title: 'Unto 2,300 days; then shall the sanctuary be cleansed', connection: 'Anchor prophecy: 2,300 prophetic day-years culminating in the restoration/vindication (nitsdaq) of the heavenly sanctuary.' },
      { ref: 'Hebrews 8:1-2', verseId: 'heb-8-1', testament: 'NT', title: 'Christ High Priest of the true tabernacle', connection: 'NT: Christ ministers in heaven itself, which the Lord pitched and not man.' },
      { ref: 'Hebrews 9:23-24', verseId: 'heb-9-23', testament: 'NT', title: 'Heavenly patterns purified with better sacrifices', connection: 'NT: earthly sanctuary purified with animal blood; heavenly sanctuary entered by Christ\'s own blood.' },
      { ref: 'Revelation 11:19', verseId: 'rev-11-19', testament: 'NT', title: 'Temple of God opened in heaven; ark of His testament seen', connection: 'NT: Most Holy Place opened at the sounding of the seventh trumpet.' },
      { ref: 'Revelation 14:7', verseId: 'rev-14-7', testament: 'NT', title: 'Hour of His judgment is come — worship the Creator', connection: 'NT: pre-advent investigative judgment inaugurating the final cleansing before the second coming.' },
    ],
  },
  {
    id: 'seventy-weeks-messiah',
    name: '2. The 70 Weeks: Dating the Messiah',
    origin: 'Daniel 9:24-27',
    steps: [
      { ref: 'Ezra 7:11-26', verseId: 'ezr-7-11', testament: 'OT', title: 'Decree of Artaxerxes to restore Jerusalem (457 BC)', connection: 'Historical datum: 7th year of Artaxerxes I gives full legal autonomy to rebuild city, starting the 70-week and 2,300-day counts.' },
      { ref: 'Daniel 9:24', verseId: 'dan-9-24', testament: 'OT', title: 'Seventy weeks determined upon thy people', connection: 'Prophetic timeline: 70 sevens (490 years) cut off for covenant probation and messianic atonement.' },
      { ref: 'Daniel 9:25', verseId: 'dan-9-25', testament: 'OT', title: 'Unto Messiah the Prince: 69 weeks (483 years)', connection: 'Calculation: 457 BC + 483 years brings exactly to 27 AD.' },
      { ref: 'Luke 3:1, 21-23', verseId: 'luk-3-1', testament: 'NT', title: '27 AD: Jesus baptized and anointed with the Holy Spirit', connection: 'NT fulfillment: 15th year of Tiberius Caesar; Jesus is anointed (Messiah / Christ) at His baptism.' },
      { ref: 'Daniel 9:26', verseId: 'dan-9-26', testament: 'OT', title: 'Messiah cut off, but not for Himself', connection: 'Same-OT: substitutionary death of the Anointed One foretold.' },
      { ref: 'Daniel 9:27', verseId: 'dan-9-27', testament: 'OT', title: 'Midst of the week: cause sacrifice and oblation to cease', connection: 'Prophecy: in the middle of the 70th week (after 3.5 years of ministry, spring 31 AD), sacrifices are ended.' },
      { ref: 'Matthew 27:51', verseId: 'mat-27-51', testament: 'NT', title: '31 AD: Temple veil rent in twain at crucifixion', connection: 'NT fulfillment: Christ dies at Passover; type meets antitype; the animal sacrificial system terminates.' },
      { ref: 'Acts 7:54-60', verseId: 'act-7-54', testament: 'NT', title: '34 AD: Stephen stoned; gospel sent to Gentiles', connection: 'NT fulfillment: end of the 70 weeks (490 years); gospel proclamation transitions to the Gentiles.' },
    ],
  },
  {
    id: 'sabbath-creation-new-earth',
    name: '3. The Sabbath: Creation to the New Earth',
    origin: 'Genesis 2:1-3',
    steps: [
      { ref: 'Genesis 2:1-3', verseId: 'gen-2-2', testament: 'OT', title: 'Creation Sabbath: God rested, blessed, and sanctified the seventh day', connection: 'Earliest origin: seventh-day rest instituted in Eden before the entrance of sin.' },
      { ref: 'Exodus 20:8-11', verseId: 'exo-20-8', testament: 'OT', title: 'Fourth Commandment: Perpetual memorial of Creation', connection: 'Sinai moral law: written by the finger of God in the heart of the Decalogue.' },
      { ref: 'Ezekiel 20:12, 20', verseId: 'ezk-20-12', testament: 'OT', title: 'Perpetual sign of sanctification between God and His people', connection: 'Prophetic covenant: the Sabbath identifies the true Creator who makes His people holy.' },
      { ref: 'Luke 4:16', verseId: 'luk-4-16', testament: 'NT', title: 'Christ\'s custom: synagogue worship on the Sabbath day', connection: 'NT example: Jesus Christ observed the seventh-day Sabbath throughout His earthly incarnation.' },
      { ref: 'Matthew 24:20', verseId: 'mat-24-20', testament: 'NT', title: 'Pray that your flight be not on the Sabbath', connection: 'NT prophetic continuity: Jesus instructs disciples to guard Sabbath sanctity far past the Cross into 70 AD and end-times.' },
      { ref: 'Hebrews 4:4, 9', verseId: 'heb-4-9', testament: 'NT', title: 'There remaineth therefore a Sabbath-keeping (sabbatismos)', connection: 'Apostolic theology: the weekly rest remains a living obligation and spiritual rest for God\'s people.' },
      { ref: 'Revelation 14:7', verseId: 'rev-14-7', testament: 'NT', title: 'Final call: Worship Him that made heaven, earth, and sea', connection: 'End-time restoration: Third Angel quotes Exodus 20:11, restoring Creator-worship before judgment.' },
      { ref: 'Isaiah 66:22-23', verseId: 'isa-66-22', testament: 'OT', title: 'New Earth: From one Sabbath to another all flesh worships', connection: 'Eternal consummation: Sabbath remains the perpetual rhythm of worship in the restored cosmos.' },
    ],
  },
  {
    id: 'state-of-dead-immortality',
    name: '4. The State of the Dead (Conditional Immortality)',
    origin: 'Genesis 2:7',
    steps: [
      { ref: 'Genesis 2:7', verseId: 'gen-2-7', testament: 'OT', title: 'Dust + breath of life = living soul (nephesh chayah)', connection: 'Creation formula: man does not possess an independent immortal soul; man became a living soul.' },
      { ref: 'Genesis 3:19', verseId: 'gen-3-19', testament: 'OT', title: 'Dust thou art, and unto dust shalt thou return', connection: 'Fall reality: death is the return of the physical body to dust and breath to God.' },
      { ref: 'Psalm 146:4', verseId: 'psa-146-4', testament: 'OT', title: 'Breath goeth forth; in that very day his thoughts perish', connection: 'Total unconsciousness: complete cessation of mental activity and consciousness at death.' },
      { ref: 'Ecclesiastes 9:5-6, 10', verseId: 'ecc-9-5', testament: 'OT', title: 'The dead know not anything; no device in the grave', connection: 'Canonical consensus: no awareness, praise, or communication exists in the state of death.' },
      { ref: '1 Timothy 6:16', verseId: '1ti-6-16', testament: 'NT', title: 'God alone possesses immortality', connection: 'Theological baseline: immortality belongs exclusively to God; human immortality is conditional.' },
      { ref: 'John 11:11-14', verseId: 'joh-11-11', testament: 'NT', title: 'Jesus defines death as an unconscious sleep', connection: 'Christ\'s doctrine: "Our friend Lazarus sleepeth... Lazarus is dead."' },
      { ref: '1 Thessalonians 4:13-17', verseId: '1th-4-13', testament: 'NT', title: 'The dead in Christ shall rise first at the Lord\'s descent', connection: 'Apostolic hope: believers are awakened from sleep together at the audible, visible second coming.' },
      { ref: '1 Corinthians 15:51-54', verseId: '1co-15-51', testament: 'NT', title: 'Mortal puts on immortality at the last trump', connection: 'Transformation: physical incorruptibility is bestowed at the resurrection, not at death.' },
      { ref: 'Malachi 4:1-3', verseId: 'mal-4-1', testament: 'OT', title: 'Wicked burned to stubble; become ashes under feet', connection: 'Complete eradication: wicked destroyed completely in final fire, not tortured eternally.' },
      { ref: 'Revelation 20:14', verseId: 'rev-20-14', testament: 'NT', title: 'Death and hell cast into lake of fire — the second death', connection: 'Cosmic cleansing: the final destruction of sin, death, and the grave forever.' },
    ],
  },
  {
    id: 'three-angels-seal-mark',
    name: '5. The Three Angels\' Messages & The Seal vs. Mark',
    origin: 'Revelation 14:6-12',
    steps: [
      { ref: 'Exodus 20:11', verseId: 'exo-20-11', testament: 'OT', title: 'Creator\'s Seal in the Fourth Commandment', connection: 'Decalogue foundation: contains divine name (YHWH), office (Maker/Creator), and territory (heaven, earth, sea).' },
      { ref: 'Daniel 7:25', verseId: 'dan-7-25', testament: 'OT', title: 'Little horn thinks to change times and laws (1260 days)', connection: 'Prophetic warning: apostate power attempts to alter God\'s Sabbath and law during historical supremacy.' },
      { ref: 'Revelation 7:2-3', verseId: 'rev-7-2', testament: 'NT', title: 'Seal of the living God placed upon the servants\' foreheads', connection: 'End-time protection: settling into truth intellectually and spiritually before the winds blow.' },
      { ref: 'Revelation 12:17', verseId: 'rev-12-17', testament: 'NT', title: 'Remnant keeps commandments of God and testimony of Jesus', connection: 'Loyalty marker: faithful remnant withstands the dragon\'s final wrath through obedience and faith.' },
      { ref: 'Revelation 14:6-7', verseId: 'rev-14-6', testament: 'NT', title: 'First Angel: Everlasting gospel, judgment hour, Creator-worship', connection: 'Proclamation: restoration of the true gospel and fourth-commandment Creator worship before judgment.' },
      { ref: 'Revelation 14:8', verseId: 'rev-14-8', testament: 'NT', title: 'Second Angel: Babylon is fallen, is fallen', connection: 'Separation: moral fall of apostate religious systems rejecting biblical truth.' },
      { ref: 'Revelation 14:9-11', verseId: 'rev-14-9', testament: 'NT', title: 'Third Angel: Warning against the beast, image, and mark', connection: 'Solemn warning: the danger of receiving counterfeit human-enforced worship.' },
      { ref: 'Revelation 14:12', verseId: 'rev-14-12', testament: 'NT', title: 'Patience of the saints: commandments of God and faith of Jesus', connection: 'Remnant character: perseverance in keeping God\'s commandments through the faith of Jesus.' },
      { ref: 'Revelation 18:1-4', verseId: 'rev-18-1', testament: 'NT', title: 'The Loud Cry: "Come out of her, My people"', connection: 'Universal summons: earth illuminated with divine glory before probation closes.' },
    ],
  },
  {
    id: 'great-controversy-arc',
    name: '6. The Great Controversy Cosmic Arc',
    origin: 'Isaiah 14:12-15',
    steps: [
      { ref: 'Isaiah 14:12-15', verseId: 'isa-14-12', testament: 'OT', title: 'Lucifer\'s pride and desire for self-exaltation', connection: 'Origin of evil: "I will ascend above the stars... I will be like the most High."' },
      { ref: 'Ezekiel 28:12-19', verseId: 'ezk-28-12', testament: 'OT', title: 'Anointed covering cherub falls through iniquity', connection: 'Heavenly tragedy: highest created angel corrupts his wisdom through pride.' },
      { ref: 'Genesis 3:15', verseId: 'gen-3-15', testament: 'OT', title: 'Protoevangelium: Enmity and serpent\'s head crushed', connection: 'Cosmic battle on earth: Seed of woman conquers through sacrifice.' },
      { ref: 'Revelation 12:7-9', verseId: 'rev-12-7', testament: 'NT', title: 'War in heaven: Michael and His angels cast out the dragon', connection: 'Decisive expulsion: Satan and fallen angels cast down to the earth.' },
      { ref: 'Colossians 2:15', verseId: 'col-2-15', testament: 'NT', title: 'Christ spoils principalities and powers on the Cross', connection: 'Calvary victory: Satan\'s accusations against God\'s character forever answered and disarmed.' },
      { ref: 'Romans 16:20', verseId: 'rom-16-20', testament: 'NT', title: 'God of peace will bruise Satan under your feet shortly', connection: 'Apostolic promise: believers triumph over the adversary through the living Christ.' },
      { ref: 'Revelation 20:10', verseId: 'rev-20-10', testament: 'NT', title: 'The devil cast into the lake of fire', connection: 'Final execution: the originator of sin destroyed forever.' },
      { ref: 'Nahum 1:9', verseId: 'nam-1-9', testament: 'OT', title: 'Utter end: Affliction shall not rise up the second time', connection: 'Eternal security: sin will never again arise because God\'s love and justice are universally established.' },
    ],
  },
  {
    id: 'spirit-of-prophecy-remnant',
    name: '7. The Spirit of Prophecy & The Remnant',
    origin: 'Amos 3:7',
    steps: [
      { ref: 'Amos 3:7', verseId: 'amo-3-7', testament: 'OT', title: 'God reveals His secret to His servants the prophets', connection: 'Divine rule: significant redemptive actions are always preceded by prophetic revelation.' },
      { ref: 'Numbers 12:6', verseId: 'num-12-6', testament: 'OT', title: 'Prophetic criteria: visions and dreams', connection: 'Biblical mechanism: how God speaks to true prophets under inspired guidance.' },
      { ref: 'Joel 2:28-29', verseId: 'jol-2-28', testament: 'OT', title: 'Latter-day outpouring of the prophetic Spirit', connection: 'End-time promise: prophetic gift active right up to the great day of the LORD.' },
      { ref: '1 Corinthians 12:28', verseId: '1co-12-28', testament: 'NT', title: 'Prophets placed permanently in the body of Christ', connection: 'Apostolic order: spiritual gifts remain active until the church reaches mature unity in faith.' },
      { ref: 'Revelation 12:17', verseId: 'rev-12-17', testament: 'NT', title: 'Remnant identified: has the testimony of Jesus Christ', connection: 'Identifying mark: end-time believers preserve obedience and the living prophetic testimony.' },
      { ref: 'Revelation 19:10', verseId: 'rev-19-10', testament: 'NT', title: 'The testimony of Jesus is the Spirit of Prophecy', connection: 'Inspired definition: John defines the testimony of Jesus as the Holy Spirit speaking through prophecy.' },
      { ref: 'Revelation 22:9', verseId: 'rev-22-9', testament: 'NT', title: 'Fellowservant of thy brethren the prophets', connection: 'Hermeneutical parallel: the angel equates "the testimony of Jesus" with "thy brethren the prophets."' },
    ],
  },
  {
    id: 'millennium-earth-made-new',
    name: '8. The Millennium & The Earth Made New',
    origin: 'Leviticus 25:10',
    steps: [
      { ref: 'Leviticus 25:10', verseId: 'lev-25-10', testament: 'OT', title: 'The Jubilee: Proclaim liberty and restore inheritance', connection: 'Torah type: 50th year Jubilee restores lost possessions and emancipates captive slaves.' },
      { ref: 'Jeremiah 4:23-26', verseId: 'jer-4-23', testament: 'OT', title: 'Earth desolated without inhabitant during judgment', connection: 'Prophetic vision: earth returned to chaotic abyss (tohu va-bohu) while cities lie in ruins before the Lord.' },
      { ref: 'Isaiah 24:21-22', verseId: 'isa-24-21', testament: 'OT', title: 'High ones and kings gathered in prison, visited after many days', connection: 'Millennial imprisonment: demonic powers and wicked rulers locked in the pit for 1,000 years.' },
      { ref: '1 Corinthians 6:2-3', verseId: '1co-6-2', testament: 'NT', title: 'Saints shall judge the world and judge angels', connection: 'Heavenly review: redeemed believers during the 1,000 years examine records and affirm divine justice.' },
      { ref: 'Revelation 20:1-6', verseId: 'rev-20-4', testament: 'NT', title: 'First resurrection: Saints reign with Christ 1,000 years', connection: 'Millennium in heaven: righteous raised at second coming; Satan bound to desolate earth.' },
      { ref: 'Revelation 20:7-15', verseId: 'rev-20-14', testament: 'NT', title: 'Second resurrection: Final rebellion devoured by fire', connection: 'Consummation: wicked raised after 1,000 years; lake of fire consumes evil permanently.' },
      { ref: '2 Peter 3:10-13', verseId: '2pe-3-10', testament: 'NT', title: 'Elements melt; new heavens and new earth wherein dwelleth righteousness', connection: 'Cosmic purification: fire purges the planet, making way for eternal recreation.' },
      { ref: 'Revelation 21:1-5', verseId: 'rev-21-1', testament: 'NT', title: 'New Jerusalem descends: God tabernacles with men', connection: 'Eden restored: death, sorrow, and crying passed away forever.' },
      { ref: 'Revelation 22:1-5', verseId: 'rev-22-1', testament: 'NT', title: 'River of life and tree of life: They shall see His face', connection: 'Eternal communion: unbroken fellowship with God and the Lamb throughout eternity.' },
    ],
  },
  {
    id: 'no-strange-doctrines',
    name: 'Safeguard Against Strange Doctrines: The Three Biblical Tests',
    origin: 'Isaiah 8:20',
    steps: [
      { ref: 'Isaiah 8:20', verseId: 'isa-8-20', testament: 'OT', title: 'Test 1: To the Law and to the Testimony', connection: 'Moral and prophetic consistency: if doctrine contradicts God\'s law or prophetic word, there is no light in it.' },
      { ref: '2 Peter 1:20-21', testament: 'NT', title: 'Test 2: Sola Scriptura / Analogia Scripturae', connection: 'Canonical harmony: no prophecy is of private interpretation; established by the consensus of the whole canon.' },
      { ref: 'Hebrews 8:1-2', verseId: 'heb-8-1', testament: 'NT', title: 'Test 3: Christ-Centered Sanctuary Baseline', connection: 'Christological focus: every prophetic time-period centers on Christ\'s sacrifice, priesthood, and return.' },
    ],
  },
];

/** verseId → chain for quick lookup */
export const verseToChainId: Record<string, string> = {};
for (const chain of threadChains) {
  for (const step of chain.steps) {
    if (step.verseId) verseToChainId[step.verseId] = chain.id;
  }
}

export function getThreadDetail(verseId: string): ThreadDetail | null {
  return (
    threadDetails[verseId] ??
    bookThreadDetails[verseId] ??
    draftThreadDetails[verseId] ??
    null
  );
}

/** Every hand-written detail, keyed by verse id (threadDetails + bookThreadDetails).
 *  Used by the Lexicon page to index original-language terms across the canon. */
export function getAllThreadDetails(): Record<string, ThreadDetail> {
  return { ...bookThreadDetails, ...threadDetails };
}

export function getChainForVerse(verseId: string): ThreadChain | null {
  const id = verseToChainId[verseId];
  if (!id) return null;
  return threadChains.find(c => c.id === id) ?? null;
}

export function getChainById(chainId: string): ThreadChain | null {
  if (chainId === 'sanctuary-judgment') {
    return threadChains.find(c => c.id === 'sanctuary-2300-days') ?? null;
  }
  return threadChains.find(c => c.id === chainId) ?? null;
}

export interface MasterPillarInfo {
  id: string;
  number: number;
  name: string;
  primaryAnchor: string;
  primaryAnchorVerseId: string;
  fulfillmentSummary: string;
  chain: ThreadChain;
}

export const MASTER_PILLAR_CHAINS: MasterPillarInfo[] = [
  {
    id: 'sanctuary-2300-days',
    number: 1,
    name: 'The 2,300 Days & Cleansing of the Sanctuary',
    primaryAnchor: 'Daniel 8:14; Leviticus 16:16-19; Exodus 25:8, 40',
    primaryAnchorVerseId: 'dan-8-14',
    fulfillmentSummary: 'Hebrews 8:1-2; Hebrews 9:23-24; Revelation 11:19; Revelation 14:7 (The pre-advent investigative judgment inaugurating the cleansing of the heavenly sanctuary).',
    chain: threadChains.find(c => c.id === 'sanctuary-2300-days')!,
  },
  {
    id: 'seventy-weeks-messiah',
    number: 2,
    name: 'The 70 Weeks: Dating the Messiah',
    primaryAnchor: 'Daniel 9:24-27; Ezra 7:11-26 (457 BC decree)',
    primaryAnchorVerseId: 'dan-9-25',
    fulfillmentSummary: 'Luke 3:1, 21-23 (27 AD baptism / Anointed); Matthew 27:51 (31 AD crucifixion ending sacrifices); Acts 7:54-60 (34 AD gospel to Gentiles).',
    chain: threadChains.find(c => c.id === 'seventy-weeks-messiah')!,
  },
  {
    id: 'sabbath-creation-new-earth',
    number: 3,
    name: 'The Sabbath: Creation to New Earth',
    primaryAnchor: 'Genesis 2:1-3; Exodus 20:8-11; Ezekiel 20:12, 20',
    primaryAnchorVerseId: 'gen-2-2',
    fulfillmentSummary: 'Luke 4:16; Matthew 24:20; Hebrews 4:4, 9; Isaiah 66:22-23; Revelation 14:7 (Sabbath as the perpetual sign of Creator-worship).',
    chain: threadChains.find(c => c.id === 'sabbath-creation-new-earth')!,
  },
  {
    id: 'state-of-dead-immortality',
    number: 4,
    name: 'The State of the Dead (Conditional Immortality)',
    primaryAnchor: 'Genesis 2:7; 3:19; Ecclesiastes 9:5-6, 10; Psalm 146:4',
    primaryAnchorVerseId: 'gen-2-7',
    fulfillmentSummary: 'John 11:11-14 ("Lazarus sleepeth"); 1 Timothy 6:16 (God alone has immortality); 1 Corinthians 15:51-54; 1 Thessalonians 4:13-17; Malachi 4:1-3; Revelation 20:14 (Second death / total eradication of sin).',
    chain: threadChains.find(c => c.id === 'state-of-dead-immortality')!,
  },
  {
    id: 'three-angels-seal-mark',
    number: 5,
    name: 'The Three Angels\' Messages & The Seal vs. Mark',
    primaryAnchor: 'Revelation 14:6-12; Exodus 20:11; Daniel 7:25',
    primaryAnchorVerseId: 'rev-14-6',
    fulfillmentSummary: 'Revelation 7:2-3; Revelation 12:17; Revelation 18:1-4 (Final proclamation: Creator-worship, fall of Babylon, warning against beast\'s mark, remnant keeping commandments and faith of Jesus).',
    chain: threadChains.find(c => c.id === 'three-angels-seal-mark')!,
  },
  {
    id: 'great-controversy-arc',
    number: 6,
    name: 'The Great Controversy Cosmic Arc',
    primaryAnchor: 'Isaiah 14:12-15; Ezekiel 28:12-19; Genesis 3:15',
    primaryAnchorVerseId: 'isa-14-12',
    fulfillmentSummary: 'Revelation 12:7-9; Colossians 2:15; Romans 16:20; Revelation 20:10; Nahum 1:9 ("Affliction shall not rise up the second time").',
    chain: threadChains.find(c => c.id === 'great-controversy-arc')!,
  },
  {
    id: 'spirit-of-prophecy-remnant',
    number: 7,
    name: 'The Spirit of Prophecy & The Remnant',
    primaryAnchor: 'Amos 3:7; Numbers 12:6; Joel 2:28',
    primaryAnchorVerseId: 'amo-3-7',
    fulfillmentSummary: '1 Corinthians 12:28; Revelation 12:17; Revelation 19:10 ("The testimony of Jesus is the spirit of prophecy"); Revelation 22:9.',
    chain: threadChains.find(c => c.id === 'spirit-of-prophecy-remnant')!,
  },
  {
    id: 'millennium-earth-made-new',
    number: 8,
    name: 'The Millennium & The Earth Made New',
    primaryAnchor: 'Leviticus 25:10 (Jubilee); Jeremiah 4:23-26; Isaiah 24:21-22',
    primaryAnchorVerseId: 'lev-25-10',
    fulfillmentSummary: '1 Corinthians 6:2-3 (Saints judge angels); Revelation 20:1-15; 2 Peter 3:10-13; Revelation 21:1-5; Revelation 22:1-5.',
    chain: threadChains.find(c => c.id === 'millennium-earth-made-new')!,
  },
];
