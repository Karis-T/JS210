/* Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

Understanding the problem:
inputs: positive integer (n)
outputs: log all numbers from 1 to n on separate lines

Requirements:
- function takes 1 positive integer as an argument
- must log all odd numbers from 1 to n inclusive
- all numbers must be logged on separate lines
- what if the number is even?

Mental model: Write a function that takes a positive integer(n) and logs all odd numbers from 1 to n inclusive.

Examples:
logOddNumbers(19);

// output on console
1 +2
3 +2
5
7
9
11
13
15
17
19

- always begin with 1
- if even must include that number (loop while counter <= n)

Data Structure:
- for loop
- integers
- counter variable

Algorithm:
Define function logOddNumbers that takes one parameter n
    initialize integer 1, start
    initialize integer 2, counter
loop for counter <= n
    output n to the console
    increment n by counter
*/

function logOddNumbers(n) {
  for (let counter = 1; counter <= n; counter += 2) {
    console.log(counter);
  }
}

logOddNumbers(20);