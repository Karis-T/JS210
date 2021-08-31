// 1
const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

// above results in a SyntaxError due to the trailing white space after the last escape "\". Even if we remove it this is not the expected output because "\" escapes the newline character but includes all whitespace that was used to align the code. The program sees all the code as one continuous line (lines 2-6).
// A better way to handle this is to use concatentation or the "+" operator which will omit the spacing, (you will need to inlcude quotation marks for every string on a new line though). const also is used for constants which should use upper snake casing

// 2
const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}
/* The above should log to the console "Hello" "World" "!" because myBoolean is assigned to the boolean true which will therefore execute the block on line 20 outputting the string 'Hello'. The next if statement will be skipped because myString evaluates to true but we've prefixed it with the ! operator which will convert it into its opposite boolean value - false. myArray although an empty array evaluates to true. In the conditional the double !! operator converts myArray into its boolean equivalent - true - and therefore will execute its block outputting "World". The last conditional will also execute its block because we have at least 1 value that will evaluate to true - myArray - to which JS will translate it into its boolean eqivalent - true, thus outputting "!" to the console.*/

// 3
if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

/* There are 5 possible pathways:
1. condition1 --> condition2
2. condition1 --> else
3. else
4. else --> condition4
5. else --> condition4 --> condition5 */

// 4
const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);

/* The code logs the string "Bob Bob" to the console. The reason here is because all primitives - including strings - are immutable. What this means is that when we invoke the toUpperCase method on name it will return a new string "BOB" but since this string is not reassigned back to name it will not output the change on the following line.
*/

// 5

let firstNumber = Number(prompt('Enter the first number:'));
let secondNumber = Number(prompt('Enter the second number:'));

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
// 6

const readlineSync = require('readline-sync');
console.log('Please enter a phrase');
let phrase = readlineSync.prompt();
console.log(`There are ${phrase.length} characters in "${phrase}".`);

// 7

const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(str) {
  let numArr = str.split('').map(key => DIGITS[key]);
  let num = 0;
  numArr.forEach(ele => num = num * 10 + ele);
  return num;
}


// 8
function stringToSignedInteger(str) {
  let numStr = (DIGITS[str[0]] ? str : str.slice(1,str.length));
  let num = stringToInteger(numStr);
  return (str[0] === '-' ? num * -1 : num);
}


// 9
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  if (num === 0) return '0';
  let numStr = '';
  while (num > 0) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    numStr = DIGITS[remainder] + numStr;
  }
  return numStr;
}

// 10

function signedIntegerToString(num) {
  if (num === 0) return '0';
  let strNum = integerToString(Math.abs(num));
  return (num < 0 ? '-'+ strNum : '+'+ strNum);
}