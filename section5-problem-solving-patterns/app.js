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

/////////////////////////
// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings,
// a message and some letters. The function should return true if the message
// can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters
// in both the message and the letters.

//// better solution from chatgpt using only one object space complexity O(n) ////
// function constructNote(msg, letter) {
//   if (msg.length > letter.length || !letter) {
//     return false;
//   }
//   if (!msg) return true; // If msg is empty, we can always construct it

//   const freq = {};

//   // count charcter in letter
//   for (let char of letter) {
//     if (freq[char]) {
//       freq[char]++;
//     } else {
//       freq[char] = 1;
//     }
//   }

//   // look up for the same key and value of freq1 should be less than value in freq2
//   for (let char of msg) {
//     // console.log(freq[char]);
//     if (!freq[char]) return false;
//     freq[char]--;
//   }

//   return true;
// }

//// my solution space complexity O(n+m)////
// function constructNote(msg, letter) {
//   if (msg.length > letter.length || !letter) {
//     return false;
//   }
//   if (!msg) return true; // If msg is empty, we can always construct it

//   const freq1 = {};
//   const freq2 = {};

//   // count charcter in msg
//   for (let char of msg) {
//     if (freq1[char]) {
//       freq1[char]++;
//     } else {
//       freq1[char] = 1;
//     }
//   }

//   // count charcter in letter
//   for (let char of letter) {
//     if (freq2[char]) {
//       freq2[char]++;
//     } else {
//       freq2[char] = 1;
//     }
//   }

//   // look up for the same key and value of freq1 in freq2
//   for (let [key, value] of Object.entries(freq1)) {
//     if (!freq2[key] || freq1[key] > freq2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(constructNote("aa", "abc")); //false
// console.log(constructNote("abc", "dcba")); //true
// console.log(constructNote("aabbcc", "bcabcaddff")); //true
// console.log(constructNote("hello", "olhlel")); // true

/////////////////////////
// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once
// .Find all the elements that appear twice in this array.
// Note that you can return the elements in any order.
// Time Complexity - O(n)
// function findAllDuplicates(arr) {
//   const duplicatedItems = [];
//   const freq = {};

//   // count occurences of all numbers in the array
//   for (const num of arr) {
//     if (!freq[num]) {
//       freq[num] = 1;
//     } else {
//       freq[num]++;
//     }
//   }

//   // check for duplicates
//   for (let [key, value] of Object.entries(freq)) {
//     if (value === 2) {
//       duplicatedItems.push(Number(key));
//     }
//   }

//   return duplicatedItems;
// }

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2,3]
// console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // [1,2,3]
// console.log(findAllDuplicates([])); // []

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

// function isSubsequence(str1, str2) {
//   if (str2.length < str1.length) {
//     return false;
//   }

//   let left = 0;
//   let right = 0;
//   let str1Pointer = 0;
//   let foundFirstChar = false;

//   // check for the first char of str1 in str2
//   for (let i = 0; i < str2.length; i++) {
//     if (str2[left] === str1[0]) {
//       foundFirstChar = true;
//       break;
//     }

//     left++;
//   }

//   // (edge case) check if left index was the last char in str2
//   // and str1 length was more than 1 charcter
//   // or not found the first string(str1)
//   if ((left === str2.length - 1 && str1.length > 1) || !foundFirstChar) {
//     return false;
//   }

//   right = left + 1;
//   str1Pointer = 1;
//   for (let i = left; i < str2.length - 1; i++) {
//     if (str2[right] === str1[str1Pointer]) {
//       left++;
//       right++;
//     }
//   }
// }

// isSubsequence("hello", "hello world"); // true
// isSubsequence("sing", "sting"); // true
// isSubsequence("abc", "abracadabra"); // true
// isSubsequence("abc", "acb"); // false (order matters)

/////////////////////////
// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere
// in the second string, without their order changing.
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

// solution but with space complexity of O(n)
// function isSubsequence(str1, str2) {
//   let str1CurIndex = 0;
//   const result = [];

//   for (let i = 0; i < str2.length; i++) {
//     if (str1[str1CurIndex] === str2[i] && str1CurIndex < str1.length) {
//       result.push(str2[i]);
//       str1CurIndex++;
//     }
//   }

