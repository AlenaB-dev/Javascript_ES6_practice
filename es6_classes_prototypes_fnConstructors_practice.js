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

// function Airplane(props) {
//   this.wingspan = props.wingspan;
//   this.maxRangeOfFlight = props.maxRangeOfFlight;
// }

// // new method of Airplane Object
// Airplane.prototype.airplaneInfo = function () {
//   console.log(
//     `Wingspan of the airplane is ${this.wingspan} and maximal range of flight is ${this.maxRangeOfFlight}`
//   );
// };

// function CivilPlane(props) {
//   Airplane.call(this, props); // добавили новый метод и его вызов, для передачи новых параметров
//   this.numberOfSeats = props.numberOfSeats;
// }

// // присвоели объекту Airplane свойства объекта CivilPlane
// CivilPlane.prototype = Object.create(Airplane.prototype);
// console.log(CivilPlane.prototype.__proto__ === Airplane.prototype); // true

// // with this line we correctly inserted Airplane.prototype in prototype chain.
// CivilPlane.prototype.constructor = CivilPlane;
// console.log(CivilPlane.prototype.constructor === CivilPlane); // true

// CivilPlane.prototype.seatsInfo = function () {
//   console.log(`Number od seats in the plane is ${this.numberOfSeats}`);
// };

// // new method modifying property os specofic instance (number of seats)
// CivilPlane.prototype.modifySeatsNumber = function (newSearsQty) {
//   this.numberOfSeats = newSearsQty;
// };

// const propsForSmallPlane = {
//   numberOfSeats: 4,
//   wingspan: 20,
//   maxRangeOfFlight: 1000,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propsForLargePlane = {
//   numberOfSeats: 230,
//   wingspan: 60,
//   maxRangeOfFlight: 4000,
// };

// const largePlane = new CivilPlane(propsForLargePlane);

/**
 *
 * EXAMPLE 7
 *
 * Classess. Part 1
 *
 * Class declaration and instance of the class
 *
 */

// class MyClass {}

// const firstInctance = new MyClass();

// console.log(firstInctance); // MyClass {}

// console.log(firstInctance.__proto__ === MyClass.prototype); // true
// console.log(MyClass.prototype.constructor === MyClass); // true

// console.log(MyClass.prototype.__proto__ === Object.prototype); // true

/**
 *
 * EXAMPLE 8
 *
 * Classess. Part 1
 *
 * Hoisting (not hoisted)
 *
 * Class can be accessed only after its declaration in the code
 *
 */
// const firstInctance = new MyClass(); // Uncaught ReferenceError: Cannot access 'MyClass' before initialization

// class MyClass {}

/**
 *
 * EXAMPLE 9
 *
 * Classess. Part 1
 *
 * Class Expression.
 *
 */

// const MyClass = class {};

// const firstInctance = new MyClass();

// console.log(firstInctance); // MyClass {}

// console.log(firstInctance.__proto__ === MyClass.prototype); // true

/**
 *
 * EXAMPLE 10
 *
 * Classess. Part 1
 *
 * Constructor method in the class
 *
 */

// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type;
//     this.color = props.color;
//     this.interface = props.interface;
//   }
// }

// const propsForWirelessMouse = {
//   type: "Wireless",
//   color: "black",
//   interface: "Blootooth",
// };

// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// console.log(wirelessMouse); // ComputerMouse {type: 'Wireless', color: 'black', interface: 'Blootooth'}

/**
 *
 * EXAMPLE 11
 *
 * Classess. Part 1
 *
 * Class is not object literal and its method are not shorthand methods names.
 *
 */

// // incorrect syntax
// class ComputerMouse {
//     title: "My Title", // Unexpected identifier 'title'
//   constructor: function(props) { // Unexpected identifier 'constructor'
//     this.type = props.type;
//     this.color = props.color;
//     this.interface = props.interface;
//   }
// }

// // correct syntax
// class ComputerMouse {
//     constructor() {}
//     method1() {}
//     method2(props) {}
// }

/**
 *
 * EXAMPLE 12
 *
 * Classess. Part 2
 *
 * Default values for propeties
 *
 */

// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type || "Computer"; // default value will be return even if value is "falsy"
//     this.color = props.color;
//     this.interface =
//       props.interface !== undefined ? props.interface : "Not specified"; // another option to set default value
//   }
// }
// // Never assign "undefined" as a value for any variable. If variable should not have any value use "null" instead.
// // Value "undefined" should be reserved for cases when variable doesn't exist.

// const propsForWirelessMouse = {
//   type: "Wireless",
//   color: "black",
//   interface: "Blootooth",
// };

// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// const propsForGenericMouse = {
//   color: "red",
//   type: "",
//   interface: "",
// };

// const genericMouse = new ComputerMouse(propsForGenericMouse);
// console.log(genericMouse); // ComputerMouse {type: 'Computer', color: 'red', interface: ''}

