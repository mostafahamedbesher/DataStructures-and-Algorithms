"use strict";

//////////// frequency counter pattern /////////////

// function calcObjCharsOcurrences(obj, key) {
//   if (obj[key] > 0) {
//     obj[key]++;
//   } else {
//     obj[key] = 1;
//   }
// }

// // - anagram problem
// function isAnagram(str1, str2) {
//   let frequency1 = {};
//   let frequency2 = {};

//   // check if they are not the same length(return false)
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   // loop on every str and put all chars as object keys
//   // loop 1
//   for (const char of str1) {
//     calcObjCharsOcurrences(frequency1, char);
//   }
//   // loop 2
//   for (const char of str2) {
//     calcObjCharsOcurrences(frequency2, char);
//   }

//   // console.log(frequency1);
//   // console.log(frequency2);

//   // compare two objects must besame keys and same values for each keys
//   for (const [key, value] of Object.entries(frequency1)) {
//     // check if key is not found so there are not have the same chars so they are not anagram
//     if (!frequency2.hasOwnProperty(key)) {
//       return false;
//     }

//     // check if the key is found but not the same value
//     if (frequency2[key] !== value) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isAnagram("cinema", "iceman"));
// console.log(isAnagram("anagram", "naragam"));

///////////////////////////////////////////////////////
//////////// Multiple Pointers pattern /////////////
///////////////////////////////////////////////////////

// count unique values in a sorted array
// ex [1,1,1,2,100] ==> so here the count of unique values is 3
// because unique values are(1,2,100)

// function countUniqueValues(arr) {
//   // check if array is empty
//   if (arr.length === 0) {
//     return 0;
//   }

//   let counter = 1;
//   let left = 0;
//   let right = 1;

//   while (right !== arr.length) {
//     if (arr[left] !== arr[right]) {
//       counter++;
//     }
//     left++;
//     right++;
//   }

//   return counter;
// }

// console.log(countUniqueValues([1, 1, 1, 2, 100, 5]));
// console.log(countUniqueValues([]));

///////////////////////////////////////////////////////
//////////// Sliding Window pattern /////////////
///////////////////////////////////////////////////////

// [1, 15, 2, 20, 10, 8,16,5,4]

// old way (complexity O(n^2))
// function maxSubArraySum(arr, size) {
// if(size > arr.length){
//   return null;
// }

//   let sum = 0;
//   let max = 0;

//   for (let i = 0; i < arr.length - size + 1; i++) {
//     for (let j = i; j < i + size; j++) {
//       sum += arr[j];
//       // console.log(i, j);
//     }

//     if (sum > max) {
//       max = sum;
//     }

//     sum = 0;
//   }

//   return max;
// }

// console.log(maxSubArraySum([1, 15, 2, 20, 10, 8, 16, 5, 4], 4));

// [1, 15, 2, 20, 10, 8,16,5,4]
//// new way (complexity O(n))
// function maxSubArraySum(arr, size) {
//   if (size > arr.length) {
//     return null;
//   }

//   let sum = 0;
//   let max = 0;

//   // calculate first x (x = size) elements
//   for (let j = 0; j < size; j++) {
//     sum += arr[j];
//   }

//   for (let i = size; i < arr.length; i++) {
//     sum += arr[i] - arr[i - size];

//     if (sum > max) {
//       max = sum;
//     }
//   }

//   return max;
// }

// console.log(maxSubArraySum([1, 15, 2, 20, 10, 8, 16, 5, 4], 3));

///////////////////////////
// get unique items in an array using frequency counter pattern
// [1,2,5,6,4,5,7,6]   ----  [1,2,4,7]

// function getUniqueArratValues(arr) {
//   const freq1 = {};
//   const uniqueArray = [];

//   for (let item of arr) {
//     // if item not found as a key in freq1 object
//     if (freq1[item] > 0) {
//       freq1[item]++;
//     } else {
//       freq1[item] = 1;
//     }
//   }

//   // console.log(freq1);

//   for (let [key, value] of Object.entries(freq1)) {
//     if (value === 1) {
//       uniqueArray.push(key);
//     }
//   }

//   return uniqueArray;
// }

// console.log(getUniqueArratValues([1, 2, 5, 6, 4, 5, 7, 6]));

//////////////////////////////////////////////////////////////
//////////// Section(6) : problem-solving patterns challenges /////////////
//////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// -------- Frequency Counter Pattern ----------

// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

// function sameFrequency(num1, num2) {
//   //convert these numbers to strings
//   const str1 = num1.toString();
//   const str2 = num2.toString();

//   // check str1,str2 length so they must be the same
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const str1Freq = {};
//   const str2Freq = {};
//   let same = false;

//   // loop over str1
//   for (const char of str1) {
//     if (str1Freq.hasOwnProperty(char)) {
//       str1Freq[char]++;
//     } else {
//       str1Freq[char] = 1;
//     }
//   }

