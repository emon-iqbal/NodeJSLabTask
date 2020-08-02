var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('Admin/Admin/AllEmpList');
});


module.exports = router;