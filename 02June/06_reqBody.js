const express = require("express");
const app = express();


app.use(epxress.json());

app.post("/register", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        message: "User Created"
    })
});

app.listen(3000, () => {
    console.log("Server is running on 3000");
})