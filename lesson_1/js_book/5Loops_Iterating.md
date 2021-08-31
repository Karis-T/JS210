# Loops & Iterating

Loops run code over and over until an ending condition occurs. In JS they're are made up 3 components:

- a looping keyword
- a condition
- and a block

Loops execute the loops body (the block) for as long as the condition evaluates to true (truthy).

- **one iteration** refers to executing the loop body once. 
- JS has 2 other looping mechanisms: array looping abstractions and recursion

## `while` Loops

Like ruby, if you don't specify a conditional that will eventually hit a false value you will create an infinite loop

```js
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter = counter + 1;
}
```

- JS encounters the `while` loop and evaluates the conditional expression inside the parentheses `counter <= 10`
- because `counter` references the value `1`, the expression evaluates to `true` and so therefore executes the block
- inside the block the `counter` value is outputted and we increment `counter` value up by `1`
- after the 10th iteration `counter`s value no longer meets the loops condition and the program stop looping.  

like ruby you can also use the same shortcut with `+=, -=, *= and /= `

```js
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 1;
}

let a = 3
a *= 4            => 12
a /= 6            => 2
a -= 2            => 0
```

#### The increment operator `++` & decrement operator `--`

in JS this operator increments its operand by 1 and decrements by one respectively as its very common to and a minus 1 to variables

```js
let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter++;
}
```

there are 2 kinds of increment operators:

- the pre-increment operator `++a` returns the next value
- the post-increment operator `a++` returns the previous value
- There are respective decrement operators that do the same thing
- These operators are easy to mistype and should only be used in `for` loops 

```js
let y = "5"
y++
```

The above returns value is the *numeric* value `5`.

If you apply `++` to a string, JavaScript coerces it into a number. In this case, `"5"` gets coerced to the number `5`. After coercion, it then increments the value to `6`. However, the return value is `5` since the post-increment operator (`y++`) returns the original value of `y`, not the incremented value.

### Looping over arrays with `while`

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

- we initialize an `index` variable with `0`. The variable `names` holds an array of names. We want to convert every name to uppercase and append it to the empty `upperNames` array
- we use a loop that executes as long as the number in `index` is smaller than the length of the `names` array.
- Line 6 accesses the name stored at `names[index]` and uses it to call the `toUpperCase` method, which returns the name uppercased and is assigned to `upperCaseName`. This is an immutable method which doesn't affect the original 
- Line 7 uses the `push` method for arrays to append the latest uppercase name to the `upperNames` array. 
- Line 8 increments the index by `1` after each iteration, which ensures that `index < names.length` becomes `false` when the last element is handled

### `do` `while` Loop

**RULE:** `do/while` loops always execute the code in the block at least once because the conditional check occurs at the end

whereas `while` loop conditions occurs at the beginning and therefore may be falsy before loop starts and therefore never execute

```js
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');
```

## `for` Loops

similar to `while` loop except the condensed syntax combines variable initialization, condition and increment/decrement expression all on a single line:

 ```js
 for (initialization; condition; increment) {
   // loop body
 }
 ```

is the equivalent of:

```js
initialization;
while (condition) {
  // loop body
  increment;
}
```

the difference is the scope of the initialized variable:

- for the `for` loop the variable is scoped at the block level
- for the `while` loop the variable is initialized and therefore accessible in the outer scope

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']
```

- Declare and initialize `index` variable to `0`
- if `index` is less than array length execute the code in the loop body
- increment `index` go back to condition
- if condition evaluates to `false` log the results

`for` loops are cleaner, allows you to see the looping logic at a single glance and moves the `index` variable into the inner scope

**RULE:** all 3 components of a `for` loop are optional you can even do the following:

```js
let i;
for (i = 0; i < 5;) {
  console.log(i += 1);
}
```

now `i` is available outside the `for` loop

## Controlling Loops

### `continue`

similar to ruby's `next`, `continue` lets you start a new iteration of the loop and must have a semi colon appended to the expression

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
```

you don't have to use `continue` keyword you can use `!==` in your conditional instead:

```js
 if (names[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
```

**RULE:** You don't have to use blocks with `if` and `continue`, `break` or `return` and it results in cleaner, easy-to-read code:

```js
for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) continue;
  // some code here

  if (!anotherCondition) continue;
  // some more code here
}
```

### `break`

same as ruby but must append a semi colon to the expression, `break` lets you terminate a loop early

```js
let array = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);
```

Here we just want to find the index of the number `5`. When we find it we don't want it to keep iterating over the whole array so we terminate the loop with `break`

## Array Iteration

Similar to ruby, in JS we use the built-in `Array.forEach()` method:

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(
  function(name) { 
    console.log(name); 
  }
);
```

- `function(name)` is an **anonymous function** and a function expression
- in this example we are passing the anonymous function as an argument to the `forEach` method. 

**RULE:** first-class functions are values: you can assign them to variables pass them around as arguments and use them as return values in other functions. 

**RULE:** When you pass a function as an argument to another function, the first function can call the second function because it's its argument

**RULE:** `forEach` loops through each element in an array in sequence starting with the first element. For each element in the array `forEach` invokes the anonymous function with the `name` as its parameter

You can simply `forEach` method with arrow functions like so:

```js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
names.forEach(name => console.log(name));
```



## Recursion

similar to ruby,  recursion is a concept where you call a function from within itself. 

### A simple Example

```js
function doubler(number) {
  if (number <= 50) {
    console.log(number);
    doubler(number * 2);
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
```

### A complex example

```js
function fibonacci(number) {
  if (number < 2) return number; 
  // return 0 if number is 0, return 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));  // => 8
console.log(fibonacci(20)); // => 6765
```

![image](https://d2aw5xe2jldque.cloudfront.net/books/ruby/images/fibonacci_diagram.jpg)

**RULE:** Every recursive function has: 

- **baseline condition** that marks the end of the recursion
- some code that calls the function again
- Every time you call the function there should be a new argument

## Summary

- Loops perform repeated operations on data sets
- In JS you'll opt for an array abstraction over a loop but not always
- Recursion calls a method inside itself to solve complex problems
