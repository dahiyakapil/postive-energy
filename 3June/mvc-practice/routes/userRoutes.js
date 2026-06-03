const express = require("express");
const userRouter = express.Router(); // It will return the Router object
const {getUsers, createUser, updateUser, deleteUser} = require("../controller/userController")

userRouter.get("/", getUsers);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user", updateUser);
userRouter.delete("/delete-user", deleteUser);

module.exports = userRouter;