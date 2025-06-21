/**
 * CHALLENGE 1
 *
 * Insert new prototype "Vehicle.prototype" to the existing prototype chain
 *
 * CURRENT CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Object.protoype
 *
 * UPDATED CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Vehicle.prototype > Object.protoype
 *
 * Vehicle.prototype should set two additional
 * properties:
 * 1. maxSpeed
 * 2. weight
 *
 * It should also contain method "vehicleInfo"
 * available for any object down the prototype chain
 */

// function Vehicle(props) {
//   this.maxSpeed = props.maxSpeed;
//   this.weight = props.weight;
// }

// Vehicle.prototype.vehicleInfo = function () {
//   console.log(
//     `Max speed of the vehicle is ${this.maxSpeed} and weight is ${this.weight}`
//   );
// };

// function Airplane(props) {
//   Vehicle.call(this, props);
//   this.wingspan = props.wingspan;
//   this.maxRangeOfFlight = props.maxRangeOfFlight;
// }

// Airplane.prototype = Object.create(Vehicle.prototype);
// Airplane.prototype.constructor = Airplane;

// Airplane.prototype.airplaneInfo = function () {
//   console.log(
//     `Wingspan of the airplane is ${this.wingspan} and maximal range of flight is ${this.maxRangeOfFlight}`
//   );
// };

// function CivilPlane(props) {
//   Airplane.call(this, props);
//   this.numberOfSeats = props.numberOfSeats;
// }

// CivilPlane.prototype = Object.create(Airplane.prototype);

// CivilPlane.prototype.constructor = CivilPlane;

// CivilPlane.prototype.seatsInfo = function () {
//   console.log(this); // instance of the prototype
//   console.log(`Number of seats in the plane is ${this.numberOfSeats}`);
// };

// CivilPlane.prototype.modifySeatsNumber = function (newSeatsQty) {
//   this.numberOfSeats = newSeatsQty;
// };

// const propsForSmallPlane = {
//   numberOfSeats: 4,
//   wingspan: 20,
//   maxRangeOfFlight: 1000,
//   maxSpeed: 800,
//   weight: 15,
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);

// const propsForLargePlane = {
//   numberOfSeats: 250,
//   wingspan: 60,
//   maxRangeOfFlight: 3500,
//   maxSpeed: 900,
//   weight: 40,
// };

// const largePlane = new CivilPlane(propsForLargePlane);

// /**
//  * VERIFICATION
//  */
// smallPlane.vehicleInfo(); // Max speed of the vehicle is 800 and weight is 15

// largePlane.vehicleInfo(); // Max speed of the vehicle is 900 and weight is 40

/**
 * CHALLENGE 2
 *
 * Fix all mistakes in the code below
 */

// function Product(props) {
//   this.price = props.price;
// }

// Product.prototype.priceInfo = function () {
//   console.log(`Price of the product is ${this.price}`);
// };

// function ElectricDevice(props) {
//   Product.call(this, props);
//   this.energyEfficiencyClass = props.energyEfficiencyClass;
// }

// ElectricDevice.prototype = Object.create(Product.prototype);
// ElectricDevice.prototype.constructor = ElectricDevice;

// ElectricDevice.prototype.energyInfo = function () {
//   console.log(`Energy Efficiency Class is ${this.energyEfficiencyClass}`);
// };

// function TV(props) {
//   ElectricDevice.call(this, props);
//   this.model = props.model;
//   this.diagonal = props.diagonal;
// }

// TV.prototype = Object.create(ElectricDevice.prototype);
// TV.prototype.constructor = TV;

// const propsForMyTv = {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42,
// };

// const myTV = new TV(propsForMyTv);

// /**
//  * VERIFICATION
//  */
// console.log(myTV);
// /* {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42,
//   __proto__: ...
// } */

// myTV.energyInfo(); // "Energy Efficiency Class is A+"

// myTV.priceInfo(); // Price of the product is 1200

// myTV instanceof TV; // true
// myTV instanceof ElectricDevice; // true
// myTV instanceof Product; // true
// myTV instanceof Object; // true

/**
 * CHALLENGE 3
 *
 * Convert function constructors to classes
 *
 */

// // class Product {
// //   constructor(props) {
// //     this.price = props.price;
// //   }

// //   priceInfo() {
// //     console.log(`Price of the product is ${this.price}`);
// //   }
// // }

// // if class has only one property, we can do distructuring

// class Product {
//   constructor({ price }) {
//     this.price = price;
//   }

//   priceInfo() {
//     console.log(`Price of the product is ${this.price}`);
//   }
// }

// class ElectricDevice extends Product {
//   // one more example with distructuring

//   //   constructor(price, energyEfficiencyClass) {
//   //     super(price);
//   //     this.energyEfficiencyClass = energyEfficiencyClass;
//   //   }

