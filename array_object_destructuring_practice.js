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

/**
 * OBJECT DESTRUCTURING
 *
 */

/**
 * EXAMPLE 1
 *
 * Declaration and assigment using object destructuring
 *
 */
// const myObject = {
//   a: 10,
//   b: true,
// };

// // // without object destructuring
// // const a = myObject.a;
// // const b = myObject.b;

// // with object destructuring
// const { a: a, b: b } = myObject;

// console.log(a, b); // 10 true

/**
 * EXAMPLE 2
 *
 * Declaration and assigment using object destructuring and shorthand property names
 *
 */
// const myObject = {
//   a: 10,
//   b: true,
// };

// const { a, b } = myObject;
// console.log(a, b); // 10 true

/**
 * EXAMPLE 3
 *
 * Assigment using object destructuring and shorthand property names
 *
 */

// const myObject = {
//   a: 10,
//   b: true,
// };

// ({ a, b } = myObject);
// console.log(a, b); // 10 true

// const myAnotherObject = {
//   a: 22,
//   b: false,
// };

// ({ a, b } = myAnotherObject); // reassigment varaibles a and b
// console.log(a, b); // 22 false

/**
 * EXAMPLE 4
 *
 * Destructure non-object value
 *
 */

// const { a, b } = undefined;
// console.log(a, b); // TypeError: Right side of assignment cannot be destructured. Null or Undefined cant be destructuring

// const val = undefined;
// const { a, b } = val || {};
// console.log(a, b); // undefined undefined

/**
 * EXAMPLE 5
 *
 * Change order of the properties
 *
 */

// const myObject = {
//   a: 11,
//   b: true,
// };

// const { b, a } = myObject; // in destructuring assigment order in Object doesnt matter
// console.log(a, b); // 11 true

/**
 * EXAMPLE 6
 *
 * Rest operator in object destructuring
 *
 */

// const myObject = {
//   a: 11,
//   b: true,
//   c: [],
//   d: "asd",
//   e: 22,
// };

// Object.prototype.newProp = 1;// this wont be shown in console, because rest cantain only object's properties, not object's prototype.

// // const { a, b, ...rest } = myObject;
// // console.log(a, b, rest); // 11 – true – {c: [], d: "asd", e: 22}

// const { e, d, ...rest } = myObject; // here order doest matter, but rest operator should be the last one
// console.log(e, d, rest); // 22 – "asd" – {a: 11, b: true, c: []}

/**
 * EXAMPLE 7
 *
 * Destructuring non-exicting properties
 *
 */

// const myObject = {
//   a: 11,
//   b: true,
// };

// const { a, b, c } = myObject;
// console.log(a, b, c); // 11 true undefined

/**
 * EXAMPLE 8
 *
 * Default values
 *
 */

// const myObject = {
//   a: 11,
//   b: true,
// };

// const { a, b = "default value", c = "default value" } = myObject;
// console.log(a, b, c); // 11 true "default value"

/**
 * EXAMPLE 9
 *
 * Default values and new variable names
 *
 */

// const myObject = {
//   a: 11,
//   b: true,
// };

// const { a: newA, b: newB, c: newC = "default value" } = myObject;

// console.log(newA, newB, newC); // 11 true "default value"

/**
 * EXAMPLE 10
 *
 * Nested object destructuring
 *
 */

// const myObject = {
//   a: 1,
//   b: 2,
//   nestedObject: {
//     c: 22,
//     d: 4,
//   },
// };

// const { a: a, b: b, nestedObject: nestedObject } = myObject;
// const { c, d } = nestedObject; // destructuring nested object
//console.log(a, b, nestedObject); // 1 – 2 – {c: 22, d: 4}

// combining two string above in one

// const {
//   a: a,
//   b: b,
//   nestedObject: { c: c, d: newD, e: newE = "default value" },
// } = myObject;

// console.log(a, b, c, newD, newE); // 1 – 2 – 22 – 4 - "default value"
