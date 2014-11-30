
/*
 * GET home page.
 */

 exports.index = function(req, res){
 	res.render('index', { title: 'Express' });
 };

 exports.gatewaylogin = function(req, res){

 	console.log(req.param("username"));
 	
 	res.redirect('/loginUser');
 	
 	

};

exports.login = function(req, res){

 	//var page='Homepage';
 	var page=req.param("data");
 	res.render('homepage', {pageName: page}, function(err, results){
 		if(!err)
 		{ 	
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