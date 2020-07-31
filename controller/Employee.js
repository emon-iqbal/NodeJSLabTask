var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('Employee/emp_home');
});

/*router.post('/', function(req, res)
{

	if(req.body.emon == req.body.password)
	{
		res.redirect('/Admin');
	}
	else
	{	
		res.send('iNVALiD !!PLEASE TRY AGAIN');
	}
	
});
*/
module.exports = router;