const http = require('http');
const fs = require('fs');

/*

// basic server
const server = http.createServer((req, res) => {

	if(req.url == "/") {
		res.write('Hello world, from nodejs');
		res.end();
	} else {
		res.write('using another URI?');
		res.end();
	}

});

*/

// using files (like .html files).
const server = http.createServer((req, res) => {

	readStream = fs.createReadStream('./static/index.html');

	res.writeHead(200, {'Content-type': 'text/html'}); 
	readStream.pipe(res);

});


server.listen('9001');
