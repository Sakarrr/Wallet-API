const userDashboard = (req, res) => {
  console.log(req.user);
  res.status(200).json({
    status: "Dashboard",
    message: req.user,
  });
};

module.exports = userDashboard;
