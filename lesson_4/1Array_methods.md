## Array Methods

**RULE:** JS has an `Array` **global object**. This object has a **prototype object** thats used to define all methods for arrays. All JS arrays inherit from this prototype object. 

**RULE:** If you call `pop()` on an empty array, it returns [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

**RULE:** For object `slice` copies object references into the new array. Both the original and new array refer to the same object. If an object changes, the changes are visible to both the new and original arrays.

Methods you need to be aware of for arrays:

### **`Array.protoype.push()`**

- **definition:** adds one or **more** elements to the end of an array 
- **return value:** the new length of the array. 
- **Mutable?:** yes
- **optional arguments:** one or more arguments are acceptable

```js
const animals = ['pigs', 'goats', 'sheep'];
animals.push('cows'); // 4
animals; // ["pigs", "goats", "sheep", "cows"]
```

### **`Array.prototype.pop()`**

- **definition:** removes the last element from the array
- **return value:** returns the last element of the array If the array is empty it returns undefined. 
- **Mutable?:** yes
- **optional arguments:** N/A

```js
const plants = ['cauliflower', 'cabbage', 'kale', 'tomato'];
plants.pop(); // "tomato"
plants; 			// ["cauliflower", "cabbage", "kale"]
```

### `Array.prototype.unshift()`

- **definition:** adds one or more elements to the beginning of an array
- **return value:** returns the new length of the array
- **Mutable?:** yes
- **optional arguments:** one or more arguments are acceptable

```js
const array1 = [1, 2, 3];
array1.unshift(4, 5);	// 5
array1;								// [4, 5, 1, 2, 3]
```

### `Array.prototype.shift()`

- **definition:** Removes the first element from an array
- **return value:** Returns the first element of the array If the array is empty it returns undefined 
- **Mutable?:** yes
- **optional arguments:** N/A

```js
const array1 = [1, 2, 3];
array1.shift(); // 1
array1;					// [2, 3]
```

### `Array.prototype.indexOf()`

- **definition:** finds the first index based on the value passed in
- **return value:** The first found index of the element in the array; **-1** if not found.
- **Mutable?:** no
- **optional arguments:** The index to start the search at. 
  - If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. 
  - If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. 
  - Default: 0 (entire array is searched).

```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

beasts.indexOf('bison');		// 1
beasts.indexOf('bison', 2); // 4
```

### `Array.protoype.lastIndexOf()`

- **definition:** finds the last index based on the value passed in
- **return value:** The last found index of the element in the array; **-1** if not found.
- **Mutable?:** no
- **optional arguments:** The index at which to start searching backwards. 
  - If the index is greater than or equal to the length of the array, the whole array will be searched.
  - If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front.
  - Defaults to the array's length minus one (`arr.length - 1)` the whole array will be searched

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
animals.lastIndexOf('Dodo'); // expected output: 3
```

### `Array.protoype.slice()`

- **definition:** extracts a sub array from the original array.
- **return value:** returns a new shallow copy subarray from `start` index to `end` index (`end` not included) 
- **Mutable?:** no
- **optional arguments:** Start and End
  - **Start**: Zero-based index at which to start extraction.
    - A negative index can be used, offsets from the end of the sequence. `slice(-2)` extracts the last two elements in the sequence.
    - If `start` is undefined, `slice` starts from the index `0`.
    - If `start` is greater than the index range of the sequence, `[]` is returned.
  - **End**: Zero-based index *before* which to end extraction. 
    - A negative index can be used, offsets from the end of the sequence. `slice(2,-1)` extracts the third element through the second-to-last element in the sequence.
    - If `end` is omitted, `slice` extracts through the end of the sequence (`arr.length`).
    - If `end` is greater than the length of the sequence, `slice` extracts through to the end of the sequence (`arr.length`)

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

animals.slice(2);	// ["camel", "duck", "elephant"]
animals.slice(2, 4); // ["camel", "duck"]
```

### `Array.protoype.splice()`

- **definition:** Adds, removes or replaces elements from an array permanently (in place). 

- **return value:** A new array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.

- **Mutable?:** yes

- **optional arguments:** start, deleteCount, optional elements

  - **start** The index at which to start changing the array.
    - If greater than the length of the array, `start` will be set to the length of the array. 
    - If negative, it will begin that many elements from the end of the array. 
  - **deleteCount** An integer indicating the number of elements in the array to remove from `start`.
    - If `deleteCount` is omitted, or if its value is equal to or larger than `array.length - start` then all the elements from `start` to the end of the array will be deleted.
    - If `deleteCount` is `0` or negative, no elements are removed.
  - **optional elements** The elements to add to the array, beginning from `start`. 
    - If you do not specify any elements, `splice()` will only remove elements from the array.

  ```js
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb'); // []
  months; // ["Jan", "Feb", "March", "April", "June"]
  ```

### `Array.prototype.concat()`

- **definition:** merge two or more arrays. 
- **return value:** Returns a new array of concatenated elements
- **Mutable?:** no
- **optional arguments:** one or more arguments are acceptable

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

array3; // ["a", "b", "c", "d", "e", "f"]
```

### `Array.prototype.reverse()`

- **definition:** Reverses an array in place
- **return value:** Returns the calling array reversed
- **Mutable?:** yes
- **optional arguments:** N/A

```js
const array1 = ['one', 'two', 'three'];
array1.reverse();	// ["one", "two", "three"]
```

### `Array.prototype.sort()`

- **definition:** Sorts the elements in place. *built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.*
- **return value:** Returns the calling array sorted default ascending order
- **Mutable?:** yes
- **optional arguments:** compareFunction, firstel, secondel
  - **compareFunction** Specifies a function that defines the sort order. 
    - If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
  - **firstEl:** first element for comparison
  - **secondEl:** second element for comparison

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
months; // ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
array1; // [1, 100000, 21, 30, 4]
```

### `Array.prototype.length`

- **definition:** sets or returns the number of elements in that array. the `length` property does not necessarily indicate the number of defined values in the array. 
- **return value:** returns the number of elements in that array
- **Mutable?:** yes
- **optional arguments:** 
  - You can set the `length` property to truncate an array at any time.
  - When you extend an array by changing its `length` property, the number of actual elements increases; 
    - for example, if you set `length` to 3 when it is currently 2, the array now contains 3 elements, which causes the third element to be a non-iterable empty slot.

```js
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
clothing.length; // 4
```

