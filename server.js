var express = require('express'),  
    path = require('path'),
    fs = require('fs'),
    sassMiddleware = require('node-sass-middleware');










var app = express();  
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(sassMiddleware({
    src: __dirname + 'scss',
    dest: path.join(__dirname, 'css'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

app.use(express.static(staticRoot));

app.use(function(req, res, next){
    fs.createReadStream(staticRoot + 'index.html').pipe(res);
});

app.listen(app.get('port'), function() {  
    console.log('app running on port', app.get('port'));
});
