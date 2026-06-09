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

console.log(User);

// Creating the BASIC CRUD APIs using model

async function createUser() {
    const newUser = await User.create({
        name:"Kapil",
        email:"kapil2@gmail.com"
    })
    console.log(newUser);
}

async function getAllUsers(){
    const users = await User.find();
    console.log(users);
}

async function filteringGetOnlyKapil() {
    const user = await User.find({name:"Kapil"});
    console.log(user);
}


// If there are many users with the same name then use the findOne it will return the first match document

async function getFirstMatchDocument(){
    const user = await User.findOne({name:"Kapil"})
    console.log(user);
}

// createUser();
// getAllUsers();
// filteringGetOnlyKapil();
getFirstMatchDocument();