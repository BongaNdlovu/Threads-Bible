/**
 * Tier 4: Master Canonical Redemptive Chains (42 Comprehensive Chains)
 * Overarching theological streams flowing unbroken from Genesis to Revelation,
 * rooted in the Great Controversy theme, Sanctuary typology, and Sola Scriptura hermeneutics.
 */

import { expandVerseRange } from './refParser';

export interface MasterChainStep {
  ref: string;
  verseId: string;
  testament: 'OT' | 'NT';
  title: string;
  connection: string;
}

export interface MasterChain {
  id: string;
  number: number;
  name: string;
  category: 'Sanctuary & Priesthood' | 'Covenant & Law' | 'Messianic Types' | 'Great Controversy' | 'Eschatology & End-Time';
  primaryAnchor: string;
  primaryAnchorVerseId: string;
  summary: string;
  steps: MasterChainStep[];
}

export const MASTER_CHAINS: MasterChain[] = [
  // ── 1. PROTOEVANGELIUM & SERPENT CRUSHER ───────────────────────────────
  {
    id: 'seed-of-the-woman',
    number: 1,
    name: 'The Seed of the Woman (Protoevangelium)',
    category: 'Great Controversy',
    primaryAnchor: 'Genesis 3:15',
    primaryAnchorVerseId: 'gen-3-15',
    summary: 'The earliest gospel promise announced in Eden: perpetual enmity between the serpent and the woman, culminating in the fatal crushing of Satan\'s head by Christ through His atoning wound on Calvary.',
    steps: [
      { ref: 'Genesis 3:15', verseId: 'gen-3-15', testament: 'OT', title: 'The First Gospel Promise', connection: 'God decrees enmity between Satan\'s seed and the woman\'s Seed; victory through suffering.' },
      { ref: 'Genesis 12:3', verseId: 'gen-12-3', testament: 'OT', title: 'The Seed Line Narrowed to Abraham', connection: 'The promised Seed through whom all families of the earth shall be blessed.' },
      { ref: 'Genesis 22:18', verseId: 'gen-22-18', testament: 'OT', title: 'The Seed of Promise Confirmed', connection: 'Following Abraham\'s faith offering of Isaac on Mount Moriah, the Seed is reaffirmed.' },
      { ref: 'Genesis 49:10', verseId: 'gen-49-10', testament: 'OT', title: 'Shiloh and Judah\'s Scepter', connection: 'The royal Seed designated from the tribe of Judah until Shiloh comes.' },
      { ref: '2 Samuel 7:12-16', verseId: '2sa-7-12', testament: 'OT', title: 'Davidic Royal Dynasty Forever', connection: 'The Seed given an everlasting throne and kingdom.' },
      { ref: 'Isaiah 7:14', verseId: 'isa-7-14', testament: 'OT', title: 'Virgin-Born Immanuel', connection: 'The miraculous Seed of the woman born without human fatherhood.' },
      { ref: 'Galatians 3:16', verseId: 'gal-3-16', testament: 'NT', title: 'The Seed is Christ', connection: 'Paul identifies the singular Seed of the Abrahamic covenant as Jesus Christ.' },
      { ref: 'Galatians 4:4', verseId: 'gal-4-4', testament: 'NT', title: 'Made of a Woman, Made Under the Law', connection: 'The Incarnation fulfills the Genesis 3:15 specification of the woman\'s Seed.' },
      { ref: 'Romans 16:20', verseId: 'rom-16-20', testament: 'NT', title: 'Satan Crushed Under Your Feet', connection: 'The head-crushing applied to Christ\'s body, the church, through His victory.' },
      { ref: 'Revelation 12:1-17', verseId: 'rev-12-5', testament: 'NT', title: 'The Dragon, Woman, and Man Child', connection: 'Cosmic reenactment: Satan tries to devour the Seed, is cast down, and persecutes the remnant.' },
      { ref: 'Revelation 20:10', verseId: 'rev-20-10', testament: 'NT', title: 'Final Eradication of the Serpent', connection: 'The complete and eternal annihilation of the devil in the lake of fire; sin never to rise again.' },
    ],
  },

  // ── 2. THE HEAVENLY SANCTUARY & TRUE TABERNACLE ───────────────────────
  {
    id: 'heavenly-sanctuary',
    number: 2,
    name: 'The Heavenly Sanctuary & True Tabernacle',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Exodus 25:8-9, 40; Hebrews 8:1-2',
    primaryAnchorVerseId: 'exo-25-8',
    summary: 'The earthly sanctuary was built as a shadow and copy of the genuine Heavenly Sanctuary, where Christ ministers as High Priest on our behalf.',
    steps: [
      { ref: 'Exodus 25:8-9', verseId: 'exo-25-8', testament: 'OT', title: 'Let Them Make Me a Sanctuary', connection: 'God desires to dwell among His people according to the heavenly pattern shown on Mount Sinai.' },
      { ref: 'Exodus 40:34-38', verseId: 'exo-40-34', testament: 'OT', title: 'The Shekinah Fills the Tabernacle', connection: 'Divine approval and presence visibly consecrate the earthly shadow.' },
      { ref: '1 Kings 8:27-30', verseId: '1ki-8-27', testament: 'OT', title: 'Solomon\'s Prayer towards Heaven', connection: 'Recognition that the earthly house cannot contain God; He hears from His heavenly dwelling place.' },
      { ref: 'Psalm 102:19', verseId: 'psa-102-19', testament: 'OT', title: 'Looking Down from the Height of His Sanctuary', connection: 'The true sanctuary from which the Lord beholds the earth and hears the groanings of prisoners.' },
      { ref: 'Hebrews 8:1-6', verseId: 'heb-8-1', testament: 'NT', title: 'Minister of the True Tabernacle', connection: 'Christ our High Priest sits at the right hand of God, minister of the sanctuary pitched by the Lord.' },
      { ref: 'Hebrews 9:11-24', verseId: 'heb-9-11', testament: 'NT', title: 'Entering Heaven Itself by His Own Blood', connection: 'Christ entered not into the holy places made with hands, but into heaven itself, to appear in the presence of God for us.' },
      { ref: 'Revelation 11:19', verseId: 'rev-11-19', testament: 'NT', title: 'The Heavenly Temple Opened', connection: 'The temple of God opened in heaven and the Ark of His Testament seen in the Most Holy Place.' },
      { ref: 'Revelation 15:5-8', verseId: 'rev-15-5', testament: 'NT', title: 'The Temple Filled with Smoke', connection: 'End of mediation: the seven last plagues poured out from the heavenly temple.' },
      { ref: 'Revelation 21:3', verseId: 'rev-21-3', testament: 'NT', title: 'The Tabernacle of God with Men', connection: 'Ultimate consummation: God Himself dwells face-to-face with His redeemed creation.' },
    ],
  },

  // ── 3. DAY OF ATONEMENT & CLEANSING OF THE SANCTUARY ─────────────────
  {
    id: 'day-of-atonement',
    number: 3,
    name: 'The Day of Atonement & Cleansing of the Sanctuary',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Leviticus 16:16-19; Daniel 8:14',
    primaryAnchorVerseId: 'dan-8-14',
    summary: 'The annual Yom Kippur cleansing of the earthly sanctuary prefigured the final investigative judgment and cleansing of the heavenly sanctuary starting at the end of the 2,300 prophetic days in 1844.',
    steps: [
      { ref: 'Leviticus 16:1-19', verseId: 'lev-16-16', testament: 'OT', title: 'Yom Kippur: Cleansing the Holy Places', connection: 'The high priest enters the Most Holy Place once a year with blood to make atonement for the holy place because of uncleanness.' },
      { ref: 'Leviticus 23:27-32', verseId: 'lev-23-27', testament: 'OT', title: 'Afflicting Souls in Solemn Judgment', connection: 'A Sabbath of rest where anyone not afflicting their soul was cut off from the people.' },
      { ref: 'Daniel 7:9-14', verseId: 'dan-7-9', testament: 'OT', title: 'The Heavenly Court Sits in Judgment', connection: 'Thrones placed, the Ancient of Days takes His seat, the books are opened, and the Son of Man approaches.' },
      { ref: 'Daniel 8:14', verseId: 'dan-8-14', testament: 'OT', title: 'Unto 2,300 Days: Sanctuary Cleansed', connection: 'The central time prophecy terminating in 1844, marking the antitypical Day of Atonement in heaven.' },
      { ref: 'Hebrews 9:23-28', verseId: 'heb-9-23', testament: 'NT', title: 'Heavenly Things Purified with Better Sacrifices', connection: 'The patterns of heavenly things were cleansed with animal blood, but the heavenly things themselves with Christ\'s sacrifice.' },
      { ref: 'Revelation 11:19', verseId: 'rev-11-19', testament: 'NT', title: 'Ark of the Covenant Revealed', connection: 'Opening of the second apartment of the heavenly sanctuary during the sounding of the Seventh Trumpet.' },
      { ref: 'Revelation 14:6-7', verseId: 'rev-14-7', testament: 'NT', title: 'The Hour of His Judgment Is Come', connection: 'First Angel\'s Message proclaims to every nation that the pre-advent investigative judgment has commenced.' },
      { ref: 'Revelation 22:11-12', verseId: 'rev-22-11', testament: 'NT', title: 'Close of Probation & Reward', connection: 'He that is unjust, let him be unjust still; Christ comes with His reward given to every man as his work shall be.' },
    ],
  },

  // ── 4. THE SABBATH: CREATION TO NEW EARTH ─────────────────────────────
  {
    id: 'sabbath-creation-to-new-earth',
    number: 4,
    name: 'The Sabbath: Creation to the New Earth',
    category: 'Covenant & Law',
    primaryAnchor: 'Genesis 2:1-3; Exodus 20:8-11',
    primaryAnchorVerseId: 'gen-2-2',
    summary: 'Instituted at Creation, enshrined in the Decalogue, observed by Christ and the apostles, defended as the end-time seal of Creator-worship, and celebrated for all eternity on the Earth Made New.',
    steps: [
      { ref: 'Genesis 2:1-3', verseId: 'gen-2-2', testament: 'OT', title: 'Instituted and Sanctified at Creation', connection: 'God rested, blessed, and sanctified the seventh day before the entrance of sin.' },
      { ref: 'Exodus 16:22-30', verseId: 'exo-16-22', testament: 'OT', title: 'Sabbath Observed Before Sinai Manna', connection: 'Double portion of manna on the sixth day proves the perpetual validity of the Sabbath prior to Sinai.' },
      { ref: 'Exodus 20:8-11', verseId: 'exo-20-8', testament: 'OT', title: 'Enshrined in the Ten Commandments', connection: 'The central commandment of the moral law, pointing to the Creator as the sole basis of worship.' },
      { ref: 'Ezekiel 20:12, 20', verseId: 'ezk-20-12', testament: 'OT', title: 'A Sign of Sanctification', connection: 'The Sabbath as the perpetual covenant sign between God and His people that He is the LORD who sanctifies them.' },
      { ref: 'Isaiah 58:13-14', verseId: 'isa-58-13', testament: 'OT', title: 'The Repairer of the Breach', connection: 'Calling the Sabbath a delight, the holy of the LORD, honorable; repairing the broken law in the last days.' },
      { ref: 'Luke 4:16', verseId: 'luk-4-16', testament: 'NT', title: 'Christ\'s Customary Observance', connection: 'Jesus worshipped on the Sabbath day according to His regular custom, declaring Himself Lord of the Sabbath (Mark 2:27-28).' },
      { ref: 'Hebrews 4:4, 9', verseId: 'heb-4-9', testament: 'NT', title: 'A Sabbath-Rest Remains (Sabbatismos)', connection: 'There remaineth therefore a keeping of Sabbath (sabbatismos) for the people of God.' },
      { ref: 'Revelation 14:7', verseId: 'rev-14-7', testament: 'NT', title: 'End-Time Call to Worship the Creator', connection: 'The First Angel summons all mankind to worship Him that made heaven, earth, sea, and fountains of waters.' },
      { ref: 'Isaiah 66:22-23', verseId: 'isa-66-22', testament: 'OT', title: 'Sabbath in the New Heavens and Earth', connection: 'From one Sabbath to another, shall all flesh come to worship before me, saith the LORD.' },
    ],
  },

  // ── 5. THE 70 WEEKS: DATING MESSIAH THE PRINCE ────────────────────────
  {
    id: 'seventy-weeks-messiah',
    number: 5,
    name: 'The 70 Weeks: Precise Dating of the Messiah',
    category: 'Messianic Types',
    primaryAnchor: 'Daniel 9:24-27; Ezra 7:11-26',
    primaryAnchorVerseId: 'dan-9-25',
    summary: 'The cornerstone messianic time prophecy of Daniel 9. Dating from the 457 BC decree of Artaxerxes, 69 prophetic weeks (483 years) reached exactly to Christ\'s baptism in 27 AD, His crucifixion in the midst of the 70th week in 31 AD, and the gospel to the Gentiles in 34 AD.',
    steps: [
      { ref: 'Daniel 9:24', verseId: 'dan-9-24', testament: 'OT', title: 'Seventy Weeks Determined on Israel', connection: 'To finish transgression, make an end of sins, make reconciliation for iniquity, and anoint the Most Holy.' },
      { ref: 'Ezra 7:11-26', verseId: 'ezr-7-11', testament: 'OT', title: 'The Decree of Artaxerxes (457 BC)', connection: 'The historical starting point: the decree restoring civil and religious self-governance to Jerusalem.' },
      { ref: 'Daniel 9:25', verseId: 'dan-9-25', testament: 'OT', title: '69 Weeks Unto Messiah the Prince', connection: '7 weeks + 62 weeks = 69 prophetic weeks (483 literal years): 457 BC to 27 AD.' },
      { ref: 'Luke 3:1, 21-23', verseId: 'luk-3-1', testament: 'NT', title: 'Baptism & Anointing of Jesus (27 AD)', connection: 'In the 15th year of Tiberius Caesar, Jesus is baptized and anointed with the Holy Ghost, announcing: "The time is fulfilled" (Mark 1:15).' },
      { ref: 'Daniel 9:26-27', verseId: 'dan-9-26', testament: 'OT', title: 'Messiah Cut Off in the Midst of the Week', connection: 'After 3.5 years of ministry, Messiah is cut off, causing the sacrifice and oblation to cease.' },
      { ref: 'Matthew 27:50-51', verseId: 'mat-27-51', testament: 'NT', title: 'Earthly Sacrifices Cease (Spring 31 AD)', connection: 'At Christ\'s crucifixion, the veil of the temple was rent in twain from top to bottom, ending the shadow system.' },
      { ref: 'Acts 7:54-60', verseId: 'act-7-54', testament: 'NT', title: 'Stoning of Stephen (Autumn 34 AD)', connection: 'The martyrdom of Stephen marks the expiration of the 70 weeks (490 years) cut off for the Jewish nation, launching the mission to the Gentiles (Acts 8:1-4).' },
    ],
  },

  // ── 6. THE PASSOVER LAMB & SLAIN LAMB OF GOD ─────────────────────────
  {
    id: 'passover-lamb',
    number: 6,
    name: 'The Passover Lamb & The Slain Lamb of God',
    category: 'Messianic Types',
    primaryAnchor: 'Exodus 12:1-14; Revelation 5:6-12',
    primaryAnchorVerseId: 'exo-12-3',
    summary: 'From Abraham\'s ram on Mount Moriah through the Passover lamb in Egypt to Isaiah\'s silent sheep, Christ is revealed as the Lamb slain from the foundation of the world who redeems humanity by His blood.',
    steps: [
      { ref: 'Genesis 22:7-8, 13', verseId: 'gen-22-8', testament: 'OT', title: 'God Will Provide Himself a Lamb', connection: 'Abraham reassures Isaac on Moriah; a ram caught in a thicket offered in substitute.' },
      { ref: 'Exodus 12:1-14', verseId: 'exo-12-3', testament: 'OT', title: 'The Spotless Passover Lamb', connection: 'A male lamb without blemish; blood applied to doorposts protects from the destroying angel.' },
      { ref: 'Isaiah 53:7', verseId: 'isa-53-7', testament: 'OT', title: 'Brought as a Lamb to the Slaughter', connection: 'The Suffering Servant silent before His shearers, bearing the iniquity of us all.' },
      { ref: 'John 1:29, 36', verseId: 'joh-1-29', testament: 'NT', title: 'Behold the Lamb of God!', connection: 'John the Baptist identifies Jesus as the Lamb of God which taketh away the sin of the world.' },
      { ref: '1 Corinthians 5:7', verseId: '1co-5-7', testament: 'NT', title: 'Christ Our Passover Sacrificed for Us', connection: 'Paul declares the direct fulfillment: Christ is our Passover lamb.' },
      { ref: '1 Peter 1:18-20', verseId: '1pe-1-19', testament: 'NT', title: 'Precious Blood of a Lamb Without Blemish', connection: 'Redeemed not with silver and gold, but with the precious blood of Christ foreordained before creation.' },
      { ref: 'Revelation 5:6-12', verseId: 'rev-5-6', testament: 'NT', title: 'The Lamb in the Midst of the Throne', connection: 'A Lamb as it had been slain takes the scroll, worshipped by all heaven as alone worthy.' },
      { ref: 'Revelation 13:8', verseId: 'rev-13-8', testament: 'NT', title: 'The Lamb Slain from the Foundation of the World', connection: 'The plan of redemption conceived in the eternal counsels of the Godhead.' },
      { ref: 'Revelation 21:22-23', verseId: 'rev-21-23', testament: 'NT', title: 'The Lamb is the Light Thereof', connection: 'In the New Jerusalem, the Lamb and the Father are the temple and everlasting light.' },
    ],
  },

  // ── 7. THE MELCHIZEDEK PRIESTHOOD ─────────────────────────────────────
  {
    id: 'melchizedek-priesthood',
    number: 7,
    name: 'The Melchizedek Priesthood',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Genesis 14:18-20; Psalm 110:4; Hebrews 7:1-28',
    primaryAnchorVerseId: 'gen-14-18',
    summary: 'Melchizedek combines kingship and priesthood outside the tribal Aaronic lineage, typifying Christ\'s eternal, royal, deathless priesthood in the heavenly sanctuary.',
    steps: [
      { ref: 'Genesis 14:18-20', verseId: 'gen-14-18', testament: 'OT', title: 'King of Salem and Priest of the Most High', connection: 'Melchizedek blesses Abraham with bread and wine; Abraham pays tithe of all.' },
      { ref: 'Psalm 110:1-4', testament: 'OT', title: 'Priest Forever after the Order of Melchizedek', verseId: 'psa-110-4', connection: 'God swears an unchangeable oath appointing the Davidic Messiah as eternal Priest-King.' },
      { ref: 'Zechariah 6:12-13', verseId: 'zec-6-12', testament: 'OT', title: 'The Branch: Priest Upon His Throne', connection: 'The counsel of peace unites royal dominion and priestly mediation in one Person.' },
      { ref: 'Hebrews 5:5-10', verseId: 'heb-5-6', testament: 'NT', title: 'Christ Called of God an High Priest', connection: 'Christ does not glorify Himself, but is ordained after the Melchizedek order.' },
      { ref: 'Hebrews 7:1-17', verseId: 'heb-7-1', testament: 'NT', title: 'Superiority over the Levitical Order', connection: 'Unending life, royal righteousness and peace, receiving tithe in Abraham\'s loins.' },
      { ref: 'Hebrews 7:24-28', verseId: 'heb-7-25', testament: 'NT', title: 'Able to Save to the Uttermost', connection: 'Because He continueth ever, He hath an unchangeable priesthood, ever living to make intercession.' },
    ],
  },

  // ── 8. THE SMITTEN ROCK & LIVING WATER ────────────────────────────────
  {
    id: 'smitten-rock',
    number: 8,
    name: 'The Smitten Rock & Living Water',
    category: 'Messianic Types',
    primaryAnchor: 'Exodus 17:6; Numbers 20:8-11; 1 Corinthians 10:4',
    primaryAnchorVerseId: 'exo-17-6',
    summary: 'The rock at Horeb was smitten once by the rod of judgment, pouring out life-giving water for a dying people. Christ, smitten once on Calvary, sends forth the Holy Spirit as living water.',
    steps: [
      { ref: 'Exodus 17:6', verseId: 'exo-17-6', testament: 'OT', title: 'Smitten Once at Horeb', connection: 'God stands upon the rock; Moses strikes it with the rod, and water gushes forth.' },
      { ref: 'Numbers 20:8-11', verseId: 'num-20-8', testament: 'OT', title: 'Speak to the Rock, Do Not Strike It Twice', connection: 'Moses strikes the rock twice in anger, obscuring the truth that Christ dies only once (Hebrews 9:28).' },
      { ref: 'Psalm 78:15-16', verseId: 'psa-78-15', testament: 'OT', title: 'Streams Out of the Rock like Rivers', connection: 'God\'s miraculous grace sustains His rebellious people in the dry wilderness.' },
      { ref: '1 Corinthians 10:4', verseId: '1co-10-4', testament: 'NT', title: 'That Rock Was Christ', connection: 'Paul explicitly states that the spiritual Rock that followed them in the desert was Christ.' },
      { ref: 'John 4:13-14', verseId: 'joh-4-14', testament: 'NT', title: 'The Well of Water Springing Up', connection: 'Jesus offers the Samaritan woman living water that satisfies thirst forever.' },
      { ref: 'John 7:37-39', verseId: 'joh-7-37', testament: 'NT', title: 'Rivers of Living Water: The Holy Spirit', connection: 'On the last great day of the Feast of Tabernacles, Jesus promises the Spirit to all who believe.' },
      { ref: 'Revelation 22:1, 17', verseId: 'rev-22-1', testament: 'NT', title: 'The River of the Water of Life', connection: 'Flowing clear as crystal from the throne of God and of the Lamb: "Whosoever will, let him take the water of life freely."' },
    ],
  },

  // ── 9. THE BRONZE SERPENT & HEALING BY FAITH ──────────────────────────
  {
    id: 'bronze-serpent',
    number: 9,
    name: 'The Bronze Serpent & Healing by Faith',
    category: 'Messianic Types',
    primaryAnchor: 'Numbers 21:8-9; John 3:14-15',
    primaryAnchorVerseId: 'num-21-8',
    summary: 'The fiery serpents brought death to sinful Israel; the bronze serpent raised on a pole brought instantaneous healing to all who looked in faith. Christ, made in the likeness of sinful flesh, bears our curse on the cross.',
    steps: [
      { ref: 'Numbers 21:5-9', verseId: 'num-21-8', testament: 'OT', title: 'Look and Live', connection: 'Moses makes a serpent of brass and puts it upon a pole; everyone bitten who looks lives.' },
      { ref: '2 Kings 18:4', verseId: '2ki-18-4', testament: 'OT', title: 'Nehushtan: Warning Against Idolizing Symbols', connection: 'Hezekiah breaks the bronze serpent when Israel burns incense to it as an idol.' },
      { ref: 'John 3:14-15', verseId: 'joh-3-14', testament: 'NT', title: 'As Moses Lifted Up the Serpent', connection: 'Jesus applies the type directly to His crucifixion: so must the Son of man be lifted up.' },
      { ref: 'John 12:32-33', verseId: 'joh-12-32', testament: 'NT', title: 'Drawing All Men to Himself', connection: '"And I, if I be lifted up from the earth, will draw all men unto me," signifying what death He should die.' },
      { ref: 'Romans 8:3', verseId: 'rom-8-3', testament: 'NT', title: 'In the Likeness of Sinful Flesh', connection: 'The serpent symbol without poison typified Christ made in the likeness of sinful flesh, yet without sin, condemning sin in the flesh.' },
      { ref: 'Hebrews 12:2', verseId: 'heb-12-2', testament: 'NT', title: 'Looking Unto Jesus', connection: 'Fixing our eyes of faith on the Author and Finisher of our faith who endured the cross.' },
    ],
  },

  // ── 10. THE SCAPEGOAT (AZAZEL) & FINAL BANISHMENT OF SIN ──────────────
  {
    id: 'scapegoat-azazel',
    number: 10,
    name: 'The Scapegoat (Azazel) & Total Sin Eradication',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Leviticus 16:8-10, 20-22; Revelation 20:1-3, 10',
    primaryAnchorVerseId: 'lev-16-8',
    summary: 'On the Day of Atonement, the Lord\'s goat made atonement for the sanctuary. Afterward, the confessed sins were placed upon Azazel (the scapegoat, representing Satan, the author of sin), who was led into an uninhabited wilderness.',
    steps: [
      { ref: 'Leviticus 16:7-10', verseId: 'lev-16-8', testament: 'OT', title: 'Two Goats: The Lord\'s Goat and Azazel', connection: 'Lots cast: one goat sacrificed for the Lord to cleanse the sanctuary, the other kept alive as Azazel.' },
      { ref: 'Leviticus 16:20-22', verseId: 'lev-16-21', testament: 'OT', title: 'Sins Placed on the Head of the Scapegoat', connection: 'After atonement for the sanctuary is finished, all sins are confessed over the scapegoat and borne into a land uninhabited.' },
      { ref: 'Psalm 103:12', verseId: 'psa-103-12', testament: 'OT', title: 'As Far as the East Is from the West', connection: 'Complete removal of pardoned transgressions from the presence of God and the redeemed.' },
      { ref: 'Revelation 20:1-3', verseId: 'rev-20-1', testament: 'NT', title: 'Satan Bound in the Desolate Earth (1,000 Years)', connection: 'Satan confined to the desolate, depopulated wilderness of earth during the Millennium, corresponding to Azazel in the wilderness.' },
      { ref: 'Revelation 20:10', verseId: 'rev-20-10', testament: 'NT', title: 'Satan Cast into the Lake of Fire', connection: 'Final execution of judgment upon the originator of sin; bearing the ultimate responsibility for all the sins he tempted the redeemed to commit.' },
    ],
  },

  // ── 11. THE THREE ANGELS' MESSAGES & THE FINAL CRISIS ─────────────────
  {
    id: 'three-angels-messages',
    number: 11,
    name: 'The Three Angels\' Messages & The Final Crisis',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Revelation 14:6-12',
    primaryAnchorVerseId: 'rev-14-6',
    summary: 'God\'s final warning and appeal to the world: the everlasting gospel in the context of the investigative judgment, the fall of apostate Babylon, the warning against the mark of the beast, and the remnant keeping the commandments of God and faith of Jesus.',
    steps: [
      { ref: 'Revelation 14:6-7', verseId: 'rev-14-6', testament: 'NT', title: 'First Angel: Everlasting Gospel & Judgment Hour', connection: 'Fear God and give glory to Him; for the hour of His judgment is come; worship the Creator of heaven and earth.' },
      { ref: 'Revelation 14:8', verseId: 'rev-14-8', testament: 'NT', title: 'Second Angel: Fall of Babylon', connection: 'Babylon is fallen, is fallen, because she made all nations drink of the wine of the wrath of her fornication.' },
      { ref: 'Revelation 14:9-11', verseId: 'rev-14-9', testament: 'NT', title: 'Third Angel: Warning Against the Beast and Mark', connection: 'Warning against receiving the mark of the beast in the forehead or hand; drinking the unmixed wine of God\'s wrath.' },
      { ref: 'Revelation 14:12', verseId: 'rev-14-12', testament: 'NT', title: 'The Patient Remnant of God', connection: '"Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus."' },
      { ref: 'Revelation 18:1-4', verseId: 'rev-18-1', testament: 'NT', title: 'The Loud Cry: Come Out of Her, My People', connection: 'The fourth angel illuminates the earth with glory, calling God\'s faithful people out of Babylon before the plagues fall.' },
    ],
  },

  // ── 12. THE STATE OF THE DEAD & CONDITIONAL IMMORTALITY ───────────────
  {
    id: 'state-of-the-dead',
    number: 12,
    name: 'The State of the Dead & Conditional Immortality',
    category: 'Covenant & Law',
    primaryAnchor: 'Genesis 2:7; Ecclesiastes 9:5-6; 1 Thessalonians 4:13-17',
    primaryAnchorVerseId: 'gen-2-7',
    summary: 'Man was created from the dust and breath of life; at death, breath returns to God and man sleeps unconscious in the dust awaiting the literal resurrection at Christ\'s Second Coming.',
    steps: [
      { ref: 'Genesis 2:7', verseId: 'gen-2-7', testament: 'OT', title: 'Creation of Man as a Living Soul', connection: 'Dust of ground + breath of life = living soul. Man does not possess an independent soul; he is a soul.' },
      { ref: 'Genesis 3:19', verseId: 'gen-3-19', testament: 'OT', title: 'Dust Thou Art, Unto Dust Shalt Thou Return', connection: 'Death is the reversal of creation, returning to unconscious dust.' },
      { ref: 'Ecclesiastes 9:5-6, 10', verseId: 'ecc-9-5', testament: 'OT', title: 'The Dead Know Not Any Thing', connection: 'No consciousness, love, hatred, or work in Sheol/the grave.' },
      { ref: 'Psalm 146:4', verseId: 'psa-146-4', testament: 'OT', title: 'In That Very Day His Thoughts Perish', connection: 'His breath goeth forth, he returneth to his earth; in that very day his thoughts perish.' },
      { ref: 'John 11:11-14', verseId: 'joh-11-11', testament: 'NT', title: 'Our Friend Lazarus Sleepeth', connection: 'Jesus defines bodily death as a sleep until the awakening voice of the Son of God.' },
      { ref: '1 Timothy 6:16', verseId: '1ti-6-16', testament: 'NT', title: 'God Alone Hath Immortality', connection: 'Immortality is not inherent in fallen mankind; it belongs solely to God and is received as a gift at the resurrection.' },
      { ref: '1 Thessalonians 4:13-17', verseId: '1th-4-16', testament: 'NT', title: 'The Dead in Christ Rise First', connection: 'The Lord descends with a shout, the dead in Christ rise first, then the living are caught up together.' },
      { ref: '1 Corinthians 15:51-54', verseId: '1co-15-51', testament: 'NT', title: 'Mortal Puts on Immortality at the Last Trump', connection: 'We shall not all sleep, but we shall all be changed in the twinkling of an eye at the last trump.' },
      { ref: 'Revelation 20:14-15', verseId: 'rev-20-14', testament: 'NT', title: 'The Second Death: Total Destruction', connection: 'Death and hell cast into the lake of fire; this is the second death, extinguishing sin and sinners forever.' },
    ],
  },

  // ── 13. THE GREAT CONTROVERSY COSMIC ARC ──────────────────────────────
  {
    id: 'great-controversy',
    number: 13,
    name: 'The Great Controversy Cosmic Arc',
    category: 'Great Controversy',
    primaryAnchor: 'Isaiah 14:12-15; Ezekiel 28:12-19; Revelation 12:7-12',
    primaryAnchorVerseId: 'isa-14-12',
    summary: 'The master thematic framework of Seventh-day Adventist theology: Lucifer\'s origin in heaven, his rebellion against God\'s character and law, the cosmic battle centered on Calvary, and the final vindication of God\'s love where affliction never rises again.',
    steps: [
      { ref: 'Ezekiel 28:12-19', verseId: 'ezk-28-12', testament: 'OT', title: 'The Anointed Covering Cherub', connection: 'Created perfect in beauty and wisdom until iniquity was found in him through pride.' },
      { ref: 'Isaiah 14:12-15', verseId: 'isa-14-12', testament: 'OT', title: 'Lucifer\'s "I Will": Self-Exaltation', connection: '"I will ascend into heaven, I will exalt my throne above the stars of God... I will be like the most High."' },
      { ref: 'Revelation 12:7-9', verseId: 'rev-12-7', testament: 'NT', title: 'War in Heaven: Dragon Cast Out', connection: 'Michael and His angels fought against the dragon; Satan and one-third of the angels cast down to earth.' },
      { ref: 'Genesis 3:1-6', verseId: 'gen-3-1', testament: 'OT', title: 'The Deception in Eden', connection: 'Satan maligns God\'s character to mankind: "Ye shall not surely die; ye shall be as gods."' },
      { ref: 'Job 1:6-12; 2:1-6', verseId: 'job-1-6', testament: 'OT', title: 'The Cosmic Challenge Before the Sons of God', connection: 'Satan claims no one serves God for love, but only for selfish reward.' },
      { ref: 'John 12:31-32', verseId: 'joh-12-31', testament: 'NT', title: 'The Cross: Now Is the Prince of This World Cast Out', connection: 'Christ unmasks Satan\'s murderous character before the unfallen universe.' },
      { ref: 'Colossians 2:15', verseId: 'col-2-15', testament: 'NT', title: 'Principalities and Powers Disarmed', connection: 'Having spoiled principalities and powers, He made a show of them openly, triumphing over them in it.' },
      { ref: 'Revelation 20:7-10', verseId: 'rev-20-10', testament: 'NT', title: 'The Final Rebellion and Lake of Fire', connection: 'Satan leads the resurrected wicked in a hopeless assault on the New Jerusalem and is consumed.' },
      { ref: 'Nahum 1:9', verseId: 'nam-1-9', testament: 'OT', title: 'Affliction Shall Not Rise Up the Second Time', connection: 'The character and government of God eternally vindicated: sin and suffering never recur throughout eternity.' },
    ],
  },

  // ── 14. THE SPIRIT OF PROPHECY & THE REMNANT ──────────────────────────
  {
    id: 'spirit-of-prophecy',
    number: 14,
    name: 'The Spirit of Prophecy & The Remnant',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Amos 3:7; Revelation 12:17; Revelation 19:10',
    primaryAnchorVerseId: 'amo-3-7',
    summary: 'God has always guided His covenant people through prophetic messengers. In the last days, the remnant church is identified by two identifying marks: keeping the commandments of God and having the testimony of Jesus, which is the Spirit of Prophecy.',
    steps: [
      { ref: 'Amos 3:7', verseId: 'amo-3-7', testament: 'OT', title: 'Surely the Lord GOD Will Do Nothing', connection: 'The Lord reveals His secret unto His servants the prophets before executing major events.' },
      { ref: 'Numbers 12:6', verseId: 'num-12-6', testament: 'OT', title: 'Visions and Dreams', connection: 'God speaks to His prophets in visions, dreams, and divine communication.' },
      { ref: 'Joel 2:28-29', verseId: 'jol-2-28', testament: 'OT', title: 'Prophetic Outpouring in the Last Days', connection: '"I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy."' },
      { ref: '1 Corinthians 12:28; 14:1', verseId: '1co-12-28', testament: 'NT', title: 'Spiritual Gifts in the Church', connection: 'The gift of prophecy set within the body of Christ until we all come to the unity of faith.' },
      { ref: 'Revelation 12:17', verseId: 'rev-12-17', testament: 'NT', title: 'Dragon Wroth with the Remnant', connection: 'War against those who keep the commandments of God and have the testimony of Jesus Christ.' },
      { ref: 'Revelation 19:10', verseId: 'rev-19-10', testament: 'NT', title: 'The Testimony of Jesus Is the Spirit of Prophecy', connection: 'The angel explicitly defines the testimony of Jesus as the prophetic gift operating in the remnant.' },
      { ref: 'Revelation 22:9', verseId: 'rev-22-9', testament: 'NT', title: 'Thy Brethren the Prophets', connection: 'The prophetic line confirmed as fellow-servants with those who keep the sayings of the book.' },
    ],
  },

  // ── 15. THE MILLENNIUM & EARTH DESOLATE ────────────────────────────────
  {
    id: 'millennium-earth-desolate',
    number: 15,
    name: 'The Millennium & The Earth Desolate',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Leviticus 25:10; Jeremiah 4:23-26; Revelation 20:1-15',
    primaryAnchorVerseId: 'rev-20-4',
    summary: 'The 1,000 years between the two resurrections: the righteous in heaven judging with Christ, the wicked dead in their graves, Satan bound to the chaotic and depopulated earth, followed by the descent of the New Jerusalem and the second resurrection.',
    steps: [
      { ref: 'Jeremiah 4:23-26', verseId: 'jer-4-23', testament: 'OT', title: 'Earth Without Form and Void (No Man)', connection: 'Prophetic vision of earth returned to pre-creation darkness and emptiness at the presence of the Lord.' },
      { ref: 'Isaiah 24:21-22', verseId: 'isa-24-21', testament: 'OT', title: 'Kings Shut Up in Prison for Many Days', connection: 'The wicked gathered as prisoners in the pit and visited after many days (1,000 years).' },
      { ref: '1 Thessalonians 4:16-17', verseId: '1th-4-16', testament: 'NT', title: 'The Righteous Taken to Heaven', connection: 'The saints caught up in the air to be forever with the Lord, leaving the earth desolate.' },
      { ref: 'Revelation 20:1-3', verseId: 'rev-20-1', testament: 'NT', title: 'Satan Bound to the Abyss', connection: 'Satan bound for a thousand years in the abyss of this broken, uninhabited world.' },
      { ref: 'Revelation 20:4-6', verseId: 'rev-20-4', testament: 'NT', title: 'The Saints Reign and Judge 1,000 Years', connection: 'The redeemed participate in review judgment: "Know ye not that we shall judge angels?" (1 Cor 6:2-3).' },
      { ref: 'Revelation 20:7-9', verseId: 'rev-20-7', testament: 'NT', title: 'Second Resurrection & Satan Loosed', connection: 'The rest of the dead live not until the 1,000 years are finished; Satan gathers them to attack the holy city.' },
      { ref: 'Revelation 20:11-15', verseId: 'rev-20-11', testament: 'NT', title: 'Great White Throne & Second Death', connection: 'Every knee bows, every tongue confesses; fire descends from God out of heaven and consumes them.' },
    ],
  },

  // ── 16. THE EARTH MADE NEW & NEW JERUSALEM ────────────────────────────
  {
    id: 'earth-made-new',
    number: 16,
    name: 'The Earth Made New & The New Jerusalem',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Isaiah 65:17-25; 2 Peter 3:10-13; Revelation 21:1-27',
    primaryAnchorVerseId: 'rev-21-1',
    summary: 'The ultimate restoration of all things: purified by fire, the earth is remade as the eternal home of the saved, where God\'s throne resides and no death, pain, sorrow, or curse can ever enter.',
    steps: [
      { ref: 'Isaiah 65:17-25', verseId: 'isa-65-17', testament: 'OT', title: 'New Heavens and a New Earth', connection: 'Former troubles forgotten; the wolf and the lamb shall feed together; they shall not hurt nor destroy in all my holy mountain.' },
      { ref: 'Isaiah 66:22-23', verseId: 'isa-66-22', testament: 'OT', title: 'Perpetual Worship in the New Earth', connection: 'As the new heavens and earth remain, so shall the seed of the redeemed remain, worshipping from Sabbath to Sabbath.' },
      { ref: '2 Peter 3:10-13', verseId: '2pe-3-13', testament: 'NT', title: 'Elements Melt with Fervent Heat', connection: 'Purifying fire burns up all works of sin; looking for new heavens and a new earth wherein dwelleth righteousness.' },
      { ref: 'Revelation 21:1-5', verseId: 'rev-21-1', testament: 'NT', title: 'No More Death, Sorrow, nor Pain', connection: 'New Jerusalem descends from heaven as a bride adorned; God wipes all tears; "Behold, I make all things new."' },
      { ref: 'Revelation 21:10-27', verseId: 'rev-21-10', testament: 'NT', title: 'The Holy City Described', connection: 'Twelve foundations of precious stones bearing the apostles\' names; twelve pearl gates bearing Israel\'s tribes.' },
      { ref: 'Revelation 22:1-5', verseId: 'rev-22-1', testament: 'NT', title: 'The Throne, River, and Tree of Life', connection: 'River of life flows from the throne; tree of life yields twelve manners of fruits; His servants shall see His face and reign forever and ever.' },
    ],
  },

  // ── 17. THE BRANCH (TZEMACH): RIGHTEOUS SHOOT ─────────────────────────
  {
    id: 'the-branch-tzemach',
    number: 17,
    name: 'The Branch (Tzemach) / The Righteous Shoot',
    category: 'Messianic Types',
    primaryAnchor: 'Isaiah 11:1; Jeremiah 23:5-6; Zechariah 6:12-13',
    primaryAnchorVerseId: 'isa-11-1',
    summary: 'The royal Messianic title Tzemach (Branch): a living shoot springing from the dead tree of David\'s line, growing into the King-Priest who builds the true temple of God.',
    steps: [
      { ref: 'Isaiah 4:2', verseId: 'isa-4-2', testament: 'OT', title: 'The Branch of the LORD Beautiful and Glorious', connection: 'Messiah as the divine Branch of Yahweh bringing fruitfulness to the remnant.' },
      { ref: 'Isaiah 11:1-5', verseId: 'isa-11-1', testament: 'OT', title: 'A Rod Out of the Stem of Jesse', connection: 'A shoot arising from the cut-down stump of David\'s royal house, anointed with the Spirit.' },
      { ref: 'Jeremiah 23:5-6', verseId: 'jer-23-5', testament: 'OT', title: 'A Righteous Branch Reigning Wisely', connection: 'A King executing judgment, called THE LORD OUR RIGHTEOUSNESS (Yahweh-Tsidkenu).' },
      { ref: 'Jeremiah 33:15', verseId: 'jer-33-15', testament: 'OT', title: 'The Branch of Righteousness to Grow Up', connection: 'Covenant fidelity guaranteed to David: an eternal seed upon his throne.' },
      { ref: 'Zechariah 3:8', verseId: 'zec-3-8', testament: 'OT', title: 'My Servant the BRANCH', connection: 'Joshua the high priest given clean garments, a sign of the coming Branch.' },
      { ref: 'Zechariah 6:12-13', verseId: 'zec-6-12', testament: 'OT', title: 'The Branch Shall Build the Temple', connection: 'The Branch grows up out of his place, rules as King and Priest upon his throne.' },
      { ref: 'Luke 1:78', verseId: 'luk-1-78', testament: 'NT', title: 'The Dayspring (Anatolē / Branch) from on High', connection: 'Zacharias hails Christ as the rising Branch/Dayspring visiting those in darkness.' },
    ],
  },

  // ── 18. THE SUFFERING SERVANT (EBED YAHWEH) ────────────────────────────
  {
    id: 'suffering-servant',
    number: 18,
    name: 'The Suffering Servant (Ebed Yahweh)',
    category: 'Messianic Types',
    primaryAnchor: 'Isaiah 42:1-4; 52:13–53:12',
    primaryAnchorVerseId: 'isa-53-5',
    summary: 'The four Servant Songs of Isaiah (chs. 42, 49, 50, 52-53) reveal the heart of God: the Messiah delivers not by military conquest, but by submissive suffering, taking the sin of the world upon Himself as an atoning guilt offering.',
    steps: [
      { ref: 'Isaiah 42:1-4', verseId: 'isa-42-1', testament: 'OT', title: 'First Song: The Gentle Servant', connection: 'Spirit-anointed Servant who does not cry aloud; a bruised reed He will not break.' },
      { ref: 'Isaiah 49:1-6', verseId: 'isa-49-6', testament: 'OT', title: 'Second Song: Light to the Gentiles', connection: 'Too light a thing to restore Jacob alone: given as a light to the nations to the ends of the earth.' },
      { ref: 'Isaiah 50:4-9', verseId: 'isa-50-6', testament: 'OT', title: 'Third Song: Back Given to Smiters', connection: 'Morning by morning wakeneth my ear; gave back to the smiters and hid not face from spitting.' },
      { ref: 'Isaiah 52:13-15', verseId: 'isa-52-13', testament: 'OT', title: 'Visage Marred More Than Any Man', connection: 'He shall deal prudently, be exalted very high; His visage marred, yet sprinkling many nations.' },
      { ref: 'Isaiah 53:1-6', verseId: 'isa-53-5', testament: 'OT', title: 'Fourth Song: Wounded for Our Transgressions', connection: 'Despised, rejected, bearing our griefs; the LORD hath laid on Him the iniquity of us all.' },
      { ref: 'Isaiah 53:7-12', verseId: 'isa-53-12', testament: 'OT', title: 'Soul Made an Offering for Sin (Asham)', connection: 'Silent lamb, cut off out of the land of the living, making His grave with the rich, seeing His seed.' },
      { ref: 'Matthew 8:17', verseId: 'mat-8-17', testament: 'NT', title: 'Himself Bare Our Sicknesses', connection: 'Matthew sees Christ\'s compassion and healing ministry as fulfilling Isaiah 53:4.' },
      { ref: '1 Peter 2:21-25', verseId: '1pe-2-24', testament: 'NT', title: 'Bare Our Sins in His Own Body on the Tree', connection: 'Peter weaves Isaiah 53 into the theological center of Christian discipleship and atonement.' },
    ],
  },

  // ── 19. THE KINSMAN REDEEMER (GO\'EL) ──────────────────────────────────
  {
    id: 'kinsman-redeemer',
    number: 19,
    name: 'The Kinsman Redeemer (Go\'el)',
    category: 'Messianic Types',
    primaryAnchor: 'Leviticus 25:25, 47-49; Ruth 4:1-10; Revelation 5:1-9',
    primaryAnchorVerseId: 'rut-4-9',
    summary: 'Under biblical law, a near relative alone had the right to redeem lost inheritance and enslaved kin. Christ became our flesh-and-blood Brother to buy back our lost dominion and take the title deed of earth.',
    steps: [
      { ref: 'Leviticus 25:25, 47-49', verseId: 'lev-25-25', testament: 'OT', title: 'The Law of the Go\'el', connection: 'If a brother becomes poor and sells his land or person, his nearest kin may redeem it.' },
      { ref: 'Ruth 3:9-13', verseId: 'rut-3-9', testament: 'OT', title: 'Spread Thy Skirt Over Thine Handmaid', connection: 'Ruth appeals to Boaz as a kinsman redeemer; Boaz promises covenant protection.' },
      { ref: 'Ruth 4:1-10', verseId: 'rut-4-9', testament: 'OT', title: 'Boaz Buys Back the Inheritance at the Gate', connection: 'The nearer kinsman cannot redeem without marring his own inheritance; Boaz redeems all and takes Ruth as bride.' },
      { ref: 'Hebrews 2:14-18', verseId: 'heb-2-14', testament: 'NT', title: 'Partaker of Flesh and Blood', connection: 'Christ took part of flesh and blood that through death He might destroy the devil; not ashamed to call us brethren.' },
      { ref: 'Revelation 5:1-9', verseId: 'rev-5-9', testament: 'NT', title: 'Worthy to Take the Seven-Sealed Scroll', connection: 'The Lion-Lamb as our divine Go\'el steps forward to reclaim the title deed of the cosmos, purchased with His blood.' },
    ],
  },

  // ── 20. THE SHEKINAH GLORY & RETURN IN CLOUDS ─────────────────────────
  {
    id: 'shekinah-glory',
    number: 20,
    name: 'The Shekinah Glory & Return in the Clouds',
    category: 'Great Controversy',
    primaryAnchor: 'Exodus 40:34-38; Acts 1:9-11; Revelation 1:7',
    primaryAnchorVerseId: 'rev-1-7',
    summary: 'The visible manifestation of God\'s presence in the cloud and fire at the Exodus, over the mercy seat, at Christ\'s transfiguration and ascension, returning as the fiery chariot of angels at the Second Advent.',
    steps: [
      { ref: 'Exodus 13:21-22', verseId: 'exo-13-21', testament: 'OT', title: 'Pillar of Cloud and Fire', connection: 'The LORD went before them by day in a pillar of cloud, and by night in a pillar of fire.' },
      { ref: 'Exodus 40:34-38', verseId: 'exo-40-34', testament: 'OT', title: 'Glory Fills the Tabernacle', connection: 'The cloud covers the tent of congregation and the glory of the LORD fills the sanctuary.' },
      { ref: '1 Kings 8:10-11', verseId: '1ki-8-10', testament: 'OT', title: 'Cloud Fills Solomon\'s Temple', connection: 'Priests could not stand to minister because of the cloud; glory of the Lord filled the house.' },
      { ref: 'Matthew 17:5', verseId: 'mat-17-5', testament: 'NT', title: 'Bright Cloud at the Transfiguration', connection: 'A bright cloud overshadows them and the Father\'s voice speaks from the cloud.' },
      { ref: 'Acts 1:9-11', verseId: 'act-1-9', testament: 'NT', title: 'A Cloud Received Him Out of Their Sight', connection: '"This same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go."' },
      { ref: 'Daniel 7:13', verseId: 'dan-7-13', testament: 'OT', title: 'Coming with Clouds to the Ancient of Days', connection: 'The Son of Man escorted by angelic clouds into the heavenly throne room of judgment.' },
      { ref: 'Revelation 1:7', verseId: 'rev-1-7', testament: 'NT', title: 'Behold, He Cometh with Clouds', connection: 'Every eye shall see Him: the literal, visible return surrounded by the ten thousand times ten thousands of bright angels.' },
      { ref: 'Revelation 14:14', verseId: 'rev-14-14', testament: 'NT', title: 'Sitting Upon the White Cloud with Golden Crown', connection: 'Having on His head a golden crown and in His hand a sharp sickle for the final harvest.' },
    ],
  },

  // ── 21. THE HEAVENLY MANNA & BREAD OF LIFE ────────────────────────────
  {
    id: 'manna-bread-of-life',
    number: 21,
    name: 'The Heavenly Manna & The Bread of Life',
    category: 'Messianic Types',
    primaryAnchor: 'Exodus 16:4-35; John 6:31-58',
    primaryAnchorVerseId: 'joh-6-35',
    summary: 'The miraculous bread from heaven that sustained Israel in the desert was a living type of Jesus Christ, the true Bread coming down from heaven to give life to the world.',
    steps: [
      { ref: 'Exodus 16:4-35', verseId: 'exo-16-4', testament: 'OT', title: 'Bread Rained from Heaven', connection: 'Daily provision testing obedience; double portion on the sixth day honoring the holy Sabbath.' },
      { ref: 'Psalm 78:24-25', verseId: 'psa-78-24', testament: 'OT', title: 'Man Did Eat Angels\' Food', connection: 'Rained down manna upon them to eat; corn of heaven.' },
      { ref: 'John 6:31-35', verseId: 'joh-6-35', testament: 'NT', title: 'I Am the Bread of Life', connection: '"Moses gave you not that bread from heaven; but my Father giveth you the true bread from heaven."' },
      { ref: 'John 6:53-58', verseId: 'joh-6-53', testament: 'NT', title: 'Eating His Flesh and Drinking His Blood', connection: 'Spiritual assimilation of Christ\'s Word: "The words that I speak unto you, they are spirit, and they are life" (v. 63).' },
      { ref: 'Revelation 2:17', verseId: 'rev-2-17', testament: 'NT', title: 'The Hidden Manna to the Overcomer', connection: 'To him that overcometh will I give to eat of the hidden manna in the eternal paradise.' },
    ],
  },

  // ── 22. THE ELIJAH MESSAGE & THE FORERUNNER ───────────────────────────
  {
    id: 'elijah-message',
    number: 22,
    name: 'The Elijah Message & The Forerunner',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Malachi 4:5-6; Matthew 11:14; Revelation 14:6-12',
    primaryAnchorVerseId: 'mal-4-5',
    summary: 'The ministry of Elijah on Mount Carmel calling Israel back to the true God and His commandments was repeated by John the Baptist before Christ\'s first advent, and is fulfilled in the Three Angels\' Messages preparing the world for the Second Advent.',
    steps: [
      { ref: '1 Kings 18:21, 36-39', verseId: '1ki-18-21', testament: 'OT', title: 'Elijah at Carmel: Rebuilding the Broken Altar', connection: '"How long halt ye between two opinions? if the LORD be God, follow him: but if Baal, then follow him."' },
      { ref: 'Malachi 3:1', verseId: 'mal-3-1', testament: 'OT', title: 'My Messenger to Prepare the Way', connection: 'The messenger preparing the way before the Lord who comes suddenly to His temple.' },
      { ref: 'Malachi 4:5-6', verseId: 'mal-4-5', testament: 'OT', title: 'I Send You Elijah the Prophet', connection: 'Sent before the coming of the great and dreadful day of the LORD, turning hearts of fathers to children.' },
      { ref: 'Luke 1:17', verseId: 'luk-1-17', testament: 'NT', title: 'In the Spirit and Power of Elias', connection: 'John the Baptist goes before Him in the spirit and power of Elijah to make ready a people prepared for the Lord.' },
      { ref: 'Matthew 11:13-14', verseId: 'mat-11-14', testament: 'NT', title: 'This Is Elias Which Was for to Come', connection: 'Jesus affirms John\'s ministry as the antitypical Elijah of the first advent.' },
      { ref: 'Revelation 14:6-12', verseId: 'rev-14-6', testament: 'NT', title: 'The End-Time Elijah Message', connection: 'The Three Angels call modern humanity to repair the broken altar of God\'s law and worship the Creator.' },
    ],
  },

  // ── 23. THE TWO COVENANTS: PROMISE VS. LEGALISM ───────────────────────
  {
    id: 'two-covenants',
    number: 23,
    name: 'The Two Covenants: Promise vs. Legalism',
    category: 'Covenant & Law',
    primaryAnchor: 'Genesis 15:5-6; Jeremiah 31:31-34; Galatians 4:21-31',
    primaryAnchorVerseId: 'jer-31-31',
    summary: 'The Old Covenant (exemplified by Hagar and human effort) failed because of "finding fault with them" in their promises. The Everlasting/New Covenant (Sarah and God\'s promise) writes God\'s law in the heart through faith in Christ.',
    steps: [
      { ref: 'Genesis 15:5-6', verseId: 'gen-15-6', testament: 'OT', title: 'Everlasting Covenant by Grace', connection: 'Abraham believed in the LORD; and He counted it to him for righteousness; unconditional divine guarantee.' },
      { ref: 'Genesis 16:1-4', verseId: 'gen-16-1', testament: 'OT', title: 'Hagar: The Human Effort to Fulfill God\'s Promise', connection: 'Attempting to produce the promised seed through fleshly methods, generating bondage.' },
      { ref: 'Exodus 19:8; 24:7', verseId: 'exo-19-8', testament: 'OT', title: 'The Old Covenant: "All That the Lord Saith We Will Do"', connection: 'The people promised obedience in their own strength, which was broken within forty days.' },
      { ref: 'Jeremiah 31:31-34', verseId: 'jer-31-31', testament: 'OT', title: 'The New Covenant Promised', connection: 'I will put my law in their inward parts, and write it in their hearts; sins remembered no more.' },
      { ref: 'Galatians 4:21-31', verseId: 'gal-4-24', testament: 'NT', title: 'Hagar and Sarah Allegory', connection: 'Mount Sinai gendereth to bondage; Jerusalem above is free, which is the mother of us all.' },
      { ref: 'Hebrews 8:6-13', verseId: 'heb-8-6', testament: 'NT', title: 'Established Upon Better Promises', connection: 'Christ is the Mediator of a better covenant based not on human promises, but on God\'s promise to transform the heart.' },
      { ref: 'Hebrews 10:16-17', verseId: 'heb-10-16', testament: 'NT', title: 'Law Written by the Holy Spirit', connection: 'The moral law remains unchanged; instead of stone tablets, it is written on the fleshy tables of the heart.' },
    ],
  },

  // ── 24. THE FORMER & LATTER RAIN (HOLY SPIRIT OUTPOURING) ─────────────
  {
    id: 'former-latter-rain',
    number: 24,
    name: 'The Former and Latter Rain (Holy Spirit)',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Deuteronomy 11:14; Joel 2:23-28; James 5:7',
    primaryAnchorVerseId: 'jol-2-23',
    summary: 'The Palestinian agricultural cycle of the early rain (germinating the seed at Pentecost) and latter rain (ripening the grain before harvest) typifies the Holy Spirit\'s final empowerment of the church to ripen the harvest of earth.',
    steps: [
      { ref: 'Deuteronomy 11:14', verseId: 'deu-11-14', testament: 'OT', title: 'The Rain in Due Season', connection: 'I will give you the rain of your land in his due season, the first rain and the latter rain.' },
      { ref: 'Hosea 6:3', verseId: 'hos-6-3', testament: 'OT', title: 'He Shall Come as the Rain', connection: '"He shall come unto us as the rain, as the latter and former rain unto the earth."' },
      { ref: 'Joel 2:23-28', verseId: 'jol-2-23', testament: 'OT', title: 'The Former Rain Moderately and Latter Rain', connection: 'Outpouring of the Spirit causing grain floors to be full and prophesying across the nation.' },
      { ref: 'Zechariah 10:1', verseId: 'zec-10-1', testament: 'OT', title: 'Ask Ye of the LORD Rain in the Time of Latter Rain', connection: 'Special prayer commanded for the latter rain to bring showers of blessing and green grass.' },
      { ref: 'Acts 2:1-4, 16-21', verseId: 'act-2-1', testament: 'NT', title: 'Pentecost: The Early Rain', connection: 'Peter announces Joel\'s prophecy at Pentecost, inaugurating the early rain of gospel power.' },
      { ref: 'James 5:7-8', verseId: 'jam-5-7', testament: 'NT', title: 'Waiting for the Precious Fruit of the Earth', connection: 'The husbandman waiteth patiently until he receive the early and latter rain: "Be ye also patient; stablish your hearts: for the coming of the Lord draweth nigh."' },
      { ref: 'Revelation 18:1', verseId: 'rev-18-1', testament: 'NT', title: 'Earth Lightened with His Glory (The Loud Cry)', connection: 'The latter rain empowers the final proclamation, ripening the righteous grain for the sickle of Christ (Rev 14:14-16).' },
    ],
  },

  // ── 25. THE CITY OF REFUGE ────────────────────────────────────────────
  {
    id: 'city-of-refuge',
    number: 25,
    name: 'The Cities of Refuge & The Avenger of Blood',
    category: 'Messianic Types',
    primaryAnchor: 'Numbers 35:9-34; Joshua 20:1-9; Hebrews 6:18-19',
    primaryAnchorVerseId: 'num-35-11',
    summary: 'Six accessible cities set apart throughout Israel where the unintentional manslayer found sanctuary from the avenger of blood. Christ is our ultimate City of Refuge into whom we flee to lay hold upon eternal hope.',
    steps: [
      { ref: 'Numbers 35:11-15', verseId: 'num-35-11', testament: 'OT', title: 'Six Cities of Refuge Appointed', connection: 'Located within easy reach of all tribes; gates never closed; road kept clear.' },
      { ref: 'Joshua 20:1-9', verseId: 'jos-20-2', testament: 'OT', title: 'Safety within the Gates', connection: 'The slayer enters the gate, states his cause to the elders, and is protected from the go\'el (avenger of blood).' },
      { ref: 'Numbers 35:25, 28', verseId: 'num-35-25', testament: 'OT', title: 'Freedom at the Death of the High Priest', connection: 'The manslayer remained in the city until the death of the anointed high priest, after which he returned home fully redeemed.' },
      { ref: 'Psalm 46:1', verseId: 'psa-46-1', testament: 'OT', title: 'God Is Our Refuge and Strength', connection: 'A very present help in trouble; security amidst the shaking of the earth.' },
      { ref: 'Hebrews 6:18-19', verseId: 'heb-6-18', testament: 'NT', title: 'Fled for Refuge to Lay Hold upon Hope', connection: 'Strong consolation for those who have fled to Christ for refuge, having an anchor of the soul, sure and steadfast, entering within the veil.' },
    ],
  },

  // ── 26. THE YEAR OF JUBILEE & ULTIMATE LIBERATION ─────────────────────
  {
    id: 'year-of-jubilee',
    number: 26,
    name: 'The Year of Jubilee & Ultimate Deliverance',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Leviticus 25:8-55; Isaiah 61:1-2; Luke 4:16-21',
    primaryAnchorVerseId: 'lev-25-10',
    summary: 'Every fiftieth year, inaugurated on the Day of Atonement with the sounding of the trumpet throughout all the land, liberty was proclaimed: debts cancelled, slaves freed, and lost inheritances restored.',
    steps: [
      { ref: 'Leviticus 25:8-13', verseId: 'lev-25-10', testament: 'OT', title: 'Proclaim Liberty on the Day of Atonement', connection: 'The trumpet of Jubilee blown on Yom Kippur: "Ye shall hallow the fiftieth year, and proclaim liberty throughout all the land unto all the inhabitants thereof."' },
      { ref: 'Leviticus 25:23-28', verseId: 'lev-25-23', testament: 'OT', title: 'Restoration of the Ancestral Land', connection: 'The land belongs to God; in the Jubilee every man returns unto his possession.' },
      { ref: 'Isaiah 61:1-2', verseId: 'isa-61-1', testament: 'OT', title: 'The Acceptable Year of the LORD', connection: 'The Anointed Messiah proclaims liberty to the captives and the opening of the prison to them that are bound.' },
      { ref: 'Luke 4:18-21', verseId: 'luk-4-18', testament: 'NT', title: 'Jesus Inaugurates the Spiritual Jubilee', connection: 'Christ reads Isaiah 61 in Nazareth, announcing that the acceptable year of the Lord is fulfilled in Him.' },
      { ref: 'Revelation 21:3-4', verseId: 'rev-21-3', testament: 'NT', title: 'The Antitypical Eternal Jubilee', connection: 'The final restoration: earth\'s lost dominion returned to the saints; all bondage to death and sin permanently abolished.' },
    ],
  },

  // ── 27. THE BRIDE & MARRIAGE SUPPER OF THE LAMB ───────────────────────
  {
    id: 'marriage-of-the-lamb',
    number: 27,
    name: 'The Bride & The Marriage Supper of the Lamb',
    category: 'Great Controversy',
    primaryAnchor: 'Hosea 2:19-20; Ephesians 5:25-32; Revelation 19:7-9',
    primaryAnchorVerseId: 'rev-19-7',
    summary: 'God betroths His covenant people in righteousness and lovingkindness. Christ loved the church and gave Himself for her to present her holy and without blemish at the grand marriage supper of the Lamb.',
    steps: [
      { ref: 'Hosea 2:19-20', verseId: 'hos-2-19', testament: 'OT', title: 'I Will Betroth Thee Unto Me Forever', connection: 'Betrothed in righteousness, judgment, lovingkindness, and faithfulness: "thou shalt know the LORD."' },
      { ref: 'Isaiah 54:5', verseId: 'isa-54-5', testament: 'OT', title: 'Thy Maker Is Thine Husband', connection: 'The LORD of hosts is His name; and thy Redeemer the Holy One of Israel; The God of the whole earth.' },
      { ref: 'Matthew 22:1-14', verseId: 'mat-22-2', testament: 'NT', title: 'The Wedding Garment Inspection', connection: 'The King inspects guests before the feast; the wedding garment of Christ\'s imputed and imparted righteousness.' },
      { ref: 'Ephesians 5:25-32', verseId: 'eph-5-25', testament: 'NT', title: 'Washed by the Water of the Word', connection: 'Christ loved the church to sanctify and cleanse it, that He might present it to Himself a glorious church without spot or wrinkle.' },
      { ref: 'Revelation 19:7-9', verseId: 'rev-19-7', testament: 'NT', title: 'The Marriage of the Lamb Is Come', connection: '"Let us be glad and rejoice, and give honour to him: for the marriage of the Lamb is come, and his wife hath made herself ready."' },
      { ref: 'Revelation 21:2, 9-10', verseId: 'rev-21-2', testament: 'NT', title: 'The Bride, the Lamb\'s Wife (New Jerusalem)', connection: 'The Holy City descending out of heaven from God, adorned as a bride for her husband.' },
    ],
  },

  // ── 28. THE ARK OF THE COVENANT & GOD\'S UNCHANGING LAW ────────────────
  {
    id: 'ark-of-the-covenant',
    number: 28,
    name: 'The Ark of the Covenant & God\'s Unchanging Law',
    category: 'Covenant & Law',
    primaryAnchor: 'Exodus 25:10-22; Revelation 11:19',
    primaryAnchorVerseId: 'rev-11-19',
    summary: 'Inside the Ark beneath the Mercy Seat lay the two tables of stone written with the finger of God. In the final crisis, heaven\'s temple is opened, revealing the original copy of the Ten Commandments as the eternal standard of judgment.',
    steps: [
      { ref: 'Exodus 25:16, 21-22', verseId: 'exo-25-16', testament: 'OT', title: 'Testimony Put Inside the Ark', connection: 'The Ten Commandments placed inside the golden ark; the mercy seat rests above it, where God communes.' },
      { ref: 'Exodus 31:18', verseId: 'exo-31-18', testament: 'OT', title: 'Written with the Finger of God', connection: 'Two tables of testimony, tables of stone, written directly by the divine finger.' },
      { ref: 'Deuteronomy 10:1-5', verseId: 'deu-10-1', testament: 'OT', title: 'Kept Undamaged Beneath the Mercy Seat', connection: 'Moses places the second set of stones into the ark where they remained.' },
      { ref: 'James 2:10-12', verseId: 'jam-2-10', testament: 'NT', title: 'The Law of Liberty and Judgment', connection: 'Whosoever offends in one point is guilty of all: "So speak ye, and so do, as they that shall be judged by the law of liberty."' },
      { ref: 'Revelation 11:19', verseId: 'rev-11-19', testament: 'NT', title: 'The Ark Seen in the Heavenly Temple', connection: 'When the temple of God was opened in heaven, the Ark of His Testament was seen, confirming the eternal immutability of the Decalogue.' },
      { ref: 'Revelation 14:12', verseId: 'rev-14-12', testament: 'NT', title: 'Keeping the Commandments of God', connection: 'The distinguishing mark of the remnant who withstand the beast: keeping the commandments of God and faith of Jesus.' },
    ],
  },

  // ── 29. THE VOICE IN THE WILDERNESS ───────────────────────────────────
  {
    id: 'voice-in-wilderness',
    number: 29,
    name: 'The Voice in the Wilderness & Highway of the King',
    category: 'Messianic Types',
    primaryAnchor: 'Isaiah 40:3-5; Matthew 3:1-3; John 1:23',
    primaryAnchorVerseId: 'isa-40-3',
    summary: 'Preparing the way of Jehovah through repentance, casting up a highway in the desert, flattening mountains of human pride, and lifting up the valleys of humiliation.',
    steps: [
      { ref: 'Isaiah 40:3-5', verseId: 'isa-40-3', testament: 'OT', title: 'Prepare the Way of the LORD', connection: 'Make straight in the desert a highway for our God; every valley exalted and every mountain made low.' },
      { ref: 'Malachi 3:1', verseId: 'mal-3-1', testament: 'OT', title: 'Messenger to Clear the Path', connection: 'Behold, I will send my messenger, and he shall prepare the way before me.' },
      { ref: 'Matthew 3:1-3', verseId: 'mat-3-1', testament: 'NT', title: 'John the Baptist in Judea', connection: 'Repent ye: for the kingdom of heaven is at hand; preaching in the wilderness of Judea.' },
      { ref: 'John 1:23', verseId: 'joh-1-23', testament: 'NT', title: 'I Am the Voice Crying in the Wilderness', connection: 'John identifies himself not as Messiah or Elijah redivivus, but purely as the voice pointing to Christ.' },
      { ref: 'Revelation 14:6-7', verseId: 'rev-14-6', testament: 'NT', title: 'The Global Voice in the Last Days', connection: 'The everlasting gospel announced with a loud voice to prepare the world for the King of kings.' },
    ],
  },

  // ── 30. THE BRIGHT AND MORNING STAR ───────────────────────────────────
  {
    id: 'morning-star',
    number: 30,
    name: 'The Star Out of Jacob & The Bright and Morning Star',
    category: 'Messianic Types',
    primaryAnchor: 'Numbers 24:17; 2 Peter 1:19; Revelation 22:16',
    primaryAnchorVerseId: 'rev-22-16',
    summary: 'Balaam foresaw a Star rising out of Jacob. Peter describes prophecy as a light shining until the day dawn and the day star arise in our hearts. Christ declares Himself the Bright and Morning Star announcing the eternal day.',
    steps: [
      { ref: 'Numbers 24:17', verseId: 'num-24-17', testament: 'OT', title: 'There Shall Come a Star Out of Jacob', connection: 'Balaam\'s unwilling oracle: "I shall see him, but not now: I shall behold him, but not nigh: there shall come a Star out of Jacob."' },
      { ref: 'Matthew 2:1-2', verseId: 'mat-2-2', testament: 'NT', title: 'We Have Seen His Star in the East', connection: 'The Persian Magi guided by the prophetic star to the birthplace of the King of the Jews.' },
      { ref: '2 Peter 1:19', verseId: '2pe-1-19', testament: 'NT', title: 'Until the Day Star Arise in Your Hearts', connection: 'The more sure word of prophecy shining as a light in a dark place until the day dawns.' },
      { ref: 'Revelation 2:28', verseId: 'rev-2-28', testament: 'NT', title: 'I Will Give Him the Morning Star', connection: 'Christ promises His own radiant presence and victory to the overcoming believer.' },
      { ref: 'Revelation 22:16', verseId: 'rev-22-16', testament: 'NT', title: 'The Root and Offspring of David, The Morning Star', connection: 'Christ\'s climactic self-testimony: the divine Root of David and the herald of eternal dawn.' },
    ],
  },

  // ── 31. THE LION OF THE TRIBE OF JUDAH ────────────────────────────────
  {
    id: 'lion-of-judah',
    number: 31,
    name: 'The Lion of the Tribe of Judah',
    category: 'Messianic Types',
    primaryAnchor: 'Genesis 49:9-10; Revelation 5:5',
    primaryAnchorVerseId: 'rev-5-5',
    summary: 'Jacob blessed Judah as a lion\'s whelp, victorious over his enemies. In Revelation, the weeping seer is told the Lion of Judah has prevailed, but when he turns, he beholds a slain Lamb; Christ conquers through sacrificial love.',
    steps: [
      { ref: 'Genesis 49:8-10', verseId: 'gen-49-9', testament: 'OT', title: 'Judah Is a Lion\'s Whelp', connection: 'From the prey thou art gone up; he stooped down, he couched as a lion; the scepter shall not depart until Shiloh come.' },
      { ref: 'Numbers 24:9', verseId: 'num-24-9', testament: 'OT', title: 'Couched as a Lion: Blessed Is He That Blesseth Thee', connection: 'Balaam confirms the royal leonine destiny of Israel\'s Messiah.' },
      { ref: 'Hebrews 7:14', verseId: 'heb-7-14', testament: 'NT', title: 'Evident Our Lord Sprang Out of Juda', connection: 'New Testament confirmation of Christ\'s genealogical descent from Judah.' },
      { ref: 'Revelation 5:5-6', verseId: 'rev-5-5', testament: 'NT', title: 'The Lion Prevailed, Yet Behold a Lamb', connection: 'The Lion of Judah conquers by becoming the Lamb slain; omnipotent authority united with boundless self-sacrifice.' },
      { ref: 'Revelation 19:11-16', verseId: 'rev-19-11', testament: 'NT', title: 'The Conquering King of Kings', connection: 'Judging and making war in righteousness; the Lion reigning supreme over all worldly powers.' },
    ],
  },

  // ── 32. THE GOOD SHEPHERD ─────────────────────────────────────────────
  {
    id: 'good-shepherd',
    number: 32,
    name: 'The Good Shepherd & The Flock of God',
    category: 'Messianic Types',
    primaryAnchor: 'Psalm 23:1-6; Ezekiel 34:11-24; John 10:1-18',
    primaryAnchorVerseId: 'joh-10-11',
    summary: 'The LORD is the Shepherd of Israel who searches out His lost sheep, delivers them from abusive hirelings, lays down His life for the flock, and gathers one fold under one Shepherd.',
    steps: [
      { ref: 'Psalm 23:1-6', verseId: 'psa-23-1', testament: 'OT', title: 'The LORD Is My Shepherd', connection: 'Leading beside still waters, restoring the soul, guiding through the valley of the shadow of death.' },
      { ref: 'Isaiah 40:11', verseId: 'isa-40-11', testament: 'OT', title: 'He Shall Feed His Flock Like a Shepherd', connection: 'Gathering the lambs with His arm, carrying them in His bosom, gently leading those with young.' },
      { ref: 'Ezekiel 34:11-24', verseId: 'ezk-34-11', testament: 'OT', title: 'I Myself Will Search My Sheep', connection: 'God rebukes false shepherds who feed themselves; promises to set up one Shepherd, David, over them.' },
      { ref: 'John 10:11-16', verseId: 'joh-10-11', testament: 'NT', title: 'The Good Shepherd Giveth His Life', connection: 'Jesus contrasts Himself with the hireling; He knows His sheep by name, lays down His life, and gathers other sheep.' },
      { ref: 'Hebrews 13:20', verseId: 'heb-13-20', testament: 'NT', title: 'The Great Shepherd Brought from the Dead', connection: 'Brought again from the dead through the blood of the everlasting covenant.' },
      { ref: '1 Peter 5:4', verseId: '1pe-5-4', testament: 'NT', title: 'When the Chief Shepherd Shall Appear', connection: 'The Chief Shepherd rewards faithful under-shepherds with a crown of glory that fadeth not away.' },
    ],
  },

  // ── 33. THE TRUE VINE & THE BRANCHES ──────────────────────────────────
  {
    id: 'true-vine',
    number: 33,
    name: 'The True Vine & The Fruitful Branches',
    category: 'Messianic Types',
    primaryAnchor: 'Psalm 80:8-16; Isaiah 5:1-7; John 15:1-8',
    primaryAnchorVerseId: 'joh-15-1',
    summary: 'Ancient Israel was planted as a noble vine from Egypt but brought forth wild grapes. Christ came as the True Vine; only by abiding in Him can the branches bear fruit unto eternal life.',
    steps: [
      { ref: 'Psalm 80:8-16', verseId: 'psa-80-8', testament: 'OT', title: 'A Vine Brought Out of Egypt', connection: 'God cast out the heathen and planted a vine that took deep root and filled the land.' },
      { ref: 'Isaiah 5:1-7', verseId: 'isa-5-1', testament: 'OT', title: 'The Song of the Beloved\'s Vineyard', connection: 'Fenced, cleared of stones, planted with choicest vine; yet brought forth wild grapes; judgment pronounced.' },
      { ref: 'Jeremiah 2:21', verseId: 'jer-2-21', testament: 'OT', title: 'Turned into the Degenerate Plant of a Strange Vine', connection: 'The tragic spiritual apostasy of unfaithful Israel.' },
      { ref: 'John 15:1-8', verseId: 'joh-15-1', testament: 'NT', title: 'I Am the True Vine, My Father Is the Husbandman', connection: 'Every branch in Me that beareth not fruit He taketh away; without Me ye can do nothing.' },
      { ref: 'Romans 11:16-24', verseId: 'rom-11-17', testament: 'NT', title: 'Grafted Into the Good Olive Tree', connection: 'Wild olive branches (Gentiles) grafted into the natural stock through faith.' },
    ],
  },

  // ── 34. THE GOLDEN ALTAR & PRAYERS OF THE SAINTS ──────────────────────
  {
    id: 'altar-of-incense',
    number: 34,
    name: 'The Golden Altar & Prayers of the Saints',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Exodus 30:1-10; Psalm 141:2; Revelation 8:3-4',
    primaryAnchorVerseId: 'rev-8-3',
    summary: 'The incense burning continually on the golden altar before the veil represented the merits and intercession of Christ mingled with the prayers of the saints, ascending as a sweet-smelling savor to God.',
    steps: [
      { ref: 'Exodus 30:1-10', verseId: 'exo-30-1', testament: 'OT', title: 'The Altar of Incense Before the Veil', connection: 'Aaron burns sweet incense every morning and evening; perpetual incense before the LORD.' },
      { ref: 'Leviticus 16:12-13', verseId: 'lev-16-12', testament: 'OT', title: 'Incense Covering the Mercy Seat on Yom Kippur', connection: 'Censer full of burning coals from off the altar with sweet incense beaten small, that the cloud of incense may cover the mercy seat.' },
      { ref: 'Psalm 141:2', verseId: 'psa-141-2', testament: 'OT', title: 'Let My Prayer Be Set Forth Before Thee as Incense', connection: 'The lifting up of hands as the evening sacrifice.' },
      { ref: 'Luke 1:9-11', verseId: 'luk-1-9', testament: 'NT', title: 'Zacharias at the Altar of Incense', connection: 'The whole multitude praying without at the time of incense; angel Gabriel appears on the right side of the altar.' },
      { ref: 'Revelation 8:3-4', verseId: 'rev-8-3', testament: 'NT', title: 'Much Incense Given with the Prayers of All Saints', connection: 'An angel with a golden censer offers incense on the golden altar before the throne; the smoke ascends before God.' },
    ],
  },

  // ── 35. THE GOLDEN LAMPSTAND & SEVEN SPIRITS ──────────────────────────
  {
    id: 'golden-lampstand',
    number: 35,
    name: 'The Golden Lampstand & The Seven Spirits of God',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Exodus 25:31-40; Zechariah 4:1-14; Revelation 1:12-20',
    primaryAnchorVerseId: 'rev-1-12',
    summary: 'Beaten from pure gold with seven lamps kept burning continually, the menorah symbolized the Holy Spirit imparting light to the church, and Christ walking among the golden candlesticks.',
    steps: [
      { ref: 'Exodus 25:31-40', verseId: 'exo-25-31', testament: 'OT', title: 'Menorah of Beaten Pure Gold', connection: 'Seven lamps made of one beaten work of pure gold, giving light over against the sanctuary.' },
      { ref: 'Leviticus 24:2-4', verseId: 'lev-24-2', testament: 'OT', title: 'Pure Oil Olive Beaten for the Light', connection: 'The lamps ordered continually from evening to morning before the LORD.' },
      { ref: 'Zechariah 4:1-6, 14', verseId: 'zec-4-2', testament: 'OT', title: 'Two Olive Trees: Not by Might nor by Power', connection: 'Oil flowing directly from two living olive trees into the lampstand: "Not by might, nor by power, but by my spirit, saith the LORD of hosts."' },
      { ref: 'Revelation 1:12-20', verseId: 'rev-1-12', testament: 'NT', title: 'Christ Walking in the Midst of Seven Candlesticks', connection: 'The seven candlesticks are the seven churches; Christ ministers directly in their midst holding the stars in His right hand.' },
      { ref: 'Revelation 4:5', verseId: 'rev-4-5', testament: 'NT', title: 'Seven Lamps of Fire Before the Throne', connection: 'Burning before the heavenly throne, which are the seven Spirits of God (the complete fullness of the Holy Spirit).' },
    ],
  },

  // ── 36. THE PILLAR OF CLOUD AND FIRE ──────────────────────────────────
  {
    id: 'pillar-of-cloud',
    number: 36,
    name: 'The Pillar of Cloud and Fire (Divine Guidance)',
    category: 'Great Controversy',
    primaryAnchor: 'Exodus 13:21-22; Isaiah 4:5-6; 1 Corinthians 10:1-2',
    primaryAnchorVerseId: 'exo-13-21',
    summary: 'The miraculous supernatural canopy that guided Israel by day and illuminated them by night, standing between God\'s people and Pharaoh\'s pursuing army, prefiguring the Holy Spirit\'s defense of the church.',
    steps: [
      { ref: 'Exodus 13:21-22', verseId: 'exo-13-21', testament: 'OT', title: 'The Pillar Going Before Israel', connection: 'He took not away the pillar of cloud by day, nor the pillar of fire by night, from before the people.' },
      { ref: 'Exodus 14:19-20', verseId: 'exo-14-19', testament: 'OT', title: 'Defense Between Israel and Egypt', connection: 'The pillar moved and stood behind them: darkness to the Egyptians, but light by night to Israel.' },
      { ref: 'Nehemiah 9:19', verseId: 'neh-9-19', testament: 'OT', title: 'God Forsook Them Not in the Wilderness', connection: 'In manifold mercies, the pillar did not depart despite their golden calf apostasy.' },
      { ref: 'Isaiah 4:5-6', verseId: 'isa-4-5', testament: 'OT', title: 'A Cloud and Smoke by Day in Mount Zion', connection: 'The LORD creates upon every dwelling place of mount Zion a cloud and smoke by day and the shining of a flaming fire by night.' },
      { ref: '1 Corinthians 10:1-2', verseId: '1co-10-1', testament: 'NT', title: 'Baptized Unto Moses in the Cloud', connection: 'All our fathers were under the cloud, and all passed through the sea; baptized in the cloud and in the sea.' },
    ],
  },

  // ── 37. THE SEAL OF GOD VS. MARK OF THE BEAST ─────────────────────────
  {
    id: 'seal-of-god',
    number: 37,
    name: 'The Seal of God vs. The Mark of the Beast',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Ezekiel 9:4; Revelation 7:2-3; Revelation 14:1, 9-11',
    primaryAnchorVerseId: 'rev-7-2',
    summary: 'The grand dividing line of the final crisis: the Seal of the Living God (the Sabbath of the Fourth Commandment containing God\'s name, title, and territory) placed in the foreheads of the faithful versus the mark of apostasy enforced by worldly authority.',
    steps: [
      { ref: 'Ezekiel 9:4-6', verseId: 'ezk-9-4', testament: 'OT', title: 'The Mark upon the Foreheads of the Mourners', connection: 'Set a mark upon the foreheads of the men that sigh and that cry for all the abominations done in the midst thereof.' },
      { ref: 'Exodus 20:8-11; 31:13', verseId: 'exo-20-11', testament: 'OT', title: 'The Sabbath as the Sign of God', connection: 'The sign containing the three elements of an official seal: His name (LORD thy God), His title (Creator/Made), and His territory (heaven, earth, sea).' },
      { ref: 'Revelation 7:1-3', verseId: 'rev-7-2', testament: 'NT', title: 'Four Angels Holding the Four Winds', connection: '"Hurt not the earth, neither the sea, nor the trees, till we have sealed the servants of our God in their foreheads."' },
      { ref: 'Revelation 13:16-17', verseId: 'rev-13-16', testament: 'NT', title: 'The Mark of the Beast Enforced', connection: 'All receive a mark in their right hand or in their foreheads; economic boycott and death decree.' },
      { ref: 'Revelation 14:1', verseId: 'rev-14-1', testament: 'NT', title: '144,000 with the Father\'s Name in Their Foreheads', connection: 'Standing victoriously on Mount Sion having His Father\'s name written in their foreheads.' },
      { ref: 'Revelation 14:9-11', verseId: 'rev-14-9', testament: 'NT', title: 'The Warning Against the Beast\'s Mark', connection: 'If any man worship the beast and receive his mark, he shall drink of the wine of the wrath of God.' },
      { ref: 'Revelation 15:2', verseId: 'rev-15-2', testament: 'NT', title: 'Victory on the Sea of Glass', connection: 'The redeemed standing upon the sea of glass having gotten the victory over the beast, his image, and his mark.' },
    ],
  },

  // ── 38. THE FALL OF BABYLON (BABEL TO REVELATION) ─────────────────────
  {
    id: 'fall-of-babylon',
    number: 38,
    name: 'The Fall of Babylon (Babel to Revelation)',
    category: 'Great Controversy',
    primaryAnchor: 'Genesis 11:1-9; Jeremiah 51:6-9; Revelation 18:1-24',
    primaryAnchorVerseId: 'rev-18-2',
    summary: 'The rebellion of Nimrod\'s Babel (human pride constructing a way to heaven) developed into imperial Babylon and finally into spiritual Babylon: the apostate end-time religious confederacy that persecutes God\'s people until her utter destruction.',
    steps: [
      { ref: 'Genesis 11:1-9', verseId: 'gen-11-4', testament: 'OT', title: 'The Tower of Babel: Making Us a Name', connection: 'Self-salvation and rebellion against God\'s scattering command; tongues confounded.' },
      { ref: 'Daniel 4:30', verseId: 'dan-4-30', testament: 'OT', title: 'Is Not This Great Babylon, That I Have Built?', connection: 'Nebuchadnezzar\'s boastful pride epitomizing the Babylonian spirit of self-deification.' },
      { ref: 'Daniel 5:1-31', verseId: 'dan-5-25', testament: 'OT', title: 'Mene, Mene, Tekel, Upharsin: Overthrow of Babylon', connection: 'Belshazzar\'s desecration of holy sanctuary vessels; Babylon falls in a single night.' },
      { ref: 'Jeremiah 51:6-9', verseId: 'jer-51-6', testament: 'OT', title: 'Flee Out of the Midst of Babylon', connection: '"Flee out of the midst of Babylon, and deliver every man his soul... for this is the time of the LORD\'S vengeance."' },
      { ref: 'Revelation 14:8', verseId: 'rev-14-8', testament: 'NT', title: 'Babylon Is Fallen, That Great City', connection: 'Second Angel\'s announcement of moral apostasy.' },
      { ref: 'Revelation 17:1-6', verseId: 'rev-17-5', testament: 'NT', title: 'Mystery, Babylon the Great, Mother of Harlots', connection: 'The scarlet woman drunken with the blood of the saints, riding upon the seven-headed beast.' },
      { ref: 'Revelation 18:1-4', verseId: 'rev-18-4', testament: 'NT', title: 'Come Out of Her, My People', connection: 'The urgent final call before the plagues consume spiritual Babylon.' },
      { ref: 'Revelation 18:21', verseId: 'rev-18-21', testament: 'NT', title: 'Cast as a Great Millstone into the Sea', connection: 'Thus with violence shall that great city Babylon be thrown down, and shall be found no more at all.' },
    ],
  },

  // ── 39. THE SECOND ADVENT IN POWER AND GLORY ──────────────────────────
  {
    id: 'second-advent',
    number: 39,
    name: 'The Second Advent in Power and Glory',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Matthew 24:27-31; 1 Thessalonians 4:16-17; Revelation 19:11-16',
    primaryAnchorVerseId: 'rev-19-11',
    summary: 'The blessed hope of the church: the personal, literal, bodily, audible, and visible return of Jesus Christ in the clouds of heaven with all the holy angels to resurrect the righteous dead, translate the living saints, and destroy the wicked.',
    steps: [
      { ref: 'Job 19:25-27', verseId: 'job-19-25', testament: 'OT', title: 'My Redeemer Liveth and Shall Stand on the Earth', connection: 'The patriarch\'s bedrock expectation of bodily sight of God at the latter day.' },
      { ref: 'Psalm 50:3-6', verseId: 'psa-50-3', testament: 'OT', title: 'Our God Shall Come, and Shall Not Keep Silence', connection: 'A fire shall devour before Him, and it shall be very tempestuous round about Him.' },
      { ref: 'Isaiah 25:9', verseId: 'isa-25-9', testament: 'OT', title: 'Lo, This Is Our God; We Have Waited for Him', connection: 'The triumphal shout of the saved at the appearing of Christ.' },
      { ref: 'Matthew 24:27, 30-31', verseId: 'mat-24-27', testament: 'NT', title: 'As Lightning Shineth from the East to the West', connection: 'Not secret; seen by every tribe; sending His angels with a great sound of a trumpet.' },
      { ref: 'Acts 1:11', verseId: 'act-1-11', testament: 'NT', title: 'This Same Jesus Shall So Come in Like Manner', connection: 'Literal, bodily, personal return as He ascended from Mount Olivet.' },
      { ref: '1 Thessalonians 4:16-17', verseId: '1th-4-16', testament: 'NT', title: 'With a Shout, Voice of Archangel, Trump of God', connection: 'Dead in Christ rise first, then we which are alive and remain caught up together in the clouds.' },
      { ref: 'Titus 2:13', verseId: 'tit-2-13', testament: 'NT', title: 'The Blessed Hope and Glorious Appearing', connection: 'The focal point of Christian faith and sanctification in a fallen world.' },
      { ref: 'Revelation 1:7', verseId: 'rev-1-7', testament: 'NT', title: 'Every Eye Shall See Him', connection: 'Universal visibility; those who pierced Him also resurrect in a special resurrection.' },
      { ref: 'Revelation 19:11-16', verseId: 'rev-19-11', testament: 'NT', title: 'King of Kings and Lord of Lords', connection: 'Riding upon a white horse, clothed in a vesture dipped in blood, smiting the nations with the sword of His mouth.' },
    ],
  },

  // ── 40. THE HIGH PRIEST\'S BREASTPLATE & INTERCESSION ──────────────────
  {
    id: 'high-priest-breastplate',
    number: 40,
    name: 'The High Priest\'s Breastplate & Perpetual Intercession',
    category: 'Sanctuary & Priesthood',
    primaryAnchor: 'Exodus 28:15-30; Hebrews 4:14-16; Hebrews 7:25',
    primaryAnchorVerseId: 'exo-28-29',
    summary: 'Aaron bore the names of the twelve tribes engraved on precious stones over his heart and on his shoulders whenever he entered the holy place. Christ bears our individual names continuously before the Father\'s throne.',
    steps: [
      { ref: 'Exodus 28:9-12', verseId: 'exo-28-9', testament: 'OT', title: 'Names on the Onyx Stones of the Shoulders', connection: 'Bearing the weight and government of God\'s people upon His shoulders of omnipotent power.' },
      { ref: 'Exodus 28:15-30', verseId: 'exo-28-29', testament: 'OT', title: 'The Breastplate of Judgment Over the Heart', connection: 'Aaron bears the names of the children of Israel in the breastplate of judgment upon his heart for a memorial continually.' },
      { ref: 'Exodus 28:30', verseId: 'exo-28-30', testament: 'OT', title: 'The Urim and Thummim: Divine Guidance', connection: 'Lights and perfections: seeking divine will and guidance through the High Priest.' },
      { ref: 'Hebrews 4:14-16', verseId: 'heb-4-14', testament: 'NT', title: 'Touched with the Feeling of Our Infirmities', connection: 'We have not an high priest which cannot be touched with our infirmities; come boldly to the throne of grace.' },
      { ref: 'Hebrews 7:25', verseId: 'heb-7-25', testament: 'NT', title: 'Ever Living to Make Intercession for Them', connection: 'Able to save them to the uttermost that come unto God by Him, seeing He ever liveth to make intercession.' },
    ],
  },

  // ── 41. THE REMNANT AND THE FINAL CRISIS ──────────────────────────────
  {
    id: 'remnant-final-crisis',
    number: 41,
    name: 'The Remnant and the Final Crisis',
    category: 'Great Controversy',
    primaryAnchor: 'Isaiah 10:20-22; Revelation 12:17; Revelation 14:12',
    primaryAnchorVerseId: 'rev-12-17',
    summary: 'Throughout sacred history (Noah, Elijah\'s 7,000, the Babylonian return, the apostolic church), God has preserved a faithful remnant who stand true against prevailing apostasy, culminating in the 144,000.',
    steps: [
      { ref: 'Genesis 7:23', verseId: 'gen-7-23', testament: 'OT', title: 'Noah Only Remained Alive', connection: 'Preserved through the ark of salvation while the corrupt antediluvian world perished.' },
      { ref: '1 Kings 19:18', verseId: '1ki-19-18', testament: 'OT', title: 'Seven Thousand Who Have Not Bowed to Baal', connection: 'God preserves a faithful hidden remnant when Elijah believed he was alone.' },
      { ref: 'Isaiah 10:20-22', verseId: 'isa-10-20', testament: 'OT', title: 'The Remnant Shall Return Unto the Mighty God', connection: 'Though Israel be as the sand of the sea, a remnant shall return and rely upon the Holy One.' },
      { ref: 'Romans 11:5', verseId: 'rom-11-5', testament: 'NT', title: 'A Remnant According to the Election of Grace', connection: 'Paul demonstrates that even in Israel\'s national unbelief, a faithful remnant is preserved by grace.' },
      { ref: 'Revelation 12:17', verseId: 'rev-12-17', testament: 'NT', title: 'The Remnant of the Woman\'s Seed', connection: 'Satan targets the last remnant keeping God\'s commandments and holding the testimony of Jesus.' },
      { ref: 'Revelation 14:12', verseId: 'rev-14-12', testament: 'NT', title: 'Patience of the Saints', connection: 'Those who emerge victorious through the trials of the mark of the beast, keeping the faith of Jesus.' },
    ],
  },

  // ── 42. THE INVESTIGATIVE JUDGMENT & RESURRECTION OF LIFE ──────────────
  {
    id: 'investigative-judgment',
    number: 42,
    name: 'The Investigative Judgment & The Resurrection of Life',
    category: 'Eschatology & End-Time',
    primaryAnchor: 'Daniel 7:9-10; 2 Corinthians 5:10; Revelation 20:12',
    primaryAnchorVerseId: 'dan-7-10',
    summary: 'Before Christ returns with His rewards (Rev 22:12), an investigative review of the heavenly books takes place to determine who among the professed people of God are ready for the resurrection of life, vindicating God\'s justice and mercy before the universe.',
    steps: [
      { ref: 'Daniel 7:9-10', verseId: 'dan-7-9', testament: 'OT', title: 'The Judgment Was Set, Books Were Opened', connection: 'The Ancient of Days takes His seat; thousand thousands minister unto Him; the books of record are opened.' },
      { ref: 'Ecclesiastes 12:14', verseId: 'ecc-12-14', testament: 'OT', title: 'God Shall Bring Every Work into Judgment', connection: 'Every secret thing, whether it be good, or whether it be evil, brought under divine review.' },
      { ref: '2 Corinthians 5:10', verseId: '2co-5-10', testament: 'NT', title: 'Must All Appear Before Judgment Seat of Christ', connection: 'Every believer manifests the reality of their faith through their deeds.' },
      { ref: '1 Peter 4:17', verseId: '1pe-4-17', testament: 'NT', title: 'Judgment Must Begin at the House of God', connection: 'The pre-advent judgment investigates the household of faith first, before sentence falls upon the ungodly.' },
      { ref: 'Revelation 3:5', verseId: 'rev-3-5', testament: 'NT', title: 'Name Retained in the Book of Life', connection: 'He that overcometh, I will not blot out his name out of the book of life, but I will confess his name before my Father and angels.' },
      { ref: 'Revelation 22:12', verseId: 'rev-22-12', testament: 'NT', title: 'My Reward Is with Me to Give to Every Man', connection: 'Christ\'s arrival concludes the investigative phase: every case is decided, and He distributes the rewards.' },
    ],
  },
];

