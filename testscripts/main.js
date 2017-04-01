var fs = require("fs");

var data = fs.readFileSync('testscripts/input.txt');

console.log(data.toString());
console.log("Program Ended");