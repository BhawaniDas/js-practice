const accountId = 144553
let accountEmail = "bhawanidas@4gmail.com"
var accountPassword = "12345"
accountCity = "Bbsr"
let accountState;

//accountId = 2   //not allowed

accountEmail = "bhawani@gamil.com"
accountPassword = "12354"
accountCity = "ctc"

console.log(accountId);   //used to display the output on the screen

/*
Perfer not to use var 
coz of issue in block scope and functional scope
*/


console.table([accountEmail,accountId,accountPassword,accountCity,accountState])   //by using [] we can enter all the input at a time