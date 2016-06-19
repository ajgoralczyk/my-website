var express = require('express'),  
    path = require('path'),
    fs = require('fs'),
    sass = require('node-sass');


var app = express();  
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(
     sass.middleware({
         src: __dirname + '/scss',
         dest: __dirname + '/app/css',
         debug: true
     })
 );

app.use(express.static(staticRoot));

app.use(function(req, res, next){
    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

app.listen(app.get('port'), function() {  
    console.log('app running on port', app.get('port'));
});
