# Input / output

computers have many sources of input:

- mice
- keyboards
- disks
- network
- environmental sensors

A program can output to multiple sources:

- screen
- log
- network

## Command Line Output

`console.log` built-in function takes any JS value and logs it to the console regardless of its type

```js
let name = 'Jane';
console.log(`Good morning, ${name}!`);
```

on line 1 we initialize a `name` variable with the string `'Jane'` and then use it in a template literal  string on line 2 to output a message using `console.log` function.

## Command Line Input

With Javascript theres no easy way to get users input except for using Node.js ReadLine API, which is asynchronous with higher order functions and difficult to setup. 

An easier way is to install and add `readline-sync` to the folder you're working with

You must make sure you have a `package.json` file first by running the following command in the terminal:

```
npm init -y
```

then you can install `readline-sync`

```
npm install readline-sync --save
```

`--save` installs the package in the `node_modules` subdirectory of your current directory. Node.js programs can now require the package by calling `require` 

### Example: Greet the user By Name

```js
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
```

- on line 1 we use Node's built-in `require` function to import `readline-sync` into the program. it will return the library as an object, which is assigned to the variable `rlSync`.
- on line 2 we use the library object stored in `rlSync` to call the `question` method. This method displays the string argument you supplied and waits for the user to respond. 
- When the user writes down the answer and hits enter, their text is returned to the program and it is assigned to the variable `name` 
- `name` is then logged to the console by being interpolated inside a template literal which outputs a personalized greeting

### Example: Add Two Numbers Together

```js
let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);
```

Be careful! 

`rlSync.question` returns strings so you must coerce input into numbers before you can add them together. You can use the Number function to do that. Both variables must have the `Number` datatype 

## Input in the Browser

>Working with a browser's input controls requires a working knowledge of the Document Object Model (DOM). 
>
>However, most browsers implement the `prompt` function which lets a program ask for and obtain text-based input from the user.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Testing Prompt</title>
</head>
<body>
  <script src="personalized_greeting_browser.js"></script>
</body>
</html>
```

```js
let name = prompt("What's your name?");
console.log(`Good Morning, ${name}`);
```

open up the HTML doc in a browser and it'll automatically bring up a dialogue box and ask for your name. It will then output the result to the `console` tab in the Dev Tools

## Summary

- how to obtain user input
- how to work on that input
- how to show your results and display output to the user

