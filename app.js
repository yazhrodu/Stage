const http = require('http');
const fs = require('fs');

// Chargement du fichier index.html affiché au client
const server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

//Chargement de socket.io
var io = require('socket.io').listen(server);

//Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket, pseudo) {
    // Quand un client se connecte, on lui envoie un message
    socket.emit('message', 'Vous êtes bien connecté !');
    // On signale aux autres clients qu'il y a un nouveau venu
    socket.broadcast.emit('message', 'Un autre client vient de se connecter ! ');

    // Dès qu'on nous donne un pseudo, on le stocke en variable de session
    socket.on('petit_nouveau', function(pseudo) {
        socket.pseudo = pseudo;
    });

//Quand le serveur reçoit un signal de type "message du client
socket.on('message', function (message){
	console.log(socket.pseudo + ' me parle! Il me dit: '+ message);
	});
});

server.listen(8080);