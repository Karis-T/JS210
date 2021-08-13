/*
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""


'  abc  ' 7 length
idx 0 skip
idx 1 skip
idx 2 onwards keep

6 skip
5 skip
4 keep

idx 2 to idx 4

Algorithm:
Problem 1: find the first index of a non-space character left to right
  - iterate until a non-space character is found and save the index

Problem2: find the first index of a non-space character right to left
- iterate until a non-space character is found and save the index

select the starting index and add characters until the finishing index

*/

function trim(str) {
  let idx1 = 0;
  while (str[idx1] === ' ') idx1 += 1;

  let idx2 = str.length - 1;
  while (str[idx2] === ' ') idx2 -= 1;

  let stripString = '';
  for ( ; idx1 <= idx2; idx1 += 1) stripString += str[idx1];

  return stripString;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
