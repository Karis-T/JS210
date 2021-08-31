# Flow Control

Flow control is having your data take the path you intended to travel in a program

## Conditionals

A conditional gives us a fork or multiple forks in the road

- usually a combo of `if` statements coupled with comparison or logical operators
- similar to ruby syntax we use `if`, and `else if`

```js
let a = prompt('Enter a number');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
 	console.log("a is neither 3, nor 4");   
}
```

**RULE:** prompt returns a string value so variable `a` is referencing a string. 

`if` statements can also be written in many ways:

1. simple `if` statement

   ```js
   if (x === 3) {                  
     console.log("x is 3");
   }
   ```

2.  using `if` and `else`

   ```js
   if (x === 3) {            
     console.log("x is 3");
   } else {
     console.log("x is NOT 3");
   }
   ```

3. You don't need a block when the `if` or `else` clause contains a single statement or expression:

   ```js
   if (x === 3) console.log("x is 3");
   ```

   ```js
   if (x === 3)                          
     console.log("x is 3");
   ```

   ```js
   if (x === 3)                    
     console.log("x is 3");
   else
     console.log("x is NOT 3");
   ```

4. Nested `if` statements

   ```js
   if (x === 3) {                
     console.log('x is 3');
   } else {
     if (x === 4) {
       console.log('x is 4');
     } else {
       console.log('x is NOT 3 or 4');
     }
   }
   ```

5. you can omit blocks with `else if` statements

   ```js
   if (x === 3) {                      
     console.log("x is 3");
   } else if (x === 4) {
     console.log("x is 4");
   } else {
     console.log('x is NOT 3 or 4');
   }
   ```

**REMEMBER:**  Blocks make your code more readable and reliable.

## Comparisons

as with ruby, comparison operators always return a boolean value: `true` or `false`. 

```js
3 (operand) < (operator) 5 (operand)
```

#### `===` strict equality operator (identity operator):

returns `true` if operands have the same **type and value**, `false` otherwise: 

```js
5 === '5'
=> false

'' === 0
=> false
```

#### `!==` strict inequality operator:

returns `false` if operands have the same **type and value**, `true` otherwise

```js
5 !== '5'
=> true
```

#### `==` loose equality operator:

attempts to coerce one of the operands into the others type before comparison (may coerce both sometimes). Returns `true` when final **values** are the same, `false` otherwise:

```js
5 == '5'
=> true

'' == 0
=> true
```

#### `!=` loose inequality operator

attempts to coerce one of the operands into the others type before comparison (may coerce both sometimes). Returns `true` when final **values** are not the same, `false` otherwise:

```js
5 != '5'
=> false

'' != 0
=> false
```

>The rules that govern which operand `==` and `!=` coerces to the other are complex and difficult to remember. Avoid these operators when you can.

#### `> < >= and <=` are all the same Ruby except... 

Be careful with strings!!

```js
"42" < "402"
=> false

"42" < "420"
=> true

"42" < 420
=> true
```

**RULE:** When comparing strings the comparison is character by character left to right.

**RULE:** strings are identical except for length, shorter strings are considered less than longer strings

## Logical Operators

#### ! not, && and, || or are the same in ruby except!

**RULE:** `&&` and `||` don't always return `true` or `false` but they do when they operate on boolean values.

## Short Circuits

**short circuit evaluation:** exactly the same as Ruby, JS terminates the entire expression as soon as it knows that `&&` will return `false` and `||` will return `true`

## Truthiness

**RULE:** JavaScript can coerce any value into a Boolean value

```js
a = 5
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

b = 0
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
```

- in the above example, JS coerces the `5` to `true` and `0` to `false` 

**RULE:** JS evaluates the following as `false` or **falsy**:

- `false`
- The number `0`. This includes all 3 variations of zero in JavaScript:
  - `0`: The ordinary zero value.
  - `-0`: A negative zero. That's mathematical nonsense, but a real thing in JavaScript.
  - `0n`: The `BigInt` version of zero.
- An empty string (`''`)
- `undefined`
- `null`
- `NaN`

be careful!

```js
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);			=> 'Not Empty'
```

>The output is `Not Empty` since, while the array is empty -- it has no elements and the `length` property is `0` -- it isn't falsy. Thus, JavaScript executes the first branch of the `if` statement.

**RULE:** Everything else (aside from the above) evaluates to `true` or **truthy**

**RULE:** As with ruby, avoid using assignments in conditionals

**RULE:** logical operators return the last evaluated operand when it comes to truthy and falsy values:

```js
3 && 'foo'  // last evaluated operand is 'foo'
=> 'foo'
'foo' && 3  // last evaluated operand is 3
=> 3
0 && 'foo'  // last evaluated operand is 0
=> 0
'foo' && 0  // last evaluated operand is 0
=> 0

 3 || 'foo'  // last evaluated operand is 3
=> 3
 'foo' || 3  // last evaluated operand is 'foo'
=> 'foo'
 0 || 'foo'  // last evaluated operand is 'foo'
=> 'foo'
 'foo' || 0  // last evaluated operand is 'foo'
=> 'foo'
 '' || 0     // last evaluated operand is 0
=> 0
```

use ternary operators/if statements instead of logical operators in assignment:

```js
let foo = null;
let bar = 'qux';
let isOk = foo || bar;		//awkward
```

```js
let isOk = (foo || bar) ? true : false; //better
 
let isOk;																//also good
if (foo || bar) {
  isOk = true;
} else {
  isOk = false;
}
```

as with ruby `!!` converts a truthy/falsy value into its boolean equivalent

>In reality, `!!` isn't a separate operator in JavaScript. Instead, it's two consecutive `!` operators. The expression `!!a` is equivalent to writing `!(!a)`. The inner `!` converts the value of `a` to `false` if it is truthy, or `true` if `a` is falsy. The outer `!` then flips `true` to `false` or `false` to `true`. In the end, we end up with a boolean value instead of a truthiness value:

```js
!!3				=> true
!!''			=> false
```

## Operator Precedence

The same as Ruby:

The following is a list of the comparison operations from the highest precedence (top) to lowest (bottom).

- `<=`, `<`, `>`, `>=` - Comparison
- `===`, `!==`, `==`, `!=` - Equality
- `&&` - Logical AND
- `||` - Logical OR

Use parentheses to override precedence and make your intention more known as a developer:

```js
if ((x || y) && z) {
  // do something
}
```

be careful with short circuiting!

## The Ternary Operator

The same as ruby:

**RULE:** The entire structure of a ternary operator is an expression and can be treated as a value and assign it to variables pass it as an argument and so on.

**RULE:** if/else are statements and therefore cannot capture its result to a variable:

```js
let message = true ? 'this is true' : 'this is not true'
						=> undefined
message			=> 'this is true'

console.log(false ? 'this is true' : 'this is not true')
this is not true
=> undefined
```

## Switch Statement

quite different to ruby's `case` statements but it has the same intent. Switch statements evaluate an expression and compares its value to the value in each `case` clause. 

```js
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
} // => a is 5
```

**RULE:** switch statements compares a single value against multiple values using **strict equality.** Whereas `if` can test multiple expression with any condition.

**RULE:** If none of the expressions match the `default` clause is used (like `else`).

**RULE:** Without a `break` statement, when there is a match, execution "falls through" to the next `case` clause. usually you want to avoid this

Sometimes its appropriate to use fall-throughs:

```js
let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7");
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}
```

## Summary

to control the flow of execution we covered: 

- Booleans
- comparisons
- conditionals
