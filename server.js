import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});