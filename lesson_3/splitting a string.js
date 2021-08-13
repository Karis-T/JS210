/*
Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console, as shown below:

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello


collect substring
if you hit the delimiter
 log the current substring
 set substring to ''
 increase the counter

*/

function splitString(str, sep) {
 if (sep === undefined) return console.log("ERROR: No delimiter");
 let substr = '';

 for (let idx = 0; idx < str.length; idx += 1) {

  if (str[idx] === sep) {
    console.log(substr);
    substr = '';
    continue;
  } else if (sep === '') {
    console.log(str[idx]);
    continue;
  }

  substr += str[idx];
 }

 if (substr) console.log(substr);
}

splitString('hello');


splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o