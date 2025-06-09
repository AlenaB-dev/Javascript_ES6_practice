/*
* CHALLENGE 1
* 
* REST and SPREAD OPERATORS
*
Create a function "meanScore" that will accept any quantity of the arguments, gather them into single array and return mean value of all arguments rounded to 2 decimal places.

If at least one element in the gathered array is not a number - throw following error to the console: 
"Supplied arguments must contain only numbers!"

Type of the returned value must be a "number".

HINT: In this Challenge you should use both rest and spread operators.
*/

// const scores1 = [0, 1.5, 2.5, 3.7];
// const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
// const scores3 = [1.3, 2.5, 1.9];
// const scores4 = ["abc", 1.3, true, 2.5, 1.9];

// const meanScore = (...scores) => {
//   if (scores.every((score) => typeof score === "number")) {
//     // проверка на число
//     // calc mean value
//     return parseFloat(
//       // parseFloat - тк ниже исп.метод toFixed который возвращает значение в формате строки, а нам нужно число. Поэтому, в начале указываем parse и Float тк нам нужны два значения числа после точки.
//       scores // вычисляем среднее значение
//         .reduce((avg, score) => {
//           return avg + score / scores.length;
//         }, 0)
//         .toFixed(2) // указываем что результат должен содержать 2 значения после точки.
//     );
//   } else {
//     throw new Error("Supplied arguments must contain only numbers!");
//   }
// };

// console.log(meanScore(...scores1)); // 1.93

// console.log(meanScore(...scores1, ...scores2)); // 2.8

// console.log(meanScore(...scores1, ...scores2, ...scores3)); // 2.59

// console.log(meanScore(...scores4)); // Error: Supplied arguments must contain only numbers!

/**
 * CHALLENGE 2
 *
 * DEFAULT FUNCTION PARAMETERS
 *
 */

// /* Create a function "weatherForecast" with two parameters "city" and "weather".

// If second argument is absent, "weather" parameter should get value "Great weather!".

// 1. First solve this WITHOUT default function parameter.
// 2. Comment previous solution and solve same task WITH default function parameter.

// NOTE: Carefully compare your results with test calls results
// */

// // // 1. First solve this WITHOUT default function parameter.
// // const weatherForecast = (city, weather) => {
// //   weather = weather !== undefined ? weather : "Great weather!";
// //   return `Weather forecast for ${city}: ${weather}`;
// // };

// // 2. Comment previous solution and solve same task WITH default function parameter.

// const weatherForecast = (city, weather = "Great weather!") =>
//   `Weather forecast for ${city}: ${weather}`;

// console.log(weatherForecast("Dubai", "Sunny"));
// // Weather forecast for Dubai: Sunny

// console.log(weatherForecast("London", "Light rain"));
// // Weather forecast for London: Light rain

// console.log(weatherForecast("Paris"));
// // Weather forecast for Paris: Great weather!

// console.log(weatherForecast("Miami", ""));
// // Weather forecast for Miami:

// console.log(weatherForecast("Las Vegas", undefined));
// // Weather forecast for Las Vegas: Great weather!
