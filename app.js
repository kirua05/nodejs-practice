// const math = require("./math")
// import { add, subtract } from "./math.js"

// const result1 = add(1, 7)
// const result2 = subtract(10, 6)
// console.log(result1, result2);


// const cowsay = require("cowsay");

// console.log(cowsay.think({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// or cowsay.think()


// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('讀檔錯誤：', err);
//     return;
//   }
//   console.log('實際內容：', data);
// });


// const fsSync = require('fs');

//   try {
//     const data = fsSync.readFileSync('example.txt', 'utf8');
//     console.log('同步實際內容：', data);
//   } catch (err) {
//     console.error('同步讀檔錯誤：', err);
//   }

// demo();
// console.log('測試同步')


const fs = require('fs').promises;

// async function readFiles() {
//   try {
//     const data1 = await fs.readFile('file1.txt', 'utf8');
//     console.log('第一個檔案：', data1);

//     const data2 = await fs.readFile('file2.txt', 'utf8');
//     console.log('第二個檔案：', data2);
//   } catch (err) {
//     console.error('讀檔錯誤：', err);
//   }
// }

// readFiles();


async function readFilesParallel() {
  try {
    const [file1, file2] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8')
    ]);
    console.log('file1：', file1);
    console.log('file2：', file2);
  } catch (err) {
    console.error('讀檔錯誤：', err);
  }
}

readFilesParallel();