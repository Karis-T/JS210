- Q. Can we insert data into an array at a negative index? If so, why is this possible?

```js
digits[-1] = -42;
nthElementOf(digits, -1);
digits[-1];
digits['-1'];    // Note that we are using a string here
```

**RULE:** Since all array's are objects in JavaScript you can add elements to the array object but its not properly one of the array elements. Also the `digits.length` property remains unchanged. 

```js
function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]
```

**RULE:** in regards to `Array.prototype.slice()` when you pass an `length` value that's greater than the array length, the arithmetic in the function becomes a negative value. `slice` interprets a negative value as a position relative to the end of the array. Eg. If you were to pass a `length` value of `9` `slice` is called with an argument of `-3` and returns the final `3` elements of `digits`.   

```js
function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

let digits = [4, 8, 15, 16, 23, 42];
mirroredArray(digits);  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]
```

**RULE:** If `slice` is used without any arguments it performs a *shallow copy*; it doesn't create copies of the element values, just of the array structure. This is usually fine for most duplication operations. However, you should always keep this in mind since both arrays now share the objects stored in each element.
