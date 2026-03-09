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