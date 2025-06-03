//console.log("_____________________for loop");

/* Create a function called "arrayInfo" that will return string like 
"London is located at the index 0 in the myCities array" */

/* Iterate over the "myCities" array, call "arrayInfo" function for each of the elements and print result of the call to the console */

// const myCities = ["London", "New York", "Singapore"];

// const arrayInfo = (element, index) =>
//   element + " is located at the index " + index + " myCities array";

// // Option 1: "for"
// for (let i = 0; i < myCities.length; i++) {
//   console.log(arrayInfo(myCities[i], i));
// }
// // London is located at the index 0 myCities array
// // New York is located at the index 1 myCities array
// // Singapore is located at the index 2 myCities array
// console.log("_____________________forEach()");
// // Option 2: "forEach"
// const myCities1 = ["London", "New York", "Roma"];

// myCities1.forEach((city, index) => console.log(arrayInfo(city, index)));
// London is located at the index 0 myCities array
// New York is located at the index 1 myCities array
// Roma is located at the index 2 myCities array

//console.log("_____________________map");

/**
 * From the "postsJSON" array create "posts" array that will consist of JavaScript object
 */

// const postsJSON = [
//   '{"postsId":1335, "commentsQty":5}',
//   '{"postsId":2434, "commentsQty":23}',
//   '{"postsId":5432, "commentsQty":2}',
// ];

// // using for loop
// var posts = [];
// for (let i = 0; i < postsJSON.length; i++) {
//   posts.push(JSON.parse(postsJSON[i]));
// } /**[{postsId: 1335, commentsQty: 5}, {postsId: 2434, commentsQty: 23}, {postsId: 5432, commentsQty: 2}] */

// // using map() - Option 1, direct call
// const posts = postsJSON.map(JSON.parse);

// console.log(
//   posts
// ); /**[{postsId: 1335, commentsQty: 5}, {postsId: 2434, commentsQty: 23}, {postsId: 5432, commentsQty: 2}] */

// // using map() - Option 2, call through callback function

// const posts1 = postsJSON.map((post) => JSON.parse(post));
// console.log(
//   posts1
// ); /**[{postsId: 1335, commentsQty: 5}, {postsId: 2434, commentsQty: 23}, {postsId: 5432, commentsQty: 2}] */

/**
 * CHALLENGE 4
 *
 * FIND()
 */
// const posts = [
//   { postId: 1355, commentsQuantity: 5 },
//   { postId: 5131, commentsQuantity: 13 },
//   { postId: 6134, commentsQuantity: 2 },
// ];

// /* Create a function "findSinglePost" that will have two parameters - "postId" and "posts" and will return object with matched "postId".
// If post wasn't found - return "undefined"
// */

// const findSinglePost = (postId, posts) =>
//   posts.find((post) => post.postId === postId);

// console.log(findSinglePost(6134, posts)); // { postId: 6134, commentsQuantity: 2 }

// console.log(findSinglePost(4511, posts)); // undefined

// /**
//  * CHALLENGE 5
//  *
//  * EVERY() SOME()
//  */

// const a = [5, "abc", 10, 1];
// const b = [4, 10, 14, 25, 25, 50];
// const c = [150, 132, 80, 40];
// const d = [15, 26, 10, 23, 85];

// /*
// Create a function "arrayCheck" with one parameter - "inputArray".

// If at least one element in the array is not a number - return "Some elements are not numbers".

// If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".

// If numbers in the array are sorted in descending order - return "Array is sorted is descending order".

// If array is not sorted - return "Array is not sorted"
// */
// // console.log("__________not numbers");

// // const arrayCheck = (element) => typeof element === "number";

// // const typeOfElement = a.every(arrayCheck);
// // if (!typeOfElement) {
// //   console.log("Some elements are not numbers");
// // }

// // console.log("_____________ascending order");

// // const isSortedAscending = b.every((num, index, array) => {
// //   return index === 0 || num >= array[index - 1];
// // });

// // if (isSortedAscending) {
// //   console.log("Array is sorted is ascending order");
// // }

// // console.log("_____________descending order");

// // const isSortDescending = c.every((num, index, array) => {
// //   return index === 0 || num <= array[index - 1];
// // });

// // console.log(
// //   isSortDescending
// //     ? "Array is sorted is descending order"
// //     : "Array is not sorted is descending order"
// // );

// // console.log("_____________not sorted");

// // const isAscending = d.every((num, index, array) => {
// //   return index === 0 || num >= array[index - 1];
// // });

// // const isDescending = d.every((num, index, array) => {
// //   return index === 0 || num <= array[index - 1];
// // });

// // const notSorted = !isAscending && !isDescending;

// // if (notSorted) {
// //   console.log("Array is not sorted");
// // }

