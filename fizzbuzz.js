function fizzbuzz(num) {
  const f = 'Fizz';
  const b = 'Buzz';
  let out;

  for (let i = 1; i <= num; i++) {
    // 0 -> represent false in javascript
    out = !(i % 3) ?
            ( !(i % 5) ? f+b : f ) : // if i % 3 === 0, evaluate this line
            ( !(i % 5) ? b : i ); // else eval this line
    console.log(out);
  }
  
}

fizzbuzz(15)
