// Double Char 1

function repeater(str) {
  return str.split('').map(ele => ele + ele).join('');
}

// Double Char 2

function doubleConsonants(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').map(ele => vowels.includes(ele) ? ele : ele + ele).join('');
}

// Reverse Number

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

// Get Middle Charcter

function centerOf(str) {
  let mid = Math.floor(str.length / 2)
  return (str.length % 2 === 1 ? str[mid] : str.slice(mid - 1, mid + 1));
}


// Always Return Negative

let negative = num => -(Math.abs(num));


// Counting Up

function sequence(num) {
  let arr = [];
  for (let i = 1; i <= num; i += 1) arr.push(i);
  return arr;
}


// Name Swapping
let swapName = str => str.split(' ').reverse().join(', ');

// Sequence Count
function sequence(count, start) {
  let arr = [];
  for (let i = 1; i <= count; i += 1) arr.push(i * start);
  return arr;
}

// reverse it 1

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

// reverse it 2
let reverseWords = str => str.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ')