var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Welcome'+'<br/>');
    res.end('Hello World!');
}).listen(8080);

console.log('Node.js web server at port 8080 is running.. Type https://localhost:8080 to verify the same ')