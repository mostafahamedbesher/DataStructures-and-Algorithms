"use strict";

///////////////////////////////////////////////////////
//////////// Recursion /////////////
///////////////////////////////////////////////////////

///////////////////////////////
// FACTORIAL ITERATIVE
// function factorial(num) {
//   let factSum = 1;
//   while (num > 1) {
//     factSum = factSum * num;
//     num--;
//   }

//   return factSum;
// }

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));

///////////////////////////////
// Factorial Recursive
// function factorial(num) {
//   if (num === 1 || num === 0) return 1;

//   return num * factorial(num - 1);
// }

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));

///////////////////////////////
// Power Recursive
// Write a function called power which accepts a base
// and an exponent. The function should return
// the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// - do not worry about negative bases and exponents.

// function power(base, exponent) {
//   if(exponent === 0) return 1;
//   // base case
//   if (exponent === 1) return base;

//   return base * power(base, exponent - 1);
// }

// console.log(power(2, 3));
// console.log(power(2, 2));
// console.log(power(3, 2));
// console.log(power(3, 4));
// console.log(power(2, 4));

///////////////////////////////
// productOfArray
// Write a function called productOfArray which takes in
// an array of numbers and returns the product of them all.

// function productOfArray(arr) {
//   // check if array is empty
//   if (arr.length === 0) {
//     return 0;
//   }

//   // base case
//   if (arr.length === 1) {
//     return arr[0];
//   }

//   return arr[0] * productOfArray(arr.slice(1));
// }

// console.log(productOfArray([1, 2, 3]));
// console.log(productOfArray([1, 2, 3, 10]));

///////////////////////////////
// recursiveRange
// Write a function called recursiveRange which accepts
// a number and adds up all the numbers from 0 to
// the number passed to the function

// function recursiveRange(num) {
//   if (num === 0) return 0;

//   // base case
//   if (num === 1) return 1;

//   return num + recursiveRange(num - 1);
// }

// console.log(recursiveRange(6));
// console.log(recursiveRange(10));

///////////////////////////////
// fib
// Write a recursive function called fib which accepts
// a number and returns the nth number in the Fibonacci
// sequence. Recall that the Fibonacci sequence is the
// sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
// which starts with 1 and 1, and where every number
// thereafter is equal to the sum of the previous two numbers.
// function fib(num) {
//   if (num === 0) return 0;

//   // base case
//   if (num <= 2) return 1;

//   return fib(num - 1) + fib(num - 2);
// }

// console.log(fib(4)); // 3
// console.log(fib(10)); // 55
// console.log(fib(28)); // 317811
// console.log(fib(35)); // 9227465

///////////////////////////////
//////// Section(9): Bonus Recursion Problems ///////

// reverse
// Write a recursive function called reverse which
// accepts a string and returns a new string in reverse.
// function reverse(str) {
//   let index = str.length;

//   // base case
//   if (str.length === 0) return "";

//   return str[index - 1] + reverse(str.slice(0, index - 1));
// }

// console.log(reverse("awesome"));
// console.log(reverse("rithmschool"));
// console.log(reverse("mostafa"));
// console.log(reverse(""));

///////////////////////////////
// isPalindrome
// Write a recursive function called isPalindrome
// which returns true if the string passed to it is
// a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// function isPalindrome(str) {
//   function reverse(str) {
//     let index = str.length;

//     // base case
//     if (str.length === 0) return "";

//     return str[index - 1] + reverse(str.slice(0, index - 1));
//   }

//   const reversedStr = reverse(str);
//   return str === reversedStr ? true : false;
// }

// console.log(isPalindrome("awesome"));
// console.log(isPalindrome("foobar"));
// console.log(isPalindrome("tacocat"));
// console.log(isPalindrome("amanaplanacanalpanama"));
// console.log(isPalindrome("amanaplanacanalpandemonium"));

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

///////////////////////////////
// someRecursive
// Write a recursive function called someRecursive
// which accepts an array and a callback. The function
// returns true if a single value in the array returns
// true when passed to the callback. Otherwise it returns false.

// const isOdd = (val) => val % 2 !== 0;

// let i = 0;
// function someRecursive(arr, callbackFn) {
//   // base case
//   if (arr.length === i) return false;

//   if (callbackFn(arr[i])) return true;

//   return someRecursive(arr.slice(i + 1), callbackFn);
// }

// console.log(someRecursive([1, 2, 3, 4], isOdd));
// //
// console.log(someRecursive([4, 6, 8, 9], isOdd));
// console.log(someRecursive([4, 6, 8], isOdd));
// console.log(someRecursive([4, 6, 8], (val) => val > 10));

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

///////////////////////////////
// flatten
// Write a recursive function called flatten which accepts
// an array of arrays and returns a new array with all values flattened.

// function flatten(arr) {
//   let flattenedArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattenedArr = flattenedArr.concat(flatten(arr[i]));
//     } else {
//       flattenedArr.push(arr[i]);
//     }
//   }

//   return flattenedArr;
// }

// console.log(flatten([1, 2, 3, [4, 5]]));
// console.log(flatten([1, [2, [3, 4], [[5]]]]));
// console.log(flatten([[1], [2], [3]]));
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

///////////////////////////////
// capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

//// iterative version
// function capitalizeFirst(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//   }

//   return newArr;
// }

//// Recursive version
// function capitalizeFirst(arr) {
//   let newArr = [];
//   // base case
//   if (arr.length === 0) return newArr;

//   // recursive case
//   newArr = newArr.concat(
//     arr[0][0].toUpperCase() + arr[0].slice(1),
//     capitalizeFirst(arr.slice(1))
//   );

//   // newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
//   // capitalizeFirst(arr.slice(1));

//   return newArr;
// }

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

///////////////////////////////
// nestedEvenSum
// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.
// function nestedEvenSum(obj) {
//   let sum = 0;

//   function getEvenSum(obj) {
//     for (let [key, value] of Object.entries(obj)) {
//       if (typeof value === "object") {
//         getEvenSum(value);
//       } else if (typeof value === "number") {
//         // check if the value is even
//         if (value % 2 === 0) {
//           sum += value;
//         }
//       }
//     }
//   }

//   getEvenSum(obj);

//   return sum;
// }

// let obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// let obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

///////////////////////////////
// capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
// function capitalizeWords(arr) {
//   let newArr = [];
//   // base case
//   if (arr.length === 0) return newArr;

//   // recursive case
//   newArr.push(arr[0].toUpperCase());
//   newArr = newArr.concat(capitalizeWords(arr.slice(1)));
//   return newArr;
// }

// console.log(capitalizeWords(["i", "am", "learning", "recursion"]));

///////////////////////////////
// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!
// The exercise intends for you to create a new object with the numbers
// converted to strings, and not modify the original. Keep the original object unchanged.

// function stringifyNumbers(obj) {
//   // deep copy
//   const newObj = JSON.parse(JSON.stringify(obj));

//   function findNumbers(obj) {
//     for (let [key, value] of Object.entries(obj)) {
//       if (typeof value === "object") {
//         findNumbers(value);
//       } else if (typeof value === "number") {
//         obj[key] = value.toString();
//       }
//     }
//   }

//   findNumbers(newObj);

//   return newObj;
// }

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));

///////////////////////////////
// collectStrings
// Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  const arr = [];

  function getStrings(obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === "object") {
        getStrings(value);
      } else if (typeof value === "string") {
        arr.push(value);
      }
    }
  }

  getStrings(obj);

  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
