const { createServer } = require("node:http");
// OR: import { createServer } from 'node:http'; // rename file to server.mjs

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  ///res.writeHead(200, { "Content-Type": "text/plain" }); // this does the same
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
