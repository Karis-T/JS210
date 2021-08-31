# Closures

**definition:** closures allow functions to access variables that was in scope at the time the function was defined, even when that variable is no longer in scope

- every time you define a function that accesses variables from its outer scope you're using closures

## What to Focus On

Mastery of closures is essential and one of the most important concepts in JavaScript. Technically closures are a mix of lexical and runtime features but they're easier to understand as a purely lexical feature. Closures are artifacts of the code's structure, instead of how the code runs

focus on the following:

1. *What* is a closure?
2. *When* is a closure created?
3. *What is inside* a closure?
4. What is the *relationship between closures and scope*?
5. What does *closures are defined lexically* mean?
6. What is *partial function application?*

## Closures

#### 1. What is a closure?

**definition 1:** closures use the scope that was in effect at the time the function was defined to determine what variables a function can access. The variables that are in scope during a functions execution depend on the closure formed by the function definition

**definition 2:** MDN paraphrase "the combination of a function and the lexical environment within which the function was defined". In other words A function combined with any variables from its lexical scope that the function needs.

**RULE:** If a function uses a variable that's neither declared nor initialized in that function, then that variable will be apart of that closure provided it exists.

#### 2. When is a closure created?

They're created when you define a function or method. The closure *closes over* its environment -- ie what is in scope at the time. the function definition and its scope become a single entity -- a closure.

#### 3. What is inside a closure?

**RULE:** A closure includes the variables it needs from the scope where you defined the function. Whilst those variables may not be in scope when you invoke the function, they're still available to the function from when you defined it.

**RULE:** closures only close over the variables that the function needs. If the function uses variable `foo` but the outer scope uses both `foo` and `bar`, only `foo` will be included in the closure

#### 4. What is the *relationship between closures and scope*?

**RULE:** when a variable is no longer in scope, it means that is isn't in scope at the point in your program when you **invoke** the function

#### 5. What does *closures are defined lexically* mean?

closure and scope are lexical concepts. **Where you invoke the function is unimportant -- where you define it is.**

When the function is invoked its able to access any variables it needs from that environment -- that is -- a function can use variables from the lexical scope where the function was defined -- even if these variables aren't in lexical scope during invocation, the function can still access them

### A Helpful Mental Model

1. When you define a mental model, JS finds all the variable names it need from the lexical scope that contains the function definition. 

2. It then takes those names and places them inside a special envelope and attaches it to the function object. 

3. Each name in the envelope is a pointer to the original **variable** - not the value it contains. We need a pointer to the variable so that it can see any changes made to what the variable references or contains

   ```js
   let numbers = [1, 2, 3];
   
   function printNumbers() {
     console.log(numbers);
   }
   
   printNumbers(); // => [ 1, 2, 3 ]
   
   numbers = [4, 5];
   printNumbers(); // => [ 4, 5 ]
   ```

   - If the closure pointed to the value instead of the variable, we wouldn't be able to tell that we reassigned `numbers` on line 9. The closure needs to be able to see the changes made throughout the program

4. When a function encounters a variable name during execution, it first looks inside its local scope for the name. 

5. If it can't find the name it peeks inside the envelope to see if the variable is mentioned there. If it is, JS can follow the pointer and get the current value of the variable.

   - this is how scope works in JS: it first checks for local variables by name, then looks to the closure if it can't find it
   - looking at outer scopes until you reach the global scope happens during creation phase when JS is looking for identifiers (variables and function names) and determining what scope they belong to

6. **RULE:** If variables were in scope when you invoke a function, a function can only access them if they were in scope at the definition point.

   -  Otherwise functions will not be able to access them. They wouldn't be listed in the envelope because they weren't present at the function definition point
   - **RULE:** Only variables that are in scope when you define the function are available to the function

### Example of Closures

#### First Class Functions

**RULE**: Functions are **First Class Objects**, which means that when you reference the function name without parentheses it'll return the function itself instead of the string representation

```js
const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

const hi = person.firstName;

hi;
// firstName() {
//   return 'Victor';
// }

// vs.

hi();
// "Victor"
```



