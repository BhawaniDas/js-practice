const name = "Bhawani"
const repoCount = 60

console.log(name + repoCount + " Value");     // --> Bhawani60 Value    (Old String Concatenation)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   // Modern way (JS ES6 feature)


const gameName = new String('bhaw_ani')

console.log(gameName[0]);            // --> b
console.log(gameName.__proto__);     // --> {}

console.log(gameName.length);          // --> 8
console.log(gameName.toUpperCase());   // --> BHAW_ANI but the origin string doesn't change (bhaw_ani)
                                        // Coz Strings r immutable in JS

console.log(gameName.charAt(2));         // --> a
console.log(gameName.indexOf('a'));      // --> 2

const newString = gameName.substring(0, 4)      // In substring we can't use -ve value, if we use it will ignore 
console.log(newString);            // --> bhaw

const anotherString =gameName.slice(-7, 4)     // In slice we can use -ve values
console.log(anotherString);       // --> haw

const newStringOne = "    bhawani    "
console.log(newStringOne);           // -->      bhawani    
console.log(newStringOne.trim());         // Trim removes the space from start and end  --> bhawnai

const url = "https://google.com/google%50choudhary"

console.log(url.replace('%50', '-'));

console.log(url.includes('google'));     // include checks if substring exists.
console.log(url.includes('facebook'));

console.log(gameName.split('_'));     // It split the value into array based on give data
                                  // --> ['bhaw', 'ani']