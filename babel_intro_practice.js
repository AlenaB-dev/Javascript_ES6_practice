/**
 * EXAMPLE 1
 *
 * Babel in action
 * ES6 Rest operator
 */

// function fn1(...a) {
//   return a;
// }

// function fn2() {
//   for (
//     var _len = arguments.length, a = Array(_len), _key = 0;
//     _key < _len;
//     _key++
//   ) {
//     a[_key] = arguments[_key];
//   }

//   return a;
// }

// // compare performance

// const repeat = 1000000;
// // ES 6
// console.time("Function 1 with ES6 features");

// for (let i = 0; i < repeat; i++) {
//   fn1(1, 2, 3); // (3) [1, 2, 3] // was return an array
// }

// console.timeEnd("Function 1 with ES6 features"); // Function 1 with ES6 features: 0.02490234375 ms
// // Function 1 with ES6 features: 1.6259765625 ms // with repeat const

// // ES 5
// console.time("Function 2 with ES5 features");

// for (let i = 0; i < repeat; i++) {
//   fn2(1, 2, 3); // (3) [1, 2, 3] // was return an array
// }

// console.timeEnd("Function 2 with ES5 features"); // Function 2 with ES5 features: 5.322021484375 ms
