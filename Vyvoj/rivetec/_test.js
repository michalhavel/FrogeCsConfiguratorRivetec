
var rdb = require('./rivetDatabase');


//console.log(rdb.hello())
var rivetsJsonValue = rdb.getRivets(function(arg){console.log(arg)});
console.log('getRivets test: ' + rivetsJsonValue);
// console.log("asdas")
