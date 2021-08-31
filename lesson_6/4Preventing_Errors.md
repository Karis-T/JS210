# Preventing Errors

Errors usually occur where assumptions are made in code

```js
function lowerInitial(word) {
  return word[0].toLowerCase();
}

lowerInitial('');       // TypeError: Cannot read property 'toLowerCase' of undefined
```

Here we assumed that the word will always have a length of at least 1. This is quite common:

- If a value from a form comes from a client who hasn't entered any data
- Data coming from a database could contain missing data

## Guard Clause

To avoid these types of errors we use a **guard clause**, which is a precondition piece of code that the data must meet in order to be used.   

```js
function lowerInitial(word) {
  // If word contains an empty String, return a dash
  if (word.length === 0) {       
    return '-'; 
  }

  return word[0].toLowerCase();  
  // word is now guaranteed to have at least 1 character
} 
```

## When To Use Guard Clauses

Use guard clauses when a Function can't trust that its arguments are valid. 

- Invalid arguments have incorrect types, structures, values, or properties
- Usually your program should trust that its always calling method with valid values
- If you know your program will always call `lowerInitial` with a non-empty string you don't need a guard clause.

## Detecting Edge Cases

- examine the assumptions present in your code
- ask yourself: 
  - does your program violates your assumptions?
  - if so What happens when it does?
  - What are the code inputs?
    - for functions they're usually arguments
    - each data type has its own set of values that have undesired behavior and bugs
    - particular type of value combos can cause unexpected conditions
- assumptions are usually edge cases as they are an extreme case that doesn't normally happen
- the shortest string example `''` in `lowerInitial` is an edge case

## Planning Your Code

- one way to plan ahead is to write out the common use cases of a new function and check how the function handles them. This is the best way to identify edge cases

```js
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));     // Logs "Australia, Brazil, Cuba, Senegal"
```

- Here are some use cases we want to make sure `alphaInsert()` can handle:

```js
alphaInsert([], 'Brazil');             // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');  // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');       // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     // Duplicate entry
```

- if its gets overwhelming just focus on the more basic use cases then revisit the complete list of use cases to verify if each implementation works for each case.
- Be mindful of invalid data types passed in as arguments - eg. passing a number to a function when a number expects a string

