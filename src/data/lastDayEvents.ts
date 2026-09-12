/**
 * The Great Controversy & Last Day Events (GC & LDE)
 * Historicist chronological timeline from the cosmic origin of evil to the Earth Made New.
 */

export type LdeEra =
  | 'Cosmic Origins & Enmity'
  | 'The Historic Sanctuary & 1844'
  | 'The Final Conflict & False Worship'
  | 'The Close of Probation & Plagues'
  | 'The Glorious Second Advent'
  | 'The Millennium & New Earth';

export interface LdeStep {
  ref: string;
  verseId: string;
  title: string;
  connection: string;
}

export interface LastDayEventPhase {
  id: string;
  phase: number;
  era: LdeEra;
  title: string;
  subtitle: string;
  primaryAnchor: string;
  primaryAnchorVerseId: string;
  biblicalSummary: string;
  theologicalSignificance: string;
  scriptureSequence: LdeStep[];
  historicistFulfillment: string;
}

export const LAST_DAY_EVENTS: LastDayEventPhase[] = [
  // ── Era 1: Cosmic Origins & Enmity ─────────────────────────────────────────
  {
    id: 'lde-1',
    phase: 1,
    era: 'Cosmic Origins & Enmity',
    title: 'The Origin of Evil in Heaven: Lucifer\'s Rebellion',
    subtitle: 'Cosmic war arises over God\'s law and character',
    primaryAnchor: 'Isaiah 14:12-15; Ezekiel 28:12-19; Revelation 12:7-9',
    primaryAnchorVerseId: 'isa-14-12',
    biblicalSummary:
      'Sin did not originate on earth. Lucifer, the highest covering cherub endowed with unrivaled wisdom and beauty, allowed pride and self-exaltation to corrupt his heart. Desiring equality with the Most High, he challenged God\'s law and government, deceiving a third of the angels. War in heaven resulted in Michael (Christ) casting Satan and his rebels down to earth.',
    theologicalSignificance:
      'God did not create a devil; He created a glorious, holy cherub with free will. Evil is an inexplicable intruder (mysterium iniquitatis) that God will unmask and eliminate without violating the freedom of His creatures.',
    scriptureSequence: [
      { ref: 'Isaiah 14:12-15', verseId: 'isa-14-12', title: 'Self-Exaltation', connection: '"I will ascend into heaven... I will be like the most High."' },
      { ref: 'Ezekiel 28:12-17', verseId: 'ezk-28-12', title: 'The Covering Cherub', connection: 'Perfect in beauty till iniquity was found in him through abundance of pride.' },
      { ref: 'Revelation 12:7-9', verseId: 'rev-12-7', title: 'Expulsion from Heaven', connection: 'Michael and His angels fought against the dragon, cast out into the earth.' },
    ],
    historicistFulfillment:
      'Cosmic prologue to all human history. Establishes the real adversary behind all deception and persecution across the ages.',
  },
  {
    id: 'lde-2',
    phase: 2,
    era: 'Cosmic Origins & Enmity',
    title: 'The Fall of Man & The Protoevangelium (Enmity Promise)',
    subtitle: 'The earthly battlefield opened; redemption announced',
    primaryAnchor: 'Genesis 3:1-15; Romans 5:12-21',
    primaryAnchorVerseId: 'gen-3-15',
    biblicalSummary:
      'By yielding to the serpent\'s lie, Adam and Eve forfeited dominion, severed union with God, and brought sin, suffering, and mortality upon the human race. In the midst of the curse, God gave the first gospel promise (Protoevangelium): supernatural enmity between the serpent and the woman, culminating in the Seed of the woman crushing the serpent\'s head at the cost of a bruised heel.',
    theologicalSignificance:
      'Enmity against sin is not innate to human nature; it is an implanted divine gift. The promise guarantees that salvation is entirely by divine initiative through the promised Redeemer.',
    scriptureSequence: [
      { ref: 'Genesis 3:1-6', verseId: 'gen-3-6', title: 'The Fall', connection: 'Doubt of God\'s Word leads to disobedience and spiritual death.' },
      { ref: 'Genesis 3:15', verseId: 'gen-3-15', title: 'The First Promise', connection: 'Enmity between the serpent and woman; Seed shall bruise serpent\'s head.' },
      { ref: 'Romans 5:18-19', verseId: 'rom-5-19', title: 'Second Adam', connection: 'As by one disobedience many were made sinners, by one obedience many made righteous.' },
    ],
    historicistFulfillment:
      'Inauguration of the covenant of grace and animal sacrifices pointing to the coming Lamb of God.',
  },
  {
    id: 'lde-3',
    phase: 3,
    era: 'Cosmic Origins & Enmity',
    title: 'The Decisive Victory at Calvary',
    subtitle: 'The Cross forever disarms Satan\'s charges',
    primaryAnchor: 'John 12:31-32; Colossians 2:14-15; Hebrews 2:14',
    primaryAnchorVerseId: 'col-2-15',
    biblicalSummary:
      'At the Cross, Jesus yielded His sinless life as the complete substitutionary sacrifice for the sins of the world. Satan revealed his true murderous character before the onlooking unfallen universe. Christ triumphed over principalities and powers, ratifying the new covenant with His own blood and sealing the adversary\'s ultimate doom.',
    theologicalSignificance:
      'Calvary decided the controversy forever in principle. The unfallen universe saw God\'s infinite, self-sacrificing love juxtaposed against the adversary\'s merciless tyranny.',
    scriptureSequence: [
      { ref: 'John 12:31-32', verseId: 'joh-12-31', title: 'Prince Cast Out', connection: '"Now is the judgment of this world: now shall the prince of this world be cast out."' },
      { ref: 'Colossians 2:14-15', verseId: 'col-2-15', title: 'Triumph on the Cross', connection: 'Blotting out handwriting of ordinances; spoiling principalities openly.' },
      { ref: 'Hebrews 2:14', verseId: 'heb-2-14', title: 'Adversary Destroyed', connection: 'Through death He might destroy him that had the power of death, that is, the devil.' },
    ],
    historicistFulfillment:
      'Spring 31 AD: Crucifixion at the exact middle of Daniel\'s 70th week, ending the validity of the earthly sacrificial shadow.',
  },

  // ── Era 2: The Historic Sanctuary & 1844 ──────────────────────────────────
  {
    id: 'lde-4',
    phase: 4,
    era: 'The Historic Sanctuary & 1844',
    title: 'The 1260-Year Wilderness & Papal Supremacy (538–1798 AD)',
    subtitle: 'The Little Horn attacks the law and sanctuary truth',
    primaryAnchor: 'Daniel 7:25; Revelation 12:6, 14; Revelation 13:5',
    primaryAnchorVerseId: 'dan-7-25',
    biblicalSummary:
      'The prophecy foretold that a persecuting power would arise out of the Roman Empire, speaking great words against the Most High, wearing out the saints, and thinking to change God\'s times and laws for a time, times, and half a time (1,260 prophetic day-years). During this period the church fled into the wilderness while scriptural truth and Christ\'s sole high priesthood were obscured by human tradition.',
    theologicalSignificance:
      'Demonstrates the danger of institutionalized apostasy and counterfeit priesthood substituting human works and Sunday observance for Christ\'s heavenly ministry and the seventh-day Sabbath.',
    scriptureSequence: [
      { ref: 'Daniel 7:25', verseId: 'dan-7-25', title: 'Times and Laws Changed', connection: 'Apostate power seeks to alter the Decalogue (Sabbath) during 1260 day-years.' },
      { ref: 'Revelation 12:6', verseId: 'rev-12-6', title: 'Woman in Wilderness', connection: 'God preserves the persecuted faithful church for 1,260 prophetic days.' },
      { ref: 'Revelation 13:5', verseId: 'rev-13-5', title: 'Forty-Two Months', connection: 'Power given unto the beast to continue forty and two prophetic months.' },
    ],
    historicistFulfillment:
      '538 AD (Justinian code / Ostrogoth defeat) to 1798 AD (Berthier captures Pope Pius VI, ending civil supremacy and inflicting the deadly wound).',
  },
  {
    id: 'lde-5',
    phase: 5,
    era: 'The Historic Sanctuary & 1844',
    title: 'The End of the 2,300 Days (1844): Sanctuary Cleansing & Investigative Judgment',
    subtitle: 'The pre-advent judgment begins in the Most Holy Place',
    primaryAnchor: 'Daniel 8:14; Daniel 7:9-10; Revelation 11:19; Revelation 14:7',
    primaryAnchorVerseId: 'dan-8-14',
    biblicalSummary:
      'At the close of the 2,300 prophetic day-years dating from the decree to restore Jerusalem (457 BC), the cosmic Day of Atonement commenced in October 1844. Jesus entered the Most Holy Place of the heavenly sanctuary before the Ancient of Days to inaugurate the final work of investigative judgment, vindicating God\'s character and blotting out the sins of all who have placed their faith in Him.',
    theologicalSignificance:
      'The pre-advent judgment guarantees transparency before the universe. When Jesus returns, His reward is with Him (Rev 22:12); each case has already been decided before the descent.',
    scriptureSequence: [
      { ref: 'Daniel 8:14', verseId: 'dan-8-14', title: 'The 2,300 Days', connection: 'Unto two thousand and three hundred days; then shall the sanctuary be cleansed.' },
      { ref: 'Daniel 7:9-10', verseId: 'dan-7-9', title: 'Court is Seated', connection: 'Thrones cast down, Ancient of Days sits, judgment set, and books opened.' },
      { ref: 'Revelation 14:7', verseId: 'rev-14-7', title: 'Hour of His Judgment', connection: 'First Angel proclaims to every nation: "The hour of His judgment is come."' },
    ],
    historicistFulfillment:
      'October 22, 1844: Antitypical Yom Kippur begins; Christ passes into the second apartment of the heavenly sanctuary.',
  },

  // ── Era 3: The Final Conflict & False Worship ─────────────────────────────
  {
    id: 'lde-6',
    phase: 6,
    era: 'The Final Conflict & False Worship',
    title: 'The Shaking & Sifting of the Remnant',
    subtitle: 'The straight testimony purifies the church',
    primaryAnchor: 'Amos 9:9; Revelation 3:14-21; Ezekiel 9:1-6',
    primaryAnchorVerseId: 'amo-9-9',
    biblicalSummary:
      'Before probation closes, a profound sifting occurs within God\'s professed people. The True Witness calls the Laodicean church out of lukewarm self-sufficiency to purchase gold tried in fire, white raiment, and eyesalve. Those who reject the straight testimony and compromise with the world are sifted out, while those who repent are fortified to stand in the coming crisis.',
    theologicalSignificance:
      'God requires a pure, authentic people reflecting Christ\'s character unblemished. Only genuine faith rooted in Sola Scriptura can survive the final delusions.',
    scriptureSequence: [
      { ref: 'Amos 9:9', verseId: 'amo-9-9', title: 'Sifting the House', connection: 'Sift the house of Israel among all nations, yet not the least grain fall to earth.' },
      { ref: 'Revelation 3:18-19', verseId: 'rev-3-18', title: 'Laodicean Remedy', connection: 'Gold tried in fire, white raiment, and eyesalve to see; be zealous and repent.' },
      { ref: 'Ezekiel 9:4', verseId: 'ezk-9-4', title: 'Mark on the Foreheads', connection: 'Set a mark upon foreheads of men that sigh and cry for all abominations.' },
    ],
    historicistFulfillment:
      'Ongoing internal spiritual purification and doctrinal shaking through persecution, worldly allurements, and theological compromise.',
  },
  {
    id: 'lde-7',
    phase: 7,
    era: 'The Final Conflict & False Worship',
    title: 'The Mark of the Beast & National Sunday Law Crisis',
    subtitle: 'Coercive state legislation enforces false worship',
    primaryAnchor: 'Revelation 13:11-17; Revelation 14:9-11; Exodus 20:8-11',
    primaryAnchorVerseId: 'rev-13-11',
    biblicalSummary:
      'The two-horned beast (apostate Protestantism in the United States) causes the earth to make an image to the first beast (the papacy), demanding universal homage through economic boycotts and a death decree. The crisis centers on the authority to establish the day of worship: the Creator\'s Seventh-day Sabbath (the Seal of God) versus human-ordained Sunday observance (the Mark of the Beast).',
    theologicalSignificance:
      'Worship is the ultimate battleground of the cosmic conflict. Coercion is Satan\'s signature method; love and voluntary obedience are God\'s signature method.',
    scriptureSequence: [
      { ref: 'Revelation 13:11-12', verseId: 'rev-13-11', title: 'Earth Beast Speaks as Dragon', connection: 'Exercises all the power of the first beast, causing earth to worship it.' },
      { ref: 'Revelation 13:16-17', verseId: 'rev-13-16', title: 'Economic Boycott & Mark', connection: 'Causes all to receive a mark in right hand or foreheads; no man might buy or sell.' },
      { ref: 'Revelation 14:9-10', verseId: 'rev-14-9', title: 'Third Angel Warning', connection: 'If any man worship the beast and receive his mark, he shall drink wine of God\'s wrath.' },
    ],
    historicistFulfillment:
      'Impending legislative enforcement of religious rest days, uniting church and state in violation of conscience.',
  },
  {
    id: 'lde-8',
    phase: 8,
    era: 'The Final Conflict & False Worship',
    title: 'The Latter Rain & The Loud Cry of the Third Angel',
    subtitle: 'Pentecostal power illuminates the entire earth',
    primaryAnchor: 'Joel 2:23, 28-32; Revelation 18:1-4; Hosea 6:3',
    primaryAnchorVerseId: 'rev-18-1',
    biblicalSummary:
      'Just as the early rain fell at Pentecost to germinate the gospel seed, the Latter Rain is poured out by the Holy Spirit in unprecedented measure upon the remnant church to ripen the harvest. A mighty angel descends from heaven having great power, and the earth is lightened with his glory, shouting: "Babylon the great is fallen... Come out of her, My people!" Thousands respond to the call.',
    theologicalSignificance:
      'God never permits the final crisis without providing supernatural grace and boldness to His witnesses. Every honest soul in Babylon is given light to escape.',
    scriptureSequence: [
      { ref: 'Joel 2:23, 28', verseId: 'jol-2-28', title: 'Latter Rain Outpouring', connection: 'Pour out My Spirit upon all flesh; early rain and latter rain in first month.' },
      { ref: 'Revelation 18:1-2', verseId: 'rev-18-1', title: 'Earth Lightened with Glory', connection: 'Angel with great power; earth illuminated; Babylon is fallen.' },
      { ref: 'Revelation 18:4', verseId: 'rev-18-4', title: 'Universal Summons', connection: '"Come out of her, My people, that ye be not partakers of her sins."' },
    ],
    historicistFulfillment:
      'The final worldwide missionary proclamation preceding the close of human probation.',
  },
  {
    id: 'lde-9',
    phase: 9,
    era: 'The Final Conflict & False Worship',
    title: 'The Sealing of the 144,000 & God\'s Remnant',
    subtitle: 'Settled into the truth intellectually and spiritually',
    primaryAnchor: 'Revelation 7:1-8; Revelation 14:1-5; Ezekiel 9:4',
    primaryAnchorVerseId: 'rev-7-2',
    biblicalSummary:
      'Four angels hold back the four winds of strife on earth until the servants of God are sealed in their foreheads with the Seal of the Living God. The seal is not a visible stamp, but an intellectual and spiritual settling into the truth so that believers cannot be moved. They have the Father\'s name written in their foreheads and follow the Lamb whithersoever He goeth.',
    theologicalSignificance:
      'The seal guarantees divine protection through the time of trouble. It designates the total restoration of God\'s moral image in the characters of His people.',
    scriptureSequence: [
      { ref: 'Revelation 7:2-3', verseId: 'rev-7-2', title: 'Holding the Winds', connection: 'Hurt not earth, sea, nor trees till we have sealed servants of God in foreheads.' },
      { ref: 'Revelation 14:1', verseId: 'rev-14-1', title: 'Father\'s Name in Foreheads', connection: 'A Lamb stood on mount Sion, with 144,000 having Father\'s name written.' },
      { ref: 'Revelation 14:4-5', verseId: 'rev-14-4', title: 'Spotless Remnant', connection: 'Firstfruits unto God and the Lamb; in their mouth was found no guile: without fault.' },
    ],
    historicistFulfillment:
      'Final character perfection and spiritual consolidation under the testing truth of the Fourth Commandment.',
  },

  // ── Era 4: The Close of Probation & Plagues ───────────────────────────────
  {
    id: 'lde-10',
    phase: 10,
    era: 'The Close of Probation & Plagues',
    title: 'The Close of Human Probation',
    subtitle: 'Christ concludes His mediatorial priesthood',
    primaryAnchor: 'Revelation 22:11; Daniel 12:1; Genesis 7:16',
    primaryAnchorVerseId: 'rev-22-11',
    biblicalSummary:
      'When the investigative judgment concludes and every human destiny is fixed, Christ casts down the censer, ceases His intercession in the heavenly sanctuary, and pronounces the irrevocable fiat: "He that is unjust, let him be unjust still... and he that is righteous, let him be righteous still." The door of mercy closes, as did the door of Noah\'s ark.',
    theologicalSignificance:
      'Marks the end of mediation. The righteous must now live by faith in the sight of a holy God without a mediator, upheld entirely by the imputed and imparted righteousness of Christ.',
    scriptureSequence: [
      { ref: 'Revelation 22:11', verseId: 'rev-22-11', title: 'The Solemn Decree', connection: '"He that is unjust, let him be unjust still... he that is holy, let him be holy still."' },
      { ref: 'Daniel 12:1', verseId: 'dan-12-1', title: 'Michael Stands Up', connection: 'Michael stands up; at that time shall thy people be delivered, every one found written in book.' },
      { ref: 'Revelation 15:8', verseId: 'rev-15-8', title: 'Temple Filled with Smoke', connection: 'No man was able to enter into the temple till the seven plagues were fulfilled.' },
    ],
    historicistFulfillment:
      'Final transition from Christ\'s high-priestly atonement to His assumption of kingly authority.',
  },
  {
    id: 'lde-11',
    phase: 11,
    era: 'The Close of Probation & Plagues',
    title: 'The Time of Jacob\'s Trouble',
    subtitle: 'Agonizing wrestling of faith amid a universal death decree',
    primaryAnchor: 'Jeremiah 30:7; Daniel 12:1; Genesis 32:24-30',
    primaryAnchorVerseId: 'jer-30-7',
    biblicalSummary:
      'As wicked rulers issue a death decree against those refusing the beast\'s mark, God\'s people flee to mountains and solitary places. Like Jacob wrestling at Peniel, they pass through intense mental agony, fearing their sins have not been pardoned. But having confessed all known sins, they hold fast to God\'s promises with unyielding faith, and their deliverance is assured.',
    theologicalSignificance:
      'Purges all remaining self-reliance and fear of death, proving to the universe that love for God is supreme even when stripped of all earthly security.',
    scriptureSequence: [
      { ref: 'Jeremiah 30:7', verseId: 'jer-30-7', title: 'Time of Jacob\'s Trouble', connection: 'Alas! for that day is great, so that none is like it: time of Jacob\'s trouble; but he shall be saved out of it.' },
      { ref: 'Daniel 12:1', verseId: 'dan-12-1', title: 'Unparalleled Trouble', connection: 'A time of trouble, such as never was since there was a nation.' },
      { ref: 'Genesis 32:26', verseId: 'gen-32-26', title: 'Jacob\'s Cling', connection: '"I will not let Thee go, except Thou bless me."' },
    ],
    historicistFulfillment:
      'Spiritual and physical extremity of the remnant immediately prior to Christ\'s physical appearance.',
  },
  {
    id: 'lde-12',
    phase: 12,
    era: 'The Close of Probation & Plagues',
    title: 'The Seven Last Plagues',
    subtitle: 'Unmingled wrath poured out on apostate persecutors',
    primaryAnchor: 'Revelation 15:1-8; Revelation 16:1-21; Psalm 91:1-10',
    primaryAnchorVerseId: 'rev-16-1',
    biblicalSummary:
      'God\'s unmingled judgments (the wine of His wrath poured out without mixture of mercy) strike those who received the mark of the beast: 1) grievous sores; 2) sea turned to blood; 3) rivers turned to blood; 4) scorching sun; 5) darkness on the beast\'s kingdom; 6) Euphrates dried up for kings of the East (Armageddon); and 7) great earthquake, hail, and the Voice from the throne: "It is done!"',
    theologicalSignificance:
      'Not retributive malice, but the vindication of divine justice and the dismantling of the global oppressive system. God\'s people are supernaturally shielded under Psalm 91.',
    scriptureSequence: [
      { ref: 'Revelation 16:1-2', verseId: 'rev-16-1', title: 'First Plague: Sores', connection: 'Poured vial upon earth: noisome and grievous sore upon men with mark of beast.' },
      { ref: 'Revelation 16:12-14', verseId: 'rev-16-12', title: 'Sixth Plague: Armageddon', connection: 'Euphrates dried up; three unclean spirits like frogs gather kings of whole world.' },
      { ref: 'Revelation 16:17-18', verseId: 'rev-16-17', title: 'Seventh Plague: It is Done', connection: 'Seventh angel pours vial into air; great voice out of temple: "It is done!"' },
    ],
    historicistFulfillment:
      'Literal catastrophic visitations falling upon the unrepentant persecutors prior to the Second Advent.',
  },

  // ── Era 5: The Glorious Second Advent ─────────────────────────────────────
  {
    id: 'lde-13',
    phase: 13,
    era: 'The Glorious Second Advent',
    title: 'The Deliverance of God\'s People & The Voice of God',
    subtitle: 'Midnight deliverance breaks the power of the death decree',
    primaryAnchor: 'Joel 3:16; Jeremiah 25:30-31; Revelation 16:17-18',
    primaryAnchorVerseId: 'jol-3-16',
    biblicalSummary:
      'At the midnight hour, when mobs prepare to slaughter God\'s faithful people, the Lord speaks with a voice that shakes heaven and earth. The sun shines at midnight, mountains are moved out of their places, islands flee away, and God announces the day and hour of Jesus\' coming, conferring His everlasting covenant of peace upon His saints.',
    theologicalSignificance:
      'Demonstrates that God intervenes at the critical second when all earthly hope has failed, honoring those who risked everything for His truth.',
    scriptureSequence: [
      { ref: 'Joel 3:16', verseId: 'jol-3-16', title: 'The Lord Shall Roar', connection: 'The LORD also shall roar out of Zion, heavens and earth shake; but LORD hope of His people.' },
      { ref: 'Jeremiah 25:30', verseId: 'jer-25-30', title: 'Voice from on High', connection: 'The LORD shall roar from on high, and utter His voice from His holy habitation.' },
      { ref: 'Revelation 16:17', verseId: 'rev-16-17', title: '"It is Done"', connection: 'A great voice out of the temple of heaven, from the throne, saying, It is done.' },
    ],
    historicistFulfillment:
      'Immediate supernatural prelude to the visible appearance of Jesus in the eastern sky.',
  },
  {
    id: 'lde-14',
    phase: 14,
    era: 'The Glorious Second Advent',
    title: 'The Special Resurrection',
    subtitle: 'Those who pierced Christ and died in the Third Angel\'s message awake',
    primaryAnchor: 'Daniel 12:2; Revelation 1:7; Matthew 26:64',
    primaryAnchorVerseId: 'dan-12-2',
    biblicalSummary:
      'Before the general resurrection of the righteous, a special partial resurrection occurs: 1) all who died in the faith of the Third Angel\'s Message rise glorified to hear God\'s covenant of peace and witness the Second Coming; and 2) the chief mockers and executioners who crucified Christ (including Caiaphas and Pilate) awake to behold Him coming in consuming glory.',
    theologicalSignificance:
      'Vindicates the pioneer proclaimers of the Three Angels\' Messages and fulfills Jesus\' solemn prophecy to Caiaphas that he would see the Son of man coming in the clouds.',
    scriptureSequence: [
      { ref: 'Daniel 12:2', verseId: 'dan-12-2', title: 'Many Awake', connection: 'Many that sleep in dust awake, some to everlasting life, some to shame and everlasting contempt.' },
      { ref: 'Revelation 1:7', verseId: 'rev-1-7', title: 'They Which Pierced Him', connection: 'Every eye shall see Him, and they also which pierced Him; all kindreds shall wail.' },
      { ref: 'Matthew 26:64', verseId: 'mat-26-64', title: 'Prophecy to Caiaphas', connection: '"Hereafter shall ye see the Son of man sitting on the right hand of power, coming in clouds."' },
    ],
    historicistFulfillment:
      'Unique pre-advent resurrection fulfilling Daniel 12:2 and Revelation 1:7.',
  },
  {
    id: 'lde-15',
    phase: 15,
    era: 'The Glorious Second Advent',
    title: 'The Second Coming of Christ in Power & Consuming Glory',
    subtitle: 'The King of kings descends with all holy angels',
    primaryAnchor: 'Matthew 24:30; 1 Thessalonians 4:16-17; Titus 2:13; Revelation 19:11-16',
    primaryAnchorVerseId: '1th-4-16',
    biblicalSummary:
      'A small black cloud appears in the east, growing larger and brighter until it blazes with glory. Jesus Christ descends, surrounded by ten thousand times ten thousand holy angels. The trumpet sounds, the heavens depart as a scroll, and the wicked cry to mountains and rocks: "Fall on us, and hide us from the face of Him that sitteth on the throne!"',
    theologicalSignificance:
      'The Blessed Hope and supreme climax of all redemptive history. Destroys the secret rapture delusion with overwhelming biblical proof of a literal, personal, audible, and universal advent.',
    scriptureSequence: [
      { ref: 'Matthew 24:30', verseId: 'mat-24-30', title: 'Sign of the Son of Man', connection: 'Shall appear sign of Son of man in heaven; they shall see Son of man coming in clouds with power.' },
      { ref: '1 Thessalonians 4:16', verseId: '1th-4-16', title: 'Shout, Voice, Trumpet', connection: 'Lord shall descend with shout, voice of archangel, trump of God: dead in Christ rise first.' },
      { ref: 'Revelation 6:15-16', verseId: 'rev-6-15', title: 'Terror of the Wicked', connection: 'Kings and mighty men say to rocks: Fall on us, hide us from wrath of the Lamb.' },
    ],
    historicistFulfillment:
      'The literal return of Jesus Christ ending human history and the reign of sin.',
  },
  {
    id: 'lde-16',
    phase: 16,
    era: 'The Glorious Second Advent',
    title: 'The First Resurrection & Translation of Living Saints',
    subtitle: 'Mortal puts on immortality; saints ascend to heaven',
    primaryAnchor: '1 Corinthians 15:51-54; 1 Thessalonians 4:16-17; Philippians 3:20-21',
    primaryAnchorVerseId: '1co-15-51',
    biblicalSummary:
      'At the sound of the trumpet, the righteous dead of all ages are awakened from their sleep in spotless, incorruptible youth and beauty. Simultaneously, the living righteous are translated in the twinkling of an eye. Together they are caught up in clouds of glory to meet the Lord in the air, traveling on a seven-day journey to the Sea of Glass in heaven.',
    theologicalSignificance:
      'Physical immortality is conferred only at the resurrection, not at death. United families and saints of every century meet their Redeemer together.',
    scriptureSequence: [
      { ref: '1 Corinthians 15:51-53', verseId: '1co-15-51', title: 'Twinkling of an Eye', connection: 'We shall not all sleep, but we shall all be changed: mortal puts on immortality.' },
      { ref: '1 Thessalonians 4:17', verseId: '1th-4-17', title: 'Caught Up Together', connection: 'We which are alive shall be caught up together with them in clouds to meet Lord in air.' },
      { ref: 'Philippians 3:21', verseId: 'php-3-21', title: 'Glorified Body', connection: 'Who shall change our vile body, that it may be fashioned like unto His glorious body.' },
    ],
    historicistFulfillment:
      'The grand gathering of the redeemed from every era into the heavenly courts.',
  },

  // ── Era 6: The Millennium & New Earth ─────────────────────────────────────
  {
    id: 'lde-17',
    phase: 17,
    era: 'The Millennium & New Earth',
    title: 'The 1,000-Year Millennium in Heaven / Earth Desolate',
    subtitle: 'Satan bound to a desolate planet; saints examine the books',
    primaryAnchor: 'Revelation 20:1-6; Jeremiah 4:23-26; 1 Corinthians 6:2-3',
    primaryAnchorVerseId: 'rev-20-4',
    biblicalSummary:
      'During the 1,000 years, the earth lies in chaotic ruin (abyss/tohu va-bohu), unpopulated by living humans. Satan is chained by circumstances to this ruined prison planet, unable to deceive anyone. In heaven, the redeemed sit on thrones with Christ, reviewing the records of the lost and fallen angels, verifying before the universe the justice and mercy of God\'s decisions.',
    theologicalSignificance:
      'Vindicates God\'s governance completely. Every doubt and question in the hearts of the redeemed is answered before any final punishment is executed.',
    scriptureSequence: [
      { ref: 'Revelation 20:1-3', verseId: 'rev-20-1', title: 'Satan Bound in Pit', connection: 'Cast him into bottomless pit, shut him up, that he should deceive nations no more till 1,000 years fulfilled.' },
      { ref: 'Jeremiah 4:23-26', verseId: 'jer-4-23', title: 'Earth Ruined and Empty', connection: 'Earth without form and void; no man; cities broken down before the LORD.' },
      { ref: '1 Corinthians 6:2-3', verseId: '1co-6-2', title: 'Saints Judge Angels', connection: 'Do ye not know that the saints shall judge the world? Know ye not that we shall judge angels?' },
    ],
    historicistFulfillment:
      'The 1,000-year millennial sabbath in heaven following the Second Coming.',
  },
  {
    id: 'lde-18',
    phase: 18,
    era: 'The Millennium & New Earth',
    title: 'Descent of New Jerusalem, Second Resurrection & Lake of Fire',
    subtitle: 'The Great White Throne; sin and Satan destroyed forever',
    primaryAnchor: 'Zechariah 14:4-5; Revelation 20:5, 7-15; Malachi 4:1-3',
    primaryAnchorVerseId: 'rev-20-9',
    biblicalSummary:
      'At the close of the 1,000 years, Christ and the saints descend with the New Jerusalem to Mount Olivet, which cleaves asunder to form a vast plain. The rest of the dead (the wicked of all ages) are resurrected. Satan mobilizes them for a final desperate assault on the beloved city. But the Great White Throne appears, every knee bows confessing Christ\'s justice, and fire descends from God devouring evil into ashes.',
    theologicalSignificance:
      'The final execution of judgment (the Second Death). Sin is not preserved in eternal agony; it is completely consumed, leaving neither root nor branch.',
    scriptureSequence: [
      { ref: 'Zechariah 14:4-5', verseId: 'zec-14-4', title: 'Mount of Olives Cleaves', connection: 'His feet shall stand upon mount of Olives; mount shall cleave in midst; LORD shall come and all saints.' },
      { ref: 'Revelation 20:7-9', verseId: 'rev-20-7', title: 'Satan Loosed & Final Siege', connection: 'Satan loosed, gathers nations of earth; compassed camp of saints; fire came down from God and devoured them.' },
      { ref: 'Malachi 4:1-3', verseId: 'mal-4-1', title: 'Burned to Ashes', connection: 'Day cometh that shall burn as oven; all proud shall be stubble; shall tread down wicked as ashes.' },
      { ref: 'Revelation 20:14', verseId: 'rev-20-14', title: 'The Second Death', connection: 'Death and hell were cast into lake of fire. This is the second death.' },
    ],
    historicistFulfillment:
      'Universal eradication of sin, Satan, fallen angels, and death from God\'s universe.',
  },
  {
    id: 'lde-19',
    phase: 19,
    era: 'The Millennium & New Earth',
    title: 'The Earth Made New: Cosmic Sabbath & Everlasting Kingdom',
    subtitle: 'Affliction shall not rise up the second time',
    primaryAnchor: 'Revelation 21:1-5; Revelation 22:1-5; Isaiah 65:17-25; Nahum 1:9',
    primaryAnchorVerseId: 'rev-21-1',
    biblicalSummary:
      'God recreates a new heaven and a new earth where righteousness dwells. The New Jerusalem becomes the eternal capital of the universe. God Himself tabernacles with humanity, wiping away every tear; there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain. From one Sabbath to another all flesh shall worship before the King of glory, and sin shall never rise again.',
    theologicalSignificance:
      'The complete fulfillment of Genesis 1-2. God\'s original purpose for humanity and the cosmos is achieved, magnified by the eternal song of redemption.',
    scriptureSequence: [
      { ref: 'Revelation 21:1-4', verseId: 'rev-21-1', title: 'New Heavens & New Earth', connection: 'God shall wipe away all tears; no more death, neither sorrow, nor crying, neither pain: former things passed.' },
      { ref: 'Isaiah 66:22-23', verseId: 'isa-66-22', title: 'Eternal Sabbath Worship', connection: 'As new heavens and new earth remain, so shall your seed; from one Sabbath to another all flesh shall worship.' },
      { ref: 'Nahum 1:9', verseId: 'nam-1-9', title: 'Cosmic Guarantee', connection: 'He will make an utter end: affliction shall not rise up the second time.' },
    ],
    historicistFulfillment:
      'Eternal reign of Jesus Christ and His redeemed throughout ceaseless ages.',
  },
];

export const LDE_ERAS: LdeEra[] = [
  'Cosmic Origins & Enmity',
  'The Historic Sanctuary & 1844',
  'The Final Conflict & False Worship',
  'The Close of Probation & Plagues',
  'The Glorious Second Advent',
  'The Millennium & New Earth',
];

export function getEventsByEra(era: LdeEra): LastDayEventPhase[] {
  return LAST_DAY_EVENTS.filter(e => e.era === era);
}

export function getEventByPhase(phase: number): LastDayEventPhase | undefined {
  return LAST_DAY_EVENTS.find(e => e.phase === phase);
}
