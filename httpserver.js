import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello world</h1>");
  } else if (req.url === "/json") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Hello world",
      })
    );
  } else if (req.url === "/text") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("hello world");
  } else if (req.url === "/js") {
    res.writeHead(200, { "content-type": "application/javascript" });
    res.end('console.log("Hello world")');
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("home page");
  }
});
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
