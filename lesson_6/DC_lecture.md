## Numbers 

#### JS only has 1 number type for beginners

- no integers
- no conversions
- 64-bit floating point
- IEEE-754 (aka "`double`")



#### Associate Law doesn't hold because computer numbers are finite

```js
(a + b) + c === a + (b + c)
```

- works for integers
  - numbers past 9 quadrillion doesn't work
- doesn't work for floating point numbers

```js
a = 0.1;
b = 0.2;
c = 0.3;

(a + b) + c !== a + (b + c)
```

- can't accurately represent decimal numbers

- turn decimals into integers for calculation 



#### All numbers extend from prototype object

#### All numbers are first class objects

- number can be stored
- passed as a parameter
- returned from a function
- stored in an object

#### NaN

- special number: Not a Number
- Result of undefined error operations
- Toxic: any arithmetic operation with NaN as an input will have NaN as a result
- NaN is not equal to anything including itself
- `NaN !== NaN` is `true`



## Boolean

`true` and `false`

- `false`
- `null`
- `undefined`
- `""`
- `0`
- `NaN`

everything else is truthy



## String

- a sequence of 0 or more 16-bit Unicode characters
  - UCS-2, not quite UTF-16
  - no awareness of surrogate pairs
- No separate character type
  - characters are represented as strings with length of 1
- Strings are immutable
- Similar strings are equal ===
- string literats can use single or double quots with escapement \

```js
"this is a \
long line"
```



## Array

- objects simulate arrays

- Arrays inherit from object

- Indexes are converted to strings and used as nsmaed for retrieving values

- efficient for sparse arrays

- not efficient in other cases

- no need to provide a length or type when creating as 

- arrays contain any number of expressions separated by commas

- new items can be appended with length

  ```js
  myList[myList.length] = 'barley';
  ```

- don't use dot notation with arrays

- `delete` operator leave holes

- use splice method for arrays instead



#### length

- 1 more than the last index
- allows us to use traditional for statement
- for in doesn't guarantee the order - don't use for in
- Arrays have a special length property



#### Arrays vs objects

- sequence of integers - Arrays
- arbitrary strings - objects
- objects are associative arrays 



- All values have object counterpart except `null` and `undefined`
- use null to indicate nothing
- null is an object - this is a bug 



#### Loosely typed

- can be stored in any variable, passed to any function
- its not "untyped"



## Passed by Reference vs Passed by Value

- objects can be passed as arguments to functions, and can be returned by functions
  - objects are passed by reference
  - Objects are not passed by value



## Operators

#### The === operator

- The === compares object references not values
  - only returns try if both objects are the same object

- if both operands are numbers then add them otherwise convert them to strings and concateneate them
- equality operators do type cooercion
- use triple equality operators

#### The && operator

- The guard operator
- If first operand is truthy
  - Then result is second operand
  - otherwise the result is first operand
- can be used to avoid null references

#### The || operator

- the default operator
- if first operand is truthy
  - then result is first operand
  - otherwise result is second oeprand
- can be used to fill in default values

#### JS is misunderstood because its misused a lot

- best and worst ideas ever put into a language (and everything inbetween)
- very expressive language



## Closures

A function object contains:

- A function (name, parameters and body)
- A reference to the environment in which it was created (context)



## Style isn't subjective

```js
return //; puts a semi colon insertion
{ // block
  ok: false //; expression 
}; // empty statement

// returns undefined
```

- silent errors
- semicolon insertion

```js
return {
  ok: true
}

// returns object
```

- works well in JS