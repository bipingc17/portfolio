const http = require("http");
const express = require("express")
const app = express();

app.get('/', (req, res) =>{
    res.end("Hello World")
})

const server = http.createServer(app);

server.listen(3005, 'localhost', (err) => {
    if(err) {
        console.log("Error listening to port 3005")
    } else {
        console.log("Server is listening to port 3005")
        console.log("Press CTRL+C to disconnect server")
    }
})