**RULE:** We can invoke a function that lets us access a value that isn't in scope using **first-class values** or **first-class objects** which meet the following conditions:

- They can be assigned to a variable or an element of data structure (an array or object)
- They can be passed as an argument to a function
- They can be returned as a return value from a function

- JS primitive values, arrays and objects all meet this criteria
- Functions are first-class values too
- We can create functions that take other functions as arguments and return functions

**RULE:** first-class functions mean We don't have to execute a function in the same scope in which we define it:

```js
function foo() {	// foo function declaraction
  let name = "Pete";	// in scope at anons definition
  return function() {	// anonymous function expression
    console.log(name);
  };
}

let printPete = foo();
printPete(); // Pete
```

- We first call `foo` and capture its return value - a function that logs the value of `name` variable defined in the lexical scope of `foo`. 
- The closure formed around this function contains a pointer to `name` in its envelope. This pointer ensures that `name`'s value won't get discarded (garbage collected) when `foo` is done
- Even though `name` is out of scope when `foo` finishes, the returned function has an envelope that contains a pointer to `name`. Thus the function can still follow the pointer to the original variable and find its current value - which lets `printPete()` print `Pete`

**RULE:** each time you invoke a function, it see the most recent values of the variables in its envelope. So if a variable's value changes, the closure ensures that the function see the new value, not the old one.

```js
function makeCounter() { // function builds a counter
  let counter = 0;			 // private variable in scope at the time of definition
  return function() {		 //returns a function expression
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter(); //function assigned
console.log(incrementCounter()); // 1
console.log(incrementCounter()); // 2
```

**RULE:** variables unique to the functions closure and are not in scope at the time of invocation are considered to be private variables and cannot be accessed directly. The only way to determine its value is to call the function

- `counter` is a private variable and cannot be accessed directly. The only way to reference its value is to call the function `makeCounter` returns (although the function also increments the variable)
- **data protection** is a big reason why returning functions from other functions is so powerful 

**RULE:** Each closure gets its own copy of function variables each time the outer function is invoked

```js
let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1()); // 1
console.log(incrementCounter1()); // 2

console.log(incrementCounter2()); // 1

console.log(incrementCounter1()); // 3
```

- each closure gets its own copy of the `counter` variable. This is because each invocation of the `makeCounter` function creates a new local variable named `counter`

**RULE:** When two functions are defined in the same space and use the same variable - they share it and no copies are made. This implies that when one function is invoked it modifies the other function's value:

```js
function makeCounter() {
  let counter = 0;

  const fun1 = function() {
    counter += 1;
    return counter;
  }

  const fun2 = function() {
    counter += 2;
    return counter;
  }

  return [fun1, fun2];
}

let funs = makeCounter();
let fun1 = funs[0];
let fun2 = funs[1];
console.log(fun1()); // 1
console.log(fun2()); // 3
```

- here both functions returned by `makeCounter` close over the same `counter` variable so they share it. 
- On line 18 we call the first function which increments `counter` by 1. On line 19 we increment the same counter by `2` so the result is `3`

```js
let array = [1,2,3,4,5];
let oddNumbers = [];
array.forEach(number => {	//this callback function has access to both oddNumbers and Array
  if (number % 2 === 1) {
    oddNumbers.push(number);
  }
});
```

- callback functions (like the one passed to the `Array.prototype.forEach` method) is invoked somewhere in the heart of JS's implementation of `forEach`. It still has access to the `oddNumbers` array since the callback forms a closure with its surrounding scope. The closure also provides access to the `array` object through the call back although it is not used here

**RULE:** closure definitions are purely lexical. Closures are based on your programs structure and not by what happens when you execute it. Even if you never call a particular function that forms a closure with its surrounding scope 



## 6. Partial Function Application

```js
function add(first, second) {	// function in scope at the time of invocation
  return first + second;
}

function makeAdder(firstNumber) {		// function declaraction
  return function(secondNumber) {		// anonymous function expression returned 
    return add(firstNumber, secondNumber);	// call add function invocation
  };
}

let addFive = makeAdder(5);	// passed in first number 5 to makeAdder (needs 1)
let addTen = makeAdder(10);	// passed in first number 10 to makeAdder (needs 1)

console.log(addFive(3));  // 8	// passed in second number to anon with 5 in scope
console.log(addFive(55)); // 60	// passed in second number to anon with 5 in scope
console.log(addTen(3));   // 13	// passed in second number to anon with 10 in scope
console.log(addTen(55));  // 65	// passed in second number to anon with 10 in scope
```

