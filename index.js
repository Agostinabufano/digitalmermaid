'use strict';

global.config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');

var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(express.static('public'));

server.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/html/index.html");
});

server.get('/memotest', function (req, res) {
    res.sendFile(__dirname + "/public/html/memotest.html");
});

server.listen(config.port, function (err) {
    if (err)
        console.error(JSON.stringify(err));
    else
        console.info("The server has started successfully on port: " + config.port);
});