//   // loop over str2
//   for (const char of str2) {
//     if (str2Freq.hasOwnProperty(char)) {
//       str2Freq[char]++;
//     } else {
//       str2Freq[char] = 1;
//     }
//   }

//   for (const [key, value] of Object.entries(str1Freq)) {
//     if (str2Freq[key] !== value) {
//       return false;
//     }
//     same = true;
//   }

//   console.log("str1Freq", str1Freq);
//   console.log("str2Freq", str2Freq);
//   return same;
// }

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

///////////////////////////////////
// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts
// a variable number of arguments, and checks whether there are
// any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern
// OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// function areThereDuplicates(...inputs) {
//   // check if no inputs
//   if (inputs.length === 0) {
//     return null;
//   }

//   let freq = {};

//   for (const input of inputs) {
//     if (freq.hasOwnProperty(input)) {
//       return true;
//     }

//     freq[input] = 1;
//   }

//   return false;
// }

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true
// console.log(areThereDuplicates("a", "b", "c")); // true

////////////////////////////////////////////////////////
// -------- Multiple Pointers Pattern ----------

// function averagePair(arr, target) {
//   // check if array is empty
//   if (arr.length === 0) {
//     return false;
//   }

//   // start both pointers from array end
//   let left = arr.length - 2;
//   let right = arr.length - 1;

//   for (let i = arr.length; i > 0; i--) {
//     let average = (arr[left] + arr[right]) / 2;

//     if (average === target) {
//       return true;
//     }

//     if (average > target) {
//       right--;
//       left--;
//     }

//     // check edge case when average < target in first iteration
//     // because in first iteration we sum the two biggest numbers,
//     // as the array is sorted and i start from the array end
//     if (i === arr.length && average < target) {
//       return false;
//     }

//     if (average < target) {
//       right++;
//     }
//   }

//   return false;
// }

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

/////////////////////////
// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form
// a subsequence of the characters in the second string.
// In other words, the function should check whether the
// characters in the first string appear somewhere in the second string,
// without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  if (str2.length < str1.length) {
    return false;
  }

  let left = 0;
  let right = 0;
  let str1Pointer = 0;
  let foundFirstChar = false;

  // check for the first char of str1 in str2
  for (let i = 0; i < str2.length; i++) {
    if (str2[left] === str1[0]) {
      foundFirstChar = true;
      break;
    }

    left++;
  }

  // (edge case) check if left index was the last char in str2
  // and str1 length was more than 1 charcter
  // or not found the first string(str1)
  if ((left === str2.length - 1 && str1.length > 1) || !foundFirstChar) {
    return false;
  }

  right = left + 1;
  str1Pointer = 1;
  for (let i = left; i < str2.length - 1; i++) {
    if (str2[right] === str1[str1Pointer]) {
      left++;
      right++;
    }
  }
}

isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false (order matters)

////////////////////////////////////////////////////////
// -------- Sliding Window Pattern ----------

// Write a function called minSubArrayLen which accepts two parameters
// an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous
// subarray of which the sum is greater than or equal
// to the integer passed to the function.
// If there isn't one, return 0 instead.

// ex. ([2, 3, 1, 2, 4, 3], 7 ) ---[4,3] ---> o/p =  2
// 2+3+1+2
// 3+1+2+4
// 1+2+4
// 2+4+3
// 4+3
// 3

// function minSubArrayLen(arr, num) {
//   // check if array is empty
//   if (arr.length === 0) {
//     return null;
//   }

//   let sum = 0;
//   let minLength = 0;
//   let counter = 0;
//   let firstMinLength = 0;

//   // get intial minLength to start with(firstMinLength)
//   for (const item of arr) {
//     sum += item;
//     counter++;

//     if (sum >= num) {
//       minLength = counter;
//       break;
//     }
//   }

//   // check for not found sum case
//   if (minLength === 0) {
//     return 0;
//   }

//   firstMinLength = minLength;

//   for (let i = 1; i < arr.length; i++) {
//     sum = sum - arr[i - 1];

//     if (sum >= num) {
//       minLength--;
//     } else {
//       sum = sum + arr[firstMinLength];
//     }

//     // console.log("minlength", minLength);
//   }

//   return minLength;
// }

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));

////////////////////////////////
// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts
// a string and returns the length of the longest substring
// with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

// function findLongestSubstring(str) {
//   // "rithmschool" ---> "rithmsc" ---> 7
//   // "thisisawesome" --> ""
//   const seen = {};
//   let maxLength = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (seen[char]) {
//     }
//     seen[char] = char;
//   }

//   console.log(seen);

