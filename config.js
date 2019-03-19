'use strict';

var fs = require("fs");

var extra = {};

if(fs.existsSync("./config.json")){
    var extra = require("./config.json");
}

const config = {
    port: 3000,
    ...extra
};

module.exports = config;
