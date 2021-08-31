// indexOf

function indexOf(arr, val) {
  for(let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] === val) return idx;
  }
  return -1;
}

// lastIndexOf

function lastIndexOf(arr, val) {
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    if (arr[idx] === val) return idx;
  }
  return -1;
}