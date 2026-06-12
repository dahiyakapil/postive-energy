const express = require("express");
const { register, login, getProfile, getMe, updateProfile, changePassword, adminDashboard, } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddlware = require("../middleware/adminMiddleware");

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login)
userRouter.get("/get-profile", authMiddleware, getProfile)
userRouter.get("/me", authMiddleware, getMe)
userRouter.put("/profile", authMiddleware, updateProfile)
userRouter.put("/change-password", authMiddleware, changePassword)

// RBAC Authorization routes
userRouter.get("/admin-dashboard", authMiddleware, adminMiddlware, adminDashboard);


module.exports = userRouter;