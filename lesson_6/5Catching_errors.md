# Catching Errors

It is not possible to avoid all errors so instead of trying to avoid them altogether you can use the `try/catch/finally` block:

```js
try {
  // Do something that might fail here and throw an Error.
} catch (error) {
  // This code only runs if something in the try clause throws an Error.
  // "error" contains the Error object.
} finally {
  // This code always runs, no matter if the above code throws an Error or not.
}
```

- here `error` contains an Error object.
- `finally` clause is optional and can be omitted.

In this case we are looking to see if `JSON.parse` throws a syntax error due to not using double quoted strings in its object-like string:

```js
let object = { 'name': 'Ferdinand', 'age': 13 };  // object literal
let json = '{ "name": "Ferdinand", "age": 13 }';  // JSON string
```

```js
function parseJSON(data) {
  let result;

  try {
    result = JSON.parse(data);  // Throws an Error if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an Error
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }

  return result;
}

let data = 'not valid JSON';

parseJSON(data);    // Logs "There was a SyntaxError parsing JSON data:
                    //       Unexpected token i in JSON at position 0"
                    // Logs "Finished parsing data."
                    // Returns null
```



## When to Use Try/Catch

Only use `try/catch/finally` blocks when both below conditions are true:

1. A built-in JavaScript Function or method can throw an Error and you need to handle or prevent that Error.

2. A simple guard clause is impossible or impractical to prevent the Error.

## Further Reading

check out [this student article](https://medium.com/launch-school/javascript-weekly-graceful-error-handling-2f4045262df) for an additional help on errors in JavaScript
