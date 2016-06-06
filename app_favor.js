var express = require('express');
var bodyParser = require('body-parser');
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'hsoh.cta4qrovv0s3.ap-northeast-2.rds.amazonaws.com',
  user     : 'hsoh',
  password : 'dkcladp1m',
  database : 'hsoh'
});

conn.connect();
// var sql = 'SELECT * FROM user';
// conn.query(sql, function(err, rows, fields) {
//   if (err) {
//     throw err;
//   } else {
//     for( var i = 0; i < rows.length; i++){
//       console.log(rows[i].id);
//     }
//   }
// });

// var sql = 'INSERT INTO favor (id, folder_id, user_id, name, url, type) VALUES (?,?,?,?,?,?)';
// var params = ['xx','aa','aa','aa','aa','aa'];
// conn.query(sql, params, function(err, rows, fields) {
//   if (err) {
//     throw err;
//   } else {
//     console.log(rows.insertId);
//   }
// });

var sql = 'UPDATE favor SET folder_id=? WHERE id=?';
var params = ['xx','aa'];
conn.query(sql, params, function(err, rows, fields) {
  if (err) {
    throw err;
  } else {
    console.log(rows);
  }
});

conn.end();

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;

// uploads 폴더를 url에서 user로 접근
app.use('/user',express.static('uploads'));
app.set('views','./views_favor');
app.set('view engine','jade');

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/list',function(req, res){
  var id = req.query.id;
  var userId = req.query.userId;

  var sqlId = '';
  if( id ){
    sqlId = ' and id=:id';
  }
  var sql = 'SELECT FROM favor WHERE userId=:userId ' + sqlId;
  db.query(sql, {params:{id:id, userId:userId}}).then(function(favorites){
    res.render('index', {favorites:favorites});
  });
});
////////////////////////////////////////////////
app.get('/favor/add',function(req, res){
  var sql = 'SELECT FROM favor';
  db.query(sql).then(function(favors){
    res.render('add', {favors:favors});
  });
});
app.post('/favor/add', function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  var sql = 'INSERT INTO favor (title, description, author) VALUES(:title, :desc, :author)';
  db.query(sql, {
    params:{
      title:title,
      desc:description,
      author:author
    }
  }).then(function(results){

    res.redirect('/favor/'+encodeURIComponent(results[0]['@rid']));
  });
});

app.get('/favor/:id/edit',function(req, res){
  var sql = 'SELECT FROM favor';
  var id = req.params.id;
  db.query(sql).then(function(favors){
    var sql = 'SELECT FROM favor WHERE @rid=:rid';
    db.query(sql, {params:{rid:id}}).then(function(favor){
      res.render('edit',{favors:favors, favor:favor[0]});
    });
  });
});
app.post('/favor/:id/edit',function(req, res){
  var sql = 'UPDATE favor SET title=:t, description=:d, author=:a WHERE @rid=:rid';
  var id = req.params.id;
  var title = req.body.title;
  var desc = req.body.desc;
  var author = req.body.author;

  db.query(sql, {
    params:{
      t:title,
      d:desc,
      a:author,
      rid:id
    }
  }).then(function(favors){
    res.redirect('/favor/'+encodeURIComponent(id));
  });
});

app.get('/favor/:id/delete',function(req, res){
  var sql = 'SELECT FROM favor';
  var id = req.params.id;
  db.query(sql).then(function(favors){
    var sql = 'SELECT FROM favor WHERE @rid=:rid';
    db.query(sql, {params:{rid:id}}).then(function(favor){
      res.render('delete',{favors:favors, favor:favor[0]});
    });
  });
});

app.post('/favor/:id/delete',function(req, res){
  var sql = 'DELETE FROM favor WHERE @rid=:rid';
  var id = req.params.id;
  db.query(sql, {
    params:{
      rid:id
    }
  }).then(function(favors){
    res.redirect('/favor/');
  });
});

app.get(['/favor' , '/favor/:id'], function(req, res){
  var sql = 'SELECT FROM favor';
  db.query(sql).then(function(favors){
    console.log(favors);
    var id = req.params.id;
    if (id){
      var sql = 'SELECT FROM favor WHERE @rid=:rid';
      db.query(sql, {params:{rid:id}}).then(function(favor){
        res.render('view',{favors:favors, favor:favor[0]});
      });
    } else {
      res.render('view',{favors:favors});
    }

  });

});


app.listen(3000, function(){
    console.log('connected 3000');
});
