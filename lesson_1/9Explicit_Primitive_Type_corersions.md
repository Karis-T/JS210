# Explicit Primitive Type Coercions

**definition:** **coercions or conversions** are operations that are performed when we want to convert a primitive value into another type of value.

**RULE:** since JS primitives are immutable, no values are every converted, rather a new value is returned of the desired type.



## Converting Strings to Numbers

#### `Number()`

**RULE:** use the `Number` function to convert string with numeric values to numbers:

```js
Number('1');			//	1
Number('abc123')	//	NaN
```

**RULE:** if a string cannot be converted to a number, `Number` function returns `NaN`

#### `parseInt();` and `parseFloat();`

**RULE:** use `parseInt` and `parseFloat` global functions to also turn strings to numbers or floating points respectively.

```js
parseInt('123', 10);     // 123
parseInt('123.12', 10);  // 123, only returns whole numbers
parseInt('123.12');      // 123
parseFloat('123.12');    // 123.12, returns floating point values
```

**RULE:** `parseInt` take an optional `radix` argument. `radix` is the base mathematical numeral systems. It's recommended to specify this parameter to have more predictable behavior  



## Converting Numbers to Strings

#### `String()`

**RULE:** use the `String` function to convert numbers to strings. You can use it on values that don't even exist like `undefined` and `null`:

```js
String(123);             // "123"
String(1.23);            // "1.23"
String(undefined);			// undefined
```

#### `toString()`

**RULE:** use the `toString` method to also convert numbers to strings. Note you cannot use it on values that don't exist otherwise it'll produce an error:

```js
(123).toString();        // "123"
(123.12).toString();     // "123.12"
(undefined).toString();  // TypeError: Cannot read property 'toString' of undefined
```

**RULE:** 

- `String()` works with all types, including `null` and `undefined`, while `toString()` raises an exception in those cases.
- `String()` is guaranteed to return a string. This is not the case with `toString()` — individual objects can override `toString()` and they don't have to return a string.

#### `+` operator

**RULE:** use the `+` to implicitly coerce a number into a string:

```js
123 + '';                // "123"
'' + 123.12;             // "123.12"
```



## Boolean to Strings

**RULE:** use `String()` function or `toString()` method to convert boolean values into strings:

 ```js
 String(true);            // "true"
 String(false);           // "false"
 
 true.toString();         // "true"
 false.toString();        // "false"
 ```



## Primitive to Booleans?

#### the `===` operator

**RULE:** Like ruby there's no direct way to convert primitives to Booleans. The best way to handle it is to use the strict evaluation operator:

 ```js
 let a = 'true';
 let b = 'false';
 a === 'true';            // true
 b === 'true';            // false
 ```

#### `Boolean`

RULE: you can however convert any value into a boolean based on the truthiness and falsyness of the value in JS:

```js
Boolean(null);           // false
Boolean(NaN);            // false
Boolean(0);              // false
Boolean('');             // false
Boolean(false);          // false
Boolean(undefined);      // false
Boolean('abc');          // other values will be true
Boolean(123);            // true
Boolean('true');         // including the string 'true'
Boolean('false');        // but also including the string 'false'!
```

#### `!!` operator

**RULE:** a simpler way instead of `Boolean()` function is to use the bang operator `!!` which coerces a truthy or falsy value into its boolean equivalent.

**RULE:** since `!` returns the opposite of the values boolean equivalent, double `!!` turns it back into the values boolean equivalent:

```js
!!(null);                // false
!!(NaN);                 // false
!!(0);                   // false
!!('');                  // false
!!(false);               // false
!!(undefined);           // false

!!('abc');               // true
!!(123);                 // true
!!('true');              // true
!!('false');             // this is also true! All non-empty strings are truthy in JavaScript
```

