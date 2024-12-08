//STRING METHODS

//1. replace();
var str = "Hello Javascript";
str = str.replace('a', 'A');
console.log(str); //OUTPUT: Hello JAvascript

//2. replaceAll();
var str = "Hello Javascript";
str = str.replaceAll('a', 'A');
console.log(str); //OUTPUT: Hello JAvAscript;

//Charat()
var str = "Hello Javascript";
str = str.charAt(45);
console.log(str);

//at()
var str = "Hello Javascript";
console.log(str.at(33));