const http = require('http');
const fs = require('fs');
const port = 80;

const server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-type': 'text/html' });
	fs.readFile('t6-t18/index.html', function(error, data){
		if (error){
			res.writeHead(404);
			res.write('Error: file Not Found');
		} else {
			res.write(data);
		}
		res.end();
	});
	
	
})

server.listen(port, function(error){
	if (error){
		console.log('Something went wrong', error);
	} else {
		console.log('Server is listening on port' + port);
	}
})