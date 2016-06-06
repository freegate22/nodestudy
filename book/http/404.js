var http = require('http');
http.createServer(function(req, res){
  console.log("xx");
    res.writeHead(404);
    res.end();
}).listen(8080, function(){
  console.log("server running");
});
