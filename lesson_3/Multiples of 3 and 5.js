/*
Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

Understanding the problem:
input: none
ouput: intgers from 1 to 100 that are multiples of 3 OR 5

Requirements:
- write a function that logs integers from 1 to 100
- integers must be either multiples of either 3 OR 5
- if number is divisible by both 3 and 5 append an ! to the number
- integers must be string format

Mental Model:

Example:

multiplesOfThreeAndFive();

output on console
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
… remainder of output omitted for brevity

Data Structure:

Algorithm:


*/

function multiplesOfThreeAndFive() {
  for (let counter = 1; counter <= 100; counter += 1) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log(String(counter) + '!');
      continue;
    } else if (counter % 3 === 0 || counter % 5 === 0) {
      console.log(String(counter));
    }
  }
}

multiplesOfThreeAndFive();
