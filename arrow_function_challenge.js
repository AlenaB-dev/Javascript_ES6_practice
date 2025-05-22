/**
 * CHALLENGE 2-1 TASK
 *
 * Create a button with "Click me" text on it.
 *
 * If you click on the button following actions
 * should be performed:
 * 1. Title of the button will be changed to following:
 * "Button was clicked <NUMBER> times"
 * 2. Log to the console message "Button was clicked"
 *
 * Use either "addEventListener" or "onclick" functions.
 * Try to use regular function and arrow function as a
 * callback function for functions above.
 *
 * Observe difference in behaviour and try to explain
 * this difference.
 */

// // создали кнопку с помощью JS и реализовали задачу с помощью onclick
// const createButton = () => {
//   const btn = document.createElement("button");
//   let clicks = 0;

//   btn.innerHTML = "Click me";
//   //   btn.onclick = function () {
//   //     console.log("Button was clicked");
//   //     btn.innerHTML = "Button was clicked " + ++clicks + " times";
//   //   };

//   //реализация с помощью addEventListener and this
//   btn.addEventListener("click", function () {
//     console.log("Button was clicked");
//     console.log(this);
//     this.innerHTML = "Button was clicked " + ++clicks + " times";
//   });
//   document.body.appendChild(btn);
// };

// //   // using arrow function
// //   btn.addEventListener("click", () => {
// //     console.log("Button was clicked");
// //     btn.innerHTML = "Button was clicked " + ++clicks + " times";
// //   });
// //   document.body.appendChild(btn);
// // };

// createButton();

// реализация при создании нескольких кнопок. У каждой кнопки будет свой счетчик.
const createButton = (title) => {
  const btn = document.createElement("button");
  let clicks = 0;

  btn.innerHTML = title;
  btn.addEventListener("click", function () {
    console.log("Button was clicked");
    console.log(this);
    this.innerHTML = "Button was clicked " + ++clicks + " times";
  });
  document.body.appendChild(btn);
};
createButton("Click");
createButton("Another click");
createButton("One more click button");
