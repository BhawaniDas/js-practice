// # Primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol(Used to make the value unique), BigInt

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);    //Here I want to check wheather the output will be same or not, but why i have used === for checking

// const bigNumber = 23586454115575254151n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman","Naagraj","Doga"]

let myObj = {
    name: "Bhawani",
    age: 20,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber);   //typeof tells the type of Datatype
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);
