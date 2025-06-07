/**
 * CHALLENGE 1
 *
 * Template literals
 */

// /* Create a function "templateLiteral" with one parameter "num".

// Function is expected to return template literal. Sample function calls are below.
// */

// const templateLiteral = (num) => `Number is ${num}.
// This number is ${num >= 10 ? "greater" : "less"} than 10.
// Squre root of this number is ${Math.sqrt(num)}`;

// // TEST 1
// const myNumber = 9;
// console.log(templateLiteral(myNumber));
// /*
// Number is 9.
// This number is less than 10.
// Square root of this number is 3.
// */

// // TEST 2
// const myAnotherNumber = 25;
// console.log(templateLiteral(myAnotherNumber));
// /*
// Number is 25.
// This number is greater than 10.
// Square root of this number is 5.
// */

/**
 * CHALLENGE 2
 *
 *
 */

/* Create a function "taggedTemplate" that will return a regular string (not template literal).

Use appropriate method of the function definition and needed amount of arguments.

Use all knowledge gained in the previous sections.

IMPORTANT: Input template literal may have *ANY* quantity of the expressions. 

NOTE: If you are stuck - hints down below!
*/

// // solution 1
// function taggedTemplate(strings, ...values) {
//   return strings
//     .map((str, i) => {
//       return str + (values[i] ? `${values[i]}` : "");
//     })
//     .join("");
// }

// // solution 2
// function taggedTemplate(arrayOfStrings) {
//   const vals = Array.from(arguments).slice(1);
//   return arrayOfStrings.reduce(
//     (concatStr, str, index) =>
//       concatStr + str + (vals[index] !== undefined ? vals[index] : ""),
//     ""
//   );
// }

// // FIRST test case
// const a = 10;
// const b = 5;
// const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${
//   a + b
// }`;

// console.log(sum);
// /* Sum of the two variables a(10) and b(5) is 15 */

// // SECOND test case
// const girl = "Alice";
// const boy = "Bob";
// const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;

// console.log(friendsInfo);
// /* Alice and Bob are friends! */

// /* HINTS
// 1. Use regular function declaration instead of anonymous arrow function expression assigned to the variable.
// In such way you will get access to the "arguments" inside of the function

// 2. First argument in the function is array of strings

// 3. Other arguments are results of all expressions from the template literal.

// 4. Use "Array.from(arguments)" + "slice" array helper method to create an expressions values array.
// In the first test case this array needs to be [10, 5, 15]

// 5. Use "reduce" array helper method in order to construct resulting string that will be returned at the end of the function.

// 6. In the callback function for "reduce" helper method you need to concatenate pairs (string, expression value).
// First pair in the first test case will be ("Sum of the two variables a(", "10").
// */
