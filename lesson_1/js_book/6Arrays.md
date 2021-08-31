# Arrays

## What is an array?

- an ordered list of **elements** 

- each element has a value of any type

- like ruby arrays are placed between a set of square brackets `[]`

  ```js
  let myArray = [2, 'Pete', 2.99, 'another string']
  ```

- arrays are **heterogenous:** `myArray` contains numbers and string values.

- arrays are both indexed and ordered lists which designates the position of each element.

- like ruby to reference any element from an array you put the index number between brackets 

  ```js
  myArray[0]									 => 2
  ```

- **RULE:** unlike ruby you can't use negative values to reference the last element in an array, you must use the `length` property:

  ```js
  myArray[myArray.length - 1]  => 'another string'
  ```

## Modifying Arrays

### Replacing and adding Elements with `[]`

Just like ruby, you can set an element of an array using `[]=`

```js
let array = [1, 2, 3]
array[1] = 4					=> 4
array									=> [ 1, 4, 3 ]
```

use `[]=` to add new elements to an array in conjunction with `array.length`:

```js
array[array.length] = 10		=> 10
array												=> [ 1, 4, 3, 10 ]
```

**RULE:** When it comes to `const` variables initialized to an array, while you can't change what the variable refers to you can mutate the array:

```js
const MyArray = [1, 2, 3]
MyArray[1] = 5
MyArray										=> [1, 5, 3]
```

>we can change an element in a `const` array, but we can't change which array the `const` points to

to make the elements constant in an array use the `Object.freeze` method:

```js
const MyArray = Object.freeze([1, 2, 3])
MyArray[1] = 5
MyArray										=> [1, 2, 3]
```

**RULE:** `Object.freeze` only works one level deep in the array. This means if you have nested arrays they can be changed unless you have frozen them too: 

```js
const MyArray = Object.freeze([1,2,3,Object.freeze([4,5,6])])
MyArray[3][1] = 0					
MyArray										=> [1, 2, 3, [4, 5, 6]]
```

### Adding elements with `push`

**RULE:** like ruby use the `push` method to append 1 or more elements to an array. It **returns the new length of the array**. This method mutates the caller.

```js
array.push(null, 'xyz')	=> 7
array										=> [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```

### Adding Elements with `concat`

**RULE:** unlike ruby `concat` works just like `push` except its a non-mutating method that **returns the newly concatenated value**:

 ```js
 array.concat(42, 'abc')
 => [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ]
 array => [ 1, 4, 3, 10, 'a', null, 'xyz' ]
 ```

### Removing elements with `pop`

**RULE:** just like ruby, `pop` is a mutating method that removes and returns the last element of the array:

```js
array.pop() 	=> 'xyz'
array					=> [ 1, 4, 3, 10, 'a', null ]
```

### Removing Elements with `splice`

**RULE:** similar to ruby's `slice`, `splice` lets you remove 1 or more elements from an array at any given index. It **returns a new array of the deleted elements** and mutates the original array.

 ```js
 array.splice(3, 2) => [ 10, 'a' ]
 array							 => [ 1, 4, 3, null ]
 ```

## Iteration Methods

### Iterating with `foreEach`

**RULE:** **callback functions** are functions you pass to another function as an argument. The called function invokes the callback function at certain times while it runs.

