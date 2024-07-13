const express = require("express");
const app = express();
const PORT = 2024;

const customers = [
  {
    name: "JavaScript",
    industry: "Frontend and Backend",
  },
  {
    name: "HTML",
    industry: "Frontend",
  },
  {
    name: "CSS",
    usedFor: "Styling",
  },
];
app.get("/", (request, response) => {
  response.send("Welcome to my NodeJS Server(API) get...");
});

app.get("/api/customers", (req, res) => {
  res.send({ customers: customers });
});

app.post("/", (request, response) => {
  response.send("Welcome to NodeJS post request");
});
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
