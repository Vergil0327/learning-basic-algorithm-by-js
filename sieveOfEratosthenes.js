function sieveOfEratosthenes(num) {
  /** 
   * Return all `prime` number up to num in an array
   * 
   * Loop through and tag any element in an array that can get by multiplying by someone
   * Optimization: Stop iterating when index > square root of num
   */

  //  Init: Create an `num` size array & set default value to be true
  let primes = new Array(num).fill(true);
  
  // algorithm
  primes[0] = false; // Already known 0 is not a prime
  primes[1] = false; // 1 is not a prime too

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    for ( let j = 2; j * i <= num; j += 1) {
      primes[j * i] = false;
    }
  }

  return primes
    .map((isPrime, i) => isPrime && i)
    .filter(isPrime => isPrime)

  /* another way to get result
  var result = [];
  for (var i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
  */
}

[
// Index means num & value means is this num prime or not
// 0      1      2      3     4      5     6      7     8      9
  false, false, true, false, true, false, true, false, false, false,
// 10     11    12     13     14    15    16     17     18    19
  true, false, true, false, false, false, true, false, true, true, false
]
const output = sieveOfEratosthenes(200) // [2, 3, 5, 7, 11, 13, 17, 19]
output