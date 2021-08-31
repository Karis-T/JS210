function repeatedCharacters(str) {
  str = str.toLowerCase();
  let obj = {};
  for (let ele of str) {
    !!obj[ele] ? obj[ele] += 1 : obj[ele] = 1;
  }
  for (let key in obj) if (obj[key] === 1) delete obj[key];
  console.log(obj);
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }