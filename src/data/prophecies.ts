/**
 * Messianic / typological prophecy threads in Genesis.
 * Maps Genesis verse IDs to fulfillment references (NT / later OT).
 */
export interface ProphecyThread {
  fulfillmentRefs: string[];
}

export const genesisProphecies: Record<string, ProphecyThread> = {
  // Chapter 1
  'gen-1-1': {
    fulfillmentRefs: [
      'John 1:1-3',
      'Hebrews 11:3',
    ],
  },
  'gen-1-3': {
    fulfillmentRefs: [
      'John 1:1-5',
      '2 Corinthians 4:6',
    ],
  },
  'gen-1-14': {
    fulfillmentRefs: [
      'Psalm 19:1-4',
      'Romans 1:20',
    ],
  },
  'gen-1-26': {
    fulfillmentRefs: [
      'Colossians 1:16-17',
      'Hebrews 1:2-3',
    ],
  },
  'gen-1-27': {
    fulfillmentRefs: [
      'Colossians 3:10',
      'James 3:9',
    ],
  },
  'gen-1-28': {
    fulfillmentRefs: [
      'Hebrews 2:6-8',
      'Revelation 11:15',
    ],
  },

  // Chapter 2
  'gen-2-2': {
    fulfillmentRefs: ['Hebrews 4:3-11'],
  },
  'gen-2-3': {
    fulfillmentRefs: [
      'Exodus 20:11',
      'Hebrews 4:4',
    ],
  },
  'gen-2-7': {
    fulfillmentRefs: [
      '1 Corinthians 15:45-47',
      'John 20:22',
    ],
  },
  'gen-2-9': {
    fulfillmentRefs: [
      'Revelation 2:7',
      'Revelation 22:2',
    ],
  },
  'gen-2-17': {
    fulfillmentRefs: [
      'Romans 5:12',
      '1 Corinthians 15:21-22',
      'Romans 6:23',
    ],
  },
  'gen-2-22': {
    fulfillmentRefs: ['Ephesians 5:23-32'],
  },
  'gen-2-24': {
    fulfillmentRefs: [
      'Matthew 19:5-6',
      'Ephesians 5:31-32',
    ],
  },

  // Chapter 3
  'gen-3-1': {
    fulfillmentRefs: [
      'Revelation 12:9',
      'Revelation 20:2',
    ],
  },
  'gen-3-8': {
    fulfillmentRefs: [
      'Genesis 3:9',
      'Psalm 139:7-12',
    ],
  },
  'gen-3-15': {
    fulfillmentRefs: [
      'Galatians 4:4-5',
      'Romans 16:20',
      'Hebrews 2:14',
      '1 John 3:8',
      'Revelation 20:2',
    ],
  },
  'gen-3-19': {
    fulfillmentRefs: [
      '1 Corinthians 15:21-22',
      'Romans 6:23',
    ],
  },
  'gen-3-21': {
    fulfillmentRefs: [
      'Isaiah 61:10',
      'Galatians 3:27',
      'Revelation 3:18',
    ],
  },
  'gen-3-22': {
    fulfillmentRefs: [
      'Revelation 22:2',
      'Revelation 22:14',
    ],
  },
  'gen-3-24': {
    fulfillmentRefs: [
      'Hebrews 9:8',
      'Hebrews 10:19-20',
      'John 14:6',
    ],
  },

  // Chapter 4
  'gen-4-1': {
    fulfillmentRefs: [
      'Luke 3:38',
      '1 John 3:12',
    ],
  },
  'gen-4-4': {
    fulfillmentRefs: [
      'Hebrews 11:4',
      'Matthew 23:35',
    ],
  },
  'gen-4-7': {
    fulfillmentRefs: [
      'Romans 7:8-9',
      'James 1:14-15',
    ],
  },
  'gen-4-8': {
    fulfillmentRefs: [
      'Hebrews 12:24',
      '1 John 3:12',
    ],
  },
  'gen-4-10': {
    fulfillmentRefs: [
      'Hebrews 12:24',
      'Matthew 23:35',
    ],
  },
  'gen-4-25': {
    fulfillmentRefs: ['Luke 3:38'],
  },
  'gen-4-26': {
    fulfillmentRefs: [
      'Genesis 12:8',
      'Acts 11:26',
    ],
  },

  // Chapter 5
  'gen-5-1': {
    fulfillmentRefs: [
      'Colossians 3:10',
      'James 3:9',
    ],
  },
  'gen-5-22': {
    fulfillmentRefs: [
      'Hebrews 11:5',
      'Micah 6:8',
    ],
  },
  'gen-5-24': {
    fulfillmentRefs: [
      'Hebrews 11:5',
      'Jude 1:14',
    ],
  },
  'gen-5-29': {
    fulfillmentRefs: [
      '2 Corinthians 1:3-5',
      'Revelation 21:4',
    ],
  },

  // Chapter 6
  'gen-6-5': {
    fulfillmentRefs: [
      'Romans 3:23',
      'Matthew 15:19',
    ],
  },
  'gen-6-8': {
    fulfillmentRefs: [
      'Ephesians 2:8-9',
      'Genesis 6:9',
      'Hebrews 11:7',
    ],
  },
  'gen-6-14': {
    fulfillmentRefs: [
      '1 Peter 3:20-21',
      'Hebrews 11:7',
    ],
  },
  'gen-6-18': {
    fulfillmentRefs: [
      'Hebrews 11:7',
      '1 Peter 3:20',
      '2 Peter 2:5',
    ],
  },
  'gen-6-22': {
    fulfillmentRefs: [
      'Hebrews 11:7',
      'John 6:38',
    ],
  },

  // Chapter 7
  'gen-7-16': {
    fulfillmentRefs: [
      'John 10:28-29',
      'Hebrews 11:7',
    ],
  },

  // Chapter 8
  'gen-8-4': {
    fulfillmentRefs: [
      '1 Peter 3:20',
      '2 Peter 2:5',
    ],
  },
  'gen-8-8': {
    fulfillmentRefs: [
      'Luke 3:22',
      'Matthew 3:16',
    ],
  },
  'gen-8-11': {
    fulfillmentRefs: [
      'Luke 3:22',
      'Matthew 3:16',
    ],
  },
  'gen-8-20': {
    fulfillmentRefs: [
      'Hebrews 9:22',
      'Ephesians 5:2',
    ],
  },
  'gen-8-21': {
    fulfillmentRefs: [
      'Romans 8:20-21',
      'Revelation 21:5',
    ],
  },
  'gen-8-22': {
    fulfillmentRefs: [
      'Genesis 9:13',
      'Jeremiah 33:20',
    ],
  },

  // Chapter 9
  'gen-9-1': {
    fulfillmentRefs: [
      'Genesis 9:2',
      'Psalm 8:6-8',
    ],
  },
  'gen-9-13': {
    fulfillmentRefs: [
      'Genesis 9:16',
      'Isaiah 54:9',
    ],
  },
  'gen-9-16': {
    fulfillmentRefs: [
      'Isaiah 54:9-10',
      'Hebrews 13:20',
    ],
  },
  'gen-9-26': {
    fulfillmentRefs: [
      'Exodus 6:3',
      'Acts 3:13',
      'Psalm 110:4',
    ],
  },
  'gen-9-27': {
    fulfillmentRefs: [
      'Acts 17:26',
      'Ephesians 2:13-14',
      'Acts 10:34-35',
    ],
  },

  // Chapter 11
  'gen-11-1': {
    fulfillmentRefs: [
      'Acts 2:6',
      'Acts 17:26',
    ],
  },
  'gen-11-4': {
    fulfillmentRefs: [
      'Luke 14:11',
      '2 Corinthians 10:5',
    ],
  },
  'gen-11-9': {
    fulfillmentRefs: [
      'Acts 17:26',
      'Luke 1:51',
    ],
  },
  'gen-11-10': {
    fulfillmentRefs: [
      'Luke 3:36',
      'Matthew 1:2',
    ],
  },
  'gen-11-27': {
    fulfillmentRefs: [
      'Luke 3:34',
      'Matthew 1:2',
    ],
  },

  // Chapter 12
  'gen-12-1': {
    fulfillmentRefs: [
      'Hebrews 11:8',
      'Acts 7:2-4',
    ],
  },
  'gen-12-2': {
    fulfillmentRefs: [
      'Galatians 3:16',
      'Matthew 1:1',
      'Romans 4:16-17',
    ],
  },
  'gen-12-3': {
    fulfillmentRefs: [
      'Galatians 3:8',
      'Acts 3:25',
      'Revelation 7:9',
    ],
  },
  'gen-12-7': {
    fulfillmentRefs: [
      'Acts 7:5',
      'Hebrews 11:9',
      'Romans 4:13',
    ],
  },
  'gen-12-8': {
    fulfillmentRefs: [
      'Genesis 22:5',
      'Hebrews 11:10',
    ],
  },

  // Chapter 13
  'gen-13-15': {
    fulfillmentRefs: [
      'Hebrews 11:10',
      'Romans 4:13',
      '2 Peter 3:13',
    ],
  },
  'gen-13-16': {
    fulfillmentRefs: [
      'Romans 4:18',
      'Hebrews 11:12',
      'Galatians 3:29',
    ],
  },

  // Chapter 14
  'gen-14-18': {
    fulfillmentRefs: [
      'Hebrews 5:6',
      'Hebrews 7:1-3',
      'Psalm 110:4',
    ],
  },
  'gen-14-19': {
    fulfillmentRefs: [
      'Hebrews 7:1',
      'Matthew 28:18',
    ],
  },
  'gen-14-20': {
    fulfillmentRefs: [
      'Hebrews 7:2-10',
      'Luke 22:19-20',
    ],
  },

  // Chapter 15
  'gen-15-1': {
    fulfillmentRefs: [
      'Hebrews 13:5-6',
      'Psalm 3:3',
    ],
  },
  'gen-15-5': {
    fulfillmentRefs: [
      'Romans 4:18',
      'Hebrews 11:12',
      'Galatians 3:6',
    ],
  },
  'gen-15-6': {
    fulfillmentRefs: [
      'Romans 4:3',
      'Galatians 3:6',
      'James 2:23',
    ],
  },
  'gen-15-13': {
    fulfillmentRefs: [
      'Acts 7:6-7',
      'Galatians 3:17',
      'Exodus 12:40-41',
    ],
  },
  'gen-15-18': {
    fulfillmentRefs: [
      'Acts 7:8',
      'Genesis 17:19',
      'Galatians 3:16',
    ],
  },

  // Chapter 16
  'gen-16-11': {
    fulfillmentRefs: [
      'Luke 1:13',
      'Luke 1:31',
    ],
  },
  'gen-16-13': {
    fulfillmentRefs: [
      'Genesis 17:1',
      'Hebrews 11:6',
    ],
  },

  // Chapter 17
  'gen-17-1': {
    fulfillmentRefs: [
      'Genesis 17:1',
      'Revelation 1:8',
    ],
  },
  'gen-17-5': {
    fulfillmentRefs: [
      'Romans 4:17',
      'Matthew 1:1',
      'Luke 3:23-34',
    ],
  },
  'gen-17-6': {
    fulfillmentRefs: [
      'Romans 4:17',
      'Matthew 1:1-16',
      'Revelation 1:6',
    ],
  },
  'gen-17-7': {
    fulfillmentRefs: [
      'Hebrews 13:20',
      'Luke 1:72-73',
    ],
  },
  'gen-17-8': {
    fulfillmentRefs: [
      'Hebrews 11:16',
      '2 Peter 3:13',
      'Revelation 21:10',
    ],
  },
  'gen-17-16': {
    fulfillmentRefs: [
      'Romans 9:6-8',
      'Galatians 4:28',
      'Luke 1:32-33',
    ],
  },
  'gen-17-19': {
    fulfillmentRefs: [
      'Galatians 4:22-28',
      'Hebrews 11:18',
      'Romans 9:7-9',
    ],
  },
  'gen-17-22': {
    fulfillmentRefs: [
      'Acts 7:8',
      'Luke 2:21',
    ],
  },

  // Chapter 18
  'gen-18-10': {
    fulfillmentRefs: [
      'Romans 9:9',
      'Hebrews 11:11',
      'Luke 1:13',
    ],
  },
  'gen-18-14': {
    fulfillmentRefs: [
      'Luke 1:37',
      'Matthew 19:26',
    ],
  },
  'gen-18-18': {
    fulfillmentRefs: [
      'Galatians 3:8',
      'Acts 3:25',
      'John 12:32',
    ],
  },
  'gen-18-19': {
    fulfillmentRefs: [
      'Deuteronomy 4:9',
      'Ephesians 6:4',
    ],
  },
  'gen-18-25': {
    fulfillmentRefs: [
      '2 Peter 3:9',
      'Romans 9:27',
    ],
  },

  // Chapter 19
  'gen-19-24': {
    fulfillmentRefs: [
      '2 Peter 2:6',
      'Jude 1:7',
    ],
  },
  'gen-19-26': {
    fulfillmentRefs: [
      'Luke 17:32',
      'Matthew 10:38',
    ],
  },

  // Chapter 21
  'gen-21-12': {
    fulfillmentRefs: [
      'Romans 9:7',
      'Hebrews 11:18',
      'Galatians 4:22-23',
    ],
  },
  'gen-21-13': {
    fulfillmentRefs: [
      'Galatians 4:29-30',
      'Romans 9:8',
    ],
  },

  // Chapter 22
  'gen-22-1': {
    fulfillmentRefs: [
      'Hebrews 11:17',
      'James 1:12',
    ],
  },
  'gen-22-2': {
    fulfillmentRefs: [
      'Hebrews 11:17',
      'John 3:16',
      'Romans 8:32',
    ],
  },
  'gen-22-5': {
    fulfillmentRefs: [
      'Hebrews 11:17',
      'John 1:29',
    ],
  },
  'gen-22-8': {
    fulfillmentRefs: [
      'John 1:29',
      'Romans 8:32',
      '1 Peter 1:19-20',
    ],
  },
  'gen-22-14': {
    fulfillmentRefs: [
      'Romans 8:32',
      'John 1:29',
      'Revelation 5:6',
    ],
  },
  'gen-22-16': {
    fulfillmentRefs: [
      'Hebrews 6:13-14',
      'Luke 1:73',
    ],
  },
  'gen-22-17': {
    fulfillmentRefs: [
      'Hebrews 11:12',
      'Romans 4:18',
      'Galatians 3:29',
    ],
  },
  'gen-22-18': {
    fulfillmentRefs: [
      'Galatians 3:16',
      'Acts 3:25',
      'Acts 3:26',
    ],
  },

  // Chapter 23
  'gen-23-4': {
    fulfillmentRefs: [
      'Hebrews 11:13',
      '1 Peter 2:11',
    ],
  },

  // Chapter 24
  'gen-24-7': {
    fulfillmentRefs: [
      'Hebrews 11:8',
      'John 14:2-3',
      'Hebrews 11:13-14',
    ],
  },
  'gen-24-40': {
    fulfillmentRefs: [
      'Hebrews 13:5',
      'Genesis 24:27',
    ],
  },
  'gen-24-67': {
    fulfillmentRefs: [
      'Isaiah 54:5',
      'Revelation 21:9',
    ],
  },

  // Chapter 25
  'gen-25-23': {
    fulfillmentRefs: [
      'Romans 9:10-13',
      'Malachi 1:2-3',
    ],
  },

  // Chapter 26
  'gen-26-3': {
    fulfillmentRefs: [
      'Acts 3:25',
      'Galatians 3:8',
    ],
  },
  'gen-26-4': {
    fulfillmentRefs: [
      'Galatians 3:8',
      'Acts 3:25',
      'Hebrews 11:12',
    ],
  },
  'gen-26-5': {
    fulfillmentRefs: [
      'Hebrews 11:8',
      'Romans 4:16',
    ],
  },

  // Chapter 27
  'gen-27-29': {
    fulfillmentRefs: [
      'Numbers 24:9',
      'Revelation 5:5',
    ],
  },
  'gen-27-33': {
    fulfillmentRefs: [
      'Hebrews 12:17',
      'Isaiah 48:8',
    ],
  },

  // Chapter 28
  'gen-28-12': {
    fulfillmentRefs: [
      'John 1:51',
      'Hebrews 1:14',
    ],
  },
  'gen-28-13': {
    fulfillmentRefs: [
      'Genesis 26:24',
      'Hebrews 11:13',
    ],
  },
  'gen-28-14': {
    fulfillmentRefs: [
      'Luke 3:23-38',
      'Galatians 3:16',
      'Ephesians 3:6',
    ],
  },
  'gen-28-15': {
    fulfillmentRefs: [
      'Hebrews 13:5',
      'Matthew 28:20',
    ],
  },
  'gen-28-17': {
    fulfillmentRefs: [
      'Hebrews 12:22',
      'Revelation 21:10',
    ],
  },

  // Chapter 31
  'gen-31-13': {
    fulfillmentRefs: [
      'Hebrews 11:13',
      'John 1:51',
    ],
  },
  'gen-31-42': {
    fulfillmentRefs: [
      'Genesis 28:13',
      'Hebrews 11:6',
    ],
  },

  // Chapter 32
  'gen-32-24': {
    fulfillmentRefs: [
      'Hosea 12:4',
      'Luke 13:24',
    ],
  },
  'gen-32-28': {
    fulfillmentRefs: [
      'Isaiah 49:26',
      'Hebrews 11:21',
      'Philippians 2:10-11',
    ],
  },
  'gen-32-30': {
    fulfillmentRefs: [
      'John 1:18',
      'John 14:9',
    ],
  },

  // Chapter 33
  'gen-33-20': {
    fulfillmentRefs: [
      'Hebrews 11:9',
      'Genesis 28:19',
    ],
  },

  // Chapter 35
  'gen-35-9': {
    fulfillmentRefs: [
      'Genesis 35:11',
      'Genesis 17:1',
    ],
  },
  'gen-35-10': {
    fulfillmentRefs: [
      'Genesis 17:5',
      'Genesis 32:28',
    ],
  },
  'gen-35-11': {
    fulfillmentRefs: [
      '2 Samuel 7:12-16',
      'Luke 1:32-33',
      'Matthew 1:1',
    ],
  },
  'gen-35-12': {
    fulfillmentRefs: [
      'Romans 9:4-5',
      'Acts 3:25',
      'Galatians 3:16',
    ],
  },
  'gen-35-22': {
    fulfillmentRefs: [
      'Genesis 49:3-4',
      '1 Chronicles 5:1-2',
    ],
  },

  // Chapter 36
  'gen-36-31': {
    fulfillmentRefs: [
      'Genesis 36:1',
      'Numbers 24:18',
    ],
  },

  // Chapter 37
  'gen-37-2': {
    fulfillmentRefs: [
      'Acts 7:9',
      'Genesis 45:5',
    ],
  },
  'gen-37-5': {
    fulfillmentRefs: [
      'Genesis 45:5-8',
      'Genesis 50:20',
      'Romans 8:28',
    ],
  },
  'gen-37-7': {
    fulfillmentRefs: [
      'Philippians 2:9-11',
      'Revelation 5:5',
      'Isaiah 45:23',
    ],
  },
  'gen-37-9': {
    fulfillmentRefs: [
      'Revelation 12:1',
      'Genesis 49:8-10',
    ],
  },
  'gen-37-11': {
    fulfillmentRefs: [
      'Luke 2:51',
      'Acts 7:9',
    ],
  },
  'gen-37-23': {
    fulfillmentRefs: [
      'Genesis 37:28',
      'Matthew 27:35',
    ],
  },
  'gen-37-28': {
    fulfillmentRefs: [
      'Zechariah 11:12-13',
      'Matthew 27:3-5',
      'Acts 2:23',
    ],
  },
  'gen-37-34': {
    fulfillmentRefs: [
      'Genesis 42:38',
      'Genesis 37:35',
    ],
  },
  'gen-37-35': {
    fulfillmentRefs: [
      'Matthew 2:18',
      'Revelation 21:4',
    ],
  },

  // Chapter 38
  'gen-38-26': {
    fulfillmentRefs: [
      'Matthew 1:3',
      'Luke 3:33',
    ],
  },

  // Chapter 39
  'gen-39-2': {
    fulfillmentRefs: [
      'Acts 7:9',
      'Psalm 105:17-19',
    ],
  },
  'gen-39-21': {
    fulfillmentRefs: [
      'Acts 7:9-10',
      '2 Timothy 2:9',
      'Psalm 105:17-19',
    ],
  },
  'gen-39-23': {
    fulfillmentRefs: [
      'Acts 7:9',
      '2 Timothy 2:9',
    ],
  },

  // Chapter 40
  'gen-40-15': {
    fulfillmentRefs: [
      'Acts 7:9',
      'Genesis 41:14',
    ],
  },

  // Chapter 41
  'gen-41-41': {
    fulfillmentRefs: [
      'Acts 7:10',
      'Philippians 2:9-10',
      'Daniel 7:14',
    ],
  },
  'gen-41-45': {
    fulfillmentRefs: [
      'Acts 7:10',
      'Genesis 41:50',
    ],
  },
  'gen-41-46': {
    fulfillmentRefs: [
      'Luke 3:23',
      'Genesis 41:46',
    ],
  },
  'gen-41-57': {
    fulfillmentRefs: [
      'John 12:32',
      'Acts 17:30',
      'Revelation 22:17',
    ],
  },

  // Chapter 42
  'gen-42-21': {
    fulfillmentRefs: [
      'Zechariah 12:10',
      'Luke 23:34',
      'John 1:11',
    ],
  },
  'gen-42-36': {
    fulfillmentRefs: [
      'Genesis 43:14',
      'Jeremiah 31:20',
    ],
  },

  // Chapter 43
  'gen-43-14': {
    fulfillmentRefs: [
      'Genesis 43:29',
      'Hebrews 11:6',
    ],
  },

  // Chapter 44
  'gen-44-34': {
    fulfillmentRefs: [
      'Genesis 45:5',
      'John 10:11',
    ],
  },

  // Chapter 45
  'gen-45-3': {
    fulfillmentRefs: [
      'Acts 7:13',
      'John 1:11',
    ],
  },
  'gen-45-5': {
    fulfillmentRefs: [
      'Romans 8:28',
      'Genesis 50:20',
      'Acts 2:23',
    ],
  },
  'gen-45-7': {
    fulfillmentRefs: [
      'Genesis 45:5',
      'Romans 8:28',
    ],
  },
  'gen-45-8': {
    fulfillmentRefs: [
      'Acts 2:36',
      'Philippians 2:9-11',
      'Genesis 41:41-44',
    ],
  },
  'gen-45-15': {
    fulfillmentRefs: [
      'Genesis 45:5',
      'Acts 7:13',
    ],
  },

  // Chapter 46
  'gen-46-4': {
    fulfillmentRefs: [
      'Genesis 50:24',
      'Exodus 3:8',
    ],
  },

  // Chapter 47
  'gen-47-9': {
    fulfillmentRefs: [
      'Hebrews 11:13',
      '1 Peter 2:11',
    ],
  },

  // Chapter 48
  'gen-48-15': {
    fulfillmentRefs: [
      'Genesis 48:16',
      'Psalm 121:7-8',
    ],
  },
  'gen-48-16': {
    fulfillmentRefs: [
      'Exodus 23:20-21',
      'Isaiah 63:9',
      'John 1:1',
    ],
  },
  'gen-48-19': {
    fulfillmentRefs: [
      'Galatians 3:29',
      'Ephesians 2:12-13',
      'Romans 9:24-26',
    ],
  },

  // Chapter 49
  'gen-49-1': {
    fulfillmentRefs: [
      'Hebrews 1:1-2',
      'Numbers 24:14',
      'Deuteronomy 4:30',
    ],
  },
  'gen-49-8': {
    fulfillmentRefs: [
      'Psalm 60:7',
      'Revelation 5:5',
      'Matthew 1:2',
    ],
  },
  'gen-49-10': {
    fulfillmentRefs: [
      '2 Samuel 7:12-16',
      'Psalm 89:3-4',
      'Isaiah 9:6-7',
      'Luke 1:32-33',
      'Revelation 5:5',
    ],
  },
  'gen-49-12': {
    fulfillmentRefs: [
      'Proverbs 31:28',
      'Isaiah 53:12',
    ],
  },
  'gen-49-18': {
    fulfillmentRefs: [
      'Genesis 49:10',
      'Psalm 118:22',
    ],
  },
  'gen-49-22': {
    fulfillmentRefs: [
      'Psalm 1:3',
      'John 15:5',
    ],
  },
  'gen-49-24': {
    fulfillmentRefs: [
      'Isaiah 49:26',
      'Isaiah 60:16',
      'Psalm 118:22',
    ],
  },
  'gen-49-26': {
    fulfillmentRefs: [
      'Deuteronomy 33:16',
      'Habakkuk 3:3',
    ],
  },

  // Chapter 50
  'gen-50-20': {
    fulfillmentRefs: [
      'Romans 8:28',
      'Acts 2:23',
      'Acts 4:27-28',
    ],
  },
  'gen-50-24': {
    fulfillmentRefs: [
      'Exodus 13:19',
      'Hebrews 11:22',
    ],
  },
  'gen-50-25': {
    fulfillmentRefs: [
      'Exodus 13:19',
      'Joshua 24:32',
    ],
  },
  'gen-10-5': {
    fulfillmentRefs: [
      'Acts 17:26',
      'Acts 1:8',
    ],
  },
  'gen-10-32': {
    fulfillmentRefs: [
      'Acts 17:26',
      'Genesis 11:1',
    ],
  },
  'gen-20-6': {
    fulfillmentRefs: [
      'Psalm 105:14-15',
      'Proverbs 21:1',
    ],
  },
  'gen-20-17': {
    fulfillmentRefs: [
      'James 5:16',
      'Genesis 21:1',
    ],
  },
  'gen-29-35': {
    fulfillmentRefs: [
      'Matthew 1:2',
      'Hebrews 7:14',
      'Genesis 49:8',
    ],
  },
  'gen-30-22': {
    fulfillmentRefs: [
      'Genesis 35:24',
      'Genesis 49:22',
    ],
  },
  'gen-30-24': {
    fulfillmentRefs: [
      'Genesis 35:24',
      'Genesis 49:22',
    ],
  },
  'gen-34-7': {
    fulfillmentRefs: [
      '2 Samuel 13:21',
      'Proverbs 6:32-33',
    ],
  },
};

