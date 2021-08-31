# Arrays

**definition:** JS basic collection type used in JS. They contain a list of values index with non-negative integer values. Order is based on index, but the sequence of elements may or may not be important. We use arrays to:

- iterate though the array to perform an action on each value
- Access and manipulate specific elements of the Array

Create arrays using Array literal syntax:

```js
[]         // an empty Array

[0, 1, 2]  // an Array holding three values

[42, 'hello', false, [3, 5], [true, 'hello']]  // Arrays can contain any other object
```

 you can also create an array using the array constructor. This however isn't used too often:

```js
let count = new Array(1, 2, 3);

// Usually written as:
let count = [1, 2, 3];
```

## Iterating Through an Array

The most basic iteration technique is to use the `for` loop. To iterate through the entire array you'll need to access the length of the array and can do so using the `length` property:

```js
let count = [1, 2, 3, 4];
for (let index = 0; index < count.length; index += 1) console.log(count[index]);
// logs to the console:
1
2
3
4
```

note that JS bracket notation `[]` are operators and not methods. 

## Accessing , Modifying and detecting Values

**RULE:** Like Ruby, JS Arrays are indexed zero based collections with the first index in an array starting at 0. 

**RULE:** If you try to access a value that lies outside the index of an array it will return `undefined`

```js
let fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];

fibonacci[0];     // 0
fibonacci[3];     // 2
fibonacci[100];   // undefined
```

**RULE:** you can mutate and add values to the array using `[]=` to any location in the array. There will be empty space where there are no values

```js
let count = [1, 2, 3];
count[3] = 4;
count;            // [ 1, 2, 3, 4 ]
count.length;     // 4
count[5] = 5;
```

**RULE:** For the indexes that don't have an explicit value, JS designates it as empty. Empty items have no value at all, so if you try to access those values it returns `undefined`

```js
count;            // [ 1, 2, 3, 4, <1 empty item>, 5]
count[4];         // undefined
```

**RULE:** even though there may be empty spaces in an array JS `Array.length` adds those empty spaces to the total length of the array

```js
count[9] = 9;
count.length;     // 10
```

**RULE:** you can change the length of an array by assigning a new value to the `length` property:

```js
let count = [1, 2, 3];

count.length = 10;
count;            // [ 1, 2, 3, <7 empty items> ]
count.length = 2;
count;            // [ 1, 2 ]; excess elements are lost
```



## Arrays are Objects

**RULE:** Javascript arrays are Objects

```js
typeof [];		//"object"
```

**RULE:** to determine if a value is an array use `Array.isArray([]);`

```js
Array.isArray([]);        // true
Array.isArray('array');   // false
```
