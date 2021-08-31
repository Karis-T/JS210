## Style Guide Practice

[AirBnB Style Guide](https://github.com/airbnb/javascript)

```js
let title = "The Three-Body Problem";
```

- use single quotes for strings (unless the string contains single quotes)

```js
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;
```

- Use one `let` or `const` declaration per variable or assignment
- Variable names should use camel casing

```js
let completed = lastPageRead == 400;
```

- Use `===` and `!==` over `==` and `!=`
- When mixing operators enclose them in parentheses because their precedence can be ambiguous when they are mixed

```js
if (finishedBook())
  console.log('You have finished reading this book');
```

- use braces with multiline blocks

```js
function read(pages) {
      console.log('You started reading.');
      for (let page=0; page<pages; page += 1) {
              let message = 'You read page '+page;
              console.log(message);
      }
}

read(400);
```

- Use soft tabs (space character) set to 2 spaces
- Set off operators with spaces
- use explicit coercion
- use named function declarations instead of function declarations

```js
let read = function read(pages) {
  console.log('You started reading.');
  for (let page = 0; page < pages; page += 1) {
    let message = 'You read page ' + String(page);
    console.log(message);
  }
};

read(400);
```

## ESLint

- A static code analyzer for JS used to automate style checks
- Use LS's [link](https://launchschool.com/gists/9ad96eed) to install configure and guide on how to use it