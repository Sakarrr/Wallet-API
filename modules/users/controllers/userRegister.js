const mongoose = require("mongoose");

const userRegister = async (req, res) => {
  const Users = mongoose.model("users");

  const { name, email, password, address, balance } = req.body;

  // Validations

  // Creation code
  try {
    const createdUser = await Users.create({
      name,
      email,
      password,
      address,
      balance,
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "User Register",
  });
};

module.exports = userRegister;
