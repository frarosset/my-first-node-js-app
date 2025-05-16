const http = require("http");
const uc = require("upper-case");

const port = 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(uc.upperCase("Hello World!"));
  })
  .listen(port, () => console.log(`Server running at port ${port}`));
