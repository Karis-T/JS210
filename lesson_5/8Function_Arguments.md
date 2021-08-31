# Working with Function Arguments

**RULE**: omitted arguments in Functions have a value of `undefined`

**RULE**: Functions ignore any excess arguments

**RULE**: You can handle an arbitrary number of arguments using 

- the traditional approach `arguments` object 
- the modern approach rest parameter `...` 



## The Traditional Approach

- **definition:** `arguments` object is an 'Array-like' structure local variable available to all Functions.

- **RULE**: the `arguments` object contains all arguments passed to a Function, regardless of:

  -  how many arguments were provided
  - how many arguments the Function definition includes  

  ```js
  function logArgs(a) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments.length);
  }
  
  logArgs(1, 'a');
  
  // logs:
  1
  a
  2
  ```

- **RULE**: `arguments` is considered array-like for the following reasons:

  - you can access argument values using bracket notation
  - `arguments` also has a `length` property

  ```js
  function logArgs() {
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
    arguments.pop();
  }
  
  logArgs(1, 2);
  
  // logs:
  object       // arguments is an "object"
  false        // but it is not an Array
  
  TypeError: Object <Object> has no method 'pop' 
  // and it doesn't have the usual Array methods
  ```

- **RULE**: `arguments` object differs from arrays by:

  - when passed to the `typeof` operator it returns `'object'`
  - returns `false` when used with the method `Array.isArray(arguments)`
  - cannot invoke any Array methods

- **RULE**: to create an Array from the `arguments` object use the following code:

  - The below code "borrows" the `slice` method from the `Array` global object
  - `slice` is applies to the `arguments` object and creates an Array containing the same values in `arguments`

  ```js
  let args = Array.prototype.slice.call(arguments);
  ```

### Functions that Accept Any Number of Arguments

- **RULE**: you can write a function that takes any number of arguments by not listing any parameters at all
- The below is confusing to understand and is an inherent weakness of the `arguments` object and should only be used when dealing with an arbitrary number of arguments

```js
function sum() {
  let result = 0;
  for (let index = 0; index < arguments.length; index += 1) {
    result += arguments[index];
  }

  return result;
}


sum();                 // 0
sum(1, 2, 3);          // 6
sum(1, 2, 3, 4, 5);    // 15
```



## The Modern Approach

- **definition:** introduced **rest parameters**, which is three periods `...` followed by an array name

- **RULE:** rest parameters tells JS to expect an arbitrary amount of arguments (0 or more) and place them in an array specified by the name

- **RULE:** rest parameter is a genuine array and is not Array-like compared to the traditional approach

  - The name isn't fixed and you can use any name except for `arguments` (which refers to the Arguments object) 
  - Use rest parameters instead of `arguments` object 

  ```js
  function logArgs(...args) {
    console.log(args[0]);
    console.log(args[1]);
    console.log(args.length);
  }
  
  logArgs(1, 'a');
  
  // logs:
  1
  a
  2
  ```

  
