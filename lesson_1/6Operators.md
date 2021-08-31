# Operators

Operators tell the computer to perform particular operations on operands (values). JS has several types of operators.

Operators usually operate on 2 operands eg. `a + b;`:

- `+` is the operator
- `a` and `b` are the operands
- The operands act as the operators **input**

## Arithmetic Operators

takes 2 numeric values and returns a single numeric value. The standard arithmetic operators are `+`, `-`, `/`, `*` and `%`

The remainder operator is not the same as the modulo operator from Ruby. 

- `%` returns the remainder of an integer division
- There's no difference between modulo and remainder when it comes to positive integers eg. `10 % 3` returns `1`
- Theres a difference when working with negative integers:
  - in JS `10 % -3` returns `1`
  - in other languages `10 % 3` returns `-2`

## Assignment Operators

assignment operator assign the right operand value to the left operand variable. eg. `x = 10` assigns the value `10` to the variable `x`. 

JS also includes compound assignment operators:

- they combine arithmetic operators with assignment using a shorthand notation.

| Name                      | Shorthand Operator | Meaning   |
| :------------------------ | :----------------- | :-------- |
| Addition Assignment       | a += b             | a = a + b |
| Subtraction Assignment    | a -= b             | a = a - b |
| Multiplication Assignment | a *= b             | a = a * b |
| Division Assignment       | a /= b             | a = a / b |
| Remainder Assignment      | a %= b             | a = a % b |

## Comparison Operators

these operators compare its operands and return a boolean value `true` or `false`

**when operators are of different types JS implicitly convert them into suitable types**. 

- This is why JS programmers avoid using `==` and `!=`
- They instead opt for strict evaluation `===` and `!==`
- **strict comparisons do not perform any conversions** 

| Operator               | Description                                                  |
| :--------------------- | :----------------------------------------------------------- |
| Equal (==)             | Returns true if the operand values are equal                 |
| Not Equal (!=)         | Returns true if the operand values are not equal             |
| Strict Equal (===)     | Returns true if the operand values are equal and the same type |
| Strict Not Equal (!==) | Returns true if the operand values are not equal and/or not the same type |
| Greater than (>)       | Returns true if the left operand is greater than the right   |
| Less than (<)          | Returns true if the left operand is less than the right      |

## String Operators

you can compare strings just as you would numbers:

```js
'a' < 'b';         // true
'Ant' > 'Falcon';  // false
'50' < '6';        // true
```

- String comparisons use Unicode lexicographical ordering and compare one character at a time
-  since `'5'` precedes `'6'` lexicographically `50 < 6;` returns `true`

strings also allow concatenation using the `+` operator

They also support the `+=` operator which works similar to the numeric addition assignment operator:

```js
let a = 'Hello';
a += ', world!';

a;       // "Hello, world!"
```

## Logical Operators

You can combine both boolean values and non-boolean values with logical operators:

| Operator          | Description                                                  |
| :---------------- | :----------------------------------------------------------- |
| Logical And (&&)  | - returns true if both operands are `true`, `false` otherwise<br />- for non boolean values, returns the first operands if it can be converted into `false`, otherwise the second operand |
| Logical Or (\|\|) | - Returns `true` if at least one operand evaluates to `true`, `false` otherwise<br />- for non-boolean values, returns the first operand if it is truthy, otherwise the second operand |
| Logical Not (!)   | - Returns `true` if the operand value is falsey, `false` otherwise. <br />- This operator is a unary operator and takes only 1 operand |

#### && And operator

```js
true && true;    // true
true && false;   // false
false && true;   // false
false && false;  // false
false && [];     // false
```

#### || Or operator

```js
true || true;    // true
true || false;   // true
false || true;   // true
false || false;  // false
false || [];     // [] (second operand is non-boolean, it is returned as is)
```

#### ! Not Operator

```js
!true;   // false
!false;  // true
!!true;  // true
!1;      // false
![];     // false
```



