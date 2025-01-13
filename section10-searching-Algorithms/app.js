"use strict";

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
function stringSearch(str, subStr) {
  if (subStr.length > str.length) {
    return -1;
  }

  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) {
        break;
      }

      if (j === subStr.length - 1) {
        counter++;
      }
    }
  }

  return counter;
}

console.log(stringSearch("asjdksjdkand", "sjd"));
