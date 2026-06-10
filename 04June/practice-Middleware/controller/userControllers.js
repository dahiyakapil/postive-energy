const getUsers = (req, res, next) => {
    try {
        throw new Error("Error in getUsers controller");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUsers
}