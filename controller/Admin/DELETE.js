var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.render('Admin/Admin/DELETE');
});

/*router.post('/', function(req, res)
{
		if(req.body.DELETE)
	{
		res.render('Admin/Admin/AddEmpLoyee');
	}
	else
	{	
		res.send('CANNOT FOUND any button click');
	}
	
});

	//////
	app.get('/Admin/AllEmpList/:id', (req, res) =>
  	AllEmpList.findOneAndRemove({
  	id: req.params.id
  }, (error, AllEmpList) => 
  {
    if(error) 
    {
      res.send('error')
    } 
    else 
    {
      console.log(id);
      res.status(204);
  	}

}));
*/


module.exports = router;