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
    // Verify all 5 interrogation pillars are non-empty
    expect(inter.what).toBeTruthy();
    expect(inter.when).toBeTruthy();
    expect(inter.how).toBeTruthy();
    expect(inter.why).toBeTruthy();
    expect(inter.ultimatePoint).toBeTruthy();

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
  });

  it('generates a robust 5-part interrogation for any arbitrary connection via fallback', () => {
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
  });
});

describe('Thread Graph Model Integration', () => {
  it('attaches full 5-part interrogation to every edge in buildThreadGraph', () => {
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
  });
});
