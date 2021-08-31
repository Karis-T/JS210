# Hoisting

- `let` and `const` keywords are relatively new language features introduced in ES6 in 2015
- `var` statement is the predecessor of `let` and `const` 
- JS has a hoisting mechanism which produces confusing behavior mostly when combined with the `var` statement

## What to Focus On

- no longer as important for JS develoeprs to understand how `var` works but you will come across it in older code
- not expected to master these concepts but should be able to answer the following questions:
  - What is hoisting?
  - How do `var`, `let` and `const` interact with hoisting? How do they differ?
  - How do functions and classes interact with hoisting? How do they differ?
  - What part does hoisting play in how a specific program works?
  - How does hoisting really work?

## The `var` Statement

`var` is more similar to `let` in the sense that when declared without an initializer they have an initial value of `undefined`. They also don't work like `const` whoes value cannot be changed once assigned

```js
var foo;
let bar = "qux";
const baz = 3.1415;
```

### How do `var` and `let` differ?

They differ with how they interact with the Global object:

```js
var bar = 42;
console.log(global.bar); // 42
bar += 1;
console.log(global.bar); // 43
```

**RULE:** `var` is at the top level of a program and creates a property on the global object - (`global` in Node or `window` in a browser)

**RULE:** if you declare a `var` variable inside a function the variable isn't stored as a property of the global object or any other object

```js
let foo = 86;
console.log(global.foo); // undefined
```

**RULE:** `let` declaration doesn't add a new property to the global object (or any other object) and since the property doesn't exist it returns `undefined`

**RULE:** `let` is safer than `var` at the top level because placing properties on the global object leads to conflicts and bugs - `let` alleviates that issue 

```js
function foo() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a); // 1
  console.log(b); // ReferenceError: a is not defined
}

foo();
```

**RULE:** `var` is function-scoped, meaning it is visible within the function where it was declared. because `var` statements create a variable that has a function scope it is available everywhere in the function

**RULE:** `let` is block-scoped, meaning it is only visible within the block where it is declared (blocks in JS are delimited by curly braces however not everything between braces is a block)`{...}`. Because `let` statements create a variable that has a block scope it is only available within the block

```js
function foo() {
  if (false) {
    var a = 1;
  }

  console.log(a); // undefined
}

foo();
```

- even though the code doesn't run on line 3, because `var` statements have function scope it is automatically available to the whole function, but with the initial value of `undefined`

### Declared Scope vs Visibility Scope

**RULE:** the top level of a program outside any function is known as the function scope or **global scope**

**RULE:** There are no declarations that explicitly create a variable in global scope. All declarations create variables that either have: 

- function scope (`var`, `function`) 
- or block scope (`let`, `const`, `class`)

```js
let foo = 1;        // declared scope is block scope
var bar = 2;        // declared scope is function scope

if (true) {
  let foo = 3;      // declared scope is block scope
  var qux = 4;      // declared scope is function scope
}

function bar() {    // declared scope is function scope
  let foo = 5;      // declared scope is block scope
  var bar = 6;      // declared scope is function scope

  if (true) {
    let foo = 7;    // declared scope is block scope
    var qux = 8;    // declared scope is function scope
  }
}
```

**RULE:** Launch School Provides a term called "Declared Scope", when you want to discuss **how** a variable is declared: either **block** (`let`, `const`, `class`) or **function** scope (`var`, `function`). Even if these variables are declared outside a function or block they will always have their respective scope

```js
let foo = 1;        // visibility scope is global
var bar = 2;        // visibility scope is global

if (true) {
  let foo = 3;      // visibility scope is local (block)
  var qux = 4;      // visibility scope is global
}

function bar() {    // visibility scope is global
  let foo = 5;      // visibility scope is local (function)
  var bar = 6;      // visibility scope is local (function)

  if (true) {
    let foo = 7;    // visibility scope is local (block)
    var qux = 8;    // visibility scope is local (function)
  }
}
```

**RULE:** Launch School provides a term called "Visibility scope", when you want to discuss **where** a variable is visible rather than how its declared. This can be either **global** scope or **local** scope (inside a function or block).  

