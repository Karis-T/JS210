# Working with Dates

#### Create a new date/time object of today's date:

```js
let today = new Date();
```

- RULE: There are 4 ways to create a date object:
  1. `new Date();`
  2. `new Date(value);`
  3. `new Date(dateString);`
  4. `new Date(year, month[. date[, hrs[, mins[, sec[, millisecs]]]]])`
- Passing in the date object directly also works (e.g., `new Date(today)`). However, this employs implicit coercion which isn't recommend. Using the `Date.prototype.getTime()` method makes it clear what is going on.

#### `Date.prototype.getDay()`

```js
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(`Today is day ${today.getDay()}`);
// Today is day 1
console.log(`Today is ${daysOfWeek[today.getDay()]}`);
// Today is Mon
```

- `getDay()` returns an integer representation of the 7 day week, starting at `0` which represents `Sunday`
- use `getDay()` as an index for an array that has the strings of each day of the week

#### `Date.protoype.getDate()`

```js
console.log(`Today is ${daysOfWeek[today.getDay()]}, the ${today.getDate()}rd`);
// Today is Mon, the 23rd
```

```js
function dateSuffix(date) {
  date = String(date);
  if (date.endsWith('1') && !date.endsWith('11')) date += 'st';
  else if (date.endsWith('2') && !date.endsWith('12')) date += 'nd';
  else if (date.endsWith('3') && !date.endsWith('13')) date += 'rd';
  else date += 'th';

  return date;
}

console.log(`Today is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(date)}`);
```

- `getDate()` returns an integer representation of the day of the month
- to create a suffix you'll need to pass the `getDate()` to a custom function that will append the correct string to the number

#### `Date.prototype.getMonth()`

```js
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log(`Today is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(date)} of ${today.getMonth()}`);

// Today is Mon the 23rd of 7

console.log(`Today is ${daysOfWeek[today.getDay()]}, the ${dateSuffix(date)} of ${months[today.getMonth()]}`);

// Today is Mon the 23rd of Aug
```

- `getMonth()` returns an integer representation of a month, starting at `0` which represents `January`
- use `getMonth()` as an index for an array that has the strings of each month of the year

```js
function dateSuffix(date) {
  date = String(date);
  if (date.endsWith('1') && !date.endsWith('11')) date += 'st';
  else if (date.endsWith('2') && !date.endsWith('12')) date += 'nd';
  else if (date.endsWith('3') && !date.endsWith('13')) date += 'rd';
  else date += 'th';

  return date;
}

function formattedDay(today) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[today.getDay()]
}

function formattedMonth(today) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[today.getMonth()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  console.log(`Today is ${day} the ${dateSuffix(date.getDate())} of ${month}`);
}

let today = new Date();

formattedDate(today);
```

#### `Date.prototype.getFullYear()`

```js
let today = new Date();

console.log(today.getFullYear());	// returns 2021
```

- `getYear()` is deprecated
- use `getFullYear()` to return the an integer representing the year of the Date object

#### `Date.prototype.getTime()`

```js
console.log(today.getTime());
```

- returns the current date and time in total milliseconds since Jan. 1st 1970.

```js
let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);
```

- created a tomorrows date based on today + 1

#### `getHours()`

- returns the date object's hours as an integer format
- must add zeros if digit is single

#### `getMinutes()`

- returns the date object's minutes as an integer format
- must add zeros if digit is single

```js
function formatTime(date) {
  let hours = String(date.getHours());
  let mins = String(date.getMinutes());
  if (hours.length === 1) hours = '0' + hours;
  if (mins.length === 1) mins = '0' + mins;
  return `${hours}:${mins}`;
}
```

