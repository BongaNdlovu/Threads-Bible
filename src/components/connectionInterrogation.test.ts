import { describe, expect, it } from 'vitest';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  getConnectionInterrogation,
  generateConnectionInterrogation,
  extractCanonicalBook,
  getAuthorForRef,
  isNewTestament,
  isOldTestament,
  CURATED_INTERROGATIONS,
} from '../data/connectionInterrogation';
import {
  BIBLICAL_ERAS,
  findEraForBook,
  getAllHistoricalConnections,
} from '../data/historicalContextData';
import { getThreadDetail } from '../data/threadDetails';
import { buildThreadGraph } from './threadMapModel';
import { parsePersonalRelevance, parseWho } from './HistoricalContextPage';
import { ThreadExplanation } from './ThreadExplanation';

describe('Connection Interrogation Architecture', () => {
  it('correctly retrieves curated interrogation for Genesis 1:1 -> John 1:1-3 with Christ as Creative Agent', () => {
    const inter = getConnectionInterrogation(
      'gen-1-1',
      'John 1:1-3',
      'Genesis 1:1',
      'In the beginning God created the heaven and the earth.',
      'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made.'
    );

    expect(inter).toBeDefined();
    // Verify all 6 interrogation pillars are non-empty
    expect(inter.what).toBeTruthy();
    expect(inter.when).toBeTruthy();
    expect(inter.how).toBeTruthy();
    expect(inter.why).toBeTruthy();
    expect(inter.ultimatePoint).toBeTruthy();
    expect(inter.personalRelevance).toBeTruthy();

    // Verify personal relevance answers the 3 core questions
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');

    // Verify biblical interrogation content on creative agency
    expect(inter.ultimatePoint).toContain('Creative Agent');
    expect(inter.ultimatePoint).toContain('all things were made through Him');

    // Verify Greek and Hebrew exegetical scholarship
    expect(inter.what).toContain('Bereshit');
    expect(inter.what).toContain('En archē');
    expect(inter.what).toContain('Logos');
    expect(inter.how).toContain("di' autou");
    expect(inter.how).toContain('creatio ex nihilo');

    // Verify historical context fields
    expect(inter.historicalContext).toBeDefined();
    expect(inter.historicalContext?.sourceAuthor).toContain('Moses');
    expect(inter.historicalContext?.fulfillmentAuthor).toContain('John');
    expect(inter.historicalContext?.sourceSetting).toContain('Egyptian');
    expect(inter.historicalContext?.fulfillmentSetting).toContain('Ephesus');
    expect(inter.historicalContext?.redemptiveBridge).toBeTruthy();
  });

  it('correctly retrieves curated interrogation for Genesis 1:1 -> Hebrews 11:3', () => {
    const inter = getConnectionInterrogation(
      'gen-1-1',
      'Hebrews 11:3',
      'Genesis 1:1',
      'In the beginning God created the heaven and the earth.',
      'Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear.'
    );

    expect(inter.ultimatePoint).toContain('Word of God');
    expect(inter.how).toContain('baraʾ');
    expect(inter.what).toContain('creatio ex nihilo');
    expect(inter.personalRelevance).toBeTruthy();
    expect(inter.personalRelevance).toContain('creatio ex nihilo');
  });

  it('generates a robust 6-part interrogation for any arbitrary connection via fallback', () => {
    const inter = generateConnectionInterrogation({
      anchorId: 'psa-22-1',
      anchorRef: 'Psalm 22:1',
      targetRef: 'Matthew 27:46',
      anchorVerseText: 'My God, my God, why hast thou forsaken me?',
      targetVerseText: 'My God, my God, why hast thou forsaken me?',
      principle: 'The righteous sufferer cry is fulfilled on Calvary.',
    });

    expect(inter.what).toContain('Psalm 22:1');
    expect(inter.what).toContain('Matthew 27:46');
    expect(inter.when).toContain('Old Testament');
    expect(inter.how).toContain('Christological');
    expect(inter.why).toContain('The righteous sufferer cry is fulfilled on Calvary.');
    expect(inter.ultimatePoint).toContain('Jesus Christ is the ultimate fulfillment');
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');
  });

  it('correctly classifies numbered books (1 Corinthians, 1 John, 1 Peter) as NT', () => {
    expect(isNewTestament('1 Corinthians 15:3')).toBe(true);
    expect(isOldTestament('1 Corinthians 15:3')).toBe(false);
    expect(isNewTestament('1 Peter 2:24')).toBe(true);
    expect(isOldTestament('1 Peter 2:24')).toBe(false);
    expect(isNewTestament('1 John 3:8')).toBe(true);
    expect(isOldTestament('1 John 3:8')).toBe(false);

    // Verify fallback generation recognizes OT -> NT when target is a numbered book
    const inter = generateConnectionInterrogation({
      anchorId: 'gen-3-15',
      anchorRef: 'Genesis 3:15',
      targetRef: '1 John 3:8',
      anchorVerseText: 'And I will put enmity between thee and the woman...',
      targetVerseText: 'For this purpose the Son of God was manifested, that he might destroy the works of the devil.',
    });

    // Should be Mode 1 (OT -> NT), not Mode 4 (OT -> OT)
    expect(inter.what).toContain('Old Testament foundation');
    expect(inter.what).toContain('New Testament culmination');
    expect(inter.when).toContain('apostolic New Testament era');
    expect(inter.historicalContext?.fulfillmentAuthor).toContain('Apostle John');
  });

  it('resolves canonical authors for numbered books without producing "Author of 1"', () => {
    expect(getAuthorForRef('1 Samuel 7:12')).not.toContain('Author of 1');
    expect(getAuthorForRef('1 Samuel 7:12')).toContain('Samuel');

    expect(getAuthorForRef('2 Samuel 7:12')).not.toContain('Author of 2');
    expect(getAuthorForRef('2 Samuel 7:12')).toContain('Nathan');

    expect(getAuthorForRef('1 Peter 2:24')).not.toContain('Author of 1');
    expect(getAuthorForRef('1 Peter 2:24')).toContain('Apostle Peter');

    expect(getAuthorForRef('Song of Solomon 2:1')).not.toContain('Author of Song');
    expect(getAuthorForRef('Song of Solomon 2:1')).toContain('Solomon');

    // In generated interrogation
    const inter = generateConnectionInterrogation({
      anchorId: '1sa-15-22',
      anchorRef: '1 Samuel 15:22',
      targetRef: '1 Peter 1:14',
      anchorVerseText: 'To obey is better than sacrifice.',
      targetVerseText: 'As obedient children, not fashioning yourselves according to the former lusts.',
    });
    expect(inter.historicalContext?.sourceAuthor).not.toContain('Author of 1');
    expect(inter.historicalContext?.fulfillmentAuthor).not.toContain('Author of 1');
  });

  it('supports NT ➔ OT directional generation for apostolic retrospectives', () => {
    const inter = generateConnectionInterrogation({
      anchorId: 'act-2-16',
      anchorRef: 'Acts 2:16',
      targetRef: 'Joel 2:28',
      anchorVerseText: 'But this is that which was spoken by the prophet Joel...',
      targetVerseText: 'And it shall come to pass afterward, that I will pour out my spirit upon all flesh...',
    });

    expect(inter.what).toContain('Apostolic retrospective');
    expect(inter.what).toContain('Acts 2:16');
    expect(inter.what).toContain('Joel 2:28');
    expect(inter.when).toContain('Apostolic Retrospective');
    expect(inter.how).toContain('apostolic hermeneutics');
    expect(inter.ultimatePoint).toContain('anchored in the historic bedrock of Old Testament revelation');
    expect(inter.historicalContext?.redemptiveBridge).toContain('Reconnecting the apostolic proclamation');
  });
});

