// cute angles

function dms(num) {
  while (num > 360) num = num - 360;
  while (num < 0) num = num + 360;
  let deg = Math.trunc(num);
  let min = num % 1 * 60;
  let sec = min % 1 * 60;
  min = String(Math.trunc(min));
  sec = String(Math.trunc(sec));
  if (min.length === 1) min = '0' + min;
  if (sec.length === 1) sec = '0' + sec;
  return `${deg}°${min}\'${sec}\"`
}


// Combining Arrays

function union(arr1, arr2) {
  let newArr = arr1.slice();
  for (let ele of arr2) {
    if (arr1.includes(ele)) continue;
    newArr.push(ele);
  }
  return newArr;
}

// Halvsies

function halvsies(arr) {
  let mid = Math.ceil(arr.length / 2);
  let splitArr = [[],[]];
  for (let i = 0, j = 0; i < arr.length; i += 1) {
    if (i === mid) j += 1;
    splitArr[j].push(arr[i]);
  }
  return splitArr;
}

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}

// Find the Duplicate

function findDup(arr) {
  return arr.find(ele => arr.indexOf(ele) !== arr.lastIndexOf(ele))
}

// Combine Two Lists
function interleave(arr1, arr2) {
  let joinArr = [];
  for (i in arr1) {
    joinArr.push(arr1[i]);
    joinArr.push(arr2[i]);
  }
  return joinArr;
}

// Multiplicative Average

function showMultiplicativeAverage(arr) {
  return (arr.reduce((x, y) => x * y) / arr.length).toFixed(3);
}

// Multiply Lists

function multiplyList(arr1, arr2) {
  return arr1.map((ele, idx) => ele * arr2[idx]);
}

// Digits List
function digitList(num) {
  return String(num).split('').map(ele => Number(ele));
}

let digitList = num => [...String(num)].map(x => Number(x));

// How Many

function countOccurrences(arr) {
  let uniq = arr.filter((ele, idx) => arr.indexOf(ele) == idx);
  for (let ele of uniq) {
    let count = 0;
    for (let ele2 of arr) if (ele === ele2) count += 1;
    console.log(`${ele} => ${count}`)
  }
}

// Array Average

function average(arr) {
  return Math.floor(arr.reduce((acc, ele) => acc + ele) / arr.length);
}

// How Many

let average = arr => Math.floor(arr.reduce((acc, ele) => acc + ele) / arr.length);

