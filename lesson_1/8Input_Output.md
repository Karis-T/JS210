# Input / Output in the Browser

## `prompt()` gets User Input

**in a browser** the `prompt` method enables a dialogue box to pop up with an optional message that asks the user to enter some text. Use this method to collect user input in a browser environment:

 ```js
 let name = prompt('What is your name?');
 let guess = prompt();           // blank prompt window
 ```

- line 1 the `prompt` method will return the string the user enters and assign it to the initialized `name` variable
- line 2 the `prompt` method will open up a blank prompt window (with no question) and will return the string the user enters and assign it to the initialized `guess` variable
- **RULE:** like ruby's, `gets`,  `prompt` will always capture input as a string, even if the user enters a number it will be a string number ie. `'1'`



## `alert()` Displays a Message to the User

**in the browser** the `alert` method displays a dialog box with a message and an `OK` button. The button dismisses the dialog box. 

- Use `alert` to notify the user of an event or item of interest, but doesn't require any input from the user

```js
alert('Hello, world');     // alert dialog box with a message
alert();                   // an empty alert dialog box
```



## Logging Debugging messages to JS Console

`console.log` method outputs a message to the JS console 

- use console.log only for debugging purposes as users don't look at the console when they use browsers

```js
let name = prompt('What is your name?');
console.log('Hello, ' + name);
```

