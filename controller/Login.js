var express = require('express');
var router = express.Router();

router.get('/', 
	function(req, res)
	{
		res.render('Login/Log');
	}
);

router.post('/', function(req, res)
{

	if(!req.body.uname && !req.body.pwd)
	{
		res.send('PLEASE ENTER YOUR NAME and a password to GO AHEAD');
		/*setTimeout(function(){res.render('Login/Log');}, 3000);*/
	}
	/*if(!req.body.uname && !req.body.pass)
	{
		setTimeout(function()
					{
						res.redirect('/Login');
					}, 3000);
	}*/
	else
	{
		res.redirect('/Admin');
	}
	
});

module.exports = router;