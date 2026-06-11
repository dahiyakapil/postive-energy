const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionString =
            await mongoose.connect("mongodb://localhost:27017/students");

        console.log(
            `MongoDB Connected: ${connectionString.connection.host}`
        );

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;