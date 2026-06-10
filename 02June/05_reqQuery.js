const express = require("express");
const app = express();

app.get("/users", (req, res) => {
    console.log(req.query);

    res.status(200).json({
        message: "Req.Query Object",
        query: req.query
    })
})

app.listen(3000, () => {
    console.log("Server is running on : 3000")
})