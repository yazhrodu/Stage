//activation des modules
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
const server = require('http').createServer(app);
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

		connection.query("SELECT nom_ec, adresse_ip, id, id_depot FROM ecrans",function(err,rows){
			var d = rows;
			myJSON = JSON.stringify(d);
			//console.log(myJSON);
			
			socket.on('depo',function(id_dep){
			var id_depp = id_dep;
			var dep = [];
			var sql = "SELECT nom_ec FROM ecrans WHERE id = ?";
			var Noms;
			connection.query(sql, [id_dep], function(err, rows){
				for (var i = 0; i < rows.length; i++){
         		var currrentNoms = rows[i];
         		Noms = currrentNoms.nom_ec;
				dep.push(Noms);
				}
				
				var d = rows;
				myJSON = JSON.stringify(d);
				//var Nom = rows.nom_ec;
				console.log(myJSON);
				console.log(Noms);
				console.log(rows);
				console.log(dep);
				
			});
		});
			
			socket.emit('depot',myJSON, rows);
				});
	});

io.on('connection', socket => {
	
		connection.query("SELECT*FROM depot",function(err,rows){
			var dx = rows;
			myJSONx = JSON.stringify(dx);
			var Page;
			var depo = [];
			
			for (var i = 0; i < rows.length; i++){
         		var currrentPage = rows[i];
         		Page = currrentPage.nom_depot;
				depo.push(Page);
				}
			
			//console.log(Page);
			//console.log(depo);
			//console.log(dx);
			//console.log(myJSONx);
			
			
			//insertion de l'id écran et du nom depot
			socket.on('depot1',function(ecran, n_dep){
				
				console.log(n_dep);
				console.log(ecran);
			//var ec1234 = page;
			var n_dep1 = n_dep
			var ecransx = ecran;
			//var depo = [];
			//var Page;
			var j;
			var egal;
			var ik = 0;
			
		//----------------------------
			for(j in depo){
				if(n_dep1 == depo[j]){
			   			console.log("egal");
					egal = "oui";
					ik = 1;
			   }else{
				   console.log("non egale")
				   egal = "non";
			   }	
				
			}	if(ik!=1){
				connection.query("INSERT INTO `depot` (`id_ecran`, `nom_depot`) VALUES ('"+escape(ecransx)+"','"+escape(n_dep1)+"')", [ecransx, n_dep1], function(err, rows){
				
				console.log("Record insert!!");
    			console.log(rows);
				
				console.log("ok");
			});
			}else{
				console.log('déja créer dans la base de données');
			}
				console.log(egal);
				console.log(ik);
			
			///connection.query("INSERT INTO `depot` (`id_ecran`, `nom_depot`) VALUES ///('"+escape(ecransx)+"','"+escape(n_dep1)+"')", [ecransx, n_dep1], function(err, rows){
				
				///console.log("Record insert!!");
    			///console.log(rows);
				
				///console.log("ok");
				//for (var i = 0; i < rows.length; i++){
         		//var currrentPage = rows[i];
         		//Page = currrentPage.nom_ec;
				//depo.push(Page);
				//}
				
				
				//var Nom = rows.nom_ec;
				//console.log(myJSONx);
				//console.log(Page);
				
				//console.log(depo);
				
			///});
			
		});
			socket.emit('depot2',myJSONx, rows);
				});
	});

io.on('connection', socket => {
		
		connection.query("SELECT id_page, nom_page FROM ecrans",function(err,rows){
			var d = rows;
			myJSON = JSON.stringify(d);
			
			
			var Data ={
				model: [
    			{ id:"id_page", "models":"nom_page", data:"tab" },
					]
			}
			
			
			
			//console.log(myJSON);
			
			socket.on('depo',function(id_dep){
			var id_depp = id_dep;
			var dep = [];
			var sql = "SELECT nom_ec FROM ecrans WHERE id = ?";
			var Noms;
			connection.query(sql, [id_dep], function(err, rows){
				for (var i = 0; i < rows.length; i++){
         		var currrentNoms = rows[i];
         		Noms = currrentNoms.nom_ec;
				dep.push(Noms);
				}
				
				var d = rows;
				myJSON = JSON.stringify(d);
				//var Nom = rows.nom_ec;
				console.log(myJSON);
				console.log(Noms);
				console.log(rows);
				console.log(dep);
				
			});
		});
			
			
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
	var id_depot = request.body.id_depot;
	if (nom && ip) {
		connection.query("INSERT INTO `ecrans` (`nom_ec`, `adresse_ip`,`id_depot`) VALUES ('"+escape(nom)+"', '"+escape(ip)+"', '"+escape(id_depot)+"')", [nom, ip,id_depot], function(){
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



server.listen(3000);