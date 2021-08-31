// Odd Numbers

for (let counter = 1; counter < 100; counter += 1) console.log(counter);

// Even Numbers

for (let counter = 2; counter < 100; counter += 2) console.log(counter);

// How Big is the Room

const FEET_CONVERSION = 10.7639;
let length = Number(prompt('Enter the length of the room in meters:'));
let width = Number(prompt('Enter the width of the room in meters:'));
let area = width * length;

alert(`The area of the room is ${area} square meters (${area * FEET_CONVERSION} square feet)`);

// Tip Calculator

let bill = Number(prompt('What is the bill?'));
let tipPercentage = Number(prompt('What is the tip percentage?'));

let tip = bill * (tipPercentage / 100);

console.log(`The tip is \$${tip.toFixed(2)}`);
console.log(`The total is \$${(tip + bill).toFixed(2)}`);

// sum or product of consecutive integers

let num = Number(prompt('Please enter an integer greater than 0:'));
let answer = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (answer === 's') {
  let sum = num;
  for (let counter = 1; counter < num; counter += 1) sum += counter;
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else {
  let product = num;
  for (let counter = 1; counter < num; counter += 1) product *= counter;
  console.log(`The product of the integers between 1 and ${num} is ${product}.`);
}

// Short Long Short

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) [str1, str2] = [str2, str1];
  return str1 + str2 + str1;
}

// Leap Years Part 1

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) return true;
  if (year % 400 === 0 && year % 100 === 0) return true;
  return false;
}

// Leap Years Part 2

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) return true;
  if (year % 4 === 0 && year % 100 !== 0) return true;
  if (year % 400 === 0 && year % 100 === 0) return true;
  return false;
}

// Multiples of 3 and 5

function multisum(num) {
  let sum = 0;
  for (let counter = 1; counter <= num; counter += 1) {
    if (counter % 3 === 0) sum += counter;
    else if (counter % 5 === 0) sum += counter;
  }
  return sum;
}

// UTF-16 Value

function utf16Value(str) {
  let utfSum = 0;
  
  for (let idx = 0; idx < str.length; idx += 1) {
    utfSum += str.charCodeAt(idx);
  }

  return utfSum;
}