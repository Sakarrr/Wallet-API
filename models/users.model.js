const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  address: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;