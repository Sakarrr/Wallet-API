const express = require("express");
const mongoose = require("mongoose");

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

app.listen(8000, () => {
  console.log("Server started successfully!");
});
