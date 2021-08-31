# More Stuff

## Variables as Pointers

### Primitive Values

```js
let count = 1;
count = 2;
```

>On line 1, we declare a variable named `count`, and initialize it to a value of `1`, which is a primitive value. Line 2 reassigns `count` to a new primitive value, `2`.

>every time a JavaScript program creates a new variable, JavaScript allocates a spot somewhere in its memory to hold its value. With (most) primitive values, the actual value of the variable gets stored in this allocated memory.

![Primitive values and variables](https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-primitive-values.png)

>Every time the code on line 1 runs, JavaScript creates a brand new variable. If that code is in a function that gets called many times, you may end up with many different `count` variables, all stored in different locations in memory. JavaScript discards these variables and their values when it no longer needs them.

```js
> let a = 5
> let b = a
> a = 8
> a
= 8

> b
= 5
```

>variables that have primitive values store those values at the memory location associated with the variable. In our example, `a` and `b` point to different memory locations. When we assign a value to either variable, the value gets stored in the appropriate memory location. If you later change one of those memory locations, it does not affect the other memory location, even if they started off with the same value. Therefore, the variables are independent when they contain primitive values.

### Objects & Non-Mutating Operations

>creating new variables causes JavaScript to allocate a spot somewhere in its memory for the value. However, with objects, JavaScript doesn't store the value of the object in the same place. Instead, it allocates additional memory for the object, and places a pointer to the object in the space allocated for the variable. Thus, we need to follow two pointers to get the value of our object from its variable name.

```js
let obj = { a: 1 };
obj = { b: 2 };
obj.c = 3;
```

![Objects and variables](https://d186loudes4jlv.cloudfront.net/javascript/images/vars-with-objects.png)

>While the pointer to the object can change, `obj` itself always has the same address. In the above table, we can see that `obj`'s address doesn't change, but its value changes to the address of the object currently assigned to the variable.

>You cannot mutate a primitive value since they are immutable. Two variables can have the same primitive value. Since primitive values are stored in the memory address allocated for the variable, they can never be aliases. If you give one variable a new primitive value, it doesn't affect the other.

### Gotcha

```js
let g = ['a', 'b', 'c']
let h = g
g[1] = 'x'
g	=> [ 'a', 'x', 'c' ]
h	=> [ 'a', 'x', 'c' ]
```

since `g` and `h` are pointing to the same object the mutation occurs in both variables

### Takeaway

- JS stores primitive values in variables
- uses pointers for non-primitive values like arrays and other objects
- Pointers can lead to unexpected behavior when 2 or more variables reference the same object. Primitives don't have this problem.
- With pointers Some operations mutate objects and others don't 

## `for/in` & `for/of`

there are 2 variants for the `for` loop:

- the `for/in` loop (old and available in many JS versions)

  - iteration over all enumerable properties of an object including inherited from another object

    ```js
    let obj = { foo: 1, bar: 2, qux: 'c' };
    for (let key in obj) {
      console.log(key);
    }
    // Output:  foo
    //          bar
    //          qux
    ```

    ```js
    let arr = [ 10, 20, 30 ]
    for (let index in arr) {
      console.log(arr[index]);
    }
    // Output:  10
    //          20
    //          30
    ```

- and the `for/of` loop (added in ES6)

  - iteration over the value for any "iterable" collection - this includes arrays and strings

    ```js
    let str = "abc";
    for (let char of str) {
      console.log(char);
    }
    // Output: a
    //         b
    //         c
    ```

    

## Method Chaining

Like ruby, you can call a method on the return value of another method. 

```js
let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names); // => HANSON, PETE
```

a variation:

```js
let str = 'Pete Hanson';
let names = str.toUpperCase()
               .split(' ')
               .reverse()
               .join(', ');
console.log(names); 
```

## Regex

Like ruby, JS supports **regex**  string matching regular expressions. JS creates RegExp objects to store regex and can invoke methods too.

The `test` method returns a boolean value based on if the string argument matches the regex pattern:

```js
/o/.test('bobcat')	=> true
/l/.test('bobcat')	=> false
```

the `match` method returns an array of all matched characters. If no match happens it returns `null`. The `/g` flag is a global match which allows the return value to return an array of all matching substrings

```js
"bobcat".match(/x/)         // No match
=> null
"bobcat".match(/[bct]/g)    // Global match
=> [ 'b', 'b', 'c', 't' ]
"bobcat".match(/b((o)b)/)   // Singular match with groups
=> [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]
```

When `/g` isn't present, an array is returned with the following:

- `index`: the index within the string where the match begins
- `input`: a copy of the original string
- `groups`: used for "named groups" 

 Additional elements (`ob` and `o` in the example) represent capture group matches. Parentheses inside a regex define capture groups.

because this method returns a falsy value if there was no match we can do the following:

```js
function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    // a null return value from match is falsy
    console.log('No match here.');
  }
}

has_a_or_e("basketball"); // => We have a match! a,e,a
has_a_or_e("football");   // => We have a match! a
has_a_or_e("hockey");     // => We have a match! e
has_a_or_e("golf");       // => No match here.
```

`test` is more efficient than `match`

use `indexOf` or `includes` for string matching problem for simpler substrings

## The Math Object

JS has a `Math` object gives us numerous methods to work with when you need to make more mathematical computations:

```js
Math.sqrt(36)		=> 6
Math.sqrt(2)		=> 1.4142135623730951
Math.PI					=> 3.141592653589793
```

## Dates

JS `Date constructor creates objects representing time and date. These object also give you methods that let you work with those values:

```js
let date = new Date('December 25, 2012')
date.getDay()
=> 2	//tuesday (0 == sunday, 1 == monday and so on)
```

  to get a day name of the week requires more setup:

```js
function getDayOfWeek(date) {
  let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date)); // => Tuesday
