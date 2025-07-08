//////////////////////////////////////////// PRIMITIVE TYPE ////////////////////////////////

// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt

let name = "Navin";
let email = null;
let userId;

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2) // result false because symbol always return unique value

const bigNumber =  9112113312341342432423432233232432441243n




//////////////////////////////////////////// REFERENCE (NON PRIMITIVE) TYPE ////////////////////////////////
// Array, Object, Functions

const Array = ["Shaktiman", "SpiderMan", "SuperMane"]
const UserDetails = {
    name: "Navin",
    age: 28,
    number: "123456677"
}


const myFunction = function() {
    console.log("Hello world")
}

console.log(typeof Array) // object 
console.log(typeof UserDetails) // object
console.log(typeof myFunction) // function
console.log(typeof id) // symbol
console.log(typeof bigNumber) // bigint
console.log(typeof email) // email value null set thats why type object showing
console.log(typeof userId) // undefine as no value define

