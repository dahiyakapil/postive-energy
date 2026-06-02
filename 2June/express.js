const express = require("express");

const app = express();

// console.log(app); // Returns Application Object

// HTTP Methods

app.get("/users", (req, res) => {
    res.send("Fetched Users : 200");
})

app.post("/users/create-user", (req, res) => {
    res.send("Created user : 201");
})

app.put("/users/update", (req, res) => {
    res.send("Updated user : Status Code : 200");
})

app.delete("/users/delete", (req, res) => {
    res.send("User Deleted : 200");
})


app.listen(3000, (req, res) => {
    console.log("Sever running on Port : 3000" )
})