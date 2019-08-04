// 调用nodejs - http 模块
const http = require('http');
var testmodule = require('./foo');
// 定义域名
const hostname = 'node.test';

// 定义端口
const port = 80;

// 定义服务
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write("<meta charset=\"UTF-8\"/>");
	res.write("我的第一个nodejs模块:" + testmodule.myModule());
	res.end();
}).listen(80);