//   return maxLength;
// }

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7 "rithmsc"
// console.log(findLongestSubstring("thisisawesome")); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
// findLongestSubstring("thisishowwedoit"); // 6

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
//   // base case
//   if (arr.length === 0) return;

//   if (Array.isArray(arr[0])) {
//     return [...arr[0], arr.slice(1)];
//   }

//   return flatten(arr.slice(1));
// }

// console.log(flatten([1, 2, 3, [4, 5]]));
// console.log(flatten([1, [2, [3, 4], [[5]]]]));
// console.log(flatten([[1], [2], [3]]));
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

///////////////////////////////////////////////////////
//////////// Searching Algorithms /////////////
///////////////////////////////////////////////////////
// Linear Search Exercise
// Write a function called linearSearch which accepts
// an array and a value, and returns the index at
// which the value exists. If the value does not exist in
// the array, return -1.

// function linearSearch(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return i;
//   }

//   return -1;
// }

// console.log(linearSearch([10, 15, 20, 25, 30], 15));
// console.log(linearSearch([], 15));
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
// console.log(linearSearch([100], 100));
// console.log(linearSearch([1, 2, 3, 4, 5], 6));
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));

///////////////////////////////
// Binary Search Exercise
// Write a function called binarySearch which accepts
// a sorted array and a value and returns the index at
// which the value exists. Otherwise, return -1.

// function binarySearch(arr, value) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = 0;

//   while (left <= right) {
//     middle = Math.floor((left + right) / 2);
//     if (value === arr[middle]) {
//       return middle;
//     } else if (value > arr[middle]) {
//       left = middle + 1;
//     } else if (value < arr[middle]) {
//       right = middle - 1;
//     }
//   }

//   return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 2));
// console.log(binarySearch([1, 2, 3, 4, 5], 3));
// console.log(binarySearch([1, 2, 3, 4, 5], 5));
// console.log(binarySearch([1, 2, 3, 4, 5], 6));
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// );
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// );

// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// );

// console.log(binarySearch([1, 2, 3, 4, 5], 1));
// console.log(binarySearch(["ahmed", "belal", "mostafa", "saad"], "mostafa"));

///////////////////////////////
// Naive String Search
// function stringSearch(str, subStr) {
//   if (subStr.length > str.length) {
//     return -1;
//   }

//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < subStr.length; j++) {
//       if (str[i + j] !== subStr[j]) {
//         break;
//       }

//       if (j === subStr.length - 1) {
//         counter++;
//       }
//     }
//   }

//   return counter;
// }

// console.log(stringSearch("asjdksjdkand", "sjd"));

///////////////////////////////////////////////////////
//////////// Sorting Algorithms /////////////
///////////////////////////////////////////////////////

// bad implementation
// Bubble Sort
// function bubbleSort(arr) {
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// good implementation
// function bubbleSort(arr) {
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// More Optimized implementation
// function bubbleSort(arr) {
//   let temp;
//   let noSwaps;
//   for (let i = 0; i < arr.length; i++) {
//     // console.log("iteration", i);
//     noSwaps = true;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       // console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }

//     if (noSwaps) break;
//   }

//   return arr;
// }

// console.log(bubbleSort([5, 2, 4, 1, 3]));
// console.log(bubbleSort([15, 3, 1, 30, 48, 21, 0, 99, 10]));
// console.log(bubbleSort([15, 3, -1, 30, 48, 21, 0, 99, 10]));
// console.log(bubbleSort([1, 2, 3, 5, 4]));

////////////////////////////////////
// Selection Sort

// function selectionSort(arr) {
//   let temp;
//   let minIndex;

//   for (let i = 0; i < arr.length; i++) {
//     minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }

//     if (minIndex !== i) {
//       // swap
//       temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }

//   return arr;
// }

// // console.log(selectionSort([5, 2, 4, 1, 3]));
// // console.log(selectionSort([15, 3, 1, 30, 48, 21, 0, 99, 10]));
// // console.log(selectionSort([15, 3, -1, 30, 48, 21, 0, 99, 10]));
// console.log(selectionSort([1, 2, 3, 5, 4]));
// console.log(selectionSort([]));

////////////////////////////////////
// Insertion Sort
function insertionSort(arr) {
  let currentVal;
  let insertPos;

  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    insertPos = i;

    for (let j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      arr[j + 1] = arr[j];
      insertPos = j;
    }
    // insert correct item
    arr[insertPos] = currentVal;
  }

  return arr;
}

console.log(insertionSort([5, 2, 4, 1, 3]));
console.log(insertionSort([15, 3, 1, 30, 48, 21, 0, 99, 10]));
console.log(insertionSort([15, 3, -1, 30, 48, 21, 0, 99, 10]));
console.log(insertionSort([1, 2, 3, 5, 4]));
console.log(insertionSort([13, 0, -1, 0, 14, 7, 10]));
console.log(insertionSort([]));