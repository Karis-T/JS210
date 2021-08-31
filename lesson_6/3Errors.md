# Errors

When a JS interpreter cannot continue executing a program it creates an Error that describes the problem and stops the program

## Terminology

- you can throw an error
- or raise an exception

## `ReferenceError`

**RULE:** A `ReferenceError` is thrown when you try to use a variable or function that doesn't exist:

```js
a;    // Referencing a variable that doesn't exist results in a ReferenceError.
a();  // The same is true of attempting to call a function that doesn't exist.
```

## `TypeError`

**RULE:** `TypeError`s are thrown when you try to access a property on a value that doesn't contain properties such as `null` or `undefined`. 

**RULE:** `TypeError`s are also thrown when you try to to call a variable that isn't referencing a function:

 ```js
 var a;      // a is declared but is empty, as it has not been set to a value.
 typeof(a);  // "undefined"
 
 a.name;     // TypeError: Cannot read property 'name' of undefined
 
 a = 1;
 a();        // TypeError: Property 'a' is not a function
 ```

## `Syntax Error`

**RULE:** After loading a JS program but before runtime `SyntaxError`s are thrown due to incorrectly written syntax 

```js
function ( {}    			// SyntaxError: Unexpected token (
```

```js
JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0
```

## Other Errors

There are a few other errors that can be thrown in JS which are less common:

- `RangeError`
- `URIError`

- and more
