const express = require("express");
const app = express();

// Send method used for sending the response from the server
app.get("/hey", (req, res) => {
    res.send("Hey from the server");
})

app.get("/users", (req, res) => {
    res.status(200).json({
        message: "User Fetched Successfully",
    })
})

app.post("/users/create-user", (req, res) => {
    res.status(200).json({
        message: "User Created Successfully",
        id: 1,
        name: "Kapil"
    })
})

app.put("/users/update", (req, res) => {
    res.status(200).json({
        message: "User updated successfully",
        id:2,
        name: "Kapil Dahiya"
    })
})

app.listen(3000, () => {
    console.log("Server running on port : 3000");
})