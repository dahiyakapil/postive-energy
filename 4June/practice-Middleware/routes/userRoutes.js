const express = require("express");
const { getUsers } = require("../controller/userControllers");

const userRouter = express.Router();

userRouter.get("/", getUsers);

module.exports = userRouter;