**RULE:** The `forEach` method (similar to ruby's `each`) invokes its callback function once for each element, passing an elements value as an argument. `forEach` always returns `undefined` and is for iterating purposes.

```js
let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`
```

alternatively you can use arrow function instead of a function expression, simplifying our code:

```js
let array = [1, 2, 3];
array.forEach(num => console.log(num));
```

### Transforming Array's with `map`

**RULE:** the `map` method is just like ruby's `map` method; returning a new array of with transformed elements based on the return value of the callback. 

```js
let numbers = [1, 2, 3, 4]
let squares = numbers.map(num => num * num);
squares																	 => [ 1, 4, 9, 16 ]
squares = numbers.map(num => num * num); => [ 1, 4, 9, 16 ]
```

each elements is set to the return value of the callback and it doesn't mutate the caller.

### Filtering Array's with `filter`

**RULE:** `filter` is similar to ruby's `select`/`filter` method whereby it returns a new array of the selected values that the callback evaluates to `true`.

```js
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
numbers.filter(num => num > 4) => [ 5, 6, 7, 8, 9, 10 ]
numbers => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```

during each iteration, the callback function is invokes and uses the value of the current element as an argument. If the callback returns a value that evaluates to true. `filter` appends the elements value to a new array. It doesn't mutate the caller.

### Building New Values from Arrays with `reduce`

**RULE:** As with ruby, the `reduce` method reduces all the contents of an array to a single value. It takes two arguments: the **accumulator** and an element from the calling array. It returns a value that's used as the accumulator when the callback is next invoked. It doesn't mutate the caller

```js
let arr = [2, 3, 5, 7]
arr.reduce((accumulator, element) => accumulator + element, 0) => 17 //adds all the elements together

arr.reduce((accumulator, element) => accumulator * element, 1) => 210 //multiplies all the elements together
```

> we initialize the accumulator to 0. Thus, on the first invocation of the callback function, `accumulator` is `0` and `element` is `2`. The callback returns `2`, which becomes the new `accumulator` value when we invoke the callback again, this time with the element `3`. That invocation, in turn, returns `5`. This process continues until the final return value is `17`

>The second invocation of `reduce` computes the product of the numbers in the array (`2 * 3 * 5 * 7`), starting out with `1` as the accumulator.

`reduce` can reduce anything, not just numbers:

```js
let strings = ['a', 'b', 'c', 'd']
strings.reduce((accumulator, element) => {
...   return accumulator + element.toUpperCase()
... }, '');
=> 'ABCD'
```

`reduce` can do the work of other methods such as `map` and `filter`

```js
function oddLengths(arr) {
 return arr.reduce((acc, ele) => {
    if (ele.length % 2 === 1) {
      acc.push(ele.length);
    }
    return acc;
 }, []);
}

let array = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(array)); // => [1, 5, 3]
```



## Arrays Can be Odd

- **RULE:** **Arrays are objects:** which means the `typeof` operator doesn't return `'array'` , it returns `'object'`

- **RULE:** To detect if something is an array, use `Array.isArray(arr)`

  ```js
  let arr = [1, 2, 3]
  Array.isArray(arr)		=> true
  ```

- **RULE:** Array's get truncated if you change the `length` property to a smaller value. JS will remove all elements to fit the new `length`

  ```js
  let arr = [1,2,3]
  arr.length = 2
  arr				 => [1,2]
  ```

- **RULE:** The reverse is true too. If you change the length property of an array to a bigger number it'll insert **uninitialized elements** to fit the new length:

  ```js
  let arr = []
  arr.length = 3
  arr				 => [ <3 empty items> ]
  ```

- **RULE:** In general JS treats unset elements as missing but the `length` property includes the unset elements

  ```js
  arr 				=> [ <1 empty item>, 3, <1 empty item> ]
  arr.length	=> 3
  arr.forEach(element => console.log(element))
  => 3
  ```


- **RULE:** You can create elements that have negative or decimal values! They look like key / value pairs. These elements aren't true elements but are properties on the array object. **Only index values count toward the length of the array:**

  ```js
  arr = [1, 2, 3]				=> [ 1, 2, 3 ]
  arr[-3] = 4						=> 4
  arr 									=> [ 1, 2, 3, '-3': 4 ]
  arr[3.1415] = 'pi'		=> 'pi'
  arr["cat"] = 'Fluffy'	=> 'Fluffy'
  arr
  = [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
  ```

- **RULE:** Since arrays are objects, you can use the `Object.keys` method to return the arrays keys - its index values as an array of strings:

  ```js
  Object.keys(arr) => ['0','1','2','-3','3.1415','cat']
  ```

- **RULE:** `Object.keys` treats unset values in arrays differently from those that have a value of `undefined`. `length` Array property includes unset values when it counts elements, `Object.keys` only counts the values that have been set to a value:

  ```js
  let a = new Array(3);
  a										=> [ <3 empty items> ]
  a[0] === undefined;	=> true
  
  let b = [];
  b.length = 3;
  b 									=> [ <3 empty items> ]
  b[0] === undefined;	=> true
  
  let c = [undefined, undefined, undefined]
  c									=> [ undefined, undefined, undefined ]
  c[0] === undefined; => true
  ```

  ```js
  let aKeys = Object.keys(a)
  a.length				=> 3
  aKeys.length;   => 0
  
  let bKeys = Object.keys(b)
  b.length				=> 3
  bKeys.length;		=> 0
  
  let cKeys = Object.keys(c)
  c.length				=> 3
  cKeys.length;		=> 3
  ```

## Nested Arrays

As with ruby you can create arrays inside of arrays:

```js
let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]
teams[2]	=> [ 'Dan', 'Sarah' ]
teams[2][1] => 'Sarah'
```

## Array Equality

**RULE:** in JS two arrays must occupy the same spot in memory for both of them to be considered equal. This is the case of all objects in JS. Objects will only return `true` if it is the same object 

```js
[1, 2, 3] === [1, 2, 3]	=> false
let a = [1, 2, 3]
let b = a
a === b									=> true
```

**RULE:** in order to tell if two arrays hold the same values is to create a function that compares the elements in one array with the elements in the other array. If the elements are primitive values then equality will work easily:

```js
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  for (let idx = 0; idx < arr1.length; idx += 1) {
    if (arr1[idx] !== arr2[idx]) {
      return false;
    }
  }
  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // => false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));// => false
