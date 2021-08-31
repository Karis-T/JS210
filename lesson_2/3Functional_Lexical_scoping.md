# Functional Scopes & Lexical Scoping

**definition:**  variable scope is the part of the program that can access the variable by name. 

**definition:** variable scoping rules describes where a programming language finds and retrieves values from previously declared variables

## The Global Scope

```js
let name = 'Julian';
console.log(name);
```

**RULE:** when neither functions nor blocks exist in a program, code is written in the **global scope**

- we declare the variable `name` on line 1. When this line runs, `name` is available from that point to the end of the program. Running this code logs `Julian` to the console log:

## Function Scope

```js
let name = "Julian";

function greet() {
  let myName = name;
  console.log(myName);
}

greet();	// => Julian
```

there are 2 scopes in the code above:

1. the global scope where `name` was declared on line 1
   - in this scope `name` and `greet` are created in global scope
2. the function scope created by the declaration of the `greet` function on line 2
   - in this scope `myName` is in locally scoped within the `greet` function

**RULE:** variables declared inside a scope have an local scope and cannot be accessed outside that scope. Blocks and Functions have local scope

**RULE:** code within an inner scope can access any variable in the same or any surrounding scopes. (this includes the global scope)

![Scoping diagram 1](http://dbdwvr6p7sskw.cloudfront.net/210/images/scoping_diagram1-20200720.png)

```js
let name = 'Julian';

function greet() {
  function say() {
    console.log(name);
  }

  say();
}

greet();     // logs: Julian
```

**RULE:**  we can access a variable from a surrounding scope no matter how deeply a nested function is

![Scoping diagram 2](https://dbdwvr6p7sskw.cloudfront.net/210/images/scoping_diagram2-20200720.png)

## Block Scope

```js
let name = 'Julian';       // `name` is in global scope

function greet() {         // `greet` is also in global scope
  let counter = 0;         // `counter` is in function scope
  while (counter < 3) {
    let myName = name;     // `myName` is in block scope
    console.log(myName);
    counter += 1;
  }

  // console.log(myName); // raises an error since myName not in scope
  console.log(counter);   // => 3
}

greet();                  // => Julian (3 times)
// console.log(myName);   // would raise an error (not in scope)
// console.log(counter);  // would raise an error (not in scope)
```

In this example there are 3 scopes:

1. The global scope
   - This is where we declare the variable `name` and the function `greet`
2. The function scope
   - This is where we declare the variable `counter`
3. The block scope
   - This is where we declare the variable `myName`

**Explanation:** Here we declare a `counter` variable on the first line of the `greet` function. Once this line is executed `counter ` is available from that point onward to the end of the function since it has function scope. The entire code outputs the string `Julian` 3 times to the console log, followed by the number `3`. A block scope is also created and is used by the `while` loop. 



## Lexical Scoping

**RULE:** In Js, *source code defines the scope.* JavaScript uses lexical scoping (static scoping) to determine where it looks for variables. That is - **it uses the structure of the source code to determine the variables scope.** 

- Even if you never execute a function or has any variables, the function creates a scope. 

**RULE:** In JS There is a hierarchy of scopes. When Js tries to locate a variable it searches the heirarchy **from bottom to top** and will stop and return the first variable it finds that has a matching name. This implies that lower scoped variables can **shadow/hide** variables with the same name in a higher scope

 

## Adding Variables to the Current Scope

**RULE:** The various ways to create a variable in the current scope:

1. use **`let` or `const`** keywords
2. use the **`var`** keyword
3. define **parameters** for a function, which are local variables for that function
4. **function declarations** create a variable with the same name as the function
5. **class declarations** create a variable with the same name as the class

```js
function eat(food) {  
  console.log('I am eating ' + food);
}

eat("yoghurt");
```

**RULE:** Parameters create variables during function invocation:

- the `eat` function's `food` variable parameter is scoped at the `eat` function level because of the way the source code is written (lexical scoping rules) and not because the function is invoked. At runtime this scope indicates that `food` is only available to the body of the `eat` function

## Variable Assignment

```js
country = 'Liechtenstein';
```

**RULE:** variable scoping rules apply to both assignment and referencing 

- the above code will first check the current scope and then each higher scope, looking for a variable with the name `country`. JS will set the first `country` variable it finds to `"Liechtenstein"`

```js
let country = 'Spain';
function update() {
  country = 'Liechtenstein';
}

console.log(country);  // logs: Spain

update();
console.log(country);  // logs: Liechtenstein
```

- here before we invoke the `update` function we log the value assigned to the variable `country` to the console, which is`Spain`
- When we invoke the `update` function we are able to reassign the variable `country` to the string `'Liechtenstein'` because inner scopes have access to all surrounding scopes and by extension their variables
- So when we log the variable `country` again to the console it outputs `Leichtenstein`

```js
function assign() {
  let country1 = 'Liechtenstein';
  country2 = 'Spain';		// is a new global variable
}

assign();
console.log(country2);   // logs: Spain (is able to be logged here)
console.log(country1);   // gets ReferenceError
```

**RULE:** when you haven't declared a variable, JS cannot find its matching variable so it will create a new global variable for you instead

- since `country2` isn't declared anywhere else in the code and it has a value assigned to it JavaScript instead creates it as a new global variable which is why it is possible to log its value on line 7. `country1` is however declared and it is scoped at the function level. Because local scopes cannot access surrounding scopes a `ReferenceError` is thrown
- **RULE:** Again `country2` is in the global scope because of the way the source code is written not because the `assign` function was executed. At runtime the scope indicates that `country2` is apart of the global scope 

## Variable Shadowing

 ```js
 let name = 'Julian';
 
 function greet() {
   let name = 'Logan';
   console.log(name);
 }
 
 greet();  // logs: Logan
 ```

**RULE:** When a variable is declared in an outer scope, if you declare a new variable with the same name inside the inner scope  it shadows the outer scoped variable and you can no longer access the variable within the inner scope. 

Here the variable declaration for `name` in the `greet` function shadows the outer `name` variable. This implies that within `greet` you can only access the inner `name`

![Scoping diagram 3](https://dbdwvr6p7sskw.cloudfront.net/210/images/scoping_diagram3-20200720.png)

```js
let name = 'Julian';

function greet(name) {
  console.log(name);
}

greet('Sam') // logs: Sam
name 				 // => 'Julian'
```

**RULE:** if a function definition has a parameter with the same name as a variable from an outer scope, the parameter shadows the outer variable. Here variables are not dependent on the value in the outer scope 

When the above runs, `name` inside the `greet` function isn't dependent on the variable `name` in the outer scope. `name` recieves the value passed to the `greet` invocation

### Takeaways

>1. **RULE:** Every function declaration creates a new local variable scope 
>2. **RULE:** Every block creates a new local variable scope
>3. **RULE:** Lexical scope uses the structure of the source code to determine the variables scope. This means that the code doesn't have to be executed for the scope to exist
>4. **RULE:** All variables in the same surrounding scopes are visible inside functions and blocks