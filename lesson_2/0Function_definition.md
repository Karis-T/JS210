# Defining Functions

**definition:** use a **function** instead of rewriting a chunk of code you find you may want to use a few times, you can extract the common code to one place and use the code from anywhere else in your program

you can **declare** functions in order to define them. Function declarations are made up of the following:

1. The `function` keyword
2. The name of the function - (an identifier than names the function and the variable that references the function)
3. a list of comma separated parameters (with 0 or more parameters)
4. a c block of statements; the function body (curly braces with 0 or more statements)

```js
function triple(number) {
  console.log('tripling in progress...');
  return number + number + number;
}

console.log(triple(5));		// logs 15
```

The `triple` function takes 1 parameter - `number` and has 2 statements inside its block
- The `return` statement specifies the value returned by the function
- The function invocation returns a value of `15` which is logged to the console using the `console.log()` method

**RULE:** if a function doesn't contain an explicit `return` statement, or the `return` statement contains no value, the function implicitly returns the value `undefined`. Functions are said to be "returned" rather than "finished execution"



## Parameters vs. Arguments

the terms often get mixed up between developers. Here are the breakdown of when to use what:

| If you are...           | Then you should use... |
| :---------------------- | :--------------------- |
| **Defining** a function | *parameters*           |
| **Invoking** a function | *arguments*            |



```js
function multiply(a, b) {
  return a * b;
}
```

here we say: the function`multiply` takes two *parameters* `a` and `b`. 



```js
multiply(5, 6);         // returns 30
```

actual values passed to a function during execution are called *arguments* 



```js
//function multiply(a, b) {
  return a * b;
//}
```

During execution, Javascript makes the arguments passed to a function available as local variables, which have the same name as the functions parameters. Within the function body, these local variables are also known as *arguments*



```js
// When we define the function, a and b are called parameters.
function multiply(a, b) {
  // When this code runs, they are called arguments.
  return a * b;
}

multiply(5, 6);  // 5 and 6 are also arguments
```

