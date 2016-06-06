// var onUncaughtException = function(error){
//   console.log("예외 예외");
//
//   process.removeListener('uncaughtException', onUncaughtException);
// };
//
// process.on('uncaughtException', onUncaughtException);
//
// setInterval(function(){
//   error.error.error('^_^');
// }, 2000);


////////////////
// process.once('uncaughtException',function(error){
//   console.log("예외 예외");
// });
//
// setInterval(function(){
//   error.error.error('^_^');
// }, 2000);

process.on('exit',function(){
  console.log("bye bye");
});

process.exit();

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log("실행중..");
