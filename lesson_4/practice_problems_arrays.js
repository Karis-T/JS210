// 1
function lastInArray(arr) {
  return arr[arr.length - 1];
}

// 2

function rollCall(arr) {
  for(let idx = 0; idx < arr.length; idx += 1) {
    console.log(arr[idx]);
  }
}

// 3

function reverse(arr) {
  let newArr = [];
  for(let idx = arr.length - 1; idx >= 0; idx -= 1) {
    newArr.push(arr[idx]);
  }
  return newArr;
}

// 4

function arrToString(arr) {
  let newStr = '';
  for(let idx = 0; idx < arr.length; idx += 1) newStr += arr[idx];
  return newStr;
}
