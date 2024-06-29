const express = require("express");
const userRegister = require("./controllers/userRegister");
const userLogin = require("./controllers/userLogin");
const userDashboard = require("./controllers/userDashboard");
const auth = require("../../middlewares/auth");
const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

// Protected route
// userRouter.use(auth); // Another way to use middleware.
userRouter.get("/dashboard", auth, userDashboard);

module.exports = userRouter;
