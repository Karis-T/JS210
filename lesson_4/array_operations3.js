// slice

function slice(arr, start, end) {
  let newArr = [];
  for(let idx = 0; idx < end; idx += 1) {
    if (idx >= start) push(newArr, arr[idx]);
  }
  return newArr;
}

// splice

function splice(arr, start, length) {
  newArr = slice(arr, start, start + length);
  let counter = 0;
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (idx >= start + length) {
      arr[start + counter] = arr[idx];
      counter += 1;
    }
  }
  arr.length = arr.length - length;
  return newArr;
}

// concat

function concat(arr1, arr2) {
  let arrs = [arr1, arr2];
  let newArr = [];
  for (let idx1 = 0; idx1 < arrs.length; idx1 += 1) {
    for(let idx2 = 0; idx2 < arrs[idx1].length; idx2 += 1) {
      push(newArr, arrs[idx1][idx2]);
    }
  }
  return newArr;
}

// join

function join(arr, str) {
  let newStr = ''
  for(let idx = 0; idx < arr.length; idx += 1) {
    if (idx === arr.length - 1) {
      newStr += String(arr[idx]);
      break;
    }
    newStr += String(arr[idx]) + str;
  }
  return newStr;
}
