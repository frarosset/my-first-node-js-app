const http = require("http");
const formidable = require("formidable");
const fs = require("fs");

const port = 8080;
const filetoupload = "filetoupload";

http
  .createServer((req, res) => {
    if (req.url == "/fileupload") {
      const form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        const file = files[filetoupload][0];
        const oldpath = file.filepath;

        const newfolder = "./uploaded";
        fs.mkdir(newfolder, (err) => {
          if (err && err.code != "EEXIST") throw err;
        });
        const newpath = `${newfolder}/${file.originalFilename}`;

        fs.rename(oldpath, newpath, (err) => {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write(`<input type="file" name="${filetoupload}"><br>`);
      res.write('<input type="submit">');
      res.write("</form>");
      res.end();
    }
  })
  .listen(port, () => console.log(`Server listening on port ${port}`));
