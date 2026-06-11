const User = require("../models/userModel");


const register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            throw new Error("All fields are required")
        }

        // find the user in the database if already present then throw error already exists
        const user = await User.findOne({ email });

        if (user) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }


        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({
            message: "User Created Successfully",
            id: newUser._id,
            firstName: newUser.firstName, 
            lastName: newUser.lastName,
            email: newUser.email
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register
}