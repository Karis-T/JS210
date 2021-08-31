// firstNElementOf

function firstElementOf(arr) {
  return arr[0];
}

// lastElementOf

function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// nthElementOf

function nthElementOf(arr, index) {
  return arr.at(index);
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // undefined
nthElementOf(digits, -1);  // 42

function nthElementOf(arr, index) {
  return arr[index];
}

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // undefined
nthElementOf(digits, -1);  // undefined

// firstNOf

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// lastNOf

function lastNOf(arr, count) {
  return arr.slice(count, arr.length);
}

function lastNOf(arr, length) {
  let index = arr.length - length;
  if (index < 0) index = 0;

  return arr.slice(index);
}

// endsOf

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]