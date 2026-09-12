/**
 * Tier 3: Specific Messianic Prophecies
 * Catalogues specific canonical Messianic prophecies and fulfillments,
 * drawing upon Alfred Edersheim's Life and Times of Jesus the Messiah (Appendix IX)
 * and classic Sola Scriptura / Adventist Christological and historicist prophetic interpretations.
 */

import { expandVerseRange } from './refParser';

export interface MessianicProphecy {
  id: string;
  prophecyRef: string;
  otVerseId: string;
  fulfillmentRefs: string[];
  title: string;
  category:
    | 'Birth & Incarnation'
    | 'Mission & Anointing'
    | 'Betrayal & Passion'
    | 'Resurrection & Ascension'
    | 'Priesthood & Heavenly Reign'
    | 'Second Coming & Kingdom';
  edersheimChapter?: string;
  solaScripturaNote: string;
}

export const MESSIANIC_PROPHECIES: MessianicProphecy[] = [
  // ── BIRTH & INCARNATION ────────────────────────────────────────────────
  {
    id: 'mes-gen-3-15',
    prophecyRef: 'Genesis 3:15',
    otVerseId: 'gen-3-15',
    fulfillmentRefs: ['Galatians 4:4', 'Romans 16:20', 'Hebrews 2:14', 'Revelation 12:7-10'],
    title: 'The Seed of the Woman (Protoevangelium)',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Gen. iii. 15 is one of the most prominent Messianic passages in all rabbinic literature (Targum Jonathan, Targum Yerushalmi).',
    solaScripturaNote: 'The miraculous Seed of the woman who crushes the serpent\'s head while suffering a bruised heel on the cross of Calvary.',
  },
  {
    id: 'mes-gen-12-3',
    prophecyRef: 'Genesis 12:3; 22:18',
    otVerseId: 'gen-12-3',
    fulfillmentRefs: ['Matthew 1:1', 'Acts 3:25-26', 'Galatians 3:8, 16'],
    title: 'Seed of Abraham Blessing All Nations',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Gen. xii. 3 and xxii. 18 applied messianically in Bereshith Rabba 39.',
    solaScripturaNote: 'The universal blessing promised to all kindreds of the earth through the singular Seed who is Christ.',
  },
  {
    id: 'mes-gen-49-10',
    prophecyRef: 'Genesis 49:10',
    otVerseId: 'gen-49-10',
    fulfillmentRefs: ['Luke 1:32-33', 'Hebrews 7:14', 'Revelation 5:5'],
    title: 'The Scepter of Judah and Shiloh',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Gen. xlix. 10 is universally accepted as Messianic by all ancient Targums (Onkelos, Jonathan, Jerusalem).',
    solaScripturaNote: 'The royal scepter will not depart from Judah until Shiloh (the Peacemaker) comes, to whom the gathering of the peoples shall be.',
  },
  {
    id: 'mes-num-24-17',
    prophecyRef: 'Numbers 24:17',
    otVerseId: 'num-24-17',
    fulfillmentRefs: ['Matthew 2:1-2', '2 Peter 1:19', 'Revelation 22:16'],
    title: 'The Star out of Jacob and Scepter out of Israel',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Num. xxiv. 17 is applied to King Messiah in the Targum Onkelos and Midrash Rabbah.',
    solaScripturaNote: 'The radiant star and sovereign scepter arising from Israel, leading the Magi to worship the infant Jesus in Bethlehem.',
  },
  {
    id: 'mes-2sa-7-12',
    prophecyRef: '2 Samuel 7:12-16',
    otVerseId: '2sa-7-12',
    fulfillmentRefs: ['Matthew 1:1', 'Luke 1:32-33', 'Acts 13:22-23', 'Hebrews 1:5'],
    title: 'The Eternal Throne of David\'s Seed',
    category: 'Birth & Incarnation',
    edersheimChapter: '2 Sam. vii. 12 interpreted of King Messiah in Talmud Sanhedrin and Midrash on Samuel.',
    solaScripturaNote: 'God\'s unconditional covenant with David: his Seed will build a spiritual house for God\'s name and possess a throne established forever.',
  },
  {
    id: 'mes-isa-7-14',
    prophecyRef: 'Isaiah 7:14',
    otVerseId: 'isa-7-14',
    fulfillmentRefs: ['Matthew 1:22-23', 'Luke 1:26-35'],
    title: 'The Virgin Birth of Immanuel',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Isa. vii. 14 associated messianically with the divine deliverance in ancient rabbinic sources.',
    solaScripturaNote: 'A virgin (almah) shall conceive and bear a Son called Immanuel ("God with us"), uniting deity and humanity in one Savior.',
  },
  {
    id: 'mes-isa-9-6',
    prophecyRef: 'Isaiah 9:6-7',
    otVerseId: 'isa-9-6',
    fulfillmentRefs: ['Luke 1:32-33', 'Luke 2:11', 'John 1:1-14', 'Colossians 2:9'],
    title: 'The Wonderful Counselor, The Mighty God',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Isa. ix. 6 in the Targum of Jonathan explicitly designates the child as "the Messiah".',
    solaScripturaNote: 'Unto us a child is born, unto us a son is given; called Wonderful, Counselor, The Mighty God, The Everlasting Father, The Prince of Peace.',
  },
  {
    id: 'mes-isa-11-1',
    prophecyRef: 'Isaiah 11:1-5',
    otVerseId: 'isa-11-1',
    fulfillmentRefs: ['Luke 3:23-32', 'Romans 15:12', 'Revelation 5:5', 'Revelation 22:16'],
    title: 'The Rod out of the Stem of Jesse',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Isa. xi. 1-5 universally expounded as King Messiah in Targum Jonathan, Sanhedrin 93b.',
    solaScripturaNote: 'A righteous branch springing from the cut-down stump of Jesse, endowed with the sevenfold fullness of the Spirit of the Lord.',
  },
  {
    id: 'mes-jer-23-5',
    prophecyRef: 'Jeremiah 23:5-6',
    otVerseId: 'jer-23-5',
    fulfillmentRefs: ['Matthew 1:1', '1 Corinthians 1:30', '2 Corinthians 5:21'],
    title: 'The Righteous Branch: The LORD Our Righteousness',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Jer. xxiii. 5-6 is universally acknowledged as a Messianic prophecy in Baba Bathra 75b and Midrash on Proverbs.',
    solaScripturaNote: 'Jehovah-Tsidkenu: The Lord our Righteousness who reigns wisely and executes judgment in the earth.',
  },
  {
    id: 'mes-mic-5-2',
    prophecyRef: 'Micah 5:2',
    otVerseId: 'mic-5-2',
    fulfillmentRefs: ['Matthew 2:1-6', 'Luke 2:4-7', 'John 7:42'],
    title: 'The Eternal Ruler Born in Bethlehem',
    category: 'Birth & Incarnation',
    edersheimChapter: 'Micah v. 2 rendered explicitly: "Out of thee shall come forth before Me the Messiah" in Targum Jonathan.',
    solaScripturaNote: 'Bethlehem Ephratah, little among the thousands of Judah, yet from her comes the eternal Ruler whose origin is from everlasting.',
  },

  // ── MISSION & ANOINTING ────────────────────────────────────────────────
  {
    id: 'mes-deu-18-15',
    prophecyRef: 'Deuteronomy 18:15-19',
    otVerseId: 'deu-18-15',
    fulfillmentRefs: ['John 1:45', 'John 6:14', 'Acts 3:20-23', 'Acts 7:37'],
    title: 'The Prophet Like unto Moses',
    category: 'Mission & Anointing',
    edersheimChapter: 'Deut. xviii. 15 applied messianically in Midrash on Ecclesiastes.',
    solaScripturaNote: 'A divine Prophet and Mediator speaking God\'s words with ultimate canonical authority; to reject Him is to face divine judgment.',
  },
  {
    id: 'mes-psa-40-6',
    prophecyRef: 'Psalm 40:6-8',
    otVerseId: 'psa-40-6',
    fulfillmentRefs: ['John 4:34', 'Hebrews 10:5-10'],
    title: 'Lo, I Come to Do Thy Will: The Law in the Heart',
    category: 'Mission & Anointing',
    edersheimChapter: 'Ps. xl. 7 interpreted messianically of the obedience of the Son of David.',
    solaScripturaNote: 'Replacing ceremonial shadows with perfect obedience; God\'s holy moral law written in the Savior\'s heart.',
  },
  {
    id: 'mes-psa-45-7',
    prophecyRef: 'Psalm 45:6-7',
    otVerseId: 'psa-45-7',
    fulfillmentRefs: ['Luke 4:18', 'John 3:34', 'Hebrews 1:8-9'],
    title: 'Anointed with the Oil of Gladness Above Thy Fellows',
    category: 'Mission & Anointing',
    edersheimChapter: 'Ps. xlv. 7 is in the Targum addressed directly to King Messiah.',
    solaScripturaNote: 'The divine Son anointed with the Holy Spirit without measure because He loved righteousness and hated iniquity.',
  },
  {
    id: 'mes-isa-42-1',
    prophecyRef: 'Isaiah 42:1-4',
    otVerseId: 'isa-42-1',
    fulfillmentRefs: ['Matthew 3:17', 'Matthew 12:15-21'],
    title: 'The Gentle Servant Bringing Justice to the Gentiles',
    category: 'Mission & Anointing',
    edersheimChapter: 'Isa. xlii. 1 in Targum Jonathan begins: "Behold, My Servant, the Messiah".',
    solaScripturaNote: 'A bruised reed He will not break, and smoking flax He will not quench; He brings forth judgment unto truth across the nations.',
  },
  {
    id: 'mes-isa-61-1',
    prophecyRef: 'Isaiah 61:1-3',
    otVerseId: 'isa-61-1',
    fulfillmentRefs: ['Luke 4:16-21', 'Acts 10:38'],
    title: 'Anointed to Preach the Gospel to the Poor',
    category: 'Mission & Anointing',
    edersheimChapter: 'Isa. lxi. 1 in ancient Jewish thought applied to the Messianic jubilee of liberation.',
    solaScripturaNote: 'Jesus inaugurated His public ministry in Nazareth by reading this exact scroll, declaring: "This day is this scripture fulfilled in your ears."',
  },
  {
    id: 'mes-dan-9-25',
    prophecyRef: 'Daniel 9:24-25',
    otVerseId: 'dan-9-25',
    fulfillmentRefs: ['Mark 1:14-15', 'Luke 3:1, 21-23', 'John 1:41', 'Galatians 4:4'],
    title: 'The 69 Weeks: Dating Messiah the Prince (27 AD)',
    category: 'Mission & Anointing',
    edersheimChapter: 'Dan. ix. 24-27 recognized as the prophetic timeline of the Messiah in Talmud Sanhedrin 97a.',
    solaScripturaNote: 'From the decree of Artaxerxes in 457 BC (Ezra 7), 69 prophetic weeks (483 literal years) reached precisely to the baptism and anointing of Jesus in 27 AD.',
  },

  // ── BETRAYAL & PASSION ─────────────────────────────────────────────────
  {
    id: 'mes-psa-22-1',
    prophecyRef: 'Psalm 22:1-18',
    otVerseId: 'psa-22-1',
    fulfillmentRefs: ['Matthew 27:35-46', 'Mark 15:24-34', 'John 19:23-37'],
    title: 'The Suffering and Piercing of the Crucified Messiah',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Ps. xxii. is applied to the sufferings of the Messiah in Pesikta Rabbati 36-37.',
    solaScripturaNote: 'Detailed prophecy of crucifixion 1,000 years before Roman execution existed: pierced hands and feet, parted garments, lots cast for vesture, and thirst.',
  },
  {
    id: 'mes-psa-34-20',
    prophecyRef: 'Psalm 34:20; Exodus 12:46',
    otVerseId: 'psa-34-20',
    fulfillmentRefs: ['John 19:33-36'],
    title: 'Not One Bone Broken',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Exod. xii. 46 and Ps. xxxiv. 20 linked with the preservation of the righteous Servant.',
    solaScripturaNote: 'Unlike the two thieves whose legs were broken to hasten death, Jesus was already dead; fulfilling the Passover Lamb requirement that no bone be broken.',
  },
  {
    id: 'mes-psa-41-9',
    prophecyRef: 'Psalm 41:9',
    otVerseId: 'psa-41-9',
    fulfillmentRefs: ['Matthew 26:14-16', 'Mark 14:10', 'John 13:18', 'Acts 1:16'],
    title: 'Betrayed by a Familiar Friend Eating Bread',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Ps. xli. 9 applied by Jesus Himself to Judas\' betrayal at the Last Supper.',
    solaScripturaNote: 'Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me.',
  },
  {
    id: 'mes-psa-69-21',
    prophecyRef: 'Psalm 69:21',
    otVerseId: 'psa-69-21',
    fulfillmentRefs: ['Matthew 27:34, 48', 'John 19:28-30'],
    title: 'Gall for Meat and Vinegar for Thirst',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Ps. lxix. 21 applied to the sorrow and torment of the righteous sufferer.',
    solaScripturaNote: 'They gave me also gall for my meat; and in my thirst they gave me vinegar to drink on the cross.',
  },
  {
    id: 'mes-isa-50-6',
    prophecyRef: 'Isaiah 50:6',
    otVerseId: 'isa-50-6',
    fulfillmentRefs: ['Matthew 26:67', 'Matthew 27:26-30', 'Mark 14:65'],
    title: 'Back Given to the Smiters and Face to Spitting',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Isa. l. 6 linked with the humiliation of the Servant.',
    solaScripturaNote: 'I gave my back to the smiters, and my cheeks to them that plucked off the hair: I hid not my face from shame and spitting.',
  },
  {
    id: 'mes-isa-53-5',
    prophecyRef: 'Isaiah 52:13–53:12',
    otVerseId: 'isa-53-5',
    fulfillmentRefs: ['Matthew 8:17', 'Mark 15:27-28', 'Romans 5:6-8', '1 Peter 2:24-25'],
    title: 'The Suffering Servant: Wounded for Our Transgressions',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Isa. lii. 13-liii. 12 is acknowledged as the Messiah in the Targum of Jonathan, Talmud Sanhedrin 98b.',
    solaScripturaNote: 'The apex of Old Testament atonement revelation: substitutionary sacrifice, bearing the sins of many, making intercession for transgressors, and buried with the rich.',
  },
  {
    id: 'mes-dan-9-26',
    prophecyRef: 'Daniel 9:26-27',
    otVerseId: 'dan-9-26',
    fulfillmentRefs: ['Matthew 27:51', 'Romans 5:6', 'Hebrews 9:26-28', 'Hebrews 10:8-14'],
    title: 'Messiah Cut Off in the Midst of the 70th Week (31 AD)',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Dan. ix. 26 associated with the end of the sacrificial system.',
    solaScripturaNote: 'In the midst of the final 70th week (spring 31 AD), after 3.5 years of ministry, Christ was crucified, causing the earthly sacrificial system to cease when the temple veil tore from top to bottom.',
  },
  {
    id: 'mes-zec-11-12',
    prophecyRef: 'Zechariah 11:12-13',
    otVerseId: 'zec-11-12',
    fulfillmentRefs: ['Matthew 26:15', 'Matthew 27:3-10'],
    title: 'Betrayed for 30 Pieces of Silver Cast to the Potter',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Zech. xi. 12-13 interpreted of the rejection of the divine Shepherd.',
    solaScripturaNote: 'They weighed for my price thirty pieces of silver... and I took the thirty pieces of silver, and cast them to the potter in the house of the LORD.',
  },
  {
    id: 'mes-zec-12-10',
    prophecyRef: 'Zechariah 12:10',
    otVerseId: 'zec-12-10',
    fulfillmentRefs: ['John 19:34-37', 'Revelation 1:7'],
    title: 'They Shall Look upon Me Whom They Have Pierced',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Zech. xii. 10 is in Talmud Sukkah 52a referred directly to the slaying of Messiah ben Joseph.',
    solaScripturaNote: 'Yahweh Himself speaking: "They shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son."',
  },
  {
    id: 'mes-zec-13-7',
    prophecyRef: 'Zechariah 13:7',
    otVerseId: 'zec-13-7',
    fulfillmentRefs: ['Matthew 26:31, 56', 'Mark 14:27, 50'],
    title: 'The Shepherd Smitten, The Sheep Scattered',
    category: 'Betrayal & Passion',
    edersheimChapter: 'Zech. xiii. 7 refers to the Shepherd who is the "fellow" (equal) of the Lord of hosts.',
    solaScripturaNote: 'Awake, O sword, against my shepherd, and against the man that is my fellow, saith the LORD of hosts: smite the shepherd, and the sheep shall be scattered.',
  },

  // ── RESURRECTION & ASCENSION ───────────────────────────────────────────
  {
    id: 'mes-psa-16-10',
    prophecyRef: 'Psalm 16:8-11',
    otVerseId: 'psa-16-10',
    fulfillmentRefs: ['Matthew 28:6', 'Acts 2:25-32', 'Acts 13:35-37', '1 Corinthians 15:4'],
    title: 'Resurrection: Holy One Not Seeing Corruption',
    category: 'Resurrection & Ascension',
    edersheimChapter: 'Ps. xvi. 10 cited by apostles Peter and Paul as inapplicable to David and fulfilled in Christ\'s resurrection.',
    solaScripturaNote: 'Thou wilt not leave my soul in Sheol (the grave), neither wilt thou suffer thine Holy One to see corruption.',
  },
  {
    id: 'mes-psa-24-7',
    prophecyRef: 'Psalm 24:7-10',
    otVerseId: 'psa-24-7',
    fulfillmentRefs: ['Mark 16:19', 'Ephesians 4:8-10', 'Revelation 5:11-12'],
    title: 'The King of Glory Ascending the Heavenly Gates',
    category: 'Resurrection & Ascension',
    edersheimChapter: 'Ps. xxiv. 7 applied messianically in Shemoth Rabba 8.',
    solaScripturaNote: 'Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in! The triumphal heavenly reception of the victorious Christ.',
  },
  {
    id: 'mes-psa-68-18',
    prophecyRef: 'Psalm 68:18',
    otVerseId: 'psa-68-18',
    fulfillmentRefs: ['Acts 2:33', 'Ephesians 4:8-11'],
    title: 'Ascended on High, Leading Captivity Captive',
    category: 'Resurrection & Ascension',
    edersheimChapter: 'Ps. lxviii. 18 expounded messianically in ancient rabbinic writings.',
    solaScripturaNote: 'Thou hast ascended on high, thou hast led captivity captive: thou hast received gifts for men; fulfilled in Christ\'s outpouring of the Holy Spirit.',
  },
  {
    id: 'mes-psa-118-22',
    prophecyRef: 'Psalm 118:22-23',
    otVerseId: 'psa-118-22',
    fulfillmentRefs: ['Matthew 21:42', 'Acts 4:10-12', '1 Peter 2:6-8'],
    title: 'The Rejected Stone Exalted to the Corner',
    category: 'Resurrection & Ascension',
    edersheimChapter: 'Ps. cxviii. 22 applied directly to the Messiah in Midrash on Psalms.',
    solaScripturaNote: 'The stone which the builders rejected is become the head stone of the corner. Christ crucified by human builders, yet exalted by God as the foundation of the living church.',
  },
  {
    id: 'mes-jon-1-17',
    prophecyRef: 'Jonah 1:17',
    otVerseId: 'jon-1-17',
    fulfillmentRefs: ['Matthew 12:39-40', 'Matthew 16:4', 'Luke 11:29-30'],
    title: 'The Sign of the Prophet Jonas: Three Days and Nights',
    category: 'Resurrection & Ascension',
    edersheimChapter: 'Jonah\'s preservation as a divine type of deliverance from death.',
    solaScripturaNote: 'Jesus declared that no sign would be given to an evil and adulterous generation but the sign of Jonas: three days and nights in the heart of the earth before bodily resurrection.',
  },

  // ── PRIESTHOOD & HEAVENLY REIGN ───────────────────────────────────────
  {
    id: 'mes-gen-14-18',
    prophecyRef: 'Genesis 14:18-20',
    otVerseId: 'gen-14-18',
    fulfillmentRefs: ['Hebrews 5:6-10', 'Hebrews 6:20', 'Hebrews 7:1-28'],
    title: 'The Melchizedek Order: Royal and Eternal Priesthood',
    category: 'Priesthood & Heavenly Reign',
    edersheimChapter: 'Gen. xiv. 18 recognized in Nedarim 32b as the archetype of royal priesthood.',
    solaScripturaNote: 'King of Salem and Priest of the Most High God bringing bread and wine, foreshadowing Christ\'s deathless, unchangeable priesthood in the Heavenly Sanctuary.',
  },
  {
    id: 'mes-psa-110-1',
    prophecyRef: 'Psalm 110:1-4',
    otVerseId: 'psa-110-1',
    fulfillmentRefs: ['Matthew 22:42-45', 'Acts 2:34-36', 'Hebrews 1:13', 'Hebrews 8:1-2'],
    title: 'Enthroned at the Right Hand: Priest Forever',
    category: 'Priesthood & Heavenly Reign',
    edersheimChapter: 'Ps. cx. is the most quoted Psalm in the New Testament; universally interpreted as Messianic in Sanhedrin 108b.',
    solaScripturaNote: 'The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool... Thou art a priest for ever after the order of Melchizedek.',
  },
  {
    id: 'mes-dan-7-13',
    prophecyRef: 'Daniel 7:13-14',
    otVerseId: 'dan-7-13',
    fulfillmentRefs: ['Matthew 24:30', 'Matthew 26:64', 'Revelation 1:7', 'Revelation 11:15'],
    title: 'The Son of Man Approaching the Ancient of Days',
    category: 'Priesthood & Heavenly Reign',
    edersheimChapter: 'Dan. vii. 13 is the source of the Messianic title "Son of Man" in Sanhedrin 98a.',
    solaScripturaNote: 'The Son of Man coming with the clouds of heaven not to earth, but to the Ancient of Days in the heavenly judgment to receive an everlasting dominion and kingdom.',
  },
  {
    id: 'mes-dan-8-14',
    prophecyRef: 'Daniel 8:14; Leviticus 16',
    otVerseId: 'dan-8-14',
    fulfillmentRefs: ['Hebrews 8:1-2', 'Hebrews 9:23-24', 'Revelation 11:19', 'Revelation 14:7'],
    title: 'The 2,300 Days: Cleansing of the Heavenly Sanctuary',
    category: 'Priesthood & Heavenly Reign',
    edersheimChapter: 'The antitypical Day of Atonement and purification of the sanctuary.',
    solaScripturaNote: 'Unto two thousand and three hundred days; then shall the sanctuary be cleansed. Inauguration of Christ\'s final phase of intercession and investigative judgment in 1844.',
  },
  {
    id: 'mes-zec-6-12',
    prophecyRef: 'Zechariah 6:12-13',
    otVerseId: 'zec-6-12',
    fulfillmentRefs: ['Luke 1:32-33', 'Hebrews 3:1-6', 'Hebrews 8:1-2'],
    title: 'The Branch: Priest upon His Throne',
    category: 'Priesthood & Heavenly Reign',
    edersheimChapter: 'Zech. vi. 12 in Targum Jonathan: "Behold the Man whose name is Messiah".',
    solaScripturaNote: 'He shall build the temple of the LORD; and he shall bear the glory, and shall sit and rule upon his throne; and he shall be a priest upon his throne: and the counsel of peace shall be between them both.',
  },

  // ── SECOND COMING & KINGDOM ───────────────────────────────────────────
  {
    id: 'mes-job-19-25',
    prophecyRef: 'Job 19:25-27',
    otVerseId: 'job-19-25',
    fulfillmentRefs: ['1 Corinthians 15:52-54', '1 Thessalonians 4:16-17', '1 John 3:2'],
    title: 'The Living Redeemer Standing on the Earth',
    category: 'Second Coming & Kingdom',
    edersheimChapter: 'Job xix. 25 expounded as the hope of the bodily resurrection in early Christian and Jewish theology.',
    solaScripturaNote: 'I know that my Redeemer liveth, and that he shall stand at the latter day upon the earth: and though after my skin worms destroy this body, yet in my flesh shall I see God.',
  },
  {
    id: 'mes-isa-25-8',
    prophecyRef: 'Isaiah 25:8-9',
    otVerseId: 'isa-25-8',
    fulfillmentRefs: ['1 Corinthians 15:54', 'Revelation 7:17', 'Revelation 21:4'],
    title: 'Swallowing Up Death in Victory',
    category: 'Second Coming & Kingdom',
    edersheimChapter: 'Isa. xxv. 8 applied to the resurrection in Talmud Sanhedrin 91b.',
    solaScripturaNote: 'He will swallow up death in victory; and the Lord GOD will wipe away tears from off all faces... Lo, this is our God; we have waited for him, and he will save us.',
  },
  {
    id: 'mes-dan-2-44',
    prophecyRef: 'Daniel 2:44-45',
    otVerseId: 'dan-2-44',
    fulfillmentRefs: ['Matthew 21:44', 'Luke 1:33', 'Revelation 11:15', 'Revelation 19:11-21'],
    title: 'The Stone Smitting the Image: The Everlasting Kingdom',
    category: 'Second Coming & Kingdom',
    edersheimChapter: 'Dan. ii. 44 universally expounded as the kingdom of King Messiah shattering earthly empires.',
    solaScripturaNote: 'The stone cut out without hands that strikes the image on its feet and becomes a great mountain filling the whole earth, establishing God\'s eternal, indestructible kingdom.',
  },
  {
    id: 'mes-mal-4-2',
    prophecyRef: 'Malachi 4:1-3',
    otVerseId: 'mal-4-2',
    fulfillmentRefs: ['Luke 1:78-79', '2 Peter 3:10-13', 'Revelation 20:14-15', 'Revelation 22:16'],
    title: 'The Sun of Righteousness Arising with Healing',
    category: 'Second Coming & Kingdom',
    edersheimChapter: 'Mal. iv. 2 in Shemoth Rabba 31 applied to the light of King Messiah.',
    solaScripturaNote: 'Unto you that fear my name shall the Sun of righteousness arise with healing in his wings; while the day cometh that shall burn as an oven, consuming the wicked as stubble.',
  }
];

