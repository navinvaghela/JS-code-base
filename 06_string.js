const name = "Navin"
const greeting = " Good Morning"

const concatString =  `Hello ${name},${greeting}`
// console.log(concatString)

const sampleString = new String('Navin') // string get as object

// console.log(sampleString[0]) // N
// console.log(sampleString.length) // 5 => length of string
// console.log(sampleString.charAt(3)) // i  => charAt used to find charactor 
// console.log(sampleString.indexOf('i')) // 3 => indexOf used to get index
// console.log(sampleString.toUpperCase()) // NAVIN =>
// console.log(sampleString.split("-")) // [ 'Navin', 'Vaghela' ]


// substring
// const newString = sampleString.substring(0, 6)
// const newString1 = sampleString.slice(0, 2)
// console.log('newstring1 ==== ', newString1)


// palindrom string
function isPalindrome (originalString = '') {
    const cleaned = originalString.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverceString = cleaned.split("").reverse().join("")

    if (cleaned === reverceString) {
        console.log('this is palindrom string')
    } else {
        console.log('not palindrom string')
    }

}

isPalindrome("A man, a plan, a canal: Panama")