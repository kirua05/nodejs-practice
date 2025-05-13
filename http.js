const http = require('http');

const todos = [
  "學習 Node.js",
  "學習 HTTP 模組",
  "完成作業"
];


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')

  if(req.url ==='/todos'){
    res.writeHead(200)
    res.end(JSON.stringify({ 
      status: 'Success',
      data: todos
    }))
  } else if (req.url ==='/api/todos') {
    res.writeHead(200)
    res.end(JSON.stringify({ 
      status: 'success',
      message: 'todos' }))
  } else if (req.url === '/todos/count') {
    res.writeHead(200)
    res.end(JSON.stringify({ count: todos.length}))
  } else if (req.url === '/health') {
    res.writeHead(200)
    res.end(JSON.stringify({ 
      status: 'success',
      message: 'ok'
    }))
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Cannot find'}))
    
  }
})

server.listen(3000, () => {
  console.log('http://localhost:3000/health ');
})
