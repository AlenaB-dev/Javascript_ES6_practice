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

var arrayOfNumbers1 = [23, 87, 110, 11, 20, 5, 34];
var arrayOfNumbers2 = [11, 21, 31];
const oddNumbers = [];
const evenNumbersQuantity = 0;

const onlyOddNumbers = function (array) {
  let numberLenght = array.lenght;

  for (let i = 0; i < numberLenght; i++)
    array[i] % 2 ? oddNumbers.push(array[i]) : evenNumbersQuantity++;
};

var messageAboutNumbers;
{
  if (evenNumbersQuantity === 0) {
    messageAboutNumbers = "Array contains only odd numbers";
    console.log(messageAboutNumbers);
  } else {
    messageAboutNumbers = "There are " + evenNumbersQuantity + " even numbers";
    console.log(messageAboutNumbers);
  }
}

console.log(onlyOddNumbers(arrayOfNumbers1));
console.log(onlyOddNumbers(arrayOfNumbers2));

// /*
// Modify "personInfo" function to match console.log output at the end of the challenge.

// Object that is returned by "personInfo" function must contain only shorthand property names.
// */

// const personInfo = (/* parameters */) => {
//   /* return ... */
// };

// const person = {
//   name: "Alice",
//   age: 19,
//   location: {
//     country: "England",
//     city: "London"
//   }
// };

// console.log(personInfo(person));
// /*
// {
//   name: "Alice",
//   personAge: 19,
//   origin: "England",
//   homeCity: "London",
//   friendsQty: 0,
//   recordCreatedAt: *current year*
// }
// */
