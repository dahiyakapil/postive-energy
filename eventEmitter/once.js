/*
    The once method registers a listener that executes only the first time the event is emitted. After execution, the listener is automatically removed.
*/


const EventEmiiter = require("events");
const emitter = new EventEmiiter();

emitter.once("login", (user) => {
    console.log(`Welcome ${user.name}`);
})

emitter.emit("login", { id: 1, name: "kapil" })
emitter.emit("login", { id: 1, name: "kapil" })
emitter.emit("login", { id: 1, name: "kapil" })