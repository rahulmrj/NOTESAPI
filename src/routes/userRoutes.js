const express = require("express");
const { singup, signup, signin } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

module.exports = userRouter;
