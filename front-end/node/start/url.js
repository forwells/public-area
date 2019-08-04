var http = require('http');

var url = require('url');

var adr = 'http://node.test/test.html?name=ornary';

var q = url.parse(adr, true);

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/javascript'});
	console.log(q);
	console.log(q.host);
	console.log(q.pathname);
	console.log(q.search);

	var qdata = q.query;

	console.log(qdata.name);
	res.end();
}).listen(80);
