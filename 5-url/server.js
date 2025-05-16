const http = require("node:http");
const fs = require("node:fs");

const port = 8080;

http
  .createServer((req, res) => {
    const path = `.${req.url}`; // relative path

    fs.readFile(path, (err, data) => {
      if (err) {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("404 Not Found");
        return;
      }

      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
