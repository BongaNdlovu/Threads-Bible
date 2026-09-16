/**
 * Rigorous biblical interrogation and historical context for connections.
 *
 * Every connection between a biblical anchor verse and a fulfillment ref
 * answers seven fundamental interrogations:
 *  1. WHO: Authorship, prophetic/apostolic context, identified characters, and true Christological subject.
 *  2. WHAT: The verbal, textual, and thematic connection.
 *  3. WHEN: Chronological dating, epochs, and redemptive timeline.
 *  4. HOW: Exegetical and hermeneutical mechanic (original Greek & Hebrew languages, typology, direct prophecy).
 *  5. WHY: Divine necessity and theological purpose.
 *  6. ULTIMATE POINT: The supreme Christological or redemptive climax.
 *  7. PERSONAL RELEVANCE: Walk with Jesus (Why you need to know this, What it does for you, Relationship with Jesus).
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
  who: string;
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
 * Compares two scripture references to enforce canonical chronological progression:
 * 1. Old Testament passages strictly precede New Testament passages.
 * 2. Within each testament, passages follow Protestant 66-book canonical order (Genesis -> Malachi, Matthew -> Revelation).
 * 3. Within the same book, passages follow chapter order, then start verse order.
 */
export function compareCanonicalRefs(refA: string, refB: string): number {
  if (refA === refB) return 0;
  if (!refA) return 1;
  if (!refB) return -1;

  const segA = refA.split(/[/;,]/)[0].trim();
  const segB = refB.split(/[/;,]/)[0].trim();

  const isOtA = isOldTestament(segA) || isOldTestament(refA);
  const isOtB = isOldTestament(segB) || isOldTestament(refB);

  // OT passages always precede NT passages
  if (isOtA && !isOtB) return -1;
  if (!isOtA && isOtB) return 1;

  const bookA = extractCanonicalBook(segA) || extractCanonicalBook(refA);
  const bookB = extractCanonicalBook(segB) || extractCanonicalBook(refB);

  const idxA = getBookIndex(bookA);
  const idxB = getBookIndex(bookB);

  if (idxA !== -1 && idxB !== -1 && idxA !== idxB) {
    return idxA - idxB;
  }

  const parsedA = parseRef(segA) || parseRef(refA);
  const parsedB = parseRef(segB) || parseRef(refB);

  if (parsedA && parsedB) {
    if (parsedA.chapter !== parsedB.chapter) {
      return parsedA.chapter - parsedB.chapter;
    }
    if (parsedA.startVerse !== parsedB.startVerse) {
      return parsedA.startVerse - parsedB.startVerse;
    }
  }

  return refA.localeCompare(refB);
}

/**
 * Curated registry of scholarly biblical interrogations for foundational connections across all biblical eras.
 * Keys are normalized as `${anchorId}_${normalizedTargetRef}` or `${anchorId}`.
 */
