var http = require('http');
http.createServer(function(req, res){
    res.writeHead(302, { 'Location' : 'http://www.naver.com'});
    res.end();
}).listen(8080, function(){
  console.log("server running");
});
