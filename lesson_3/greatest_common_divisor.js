/*
Create a function that computes the Greatest Common Divisor of two positive integers.

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

*/

function gcd(num1, num2) {
  for (let factor = num1; factor >= 1; factor -= 1) {
    if (num1 % factor === 0 && num2 % factor === 0) return console.log(factor);
  }
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1