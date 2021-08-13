/*
Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

fizzbuzz();

requirements:
- multiples of 3 Fizz
- multiples of 5 Buzz
- multiples of 3 & 5 FizzBuzz
- otherwise log the number

// console output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
// … rest of output omitted for brevity

*/
function fizzbuzz() {
  for (let counter = 1; counter <= 100; counter += 1) {
    if (counter % 3 === 0 && counter % 5 === 0) console.log("FizzBuzz");
    else if (counter % 3 === 0) console.log("Fizz");
    else if (counter % 5 === 0) console.log("Buzz");
    else console.log(counter);
  }
}

fizzbuzz();