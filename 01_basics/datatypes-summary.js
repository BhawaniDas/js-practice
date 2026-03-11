// Primitive -->

// 7 types: String, Number, Boolean, Null, Undefined, BigInt

const score = 100           // --> number
const scoreValue = 100.3    // --> number
 
const isLoggedIn = false    // --> boolean
const outsideTemp = null    // --> object
let userEmail;              // --> undefined

const id = Symbol('123')             // --> Symbols are unique for there uniqueness
const anotherId = Symbol('123')

console.log(id === anotherId);   // --> false coz both have same no. but each Symbol is unique


const bigNumber = 5418465125454618n 

console.log(typeof bigNumber);      // --> bigint


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


console.log(typeof heros);          // --> object
console.log(typeof outsideTemp);    // --> object
console.log(typeof scoreValue);     // --> number
console.log(typeof anotherId);      // --> symbol

// For all non-primitive type there datatype was Function and 
// For Function type there datatype was Object Function