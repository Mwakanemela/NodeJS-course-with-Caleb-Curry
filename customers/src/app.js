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

app.get("/", (request, response) => {
  response.send("Welcome to my NodeJS Server(API) get...");
});

app.get("/api/customers", async (req, res) => {
  const result = await Customer.find();
  res.send({ customers: result });
});

app.post("/api/customers", async (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  const { name, industry } = req.body;

  const customer = new Customer({
    name: name,
    industry: industry,
  });
  const result = await customer.save();
  res.send({ customer: result, message: "Customer saved successfully" });
  console.log("Saved Successfully");
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
