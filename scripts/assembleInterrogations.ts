import fs from 'node:fs';
import path from 'node:path';
import { PART_1 } from './interrogationsPart1';
import { PART_2 } from './interrogationsPart2';
import { PART_3 } from './interrogationsPart3';

const targetFile = path.resolve('src/data/connectionInterrogation.ts');

const allCurated: Record<string, any> = {
  ...PART_1,
  ...PART_2,
  ...PART_3,
};

// Aliases
allCurated['gen-12-3_Gal 3:8,16'] = allCurated['gen-12-3_Galatians 3:8,16'];
allCurated['jos-5-14_Rev 19:11-16'] = allCurated['jos-5-14_Revelation 19:11-16'];
allCurated['dan-7-13_Matt 26:64 / Rev 1:7'] = allCurated['dan-7-13_Matthew 26:64 / Revelation 1:7'];
allCurated['mal-4-5_Luke 1:17 / Matt 17:11-13'] = allCurated['mal-4-5_Luke 1:17 / Matthew 17:11-13'];
allCurated['mat-1-22_Isa 7:14'] = allCurated['mat-1-22_Isaiah 7:14'];
allCurated['mat-1-23_Isa 7:14'] = allCurated['mat-1-23_Isaiah 7:14'];
allCurated['rom-5-14_1 Cor 15:22'] = allCurated['rom-5-14_1 Corinthians 15:22'];

const totalKeys = Object.keys(allCurated).length;
const uniqueIds = new Set(Object.values(allCurated).map(x => x.id)).size;
console.log(`Assembling interrogations: ${totalKeys} keys, ${uniqueIds} unique IDs`);

const header = `/**
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
  const withoutDigits = firstSegment.replace(/\\s*\\d+.*$/, '').trim();
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
  return !!ref.match(/^(?:(?:1|2|3|I|II|III)\\s+)?(?:Mat|Mar|Luk|Joh|Act|Rom|Cor|Gal|Eph|Phi|Col|The|Tim|Tit|Phm|Heb|Jam|Pet|Jn|Jud|Rev)/i);
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
  if (book) return \`Author of \${book}\`;
  return 'Biblical Author';
}

/**
 * Curated registry of scholarly biblical interrogations for foundational connections across all biblical eras.
 * Keys are normalized as \`\${anchorId}_\${normalizedTargetRef}\` or \`\${anchorId}\`.
 */
export const CURATED_INTERROGATIONS: Record<string, ConnectionInterrogation> = `;

const entriesFormatted = JSON.stringify(allCurated, null, 2);

