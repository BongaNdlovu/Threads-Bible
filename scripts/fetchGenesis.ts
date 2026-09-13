// Script to fetch genesis and save as JSON
import fs from 'fs';
import https from 'https';

const url = 'https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const cleanData = data.trim().replace(/^\\uFEFF/, '');
      const bible = JSON.parse(cleanData);
      const genesis = bible.find((b: any) => b.name === 'Genesis');
      
      const verses = [];
      
      if (genesis) {
        genesis.chapters.forEach((chapter: string[], cIdx: number) => {
          chapter.forEach((verseText: string, vIdx: number) => {
            const isGen3_15 = (cIdx + 1 === 3 && vIdx + 1 === 15);
            const isGen12_3 = (cIdx + 1 === 12 && vIdx + 1 === 3);
            
            let refs = undefined;
            if (isGen3_15) refs = ["Galatians 4:4-5"];
            if (isGen12_3) refs = ["Galatians 3:8", "Acts 3:25"];
            
            verses.push({
              id: `gen-${cIdx + 1}-${vIdx + 1}`,
              book: 'Genesis',
              chapter: cIdx + 1,
              verseNumber: vIdx + 1,
              text: verseText,
              isThread: isGen3_15 || isGen12_3,
              fulfillmentRefs: refs
            });
          });
        });
      }
      
      // Let's also add the fulfillment verses so they exist in mock data
      const otherVerses = [
        {
          id: "gal-4-4",
          book: "Galatians",
          chapter: 4,
          verseNumber: 4,
          text: "But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law,",
          isThread: false
        },
        {
          id: "gal-4-5",
          book: "Galatians",
          chapter: 4,
          verseNumber: 5,
          text: "To redeem them that were under the law, that we might receive the adoption of sons.",
          isThread: false
        },
        {
          id: "gal-3-8",
          book: "Galatians",
          chapter: 3,
          verseNumber: 8,
          text: "And the scripture, foreseeing that God would justify the heathen through faith, preached before the gospel unto Abraham, saying, In thee shall all nations be blessed.",
          isThread: false
        },
        {
          id: "acts-3-25",
          book: "Acts",
          chapter: 3,
          verseNumber: 25,
          text: "Ye are the children of the prophets, and of the covenant which God made with our fathers, saying unto Abraham, And in thy seed shall all the kindreds of the earth be blessed.",
          isThread: false
        }
      ];
      
      verses.push(...otherVerses);
      
      const fileContent = `import { Verse } from './types';\n\nexport const genesisVersesAndFulfillments: Verse[] = ${JSON.stringify(verses, null, 2)};\n`;
      fs.writeFileSync('./src/data/genesisData.ts', fileContent);
      console.log('Successfully generated genesisData.ts');
    } catch (e) {
      console.error(e);
    }
  });
}).on('error', err => {
  console.log('Error: ', err.message);
});
