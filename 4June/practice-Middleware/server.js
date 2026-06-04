const express = require("express");
const app = express(); // It will return Application object which will have methods
const userRoutes = require("./routes/userRoutes");
const { logger } = require("./middleware/logger");
const { errorHandler } = require("./middleware/errorHandler");

/*
    Built in middleware
    It will parse the JSON body and store JSON in the req.body if i do not use this i will get undefined in the req.body
*/
app.use(express.json());
app.use(logger);

//  Routes from the route file
app.use("/users", userRoutes);

// Error Handler will always be placed afer routes
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server is running at 3000")
})