describe('Historical Context Dataset', () => {
  it('defines 9 chronological biblical eras spanning the canon', () => {
    expect(BIBLICAL_ERAS).toHaveLength(9);
    const eraIds = BIBLICAL_ERAS.map(e => e.id);
    expect(eraIds).toEqual([
      'creation',
      'patriarchal',
      'exodus',
      'conquest',
      'monarchy',
      'exile',
      'second_temple',
      'incarnation',
      'apostolic',
    ]);
  });

  it('compiles historical connection dossiers for all curated connections', () => {
    const connections = getAllHistoricalConnections();
    expect(connections.length).toBeGreaterThan(0);

    const gen1John1 = connections.find(c => c.anchorRef === 'Genesis 1:1' && c.targetRef === 'John 1:1-3');
    expect(gen1John1).toBeDefined();
    expect(gen1John1?.sourceEra.id).toBe('creation');
    expect(gen1John1?.fulfillmentEra.id).toBe('incarnation');
    expect(gen1John1?.ultimatePoint).toContain('Creative Agent');
    expect(gen1John1?.anchorVerseText).toContain('In the beginning God created');
  });

  it('ensures all 9 biblical eras have historical connections', () => {
    const connections = getAllHistoricalConnections();
    const coveredEras = new Set<string>();

    for (const c of connections) {
      coveredEras.add(c.sourceEra.id);
      coveredEras.add(c.fulfillmentEra.id);
    }

    for (const era of BIBLICAL_ERAS) {
      expect(
        coveredEras.has(era.id),
        `Expected era "${era.id}" (${era.name}) to have at least one connection`
      ).toBe(true);
    }
  });

  it('maps 1 & 2 Chronicles and Song of Solomon to monarchy era and Malachi 4 to second temple', () => {
    expect(findEraForBook('1 Chronicles 17:11').id).toBe('monarchy');
    expect(findEraForBook('2 Chronicles 7:14').id).toBe('monarchy');
    expect(findEraForBook('Song of Solomon 2:1').id).toBe('monarchy');
    expect(findEraForBook('Malachi 4:5-6').id).toBe('second_temple');
    expect(findEraForBook('Malachi 3:1').id).toBe('exile');
  });

  it('correctly maps bare books and chapters to their canonical eras', () => {
    expect(findEraForBook('Genesis').id).toBe('creation');
    expect(findEraForBook('Genesis 1:1').id).toBe('creation');
    expect(findEraForBook('Genesis 11:9').id).toBe('creation');
    expect(findEraForBook('Genesis 12:1').id).toBe('patriarchal');
    expect(findEraForBook('John 1:1-3').id).toBe('incarnation');
    expect(findEraForBook('John 19:36').id).toBe('incarnation');
    expect(findEraForBook('1 John 3:8').id).toBe('apostolic');
  });

  it('verifies anchorVerseText across all curated connections contains authentic scripture', () => {
    const connections = getAllHistoricalConnections();
    for (const conn of connections) {
      expect(conn.anchorVerseText).toBeTruthy();
      // Must NOT be the explanatory prose from what/how/why
      expect(conn.anchorVerseText).not.toBe(conn.what);
      expect(conn.anchorVerseText).not.toContain('The deliberate verbal, syntactic');
    }
  });

  it('supports all 4 canonical directional modes in generateConnectionInterrogation', () => {
    // Mode 1: OT ➔ NT (Prophetic & Typological Culmination)
    const otToNt = generateConnectionInterrogation({
      anchorId: 'gen-3-15',
      anchorRef: 'Genesis 3:15',
      targetRef: '1 John 3:8',
      anchorVerseText: 'And I will put enmity...',
      targetVerseText: 'For this purpose the Son of God was manifested...',
    });
    expect(otToNt.what).toContain('Old Testament foundation');
    expect(otToNt.when).toContain('apostolic New Testament era');
    expect(otToNt.personalRelevance).toContain('Why you need to know this');
    expect(otToNt.personalRelevance).toContain('What it does for you');
    expect(otToNt.personalRelevance).toContain('Relationship with Jesus');

    // Mode 2: NT ➔ OT (Apostolic Retrospective)
    const ntToOt = generateConnectionInterrogation({
      anchorId: 'act-2-16',
      anchorRef: 'Acts 2:16',
      targetRef: 'Joel 2:28',
      anchorVerseText: 'This is that which was spoken...',
      targetVerseText: 'I will pour out my spirit...',
    });
    expect(ntToOt.what).toContain('Apostolic retrospective');
    expect(ntToOt.when).toContain('Apostolic Retrospective');
    expect(ntToOt.personalRelevance).toContain('Why you need to know this');
    expect(ntToOt.personalRelevance).toContain('What it does for you');
    expect(ntToOt.personalRelevance).toContain('Relationship with Jesus');

    // Mode 3: NT ➔ NT (Apostolic Harmony)
    const ntToNt = generateConnectionInterrogation({
      anchorId: 'eph-2-8',
      anchorRef: 'Ephesians 2:8',
      targetRef: 'Romans 3:24',
      anchorVerseText: 'For by grace are ye saved through faith...',
      targetVerseText: 'Being justified freely by his grace...',
    });
    expect(ntToNt.what).toContain('Apostolic doctrinal consistency');
    expect(ntToNt.when).toContain('Apostolic Era (1st Century AD)');
    expect(ntToNt.personalRelevance).toContain('Why you need to know this');
    expect(ntToNt.personalRelevance).toContain('What it does for you');
    expect(ntToNt.personalRelevance).toContain('Relationship with Jesus');

    // Mode 4: OT ➔ OT (Covenant Progression)
    const otToOt = generateConnectionInterrogation({
      anchorId: 'gen-15-6',
      anchorRef: 'Genesis 15:6',
      targetRef: 'Habakkuk 2:4',
      anchorVerseText: 'And he believed in the LORD...',
      targetVerseText: 'The just shall live by his faith.',
    });
    expect(otToOt.what).toContain('Canonical progression within the Hebrew Scriptures');
    expect(otToOt.when).toContain('Old Testament Theocratic Era');
    expect(otToOt.personalRelevance).toContain('Why you need to know this');
    expect(otToOt.personalRelevance).toContain('What it does for you');
    expect(otToOt.personalRelevance).toContain('Relationship with Jesus');
  });

  it('ensures all historical connections have personalRelevance answering all 3 questions', () => {
    const connections = getAllHistoricalConnections();
    expect(connections.length).toBeGreaterThan(0);
    for (const conn of connections) {
      expect(conn.personalRelevance, `Expected connection ${conn.id} to have personalRelevance`).toBeTruthy();
      expect(conn.personalRelevance).toContain('Why you need to know this');
      expect(conn.personalRelevance).toContain('What it does for you');
      expect(conn.personalRelevance).toContain('Relationship with Jesus');
    }
  });

  it('includes newly added major typological anchors in historical connections', () => {
    const connections = getAllHistoricalConnections();
    const anchorRefs = new Set(connections.map(c => c.anchorRef));
    expect(anchorRefs.has('Genesis 22:2')).toBe(true);
    expect(anchorRefs.has('Numbers 21:9')).toBe(true);
    expect(anchorRefs.has('Psalm 110:4')).toBe(true);
    expect(anchorRefs.has('Jeremiah 31:31')).toBe(true);
    expect(anchorRefs.has('Zechariah 12:10')).toBe(true);
    expect(anchorRefs.has('Malachi 4:2')).toBe(true);
  });
});

