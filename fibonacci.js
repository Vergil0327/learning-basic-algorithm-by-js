function fibonacci(position) {
  if (position < 40) return new Error('Call Stack Too Much')
  if (position <= 2) return 1;

  return fibonacci(position - 1) + fibonacci(position - 2);
}
const output = fibonacci(5)
output