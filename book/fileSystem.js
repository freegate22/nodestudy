var fs = require('fs');
try {
  var text = fs.readFileSync('data/1111','utf8');
  console.log(text);
} catch(e) {
  console.log(e);
}
