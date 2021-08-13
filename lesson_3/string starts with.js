/*
Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

function startsWith(string, searchString) {
  // …
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

take str and iterate from idx 0 onwards
concatenate it to a substr and keep comparing it
if its a match return true

otherwise its false
guard clause if search string is empty return true

*/

function startsWith(str, searchStr) {
  let substr = ''
  for (let idx = 0; idx < str.length; idx += 1) {
    if (substr === searchStr) return console.log(true);
    substr += str[idx];
  }
  return console.log(false);
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false