function isAlphaAscii(asciiNum, asciiArr) {
  let [upperAscii, lowerAscii] = asciiArr;

  if (asciiNum >= upperAscii && asciiNum <= upperAscii + 12) return true;
  else if (asciiNum >= lowerAscii && asciiNum <= lowerAscii + 12) return true;

  return false;
}

function rot13 (str) {
  const ASCII_A = [65, 97];
  const ASCII_N = [78, 110];
  let rotated = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    let asciiNum = str.charCodeAt(idx);

    if (isAlphaAscii(asciiNum, ASCII_A)) asciiNum += 13;
    else if (isAlphaAscii(asciiNum, ASCII_N)) asciiNum -= 13;

    rotated += String.fromCharCode(asciiNum);
  }

  return rotated;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
