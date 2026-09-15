/**
 * Comprehensive historical context for biblical connections across the canon.
 *
 * Provides historical era frameworks, chronological dates, geopolitical settings,
 * archaeological insights, and redemptive bridges for every biblical connection.
 */

import {
  CURATED_INTERROGATIONS,
  extractCanonicalBook,
  getAuthorForRef,
} from './connectionInterrogation';

export interface BiblicalEra {
  id: string;
  name: string;
  dateRange: string;
  summary: string;
  geopoliticalBackdrop: string;
  keyEvents: string[];
  canonicalBooks: string[];
}

export const BIBLICAL_ERAS: BiblicalEra[] = [
  {
    id: 'creation',
    name: 'Primeval & Creation',
    dateRange: 'Creation — c. 2100 BC',
    summary: 'Cosmic origin, creation of humanity in the Divine image, the Fall in Eden, primeval genealogies, the global Deluge, and the dispersion at Babel.',
    geopoliticalBackdrop: 'Emergence of early Mesopotamian civilization along the Tigris and Euphrates. Polytheistic cosmologies (Enuma Elish, Atrahasis) depicted creation as the byproduct of violent conflict among capricious deities; Genesis reveals transcendent, holy monotheism where one God sovereignly speaks all things into harmonious order.',
    keyEvents: ['Creation of Heaven & Earth', 'Fall of Humanity & Protoevangelium (Gen 3:15)', 'Cain & Abel', 'Global Deluge & Noahic Covenant', 'Tower of Babel'],
    canonicalBooks: ['Genesis 1–11'],
  },
  {
    id: 'patriarchal',
    name: 'Patriarchal Era',
    dateRange: 'c. 2100 — 1876 BC',
    summary: 'God calls Abraham out of Ur of the Chaldees to establish an everlasting covenant; the patriarchal lineage passes through Isaac, Jacob, and the twelve tribes to Joseph in Egypt.',
    geopoliticalBackdrop: 'Middle Bronze Age in the Ancient Near East. Amorite migrations, Code of Hammurabi in Babylon, Middle Kingdom of Egypt. Nomad pastoralism amidst Canaanite city-states steeped in fertility cults (Baal, Asherah).',
    keyEvents: ['Call of Abraham & Covenant (Gen 12, 15, 17)', 'Offering of Isaac (Mount Moriah)', 'Jacob becomes Israel at Peniel', 'Joseph sold into Egypt, preserving the covenant line'],
    canonicalBooks: ['Genesis 12–50', 'Job'],
  },
  {
    id: 'exodus',
    name: 'Exodus, Law & Wilderness',
    dateRange: 'c. 1446 — 1406 BC',
    summary: 'Israel\'s deliverance from Egyptian bondage through Moses, the giving of the Moral and Ceremonial Law at Mount Sinai, the Sanctuary system, and 40 years of wilderness wanderings.',
    geopoliticalBackdrop: '18th Dynasty of New Kingdom Egypt (Thutmose / Amenhotep era). Egypt was the dominant military superpower of the Mediterranean. The 10 plagues were direct theological polemics against the Egyptian pantheon. The tabernacle embodied God dwelling in the midst of His redeemed theocracy.',
    keyEvents: ['The Ten Plagues & the Passover', 'Red Sea Crossing', 'Giving of the Law at Mount Sinai', 'Erection of the Tabernacle', 'Forty Years in the Wilderness of Sinai'],
    canonicalBooks: ['Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
  },
  {
    id: 'conquest',
    name: 'Conquest & Judges',
    dateRange: 'c. 1406 — 1050 BC',
    summary: 'Conquest of Canaan under Joshua, tribal division of the Promised Land, and the cyclical era of the Judges characterized by spiritual apostasy, foreign oppression, and divine deliverers.',
    geopoliticalBackdrop: 'Late Bronze Age collapse in the Eastern Mediterranean. Sea Peoples (Philistines) settled on the Mediterranean coast. Lack of centralized royal leadership in Israel ("every man did that which was right in his own eyes").',
    keyEvents: ['Crossing of the Jordan & Fall of Jericho', 'Covenant Renewal at Shechem', 'Deliverance under Deborah, Gideon, Jephthah, and Samson', 'Ruth\'s kinsman-redeemer lineage to David'],
    canonicalBooks: ['Joshua', 'Judges', 'Ruth'],
  },
  {
    id: 'monarchy',
    name: 'United & Divided Monarchy',
    dateRange: 'c. 1050 — 586 BC',
    summary: 'Rise of the Hebrew monarchy under Saul, David, and Solomon; building of the First Temple; subsequent division into Northern Israel (Samaria) and Southern Judah (Jerusalem); prophetic warnings.',
    geopoliticalBackdrop: 'Iron Age kingdoms. Rise of the ruthless Neo-Assyrian Empire, culminating in the conquest and deportation of the 10 northern tribes in 722 BC. Rise of the Neo-Babylonian Empire under Nebuchadnezzar, culminating in the siege of Jerusalem and destruction of Solomon\'s Temple in 586 BC.',
    keyEvents: ['Davidic Covenant (2 Sam 7)', 'Dedication of Solomon\'s Temple', 'Kingdom Division (931 BC: Jeroboam & Rehoboam)', 'Elijah & Elisha confrontations', 'Fall of Samaria (722 BC)', 'Fall of Jerusalem & Temple (586 BC)'],
    canonicalBooks: ['1 & 2 Samuel', '1 & 2 Kings', '1 & 2 Chronicles', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah'],
  },
  {
    id: 'exile',
    name: 'Exile & Persian Restoration',
    dateRange: 'c. 586 — 400 BC',
    summary: 'Seventy years of Babylonian captivity, the ministry of Daniel and Ezekiel, the decree of Cyrus allowing the Jewish remnant to return, and the rebuilding of the Temple and Jerusalem walls.',
    geopoliticalBackdrop: 'Fall of Babylon to Cyrus the Great (539 BC) and the rise of the Achaemenid Persian Empire. Cyrus\'s policy of local religious autonomy allowed exiled peoples to return and rebuild their temples under royal subsidy. Resistance from surrounding Samaritans and Persian satraps.',
    keyEvents: ['Daniel in the Babylonian and Persian courts', 'Ezekiel\'s visions by the River Chebar', 'Edict of Cyrus (538 BC)', 'Rebuilding of the Second Temple under Zerubbabel', 'Nehemiah rebuilding the walls of Jerusalem (444 BC)', 'Ministry of Ezra the scribe'],
    canonicalBooks: ['Ezekiel', 'Daniel', 'Esther', 'Ezra', 'Nehemiah', 'Haggai', 'Zechariah', 'Malachi'],
  },
  {
    id: 'second_temple',
    name: 'Second Temple & Intertestamental',
    dateRange: 'c. 400 — 4 BC',
    summary: 'The "four hundred silent years" between Malachi and John the Baptist; geopolitical transitions through Persian, Hellenistic Greek, Hasmonean Jewish, and Roman rule.',
    geopoliticalBackdrop: 'Conquests of Alexander the Great (332 BC) rapidly Hellenizing the Mediterranean world. Translation of the Hebrew Bible into Greek (Septuagint / LXX) in Alexandria. Desecration of the Temple by Antiochus IV Epiphanes (167 BC) sparking the Maccabean Revolt. Rise of Rome under Pompey taking Jerusalem in 63 BC.',
    keyEvents: ['Hellenization of Judea', 'Translation of the Septuagint', 'Maccabean Revolt & Rededication of Temple (Hanukkah)', 'Roman Annexation of Judea (63 BC)', 'Rule of Herod the Great & Reconstruction of the Temple Mount'],
    canonicalBooks: ['Intertestamental historical backdrop (Apocrypha / Josephus / Dead Sea Scrolls)'],
  },
  {
    id: 'incarnation',
    name: 'Incarnation & Roman Judea',
    dateRange: 'c. 4 BC — AD 33',
    summary: 'The advent of Jesus Christ: miraculous virginal conception, earthly life, public ministry, proclamation of the Kingdom of God, atoning crucifixion on Calvary, bodily resurrection, and ascension.',
    geopoliticalBackdrop: 'Pax Romana under Roman Emperors Augustus and Tiberius Caesar. Judea governed directly by Roman prefects (Pontius Pilate) and client kings (Herod Antipas). Jewish society deeply fractured into religious-political sects: Pharisees (legalism), Sadducees (temple aristocracy), Essenes (Qumran separatists), and Zealots (militant revolutionaries).',
    keyEvents: ['Birth of Jesus in Bethlehem', 'Baptism by John & Temptation in Wilderness', 'Sermon on the Mount & Kingdom miracles', 'Institution of the Lord\'s Supper', 'Crucifixion under Pontius Pilate', 'Resurrection on the Third Day', 'Great Commission & Ascension'],
    canonicalBooks: ['Matthew', 'Mark', 'Luke', 'John'],
  },
  {
    id: 'apostolic',
    name: 'Apostolic Age & Early Church',
    dateRange: 'c. AD 33 — 100',
    summary: 'Outpouring of the Holy Spirit at Pentecost, explosion of the Christian church across the Roman Empire, missionary journeys of Paul, apostolic letters, destruction of Jerusalem, and the Apocalypse of John.',
    geopoliticalBackdrop: 'Roman imperial expansion under Julio-Claudian and Flavian emperors. State-sponsored persecutions under Nero (AD 64) and Domitian (AD 90s). The Jewish Revolt against Rome resulting in the siege and total destruction of Jerusalem and the Second Temple by Titus in AD 70. Dispersion of the early church throughout Greece, Rome, Asia Minor, and North Africa.',
    keyEvents: ['Pentecost & Birth of the Apostolic Church', 'Martyrdom of Stephen & Conversion of Saul of Tarsus', 'Council of Jerusalem (Acts 15)', 'Paul\'s Missionary Journeys & Roman Imprisonments', 'Destruction of the Temple in Jerusalem (AD 70)', 'Exile of John to Patmos & Revelation'],
    canonicalBooks: ['Acts', 'Romans', '1 & 2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 & 2 Thessalonians', '1 & 2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 & 2 Peter', '1, 2, 3 John', 'Jude', 'Revelation'],
  },
];

export interface HistoricalConnectionItem {
  id: string;
  anchorId: string;
  anchorRef: string;
  targetRef: string;
  anchorVerseText?: string;
  sourceEra: BiblicalEra;
  fulfillmentEra: BiblicalEra;
  sourceAuthor: string;
  sourceDate: string;
  sourceSetting: string;
  fulfillmentAuthor: string;
  fulfillmentDate: string;
  fulfillmentSetting: string;
  redemptiveBridge: string;
  ultimatePoint: string;
  what: string;
  when: string;
  how: string;
  why: string;
  scholarshipNotes?: string;
}

export function findEraForBook(ref: string): BiblicalEra {
  if (!ref) return BIBLICAL_ERAS[0];
  const clean = ref.toLowerCase().trim();

  // Explicit era name markers
  if (clean.startsWith('creation') || clean.startsWith('primeval')) return BIBLICAL_ERAS[0];
  if (clean.startsWith('patriarchal')) return BIBLICAL_ERAS[1];
  if (clean.startsWith('exodus')) return BIBLICAL_ERAS[2];
  if (clean.startsWith('conquest')) return BIBLICAL_ERAS[3];
  if (clean.startsWith('monarchy')) return BIBLICAL_ERAS[4];
  if (clean.startsWith('exile')) return BIBLICAL_ERAS[5];
  if (clean.startsWith('second temple') || clean.startsWith('intertestamental')) return BIBLICAL_ERAS[6];
  if (clean.startsWith('incarnation')) return BIBLICAL_ERAS[7];
  if (clean.startsWith('apostolic')) return BIBLICAL_ERAS[8];

  // Malachi 4 check: Malachi 4 is the closing bridge to the 400 silent years
  if (clean.includes('mal 4') || clean.includes('malachi 4')) {
    return BIBLICAL_ERAS[6]; // second_temple
  }

  // Extract canonical book name
  const book = extractCanonicalBook(ref);

  // 1 & 2. Genesis: chapters 1-11 Creation, 12-50 Patriarchal
  if (book === 'Genesis') {
    const genMatch = clean.match(/^(?:gen|genesis)\s*(\d+)/i);
    if (genMatch) {
      const ch = parseInt(genMatch[1], 10);
      if (ch > 11) return BIBLICAL_ERAS[1]; // patriarchal
    }
    return BIBLICAL_ERAS[0]; // creation (default for Gen 1-11 or bare Genesis)
  }

  if (book === 'Job') {
    return BIBLICAL_ERAS[1]; // patriarchal
  }

  // 3. Exodus, Law & Wilderness
  if (book === 'Exodus' || book === 'Leviticus' || book === 'Numbers' || book === 'Deuteronomy') {
    return BIBLICAL_ERAS[2]; // exodus
  }

  // 4. Conquest & Judges
  if (book === 'Joshua' || book === 'Judges' || book === 'Ruth') {
    return BIBLICAL_ERAS[3]; // conquest
  }

  // 5. Monarchy
  if (
    book === '1 Samuel' || book === '2 Samuel' ||
    book === '1 Kings' || book === '2 Kings' ||
    book === '1 Chronicles' || book === '2 Chronicles' ||
    book === 'Psalms' || book === 'Proverbs' || book === 'Ecclesiastes' ||
    book === 'Song of Solomon' || book === 'Isaiah' || book === 'Jeremiah' ||
    book === 'Lamentations' || book === 'Hosea' || book === 'Joel' ||
    book === 'Amos' || book === 'Obadiah' || book === 'Jonah' ||
    book === 'Micah' || book === 'Nahum' || book === 'Habakkuk' ||
    book === 'Zephaniah'
  ) {
    return BIBLICAL_ERAS[4]; // monarchy
  }

  // 6. Exile & Persian Restoration
  if (
    book === 'Ezekiel' || book === 'Daniel' || book === 'Esther' ||
    book === 'Ezra' || book === 'Nehemiah' || book === 'Haggai' ||
    book === 'Zechariah' || book === 'Malachi'
  ) {
    return BIBLICAL_ERAS[5]; // exile
  }

  // 8. Incarnation (The Four Gospels: Matthew, Mark, Luke, John)
  if (book === 'Matthew' || book === 'Mark' || book === 'Luke' || book === 'John') {
    return BIBLICAL_ERAS[7]; // incarnation
  }

  // 9. Apostolic (Acts through Revelation, including 1, 2, 3 John)
  return BIBLICAL_ERAS[8]; // apostolic
}

export const ANCHOR_TEXTS: Record<string, string> = {
  'gen-1-1': 'In the beginning God created the heaven and the earth.',
  'gen-1-3': 'And God said, Let there be light: and there was light.',
  'gen-1-26': 'And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.',
  'gen-3-15': 'And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.',
  'gen-12-3': 'And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed.',
  'exo-12-46': 'In one house shall it be eaten; thou shalt not carry forth ought of the flesh abroad out of the house; neither shall ye break a bone thereof.',
  'jos-5-14': 'And he said, Nay; but as captain of the host of the LORD am I now come. And Joshua fell on his face to the earth, and did worship, and said unto him, What saith my lord unto his servant?',
  '2sa-7-12': 'And when thy days be fulfilled, and thou shalt sleep with thy fathers, I will set up thy seed after thee, which shall proceed out of thy bowels, and I will establish his kingdom.',
  'isa-53-5': 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
  'dan-7-13': 'I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of days, and they brought him near before him.',
  'mal-4-5': 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD:',
  'mat-1-22': 'Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying,',
  'mat-1-23': 'Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us.',
  'rom-5-14': 'Nevertheless death reigned from Adam to Moses, even over them that had not sinned after the similitude of Adam\'s transgression, who is the figure of him that was to come.',
};

/**
 * Build the full historical connections registry, compiling all curated
 * connections across all 9 canonical biblical eras into unified historical dossiers.
 */
export function getAllHistoricalConnections(): HistoricalConnectionItem[] {
  const items: HistoricalConnectionItem[] = [];
  const seen = new Set<string>();

  for (const inter of Object.values(CURATED_INTERROGATIONS)) {
    if (seen.has(inter.id)) continue;
    seen.add(inter.id);

    const anchorId = inter.id.split('_')[0] || '';
    const sourceEra = findEraForBook(inter.anchorRef);
    const fulfillmentEra = findEraForBook(inter.targetRef);
    const hc = inter.historicalContext;

    items.push({
      id: inter.id,
      anchorId,
      anchorRef: inter.anchorRef,
      targetRef: inter.targetRef,
      anchorVerseText: ANCHOR_TEXTS[anchorId] || '',
      sourceEra,
      fulfillmentEra,
      sourceAuthor: hc?.sourceAuthor || getAuthorForRef(inter.anchorRef),
      sourceDate: hc?.sourceDate || sourceEra.dateRange,
      sourceSetting: hc?.sourceSetting || sourceEra.geopoliticalBackdrop,
      fulfillmentAuthor: hc?.fulfillmentAuthor || getAuthorForRef(inter.targetRef),
      fulfillmentDate: hc?.fulfillmentDate || fulfillmentEra.dateRange,
      fulfillmentSetting: hc?.fulfillmentSetting || fulfillmentEra.geopoliticalBackdrop,
      redemptiveBridge: hc?.redemptiveBridge || 'Progressive redemptive revelation bridging the Old Testament foundation to its New Testament culmination.',
      ultimatePoint: inter.ultimatePoint,
      what: inter.what,
      when: inter.when,
      how: inter.how,
      why: inter.why,
      scholarshipNotes: hc?.scholarshipNotes,
    });
  }

  return items;
}
