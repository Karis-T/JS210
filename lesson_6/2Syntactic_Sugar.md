# Modern JS: Syntactic Sugar

ES6 introduced several shorthand notations that are handy when working with objects and arrays

## What to Focus On

- You will encounter short hand notation but you don't have to use it in your code
- you're not expected to master the different shorthand's so no need to memorize all the details
- should be able to recognize them when they're encountered

## Concise Property Initializers

```js
function xyzzy(foo, bar, qux) {
  return {
    foo: foo,
    bar: bar,
    qux: qux,
  };
}
```

**RULE:** if you need to initialize an object from a bunch of variables that use the same name you can use a new concise syntax:

```js
function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    qux,
  };
}
```

- here we use the name of the property we want to initialize and JS will look for a variable with the same name to use an initial value
- You can mix concise notation with ordinary initializers:

```js
function xyzzy(foo, bar, qux) {
  return {
    foo,
    bar,
    answer: qux, //created a property answer for the qux variable
  };
}
```

- for more information see the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Concise Methods

```js
let obj = {
  foo: function() {
    // do something
  },

  bar: function(arg1, arg2) {
    // do something else with arg1 and arg2
  },
}
```

**RULE:** if you need to initialize an object that has a function you can eliminate the `:` and the word `function`

```js
let obj = {
  foo() {
    // do something
  },

  bar(arg1, arg2) {
    // do something else with arg1 and arg2
  },
}
```

- Again you can mix concise notation with the classic syntax but try to use a consistent style with each object definition
- for more information see the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Object Destructuring

```js
let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

let foo = obj.foo;
let bar = obj.bar;
let qux = obj.qux;
```

**RULE:** You can perform tedious multiple assignments in a single expression using object destructuring:

- The code above resembles the code below
- The order of the names between the braces isn't important
- You can omit names you don't need

```js
let obj = {
  foo: "foo",
  bar: "bar",
  qux: 42,
};

let { foo, bar, qux } = obj;
// variable qux is assigned obj.qux
// variable foo is assigned obj.foo
// variable bar is assigned obj.bar
```

- You can use different names for the result:

```js
let { qux: myQux, foo, bar } = obj;
// we create a myQux variable that recieves the value of obj.qux
```

- You can destructure function parameters:

```js
function xyzzy({ foo, bar, qux }) { // desctructuring
  // pulls out properties and store them in local variables
  console.log(qux); // 3 
  console.log(bar); // 2
  console.log(foo); // 1
}

let obj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

xyzzy(obj);
```

- In this code we pass an object to the function. The function's definition uses destructuring to pull out the needed properties and store them in local variables
- If you want to use destructuring on assignments you need to enclose the expression in parentheses as JS may mistake it for a block

```js
let obj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

{ foo, bar, qux } = obj; // SyntaxError
({ foo, bar, qux } = obj);
```

- for more info, see the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)

## Array Destructuring

```js
let foo = [1, 2, 3];

let first = foo[0];
let second = foo[1];
let third = foo[2];
```

**RULE:** You can also perform tedious multiple assignments in a single expression using array destructuring:

```js
let foo = [1, 2, 3];
let [ first, second, third ] = foo;
```

- if you don't need all the elements you can skip them:

```js
let bar = [1, 2, 3, 4, 5, 6, 7];
let [ first, , , fourth, fifth, , seventh ] = bar;
```

- You can also perform multiple assignments in a single expression:

```js
let one = 1;
let two = 2;
let three = 3;

let [ num1, num2, num3 ] =  [one, two, three];
// destructuring syntax			// literal array syntax
console.log(num1);   // 1
console.log(num2);   // 2
console.log(num3);   // 3
```

- swap the value of 2 variables:

```js
let one = 1;
let two = 2;

[ one, two ] =  [two, one];

console.log(one);   // 2
console.log(two);   // 1
```

- use rest syntax to assign a variable to the rest of an array:

