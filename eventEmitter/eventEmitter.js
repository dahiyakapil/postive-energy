// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("login", () => {
//     console.log("User Logged In");
// });

// emitter.emit("login");


// Passing parameters

const EventEmitter = require("events");
const emitter = new EventEmitter();


// emitter.on("login", (username) => {
//     console.log("Logged in : ", username);
// })

emitter.on("login", (user) => {
    console.log(`Welcome ${user.name}`)
})

emitter.emit("login", {
    id: 1, 
    name: "Kapil"
});