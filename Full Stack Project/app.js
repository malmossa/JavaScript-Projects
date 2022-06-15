const http = require("http");

const ourApp = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("Hello, there.");
  }

  if (req.url == "/about") {
    res.end("thank you");
  }
});

ourApp.listen(3000);