export const CURATED_INTERROGATIONS: Record<string, ConnectionInterrogation> = {
  "gen-2-2_Exodus 20:8-11": {
    "id": "gen-2-2_Exodus 20:8-11",
    "anchorRef": "Genesis 2:2",
    "targetRef": "Exodus 20:8-11",
    "who": "Authorship & Context: Moses recorded primeval creation in Genesis and received the Ten Commandments at Mount Sinai (c. 1446–1406 BC). At Sinai, Yahweh audibly proclaimed the Decalogue to all Israel amidst thunder, lightning, and trumpet blasts, personally inscribing these words with the finger of God on two tables of stone (Exo 31:18). Identified Characters: Yahweh Elohim (the sovereign Creator who rested and sanctified the seventh day), Moses the covenant mediator, redeemed Israel newly liberated from Egyptian slavery, and all created beings summoned to enter divine rest. Christological Subject & Referent: Jesus Christ, the Lord of the Sabbath (Mark 2:28, Luke 6:5) and active Agent of creation (John 1:3, Col 1:16). Christ finished the work of the first creation and rested on the seventh day; upon the cross He cried 'It is finished' (John 19:30) and rested in the tomb on the seventh day, guaranteeing eternal redemption. Redemptive Purpose: To establish that the Sabbath is not a temporary ceremonial fixture or human innovation, but a perpetual creation ordinance woven into the cosmos, memorializing the Creator's finished work and sealing Israel's covenant sanctification.",
    "what": "The foundational theological and verbal grounding of the Fourth Commandment of the Decalogue (Exo 20:8-11) in the Creation Sabbath of Genesis 2:2-3. In Exodus 20:11, God explicitly grounds the Sabbath command in Genesis 2:2: 'For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.' The Fourth Commandment is the sole precept in the moral law explicitly grounded in primeval creation history.",
    "when": "Source Horizon: Primeval Creation Week (Day 7), historically penned by Moses c. 1446–1406 BC. Target Horizon: The Sinai Covenant (c. 1446 BC, Third Month), where Yahweh formally delivered the Decalogue to liberated Israel at Mount Sinai.",
    "how": "Verbal quotation, linguistic identity, and covenant codification. In Genesis 2:2, the Hebrew verb שָׁבַת (shavat, Qal waw-consecutive וַיִּשְׁבֹּת) signifies 'to cease, desist, rest from labor', paired with מְלָאכָה (mela'khah — purposeful creative artistry). In Exodus 20:8, the commandment opens with the emphatic infinitive absolute זָכוֹר (Zakhor — 'Remember!'), commanding Israel to remember what was already consecrated in Eden before the Fall. In Exodus 20:11, the motive clause quotes Genesis 2:2-3 almost verbatim: God 'rested the seventh day' (וַיָּנַח בַּיּוֹם הַשְּׁבִיעִי, vayanach bayyom hashviʿi, from nuach: to settle into joyful repose), wherefore Yahweh 'blessed the sabbath day and hallowed it' (בֵּרַךְ יְהוָה אֶת־יוֹם הַשַּׁבָּת וַיְקַדְּשֵׁהוּ, berakh Yahweh ʾet-yom hashabbat vayqaddeshehu), directly mirroring Genesis 2:3 (וַיְבָרֶךְ אֱלֹהִים אֶת־יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ). The weekly Sabbath (שַׁבָּת, Shabbat) is thus the literal institutionalization of the Creator's rest.",
    "why": "To guard humanity from the soul-destroying idolatry of perpetual toil and secular materialism (the bondage of Egypt). By ceasing from labor every seventh day, humanity practices the imitatio Dei (imitation of God), confessing that human life, provision, and salvation depend not on autonomous labor, but upon the sovereign grace and completed work of the Creator.",
    "ultimatePoint": "The Sabbath of Genesis 2:2 is enshrined in the heart of the moral law at Exodus 20:8 as the perpetual memorial of Creation and the covenant sign of the Creator, pointing forward to Jesus Christ, the Lord of the Sabbath who gives true spiritual and eschatological rest to all who believe (Matt 11:28; Hebrews 4:4, 9-11).",
    "personalRelevance": "Why you need to know this: Your identity and worth before God are not measured by endless striving, worldly accomplishments, or exhausting performance; you are invited into the sacred rest of a loving Creator who finished His work for you. What it does for you: It breaks the tyranny of anxiety, burnout, and self-justification, giving your spirit a sanctuary in time where you can lay down your burdens and rejoice in God's completed provision. Relationship with Jesus: Walking with Jesus means accepting His invitation to rest from your own self-righteous efforts, delighting in Him as your Sabbath-Rest, and allowing His peace to govern every aspect of your weekly walk.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC, Sinai Wilderness)",
      "sourceDate": "Creation — c. 1446 BC",
      "sourceSetting": "Primeval Eden before sin, where God instituted and blessed the seventh day as sacred holy time for unfallen humanity.",
      "fulfillmentAuthor": "Moses (c. 1446 BC, Mount Sinai)",
      "fulfillmentDate": "c. 1446 BC",
      "fulfillmentSetting": "The assembly of Israel at the base of Mount Sinai, freshly delivered from 400 years of crushing, seven-day Egyptian slave labor. God bestows the Sabbath as the gift of freedom, holiness, and covenant identity.",
      "redemptiveBridge": "From the Creation Sabbath in Genesis 2 to the Sinai Decalogue in Exodus 20, confirmed as a perpetual covenant sign in Exodus 31:16-17, the Sabbath unfolds across the canon until it reaches apostolic fulfillment in Hebrews 4:4, 9-11 (the eschatological rest that remains for the people of God).",
      "scholarshipNotes": "Old Testament scholarship unanimously notes that the Fourth Commandment begins with 'Remember' (זָכוֹר, Zakhor), proving that the Sabbath was not an innovation originating at Sinai, but a pre-existing creation ordinance from Genesis 2 being formally integrated into the covenant Decalogue."
    }
  },
  "gen-2-2_Exodus 20:8": {
    "id": "gen-2-2_Exodus 20:8-11",
    "anchorRef": "Genesis 2:2",
    "targetRef": "Exodus 20:8",
    "who": "Authorship & Context: Moses recorded primeval creation in Genesis and received the Ten Commandments at Mount Sinai (c. 1446–1406 BC). At Sinai, Yahweh audibly proclaimed the Decalogue to all Israel amidst thunder, lightning, and trumpet blasts, personally inscribing these words with the finger of God on two tables of stone (Exo 31:18). Identified Characters: Yahweh Elohim (the sovereign Creator who rested and sanctified the seventh day), Moses the covenant mediator, redeemed Israel newly liberated from Egyptian slavery, and all created beings summoned to enter divine rest. Christological Subject & Referent: Jesus Christ, the Lord of the Sabbath (Mark 2:28, Luke 6:5) and active Agent of creation (John 1:3, Col 1:16). Christ finished the work of the first creation and rested on the seventh day; upon the cross He cried 'It is finished' (John 19:30) and rested in the tomb on the seventh day, guaranteeing eternal redemption. Redemptive Purpose: To establish that the Sabbath is not a temporary ceremonial fixture or human innovation, but a perpetual creation ordinance woven into the cosmos, memorializing the Creator's finished work and sealing Israel's covenant sanctification.",
    "what": "The foundational theological and verbal grounding of the Fourth Commandment of the Decalogue (Exo 20:8-11) in the Creation Sabbath of Genesis 2:2-3. In Exodus 20:11, God explicitly grounds the Sabbath command in Genesis 2:2: 'For in six days the LORD made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the LORD blessed the sabbath day, and hallowed it.' The Fourth Commandment is the sole precept in the moral law explicitly grounded in primeval creation history.",
    "when": "Source Horizon: Primeval Creation Week (Day 7), historically penned by Moses c. 1446–1406 BC. Target Horizon: The Sinai Covenant (c. 1446 BC, Third Month), where Yahweh formally delivered the Decalogue to liberated Israel at Mount Sinai.",
    "how": "Verbal quotation, linguistic identity, and covenant codification. In Genesis 2:2, the Hebrew verb שָׁבַת (shavat, Qal waw-consecutive וַיִּשְׁבֹּת) signifies 'to cease, desist, rest from labor', paired with מְלָאכָה (mela'khah — purposeful creative artistry). In Exodus 20:8, the commandment opens with the emphatic infinitive absolute זָכוֹר (Zakhor — 'Remember!'), commanding Israel to remember what was already consecrated in Eden before the Fall. In Exodus 20:11, the motive clause quotes Genesis 2:2-3 almost verbatim: God 'rested the seventh day' (וַיָּנַח בַּיּוֹם הַשְּׁבִיעִי, vayanach bayyom hashviʿi, from nuach: to settle into joyful repose), wherefore Yahweh 'blessed the sabbath day and hallowed it' (בֵּרַךְ יְהוָה אֶת־יוֹם הַשַּׁבָּת וַיְקַדְּשֵׁהוּ, berakh Yahweh ʾet-yom hashabbat vayqaddeshehu), directly mirroring Genesis 2:3 (וַיְבָרֶךְ אֱלֹהִים אֶת־יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ). The weekly Sabbath (שַׁבָּת, Shabbat) is thus the literal institutionalization of the Creator's rest.",
    "why": "To guard humanity from the soul-destroying idolatry of perpetual toil and secular materialism (the bondage of Egypt). By ceasing from labor every seventh day, humanity practices the imitatio Dei (imitation of God), confessing that human life, provision, and salvation depend not on autonomous labor, but upon the sovereign grace and completed work of the Creator.",
    "ultimatePoint": "The Sabbath of Genesis 2:2 is enshrined in the heart of the moral law at Exodus 20:8 as the perpetual memorial of Creation and the covenant sign of the Creator, pointing forward to Jesus Christ, the Lord of the Sabbath who gives true spiritual and eschatological rest to all who believe (Matt 11:28; Hebrews 4:4, 9-11).",
    "personalRelevance": "Why you need to know this: Your identity and worth before God are not measured by endless striving, worldly accomplishments, or exhausting performance; you are invited into the sacred rest of a loving Creator who finished His work for you. What it does for you: It breaks the tyranny of anxiety, burnout, and self-justification, giving your spirit a sanctuary in time where you can lay down your burdens and rejoice in God's completed provision. Relationship with Jesus: Walking with Jesus means accepting His invitation to rest from your own self-righteous efforts, delighting in Him as your Sabbath-Rest, and allowing His peace to govern every aspect of your weekly walk.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC, Sinai Wilderness)",
      "sourceDate": "Creation — c. 1446 BC",
      "sourceSetting": "Primeval Eden before sin, where God instituted and blessed the seventh day as sacred holy time for unfallen humanity.",
      "fulfillmentAuthor": "Moses (c. 1446 BC, Mount Sinai)",
      "fulfillmentDate": "c. 1446 BC",
      "fulfillmentSetting": "The assembly of Israel at the base of Mount Sinai, freshly delivered from 400 years of crushing, seven-day Egyptian slave labor. God bestows the Sabbath as the gift of freedom, holiness, and covenant identity.",
      "redemptiveBridge": "From the Creation Sabbath in Genesis 2 to the Sinai Decalogue in Exodus 20, confirmed as a perpetual covenant sign in Exodus 31:16-17, the Sabbath unfolds across the canon until it reaches apostolic fulfillment in Hebrews 4:4, 9-11 (the eschatological rest that remains for the people of God).",
      "scholarshipNotes": "Old Testament scholarship unanimously notes that the Fourth Commandment begins with 'Remember' (זָכוֹר, Zakhor), proving that the Sabbath was not an innovation originating at Sinai, but a pre-existing creation ordinance from Genesis 2 being formally integrated into the covenant Decalogue."
    }
  },
  "gen-2-2_Exodus 31:16-17": {
    "id": "gen-2-2_Exodus 31:16-17",
    "anchorRef": "Genesis 2:2",
    "targetRef": "Exodus 31:16-17",
    "who": "Authorship & Context: Moses recorded the covenant renewal and conclusion of the Tabernacle instructions at Mount Sinai (c. 1446 BC). Yahweh spoke directly to Moses, appointing the Sabbath as the perpetual covenant sign between Himself and Israel throughout their generations. Identified Characters: Yahweh Elohim (the Lord who sanctifies); Moses the covenant mediator; the children of Israel; and the craftsmen building the tabernacle. Christological Subject & Referent: Jesus Christ, the true Tabernacle and true Sanctifier (Heb 2:11, 10:10). The Sabbath seals that sanctification is a divine work of grace, not human manufacture. Redemptive Purpose: To seal the truth that while Israel was commanded to build the tabernacle, holy work must never supersede holy rest in the Creator.",
    "what": "The codification of the Creation Sabbath as a perpetual covenant sign (אוֹת הִוא לְעֹלָם, ʾot hi leʿolam) between Yahweh and His people throughout their generations: 'Wherefore the children of Israel shall keep the sabbath, to observe the sabbath throughout their generations, for a perpetual covenant. It is a sign between me and the children of Israel for ever: for in six days the LORD made heaven and earth, and on the seventh day he rested, and was refreshed' (Exo 31:16-17).",
    "when": "Source Horizon: Creation Week (Day 7). Target Horizon: Mount Sinai (c. 1446 BC), at the conclusion of the Tabernacle instructions.",
    "how": "Covenantal theology and verbal citation of Genesis 2:2. Exodus 31:17 explicitly cites the Genesis creation account: כִּי־שֵׁשֶׁת יָמִים עָשָׂה יְהוָה אֶת־הַשָּׁמַיִם וְאֶת־הָאָרֶץ וּבַיּוֹם הַשְּׁבִיעִי שָׁבַת וַיִּנָּפַשׁ (ki-sheshet yamim ʿasah Yahweh ʾet-hashamayim ve'et-ha'arets, uvayyom hashviʿi shavat vayyinafash — 'for in six days Yahweh made heaven and earth, and on the seventh day He ceased [שָׁבַת, shavat] and was refreshed / took breath [וַיִּנָּפַשׁ, vayyinafash, Niphal of naphash]'). The anthropomorphic verb וַיִּנָּפַשׁ ('was refreshed / took delight in completion') conveys the Creator's joyful satisfaction in His finished work. The Sabbath is designated an אוֹת (ʾot — sign / visible pledge) and בְּרִית עוֹלָם (berit ʿolam — everlasting/perpetual covenant), showing that Sabbath rest is the eternal signature of the Creator.",
    "why": "To teach Israel that holiness is not produced by human labor or tabernacle construction, but received from the Lord: 'that ye may know that I am the LORD that doth sanctify you' (Exo 31:13).",
    "ultimatePoint": "The Sabbath of Genesis 2:2 is confirmed as an everlasting covenant sign of divine sanctification, pointing forward to Jesus Christ who sanctifies His people by His blood and welcomes them into His eternal covenant fellowship.",
    "personalRelevance": "Why you need to know this: Your sanctification—being made holy and clean—is God's work in you, not the product of your own anxious labor. What it does for you: It delivers you from legalistic burnout, reminding you that God Himself is the One who sanctifies you as you rest in His covenant promises. Relationship with Jesus: Walking with Jesus means letting Him sanctify your heart day by day, living as a marked sign of His covenant grace in a busy, restless world.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1446 BC",
      "sourceSetting": "Eden, where God instituted the seventh day.",
      "fulfillmentAuthor": "Moses (c. 1446 BC)",
      "fulfillmentDate": "c. 1446 BC",
      "fulfillmentSetting": "Mount Sinai, after the tabernacle instructions were completed.",
      "redemptiveBridge": "From creation's rest to Sinai's tabernacle sign, to the eternal covenant written upon the heart in the New Covenant.",
      "scholarshipNotes": "The placement of the Sabbath command at the end of Exodus 31 (following the tabernacle specifications) demonstrates that divine rest takes precedence even over the construction of the sanctuary."
    }
  },
  "gen-2-2_Exodus 31:16": {
    "id": "gen-2-2_Exodus 31:16-17",
    "anchorRef": "Genesis 2:2",
    "targetRef": "Exodus 31:16",
    "who": "Authorship & Context: Moses recorded the covenant renewal at Mount Sinai (c. 1446 BC). Yahweh spoke directly to Moses, appointing the Sabbath as the perpetual covenant sign. Identified Characters: Yahweh Elohim; Moses; and the children of Israel. Christological Subject & Referent: Jesus Christ, the true Tabernacle and true Sanctifier. Redemptive Purpose: To seal that holy work must never supersede holy rest in the Creator.",
    "what": "The codification of the Creation Sabbath as a perpetual covenant sign (אוֹת הִוא לְעֹלָם, ʾot hi leʿolam) between Yahweh and His people throughout their generations (Exo 31:16-17).",
    "when": "Source: Creation Week (Day 7). Target: Mount Sinai (c. 1446 BC).",
    "how": "Covenantal theology citing Genesis 2:2. Exodus 31:17 explicitly cites the creation account: God ceased (שָׁבַת, shavat) and was refreshed (וַיִּנָּפַשׁ, vayyinafash). The Sabbath is designated an אוֹת (ʾot — sign) and בְּרִית עוֹלָם (berit ʿolam — perpetual covenant).",
    "why": "To teach Israel that sanctification is received from the Lord: 'that ye may know that I am the LORD that doth sanctify you' (Exo 31:13).",
    "ultimatePoint": "The Sabbath of Genesis 2:2 is confirmed as an everlasting covenant sign of divine sanctification, pointing forward to Jesus Christ who sanctifies His people by His blood.",
    "personalRelevance": "Why you need to know this: Your sanctification is God's work in you, not the product of your own anxious striving. What it does for you: Delivers from legalistic burnout. Relationship with Jesus: Resting daily in Christ as your true sanctification.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1446 BC",
      "sourceSetting": "Eden, where God instituted the seventh day.",
      "fulfillmentAuthor": "Moses (c. 1446 BC)",
      "fulfillmentDate": "c. 1446 BC",
      "fulfillmentSetting": "Mount Sinai, concluding tabernacle instructions.",
      "redemptiveBridge": "From creation's rest to Sinai's tabernacle sign, to the eternal covenant in Christ."
    }
  },
  "gen-2-2_Hebrews 4:4, 9-11": {
    "id": "gen-2-2_Hebrews 4:4, 9-11",
    "anchorRef": "Genesis 2:2",
    "targetRef": "Hebrews 4:4, 9-11",
    "who": "Authorship & Context: Moses recorded primeval creation in Genesis (c. 1446–1406 BC). The inspired Author of Hebrews wrote to 1st-century Jewish believers (c. AD 64–68) under intense Roman pressure and temple ceremonial pull. Identified Characters: Yahweh Elohim resting on the seventh day; the wilderness generation who failed to enter God's rest through unbelief (Psalm 95); Joshua who led Israel into Canaan; and the new covenant people of God (ὁ λαὸς τοῦ Θεοῦ). Christological Subject & Referent: Jesus Christ, our great High Priest (Heb 4:14) who has entered into the heavenly sanctuary after finishing His redemptive work, seated at the right hand of God. Redemptive Purpose: To unveil that the seventh-day Sabbath of creation was not merely a 24-hour weekly rest, but a cosmic archetype and prophetic type of the eternal spiritual rest (κατάπαυσις, katapausis) into which believers enter through faith in Jesus Christ.",
    "what": "The canonical and typological culmination of the Creation Sabbath of Genesis 2:2 in Hebrews 4:4, 9-11. In Hebrews 4:4, the author directly quotes Genesis 2:2: 'For he spake in a certain place of the seventh day on this wise, And God did rest the seventh day from all his works.' In Hebrews 4:9, he concludes: 'There remaineth therefore a rest [σαββατισμός, sabbatismos — Sabbath-rest] to the people of God,' exhorting believers in verse 11 to labor to enter into that divine rest.",
    "when": "Source Horizon: Primeval Creation Week (Day 7), recorded by Moses c. 1446–1406 BC. Target Horizon: Apostolic Era (c. AD 64–68), immediately prior to the destruction of the Jerusalem temple in AD 70.",
    "how": "Apostolic canonical exposition and verbal correspondence. In Genesis 2:2, God ceased from His works (וַיִּשְׁבֹּת בַּיּוֹם הַשְּׁבִיעִי, vayyishbot bayyom hashviʿi, from שָׁבַת, shavat). The Septuagint translates this with the aorist verb κατέπαυσεν (katepausen, from καταπαύω, katapauō — to cause to cease, to rest). The author of Hebrews quotes this exact Septuagint text in Hebrews 4:4: καὶ κατέπαυσεν ὁ Θεὸς ἐν τῇ ἡμέρᾳ τῇ ἑβδόμῃ ἀπὸ πάντων τῶν ἔργων αὐτοῦ. In Hebrews 4:9, the author introduces a unique theological term found nowhere else in the New Testament: σαββατισμός (sabbatismos, from σαββατίזω — 'Sabbath-keeping / Sabbath-rest'). Rather than using the common noun κατάπαυσις (katapausis), the author deliberately coins or chooses σαββατισμός to connect the believer's spiritual and eschatological rest directly to the seventh-day Sabbath of Genesis 2:2. In Hebrews 4:10, he establishes the theological parallel: 'For he that is entered into his rest, he also hath ceased from his own works, as God did from his' (ὥσπερ ἀπὸ τῶν ἰδίων ὁ Θεός). In verse 11, the urgent hortatory subjunctive σπουδάσωμεν (spoudasōmen, from spoudazō — 'let us make every effort / be diligent') calls believers to cease from dead works of self-righteousness and enter into Christ's finished salvation.",
    "why": "To demonstrate to Hebrew believers that the true goal of the Sabbath and the land of Canaan was never merely physical geography or ritual observance, but union with God in Christ's finished work. The Sabbath of Eden was never broken by an 'evening and morning', signaling that God's rest is an open, eternal reality entered by faith.",
    "ultimatePoint": "The Creation Sabbath of Genesis 2:2 finds its ultimate theological and redemptive fulfillment in Jesus Christ: as God rested when creation was finished, so the believer enters into eternal Sabbath-rest (σαββατισμός) by resting in the finished redemption of Christ.",
    "personalRelevance": "Why you need to know this: You do not need to exhaust your soul trying to earn God's acceptance through legalistic striving or religious performance; Christ's finished work has secured eternal Sabbath-rest for you. What it does for you: It gives you profound spiritual peace, ending the torment of perfectionism and fear of condemnation, allowing you to live from acceptance rather than for acceptance. Relationship with Jesus: Walking with Jesus means practicing daily Sabbath-rest of the heart, trusting His sacrifice completely, and allowing His living presence to be your peace.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "Creation — c. 1446 BC",
      "sourceSetting": "Eden at creation, where God rested upon finishing His work.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Jewish Christians tempted to return to the Levitical sacrificial system under Roman persecution.",
      "redemptiveBridge": "From the physical rest of Eden, through the weekly Sabbath of the Decalogue (Exo 20) and the rest of Canaan under Joshua, to the eternal Sabbath-rest (sabbatismos) entered through faith in Christ.",
      "scholarshipNotes": "New Testament exegesis highlights that the author of Hebrews switches from κατάπαυσις (katapausis) to σαββατισμός (sabbatismos) in Hebrews 4:9, intentionally preserving the seventh-day Sabbath typology of Genesis 2:2 as the paradigm for salvation rest."
    }
  },
  "gen-2-2_Hebrews 4:4": {
    "id": "gen-2-2_Hebrews 4:4, 9-11",
    "anchorRef": "Genesis 2:2",
    "targetRef": "Hebrews 4:4",
    "who": "Authorship & Context: Moses recorded primeval creation; Author of Hebrews addressed 1st-century believers. Identified Characters: God resting on the seventh day; the people of God called into rest. Christological Subject & Referent: Jesus Christ who completed redemption and sat down at the right hand of God. Redemptive Purpose: Revealing the Sabbath of Genesis 2:2 as the foundation of eternal rest.",
    "what": "The quotation of Genesis 2:2 in Hebrews 4:4: 'For he spake in a certain place of the seventh day on this wise, And God did rest the seventh day from all his works.'",
    "when": "Source: Creation Week. Target: Apostolic Era (c. AD 64–68).",
    "how": "Direct quotation of the Septuagint of Genesis 2:2 (καὶ κατέπαυσεν ὁ Θεός, from κατάπαυσις / shavat). Hebrews unfolds this as the archetype of salvation rest.",
    "why": "To ground the doctrine of eternal rest in the foundational act of the Creator in Genesis 2.",
    "ultimatePoint": "The Creation Sabbath of Genesis 2:2 points forward to the eternal rest entered through faith in Jesus Christ.",
    "personalRelevance": "Why you need to know this: God invites you into His finished rest. What it does for you: Delivers from burnout and anxious striving. Relationship with Jesus: Resting peacefully in Christ.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "Creation",
      "sourceSetting": "Eden",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Early Christian church",
      "redemptiveBridge": "The seventh day rest of Genesis 2 is fulfilled in Christ."
    }
  },
  "gen-2-2_Hebrews 4:9-11": {
    "id": "gen-2-2_Hebrews 4:4, 9-11",
    "anchorRef": "Genesis 2:2",
    "targetRef": "Hebrews 4:9-11",
    "who": "Authorship & Context: Moses and Author of Hebrews. Identified Characters: Yahweh and the people of God. Christological Subject & Referent: Jesus Christ our Sabbath-rest. Redemptive Purpose: Entering into divine rest.",
    "what": "The conclusion of Hebrews 4:9-11 that 'There remaineth therefore a rest [σαββατισμός, sabbatismos] to the people of God,' fulfilling Genesis 2:2.",
    "when": "Source: Creation. Target: Apostolic Era (c. AD 64–68).",
    "how": "Hermeneutical culmination using σαββατισμός (sabbatismos, Sabbath-rest) and σπουδάσωμεν (spoudasōmen, let us labor to enter that rest).",
    "why": "To reveal that Sabbath rest is the goal of salvation history.",
    "ultimatePoint": "Believers enter into God's eternal Sabbath-rest (σαββατισμός) through faith in Christ's finished work.",
    "personalRelevance": "Why you need to know this: Christ has finished the work of your redemption. What it does for you: Unshakeable peace. Relationship with Jesus: Ceasing from self-justification.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "Creation",
      "sourceSetting": "Eden",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Early church",
      "redemptiveBridge": "From Genesis 2:2 to Hebrews 4:9-11."
    }
  },
  "gen-1-1_John 1:1-3": {
    "id": "gen-1-1_John 1:1-3",
    "anchorRef": "Genesis 1:1",
    "targetRef": "John 1:1-3",
    "who": "Authorship & Context: Moses wrote Genesis during Israel's wilderness wandering (c. 1446–1406 BC), grounding redeemed slaves in the absolute sovereignty of the one true God over pagan Egyptian polytheism. The Apostle John, writing in Ephesus (c. AD 85–95), was the beloved disciple who reclined on Jesus' bosom, addressing nascent Gnostic heresies regarding the physical world. Identified Characters: God the Father (Creator of heaven and earth), God the Son (the eternal Logos through whom all things came into being), and the Holy Spirit (hovering over the waters). Singular or Many: Many. Three divine persons are identified in the creation-and-prologue witness, while the human author of Genesis is singular (Moses). Christological Subject & Referent: Jesus Christ Himself is the uncreated, personal divine Word (ὁ Λόγος, ho Logos). The passage is not talking about an abstract cosmic force, but the second Person of the Trinity who eternally communes with the Father. Redemptive Purpose: Moses establishes that creation is God's theater; John reveals that the One who framed the universe is the very Savior who stepped into it to redeem fallen humanity.",
    "what": "The deliberate verbal, syntactic, and theological parallelism between the Hebrew opening (בְּרֵאשִׁית, Bereshit, \"In the beginning / in the headship\") and the Johannine prologue (Ἐν ἀρχῇ, En archē, \"In the beginning\"). In Genesis 1:1, creation is summoned into existence by the sovereign spoken command of God (\"And God said...\"); in John 1:1-3, that creative Speech is revealed not merely as a temporary sound wave or philosophical abstraction, but as an eternal, distinct Divine Person—the Word (ὁ Λόγος, ho Logos) who was in face-to-face fellowship with God and was Himself fully God in essence.",
    "when": "Source Horizon: Primeval origin of the created space-time continuum, historically recorded under divine inspiration by Moses c. 1446–1406 BC during the wilderness journey from Egypt to Canaan. Target Horizon: The Apostle John writing in Ephesus c. AD 85–95 near the conclusion of the apostolic era, penetrating behind the historical moment of Genesis 1:1 into the timeless eternity where the Word already possessed continuous existence (ἦν, ēn) before any created thing came into being (ἐγένετο, egeneto).",
    "how": "Apostolic Christological interrogation of the Hebrew creation account. In Genesis 1:1, the Hebrew verb בָּרָא (baraʾ, Qal perfect 3ms) is used exclusively with God as its subject, denoting effortless creation out of nothing (creatio ex nihilo) without pre-existing materials, distinct from עָשָׂה (ʿasah, fashioning from existing matter). John explains that this divine act occurred through the mediate agency of the Son: δι' αὐτοῦ (di' autou — \"through Him all things came into being\"). To eliminate any Arian or Gnostic misunderstanding, John reinforces this with an absolute universal negative: χωρὶς αὐτοῦ ἐγένετο οὐδὲ ἕν (chōris autou egeneto oude hen — \"apart from Him not even one single thing came into existence that has come into existence\"). The imperfect verb ἦν (ēn — \"was\", expressing timeless, continuous existence) stands in sharp contrast with the aorist ἐγένετο (egeneto — \"became / came into being\"), grammatically proving that the Son is uncreated and co-eternal with the Father.",
    "why": "To establish the absolute, uncreated deity and cosmic supremacy of Jesus Christ before recounting His incarnation (\"And the Word was made flesh\", John 1:14). If Jesus were a created being or intermediate angelic agent, His sacrifice would lack infinite redemptive value. Only the Divine Agent who originally designed and authored the first creation possesses the divine prerogative, authority, and creative power to enact the New Creation (2 Cor 5:17) and redeem fallen humanity.",
    "ultimatePoint": "Jesus Christ was the active, personal Creative Agent in creating the world: all things were made through Him, and without Him was not anything made that was made. The God who spoke the universe into being at Genesis 1:1 is the very Lord who entered human history to redeem what He had formed.",
    "personalRelevance": "Why you need to know this: You are not the product of cosmic accident, blind chance, or meaningless biology; your Redeemer is the very One who summoned space, time, and matter into existence. What it does for you: It imparts unshakeable peace and confidence in Christ's ability to govern your life, calm your fears, and speak light and order into whatever chaos or brokenness you face today. Relationship with Jesus: Knowing Jesus as your uncreated Creator means you can yield absolute, joyful lordship to Him, resting in the certainty that the nail-pierced hands that saved you are the very hands that hold the universe together.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC, Sinai Peninsula / Wilderness)",
      "sourceDate": "c. 1446–1406 BC",
      "sourceSetting": "Israel had recently departed Egyptian bondage, surrounded by Ancient Near Eastern polytheistic cosmologies (e.g., Memphite theology where Ptah creates through thought and tongue, Enuma Elish where creation arises from violent conflict between slain gods). Moses writes the pure, monotheistic, historical record of one transcendent, sovereign God creating a good and orderly cosmos without rival or struggle.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95, Ephesus, Asia Minor)",
      "fulfillmentDate": "c. AD 85–95",
      "fulfillmentSetting": "Ephesus in the late 1st-century Roman Empire during the reign of Domitian, facing early Gnostic heresies (such as Cerinthianism, which claimed that the physical world was made by a lesser, imperfect demiurge distinct from the supreme God) and Greco-Roman Stoic philosophies (which viewed the Logos as an impersonal cosmic principle of rationality). John asserts that the true Logos is a personal, holy Creator-God who became physically incarnate.",
      "redemptiveBridge": "Across 1,500 years of biblical history, the \"Word of the Lord\" that revealed God's will to the patriarchs, governed the tabernacle, and was proclaimed by the prophets culminates in the incarnation of Jesus Christ, uniting the doctrine of Creation with the doctrine of Redemption.",
      "scholarshipNotes": "Textual scholarship notes the sharp distinction between the imperfect verb ἦν (was — indicating continuous, eternal existence without beginning) and the aorist verb ἐγένετο (became/came into being — indicating temporal origin). The Word eternally was; creation came into being through Him."
    }
  },
  "gen-1-1_Hebrews 11:3": {
    "id": "gen-1-1_Hebrews 11:3",
    "anchorRef": "Genesis 1:1",
    "targetRef": "Hebrews 11:3",
    "who": "Authorship & Context: Moses recorded primeval history for the assembly of Israel at Mount Sinai. The inspired author of Hebrews (c. AD 64–68) wrote to Jewish believers in the Roman Empire under intense pressure of social ostracization and impending imperial persecution prior to the destruction of Jerusalem in AD 70. Identified Characters: God the sovereign Creator whose spoken word establishes reality; the historic patriarchs and witnesses of faith; and 1st-century suffering disciples. Singular or Many: Singular Speaker, many worlds. One God frames the ages by His word; the many visible things are not their own origin. Christological Subject & Referent: Jesus Christ, the divine Son through whom God made the worlds (Heb 1:2) and who upholds all things by the word of His power (Heb 1:3). Redemptive Purpose: To orient the faith of wavering believers upon the unseen, eternal reality of God's kingdom, showing that God's spoken promise is infinitely more substantial than transient visible empires.",
    "what": "The canonical formulation of creatio ex nihilo (creation out of nothing). Genesis 1:1 announces that God created the heavens and the earth; Hebrews 11:3 explicitly unveils the underlying mechanism: the worlds (τοὺς αἰῶνας, tous aiōnas — the space-time cosmos and all its successive dispensational ages) were framed by the spoken word of God (ῥήματι Θεοῦ, rhēmati Theou), so that visible entities were not constructed out of pre-existing material components (εἰς τὸ μὴ ἐκ φαινομένων τὰ βλεπόμενα γεγονέναι).",
    "when": "Source: Primeval creation recorded by Moses c. 1446–1406 BC. Target: Written to 1st-century Jewish-Christian believers c. AD 64–68 facing Roman persecution, confiscation of property, and social pressure to abandon the gospel before the fall of Jerusalem in AD 70.",
    "how": "Theological interrogation of the Hebrew verb בָּרָא (baraʾ), which throughout the Hebrew Scriptures is an exclusively divine verb (having God alone as subject) requiring no pre-existing substrate. Hebrews translates this theological reality into Greek philosophical precision: the perfect passive infinitive κατηρτίσθαι (katērtisthai, from katartizō) signifies that the cosmos was perfectly framed, mended, and harmoniously equipped by the divine fiat (ῥῆμα, rhēma — specific spoken utterance). The negative phrase μὴ ἐκ φαινομένων (mē ek phainomenōn — \"not out of things which appear\") proves that the visible universe does not originate from eternal, self-existing matter (refuting Platonic and Aristotelian dualism), but sprang into existence from the invisible decree of God.",
    "why": "To demonstrate that true biblical faith (πίστις, pistis) is grounded in historical, cosmic reality. If God brought everything from nothing simply by His spoken word, then His promises of an unshakeable heavenly kingdom, a superior High Priest, and an eternal city are utterly steadfast even when earthly circumstances appear desolate.",
    "ultimatePoint": "The visible universe did not evolve from eternal or self-existing matter, but was framed into harmonious order out of non-existence by the sovereign Word of God; authentic biblical faith begins with acknowledging God as the transcendent Originator and Governor of all reality.",
    "personalRelevance": "Why you need to know this: When your personal resources run dry or circumstances seem completely impossible, your God is the One who creates out of nothing (creatio ex nihilo). What it does for you: It anchors your daily trust in God's spoken promise rather than visible human supports, delivering your heart from panic when earthly solutions vanish. Relationship with Jesus: Jesus possesses sovereign creative authority over your heart and destiny; walking with Him means trusting His Word to frame your future even when your natural eyes see nothing but empty hands.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC, Sinai Wilderness)",
      "sourceDate": "c. 1446–1406 BC",
      "sourceSetting": "Ancient Near Eastern backdrop where pagan nations worshipped natural elements (sun, stars, river Nile) as gods. Moses refutes nature worship by showing that the entire cosmos was summoned into existence by the transcendent God of the covenant.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68, Italy/Rome)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Hebrew believers in the Roman capital and Judea under intense pressure from the Roman state and non-Christian Jewish authorities. The epistle calls them to look beyond the visible, vanishing earthly temple to the invisible, eternal heavenly reality.",
      "redemptiveBridge": "From the initial framing of the physical cosmos in Genesis 1 to the ultimate consummation in Hebrews 12:28 (\"a kingdom which cannot be moved\"), God's Word remains the immutable foundation of all history.",
      "scholarshipNotes": "The Greek verb κατηρτίσθαι (katērtisthai, perfect passive infinitive of katartizō) signifies to mend, equip, adjust, or put into proper working order, emphasizing the rational, orderly design of the universe by God."
    }
  },
  "gen-1-3_John 1:1-5": {
    "id": "gen-1-3_John 1:1-5",
    "anchorRef": "Genesis 1:3",
    "targetRef": "John 1:1-5",
    "who": "Authorship & Context: Moses recorded the primeval illumination of the universe on Day 1 for Israel in the wilderness. The Apostle John, writing in Ephesus, testified as an eyewitness to the incarnate Son who declared \"I am the light of the world\" (John 8:12). Identified Characters: God the Father commanding light; the eternal Word in whom is life; the spiritually blind human race dwelling in moral darkness; and John the Baptist sent as a witness to the Light. Christological Subject & Referent: Jesus Christ, the true Light (τὸ φῶς τὸ ἀληθινόν, to phōs to alēthinon). He is the personal source and substance of both cosmic illumination and regenerating spiritual life. Redemptive Purpose: To reveal that humanity's spiritual condition after the Fall is total darkness, and only the sovereign incoming of Christ's life can shine light into the dead human heart.",
    "what": "The profound connection between the primeval illumination of the physical cosmos (יְהִי אוֹר וַיְהִי־אוֹר, Yehi or, vayhi-or — \"Let there be light, and there was light\", Gen 1:3) and the spiritual, uncreated Light of life embodied in the eternal Word (Ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων, \"In Him was life, and the life was the light of men\", John 1:4).",
    "when": "Source Horizon: Day 1 of Creation Week (Primeval Antiquity), recorded by Moses c. 1446–1406 BC. Target Horizon: The 1st-century apostolic era, written by John c. AD 85–95 in Ephesus.",
    "how": "Theological typology and verbal correspondence. In the Hebrew text, אוֹר (or — light) is called out of darkness (חֹשֶׁךְ, choshekh) by divine fiat prior to the establishment of the sun and stars on Day 4, establishing that light has its source in God Himself. John transposes this into soteriological reality: the divine Word contains uncreated life (ζωή, zōē — divine, self-existent life, distinct from biological βίος, bios). This life functions as τὸ φῶς (to phōs) shining in moral darkness (σκοτία, skotia). John uses the verb κατέλαβεν (katelaben, aorist of katalambanō): καὶ ἡ σκοτία αὐτὸ οὐ κατέλαβεν (\"and the darkness did not overcome / extinguish / comprehend it\"). The Greek term conveys both intellectual apprehension and aggressive military conquest; the moral darkness of the fallen world could neither grasp nor suppress the radiant majesty of the incarnate Son.",
    "why": "To demonstrate that just as the physical world lay in chaotic darkness until God spoke light into it, so fallen humanity remains in spiritual blindness and death until enlightened by the incoming of the Son of God. Regeneration is an act of sovereign creative illumination identical in power to the first day of creation.",
    "ultimatePoint": "Jesus Christ is the true and eternal Light of the world who shines in spiritual darkness, overcoming death and sin with the very creative power that first banished darkness from the cosmos.",
    "personalRelevance": "Why you need to know this: In seasons of deep confusion, moral failure, or spiritual depression, no human philosophy or positive thinking can dispel the darkness of the human soul; only the incoming of the living Light can. What it does for you: It banishes guilt and despair, assuring you that no shadow of sin, grief, or demonic oppression can ever overpower the life Christ imparts to you. Relationship with Jesus: Jesus is your personal Light who lives within you; walking with Him means you never have to stumble in darkness, for His presence illuminates your path and guides your daily decisions.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1446–1406 BC",
      "sourceSetting": "Egyptian sun-god worship (Ra/Re) held supreme prestige. Genesis 1:3 demonstrates that light existed three days before the sun was formed on Day 4, establishing that God Himself is the ultimate Source of light.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95, Ephesus)",
      "fulfillmentDate": "c. AD 85–95",
      "fulfillmentSetting": "Greco-Roman world seeking illumination through philosophy, mystery cults, and imperial claims. John reveals that true illumination is personal and resides solely in the incarnate Christ.",
      "redemptiveBridge": "From the physical illumination of the earth to the pillar of fire in the Exodus, to the prophetic promises of the Messiah as a \"Light to the Gentiles\" (Isa 42:6), culminating in Christ saying \"I am the light of the world\" (John 8:12)."
    }
  },
  "gen-1-3_2 Corinthians 4:6": {
    "id": "gen-1-3_2 Corinthians 4:6",
    "anchorRef": "Genesis 1:3",
    "targetRef": "2 Corinthians 4:6",
    "who": "Authorship & Context: Moses recorded the primeval creation narrative under divine inspiration in the wilderness. The Apostle Paul wrote 2 Corinthians from Macedonia (c. AD 56) to defend his apostolic ministry against false teachers who boasted in external credentials while blinding hearers to the simple glory of the gospel. Identified Characters: God the Creator who commanded light out of primeval darkness; the god of this age (Satan) who blinds the minds of unbelievers; the Apostle Paul and his apostolic co-laborers; and believers receiving spiritual sight. Christological Subject & Referent: Jesus Christ, the image of God (εἰκὼν τοῦ Θεοῦ), in whose face (ἐν προσώπῳ Ἰησοῦ Χριστοῦ) the uncreated glory of God is personally unveiled. Redemptive Purpose: To reveal that salvation is nothing less than an inward new creation: God sovereignly shines into the human heart to reveal the glory of Christ.",
    "what": "The apostolic parallel between the primeval command of creation (\"Let there be light\", Gen 1:3) and the internal recreation of the fallen human heart: \"For God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ\" (2 Cor 4:6).",
    "when": "Source Horizon: Primeval dawn of creation (Genesis 1). Target Horizon: Apostolic ministry in the mid-1st century (c. AD 56), unfolding the doctrine of the New Covenant.",
    "how": "Soteriological and hermeneutical exegesis. Paul quotes Genesis 1:3 by paraphrasing the Hebrew creative fiat (יְהִי אוֹר) into Greek: Ὁ Θεὸς ὁ εἰπών, Ἐκ σκότους φῶς λάμψει (\"God, who said, Out of darkness light shall shine\"). The verb ἔλαμψεν (elampsen, aorist active of lampō) denotes an instantaneous, decisive bursting forth of divine light. This light is not an abstract mystical illumination, but has a precise object: πρὸς φωτισμὸν τῆς γνώσεως τῆς δόξης τοῦ Θεοῦ (pros phōtismon tēs gnōseōs tēs doxēs tou Theou — \"for the illumination of the experiential knowledge of the glory of God\"). Paul anchors this glory concretely ἐν προσώπῳ Ἰησοῦ Χριστοῦ (en prosōpō Iēsou Christou — \"in the face/countenance of Jesus Christ\"). The term πρόσωπον (prosōpon) signifies personal presence and intimate visibility; the invisible, unapproachable glory of Yahweh that Moses could not behold directly is now fully, graciously, and warmly unveiled in the personal face of Jesus Christ.",
    "why": "To demonstrate that spiritual conversion cannot be produced by human rhetoric, philosophical argumentation, or self-induced morality. Just as the primeval void was powerless to generate its own light, the dead human heart is incapable of producing faith until God speaks His creative command into the soul, exposing Satanic blindness and imparting saving knowledge of Christ.",
    "ultimatePoint": "The identical sovereign divine power that commanded physical light to blaze out of primeval nothingness is the very power that raises dead sinners to life by shining the radiant knowledge of Christ into their hearts.",
    "personalRelevance": "Why you need to know this: Your salvation does not rest on your own intellectual cleverness or emotional strength, but upon an unshakeable sovereign act of God who personally spoke light into your spiritual darkness. What it does for you: It gives you immense evangelistic confidence and humility, knowing that no heart is too hard for God to illuminate, and frees you from trying to manipulate others into faith. Relationship with Jesus: Walking with Jesus means fixing your daily gaze upon His face through the Word, allowing His living glory to banish shame, fear, and self-doubt with the warmth of His redeeming love.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1446–1406 BC",
      "sourceSetting": "Sinai wilderness assembly being instructed that God alone creates light and order out of void and darkness.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 56, Macedonia)",
      "fulfillmentDate": "c. AD 56",
      "fulfillmentSetting": "Paul writing to Corinth where proud false apostles paraded philosophical eloquence. Paul contrasts external human pride with the inward, supernatural radiance of Christ's glory in jars of clay.",
      "redemptiveBridge": "The historical transition from the outward, fading glory that shone on the face of Moses at Sinai (2 Cor 3:7-13) to the permanent, transforming inward radiance of the glory of God seen in the face of Jesus Christ."
    }
  },
  "gen-1-26_Colossians 1:16-17": {
    "id": "gen-1-26_Colossians 1:16-17",
    "anchorRef": "Genesis 1:26",
    "targetRef": "Colossians 1:16-17",
    "who": "Authorship & Context: Moses recorded God's deliberation in creating humanity in the divine image. The Apostle Paul wrote Colossians from Roman imprisonment (c. AD 60–62) to the church at Colossae, combating the \"Colossian heresy\"—a syncretistic blend of Jewish legalism, asceticism, and angel worship that demoted Christ to a mere intermediary among celestial powers. Identified Characters: The Triune Godhead engaged in eternal divine deliberation (\"Let Us make man\"); the first Adam formed from the dust; celestial and angelic hierarchies (thrones, dominions, principalities, powers); and the universal body of Christ. Christological Subject & Referent: Jesus Christ, the image of the invisible God (εἰκὼν τοῦ Θεοῦ τοῦ ἀοράτου) and the Firstborn over all creation (πρωτότοκος πάσης κτίσεως). He is the divine Archetype after whose pattern humanity was originally designed. Redemptive Purpose: To dethrone all angelic and demonic rivals, establishing that Christ is the absolute Head of both the original physical creation and the spiritual new creation.",
    "what": "The canonical relationship between the divine council in Genesis 1:26 (\"Let us make man in our image, after our likeness\") and Paul's Christological hymn in Colossians 1:16-17: \"For by him were all things created, that are in heaven, and that are in earth, visible and invisible... all things were created by him, and for him: And he is before all things, and by him all things consist.\"",
    "when": "Source Horizon: Day 6 of Creation Week (Genesis 1:26), recorded by Moses c. 1446–1406 BC. Target Horizon: Paul's imprisonment in Rome c. AD 60–62, addressing late 1st-century cosmological speculation.",
    "how": "Christological typology and semantic exegesis. In Genesis 1:26, the Hebrew text employs a unique plural cohortative: נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ (Naʿaseh ʾAdam betsalmenu kidmutenu — \"Let Us make man in Our image, according to Our likeness\"). The noun צֶלֶם (tselem — representative image/replica) and דְּמוּת (demut — likeness/resemblance) indicate that man was fashioned to reflect God's nature. In Colossians 1:15-17, Paul identifies Christ as the true, eternal Archetype: εἰκὼν τοῦ Θεοῦ τοῦ ἀοράτου (eikōn tou Theou tou aoratou — \"the exact, visible image/manifestation of the invisible God\"). Paul demonstrates Christ's supremacy through three prepositions: ἐν αὐτῷ (en autō — \"in Him\" as the sphere of creation), δι' αὐτοῦ (di' autou — \"through Him\" as active Agent), and εἰς αὐτόν (eis auton — \"unto/for Him\" as ultimate Climax and Heir). Furthermore, the title πρωτότοκος πάσης κτίσεως (prōtotokos pasēs ktiseōs — \"Firstborn of all creation\") is an ancient Jewish title of legal supremacy, inheritance, and royal rank (as in Psalm 89:27), not chronological generation. Finally, Paul declares: τὰ πάντα ἐν αὐτῷ συνέστηκεν (ta panta en autō synestēken — perfect active of synistēmi: \"in Him all things continuously hold together / cohere\"), proving that Christ is the active cosmic glue preserving the universe from atomic and moral dissolution.",
    "why": "To establish that mankind was not patterned after angels or created in a spiritual vacuum, but created according to the eternal pattern of the Son. Because Christ is the Originator, Architect, and Goal of creation, redemption is not a foreign intrusion into the world, but the rightful King reclaiming His own inheritance.",
    "ultimatePoint": "Jesus Christ is the divine Original and sovereign Architect of all reality: created things exist through Him, hold together in Him, and find their ultimate purpose in bringing glory to Him as Lord.",
    "personalRelevance": "Why you need to know this: When your personal world feels fragmented, chaotic, or out of control, the very Lord who holds the cosmos together is the One who holds your life in His hands. What it does for you: It frees you from the fear of occult powers, astrology, or hostile spiritual forces, because every invisible realm and power is subordinate to King Jesus. Relationship with Jesus: Knowing Christ as your Creator and Sustainer invites you to entrust every anxiety and daily responsibility into His capable hands, knowing that He will hold you together through every storm.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1446–1406 BC",
      "sourceSetting": "Ancient Near Eastern cosmologies where humans were created as slaves to feed the gods. Moses reveals that humanity was created in the royal, dignified image of God to rule over the earth in righteousness.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 60–62, Rome)",
      "fulfillmentDate": "c. AD 60–62",
      "fulfillmentSetting": "Paul writing from prison to the Lycus Valley where believers were tempted to seek spiritual fullness in angels, ascetic rituals, and mystical visions. Paul declares that all the fullness of God dwells bodily in Christ.",
      "redemptiveBridge": "From the first Adam who marred the divine image through rebellion to the Last Adam who perfectly manifests the uncreated image of God and restores fallen believers into that same glorious likeness (Col 3:10)."
    }
  },
  "gen-3-15_Galatians 4:4-5": {
    "id": "gen-3-15_Galatians 4:4-5",
    "anchorRef": "Genesis 3:15",
    "targetRef": "Galatians 4:4-5",
    "who": "Authorship & Context: Moses recorded the Fall of mankind and the Protoevangelium in Genesis. The Apostle Paul wrote Galatians (c. AD 48–49) from Antioch to the churches of southern Galatia, vigorously refuting Judaizers who insisted that Gentile converts must submit to Mosaic circumcision to be saved. Identified Characters: Yahweh Elohim pronouncing judgment; the Serpent (Satan); the Woman (Eve, and typologically Mary); the Seed of the Serpent (unbelieving world and demonic powers); the Seed of the Woman (the Messiah); and adopted sons of God. Christological Subject & Referent: Jesus Christ, the promised Seed born of a woman (γενόμενον ἐκ γυναικός). He is the champion Warrior who takes the deadly strike on His heel to crush the head of the ancient dragon. Redemptive Purpose: To establish that salvation was promised as pure grace before any human legal code existed, and is fulfilled by the Son redeeming those enslaved under law.",
    "what": "The canonical fulfillment of the Protoevangelium (the first gospel promise of Genesis 3:15) in Paul's doctrine of the Incarnation: \"When the fulness of the time was come, God sent forth his Son, made of a woman, made under the law, to redeem them that were under the law, that we might receive the adoption of sons\" (Gal 4:4-5).",
    "when": "Source Horizon: The Primeval Fall in Eden (Genesis 3), recorded by Moses c. 1446–1406 BC. Target Horizon: The fullness of time in 1st-century Roman Judea, expounded by Paul c. AD 48–49.",
    "how": "Covenantal and grammatical fulfillment. In Genesis 3:15, God declares to the serpent: וְאֵיבָה אָשִׁית בֵּינְךָ וּבֵין הָאִשָּׁה וּבֵין זַרְעֲךָ וּבֵין זַרְעָהּ הוּא יְשׁוּפְךָ רֹאשׁ וְאַתָּה תְּשׁוּפֶנּוּ עָקֵב (Ve'eyvah ʾashit beynkha uveyn ha'ishah uveyn zarʿakha uveyn zarʿah; hu yeshupekha rosh, ve'attah teshufennu ʿaqev — \"And I will put enmity between you and the woman, and between your seed and her seed; He shall crush your head, and you shall bruise His heel\"). The Hebrew noun זֶרַע (zeraʿ — seed/offspring) is paired with the masculine singular pronoun הוּא (hu — \"He\"), identifying the ultimate Seed not as a generic plural populace, but as a singular male Champion. Paul fulfills this in Galatians 4:4 with precise theological phrases: τὸ πλήρωμα τοῦ χρόνου (to plērōma tou chronou — the exact culmination of appointed prophetic history), ἐξαπέστειλεν ὁ Θεὸς τὸν Υἱὸν αὐτοῦ (exapesteilen ho Theos ton Huion autou — God sent forth out of eternity His pre-existent Son), and uniquely γενόμενον ἐκ γυναικός (genomenon ek gynaikos — \"born of a woman\", deliberately omitting human paternity to reflect the virgin conception of the Seed of the woman). Christ was also γενόμενον ὑπὸ νόμον (genomenon hypo nomon — born under the jurisdiction of the Mosaic law) ἵνα τοὺς ὑπὸ νόμον ἐξαγοράσῃ (hina tous hypo nomon exagorasē — \"in order that He might purchase out of the slave-market those under the curse of the law\"), bestowing τὴν υἱοθεσίαν (tēn huiothesian — full legal adoption and inheritance as sons).",
    "why": "To demonstrate that the incarnation and substitutionary death of Christ were not emergency improvisations, but the exact execution of the covenant promise spoken by God at the very inception of human sin. Christ entered the realm of the curse to break the curse from within.",
    "ultimatePoint": "Jesus Christ is the singular Seed of the woman promised in Eden who entered human history through the virgin birth, fulfilled the law's righteous demands, and crushed the power of Satan by redeeming sinners into the family of God.",
    "personalRelevance": "Why you need to know this: You are not an orphan fighting the devil in your own fragile strength; your Champion has already crushed Satan's head and delivered you from the slave-market of sin. What it does for you: It guarantees your permanent status as an adopted child of God, silencing the accuser's lies and replacing legalistic dread with the joyful cry \"Abba, Father!\" Relationship with Jesus: Walking with Jesus means living in the triumph of His finished victory, coming boldly to the Father as His beloved child, knowing that nothing can snatch you from His hand.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1446–1406 BC",
      "sourceSetting": "The tragic wreckage of the Fall in the Garden of Eden. God steps into human tragedy not to abandon mankind, but to issue a prophetic declaration of war against the serpent.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 48–49, Antioch/Galatia)",
      "fulfillmentDate": "c. AD 48–49",
      "fulfillmentSetting": "Galatian churches bewitched by legalistic Judaizers demanding obedience to Torah rituals for salvation. Paul reminds them that the law was only a temporary tutor until the Seed should come.",
      "redemptiveBridge": "Across four millennia of biblical history, the unbroken golden thread of the \"Seed\" traces from Eve to Sarah, to Rebekah, to Judah, to Rahab, to Ruth, to David, culminating in Mary giving birth to Jesus in Bethlehem."
    }
  },
  "gen-12-3_Galatians 3:8,16": {
    "id": "gen-12-3_Galatians 3:8,16",
    "anchorRef": "Genesis 12:3",
    "targetRef": "Galatians 3:8, 16",
    "who": "Authorship & Context: Moses recorded the call of Abram from Ur of the Chaldees into the Promised Land. The Apostle Paul wrote Galatians (c. AD 48–49) to defend the pure gospel of justification by faith alone. Identified Characters: Yahweh making unconditional covenant promises; Abraham believing God and having it credited as righteousness; the Gentile nations (heathen / τὰ ἔθνη) destined for blessing; and legalistic Judaizers attempting to add Mosaic circumcision. Christological Subject & Referent: Jesus Christ, the singular Seed (τῷ σπέρματί σου, ὅς ἐστιν Χριστός) through whom all covenant promises find their \"Yes\" and \"Amen\". Redemptive Purpose: To prove that God's plan from the very beginning was global salvation for all nations through faith in Christ, entirely independent of the Mosaic ceremonial code.",
    "what": "The foundational Abrahamic Covenant promise (\"in thee shall all families of the earth be blessed\") connected to Paul's apostolic exposition in Galatians 3:8,16: \"And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham... Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.\"",
    "when": "Source Horizon: Middle Bronze Age (c. 2091 BC), God calling Abram from Ur and Haran into Canaan. Target Horizon: Apostle Paul writing to the churches of Galatia c. AD 48–49 in response to the Judaizing controversy.",
    "how": "Rigorous grammatical, canonical, and Christological exegesis. In Genesis 12:3, Yahweh promises: וְנִבְרְכוּ בְךָ כֹּל מִשְׁפְּחֹת הָאֲדָמָה (venivrekhu vekha kol mishpekhot ha'adamah — Niphal stem: \"in you shall all the families/clans of the earth be blessed / find blessing\"). Paul identifies this promise as the gospel itself: προευηγγελίσατο τῷ Ἀβραάμ (proeuēngelisato tō Abraam — \"the Scripture preached the gospel beforehand to Abraham\"). In Galatians 3:16, Paul scrutinizes the grammatical number of the Hebrew collective noun זֶרַע (zeraʿ) and its Greek Septuagint counterpart σπέρμα (sperma): οὐ λέγει, Καὶ τοῖς σπέρμασιν, ὡς ἐπὶ πολλῶν, ἀλλ' ὡς ἐφ' ἑνός, Καὶ τῷ σπέρματί σου, ὅς ἐστιν Χριστός (\"He does not say, 'And to seeds' [σπέρμασιν, spermasin], as of many, but as of one, 'And to your Seed' [σπέρματί, spermati], which is Christ\"). While the noun can have collective usage, Paul by the Holy Spirit reveals its intentional teleological focus: the covenant promises were addressed not to an ethnic multitude, but to a single covenant Representative—Jesus Christ. Therefore, Gentiles who belong to Christ by faith are counted true heirs of Abraham without needing circumcision or Torah works.",
    "why": "To prove that the gospel of justification by grace through faith is not an apostolic innovation or deviation from Moses, but the predetermined fulfillment of the unconditional Abrahamic Covenant, which was ratified 430 years before the Sinai Law and cannot be annulled by legalistic works.",
    "ultimatePoint": "Jesus Christ is the singular promised Seed of Abraham in whom all nations of the earth are blessed with the gift of righteousness through faith, fulfilling the covenant promise given two millennia prior.",
    "personalRelevance": "Why you need to know this: God's covenant blessing and unconditional favor reach you through faith alone, not through human pedigree, religious performance, or flawless self-effort. What it does for you: It eliminates spiritual performance anxiety and imposter syndrome, assuring you that you are a full heir to every promise of God in Christ Jesus. Relationship with Jesus: In Christ, you are counted completely righteous and dearly loved by the Father, walking day by day in the ancient covenant of grace as Abraham's spiritual offspring.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC, recording patriarchal history)",
      "sourceDate": "c. 2091 BC",
      "sourceSetting": "Abram called out of pagan Mesopotamian idolatry into nomad wandering in Canaan, receiving the divine pledge of land, seed, and global blessing.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 48–49, Antioch)",
      "fulfillmentDate": "c. AD 48–49",
      "fulfillmentSetting": "Galatian churches targeted by legalistic agitators demanding circumcision for Gentile converts.",
      "redemptiveBridge": "From Abraham's altar in Canaan to Calvary, the covenant of grace remains immutable."
    }
  },
  "gen-22-2_Hebrews 11:17": {
    "id": "gen-22-2_Hebrews 11:17",
    "anchorRef": "Genesis 22:2",
    "targetRef": "Hebrews 11:17",
    "who": "Authorship & Context: Moses recorded the binding of Isaac (the Akedah) in Genesis 22. The author of Hebrews (c. AD 64–68) addressed Jewish believers tempted to abandon their confession under Roman persecution. Identified Characters: Yahweh testing Abraham; Abraham the faithful patriarch; Isaac the beloved, obedient son who carried the wood up Moriah; and the angel of the Lord halting the sacrifice. Christological Subject & Referent: Jesus Christ, the ultimate only-begotten Son who carried the wood of His own cross and was offered by His Father, actually experiencing the death that Isaac was spared. Redemptive Purpose: To demonstrate that Abraham's faith was rooted in resurrection power, serving as the supreme historical type of the Father offering the Son for the salvation of the world.",
    "what": "The typological and hermeneutical climax of the Akedah (the binding of Isaac on Mount Moriah, \"Take now thy son, thine only son Isaac, whom thou lovest, and offer him there for a burnt offering\") connected to Hebrews 11:17-19: \"By faith Abraham, when he was tried, offered up Isaac: and he that had received the promises offered up his only begotten son, Of whom it was said, That in Isaac shall thy seed be called: Accounting that God was able to raise him up, even from the dead; from whence also he received him in a figure.\"",
    "when": "Source Horizon: Patriarchal Era (c. 2050 BC) on Mount Moriah in the land of Canaan. Target Horizon: Apostolic Era (c. AD 64–68), instructing Hebrew Christians prior to AD 70.",
    "how": "Profound typological and verbal exegesis. In Genesis 22:2, God commands: קַח־נָא אֶת־בִּנְךָ אֶת־יְחִידְךָ אֲשֶׁר־אָהַבְתָּ אֶת־יִצְחָק (Qach-na ʾet-binkha ʾet-yechidekha ʾasher-ʾahavta, ʾet-Yitschaq — \"Take now your son, your only one [יָחִיד, yachid — unique, deeply loved, irreplaceable heir], whom you love, Isaac\"). This is the very first time \"love\" (אָהַב, ʾahav) appears in the Hebrew Bible, establishing the theological principle that biblical love is defined by a father giving his only son as a sacrifice. In Hebrews 11:17, the author translates יָחִיד as τὸν μονογενῆ (ton monogenē — \"the only-begotten / uniquely precious one\"), identical to John 3:16. Hebrews explains the mechanics of Abraham's faith: λογισάμενος ὅτι καὶ ἐκ νεκρῶν ἐγείρειν δυνατὸς ὁ Θεός (logisamenos hoti kai ek nekrōn egeirein dynatos ho Theos — \"accounting / reasoning that God was able to raise him even from the dead\"). The phrase ὅθεν αὐτὸν καὶ ἐν παραβολῇ ἐκομίσατο (hothen auton kai en parabolē ekomisato — \"from whence also he received him back in a figure / type / parable\") proves that Isaac's three-day journey under sentence of death and release on the third day was a living prophetic shadow of the death and resurrection of Jesus Christ on that identical geographical mountain ridge of Mount Moriah (Golgotha).",
    "why": "To reveal to the Hebrew church and all believers that Abraham's obedience was not an act of blind fanaticism, but an act of triumphant resurrection faith. God commanded this prophetic drama so that when the true Father gave His true only-begotten Son on Calvary, the covenant people would recognize the divine signature of redemption.",
    "ultimatePoint": "The sacrifice of Isaac on Moriah was God's living prophetic blueprint of the crucifixion and resurrection of Jesus Christ: the Father spared not His only begotten Son, but delivered Him up to secure eternal life for all who believe.",
    "personalRelevance": "Why you need to know this: When God asks you to surrender something you treasure deeply, He is not seeking your ruin, but training your heart to trust in His resurrection power. What it does for you: It casts out all fear of loss, teaching you that whatever you place on the altar of obedience to God is never truly lost, as revealed in Romans 8:32 where God spared not His own Son. Relationship with Jesus: Walking with Jesus means gazing upon the incredible love of the Father who did not spare His only Son for you, and responding with radical, wholehearted devotion.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 2050 BC",
      "sourceSetting": "Mount Moriah in Canaan (the precise location where Solomon later built the Temple and where Jerusalem stands). Abraham is commanded to sacrifice the child of promise.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Jewish Christians wavering under persecution. The author reminds them of the faith of their father Abraham who trusted God through the darkest trial.",
      "redemptiveBridge": "Across two millennia, the wood carried by Isaac up Mount Moriah foreshadows the cross carried by Jesus up Golgotha, where the true substitutionary sacrifice was completed."
    }
  },
  "gen-22-2_John 3:16": {
    "id": "gen-22-2_John 3:16",
    "anchorRef": "Genesis 22:2",
    "targetRef": "John 3:16",
    "who": "Authorship & Context: Moses recorded Abraham offering Isaac on Moriah. The Apostle John recorded the nocturnal conversation between Jesus and Nicodemus in Jerusalem (c. AD 30–33), composed c. AD 85–95. Identified Characters: God the Father; God the Son; Abraham and Isaac as living shadows; Nicodemus the Pharisee representing inquiring Israel; and the entire fallen world (ὁ κόσμος). Christological Subject & Referent: Jesus Christ, the only-begotten Son of God (τὸν Υἱὸν τὸν μονογενῆ). While Isaac was spared and a ram substituted in his place, Jesus is the Son who was not spared, but freely given as the ultimate substitute for the sins of the world. Redemptive Purpose: To reveal the infinite depth of God's love: the measure of the Father's love for fallen rebels is demonstrated by the supreme costliness of giving His uniquely beloved Son.",
    "what": "The profound linguistic, thematic, and theological harmony connecting the Father's love in Genesis 22:2 (\"thine only son, whom thou lovest\") to the gospel summary in John 3:16: \"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.\"",
    "when": "Source: Middle Bronze Age (c. 2050 BC) on Mount Moriah. Target: 1st-century Roman Judea, during Christ's dialogue with Nicodemus.",
    "how": "Theological and linguistic fulfillment. John 3:16 directly reflects the vocabulary of Genesis 22:2 in the Septuagint. The Greek phrase τὸν Υἱὸν τὸν μονογενῆ (ton Huion ton monogenē — \"the uniquely begotten Son\") translates the Hebrew יָחִיד (yachid — singular, irreplaceable heir). John employs the adverb οὕτως (houtōs — \"in this manner / to this degree\"): Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον (\"For God loved the world in this manner: that He gave His unique Son\"). In Genesis 22, God said to Abraham: \"Now I know that thou fearest God, seeing thou hast not withheld thy son, thine only son from me\" (Gen 22:12). In John 3:16, the roles are reversed: now humanity knows how infinitely God loves the world, seeing that the Father did not withhold His only-begotten Son, delivering Him up so that πᾶς ὁ πιστεύων (pas ho pisteuōn — \"every single one who believes\") should not perish (ἀπόληται, apolētai) but have eternal life (ζωὴν αἰώνιον, zōēn aiōnion).",
    "why": "To demonstrate that the supreme demonstration of divine love is self-giving sacrifice. The Akedah was designed by God to give humanity a human category (a father giving his beloved only son) through which we could begin to fathom the heart of God giving Jesus on Calvary.",
    "ultimatePoint": "The giving of Isaac on Moriah prefigured the climactic event of redemptive history: God the Father so loved the fallen world that He gave His uniquely begotten Son as a sacrifice to rescue sinners from eternal destruction.",
    "personalRelevance": "Why you need to know this: If you ever question whether God loves you, look at Calvary: God gave what was most precious to Him—His own Son—to ransom you from death. What it does for you: It demolishes guilt, fear, and feelings of worthlessness, assuring you that you are loved by God with an everlasting, infinite love that cost Him everything. Relationship with Jesus: Believing in Jesus means resting in the embrace of a Father who withheld nothing for your salvation, living each day in secure, joyful communion with Him.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 2050 BC",
      "sourceSetting": "Mount Moriah where Abraham was willing to surrender his beloved son to the covenant Lord.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95, recording Christ's words c. AD 30)",
      "fulfillmentDate": "c. AD 30 / AD 85–95",
      "fulfillmentSetting": "Jerusalem at night, speaking to Nicodemus, a ruler of the Jews who thought lineage and Torah observance guaranteed kingdom entrance.",
      "redemptiveBridge": "Abraham's readiness to offer Isaac foreshadows God the Father actually offering Jesus Christ, transforming Mount Moriah from a place of testing into Golgotha, the place of universal redemption."
    }
  },
  "gen-22-2_Romans 8:32": {
    "id": "gen-22-2_Romans 8:32",
    "anchorRef": "Genesis 22:2",
    "targetRef": "Romans 8:32",
    "who": "Authorship & Context: Moses recorded the Akedah in Genesis. The Apostle Paul wrote Romans from Corinth (c. AD 57) to prepare believers for mission and establish them in the unshakeable assurance of God's sovereign electing love. Identified Characters: God the Father who did not spare His own Son; Jesus Christ delivered up for us; Abraham as the obedient covenant type; and all the justified elect of God. Christological Subject & Referent: Jesus Christ, the Father's own Son (τοῦ ἰδίου Υἱοῦ). He is the supreme gift whose delivery guarantees all other spiritual blessings. Redemptive Purpose: To provide the ultimate legal and emotional ground for the believer's assurance: if God did not withhold His most precious treasure, He will never withhold any good thing necessary for our eternal salvation.",
    "what": "The apostolic citation and theological application of Genesis 22:12,16 in Paul's hymn of assurance: \"He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?\" (Rom 8:32).",
    "when": "Source: Patriarchal Era (c. 2050 BC). Target: Apostolic Era (c. AD 57), written to the church in Rome.",
    "how": "Direct verbal allusion and a fortiori rabbinic argument (kal va-chomer / from the greater to the lesser). In the Septuagint of Genesis 22:16, the angel of Yahweh proclaims to Abraham: οὐκ ἐφείσω τοῦ υἱοῦ σου τοῦ ἀγαπητοῦ (ouk epheisō tou huiou sou tou agapētou — \"thou hast not spared thy beloved son\"). In Romans 8:32, Paul intentionally quotes this precise Greek verb: ὅς γε τοῦ ἰδίου Υἱοῦ οὐκ ἐφείσατο (hos ge tou idiou Huiou ouk epheisato — \"He who indeed did not spare His own Son\"). Paul contrasts τοῦ ἰδίου Υἱοῦ (\"His own Son\" — denoting unique, uncreated ontological sonship) with human adopted sons. Paul then uses the verb παρέδωκεν (paredōken — aorist active of paradidōmi: \"handed over / delivered up to judicial death\"), the identical term used of Christ being handed over for our transgressions (Rom 4:25, Isa 53:12). The a fortiori logic is impregnable: since God has already given the greatest conceivable gift (His own Son), every lesser gift—grace, preservation, justification, eternal life—is guaranteed: πῶς οὐχὶ καὶ σὺν αὐτῷ τὰ πάντα ἡμῖν χαρίσεται (pōs ouchi kai syn autō ta panta hēmin charisetai — \"how will He not also with Him freely grant us all things?\").",
    "why": "To settle forever the question of the believer's security and God's goodwill. In the face of suffering, tribulation, persecution, or accusation, the cross stands as the permanent proof that God is for us and nothing can separate us from His love.",
    "ultimatePoint": "Just as Abraham did not spare Isaac on Moriah, so God the Father did not spare His own beloved Son on Calvary, but delivered Him up to death for us all, guaranteeing that every covenant blessing is eternally secure.",
    "personalRelevance": "Why you need to know this: When you face financial hardship, sickness, or deep discouragement, Satan whispers that God has abandoned you or is holding out on you; Romans 8:32 shatters that lie forever. What it does for you: It fills your soul with absolute security, knowing that because God gave His Son for you, He will never withhold the daily grace, protection, and provision you need. Relationship with Jesus: Walking with Jesus means living with quiet confidence in the Father's generous heart, knowing that He who gave His Son has already committed His entire kingdom to your eternal good.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 2050 BC",
      "sourceSetting": "Mount Moriah, where Abraham withheld not his only son from God.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 57, Corinth)",
      "fulfillmentDate": "c. AD 57",
      "fulfillmentSetting": "The imperial capital of Rome, where Christians faced severe trials, social ostracization, and eventual martyrdom under Nero. Paul anchors them in the unshakeable love of God.",
      "redemptiveBridge": "Abraham's readiness to spare nothing for God is transcended by God's readiness to spare nothing—not even His own Son—for our salvation."
    }
  },
  "gen-22-8_John 1:29": {
    "id": "gen-22-8_John 1:29",
    "anchorRef": "Genesis 22:8",
    "targetRef": "John 1:29",
    "who": "Authorship & Context: Moses recorded Abraham's prophetic answer to Isaac on the slopes of Mount Moriah. John the Baptist, the last and greatest Old Testament prophet, proclaimed Christ's identity at the Jordan River (c. AD 26–27), recorded by the Apostle John (c. AD 85–95). Identified Characters: Abraham the prophet-patriarch; Isaac the trusting son asking \"Where is the lamb?\"; John the Baptist pointing the crowd to Jesus; the crowds at the Jordan; and Jesus of Nazareth. Christological Subject & Referent: Jesus Christ, the Lamb of God (ὁ ἀμνὸς τοῦ Θεοῦ). He is the exact lamb that Abraham prophesied God would provide for Himself on the mount. Redemptive Purpose: To identify Jesus at the inauguration of His public ministry not as a political conqueror, but as the sacrificial Lamb whose blood expiates the sin of the entire world.",
    "what": "The direct prophetic fulfillment of Abraham's declaration in Genesis 22:8 (\"My son, God will provide himself a lamb for a burnt offering\") in the proclamation of John the Baptist in John 1:29: \"The next day John seeth Jesus coming unto him, and saith, Behold the Lamb of God, which taketh away the sin of the world.\"",
    "when": "Source Horizon: Patriarchal Era (c. 2050 BC) on Mount Moriah. Target Horizon: AD 26–27 at Bethany beyond Jordan, beginning Christ's earthly ministry.",
    "how": "Prophetic anticipation and canonical identification. When Isaac asked: \"Where is the lamb (הַשֶּׂה, hasseh) for a burnt offering?\", Abraham prophetically responded: אֱלֹהִים יִרְאֶה־לּוֹ הַשֶּׂה לְעֹלָה בְּנִי (Elohim yir'eh-lo hasseh le'olah, beni — \"God will provide / see for Himself the lamb for a burnt offering, my son\"). When Abraham reached the summit, God provided a ram (אַיִל, ʾayil) caught in the thicket, not a lamb, leaving Abraham's prophecy regarding \"the lamb\" unfulfilled in his lifetime. Two thousand years later, John the Baptist sees Jesus and cries: Ἴδε ὁ ἀμνὸς τοῦ Θεοῦ ὁ αἴρων τὴν ἁμαρτίαν τοῦ κόσμου (Ide ho amnos tou Theou ho airōn tēn hamartian tou kosmou — \"Behold the Lamb of God who takes away the sin of the world!\"). The noun ἀμνός (amnos — sacrificial lamb, used in LXX Isaiah 53:7) identifies Jesus as the divinely provided substitute. The present active participle αἴρων (airōn — from airō: to lift up, bear away, carry off) signifies that Jesus does not merely cover sin temporarily like animal sacrifices, but completely removes and expiates the guilt of the world before God.",
    "why": "To demonstrate the seamless harmony of the canon: the very question that hung unanswered over Mount Moriah for twenty centuries (\"Where is the lamb?\") is triumphantly answered at the Jordan River when Jesus appears. God Himself provided the Lamb.",
    "ultimatePoint": "Jesus Christ is the true Lamb of God whom Abraham foretold on Mount Moriah: divinely provided by the Father to bear away the sin of the world through His substitutionary death on the cross.",
    "personalRelevance": "Why you need to know this: You can never produce an adequate sacrifice to pay for your own sins or earn God's acceptance; God Himself had to provide the Lamb. What it does for you: It lifts the crushing weight of guilt and condemnation off your conscience, knowing that Jesus carried away your sins completely into the sea of God's forgetfulness. Relationship with Jesus: Walking with Jesus means fixing your eyes daily upon Him as your Lamb, thanking Him that His blood has washed you white as snow and made you clean before the Father.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 2050 BC",
      "sourceSetting": "Mount Moriah, where a ram was sacrificed instead of Isaac, but the promised \"Lamb\" was awaited.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95, recording John the Baptist c. AD 26–27)",
      "fulfillmentDate": "c. AD 26–27",
      "fulfillmentSetting": "The wilderness of Judea at the Jordan River, where John was baptizing repentant Israelites.",
      "redemptiveBridge": "The prophetic trajectory travels from the patriarchal lamb of Abraham (one lamb for one family) to the Passover lamb of Exodus (one lamb for one household) to the Day of Atonement (lamb for the nation) to Jesus Christ, the Lamb of God who takes away the sin of the whole world."
    }
  },
  "gen-22-8_Romans 8:32": {
    "id": "gen-22-8_Romans 8:32",
    "anchorRef": "Genesis 22:8",
    "targetRef": "Romans 8:32",
    "who": "Authorship & Context: Moses recorded Abraham naming the mount \"Yahweh-Yireh\" (The LORD Will Provide). The Apostle Paul wrote Romans (c. AD 57) to proclaim the full assurance of the gospel of grace. Identified Characters: Yahweh the Provider; Abraham the obedient friend of God; Isaac the son; and the universal body of believers justified by faith. Christological Subject & Referent: Jesus Christ, the ultimate provision of Yahweh-Yireh, handed over for the redemption of all who believe. Redemptive Purpose: To prove that God's greatest provision in history was the cross, guaranteeing that all secondary needs will be generously supplied.",
    "what": "The fulfillment of the covenant name Yahweh-Yireh (\"In the mount of the LORD it shall be seen/provided\", Gen 22:8,14) in Paul's declaration in Romans 8:32 that God \"spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?\"",
    "when": "Source Horizon: Patriarchal Era (c. 2050 BC). Target Horizon: Apostolic Era (c. AD 57).",
    "how": "Covenantal and theological convergence. In Genesis 22:14, Abraham named the place יְהוָה יִרְאֶה (Yahweh Yir'eh — \"The LORD will provide / will be seen\"), declaring as a proverb: \"In the mount of the LORD it shall be provided.\" This mountain ridge was the exact topography of Jerusalem and Golgotha. Paul recognizes that on that very mount, two thousand years later, God provided what Abraham could not: His own Son delivered up (παρέδωκεν αὐτόν, paredōken auton) as the final sacrifice. If God did not withhold the supreme provision of Mount Moriah, He will never abandon His people.",
    "why": "To anchor the believer's confidence in the historical reality of the cross. God's covenant name Yahweh-Yireh is not merely about physical bread, but about the bread of life delivered up for the life of the world.",
    "ultimatePoint": "The promise of Yahweh-Yireh on Mount Moriah found its absolute fulfillment at Golgotha, where God provided His own Son as the ultimate substitutionary offering for our eternal redemption.",
    "personalRelevance": "Why you need to know this: When you worry about tomorrow, finances, or survival, remember that God has already provided for your greatest need at the greatest possible cost. What it does for you: It silences anxiety and panic, giving you quiet confidence that the God who gave His Son on the mount will surely supply all your needs according to His riches in glory. Relationship with Jesus: Knowing Jesus as God's supreme provision invites you to cast all your cares upon Him, trusting His daily faithfulness.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 2050 BC",
      "sourceSetting": "Mount Moriah, where Abraham established the prophetic title Yahweh-Yireh.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 57)",
      "fulfillmentDate": "c. AD 57",
      "fulfillmentSetting": "Paul writing from Corinth to the Roman church facing imperial pressure.",
      "redemptiveBridge": "The prophetic name Yahweh-Yireh bridges directly from the altar of Abraham to the cross of Jesus Christ."
    }
  },
  "gen-22-8_1 Peter 1:19-20": {
    "id": "gen-22-8_1 Peter 1:19-20",
    "anchorRef": "Genesis 22:8",
    "targetRef": "1 Peter 1:19-20",
    "who": "Authorship & Context: Moses recorded the provision of the sacrifice in Genesis 22. The Apostle Peter wrote 1 Peter from Rome / \"Babylon\" (c. AD 64–65) to scattered believers suffering fiery trials in Asia Minor (Pontus, Galatia, Cappadocia, Asia, Bithynia). Identified Characters: God the eternal Father; Abraham and Isaac; Jesus Christ the unblemished Lamb; and the elect exiles of the dispersion redeemed from their empty way of life. Christological Subject & Referent: Jesus Christ, the spotless Lamb foreknown before the foundation of the world (προεγνωσμένου μὲν πρὸ καταβολῆς κόσμου) and manifested in these last times. Redemptive Purpose: To anchor the holiness and hope of suffering pilgrims in the infinite value of the blood of the Lamb, which was decreed before creation began.",
    "what": "The canonical connection between the lamb provided by God on Mount Moriah (Gen 22:8) and Peter's declaration that believers are redeemed \"with the precious blood of Christ, as of a lamb without blemish and without spot: Who verily was foreordained before the foundation of the world, but was manifest in these last times for you\" (1 Pet 1:19-20).",
    "when": "Source Horizon: Patriarchal Era (c. 2050 BC). Target Horizon: Apostolic Era under Nero's persecution (c. AD 64–65).",
    "how": "Covenantal typology and redemptive chronology. Abraham's prophetic foresight (אֱלֹהִים יִרְאֶה־לּוֹ הַשֶּׂה, Elohim yir'eh-lo hasseh — \"God will provide the lamb\") is revealed by Peter to have originated before time itself. Peter employs sacrificial terminology from the Levitical cultus: τιμίῳ αἵματι ὡς ἀμνοῦ ἀμώμου καὶ ἀσπίλου Χριστοῦ (timiō haimati hōs amnou amōmou kai aspilou Christou — \"with the precious blood as of a lamb unblemished [ἄμωμος, amōmos] and spotless [ἄσπιλος, aspilos], Christ\"). Peter then reveals that this sacrificial Lamb was not an afterthought: προεγνωσμένου μὲν πρὸ καταβολῆς κόσμου (proegnōsmenou men pro katabolēs kosmou — \"foreknown / foreordained before the throwing down of the world\"), but φανερωθέντος δὲ ἐπ' ἐσχάτου τῶν χρόνων (phanerōthentos de ep' eschatou tōn chronōn — \"manifested in the last of the times for your sake\"). What Abraham foresaw on the mountain was the historical enactment of God's eternal decree of redemption.",
    "why": "To demonstrate that the redemption of believers did not cost perishable silver or gold, but the precious blood of the eternal Son of God. This infinite cost demands reverent fear and unwavering holy living amidst hostile persecutions.",
    "ultimatePoint": "Jesus Christ is the eternal Lamb provided by God, whose precious, spotless blood was foreordained before creation began and poured out on the cross to purchase our eternal redemption.",
    "personalRelevance": "Why you need to know this: Your redemption was not a last-minute emergency measure; God loved you and planned your salvation through the blood of Christ before the stars were formed. What it does for you: It gives you immense spiritual dignity and worth, freeing you from trivial pursuits and delivering you from the empty, futile traditions of this world. Relationship with Jesus: Walking with Jesus means treasuring His precious blood every day, letting His pure sacrifice purify your conscience and motivate your pursuit of holiness.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 2050 BC",
      "sourceSetting": "Mount Moriah, where God provided the ram and promised the Lamb.",
      "fulfillmentAuthor": "Apostle Peter (c. AD 64–65, Rome)",
      "fulfillmentDate": "c. AD 64–65",
      "fulfillmentSetting": "Suffering Christian exiles throughout Asia Minor facing slander, persecution, and the shadow of martyrdom.",
      "redemptiveBridge": "The Lamb of God spans from eternity past (foreknown before creation) through patriarchal shadows (Moriah) to Golgotha, and into eternity future in the New Jerusalem."
    }
  },
  "exo-12-46_John 19:36": {
    "id": "exo-12-46_John 19:36",
    "anchorRef": "Exodus 12:46",
    "targetRef": "John 19:36",
    "who": "Authorship & Context: Moses recorded the institution of the Passover in Exodus 12 on the eve of the 10th plague in Egypt (c. 1446 BC). The Apostle John, writing in Ephesus (c. AD 85–95), stood as the sole eyewitness apostle at the foot of the cross beside Mary (John 19:25-27,35). Identified Characters: Yahweh commanding the paschal ordinance; the destroyer executing judgment; the Hebrew households sheltered by blood; Roman soldiers executing the crucifixion; the two crucified thieves whose legs were broken; and Jesus of Nazareth. Singular or Many: Singular body, many executioners. One Lamb is kept whole; the soldiers and the two other crucified men are the many around that one body. Christological Subject & Referent: Jesus Christ, the true Paschal Lamb (τὸ πάσχα ἡμῶν ἐτύθη Χριστός, 1 Cor 5:7). His physical body remained completely unbroken in accordance with divine decree. Redemptive Purpose: To prove that Jesus' death was not a chaotic Roman execution, but the sovereignly governed fulfillment of the Passover lamb whose sacrifice shields all believers from the wrath of God.",
    "what": "The precise historical and typological fulfillment of the Passover ordinance (\"neither shall ye break a bone thereof\", Ex 12:46; Num 9:12; Psa 34:20) in the crucifixion of Jesus Christ recorded in John 19:36: \"For these things were done, that the scripture should be fulfilled, A bone of him shall not be broken.\"",
    "when": "Source Horizon: The Exodus from Egypt (c. 1446 BC), 14th of Nisan. Target Horizon: AD 30/33 on Preparation Day of the Passover at Golgotha outside Jerusalem.",
    "how": "Apostolic eyewitness testimony and typological fulfillment. In Exodus 12:46, the statute regarding the paschal lamb specifies: וְעֶצֶם לֹא־תִשְׁבְּרוּ־בוֹ (ve'etsem lo-tishberu-vo — \"and a bone you shall not break in it\"). John witnesses the Roman soldiers breaking the legs (crurifragium) of the two thieves to accelerate asphyxiation before the Sabbath began. But when they came to Jesus and saw that He was already dead, they did not break His legs; instead, one soldier pierced His side with a spear. John cites this as direct divine necessity: ἵνα ἡ γραφὴ πληρωθῇ (hina hē graphē plērōthē — \"in order that the Scripture might be fulfilled\"): Ὀστοῦν οὐ συντριβήσεται αὐτοῦ (Ostoun ou syntribēsetai autou — \"A bone of Him shall not be broken\"). The passive verb συντριβήσεται (syntribēsetai, from syntribō — to shatter, crush, or break into fragments) confirms that the Father sovereignly preserved His Son's sacrificial body intact, validating Him as the spotless, unblemished Passover Lamb whose offering is eternally perfect and complete.",
    "why": "To demonstrate that Jesus is the authentic antitype of the Exodus Passover. In God's redemptive design, the lamb that shielded Israel from the Angel of Death pointed directly to Jesus, whose unbroken wholeness signifies the perfect preservation and eternal efficacy of His atoning sacrifice.",
    "ultimatePoint": "Jesus Christ is the true Passover Lamb whose bones were supernaturally preserved from being broken, confirming that His death was the sovereign fulfillment of the ancient covenant sacrifice that delivers us from the wrath of God.",
    "personalRelevance": "Why you need to know this: When judgment falls upon a broken and fallen world, you are completely safe under the protective blood of the true Passover Lamb. What it does for you: It removes the dread of divine condemnation, assuring you that just as the destroyer passed over every house marked with the blood, so God's judgment passes over you forever in Christ. Relationship with Jesus: Walking with Jesus means living in continual gratitude to Him as your Passover Lamb, celebrating your deliverance from the spiritual bondage of sin and walking in newness of life.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1446 BC",
      "sourceSetting": "The night of the tenth plague in Egypt, when the blood of an unblemished yearling lamb on the doorposts protected the firstborn of Israel.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95, eyewitness c. AD 30/33)",
      "fulfillmentDate": "c. AD 30/33",
      "fulfillmentSetting": "Mount Calvary outside Jerusalem at twilight on Preparation Day, as the priests were slaughtering the Passover lambs in the Temple.",
      "redemptiveBridge": "The blood applied to the wooden doorposts in Egypt prefigures the blood of Jesus shed upon the wooden beams of the cross for the salvation of all who believe."
    }
  },
  "num-21-9_John 3:14-15": {
    "id": "num-21-9_John 3:14-15",
    "anchorRef": "Numbers 21:9",
    "targetRef": "John 3:14-15",
    "who": "Authorship & Context: Moses recorded the rebellion of Israel and the provision of the bronze serpent in Numbers 21 during the 40-year wilderness journey. Jesus Himself, in dialogue with Nicodemus (recorded by the Apostle John, c. AD 85–95), used this historic event to explain the divine necessity of His crucifixion. Identified Characters: Yahweh sending judgment; Moses interceding and fashioning the serpent; the rebellious dying Israelites bitten by fiery serpents; Nicodemus the Pharisee; and Jesus the Son of Man. Christological Subject & Referent: Jesus Christ, the Son of Man who must be lifted up (ὑψωθῆναι δεῖ τὸν Υἱὸν τοῦ ἀνθρώπου). He is the sinless One made in the likeness of sinful flesh (Rom 8:3), taking the full venom of divine judgment on the pole of the cross. Redemptive Purpose: To reveal the simple, universal principle of saving faith: just as a dying Israelite lived simply by looking upon the lifted serpent, so any sinner who looks to the crucified Christ in faith is delivered from eternal death.",
    "what": "The prophetic and typological fulfillment of the bronze serpent on the pole (Num 21:9) in Jesus' declaration of His crucifixion and saving mission: \"And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up: That whosoever believeth in him should not perish, but have eternal life\" (John 3:14-15).",
    "when": "Source Horizon: Wilderness Wanderings (c. 1406 BC) along the way of the Red Sea around Edom. Target Horizon: Jesus' dialogue with Nicodemus in Jerusalem c. AD 30.",
    "how": "Typological exegesis and linguistic correspondence. In Numbers 21:9, Moses fashioned a נְחַשׁ נְחֹשֶׁת (nechash nechoshet — a serpent of bronze/copper) and set it upon a pole or military standard (עַל־נֵס, ʿal-nes). The wordplay between נָחָשׁ (nachash — serpent) and נְחֹשֶׁת (nechoshet — bronze) is intentional: bronze in Scripture represents judgment endured, and the serpent represents sin and the curse judged in its own likeness. When anyone bitten looked (וְהִבִּיט, vehibbit — gazed attentively with expectation) toward the bronze serpent, he lived (וָחָי, vachay). Jesus transposes this type into the supreme soteriological reality: καθὼς Μωϋσῆς ὕψωσεν τὸν ὄφιν ἐν τῇ ἐρήμῳ, οὕτως ὑψωθῆναι δεῖ τὸν Υἱὸν τοῦ ἀνθρώπου (kathōs Mōysēs hypsōsen ton ophin en tē erēmō, houtōs hypsōthēnai dei ton Huion tou anthrōpou — \"Just as Moses lifted up the serpent in the wilderness, in this manner it is divinely necessary [δεῖ, dei — divine imperative of redemption] for the Son of Man to be lifted up\"). The verb ὑψόω (hypsoō — to lift up) in John's Gospel carries a profound double meaning: the physical lifting up of Jesus upon the cross of execution, and His simultaneous glorification and cosmic exaltation as King. Jesus was made \"sin for us, who knew no sin\" (2 Cor 5:21), bearing the curse upon the tree so that πᾶς ὁ πιστεύων (pas ho pisteuōn — \"everyone who believes\") should not perish.",
    "why": "To demonstrate to Nicodemus and to all humanity that salvation cannot be attained by moral reformation, ritual washings, or Torah pedigree. Fallen humanity is fatally infected with the lethal venom of sin; salvation comes exclusively by looking in faith to the One who took the curse upon Himself.",
    "ultimatePoint": "The bronze serpent lifted up in the desert was the historic shadow of Jesus Christ being lifted up upon the cross: taking the full curse of our sin upon Himself so that anyone who looks upon Him in faith is instantly healed and granted eternal life.",
    "personalRelevance": "Why you need to know this: You do not need to clean yourself up, earn merit, or perform heroic spiritual deeds to be saved; you only need to look in faith to the crucified Savior. What it does for you: It frees you from the paralyzing exhaustion of self-righteousness, assuring you that one look of genuine faith upon Jesus cancels the deadly poison of sin, guilt, and condemnation in your life. Relationship with Jesus: Walking with Jesus means keeping your gaze continually fixed upon Him on the cross, drawing fresh life, healing, and spiritual vigor from His finished sacrifice every day.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1406 BC",
      "sourceSetting": "The rugged desert south of the Dead Sea, where Israel rebelled against God and Moses, complaining about the manna, and was struck by deadly venomous serpents.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95, recording Christ c. AD 30)",
      "fulfillmentDate": "c. AD 30",
      "fulfillmentSetting": "Jerusalem at night, instructing Nicodemus, a master of Israel who did not comprehend how a person could be born again from above.",
      "redemptiveBridge": "From the wooden pole in the wilderness where physical life was restored by looking, to the wooden cross on Calvary where eternal life is bestowed upon all who believe."
    }
  },
  "num-21-8_John 3:14-15": {
    "id": "num-21-8_John 3:14-15",
    "anchorRef": "Numbers 21:8",
    "targetRef": "John 3:14-15",
    "who": "Authorship & Context: Moses recorded Yahweh's command to make a fiery serpent. Jesus Christ expounded this divine command to Nicodemus. Identified Characters: Yahweh commanding the provision; the dying Israelites; and the Son of Man. Christological Subject & Referent: Jesus Christ as the lifted-up Savior. Redemptive Purpose: To prove that deliverance from judgment is entirely a divine provision accessed by faith alone.",
    "what": "The divine command in Numbers 21:8 (\"Make thee a fiery serpent, and set it upon a pole: and it shall come to pass, that every one that is bitten, when he looketh upon it, shall live\") fulfilled in Christ's lifting up in John 3:14-15 for the salvation of all who believe.",
    "when": "Source: Wilderness Era (c. 1406 BC). Target: Apostolic Gospel Era (c. AD 30).",
    "how": "Soteriological typology. In Numbers 21:8, Yahweh commands Moses to make a שָׂרָף (saraph — fiery burning serpent), embodying the very judgment destroying the camp. In John 3:14-15, Christ fulfills this by taking the form of sinful flesh to condemn sin in the flesh (Rom 8:3). The Greek verb ὑψωθῆναι (hypsōthēnai — to be lifted up) denotes the cross as the divine standard of salvation. Faith is defined as looking (βλέπω / πιστεύω): looking away from one's wounds to God's provision.",
    "why": "To illustrate that salvation is outside of human resources: a dying person cannot cure snakebite from within, but must look outside themselves to God's lifted standard.",
    "ultimatePoint": "God's command to look upon the lifted bronze serpent to escape physical death pointed forward to the cross, where looking to the lifted Son of Man in faith delivers from eternal death.",
    "personalRelevance": "Why you need to know this: Deliverance from sin cannot be manufactured by human willpower; you must look outside yourself to Christ. What it does for you: It gives you instant peace in times of moral failure, reminding you to look to Jesus rather than stare at your own wounds. Relationship with Jesus: Abiding in Jesus means continually looking unto Him, the author and finisher of your faith.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC)",
      "sourceDate": "c. 1406 BC",
      "sourceSetting": "Sinai/Edom wilderness with Israel dying of serpent venom.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95)",
      "fulfillmentDate": "c. AD 30",
      "fulfillmentSetting": "Jerusalem dialogue with Nicodemus.",
      "redemptiveBridge": "The pole of divine remedy in the desert prefigures the cross on Calvary."
    }
  },
  "jos-5-14_Revelation 19:11-16": {
    "id": "jos-5-14_Revelation 19:11-16",
    "anchorRef": "Joshua 5:13-15",
    "targetRef": "Revelation 19:11-16",
    "who": "Authorship & Context: Joshua (or the canonical scribes of the Conquest, c. 1400–1375 BC) recorded the Christophany on the plains of Jericho before the fall of the city. The Apostle John, exiled on the Isle of Patmos under Emperor Domitian (c. AD 95–96), received the apocalyptic vision of the heavens opening to reveal the Rider on the White Horse. Identified Characters: Joshua the commander of Israel; the mysterious warrior with a drawn sword who identifies Himself as the Captain of Yahweh's host; heavenly armies clothed in fine linen; the kings and armies of the beast; and Jesus Christ. Christological Subject & Referent: Jesus Christ, the eternal Word of God (Ὁ Λόγος τοῦ Θεοῦ) and King of kings and Lord of lords (ΒΑΣΙΛΕΥΣ ΒΑΣΙΛΕΩΝ ΚΑΙ ΚΥΡΙΟΣ ΚΥΡΙΩΝ). In Joshua 5 He appears as an Old Testament pre-incarnate Christophany; in Revelation 19 He appears in His full apocalyptic, resurrected majesty. Redemptive Purpose: To declare that the battle for the kingdom belongs exclusively to God: Joshua must take off his shoes before the divine Commander, and all human empires must bow before the conquering Lamb.",
    "what": "The glorious Christophanic identity connecting the Captain of the LORD's Host in Joshua 5:13-15 (\"Nay; but as captain of the host of the LORD am I now come... Loose thy shoe from off thy foot; for the place whereon thou standest is holy\") to the triumphant Rider on the White Horse in Revelation 19:11-16: \"And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True... and his name is called The Word of God... KING OF KINGS, AND LORD OF LORDS.\"",
    "when": "Source Horizon: Conquest of Canaan (c. 1406 BC) on the plains of Jericho. Target Horizon: Apocalyptic Consummation revealed to John on Patmos c. AD 95–96.",
    "how": "Christophanic continuity and apocalyptic warfare. In Joshua 5:13-15, Joshua encounters a Man with a drawn sword: חַרְבּוֹ שְׁלוּפָה בְּיָדוֹ (charbo shelufah beyado — \"His drawn sword in His hand\"). When Joshua asks whether He is for Israel or their adversaries, He answers: לֹא כִּי אֲנִי שַׂר־צְבָא־יְהוָה עַתָּה בָאתִי (Loʾ, ki ʾani Sar-Tsevaʾ-Yahweh ʿattah vaʾti — \"No, but as Commander/Captain of the army of Yahweh have I now come!\"). Joshua falls with his face to the earth and worships (וַיִּשְׁתָּחוּ, vayyishtachu). An ordinary angel strictly refuses worship (Rev 19:10, 22:9), but this Captain accepts worship and commands: שַׁל־נַעַלְךָ מֵעַל רַגְלְךָ כִּי הַמָּקוֹם אֲשֶׁר אַתָּה עֹמֵד עָלָיו קֹדֶשׁ הוּא (shal-naʿalkha meʿal raglekha ki hammaqom ʾasher ʾattah ʿomed ʿalav qodesh hu — \"Loose your sandal from your foot, for the place whereon you stand is holy\"), the exact words spoken by Yahweh to Moses at the burning bush (Ex 3:5). In Revelation 19:11-16, John sees this identical Captain: Πιστὸς καὶ Ἀληθινός (Pistos kai Alēthinos — \"Faithful and True\"), who ἐν δικαιοσύνῃ κρίνει καὶ πολεμεῖ (en dikaiosynē krinei kai polemei — \"in righteousness judges and makes war\"). Out of His mouth goes a sharp two-edged sword (ῥομφαία ὀξεῖα, rhomphaia oxeia) to strike the nations. His eyes are as a flame of fire (ὡς φλὸξ πυρός), and He is vested with the supreme title: Βασιλεὺς βασιλέων καὶ Κύριος κυρίων (Basileus basileōn kai Kyrios kyriōn).",
    "why": "To shatter all human pride and autonomous nationalism. The Captain does not take sides in human political squabbles; He comes to take over as supreme Sovereign. Before Jericho could fall, Joshua had to surrender his command to the true King.",
    "ultimatePoint": "The Captain of the LORD's host who confronted Joshua at Jericho is none other than Jesus Christ, the uncreated Word of God and King of kings, who leads the heavenly armies to execute righteous judgment and establish His eternal reign.",
    "personalRelevance": "Why you need to know this: God does not exist to recruit Himself into your personal agenda, career plans, or partisan politics; He invites you to fall on your face and surrender to His holy lordship. What it does for you: It removes the crushing anxiety of having to fight life's spiritual battles in your own puny strength, knowing that the Commander of the armies of heaven goes before you to pull down every stronghold. Relationship with Jesus: Walking with Jesus means approaching Him not as a tame life-coach, but as the holy King of kings, joyfully taking off the shoes of self-will and following His absolute command.",
    "historicalContext": {
      "sourceAuthor": "Joshua / Canonical Scribes (c. 1400–1375 BC)",
      "sourceDate": "c. 1406 BC",
      "sourceSetting": "The fortified pagan stronghold of Jericho. Israel had just crossed the Jordan River, and Joshua was surveying the impassable walls when the divine Commander appeared.",
      "fulfillmentAuthor": "Apostle John (c. AD 95–96, Patmos)",
      "fulfillmentDate": "c. AD 95–96",
      "fulfillmentSetting": "The desolate penal colony of Patmos during Domitian's tyrannical persecution. John receives the apocalyptic unveiling of the true Emperor of the cosmos returning in glory.",
      "redemptiveBridge": "The Captain who pulled down the walls of Jericho is the identical King of kings who will topple the kingdoms of this world and inaugurate the New Jerusalem."
    }
  },
  "jos-5-13_Revelation 19:11-16": {
    "id": "jos-5-13_Revelation 19:11-16",
    "anchorRef": "Joshua 5:13-15",
    "targetRef": "Revelation 19:11-16",
    "who": "Authorship & Context: Joshua at Jericho; John on Patmos. Identified Characters: Joshua; the Man with the drawn sword; the heavenly armies. Christological Subject & Referent: Jesus Christ, the divine Warrior executing holy judgment. Redemptive Purpose: To reveal Christ as the righteous Conqueror of sin and rebellion.",
    "what": "The drawn sword of the Captain of the LORD's host in Joshua 5:13 (\"with his sword drawn in his hand\") pointing directly to the Rider on the White Horse whose sharp sword smites the nations in Revelation 19:11-16.",
    "when": "Source: Conquest Era (c. 1406 BC). Target: Apocalyptic Climax (c. AD 95).",
    "how": "Christophanic warfare typology. The drawn sword (חַרְבּוֹ שְׁלוּפָה, charbo shelufah) in Joshua represents immediate divine intervention. In Revelation 19:15, the sword proceeds from His mouth (ῥομφαία ὀξεῖα, rhomphaia oxeia), indicating that the Word of God Himself speaks the decree that smites the rebellious powers.",
    "why": "To demonstrate that all earthly opposition to God's kingdom will be vanquished by the word of Christ's mouth.",
    "ultimatePoint": "The drawn sword at Jericho prefigures the ultimate apocalyptic victory of Jesus Christ over every hostile power on earth.",
    "personalRelevance": "Why you need to know this: No evil, injustice, or corrupt power will stand before Christ's return. What it does for you: It gives you endurance in persecution, knowing that the Captain of heaven fights for His church. Relationship with Jesus: Yielding your life to Jesus as the Commander of your destiny.",
    "historicalContext": {
      "sourceAuthor": "Joshua (c. 1400 BC)",
      "sourceDate": "c. 1406 BC",
      "sourceSetting": "Plains of Jericho.",
      "fulfillmentAuthor": "Apostle John (c. AD 95)",
      "fulfillmentDate": "c. AD 95",
      "fulfillmentSetting": "Patmos under Roman exile.",
      "redemptiveBridge": "From the drawn sword at Jericho to the sword of the Word of God at the Consummation."
    }
  },
  "jos-5-15_Revelation 19:11-16": {
    "id": "jos-5-15_Revelation 19:11-16",
    "anchorRef": "Joshua 5:13-15",
    "targetRef": "Revelation 19:11-16",
    "who": "Authorship & Context: Joshua removing his shoes before Jericho; John falling at Patmos. Identified Characters: The holy Commander; Joshua; John. Christological Subject & Referent: Jesus Christ, whose presence consecrates holy ground and commands universal adoration. Redemptive Purpose: To establish the blazing holiness of Christ's kingdom.",
    "what": "The command to remove shoes on holy ground in Joshua 5:15 fulfilled in the divine majesty and holiness of the King of kings in Revelation 19:11-16.",
    "when": "Source: Conquest Era (c. 1406 BC). Target: Apocalyptic Climax (c. AD 95).",
    "how": "Theological continuity of divine holiness. The holy ground (קֹדֶשׁ, qodesh) in Joshua 5:15 is identical to Exodus 3:5. In Revelation 19:12, His eyes are a flame of fire (φλὸξ πυρός), burning with immaculate holiness, requiring absolute reverence and obedience.",
    "why": "To prove that the battle for God's kingdom is conducted in absolute holiness.",
    "ultimatePoint": "The divine Commander who demanded holy reverence from Joshua is the glorified Christ before whom every knee shall bow.",
    "personalRelevance": "Why you need to know this: God's presence demands reverence, awe, and holiness. What it does for you: It purges casual, irreverent familiarity from your prayer life, filling you with godly fear and holy wonder. Relationship with Jesus: Worshiping Jesus with holy awe and joyful submission.",
    "historicalContext": {
      "sourceAuthor": "Joshua (c. 1400 BC)",
      "sourceDate": "c. 1406 BC",
      "sourceSetting": "Conquest camp before Jericho.",
      "fulfillmentAuthor": "Apostle John (c. AD 95)",
      "fulfillmentDate": "c. AD 95",
      "fulfillmentSetting": "Patmos vision of Christ's triumph.",
      "redemptiveBridge": "Holy ground in Canaan prefigures the holy New Jerusalem."
    }
  },
  "2sa-7-12_Luke 1:32-33": {
    "id": "2sa-7-12_Luke 1:32-33",
    "anchorRef": "2 Samuel 7:12-16",
    "targetRef": "Luke 1:32-33",
    "who": "Authorship & Context: The Prophet Nathan delivered the unconditional Davidic Covenant oracle to King David in Jerusalem (c. 970 BC), recorded in 2 Samuel. Luke the Evangelist recorded the Annunciation of Gabriel to the virgin Mary in Nazareth (c. 4 BC), composed c. AD 60–62. Identified Characters: Yahweh the covenant Maker; the Prophet Nathan; King David; the Archangel Gabriel; the virgin Mary; the house of Jacob; and the royal seed of David. Christological Subject & Referent: Jesus Christ, the Son of the Highest (Υἱὸς Ὑψίστου) and eternal King of the Davidic line. While Solomon was an immediate, imperfect biological son who built an earthly temple, Jesus is the true divine Seed whose throne and kingdom endure without end. Redemptive Purpose: To demonstrate that the kingdom of God is an everlasting monarchy founded upon the covenant promise to David, fulfilled by the virgin-born Son of God.",
    "what": "The direct prophetic and covenantal fulfillment of the Davidic Covenant in 2 Samuel 7:12-16 (\"I will set up thy seed after thee... and I will stablish the throne of his kingdom for ever\") in Gabriel's annunciation to Mary in Luke 1:32-33: \"He shall be great, and shall be called the Son of the Highest: and the Lord God shall give unto him the throne of his father David: And he shall reign over the house of Jacob for ever; and of his kingdom there shall be no end.\"",
    "when": "Source Horizon: Monarchy Era (c. 970 BC), Nathan speaking to David in Jerusalem. Target Horizon: The Annunciation in Nazareth (c. 4 BC), inaugurating the New Testament.",
    "how": "Prophetic covenant fulfillment and verbal precision. In 2 Samuel 7:12-16, Yahweh declares: וַהֲקִימֹתִי אֶת־זַרְעֲךָ אַחֲרֶיךָ... וְכֹנַנְתִּי אֶת־כִּסֵּא מַמְלַכְתּוֹ עַד־עוֹלָם (vahakimoti ʾet-zarʿakha ʾacharekha... vekhonanti ʾet-kisseʾ mamlakhto ʿad-ʿolam — \"I will raise up your seed after you... and I will establish the throne of His kingdom forever\"). God explicitly covenants a divine-human Father-Son relationship: אֲנִי אֶהְיֶה־לּוֹ לְאָב וְהוּא יִהְיֶה־לִּי לְבֵן (ʾani ʾehyeh-lo leʾav vehuʾ yihyeh-li leven — \"I will be to Him a Father, and He shall be to Me a Son\"). In Luke 1:32-33, Gabriel uses the exact covenant vocabulary: Οὗτος ἔσται μέγας καὶ Υἱὸς Ὑψίστου κληθήσεται (Houtos estai megas kai Huios Hypsistou klēthēsetai — \"He shall be great and shall be called the Son of the Most High\"), καὶ δώσει αὐτῷ Κύριος ὁ Θεὸς τὸν θρόνον Δαυὶδ τοῦ πατρὸς αὐτοῦ (kai dōsei autō Kyrios ho Theos ton thronon Dauid tou patros autou — \"and the Lord God will give Him the throne of His father David\"), καὶ τῆς βασιλείας αὐτοῦ οὐκ ἔσται τέλος (kai tēs basileias autou ouk estai telos — \"and of His kingdom there shall be no end / no limit in time\"). This proves that Jesus inherits the royal Davidic rights through Mary (and legally through Joseph, Mat 1), but reigns as the uncreated Son of the Most High.",
    "why": "To demonstrate that the collapse of the earthly Davidic monarchy during the Babylonian exile in 586 BC was not the defeat of God's promise. The line of David was preserved through centuries of obscurity until the true King emerged in Nazareth to reign over an indestructible kingdom.",
    "ultimatePoint": "Jesus Christ is the ultimate royal Seed of David promised in 2 Samuel 7, whose throne was established by God to reign over the house of Jacob and all nations for ever and ever.",
    "personalRelevance": "Why you need to know this: Human governments rise and collapse, politicians break promises, and earthly empires crumble into dust; the kingdom of King Jesus will never end. What it does for you: It gives you unshakable political and cosmic security, liberating you from panic over geopolitical upheavals because your citizenship is in an eternal kingdom ruled by a perfectly righteous King. Relationship with Jesus: Walking with Jesus means bending your knee to Him as your sovereign Lord and King, finding your ultimate allegiance and joy in His eternal government.",
    "historicalContext": {
      "sourceAuthor": "Prophet Nathan / Gad (c. 970–930 BC)",
      "sourceDate": "c. 970 BC",
      "sourceSetting": "Jerusalem, as King David sat in his house of cedar and desired to build a temple for the Ark of God. God responded by promising to build David an enduring house/dynasty.",
      "fulfillmentAuthor": "Luke the Evangelist (c. AD 60–62, recording Gabriel c. 4 BC)",
      "fulfillmentDate": "c. 4 BC",
      "fulfillmentSetting": "The humble village of Nazareth in Galilee, where Mary, a descendant of David, was betrothed to Joseph.",
      "redemptiveBridge": "Across a millennium of royal triumphs, exilic catastrophe, and silent centuries, the covenant with David is fulfilled when the virgin conceives the King of glory."
    }
  },
  "psa-110-4_Hebrews 7:17": {
    "id": "psa-110-4_Hebrews 7:17",
    "anchorRef": "Psalm 110:4",
    "targetRef": "Hebrews 7:17",
    "who": "Authorship & Context: King David, writing under the inspiration of the Holy Spirit (c. 1000 BC), recorded Yahweh's irrevocable oath regarding an eternal priest-king. The author of Hebrews (c. AD 64–68) expounded this psalm to Jewish Christians who were tempted to return to the visible Levitical temple and Aaronic sacrifices in Jerusalem. Identified Characters: Yahweh making an unalterable oath; King David the prophet; Melchizedek the ancient priest-king of Salem; Aaron and the mortal Levitical priests; and Jesus Christ. Christological Subject & Referent: Jesus Christ, the royal High Priest forever after the order of Melchizedek (Σὺ ἱερεὺς εἰς τὸν αἰῶνα κατὰ τὴν τάξιν Μελχισεδέκ). He unites the royal scepter of Judah with an eternal, unchangeable priesthood. Redemptive Purpose: To prove the obsolescence and replacement of the temporary Levitical priesthood, establishing that Christ alone offers a permanent, indissoluble intercession that saves believers to the uttermost.",
    "what": "The prophetic inauguration and theological climax of the royal Melchizedekian priesthood connecting Psalm 110:4 (\"The LORD hath sworn, and will not repent, Thou art a priest for ever after the order of Melchizedek\") to Hebrews 7:17: \"For he testifieth, Thou art a priest for ever after the order of Melchisedec.\"",
    "when": "Source Horizon: United Monarchy Era (c. 1000 BC) in Jerusalem. Target Horizon: Pre-AD 70 Apostolic Era (c. AD 64–68), addressing Jewish believers.",
    "how": "Rigorous grammatical and canonical exegesis. In Psalm 110:4, Yahweh confirms this appointment with an immutable covenant oath: נִשְׁבַּע יְהוָה וְלֹא יִנָּחֵם (Nishbaʿ Yahweh veloʾ yinnachem — \"Yahweh has sworn and will not repent / will not change His mind\"): אַתָּה־כֹהֵן לְעוֹלָם עַל־דִּבְרָתִי מַלְכִּי־צֶדֶק (ʾAttah-kohen leʿolam ʿal-dibrati Malki-tsedeq — \"You are a priest forever according to the order/rank/manner of Melchizedek\"). The Hebrew name מַלְכִּי־צֶדֶק combines מֶלֶךְ (melekh — king) and צֶדֶק (tsedeq — righteousness), and as king of Salem (שָׁלֵם, shalem — peace), Melchizedek was both King and Priest in Genesis 14, centuries prior to the law of Moses and the tribe of Levi. In Hebrews 7:17, the author cites this as divine testimony that Christ is a priest forever κατὰ τὴν τάξιν Μελχισεδέκ (kata tēn taxin Melchisedek — \"after the order of Melchizedek\"). Hebrews demonstrates that the Levitical priesthood was flawed because priests died and had to offer sacrifices for their own sins according to a fleshly commandment: κατὰ νόμον ἐντολῆς σαρκίνης (kata nomon entolēs sarkinēs). By contrast, Christ was appointed κατὰ δύναμιν ζωῆς ἀκαταλύτου (kata dynamin zōēs akatalytou — \"according to the power of an indestructible / indissoluble life\"). Because Christ lives forever, He possesses an unchangeable priesthood: ἀπαράβατον ἔχει τὴν ἱερωσύνην (aparabaton echei tēn hierōsynēn — a non-transferable, untransgressable priesthood), enabling Him to save to the uttermost (εἰς τὸ παντελές, eis to panteles) all who draw near to God through Him.",
    "why": "To demonstrate that Jesus did not violate the Law by becoming High Priest despite being from the tribe of Judah (not Levi). His priesthood belongs to an older, higher, royal order guaranteed by divine oath before which Aaron's temporary order must give way.",
    "ultimatePoint": "Jesus Christ is the eternal High Priest after the order of Melchizedek, whose resurrected, indestructible life guarantees an everlasting royal priesthood and complete, eternal salvation for all who come to God through Him.",
    "personalRelevance": "Why you need to know this: You do not need an earthly mediator, confessional booth, or mortal priest to access God; Jesus Christ lives right now to intercede for you personally before the throne. What it does for you: It gives you absolute, eternal security, knowing that whenever you stumble, Christ's continuous heavenly intercession preserves your standing before the Father and keeps you from falling. Relationship with Jesus: Walking with Jesus means approaching the throne of grace with bold confidence every day, knowing that your High Priest understands your weaknesses and constantly represents you in the presence of God.",
    "historicalContext": {
      "sourceAuthor": "King David (c. 1000 BC)",
      "sourceDate": "c. 1000 BC",
      "sourceSetting": "Jerusalem, after David conquered the Jebusite city of Zion, meditating upon Melchizedek who had ruled that same city a millennium prior.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Jewish Christians in Rome/Judea tempted to revert to the Temple rituals to avoid Roman persecution and Jewish excommunication.",
      "redemptiveBridge": "Melchizedek's mysterious appearance in Genesis 14 is illuminated by David's prophecy in Psalm 110, culminating in Jesus Christ entering the heavenly Holy of Holies as our eternal High Priest."
    }
  },
  "psa-110-4_Hebrews 5:6": {
    "id": "psa-110-4_Hebrews 5:6",
    "anchorRef": "Psalm 110:4",
    "targetRef": "Hebrews 5:6",
    "who": "Authorship & Context: David's prophetic psalm; Hebrews author expounding Christ's credentials. Identified Characters: The Father who appoints; Jesus who obeys; Aaron who was called; and struggling believers. Christological Subject & Referent: Jesus Christ, appointed by the Father to eternal priesthood. Redemptive Purpose: To prove Christ did not glorify Himself, but was officially commissioned by God.",
    "what": "The Father's divine appointment of Christ to the Melchizedekian priesthood in Psalm 110:4 cited in Hebrews 5:6: \"As he saith also in another place, Thou art a priest for ever after the order of Melchisedec.\"",
    "when": "Source: Monarchy Era (c. 1000 BC). Target: Apostolic Era (c. AD 64–68).",
    "how": "Exegetical appointment formula. Hebrews 5:5-6 links Psalm 2:7 (\"Thou art my Son\") with Psalm 110:4 (\"Thou art a priest forever\"). Christ did not usurp sacerdotal office (οὐχ ἑαυτὸν ἐδόξασεν γενηθῆναι ἀρχιερέα), but was formally summoned by the Father.",
    "why": "To establish that Christ's priesthood possesses supreme legitimacy and divine mandate.",
    "ultimatePoint": "Christ was divinely ordained by the Father as our eternal High Priest after the order of Melchizedek.",
    "personalRelevance": "Why you need to know this: Your salvation is sanctioned by the highest authority in the universe. What it does for you: Delivers from spiritual insecurity, knowing the Father Himself appointed Christ to save you. Relationship with Jesus: Trusting in Christ's divine appointment as your sympathetic Advocate.",
    "historicalContext": {
      "sourceAuthor": "King David (c. 1000 BC)",
      "sourceDate": "c. 1000 BC",
      "sourceSetting": "Jerusalem oracle.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Pastoral exhortation to persecuted believers.",
      "redemptiveBridge": "The eternal decree of God establishes Christ's royal priesthood."
    }
  },
  "psa-110-4_Hebrews 7:21": {
    "id": "psa-110-4_Hebrews 7:21",
    "anchorRef": "Psalm 110:4",
    "targetRef": "Hebrews 7:21",
    "who": "Authorship & Context: David's psalm; Hebrews author contrasting Aaronic and Melchizedekian orders. Identified Characters: Yahweh swearing; Christ receiving the oath; Aaron and sons. Christological Subject & Referent: Jesus Christ, the guarantor of an irrevocable covenant. Redemptive Purpose: To show the unchangeable certainty of the New Covenant.",
    "what": "The solemn divine oath of Psalm 110:4 emphasized in Hebrews 7:21: \"(For those priests were made without an oath; but this with an oath by him that said unto him, The Lord sware and will not repent, Thou art a priest for ever after the order of Melchisedec:)\"",
    "when": "Source: Monarchy Era (c. 1000 BC). Target: Apostolic Era (c. AD 64–68).",
    "how": "Theological contrast of covenant ratification. Levitical priests were consecrated without a divine oath (χωρὶς ὁρκωμοσίας). Christ was established μετὰ ὁρκωμοσίας (meta horkōmosias — with the swearing of an oath by God). Therefore, Jesus has become the ἔγγυος (engyos — legal guarantor / surety) of a better covenant (κρείττονος διαθήκης).",
    "why": "To demonstrate that God's oath makes Christ's priesthood permanently irreversible.",
    "ultimatePoint": "The divine oath of Psalm 110:4 guarantees that Christ's priesthood and the New Covenant can never fail or be replaced.",
    "personalRelevance": "Why you need to know this: God swore by Himself that Christ's priesthood will never end. What it does for you: Banishes all fear of God changing His mind about your salvation. Relationship with Jesus: Rest in the eternal security of Christ's oath-bound priesthood.",
    "historicalContext": {
      "sourceAuthor": "King David (c. 1000 BC)",
      "sourceDate": "c. 1000 BC",
      "sourceSetting": "Prophetic psalm of David.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Addressing Hebrew Christians.",
      "redemptiveBridge": "The unalterable oath of God guarantees our eternal redemption."
    }
  },
  "psa-110-1_Matthew 22:44": {
    "id": "psa-110-1_Matthew 22:44",
    "anchorRef": "Psalm 110:1",
    "targetRef": "Matthew 22:44",
    "who": "Authorship & Context: King David composed Psalm 110 by the Holy Spirit (c. 1000 BC). Jesus Christ confronted the Pharisees in the Temple courts in Jerusalem during Passion Week (c. AD 30), recorded by the Apostle Matthew (c. AD 60–68). Identified Characters: Yahweh the Father; Adonai (David's Lord); King David the prophet; the Pharisees and scribes questioning Jesus; and Jesus of Nazareth. Christological Subject & Referent: Jesus Christ, who is simultaneously the biological son of David according to the flesh, and the eternal, sovereign Lord (Κύριος) of David according to His divine nature. Redemptive Purpose: To expose the reductionist Jewish expectation of the Messiah as a mere political military descendant, revealing that the true Messiah is the divine Son of God seated at the right hand of the Father.",
    "what": "The profound messianic riddle connecting Psalm 110:1 (\"The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool\") to Jesus silencing the Pharisees in Matthew 22:41-46: \"The LORD said unto my Lord, Sit thou on my right hand, till I make thine enemies thy footstool? If David then call him Lord, how is he his son?\"",
    "when": "Source Horizon: United Monarchy Era (c. 1000 BC) in Jerusalem. Target Horizon: Passion Week in Jerusalem c. AD 30, recorded c. AD 60–68.",
    "how": "Grammatical interrogation and theological deduction. In Psalm 110:1, David writes: נְאֻם יְהוָה לַאדֹנִי שֵׁב לִימִינִי עַד־אָשִׁית אֹיְבֶיךָ הֲדֹם לְרַגְלֶיךָ (Ne'um Yahweh la-Adoni: Shev li-mini ʿad-ʾashit ʾoyvekha hadom le-raglekha — \"The oracle of Yahweh to my Lord [ʾAdoni]: Sit at My right hand until I make your enemies a footstool for your feet\"). In ancient Near Eastern patriarchal culture, no father or grandfather ever addressed his son or descendant as \"my Lord\" (אֲדֹנִי); the superior always addresses the inferior. Jesus poses the devastating dilemma in Greek: Εἶπεν Κύριος τῷ Κυρίῳ μου (Eipen Kyrios tō Kyriō mou): Εἰ οὖν Δαυὶδ καλεῖ αὐτὸν Κύριον, πῶς υἱὸς αὐτοῦ ἐστιν; (\"If David then calls Him 'Lord', how is He his son?\"). The Pharisees could not answer a word. The only theological resolution is the Incarnation: the Messiah is David's son through human lineage (Luke 1:32, Rom 1:3), but David's eternal Lord by uncreated divine nature (Rom 1:4, 9:5), seated at the supreme place of cosmic dominion.",
    "why": "To demonstrate that the Messiah is not merely a second David who will establish an earthly geopolitical kingdom, but the sovereign Creator-God whose enthronement at the right hand of the Father conquers death, sin, and all cosmic enemies.",
    "ultimatePoint": "Jesus Christ is David's son by human descent and David's eternal Lord by divine nature, reigning at the right hand of the Father until every enemy is subdued beneath His feet.",
    "personalRelevance": "Why you need to know this: Jesus is not merely a good human teacher, historical prophet, or moral exemplar; He is the sovereign Lord of all reality before whom every knee must bow. What it does for you: It gives you supreme confidence that all demonic powers, worldly opposition, and personal adversaries are already doomed to be placed under Christ's feet. Relationship with Jesus: Submitting to Jesus not as a casual friend, but as your absolute sovereign Lord, delighting to serve His kingdom with your whole heart.",
    "historicalContext": {
      "sourceAuthor": "King David (c. 1000 BC)",
      "sourceDate": "c. 1000 BC",
      "sourceSetting": "Jerusalem, as David contemplates the cosmic reign of the coming Messiah.",
      "fulfillmentAuthor": "Apostle Matthew (c. AD 60–68, recording Jesus c. AD 30)",
      "fulfillmentDate": "c. AD 30",
      "fulfillmentSetting": "The Temple courts in Jerusalem on Tuesday of Passion Week, surrounded by hostile religious leaders trying to entrap Him.",
      "redemptiveBridge": "From David's prophetic vision of the enthroned Lord to Jesus asserting His divine sonship in the Temple, culminating in His ascension to the right hand of the Father."
    }
  },
  "psa-110-1_Acts 2:34-35": {
    "id": "psa-110-1_Acts 2:34-35",
    "anchorRef": "Psalm 110:1",
    "targetRef": "Acts 2:34-35",
    "who": "Authorship & Context: King David wrote Psalm 110. The Apostle Peter, filled with the Holy Spirit on the Day of Pentecost (c. AD 30), proclaimed this psalm to thousands of Jews gathered in Jerusalem, recorded by Luke in Acts (c. AD 62–64). Identified Characters: God the Father; Jesus the resurrected Messiah; King David whose tomb was in Jerusalem; the Apostle Peter and the Eleven; and the crowd at Pentecost. Christological Subject & Referent: The resurrected and ascended Jesus of Nazareth, whom God made both Lord and Christ (Κύριον καὶ Χριστόν). Redemptive Purpose: To prove that Jesus' resurrection and ascension fulfill David's prophecy, authenticating the outpouring of the Holy Spirit.",
    "what": "The apostolic citation of Psalm 110:1 in Peter's Pentecost sermon in Acts 2:34-36: \"For David is not ascended into the heavens: but he saith himself, The LORD said unto my Lord, Sit thou on my right hand, Until I make thy foes thy footstool. Therefore let all the house of Israel know assuredly, that God hath made that same Jesus, whom ye have crucified, both Lord and Christ.\"",
    "when": "Source: Monarchy Era (c. 1000 BC). Target: Day of Pentecost (c. AD 30) in Jerusalem.",
    "how": "Historical-grammatical and apostolic resurrection hermeneutics. Peter argues that David died, was buried, and his tomb remains in Jerusalem (οὐ γὰρ Δαυὶδ ἀνέβη εἰς τοὺς οὐρανούς, \"for David did not ascend into the heavens\"). Therefore, Psalm 110:1 cannot refer to David. It refers exclusively to the resurrected Jesus, whom God exalted to His right hand (τῇ δεξιᾷ οὖν τοῦ Θεοῦ ὑψωθείς), who received the promised Holy Spirit from the Father and poured it out upon the church. Peter reaches the triumphant climax: Κύριον αὐτὸν καὶ Χριστὸν ἐποίησεν ὁ Θεός (\"God has made Him both Lord and Christ, this Jesus whom you crucified!\").",
    "why": "To demonstrate that the cross was not a tragic defeat, but the path to cosmic enthronement. The very One whom Jerusalem rejected has been crowned King of kings at the right hand of God.",
    "ultimatePoint": "The ascension of the resurrected Jesus to the right hand of the Father fulfills Psalm 110:1, proving that Jesus is the enthroned Lord and Messiah who pours out the Holy Spirit upon His people.",
    "personalRelevance": "Why you need to know this: The Holy Spirit living inside you is the direct proof that Jesus Christ is currently reigning at the right hand of God in supreme majesty. What it does for you: It fills you with boldness and evangelistic power, knowing that the resurrected King is actively advancing His kingdom across the earth through His church. Relationship with Jesus: Walking with Jesus as your ascended King, receiving His Holy Spirit daily to empower your witness and sanctify your life.",
    "historicalContext": {
      "sourceAuthor": "King David (c. 1000 BC)",
      "sourceDate": "c. 1000 BC",
      "sourceSetting": "David's court in Jerusalem.",
      "fulfillmentAuthor": "Luke the Evangelist (c. AD 62–64, recording Peter c. AD 30)",
      "fulfillmentDate": "c. AD 30",
      "fulfillmentSetting": "The Temple mount in Jerusalem on the morning of Pentecost, as the sound of rushing wind and tongues of fire drew vast crowds.",
      "redemptiveBridge": "David's prophecy bridges to the historical ascension of Jesus, releasing the age of the Holy Spirit."
    }
  },
  "isa-53-5_1 Peter 2:24": {
    "id": "isa-53-5_1 Peter 2:24",
    "anchorRef": "Isaiah 53:5",
    "targetRef": "1 Peter 2:24",
    "who": "Authorship & Context: The Prophet Isaiah prophesied in Jerusalem during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah (c. 740–680 BC), penning the Fourth Servant Song under the inspiration of the Spirit of Christ (1 Pet 1:11). The Apostle Peter, writing from Rome (c. AD 64–65) as an eyewitness of Christ's sufferings, exhorted Christian servants and believers suffering unjustly under pagan masters. Identified Characters: Yahweh laying iniquity on His Servant; the suffering Servant (Eved Yahweh); sinful, wandering sheep (humanity); Roman crucifiers and abusive masters; and redeemed believers. Christological Subject & Referent: Jesus Christ, the sinless Suffering Servant who bore our sins in His own body on the tree (ὃς τὰς ἁμαρτίας ἡμῶν αὐτὸς ἀνήνεγκεν ἐν τῷ σώματι αὐτοῦ ἐπὶ τὸ ξύλον). Redemptive Purpose: To unveil the heart of substitutionary penal atonement: Christ suffered the physical, moral, and judicial curse of our sins so that we might die to sin and live to righteousness.",
    "what": "The foundational substitutionary atonement prophecy of Isaiah 53:5 (\"But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed\") fulfilled in 1 Peter 2:24: \"Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.\"",
    "when": "Source Horizon: Divided Monarchy / Pre-Exilic Era (c. 700 BC) in Jerusalem. Target Horizon: Mid-1st Century Apostolic Era (c. AD 64–65) in Rome.",
    "how": "Penal substitutionary exegesis and precise linguistic fulfillment. In Isaiah 53:5, the Hebrew vocabulary depicts violent, vicarious punishment: וְהוּא מְחֹלָל מִפְּשָׁעֵנוּ מְדֻכָּא מֵעֲו‍ֹנֹתֵינוּ מוּסַר שְׁלוֹמֵנוּ עָלָיו וּבַחֲבֻרָתוֹ נִרְפָּא־לָנוּ (Vehu mecholal mippeshaʿenu, medukka meʿawonotenu, musar shelomenu ʿalav, uvachavurato nirpaʾ-lanu). The participle מְחֹלָל (mecholal, Poal of chalal) means \"pierced through, mortally perforated\" (anticipating the nails and spear of crucifixion); מְדֻכָּא (medukka, Pual of dakaʾ) means \"pulverized, crushed under divine weight\"; מוּסַר שְׁלוֹמֵנוּ (musar shelomenu) denotes the judicial chastisement that procured our peace with God; and חַבּוּרָה (chabburah) is a bloody blow-mark or stripe from a lash. In 1 Peter 2:24, Peter applies this with sacrificial precision: ὃς τὰς ἁμαρτίας ἡμῶν αὐτὸς ἀνήνεγκεν (hos tas hamartias hēmōn autos anēnegken — \"Who Himself carried up / bore our sins\"). The verb ἀναφέρω (anapherō) is the technical Levitical term for carrying a sacrificial animal up to the altar of God. The altar here is ἐπὶ τὸ ξύλον (epi to xylon — \"upon the tree\"), invoking Deuteronomy 21:23: \"cursed is everyone who hangs on a tree\". Peter concludes: οὗ τῷ μώλωπι ἰάθητε (hou tō mōlōpi iathēte — \"by whose wound/stripe you were healed\"), shifting Isaiah's future expectation into an accomplished, past-tense reality for all believers.",
    "why": "To demonstrate that our salvation required a genuine, physical, substitutionary bearing of the wrath of God against sin. Christ was not a mere moral example; He was the Lamb upon whom our specific guilt was imputed and executed, so that we might be delivered from both the penalty and power of sin.",
    "ultimatePoint": "Jesus Christ fulfilled Isaiah 53:5 by bearing our sins in His own body on the cross, taking the violent blow of divine judgment due to our transgressions so that we might receive eternal reconciliation and spiritual healing.",
    "personalRelevance": "Why you need to know this: You can never pay God back for your sins, nor can you cleanse your own guilt through self-punishment or moral striving; Christ bore every single one of your sins on the tree. What it does for you: It imparts profound, healing peace to your soul, shattering condemnation and giving you the power to break free from habitual sin and live righteously. Relationship with Jesus: Loving Jesus with deep, emotional tenderness, remembering that every nail, thorn, and stripe He endured was borne out of personal love for you.",
    "historicalContext": {
      "sourceAuthor": "Prophet Isaiah (c. 740–680 BC)",
      "sourceDate": "c. 700 BC",
      "sourceSetting": "Jerusalem facing Assyrian threats, looking ahead to the Babylonian exile and the ultimate spiritual redemption through Yahweh's Servant.",
      "fulfillmentAuthor": "Apostle Peter (c. AD 64–65, Rome)",
      "fulfillmentDate": "c. AD 64–65",
      "fulfillmentSetting": "Rome, writing to household slaves and persecuted believers who suffered unjust beatings, reminding them of the sinless Servant who suffered for them.",
      "redemptiveBridge": "Isaiah's vision of the wounded Servant bridges seven centuries directly to Golgotha, where Christ paid the penalty for human iniquity."
    }
  },
  "jer-31-31_Hebrews 8:8": {
    "id": "jer-31-31_Hebrews 8:8",
    "anchorRef": "Jeremiah 31:31",
    "targetRef": "Hebrews 8:8",
    "who": "Authorship & Context: The Prophet Jeremiah prophesied in Jerusalem amidst the siege and destruction of the city by Babylon (c. 586 BC), receiving the promise of the New Covenant while imprisoned in the court of the guard (Jer 31–33). The author of Hebrews (c. AD 64–68) quoted Jeremiah 31 at length to prove that the Mosaic Old Covenant was designed from its inception to be temporary and has now been superseded by the New Covenant. Identified Characters: Yahweh the faithful covenant Lord; the Prophet Jeremiah; the house of Israel and the house of Judah; Moses and the Exodus generation who broke the Sinai covenant; and all New Covenant believers. Christological Subject & Referent: Jesus Christ, the Mediator of a better covenant (κρείττονος διαθήκης μεσίτης, Heb 8:6). He ratifies the New Covenant through His own blood. Redemptive Purpose: To transition the people of God from external shadows (stone tablets, animal sacrifices, mortal priests) into the internal, permanent reality of heart-regeneration and total forgiveness of sins.",
    "what": "The prophetic promise of the New Covenant in Jeremiah 31:31 (\"Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel, and with the house of Judah\") fulfilled in Hebrews 8:8: \"For finding fault with them, he saith, Behold, the days come, saith the Lord, when I will make a new covenant with the house of Israel and with the house of Judah.\"",
    "when": "Source Horizon: Exilic Crisis Era (c. 586 BC) in besieged Jerusalem. Target Horizon: Apostolic Era (c. AD 64–68), immediately prior to the destruction of the Second Temple.",
    "how": "Covenantal theology and semantic analysis. In Jeremiah 31:31, God promises: וְכָרַתִּי אֶת־בֵּית יִשְׂרָאֵל וְאֶת־בֵּית יְהוּדָה בְּרִית חֲדָשָׁה (vekharatti ʾet-beyt Yisraʾel veʾet-beyt Yehudah berit chadashah — \"and I will cut [כָּרַת, karat — to cut a covenant by sacrificial blood] with the house of Israel and with the house of Judah a New Covenant\"). The covenant is חֲדָשָׁה (chadashah — entirely fresh in quality and substance, not a mere patch on the old). In Hebrews 8:8, the author translates this as διαθήκην καινήν (diathēkēn kainēn — a covenant new in quality and nature, distinct from véos which is merely recent in time). Hebrews points out that God found fault not with His holy law, but \"with them\" (μεμφόμενος γὰρ αὐτοὺς λέγει) because fallen human nature could not keep the Sinai terms. The New Covenant solves this by internalizing the law: διδοὺς νόμους μου εἰς τὴν διάνοιαν αὐτῶν, καὶ ἐπὶ καρδίας αὐτῶν ἐπιγράψω αὐτούς (\"I will put My laws into their minds, and write them upon their hearts\"), sealed with unconditional grace: \"their sins and their iniquities will I remember no more\" (Heb 8:12). Hebrews concludes in verse 13: \"In that he saith, A new covenant, he hath made the first old. Now that which decayeth and waxeth old is ready to vanish away.\"",
    "why": "To demonstrate that the cessation of the Mosaic ceremonial law was not an act of apostolic rebellion, but the explicit plan of God foretold by Jeremiah six centuries earlier. The old covenant was a temporary tutor; the New Covenant in Christ is eternal.",
    "ultimatePoint": "Jesus Christ has mediated and ratified the New Covenant foretold by Jeremiah, transforming human hearts through the Holy Spirit and granting eternal remission of sins through His atoning sacrifice.",
    "personalRelevance": "Why you need to know this: You are not under a legalistic contract of works where one failure disqualifies you; you are in a permanent covenant of grace with God written on your heart. What it does for you: It gives you a supernatural desire to love and obey God from the inside out, while providing absolute peace that your sins are permanently forgiven and forgotten by the Father. Relationship with Jesus: Living in the intimate communion of the New Covenant, where Jesus Himself writes His desires upon your heart and walks with you as your faithful Savior.",
    "historicalContext": {
      "sourceAuthor": "Prophet Jeremiah (c. 627–580 BC)",
      "sourceDate": "c. 586 BC",
      "sourceSetting": "Jerusalem falling to Nebuchadnezzar's army, the temple burning, and the Davidic monarchy seemingly extinguished. Jeremiah prophesies of an unshakeable future covenant.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Jewish Christians clinging to the earthly Temple rituals in Jerusalem. Hebrews announces that the Temple system is ready to vanish away (fulfilled in AD 70).",
      "redemptiveBridge": "From the broken covenant at Sinai to the promise in the ruins of Jerusalem, culminating in the upper room and the cross where Jesus inaugurated the New Covenant."
    }
  },
  "jer-31-31_Hebrews 10:16": {
    "id": "jer-31-31_Hebrews 10:16",
    "anchorRef": "Jeremiah 31:31",
    "targetRef": "Hebrews 10:16",
    "who": "Authorship & Context: Jeremiah; Hebrews author. Identified Characters: The Holy Spirit witnessing; the covenant community. Christological Subject & Referent: Jesus, whose one sacrifice perfected forever those who are sanctified. Redemptive Purpose: To establish that the repetition of animal sacrifices is obsolete because Christ's one offering brings total remission.",
    "what": "The Holy Spirit's testimony to the New Covenant in Jeremiah 31 cited in Hebrews 10:16: \"This is the covenant that I will make with them after those days, saith the Lord, I will put my laws into their hearts, and in their minds will I write them; And their sins and iniquities will I remember no more.\"",
    "when": "Source: Exilic Crisis (c. 586 BC). Target: Apostolic Era (c. AD 64–68).",
    "how": "Theological correlation of sacrifice and covenant. In Hebrews 10:14-18, the author demonstrates that animal sacrifices could never take away sins because they were offered year by year continually. But Christ offered μίαν ὑπὲρ ἁμαρτιῶν θυσίαν εἰς τὸ διηνεκές (\"one sacrifice for sins forever\"). The Holy Spirit confirms this by quoting Jeremiah 31:33-34: where there is remission of these, there is no more offering for sin (ὅπου δὲ ἄφεσις τούτων, οὐκέτι προσφορὰ περὶ ἁμαρτίας).",
    "why": "To prove that true forgiveness is complete and final; no further sacrificial system is required.",
    "ultimatePoint": "Christ's once-for-all sacrifice fulfilled Jeremiah's New Covenant, providing total remission of sins and internal heart transformation.",
    "personalRelevance": "Why you need to know this: Your sins are not merely covered temporarily; they are permanently erased from God's record. What it does for you: Delivers your conscience from dead works and lingering guilt, enabling you to enter the Holy of Holies with full assurance. Relationship with Jesus: Walking in joyful fellowship with Jesus without fear of rejection.",
    "historicalContext": {
      "sourceAuthor": "Prophet Jeremiah (c. 586 BC)",
      "sourceDate": "c. 586 BC",
      "sourceSetting": "Ruins of Jerusalem.",
      "fulfillmentAuthor": "Author of Hebrews (c. AD 64–68)",
      "fulfillmentDate": "c. AD 64–68",
      "fulfillmentSetting": "Instructing Hebrew Christians.",
      "redemptiveBridge": "Christ's one sacrifice fulfills the promise of complete heart renewal and pardon."
    }
  },
  "jer-31-31_Luke 22:20": {
    "id": "jer-31-31_Luke 22:20",
    "anchorRef": "Jeremiah 31:31",
    "targetRef": "Luke 22:20",
    "who": "Authorship & Context: The Prophet Jeremiah; Luke the Evangelist recording Jesus in the Upper Room in Jerusalem on the night of His betrayal (c. AD 30). Identified Characters: Jesus the Lord; the Twelve Apostles; Judas the betrayer; and Jeremiah the prophet. Christological Subject & Referent: Jesus Christ, who in His own person and shed blood enacts and ratifies the New Covenant. Redemptive Purpose: To transform the ancient Passover feast into the Lord's Supper, showing that the New Covenant is purchased by His blood.",
    "what": "The historical inauguration of Jeremiah's New Covenant in Jesus' words at the Last Supper in Luke 22:20: \"Likewise also the cup after supper, saying, This cup is the new testament in my blood, which is shed for you.\"",
    "when": "Source: Exilic Crisis (c. 586 BC). Target: Passion Week (c. AD 30) in the Upper Room.",
    "how": "Covenant inauguration formula. At Mount Sinai, Moses took the blood of oxen and sprinkled the people, saying: \"Behold the blood of the covenant\" (Ex 24:8). In the Upper Room, Jesus takes the cup of wine after the Passover meal and proclaims: Τοῦτο τὸ ποτήριον ἡ καινὴ διαθήκη ἐν τῷ αἵματί μου, τὸ ὑπὲρ ὑμῶν ἐκχυννόμενον (Touto to potērion hē kainē diathēkē en tō haimati mou, to hyper hymōn ekchynnomenon — \"This cup is the new covenant in My blood, which is poured out for you\"). Jesus explicitly unites Jeremiah's בְּרִית חֲדָשָׁה (berit chadashah / ἡ καινὴ διαθήκη) with His own impending death on Calvary. The New Covenant is not inaugurated with the blood of bulls and goats, but with the blood of the Son of God poured out for the remission of sins.",
    "why": "To declare to the disciples and to the world that Jeremiah's covenant promise was officially being born that very night through Christ's sacrificial death.",
    "ultimatePoint": "Jesus Christ inaugurated the New Covenant foretold by Jeremiah at the Last Supper, sealing it the next morning with His own blood upon the cross.",
    "personalRelevance": "Why you need to know this: Every time you partake of the Lord's Supper, you are celebrating the New Covenant that Jesus personally bought for you with His own blood. What it does for you: It anchors your daily life in covenant certainty, knowing that God's promises to you are sealed in the shed blood of Jesus. Relationship with Jesus: Remembering His sacrifice with tender love and living in vital communion with Him as your covenant Lord.",
    "historicalContext": {
      "sourceAuthor": "Prophet Jeremiah (c. 586 BC)",
      "sourceDate": "c. 586 BC",
      "sourceSetting": "Jerusalem under siege.",
      "fulfillmentAuthor": "Luke the Evangelist (c. AD 60–62, recording Jesus c. AD 30)",
      "fulfillmentDate": "c. AD 30",
      "fulfillmentSetting": "The Upper Room in Jerusalem on Passover night.",
      "redemptiveBridge": "From the prophetic tears of Jeremiah to the communion cup of Jesus, the New Covenant becomes historical reality."
    }
  },
  "dan-7-13_Matthew 26:64 / Revelation 1:7": {
    "id": "dan-7-13_Matthew 26:64 / Revelation 1:7",
    "anchorRef": "Daniel 7:13-14",
    "targetRef": "Matthew 26:64 / Revelation 1:7",
    "who": "Authorship & Context: The Prophet Daniel received apocalyptic visions while exiled in Babylon during the reign of Belshazzar (c. 553 BC). Jesus Christ stood before the Sanhedrin and High Priest Caiaphas in Jerusalem on the night of His trial (c. AD 30), recorded by Matthew. The Apostle John beheld the glorified Son of Man on Patmos (c. AD 95). Identified Characters: The Ancient of Days (God the Father); the Son of Man (Christ); angelic thousands ministering; the beasts representing pagan world empires; Caiaphas the High Priest; the Sanhedrin; and all nations, peoples, and languages. Christological Subject & Referent: Jesus Christ, the divine Son of Man (ὁ Υἱὸς τοῦ ἀνθρώπου / כְּבַר אֱנָשׁ). He rides the clouds of heaven, receives an everlasting dominion, and will return visibly to judge the earth. Redemptive Purpose: To expose the illegitimacy of earthly human courts condemning Christ, showing that the condemned Prisoner will soon sit on the supreme throne of the cosmos as universal Judge and King.",
    "what": "The climactic messianic vision of the Son of Man in Daniel 7:13-14 (\"behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of days... And there was given him dominion, and glory, and a kingdom\") fulfilled in Jesus' solemn trial confession in Matthew 26:64 (\"Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven\") and John's apocalyptic prophecy in Revelation 1:7 (\"Behold, he cometh with clouds; and every eye shall see him\").",
    "when": "Source Horizon: Neo-Babylonian Era (c. 553 BC) in Babylon. Target Horizon: AD 30 trial in Jerusalem, and the apocalyptic Second Coming.",
    "how": "Aramaic apocalyptic exegesis and messianic self-identification. In Daniel 7:13-14, the Aramaic text records: וַאֲרוּ עִם־עֲנָנֵי שְׁמַיָּא כְּבַר אֱנָשׁ אָתֵה הֲוָה וְעַד־עַתִּיק יֽוֹמַיָּא מְטָה (vaʾaru ʿim-ʿananey shemayya kevar ʾenash ʾateh havah, veʿad-ʿAttiq yomayya metah — \"and behold, with the clouds of heaven One like a Son of Man was coming, and He reached the Ancient of Days\"). In the Old Testament, riding the clouds is the exclusive prerogative of Yahweh (Psa 104:3, Isa 19:1). Furthermore, this Son of Man receives שָׁלְטָן עָלַם (sholtan ʿalam — an everlasting dominion) and all nations serve/worship Him: יִפְלְחוּן (yiplechun, from pelach — sacrificial divine worship reserved exclusively for God). When the High Priest Caiaphas adjured Jesus by the living God to declare if He was the Christ, Jesus replied: Πλὴν λέγω ὑμῖν, ἀπ' ἄρτι ὄψεσθε τὸν Υἱὸν τοῦ ἀνθρώπου καθήμενον ἐκ δεξιῶν τῆς δυνάμεως καὶ ἐρχόμενον ἐπὶ τῶν νεφελῶν τοῦ οὐρανοῦ (Plēn legō hymin, ap' arti opsesthe ton Huion tou anthrōpou kathēmenon ek dexiōn tēs dynameōs kai erchomenon epi tōn nephelōn tou ouranou — \"Nevertheless I say to you, Hereafter you shall see the Son of Man sitting at the right hand of Power and coming on the clouds of heaven\"). The High Priest immediately tore his robes and cried \"Blasphemy!\", fully understanding that Jesus was claiming Daniel 7:13—asserting His uncreated deity and supreme cosmic judgeship. John confirms this in Revelation 1:7: Ἰδοὺ ἔρχεται μετὰ τῶν νεφελῶν, καὶ ὄψεται αὐτὸν πᾶς ὀφθαλμός (\"Behold, He is coming with the clouds, and every eye will see Him\").",
    "why": "To reveal that Jesus' favorite title for Himself—\"the Son of Man\"—was not merely a claim to human frailty, but the code-name for the divine, cloud-riding Sovereign of Daniel 7 who inherits the cosmos.",
    "ultimatePoint": "Jesus Christ is the divine Son of Man of Daniel 7, who receives an everlasting dominion from the Father and will return in glory on the clouds of heaven to judge all nations and establish His eternal kingdom.",
    "personalRelevance": "Why you need to know this: The humble Jesus who was spit upon and mocked in Jerusalem is the very King who will appear in blazing majesty on the clouds to judge history. What it does for you: It gives you fearless courage when standing before hostile worldly cultures or courts, knowing that your Lord holds supreme jurisdiction over all judges, presidents, and kings. Relationship with Jesus: Bowing before Jesus as your glorified King and living with joyful anticipation for the day He returns on the clouds.",
    "historicalContext": {
      "sourceAuthor": "Prophet Daniel (c. 605–530 BC)",
      "sourceDate": "c. 553 BC",
      "sourceSetting": "Babylon, as pagan empires (Babylon, Medo-Persia, Greece, Rome) arise as violent beasts from the stormy sea. Daniel is shown the heavenly courtroom where the Son of Man destroys the beasts.",
      "fulfillmentAuthor": "Apostle Matthew (c. AD 60–68) & Apostle John (c. AD 95)",
      "fulfillmentDate": "c. AD 30 / AD 95",
      "fulfillmentSetting": "The nocturnal trial before the Sanhedrin in Jerusalem, and John's exile on Patmos.",
      "redemptiveBridge": "Daniel's heavenly courtroom vision culminates in Jesus' confession at His trial, guaranteeing His universal return as triumphant King."
    }
  },
  "zec-12-10_John 19:37": {
    "id": "zec-12-10_John 19:37",
    "anchorRef": "Zechariah 12:10",
    "targetRef": "John 19:37",
    "who": "Authorship & Context: The Prophet Zechariah prophesied in post-exilic Jerusalem during the rebuilding of the Second Temple (c. 520–480 BC). The Apostle John stood at the foot of the cross on Golgotha as an eyewitness (c. AD 30/33), recording this fulfillment in his Gospel (c. AD 85–95). Identified Characters: Yahweh the speaker; the house of David and the inhabitants of Jerusalem; the Roman soldier who pierced Jesus' side with a spear; the Apostle John bearing witness; and Jesus Christ. Christological Subject & Referent: Jesus Christ, who is Yahweh incarnate. In Zechariah, Yahweh says \"they shall look upon ME whom they have pierced\"; on the cross, the side of Jesus is pierced, proving that the One pierced on the tree is God Himself in human flesh. Redemptive Purpose: To unveil the profound mystery of the pierced Shepherd-God: God took on human flesh so that He might be pierced for our sins, opening a fountain of grace and cleansing for all who repent.",
    "what": "The staggering prophetic fulfillment connecting Zechariah 12:10 (\"and they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son\") to the piercing of Jesus' side in John 19:37: \"And again another scripture saith, They shall look on him whom they pierced.\"",
    "when": "Source Horizon: Post-Exilic Restoration Era (c. 520 BC) in Jerusalem. Target Horizon: Good Friday at Golgotha outside Jerusalem c. AD 30/33.",
    "how": "Theological, grammatical, and canonical exegesis. In Zechariah 12:10, Yahweh Himself is the grammatical first-person speaker throughout the chapter. He proclaims: וְשָׁפַכְתִּי עַל־בֵּית דָּוִיד וְעַל יוֹשֵׁב יְרוּשָׁלִַם רוּחַ חֵן וְתַחֲנוּנִים וְהִבִּיטוּ אֵלַי אֵת אֲשֶׁר־דָּקָרוּ וְסָפְדוּ עָלָיו כְּמִסְפֵּד עַל־הַיָּחִיד (Veshafakhti ʿal-beyt David veʿal yoshev Yerushalayim ruach chen vetachanunim, vehibbitu ʾelay ʾet ʾasher-daqaru, vesafedu ʿalav kemisped ʿal-hayyachid — \"And I will pour out on the house of David and on the inhabitants of Jerusalem the Spirit of grace [חֵן, chen] and supplication [תַּחֲנוּנִים, tachanunim]; and they will look upon ME [אֵלַי, ʾelay] whom they have PIERCED [דָּקָרוּ, daqaru], and they will mourn for Him as one mourns for an only son [הַיָּחִיד, hayyachid]\"). The verb דָּקַר (daqar) denotes literal, violent piercing with a spear, lance, or sword. In John 19:34, a Roman soldier pierced Jesus' side with a lance (λόγχῃ αὐτοῦ τὴν πλευρὰν ἔνυξεν), and immediately came out blood and water. In verse 37, John quotes Zechariah: Ὄψονται εἰς ὃν ἐξεκέντησαν (Opsontai eis hon exekentēsan — \"They shall look on Him whom they pierced\"). John uses the verb ἐκκεντέω (ekkenteō — to pierce through), deliberately correcting the Greek Septuagint translation which had softened the reading. John identifies the pierced Jesus as the very Yahweh of Zechariah 12:10.",
    "why": "To demonstrate the unfathomable humility and love of God: the sovereign Lord of the universe allowed Himself to be pierced by the creatures He made, turning the wound of crucifixion into the fountain of eternal cleansing from sin and uncleanness (Zec 13:1).",
    "ultimatePoint": "Jesus Christ is Yahweh in the flesh: on the cross He was literally pierced for our redemption, so that looking upon Him in faith and repentance brings the outpouring of the Spirit of grace and eternal pardon.",
    "personalRelevance": "Why you need to know this: Your sins pierced the Son of God; the wounds on Jesus' hands, feet, and side are the permanent measure of what it cost God to redeem you. What it does for you: It melts a hard, rebellious heart into tender, loving repentance, assuring you that the fountain opened in Jesus' pierced side washes away every stain of guilt and shame. Relationship with Jesus: Gazing upon the pierced Savior with brokenhearted worship, thanking Him that His wounds are your healing and His pierced side is your refuge.",
    "historicalContext": {
      "sourceAuthor": "Prophet Zechariah (c. 520–480 BC)",
      "sourceDate": "c. 520 BC",
      "sourceSetting": "Post-exilic Jerusalem, as a small, impoverished remnant of Jews struggled to rebuild the Temple amidst Persian imperial domination. Zechariah looks beyond their poverty to the eschatological redemption of Zion.",
      "fulfillmentAuthor": "Apostle John (c. AD 85–95, eyewitness c. AD 30/33)",
      "fulfillmentDate": "c. AD 30/33",
      "fulfillmentSetting": "The hill of Golgotha at twilight on Good Friday, as blood and water flowed from Jesus' pierced side.",
      "redemptiveBridge": "The pierced Shepherd-God of Zechariah 12 bridges from post-exilic prophetic longing to Calvary, and forward to the Second Coming when every tribe of the earth shall mourn."
    }
  },
  "zec-12-10_Revelation 1:7": {
    "id": "zec-12-10_Revelation 1:7",
    "anchorRef": "Zechariah 12:10",
    "targetRef": "Revelation 1:7",
    "who": "Authorship & Context: Zechariah; John on Patmos. Identified Characters: The pierced Lord returning; every eye; those who pierced Him; and all tribes of the earth. Christological Subject & Referent: Jesus Christ returning as the pierced Sovereign. Redemptive Purpose: To reveal the global consummation of Zechariah's prophecy at the Second Coming.",
    "what": "The eschatological fulfillment of Zechariah 12:10 in Revelation 1:7: \"Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen.\"",
    "when": "Source: Post-Exilic Era (c. 520 BC). Target: Apocalyptic Climax (c. AD 95).",
    "how": "Apocalyptic universalization. John combines Daniel 7:13 (\"cometh with clouds\") with Zechariah 12:10: καὶ ὄψεται αὐτὸν πᾶς ὀφθαλμὸς καὶ οἵτινες αὐτὸν ἐξεκέντησαν, καὶ κόψονται ἐπ' αὐτὸν πᾶσαι αἱ φυλαὶ τῆς γῆς (\"and every eye will see Him, and those who pierced Him, and all the tribes of the earth will mourn over Him\"). The mourning of Zechariah 12 becomes global at Christ's visible return.",
    "why": "To demonstrate that the rejected, pierced Savior will be vindicated before the eyes of all humanity.",
    "ultimatePoint": "The One who was pierced on Calvary will return in the clouds as universal Judge, and every eye will see Him.",
    "personalRelevance": "Why you need to know this: History is moving toward a decisive day when all denial of Christ will end. What it does for you: Inspires urgency in sharing the gospel, that men and women may look to Him in saving faith now before they must face Him in judgment. Relationship with Jesus: Longing for His appearing with holy expectation.",
    "historicalContext": {
      "sourceAuthor": "Prophet Zechariah (c. 520 BC)",
      "sourceDate": "c. 520 BC",
      "sourceSetting": "Post-exilic Jerusalem.",
      "fulfillmentAuthor": "Apostle John (c. AD 95)",
      "fulfillmentDate": "c. AD 95",
      "fulfillmentSetting": "Exile on Patmos.",
      "redemptiveBridge": "From the piercing at Calvary to the universal revelation of the pierced King."
    }
  },
  "zec-12-10_Matthew 24:30": {
    "id": "zec-12-10_Matthew 24:30",
    "anchorRef": "Zechariah 12:10",
    "targetRef": "Matthew 24:30",
    "who": "Authorship & Context: Zechariah; Jesus in the Olivet Discourse (recorded by Matthew c. AD 60–68). Identified Characters: Jesus the Son of Man; the disciples; and all the tribes of the earth. Christological Subject & Referent: Jesus Christ coming in power and great glory. Redemptive Purpose: To prepare believers for the sudden, glorious appearing of the Son of Man.",
    "what": "Jesus' citation of Zechariah 12:10 in the Olivet Discourse in Matthew 24:30: \"And then shall appear the sign of the Son of man in heaven: and then shall all the tribes of the earth mourn, and they shall see the Son of man coming in the clouds of heaven with power and great glory.\"",
    "when": "Source: Post-Exilic Era (c. 520 BC). Target: Olivet Discourse (c. AD 30) on Mount of Olives.",
    "how": "Eschatological prophecy. Jesus applies Zechariah's phrase καὶ τότε κόψονται πᾶσαι αἱ φυλαὶ τῆς γῆς (\"and then all the tribes of the earth shall mourn\") to His glorious advent. The mourning is both the sorrow of unprepared sinners and the repentant mourning of those who recognize the One they rejected.",
    "why": "To warn humanity that judgment will be undeniable and universal.",
    "ultimatePoint": "The pierced Messiah will appear in glory on the clouds of heaven, causing all the tribes of the earth to mourn.",
    "personalRelevance": "Why you need to know this: The return of Jesus will not be a secret or ambiguous event; it will be cosmic and unmistakable. What it does for you: Keeps you alert, watchful, and steadfast in faith amidst end-time deception. Relationship with Jesus: Living in daily readiness to meet your King.",
    "historicalContext": {
      "sourceAuthor": "Prophet Zechariah (c. 520 BC)",
      "sourceDate": "c. 520 BC",
      "sourceSetting": "Jerusalem restoration.",
      "fulfillmentAuthor": "Apostle Matthew (c. AD 60–68, recording Jesus c. AD 30)",
      "fulfillmentDate": "c. AD 30",
      "fulfillmentSetting": "Mount of Olives overlooking the Temple.",
      "redemptiveBridge": "The prophetic mourning of Zechariah leads directly to the cosmic climax of the Olivet Discourse."
    }
  },
  "mal-4-2_Luke 1:78-79": {
    "id": "mal-4-2_Luke 1:78-79",
    "anchorRef": "Malachi 4:2",
    "targetRef": "Luke 1:78-79",
    "who": "Authorship & Context: The Prophet Malachi delivered the final prophetic oracle of the Old Testament canon in Jerusalem (c. 430–400 BC) during the Persian era under Nehemiah's governorship. Zechariah the priest, father of John the Baptist, was filled with the Holy Spirit and uttered the Benedictus canticle (Luke 1:67-79) in Judea upon the circumcision of his newborn son (c. 5–4 BC), recorded by Luke the Evangelist (c. AD 60–62). Identified Characters: Yahweh of Hosts speaking through Malachi; the faithful remnant who \"fear My name\"; the righteous King-Messiah (the Sun of Righteousness); the priest Zechariah; the infant forerunner John; and sinners sitting in the shadow of death. Christological Subject & Referent: Jesus Christ, the Sun of Righteousness (שֶׁמֶשׁ צְדָקָה, Shemesh Tsedaqah) and the Dayspring / Dawn from on High (ἀνατολὴ ἐξ ὕψους). He is the personal divine Dawn who ends four centuries of prophetic silence and spiritual night. Redemptive Purpose: To reveal the tender visceral mercy of God: the Messiah comes not as scorching wrath, but as radiant solar illumination that heals the broken, justifies the ungodly, and guides wandering feet into the pathway of peace.",
    "what": "The glorious poetic and theological fulfillment of the Old Testament's concluding messianic promise in Malachi 4:2 (\"But unto you that fear my name shall the Sun of righteousness arise with healing in his wings; and ye shall go forth, and grow up as calves of the stall\") in Zechariah's Benedictus prophecy in Luke 1:78-79: \"Through the tender mercy of our God; whereby the dayspring from on high hath visited us, To give light to them that sit in darkness and in the shadow of death, to guide our feet into the way of peace.\"",
    "when": "Source Horizon: Persian Restoration Era (c. 430 BC), the final book and chapter of the Old Testament. Target Horizon: The dawn of the New Testament era (c. 5–4 BC) in the hill country of Judea.",
    "how": "Messianic solar imagery and canonical exegesis. In Malachi 4:2, the prophet concludes the Hebrew Scriptures with a brilliant solar metaphor: וְזָרְחָה לָכֶם יִרְאֵי שְׁמִי שֶׁמֶשׁ צְדָקָה וּמַרְפֵּא בִּכְנָפֶיהָ (Vezarechah lakhem yir'ey shemi shemesh tsedaqah u-marpeʾ biknafeha — \"And there shall arise for you who fear My name the Sun of Righteousness with healing in His wings / rays / borders\"). The noun כָּנָף (kanaf) denotes both the outstretched rays or wings of dawn and the corner borders/fringes (tzitzit) of a garment (as when the woman with the issue of blood touched the kanaf of Jesus' garment and received healing, Mat 9:20). In Luke 1:78-79, Zechariah translates Malachi's Hebrew solar promise into Greek: διὰ σπλάγχνα ἐλέους Θεοῦ ἡμῶν (dia splagchna eleous Theou hēmōn — \"because of the tender visceral mercies / deep compassions of our God\"), ἐν οἷς ἐπεσκέψατο ἡμᾶς ἀνατολὴ ἐξ ὕψους (en hois epeskepsato hēmas anatolē ex hypsous — \"by which the Dayspring / Sunrise / Orient from on high has visited us\"). The Greek term ἀνατολή (anatolē) signifies the rising of the sun breaking above the eastern horizon. Christ is the heavenly Sunrise who visits those sitting in spiritual darkness and the shadow of death (ἐν σκότει καὶ σκιᾷ θανάτου) to guide their feet into the way of peace (εἰς ὁδὸν εἰρήνης).",
    "why": "To demonstrate the seamless transition between the Testaments. The last prophetic promise of the Old Testament (Malachi 4) is the first fulfilled reality celebrated at the threshold of the New Testament (Luke 1), proving that the four centuries of prophetic silence did not derail God's covenant promises.",
    "ultimatePoint": "Jesus Christ is the Sun of Righteousness and heavenly Dayspring whose rising dispels the long darkness of sin, bringing divine healing, forgiveness, and peace to all who revere His name.",
    "personalRelevance": "Why you need to know this: No matter how dark your past, your circumstances, or your mental struggle may feel, the spiritual night is not permanent; the Sun of Righteousness has risen over your life. What it does for you: It pours warmth, joy, and emotional healing into the cold, wounded places of your soul, liberating you to leap with joy like well-fed calves released from the stall into the sunshine. Relationship with Jesus: Walking with Jesus as your personal Dayspring, stepping into His healing rays every morning and letting His tender mercy guide your steps throughout the day.",
    "historicalContext": {
      "sourceAuthor": "Prophet Malachi (c. 430–400 BC)",
      "sourceDate": "c. 430 BC",
      "sourceSetting": "Post-exilic Jerusalem, addressing a cynical, spiritually indifferent generation offering blemished animals to God. Malachi warns of the Day of Judgment but promises the rising of the Sun of Righteousness to the faithful remnant.",
      "fulfillmentAuthor": "Luke the Evangelist (c. AD 60–62, recording Zechariah c. 5–4 BC)",
      "fulfillmentDate": "c. 5–4 BC",
      "fulfillmentSetting": "The hill country of Judea, as the aged priest Zechariah recovers his speech after nine months of silence upon the birth of his son John.",
      "redemptiveBridge": "Across 400 silent years between the Testaments, Malachi's setting sun of Old Testament prophecy rises again as the Dayspring of the New Testament in Jesus Christ."
    }
  },
  "mal-4-2_Revelation 22:16": {
    "id": "mal-4-2_Revelation 22:16",
    "anchorRef": "Malachi 4:2",
    "targetRef": "Revelation 22:16",
    "who": "Authorship & Context: Malachi; the Apostle John on Patmos receiving the final words of the resurrected Lord. Identified Characters: Malachi; the faithful remnant; the Apostle John; the churches; and Jesus Christ. Christological Subject & Referent: Jesus Christ, the Root and Offspring of David, and the bright and morning Star. Redemptive Purpose: To close both the Old Testament and the New Testament with Christ as the celestial Light of redemption.",
    "what": "The canonical symmetry between the Sun of Righteousness closing the Old Testament in Malachi 4:2 and Christ declaring Himself the Bright and Morning Star at the conclusion of the New Testament in Revelation 22:16: \"I Jesus have sent mine angel to testify unto you these things in the churches. I am the root and the offspring of David, and the bright and morning star.\"",
    "when": "Source: Persian Restoration (c. 430 BC). Target: Patmos Apocalyptic Epilogue (c. AD 95).",
    "how": "Canonical bookend and celestial typology. Malachi concludes the Old Testament with the promise that the Sun of Righteousness will arise (וְזָרְחָה שֶׁמֶשׁ צְדָקָה). Revelation concludes the New Testament and the entire biblical canon with Jesus declaring in the first person: Ἐγώ εἰμι... ὁ ἀστὴρ ὁ λαμπρὸς ὁ πρωϊνός (Egō eimi... ho astēr ho lampros ho prōinos — \"I am... the bright and morning star\"). The morning star heralds the imminent rising of the sun and the beginning of an eternal day where \"there shall be no night there\" (Rev 22:5).",
    "why": "To demonstrate that the entire biblical revelation from Genesis to Revelation is enveloped in Christ as the Light of the world.",
    "ultimatePoint": "Jesus Christ is both the Sun of Righteousness and the Bright and Morning Star, whose rising brings an end to the night of human rebellion and inaugurates the eternal day of the New Creation.",
    "personalRelevance": "Why you need to know this: When the world feels darkest, the morning star reminds you that the eternal dawn is about to break. What it does for you: Fills your heart with joyful hope and perseverance, knowing that the night is far spent and the day of Christ's return is near. Relationship with Jesus: Looking to Jesus as your Morning Star in every dark hour.",
    "historicalContext": {
      "sourceAuthor": "Prophet Malachi (c. 430 BC)",
      "sourceDate": "c. 430 BC",
      "sourceSetting": "Post-exilic Jerusalem.",
      "fulfillmentAuthor": "Apostle John (c. AD 95)",
      "fulfillmentDate": "c. AD 95",
      "fulfillmentSetting": "Patmos vision concluding the Apocalypse.",
      "redemptiveBridge": "The closing chapter of the Old Testament connects directly to the closing chapter of the New Testament in the celestial glory of Christ."
    }
  },
  "mal-4-2_2 Peter 1:19": {
    "id": "mal-4-2_2 Peter 1:19",
    "anchorRef": "Malachi 4:2",
    "targetRef": "2 Peter 1:19",
    "who": "Authorship & Context: Malachi; the Apostle Peter writing his farewell testament before martyrdom in Rome (c. AD 66–67). Identified Characters: Malachi; the Apostle Peter; eyewitnesses of the Transfiguration; and believers holding fast to the prophetic Word. Christological Subject & Referent: Jesus Christ, the Day Star (φωσφόρος) arising in the hearts of believers. Redemptive Purpose: To establish the supreme reliability of the prophetic Scriptures until the dawn of Christ's return.",
    "what": "The arising of the Sun of Righteousness in Malachi 4:2 reflected in Peter's exhortation to heed the prophetic word until the Day Star arises in 2 Peter 1:19: \"We have also a more sure word of prophecy; whereunto ye do well that ye take heed, as unto a light that shineth in a dark place, until the day dawn, and the day star arise in your hearts.\"",
    "when": "Source: Persian Restoration (c. 430 BC). Target: Peter's farewell testament (c. AD 66–67) in Rome.",
    "how": "Epistemological and eschatological exegesis. Peter compares the prophetic Scriptures to a lamp shining in a squalid, murky place (ἐν αὐχμηρῷ τόπῳ). But this lamp points toward a greater reality: ἕως οὗ ἡμέρα διαυγάσῃ καὶ φωσφόρος ἀνατείλῃ ἐν ταῖς καρδίαις ὑμῶν (heōs hou hēmera diaugasē kai phōsphoros anateilē en tais kardiais hymōn — \"until the day dawns and the light-bearer / morning star / day-star arises in your hearts\"). The noun φωσφόρος (phōsphoros — light-bringer) echoes Malachi's rising Sun of Righteousness, signifying both the internal subjective illumination of Christ's glory in the heart and His objective historical return.",
    "why": "To assure believers that the prophetic word is not a human myth or fairy tale, but God's steady beacon guiding us until the full radiance of Christ appears.",
    "ultimatePoint": "The prophetic word points toward Jesus Christ, the true Day Star, whose rising in our hearts and at His return dispels all spiritual darkness.",
    "personalRelevance": "Why you need to know this: In times of doubt, cultural confusion, or dark trials, Scripture is a steady, burning lamp for your soul. What it does for you: Anchors your faith in the infallible Word of God until the warmth of Christ's presence fills your heart with unshakable clarity. Relationship with Jesus: Allowing the living Christ to rise as the Day Star in your heart each day.",
    "historicalContext": {
      "sourceAuthor": "Prophet Malachi (c. 430 BC)",
      "sourceDate": "c. 430 BC",
      "sourceSetting": "Malachi's post-exilic warning.",
      "fulfillmentAuthor": "Apostle Peter (c. AD 66–67, Rome)",
      "fulfillmentDate": "c. AD 66–67",
      "fulfillmentSetting": "Rome, facing imminent execution under Nero.",
      "redemptiveBridge": "From Malachi's prophetic beacon to Peter's apostolic certainty in the arising Day Star."
    }
  },
  "mal-4-2_Matthew 17:2": {
    "id": "mal-4-2_Matthew 17:2",
    "anchorRef": "Malachi 4:2",
    "targetRef": "Matthew 17:2",
    "who": "Authorship & Context: Malachi; the Apostle Matthew recording the Transfiguration of Jesus on the high mountain (c. AD 30). Identified Characters: Jesus; Peter, James, and John; Moses and Elijah appearing in glory; and the Father speaking from the cloud. Christological Subject & Referent: Jesus Christ, whose face shone as the sun, unveiling His uncreated divine glory. Redemptive Purpose: To provide the inner circle of disciples with a preview of the glorious kingdom reign of the Sun of Righteousness.",
    "what": "The radiant solar majesty of the Sun of Righteousness in Malachi 4:2 manifested in the Transfiguration of Jesus in Matthew 17:2: \"And was transfigured before them: and his face did shine as the sun, and his raiment was white as the light.\"",
    "when": "Source: Persian Restoration (c. 430 BC). Target: High mountain in Galilee / Mount Hermon (c. AD 30).",
    "how": "Christophanic and eschatological manifestation. In Matthew 17:2, Jesus is transfigured: μετεμορφώθη (metemorphōthē — the outward veil of His humanity pulled aside to reveal His essential divine nature). Matthew notes: καὶ ἔλαμψεν τὸ πρόσωπον αὐτοῦ ὡς ὁ ἥλιος (kai elampsen to prosōpon autou hōs ho hēlios — \"and His face shone as the sun\"). The radiant solar countenance of Jesus directly fulfills Malachi's prophecy of the Sun of Righteousness (שֶׁמֶשׁ צְדָקָה). Moses (representing the Law) and Elijah (representing the Prophets) appear beside Him, and the Father declares: \"This is my beloved Son: hear him!\"",
    "why": "To demonstrate to the disciples that Jesus was not merely a suffering mortal destined for the cross, but the glorious Lord of glory whose kingdom will blaze with uncreated light.",
    "ultimatePoint": "The Transfiguration revealed Jesus Christ as the true Sun of Righteousness, whose radiant divine glory shines brighter than the sun.",
    "personalRelevance": "Why you need to know this: The Jesus who forgives your sins is the glorious God of unapproachable light before whom Moses and Elijah bow. What it does for you: Fills your heart with deep reverence, awe, and worship, curing casual attitudes toward God. Relationship with Jesus: Beholding the radiant glory of Jesus and being transformed into His image from glory to glory.",
    "historicalContext": {
      "sourceAuthor": "Prophet Malachi (c. 430 BC)",
      "sourceDate": "c. 430 BC",
      "sourceSetting": "Jerusalem oracle.",
      "fulfillmentAuthor": "Apostle Matthew (c. AD 60–68, recording c. AD 30)",
      "fulfillmentDate": "c. AD 30",
      "fulfillmentSetting": "High mountain in northern Israel (likely Mount Hermon).",
      "redemptiveBridge": "The prophetic solar promise of Malachi becomes visible historical reality on the Mount of Transfiguration."
    }
  },
  "mal-4-5_Luke 1:17 / Matthew 17:11-13": {
    "id": "mal-4-5_Luke 1:17 / Matthew 17:11-13",
    "anchorRef": "Malachi 4:5-6",
    "targetRef": "Luke 1:17 / Matthew 17:11-13",
    "who": "Authorship & Context: The Prophet Malachi concluded the Old Testament prophetic corpus with the promise of Elijah's return (c. 430 BC). Gabriel the Archangel announced the birth of John the Baptist to Zechariah in the Temple (c. 5 BC), recorded by Luke. Jesus Himself identified John as the promised Elijah following the Transfiguration (c. AD 30), recorded by Matthew. Identified Characters: Yahweh; the Prophet Elijah; the Prophet Malachi; the Archangel Gabriel; Zechariah the priest; John the Baptist; the disciples Peter, James, and John; and Jesus of Nazareth. Christological Subject & Referent: Jesus Christ, the coming Lord before whose face the prophetic forerunner prepares the way. Redemptive Purpose: To authenticate John the Baptist's ministry as the bridge between the Old and New Covenants, calling Israel to repentance before the King.",
    "what": "The prophetic promise of Elijah the forerunner in Malachi 4:5-6 (\"Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD: And he shall turn the heart of the fathers to the children\") fulfilled in Gabriel's annunciation in Luke 1:17 (\"And he shall go before him in the spirit and power of Elias... to make ready a people prepared for the Lord\") and Jesus' confirmation in Matthew 17:11-13 (\"Elias is come already... Then the disciples understood that he spake unto them of John the Baptist\").",
    "when": "Source Horizon: Persian Restoration (c. 430 BC). Target Horizon: The forerunner's ministry (c. 5 BC – AD 30) in Judea.",
    "how": "Typological and prophetic identification. Malachi promises: הִנֵּה אָנֹכִי שֹׁלֵחַ לָכֶם אֵת אֵלִיָּה הַנָּבִיא לִפְנֵי בּוֹא יוֹם יְהוָה הַגָּדוֹל וְהַנּוֹרָא (Hineh ʾanokhi sholeach lakhem ʾet ʾEliyah hanna-viʾ liphney boʾ yom Yahweh haggadol vehannoraʾ — \"Behold, I will send you Elijah the prophet before the coming of the great and terrible day of Yahweh\"). Gabriel clarifies that this was not the literal physical resurrection of the historical Tishbite, but a prophet coming ἐν πνεύματι καὶ δυνάμει Ἠλίου (en pneumati kai dynamei Ēliou — \"in the spirit and power of Elijah\"), carrying the identical prophetic mantle of fearless confrontation, ascetic wilderness lifestyle, and baptism of repentance. In Matthew 17:11-13, Jesus confirms: Ἠλίας ἤδη ἦλθεν (Ēlias ēdē ēlthen — \"Elijah has already come, and they knew him not, but have done unto him whatsoever they listed... Then the disciples understood that He spoke to them of John the Baptist\").",
    "why": "To demonstrate that God sent a mighty prophetic herald to prepare hearts before Christ appeared, ensuring that the covenant people had ample warning and opportunity to turn in repentance to their Messiah.",
    "ultimatePoint": "John the Baptist fulfilled the prophecy of Elijah's return, ministering in the spirit and power of Elijah to prepare the hearts of the people for the arrival of the Lord Jesus Christ.",
    "personalRelevance": "Why you need to know this: God always prepares the heart before He enters with His saving, transforming presence; true revival is always preceded by genuine repentance. What it does for you: It dismantles superficial religious complacency, calling you to honesty, humility, and wholehearted alignment with God's truth. Relationship with Jesus: Preparing room in your heart every day for King Jesus to rule and reign without rival.",
    "historicalContext": {
      "sourceAuthor": "Prophet Malachi (c. 430 BC)",
      "sourceDate": "c. 430 BC",
      "sourceSetting": "The final words of the Old Testament prophetic canon, placing a sentinel of hope on the watchtower of Israel.",
      "fulfillmentAuthor": "Luke the Evangelist & Apostle Matthew (c. AD 60–68)",
      "fulfillmentDate": "c. 5 BC / AD 30",
      "fulfillmentSetting": "The golden altar of incense in the Jerusalem Temple (Gabriel), and the slopes of Mount Hermon (Jesus).",
      "redemptiveBridge": "Elijah's mantle passes across 400 years to John the Baptist at the Jordan River, pointing directly to Jesus as the Lamb of God."
    }
  },
  "mat-1-22_Isaiah 7:14": {
    "id": "mat-1-22_Isaiah 7:14",
    "anchorRef": "Matthew 1:22-23",
    "targetRef": "Isaiah 7:14",
    "who": "Authorship & Context: The Apostle Matthew wrote his Gospel in Antioch/Judea (c. AD 60–68) to Jewish-Christian believers, demonstrating that Jesus is the authentic Messiah of Israel who fulfills the Old Testament Scriptures. The Prophet Isaiah delivered the virgin-birth prophecy in Jerusalem (c. 734 BC) during the Syro-Ephraimite crisis to wicked King Ahaz. Identified Characters: Yahweh the Lord; the Prophet Isaiah; wicked King Ahaz refusing to ask for a sign; the royal House of David; the virgin mother (Mary); Joseph the son of David receiving angelic counsel; and the divine child. Christological Subject & Referent: Jesus Christ, Immanuel (עִמָּנוּאֵל / Ἐμμανουήλ) — \"God with us\". He is the virgin-conceived Son who unites uncreated deity and authentic sinless humanity in one undivided Person. Redemptive Purpose: To prove that the Messiah's entrance into the human race was entirely supernatural, bypassing the corrupted federal headship of fallen Adam while taking genuine human nature to redeem humanity.",
    "what": "The apostolic retrospective and direct prophetic fulfillment connecting Matthew 1:22-23 (\"Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying, Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us\") to Isaiah 7:14: \"Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.\"",
    "when": "Source Horizon: Apostolic New Testament Era (c. AD 60–68, recording Christ's birth c. 5–4 BC). Target Horizon: Divided Monarchy / Syro-Ephraimite Crisis (c. 734 BC) in Jerusalem.",
    "how": "Apostolic sensus plenior and linguistic vindication. In Isaiah 7:14, the sign is given to the collective House of David (לָכֶם, lakhem — plural): לָכֵן יִתֵּן אֲדֹנָי הוּא לָכֶם אוֹת הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן וְקָרָאת שְׁמוֹ עִמָּנוּאֵל (Lakhen yitten ʾAdonay hu lakhem ʾot: hineh ha-ʿalmah harah veyoledet ben veqarat shemo ʿImmanu ʾEl — \"Therefore the Lord Himself shall give you a sign: Behold, the maiden/virgin [עַלְמָה, ʿalmah] is with child and bearing a son, and shall call His name Immanuel\"). In the pre-Christian Jewish Septuagint translation (c. 250 BC in Alexandria), Jewish translators translated the Hebrew עַלְמָה into the explicit Greek noun ἡ παρθένος (hē parthenos — strictly and exclusively a virgin), showing ancient Jewish understanding. Matthew, writing under divine inspiration, confirms this exact reading: Ἰδοὺ ἡ παρθένος ἐν γαστρὶ ἕξει καὶ τέξεται υἱόν, καὶ καλέσουσιν τὸ ὄνομα αὐτοῦ Ἐμμανουήλ, ὅ ἐστιν μεθερμηνευόμενον Μεθ' ἡμῶν ὁ Θεός (Idou hē parthenos en gastri hexei kai texetai huion, kai kalesousin to onoma autou Emmanouēl, ho estin methermēneuomenon Meth' hēmōn ho Theos). The virgin conception was necessary because a biological child of Adam would inherit Adam's fallen nature and guilt. The Holy Spirit overshadowed Mary so that the child born was the holy Son of God, uniting true deity (אֵל, ʾEl) with human nature: \"God with us\" (עִמָּנוּ, ʿimmanu).",
    "why": "To demonstrate that the Incarnation is the miraculous pinnacle of redemptive history. God did not send an angel or a mere human prophet to save us; God Himself stepped into the human family as an infant through the womb of a virgin.",
    "ultimatePoint": "Jesus Christ fulfilled Isaiah 7:14 through His supernatural conception by the Holy Spirit in the womb of the virgin Mary, uniting eternal deity with sinless humanity as Immanuel—God with us.",
    "personalRelevance": "Why you need to know this: You are never alone, forsaken, or abandoned in this universe; through the incarnation of Jesus, God is personally, permanently, and intimately with you. What it does for you: It banishes loneliness, dread, and despair, assuring you that your Savior understands your human weaknesses, tears, and struggles from the inside. Relationship with Jesus: Abiding in Jesus as Immanuel, walking each day in the joyful awareness that God is with you in every trial and victory.",
    "historicalContext": {
      "sourceAuthor": "Apostle Matthew (c. AD 60–68, Judea/Antioch)",
      "sourceDate": "c. 5–4 BC / AD 60",
      "sourceSetting": "Antioch/Judea, demonstrating to the Jewish community that the birth of Jesus of Nazareth was the precise fulfillment of their Hebrew prophets.",
      "fulfillmentAuthor": "Prophet Isaiah (c. 740–680 BC, Jerusalem)",
      "fulfillmentDate": "c. 734 BC",
      "fulfillmentSetting": "The royal palace of Jerusalem under siege by the armies of Syria and Northern Israel. Isaiah confronted Ahaz at the conduit of the upper pool.",
      "redemptiveBridge": "Across seven centuries, Isaiah's prophecy to the trembling House of David is fulfilled when the angel announces the conception of Immanuel to Joseph, son of David."
    }
  },
  "mat-1-23_Isaiah 7:14": {
    "id": "mat-1-23_Isaiah 7:14",
    "anchorRef": "Matthew 1:22-23",
    "targetRef": "Isaiah 7:14",
    "who": "Authorship & Context: Matthew recording the angel's message to Joseph; Isaiah delivering God's sign. Identified Characters: God; the virgin Mary; Joseph; Isaiah; and Immanuel. Christological Subject & Referent: Jesus Christ as Immanuel, God in our nature. Redemptive Purpose: To establish the Hypostatic Union of deity and humanity.",
    "what": "The translation and theological revelation of the name Immanuel in Matthew 1:23: \"Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us\" fulfilling Isaiah 7:14.",
    "when": "Source: Apostolic Era (c. AD 60). Target: Isaiah's prophecy (c. 734 BC).",
    "how": "Theological translation and incarnation theology. Matthew translates עִמָּנוּאֵל as Μεθ' ἡμῶν ὁ Θεός (Meth' hēmōn ho Theos). The preposition μετά (with) with the genitive denotes covenant solidarity, presence, and companionship. God has not stayed distant in transcendent majesty; He has tabernacled among us.",
    "why": "To reveal that redemption required God to become man.",
    "ultimatePoint": "The name Immanuel signifies that in Jesus Christ, God has entered into perpetual covenant solidarity with humanity.",
    "personalRelevance": "Why you need to know this: God did not send a surrogate; He came Himself. What it does for you: Delivers from the feeling that God is distant or indifferent to your pain. Relationship with Jesus: Knowing Jesus as God with you in every moment of life.",
    "historicalContext": {
      "sourceAuthor": "Apostle Matthew (c. AD 60)",
      "sourceDate": "c. AD 60",
      "sourceSetting": "Joseph's dream in Nazareth.",
      "fulfillmentAuthor": "Prophet Isaiah (c. 734 BC)",
      "fulfillmentDate": "c. 734 BC",
      "fulfillmentSetting": "Jerusalem under threat.",
      "redemptiveBridge": "The prophetic name Immanuel bridges directly to the manger and the cross."
    }
  },
  "rom-5-14_1 Corinthians 15:22": {
    "id": "rom-5-14_1 Corinthians 15:22",
    "anchorRef": "Romans 5:14",
    "targetRef": "1 Corinthians 15:22",
    "who": "Authorship & Context: The Apostle Paul wrote Romans from Corinth (c. AD 57) to unfold the forensic and covenant architecture of the gospel. Paul wrote 1 Corinthians from Ephesus (c. AD 55) to defend the bodily resurrection of the dead against philosophical skepticism in Corinth. Identified Characters: The first Adam (the biological and federal head of fallen humanity); the Last Adam, Jesus Christ (the federal head of the redeemed new creation); and the two humanities represented by each head. Christological Subject & Referent: Jesus Christ, the Last Adam (ὁ ἔσχατος Ἀδάμ) and the second Man (ὁ δεύτερος ἄνθρωπος). Where the first Adam fell into sin and dragged the human race into condemnation and death, Christ obeyed perfectly, conquered death through His resurrection, and became a life-giving Spirit (πνεῦμα ζῳοποιοῦν). Redemptive Purpose: To unveil the biblical doctrine of federal headship: our condemnation in Adam was total and unearned by our personal acts, and therefore our justification in Christ is total, unearned, and secured through faith in His finished work.",
    "what": "The apostolic harmonization of covenant federal headship connecting Romans 5:14 (\"Nevertheless death reigned from Adam to Moses, even over them that had not sinned after the similitude of Adam's transgression, who is the figure of him that was to come\") to 1 Corinthians 15:21-22: \"For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.\"",
    "when": "Source Horizon: Mid-1st Century Apostolic Era (c. AD 57), written to Rome. Target Horizon: Mid-1st Century Apostolic Era (c. AD 55), written to Corinth.",
    "how": "Harmonious Pauline theology of the Two Adams and covenant typology. In Romans 5:14, Paul explicitly identifies the first man Adam as a prophetic type: ὅς ἐστιν τύπος τοῦ μέλλοντος (hos estin typos tou mellontos — \"who is a type / figure / representative imprint of the One who was to come\"). Adam was a type not in his moral failure, but in his federal, representative headship: what Adam did determined the destiny of all who were in him. In 1 Corinthians 15:21-22, Paul develops this identical architecture: ὥσπερ γὰρ ἐν τῷ Ἀδὰμ πάντες ἀποθνῄσκουσιν, οὕτως καὶ ἐν τῷ Χριστῷ πάντες ζωοποιηθήσονται (hōsper gar en tō Adam pantes apothnēskousin, houtōs kai en tō Christō pantes zōopoiēthēsontai — \"For just as in Adam all die, in this manner also in Christ all shall be made alive\"). In verse 45, Paul adds: Ἐγένετο ὁ πρῶτος ἄνθρωπος Ἀδὰμ εἰς ψυχὴν ζῶσαν, ὁ ἔσχατος Ἀδὰμ (eschatos Adam) εἰς πνεῦμα ζῳοποιοῦν (pneuma zōopoioun) — \"The first man Adam became a living soul; the Last Adam became a life-giving Spirit\". The first Adam brought sin, condemnation, and death (מָוֶת, mavet / θάνατος, thanatos); the Last Adam brings righteousness, justification, and indestructible resurrection life (ζωή, zōē).",
    "why": "To establish the absolute certainty of the believer's resurrection and justification. If Adam's single act of disobedience was powerful enough to condemn all united to him, how much more is Christ's perfect obedience and resurrection powerful enough to secure eternal life for all who are united to Him by faith.",
    "ultimatePoint": "Jesus Christ is the Last Adam and federal Head of the New Creation: just as all united to the first Adam inherit physical and spiritual death, so all united to Christ by faith receive eternal justification and bodily resurrection life.",
    "personalRelevance": "Why you need to know this: Your identity before God is no longer defined by the fallen, broken heritage of Adam, but by the victorious, righteous standing of Jesus Christ. What it does for you: It shatters despair over personal weakness, assuring you that you have been completely transferred out of the dominion of death and into the unshakeable kingdom of life in Christ. Relationship with Jesus: Abiding in Jesus as your new federal Head, drawing your daily life, strength, and righteousness from His indwelling Spirit.",
    "historicalContext": {
      "sourceAuthor": "Apostle Paul (c. AD 57, Corinth)",
      "sourceDate": "c. AD 57",
      "sourceSetting": "Corinth, systematically setting forth the universal scope of the gospel to the Roman church before his planned journey to Spain.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 55, Ephesus)",
      "fulfillmentDate": "c. AD 55",
      "fulfillmentSetting": "Ephesus, writing to Corinth where Greek philosophical dualism led some believers to deny the physical resurrection of the dead.",
      "redemptiveBridge": "The two great federal heads of cosmic history—the first Adam in the Garden of Eden and the Last Adam in the Garden of Gethsemane and Golgotha—define the entire drama of redemption."
    }
  },
  "gen-12-3_Gal 3:8,16": {
    "id": "gen-12-3_Galatians 3:8,16",
    "anchorRef": "Genesis 12:3",
    "targetRef": "Galatians 3:8, 16",
    "who": "Authorship & Context: Moses recorded the call of Abram from Ur of the Chaldees into the Promised Land. The Apostle Paul wrote Galatians (c. AD 48–49) to defend the pure gospel of justification by faith alone. Identified Characters: Yahweh making unconditional covenant promises; Abraham believing God and having it credited as righteousness; the Gentile nations (heathen / τὰ ἔθνη) destined for blessing; and legalistic Judaizers attempting to add Mosaic circumcision. Christological Subject & Referent: Jesus Christ, the singular Seed (τῷ σπέρματί σου, ὅς ἐστιν Χριστός) through whom all covenant promises find their \"Yes\" and \"Amen\". Redemptive Purpose: To prove that God's plan from the very beginning was global salvation for all nations through faith in Christ, entirely independent of the Mosaic ceremonial code.",
    "what": "The foundational Abrahamic Covenant promise (\"in thee shall all families of the earth be blessed\") connected to Paul's apostolic exposition in Galatians 3:8,16: \"And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham... Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.\"",
    "when": "Source Horizon: Middle Bronze Age (c. 2091 BC), God calling Abram from Ur and Haran into Canaan. Target Horizon: Apostle Paul writing to the churches of Galatia c. AD 48–49 in response to the Judaizing controversy.",
    "how": "Rigorous grammatical, canonical, and Christological exegesis. In Genesis 12:3, Yahweh promises: וְנִבְרְכוּ בְךָ כֹּל מִשְׁפְּחֹת הָאֲדָמָה (venivrekhu vekha kol mishpekhot ha'adamah — Niphal stem: \"in you shall all the families/clans of the earth be blessed / find blessing\"). Paul identifies this promise as the gospel itself: προευηγγελίσατο τῷ Ἀβραάμ (proeuēngelisato tō Abraam — \"the Scripture preached the gospel beforehand to Abraham\"). In Galatians 3:16, Paul scrutinizes the grammatical number of the Hebrew collective noun זֶרַע (zeraʿ) and its Greek Septuagint counterpart σπέρμα (sperma): οὐ λέγει, Καὶ τοῖς σπέρμασιν, ὡς ἐπὶ πολλῶν, ἀλλ' ὡς ἐφ' ἑνός, Καὶ τῷ σπέρματί σου, ὅς ἐστιν Χριστός (\"He does not say, 'And to seeds' [σπέρμασιν, spermasin], as of many, but as of one, 'And to your Seed' [σπέρματί, spermati], which is Christ\"). While the noun can have collective usage, Paul by the Holy Spirit reveals its intentional teleological focus: the covenant promises were addressed not to an ethnic multitude, but to a single covenant Representative—Jesus Christ. Therefore, Gentiles who belong to Christ by faith are counted true heirs of Abraham without needing circumcision or Torah works.",
    "why": "To prove that the gospel of justification by grace through faith is not an apostolic innovation or deviation from Moses, but the predetermined fulfillment of the unconditional Abrahamic Covenant, which was ratified 430 years before the Sinai Law and cannot be annulled by legalistic works.",
    "ultimatePoint": "Jesus Christ is the singular promised Seed of Abraham in whom all nations of the earth are blessed with the gift of righteousness through faith, fulfilling the covenant promise given two millennia prior.",
    "personalRelevance": "Why you need to know this: God's covenant blessing and unconditional favor reach you through faith alone, not through human pedigree, religious performance, or flawless self-effort. What it does for you: It eliminates spiritual performance anxiety and imposter syndrome, assuring you that you are a full heir to every promise of God in Christ Jesus. Relationship with Jesus: In Christ, you are counted completely righteous and dearly loved by the Father, walking day by day in the ancient covenant of grace as Abraham's spiritual offspring.",
    "historicalContext": {
      "sourceAuthor": "Moses (c. 1446–1406 BC, recording patriarchal history)",
      "sourceDate": "c. 2091 BC",
      "sourceSetting": "Abram called out of pagan Mesopotamian idolatry into nomad wandering in Canaan, receiving the divine pledge of land, seed, and global blessing.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 48–49, Antioch)",
      "fulfillmentDate": "c. AD 48–49",
      "fulfillmentSetting": "Galatian churches targeted by legalistic agitators demanding circumcision for Gentile converts.",
      "redemptiveBridge": "From Abraham's altar in Canaan to Calvary, the covenant of grace remains immutable."
    }
  },
  "jos-5-14_Rev 19:11-16": {
    "id": "jos-5-14_Revelation 19:11-16",
    "anchorRef": "Joshua 5:13-15",
    "targetRef": "Revelation 19:11-16",
    "who": "Authorship & Context: Joshua (or the canonical scribes of the Conquest, c. 1400–1375 BC) recorded the Christophany on the plains of Jericho before the fall of the city. The Apostle John, exiled on the Isle of Patmos under Emperor Domitian (c. AD 95–96), received the apocalyptic vision of the heavens opening to reveal the Rider on the White Horse. Identified Characters: Joshua the commander of Israel; the mysterious warrior with a drawn sword who identifies Himself as the Captain of Yahweh's host; heavenly armies clothed in fine linen; the kings and armies of the beast; and Jesus Christ. Christological Subject & Referent: Jesus Christ, the eternal Word of God (Ὁ Λόγος τοῦ Θεοῦ) and King of kings and Lord of lords (ΒΑΣΙΛΕΥΣ ΒΑΣΙΛΕΩΝ ΚΑΙ ΚΥΡΙΟΣ ΚΥΡΙΩΝ). In Joshua 5 He appears as an Old Testament pre-incarnate Christophany; in Revelation 19 He appears in His full apocalyptic, resurrected majesty. Redemptive Purpose: To declare that the battle for the kingdom belongs exclusively to God: Joshua must take off his shoes before the divine Commander, and all human empires must bow before the conquering Lamb.",
    "what": "The glorious Christophanic identity connecting the Captain of the LORD's Host in Joshua 5:13-15 (\"Nay; but as captain of the host of the LORD am I now come... Loose thy shoe from off thy foot; for the place whereon thou standest is holy\") to the triumphant Rider on the White Horse in Revelation 19:11-16: \"And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True... and his name is called The Word of God... KING OF KINGS, AND LORD OF LORDS.\"",
    "when": "Source Horizon: Conquest of Canaan (c. 1406 BC) on the plains of Jericho. Target Horizon: Apocalyptic Consummation revealed to John on Patmos c. AD 95–96.",
    "how": "Christophanic continuity and apocalyptic warfare. In Joshua 5:13-15, Joshua encounters a Man with a drawn sword: חַרְבּוֹ שְׁלוּפָה בְּיָדוֹ (charbo shelufah beyado — \"His drawn sword in His hand\"). When Joshua asks whether He is for Israel or their adversaries, He answers: לֹא כִּי אֲנִי שַׂר־צְבָא־יְהוָה עַתָּה בָאתִי (Loʾ, ki ʾani Sar-Tsevaʾ-Yahweh ʿattah vaʾti — \"No, but as Commander/Captain of the army of Yahweh have I now come!\"). Joshua falls with his face to the earth and worships (וַיִּשְׁתָּחוּ, vayyishtachu). An ordinary angel strictly refuses worship (Rev 19:10, 22:9), but this Captain accepts worship and commands: שַׁל־נַעַלְךָ מֵעַל רַגְלְךָ כִּי הַמָּקוֹם אֲשֶׁר אַתָּה עֹמֵד עָלָיו קֹדֶשׁ הוּא (shal-naʿalkha meʿal raglekha ki hammaqom ʾasher ʾattah ʿomed ʿalav qodesh hu — \"Loose your sandal from your foot, for the place whereon you stand is holy\"), the exact words spoken by Yahweh to Moses at the burning bush (Ex 3:5). In Revelation 19:11-16, John sees this identical Captain: Πιστὸς καὶ Ἀληθινός (Pistos kai Alēthinos — \"Faithful and True\"), who ἐν δικαιοσύνῃ κρίνει καὶ πολεμεῖ (en dikaiosynē krinei kai polemei — \"in righteousness judges and makes war\"). Out of His mouth goes a sharp two-edged sword (ῥομφαία ὀξεῖα, rhomphaia oxeia) to strike the nations. His eyes are as a flame of fire (ὡς φλὸξ πυρός), and He is vested with the supreme title: Βασιλεὺς βασιλέων καὶ Κύριος κυρίων (Basileus basileōn kai Kyrios kyriōn).",
    "why": "To shatter all human pride and autonomous nationalism. The Captain does not take sides in human political squabbles; He comes to take over as supreme Sovereign. Before Jericho could fall, Joshua had to surrender his command to the true King.",
    "ultimatePoint": "The Captain of the LORD's host who confronted Joshua at Jericho is none other than Jesus Christ, the uncreated Word of God and King of kings, who leads the heavenly armies to execute righteous judgment and establish His eternal reign.",
    "personalRelevance": "Why you need to know this: God does not exist to recruit Himself into your personal agenda, career plans, or partisan politics; He invites you to fall on your face and surrender to His holy lordship. What it does for you: It removes the crushing anxiety of having to fight life's spiritual battles in your own puny strength, knowing that the Commander of the armies of heaven goes before you to pull down every stronghold. Relationship with Jesus: Walking with Jesus means approaching Him not as a tame life-coach, but as the holy King of kings, joyfully taking off the shoes of self-will and following His absolute command.",
    "historicalContext": {
      "sourceAuthor": "Joshua / Canonical Scribes (c. 1400–1375 BC)",
      "sourceDate": "c. 1406 BC",
      "sourceSetting": "The fortified pagan stronghold of Jericho. Israel had just crossed the Jordan River, and Joshua was surveying the impassable walls when the divine Commander appeared.",
      "fulfillmentAuthor": "Apostle John (c. AD 95–96, Patmos)",
      "fulfillmentDate": "c. AD 95–96",
      "fulfillmentSetting": "The desolate penal colony of Patmos during Domitian's tyrannical persecution. John receives the apocalyptic unveiling of the true Emperor of the cosmos returning in glory.",
      "redemptiveBridge": "The Captain who pulled down the walls of Jericho is the identical King of kings who will topple the kingdoms of this world and inaugurate the New Jerusalem."
    }
  },
  "dan-7-13_Matt 26:64 / Rev 1:7": {
    "id": "dan-7-13_Matthew 26:64 / Revelation 1:7",
    "anchorRef": "Daniel 7:13-14",
    "targetRef": "Matthew 26:64 / Revelation 1:7",
    "who": "Authorship & Context: The Prophet Daniel received apocalyptic visions while exiled in Babylon during the reign of Belshazzar (c. 553 BC). Jesus Christ stood before the Sanhedrin and High Priest Caiaphas in Jerusalem on the night of His trial (c. AD 30), recorded by Matthew. The Apostle John beheld the glorified Son of Man on Patmos (c. AD 95). Identified Characters: The Ancient of Days (God the Father); the Son of Man (Christ); angelic thousands ministering; the beasts representing pagan world empires; Caiaphas the High Priest; the Sanhedrin; and all nations, peoples, and languages. Christological Subject & Referent: Jesus Christ, the divine Son of Man (ὁ Υἱὸς τοῦ ἀνθρώπου / כְּבַר אֱנָשׁ). He rides the clouds of heaven, receives an everlasting dominion, and will return visibly to judge the earth. Redemptive Purpose: To expose the illegitimacy of earthly human courts condemning Christ, showing that the condemned Prisoner will soon sit on the supreme throne of the cosmos as universal Judge and King.",
    "what": "The climactic messianic vision of the Son of Man in Daniel 7:13-14 (\"behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of days... And there was given him dominion, and glory, and a kingdom\") fulfilled in Jesus' solemn trial confession in Matthew 26:64 (\"Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven\") and John's apocalyptic prophecy in Revelation 1:7 (\"Behold, he cometh with clouds; and every eye shall see him\").",
    "when": "Source Horizon: Neo-Babylonian Era (c. 553 BC) in Babylon. Target Horizon: AD 30 trial in Jerusalem, and the apocalyptic Second Coming.",
    "how": "Aramaic apocalyptic exegesis and messianic self-identification. In Daniel 7:13-14, the Aramaic text records: וַאֲרוּ עִם־עֲנָנֵי שְׁמַיָּא כְּבַר אֱנָשׁ אָתֵה הֲוָה וְעַד־עַתִּיק יֽוֹמַיָּא מְטָה (vaʾaru ʿim-ʿananey shemayya kevar ʾenash ʾateh havah, veʿad-ʿAttiq yomayya metah — \"and behold, with the clouds of heaven One like a Son of Man was coming, and He reached the Ancient of Days\"). In the Old Testament, riding the clouds is the exclusive prerogative of Yahweh (Psa 104:3, Isa 19:1). Furthermore, this Son of Man receives שָׁלְטָן עָלַם (sholtan ʿalam — an everlasting dominion) and all nations serve/worship Him: יִפְלְחוּן (yiplechun, from pelach — sacrificial divine worship reserved exclusively for God). When the High Priest Caiaphas adjured Jesus by the living God to declare if He was the Christ, Jesus replied: Πλὴν λέγω ὑμῖν, ἀπ' ἄρτι ὄψεσθε τὸν Υἱὸν τοῦ ἀνθρώπου καθήμενον ἐκ δεξιῶν τῆς δυνάμεως καὶ ἐρχόμενον ἐπὶ τῶν νεφελῶν τοῦ οὐρανοῦ (Plēn legō hymin, ap' arti opsesthe ton Huion tou anthrōpou kathēmenon ek dexiōn tēs dynameōs kai erchomenon epi tōn nephelōn tou ouranou — \"Nevertheless I say to you, Hereafter you shall see the Son of Man sitting at the right hand of Power and coming on the clouds of heaven\"). The High Priest immediately tore his robes and cried \"Blasphemy!\", fully understanding that Jesus was claiming Daniel 7:13—asserting His uncreated deity and supreme cosmic judgeship. John confirms this in Revelation 1:7: Ἰδοὺ ἔρχεται μετὰ τῶν νεφελῶν, καὶ ὄψεται αὐτὸν πᾶς ὀφθαλμός (\"Behold, He is coming with the clouds, and every eye will see Him\").",
    "why": "To reveal that Jesus' favorite title for Himself—\"the Son of Man\"—was not merely a claim to human frailty, but the code-name for the divine, cloud-riding Sovereign of Daniel 7 who inherits the cosmos.",
    "ultimatePoint": "Jesus Christ is the divine Son of Man of Daniel 7, who receives an everlasting dominion from the Father and will return in glory on the clouds of heaven to judge all nations and establish His eternal kingdom.",
    "personalRelevance": "Why you need to know this: The humble Jesus who was spit upon and mocked in Jerusalem is the very King who will appear in blazing majesty on the clouds to judge history. What it does for you: It gives you fearless courage when standing before hostile worldly cultures or courts, knowing that your Lord holds supreme jurisdiction over all judges, presidents, and kings. Relationship with Jesus: Bowing before Jesus as your glorified King and living with joyful anticipation for the day He returns on the clouds.",
    "historicalContext": {
      "sourceAuthor": "Prophet Daniel (c. 605–530 BC)",
      "sourceDate": "c. 553 BC",
      "sourceSetting": "Babylon, as pagan empires (Babylon, Medo-Persia, Greece, Rome) arise as violent beasts from the stormy sea. Daniel is shown the heavenly courtroom where the Son of Man destroys the beasts.",
      "fulfillmentAuthor": "Apostle Matthew (c. AD 60–68) & Apostle John (c. AD 95)",
      "fulfillmentDate": "c. AD 30 / AD 95",
      "fulfillmentSetting": "The nocturnal trial before the Sanhedrin in Jerusalem, and John's exile on Patmos.",
      "redemptiveBridge": "Daniel's heavenly courtroom vision culminates in Jesus' confession at His trial, guaranteeing His universal return as triumphant King."
    }
  },
  "mal-4-5_Luke 1:17 / Matt 17:11-13": {
    "id": "mal-4-5_Luke 1:17 / Matthew 17:11-13",
    "anchorRef": "Malachi 4:5-6",
    "targetRef": "Luke 1:17 / Matthew 17:11-13",
    "who": "Authorship & Context: The Prophet Malachi concluded the Old Testament prophetic corpus with the promise of Elijah's return (c. 430 BC). Gabriel the Archangel announced the birth of John the Baptist to Zechariah in the Temple (c. 5 BC), recorded by Luke. Jesus Himself identified John as the promised Elijah following the Transfiguration (c. AD 30), recorded by Matthew. Identified Characters: Yahweh; the Prophet Elijah; the Prophet Malachi; the Archangel Gabriel; Zechariah the priest; John the Baptist; the disciples Peter, James, and John; and Jesus of Nazareth. Christological Subject & Referent: Jesus Christ, the coming Lord before whose face the prophetic forerunner prepares the way. Redemptive Purpose: To authenticate John the Baptist's ministry as the bridge between the Old and New Covenants, calling Israel to repentance before the King.",
    "what": "The prophetic promise of Elijah the forerunner in Malachi 4:5-6 (\"Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD: And he shall turn the heart of the fathers to the children\") fulfilled in Gabriel's annunciation in Luke 1:17 (\"And he shall go before him in the spirit and power of Elias... to make ready a people prepared for the Lord\") and Jesus' confirmation in Matthew 17:11-13 (\"Elias is come already... Then the disciples understood that he spake unto them of John the Baptist\").",
    "when": "Source Horizon: Persian Restoration (c. 430 BC). Target Horizon: The forerunner's ministry (c. 5 BC – AD 30) in Judea.",
    "how": "Typological and prophetic identification. Malachi promises: הִנֵּה אָנֹכִי שֹׁלֵחַ לָכֶם אֵת אֵלִיָּה הַנָּבִיא לִפְנֵי בּוֹא יוֹם יְהוָה הַגָּדוֹל וְהַנּוֹרָא (Hineh ʾanokhi sholeach lakhem ʾet ʾEliyah hanna-viʾ liphney boʾ yom Yahweh haggadol vehannoraʾ — \"Behold, I will send you Elijah the prophet before the coming of the great and terrible day of Yahweh\"). Gabriel clarifies that this was not the literal physical resurrection of the historical Tishbite, but a prophet coming ἐν πνεύματι καὶ δυνάμει Ἠλίου (en pneumati kai dynamei Ēliou — \"in the spirit and power of Elijah\"), carrying the identical prophetic mantle of fearless confrontation, ascetic wilderness lifestyle, and baptism of repentance. In Matthew 17:11-13, Jesus confirms: Ἠλίας ἤδη ἦλθεν (Ēlias ēdē ēlthen — \"Elijah has already come, and they knew him not, but have done unto him whatsoever they listed... Then the disciples understood that He spoke to them of John the Baptist\").",
    "why": "To demonstrate that God sent a mighty prophetic herald to prepare hearts before Christ appeared, ensuring that the covenant people had ample warning and opportunity to turn in repentance to their Messiah.",
    "ultimatePoint": "John the Baptist fulfilled the prophecy of Elijah's return, ministering in the spirit and power of Elijah to prepare the hearts of the people for the arrival of the Lord Jesus Christ.",
    "personalRelevance": "Why you need to know this: God always prepares the heart before He enters with His saving, transforming presence; true revival is always preceded by genuine repentance. What it does for you: It dismantles superficial religious complacency, calling you to honesty, humility, and wholehearted alignment with God's truth. Relationship with Jesus: Preparing room in your heart every day for King Jesus to rule and reign without rival.",
    "historicalContext": {
      "sourceAuthor": "Prophet Malachi (c. 430 BC)",
      "sourceDate": "c. 430 BC",
      "sourceSetting": "The final words of the Old Testament prophetic canon, placing a sentinel of hope on the watchtower of Israel.",
      "fulfillmentAuthor": "Luke the Evangelist & Apostle Matthew (c. AD 60–68)",
      "fulfillmentDate": "c. 5 BC / AD 30",
      "fulfillmentSetting": "The golden altar of incense in the Jerusalem Temple (Gabriel), and the slopes of Mount Hermon (Jesus).",
      "redemptiveBridge": "Elijah's mantle passes across 400 years to John the Baptist at the Jordan River, pointing directly to Jesus as the Lamb of God."
    }
  },
  "mat-1-22_Isa 7:14": {
    "id": "mat-1-22_Isaiah 7:14",
    "anchorRef": "Matthew 1:22-23",
    "targetRef": "Isaiah 7:14",
    "who": "Authorship & Context: The Apostle Matthew wrote his Gospel in Antioch/Judea (c. AD 60–68) to Jewish-Christian believers, demonstrating that Jesus is the authentic Messiah of Israel who fulfills the Old Testament Scriptures. The Prophet Isaiah delivered the virgin-birth prophecy in Jerusalem (c. 734 BC) during the Syro-Ephraimite crisis to wicked King Ahaz. Identified Characters: Yahweh the Lord; the Prophet Isaiah; wicked King Ahaz refusing to ask for a sign; the royal House of David; the virgin mother (Mary); Joseph the son of David receiving angelic counsel; and the divine child. Christological Subject & Referent: Jesus Christ, Immanuel (עִמָּנוּאֵל / Ἐμμανουήλ) — \"God with us\". He is the virgin-conceived Son who unites uncreated deity and authentic sinless humanity in one undivided Person. Redemptive Purpose: To prove that the Messiah's entrance into the human race was entirely supernatural, bypassing the corrupted federal headship of fallen Adam while taking genuine human nature to redeem humanity.",
    "what": "The apostolic retrospective and direct prophetic fulfillment connecting Matthew 1:22-23 (\"Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying, Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us\") to Isaiah 7:14: \"Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.\"",
    "when": "Source Horizon: Apostolic New Testament Era (c. AD 60–68, recording Christ's birth c. 5–4 BC). Target Horizon: Divided Monarchy / Syro-Ephraimite Crisis (c. 734 BC) in Jerusalem.",
    "how": "Apostolic sensus plenior and linguistic vindication. In Isaiah 7:14, the sign is given to the collective House of David (לָכֶם, lakhem — plural): לָכֵן יִתֵּן אֲדֹנָי הוּא לָכֶם אוֹת הִנֵּה הָעַלְמָה הָרָה וְיֹלֶדֶת בֵּן וְקָרָאת שְׁמוֹ עִמָּנוּאֵל (Lakhen yitten ʾAdonay hu lakhem ʾot: hineh ha-ʿalmah harah veyoledet ben veqarat shemo ʿImmanu ʾEl — \"Therefore the Lord Himself shall give you a sign: Behold, the maiden/virgin [עַלְמָה, ʿalmah] is with child and bearing a son, and shall call His name Immanuel\"). In the pre-Christian Jewish Septuagint translation (c. 250 BC in Alexandria), Jewish translators translated the Hebrew עַלְמָה into the explicit Greek noun ἡ παρθένος (hē parthenos — strictly and exclusively a virgin), showing ancient Jewish understanding. Matthew, writing under divine inspiration, confirms this exact reading: Ἰδοὺ ἡ παρθένος ἐν γαστρὶ ἕξει καὶ τέξεται υἱόν, καὶ καλέσουσιν τὸ ὄνομα αὐτοῦ Ἐμμανουήλ, ὅ ἐστιν μεθερμηνευόμενον Μεθ' ἡμῶν ὁ Θεός (Idou hē parthenos en gastri hexei kai texetai huion, kai kalesousin to onoma autou Emmanouēl, ho estin methermēneuomenon Meth' hēmōn ho Theos). The virgin conception was necessary because a biological child of Adam would inherit Adam's fallen nature and guilt. The Holy Spirit overshadowed Mary so that the child born was the holy Son of God, uniting true deity (אֵל, ʾEl) with human nature: \"God with us\" (עִמָּנוּ, ʿimmanu).",
    "why": "To demonstrate that the Incarnation is the miraculous pinnacle of redemptive history. God did not send an angel or a mere human prophet to save us; God Himself stepped into the human family as an infant through the womb of a virgin.",
    "ultimatePoint": "Jesus Christ fulfilled Isaiah 7:14 through His supernatural conception by the Holy Spirit in the womb of the virgin Mary, uniting eternal deity with sinless humanity as Immanuel—God with us.",
    "personalRelevance": "Why you need to know this: You are never alone, forsaken, or abandoned in this universe; through the incarnation of Jesus, God is personally, permanently, and intimately with you. What it does for you: It banishes loneliness, dread, and despair, assuring you that your Savior understands your human weaknesses, tears, and struggles from the inside. Relationship with Jesus: Abiding in Jesus as Immanuel, walking each day in the joyful awareness that God is with you in every trial and victory.",
    "historicalContext": {
      "sourceAuthor": "Apostle Matthew (c. AD 60–68, Judea/Antioch)",
      "sourceDate": "c. 5–4 BC / AD 60",
      "sourceSetting": "Antioch/Judea, demonstrating to the Jewish community that the birth of Jesus of Nazareth was the precise fulfillment of their Hebrew prophets.",
      "fulfillmentAuthor": "Prophet Isaiah (c. 740–680 BC, Jerusalem)",
      "fulfillmentDate": "c. 734 BC",
      "fulfillmentSetting": "The royal palace of Jerusalem under siege by the armies of Syria and Northern Israel. Isaiah confronted Ahaz at the conduit of the upper pool.",
      "redemptiveBridge": "Across seven centuries, Isaiah's prophecy to the trembling House of David is fulfilled when the angel announces the conception of Immanuel to Joseph, son of David."
    }
  },
  "mat-1-23_Isa 7:14": {
    "id": "mat-1-23_Isaiah 7:14",
    "anchorRef": "Matthew 1:22-23",
    "targetRef": "Isaiah 7:14",
    "who": "Authorship & Context: Matthew recording the angel's message to Joseph; Isaiah delivering God's sign. Identified Characters: God; the virgin Mary; Joseph; Isaiah; and Immanuel. Christological Subject & Referent: Jesus Christ as Immanuel, God in our nature. Redemptive Purpose: To establish the Hypostatic Union of deity and humanity.",
    "what": "The translation and theological revelation of the name Immanuel in Matthew 1:23: \"Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us\" fulfilling Isaiah 7:14.",
    "when": "Source: Apostolic Era (c. AD 60). Target: Isaiah's prophecy (c. 734 BC).",
    "how": "Theological translation and incarnation theology. Matthew translates עִמָּנוּאֵל as Μεθ' ἡμῶν ὁ Θεός (Meth' hēmōn ho Theos). The preposition μετά (with) with the genitive denotes covenant solidarity, presence, and companionship. God has not stayed distant in transcendent majesty; He has tabernacled among us.",
    "why": "To reveal that redemption required God to become man.",
    "ultimatePoint": "The name Immanuel signifies that in Jesus Christ, God has entered into perpetual covenant solidarity with humanity.",
    "personalRelevance": "Why you need to know this: God did not send a surrogate; He came Himself. What it does for you: Delivers from the feeling that God is distant or indifferent to your pain. Relationship with Jesus: Knowing Jesus as God with you in every moment of life.",
    "historicalContext": {
      "sourceAuthor": "Apostle Matthew (c. AD 60)",
      "sourceDate": "c. AD 60",
      "sourceSetting": "Joseph's dream in Nazareth.",
      "fulfillmentAuthor": "Prophet Isaiah (c. 734 BC)",
      "fulfillmentDate": "c. 734 BC",
      "fulfillmentSetting": "Jerusalem under threat.",
      "redemptiveBridge": "The prophetic name Immanuel bridges directly to the manger and the cross."
    }
  },
  "rom-5-14_1 Cor 15:22": {
    "id": "rom-5-14_1 Corinthians 15:22",
    "anchorRef": "Romans 5:14",
    "targetRef": "1 Corinthians 15:22",
    "who": "Authorship & Context: The Apostle Paul wrote Romans from Corinth (c. AD 57) to unfold the forensic and covenant architecture of the gospel. Paul wrote 1 Corinthians from Ephesus (c. AD 55) to defend the bodily resurrection of the dead against philosophical skepticism in Corinth. Identified Characters: The first Adam (the biological and federal head of fallen humanity); the Last Adam, Jesus Christ (the federal head of the redeemed new creation); and the two humanities represented by each head. Christological Subject & Referent: Jesus Christ, the Last Adam (ὁ ἔσχατος Ἀδάμ) and the second Man (ὁ δεύτερος ἄνθρωπος). Where the first Adam fell into sin and dragged the human race into condemnation and death, Christ obeyed perfectly, conquered death through His resurrection, and became a life-giving Spirit (πνεῦμα ζῳοποιοῦν). Redemptive Purpose: To unveil the biblical doctrine of federal headship: our condemnation in Adam was total and unearned by our personal acts, and therefore our justification in Christ is total, unearned, and secured through faith in His finished work.",
    "what": "The apostolic harmonization of covenant federal headship connecting Romans 5:14 (\"Nevertheless death reigned from Adam to Moses, even over them that had not sinned after the similitude of Adam's transgression, who is the figure of him that was to come\") to 1 Corinthians 15:21-22: \"For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.\"",
    "when": "Source Horizon: Mid-1st Century Apostolic Era (c. AD 57), written to Rome. Target Horizon: Mid-1st Century Apostolic Era (c. AD 55), written to Corinth.",
    "how": "Harmonious Pauline theology of the Two Adams and covenant typology. In Romans 5:14, Paul explicitly identifies the first man Adam as a prophetic type: ὅς ἐστιν τύπος τοῦ μέλλοντος (hos estin typos tou mellontos — \"who is a type / figure / representative imprint of the One who was to come\"). Adam was a type not in his moral failure, but in his federal, representative headship: what Adam did determined the destiny of all who were in him. In 1 Corinthians 15:21-22, Paul develops this identical architecture: ὥσπερ γὰρ ἐν τῷ Ἀδὰμ πάντες ἀποθνῄσκουσιν, οὕτως καὶ ἐν τῷ Χριστῷ πάντες ζωοποιηθήσονται (hōsper gar en tō Adam pantes apothnēskousin, houtōs kai en tō Christō pantes zōopoiēthēsontai — \"For just as in Adam all die, in this manner also in Christ all shall be made alive\"). In verse 45, Paul adds: Ἐγένετο ὁ πρῶτος ἄνθρωπος Ἀδὰμ εἰς ψυχὴν ζῶσαν, ὁ ἔσχατος Ἀδὰμ (eschatos Adam) εἰς πνεῦμα ζῳοποιοῦν (pneuma zōopoioun) — \"The first man Adam became a living soul; the Last Adam became a life-giving Spirit\". The first Adam brought sin, condemnation, and death (מָוֶת, mavet / θάνατος, thanatos); the Last Adam brings righteousness, justification, and indestructible resurrection life (ζωή, zōē).",
    "why": "To establish the absolute certainty of the believer's resurrection and justification. If Adam's single act of disobedience was powerful enough to condemn all united to him, how much more is Christ's perfect obedience and resurrection powerful enough to secure eternal life for all who are united to Him by faith.",
    "ultimatePoint": "Jesus Christ is the Last Adam and federal Head of the New Creation: just as all united to the first Adam inherit physical and spiritual death, so all united to Christ by faith receive eternal justification and bodily resurrection life.",
    "personalRelevance": "Why you need to know this: Your identity before God is no longer defined by the fallen, broken heritage of Adam, but by the victorious, righteous standing of Jesus Christ. What it does for you: It shatters despair over personal weakness, assuring you that you have been completely transferred out of the dominion of death and into the unshakeable kingdom of life in Christ. Relationship with Jesus: Abiding in Jesus as your new federal Head, drawing your daily life, strength, and righteousness from His indwelling Spirit.",
    "historicalContext": {
      "sourceAuthor": "Apostle Paul (c. AD 57, Corinth)",
      "sourceDate": "c. AD 57",
      "sourceSetting": "Corinth, systematically setting forth the universal scope of the gospel to the Roman church before his planned journey to Spain.",
      "fulfillmentAuthor": "Apostle Paul (c. AD 55, Ephesus)",
      "fulfillmentDate": "c. AD 55",
      "fulfillmentSetting": "Ephesus, writing to Corinth where Greek philosophical dualism led some believers to deny the physical resurrection of the dead.",
      "redemptiveBridge": "The two great federal heads of cosmic history—the first Adam in the Garden of Eden and the Last Adam in the Garden of Gethsemane and Golgotha—define the entire drama of redemption."
    }
  }
};

