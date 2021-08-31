# Data Types

Primitive data types:

- number
- boolean
- string
- null
- undefined
- symbols (ES6) - not discussed in this course
- big integers (ES9) - not discussed in this course

Compound data types:

- object

use the `typeof` operator to return a string of the data type:

```js
typeof 1.2;        // "number"
typeof 'hello';    // "string"
typeof false;      // "boolean"
typeof undefined;  // "undefined"
typeof { a: 1 };   // "object"
typeof [1, 2, 3];  // "object" (yes: an array is an object)
typeof null;       // "object" (null both is and isn't an object)
```

- `array` is an object in JS
- `null` has a bug that originated when it was first developed, with existing code relying on this bug to exist otherwise it would break those programs

## Number

For the Number primitive type JS uses Double Precision Floats which:

>uses a floating point system to represent all numbers. 
>
>```js
>1234.60
>0.12324324
>1
>-3.14
>```
>
>Floating point values cannot precisely represent values which is true for all languages that store numbers like this. Floating points create slight discrepancies or rounding errors when returning results. For example:
>
>```js
>0.1 + 0.2;    // returns 0.30000000000000004, not 0.3!
>```
>
>- **avoid fractional numbers as much as you can:** 
>  - use an integer number of the smallest relevant units
>  - if you're working with financial numbers, represent the amount in cents. (50 cents instead of 0.5 dollars)
>  - If you're working with time duration, use seconds instead of hours (90 seconds instead of 1.5 minutes)

- **the max integer** that can be stored is: `9,007,199,254,740,991`
  - you can retrieve this value using the `Number.MAX_SAFE_INTEGER` method

- **The max numeric value** stored is: `1.7976931348623157e+308`

  - you can retrieve this value using the `Number.MAX_VALUE` method
  - any number greater than the above is classified as `Infinity`

- numbers support standard **arithmetic operations:**

  - addition `+`
  - subtraction `-`
  - multiplication `*`
  - division `/`

- **special number values** include:

  - `Infinity`: a number that is greater than any other number.

  - `-Infinity`: a number that is less than any other number.

  - `NaN`: "not a number." `NaN` is returned when there's an error in a Math function:

    ```js
    2 / 0;            // Infinity
    Math.sqrt(-1);    // NaN
    ```

## Boolean

Represents truth logic and there are only two possible values: 

- `true` 
- `false`

Comparison operators return Boolean values:

```js
2 > 1;            // true
0 === 0;          // true
1 > 3;            // false
```

## String

Strings are sequences of characters and how text is represented in JS:  

```js
'Hello, world'
"Hello, world"
'asdac ca,!'
'c'
'45'
''
'©2016 Flambé, Inc.'
```

- JS strings have **no size limit** and contains any amount of text

- use either single or double quotes for strings. There is no distinction between the two unlike other programming languages

- concatenation is used to join 2 strings together using the `+` operator:

  ```js
  'Hello' + ', World';    // "Hello, World"
  ```

## Capitalization

- whether a capitalized data types are capitalized or not is generally not important and can be used interchangeably at this point 

