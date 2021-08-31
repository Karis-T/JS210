# Arrays and Objects

JS uses both arrays and objects as data structures to represent compound data. 

## Array

```js
[1, 2, 3];
['Monday', 'Tuesday', 'Wednesday'];
['Jan', 31, [2015, 2016]];
```

**RULE:** use an array if:

- your data is more like a list that contains many items
  - usually of the same type (can be different types too)
- you need to maintain data in a **specific order**
- if you want to do the following to elements:
  - add
  - retrieve
  - modify
  - remove
  - iterate ("walking the list") which allows us to perform complicated processing on each element of an array

## Object

```js
{
  firstName: 'Joe',
  lastName: 'Smith',
  gender: 'Male',
  age: 30,
  married: false,
}
```

**RULE:** use an object if: 

- your data is more like an entity of many parts
- you need to access values based on the names of those values
- you want "keyed" access (keys) which are associated with a specific data item ("associative arrays")
- you want to do the following to key values:
  - add
  - retrieve
  - modify
  - delete

## Arrays are Objects

```js
let a = ['hello', 'world'];

typeof a;        // "object"
a['1'];          // "world", object's bracket notation to access value
Object.keys(a);  // ["0", "1"], the keys of the object!

// line 1 is equivalent of:

let a = {
  '0': 'hello',
  '1': 'world',
};

typeof a;        // "object"
a['1'];          // "world", object's bracket notation to access value
Object.keys(a);  // ["0", "1"], the keys of the object!
```

**RULE:** While the above are equivalent in return values arrays and objects have slight differences

## Arrays and the Length Property

**RULE:** JS can use `length` properties on arrays because it is just an object property that JS maintains in order to track the arrays size.

**RULE:** Invoking any of JS's built in Array methods (`join`, `forEach`, `push`, `splice`) utilise the value of the length property to perform their operations 

`Array.length`:

- has a non-negative value less than 2^32 (roughly 4.2 billion).
- has a value that is always one greater than they largest array index in the Array. 
- Any property name that has a non-negative integer value attached to an array thats greater than the last index of the array becomes the largest array index
- You can set the value of the `length` property explicitly

```js
let myArray = [];
myArray['foo'] = 'bar';
myArray[0] = 'baz';
myArray[1] = 'qux';

console.log(myArray);         // logs ['baz', 'qux', foo: 'bar']
myArray.length;               // returns 2 since foo: 'bar' is not an element
myArray.indexOf('bar');       // returns -1 since 'bar' isn't in an element

myArray[-1] = 'hello';
myArray[-2] = 'world';
myArray.length;               // returns 2
myArray.indexOf('hello');     // returns -1 since 'hello' is not in an element
                              // the fact that myArray[-1] is 'hello' is
                              // coincidental
myArray.indexOf('world');     // returns -1 since 'world' is not in an element

console.log(myArray);         // logs ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
Object.keys(myArray).length;  // returns 5 (there are 5 keys at this point)
myArray.length;               // returns 2 (but only 2 keys are indexes)
```

- **RULE:** property names are indexes which are non-negative integers. The values of these property names are elements of an array
- **RULE:** Every other property name are NOT elements of an array
- **RULE:** `Array.prototype.indexOf` method only responds to elements, and hence will return `-1` for non-index property values
- **RULE:** The return value of `length` is dependent on the largest array index
  -  In the code, the largest valid index is `1` (see line 4). Therefore, `length` returns `2` (`1 + 1`).
- **RULE:** Js will log all indexed and non-indexed values. If it is an element of the array only the value will be logged. If it isn't an element it logs the `key: value` pair
- **RULE:** If you want to count all the properties of an Array object use `Object.keys(array).length`. Don't use `array.length` 

```js
let myArray = [1, 2, 3];
myArray.length;         // returns 3

// setting to a larger value than the current largest array index
myArray.length = 5;
console.log(myArray);   // logs (5) [1, 2, 3, empty × 2] on Chrome Console
                        // logs [1, 2, 3, <2 empty slots>] on Firefox console
                        // logs [1, 2, 3, ,] on node REPL
myArray.length;         // returns 5

// setting to a smaller value than the current largest array index with value
myArray.length = 2;
console.log(myArray);   // logs [1, 2]
myArra.length;				  // returns 2;
```

- **RULE:** "empty slots" are not considered to be elements because they do not have an assigned value. They are only displayed to indicate there are gaps between actual elements
- **RULE:** you can use bracket notation to set the value of an array element
- **RULE:** If the property name you use is a valid array index that's greater than the current largest array index, JavaScript sets the `length` value to `1` greater than the array index you provided
- **RULE:** The values of `length` its not necessarily the same number of items in the array. The `Array.prototype.length` property doesn't only count elements (array indexes that have been assigned values) it also counts empty slots.  

## Using Object Operations with Arrays

**RULE:** to check if an index exists in an array, use the `length` property instead of the `in` operator to make the intent of the code clear and prevent suprising results:

```js
// bad
0 in [];			// false	
0 in [1];     // true

// good
let numbers = [4, 8, 1, 3];
2 < numbers.length;          // true
```

**RULE:** Use `Array.prototype.splice` instead of `delete` to remove a value from an array:

**RULE:** just like with arrays, arithmetic and comparison operators aren't useful with object and lead to suprising results. 

**RULE:** When the second operand is an object, JS coerces the object to the string `'[object Object]`:

```js
[] + {};                  // "[object Object]" -- becomes "" + "[object Object]"
[] - {};                  // NaN -- becomes "" - "[object Object]", then 0 - NaN
'[object Object]' == {};  // true
'' == {};                 // false
false == {};              // false
0 == {};                  // false
```

**RULE:** When the first operand is an object JS interprets it as a code block:  

```js
{} + [];                  // 0 -- becomes +[]
{}[0];                    // [0] -- the object is ignored, so the array [0] is returned
{ foo: 'bar' }['foo'];    // ["foo"]
{} == '[object Object]';  // SyntaxError: Unexpected token ==
```

**RULE:** as with arrays, different objects with the same keys and values do not evaluate to true or are considered equal. They must be the same object:

```js
let a = {};
let b = a;
a == b;                   // true
a === b;                  // true
a == {};                  // false
a === {};                 // false
```

**RULE:** Use caution when changing the length, deleteing or adding properties with keys that are not array indexes. Properties that are not array indexes will not be processed by the array methods. This is because they are not array elements. 