```

>These days, you can use the `toLocaleDateString` method of the `Date` type. It's a bit awkward to use, but it has multi-language support and a host of other features. Full support may be lacking in some browsers.

## Exceptions

Unlike most languages, JS doesn't issue error messages in situations that most would. Instead it "fails silently" and returns values like `NaN`, `undefined`, `null`, or even `-1`

Not all errors are silent and JS will raise an error / throw an exception. Reserved words like `try`, `catch` and `finally` control **exception handling** in JS. 

**definition of exception handling:**

> Exception handling is a process that deals with errors in a manageable and predictable manner. It uses the `try/catch` statement to catch exceptions that the code in the `try` block raises, and lets the programmer deal with the problem in a way that makes sense and perhaps prevents a catastrophic failure or nasty bug.

```js
try {
  // perform an operation that may produce an error
} catch (exception) {
  // an error occurred. do something about it.
  // for example, log the error
} finally {
  // Optional 'finally' block; not used often
  // Executes regardless of whether an exception occurs.
}
```

```js
function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }

  // we're guaranteed to have a number here
}
```

> The `throw` keyword raises an exception based on the type of argument. In this case, we use a `TypeError`, to indicate that we were expecting a different type for the `number` argument.

**REMEMBER!**: Exceptions are for exceptional standards, so don't raise them for preventable conditions. 

use them when:

- You can't connect to a remote site in a web application. 

### Syntax Errors

> `SyntaxError` is special in that it occurs immediately after loading a JavaScript program, but before it begins to run. 

Unlike a `TypeError` exception thats based on runtime conditions, JavaScript detects syntax errors based solely on the text of your program. 

Since they are detected before execution begins, you can't use a `try/catch` statement to catch one.

```js
console.log("hello");

function foobar()
  // some code here
}

foobar();
```

raises the exception:

```
}
^
SyntaxError: Unexpected token '}'
```

Since the `SyntaxError` gets raised before the program starts running, the `console.log` on line 1 never gets executed. In addition, the `foobar` function never gets invoked. As soon as JavaScript spots the error, it raises the `SyntaxError` exception.

3 takeaways from Syntax Errors, 

- has nothing to do with the value of your variables
- they can occur long after the point where the error was
- The code before and after the error isn't run. This is because the syntax error is detected before  a program begins running. This implies there are 2 phases during the program: The prelim phase that checks for syntax errors and an execution phase.

Sometimes JS can throw an error when program begins running:

```js
JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0
```



## Stack Traces

```
TypeError: Cannot read property 'length' of undefined
    at names.forEach (repl:2:42)
    at Array.forEach (<anonymous>)
```

The above is a stack trace: The location and type of error that occurred, and how it got there. 

Its called a stack trace because each time a program calls a function, JS adds info regarding current program location on top of the call stack. When the program finishes running the function, it removes an item form the top of the call stack and uses it to return to the invocation. 

The stack trace is a "readable version" of the call stacks content at the point an exception occurred.   

```js
function foo() {
  console.log(bar);
}

foo();
```

by running the code above the following error is thrown:

```
Thrown:
ReferenceError: bar is not defined
    at foo (repl:2:15)
```

- JS has raised a `ReferenceError` exception, as the variable `bar` doesn't exist when you try to write it to the log. The error was detected at character `15` on line `2` within the `foo` function.

>If your program uses libraries like Handlebars and jQuery, the stack trace may contain hundreds of lines.

## E6 and Beyond

`let` and `const` keywords are a part of ES6 - aka Modern Javascript or ES2015.

Before ES6, JS didn't have block scopes, JS variable were either locally scoped in a function or globally scoped to the program.

Arrow functions was also introduced to ES6 which solves the problem of context loss (lost execution content)

ES6 also allowed the language to be more expressive, secure and easier to use. 

ECMA is an evolving language. This means that some JS environment may not be up to date and lack recent features. **Babel** is an example

