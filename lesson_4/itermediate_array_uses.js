// odd elements array

function oddElementsOf(arr) {
  let newArr = [];
  for (idx in arr) if (idx % 2 === 1) newArr.push(arr[idx]);
  return newArr;
}

function oddElementsOf(arr) {
  let oddElements = [];

  for (let index = 1; index < arr.length; index += 2) {
    oddElements.push(arr[index]);
  }

  return oddElements;
}


//mirrored array
function originalReverse(arr) {
  let newArr = [];
  for (ele of arr) newArr.push(ele);
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) newArr.push(arr[idx]);
  return newArr;
}

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

// matrix Sums

function matrixSums(arr) {
  let sumArr = [];

  for (let idx1 = 0; idx1 < arr.length; idx1 += 1){
    let total = 0;
    for (idx2 = 0; idx2 < arr[idx1].length; idx2 += 1) {
      total += arr[idx1][idx2];
    }
    sumArr.push([total]);
  }
  return sumArr;
}

// unique Elements

function uniqueElements(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (!newArr.includes(arr[idx])) newArr.push(arr[idx]);
  }
  return newArr;
}

// sort decending

function sortDescending(arr) {
  let newArr = arr.slice();
  return newArr.sort((a, b) => b - a);
}