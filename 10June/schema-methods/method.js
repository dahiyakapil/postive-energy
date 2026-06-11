const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/students");
    console.log("Database Connected")
}
connectDB();

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        default: "user"
    }
});

userSchema.methods.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
const User = mongoose.model("User", userSchema);




async function createUser() {
    const user = new User({
        firstName: "Spider",
        lastName: "man",
        email: "spider@gmail.com"
    })
    // console.log(user);
    await user.save();
    console.log(
        user.getFullName()
    );
}

createUser();