## What is Hoisting?

**definition:** during the creation phase (and prior to execution) hoisting is the process of moving or lifting all declarations to the top of their defined scope.

**RULE:** JS engines have 2 phases:

1. *creation phase*
   - preliminary work before execution which includes
     - find all the variable, function and class declarations
     - once found the action appears to move the declarations to the top of their respective function or block

2. *execution phase*
   - when the program runs code line by line

```js
console.log(getName());

function getName() {
  return "Pete";
}
```

- JS finds the `getName` function declaration and hoists it to the top of the program. This is why even when JS uses lexical scoping to locate its variables we are still able to log the return value of the `getName()` function before its been declared 

**RULE:** hoisting doesn't change the program. It executes the program in a way that acts like its been changed

## The Temporal Dead Zone

**RULE:** variables declared with `let`, `const` and `var` statements are also hoisted with the following rules:

- **RULE:** When a `var` variable is hoisted, it has an initial value of `undefined`

  ```js
  console.log(bar); // undefined
  var bar = 3;
  console.log(bar); // 3
  ```

  - because `var` is declared after its reference on line 1 it's currently hoisted with an intital value of `undefined` and therefore logs `undefined` to the console. This changes on line 3 when we log `var` again after its been declared on line 2. This is why it correctly logs its initializer value `3` 

- **RULE:** When `let` and `const` variables are hoisted, they are not given an initial value and are left in an unset state - they aren't defined (this differs from it being `undefined`)

  ```js
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo;
  ```

  - because `let` is declared after its reference on line 1 it is currently hoisted in an unset state. So when we try to log `foo` to the console it throws a `ReferenceError` which differs from the normal `ReferenceError: foo is not defined`
  - **RULE:** unset variables are said to be in the Temporal Dead Zone or TDZ

## Hoisting for Function Declarations

**RULE:** JS also hoists entire function declarations (including the body) to the top of the scope which is why the following can occur:

```js
console.log(hello());

function hello() {
  return 'hello world';
}
```

- in this case we've invoked the `hello()` function before its been declared. This is due to hoisting, where function declarations are moved or lifted to the top of the scope before the execution phase

**RULE:** In regard to nested functions, function declarations have function scope:

```js
function foo() {
  return bar();

  function bar() {
    return 42;
  }
}
```

- We are able to invoke `bar()` before it is declared, because hoisting makes it possible for the `bar` function declaration to be available throughout the `foo` function

**NOTE:** precisive hoisting behavior is inconsistent and varies based on whether strict mode and web extensions are in use. Prior to ES6, the behavior was undefined.

**RULE:** because of the inconsistencies don't try to nest function declarations inside non-function blocks. If you need to nest a function declaration inside a block use a function expression instead 



## Hoisting for Function Expressions

**RULE:** because function expressions involve assigning a function to a declared variable, they obey usual hoisting rules for variable declarations:

```js
console.log(hello());

var hello = function () {
  return 'hello world';
};
```

the above is the eqivalent of saying:

```js
var hello;								// var hello is hoisted & declared with initial undefined value

console.log(hello());     // raises "TypeError: hello is not a function"

hello = function () {		  // anonymous function assigned to hello after invocation
  return 'hello world';
};
```



## Hoisting Variable & Function Declarations

**RULE:** when both variable and function declarations exist, **function declarations are hoisted first** - above the variable declarations

```js
bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}
```

works like this:

```js
function bar() {		// function hoisted first
  console.log(foo);
}

var foo;					 // variable declaration foo is hoisted next - initial value undefined

bar();             // logs undefined
foo = 'hello';		 // initializer string 'hello' is assigned to foo
```

watch for the order here: 

- because `bar` is using a variable in global scope the timing of assignment becomes relevant
- if the variable is declared before function, it will output `hello`
- because the call happened before the variable reassignment it logs `undefined`

- because of the hoisting rules for variable and function declaration, `foo` is still undefined when `bar` is invoked

#### Same name function and `var` declaration

```js
bar();             				// logs "world"
var bar = 'hello';

function bar() {
  console.log('world');
}
```

