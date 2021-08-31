// push

function push(arr, val) {
  arr[arr.length] = val;
  return arr.length;
}

// pop

function pop(arr) {
  let ele = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return ele;
}

// unshift

function unshift(arr, val) {
  for (let idx = arr.length; idx > 0; idx -= 1) {
    arr[idx] = arr[idx - 1];
  }

  arr[0] = val;
  return arr.length;
}


// shift

function shift(arr) {
  let val = arr[0];
  for (let idx = 0; idx < arr.length; idx += 1) {
    arr[idx] = arr[idx + 1];
  }

  arr.length = arr.length - 1;
  return val;
}