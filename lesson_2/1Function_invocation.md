# Function Invocations and Arguments

```js
function startle() {
  console.log('Yikes!');
}

startle(); //logs Yikes!
```

- **RULE:** to invoke a function append `()` to its name
- **RULE:** Function names are local variables that happen to have a function object as a value

```js
let suprise = startle;
suprise();	//logs Yikes!
```

- **RULE:** You can assign the function object to new local variable and call the function with the new name appended with `()`

```js
function takeTwo(a, b) {
  console.log(a);
  console.log(b);
  console.log(a + b);
}

takeTwo(1);
// 1
// undefined
// NaN
```

- **RULE:** if you don't specify equal number of arguments in the function declaration:
  - no error is raised
  - the argument that wasn't provided in the call will have the value `undefined`
  - `NaN` log is a result of the `undefined` value assigned to `b` (`undefined + 1` evaluates to `NaN`)

```js
takeTwo(1, 2, 4);
// logs:
1
2
3
```

- **RULE:** If you pass more arguments to a function than it expects, JS also won't raise an error



