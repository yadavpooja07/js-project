const accountId = 144553
let accountEmail = "pooja@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId=2 //nit allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accontCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
