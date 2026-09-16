/**
 * Life Threads — the 200-theme Jesus-centred topical catalogue (18 domains).
 *
 * A parallel layer beside the 1,342 prophecy anchors: Life Threads are
 * experiential, everyday-life journeys through Scripture with Christ as the
 * centre of every theme. Content source: the locked catalogue in Appendix A
 * of LIFE_THREADS_CODING_AGENT_PLAN_v1.4.md (operator-approved). Cross-links
 * reference other layers by id; no content is duplicated here.
 *
 * P0/P1/P2 is an authoring-priority tag (P0 = the operator's everyday-life
 * first list); the whole catalogue ships together.
 */

export interface LifeThreadDomain {
  id: string;
  name: string;
}

export interface LifeThread {
  /** kebab-case stable id */
  id: string;
  /** 1..200, matches the locked catalogue */
  number: number;
  /** LifeThreadDomain id (A..R) */
  domain: string;
  priority: 'P0' | 'P1' | 'P2';
  title: string;
  /** The Christ-centred first principle, in plain voice. */
  firstPrinciple: string;
  /** 3-8 primary KJV anchors, refParser-resolvable. */
  anchors: string[];
}

export const LIFE_THREAD_DOMAINS: LifeThreadDomain[] = [
  { id: 'A', name: 'God & His Character' },
  { id: 'B', name: 'Christ Jesus — Centre of All' },
  { id: 'C', name: 'The Holy Spirit' },
  { id: 'D', name: 'Scripture & Revelation' },
  { id: 'E', name: 'Creation, Humanity & Identity' },
  { id: 'F', name: 'Cosmic Conflict, Sin & Repentance' },
  { id: 'G', name: 'Salvation & Justification' },
  { id: 'H', name: 'Growing in Christ & Discipleship' },
  { id: 'I', name: 'Law, Obedience & Freedom' },
  { id: 'J', name: 'Sabbath & Worship' },
  { id: 'K', name: 'Prayer & Devotion' },
  { id: 'L', name: 'Stewardship, Money & Tithe' },
  { id: 'M', name: 'Marriage, Family & Home' },
  { id: 'N', name: 'Sexuality & Purity' },
  { id: 'O', name: 'Character, Virtues & Vices' },
  { id: 'P', name: 'Health, Body & Temperance' },
  { id: 'Q', name: 'Work, Vocation & Daily Calling' },
  { id: 'R', name: 'Church, Ordinances & Mission' },
];

