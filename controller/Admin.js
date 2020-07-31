var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('Admin/dashboard');
});

/*router.post('/', function(req, res)
{

	if(req.body.submit == req.body.password)
	{
		res.redirect('/Admin');
	}
	else
	{	
		res.send('iNVALiD !!PLEASE TRY AGAIN');
	}
	
});*/

module.exports = router;