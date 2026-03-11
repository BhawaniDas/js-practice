// ********************* Memory (Stack vs Heap) *********************

// JavaScript uses two types of memory:
// 1. Stack Memory
// 2. Heap Memory



// ---------------------------------------------------
// Stack Memory
// ---------------------------------------------------

// Stack memory is used for Primitive Datatypes.

// Primitive Datatypes:
// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// Important Rule:
// Stack stores a COPY of the value.
// When one variable is assigned to another, the value is copied.
// Changing one variable does NOT affect the other.


let myFullName = "Bhawani Sankar Das"

let anotherName = myFullName
// anotherName gets a COPY of "Bhawani Sankar Das"

anotherName = "Ashish Das"
// here only anotherName changes, myFullName remains the same

console.log(myFullName);     // --> Bhawani Sankar Das
console.log(anotherName);    // --> Ashish Das


// Memory Visualization (Stack)

// Stack
// ---------------------------
// myFullName   → "Bhawani Sankar Das"
// anotherName  → "Ashish Das"

// Both variables store independent values.



// ---------------------------------------------------
// Heap Memory
// ---------------------------------------------------

// Heap memory is used for Non-Primitive (Reference) Types.

// Non-Primitive Types:
// Object
// Array
// Function

// Important Rule:
// Heap stores objects.
// Variables store the REFERENCE (address) of that object.

// When assigning one object variable to another,
// the REFERENCE (address) is copied, not the object itself.


let userOne = {
    email: "bhawani@gmail.com",
    upi: "bhawani@ybl"
}

// userOne variable is stored in Stack
// The actual object {email, upi} is stored in Heap
// userOne stores the address (reference) of that object


let userTwo = userOne
// userTwo now points to the SAME object in heap memory


userTwo.email = "bhawani05@gmail.com"
// The object is modified in Heap
// Since both variables point to the same object,
// the change is visible from both variables


console.log(userOne.email);    // --> bhawani05@gmail.com
console.log(userTwo.email);    // --> bhawani05@gmail.com


// Memory Visualization

// Stack                    Heap
// -------------------      ----------------------
// userOne   -----------→   { email: "bhawani@gmail.com",
//                           upi: "bhawani@ybl" }

// userTwo   -----------→   Same Object


// After modification

// { email: "bhawani05@gmail.com",
//   upi: "bhawani@ybl" }



// ---------------------------------------------------
// Golden Rule (Very Important)
// ---------------------------------------------------

// Primitive Datatypes
// → Value is copied
// → Stored in Stack Memory

// Non-Primitive Datatypes
// → Reference is copied
// → Object stored in Heap Memory



// ---------------------------------------------------
// Quick Example for Revision
// ---------------------------------------------------

// Primitive Example

let a = 10
let b = a

b = 20

console.log(a);   // --> 10
console.log(b);   // --> 20


// Object Example

let obj1 = { name: "Bhawani" }
let obj2 = obj1

obj2.name = "Ashish"

console.log(obj1.name);   // --> Ashish
console.log(obj2.name);   // --> Ashish