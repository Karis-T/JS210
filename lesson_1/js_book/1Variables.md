# Variables

As with Ruby, a variables purpose is to label and store data in memory so that your program can use it later on  

## Variables and Variable Names 

```js
let answer = 41;
answer = 42;
console.log(answer)
```

- on line 1 JS sets aside a bit of memory to store the value `41` . We also **initialize** the variable `answer` which is used to access the value
- on line 2 **reassign** the value `42` to the variable `answer`
- on line 3 we `log` the value referenced by `answer` to the JavaScript log which outputs `42` to the console and returns `undefined`

### Variable Naming

variable should be named accurately,  descriptively and understandable to other readers

variables are known by its broader term **identifiers**. In JS identifiers mean several things:

- Variable names declared by `let` and `var`
- Constant names declared by `const`
- Property name of objects
- Function names
- Function parameters
- Class names

A variable name can include any of the above even property names of the **global object**. It does however exclude object properties.

### What else is a Variable?

JS also stores the following in a named area of memory:

- Variables declared by `let` and `var`
- Constants declared with `const`
- Properties of the global object
- Function names
- Function parameters
- class names

Not all object properties are variables, only those on the **global object**. All of the concepts above act like variables but there are differences.

Function and class names are considered to be variable names. In JS they are actually values and their names are used similarly to traditional variables. 

## Declaring and Assigning Variables

When we declare a variable we ask JS engine to reserve a space for a variable using a particular name.

- As an option you can specify an initial value for the variable (but you don't have to)
- There are several ways to declare a variable but modern JS preferably uses the `let` keyword:

```js
let firstName								=> undefined
firstName										=> undefined
```

we **initialize** `firstName` with the value of `undefined`

If you want to assign a more useful value we can supply an **initializer** to the declaration:

```js
let firstName = 'Mitchell'	=> undefined
firstName										=> 'Mitchell'
```

the string `'Mitchell'` is now stored in memory

**RULE:** declarations with or without an initial value always return `undefined`

#### The `=` token

- When used in a declaration `=` resembles a syntactic token that tells JS that an initial value will be supplied. 
- in assignment the `=` is called the **assignment operator**

```js
let a = 4			=> undefined
let b = a			=> undefined

a = 7					=> 7
b							=> 4
```

As with Ruby, variables in JS aren't deeply linked to each other. They point to values in stored memory and won't change when another variable changes.



## Declaring Constants

`const` declares and initializes constant identifiers. Unlike variables constants MUST have a value

```JS
const firstName = 'Mitchell'	=> undefined
firstName											=> Mitchell
```

**RULE:** Constants have *immutable binding* to their values. What this means is that you cannot reassign constants a new value, and a constant will continue to have that value for as long as its needed. 

use constants when you want to label a value that makes your code more descriptive:

```js
let interest = amount * 0.0783;
// OR
const INTEREST_RATE = 0.0783;
let interest = amount * INTEREST_RATE;
```

- the second chunk of code is more easier to understand as `0.0783` is too arbitrary
- use `SCREAMING_SNAKE_CASE`

## Variable Scope

- **variable scope** refers to where a variable is available in a program. 
- The location where you declare a variable determines its scope
- in JS a variable declared with `let` or `const` have **block scope**
- a **block** is all the statements and expressions nestled between opening and closing curly braces `{}`

```js
if (expression) {		// block begins with {
  doSomething();		// block body
}										// block ends with }
```

- usually an `if` statement contains at least 1 block\
- JS evaluates the expression between the parentheses `()`
  - if it evaluates to `true` the JS code is executed inside the block
  - if evaluates to `false` it skips to the code that follows the block
- in the example above we execute `doSomething()` when `expression` evaluates to `true`.  

**RULE:** Like Ruby's `do` and `end`, not everything between curly braces is considered a block. eg. 

- braces surrounding object literals (hashes) are not blocks
- function bodies are not blocks.

**blocks** are executable chunks of code between braces so functions and object literals can be thought of as blocks even though they technically aren't

```js
{
  let foo = 42;
  console.log(foo);						//this is a block
}

if (answer === 'yes') {	
  console.log('yes');					//this is a block
} else {
  console.log('nope');				//this is a block
}

while (answer !== 'no') {		
  doSomething();							//this is a block		
}

function foo() {
  let foo = 42;								//this isn't a block but can be treated like one
  console.log(foo);
}

let foo = {
  bar: 42,										//this isn't a block
};
```

in general blocks appear in:

- `if...else`, 
- `while`, 
- `do...while`, 
- `for`,
-  `switch`, 
- `try...catch` statements, 
- or by themselves (as in the first example above)

if you declare a new variable inside an `if` statement it cannot be accessed from the outside. This is because inner scopes cannot be accessed by outer scopes:

```js
if (1 === 1) {
  let a = 'foo'
}
console.log(a);		=> ReferenceError: a is not defined
```

here `a` isn't in scope outside of the `if` block. You must first declare the variable outside the block first to be able to use it outside the block:

```js
let a = 'foo'
if (1 === 1) {
  a = 'bar'
}
console.log(a);		=> 'bar'
```

because outer scopes have access to inner scopes we can reassign it within the block on line 3 and log it to the screen on line 5

**RULE:** constants declared with `const` have the same scope as variables declared with `let`

**RULE:** any variables declared with `var` keyword don't use block scoping

### Variable shadowing

```js
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
```

be careful!

line 6 outputs `'bar'` due to variable shadowing, when we initialize a variable inside the block it overrides the access to the outer scoped `'foo'` variable. This means the outer variable cannot be accessed nor altered by the inner scoped block so it remains `'bar'` on line 6 when it is outputted to the screen

The same rule applies to constants too:

```js
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
```

line 6 will also output `'bar'`

```js
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);
```

line 7 will output `1`

## A Common Gotcha

be careful!

```js
p = 'foo';
```

**RULE:** undeclared variables have *global scope*, ignoring block and function scope entirely

This means that if your program has the same variable name in a different scope without being declared, it will step on the original variable and change its context. It is difficult to debug and can break code when fixed

## Summary

- learn how to use variable to store info for later use
- not all variables have the same scope
- where you define the variable determines which scope you can use and modify it
