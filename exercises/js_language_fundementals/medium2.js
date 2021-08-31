// Defaults
  // 0 evaluates to false so even if there is no tax or service charge you will always be taxed and charged service

// Equal
  // equality operators for objects only evalute to true if it is the same object, false otherwise. Although these objects contain the same values they are not referencing the same object in memory but rather point to two different objects in memory. Below indicates both variables referencing the same object

  const person = { name: 'Victor' };
  const otherPerson = person;

  console.log(person === otherPerson);    // true

// Amount Payable
  let startingBalance = 1;
  const chicken = 5;
  const chickenQuantity = 7;

  function totalPayable(item, quantity) {
    return startingBalance + (item * quantity);
  }

  startingBalance = 5;
  console.log(totalPayable(chicken, chickenQuantity)); //40

  startingBalance = 10;
  console.log(totalPayable(chicken, chickenQuantity));//45

  // Closures have functions "retain access" to variables defined in an "enclosing scope". In the code above, the enclosing scope is the global (window) scope containing the variables startingBalance, chicken, and chickenQuantity. Retaining access means that a variable's value is not fixed at the time when the function is defined or first executed. Instead, the variable's value is dynamically looked up each time the function is called. Therefore, the value of startingBalance on line 6 is not 1; instead, the value is a reference to the value stored in the startingBalance variable in the global scope.

  // As a result of how closures work, the first time the totalPayable function is called, the value of startingBalance is 5; the second time the function is called, the value of startingBalance is 10.

// Caller
  function makeDoubler(caller) {
    return function doubler(number) {
      console.log(`This function was called by ${caller}.`);
      return number + number;
    }
  }
// This solution leverages that functions in JavaScript are first-class objects. It satisfies the requirement that makeDoubler must take a caller name and it returns a variation of the doubler function.
//Notice that the returned anonymous function expression assigned to the doubler variable still retains access to the caller variable in its closure, even after the makeDoubler function returns.

// What's my Value?
const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); //3
console.log(Object.keys(array).length); //4

array[-2] = 'Watermelon';
console.log(array.length); //3
console.log(Object.keys(array).length); //5

//Arrays are objects and non-negative integers are considered to be array indexes. array.length property only counts the number of array indexes. Any negative integers or non-integers are considered properties of the array and aren't real indexes. Object.keys will count the number of total properties, and since indexes are considered to be properties, all properties will be counted.
//Recall that Arrays are implemented with Objects internally in JavaScript. One thing that differentiates the two is that arrays have a length property, while objects do not. Arrays can be thought of as special objects that have only non-negative integer values (from 0 up to 2 32 - 1) as keys, and have an extra length property that keeps track of how many such key-value pairs exist in the object.

// Length
  const languages = ['JavaScript', 'Ruby', 'Python'];
  console.log(languages); // ['JavaScript', 'Ruby', 'Python']
  console.log(languages.length);// 3

  languages.length = 4;
  console.log(languages); // ['JavaScript', 'Ruby', 'Python', <1 empty item>]
  console.log(languages.length); // 4

  languages.length = 1;
  console.log(languages); // ['JavaScript']
  console.log(languages.length); // 1

  languages.length = 3;
  console.log(languages); // ['JavaScript', <2 empty items>]
  console.log(languages.length); // 3

  languages.length = 1;
  languages[2] = 'Python';
  console.log(languages); // ['JavaScript', <1 empty items>, 'Python']
  console.log(languages[1]); // undefined
  console.log(languages.length); // 3
  // The key takeaway for this exercise is that the length property can be explicitly set (recall that arrays are zero-indexed). Setting the length to a value that is less than the current length truncates the array; re-setting the length to a higher value does not bring back the truncated elements. Setting the length to a value greater than the current length creates 'empty slots' in the array, but the number of actual elements does not increase. Furthermore, since the value of the length is always equal to the last index plus 1, adding an element to index 2 of a one-element array changes the array's length to 3, even though the array only has two actual elements (at indices 0 and 2).

  const sparseArray = [, , 'a', , 'b'];
  console.log(sparseArray);

  /*
  [<2 empty items>, 'a', <1 empty item>, 'b']    // Node REPL v8.8.1
  [ , , 'a', , 'b']                              // older version of Node
  [empty × 2, "a", empty, "b"]                   // Chrome Console v62
  [undefined × 2, "a", undefined × 1, "b"]       // older version of Chrome
  [<2 empty slots>, "a", <1 empty slot>, "b"]    // Firefox 57.0
  */

  // Arrays with 'empty slots' are sometimes referred to as 'sparse arrays'. You may see them represented in a variety of different ways. For example

// The Red Pill

// Welcome to the matrix
