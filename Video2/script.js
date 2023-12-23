// console.log("This is tutorial number 2 of js");

let a = 5;
let b = 5;
let c = "Ankit" ;// string is collection of charcters


// console.log(a + b + 5);
// console.log(typeof a,typeof b,typeof c); // type of is used to find any variables datatypes
// variables cannot be start with number/
// var is globally scoped where as let and const is blocked scoped
// const value cannot be changed
// const a1 = 5; 
// a1 = a1+5; // not allowed

// {
    // example for let using in blocked scope
//     let a = 100
//     console.log(a);
// }
// console.log(a);


// primitive datatypes are the basic set of data types in javscript 
// there are 7 primitive datatypes 
// String , number , boolean , symbol , bigint ,null , undifined

let x = 123;
let y = 234.3;
let z = "Ankit is the best"
const p = true;
let q = undefined;
let r = null;

// console.log(x,y,z,p,q,r);
// console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

// objects :- objects are the key value pairs 
let o ={
    "name":"ankit",
    "job role":"coder"
}
console.log(o);
o.salary = "100cr"; // to add new key values pairs use . operator with variavble name 
console.log(o);