```

## Other Array Methods

Here are some commonly used built-in JS Array methods that are similar to ruby Array methods:

### `includes`

**RULE:** `includes` returns a Boolean value if the element is included in the array: 

 ```js
 let a = [1, 2, 3, 4, 5]
 a.includes(2)  => true
 a.includes(10) => false
 ```

**RULE:** internally `includes` uses `===` to compare elements of the array with the argument. This doesn't make `includes` suitable for identifying nested arrays or objects, unless it is the same array/object in memory:

 ```js
let inner = [3, 4];
let a = [1, 2, inner, 5]

a.includes([3, 4])	=> false
a.includes(inner)		=> true
 ```

### `sort`

**RULE:** just like ruby, `sort` method rearranges the elements and returns a sorted array. However in JS version `sort` **mutates the caller** 

```js
let a 		=> ["e", "c", "h", "b", "d", "a"]
a.sort()	=> [ 'a', 'b', 'c', 'd', 'e', 'h' ]
```

### `slice`

**RULE:** Just like ruby, `slice` is a non-mutating method that takes 2 arguments, the first and last index (the range) of the elements you want to extract:

```js
let fruits = ['mango', 'orange', 'banana', 'pear', 'apple']
fruits.slice(1, 3) => [ 'orange', 'banana' ]
```

**RULE:** if you omit the 2nd argument, `slice` returns the rest of the array based on the starting index you specified

```js
fruits.slice(2) // second argument defaults to rest of array
=> [ 'banana', 'pear', 'apple' ]
```

**RULE:** if you don't enter any arguments, it returns a new array with the exact same elements and order as the original. Useful when you want to use a destructive method on an a array you don't want to modify.

```js
fruits.slice() // no arguments duplicates the array
=> [ 'mango', 'orange', 'banana', 'pear', 'apple' ]
```

### `reverse`

**RULE:** `reverse` is similar to ruby in that it reverses the order of the array. What isn't the same is that it **mutates the caller**. use `slice` to create a copy if you do not want to permanently reverse the array

```js
let numbers = [1, 2, 3, 4]
let copyOfNumbers = numbers.slice();
let reversedNumbers = copyOfNumbers.reverse()
reversedNumbers => [ 4, 3, 2, 1 ]
numbers => [ 1, 2, 3, 4 ]
```

## Summary

- JS array data type has many built in methods that perform basic operations

