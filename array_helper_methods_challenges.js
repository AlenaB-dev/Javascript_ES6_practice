console.log("_____________________for loop");

/* Create a function called "arrayInfo" that will return string like 
"London is located at the index 0 in the myCities array" */

/* Iterate over the "myCities" array, call "arrayInfo" function for each of the elements and print result of the call to the console */

const myCities = ["London", "New York", "Singapore"];

const arrayInfo = (element, index) =>
  element + " is located at the index " + index + " myCities array";

// Option 1: "for"
for (let i = 0; i < myCities.length; i++) {
  console.log(arrayInfo(myCities[i], i));
}
// London is located at the index 0 myCities array
// New York is located at the index 1 myCities array
// Singapore is located at the index 2 myCities array
console.log("_____________________forEach()");
// Option 2: "forEach"
const myCities1 = ["London", "New York", "Roma"];

myCities1.forEach((city, index) => console.log(arrayInfo(city, index)));
// London is located at the index 0 myCities array
// New York is located at the index 1 myCities array
// Roma is located at the index 2 myCities array

console.log("_____________________");
