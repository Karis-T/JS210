# Primitive Values are Immutable

#### all primitive values are immutable:

- once you create a value, you cannot change it. 

- Therefore you must remember to assign or reassign a variable to the return value of any primitive datatype methods / operations:

```js
a = 'hello';
a.toUpperCase();  // the "hello" string is not mutated, but a new "HELLO" string is returned
a;                // still "hello"
```



```js
a = a.toUpperCase();
a; 							// "HELLO"
```

#### literals

literals are constant values that are embedded directly into your program:

```js
1.23				//number literal
"hello"			//string literal
/pattern/		//regex literal
```