//   constructor(props) {
//     super(props);
//     this.energyEfficiencyClass = this.energyEfficiencyClass;
//   }

//   energyInfo() {
//     console.log(`Energy Efficiency Class is ${this.energyEfficiencyClass}`);
//   }
// }

// class TV extends ElectricDevice {
//   constructor(props) {
//     super(props);
//     this.model = props.model;
//     this.diagonal = props.diagonal;
//   }
// }

// const myTV = new TV({
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42,
// });

// /**
//  * VERIFICATION
//  */
// console.log(myTV);
// /* {
//   model: "A1620",
//   price: 1200,
//   energyEfficiencyClass: "A+",
//   diagonal: 42,
//   __proto__: ...
// } */

// myTV.energyInfo(); // "Energy Efficiency Class is A+"

// myTV.priceInfo(); // Price of the product is 1200

// myTV instanceof TV; // true
// myTV instanceof ElectricDevice; // true
// myTV instanceof Product; // true
// myTV instanceof Object; // true

/**
 *
 * CHALLENGE 4
 *
 * Extend Array
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

// class ExtendedArray extends Array {
//   sum() {
//     return this.reduce((sum, el) => sum + el);
//   }

//   onlyNumbers() {
//     return this.filter((el) => typeof el === "number");
//   }
// }

// const myArray1 = new ExtendedArray(1, 2, 3);

// console.log(myArray1.sum()); // 6
// console.log(myArray1.onlyNumbers()); // ExtendedArray(3) [1, 2, 3]

// myArray1.customPush("asd");

// console.log(myArray1); // ExtendedArray(4) [1, 2, 3, 'asd']

// const myArray2 = new ExtendedArray(true, null, 12);
// console.log(myArray2.onlyNumbers()); // ExtendedArray [12]
// console.log(myArray2.sum()); // 13

// const filteredArray = myArray2.onlyNumbers();
// console.log(filteredArray); // [12] - still instanceof ExtentedArray

/**
 *
 * CHALLENGE 5
 *
 * Custom Push Method for Arrays
 *
 * Create new class "CustomArray" that should extend built-in "Array".
 *
 * Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * It should perform following actions:
 * 1. Add new element to the existing array
 * (don't use "customPush" method for this)
 * 2. Modify "length" property of the array (increment it)
 * 3. Log following line to the console:
 * "New element <ELEMENT> was just added to the array"
 *
 * Create instance of the new "CustomArray" class and test new method "customPush" and compare it with "customPush"
 *
 * What will happen if name of the custom method in the "CustomArray" class will be also "customPush" instead of "customPush"?
 * Try this.
 */

// class CustomArray extends Array {
//   customPush(newElement) {
//     this[this.length] = newElement; // length property is updated automatically

//     console.log(`New element ${newElement} was just added to the array`);
//   }
// }

// const existingArray = new CustomArray();

// existingArray.customPush(1); // New element 1 was just added to the array
// console.log(existingArray); // CustomArray [1]

// existingArray.customPush(2); // New element 2 was just added to the array
// console.log(existingArray); // CustomArray(2) [1, 2]

/**
 *
 * CHALLENGE 6
 *
 * Classes in React. Additional button
 *
 * Add one more button with color "secondary".
 * Also change styles of the existing and new buttons
 * using property "variant".
 *
 * You can use one of the following values:
 * "text", "flat", "outlined", "contained", "raised", "fab", "extendedFab"
//  */
// class MyButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { clickedQty: 0 };
//   }

//   render() {
//     return React.createElement(
//       window["material-ui"].Button,
//       {
//         variant: this.props.variant,
//         color: this.props.color,
//         onClick: () =>
//           this.setState({
//             clickedQty: ++this.state.clickedQty,
//           }),
//       },
//       this.state.clickedQty > 0
//         ? `Button was clicked ${this.state.clickedQty} times`
//         : "Click me!!!"
//     );
//   }
// }
// // button 1
// const button1 = React.createElement(MyButton, {
//   color: "primary",
//   variant: "outlined",
// });

// const buttonContainer1 = document.getElementById("button1");

// ReactDOM.render(button1, buttonContainer1);

// // button 2
// const button2 = React.createElement(MyButton, {
//   color: "secondary",
//   variant: "extendedFab",
// });

// const buttonContainer2 = document.getElementById("button2");

// ReactDOM.render(button2, buttonContainer2);

/**
 * html file for challenge 6
 * <body>
    <h2>Classes in React</h2>

    <div id="button1"></div>
    <br />
    <br />
    <div id="button2"></div>

    <script src="src/react.development.js"></script>
    <script src="src/react-dom.development.js"></script>

    <script src="src/material-ui.production.min.js"></script>

    <script src="index.js"></script>
  </body>
 */