const MASTER_CHAIN_BY_ID = new Map<string, MasterChain>();
for (const c of MASTER_CHAINS) {
  MASTER_CHAIN_BY_ID.set(c.id, c);
}

// Pre-built O(1) index mapping each verse ID across all chain anchors and steps
export const CHAINS_BY_VERSE = new Map<string, MasterChain[]>();

for (const chain of MASTER_CHAINS) {
  const chainVerses = new Set<string>();

  // Primary anchor
  if (chain.primaryAnchorVerseId) chainVerses.add(chain.primaryAnchorVerseId);
  for (const v of expandVerseRange(chain.primaryAnchor)) {
    chainVerses.add(v);
  }

  // All timeline milestone steps
  for (const step of chain.steps) {
    if (step.verseId) chainVerses.add(step.verseId);
    for (const v of expandVerseRange(step.ref)) {
      chainVerses.add(v);
    }
  }

  for (const vId of chainVerses) {
    if (!CHAINS_BY_VERSE.has(vId)) CHAINS_BY_VERSE.set(vId, []);
    const list = CHAINS_BY_VERSE.get(vId)!;
    if (!list.some(c => c.id === chain.id)) list.push(chain);
  }
}

export function getMasterChainsForVerse(verseId: string): MasterChain[] {
  return CHAINS_BY_VERSE.get(verseId) || [];
}



