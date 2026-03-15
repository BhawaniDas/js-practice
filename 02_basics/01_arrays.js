const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["ShaktiMan", "SpiderMan", "SuperMan"]
// const myArr1 = new Array(1, 2, 3, 4)

// console.log([myArr, myHeros, myArr1]);
// console.log([myArr[1], myHeros[1], myArr1[1]]);



//**************************** Methods *****************************/

// myArr.push(6)             // adds the no. in main Array
// myArr.push(7)
// myArr.pop()              // removes the last digit from the main Array

// myArr.unshift(9)        // adds the digit in starting 
// myArr.shift()          //  removes the starting no. from the Array

console.log(myArr);

console.log(myArr.includes(9));      // it checks the given digit in the Array

console.log(myArr.indexOf(9));      // it checks the indexing value of the given digit in the Array, if it exists it will prints it index value else it prints -1

console.log(myArr.indexOf(3));     


const newArr = myArr.join()          // it adds all the elements into a string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);




/***************************************** Slice, Splice **********************************************/

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)        // it will print the no. through index value like hear it starts from 1 index value to 3 but it will not print the existing value of index 3
console.log(myn1);


console.log("B", myArr);
const myn2 = myArr.splice(1, 3)     // it consider the lst given index also it make changes in the original Array.. (For Ex. MA - [0, 1, 2, 3, 4, 5]) after indexing the value the MA becomes [0, 4, 5] 
console.log(myn2);


console.log("C", myArr);

