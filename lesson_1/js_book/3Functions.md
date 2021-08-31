# Functions

functions let you extract code and run it as a separate unit. This helps us to reduce duplication in our code if we need to run the code multiple times.

We can make changes in one area of our program since we've extracted the logic in one place.

## Using Functions

to define a function we must use the reserved work `function`, followed by the name you want to call it and then a pair of parentheses `()`. There after the function body is enclosed in a set of curly braces `{}` (similar to that of blocks):

```js
function say(words) {
 console.log(words + "!"); 
}

say("hello");			//outputs: hello!
```

- Just like ruby, When we call `say("hello")`, we pass the string `"hello"` as an argument which is becomes associated with the `words` parameter. The code within the function definition then executes the `words` local variable referencing `"hello"`.

**arguments** let you pass data from outside the functions scope into the function so it can access the data. If the function definition doesn't need access to any outside data, arguments are not required. 

**Parameters** are local variables as they are defined locally within the body of a function. arguments are stored inside parameters that function as placeholders. parameters are initialized from the argument that was passed to the function invocation.

**RULE:** Function name and parameters are considered to be variable names in JavaScript. 

**RULE:** parameters inside the body of a function are also called arguments:

```js
function add(left, right) { // left & right are parameters
  let sum = left + right;   // left & right are arguments
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
```

## Return Values

#### Implicit Return Values

**RULE**: all function calls implicitly return the value `undefined` by default. 

#### Explicit Return Values

**RULE:** if you use a `return` statement you can return an explicit value from a function.

> all functions return something unless they raise an exception.

```js
function add(a, b) {
  return a + b;
}

let twoAndThree = add(2, 3) => 5
```

- when JS encounters the `return` statement, it evaluates the expression, terminates the function and return the expressions value to where it was called - aka the **caller**

**RULE:** Functions that always return a Boolean value are called **predicates**

## Default Parameters

```js
function sat(words="hello") {
  console.log(words + "!")
}
say();		// outputs: hello!
```

- Just like ruby you can have default parameters which will be used if the function invocation (caller) doesn't have an argument

## Nested Functions

**RULE:** You can nest function definitions inside each other! Beware of scoping rules!

```js
function foo() {
  function bar(){
    console.log("BAR");
  }
  bar();	// outputs: BAR
}

foo(); 	// doesn't output anything (nothing was returned)
bar();	// ReferenceError: bar is not defined
```

>nested functions get created and destroyed every time the outer function runs. (This has a mostly negligible effect on performance.)

Here nested functions are private because we cannot access it from outside the function where it was defined in.

## Functions & Scope

The keyword you use to declare a variable combined with where it is declared determines whether a variable is global or local.

### Global Variables

available throughout the program,  global variables have global scope which means you can read and reassign them at any time. 

**RULE:** any variable declared inside a function or block is a local variable, everything else is a global variable.

```js
let greetingMessage = "Good Morning!";
console.log(greetingMessage);
```

- `greetingMessage` is a global variable and isn't part of a function definition or block, its declared at the global level and has global scope 

```js
let greetingMessage = "Good Morning!";

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople(); // => 'Good Evening'
```

- woah! Unlike Ruby, variables declared outside the scope of a definition can be accessed inside a function, even altered - just like blocks! This is because `greetingMessage` is a global variable
- Here `changeGreetingMessage` reassigns `greetingMessage` to a new string that was supplied as an argument and invoked on line 11

>While Global variables are useful in some instances eg. app wide configuration
>
>most developers discourage global variables since they often lead to bugs. In general, limit the scope of variables as much as possible; smaller variable scopes limit the risk that an outer scope might misuse the variable.

#### Variable Shadowing and functions:

```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

`let bar = 2;` on line 3 is not **reassignment** - its declaring a new local variable thus creating **variable shadowing.** Therefore `console.log` will output `1` on line 7

### Local Variables

confined to a function or block, local variables have local scope and cannot be accessed outside the function that declares them.

**RULE:** Where you declare a variable (global or local) determines its scope

```js
function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();		//outputs: "Good Morning!"
```

take advantage of *parameters as local variables* to limit the scope and reduce duplication in your code:

```js
function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople("Good Morning!");
```

remember: local variables are short lived, they disappear when the function that they are contained in stops running along with the scope. JS repeats this process everything a function is invoked

blocks are another way to scope variables locally using `let` or `const`

## Functions vs Methods

#### functions:

occurs when writing parentheses after its name and passing 0 or more arguments:

```js
toUpperCase('hello')
```

#### methods:

occurs when you prepend a variable name or value followed by a period `.`

```js
'hello'.toUpperCase()
```

## Mutating the Caller

some methods don't mutate (permanently alter) the caller:

```js
function addToArray(array) {
  return array.concat(10);
}

let oneToFive = [1, 2, 3, 4, 5];
addToArray(oneToFive); // => [1, 2, 3, 4, 5, 10]
oneToFive;             // => [1, 2, 3, 4, 5]
```

some methods mutate the caller:

```js
function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
oneToFive; // => [9, 2, 3, 4, 5]
```

**RULE:** mutation is only a concern for arrays and objects. Operations on mutable values may or may not return a new value and may or may not mutate data

**RULE:** Primitive values are immutable (numbers, strings and booleans). Their values never change and operations on primitive values will always return new values.

**RULE:** JavaScript is both pass-by-reference when dealing with arrays/objects and pass-by-value when dealing with primitive values!

## Function Composition

Like Ruby, Function Composition is when we use a function call as an argument to another function:

```js
function times(num1, num2) {
  return num1 * num2;
}

