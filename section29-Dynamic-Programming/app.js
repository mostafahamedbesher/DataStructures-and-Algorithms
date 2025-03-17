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
// function fib(n) {
//   if (n <= 2) return 1;
//   let current = 0;
//   let previous1 = 1;
//   let previous2 = 1;

//   for (let i = 3; i <= n; i++) {
//     current = previous1 + previous2;
//     previous1 = previous2;
//     previous2 = current;
//   }

//   return current;
// }

// console.log(fib(70));

/////////// Greedy Algorithm
// Coin Change - Greedy Algorithm
// Important note: In this coding exercise, we are using a greedy approach to
// the coin change problem, not Dynamic Programming. Please keep in mind that
// a greedy approach might not work well with all coin systems and denominations.
// If we need an approach that always yields the true minimum coin count for any set
// of denominations, we would use a Dynamic Programming approach, which we will
// implement in the next coding exercise called: "Dynamic Programming – Coin Change".
// In comparison to the greedy approach, that coding exercise
// focuses on a Dynamic Programming solution that systematically finds
// an optimal result for all coin sets.
// But first, let's try the Coin Change - Greedy Algorithm approach:
// Write a function minCoinChange that takes two arguments: an array of coin
// denominations (coins) and a target amount number (amount). The provided array
// of coins is sorted in ascending order, starting from the smallest coin
// denomination to the largest.

// Your task is to return an array representing the minimum number of coins
// needed to make the given amount. The result should be an array
// of the actual coins used, not their count or sum.
// To achieve this, you should start by considering the largest denominations
// first and use them as much as possible before moving to smaller denominations.
// As a consequence of this, the result array should be sorted in descending order,
// starting from the largest coin denomination to the smallest.

// function minCoinChange(arr, amount) {
//   if (arr.length === 0 || amount < arr[0]) return null;

//   const result = [];
//   let sum = 0;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     while (sum <= amount) {
//       sum += arr[i];
//       if (sum <= amount) {
//         result.push(arr[i]);
//       }
//     }
//     sum -= arr[i];
//   }

//   if (sum === amount) return result;

//   return null;
// }

// console.log(minCoinChange([1, 2, 3, 4, 5], 11)); // this should return: [5, 5, 1]
// console.log(minCoinChange([5, 10, 15, 20, 25], 85)); // this should return: [25, 25, 25, 10]
// console.log(minCoinChange([1, 5, 6, 9], 11)); // this should return: [9, 1, 1]
// console.log(minCoinChange([1, 2, 5], 7)); //[5,2]
// console.log(minCoinChange([2, 5], 3)); // null
// console.log(minCoinChange([4, 7], 5)); //null
// console.log(minCoinChange([1, 3, 4], 6)); //[4,1,1] but it should be [3,3] so greedy algorithm fails in cases like this so we should use dynamic programming

//////////////// Dynamic Programming
// Dynamic Programming - Coin Change
// Write a function called coinChange which accepts two parameters:
// an array of denominations and a value. The function should return the number
// of ways you can obtain the value from the given collection of denominations.
// You can think of this as figuring out the number of ways to make change for
// a given value from a supply of coins.

const denominations = [1, 5, 10, 25];
function coinChange(denominations, value) {
  let dp = new Array(value + 1).fill(0);
  dp[0] = 1; // Base case: one way to make 0 amount

  for (let coin of denominations) {
    for (let i = coin; i <= value; i++) {
      dp[i] += dp[i - coin]; // Count ways using current coin
    }
  }

  return dp[value]; // The answer is stored in dp[value]
}

console.log(coinChange(denominations, 1)); // 1
console.log(coinChange(denominations, 2)); // 1
console.log(coinChange(denominations, 5)); // 2
console.log(coinChange(denominations, 10)); // 4
console.log(coinChange(denominations, 13)); // 4
console.log(coinChange(denominations, 25)); // 13
console.log(coinChange(denominations, 45)); // 39
console.log(coinChange(denominations, 100)); // 242
console.log(coinChange(denominations, 145)); // 622
console.log(coinChange(denominations, 1451)); // 425663
console.log(coinChange(denominations, 14511)); // 409222339
