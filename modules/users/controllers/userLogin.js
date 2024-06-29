const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
  const Users = mongoose.model("users");
  const { email, password } = req.body;

  // Validations
  try {
    if (!email || !password) throw "Please fill both inputs";

    const getUser = await Users.findOne({
      email: email,
    });

    if (!getUser) throw "Email doesn't exist";

    const matched = await bcrypt.compare(password, getUser.password);

    if (!matched) throw "Email and password doesn't match";
  } catch (e) {
    res.status(400).json({ status: "Failed", message: e });
    return;
  }

  // Success
  const getUserForAccessToken = await Users.findOne({
    email: email,
  });

  const accessToken = jwt.sign(
    {
      email: getUserForAccessToken.email,
      name: getUserForAccessToken.name,
    },
    process.env.jwt_salt,
    { expiresIn: "90 days" }
  );

  res.status(200).json({
    status: "User Logged in Successfully",
    accessToken,
  });
};

module.exports = userLogin;
