# Object Properties

## Properties Names and Values

**RULE:** A property name (key) can be any valid string

**RULE:** A property value can be any valid expression

**RULE:** If the operand is a number JS converts it to a string using `Number.prototype.toString()`

**RULE:** If the operand is a variable JS uses the value its referencing as the objects key in order to get its value. 

```js
let object = {
  a: 1,                           // a is a string with quotes omitted
  'foo': 2 + 1,                   // property name with quotes
  'two words': 'this works too',  // a two word string
  true: true,                     // property name is implicitly converted to string "true"
  b: {                            // object as property value
    name: 'Jane',
    gender: 'female',
  },
  c: function () {                // function expression as property value
    return 2;
  },
  d() {                           // compact method syntax
    return 4;
  }
};
```



## Accessing Property Values

**RULE:** you can access property values using "dot notation" or "bracket notation":

**RULE:** When a property is not defined it returns `undefined`

```js
let object = {
  a: 'hello',
  b: 'world',
};

object.a;                 // "hello", dot notation
object['b'];              // "world", bracket notation
object.c;                 // undefined when property is not defined
```

**RULE:** use bracket notation when property name is an invalid identifier:

**RULE:** Use dot notation where possible

```js
let foo = {
  a: 1,
  good: true,
  'a name': 'hello',
  person: {
    name: 'Jane',
    gender: 'female',
  },
  c: function () {        // function expression as property value
    return 2;
  },
  d() {                   // compact method syntax
    return 4;
  }
};

foo['a name'];            // "hello", use bracket notation when property name is an invalid identifier
foo['goo' + 'd'];         // true, bracket notation can take expressions
let a = 'a';
foo[a];                   // 1, bracket notation works with variables since they are expressions
foo.person.name;          // "Jane", dot notation can be chained to "dig into" nested objects
foo.c();                  // 2, Call the method 'c'
foo.d();                  // 4, Call the method 'd'
```



## Adding and Updating Properties

**RULE:** To add a new property to an object, use "dot notation" or "bracket notation" and assign a value to the result. If the named property already exists the assignment updates the properties value:

```js
let object = {};              // empty object
object.a = 'foo';
object.a;                     // "foo"
object['a name'] = 'hello';
object['a name'];             // "hello"
object;                       // { a: "foo", "a name": "hello" }
```

**RULE:** Use the reserved word `delete` to delete properties from objects: 

```js
let foo = {
  a: 'hello',
  b: 'world',
};

delete foo.a;
foo;                      // { b: "world" }
```



# Iterating Through Object Properties

**RULE:** Objects are collections - that is they can store multiple values. To perform some action on each element in a collection use a `for...in` loop:

```js
let nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

for (let nick in nicknames) { // let key in object
  console.log(nick);	//key
  console.log(nicknames[nick]); //value
}

// logs on the console:
joseph
Joey
margaret
Maggie
```

**RULE:** Retrieve all the name of the properties (keys) in an object with `Object.keys`:

```js
let nicknames = {
  joseph: 'Joey',
  margaret: 'Maggie',
};

Object.keys(nicknames);  // [ 'joseph', 'margaret' ]
```

## Further Reading

[JavaScript Weekly: An Introduction to Iteration and Enumerability](https://medium.com/launch-school/javascript-weekly-an-introduction-to-iteration-and-enumerability-70bb1054064a)

#### Other Rules:

**RULE:** if falsy values are present in an object (`null, undefined`) you cannot rely on `object[propertyName]` and must use `keys.indexOf(propertyName)` to check if a value exists

