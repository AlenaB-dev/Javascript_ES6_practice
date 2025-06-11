/**
 * CHALLENGE 1
 *
 * Modify parameters section in the "processQuantities" function to match console.log outputs
 *
 */

// const processQuantities = ([minQty, maxQty, defaultQty = 0]) => {
//   console.log(minQty); // 8
//   console.log(maxQty); // 29
//   console.log(defaultQty); // 0
//   return maxQty - minQty; // returns 21
// };

// const qtyRange = [8, 29];

// processQuantities(qtyRange);

/**
 * CHALLENGE 2
 *
 *
 */
/*
// Create a function "minMax" that will accept any quantity of the arguments.

// This function should return array of two elements:
// 1. First element in the array is minimal value among all arguments
// 2. Second element in the array is maximal value among all arguments

// Use destructuring to parse results of the function calls.
// */

// const minMax = (...args) => [
//   args.reduce((min, num) => (num < min ? num : min)), // First element in the array is minimal value among all arguments
//   args.reduce((max, num) => (num > max ? num : max)), // Second element in the array is maximal value among all arguments
// ];

// let min, max;

// [min, max] = minMax(
//   24,
//   5,
//   34,
//   10
// ); /* call here "minMax" function with arguments 24, 5, 34, 10 */

// console.log(min, max); // 5, 34

// [min, max] = minMax(
//   18,
//   23,
//   103,
//   70,
//   80,
//   25
// ); /* call here "minMax" function with arguments 18, 23, 103, 70, 80, 25 */
// console.log(min, max); // 18, 103
