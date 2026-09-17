import fs from 'node:fs';
const t = fs.readFileSync('C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/bookThreadDetails.ts', 'utf8')
  + fs.readFileSync('C:/Users/fanel/Downloads/Threads-Bible-main/Threads-Bible-main/src/data/threadDetails.ts', 'utf8');
const straight = (t.match(/God\\'s binding promise/g) ?? []).length;
const curly = (t.match(/God\u2019s binding promise/g) ?? []).length;
const plain = (t.match(/God's binding promise/g) ?? []).length;
console.log(`"God's binding promise" with an escaped straight apostrophe: ${straight}`);
console.log(`with a curly apostrophe (U+2019):                            ${curly}`);
console.log(`with an unescaped straight apostrophe:                       ${plain}`);
