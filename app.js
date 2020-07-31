var express 	= require('express');
var bodyParser 	= require('body-parser');
var login 		= require('./controller/Login');
var admin 		= require('./controller/Admin');
var logout 		= require('./controller/LogOuT');
var app 		= express();

//config
app.set('view engine', 'ejs');

//middleware  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/Login', login);
app.use('/LogOuT', logout);
app.use('/Admin', admin);



app.get('/', function(req, res){
	res.send("WELCOME TO the Arena of RevoLuTion!<br><br> <a href='/Login'> LOGiN</a> ");
});

app.listen(3000, function(){
	console.log('express http server started at...3000');
});