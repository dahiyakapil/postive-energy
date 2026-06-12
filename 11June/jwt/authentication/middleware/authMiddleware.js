const jwt = require("jsonwebtoken");

const JWT_TOKEN = "fekvknsdlewjdewdrebfjerfiek"

const authMiddleware = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;

        if (!authHeader.startsWith("Bearer ")) {
            const error = new Error("Token missing");
            error.statusCode = 401;
            throw error;
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, JWT_TOKEN);

        req.user = decoded;

        next()
    } catch (error) {
        next(error)
    }

}

module.exports = authMiddleware;