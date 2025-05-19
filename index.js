/**
 * Challenge 1
 *
 * Rewrite code according varaibles code guidelines
 */

// numbers1 = [23, 87, 110, 11, 20, 5, 34];
// numbers2 = [11, 21, 31];

// var onlyOddNumbers = function (arr) {
//   oddNumbers = [];
//   EVEN_NUMBERS_QUANTITY = 0;
//   len = arr.length;

//   for (i = 0; i < len; i++) {
//     arr[i] % 2 ? oddNumbers.push(arr[i]) : EVEN_NUMBERS_QUANTITY++;
//   }

//   var info;
//   if (EVEN_NUMBERS_QUANTITY === 0) {
//     info = "Array contains only odd numbers";
//     console.log(info);
//   } else {
//     info = "There are " + EVEN_NUMBERS_QUANTITY + " even numbers";
//     console.log(info);
//   }
//   return {
//     oddNumbers: oddNumbers,
//     EVEN_NUMBERS_QUANTITY: EVEN_NUMBERS_QUANTITY,
//   };
//   var oddNumbers;
// };

// var EVEN_NUMBERS_QUANTITY;

// console.log(onlyOddNumbers(numbers1));
// console.log(onlyOddNumbers(numbers2));

// rewritten code
"use strict";

const numbers1 = [23, 87, 110, 11, 20, 5, 34];
const numbers2 = [11, 21, 31];

const onlyOddNumbers = function (arr) {
  var oddNumbers = [];
  var evenNumbersQuatity = 0;
  const LEN = arr.length;

  for (let i = 0; i < LEN; i++) {
    arr[i] % 2 ? oddNumbers.push(arr[i]) : evenNumbersQuatity++;
  }

  if (evenNumbersQuatity === 0) {
    let info = "Array contains only odd numbers";
    console.log(info);
  } else {
    let info = "There are " + evenNumbersQuatity + " even numbers";
    console.log(info);
  }
  return {
    oddNumbers: oddNumbers,
    evenNumbersQuatity: evenNumbersQuatity,
  };
};

console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));

// ("use strict");

// const arrayOfNumbers1 = [23, 87, 110, 11, 20, 5, 34];
// const arrayOfNumbers2 = [11, 21, 31];

// const onlyOddNumbers = function (array) {
//   var oddNumbers = [];
//   var evenNumbersQuantity = 0;
//   const LEN = array.lenght;

//   for (let i = 0; i < LEN; i++) {
//     array[i] % 2 ? oddNumbers.push(array[i]) : evenNumbersQuantity++;
//   }

//   if (evenNumbersQuantity === 0) {
//     let messageAboutNumbers = "Array contains only odd numbers";
//     console.log(messageAboutNumbers);
//   } else {
//     let messageAboutNumbers =
//       "There are " + evenNumbersQuantity + " even numbers";
//     console.log(messageAboutNumbers);
//   }
//   return {
//     oddNumbers: oddNumbers,
//     evenNumbersQuantity: evenNumbersQuantity,
//   };
// };

// console.log(onlyOddNumbers(arrayOfNumbers1));
// console.log(onlyOddNumbers(arrayOfNumbers2));
