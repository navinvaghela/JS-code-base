let score  = undefined

// console.log(typeof score);

let vanueInNumber = Number(score)
 

// NaN => it is special type of javascript to check value of number or string

// console.log(typeof vanueInNumber, vanueInNumber);


// after Number convert,  type below getting 
// let score  = '33' => console.log("typeof ===>>, typeof Number(score), Number(score)) =>  33
// let score  = '33abc' => console.log("typeof ===>>, typeof Number(score), Number(score))  => NaN
// let score  = true | false => console.log("typeof ===>>, typeof Number(score), Number(score))  => 1 | 0
// let score  = null => console.log("typeof ===>>, typeof Number(score), Number(score))  => 0
// let score  = undefined =>  => console.log("typeof ===>>, typeof Number(score), Number(score)) NaN



// after Boolean Convert
// if wrtie 0 or "" then conversation show false
// if wrtie 1 or "sdfsdf" then conversation show true

// example
// 'a' => true
// '' => false
// 0 => false
// 1 => true

let isLoggedId = 0
let BooleanIsLoggedIn = Boolean(isLoggedId)
console.log(BooleanIsLoggedIn);




// string type conversation
let someNum = 22
let someString  = String(someNum)
console.log('somestring', typeof someString, someString)
