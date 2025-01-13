// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  if (number === 1) return 1;

  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  //code here
  for (let i = number - 1; i > 1; i--) {
    number = number * i;
  }

  return number;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
