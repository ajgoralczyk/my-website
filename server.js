var express = require('express'),  
    path = require('path'),
    fs = require('fs');

var app = express();  
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));


app.use(express.static(staticRoot));

app.use(function(req, res, next){
    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

app.listen(app.get('port'), function() {  
    console.log('app running on port', app.get('port'));
});

// import express = require('express');
// import path = require('path');

// var port: number = process.env.PORT || 3000;
// var app = express();
 
// app.use('/', express.static(path.resolve(__dirname)));
 
// var renderIndex = (req: express.Request, res: express.Response) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
// }
 
// app.get('/*', renderIndex);
 
// var server = app.listen(port, function() {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('This express app is listening on port:' + port);
// });