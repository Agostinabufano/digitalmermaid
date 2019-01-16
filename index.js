var express = require('express');
let server = express();

server.get('/', function (req,res,next) {
    res.sendFile(__dirname + "/index.html")
})

server.listen(3000)