times(add(20, 45), subtract(80, 10)); // => 4550
// 4550 == ((20 + 45) * (80 - 10))
```

### functions within functions

```js
function findIntegers(array) {
  return array.filter(function(element) { 		//return from the function declaration
    return Number.isInteger(element);					//return from the callback function
  });
}
```

## 3 Ways to Define a Function

1. **function declaration:** where - like ruby- you can call the function before you declare it

   ```js
   greetPeople();
   
   function greetPeople() {
     console.log("Good Morning!");
   }
   ```

2. **function expression:** where - unlike ruby - you can save a function to a variable. The key difference is that you cannot invoke it before it appears in your program

   ```js
   let greetPeople = function () {
     console.log("Good Morning!");
   };
   
   greetPeople();
   ```

   **RULE:** Javascript functions are **first class functions**, which means you can treat them like any other value

   **RULE:** all JavaScript functions are objects which means you can assign them to variables and pass them as arguments to other functions and return them from function calls

   **RULE:** Any function definition that doesn't have the word `function` at the very beginning of a statement is a function expression. including the below:

   ```js
   (function greetPeople() { // function expression
     console.log("Good Morning!");
   });
   ```

   ```js
   function makeGreeter(name) {		// function declaration
     return function greeter() {		//function expression
       console.log(`Hello ${name}`);
     };
   }
   ```

3. **arrow functions:** similar to function expressions except they use a different syntax and allow implicit returns:

   ```js
   let add = (a, b) => a + b;
   
   add(2, 3);	// returns 5
   ```

   **RULE:** you can omit the `return` statement in an arrow function, when and only when the function body has a single expression (think like a ternary operator)

   **RULE:** if an arrow function contains two or more expressions or statements you must explicitly return a value and use curly braces `{}`

## The Call Stack

The stack helps JS keep track of:

- What function is executing
- Where should the execution resume when the function returns

Think of a stack of books: You can put a new book on top or remove the top most book from the stack

```js
function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();
```

>When this program starts running, the call stack initially has one item -- called a **stack frame** -- that represents the global (top-level) portion of the program. The initial stack frame is sometimes called the `main` function. JavaScript uses this frame to keep track of what part of the main program it is currently working on.
>
>When program execution reaches the function invocation on line 10, it first updates the `main` stack frame with the current program location. JavaScript will use this location later to determine where execution should resume when `second` finishes running.
>
>After setting the location in the current stack frame, JavaScript creates a new stack frame for the `second` function and places it on the top of the call stack: we say that the new frame is **pushed** onto the stack. Our call stack now looks like this:
>
>Note that the frame for the `second` function is now *stacked* on top of the `main` frame. While the `second` frame is still on the stack, `main` remains stuck beneath it, inaccessible. At the same time, the `main` function becomes dormant and the `second` function becomes active.
>
>The `second` function calls the `first` function on line 6. That action causes JavaScript to update the `second` frame so that JavaScript will know where to resume execution later. It then creates a new stack frame for the `first` function and pushes it to the call stack.
>
>Once the `first` function begins executing, it invokes the `console.log` method. All JavaScript functions and methods, including the built-in ones like `console.log`, share the same call stack. Therefore, we need to record our current location and then push a new frame to the stack:
>
>|   Call Stack   |
>| :------------: |
>|  console.log   |
>| first: line 2  |
>| second: line 6 |
>| main: line 10  |
>
>Chances are, `console.log` also has several internal function calls. However, we will ignore them and just assume that `console.log` does all its work without any additional function calls. Instead, it just logs the message `first function` to the console, then immediately returns.
>
>When `console.log` returns, JavaScript removes -- **pops** -- the top frame from the call stack. That's the frame for `console.log` in this example. That leaves the previous stack frame exposed. JavaScript uses this frame to determine where execution should resume. In this case, execution resumes immediately after line 2.
>
>Eventually, the `first` function will return. When that happens, the `first` frame gets popped from the stack. That exposes the stack frame for `second`, and that, in turn, tells JavaScript that it should resume execution on line 6.
>
>Next, control passes to the `console.log` call on line 7. Before `console.log` is called, the stack frame for `second` is adjusted to point to line 7:
>
>We now invoke `console.log` again. When that happens, it gets added to the stack:
>
>When `console.log` finishes, its stack frame gets popped from the stack, and control returns to `second`:
>
>The `second` method then finishes executing, which causes its stack frame to be removed from the stack, exposing the stack frame for `main`. The `main` frame tells JavaScript to resume execution on line 10.
>
>Eventually, the `main` function has no more code to run. When this happens, the `main` frame gets popped from the stack, and the program ends.

**RULE: **The call stack has a limited size of more than 10000 entries. If the stack runs out of room, you will see a `RangeError` exception together with a message that mentions the stack.

## Summary

- function composition is crucial to understanding JS
- variable scope
- understanding how mutation works helps catch bugs
- multiple ways to declare functions:
  - function declarations
  - function expressions
  - arrow functions
