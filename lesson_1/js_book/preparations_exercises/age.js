let rlSync = require('readline-sync');
let age = Number(rlSync.question('What is your age?\n'));

console.log(`You are ${age} years old.`);

for (let counter = 10; counter <= 40; counter += 10) {
  console.log(`In ${counter} years, you will be ${counter + age} years old.`);
}
