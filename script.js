//STRING METHODS

//1. replace();
var str = "Hello Javascript";
str = str.replace('a', 'A');
console.log(str); //OUTPUT: Hello JAvascript

//2. replaceAll();
var str = "Hello Javascript";
str = str.replaceAll('a', 'A');
console.log(str); //OUTPUT: Hello JAvAscript;

//3.Charat()
var str = "Hello Javascript";
str = str.charAt(45);
console.log(str);

//4. at()
var str = "Hello Javascript";
console.log(str.at(33));

//5. concat()
var str = "Hello Javascript";
console.log(str.concat(', How do you do??'));

//6. indexOf()
var str = "Hello Javascript";
console.log(str.indexOf('a'));
console.log(str.indexOf('a',9));

//7. lastIndexOf()
var str = "Hello Javascript";
console.log(str.lastIndexOf('a'));
console.log(str.lastIndexOf('a',9));

//8. length()
var str = "Hello World";
console.log(str.length);

//9 .padStrat
var str = '5';
str= str.padStart(5,'2');
console.log(str);

//10. padEnd
var str = "5";
str= str.padEnd(5,'2');
console.log(str);

//11. toLowerCase()
var str = "Hello Javascript";
console.log(str.toLowerCase());

//12. toUpperCase()
var str = "Hello Javascript";
console.log(str.toUpperCase());

//13. startsWith()
var str = "Hello Javascript";
console.log(str.startsWith('H'));

//14. endsWith()
var str = "Hello Javascript";
console.log(str.endsWith('h'));

//15. trim()
var str = "                Hello Javascript"             ;
console.log(str);

//16 trimRight()
var str = "Hello Javascript             ";
console.log(str.trimRight());

//17 trimLeft()
var str = "               Hello Javascript";
console.log(str.trimLeft());

//18 trimStart()
var str = "             Hello Javascript";
console.log(str.trimStart());

//19 trimEnd()
var str = "Hello Javascript               ";
console.log(str.trimEnd());

//20 subString
var str = "Hello Javascript";
var newsubStr=str.substring(1,4);
console.log(newsubStr);

//21 substr()
var str = "Hello Javascript";
var newSubStr = str.substr(17,22)
console.log(newSubStr);

//22 split()
var str = "Hello Javascript";
console.log(str.split());
console.log(str.split(' '));
console.log(str.split('a'));

//23 slice();
var str = "Hello Javascript";
var newStrr = str.slice(0,5);
var newStrr1 = str.slice(-6,-1);
var newStrr2 = str.slice(-6,1);
console.log(newStrr);
console.log(newStrr1);
console.log(newStrr2);

//24 search()
var str = 'Hello Javascript';
console.log(str.search('Hello'));
console.log(str.search('Pavan'));