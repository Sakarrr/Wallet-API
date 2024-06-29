const mongoose = require("mongoose");

const addIncome = async (req, res) => {
  const Users = mongoose.model("users");

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
  await Users.updateOne(
    { _id: req.user._id },
    { $inc: { balance: amount } },
    { runValidators: true }
  );
  res.status(200).json({
    status: "Income was added",
  });
};

module.exports = addIncome;
