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


// 10 June
// Internally uses findOne({_id : id}) 
async function getDocumentUsingFindByID(){
    const id = "6a2803dca13b38cbf82b0910";
    const user = await User.findById(id); 
    console.log(user);
}

// findByIdAndUpdate: in this $set is optional to use
// Method 1 With $set, as $set is optional to use internally Mongoose convert shortcut method to $set
async function updateUser() {
    const id = "6a2803dca13b38cbf82b0910";
    const user = await User.findByIdAndUpdate(
        id,
        {
            $set:{
                role:"Admin"
            }
        },
        {
            new: true
        }

    )
    console.log(user);
}

// Method 2: Cleaner way without $set, as updateOne use _id code block and $set boiler plate code, mongoose removes that boiler plate code to make the code cleaner
async function updateUser(){
    const id = "6a2803dca13b38cbf82b0910";
    const user = await User.findByIdAndUpdate(
        id, 
        {
            role:"Admin"
        },
        {
            new: true
        }
    )
    console.log(user);
}

async function deleteUser() {
    const id = "6a2805390bb9714aedb5670b";
    const user = await User.findByIdAndDelete(id);
    console.log(user)
}

// createUser();
// getAllUsers();
// filteringGetOnlyKapil();
// getFirstMatchDocument();
// getDocumentUsingFindByID();
// updateUser()
// deleteUser();