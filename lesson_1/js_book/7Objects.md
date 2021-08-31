# Objects

Objects are complex data structures similar to arrays

## What Are Objects?

just like ruby hashes, objects have sets of key/value pairs with each item in the collection has a name (key) and an associated bit of code (value)

### keys & values

**RULE:** An objects keys are always strings but the value can be any datatype

```js
1
'1'
undefined
'hello world'
true
'true'
```

**RULE:** All values listed above are valid keys however JS coerces non-string key values into strings. this means 1 and '1' will become the same key and override previous keys. be careful! 

to create an object use **object literal** syntax commas on the last key/value pair are optional:

```js
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};
// or
let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }
```

**RULE:** We typically omit the quotes of a key when it has alphanumeric characters and underscores

**RULE:** We can access a value in an object in 2 ways:

1. dot notation `person.name`
2. bracket notation `person['age']`

**RULE:** If you have a variable that contains a key's name, you MUST use bracket notiation:

```js
let key = 'name'
person[key]
```

We can assign key value pairs to the object using similar notation:

```js
person.height = '5 ft'				=> '5 ft'
person['gender'] = 'female'		=> 'female'

person => { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'], height: '5 ft', gender: 'female' }
```

**RULE:** use the `delete` keyword to remove a key/value pair. It returns `true` if the deletion was a success:	

```js
delete person.age		    	=> true
delete person['gender']		=> true
delete person['hobbies']	=> true
person										=> { name: 'Jane', height: '5 ft' }
```

**RULE:** key/value pairs are also called properties in JS. property is also referred to a keys name

**RULE:** As with arrays you can't assign a constant variable to a new value (what it points to), but you can mutate/modify the objects properties / values:

 ```js
 const MyObj = { foo: "bar", qux: "xyz" }
 MyObj.qux = "hey there"
 MyObj.pi = 3.1415
 MyObj => { foo: 'bar', qux: 'hey there', pi: 3.1415 }
 MyObj = {} // Uncaught TypeError: Assignment to constant variable.
 ```

**RULE:** Like arrays use`Object.freeze`  if you want to make `const` object elements immutable. Bear in mind it only works one level deep:

```js
const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
MyObj.qux = "hey there"
MyObj			=> { foo: 'bar', qux: 'xyz' }
```

## Objects vs. Primitives

**primitives:**

- strings
- numbers
- booleans
- `null`
- `undefined`
- bigints
- symbols

**objects:**

- simple objects (like ruby hashes)
- arrays
- dates
- functions

**RULE:** Objects are complex values that are composed of primitive values or other objects

**RULE:** object are usually (but not always) mutable. You can modify their various component values

**RULE:** Primitive values are immutable  - don't have changeable parts. They're atomic, meaning indivisible. If a variable contains a primitive value it can only:

- can be used in an expression
- can be reassigned yielding a new value altogether
- all operations on these values evaluate as new values (they're not modified)

### What isn't objects nor Primitives?

- variables and other identifiers like function names
- statements `if`, `return`, `try`, `while`, `break`
- keywords `new`, `function`, `let`, `const`, `class`
- comments
- anything else that isn't a data nor function

## Prototypes

**RULE:** JS objects can inherit from other objects. When object `a` inherits from object `b`, `b` is the prototype of `a`. `a` now has access to properties defined on `b`

**RULE:** prototypes implement inheritance in JavaScript 

**RULE:** to create a new object that inherits from an existing object we use the `Object.create` method.  `Object.create` is one way to use inheritance in JavaScript:

```js
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // => 'Bob'
```

>On line 2 `Object.create` creates a new object and sets the prototype for that object to the object passed in as an argument. Our example creates a new object named `studentBob` that uses `bob` as its prototype. That is, it creates an inheritance relationship from `studentBob`, the **child** object, to `bob`, the **parent** object.
>
>Since `studentBob` inherits from `bob`, we can use the `name` property even though `studentBob` doesn't explicitly define it.

## Iteration

### The `for`/`in` loop

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}                             // outputs Bob
                              //    		 30
                              //    		 6 ft
```

**RULE:** `for/in` loops are easier to understand. It doesn't need an initializer, ending condition, or increment clause. The loop iterates over all the keys in the object. In each iteration, it assigns the key to a variable which you then use to access the object's values. 

>In the above example, we iterate over the `person` object using the `for/in` loop. Line 7 declares a variable `prop` which, in each iteration, receives a key from the object until the object runs out of key-value pairs. We use `prop` inside the loop body to access and log the corresponding value.

**RULE:** be careful! `for/in` iterates over the properties of an object's prototype as well!

```js
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}         // => 3
          //    4
          //    1
          //    2
```

The first two items output by the above code are the "own properties" of `obj2`, and those are followed by the properties of the prototype object (`obj1`).

**RULE:** to limit the iteration of the objects own properties (the ones it defined for itself) use the `hasOwnProperty` method to get around this problem. It takes the name of the property and returns `true` if the property name belongs to the calling object, `false` otherwise:

```js
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
} // => 3
  //    4
```

You can do strange things like the below:

```js
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
```

### `Object.keys`

**RULE:** returns an array of the object's own keys (and not any inherited keys from other prototype objects)

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};
let personKeys = Object.keys(person);
personKeys.forEach(key => {
  console.log(person[key])
});                               // => Bob
                                  //    30
                                  //    6 ft
```

### Order of Object Properties

While older versions prior to ES6 don't guarantee an iteration order for objects, Modern versions (ES6+) do. Its a complex ordering based on:

- the type of property keys (strings come before symbols)
- the values of the keys (non-negatives come first)
- the order the keys were added to the object

**RULE:** don't count on the order of object properties

## Common Operations

Unlike JS arrays, JS objects don't have many common methods. This means you'll have to rely on extracting the keys or values from an object then iterating over the resulting array.  

### `Object.values`

**RULE:** `values` is a static method that returns an array of all the objects values (don't rely on the order of the values returned!)

 ```js
 let person = { name: 'Bob', age: 30, height: '6ft' };
 let personValues = Object.values(person);
 console.log(personValues); // => [ 'Bob', 30, '6ft' ]
 ```

### `Object.entries`

**RULE:** `entries` is a static method that returns a nested array of each the key value pairs from the object.

```js
let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]
```

### `Object.assign`

**RULE:** merges two or more objects (hashes) together, **mutating the first object**. The second object is unaffected. 

```js
let objA = { a: 'foo' }		=> undefined
let objB = { b: 'bar' }		=> undefined

Object.assign(objA, objB)	=> { a: 'foo', b: 'bar' }
```

**RULE:** if you want to return a new object instead, use an empty object as `Object.assign`'s  first argument.

```js
objA = { a: 'foo' }	=> undefined
objB = { b: 'bar' }	=> undefined
Object.assign({}, objA, objB)	=> { a: 'foo', b: 'bar' }
objA => { a: 'foo' }
objB => { b: 'bar' }
```

## Objects vs. Arrays

to choose between using an object vs an array consider the following:

- if a value has a name or label use an object. If the data doesn't have a natural label, an array should suffice.
- if order matters use an array
- if you need a stack or queue structure use an array as they are good at mimicking the "last-in-first-out"

## Summary

- understanding how key value pairs work with JS objects
