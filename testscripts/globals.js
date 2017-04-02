// Let's try to print the value of __filename
console.log( __filename );

// Let's try to print the value of __dirname
console.log( __dirname );

function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var timer = setTimeout(printHello, 2000);

clearTimeout(timer);