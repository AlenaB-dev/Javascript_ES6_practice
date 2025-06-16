/**
 * EXAMPLE 1
 *
 * Function constructors
 *
 * Each function in JS (not arrow function) has .prototype property and can be used as a constructor function.
 *
 */

// // имя фукнции начинается с загланой буквы in order указать на то, что будет function constructor
// // Ptotoype chain here: CivilPlane.prototype -> Object.prototype -> null

// // regular function
// // function CivilPlane() {}

// // anonymous function expression assigned to the variable
// const CivilPlane = function () {};

// // верификация на то что это действительно конструктор.
// console.log(CivilPlane.prototype); // constructor : ƒ CivilPlane() [[Prototype]]: Object
// console.log(CivilPlane.prototype.constructor === CivilPlane); // true
// console.log(CivilPlane.prototype.__proto__ === Object.prototype); // true
// console.log(CivilPlane.prototype.__proto__.__proto__ === null); // true

/**
 * EXAMPLE 2
 *
 * Create new instance of the prototype using "new" syntax:
 * 1. Function constructor is called.
 * 2. New object {} is created.
 * 3. __proto__ is added.
 * 4. New props are added (optional).
 * 5. Object is returned by constructor function.
 *
 */

function CivilPlane(props) {
  console.log(this); // CivilPlane {}
  console.log(this.__proto__); // {}
  this.numberOfSeats = props.numberOfSeats;
  console.log(this); // CivilPlane {numberOfSeats: 4}
}

const propsForSmallPlane = {
  numberOfSeats: 4,
};

const smallPlane = new CivilPlane(propsForSmallPlane);
console.log(smallPlane); // CivilPlane {numberOfSeats: 4}

console.log(smallPlane.__proto__ === CivilPlane.prototype); // true
