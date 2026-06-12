const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 60
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 60
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        enum: ["user", "admin"], 
        default:"user"
    }
}, { timestamps: true });

userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }

    this.password = await bcrypt.hash(
        this.password,
        10
    );
});

// Compare plain text password and hash password if match then generate new JWT token
userSchema.methods.comparePassword =
    function (password) {

        return bcrypt.compare(
            password,
            this.password
        );

    }


const User = mongoose.model("User", userSchema);
module.exports = User;