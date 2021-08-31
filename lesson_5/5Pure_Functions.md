# Pure Functions and Side Effects

## Side Effects

**RULE:** A function invocation has side effects if it performs one or more of the following:

1. Reassigning any **non-local variable**
2. Mutating a **non-local variable** that references an object
3. reads or writes to any **non-local data entity** to your program (files, network connections etc)
4. Raises an **exception** (Uncaught errors)
5. **invokes other functions** that have side effects mentioned above

**RULE:** Its more accurate to say a 'function invocation has side effects' than it is to say a 'function has side effects'. This is because some functions may have side effects (raise exceptions) in some circumstances but not in others depending on the argument passed in. 

**RULE:** Functions with side effects have them regardless of what arguments are passed to it. A function has side effects when its used as intended - That is - (in a manner makes sense):

**RULE:** The function isn't being used as intended if:

- a required argument is omitted
- If you pass a data type that isn't expected (pass an array but a number is expected)
- If you invoke a function before you've done any preparations (opening a connection to a remote server)

**RULE:** functions that have major side effects are a major source of bugs

### 1. Side Effects Through Reassignment

**RULE:** If the function reassigns any **variable that is not declared inside the function,** the function has a side effect.

```js
let number = 42;
function incrementNumber() {
  number += 1;
}
```

side effect: `number` is defined in outer scope

- `incrementNumber()` function changes the value of `number` variable and because `number` is declared outside the scope, it isn't local to the function. Reassignment is a side effect

### 2. Side Effects Through Mutation

**RULE:** if a function mutates an object or array declared outside the function, the function has a side effect

```js
let letters = ['a', 'b', 'c'];
function removeLast() {
  letters.pop();
}
```

side effect: alters the array referenced by letters

- `removeLast` function mutates the array referenced by `letters` variable which is not local to the function. Mutation of variable declared in an outer scope is a side effect

```js
let letters = ['a', 'b', 'c'];
function removeLast(array) {
  array.pop();
}

removeLast(letters);
```

side effect: alters the array referenced by letters

- because both `letters` and `array` are referencing the same object in memory so if you mutate the value in `array` the changes are visible in `letters`

### 3. Side Effect through Input/Output

**RULE:** Anything that causes JavaScript to look outside the program for a place to read or send data is a side effect.

**RULE:** if a function contains any of the following input/outputs its considered to have a side effects:

- Reading / Writing to a file on the system's disk
- Reading input from the keyboard
- Writing to the console
- Accessing a database
- Updating the display on a web page
- Reading data from a form on a web page
- Sending / Receiving data to and from a remote web site
- Accessing system hardware such as:
  - The mouse, trackpad, or other pointing devices
  - The clock
  - The random number generator
  - The audio speakers
  - The camera

```js
let readLine = require("readline-sync");

function getName() {
  let name = readLine.question("Enter your name: "); 
  console.log(`Hello, ${name}!`); 
}
```

**RULE:** reading from the keyboard and writing to the console are considered side effects

- side effect: output and reading input from the keyboard
- side effect: output to console

```js
let date = new Date();
let rand = Math.random();
```

**RULE:** Accessing the system date or time and generating random numbers are also side effects

- side effect: accesses the system clock
- side effect: accessed random number generator

### 4. Side Effects Through Exceptions

**RULE:** If a function can raise an exception and doesn't catch and handle it, it has a side effect

```js
function divideBy(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Divide by zero!");
  }

  return numerator / denominator;
}
```

- side effect: raises an exception

### 5. Side Effects Through Other Functions

**RULE:** if a function calls another function that has one of the above side effects visible outside the calling function, the calling function also has a side effect. 

Each of the below function propergates their side effects to the function Side effect include but isn't limited to:

- `console.log` (output)
- `readline.question` (input and output)
- `new Date()` (input the system clock)
- `Math.random()` (input random number generator)

```js
function insertNumberInOrder(arrayOfNumbers) {
  arrayOfNumbers = arrayOfNumbers.slice(); // creates a copy of an array
  arrayOfNumbers.push(arrayOfNumbers); // not a side effect since copy of array
  arrayOfNumbers.sort((a, b) => a - b);
  return arrayOfNumbers; // function has no side effect
}
```

- sort has side effects within function
  - even though `sort` method has a side effect (mutating the calling array) that side effect is confined to `insertNumberInOrder`. Since the side effect has no effect outside the function the function has no side effects 

## Mixing Side Effects and Return Values

**RULE:** most function should either return a useful value OR have a side effect - not both.

- By useful value we mean a value that has meaning to the calling code. useless return values include arbitrary values or always returning the same value

- There are exceptions to this rule where if you read input from users keyboard you probably want to return a value. 

## Pure Functions

**RULE:** Pure functions have the following criteria:

1. no side effects
2. If given the same set of arguments, it should always return the same value for the lifetime of that function. This implies that the return value of a pure function depends solely on its arguments. This implies returning useless / arbitrary values (`undefined` or a fixed value)

```js
const square = value => value * value;
```

The above function:

- has no side effects.
- The return value is dependent on the argument `value`.
- It returns a consistent result no matter what value we pass to it:

**RULE:** a return value depending on the argument passed to it suggests that nothing else in the program can influence the function's during its lifetime.

**RULE:** A functions lifetime begins when the function is created and ends when it is destroyed. 

**RULE:** Nested functions have a lifetime that spans a single execution of the outer function and are created every time the outer function is invoked. Each instantiation of a nested function is separate and can produce different results for each instance -- however its still a pure function

**RULE:** because pure functions have no side effects and have a consistent return value it makes them easy to test because they are pretty much isolated from the rest of the program. They equally cannot be affected by anything outside the function nor nothing in the function can have any impact on the rest of the program

**RULE:** Its more accurate to say a 'function invocation is pure or impure' than it is to say a 'function is pure or impure'. This is because a function that is pure with one set of arguments could be impure with another and thus depending on whether or not the function contains side effects and if arguments produce consistent return values

**RULE:** a function is always pure regardless of what arguments are passed in or if it returns a useless value. (`undefined` or `3.14159`)

**RULE:** Pure functions are essential to functional programming, which relies heavily on:

- pure functions
- declarative code
- no mutations

Many libraries such as React JS require pure functions

