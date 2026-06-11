const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(
        "mongodb://localhost:27017/students"
    );
    console.log("MongoDB Connected Successfully");
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

// Schema methods and middleware will be placed before the model

userSchema.pre(
    "save",
    async function () {

        console.log(
            "Before Saving"
        );

    }
);

userSchema.post(
    "save",
    function (doc) {

        console.log("After Saving");

    }
);

const User = mongoose.model("User", userSchema);

async function createUser() {

    const user = new User({
        firstName: "Jack",
        lastName: "James",
        email: "jack123@gmail.com"
    });

    console.log("Creating User");

    await user.save();

    console.log("Save Completed");
}

createUser()