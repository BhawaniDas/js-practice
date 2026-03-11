// Stack --> Primitive Datatypes  and  Heap --> Non-Primitive (Reference) Types
// Stack stores a copy of the value

let myFullName = "Bhawani Sankar Das"

let anotherName = myFullName    // means here anotherName = "Bhawnai Sankar Das"
anotherName = "Ashish Das"       // here the anotherName changed to "Ashish Das"

console.log(myFullName);     // --> Bhawani Sankar Das
console.log(anotherName);   // --> Ashish Das 


// In Heap Objects r stored in Heap Memory and variables r stored reference (address)

let userOne = {
    email: "bhawani@gmail.com",
    upi: "bhawani@ybl"
}
// userOne --> Stack and email, upi --> Heap 
// userOne stores the address of the object in heap

let userTwo = userOne    // means all the data of userOne will be same as userTwo

userTwo.email = "bhawani05@gamil.com" 
//Both of the email will be change coz both variables point to the same object.

console.log(userOne.email);    // --> bhawnai05@gamail.com
console.log(userTwo.email);    // --> bhawnai05@gamail.com