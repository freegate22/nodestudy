var fs = require('fs');
var http = require('http');
http.createServer(function(req, res){
  fs.readFile('index.html', function(error, data){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(data);
  })
}).listen(8080, function(){
  console.log("server running");
});

http.createServer(function(req, res){
  fs.readFile('index.jpg', function(error, data){
    res.writeHead(200, {'Content-Type' : 'image/jpeg'});
    res.end(data);
  })
}).listen(8081, function(){
  console.log("server running");
});

http.createServer(function(req, res){
  fs.readFile('pickme.mp3', function(error, data){
    res.writeHead(200, {'Content-Type' : 'audio/mp3'});
    res.end(data);
  })
}).listen(8082, function(){
  console.log("server running");
});
