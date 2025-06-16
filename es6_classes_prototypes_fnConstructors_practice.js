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
 */

function CivilPlane(props) {
  this.numberOfSeats = props.numberOfSeats;
}

const propsForSmallPlane = {
  numberOfSeats: 4,
};

const smallPlane = new CivilPlane(propsForSmallPlane);
console.log(smallPlane); // CivilPlane {numberOfSeats: 4}

console.log(smallPlane.__proto__ === CivilPlane.prototype); // true
