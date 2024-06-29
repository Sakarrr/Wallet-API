const mongoose = require("mongoose");
const userDashboard = async (req, res) => {
  const User = mongoose.model("users");
  const Transactions = mongoose.model("transactions");

  const getUserData = await User.findOne({
    _id: req.user._id,
  }).select("balance name");

  const getTransaction = await Transactions.find({
    user_id: req.user._id,
  })
    .sort("-createdAt")
    .select("amount remarks transaction_type")
    .limit(5);

  res.status(200).json({
    data: getUserData,
    transactions: getTransaction,
  });
};

module.exports = userDashboard;
