// Primitive -->

// 7 types: String, Number, Boolean, Null, Undefined, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); 

const bigNumber = 5418465125454618n


// Reference (Non-Primitive) -->

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Bhawani",
    age: 21,
}

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof bigNumber);      // --> undefined
console.log(typeof outsideTemp);    // --> object
console.log(typeof scoreValue);     // --> number
console.log(typeof anotherId);      // --> symbol

// For all non-primitive type there datatype was Function and 
// For Function type there datatype was Object Function