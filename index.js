const fs = require("fs");
const http = require("http");

var server = http.createServer((req, res) => {
	console.log("request was made: ", req.url);
	res.writeHead(200, { "Content-Type": "text/html" });

	// const file = "<h1>This is a simple HTML code</h1>";
	fs.readFile("index.html", "utf8", (err, file) => {
		res.end(file);
	});
});

server.listen(5000, () => {
	console.log("server running...");
});