// Direct OT Messianic prophecy index with multi-verse range expansion
export const MESSIANIC_BY_VERSE = new Map<string, MessianicProphecy[]>();

// Reverse NT Messianic fulfillment index with multi-verse range expansion
export const NT_MESSIANIC_LOOKUP = new Map<string, MessianicProphecy[]>();

for (const p of MESSIANIC_PROPHECIES) {
  // Index all OT verses in the prophecy passage
  const otVerses = new Set<string>([p.otVerseId, ...expandVerseRange(p.prophecyRef)]);
  for (const vId of otVerses) {
    if (!MESSIANIC_BY_VERSE.has(vId)) MESSIANIC_BY_VERSE.set(vId, []);
    const list = MESSIANIC_BY_VERSE.get(vId)!;
    if (!list.some(x => x.id === p.id)) list.push(p);
  }

  // Index all NT verses across all fulfillmentRefs
  for (const fRef of p.fulfillmentRefs) {
    const ntVerses = expandVerseRange(fRef);
    for (const vId of ntVerses) {
      if (!NT_MESSIANIC_LOOKUP.has(vId)) NT_MESSIANIC_LOOKUP.set(vId, []);
      const list = NT_MESSIANIC_LOOKUP.get(vId)!;
      if (!list.some(x => x.id === p.id)) list.push(p);
    }
  }
}

export function getOtMessianicPropheciesForVerse(verseId: string): MessianicProphecy[] {
  return MESSIANIC_BY_VERSE.get(verseId) || [];
}

export function getNtMessianicFulfillmentsForVerse(verseId: string): MessianicProphecy[] {
  return NT_MESSIANIC_LOOKUP.get(verseId) || [];
}

/** Returns all Messianic prophecies associated with a verse as either OT source or NT fulfillment */
export function getMessianicPropheciesForVerse(verseId: string): MessianicProphecy[] {
  const ot = getOtMessianicPropheciesForVerse(verseId);
  const nt = getNtMessianicFulfillmentsForVerse(verseId);
  const combined = [...ot, ...nt];
  if (combined.length <= 1) return combined;
  const seen = new Set<string>();
  return combined.filter(p => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
}

