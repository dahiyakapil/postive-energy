const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/students");
    console.log("Database Connected")
}
connectDB();

const userSchema = new mongoose.Schema({
    name:{
        type:String, 
        required: true
    },
    email:{
        type: String, 
        required: true, 
        unique: true
    },
    role:{
        type: String,
        default: 'user'
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;

console.log(User);