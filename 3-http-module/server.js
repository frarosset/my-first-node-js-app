const http = require("http");

const port = 8080;

http
  .createServer((req, res) => {
    const baseURL = "http://" + req.headers.host + "/";
    const reqUrl = req.url;

    if (reqUrl === "/favicon.ico") {
      res.writeHead(204);
      console.log("Ignoring favicon request");
      res.end();
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });

    const parsedUrl = new URL(reqUrl, baseURL); // url.parse(reqUrl,true) is legacy
    const q = parsedUrl.searchParams; // .query is legacy

    const txt = `Url: ${reqUrl}: Year ${q.get("year")} - Month ${q.get(
      "month"
    )}`;

    res.end(txt);
  })
  .listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });
