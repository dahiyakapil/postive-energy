const express = require("express");
const router = express.Router(); //Returns router object

router.get("/", (req, res) => {
    res.send("Users fetched");
})


router.post("/", (req, res) => {
    res.send("User Created")
});

module.exports = router;