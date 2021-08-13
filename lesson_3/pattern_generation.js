/*
Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. For example, if nStars is 7, log the following pattern:

console output
1****** 1 + 6 stars
12***** 12 + 5 stars
123**** 123 + 4 stars
1234*** 1234 + 3 stars
12345**
123456*
1234567
*/

function generatePattern(n) {
  let strNum = '';
  let stars = n - 1;

  for (let counter = 1; counter <= n; counter += 1) {
    console.log((strNum += counter) + '*'.repeat(stars));
    stars -= 1;
  }
}

generatePattern(7);

