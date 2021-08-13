/*

Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.
You may assume that the input is always a non-negative integer.

A prime number is only divisible by 1 and itself

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false

*/

function isPrime(n) {
  if (n <= 1) return console.log(false);
  for (let factor = 2; factor < n; factor += 1) {
    if (n % factor === 0) return console.log(false);
  }
  return console.log(true);
}

isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false