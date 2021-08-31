// Local vs Global Part 1
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar); // logs: 'This is global' because JS uses lexical scoping - we determine variable scope based on the structure of the program. Functions in JavaScript create a new scopes thus the local scoped myVar variable cannot be accessed from outside the function. It is scoped within the confines of someFunction() so when console.log(myVar) logs 'this is global' it can only see the globally scoped myVar.

// local vs global part 2
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction(); // logs: 'This is local'. Now that console.log is placed inside the functions scope, it can only see the locally scoped variable myVar. This is because there is a heirarchy of scopes. JS will try to locate a variable from bottom top top and use the first one that matches the name. This local scoped variable shadows or hides variables with the same name in a higher scope

// Local vs Global Part 3
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar); //logs This is local. This is possible because code within an inner scope can access any variable in any surrounding scopes including the global scope. In this scenario we have no declaration for the myVar variable in SomeFunction(). Here JS will look for a declaration with the same name in its surrounding scopes. Since it finds one on line 1, line 4 is considered reassignment when we invoke the someFunction() on line 7. Thus when we invoke console.log(myVar) on line 8 it will log This is local

// Variable Lookup
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction(); // logs 'This is global'. JS will first try to find a variable with the same name in the current local scope of SomeFunction(). Once it does not find it there JS will then continue to look to the next outerscope until it can find one with the same name. It finds it in the global scope thus This is global output via console.log(myVar). If it reaches the global scope and then name isn't found there it will throw a ReferenceError in most cases but not always.

// Variable Scope
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar); // logs 'This is global'. When there is no existing declaraction in outer scopes for a variable but it contains an assigned value, JS creates it as a global variable. Here when we invoke the someFunction() method on line 5 and since theres no existing myVar declaration it becomes a global variable. this is why it is accessible from the global scope when we invoke console.log(myVar);

// Arguments Part 1
let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a); // logs 7. The value assigned to variable a is 7 and it is a primitive value. Primitive values in JavaScript are immutable. Therefore, passing the variable a that is assigned a primitive value as an argument to a function, and consequently using it on any operation in the body of the function does not have any effect on the value assigned to a.

// Arguments Part 2
let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); // logs 7. Function Parameter variables are not dependent on the values in the outer scope. MyValue's a is scoped at the function level and shadows the outer variable a. This is why no change is apparent

// Variable Declarations
console.log(a);

var a = 1; //logs undefined. Because JS utilises lexical scoping rules and relies on the structure of the program for execution, console.log(a) tries to log a value that hasn't been initialized. However var declaractions have the appearance of being "hoisted" to the top of the global scope (function scope) leaving the value assignment where it was on line 3. JS gives it the initial value of undefined which is why console.log(a) logs undefined.

// Function Declarations
logValue();

function logValue() {
  console.log('Hello, world!');
}//logs Hello World!. Function declaractions and the entire function itself during creation phase are hoisted to the top of the scope (in this case global scope) and therefore can be invoked before they are lexically declared


// further explanation
var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue); // logs function because functions are hoisted before variables

//arguments part 3
let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // logs [1, 2, 10]. When variable a is passed in as an argmuent to the myValue function, the same object that a is pointing to [1,2,3], is now also referenced by parameter b. Here we are setting a value to index 2 of the same object and incrementing 3 by 7, which evaluates to 10. Unlike primitives, objects such as arrays have the ability to be mutated.
