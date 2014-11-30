
/**
 * Module dependencies.
 */

 var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
 , http = require('http')
 , path = require('path')
 , index = require('./routes/index');

 var app = express();


// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

var options = {
	host: 'localhost',
	port: 5000,
	path: '/loginUser',
	method: 'POST'
};

var ser = http.request(options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
		console.log('BODY: ' + chunk);
	});


});



app.get('/', routes.index);
//app.get('/users', user.list);

app.post('/gateway/loginUser', function(req, res, next){
	
	console.log("in gateway");
	index.login(req, res);
    //
    // next();
    // app.post('/loginUser', index.login);
    //ser.end();

    //res.send();


});



//app.post('/loginUser', index.login);

// app.all('/gateway/*', [require('./routes/middleware')]);

var raml = require('raml-parser');

raml.loadFile('./public/loginex.raml').then( function(data) {
	console.log(data);
	console.log('Data: ' + JSON.stringify(data));
}, function(error) {
	console.log('Error parsing: ' + error);
});



var myAPI;
raml.composeFile('./public/loginex.raml').then( function(rootNode) {
	console.log('Root Node: ' + rootNode);
	//console.log('Root Node: ' + JSON.stringify(rootNode));
}, function(error) {
	console.log('Error parsing: ' + error);
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
