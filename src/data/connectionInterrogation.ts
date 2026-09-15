/**
 * Rigorous biblical interrogation and historical context for connections.
 *
 * Every connection between a biblical anchor verse and a fulfillment ref
 * answers five fundamental interrogations:
 *  1. WHAT: The verbal, textual, and thematic connection.
 *  2. WHEN: Chronological dating, epochs, and redemptive timeline.
 *  3. HOW: Exegetical and hermeneutical mechanic (original languages, typology, direct prophecy).
 *  4. WHY: Divine necessity and theological purpose.
 *  5. ULTIMATE POINT: The supreme Christological or redemptive climax.
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
    when: 'Source Horizon: Primeval origin of the created space-time continuum, historically recorded under divine inspiration by Moses c. 1446–1406 BC during the wilderness journey from Egypt to Canaan. Target Horizon: The Apostle John writing in Ephesus c. AD 85–95 near the conclusion of the apostolic era, penetrating behind the historical moment of Genesis 1:1 into the timeless eternity where the Word already possessed continuous existence (ἦν, ēn) before any created thing came into being (ἐγένετο, egeneto).',
    how: 'Apostolic Christological interrogation of the Hebrew creation account. John employs the Greek preposition διά with the genitive (δι\' αὐτοῦ, di\' autou — "through Him") to establish Jesus Christ as the active, mediate Divine Agent through whom the entire created universe was brought into being from nothing (creatio ex nihilo). John further reinforces this through an absolute universal negative (χωρὶς αὐτοῦ ἐγένετο οὐדὲ ἕν, chōris autou egeneto oude hen — "apart from Him not even one thing came into existence that has come into existence"), grammatically and syntactically excluding the Son from the realm of created things.',
    why: 'To establish the absolute, uncreated deity and cosmic supremacy of Jesus Christ before recounting His incarnation ("And the Word was made flesh", John 1:14). If Jesus were a created being or intermediate angelic agent, His sacrifice would lack infinite redemptive value. Only the Divine Agent who originally designed and authored the first creation possesses the divine prerogative, authority, and creative power to enact the New Creation (2 Cor 5:17) and redeem fallen humanity.',
    ultimatePoint: 'Jesus Christ was the active, personal Creative Agent in creating the world: all things were made through Him, and without Him was not anything made that was made. The God who spoke the universe into being at Genesis 1:1 is the very Lord who entered human history to redeem what He had formed.',
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
    id: 'jos-5-14_Revelation 19:11-16',
    anchorRef: 'Joshua 5:13-15',
    targetRef: 'Revelation 19:11-16',
    what: 'The Christophany of the Captain of the LORD\'s host standing before Jericho with drawn sword (Josh 5:13-15) culminating in the apocalyptic appearance of the King of Kings riding forth with the armies of heaven to conquer in righteousness (Rev 19:11-16).',
    when: 'Source Horizon: c. 1406 BC at the plains of Jericho on the eve of the conquest of Canaan. Target Horizon: Late 1st century AD (c. AD 95), John in exile on Patmos beholding the consummation of all human history.',
    how: 'Typological and apocalyptic continuation of the Divine Warrior motif.',
    why: 'To assure God\'s people that the battle against demonic powers and corrupt worldly empires is led by the divine Redeemer Himself.',
    ultimatePoint: 'Jesus Christ is the divine Commander of heaven\'s armies, the Warrior-King who leads His covenant people to victory.',
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
    id: 'jos-5-14_Revelation 19:11-16',
    anchorRef: 'Joshua 5:13-15',
    targetRef: 'Revelation 19:11-16',
    what: 'The Christophany of the Captain of the LORD\'s host standing before Jericho with drawn sword (Josh 5:13-15) culminating in the apocalyptic appearance of the King of Kings riding forth with the armies of heaven to conquer in righteousness (Rev 19:11-16).',
    when: 'Source Horizon: c. 1406 BC at the plains of Jericho on the eve of the conquest of Canaan. Target Horizon: Late 1st century AD (c. AD 95), John in exile on Patmos beholding the consummation of all human history.',
    how: 'Typological and apocalyptic continuation of the Divine Warrior motif.',
    why: 'To assure God\'s people that the battle against demonic powers and corrupt worldly empires is led by the divine Redeemer Himself.',
    ultimatePoint: 'Jesus Christ is the divine Commander of heaven\'s armies, the Warrior-King who leads His covenant people to victory.',
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

  // 7. SECOND TEMPLE / INTERTESTAMENTAL: Malachi 4:5-6 -> Luke 1:17 / Matthew 17:11-13
  'mal-4-5_Luke 1:17 / Matthew 17:11-13': {
    id: 'mal-4-5_Luke 1:17 / Matthew 17:11-13',
    anchorRef: 'Malachi 4:5-6',
    targetRef: 'Luke 1:17 / Matthew 17:11-13',
    what: 'The closing prophecy of the Old Testament canon promising the arrival of "Elijah the prophet before the coming of the great and dreadful day of the LORD" to turn hearts (Mal 4:5-6), fulfilled in the prophetic herald ministry of John the Baptist as declared by Gabriel in Luke 1:17 ("in the spirit and power of Elias") and affirmed by Jesus in Matthew 17:12-13.',
    when: 'Source Horizon: Post-exilic Jerusalem c. 430–400 BC at the conclusion of the Old Testament canon. Target Horizon: Judea c. 4 BC at the temple altar of incense (annunciation to Zechariah) and Jesus\' ministry c. AD 29–30.',
    how: 'Prophetic forerunner typology. Malachi\'s oracle stood at the precipice of 400 years of prophetic silence. The silence is broken when the angel Gabriel appears to the priest Zechariah in the Second Temple, quoting Malachi 4:6 verbatim to announce John\'s birth as the prophetic harbinger preparing the way for Messiah.',
    why: 'To demonstrate the seamless transition between the Old and New Testaments, proving that God\'s prophetic timeline did not lapse during the intertestamental silence, but culminated precisely on schedule with the herald of the King.',
    ultimatePoint: 'John the Baptist arrived in the spirit and power of Elijah to break four centuries of prophetic silence, turning hearts in repentance to prepare Israel for the arrival of Jesus Christ, the Sun of Righteousness.',
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
    id: 'mat-1-22_Isaiah 7:14',
    anchorRef: 'Matthew 1:22-23',
    targetRef: 'Isaiah 7:14',
    what: 'The apostolic declaration of the virginal conception of Jesus Christ fulfilling Isaiah\'s royal prophecy: "Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us."',
    when: 'Source Horizon: Roman Judea c. 4–3 BC at the incarnation of Jesus Christ. Target Horizon: 8th century BC (735 BC) during the Syro-Ephraimite war in Jerusalem.',
    how: 'Apostolic retrospective citation and sensus plenior.',
    why: 'To establish that Jesus Christ is Immanuel—the living embodiment of God dwelling with His people to effect salvation from sin.',
    ultimatePoint: 'Jesus Christ is Immanuel, God incarnate with us: conceived by the Holy Ghost and born of a virgin, uniting infinite deity with sinless humanity.',
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
    id: 'mat-1-22_Isaiah 7:14',
    anchorRef: 'Matthew 1:22-23',
    targetRef: 'Isaiah 7:14',
    what: 'The apostolic declaration of the virginal conception of Jesus Christ fulfilling Isaiah\'s royal prophecy of Immanuel.',
    when: 'Source Horizon: Roman Judea c. 4–3 BC. Target Horizon: 8th century BC (735 BC) in Jerusalem.',
    how: 'Apostolic retrospective citation and sensus plenior.',
    why: 'To establish that Jesus Christ is Immanuel—God dwelling with His people.',
    ultimatePoint: 'Jesus Christ is Immanuel, God incarnate with us, uniting infinite deity with sinless humanity.',
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
 * Intelligent hermeneutical generator that computes a complete, rigorous 5-part
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

  if (isOtSource && isNtTarget) {
    // Mode 1: OT ➔ NT (Prophetic & Typological Culmination)
    what = `The prophetic and typological convergence between the Old Testament foundation (${anchorRef}) and its New Testament culmination in Christ (${targetRef}). The source declares: “${cleanAnchor.slice(0, 100)}…”, which finds canonical resolution in the apostolic witness: “${cleanTarget.slice(0, 100)}…”.`;
    when = `Historical Progression: From the Old Testament covenant era (${anchorRef}) through centuries of redemptive anticipation to the apostolic New Testament era (${targetRef}) following the incarnation, crucifixion, and resurrection of Jesus Christ.`;
    how = `Apostolic Christological interpretation and typological fulfillment. The Holy Spirit guided the New Testament writers to unveil the deeper redemptive mystery hidden within the Hebrew Scriptures, demonstrating that what was prefigured in shadow is now realized in substance in Christ.`;
    why = `To validate the divine inspiration and unity of the 66 canonical books, demonstrating that God's redemptive covenant was established according to eternal purpose rather than human invention, and to anchor the believer's faith in the historic faithfulness of God.`;
    ultimatePoint = `Jesus Christ is the ultimate fulfillment and living reality of this connection, proving that all the promises of God in Him are Yes, and in Him Amen (2 Cor 1:20).`;
  } else if (isNtSource && isOtTarget) {
    // Mode 2: NT ➔ OT (Apostolic Retrospective & Prophetic Foundation)
    what = `Apostolic retrospective and prophetic citation linking the New Testament proclamation in ${anchorRef} back to its foundational Old Testament root in ${targetRef}. The apostolic witness (“${cleanAnchor.slice(0, 100)}…”) directly appeals to the ancient Hebrew prophetic deposit (“${cleanTarget.slice(0, 100)}…”).`;
    when = `Apostolic Retrospective: The 1st-century apostolic church (${anchorRef}) looking back across redemptive history to the Hebrew Scriptures (${targetRef}) to authenticate the messianic identity, sacrifice, and victory of Jesus Christ.`;
    how = `Sensus plenior and apostolic hermeneutics. The New Testament writers demonstrate that the gospel is not an abrupt novel sect, but the organic, sovereign culmination of everything written in the Law of Moses, the Prophets, and the Psalms (Luke 24:44).`;
    why = `To establish the scriptural authority and theological necessity of Christ's person and work, proving to Jews and Gentiles alike that the events of the gospel transpired in exact accordance with the divine promises spoken of old by the holy prophets.`;
    ultimatePoint = `The gospel of Jesus Christ is firmly anchored in the historic bedrock of Old Testament revelation, demonstrating that God's single eternal plan of redemption has unfolded without interruption.`;
  } else if (isNtSource && isNtTarget) {
    // Mode 3: NT ➔ NT (Apostolic Harmony)
    what = `Apostolic doctrinal consistency and cross-epistle harmony between ${anchorRef} and ${targetRef}, establishing the unity of apostolic teaching regarding the gospel and the Christian life.`;
    when = `Apostolic Era (1st Century AD): Unfolding within the early church as the Apostles established doctrine and pastoral guidance across the Greco-Roman world.`;
    how = `Harmonious apostolic witness comparing scripture with scripture under the guidance of the Holy Spirit.`;
    why = `To build up the body of Christ on the foundational doctrine of the apostles and prophets, Jesus Christ Himself being the chief cornerstone.`;
    ultimatePoint = `The gospel revealed in Christ forms an unshakeable, unified body of truth that equips believers to stand firm in faith and obedience.`;
  } else {
    // Mode 4: OT ➔ OT (Covenant Progression)
    what = `Canonical progression within the Hebrew Scriptures, connecting the revelation in ${anchorRef} to the subsequent development in ${targetRef}.`;
    when = `Old Testament Theocratic Era: Tracing God's progressive self-revelation across the history of Israel from patriarchal origins through the monarchy, exile, and restoration.`;
    how = `Covenantal continuity and progressive revelation within the Old Testament canon.`;
    why = `To preserve the covenant promises and educate Israel in the holiness, justice, and mercy of God.`;
    ultimatePoint = `God's covenant faithfulness remains unbroken through every generation, pointing forward to the coming Redeemer.`;
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
 * Retrieve the full 5-part interrogation for a connection, checking curated entries
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