export const LIFE_THREADS: LifeThread[] = [
  // ── A. God & His Character (1–12) ────────────────────────────────────────
  { id: 'one-true-god', number: 1, domain: 'A', priority: 'P2', title: 'One True God', firstPrinciple: 'Jesus reveals the Father; knowing the living God is where all of life begins.', anchors: ['Deut 6:4', 'Isa 45:5', 'John 17:3', '1 Cor 8:6', '1 Tim 2:5'] },
  { id: 'fatherhood-of-god', number: 2, domain: 'A', priority: 'P2', title: 'Fatherhood of God', firstPrinciple: 'In Christ we cry Abba; the Father’s heart is the source of every good gift.', anchors: ['Matt 6:9', 'John 14:9', 'Rom 8:15', 'Jas 1:17', '1 John 3:1'] },
  { id: 'holiness-of-god', number: 3, domain: 'A', priority: 'P2', title: 'Holiness of God', firstPrinciple: 'Christ’s blood brings sinners near a holy God without lowering His holiness.', anchors: ['Lev 19:2', 'Isa 6:3', 'Heb 12:14', '1 Pet 1:15-16', 'Rev 4:8'] },
  { id: 'love-of-god', number: 4, domain: 'A', priority: 'P2', title: 'Love of God', firstPrinciple: 'The cross of Christ is the measure of the Father’s love.', anchors: ['Deut 7:8', 'John 3:16', 'Rom 5:8', '1 John 4:8-10'] },
  { id: 'faithfulness-of-god', number: 5, domain: 'A', priority: 'P2', title: 'Faithfulness of God', firstPrinciple: 'Jesus is the Yes of every promise; God keeps His covenant.', anchors: ['Deut 7:9', 'Lam 3:22-23', '2 Cor 1:20', '2 Tim 2:13', 'Heb 10:23'] },
  { id: 'justice-righteousness-god', number: 6, domain: 'A', priority: 'P2', title: 'Justice & Righteousness of God', firstPrinciple: 'At the cross, justice and mercy meet in Christ.', anchors: ['Ps 89:14', 'Isa 45:21', 'Rom 3:25-26', 'Rev 15:3'] },
  { id: 'mercy-compassion-god', number: 7, domain: 'A', priority: 'P2', title: 'Mercy & Compassion of God', firstPrinciple: 'Christ is the mercy-seat; God’s compassion is our hope.', anchors: ['Ex 34:6', 'Ps 103:8-13', 'Luke 6:36', 'Eph 2:4-5', 'Heb 4:16'] },
  { id: 'sovereignty-providence', number: 8, domain: 'A', priority: 'P2', title: 'Sovereignty & Providence', firstPrinciple: 'Christ upholds all things; nothing escapes the Father’s care.', anchors: ['Ps 103:19', 'Prov 16:9', 'Matt 10:29-31', 'Rom 8:28', 'Col 1:17'] },
  { id: 'jealousy-for-worship', number: 9, domain: 'A', priority: 'P2', title: 'Jealousy for Worship', firstPrinciple: 'Jesus alone is Lord; a divided heart is idolatry.', anchors: ['Ex 20:3-5', 'Matt 4:10', '1 Cor 10:21-22', 'Jas 4:4-5'] },
  { id: 'fear-of-the-lord', number: 10, domain: 'A', priority: 'P2', title: 'Fear of the Lord', firstPrinciple: 'Reverence for God through Christ is where wisdom begins.', anchors: ['Prov 1:7', 'Eccl 12:13', 'Acts 9:31', '2 Cor 7:1', 'Heb 12:28'] },
  { id: 'glory-of-god', number: 11, domain: 'A', priority: 'P2', title: 'Glory of God', firstPrinciple: 'Christ is the brightness of God’s glory; life’s goal is His praise.', anchors: ['Isa 42:8', 'John 1:14', '1 Cor 10:31', '2 Cor 4:6', 'Rev 21:23'] },
  { id: 'names-of-god', number: 12, domain: 'A', priority: 'P2', title: 'Names & Titles of God', firstPrinciple: 'Calling on the Lord is salvation and strength for daily need.', anchors: ['Ex 3:14', 'Ps 23:1', 'Isa 9:6', 'Matt 1:23', 'Phil 2:9-11'] },

  // ── B. Christ Jesus — Centre of All (13–28) ──────────────────────────────
  { id: 'jesus-son-of-god', number: 13, domain: 'B', priority: 'P2', title: 'Jesus the Son of God', firstPrinciple: 'Confessing Jesus as the Son of God is the rock life is built on.', anchors: ['Matt 16:16', 'John 1:1-14', 'John 20:31', 'Heb 1:1-3', '1 John 4:15'] },
  { id: 'incarnation-humanity-christ', number: 14, domain: 'B', priority: 'P2', title: 'Incarnation & Humanity of Christ', firstPrinciple: 'The Word became flesh and shares our frame, yet without sin.', anchors: ['John 1:14', 'Phil 2:5-8', 'Heb 2:14-18', 'Heb 4:15'] },
  { id: 'christ-our-example', number: 15, domain: 'B', priority: 'P1', title: 'Christ Our Example', firstPrinciple: 'Follow Jesus’ steps in humility, obedience, and love.', anchors: ['Matt 11:29', 'John 13:15', '1 Pet 2:21', '1 John 2:6'] },
  { id: 'christ-our-shepherd', number: 16, domain: 'B', priority: 'P1', title: 'Christ Our Shepherd', firstPrinciple: 'Jesus seeks, feeds, and keeps His sheep.', anchors: ['Ps 23:1', 'John 10:11-16', 'Heb 13:20', '1 Pet 5:4'] },
  { id: 'christ-our-high-priest', number: 17, domain: 'B', priority: 'P0', title: 'Christ Our High Priest', firstPrinciple: 'Jesus ever lives to intercede for us in the heavenly sanctuary.', anchors: ['Heb 4:14-16', 'Heb 7:25', 'Heb 8:1-2', 'Heb 9:11-12', 'Heb 9:24'] },
  { id: 'christ-our-mediator', number: 18, domain: 'B', priority: 'P1', title: 'Christ Our Mediator', firstPrinciple: 'There is one Mediator between God and us — the man Christ Jesus.', anchors: ['1 Tim 2:5', 'Heb 8:6', 'Heb 9:15', 'Heb 12:24'] },
  { id: 'christ-our-king', number: 19, domain: 'B', priority: 'P1', title: 'Christ Our King', firstPrinciple: 'Jesus reigns now and will return to reign openly.', anchors: ['Ps 2:6-8', 'Matt 28:18', 'Rev 17:14', 'Rev 19:16'] },
  { id: 'christ-our-prophet', number: 20, domain: 'B', priority: 'P1', title: 'Christ Our Prophet', firstPrinciple: 'Hear Him; God’s final Word is spoken in the Son.', anchors: ['Deut 18:15', 'Matt 17:5', 'Heb 1:1-2', 'Acts 3:22'] },
  { id: 'death-of-christ-atonement', number: 21, domain: 'B', priority: 'P1', title: 'Death of Christ (Atonement)', firstPrinciple: 'Jesus died for our sins, according to the Scriptures.', anchors: ['Isa 53:5-6', 'Matt 20:28', 'Rom 5:6-11', '1 Cor 15:3', '1 Pet 2:24'] },
  { id: 'blood-of-christ', number: 22, domain: 'B', priority: 'P1', title: 'Blood of Christ', firstPrinciple: 'Cleansing, purchase, and access come only by His blood.', anchors: ['Matt 26:28', 'Eph 1:7', 'Heb 9:14', '1 John 1:7', 'Rev 1:5'] },
  { id: 'resurrection-of-christ', number: 23, domain: 'B', priority: 'P1', title: 'Resurrection of Christ', firstPrinciple: 'Because He lives, we live and hope.', anchors: ['Matt 28:5-7', 'Rom 6:4-9', '1 Cor 15:3-4', '1 Cor 15:20', '1 Pet 1:3'] },
  { id: 'ascension-session', number: 24, domain: 'B', priority: 'P1', title: 'Ascension & Session', firstPrinciple: 'The risen Christ sits at God’s right hand — for us.', anchors: ['Mark 16:19', 'Acts 1:9-11', 'Eph 1:20-23', 'Heb 1:3'] },
  { id: 'indwelling-christ', number: 25, domain: 'B', priority: 'P1', title: 'Indwelling Christ', firstPrinciple: 'Christ in you, the hope of glory, is the Christian life.', anchors: ['John 14:20', 'John 15:4-5', 'Gal 2:20', 'Col 1:27', 'Eph 3:17'] },
  { id: 'love-of-christ', number: 26, domain: 'B', priority: 'P1', title: 'Love of Christ', firstPrinciple: 'Nothing can separate us from the love of Christ.', anchors: ['John 13:1', 'John 15:9', 'Rom 8:35-39', 'Eph 3:18-19', 'Rev 1:5'] },
  { id: 'union-with-christ', number: 27, domain: 'B', priority: 'P1', title: 'Union with Christ', firstPrinciple: 'Baptized into His death, raised to walk in newness of life.', anchors: ['Rom 6:3-5', '1 Cor 12:13', 'Gal 3:27', 'Eph 2:5-6'] },
  { id: 'jesus-over-all-life', number: 28, domain: 'B', priority: 'P1', title: 'Jesus Over All of Life', firstPrinciple: 'Every part of life is under His lordship. Ask what Scripture says of Christ here.', anchors: ['Col 1:16-18', 'Col 3:17', '2 Cor 10:5', 'Matt 28:18-20'] },

  // ── C. Holy Spirit (29–36) ───────────────────────────────────────────────
  { id: 'person-holy-spirit', number: 29, domain: 'C', priority: 'P2', title: 'Person of the Holy Spirit', firstPrinciple: 'The Spirit is God, and He glorifies Jesus.', anchors: ['John 14:16-17', 'John 16:13-14', 'Acts 5:3-4', '2 Cor 3:17'] },
  { id: 'conviction-of-sin', number: 30, domain: 'C', priority: 'P1', title: 'Conviction of Sin', firstPrinciple: 'The Spirit shows the world its sin, Christ’s righteousness, and the judgment to come.', anchors: ['John 16:8-11', 'Acts 2:37', '1 Thess 1:5'] },
  { id: 'new-birth-spirit', number: 31, domain: 'C', priority: 'P2', title: 'New Birth by the Spirit', firstPrinciple: 'Born of water and the Spirit into Christ’s kingdom.', anchors: ['John 3:5-8', 'Titus 3:5', '1 Pet 1:23'] },
  { id: 'indwelling-sealing-spirit', number: 32, domain: 'C', priority: 'P2', title: 'Indwelling & Sealing', firstPrinciple: 'The Spirit lives in us and seals us for the day of redemption.', anchors: ['Rom 8:9-11', 'Eph 1:13-14', 'Eph 4:30', '1 Cor 6:19'] },
  { id: 'fruit-of-the-spirit', number: 33, domain: 'C', priority: 'P1', title: 'Fruit of the Spirit', firstPrinciple: 'Christlike character grows by the Spirit, not by self-effort.', anchors: ['Gal 5:22-23', 'John 15:5', 'Eph 5:9'] },
  { id: 'gifts-of-the-spirit', number: 34, domain: 'C', priority: 'P1', title: 'Gifts of the Spirit', firstPrinciple: 'Gifts equip the body for ministry under Christ’s headship.', anchors: ['Rom 12:6-8', '1 Cor 12:4-11', 'Eph 4:11-13', '1 Pet 4:10'] },
  { id: 'walking-in-the-spirit', number: 35, domain: 'C', priority: 'P0', title: 'Walking in the Spirit', firstPrinciple: 'Life in the Spirit puts the flesh to death and follows Jesus.', anchors: ['Gal 5:16-25', 'Rom 8:1-14', 'Rom 8:26-27'] },
  { id: 'spirit-of-prophecy', number: 36, domain: 'C', priority: 'P1', title: 'Spirit of Prophecy', firstPrinciple: 'The Spirit’s witness points to Jesus and strengthens the remnant’s testimony.', anchors: ['Rev 12:17', 'Rev 19:10', '2 Pet 1:19-21', 'Joel 2:28-29', '1 Thess 5:19-21'] },

  // ── D. Scripture & Revelation (37–44) ────────────────────────────────────
  { id: 'inspiration-scripture', number: 37, domain: 'D', priority: 'P0', title: 'Inspiration of Scripture', firstPrinciple: 'All Scripture is God-breathed and points to Christ.', anchors: ['2 Tim 3:15-17', '2 Pet 1:20-21', 'John 5:39', 'Luke 24:27'] },
  { id: 'authority-of-the-word', number: 38, domain: 'D', priority: 'P0', title: 'Authority of the Word', firstPrinciple: 'Scripture is the final rule; Jesus answered every test with “It is written.”', anchors: ['Isa 8:20', 'Matt 4:4', 'John 17:17', 'Acts 17:11'] },
  { id: 'searching-the-scriptures', number: 39, domain: 'D', priority: 'P0', title: 'Searching the Scriptures', firstPrinciple: 'Daily Bible study finds Christ and guards us from error.', anchors: ['Deut 17:19', 'Ps 119:105', 'John 5:39', 'Acts 17:11', '2 Tim 2:15'] },
  { id: 'promises-of-god', number: 40, domain: 'D', priority: 'P2', title: 'Promises of God', firstPrinciple: 'Every promise is Yes and Amen in Christ.', anchors: ['2 Cor 1:20', '2 Pet 1:4', 'Heb 10:23', 'Rom 4:20-21'] },
  { id: 'hearing-doing-the-word', number: 41, domain: 'D', priority: 'P1', title: 'Hearing & Doing the Word', firstPrinciple: 'Build on rock by doing what Jesus says, not only hearing it.', anchors: ['Matt 7:24-27', 'Jas 1:22-25', 'Luke 11:28'] },
  { id: 'meditation-on-the-word', number: 42, domain: 'D', priority: 'P1', title: 'Meditation on the Word', firstPrinciple: 'Delighting in God’s law shapes the mind of Christ in us.', anchors: ['Ps 1:2', 'Josh 1:8', 'Ps 119:11', 'Ps 119:97', 'Col 3:16'] },
  { id: 'false-doctrine-testing-spirits', number: 43, domain: 'D', priority: 'P2', title: 'False Doctrine & Testing Spirits', firstPrinciple: 'Test every spirit by the Word and by the confession of Jesus.', anchors: ['Isa 8:20', '1 John 4:1-3', 'Gal 1:8-9', '2 Tim 4:3-4'] },
  { id: 'gospel-message', number: 44, domain: 'D', priority: 'P2', title: 'The Gospel Message', firstPrinciple: 'Christ crucified, risen, and coming again is the everlasting gospel.', anchors: ['1 Cor 15:1-4', 'Rom 1:16', 'Rev 14:6-7', 'Mark 16:15'] },

  // ── E. Creation, Humanity & Identity (45–52) ─────────────────────────────
  { id: 'creation-by-the-word', number: 45, domain: 'E', priority: 'P2', title: 'Creation by the Word', firstPrinciple: 'All things were made by Him and for Him.', anchors: ['Gen 1:1-3', 'John 1:1-3', 'Col 1:16', 'Heb 11:3', 'Ex 20:11'] },
  { id: 'image-of-god', number: 46, domain: 'E', priority: 'P2', title: 'Image of God', firstPrinciple: 'Human dignity is restored in the image of Christ.', anchors: ['Gen 1:26-27', 'Gen 9:6', 'Col 3:10', 'Eph 4:24', 'Jas 3:9'] },
  { id: 'fall-of-man', number: 47, domain: 'E', priority: 'P2', title: 'Fall of Man', firstPrinciple: 'In Adam all die; in Christ all may be made alive.', anchors: ['Gen 3', 'Rom 5:12-19', '1 Cor 15:21-22'] },
  { id: 'conscience', number: 48, domain: 'E', priority: 'P1', title: 'Conscience', firstPrinciple: 'A clean conscience rests on Christ’s blood, not on self-excuse.', anchors: ['Rom 2:14-15', 'Heb 9:14', 'Heb 10:22', '1 Tim 1:5', '1 Tim 1:19'] },
  { id: 'identity-in-christ', number: 49, domain: 'E', priority: 'P1', title: 'Identity in Christ', firstPrinciple: 'You are a new creature; the old has passed away.', anchors: ['2 Cor 5:17', 'Gal 2:20', 'Eph 1:3-7', '1 Pet 2:9'] },
  { id: 'body-soul-anthropology', number: 50, domain: 'E', priority: 'P0', title: 'Body & Soul — Death and Resurrection Hope', firstPrinciple: 'God gives life; the dead sleep until Christ wakes them in the resurrection.', anchors: ['Gen 2:7', 'Eccl 12:7', '1 Thess 5:23', '1 Cor 15:45', 'John 11:11-14'] },
  { id: 'male-and-female', number: 51, domain: 'E', priority: 'P1', title: 'Male & Female', firstPrinciple: 'God made us male and female; Christ restores dignity to both.', anchors: ['Gen 1:27', 'Gen 2:18-24', 'Matt 19:4-6', 'Gal 3:28'] },
  { id: 'worth-and-humility', number: 52, domain: 'E', priority: 'P1', title: 'Worth & Humility', firstPrinciple: 'Lowliness of mind follows the Christ who emptied Himself for us.', anchors: ['Phil 2:3-8', 'Rom 12:3', 'Mic 6:8', '1 Pet 5:5-6'] },

  // ── F. Cosmic Conflict, Sin & Repentance (53–68) ─────────────────────────
  { id: 'war-in-heaven', number: 53, domain: 'F', priority: 'P0', title: 'War in Heaven — the Cosmic Conflict', firstPrinciple: 'The dragon wars against Christ and His people; Calvary decided the war.', anchors: ['Rev 12:7-12', 'Job 1', 'Job 2', 'Luke 10:18', 'Gen 3:15', 'Eph 6:12'] },
  { id: 'satan-and-his-devices', number: 54, domain: 'F', priority: 'P1', title: 'Satan & His Devices', firstPrinciple: 'Resist the devil under Christ’s authority — he is a beaten foe.', anchors: ['Matt 4:1-11', 'John 8:44', '2 Cor 2:11', '2 Cor 11:14', '1 Pet 5:8-9', 'Jas 4:7'] },
  { id: 'sin-defined', number: 55, domain: 'F', priority: 'P0', title: 'Sin Defined', firstPrinciple: 'Sin is breaking God’s law; Christ alone was without sin.', anchors: ['1 John 3:4', 'Rom 3:23', 'Rom 7:7', 'Jas 4:17', 'Heb 4:15'] },
  { id: 'origin-deceitfulness-of-sin', number: 56, domain: 'F', priority: 'P1', title: 'Origin & Deceitfulness of Sin', firstPrinciple: 'Sin hardens the heart; Christ softens it.', anchors: ['Heb 3:12-13', 'Jas 1:14-15', 'Rom 7:11', 'Eph 4:22'] },
  { id: 'guilt-and-shame', number: 57, domain: 'F', priority: 'P1', title: 'Guilt & Shame', firstPrinciple: 'The cross removes condemnation for everyone in Christ Jesus.', anchors: ['Gen 3:7-10', 'Rom 8:1', 'Ps 32:1-5', 'Heb 10:22'] },
  { id: 'repentance', number: 58, domain: 'F', priority: 'P0', title: 'Repentance', firstPrinciple: 'Turn to God; Jesus came to call sinners to repentance.', anchors: ['Mark 1:15', 'Luke 13:3', 'Acts 2:38', 'Acts 3:19', '2 Cor 7:10'] },
  { id: 'confession-of-sin', number: 59, domain: 'F', priority: 'P0', title: 'Confession of Sin', firstPrinciple: 'If we confess, He is faithful to forgive through Christ’s blood.', anchors: ['Prov 28:13', '1 John 1:9', 'Ps 51:1-4', 'Jas 5:16'] },
  { id: 'forgiveness-received', number: 60, domain: 'F', priority: 'P0', title: 'Forgiveness Received', firstPrinciple: 'Through His name, everyone who believes receives forgiveness.', anchors: ['Acts 10:43', 'Eph 1:7', 'Col 1:14', 'Ps 103:3', 'Ps 103:12'] },
  { id: 'forgiveness-extended', number: 61, domain: 'F', priority: 'P0', title: 'Forgiveness Extended', firstPrinciple: 'Forgive as Christ forgave you.', anchors: ['Matt 6:14-15', 'Matt 18:21-35', 'Eph 4:32', 'Col 3:13', 'Luke 17:3-4'] },
  { id: 'backsliding-restoration', number: 62, domain: 'F', priority: 'P1', title: 'Backsliding & Restoration', firstPrinciple: 'Christ restores the wandering sheep.', anchors: ['Jer 3:22', 'Hos 14:1-4', 'Luke 15', 'Gal 6:1', 'Rev 2:4-5'] },
  { id: 'hardness-of-heart', number: 63, domain: 'F', priority: 'P1', title: 'Hardness of Heart', firstPrinciple: 'When His voice comes today, do not harden your heart.', anchors: ['Heb 3:7-15', 'Ex 8:15', 'Mark 3:5', 'Eph 4:18'] },
  { id: 'blasphemy-and-reverence', number: 64, domain: 'F', priority: 'P1', title: 'Blasphemy & Reverence', firstPrinciple: 'Honor the name of God and of His Christ.', anchors: ['Ex 20:7', 'Matt 12:31-32', 'Phil 2:9-11', 'Col 3:17'] },
  { id: 'hypocrisy', number: 65, domain: 'F', priority: 'P1', title: 'Hypocrisy', firstPrinciple: 'Jesus exposes religion that is only on the outside.', anchors: ['Matt 23', 'Isa 29:13', 'Luke 12:1', 'Rom 2:21-24'] },
  { id: 'self-righteousness', number: 66, domain: 'F', priority: 'P1', title: 'Self-Righteousness', firstPrinciple: 'None are righteous by themselves; justification is by faith in Jesus.', anchors: ['Luke 18:9-14', 'Rom 3:10', 'Rom 3:20-28', 'Phil 3:9', 'Isa 64:6'] },
  { id: 'national-corporate-sin', number: 67, domain: 'F', priority: 'P1', title: 'National & Corporate Sin', firstPrinciple: 'Peoples and churches must repent under Christ’s lordship.', anchors: ['Dan 9:4-19', '2 Chron 7:14', 'Rev 2:1-29', 'Rev 3:1-22', 'Jonah 3'] },
  { id: 'victory-over-sin', number: 68, domain: 'F', priority: 'P1', title: 'Victory Over Sin', firstPrinciple: 'Sin shall not have dominion over you; grace reigns through Christ.', anchors: ['Rom 6:11-14', '1 John 3:6-9', '1 John 5:4-5', 'Rev 12:11'] },

  // ── G. Salvation & Justification (69–78) ─────────────────────────────────
  { id: 'grace', number: 69, domain: 'G', priority: 'P2', title: 'Grace', firstPrinciple: 'By grace you are saved through faith — not by works.', anchors: ['Eph 2:8-9', 'Titus 2:11-14', 'Rom 3:24', 'John 1:16-17'] },
  { id: 'faith', number: 70, domain: 'G', priority: 'P0', title: 'Faith', firstPrinciple: 'Believe on the Lord Jesus Christ, and you will be saved.', anchors: ['Hab 2:4', 'John 3:16', 'Rom 1:17', 'Rom 5:1', 'Heb 11:1', 'Heb 11:6', 'Acts 16:31'] },
  { id: 'justification', number: 71, domain: 'G', priority: 'P2', title: 'Justification', firstPrinciple: 'Declared righteous by faith in Jesus’ blood.', anchors: ['Rom 3:21-28', 'Rom 5:1', 'Rom 5:9', 'Gal 2:16', 'Isa 53:11'] },
  { id: 'adoption', number: 72, domain: 'G', priority: 'P1', title: 'Adoption', firstPrinciple: 'In Christ we receive the Spirit of adoption and call God Father.', anchors: ['Rom 8:15-17', 'Gal 4:4-7', 'Eph 1:5', 'John 1:12'] },
  { id: 'redemption-purchase', number: 73, domain: 'G', priority: 'P2', title: 'Redemption — Bought with a Price', firstPrinciple: 'You were bought with a price: the precious blood of Christ.', anchors: ['1 Cor 6:20', '1 Pet 1:18-19', 'Eph 1:7', 'Rev 5:9'] },
  { id: 'reconciliation', number: 74, domain: 'G', priority: 'P2', title: 'Reconciliation', firstPrinciple: 'God was in Christ, reconciling the world to Himself.', anchors: ['2 Cor 5:18-21', 'Rom 5:10-11', 'Col 1:20-22'] },
  { id: 'assurance', number: 75, domain: 'G', priority: 'P1', title: 'Assurance', firstPrinciple: 'These things are written so that you may know you have eternal life.', anchors: ['1 John 5:11-13', 'Rom 8:16', 'John 10:28-29', 'Heb 6:11'] },
  { id: 'election-and-calling', number: 76, domain: 'G', priority: 'P2', title: 'Election & Calling', firstPrinciple: 'God calls us according to His purpose in Christ.', anchors: ['Rom 8:28-30', 'Eph 1:4-5', '2 Tim 1:9', '1 Pet 2:9'] },
  { id: 'sanctification', number: 77, domain: 'G', priority: 'P2', title: 'Sanctification', firstPrinciple: 'Set apart in Christ, and growing into His likeness.', anchors: ['John 17:17-19', '1 Thess 4:3', '1 Thess 5:23', 'Heb 10:10', '2 Cor 3:18'] },
  { id: 'perseverance-holding-fast', number: 78, domain: 'G', priority: 'P1', title: 'Perseverance — Holding Fast', firstPrinciple: 'Hold the beginning of your confidence steadfast to the end.', anchors: ['Heb 3:6', 'Heb 3:14', 'Matt 24:13', 'Rev 3:11', 'Rev 14:12'] },

  // ── H. Growing in Christ & Discipleship (79–90) ──────────────────────────
  { id: 'discipleship-follow-me', number: 79, domain: 'H', priority: 'P1', title: 'Discipleship — Follow Me', firstPrinciple: 'Deny yourself, take up the cross, and follow Jesus.', anchors: ['Matt 16:24', 'Luke 9:23', 'John 8:31', 'John 15:8'] },
  { id: 'abiding-in-christ', number: 80, domain: 'H', priority: 'P1', title: 'Abiding in Christ', firstPrinciple: 'Apart from Me you can do nothing — abide in the Vine.', anchors: ['John 15:1-11', '1 John 2:28', 'Col 2:6-7'] },
  { id: 'spiritual-growth-maturity', number: 81, domain: 'H', priority: 'P1', title: 'Spiritual Growth & Maturity', firstPrinciple: 'Grow up into Christ in all things.', anchors: ['Eph 4:13-15', '2 Pet 3:18', 'Heb 5:12-14', '1 Pet 2:2'] },
  { id: 'self-denial', number: 82, domain: 'H', priority: 'P1', title: 'Self-Denial', firstPrinciple: 'Lose your life for Christ’s sake, and you will find it.', anchors: ['Matt 16:25', 'Luke 14:27-33', 'Rom 12:1', 'Gal 5:24'] },
  { id: 'self-examination', number: 83, domain: 'H', priority: 'P1', title: 'Self-Examination', firstPrinciple: 'Examine yourself regularly: are you in the faith?', anchors: ['2 Cor 13:5', 'Ps 139:23-24', '1 Cor 11:28', 'Lam 3:40'] },
  { id: 'watchfulness', number: 84, domain: 'H', priority: 'P1', title: 'Watchfulness', firstPrinciple: 'Watch and pray, so you do not fall into temptation.', anchors: ['Matt 26:41', 'Mark 13:33-37', '1 Thess 5:6', 'Rev 16:15'] },
  { id: 'temptation', number: 85, domain: 'H', priority: 'P0', title: 'Temptation', firstPrinciple: 'Christ was tempted yet never sinned; God always makes a way of escape.', anchors: ['Matt 4:1-11', '1 Cor 10:13', 'Heb 2:18', 'Heb 4:15', 'Jas 1:12-15'] },
  { id: 'overcoming', number: 86, domain: 'H', priority: 'P0', title: 'Overcoming', firstPrinciple: 'They overcame by the blood of the Lamb and the word of their testimony.', anchors: ['Rev 12:11', 'John 16:33', '1 John 5:4-5', 'Rom 8:37'] },
  { id: 'spiritual-warfare', number: 87, domain: 'H', priority: 'P1', title: 'Spiritual Warfare', firstPrinciple: 'Put on the whole armor of God and stand in Christ.', anchors: ['Eph 6:10-18', '2 Cor 10:3-5', '1 Tim 6:12'] },
  { id: 'rest-in-christ', number: 88, domain: 'H', priority: 'P1', title: 'Rest in Christ', firstPrinciple: 'Come to Jesus when you are weary, and He gives you rest.', anchors: ['Matt 11:28-30', 'Heb 4:1-11', 'Ex 33:14'] },
  { id: 'joy-in-the-lord', number: 89, domain: 'H', priority: 'P0', title: 'Joy in the Lord', firstPrinciple: 'Rejoice in the Lord always; joy is Christ’s gift, not luck.', anchors: ['Neh 8:10', 'John 15:11', 'Phil 4:4', '1 Pet 1:8'] },
  { id: 'peace-of-god', number: 90, domain: 'H', priority: 'P0', title: 'Peace of God', firstPrinciple: 'Christ’s peace guards your heart even in trouble.', anchors: ['John 14:27', 'John 16:33', 'Phil 4:6-7', 'Col 3:15', 'Isa 26:3'] },

  // ── I. Law, Obedience & Freedom (91–98) ──────────────────────────────────
  { id: 'law-of-god', number: 91, domain: 'I', priority: 'P1', title: 'Law of God', firstPrinciple: 'The law is holy; Christ magnifies it and fulfills it in love.', anchors: ['Ex 20:1-17', 'Ps 19:7', 'Matt 5:17-19', 'Rom 7:12', 'Rom 13:8-10'] },
  { id: 'ten-commandments', number: 92, domain: 'I', priority: 'P1', title: 'Ten Commandments — Life Summary', firstPrinciple: 'Love God and love your neighbor — the commandments lived out in Jesus.', anchors: ['Ex 20', 'Deut 5', 'Matt 22:37-40', 'John 14:15'] },
  { id: 'grace-and-law', number: 93, domain: 'I', priority: 'P1', title: 'Grace & Law Together', firstPrinciple: 'Saved by grace unto obedience — never saved by works.', anchors: ['Rom 6:1-2', 'Rom 6:14-15', 'Eph 2:8-10', 'Titus 2:11-14'] },
  { id: 'obedience-of-faith', number: 94, domain: 'I', priority: 'P1', title: 'Obedience of Faith', firstPrinciple: 'If you love Me, keep My commandments.', anchors: ['John 14:15', 'John 14:21', 'Rom 1:5', '1 John 5:3', 'Heb 5:8-9'] },
  { id: 'liberty-in-christ', number: 95, domain: 'I', priority: 'P1', title: 'Liberty in Christ', firstPrinciple: 'Freedom from sin’s rule — never freedom to serve the flesh.', anchors: ['Gal 5:1', 'Gal 5:13', 'John 8:36', 'Rom 6:18', '1 Pet 2:16'] },
  { id: 'judgment-according-to-works', number: 96, domain: 'I', priority: 'P2', title: 'Judgment According to Works', firstPrinciple: 'Works show that faith is real; the reward itself is grace in Christ.', anchors: ['Eccl 12:14', 'Matt 16:27', 'Rom 2:6-11', '2 Cor 5:10', 'Rev 22:12'] },
  { id: 'law-written-on-the-heart', number: 97, domain: 'I', priority: 'P1', title: 'Conscience Toward Law', firstPrinciple: 'Under the new covenant, God writes His law on the heart.', anchors: ['Jer 31:33', 'Heb 8:10', 'Rom 2:15', '2 Cor 3:3'] },
  { id: 'legalism-vs-living-faith', number: 98, domain: 'I', priority: 'P1', title: 'Legalism vs Living Faith', firstPrinciple: 'Christ is the end of the law for righteousness to everyone who believes.', anchors: ['Rom 10:3-4', 'Gal 3:1-3', 'Gal 3:24-25', 'Phil 3:9', 'Col 2:20-23'] },

  // ── J. Sabbath & Worship (99–108) ────────────────────────────────────────
  { id: 'sabbath-of-the-lord', number: 99, domain: 'J', priority: 'P0', title: 'Sabbath of the Lord', firstPrinciple: 'The seventh day remembers the Creator-Christ and His finished work.', anchors: ['Gen 2:1-3', 'Ex 20:8-11', 'Isa 58:13-14', 'Mark 2:27-28', 'Luke 4:16', 'Heb 4:4-10'] },
  { id: 'sabbath-blessing-delight', number: 100, domain: 'J', priority: 'P1', title: 'Sabbath Blessing & Delight', firstPrinciple: 'Call the Sabbath a delight — a day made for you by the Lord of it.', anchors: ['Isa 58:13-14', 'Ex 31:13', 'Ezek 20:12', 'Ezek 20:20', 'Matt 12:8'] },
  { id: 'worship-in-spirit-truth', number: 101, domain: 'J', priority: 'P0', title: 'Worship in Spirit & Truth', firstPrinciple: 'The Father seeks worshipers who come through the Son in the Spirit.', anchors: ['John 4:23-24', 'Ps 95:6', 'Rev 14:7', 'Heb 13:15'] },
  { id: 'praise-thanksgiving', number: 102, domain: 'J', priority: 'P1', title: 'Praise & Thanksgiving', firstPrinciple: 'Give thanks always in the name of Jesus.', anchors: ['Ps 100', 'Eph 5:19-20', 'Col 3:16-17', '1 Thess 5:18'] },
  { id: 'reverence-in-worship', number: 103, domain: 'J', priority: 'P1', title: 'Reverence in Worship', firstPrinciple: 'God’s name is holy; come before Him with awe through Christ.', anchors: ['Ps 89:7', 'Hab 2:20', 'Heb 12:28-29', 'Eccl 5:1-2'] },
  { id: 'idolatry-false-worship', number: 104, domain: 'J', priority: 'P1', title: 'Idolatry & False Worship', firstPrinciple: 'Serve God alone; flee idols in the light of Christ.', anchors: ['Ex 20:3-5', '1 Cor 10:14', '1 John 5:21', 'Rev 9:20', 'Rev 14:9-12'] },
  { id: 'music-and-song', number: 105, domain: 'J', priority: 'P1', title: 'Music & Song', firstPrinciple: 'Sing with grace in your hearts to the Lord.', anchors: ['Ps 96:1', 'Eph 5:19', 'Col 3:16', 'Jas 5:13'] },
  { id: 'fasting', number: 106, domain: 'J', priority: 'P1', title: 'Fasting', firstPrinciple: 'Fast for God, not for show — the Bridegroom is with His people.', anchors: ['Matt 6:16-18', 'Matt 9:14-15', 'Isa 58:6-9', 'Acts 13:2-3'] },
  { id: 'sacred-time-feasts', number: 107, domain: 'J', priority: 'P2', title: 'Sacred Time & Feasts', firstPrinciple: 'The feasts were shadows; the substance they point to is Christ.', anchors: ['Col 2:16-17', 'Lev 23', '1 Cor 5:7-8', 'Heb 10:1'] },
  { id: 'house-of-prayer', number: 108, domain: 'J', priority: 'P1', title: 'House of Prayer', firstPrinciple: 'God’s house is a house of prayer for all people.', anchors: ['Isa 56:7', 'Matt 21:13', 'Acts 2:42', 'Acts 2:46-47'] },

  // ── K. Prayer & Devotion (109–116) ───────────────────────────────────────
  { id: 'prayer', number: 109, domain: 'K', priority: 'P0', title: 'Prayer', firstPrinciple: 'Ask in Jesus’ name, according to the Father’s will.', anchors: ['Matt 6:5-13', 'John 14:13-14', 'Phil 4:6', '1 Thess 5:17', '1 John 5:14-15'] },
  { id: 'private-prayer', number: 110, domain: 'K', priority: 'P1', title: 'Private Prayer', firstPrinciple: 'Pray to your Father in secret, who sees and rewards.', anchors: ['Matt 6:6', 'Mark 1:35', 'Dan 6:10', 'Ps 55:17'] },
  { id: 'intercessory-prayer', number: 111, domain: 'K', priority: 'P1', title: 'Intercessory Prayer', firstPrinciple: 'Pray for one another; Christ ever lives to intercede for you.', anchors: ['Jas 5:16', '1 Tim 2:1', 'Rom 8:34', 'Heb 7:25'] },
  { id: 'family-social-prayer', number: 112, domain: 'K', priority: 'P1', title: 'Family & Social Prayer', firstPrinciple: 'Where two or three gather in Jesus’ name, He is there.', anchors: ['Matt 18:19-20', 'Acts 1:14', 'Acts 12:12'] },
  { id: 'answers-to-prayer', number: 113, domain: 'K', priority: 'P1', title: 'Answers to Prayer', firstPrinciple: 'Ask, seek, knock — the Father gives good gifts.', anchors: ['Matt 7:7-11', 'John 15:7', '1 John 3:22', 'Jas 5:16-18'] },
  { id: 'waiting-on-god', number: 114, domain: 'K', priority: 'P1', title: 'Waiting on God', firstPrinciple: 'Wait on the Lord, and He renews your strength.', anchors: ['Ps 27:14', 'Isa 40:31', 'Lam 3:25-26', 'Hab 2:3'] },
  { id: 'morning-watch-devotions', number: 115, domain: 'K', priority: 'P1', title: 'Devotions — the Morning Watch', firstPrinciple: 'Seek God early, as Jesus rose early to pray.', anchors: ['Ps 5:3', 'Ps 63:1', 'Mark 1:35', 'Isa 50:4'] },
  { id: 'barriers-to-prayer', number: 116, domain: 'K', priority: 'P1', title: 'Failure in Prayer & Barriers', firstPrinciple: 'Cherished sin and unbelief hinder prayer; confess and return to Christ.', anchors: ['Ps 66:18', 'Isa 59:1-2', 'Jas 1:6-7', 'Jas 4:3', 'Mark 11:25'] },

  // ── L. Stewardship, Money & Tithe (117–128) ──────────────────────────────
  { id: 'stewardship-of-all', number: 117, domain: 'L', priority: 'P0', title: 'Stewardship of All', firstPrinciple: 'Everything is the Lord’s; we manage it under Christ’s ownership.', anchors: ['Ps 24:1', '1 Cor 4:1-2', 'Luke 16:10-13', '1 Pet 4:10'] },
  { id: 'money-and-possessions', number: 118, domain: 'L', priority: 'P0', title: 'Money & Possessions', firstPrinciple: 'You cannot serve God and money; hold wealth loosely under Jesus.', anchors: ['Matt 6:19-24', 'Luke 12:15-21', '1 Tim 6:6-10', '1 Tim 6:17-19', 'Heb 13:5'] },
  { id: 'tithes', number: 119, domain: 'L', priority: 'P0', title: 'Tithes', firstPrinciple: 'Tithe to honor God’s claim — Christ himself affirmed it.', anchors: ['Gen 14:18-20', 'Gen 28:22', 'Lev 27:30', 'Mal 3:8-10', 'Matt 23:23', 'Heb 7:1-8'] },
  { id: 'offerings-freewill', number: 120, domain: 'L', priority: 'P1', title: 'Offerings & Freewill Gifts', firstPrinciple: 'Give willingly to the Lord with a cheerful heart in Christ.', anchors: ['Ex 25:2', '2 Cor 8:1-5', '2 Cor 9:6-8', 'Mark 12:41-44'] },
  { id: 'love-of-money-covetousness', number: 121, domain: 'L', priority: 'P0', title: 'Love of Money — Covetousness', firstPrinciple: 'Covetousness is idolatry; the love of money is a root of every evil.', anchors: ['Luke 12:15', 'Eph 5:5', 'Col 3:5', '1 Tim 6:10', 'Heb 13:5'] },
  { id: 'debt-lending-usury', number: 122, domain: 'L', priority: 'P0', title: 'Debt, Lending & Usury', firstPrinciple: 'Owe no one anything but love; deal justly as Christ commands.', anchors: ['Rom 13:8', 'Prov 22:7', 'Deut 23:19-20', 'Ps 37:21', 'Matt 5:42'] },
  { id: 'generosity-almsgiving', number: 123, domain: 'L', priority: 'P0', title: 'Generosity & Almsgiving', firstPrinciple: 'Freely you have received of Christ; freely give.', anchors: ['Matt 6:1-4', 'Matt 10:8', 'Acts 20:35', '2 Cor 9:7', 'Prov 19:17'] },
  { id: 'contentment', number: 124, domain: 'L', priority: 'P1', title: 'Contentment', firstPrinciple: 'Godliness with contentment is great gain in Christ.', anchors: ['Phil 4:11-13', '1 Tim 6:6-8', 'Heb 13:5', 'Luke 3:14'] },
  { id: 'poverty-and-the-poor', number: 125, domain: 'L', priority: 'P1', title: 'Poverty & the Poor', firstPrinciple: 'Remember the poor; Christ became poor to make you rich.', anchors: ['Deut 15:7-11', 'Prov 14:31', 'Matt 25:35-40', '2 Cor 8:9', 'Jas 2:1-6'] },
  { id: 'honesty-in-business', number: 126, domain: 'L', priority: 'P1', title: 'Honesty in Business', firstPrinciple: 'Just weights and honest work — done in the name of Jesus.', anchors: ['Lev 19:35-36', 'Prov 11:1', 'Eph 4:28', 'Col 3:22-24', 'Jas 5:4'] },
  { id: 'inheritance-legacy', number: 127, domain: 'L', priority: 'P1', title: 'Inheritance & Legacy', firstPrinciple: 'Lay up treasure in heaven, and leave a godly heritage in Christ.', anchors: ['Prov 13:22', 'Matt 6:20', 'Ps 112', '2 Cor 12:14'] },
  { id: 'firstfruits-priority-giving', number: 128, domain: 'L', priority: 'P1', title: 'Firstfruits & Priority Giving', firstPrinciple: 'Seek first the kingdom, and honor the Lord with your substance.', anchors: ['Prov 3:9-10', 'Matt 6:33', 'Deut 26:1-11'] },

  // ── M. Marriage, Family & Home (129–142) ─────────────────────────────────
  { id: 'marriage-covenant', number: 129, domain: 'M', priority: 'P0', title: 'Marriage Covenant', firstPrinciple: 'One flesh under God; Christ and the church are the pattern.', anchors: ['Gen 2:24', 'Matt 19:4-6', 'Eph 5:22-33', 'Heb 13:4', 'Mal 2:14-16'] },
  { id: 'husbands', number: 130, domain: 'M', priority: 'P0', title: 'Husbands', firstPrinciple: 'Love your wife as Christ loved the church and gave Himself for it.', anchors: ['Eph 5:25-33', 'Col 3:19', '1 Pet 3:7', 'Gen 2:23-24'] },
  { id: 'wives', number: 131, domain: 'M', priority: 'P0', title: 'Wives', firstPrinciple: 'Respect and support your husband as unto the Lord, with inner beauty.', anchors: ['Eph 5:22-24', 'Col 3:18', '1 Pet 3:1-6', 'Prov 31:10-31'] },
  { id: 'divorce', number: 132, domain: 'M', priority: 'P0', title: 'Divorce', firstPrinciple: 'What God joined, let no one pull apart; Jesus’ teaching governs hard hearts.', anchors: ['Deut 24:1-4', 'Mal 2:16', 'Matt 5:31-32', 'Matt 19:3-9', 'Mark 10:2-12', '1 Cor 7:10-16'] },
  { id: 'remarriage-continence', number: 133, domain: 'M', priority: 'P2', title: 'Remarriage After Divorce', firstPrinciple: 'Walk by Christ’s words and apostolic counsel, with repentance and fidelity.', anchors: ['Matt 19:9', '1 Cor 7:10-11', '1 Cor 7:39', 'Rom 7:2-3'] },
  { id: 'parents', number: 134, domain: 'M', priority: 'P0', title: 'Parents', firstPrinciple: 'Train your children in the Lord; do not provoke them.', anchors: ['Deut 6:6-7', 'Prov 22:6', 'Eph 6:4', 'Col 3:21', 'Ps 127:3-5'] },
  { id: 'children', number: 135, domain: 'M', priority: 'P0', title: 'Children', firstPrinciple: 'Obey your parents in the Lord; Jesus blessed little children.', anchors: ['Ex 20:12', 'Eph 6:1-3', 'Col 3:20', 'Mark 10:13-16'] },
  { id: 'family-worship-instruction', number: 136, domain: 'M', priority: 'P1', title: 'Family Worship & Instruction', firstPrinciple: 'Teach the Word diligently in the home, with Christ at the center.', anchors: ['Deut 6:6-9', 'Josh 24:15', 'Acts 16:31-34', '2 Tim 1:5', '2 Tim 3:15'] },
  { id: 'singleness-celibacy', number: 137, domain: 'M', priority: 'P1', title: 'Singleness for the Kingdom', firstPrinciple: 'Undivided devotion to the Lord is an honor, not a gap.', anchors: ['1 Cor 7:7-8', '1 Cor 7:32-35', 'Matt 19:12', 'Isa 56:3-5'] },
  { id: 'widows-and-orphans', number: 138, domain: 'M', priority: 'P1', title: 'Widows & Orphans', firstPrinciple: 'Pure religion cares for the fatherless and widows; Christ is husband to the desolate.', anchors: ['Jas 1:27', 'Deut 10:18', 'Ps 68:5', '1 Tim 5:3-16'] },
  { id: 'in-laws-extended-household', number: 139, domain: 'M', priority: 'P2', title: 'In-Laws & Extended Household', firstPrinciple: 'Honor and peace in the wider family under Christ.', anchors: ['Ruth 1:16-17', 'Ex 18:17-24', '1 Tim 5:8', 'Mark 7:10-13'] },
  { id: 'domestic-conflict-reconciliation', number: 140, domain: 'M', priority: 'P1', title: 'Domestic Conflict & Reconciliation', firstPrinciple: 'Be kind and tenderhearted, forgiving each other as God in Christ forgave you.', anchors: ['Eph 4:26-32', 'Matt 5:23-24', 'Col 3:12-15'] },
  { id: 'hospitality-in-the-home', number: 141, domain: 'M', priority: 'P1', title: 'Hospitality in the Home', firstPrinciple: 'Use hospitality without grudging; receive guests as unto Christ.', anchors: ['Rom 12:13', 'Heb 13:2', '1 Pet 4:9', 'Matt 25:35'] },
  { id: 'leaving-and-cleaving', number: 142, domain: 'M', priority: 'P1', title: 'Leaving & Cleaving', firstPrinciple: 'Marriage forms a new household under God.', anchors: ['Gen 2:24', 'Matt 19:5', 'Eph 5:31'] },

  // ── N. Sexuality & Purity (143–150) ──────────────────────────────────────
  { id: 'sexual-purity', number: 143, domain: 'N', priority: 'P0', title: 'Sexual Purity', firstPrinciple: 'Flee sexual sin; your body is a temple of the Holy Spirit.', anchors: ['1 Cor 6:18-20', '1 Thess 4:3-7', 'Heb 13:4', 'Matt 5:8'] },
  { id: 'adultery', number: 144, domain: 'N', priority: 'P0', title: 'Adultery', firstPrinciple: 'Jesus takes adultery to the heart; keep the marriage bed pure.', anchors: ['Ex 20:14', 'Matt 5:27-28', 'Prov 6:32', 'Heb 13:4'] },
  { id: 'fornication-uncleanness', number: 145, domain: 'N', priority: 'P1', title: 'Fornication & Uncleanness', firstPrinciple: 'Do not walk as the world walks; put on the Lord Jesus Christ.', anchors: ['Gal 5:19-21', 'Eph 5:3-5', 'Col 3:5', 'Rom 13:14'] },
  { id: 'lust-of-eyes-heart', number: 146, domain: 'N', priority: 'P1', title: 'Lust of the Eyes & Heart', firstPrinciple: 'Guard your heart; make a covenant with your eyes, in Christ.', anchors: ['Matt 5:28', 'Job 31:1', '1 John 2:16', 'Ps 119:37'] },
  { id: 'modesty-apparel', number: 147, domain: 'N', priority: 'P1', title: 'Modesty & Apparel', firstPrinciple: 'Adorn yourself with a meek and quiet spirit, as befits godliness.', anchors: ['1 Tim 2:9-10', '1 Pet 3:3-4', 'Deut 22:5', 'Isa 3:16-24'] },
  { id: 'marriage-bed-honored', number: 148, domain: 'N', priority: 'P1', title: 'Marriage Bed Honored', firstPrinciple: 'The marriage bed is honored; mutual care belongs to Christian marriage.', anchors: ['Heb 13:4', '1 Cor 7:1-5', 'Prov 5:15-19'] },
  { id: 'sodoms-sins-holiness', number: 149, domain: 'N', priority: 'P2', title: 'Sodom’s Sins & Holiness', firstPrinciple: 'Flee uncleanness; Christ washes and justifies the willing.', anchors: ['Gen 19', 'Jud 7', '1 Cor 6:9-11', 'Rom 1:24-27'] },
  { id: 'renewing-the-mind-purity', number: 150, domain: 'N', priority: 'P1', title: 'Renewing the Mind', firstPrinciple: 'Be transformed, and bring every thought captive to Christ.', anchors: ['Rom 12:1-2', '2 Cor 10:5', 'Phil 4:8', 'Ps 51:10'] },

  // ── O. Character, Virtues & Vices (151–170) ──────────────────────────────
  { id: 'love-agape', number: 151, domain: 'O', priority: 'P0', title: 'Love (agape)', firstPrinciple: 'Love fulfills the law; Christ’s love is the measure and the power.', anchors: ['Matt 22:37-40', '1 Cor 13', 'John 13:34-35', 'Rom 13:8-10', '1 John 4:7-11'] },
  { id: 'humility', number: 152, domain: 'O', priority: 'P1', title: 'Humility', firstPrinciple: 'Humble yourself under God’s hand; Christ made Himself of no reputation.', anchors: ['Phil 2:5-8', '1 Pet 5:5-6', 'Mic 6:8', 'Matt 23:12'] },
  { id: 'meekness', number: 153, domain: 'O', priority: 'P1', title: 'Meekness', firstPrinciple: 'Learn from Jesus, who is meek and lowly in heart.', anchors: ['Matt 5:5', 'Matt 11:29', 'Gal 5:23', 'Num 12:3', 'Jas 1:21'] },
  { id: 'patience-longsuffering', number: 154, domain: 'O', priority: 'P1', title: 'Patience / Longsuffering', firstPrinciple: 'Tribulation works patience; wait for Christ.', anchors: ['Rom 5:3-4', 'Jas 1:2-4', 'Jas 5:7-8', 'Col 1:11'] },
  { id: 'kindness-gentleness', number: 155, domain: 'O', priority: 'P1', title: 'Kindness & Gentleness', firstPrinciple: 'Be kind to one another, as God in Christ is kind to you.', anchors: ['Eph 4:32', 'Col 3:12', '2 Tim 2:24', 'Gal 5:22'] },
  { id: 'honesty-truthfulness', number: 156, domain: 'O', priority: 'P1', title: 'Honesty / Truthfulness', firstPrinciple: 'Speak truth; put away lying, because you belong to the Truth.', anchors: ['Eph 4:25', 'Col 3:9', 'Zech 8:16', 'Prov 12:22'] },
  { id: 'integrity', number: 157, domain: 'O', priority: 'P1', title: 'Integrity', firstPrinciple: 'Walk uprightly; Jesus is the Truth you can build on.', anchors: ['Ps 15', 'Prov 10:9', 'Prov 11:3', 'John 14:6'] },
  { id: 'courage-fearlessness', number: 158, domain: 'O', priority: 'P1', title: 'Courage / Fearlessness', firstPrinciple: 'Fear not — Christ Himself is with you.', anchors: ['Josh 1:9', 'Isa 41:10', '2 Tim 1:7', 'Matt 10:28', 'Ps 27:1'] },
  { id: 'zeal', number: 159, domain: 'O', priority: 'P1', title: 'Zeal', firstPrinciple: 'Be zealous for God’s house, with knowledge, not ignorance.', anchors: ['John 2:17', 'Rom 12:11', 'Titus 2:14', 'Gal 4:18'] },
  { id: 'diligence', number: 160, domain: 'O', priority: 'P1', title: 'Diligence', firstPrinciple: 'Not slothful; fervent in spirit, serving the Lord.', anchors: ['Prov 6:6-11', 'Rom 12:11', '2 Pet 1:5-10', 'Col 3:23'] },
  { id: 'anger', number: 161, domain: 'O', priority: 'P0', title: 'Anger', firstPrinciple: 'Be angry and sin not; put off wrath in Christ.', anchors: ['Ps 37:8', 'Eph 4:26-27', 'Eph 4:31', 'Jas 1:19-20', 'Prov 14:29', 'Prov 16:32'] },
  { id: 'pride', number: 162, domain: 'O', priority: 'P1', title: 'Pride', firstPrinciple: 'God resists the proud; Christ defeated Satan’s pride at the cross.', anchors: ['Prov 16:18', 'Jas 4:6', '1 Pet 5:5', 'Isa 14:12-15'] },
  { id: 'envy-jealousy', number: 163, domain: 'O', priority: 'P1', title: 'Envy & Jealousy', firstPrinciple: 'Love envies not; walk in the Spirit instead of the flesh.', anchors: ['Prov 14:30', 'Gal 5:19-21', 'Jas 3:14-16', '1 Cor 13:4'] },
  { id: 'lying-deceit', number: 164, domain: 'O', priority: 'P1', title: 'Lying & Deceit', firstPrinciple: 'Lying lips are an abomination; Satan is the father of lies — speak truth.', anchors: ['Ex 20:16', 'Prov 12:22', 'John 8:44', 'Col 3:9', 'Rev 21:8'] },
  { id: 'gossip-slander', number: 165, domain: 'O', priority: 'P1', title: 'Gossip / Slander / Talebearing', firstPrinciple: 'Speak evil of no one; bridle the tongue for Christ’s sake.', anchors: ['Prov 16:28', 'Prov 26:20', 'Jas 3:1-12', 'Eph 4:29', 'Titus 3:2'] },
  { id: 'bitterness-unforgiveness', number: 166, domain: 'O', priority: 'P1', title: 'Bitterness & Unforgiveness', firstPrinciple: 'Put away all bitterness, and forgive as Christ forgave you.', anchors: ['Eph 4:31-32', 'Heb 12:15', 'Matt 18:35'] },
  { id: 'addictions-bondage-habits', number: 167, domain: 'O', priority: 'P1', title: 'Addictions & Bondage Habits', firstPrinciple: 'Whom the Son sets free is free indeed; yield your members to God.', anchors: ['John 8:36', 'Rom 6:12-16', '1 Cor 6:12', '1 Cor 10:13', 'Gal 5:1'] },
  { id: 'drunkenness-sobriety', number: 168, domain: 'O', priority: 'P1', title: 'Drunkenness & Sobriety', firstPrinciple: 'Do not be drunk with wine; be filled with the Spirit.', anchors: ['Prov 20:1', 'Prov 23:29-35', 'Eph 5:18', '1 Thess 5:6-8', '1 Pet 5:8'] },
  { id: 'gluttony-appetite', number: 169, domain: 'O', priority: 'P1', title: 'Gluttony & Appetite', firstPrinciple: 'Whether you eat or drink, do all to the glory of God.', anchors: ['Prov 23:20-21', 'Phil 3:19', '1 Cor 10:31', 'Deut 21:20'] },
  { id: 'gratitude-vs-murmuring', number: 170, domain: 'O', priority: 'P1', title: 'Gratitude vs Murmuring', firstPrinciple: 'Give thanks in everything; do not grumble as Israel did.', anchors: ['1 Thess 5:18', 'Phil 2:14', '1 Cor 10:10', 'Ps 103:1-5'] },

  // ── P. Health, Body & Temperance (171–178) ───────────────────────────────
  { id: 'body-as-temple', number: 171, domain: 'P', priority: 'P0', title: 'Body as Temple', firstPrinciple: 'Your body is the temple of the Holy Spirit, bought by Christ — glorify God in it.', anchors: ['1 Cor 6:19-20', '1 Cor 3:16-17', 'Rom 12:1'] },
  { id: 'temperance-self-control', number: 172, domain: 'P', priority: 'P0', title: 'Temperance / Self-Control', firstPrinciple: 'Add temperance to your faith; it is fruit of the Spirit.', anchors: ['1 Cor 9:25-27', 'Gal 5:23', '2 Pet 1:6', 'Titus 2:2', 'Titus 2:11-12'] },
  { id: 'clean-unclean-distinction', number: 173, domain: 'P', priority: 'P1', title: 'Clean & Unclean — the Principle of Distinction', firstPrinciple: 'Be separate; honor God with the body under the gospel.', anchors: ['Lev 11', 'Acts 15:20', 'Acts 15:29', '1 Cor 10:31', '2 Cor 6:16-18'] },
  { id: 'rest-and-sleep', number: 174, domain: 'P', priority: 'P1', title: 'Rest & Sleep', firstPrinciple: 'God gives His beloved sleep; Jesus invites the weary to rest.', anchors: ['Ps 127:2', 'Mark 6:31', 'Matt 11:28', 'Ex 20:8-11'] },
  { id: 'healing-and-sickness', number: 175, domain: 'P', priority: 'P1', title: 'Healing & Sickness', firstPrinciple: 'Christ the Healer hears prayer; grace is enough in weakness.', anchors: ['Ps 103:3', 'Matt 8:16-17', 'Jas 5:14-16', '2 Cor 12:7-10', 'Isa 53:4-5'] },
  { id: 'mental-anguish-depression', number: 176, domain: 'P', priority: 'P1', title: 'Mental Anguish / Depression', firstPrinciple: 'The Lord is near the brokenhearted; cast your care on Christ.', anchors: ['Ps 34:18', 'Ps 42:5', 'Ps 42:11', 'Isa 41:10', 'Matt 11:28', '1 Pet 5:7'] },
  { id: 'anxiety-and-worry', number: 177, domain: 'P', priority: 'P0', title: 'Anxiety & Worry', firstPrinciple: 'Give your worry to God in prayer with thanksgiving, and His peace guards you.', anchors: ['Matt 6:25-34', 'Phil 4:6-7', '1 Pet 5:7', 'Ps 55:22'] },
  { id: 'life-preservation-nonviolence', number: 178, domain: 'P', priority: 'P1', title: 'Life Preservation & Nonviolence of Spirit', firstPrinciple: 'Jesus fulfills “you shall not kill” as love for enemies, even in the heart.', anchors: ['Ex 20:13', 'Matt 5:21-22', 'Matt 5:38-48', 'Rom 12:17-21'] },

  // ── Q. Work, Vocation & Daily Calling (179–186) ──────────────────────────
  { id: 'work-as-service', number: 179, domain: 'Q', priority: 'P0', title: 'Work as Service', firstPrinciple: 'Whatever you do, work heartily as for the Lord Christ.', anchors: ['Col 3:23-24', 'Eph 6:5-8', '1 Thess 4:11-12', 'Gen 2:15'] },
  { id: 'calling-vocation', number: 180, domain: 'Q', priority: 'P1', title: 'Calling & Vocation', firstPrinciple: 'Walk worthy of the calling you received, where God placed you.', anchors: ['Eph 4:1', '1 Cor 7:17-24', 'Rom 12:4-8', '2 Thess 3:10-12'] },
  { id: 'sloth-idleness', number: 181, domain: 'Q', priority: 'P1', title: 'Sloth & Idleness', firstPrinciple: 'Learn from the ant; if anyone will not work, neither should he eat.', anchors: ['Prov 6:6-11', '2 Thess 3:10-12', 'Heb 6:12', 'Matt 25:26-30'] },
  { id: 'workplace-ethics', number: 182, domain: 'Q', priority: 'P1', title: 'Masters & Servants — Workplace Ethics', firstPrinciple: 'Treat people justly; you serve Christ, the true Master.', anchors: ['Eph 6:5-9', 'Col 4:1', '1 Tim 6:1-2', 'Philemon'] },
  { id: 'holy-vs-selfish-ambition', number: 183, domain: 'Q', priority: 'P1', title: 'Ambition — Holy vs Selfish', firstPrinciple: 'Greatness in Christ’s kingdom is service, not vainglory.', anchors: ['Matt 20:25-28', 'Phil 2:3', 'Jer 45:5', 'Jas 3:13-16'] },
  { id: 'planning-and-wisdom', number: 184, domain: 'Q', priority: 'P1', title: 'Planning & Wisdom', firstPrinciple: 'Commit your works to the Lord; Christ is your wisdom.', anchors: ['Prov 16:3', 'Prov 16:9', 'Jas 4:13-15', 'Col 2:3', 'Matt 7:24'] },
  { id: 'creativity-and-skill', number: 185, domain: 'Q', priority: 'P1', title: 'Creativity & Skill', firstPrinciple: 'Skill and craftsmanship are gifts for God’s glory.', anchors: ['Ex 31:1-6', 'Prov 22:29', '1 Cor 10:31'] },
  { id: 'careerism-anxiety', number: 186, domain: 'Q', priority: 'P1', title: 'Retirement of Anxiety from Careerism', firstPrinciple: 'Life is not about abundance; seek the kingdom first.', anchors: ['Luke 12:15-34', 'Matt 6:33', 'Eccl 2:4-11'] },

  // ── R. Church, Ordinances & Mission (187–200) ────────────────────────────
  { id: 'the-church-body-of-christ', number: 187, domain: 'R', priority: 'P1', title: 'The Church — Body of Christ', firstPrinciple: 'Christ is the head; we are members one of another.', anchors: ['Matt 16:18', 'Eph 1:22-23', 'Eph 4:11-16', '1 Cor 12:12-27'] },
  { id: 'unity-of-believers', number: 188, domain: 'R', priority: 'P1', title: 'Unity of Believers', firstPrinciple: 'One Lord, one faith, one baptism — keep the unity of the Spirit.', anchors: ['John 17:20-23', 'Eph 4:3-6', '1 Cor 1:10', 'Ps 133:1'] },
  { id: 'baptism', number: 189, domain: 'R', priority: 'P0', title: 'Baptism', firstPrinciple: 'Buried with Christ in baptism, raised to walk in new life.', anchors: ['Matt 28:19', 'Rom 6:3-4', 'Acts 2:38', 'Acts 8:36-39', 'Col 2:12'] },
  { id: 'lords-supper', number: 190, domain: 'R', priority: 'P0', title: 'Lord’s Supper', firstPrinciple: 'Discern the Lord’s body; show His death till He comes.', anchors: ['Matt 26:26-29', '1 Cor 11:23-29', 'John 6:53-56', 'Luke 22:19-20'] },
  { id: 'church-discipline-restoration', number: 191, domain: 'R', priority: 'P1', title: 'Church Discipline & Restoration', firstPrinciple: 'Restore the wandering in a spirit of meekness, to gain the brother.', anchors: ['Matt 18:15-17', '1 Cor 5', 'Gal 6:1', '2 Thess 3:14-15'] },
  { id: 'spiritual-gifts-ministries', number: 192, domain: 'R', priority: 'P1', title: 'Spiritual Gifts & Ministries', firstPrinciple: 'Many gifts, one Lord — given to build up the body.', anchors: ['Rom 12:4-8', '1 Cor 12', 'Eph 4:11-13', '1 Pet 4:10-11'] },
  { id: 'witnessing-evangelism', number: 193, domain: 'R', priority: 'P1', title: 'Witnessing & Evangelism', firstPrinciple: 'You are Christ’s witnesses, to the ends of the earth.', anchors: ['Matt 28:18-20', 'Acts 1:8', '1 Pet 3:15', '2 Cor 5:18-20', 'Rev 14:6-12'] },
  { id: 'mission-all-nations', number: 194, domain: 'R', priority: 'P1', title: 'Mission to All Nations', firstPrinciple: 'The everlasting gospel goes to every nation, kindred, tongue, and people.', anchors: ['Matt 24:14', 'Rev 14:6', 'Mark 16:15', 'Isa 49:6'] },
  { id: 'remnant-faithfulness', number: 195, domain: 'R', priority: 'P0', title: 'Remnant Faithfulness', firstPrinciple: 'Keep the commandments of God and the faith of Jesus.', anchors: ['Rev 12:17', 'Rev 14:12', 'Rev 19:10', 'Rom 11:5', 'Zeph 3:13'] },
  { id: 'fellowship-communion-saints', number: 196, domain: 'R', priority: 'P1', title: 'Fellowship & Communion of Saints', firstPrinciple: 'Do not forsake assembling together; walk in the light together.', anchors: ['Acts 2:42', 'Heb 10:24-25', '1 John 1:3', '1 John 1:7', 'Rom 12:10'] },
  { id: 'pastors-elders-oversight', number: 197, domain: 'R', priority: 'P2', title: 'Pastors / Elders / Oversight', firstPrinciple: 'Feed the flock of God, under Christ the Chief Shepherd.', anchors: ['Acts 20:28', '1 Pet 5:1-4', '1 Tim 3:1-7', 'Titus 1:5-9', 'Heb 13:17'] },
  { id: 'giving-to-gospel-work', number: 198, domain: 'R', priority: 'P2', title: 'Giving to the Gospel Work', firstPrinciple: 'Partner in the gospel; support those who preach Christ.', anchors: ['Phil 4:10-19', '1 Cor 9:13-14', '3 John 5-8', 'Luke 10:7'] },
  { id: 'persecution-for-christ', number: 199, domain: 'R', priority: 'P1', title: 'Persecution for Christ’s Sake', firstPrinciple: 'Blessed are the persecuted; they overcome by the Lamb.', anchors: ['Matt 5:10-12', 'John 15:18-20', '2 Tim 3:12', 'Rev 12:11', '1 Pet 4:12-16'] },
  { id: 'hospitality-care-in-church', number: 200, domain: 'R', priority: 'P1', title: 'Hospitality & Care in the Church', firstPrinciple: 'Bear one another’s burdens; do good to all, especially the household of faith.', anchors: ['Gal 6:2', 'Gal 6:10', 'Rom 12:13', 'Acts 4:32-35', 'Heb 13:16'] },
];
