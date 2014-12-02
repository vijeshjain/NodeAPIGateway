
/*
 * GET home page.
 */

 countLogin=0;
 var errLogin="";
 var loginEndpoint = require('./index');


 exports.index = function(req, res){

 	res.render('index', { errLogin: errLogin });
 	errLogin="";
 };


// Gateway API 
exports.gatewayLogin = function(req, res){
	
	console.log("in gatewayLogin...");
	console.log(req.param("email"));
	
 	// Calling actual REST API 
 	if(req.param("email")=="admin@admin.com" && req.param("password")=="admin")
 		loginEndpoint.login(req, res); 	
 	else
 	{
 		errLogin="Invalid Email or Password"; 		
 		res.redirect('/');
 	}
 	
 	

 };



// Actual REST API endpoint
exports.login = function(req, res){


	countLogin++;
	console.log("Login Gateway API Call counter: "+countLogin);
	res.render('homepage', {counter: countLogin}, function(err, results){
		if(!err)
		{ 	
			console.log("in actual login...");

			res.end(results);
            //res.send();
        }
        else
        {
        	res.end('An error occurred');
        	console.log(err);
        }
    });

};

