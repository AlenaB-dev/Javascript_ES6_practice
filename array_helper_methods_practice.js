/**
 * FOREACH()
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
 * MAP()
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

// const myNumbers = [10, 23, 8, 43, 9];

// const filteredNumbers = myNumbers.filter((num) => num >= 10);

// console.log(filteredNumbers); // [10, 23, 43]
// console.log(myNumbers); // [10, 23, 8, 43, 9] - original array remains unchanged

// /**
//  * FIND()
//  */

// const myArray = [10, [], true, "asd", 22, false, {}];

// const result = myArray.find((elemet) => typeof elemet === "number");

// const result1 = myArray.find((elemet) => typeof elemet === "boolean");
// console.log(result); // 10
// console.log(result1); // true

// const result2 = myArray.find((element) => {
//   console.log(element); // 10, [], true, asd
//   return typeof element === "string";
// });

// /**
//  * EVERY()
//  *
//  * EXAMPLE 1
//  * If all elements in the array are positive numbers
//  */

// const myNumbers = [2, -3, 1, 10, -4];

// // created function to check type of element and if it positive
// const isPositiveNumber = (element) =>
//   typeof element === "number" && element > 0;

// const allPositiveCheck = myNumbers.every(isPositiveNumber);
// console.log(allPositiveCheck); // false (because array contain negative numbers)

// /**
//  * SOME()
//  */

// const somePositiveCheck = myNumbers.some(isPositiveNumber);
// console.log(somePositiveCheck); // true ()as array contain some positive numbers

/**
 * EVERY() SOME()
 *
 * EXAMPLE 2
 * */

// const items = [
//   {
//     title: "Computer",
//     quantity: 10,
//   },
//   {
//     title: "Headphones",
//     quantity: 15,
//   },
//   {
//     title: "Microphone",
//     quantity: 3,
//   },
//   { title: "Phone", quantity: 0 },
// ];

// // every() - all items have quantity > 5
// if (items.every((item) => item.quantity > 5))
//   console.log("All items are availabe"); // в консоли будет пусто, параметры не соответвуют заданному условию

// // combined every() and some() - all items have quatity > 0 and some items have quantity <= 5
// if (
//   items.every((item) => item.quantity > 0) &&
//   items.some((item) => item.quantity <= 5)
// )
//   console.log("Some items may be sold soon"); // Some items may be sold soon

// // some() - some items have quantity > 0
// if (items.some((item) => item.quantity === 0))
//   console.log("Some items are sold out"); // Some items are sold out

/**
 * INCLUDES()
 */

// const myArray = [2, "asd", true, undefined, null, [1, 2]];

// console.log(true, myArray.includes(true)); // true - true
// console.log(2, myArray.includes(2)); // 2 - true
// console.log(22, myArray.includes(22)); // 22 - false
// console.log("asd", "starting from index 4", myArray.includes("asd", 4)); // asd"starting from index 4"false
// console.log("[1, 2]", myArray.includes([1, 2])); // [1, 2]false. Same result will be with object
// console.log("null", myArray.includes(null)); // null - true
// console.log("undefined", myArray.includes(undefined)); // undefined - true
