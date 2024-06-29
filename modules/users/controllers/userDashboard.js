const mongoose = require("mongoose");
const userDashboard = async (req, res) => {
  const User = mongoose.model("users");

  const getUserData = await User.findOne({
    email: req.user.email,
  }).select("balance name");

  res.status(200).json({
    data: getUserData,
  });
};

module.exports = userDashboard;
