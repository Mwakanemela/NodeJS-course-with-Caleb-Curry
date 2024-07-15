const express = require("express");
const mongoose = require("mongoose");
const Customer = require("./models/customer");
// const dotenv = require("dotenv");

// dotenv.config();

const app = express();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 2024;
const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;
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

const customer = new Customer({
  name: "Mwakanemela",
  industry: "Software Engineer",
});
// customer.save() -> will save the customer object to mongodb
app.get("/", (request, response) => {
  response.send("Welcome to my NodeJS Server(API) get...");
});

app.get("/api/customers", (req, res) => {
  res.send({ customers: customer });
});

app.post("/api/customers", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});
app.post("/", (request, response) => {
  response.send("Welcome to NodeJS post request");
});

const connectToMongoDB = async () => {
  try {
    await mongoose.mongoose.connect(MONGO_DB_CONNECTION_STRING);
    console.log("connected to mongodb atlas yea!!!");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

connectToMongoDB();
