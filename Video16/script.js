

// const hello = ()=>{
//     console.log("Hi there or hello there")
// }

// setTimeout(hello,5000) // show the output after 10s 

// function getData(dataID){
// setTimeout(() => {
//     console.log(`Data = ${dataID}`)
// }, 2000);
// }

function getData(dataID, getnextData) {
    setTimeout(() => {
        console.log(`Data = ${dataID}`);
        if (getnextData) {
            getnextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2);
});