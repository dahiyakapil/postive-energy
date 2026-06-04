// Array Databse

const users = [];

const createUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        const error = new Error(
            "Name and Email are required"
        );
        error.statusCode = 400;
        return next(error);
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    }

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User Created Successfully",
        user: newUser
    })
}

const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Users fethced",
        users: users
    })
}

const getUserById = (req, res, next) => {
    const id = Number(req.params.id);

    const user = users.find((user) => {
        return user.id === id
    })

    if (!user) {

        const error = new Error("User Not Found");
        error.statusCode = 404;
        return next(error);
    }

    res.status(200).json({
        success: true,
        user
    });
}

const updateUser = (req, res, next) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const user = users.find((user) => {
        return user.id === id;
    })

    if (!name || !email) {
        const error = new Error(
            "Name and Email are required"
        );
        error.statusCode = 400;
        return next(error);
    }

    if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        return next(error);
    }

    // update logic
    user.name = name;
    user.email = email;

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        updatedUser: user
    })
}

const deleteUser = (req, res, next) => {

    const id = Number(req.params.id);

    const index = users.findIndex((user) => {
        return user.id === id;
    });

    if (index === -1) {

        const error = new Error("User Not Found");
        error.statusCode = 404;

        return next(error);
    }

    const deletedUser = users[index];

    users.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "User Deleted Successfully",
        deletedUser
    });

}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}