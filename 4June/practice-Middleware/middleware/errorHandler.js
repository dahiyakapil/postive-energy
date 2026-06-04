const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        stack: err.stack,
        message: err.mmessage || "Internal Server Error"
    })
    
}

module.exports = {errorHandler}