// How Old is Teddy
function getTeddyAge() {
  let age = Math.floor(Math.random() * (200 - 20 + 1) + 20);
  console.log(`Teddy is ${age} years old!`)
}

getTeddyAge();


// Searching 101

  let arr = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  let newArr = [];
  let str = '';
  let num = '';

  for (let ele of arr) {
    num = Number(prompt(`Enter the ${ele} number:`));
    if (ele === 'last') {
      str = (newArr.includes(num) ? 'appears' : 'does not appear');
    } else newArr.push(num);
  }

  console.log(`The number ${num} ${str} in [${newArr.join(', ')}].`)


// When Will I retire?

let age = Number(prompt('What is your age?'));
let retire = Number(prompt('What age would you like to retire?'));

let year = new Date().getFullYear();

console.log(`It's ${year}, You will retire in ${year + retire} You only have ${retire - age} years of work to go!`);

// Is Palindromic

function isRealPalindrome(str) {
  let editStr = str.toLowerCase().replace(/\W/g, '');
  return isPalindrome(editStr);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('')
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

// Running Totals
function runningTotal(arr) {
  let newArr = []
  let acc = 0;
  for (ele of arr) newArr.push(acc += ele);
  return newArr;
}

function runningTotal(arr) {
  let accArr = [];

   const reducer = (acc, ele) => {
     accArr.push(acc + ele);
     return acc + ele;
   }

  arr.reduce(reducer, 0);
  return accArr;
}

function runningTotal(array) {
  let total = 0;
  return array.map(num => total += num);
}

// Letter Swap

function swap(str) {
  return str.split(' ').map( word => {
    if (word.length < 2) return word;
    return word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
  }).join(' ');
}

function swap(sentence) {
  return sentence.replace(/\b(\w)(\w*)(\w)\b/g, '$3$2$1');
}


// Letter Counter

function wordSizes(str) {
  if (str === '') return {};
  str = str.replace(/[^\s\w]/g, '');
  let obj = {};
  str.split(' ').forEach(word => obj[word.length] ? obj[word.length] += 1 : obj[word.length] = 1);
  return obj;
}