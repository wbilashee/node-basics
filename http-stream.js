const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    let stream;

    if (req.url === "/") {
        stream = fs.createReadStream("./static/index.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        stream.pipe(res);
    } else if (req.url === "/text") {
        stream = fs.createReadStream("./content/big.txt");
        res.writeHead(200, { "Content-Type": "text/plain" });
        stream.pipe(res);
    } else if (req.url === "/data") {
        stream = fs.createReadStream("./static/data.json");
        res.writeHead(200, { "Content-Type": "application/json" });
        stream.pipe(res);
    } else if (req.url === "/image") {
        stream = fs.createReadStream("./static/photo.jpg");
        res.writeHead(200, { "Content-Type": "image/jpg" });
        stream.pipe(res);
    } else {
        res.end("Page not found");
        res.writeHead(404, { "Content-Type": "text/plain" });
    }
}).listen(5000);