/**
 * if in the loop will be make some mistake, such as:
 * let i = 1;
 * i > myArray.length;
 * i; - will create infinite loop
 * and we will get errors in results
 */
// don't use for loop
const myArray = [1, true, "asd"];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); // 1, true, asd
}

// forEach() will be correct choice in this situation
const myArray1 = [1, true, "asd"];

myArray1.forEach((elemet) => console.log(elemet)); // 1, true, asd
