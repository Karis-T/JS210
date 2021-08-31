// copy part 1

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop(); // mutation
console.log(myArray); // [1,2,3] referencing same object in memory
console.log(myOtherArray); // [1,2,3] referencing same object in memory

myArray = [1, 2]; // non mutation reassignment
console.log(myArray); // [1,2] referencing a different object
console.log(myOtherArray); //[1,2,3] referencing same object as before

// copy part 2

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

let myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (ele of myArray) myOtherArray.push(ele);

// array concat part 1

function concat(array1, secondArgument) {
  let newArray = array1.slice();
  if (Array.isArray(secondArgument)) {
    for (ele of secondArgument) newArray.push(ele);
  } else newArray.push(secondArgument);
  return newArray;
}

// concat part 2

function concat(array1, ...args) {
  let newArray = array1.slice();

  for (ele1 of args) {
    if (Array.isArray(ele1)) {
      for (ele2 of ele1) newArray.push(ele2);
    } else newArray.push(ele1);
  }

  return newArray;
}

// push pop
function pop(arr){
  if (arr.length === 0) return undefined;
  let val = arr[arr.length - 1]
  arr.length = arr.length - 1;
  return val;
}

function push(arr, ...args) {
  for (let idx = 0; idx < args.length; idx += 1) {
    arr[arr.length] = args[idx];
  }
  return arr.length;
}

//oddities

function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }

  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6];      // false
oddities(['abc', 'def']) === ['abc'];         // false
// This is because we are returning a new array object and equality operators only evalutate to true if the two operands are referencing the same array object

// array comparision
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  arr1 = arr1.slice().sort();
  arr2 = arr2.slice().sort();
  for (let idx in arr1) {
    if (arr1[idx] !== arr2[idx]) return false;
  }

  return true;
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  let array2Copy = array2.slice();
  for (let i = 0; i < array1.length; i += 1) {
    let index = array2Copy.indexOf(array1[i]);
    if (index >= 0) array2Copy.splice(index, 1);
    else return false;
  }

  return true;
}

// slice

function slice(array, begin, end) {
  if (end > array.length) end = array.length;
  let subArr = [];
  for (let idx = begin; idx < end; idx += 1) subArr.push(array[idx]);
  return subArr;
}

// splice

function splice(array, start, deleteCount, ...eleN) {
  let subArr = slice(array, start, start + deleteCount);
  let lastIdx = array.length - 1;

  if (deleteCount === 0) {
    let newLastIdx = array.length + eleN.length - 1;
    for (let idx = newLastIdx; idx > start; idx -= 1) {
      array[idx] = array[lastIdx];
      lastIdx -= 1;
    }
  }

  let idx2 = start;
  for (let idx = 0; idx < eleN.length; idx += 1) {
    array[idx2] = eleN[idx];
    idx2 += 1;
  }

  return subArr;
}
// shift and unshift
function shift(arr) {
  let firstIdx = arr[0];
  for (let idx = 1; idx < arr.length; idx += 1) arr[idx - 1] = arr[idx];
  arr.length = 2;
  return firstIdx;
}

function unshift(arr, ...args) {
  let end = arr.length - 1; //1
  let newEnd = end + args.length; //2
  let idx2 = end;
  for (let i = newEnd; i >= end ; i -= 1) {
    arr[i] = arr[idx2];
    idx2 -= 1;
  }

  for (let i = 0; i < args.length; i += 1)  arr[i] = args[i];
  return arr.length;
}