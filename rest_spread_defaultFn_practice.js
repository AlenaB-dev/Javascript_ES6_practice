/**
 * EXAMPLE 1
 *
 * REST
 *
 * Rest in arrow function
 */

// const sumNumbers = (a, ...nums) => {
//   console.log(a); // 1
//   console.log(nums); // [2, 3, 4] (4)

// };

// sumNumbers(1, 2, 3, 4);

// const sumNumbers = (...nums) => {
//   console.log(nums); // ["asd", 1, 2, 3, 4] (5)
//   // console.log(arguments); // ReferenceError: Can't find variable: arguments
//   return nums
//     .filter((num) => typeof num === "number") // проверка на число
//     .reduce((sum, num) => sum + num, 0);
// };

// console.log(sumNumbers("asd", 1, 2, 3, 4)); // 10

/**
 * EXAMPLE 2
 *
 * REST
 *
 * Rest in regular function
 */

// function sumNumbers1(...nums) {
//   console.log(nums); // ["asd", 1, 2, 3, 4] (5)
//   console.log(arguments); // Arguments {0: "asd", 1: 1, 2: 2, 3: 3, 4: 4, length: 5}
//   return nums
//     .filter((num) => typeof num === "number")
//     .reduce((sum, num) => sum + num, 0);
// }
// console.log(sumNumbers1("asd", 1, 2, 3, 4)); // 10

// // Arguments variable

// function sumNumbers2(...num) {
//   console.log(arguments); // Arguments {0: "asd", 1: 1, 2: 2, 3: 3, 4: 4, length: 5}
//   return Array.from(arguments) // исп.этот метод чтобы преобразовать объект в массив и далее применить к нему методы массива.
//     .filter((num) => typeof num === "number")
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumNumbers2("asd", 1, 2, 3, 4)); // 10
