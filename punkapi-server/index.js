const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/beers", (req, res) => {
     res.setHeader('Access-Control-Expose-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization');
     res.setHeader('Access-Control-Allow-Credentials', true);
     res.sendfile(__dirname + "/beers.json");
});

server.listen(5500, () => console.log("A"));