const http = require("node:http");
const dt = require("./myDateTime.js");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`The date and time are currently ${dt.myDateTime()}`);
    res.end();
  })
  .listen(8080);
