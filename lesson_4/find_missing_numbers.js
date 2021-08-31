// Find Missing Numbers

function missing(arr) {
  let missingElements = [];
  let endValue = arr[arr.length - 1];

  for (let counter = arr[0]; counter < endValue ; counter += 1) {
    if (!arr.includes(counter)) missingElements.push(counter);
  }

  return missingElements;
}

function missing(array) {
  let result = [];
  let start = array[0] + 1;
  let end = array[array.length - 1];

  for (let integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) === -1) {
      result.push(integer);
    }
  }

  return result;
}