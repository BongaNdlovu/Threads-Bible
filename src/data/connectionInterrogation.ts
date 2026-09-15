/**
 * Rigorous biblical interrogation and historical context for connections.
 *
 * Every connection between a biblical anchor verse and a fulfillment ref
 * answers six fundamental interrogations:
 *  1. WHAT: The verbal, textual, and thematic connection.
 *  2. WHEN: Chronological dating, epochs, and redemptive timeline.
 *  3. HOW: Exegetical and hermeneutical mechanic (original languages, typology, direct prophecy).
 *  4. WHY: Divine necessity and theological purpose.
 *  5. ULTIMATE POINT: The supreme Christological or redemptive climax.
 *  6. PERSONAL RELEVANCE: Walk with Jesus (Why you need to know this, What it does for you, Relationship with Jesus).
 */

import { BOOK_REGISTRY } from './bookRegistry';
import { parseRef, normalizeBookName } from './refParser';

export interface HistoricalContextBrief {
  sourceAuthor: string;
  sourceDate: string;
  sourceSetting: string;
  fulfillmentAuthor: string;
  fulfillmentDate: string;
  fulfillmentSetting: string;
  redemptiveBridge: string;
  scholarshipNotes?: string;
}

export interface ConnectionInterrogation {
  id: string;
  anchorRef: string;
  targetRef: string;
  what: string;
  when: string;
  how: string;
  why: string;
  ultimatePoint: string;
  personalRelevance: string;
  historicalContext?: HistoricalContextBrief;
}

/**
 * Comprehensive dictionary mapping canonical Bible books to their traditional/scholarly authors.
 */
export const BOOK_AUTHORS: Record<string, string> = {
  Genesis: 'Moses (c. 1446–1406 BC, Sinai Wilderness)',
  Exodus: 'Moses (c. 1446–1406 BC, Sinai Wilderness)',
  Leviticus: 'Moses (c. 1446–1406 BC, Mount Sinai)',
  Numbers: 'Moses (c. 1446–1406 BC, Wilderness Journey)',
  Deuteronomy: 'Moses (c. 1406 BC, Plains of Moab)',
  Joshua: 'Joshua / Canonical Scribes (c. 1400–1375 BC)',
  Judges: 'Prophet Samuel (c. 1050–1000 BC)',
  Ruth: 'Prophet Samuel (c. 1050–1000 BC)',
  '1 Samuel': 'Prophet Samuel / Nathan / Gad (c. 1000–930 BC)',
  '2 Samuel': 'Prophet Nathan / Gad (c. 970–930 BC)',
  '1 Kings': 'Prophet Jeremiah / Exilic Scribes (c. 560–550 BC)',
  '2 Kings': 'Prophet Jeremiah / Exilic Scribes (c. 560–550 BC)',
  '1 Chronicles': 'Ezra the Scribe (c. 450–400 BC)',
  '2 Chronicles': 'Ezra the Scribe (c. 450–400 BC)',
  Ezra: 'Ezra the Scribe (c. 450–400 BC, Jerusalem)',
  Nehemiah: 'Nehemiah / Ezra (c. 430–420 BC, Jerusalem)',
  Esther: 'Mordecai / Persian-Jewish Scribes (c. 470–450 BC)',
  Job: 'Moses / Patriarchal Sages (c. 2000–1400 BC)',
  Psalms: 'King David, Asaph, Sons of Korah, Moses (c. 1440–430 BC)',
  Proverbs: 'King Solomon and Sages (c. 970–700 BC)',
  Ecclesiastes: 'King Solomon (the Preacher) (c. 935 BC)',
  'Song of Solomon': 'King Solomon (c. 965 BC)',
  Isaiah: 'Prophet Isaiah (c. 740–680 BC, Jerusalem)',
  Jeremiah: 'Prophet Jeremiah (c. 627–580 BC, Jerusalem/Egypt)',
  Lamentations: 'Prophet Jeremiah (c. 586 BC, Jerusalem)',
  Ezekiel: 'Prophet Ezekiel (c. 593–571 BC, Babylon)',
  Daniel: 'Prophet Daniel (c. 605–530 BC, Babylon/Susa)',
  Hosea: 'Prophet Hosea (c. 750–715 BC, Northern Israel)',
  Joel: 'Prophet Joel (c. 835–800 BC, Judah)',
  Amos: 'Prophet Amos (c. 760–750 BC, Tekoa/Bethel)',
  Obadiah: 'Prophet Obadiah (c. 845 or 586 BC, Judah)',
  Jonah: 'Prophet Jonah (c. 760 BC, Gath-hepher/Nineveh)',
  Micah: 'Prophet Micah (c. 735–700 BC, Moresheth-gath)',
  Nahum: 'Prophet Nahum (c. 663–612 BC, Judah)',
  Habakkuk: 'Prophet Habakkuk (c. 608–605 BC, Jerusalem)',
  Zephaniah: 'Prophet Zephaniah (c. 630–625 BC, Jerusalem)',
  Haggai: 'Prophet Haggai (c. 520 BC, Jerusalem)',
  Zechariah: 'Prophet Zechariah (c. 520–480 BC, Jerusalem)',
  Malachi: 'Prophet Malachi (c. 430–400 BC, Jerusalem)',
  Matthew: 'Apostle Matthew (c. AD 60–68, Judea/Antioch)',
  Mark: 'John Mark (c. AD 55–65, Rome)',
  Luke: 'Luke the Evangelist (c. AD 60–62, Caesarea/Rome)',
  John: 'Apostle John (c. AD 85–95, Ephesus)',
  Acts: 'Luke the Evangelist (c. AD 62–64, Rome)',
  Romans: 'Apostle Paul (c. AD 57, Corinth)',
  '1 Corinthians': 'Apostle Paul (c. AD 55, Ephesus)',
  '2 Corinthians': 'Apostle Paul (c. AD 56, Macedonia)',
  Galatians: 'Apostle Paul (c. AD 48–49, Antioch)',
  Ephesians: 'Apostle Paul (c. AD 60–62, Rome)',
  Philippians: 'Apostle Paul (c. AD 61–62, Rome)',
  Colossians: 'Apostle Paul (c. AD 60–62, Rome)',
  '1 Thessalonians': 'Apostle Paul (c. AD 50–51, Corinth)',
  '2 Thessalonians': 'Apostle Paul (c. AD 51–52, Corinth)',
  '1 Timothy': 'Apostle Paul (c. AD 62–64, Macedonia)',
  '2 Timothy': 'Apostle Paul (c. AD 66–67, Rome)',
  Titus: 'Apostle Paul (c. AD 63–65, Macedonia/Nicopolis)',
  Philemon: 'Apostle Paul (c. AD 60–62, Rome)',
  Hebrews: 'Author of Hebrews (Apostolic circle / Paul / Apollos, c. AD 64–68)',
  James: 'James, Brother of the Lord (c. AD 45–48, Jerusalem)',
  '1 Peter': 'Apostle Peter (c. AD 64–65, Rome)',
  '2 Peter': 'Apostle Peter (c. AD 66–67, Rome)',
  '1 John': 'Apostle John (c. AD 85–95, Ephesus)',
  '2 John': 'Apostle John (c. AD 85–95, Ephesus)',
  '3 John': 'Apostle John (c. AD 85–95, Ephesus)',
  Jude: 'Jude, Brother of James (c. AD 65–70, Judea)',
  Revelation: 'Apostle John (c. AD 95–96, Patmos)',
};

/**
 * Extract canonical book name from a reference string (e.g. "1 Corinthians 15:3" -> "1 Corinthians").
 */
export function extractCanonicalBook(ref: string): string {
  if (!ref) return '';
  const firstSegment = ref.split(/[/;,]/)[0].trim();
  const parsed = parseRef(firstSegment);
  if (parsed?.book) return parsed.book;
  const withoutDigits = firstSegment.replace(/\s*\d+.*$/, '').trim();
  const normalized = normalizeBookName(withoutDigits);
  if (normalized) return normalized;
  return ref.trim();
}

/**
 * Look up book index in the Protestant canonical 66-book registry (0..38 OT, 39..65 NT).
 */
export function getBookIndex(bookName: string): number {
  const norm = normalizeBookName(bookName).toLowerCase();
  return BOOK_REGISTRY.findIndex(
    b => b.name.toLowerCase() === norm || b.slug.toLowerCase() === norm
  );
}

/**
 * Determine if a reference belongs canonically to the New Testament.
 */
export function isNewTestament(ref: string): boolean {
  const book = extractCanonicalBook(ref);
  const idx = getBookIndex(book);
  if (idx >= 39 && idx <= 65) return true;
  if (idx >= 0 && idx <= 38) return false;
  return !!ref.match(/^(?:(?:1|2|3|I|II|III)\s+)?(?:Mat|Mar|Luk|Joh|Act|Rom|Cor|Gal|Eph|Phi|Col|The|Tim|Tit|Phm|Heb|Jam|Pet|Jn|Jud|Rev)/i);
}

/**
 * Determine if a reference belongs canonically to the Old Testament.
 */
export function isOldTestament(ref: string): boolean {
  const book = extractCanonicalBook(ref);
  const idx = getBookIndex(book);
  if (idx >= 0 && idx <= 38) return true;
  if (idx >= 39 && idx <= 65) return false;
  return !isNewTestament(ref);
}

/**
 * Canonical author lookup resolving full book names without producing "Author of 1" or "Author of 2".
 */
export function getAuthorForRef(ref: string): string {
  const book = extractCanonicalBook(ref);
  if (BOOK_AUTHORS[book]) return BOOK_AUTHORS[book];
  if (book) return `Author of ${book}`;
  return 'Biblical Author';
}

/**
 * Curated registry of scholarly biblical interrogations for foundational connections across all biblical eras.
 * Keys are normalized as `${anchorId}_${normalizedTargetRef}` or `${anchorId}`.
 */
