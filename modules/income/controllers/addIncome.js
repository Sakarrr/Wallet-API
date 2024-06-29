const mongoose = require("mongoose");

const addIncome = async (req, res) => {
  const Users = mongoose.model("users");
  const Transactions = mongoose.model("transactions");

  const { amount, remarks } = req.body;

  try {
    if (!amount) throw "Please fill desired amount";
    if (amount < 1) throw "Amount must be above 1";
    if (!remarks) throw "Please fill remarks";
    if (remarks.length < 2) throw "Remarks must be atleast 2 chars long";
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e,
    });
    return;
  }

  // Success
  // Create transaction history
  try {
    await Transactions.create({
      amount: amount,
      remarks: remarks,
      transaction_type: "income",
      user_id: req.user._id,
    });

    await Users.updateOne(
      { _id: req.user._id },
      { $inc: { balance: amount } },
      { runValidators: true }
    );
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "Income was added",
  });
};

module.exports = addIncome;
