// /**
//  * EXAMPLE 1
//  */

// const sum = (a, b) => a + b;
// console.log(sum(1, 2));

// /**
//  * EXAMPLE 2
//  */

// const post = {
//   title: "Sample letter",
//   comments: 10,
//   shared: true,
//   published: true,
//   postId: 5124,
// };

// // // explicit return of the object
// // const processedPost = (post) => {
// //   return {
// //     title: post.title,
// //     comments: post.comments,
// //     popular: post.comments > 5 ? true : false,
// //   };
// // };

// // implicit return of the object. Preferable way.
// const processedPost = (post) => ({
//   title: post.title,
//   comments: post.comments,
//   popular: post.comments > 5 ? true : false,
// });

// console.log(processedPost(post)); // {title: "Sample letter", comments: 10, popular: true}

// /**
//  * EXAMPLE 3
//  *
//  * Immediately invoked anonymous function expression
//  */

// (() => {
//   function greet() {
//     return "Hey, what's up?";
//   }
//   this.greet = greet;
//   return this;
// })(); //> window.greet()  < "Hey, what's up?"

// (() => {
//   this.sayBye = () => "Bye, bye"; // > window.sayBye() < "Bye, bye"
//   return this;
// })();

// /**
//  * EXAMPLE 4
//  *
//  * Arrow and "this"
//  */

// const str = {
//   value: "Delayed greeting",

//   // "this" is lost in the callback function
//   brokenGreeting: function () {
//     setTimeout(function () {
//       console.log(this); // Window (in browsers)
//       console.log(this.value); // undefined
//     }, 1000);
//   },

//   // "this" preserved using closure (self)
//   fixedGreeting: function () {
//     const self = this;
//     setTimeout(function () {
//       console.log(self); // { value: ..., fixedGreeting: ... }
//       console.log(self.value); // "Delayed greeting"
//     }, 1000);
//   },
// };

// str.brokenGreeting();
// str.fixedGreeting();

// // упрощенный вариант with arrow function
// fixedGreeting: function () {
//   setTimeout(() => {
//     console.log(this); // объект str
//     console.log(this.value); // "Delayed greeting"
//   }, 1000);
// }

/**
 * Difference between arrow and regular function
 */

/**
 * EXAMPLE 1
 *
 * Object literal
 */

// const num = {
//   value: 100,
//   info: function () {
//     console.log(this); // num object > num.info() [Log] {value: 100, info: function} (arrow_function_practice.js, line 108) < 100
//     return this.value;
//   },
// };

/**
 * EXAMPLE 2
 *
 * Function constructor
 */

// function GroceryItem(title, kind) {
//   this.title = title;
//   this.kind = kind;
// }

// // using arrow function we will get an error - TypeError: function is not a constructor (evaluating 'new GroceryItem("Apple", "fruit")')
// const GroceryItem = (title, kind) => {
//   this.title = title;
//   this.kind = kind;
// };

// add a method

GroceryItem.prototype.info = function () {
  return this.title + " is " + this.kind;
}; // call > apple.info() in consol will give us < "Apple is fruit"

// // using arrow function will give an error - "undefined is undefined"
// GroceryItem.prototype.info = () => {
//   return this.title + " is " + this.kind;
// };

// const apple = new GroceryItem("Apple", "fruit");
// console.log(apple); // GroceryItem {title: "Apple", kind: "fruit"}

// const brocolli = new GroceryItem("Brocolli", "vegetable");
// console.log(brocolli);

/**
 * Arguments in the Functions
 */

/**
 * EXAMPLE 1
 *
 * Regular function declaration
 */

// function sum() {
//   console.log(arguments); // Arguments (5)
//   console.log(typeof arguments); // object
//   console.log(Array.isArray(arguments)); // false

//   const argumentsArray = Array.from(arguments);
//   console.log(argumentsArray); // Array (5)
// }

// sum(1, 2, 3, 4, 5);

/**
 * EXAMPLE 2
 *
 * Arrow function expression
 * imposible to get access to arguments
 */
// const sum2 = () => {
//   console.log(arguments); // ReferenceError: Can't find variable: arguments
//   console.log(typeof arguments); //

//   const argumentsArray = Array.from(arguments);
//   console.log(argumentsArray); //
// };

// sum2(1, 2, 3, 4, 5);

/**
 * EXAMPLE 2.1
 * solution
 */

// const sum3 = (...arguments) => {
//   console.log(arguments); // [1, 2, 3, 4, 5] (5)
//   console.log(typeof arguments); // object
//   console.log(Array.isArray(arguments)); // true. Arguments initially is Array and also object. In regular functions its an Object.

//   const argumentsArray = Array.from(arguments);
//   console.log(argumentsArray); // [1, 2, 3, 4, 5] (5)
// };

// sum3(1, 2, 3, 4, 5);
