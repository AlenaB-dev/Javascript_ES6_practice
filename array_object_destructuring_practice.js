/**
 * Array destructuring
 *
 * EXAMPLE 1
 *
 * Declaration and assigment using array destructuring
 *
 */

// const myArray = [1, 2, 3];

// // without disctructing
// let a, b, c;
// a = myArray[0];
// b = myArray[1];
// c = myArray[2];

// // with distructing

// let [a, b, c] = myArray;

// console.log(a, b, c); // 1 2 3

/**
 * EXAMPLE 2
 *
 * Assigment using array distructuring
 *
 */

// let a, b, c;
// [a, b, c] = myArray;

// console.log(a, b, c); // 1 2 3

/**
 * EXAMPLE 3
 *
 * More variables than elements in the array
 *
 */
// const myArray = ["a", "b"];
// const [a, b, c] = myArray;
// console.log(a, b, c); // a b undefined

/**
 * EXAMPLE 4
 *
 * Default values
 *
 */
// const myArray = ["a"];
// const [a, b, c = "c"] = myArray;
// console.log(a, b, c); // a undefined "c"

/**
 * EXAMPLE 5
 *
 * Skip element during distructuring
 *
 */

// const myArray = [1, 2, 3, 4, 5];
// const [, , a, , b] = myArray;
// console.log(a, b); // 3 5

/**
 * EXAMPLE 6
 *
 * Rest operator in array distructuring
 *
 */

// const myArray = [1, 2, 3, 4, 5];
// const [a, b, ...c] = myArray;
// console.log(a, b, c); // 1 – 2 – [3, 4, 5] (3)

/**
 * EXAMPLE 7
 *
 * Delete first element
 *
 */

// let myArray = [1, 2, 3];
// [, ...myArray] = myArray;
// console.log(myArray); // [2, 3] (2)

// const [, ...anotherArray] = myArray; // in this way we created another array. myArray remains the same, it wasn't mutated.
// console.log(anotherArray); // [3] (1)

/**
 * EXAMPLE 8
 *
 * Swap values
 *
 */

// let x = 3,
//   y = 2;
// [y, x] = [x, y];
// console.log(x, y); // 2 3

/**
 * EXAMPLE 9
 *
 * Destructuring in the function
 *
 */

// const myPosts = [
//   ["Post 1", 10],
//   ["Post 2", 20],
// ];

// myPosts.forEach(([title, likes]) => console.log(`${title} has ${likes} likes`));
// // Post 1 has 10 likes
// // Post 2 has 20 likes

/**
 * EXAMPLE 10
 *
 * Nested array destructuring
 *
 */

// const myArray = [1, 2, [3, 4]];
// const [a, b, [c, d]] = myArray;
// console.log(a, b, c, d); // 1 2 3 4
