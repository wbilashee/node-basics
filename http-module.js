const http = require("http");
const port = "5000";
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Welcome to home page");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("Welcome to about page");
    } else {
        res.statusCode = 404;
        res.end("Oops!");
    }
});

http.METHODS;
http.STATUS_CODES;

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});