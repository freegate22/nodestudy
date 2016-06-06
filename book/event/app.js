var rint = require('./rint');

rint.timer.on('tick', function(){
  console.log('이벤트 실행');
});
