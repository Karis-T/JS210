// 1
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a); // logs undefined
}

say(); // var declarations are hoisted to the top of the function (has function scope) and is declared with the initial value of undefined. Because the block of the if statement is never executed it will never initialize the string 'hello from inside the block'

// 2

function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a); // ReferenceError: a is not defined
}

say(); // let variables have block scope which means it isn't visible outside the block on line 3

// 3

function hello() {
  a = 'hello'; // var a is reassigned to 'hello'
  console.log(a); // logs hello

  if (false) {
    var a = 'hello again';  // var has function scope, declaration is hoisted undefined
  }
}

hello();
console.log(a); // ReferenceError a is not defined (var a has function scope)

// 4

function hello() {
  a = 'hello'; // global variable available everywhere
  console.log(a); // logs hello

  if (false) {
    let a = 'hello again'; // locally scoped a not available outside the if statement block
  }
}

hello();
console.log(a); // logs hello

// 5
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a); // logs 4
/* JavaScript hoists the variable declaration on line 4 to the top of the global scope. Since a global variable named a exists, the hoist has no direct effect on operation. Inside the loop, a gets assigned five times; at the end of the loop, it has a value of 4. Thus, line 7 logs 4. */

// 6
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index; // local variable a has block scope and shadowed global scoped a
}

console.log(a); // logs hello

/* In this code, we have two different a variables: one in the outer scope, and one in the inner scope. The declaration on line 4 creates and initializes the inner-scoped variable. On line 7, we output the value of the a variable declared on line 1. That variable still has the value 'hello', so line 7 outputs hello. */

// 7
let a = 1; // global scope variable

function foo() { // function hoisted to the top
  a = 2; // reassigned to 2
  let bar = function() { // function expression
    a = 3; // reassigned to 3
    return 4;
  };

  return bar(); // returns 4
}

console.log(foo()); // logs 4
console.log(a); // logs 3

/* The foo function returns the return value of the bar function, which is 4. During this process, the code changes the global variable twice. Thus, the final value is 3. */

// 8
var a = 'global'; // global scope variable

function checkScope() {
  var a = 'local'; // function scope variable
  const nested = function() { // anonymous function
    var a = 'nested'; // a assigned to nested declaration hoisted function scoped shadowed
    let superNested = () => { // arrow function
      a = 'superNested';  // reassigned to super nested
      return a; // returns super nested
    };

    return superNested(); // returns 'superNested'
  };

  return nested(); // returns 'superNested'
}

console.log(checkScope()); // logs superNested
console.log(a);   // global

/* With super-nested functions, you must chase through the functions starting with the function invocations. Here, we start with line 18, the first function invocation. From there, line 4 goes to line 5, line 5 to line 15, and so on through lines 6, 7, 12, 8, and 9. Line 9 obviously returns 'superNested', so line 12 must return 'superNested' too. This takes us back to line 15 which also returns 'superNested'. Finally, line 18 receives the final return value ('superNested') and logs it. During this entire process, we never modify the global a, so it still has the value global. */

// 9
let a = 'outer';
let b = 'outer';

console.log(a); // logs outer
console.log(b); // logs outer
setScope(a); // passing in a as an argument
console.log(a); // logs outer
console.log(b); // logs inner

function setScope(foo) { // hoists above let declarations and variables
  foo = 'inner'; // local variable isn't returned
  b = 'inner'; // reassignment takes place here
}

/* Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument. */

// 10
let total = 50;
let increment = 15;

function incrementBy(increment) { // increment is a local parameter or variable with same name
  total += increment; // reassignment adds 10 to 50
}

console.log(total); // logs 50
incrementBy(10);
console.log(total); // logs 60
console.log(increment); // logs 15

/* Though our parameter has the same name as the variable declared on line 2, it is not the same variable. Function parameters are locally scoped variables, even when they have the same names as variables defined in the outer scope. */

// 11
let a = 'outer';

console.log(a); // outer
setScope(); // TypeError setScope is not a function
console.log(a); // isn't logged due to error

var setScope = function () { // var decclaration hoisted with initial value of undefined
  a = 'inner';
};

/* Line 6 tries to call setScope as a function. However, setScope is just a declared global variable whose value is undefined. Note that unlike function declarations, with function expressions using var, the name of the function is hoisted, but not the function body.*/
