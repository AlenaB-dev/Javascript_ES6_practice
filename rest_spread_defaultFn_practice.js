/**
 *
 * REST
 *
 * EXAMPLE 1
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

/**
 * SPREAD
 *
 * EXAMPLE 1.
 *
 * Function call.
 *
 */

// const myGreeting = (name, city, age) => {
//   return `Hello from ${name} who is ${age} old and lives in ${city}`;
// };

// const myPerson = ["Alice", "Boston", 21];
// console.log(myGreeting(...myPerson)); // Hello from Alice who is 21 old and lives in Boston

// const anotherPerson = ["New York", 24];
// console.log(myGreeting("Bob", ...anotherPerson)); // Hello from Bob who is 24 old and lives in New York

// /**
//  *
//  * EXAMPLE 2.
//  *
//  * Concatenate arrays.
//  *
//  */
// const a = [1, 2, 3];
// const b = [4, 5];

// // option with concat()
// const c = a.concat(b).concat(6);
// console.log(c); // [1, 2, 3, 4, 5, 6] (6)
// console.log(a); // [1, 2, 3] (3) - original array remains unchanged
// console.log(b); // [4, 5] (2) - original array remains unchanged

// // option with spread (more easier abd preferable)
// const d = [...a, ...b, 6];
// console.log(d); // [1, 2, 3, 4, 5, 6] (6)

// /**
//  *
//  * EXAMPLE 3.
//  *
//  * Create date.
//  *
//  */

// const dateInfo = [2025, 5, 10];

// const date = new Date(...dateInfo);
// console.log(date); // Tue Jun 10 2025 - june is six months, but numeration here starts from 0. So 0 will be first months of the year - January.

// /**
//  *
//  * EXAMPLE 4.
//  *
//  * Copy array.
//  *
//  */

// const myArray = ["a", 4, true, [], 12];

// const myNewArray = [...myArray];
// myNewArray.push("hey"); // added element only on the second array, first array is not mutated.
// myNewArray[3].push(15); // on this line we mutated both arrays.

// console.log(myNewArray); // ["a", 4, true, [15], 12, "hey"] (6)
// console.log(myArray); // ["a", 4, true, [15], 12] (5)

// /**
//  * EXAMPLE 5.
//  *
//  * Copy object.
//  *
//  */

// const myObject = { a: 10, b: "c", d: [1, 2] };
// const copyOfObject = { ...myObject };
// copyOfObject.a = 20; // mutated second object, first object remains the same.
// copyOfObject.d.pop(); // mutated arrays in both objects, because variable d has a value of reference type(ссылка, pointer)
// console.log(copyOfObject); // {a: 20, b: "c", d: [1]}
// console.log(myObject); // {a: 10, b: "c", d: [1]}

// /**
//  *
//  * EXAMPLE 6.
//  *
//  * Spread string.
//  *
//  */

// const myStr = "Hey there";

// const letters = [...myStr];
// console.log(letters); // ["H", "e", "y", " ", "t", "h", "e", "r", "e"] (9)

// // before ES6
// const oldStyleLeterrs = myStr.split("");
// console.log(oldStyleLeterrs); // ["H", "e", "y", " ", "t", "h", "e", "r", "e"] (9)

// const splitStringOnWords = myStr.split(" "); // просто добавили пробел меджу кавычек
// console.log(splitStringOnWords); // ["Hey", "there"] (2) - этого результата невозможно достичь с помощью оператора spread.
