const { MongoClient } = require("mongodb");

const URL = "mongodb://localhost:27017"

const client = new MongoClient(URL);

async function connectDB() {
    await client.connect();
    console.log("MongoDB Connected Successfully");
}


async function createUser() {
    // connect with the database
    // await client.connect();

    // access the database
    const db = client.db("students");

    // access the collections from the database
    const userCollection = db.collection("users");

    const newUser = await userCollection.insertOne({
        name: "Jack4",
        age: 44,
        city: "LA4",
        country: "USA4"
    })

    console.log("MongoDB Connected Successfully");
    console.log(newUser)
}

async function getUsers() {

    const db = client.db("students");

    const userColl = db.collection("users");

    const getAllUsers = await userColl.find().toArray();
    console.log(getAllUsers)
}

async function getUserByName() {
    const db = client.db("students");
    const userCollection = db.collection("users");
    const getUser = await userCollection.findOne({
        name: "Kapil"
    });
    console.log(getUser)
}

async function updateUser() {
    const db = client.db("students");
    const userCollection = db.collection("users")
    const updateUser = await userCollection.updateOne(
        {
            name: "Kapil"
        },
        {
            $set: {
                city: "Updated NOIDA"
            }
        }
    )
    console.log(updateUser);
}

async function updateAllUsers() {
    const db = client.db("students");
    const userCollection = db.collection("users");

    const updateAll = await userCollection.updateMany(
        {},
        {
            $set: {
                country: "UK"
            }
        }
    )
    console.log(updateAll)
}

async function deleteUser() {
    const db = client.db("students");
    const userCollection = db.collection("users");

    const user = await userCollection.deleteOne({
        name: "Jack4"
    })
    console.log(user);
}
async function deleteManyUsers() {
    const db = client.db("students");
    const userCollection = db.collection("users");

    const deleteManyUsers = await userCollection.deleteMany({})
}


// Level 1 Queries (Easy)

async function createManyUsers() {
    await client.connect();

    const db = client.db("students");
    const userCollection = db.collection("users");

    const newUsers = await userCollection.insertMany([
        {
            name: "Kapil",
            age: 22,
            city: "Noida",
            country: "India"
        },
        {
            name: "Rahul",
            age: 25,
            city: "Delhi",
            country: "India"
        },
        {
            name: "Ironman",
            age: 35,
            city: "New York",
            country: "USA"
        },
        {
            name: "Avinash",
            age: 28,
            city: "Mumbai",
            country: "India"
        },
        {
            name: "Jack",
            age: 40,
            city: "London",
            country: "UK"
        },
        {
            name: "Tony",
            age: 18,
            city: "Los Angeles",
            country: "USA"
        },
        {
            name: "Bruce",
            age: 30,
            city: "Chicago",
            country: "USA"
        },
        {
            name: "Peter",
            age: 21,
            city: "Delhi",
            country: "India"
        },
        {
            name: "Natasha",
            age: 32,
            city: "Moscow",
            country: "Russia"
        },
        {
            name: "Steve",
            age: 38,
            city: "Washington",
            country: "USA"
        }
    ]);

    console.log(newUsers);
}

async function getUsersFromConutry() {
    const db = client.db("students");
    const userCollection = db.collection("users");

    const findUserByCountry = await userCollection.findOne(
        {
            country: "India"
        }
    )
    console.log(findUserByCountry)
}

// Get all users whose age is:22
async function getAges() {
    const db = client.db("students");
    const userCollection = db.collection("users");

    const users = await userCollection.find({ 'age': { $gt: 22 } }).toArray();

    console.log(users);
}

async function getUsersFromDelhi(){
    const db = client.db("students");
    const userCollection = db.collection("users");

    const users = await userCollection.find({city:"Delhi"}).toArray();
    console.log(users);
}


// Level 2 Queries (Logical Operators)

// Get users whose: country = India AND city = Delhi
async function getUsersFromIndiaAndDelhi(){
    const db = client.db("students");
    const userCollection = db.collection("users");

    // const users = await userCollection.find({$and: [{country:'India'}, {city: 'Delhi'}]}).toArray();

    //  const users = await userCollection.find({$or: [{country:'USA'}, {country: 'UK'}]}).toArray();

    const users = await userCollection.find({$and: [{'age': {$gt: 25}}, {country: 'India'}]}).toArray();

    console.log(users);
}

// Level 3 Queries (Sorting)
async function practiceUsers(){
    const db = client.db("students");
    const userCollection = db.collection("users");

    // 1.  Sort users by age ascending.
    // const users = await userCollection.find().sort({'age': 1}).toArray();

    // 2. Sort users by age descending.
    // const users = await userCollection.find().sort({'age': -1}).toArray();

    // 3. Sort users by name ascending.
    const users = await userCollection.find().sort({'name': 1}).toArray();
    console.log(users);
}

// Level 4: Pagination

async function paginationUsers(){
    const db = client.db("students");
    const userCollection = db.collection("users");

    //1. Get first 3 users.
    // const users = await userCollection.find().limit(3).toArray();

    // 2.Skip first 3 users and get next 3.
    const users = await userCollection.find().skip(3).limit(3).toArray();
    console.log(users);
}

connectDB();
// createUser()
// getUsers();
// getUserByName()
// updateUser();
// updateAllUsers();
// deleteUser()
// deleteManyUsers()
// createManyUsers()
// getUsersFromConutry()
// getAges();
// getUsersFromDelhi();
// getUsersFromIndiaAndDelhi()
// practiceUsers()
paginationUsers()
