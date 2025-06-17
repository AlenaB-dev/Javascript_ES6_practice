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

// function CivilPlane(props) {
//   console.log(this); // CivilPlane {}
//   console.log(this.__proto__); // {}
//   this.numberOfSeats = props.numberOfSeats;
//   console.log(this); // CivilPlane {numberOfSeats: 4}
// }

// const propsForSmallPlane = {
//   numberOfSeats: 4,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);
// console.log(smallPlane); // CivilPlane {numberOfSeats: 4}

// console.log(smallPlane.__proto__ === CivilPlane.prototype); // true

/**
 * EXAMPLE 3
 *
 * Don't do this.
 * Method "seatsInfo" will be added to every inctsnce of the prototype
 *
 */

// function CivilPlane(props) {
//   this.numberOfSeats = props.numberOfSeats;
//   this.seatsInfo = function () {
//     console.log(`Number od seats in the plane is ${this.numberOfSeats}`);
//   };
// }

// const propsForSmallPlane = {
//   numberOfSeats: 4,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propsForLargePlane = {
//   numberOfSeats: 230,
// };

// const largePlane = new CivilPlane(propsForLargePlane);

/**
 * EXAMPLE 4
 *
 * Correct.
 * Method is adde to the prototype. And other instances inherite this method.
 */

// function CivilPlane(props) {
//   this.numberOfSeats = props.numberOfSeats;
// }

// CivilPlane.prototype.seatsInfo = function () {
//   console.log(`Number od seats in the plane is ${this.numberOfSeats}`);
// };

// // new method modifying property os specofic instance (number of seats)
// CivilPlane.prototype.modifySeatsNumber = function (newSearsQty) {
//   this.numberOfSeats = newSearsQty;
// };

// const propsForSmallPlane = {
//   numberOfSeats: 4,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propsForLargePlane = {
//   numberOfSeats: 230,
// };

// const largePlane = new CivilPlane(propsForLargePlane);

// smallPlane.seatsInfo(); // Number od seats in the plane is 4
// smallPlane.modifySeatsNumber(12); // modifies property of the small plane
// smallPlane.seatsInfo(); // Number od seats in the plane is 12

/**
 * EXAMPLE 5
 *
 * Object.create()
 *
 */

// const Parent = {
//   type: "Parent",
//   typeInfo: function () {
//     console.log(`Hello from ${this.type}`);
//   },
//   modifyType: function (newType) {
//     this.type = newType;
//   },
// };
// console.log(Parent.type); //  Parent
// Parent.typeInfo(); // Hello from Parent

// console.log(Parent.prototype); // undefined

// const child = Object.create(Parent);

// console.log(child.__proto__ === Parent); // true

// child.type = "Child";
// child.typeInfo(); // Hello from Child

// child.modifyType("Modyfied Child");
// console.log(child.type); // Modyfied Child
// child.typeInfo(); // Hello from Modyfied Child

/**
 * EXAMPLE 6
 *
 * Function constructors
 * Protorype chaine.
 * CivilPlane.prototype -> Airplane.prototype -> Object.prototype
 *
 */
function Airplane(props) {
  this.wingspan = props.wingspan;
  this.maxRangeOfFlight = props.maxRangeOfFlight;
}

// new method of Airplane Object
Airplane.prototype.airplaneInfo = function () {
  console.log(
    `Wingspan of the airplane is ${this.wingspan} and maximal range of flight is ${this.maxRangeOfFlight}`
  );
};

function CivilPlane(props) {
  Airplane.call(this, props); // добавили новый метод и его вызов, для передачи новых параметров
  this.numberOfSeats = props.numberOfSeats;
}

// присвоели объекту Airplane свойства объекта CivilPlane
CivilPlane.prototype = Object.create(Airplane.prototype);
console.log(CivilPlane.prototype.__proto__ === Airplane.prototype); // true

// with this line we correctly inserted Airplane.prototype in prototype chain.
CivilPlane.prototype.constructor = CivilPlane;
console.log(CivilPlane.prototype.constructor === CivilPlane); // true

CivilPlane.prototype.seatsInfo = function () {
  console.log(`Number od seats in the plane is ${this.numberOfSeats}`);
};

// new method modifying property os specofic instance (number of seats)
CivilPlane.prototype.modifySeatsNumber = function (newSearsQty) {
  this.numberOfSeats = newSearsQty;
};

const propsForSmallPlane = {
  numberOfSeats: 4,
  wingspan: 20,
  maxRangeOfFlight: 1000,
};

const smallPlane = new CivilPlane(propsForSmallPlane);

const propsForLargePlane = {
  numberOfSeats: 230,
  wingspan: 60,
  maxRangeOfFlight: 4000,
};

const largePlane = new CivilPlane(propsForLargePlane);
