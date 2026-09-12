/**
 * The 28 Fundamental Beliefs of Seventh-day Adventists
 * Grounded in Sola Scriptura (Isaiah 8:20) and Christological Sanctuary Theology.
 */

export type BeliefCategory =
  | 'The Doctrine of God'
  | 'The Doctrine of Humanity'
  | 'The Doctrine of Salvation'
  | 'The Doctrine of the Church'
  | 'The Doctrine of Daily Living'
  | 'The Doctrine of Last Things';

export interface ScripturalAnchorLink {
  ref: string;
  verseId: string;
  role: string;
}

export interface FundamentalBelief {
  id: string;
  number: number;
  title: string;
  category: BeliefCategory;
  summary: string;
  primaryAnchor: string;
  primaryAnchorVerseId: string;
  scriptureRefs: string[];
  scriptureAnchors: ScripturalAnchorLink[];
  relatedPillarNumber?: number;
  keyConcepts: string[];
}

export const FUNDAMENTAL_BELIEFS: FundamentalBelief[] = [
  // ── I. The Doctrine of God ──────────────────────────────────────────────
  {
    id: 'belief-1',
    number: 1,
    title: 'The Holy Scriptures',
    category: 'The Doctrine of God',
    summary:
      'The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration through holy men of God who spoke and wrote as they were moved by the Holy Spirit. They are the infallible revelation of His will and the sole authoritative test of character, experience, and doctrine (Isaiah 8:20).',
    primaryAnchor: '2 Timothy 3:16-17; Isaiah 8:20',
    primaryAnchorVerseId: '2ti-3-16',
    scriptureRefs: [
      '2 Timothy 3:16-17',
      '2 Peter 1:20-21',
      'Isaiah 8:20',
      'Psalm 119:105',
      'Proverbs 30:5-6',
      'John 10:35',
      'John 17:17',
      '1 Thessalonians 2:13',
      'Hebrews 4:12',
    ],
    scriptureAnchors: [
      { ref: '2 Timothy 3:16-17', verseId: '2ti-3-16', role: 'All Scripture given by inspiration of God for doctrine and instruction' },
      { ref: 'Isaiah 8:20', verseId: 'isa-8-20', role: 'Touchstone test: if they speak not according to this word, there is no light' },
      { ref: '2 Peter 1:20-21', verseId: '2pe-1-20', role: 'Prophecy came not by will of man, but holy men spoke moved by Holy Ghost' },
    ],
    relatedPillarNumber: 7,
    keyConcepts: ['Inspiration', 'Sola Scriptura', 'Infallible Canon', 'Divine Authority'],
  },
  {
    id: 'belief-2',
    number: 2,
    title: 'The Trinity',
    category: 'The Doctrine of God',
    summary:
      'There is one God: Father, Son, and Holy Spirit, a unity of three coeternal Persons. God is immortal, all-powerful, all-knowing, above all, and ever present. He is infinite and beyond human comprehension, yet known through His self-revelation, perpetually worthy of worship and honor by all creation.',
    primaryAnchor: 'Deuteronomy 6:4; Matthew 28:19; 2 Corinthians 13:14',
    primaryAnchorVerseId: 'deu-6-4',
    scriptureRefs: [
      'Deuteronomy 6:4',
      'Matthew 28:19',
      '2 Corinthians 13:14',
      'Ephesians 4:4-6',
      '1 Peter 1:2',
      '1 Timothy 1:17',
      'Revelation 14:7',
    ],
    scriptureAnchors: [
      { ref: 'Deuteronomy 6:4', verseId: 'deu-6-4', role: 'The Shema: The LORD our God is one LORD (compound unity)' },
      { ref: 'Matthew 28:19', verseId: 'mat-28-19', role: 'Baptizing in the singular name of Father, Son, and Holy Ghost' },
      { ref: '2 Corinthians 13:14', verseId: '2co-13-14', role: 'Apostolic benediction of grace, love, and communion of the Trinity' },
    ],
    keyConcepts: ['Coeternal Godhead', 'Unity in Trinity', 'Omnipotence', 'Omnipresence'],
  },
  {
    id: 'belief-3',
    number: 3,
    title: 'The Father',
    category: 'The Doctrine of God',
    summary:
      'God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation. He is just and holy, merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness. The qualities exhibited in the Son and Holy Spirit are revelations of the Father.',
    primaryAnchor: 'Exodus 34:6-7; John 3:16; 1 John 4:8',
    primaryAnchorVerseId: 'exo-34-6',
    scriptureRefs: [
      'Genesis 1:1',
      'Exodus 34:6-7',
      'Psalm 103:13',
      'John 3:16',
      'John 14:9',
      '1 Corinthians 15:28',
      '1 Timothy 1:17',
      '1 John 4:8',
      'Revelation 4:11',
    ],
    scriptureAnchors: [
      { ref: 'Exodus 34:6-7', verseId: 'exo-34-6', role: 'God proclaims His character of mercy, grace, and justice' },
      { ref: 'John 14:9', verseId: 'joh-14-9', role: 'He that hath seen Jesus hath seen the Father' },
      { ref: 'Revelation 4:11', verseId: 'rev-4-11', role: 'Thou art worthy, O Lord, for Thou hast created all things' },
    ],
    keyConcepts: ['Sovereignty', 'Covenant Love', 'Creator', 'Grace & Justice'],
  },
  {
    id: 'belief-4',
    number: 4,
    title: 'The Son',
    category: 'The Doctrine of God',
    summary:
      'God the eternal Son became incarnate in Jesus Christ. Through Him all things were created, the character of God is revealed, the salvation of humanity is accomplished, and the world is judged. Forever truly God, He became truly man, conceived of the Holy Spirit and born of the virgin Mary. He suffered, died on the cross for our sins, was raised from the dead, and ascended to minister in the heavenly sanctuary.',
    primaryAnchor: 'John 1:1-3, 14; Colossians 1:15-19; Hebrews 1:1-3',
    primaryAnchorVerseId: 'joh-1-1',
    scriptureRefs: [
      'John 1:1-3, 14',
      'Colossians 1:15-19',
      'Philippians 2:5-11',
      'Hebrews 1:1-3',
      'Hebrews 2:9-18',
      'Hebrews 8:1-2',
      '1 Corinthians 15:3-4',
      'Luke 1:35',
      'Romans 6:23',
    ],
    scriptureAnchors: [
      { ref: 'John 1:1-3', verseId: 'joh-1-1', role: 'The Word was God and was made flesh to dwell among us' },
      { ref: 'Colossians 1:15-19', verseId: 'col-1-15', role: 'Image of invisible God, firstborn of every creature, creating all things' },
      { ref: 'Hebrews 8:1-2', verseId: 'heb-8-1', role: 'High Priest ministering at the right hand of the throne in the heavens' },
    ],
    relatedPillarNumber: 2,
    keyConcepts: ['Incarnation', 'True Deity & Humanity', 'Substitutionary Atonement', 'High Priesthood'],
  },
  {
    id: 'belief-5',
    number: 5,
    title: 'The Holy Spirit',
    category: 'The Doctrine of God',
    summary:
      'God the eternal Spirit was active with the Father and the Son in Creation, incarnation, and redemption. He is as much a person as are the Father and the Son. He inspired the writers of Scripture, filled Christ\'s life with power, convicts human beings of sin, and transforms into the image of God those who respond.',
    primaryAnchor: 'Genesis 1:2; John 14:16-18, 26; 16:7-13',
    primaryAnchorVerseId: 'joh-14-16',
    scriptureRefs: [
      'Genesis 1:1-2',
      'Luke 1:35',
      'Luke 4:18',
      'Acts 10:38',
      '2 Peter 1:21',
      '2 Corinthians 3:18',
      'Ephesians 4:30',
      'John 14:16-18, 26',
      'John 16:7-13',
      'Acts 1:8',
    ],
    scriptureAnchors: [
      { ref: 'John 14:16-18', verseId: 'joh-14-16', role: 'The Comforter (Paraclete) abiding with believers forever' },
      { ref: 'John 16:7-13', verseId: 'joh-16-7', role: 'Convicts the world of sin, righteousness, and judgment; guides into truth' },
      { ref: '2 Peter 1:21', verseId: '2pe-1-21', role: 'Holy men of God spake as they were moved by the Holy Ghost' },
    ],
    relatedPillarNumber: 7,
    keyConcepts: ['Personhood of Spirit', 'Inspiration', 'Regeneration', 'Conviction of Truth'],
  },

  // ── II. The Doctrine of Humanity ─────────────────────────────────────────
  {
    id: 'belief-6',
    number: 6,
    title: 'Creation',
    category: 'The Doctrine of Humanity',
    summary:
      'God has revealed in Scripture the authentic and historical account of His creative activity. He created the universe, and in a recent six-day creation the Lord made "the heaven and the earth, the sea, and all that in them is" and rested on the seventh day. Thus He established the Sabbath as a perpetual memorial of His creative work.',
    primaryAnchor: 'Genesis 1-2; Exodus 20:8-11; Psalm 33:6, 9; Hebrews 11:3',
    primaryAnchorVerseId: 'gen-1-1',
    scriptureRefs: [
      'Genesis 1:1-31',
      'Genesis 2:1-3',
      'Exodus 20:8-11',
      'Psalm 19:1-6',
      'Psalm 33:6, 9',
      'Psalm 104',
      'Colossians 1:16',
      'Hebrews 11:3',
      'Revelation 14:7',
    ],
    scriptureAnchors: [
      { ref: 'Genesis 1:1', verseId: 'gen-1-1', role: 'Absolute beginning: In the beginning God created heaven and earth' },
      { ref: 'Exodus 20:8-11', verseId: 'exo-20-8', role: 'Decalogue memorial: in six days the LORD made heaven, earth, and rested' },
      { ref: 'Psalm 33:6, 9', verseId: 'psa-33-6', role: 'He spake, and it was done; He commanded, and it stood fast' },
    ],
    relatedPillarNumber: 3,
    keyConcepts: ['Literal 6-Day Creation', 'Creatio Ex Nihilo', 'Edenic Sabbath Memorial', 'Intelligent Design'],
  },
  {
    id: 'belief-7',
    number: 7,
    title: 'The Nature of Humanity',
    category: 'The Doctrine of Humanity',
    summary:
      'Man and woman were made in the image of God with individuality, the power and freedom to think and to do. Man became a living soul through the union of dust and the breath of life (Genesis 2:7). When our first parents disobeyed God, they fell from their high position, becoming subject to death, and passing mortality and sin to their posterity.',
    primaryAnchor: 'Genesis 2:7; Genesis 3:19; Ecclesiastes 9:5-6, 10; Psalm 146:4',
    primaryAnchorVerseId: 'gen-2-7',
    scriptureRefs: [
      'Genesis 1:26-28',
      'Genesis 2:7',
      'Genesis 3:1-24',
      'Psalm 8:4-8',
      'Psalm 146:4',
      'Ecclesiastes 9:5-6, 10',
      'Romans 5:12-17',
      '1 Corinthians 15:21-22',
    ],
    scriptureAnchors: [
      { ref: 'Genesis 2:7', verseId: 'gen-2-7', role: 'Dust + breath = living soul (nephesh chayah); not an immortal ghost' },
      { ref: 'Ecclesiastes 9:5-6', verseId: 'ecc-9-5', role: 'The dead know not anything; thoughts and consciousness cease' },
      { ref: 'Romans 5:12', verseId: 'rom-5-12', role: 'By one man sin entered into the world, and death by sin' },
    ],
    relatedPillarNumber: 4,
    keyConcepts: ['Image of God', 'Holistic Anthropology', 'Mortality of Flesh', 'Fall into Sin'],
  },

  // ── III. The Doctrine of Salvation ───────────────────────────────────────
  {
    id: 'belief-8',
    number: 8,
    title: 'The Great Controversy',
    category: 'The Doctrine of Salvation',
    summary:
      'All humanity is now involved in a great controversy between Christ and Satan regarding the character of God, His law, and His sovereignty over the universe. This conflict originated in heaven when a created being, endowed with freedom of choice, in self-exaltation became Satan, God\'s adversary, and led a portion of the angels into rebellion.',
    primaryAnchor: 'Isaiah 14:12-15; Ezekiel 28:12-19; Revelation 12:4-9',
    primaryAnchorVerseId: 'isa-14-12',
    scriptureRefs: [
      'Isaiah 14:12-15',
      'Ezekiel 28:12-19',
      'Genesis 3:15',
      'Revelation 12:4-9',
      'Romans 1:19-32',
      'Romans 5:12-21',
      'Romans 8:19-22',
      'Hebrews 1:14',
      '1 Corinthians 4:9',
    ],
    scriptureAnchors: [
      { ref: 'Isaiah 14:12-15', verseId: 'isa-14-12', role: 'Lucifer\'s self-exaltation: "I will ascend into heaven, I will be like the most High"' },
      { ref: 'Ezekiel 28:12-19', verseId: 'ezk-28-12', role: 'Anointed covering cherub corrupted wisdom through splendor and pride' },
      { ref: 'Revelation 12:7-9', verseId: 'rev-12-7', role: 'War in heaven: Michael and His angels cast out the dragon to the earth' },
    ],
    relatedPillarNumber: 6,
    keyConcepts: ['Cosmic Conflict', 'Character of God Vindicated', 'Free Will', 'Lucifer\'s Fall'],
  },
  {
    id: 'belief-9',
    number: 9,
    title: 'The Life, Death, and Resurrection of Christ',
    category: 'The Doctrine of Salvation',
    summary:
      'In Christ\'s life of perfect obedience to God\'s will, His suffering, death, and resurrection, God provided the only means of atonement for human sin. This perfect substitutionary atonement vindicates the righteousness of God\'s law and the benevolence of His character. Christ\'s bodily resurrection proclaims God\'s triumph over the forces of evil.',
    primaryAnchor: 'Isaiah 53:4-6; John 3:16; 1 Corinthians 15:3-4, 20-22; Colossians 2:15',
    primaryAnchorVerseId: 'isa-53-5',
    scriptureRefs: [
      'Isaiah 53:4-6',
      'John 3:16',
      'Romans 3:25',
      'Romans 4:25',
      'Romans 8:3-4',
      '1 Corinthians 15:3-4, 20-22',
      '2 Corinthians 5:14-15, 19-21',
      'Colossians 2:15',
      '1 Peter 2:21-22',
    ],
    scriptureAnchors: [
      { ref: 'Isaiah 53:5', verseId: 'isa-53-5', role: 'Wounded for our transgressions, bruised for our iniquities' },
      { ref: '1 Corinthians 15:3-4', verseId: '1co-15-3', role: 'Christ died for our sins according to scriptures, rose third day' },
      { ref: 'Colossians 2:15', verseId: 'col-2-15', role: 'Spoiled principalities and powers, triumphing over them on the Cross' },
    ],
    relatedPillarNumber: 2,
    keyConcepts: ['Substitutionary Atonement', 'Vicarious Sacrifice', 'Bodily Resurrection', 'Calvary Triumph'],
  },
  {
    id: 'belief-10',
    number: 10,
    title: 'The Experience of Salvation',
    category: 'The Doctrine of Salvation',
    summary:
      'In infinite love and mercy God made Christ, who knew no sin, to be sin for us, so that in Him we might be made the righteousness of God. Led by the Holy Spirit we sense our need, acknowledge our sinfulness, repent of our transgressions, and exercise faith in Jesus as Savior and Lord. Through faith we receive forgiveness, are justified, and adopted as God\'s sons and daughters.',
    primaryAnchor: 'Romans 3:21-26; 2 Corinthians 5:17-21; Ephesians 2:8-10',
    primaryAnchorVerseId: 'rom-3-21',
    scriptureRefs: [
      'Romans 3:21-26',
      'Romans 5:1-5',
      'Romans 8:14-17',
      '2 Corinthians 5:17-21',
      'Galatians 3:13-14',
      'Ephesians 2:8-10',
      'Titus 3:3-7',
      '1 Peter 1:23',
    ],
    scriptureAnchors: [
      { ref: 'Romans 3:21-26', verseId: 'rom-3-21', role: 'Righteousness of God manifested without the law, justified freely by grace' },
      { ref: '2 Corinthians 5:17', verseId: '2co-5-17', role: 'If any man be in Christ, he is a new creature; old things passed away' },
      { ref: 'Ephesians 2:8-10', verseId: 'eph-2-8', role: 'By grace ye are saved through faith; not of works, created unto good works' },
    ],
    keyConcepts: ['Justification by Faith', 'Sanctification', 'Regeneration', 'Imputed Righteousness'],
  },
  {
    id: 'belief-11',
    number: 11,
    title: 'Growing in Christ',
    category: 'The Doctrine of Salvation',
    summary:
      'By His death on the cross Jesus triumphed over the forces of evil. By the Spirit\'s power we are called to grow into the likeness of His character, communing with Him daily in prayer, feeding on His Word, meditating on it and on His providence, singing His praises, gathering together for worship, and participating in the mission of the Church.',
    primaryAnchor: 'Colossians 2:6-7; Ephesians 6:10-18; 2 Peter 3:18',
    primaryAnchorVerseId: 'col-2-6',
    scriptureRefs: [
      'Psalm 1:1-2',
      'Psalm 23:4',
      'Luke 10:17-20',
      'Colossians 1:13-14',
      'Colossians 2:6, 14-15',
      'Ephesians 6:10-18',
      '1 Thessalonians 5:23',
      '2 Peter 3:18',
      'Philippians 3:7-14',
    ],
    scriptureAnchors: [
      { ref: 'Colossians 2:6-7', verseId: 'col-2-6', role: 'As ye have received Christ Jesus the Lord, so walk ye in Him, rooted and built up' },
      { ref: 'Ephesians 6:11', verseId: 'eph-6-11', role: 'Put on the whole armor of God, to stand against the wiles of the devil' },
      { ref: '2 Peter 3:18', verseId: '2pe-3-18', role: 'Grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ' },
    ],
    keyConcepts: ['Spiritual Growth', 'Armor of God', 'Deliverance from Darkness', 'Daily Communion'],
  },

  // ── IV. The Doctrine of the Church ───────────────────────────────────────
  {
    id: 'belief-12',
    number: 12,
    title: 'The Church',
    category: 'The Doctrine of the Church',
    summary:
      'The church is the community of believers who confess Jesus Christ as Lord and Savior. In continuity with the people of God in Old Testament times, we are called out from the world; and we join together for worship, for fellowship, for instruction in the Word, for the celebration of the Lord\'s Supper, for service to humanity, and for the worldwide proclamation of the gospel.',
    primaryAnchor: 'Matthew 16:16-18; Ephesians 1:22-23; 1 Peter 2:9',
    primaryAnchorVerseId: 'mat-16-18',
    scriptureRefs: [
      'Genesis 12:1-3',
      'Exodus 19:3-7',
      'Matthew 16:16-18',
      'Matthew 28:19-20',
      'Acts 2:38-42',
      '1 Corinthians 12:13',
      'Ephesians 1:22-23',
      'Ephesians 2:19-22',
      '1 Peter 2:9',
    ],
    scriptureAnchors: [
      { ref: 'Matthew 16:18', verseId: 'mat-16-18', role: 'Upon this rock I will build My church; the gates of hell shall not prevail' },
      { ref: 'Ephesians 1:22-23', verseId: 'eph-1-22', role: 'Head over all things to the church, which is His body, the fulness of Him' },
      { ref: '1 Peter 2:9', verseId: '1pe-2-9', role: 'A chosen generation, royal priesthood, holy nation, peculiar people' },
    ],
    keyConcepts: ['Body of Christ', 'Community of Faith', 'Royal Priesthood', 'Called Out Assembly'],
  },
  {
    id: 'belief-13',
    number: 13,
    title: 'The Remnant and Its Mission',
    category: 'The Doctrine of the Church',
    summary:
      'The universal church is composed of all who truly believe in Christ, but in the last days, a time of widespread apostasy, a remnant has been called out to keep the commandments of God and the faith of Jesus. This remnant announces the arrival of the judgment hour, proclaims salvation through Christ, and heralds the approach of His second advent (Three Angels\' Messages, Rev 14:6-12).',
    primaryAnchor: 'Revelation 12:17; Revelation 14:6-12; Revelation 18:1-4',
    primaryAnchorVerseId: 'rev-12-17',
    scriptureRefs: [
      'Revelation 12:17',
      'Revelation 14:6-12',
      'Revelation 18:1-4',
      '2 Corinthians 5:20',
      'Zephaniah 3:13',
      '2 Peter 3:13',
      '1 Peter 4:10-11',
    ],
    scriptureAnchors: [
      { ref: 'Revelation 12:17', verseId: 'rev-12-17', role: 'Dragon makes war with remnant keeping commandments and testimony of Jesus' },
      { ref: 'Revelation 14:6-7', verseId: 'rev-14-6', role: 'Everlasting gospel: fear God, give glory, hour of judgment is come' },
      { ref: 'Revelation 14:12', verseId: 'rev-14-12', role: 'Patience of the saints: here are they that keep commandments and faith of Jesus' },
    ],
    relatedPillarNumber: 5,
    keyConcepts: ['Prophetic Remnant', 'Three Angels\' Messages', 'Commandments & Faith', 'Call Out of Babylon'],
  },
  {
    id: 'belief-14',
    number: 14,
    title: 'Unity in the Body of Christ',
    category: 'The Doctrine of the Church',
    summary:
      'The church is one body with many members, called from every nation, kindred, tongue, and people. In Christ we are a new creation; distinctions of race, culture, learning, and nationality, and differences between high and low, rich and poor, male and female, must not be divisive among us. We are all equal in Christ.',
    primaryAnchor: 'John 17:20-23; Galatians 3:28; Ephesians 4:3-6',
    primaryAnchorVerseId: 'joh-17-21',
    scriptureRefs: [
      'Psalm 133:1',
      'Matthew 28:19-20',
      'John 17:20-23',
      'Acts 17:26-27',
      'Romans 12:4-5',
      '1 Corinthians 12:12-14',
      'Galatians 3:27-29',
      'Ephesians 2:13-16',
      'Ephesians 4:3-6',
      'Colossians 3:10-15',
    ],
    scriptureAnchors: [
      { ref: 'John 17:21', verseId: 'joh-17-21', role: 'That they all may be one; as Thou, Father, art in Me, and I in Thee' },
      { ref: 'Galatians 3:28', verseId: 'gal-3-28', role: 'There is neither Jew nor Greek, bond nor free, male nor female: all one in Christ' },
      { ref: 'Ephesians 4:4-6', verseId: 'eph-4-4', role: 'One body, one Spirit, one hope, one Lord, one faith, one baptism, one God' },
    ],
    keyConcepts: ['Corporate Unity', 'Equality in Christ', 'Universal Brotherhood', 'Harmonious Fellowship'],
  },
  {
    id: 'belief-15',
    number: 15,
    title: 'Baptism',
    category: 'The Doctrine of the Church',
    summary:
      'By baptism we confess our faith in the death and resurrection of Jesus Christ, and testify of our death to sin and of our purpose to walk in newness of life. Baptism is by immersion in water and is contingent on an affirmation of faith in Jesus and evidence of repentance of sin.',
    primaryAnchor: 'Matthew 28:19-20; Romans 6:3-5; Acts 2:38; Colossians 2:12-13',
    primaryAnchorVerseId: 'rom-6-3',
    scriptureRefs: [
      'Matthew 28:19-20',
      'Mark 1:9-10',
      'Acts 2:38',
      'Acts 8:36-39',
      'Acts 16:30-33',
      'Acts 22:16',
      'Romans 6:1-6',
      'Galatians 3:27',
      'Colossians 2:12-13',
    ],
    scriptureAnchors: [
      { ref: 'Romans 6:3-5', verseId: 'rom-6-3', role: 'Buried with Him by baptism into death; raised to walk in newness of life' },
      { ref: 'Acts 2:38', verseId: 'act-2-38', role: 'Repent and be baptized every one of you in the name of Jesus Christ for remission' },
      { ref: 'Matthew 28:19', verseId: 'mat-28-19', role: 'Teach all nations, baptizing them in name of Father, Son, and Holy Ghost' },
    ],
    keyConcepts: ['Immersion', 'Death to Sin', 'Public Confession', 'Covenant Gateway'],
  },
  {
    id: 'belief-16',
    number: 16,
    title: 'The Lord\'s Supper',
    category: 'The Doctrine of the Church',
    summary:
      'The Lord\'s Supper is a participation in the emblems of the body and blood of Jesus as an expression of faith in Him, our Lord and Savior. Preparation for the Supper includes self-examination, repentance, and confession. The Master ordained the service of foot washing to signify renewed cleansing, to express a willingness to serve one another in Christlike humility, and to unite our hearts in love.',
    primaryAnchor: 'John 13:1-17; 1 Corinthians 11:23-29; Matthew 26:26-28',
    primaryAnchorVerseId: '1co-11-23',
    scriptureRefs: [
      'Matthew 26:17-30',
      'John 6:48-63',
      'John 13:1-17',
      '1 Corinthians 10:16-17',
      '1 Corinthians 11:23-30',
      'Revelation 3:20',
    ],
    scriptureAnchors: [
      { ref: '1 Corinthians 11:23-26', verseId: '1co-11-23', role: 'As often as ye eat this bread and drink this cup, ye shew Lord\'s death till He come' },
      { ref: 'John 13:14-15', verseId: 'joh-13-14', role: 'Foot washing: if I your Lord washed your feet, ye also ought to wash one another\'s' },
      { ref: 'Matthew 26:28', verseId: 'mat-26-28', role: 'My blood of the new testament, shed for many for the remission of sins' },
    ],
    keyConcepts: ['Ordinance of Humility', 'Memorial of Calvary', 'Communion of Saints', 'Anticipation of Second Advent'],
  },
  {
    id: 'belief-17',
    number: 17,
    title: 'Spiritual Gifts and Ministries',
    category: 'The Doctrine of the Church',
    summary:
      'God bestows upon all members of His church in every age spiritual gifts that each member is to employ in loving ministry for the common good of the church and of humanity. Given by the agency of the Holy Spirit, who apportions to each member as He wills, the gifts provide all abilities and ministries needed by the church.',
    primaryAnchor: 'Romans 12:4-8; 1 Corinthians 12:7-11, 27-28; Ephesians 4:8, 11-16',
    primaryAnchorVerseId: '1co-12-28',
    scriptureRefs: [
      'Romans 12:4-8',
      '1 Corinthians 12:7-11, 27-28',
      'Ephesians 4:8, 11-16',
      'Acts 6:1-7',
      '1 Timothy 3:1-13',
      '1 Peter 4:10-11',
    ],
    scriptureAnchors: [
      { ref: '1 Corinthians 12:28', verseId: '1co-12-28', role: 'God hath set some in the church: apostles, prophets, teachers, miracles, gifts' },
      { ref: 'Ephesians 4:11-13', verseId: 'eph-4-11', role: 'Equipping of the saints, for edifying of the body till unity of faith is reached' },
      { ref: '1 Peter 4:10', verseId: '1pe-4-10', role: 'As every man hath received the gift, minister the same as good stewards' },
    ],
    keyConcepts: ['Charismata', 'Every-Member Ministry', 'Edification of Church', 'Holy Spirit Sovereignty'],
  },
  {
    id: 'belief-18',
    number: 18,
    title: 'The Gift of Prophecy',
    category: 'The Doctrine of the Church',
    summary:
      'The Scriptures testify that one of the gifts of the Holy Spirit is prophecy. This gift is an identifying mark of the remnant church and we believe it was manifested in the ministry of Ellen G. White. Her writings speak with prophetic authority and provide comfort, guidance, instruction, and correction to the church, always pointing to the Bible as the supreme standard.',
    primaryAnchor: 'Amos 3:7; Joel 2:28-29; Revelation 12:17; Revelation 19:10',
    primaryAnchorVerseId: 'amo-3-7',
    scriptureRefs: [
      'Numbers 12:6',
      '2 Chronicles 20:20',
      'Amos 3:7',
      'Joel 2:28-29',
      'Acts 2:14-21',
      '2 Timothy 3:16-17',
      'Hebrews 1:1-3',
      'Revelation 12:17',
      'Revelation 19:10',
      'Revelation 22:8-9',
    ],
    scriptureAnchors: [
      { ref: 'Amos 3:7', verseId: 'amo-3-7', role: 'The Lord GOD will do nothing, but He revealeth His secret unto His servants the prophets' },
      { ref: 'Revelation 19:10', verseId: 'rev-19-10', role: 'The testimony of Jesus is the spirit of prophecy' },
      { ref: 'Joel 2:28', verseId: 'jol-2-28', role: 'Pour out My Spirit upon all flesh; sons and daughters shall prophesy' },
    ],
    relatedPillarNumber: 7,
    keyConcepts: ['Spirit of Prophecy', 'Identifying Remnant Mark', 'Visions & Dreams Protocol', 'Subordinate to Scripture'],
  },

  // ── V. The Doctrine of Daily Living ──────────────────────────────────────
  {
    id: 'belief-19',
    number: 19,
    title: 'The Law of God',
    category: 'The Doctrine of Daily Living',
    summary:
      'The great principles of God\'s law are embodied in the Ten Commandments and exemplified in the life of Christ. They express God\'s love, will, and purposes concerning human conduct and relationships and are binding upon all people in every age. These precepts are the basis of God\'s covenant with His people and the standard in God\'s judgment.',
    primaryAnchor: 'Exodus 20:1-17; Psalm 40:7-8; Matthew 5:17-20; James 2:10-12',
    primaryAnchorVerseId: 'exo-20-8',
    scriptureRefs: [
      'Exodus 20:1-17',
      'Deuteronomy 5:6-21',
      'Psalm 19:7-14',
      'Psalm 40:7-8',
      'Matthew 5:17-20',
      'Romans 7:7, 12',
      'Romans 8:3-4',
      'James 2:10-12',
      '1 John 5:3',
      'Hebrews 8:10',
    ],
    scriptureAnchors: [
      { ref: 'Exodus 20:1-17', verseId: 'exo-20-1', role: 'The Decalogue spoken by God\'s voice and engraved in stone' },
      { ref: 'Matthew 5:17-18', verseId: 'mat-5-17', role: 'Think not that I am come to destroy the law; till heaven and earth pass, one jot or tittle shall not pass' },
      { ref: 'James 2:10-12', verseId: 'jam-2-10', role: 'Law of liberty: whosoever offends in one point is guilty of all; judged by this standard' },
    ],
    relatedPillarNumber: 3,
    keyConcepts: ['Immutable Decalogue', 'Transcript of Divine Character', 'Standard of Judgment', 'Written on the Heart'],
  },
  {
    id: 'belief-20',
    number: 20,
    title: 'The Sabbath',
    category: 'The Doctrine of Daily Living',
    summary:
      'The gracious Creator, after the six days of Creation, rested on the seventh day and instituted the Sabbath for all people as a memorial of Creation. The fourth commandment of God\'s unchangeable law requires the observance of this seventh-day Sabbath as the day of rest, worship, and ministry in harmony with the teaching and practice of Jesus, the Lord of the Sabbath.',
    primaryAnchor: 'Genesis 2:1-3; Exodus 20:8-11; Luke 4:16; Isaiah 58:13-14',
    primaryAnchorVerseId: 'gen-2-2',
    scriptureRefs: [
      'Genesis 2:1-3',
      'Exodus 20:8-11',
      'Exodus 31:12-17',
      'Leviticus 23:32',
      'Deuteronomy 5:12-15',
      'Isaiah 56:5-6',
      'Isaiah 58:13-14',
      'Ezekiel 20:12, 20',
      'Matthew 12:1-12',
      'Mark 2:27-28',
      'Luke 4:16',
      'Hebrews 4:1-11',
    ],
    scriptureAnchors: [
      { ref: 'Genesis 2:2-3', verseId: 'gen-2-2', role: 'God rested on seventh day, blessed it, and sanctified it in Eden before sin' },
      { ref: 'Exodus 20:8-11', verseId: 'exo-20-8', role: 'Remember the Sabbath day to keep it holy: seventh day is Sabbath of the LORD' },
      { ref: 'Luke 4:16', verseId: 'luk-4-16', role: 'Jesus\' custom: went into synagogue on Sabbath day to read and worship' },
    ],
    relatedPillarNumber: 3,
    keyConcepts: ['Seventh-Day Sabbath', 'Edenic Institution', 'Sign of Sanctification', 'Perpetual Memorial'],
  },
  {
    id: 'belief-21',
    number: 21,
    title: 'Stewardship',
    category: 'The Doctrine of Daily Living',
    summary:
      'We are God\'s stewards, entrusted by Him with time and opportunities, abilities and possessions, and the blessings of the earth and its resources. We acknowledge God\'s ownership by faithful service to Him and our fellow human beings, and by returning tithe and giving offerings for the proclamation of His gospel and the support and growth of His church.',
    primaryAnchor: 'Genesis 1:26-28; Malachi 3:8-12; 1 Corinthians 9:9-14; 2 Corinthians 9:6-7',
    primaryAnchorVerseId: 'mal-3-8',
    scriptureRefs: [
      'Genesis 1:26-28',
      'Genesis 2:15',
      '1 Chronicles 29:14',
      'Haggai 1:3-11',
      'Malachi 3:8-12',
      'Matthew 23:23',
      '1 Corinthians 9:9-14',
      '2 Corinthians 8:1-15',
      '2 Corinthians 9:6-7',
    ],
    scriptureAnchors: [
      { ref: 'Malachi 3:10', verseId: 'mal-3-10', role: 'Bring all the tithes into the storehouse; prove Me now herewith, open windows of heaven' },
      { ref: '1 Chronicles 29:14', verseId: '1ch-29-14', role: 'All things come of Thee, and of Thine own have we given Thee' },
      { ref: '2 Corinthians 9:7', verseId: '2co-9-7', role: 'Every man according as he purposeth in his heart: God loveth a cheerful giver' },
    ],
    keyConcepts: ['Biblical Tithing', 'Stewardship of Earth', 'Storehouse Principle', 'Gratitude to Sovereign Owner'],
  },
  {
    id: 'belief-22',
    number: 22,
    title: 'Christian Behavior',
    category: 'The Doctrine of Daily Living',
    summary:
      'We are called to be a godly people who think, feel, and act in harmony with biblical principles in all aspects of personal and social life. For the Spirit to recreate in us the character of our Lord we involve ourselves only in those things that will produce Christlike purity, health, and joy in our lives. Our bodies are the temples of the Holy Spirit, requiring wholesome diet, exercise, and abstinence from unclean foods and harmful substances.',
    primaryAnchor: '1 Corinthians 6:19-20; Romans 12:1-2; Philippians 4:8; Leviticus 11',
    primaryAnchorVerseId: '1co-6-19',
    scriptureRefs: [
      'Leviticus 11:1-47',
      'Romans 12:1-2',
      '1 Corinthians 6:19-20',
      '1 Corinthians 10:31',
      '2 Corinthians 6:14-7:1',
      'Philippians 4:8',
      '1 Timothy 2:9-10',
      'Titus 2:11-12',
      '1 Peter 3:1-4',
      '3 John 2',
    ],
    scriptureAnchors: [
      { ref: '1 Corinthians 6:19-20', verseId: '1co-6-19', role: 'Your body is the temple of the Holy Ghost; bought with a price, glorify God in body' },
      { ref: '1 Corinthians 10:31', verseId: '1co-10-31', role: 'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God' },
      { ref: 'Romans 12:1-2', verseId: 'rom-12-1', role: 'Present your bodies a living sacrifice, holy, acceptable unto God' },
    ],
    keyConcepts: ['Temple of Holy Spirit', 'Health Reform', 'Levitical Dietary Laws', 'Modesty & Separation from World'],
  },
  {
    id: 'belief-23',
    number: 23,
    title: 'Marriage and the Family',
    category: 'The Doctrine of Daily Living',
    summary:
      'Marriage was divinely established in Eden and affirmed by Jesus to be a lifelong union between a man and a woman in loving companionship. For the Christian a marriage commitment is to God as well as to the spouse, and should be entered into only between a man and a woman who share a common faith. Mutual respect, love, responsibility, and nurture are the fabric of this relationship.',
    primaryAnchor: 'Genesis 2:18-25; Matthew 19:3-9; Ephesians 5:21-33',
    primaryAnchorVerseId: 'gen-2-24',
    scriptureRefs: [
      'Genesis 2:18-25',
      'Exodus 20:12',
      'Deuteronomy 6:5-9',
      'Proverbs 22:6',
      'Malachi 4:5-6',
      'Matthew 19:3-9',
      'Ephesians 5:21-33',
      'Ephesians 6:1-4',
      'Hebrews 13:4',
      '1 Peter 3:1-7',
    ],
    scriptureAnchors: [
      { ref: 'Genesis 2:24', verseId: 'gen-2-24', role: 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: one flesh' },
      { ref: 'Matthew 19:4-6', verseId: 'mat-19-4', role: 'He which made them at the beginning made them male and female; what God joined, let not man sever' },
      { ref: 'Ephesians 5:25', verseId: 'eph-5-25', role: 'Husbands, love your wives, even as Christ also loved the church, and gave Himself for it' },
    ],
    keyConcepts: ['Edenic Covenant', 'Lifelong Union', 'Family Nurture', 'Type of Christ and Church'],
  },

  // ── VI. The Doctrine of Last Things ──────────────────────────────────────
  {
    id: 'belief-24',
    number: 24,
    title: 'Christ\'s Ministry in the Heavenly Sanctuary',
    category: 'The Doctrine of Last Things',
    summary:
      'There is a sanctuary in heaven, the true tabernacle that the Lord pitched and not man. In it Christ ministers on our behalf, making available to believers the benefits of His atoning sacrifice. In 1844, at the end of the prophetic period of 2300 days (Daniel 8:14), He entered the second and last phase of His atoning ministry — the investigative judgment which portends the cleansing of the heavenly sanctuary.',
    primaryAnchor: 'Daniel 8:14; Hebrews 8:1-2; Hebrews 9:23-24; Leviticus 16:16-19',
    primaryAnchorVerseId: 'dan-8-14',
    scriptureRefs: [
      'Leviticus 16:16-19',
      'Daniel 7:9-10, 22',
      'Daniel 8:14',
      'Daniel 9:24-27',
      'Hebrews 1:3',
      'Hebrews 4:14-16',
      'Hebrews 8:1-5',
      'Hebrews 9:11-28',
      'Revelation 11:19',
      'Revelation 14:6-7',
      'Revelation 22:11-12',
    ],
    scriptureAnchors: [
      { ref: 'Daniel 8:14', verseId: 'dan-8-14', role: 'Unto 2,300 days; then shall the sanctuary be cleansed (nitsdaq)' },
      { ref: 'Hebrews 8:1-2', verseId: 'heb-8-1', role: 'High Priest of the true tabernacle, which the Lord pitched and not man' },
      { ref: 'Leviticus 16:16', verseId: 'lev-16-16', role: 'Yom Kippur type: make an atonement for the holy place because of uncleanness' },
      { ref: 'Revelation 11:19', verseId: 'rev-11-19', role: 'Temple of God opened in heaven: ark of His testament seen in Most Holy Place' },
    ],
    relatedPillarNumber: 1,
    keyConcepts: ['Heavenly Sanctuary', 'Investigative Judgment', '1844 Date-Anchor', 'Most Holy Place Ministry'],
  },
  {
    id: 'belief-25',
    number: 25,
    title: 'The Second Coming of Christ',
    category: 'The Doctrine of Last Things',
    summary:
      'The second coming of Christ is the blessed hope of the church, the grand climax of the gospel. The Savior\'s coming will be literal, personal, visible, and worldwide. When He returns, the righteous dead will be resurrected, and together with the righteous living will be glorified and taken to heaven, but the unrighteous will die.',
    primaryAnchor: 'Titus 2:13; Matthew 24:30; 1 Thessalonians 4:16-17; Revelation 1:7',
    primaryAnchorVerseId: 'tit-2-13',
    scriptureRefs: [
      'Matthew 24:1-51',
      'John 14:1-3',
      'Acts 1:9-11',
      '1 Corinthians 15:51-54',
      '1 Thessalonians 4:13-18',
      '2 Thessalonians 1:7-10',
      'Titus 2:13',
      'Hebrews 9:28',
      'Revelation 1:7',
      'Revelation 14:14-20',
      'Revelation 19:11-21',
    ],
    scriptureAnchors: [
      { ref: 'Titus 2:13', verseId: 'tit-2-13', role: 'Looking for that blessed hope, and the glorious appearing of the great God and our Saviour' },
      { ref: '1 Thessalonians 4:16-17', verseId: '1th-4-16', role: 'Lord shall descend with a shout, voice of archangel; dead in Christ rise first' },
      { ref: 'Revelation 1:7', verseId: 'rev-1-7', role: 'Behold, He cometh with clouds; and every eye shall see Him' },
    ],
    relatedPillarNumber: 8,
    keyConcepts: ['Blessed Hope', 'Literal Visible Advent', 'Worldwide Climax', 'First Resurrection'],
  },
  {
    id: 'belief-26',
    number: 26,
    title: 'Death and Resurrection',
    category: 'The Doctrine of Last Things',
    summary:
      'The wages of sin is death. But God, who alone is immortal, will grant eternal life to His redeemed. Until that day death is an unconscious state for all people. When Christ, who is our life, appears, the resurrected righteous and the living righteous will be glorified and caught up to meet their Lord. The second resurrection, the resurrection of the unrighteous, will take place a thousand years later.',
    primaryAnchor: '1 Thessalonians 4:13-17; 1 Corinthians 15:51-54; Ecclesiastes 9:5-6, 10; 1 Timothy 6:16',
    primaryAnchorVerseId: '1th-4-16',
    scriptureRefs: [
      'Job 19:25-27',
      'Psalm 146:3-4',
      'Ecclesiastes 9:5-6, 10',
      'Daniel 12:2',
      'John 5:28-29',
      'John 11:11-14',
      'Romans 6:23',
      '1 Corinthians 15:51-54',
      '1 Thessalonians 4:13-17',
      '1 Timothy 6:15-16',
      'Revelation 20:1-10',
    ],
    scriptureAnchors: [
      { ref: '1 Corinthians 15:51-54', verseId: '1co-15-51', role: 'In a moment, in the twinkling of an eye, mortal puts on immortality' },
      { ref: 'John 11:11-14', verseId: 'joh-11-11', role: 'Jesus speaks plainly: "Our friend Lazarus sleepeth... Lazarus is dead"' },
      { ref: '1 Timothy 6:16', verseId: '1ti-6-16', role: 'God alone possesses immortality, dwelling in unapproachable light' },
    ],
    relatedPillarNumber: 4,
    keyConcepts: ['Conditional Immortality', 'Soul Sleep', 'Bodily Resurrection', 'Second Resurrection'],
  },
  {
    id: 'belief-27',
    number: 27,
    title: 'The Millennium and the End of Sin',
    category: 'The Doctrine of Last Things',
    summary:
      'The millennium is the thousand-year reign of Christ with His saints in heaven between the first and second resurrections. During this time the wicked dead are judged; the earth is utterly desolate, without living human inhabitants, but occupied by Satan and his angels. At its close Christ with His saints and the Holy City will descend from heaven to earth. The unrighteous dead will then be resurrected, and with Satan and his angels will surround the city; but fire from God will consume them and cleanse the earth. The universe will thus be freed from sin and sinners forever.',
    primaryAnchor: 'Revelation 20:1-15; 1 Corinthians 6:2-3; Jeremiah 4:23-26; Malachi 4:1-3',
    primaryAnchorVerseId: 'rev-20-4',
    scriptureRefs: [
      'Jeremiah 4:23-26',
      'Ezekiel 28:18-19',
      'Malachi 4:1-3',
      '1 Corinthians 6:2-3',
      'Revelation 20:1-15',
      'Revelation 21:8',
      '2 Peter 3:10',
    ],
    scriptureAnchors: [
      { ref: 'Revelation 20:4', verseId: 'rev-20-4', role: 'Saints lived and reigned with Christ a thousand years; judgment was given unto them' },
      { ref: 'Jeremiah 4:23-26', verseId: 'jer-4-23', role: 'Earth without form and void, no man, cities broken down before the LORD' },
      { ref: 'Malachi 4:1-3', verseId: 'mal-4-1', role: 'Day cometh that shall burn as an oven; wicked become ashes under soles of feet' },
    ],
    relatedPillarNumber: 8,
    keyConcepts: ['1,000-Year Millennium', 'Satan Bound to Desolate Earth', 'Heavenly Review Judgment', 'Lake of Fire / Second Death'],
  },
  {
    id: 'belief-28',
    number: 28,
    title: 'The Earth Made New',
    category: 'The Doctrine of Last Things',
    summary:
      'On the earth made new, in which righteousness dwells, God will provide an eternal home for the redeemed and a perfect environment for life, love, wisdom, and knowledge in His presence. For here God Himself will dwell with His people, and suffering and death will have passed away. The great controversy will be ended, and sin will be no more. All things, animate and inanimate, will declare that God is love; and He shall reign forever and ever.',
    primaryAnchor: 'Revelation 21:1-5; Revelation 22:1-5; 2 Peter 3:13; Isaiah 65:17-25',
    primaryAnchorVerseId: 'rev-21-1',
    scriptureRefs: [
      'Isaiah 35:1-10',
      'Isaiah 65:17-25',
      'Matthew 5:5',
      '2 Peter 3:13',
      'Revelation 21:1-7',
      'Revelation 22:1-5',
      'Nahum 1:9',
    ],
    scriptureAnchors: [
      { ref: 'Revelation 21:1-4', verseId: 'rev-21-1', role: 'New heaven and new earth; God tabernacles with men; no more death, sorrow, crying' },
      { ref: 'Revelation 22:1-3', verseId: 'rev-22-1', role: 'Pure river of water of life; tree of life; no more curse; throne of God and Lamb' },
      { ref: 'Nahum 1:9', verseId: 'nam-1-9', role: 'What do ye imagine against the LORD? He will make an utter end: affliction shall not rise up the second time' },
    ],
    relatedPillarNumber: 8,
    keyConcepts: ['New Jerusalem', 'Eden Restored', 'Unbroken Fellowship', 'Affliction Never Rises Again'],
  },
];

export const BELIEF_CATEGORIES: BeliefCategory[] = [
  'The Doctrine of God',
  'The Doctrine of Humanity',
  'The Doctrine of Salvation',
  'The Doctrine of the Church',
  'The Doctrine of Daily Living',
  'The Doctrine of Last Things',
];

export function getBeliefsByCategory(category: BeliefCategory): FundamentalBelief[] {
  return FUNDAMENTAL_BELIEFS.filter(b => b.category === category);
}

export function getBeliefByNumber(n: number): FundamentalBelief | undefined {
  return FUNDAMENTAL_BELIEFS.find(b => b.number === n);
}
