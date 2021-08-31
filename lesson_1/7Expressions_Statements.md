# Expressions / Statements

>If expressions are analogous to phrases, than statements are like sentences. Instead of a period to separate sentences we use a semicolon `;` to terminate statements.

>**Expressions** compute values but don't alter the programs state in any way eg.
>
>- a constant and variable are very simple expressions
>
>- an array or a function invocation expression are more complex expressions
>
>- you can create complex expressions out of simple ones using operators (ie `+ - * /`) and operands which will return a new value
>
>- some reserved words are also expressions:
>
>  ```js
>  true
>  false
>  null
>  this
>  ```
>
>**Statements** don't have a value (that we care about) but they do alter the state of the program through declarations and control structures
>
>- *expression statements* are expressions that have "side effects" Assignment is an example of this:
>
>  ```js
>  greeting = 'Hello' + name;
>  1 *= 3;
>  ```
>
>- *increment and decrement operators* are also a type of assignment, with the side effect of modifying a variables value
>
>- *function calls* are also statements (their intention is to alter the state of the program in some way, even if its just assignment)
>
>- you can also have *statement blocks*, which is a sequence of statements enclosed in curly braces. It combines multiple statements into a single *compound statement*
>
>  ```js
>  {
>    greeting = 'hello';
>    name = prompt('What is your name?');
>    console.log(greeting + " " + name);
>  }
>  ```
>  - statement blocks don't end with a semi-colon. However the primitive statements within the block end in semicolons
>  - Formally JS syntax only allows a single sub-statement to a bigger statement such as a `while` loop. However when you use a statement block you can place as many statements within the block. This will form a single compound statement and act as one sub-statement to a `while` loop statement.
>
>- *empty statements* allow you to include no statements when one is expected:
>
>  ```js
>  for (let i = 0; i < arr.length; arr[i++] = 0) /*empty*/;			//sets all elements in the array to 0
>  ```
>
>  - since all the work is done by the expression `arr[i++] = 0`, no loop body is necessary so we can use an empty statement here

> Expressions are *evaluated* to produce a value, but statements are *executed* to "make something happen"

## Expressions

**definition:** any valid code that resolves to a value. JS has strict evaluation, whereby an expression always resolves and stores a single value

```js
'hello';
10 + 13;
sum = 10; 
```

- a single **string** is an expression
- **arithmetic** operations are expressions
- **assignments** are expressions

The most common expression types are:

1. **Arithmetic:** expressions that evaluate to a number (eg. `10 + 13`)
2. **String:** expressions that evaluate to a character string (eg `'Hello' + ', World'`)
3. **Logical:** any expression that evaluates to `true` or `false` (eg `10 > 9`)

Anywhere JS expects/allows a value, is where an expression can appear:

```js
let a;
let b;
let c;

a = 3;
b = 10 + 3;
                  
c = (a + (3 + b));
```

## Operator Precedence

Like most languages, JS performs division and multiplication first before addition and subtraction. (think BODMAS). And as usual parentheses override the order of precedence and force JS to evaluate operators within the parentheses first:

```js
3 + 3 * 4;    // 15
(3 + 3) * 4;  // 24
```

**RULE:** Parentheses can enclose any expression - including function calls.

## Increment / Decrement Operators in Expressions

increment `++` and decrement `--` operators increment and decrement their operands by `1` respectively. 

operators may either appear:

- **before an operand** (prefix `++a`):  here JS modifies the operand then evaluates the expression
- **after an operand** (postfix `a++`): here JS evaluates the expression then modifies the operand 

```js
let a;
let b;
let c;

a = 1;
b = a++;  // equivalent to "b = a; a += 1;". so now b is 1 and a is 2
c = ++a;  // equivalent to "a += 1; c = a;". so now c is 3 and a is 3
```

- **RULE:** **postfix++** will always point to 2 different values:
  - `a` is assigned to `b`
  - `a` is incremented by 1 (`b` and `a` are now pointing to 2 different values)
- **RULE:** **++prefix** will always point to the same value:
  - `a` is incremented by 1
  - `a` is assigned to `c` (`c` and `a` are now referencing the same value)

## Logical Short Circuit Evaluation in Expressions

Just like ruby, short circuiting occurs in Logical operators and their operands

- **in `||` expressions:** if the first operand JS finds evaluates to `true`, the result is always `true`. JS short circuits and does not evaluate any values after that operand.
- **in `&&` expressions:** if the first operand JS find evaluates to `false`, the result is always `false`. JS short circuits and does not evaluate any values after than operand.

```js
let a = true;
let b = false;

a || (b = true);  // b is still false after this, because (b = true) is never evaluated
b && (a = 1);     // a is still true after this, because (a = 1) is never evaluated
```

## Statements

>JavaScript programs are nothing more than a sequence of statements and by default, they're executed one after another in the order they're written

**definition:** Statements control the execution of the program. They don't evaluate to values and they cannot be used as part of an expression.

eg. variable assignment is an expression, but variable declarations are statements:

```js
let a;                // a statement to declare variables
let b;
let c;
let d = (a = 1);      // this works, because assignments are expressions too
let e = (let f = 1);  // this gives an error, since a statement can't be used
                      // as part of an expression
```

types of statements:

- variable declaration
- `if...else`
- `switch`
- `while` and `for`

This code isn't valid because statements can't be used as part of an expression:

```js
> 5 * let foo
SyntaxError: Unexpected identifier

> console.log(let bar)
SyntaxError: missing ) after argument list
```

However some statements include expressions as part of their syntax: eg `let` statements include an initializer that sets the initial value of the variable:

```js
> let foo = 42
= undefined
```

- in this `let` statement, the code to the right of the `=` statement is an expression. The expression `42` happens to be part of the `let` statement but its still an expression in its own right.
