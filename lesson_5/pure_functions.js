// 1
const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); //mutation
  console.log(`popped ${value} from the array`); //output
  return value + bar + baz;
}

foo(qux);

// The function modifies the array passed as an argument.
// The function writes something to the console.

// 2

// impure function - logs to console
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// pure function
function sum(a, b) {
  a + b;
}

// pure function
function sum(a, b) {
  return a + b;
}

// impure function - accesses  random number generator
function sum(a, b) {
  return a + b + Math.random();
}

// pure function
function sum(a, b) {
  return 3.1415;
}