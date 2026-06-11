const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.stuatus(404).json({
            message: "Token is missing"
        })
    }

    try {
        const decoded = jwt.verify(token, "secret-key");

        req.user = decoded;

        next()
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}