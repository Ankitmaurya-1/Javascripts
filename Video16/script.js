

// const hello = ()=>{
//     console.log("Hi there or hello there")
// }

// setTimeout(hello,5000) // show the output after 10s 

// function getData(dataID){
// setTimeout(() => {
//     console.log(`Data = ${dataID}`)
// }, 2000);
// }

// function getData(dataID, getnextData) {
//     return new Promise((resolve, reject => {
//         setTimeout(() => {
//             console.log(`Data = ${dataID}`);
//             resolve("right code ");
//             if (getnextData) {
//                 getnextData();
//             }
//         }, 5000);
//     }));
// }

// getData(1, () => {
//     getData(2);
// });

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am making a promise");
//         // resolve("Promise not done");
//         reject("Network error")
//     });

// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("resolved",res)
// })
// promise.catch((err)=>{
//     console.log("rejected!",err)
// })


// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data 2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fecting data 1..........");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     // console.log(res);
//     console.log("fecting data 2..........");
//     let p2 = asyncFunc2();
//     p2.then((res) => {                      // this is called promise chaining
//         // console.log(res);
//     });

// });

// get data fucntion

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
}

// async-await

// async function getallData() {
//     console.log("getting data 1.....");
//     await getData(1);
//     console.log("getting data 2.....");
//     await getData(2);
//     console.log("getting data 3.....");
//     await getData(3);
//     console.log("getting data 4.....");
//     await getData(4);
//     console.log("getting data 5.....");
//     await getData(5);
//     console.log("getting data 6.....");
//     await getData(6);
//     console.log("getting data 6.....");
// }
(async () => {
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);                           // IIFE are used to fucntion invoked immediately
    console.log("getting data 3.....");
    await getData(3);
    console.log("getting data 4.....");
    await getData(4);
    console.log("getting data 5.....");
    await getData(5);
    console.log("getting data 6.....");
    await getData(6);

})();

// promise chain
// WE can use .then in another .then

// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log("success");
// });