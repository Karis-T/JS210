# Variables

**Variables are containers that hold data.** They are ways of associating data with descriptive names so our programs can be understood by humans.

>another name for a variable is known as an *identifier*

## Naming Variables

Guidelines for naming variables:

- JavaScript is case-sensitive; `myvariable` is not the same as `myVariable`.
- Variable names can be of any length.
- It must start with a Unicode letter, an underscore (`_`), or a dollar sign (`$`).
- Succeeding characters must be Unicode letters, numbers, dollar signs, or underscores.
- It must not be a [reserved word](http://www.ecma-international.org/ecma-262/5.1/#sec-7.6.1.1).

**Valid variable names:**

```
_count
$price
value
my_variable
otherVariable
```

**invalid variable names:**

```
1count
my#variable
```

## Declaring Variables

Variables should be declared before they're used. JS variables are declared using `let`, `const` or `var`

- `var` is the **traditional way to declare variables in JS**
- `let` and `const` were introduced in ES6. Where possible use them instead or `var`
- use `var` if you're working with a program that already uses `var` or to support old execution environments
- `var` is similar to `let` but with some important differences

```js
// single declaration
let myVariable;

// multiple declarations
let myVariable;
let otherVariable;
let anotherVariable;

// Constant declaration
const FOO = 'hello';

// var declaration
var myVariable;
```

>**RULE:** if you don't specify an initial value for a variable with the `let` statement, the variable is *still declared* but its value is `undefined` until you assign a value to it

## Variable Assignment & Initializers

>**definition:** The term **variable** implies that new values can be assigned. Values associated with variables may vary as the program runs

>**definition:** if we permanently assign a value to a name we refer to that name as a **constant**

use the assignment operator `=` to assign a value to a variable once its been declared:

```js
let number;
number = 3;
```

- the variable `number` is assigned to the value `3`

you can alternatively combine a **variable declaration** with an **initializer**:

```js
let myVariable = 'Hello, World';
var otherVariable = 23;
let anotherVariable = true;
const FOO = 42;
```

Difference between assignment and initializers:

- assignment is a standalone expression that gives a variable a new value
- initializers are the expressions to the right of a `=` in a variable declaration
- note below a variable is declared but not initialized nor assigned a value, and so will have the value `unassigned`

```js
let foo;
foo;      // undefined
```

**RULE:** **You must initialize a constant when you declare it.** This is because you cannot assign a new value to a constant once its been declared:

```js
const FOO = 3;
FOO = 4; // Uncaught TypeError: Assignment to constant variable.
```

```js
const BAR; // Uncaught SyntaxError: Missing initializer in const declaration
```

## Dynamic Typing

Because JS is a **dynamically typed language** you can reassign a variable to any type of value without errors. 

A variable in JS is just a name for a particular value at a particular time

 ```js
 // initialize to a string
 let myVariable = 'Hello, World';
 
 // reassign to a number
 myVariable = 23;
 
 // now the variable holds a number value
 myVariable;      // 23
 ```

 