describe('Curated Typological & Prophetic Threads', () => {
  it('curates Abraham offering Isaac on Moriah (Gen 22:2 -> Heb 11:17) with personal relevance', () => {
    const inter = getConnectionInterrogation(
      'gen-22-2',
      'Hebrews 11:17',
      'Genesis 22:2',
      'Take now thy son, thine only son Isaac, whom thou lovest...',
      'By faith Abraham, when he was tried, offered up Isaac...'
    );
    expect(inter.what).toContain('Akedah');
    expect(inter.how).toContain('Moriah');
    expect(inter.ultimatePoint).toContain('only begotten Son');
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');
    expect(inter.personalRelevance).toContain('Romans 8:32');
  });

  it('curates the Bronze Serpent (Num 21:9 -> John 3:14-15) with personal relevance', () => {
    const inter = getConnectionInterrogation(
      'num-21-9',
      'John 3:14-15',
      'Numbers 21:9',
      'And Moses made a serpent of brass, and put it upon a pole...',
      'And as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up...'
    );
    expect(inter.what).toContain('bronze serpent');
    expect(inter.ultimatePoint).toContain('lifted up');
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');
  });

  it('curates the Melchizedekian Royal Priesthood (Psa 110:4 -> Heb 7:17) with personal relevance', () => {
    const inter = getConnectionInterrogation(
      'psa-110-4',
      'Hebrews 7:17',
      'Psalm 110:4',
      'The LORD hath sworn, and will not repent, Thou art a priest for ever after the order of Melchizedek.',
      'Thou art a priest for ever after the order of Melchisedec.'
    );
    expect(inter.what).toContain('Melchizedek');
    expect(inter.ultimatePoint).toContain('High Priest');
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');
  });

  it('curates the New Covenant Ratified in Blood (Jer 31:31 -> Heb 8:8) with personal relevance', () => {
    const inter = getConnectionInterrogation(
      'jer-31-31',
      'Hebrews 8:8',
      'Jeremiah 31:31',
      'Behold, the days come, saith the LORD, that I will make a new covenant...',
      'Behold, the days come, saith the Lord, when I will make a new covenant...'
    );
    expect(inter.what).toContain('New Covenant');
    expect(inter.ultimatePoint).toContain('heart');
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');
  });

  it('curates the Pierced Shepherd-God (Zec 12:10 -> John 19:37) with personal relevance', () => {
    const inter = getConnectionInterrogation(
      'zec-12-10',
      'John 19:37',
      'Zechariah 12:10',
      'they shall look upon me whom they have pierced...',
      'They shall look on him whom they pierced.'
    );
    expect(inter.what).toContain('pierced');
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');
  });

  it('curates the Sun of Righteousness (Mal 4:2 -> Luke 1:78-79) with personal relevance', () => {
    const inter = getConnectionInterrogation(
      'mal-4-2',
      'Luke 1:78-79',
      'Malachi 4:2',
      'Unto you that fear my name shall the Sun of righteousness arise with healing in his wings...',
      'Through the tender mercy of our God; whereby the dayspring from on high hath visited us...'
    );
    expect(inter.what).toContain('Sun of righteousness');
    expect(inter.personalRelevance).toContain('Why you need to know this');
    expect(inter.personalRelevance).toContain('What it does for you');
    expect(inter.personalRelevance).toContain('Relationship with Jesus');
  });
});

