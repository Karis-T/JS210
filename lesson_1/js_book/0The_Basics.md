# The Basics

## Data Types

>**Data types** help programmers and their programs determine what they can and cannot do with a given piece of data.

**RULE:** JavaScript has 5 **primitive data types:**

- `String`
- `Number`
- `Undefined`
- `Null`
- `Boolean`

ES6 introduces 2 additional primitive types: Symbol and BigInt - They are not apart of the LS curriculum.

All other types are considered to be an **object type**

> Data types are represented by **literals**. A literal is fixed value in source code

The following are literals in JS:

```js
'Hello, world!'		// string literal
3.1415926					// numeric literal
true						  // boolean literal
{ a: 1, b: 2 }		// object literal
[ 1, 2, 3 ]				// array literal
undefined					// undefined literal
```

### Strings

#### Escaping

**RULE:** we escape single quotes the same way its done in ruby:

```js
"He said, 'Hi there!'"    // with double quotes
'He said, \'Hi there!\''  // with single quotes and escaping

// both will return:
=> "He said, 'Hi there!'"
```

#### Interpolation

**RULE:** New to JS, add backticks to interpolate an expression into a string. Interpolation is a feature of **template literals** and doesn't work on single or double quoted strings: 

```js
`5 plus 5 equals ${5 + 5}`
// returns:
'5 + 5 equals 10'
```

### Numbers

**RULE:** All numbers have a single data type `Number` for all numbers including:

- floating point numbers
- fixed point decimal numbers
- integers

```js
1, 2, -3, 4.5, -6.77, 234891234 // Examples of numeric literals
```

- cannot use commas `,` or periods `.` to separate big numbers. Newer versions of JS allow you to use underscores `_` but it's not supported enough yet to be relied on

### Booleans

**RULE:** Like Ruby, there are two literal Boolean values: 

- `true` 
- `false` 

```js
let toggleOn = true
=> undefined

let sessionActive = false
=> underfined
```

### Undefined

**RULE:** `undefined` is the absence of any value. When a variable is not defined it evaluates to `undefined`. 

```js
setAgeFor('Pete', undefined);
```

- **RULE:** `console.log` function will always return `undefined`: (similar to `puts` and `nil`):

```js
console.log("Hello, World!")
Hello, World!
=> undefined
```

- **RULE:** if you declare a variable that doesn't have an explicit value, `undefined` is returned:

```js
let foo
=> undefined

let bar = 3
=> undefined

bar
=> 3

foo
=> undefined
```

### Null

**RULE:** `null` represents the **intentional absence of a value**.  It indicates emptiness or nothing. 

**RULE:** The main difference between `null` and `undefined` is:

- you must use `null` *explicitly* if you want to use it
- `undefined` can be *implicitly* returned

```js
let foo = null		//literal null value explcitly declared
```

### `typeof` Operator

> **RULE:** To see what type a value has you can use the `typeof` operator: it returns a lowercase string of that type:

```js
typeof 1
=> 'number'

typeof null
=> 'object'		 // this is a JS error it should return 'null' 

typeof [1, 2, 3]
=> 'object'		 // arrays are objects in JS
```

**RULE:** `typeof` should return `'null'` but it doesn't. This is a JS error.

**RULE:** arrays are a type of `'object'`

## Operations

### Adding, Subtracting, Multiplying

**RULE:** works the same as ruby:

```js
38 + 4		=> 42
44 - 2 		=> 42
7 * 6			=> 42
```

### Division & Remainder

**RULE:** unlike ruby when you divide with whole numbers that don't divide evenly you wind up with accurate decimals:

```js
16 / 4		=> 4
16 / 2.5	=> 6.4
16 / 5		=> 3.2
16 / 7		=> 2.287142857142856
```

**RULE:** JS computes **remainders,** not modulus. remainder and modulo are not the same but use the the same `%` operator:

```js
16 % 5		=> 1
```

- remainder operations return a **positive integer** when the **1st operand** is positive and a negative integer when the **1st operand** is negative
- modulo operations return a positive integer  when the 2nd operand is positive and a negative integer when the 2nd operand is negative
- this is confusing so try to work with positive integers only.

### `NaN`

