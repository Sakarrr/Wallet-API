const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");

require("dotenv").config();

const app = express();
console.log(process.env.mongo_connect);

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

app.listen(8000, () => {
  console.log("Server started successfully!");
});