// // // сокращенный вариант проверки

// // const notSorted1 =
// //   !d.every((x, i, a) => i === 0 || x >= a[i - 1]) &&
// //   !d.every((x, i, a) => i === 0 || x <= a[i - 1]);

// // console.log(notSorted1 ? "Array is NOT sorted" : "Array is sorted");

// // checking for a type of element (should be a number)
// const arrayCheck = (inputArray) => {
//   if (inputArray.some((element) => typeof element !== "number")) {
//     return "Some elements are not numbers";
//   }

//   // sort in asceding order
//   if (
//     inputArray.every((element, index, array) =>
//       index > 0 ? element >= array[index - 1] : true
//     )
//   ) {
//     return "Array is sorted is ascending order";
//   }

//   // sort in desceding order
//   if (
//     inputArray.every((element, index, array) =>
//       index > 0 ? element <= array[index - 1] : true
//     )
//   ) {
//     return "Array is sorted is descending order";
//   }

//   // not sorted
//   return "Array is not sorted";
// };

// console.log(arrayCheck(a)); // Some elements are not numbers
// console.log(arrayCheck(b)); // Array is sorted is ascending order
// console.log(arrayCheck(c)); // Array is sorted is descending order
// console.log(arrayCheck(d)); // Array is not sorted

// /* Hint 1: Use "every" helper method to solve this.

// Hint 2: You should use all three parameters in the callback function "element", "index", "array".

// Hint 3: Each element in the array except first one should be compared to the previous
// */

/**
 * CHALLENGE 6
 *
 * Are Arrays equal or not
 */

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a === b); // false. Прямое сравнение массивов всегда будет давать результат false. Поскольку массив, как объект, указывает на ссылку памяти, где хранится "значение". И эти ссылки всегда будут разными, за исключением случая когда мы сравниваем один и тот же объект (массив).

// /* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo".

// If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

// Otherwise return "false". */

// const c = [2, 1, 3];
// const d = [1, 2, 3, 4];

// const arraysAreEqual = (arrayOne, arrayTwo) =>
//   arrayOne.length === arrayTwo.length && // check if lenght of arrays is equal
//   arrayOne.every((element, index) => element === arrayTwo[index]); // проверяем каждый ли элемент из первого массива соответ.элементу второго массива, сравнивая элемент первого с индексом второго массива.

// console.log(arraysAreEqual(a, b)); // true
// console.log(arraysAreEqual(a, c)); // false
// console.log(arraysAreEqual(a, d)); // false

/**
 * CHALLENGE 7
 *
 * Check if Element is in Array
 */

// /* Create a function "elementFound" with two parameters "inputArray" and "searchElement".
// If "searchElement" is found in the "inputArray" - return "true".
// Otherwise return "false"

// Hint: Use "some" helper method to solve this
// */

// const transport = ["Bus", "Car", "Bicycle", "Airplane"];

// const elementFound = (inputArray, searchElement) =>
//   inputArray.some((element) => element === searchElement);

// console.log(elementFound(transport, "Bus")); // true
// console.log(elementFound(transport, "Phone")); // false
// console.log(elementFound(transport, "Airplane")); // true

/**
 * CHALLENGE 8
 *
 * INCLUDES()
 *
 * Includes() with Array or Object
 */
// const tags = [
//   ["javascript", "es6"],
//   ["css", "flexbox"],
//   ["html", "web-browser"],
// ];

// const fruits = [
//   { title: "Orange", quantity: 10 },
//   { title: "Banana", quantity: 5 },
//   { title: "Apple", quantity: 25 },
// ];

// const primitiveTypesArray = [25, "x", true, undefined, null];

// /* Create a function "elementIsIncluded" with two parameters "searchElement" and "array".

// If type of the "searchElement" is object or array, you need to convert each element in the "array" to the string and then apply "includes" method with argument that will be also converted to the string.

// If type of the "searchElement" is not an object or array - simply apply "includes" method and return result
// */

// const elementIsIncluded = (searchElement, array) => {
//   if (typeof searchElement !== "object") {
//     return array.includes(searchElement);
//   }
//   if (typeof searchElement === "object") {
//     return array
//       .map((element) => JSON.stringify(element))
//       .includes(JSON.stringify(searchElement));
//   }
// };

// console.log(elementIsIncluded(["css", "flexbox"], tags)); // true

// console.log(elementIsIncluded(["flexbox", "css"], tags)); // false

// console.log(elementIsIncluded({ title: "Apple", quantity: 25 }, fruits)); // true

// console.log(elementIsIncluded({ title: "Banana" }, fruits)); // false

// console.log(elementIsIncluded(25, primitiveTypesArray)); // true
