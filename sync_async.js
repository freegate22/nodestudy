var fs = require('fs');
console.log('1');
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

console.log('2');
var data = fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
  console.log(data);
});
// console.log(data);

// fs.readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
