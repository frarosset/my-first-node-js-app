const http = require("node:http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  fs.readFile("./page.html", (err, data) => {
    if (err) {
      throw err;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(data);
  });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
