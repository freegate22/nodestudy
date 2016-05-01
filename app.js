var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;
app.set('views','./views'); // 관습적 (default 값이기도 함)
app.set('view engine','jade');  // 변경불가
app.use(express.static('public')); // 관습적
app.get('/form',function (req, res) {
  res.render('form');
});
app.post('/form_receiver',function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  res.send("post!! " +title + " " + description);
});

app.get('/topic/:id', function (req, res) {
  var topics = [
    'javascript is...',
    'nodejs is...',
    'express is...'
  ];
  var output = `
  <a href="/topic?id=0">Javascript</a><br>
  <a href="/topic?id=1">Nodejs</a><br>
  <a href="/topic?id=2">Express</a><br>
   ${topics[req.params.id]}
  `
  res.send(output);
});

app.get('/topic/:id/:mode', function (req, res) {
  res.send(req.params.id+','+req.params.mode);
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/template', function(req, res){
  res.render('temp', {time:Date(), _title:'Jade'});
});
app.get('/dynamic', function(req, res){
  var lis = '';
  var date = new Date();
  for(var i = 0; i < 5; i++){
    lis = lis + '<li>coding</li>';
  }
  var output = `<!DOCTYPE html>
  <html>
  <body>
    Hello, Dynamic!!
    <ul>
    ${lis}
    </ul>
    ${date}
  </body>
  </html>
`
  res.send(output);
})
app.get('/route', function(req, res){
  res.send('hello apple, <img src="/apple.jpg">');
})
app.get('/login', function (req, res) {
  res.send('Login Please');
});
app.listen(3000, function(){
  console.log('Connected 3000 port');
});
