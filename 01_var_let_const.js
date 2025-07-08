var empRollNo = "1234"
let empName = "name"
const empId = 12
empSalary = 12000
let rr;


// we can change const variable value
// empId = 3333 // immutable


//we can change below variables
empRollNo = 2323
empName = "www"
empSalary = 30000


console.log('empId, empRollNo,empName,empSalary',empId, empRollNo, empName, empSalary)

console.table([empId, empRollNo,empName,empSalary, rr])

/*
  prefer to use let and const, 
  do not use var as its have no scope , its global scope and impact on block/function scope sometime
*/
