// Literal

  const myObject = {
    a: 'name',
    'b': 'test',
    123: 'c',
    1: 'd',
  };

  myObject[1];
  myObject[a]; // ReferenceError
  // when using bracket notation a must be a string otherwise JS considers it as a variable
  // because it has not been declared it can't find the variable
  myObject.a;
  // only method calls can use the no string approach

// Literal Method

  const person = {
    firstName() {
      return 'Victor';
    },
    lastName() {
      return 'Reyes';
    },
  };

  console.log(`${person.firstName} ${person.lastName}`);
  // append parentheses to call the function

  // firstName() {
  //    return 'Victor';
  //  } lastName() {
  //    return 'Reyes';
  //  }

// Mutation

  const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
  const array2 = [];

  for (let i = 0; i < array1.length; i += 1) {
    array2.push(array1[i]);
  }

  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i].startsWith('C')) {
      array1[i] = array1[i].toUpperCase();
    }
  }

  console.log(array2);
  ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
  // Even though array1 is an object (mutable), its elements are still strings (immutable)

// Dynamic

  const myObject = {
    prop1: '123',
    prop2: '234', // 456
    'prop 3': '345',
  };

  const prop2 = '456';
  myObject['prop2'] = '456';
  myObject[prop2] = '678';
  //myObject['456'] = 678

  console.log(myObject[prop2]); // 678
  console.log(myObject.prop2);  // 456

  // make sure to include quotations when using bracket notation
  // using a variable as a key, the value its referencing becomes the new key

  const myObj = {};
  myObj[myFunc()] = 'hello, ';

  function myFunc() {
    return 'funcProp';
  }

  console.log(myObj); // {funcProp: 'hello, '}
  myObj[myFunc()] = 'world!'; // reassigned  {funcProp: 'world!'}
  console.log(myObj); //{funcProp: 'world!'}

// Array Object Part 1

  const myArray = ['a', 'b', 'c'];

  console.log(myArray[0]); // a
  console.log(myArray[-1]); // undefined

  myArray[-1] = 'd';
  myArray['e'] = 5;
  myArray[3] = 'f';

  console.log(myArray[-1]); // d
  console.log(myArray['e']); // 5
  console.log(myArray); // ['a', 'b', 'c', '-1':'d', e: 5]

  // arrays are objects and will store non positive integers as key value pairs. These are not real elements and don't have an index but work like properties of the array

// Array Object Part 2
  const myArray = [5, 5];
  myArray[-1] = 5;
  myArray[-2] = 5;

  function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length; // array length is 2
  }

  average(myArray); // returns 10 when it should be 5
  // this is because array.length doesn't include properties only elements (non-negative integers)

  // refactored: return Object.keys(array).length

// What's my Bonus

  function calculateBonus() {
    return arguments[1] ? arguments[0] / 2 : 0;
  }

  console.log(calculateBonus(2800, true));               // 1400
  console.log(calculateBonus(1000, false));              // 0
  console.log(calculateBonus(50000, true));              // 25000

  //arguments is an array like object that is locally accssible inside all function definitions. It can be used to access any arguments passed to the function definition and supports bracket notation similar to that of arrays

// The End is Near but not here
  function penultimate(string) {
  return string.split(' ')[-2];
  }

  penultimate('last word');                    // expected: "last"
  penultimate('Launch School is great!');      // expected: "is"

  // returns undefined because JS array elements only accept non-negative integers as elements. if we use negative numbers JS interprets them as properties or keys that are currently undefined hence undefined is returned. We can fix this by calling the length property and minus 2 to get the second last index

  function penultimate(string) {
    let arr = string.split(' ');
    return arr[arr.length - 2];
  }

    function penultimate(string) {
    return string.split(' ').slice(-2, -1)[0];
  }

// After Midnight Part 1

function formatTime(hours, mins) {
  if (hours.length === 1) hours = '0' + hours;
  if (mins.length === 1) mins = '0' + mins;
  return `${hours}:${mins}`;
}

function timeOfDay(minutes) {
  let clock = new Date(2021, 1, 1, 0, minutes);
  return formatTime(String(clock.getHours()), String(clock.getMinutes()));
}


// After Midnight Part 2

function afterMidnight(str) {
  let hours = Number(str.slice(0,2)) * 60;
  let minutes = Number(str.slice(3,5));
  return hours + minutes;
}

function beforeMidnight(str) {
  let minutes = afterMidnight(str);
  return (minutes === 0 ? 0 : 1440 - minutes);
}