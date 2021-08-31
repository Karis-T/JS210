# Introduction to Objects

JS is an OOP language and we use objects to organize code and data. Usually values and the functions that operate on them are a part of the same object



## Standard Built-in Objects

JS provides many built in objects including but not limited to:

- `String`
- `Array`
- `Number`
- `Math`
- `Date`
- and more

**RULE:** When you apply `toUpperCase` on a string primitive,  you are invoking the method `toUpperCase` on the built-in `String` object:

```js
'hi'.toUpperCase();     // "HI"
```

**RULE:**  you cannot call methods on primitive values so JS temporarily coerces them into their object counterpart when it is needed.

**RULE:** `null` and `undefined` have no built in object counterpart

#### Primitive Coercion Breakdown

```js
let a = 'hi'; 
typeof a; // "string"
```

1. Create a primitive string with value `"hi"`

2. the above returns `"string"`; This is a primitive string value

```js
let stringObject = new String('hi');
typeof stringObject // "object"
```

3. Create a string object
4. the above returns "object"; This is a `String` object

```js
a.toUpperCase();                     // "HI"
stringObject.toUpperCase();          // "HI"
typeof a;                            // "string"
typeof stringObject;                 // "object"
```

5. `typeof a` returns `"string"` The coercion is only temporary

**RULE:** With coercion we don't have to keep explicitly creating the object version of strings numbers and other primitives in order to use methods on them



## Creating Custom Objects

```js
let colors = {
  red: '#f00',
  orange: '#ff0',
};

typeof colors; // "object"
colors.red		 // "#f00"
colors.orange  // "#ff0"
```

**RULE:** you can create your own objects using:

- object literal notation as above
- object constructor function `new String('foo')`
- `Object.create` method



## Properties

**RULE:** objects are containers for two things: 

- data: 
  - named items with values (keys)
  - values are the attributes of an object
  - The  association between key and values are called **properties**
- behavior:
  - methods

**RULE:** To get the value of an object property, append a single dot to followed by the property name to the objects name:

```js
let animal = 'turtle';
animal.length;          // 6

let colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.red;             // "#f00"

'blue'.length;          // 4 - works with primitives too
```

**RULE:** set a new value for a property with assignment:

```js
let count = [0, 1, 2, 3, 4];
count.length = 2;

let colors = {
  red: '#f00',
  orange: '#ff0',
};

colors.blue = '#00f';
```



## Methods

**RULE:** when functions are apart of an object we call them methods and they define the behavior of an object. 

**RULE:** Methods are properties. To invoke a method on an object you access the method just like you would with a property except you append parentheses which you can pass arguments to:

 ```js
 (5.234).toString();       // "5.234"
 'pizza'.match(/z/);       // [ "z", index: 2, input: "pizza" ]
 Math.ceil(8.675309);      // 9
 Date.now();               // 1467918983610
 ```

**RULE:** use trailing commas for multi-line object literals: 

```js
// method on last line
let myObj = {
  prop1: 'sample data',
  prop2: 'sample data',
  method1: function () {},
};
```

benefits of using trailing commas:

1. allows you to reposition the contents of the object literal more easily
2. running `git diff` without a trailing commas adding a property shows up as 2 lines of changes

**RULE:** for simple one line literals you don't need a trailing comma:

```js
let coordinates = { x: 25, y: 50 };
```

### Compact method notation

**RULE:** Compact Method syntax introduced in ES6 which allows you to simplify syntax instead of writing the property name, a colon and a function expression:

From this:

```js
let myObj = {
  foo: function (who) {
    console.log(`hello ${who}`);
  },

  bar: function (x, y) {
    return x + y;
  },
};
```

To this: (LS Reccomended)

```js
let myObj = {
  foo(who) {
    console.log(`hello ${who}`);
  },

  bar(x, y) {
    return x + y;
  },
};
```

### Arrow Function and Methods

**RULE:** While it is safe to use arrow functions in the body of a method, don't use arrow functions to define a method; their behavior makes them unsuitable

## Capitalization

NOTE: none of these guidelines are enforced so don't stress if you get it wrong

use the following rules when deciding whether or not to use capitals like `String` and `Object` or lowercase string and object:

**Use lowercase when:**

- you are talking about primitive types (string, number boolean)
- you are talking about objects, arrays etc in general use

**Use capitalization when:**

- you are referring to the object version of a primitive
- you are referring to the methods and properties of the `Object` `Array` class (JS doesn't have true classes)
- you are referring to OO JS functions and prototype objects. This is the only guideline that must be enforced.
