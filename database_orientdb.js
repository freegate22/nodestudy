var OrientDB = require('orientjs');

var server = OrientDB({
  host: 'localhost',
  port: 2424,
  username: 'root',
  password: 'Dkcladp1@' // 수정필요
});

var db = server.use('o2');
// console.log('Using database: ' + db.name);
// db.record.get('#12 :1')
// .then(function (record) {
//   console.log('Loaded record:', record);
// });
// var sql = "SELECT FROM topic";
// db.query(sql).then(function (response){
//   console.log(response); //an Array of records inserted
// });

// SELECT
// var sql = "SELECT FROM topic WHERE @rid=:rid";
// var param = {
//   params:{  // params는 약속된 값, 변경불가
//     rid:'#12:1'
//   }
// };
// db.query(sql, param).then(function (response){
//   console.log(response); //an Array of records inserted
// });

// INSERT
// var sql = "INSERT INTO topic(title, description) VALUES(:title, :desc)";
// var param = {
//   params:{  // params는 약속된 값, 변경불가
//     title:'Express',
//     desc : 'Express is framework for web'
//   }
// };
// db.query(sql, param).then(function (response){
//   console.log(response); //an Array of records inserted
// });

// UPDATE
// var sql = "UPDATE topic SET title=:title WHERE @rid=:rid";
// db.query(sql, {  params:{  // params는 약속된 값, 변경불가
//     title:'Expressjs',
//     rid : '#12:2'
//   }}).then(function (response){
//   console.log(response); //an Array of records inserted
// });

// DELETE
// var sql = "DELETE FROM topic WHERE @rid=:rid";
// db.query(sql, {  params:{  // params는 약속된 값, 변경불가
//     rid : '#12:2'
//   }}).then(function (response){
//   console.log(response); //an Array of records inserted
// });
