# Implicit Primitive Type Coercions

**definition of implicit coercion:** Unlike other languages that would return errors when 2 different primitive types are compared, JS tries to make sense of the expression and if necessary will convert values to types that be operated on.

-  this flexibility makes bugs more likely and be undetected for a long time and evident in another part of the program. This can make debugging in JS challenging
- As a rule: avoid automatic type coercion. Even if a piece of code will use it intentionally. 

## Plus `+` operator

#### the unary plus operator

This works exactly the same as `Number()` function and converts primitives to numbers like so:

```js
+('123')        // 123
+(true)         // 1
+(false)        // 0
+('')           // 0
+(' ')          // 0
+('\n')         // 0
+(null)         // 0
+(undefined)    // NaN
+('a')          // NaN
+('1a')         // NaN
```

#### the binary plus operator

This uses two operands and either performs addition or concatenation. When a string is present, concatenation is performed, otherwise addition:

```js
'123' + 123     // "123123" -- if a string is present, coerce for string concatenation
123 + '123'     // "123123"
null + 'a'      // "nulla" -- null is coerced to string
'' + true       // "true"
```

**RULE:** When both operands are either: numbers, booleans, `null` ,`undefined` They are converted into number then added together:

```js
1 + true        // 2
1 + false       // 1
true + false    // 1
null + false    // 0
null + null     // 0
1 + undefined   // NaN
```

**RULE:** `NaN` stands for "Not a Number" even though in JS `NaN` is a type of `Number`. Therefore `1 + NaN` evaluates to `NaN`

**RULE:** When one operand is an **object** (including arrays and functions), both operands are converted to strings and concatenated together:

```js
[1] + 2                     // "12"
[1] + '2'                   // "12"
[1, 2] + 3                  // "1,23"
[] + 5                      // "5"
[] + true                   // "true"
42 + {}                     // "42[object Object]"
(function foo() {}) + 42    // "function foo() {}42"
```



## Other Arithmetic Operators

**RULE:** all other arithmetic operators (`-`, `*`, `/`, `%`) are defined for numbers only so JS will convert both operands into numbers:

```js
1 - true                // 0
'123' * 3               // 369 -- the string is coerced to a number
'8' - '1'               // 7
-'42'                   // -42
null - 42               // -42
false / true            // 0
true / false            // Infinity
'5' % 2                 // 1
```



## Equality Operator

**RULE:** Strict equality operators NEVER perform type coercions

**RULE:** Non-strict equality operators have a set of rules for coercing types before comparing

### Strict equality operator

**RULE:** two operands are only equal if they are both the same type and have the same value:

```js
1 === 1               // true
1 === '1'             // false
0 === false           // false
'' === undefined      // false
'' === 0              // false
true === 1            // false
'true' === true       // false
```

### Non-Strict equality operator

**RULE:** When working with the same type, non-strict works the same as strict operators. When types are different however, JS implicitly coerces into the same type before comparing them using the following rules:

1. When one operand is a **string** and the other is a **number**, the string is converted to a number

   ```js
   '42' == 42            // true
   42 == '42'            // true
   42 == 'a'             // false -- becomes 42 == NaN
   0 == ''               // true -- becomes 0 == 0
   0 == '\n'             // true -- becomes 0 == 0
   ```

2. When one operand is a **boolean**, it is converted to a number

   ```js
   42 == true            // false -- becomes 42 == 1
   0 == false            // true -- becomes 0 == 0
   '0' == false          // true -- becomes '0' == 0, then 0 == 0 (two conversions)
   '' == false           // true -- becomes '' == 0, then 0 == 0
   true == '1'           // true
   true == 'true'        // false -- becomes 1 == 'true', then 1 == NaN
   ```

3. When one operand is `null` and the other is `undefined`, non-strict operator always returns `true`

   ```js
   null == undefined      // true
   undefined == null      // true
   ```

4. When both operands are `null` or both are `undefined`, the return value is `true`.

   ```js
   null == null           // true
   undefined == undefined // true
   ```

5. When comparing a single `null` or `undefined` to all other values, `==` returns `false`

   ```js
   undefined == false     // false
   null == false          // false
   undefined == ''        // false
   undefined === null     // false -- strict comparison
   ```

6. When one operand is `NaN` the comparision always returns `false`

   ```js
   NaN == 0              // false
   NaN == NaN            // false
   NaN === NaN           // false -- even with the strict operator
   NaN != NaN            // true -- NaN is the only JavaScript value not equal to itself
   ```

**RULE:** `!=` and `!==` operators follow the same rules as above, except the result of the comparison is inverted (i.e., `true` becomes `false`).

## Relational Operators

**RULE:** Relational operators (< > <= and >=) are defined only for numbers and strings by using numeric comparison and lexicographic order respectively. There are no strict versions of these operators.

1. When **both** operands are strings JS compares them lexicographically

   ```js
   "50" < "6";						// true -- 5 is less than 6
   ```

2. When operands are anything else, JS converts both operands to numbers and compares them using numeric comparison:

   ```js
   11 > '9'              // true -- '9' is coerced to 9
   '11' > 9              // true -- '11' is coerced to 11
   123 > 'a'             // false -- 'a' is coerced to NaN; any comparison with NaN is false
   123 <= 'a'            // also false
   true > null           // true -- becomes 1 > 0
   true > false          // true -- also becomes 1 > 0
   null <= false         // true -- becomes 0 <= 0
   undefined >= 1        // false -- becomes NaN >= 1
   ```

   

## Best Practices

- **Always use explicit type coercions!** (eg `String()` and `Number()`)
- **Always use strict equality operators!** (`===` and `!==`).

the style used at Launch School insists that you always use the strict operators as it's less confusing to use strict operators, and easier to debug.

