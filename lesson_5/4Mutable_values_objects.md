# Mutability of Values and Objects

The difference between primitives and objects:

- **RULE:** **primitive values are immutable**- You cannot modify them. If you operate on these values they will return a new value of the same type
- **RULE:** **Objects are mutable** - that is you can modify them without changing their identity. You can change the data contained inside the object.

#### Immutable String Breakdown

````js
let alpha = 'abcde';
alpha[0] = 'z';			// returns "z"
alpha;							// returns "abcde"	
````

- We first declare a variable named alpha and set its value to the String `'abcde'`
- `alpha[0] = 'z'` doesn't modify the string and only returns the string `'z'`. This is because `alpha` contains a String which are primitives and thus immutable
- ![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects0.png)

#### Mutable Array Breakdown

```js
alpha = ['a', 'b', 'c', 'd', 'e'];
```

- The variable `alpha` references an Array that holds 5 string values, each containing a single letter:
- ![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects1_rev.png)

```js
alpha[0] = 'z';       // "z"
alpha;                // [ "z", "b", "c", "d", "e" ]
```

- **RULE:** When we attempt to change an element in the Array it works because Arrays and Objects are not primitive values, they can be modified in place which does not change the identity of the array.
- element `0` (the `0` property of `alpha`) now points to a new String; the old value no longer belongs to `alpha`
- ![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects2.png)

#### Immutable Function Breakdown 

```js
function lessExcitable(text) {
  return text.replace(/!+/g, '.');  // replaces ! with .
}

let message = 'Hello!';
lessExcitable(message);             // "Hello."
message;                            // "Hello!"
```

- calling `replace` on a String returns a new String with a different value, it isn't able to mutate the local variable `message`.

#### Mutable Function Breakdown

```js
function push(array, value) {
  array[array.length] = value;
  return array.length;
}

let numbers = [1, 6, 27, 34];
push(numbers, 92);                  // 5
numbers;                            // [ 1, 6, 27, 34, 92 ]
```

- this isn't true for the above whereby the function `push` utilizes the mutability of arrays

- before the `push` invocation:

  ![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects3.png)

- after the `push` invocation:

  ![img](https://dbdwvr6p7sskw.cloudfront.net/210/images/mutable_objects4.png)



## Further Reading

For more examples on data types and mutability, you may check out [this article](https://medium.com/launch-school/javascript-weekly-data-types-and-mutability-e41ab37f2f95) by one of our students.
