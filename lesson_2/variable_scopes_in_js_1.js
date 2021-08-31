// 1
let a = 'outer';  // global scope declaration let a hoisted as unset then initialzed to a

function testScope() { // has function scope function testScope hoisted to the top
  let a = 'inner'; // shadowed variable cannot see global scoped variable
  console.log(a);
}

console.log(a); // logs outer
testScope();  // when invoked logs inner
console.log(a); // logs outer

/* Line 8 is the first invocation of console.log; here, a is the global variable a from line 1. Line 9 calls the testScope function; in the function, a is a local variable on line 4, so line 5 logs inner. After testScope returns, the a on line 10 is the global variable on line 1 again; therefore, it logs outer */

// 2

let a = 'outer';  // globally scoped variable declaration hoisted unset then initialized to outer

function testScope() {
  a = 'inner';  // reassignment, local scopes can see globally scoped variable
  console.log(a);
}

console.log(a); // logs outer
testScope();  // logs inner
console.log(a); //  logs inner

/* On line 4, a is the global variable from line 1. The assignment assigns inner to the variable. Thus, line 10 logs inner instead of outer. */

// 3
let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv'; // reassignment local scopes can see all surrounding scopes
  }

  console.log(basket);  // logs empty

  let shop2 = function() {
    basket = 'computer';   // reassignment local scopes can see surrounding scopes
  };

  const shop3 = () => {
    let basket = 'play station'; // local variable defined cannot see global scope
    console.log(basket);  // logs play station
  };

  shop1();  // no output (returns undefined) reassignment of basket to tv
  shop2();  // no output (returns undefined) reassignment of basket to computer
  shop3();  // logs play station (variable shadowing)

  console.log(basket);  // logs computer (the last reassignment that occured)
}

goShopping(); // empty play station computer

/* The first log operation occurs on line 8; here, basket still has its original value, empty. The function call on line 19 changes basket to tv, and the call on line 20 changes it to computer. The function call on line 21 does not alter the value of the basket global, but defines and sets a local variable with the same name. It then logs play station. Upon returning from shop3, the local variable goes away, so line 23 logs the value of the global basket: computer. */

// 4
function hello() {
  a = 'hi';
}

hello();  // no output, but hi is initialized to a. Since `a` has no declaration it becomes a globally scoped variable and a property of the global object (available everywhere in the program)
console.log(a); // logs hi

/* Here, we call the hello function, so we assign a value of hi to the variable. The variable is a global variable since we don't declare it with let, const, var, or function. Thus, line 6 logs hi. */

// 5
function hello() {
  let a = 'hello';  // declares a locally scoped variable with the initializer 'hello'
}

hello();  // no output
console.log(a); // not available outside the function ReferenceError a is not defined

/* Since we don't define a global variable a, line 6 does not find any variables named a; thus, it raises a ReferenceError */

// 6
console.log(a);

var a = 1; // globally (function) scoped variable a is declared and hoisted to the top of the program with the initial value of undefined. Since assignment hasn't occured yet it will log undefined to the console

/*
After hoisting, this program is equivalent to:

var a;
console.log(a);
a = 1;

Line 1 in the original code logs undefined since a is not assigned a value until line 3.
*/


// 7
console.log(a);

let a = 1; // ReferenceError Cannot access 'a' before initialization - let variables are hoisted to the top of the program and are in an "unset" state in a Temporal Dead Zone. Since we try to log the value of a before it has been initialized an error is thrown

/* After hoisting, JavaScript can tell that there is an a variable, but that variable lives in the Temporal Dead Zone; it is unset and cannot be accessed. */

// 8
console.log(a); // ReferenceError: a is not defined

function hello() {
  a = 1;
}

/*
After hoisting, this program is equivalent to:

function hello() {
  a = 1;
}

console.log(a);

since hello was never called we dont assign 1 to a. Since we also don't declare a anywhere, line 5 produces a ReferenceError.
*/
