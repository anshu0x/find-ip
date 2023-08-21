const http = require("http");
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  const ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress ||
    "";
  res.end(JSON.stringify({ ip }));
});

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
