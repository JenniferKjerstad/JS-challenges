var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Farenheight: ');
var degreesNum = Number(degrees);
var degreesCel = degreesNum / 1.8 - 32;
console.log('It is ' + degreesCel + ' degrees Celsius!'); 