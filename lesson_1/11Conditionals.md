# Conditionals

**definition:** Conditional statements are a set of commands that are triggered when a condition evaluates to true

In JS there are two supported conditional statements:

- `if...else`
- `switch`

## `if` / `else` statements

```js
let score = 80;

if (score > 70) {		// beginning block
  console.log('Congratulations, you passed!');	// expression
}	// ending block
```

1. In the code above the sentence "Congratulations you passed" will be logged to the screen
2. This is because `score > 70` is an expression that evaluates to the boolean `true`
3. since the conditional statement `if (score > 70)` evaluates to `true`, the block of code following the condition is executed
4. **RULE:** `{ console.log('Congratulations, you passed!'); }` is a block. A block groups statements together and is delimited by curly braces. Blocks may have 0 or more statements inside them 

**RULE:** `if` statements can have an optional `else` clause. `else` only executed when the `if` statement evaluates to `false`

```js
if (score > 70) {
  console.log('Congratulations, you passed!');
} else {
  console.log('Sorry, but you need to study more!');
}
```

**RULE:** if you'd like to test multiple conditions, you can have an `if` statement that follows an `else` statement. When there are multiple conditions, only the first one that evaluates to `true` is executed.

```js
if (condition1) {
  // statements
} else if (condition2) {
  // statements
} else if (conditionN) {
  // statements
} else {
  // statements
}
```

**RULE:** you can also next `if` statements inside each other but be careful as many levels of nested `if` statements can be hard to follow

```js
if (condition1) {
  if (nestedCondtion) {		 // nested if statement
    // statements
  } else {
    // statements
  }												// end of nested if statement
} else if (condition2) {
  // statements
}
```



## Truthy and Falsy

**RULE:** When the expression in an `if` statement doesn't evaluate to either a boolean `true` or `false`, JS will attempt to translate the result to a boolean value, to decide which block to execute.

**RULE:** there are only 6 possible falsy values including the boolean `false` and the below:

```js
if (false)        // falsy
if (null)         // falsy
if (undefined)    // falsy
if (0)            // falsy
if (NaN)          // falsy
if ('')           // falsy
```

**RULE:** any value that isn't one of the six values above is truthy:

```js
if (true)         // truthy
if (1)            // truthy
if ('abc')        // truthy
if ([])           // truthy
if ({})           // truthy
```

**RULE:** logical operators don't have to work with boolean values

```js
// With the logical operator the return values are such:
1 || 2;           // 1
1 && 2;           // 2

// Using the logical operator as a `condition` in an if statement
if (1 || 2)       // truthy
if (1 && 2)       // truthy
```



## Switch

**RULE:** `switch` statements compare multiple `case` labels. When the case label finds a match, the statements following it will be executed.  Unlike `if` statements, the `switch` statement will continue on to the next cases following it until it reaches a`default` clause or a `break` statement. We say that **execution "falls through" to the next case**

 ```js
 let reaction = 'negative';
 
 switch (reaction) {
   case 'positive':
     console.log('The sentiment of the market is positive');
   case 'negative':
     console.log('The sentiment of the market is negative');
   case 'undecided':
     console.log('The sentiment of the market is undecided');
   default:
     console.log('The market has not reacted enough');
 }
 
 // console output
 The sentiment of the market is negative
 The sentiment of the market is undecided
 The market has not reacted enough
 ```

**RULE:** to correct a `switch` statement from "falling through to the next case" we can add a `break` to each case statement:

```js
let reaction = 'negative';

switch (reaction) {
  case 'positive':
    console.log('The sentiment of the market is positive');
    break;
  case 'negative':
    console.log('The sentiment of the market is negative');
    break;
  case 'undecided':
    console.log('The sentiment of the market is undecided');
    break;
  default:
    console.log('The market has not reacted enough');
}

// console output
The sentiment of the market is negative
```



## Comparing Values with NaN

**RULE:** `NaN` is a special value in JavaScript that represents an illegal operation on numbers. It stands for "Not a Number". However `NaN` *is* a JavaScript number:

```js
console.log(Number('abc'));  // NaN
console.log(Math.sqrt(-1));  // NaN
console.log(undefined + 1);  // NaN
```

```js
console.log(typeof(NaN));    // number
```

**RULE:**  When we compare `NaN` with any value it evaluates to `false` this includes `NaN` itself as `NaN` is not equal to `NaN`. Since we can't use the usual comparison operators to compare `NaN` with other values, we can use `Number.isNaN`. This function returns `true` if a value is not a number, `false` otherwise:

```js
console.log(10 === NaN);     // false
console.log(10 < NaN);       // false
console.log(10 > NaN);       // false
console.log(NaN === NaN);    // false
```

```js
let foo = NaN;
console.log(Number.isNaN(foo));      // true
console.log(Number.isNaN('hello'));  // return false since `'hello'` is not NaN
```

