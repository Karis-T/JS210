# Looping Iterations

**Definition:** Loops give us the ability to repeatedly execute a statement or a block of statements while conditions evaluate to `true`. There are 3 common JS loops:

-  The `while` Loop
- The `do/while` Loop
- The `for` loop

## The `while` Loop

**RULE:** `while` loops will first evaluate some condition then execute the statement within the loop for as long as the condition evaluates to `true`. When execution reaches the end of the block the control will pass back to the condition expression again. If the condition still evaluates to `true` the statements in the loop body repeat. The process continues until the condition evaluates to `false`.

```js
let counter = 0;
let limit = 10;

while (counter < limit) {
  console.log(counter);
  counter += 2;
}
// logs 0 2 4 6 8 
```



## Infinite Loops

**RULE:** if the statements in the loops body never make the loop condition to evaluate to `false`, an infinite loop occurs. 

```js
let counter = 0;
let limit = 10;

while (counter < limit) {
  console.log(counter);
}
```

 Since neither `counter` nor `limit`s values are altered within the body of the loop, `counter < limit` always evaluates to `true`. This means the loop never terminates

**REMEMBER:** When running code in the browser and you encounter an infinite loop, a quick and dirty solution is to close the tab of the page that is running the script. With Chrome, you can open the task manager and close a specified tab.

## `break` vs `continue` 

**RULE:** `break` statements exits from a loop immediately. 

```js
let counter = 0;
let limit = 10;

while (true) {
  counter += 2;
  if (counter > limit) {
    break;
  }

  console.log(counter);
}
```

**RULE:** The `continue` statement is simliar to Ruby's `next` where it will skip the current iteration of a loop and return to the top of the loop

```js
let counter = 0;
let limit = 10;

while (true) {
  counter += 2;
  if (counter === 4) {
    continue;
  }

  if (counter > limit) {
    break;
  }

  console.log(counter);
}

// logs 2 6 8 10
```



## The `do...while` Loop

**RULE:** `do...while` loop is similar to `while` except that `do...while` will always **iterate at least once**, whereas `while` won't iterate at all if the condition evaluates to `false`. This is because JS evaluates the condition **after** executing the loops body:

```js
let counter = 0;
let limit = 0;

do {
  console.log(counter);
  counter += 1;
} while (counter < limit);

// logs 0
```



## The `for` Loop

**RULE:** the most common looping structure in JS, `for` lets you combine 3 key elements of a loop which appear as a single statement:

1. setting the initial state
2. evaluating a condition
3. making some type of change before reevaluating the condition

```js
for (initialExpression; condition; incrementExpression) {
  // statements
}
```

**RULE:** most `for` loops use an iterator variable. `i` is the conventional iterator name, whilst `j` is for nested loops:

```js
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
// logs 0 1 2 3 4 5 6 7 8 9
```

The flow of execution for a `for` loop:

1. Execute the initialization statement. Note that statement may include variable declarations
2. Evaluate the condition. If the condition evaluates to `false` the loop terminates
3. Execute the body of the loop
4. Execute the increment expression
5. Return to step 2 for the next iteration

**RULE:** Since the 3 `for` loop elements are optional they can be omitted and rewritten: 

```js
// put initialization outside of the loop

let index = 0;
for (; index < 10; index += 1) {
  console.log(index);
}
```

```js
// manually check condition and break out of the loop

for (let index = 0; ; index += 1) {
  if (index >= 10) {
    break;
  }

  console.log(index);
}
```

**RULE:** If you omit the condition component in the `for`, JavaScript assumes true

```js
// manually increment the iterator

for (let index = 0; index < 10; ) {
  console.log(index);
  index += 1;
}
```

