const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)    // it push in the existing array, and it takes array as a data, prints array in a array
console.log(marvelHeros);

// console.log(marvelHeros[3][1]);


const allHeros = marvelHeros.concat(dcHeros)    // its returns a new array and it merge both the array proper
console.log(allHeros);    

const allNewHeros = [...marvelHeros, ...dcHeros]
console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArr = anotherArr.flat(Infinity)    // flat used to print all the mixed array in a single array
console.log(realAnotherArr);


console.log(Array.isArray("Bhawani"));    // isArray checks wheather the value is Array or not, if Array -> True else False
console.log(Array.from("Bhawani"));      // from convert the value into Array
console.log(Array.from({name: "Bhawani"}));    // interesting coz it prints -> [] coz it can't convert into Array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3) );      // of returns a new array from a set of elements