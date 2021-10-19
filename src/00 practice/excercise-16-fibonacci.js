// Fibonacci

const fib = (n) => {
  let fibo = [0, 1];
  const [first, second] = fibo;
  if (n === 0) return first;
  if (n === 1) return second;
  for (let i = 2; i <= n; i++) {
    [first, second] = [second, first + second];
  }
  return second;
};

console.log(fib(10));
