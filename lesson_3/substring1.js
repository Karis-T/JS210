/*
Write a function that returns a substring of a string based on a starting index and length.

- The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.

- The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.
*/

function substr(str, start, length) {
  if (start < 0) start += str.length;
  if (length > str.length) length = str.length - start;

  let substr = '';

  for ( let counter = 0; counter < length; counter += 1) {
    substr += str[start];
    start += 1;
  }

  return console.log(substr);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""