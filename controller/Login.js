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

	if(req.body.uname == "emon" && req.body.pwd == "112134"){
		res.redirect('/Admin');
	}
	else if(req.body.uname == "ratuL" && req.body.pwd == "raT315"){
		res.redirect('/Employee');
	}
	else{
		res.send(' ** invalid name/password...PLEASE TRY AGAIN');
	}
	
});

module.exports = router;
