# Modern JS: Strict Mode

JS ES5 introduced **strict mode** which is an optional mode that modifies the semantics of JS and prevents all kinds of errors and syntax such as the following:

- not declaring a variable before assignment
- not using `this` when assigning an object property
- using numbers beginning with `0`
- attempting to assign values to JS keyword / value

## What to Focus On

Moving forward try to use Strict mode whenever possible

- What is strict more and how does it differ from sloppy?
- How to enable strict mode at global or function level?
- How does code behave under strict or sloppy mode?
- When is strict mode enabled automatically?
- When to use  / not use strict mode?

## What Does Strict Mode Do?

Enabling strict mode makes 3 big changes to JS semantics:

1. eliminates some silent errors to throw errors instead
   - Silent errors occur when a program does something unintentional and continues to run as if nothing went wrong
   - Silent errors lead to errors that are difficult to track down 
2. prevents some code that can inhibit JS's ability to run faster
3. prohibits using names and syntax that may conflict with future versions of JS

These changes create the following benefits:

- prevent / mitigate bugs
- makes debugging easier
- helps your code run faster
- helps avoid conflicts with future change to the language

## Enabling Strict Mode

```js
"use strict";
```

Turn on strict mode by adding the above code:

1. at global level of a program (the beginning of a program file)

2. or at individual function level (at the beginning of a function definition)
   - Nested functions inherit strict mode from surrounding scope

The statement `"use strict"` is an example of a **pragma**:

- Pragmas are a language construct that tells a complier interpreter or other translator to process the code in a different way
- Pragmas aren't part of the language and often use off syntax like `"use strict"`

Other things to consider when enabling strict mode:

- You must add single or double quotes to `"use strict"`

- You cannot enable strict mode inside a block (only at the beginning of a file or function)

- Once you enable strict mode you can't disable it later in the same program / function

- JS automatically enables strict mode in the body of a `class` and modules

- You must add the code to the very beginning of a file or function (not partway)

  ```js
  "use strict";
  
  // The rest of the program. Everything from here to the end of the file runs in strict mode.
  
  function foo() {
    // strict mode is enabled here too.
  }
  
  // Strict mode is still enabled
  foo();
  ```

  ```js
  function foo() {
    'use strict';
  
    // The rest of the function. Everything from here to the end of the function runs in strict mode.
  }
  
  // Strict mode is disabled unless you defined it globally.
  foo();
  ```

- strict mode is lexically scoped - that is it only applies to the code that enables it

  ```js
  function foo() {
    "use strict";
    // All code here runs in strict mode
  }
  
  function bar() {
    // All code here runs in sloppy mode
    foo(); // This invocation is sloppy mode, but `foo` runs in strict mode
    // All code here runs in sloppy mode
  }
  ```

  ```js
  function foo() {
    // All code here runs in sloppy mode
  }
  
  function bar() {
    "use strict";
    // All code here runs in strict mode
    foo(); // This invocation is strict mode, but `foo` runs in sloppy mode
    // All code here runs in strict mode
  }
  ```

### Implicit Global Variables

**RULE:** Strict mode disables global objects; and does so by raising an error if you try to assign a value to a variable that hasn't been declared:

```js
"use strict";

function foo() {
  bar = 3.1415; // ReferenceError: bar is not defined
}

foo();
console.log(bar);
```

- errors alert you when something is wrong and are helpful for debugging

if you want to define a global variable in strict mode you declare it explicitly outside a function or block:

```js
"use strict";

let bar;

function foo() {
  bar = 3.1415;
}

foo();
console.log(bar); // 3.1415
```

**RULE REMINDER:** JS automatically creates a variable for you when you assign it to a value to it without declaring it.

- No matter where your code initializes an undeclared variable - it becomes a global variable
- technically JS defines undeclared variable as properties of the global object
- These properties act like global variables and are accessible anywhere in your program
- Leads to bugs - its easy to overwrite a variable thats globally available

**RULE:** If you declare a variable with one name and try to reassign it with a misspelled name, sloppy mode will create a new global variable:

```js
let aVariableWithALongName = 2.71828;

// a bunch of omitted code here

aVariab1eWithALongName = 3.14159;
console.log(aVariableWithALongName); // 2.71828; should be 3.13159
```

-  line 5 creates a global variable instead of reassigning the variable as intended.

```js
"use strict";

let aVariableWithALongName = 2.71828;

// a bunch of omitted code here

aVariab1eWithALongName = 3.14159; // ReferenceError: aVariab1eWithALongName is not defined
console.log(aVariableWithALongName);
```

- here strict mode lets you know there's a problem with the name

### Implicit Context in Functions

- return to in JS225

### Forgetting to Use `this`

- return to in JS225

### Leading Zeros

**RULE:** If you use a literable integer that begins with `0` but doesn't contain the digits `8` or `9`, sloppy mode interprets it as an octal number:

```js
console.log(1234567);  // 1234567
console.log(01234567); // 342391 (the same as octal 0o1234567)
```

- modern JS defaults to decimal when using `parseInt`

**RULE:** In strict mode, numbers that look octal raise an error:

 ```js
 "use strict";
 
 console.log(1234567);   // 1234567
 console.log(0);         // This is okay
 console.log(0.123);     // So is this
 console.log(-0.123);    // So is this
 console.log(01234567);  // SyntaxError: Octal literals are not allowed in strict mode.
 console.log(089);       // SyntaxError: Numbers can't begin with 0
 console.log(01.23);     // SyntaxError: Numbers can't begin with 0
 console.log(-01234567); // SyntaxError: Octal literals are not allowed in strict mode.
 console.log(-089);      // SyntaxError: Numbers can't begin with 0
 console.log(-01.23);    // SyntaxError: Numbers can't begin with 0
 ```

- strict mode prevents an number literal begginning with `0` or `-0` except `0` itself or `0` with a decimal component `0.123`

### Other Strict Mode Differences

In addition to the above strict mode prevents / disables you from the following:

- (*) using function declarations in blocks
- (*) declaring two properties with the same name in an object
- using some newer reserved keywords eg. `let` and `static` as variable names
- using the `delete` operator on variable names
- binding of `eval` and `arguments` in any way
- access to some properties of the `arguments` object in a function
- `with` statement - which is not recommended anywhere

(*) ES5 prohibited these but they are now allowed. However its reccomended you avoid both those dot points

## When Should I Use Strict Mode?

- for any new code you write:
  - adding new functions to an old codebase
- If you're not creating new functions in an old codebase, don't use it as it changes the semantics, particularly variable declarations `this` and silent failures 
  - can easily break code that works well

```js
"use strict";

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  let allCards = () => {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (let counter = 0; counter < 400; counter += 1) {
    let randomIndex1 = randomCardIndex();
    let randomIndex2 = randomCardIndex();
    let tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());
```

- Add the `"use strict"` pragma.
- Use `let` or `const` to declare all variables.
- Remove `this` from `this.RANKS`, `this.SUITS`, and `this.deck`
