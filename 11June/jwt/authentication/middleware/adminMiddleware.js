const adminMiddlware = (req, res, next) => {
    try {
        const role = req.user.role;

        if (role !== "admin") {
            const error = new Error("Access denied");
            error.statusCode = 403;
            throw error;
        }

        next();
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddlware;