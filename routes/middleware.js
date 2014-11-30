exports.login = function(req, res)
{
	console.log("hello");
	res.status(200);
    res.json({
      "status": 200,
      "message": "Success"});
    return;
}