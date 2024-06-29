const userDashboard = (req, res) => {
  res.status(200).json({
    status: "Dashboard",
  });
};

module.exports = userDashboard;
