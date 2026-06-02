const http = require("http");

// 1st part here basic just get request from the server
// const server = http.createServer((req, res) => {
//     console.log(req);
//     console.log("*************************",req.url);
//     console.log("----------------------", req.headers);
//     console.log("++++++++++++++", req.method);
//     console.log("IP ADDRESS: ----> :", req.socket.remoteAddress);
//     console.log("Request Received");
//     res.end("Hello Kapil ");
// });

// 2nd part : Now create the route and post requests using the HTTP servers
/*


*/

const server = http.createServer((req, res) => {

    // Home Route http://localhost:3000/
    if (req.url === "/") {

        res.statusCode = 200;

        res.setHeader(
            "Content-Type",
            "application/json"
        );

        res.end(
            JSON.stringify({
                message: "Home Page"
            })
        );
    }

    // Home Route http://localhost:3000/about

    if (req.url === "/about") {

        res.statusCode = 200;

        res.setHeader(
            "Content-Type",
            "application/json"
        );

        res.end(
            JSON.stringify({
                message: "About Page"
            })
        );
    }


})

server.listen(3000, () => {
    console.log("Server running on port 3000");
});