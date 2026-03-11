console.log(2 > 1);      // --> true
console.log(2 >= 1);     // --> true
console.log(2 < 1);      // --> false
console.log(2 == 1);     // --> false
console.log(2 != 1);     // --> true


console.log("2" > 1);    // --> true
console.log("2" > 1);    // --> true


console.log(null > 0);         // --> false 
console.log(null == 0);        // --> false
console.log(null >= 0);        // --> true

// null = empty value 
// Here equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to number, testing it as 0.


console.log(undefined == 0);      // --> false
console.log(undefined > 0);       // --> false
console.log(undefined < 0);       // --> false

// === --> stands for strict check means it checks both the value and datatypes.

console.log("2" === 2);       // --> false