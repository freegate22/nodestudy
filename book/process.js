console.log('- process.env:', process.env);
console.log('- process.version:', process.version);
console.log('- process.versions:', process.versions);
console.log('- process.arch:', process.arch);
console.log('- process.platform:', process.platform);

console.log('- process.memoryUsage():', process.memoryUsage());
console.log('- process.uptime():', process.uptime());



//////////////////////////////

// process.argv.forEach(function (item, index){
//   console.log(index + ' : ' + typeof (item) + ' : ', item);
//
//   if( item == '--exit'){
//     var exitTime = Number(process.argv[index + 1]);
//     setTimeout(function(){
//       process.exit();
//     }, exitTime);
//   }
// });
