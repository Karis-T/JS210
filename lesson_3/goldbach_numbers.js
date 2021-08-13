function isPrime(n) {
  if (n <= 1) return false;
  for (let factor = 2; factor < n; factor += 1) {
    if (n % factor === 0) return false;
  }
  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) return console.log(null);

  let num1 = expectedSum;

  for (let num2 = 1; num2 < expectedSum / 2; num2 += 1) {
    num1 -= 1;
    if (isPrime(num1) && isPrime(num2)) console.log(num2, num1);
  }

};

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53