const fs = require("fs");

// This will block the main thread
fs.readFileSync("demo.txt", "utf-8", (error, data) => {
    if(error){
        console.log("Error in reading file", error);
        return;
    }
    console.log("Data of the FIle : ", data)
})

// This will not block the main thread
fs.readFile("demo.txt", "utf-8", (error, data) => {
    if(error){
        console.log("Errir in reading async file", error);
    }
    console.log("Async File Data: ", data)
})