# Defining Functions

## Function Declarations

```js
function hello() {
  return 'hello world!';
}

console.log(typeof hello);    // function
```

Things to know about Function Declarations:

- they're also known as *function statements*
- defines a variable whoes type is function. 

- It doesn't require assignment to a variable
- The value of the function variable is the function itself
- Function variables obey general scoping rules and are used exactly like other JS variables 

**RULE:** A function declaration doesn't only create a function, but also a variable with the same name and then assigns the function to that variable. For every function a variable is initialized

**RULE:** function declaractions must ALWAYS have a name (they can't be anonymous) 

**RULE:** similar to variable declarations `let` and `const`, function declarations must begin with `function`

```js
let stringVar = 'string value';
let numberVar = 42;                  // number value

function functionVar() {
  return 'function reference';
}

console.log(typeof stringVar);       // string
console.log(typeof numberVar);       // number
console.log(typeof functionVar);     // function

// Reassignment works as expected:
stringVar   = functionVar;           // `stringVar` now references a function
functionVar = 'string value';        // `functionVar` now contains a string

console.log(typeof stringVar);       // function
console.log(typeof functionVar);     // string
```

- the above declares 3 variables: the first 2 use the `let` keyword (variable declaration), the 3rd uses function declaration. Even though they were created in different ways, all 3 are just regular JS variables. They differ to what they contain or reference (with a subtle difference)

## Function Expressions

**definition:** A function expression defines a function as part of a larger expression syntax (usually variable assignment)

```js
const hello = function () { 
  return 'hello';
};

console.log(typeof hello);    // function
console.log(hello());         // hello
```

- here we define an anonymous function (no name) and assign it to the variable `hello`. We then use the variable `hello` to invoke the function

```js
let foo = function () {
  return function () {   // function expression as return value
    return 1;
  };
};

let bar = foo();         // bar is assigned to the returned function

bar();                   // 1
```

- Here when we invoke the anonymous function assigned to `foo` it returns another anonymous function which is assigned to `bar` on line 7
- We can then call `bar` to get the return value `1` of the anonymous function 

**RULE:** refer to the above functions as "anonymous expressions" instead of "the function `foo`". It is much more precise. "Anonymous" can be left out unless its relevant

## Named Function Expressions

```js
let hello = function foo() {
  console.log(typeof foo);  
};

hello();										 // logs: function
foo();                       // Uncaught ReferenceError: foo is not defined
```

**RULE:** named function expressions are only available inside the function (it can only be used from within the functions local scope)

Named expressions:

- are useful for debugging (debugger shows functions name in the call stack)
- Useful for recursive functions

**RULE:** if a statement begins with the `function` keyword, its a function declaration, otherwise its a function expression.

```js
function foo() {
  console.log('function declaration');
}

(function bar() {
  console.log('function expression');
});

foo();    // function declaration
bar();    // Uncaught ReferenceError: bar is not defined
```

## Arrow Functions

**definition:** introduced in ES6, arrow functions can be thought of as a shorthand way to write a function expression

```js
const multiply = (a, b) => {
  return a * b;
}; // multi-line arrow function
```

```js
const multiply = (a, b) => a * b; // single line arrow function can omit braces & return
```

**RULE:** arrow functions are mostly used for callback functions (on a single line) where the function is passed to some other function (or method)

```js
[1, 2, 3].map(function (element) {
  return 2 * element;
}); 
//with arrow function as a callback function
[1, 2, 3].map(element => 2 * element);
```

**RULE:** arrow functions inherit the "execuion context" from the surrounding code

## Style Notes

- use arrow functions for callbacks
- use function declarations or function expressions for other functions (choose one or the other)
- naming your function expressions are better for debugging purposes and helps clarify the intent of the function
