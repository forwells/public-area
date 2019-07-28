// 调用nodejs - http 模块
const http = require('http');

// 定义域名
const hostname = 'node.test';

// 定义端口
const port = 80;

// 定义服务
const server = http.createServer(
	(request, result) => {
		result.statusCode = 200;
		result.setHeader('Content-Type', 'text/plain');
		result.end('Hello, Node js');
	}
);


server.listen(port, hostname, () => {
	console.log(`the server is running on http://${hostname}:${port}`);
});