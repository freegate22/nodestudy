var url = require('url');

var parsedObject = url.parse('http://www.hanb.co.kr/trackback?isbn=978-89-7914-874-9');
console.log(parsedObject);
console.log(parsedObject.host);

var querystring = require('querystring');
console.log(querystring.parse(parsedObject.query));
