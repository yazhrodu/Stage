//activation des modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var unescapeJs = require('unescape-js');
var escapeJSON = require('escape-json-node');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


//connection à la base de donné mysql
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'nodelogin'
});


//donne accés au fichier public
app.use(express.static(__dirname + '/public'));



app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());




io.on('connection', socket => {
	//chargement et affichage de la base de données	
		connection.query("SELECT nom_ec, adresse_ip, id, id_depot FROM ecrans",function(err,rows){

//stock le nom de l'écran et l'id
			var id_depott = [];
        	var ecrans = [];
			var ecrans_id = [];
        	for (var i = 0; i < rows.length; i++){
         		var currrentNom = rows[i];
         		var Nom = currrentNom.nom_ec;
		 		var Id = currrentNom.id;
				var currrentDep = rows[i];
         		var Dep = currrentDep.id_depot;
         		id_depott.push(Dep);
         		ecrans.push(Nom);
				ecrans_id.push(Id);
        		}
       		//console.log(ecrans);
			//console.log(ecrans_id);
			//console.log(id_depott);

			


//supression d'un ecran			
			socket.on('news', function(note){
				console.log(note);
				var notee = note;
				var sql = "DELETE FROM ecrans WHERE id = ?";
				var query = connection.query(sql, [notee], function(err, result) {
    				console.log("Record Deleted!!");
    				console.log(result);
					});
				});
			
			//-------
			
		
		
			socket.emit('marche3', ecrans, ecrans_id, id_depott);
    		});
    	});
				

		 
    io.on('connection', socket => {
		connection.query("SELECT nom_ec, adresse_ip, id, jsonn FROM ecrans",function(err,rows){
			var d = rows;
			myJSON = JSON.stringify(d);
			//console.log(myJSON);
			
			socket.on('depo',function(id_dep){
			var id_depp = id_dep;
			var dep = [];
			var sql = "SELECT jsonn FROM ecrans WHERE id = ?";
			var Noms;
			connection.query(sql, [id_dep], function(err, rows){
				for (var i = 0; i < rows.length; i++){
         		var currrentNoms = rows[i];
         		Noms = currrentNoms.jsonn;
				dep.push(Noms);
				}
				
				var d = rows;
				myJSON = JSON.stringify(d);
				//var Nom = rows.nom_ec;
				//console.log(myJSON);
				//console.log(Noms);
				//console.log(rows);
				console.log("cei est "+dep);
				socket.emit('depotF',dep);
				
				
				//---------------------------------------
			var dx = rows;
			 var myJSONx = JSON.stringify(dx);
			var myJSONxx = (unescapeJs(myJSONx));
			var jso = rows[0];
			jso = jso.jsonn;
			jso = JSON.parse(jso);
			
		
			//insertion de l'id écran et du nom depot
			socket.on('depot11',function(data1){
				
				console.log(data1);
				console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"+id_dep);
				console.log(id_dep+"222222222233233323233");
			console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
				var JSONString = data1;
 				console.log(JSONString);
				
				//pour eviter les problèmes de mélange a cause d'un valeur json null
				if(JSONString == "[]"){
					JSONString = 0;
					console.log(JSONString);
				}
				//------------
				
				JSONString = escapeJSON(JSONString);
 
				console.log(JSONString+"'''''''''''''''''''''''''''''''''''''''''''''''''");
		
				connection.query("UPDATE ecrans SET jsonn = '"+JSONString+"' WHERE id = '"+id_dep+"' ", [JSONString,id_dep], function(err, rows){
				console.log(rows);
				console.log("Record insert!!");				
				console.log("ok");
				});
				
				
		
		});
			});
		});
			
			
	
			/*socket.emit('depot2x',myJSONx,myJSONxx,depo);*/
				
			
			
			
			socket.emit('depot',myJSON, rows);
				});
	});






//Authentification
app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
   				console.log('A user is connected: ' + username);
				
				
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


//Si l'identifiant et le mot de passe est bon renvoie sur la page accueil
app.get('/accueil', function(request, response) {
	if(request.session.loggedin){
	response.sendFile(path.join(__dirname + '/public/index1.html'));
	 } else {
		 response.send('Please login to view this page!');
	 }
	});


//Insertion des données dans la base de données
app.post('/accueil', function(request, response) {
	var nom = request.body.nom;
	var ip = request.body.ip;
	var id_depot = 0;
	if (nom && ip) {
		connection.query("INSERT INTO `ecrans` (`nom_ec`, `adresse_ip`,`id_depot`) VALUES ('"+escape(nom)+"', '"+escape(ip)+"', '"+escape(id_depot)+"')", [nom, ip,id_depot], function(error, results){
			console.log(results);
			response.redirect('/accueil');
		});
		 
	} else{
		response.redirect('/accueil');
	}
});


//------------

io.on('disconnect', function () {
    io.emit('user disconnected');
  });




io.on('disconnect', () => {
    console.log('user-disconnected: ' + username);
  }); 



server.listen(3002);