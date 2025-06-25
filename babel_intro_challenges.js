/**
 * CHALLENGE 1
 *
 * Compare performance - ES5, ES6 - Destructuring
 *
 */

// let myArray = [1, 2, 3];

// // ES6
// function fn1(array) {
//   let [a, b, c] = array;
//   console.log(a, b, c); // 10000 - 1 2 3
// }

// // ES5
// function fn2(array) {
//   var a = array[0];
//   var b = array[1];
//   var c = array[2];
// }

// const repeat = 1;
// // ES6
// console.time("Function 1 with ES6 features");

// for (let i = 0; i < repeat; i++) {
//   fn1(myArray); //
// }
// console.timeEnd("Function 1 with ES6 features"); // Function 1 with ES6 features: 0.066162109375 ms

// // ES5

// console.time("Function 2 with ES5 features");

// for (let i = 0; i < repeat; i++) {
//   fn2(myArray);
// }

// console.timeEnd("Function 2 with ES5 features"); // Function 2 with ES5 features: 0.02001953125 ms

/**
 * CHALLENGE 2
 *
 * Detect feature support in the Browser
 *
 */

// function featureCheck() {
//   try {
//     eval("`Test String`;");
//   } catch (e) {
//     return false;
//   }
//   return true;
// }

// if (featureCheck()) {
//   console.log(`Hello from ES6`); // Hello from ES6
// } else {
//   console.log("Hello from ES5"); // erroer Invalid charactor // because was use taplate literal string
// }

// // to make it work in es5
// if (featureCheck()) {
//   console.log("Hello from ES6"); //
// } else {
//   console.log("Hello from ES5"); // Hello from ES5 // check in IE
// }

/**
 * CHALLENGE 3
 *
 * Insert different script tags into the DOM
 *
 */

// function featureCheck() {
//   try {
//     eval("`Test String`;");
//   } catch (e) {
//     return false;
//   }
//   return true;
// }

// // new function that ads script tag
// function insertScript(type) {
//   var el = document.createElement("script"); // created new script tag
//   el.src = "src/" + type + ".js"; // set src property
//   document.body.appendChild(el); // apend dcript tag at the end of the body
// }

// if (featureCheck()) {
//   insertScript("es6");
// } else {
//   insertScript("es5");
// }
