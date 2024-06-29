const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
const incomeRouter = require("./modules/income/income.routes");

require("dotenv").config();

const app = express();

app.use(express.json());

// Model
require("./models/users.model");

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((e) => {
    console.log("Connection to MongoDB failed!", e);
  });

// Routes
app.use("/users", userRouter);
app.use("/income", incomeRouter);

app.listen(8000, () => {
  console.log("Server started successfully!");
});
