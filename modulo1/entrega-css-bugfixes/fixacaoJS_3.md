```
function calculaNota(ex, p1, p2) {
  const average = (ex + (p1*2) + (p2*3)) / 6;
  let grade = '';

  if (average < 6) {
    grade = 'D'; 
  }
  else if (average >= 6 && average < 7.5)  {
    grade = 'C';
  }
  else if (average >= 7.5 && average < 9) {
    grade = 'B';
  }
  else {
    grade = 'A';
  }
  
  return grade;
}
```