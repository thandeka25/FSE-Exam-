
//initiates local server
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3000);

const fs = require('fs');
var data = fs.readFileSync('my_sneakers.json');
var sneakers = JSON.parse(file);
console.log(sneakers)