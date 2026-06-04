const express = require("express");
const { getUsers } = require("../controller/userControllers");
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controller/crudAPIWithoudDatabase");

const userRouter = express.Router();
// userRouter.get("/", getUsers);


// Array DB API
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)

module.exports = userRouter;