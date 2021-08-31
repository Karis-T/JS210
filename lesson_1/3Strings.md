# Strings

## Special Characters

- strings can contain anything from the UTF-16 character set (1000s of characters)

- to format a string we need to use **escape sequences:**

  | Code | Character       |
  | :--- | :-------------- |
  | `\n` | New line        |
  | `\t` | Tab             |
  | `\r` | Carriage return |
  | `\v` | Vertical tab    |
  | `\b` | Backspace       |

  - for multi-line text we must use the escape sequence `\n` to specify a new line:

    ```js
    let multiline = 'This string...\nspans multiple lines';
    ```

  - there is no spaces before or after the `\n`

- We sometimes also need to **escape standard characters**

  - when using single quotes around a string, single quotes must be escaped:

    ```js
    let quote = '"It\'s hard to fail, but it is worse never to have tried to succeed." - Theodore Roosevelt';
    ```

  - when using double quotes around a string, double quotes must be escaped:

    ```js
    let quote = "\"It's hard to fail, but it is worse never to have tried to succeed.\" - Theodore Roosevelt";
    ```

## String Concatenation

use **concatenation** to append content to an existing string.

- while concatenation and addition use the same `+` symbol they are different operations
- **JS will always perform concatenation when combined with a string operand**
- otherwise it performs addition

```js
let firstName = 'John';
let lastName = 'Doe';
firstName + ' ' + lastName;  // "John Doe"
```

## Character Access

Strings are like a collection of characters. Each character can be accessed either using the `String.prototype.charAt` method or bracket notation: `[]`

```js
'hello'.charAt(1);  // "e"
'hello'[1];         // "e"
```

- In JS bracket notation isn't a method, just an operator

- as with Ruby JS uses 0-based indexing: the first character will always be indexed at 0 and the last index will always be one less than the strings length:

  ```js
  0	1	2	3	4
  h	e	l	l	o
  ```

## String Length

call the `length` property to return the length of a string:

```js
'hello'.length;     // 5
```

## Working with Long Strings

use **concatenation** `+` or `\` to join long literal strings together making it easier to read:

```js
let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
             'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
             'enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
             'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
             'in reprehenderit in voluptate velit esse cillum dolore eu fugiat ' +
             'nulla pariatur. Excepteur sint occaecat cupidatat non proident, ' +
             'sunt in culpa qui officia deserunt mollit anim id est laborum.';
```

```js
let lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut \
enim ad minim veniam, quis nostrud exercitation ullamco laboris \
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \
in reprehenderit in voluptate velit esse cillum dolore eu fugiat \
nulla pariatur. Excepteur sint occaecat cupidatat non proident, \
sunt in culpa qui officia deserunt mollit anim id est laborum.';
```

`\` tells JS to ignore the following newline and concatenate the next line to the current string:

- be careful! `\` do not include any spaces or tabs after the `\` because JS will treat them as literal spaces or tabs. it won't be able to find the closing quotation mark and issue a syntax error. 
- be careful! of including any spaces or tabs after the `\` on the next line (see above how there's no tabs) as they will be included in the string
