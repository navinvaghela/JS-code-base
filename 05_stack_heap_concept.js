// Memory have two types  = Stack, Heap
// Stack (Primitive Data type) => Stack store copy of value
// Heap ( Non-primitive Data type) => Heap Store actual reference (Original value)



/// STACK EXAMPLE

let Username = "Navin"

let AnotherUsername =  Username

AnotherUsername = "Vaghela"

console.log("username", Username)

console.log("AnotherUsername", AnotherUsername)




// HEAP & STACK:

const userDetail = {
    name: "navin",
    email: "hello@yahoo.com",
    upi: "2455"
}

const newUser = userDetail

newUser.email = "navin@google.com"

console.log("newUser.email", newUser.email)
console.log("userDetail.email", userDetail.email)