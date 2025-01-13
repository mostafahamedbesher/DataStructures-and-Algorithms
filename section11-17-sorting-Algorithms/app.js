"use strict";

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
// function insertionSort(arr) {
//   let currentVal;
//   let insertPos;

//   for (let i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     insertPos = i;

//     for (let j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
//       arr[j + 1] = arr[j];
//       insertPos = j;
//     }
//     // insert correct item
//     arr[insertPos] = currentVal;
//   }

//   return arr;
// }

// console.log(insertionSort([5, 2, 4, 1, 3]));
// console.log(insertionSort([15, 3, 1, 30, 48, 21, 0, 99, 10]));
// console.log(insertionSort([15, 3, -1, 30, 48, 21, 0, 99, 10]));
// console.log(insertionSort([1, 2, 3, 5, 4]));
// console.log(insertionSort([13, 0, -1, 0, 14, 7, 10]));
// console.log(insertionSort([]));

/////////////////////////////////////////////////
/****************************************** */
/////////////////////////////////////////////////

// Merge Sort
// function merge(arr1, arr2) {
//   const mergedArray = [];

//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// console.log(merge([1, 8, 20], [2, 13, 21, 40]));
// console.log(merge([3, 4, 10], [2, 13, 21, 40]));
// console.log(merge([3, 14, 30, 45], [2, 13]));

// function mergeSort(arr) {
//   // base case
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   const arr1 = mergeSort(arr.slice(0, mid));
//   const arr2 = mergeSort(arr.slice(mid));
//   return merge(arr1, arr2);
// }

// console.log(mergeSort([20, 1, 13, 40, 8, 2, 21]));
// console.log(mergeSort([100, 105, 6, 88, 9, 1, 4, 12, 10, 0, -1]));

////////////////////////////////////
// Quick Sort

// function swap(arr, index1, index2) {
//   let temp;
//   temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
// }

// // pivot helper function
// function getPivot(arr, startIndex = 0, endIndex = arr.length - 1) {
//   let pivot = arr[startIndex];
//   let swapIndex = startIndex;

//   for (let i = startIndex + 1; i <= endIndex; i++) {
//     if (pivot > arr[i]) {
//       // swap
//       swapIndex++;
//       swap(arr, swapIndex, i);
//     }
//   }
//   // put pivot in correct index
//   swap(arr, startIndex, swapIndex);

//   return swapIndex;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   // base case
//   // left >= right

//   if (left < right) {
//     // get pivot index
//     let pivotIndex = getPivot(arr, left, right);
//     // left side array
//     quickSort(arr, left, pivotIndex - 1);
//     // right side array
//     quickSort(arr, pivotIndex + 1, right);
//   }

//   return arr;
// }

// console.log(quickSort([20, 1, 13, 40, 8, 2, 21]));
// console.log(quickSort([100, 18, 5, 4, 66, 20, 1, 7]));
// console.log(quickSort([101, 2, 1, 9, -15, -1, -20, 0, 90, 17]));
// console.log(quickSort([]));

////////////////////////////////////
// Radix Sort

// some helper methods
// my implementation
// function getDigitValue(number, digitNo = 0) {
//   // handle negative numbers
//   if (number < 0) {
//     number *= -1;
//   }
//   // convert number to string first
//   const str = number.toString();
//   const strLength = str.length;

//   if (digitNo < strLength) {
//     return Number(str[strLength - (digitNo + 1)]);
//   } else {
//     return 0;
//   }
// }

// console.log(getDigitValue(4589, 1));

////// my solution for this method
// function getMaxDigitNumber(arr) {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let item = arr[i];
//     // handle negative numbers
//     if (arr[i] < 0) {
//       item *= -1;
//     }
//     let itemLength = item.toString().length;
//     // console.log(itemLength);
//     if (itemLength > max) {
//       max = itemLength;
//     }
//   }

//   return max;
// }

// console.log(getMaxDigitNumber([145, 12, 1489, 1, 0, -1]));

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

////// lecture solution for this method
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxDigit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let itemDigitCount = digitCount(arr[i]);
    if (itemDigitCount > max) {
      max = itemDigitCount;
    }
  }

  return max;
}

function radixSort(arr) {
  const max = getMaxDigit(arr);
  let digitsArr = [[], [], [], [], [], [], [], [], [], []];
  let curDigit;

  for (let i = 0; i < max; i++) {
    digitsArr = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < arr.length; j++) {
      curDigit = getDigit(arr[j], i);
      digitsArr[curDigit].push(arr[j]);
    }
    arr = digitsArr.flat(1);
  }

  return arr;
}

console.log(radixSort([158, 14789, -5, -1, 32, 0, 1]));
console.log(radixSort([158, 14789, 5, 1, 32, 0, 15]));
