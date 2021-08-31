### Running Code

- To run your coded place it inside a HTML document and open it in Chrome. To do this you can either:

  1. add basic html structure and within the `<body>` tags add:

     ```html
     <!DOCTYPE html>
     <html>
       <head>
         <title>Document</title>
       </head>
       <body>
         <script>
           console.log("Hello, world!");
         </script>
       </body>
     </html>
     ```

     - to view the `console.log` using Chrome dev tools hit `Ctrl + Shift + j`

  2. add a basic HTML file and create a link to an external js file:

     ```html
     <!DOCTYPE html>
     <html>
       <head>
         <title>Document</title>
       </head>
       <body>
         <script src="example.js"></script>
       </body>
     </html>
     ```
     
     - this will load some JS from a file `my_javascript.js`
     - refresh the page to view any saved changes made to the JavaScript 

- Don't combine the methods (load a file and add js code in the `<script>`tags)

- You can also run code using Chromes dev tools by hitting the console tab

### Code Style

The style guide for JS is as follows:

**idiomatic names** are commonly used naming conventions that are acceptable to the following types of categories in JS:

#### Idiomatic Names

| Category                                     | Name              | Notes             |
| :------------------------------------------- | :---------------- | :---------------- |
| Non-constant variables and object properties | `employee`        |                   |
|                                              | `number`          |                   |
|                                              | `fizzBuzz`        |                   |
|                                              | `speedOfLight`    |                   |
|                                              | `destinationURL`  | URL is an acronym |
|                                              | `m00n`            |                   |
| Constructor functions and classes            | `Cat`             |                   |
|                                              | `BoxTurtle`       |                   |
|                                              | `FlightlessBird`  |                   |
| Other functions                              | `parseURL`        | URL is an acronym |
|                                              | `goFaster`        |                   |
| Configuration and magic constants            | `ABSOLUTE_PATH`   |                   |
|                                              | `TODAY`           |                   |
| Other `const` names                          | `employeeOfMonth` | Local style       |
|                                              | `HairyCat`        | Local style       |
|                                              | `ABSOLUTE_PATH`   | Local style       |

#### Valid but Non-Idiomatic Names

Non-Idiomatic names are used by external libraries as they are "easy to type names" that are unlikely to conflict with names in other libraries.

| Category                                     | Name           | Notes                        |
| :------------------------------------------- | :------------- | :--------------------------- |
| Universally non-idiomatic                    | `$number`      | Begins with $                |
|                                              | `fizz_buzz`    | snake_case not allowed       |
|                                              | `fizzBUZZ`     | BUZZ is not an acronym       |
|                                              | `_hello`       | Begins with `_`              |
|                                              | `goodbye_`     | Ends with `_`                |
|                                              | `milesperhour` | Undifferentiated words       |
|                                              | `MILESPERHOUR` | Undifferentiated words       |
| Non-constant variables and object properties | `Employee`     | Begins with capital letter   |
|                                              | `fizzBUZZ`     | BUZZ is not an acronym       |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Constructor functions and classes            | `cat`          | Begins with lowercase letter |
|                                              | `makeTurtle`   | Begins with lowercase letter |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Other functions                              | `ParseURL`     | Begings with capital letter  |
|                                              | `FIZZ_BUZZ`    | SCREAMING_SNAKE_CASE         |
| Configuration and magic constants            | `absolutePath` | Not SCREAMING_SNAKE_CASE     |
|                                              | `Today`        | Not SCREAMING_SNAKE_CASE     |

#### Invalid Names

| Name       | Notes                         |
| :--------- | :---------------------------- |
| 42ndStreet | Begins with number            |
| fizz-buzz  | Hyphen not allowed            |
| fizz.buzz  | Looks like property reference |

#### Avoid Magic Numbers

A magic number is a number or simple value that appears in your program which doesn't have any information that describes what that number represents. 

Use constants to avoid magic numbers, which are set at the top level of a program (you can also declare them inside a function):

```js
const NUMBER_CARDS_IN_HAND = 5;

function dealHand() {
  let hand = [];
  for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; cardNumber += 1) {
    hand.push(dealCard());
  }

  return hand;
}
```

```js
const FIRST_CHARACTER_CODE = 'a'.charCodeAt(); //97
const LAST_CHARACTER_CODE = 'z'.charCodeAt();	//122
```

#### Formatting

- use "2 space characters" not "tab characters"
- on a multiple line block, curly braces should:
  - opening brace should be on the same line as the initial statement
  - ending brace on its own line
- single line statements you can have braces on the same line
- semi-colons should always terminate a statement. JS gets confused if you omit them as it sees the previous statement connected to the next statement. This can lead to unexpected results

```js
if (myObject.myNumber > 26) {
  console.log('Number is greater than 26');
} else {
  console.log('Number is less than or equal to 26');
}
```

when it comes to `if` `for` and `while` statements insert spaces:

- between keywords
- between opening and closing parentheses
- before and after operators

```js
// Bad
let counter=0;
while(counter<15){
  counter+=1;
}

// Good
let counter = 0;
while (counter < 15) {
  counter += 1;
}
```

use a single `let` declaration per variable:

```js
// Bad
let firstName = 'Shane',
    lastName = 'Riley',
    dogs = ['Josie', 'Libby'];

// Good
let firstName = 'Shane';
let lastName = 'Riley';
let dogs = ['Josie', 'Libby'];
```
