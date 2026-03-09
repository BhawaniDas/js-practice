const accountId = 144553
let accountEmail = "bhawani@gmail.com"
var accountPassword = "12345"

accountCity = "Bhubaneswar"
let accountState;

// accountId = 2    --> not allowed (coz const value r fixed, it can't change)

accountEmail = "bhawani2005@gmail.com"
accountPassword = "52458546"
accountCity = "Bengaluru"

console.log(accountId);
/* 
Perfer not to use var --> coz of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])