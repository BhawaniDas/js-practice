const score = 400
console.log(score);     // --> 400

const balance = new Number(100)     // This represents that i have specially denoted as new object which is Number
console.log(balance);          // --> [Number: 100]

console.log(balance.toString());    // --> 100 and we check its type it will return String

console.log(balance.toString().length);    // --> 3 coz here length of 100 is 3 (contains 3 characters) and length property only used in String function

console.log(balance.toFixed(2));      // --> 100.00, this function mostly used in E-commerence application coz when we r calculating GST values the precision value is so long and customer don't like it.. Thatswhy we use toFixed()

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));     // --> the number range should be in range between 1-21, it will return in String
                                             // --> 23.9 for 23.8966
                                             // --> 123 for 123.8966
                                             // --> 1.12e+3 for 1123.8966 after returing 3 value it will convert all other to exponential
 
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));    // --> 1o,00,000 ('en-IN' it returns the value/number in indian format)




/******************************************* MATH ************************************/

console.log(Math);    // --> Object [Math] {}

console.log(Math.abs(-4));     // Absolute value used to change the no. to -ve

console.log(Math.round(4.3));    // --> 5 it converts decimal numbers to Round number

console.log(Math.ceil(4.2));    // --> 5   ceil means it prints the top value

console.log(Math.floor(4.9));   // --> 4 fllor means it prints the lowest value

console.log(Math.min(4, 3, 6, 8));     // --> 3

console.log(Math.max(4, 3, 6, 8));     // --> 8

console.log(Math.random());     // -->  values prints in between 0 to 1, including 0 and 1

console.log((Math.random()*10) + 1); 

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min +1));

console.log(Math.floor(Math.random() * (max - min +1)) + min);