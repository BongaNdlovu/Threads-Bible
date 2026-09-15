import { describe, expect, it } from 'vitest';
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
import { buildThreadGraph } from './threadMapModel';
import { parsePersonalRelevance } from './HistoricalContextPage';

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
});
