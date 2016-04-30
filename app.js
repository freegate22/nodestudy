var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/route', function(req, res){
  res.send('hello apple, <img src="/apple.jpg">');
})
app.get('/login', function (req, res) {
  res.send('Login Please');
});
app.listen(3000, function(){
  console.log('Connected 3000 port');
});