/**
 *
 * EXAMPLE 13
 *
 * Classess. Part 2
 *
 * Class methods
 *
 */

// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type;
//     this.color = props.color;
//     this.interface = props.interface;
//   }
//   // adding methods
//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type} and color is ${this.color}`);
//   }

//   // , // COMMA is not allowed - Uncaught SyntaxError: Unexpected token ','

//   changeMouseType(newType) {
//     this.type = newType;
//   }
// }

// const propsForWirelessMouse = {
//   type: "Wireless",
//   color: "black",
//   interface: "Blootooth",
// };

// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// console.log(wirelessMouse);

// wirelessMouse.mouseInfo(); // Type of the mouse is Wireless and color is black

// wirelessMouse.changeMouseType("USB");
// console.log(wirelessMouse); // ComputerMouse {type: 'USB', color: 'black', interface: 'Blootooth'}
// wirelessMouse.mouseInfo(); // Type of the mouse is USB and color is black

/**
 *
 * EXAMPLE 14
 *
 * Classess. Part 2
 *
 * Class extensions (add new class to the prototype chaine)
 *
 */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }
// }

// // class ComputerMouse extends ComputerAccessories {} // constructor of the ComputerAccessories will be called automatically

// // default behaviour if constructor is not specified (shown what happens under the hood)
// class ComputerMouse extends ComputerAccessories {
//   constructor(...allProps) { // rest operator
//     super(...allProps); // spread operator
//   }
// }

// const myMouse = new ComputerMouse({ compatibility: ["Mac"] });

// console.log(myMouse);

/**
 *
 * EXAMPLE 15
 *
 * Classess. Part 2
 *
 * Set properties in different classes
 *
 */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }
// }

// super() must be present in the constructor

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) { // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new ComputerMouse
//     this.type = props.type;
//   }
// }

// // super() is called whtout arguments
// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(); // Uncaught TypeError: Cannot read properties of undefined (reading 'compatibility')
//     this.type = props.type;
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props); // ComputerMouse {compatibility: Array(1), type: 'Optical'}
//     this.type = props.type;
//   }
// }

// const myMouse = new ComputerMouse({ compatibility: ["Mac"], type: "Optical" });

// console.log(myMouse);

/**
 *
 * EXAMPLE 16
 *
 * Classess. Part 3
 *
 * Adding methoods to different classes (parent and child)
 *
 */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }
//   // parent's method
//   compatibilityInfo() {
//     this.compatibility.forEach((element) => {
//       console.log(`Accessory is compatible with ${element}`);
//     });
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props);
//     this.type = props.type;
//   }
//   // child's method
//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({
//   compatibility: ["Mac", "Tablet"],
//   type: "Optical",
// });

// console.log(myMouse);

// myMouse.compatibilityInfo(); // Accessory is compatible with Mac // Accessory is compatible with Tablet

// myMouse.mouseInfo(); // Type of the mouse is Optical

/**
 *
 * EXAMPLE 17
 *
 * Classess. Part 3
 *
 * Analizing structure. typeof and insctanceof in classess.
 *
 */

// class ComputerAccessories {
//   constructor(props) {
//     this.compatibility = props.compatibility || ["PC", "Mac"];
//   }
//   // parent's method
//   compatibilityInfo() {
//     this.compatibility.forEach((element) => {
//       console.log(`Accessory is compatible with ${element}`);
//     });
//   }
// }

// class ComputerMouse extends ComputerAccessories {
//   constructor(props) {
//     super(props);
//     this.type = props.type;
//   }
//   // child's method
//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({
//   compatibility: ["Mac", "Tablet"],
//   type: "Optical",
// });

// console.log(typeof ComputerMouse); // function
// console.log(myMouse instanceof ComputerMouse); // true
// console.log(myMouse instanceof ComputerAccessories); // true
// console.log(myMouse instanceof Object); // true
// console.log(typeof ComputerMouse.prototype); // object
// console.log(typeof ComputerMouse.prototype.constructor); // function
// console.log(ComputerMouse.prototype.constructor === ComputerMouse); // true

/**
 *
 * EXAMPLE 18
 *
 * Classess. Part 3
 *
 * Static methods
 *
 */

// class ComputerMouse {
//   constructor(props) {
//     this.type = props.type;
//   }

//   static ownClassMethods() {
//     console.log(`This class sets props for the Mouse`);
//   }

//   mouseInfo() {
//     console.log(`Type of the mouse is ${this.type}`);
//   }
// }

// const myMouse = new ComputerMouse({ type: "Gaming" });

// console.log(myMouse); // ComputerMouse {type: 'Gaming'}

// myMouse.mouseInfo(); // Type of the mouse is Gaming

// // myMouse.ownClassMethods(); // Uncaught TypeError: myMouse.ownClassMethods is not a function

// ComputerMouse.ownClassMethods(); // This class sets props for the Mouse
