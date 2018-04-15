// Time Complexity: n
// Only Calcualte Once
function memorizedFibonacci(n, cache = []) {
  // Base case
  if (cache[n]) return cache[n];

  // Algoritm
  if(n < 3) return 1;

  cache[n] = memorizedFibonacci(n - 1, cache) + memorizedFibonacci(n - 2, cache);
  return cache[n];
}
const output = memorizedFibonacci(500)
output