//   if (result.join("") === str1) {
//     return true;
//   }

//   return false;
// }

// better solution with space complexity of O(1)
// function isSubsequence(str1, str2) {
//   if (str1.length > str2.length) return false;

//   let str1Ptr = 0;

//   // loop through str2 by our pointer of str1 ==> str1ptr
//   for (let i = 0; i < str2.length; i++) {
//     if (str1[str1Ptr] === str2[i] && str1Ptr < str1.length) {
//       str1Ptr++;
//     }

//     // this means all charcters of str1 has been found in str2 because the str1ptr reached the max length
//     if (str1Ptr === str1.length) {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(isSubsequence("hello", "world hello")); //true
// console.log(isSubsequence("sing", "sting")); //true
// console.log(isSubsequence("abc", "abracadabra")); //true
// console.log(isSubsequence("abc", "acb")); //false (order matters)

/////////////////////////
// Frequency Counter / Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair of
// elements in the array whose difference is n. This function
// should return true if the pair exists or false if it does not.
// Part 1 - solve this with the following requirements:
// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)
// Part 2 - solve this with the following requirements:
// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)

// solution 1
// Time Complexity Requirement - O(n)
// Space Complexity Requirement - O(n)
// function findPair(arr, num) {
//   const freq = {};

//   // add each number in array as key and the value equals number + num(input)
//   for (const number of arr) {
//     if (!freq[number]) {
//       freq[number] = number + num;
//     }
//   }

//   // check if the (number + num) as key has a value (exists) in the freq object
//   for (const number of arr) {
//     if (freq[number + num]) {
//       return true;
//     }
//   }

//   return false;
// }

///////
// solution 2
// Time Complexity Requirement - O(n log n)
// Space Complexity Requirement - O(1)
// function findPair(arr, num) {
//   const sortedArr = arr.slice().sort((a, b) => a - b);
//   let left = 0;
//   let right = 1;

//   while (right < sortedArr.length) {
//     let difference = sortedArr[right] - sortedArr[left];

//     if (Math.abs(difference) === Math.abs(num)) {
//       return true;
//     } else if (difference < num) {
//       right++; // Increase right pointer to find a larger difference
//     } else {
//       left++; // Increase left pointer to reduce the difference
//       if (left === right) right++; // Ensure right is always ahead
//     }
//   }

//   return false;
// }

// console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
// console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
// console.log(findPair([4, -2, 3, 10], -6)); // true
// console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
// console.log(findPair([], 0)); // false
// console.log(findPair([5, 5], 0)); // true
// console.log(findPair([-4, 4], -8)); // true
// console.log(findPair([-4, 4], 8)); // true
// console.log(findPair([1, 3, 4, 6], -2)); // true
// console.log(findPair([0, 1, 3, 4, 6], -2)); // true

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
// Time Complexity - O(n)

// function findLongestSubstring(str) {
//   if (str.length === 0) return 0;

//   const charactersSet = new Set();
//   let left = 0;
//   let right = 0;
//   let max = 0;

//   while (right < str.length) {
//     if (!charactersSet.has(str[right])) {
//       charactersSet.add(str[right]);
//       right++;
//       max = Math.max(charactersSet.size, max);
//     } else {
//       charactersSet.delete(str[left]);
//       left++;
//     }
//   }
//   // console.log(charactersSet);
//   return max;
// }

// console.log(findLongestSubstring("rithmschool")); // 7 "rithmsc"
// console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6
// console.log(findLongestSubstring("wedoit")); // 6

////////////////////////////////////////////////////////
// -------- Divide & Conquer Pattern ----------

/////////////////////////
// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a
// function called countZeroes, which returns the number of zeroes in the array.
// Time Complexity - O(log n)
// function countZeroes(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = 0;

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);

//     if (arr[mid] === 0) {
//       // If mid is zero, move left boundary to find the first zero
//       right = mid - 1;
//     } else {
//       // If mid is one, move right boundary forward
//       left = mid + 1;
//     }
//   }

//   // At the end of binary search, left is at the first occurrence of zero
//   return arr.length - left;
// }

// console.log(countZeroes([1, 1, 1, 1, 0, 0])); //2
// console.log(countZeroes([1, 0, 0, 0, 0])); //4
// console.log(countZeroes([0, 0, 0])); //3
// console.log(countZeroes([1, 1, 1, 1])); //0
// console.log(countZeroes([])); //0

