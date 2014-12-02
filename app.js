
/**
 * Module dependencies.
 */

 var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
 , http = require('http')
 , path = require('path')
 , osprey  = require('osprey')    // binding .raml with Node
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

app.get('/', routes.index);

// gateway API handler
app.post('/gateway/loginUser', index.gatewayLogin);


var raml = require('raml-parser');

raml.loadFile('./public/loginex.raml').then( function(data) {
	// Loading RAML file
	 console.log(data);
	
}, function(error) {
	console.log('Error parsing: ' + error);
});



var myAPI;
raml.composeFile('./public/loginex.raml').then( function(rootNode) {
	// Assigning RAML file as a Root node in the application
	console.log('Root Node: ' + rootNode);
	
}, function(error) {
	console.log('Error parsing: ' + error);
});



// var api = osprey.create('/api', app, {
// 	ramlFile: './public/loginex1.raml',
// 	logLevel: 'debug'
// });




// api.describe(function (api) {
// 	api.get('/teams/:teamId', function (req, res) {
//     // Your business logic here!
//     res.send({
//     	name: "Barcelona",
//     	id: "BAR",
//     	homeCity: "Barcelona",
//     	stadium: "Camp Nou",
//     	matches: 24
//     });
// });
// })
// .then(function (app) {

// 	app.get('/', function(req, res) {
// 		res.redirect('/api/console');
// 	});

// });



http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
