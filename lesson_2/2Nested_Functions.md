# Nested Functions

**RULE:** You can nest functions inside of other functions and there's no limit to how deep you can nest them:

```js
function circumference(radius) {
  function double(number) {		// nested function declaration
    return 2 * number;
  }
  
  return 3.14 * double(radius);	// invocation
}
```

