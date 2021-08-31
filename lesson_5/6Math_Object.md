# Working with the Math Object

**RULE:** `Math` is not a constructor

#### `Math.PI`

```js
function radiansToDegrees(radian) {
  return (radian * 180) / Math.PI;
}
```

- The **`Math.PI`** property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159
- Because `PI` is a static property of `Math`, you always use it as `Math.PI`, rather than as a property of a `Math` object you created

#### `Math.abs`

```js
Math.abs(-180);			//returns 180
```

- Force a positive value with `Math.abs`
- The **`Math.abs()`** function returns the absolute value of a number. That is, it returns `x` if `x` is positive or zero, and the negation of `x` if `x` is negative.

#### `Math.sqrt`

```js
Math.sqrt(16777216);	//returns 4096
```

- **`Math.sqrt()`** function returns the square root of a number. If the number is negative, [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) is returned

#### `Math.pow`

```js
Math.pow(16, 6);	//returns 16777216
```

- The **`Math.pow()`** function returns the `base` to the `exponent` power, as in `base^exponent`
- If the base is negative and the exponent is not an integer, the result is `NaN`

#### `Math.round`, `Math.floor`, `Math.ceil`

```js
let a = 50.72;
let b = 49.2;
let c = 49.86;

Math.floor(a);		// returns 50
Math.ceil(b);			// returns 50
Math.round(c);		// returns 50
```

- There are three methods that perform different types of rounding
- `Math.round` takes any decimal value and rounds it to the nearest integer. If the fractional part of the number is less than `0.5`, `Math.round` rounds the value downwards; otherwise, it rounds the value upwards. Note: if the fractional part is exactly `0.5`, `Math.round` rounds upwards
- `Math.floor` rounds any number downward to the next lower integer.
- `Math.ceil` rounds any number upward to the next higher integer.

#### `Math.random`

```js
function randomInt(min, max) {
  if (min > max) [max, min] = [min, max];
  else if (min === max) return min;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
```

- returns a random floating-point number between `0` and `1`, excluding the exact value of `1`
- This isn't helpful so the above returns a random number between two values `min` and `max`
