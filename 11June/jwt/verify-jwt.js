const jwt = require("jsonwebtoken");


 const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJuYW1lIjoiS2FwaWwiLCJlbWFpbCI6ImthcGlsQGdtYWlsLmNvbSIsImlhdCI6MTc4MTE1OTAyMywiZXhwIjoxNzgyMDIzMDIzfQ.Xnv_gmMNUdOLdMDY1VuCyDJ5_4JY-zlhOkoTRY7ukk8";

 
const decoded = jwt.verify(token, "secret-key");

console.log(decoded);
