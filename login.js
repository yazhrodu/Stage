var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});

var app = express();

app.use(express.static(__dirname + '/public'));



app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index3.html'));
	
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/accueil');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
app.get('/accueil', function(request, response) {
	if(request.session.loggedin){
	response.sendFile(path.join(__dirname + '/public/index1.html'));
	 } else {
		 response.send('Please login to view this page!');
	 }
	});




app.post('/accueil', function(request, response) {
	var nom = request.body.nom;
	var ip = request.body.ip; 
	if (nom && ip) {
		connection.query("INSERT INTO `ecrans` (`nom_ec`, `adresse_ip`) VALUES ('"+escape(nom)+"', '"+escape(ip)+"')", [nom, ip], function(){
			response.redirect('/accueil');
		});
		
	} 
});
//function fetchData(response){
//	executeQuery("SELECT * FROM ecrans", function(result){
//	console.log(result);
//	response.write('<table><tr>');
//	for(var column in result[0]){
//		response.write('<td><label>'+ column + '</label>')
//	}
//	for(var row in result){
//		response.write('<tr>');
//		for(var)
//	}
//	})
//}



//app.connect(function(err) {
 // if (err) throw err;
 // connnection.query("SELECT * FROM ecrans", function (err, result, fields) {
 //   if (err) throw err;
 //	  var charge = db.nodelogin('nom_ec').find();
  //  console.log(con);
  //});
//});







	
	
	
//app.get('/home2', function(request, response) {
//	if (request.session.loggedin) {
//		response.send('Welcome back, ' + request.session.username + '!');
//		
//	} else {
//		response.send('Please login to view this page!');
//	}
//	response.end();
//});

app.listen(3000);