// // Object literal

// let myObject = {
//   prop1: 1,
//   prop2: "String",
//   prop3: function () {
//     console.log(this.prop1, this.prop2);
//   },
// };

/**
 * Enhanced object literals
 *
 * EXAMPLE 1.
 *
 * Shorthand property names
 *
 */

// const num = 10;
// const str = "Hey";
// const bool = true;

// const myObject = {
//   num,
//   str,
//   bool,
//   //missingVar, // ReferenceError: Can't find variable: missingVar
// };
// console.log(myObject); // {num: 10, str: "Hey", bool: true}

/**
 * EXAMPLE 2
 *
 * Shorthand mehtod names
 *
 */

// const myCar = (make, year) => {
//   return {
//     make,
//     year,
//     info(price) {
//       return `${make} costs ${price}`;
//     },
//   };
// };

// const newCar = myCar("Tesla", 2020);
// console.log(newCar.info(30000)); // Tesla costs 30000

/**
 * EXAMPLE 3
 *
 * Computed property names
 *
 */

// const BG_COLOR_PROP = "bgColor";
// const btn = {
//   title: "Button 1",
//   [BG_COLOR_PROP]: "blue",
// };

// const list = {
//   options: ["Option 1", "Option 2"],
//   [BG_COLOR_PROP]: "grey",
// };

// console.log(btn); // {title: "Button 1", bgColor: "blue"}
// console.log(list); // {options: ["Option 1", "Option 2"], bgColor: "grey"}
