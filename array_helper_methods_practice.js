/**
 * forEach()
 *
 * if in the loop will be make some mistake, such as:
 * let i = 1;
 * i > myArray.length;
 * i; - will create infinite loop
 * and we will get errors in results
 */
// don't use for loop
// const myArray = [1, true, "asd"];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]); // 1, true, asd
// }

// // forEach() will be correct choice in this situation
// const myArray1 = [1, true, "asd"];

// myArray1.forEach((elemet) => console.log(elemet)); // 1, true, asd

/**
 * map()
 *
 */

// using for loop
// const myNumbers = [1, 4, 3];
// let mySqNumbers = [];

// for (let i = 0; i < myNumbers.length; i++) {
//   mySqNumbers.push(myNumbers[i] * myNumbers[i]);
// }

// using Map()

// let mySqNumbers = myNumbers.map((element) => element * element);

// console.log(mySqNumbers); // [1, 16, 9]
// console.log(myNumbers); // [1, 4, 3] initial array remains unchanged.

// map() with external function
// const sqNumbers = (element) => element * element;

// let myNewSqNumbers = myNumbers.map(sqNumbers);

// console.log(myNewSqNumbers); // [1, 16, 9]
// console.log(myNumbers); // [1, 4, 3] initial array remains unchanged.

// map() with external function with index
// const sqNumbers1 = (element, index) => {
//   console.log("Element at the index " + index + " is " + element);
//   return element * element;
// };

// let myNewSqNumbers1 = myNumbers.map(sqNumbers1);

// console.log(myNewSqNumbers1); /**
// Element at the index 0 is 1
// Element at the index 1 is 4
// Element at the index 2 is 3
// */

// map() with Math.pow()

// let mySqNumbers = myNumbers.map((element) => Math.pow(element, 2));
// console.log(mySqNumbers); //[1, 16, 9]
// console.log(myNumbers);

// // map() with direct call to Math.pow()
// // "index" in Math.pow will be treated as exponent value

// let mySqNumbers2 = myNumbers.map(Math.pow);
// console.log(mySqNumbers2); // [1, 4, 9] - произошли умножение значения на его индекс.

/**
 * FILTER()
 */

const myNumbers = [10, 23, 8, 43, 9];

const filteredNumbers = myNumbers.filter((num) => num >= 10);

console.log(filteredNumbers); // [10, 23, 43]
console.log(myNumbers); // [10, 23, 8, 43, 9] - original array remains unchanged
