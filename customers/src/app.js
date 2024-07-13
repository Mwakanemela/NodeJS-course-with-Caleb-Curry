const express = require("express");
const app = express();
const PORT = 2024;

app.get("/", (request, response) => {
  response.send("Welcome to my NodeJS Server(API)...");
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
