const http = require("http");

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Welcome to my nodejs server");
});

server.listen(2024, "127.0.0.1", () => {
  console.log("Server running...");
});