export const CURATED_INTERROGATIONS: Record<string, ConnectionInterrogation> = {
  // 1. PRIMEVAL / CREATION: Genesis 1:1 -> John 1:1-3
  'gen-1-1_John 1:1-3': {
    id: 'gen-1-1_John 1:1-3',
    anchorRef: 'Genesis 1:1',
    targetRef: 'John 1:1-3',
    what: 'The deliberate verbal, syntactic, and theological parallelism between the Hebrew opening (בְּרֵאשִׁית, Bereshit, "In the beginning") and the Johannine prologue (Ἐν ἀρχῇ, En archē, "In the beginning"). In Genesis 1:1, creation is summoned into existence by the sovereign spoken command of God ("And God said..."); in John 1:1-3, that creative Speech is identified not merely as a temporary utterance or philosophical abstraction, but as an eternal, distinct Divine Person—the Word (ὁ Λόγος, ho Logos) who was in communion with God and was Himself fully God.',
    when: 'Source Horizon: Primeval origin of the created space-time continuum, historically recorded under divine inspiration by Moses c. 1446–1406 BC during the wilderness journey from Egypt to Canaan. Target Horizon: The Apostle John writing in Ephesus c. AD 85–95 near the conclusion of the apostolic era, penetrating behind the historical moment of Genesis 1:1 into the timeless eternity where the Word already possessed continuous existence (ἦν, ēn) before any created thing came into being (ἐγένε토, egeneto).',
    how: 'Apostolic Christological interrogation of the Hebrew creation account. John employs the Greek preposition διά with the genitive (δι\' αὐτοῦ, di\' autou — "through Him") to establish Jesus Christ as the active, mediate Divine Agent through whom the entire created universe was brought into being from nothing (creatio ex nihilo). John further reinforces this through an absolute universal negative (χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν, chōris autou egeneto oude hen — "apart from Him not even one thing came into existence that has come into existence"), grammatically and syntactically excluding the Son from the realm of created things.',
    why: 'To establish the absolute, uncreated deity and cosmic supremacy of Jesus Christ before recounting His incarnation ("And the Word was made flesh", John 1:14). If Jesus were a created being or intermediate angelic agent, His sacrifice would lack infinite redemptive value. Only the Divine Agent who originally designed and authored the first creation possesses the divine prerogative, authority, and creative power to enact the New Creation (2 Cor 5:17) and redeem fallen humanity.',
    ultimatePoint: 'Jesus Christ was the active, personal Creative Agent in creating the world: all things were made through Him, and without Him was not anything made that was made. The God who spoke the universe into being at Genesis 1:1 is the very Lord who entered human history to redeem what He had formed.',
    personalRelevance: 'Why you need to know this: You are not the product of cosmic accident, blind chance, or meaningless biology; your Redeemer is the very One who summoned space, time, and matter into existence. What it does for you: It imparts unshakeable peace and confidence in Christ\'s ability to govern your life, calm your fears, and speak light and order into whatever chaos or brokenness you face today. Relationship with Jesus: Knowing Jesus as your uncreated Creator means you can yield absolute, joyful lordship to Him, resting in the certainty that the nail-pierced hands that saved you are the very hands that hold the universe together.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, Sinai Peninsula / Wilderness)',
      sourceDate: 'c. 1446–1406 BC',
      sourceSetting: 'Israel had recently departed Egyptian bondage, surrounded by Ancient Near Eastern polytheistic cosmologies (e.g., Memphite theology where Ptah creates through thought and tongue, Enuma Elish where creation arises from violent conflict between slain gods). Moses writes the pure, monotheistic, historical record of one transcendent, sovereign God creating a good and orderly cosmos without rival or struggle.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95, Ephesus, Asia Minor)',
      fulfillmentDate: 'c. AD 85–95',
      fulfillmentSetting: 'Ephesus in the late 1st-century Roman Empire during the reign of Domitian, facing early Gnostic heresies (such as Cerinthianism, which claimed that the physical world was made by a lesser, imperfect demiurge distinct from the supreme God) and Greco-Roman Stoic philosophies (which viewed the Logos as an impersonal cosmic principle of rationality). John asserts that the true Logos is a personal, holy Creator-God who became physically incarnate.',
      redemptiveBridge: 'Across 1,500 years of biblical history, the "Word of the Lord" that revealed God\'s will to the patriarchs, governed the tabernacle, and was proclaimed by the prophets culminates in the incarnation of Jesus Christ, uniting the doctrine of Creation with the doctrine of Redemption.',
      scholarshipNotes: 'Textual scholarship notes the sharp distinction between the imperfect verb ἦν (was — indicating continuous, eternal existence without beginning) and the aorist verb ἐγένετο (became/came into being — indicating temporal origin). The Word eternally was; creation came into being through Him.',
    },
  },

  // Genesis 1:1 -> Hebrews 11:3
  'gen-1-1_Hebrews 11:3': {
    id: 'gen-1-1_Hebrews 11:3',
    anchorRef: 'Genesis 1:1',
    targetRef: 'Hebrews 11:3',
    what: 'The canonical formulation of creatio ex nihilo (creation out of nothing). Genesis 1:1 announces that God created the heavens and the earth; Hebrews 11:3 explicitly unveils the underlying mechanism: the worlds (τοὺς αἰῶνας, tous aiōnas — the space-time cosmos and all its ages) were framed by the spoken word of God (ῥήματι Θεοῦ, rhēmati Theou), so that visible entities were not constructed out of pre-existing material components.',
    when: 'Source: Primeval creation recorded by Moses c. 1446–1406 BC. Target: Written to 1st-century Jewish-Christian believers c. AD 64–68 facing Roman persecution, confiscation of property, and social pressure to abandon the gospel before the fall of Jerusalem in AD 70.',
    how: 'Theological interrogation of the Hebrew verb בָּרָא (baraʾ), which throughout the Hebrew Bible has strictly God as its subject and never cites raw materials. Hebrews translates this into Greek philosophical precision (μὴ ἐκ φαινομένων, mē ek phainomenōn — "not from things which appear"), proving that the visible order derives entirely from divine command rather than eternal matter.',
    why: 'To demonstrate that true biblical faith (πίστις, pistis) is grounded in historical, cosmic reality. If God brought everything from nothing simply by His spoken word, then His promises of an unshakeable heavenly kingdom, a superior High Priest, and an eternal city are utterly steadfast even when earthly circumstances appear desolate.',
    ultimatePoint: 'The visible universe did not evolve from eternal or self-existing matter, but was framed into harmonious order out of non-existence by the sovereign Word of God; authentic biblical faith begins with acknowledging God as the transcendent Originator and Governor of all reality.',
    personalRelevance: 'Why you need to know this: When your personal resources run dry or circumstances seem completely impossible, your God is the One who creates out of nothing (creatio ex nihilo). What it does for you: It anchors your daily trust in God\'s spoken promise rather than visible human supports, delivering your heart from panic when earthly solutions vanish. Relationship with Jesus: Jesus possesses sovereign creative authority over your heart and destiny; walking with Him means trusting His Word to frame your future even when your natural eyes see nothing but empty hands.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, Sinai Wilderness)',
      sourceDate: 'c. 1446–1406 BC',
      sourceSetting: 'Ancient Near Eastern backdrop where pagan nations worshipped natural elements (sun, stars, river Nile) as gods. Moses refutes nature worship by showing that the entire cosmos was summoned into existence by the transcendent God of the covenant.',
      fulfillmentAuthor: 'Author of Hebrews (c. AD 64–68, Italy/Rome)',
      fulfillmentDate: 'c. AD 64–68',
      fulfillmentSetting: 'Hebrew believers in the Roman capital and Judea under intense pressure from the Roman state and non-Christian Jewish authorities. The epistle calls them to look beyond the visible, vanishing earthly temple to the invisible, eternal heavenly reality.',
      redemptiveBridge: 'From the initial framing of the physical cosmos in Genesis 1 to the ultimate consummation in Hebrews 12:28 ("a kingdom which cannot be moved"), God\'s Word remains the immutable foundation of all history.',
      scholarshipNotes: 'The Greek verb κατηρτίσθαι (katērtisthai, perfect passive infinitive of katartizō) signifies to mend, equip, adjust, or put into proper working order, emphasizing the rational, orderly design of the universe by God.',
    },
  },

  // Genesis 1:3 -> John 1:1-5
  'gen-1-3_John 1:1-5': {
    id: 'gen-1-3_John 1:1-5',
    anchorRef: 'Genesis 1:3',
    targetRef: 'John 1:1-5',
    what: 'The connection between the primeval illumination of the physical universe ("Let there be light", Gen 1:3) and the spiritual, eternal Light of life embodied in the Logos ("In Him was life; and the life was the light of men", John 1:4).',
    when: 'Source: Day 1 of Creation week (c. Primeval). Target: John\'s Gospel prologue written late 1st century AD.',
    how: 'Typological and theological fulfillment. Physical light summoned by the Word in Genesis serves as the cosmic archetype and sign of the spiritual light that dispels moral, spiritual, and demonic darkness in Jesus Christ.',
    why: 'To demonstrate that just as the physical world lay in darkness until God spoke light into it, so humanity lies in spiritual blindness and death until enlightened by the incoming of the Son of God.',
    ultimatePoint: 'Jesus Christ is the true and eternal Light of the world who shines in spiritual darkness, overcoming death and sin with the very creative power that first banished darkness from the cosmos.',
    personalRelevance: 'Why you need to know this: In seasons of deep confusion, moral failure, or spiritual depression, no human philosophy or positive thinking can dispel the darkness of the human soul; only the incoming of the living Light can. What it does for you: It banishes guilt and despair, assuring you that no shadow of sin, grief, or demonic oppression can ever overpower the life Christ imparts to you. Relationship with Jesus: Jesus is your personal Light who lives within you; walking with Him means you never have to stumble in darkness, for His presence illuminates your path and guides your daily decisions.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 1446–1406 BC',
      sourceSetting: 'Egyptian sun-god worship (Ra/Re) held supreme prestige. Genesis 1:3 demonstrates that light existed three days before the sun was formed on Day 4, establishing that God Himself is the ultimate Source of light.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95, Ephesus)',
      fulfillmentDate: 'c. AD 85–95',
      fulfillmentSetting: 'Greco-Roman world seeking illumination through philosophy, mystery cults, and imperial claims. John reveals that true illumination is personal and resides solely in the incarnate Christ.',
      redemptiveBridge: 'From the physical illumination of the earth to the pillar of fire in the Exodus, to the prophetic promises of the Messiah as a "Light to the Gentiles" (Isa 42:6), culminating in Christ saying "I am the light of the world" (John 8:12).',
    },
  },

  // Genesis 1:3 -> 2 Corinthians 4:6
  'gen-1-3_2 Corinthians 4:6': {
    id: 'gen-1-3_2 Corinthians 4:6',
    anchorRef: 'Genesis 1:3',
    targetRef: '2 Corinthians 4:6',
    what: 'A direct apostolic quotation and theological application of Genesis 1:3: "For God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ."',
    when: 'Source: Day 1 of Creation (Moses, c. 1446–1406 BC). Target: Paul writing to the church at Corinth c. AD 55–56 from Macedonia.',
    how: 'Redemptive-historical analogy and apostolic revelation. Paul correlates the sovereign, monergistic fiat of Genesis 1:3 with the sovereign regeneration of the human soul through the preaching of the gospel.',
    why: 'To prove that conversion and spiritual illumination require nothing less than the original creative power of God. No human eloquence or legalistic effort can banish the darkness of Satanic blindness; it requires the same Creator who commanded physical light to shine.',
    ultimatePoint: 'The sovereign divine power that summoned physical light out of the primeval abyss in Genesis 1:3 is identical to the divine power that illuminates darkened human hearts with saving knowledge in the face of Jesus Christ.',
    personalRelevance: 'Why you need to know this: Your salvation and spiritual sight do not depend on your intellectual brilliance or emotional willpower, but on the sovereign creative command of God shining into your heart. What it does for you: It brings absolute security and relief from religious striving, knowing that the same God who commanded light to shine out of the primeval abyss has personally awakened your soul to His love. Relationship with Jesus: In Jesus Christ, you behold the glory of God smiling upon you with mercy and intimate fellowship, transforming your character from glory to glory.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, Sinai Wilderness)',
      sourceDate: 'c. 1446–1406 BC',
      sourceSetting: 'Ancient Near Eastern darkness over the face of the deep transformed into life-sustaining light.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 55–56, Macedonia/Philippi)',
      fulfillmentDate: 'c. AD 55–56',
      fulfillmentSetting: 'Corinth was a bustling, hedonistic commercial hub filled with rhetorical showmanship and philosophical skepticism. False teachers criticized Paul\'s lack of worldly polish. Paul responds that true gospel ministry does not rely on worldly rhetoric, but on God\'s creative command.',
      redemptiveBridge: 'Physical creation serves throughout scripture as the pattern for the new creation in Christ Jesus.',
      scholarshipNotes: 'Paul echoes the Septuagint wording of Genesis 1:3 (ὁ εἰπών, "who said") emphasizing God\'s spoken decree.',
    },
  },

  // Genesis 1:26 -> Colossians 1:16-17
  'gen-1-26_Colossians 1:16-17': {
    id: 'gen-1-26_Colossians 1:16-17',
    anchorRef: 'Genesis 1:26',
    targetRef: 'Colossians 1:16-17',
    what: 'The intra-Trinitarian Divine Council of Genesis 1:26 ("Let us make man in our image, after our likeness") connected to the pre-eminence of Christ in Colossians 1:16-17: "For by him were all things created, that are in heaven, and that are in earth... all things were created by him, and for him: and he is before all things, and by him all things consist."',
    when: 'Source: Day 6 of Creation week (c. Primeval). Target: Paul writing from Roman imprisonment c. AD 60–62 to the Lycus Valley church in Colossae.',
    how: 'Christological revelation. The plural divine dialogue in Genesis 1:26 reflects the eternal communion of the Godhead, where the Son is the Image of the invisible God, the Architect, and the ultimate Destination of the created universe.',
    why: 'To dismantle the proto-Gnostic Colossian heresy, which sought to demote Christ into one among many celestial emanations or angelic intermediaries, by affirming that Christ is the uncreated Creator and Sustainer of every principality and power.',
    ultimatePoint: 'Jesus Christ is the eternal Image of the invisible God, the Source, Sphere, and Goal of all creation; everything in heaven and on earth was created in Him, through Him, and for Him, and in Him all creation holds together.',
    personalRelevance: 'Why you need to know this: Your true identity, dignity, and purpose are not defined by career, social status, or human approval, but by being created in Christ, through Him, and for Him. What it does for you: It resolves your deepest crisis of meaning and relieves anxiety about the future, knowing that the Lord who sustains the cosmos is actively holding your personal life together. Relationship with Jesus: You belong entirely to Jesus as His cherished inheritance; intimacy with Him is where you discover who you were truly designed to be, freed from the exhaustion of living for self.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, Sinai Wilderness)',
      sourceDate: 'c. 1446–1406 BC',
      sourceSetting: 'Genesis establishes humanity as bearing the direct image of God, refuting Mesopotamian myths where humans were created as slaves to feed the gods.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 60–62, Rome)',
      fulfillmentDate: 'c. AD 60–62',
      fulfillmentSetting: 'Colossae in Phrygia was steeped in religious syncretism, combining Jewish mysticism, angel worship, and asceticism. Paul writes to anchor the believers exclusively in the supremacy of Christ.',
      redemptiveBridge: 'The Image of God given to Adam, corrupted by the Fall, is restored and fulfilled in Jesus Christ, the true and unblemished Image.',
      scholarshipNotes: 'Colossians 1:16 uses three Greek prepositions to describe Christ\'s relationship to creation: ἐν αὐτῷ (in Him — sphere), δι\' αὐτοῦ (through Him — agent), and εἰς αὐτόν (unto/for Him — teleological goal).',
    },
  },

  // Genesis 3:15 -> Galatians 4:4-5
  'gen-3-15_Galatians 4:4-5': {
    id: 'gen-3-15_Galatians 4:4-5',
    anchorRef: 'Genesis 3:15',
    targetRef: 'Galatians 4:4-5',
    what: 'The Protoevangelium (the first announcement of the Gospel). Genesis 3:15 promises that the Seed of the woman will crush the serpent\'s head; Galatians 4:4 records the historical fulfillment: "When the fulness of the time was come, God sent forth his Son, made of a woman, made under the law, to redeem them that were under the law."',
    when: 'Source: The Garden of Eden immediately following the Fall (c. Primeval). Target: Paul writing to the churches of Galatia c. AD 48–49.',
    how: 'Direct covenantal and prophetic fulfillment. The unique biblical phrase "Seed of the woman" points forward through Hebrew typology to the virginal conception and human incarnation of the Son of God.',
    why: 'To reveal that God\'s sovereign plan of redemption was neither an afterthought nor an emergency improvisation; the defeat of Satan and the redemption of humanity through Christ was established before human history progressed beyond Eden.',
    ultimatePoint: 'Jesus Christ is the prophesied Seed of the woman who in the fullness of time entered human history to legally redeem fallen humanity and destroy the works of the devil.',
    personalRelevance: 'Why you need to know this: The spiritual warfare you experience against temptation, shame, and the enemy\'s accusations is already decisively won at the cross. What it does for you: It gives you triumphant courage in the midst of trials, knowing that while the ancient serpent may strike at your heel, his power and dominion were crushed beneath Christ\'s feet. Relationship with Jesus: Jesus stepped into human history as the Seed of the woman specifically to redeem you from bondage and adopt you into the Father\'s family as a beloved son or daughter.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 1446–1406 BC',
      sourceSetting: 'The aftermath of the Fall in Eden. God addresses the serpent in judgment and gives humanity the first glimmer of redemptive hope.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 48–49, Antioch)',
      fulfillmentDate: 'c. AD 48–49',
      fulfillmentSetting: 'Galatian churches targeted by Judaizers insisting on ritual circumcision. Paul demonstrates that redemption comes through the promised Seed who fulfills the law, not through legalistic rituals.',
      redemptiveBridge: 'The scarlet thread of the promised Seed runs through Seth, Abraham, Judah, David, and culminates in Jesus of Nazareth.',
    },
  },

  // 2. PATRIARCHAL ERA: Genesis 12:3 -> Galatians 3:8,16
  'gen-12-3_Galatians 3:8,16': {
    id: 'gen-12-3_Galatians 3:8,16',
    anchorRef: 'Genesis 12:3',
    targetRef: 'Galatians 3:8, 16',
    what: 'The foundational Abrahamic Covenant promise ("in thee shall all families of the earth be blessed") connected to Paul\'s apostolic exposition in Galatians 3:8,16: "And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham... Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ."',
    when: 'Source Horizon: Middle Bronze Age (c. 2091 BC), God calling Abram from Ur and Haran into Canaan. Target Horizon: Apostle Paul writing to the churches of Galatia c. AD 48–49 in response to the Judaizing controversy.',
    how: 'Grammatical and Christological exegesis. Paul interrogates the grammatical number of the Hebrew collective noun זֶרַע (zeraʿ — "seed/offspring") and the Greek σπέρμα (sperma). While capable of collective reference, Paul reveals that its ultimate covenantal intention points to a single representative Seed: Jesus Christ, through whom the blessing of justification is extended universally to the Gentiles.',
    why: 'To prove that the gospel of justification by grace through faith is not an apostolic innovation or deviation from Moses, but the predetermined fulfillment of the unconditional Abrahamic Covenant, which was ratified 430 years before the Sinai Law and cannot be annulled by legalistic works.',
    ultimatePoint: 'Jesus Christ is the singular promised Seed of Abraham in whom all nations of the earth are blessed with the gift of righteousness through faith, fulfilling the covenant promise given two millennia prior.',
    personalRelevance: 'Why you need to know this: God\'s covenant blessing and unconditional favor reach you through faith alone, not through human pedigree, religious performance, or flawless self-effort. What it does for you: It eliminates spiritual performance anxiety and imposter syndrome, assuring you that you are a full heir to every promise of God in Christ Jesus. Relationship with Jesus: In Christ, you are counted completely righteous and dearly loved by the Father, walking day by day in the ancient covenant of grace as Abraham\'s spiritual offspring.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, recording patriarchal history)',
      sourceDate: 'c. 2091 BC',
      sourceSetting: 'Abram called out of pagan Mesopotamian idolatry (Ur of the Chaldees) into nomad wandering in Canaan, receiving the divine pledge of land, seed, and global blessing.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 48–49, Antioch)',
      fulfillmentDate: 'c. AD 48–49',
      fulfillmentSetting: 'Galatian churches targeted by legalistic agitators demanding circumcision for Gentile converts. Paul argues that Abraham was justified by faith centuries before circumcision or the law were given.',
      redemptiveBridge: 'From Abraham\'s altar in Canaan to Calvary and the Pentecostal influx of Gentile believers, the covenant of grace remains immutable.',
      scholarshipNotes: 'Paul\'s use of the singular "seed" (τῷ σπέρματί σου) highlights the messianic concentration of the covenant line into Christ as the true Israel.',
    },
  },
  'gen-12-3_Gal 3:8,16': {
    id: 'gen-12-3_Galatians 3:8,16',
    anchorRef: 'Genesis 12:3',
    targetRef: 'Galatians 3:8, 16',
    what: 'The foundational Abrahamic Covenant promise ("in thee shall all families of the earth be blessed") connected to Paul\'s apostolic exposition in Galatians 3:8,16: "And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham... Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ."',
    when: 'Source Horizon: Middle Bronze Age (c. 2091 BC), God calling Abram from Ur and Haran into Canaan. Target Horizon: Apostle Paul writing to the churches of Galatia c. AD 48–49 in response to the Judaizing controversy.',
    how: 'Grammatical and Christological exegesis. Paul interrogates the grammatical number of the Hebrew collective noun זֶרַע (zeraʿ — "seed/offspring") and the Greek σπέρμα (sperma). While capable of collective reference, Paul reveals that its ultimate covenantal intention points to a single representative Seed: Jesus Christ, through whom the blessing of justification is extended universally to the Gentiles.',
    why: 'To prove that the gospel of justification by grace through faith is not an apostolic innovation or deviation from Moses, but the predetermined fulfillment of the unconditional Abrahamic Covenant, which was ratified 430 years before the Sinai Law and cannot be annulled by legalistic works.',
    ultimatePoint: 'Jesus Christ is the singular promised Seed of Abraham in whom all nations of the earth are blessed with the gift of righteousness through faith, fulfilling the covenant promise given two millennia prior.',
    personalRelevance: 'Why you need to know this: God\'s covenant blessing and unconditional favor reach you through faith alone, not through human pedigree, religious performance, or flawless self-effort. What it does for you: It eliminates spiritual performance anxiety and imposter syndrome, assuring you that you are a full heir to every promise of God in Christ Jesus. Relationship with Jesus: In Christ, you are counted completely righteous and dearly loved by the Father, walking day by day in the ancient covenant of grace as Abraham\'s spiritual offspring.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, recording patriarchal history)',
      sourceDate: 'c. 2091 BC',
      sourceSetting: 'Abram called out of pagan Mesopotamian idolatry into nomad wandering in Canaan, receiving the divine pledge of land, seed, and global blessing.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 48–49, Antioch)',
      fulfillmentDate: 'c. AD 48–49',
      fulfillmentSetting: 'Galatian churches targeted by legalistic agitators demanding circumcision for Gentile converts.',
      redemptiveBridge: 'From Abraham\'s altar in Canaan to Calvary, the covenant of grace remains immutable.',
    },
  },

  // Genesis 22:2 -> Hebrews 11:17 (Abraham offering Isaac / Moriah ➔ Golgotha)
  'gen-22-2_Hebrews 11:17': {
    id: 'gen-22-2_Hebrews 11:17',
    anchorRef: 'Genesis 22:2',
    targetRef: 'Hebrews 11:17',
    what: 'The Akedah (binding of Isaac): God commanded Abraham, "Take now thy son, thine only son Isaac, whom thou lovest, and get thee into the land of Moriah; and offer him there for a burnt offering" (Gen 22:2), interpreted in Hebrews 11:17: "By faith Abraham, when he was tried, offered up Isaac: and he that had received the promises offered up his only begotten son," pointing directly to the Father giving His only begotten Son at Calvary (John 3:16; Rom 8:32).',
    when: 'Source Horizon: Patriarchal Era c. 2050 BC upon Mount Moriah in Canaan. Target Horizon: Apostolic Era c. AD 64–68, writing of Christ\'s once-for-all sacrifice on Calvary.',
    how: 'Typological substitution and prophetic enactment. Isaac, the beloved "only son" (Hebrew: יָחִיד, yachid; LXX: ἀγαπητός / μονογενής), carries the wood up Mount Moriah and submits to his father. God stays the knife and provides a ram caught in a thicket, prefiguring the supreme substitution where the Father did not spare His own Son.',
    why: 'To demonstrate the staggering cost of redemption and the heart of the Father. Salvation is not an impersonal legal verdict, but an act of infinite self-giving love where God personally provides the sacrifice that satisfies divine justice.',
    ultimatePoint: 'Jesus Christ is the true only begotten Son provided by God upon Mount Moriah—the Lamb of God who bore the wood of the cross to Golgotha as the substitutionary sacrifice so that condemned sinners might live.',
    personalRelevance: 'Why you need to know this: You need to know that God\'s love for you was proven at infinite personal cost; when the Father asked Abraham for his only son on Moriah, He was pulling back the curtain on what He Himself would freely do for you at Calvary. What it does for you: It permanently settles whether God is for you—as Romans 8:32 promises, if He did not spare His own Son for you, He will never withhold the grace, strength, and provision you need today. Relationship with Jesus: Jesus is the obedient Son who climbed the hill of sacrifice carrying the wood of your cross, submitting willingly out of love for you; you can safely entrust your dearest treasures to Him without fear.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, recording patriarchal history)',
      sourceDate: 'c. 2050 BC',
      sourceSetting: 'Abraham tested on the ridges of Mount Moriah, displaying radical faith that God was able to raise Isaac even from the dead.',
      fulfillmentAuthor: 'Author of Hebrews (c. AD 64–68, Rome/Italy)',
      fulfillmentDate: 'c. AD 64–68',
      fulfillmentSetting: 'Jewish believers facing persecution, encouraged to hold fast to Christ whose sacrifice infinitely surpasses all Old Testament shadows.',
      redemptiveBridge: 'Mount Moriah links Abraham\'s altar to Solomon\'s temple mount (2 Chron 3:1) and culminates in Golgotha outside the gates of Jerusalem.',
      scholarshipNotes: 'The Greek term μονογενής (monogenēs) in Hebrews 11:17 and John 3:16 renders the Hebrew יָחִיד (yachid), emphasizing the unique, beloved status of the sacrificed son.',
    },
  },
  'gen-22-2_John 3:16': {
    id: 'gen-22-2_John 3:16',
    anchorRef: 'Genesis 22:2',
    targetRef: 'John 3:16',
    what: 'The offering of the beloved only son on Moriah ("Take now thy son, thine only son Isaac, whom thou lovest", Gen 22:2) finding verbal and thematic fulfillment in the gift of the Son of God: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life" (John 3:16).',
    when: 'Source Horizon: Patriarchal Era c. 2050 BC on Mount Moriah. Target Horizon: Late 1st Century AD (c. AD 85–95), John recording Christ\'s words in Jerusalem.',
    how: 'Typological and theological culmination. Abraham\'s willingness to surrender Isaac is the prophetic shadow of the Father\'s cosmic love in giving Jesus Christ for the salvation of the world.',
    why: 'To reveal that the cross of Christ originated in the eternal love and grace of the Father, not merely in the wrath of God.',
    ultimatePoint: 'Jesus Christ is the only begotten Son given by the Father on Calvary to secure everlasting life for all who believe.',
    personalRelevance: 'Why you need to know this: You need to know that God\'s love for you was proven at infinite personal cost; when the Father asked Abraham for his only son on Moriah, He was pulling back the curtain on what He Himself would freely do for you at Calvary. What it does for you: It permanently settles whether God is for you—as Romans 8:32 promises, if He did not spare His own Son for you, He will never withhold the grace, strength, and provision you need today. Relationship with Jesus: Jesus is the obedient Son who climbed the hill of sacrifice carrying the wood of your cross, submitting willingly out of love for you; you can safely entrust your dearest treasures to Him without fear.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 2050 BC',
      sourceSetting: 'Mount Moriah, Abraham called to offer Isaac.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95, Ephesus)',
      fulfillmentDate: 'c. AD 30 / AD 90',
      fulfillmentSetting: 'Jerusalem by night, Jesus unveiling the heart of the Father to Nicodemus.',
      redemptiveBridge: 'Moriah\'s mountain points across two millennia to Calvary where the Father gave His only begotten Son.',
    },
  },
  'gen-22-2_Romans 8:32': {
    id: 'gen-22-2_Romans 8:32',
    anchorRef: 'Genesis 22:2',
    targetRef: 'Romans 8:32',
    what: 'The covenant pledge of Genesis 22:12 ("thou hast not withheld thy son, thine only son from me") echoed verbatim by Paul in Romans 8:32: "He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?"',
    when: 'Source Horizon: Patriarchal Era c. 2050 BC. Target Horizon: AD 57, Paul writing to the church in Rome.',
    how: 'Apostolic typological application of the Akedah formula to God the Father\'s sacrifice of Jesus.',
    why: 'To provide absolute, unshakable assurance of eternal security and divine care for the believer.',
    ultimatePoint: 'God spared not His own Son but delivered Him up for us all, proving that His redeeming grace will never fail.',
    personalRelevance: 'Why you need to know this: You need to know that God\'s love for you was proven at infinite personal cost; when the Father asked Abraham for his only son on Moriah, He was pulling back the curtain on what He Himself would freely do for you at Calvary. What it does for you: It permanently settles whether God is for you—as Romans 8:32 promises, if He did not spare His own Son for you, He will never withhold the grace, strength, and provision you need today. Relationship with Jesus: Jesus is the obedient Son who climbed the hill of sacrifice carrying the wood of your cross, submitting willingly out of love for you; you can safely entrust your dearest treasures to Him without fear.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 2050 BC',
      sourceSetting: 'Mount Moriah, Abraham proven faithful.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 57, Corinth)',
      fulfillmentDate: 'c. AD 57',
      fulfillmentSetting: 'Apostolic church laying out the golden chain of redemption.',
      redemptiveBridge: 'From Abraham not withholding Isaac to God not withholding His Son.',
    },
  },

  // Genesis 22:8 -> John 1:29
  'gen-22-8_John 1:29': {
    id: 'gen-22-8_John 1:29',
    anchorRef: 'Genesis 22:8',
    targetRef: 'John 1:29',
    what: 'Abraham\'s prophetic declaration on the ascent of Moriah ("My son, God will provide himself a lamb for a burnt offering", Gen 22:8) answered at the Jordan river by John the Baptist: "Behold the Lamb of God, which taketh away the sin of the world" (John 1:29).',
    when: 'Source Horizon: Patriarchal Era c. 2050 BC on the ascent of Moriah. Target Horizon: AD 27 at Bethabara beyond Jordan at the baptism of Jesus.',
    how: 'Prophetic fulfillment and sacrificial typology. On Moriah God provided a ram, not a lamb, reserving the true "Lamb of God" for the fullness of time when Christ appeared to bear the sin of the world.',
    why: 'To demonstrate that all animal sacrifices throughout redemptive history were prophetic promissory notes looking forward to the singular, unblemished Lamb provided by God Himself.',
    ultimatePoint: 'Jesus Christ is the Lamb of God provided by the Father on Mount Moriah, whose sacrifice takes away the sin of the entire world.',
    personalRelevance: 'Why you need to know this: You need to know that you could never provide an offering pure enough to wash away your guilt, but God Himself has provided the perfect Lamb on your behalf. What it does for you: It brings settled peace and removes religious striving; your forgiveness is not bought with your tears, but paid in full by the Lamb of God. Relationship with Jesus: Jesus is your gentle, spotless Lamb who took your guilt and judgment upon Himself; walking with Him means resting in His finished atonement every single day.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 2050 BC',
      sourceSetting: 'Mount Moriah, Isaac asking where the lamb for the burnt offering is.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95, recording John the Baptist)',
      fulfillmentDate: 'c. AD 27 / AD 33',
      fulfillmentSetting: 'The wilderness of Jordan, the herald pointing out the Messiah.',
      redemptiveBridge: 'Abraham\'s prophetic question on Moriah answered by the Baptist\'s declaration at the Jordan.',
    },
  },
  'gen-22-8_Romans 8:32': {
    id: 'gen-22-8_Romans 8:32',
    anchorRef: 'Genesis 22:8',
    targetRef: 'Romans 8:32',
    what: 'Abraham\'s prophetic declaration ("God will provide himself a lamb", Gen 22:8) fulfilled in the Father delivering up His own Son for us all (Rom 8:32).',
    when: 'Source Horizon: c. 2050 BC. Target Horizon: c. AD 57.',
    how: 'Typological and covenantal fulfillment.',
    why: 'To demonstrate God\'s unfailing provision of the ultimate sacrificial substitute.',
    ultimatePoint: 'God provided His own Son as the Lamb of sacrifice to ransom fallen humanity.',
    personalRelevance: 'Why you need to know this: You need to know that God\'s love for you was proven at infinite personal cost. What it does for you: It settles forever that God will provide all you need for life and godliness. Relationship with Jesus: Jesus is the provided Lamb in whom all your spiritual needs are met.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 2050 BC',
      sourceSetting: 'Mount Moriah.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 57)',
      fulfillmentDate: 'c. AD 57',
      fulfillmentSetting: 'Corinth / Rome.',
      redemptiveBridge: 'God\'s provision on Moriah culminates in Calvary.',
    },
  },
  'gen-22-8_1 Peter 1:19-20': {
    id: 'gen-22-8_1 Peter 1:19-20',
    anchorRef: 'Genesis 22:8',
    targetRef: '1 Peter 1:19-20',
    what: 'Abraham\'s prophetic declaration of God providing the sacrificial lamb connected to Peter\'s declaration of being redeemed "with the precious blood of Christ, as of a lamb without blemish and without spot: Who verily was foreordained before the foundation of the world" (1 Pet 1:19-20).',
    when: 'Source Horizon: c. 2050 BC. Target Horizon: c. AD 64.',
    how: 'Sacrificial typology and apostolic exposition.',
    why: 'To establish that the sacrifice of the Lamb was predetermined before the foundation of the world.',
    ultimatePoint: 'Jesus Christ is the foreordained, unblemished Lamb whose precious blood redeems us from vanity and sin.',
    personalRelevance: 'Why you need to know this: You were redeemed not with corruptible things like silver or gold, but with the precious blood of Christ. What it does for you: It gives you infinite worth in God\'s sight and delivers you from hollow, worldly pursuits. Relationship with Jesus: Jesus shed His precious blood for you as a spotless Lamb; walking with Him means cherishing the high price of your redemption.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 2050 BC',
      sourceSetting: 'Mount Moriah.',
      fulfillmentAuthor: 'Apostle Peter (c. AD 64, Rome)',
      fulfillmentDate: 'c. AD 64',
      fulfillmentSetting: 'Persecuted believers scattered in Asia Minor.',
      redemptiveBridge: 'The patriarchal lamb of provision fulfilled in the eternal redemption purchased by Christ.',
    },
  },

  // 3. EXODUS & WILDERNESS ERA: Exodus 12:46 -> John 19:36
  'exo-12-46_John 19:36': {
    id: 'exo-12-46_John 19:36',
    anchorRef: 'Exodus 12:46',
    targetRef: 'John 19:36',
    what: 'The ritual rubric of the Passover lamb instituted in Egypt ("neither shall ye break a bone thereof", Exo 12:46; Num 9:12) directly quoted and fulfilled at the crucifixion in John 19:36: "For these things were done, that the scripture should be fulfilled, A bone of him shall not be broken."',
    when: 'Source Horizon: The 14th of Nisan, 1446 BC, the night of the Tenth Plague in Egypt. Target Horizon: The afternoon of the 14th of Nisan, AD 33, as Jesus died on Golgotha outside Jerusalem at the precise hour the evening Passover lambs were being slaughtered in the Temple.',
    how: 'Typological and prophetic fulfillment. The Roman soldiers smashed the leg bones (crurifragium) of the two thieves to hasten asphyxiation before the Sabbath sunset, but finding Jesus already dead, they pierced His side instead. John recognizes this sovereign preservation as divine orchestration fulfilling the paschal statute.',
    why: 'To demonstrate that Jesus Christ is the authentic, unblemished Paschal Lamb of God whose blood averts divine wrath, whose sacrifice marks the definitive exodus from sin and death, and whose body remained sacred and inviolate under divine protection.',
    ultimatePoint: 'Jesus Christ is the true Passover Lamb whose unblemished offering effects the eternal deliverance of God\'s people, perfectly fulfilling the ancient sacrificial typology without a single bone being broken.',
    personalRelevance: 'Why you need to know this: Divine judgment and eternal death have passed over you because the unblemished Lamb has already shed His blood to shield and ransom your life. What it does for you: It brings tranquil peace of conscience and total liberation from the fear of death, assuring you that your salvation is securely protected under divine covenant. Relationship with Jesus: Jesus is your personal Passover Lamb, whose body was offered up unbroken in holy perfection so that your fractured, broken life could be healed and made whole.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC, Sinai Wilderness)',
      sourceDate: 'c. 1446 BC',
      sourceSetting: 'Israel under Egyptian bondage on the eve of the miraculous Exodus deliverance.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95, Ephesus)',
      fulfillmentDate: 'c. AD 33',
      fulfillmentSetting: 'Eyewitness testimony at the foot of the cross at Calvary under the Roman prefecture of Pontius Pilate.',
      redemptiveBridge: 'The blood of the Passover lamb on the doorposts of Egypt finds cosmic realization in the shed blood of Christ on the wood of the cross.',
      scholarshipNotes: 'The Greek phrase Ὀστοῦν οὐ συντριβήσεται αὐτοῦ reflects the Septuagint translation of Exodus 12:46 and Psalm 34:20.',
    },
  },

  // Numbers 21:8-9 -> John 3:14-15 (The Bronze Serpent lifted up)
  'num-21-9_John 3:14-15': {
    id: 'num-21-9_John 3:14-15',
    anchorRef: 'Numbers 21:9',
    targetRef: 'John 3:14-15',
    what: 'The bronze serpent fashioned by Moses and lifted upon a pole ("And Moses made a serpent of brass, and put it upon a pole, and it came to pass, that if a serpent had bitten any man, when he beheld the serpent of brass, he lived", Num 21:9) explicitly identified by Jesus as the divine archetype of His crucifixion: "And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up: That whosoever believeth in him should not perish, but have eternal life" (John 3:14-15).',
    when: 'Source Horizon: c. 1407 BC, near Mount Hor in the Arabah wilderness during Israel\'s final year of wanderings. Target Horizon: Jerusalem c. AD 30–33, Jesus instructing Nicodemus by night, looking forward to Golgotha.',
    how: 'Typological and symbolic substitution. The serpent represented the very instrument of the curse and death (the venom of the fiery serpents). The bronze serpent had the form of the venomous serpent but possessed no venom. In the same way, God sent His own Son "in the likeness of sinful flesh" (Rom 8:3), who "knew no sin" but was "made to be sin for us" (2 Cor 5:21), lifted up on the wood of the cross to absorb and neutralize the lethal poison of the curse.',
    why: 'To reveal the simplicity and sovereign efficacy of saving faith. The dying Israelites could not heal themselves through medicines, works, or self-effort; they were commanded simply to look in faith at the bronze serpent on the pole. Likewise, eternal life is received by looking in faith upon the crucified Christ.',
    ultimatePoint: 'Jesus Christ was lifted up on the cross bearing the curse of our sin in His own sinless body, so that anyone dying from the lethal venom of sin who looks to Him in faith is instantly healed and granted eternal life.',
    personalRelevance: 'Why you need to know this: The poison of sin is lethal and impossible to cure through human willpower, but God\'s remedy requires no impossible striving—only looking in faith upon the crucified Christ. What it does for you: It breaks the exhausting cycle of introspective self-condemnation; whenever guilt strikes, you are healed not by examining your wounds, but by turning your eyes outward to Jesus lifted up on the cross. Relationship with Jesus: Jesus took the deadly venom of the serpent into His own body to give you life; walking with Him is as simple and profound as continually fixing your eyes upon Him in childlike trust.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 1407 BC',
      sourceSetting: 'The arid wilderness of Edom/Arabah where Israel grumbled against the manna and was afflicted by venomous serpents.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95, recording Christ\'s discourse)',
      fulfillmentDate: 'c. AD 30 / AD 33',
      fulfillmentSetting: 'Jerusalem under the shadows of night, Jesus conversing with Nicodemus, a master of Israel.',
      redemptiveBridge: 'From the wilderness pole that stayed physical death to the cross of Calvary that abolishes eternal death.',
      scholarshipNotes: 'Jesus uses the Greek verb ὑψωθῆναι (hypsōthēnai — to be lifted up), a Johannine double entendre signifying both physical elevation on the cross and divine glorification/exaltation.',
    },
  },
  'num-21-8_John 3:14-15': {
    id: 'num-21-8_John 3:14-15',
    anchorRef: 'Numbers 21:8',
    targetRef: 'John 3:14-15',
    what: 'The divine command to make a fiery serpent and set it upon a pole ("every one that is bitten, when he looketh upon it, shall live", Num 21:8) fulfilled in Christ being lifted up on the cross that whosoever believeth in Him should not perish but have eternal life (John 3:14-15).',
    when: 'Source Horizon: c. 1407 BC in the wilderness. Target Horizon: c. AD 30 in Jerusalem.',
    how: 'Typological substitution: the symbol of the curse made the instrument of life.',
    why: 'To demonstrate that salvation is by grace through a gaze of faith upon the lifted-up Savior.',
    ultimatePoint: 'Jesus Christ was lifted up on the cross so that everyone dying from sin who looks to Him in faith receives eternal life.',
    personalRelevance: 'Why you need to know this: The poison of sin is lethal and impossible to cure through human willpower, but God\'s remedy requires no impossible striving—only looking in faith upon the crucified Christ. What it does for you: It breaks the exhausting cycle of introspective self-condemnation; whenever guilt strikes, you are healed not by examining your wounds, but by turning your eyes outward to Jesus lifted up on the cross. Relationship with Jesus: Jesus took the deadly venom of the serpent into His own body to give you life; walking with Him is as simple and profound as continually fixing your eyes upon Him in childlike trust.',
    historicalContext: {
      sourceAuthor: 'Moses (c. 1446–1406 BC)',
      sourceDate: 'c. 1407 BC',
      sourceSetting: 'The Arabah wilderness during Israel\'s wandering.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95)',
      fulfillmentDate: 'c. AD 30 / AD 33',
      fulfillmentSetting: 'Night conversation between Jesus and Nicodemus.',
      redemptiveBridge: 'The wilderness pole prefigures the cross of Calvary.',
    },
  },

  // 4. CONQUEST & JUDGES ERA: Joshua 5:13-15 -> Revelation 19:11-16
  'jos-5-14_Revelation 19:11-16': {
    id: 'jos-5-14_Revelation 19:11-16',
    anchorRef: 'Joshua 5:13-15',
    targetRef: 'Revelation 19:11-16',
    what: 'The Christophany of the Captain of the LORD\'s host standing before Jericho with drawn sword (Josh 5:13-15) culminating in the apocalyptic appearance of the King of Kings riding forth with the armies of heaven to conquer in righteousness (Rev 19:11-16).',
    when: 'Source Horizon: c. 1406 BC at the plains of Jericho on the eve of the conquest of Canaan. Target Horizon: Late 1st century AD (c. AD 95), John in exile on Patmos beholding the consummation of all human history.',
    how: 'Typological and apocalyptic continuation of the Divine Warrior motif. Joshua falls on his face and worships, and is commanded to remove his shoes because the place is holy—the identical divine reverence demanded by Yahweh at the burning bush (Exo 3:5), identifying this Commander as the pre-incarnate Son.',
    why: 'To assure God\'s people that the battle against demonic powers and corrupt worldly empires is not fought by mere human strength, but is led by the divine Redeemer Himself, who ensures the final victory of the kingdom of God.',
    ultimatePoint: 'Jesus Christ is the divine Commander of heaven\'s armies, the Warrior-King who leads His covenant people to victory over all enemies and establishes God\'s eternal reign in holiness.',
    personalRelevance: 'Why you need to know this: You are never summoned to fight life\'s spiritual battles in your own strength or recruit God to your personal agenda; Christ arrives as the sovereign Commander of heaven\'s armies. What it does for you: It humbles your self-reliance, leads you into reverent surrender during crises, and replaces panic with calm boldness knowing the battle belongs to the Lord. Relationship with Jesus: Jesus is your Victorious Warrior-King who rides before you in righteousness to dismantle demonic strongholds and guide you securely through every obstacle.',
    historicalContext: {
      sourceAuthor: 'Joshua / Canonical Historians (c. 1400 BC)',
      sourceDate: 'c. 1406 BC',
      sourceSetting: 'The newly crossed Jordan river, Israel encamped before the fortified pagan stronghold of Jericho.',
      fulfillmentAuthor: 'Apostle John (c. AD 95, Patmos)',
      fulfillmentDate: 'c. AD 95',
      fulfillmentSetting: 'The island penal colony of Patmos during Domitian\'s persecution of Christians.',
      redemptiveBridge: 'The conquest of Canaan was a localized shadow of the cosmic conquest of all rebellion by the triumphant Son of God.',
    },
  },
  'jos-5-14_Rev 19:11-16': {
    id: 'jos-5-14_Revelation 19:11-16',
    anchorRef: 'Joshua 5:13-15',
    targetRef: 'Revelation 19:11-16',
    what: 'The Christophany of the Captain of the LORD\'s host standing before Jericho with drawn sword (Josh 5:13-15) culminating in the apocalyptic appearance of the King of Kings riding forth with the armies of heaven to conquer in righteousness (Rev 19:11-16).',
    when: 'Source Horizon: c. 1406 BC at the plains of Jericho on the eve of the conquest of Canaan. Target Horizon: Late 1st century AD (c. AD 95), John in exile on Patmos beholding the consummation of all human history.',
    how: 'Typological and apocalyptic continuation of the Divine Warrior motif.',
    why: 'To assure God\'s people that the battle against demonic powers and corrupt worldly empires is led by the divine Redeemer Himself.',
    ultimatePoint: 'Jesus Christ is the divine Commander of heaven\'s armies, the Warrior-King who leads His covenant people to victory.',
    personalRelevance: 'Why you need to know this: You are never summoned to fight life\'s spiritual battles in your own strength; Christ arrives as Commander. What it does for you: It replaces panic with calm boldness knowing the battle belongs to the Lord. Relationship with Jesus: Jesus is your Victorious Warrior-King who leads you in triumphant faith.',
    historicalContext: {
      sourceAuthor: 'Joshua / Canonical Historians (c. 1400 BC)',
      sourceDate: 'c. 1406 BC',
      sourceSetting: 'The newly crossed Jordan river, Israel encamped before Jericho.',
      fulfillmentAuthor: 'Apostle John (c. AD 95, Patmos)',
      fulfillmentDate: 'c. AD 95',
      fulfillmentSetting: 'The island penal colony of Patmos.',
      redemptiveBridge: 'The conquest of Canaan was a shadow of the cosmic conquest of all rebellion by the Son of God.',
    },
  },
  'jos-5-13_Revelation 19:11-16': {
    id: 'jos-5-13_Revelation 19:11-16',
    anchorRef: 'Joshua 5:13-15',
    targetRef: 'Revelation 19:11-16',
    what: 'The Christophany of the Captain of the LORD\'s host standing before Jericho with drawn sword (Josh 5:13-15) culminating in the apocalyptic appearance of the King of Kings riding forth with the armies of heaven to conquer in righteousness (Rev 19:11-16).',
    when: 'Source Horizon: c. 1406 BC at the plains of Jericho on the eve of the conquest of Canaan. Target Horizon: Late 1st century AD (c. AD 95), John in exile on Patmos beholding the consummation of all human history.',
    how: 'Typological and apocalyptic continuation of the Divine Warrior motif.',
    why: 'To assure God\'s people that the battle against demonic powers and corrupt worldly empires is led by the divine Redeemer Himself.',
    ultimatePoint: 'Jesus Christ is the divine Commander of heaven\'s armies, the Warrior-King who leads His covenant people to victory.',
    personalRelevance: 'Why you need to know this: You are never summoned to fight life\'s spiritual battles in your own strength; Christ arrives as Commander. What it does for you: It replaces panic with calm boldness knowing the battle belongs to the Lord. Relationship with Jesus: Jesus is your Victorious Warrior-King who leads you in triumphant faith.',
    historicalContext: {
      sourceAuthor: 'Joshua / Canonical Historians (c. 1400 BC)',
      sourceDate: 'c. 1406 BC',
      sourceSetting: 'The newly crossed Jordan river, Israel encamped before Jericho.',
      fulfillmentAuthor: 'Apostle John (c. AD 95, Patmos)',
      fulfillmentDate: 'c. AD 95',
      fulfillmentSetting: 'The island penal colony of Patmos.',
      redemptiveBridge: 'The conquest of Canaan was a shadow of the cosmic conquest of all rebellion by the Son of God.',
    },
  },
  'jos-5-15_Revelation 19:11-16': {
    id: 'jos-5-15_Revelation 19:11-16',
    anchorRef: 'Joshua 5:13-15',
    targetRef: 'Revelation 19:11-16',
    what: 'The Christophany of the Captain of the LORD\'s host standing before Jericho with drawn sword (Josh 5:13-15) culminating in the apocalyptic appearance of the King of Kings riding forth with the armies of heaven to conquer in righteousness (Rev 19:11-16).',
    when: 'Source Horizon: c. 1406 BC at the plains of Jericho on the eve of the conquest of Canaan. Target Horizon: Late 1st century AD (c. AD 95), John in exile on Patmos beholding the consummation of all human history.',
    how: 'Typological and apocalyptic continuation of the Divine Warrior motif.',
    why: 'To assure God\'s people that the battle against demonic powers and corrupt worldly empires is led by the divine Redeemer Himself.',
    ultimatePoint: 'Jesus Christ is the divine Commander of heaven\'s armies, the Warrior-King who leads His covenant people to victory.',
    personalRelevance: 'Why you need to know this: You are never summoned to fight life\'s spiritual battles in your own strength; Christ arrives as Commander. What it does for you: It replaces panic with calm boldness knowing the battle belongs to the Lord. Relationship with Jesus: Jesus is your Victorious Warrior-King who leads you in triumphant faith.',
    historicalContext: {
      sourceAuthor: 'Joshua / Canonical Historians (c. 1400 BC)',
      sourceDate: 'c. 1406 BC',
      sourceSetting: 'The newly crossed Jordan river, Israel encamped before Jericho.',
      fulfillmentAuthor: 'Apostle John (c. AD 95, Patmos)',
      fulfillmentDate: 'c. AD 95',
      fulfillmentSetting: 'The island penal colony of Patmos.',
      redemptiveBridge: 'The conquest of Canaan was a shadow of the cosmic conquest of all rebellion by the Son of God.',
    },
  },

  // 5. UNITED & DIVIDED MONARCHY: 2 Samuel 7:12-16 -> Luke 1:32-33
  '2sa-7-12_Luke 1:32-33': {
    id: '2sa-7-12_Luke 1:32-33',
    anchorRef: '2 Samuel 7:12-16',
    targetRef: 'Luke 1:32-33',
    what: 'The unconditional Davidic Covenant guaranteeing an eternal dynasty, throne, and kingdom ("I will establish the throne of his kingdom for ever", 2 Sam 7:13,16) announced by the Archangel Gabriel at the Annunciation: "The Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end" (Luke 1:32-33).',
    when: 'Source Horizon: United Monarchy in Jerusalem c. 1000 BC under King David and the Prophet Nathan. Target Horizon: Roman Judea c. 4–3 BC in Nazareth of Galilee.',
    how: 'Direct messianic prophecy and covenantal inheritance. Gabriel cites the exact royal covenant formula of 2 Samuel 7, declaring that the Son born to the virgin Mary is the long-awaited Son of David whose reign will never cease.',
    why: 'To establish the legal and covenantal right of Jesus to the eternal throne of Israel, proving that the earthly collapse of the Davidic dynasty in 586 BC was not a failure of God\'s promise, but the transition to an everlasting spiritual and cosmic kingdom.',
    ultimatePoint: 'Jesus Christ is the promised eternal King of the Davidic covenant whose throne is established forever, whose kingdom knows no boundaries and shall have no end.',
    personalRelevance: 'Why you need to know this: Earthly rulers, political regimes, and economic fortunes constantly fluctuate, but Christ\'s kingdom and His throne in your life can never be shaken or overthrown. What it does for you: It delivers you from cultural dread and despair over worldly collapse, anchoring your heart in an eternal commonwealth that outlasts all human empires. Relationship with Jesus: Jesus is your rightful King and Shepherd-Ruler whose loving authority over your decisions brings order, supernatural protection, and everlasting peace.',
    historicalContext: {
      sourceAuthor: 'Prophet Nathan / Gad / Samuel compilers (c. 1000–960 BC)',
      sourceDate: 'c. 1000 BC',
      sourceSetting: 'David settled in his cedar palace in Jerusalem after subduing surrounding enemies.',
      fulfillmentAuthor: 'Luke the Evangelist (c. AD 60–62)',
      fulfillmentDate: 'c. 4 BC / AD 30',
      fulfillmentSetting: 'An obscure village in Roman Galilee under King Herod the Great and Caesar Augustus.',
      redemptiveBridge: 'Through centuries of monarchy, exile, and four hundred silent years, the royal lineage was preserved until the rightful Heir appeared.',
    },
  },

  // Psalm 110:4 -> Hebrews 7:17 (Melchizedekian Royal Priesthood)
  'psa-110-4_Hebrews 7:17': {
    id: 'psa-110-4_Hebrews 7:17',
    anchorRef: 'Psalm 110:4',
    targetRef: 'Hebrews 7:17',
    what: 'God\'s immutable oath appointing the Davidic Messiah as eternal royal Priest: "The LORD hath sworn, and will not repent, Thou art a priest for ever after the order of Melchizedek" (Psa 110:4), expounded by the author of Hebrews: "For he testifieth, Thou art a priest for ever after the order of Melchisedec... Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Heb 7:17,25).',
    when: 'Source Horizon: United Monarchy in Jerusalem c. 1000 BC under King David. Target Horizon: Apostolic Era c. AD 64–68, written to Hebrew Christians before the destruction of the Temple in AD 70.',
    how: 'Hermeneutical and royal typology. Melchizedek was both King of Salem and Priest of the Most High God (Gen 14:18), without recorded genealogy or end of days. Christ fulfills this superior order by the "power of an endless life" (Heb 7:16), uniting universal Kingship with an unchangeable, eternal Priesthood in the heavenly sanctuary.',
    why: 'To demonstrate that Christ\'s priesthood supersedes the temporary, flawed Levitical system. Because Jesus lives forever and holds an inviolable priesthood, His intercession for believers is perpetual, uninterrupted, and all-sufficient.',
    ultimatePoint: 'Jesus Christ is our eternal Melchizedekian High Priest and King of Righteousness, who has entered the true heavenly sanctuary with His own blood and lives forever to make unbroken, all-prevailing intercession for us.',
    personalRelevance: 'Why you need to know this: Your acceptance before God does not depend on human rituals or your own fluctuating spiritual performance, but on the living, eternal intercession of Jesus Christ in the heavenly sanctuary. What it does for you: It gives you unfailing boldness to approach God\'s throne of grace in any hour of weakness, temptation, or failure, knowing that Jesus lives forever to save you to the uttermost. Relationship with Jesus: Jesus is your compassionate High Priest who understands your human struggles and continually advocates for you by name before the Father; you can never be lost while He pleads your cause.',
    historicalContext: {
      sourceAuthor: 'King David (c. 1000 BC, Jerusalem)',
      sourceDate: 'c. 1000 BC',
      sourceSetting: 'David reigning on Mount Zion, receiving prophetic revelation of his heavenly Lord who would unite royalty and priesthood.',
      fulfillmentAuthor: 'Author of Hebrews (c. AD 64–68, Italy/Rome)',
      fulfillmentDate: 'c. AD 64–68',
      fulfillmentSetting: 'Jewish Christians tempted to return to the decaying Levitical temple ritual in Jerusalem.',
      redemptiveBridge: 'From the mysterious encounter of Abraham with Melchizedek in Genesis 14 to David\'s coronation psalm, culminating in Christ\'s heavenly ministry in Hebrews.',
      scholarshipNotes: 'Hebrews emphasizes the divine oath (ὅρκος, horkos) in Psalm 110:4: the Levitical priests were made without an oath, but Christ with an oath by Him who said, "The Lord sware and will not repent."',
    },
  },
  'psa-110-4_Hebrews 5:6': {
    id: 'psa-110-4_Hebrews 5:6',
    anchorRef: 'Psalm 110:4',
    targetRef: 'Hebrews 5:6',
    what: 'God\'s eternal oath appointing the Messiah as Priest after the order of Melchizedek cited in Hebrews 5:6 to establish Christ\'s divine appointment to high priesthood.',
    when: 'Source Horizon: c. 1000 BC in Jerusalem. Target Horizon: c. AD 64–68.',
    how: 'Direct messianic typology and divine appointment.',
    why: 'To prove that Christ did not glorify Himself to be made High Priest, but was appointed by the Father.',
    ultimatePoint: 'Jesus Christ was divinely ordained by the Father as our eternal High Priest after the order of Melchizedek.',
    personalRelevance: 'Why you need to know this: Your acceptance before God does not depend on human rituals, but on the living, eternal intercession of Jesus Christ. What it does for you: It gives you boldness to approach God in times of need. Relationship with Jesus: Jesus is your compassionate High Priest who advocates for you continually.',
    historicalContext: {
      sourceAuthor: 'King David (c. 1000 BC)',
      sourceDate: 'c. 1000 BC',
      sourceSetting: 'Mount Zion in Jerusalem.',
      fulfillmentAuthor: 'Author of Hebrews (c. AD 64–68)',
      fulfillmentDate: 'c. AD 64–68',
      fulfillmentSetting: 'Apostolic church contemplating Christ\'s heavenly priesthood.',
      redemptiveBridge: 'Davidic royal psalm fulfilled in Christ\'s heavenly priesthood.',
    },
  },
  'psa-110-4_Hebrews 7:21': {
    id: 'psa-110-4_Hebrews 7:21',
    anchorRef: 'Psalm 110:4',
    targetRef: 'Hebrews 7:21',
    what: 'The divine oath of Psalm 110:4 ("The Lord sware and will not repent, Thou art a priest for ever") establishing Jesus as the surety of a better covenant.',
    when: 'Source Horizon: c. 1000 BC. Target Horizon: c. AD 64–68.',
    how: 'Covenantal theology of the divine oath.',
    why: 'To demonstrate the unchangeable permanence of the New Covenant mediated by Christ.',
    ultimatePoint: 'Jesus Christ is the eternal Priest guaranteed by the oath of God, making Him the surety of an everlasting covenant.',
    personalRelevance: 'Why you need to know this: God swore an oath that will never be repented of; your salvation in Christ is utterly unshakeable. What it does for you: It casts out all doubt regarding your eternal security in Christ. Relationship with Jesus: Jesus is the living surety of your covenant with God.',
    historicalContext: {
      sourceAuthor: 'King David (c. 1000 BC)',
      sourceDate: 'c. 1000 BC',
      sourceSetting: 'Jerusalem.',
      fulfillmentAuthor: 'Author of Hebrews (c. AD 64–68)',
      fulfillmentDate: 'c. AD 64–68',
      fulfillmentSetting: 'Italy / Judea.',
      redemptiveBridge: 'The divine oath connects the Davidic covenant to the eternal priesthood of Christ.',
    },
  },
  'psa-110-1_Matthew 22:44': {
    id: 'psa-110-1_Matthew 22:44',
    anchorRef: 'Psalm 110:1',
    targetRef: 'Matthew 22:44',
    what: 'David\'s inspired psalm ("The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool", Psa 110:1) used by Jesus to confound the Pharisees: "If David then call him Lord, how is he his son?" (Matt 22:44).',
    when: 'Source Horizon: c. 1000 BC in Jerusalem. Target Horizon: Passion Week, AD 33 in the Jerusalem Temple courts.',
    how: 'Direct Christological interrogation by Jesus demonstrating His divine pre-existence and lordship over David.',
    why: 'To establish that the Messiah is not merely an earthly political son of David, but David\'s transcendent, divine Lord.',
    ultimatePoint: 'Jesus Christ is David\'s Lord and God\'s exalted King, enthroned at the right hand of the Father until all enemies are made His footstool.',
    personalRelevance: 'Why you need to know this: Jesus is not merely a wise human teacher or moral example; He is David\'s Lord and the exalted King of the universe. What it does for you: It gives you confidence that every enemy—sin, sickness, demonic power, and death—will be placed beneath His feet. Relationship with Jesus: Walking with Jesus means bowing before Him as your supreme Lord, trusting His sovereign power over every circumstance.',
    historicalContext: {
      sourceAuthor: 'King David (c. 1000 BC, Jerusalem)',
      sourceDate: 'c. 1000 BC',
      sourceSetting: 'David reigning over Israel on Mount Zion.',
      fulfillmentAuthor: 'Apostle Matthew (c. AD 60–68)',
      fulfillmentDate: 'c. AD 33',
      fulfillmentSetting: 'Herod\'s Temple courts during the final confrontation between Jesus and religious leaders.',
      redemptiveBridge: 'David\'s prophetic psalm unveils the divine identity of the Messiah who sits at the Father\'s right hand.',
    },
  },
  'psa-110-1_Acts 2:34-35': {
    id: 'psa-110-1_Acts 2:34-35',
    anchorRef: 'Psalm 110:1',
    targetRef: 'Acts 2:34-35',
    what: 'Peter\'s Pentecost sermon quoting Psalm 110:1 to prove that the resurrected and ascended Jesus has been exalted to the right hand of God as both Lord and Christ.',
    when: 'Source Horizon: c. 1000 BC. Target Horizon: Day of Pentecost, AD 33 in Jerusalem.',
    how: 'Apostolic proclamation linking the resurrection and ascension of Christ to David\'s prophecy.',
    why: 'To demonstrate that Jesus is reigning now at the right hand of God, having poured forth the Holy Spirit.',
    ultimatePoint: 'Jesus Christ is exalted at God\'s right hand as sovereign Lord and Christ, pouring out the Holy Spirit upon His church.',
    personalRelevance: 'Why you need to know this: The Holy Spirit given to you is the direct proof that Jesus is alive and reigning in power right now. What it does for you: It equips you with supernatural power to witness and live a holy life. Relationship with Jesus: Jesus is your ascended Lord who fills you with His Spirit and intercedes for you constantly.',
    historicalContext: {
      sourceAuthor: 'King David (c. 1000 BC)',
      sourceDate: 'c. 1000 BC',
      sourceSetting: 'Jerusalem.',
      fulfillmentAuthor: 'Luke the Evangelist (c. AD 62–64, recording Peter\'s sermon)',
      fulfillmentDate: 'c. AD 33',
      fulfillmentSetting: 'Jerusalem filled with Pentecost pilgrims.',
      redemptiveBridge: 'From David\'s prophecy to the ascension and outpouring of the Spirit at Pentecost.',
    },
  },

  // 5b. MONARCHY (PROPHETIC): Isaiah 53:5 -> 1 Peter 2:24
  'isa-53-5_1 Peter 2:24': {
    id: 'isa-53-5_1 Peter 2:24',
    anchorRef: 'Isaiah 53:5',
    targetRef: '1 Peter 2:24',
    what: 'The substitutionary atonement of the Suffering Servant ("he was wounded for our transgressions, he was bruised for our iniquities... and with his stripes we are healed") cited by the Apostle Peter: "Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed."',
    when: 'Source Horizon: Late 8th century BC (c. 700 BC) during the Assyrian crisis in Judah. Target Horizon: Rome c. AD 64 during the early Neronian persecutions.',
    how: 'Apostolic soteriological citation. Peter applies Isaiah\'s Hebrew poetic parallelisms (מְחֹלָל, meḥolal — "pierced through"; חַבּוּרָה, ḥabburah — "blow/welts") directly to Christ\'s physical crucifixion on the Roman cross (ξύλον, xylon — tree/cross).',
    why: 'To ground Christian endurance under unjust suffering in the ultimate vicarious sacrifice of Christ, demonstrating that redemption is achieved not through worldly power, but through the sacrificial, sin-bearing death of the Lamb of God.',
    ultimatePoint: 'Jesus Christ personally bore the penalty of human sin in His own body on the cross, accomplishing perfect substitutionary atonement and spiritual healing for all who trust in Him.',
    personalRelevance: 'Why you need to know this: Your sins, wounds, traumas, and guilt were not brushed aside or ignored; they were personally absorbed, borne, and healed in the broken body of the Savior. What it does for you: It provides deep emotional and spiritual healing, lifting the heavy burden of self-condemnation and empowering you to endure mistreatment without nursing bitterness. Relationship with Jesus: Jesus bore your specific stripes upon His flesh; walking with Him means living in the shelter of a Savior whose scars testify forever of His sacrificial love for you.',
    historicalContext: {
      sourceAuthor: 'Prophet Isaiah (c. 740–680 BC, Jerusalem)',
      sourceDate: 'c. 700 BC',
      sourceSetting: 'Kingdom of Judah under King Hezekiah, facing the terrifying imperial threat of Assyrian conquest.',
      fulfillmentAuthor: 'Apostle Peter (c. AD 64, Rome / "Babylon")',
      fulfillmentDate: 'c. AD 64',
      fulfillmentSetting: 'Christian converts scattered as persecuted aliens across Asia Minor under rising imperial hostility.',
      redemptiveBridge: 'The fourth Servant Song of Isaiah provides the theological blueprint that unlocks the mystery of the cross in the New Testament.',
      scholarshipNotes: 'Peter changes Isaiah\'s first-person plural ("we are healed") to the direct pastoral second-person ("ye were healed"), applying the prophetic medicine directly to his suffering flock.',
    },
  },

  // Jeremiah 31:31 -> Hebrews 8:8 (The New Covenant)
  'jer-31-31_Hebrews 8:8': {
    id: 'jer-31-31_Hebrews 8:8',
    anchorRef: 'Jeremiah 31:31',
    targetRef: 'Hebrews 8:8',
    what: 'The explicit promise of the New Covenant ("Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel... I will put my law in their inward parts, and write it in their hearts... and their sins and their iniquities will I remember no more", Jer 31:31-34) quoted in full in Hebrews 8:8-12 and declared fulfilled in Jesus Christ.',
    when: 'Source Horizon: c. 588–586 BC during the siege of Jerusalem as the first temple crumbled. Target Horizon: Apostolic Era c. AD 64–68 as the Second Temple era neared its end.',
    how: 'Covenantal replacement and interior regeneration. The Sinai Covenant written on stone was continually broken by Israel\'s unregenerate hearts; the New Covenant is ratified by Christ\'s blood, inscribed on the human heart by the Holy Spirit, and guarantees total, permanent remission of sins.',
    why: 'To solve the fundamental problem of human depravity. External laws could diagnose sin and pronounce condemnation, but could not impart the desire or power to obey. The New Covenant transforms human desire and reconciles humanity to God.',
    ultimatePoint: 'Jesus Christ is the Mediator of the New Covenant who inaugurated this everlasting bond in His own blood, writing God\'s holy law on the hearts of His people and granting unconditional, permanent forgiveness of sins.',
    personalRelevance: 'Why you need to know this: Your relationship with God is not based on the fragile Old Covenant of "do this or perish," where your failures sever fellowship, but on the New Covenant ratified in Christ\'s blood where God Himself writes His law on your heart. What it does for you: It replaces legalistic dread with genuine spiritual desire, freeing you from guilt with God\'s unconditional promise: "their sins and their iniquities will I remember no more." Relationship with Jesus: Jesus is the loving Mediator of the New Covenant who invites you into direct, unhindered intimacy where you know Him personally, heart to heart, each and every day.',
    historicalContext: {
      sourceAuthor: 'Prophet Jeremiah (c. 627–580 BC, Jerusalem)',
      sourceDate: 'c. 586 BC',
      sourceSetting: 'Jeremiah imprisoned in the court of the guard as Babylonian siege engines breached Jerusalem\'s walls.',
      fulfillmentAuthor: 'Author of Hebrews (c. AD 64–68)',
      fulfillmentDate: 'c. AD 64–68',
      fulfillmentSetting: 'Jewish believers tempted to rely on vanishing Levitical sacrifices.',
      redemptiveBridge: 'Jeremiah\'s prophecy in the smoking ruins of Jerusalem bridges to the indestructible covenant established by Christ.',
      scholarshipNotes: 'Hebrews 8 quotes the longest continuous Old Testament passage in the entire New Testament, demonstrating that Jeremiah 31:31-34 is the central theological axis of the Epistle to the Hebrews.',
    },
  },
  'jer-31-31_Hebrews 10:16': {
    id: 'jer-31-31_Hebrews 10:16',
    anchorRef: 'Jeremiah 31:31',
    targetRef: 'Hebrews 10:16',
    what: 'The heart-inscription of the New Covenant ("This is the covenant that I will make with them after those days, saith the Lord, I will put my laws into their hearts, and in their minds will I write them", Heb 10:16; Jer 31:33) cited to demonstrate the finality of Christ\'s single offering.',
    when: 'Source Horizon: c. 586 BC. Target Horizon: c. AD 65.',
    how: 'Pneumatological and covenantal application of the finished work of Christ.',
    why: 'To show that where remission of sins is accomplished, there is no more offering for sin.',
    ultimatePoint: 'By one offering Jesus Christ perfected forever them that are sanctified, writing God\'s law upon their hearts.',
    personalRelevance: 'Why you need to know this: Through Christ\'s single offering, your sanctification is permanently secured in God\'s plan. What it does for you: It removes the urge to seek penance or self-atonement, allowing you to rest in Christ\'s finished work. Relationship with Jesus: Jesus is your all-sufficient Savior whose blood has cleansed your conscience from dead works.',
    historicalContext: {
      sourceAuthor: 'Prophet Jeremiah (c. 627–580 BC)',
      sourceDate: 'c. 586 BC',
      sourceSetting: 'Jerusalem during the Babylonian crisis.',
      fulfillmentAuthor: 'Author of Hebrews (c. AD 64–68)',
      fulfillmentDate: 'c. AD 65',
      fulfillmentSetting: 'Early church assemblies.',
      redemptiveBridge: 'The prophetic promise of inner transformation realized through Christ\'s sacrifice.',
    },
  },
  'jer-31-31_Luke 22:20': {
    id: 'jer-31-31_Luke 22:20',
    anchorRef: 'Jeremiah 31:31',
    targetRef: 'Luke 22:20',
    what: 'Jesus instituting the Lord\'s Supper: "This cup is the new testament in my blood, which is shed for you" (Luke 22:20), formally ratifying the New Covenant promised in Jeremiah 31:31.',
    when: 'Source Horizon: c. 586 BC. Target Horizon: Passover evening, AD 33.',
    how: 'Covenant ratification: blood of the covenant establishing the New Testament.',
    why: 'To inaugurate the promised New Covenant through the sacrificial death of the Son of God.',
    ultimatePoint: 'Jesus Christ inaugurated the New Covenant in His own shed blood at the Last Supper and the cross of Calvary.',
    personalRelevance: 'Why you need to know this: Every time you take communion, you are celebrating the New Covenant that Jesus sealed for you with His own blood. What it does for you: It re-anchors your soul in grace and the certainty of your eternal fellowship with God. Relationship with Jesus: Jesus invites you to His table in intimate communion as His covenant partner.',
    historicalContext: {
      sourceAuthor: 'Prophet Jeremiah (c. 586 BC)',
      sourceDate: 'c. 586 BC',
      sourceSetting: 'Jerusalem in crisis.',
      fulfillmentAuthor: 'Luke the Evangelist (c. AD 60–62, recording Jesus)',
      fulfillmentDate: 'c. AD 33',
      fulfillmentSetting: 'The Upper Room in Jerusalem.',
      redemptiveBridge: 'From Jeremiah\'s prophetic promise to the Cup of the New Covenant in the Upper Room.',
    },
  },

  // 6. EXILE & RESTORATION: Daniel 7:13-14 -> Matthew 26:64 / Revelation 1:7
  'dan-7-13_Matthew 26:64 / Revelation 1:7': {
    id: 'dan-7-13_Matthew 26:64 / Revelation 1:7',
    anchorRef: 'Daniel 7:13-14',
    targetRef: 'Matthew 26:64 / Revelation 1:7',
    what: 'The apocalyptic vision of the heavenly "Son of man" coming with the clouds of heaven to receive an everlasting dominion and kingdom that shall not pass away (Dan 7:13-14), invoked by Jesus before the High Priest Caiaphas (Matt 26:64) and echoed in John\'s apocalyptic opening: "Behold, he cometh with clouds; and every eye shall see him" (Rev 1:7).',
    when: 'Source Horizon: Babylonian Exile c. 553 BC (first year of Belshazzar king of Babylon). Target Horizon: Jerusalem trial in AD 33 before the Sanhedrin, and Patmos vision c. AD 95.',
    how: 'Direct Christological identification and eschatological climax. Jesus adopts "Son of Man" (כְּבַר אֱנָשׁ, kevar ʾenash) as His primary self-designation, claiming the divine prerogatives of riding on clouds (an Old Testament description reserved strictly for Yahweh) and exercising universal, eternal kingship.',
    why: 'To unveil the supreme heavenly dignity of the Messiah beyond earthly, nationalistic expectations, declaring that beyond His humiliation and death lies cosmic exaltation and universal judgment over all earthly empires.',
    ultimatePoint: 'Jesus Christ is the transcendent Son of Man invested by the Father with universal dominion, glory, and an everlasting kingdom that will shatter all tyrannical earthly empires and endure for all eternity.',
    personalRelevance: 'Why you need to know this: In a world plagued by injustice, suffering, and predatory human power, history is not spinning out of control—the Son of Man holds supreme cosmic dominion. What it does for you: It equips you with perseverance and fearless hope, knowing that current afflictions are momentary and that Christ will visibly return to right every wrong. Relationship with Jesus: You belong to the ultimate Sovereign of history, who sees your struggles, walks beside you in the fire, and promises that you will share in His everlasting kingdom.',
    historicalContext: {
      sourceAuthor: 'Prophet Daniel (c. 605–530 BC, Babylon/Susa)',
      sourceDate: 'c. 553 BC',
      sourceSetting: 'Daniel in the royal Babylonian court witnessing visions of four ferocious beasts representing predatory human empires.',
      fulfillmentAuthor: 'Apostle Matthew / Apostle John (c. AD 60–95)',
      fulfillmentDate: 'c. AD 33 / AD 95',
      fulfillmentSetting: 'The kangaroo court of Caiaphas in Jerusalem and the Roman penal colony of Patmos.',
      redemptiveBridge: 'From the lions\' den and Babylonian courts to the Sanhedrin and Patmos, the kingdom of the Son of Man outlasts every worldly superpower.',
    },
  },
  'dan-7-13_Matt 26:64 / Rev 1:7': {
    id: 'dan-7-13_Matthew 26:64 / Revelation 1:7',
    anchorRef: 'Daniel 7:13-14',
    targetRef: 'Matthew 26:64 / Revelation 1:7',
    what: 'The apocalyptic vision of the heavenly "Son of man" coming with the clouds of heaven to receive an everlasting dominion and kingdom that shall not pass away (Dan 7:13-14), invoked by Jesus before Caiaphas (Matt 26:64) and echoed in Rev 1:7.',
    when: 'Source Horizon: Babylonian Exile c. 553 BC. Target Horizon: Jerusalem trial in AD 33 and Patmos vision c. AD 95.',
    how: 'Direct Christological identification and eschatological climax.',
    why: 'To unveil the supreme heavenly dignity of the Messiah beyond earthly nationalistic expectations.',
    ultimatePoint: 'Jesus Christ is the transcendent Son of Man invested by the Father with universal dominion, glory, and an everlasting kingdom.',
    personalRelevance: 'Why you need to know this: Human history is not spiraling into chaos; the Son of Man holds supreme cosmic dominion. What it does for you: It gives you steadfast hope and courage in dark times. Relationship with Jesus: You belong to the King whose dominion will never pass away.',
    historicalContext: {
      sourceAuthor: 'Prophet Daniel (c. 605–530 BC, Babylon)',
      sourceDate: 'c. 553 BC',
      sourceSetting: 'Daniel in the royal Babylonian court witnessing visions of four world empires.',
      fulfillmentAuthor: 'Apostle Matthew / Apostle John (c. AD 60–95)',
      fulfillmentDate: 'c. AD 33 / AD 95',
      fulfillmentSetting: 'The court of Caiaphas in Jerusalem and the penal colony of Patmos.',
      redemptiveBridge: 'The kingdom of the Son of Man outlasts every worldly superpower.',
    },
  },

  // Zechariah 12:10 -> John 19:37 / Revelation 1:7 (The Pierced Shepherd-God)
  'zec-12-10_John 19:37': {
    id: 'zec-12-10_John 19:37',
    anchorRef: 'Zechariah 12:10',
    targetRef: 'John 19:37',
    what: 'The astonishing prophecy of the pierced divine King: "And I will pour upon the house of David, and upon the inhabitants of Jerusalem, the spirit of grace and of supplications: and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son" (Zech 12:10), cited as fulfilled at the piercing of Jesus\' side in John 19:37 ("And again another scripture saith, They shall look on him whom they pierced") and at His return in Revelation 1:7.',
    when: 'Source Horizon: Post-exilic Jerusalem c. 520–480 BC under Persian rule. Target Horizon: Golgotha, AD 33, as the Roman spear pierced Christ\'s side, and Patmos c. AD 95.',
    how: 'Grammatical, Christological, and eschatological identification. In Zechariah 12:10, Yahweh Himself speaks ("They shall look upon ME whom they have pierced"), transitioning to the third person ("and they shall mourn for HIM"). This impossible Old Testament paradox—Yahweh physically pierced and mourned as an only son—is resolved solely in the crucifixion of Jesus Christ, who is God manifest in the flesh.',
    why: 'To reveal both the divine dignity of the Crucified One and the ultimate national and global repentance that unfolds when humanity recognizes that the One they rejected and pierced was their very God and Redeemer.',
    ultimatePoint: 'Jesus Christ is Yahweh in the flesh, pierced on Calvary\'s cross for the redemption of the world, upon whom all nations will look—either in saving repentance today or in awe-struck judgment at His return.',
    personalRelevance: 'Why you need to know this: Your salvation was purchased not by a mere created martyr or angel, but by God Himself who entered human flesh and allowed His own heart to be pierced for your rebellion. What it does for you: It shatters stubborn pride and produces tender, life-transforming repentance, melting your heart with the realization that your sins pierced Him, yet His wounds poured out mercy. Relationship with Jesus: Jesus invites you to look upon His pierced side and find complete cleansing; walking with Him means living in grateful devotion to the One whose wounded hands hold you fast.',
    historicalContext: {
      sourceAuthor: 'Prophet Zechariah (c. 520–480 BC, Jerusalem)',
      sourceDate: 'c. 520 BC',
      sourceSetting: 'Second Temple community struggling under Persian rule, rebuilding Jerusalem amidst poverty and opposition.',
      fulfillmentAuthor: 'Apostle John (c. AD 85–95, Ephesus/Patmos)',
      fulfillmentDate: 'c. AD 33 / AD 95',
      fulfillmentSetting: 'Eyewitness at Golgotha witnessing the soldier\'s spear pierce Christ\'s side, and apocalyptic vision on Patmos.',
      redemptiveBridge: 'From the post-exilic prophetic oracle to the Roman spear at Calvary and the final cosmic manifestation in the clouds.',
      scholarshipNotes: 'John preserves the original Hebrew reading (דָּקָרוּ, daqaru — pierced) against the corrupted Septuagint translation (κατωρχήσαντο — insulted/mocked), demonstrating independent apostolic familiarity with the Hebrew text.',
    },
  },
  'zec-12-10_Revelation 1:7': {
    id: 'zec-12-10_Revelation 1:7',
    anchorRef: 'Zechariah 12:10',
    targetRef: 'Revelation 1:7',
    what: 'Zechariah\'s prophecy of the pierced One echoed in the apocalyptic thesis of Revelation: "Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him" (Rev 1:7).',
    when: 'Source Horizon: c. 520 BC in Jerusalem. Target Horizon: c. AD 95 on the island of Patmos.',
    how: 'Apocalyptic climax uniting Daniel 7:13 (clouds) and Zechariah 12:10 (pierced One).',
    why: 'To declare the universal vindication of the crucified Savior before all humanity.',
    ultimatePoint: 'The pierced Savior will return in the clouds of heaven, vindicated before every eye as Lord and King.',
    personalRelevance: 'Why you need to know this: The Savior who was pierced on the cross will return as the glorious King whom every eye will see. What it does for you: It gives you patience to endure persecution and suffering, knowing that your faith in Christ will be eternally vindicated. Relationship with Jesus: Walking with Jesus means longing for His glorious appearing and living every day ready to meet Him.',
    historicalContext: {
      sourceAuthor: 'Prophet Zechariah (c. 520 BC)',
      sourceDate: 'c. 520 BC',
      sourceSetting: 'Post-exilic Jerusalem.',
      fulfillmentAuthor: 'Apostle John (c. AD 95, Patmos)',
      fulfillmentDate: 'c. AD 95',
      fulfillmentSetting: 'Exiled on Patmos during Roman persecution.',
      redemptiveBridge: 'The pierced One of Zechariah 12 revealed as the triumphant Lord of Revelation 1.',
    },
  },
  'zec-12-10_Matthew 24:30': {
    id: 'zec-12-10_Matthew 24:30',
    anchorRef: 'Zechariah 12:10',
    targetRef: 'Matthew 24:30',
    what: 'Jesus citing Zechariah 12:10 in the Olivet Discourse: "And then shall appear the sign of the Son of man in heaven: and then shall all the tribes of the earth mourn, and they shall see the Son of man coming in the clouds of heaven with power and great glory."',
    when: 'Source Horizon: c. 520 BC. Target Horizon: Passion Week, AD 33 on the Mount of Olives.',
    how: 'Direct eschatological application by Jesus Himself of the mourning for the pierced One.',
    why: 'To warn humanity of the solemn, public reality of Christ\'s second advent.',
    ultimatePoint: 'All nations will behold the Son of Man returning in glory, fulfilling the prophetic mourning of Zechariah.',
    personalRelevance: 'Why you need to know this: History is heading toward a visible, public culmination in the return of Jesus Christ. What it does for you: It keeps your heart awake, sober, and free from the love of the world. Relationship with Jesus: Jesus is your returning King who bids you watch and pray always.',
    historicalContext: {
      sourceAuthor: 'Prophet Zechariah (c. 520 BC)',
      sourceDate: 'c. 520 BC',
      sourceSetting: 'Second Temple Jerusalem.',
      fulfillmentAuthor: 'Apostle Matthew (c. AD 60–68)',
      fulfillmentDate: 'c. AD 33',
      fulfillmentSetting: 'The Mount of Olives overlooking the Temple.',
      redemptiveBridge: 'Zechariah\'s prophecy integrated into Christ\'s prophetic discourse on the end of the age.',
    },
  },

  // 7. SECOND TEMPLE / INTERTESTAMENTAL: Malachi 4:2 -> Luke 1:78-79 (The Sun of Righteousness)
  'mal-4-2_Luke 1:78-79': {
    id: 'mal-4-2_Luke 1:78-79',
    anchorRef: 'Malachi 4:2',
    targetRef: 'Luke 1:78-79',
    what: 'The closing Old Testament messianic dawn: "But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall" (Mal 4:2), celebrated in Zechariah\'s prophetic Benedictus in Luke 1:78-79: "Through the tender mercy of our God; whereby the dayspring from on high hath visited us, to give light to them that sit in darkness and in the shadow of death, to guide our feet into the way of peace."',
    when: 'Source Horizon: Post-exilic Jerusalem c. 430–400 BC at the close of the Old Testament canon. Target Horizon: Judea c. 4–3 BC at the birth of John the Baptist and the dawn of the Gospel era.',
    how: 'Celestial solar typology and messianic fulfillment. Malachi looks beyond the 400 silent years to the rising of the messianic Sun (Hebrew: שֶׁמֶשׁ צְדָקָה, Shemesh Tzedakah). The "wings" (כְּנָפַיִם, kenafeha) depict the radiant beams of dawn dispersing darkness, coldness, and spiritual disease. Luke identifies this with the Dayspring (ἀνατολή, anatolē — solar dawn) visiting a world trapped in the shadow of death.',
    why: 'To offer radiant hope to the faithful remnant who revere God\'s name, assuring them that despite moral darkness and apparent divine silence, the night will be shattered by the healing dawn of the Messiah.',
    ultimatePoint: 'Jesus Christ is the Sun of Righteousness whose arrival ends centuries of spiritual night, flooding dark and broken human lives with divine healing, righteousness, joy, and eternal life.',
    personalRelevance: 'Why you need to know this: No matter how deep the darkness of grief, depression, or spiritual exhaustion in your life, night does not possess the final word; the Sun of Righteousness has risen with healing in His wings. What it does for you: It floods your soul with warmth, hope, and vibrant freedom, releasing you from emotional captivity to leap with joy like calves let out of the stall into the morning sun. Relationship with Jesus: Jesus is the life-giving Sun of your soul; walking with Him means stepping out of shadows of fear and condemnation into His radiant beam of grace and peace.',
    historicalContext: {
      sourceAuthor: 'Prophet Malachi (c. 430–400 BC, Jerusalem)',
      sourceDate: 'c. 430 BC',
      sourceSetting: 'Second Temple community grappling with priestly corruption, spiritual apathy, and economic hardship.',
      fulfillmentAuthor: 'Luke the Evangelist (c. AD 60–62, recording Zechariah\'s prophecy)',
      fulfillmentDate: 'c. 4 BC',
      fulfillmentSetting: 'The Judean hill country at the birth of the forerunner John.',
      redemptiveBridge: 'Malachi\'s solar promise bridges the 400-year intertestamental silence directly into the songs of the Nativity.',
      scholarshipNotes: 'Ancient rabbinic sources (Bereshith Rabba 65) identified the "healing in His wings" as a messianic attribute of the coming Son of David.',
    },
  },
  'mal-4-2_Revelation 22:16': {
    id: 'mal-4-2_Revelation 22:16',
    anchorRef: 'Malachi 4:2',
    targetRef: 'Revelation 22:16',
    what: 'The Sun of Righteousness arising with healing in His wings (Mal 4:2) connected to Christ\'s self-proclamation in Revelation: "I am the root and the offspring of David, and the bright and morning star" (Rev 22:16).',
    when: 'Source Horizon: c. 430 BC. Target Horizon: c. AD 95 on Patmos.',
    how: 'Canonical celestial typology linking the close of the Old Testament to the close of the New Testament.',
    why: 'To crown the entire biblical canon with the radiant promise of Christ as the eternal Light.',
    ultimatePoint: 'Jesus Christ is the Bright and Morning Star and the Sun of Righteousness whose eternal light dispels all darkness forever.',
    personalRelevance: 'Why you need to know this: Christ\'s light is the final, eternal reality of the universe; the morning star guarantees that the full day of God\'s glory is at hand. What it does for you: It gives you persevering hope through the darkest night of trial. Relationship with Jesus: Jesus is the Morning Star that rises in your heart, guiding you until the dawn of eternity.',
    historicalContext: {
      sourceAuthor: 'Prophet Malachi (c. 430 BC)',
      sourceDate: 'c. 430 BC',
      sourceSetting: 'Second Temple Jerusalem.',
      fulfillmentAuthor: 'Apostle John (c. AD 95, Patmos)',
      fulfillmentDate: 'c. AD 95',
      fulfillmentSetting: 'Patmos vision of the New Jerusalem.',
      redemptiveBridge: 'From the close of the Old Testament in Malachi to the close of the New Testament in Revelation.',
    },
  },
  'mal-4-2_2 Peter 1:19': {
    id: 'mal-4-2_2 Peter 1:19',
    anchorRef: 'Malachi 4:2',
    targetRef: '2 Peter 1:19',
    what: 'Malachi\'s Sun of Righteousness connected to Peter\'s exhortation: "We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place, until the day dawn, and the day star arise in your hearts" (2 Pet 1:19).',
    when: 'Source Horizon: c. 430 BC. Target Horizon: c. AD 66–67.',
    how: 'Epistolary application of prophetic dawn to personal spiritual illumination.',
    why: 'To anchor believers in the sure word of prophecy until Christ\'s return.',
    ultimatePoint: 'The prophetic word shines as a light in darkness until the day star of Christ arises in our hearts.',
    personalRelevance: 'Why you need to know this: You can trust the Scriptures completely even when surrounding culture grows dark. What it does for you: It gives you a steady lamp for your feet in confusing times. Relationship with Jesus: Walking with Jesus means letting His prophetic Word illuminate your heart until He returns.',
    historicalContext: {
      sourceAuthor: 'Prophet Malachi (c. 430 BC)',
      sourceDate: 'c. 430 BC',
      sourceSetting: 'Jerusalem.',
      fulfillmentAuthor: 'Apostle Peter (c. AD 66–67, Rome)',
      fulfillmentDate: 'c. AD 66–67',
      fulfillmentSetting: 'Peter\'s final testament before martyrdom.',
      redemptiveBridge: 'Prophetic dawn shining from Malachi to Peter\'s apostolic flock.',
    },
  },
  'mal-4-2_Matthew 17:2': {
    id: 'mal-4-2_Matthew 17:2',
    anchorRef: 'Malachi 4:2',
    targetRef: 'Matthew 17:2',
    what: 'The Sun of Righteousness prefigured at the Transfiguration: "and his face did shine as the sun, and his raiment was white as the light" (Matt 17:2).',
    when: 'Source Horizon: c. 430 BC. Target Horizon: c. AD 30 on Mount Hermon.',
    how: 'Theophanic unveiling of Christ\'s uncreated divine glory.',
    why: 'To give the apostles a preview of the kingdom of God coming in power.',
    ultimatePoint: 'Jesus Christ is revealed in transfigured glory with a face shining like the sun, confirming His divine identity.',
    personalRelevance: 'Why you need to know this: The humble carpenter of Nazareth is the radiant Lord of glory whose face shines like the sun. What it does for you: It inspires awe and worship, casting out worldly fears. Relationship with Jesus: Walking with Jesus means gazing upon His transfigured beauty in faith.',
    historicalContext: {
      sourceAuthor: 'Prophet Malachi (c. 430 BC)',
      sourceDate: 'c. 430 BC',
      sourceSetting: 'Second Temple community.',
      fulfillmentAuthor: 'Apostle Matthew (c. AD 60–68)',
      fulfillmentDate: 'c. AD 30',
      fulfillmentSetting: 'Mount of Transfiguration in northern Galilee.',
      redemptiveBridge: 'Malachi\'s prophecy visually manifested on the holy mount before Peter, James, and John.',
    },
  },

  // Malachi 4:5-6 -> Luke 1:17 / Matthew 17:11-13
  'mal-4-5_Luke 1:17 / Matthew 17:11-13': {
    id: 'mal-4-5_Luke 1:17 / Matthew 17:11-13',
    anchorRef: 'Malachi 4:5-6',
    targetRef: 'Luke 1:17 / Matthew 17:11-13',
    what: 'The closing prophecy of the Old Testament canon promising the arrival of "Elijah the prophet before the coming of the great and dreadful day of the LORD" to turn hearts (Mal 4:5-6), fulfilled in the prophetic herald ministry of John the Baptist as declared by Gabriel in Luke 1:17 ("in the spirit and power of Elias") and affirmed by Jesus in Matthew 17:12-13.',
    when: 'Source Horizon: Post-exilic Jerusalem c. 430–400 BC at the conclusion of the Old Testament canon. Target Horizon: Judea c. 4 BC at the temple altar of incense (annunciation to Zechariah) and Jesus\' ministry c. AD 29–30.',
    how: 'Prophetic forerunner typology. Malachi\'s oracle stood at the precipice of 400 years of prophetic silence. The silence is broken when the angel Gabriel appears to the priest Zechariah in the Second Temple, quoting Malachi 4:6 verbatim to announce John\'s birth as the prophetic harbinger preparing the way for Messiah.',
    why: 'To demonstrate the seamless transition between the Old and New Testaments, proving that God\'s prophetic timeline did not lapse during the intertestamental silence, but culminated precisely on schedule with the herald of the King.',
    ultimatePoint: 'John the Baptist arrived in the spirit and power of Elijah to break four centuries of prophetic silence, turning hearts in repentance to prepare Israel for the arrival of Jesus Christ, the Sun of Righteousness.',
    personalRelevance: 'Why you need to know this: Even during seasons of spiritual waiting or apparent silence, God is actively preparing hearts and orchestrating divine breakthroughs behind the scenes. What it does for you: It inspires genuine heart-reconciliation in your family and relationships, keeping you spiritually awake, alert, and prepared for Christ\'s work in your life. Relationship with Jesus: Jesus approaches you not with harsh rejection, but with the patient invitation of a herald who turns your heart back to the Father in tender restorative fellowship.',
    historicalContext: {
      sourceAuthor: 'Prophet Malachi (c. 430–400 BC, Jerusalem)',
      sourceDate: 'c. 430 BC',
      sourceSetting: 'Second Temple community in post-exilic Judah, marked by priestly cynicism, spiritual apathy, and mixed marriages.',
      fulfillmentAuthor: 'Luke the Evangelist / Apostle Matthew (c. AD 60–65)',
      fulfillmentDate: 'c. 4 BC / AD 30',
      fulfillmentSetting: 'Herod\'s reconstructed Second Temple during the morning incense offering in Roman-occupied Judea.',
      redemptiveBridge: 'Malachi 4:5-6 forms the canonical arch connecting the close of the Hebrew Bible directly to the opening chapter of the New Testament gospel.',
    },
  },
  'mal-4-5_Luke 1:17 / Matt 17:11-13': {
    id: 'mal-4-5_Luke 1:17 / Matthew 17:11-13',
    anchorRef: 'Malachi 4:5-6',
    targetRef: 'Luke 1:17 / Matthew 17:11-13',
    what: 'The closing prophecy of the Old Testament canon promising the arrival of "Elijah the prophet before the coming of the great and dreadful day of the LORD" to turn hearts (Mal 4:5-6), fulfilled in the prophetic herald ministry of John the Baptist.',
    when: 'Source Horizon: Post-exilic Jerusalem c. 430–400 BC. Target Horizon: Judea c. 4 BC at the temple altar of incense.',
    how: 'Prophetic forerunner typology linking the Hebrew canon close to the Gospel dawn.',
    why: 'To demonstrate the seamless transition between the Old and New Testaments across 400 silent years.',
    ultimatePoint: 'John the Baptist arrived in the spirit and power of Elijah to break four centuries of prophetic silence, turning hearts in repentance to prepare Israel for Jesus Christ.',
    personalRelevance: 'Why you need to know this: God\'s timeline never lapses, even through 400 silent years. What it does for you: It gives you patience when waiting for God\'s promises to unfold. Relationship with Jesus: Jesus prepares the way into your heart with gentle convicting grace.',
    historicalContext: {
      sourceAuthor: 'Prophet Malachi (c. 430–400 BC, Jerusalem)',
      sourceDate: 'c. 430 BC',
      sourceSetting: 'Second Temple community in post-exilic Judah.',
      fulfillmentAuthor: 'Luke the Evangelist / Apostle Matthew (c. AD 60–65)',
      fulfillmentDate: 'c. 4 BC / AD 30',
      fulfillmentSetting: 'Herod\'s reconstructed Second Temple during incense offering.',
      redemptiveBridge: 'Malachi 4:5-6 forms the canonical arch bridging the Old Testament to the Gospels.',
    },
  },

  // 8. INCARNATION ERA: Matthew 1:22-23 -> Isaiah 7:14
  'mat-1-22_Isaiah 7:14': {
    id: 'mat-1-22_Isaiah 7:14',
    anchorRef: 'Matthew 1:22-23',
    targetRef: 'Isaiah 7:14',
    what: 'The apostolic declaration of the virginal conception of Jesus Christ fulfilling Isaiah\'s royal prophecy: "Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying, Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us."',
    when: 'Source Horizon: Roman Judea c. 4–3 BC at the incarnation of Jesus Christ. Target Horizon: 8th century BC (735 BC) during the Syro-Ephraimite war in Jerusalem under King Ahaz.',
    how: 'Apostolic retrospective citation and sensus plenior. Matthew demonstrates that the historical sign given to the house of David in Isaiah 7:14 reaches its ultimate, miraculous reality in the virginal conception of Jesus by the Holy Ghost, joining true humanity and uncreated deity in one Divine Person.',
    why: 'To establish that Jesus Christ is not merely an inspired human prophet or descendant of David, but Immanuel—the living embodiment of God dwelling with His people to effect salvation from sin.',
    ultimatePoint: 'Jesus Christ is Immanuel, God incarnate with us: conceived by the Holy Ghost and born of a virgin, uniting infinite deity with sinless humanity to save His people from their sins.',
    personalRelevance: 'Why you need to know this: You are never truly alone, abandoned, or misunderstood in your trials; God has stepped into human vulnerability as Immanuel—God with us. What it does for you: It dispels loneliness, anxiety, and feelings of insignificance, reassuring you that the Infinite Creator has drawn near to share in your daily life. Relationship with Jesus: Jesus is your ever-present companion and Savior who walked the dust of our world, understands your weaknesses, and abides within you through every trial and joy.',
    historicalContext: {
      sourceAuthor: 'Apostle Matthew (c. AD 60–68, Judea/Antioch)',
      sourceDate: 'c. 4 BC',
      sourceSetting: 'A humble carpenter\'s home in Nazareth and Bethlehem amidst Roman imperial taxation.',
      fulfillmentAuthor: 'Prophet Isaiah (c. 740–680 BC, Jerusalem)',
      fulfillmentDate: 'c. 735 BC',
      fulfillmentSetting: 'King Ahaz trembling before the allied armies of Syria and Northern Israel, refusing to trust Yahweh.',
      redemptiveBridge: 'The apostolic retrospective confirms that the ancient royal prophecy found its true intended target in the virginal birth of the Son of God.',
      scholarshipNotes: 'Matthew confirms the Septuagint translation of the Hebrew עַלְמָה (ʿalmah) as the explicit Greek παρθένος (parthenos — virgin), clarifying the supernatural nature of the conception.',
    },
  },
  'mat-1-22_Isa 7:14': {
    id: 'mat-1-22_Isaiah 7:14',
    anchorRef: 'Matthew 1:22-23',
    targetRef: 'Isaiah 7:14',
    what: 'The apostolic declaration of the virginal conception of Jesus Christ fulfilling Isaiah\'s royal prophecy of Immanuel.',
    when: 'Source Horizon: Roman Judea c. 4–3 BC. Target Horizon: 8th century BC (735 BC) in Jerusalem.',
    how: 'Apostolic retrospective citation and sensus plenior.',
    why: 'To establish that Jesus Christ is Immanuel—God dwelling with His people.',
    ultimatePoint: 'Jesus Christ is Immanuel, God incarnate with us, uniting infinite deity with sinless humanity.',
    personalRelevance: 'Why you need to know this: You are never alone; God has entered our world as Immanuel. What it does for you: It banishes isolation and fear. Relationship with Jesus: Jesus is God with you in every moment of life.',
    historicalContext: {
      sourceAuthor: 'Apostle Matthew (c. AD 60–68, Judea)',
      sourceDate: 'c. 4 BC',
      sourceSetting: 'Nazareth and Bethlehem amidst Roman imperial taxation.',
      fulfillmentAuthor: 'Prophet Isaiah (c. 740–680 BC, Jerusalem)',
      fulfillmentDate: 'c. 735 BC',
      fulfillmentSetting: 'King Ahaz trembling before the allied armies of Syria and Northern Israel.',
      redemptiveBridge: 'The apostolic retrospective confirms that royal prophecy targeted the virginal birth of Christ.',
    },
  },
  'mat-1-23_Isaiah 7:14': {
    id: 'mat-1-23_Isaiah 7:14',
    anchorRef: 'Matthew 1:22-23',
    targetRef: 'Isaiah 7:14',
    what: 'The apostolic declaration of the virginal conception of Jesus Christ fulfilling Isaiah\'s royal prophecy: "Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us."',
    when: 'Source Horizon: Roman Judea c. 4–3 BC at the incarnation of Jesus Christ. Target Horizon: 8th century BC (735 BC) during the Syro-Ephraimite war in Jerusalem.',
    how: 'Apostolic retrospective citation and sensus plenior.',
    why: 'To establish that Jesus Christ is Immanuel—the living embodiment of God dwelling with His people to effect salvation from sin.',
    ultimatePoint: 'Jesus Christ is Immanuel, God incarnate with us: conceived by the Holy Ghost and born of a virgin, uniting infinite deity with sinless humanity.',
    personalRelevance: 'Why you need to know this: God has drawn near to you personally in human flesh. What it does for you: It gives you intimate access to God without terror. Relationship with Jesus: Jesus is Immanuel, dwelling in your heart by faith.',
    historicalContext: {
      sourceAuthor: 'Apostle Matthew (c. AD 60–68, Judea)',
      sourceDate: 'c. 4 BC',
      sourceSetting: 'A humble carpenter\'s home in Nazareth and Bethlehem amidst Roman imperial taxation.',
      fulfillmentAuthor: 'Prophet Isaiah (c. 740–680 BC, Jerusalem)',
      fulfillmentDate: 'c. 735 BC',
      fulfillmentSetting: 'King Ahaz trembling before the allied armies of Syria and Northern Israel.',
      redemptiveBridge: 'The apostolic retrospective confirms that royal prophecy targeted the virginal birth of Christ.',
    },
  },
  'mat-1-23_Isa 7:14': {
    id: 'mat-1-23_Isaiah 7:14',
    anchorRef: 'Matthew 1:22-23',
    targetRef: 'Isaiah 7:14',
    what: 'The apostolic declaration of the virginal conception of Jesus Christ fulfilling Isaiah\'s royal prophecy of Immanuel.',
    when: 'Source Horizon: Roman Judea c. 4–3 BC. Target Horizon: 8th century BC (735 BC) in Jerusalem.',
    how: 'Apostolic retrospective citation and sensus plenior.',
    why: 'To establish that Jesus Christ is Immanuel—God dwelling with His people.',
    ultimatePoint: 'Jesus Christ is Immanuel, God incarnate with us, uniting infinite deity with sinless humanity.',
    personalRelevance: 'Why you need to know this: God has stepped into human history as Immanuel to save you. What it does for you: It delivers you from separation from God. Relationship with Jesus: Jesus is with you always, even to the end of the age.',
    historicalContext: {
      sourceAuthor: 'Apostle Matthew (c. AD 60–68, Judea)',
      sourceDate: 'c. 4 BC',
      sourceSetting: 'Nazareth and Bethlehem amidst Roman imperial taxation.',
      fulfillmentAuthor: 'Prophet Isaiah (c. 740–680 BC, Jerusalem)',
      fulfillmentDate: 'c. 735 BC',
      fulfillmentSetting: 'King Ahaz trembling before the allied armies of Syria and Northern Israel.',
      redemptiveBridge: 'The apostolic retrospective confirms that royal prophecy targeted the virginal birth of Christ.',
    },
  },

  // 9. APOSTOLIC ERA: Romans 5:14 -> 1 Corinthians 15:22
  'rom-5-14_1 Corinthians 15:22': {
    id: 'rom-5-14_1 Corinthians 15:22',
    anchorRef: 'Romans 5:14',
    targetRef: '1 Corinthians 15:22',
    what: 'The federal headship typology comparing the first Adam and the Last Adam: "Adam... who is the figure of him that was to come" (Rom 5:14) connected to "For as in Adam all die, even so in Christ shall all be made alive" (1 Cor 15:22).',
    when: 'Source Horizon: Apostle Paul writing from Corinth c. AD 57 to the church at Rome. Target Horizon: Paul writing from Ephesus c. AD 55 to the church in Corinth.',
    how: 'Apostolic covenantal theology and federal representation. Paul identifies Adam as a τύπος (typos — figure/pattern) of Jesus Christ: just as Adam\'s disobedience imputed sin, condemnation, and physical death to his natural posterity, so Christ\'s obedience and bodily resurrection impute righteousness, justification, and eternal life to all who are spiritually united to Him.',
    why: 'To demonstrate the cosmic symmetry and certainty of salvation: death did not enter through a flaw in God\'s creation, but through one representative man; therefore redemption is accomplished through one superior representative Man whose grace infinitely superabounds over the trespass.',
    ultimatePoint: 'Jesus Christ is the triumphant Last Adam and Second Federal Head of humanity who breaks the dominion of sin and death, reversing the Edenic catastrophe and guaranteeing bodily resurrection and eternal life to all who belong to Him.',
    personalRelevance: 'Why you need to know this: While your lineage in Adam passed down guilt, decay, and death, your spiritual union with Christ completely overturns your past with new, indestructible life. What it does for you: It strips death of its terror and breaks the power of habitual sin, giving you the unshakable certainty of bodily resurrection and victorious grace. Relationship with Jesus: Jesus is your triumphant Last Adam and Second Federal Head; in Him you are made fully alive, legally justified, and securely bound to God for all eternity.',
    historicalContext: {
      sourceAuthor: 'Apostle Paul (c. AD 57, Corinth)',
      sourceDate: 'c. AD 57',
      sourceSetting: 'Paul dictating the monumental epistle to the Romans before carrying the collection to Jerusalem, laying out the cosmic architecture of redemption.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 55, Ephesus)',
      fulfillmentDate: 'c. AD 55',
      fulfillmentSetting: 'The church in commercial Corinth grappling with Greek philosophical skepticism regarding the bodily resurrection of the dead.',
      redemptiveBridge: 'The two covenantal heads of human history: the first Adam in the garden of dust, and the Last Adam in the garden of resurrection.',
      scholarshipNotes: 'Paul uses the Greek term τύπος (typos) in Romans 5:14 to establish the formal hermeneutical category of typology for the entire New Testament canon.',
    },
  },
  'rom-5-14_1 Cor 15:22': {
    id: 'rom-5-14_1 Corinthians 15:22',
    anchorRef: 'Romans 5:14',
    targetRef: '1 Corinthians 15:22',
    what: 'The federal headship typology comparing the first Adam and the Last Adam: "Adam... who is the figure of him that was to come" (Rom 5:14) connected to "For as in Adam all die, even so in Christ shall all be made alive" (1 Cor 15:22).',
    when: 'Source Horizon: Apostle Paul writing from Corinth c. AD 57. Target Horizon: Paul writing from Ephesus c. AD 55.',
    how: 'Apostolic covenantal theology and federal representation.',
    why: 'To demonstrate the cosmic symmetry and certainty of salvation through the Last Adam.',
    ultimatePoint: 'Jesus Christ is the triumphant Last Adam and Second Federal Head of humanity who breaks the dominion of sin and death.',
    personalRelevance: 'Why you need to know this: While your lineage in Adam brought decay, your union with Christ brings eternal life. What it does for you: It removes fear of death and guarantees resurrection. Relationship with Jesus: In Christ you are made fully alive forever.',
    historicalContext: {
      sourceAuthor: 'Apostle Paul (c. AD 57, Corinth)',
      sourceDate: 'c. AD 57',
      sourceSetting: 'Paul laying out the cosmic architecture of redemption in Romans.',
      fulfillmentAuthor: 'Apostle Paul (c. AD 55, Ephesus)',
      fulfillmentDate: 'c. AD 55',
      fulfillmentSetting: 'The church in Corinth grappling with resurrection skepticism.',
      redemptiveBridge: 'The first Adam in the garden of dust, and the Last Adam in the garden of resurrection.',
    },
  },
};