> **RULE:** think of `NaN` as a numeric result that indicates an error occurred. It stands for "Not a Number" and indicates when an illegal operation on numbers has occured.

```js
0/0							=> NaN
3 + undefined		=> NaN
```

```js
typeof NaN			=> 'number'
```

**RULE:** `Nan` occurs in 2 main situations:

1. Undefined mathematical operations (eg. `0 / 0` ) or square roots of negative numbers. Note that undefined here refers to a mathematical operation that isn't defined and not JS's `undefined` value

2. trying to convert a non-number value (eg. `1 % hello`)

To determine if a value is `NaN` you can't use the usual comparison operators in the usual way because: 

> **RULE:** `Nan` is the only value in JS that isn't equal to itself:

```js
NaN === NaN				=> false
```

```js
function isNotANumber(value) {
  return value !== value;
}
```

The above works because `NaN` is the only JS value that is not `===` to itself

**RULE:** Use the methods `Number.isNaN` or `Object.is` to check if something is `NaN`:

```js
let value = NaN;
Number.isNaN(value)
=> true

Object.is(value, NaN)
=> true
```

### Infinity and -Infinity

**RULE:** the difference between `NaN` and `Infinity`:

- `Infinitiy` is a number that is so large it can't be written down
- `NaN` is the result of an attempted mathematical operation that's **neither valid nor infinite**

**RULE:** divisors are usually the reason `Infinity` occurs but there are other instances:

```js
Infinity * Infinity			=> Infinity
Infinity + Infinity			=> Infinity
Infinity - Infinity			=> NaN
Infinity / Infinity			=> NaN
1234567890 / Infinity		=> 0
```

**RULE:**  `Infinity` has a negative counterpart: `-Infinity` which occurs when dividing a negative number by 0

```js
-1 / 0									=> -Infinity
```

**RULE:** `Infinity` and `-Infinity` are considered to be numbers in JS:

```js
typeof Infinity					=> 'number'
typeof -Infinity				=> 'number'
```

```js
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}
```

The above works because `1 / 0` returns `Infinity` and `1 / -0` returns `-Infinity`, thus letting us make the distinction. You can divide any other number except `0` or `-0` to achieve the same result.

### Equality Comparison

- **RULE:** use `===` operator to compare identical values:

```js
42 === 42				=> true
'foo' === 'Foo' => false
```

### String Concatenation

- **RULE:** Like ruby when we use the `+` operator with strings it concatenates values together:

```js
'foo' + 'bar'		=> 'foobar'
'1' + '2'				=> '12'
```

## Implicit Type Coercion

- unlike ruby when we try to add two different types together it returns an error. This is not the case with JS. 
- In JS when we concatenate a string with a number an **implicit type coercion** occurs:

**RULE:** when using `+` If either operand is a string and the other isn't, JS coerces the non-string operand to a string, and the result will always return another string

```js
'1' + 2			=> '12'
2 + '1'			=> '21'
```

**RULE:** if you perform some other mathematical operation on a string and a number JS coerces the non-number operand into a number and will always return a number:

```js
'5' - 3			=> 2
3 * '5'			=> 15
```



## Explicit Coercion

**RULE:** Difference between Implicit and Explicit Coercion: 

- **Explicit** coercion lets you decide what you want to convert and how
- **Implicit** coercion lets the engine choose

An example of explicit coercion is if you had 2 string numbers and you wanted to add them together you'd have to explicitly convert them because `+` on strings performs concatenation

### Strings to Numbers

To convert strings to numbers use the `Number()`  or `parseInt` function:

```js
Number('1') + Number('2.3') 	=> 3.3
parseInt('12')								=> 12
```

The difference between `parseInt` and `Number`: 

**RULE:** if `parseInt` value begins with a digit followed by a non-numerical remaining character it will stop converting and ignore the leftover characters:

```js
parseInt('12xyz') 						=> 12
parseInt('3.14159')						=> 3
```

**RULE:** if `parseInt` contains more than 300 digits it returns `Infinity` or `-Infinity`

If you try to convert a non-numeric string to a `Number` the following occurs:

```js
Number('foo')									=> NaN
```

**RULE:** Unlike other languages that would raise an error, JS fails silently and the programmer must determine whether an error represents a problem

