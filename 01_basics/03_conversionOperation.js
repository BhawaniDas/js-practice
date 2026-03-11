// let score = 33
//let score = "33"     
// let score = "33abc"  
// let score = null
let score = undefined 
//let score = true

console.log(score)
console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

console.log(valueInNumber);
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);



// ********************* Operations **********************

let value = 3
let negValue = -value

console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Bhawani"
let str3 = str1 + str2

console.log(str3);

console.log("1" + 2);         //--> 12
console.log(1 + "2");         //--> 12
console.log("1" + "2");       //--> 12
console.log("1" + 2 + 2);     //--> 122
console.log(1 + 2 + "2");     //--> 32


console.log(true);        //--> true
console.log(+true);       //--> 1
//console.log(true+);      //--> Error