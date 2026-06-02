/*
The removeListener method is used to remove a previously registered event listener. It helps prevent memory leaks and allows applications to stop responding to events that are no longer needed.


*/

const EventEmitter = require("events");

const emitter = new EventEmitter();

function loginHandler() {
    console.log("User Logged In");
}

emitter.on("login", loginHandler);

emitter.emit("login");

emitter.removeListener("login", loginHandler);

emitter.emit("login");