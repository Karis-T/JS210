function guessThePassword() {
  let password = 'snatchgame'
  for (let counter = 0; counter < 3; counter += 1) {
    let answer = prompt('What is the password:');
    if (answer === password) return alert("You have successfully logged in");
  }

  return alert("You have been denied access");
}

guessThePassword();