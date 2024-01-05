// // let msg = "Hi How are you";
// // function Greeting(msg) {
// //     console.log(msg)
// // }
// // Greeting(msg)

// // function sum(a,b) {
// //     s = a+b;
// //     return s;
// // }

// // Arrow Function 
// // const multi = (a,b)=>{
// //     // console.log(a*b)
// //     return a*b
// // }
// // console.log(multi(5,3));

// // let str = "Ankitmaurya"
// // function countvowels(str) {
// //     for (const char of str) {
// //         let count = 0;
// //         if (char === "a"||char === "e"||char ==="i"||char ==="o"||char ==="u") {
// //             count++
// //         }   
// //     }
// //     return count;
// // }
// console.log(countvowels("ankitmaurya"));

// let arr = [1,2,3,4,5,6,7,8]

// arr.forEach((val) => {

//     console.log(val*val)
// });
// console.log(arr)

// // map is used to create a new array and return the callback function
// // filter is used to filter an array based on condition and return new array
// let arr1 = [334,54,23,453,234,56,234,756,234,75,6];
// // let newarr = 
// let evenarr = arr1.filter((val) =>{
//     return(val % 2 === 0 )
// })
// console.log(evenarr);

// let marks = [23, 86, 97, 67, 89, 91, 93, 88, 90, 96, 93, 85, 82]
// let score = marks.filter((val) =>{
//     return val>90 ;
//     // console.log(marks)
// })
// // console.log(score )

// let n = prompt("Enter your number:- ");
// let arr = [];
// for (let i = 1; i <= n; i   ++) {
//     arr[i-1] = i;
// }
// console.log(arr);
// let pro = arr.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(pro)