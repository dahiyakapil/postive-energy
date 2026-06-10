const express = require("express");
const app = express(); // It will return the Application Object
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);

    next();
}

app.use(logger);
app.use("/users", userRoutes);

// Error Handler will always be placed afer routes
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server is running on port : 3000");
})