- Here the `makeAdder` function creates and returns a new function that calls and returns the `add` invocation passing it 2 arguments. 
- We define the first number when we call `makeAdder`
- We don't supply the second number until later when we call the anonymous function that `makeAdder` returns

- The above uses partial function application, where it applies some of the functions arguments (the `add` functions `first` argument here) when invoked; and supplies the remaining arguments when you call the anonymous returned function.  

**definition:** Partial function application refers to the creation of a function that can call a second function with fewer arguments than the second function expects. The created function supplies the remaining arguments

- its most useful when you need to pass a function to another function that won't call the passed function with enough arguments. It lets you create a function that fills in the blanks by supplying missing elements.

```js
function download(locationOfFile, errorHandler) { // download needs 2 arguments
  // try to download the file
  if (gotError) {
    errorHandler(reasonCode);
  }
}

download("https://example.com/foo.txt", /* ??? */); // we only have 1 argument
```

```js
function errorDetected(url, reason) { 
  // handle the error
}

function makeErrorHandlerFor(locationOfFile) {	// creates an error handler
  return function(reason) {			// returns an anon function expression
    errorDetected(locationOfFile, reason);	// invokes error detected with 2 args
  };
}

function download(locationOfFile, errorHandler) { // download now has 2 args
  // try to download the file
  if (gotError) {																// if you get an error 
    errorHandler(reasonCode);										//	invoke the anonymous function
  }
}

let url = "https://example.com/foo.txt";
download(url, makeErrorHandlerFor(url));	//calls the make error handler returns anon func
```

- In this simple example, partial function application may be overkill. However, if you need to use `errorDetected` in several different locations, partial function application can save you a lot of time and effort. You don't have to create an error handler function for each situation.

- Rather than creating a `makeErrorHandlerFor` function, you can use `bind` to perform partial function application. In most cases, `bind` is all you need:

  ```js
  let url = "https://example.com/foo.txt";
  download(url, errorDetected.bind(null, url));
  ```

- partial function application may have differing names that mean the same thing or something entirely different. Try not to get names mixed up with "partial function" or "partially applied function"

### Recognizing Partial Function Application

**RULE:** Partial function application requires a *reduction in the number of arguments you have to provide when you call a function*. If the number of arguments isn't reduced it's not partial function application:

```js
function makeLogger(identifier) {
  return function(msg) {
    console.log(identifier + ' ' + msg);
  };
}
```

- `console.log` takes 1 argument (even though it looks like 3) and the anonymous return function takes 1 argument. Since there is no difference in the number of arguments we don't have partial function application

```js
function makeLogger(identifier) {
  return function(msg) {
    console.log(identifier, msg);
  };
}
```

- if we change the code to use 2 arguments when calling `console.log` we have partial function application. In this case we only need to pass one argument to the function returned by `makeLogger` that function in turn calls `console.log` with 2 arguments - so its partial.

## What are Closures Good For?

in addition to callbacks, partial function application and creating private data closures also make the following possible:

- Currying (a special form of partial function application)
- Emulating private methods
- Creating functions that can only be executed once
- Memoization (avoiding repetitive resource-intensive operations)
- Iterators and generators
- The module pattern (putting code and data into modules)
- Asynchronous operations

## Optional Reading

if you're still feeling uncertain read this [article](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8) where the author walks you through the steps to understanding closures please note:

- The author claims that his final example is partial application, but it doesn't quite fit with our definition. You can ignore that
- The author also uses the term "backpack" for what we call an envelope
- Also, he sometimes uses *argument* and *parameter* interchangeably

## Summary

- closures are tangled intimately with scope
- to understand scope fully you need to understand how closures work
- partial function application is a technique used when you need to call a function many times with the same arguments
