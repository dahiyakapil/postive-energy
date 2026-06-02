const express = require("express");
const app = express();

/*

    req.params

    It is used as parameter in the URL : http://localhost:3000/user/:id
    id can be anything : Randdom ID
    
    if we will create the route hardcoded then there will be thousands of route and handling all of them will be hard.
    So express gives a solution to use the req.paramaeters to get the id from the URL

    Without Params :

    app.get("/users/1")

    app.get("/users/2")

    app.get("/users/3")

    With Params : 

    app.get("/users/:id") --> It is dynamic routing 

*/

// req.params for the users and same will be for the products, and orders as in this we are handling the dynamic ID
app.get("/users/:id", (req, res) => {
    console.log(req.params);
    console.log(req.params.id);

    res.status(200).json({
        message: "Fetched User",
        id: req.params.id,
        name: "Kapil Dahiya"
    })
})

app.listen(3000, () => {
    console.log("Server is running on : 3000")
})