```js
function bar() {					// hoisted function (bar variable created with function object)
  console.log('world');
}

//var bar; 						 		// hoisted var declaration (redundant code)

bar(); 							 			// bar function is invoked returns world
bar = 'hello';			 			// bar variable is reassigned to the string hello
```

- **RULE:** because the function declarations are always hoisted first, variable declaration of the same name becomes redundant

```js
var bar = 'hello';
bar();             				// raises "TypeError: bar is not a function"

function bar() {
  console.log('world');
}
```

```js
function bar() {					// hoisted function (bar variable created with function object)
  console.log('world');
}

//var bar; 						 		// hoisted var declaration (redundant code)

bar = 'hello';			 			// bar variable is reassigned to the string hello
bar(); 							 			// TypeError: bar is not a function
```

- **RULE:** You cannot declare a `let` or `const` variable and a function with the same name

```js
let foo = 3;
function foo() {}; // SyntaxError: Identifier 'foo' has already been declared
```

```js
function foo() {};
let foo = 3;  // SyntaxError: Identifier 'foo' has already been declared
```



## Best Practice to Avoid Confusion

Hoisting can introduce subtle bugs so follow these simple rules:

- **RULE:** use `let` and `const` whenever possible instead of `var`

- **RULE:** if you need to use `var` declare all variables at the top of the scope

  ```js
  function foo() {
    var a = 1;
    var b = 'hello';
    var c;
  
    …
  }
  ```

- **RULE:** if you can use `let` and `const`, declare them **as close to the first usage** as possible:

  ```js
  function foo(bar) {
    console.log("Hello world!");
  
    let result;
    if (bar) {
      let squaredBar = bar * bar;
      result = squaredBar + bar;
    } else {
      result = "bar hasn't been set";
    }
  
    return result;
  }
  
  console.log(foo(3));           // 12
  console.log(foo(undefined));   // bar hasn't been set
  ```

- **RULE:** declare functions before calling them:

  ```js
  function foo() {
    return 'hello';
  }
  
  foo();
  ```

  

## Hoisting Isn't Real

**RULE:** hoisting is just a mental model that nearly all JS developers use to explains how scope works. There is no process that happens in JS known as "hoisting" and there are some edge cases that aren't properly explained by hoisting. The hoisting behavior is merely a consequence of JS's 2 phases: create and execution phase

- creation phase prepares your code for execution and each times it finds a variable, function or class declaration it adds an identifier to the current scope. Depending on the declaration and where it occurs the identifier gets added to either global or local scope (function or block). At the end of creation phase JS known all the identifiers in your program and the scopes they belong to
- When execution phase occurs JS no longer cares about declarations, however it does care about initialization and function / class definitions (not the declarations themselves). Identifiers and their scope are already known, JS will simply look up the identifiers when needed

```js
boo();

function boo() {
  console.log("Boo!");
}
```

- During the creation phase, JavaScript only encounters one declaration: the `boo` function on line 3. It puts the name `boo` in the global scope. During the execution phase, the first thing that happens is that JavaScript encounters `boo()` on line 1. Since line 1 is in the global scope, JavaScript looks to the global scope for an identifier named `boo`. That name exists since it was found during the creation phase. Therefore, JavaScript only needs to call the `boo` function.
- nothing is "hoisted" or moved around in your code

```js
let foo = "hello";

function foo() {
  console.log("hello");
}
```

- processing occurs from top down during creation phase the first identifier found is `foo` variable on line 1. When the creation phase reaches the function declaration on lines 3-5, JS already knows about the `foo` identifier so it complains that `foo` has already been declared. The error occurs on line 3

```js
function foo() {
  console.log("hello");
}

let foo = "hello";
```

- `foo` function is seen before the variable during creation phase so the error doesn't occur until JS reaches line 5
- NOTE: Launch School will refer to hoisting as a real process from this point forward and should be considered it as a given for assessments. Don't try to explain that it doesn't exist if they ask about hoisting

## More hoisting examples

check out this [blog](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/) for more examples on hoisting

