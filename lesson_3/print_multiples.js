/*
Write a function logMultiples that takes one argument number. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.

You may assume that number is an integer between 0 and 100.

Understanding the problem:
input: single integer between 0 and 100
output: all odd multiples of integer between 0 and 100

Example:

logMultiples(17);
// output (5x, 3x and 1x)
85 5 x 17
51 3 x 17
17 1 X 17

logMultiples(21);
// output (3x and 1x)
63
21

*/

function logMultiples(n) {
  for (let factor = 99; factor >= 1; factor -= 2) {
    if (factor * n <= 100) console.log(factor * n);
  }

}

logMultiples(21);