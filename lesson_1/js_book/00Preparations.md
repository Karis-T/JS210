# Preparations

## Code Style

#### Comments

- **RULE:** JS uses `//` character sequence to mark a single line comment
- **RULE:** use  `/*` `*/` for multiline comments and embedding comments in the middle of a line

#### Code Blocks / function body

- **RULE:** when using curly braces to write these write the opening brace on the **same line as the function name / conditional expression** 
- begin with a single space:

```js
if (isOk()) {
  // do something
}

function isOk() {
  // do something
}
```

- **RULE:** use semicolons to terminate each logical line of code unless:
  - it ends with `{` , `}` or `:`

```js
let sum = x + 5;
```

#### Naming Conventions

- **RULE:** use **camelCase** for variable and function names
  - They begin with a lowercase letter
  - and if it contains more than one word it must be capitalized

```js
let answerToUlitimateQuestion = 42;				// initializing a variable
function fourScoreAndSevenYearsAgo() {		// defining a function
  // do something
}
```

- **RULE:** constructor functions should use **PascalCase** (or CamelCase with a capital C).

```js
function DomesticCat(name) {			// defining a function
  // do something
}
```

- **RULE:** use **SCREAMING_SNAKE_CASE** to represent constants that are unchanging / magic numbers:

```js
const SECONDS_PER_MINUTE = 60;	// magic numbers
const HOST = 'launchschool.com';
```

- **RULE:** constants that store functions follow the same rules as functions:
  - use camelCase for most functions
  - use PascalCase for constructor functions

```js
const sayHi = function() {
  console.log("Hi!");
};

const Pet = function(name) {
  this.name = name;
};
```

- **RULE:** use alphabetic / numeric characters only (except for SNAKE_CASE which use underscores)

#### Termination

- **RULE:** use semi colons to terminate statements and expressions:

```js
let x = 3;
let y = 5;

if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}
```

- **RULE:** some resources omit the `;` because JS automatically inserts semicolons where it needs them. However the insertion mechanism isn't perfect and can make mistakes as it can see code differently than intended. Because of this Launch School discourages the "no-semicolon" style
  - traditional style code that uses js in a file will use semi colons
  - REPL style code that uses js will omit semi colons

## Reading the documentation

- While the [ECMA](https://www.ecma-international.org/publications/standards/Ecma-262-arch.htm) international is the official documentation for JS, its very dense and hard to read. Its there however when you really need to understand how JS works
- [MDN](https://developer.mozilla.org/en-US/) is a more comprehensive and user friendly documentation
- JavaScript documentation focuses on datatypes and the operations you can perform on these types
  - eg `toUpperCase` is an operation you can perform on the `string` datatype 


![MDN documentation for string](https://d186loudes4jlv.cloudfront.net/javascript/images/mdn_string_documentation_page.png)

1. **Constructors / Type names:**

   - they are written in PascalCase

2. **Property Name**

   - traits or attributes of that type
   - nouns - describe what it is (not what it does)
   - eg. string properties are its `length`
   - think getters and setters

   ```js
   "hello".length
   => 5
   ```

3. **Method Name**

   - In JS, methods are functions that require a value to call the function
   - eg. the string method `toUpperCase()`

   ```js
   'xyzzy'.toUpperCase()
   ```

   - MDN shows 2 types of methods:

     - **instance methods** that have the following format: 

     ```json
     Constructor.prototype.methodName()
     /* eg */ String.protoype.charAt()
     ```

     - **static methods** that have the following format:

     ```js
     Constructor.methodName()
     /* eg */ String.fromCharCode()
     ```

   - there's no way to tell which ones are instance and which are static you'll just have to consult the documentation 
   - MDN is crowd sourced so be careful about taking direct wording for method definitions