>**RULE:** `parseFloat` is a similar function and coerces a string to a floating-point (decimal) number.

```js
parseFloat('12.5foo')
=> 12.5
```

### Numbers to Strings

**RULE:** To convert numbers to strings use the `String()` function:

```js
String(20) + String(21)				=> '2021'
```

**be careful!**

```js
'12' < '9'		=> true
```

**RULE:** when you compare two strings JS performs a character by character comparison moving from left to right

-  since `'1'` is < `'9'` it evaluates to `true`

## Data Structures

The two most common data structures / complex data types are:

- arrays
- objects

### Arrays

- are exactly like ruby arrays which: 
  - can contain any other data type
  - uses square brackets to surround a comma separated list of values:

```js
[ 1, 2, 3, 4, 5 ]
```

- when you want to return an item from the list it works the same as ruby too:
  - 0 based index
  - uses square brackets

```js
[1, 2, 3, 4, 5][0]			=> 1
```

- **RULE:** for multi-line formats its common to include an extra comma after the last value:

```js
[
  "Eric Idle",
  "John Cleese",
  "Terry Gilliam",
  "Graham Chapman",
  "Michael Palin",
  "Terry Jones",
]
```

### Objects

- Ruby's version of a Hash or Dictionary. It has key and value pairs that are separated by commas:
  - **RULE:** keys are strings followed by a colon `:`
  - values can be anything

```js
{ dog: 'barks', cat: 'meows', pig: 'oinks' }
```

- to return a value from an object, use square brackets `[]`

```js
({ dog: 'barks', cat: 'meows', pig: 'oinks' })['cat']			=> 'meows'
```

- the above must use parentheses because it is a literal object. This is rare in programming though
- use commas on last lines for multiline formats:

```js
{
  title: "Monty Python's Flying Circus",
  cast: [
    "Eric Idle",
    "John Cleese",
    "Terry Gilliam",
    "Graham Chapman",
    "Michael Palin",
    "Terry Jones",
  ],
  firstSeason: 1969,
  lastSeason: 1974,
}
```

## Expressions and Return Values

- **RULE:** like Ruby, an **Expression** is anything in JS that evaluates to a value, even if that value is `undefined` or `null`. 
- Almost everything you write in JS is an expression
- **RULE:** JS expressions evaluate to a value that can be captured and used in subsequent code. This is called the **return value** in a REPL its the value that comes back to you after every evaluated expression

```js
"hi"									=> 'hi'
7 + (5 + 2)						=> 14
console.log(5 + 2)		=> undefined
```

### Printing/logging vs returning values

- Like output in Ruby, **log** is a term used in JS to print or write something to the console:

```js
let a = console.log('Howdy') // outputs Howdy
a => undefined
```

- here we log or display `Howdy` to the console on line 1
- and `undefined` or nothing is returned from `console.log` method and stored in variable `a`
- This is why variable `a` evaluates to `undefined`

## MDN Statements

- Like Ruby, Statements are not expressions, but they include expression as part of their syntax

MDN defines Statements as:

>**RULE:** a **statement** is a line of code commanding a task. Every program consists of a sequence of statements.

- **RULE:** Difference between statements and expressions:
  - you can't capture a value from a statement
  - you can capture and print the value of an expression eg. `3 * 5`

```js
let foo = 3;
console.log(foo);
```

- Line 1 is a statement however `3` is an expression
- Line 2 is a statement however `foo` is an expression

```js
console.log(let answer = 3 * 5); // SyntaxError: missing ) after argument list
console.log(while (true) {});    // SyntaxError: Unexpected token 'while'
```

**RULE:** you cannot print statements or errors will be thrown

### Statements in Practice

- The [ECMAScript Specification](https://262.ecma-international.org/10.0/#sec-ecmascript-language-statements-and-declarations) defines what are statements in JS
- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Statement) also has a list of statements that agrees with the above
- **RULE:** This means that every chunk of code is treated as a single statement which includes:
  - variable, function, and class declarations
  - loops and `if` statements
  - `return` and `break` statements
  - assignments: `a = 3;`
  - standalone expressions: `console.log("Hello");`

## Summary

- basic building blocks of JS including:

  - data types

  - combine data types with operators

  - data structures to hold and access data

    
