var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('Admin/Admin/AddEmpLoyee');
});

/*router.post('/', function(req, res)
{

	if(req.body.emp_name == "" && req.body.emp_phone == "" && req.body.emp_address == "" && req.body.emp_GENDER == "" && req.body.emp_desig == "")
	{
		res.send('EMPTY !! PLEASE Fill all the fields to add new employee to this company');
	}
	else
	{	
		res.redirect('/AllEmpList');
	}
	
});*/

module.exports = router;