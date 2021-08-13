/*
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified by secondString.
*/

function indexOf(firstString, secondString) {
  for (let idx1 = 0; idx1 < firstString.length; idx1 += 1) {
      let substr = firstString[idx1];

    for (let idx2 = idx1 + 1; idx2 <= firstString.length; idx2 += 1) {
      if (substr === secondString) return console.log(idx1);
      substr += firstString[idx2];
    }

  }
  return console.log(-1);
}

function lastIndexOf(firstString, secondString) {
  for (let idx1 = firstString.length; idx1 >= 1; idx1 -= 1) {
      let substr = firstString[idx1];

    for (let idx2 = idx1 + 1; idx2 <= firstString.length; idx2 += 1) {
      if (substr === secondString) return console.log(idx1);
      substr += firstString[idx2];
    }

  }
  return console.log(-1);
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

