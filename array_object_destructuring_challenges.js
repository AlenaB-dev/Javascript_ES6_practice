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

/**
 * CHALLENGE 3
 *
 *
 */
/*
Modify "personInfo" function to match console.log output at the end of the challenge.

Object that is returned by "personInfo" function must contain only shorthand property names.
*/

// const personInfo = ({
//   name,
//   age: personAge,
//   location: { country: origin, city: homeCity },
//   friendsQty = 0,
//   recordCreatedAt = new Date().getFullYear(),
// }) => {
//   return {
//     name,
//     personAge,
//     origin,
//     homeCity,
//     friendsQty,
//     recordCreatedAt,
//   };
// };

// const person = {
//   name: "Alice",
//   age: 19,
//   location: {
//     country: "England",
//     city: "London",
//   },
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

/**
 * CHALLENGE 4
 *
 *
 */

/*
Create "processPosts" function that will return new array of posts.

Notice that some propery names in each post are modified and each postId is incremented by 1000.

Original array of posts should not be mutated.
*/

// const processPosts = (posts) => {
//   return posts.map(
//     ({ postId, author: postAuthor, commentsQty: postCommentsQty = 0 }) => ({
//       postAuthor,
//       postCommentsQty,
//       postId: postId + 1000,
//     })
//   );
// };

// const posts = [
//   {
//     postId: 234,
//     author: "robd",
//     commentsQty: 5,
//   },
//   {
//     postId: 823,
//     author: "sady",
//   },
//   {
//     postId: 161,
//     author: "merryl",
//     commentsQty: 8,
//   },
// ];

// console.log(processPosts(posts));
// /*
// [
//   {
//     postId: 1234,
//     postAuthor: "robd",
//     postCommentsQty: 5
//   },
//   {
//     postId: 1823,
//     postAuthor: "sady",
//     postCommentsQty: 0
//   },
//   {
//     postId: 1161,
//     postAuthor: "merryl",
//     postCommentsQty: 8
//   }
// ]
// */

// console.log(posts); // original array of posts
