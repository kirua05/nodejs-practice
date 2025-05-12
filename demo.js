const fs = require('fs').promises;

async function readFilesParallel() {
  console.time("讀取時間")
  console.log("開始讀取檔案...");

  try {
    await fs.readFile("file1.txt", "utf8")
    console.log("compelte read file1.txt");
    await fs.readFile("file2.txt", "utf8")
    console.log("compelte read file2.txt");
  } catch (err) {
  console.error('讀檔錯誤', err)
  } finally {
  console.timeEnd("讀取時間")
  }
}

readFilesParallel();