/////////////////////////
// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency
// that counts the occurrences of the number in the array
// Time Complexity - O(log n)

// function getFirstOccurrence(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   let first = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === num) {
//       first = mid;
//       right = mid - 1; // Keep searching on the left
//     } else if (arr[mid] < num) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return first;
// }

// function getLastOccurrence(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   let last = -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === num) {
//       last = mid;
//       left = mid + 1; // Keep searching on the right
//     } else if (arr[mid] < num) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return last;
// }

// function sortedFrequency(arr, num) {
//   const firstOccurrence = getFirstOccurrence(arr, num);
//   const lastOccurrence = getLastOccurrence(arr, num);
//   // If the number is not found, return -1
//   if (firstOccurrence === -1) {
//     return -1;
//   }
//   return lastOccurrence - firstOccurrence + 1;
// }

// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); //4
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); //1
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); //2
// console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); //-1

// console.log(getFirstOccurrence([1, 1, 2, 2, 2, 2, 3], 4));
// console.log(getFirstOccurrence([1, 1, 2, 2, 2, 2, 3], 2));
// console.log(getFirstOccurrence([1, 1, 2, 2, 2, 2, 3], 1));
// console.log(getFirstOccurrence([1, 1, 2, 2, 2, 2, 3], 3));

// console.log(getLastOccurrence([1, 1, 2, 2, 2, 2, 3], 4));
// console.log(getLastOccurrence([1, 1, 2, 2, 2, 2, 3], 2));
// console.log(getLastOccurrence([1, 1, 2, 2, 2, 2, 3], 1));
// console.log(getLastOccurrence([1, 1, 2, 2, 2, 2, 3], 3));

/////////////////////////
// Divide and Conquer - findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array
// of sorted numbers and an integer. The function should return the
// index of the integer in the array. If the value is not found, return -1.
// Constraints:
// Time Complexity - O(log n)
// Space Complexity - O(1)

///// chatgpt solution for getPivotIndex function
// function getPivotIndex(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid;

//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);

//     // Ensure mid + 1 is within bounds before checking
//     if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
//       return mid + 1; // Pivot found
//     }
//     // Ensure mid - 1 is within bounds before checking
//     if (mid > 0 && arr[mid] < arr[mid - 1]) {
//       return mid; // Pivot found
//     }

//     // If mid is greater than left, pivot is in the right half
//     if (arr[mid] >= arr[left]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return 0; // If no rotation, pivot is at index 0
// }

//// my solution
function getPivotIndex(arr) {
  if (arr.length === 0) return null;

  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // we check if the pivot is before the mid
    if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return mid;
      // we check if the pivot is after the mid
    } else if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
      return mid + 1;
      //here we try to find the unsorted part of the array in which the pivot is found
    } else if (arr[mid] <= arr[left]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return 0; // If no rotation, pivot is at index 0
}

function findRotatedIndex(arr, num) {
  let mid;
  let left = 0;
  let right = arr.length - 1;
  // get pivot index
  const pivot = getPivotIndex(arr);
  // check if array is not empty
  if (!pivot) return -1;

  // get the correct range for the arr[pivot] to search in
  if (num >= arr[pivot] && num <= arr[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  // apply binary search in that range
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else if (arr[mid] > num) {
      right = mid - 1;
    }
  }

  return -1; // if num not found
}

// console.log(getPivotIndex([23, 25, 28, 34, 3, 5, 7, 10, 12, 15, 20]));
// console.log(getPivotIndex([10, 12, 15, 20, 23, 25, 28, 34, 3, 5, 7]));
// console.log(getPivotIndex([]));
// console.log("--------------------------------------------");

console.log(findRotatedIndex([3, 4, 1, 2], 4)); //1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); //2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); //6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); //-1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); //-1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); //5
console.log(findRotatedIndex([8, 9, 10, 1, 2, 3, 4, 5, 6, 7], 9)); //1
console.log(findRotatedIndex([23, 25, 28, 34, 3, 5, 7, 10, 12, 15, 20], 28)); //2
console.log(findRotatedIndex([], 28)); //-1
console.log(findRotatedIndex([5, 1, 2, 3, 4], 3)); //3