/**
 * Dynamic fallback generator for arbitrary connections not yet in the curated registry.
 * Employs four directional hermeneutical models:
 *  - Mode 1 (OT ➔ NT): Prophetic / Typological Fulfillment.
 *  - Mode 2 (NT ➔ OT): Apostolic Retrospective / Canonical Rooting.
 *  - Mode 3 (NT ➔ NT): Apostolic Harmony / Epistolary Synthesis.
 *  - Mode 4 (OT ➔ OT): Covenant Progression / Redemptive Accumulation.
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
  const cleanPrinciple = (principle || '').trim();

  let who = '';
  let what = '';
  let when = '';
  let how = '';
  let why = '';
  let ultimatePoint = '';
  let personalRelevance = '';

  const sourceAuthorStr = getAuthorForRef(anchorRef);
  const targetAuthorStr = getAuthorForRef(targetRef);

  if (isOtSource && isNtTarget) {
    // Mode 1: OT ➔ NT (Prophecy / Typology Fulfillment)
    who = `Authorship & Context: The Old Testament witness (${anchorRef}) was authored under divine inspiration by ${sourceAuthorStr}, proclaiming God's covenant promises to Israel. The New Testament witness (${targetRef}) was recorded by ${targetAuthorStr}, testifying to the historical realization of those promises in the apostolic era. Identified Characters: Old Testament covenant figures, prophets, priests, kings, and the congregation of Israel who received the prophetic types; fulfilled in Jesus of Nazareth, the Apostles, and the New Covenant church. Singular or Many: Many. The historic covenant community is many; Jesus Christ remains the singular Christological subject. Christological Subject & Referent: Jesus Christ Himself is the true Subject and Referent of the passage. He is the promised Messiah, the incarnate Son, and the ultimate Substance foreshadowed by the ancient shadows. Redemptive Purpose: God orchestrated these historical persons and prophetic voices across centuries to establish that Jesus is the preordained Redeemer of the world.`;
    what = `Theological and prophetic fulfillment bridging the Old Testament foundation in ${anchorRef} ("${cleanAnchor.slice(0, 85)}...") to its ultimate New Testament culmination in ${targetRef} ("${cleanTarget.slice(0, 85)}...").`;
    when = `Redemptive Progression: Originating in the Old Testament era (${anchorRef}) and culminating in the apostolic New Testament era (${targetRef}), bridging centuries of progressive revelation.`;
    how = `Typological and Christological fulfillment. The Hebrew Scriptures establish the prophetic pattern, sacrificial shadow, and covenantal promise (e.g. בְּרִית, berit — divine covenant; חֶסֶד, chesed — steadfast covenant love; צְדָקָה, tsedaqah — righteous faithfulness; גֹּאֵל, go'el — kinsman-redeemer), which the New Testament realizes in the person and work of Jesus Christ (e.g. διαθήκη, diathēkē — sovereign covenant; χάρις, charis — unmerited redeeming grace; δικαιοσύνη, dikaiosynē — justifying righteousness; ἀπολύτρωσις, apolytrosis — costly ransom-redemption).`;
    why = `To demonstrate that Jesus of Nazareth is the singular, promised Messiah of Israel and Lord of the nations, in whom every divine promise finds its definitive fulfillment.`;
    ultimatePoint = `Jesus Christ is the ultimate fulfillment of the promise given in ${anchorRef}, bringing to historical and theological climax the redemptive purposes of God.`;
    personalRelevance = `Why you need to know this: You need to know that God's redemptive promises across thousands of years never fail, proving that His personal promises to you in Christ are completely trustworthy. What it does for you: It anchors your daily faith in the unshakeable bedrock of biblical prophecy fulfilled, delivering your soul from doubt, cynicism, and anxiety. Relationship with Jesus: Walking with Jesus means trusting Him as your faithful Redeemer who sovereignly directs history and leads your personal life with unwavering love.`;
  } else if (isNtSource && isOtTarget) {
    // Mode 2: NT ➔ OT (Apostolic Retrospective)
    who = `Authorship & Context: The New Testament author, ${sourceAuthorStr}, writes under apostolic inspiration looking back upon the Hebrew Scriptures penned by ${targetAuthorStr}. Identified Characters: The historical Jesus, the Apostles, and the early Christian community engaging with ancient Israel's patriarchs, prophets, and scribes. Singular or Many: Many. Apostles and Israel's witnesses are many; Jesus Christ remains the singular interpretive key. Christological Subject & Referent: Jesus Christ as the true referent and interpretive key to the entire Old Testament canon (Luke 24:27,44). Redemptive Purpose: To prove to both Jews and Gentiles that the apostolic gospel is the legitimate, organic culmination of God's historic dealings with Israel.`;
    what = `Apostolic retrospective and canonical grounding, where ${anchorRef} ("${cleanAnchor.slice(0, 85)}...") directly grounds its theological authority in the prophetic bedrock of ${targetRef} ("${cleanTarget.slice(0, 85)}...").`;
    when = `Apostolic Retrospective: The 1st-century apostolic church (${anchorRef}) looking back across redemptive history to the Hebrew Scriptures (${targetRef}) to authenticate the messianic identity, sacrifice, and victory of Jesus Christ.`;
    how = `Sensus plenior and apostolic hermeneutics. The New Testament writers demonstrate that the gospel is not an abrupt novel sect, but the organic, sovereign culmination of everything written in the Law of Moses, the Prophets, and the Psalms (Luke 24:44). Greek apostolic terms (e.g. πληρόω, plēroō — to fill to the brim; διαθήκη, diathēkē — divine covenant) directly interpret the underlying Hebrew concepts (e.g. בְּרִית, berit; תּוֹרָה, Torah; נְבוּאָה, nevu'ah).`;
    why = `To establish the scriptural authority and theological necessity of Christ's person and work, proving to Jews and Gentiles alike that the events of the gospel transpired in exact accordance with the divine promises spoken of old by the holy prophets.`;
    ultimatePoint = `The gospel of Jesus Christ is firmly anchored in the historic bedrock of Old Testament revelation, demonstrating that God's single eternal plan of redemption has unfolded without interruption.`;
    personalRelevance = `Why you need to know this: You need to know that apostolic Christianity is not a novel human religion, but the divine climax of God's historic revelation across centuries. What it does for you: It strengthens your spiritual root system against skepticism and secular culture, anchoring your faith in the unified witness of Scripture. Relationship with Jesus: Jesus is the eternal Lord revealed in the Law and the Prophets; walking with Him means abiding in the timeless truth that has sustained believers across all ages.`;
  } else if (isNtSource && isNtTarget) {
    // Mode 3: NT ➔ NT (Apostolic Harmony)
    who = `Authorship & Context: The apostolic witnesses—${sourceAuthorStr} and ${targetAuthorStr}—ministering to the early church during the 1st century AD under the guidance of the Holy Spirit. Identified Characters: The ascended Christ as Head of the church; the Apostles as faithful stewards of the mysteries of God; and the local assemblies of believers scattered across the Greco-Roman world. Singular or Many: Many. The assemblies are many; Christ remains the singular Head. Christological Subject & Referent: Jesus Christ, the exalted Lord, living High Priest, and coming Bridegroom of the church. Redemptive Purpose: To build up the body of Christ in doctrinal unity, pastoral steadfastness, and mutual edification across diverse cultural contexts.`;
    what = `Apostolic doctrinal consistency and cross-epistle harmony between ${anchorRef} and ${targetRef}, establishing the unity of apostolic teaching regarding the gospel and the Christian life.`;
    when = `Apostolic Era (1st Century AD): Unfolding within the early church as the Apostles established doctrine and pastoral guidance across the Greco-Roman world.`;
    how = `Harmonious apostolic witness comparing scripture with scripture under the guidance of the Holy Spirit. Apostolic Greek terminology (e.g. χάρις, charis — transforming grace; πίστις, pistis — persevering faith; κοινωνία, koinōnia — deep covenant fellowship; οἰκοδομή, oikodomē — spiritual upbuilding) articulates the consistent mind of Christ across multiple epistles.`;
    why = `To build up the body of Christ on the foundational doctrine of the apostles and prophets, Jesus Christ Himself being the chief cornerstone.`;
    ultimatePoint = `The gospel revealed in Christ forms an unshakeable, unified body of truth that equips believers to stand firm in faith and obedience.`;
    personalRelevance = `Why you need to know this: You need to know that God's apostolic guidance for your daily life is completely harmonious, reliable, and sufficient. What it does for you: It gives you clear moral and spiritual direction, guarding your heart from confusion and equipping you to stand firm in faith. Relationship with Jesus: Jesus speaks to you through the unified witness of His apostles; abiding in His Word deepens your personal fellowship with Him and transforms your character.`;
  } else {
    // Mode 4: OT ➔ OT (Covenant Progression)
    who = `Authorship & Context: The Old Testament authors—${sourceAuthorStr} and ${targetAuthorStr}—recording God's theocratic dealings with Israel across successive historical dispensations. Identified Characters: Covenant mediators (patriarchs, judges, kings, prophets), the nation of Israel, surrounding pagan empires, and the faithful remnant. Singular or Many: Many. Israel and the remnant are many; the promised Redeemer remains the singular subject toward whom the covenants move. Christological Subject & Referent: The pre-incarnate Angel of Yahweh (מַלְאַךְ יְהוָה) and the promised Branch of David (צֶמַח דָּוִד) whose coming kingdom is progressively disclosed. Redemptive Purpose: To educate Israel in the holiness, justice, and mercy of Yahweh, preparing the covenant people for the coming Redeemer.`;
    what = `Canonical progression within the Hebrew Scriptures, connecting the revelation in ${anchorRef} to the subsequent development in ${targetRef}.`;
    when = `Old Testament Theocratic Era: Tracing God's progressive self-revelation across the history of Israel from patriarchal origins through the monarchy, exile, and restoration.`;
    how = `Covenantal continuity and progressive revelation within the Old Testament canon. Theological progression unfolds through rich Hebrew covenant terminology (e.g. בְּרִית, berit — binding covenant; חֶסֶד, chesed — unfailing covenant love; מָשִׁיחַ, Mashiach — the Anointed King; קָדוֹשׁ, qadosh — divine holiness), where each generation's revelation builds upon the preceding foundational covenants.`;
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
    who,
    what,
    when,
    how,
    why,
    ultimatePoint,
    personalRelevance,
    historicalContext: {
      sourceAuthor: sourceAuthorStr,
      sourceDate: isOtSource ? 'Covenant Antiquity' : 'Apostolic Era (1st Century AD)',
      sourceSetting: `The historical and cultural world of ${extractCanonicalBook(anchorRef) || anchorRef}.`,
      fulfillmentAuthor: targetAuthorStr,
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
 * Retrieve the full 7-part interrogation for a connection, checking curated entries
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
