// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let fibonacci = 0;
  let f1 = 0,
    f2 = 1;
  if (n <= 0) return fibonacci;
  for (let i = 1; i < n; i++) {
    fibonacci = f1 + f2;
    f1 = f2;
    f2 = fibonacci;
  }

  return fibonacci;
}

function fibonacciRecursive(n) {}

console.log(fibonacciIterative(8));
