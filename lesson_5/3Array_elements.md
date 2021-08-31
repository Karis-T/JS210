# Arrays: What is an Element?

**RULE:** All arrays are objects

## Array Keys

**RULE:** all array's have a `length` property `Object.keys` doesn't include this property in the return value

**RULE:** All indexes of an arrays are properties of an object after translation to a string value

```js
let arr = [2, 4, 6];
console.log(arr);              // [2, 4, 6]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // ['0', '1', '2']
```

**RULE:** `Object.keys` returns an array of property keys - that is, string values that correspond to each index of the array

**RULE:** We can add properties to object `arr` that aren't array elements using a key that's anything other than a non-negative integer:

```js
let arr = [2, 4, 6]
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);           // [ 3, 5, 7 ]
```

**RULE:**  all JS built in Array methods ignore properties that aren't elements 

**RULE** `length` only responds to non-negative integers

**RULE:** `Object.keys` responds to all keys including anything that isn't a non-negative integer

**RULE:** If you're only interested in elements use `length` to determine whether the array is empty. If you want to include non-elements then use `Object.keys` to know if an array is empty

## Sparse Arrays

**RULE:** Array's are "sparse". That is, the number of elements in an array isn't necessarily the same as its length - there can be gaps in the array.

**RULE:** to create gaps in an array increase the size of the `length` property without adding any values to the array:

```js
let arr = [2, 4, 6];
arr.length = 5;
console.log(arr);              // [2, 4, 6, <2 empty items> ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2']
```

**RULE:** if you increase the size of the array using the `length` property, all empty items have no value at all and those elements don't exist - that is `Object.keys` does not consider them

**RULE:** When attempted to access empty items in any array it returns `undefined`. This does not mean the value is `undefined` but rather the value is not set.

```js
console.log(arr[3]);           // undefined
```

**RULE:** explicit `undefined` values show up as keys when we invoke the `Object.keys` method

```js
let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined
console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']
```

**RULE:** if you want to include gaps in an array use `length` to determine if the array is empty. If you want to ignore gaps use the object keys method to know if the array is empty keeping in mind that some of the object keys aren't non-negative integers (indexes)

```js
let arr = [];
arr.length = 3;

// Is arr empty?
console.log(arr.length);       // 3      No
console.log(Object.keys(arr))  // []     Yes
```

