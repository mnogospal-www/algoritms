// const memo = {};
// function fib(n) {
//   if (n === 0 || n === 1) return n;
//   memo[n] = fib(n - 1) + fib(n - 2);

//   return memo[n];
// }

function fib(n) {
  if (n === 0 || n === 1) return n;

  let a = 0;
  let b = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

console.log(fib(6));