const footer = `;

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
  const key = \`\${anchorId}_\${targetRef}\`;

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

  const cleanAnchor = anchorVerseText.replace(/\\[[^\\]]*\\]/g, '').replace(/\\s+/g, ' ').trim();
  const cleanTarget = targetVerseText.replace(/\\[[^\\]]*\\]/g, '').replace(/\\s+/g, ' ').trim();
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
    who = \`Authorship & Context: The Old Testament witness (\${anchorRef}) was authored under divine inspiration by \${sourceAuthorStr}, proclaiming God's covenant promises to Israel. The New Testament witness (\${targetRef}) was recorded by \${targetAuthorStr}, testifying to the historical realization of those promises in the apostolic era. Identified Characters: Old Testament covenant figures, prophets, priests, kings, and the congregation of Israel who received the prophetic types; fulfilled in Jesus of Nazareth, the Apostles, and the New Covenant church. Christological Subject & Referent: Jesus Christ Himself is the true Subject and Referent of the passage. He is the promised Messiah, the incarnate Son, and the ultimate Substance foreshadowed by the ancient shadows. Redemptive Purpose: God orchestrated these historical persons and prophetic voices across centuries to establish that Jesus is the preordained Redeemer of the world.\`;
    what = \`Theological and prophetic fulfillment bridging the Old Testament foundation in \${anchorRef} ("\${cleanAnchor.slice(0, 85)}...") to its ultimate New Testament culmination in \${targetRef} ("\${cleanTarget.slice(0, 85)}...").\`;
    when = \`Redemptive Progression: Originating in the Old Testament era (\${anchorRef}) and culminating in the apostolic New Testament era (\${targetRef}), bridging centuries of progressive revelation.\`;
    how = \`Typological and Christological fulfillment. The Hebrew Scriptures establish the prophetic pattern, sacrificial shadow, and covenantal promise (e.g. בְּרִית, berit — divine covenant; חֶסֶד, chesed — steadfast covenant love; צְדָקָה, tsedaqah — righteous faithfulness; גֹּאֵל, go'el — kinsman-redeemer), which the New Testament realizes in the person and work of Jesus Christ (e.g. διαθήκη, diathēkē — sovereign covenant; χάρις, charis — unmerited redeeming grace; δικαιοσύνη, dikaiosynē — justifying righteousness; ἀπολύτρωσις, apolytrosis — costly ransom-redemption).\`;
    why = \`To demonstrate that Jesus of Nazareth is the singular, promised Messiah of Israel and Lord of the nations, in whom every divine promise finds its definitive fulfillment.\`;
    ultimatePoint = \`Jesus Christ is the ultimate fulfillment of the promise given in \${anchorRef}, bringing to historical and theological climax the redemptive purposes of God.\`;
    personalRelevance = \`Why you need to know this: You need to know that God's redemptive promises across thousands of years never fail, proving that His personal promises to you in Christ are completely trustworthy. What it does for you: It anchors your daily faith in the unshakeable bedrock of biblical prophecy fulfilled, delivering your soul from doubt, cynicism, and anxiety. Relationship with Jesus: Walking with Jesus means trusting Him as your faithful Redeemer who sovereignly directs history and leads your personal life with unwavering love.\`;
  } else if (isNtSource && isOtTarget) {
    // Mode 2: NT ➔ OT (Apostolic Retrospective)
    who = \`Authorship & Context: The New Testament author, \${sourceAuthorStr}, writes under apostolic inspiration looking back upon the Hebrew Scriptures penned by \${targetAuthorStr}. Identified Characters: The historical Jesus, the Apostles, and the early Christian community engaging with ancient Israel's patriarchs, prophets, and scribes. Christological Subject & Referent: Jesus Christ as the true referent and interpretive key to the entire Old Testament canon (Luke 24:27,44). Redemptive Purpose: To prove to both Jews and Gentiles that the apostolic gospel is the legitimate, organic culmination of God's historic dealings with Israel.\`;
    what = \`Apostolic retrospective and canonical grounding, where \${anchorRef} ("\${cleanAnchor.slice(0, 85)}...") directly grounds its theological authority in the prophetic bedrock of \${targetRef} ("\${cleanTarget.slice(0, 85)}...").\`;
    when = \`Apostolic Retrospective: The 1st-century apostolic church (\${anchorRef}) looking back across redemptive history to the Hebrew Scriptures (\${targetRef}) to authenticate the messianic identity, sacrifice, and victory of Jesus Christ.\`;
    how = \`Sensus plenior and apostolic hermeneutics. The New Testament writers demonstrate that the gospel is not an abrupt novel sect, but the organic, sovereign culmination of everything written in the Law of Moses, the Prophets, and the Psalms (Luke 24:44). Greek apostolic terms (e.g. πληρόω, plēroō — to fill to the brim; διαθήκη, diathēkē — divine covenant) directly interpret the underlying Hebrew concepts (e.g. בְּרִית, berit; תּוֹרָה, Torah; נְבוּאָה, nevu'ah).\`;
    why = \`To establish the scriptural authority and theological necessity of Christ's person and work, proving to Jews and Gentiles alike that the events of the gospel transpired in exact accordance with the divine promises spoken of old by the holy prophets.\`;
    ultimatePoint = \`The gospel of Jesus Christ is firmly anchored in the historic bedrock of Old Testament revelation, demonstrating that God's single eternal plan of redemption has unfolded without interruption.\`;
    personalRelevance = \`Why you need to know this: You need to know that apostolic Christianity is not a novel human religion, but the divine climax of God's historic revelation across centuries. What it does for you: It strengthens your spiritual root system against skepticism and secular culture, anchoring your faith in the unified witness of Scripture. Relationship with Jesus: Jesus is the eternal Lord revealed in the Law and the Prophets; walking with Him means abiding in the timeless truth that has sustained believers across all ages.\`;
  } else if (isNtSource && isNtTarget) {
    // Mode 3: NT ➔ NT (Apostolic Harmony)
    who = \`Authorship & Context: The apostolic witnesses—\${sourceAuthorStr} and \${targetAuthorStr}—ministering to the early church during the 1st century AD under the guidance of the Holy Spirit. Identified Characters: The ascended Christ as Head of the church; the Apostles as faithful stewards of the mysteries of God; and the local assemblies of believers scattered across the Greco-Roman world. Christological Subject & Referent: Jesus Christ, the exalted Lord, living High Priest, and coming Bridegroom of the church. Redemptive Purpose: To build up the body of Christ in doctrinal unity, pastoral steadfastness, and mutual edification across diverse cultural contexts.\`;
    what = \`Apostolic doctrinal consistency and cross-epistle harmony between \${anchorRef} and \${targetRef}, establishing the unity of apostolic teaching regarding the gospel and the Christian life.\`;
    when = \`Apostolic Era (1st Century AD): Unfolding within the early church as the Apostles established doctrine and pastoral guidance across the Greco-Roman world.\`;
    how = \`Harmonious apostolic witness comparing scripture with scripture under the guidance of the Holy Spirit. Apostolic Greek terminology (e.g. χάρις, charis — transforming grace; πίστις, pistis — persevering faith; κοινωνία, koinōnia — deep covenant fellowship; οἰκοδομή, oikodomē — spiritual upbuilding) articulates the consistent mind of Christ across multiple epistles.\`;
    why = \`To build up the body of Christ on the foundational doctrine of the apostles and prophets, Jesus Christ Himself being the chief cornerstone.\`;
    ultimatePoint = \`The gospel revealed in Christ forms an unshakeable, unified body of truth that equips believers to stand firm in faith and obedience.\`;
    personalRelevance = \`Why you need to know this: You need to know that God's apostolic guidance for your daily life is completely harmonious, reliable, and sufficient. What it does for you: It gives you clear moral and spiritual direction, guarding your heart from confusion and equipping you to stand firm in faith. Relationship with Jesus: Jesus speaks to you through the unified witness of His apostles; abiding in His Word deepens your personal fellowship with Him and transforms your character.\`;
  } else {
    // Mode 4: OT ➔ OT (Covenant Progression)
    who = \`Authorship & Context: The Old Testament authors—\${sourceAuthorStr} and \${targetAuthorStr}—recording God's theocratic dealings with Israel across successive historical dispensations. Identified Characters: Covenant mediators (patriarchs, judges, kings, prophets), the nation of Israel, surrounding pagan empires, and the faithful remnant. Christological Subject & Referent: The pre-incarnate Angel of Yahweh (מַלְאַךְ יְהוָה) and the promised Branch of David (צֶמַח דָּוִד) whose coming kingdom is progressively disclosed. Redemptive Purpose: To educate Israel in the holiness, justice, and mercy of Yahweh, preparing the covenant people for the coming Redeemer.\`;
    what = \`Canonical progression within the Hebrew Scriptures, connecting the revelation in \${anchorRef} to the subsequent development in \${targetRef}.\`;
    when = \`Old Testament Theocratic Era: Tracing God's progressive self-revelation across the history of Israel from patriarchal origins through the monarchy, exile, and restoration.\`;
    how = \`Covenantal continuity and progressive revelation within the Old Testament canon. Theological progression unfolds through rich Hebrew covenant terminology (e.g. בְּרִית, berit — binding covenant; חֶסֶד, chesed — unfailing covenant love; מָשִׁיחַ, Mashiach — the Anointed King; קָדוֹשׁ, qadosh — divine holiness), where each generation's revelation builds upon the preceding foundational covenants.\`;
    why = \`To preserve the covenant promises and educate Israel in the holiness, justice, and mercy of God.\`;
    ultimatePoint = \`God's covenant faithfulness remains unbroken through every generation, pointing forward to the coming Redeemer.\`;
    personalRelevance = \`Why you need to know this: You need to know that God works patiently across generations, using ordinary people and through seasons of waiting to advance His redemptive plan. What it does for you: It builds endurance and hope during your personal trials, reminding you that God's delays are never denials of His promises. Relationship with Jesus: Every covenant development in Scripture points toward Jesus as its crown; trusting Him means knowing that He will faithfully complete the good work He began in you.\`;
  }

  if (cleanPrinciple.length > 20) {
    why = \`\${cleanPrinciple} \${why}\`;
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
      sourceSetting: \`The historical and cultural world of \${extractCanonicalBook(anchorRef) || anchorRef}.\`,
      fulfillmentAuthor: targetAuthorStr,
      fulfillmentDate: isNtTarget ? 'Apostolic Era (c. AD 30–95)' : 'Covenant Antiquity / Prophetic Era',
      fulfillmentSetting: \`The historical and canonical context of \${extractCanonicalBook(targetRef) || targetRef}.\`,
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
`;

const finalFileContent = header + entriesFormatted + footer;
fs.writeFileSync(targetFile, finalFileContent, 'utf8');
console.log(`Successfully wrote ${finalFileContent.length} bytes to ${targetFile}`);
