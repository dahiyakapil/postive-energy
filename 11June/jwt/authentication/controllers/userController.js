const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

const JWT_SECRET = "fekvknsdlewjdewdrebfjerfiek"

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

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            const error = new Error(
                "Email and Password are required"
            );

            error.statusCode = 400;

            throw error;
        }

        const user = await User.findOne({ email });


        if (!user) {
            const error = new Error("Invalid Credentials");
            error.statusCode = 401;
            throw error;
        }

        // compare password from the model
        const isMatch = await user.comparePassword(password)

        if (!isMatch) {
            const error = new Error("Invalid password");
            error.statusCode = 401;
            throw error;
        }

        // after password is compared and match generate a jwt token
        const token = jwt.sign(
            {
                userId: user._id
            },
            JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            },
            token
        })

    } catch (error) {
        next(error)
    }
}

// Only for understanding the JWT not production based code
const getProfile = (req, res) => {
    try {
        res.status(200).json({
            message: "User profile fetched",
            user: req.user
        })
    } catch (error) {
        next(error)
    }
}

const getMe = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId);
        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 401;
            throw error;
        }
        res.status(200).json({
            message: "User fetched",
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });
    } catch (error) {
        next(error)
    }
}

// Update the profile of the authenticated users
// runValidators: used to check the schema model if do not write this then schema method will not give validation errors
const updateProfile = async (req, res, next) => {

    try {
        const { firstName, lastName, email } = req.body;

        const userId = req.user.userId;

        const updateUser = await User.findByIdAndUpdate(
            userId,
            {
                firstName,
                lastName,
                email
            },
            {
                new: true,
                runValidators: true
            }
        )

        if (!updateUser) {
            const error = new Error("User not found");
            error.statusCode = 401;
            throw error;
        }

        res.status(200).json({
            message: "User profile updated",
            user: {
                id: updateUser._id,
                firstName: updateUser.firstName,
                lastName: updateUser.lastName,
                email: updateUser.email
            }
        })
    } catch (error) {
        next(error);
    }
}

const changePassword = async (req, res, next) => {
    try {
        const { password, newPassword } = req.body;

        if (!password || !newPassword) {
            const error = new Error(
                "Current Password and New Password are required"
            );
            error.statusCode = 400;
            throw error;
        }

        const userId = req.user.userId;

        const user = await User.findById(userId);

        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        // match the entered password with the old password stored in the database using brcrypt.compare()

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            const error = new Error("Password did not match");
            error.statusCode = 401;
            throw error;
        }

        user.password = newPassword;

        await user.save();

        res.status(200).json({
            message: "User password updated",
            success: true,
        })


    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login,
    getProfile,
    getMe,
    updateProfile,
    changePassword
}