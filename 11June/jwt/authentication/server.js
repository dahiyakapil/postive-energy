const express = require("express");
const connectDB = require("./config/connectDB");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes")

const app = express();
const PORT = 4000;

// Express middleware
app.use(express.json());



// Routes
app.use("/users", userRoutes);
app.use("/health", (req, res) => {
    res.send("Server running on 4000")
})

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                `Server running on port http://localhost/${PORT}`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
    
app.use(errorHandler);