"use strict";

///////////////////////////////////////////////////////
//////////// Dynamic Programming /////////////
///////////////////////////////////////////////////////

////// overlapping subproblems ///////////
// **************************************

/////// Fibonacci Series ///////////
// bad version
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(6));

////////// memoized verison
// function fib(n, memo = []) {
//   if (n <= 2) return 1;
//   if (memo[n] === undefined) {
//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   }

//   return memo[n];
// }

// console.log(fib(70));

/////////// Tabulation verison
// function fib(n) {
//   let table = [0, 1, 1];
//   for (let i = 3; i <= n; i++) {
//     table[i] = table[i - 1] + table[i - 2];
//   }

//   return table[n];
// }

// console.log(fib(70));

/////////// Optimized Tabulation verison
// 0,1,1,2,3,5,8,13,21,34
function fib(n) {
  if (n <= 2) return 1;
  let current = 0;
  let previous1 = 1;
  let previous2 = 1;

  for (let i = 3; i <= n; i++) {
    current = previous1 + previous2;
    previous1 = previous2;
    previous2 = current;
  }

  return current;
}

console.log(fib(70));