describe('Thread Graph Model Integration', () => {
  it('attaches full 6-part interrogation to every edge in buildThreadGraph', () => {
    const graph = buildThreadGraph({
      anchorId: 'gen-1-1',
      anchorRef: 'Genesis 1:1',
      anchorTitle: 'In the Beginning',
      anchorVerseText: 'In the beginning God created the heaven and the earth.',
      principle: 'Creation is not self-originating.',
      fulfillmentRefs: ['John 1:1-3'],
      fulfillmentVerses: [
        {
          id: 'joh-1-1',
          text: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
        },
      ],
    });

    expect(graph.edges).toHaveLength(1);
    const edge = graph.edges[0];
    expect(edge.interrogation).toBeDefined();
    expect(edge.interrogation.ultimatePoint).toContain('Creative Agent');
    expect(edge.interrogation.what).toContain('Logos');
    expect(edge.interrogation.how).toContain("di' autou");
    expect(edge.interrogation.personalRelevance).toBeTruthy();
    expect(edge.interrogation.personalRelevance).toContain('Why you need to know this');
    expect(edge.interrogation.personalRelevance).toContain('What it does for you');
    expect(edge.interrogation.personalRelevance).toContain('Relationship with Jesus');
  });

  it('preserves exactly 41 distinct historical connections without ID collisions', () => {
    const connections = getAllHistoricalConnections();
    expect(connections).toHaveLength(41);

    // Verify all IDs are unique
    const idSet = new Set(connections.map(c => c.id));
    expect(idSet.size).toBe(41);
  });

  it('correctly parses structured personal relevance text into 3 distinct sections', () => {
    const sample = 'Why you need to know this: God keeps His covenants. What it does for you: Delivers from fear. Relationship with Jesus: Jesus is our eternal King.';
    const parsed = parsePersonalRelevance(sample);
    expect(parsed).not.toBeNull();
    expect(parsed?.why).toBe('God keeps His covenants.');
    expect(parsed?.what).toBe('Delivers from fear.');
    expect(parsed?.relationship).toBe('Jesus is our eternal King.');

    // Malformed/missing returns null
    expect(parsePersonalRelevance('')).toBeNull();
    expect(parsePersonalRelevance('Just some text without structured markers')).toBeNull();
  });

  it('ensures all curated interrogations have a non-empty Who dimension answering authorship, characters, and Christological referent', () => {
    for (const [key, ci] of Object.entries(CURATED_INTERROGATIONS)) {
      expect(ci.who, `Curated interrogation ${key} missing 'who'`).toBeTruthy();
      expect(ci.who).toContain('Authorship & Context:');
      expect(ci.who).toContain('Identified Characters:');
      expect(ci.who).toContain('Christological Subject & Referent:');
      expect(ci.who).toContain('Redemptive Purpose:');
    }
  });

  it('ensures all historical connections returned by getAllHistoricalConnections include the Who dimension', () => {
    const connections = getAllHistoricalConnections();
    expect(connections).toHaveLength(41);
    for (const c of connections) {
      expect(c.who, `Historical connection ${c.id} missing 'who'`).toBeTruthy();
      expect(c.who).toContain('Authorship');
      expect(c.who).toContain('Characters');
    }
  });

  it('generates rich Who analysis across all 4 canonical modes in generateConnectionInterrogation', () => {
    // Mode 1: OT -> NT
    const m1 = generateConnectionInterrogation({
      anchorId: 'gen-3-15',
      anchorRef: 'Genesis 3:15',
      targetRef: 'Romans 16:20',
      anchorVerseText: 'And I will put enmity...',
      targetVerseText: 'And the God of peace shall bruise Satan under your feet shortly.',
    });
    expect(m1.who).toContain('Authorship & Context:');
    expect(m1.who).toContain('Moses');
    expect(m1.who).toContain('Apostle Paul');
    expect(m1.who).toContain('Identified Characters:');
    expect(m1.who).toContain('Christological Subject & Referent:');

    // Mode 2: NT -> OT
    const m2 = generateConnectionInterrogation({
      anchorId: 'act-2-16',
      anchorRef: 'Acts 2:16',
      targetRef: 'Joel 2:28',
      anchorVerseText: 'This is that which was spoken...',
      targetVerseText: 'I will pour out my spirit...',
    });
    expect(m2.who).toContain('Luke the Evangelist');
    expect(m2.who).toContain('Prophet Joel');
    expect(m2.who).toContain('Christological Subject & Referent:');

    // Mode 3: NT -> NT
    const m3 = generateConnectionInterrogation({
      anchorId: 'eph-2-8',
      anchorRef: 'Ephesians 2:8',
      targetRef: 'Romans 3:24',
      anchorVerseText: 'For by grace are ye saved...',
      targetVerseText: 'Being justified freely...',
    });
    expect(m3.who).toContain('Apostle Paul');
    expect(m3.who).toContain('Christological Subject & Referent:');

    // Mode 4: OT -> OT
    const m4 = generateConnectionInterrogation({
      anchorId: 'gen-15-6',
      anchorRef: 'Genesis 15:6',
      targetRef: 'Habakkuk 2:4',
      anchorVerseText: 'And he believed in the LORD...',
      targetVerseText: 'The just shall live by his faith...',
    });
    expect(m4.who).toContain('Moses');
    expect(m4.who).toContain('Habakkuk');
    expect(m4.who).toContain('Christological Subject & Referent:');
  });

  it('deeply expounds Greek and Hebrew terminology in literary and canonical context across curated connections', () => {
    // 1. Genesis 1:1 -> John 1:1-3 (Bereshit, Bara, En arche, Logos, di' autou, choris autou, en vs egeneto)
    const genJohn = CURATED_INTERROGATIONS['gen-1-1_John 1:1-3'];
    expect(genJohn.what).toContain('בְּרֵאשִׁית');
    expect(genJohn.what).toContain('Bereshit');
    expect(genJohn.what).toContain('Ἐν ἀρχῇ');
    expect(genJohn.what).toContain('En archē');
    expect(genJohn.what).toContain('ὁ Λόγος');
    expect(genJohn.what).toContain('ho Logos');
    expect(genJohn.how).toContain('בָּרָא');
    expect(genJohn.how).toContain('baraʾ');
    expect(genJohn.how).toContain('עָשָׂה');
    expect(genJohn.how).toContain("di' autou");
    expect(genJohn.how).toContain('χωρὶς αὐτοῦ');
    expect(genJohn.how).toContain('ἦν');
    expect(genJohn.how).toContain('ἐγένετο');

    // 2. Genesis 1:26 -> Colossians 1:16-17 (Na'aseh Adam, tselem, demut, eikon tou Theou, prototokos, synesteken)
    const genCol = CURATED_INTERROGATIONS['gen-1-26_Colossians 1:16-17'];
    expect(genCol.how).toContain('נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ');
    expect(genCol.how).toContain('צֶלֶם');
    expect(genCol.how).toContain('tselem');
    expect(genCol.how).toContain('דְּמוּת');
    expect(genCol.how).toContain('demut');
    expect(genCol.how).toContain('εἰκὼν τοῦ Θεοῦ τοῦ ἀοράτου');
    expect(genCol.how).toContain('eikōn tou Theou tou aoratou');
    expect(genCol.how).toContain('πρωτότοκος πάσης κτίσεως');
    expect(genCol.how).toContain('prōtotokos pasēs ktiseōs');
    expect(genCol.how).toContain('συνέστηκεν');
    expect(genCol.how).toContain('synestēken');

    // 3. Genesis 3:15 -> Galatians 4:4-5 (Zera, hu, pleroma tou chronou, genomenon ek gynaikos, exagorasē, huiothesian)
    const protoevangelium = CURATED_INTERROGATIONS['gen-3-15_Galatians 4:4-5'];
    expect(protoevangelium.how).toContain('זֶרַע');
    expect(protoevangelium.how).toContain('zeraʿ');
    expect(protoevangelium.how).toContain('הוּא');
    expect(protoevangelium.how).toContain('hu');
    expect(protoevangelium.how).toContain('τὸ πλήρωμα τοῦ χρόνου');
    expect(protoevangelium.how).toContain('to plērōma tou chronou');
    expect(protoevangelium.how).toContain('γενόμενον ἐκ γυναικός');
    expect(protoevangelium.how).toContain('genomenon ek gynaikos');
    expect(protoevangelium.how).toContain('ἐξαγοράσῃ');
    expect(protoevangelium.how).toContain('exagorasē');
    expect(protoevangelium.how).toContain('υἱοθεσίαν');
    expect(protoevangelium.how).toContain('huiothesian');

    // 4. Genesis 12:3 -> Galatians 3:8,16 (venivrekhu, proeuēngelisato, sperma vs spermasin)
    const abraham = CURATED_INTERROGATIONS['gen-12-3_Galatians 3:8,16'];
    expect(abraham.how).toContain('וְנִבְרְכוּ בְךָ כֹּל מִשְׁפְּחֹת הָאֲדָמָה');
    expect(abraham.how).toContain('venivrekhu');
    expect(abraham.how).toContain('προευηγγελίσατο');
    expect(abraham.how).toContain('proeuēngelisato');
    expect(abraham.how).toContain('σπέρμασιν');
    expect(abraham.how).toContain('spermasin');
    expect(abraham.how).toContain('σπέρματί');

    // 5. Genesis 22:2 -> Hebrews 11:17 (yachid, ahav, monogene, en parabole)
    const akedah = CURATED_INTERROGATIONS['gen-22-2_Hebrews 11:17'];
    expect(akedah.how).toContain('יָחִיד');
    expect(akedah.how).toContain('yachid');
    expect(akedah.how).toContain('אָהַב');
    expect(akedah.how).toContain('ʾahav');
    expect(akedah.how).toContain('τὸν μονογενῆ');
    expect(akedah.how).toContain('ton monogenē');
    expect(akedah.how).toContain('ἐν παραβολῇ');
    expect(akedah.how).toContain('en parabolē');

    // 6. Exodus 12:46 -> John 19:36 (ve'etsem lo-tishberu-vo, syntribesetai)
    const paschal = CURATED_INTERROGATIONS['exo-12-46_John 19:36'];
    expect(paschal.how).toContain('וְעֶצֶם לֹא־תִשְׁבְּרוּ־בוֹ');
    expect(paschal.how).toContain('ve\'etsem lo-tishberu-vo');
    expect(paschal.how).toContain('Ὀστοῦν οὐ συντριβήσεται αὐτοῦ');
    expect(paschal.how).toContain('Ostoun ou syntribēsetai autou');
    expect(paschal.how).toContain('syntribō');

    // 7. Numbers 21:9 -> John 3:14-15 (nechash nechoshet, al-nes, hypsothenai dei)
    const serpent = CURATED_INTERROGATIONS['num-21-9_John 3:14-15'];
    expect(serpent.how).toContain('נְחַשׁ נְחֹשֶׁת');
    expect(serpent.how).toContain('nechash nechoshet');
    expect(serpent.how).toContain('עַל־נֵס');
    expect(serpent.how).toContain('ʿal-nes');
    expect(serpent.how).toContain('ὑψωθῆναι δεῖ');
    expect(serpent.how).toContain('hypsōthēnai dei');

    // 8. Joshua 5:13-15 -> Revelation 19:11-16 (Sar-Tseva-Yahweh, qodesh, Pistos kai Alethinos, Ho Logos tou Theou, Basileus basileon)
    const captain = CURATED_INTERROGATIONS['jos-5-14_Revelation 19:11-16'];
    expect(captain.how).toContain('שַׂר־צְבָא־יְהוָה');
    expect(captain.how).toContain('Sar-Tsevaʾ-Yahweh');
    expect(captain.how).toContain('קֹדֶשׁ');
    expect(captain.how).toContain('qodesh');
    expect(captain.how).toContain('Πιστὸς καὶ Ἀληθινός');
    expect(captain.how).toContain('Pistos kai Alēthinos');
    expect(captain.how).toContain('Βασιλεὺς βασιλέων');
    expect(captain.how).toContain('Basileus basileōn');

    // 9. 2 Samuel 7:12-16 -> Luke 1:32-33 (zar'akha, kisse mamlakhto, Huios Hypsistou, thronon Dauid)
    const davidic = CURATED_INTERROGATIONS['2sa-7-12_Luke 1:32-33'];
    expect(davidic.how).toContain('וַהֲקִימֹתִי אֶת־זַרְעֲךָ אַחֲרֶיךָ');
    expect(davidic.how).toContain('vahakimoti');
    expect(davidic.how).toContain('כִּסֵּא מַמְלַכְתּוֹ עַד־עוֹלָם');
    expect(davidic.how).toContain('Υἱὸς Ὑψίστου');
    expect(davidic.how).toContain('Huios Hypsistou');
    expect(davidic.how).toContain('τὸν θρόνον Δαυὶδ');
    expect(davidic.how).toContain('thronon Dauid');

    // 10. Psalm 110:1 -> Matthew 22:44 (Ne'um Yahweh la-Adoni, Shev li-mini, Kyrios to Kyrio mou)
    const psa110_1 = CURATED_INTERROGATIONS['psa-110-1_Matthew 22:44'];
    expect(psa110_1.how).toContain('נְאֻם יְהוָה לַאדֹנִי שֵׁב לִימִינִי');
    expect(psa110_1.how).toContain("Ne'um Yahweh la-Adoni");
    expect(psa110_1.how).toContain('Εἶπεν Κύριος τῷ Κυρίῳ μου');
    expect(psa110_1.how).toContain('Eipen Kyrios tō Kyriō mou');

    // 11. Psalm 110:4 -> Hebrews 7:17 (Nishba Yahweh, Malki-tsedeq, kata taxin Melchisedek, kata dynamin zoes akatalytou)
    const psa110_4 = CURATED_INTERROGATIONS['psa-110-4_Hebrews 7:17'];
    expect(psa110_4.how).toContain('נִשְׁבַּע יְהוָה וְלֹא יִנָּחֵם');
    expect(psa110_4.how).toContain('Nishbaʿ Yahweh');
    expect(psa110_4.how).toContain('מַלְכִּי־צֶדֶק');
    expect(psa110_4.how).toContain('Malki-tsedeq');
    expect(psa110_4.how).toContain('κατὰ τὴν τάξιν Μελχισεδέκ');
    expect(psa110_4.how).toContain('kata tēn taxin Melchisedek');
    expect(psa110_4.how).toContain('κατὰ δύναμιν ζωῆς ἀκαταλύτου');
    expect(psa110_4.how).toContain('kata dynamin zōēs akatalytou');

    // 12. Isaiah 53:5 -> 1 Peter 2:24 (mecholal, medukka, musar shelomenu, chabburah, anenegken, epi to xylon, molopi iathete)
    const isa53 = CURATED_INTERROGATIONS['isa-53-5_1 Peter 2:24'];
    expect(isa53.how).toContain('מְחֹלָל');
    expect(isa53.how).toContain('mecholal');
    expect(isa53.how).toContain('מְדֻכָּא');
    expect(isa53.how).toContain('medukka');
    expect(isa53.how).toContain('מוּסַר שְׁלוֹמֵנוּ');
    expect(isa53.how).toContain('musar shelomenu');
    expect(isa53.how).toContain('חַבּוּרָה');
    expect(isa53.how).toContain('chabburah');
    expect(isa53.how).toContain('ἀνήνεγκεν');
    expect(isa53.how).toContain('anēnegken');
    expect(isa53.how).toContain('ἐπὶ τὸ ξύλον');
    expect(isa53.how).toContain('epi to xylon');
    expect(isa53.how).toContain('μώλωπι ἰάθητε');
    expect(isa53.how).toContain('mōlōpi iathēte');

    // 13. Jeremiah 31:31 -> Hebrews 8:8 / Luke 22:20 (berit chadashah, diatheke kaine, ekchynnomenon)
    const jer31 = CURATED_INTERROGATIONS['jer-31-31_Hebrews 8:8'];
    expect(jer31.how).toContain('בְּרִית חֲדָשָׁה');
    expect(jer31.how).toContain('berit chadashah');
    expect(jer31.how).toContain('διαθήκην καινήν');
    expect(jer31.how).toContain('diathēkēn kainēn');
    const jerLuke = CURATED_INTERROGATIONS['jer-31-31_Luke 22:20'];
    expect(jerLuke.how).toContain('ἡ καινὴ διαθήκη ἐν τῷ αἵματί μου');
    expect(jerLuke.how).toContain('ekchynnomenon');

    // 14. Daniel 7:13-14 -> Matthew 26:64 / Revelation 1:7 (kevar enash, sholtan alam, yiplechun, Huion tou anthropou)
    const dan7 = CURATED_INTERROGATIONS['dan-7-13_Matthew 26:64 / Revelation 1:7'];
    expect(dan7.how).toContain('כְּבַר אֱנָשׁ');
    expect(dan7.how).toContain('kevar ʾenash');
    expect(dan7.how).toContain('שָׁלְטָן עָלַם');
    expect(dan7.how).toContain('sholtan ʿalam');
    expect(dan7.how).toContain('יִפְלְחוּן');
    expect(dan7.how).toContain('yiplechun');
    expect(dan7.how).toContain('τὸν Υἱὸν τοῦ ἀνθρώπου');
    expect(dan7.how).toContain('ton Huion tou anthrōpou');

    // 15. Zechariah 12:10 -> John 19:37 (ruach chen vetachanunim, elay et asher-daqaru, exekentesan)
    const zec12 = CURATED_INTERROGATIONS['zec-12-10_John 19:37'];
    expect(zec12.how).toContain('רוּחַ חֵן וְתַחֲנוּנִים');
    expect(zec12.how).toContain('ruach chen vetachanunim');
    expect(zec12.how).toContain('אֵלַי אֵת אֲשֶׁר־דָּקָרוּ');
    expect(zec12.how).toContain('ʾelay ʾet ʾasher-daqaru');
    expect(zec12.how).toContain('דָּקָרוּ');
    expect(zec12.how).toContain('daqaru');
    expect(zec12.how).toContain('ἐξεκέντησαν');
    expect(zec12.how).toContain('exekentēsan');

    // 16. Malachi 4:2 -> Luke 1:78-79 (Shemesh Tsedaqah, marpe biknafeha, splagchna eleous, anatole ex hypsous)
    const mal4_2 = CURATED_INTERROGATIONS['mal-4-2_Luke 1:78-79'];
    expect(mal4_2.how).toContain('שֶׁמֶשׁ צְדָקָה');
    expect(mal4_2.how).toContain('shemesh tsedaqah');
    expect(mal4_2.how).toContain('מַרְפֵּא בִּכְנָפֶיהָ');
    expect(mal4_2.how).toContain('marpeʾ biknafeha');
    expect(mal4_2.how).toContain('σπλάγχνα ἐλέους');
    expect(mal4_2.how).toContain('splagchna eleous');
    expect(mal4_2.how).toContain('ἀνατολὴ ἐξ ὕψους');
    expect(mal4_2.how).toContain('anatolē ex hypsous');

    // 17. Malachi 4:5-6 -> Luke 1:17 / Matthew 17:11-13 (Eliyah hanna-vi, en pneumati kai dynamei Eliou)
    const mal4_5 = CURATED_INTERROGATIONS['mal-4-5_Luke 1:17 / Matthew 17:11-13'];
    expect(mal4_5.how).toContain('אֵלִיָּה הַנָּבִיא');
    expect(mal4_5.how).toContain('ʾEliyah hanna-viʾ');
    expect(mal4_5.how).toContain('ἐν πνεύματι καὶ δυνάμει Ἠλίου');
    expect(mal4_5.how).toContain('en pneumati kai dynamei Ēliou');

    // 18. Matthew 1:22-23 -> Isaiah 7:14 (almah, Immanu El, parthenos, Emmanouel, Meth' hemon ho Theos)
    const matVirgin = CURATED_INTERROGATIONS['mat-1-22_Isaiah 7:14'];
    expect(matVirgin.how).toContain('עַלְמָה');
    expect(matVirgin.how).toContain('ʿalmah');
    expect(matVirgin.how).toContain('עִמָּנוּאֵל');
    expect(matVirgin.how).toContain('ʿImmanu ʾEl');
    expect(matVirgin.how).toContain('ἡ παρθένος');
    expect(matVirgin.how).toContain('hē parthenos');
    expect(matVirgin.how).toContain('Ἐμμανουήλ');
    expect(matVirgin.how).toContain('Emmanouēl');
    expect(matVirgin.how).toContain("Μεθ' ἡμῶν ὁ Θεός");
    expect(matVirgin.how).toContain("Meth' hēmōn ho Theos");

    // 19. Romans 5:14 -> 1 Corinthians 15:22 (typos tou mellontos, eschatos Adam, pneuma zoopoioun)
    const twoAdams = CURATED_INTERROGATIONS['rom-5-14_1 Corinthians 15:22'];
    expect(twoAdams.how).toContain('τύπος τοῦ μέλλοντος');
    expect(twoAdams.how).toContain('typos tou mellontos');
    expect(twoAdams.how).toContain('ἔσχατος Ἀδὰμ');
    expect(twoAdams.how).toContain('eschatos Adam');
    expect(twoAdams.how).toContain('πνεῦμα ζῳοποιοῦν');
    expect(twoAdams.how).toContain('pneuma zōopoioun');
  });
});

