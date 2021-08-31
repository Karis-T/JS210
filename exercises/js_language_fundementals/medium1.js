// Logical Operation

(false && undefined); //false
(false || undefined); //undefined
((false && undefined) || (false || undefined)); //undefined
((false || undefined) || (false && undefined)); //false
((false && undefined) && (false || undefined)); //false
((false || undefined) && (false && undefined)); //undefined
('a' || (false && undefined) || ''); //'a'
((false && undefined) || 'a' || ''); //'a'
('a' && (false || undefined) && ''); //undefined
((false || undefined) && 'a' && ''); //undefined

// Conditional Loop

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
// doesn't print out expected answer
// prints infinite 0 because the counter is in the else clause

// Multiplication Table

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// it doesn't print as expected
// the outer for loops condition should be i <= 10 so it will only log all the Multiplication tables for 1 to 9

// Selected Columns
  function getSelectedColumns(numbers, cols) {
    var result = [];

    for (var i = 0, length = numbers.length; i < length; i += 1) {
      for (var j = 0, length = cols.length; j < length; j += 1) {
        if (!result[j]) {
          result[j] = [];
        }

        result[j][i] = numbers[i][cols[j]];
      }
    }

    return result;
  }

  // given the following arrays of number arrays
  const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

  // `array1` in row/column format
  // [[1, 2, 3],
  //  [4, 5, 6],
  //  [7, 8, 9]]

  getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
  getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
  getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

  //length variable is used in both for loops.
  // using var keyword gives the variable function scope and so any subsetquent var declarations with the same name becomes redundant and only 1 variable is created
  // length is reassigned and will only iterate until the length of col instead of numbers length

// Counter

  var counter = 5;
  var rate = 3;
  console.log('The total value is ' + String(counter * rate));

  function counter(count) {
    // ...
  }
 // The total value is 15
 // functions are hoisted before variables
 // only creates one variable and is reassigned to 5

  function counter(count) {
    // ...
  }

  console.log('The total value is ' + String(counter * rate));

  var counter = 5;
  var rate = 3;
  // The total value is NaN
  // Function * undefined === NaN
  // only creates one variable and contains a function

  var counter = 5;
  var rate = 3;

  function counter(count) {
  // ...
  }

  console.log('The total value is ' + String(counter * rate));
  // The total value is 15
  // only creates one variable and is reassigned to 5
  // always assume that functions are hoisted before variables

  let counter = 5;
  let rate = 3;

  function counter(count) {
  // ...
  }

  console.log('The total value is ' + String(counter * rate));
  // SyntaxError you cannot have let and const variables and functions that have the same name
  // Since SyntaxErrors usually occur during the creation phase, hoisting has no direct effect on the behavior. Therefore, we have omitted the hoisted code snippet for snippet 4. The syntax error will occur before hoisting takes place.

// Logger
  function debugIt() {
    const status = 'debugging';
    function logger() {
      console.log(status);
    }

    logger();
  }

  debugIt();

 // nested functions have function scope and are hoisted to the top of its outer function, this allows them to be invoked correctly
 // nested functions also have access to their surrounding scopes using closures and form an enlosure around required variables at the point of definition. This is why logger has access to status and can log debugging correctly. This has nothing to do with invocation

 // On line 4, the status variable has a value of 'debugging' because of JavaScript's lexical scoping rules. The debugIt function defines a local variable named status and a function named logger. logger is an inner (nested) function, so it has access to any variables declared in the scope of its outer (parent) function, debugIt, due to lexical scoping rules.

// Invoice
  function invoiceTotal(...amount) {
    return amount.reduce((acc, ele) => acc + ele, 0);
  }

  invoiceTotal(20, 30, 40, 50);          // works as expected
  invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?

// Product of Sums
  function productOfSums(array1, array2) {
    let result = total(array1) * total(array2); //undefined^2
    return result; // returns NaN
  }

  function total(numbers) {
  let sum; // declared with the initial val of undefined, not initialized

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];  // NaN
  }

    sum; // is not returned from the function
  }

// doesn't produce the expected result because of the uninitialized sum and the lack of return keyword in total