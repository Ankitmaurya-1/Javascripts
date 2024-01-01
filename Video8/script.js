// let msg = "Hi How are you";
// function Greeting(msg) {
//     console.log(msg)
// }
// Greeting(msg)

// function sum(a,b) {
//     s = a+b;
//     return s;
// }

// Arrow Function 
// const multi = (a,b)=>{
//     // console.log(a*b)
//     return a*b
// }
// console.log(multi(5,3));

// let str = "Ankitmaurya"
function countvowels(str) {
    for (const char of str) {
        let count = 0;
        if (char === "a"||char === "e"||char ==="i"||char ==="o"||char ==="u") {
            count++
        }   
    }
    return count;
}
console.log(countvowels("ankitmaurya"));
