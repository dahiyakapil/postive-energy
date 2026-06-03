const express = require("express");
const userRoutes = require("./routes/userRoutes")

const  app = express(); // It will return Application Object

/*
    When user send the data to the server, then we have to use the middleware from the express. express.json
    express.json will parse the JSON data into Javascript object and store inside the req.body.
    if we do not write the express.json middleware then the req.body will be undefined
*/ 

app.use(express.json());

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);

    next();
}

app.use(logger);
app.use("/users", userRoutes)


app.listen(3000, () => {
    console.log("Server is running on port : 3000");
})