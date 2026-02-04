// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > null);
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);     //Here null = undefined
console.log(null == 0);    //Here null = undefined
console.log(null >= 0);   //Here null converted to 0 i.e., it prints True as output

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//In JS, comparision and equality check both r different

console.log("2" == 2);   //It will print True coz here it compares the two no.
console.log("2" === 2);   //It will print False coz here it doesnot comparision the no., it checks the Datatype of the value. Which is different one is String and the other one is Num