const GENERIC_SOURCE_WHO = 'the recipients of divine revelation';
const GOLDEN_ANCHORS = ['gen-1-1', 'zec-9-9', 'exo-12-46'] as const;
const GOLDEN_LIVE_REFS: Record<(typeof GOLDEN_ANCHORS)[number], string[]> = {
  'gen-1-1': ['John 1:1-3', 'Hebrews 11:3'],
  'zec-9-9': ['Matthew 21:5', 'John 12:15', 'Mark 11:7', 'Luke 19:38'],
  'exo-12-46': ['John 19:36', 'Numbers 9:12'],
};

describe('Phase 1 golden Who facets', () => {
  it('parses structured Who prose into wrote / identified / singular|many / about+why', () => {
    const sample =
      'Authorship & Context: Moses wrote Genesis. Identified Characters: The Father, the Son, and the Spirit. Singular or Many: Many. Three persons, one God. Christological Subject & Referent: Jesus Christ the Word. Redemptive Purpose: To name the Creator as Redeemer.';
    const parsed = parseWho(sample);
    expect(parsed).not.toBeNull();
    expect(parsed?.wrote).toBe('Moses wrote Genesis.');
    expect(parsed?.identified).toBe('The Father, the Son, and the Spirit.');
    expect(parsed?.number).toBe('many');
    expect(parsed?.numberText).toContain('Three persons');
    expect(parsed?.aboutWhy).toContain('Jesus Christ the Word');
    expect(parsed?.aboutWhy).toContain('To name the Creator as Redeemer.');

    expect(parseWho('')).toBeNull();
    expect(parseWho('Just some text without structured markers')).toBeNull();
  });

  it('locks authored Who facets on golden threads, with singular|many explicit and non-generic source Who', () => {
    for (const id of GOLDEN_ANCHORS) {
      const detail = getThreadDetail(id);
      expect(detail, `missing ThreadDetail for ${id}`).toBeTruthy();
      expect(detail!.who, `${id} missing authored source Who`).toBeTruthy();
      expect(detail!.who).not.toContain(GENERIC_SOURCE_WHO);

      const sourceFacets = parseWho(detail!.who!);
      expect(sourceFacets, `${id} source Who did not parse`).not.toBeNull();
      expect(sourceFacets!.wrote.length).toBeGreaterThan(20);
      expect(sourceFacets!.identified.length).toBeGreaterThan(10);
      expect(sourceFacets!.number).toMatch(/^(singular|many)$/);
      expect(sourceFacets!.numberText.length).toBeGreaterThan(8);
      expect(sourceFacets!.aboutWhy.length).toBeGreaterThan(20);

      for (const ref of GOLDEN_LIVE_REFS[id]) {
        const edgeWho = detail!.whoByRef?.[ref];
        expect(edgeWho, `${id} missing authored Who for ${ref}`).toBeTruthy();
        expect(edgeWho).not.toContain(GENERIC_SOURCE_WHO);
        const edgeFacets = parseWho(edgeWho!);
        expect(edgeFacets, `${id} → ${ref} Who did not parse`).not.toBeNull();
        expect(edgeFacets!.number).toMatch(/^(singular|many)$/);
        expect(edgeFacets!.numberText.length).toBeGreaterThan(8);
      }
    }

    const genJohn = parseWho(CURATED_INTERROGATIONS['gen-1-1_John 1:1-3'].who);
    expect(genJohn?.number).toBe('many');
    const paschal = parseWho(CURATED_INTERROGATIONS['exo-12-46_John 19:36'].who);
    expect(paschal?.number).toBe('singular');
  });

  it('puts Singular or Many on generated fallback Who so the facet parser can run', () => {
    const generated = generateConnectionInterrogation({
      anchorId: 'psa-22-1',
      anchorRef: 'Psalm 22:1',
      targetRef: 'Matthew 27:46',
      anchorVerseText: 'My God, my God, why hast thou forsaken me?',
      targetVerseText: 'My God, my God, why hast thou forsaken me?',
    });
    const parsed = parseWho(generated.who);
    expect(parsed).not.toBeNull();
    expect(parsed?.number).toBe('many');
  });
});

describe('Phase 1 golden original-language exposition', () => {
  it('requires contextual exposition (not gloss-only) on golden path terms', () => {
    for (const id of GOLDEN_ANCHORS) {
      const detail = getThreadDetail(id);
      expect(detail!.terms.length).toBeGreaterThan(0);
      for (const term of detail!.terms) {
        expect(term.exposition, `${id} term "${term.term}" missing exposition`).toBeTruthy();
        expect(term.exposition!.length).toBeGreaterThan(term.gloss.length);
        expect(term.exposition).not.toBe(term.gloss);
        expect(term.strongs, `${id} term "${term.term}" missing Strong's`).toMatch(/^[HG]\d+/);
      }
    }
  });

  it('renders contextual exposition in ThreadExplanation for golden path terms', () => {
    const detail = getThreadDetail('gen-1-1');
    expect(detail).toBeTruthy();
    const html = renderToStaticMarkup(
      createElement(ThreadExplanation, { verseId: 'gen-1-1', detail })
    );
    expect(html).toContain('baraʾ');
    expect(html).toContain(detail!.terms[0].exposition!);
    expect(html).toContain("Strong's H1254");
  });
});
