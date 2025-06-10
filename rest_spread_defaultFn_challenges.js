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

/**
 *
 * CHALLENGE 3.
 *
 */

/*
Create a function "tasksSortedByIds" with two parameters "tasks" and "tasksWithIds".

1. Before performing any actions inside of the function you need to generate unique 4-digit "taskId" for each task where it is missing.

2. At the beginning of the function log to the console quantity of the missing taskIds:
"Quantity of the missing taskIds is 2"

3. Function should return array of tasks sorted by "taskId". All tasks in the sorted array must have "taskId".

NOTE: Original "tasks" array should remain unchanged.

NOTE: Hints down below!

BONUS: Ensure that new unique 4-digit "taskId" is not the same as any "taskId" of the existing tasks.
*/

//
const generateTasksIds = (tasks) => {
  let newTaskIds = []; // создали массив куда будут добавлятся вновь сгенерированные числа
  return tasks.map(({ ...task }) => {
    // { ...task } создали копию массива, чтобы оригинальный массив не изменялся

    if (!task.hasOwnProperty("taskId")) {
      // проверяем если нет у task своего id, то ниже мы его вычисляем
      let newTaskId;
      do {
        newTaskId = Math.floor(1000 + Math.random() * 9000); // вычисляем новое рандомное 4х значное число

        // newTaskId = Math.floor(1 + Math.random() * 9); // поставили диапазон от 0 до 10, чтобы проверить что числа действительно не повторяются
        // console.log(newTaskId); // смотрим, вывод новых id
      } while (
        tasks.find((task) => task.taskId === newTaskId) || // проверряем, чтобы оно было уникальным и //task.taskId = newTaskId; // присвоение нового созданного id - значению task
        newTaskIds.includes(newTaskId) // проверяем есть ли сгенерированное число в массиве
      );

      newTaskIds.push(newTaskId); // добавляем сгенерированное число в массив.
    }

    return task;
  });
};

// (!task.hasOwnProperty("taskId")) - читается как, если у task нет проперти taskId

const tasksSortedByIds = (tasks, tasksWithIds = generateTasksIds(tasks)) => {
  console.log(
    `Quantity of the missing taskIds is ${
      tasks.filter((task) => !task.hasOwnProperty("taskId")).length // определяем есть ли id у task
    }`
  ); // Quantity of the missing taskIds is 2
  return tasksWithIds.sort((a, b) => a.taskId - b.taskId); // сортировка массива по возрастанию
};

// // чтобы проверить работает ли функцию на создание уникального числа, мы сократили id от 0 до 10
// const tasks = [
//   { title: "Meeting with John", taskId: 1 },
//   { title: "Visit gym", taskId: 2 },
//   { title: "Buy new phone" },
//   { title: "Clean the room", taskId: 3 },
//   { title: "Plan a trip" },
// ];

const tasks = [
  { title: "Meeting with John", taskId: 4621 },
  { title: "Visit gym", taskId: 6821 },
  { title: "Buy new phone" },
  { title: "Clean the room", taskId: 2721 },
  { title: "Plan a trip" },
];

console.log("Sorted array of tasks with taskIds:", tasksSortedByIds(tasks));
/* 
Quantity of the missing taskIds is 2
Sorted array of tasks with taskIds: ...
*/

console.log("Original unsorted array of tasks with missing taskIds:", tasks);
/*
Original unsorted array of tasks with missing taskIds: ...
*/

/* HINTS
1. Use default value for the second parameter "tasksWithIds". This default value should be a function call - "generateTasksIds()".

2. "generateTasksIds" function should have one parameter "tasks".

3. Use .map inside of the "generateTasksIds" to create new array of tasks and return this new array as result of the "generateTasksIds" function call. 

4. Inside of the callback function for .map call create first copy of the object ("task") to avoid mutation of the "tasks" array.

5. Generate new "taskId" using following syntax
Math.floor(1000 + Math.random() * 9000)

6. BONUS (Ensure that newly generated "taskId" doesn't match "taskId" of any of the existing tasks.
Use "do-while" loop and generate new "taskId" until it will be absent in other tasks. 
*/
