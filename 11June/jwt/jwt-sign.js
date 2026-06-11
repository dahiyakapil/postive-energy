const jwt = require("jsonwebtoken");

const payload = {userId: "123",name:"Kapil", email:"kapil@gmail.com"}
const token = jwt.sign(payload, "secret-key", {expiresIn: "10d"});

console.log(token)