```js
let foo = [1, 2, 3, 4];
let [ bar, ...qux ] = foo;
console.log(bar);   // 1
console.log(qux);   // [2, 3, 4]
```

## Spread Syntax

```js
function add3(item1, item2, item3) {
  return item1 + item2 + item3;
}

let foo = [3, 7, 11];
add3(foo[0], foo[1], foo[2]); // => 21
```

**RULE:** use the **spread syntax** `...` to spread the elements of an array or object into separate items:

- while you can use `add3.apply(null, foo);` there's an easier way and can replace the `apply` method:

```js
function add3(item1, item2, item3) {
  return item1 + item2 + item3;
}

let foo = [3, 7, 11];
add3(...foo); // => 21
```

 common use cases for the spread syntax on Arrays:

1. Create a clone of an array

```js
let foo = [1, 2, 3];
let bar = [...foo];
console.log(bar);         // [1, 2, 3]
console.log(foo === bar); // false -- bar is a new array
```

2. Concatenate Arrays

```js
let foo = [1, 2, 3];
let bar = [4, 5, 6];
let qux = [...foo, ...bar];
qux;  // => [1, 2, 3, 4, 5, 6]
```

3. Insert an array into another array

```js
// Insert an array into another array
let foo = [1, 2, 3]
let bar = [...foo, 4, 5, 6, ...foo];
bar; // => [1, 2, 3, 4, 5, 6, 1, 2, 3]
```

Spread also works with objects:

1. Create a clone of an object

```js
let foo = { qux: 1, baz: 2 };
let bar = { ...foo };
console.log(bar);         // { qux: 1, baz: 2 }
console.log(foo === bar); // false -- bar is a new object
```

2. Merge objects

```js
let foo = { qux: 1, baz: 2 };
let xyz = { baz: 3, sup: 4 };
let obj = { ...foo, ...xyz };
obj;  // => { qux: 1, baz: 3, sup: 4 }
```

- **RULE:** Don't use the spread syntax when you need to duplicate objects that inherit from some other object
  - You lose the object prototype
  - spread only returns the properties that `Object.keys` returns
  - it only returns enumerable "own" properties 

- for more info see the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Rest Syntax

- **RULE:** Rest is sort of like the opposite of spread. Instead of spreading an array / object out into separate items, it collects multiple items into an array / object
- rest syntax must be the last item in any expression that uses rest syntax
- rest syntax is mostly used when working with functions that take an arbitrary number of arguments
- collecting the remaining elements into another variable using array destructuring

```js
let foo = [1, 2, 3, 4];
let [ bar, ...otherStuff ] = foo;
console.log(bar);        // 1
console.log(otherStuff); // [2, 3, 4]
```

- use rest syntax with objects destructuring:

```js
let foo = {bar: 1, qux: 2, baz: 3, xyz: 4};
let { bar, baz, ...otherStuff } = foo;
console.log(bar);        // 1
console.log(baz);        // 3
console.log(otherStuff); // {qux: 2, xyz: 4}
```

- use rest instead of arguments object inside functions:

```js
function maxItem() {
  let maximum = arguments[0];
  [].forEach.call(arguments, value => {
    if (value > maximum) {
      maximum = value;
    }
  });

  return maximum;
}

console.log(maxItem(2, 6, 10, 4, -3));
```

- `arguments` is not an array -- it's an array-like object 
  - we need to use the messy `[].forEach.call` syntax to iterate over `arguments` (we could also use an ordinary `for` loop). 
  - the function's parameter list doesn't indicate that it takes arguments, hurting readability.

```js
function maxItem(first, ...moreArgs) {
  let maximum = first;
  moreArgs.forEach(value => {
    if (value > maximum) {
      maximum = value;
    }
  });

  return maximum;
}

console.log(maxItem(2, 6, 10, 4, -3));
```

- For more info see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## Summary

- don't have to use these syntax shortcuts in your code
- must be familiar with these shortcuts
- expect to see these shortcuts show up through the LS curriculum

