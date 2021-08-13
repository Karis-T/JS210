function studentGrade() {
  let total = 0;

  for (let counter = 1; counter <= 3; counter += 1) {
    let answer = Number(prompt(`Enter score ${counter}:`));
    total += answer;
  }

  let average = total / 3;

  const grade = function() {
      if (average >= 90) return 'A';
      else if (average >= 70 && average < 90) return 'B';
      else if (average >= 50 && average < 70) return 'C';
      else return 'F';
    }

  alert(`Based on the average of your 3 scores your letter grade is ${grade()}`);
}

studentGrade();