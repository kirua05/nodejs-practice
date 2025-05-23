// const { log } = require('console');
// const path = require('path');

// const fullPath = path.join(__dirname, 'files', 'file1.txt');
// console.log('完整路徑', fullPath);

// console.log('extname:', path.extname(fullPath));

// const pathInfo = path.parse(fullPath);
// console.log('pathinfo', pathInfo);


const url = require('url');

// 解析 URL
const myUrl = new URL('https://example.com/path?name=test&age=25');

console.log('主機名:', myUrl.hostname);     // example.com
console.log('路徑名:', myUrl.pathname);     // /path
console.log('搜尋參數:', myUrl.searchParams.get('age')); // test
console.log('完整搜尋字串:', myUrl.search); // ?name=test&age=25

// 修改 URL 參數
myUrl.searchParams.append('sort', 'desc');
console.log('新的 URL:', myUrl.href);



const http = require('http');

// 創建基本的 HTTP 伺服器
const server = http.createServer((req, res) => {
  // 設定回應標頭
  res.setHeader('Content-Type', 'application/json');
  
  // 根據請求路徑回應不同內容
  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: '歡迎來到首頁' }));
  } else if (req.url === '/api/users') {
    res.writeHead(200);
    res.end(JSON.stringify({ users: ['使用者1', '使用者2'] }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: '找不到頁面' }));
  }
});

// 監聽 3000 port
server.listen(3000, () => {
  console.log('伺服器運行在 http://localhost:3000/');
});
