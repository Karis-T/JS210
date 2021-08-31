# Arrays and Operators

`+`, `-`, `*`, `/`, `%`, `+=`, `-=`, `==`, `!=`, `===`, `!==`, `>`, `>=`, `<`, `<=

While operators can be extremely useful with string and number values they are almost useless with Array objects

## Arithmetic Operators

**RULE:** arithmetic operators convert arrays to strings before performing an operation. Once converted, operations work in the same way as Implicit Primitive Type coercions do:

```js
let initials = ['A', 'H', 'E'];
initials + 'B';                   // "A,H,EB"
initials;                         // [ "A", "H", "E" ]
initials + ['B'];      // "A,H,EB"
initials;              // [ "A", "H", "E" ]
```

**RULE:** to see how JS coerces arrays into strings use the `String` function. Fortunately these operations are non-mutating and do not modify the array:

```js
String([initials]);     // "A,H,E"
String([]);             // ""
String([undefined]);    // ""
```

**RULE:** array arithmetic operators all behave in un-useful ways but more importantly do not produce an error, allowing for bugs to go undetected: 

```js
[1] * 2;              // 2 -- becomes '1' * 2, then 1 * 2
[1, 2] * 2;           // NaN -- becomes '1,2' * 2, then NaN * 2
[5] - 2;              // 3
[5] - [2];            // 3
5 - [2];              // 3
5 - [2, 3];           // NaN -- becomes 5 - '2,3', then 5 - NaN
[] + [];              // '' -- becomes '' + ''
[] - [];              // 0 -- becomes '' - '', then 0 - 0
+[];                  // 0
-[];                  // -0
```

```js
>> [1,2] + 1
TypeError: no implicit conversion of Fixnum into Array
	from (irb):2:in `+'
	from (irb):2
	from /usr/bin/irb:12:in `<main>'
>> [1,2] + [1]
=> [1, 2, 1]
>> a = [1]
=> [1]
>> a += 2
TypeError: no implicit conversion of Fixnum into Array
	from (irb):7:in `+'
	from (irb):7
	from /usr/bin/irb:12:in `<main>'
```

- Since Ruby raises errors when it attempts invalid operations on an array, bugs are more likely to be noticed early in development.
- **This does not mean that one of these languages is better than the other.** Each language has its own strengths and weaknesses. Proficient developers must learn the language's quirks and learn to watch for common issues.

## Comparison Operators

**RULE:** Neither Strict nor non-strict equality operators will evaluate 2 different arrays with the same values as equal. This is because they are 2 different arrays (that is they are referencing two different objects). 

```js
let friends = ['Bob', 'Josie', 'Sam'];
let enemies = ['Bob', 'Josie', 'Sam'];
friends == enemies;                    // false
friends === enemies;                   // false
[] == [];                              // false
[] === [];                             // false
```



**RULE:** If two variables are referencing the same array, equality operators evaluate to `true`. This is because arrays are only considered equal when they are the **same object**. Equality operators only care if they are evaluating the same array, not if two different arrays share the same content.

```js
let friends = ['Bob', 'Josie', 'Sam'];
let roommates = friends;
friends == roommates;                  // true
friends === roommates;                 // true
```



**RULE:** When arrays are compared with non-arrays using non-strict equality operator, **JS implicitly coerces the array into a string** before performing the comparison:

```js
[] == '0';               // false -- becomes '' == '0'
[] == 0;                 // true -- becomes '' == 0, then 0 == 0
[] == false;             // true -- becomes '' == false, then 0 == 0
[] == ![];               // true -- same as above
[null] == '';            // true -- becomes '' == ''
[undefined] == false;    // true -- becomes '' == ''
[false] == false;        // false -- becomes 'false' == 0, then NaN == 0
```

**RULE:** While relational comparison operators `<`, `>=`, `<` and `<=` are defined for arrays and objects they are useless because they return ` true` or `false` in unexpected ways. Don't use them with arrays or objects 