/**
 * Intelligent hermeneutical generator that computes a complete, rigorous 6-part
 * interrogation for any connection edge not explicitly curated. Supports all 4
 * canonical directional combinations: OT➔NT, NT➔OT, NT➔NT, and OT➔OT.
 */
export function generateConnectionInterrogation(params: {
  anchorId: string;
  anchorRef: string;
  targetRef: string;
  anchorVerseText: string;
  targetVerseText: string;
  principle?: string;
}): ConnectionInterrogation {
  const { anchorId, anchorRef, targetRef, anchorVerseText, targetVerseText, principle } = params;
  const key = `${anchorId}_${targetRef}`;

  if (CURATED_INTERROGATIONS[key]) {
    return CURATED_INTERROGATIONS[key];
  }

  // Check by anchor ID alone as fallback
  const directAnchorMatch = Object.values(CURATED_INTERROGATIONS).find(
    ci => ci.anchorRef.toLowerCase() === anchorRef.toLowerCase() && ci.targetRef.toLowerCase() === targetRef.toLowerCase()
  );
  if (directAnchorMatch) {
    return directAnchorMatch;
  }

  // Canonical classification using the 66-book Protestant registry
  const isOtSource = isOldTestament(anchorRef);
  const isNtSource = isNewTestament(anchorRef);
  const isOtTarget = isOldTestament(targetRef);
  const isNtTarget = isNewTestament(targetRef);

  const cleanAnchor = anchorVerseText.replace(/\[[^\]]*\]/g, '').replace(/\s+/g, ' ').trim();
  const cleanTarget = targetVerseText.replace(/\[[^\]]*\]/g, '').replace(/\s+/g, ' ').trim();
  const cleanPrinciple = (principle || 'The Scriptures reveal a single harmonious redemptive architecture centered on Jesus Christ.').trim();

  let what = '';
  let when = '';
  let how = '';
  let why = '';
  let ultimatePoint = '';
  let personalRelevance = '';

  if (isOtSource && isNtTarget) {
    // Mode 1: OT ➔ NT (Prophetic & Typological Culmination)
    what = `The prophetic and typological convergence between the Old Testament foundation (${anchorRef}) and its New Testament culmination in Christ (${targetRef}). The source declares: “${cleanAnchor.slice(0, 100)}…”, which finds canonical resolution in the apostolic witness: “${cleanTarget.slice(0, 100)}…”.`;
    when = `Historical Progression: From the Old Testament covenant era (${anchorRef}) through centuries of redemptive anticipation to the apostolic New Testament era (${targetRef}) following the incarnation, crucifixion, and resurrection of Jesus Christ.`;
    how = `Apostolic Christological interpretation and typological fulfillment. The Holy Spirit guided the New Testament writers to unveil the deeper redemptive mystery hidden within the Hebrew Scriptures, demonstrating that what was prefigured in shadow is now realized in substance in Christ.`;
    why = `To validate the divine inspiration and unity of the 66 canonical books, demonstrating that God's redemptive covenant was established according to eternal purpose rather than human invention, and to anchor the believer's faith in the historic faithfulness of God.`;
    ultimatePoint = `Jesus Christ is the ultimate fulfillment and living reality of this connection, proving that all the promises of God in Him are Yes, and in Him Amen (2 Cor 1:20).`;
    personalRelevance = `Why you need to know this: You need to know that your redemption is grounded in God's ancient covenant faithfulness rather than fluctuating human feelings or circumstances. What it does for you: It delivers you from anxiety and spiritual doubt, assuring you that what God promised centuries ago in shadow, He has unfailingly fulfilled in Christ for your salvation. Relationship with Jesus: Jesus is your personal Promise-Keeper; walking with Him means resting in a Savior who has sovereignly ordered all history to secure your redemption.`;
  } else if (isNtSource && isOtTarget) {
    // Mode 2: NT ➔ OT (Apostolic Retrospective & Prophetic Foundation)
    what = `Apostolic retrospective and prophetic citation linking the New Testament proclamation in ${anchorRef} back to its foundational Old Testament root in ${targetRef}. The apostolic witness (“${cleanAnchor.slice(0, 100)}…”) directly appeals to the ancient Hebrew prophetic deposit (“${cleanTarget.slice(0, 100)}…”).`;
    when = `Apostolic Retrospective: The 1st-century apostolic church (${anchorRef}) looking back across redemptive history to the Hebrew Scriptures (${targetRef}) to authenticate the messianic identity, sacrifice, and victory of Jesus Christ.`;
    how = `Sensus plenior and apostolic hermeneutics. The New Testament writers demonstrate that the gospel is not an abrupt novel sect, but the organic, sovereign culmination of everything written in the Law of Moses, the Prophets, and the Psalms (Luke 24:44).`;
    why = `To establish the scriptural authority and theological necessity of Christ's person and work, proving to Jews and Gentiles alike that the events of the gospel transpired in exact accordance with the divine promises spoken of old by the holy prophets.`;
    ultimatePoint = `The gospel of Jesus Christ is firmly anchored in the historic bedrock of Old Testament revelation, demonstrating that God's single eternal plan of redemption has unfolded without interruption.`;
    personalRelevance = `Why you need to know this: You need to know that apostolic Christianity is not a novel human religion, but the divine climax of God's historic revelation across centuries. What it does for you: It strengthens your spiritual root system against skepticism and secular culture, anchoring your faith in the unified witness of Scripture. Relationship with Jesus: Jesus is the eternal Lord revealed in the Law and the Prophets; walking with Him means abiding in the timeless truth that has sustained believers across all ages.`;
  } else if (isNtSource && isNtTarget) {
    // Mode 3: NT ➔ NT (Apostolic Harmony)
    what = `Apostolic doctrinal consistency and cross-epistle harmony between ${anchorRef} and ${targetRef}, establishing the unity of apostolic teaching regarding the gospel and the Christian life.`;
    when = `Apostolic Era (1st Century AD): Unfolding within the early church as the Apostles established doctrine and pastoral guidance across the Greco-Roman world.`;
    how = `Harmonious apostolic witness comparing scripture with scripture under the guidance of the Holy Spirit.`;
    why = `To build up the body of Christ on the foundational doctrine of the apostles and prophets, Jesus Christ Himself being the chief cornerstone.`;
    ultimatePoint = `The gospel revealed in Christ forms an unshakeable, unified body of truth that equips believers to stand firm in faith and obedience.`;
    personalRelevance = `Why you need to know this: You need to know that God's apostolic guidance for your daily life is completely harmonious, reliable, and sufficient. What it does for you: It gives you clear moral and spiritual direction, guarding your heart from confusion and equipping you to stand firm in faith. Relationship with Jesus: Jesus speaks to you through the unified witness of His apostles; abiding in His Word deepens your personal fellowship with Him and transforms your character.`;
  } else {
    // Mode 4: OT ➔ OT (Covenant Progression)
    what = `Canonical progression within the Hebrew Scriptures, connecting the revelation in ${anchorRef} to the subsequent development in ${targetRef}.`;
    when = `Old Testament Theocratic Era: Tracing God's progressive self-revelation across the history of Israel from patriarchal origins through the monarchy, exile, and restoration.`;
    how = `Covenantal continuity and progressive revelation within the Old Testament canon.`;
    why = `To preserve the covenant promises and educate Israel in the holiness, justice, and mercy of God.`;
    ultimatePoint = `God's covenant faithfulness remains unbroken through every generation, pointing forward to the coming Redeemer.`;
    personalRelevance = `Why you need to know this: You need to know that God works patiently across generations, using ordinary people and through seasons of waiting to advance His redemptive plan. What it does for you: It builds endurance and hope during your personal trials, reminding you that God's delays are never denials of His promises. Relationship with Jesus: Every covenant development in Scripture points toward Jesus as its crown; trusting Him means knowing that He will faithfully complete the good work He began in you.`;
  }

  if (cleanPrinciple.length > 20) {
    why = `${cleanPrinciple} ${why}`;
  }

  return {
    id: key,
    anchorRef,
    targetRef,
    what,
    when,
    how,
    why,
    ultimatePoint,
    personalRelevance,
    historicalContext: {
      sourceAuthor: getAuthorForRef(anchorRef),
      sourceDate: isOtSource ? 'Covenant Antiquity' : 'Apostolic Era (1st Century AD)',
      sourceSetting: `The historical and cultural world of ${extractCanonicalBook(anchorRef) || anchorRef}.`,
      fulfillmentAuthor: getAuthorForRef(targetRef),
      fulfillmentDate: isNtTarget ? 'Apostolic Era (c. AD 30–95)' : 'Covenant Antiquity / Prophetic Era',
      fulfillmentSetting: `The historical and canonical context of ${extractCanonicalBook(targetRef) || targetRef}.`,
      redemptiveBridge: isOtSource && isNtTarget
        ? 'Bridging Old Testament covenant promise to its ultimate New Testament fulfillment in Jesus Christ.'
        : isNtSource && isOtTarget
        ? 'Reconnecting the apostolic proclamation back to its foundational roots in the Hebrew prophets.'
        : 'Tracing the unbroken consistency of divine revelation across canonical history.',
    },
  };
}

/**
 * Retrieve the full 6-part interrogation for a connection, checking curated entries
 * first and falling back to algorithmic hermeneutical derivation.
 */
export function getConnectionInterrogation(
  anchorId: string,
  targetRef: string,
  anchorRef: string,
  anchorVerseText: string,
  targetVerseText: string,
  principle?: string
): ConnectionInterrogation {
  return generateConnectionInterrogation({
    anchorId,
    anchorRef,
    targetRef,
    anchorVerseText,
    targetVerseText,
    principle,
  });
}
