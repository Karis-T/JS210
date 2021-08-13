function toLowerCase(str) {
  let lowerCaseStr = ''

  for (let idx = 0; idx < str.length; idx += 1) {
    let asciiNumeric = str.charCodeAt(idx);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) asciiNumeric += 32;
    lowerCaseStr += String.fromCharCode(asciiNumeric);
  }

  return console.log(lowerCaseStr);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"