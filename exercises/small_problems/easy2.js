// Daily double

function crunch(str) {
  let newStr = ''
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === str[idx - 1]) continue;
    newStr += str[idx];
  }
  return newStr;
}

// Bannerizer

function strMultiplier(length, str) {
  let newStr = ''
  for (let counter = 1; counter <= length; counter += 1) newStr += str;
  return newStr;
}

function logInBox(str) {
  let length = str.length;
  console.log(`+-${strMultiplier(length, '-')}-+`);
  console.log(`| ${strMultiplier(length, ' ')} |`);
  console.log(`| ${str} |`);
  console.log(`| ${strMultiplier(length, ' ')} |`);
  console.log(`+-${strMultiplier(length, '-')}-+`);
}

// Stringy Strings

function stringy(num) {
  let str = '';
  for(let i = 0; i < num; i += 1){
    str += (str.length % 2 === 0 ? '1' : '0');
  }
  return str;
}

// Fibonacci Number Location by Length

function findFibonacciIndexByLength(num) {
  let [fib1, fib2] = [1n, 1n];

  for (let counter = 2n; ; counter += 1n) {
    if (BigInt(String(fib2).length) === num) return counter;
    let sum = fib1 + fib2;
    [fib1, fib2] = [fib2, sum];
  }

}

// Right Triangles

function strMultiplier(length, str) {
  let newStr = ''
  for (let counter = 1; counter <= length; counter += 1) newStr += str;
  return newStr;
}

function triangle(num) {
  let space = num - 1;
  for (let star = 1; star <= num; star += 1) {
    console.log(`${strMultiplier(space, ' ')}${strMultiplier(star, '*')}`);
    space -= 1;
  }
}

// Madlibs

let noun = prompt('Enter a noun:');
let verb = prompt('Enter a verb:');
let adjective = prompt('Enter an adjective:');
let adverb = prompt('Enter an adverb:');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);

// Double Doubles

function twice(num) {
  let strNum = String(num);
  if (strNum.length % 2 === 1) return console.log(num * 2);
  let [firstHalf, secondHalf] = ['', '']

  for (let idx = 0; idx < strNum.length; idx += 1) {
    if (idx < strNum.length / 2) firstHalf += strNum[idx];
    else secondHalf += strNum[idx];
  }

  return console.log(firstHalf === secondHalf ? num : num * 2);
}

// Grade Book

function getGrade(num1, num2, num3) {
  let score = (num1 + num2 + num3) / 3;

  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}


// Clean Up the Words

function cleanUp(str) {
  return str.replace(/\W+/g, ' ');
}

function cleanUp(str) {
  let newStr = '';

  for (idx = 0; idx < str.length; idx += 1) {
    if (str[idx] >= 'a' && str[idx] <= 'z') newStr += str[idx];
    else if (str[idx + 1] >= 'a' && str[idx + 1] <= 'z') newStr += ' ';
  }

  return newStr;
}


// What century is that

function century(year) {
  let cent = (String(Math.ceil(year/100)));

  if (cent.endsWith('1') && !cent.endsWith('11')) cent += 'st';
  else if (cent.endsWith('2') && !cent.endsWith('12')) cent += 'nd';
  else if (cent.endsWith('3') && !cent.endsWith('13')) cent += 'rd';
  else cent += 'th';

  return console.log(cent);
}